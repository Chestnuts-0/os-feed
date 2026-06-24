/**
 * 开源版抖音信息流 — LLM prompt 构建与结果解析。
 *
 * 核心：buildFeedScoringPrompt 把一批项目 + 用户兴趣描述喂给 LLM，
 * 让它对每个项目输出 AI 维度分类、兴趣相关度评分、三句中文推荐理由。
 * 这是"个性化筛选 + 中文讲解"的核心，借鉴 TrendRadar 的 ai_interests 思路。
 */

import type { RepoForScoring, ScoringResult } from "./types.ts";

/** AI 维度分类候选（扩展为约 28 个精细标签，覆盖 AI/工具/学习/好玩） */
const AI_DIMS = [
  // AI 基础设施
  "AI基础设施",
  "推理引擎",
  "向量数据库",
  "模型部署",
  // AI Agent
  "AI Agent",
  "多模态Agent",
  "工具调用",
  // AI 应用
  "AI应用",
  "代码助手",
  "AI搜索",
  "AI写作",
  // 模型与训练
  "模型与训练",
  "大语言模型",
  "微调",
  "提示工程",
  // RAG 与知识
  "RAG与知识",
  "知识图谱",
  "文档理解",
  // 非AI-好玩
  "非AI-好玩",
  "游戏",
  "创意工具",
  "可视化",
  // 非AI-实用
  "非AI-实用",
  "开发者工具",
  "效率工具",
  "安全工具",
  // 学习资源
  "学习资源",
  "教程",
  "论文",
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
- "ai_dims": 从 [${AI_DIMS.join(", ")}] 中选 1-3 个最贴切的标签，按相关度降序排列组成数组。例如只和 AI Agent 有关：["AI Agent"]；横跨 Agent 和工具调用：["AI Agent", "工具调用"]；最多不要超过3个
- "ai_score": 0 到 1 的浮点数，表示该项目与用户兴趣描述的相关度（1 = 非常相关，0 = 完全无关）。判断依据：是否 AI 相关、是否好玩有趣、是否实用能直接用、star 热度
- "summary_cn": 一句话通俗描述，用大白话说清楚这玩意是干啥的。要求：有趣、接地气、让人一眼看懂且有兴趣继续了解，不超过30个字。像朋友给你安利一样。注意：不能和 reason_cn/detail_cn 的内容重复，必须用完全不同的角度和措辞。例如：“不用显卡也能在笔记本上跑大模型的神器”
- "reason_cn": 简要介绍，两三行（约80-150字），一段连贯的文字。要求：比 summary_cn 更具体，可以出现专业术语和技术概念，但读者仍能在较短篇幅内看懂项目更细节的内容。不要用①②③等序号编号。不要重复 summary_cn 的内容。
- "detail_cn": 详情介绍，约500-800字，一段或多段连贯文字。要求：兼顾通俗易懂且有趣的描述，同时保证专业度和细致度。请按以下五段结构展开：
  第一段：用大白话说清楚这个项目解决什么问题，让非技术读者也能秒懂。像给朋友讲故事一样开头。
  第二段：核心技术亮点和架构特点，用专业但清晰的语言解释它为什么厉害，和同类项目比有什么独特之处。
  第三段：怎么安装和上手使用，给出关键命令或基本用法示例，让读者看完知道怎么试。
  第四段：适合什么人、什么场景使用，给出具体的适用人群和使用建议。
  第五段：社区活跃度、生态、版本迭代、竞品对比等背景信息，帮助读者判断是否值得投入时间。
  每段都要有实质内容，不要泛泛而谈。如果想分点说明，用换行+·开头的方式。不要用①②③序号。不要重复 summary_cn 和 reason_cn 已有内容，而是在此基础上深入展开。

# 输出格式
只返回一个 JSON 数组，不要任何其他文字、不要 markdown 代码块标记。示例：
[{"repo":"owner/repo","ai_dims":["AI Agent","AI基础设施"],"ai_score":0.85,"summary_cn":"不用显卡也能在笔记本上跑大模型的神器","reason_cn":"基于ggml张量库开发的纯C++推理引擎，支持CPU/GPU混合推理和多种量化方案。提供Python/Node.js等多语言绑定，几行命令即可在本地跑起对话AI。","detail_cn":"简单来说，这个东西让你不用买几万块的显卡，用自己笔记本电脑就能跑ChatGPT级别的大语言模型。以前跑大模型得租云服务器，现在下载个文件就能本地对话。\n\n技术上，它的核心是一个叫ggml的张量计算库，纯C++写的，没有多余依赖，所以特别轻量。它支持4位、8位、16位量化——就是把模型参数压缩，比如一个本来要32GB内存的模型，4位量化后只要4GB左右，普通笔记本就能跑。它还支持CPU推理，不需要GPU，虽然慢一点但能跑起来。和Hugging Face Transformers相比，它不依赖PyTorch，安装包小得多，启动也快。\n\n安装很简单。Mac用户一行命令：brew install llama.cpp，然后下载一个GGUF格式的模型文件，运行./main -m model.gguf就能开始对话。Python用户可以pip install llama-cpp-python，在代码里调用。\n\n适合这几类人：想在本地体验大模型但没GPU的个人开发者；做AI应用原型需要快速验证想法的团队；研究模型量化和推理优化的学者；受限于数据安全不能调用云端API的企业。\n\n社区非常活跃，GitHub star已经超过6万，持续迭代中。它是开源LLM推理生态的核心组件之一，很多项目（如Ollama、LM Studio）底层都用了它。竞品有Transformers、vLLM等，但它们更侧重GPU推理，而llama.cpp在CPU/轻量GPU场景几乎没有对手。"}]`;
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
      ai_dims?: string[];
      ai_dim?: string;
      ai_score?: number;
      summary_cn?: string;
      reason_cn?: string;
      detail_cn?: string;
    }>;
    return arr
      .filter((x) => x && typeof x.repo === "string")
      .map((x) => {
        // 兼容新旧格式：优先 ai_dims 数组，回退到单 ai_dim
        let dims: string[];
        if (Array.isArray(x.ai_dims) && x.ai_dims.length > 0) {
          dims = x.ai_dims.filter((d): d is string => typeof d === "string");
        } else if (typeof x.ai_dim === "string" && x.ai_dim.trim()) {
          dims = [x.ai_dim.trim()];
        } else {
          dims = ["其他"];
        }
        return {
          repo: x.repo as string,
          aiDims: dims,
          aiDim: dims[0] || "其他",
          aiScore: typeof x.ai_score === "number" ? Math.max(0, Math.min(1, x.ai_score)) : 0.5,
          summaryCn: x.summary_cn ?? "",
          reasonCn: x.reason_cn ?? "",
          detailCn: x.detail_cn ?? "",
        };
      });
  } catch (err) {
    console.error(`[feed/scoring] JSON parse failed: ${err}`);
    return [];
  }
}
