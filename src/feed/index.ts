/**
 * 开源版抖音信息流 — 数据管道。
 *
 * 把 trending + search 两路数据合并去重 → stars 轮转刷新
 * → LLM 批量评分（中文推荐理由）→ star 门槛过滤 → 个性化排序（反馈 loop）
 * → 输出 data/feed.json 供前端刷。
 *
 * bigbros 盖章已全面退役（2026-09-05 拍板：陌生库作者的 star 对访客零价值）：
 * 管道停跑盖章、评分/推荐/通知/前端展示等一切出口清除；字段仅为历史数据兼容保留。
 *
 * 用法（被 index.ts 主流程调用，或独立运行）：
 *   const cards = await generateFeed(config, trendingData);
 */

import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import type { TrendingData } from "../trending.ts";
import type { RadarConfig } from "../config.ts";
import { callLlm } from "../report.ts";
import { buildFeedScoringPrompt, parseScoringResult } from "./prompts.ts";
import {
  loadProfile,
  saveProfile,
  loadFeedback,
  applyFeedbackToProfile,
  rankCards,
  initTagWeights,
} from "./personalize.ts";
import type {
  FeedCard,
  FeedCategory,
  FeedMomentum,
  FeedSource,
  RepoForScoring,
  ScoringResult,
  Tag,
  UserProfile,
} from "./types.ts";

const DATA_DIR = "data";
const FEED_PATH = path.join(DATA_DIR, "feed.json");
const BATCH_SIZE = 5;
/** LLM 评分的新仓库上限（已有缓存的仓库不占额度）。
 *  1000→3000→5000（2026-09-05 取材十倍扩容配套）：免费编队多模型 worker 池
 *  （groq×3/gemini×2/siliconflow×2/agnes/zhipu/github-models/mistral ≈12 worker），
 *  5000 张纯调用 ≈ 30 分钟，240min 超时内余量充足；嫌慢继续提额。 */
const MAX_LLM_SCORE_REPOS = 15000; // 5000→15000（Phase1 放量：36 worker 吞吐下 ≈1h 纯调用）
/** LLM 并发批次数 */
const SCORE_CONCURRENCY = 8; // 5→8（2026-09-05 放量：worker 池 36 个，批次并发跟上）
/** feed.json 最大保留条目数（超出淘汰最老 + 未收藏；前端互动过的靠本地快照兜底） */
const MAX_FEED_SIZE = 12000;
/** 热门标签阈值（最近已知 stars）。
 *  2000→30000（2026-09-05 重标定）：取材池整体高星化（search 按 stars 排序拉取），
 *  库内 star 中位数 1.28 万、p75≈3.1 万，2000 门槛下 86% 的卡都挂「热门」——徽章与热门频道彻底通胀。
 *  30000≈当前库的 p75，热门回到「头部 1/4 高星库」的本义；取材池继续膨胀时随下次标定上移。 */
const HOT_STAR_THRESHOLD = 30000;
/** 每日标签阈值（今日 star 增长） */
const DAILY_GROWTH_THRESHOLD = 5;
/** 「刚冒头」库龄上限（天）：创建不足 90 天且增速高的新库 */
const RISING_AGE_DAYS = 90;
/** 「刚冒头」日涨星下限（高于 daily 的 5，确保是真实爆发而非缓慢积累） */
const RISING_GROWTH_THRESHOLD = 30;
/** stars 轮转刷新：每天最多刷新的库内 repo 数（rate limit 预算：search ~1050 + 轮转 2000 < 5000/h） */
const REFRESH_BATCH = 2000;
/** stars 刷新并发 */
const REFRESH_CONCURRENCY = 8;
/** 轮转游标文件（记录下次从哪开始刷新） */
const REFRESH_CURSOR_PATH = path.join(DATA_DIR, ".refresh_cursor");
/** 待补评队列文件：LLM 评分失败的 repo 快照在此兜底保留，下轮强制恢复补评（杜绝「失败卡不进 baseline → 永不补评」丢卡） */
const PENDING_PATH = path.join(DATA_DIR, "pending-retry.json");
/** 待补评队列容量上限（防失控膨胀挤占新卡评分名额） */
const PENDING_MAX = 1000; // 300→1000（2026-09-05 放量：候选池万级后失败队列水位同步抬）
/** 单 repo 最大重试轮数（连败放弃，防僵尸条目长期占位） */
const PENDING_MAX_RETRIES = 7;
// 盖章状态文件与 STAMP_* 常量已随「bigbros 全出口退役」（2026-09-05）移除；盖章调用停跑见 generateFeed 2.7 注释。

// 权威组织/官方仓库 owner 前缀
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

// 学习资源关键词（学英语/学代码等「我自己学习能用」的资源；大模型学习已被 ai 前置判定拿走）
const LEARNING_KEYWORDS =
  /awesome|tutorial|learn|course|guide|roadmap|面试|interview|study|educat|english|language|leetcode|algorithms|coding|cheatsheet|cheat-sheet|textbook|flashcard|anki|quiz|encyclopedia|math|mathematics|physics|chemistry|biology|编程|英语|学习|教材|数学|物理|化学|生物|百科|速查|题库/i;

// 好玩气质关键词：项目名/描述/topics 里出现「玩」的实锤才算好玩（2026-09-05 兴趣分区收紧）。
// 背景：LLM 会把正经生产力工具随手打成「创意工具」，实测 300 张 fun 卡混入建站器/图标库/UI 库
// 数十张——「创意工具」「可视化」标签必须过这层气质词交叉验证才许进兴趣分区。
const FUN_VIBE =
  /\bgame\b|\bgames\b|\bgaming\b|arcade|\bpuzzle\b|\bemulator|\bretro\b|\bplayable|gameplay|creative[- ]?coding|generative[- ]?art|\bascii\b|pixel[- ]?art|demoscene|\bshader|chiptune|\bmusic\b|\btoy\b|\btoys\b|\bfun\b|\bart\b|\bartists?\b|游戏|模拟器|玩具|沙盒|好玩|创意编程|生成艺术|音游|像素/i;

/** AI 强特征前缀（命中即归 ai 分区） */
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

