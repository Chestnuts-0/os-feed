import { useState, useEffect, useRef, useCallback, useMemo } from "react";
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

type Tab = "feed" | "collections" | "bigbro" | "search" | "chat";

interface Feedback {
  likes: string[];
  dislikes: string[];
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

const INITIAL_VISIBLE = 30;
const LOAD_MORE_COUNT = 20;

// ---------------------------------------------------------------------------
// localStorage
// ---------------------------------------------------------------------------

function loadFeedback(): Feedback {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Feedback;
  } catch { /* ignore */ }
  return { likes: [], dislikes: [] };
}

function saveFeedback(fb: Feedback): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(fb)); } catch { /* ignore */ }
}

function loadPreferences(): Preferences {
  try {
    const raw = localStorage.getItem(PREF_KEY);
    if (raw) return JSON.parse(raw) as Preferences;
  } catch { /* ignore */ }
  return { tagWeights: {}, lastUpdateTs: "" };
}

function savePreferences(prefs: Preferences): void {
  try { localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); } catch { /* ignore */ }
}

function loadCollections(): Collection[] {
  try {
    const raw = localStorage.getItem(COLLECTIONS_KEY);
    if (raw) return JSON.parse(raw) as Collection[];
  } catch { /* ignore */ }
  return [];
}

function saveCollections(cols: Collection[]): void {
  try { localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(cols)); } catch { /* ignore */ }
}

function loadSeen(): Record<string, number> {
  try {
    const raw = localStorage.getItem(SEEN_KEY);
    if (raw) return JSON.parse(raw) as Record<string, number>;
  } catch { /* ignore */ }
  return {};
}

function saveSeen(s: Record<string, number>): void {
  try { localStorage.setItem(SEEN_KEY, JSON.stringify(s)); } catch { /* ignore */ }
}

function loadInteractions(): Record<string, InteractionRecord> {
  try {
    const raw = localStorage.getItem(INTERACTIONS_KEY);
    if (raw) return JSON.parse(raw) as Record<string, InteractionRecord>;
  } catch { /* ignore */ }
  return {};
}

