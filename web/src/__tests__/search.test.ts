// @ts-ignore —— 与 storage.test.ts 相同：根 vitest 跑 web 测试
import { describe, it, expect } from "vitest";
import { weightedSearch } from "../search.ts";
import type { FeedCard } from "../types.ts";

function card(partial: Partial<FeedCard> & Pick<FeedCard, "repo" | "name" | "owner">): FeedCard {
  return {
    desc: "",
    summaryCn: "",
    reasonCn: "",
    detailCn: "",
    stars: 0,
    starGrowth: 0,
    language: "",
    topics: [],
    aiDims: [],
    aiDim: "",
    tags: [],
    aiScore: 0,
    source: "search",
    bigbros: [],
    url: "",
    ts: "",
    score: 0,
    category: "tool",
    ...partial,
  };
}

describe("weightedSearch", () => {
  const cards = [
    card({ repo: "openai/codex", name: "codex", owner: "openai", summaryCn: "编程助手", desc: "agent cli" }),
    card({ repo: "sst/opencode", name: "opencode", owner: "sst", summaryCn: "终端 AI", reasonCn: "命令行" }),
  ];

  it("空查询不扫描", () => {
    expect(weightedSearch(cards, "  ")).toEqual({ results: [], creators: [] });
  });

  it("不依赖 detailCn 也能按中文摘要命中", () => {
    const { results } = weightedSearch(cards, "编程");
    expect(results.map((c) => c.repo)).toEqual(["openai/codex"]);
  });

  it("owner 命中进入创作者组", () => {
    const { creators } = weightedSearch(cards, "openai");
    expect(creators.map((c) => c.owner)).toEqual(["openai"]);
  });
});