/** 固有标签判定（互斥，每个项目必有其一；tool 为最宽兜底，全覆盖无死角） */
export function classifyCategory(card: Pick<FeedCard, "repo" | "desc" | "topics" | "aiDims">): FeedCategory {
  const repoLower = card.repo.toLowerCase();
  const descLower = card.desc.toLowerCase();
  const topicsLower = card.topics.map((t) => t.toLowerCase());
  const allText = `${repoLower} ${descLower} ${topicsLower.join(" ")}`;
  const dims = card.aiDims || [];

  // 1. 工具：Agent Skill 集合类（repo/topics 含 skill）
  if (repoLower.includes("skill") || topicsLower.some((t) => t.includes("skill"))) {
    return "tool";
  }
  // 2. 兴趣：「非AI-好玩」「游戏」= LLM 气质判定直通；「创意工具」「可视化」须过 FUN_VIBE
  //    气质词交叉验证（防正经生产力工具被随手打的标签拖进兴趣分区，2026-09-05 收紧）
  if (dims.some((d) => d === "非AI-好玩" || d === "游戏")) {
    return "fun";
  }
  if (dims.some((d) => d === "创意工具" || d === "可视化") && FUN_VIBE.test(allText)) {
    return "fun";
  }
  // 3. AI：强特征前缀（收窄，避免泛 AI 全进 ai）
  if (dims.some((d) => AI_PREFIXES.some((p) => d.startsWith(p) || d.includes(p)))) {
    return "ai";
  }
  // 4. 学习：学英语/学代码资源（排在 AI 后，大模型学习已进 ai）
  if (LEARNING_KEYWORDS.test(allText) || topicsLower.includes("awesome")) {
    return "learning";
  }
  // 5. 兜底：工具（最宽泛类别，覆盖一切）
  return "tool";
}

/** 动态标签判定（不互斥，独立命中）+ 每日频道时效热度分 */
export function classifyMomentum(card: Pick<FeedCard, "owner" | "stars" | "starGrowth" | "createdAt">): {
  momentum: FeedMomentum[];
  fromOfficial: boolean;
  heatScore: number;
} {
  const momentum: FeedMomentum[] = [];
  if (card.stars >= HOT_STAR_THRESHOLD) momentum.push("hot");
  // 「刚冒头」：新库（<90 天）+ 高增速，且还没进 hot（总星门槛）——热点提速刀的核心上浮信号
  const ageDays = card.createdAt
    ? (Date.now() - new Date(card.createdAt).getTime()) / (24 * 3600 * 1000)
    : Infinity;
  if (
    card.stars < HOT_STAR_THRESHOLD &&
    ageDays <= RISING_AGE_DAYS &&
    card.starGrowth >= RISING_GROWTH_THRESHOLD
  ) {
    momentum.push("rising");
  }
  // 每日：真·时效热点门槛（日均涨星达标 或 新星爆发），老库低增速不再进每日
  const isDaily = card.starGrowth >= DAILY_GROWTH_THRESHOLD || momentum.includes("rising");
  if (isDaily) momentum.push("daily");

  // 时效热度分（2026-09-05 拍板：涨得快 > 涨得多）：
  // 主轴=相对增速（日均涨星/总星，1k 涨 100 = 10% 完胜 100k 涨 1k = 1%），
  // 托底=绝对增速（防超小库占比虚高，基数下限 50），×建仓加成（新项目爆更猛）。
  const rel = card.starGrowth / Math.max(card.stars, 50);
  const abs = Math.min(card.starGrowth / 100, 1);
  const ageBoost = ageDays <= RISING_AGE_DAYS ? 1.5 : ageDays <= 365 ? 1.2 : 1.0;
  const heatScore = isDaily ? (rel * 3 + abs * 0.3) * ageBoost : 0;

  return {
    momentum,
    fromOfficial: AUTHORITATIVE_ORGS.has(card.owner) && card.stars >= 500,
    heatScore,
  };
}

// ---------------------------------------------------------------------------
// 多样性交错（AI:非AI = 2:3 轮播）
// ---------------------------------------------------------------------------

