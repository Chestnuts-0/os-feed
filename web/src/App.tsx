import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import type { FeedCard, Collection } from "./types.ts";
import { FeedCardMemo, CardDetail } from "./FeedCard.tsx";
import "./styles.css";

// ---------------------------------------------------------------------------
// 常量
// ---------------------------------------------------------------------------

const FEED_URL = "./data/feed.json";
const STORAGE_KEY = "os-feed-feedback";
const PREF_KEY = "os-feed-preferences";
const BIGBRO_NAME = "KKKKhazix";
const COLLECTIONS_KEY = "os-feed-collections";
const SEEN_KEY = "os-feed-seen";
const INTERACTIONS_KEY = "os-feed-interactions";

type Tab = "feed" | "liked" | "collections" | "bigbro" | "search" | "chat";

interface Feedback {
  likes: string[];
  dislikes: string[];
  /** 喜欢过的卡片快照（repo → 卡片本体）。点赞时留存，列表展示不依赖当天数据 */
  likedSnapshots?: Record<string, FeedCard>;
}

interface Preferences {
  tagWeights: Record<string, number>;
  lastUpdateTs: string;
}

type InteractionType = "like" | "dislike" | "bookmark";

interface InteractionRecord {
  type: InteractionType;
  ts: number;
}

// 虚拟列表配置
const OVERSCAN = 150; // 视口外上下各提前渲染 150px（多虚拟列表共存时减小缓冲，避免滚动深处测量冲突）
const CARD_ESTIMATED_HEIGHT = 240; // 首卡实测前的估算值（不高不低，避免跳动）
const ROW_GAP = 16; // feed-list 网格 gap
const SNAPSHOT_CAP = 1000; // 喜欢/收藏快照总条数上限（~1KB/张，1MB 内安全；超出后新操作只记 repo 名）

const SECTIONS: { key: string; icon: string; title: string; desc: string }[] = [
  { key: "hot", icon: "🔥", title: "热门", desc: "高星项目" },
  { key: "ai", icon: "🤖", title: "AI前沿", desc: "AI核心技术" },
  { key: "daily", icon: "📈", title: "每日飙升", desc: "今日star增长" },
  { key: "authoritative", icon: "🏛️", title: "权威", desc: "官方发布" },
  { key: "rising", icon: "🚀", title: "新锐发现", desc: "小而美潜力股" },
  { key: "fun", icon: "🎮", title: "兴趣", desc: "好玩有趣" },
  { key: "skill", icon: "⚡", title: "技能", desc: "Agent Skill" },
  { key: "learning", icon: "📚", title: "学习", desc: "教程与资源" },
];

// ---------------------------------------------------------------------------
// localStorage
// ---------------------------------------------------------------------------

function loadFeedback(): Feedback {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Feedback;
      return {
        likes: parsed.likes ?? [],
        dislikes: parsed.dislikes ?? [],
        likedSnapshots: parsed.likedSnapshots ?? {},
      };
    }
  } catch {
    /* ignore */
  }
  return { likes: [], dislikes: [], likedSnapshots: {} };
}

function saveFeedback(fb: Feedback): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fb));
  } catch {
    /* ignore */
  }
}

function loadPreferences(): Preferences {
  try {
    const raw = localStorage.getItem(PREF_KEY);
    if (raw) return JSON.parse(raw) as Preferences;
  } catch {
    /* ignore */
  }
  return { tagWeights: {}, lastUpdateTs: "" };
}

function savePreferences(prefs: Preferences): void {
  try {
    localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
  } catch {
    /* ignore */
  }
}

function loadCollections(): Collection[] {
  try {
    const raw = localStorage.getItem(COLLECTIONS_KEY);
    if (raw) return JSON.parse(raw) as Collection[];
  } catch {
    /* ignore */
  }
  return [];
}

function saveCollections(cols: Collection[]): void {
  try {
    localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(cols));
  } catch {
    /* ignore */
  }
}

function loadSeen(): Record<string, number> {
  try {
    const raw = localStorage.getItem(SEEN_KEY);
    if (raw) return JSON.parse(raw) as Record<string, number>;
  } catch {
    /* ignore */
  }
  return {};
}

