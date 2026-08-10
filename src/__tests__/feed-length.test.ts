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

// LLM 调用 mock：失败/成功可控 + 调用次数计数
const { llmMock, callCount } = vi.hoisted(() => ({
  llmMock: { impl: null as null | ((prompt: string) => string) },
  callCount: { n: 0 },
}));

vi.mock("../report.ts", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../report.ts")>();
  return {
    ...actual,
    callLlm: vi.fn(async (prompt: string) => {
      callCount.n++;
      if (!llmMock.impl) throw new Error("llmMock.impl not set");
      return llmMock.impl(prompt);
    }),
  };
});

// stars 轮转刷新不打真网络（resp.ok=false → 跳过刷新，无害）
vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 404 })) as unknown as typeof fetch);

import { generateFeed, effLen, summaryFromDetailFirstPara } from "../feed/index.ts";

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

/** reasonCn effLen ≥100 的达标推荐理由（全中文 110 字左右） */
const GOOD_REASON =
  "这是一个足够长的项目推荐理由文本，用来展示该项目的技术亮点与实用价值。它涵盖了核心架构设计、关键算法优化以及多种使用场景下的真实表现，同时提供了与同类工具的对比分析，帮助读者快速建立对该项目的全面认识，从而判断它是否适合引入到自己的工作流程当中。";
/** summaryCn 20-35 字达标摘要 */
const GOOD_SUMMARY = "这是一句在二十到三十五个字范围内的标准摘要文案";
/** 不达标的短推荐理由（effLen 远小于 100） */
const SHORT_REASON = "这是一个很简短的推荐理由";
/** 超长摘要（>35 字） */
const LONG_SUMMARY =
  "这是一个远远超过三十五个字限制的超级长摘要文本内容，用来验证超长摘要会被长度校验拦截并触发重评流程确保最终输出符合规范要求";

/** 构造 LLM 成功响应 */
function scoreJson(
  repo: string,
  reason: string = GOOD_REASON,
  summary: string = GOOD_SUMMARY,
  detail = "详情内容",
): string {
  return JSON.stringify([
    {
      repo,
      ai_dims: ["AI Agent"],
      ai_score: 0.8,
      summary_cn: summary,
      reason_cn: reason,
      detail_cn: detail,
    },
  ]);
}

function pendingPath(): string {
  return path.join("data", "pending-retry.json");
}

/** 读内存里的 JSON 文件 */
function readJson<T>(p: string): T | null {
  const raw = memFs.get(p);
  if (raw === undefined) return null;
  return JSON.parse(raw) as T;
}

beforeEach(() => {
  memFs.clear();
  llmMock.impl = null;
  callCount.n = 0;
});

