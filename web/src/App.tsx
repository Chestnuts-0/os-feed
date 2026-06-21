import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import type { FeedCard } from "./types.ts";
import { FeedCardMemo } from "./FeedCard.tsx";
import "./styles.css";

// ---------------------------------------------------------------------------
// 常量
// ---------------------------------------------------------------------------

const PAGE_SIZE = 10;
const FEED_URL = "./data/feed.json";
const STORAGE_KEY = "os-feed-feedback";

type Tab = "feed" | "bigbro" | "search" | "chat";

interface Feedback {
  likes: string[];
  dislikes: string[];
}

// ---------------------------------------------------------------------------
// localStorage 反馈读写
// ---------------------------------------------------------------------------

function loadFeedback(): Feedback {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Feedback;
  } catch {
    // ignore
  }
  return { likes: [], dislikes: [] };
}

function saveFeedback(fb: Feedback): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fb));
  } catch {
    // ignore
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
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [feedback, setFeedback] = useState<Feedback>(loadFeedback);
  const [searchQuery, setSearchQuery] = useState("");
  const sentinelRef = useRef<HTMLDivElement>(null);

  // 加载 feed.json
  useEffect(() => {
    fetch(FEED_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<FeedCard[]>;
      })
      .then((data) => {
        setCards(Array.isArray(data) ? data : []);
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

  // 根据 tab + 搜索 + 反馈 计算展示列表
  const displayCards = useMemo(() => {
    let list = cards;

    // tab 过滤
    if (tab === "bigbro") {
      list = list.filter((c) => c.source === "bigbro" || c.bigbros.length > 0);
    }

    // 搜索过滤
    if (tab === "search" && searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.repo.toLowerCase().includes(q) ||
          c.desc.toLowerCase().includes(q) ||
          c.reasonCn.toLowerCase().includes(q) ||
          c.aiDim.toLowerCase().includes(q) ||
          c.topics.some((t) => t.toLowerCase().includes(q)),
      );
    }

    // 隐藏不感兴趣的（搜索 tab 除外，让用户能看到搜索完整结果）
    if (tab !== "search") {
      list = list.filter((c) => !feedback.dislikes.includes(c.repo));
    }

    // 本地重排：已赞置顶，其余按 score 降序
    if (tab === "feed" || tab === "bigbro") {
      list = [...list].sort((a, b) => {
        const aLiked = feedback.likes.includes(a.repo) ? 1 : 0;
        const bLiked = feedback.likes.includes(b.repo) ? 1 : 0;
        if (aLiked !== bLiked) return bLiked - aLiked;
        return b.score - a.score;
      });
    }

    return list;
  }, [cards, tab, feedback, searchQuery]);

  // tab / 搜索变化时重置分页
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [tab, searchQuery]);

  // 无限滚动：IntersectionObserver
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((prev) => prev + PAGE_SIZE);
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [displayCards]);

  const visibleCards = displayCards.slice(0, visibleCount);
  const hasMore = visibleCount < displayCards.length;

  // 统计数
  const stats = useMemo(() => {
    const bigbroCount = cards.filter((c) => c.source === "bigbro" || c.bigbros.length > 0).length;
    return { total: cards.length, bigbro: bigbroCount };
  }, [cards]);

  // -----------------------------------------------------------------------
  // 渲染
  // -----------------------------------------------------------------------

  return (
    <div className="app">
      {/* 顶部导航 */}
      <header className="header">
        <h1 className="logo">📡 开源信息流</h1>
        <nav className="tabs">
          <button
            className={`tab${tab === "feed" ? " active" : ""}`}
            onClick={() => setTab("feed")}
          >
            推荐
          </button>
          <button
            className={`tab${tab === "bigbro" ? " active" : ""}`}
            onClick={() => setTab("bigbro")}
          >
            大牛 <span className="tab-count">{stats.bigbro}</span>
          </button>
          <button
            className={`tab${tab === "search" ? " active" : ""}`}
            onClick={() => setTab("search")}
          >
            搜索
          </button>
          <button
            className={`tab${tab === "chat" ? " active" : ""}`}
            onClick={() => setTab("chat")}
          >
            AI 对话
          </button>
        </nav>
      </header>

      {/* 内容区 */}
      <main className="main">
        {/* 搜索框（仅搜索 tab） */}
        {tab === "search" && (
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
        )}

        {/* 加载中 */}
        {loading && (
          <div className="status">
            <div className="spinner" />
            <p>正在加载好项目…</p>
          </div>
        )}

        {/* 错误 */}
        {error && (
          <div className="status error">
            <p>⚠️ 加载失败: {error}</p>
            <p className="hint">
              如果是本地开发，请确保 data/feed.json 存在。
              <br />
              可以先运行 <code>tsx src/feed/index.ts</code> 生成数据。
            </p>
          </div>
        )}

        {/* 空列表 */}
        {!loading && !error && displayCards.length === 0 && (
          <div className="status">
            <p>{tab === "search" ? "🔍 没搜到，换个关键词试试？" : "📭 暂无内容"}</p>
          </div>
        )}

        {/* 卡片列表 */}
        {!loading && !error && displayCards.length > 0 && (
          <div className="feed-list">
            {visibleCards.map((card) => (
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

        {/* 无限滚动哨兵 */}
        {!loading && !error && hasMore && (
          <div ref={sentinelRef} className="sentinel">
            <div className="spinner small" />
          </div>
        )}

        {/* 到底了 */}
        {!loading && !error && !hasMore && displayCards.length > 0 && (
          <div className="end-marker">
            <span>— 没有更多了 —</span>
          </div>
        )}

        {/* AI 对话 tab（占位） */}
        {tab === "chat" && (
          <div className="chat-placeholder">
            <div className="chat-icon">🤖</div>
            <h2>AI 对话</h2>
            <p>
              通过 MCP Server 连接 AI 助手，直接问：
            </p>
            <ul className="chat-examples">
              <li>"最近有啥好玩的 AI 项目？"</li>
              <li>"给我推荐几个 RAG 相关的工具"</li>
              <li>"大牛们最近都在 star 什么？"</li>
            </ul>
            <p className="chat-hint">
              需要在 Claude Desktop 或其他 MCP 客户端中配置本项目的 MCP Server。
              运行 <code>pnpm mcp</code> 启动后即可对话搜索。
            </p>
          </div>
        )}
      </main>

      {/* 底部 */}
      <footer className="footer">
        <span>{stats.total} 个项目 · </span>
        <span>已赞 {feedback.likes.length} · 不感兴趣 {feedback.dislikes.length}</span>
      </footer>
    </div>
  );
}
