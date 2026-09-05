import { describe, it, expect } from "vitest";
import { classifyCategory, classifyMomentum } from "../feed/index.ts";
import type { FeedCard } from "../feed/types.ts";

// ---------------------------------------------------------------------------
// 固有标签（互斥、全覆盖、tool 兜底）
// ---------------------------------------------------------------------------

function mkCard(
  overrides: Partial<FeedCard>,
): Pick<FeedCard, "repo" | "desc" | "topics" | "aiDims" | "owner" | "stars" | "starGrowth"> {
  return {
    repo: "owner/repo",
    desc: "a generic description",
    topics: [],
    aiDims: [],
    owner: "owner",
    stars: 100,
    starGrowth: 0,
    ...overrides,
  } as Pick<FeedCard, "repo" | "desc" | "topics" | "aiDims" | "owner" | "stars" | "starGrowth">;
}

describe("classifyCategory 固有标签", () => {
  it("tool：repo/topics 含 skill（Agent Skill 集合类）", () => {
    expect(classifyCategory(mkCard({ repo: "anthropics/skills" }))).toBe("tool");
    expect(classifyCategory(mkCard({ topics: ["skill"] }))).toBe("tool");
  });

  it("fun：非AI-好玩 / 游戏 直通；创意工具/可视化 须过好玩气质词交叉验证", () => {
    expect(classifyCategory(mkCard({ aiDims: ["非AI-好玩"] }))).toBe("fun");
    expect(classifyCategory(mkCard({ aiDims: ["游戏"] }))).toBe("fun");
    // 「创意工具」+ 描述有玩耍气质（game/music/ascii…）→ fun
    expect(
      classifyCategory(mkCard({ aiDims: ["创意工具"], desc: "a tiny browser toy for making music" })),
    ).toBe("fun");
    expect(
      classifyCategory(mkCard({ aiDims: ["可视化"], topics: ["generative-art"], desc: "art from code" })),
    ).toBe("fun");
    // p5.js 型创意编程平台（desc 有 artists/learn to code）：气质词命中归 fun，不被 learning 抢走
    expect(
      classifyCategory(
        mkCard({ aiDims: ["创意工具", "可视化"], desc: "platform that empowers artists to learn to code" }),
      ),
    ).toBe("fun");
    // 「创意工具」+ 正经生产力工具描述 → 不过交叉验证，落到后续规则（AI 前缀/learning/tool 兜底）
    expect(classifyCategory(mkCard({ aiDims: ["创意工具"], desc: "open source website builder" }))).toBe(
      "tool",
    );
    expect(classifyCategory(mkCard({ aiDims: ["创意工具"], desc: "icon library for designers" }))).toBe(
      "tool",
    );
    expect(classifyCategory(mkCard({ aiDims: ["创意工具"], desc: "screenshot recorder for teams" }))).toBe(
      "tool",
    );
  });

  it("ai：AI 强特征前缀", () => {
    expect(classifyCategory(mkCard({ aiDims: ["大语言模型"] }))).toBe("ai");
    expect(classifyCategory(mkCard({ aiDims: ["RAG"] }))).toBe("ai");
    expect(classifyCategory(mkCard({ aiDims: ["AI Agent"] }))).toBe("ai");
  });

  it("learning：学英语/学代码资源（新词表）", () => {
    expect(classifyCategory(mkCard({ desc: "learn english with flashcards" }))).toBe("learning");
    expect(classifyCategory(mkCard({ desc: "leetcode solutions in rust" }))).toBe("learning");
    expect(classifyCategory(mkCard({ desc: "编程学习路线图" }))).toBe("learning");
    expect(classifyCategory(mkCard({ desc: "free coding bootcamp" }))).toBe("learning");
    expect(classifyCategory(mkCard({ topics: ["awesome"] }))).toBe("learning");
  });

  it("learning 排除大模型学习（ai 前置判定）", () => {
    // 大模型学习类项目带 AI 强特征 → ai 不是 learning
    expect(classifyCategory(mkCard({ aiDims: ["大语言模型"], desc: "learn LLM from scratch" }))).toBe("ai");
  });

  it("全覆盖：无任何特征的杂项项目兜底 tool", () => {
    expect(classifyCategory(mkCard({}))).toBe("tool");
    expect(classifyCategory(mkCard({ desc: "some random utility" }))).toBe("tool");
  });

  it("互斥：一次只返回一个标签，且都是合法值", () => {
    const samples = [
      mkCard({}),
      mkCard({ aiDims: ["大语言模型"], desc: "learn LLM" }),
      mkCard({ aiDims: ["游戏"], desc: "awesome game" }),
      mkCard({ desc: "leetcode" }),
      mkCard({ repo: "org/skills" }),
    ];
    const valid = ["ai", "fun", "tool", "learning"];
    for (const s of samples) {
      expect(valid).toContain(classifyCategory(s));
    }
  });
});

// ---------------------------------------------------------------------------
// 动态标签（不互斥、可同时命中）
// ---------------------------------------------------------------------------

describe("classifyMomentum 动态标签", () => {
  it("hot：stars >= 30000（2026-09-05 重标定：取材池高星化，86% 通胀的 2000 门槛退役）", () => {
    const r = classifyMomentum(mkCard({ stars: 35000 }));
    expect(r.momentum).toContain("hot");
    expect(r.momentum).not.toContain("daily");
    // 门槛之下的高星老库不再挂热门
    const below = classifyMomentum(mkCard({ stars: 29000 }));
    expect(below.momentum).not.toContain("hot");
  });

  it("daily：starGrowth >= 5", () => {
    const r = classifyMomentum(mkCard({ stars: 100, starGrowth: 12 }));
    expect(r.momentum).toContain("daily");
    expect(r.momentum).not.toContain("hot");
  });

  it("可同时命中 hot + daily（不互斥）", () => {
    const r = classifyMomentum(mkCard({ stars: 50000, starGrowth: 30 }));
    expect(r.momentum).toEqual(expect.arrayContaining(["hot", "daily"]));
  });

  it("双低项目无动态标签（空数组）", () => {
    const r = classifyMomentum(mkCard({ stars: 100, starGrowth: 0 }));
    expect(r.momentum).toEqual([]);
  });

  it("fromOfficial：官方组织 + stars >= 500", () => {
    expect(classifyMomentum(mkCard({ owner: "openai", stars: 10000 })).fromOfficial).toBe(true);
    expect(classifyMomentum(mkCard({ owner: "openai", stars: 100 })).fromOfficial).toBe(false);
    expect(classifyMomentum(mkCard({ owner: "random-user", stars: 10000 })).fromOfficial).toBe(false);
  });
});
