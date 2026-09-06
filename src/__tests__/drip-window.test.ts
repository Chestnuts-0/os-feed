/**
 * 滴灌小轮窗口语义测试（GT-0906-01 连环刀）。
 *
 * 锁三件事（SCREEN_CAP=4 < 池 6 的滴灌形态）：
 * 1. 海选窗口 fresh-filter：已海选未精评的仓库不占窗，窗口每轮推进 cap 数（旧代码只推进 prose 数）；
 * 2. 未进窗仓库（cap 截断）不烧逐仓重评、也不进待补评队列——它们只是排队未轮到；
 * 3. 下轮窗口推进到上轮未进窗的仓库（滴灌链能收敛的核心）。
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import path from "node:path";
import type { RadarConfig } from "../config.ts";
import type { TrendingData } from "../trending.ts";

// 必须在 import index.ts 之前生效：index 模块加载即读环境变量
vi.hoisted(() => {
  process.env["SCREEN_CAP"] = "4";
  process.env["PROSE_TOP_K"] = "4";
  process.env["SCORING_BUDGET_MS"] = "600000";
});

// ---------------------------------------------------------------------------
// 内存文件系统（feed-pending.test.ts 同款）
// ---------------------------------------------------------------------------
const { memFs, prompts } = vi.hoisted(() => ({
  memFs: new Map<string, string>(),
  prompts: [] as string[],
}));

vi.mock("node:fs", () => ({
  default: {
    existsSync: (p: string) => memFs.has(String(p)),
    readFileSync: (p: string, _enc?: string) => {
      const k = String(p);
      if (!memFs.has(k)) throw new Error(`ENOENT: no such file '${k}'`);
      return memFs.get(k);
    },
    writeFileSync: (p: string, data: unknown) => {
      memFs.set(String(p), String(data));
    },
    mkdirSync: () => {},
    unlinkSync: (p: string) => {
      memFs.delete(String(p));
    },
  },
  existsSync: (p: string) => memFs.has(String(p)),
  readFileSync: (p: string, _enc?: string) => {
    const k = String(p);
    if (!memFs.has(k)) throw new Error(`ENOENT: no such file '${k}'`);
    return memFs.get(k);
  },
  writeFileSync: (p: string, data: unknown) => {
    memFs.set(String(p), String(data));
  },
  mkdirSync: () => {},
  unlinkSync: (p: string) => {
    memFs.delete(String(p));
  },
}));

// LLM mock：海选批（无 reason_cn）对 prompt 里点名的仓库逐个给 phase1 JSON；
// 精评批给全文案 JSON。全程记录 prompt 供窗口推进断言。
const { llmMock } = vi.hoisted(() => ({ llmMock: { impl: null as null | ((prompt: string) => string) } }));

vi.mock("../report.ts", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../report.ts")>();
  return {
    ...actual,
    callLlm: vi.fn(async (prompt: string) => {
      prompts.push(prompt);
      if (!llmMock.impl) throw new Error("llmMock.impl not set");
      return llmMock.impl(prompt);
    }),
  };
});

vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 404 })) as unknown as typeof fetch);

import { generateFeed } from "../feed/index.ts";

const cfg: RadarConfig = {
  cliRepos: [],
  skillsRepo: "",
  openclaw: { id: "", repo: "", name: "" },
  openclawPeers: [],
  bigbros: [],
  trendingTopics: [],
  starThreshold: 10,
  interests: {
    ai: 0.5,
    fun: 0.3,
    practical: 0.3,
    aiInterestsText: "AI、好玩、实用",
  },
};

/** 6 仓库池：stars 随序号递增 → 海选窗（cap 4，按星降序）= three/four/five/six，未进窗 = one/two */
function makePool(): TrendingData {
  const names = ["pool/one", "pool/two", "pool/three", "pool/four", "pool/five", "pool/six"];
  return {
    trendingRepos: names.map((fullName, i) => ({
      fullName,
      description: `描述 ${i}`,
      language: "TypeScript",
      todayStars: 5,
      totalStars: 100 + i,
      forks: 10,
      url: `https://github.com/${fullName}`,
    })),
    searchRepos: [],
    trendingFetchSuccess: true,
  };
}

/** 从 prompt 里提取点名的 owner/repo 列表（海选/精评 prompt 的行格式：`N. owner/repo — …`） */
function namedRepos(prompt: string): string[] {
  return [...prompt.matchAll(/^\s*\d+\.\s+(\S+)\s+—/gm)].map((m) => m[1]!);
}

function scoreJson(repo: string): string {
  return JSON.stringify([
    {
      repo,
      ai_dims: ["AI Agent"],
      ai_score: 0.8,
      summary_cn: "这是一个二十到三十五个字的测试摘要",
      reason_cn:
        "这是一段超过八十个字的推荐理由内容，用来满足长度要求所以需要写长一点，继续补充一些内容让这段文字变得足够长，达到八十个字以上才算合格的长度。",
      detail_cn: "详情内容",
    },
  ]);
}

function phase1Json(names: string[]): string {
  return JSON.stringify(names.map((repo) => ({ repo, ai_dims: ["AI Agent"], ai_score: 0.8 })));
}

beforeEach(() => {
  memFs.clear();
  prompts.length = 0;
  llmMock.impl = (prompt: string) => {
    const names = namedRepos(prompt);
    if (!prompt.includes("reason_cn")) return phase1Json(names);
    return names.map(scoreJson).join("");
  };
});

describe("滴灌小轮海选窗口（SCREEN_CAP=4 < 池 6）", () => {
  it("首轮：只有进窗的 4 个仓库被海选/精评；未进窗仓库不烧 LLM、不进待补评", async () => {
    const cards = await generateFeed(cfg, makePool());

    // 只产出进窗仓库的卡
    expect(cards.map((c) => c.repo).sort()).toEqual(["pool/five", "pool/four", "pool/six", "pool/three"]);
    // 所有 prompt 都不包含未进窗仓库（不烧逐仓重评）
    const all = prompts.join("\n");
    expect(all).not.toContain("pool/one");
    expect(all).not.toContain("pool/two");
    // 未进窗仓库不进待补评队列（它们不是失败，只是排队未轮到）
    expect(memFs.has(path.join("data", "pending-retry.json"))).toBe(false);
    // 海选缓存只有进窗的 4 个（two-phase.ts 的缓存路径是正斜杠字面量，不能用 path.join 读）
    const p1 = JSON.parse(memFs.get("data/phase1-scores.json")!) as Record<string, unknown>;
    expect(Object.keys(p1).sort()).toEqual(["pool/five", "pool/four", "pool/six", "pool/three"]);
  });

  it("次轮：窗口推进到上轮未进窗的仓库（fresh-filter 语义，链能收敛的核心）", async () => {
    await generateFeed(cfg, makePool());
    prompts.length = 0;

    const cards = await generateFeed(cfg, makePool());

    // 上轮未进窗的 one/two 本轮进窗并被精评；四张旧卡缓存命中零重评
    expect(cards.map((c) => c.repo).sort()).toEqual([
      "pool/five",
      "pool/four",
      "pool/one",
      "pool/six",
      "pool/three",
      "pool/two",
    ]);
    const round2 = prompts.join("\n");
    expect(round2).toContain("pool/one");
    expect(round2).toContain("pool/two");
    // 全池 6 个都有海选分
    const p1 = JSON.parse(memFs.get("data/phase1-scores.json")!) as Record<string, unknown>;
    expect(Object.keys(p1)).toHaveLength(6);
  });
});
