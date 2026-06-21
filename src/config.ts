/**
 * Loads and validates agents-radar configuration from config.yml.
 * Falls back to built-in defaults if the file is missing or a section is absent.
 */

import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import type { RepoConfig } from "./github.ts";

// ---------------------------------------------------------------------------
// Schema types
// ---------------------------------------------------------------------------

interface RawRepoEntry {
  id: string;
  repo: string;
  name: string;
  paginated?: boolean;
}

interface RawConfig {
  cli_repos?: RawRepoEntry[];
  skills_repo?: string;
  openclaw?: RawRepoEntry;
  openclaw_peers?: RawRepoEntry[];
  bigbros?: string[];
  trending_topics?: { q: string; label: string }[];
  star_threshold?: number;
  interests?: { ai?: number; fun?: number; practical?: number; ai_interests_text?: string };
}

export interface TrendingTopic {
  q: string;
  label: string;
}

export interface InterestProfile {
  ai: number;
  fun: number;
  practical: number;
  aiInterestsText: string;
}

export interface RadarConfig {
  cliRepos: RepoConfig[];
  skillsRepo: string;
  openclaw: RepoConfig;
  openclawPeers: RepoConfig[];
  bigbros: string[];
  trendingTopics: TrendingTopic[];
  starThreshold: number;
  interests: InterestProfile;
}

// ---------------------------------------------------------------------------
// Defaults (mirrors the original hard-coded values)
// ---------------------------------------------------------------------------

