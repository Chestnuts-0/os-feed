/**
 * 热点提速刀（2026-09-04/05）单测：
 * 1. classifyMomentum：rising（新星）判定 + heatScore 时效热度分（涨得快 > 涨得多）
 * 2. computeScore 热度加权 heatBoost（涨星速度 / rising 两路站内信号，封顶 1+0.95）
 * 3. createLlmCaller（多源并行分摊 + 429 冷却轮转；非 429 不切源）
 *
 * 2026-09-05 拍板：外源网站信号（HN 提及等）不进算法，相关用例随 extractGithubMentions 一并移除。
 */

import { describe, it, expect, vi } from "vitest";
import { classifyMomentum } from "../feed/index.ts";
import { computeScore, heatBoost } from "../feed/personalize.ts";
import { createLlmCaller } from "../report.ts";
import type { FeedCard, UserProfile } from "../feed/types.ts";
import type { LlmProvider } from "../providers/types.ts";

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

function mkCard(overrides: Partial<FeedCard>): FeedCard {
  return {
    repo: "owner/repo",
    owner: "owner",
    name: "repo",
    desc: "a generic description",
    summaryCn: "一句话概括够二十个字以上了吗应该够了吧",
    reasonCn: "reason",
    detailCn: "detail",
    stars: 100,
    starGrowth: 0,
    language: "TypeScript",
    topics: [],
    aiDims: [],
    aiDim: "其他",
    tags: [],
    aiScore: 0.5,
    source: "trending",
    bigbros: [],
    url: "https://github.com/owner/repo",
    ts: new Date().toISOString(),
    score: 0,
    category: "tool",
    momentum: [],
    ...overrides,
  } as FeedCard;
}

function mkProfile(): UserProfile {
  return {
    interests: { ai: 0.4, fun: 0.3, practical: 0.3 },
    tagWeights: {},
    aiInterestsText: "",
    followedBigs: [],
    bookmarks: [],
    lastActiveTs: new Date().toISOString(),
  };
}

const daysAgo = (n: number): string => new Date(Date.now() - n * 24 * 3600 * 1000).toISOString();

// ---------------------------------------------------------------------------
// classifyMomentum：rising / daily 门槛 / heatScore
// ---------------------------------------------------------------------------

describe("classifyMomentum rising（新星）", () => {
  it("新库（<90天）+ 高增速（>=30）+ 未到 hot 门槛 → rising", () => {
    const r = classifyMomentum(mkCard({ stars: 800, starGrowth: 40, createdAt: daysAgo(30) }));
    expect(r.momentum).toContain("rising");
    expect(r.momentum).toContain("daily"); // 高增速同时命中 daily
  });

  it("已到 hot 门槛（总星 >= 2000）→ 不给 rising（已有 hot）", () => {
    const r = classifyMomentum(mkCard({ stars: 3000, starGrowth: 100, createdAt: daysAgo(30) }));
    expect(r.momentum).toContain("hot");
    expect(r.momentum).not.toContain("rising");
  });

  it("老库（>=90天）即使增速高也不给 rising", () => {
    const r = classifyMomentum(mkCard({ stars: 800, starGrowth: 100, createdAt: daysAgo(200) }));
    expect(r.momentum).not.toContain("rising");
    expect(r.momentum).toContain("daily");
  });

  it("增速不足（<30）不给 rising", () => {
    const r = classifyMomentum(mkCard({ stars: 800, starGrowth: 10, createdAt: daysAgo(30) }));
    expect(r.momentum).toContain("daily");
    expect(r.momentum).not.toContain("rising");
  });

  it("无 createdAt（trending HTML 来源且未被刷新轮到）不给 rising", () => {
    const r = classifyMomentum(mkCard({ stars: 800, starGrowth: 100 }));
    expect(r.momentum).not.toContain("rising");
  });
});

