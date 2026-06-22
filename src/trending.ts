/**
 * GitHub trending and AI topic search data fetching.
 * Multi-language trending + batched topic search for maximum coverage.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TrendingRepo {
  fullName: string;
  description: string;
  language: string;
  todayStars: number;
  totalStars: number;
  forks: number;
  url: string;
}

export interface SearchRepo {
  fullName: string;
  description: string | null;
  language: string | null;
  stargazersCount: number;
  pushedAt: string;
  url: string;
  searchQuery: string;
}

export interface TrendingData {
  trendingRepos: TrendingRepo[];
  searchRepos: SearchRepo[];
  trendingFetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SEARCH_QUERIES = [
  { q: "topic:llm", label: "llm" },
  { q: "topic:ai-agent", label: "ai-agent" },
  { q: "topic:rag", label: "rag" },
  { q: "topic:vector-database", label: "vector-db" },
  { q: "topic:large-language-model", label: "llm-model" },
  { q: "topic:machine-learning", label: "ml" },
];

/** Fetch trending for multiple languages to maximize coverage */
const TRENDING_LANGUAGES = ["", "python", "typescript", "javascript", "rust", "go"];

// ---------------------------------------------------------------------------
// Trending HTML parsing
// ---------------------------------------------------------------------------

function parseTrendingHtml(html: string): TrendingRepo[] {
  const repos: TrendingRepo[] = [];
  const articlePattern =
    /<article[^>]*class="[^"]*Box-row[^"]*"[\s\S]*?(?=<article[^>]*class="[^"]*Box-row[^"]*"|$)/g;
  const blocks = html.match(articlePattern) ?? [];

  for (const block of blocks) {
    try {
      const nameMatch = block.match(/<h2[^>]*>[\s\S]*?<a[^>]+href="\/([^/"]+\/[^/"]+)"/);
      if (!nameMatch?.[1]) continue;
      const fullName = nameMatch[1].trim();

      const descMatch = block.match(/<p[^>]*class="[^"]*col-9[^"]*"[^>]*>([\s\S]*?)<\/p>/);
      const description = descMatch?.[1] ? descMatch[1].replace(/<[^>]+>/g, "").trim() : "";

      const langMatch = block.match(/<span[^>]+itemprop="programmingLanguage"[^>]*>([\s\S]*?)<\/span>/);
      const language = langMatch?.[1] ? langMatch[1].replace(/<[^>]+>/g, "").trim() : "";

      const todayMatch = block.match(/([\d,]+)\s+stars?\s+today/i);
      const todayStars = todayMatch?.[1] ? parseInt(todayMatch[1].replace(/,/g, ""), 10) : 0;

      const totalMatch = block.match(/href="\/[^"]+\/stargazers"[^>]*>\s*<[^>]+>\s*([\d,]+)/);
      const totalStars = totalMatch?.[1] ? parseInt(totalMatch[1].replace(/,/g, ""), 10) : 0;

      const forkMatch = block.match(/href="\/[^"]+\/forks"[^>]*>\s*<[^>]+>\s*([\d,]+)/);
      const forks = forkMatch?.[1] ? parseInt(forkMatch[1].replace(/,/g, ""), 10) : 0;

      repos.push({
        fullName,
        description,
        language,
        todayStars,
        totalStars,
        forks,
        url: `https://github.com/${fullName}`,
      });
    } catch {
      // single block parse failure is non-fatal
    }
  }

  return repos;
}

// ---------------------------------------------------------------------------
// Multi-language GitHub Trending fetch
// ---------------------------------------------------------------------------

async function fetchGitHubTrending(): Promise<{ repos: TrendingRepo[]; success: boolean }> {
  const seen = new Set<string>();
  const allRepos: TrendingRepo[] = [];
  let anySuccess = false;

  await Promise.all(
    TRENDING_LANGUAGES.map(async (lang) => {
      try {
        const url = lang
          ? `https://github.com/trending/${lang}?since=daily`
          : "https://github.com/trending?since=daily";
        const resp = await fetch(url, {
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; agents-radar/1.0)",
            Accept: "text/html",
          },
        });
        if (!resp.ok) {
          console.error(`  [trending/${lang || "default"}] HTTP ${resp.status}`);
          return;
        }
        const html = await resp.text();
        const repos = parseTrendingHtml(html);
        let added = 0;
        for (const repo of repos) {
          if (!seen.has(repo.fullName)) {
            seen.add(repo.fullName);
            allRepos.push(repo);
            added++;
          }
        }
        console.log(`  [trending/${lang || "default"}] ${added} repos`);
        anySuccess = true;
      } catch (err) {
        console.error(`  [trending/${lang || "default"}] ${err}`);
      }
    }),
  );

  if (allRepos.length === 0) {
    console.error("  [trending] Parsed 0 repos — HTML structure may have changed");
    return { repos: [], success: false };
  }

  console.log(
    `  [trending] Total ${allRepos.length} unique trending repos from ${TRENDING_LANGUAGES.length} languages`,
  );
  return { repos: allRepos, success: anySuccess };
}

// ---------------------------------------------------------------------------
// GitHub Search API (batched to avoid rate limits)
// ---------------------------------------------------------------------------

interface SearchApiItem {
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  html_url: string;
}

interface SearchApiResponse {
  items: SearchApiItem[];
}

async function searchAiRepos(
  sinceDate: string,
  topics: { q: string; label: string }[] = SEARCH_QUERIES,
): Promise<SearchRepo[]> {
  const token = process.env["GITHUB_TOKEN"] ?? "";
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const seen = new Set<string>();
  const all: SearchRepo[] = [];

  // Process in batches of 10 to respect GitHub Search rate limits (30/min)
  const SEARCH_BATCH = 10;
  for (let i = 0; i < topics.length; i += SEARCH_BATCH) {
    const batch = topics.slice(i, i + SEARCH_BATCH);
    await Promise.all(
      batch.map(async ({ q, label }) => {
        try {
          const query = `${q}+pushed:>${sinceDate}&sort=stars&order=desc`;
          const url = `https://api.github.com/search/repositories?q=${query}&per_page=100`;
          const resp = await fetch(url, { headers });
          if (!resp.ok) {
            console.error(`  [trending/search] "${label}": HTTP ${resp.status}`);
            return;
          }
          const data = (await resp.json()) as SearchApiResponse;
          let added = 0;
          for (const item of data.items ?? []) {
            if (!seen.has(item.full_name)) {
              seen.add(item.full_name);
              all.push({
                fullName: item.full_name,
                description: item.description,
                language: item.language,
                stargazersCount: item.stargazers_count,
                pushedAt: item.pushed_at,
                url: item.html_url,
                searchQuery: label,
              });
              added++;
            }
          }
          console.log(`  [trending/search] "${label}": ${added} new repos`);
        } catch (err) {
          console.error(`  [trending/search] "${label}": ${err}`);
        }
      }),
    );
    // Delay between batches to avoid rate limiting
    if (i + SEARCH_BATCH < topics.length) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  return all;
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export async function fetchTrendingData(topics?: { q: string; label: string }[]): Promise<TrendingData> {
  // 30-day window for broader coverage
  const sinceDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const [{ repos: trendingRepos, success }, searchRepos] = await Promise.all([
    fetchGitHubTrending(),
    searchAiRepos(sinceDate, topics),
  ]);

  return { trendingRepos, searchRepos, trendingFetchSuccess: success };
}
