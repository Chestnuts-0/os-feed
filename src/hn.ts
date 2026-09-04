/**
 * Hacker News AI stories fetched via the Algolia HN Search API.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface HnStory {
  id: string;
  title: string;
  url: string; // external URL, or HN discussion link if no external URL
  hnUrl: string; // always the HN discussion link
  points: number;
  comments: number;
  author: string;
  createdAt: string;
}

export interface HnData {
  stories: HnStory[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const HN_TOP_STORIES = 30;

/** Queries run in parallel; results are deduped by story ID. */
const QUERIES = ["AI", "LLM", "Claude", "OpenAI", "Anthropic", "machine learning"];

// ---------------------------------------------------------------------------
// Algolia API types
// ---------------------------------------------------------------------------

interface AlgoliaHit {
  objectID: string;
  title: string;
  url?: string;
  points: number;
  num_comments: number;
  author: string;
  created_at: string;
}

interface AlgoliaResponse {
  hits: AlgoliaHit[];
}

import type { HnMention } from "./feed/types.ts";

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

export async function fetchHnData(): Promise<HnData> {
  const since = Math.floor((Date.now() - 24 * 60 * 60 * 1000) / 1000);
  const seen = new Map<string, HnStory>();

  try {
    await Promise.all(
      QUERIES.map(async (q) => {
        try {
          const url =
            `https://hn.algolia.com/api/v1/search_by_date` +
            `?tags=story` +
            `&query=${encodeURIComponent(q)}` +
            `&numericFilters=created_at_i>${since}` +
            `&hitsPerPage=30`;
          const resp = await fetch(url, {
            headers: { "User-Agent": "GitTok/1.0" },
          });
          if (!resp.ok) {
            console.error(`  [hn] "${q}": HTTP ${resp.status}`);
            return;
          }
          const data = (await resp.json()) as AlgoliaResponse;
          for (const hit of data.hits ?? []) {
            if (!seen.has(hit.objectID)) {
              const hnUrl = `https://news.ycombinator.com/item?id=${hit.objectID}`;
              seen.set(hit.objectID, {
                id: hit.objectID,
                title: hit.title,
                url: hit.url ?? hnUrl,
                hnUrl,
                points: hit.points ?? 0,
                comments: hit.num_comments ?? 0,
                author: hit.author,
                createdAt: hit.created_at,
              });
            }
          }
        } catch (err) {
          console.error(`  [hn] "${q}": ${err}`);
        }
      }),
    );

    const stories = [...seen.values()].sort((a, b) => b.points - a.points).slice(0, HN_TOP_STORIES);

    console.log(`  [hn] ${stories.length} stories (from ${seen.size} unique)`);
    return { stories, fetchSuccess: stories.length > 0 };
  } catch (err) {
    console.error(`  [hn] fetch failed: ${err}`);
    return { stories: [], fetchSuccess: false };
  }
}

// ---------------------------------------------------------------------------
// GitHub 项目提及解析（热点提速刀 2026-09-04）
// ---------------------------------------------------------------------------

/** github.com/owner/repo 外链 pattern（/tree|/blob 等子路径也算提及，.git 后缀剥掉） */
const GITHUB_URL_PATTERN = /^https?:\/\/(?:www\.)?github\.com\/([\w.-]+)\/([\w.-]+?)(?:\.git)?(?:[/?#].*)?$/i;

/**
 * 从 HN stories 外链解析被提及的 GitHub 项目：repo → 提及信息。
 * 同一 repo 多条 story 只保留 points 最高的一条；外链是 HN 站内链接（无外部 url）的跳过。
 */
export function extractGithubMentions(stories: HnStory[]): Map<string, HnMention> {
  const out = new Map<string, HnMention>();
  for (const s of stories) {
    const m = s.url.match(GITHUB_URL_PATTERN);
    if (!m) continue;
    const repo = `${m[1]}/${m[2]}`;
    const prev = out.get(repo);
    if (!prev || s.points > prev.points) {
      out.set(repo, { points: s.points, comments: s.comments, title: s.title, hnUrl: s.hnUrl });
    }
  }
  return out;
}
