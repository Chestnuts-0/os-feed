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
import { type LlmProvider, createProvider } from "./providers/index.ts";

// ---------------------------------------------------------------------------
// LLM worker pool — 多免费源并行分摊（2026-09-04 栗子拍板）
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 30_000; // 30 s, 60 s, 120 s — 免费模型限流为分钟级窗口（智谱 1305 实测），15s 级退避盖不住
const COOLDOWN_MS = 5 * 60_000; // 429 重试拉满后该源冷却 5 分钟，期间请求分摊给其余源，到期自动回归轮转

/** 备源环境变量名：逗号分隔 provider 名单，与主源一起并行分摊负载（CI 配 LLM_FALLBACKS=agnes） */
const FALLBACK_ENV = "LLM_FALLBACKS";

/** 解析备源名单为工厂数组（实例化在 createLlmCaller 内做，失败自动跳过该源）。
 *  支持：
 *  - `源@模型`：覆盖默认模型（同 key 多模型=模型级配额叠加，groq/gemini/siliconflow 等）
 *  - `custom:名字`：泛化 OpenAI 兼容源（{NAME}_API_KEY/BASE_URL/MODEL + SSRF 校验）
 *  - 多 key 轮转：{NAME}_API_KEY 逗号分隔多 key，同名条目按出现序号取号
 *    （Groq/Gemini/HF 多账号=真乘法；OpenRouter 全局池无效）
 */
function parseFallbackFactories(): Array<() => LlmProvider> {
  const sameNameCount = new Map<string, number>();
  return (process.env[FALLBACK_ENV] ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((entry) => {
      // 拆 `源[@模型]`（custom:名字 也可带 @模型）
      let name = entry;
      let model: string | undefined;
      const at = entry.indexOf("@");
      if (at > 0) {
        name = entry.slice(0, at);
        model = entry.slice(at + 1);
      }
      // 多 key 轮转：{NAME}_API_KEY 逗号分隔，同名第 N 次出现取第 N 个 key
      const envName = (name.startsWith("custom:") ? name.slice(7) : name)
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "_");
      const keys = (process.env[`${envName}_API_KEY`] ?? "")
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);
      const idx = sameNameCount.get(name) ?? 0;
      sameNameCount.set(name, idx + 1);
      const apiKey = keys.length > 0 ? keys[idx % keys.length] : undefined;
      return () => createProvider(name, model, apiKey);
    });
}

export function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

/** 单个 LLM worker：一条串行调用链（免费源各自限流，源内不并发）+ 429 冷却截止时间 */
interface LlmWorker {
  name: string;
  call: (prompt: string, maxTokens: number) => Promise<string>;
  queue: Promise<unknown>;
  cooldownUntil: number;
}

function makeWorker(provider: LlmProvider): LlmWorker {
  return {
    name: provider.name,
    call: (prompt, maxTokens) => provider.call(prompt, maxTokens),
    queue: Promise.resolve(),
    cooldownUntil: 0,
  };
}

/**
 * 多源并行 LLM 调用器（2026-09-04 升级：备源从「故障接管」升级为「全程并行分摊」）。
 *
 * 背景：智谱免费档高峰 429 code 1305 为分钟级窗口，单源串行（LLM_CONCURRENCY=1）
 * 是 08-20 停摆的根因之一。现在主源 + LLM_FALLBACKS 备源组成 worker 池：
 * 请求轮转分摊到所有健康 worker（吞吐 ≈ N×单源），每个 worker 内部串行 +
 * 429 指数退避，重试拉满仍 429 → 该源冷却 5 分钟（期间负载自动落到其余源，
 * 到期回归轮转）；非 429 错误直接抛给调用方（由 safeLlm/scoreBatched 降级重试）。
 */
export function createLlmCaller(
  primary: LlmProvider,
  fallbackFactories: Array<() => LlmProvider>,
  opts?: { retryBaseMs?: number; maxRetries?: number; cooldownMs?: number },
): (prompt: string, maxTokens?: number) => Promise<string> {
  const retryBaseMs = opts?.retryBaseMs ?? RETRY_BASE_MS;
  const maxRetries = opts?.maxRetries ?? MAX_RETRIES;
  const cooldownMs = opts?.cooldownMs ?? COOLDOWN_MS;

  // 主源立即入池；备源实例化失败（如 key 缺失）跳过该源，不影响其余 worker
  const workers: LlmWorker[] = [];
  try {
    workers.push(makeWorker(primary));
  } catch (err) {
    console.error(`[llm] primary init failed: ${err}`);
  }
  for (const factory of fallbackFactories) {
    try {
      workers.push(makeWorker(factory()));
    } catch (err) {
      console.error(`[llm] fallback init failed, skipping: ${err}`);
    }
  }

  if (workers.length === 0) throw new Error("no usable LLM provider");

  let rrCursor = 0; // 轮转游标：健康源之间 round-robin 分摊

  /** 选 worker：优先健康源轮转；全冷却时选冷却最早结束的（乐观重试，冷却只是调度偏好非硬墙） */
  const pickWorker = (): LlmWorker => {
    for (let i = 0; i < workers.length; i++) {
      const w = workers[(rrCursor + i) % workers.length]!;
      if (w.cooldownUntil <= Date.now()) {
        rrCursor = (rrCursor + i + 1) % workers.length;
        return w;
      }
    }
    let best = workers[0]!;
    for (const w of workers) if (w.cooldownUntil < best.cooldownUntil) best = w;
    return best;
  };

  /** 单 worker 内执行一次调用：源内指数退避重试，拉满 429 → 冷却并抛出 */
  const runOnWorker = async (w: LlmWorker, prompt: string, maxTokens: number): Promise<string> => {
    for (let attempt = 0; ; attempt++) {
      try {
        return await w.call(prompt, maxTokens);
      } catch (err) {
        if (attempt < maxRetries && is429(err)) {
          const wait = retryBaseMs * 2 ** attempt;
          console.error(`[llm] ${w.name} 429 — retry ${attempt + 1}/${maxRetries} in ${wait / 1000}s...`);
          await sleep(wait);
          continue;
        }
        if (is429(err)) {
          w.cooldownUntil = Date.now() + cooldownMs;
          console.error(
            `[llm] ${w.name} 429 exhausted — cooling down ${cooldownMs / 1000}s, load shifts to other providers`,
          );
        }
        throw err;
      }
    }
  };

  return async function callLlm(prompt: string, maxTokens = LLM_TOKENS_DEFAULT): Promise<string> {
    let lastErr: unknown;
    const tried = new Set<LlmWorker>();
    for (;;) {
      const w = pickWorker();
      if (tried.has(w)) throw lastErr; // 所有 worker 都试过仍 429 → 抛给上层（safeLlm/scoreBatched 兜底）
      tried.add(w);
      const task = w.queue.then(() => runOnWorker(w, prompt, maxTokens));
      // 链上吞掉 rejection 让串行链不断（错误由返回的 task 交给调用方）
      w.queue = task.then(
        () => undefined,
        () => undefined,
      );
      try {
        return await task;
      } catch (err) {
        lastErr = err;
        if (!is429(err)) throw err; // 非 429 不换源，直接抛
        // 429：该 worker 已被 runOnWorker 冷却，下一轮换其余 worker
      }
    }
  };
}

const callLlmImpl = createLlmCaller(createProvider(), parseFallbackFactories());

/** digest 全管道统一 LLM 入口（主源 + LLM_FALLBACKS 并行分摊 + 429 冷却轮转） */
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
