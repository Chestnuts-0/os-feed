import type { FeedCard } from "./types.ts";

// ---------------------------------------------------------------------------
// 加权搜索 v2（2026-09-05 拍板重写：名字必须占压倒性权重）
//
// v1 的病根：所有字段都是 includes 命中、权重差距小（repo 5 / desc 3 / 文案 2-3），
// 而描述和 AI 文案是长文本、命中概率天然高——搜「大模型」几千张卡的文案都命中，
// 打出几乎项目原名的卡被文案命中的长尾淹没（栗子：这是严重问题）。
//
// v2 分层断层权重（名字层 >> 内容层），宽松键下判定：
//   name/repo 完全等于查询整串    +1000（断层置顶）
//   name/repo 以查询整串开头      +150
//   name/repo 包含查询整串        +80
//   name/repo 每词命中            +25
//   owner 完全等于查询整串        +400（搜创作者名 → 他的项目整体置顶）
//   owner 包含查询整串            +40
//   owner 每词命中                +12
//   topics 每词命中               +8
//   desc/summaryCn/reasonCn/aiDim 每词命中 +2（长尾文案只做资格线，不参与实质排序）
// - 宽松键：next js ⇔ next.js ⇔ next_js 互相等价
// - AND：每个词至少在任一字段命中
// - 同分并列按 stars 降序（同相关度时热度高的优先）
// - 截断 60；owner 命中去重 → 创作者组
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

/** 宽松键：小写 + 连字符/下划线/空格/点号全部压掉，让 nextjs ⇔ next.js ⇔ next_js 互相命中 */
const relaxKey = (s: string): string => s.toLowerCase().replace(/[-_.\s]+/g, "");

export function weightedSearch(cards: FeedCard[], query: string): SearchOutcome {
  const q = query.trim();
  if (!q) return { results: [], creators: [] };
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return { results: [], creators: [] };

  const qRelaxed = relaxKey(q);
  const termRelaxed = terms.map(relaxKey);

  const scored: { card: FeedCard; score: number; stars: number }[] = [];
  const ownerSet = new Set<string>();

  for (const card of cards) {
    const nameKey = relaxKey(card.name);
    const repoKey = relaxKey(card.repo);
    const ownerKey = relaxKey(card.owner);
    const desc = card.desc.toLowerCase();
    const summaryCn = card.summaryCn.toLowerCase();
    const reasonCn = card.reasonCn.toLowerCase();
    const aiDim = card.aiDim.toLowerCase();
    const topicsRelaxed = (card.topics ?? []).map(relaxKey);

    let score = 0;
    let allMatch = true;
    let ownerHit = false;

    // ── 名字/仓库层（断层权重）─────────────────────────────
    if (nameKey === qRelaxed || repoKey === qRelaxed) score += 1000;
    else if (nameKey.startsWith(qRelaxed) || repoKey.startsWith(qRelaxed)) score += 150;
    else if (qRelaxed.length >= 2 && (nameKey.includes(qRelaxed) || repoKey.includes(qRelaxed))) score += 80;

    // ── 创作者层 ─────────────────────────────────────────
    if (ownerKey === qRelaxed) {
      score += 400;
      ownerHit = true;
    } else if (ownerKey.startsWith(qRelaxed) || (qRelaxed.length >= 2 && ownerKey.includes(qRelaxed))) {
      score += 40;
      ownerHit = true;
    }

    // ── 逐词命中（AND：每词至少命中一处）─────────────────
    for (let t = 0; t < terms.length; t++) {
      const term = terms[t];
      const tRelaxed = termRelaxed[t];
      let hit = false;

      if (nameKey.includes(tRelaxed) || repoKey.includes(tRelaxed)) {
        score += 25;
        hit = true;
      }
      if (ownerKey.includes(tRelaxed)) {
        score += 12;
        ownerHit = true;
        hit = true;
      }
      if (topicsRelaxed.some((tp) => tp.includes(tRelaxed))) {
        score += 8;
        hit = true;
      }
      if (desc.includes(term) || summaryCn.includes(term) || reasonCn.includes(term) || aiDim.includes(term)) {
        score += 2; // 长尾文案层
        hit = true;
      }

      if (!hit) {
        allMatch = false;
        break;
      }
    }

    if (!allMatch) continue;
    scored.push({ card, score, stars: card.stars });
    if (ownerHit) ownerSet.add(card.owner);
  }

  // 相关度断层排序；同分时热度高的优先
  scored.sort((a, b) => b.score - a.score || b.stars - a.stars);
  const results = scored.slice(0, MAX_RESULTS).map((s) => s.card);

  const creators = [...ownerSet]
    .map((owner) => ({ owner, count: cards.filter((c) => c.owner === owner).length }))
    .sort((a, b) => b.count - a.count);

  return { results, creators };
}
