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
import type { FeedCard, FeedSource, RepoForScoring, ScoringResult, UserProfile } from "./types.ts";

const DATA_DIR = "data";
const FEED_PATH = path.join(DATA_DIR, "feed.json");
const BATCH_SIZE = 20;

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
  for (let i = 0; i < repos.length; i += BATCH_SIZE) {
    const batch = repos.slice(i, i + BATCH_SIZE);
    if (batch.length === 0) continue;
    try {
      const prompt = buildFeedScoringPrompt(batch, aiInterestsText);
      const raw = await callLlm(prompt, 4096);
      const parsed = parseScoringResult(raw);
      results.push(...parsed);
      console.log(
        `  [feed/scoring] batch ${Math.floor(i / BATCH_SIZE) + 1}: ${parsed.length}/${batch.length} scored`,
      );
    } catch (err) {
      console.error(`  [feed/scoring] batch ${Math.floor(i / BATCH_SIZE) + 1} failed: ${err}`);
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

  // 3. LLM 批量评分
  const allRepos: RepoForScoring[] = [...repoMap.values()].map((m) => ({
    repo: m.repo,
    description: m.desc,
    stars: m.stars,
    language: m.language,
    topics: m.topics,
  }));
  console.log(`[feed] scoring ${allRepos.length} repos via LLM...`);
  const scoringResults = await scoreBatched(allRepos, config.interests.aiInterestsText);
  const scoringMap = new Map(scoringResults.map((r) => [r.repo, r]));

  // 4. 组装 FeedCard
  const cards: FeedCard[] = [];
  for (const m of repoMap.values()) {
    const sc = scoringMap.get(m.repo);
    const [owner = "", ...nameParts] = m.repo.split("/");
    const name = nameParts.join("/") || m.repo;
    cards.push({
      repo: m.repo,
      owner,
      name,
      desc: m.desc,
      reasonCn: sc?.reasonCn ?? "",
      stars: m.stars,
      starGrowth: m.starGrowth,
      language: m.language,
      topics: m.topics,
      aiDim: sc?.aiDim ?? "其他",
      aiScore: sc?.aiScore ?? 0.5,
      source: m.source,
      bigbros: m.bigbros,
      url: `https://github.com/${m.repo}`,
      ts: m.ts,
      score: 0,
    });
  }

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
