/**
 * LLM 评分源质量对照测试 —— 编队入队前准入门（GT-0905-05 优先级3）。
 *
 * 背景：免费编队扩容只认「官方明示长期免费」的源，且新源必须先过
 * 质量对照（栗子拍板：100 样本 vs zhipu 基准，合格才许入末端）。
 *
 * 用法（凭据一律走环境变量/.env，脚本零 key）：
 *   npx tsx scripts/llm-quality-test.mts --provider pollinations --samples 100
 *   npx tsx scripts/llm-quality-test.mts --provider zhipu --samples 100
 *   npx tsx scripts/llm-quality-test.mts --provider custom:千帆slug --samples 100
 *
 * 做什么：从 data/feed.json 等距抽 N 个真实项目（确定性 stride，两次运行
 * 抽到同一批，跨源可对比），按生产同款 BATCH_SIZE=5 组批、生产同款
 * buildFeedScoringPrompt 喂给指定源，逐批解析并产出质量指标：
 *   解析率 / summary 20-35字达标率 / reason effLen≥100 达标率 /
 *   detail 中位长度 / 维度合法率 / 分数分布（退化检测）/ 批时延 / 错误清单。
 * 结果 JSON 落盘 --out 目录，供跨源对比（分数 Pearson 相关等）二次分析。
 */

import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { buildFeedScoringPrompt, parseScoringResult, AI_DIMS } from "../src/feed/prompts.ts";
import { effLen } from "../src/feed/index.ts";
import { createProvider } from "../src/providers/index.ts";
import type { RepoForScoring } from "../src/feed/types.ts";

// ---------------------------------------------------------------------------
// 参数解析
// ---------------------------------------------------------------------------

