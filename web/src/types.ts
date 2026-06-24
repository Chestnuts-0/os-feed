/**
 * 前端 FeedCard 类型 —— 与后端 src/feed/types.ts 的 FeedCard 接口一致。
 * 前端独立定义避免引入 Node 依赖。
 */

export type FeedCategory = "hot" | "authoritative" | "daily" | "fun" | "skill" | "learning" | "ai" | "rising";

/** 标签来源 */
export type TagSource = "llm" | "github" | "language";

/** 综合标签（多来源融合） */
export interface Tag {
  name: string;
  source: TagSource;
  weight: number;
}

/** 收藏夹 */
export interface Collection {
  id: string;
  name: string;
  repos: string[];
  createdAt: string;
  isAuto: boolean;
  sourceTag?: string;
}

export interface FeedCard {
  repo: string;
  owner: string;
  name: string;
  desc: string;
  /** 一句话通俗概括（大白话，有趣） */
  summaryCn: string;
  /** 简要介绍（两三行，含专业术语） */
  reasonCn: string;
  /** 详情介绍（长文，兼顾通俗+专业+细致） */
  detailCn: string;
  stars: number;
  starGrowth: number;
  language: string;
  topics: string[];
  /** LLM 多维度标签 */
  aiDims: string[];
  /** @deprecated 向后兼容 */
  aiDim: string;
  /** 综合标签（LLM + GitHub topics + language） */
  tags: Tag[];
  aiScore: number;
  source: "trending" | "bigbro" | "search";
  bigbros: string[];
  url: string;
  ts: string;
  score: number;
  category: FeedCategory;
}
