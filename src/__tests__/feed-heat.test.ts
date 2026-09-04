/**
 * 热点提速刀（2026-09-04）单测：
 * 1. classifyMomentum 新增 rising（刚冒头）/ on-hn（HN 提及）判定
 * 2. computeScore 热度加权 heatBoost（涨星速度 / rising / HN 三信号，封顶 1+1.2）
 * 3. extractGithubMentions（HN 外链 → GitHub repo 提及解析）
 * 4. createLlmCaller（主源 429 熔断 → 备源接管；非 429 不切源）
 */

import { describe, it, expect, vi } from "vitest";
import { classifyMomentum } from "../feed/index.ts";
import { computeScore, heatBoost } from "../feed/personalize.ts";
import { extractGithubMentions, type HnStory } from "../hn.ts";
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

function mkStory(overrides: Partial<HnStory>): HnStory {
  return {
    id: "1",
    title: "A repo",
    url: "https://example.com",
    hnUrl: "https://news.ycombinator.com/item?id=1",
    points: 10,
    comments: 5,
    author: "someone",
    createdAt: new Date().toISOString(),
    ...overrides,
  };
}

const daysAgo = (n: number): string => new Date(Date.now() - n * 24 * 3600 * 1000).toISOString();

// ---------------------------------------------------------------------------
// classifyMomentum：rising / on-hn
// ---------------------------------------------------------------------------

describe("classifyMomentum rising（刚冒头）", () => {
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

describe("classifyMomentum on-hn（HN 提及）", () => {
  it("带 hn 提及 → on-hn", () => {
    const r = classifyMomentum(
      mkCard({
        stars: 100,
        hn: { points: 55, comments: 20, title: "t", hnUrl: "https://news.ycombinator.com/item?id=9" },
      }),
    );
    expect(r.momentum).toContain("on-hn");
  });

  it("无 hn 提及 → 无 on-hn", () => {
    const r = classifyMomentum(mkCard({ stars: 3000 }));
    expect(r.momentum).not.toContain("on-hn");
  });
});

// ---------------------------------------------------------------------------
// heatBoost / computeScore：热度加权
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

  it("HN 提及：100 points 吃满 +40%", () => {
    expect(heatBoost(mkCard({ hn: { points: 100, comments: 50, title: "t", hnUrl: "u" } }))).toBeCloseTo(1.4);
    expect(heatBoost(mkCard({ hn: { points: 300, comments: 50, title: "t", hnUrl: "u" } }))).toBeCloseTo(1.4); // 封顶
  });

  it("多信号叠加封顶 +120%", () => {
    expect(
      heatBoost(
        mkCard({
          starGrowth: 50,
          momentum: ["rising"],
          hn: { points: 100, comments: 50, title: "t", hnUrl: "u" },
        }),
      ),
    ).toBeCloseTo(2.2);
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

  it("其他条件相同，HN 提及卡分数严格更高", () => {
    const plain = mkCard({});
    const mentioned = mkCard({ hn: { points: 80, comments: 30, title: "t", hnUrl: "u" } });
    const profile = mkProfile();
    expect(computeScore(mentioned, profile)).toBeGreaterThan(computeScore(plain, profile));
  });
});

// ---------------------------------------------------------------------------
// extractGithubMentions：HN 外链 → GitHub repo
// ---------------------------------------------------------------------------

describe("extractGithubMentions", () => {
  it("github.com 外链解析出 owner/repo", () => {
    const m = extractGithubMentions([mkStory({ url: "https://github.com/vercel/next.js" })]);
    expect(m.get("vercel/next.js")).toEqual({
      points: 10,
      comments: 5,
      title: "A repo",
      hnUrl: "https://news.ycombinator.com/item?id=1",
    });
  });

  it("子路径（/tree//blob）与 www、.git 后缀都算提及", () => {
    const m = extractGithubMentions([
      mkStory({ url: "https://github.com/owner/repo/tree/main/docs" }),
      mkStory({ id: "2", url: "https://www.github.com/owner2/repo2.git" }),
    ]);
    expect(m.has("owner/repo")).toBe(true);
    expect(m.has("owner2/repo2")).toBe(true);
  });

  it("非 GitHub 外链与 HN 站内链接跳过", () => {
    const m = extractGithubMentions([
      mkStory({ url: "https://news.ycombinator.com/item?id=1" }),
      mkStory({ id: "2", url: "https://gitlab.com/owner/repo" }),
      mkStory({ id: "3", url: "https://github.com/explore" }), // 单段路径不算 repo
    ]);
    expect(m.size).toBe(0);
  });

  it("同一 repo 多条 story 保留 points 最高的一条", () => {
    const m = extractGithubMentions([
      mkStory({ url: "https://github.com/owner/repo", points: 10 }),
      mkStory({ id: "2", url: "https://github.com/owner/repo", points: 99, comments: 80 }),
    ]);
    expect(m.get("owner/repo")?.points).toBe(99);
    expect(m.get("owner/repo")?.comments).toBe(80);
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
