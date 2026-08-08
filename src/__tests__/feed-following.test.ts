import { describe, it, expect, vi, beforeEach } from "vitest";
import path from "node:path";
import type { RadarConfig } from "../config.ts";
import type { TrendingData } from "../trending.ts";
import type { BigbroStar } from "../bigbro-stars.ts";

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

// LLM 调用 mock：按 prompt 内容为每个 repo 生成评分
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

// fetch mock：默认全失败（stars 轮转刷新 / fetchRepoDetail 都不打真网络），
// 测试内可覆盖记录调用 URL 断言「fetchRepoDetail 不被调用」
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
function makeOldCard(repo: string): Record<string, unknown> {
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
    bigbros: [],
    url: `https://github.com/${repo}`,
    ts: "2026-08-07T00:00:00.000Z",
    score: 0.5,
    category: "tool",
    momentum: ["hot"],
  };
}

/** LLM 成功响应元素（snake_case 字段，parseScoringResult 解析） */
function makeScore(repo: string): Record<string, unknown> {
  return {
    repo,
    ai_dims: ["AI Agent"],
    ai_score: 0.8,
    summary_cn: "这是一个二十到三十五个字的测试摘要",
    reason_cn:
      "这是一段超过八十个字的推荐理由内容，用来满足长度要求所以需要写长一点，继续补充一些内容让这段文字变得足够长，达到八十个字以上才算合格的长度。",
    detail_cn: "详情内容",
  };
}

/** LLM mock 默认实现：解析 prompt 里的 repo 列表，全部评分成功 */
function scoreAll(prompt: string): string {
  const repos = [...prompt.matchAll(/^\d+\. (\S+) — /gm)].map((m) => m[1]!);
  return JSON.stringify(repos.map((r) => makeScore(r)));
}

/** 构造自带完整详情的 bigbro 卡（Starred API 响应形状） */
function makeBigbroStar(repo: string, bigbros: string[], stars = 1000): BigbroStar {
  return {
    repo,
    bigbros,
    ts: "2026-08-08T00:00:00.000Z",
    desc: `大牛 star 的项目 ${repo}`,
    stars,
    language: "Python",
    topics: ["llm"],
  };
}

function feedPath(): string {
  return path.join("data", "feed.json");
}
function followingPath(): string {
  return path.join("data", "following.json");
}
function pendingPath(): string {
  return path.join("data", "pending-retry.json");
}

function readJson<T>(p: string): T | null {
  const raw = memFs.get(p);
  if (raw === undefined) return null;
  return JSON.parse(raw) as T;
}

beforeEach(() => {
  memFs.clear();
  llmMock.impl = null;
  fetchMock.impl = null;
  fetchMock.calls.length = 0;
});

// ---------------------------------------------------------------------------
// 任务 2：bigbro 评分配额 / bigbros 截断 / following.json / 只增不减 / 自带详情免兜底
// ---------------------------------------------------------------------------

