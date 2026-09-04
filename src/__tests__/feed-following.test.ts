import { describe, it, expect, vi, beforeEach } from "vitest";
import path from "node:path";
import type { RadarConfig } from "../config.ts";
import type { TrendingData } from "../trending.ts";

// ---------------------------------------------------------------------------
// 内存文件系统：generateFeed 全程读写 data/ 下的文件，mock 后不碰真实文件
// ---------------------------------------------------------------------------
const { memFs } = vi.hoisted(() => ({ memFs: new Map<string, string>() }));

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
}));

// LLM 调用 mock：默认未设 impl 即抛错——盖章语义下基线缓存命中绝不应触发评分
const { llmMock } = vi.hoisted(() => ({ llmMock: { impl: null as null | ((prompt: string) => string) } }));

vi.mock("../report.ts", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../report.ts")>();
  return {
    ...actual,
    callLlm: vi.fn(async (prompt: string) => {
      if (!llmMock.impl) throw new Error("llmMock.impl not set");
      return llmMock.impl(prompt);
    }),
  };
});

// fetch mock：记录全部调用 URL（断言「哪些接口没被打」），按测试给路由实现
const { fetchMock } = vi.hoisted(() => ({
  fetchMock: { impl: null as null | ((url: string) => Promise<unknown>), calls: [] as string[] },
}));

vi.stubGlobal(
  "fetch",
  vi.fn(async (url: unknown) => {
    const u = String(url);
    fetchMock.calls.push(u);
    if (fetchMock.impl) return fetchMock.impl(u);
    return { ok: false, status: 404 };
  }) as unknown as typeof fetch,
);

import { generateFeed } from "../feed/index.ts";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

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

function makeTrendingData(repos: string[]): TrendingData {
  return {
    trendingRepos: repos.map((r, i) => ({
      fullName: r,
      description: `描述 ${i}`,
      language: "TypeScript",
      todayStars: 5,
      totalStars: 100 + i,
      forks: 10,
      url: `https://github.com/${r}`,
    })),
    searchRepos: [],
    trendingFetchSuccess: true,
  };
}

/** 构造一张评分完整的旧卡（baseline 用，缓存命中后不评分直接输出） */
function makeOldCard(repo: string, bigbros: string[] = []): Record<string, unknown> {
  const [owner, ...nameParts] = repo.split("/");
  return {
    repo,
    owner,
    name: nameParts.join("/"),
    desc: "旧卡描述",
    summaryCn: "这是一个二十到三十五个字的测试摘要",
    reasonCn:
      "这是一段超过八十个字的推荐理由内容，用来满足长度要求所以需要写长一点，继续补充一些内容让这段文字变得足够长，达到八十个字以上才算合格的长度。",
    detailCn: "详情内容",
    stars: 500,
    starGrowth: 0,
    language: "TypeScript",
    topics: ["llm"],
    aiDims: ["AI Agent"],
    aiDim: "AI Agent",
    tags: [{ name: "AI Agent", weight: 0.5 }],
    aiScore: 0.8,
    source: "trending",
    bigbros,
    url: `https://github.com/${repo}`,
    ts: "2026-08-07T00:00:00.000Z",
    score: 0.5,
    category: "tool",
    momentum: ["hot"],
  };
}

function feedPath(): string {
  return path.join("data", "feed.json");
}
function followingPath(): string {
  return path.join("data", "following.json");
}
function stampedPath(): string {
  return path.join("data", "stamped-owners.json");
}

function readJson<T>(p: string): T | null {
  const raw = memFs.get(p);
  if (raw === undefined) return null;
  return JSON.parse(raw) as T;
}

/** 盖章接口路由：/rate_limit + /users/{login} + /users/{login}/starred；/repos/ 一律 404（轮转刷新跳过） */
function stampFetch(opts: {
  quotaRemaining?: number;
  users?: Record<string, string>;
  starred?: Record<string, string[]>;
}): void {
  fetchMock.impl = async (url: string) => {
    if (url.includes("/rate_limit")) {
      if (opts.quotaRemaining === undefined) return { ok: false, status: 404 };
      return {
        ok: true,
        status: 200,
        json: async () => ({ resources: { core: { remaining: opts.quotaRemaining } } }),
      };
    }
    const typeMatch = url.match(/\/users\/([^/]+)$/);
    if (typeMatch) {
      const login = decodeURIComponent(typeMatch[1]!);
      const type = opts.users?.[login];
      if (type === undefined) return { ok: false, status: 404 };
      return { ok: true, status: 200, json: async () => ({ login, type }) };
    }
    const starMatch = url.match(/\/users\/([^/]+)\/starred/);
    if (starMatch) {
      const login = decodeURIComponent(starMatch[1]!);
      const repos = opts.starred?.[login];
      if (repos === undefined) return { ok: false, status: 404 };
      return {
        ok: true,
        status: 200,
        json: async () => repos.map((full_name) => ({ full_name })),
      };
    }
    return { ok: false, status: 404 };
  };
}

beforeEach(() => {
  memFs.clear();
  llmMock.impl = null;
  fetchMock.impl = null;
  fetchMock.calls.length = 0;
});

// ---------------------------------------------------------------------------
// 关注解耦（2026-09-01）：库内 star 盖章语义
// ---------------------------------------------------------------------------

