import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import type { FeedCard, Collection } from "./types.ts";
import { FeedCardMemo, CardDetail, GithubAvatar } from "./FeedCard.tsx";
import { CreatorPage } from "./CreatorPage.tsx";
import { weightedSearch } from "./search.ts";
import {
  AlertTriangle,
  ChevronRight,
  ExternalLink,
  Folder,
  Heart,
  Home,
  Inbox,
  Search,
  Star,
  ThumbsDown,
  ThumbsUp,
  Trash2,
  User,
  UserMinus,
  X,
  CHANNEL_ICONS,
  GitTokLogo,
} from "./icons.tsx";
import "./styles.css";

// ---------------------------------------------------------------------------
// 常量
// ---------------------------------------------------------------------------

const FEED_URL = "./data/feed.json";
const STORAGE_KEY = "os-feed-feedback";
const PREF_KEY = "os-feed-preferences";
const COLLECTIONS_KEY = "os-feed-collections";
const SEEN_KEY = "os-feed-seen";
const INTERACTIONS_KEY = "os-feed-interactions";
const FOLLOWING_KEY = "os-feed-following";

type Tab = "feed" | "search" | "me";

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

// 动态分区（不互斥，可有可无）
const DYNAMIC_SECTIONS: { key: string; icon: string; title: string; desc: string }[] = [
  { key: "recommended", icon: "sparkles", title: "推荐", desc: "为你挑选" },
  { key: "hot", icon: "flame", title: "热门", desc: "高星项目" },
  { key: "daily", icon: "trending-up", title: "每日", desc: "今日star增长" },
  { key: "following", icon: "heart", title: "关注", desc: "关注创作者的项目" },
];

// 固有分区（互斥，每个项目必有其一）
const CATEGORY_SECTIONS: { key: string; icon: string; title: string; desc: string }[] = [
  { key: "ai", icon: "bot", title: "AI", desc: "AI核心技术" },
  { key: "fun", icon: "gamepad", title: "兴趣", desc: "好玩有趣" },
  { key: "tool", icon: "wrench", title: "工具", desc: "Agent Skill / 效率工具" },
  { key: "learning", icon: "book", title: "学习", desc: "学英语学代码" },
];

const ALL_SECTIONS = [...DYNAMIC_SECTIONS, ...CATEGORY_SECTIONS];

/** 频道图标渲染（按 SECTIONS icon 字段查 map，找不到渲染 null） */
function SectionIcon({ icon, size = 18 }: { icon: string; size?: number }) {
  const Icon = CHANNEL_ICONS[icon];
  return Icon ? <Icon size={size} /> : null;
}

/** 推荐分区每页条数 */
const RECOMMEND_SIZE = 60;

/** AI 强特征前缀（与后端 classifyCategory 一致；用于推荐配额与分类兜底） */
const AI_PREFIXES = [
  "AI基础设施",
  "AI Agent",
  "AI应用",
  "AI搜索",
  "AI写作",
  "RAG",
  "推理引擎",
  "大语言模型",
  "多模态",
  "代码助手",
  "Agent",
  "微调",
  "提示工程",
  "向量数据库",
];

/** 学习资源关键词（学英语/学代码；大模型学习已被 ai 前置判定拿走） */
const LEARNING_RE =
  /awesome|tutorial|learn|course|guide|roadmap|interview|study|educat|english|language|leetcode|algorithms|coding|编程|英语|学习/i;

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

function loadFollowing(): string[] {
  try {
    const raw = localStorage.getItem(FOLLOWING_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.filter((o): o is string => typeof o === "string");
    }
  } catch {
    /* ignore */
  }
  return [];
}

