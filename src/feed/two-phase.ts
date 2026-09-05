/**
 * 两段式评分 · 支撑件（2026-09-06 栗子拍板提速刀）。
 *
 * 背景：全文案评分每卡现写 ~1000 汉字，实测免费编队 12-15 卡/分钟，9000 候选 = 10h 级
 * → 09-05 两轮 dispatch 撞 360min 墙零产出。两段式：
 *   海选（phase1）只打分贴标签（输出 ~50 token/批）全量筛选 → 只有 top-K 才走全文案精评。
 * 铁律（栗子硬约束）：出现在 GitTok 里的卡必须有全套文案——海选淘汰的库根本不进 feed，
 * 所以无需文案；精评完成的卡才允许落盘 feed.json（沿用既有「无评分不进信息流」闸门）。
 *
 * 本文件只放纯逻辑与缓存 I/O；LLM 调用与管道接线在 feed/index.ts。
 */

import fs from "node:fs";
import type { Phase1Score } from "./prompts.ts";

/** 海选缓存文件：repo → 海选结果。命中即跳过重筛（未入选的库每轮都还在池里，
 *  不缓存的话筛选池会逐轮滚雪球，海选便宜的优势就被吃掉了） */
const PHASE1_CACHE_PATH = "data/phase1-scores.json";

interface Phase1CacheEntry extends Phase1Score {
  ts: string;
}

/** 读海选缓存（容错：损坏/缺失一律当空，不阻塞主流程） */
export function loadPhase1Scores(path: string = PHASE1_CACHE_PATH): Map<string, Phase1Score> {
  const map = new Map<string, Phase1Score>();
  try {
    if (!fs.existsSync(path)) return map;
    const raw = JSON.parse(fs.readFileSync(path, "utf-8")) as Record<string, Phase1CacheEntry>;
    for (const [repo, e] of Object.entries(raw)) {
      if (e && e.repo && typeof e.aiScore === "number") {
        map.set(repo, { repo: e.repo, aiDims: e.aiDims ?? [], aiScore: e.aiScore });
      }
    }
  } catch (err) {
    console.error(`  [feed/phase1] cache load failed: ${err}`);
  }
  return map;
}

/** 追加海选结果到缓存并立即写盘（每 chunk 一次，量小；写失败仅日志不阻塞）。
 *  管道不清理此文件：它只增不删、单条 <100 字节，由「库掉出候选池即成死数据」
 *  的体量自然封顶（万级 = ~1MB），不值得为它加清理机制。 */
export function appendPhase1Scores(results: Phase1Score[], path: string = PHASE1_CACHE_PATH): void {
  if (results.length === 0) return;
  try {
    let raw: Record<string, Phase1CacheEntry> = {};
    if (fs.existsSync(path)) {
      try {
        raw = JSON.parse(fs.readFileSync(path, "utf-8")) as Record<string, Phase1CacheEntry>;
      } catch {
        raw = {}; // 损坏重写
      }
    }
    for (const r of results) {
      raw[r.repo] = { ...r, ts: new Date().toISOString() };
    }
    fs.mkdirSync(path.substring(0, path.lastIndexOf("/")) || ".", { recursive: true });
    fs.writeFileSync(path, JSON.stringify(raw), "utf-8");
  } catch (err) {
    console.error(`  [feed/phase1] cache save failed: ${err}`);
  }
}

/** 精评选中的 repo 集合（供组装循环区分「海选淘汰=跳过」与「评分失败=进待补评」） */
export interface SelectionInput {
  repo: string;
  aiScore: number;
  starGrowth: number;
  stars: number;
}

/**
 * 精评 top-K 选择（纯函数）：
 *   排序 = aiScore 降序（与 feed 频道排序语义一致）→ 平手比 starGrowth（增长幅度）→ 再比 stars。
 * 已知风险（注释在案，供数据观察后校准）：纯 aiScore 排序可能让非 AI 类吃亏——
 * 兴趣文本同时权重「好玩/实用」，且入库队列本身已按领域轮询保底多样性；
 * 若线上分类分布失衡量化超标，在此处加 per-dim 配额，不动排序骨架。
 */
export function selectForProse(candidates: SelectionInput[], k: number): Set<string> {
  const sorted = [...candidates].sort(
    (a, b) => b.aiScore - a.aiScore || b.starGrowth - a.starGrowth || b.stars - a.stars,
  );
  return new Set(sorted.slice(0, Math.max(0, k)).map((c) => c.repo));
}
