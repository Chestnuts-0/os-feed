import { memo, useEffect, useRef, useState } from "react";
import type { FeedCard as Card, Collection } from "./types.ts";
import {
  ExternalLink,
  Heart,
  Star,
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
  UserRound,
  Users,
  X,
  BADGE_ICONS,
  BADGE_LABELS,
  SOURCE_ICONS,
  SOURCE_LABELS,
} from "./icons.tsx";

// ---------------------------------------------------------------------------
// 工具函数
// ---------------------------------------------------------------------------

function formatStars(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
}

function sourceLabel(src: string): string {
  return SOURCE_LABELS[src] ?? src;
}

/** 数据来源徽章（图标 + 文字） */
function SourceBadge({ src }: { src: string }) {
  const SI = SOURCE_ICONS[src];
  return (
    <span className={`source-badge source-${src}`}>
      {SI && <SI size={12} />}
      {sourceLabel(src)}
    </span>
  );
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
  PHP: "#4F5D95",
};

// ---------------------------------------------------------------------------
// 头像预加载组件（IntersectionObserver rootMargin 500px 提前加载 + 骨架屏占位）
// ---------------------------------------------------------------------------

const PRELOAD_MARGIN = "500px";

interface AvatarProps {
  owner: string;
  size: number;
  className: string;
}

export function GithubAvatar({ owner, size, className }: AvatarProps) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const src = `https://avatars.githubusercontent.com/${owner}?s=${size}&v=4`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // 已加载完成（含失败）无需再观察
    if (loaded) return;
    // src 已就绪：浏览器原生 lazy 会自己加载视口内的图；
    // observer 仅做「提前 500px 预加载」—— 进入 rootMargin 范围就把 src 再设一次触发加载
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.src = src;
          observer.disconnect();
        }
      },
      { rootMargin: PRELOAD_MARGIN },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src, loaded]);

  return (
    <span className={`avatar-wrap ${className}-wrap`}>
      {!loaded && <span className="avatar-skeleton" aria-hidden="true" />}
      <img
        ref={ref}
        alt=""
        className={className}
        src={src}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </span>
  );
}

// ---------------------------------------------------------------------------
// 频道徽章：显示「当前频道之外它还属于谁」（一个项目有多个标签显性化）
// ---------------------------------------------------------------------------

const DYNAMIC_CHANNEL_KEYS = new Set(["hot", "daily", "following"]);

/** 徽章 = 当前频道之外的归属，badges 存 key（渲染时查 BADGE_ICONS/BADGE_LABELS）。
 *  channel 为空（喜欢/收藏等场景）不显示徽章。 */
function channelBadges(card: Card, channel?: string): string[] {
  if (!channel) return [];
  const badges: string[] = [];
  const pushDynamic = () => {
    if (card.momentum?.includes("hot")) badges.push("hot");
    if (card.momentum?.includes("daily")) badges.push("daily");
  };
  if (channel === "recommended" || !DYNAMIC_CHANNEL_KEYS.has(channel)) {
    // 推荐流：全部动态徽章；分类频道：显示动态徽章（分类本身就是当前频道，不重复显示）
    pushDynamic();
  } else {
    // 动态频道：显示固有分类徽章
    badges.push(card.category);
  }
  return badges;
}

// ---------------------------------------------------------------------------
// 紧凑卡片组件（两列网格用）
// ---------------------------------------------------------------------------

interface Props {
  card: Card;
  liked: boolean;
  dismissing?: boolean;
  onOpen: (card: Card) => void;
  channel?: string;
  onOpenCreator?: (owner: string) => void;
}

