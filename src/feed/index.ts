/**
 * 开源版抖音信息流 — 数据管道。
 *
 * 把 trending + search + bigbro 三路数据合并去重 → LLM 批量评分（中文推荐理由）
 * → star 门槛过滤 → 个性化排序（反馈 loop）→ 输出 data/feed.json 供前端刷。
 *
 * 用法（被 index.ts 主流程调用，或独立运行）：
 *   const cards = await generateFeed(config, trendingData, bigbroStars);
 */

import fs from "node:fs";
import path from "node:path";
import type { TrendingData } from "../trending.ts";
import type { BigbroStar } from "../bigbro-stars.ts";
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
  FeedSource,
  RepoForScoring,
  ScoringResult,
  Tag,
  UserProfile,
} from "./types.ts";

const DATA_DIR = "data";
const FEED_PATH = path.join(DATA_DIR, "feed.json");
const BATCH_SIZE = 5;
/** LLM 评分的新仓库上限（已有缓存的仓库不占额度） */
const MAX_LLM_SCORE_REPOS = 1000;
/** LLM 并发批次数 */
const SCORE_CONCURRENCY = 5;
/** feed.json 最大保留条目数 */
const MAX_FEED_SIZE = 2000;
/** 卡片硬截止天数（超过此天数直接移除） */
const MAX_CARD_AGE_DAYS = 90;

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

// 学习资源关键词
const LEARNING_KEYWORDS = /awesome|tutorial|learn|course|guide|roadmap|面试|interview|study|educat/i;

