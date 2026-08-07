import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Bot,
  ChevronRight,
  ExternalLink,
  Flame,
  Folder,
  Gamepad2,
  Heart,
  Home,
  Inbox,
  LoaderCircle,
  Search,
  Sparkles,
  Star,
  ThumbsDown,
  ThumbsUp,
  Trash2,
  TrendingUp,
  User,
  UserMinus,
  UserRound,
  Users,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";

// ---------------------------------------------------------------------------
// 频道图标 map（按图标 key，与 SECTIONS 常量 icon 字段对应：侧栏 18px / 频道头 18px）
// ---------------------------------------------------------------------------

export const CHANNEL_ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  flame: Flame,
  "trending-up": TrendingUp,
  heart: Heart,
  bot: Bot,
  gamepad: Gamepad2,
  wrench: Wrench,
  book: BookOpen,
};

// ---------------------------------------------------------------------------
// 徽章图标 map（按 badge key，12px；badge key 与频道 key 一致）
// ---------------------------------------------------------------------------

export const BADGE_ICONS: Record<string, LucideIcon> = {
  hot: Flame,
  daily: TrendingUp,
  ai: Bot,
  fun: Gamepad2,
  tool: Wrench,
  learning: BookOpen,
};

/** 徽章文字（badge key → 中文标签） */
export const BADGE_LABELS: Record<string, string> = {
  hot: "热门",
  daily: "每日",
  ai: "AI",
  fun: "兴趣",
  tool: "工具",
  learning: "学习",
};

/** 数据来源徽章（source → 图标 + 文字） */
export const SOURCE_ICONS: Record<string, LucideIcon> = {
  trending: Flame,
  bigbro: Users,
  search: Search,
};

export const SOURCE_LABELS: Record<string, string> = {
  trending: "热门",
  bigbro: "大牛",
  search: "搜索",
};

// ---------------------------------------------------------------------------
// 工具图标统一 re-export（size 默认 18、className 透传为 lucide 原生能力）
// ---------------------------------------------------------------------------

export {
  AlertTriangle,
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  Folder,
  Heart,
  Home,
  Inbox,
  LoaderCircle,
  Search,
  Star,
  ThumbsDown,
  ThumbsUp,
  Trash2,
  TrendingUp,
  User,
  UserMinus,
  UserRound,
  Users,
  X,
};

export type { LucideIcon };

// ---------------------------------------------------------------------------
// GitTokLogo：accent 渐变（135deg #8B6CC7→#A78BFA）圆角方块（radius 9，28px）
// + 白色信号波纹；右侧衬线文字 GitTok（渐变由 .logo-text 继承全局 --accent-gradient）
// ---------------------------------------------------------------------------

export function GitTokLogo({ size = 28 }: { size?: number }) {
  return (
    <span className="logo-mark">
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="gittok-logo-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7A5CC0" />
          </linearGradient>
        </defs>
        {/* 玻璃内芯：纵向渐变（上浅下深）+ 半透明白外描边 */}
        <rect x="1" y="1" width="26" height="26" rx="9" fill="url(#gittok-logo-grad)" />
        <rect x="1" y="1" width="26" height="26" rx="9" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        {/* 左上角玻璃高光：贴合圆角的内弧（模拟玻璃反光） */}
        <path
          d="M5.2 7.8a6.5 6.5 0 0 1 2.3 -2.3"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
        />
        {/* 信号波纹：左侧发射点 + 两段同心弧（简洁线条，小尺寸清晰） */}
        <circle cx="10.5" cy="14" r="2.2" fill="#fff" />
        <path d="M14 9.8a6 6 0 0 1 0 8.4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M17.2 6.8a10.4 10.4 0 0 1 0 14.4"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      <span className="logo-text">GitTok</span>
    </span>
  );
}
