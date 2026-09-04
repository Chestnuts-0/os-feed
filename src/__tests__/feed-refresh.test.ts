import { describe, it, expect, vi } from "vitest";
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

// LLM 调用 mock：评分成功可控（未设 impl 时抛错 = 验证「缓存命中零重评」）
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

// fetch mock：默认全失败；测试内按 URL 返回 stargazers_count
const { fetchMock } = vi.hoisted(() => ({
  fetchMock: { impl: null as null | ((url: string) => Promise<unknown>) },
}));

vi.stubGlobal(
  "fetch",
  vi.fn(async (url: unknown) => {
    const u = String(url);
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

/** 构造一张评分完整的旧卡（baseline 用，缓存命中后不评分直接输出） */
function makeOldCard(repo: string, stars: number, starGrowth = 0): Record<string, unknown> {
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
    stars,
    starGrowth,
    language: "TypeScript",
    topics: ["llm"],
    aiDims: ["AI Agent"],
    aiDim: "AI Agent",
    tags: [{ name: "AI Agent", weight: 0.5 }],
    aiScore: 0.8,
    source: "trending",
    bigbros: [],
    url: `https://github.com/${repo}`,
    ts: "2026-08-07T00:00:00.000Z",
    score: 0.5,
    category: "tool",
    momentum: ["hot"],
  };
}

/** 构造 LLM 成功响应（可解析的评分 JSON，P0a 长度达标：reason effLen>=100 / summary 20-35 字） */
function scoreJson(repo: string): string {
  return JSON.stringify([
    {
      repo,
      ai_dims: ["AI Agent"],
      ai_score: 0.8,
      summary_cn: "这是一个用于测试的二十到三十五个字长度的摘要文本",
      reason_cn:
        "这是一段用于测试的推荐理由内容，用来满足等效宽度不低于一百的校验要求，所以需要写得足够长，覆盖技术亮点与使用场景，让卡片的三行推荐理由排版饱满不出现空白行，同时避免摘要与理由内容重复，达到长度要求才算合格，这就是一段完整的测试文本。",
      detail_cn: "详情内容",
    },
  ]);
}

/** stars 轮转刷新 fetch mock：按 repo 返回指定 stargazers_count */
function starsFetch(starsByRepo: Record<string, number>) {
  fetchMock.impl = async (url: string) => {
    const m = url.match(/\/repos\/([^/]+\/[^/]+)/);
    const repo = m ? decodeURIComponent(m[1] ?? "") : "";
    const stars = starsByRepo[repo];
    if (stars === undefined) return { ok: false, status: 404 };
    return { ok: true, status: 200, json: async () => ({ stargazers_count: stars }) };
  };
}

function feedPath() {
  return path.join("data", "feed.json");
}
function pendingPath() {
  return path.join("data", "pending-retry.json");
}

// ---------------------------------------------------------------------------
// starGrowth 修复验证：基准缺失不虚高 / 跨轮不固化 / 差值正确 / diff<=0 不动
// ---------------------------------------------------------------------------

describe("starGrowth：新卡（基准缺失）不虚高", () => {
  it("trending 新卡：refresh 不把总 star 当增长，保留 todayStars", async () => {
    memFs.clear();
    // 无 baseline：trending 卡今天首次入库，todayStars=12（正确今日增长），总 star 5000
    const trendingData: TrendingData = {
      trendingRepos: [
        {
          fullName: "new/trend",
          description: "新趋势项目",
          language: "TypeScript",
          todayStars: 12,
          totalStars: 5000,
          forks: 10,
          url: "https://github.com/new/trend",
        },
      ],
      searchRepos: [],
      trendingFetchSuccess: true,
    };
    llmMock.impl = () => scoreJson("new/trend");
    // refresh 扫到它并查到最新 stars=5200（若按旧逻辑 newStars-0=5200 虚高）
    starsFetch({ "new/trend": 5200 });

    const cards = await generateFeed(cfg, trendingData);

    expect(cards).toHaveLength(1);
    expect(cards[0]!.stars).toBe(5200);
    expect(cards[0]!.starGrowth).toBe(12); // 保持 todayStars，而非 5200
  });

  it("search 新卡：refresh 后 starGrowth 保持 0", async () => {
    memFs.clear();
    const trendingData: TrendingData = {
      trendingRepos: [],
      searchRepos: [
        {
          fullName: "new/search",
          description: "搜索发现项目",
          language: "Go",
          stargazersCount: 3000,
          searchQuery: "llm",
          pushedAt: "2026-08-12T00:00:00.000Z",
          url: "https://github.com/new/search",
        },
      ],
      trendingFetchSuccess: true,
    };
    llmMock.impl = () => scoreJson("new/search");
    starsFetch({ "new/search": 3100 });

    const cards = await generateFeed(cfg, trendingData);

    expect(cards).toHaveLength(1);
    expect(cards[0]!.stars).toBe(3100);
    expect(cards[0]!.starGrowth).toBe(0); // 基准缺失不算增长
  });
});

describe("starGrowth：旧卡从 0 重算，历史虚高自愈", () => {
  it("baseline 虚高卡（starGrowth=999）→ 本轮真实差值覆盖", async () => {
    memFs.clear();
    // 历史虚高：starGrowth=999（≈stars=1000，旧 bug 产物）
    memFs.set(feedPath(), JSON.stringify([makeOldCard("old/repo", 1000, 999)]));
    // 缓存命中 → LLM 不应被调用
    llmMock.impl = () => {
      throw new Error("不应调用 LLM（旧卡缓存命中零重评）");
    };
    // 今天涨到 1050
    starsFetch({ "old/repo": 1050 });

    const cards = await generateFeed(cfg, {
      trendingRepos: [],
      searchRepos: [],
      trendingFetchSuccess: true,
    });

    expect(cards).toHaveLength(1);
    expect(cards[0]!.stars).toBe(1050);
    expect(cards[0]!.starGrowth).toBe(50); // = 1050-1000，虚高值 999 已清除
  });

  it("trending 旧卡：merge 的 todayStars 与 refresh 差值同轮取大", async () => {
    memFs.clear();
    memFs.set(feedPath(), JSON.stringify([makeOldCard("old/trend", 1000, 999)]));
    llmMock.impl = () => {
      throw new Error("不应调用 LLM（旧卡缓存命中零重评）");
    };
    // 今天 trending 又抓到它（todayStars=30）+ API 实测 1050 → diff=50 → max(30,50)=50
    const trendingData: TrendingData = {
      trendingRepos: [
        {
          fullName: "old/trend",
          description: "老趋势项目",
          language: "TypeScript",
          todayStars: 30,
          totalStars: 1000,
          forks: 10,
          url: "https://github.com/old/trend",
        },
      ],
      searchRepos: [],
      trendingFetchSuccess: true,
    };
    starsFetch({ "old/trend": 1050 });

    const cards = await generateFeed(cfg, trendingData);

    expect(cards).toHaveLength(1);
    expect(cards[0]!.starGrowth).toBe(50); // 真实差值胜出，而非 999/30
  });

  it("stars 减少（diff<=0）→ starGrowth 不动（无负值）", async () => {
    memFs.clear();
    memFs.set(feedPath(), JSON.stringify([makeOldCard("old/shrink", 1000)]));
    llmMock.impl = () => {
      throw new Error("不应调用 LLM（旧卡缓存命中零重评）");
    };
    // 异常：stars 从 1000 降到 900（改名/删 star）
    starsFetch({ "old/shrink": 900 });

    const cards = await generateFeed(cfg, {
      trendingRepos: [],
      searchRepos: [],
      trendingFetchSuccess: true,
    });

    expect(cards).toHaveLength(1);
    expect(cards[0]!.stars).toBe(900);
    expect(cards[0]!.starGrowth).toBe(0); // 不出现负数/虚高
  });
});

describe("starGrowth：pending 恢复从 0 起算", () => {
  it("恢复卡快照 starGrowth=999 → 置 0 后 refresh 用真实差值", async () => {
    memFs.clear();
    // 待补评队列：评分失败入队时快照的 starGrowth 可能已虚高（999）
    memFs.set(
      pendingPath(),
      JSON.stringify([
        {
          repo: "pend/repo",
          desc: "待补评项目",
          stars: 1500,
          language: "Rust",
          topics: ["llm"],
          source: "bigbro",
          starGrowth: 999,
          bigbros: ["KKKKhazix"],
          ts: "2026-08-11T00:00:00.000Z",
          retryCount: 0,
        },
      ]),
    );
    llmMock.impl = () => scoreJson("pend/repo");
    // 今天实测 2000 → 基准=快照 1500 → 差值 500
    starsFetch({ "pend/repo": 2000 });

    const cards = await generateFeed(cfg, {
      trendingRepos: [],
      searchRepos: [],
      trendingFetchSuccess: true,
    });

    expect(cards).toHaveLength(1);
    expect(cards[0]!.stars).toBe(2000);
    expect(cards[0]!.starGrowth).toBe(500); // 真实差值，快照虚高 999 已清除
  });
});
