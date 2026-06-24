import { memo, useState } from "react";
import type { FeedCard as Card, Collection } from "./types.ts";

// ---------------------------------------------------------------------------
// 工具函数
// ---------------------------------------------------------------------------

function formatStars(n: number): string {
  if (n >= 10000) return (n / 10000).toFixed(1) + "w";
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
}

function sourceLabel(src: string): string {
  switch (src) {
    case "trending": return "🔥 热门";
    case "bigbro": return "👥 大牛";
    case "search": return "🔍 搜索";
    default: return src;
  }
}

function timeAgo(ts: string): string {
  const diff = Date.now() - new Date(ts).getTime();
  const h = Math.floor(diff / 3_600_000);
  if (h < 1) return "刚刚";
  if (h < 24) return `${h}小时前`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}天前`;
  return `${Math.floor(d / 30)}个月前`;
}

// 清理旧数据中的 ①②③ 序号
function cleanReason(text: string): string {
  return text.replace(/[①②③④⑤⑥⑦⑧⑨⑩]/g, "");
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6", JavaScript: "#f1e05a", Python: "#3572A5",
  Go: "#00ADD8", Rust: "#dea584", Java: "#b07219",
  "C++": "#f34b7d", C: "#555555", "C#": "#178600",
  Ruby: "#701516", Swift: "#F05138", Kotlin: "#A97BFF",
  Dart: "#00B4AB", Vue: "#41b883", HTML: "#e34c26",
  CSS: "#563d7c", Shell: "#89e051", Jupyter: "#DA5B0B",
  PHP: "#4F5D95",
};

// ---------------------------------------------------------------------------
// 紧凑卡片组件（两列网格用）
// ---------------------------------------------------------------------------

interface Props {
  card: Card;
  liked: boolean;
  onOpen: (card: Card) => void;
}

function FeedCardComponent({ card, liked, onOpen }: Props) {
  const langColor = LANG_COLORS[card.language] ?? "#666";
  const reason = cleanReason(card.reasonCn);

  return (
    <article className="card" onClick={() => onOpen(card)}>
      {liked && <span className="card-liked" title="已点赞">❤️</span>}
      <div className="card-header">
        <img
          src={`https://github.com/${card.owner}.png?size=40`}
          alt=""
          className="avatar"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="card-title">
          <span className="repo-link">
            <span className="repo-owner">{card.owner}</span>
            <span className="repo-sep">/</span>
            <span className="repo-name">{card.name}</span>
          </span>
          <div className="card-subtitle">
            <span className={`source-badge source-${card.source}`}>
              {sourceLabel(card.source)}
            </span>
            <span>{timeAgo(card.ts)}</span>
          </div>
        </div>
      </div>

      {card.summaryCn && <p className="summary">{card.summaryCn}</p>}

      {reason && <p className="reason-clamped">{reason}</p>}

      <div className="card-meta">
        <span className="meta-item stars" title={`${card.stars} stars`}>
          ★ {formatStars(card.stars)}
        </span>
        {card.starGrowth > 0 && (
          <span className="meta-item growth">+{card.starGrowth}</span>
        )}
        {card.language && (
          <span className="meta-item">
            <span className="lang-dot" style={{ background: langColor }} />
            {card.language}
          </span>
        )}
        <span className="dim-badge">{card.aiDim}</span>
      </div>
    </article>
  );
}

export const FeedCardMemo = memo(FeedCardComponent);

// ---------------------------------------------------------------------------
// 详情弹窗组件
// ---------------------------------------------------------------------------

interface DetailProps {
  card: Card;
  liked: boolean;
  disliked: boolean;
  collections: Collection[];
  onLike: (repo: string) => void;
  onDislike: (repo: string) => void;
  onUpdateCollections: (collections: Collection[]) => void;
  onClose: () => void;
}

