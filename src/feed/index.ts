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
import { loadProfile, saveProfile, loadFeedback, applyFeedbackToProfile, rankCards } from "./personalize.ts";
import type {
  FeedCard,
  FeedCategory,
  FeedSource,
  RepoForScoring,
  ScoringResult,
  UserProfile,
} from "./types.ts";

const DATA_DIR = "data";
const FEED_PATH = path.join(DATA_DIR, "feed.json");
const BATCH_SIZE = 5;
/** LLM 评分的仓库上限（按 star 排序，高 star 优先） */
const MAX_LLM_SCORE_REPOS = 2000;
/** LLM 并发批次数（与 report.ts 的 LLM_CONCURRENCY 匹配） */
const SCORE_CONCURRENCY = 5;

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

  // 1. SKILL 分区：名字或 topics 含 skill
  if (repoLower.includes("skill") || topicsLower.some((t) => t.includes("skill"))) {
    return "skill";
  }

  // 2. 学习分区：教程/awesome/指南类
  if (LEARNING_KEYWORDS.test(allText) || topicsLower.includes("awesome")) {
    return "learning";
  }

  // 3. 兴趣分区：好玩但非 AI
  if (card.aiDim === "非AI-好玩") {
    return "fun";
  }

  // 4. AI 分区：AI 相关
  if (card.aiDim.startsWith("AI") || card.aiDim === "模型与训练" || card.aiDim === "RAG与知识") {
    return "ai";
  }

  // 5. 权威分区：官方组织 + 有一定热度
  if (AUTHORITATIVE_ORGS.has(card.owner) && card.stars >= 500) {
    return "authoritative";
  }

  // 6. 每日分区：当天 star 增长高
  if (card.starGrowth >= 5) {
    return "daily";
  }

  // 7. 新锐分区：star 不高但 AI 相关度高
  if (card.stars < 1000 && card.aiScore >= 0.6) {
    return "rising";
  }

  // 8. 默认热门
  return "hot";
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

  // 3. LLM 批量评分（按 star 排序，高 star 优先，cap MAX_LLM_SCORE_REPOS）
  const sortedRepos = [...repoMap.values()].sort((a, b) => b.stars - a.stars);
  const reposToScore: RepoForScoring[] = sortedRepos.slice(0, MAX_LLM_SCORE_REPOS).map((m) => ({
    repo: m.repo,
    description: m.desc,
    stars: m.stars,
    language: m.language,
    topics: m.topics,
  }));
  console.log(
    `[feed] scoring ${reposToScore.length}/${repoMap.size} repos via LLM (top by stars, cap ${MAX_LLM_SCORE_REPOS})...`,
  );
  const scoringResults = await scoreBatched(reposToScore, config.interests.aiInterestsText);
  const scoringMap = new Map(scoringResults.map((r) => [r.repo, r]));

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
      aiDim: sc.aiDim,
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

  // 6. 个性化：加载画像 → 应用反馈 → 排序 → 保存画像
  const fallbackProfile: UserProfile = {
    interests: {
      ai: config.interests.ai,
      fun: config.interests.fun,
      practical: config.interests.practical,
    },
    aiInterestsText: config.interests.aiInterestsText,
    followedBigs: config.bigbros,
  };
  let profile = loadProfile(fallbackProfile);
  const feedback = loadFeedback();
  profile = applyFeedbackToProfile(profile, feedback, filtered);
  saveProfile(profile);
  console.log(
    `  [feed] profile updated: ai=${profile.interests.ai.toFixed(2)} fun=${profile.interests.fun.toFixed(2)} practical=${profile.interests.practical.toFixed(2)}`,
  );

  const ranked = rankCards(filtered, profile);

  // 7. 写 data/feed.json
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FEED_PATH, JSON.stringify(ranked, null, 2), "utf-8");
  console.log(`  [feed] saved ${ranked.length} cards to ${FEED_PATH}`);

  return ranked;
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