function saveInteractions(ints: Record<string, InteractionRecord>): void {
  try { localStorage.setItem(INTERACTIONS_KEY, JSON.stringify(ints)); } catch { /* ignore */ }
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
  "openai", "anthropics", "google", "google-gemini", "google-research",
  "microsoft", "meta", "facebookresearch", "huggingface", "nvidia",
  "stabilityai", "pytorch", "tensorflow", "langchain-ai", "ollama",
  "vllm-project", "ggerganov", "QwenLM", "deepseek-ai", "mistralai",
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
// 客户端标签权重微调
// ---------------------------------------------------------------------------

function clientAdjustScore(card: FeedCard, tagWeights: Record<string, number>): number {
  if (!card.tags || card.tags.length === 0) return 1.0;
  let matched = 0;
  let total = 0;
  for (const tag of card.tags) {
    const uw = tagWeights[tag.name] ?? 0.15;
    matched += tag.weight * uw;
    total += tag.weight;
  }
  if (total === 0) return 1.0;
  return 0.5 + 0.5 * (matched / total);
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
  const [preferences, setPreferences] = useState<Preferences>(loadPreferences);
  const [collections, setCollections] = useState<Collection[]>(loadCollections);
  const [seen, setSeen] = useState<Record<string, number>>(loadSeen);
  const [interactions, setInteractions] = useState<Record<string, InteractionRecord>>(loadInteractions);
  const [expandedCols, setExpandedCols] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(10);
  const [detailCard, setDetailCard] = useState<FeedCard | null>(null);
  const [sectionVisible, setSectionVisible] = useState<Record<string, number>>({});
  const [activeSection, setActiveSection] = useState<string>("");
  const sentinelRef = useRef<HTMLDivElement>(null);
  const sectionObserverRef = useRef<IntersectionObserver | null>(null);

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

  // 反馈操作 — 更新标签权重
  const updateTagWeights = useCallback((repos: string[], delta: number) => {
    setPreferences((prev) => {
      const tw = { ...prev.tagWeights };
      for (const repo of repos) {
        const card = cards.find((c) => c.repo === repo);
        if (!card) continue;
        for (const tag of card.tags || []) {
          const factor = tag.source === "llm" ? 1.0 : 0.5;
          tw[tag.name] = Math.max(0.01, Math.min(1.0, (tw[tag.name] ?? 0.15) + delta * factor));
        }
      }
      const next = { tagWeights: tw, lastUpdateTs: new Date().toISOString() };
      savePreferences(next);
      return next;
    });
  }, [cards]);

  const handleLike = useCallback((repo: string) => {
    setFeedback((prev) => {
      const likes = prev.likes.includes(repo)
        ? prev.likes.filter((r) => r !== repo)
        : [...prev.likes, repo];
      const dislikes = prev.dislikes.filter((r) => r !== repo);
      const next = { likes, dislikes };
      saveFeedback(next);
      return next;
    });
    // 记录交互
    setInteractions((prev) => {
      const next = { ...prev, [repo]: { type: "like" as InteractionType, ts: Date.now() } };
      saveInteractions(next);
      return next;
    });
    updateTagWeights([repo], 0.03);
  }, [updateTagWeights]);

  const handleDislike = useCallback((repo: string) => {
    setFeedback((prev) => {
      const dislikes = prev.dislikes.includes(repo)
        ? prev.dislikes.filter((r) => r !== repo)
        : [...prev.dislikes, repo];
      const likes = prev.likes.filter((r) => r !== repo);
      const next = { likes, dislikes };
      saveFeedback(next);
      return next;
    });
    // 记录交互
    setInteractions((prev) => {
      const next = { ...prev, [repo]: { type: "dislike" as InteractionType, ts: Date.now() } };
      saveInteractions(next);
      return next;
    });
    updateTagWeights([repo], -0.05);
  }, [updateTagWeights]);

  const handleUpdateCollections = useCallback((newCols: Collection[]) => {
    const prevBookmarked = detailCard ? collections.some((c) => c.repos.includes(detailCard.repo)) : false;
    const newBookmarked = detailCard ? newCols.some((c) => c.repos.includes(detailCard.repo)) : false;
    setCollections(newCols);
    saveCollections(newCols);
    if (detailCard && newBookmarked !== prevBookmarked) {
      updateTagWeights([detailCard.repo], newBookmarked ? 0.05 : -0.05);
    }
  }, [collections, detailCard, updateTagWeights]);

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
      const next = prev.map((c) =>
        c.id === colId ? { ...c, repos: c.repos.filter((r) => r !== repo) } : c,
      );
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

  // 过滤不感兴趣 + 过滤无中文描述的卡片 + 内容淘汰
  const visibleCards = useMemo(() => {
    const withContent = cards.filter((c) => c.reasonCn && c.reasonCn.length > 0);
    if (tab === "search") return withContent;
    return applyFilter(withContent, seen, interactions, collections);
  }, [cards, tab, seen, interactions, collections]);

  // 分区数据（修复：不按 liked 重排，纯按 score）
  const sections = useMemo(() => {
    const tw = preferences.tagWeights;
    const hasPrefs = Object.keys(tw).length > 0;
    return SECTIONS.map((s) => {
      let list = getSectionCards(visibleCards, s.key);
      // 客户端标签微调 + 纯 score 排序
      list = [...list].sort((a, b) => {
        const aScore = hasPrefs ? a.score * clientAdjustScore(a, tw) : a.score;
        const bScore = hasPrefs ? b.score * clientAdjustScore(b, tw) : b.score;
        return bScore - aScore;
      });
      return { ...s, cards: list };
    }).filter((s) => s.cards.length > 0);
  }, [visibleCards, preferences]);

  // 活跃分区检测
  useEffect(() => {
    if (tab !== "feed") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const key = (entry.target as HTMLElement).dataset.sectionKey;
            if (key) setActiveSection(key);
          }
        }
      },
      { rootMargin: "-112px 0px -40% 0px", threshold: 0 },
    );
    sectionObserverRef.current = observer;
    const secElements = document.querySelectorAll("[data-section-key]");
    secElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [tab, sections]);

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

  useEffect(() => { setSearchVisible(10); }, [searchQuery]);

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

  // 分区跳转
  const scrollToSection = useCallback((key: string) => {
    const el = document.getElementById(`section-${key}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // 无限滚动 sentinel 回调（分区）
  const handleSectionSentinel = useCallback((key: string) => {
    setSectionVisible((prev) => ({
      ...prev,
      [key]: Math.min((prev[key] ?? INITIAL_VISIBLE) + LOAD_MORE_COUNT, 9999),
    }));
  }, []);

  // 为每个分区挂载 sentinel observer
  useEffect(() => {
    if (tab !== "feed") return;
    const sentinelMap = new Map<string, IntersectionObserver>();

    for (const section of sections) {
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
  }, [tab, sections, handleSectionSentinel]);

  const stats = useMemo(() => ({
    total: cards.length,
    bigbro: bigbroCards.length,
    sections: sections.length,
  }), [cards, bigbroCards, sections]);

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
            <button className={`tab${tab === "collections" ? " active" : ""}`} onClick={() => setTab("collections")}>
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

      {/* 二级导航：分区标签固定栏（仅推荐 tab） */}
      {tab === "feed" && !loading && !error && sections.length > 0 && (
        <nav className="sub-nav">
          <div className="sub-nav-inner">
            {sections.map((s) => (
              <button
                key={s.key}
                className={`sub-nav-pill${activeSection === s.key ? " active" : ""}`}
                onClick={() => scrollToSection(s.key)}
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
              <div className="status error"><p>⚠️ 加载失败: {error}</p></div>
            )}
            {!loading && !error && sections.length === 0 && (
              <div className="status"><p>📭 暂无内容</p></div>
            )}
            {!loading && !error && sections.map((section) => {
              const visible = sectionVisible[section.key] ?? INITIAL_VISIBLE;
              const shown = section.cards.slice(0, visible);
              const hasMore = section.cards.length > visible;
              return (
                <section
                  key={section.key}
                  id={`section-${section.key}`}
                  data-section-key={section.key}
                  className="section"
                >
                  <div className="section-header">
                    <span className="section-icon">{section.icon}</span>
                    <span className="section-title">{section.title}</span>
                    <span className="section-count">{section.cards.length}</span>
                    <span className="section-desc">{section.desc}</span>
                  </div>
                  <div className="feed-list">
                    {shown.map((card) => (
                      <FeedCardMemo
                        key={card.repo}
                        card={card}
                        liked={feedback.likes.includes(card.repo)}
                        onOpen={handleOpenDetail}
                      />
                    ))}
                  </div>
                  {hasMore && (
                    <div id={`sentinel-${section.key}`} className="section-sentinel">
                      <div className="spinner small" />
                    </div>
                  )}
                  {!hasMore && section.cards.length > 0 && (
                    <div className="section-end-hint">
                      已加载全部 {section.cards.length} 个项目
                    </div>
                  )}
                </section>
              );
            })}
          </>
        )}

        {/* === 收藏 tab === */}
        {tab === "collections" && (
          <>
            <div className="collections-header">
              <span className="collections-stats">
                📊 共 {collections.length} 个收藏夹 · {collections.reduce((sum, c) => sum + c.repos.length, 0)} 个项目
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
              const colCards = col.repos
                .map((repo) => visibleCards.find((c) => c.repo === repo))
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
                      onClick={(e) => { e.stopPropagation(); handleDeleteCollection(col.id); }}
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
                src={`https://github.com/${BIGBRO_NAME}.png?size=72`}
                alt={BIGBRO_NAME}
                className="bigbro-avatar"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.visibility = "hidden"; }}
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
                  每天自动采集大牛最新 star 的项目。<br />
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
                <button className="search-clear" onClick={() => setSearchQuery("")}>✕</button>
              )}
            </div>
            {searchQuery && searchResults.length === 0 && (
              <div className="status"><p>🔍 没搜到，换个关键词试试？</p></div>
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
              需要在 Claude Desktop 或其他 MCP 客户端中配置本项目的 MCP Server。<br />
              运行 <code>pnpm mcp</code> 启动后即可对话搜索。
            </p>
          </div>
        )}
      </main>

      <footer className="footer">
        <span>{stats.total} 个项目 · {stats.sections} 个分区 · </span>
        <span>👍 {feedback.likes.length} · 👎 {feedback.dislikes.length}</span>
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
