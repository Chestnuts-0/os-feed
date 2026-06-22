import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import type { FeedCard } from "./types.ts";
import { FeedCardMemo } from "./FeedCard.tsx";
import "./styles.css";

// ---------------------------------------------------------------------------
// 常量
// ---------------------------------------------------------------------------

const FEED_URL = "./data/feed.json";
const STORAGE_KEY = "os-feed-feedback";
const BIGBRO_NAME = "KKKKhazix";

type Tab = "feed" | "bigbro" | "search" | "chat";

interface Feedback {
  likes: string[];
  dislikes: string[];
}

// 分区定义
const SECTIONS: { key: string; icon: string; title: string; desc: string }[] = [
  { key: "hot", icon: "🔥", title: "热门", desc: "持续高星项目" },
  { key: "authoritative", icon: "🏛️", title: "权威", desc: "官方权威发布" },
  { key: "daily", icon: "📈", title: "每日飙升", desc: "今日 star 增长" },
  { key: "fun", icon: "🎮", title: "兴趣", desc: "好玩有趣" },
  { key: "skill", icon: "⚡", title: "SKILL", desc: "Agent Skill" },
  { key: "learning", icon: "📚", title: "学习", desc: "教程与资源" },
];

// ---------------------------------------------------------------------------
// localStorage 反馈读写
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

// ---------------------------------------------------------------------------
// 向后兼容：旧数据没有 summaryCn / category 字段时补全
// ---------------------------------------------------------------------------

const AUTHORITATIVE_ORGS = new Set([
  "openai", "anthropics", "google", "google-gemini", "google-research",
  "microsoft", "meta", "facebookresearch", "huggingface", "nvidia",
  "stabilityai", "pytorch", "tensorflow", "langchain-ai", "ollama",
  "vllm-project", "ggerganov", "QwenLM", "deepseek-ai", "mistralai",
]);

const LEARNING_RE = /awesome|tutorial|learn|course|guide|roadmap|study|educat/i;

function normalizeCard(card: FeedCard): FeedCard {
  // 补 summaryCn：取 reasonCn 第一句或 desc
  if (!card.summaryCn) {
    if (card.reasonCn) {
      const firstSentence = card.reasonCn.split(/[。！\n]/)[0];
      card.summaryCn = firstSentence?.slice(0, 40) || "";
    } else {
      card.summaryCn = card.desc?.slice(0, 40) || "";
    }
  }
  // 补 category
  if (!card.category) {
    const repoLower = card.repo.toLowerCase();
    const descLower = card.desc.toLowerCase();
    const topicsLower = card.topics.map((t) => t.toLowerCase());
    const allText = `${repoLower} ${descLower} ${topicsLower.join(" ")}`;
    if (repoLower.includes("skill") || topicsLower.some((t) => t.includes("skill"))) {
      card.category = "skill";
    } else if (LEARNING_RE.test(allText) || topicsLower.includes("awesome")) {
      card.category = "learning";
    } else if (card.aiDim === "非AI-好玩") {
      card.category = "fun";
    } else if (AUTHORITATIVE_ORGS.has(card.owner) && card.stars >= 1000) {
      card.category = "authoritative";
    } else if (card.starGrowth >= 50) {
      card.category = "daily";
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
  switch (sectionKey) {
    case "hot":
      return cards.filter((c) => c.stars >= 5000);
    case "authoritative":
      return cards.filter((c) => c.category === "authoritative");
    case "daily":
      return cards.filter((c) => c.starGrowth >= 20);
    case "fun":
      return cards.filter((c) => c.category === "fun");
    case "skill":
      return cards.filter((c) => c.category === "skill");
    case "learning":
      return cards.filter((c) => c.category === "learning");
    default:
      return cards;
  }
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
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(10);
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

  // 反馈操作
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
  }, []);

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
  }, []);

  // 过滤掉不感兴趣的（搜索 tab 除外）
  const visibleCards = useMemo(() => {
    if (tab === "search") return cards;
    return cards.filter((c) => !feedback.dislikes.includes(c.repo));
  }, [cards, feedback, tab]);

  // 分区数据
  const sections = useMemo(() => {
    return SECTIONS.map((s) => {
      let list = getSectionCards(visibleCards, s.key);
      // 本地重排：已赞置顶，其余按 score 降序
      list = [...list].sort((a, b) => {
        const aLiked = feedback.likes.includes(a.repo) ? 1 : 0;
        const bLiked = feedback.likes.includes(b.repo) ? 1 : 0;
        if (aLiked !== bLiked) return bLiked - aLiked;
        return b.score - a.score;
      });
      return { ...s, cards: list.slice(0, 12) };
    }).filter((s) => s.cards.length > 0);
  }, [visibleCards, feedback]);

  // 大牛卡片
  const bigbroCards = useMemo(() => {
    return visibleCards
      .filter((c) => c.bigbros.length > 0 || c.source === "bigbro")
      .sort((a, b) => {
        const aLiked = feedback.likes.includes(a.repo) ? 1 : 0;
        const bLiked = feedback.likes.includes(b.repo) ? 1 : 0;
        if (aLiked !== bLiked) return bLiked - aLiked;
        return b.score - a.score;
      });
  }, [visibleCards, feedback]);

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

  // 搜索分页
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
      { rootMargin: "300px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [tab, searchResults]);

  // 统计
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
      {/* 顶部导航 */}
      <header className="header">
        <div className="header-inner">
          <h1 className="logo">📡 开源信息流</h1>
          <nav className="tabs">
            <button className={`tab${tab === "feed" ? " active" : ""}`} onClick={() => setTab("feed")}>
              推荐
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

      {/* 内容区 */}
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
              <div className="status"><p>📭 暂无内容</p></div>
            )}
            {!loading && !error && sections.map((section) => (
              <section key={section.key} className="section">
                <div className="section-header">
                  <span className="section-icon">{section.icon}</span>
                  <span className="section-title">{section.title}</span>
                  <span className="section-count">{section.cards.length}</span>
                  <span className="section-desc">{section.desc}</span>
                </div>
                <div className="feed-list">
                  {section.cards.map((card) => (
                    <FeedCardMemo
                      key={card.repo}
                      card={card}
                      liked={feedback.likes.includes(card.repo)}
                      disliked={feedback.dislikes.includes(card.repo)}
                      onLike={handleLike}
                      onDislike={handleDislike}
                    />
                  ))}
                </div>
              </section>
            ))}
          </>
        )}

        {/* === 大牛 tab === */}
        {tab === "bigbro" && (
          <>
            {/* 大牛 profile */}
            <div className="bigbro-profile">
              <img
                src={`https://github.com/${BIGBRO_NAME}.png?size=72`}
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
                    disliked={feedback.dislikes.includes(card.repo)}
                    onLike={handleLike}
                    onDislike={handleDislike}
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
                <button className="search-clear" onClick={() => setSearchQuery("")}>
                  ✕
                </button>
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
                    disliked={feedback.dislikes.includes(card.repo)}
                    onLike={handleLike}
                    onDislike={handleDislike}
                  />
                ))}
              </div>
            )}
            {searchResults.length > searchVisible && (
              <div ref={sentinelRef} className="sentinel">
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

      {/* 底部 */}
      <footer className="footer">
        <span>{stats.total} 个项目 · {stats.sections} 个分区 · </span>
        <span>已赞 {feedback.likes.length} · 不感兴趣 {feedback.dislikes.length}</span>
      </footer>
    </div>
  );
}
