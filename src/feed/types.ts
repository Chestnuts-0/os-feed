/**
 * 开源版抖音信息流 — 数据类型。
 *
 * FeedCard 是信息流里的一张项目卡片，由 trending/search/bigbro 数据
 * 经 LLM 打分+生成中文推荐理由后聚合而成。
 */

/** 项目进入信息流的来源 */
export type FeedSource = "trending" | "bigbro" | "search";

/** 待 LLM 评分的项目（采集层产出的统一中间格式） */
export interface RepoForScoring {
  /** owner/repo */
  repo: string;
  description: string;
  stars: number;
  language: string;
  topics: string[];
}

/** LLM 评分结果（JSON 解析） */
export interface ScoringResult {
  repo: string;
  /** AI 维度分类 */
  aiDim: string;
  /** 与用户兴趣的相关度 0-1 */
  aiScore: number;
  /** 一句话通俗概括 */
  summaryCn: string;
  /** 简要介绍（两三行，含专业术语） */
  reasonCn: string;
  /** 详情介绍（长文，兼顾通俗+专业+细致） */
  detailCn: string;
}

/** 信息流分区类型 */
export type FeedCategory = "hot" | "authoritative" | "daily" | "fun" | "skill" | "learning";

/** 信息流卡片 —— 前端消费的最终格式 */
export interface FeedCard {
  /** owner/repo */
  repo: string;
  owner: string;
  name: string;
  /** 原始描述（可能英文） */
  desc: string;
  /** 一句话通俗概括（大白话，有趣，让用户一眼看懂） */
  summaryCn: string;
  /** 简要介绍（两三行，含专业术语但精炼） */
  reasonCn: string;
  /** 详情介绍（长文，兼顾通俗+专业+细致，深度解读） */
  detailCn: string;
  stars: number;
  /** 近期 star 增长（trending 用 todayStars，search 用 0） */
  starGrowth: number;
  language: string;
  topics: string[];
  aiDim: string;
  aiScore: number;
  source: FeedSource;
  /** 哪些关注的大牛 star 了（source=bigbro 时有值） */
  bigbros: string[];
  url: string;
  /** ISO 时间戳 */
  ts: string;
  /** 推荐排序分（个性化层计算） */
  score: number;
  /** 分区分类（前端用于层次化展示） */
  category: FeedCategory;
}

/** 用户画像（个性化层） */
export interface UserProfile {
  /** AI/好玩/实用 三维权重，和为 1 */
  interests: { ai: number; fun: number; practical: number };
  /** 自然语言兴趣描述（喂给 AI 打分） */
  aiInterestsText: string;
  /** 关注的大牛 GitHub 用户名 */
  followedBigs: string[];
}

/** 用户反馈（点赞/不感兴趣），用于更新画像 */
export interface UserFeedback {
  likes: string[];
  dislikes: string[];
}