describe("feed bigbro 配额与 following 输出", () => {
  it("350 个 bigbro 新卡：评分队列截断到 300，超出的进待补评队列下轮补评", async () => {
    const bigbroStars = Array.from({ length: 350 }, (_, i) =>
      makeBigbroStar(`bro/big${i}`, ["KKKKhazix"], 1000 + i),
    );
    llmMock.impl = scoreAll;

    const cards = await generateFeed(cfg, makeTrendingData([]), bigbroStars, ["KKKKhazix"]);

    // 只有 300 张 bigbro 卡进 feed（配额截断）
    const bigbroCards = cards.filter((c) => c.source === "bigbro");
    expect(bigbroCards.length).toBe(300);
    // 截断按 stars 降序：最高星的 300 个进 feed（输出顺序经个性化重排，用集合判定）
    const bigbroRepos = new Set(bigbroCards.map((c) => c.repo));
    expect(bigbroRepos.has("bro/big349")).toBe(true);
    expect(bigbroRepos.has("bro/big50")).toBe(true);
    expect(bigbroRepos.has("bro/big49")).toBe(false);
    // 超出的 50 个进待补评队列（retryCount=1），下轮优先补评
    const pending = readJson<Record<string, unknown>[]>(pendingPath());
    expect(pending).not.toBeNull();
    expect(pending!.length).toBe(50);
    expect(pending!.every((e) => e.source === "bigbro" && e.retryCount === 1)).toBe(true);
    // 队列里是低星的 50 个（被截断的）
    const pendingRepos = new Set(pending!.map((e) => e.repo as string));
    expect(pendingRepos.has("bro/big0")).toBe(true);
    expect(pendingRepos.has("bro/big49")).toBe(true);
    expect(pendingRepos.has("bro/big50")).toBe(false);
  });

  it("trending 新卡不受 bigbro 配额限制", async () => {
    const bigbroStars = Array.from({ length: 310 }, (_, i) =>
      makeBigbroStar(`bro/big${i}`, ["KKKKhazix"], 1000 + i),
    );
    // 40 张 trending 新卡（低星）
    const trending = makeTrendingData(Array.from({ length: 40 }, (_, i) => `hot/new${i}`));
    llmMock.impl = scoreAll;

    const cards = await generateFeed(cfg, trending, bigbroStars, ["KKKKhazix"]);

    expect(cards.filter((c) => c.source === "bigbro").length).toBe(300);
    // trending 全部进 feed（不受 cap 300 影响）
    expect(cards.filter((c) => c.source === "trending").length).toBe(40);
  });

  it("bigbros 截断 10：12 个背书人只保留前 10 个", async () => {
    const twelve = Array.from({ length: 12 }, (_, i) => `user${i + 1}`);
    llmMock.impl = scoreAll;

    const cards = await generateFeed(
      cfg,
      makeTrendingData([]),
      [makeBigbroStar("starred/one", twelve, 500)],
      ["KKKKhazix"],
    );

    const card = cards.find((c) => c.repo === "starred/one");
    expect(card).toBeDefined();
    expect(card!.bigbros).toEqual(twelve.slice(0, 10));
    expect(card!.bigbros.length).toBe(10);
  });

  it("写 data/following.json：users 透传 + updated 存在；空名单也写", async () => {
    llmMock.impl = scoreAll;
    const bigbroStars = [makeBigbroStar("starred/one", ["KKKKhazix"], 500)];

    await generateFeed(cfg, makeTrendingData([]), bigbroStars, ["KKKKhazix", "esengine"]);

    const following = readJson<{ updated: string; users: string[] }>(followingPath());
    expect(following).not.toBeNull();
    expect(following!.users).toEqual(["KKKKhazix", "esengine"]);
    expect(typeof following!.updated).toBe("string");
    expect(following!.updated.length).toBeGreaterThan(0);

    // 空名单也写（users: []）
    await generateFeed(cfg, makeTrendingData([]), [], []);
    const empty = readJson<{ updated: string; users: string[] }>(followingPath());
    expect(empty).not.toBeNull();
    expect(empty!.users).toEqual([]);
  });

  it("只增不减回归：baseline 100 卡全保留（历史卡缓存命中零重评）", async () => {
    const baseline = Array.from({ length: 100 }, (_, i) => makeOldCard(`old/card${i}`));
    memFs.set(feedPath(), JSON.stringify(baseline));
    llmMock.impl = () => {
      throw new Error("不应调用 LLM（全部缓存命中）");
    };

    const cards = await generateFeed(cfg, makeTrendingData([]), [], []);

    expect(cards.length).toBe(100);
    const repos = new Set(cards.map((c) => c.repo));
    for (let i = 0; i < 100; i++) {
      expect(repos.has(`old/card${i}`)).toBe(true);
    }
  });

  it("抓取器自带详情的 bigbro-only 卡不进 needDetail（fetchRepoDetail 不被调用）", async () => {
    // 1 张自带详情的 bigbro 新卡；fetch 全失败并记录 URL
    llmMock.impl = scoreAll;
    fetchMock.impl = async () => ({ ok: false, status: 404 });

    const cards = await generateFeed(
      cfg,
      makeTrendingData([]),
      [makeBigbroStar("starred/only", ["KKKKhazix"], 500)],
      ["KKKKhazix"],
    );

    // 详情来自抓取器自带（即使 fetch 全失败也保留 desc/stars）
    const card = cards.find((c) => c.repo === "starred/only");
    expect(card).toBeDefined();
    expect(card!.desc).toBe("大牛 star 的项目 starred/only");
    expect(card!.stars).toBe(500);
    // /repos/ 调用只有 1 次（refreshStarsRoundRobin 对 repoMap 内唯一 repo 的刷新），
    // 无 fetchRepoDetail 兜底调用 —— 自带详情的卡不进 needDetail
    const repoCalls = fetchMock.calls.filter((u) => u.includes("/repos/"));
    expect(repoCalls.length).toBe(1);
  });

  it("缺详情的 bigbro-only 卡走 fetchRepoDetail 兜底（对比对照组）", async () => {
    // 缺 desc/stars 的卡（模拟旧格式/异常数据）→ 进 needDetail → fetch 兜底
    const noDetail: BigbroStar = {
      repo: "starred/bare",
      bigbros: ["KKKKhazix"],
      ts: "2026-08-08T00:00:00.000Z",
    };
    llmMock.impl = scoreAll;
    // 兜底请求返回详情
    fetchMock.impl = async (url: string) => {
      if (url.includes("/repos/starred/bare")) {
        return {
          ok: true,
          status: 200,
          json: async () => ({
            stargazers_count: 777,
            description: "兜底补的描述",
            language: "Rust",
            topics: ["cli"],
          }),
        };
      }
      return { ok: false, status: 404 };
    };

    const cards = await generateFeed(cfg, makeTrendingData([]), [noDetail], ["KKKKhazix"]);

    const card = cards.find((c) => c.repo === "starred/bare");
    expect(card).toBeDefined();
    expect(card!.stars).toBe(777);
    expect(card!.desc).toBe("兜底补的描述");
    expect(card!.language).toBe("Rust");
    // /repos/ 调用 2 次：refresh 1 + fetchRepoDetail 1
    const repoCalls = fetchMock.calls.filter((u) => u.includes("/repos/"));
    expect(repoCalls.length).toBe(2);
  });
});
