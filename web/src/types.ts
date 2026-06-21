/**
 * 前端 FeedCard 类型 —— 与后端 src/feed/types.ts 的 FeedCard 接口一致。
 * 前端独立定义避免引入 Node 依赖。
 */
export interface FeedCard {
  repo: string;
  owner: string;
  name: string;
  desc: string;
  reasonCn: string;
  stars: number;
  starGrowth: number;
  language: string;
  topics: string[];
  aiDim: string;
  aiScore: number;
  source: "trending" | "bigbro" | "search";
  bigbros: string[];
  url: string;
  ts: string;
  score: number;
}
