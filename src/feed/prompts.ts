/**
 * 开源版抖音信息流 — LLM prompt 构建与结果解析。
 *
 * 核心：buildFeedScoringPrompt 把一批项目 + 用户兴趣描述喂给 LLM，
 * 让它对每个项目输出 AI 维度分类、兴趣相关度评分、三句中文推荐理由。
 * 这是"个性化筛选 + 中文讲解"的核心，借鉴 TrendRadar 的 ai_interests 思路。
 */

import type { RepoForScoring, ScoringResult } from "./types.ts";

/** AI 维度分类候选（与 agents-radar 的 trending 维度对齐 + 拓宽非 AI） */
const AI_DIMS = [
  "AI基础设施",
  "AI Agent",
  "AI应用",
  "模型与训练",
  "RAG与知识",
  "非AI-好玩",
  "非AI-实用",
  "其他",
];

/**
 * 构建批量评分 prompt。
 *
 * @param repos 待评分项目（建议每批 ≤ 20 个，控制 token）
 * @param aiInterestsText 用户自然语言兴趣描述（如"我想看 AI、好玩的、能直接用的工具"）
 */
export function buildFeedScoringPrompt(repos: RepoForScoring[], aiInterestsText: string): string {
  const list = repos
    .map((r, i) => {
      const topics = r.topics.length ? r.topics.slice(0, 8).join(", ") : "无";
      const desc = (r.description || "无描述").slice(0, 200);
      return `${i + 1}. ${r.repo} — ${desc} | ⭐${r.stars} | 语言: ${r.language || "未知"} | topics: ${topics}`;
    })
    .join("\n");

  return `你是一位资深开源项目策展人，面向中文读者。根据用户的兴趣描述，对以下 GitHub 项目逐个评估并生成中文推荐内容。

# 用户兴趣描述
${aiInterestsText}

# 待评估项目（共 ${repos.length} 个）
${list}

# 评估要求
对每个项目输出一个 JSON 对象，字段：
- "repo": "owner/repo"（与输入一致）
- "ai_dim": 从 [${AI_DIMS.join(", ")}] 中选一个最贴切的分类
- "ai_score": 0 到 1 的浮点数，表示该项目与用户兴趣描述的相关度（1 = 非常相关，0 = 完全无关）。判断依据：是否 AI 相关、是否好玩有趣、是否实用能直接用、star 热度
- "summary_cn": 一句话通俗概括，用大白话说清楚这玩意是干啥的。要求：有趣、接地气、让人一眼看懂，不超过30个字。像朋友给你安利一样。注意：不能和 reason_cn 的第一句话一样，必须用完全不同的角度和措辞。例如：“不用显卡也能在笔记本上跑大模型的神器”
- "reason_cn": 中文专业描述，一段连贯的文字（不要用①②③等序号编号），涵盖：这个项目是干嘛的、为什么值得关注、怎么用或适合谁。如果想分点说明，用换行+·开头的方式。不要重复 summary_cn 的内容。

# 输出格式
只返回一个 JSON 数组，不要任何其他文字、不要 markdown 代码块标记。示例：
[{"repo":"owner/repo","ai_dim":"AI Agent","ai_score":0.85,"summary_cn":"不用显卡也能在笔记本上跑大模型的神器","reason_cn":"这是用纯C++重写的大模型推理引擎，让CPU也能跑量化后的大模型。它把大模型使用门槛从需要A100拉低到有台电脑就行，几行命令就能在笔记本上跑起来一个能对话的AI。适合想在本地体验大模型、做AI应用原型、或研究模型量化的开发者。"}]`;
}

/**
 * 解析 LLM 返回的评分为 ScoringResult[]。
 * 容错：去除 markdown 代码块标记、提取首个 JSON 数组。
 */
export function parseScoringResult(raw: string): ScoringResult[] {
  let text = raw.trim();
  // 去除 markdown 代码块
  text = text
    .replace(/```(?:json)?\n?/g, "")
    .replace(/```/g, "")
    .trim();

  // 提取首个 JSON 数组
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start === -1 || end === -1 || end <= start) {
    console.error("[feed/scoring] No JSON array found in LLM response");
    return [];
  }

  try {
    const arr = JSON.parse(text.slice(start, end + 1)) as Array<{
      repo?: string;
      ai_dim?: string;
      ai_score?: number;
      summary_cn?: string;
      reason_cn?: string;
    }>;
    return arr
      .filter((x) => x && typeof x.repo === "string")
      .map((x) => ({
        repo: x.repo as string,
        aiDim: x.ai_dim ?? "其他",
        aiScore: typeof x.ai_score === "number" ? Math.max(0, Math.min(1, x.ai_score)) : 0.5,
        summaryCn: x.summary_cn ?? "",
        reasonCn: x.reason_cn ?? "",
      }));
  } catch (err) {
    console.error(`[feed/scoring] JSON parse failed: ${err}`);
    return [];
  }
}
