import type { FeedCard } from "./types.ts";

// ---------------------------------------------------------------------------
// 加权搜索（任务书 E）：
// - 分词：按空格 split(/\s+/)，中文整串作为一个词（不做单字切分）
// - AND：每个词都必须在任一字段命中
// - 字段权重：repo 5、name 4、owner 4、desc 3、summaryCn 3、reasonCn 2、
//   aiDim 2、topics 2；得分 = Σ命中字段权重 + repo 命中额外 +2
// - 降序排序，截断 60；owner 命中的项目去重 → 创作者组
// ---------------------------------------------------------------------------

const MAX_RESULTS = 60;

export interface SearchCreator {
  owner: string;
  /** 该创作者入库项目总数（与我的-关注口径一致） */
  count: number;
}

export interface SearchOutcome {
  results: FeedCard[];
  creators: SearchCreator[];
}

export function weightedSearch(cards: FeedCard[], query: string): SearchOutcome {
  const q = query.trim();
  if (!q) return { results: [], creators: [] };
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return { results: [], creators: [] };

  const scored: { card: FeedCard; score: number }[] = [];
  const ownerSet = new Set<string>();

  for (const card of cards) {
    const repo = card.repo.toLowerCase();
    const name = card.name.toLowerCase();
    const owner = card.owner.toLowerCase();
    const desc = card.desc.toLowerCase();
    const summaryCn = card.summaryCn.toLowerCase();
    const reasonCn = card.reasonCn.toLowerCase();
    const aiDim = card.aiDim.toLowerCase();
    const topics = (card.topics ?? []).map((t) => t.toLowerCase());

    let score = 0;
    let allMatch = true;
    let ownerHit = false;

    for (const term of terms) {
      let hit = false;
      if (repo.includes(term)) {
        score += 5;
        hit = true;
      }
      if (name.includes(term)) {
        score += 4;
        hit = true;
      }
      if (owner.includes(term)) {
        score += 4;
        ownerHit = true;
        hit = true;
      }
      if (desc.includes(term)) {
        score += 3;
        hit = true;
      }
      if (summaryCn.includes(term)) {
        score += 3;
        hit = true;
      }
      if (reasonCn.includes(term)) {
        score += 2;
        hit = true;
      }
      if (aiDim.includes(term)) {
        score += 2;
        hit = true;
      }
      if (topics.some((t) => t.includes(term))) {
        score += 2;
        hit = true;
      }
      if (!hit) {
        allMatch = false;
        break;
      }
    }

    if (!allMatch) continue;
    // repo 命中额外 +2
    if (terms.some((t) => repo.includes(t))) score += 2;
    scored.push({ card, score });
    if (ownerHit) ownerSet.add(card.owner);
  }

  scored.sort((a, b) => b.score - a.score);
  const results = scored.slice(0, MAX_RESULTS).map((s) => s.card);

  const creators = [...ownerSet]
    .map((owner) => ({ owner, count: cards.filter((c) => c.owner === owner).length }))
    .sort((a, b) => b.count - a.count);

  return { results, creators };
}