describe("heatScore 时效热度分（涨得快 > 涨得多）", () => {
  it("栗子的例子：1k 涨 100（10%）完胜 100k 涨 1k（1%）", () => {
    const smallFast = classifyMomentum(mkCard({ stars: 1000, starGrowth: 100 }));
    const bigSlow = classifyMomentum(mkCard({ stars: 100000, starGrowth: 1000 }));
    expect(smallFast.heatScore).toBeCloseTo(0.1 * 3 + 1 * 0.3, 5); // rel=0.1, abs 封顶
    expect(bigSlow.heatScore).toBeCloseTo(0.01 * 3 + 1 * 0.3, 5); // rel=0.01, abs 封顶
    expect(smallFast.heatScore).toBeGreaterThan(bigSlow.heatScore);
  });

  it("建仓加成：90 天内新库 ×1.5，一年内 ×1.2，老库 ×1.0", () => {
    const young = classifyMomentum(mkCard({ stars: 800, starGrowth: 40, createdAt: daysAgo(30) }));
    const mid = classifyMomentum(mkCard({ stars: 800, starGrowth: 40, createdAt: daysAgo(200) }));
    const old = classifyMomentum(mkCard({ stars: 800, starGrowth: 40 }));
    const base = (40 / 800) * 3 + Math.min(40 / 100, 1) * 0.3;
    expect(young.heatScore).toBeCloseTo(base * 1.5, 5);
    expect(mid.heatScore).toBeCloseTo(base * 1.2, 5);
    expect(old.heatScore).toBeCloseTo(base, 5);
  });

  it("超小库占比虚高被基数下限 50 压住：15 星涨 5 星排不过 1k 涨 100", () => {
    const tiny = classifyMomentum(mkCard({ stars: 15, starGrowth: 5 }));
    const solid = classifyMomentum(mkCard({ stars: 1000, starGrowth: 100 }));
    expect(tiny.heatScore).toBeCloseTo((5 / 50) * 3 + (5 / 100) * 0.3, 5);
    expect(tiny.heatScore).toBeLessThan(solid.heatScore);
  });

  it("门槛外（日均 <5 且非新星）不进每日，heatScore = 0", () => {
    const r = classifyMomentum(mkCard({ stars: 100, starGrowth: 3 }));
    expect(r.momentum).not.toContain("daily");
    expect(r.heatScore).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// heatBoost / computeScore：热度加权（站内两路信号）
// ---------------------------------------------------------------------------

describe("heatBoost 热度加权", () => {
  it("无任何热度信号的卡恒为 1", () => {
    expect(heatBoost(mkCard({}))).toBe(1);
  });

  it("涨星速度：50 星/天吃满 +35%，超出封顶", () => {
    expect(heatBoost(mkCard({ starGrowth: 50 }))).toBeCloseTo(1.35);
    expect(heatBoost(mkCard({ starGrowth: 500 }))).toBeCloseTo(1.35); // 封顶
    expect(heatBoost(mkCard({ starGrowth: 25 }))).toBeCloseTo(1.175);
  });

  it("rising：+60%", () => {
    expect(heatBoost(mkCard({ starGrowth: 40, createdAt: daysAgo(30), momentum: ["rising"] }))).toBeCloseTo(
      1 + 0.6 + 0.35 * (40 / 50),
    );
  });

  it("多信号叠加封顶 +95%", () => {
    expect(heatBoost(mkCard({ starGrowth: 50, momentum: ["rising"] }))).toBeCloseTo(1.95);
  });
});

describe("computeScore 排序上浮", () => {
  it("其他条件相同，高增速卡分数严格更高（追热点进排序）", () => {
    const plain = mkCard({});
    const hot = mkCard({ starGrowth: 60 });
    const profile = mkProfile();
    expect(computeScore(hot, profile)).toBeGreaterThan(computeScore(plain, profile));
  });

  it("其他条件相同，rising 卡分数严格更高（新库高增速强制上浮）", () => {
    const plain = mkCard({});
    const rising = mkCard({ momentum: ["rising"] });
    const profile = mkProfile();
    expect(computeScore(rising, profile)).toBeGreaterThan(computeScore(plain, profile));
  });
});

// ---------------------------------------------------------------------------
// createLlmCaller：主源 429 熔断 → 备源接管
// ---------------------------------------------------------------------------

function mkProvider(name: string, impl: (prompt: string, maxTokens: number) => Promise<string>): LlmProvider {
  return { name, call: vi.fn(impl) };
}

describe("createLlmCaller 多源并行池", () => {
  it("主源 429 重试拉满 → 冷却主源，请求落到备源；冷却期内不再碰主源", async () => {
    const err429 = Object.assign(new Error("429 too many requests"), { status: 429 });
    const primary = mkProvider("primary", () => Promise.reject(err429));
    const fallback = mkProvider("fallback", () => Promise.resolve("ok"));
    const call = createLlmCaller(primary, [() => fallback], {
      retryBaseMs: 1,
      maxRetries: 2,
      cooldownMs: 10 * 60_000, // 冷却期长于测试时长 → 期间主源不回归
    });

    await expect(call("hi")).resolves.toBe("ok");
    expect(primary.call).toHaveBeenCalledTimes(3); // 首次 + 2 次重试
    expect(fallback.call).toHaveBeenCalledTimes(1);

    // 第二次调用走备源（主源仍在冷却期）
    await expect(call("again")).resolves.toBe("ok");
    expect(primary.call).toHaveBeenCalledTimes(3);
    expect(fallback.call).toHaveBeenCalledTimes(2);
  });

  it("多源健康时并发请求轮转分摊到所有 worker（吞吐翻倍）", async () => {
    const a = mkProvider("a", (p) => Promise.resolve(`a:${p}`));
    const b = mkProvider("b", (p) => Promise.resolve(`b:${p}`));
    const call = createLlmCaller(a, [() => b], { retryBaseMs: 1, maxRetries: 1 });

    const results = await Promise.all(Array.from({ length: 6 }, (_, i) => call(`p${i}`)));
    expect(a.call).toHaveBeenCalledTimes(3);
    expect(b.call).toHaveBeenCalledTimes(3);
    expect(results).toContain("a:p0");
    expect(results).toContain("b:p1");
  });

  it("备源初始化失败（如 key 缺失）自动跳过，主源冷却到期后恢复服务", async () => {
    const err429 = Object.assign(new Error("429"), { status: 429 });
    const primary = mkProvider("primary", (p) =>
      p === "hi" ? Promise.reject(err429) : Promise.resolve("ok"),
    );
    const deadFactory = vi.fn(() => {
      throw new Error("missing api key");
    });
    const call = createLlmCaller(primary, [deadFactory], { retryBaseMs: 1, maxRetries: 1, cooldownMs: 1 });

    // 首调 429 → 主源冷却 1ms 并抛错；冷却到期后主源恢复轮转照常服务
    await expect(call("hi")).rejects.toThrow("429");
    await expect(call("later")).resolves.toBe("ok");
    expect(deadFactory).toHaveBeenCalled(); // 工厂被尝试实例化
  });

  it("非 429 错误不冷却不切源，直接抛给调用方（分段兜底负责降级）", async () => {
    const primary = mkProvider("primary", () => Promise.reject(new Error("empty response")));
    const fallback = mkProvider("fallback", () => Promise.resolve("ok"));
    const call = createLlmCaller(primary, [() => fallback], { retryBaseMs: 1, maxRetries: 2 });

    await expect(call("hi")).rejects.toThrow("empty response");
    expect(fallback.call).not.toHaveBeenCalled();
  });

  it("无备源时 429 拉满按原逻辑抛错", async () => {
    const err429 = Object.assign(new Error("429"), { status: 429 });
    const primary = mkProvider("primary", () => Promise.reject(err429));
    const call = createLlmCaller(primary, [], { retryBaseMs: 1, maxRetries: 1, cooldownMs: 1 });

    await expect(call("hi")).rejects.toThrow("429");
    expect(primary.call).toHaveBeenCalledTimes(2);
  });
});
