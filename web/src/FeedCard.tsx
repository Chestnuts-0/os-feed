import { memo } from "react";
import type { FeedCard as Card } from "./types.ts";

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

// ---------------------------------------------------------------------------
// 语言颜色映射（常见语言）
// ---------------------------------------------------------------------------

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Vue: "#41b883",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Jupyter: "#DA5B0B",
};

// ---------------------------------------------------------------------------
// 组件
// ---------------------------------------------------------------------------

interface Props {
  card: Card;
  liked: boolean;
  disliked: boolean;
  onLike: (repo: string) => void;
  onDislike: (repo: string) => void;
}

function FeedCardComponent({ card, liked, disliked, onLike, onDislike }: Props) {
  const langColor = LANG_COLORS[card.language] ?? "#666";

  return (
    <article className="card">
      {/* 头部：头像 + 仓库名 + 来源标记 */}
      <div className="card-header">
        <img
          src={`https://github.com/${card.owner}.png?size=48`}
          alt=""
          className="avatar"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="card-title">
          <a href={card.url} target="_blank" rel="noopener noreferrer" className="repo-link">
            <span className="repo-owner">{card.owner}</span>
            <span className="repo-sep">/</span>
            <span className="repo-name">{card.name}</span>
          </a>
          <div className="card-subtitle">
            <span className={`source-badge source-${card.source}`}>
              {sourceLabel(card.source)}
            </span>
            <span className="time-ago">{timeAgo(card.ts)}</span>
          </div>
        </div>
      </div>

      {/* 中文推荐理由（核心内容） */}
      {card.reasonCn ? (
        <p className="reason">{card.reasonCn}</p>
      ) : card.desc ? (
        <p className="reason muted">{card.desc}</p>
      ) : null}

      {/* 元信息条 */}
      <div className="card-meta">
        <span className="meta-item stars" title={`${card.stars} stars`}>
          ★ {formatStars(card.stars)}
        </span>
        {card.starGrowth > 0 && (
          <span className="meta-item growth">+{card.starGrowth} today</span>
        )}
        {card.language && (
          <span className="meta-item lang">
            <span className="lang-dot" style={{ background: langColor }} />
            {card.language}
          </span>
        )}
        <span className="meta-item dim">{card.aiDim}</span>
      </div>

      {/* Topic 标签 */}
      {card.topics.length > 0 && (
        <div className="topics">
          {card.topics.slice(0, 6).map((t) => (
            <span key={t} className="topic-tag">{t}</span>
          ))}
        </div>
      )}

      {/* 大牛背书 */}
      {card.bigbros.length > 0 && (
        <div className="bigbro-endorse">
          <span className="endorse-icon">👥</span>
          <span className="endorse-text">
            {card.bigbros.slice(0, 3).join("、")}
            {card.bigbros.length > 3 && ` 等${card.bigbros.length}位`}
            {" "}关注的大牛 star 了
          </span>
        </div>
      )}

      {/* 操作按钮 */}
      <div className="card-actions">
        <button
          className={`action-btn like-btn${liked ? " active" : ""}`}
          onClick={() => onLike(card.repo)}
        >
          {liked ? "❤️ 已赞" : "👍 赞"}
        </button>
        <button
          className={`action-btn dislike-btn${disliked ? " active" : ""}`}
          onClick={() => onDislike(card.repo)}
        >
          ✕ 不感兴趣
        </button>
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn open-btn"
        >
          打开 ↗
        </a>
      </div>
    </article>
  );
}

export const FeedCardMemo = memo(FeedCardComponent);