function saveSeen(s: Record<string, number>): void {
  try {
    localStorage.setItem(SEEN_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

function loadInteractions(): Record<string, InteractionRecord> {
  try {
    const raw = localStorage.getItem(INTERACTIONS_KEY);
    if (raw) return JSON.parse(raw) as Record<string, InteractionRecord>;
  } catch {
    /* ignore */
  }
  return {};
}

function saveInteractions(ints: Record<string, InteractionRecord>): void {
  try {
    localStorage.setItem(INTERACTIONS_KEY, JSON.stringify(ints));
  } catch {
    /* ignore */
  }
}

// ---------------------------------------------------------------------------
// 前端内容过滤
// ---------------------------------------------------------------------------

function applyFilter(
  cards: FeedCard[],
  seen: Record<string, number>,
  interactions: Record<string, InteractionRecord>,
  collections: Collection[],
): FeedCard[] {
  const now = Date.now();
  const DAY_MS = 86_400_000;
  const bookmarkedRepos = new Set(collections.flatMap((c) => c.repos));

  const filterFn = (maxSeenAgeDays: number): FeedCard[] => {
    return cards.filter((card) => {
      // 收藏的项目永久保留
      if (bookmarkedRepos.has(card.repo)) return true;

      const interaction = interactions[card.repo];
      if (interaction?.type === "dislike") {
        const daysSince = (now - interaction.ts) / DAY_MS;
        // 7天内点踩的过滤
        if (daysSince < 7) return false;
        // >= 7天：给二次机会
      }

      const seenTs = seen[card.repo];
      // 看过但未互动，超过阈值则过滤
      if (seenTs && !interaction) {
        const daysSinceSeen = (now - seenTs) / DAY_MS;
        if (daysSinceSeen > maxSeenAgeDays) return false;
      }

      return true;
    });
  };

  let filtered = filterFn(30);
  // 硬保底：至少 1000 张
  if (filtered.length < 1000) {
    filtered = filterFn(90);
  }
  return filtered;
}

// ---------------------------------------------------------------------------
// 向后兼容：旧数据没有 summaryCn / category，或 reasonCn 带 ①②③
// ---------------------------------------------------------------------------

const AUTHORITATIVE_ORGS = new Set([
  "openai",
  "anthropics",
  "google",
  "google-gemini",
  "google-research",
  "microsoft",
  "meta",
  "facebookresearch",
  "huggingface",
  "nvidia",
  "stabilityai",
  "pytorch",
  "tensorflow",
  "langchain-ai",
  "ollama",
  "vllm-project",
  "ggerganov",
  "QwenLM",
  "deepseek-ai",
  "mistralai",
]);

const LEARNING_RE = /awesome|tutorial|learn|course|guide|roadmap|study|educat/i;

function normalizeCard(card: FeedCard): FeedCard {
  if (card.reasonCn) {
    card.reasonCn = card.reasonCn.replace(/[①②③④⑤⑥⑦⑧⑨⑩]/g, "");
  }
  if (!card.summaryCn || card.summaryCn.length === 0) {
    if (card.reasonCn) {
      const cleaned = card.reasonCn.replace(/[①②③④⑤⑥⑦⑧⑨⑩]/g, "");
      const match = cleaned.match(/^[^。！？\n]*[。！？]?/);
      card.summaryCn = match ? match[0].trim() : cleaned.slice(0, 40);
    } else {
      card.summaryCn = card.name;
    }
  }
  if (!card.detailCn) card.detailCn = "";
  // 向后兼容：补 aiDims / tags
  if (!card.aiDims || card.aiDims.length === 0) {
    card.aiDims = card.aiDim ? [card.aiDim] : [];
  }
  if (!card.tags) card.tags = [];
  if (!card.category) {
    const repoLower = card.repo.toLowerCase();
    const descLower = card.desc.toLowerCase();
    const topicsLower = card.topics.map((t) => t.toLowerCase());
    const allText = `${repoLower} ${descLower} ${topicsLower.join(" ")}`;
    const dims = card.aiDims || [card.aiDim];
    if (repoLower.includes("skill") || topicsLower.some((t) => t.includes("skill"))) {
      card.category = "skill";
    } else if (LEARNING_RE.test(allText) || topicsLower.includes("awesome")) {
      card.category = "learning";
    } else if (dims.some((d) => d === "非AI-好玩" || d === "游戏" || d === "创意工具")) {
      card.category = "fun";
    } else if (dims.some((d) => /^(AI|模型|RAG|推理|Agent|大语言|微调|提示|代码助手|向量)/.test(d))) {
      card.category = "ai";
    } else if (AUTHORITATIVE_ORGS.has(card.owner) && card.stars >= 500) {
      card.category = "authoritative";
    } else if (card.starGrowth >= 5) {
      card.category = "daily";
    } else if (card.stars < 1000 && card.aiScore >= 0.6) {
      card.category = "rising";
    } else {
      card.category = "hot";
    }
  }
  return card;
}

// ---------------------------------------------------------------------------
// 分区卡片选取
// ---------------------------------------------------------------------------

function getSectionCards(cards: FeedCard[], sectionKey: string): FeedCard[] {
  return cards.filter((c) => c.category === sectionKey);
}

// ---------------------------------------------------------------------------
// 分区虚拟列表（每区独立虚拟化，window 滚动 + 动态 scrollMargin 适配多分区偏移）
// ---------------------------------------------------------------------------

interface FeedVirtualListProps {
  cards: FeedCard[];
  likedSet: Set<string>;
  dismissingSet: Set<string>;
  onOpen: (card: FeedCard) => void;
  onEndHint?: string;
}

// 单行组件：IntersectionObserver 精确感知视口（只给真正可见的行开 blur）+ 行高真实测量
interface FeedVirtualRowProps {
  rowIndex: number;
  rowStart: number;
  scrollMargin: number;
  left: FeedCard;
  right?: FeedCard;
  likedSet: Set<string>;
  dismissingSet: Set<string>;
  onOpen: (card: FeedCard) => void;
  measureRef?: (node: HTMLDivElement | null) => void;
}

function FeedVirtualRow({
  rowIndex,
  rowStart,
  scrollMargin,
  left,
  right,
  likedSet,
  dismissingSet,
  onOpen,
  measureRef,
}: FeedVirtualRowProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        setInViewport(entries[0]?.isIntersecting ?? false);
      },
      { rootMargin: "0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={(node) => {
        rowRef.current = node;
        measureRef?.(node);
      }}
      data-row={rowIndex}
      data-index={rowIndex}
      className={`feed-virtual-row${inViewport ? " vf-in-viewport" : ""}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: `translateY(${rowStart - scrollMargin}px)`,
      }}
    >
      <div className="feed-virtual-grid">
        {left && (
          <div className="feed-virtual-cell">
            <FeedCardMemo
              card={left}
              liked={likedSet.has(left.repo)}
              dismissing={dismissingSet.has(left.repo)}
              onOpen={onOpen}
            />
          </div>
        )}
        {right && (
          <div className="feed-virtual-cell">
            <FeedCardMemo
              card={right}
              liked={likedSet.has(right.repo)}
              dismissing={dismissingSet.has(right.repo)}
              onOpen={onOpen}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function FeedVirtualList({ cards, likedSet, dismissingSet, onOpen, onEndHint }: FeedVirtualListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  // 列表容器相对文档顶部的偏移（前序分区高度变化时会变，需动态测量）
  const [scrollMargin, setScrollMargin] = useState(0);

  // 动态测量列表容器文档偏移：自身/前序内容尺寸变化、窗口 resize 都会影响
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      setScrollMargin(Math.round(rect.top + window.scrollY));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // 行数 = 每行 2 卡（两列网格）
  const rowCount = Math.ceil(cards.length / 2);
  const rowVirtualizer = useWindowVirtualizer({
    count: rowCount,
    // 初始估算（测量前）；measureElement 生效后每行按真实高度排布，卡高自适应零撑高
    estimateSize: () => CARD_ESTIMATED_HEIGHT + ROW_GAP,
    measureElement: (el) => {
      const h = el?.getBoundingClientRect().height;
      return h > 0 ? h : CARD_ESTIMATED_HEIGHT + ROW_GAP;
    },
    overscan: Math.max(1, Math.ceil(OVERSCAN / CARD_ESTIMATED_HEIGHT)),
    scrollMargin,
    getItemKey: (index) => cards[index * 2]?.repo ?? `row-${index}`,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();

  return (
    <div className="feed-virtual" ref={listRef}>
      <div
        className="feed-virtual-spacer"
        style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: "relative" }}
      >
        {virtualRows.map((row) => {
          const left = cards[row.index * 2];
          const right = cards[row.index * 2 + 1];
          if (!left && !right) return null;
          return (
            <FeedVirtualRow
              key={row.key}
              rowIndex={row.index}
              rowStart={row.start}
              scrollMargin={rowVirtualizer.options.scrollMargin}
              left={left}
              right={right}
              likedSet={likedSet}
              dismissingSet={dismissingSet}
              onOpen={onOpen}
              measureRef={rowVirtualizer.measureElement}
            />
          );
        })}
      </div>
      {onEndHint && <div className="section-end-hint">{onEndHint}</div>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 主组件
// ---------------------------------------------------------------------------

export default function App() {
  const [tab, setTab] = useState<Tab>("feed");
  const [cards, setCards] = useState<FeedCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Feedback>(loadFeedback);
  // 已点赞集合（供卡片 ❤️ 标记；点赞不重排，仅此集合驱动小图标）
  const likedSet = useMemo(() => new Set(feedback.likes), [feedback.likes]);
  // 权重/交互只写 localStorage，不触发重渲染（交互零重排核心：点赞/点踩不重算 sections）
  const [preferences] = useState<Preferences>(loadPreferences);
  const prefsRef = useRef(preferences);
  const [interactions] = useState<Record<string, InteractionRecord>>(loadInteractions);
  const interactionsRef = useRef(interactions);
  const [collections, setCollections] = useState<Collection[]>(loadCollections);
  const [seen, setSeen] = useState<Record<string, number>>(loadSeen);
  const [expandedCols, setExpandedCols] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(10);
  const [detailCard, setDetailCard] = useState<FeedCard | null>(null);
  // 点踩淡出中的卡片（300ms 动画后移除）
  const [dismissing, setDismissing] = useState<Set<string>>(new Set());
  // 本次会话已点踩消失的卡片（不再渲染，避免滚动回来复活）
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const [feedFilter, setFeedFilter] = useState<string>("");
  const sentinelRef = useRef<HTMLDivElement>(null);

  // 加载 feed.json
  useEffect(() => {
    fetch(FEED_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<FeedCard[]>;
      })
      .then((data) => {
        setCards((Array.isArray(data) ? data : []).map(normalizeCard));
        setLoading(false);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : String(err));
        setLoading(false);
      });
  }, []);

  // ESC 关闭弹窗
  useEffect(() => {
    if (!detailCard) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDetailCard(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [detailCard]);

  // 反馈操作 — 更新标签权重（只写 localStorage + ref，不触发重渲染）
  const updateTagWeights = useCallback(
    (repos: string[], delta: number) => {
      const tw = { ...prefsRef.current.tagWeights };
      for (const repo of repos) {
        const card = cards.find((c) => c.repo === repo);
        if (!card) continue;
        for (const tag of card.tags || []) {
          const factor = tag.source === "llm" ? 1.0 : 0.5;
          tw[tag.name] = Math.max(0.01, Math.min(1.0, (tw[tag.name] ?? 0.15) + delta * factor));
        }
      }
      const next = { tagWeights: tw, lastUpdateTs: new Date().toISOString() };
      prefsRef.current = next;
      savePreferences(next);
    },
    [cards],
  );

  const handleLike = useCallback(
    (repo: string) => {
      setFeedback((prev) => {
        const likes = prev.likes.includes(repo)
          ? prev.likes.filter((r) => r !== repo)
          : [...prev.likes, repo];
        const dislikes = prev.dislikes.filter((r) => r !== repo);
        // 点赞时留存卡片快照（列表展示不依赖当天数据）；超容量上限则只记 repo 名
        const likedSnapshots = { ...(prev.likedSnapshots ?? {}) };
        if (likes.includes(repo) && !likedSnapshots[repo]) {
          const card = cards.find((c) => c.repo === repo);
          if (card && Object.keys(likedSnapshots).length < SNAPSHOT_CAP) {
            likedSnapshots[repo] = card;
          }
        }
        const next = { likes, dislikes, likedSnapshots };
        saveFeedback(next);
        return next;
      });
      // 记录交互（只写 localStorage + ref，不触发重渲染/重排）
      interactionsRef.current = {
        ...interactionsRef.current,
        [repo]: { type: "like" as InteractionType, ts: Date.now() },
      };
      saveInteractions(interactionsRef.current);
      // 权重累加（原逻辑保留），排序在下次页面加载/刷新时生效 —— 不触发 sections 重算
      updateTagWeights([repo], 0.03);
    },
    [updateTagWeights, cards],
  );

  const handleDislike = useCallback(
    (repo: string) => {
      setFeedback((prev) => {
        const dislikes = prev.dislikes.includes(repo)
          ? prev.dislikes.filter((r) => r !== repo)
          : [...prev.dislikes, repo];
        const likes = prev.likes.filter((r) => r !== repo);
        const next = { likes, dislikes };
        saveFeedback(next);
        return next;
      });
      // 记录交互（只写 localStorage + ref，不触发重渲染/重排）
      interactionsRef.current = {
        ...interactionsRef.current,
        [repo]: { type: "dislike" as InteractionType, ts: Date.now() },
      };
      saveInteractions(interactionsRef.current);
      // 权重累加（原逻辑保留），排序在下次页面加载/刷新时生效 —— 不触发 sections 重算
      updateTagWeights([repo], -0.05);
      // 点踩：卡片淡出动画后消失（不重排列表）
      setDismissing((prev) => new Set(prev).add(repo));
      window.setTimeout(() => {
        setDismissed((prev) => new Set(prev).add(repo));
        setDismissing((prev) => {
          const next = new Set(prev);
          next.delete(repo);
          return next;
        });
      }, 300);
    },
    [updateTagWeights],
  );

  const handleUpdateCollections = useCallback(
    (newCols: Collection[]) => {
      const prevBookmarked = detailCard ? collections.some((c) => c.repos.includes(detailCard.repo)) : false;
      const newBookmarked = detailCard ? newCols.some((c) => c.repos.includes(detailCard.repo)) : false;
      // 收藏时留存卡片快照（收藏夹展示不依赖当天数据；超容量上限则只记 repo 名）
      let colsWithSnapshots = newCols;
      if (detailCard && !prevBookmarked && newBookmarked) {
        colsWithSnapshots = newCols.map((c) => {
          if (!c.repos.includes(detailCard.repo)) return c;
          const snapshots = { ...(c.snapshots ?? {}) };
          if (!snapshots[detailCard.repo] && Object.keys(snapshots).length < SNAPSHOT_CAP) {
            snapshots[detailCard.repo] = detailCard;
          }
          return { ...c, snapshots };
        });
      }
      setCollections(colsWithSnapshots);
      saveCollections(colsWithSnapshots);
      if (detailCard && newBookmarked !== prevBookmarked) {
        updateTagWeights([detailCard.repo], newBookmarked ? 0.05 : -0.05);
      }
    },
    [collections, detailCard, updateTagWeights],
  );

  const handleCreateCollection = useCallback(() => {
    const name = prompt("收藏夹名称：");
    if (!name?.trim()) return;
    const newCol: Collection = {
      id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      name: name.trim(),
      repos: [],
      createdAt: new Date().toISOString(),
      isAuto: false,
    };
    setCollections((prev) => {
      const next = [...prev, newCol];
      saveCollections(next);
      return next;
    });
    setExpandedCols((prev) => ({ ...prev, [newCol.id]: true }));
  }, []);

  const handleDeleteCollection = useCallback((colId: string) => {
    if (!confirm("确定删除这个收藏夹？")) return;
    setCollections((prev) => {
      const next = prev.filter((c) => c.id !== colId);
      saveCollections(next);
      return next;
    });
  }, []);

  const handleRemoveFromCollection = useCallback((colId: string, repo: string) => {
    setCollections((prev) => {
      const next = prev.map((c) => {
        if (c.id !== colId) return c;
        const snapshots = c.snapshots ? { ...c.snapshots } : undefined;
        if (snapshots) delete snapshots[repo];
        return { ...c, repos: c.repos.filter((r) => r !== repo), snapshots };
      });
      saveCollections(next);
      return next;
    });
  }, []);

  const handleOpenDetail = useCallback((card: FeedCard) => {
    setDetailCard(card);
    // 记录已看
    setSeen((prev) => {
      const next = { ...prev, [card.repo]: Date.now() };
      saveSeen(next);
      return next;
    });
  }, []);

  // 历史数据迁移：feed 加载完成后，为旧的 likes/收藏（只有 repo 名）补快照——
  // repo 还在当天数据里的自动补上；已消失的无法找回（数据从未存过本地）
  useEffect(() => {
    if (cards.length === 0) return;
    setFeedback((prev) => {
      let changed = false;
      const likedSnapshots = { ...(prev.likedSnapshots ?? {}) };
      for (const repo of prev.likes) {
        if (!likedSnapshots[repo] && Object.keys(likedSnapshots).length < SNAPSHOT_CAP) {
          const card = cards.find((c) => c.repo === repo);
          if (card) {
            likedSnapshots[repo] = card;
            changed = true;
          }
        }
      }
      if (!changed) return prev;
      const next = { ...prev, likedSnapshots };
      saveFeedback(next);
      return next;
    });
    setCollections((prev) => {
      let changed = false;
      const next = prev.map((col) => {
        const snapshots = { ...(col.snapshots ?? {}) };
        for (const repo of col.repos) {
          if (!snapshots[repo] && Object.keys(snapshots).length < SNAPSHOT_CAP) {
            const card = cards.find((c) => c.repo === repo);
            if (card) {
              snapshots[repo] = card;
              changed = true;
            }
          }
        }
        return Object.keys(snapshots).length > 0 ? { ...col, snapshots } : col;
      });
      if (!changed) return prev;
      saveCollections(next);
      return next;
    });
  }, [cards]);

  // 过滤不感兴趣 + 过滤无中文描述的卡片 + 内容淘汰
  const visibleCards = useMemo(() => {
    const withContent = cards.filter((c) => c.reasonCn && c.reasonCn.length > 0);
    if (tab === "search") return withContent;
    return applyFilter(withContent, seen, interactions, collections);
  }, [cards, tab, seen, interactions, collections]);

  // 分区数据（不重排：展示顺序 = feed.json 后端交错后的顺序；点赞只影响下次加载）
  const sections = useMemo(() => {
    return SECTIONS.map((s) => ({
      ...s,
      cards: getSectionCards(visibleCards, s.key),
    })).filter((s) => s.cards.length > 0);
  }, [visibleCards]);

  // 过滤后的分区（feedFilter 为空显示全部，否则只显示匹配分区；点踩消失的卡不再进分区）
  const filteredSections = useMemo(() => {
    const base = sections.map((s) => ({
      ...s,
      cards: s.cards.filter((c) => !dismissed.has(c.repo)),
    }));
    const nonEmpty = base.filter((s) => s.cards.length > 0);
    if (feedFilter === "") return nonEmpty;
    return nonEmpty.filter((s) => s.key === feedFilter);
  }, [sections, feedFilter, dismissed]);

  // 喜欢的卡片（快照优先，其次匹配当天数据；快照缺失且当天数据也没有的——旧记录无法找回）
  const likedCards = useMemo(() => {
    const snapshots = feedback.likedSnapshots ?? {};
    return feedback.likes
      .map((repo) => snapshots[repo] ?? visibleCards.find((c) => c.repo === repo))
      .filter((c): c is FeedCard => !!c);
  }, [feedback.likes, feedback.likedSnapshots, visibleCards]);

  // 活跃分区检测（已移除 IntersectionObserver，改用 feedFilter）

  // 大牛卡片
  const bigbroCards = useMemo(() => {
    return visibleCards
      .filter((c) => c.bigbros.length > 0 || c.source === "bigbro")
      .sort((a, b) => b.score - a.score);
  }, [visibleCards]);

  // 搜索结果
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return visibleCards.filter(
      (c) =>
        c.repo.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q) ||
        c.summaryCn.toLowerCase().includes(q) ||
        c.reasonCn.toLowerCase().includes(q) ||
        c.aiDim.toLowerCase().includes(q) ||
        c.topics.some((t) => t.toLowerCase().includes(q)),
    );
  }, [visibleCards, searchQuery]);

  useEffect(() => {
    setSearchVisible(10);
  }, [searchQuery]);

  // 搜索无限滚动
  useEffect(() => {
    if (tab !== "search") return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setSearchVisible((prev) => prev + 10);
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [tab, searchResults]);

  // 分区过滤切换
  const switchFeedFilter = useCallback((key: string) => {
    setFeedFilter((prev) => (prev === key ? "" : key));
  }, []);

  // 无限滚动 sentinel 回调（分区）—— 已由虚拟列表取代，保留为 no-op 兼容
  const handleSectionSentinel = useCallback((_key: string) => {
    // 虚拟列表按需渲染，无需增量加载
  }, []);

  // 为每个分区挂载 sentinel observer（虚拟列表已按需渲染，此 observer 仅保留兼容）
  useEffect(() => {
    if (tab !== "feed") return;
    const sentinelMap = new Map<string, IntersectionObserver>();

    for (const section of filteredSections) {
      const sentinelEl = document.getElementById(`sentinel-${section.key}`);
      if (!sentinelEl) continue;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            handleSectionSentinel(section.key);
          }
        },
        { rootMargin: "400px" },
      );
      observer.observe(sentinelEl);
      sentinelMap.set(section.key, observer);
    }
    return () => {
      sentinelMap.forEach((obs) => obs.disconnect());
    };
  }, [tab, filteredSections, handleSectionSentinel]);

  const stats = useMemo(
    () => ({
      total: cards.length,
      bigbro: bigbroCards.length,
      sections: sections.length,
    }),
    [cards, bigbroCards, sections],
  );

  // -----------------------------------------------------------------------
  // 渲染
  // -----------------------------------------------------------------------

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <h1 className="logo">📡 GitTok</h1>
          <nav className="tabs">
            <button className={`tab${tab === "feed" ? " active" : ""}`} onClick={() => setTab("feed")}>
              推荐
            </button>
            <button className={`tab${tab === "liked" ? " active" : ""}`} onClick={() => setTab("liked")}>
              喜欢 {feedback.likes.length > 0 && <span className="tab-count">{feedback.likes.length}</span>}
            </button>
            <button
              className={`tab${tab === "collections" ? " active" : ""}`}
              onClick={() => setTab("collections")}
            >
              收藏 {collections.length > 0 && <span className="tab-count">{collections.length}</span>}
            </button>
            <button className={`tab${tab === "bigbro" ? " active" : ""}`} onClick={() => setTab("bigbro")}>
              大牛 {stats.bigbro > 0 && <span className="tab-count">{stats.bigbro}</span>}
            </button>
            <button className={`tab${tab === "search" ? " active" : ""}`} onClick={() => setTab("search")}>
              搜索
            </button>
            <button className={`tab${tab === "chat" ? " active" : ""}`} onClick={() => setTab("chat")}>
              AI 对话
            </button>
          </nav>
        </div>
      </header>

      {/* 二级导航：分区过滤（仅推荐 tab） */}
      {tab === "feed" && !loading && !error && sections.length > 0 && (
        <nav className="sub-nav">
          <div className="sub-nav-inner">
            <button
              className={`sub-nav-pill${feedFilter === "" ? " active" : ""}`}
              onClick={() => setFeedFilter("")}
            >
              🔥 全部
            </button>
            {sections.map((s) => (
              <button
                key={s.key}
                className={`sub-nav-pill${feedFilter === s.key ? " active" : ""}`}
                onClick={() => switchFeedFilter(s.key)}
              >
                {s.icon} {s.title}
              </button>
            ))}
          </div>
        </nav>
      )}

      <main className="main">
        {/* === 推荐 tab === */}
        {tab === "feed" && (
          <>
            {loading && (
              <div className="status">
                <div className="spinner" />
                <p>正在加载好项目…</p>
              </div>
            )}
            {error && (
              <div className="status error">
                <p>⚠️ 加载失败: {error}</p>
              </div>
            )}
            {!loading && !error && sections.length === 0 && (
              <div className="status">
                <p>📭 暂无内容</p>
              </div>
            )}
            {!loading &&
              !error &&
              filteredSections.map((section) => {
                return (
                  <section key={section.key} id={`section-${section.key}`} className="section">
                    <div className="section-header">
                      <span className="section-icon">{section.icon}</span>
                      <span className="section-title">{section.title}</span>
                      <span className="section-count">{section.cards.length}</span>
                      <span className="section-desc">{section.desc}</span>
                    </div>
                    <FeedVirtualList
                      cards={section.cards}
                      likedSet={likedSet}
                      dismissingSet={dismissing}
                      onOpen={handleOpenDetail}
                      onEndHint={`已加载全部 ${section.cards.length} 个项目`}
                    />
                  </section>
                );
              })}
          </>
        )}

        {/* === 喜欢 tab === */}
        {tab === "liked" && (
          <>
            <div className="collections-header">
              <span className="collections-stats">
                👍 共 {feedback.likes.length} 个喜欢的项目 · {likedCards.length} 个可展示
                {likedCards.length < feedback.likes.length && "（其余已不在数据中）"}
              </span>
            </div>
            {likedCards.length === 0 ? (
              <div className="status">
                <p>📭 还没有喜欢的项目</p>
                <p className="hint">在项目详情中点 ❤️ 开始喜欢</p>
              </div>
            ) : (
              <div className="feed-list">
                {likedCards.map((card) => (
                  <FeedCardMemo key={card.repo} card={card} liked={true} onOpen={handleOpenDetail} />
                ))}
              </div>
            )}
          </>
        )}

        {/* === 收藏 tab === */}
        {tab === "collections" && (
          <>
            <div className="collections-header">
              <span className="collections-stats">
                📊 共 {collections.length} 个收藏夹 ·{" "}
                {collections.reduce((sum, c) => sum + c.repos.length, 0)} 个项目
              </span>
            </div>

            {collections.length === 0 && (
              <div className="status">
                <p>📭 还没有收藏夹</p>
                <p className="hint">点击项目详情中的 ⭐ 按钮开始收藏</p>
              </div>
            )}

            {collections.map((col) => {
              const expanded = expandedCols[col.id] ?? false;
              // 快照优先（数据更新后仍完整展示），其次匹配当天数据
              const colCards = col.repos
                .map((repo) => col.snapshots?.[repo] ?? visibleCards.find((c) => c.repo === repo))
                .filter((c): c is FeedCard => !!c);
              return (
                <div key={col.id} className="collection-folder">
                  <div
                    className="folder-header"
                    onClick={() => setExpandedCols((prev) => ({ ...prev, [col.id]: !prev[col.id] }))}
                  >
                    <span className={`folder-chevron${expanded ? " open" : ""}`}>▶</span>
                    <span className="folder-icon">📁</span>
                    <span className="folder-name">{col.name}</span>
                    <span className="folder-count">({col.repos.length}个)</span>
                    <button
                      className="folder-delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCollection(col.id);
                      }}
                      title="删除收藏夹"
                    >
                      🗑
                    </button>
                  </div>
                  {expanded && (
                    <div className="folder-cards">
                      {colCards.length === 0 && (
                        <p className="folder-empty">暂未匹配到项目卡片（数据可能已更新）</p>
                      )}
                      {colCards.length > 0 && (
                        <div className="feed-list">
                          {colCards.map((card) => (
                            <div key={card.repo} className="folder-card-wrapper">
                              <FeedCardMemo
                                card={card}
                                liked={feedback.likes.includes(card.repo)}
                                onOpen={handleOpenDetail}
                              />
                              <button
                                className="folder-card-remove"
                                onClick={() => handleRemoveFromCollection(col.id, card.repo)}
                                title="移出收藏夹"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <button className="collection-create-btn" onClick={handleCreateCollection}>
              + 新建收藏夹
            </button>
          </>
        )}

        {/* === 大牛 tab === */}
        {tab === "bigbro" && (
          <>
            <div className="bigbro-profile">
              <img
                src={`https://avatars.githubusercontent.com/${BIGBRO_NAME}?s=72&v=4`}
                alt={BIGBRO_NAME}
                className="bigbro-avatar"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.visibility = "hidden";
                }}
              />
              <div className="bigbro-info">
                <h2>{BIGBRO_NAME}</h2>
                <p>关注的 GitHub 用户 · {bigbroCards.length} 个 star 项目</p>
              </div>
              <a
                href={`https://github.com/${BIGBRO_NAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bigbro-link"
              >
                GitHub 主页 ↗
              </a>
            </div>

            {bigbroCards.length > 0 ? (
              <div className="feed-list">
                {bigbroCards.map((card) => (
                  <FeedCardMemo
                    key={card.repo}
                    card={card}
                    liked={feedback.likes.includes(card.repo)}
                    onOpen={handleOpenDetail}
                  />
                ))}
              </div>
            ) : (
              <div className="status">
                <p>⏳ {BIGBRO_NAME} 的 star 动态将在下次数据更新后出现</p>
                <p className="hint">
                  每天自动采集大牛最新 star 的项目。
                  <br />
                  请等待下一次 Daily Agents Radar 运行。
                </p>
              </div>
            )}
          </>
        )}

        {/* === 搜索 tab === */}
        {tab === "search" && (
          <>
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="搜项目名、描述、标签…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <button className="search-clear" onClick={() => setSearchQuery("")}>
                  ✕
                </button>
              )}
            </div>
            {searchQuery && searchResults.length === 0 && (
              <div className="status">
                <p>🔍 没搜到，换个关键词试试？</p>
              </div>
            )}
            {searchResults.length > 0 && (
              <div className="feed-list">
                {searchResults.slice(0, searchVisible).map((card) => (
                  <FeedCardMemo
                    key={card.repo}
                    card={card}
                    liked={feedback.likes.includes(card.repo)}
                    onOpen={handleOpenDetail}
                  />
                ))}
              </div>
            )}
            {searchResults.length > searchVisible && (
              <div ref={sentinelRef} className="section-sentinel">
                <div className="spinner small" />
              </div>
            )}
          </>
        )}

        {/* === AI 对话 tab === */}
        {tab === "chat" && (
          <div className="chat-placeholder">
            <div className="chat-icon">🤖</div>
            <h2>AI 对话</h2>
            <p>通过 MCP Server 连接 AI 助手，直接问：</p>
            <ul className="chat-examples">
              <li>"最近有啥好玩的 AI 项目？"</li>
              <li>"给我推荐几个 RAG 相关的工具"</li>
              <li>"大牛们最近都在 star 什么？"</li>
            </ul>
            <p className="chat-hint">
              需要在 Claude Desktop 或其他 MCP 客户端中配置本项目的 MCP Server。
              <br />
              运行 <code>pnpm mcp</code> 启动后即可对话搜索。
            </p>
          </div>
        )}
      </main>

      <footer className="footer">
        <span>
          {stats.total} 个项目 · {stats.sections} 个分区 ·{" "}
        </span>
        <span>
          👍 {feedback.likes.length} · 👎 {feedback.dislikes.length}
        </span>
      </footer>

      {/* 详情弹窗 */}
      {detailCard && (
        <CardDetail
          card={detailCard}
          liked={feedback.likes.includes(detailCard.repo)}
          disliked={feedback.dislikes.includes(detailCard.repo)}
          collections={collections}
          onLike={handleLike}
          onDislike={handleDislike}
          onUpdateCollections={handleUpdateCollections}
          onClose={() => setDetailCard(null)}
        />
      )}
    </div>
  );
}