export function CardDetail({ card, liked, disliked, collections, onLike, onDislike, onUpdateCollections, onClose }: DetailProps) {
  const langColor = LANG_COLORS[card.language] ?? "#666";
  const reason = cleanReason(card.reasonCn);

  const [showPicker, setShowPicker] = useState(false);
  const [newName, setNewName] = useState("");

  const inCollections = collections.filter((c) => c.repos.includes(card.repo));

  const toggleCollection = (colId: string) => {
    const next = collections.map((c) => {
      if (c.id !== colId) return c;
      const has = c.repos.includes(card.repo);
      return { ...c, repos: has ? c.repos.filter((r) => r !== card.repo) : [...c.repos, card.repo] };
    });
    onUpdateCollections(next);
  };

  const createAndAdd = () => {
    const name = newName.trim();
    if (!name) return;
    const newCol: Collection = {
      id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name,
      repos: [card.repo],
      createdAt: new Date().toISOString(),
      isAuto: false,
    };
    onUpdateCollections([...collections, newCol]);
    setNewName("");
  };

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-card" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>✕</button>

        <div className="detail-header">
          <img
            src={`https://github.com/${card.owner}.png?size=56`}
            alt=""
            className="detail-avatar"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div>
            <div className="detail-repo">
              <span className="repo-owner">{card.owner}</span>
              <span className="repo-sep"> / </span>
              <span className="repo-name">{card.name}</span>
            </div>
            <div className="detail-subtitle">
              <span className={`source-badge source-${card.source}`}>
                {sourceLabel(card.source)}
              </span>
              <span>{timeAgo(card.ts)}</span>
            </div>
          </div>
        </div>

        {card.summaryCn && <p className="detail-summary">{card.summaryCn}</p>}

        {reason && (
          <>
            <div className="detail-label">简要介绍</div>
            <p className="detail-reason">{reason}</p>
          </>
        )}

        {card.detailCn && (
          <>
            <div className="detail-label">深度解读</div>
            <p className="detail-detail">{card.detailCn}</p>
          </>
        )}

        <div className="detail-meta">
          <span className="meta-item stars" title={`${card.stars} stars`}>
            ★ {formatStars(card.stars)} stars
          </span>
          {card.starGrowth > 0 && (
            <span className="meta-item growth">+{card.starGrowth} 今日增长</span>
          )}
          {card.language && (
            <span className="meta-item">
              <span className="lang-dot" style={{ background: langColor }} />
              {card.language}
            </span>
          )}
          <span className="dim-badge">{card.aiDim}</span>
        </div>

        {card.topics.length > 0 && (
          <div className="detail-topics">
            {card.topics.map((t) => (
              <span key={t} className="topic-tag">{t}</span>
            ))}
          </div>
        )}

        {card.bigbros.length > 0 && (
          <div className="detail-bigbro">
            <span style={{ fontSize: "1.1rem" }}>👥</span>
            <span>
              <strong style={{ color: "#c4b5fd" }}>
                {card.bigbros.slice(0, 3).join("、")}
              </strong>
              {card.bigbros.length > 3 && ` 等${card.bigbros.length}位`}
              {" "}关注的大牛 star 了
            </span>
          </div>
        )}

        <div className="detail-actions">
          <button
            className={`action-btn like-btn${liked ? " active" : ""}`}
            onClick={() => onLike(card.repo)}
          >
            👍
          </button>
          <button
            className={`action-btn dislike-btn${disliked ? " active" : ""}`}
            onClick={() => onDislike(card.repo)}
          >
            👎
          </button>
          <button
            className={`action-btn bookmark-btn${inCollections.length > 0 ? " active" : ""}`}
            onClick={() => setShowPicker(!showPicker)}
            title={inCollections.length > 0 ? `已收藏到 ${inCollections.map(c => c.name).join("、")}` : "收藏"}
          >
            ⭐
          </button>
          <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn open-btn"
          >
            GitHub 主页 ↗
          </a>
        </div>

        {/* 收藏夹选择器 */}
        {showPicker && (
          <div className="collection-picker" onClick={(e) => e.stopPropagation()}>
            <div className="picker-header">
              <span>选择收藏夹</span>
              <button className="picker-close" onClick={() => setShowPicker(false)}>✕</button>
            </div>
            <div className="picker-list">
              {collections.length === 0 && (
                <p className="picker-empty">暂无收藏夹，在下方创建</p>
              )}
              {collections.map((col) => {
                const checked = col.repos.includes(card.repo);
                return (
                  <label key={col.id} className="picker-item">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleCollection(col.id)}
                    />
                    <span className="picker-item-name">{col.name}</span>
                    <span className="picker-item-count">({col.repos.length}个)</span>
                  </label>
                );
              })}
            </div>
            <div className="picker-create">
              <input
                type="text"
                className="picker-input"
                placeholder="新建收藏夹…"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") createAndAdd(); }}
              />
              <button className="picker-create-btn" onClick={createAndAdd} disabled={!newName.trim()}>
                + 创建
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