function FeedCardComponent({ card, liked, dismissing = false, onOpen, channel, onOpenCreator }: Props) {
  const langColor = LANG_COLORS[card.language] ?? "#666";
  const reason = cleanReason(card.reasonCn);
  const badges = channelBadges(card, channel);

  return (
    <article className={`card${dismissing ? " dismissing" : ""}`} onClick={() => onOpen(card)}>
      {liked && (
        <span className="card-liked" title="已点赞">
          <Heart size={14} fill="currentColor" />
        </span>
      )}
      <div className="card-header">
        <GithubAvatar owner={card.owner} size={40} className="avatar" />
        <div className="card-title">
          <span className="repo-link">
            {onOpenCreator ? (
              <button
                className="repo-owner repo-owner-btn"
                title={`查看 ${card.owner} 的创作者页`}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCreator(card.owner);
                }}
              >
                {card.owner}
              </button>
            ) : (
              <span className="repo-owner">{card.owner}</span>
            )}
            <span className="repo-sep">/</span>
            <span className="repo-name">{card.name}</span>
          </span>
          <div className="card-subtitle">
            <SourceBadge src={card.source} />
            <span>{timeAgo(card.ts)}</span>
            {badges.map((b) => {
              const BI = BADGE_ICONS[b];
              return (
                <span key={b} className="card-badge">
                  {BI && <BI size={12} />}
                  {BADGE_LABELS[b] ?? b}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* 始终渲染：空内容靠 min-height 占位 2 行，保证全站卡片高度一致 */}
      <p className="summary">{card.summaryCn}</p>

      {reason && <p className="reason-clamped">{reason}</p>}

      <div className="card-meta">
        <span className="meta-item stars" title={`${card.stars} stars`}>
          <Star size={14} />
          {formatStars(card.stars)}
        </span>
        {card.starGrowth > 0 && (
          <span className="meta-item growth">
            <TrendingUp size={14} />+{card.starGrowth}
          </span>
        )}
        {card.language && (
          <span className="meta-item">
            <span className="lang-dot" style={{ background: langColor }} />
            {card.language}
          </span>
        )}
      </div>

      {card.tags && card.tags.length > 0 && (
        <div className="card-tags">
          {card.tags.slice(0, 8).map((tag) => (
            <span key={tag.name} className={`tag-chip tag-${tag.source}`}>
              {tag.name}
            </span>
          ))}
          {card.tags.length > 8 && <span className="tag-chip tag-more">+{card.tags.length - 8}</span>}
        </div>
      )}
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
  onOpenCreator?: (owner: string) => void;
}

export function CardDetail({
  card,
  liked,
  disliked,
  collections,
  onLike,
  onDislike,
  onUpdateCollections,
  onClose,
  onOpenCreator,
}: DetailProps) {
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
        <button className="detail-close" onClick={onClose}>
          <X size={18} />
        </button>

        <div className="detail-header">
          <GithubAvatar owner={card.owner} size={56} className="detail-avatar" />
          <div>
            <div className="detail-repo">
              <span className="repo-owner">{card.owner}</span>
              <span className="repo-sep"> / </span>
              <span className="repo-name">{card.name}</span>
            </div>
            <div className="detail-subtitle">
              <SourceBadge src={card.source} />
              <span>{timeAgo(card.ts)}</span>
            </div>
          </div>
          {onOpenCreator && (
            <button
              className="detail-creator-btn"
              title={`查看 ${card.owner} 的创作者页`}
              onClick={() => onOpenCreator(card.owner)}
            >
              <UserRound size={14} />
              查看创作者
            </button>
          )}
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
            <Star size={14} />
            {formatStars(card.stars)} stars
          </span>
          {card.starGrowth > 0 && (
            <span className="meta-item growth">
              <TrendingUp size={14} />+{card.starGrowth} 今日增长
            </span>
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
              <span key={t} className="topic-tag">
                {t}
              </span>
            ))}
          </div>
        )}

        {card.bigbros.length > 0 && (
          <div className="detail-bigbro">
            <Users size={16} />
            <span>
              <strong style={{ color: "#c4b5fd" }}>{card.bigbros.slice(0, 3).join("、")}</strong>
              {card.bigbros.length > 3 && ` 等${card.bigbros.length}位`} 关注的大牛 star 了
            </span>
          </div>
        )}

        <div className="detail-actions">
          <button
            className={`action-btn like-btn${liked ? " active" : ""}`}
            onClick={() => onLike(card.repo)}
          >
            <ThumbsUp size={20} />
          </button>
          <button
            className={`action-btn dislike-btn${disliked ? " active" : ""}`}
            onClick={() => onDislike(card.repo)}
          >
            <ThumbsDown size={20} />
          </button>
          <button
            className={`action-btn bookmark-btn${inCollections.length > 0 ? " active" : ""}`}
            onClick={() => setShowPicker(!showPicker)}
            title={
              inCollections.length > 0 ? `已收藏到 ${inCollections.map((c) => c.name).join("、")}` : "收藏"
            }
          >
            <Star size={20} />
          </button>
          <a href={card.url} target="_blank" rel="noopener noreferrer" className="action-btn open-btn">
            <ExternalLink size={18} />
            GitHub 主页
          </a>
        </div>

        {/* 收藏夹选择器 */}
        {showPicker && (
          <div className="collection-picker" onClick={(e) => e.stopPropagation()}>
            <div className="picker-header">
              <span>选择收藏夹</span>
              <button className="picker-close" onClick={() => setShowPicker(false)}>
                <X size={16} />
              </button>
            </div>
            <div className="picker-list">
              {collections.length === 0 && <p className="picker-empty">暂无收藏夹，在下方创建</p>}
              {collections.map((col) => {
                const checked = col.repos.includes(card.repo);
                return (
                  <label key={col.id} className="picker-item">
                    <input type="checkbox" checked={checked} onChange={() => toggleCollection(col.id)} />
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") createAndAdd();
                }}
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