describe("库内 star 盖章", () => {
  it("盖章只改库内已有卡：加 bigbros，不新增卡、不跑 LLM", async () => {
    memFs.set(feedPath(), JSON.stringify([makeOldCard("old/card1")]));
    stampFetch({
      quotaRemaining: 5000,
      users: { old: "User" },
      starred: { old: ["old/card1", "outside/repo"] },
    });

    const cards = await generateFeed(cfg, makeTrendingData([]));

    // 卡数不变（库外 star outside/repo 不建卡）
    expect(cards).toHaveLength(1);
    const card = cards.find((c) => c.repo === "old/card1")!;
    expect(card).toBeDefined();
    // 盖章生效：owner star 了库内 repo → bigbros 记上
    expect(card.bigbros).toEqual(["old"]);
    // 全管道零 LLM 评分（缓存命中 + 盖章不跑 LLM）
    expect(llmMock.impl).toBeNull();
    // 全部卡无 source=bigbro 新卡路径
    expect(cards.every((c) => c.source !== "bigbro")).toBe(true);
  });

  it("Organization owner 跳过：不查 star、不盖章、状态记 org", async () => {
    memFs.set(feedPath(), JSON.stringify([makeOldCard("microsoft/vscode")]));
    stampFetch({ quotaRemaining: 5000, users: { microsoft: "Organization" } });

    const cards = await generateFeed(cfg, makeTrendingData([]));

    const card = cards.find((c) => c.repo === "microsoft/vscode")!;
    expect(card.bigbros).toEqual([]);
    // 只打了 rate_limit + type 两个接口，没打 starred
    expect(fetchMock.calls.some((u) => u.includes("/starred"))).toBe(false);
    const state = readJson<{ users: Record<string, string> }>(stampedPath());
    expect(state?.users["microsoft"]).toBe("org");
  });

  it("状态文件增量：已盖章 owner 二轮不再查（防每日重复烧配额）", async () => {
    memFs.set(feedPath(), JSON.stringify([makeOldCard("old/card1")]));
    stampFetch({
      quotaRemaining: 5000,
      users: { old: "User" },
      starred: { old: ["old/card1"] },
    });

    await generateFeed(cfg, makeTrendingData([]));
    const state = readJson<{ users: Record<string, string>; updated: string }>(stampedPath());
    expect(state?.users["old"]).toBe("stamped");
    expect(state?.updated.length).toBeGreaterThan(0);

    // 第二轮：状态文件里已有 old → 不再打任何 /users/ 接口
    fetchMock.calls.length = 0;
    await generateFeed(cfg, makeTrendingData([]));
    expect(fetchMock.calls.some((u) => u.includes("/users/"))).toBe(false);
  });

  it("配额不足（低于保留水位）：全部候选留待下轮，不打用户接口", async () => {
    memFs.set(feedPath(), JSON.stringify([makeOldCard("old/card1")]));
    stampFetch({ quotaRemaining: 100, users: { old: "User" }, starred: { old: ["old/card1"] } });

    const cards = await generateFeed(cfg, makeTrendingData([]));

    const card = cards.find((c) => c.repo === "old/card1")!;
    expect(card.bigbros).toEqual([]);
    // 只打了 rate_limit，没打 type/starred
    expect(fetchMock.calls.some((u) => /\/users\/[^/]+$/.test(u) || u.includes("/starred"))).toBe(false);
    // pending 不写状态：下轮重查
    const state = readJson<{ users: Record<string, string> }>(stampedPath());
    expect(state?.users["old"]).toBeUndefined();
  });

  it("盖章与存量 bigbros 取并集，组装时保留截断 10 的既有语义", async () => {
    const ten = Array.from({ length: 10 }, (_, i) => `user${i + 1}`);
    memFs.set(feedPath(), JSON.stringify([makeOldCard("old/card1", ten)]));
    stampFetch({
      quotaRemaining: 5000,
      users: { old: "User" },
      starred: { old: ["old/card1"] },
    });

    const cards = await generateFeed(cfg, makeTrendingData([]));

    const card = cards.find((c) => c.repo === "old/card1")!;
    // 并集后截断：原 10 个保留，新盖的 old 排在尾部被截掉（数组体积受控）
    expect(card.bigbros.length).toBe(10);
    for (const u of ten) expect(card.bigbros).toContain(u);
  });

  it("旧 following.json 语义退役：管道不再产出 data/following.json，改写盖章状态", async () => {
    memFs.set(feedPath(), JSON.stringify([makeOldCard("old/card1")]));
    stampFetch({
      quotaRemaining: 5000,
      users: { old: "User" },
      starred: { old: ["old/card1"] },
    });

    await generateFeed(cfg, makeTrendingData([]));

    expect(memFs.has(followingPath())).toBe(false);
    // 盖章状态文件落位（随 digest 入仓，不给前端当关注名单）
    expect(memFs.has(stampedPath())).toBe(true);
    const state = readJson<{ users: Record<string, string> }>(stampedPath());
    expect(state?.users["old"]).toBe("stamped");
  });

  it("只增不减回归：baseline 100 卡全保留（历史卡缓存命中零重评）", async () => {
    const baseline = Array.from({ length: 100 }, (_, i) => makeOldCard(`old/card${i}`));
    memFs.set(feedPath(), JSON.stringify(baseline));
    llmMock.impl = () => {
      throw new Error("不应调用 LLM（全部缓存命中）");
    };
    // fetch 全 404：盖章配额查询失败 → 预算 0 全部 pending，主流程不挂
    fetchMock.impl = async () => ({ ok: false, status: 404 });

    const cards = await generateFeed(cfg, makeTrendingData([]));

    expect(cards.length).toBe(100);
    const repos = new Set(cards.map((c) => c.repo));
    for (let i = 0; i < 100; i++) {
      expect(repos.has(`old/card${i}`)).toBe(true);
    }
  });
});