function arg(name: string, fallback?: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

const providerArg = arg("provider", "pollinations")!;
const samples = Number(arg("samples", "100"));
const batchSize = Number(arg("batch", "5")); // 与生产 BATCH_SIZE 同款
const modelOverride = arg("model");
const batchDelayMs = Number(arg("delay", providerArg === "zhipu" ? "1000" : "5000"));
const outDir = arg(
  "out",
  `D:/AI/RESEARCH/2026-09-05-新源质量对照/${providerArg.replace(/[^a-z0-9-]/gi, "_")}`,
)!;
const maxTokens = Number(arg("max-tokens", "8192")); // 与生产 callLlm 同额（截断率本身是质量指标）

// ---------------------------------------------------------------------------
// 取样：data/feed.json 确定性等距抽 N 卡
// ---------------------------------------------------------------------------

const feed = JSON.parse(fs.readFileSync("data/feed.json", "utf-8")) as Array<Record<string, unknown>>;
const stride = Math.max(1, Math.floor(feed.length / samples));
const picked: RepoForScoring[] = [];
for (let i = 0; i < feed.length && picked.length < samples; i += stride) {
  const c = feed[i] as Record<string, unknown>;
  picked.push({
    repo: String(c.repo ?? ""),
    description: String(c.desc ?? ""),
    stars: Number(c.stars ?? 0),
    language: String(c.language ?? ""),
    topics: Array.isArray(c.topics) ? (c.topics as string[]).map(String) : [],
  });
}
console.log(
  `[quality] feed=${feed.length} 张卡，stride=${stride}，抽样 ${picked.length} 个，批大小 ${batchSize}（共 ${Math.ceil(picked.length / batchSize)} 批）`,
);

const AI_INTERESTS_TEXT = "AI、好玩的、实用的、各行各业的开源项目都想看"; // 与 config.yml ai_interests_text 同源

// ---------------------------------------------------------------------------
// 源调用：zhipu / custom:xxx 走 provider 工厂；pollinations 直连 OpenAI 兼容端点
// ---------------------------------------------------------------------------

interface RawCallResult {
  text: string;
  latencyMs: number;
  error?: string;
}

async function callProvider(prompt: string): Promise<RawCallResult> {
  const t0 = Date.now();
  if (providerArg === "pollinations") {
    const res = await fetch("https://text.pollinations.ai/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: modelOverride ?? "openai",
        messages: [{ role: "user", content: prompt }],
        max_tokens: maxTokens,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status}: ${body.slice(0, 200)}`);
    }
    const json = (await res.json()) as {
      choices?: Array<{ message?: { content?: string | null; reasoning?: string | null } }>;
    };
    const msg = json.choices?.[0]?.message;
    const text = msg?.content ?? "";
    // 思考型源常见病：content 空、内容全在 reasoning 字段（OpenRouter :free 之鉴）
    if (!text && msg?.reasoning) {
      return {
        text: "",
        latencyMs: Date.now() - t0,
        error: "content 为空且存在 reasoning 字段（思考型空转）",
      };
    }
    return { text, latencyMs: Date.now() - t0 };
  }
  // zhipu / custom:slug / 其他注册源：走工厂（zhipu 自带 thinking disabled）
  const provider = createProvider(providerArg, modelOverride);
  const text = await provider.call(prompt, maxTokens);
  return { text, latencyMs: Date.now() - t0 };
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function callWithRetry(prompt: string, batchNum: number): Promise<RawCallResult> {
  const backoffs = [20_000, 40_000, 80_000]; // 免费源限流为分钟级窗口，短退避盖不住
  for (let attempt = 0; ; attempt++) {
    try {
      return await callProvider(prompt);
    } catch (err) {
      const msg = String(err instanceof Error ? err.message : err);
      const retryable = /HTTP 4|fetch failed|timeout|network/i.test(msg);
      if (!retryable || attempt >= backoffs.length) {
        return { text: "", latencyMs: 0, error: msg };
      }
      console.log(
        `  [quality] 批 ${batchNum} 第 ${attempt + 1} 次失败（${msg.slice(0, 80)}），${backoffs[attempt] / 1000}s 后重试`,
      );
      await sleep(backoffs[attempt]);
    }
  }
}

// ---------------------------------------------------------------------------
// 跑批 + 指标
// ---------------------------------------------------------------------------

interface BatchRecord {
  batch: number;
  repos: string[];
  latencyMs: number;
  error?: string;
  raw?: string;
  parsedRepos: Array<{
    repo: string;
    aiDims: string[];
    aiScore: number;
    summaryLen: number;
    reasonEffLen: number;
    detailLen: number;
    dimsValid: boolean;
    summaryOk: boolean;
    reasonOk: boolean;
  }>;
}

const batches: BatchRecord[] = [];
for (let i = 0; i < picked.length; i += batchSize) {
  const batch = picked.slice(i, i + batchSize);
  const batchNum = Math.floor(i / batchSize) + 1;
  const prompt = buildFeedScoringPrompt(batch, AI_INTERESTS_TEXT);
  const t0 = Date.now();
  const r = await callWithRetry(prompt, batchNum);
  const parsed = r.text ? parseScoringResult(r.text) : [];
  const rec: BatchRecord = {
    batch: batchNum,
    repos: batch.map((b) => b.repo),
    latencyMs: r.latencyMs || Date.now() - t0,
    ...(r.error ? { error: r.error } : {}),
    ...(r.text ? { raw: r.text } : {}),
    parsedRepos: parsed.map((p) => ({
      repo: p.repo,
      aiDims: p.aiDims,
      aiScore: p.aiScore,
      summaryLen: p.summaryCn.length,
      reasonEffLen: Math.round(effLen(p.reasonCn)),
      detailLen: p.detailCn.length,
      dimsValid: p.aiDims.length > 0 && p.aiDims.every((d) => (AI_DIMS as readonly string[]).includes(d)),
      summaryOk: p.summaryCn.length >= 20 && p.summaryCn.length <= 35,
      reasonOk: effLen(p.reasonCn) >= 100,
    })),
  };
  batches.push(rec);
  console.log(
    `  [quality] 批 ${batchNum}/${Math.ceil(picked.length / batchSize)}: ${parsed.length}/${batch.length} 解析` +
      `${r.error ? ` ERROR=${r.error.slice(0, 60)}` : ""} ${((r.latencyMs || Date.now() - t0) / 1000).toFixed(1)}s`,
  );
  if (i + batchSize < picked.length) await sleep(batchDelayMs);
}

// ---------------------------------------------------------------------------
// 汇总指标
// ---------------------------------------------------------------------------

const all = batches.flatMap((b) => b.parsedRepos);
const uniqRepos = new Set(all.map((p) => p.repo));
const errors = batches.filter((b) => b.error);
const latencies = batches.filter((b) => !b.error).map((b) => b.latencyMs);
const scores = all.map((p) => p.aiScore);
const mean = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
const std =
  scores.length > 1 ? Math.sqrt(scores.reduce((a, s) => a + (s - mean) ** 2, 0) / (scores.length - 1)) : 0;
const median = (arr: number[]): number => {
  const s = [...arr].sort((a, b) => a - b);
  return s.length ? s[Math.floor(s.length / 2)]! : 0;
};

const summary = {
  provider: providerArg,
  model: modelOverride ?? "(默认)",
  samples: picked.length,
  batches: batches.length,
  parseRate: +(uniqRepos.size / picked.length).toFixed(3),
  errorBatches: errors.length,
  errorSamples: errors.map((e) => ({ batch: e.batch, error: (e.error ?? "").slice(0, 120) })),
  contentEmptyBatches: batches.filter((b) => !b.error && (!b.raw || b.raw.trim() === "")).length,
  summaryOkRate: +(all.filter((p) => p.summaryOk).length / Math.max(1, all.length)).toFixed(3),
  reasonOkRate: +(all.filter((p) => p.reasonOk).length / Math.max(1, all.length)).toFixed(3),
  dimsValidRate: +(all.filter((p) => p.dimsValid).length / Math.max(1, all.length)).toFixed(3),
  detailLenMedian: median(all.map((p) => p.detailLen)),
  scoreMean: +mean.toFixed(3),
  scoreStd: +std.toFixed(3),
  scoreDistinct: new Set(scores.map((s) => +s.toFixed(2))).size,
  latencyAvgSec: latencies.length
    ? +(latencies.reduce((a, b) => a + b, 0) / latencies.length / 1000).toFixed(1)
    : 0,
  latencyMaxSec: latencies.length ? +(Math.max(...latencies) / 1000).toFixed(1) : 0,
};

fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `${providerArg.replace(/[^a-z0-9-]/gi, "_")}-${picked.length}.json`);
fs.writeFileSync(outFile, JSON.stringify({ summary, batches }, null, 2), "utf-8");

console.log("\n===== 质量指标摘要 =====");
for (const [k, v] of Object.entries(summary)) {
  if (k === "errorSamples" && Array.isArray(v)) {
    console.log(`  ${k}: ${v.length} 条`);
    for (const e of v.slice(0, 5))
      console.log(`    批${(e as { batch: number }).batch}: ${(e as { error: string }).error}`);
  } else {
    console.log(`  ${k}: ${v}`);
  }
}
console.log(`\n结果已落盘: ${outFile}`);
