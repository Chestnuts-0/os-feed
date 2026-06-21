/**
 * 开源版抖音信息流 — 个性化层。
 *
 * 三件事：
 * 1. 用户画像读写（data/profile.json）—— AI/好玩/实用 三维权重 + 兴趣描述
 * 2. 用户反馈读写（data/feedback.json）—— 点赞/不感兴趣的 repo 列表
 * 3. 推荐排序 —— score = 匹配度 × 热度 × 新鲜度 × 大牛背书
 *
 * 反馈 loop：前端点赞/不感兴趣 → 写 feedback.json → 下次跑批时
 * applyFeedbackToProfile 据此微调画像权重，实现"越刷越准"。
 */

import fs from "node:fs";
import path from "node:path";
import type { FeedCard, UserProfile, UserFeedback } from "./types.ts";

const DATA_DIR = "data";
const PROFILE_PATH = path.join(DATA_DIR, "profile.json");
const FEEDBACK_PATH = path.join(DATA_DIR, "feedback.json");

// ---------------------------------------------------------------------------
// Profile I/O
// ---------------------------------------------------------------------------

export function loadProfile(fallback: UserProfile): UserProfile {
  try {
    if (fs.existsSync(PROFILE_PATH)) {
      const raw = JSON.parse(fs.readFileSync(PROFILE_PATH, "utf-8"));
      return {
        interests: raw.interests ?? fallback.interests,
        aiInterestsText: raw.aiInterestsText ?? fallback.aiInterestsText,
        followedBigs: raw.followedBigs ?? fallback.followedBigs,
      };
    }
  } catch (err) {
    console.error(`[personalize] load profile failed: ${err}`);
  }
  return fallback;
}

export function saveProfile(profile: UserProfile): void {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(PROFILE_PATH, JSON.stringify(profile, null, 2), "utf-8");
}

// ---------------------------------------------------------------------------
// Feedback I/O
// ---------------------------------------------------------------------------

export function loadFeedback(): UserFeedback {
  try {
    if (fs.existsSync(FEEDBACK_PATH)) {
      const raw = JSON.parse(fs.readFileSync(FEEDBACK_PATH, "utf-8"));
      return { likes: raw.likes ?? [], dislikes: raw.dislikes ?? [] };
    }
  } catch (err) {
    console.error(`[personalize] load feedback failed: ${err}`);
  }
  return { likes: [], dislikes: [] };
}

export function saveFeedback(fb: UserFeedback): void {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FEEDBACK_PATH, JSON.stringify(fb, null, 2), "utf-8");
}

// ---------------------------------------------------------------------------
// Scoring
// ---------------------------------------------------------------------------

/** 维度分类 -> 对应的兴趣权重 */
function dimWeight(aiDim: string, interests: UserProfile["interests"]): number {
  if (/^(AI|模型|RAG)/.test(aiDim)) return interests.ai;
  if (aiDim === "非AI-好玩") return interests.fun;
  if (aiDim === "非AI-实用") return interests.practical;
  return (interests.ai + interests.fun + interests.practical) / 3;
}

/**
 * 计算单张卡片推荐分。
 * score = 匹配度 × (0.4 + 0.6×热度) × (0.5 + 0.5×新鲜度) × (1 + 大牛背书)
 */
export function computeScore(card: FeedCard, profile: UserProfile): number {
  const match = card.aiScore * dimWeight(card.aiDim, profile.interests);
  const starScore = Math.log10(Math.max(card.stars, 1)) / 6; // 100 万 star ≈ 1.0
  const daysSince = (Date.now() - new Date(card.ts).getTime()) / (24 * 3600 * 1000);
  const timeDecay = Math.exp(-daysSince / 14); // 半衰期约 10 天
  const bigbroBoost = card.bigbros.length > 0 ? 0.3 : 0;
  return match * (0.4 + 0.6 * starScore) * (0.5 + 0.5 * timeDecay) * (1 + bigbroBoost);
}

/** 批量打分并按 score 降序排序 */
export function rankCards(cards: FeedCard[], profile: UserProfile): FeedCard[] {
  return cards.map((c) => ({ ...c, score: computeScore(c, profile) })).sort((a, b) => b.score - a.score);
}

// ---------------------------------------------------------------------------
// Feedback -> Profile 更新（反馈 loop）
// ---------------------------------------------------------------------------

/**
 * 根据用户反馈微调画像权重。
 * 统计 likes/dislikes 中各维度的频次，按 0.05 步长增减，再归一化保持和为 1。
 * 反馈不足或无法映射到维度时，原样返回。
 */
export function applyFeedbackToProfile(
  profile: UserProfile,
  feedback: UserFeedback,
  cards: FeedCard[],
): UserProfile {
  if (feedback.likes.length === 0 && feedback.dislikes.length === 0) return profile;

  const dimMap = new Map<string, FeedCard>();
  for (const c of cards) dimMap.set(c.repo, c);

  const countDims = (repos: string[]) => {
    const w = { ai: 0, fun: 0, practical: 0 };
    for (const r of repos) {
      const c = dimMap.get(r);
      if (!c) continue;
      if (/^(AI|模型|RAG)/.test(c.aiDim)) w.ai++;
      else if (c.aiDim === "非AI-好玩") w.fun++;
      else if (c.aiDim === "非AI-实用") w.practical++;
    }
    return w;
  };

  const likeW = countDims(feedback.likes);
  const dislikeW = countDims(feedback.dislikes);
  const total = likeW.ai + likeW.fun + likeW.practical;
  if (total === 0) return profile;

  let ai = profile.interests.ai + (likeW.ai - dislikeW.ai) * 0.05;
  let fun = profile.interests.fun + (likeW.fun - dislikeW.fun) * 0.05;
  let practical = profile.interests.practical + (likeW.practical - dislikeW.practical) * 0.05;

  // 防负 + 归一化
  ai = Math.max(0.01, ai);
  fun = Math.max(0.01, fun);
  practical = Math.max(0.01, practical);
  const sum = ai + fun + practical;
  return { ...profile, interests: { ai: ai / sum, fun: fun / sum, practical: practical / sum } };
}
