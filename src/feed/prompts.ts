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
- "summary_cn": 一句话通俗描述，用大白话说清楚这玩意是干啥的。要求：有趣、接地气、让人一眼看懂且有兴趣继续了解，不超过30个字。像朋友给你安利一样。注意：不能和 reason_cn/detail_cn 的内容重复，必须用完全不同的角度和措辞。例如：“不用显卡也能在笔记本上跑大模型的神器”
- "reason_cn": 简要介绍，两三行（约80-150字），一段连贯的文字。要求：比 summary_cn 更具体，可以出现专业术语和技术概念，但读者仍能在较短篇幅内看懂项目更细节的内容。不要用①②③等序号编号。不要重复 summary_cn 的内容。
- "detail_cn": 详情介绍，约300-500字，一段或多段连贯文字。要求：兼顾通俗易懂且有趣的描述，同时保证专业度和细致度。需涵盖：这个项目具体做什么、核心技术亮点、为什么值得关注、怎么上手用、适合什么人、社区生态如何等。如果想分点说明，用换行+·开头的方式。不要用①②③序号。不要重复 summary_cn 和 reason_cn 已有内容，而是在此基础上深入展开。

# 输出格式
只返回一个 JSON 数组，不要任何其他文字、不要 markdown 代码块标记。示例：
[{"repo":"owner/repo","ai_dim":"AI Agent","ai_score":0.85,"summary_cn":"不用显卡也能在笔记本上跑大模型的神器","reason_cn":"基于ggml张量库开发的纯C++推理引擎，支持CPU/GPU混合推理和多种量化方案。提供Python/Node.js等多语言绑定，几行命令即可在本地跑起对话AI。","detail_cn":"这是一个高性能的大模型推理引擎，核心亮点是把推理门槛从需要A100显卡拉低到一台普通笔记本就能跑。\\n\\n· 技术上，它基于ggml张量库，用纯C++实现，支持4/8/16位量化，能在有限内存下加载参数量很大的模型。\\n· 使用上，提供Python、Node.js、Ruby等多语言绑定，也有命令行工具。装好后一行命令就能下载模型并启动对话。\\n· 适合想在本地体验大模型、做AI应用原型、研究模型量化、或受限于硬件无法使用云端API的开发者。\\n· 社区活跃，持续迭代，是目前本地LLM推理生态的重要基础设施之一。"}]`;
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
      detail_cn?: string;
    }>;
    return arr
      .filter((x) => x && typeof x.repo === "string")
      .map((x) => ({
        repo: x.repo as string,
        aiDim: x.ai_dim ?? "其他",
        aiScore: typeof x.ai_score === "number" ? Math.max(0, Math.min(1, x.ai_score)) : 0.5,
        summaryCn: x.summary_cn ?? "",
        reasonCn: x.reason_cn ?? "",
        detailCn: x.detail_cn ?? "",
      }));
  } catch (err) {
    console.error(`[feed/scoring] JSON parse failed: ${err}`);
    return [];
  }
}