function saveFollowing(list: string[]): void {
  try {
    localStorage.setItem(FOLLOWING_KEY, JSON.stringify(list));
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
  // 动态标签默认值（老数据没有）：momentum 默认空；fromOfficial 按官方组织兜底
  if (!card.momentum) card.momentum = [];
  if (card.fromOfficial === undefined) {
    card.fromOfficial = AUTHORITATIVE_ORGS.has(card.owner) && card.stars >= 500;
  }
  // 固有标签兜底（与后端 classifyCategory 一致：互斥，tool 最宽兜底，全覆盖）
  if (!card.category) {
    const repoLower = card.repo.toLowerCase();
    const descLower = card.desc.toLowerCase();
    const topicsLower = card.topics.map((t) => t.toLowerCase());
    const allText = `${repoLower} ${descLower} ${topicsLower.join(" ")}`;
    const dims = card.aiDims || [];
    if (repoLower.includes("skill") || topicsLower.some((t) => t.includes("skill"))) {
      card.category = "tool";
    } else if (dims.some((d) => d === "非AI-好玩" || d === "游戏" || d === "创意工具")) {
      card.category = "fun";
    } else if (dims.some((d) => AI_PREFIXES.some((p) => d.startsWith(p) || d.includes(p)))) {
      card.category = "ai";
    } else if (LEARNING_RE.test(allText) || topicsLower.includes("awesome")) {
      card.category = "learning";
    } else {
      card.category = "tool";
    }
  }
  // 老数据兼容：旧 category 值映射到新体系（旧 feed.json 的值域与新类型不重叠，需 cast 判断）
  const legacyCategory = card.category as string;
  if (legacyCategory === "skill") card.category = "tool";
  if (
    legacyCategory === "rising" ||
    legacyCategory === "hot" ||
    legacyCategory === "daily" ||
    legacyCategory === "authoritative"
  ) {
    card.category = "tool";
  }
  return card;
}

// ---------------------------------------------------------------------------
// 分区卡片选取
// ---------------------------------------------------------------------------

function getSectionCards(
  cards: FeedCard[],
  sectionKey: string,
  followingSet: Set<string> = new Set(),
): FeedCard[] {
  switch (sectionKey) {
    case "hot":
      return cards.filter((c) => c.momentum?.includes("hot"));
    case "daily":
      return cards.filter((c) => c.momentum?.includes("daily"));
    case "following":
      return cards.filter((c) => followingSet.has(c.owner));
    default:
      return cards.filter((c) => c.category === sectionKey);
  }
}

// ---------------------------------------------------------------------------
// 推荐分区（前端个性化生成：分区配额抽样 + 权重排序）
// ---------------------------------------------------------------------------

function buildRecommended(
  cards: FeedCard[],
  tagWeights: Record<string, number>,
  seen: Record<string, number>,
  interactions: Record<string, InteractionRecord>,
): FeedCard[] {
  const now = Date.now();
  const DAY_MS = 86_400_000;
  // 排除：点踩过的、7 天内看过未互动的
  const pool = cards.filter((c) => {
    const inter = interactions[c.repo];
    if (inter?.type === "dislike") return false;
    const seenTs = seen[c.repo];
    if (seenTs && !inter && now - seenTs < 7 * DAY_MS) return false;
    return true;
  });
  if (pool.length === 0) return [];
  // 个性化权重分：标签权重匹配 + aiScore 辅助
  const weightOf = (c: FeedCard): number => {
    const tagScore = (c.tags || []).reduce((s, t) => s + (tagWeights[t.name] ?? 0.15) * (t.weight ?? 0.5), 0);
    return tagScore + (c.aiScore ?? 0) * 0.5;
  };
  // 按固有分区分组
  const byCat = new Map<string, FeedCard[]>();
  for (const c of pool) {
    const key = c.category || "tool";
    if (!byCat.has(key)) byCat.set(key, []);
    byCat.get(key)!.push(c);
  }
  // 配额：AI 40%（AI:非AI = 2:3），其余三区各 20%
  const total = Math.min(RECOMMEND_SIZE, pool.length);
  const aiK = Math.round(total * 0.4);
  const otherK = Math.round(total * 0.2);
  const picked: FeedCard[] = [];
  const cats = ["ai", "fun", "tool", "learning"];
  for (const cat of cats) {
    const list = (byCat.get(cat) ?? []).sort((a, b) => weightOf(b) - weightOf(a));
    const k = cat === "ai" ? aiK : otherK;
    picked.push(...list.slice(0, k));
  }
  // 合并后按权重分排序（推荐流开头最相关）
  return picked.sort((a, b) => weightOf(b) - weightOf(a)).slice(0, total);
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
  channel?: string;
  onOpenCreator?: (owner: string) => void;
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
  channel?: string;
  onOpenCreator?: (owner: string) => void;
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
  channel,
  onOpenCreator,
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
              channel={channel}
              onOpenCreator={onOpenCreator}
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
              channel={channel}
              onOpenCreator={onOpenCreator}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function FeedVirtualList({
  cards,
  likedSet,
  dismissingSet,
  onOpen,
  onEndHint,
  channel,
  onOpenCreator,
}: FeedVirtualListProps) {
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
              channel={channel}
              onOpenCreator={onOpenCreator}
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
  // 我的页子视图（喜欢/收藏/关注；关注体系在任务书 B）
  const [meView, setMeView] = useState<"liked" | "collections" | "following">("liked");
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
  // 关注列表（纯前端，localStorage 持久化；只影响关注频道/我的-关注）
  const [following, setFollowing] = useState<string[]>(loadFollowing);
  const followingSet = useMemo(() => new Set(following), [following]);
  // 创作者页栈（整页替换式子页面：push 进入更深层级，pop 逐级返回；
  // 栈顶即当前创作者页；pop 到空数组回原 tab 原频道——tab/feedChannel 状态不动）
  const [viewStack, setViewStack] = useState<{ owner: string }[]>([]);
  const currentCreator = viewStack.length > 0 ? viewStack[viewStack.length - 1].owner : null;
  const [seen, setSeen] = useState<Record<string, number>>(loadSeen);
  const [expandedCols, setExpandedCols] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(10);
  const [detailCard, setDetailCard] = useState<FeedCard | null>(null);
  // 点踩淡出中的卡片（300ms 动画后移除）
  const [dismissing, setDismissing] = useState<Set<string>>(new Set());
  // 本次会话已点踩消失的卡片（不再渲染，避免滚动回来复活）
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());
  const [feedChannel, setFeedChannel] = useState<string>("recommended");
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

  // 关注/取关（只影响关注频道与我的-关注，不触发 feed 重排）
  const toggleFollow = useCallback((owner: string) => {
    setFollowing((prev) => {
      const next = prev.includes(owner) ? prev.filter((o) => o !== owner) : [...prev, owner];
      saveFollowing(next);
      return next;
    });
  }, []);

  const openCreator = useCallback((owner: string) => {
    // 关详情弹窗（overlay 与页面栈独立；从弹窗进入创作者页时先收起弹窗）
    setDetailCard(null);
    // push：创作者页内点其他 owner 会叠第二层，返回逐级回退
    setViewStack((prev) => [...prev, { owner }]);
  }, []);

  const closeCreator = useCallback(() => {
    setViewStack((prev) => prev.slice(0, -1));
  }, []);

  // 历史数据迁移：feed 加载完成后——
  // 1) 为旧的 likes/收藏（只有 repo 名）补快照：repo 还在当天数据里的自动补上
  // 2) 清理无数据记录：无快照且不在当天数据的（历史遗留无法找回），从列表中移除，避免「N 个喜欢 0 个可展示」
  useEffect(() => {
    if (cards.length === 0) return;
    setFeedback((prev) => {
      let changed = false;
      const likedSnapshots = { ...(prev.likedSnapshots ?? {}) };
      // 1) 补快照
      for (const repo of prev.likes) {
        if (!likedSnapshots[repo] && Object.keys(likedSnapshots).length < SNAPSHOT_CAP) {
          const card = cards.find((c) => c.repo === repo);
          if (card) {
            likedSnapshots[repo] = card;
            changed = true;
          }
        }
      }
      // 2) 清理无数据记录（有快照的保留——快照是主要数据源，不依赖当天数据）
      const keptLikes = prev.likes.filter(
        (repo) => likedSnapshots[repo] || cards.some((c) => c.repo === repo),
      );
      if (keptLikes.length !== prev.likes.length) changed = true;
      if (!changed) return prev;
      const next = { ...prev, likes: keptLikes, likedSnapshots };
      saveFeedback(next);
      return next;
    });
    setCollections((prev) => {
      let changed = false;
      const next = prev.map((col) => {
        const snapshots = { ...(col.snapshots ?? {}) };
        // 1) 补快照
        for (const repo of col.repos) {
          if (!snapshots[repo] && Object.keys(snapshots).length < SNAPSHOT_CAP) {
            const card = cards.find((c) => c.repo === repo);
            if (card) {
              snapshots[repo] = card;
              changed = true;
            }
          }
        }
        // 2) 清理无数据记录
        const keptRepos = col.repos.filter((repo) => snapshots[repo] || cards.some((c) => c.repo === repo));
        if (keptRepos.length !== col.repos.length) changed = true;
        return { ...col, repos: keptRepos, snapshots };
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

  // 分区数据（不重排：展示顺序 = feed.json 后端交错后的顺序；点赞只影响下次加载/推荐分区）
  // 推荐分区 = 前端个性化生成（初始权重快照，与交互零重排原则一致）
  // 关注频道豁免空分区过滤：未关注任何人时侧栏仍保留「关注」项，内容区显示引导
  const sections = useMemo(() => {
    const all = ALL_SECTIONS.map((s) => ({
      ...s,
      cards:
        s.key === "recommended"
          ? buildRecommended(visibleCards, preferences.tagWeights, seen, interactions)
          : getSectionCards(visibleCards, s.key, followingSet),
    })).filter((s) => s.key === "following" || s.cards.length > 0);
    return all;
  }, [visibleCards, preferences, seen, interactions, followingSet]);

  // 当前频道内容（单频道独立渲染；点踩消失的卡不再渲染）
  const activeSection = useMemo(() => {
    const sec = sections.find((s) => s.key === feedChannel);
    if (!sec) return null;
    const cards = sec.cards.filter((c) => !dismissed.has(c.repo));
    return cards.length > 0 ? { ...sec, cards } : null;
  }, [sections, feedChannel, dismissed]);

  // 喜欢的卡片（快照优先，其次匹配当天数据；快照缺失且当天数据也没有的——旧记录无法找回）
  const likedCards = useMemo(() => {
    const snapshots = feedback.likedSnapshots ?? {};
    return feedback.likes
      .map((repo) => snapshots[repo] ?? visibleCards.find((c) => c.repo === repo))
      .filter((c): c is FeedCard => !!c);
  }, [feedback.likes, feedback.likedSnapshots, visibleCards]);

  // 搜索结果（加权 AND：多词必须全命中，repo/name/owner 权重优先；owner 命中进创作者组）
  const { results: searchResults, creators: searchCreators } = useMemo(
    () => weightedSearch(visibleCards, searchQuery),
    [visibleCards, searchQuery],
  );

  // 搜索空状态：推荐搜索词 chips（cards 统计 topics 频率 top 12，去重过滤空）
  const topicChips = useMemo(() => {
    const freq = new Map<string, number>();
    for (const c of cards) {
      for (const t of c.topics ?? []) {
        const k = t.trim();
        if (!k) continue;
        freq.set(k, (freq.get(k) ?? 0) + 1);
      }
    }
    return [...freq.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([t]) => t);
  }, [cards]);

  // 搜索空状态：热门项目预览（momentum 含 hot，score 降序前 8）
  const hotPreview = useMemo(
    () =>
      cards
        .filter((c) => c.momentum?.includes("hot"))
        .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
        .slice(0, 8),
    [cards],
  );

  // 创作者页项目列表（栈顶 owner 过滤，score 降序）
  const creatorCards = useMemo(() => {
    if (!currentCreator) return [];
    return cards.filter((c) => c.owner === currentCreator).sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
  }, [cards, currentCreator]);

  // 我的-关注：关注的创作者（含 feed.json 项目数，按项目数降序）
  const followedCreators = useMemo(() => {
    return following
      .map((owner) => ({ owner, count: cards.filter((c) => c.owner === owner).length }))
      .sort((a, b) => b.count - a.count);
  }, [following, cards]);

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

  // 频道切换（侧边栏目的地导航，无取消态）
  const switchFeedChannel = useCallback((key: string) => {
    setFeedChannel(key);
  }, []);

  const stats = useMemo(
    () => ({
      total: cards.length,
      sections: sections.length,
    }),
    [cards, sections],
  );

  // -----------------------------------------------------------------------
  // 渲染
  // -----------------------------------------------------------------------

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <h1 className="logo">
            <GitTokLogo />
          </h1>
          <nav className="tabs">
            <button className={`tab${tab === "feed" ? " active" : ""}`} onClick={() => setTab("feed")}>
              <Home size={16} />
              首页
            </button>
            <button className={`tab${tab === "search" ? " active" : ""}`} onClick={() => setTab("search")}>
              <Search size={16} />
              搜索
            </button>
            <button className={`tab${tab === "me" ? " active" : ""}`} onClick={() => setTab("me")}>
              <User size={16} />
              我的 {feedback.likes.length > 0 && <span className="tab-count">{feedback.likes.length}</span>}
            </button>
          </nav>
        </div>
      </header>

      <main className={`main${tab === "feed" || tab === "me" ? " main-feed" : ""}`}>
        {/* === 创作者页栈：整页替换（feed/我的/搜索全部让位）；返回逐级 pop 后恢复原 tab 原频道 === */}
        {viewStack.length > 0 && currentCreator ? (
          <CreatorPage
            owner={currentCreator}
            projects={creatorCards}
            likedSet={likedSet}
            isFollowing={followingSet.has(currentCreator)}
            onToggleFollow={toggleFollow}
            onOpen={handleOpenDetail}
            onOpenCreator={openCreator}
            onBack={closeCreator}
          />
        ) : (
          <>
            {/* === 首页 tab === */}
            {tab === "feed" && loading && (
              <div className="status">
                <div className="spinner" />
                <p>正在加载好项目…</p>
              </div>
            )}
            {tab === "feed" && error && (
              <div className="status error">
                <p>
                  <AlertTriangle size={16} className="icon" />
                  加载失败: {error}
                </p>
              </div>
            )}
            {tab === "feed" && !loading && !error && sections.length === 0 && (
              <div className="status">
                <p>
                  <Inbox size={16} className="icon" />
                  暂无内容
                </p>
              </div>
            )}
            {tab === "feed" && !loading && !error && sections.length > 0 && (
              <div className="feed-layout">
                {/* 左侧边栏：目的地导航（发现组 + 分类组） */}
                <aside className="sidebar">
                  <div className="side-group-box">
                    <div className="side-group">发 现</div>
                    {DYNAMIC_SECTIONS.filter(
                      (s) => s.key === "following" || sections.some((x) => x.key === s.key),
                    ).map((s) => (
                      <button
                        key={s.key}
                        className={`side-item${feedChannel === s.key ? " active" : ""}`}
                        onClick={() => switchFeedChannel(s.key)}
                      >
                        <span className="side-icon">
                          <SectionIcon icon={s.icon} size={18} />
                        </span>
                        <span className="side-text">{s.title}</span>
                      </button>
                    ))}
                  </div>
                  <div className="side-group-box">
                    <div className="side-group">分 类</div>
                    {CATEGORY_SECTIONS.filter((s) => sections.some((x) => x.key === s.key)).map((s) => (
                      <button
                        key={s.key}
                        className={`side-item${feedChannel === s.key ? " active" : ""}`}
                        onClick={() => switchFeedChannel(s.key)}
                      >
                        <span className="side-icon">
                          <SectionIcon icon={s.icon} size={18} />
                        </span>
                        <span className="side-text">{s.title}</span>
                      </button>
                    ))}
                  </div>
                </aside>
                <div className="feed-content">
                  {feedChannel === "following" && !activeSection && (
                    <div className="status">
                      <p>
                        <Heart size={16} className="icon" />
                        关注创作者后，他们的项目会出现在这里
                      </p>
                      <p className="hint">去项目卡片上点创作者名即可关注</p>
                    </div>
                  )}
                  {activeSection && (
                    <>
                      {feedChannel !== "recommended" && (
                        <div className="channel-head">
                          <span className="ch-icon">
                            <SectionIcon icon={activeSection.icon} size={18} />
                          </span>
                          <span className="ch-title">{activeSection.title}</span>
                          <span className="ch-count">
                            {activeSection.cards.length} 个项目 · {activeSection.desc}
                          </span>
                        </div>
                      )}
                      <FeedVirtualList
                        cards={activeSection.cards}
                        likedSet={likedSet}
                        dismissingSet={dismissing}
                        onOpen={handleOpenDetail}
                        channel={feedChannel}
                        onOpenCreator={openCreator}
                        onEndHint={`已加载全部 ${activeSection.cards.length} 个项目`}
                      />
                    </>
                  )}
                </div>
              </div>
            )}

            {/* === 我的 tab（侧栏式：左侧 喜欢/收藏/关注，右侧内容） === */}
            {tab === "me" && (
              <div className="me-layout">
                <aside className="sidebar me-sidebar">
                  <div className="side-group-box">
                    <button
                      className={`side-item${meView === "liked" ? " active" : ""}`}
                      onClick={() => setMeView("liked")}
                    >
                      <span className="side-icon">
                        <ThumbsUp size={18} />
                      </span>
                      <span className="side-text">喜欢</span>
                    </button>
                    <button
                      className={`side-item${meView === "collections" ? " active" : ""}`}
                      onClick={() => setMeView("collections")}
                    >
                      <span className="side-icon">
                        <Star size={18} />
                      </span>
                      <span className="side-text">收藏</span>
                    </button>
                    <button
                      className={`side-item${meView === "following" ? " active" : ""}`}
                      onClick={() => setMeView("following")}
                    >
                      <span className="side-icon">
                        <Heart size={18} />
                      </span>
                      <span className="side-text">关注</span>
                    </button>
                  </div>
                </aside>
                <div className="me-content feed-content">
                  {meView === "liked" && (
                    <>
                      <div className="collections-header">
                        <span className="collections-stats">
                          <ThumbsUp size={14} className="icon" />共 {feedback.likes.length} 个喜欢的项目
                        </span>
                      </div>
                      {likedCards.length === 0 ? (
                        <div className="status">
                          <p>
                            <Inbox size={16} className="icon" />
                            还没有喜欢的项目
                          </p>
                          <p className="hint">在项目详情中点赞即可开始喜欢</p>
                        </div>
                      ) : (
                        <div className="feed-list">
                          {likedCards.map((card) => (
                            <FeedCardMemo
                              key={card.repo}
                              card={card}
                              liked={true}
                              onOpen={handleOpenDetail}
                              onOpenCreator={openCreator}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {meView === "collections" && (
                    <>
                      <div className="collections-header">
                        <span className="collections-stats">
                          <Folder size={14} className="icon" />共 {collections.length} 个收藏夹 ·{" "}
                          {collections.reduce((sum, c) => sum + c.repos.length, 0)} 个项目
                        </span>
                      </div>

                      {collections.length === 0 && (
                        <div className="status">
                          <p>
                            <Inbox size={16} className="icon" />
                            还没有收藏夹
                          </p>
                          <p className="hint">在项目详情中点击收藏按钮即可收藏</p>
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
                              onClick={() =>
                                setExpandedCols((prev) => ({ ...prev, [col.id]: !prev[col.id] }))
                              }
                            >
                              <span className={`folder-chevron${expanded ? " open" : ""}`}>
                                <ChevronRight size={14} />
                              </span>
                              <span className="folder-icon">
                                <Folder size={18} />
                              </span>
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
                                <Trash2 size={16} />
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
                                          onOpenCreator={openCreator}
                                        />
                                        <button
                                          className="folder-card-remove"
                                          onClick={() => handleRemoveFromCollection(col.id, card.repo)}
                                          title="移出收藏夹"
                                        >
                                          <X size={16} />
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

                  {meView === "following" && (
                    <>
                      <div className="collections-header">
                        <span className="collections-stats">
                          <Heart size={14} className="icon" />共 {following.length} 位关注的创作者
                        </span>
                      </div>
                      {following.length === 0 ? (
                        <div className="status">
                          <p>还没有关注任何人</p>
                          <p className="hint">去项目卡片上点创作者名即可关注</p>
                        </div>
                      ) : (
                        <div className="creator-list">
                          {followedCreators.map(({ owner, count }) => (
                            <div
                              key={owner}
                              className="creator-item"
                              title={`查看 ${owner} 的创作者页`}
                              onClick={() => openCreator(owner)}
                            >
                              <GithubAvatar owner={owner} size={56} className="creator-item-avatar" />
                              <span className="creator-item-name">{owner}</span>
                              <span className="creator-item-count">{count} 个项目</span>
                              <a
                                className="creator-item-github"
                                href={`https://github.com/${owner}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub 主页"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink size={16} />
                              </a>
                              <button
                                className="creator-item-unfollow"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFollow(owner);
                                }}
                              >
                                <UserMinus size={14} />
                                取关
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
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
                      <X size={16} />
                    </button>
                  )}
                </div>

                {/* 空状态：推荐搜索词 + 分类直达 + 热门项目预览 */}
                {!searchQuery && (
                  <div className="search-empty">
                    <div className="search-chips">
                      <div className="search-empty-title">试试搜索</div>
                      <div className="chip-row">
                        {topicChips.map((t) => (
                          <button key={t} className="search-chip" onClick={() => setSearchQuery(t)}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="search-cats">
                      <div className="search-empty-title">分类直达</div>
                      <div className="cat-row">
                        {CATEGORY_SECTIONS.map((s) => (
                          <button
                            key={s.key}
                            className="search-cat"
                            onClick={() => {
                              setTab("feed");
                              setFeedChannel(s.key);
                            }}
                          >
                            <span className="cat-icon">
                              <SectionIcon icon={s.icon} size={18} />
                            </span>
                            <span className="cat-text">{s.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="search-hot">
                      <div className="search-empty-title">热门项目</div>
                      <div className="feed-list">
                        {hotPreview.map((card) => (
                          <FeedCardMemo
                            key={card.repo}
                            card={card}
                            liked={feedback.likes.includes(card.repo)}
                            onOpen={handleOpenDetail}
                            onOpenCreator={openCreator}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 创作者分组（结果顶部；点卡片打开创作者页） */}
                {searchQuery && searchCreators.length > 0 && (
                  <div className="search-creators">
                    <div className="search-group-title">创作者</div>
                    <div className="creator-list">
                      {searchCreators.map(({ owner, count }) => (
                        <div
                          key={owner}
                          className="creator-item"
                          title={`查看 ${owner} 的创作者页`}
                          onClick={() => openCreator(owner)}
                        >
                          <GithubAvatar owner={owner} size={56} className="creator-item-avatar" />
                          <span className="creator-item-name">{owner}</span>
                          <span className="creator-item-count">{count} 个项目</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 项目分组 */}
                {searchQuery && searchResults.length > 0 && (
                  <>
                    <div className="search-group-title">项目</div>
                    <div className="feed-list">
                      {searchResults.slice(0, searchVisible).map((card) => (
                        <FeedCardMemo
                          key={card.repo}
                          card={card}
                          liked={feedback.likes.includes(card.repo)}
                          onOpen={handleOpenDetail}
                          onOpenCreator={openCreator}
                        />
                      ))}
                    </div>
                  </>
                )}

                {searchQuery && searchResults.length === 0 && searchCreators.length === 0 && (
                  <div className="status">
                    <p>
                      <Search size={16} className="icon" />
                      没搜到，换个关键词试试？
                    </p>
                  </div>
                )}
                {searchResults.length > searchVisible && (
                  <div ref={sentinelRef} className="section-sentinel">
                    <div className="spinner small" />
                  </div>
                )}
              </>
            )}
          </>
        )}
      </main>

      <footer className="footer">
        <span>
          {stats.total} 个项目 · {stats.sections} 个分区 ·{" "}
        </span>
        <span>
          <ThumbsUp size={14} className="icon" /> {feedback.likes.length} ·{" "}
          <ThumbsDown size={14} className="icon" /> {feedback.dislikes.length}
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
          onOpenCreator={openCreator}
        />
      )}
    </div>
  );
}
