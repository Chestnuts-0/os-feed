/**
 * LLM invocation, file I/O, and GitHub issue creation helpers.
 */

import fs from "node:fs";
import path from "node:path";
import { type Lang, FOOTER } from "./i18n.ts";
import { sleep } from "./date.ts";

// ---------------------------------------------------------------------------
// LLM token budget constants
// ---------------------------------------------------------------------------

export const LLM_TOKENS_DEFAULT = 4096;
export const LLM_TOKENS_TRENDING = 6144;
export const LLM_TOKENS_WEB = 8192;
export const LLM_TOKENS_ROLLUP = 8192;
import { type LlmProvider, type ProviderName, createProvider } from "./providers/index.ts";

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

const LLM_CONCURRENCY = 1; // 智谱免费档限流紧（账户速率限制+模型级高峰），串行最稳
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 30_000; // 30 s, 60 s, 120 s — 免费模型限流为分钟级窗口（智谱 1305 实测），15s 级退避盖不住

/** 备源环境变量名：逗号分隔 provider 名单，主源 429 熔断后按序接管（CI 配 LLM_FALLBACKS=agnes） */
const FALLBACK_ENV = "LLM_FALLBACKS";

/** 解析备源名单（惰性实例化：备源 key 缺失只在真正切换时才报错，不影响无备源的本地运行） */
function parseFallbackFactories(): Array<() => LlmProvider> {
  return (process.env[FALLBACK_ENV] ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((name) => () => createProvider(name as ProviderName));
}

export function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

/**
 * 带主源熔断 + 备源接管的 LLM 调用器（2026-09-04 digest 复活刀）。
 *
 * 背景：智谱免费档高峰 429 code 1305 为分钟级窗口，重试拉满仍失败会把整个
 * digest job 拖到超时（08-20 起停摆根因）。主源 429 重试耗尽 → 熔断主源，
 * 本轮余下调用全部切下一备源（不回切，下轮运行重新从主源开始）；备源初始化
 * 失败（如 key 缺失）自动跳到再下一个。并发槽位全局共享，切源不影响串行限流。
 */
export function createLlmCaller(
  primary: LlmProvider,
  fallbackFactories: Array<() => LlmProvider>,
  opts?: { retryBaseMs?: number; maxRetries?: number },
): (prompt: string, maxTokens?: number) => Promise<string> {
  const retryBaseMs = opts?.retryBaseMs ?? RETRY_BASE_MS;
  const maxRetries = opts?.maxRetries ?? MAX_RETRIES;
  const pool = [...fallbackFactories];
  let provider = primary;

  return async function callLlm(prompt: string, maxTokens = LLM_TOKENS_DEFAULT): Promise<string> {
    for (let attempt = 0; ; attempt++) {
      await acquireSlot();
      let released = false;
      try {
        return await provider.call(prompt, maxTokens);
      } catch (err) {
        if (attempt < maxRetries && is429(err)) {
          releaseSlot();
          released = true;
          const wait = retryBaseMs * 2 ** attempt;
          console.error(
            `[llm] ${provider.name} 429 — retry ${attempt + 1}/${maxRetries} in ${wait / 1000}s...`,
          );
          await sleep(wait);
          continue;
        }
        // 429 重试拉满仍失败 → 熔断当前源切备源（重试计数对新源重新开始）
        if (is429(err) && pool.length > 0) {
          let switched = false;
          while (pool.length > 0 && !switched) {
            try {
              provider = pool.shift()!();
              switched = true;
              console.error(
                `[llm] primary exhausted by 429 — switching to ${provider.name} for the rest of this run`,
              );
            } catch (initErr) {
              console.error(`[llm] fallback init failed, trying next: ${initErr}`);
            }
          }
          if (switched) {
            attempt = -1;
            continue;
          }
        }
        throw err;
      } finally {
        if (!released) releaseSlot();
      }
    }
  };
}

const callLlmImpl = createLlmCaller(createProvider(), parseFallbackFactories());

/** digest 全管道统一 LLM 入口（主源 + LLM_FALLBACKS 备源熔断接管） */
export async function callLlm(prompt: string, maxTokens = LLM_TOKENS_DEFAULT): Promise<string> {
  return callLlmImpl(prompt, maxTokens);
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: Lang = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return `\n\n---\n*${FOOTER.autoGen[lang]} [GitTok](https://github.com/${digestRepo})${lang === "en" ? "." : " 自动生成。"}*`;
}