/** AI 判定前缀（与 classifyCard 的 ai 分区前缀一致；仅用于交错分池，不改任何 score） */
const AI_DIM_PREFIXES = [
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

function isAiCard(card: FeedCard): boolean {
  const dims = card.aiDims && card.aiDims.length > 0 ? card.aiDims : [card.aiDim];
  return dims.some((d) => AI_DIM_PREFIXES.some((p) => d.startsWith(p))) || card.aiScore >= 0.6;
}

/** 交错排序：只改输出顺序，不改任何 score 值。AI:非AI = 2:3 轮播，某池耗尽则余下全用另一池。 */
function diversifyCards(cards: FeedCard[]): FeedCard[] {
  const aiPool = cards.filter(isAiCard).sort((a, b) => b.score - a.score);
  const nonAiPool = cards.filter((c) => !isAiCard(c)).sort((a, b) => b.score - a.score);
  const out: FeedCard[] = [];
  let i = 0;
  let j = 0;
  while (i < aiPool.length || j < nonAiPool.length) {
    for (let k = 0; k < 2 && i < aiPool.length; k++) out.push(aiPool[i++]!);
    for (let k = 0; k < 3 && j < nonAiPool.length; k++) out.push(nonAiPool[j++]!);
  }
  return out;
}

// ---------------------------------------------------------------------------
// 综合标签构建
// ---------------------------------------------------------------------------

/** 从 LLM + GitHub topics + language 构建综合标签列表 */
function buildTags(aiDims: string[], topics: string[], language: string): Tag[] {
  const tagMap = new Map<string, Tag>();

  // LLM 标签：最高权重 1.0
  for (const dim of aiDims) {
    tagMap.set(dim, { name: dim, source: "llm", weight: 1.0 });
  }

  // GitHub topics：权重 0.7
  for (const t of topics) {
    const existing = tagMap.get(t);
    if (!existing || existing.weight < 0.7) {
      tagMap.set(t, { name: t, source: "github", weight: 0.7 });
    }
  }

  // Language：权重 0.5
  if (language) {
    const existing = tagMap.get(language);
    if (!existing) {
      tagMap.set(language, { name: language, source: "language", weight: 0.5 });
    }
  }

  // 去重后按权重降序排列，最多保留 25 个
  return [...tagMap.values()].sort((a, b) => b.weight - a.weight).slice(0, 25);
}

// ---------------------------------------------------------------------------
// 合并中间类型
// ---------------------------------------------------------------------------

interface MergedRepo {
  repo: string;
  desc: string;
  stars: number;
  language: string;
  topics: string[];
  source: FeedSource;
  starGrowth: number;
  /** 仓库创建时间 ISO（rising 判定；search API/轮转刷新携带，trending HTML 无） */
  createdAt?: string;
  /** 静默轮数（跨轮累计于 feed.json）：刷新无信号 +1、有信号清零；≥3 退出默认推荐流 */
  silentRounds?: number;
  bigbros: string[];
  ts: string;
  /** 待补评队列恢复的 repo（评分排序优先） */
  pending?: boolean;
}

/**
 * stars 轮转刷新：每天对库内 repo 分批查 GitHub API（游标续跑，4-6 天全覆盖）。
 *
 * starGrowth = 「日均涨星」：(今日 stars − baseline stars) ÷ 距上次真实更新的天数；
 * 间隔 >1 天时摊薄（防停摆 N 天后增量全算到一天头上虚高，2026-09-04）。
 * 返回刷新成功的 repo → 新 stars 映射。
 */
async function refreshStarsRoundRobin(
  repoMap: Map<string, MergedRepo>,
  baselineStars: Map<string, number>,
  intervalDays = 1,
): Promise<Map<string, number>> {
  const repos = [...repoMap.values()];
  if (repos.length === 0) return new Map();
  let cursor = 0;
  try {
    if (fs.existsSync(REFRESH_CURSOR_PATH)) {
      cursor = parseInt(fs.readFileSync(REFRESH_CURSOR_PATH, "utf-8").trim(), 10) || 0;
    }
  } catch {
    cursor = 0;
  }
  const token = process.env["GITHUB_TOKEN"] ?? "";
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const results = new Map<string, number>();
  let refreshed = 0;
  let scanned = 0;
  const total = repos.length;
  const queue: { repo: string; idx: number }[] = [];

  // 收集本轮要刷新的 repo（跳过今天已被抓取数据更新过的——已有新鲜 stars 的不重复查）
  const todayUpdated = new Set<string>();
  // 无法精确知道「今天抓过谁」，用 ts 近似：baseline 里的 ts 是历史值，merge 更新会改 ts。
  // 保守做法：全部按游标顺序查（反正有日预算限制）。
  for (let i = 0; i < total && refreshed < REFRESH_BATCH; i++) {
    const idx = (cursor + i) % total;
    const r = repos[idx]!;
    if (todayUpdated.has(r.repo)) continue;
    queue.push({ repo: r.repo, idx });
    refreshed++;
  }
  if (queue.length === 0) {
    console.log("  [feed/refresh] nothing to refresh today");
    return results;
  }

  let qi = 0;
  const worker = async () => {
    while (qi < queue.length) {
      const item = queue[qi++]!;
      scanned++;
      try {
        const resp = await fetch(`https://api.github.com/repos/${item.repo}`, { headers });
        if (!resp.ok) {
          if (resp.status === 403 || resp.status === 429) {
            console.error(`  [feed/refresh] rate limited at ${item.repo}, stop for today`);
            break;
          }
          continue;
        }
        const d = (await resp.json()) as { stargazers_count?: number; created_at?: string };
        const newStars = d.stargazers_count ?? 0;
        const m = repoMap.get(item.repo);
        if (m) {
          m.stars = newStars;
          if (d.created_at) m.createdAt = d.created_at;
          // 只对「有增长基准」的 repo 计算日均涨星（真实增速信号）：
          // 基准缺失 = 当天新入库的卡，newStars-0 会把总 star 当增长（虚高，见 starGrowth 研讨稿）
          if (baselineStars.has(item.repo)) {
            const oldStars = baselineStars.get(item.repo)!;
            const diff = newStars - oldStars;
            // 同轮内多数据源取大；stars 减少/持平（diff<=0）→ 不动（保留 merge 的 todayStars 或 0）
            if (diff > 0) {
              m.starGrowth = Math.max(m.starGrowth, Math.ceil(diff / intervalDays));
            }
            // 沉寂判定（2026-09-05 拍板「真的沉寂了才退场」）：日均涨星 <2 且无爆发信号 →
            // 静默轮数 +1（跨轮累计在 feed.json）；有信号清零。连续 3 轮 ≈ 数周持续无动静。
            const dailyAvg = Math.ceil(Math.max(diff, 0) / intervalDays);
            const hasSignal =
              dailyAvg >= 2 ||
              m.starGrowth >= DAILY_GROWTH_THRESHOLD ||
              m.starGrowth >= RISING_GROWTH_THRESHOLD;
            m.silentRounds = hasSignal ? 0 : (m.silentRounds ?? 0) + 1;
          }
        }
        results.set(item.repo, newStars);
      } catch (err) {
        console.error(`  [feed/refresh] ${item.repo}: ${err}`);
      }
    }
  };

  // 用 REPRESH_CONCURRENCY 个并发 worker
  const workers = Array.from({ length: REFRESH_CONCURRENCY }, () => worker());
  await Promise.all(workers);

  // 保存游标（本轮最后扫描的位置），下轮从下一个开始
  const lastIdx = queue.length > 0 ? queue[queue.length - 1]!.idx : cursor;
  const nextCursor = (lastIdx + 1) % total;
  try {
    fs.writeFileSync(REFRESH_CURSOR_PATH, String(nextCursor), "utf-8");
  } catch {
    /* ignore */
  }
  console.log(
    `  [feed/refresh] refreshed ${results.size} repos (scan ${scanned}, cursor ${nextCursor}/${total})`,
  );
  return results;
}

// ---------------------------------------------------------------------------
// P0a 长度校验：reasonCn 等效宽度 ≥100 + summaryCn 20-35 字
// ---------------------------------------------------------------------------

/**
 * 中文字符串等效宽度：全角（汉字/CJK 标点/全角符号）算 1，其余（半角）算 0.5。
 * 混英文时字符数不可靠（96 字可能 2 行也可能 3 行），卡宽 710 的空行边界实测 effLen 93-95，
 * 校验线 effLen ≥100 为安全线（栗子已拍板）。
 */
export function effLen(s: string): number {
  let w = 0;
  for (const ch of s) {
    w += /[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/.test(ch) ? 1 : 0.5;
  }
  return w;
}

/** reasonCn effLen ≥100 且 summaryCn 20-35 字（P0a 长度校验线） */
function passesLengthCheck(sc: ScoringResult): boolean {
  return (
    !!sc.reasonCn &&
    effLen(sc.reasonCn) >= 100 &&
    !!sc.summaryCn &&
    sc.summaryCn.length >= 20 &&
    sc.summaryCn.length <= 35
  );
}

/**
 * detail 兜底：从 detailCn 截取 reason 用内容（零成本，防重评失败丢卡）。
 * 按 \n\n+ 分段，跳过第一段（与 summary 语义重复，实测重叠度高），
 * 从第二段起累计（段落 join 空格），累计到 effLen ≥100 后继续到最近句号（。！？）
 * 或 effLen 130 封顶截断；第二段起总 effLen <100 时并入第一段尾部再截。
 * 返回必须 effLen ≥100，无法兜底返回 null。
 */
export function fallbackReasonFromDetail(detailCn: string): string | null {
  const segments = detailCn
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  if (segments.length === 0) return null;
  let body = segments.slice(1).join(" ");
  if (effLen(body) < 100) body = segments.join(" ");
  if (effLen(body) < 100) return null;
  let acc = "";
  let reached = false;
  for (const ch of body) {
    acc += ch;
    if (effLen(acc) >= 100) reached = true;
    if (reached && (/[。！？]/.test(ch) || effLen(acc) >= 130)) break;
  }
  return effLen(acc) >= 100 ? acc : null;
}

/**
 * detail 第一段截取 summary（P0a 兜底收尾：一句话描述从「这是什么」段截 20-35 字句号收尾，
 * 与 reason 用的技术段互补不重复；避免 summary 留空被前端用 reason 首句填充成超长文本）。
 * 返回 effLen 尽量落在 20-35；无法截取返回 ""。
 */
export function summaryFromDetailFirstPara(detailCn: string): string {
  const segments = detailCn
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  if (segments.length === 0) return "";
  let body = segments[0] ?? "";
  if (effLen(body) < 20) body = segments.join(" ");
  let acc = "";
  let reached = false;
  for (const ch of body) {
    acc += ch;
    if (effLen(acc) >= 20) reached = true;
    if (reached && (/[。！？]/.test(ch) || effLen(acc) >= 35)) break;
  }
  return acc;
}

// ---------------------------------------------------------------------------
// 加载已有评分缓存（避免重复 LLM 调用）
// ---------------------------------------------------------------------------

function loadExistingScores(): { scores: Map<string, ScoringResult>; detailMap: Map<string, string> } {
  try {
    if (!fs.existsSync(FEED_PATH)) return { scores: new Map(), detailMap: new Map() };
    const raw = fs.readFileSync(FEED_PATH, "utf-8");
    const cards = JSON.parse(raw) as FeedCard[];
    const map = new Map<string, ScoringResult>();
    // baseline 每卡的 detailCn（P0a detail 兜底数据源：重评失败 + 有历史 detail → 第二段截取）
    const detailMap = new Map<string, string>();
    for (const c of cards) {
      if (c.detailCn) detailMap.set(c.repo, c.detailCn);
      if (c.reasonCn && c.aiScore !== undefined) {
        map.set(c.repo, {
          repo: c.repo,
          aiDims: c.aiDims || (c.aiDim ? [c.aiDim] : []),
          aiDim: c.aiDim || c.aiDims?.[0] || "其他",
          aiScore: c.aiScore,
          summaryCn: c.summaryCn,
          reasonCn: c.reasonCn,
          detailCn: c.detailCn || "",
        });
      }
    }
    console.log(`  [feed/cache] loaded ${map.size} existing scores from ${FEED_PATH}`);
    return { scores: map, detailMap };
  } catch {
    console.log(`  [feed/cache] no existing feed.json, scoring all repos`);
    return { scores: new Map(), detailMap: new Map() };
  }
}

// ---------------------------------------------------------------------------
// 待补评队列：LLM 评分失败的 repo 快照兜底保留（下轮强制恢复补评）
// ---------------------------------------------------------------------------

/** 队列条目：MergedRepo 完整快照 + 已失败轮数 */
interface PendingEntry {
  repo: string;
  desc: string;
  stars: number;
  language: string;
  topics: string[];
  source: FeedSource;
  starGrowth: number;
  createdAt?: string;
  silentRounds?: number;
  bigbros: string[];
  ts: string;
  retryCount: number;
}

/** 加载待补评队列（容错：损坏/缺失一律当空队列，digest 主流程绝不能挂） */
function loadPendingRetries(): Map<string, PendingEntry> {
  try {
    if (!fs.existsSync(PENDING_PATH)) return new Map();
    const arr = JSON.parse(fs.readFileSync(PENDING_PATH, "utf-8"));
    if (!Array.isArray(arr)) return new Map();
    const map = new Map<string, PendingEntry>();
    for (const e of arr) {
      if (!e || typeof e.repo !== "string" || !e.repo.includes("/")) continue;
      // 连败超上限的条目保留在 map 中（用于写盘清理），恢复补评时跳过
      map.set(e.repo, {
        repo: e.repo,
        desc: typeof e.desc === "string" ? e.desc : "",
        stars: typeof e.stars === "number" ? e.stars : 0,
        language: typeof e.language === "string" ? e.language : "",
        topics: Array.isArray(e.topics)
          ? e.topics.filter((t: unknown): t is string => typeof t === "string")
          : [],
        source: e.source === "trending" || e.source === "bigbro" ? e.source : "search",
        starGrowth: typeof e.starGrowth === "number" ? e.starGrowth : 0,
        createdAt: typeof e.createdAt === "string" ? e.createdAt : undefined,
        silentRounds: typeof e.silentRounds === "number" ? e.silentRounds : 0,
        bigbros: Array.isArray(e.bigbros)
          ? e.bigbros.filter((b: unknown): b is string => typeof b === "string")
          : [],
        ts: typeof e.ts === "string" ? e.ts : new Date().toISOString(),
        retryCount: e.retryCount,
      });
    }
    if (map.size > 0) console.log(`  [feed/pending] loaded ${map.size} pending retries from ${PENDING_PATH}`);
    return map;
  } catch (err) {
    console.error(`  [feed/pending] load failed: ${err}, starting with empty queue`);
    return new Map();
  }
}

/** 保存待补评队列（容错：写失败仅日志，不影响主流程；空队列写空数组清盘） */
function savePendingRetries(entries: PendingEntry[]): void {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(PENDING_PATH, JSON.stringify(entries, null, 2), "utf-8");
    if (entries.length > 0) console.log(`  [feed/pending] saved ${entries.length} repos to ${PENDING_PATH}`);
  } catch (err) {
    console.error(`  [feed/pending] save failed: ${err}`);
  }
}

// ---------------------------------------------------------------------------
// LLM 批量评分
// ---------------------------------------------------------------------------

async function scoreBatched(repos: RepoForScoring[], aiInterestsText: string): Promise<ScoringResult[]> {
  const results: ScoringResult[] = [];
  const batches: RepoForScoring[][] = [];
  for (let i = 0; i < repos.length; i += BATCH_SIZE) {
    const batch = repos.slice(i, i + BATCH_SIZE);
    if (batch.length > 0) batches.push(batch);
  }
  console.log(
    `  [feed/scoring] ${batches.length} batches (${repos.length} repos), concurrency=${SCORE_CONCURRENCY}`,
  );

  // 并行评分：每次 SCORE_CONCURRENCY 个批次同时进行，利用 LLM 并发槽位
  for (let i = 0; i < batches.length; i += SCORE_CONCURRENCY) {
    const chunk = batches.slice(i, i + SCORE_CONCURRENCY);
    const chunkResults = await Promise.all(
      chunk.map(async (batch, idx) => {
        const batchNum = i + idx + 1;
        try {
          const prompt = buildFeedScoringPrompt(batch, aiInterestsText);
          const raw = await callLlm(prompt, 8192);
          const parsed = parseScoringResult(raw);
          // 失败重试：如果解析结果太少，拆分批次逐个重试（LLM 长输出易截断）
          if (parsed.length < batch.length) {
            const missing = batch.filter((r) => !parsed.some((p) => p.repo === r.repo));
            console.log(
              `  [feed/scoring] batch ${batchNum}/${batches.length}: ${parsed.length}/${batch.length} scored, retrying ${missing.length} missing...`,
            );
            const retried = await retryScoring(missing, aiInterestsText, 1, false);
            return [...parsed, ...retried];
          }
          console.log(
            `  [feed/scoring] batch ${batchNum}/${batches.length}: ${parsed.length}/${batch.length} scored`,
          );
          return parsed;
        } catch (err) {
          console.error(`  [feed/scoring] batch ${batchNum}/${batches.length} failed: ${err}`);
          return [];
        }
      }),
    );
    for (const r of chunkResults) results.push(...r);
  }
  return results;
}

/** 对缺失/不达标的 repo 逐个重试 LLM 评分（单 repo prompt，输出短，成功率更高）。
 *  checkLength=true 时每个 repo 最多重试 maxAttempts 次，每次校验长度（reasonCn effLen≥100 且 summaryCn 20-35 字），达标即用；
 *  checkLength=false 用于批量解析缺失补评（长度校验统一在组装循环做）。 */
async function retryScoring(
  repos: RepoForScoring[],
  aiInterestsText: string,
  maxAttempts = 3,
  checkLength = true,
): Promise<ScoringResult[]> {
  const results: ScoringResult[] = [];
  for (const repo of repos) {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const prompt = buildFeedScoringPrompt([repo], aiInterestsText);
        const raw = await callLlm(prompt, 4096);
        const parsed = parseScoringResult(raw);
        if (parsed[0] && (!checkLength || passesLengthCheck(parsed[0]))) {
          results.push(parsed[0]);
          break;
        }
        if (parsed[0]) {
          console.log(
            `  [feed/scoring] retry ${repo.repo} attempt ${attempt + 1}: length check failed (reason effLen=${effLen(parsed[0].reasonCn).toFixed(1)}, summary ${parsed[0].summaryCn.length}字)`,
          );
        }
      } catch (err) {
        console.error(`  [feed/scoring] retry ${repo.repo} attempt ${attempt + 1} failed: ${err}`);
      }
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// 主管道
// ---------------------------------------------------------------------------

/**
 * 距上次管道真实更新的天数：git log 查 data/feed.json 最后一次 commit 时间。
 * （文件 mtime 会被 checkout 刷新不可靠；git commit 日期才是数据的真实更新时间。）
 * 用于 starGrowth 差分归一：间隔 >1 天时把增量摊薄成日均，防停摆后虚高。
 * 失败（无 git/异常）回退 1 天（= 原「今日增长」语义）。clamp 到 [1, 30] 天。
 */
export async function detectRunIntervalDays(): Promise<number> {
  try {
    const { execFile } = await import("node:child_process");
    const { promisify } = await import("node:util");
    const out = await promisify(execFile)("git", ["log", "-1", "--format=%cI", "--", "data/feed.json"], {
      timeout: 10_000,
    });
    const lastCommit = new Date(out.stdout.trim()).getTime();
    if (Number.isNaN(lastCommit)) return 1;
    const days = (Date.now() - lastCommit) / (24 * 3600 * 1000);
    return Math.min(Math.max(days, 1), 30);
  } catch {
    return 1;
  }
}

export async function generateFeed(
  config: RadarConfig,
  trendingData: TrendingData,
  opts?: { runIntervalDays?: number },
): Promise<FeedCard[]> {
  const now = new Date().toISOString();
  console.log("[feed] merging trending + search (incremental, bigbro stamping inside)...");

  // 增长差分的摊薄间隔：默认按 git 历史自动探测（停摆 N 天 → 增量摊成日均），测试可注入固定值
  const runIntervalDays = opts?.runIntervalDays ?? (await detectRunIntervalDays());
  if (runIntervalDays > 1) {
    console.log(
      `  [feed] last real update was ${runIntervalDays.toFixed(1)} days ago — starGrowth normalized to daily average`,
    );
  }

  // 1. 合并三路数据（增量模式：baseline = 上次 feed.json，只增不减）
  const repoMap = new Map<string, MergedRepo>();
  const baselineStars = new Map<string, number>();
  if (fs.existsSync(FEED_PATH)) {
    try {
      const raw = fs.readFileSync(FEED_PATH, "utf-8");
      const cards = JSON.parse(raw) as FeedCard[];
      for (const c of cards) {
        if (!c.repo) continue;
        baselineStars.set(c.repo, c.stars);
        repoMap.set(c.repo, {
          repo: c.repo,
          desc: c.desc,
          stars: c.stars,
          language: c.language,
          topics: c.topics,
          source: c.source,
          starGrowth: 0, // 跨轮不保留旧增长值：starGrowth=「今日增长」每轮从 0 重算（防历史虚高固化）
          createdAt: c.createdAt,
          silentRounds: c.silentRounds ?? 0,
          bigbros: c.bigbros,
          ts: c.ts,
        });
      }
      console.log(`  [feed] baseline loaded ${cards.length} existing cards`);
    } catch (err) {
      console.error(`  [feed] baseline load failed: ${err}, starting fresh`);
    }
  }

  // 1.5 恢复待补评队列：LLM 评分失败的 repo 兜底保留——即使今天未再被抓取也强制补评
  //     （修复「失败卡不进 baseline → 永不补评」丢卡缺陷；今天已抓到的用新数据覆盖）
  const pendingRetries = loadPendingRetries();
  if (pendingRetries.size > 0) {
    let restored = 0;
    for (const [repo, pe] of pendingRetries) {
      if (pe.retryCount >= PENDING_MAX_RETRIES) continue; // 连败超上限：放弃恢复（防僵尸长期占位）
      if (repoMap.has(repo)) continue; // 今天已抓到 → 保留今天的新数据
      repoMap.set(repo, {
        repo: pe.repo,
        desc: pe.desc,
        stars: pe.stars,
        language: pe.language,
        topics: pe.topics,
        source: pe.source,
        starGrowth: 0, // 快照值可能已虚高，从 0 重算（refresh 用真实差值覆盖）
        createdAt: pe.createdAt,
        silentRounds: pe.silentRounds ?? 0,
        bigbros: pe.bigbros,
        ts: pe.ts,
        pending: true,
      });
      baselineStars.set(repo, pe.stars); // 增长基准 = 快照 stars（防 starGrowth 虚高）
      restored++;
    }
    console.log(
      `  [feed/pending] restored ${restored}/${pendingRetries.size} repos for retry (${repoMap.size} total)`,
    );
  }

  for (const t of trendingData.trendingRepos) {
    repoMap.set(t.fullName, {
      repo: t.fullName,
      desc: t.description,
      stars: t.totalStars,
      language: t.language,
      topics: [],
      source: "trending",
      starGrowth: t.todayStars,
      bigbros: [],
      ts: now,
    });
  }

  for (const s of trendingData.searchRepos) {
    const ex = repoMap.get(s.fullName);
    if (ex) {
      // 合并：补 topics（searchQuery 作为 topic）
      if (!ex.topics.includes(s.searchQuery)) ex.topics.push(s.searchQuery);
      // 取较新的 ts
      if (s.pushedAt > ex.ts) ex.ts = s.pushedAt;
      // search API 自带 createdAt：trending 来源缺失时补上（rising 判定用）
      if (!ex.createdAt && s.createdAt) ex.createdAt = s.createdAt;
    } else {
      repoMap.set(s.fullName, {
        repo: s.fullName,
        desc: s.description ?? "",
        stars: s.stargazersCount,
        language: s.language ?? "",
        topics: [s.searchQuery],
        source: "search",
        starGrowth: 0,
        createdAt: s.createdAt,
        bigbros: [],
        ts: s.pushedAt,
      });
    }
  }

  // 2.5 stars 轮转刷新：库内 repo 分批查最新 stars（游标续跑），只增不减数据的每日标签依赖它
  await refreshStarsRoundRobin(repoMap, baselineStars, runIntervalDays);
  console.log(`  [feed] after refresh: ${repoMap.size} unique repos`);

  // 2.7 库内 star 盖章已停跑（2026-09-05 拍板：陌生库作者的 star 对访客零价值，bigbros 全出口退役）。
  //     盖章每天烧上千 GitHub API 配额却只产出无人消费的 bigbros 数据；bigbro-stars.ts 与
  //     loadStampState 系保留（不删文件），如需恢复语义在此处重新接线即可。

  // 3. LLM 批量评分（增量模式：跳过已有缓存的仓库，只给新仓库评分）
  const { scores: existingScores, detailMap } = loadExistingScores();
  // 评分队列均衡：trending 来源优先（保证今日热门不被 search 淹没）；
  // search 组内按领域（searchQuery label = topics[0]）分桶、桶内按 star 降序、桶间轮询合并，
  // 保证每个领域都有代表进入评分队列（否则高星 AI 会挤掉低星非 AI，非 AI 拿不到评分就进不了 feed）
  const notScored = [...repoMap.values()].filter((m) => !existingScores.has(m.repo));
  // 待补评恢复的 repo 排最前（它们已经等了一轮，先补评）
  const pendingFirst = notScored.filter((m) => m.pending);
  const rest = notScored.filter((m) => !m.pending);
  // 非 search 新卡（trending；pending 恢复的 source=bigbro 旧快照也在此路径补评）
  // 2026-09-01 关注解耦：不再有 bigbro 新卡，旧的 MAX_BIGBRO_SCORE 配额随灌卡语义一并退役
  const nonSearch = rest.filter((m) => m.source !== "search").sort((a, b) => b.stars - a.stars);
  const searchBuckets = new Map<string, MergedRepo[]>();
  for (const m of rest) {
    if (m.source !== "search") continue;
    const key = m.topics[0] ?? "unknown";
    if (!searchBuckets.has(key)) searchBuckets.set(key, []);
    searchBuckets.get(key)!.push(m);
  }
  for (const arr of searchBuckets.values()) arr.sort((a, b) => b.stars - a.stars);
  const bucketKeys = [...searchBuckets.keys()].sort();
  const roundRobin: MergedRepo[] = [];
  let depth = 0;
  let hasMore = true;
  while (hasMore) {
    hasMore = false;
    for (const k of bucketKeys) {
      const arr = searchBuckets.get(k)!;
      if (depth < arr.length) {
        roundRobin.push(arr[depth]!);
        hasMore = true;
      }
    }
    depth++;
  }
  const reposNeedingScore: RepoForScoring[] = [...pendingFirst, ...nonSearch, ...roundRobin]
    .slice(0, MAX_LLM_SCORE_REPOS)
    .map((m) => ({
      repo: m.repo,
      description: m.desc,
      stars: m.stars,
      language: m.language,
      topics: m.topics,
    }));
  console.log(
    `[feed] ${existingScores.size} cached, scoring ${reposNeedingScore.length}/${repoMap.size} new repos via LLM (cap ${MAX_LLM_SCORE_REPOS})...`,
  );
  const newScoringResults =
    reposNeedingScore.length > 0
      ? await scoreBatched(reposNeedingScore, config.interests.aiInterestsText)
      : [];
  const scoringMap = new Map<string, ScoringResult>([
    ...existingScores,
    ...newScoringResults.map((r) => [r.repo, r] as const),
  ]);

  // 4. 组装 FeedCard（只保留 LLM 评分成功的仓库，不使用模板兜底）
  const cards: FeedCard[] = [];
  let llmCount = 0;
  /** 本轮评分失败（或未轮到评分）的 repo——记入待补评队列，下轮强制恢复补评 */
  const failedThisRound: MergedRepo[] = [];
  for (const m of repoMap.values()) {
    let sc = scoringMap.get(m.repo);
    // 缓存命中的存量卡原样输出：增量管道「历史卡缓存命中零重评」铁律（既有测试锁定，历史卡零 LLM 成本）。
    // P0a 长度校验只作用于本轮新评分/恢复补评的卡；存量短卡由任务 2 清 reasonCn 失效后走新评分路径收敛。
    const cachedHit = existingScores.has(m.repo);
    if (!cachedHit) {
      // P0a 长度校验：reasonCn effLen <100（等高卡片第三行空白）或 summaryCn 不在 20-35 字 → 不达标
      if (
        !sc ||
        !sc.reasonCn ||
        effLen(sc.reasonCn) < 100 ||
        !sc.summaryCn ||
        sc.summaryCn.length < 20 ||
        sc.summaryCn.length > 35
      ) {
        // 不达标 → 单 repo 重评 ≤3 次（每次校验，达标即用）
        const retried = await retryScoring(
          [{ repo: m.repo, description: m.desc, stars: m.stars, language: m.language, topics: m.topics }],
          config.interests.aiInterestsText,
          3,
        );
        if (retried.length > 0) {
          sc = retried[0]!;
        } else {
          const detail = sc?.detailCn || detailMap.get(m.repo) || "";
          if (detail) {
            // 重评仍失败 + 有历史/本轮 detail → detail 第二段兜底（零成本，防丢卡）
            const fallback = fallbackReasonFromDetail(detail);
            if (fallback) {
              console.log(
                `  [feed/scoring] ${m.repo}: rescore failed, fallback reason from detail (effLen=${effLen(fallback).toFixed(1)})`,
              );
              if (!sc) {
                // 本轮评分失败 + 历史 detail 兜底：构造最小评分（summary 从 detail 第一段截 20-35 字，
                // 防前端用 reason 首句填充成超长文本——P0a 收尾）
                sc = {
                  repo: m.repo,
                  aiDims: [],
                  aiDim: "其他",
                  aiScore: 0.5,
                  summaryCn: summaryFromDetailFirstPara(detail),
                  reasonCn: fallback,
                  detailCn: detail,
                };
              } else {
                // sc 有值（本轮批量评分成功）但长度不达标 + 重评失败：reason 用 detail 兜底的同时，
                // summary 若不达标也一并从 detail 第一段截取（与 reason 用的第二段互补，零重复风险）
                const summaryOk = sc.summaryCn && sc.summaryCn.length >= 20 && sc.summaryCn.length <= 35;
                sc = {
                  ...sc,
                  reasonCn: fallback,
                  detailCn: detail,
                  summaryCn: summaryOk ? sc.summaryCn : summaryFromDetailFirstPara(detail),
                };
              }
            } else if (sc) {
              // 重评失败 + detail 兜底也失败（detail 异常短）：保留原评分进 feed（不丢卡，符合只增不减设计）
              console.warn(
                `  [feed/scoring] ${m.repo}: rescore failed & detail fallback failed, keeping original score`,
              );
            } else {
              // 无评分可保留 → 待补评队列，下轮补评
              failedThisRound.push(m);
              continue;
            }
          } else {
            // 重评失败且无 detail 可兜底 → 记入待补评队列，下轮补评（本轮不进 feed）
            failedThisRound.push(m);
            continue;
          }
        }
      }
    }
    // 评分失败（重评/兜底均不可用）的仓库直接跳过，不进信息流（但记入待补评队列兜底，杜绝永久丢失）
    if (!sc || !sc.reasonCn) {
      failedThisRound.push(m);
      continue;
    }
    const [owner = "", ...nameParts] = m.repo.split("/");
    const name = nameParts.join("/") || m.repo;
    llmCount++;
    const partialCard = {
      repo: m.repo,
      owner,
      name,
      desc: m.desc,
      summaryCn: sc.summaryCn,
      reasonCn: sc.reasonCn,
      detailCn: sc.detailCn,
      stars: m.stars,
      starGrowth: m.starGrowth,
      createdAt: m.createdAt,
      silentRounds: m.silentRounds,
      language: m.language,
      topics: m.topics,
      aiDims: sc.aiDims,
      aiDim: sc.aiDim,
      tags: buildTags(sc.aiDims, m.topics, m.language),
      aiScore: sc.aiScore,
      source: m.source,
      // bigbros 截断 10：防名单膨胀后数组体积失控（前端展示前 3 个是既有逻辑）
      bigbros: m.bigbros.slice(0, 10),
      url: `https://github.com/${m.repo}`,
      ts: m.ts,
      score: 0,
    };
    cards.push({
      ...partialCard,
      category: classifyCategory(partialCard),
      ...classifyMomentum(partialCard),
    });
  }
  console.log(`  [feed] ${llmCount}/${repoMap.size} repos have LLM content (rest skipped)`);

  // 4.5 更新待补评队列：本轮评分成功的移出（历史缓存命中卡本来就不在队列）；
  //     本轮失败/未轮到评分的入队（retryCount+1）；连败超上限放弃；cap 防失控膨胀
  if (failedThisRound.length > 0 || pendingRetries.size > 0) {
    const retryMap = new Map(pendingRetries);
    const scoredNow = new Set(newScoringResults.filter((r) => r.reasonCn).map((r) => r.repo));
    for (const repo of scoredNow) retryMap.delete(repo);
    // 已通过其他路径持有评分的（缓存命中 = 已解决）→ 出队（防僵尸条目残留）
    for (const repo of [...retryMap.keys()]) {
      if (existingScores.has(repo)) retryMap.delete(repo);
    }
    for (const m of failedThisRound) {
      const prev = retryMap.get(m.repo);
      retryMap.set(m.repo, {
        repo: m.repo,
        desc: m.desc,
        stars: m.stars,
        language: m.language,
        topics: m.topics,
        source: m.source,
        starGrowth: m.starGrowth,
        createdAt: m.createdAt,
        silentRounds: m.silentRounds ?? 0,
        bigbros: m.bigbros,
        ts: m.ts,
        retryCount: (prev?.retryCount ?? 0) + 1,
      });
    }
    const abandoned = [...retryMap.values()].filter((pe) => pe.retryCount >= PENDING_MAX_RETRIES).length;
    const entriesBeforeCap = [...retryMap.values()].filter((pe) => pe.retryCount < PENDING_MAX_RETRIES);
    const truncated = Math.max(0, entriesBeforeCap.length - PENDING_MAX);
    const nextEntries = entriesBeforeCap.sort((a, b) => a.repo.localeCompare(b.repo)).slice(0, PENDING_MAX);
    savePendingRetries(nextEntries);
    if (abandoned > 0) {
      console.log(
        `  [feed/pending] abandoned ${abandoned} repos after ${PENDING_MAX_RETRIES} failed retries`,
      );
    }
    if (truncated > 0) {
      console.log(`  [feed/pending] truncated ${truncated} repos over queue cap (${PENDING_MAX})`);
    }
  }

  // 5. star 门槛过滤
  const filtered = cards.filter((c) => c.stars >= config.starThreshold);
  console.log(
    `  [feed] ${filtered.length}/${cards.length} repos passed star threshold (>= ${config.starThreshold})`,
  );

  // 6. 个性化：加载画像 → 初始化标签权重 → 应用反馈 → 排序 → 保存画像
  const fallbackProfile: UserProfile = {
    interests: {
      ai: config.interests.ai,
      fun: config.interests.fun,
      practical: config.interests.practical,
    },
    tagWeights: initTagWeights(config.interests.aiInterestsText),
    aiInterestsText: config.interests.aiInterestsText,
    followedBigs: config.bigbros,
    bookmarks: [],
    lastActiveTs: new Date().toISOString(),
  };
  let profile = loadProfile(fallbackProfile);
  const feedback = loadFeedback();
  profile = applyFeedbackToProfile(profile, feedback, filtered);
  saveProfile(profile);
  const twCount = Object.keys(profile.tagWeights).length;
  console.log(
    `  [feed] profile updated: ${twCount} tag weights, ai=${profile.interests.ai.toFixed(2)} fun=${profile.interests.fun.toFixed(2)} practical=${profile.interests.practical.toFixed(2)}`,
  );

  const ranked = rankCards(filtered, profile);

  // 6.5 多样性交错：AI:非AI = 2:3 轮播（只改输出顺序，不改 score 值）
  const diversified = diversifyCards(ranked);

  // 7. 内容淘汰：只增不减（不做年龄硬淘汰——历史项目永久保留）；
  //    容量上限 MAX_FEED_SIZE：超出后淘汰最老 + 未收藏（profile.bookmarks 豁免，互动过的靠前端快照兜底）
  const pruned = diversified.filter((c) => {
    if (c.score < 0.01) return false;
    return true;
  });
  if (pruned.length < ranked.length) {
    console.log(`  [feed] pruned ${ranked.length - pruned.length} cards (score < 0.01)`);
  }
  let final = pruned;
  if (pruned.length > MAX_FEED_SIZE) {
    const bookmarked = new Set(profile.bookmarks);
    const keepBookmarked = pruned.filter((c) => bookmarked.has(c.repo));
    const rest = pruned
      .filter((c) => !bookmarked.has(c.repo))
      .sort((a, b) => new Date(b.ts).getTime() - new Date(a.ts).getTime());
    final = [...keepBookmarked, ...rest].slice(0, MAX_FEED_SIZE);
    console.log(
      `  [feed] trimmed to ${MAX_FEED_SIZE} from ${pruned.length} (${keepBookmarked.length} bookmarked kept)`,
    );
  }

  // 8. 写 data/feed.json
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FEED_PATH, JSON.stringify(final, null, 2), "utf-8");
  console.log(`  [feed] saved ${final.length} cards to ${FEED_PATH}`);

  return final;
}

// ---------------------------------------------------------------------------
// 独立运行入口：tsx src/feed/index.ts
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  if (!process.env["GITHUB_TOKEN"]) throw new Error("GITHUB_TOKEN required");
  const { loadConfig } = await import("../config.ts");
  const { fetchTrendingData } = await import("../trending.ts");
  const config = loadConfig();
  const trendingData = await fetchTrendingData(config.trendingTopics);
  await generateFeed(config, trendingData);
  console.log("Done!");
}

// 仅当直接运行时执行（被 import 时不执行）
const isDirectRun =
  process.argv[1]?.replace(/\\/g, "/").includes("feed/index.ts") ||
  process.argv[1]?.endsWith("feed/index.ts");
if (isDirectRun) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