const DEFAULT_CLI_REPOS: RepoConfig[] = [
  { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" },
  { id: "codex", repo: "openai/codex", name: "OpenAI Codex" },
  { id: "gemini-cli", repo: "google-gemini/gemini-cli", name: "Gemini CLI" },
  { id: "copilot-cli", repo: "github/copilot-cli", name: "GitHub Copilot CLI" },
  { id: "kimi-cli", repo: "MoonshotAI/kimi-cli", name: "Kimi Code CLI" },
  { id: "opencode", repo: "anomalyco/opencode", name: "OpenCode" },
  { id: "qwen-code", repo: "QwenLM/qwen-code", name: "Qwen Code" },
];

const DEFAULT_SKILLS_REPO = "anthropics/skills";

const DEFAULT_OPENCLAW: RepoConfig = {
  id: "openclaw",
  repo: "openclaw/openclaw",
  name: "OpenClaw",
  paginated: true,
};

const DEFAULT_OPENCLAW_PEERS: RepoConfig[] = [
  { id: "nanobot", repo: "HKUDS/nanobot", name: "NanoBot", paginated: true },
  { id: "hermes-agent", repo: "nousresearch/hermes-agent", name: "Hermes Agent" },
  { id: "picoclaw", repo: "sipeed/picoclaw", name: "PicoClaw", paginated: true },
  { id: "nanoclaw", repo: "qwibitai/nanoclaw", name: "NanoClaw" },
  { id: "nullclaw", repo: "nullclaw/nullclaw", name: "NullClaw" },
  { id: "ironclaw", repo: "nearai/ironclaw", name: "IronClaw" },
  { id: "lobsterai", repo: "netease-youdao/LobsterAI", name: "LobsterAI" },
  { id: "tinyclaw", repo: "TinyAGI/tinyclaw", name: "TinyClaw" },
  { id: "copaw", repo: "agentscope-ai/CoPaw", name: "CoPaw" },
  { id: "moltis", repo: "moltis-org/moltis", name: "Moltis" },
  { id: "zeptoclaw", repo: "qhkm/zeptoclaw", name: "ZeptoClaw" },
  { id: "easyclaw", repo: "gaoyangz77/easyclaw", name: "EasyClaw" },
  { id: "zeroclaw", repo: "zeroclaw-labs/zeroclaw", name: "ZeroClaw" },
];

// ---------------------------------------------------------------------------
// Defaults — 开源版抖音信息流扩展
// ---------------------------------------------------------------------------

const DEFAULT_TRENDING_TOPICS: TrendingTopic[] = [
  { q: "topic:llm", label: "llm" },
  { q: "topic:ai-agent", label: "ai-agent" },
  { q: "topic:rag", label: "rag" },
  { q: "topic:vector-database", label: "vector-db" },
  { q: "topic:large-language-model", label: "llm-model" },
  { q: "topic:machine-learning", label: "ml" },
];

const DEFAULT_BIGBROS: string[] = [];

const DEFAULT_STAR_THRESHOLD = 100;

const DEFAULT_INTERESTS: InterestProfile = {
  ai: 0.5,
  fun: 0.3,
  practical: 0.2,
  aiInterestsText: "我想看 AI 相关、好玩的、能直接拿来用的开源工具和软件",
};

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

export function toRepoConfig(e: RawRepoEntry): RepoConfig {
  return { id: e.id, repo: e.repo, name: e.name, ...(e.paginated ? { paginated: true } : {}) };
}

export function loadConfig(configPath = "config.yml"): RadarConfig {
  const resolved = path.resolve(configPath);

  if (!fs.existsSync(resolved)) {
    console.log(`[config] ${configPath} not found — using built-in defaults.`);
    return {
      cliRepos: DEFAULT_CLI_REPOS,
      skillsRepo: DEFAULT_SKILLS_REPO,
      openclaw: DEFAULT_OPENCLAW,
      openclawPeers: DEFAULT_OPENCLAW_PEERS,
      bigbros: DEFAULT_BIGBROS,
      trendingTopics: DEFAULT_TRENDING_TOPICS,
      starThreshold: DEFAULT_STAR_THRESHOLD,
      interests: DEFAULT_INTERESTS,
    };
  }

  const raw = yaml.load(fs.readFileSync(resolved, "utf-8")) as RawConfig;

  const cliRepos =
    Array.isArray(raw?.cli_repos) && raw.cli_repos.length > 0
      ? raw.cli_repos.map(toRepoConfig)
      : DEFAULT_CLI_REPOS;

  const skillsRepo =
    typeof raw?.skills_repo === "string" && raw.skills_repo.trim()
      ? raw.skills_repo.trim()
      : DEFAULT_SKILLS_REPO;

  const openclaw = raw?.openclaw?.id && raw.openclaw.repo ? toRepoConfig(raw.openclaw) : DEFAULT_OPENCLAW;

  const openclawPeers =
    Array.isArray(raw?.openclaw_peers) && raw.openclaw_peers.length > 0
      ? raw.openclaw_peers.map(toRepoConfig)
      : DEFAULT_OPENCLAW_PEERS;

  const trendingTopics =
    Array.isArray(raw?.trending_topics) && raw.trending_topics.length > 0
      ? raw.trending_topics.map((t) => ({ q: t.q, label: t.label }))
      : DEFAULT_TRENDING_TOPICS;

  const configBigbros = Array.isArray(raw?.bigbros)
    ? raw.bigbros.filter((b): b is string => typeof b === "string" && b.trim() !== "")
    : DEFAULT_BIGBROS;

  // 环境变量 BIGBROS（逗号分隔）优先，便于在 Actions Secrets 里覆盖
  const envBigbros =
    process.env["BIGBROS"]
      ?.split(",")
      .map((s) => s.trim())
      .filter(Boolean) ?? [];
  const bigbros = envBigbros.length > 0 ? envBigbros : configBigbros;

  const starThreshold = typeof raw?.star_threshold === "number" ? raw.star_threshold : DEFAULT_STAR_THRESHOLD;

  const interests: InterestProfile = {
    ai: raw?.interests?.ai ?? DEFAULT_INTERESTS.ai,
    fun: raw?.interests?.fun ?? DEFAULT_INTERESTS.fun,
    practical: raw?.interests?.practical ?? DEFAULT_INTERESTS.practical,
    aiInterestsText: raw?.interests?.ai_interests_text ?? DEFAULT_INTERESTS.aiInterestsText,
  };

  console.log(
    `[config] Loaded from ${configPath}: ` +
      `${cliRepos.length} CLI repos, ${openclawPeers.length} OpenClaw peers, ` +
      `${trendingTopics.length} trending topics, ${bigbros.length} bigbros`,
  );

  return { cliRepos, skillsRepo, openclaw, openclawPeers, bigbros, trendingTopics, starThreshold, interests };
}