describe("P0a 长度校验（effLen / 重评 / detail 兜底 / pending）", () => {
  it('effLen：全角算 1、半角算 0.5（"中文abc中" = 4.5；8 全角+1 半角 = 8.5）', () => {
    expect(effLen("中文abc中")).toBe(4.5);
    expect(effLen("中中中中中中中中a")).toBe(8.5);
    expect(effLen("")).toBe(0);
    expect(effLen("GitHub 开源项目")).toBe(7.5); // 6 半角 + 空格 + 4 全角
  });

  it("不达标（reason 短）触发重评：重评达标后进 feed", async () => {
    // 新卡：批量评分第一次返回短 reason，重评返回达标
    llmMock.impl = (_prompt: string) => {
      if (callCount.n === 1) return scoreJson("new/short", SHORT_REASON);
      return scoreJson("new/short");
    };
    const trending = makeTrendingData(["new/short"]);

    const cards = await generateFeed(cfg, trending, []);

    const card = cards.find((c) => c.repo === "new/short");
    expect(card).toBeDefined();
    expect(effLen(card!.reasonCn)).toBeGreaterThanOrEqual(100);
    // 重评被触发（批量 1 次 + 重评 ≥1 次）
    expect(callCount.n).toBeGreaterThanOrEqual(2);
  });

  it("重评成功替换不达标内容：最终 reasonCn 是重评返回值", async () => {
    llmMock.impl = (_prompt: string) => {
      if (callCount.n === 1) return scoreJson("new/replace", SHORT_REASON);
      return scoreJson("new/replace", GOOD_REASON + "重评补充的技术细节与具体能力说明");
    };
    const trending = makeTrendingData(["new/replace"]);

    const cards = await generateFeed(cfg, trending, []);

    const card = cards.find((c) => c.repo === "new/replace");
    expect(card).toBeDefined();
    // 被替换为重评的达标内容（含重评补充标记，不含短 reason）
    expect(card!.reasonCn).toContain("重评补充的技术细节与具体能力说明");
    expect(card!.reasonCn).not.toContain(SHORT_REASON);
    expect(effLen(card!.reasonCn)).toBeGreaterThanOrEqual(100);
  });

  it("重评失败 + 有 detail → detail 第二段兜底（effLen≥100 且跳过第一段）", async () => {
    const detail = [
      "第一段开场白概述：用大白话说清楚这个项目解决什么问题，与摘要内容高度重复。",
      "第二段核心技术亮点：包含具体的架构设计与优化手段，比如模块化的组件划分、高效的数据处理流程，以及与其他同类项目相比的独特之处，内容足够详细扎实，让读者能够理解它为什么厉害，这一段文字要写得足够长，超过一百字的等效宽度。",
      "第三段安装与上手使用说明。",
    ].join("\n\n");
    // 批量与重评都返回短 reason + 长 detail（重评永远不达标 → 3 次失败）
    llmMock.impl = () => scoreJson("new/fallback", SHORT_REASON, GOOD_SUMMARY, detail);
    const trending = makeTrendingData(["new/fallback"]);

    const cards = await generateFeed(cfg, trending, []);

    const card = cards.find((c) => c.repo === "new/fallback");
    expect(card).toBeDefined();
    // 兜底值 ≥100 且跳过第一段（与 summary 重复）
    expect(effLen(card!.reasonCn)).toBeGreaterThanOrEqual(100);
    expect(card!.reasonCn).not.toContain("第一段开场白概述");
    expect(card!.reasonCn).toContain("核心技术亮点");
    // detail 保留
    expect(card!.detailCn).toBe(detail);
  });

  it("重评失败 + 无 detail → 入 pending 队列（本轮不进 feed）", async () => {
    // LLM 全失败：批量失败 + 重评 3 次失败，且无任何历史 detail
    llmMock.impl = () => {
      throw new Error("Connection error");
    };
    const trending = makeTrendingData(["new/nodetail"]);

    const cards = await generateFeed(cfg, trending, []);

    expect(cards.map((c) => c.repo)).not.toContain("new/nodetail");
    const arr = readJson<Record<string, unknown>[]>(pendingPath());
    const pe = arr?.find((e) => e.repo === "new/nodetail");
    expect(pe).toBeDefined();
    expect(pe!.retryCount).toBe(1);
  });

  it("summary 超长（>35 字）触发重评：重评达标后 summary 落在 20-35", async () => {
    llmMock.impl = (_prompt: string) => {
      if (callCount.n === 1) return scoreJson("new/longsum", GOOD_REASON, LONG_SUMMARY);
      return scoreJson("new/longsum");
    };
    const trending = makeTrendingData(["new/longsum"]);

    const cards = await generateFeed(cfg, trending, []);

    const card = cards.find((c) => c.repo === "new/longsum");
    expect(card).toBeDefined();
    expect(card!.summaryCn.length).toBeGreaterThanOrEqual(20);
    expect(card!.summaryCn.length).toBeLessThanOrEqual(35);
    expect(callCount.n).toBeGreaterThanOrEqual(2);
  });

  it("达标卡不触发重评（仅 1 次批量调用）", async () => {
    llmMock.impl = () => scoreJson("new/ok");
    const trending = makeTrendingData(["new/ok"]);

    const cards = await generateFeed(cfg, trending, []);

    const card = cards.find((c) => c.repo === "new/ok");
    expect(card).toBeDefined();
    expect(effLen(card!.reasonCn)).toBeGreaterThanOrEqual(100);
    expect(callCount.n).toBe(1);
  });

  it("summaryFromDetailFirstPara：从第一段截 20-35 字且句号收尾", () => {
    const detail =
      "简单来说，这是一个帮你本地跑大模型的神器，不需要昂贵的显卡。\n\n技术上，它用纯 C++ 实现推理内核。\n\n安装很简单，一行命令搞定。";
    const s = summaryFromDetailFirstPara(detail);
    expect(s.length).toBeGreaterThanOrEqual(15);
    expect(effLen(s)).toBeLessThanOrEqual(38);
    expect(s.startsWith("简单来说")).toBe(true);
    expect(s.endsWith("。")).toBe(true);
    // 空输入 → ""
    expect(summaryFromDetailFirstPara("")).toBe("");
  });

  it("重评失败 + 有 detail → 兜底构造的卡 summary 非空且 20-35 字（不再留空被前端填充）", async () => {
    llmMock.impl = () => {
      throw new Error("mock llm unavailable"); // 批量 + 重评全失败
    };
    const trending = makeTrendingData(["new/fallback-sum"]);
    // 预置 baseline feed（含该卡 detailCn，走「无评分 + detailMap 兜底」路径）
    const prevFeed = [
      {
        repo: "new/fallback-sum",
        owner: "new",
        name: "fallback-sum",
        detailCn:
          "这是一个测试项目：用来验证兜底时一句话描述也能生成。\n\n技术上它测试若干边界情况，包括内存管理、并发处理与数据索引优化，并且提供了友好的 REST 与 gRPC 接口，让开发者可以快速接入并处理大规模向量数据，这一段需要写得足够长以满足一百等效宽度的兜底要求。\n\n安装无要求。",
        reasonCn: "",
        aiScore: 0,
      },
    ];
    memFs.set(path.join("data", "feed.json"), JSON.stringify(prevFeed));

    const cards = await generateFeed(cfg, trending, []);

    const card = cards.find((c) => c.repo === "new/fallback-sum");
    expect(card).toBeDefined();
    expect(card!.summaryCn.length).toBeGreaterThanOrEqual(10);
    expect(effLen(card!.summaryCn)).toBeLessThanOrEqual(38);
    expect(card!.summaryCn.startsWith("这是一个测试项目")).toBe(true);
  });
});