/** 根据项目属性判定分区（每个项目只属于一个分区，零重复） */
function classifyCard(card: Omit<FeedCard, "category">): FeedCategory {
  const repoLower = card.repo.toLowerCase();
  const descLower = card.desc.toLowerCase();
  const topicsLower = card.topics.map((t) => t.toLowerCase());
  const allText = `${repoLower} ${descLower} ${topicsLower.join(" ")}`;
  // 检查 aiDims 数组中是否命中某类别
  const dims = card.aiDims || [card.aiDim];

  // 1. SKILL 分区：名字或 topics 含 skill
  if (repoLower.includes("skill") || topicsLower.some((t) => t.includes("skill"))) {
    return "skill";
  }

  // 2. 学习分区：教程/awesome/指南类
  if (LEARNING_KEYWORDS.test(allText) || topicsLower.includes("awesome")) {
    return "learning";
  }

  // 3. 兴趣分区：好玩但非 AI（检查所有标签）
  if (dims.some((d) => d === "非AI-好玩" || d === "游戏" || d === "创意工具")) {
    return "fun";
  }

  // 4. 权威分区：官方组织 + 有一定热度（提前，避免被 ai 吞掉）
  if (AUTHORITATIVE_ORGS.has(card.owner) && card.stars >= 500) {
    return "authoritative";
  }

  // 5. 每日分区：当天 star 增长高（提前，避免被 ai 吞掉）
  if (card.starGrowth >= 5) {
    return "daily";
  }

  // 6. 新锐分区：star 不高但 AI 相关度高（提前，避免被 ai 吞掉）
  if (card.stars < 1000 && card.aiScore >= 0.6) {
    return "rising";
  }

  // 7. 热门分区：高星项目（≥ 2000 star）优先进热门，保证热门板块有内容
  if (card.stars >= 2000) {
    return "hot";
  }

  // 8. AI 分区：AI 相关标签（收窄前缀，避免泛 AI 项目全进 ai）
  //    仅命中强 AI 特征才进 ai；弱 AI（如只含"模型"）留给 hot
  const aiPrefixes = [
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
  if (dims.some((d) => aiPrefixes.some((p) => d.startsWith(p) || d.includes(p)))) {
    return "ai";
  }

  // 9. 默认热门
  return "hot";
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
  bigbros: string[];
  ts: string;
}

// ---------------------------------------------------------------------------
// 拉 bigbro-only repo 的详情（trending/search 已自带，无需拉）
// ---------------------------------------------------------------------------

interface RepoDetail {
  stars: number;
  description: string;
  language: string;
  topics: string[];
}

async function fetchRepoDetail(repo: string): Promise<RepoDetail | null> {
  const token = process.env["GITHUB_TOKEN"] ?? "";
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  try {
    const resp = await fetch(`https://api.github.com/repos/${repo}`, { headers });
    if (!resp.ok) {
      console.error(`  [feed/detail] ${repo}: HTTP ${resp.status}`);
      return null;
    }
    const d = (await resp.json()) as {
      stargazers_count?: number;
      description?: string | null;
      language?: string | null;
      topics?: string[];
    };
    return {
      stars: d.stargazers_count ?? 0,
      description: d.description ?? "",
      language: d.language ?? "",
      topics: d.topics ?? [],
    };
  } catch (err) {
    console.error(`  [feed/detail] ${repo}: ${err}`);
    return null;
  }
}

// ---------------------------------------------------------------------------
// 加载已有评分缓存（避免重复 LLM 调用）
// ---------------------------------------------------------------------------

function loadExistingScores(): Map<string, ScoringResult> {
  try {
    if (!fs.existsSync(FEED_PATH)) return new Map();
    const raw = fs.readFileSync(FEED_PATH, "utf-8");
    const cards = JSON.parse(raw) as FeedCard[];
    const map = new Map<string, ScoringResult>();
    for (const c of cards) {
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
    return map;
  } catch {
    console.log(`  [feed/cache] no existing feed.json, scoring all repos`);
    return new Map();
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
            const retried = await retryScoring(missing, aiInterestsText);
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

/** 对缺失的 repo 逐个重试 LLM 评分（单 repo prompt，输出短，成功率更高） */
async function retryScoring(repos: RepoForScoring[], aiInterestsText: string): Promise<ScoringResult[]> {
  const results: ScoringResult[] = [];
  for (const repo of repos) {
    try {
      const prompt = buildFeedScoringPrompt([repo], aiInterestsText);
      const raw = await callLlm(prompt, 4096);
      const parsed = parseScoringResult(raw);
      if (parsed[0]) results.push(parsed[0]);
    } catch (err) {
      console.error(`  [feed/scoring] retry ${repo.repo} failed: ${err}`);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// 主管道
// ---------------------------------------------------------------------------

export async function generateFeed(
  config: RadarConfig,
  trendingData: TrendingData,
  bigbroStars: BigbroStar[],
): Promise<FeedCard[]> {
  const now = new Date().toISOString();
  console.log("[feed] merging trending + search + bigbro...");

  // 1. 合并三路数据
  const repoMap = new Map<string, MergedRepo>();

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
    } else {
      repoMap.set(s.fullName, {
        repo: s.fullName,
        desc: s.description ?? "",
        stars: s.stargazersCount,
        language: s.language ?? "",
        topics: [s.searchQuery],
        source: "search",
        starGrowth: 0,
        bigbros: [],
        ts: s.pushedAt,
      });
    }
  }

  const needDetail: string[] = [];
  for (const b of bigbroStars) {
    const ex = repoMap.get(b.repo);
    if (ex) {
      ex.bigbros = b.bigbros;
      if (b.ts > ex.ts) ex.ts = b.ts;
    } else {
      repoMap.set(b.repo, {
        repo: b.repo,
        desc: "",
        stars: 0,
        language: "",
        topics: [],
        source: "bigbro",
        starGrowth: 0,
        bigbros: b.bigbros,
        ts: b.ts,
      });
      needDetail.push(b.repo);
    }
  }
  console.log(`  [feed] merged ${repoMap.size} unique repos (${needDetail.length} bigbro-only need detail)`);

  // 2. 拉 bigbro-only repo 详情
  if (needDetail.length > 0) {
    await Promise.all(
      needDetail.map(async (repo) => {
        const d = await fetchRepoDetail(repo);
        if (d) {
          const m = repoMap.get(repo);
          if (m) {
            m.desc = d.description;
            m.stars = d.stars;
            m.language = d.language;
            m.topics = d.topics;
          }
        }
      }),
    );
  }

  // 3. LLM 批量评分（增量模式：跳过已有缓存的仓库，只给新仓库评分）
  const existingScores = loadExistingScores();
  // 评分队列均衡：trending/bigbro 来源优先（保证今日热门/大牛推荐不被 search 淹没）；
  // search 组内按领域（searchQuery label = topics[0]）分桶、桶内按 star 降序、桶间轮询合并，
  // 保证每个领域都有代表进入评分队列（否则高星 AI 会挤掉低星非 AI，非 AI 拿不到评分就进不了 feed）
  const notScored = [...repoMap.values()].filter((m) => !existingScores.has(m.repo));
  const nonSearch = notScored.filter((m) => m.source !== "search").sort((a, b) => b.stars - a.stars);
  const searchBuckets = new Map<string, MergedRepo[]>();
  for (const m of notScored) {
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
  const reposNeedingScore: RepoForScoring[] = [...nonSearch, ...roundRobin]
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
  for (const m of repoMap.values()) {
    const sc = scoringMap.get(m.repo);
    // LLM 评分失败的仓库直接跳过，不进信息流
    if (!sc || !sc.reasonCn) continue;
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
      language: m.language,
      topics: m.topics,
      aiDims: sc.aiDims,
      aiDim: sc.aiDim,
      tags: buildTags(sc.aiDims, m.topics, m.language),
      aiScore: sc.aiScore,
      source: m.source,
      bigbros: m.bigbros,
      url: `https://github.com/${m.repo}`,
      ts: m.ts,
      score: 0,
    };
    cards.push({
      ...partialCard,
      category: classifyCard(partialCard),
    });
  }
  console.log(`  [feed] ${llmCount}/${repoMap.size} repos have LLM content (rest skipped)`);

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

  // 7. 内容淘汰：时间硬截止 + Top N 裁剪
  const nowMs = Date.now();
  const pruned = diversified.filter((c) => {
    const ageDays = (nowMs - new Date(c.ts).getTime()) / (24 * 3600 * 1000);
    if (ageDays > MAX_CARD_AGE_DAYS) return false;
    if (c.score < 0.01) return false;
    return true;
  });
  if (pruned.length < ranked.length) {
    console.log(
      `  [feed] pruned ${ranked.length - pruned.length} stale cards (age > ${MAX_CARD_AGE_DAYS}d or score < 0.01)`,
    );
  }
  const final = pruned.length > MAX_FEED_SIZE ? pruned.slice(0, MAX_FEED_SIZE) : pruned;
  if (pruned.length > MAX_FEED_SIZE) {
    console.log(`  [feed] trimmed top ${MAX_FEED_SIZE} from ${pruned.length} cards`);
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
  const { fetchBigbroStars } = await import("../bigbro-stars.ts");

  const config = loadConfig();
  const [trendingData, bigbroStars] = await Promise.all([
    fetchTrendingData(config.trendingTopics),
    fetchBigbroStars(config.bigbros),
  ]);
  await generateFeed(config, trendingData, bigbroStars);
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
