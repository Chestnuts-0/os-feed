/**
 * 关注大牛 star 动态采集。
 *
 * 调 GitHub Events API（GET /users/{name}/events/public）拉每个大牛的公开活动，
 * 筛选 WatchEvent（即 star），合并成"哪些大牛 star 了哪些 repo"。
 * 多个大牛 star 同一 repo 会合并成一条，bigbros 数组记录全部背书人。
 *
 * Rate limit：GitHub 认证 5000 req/hr。每个大牛一次调用，关注 5-50 人都够。
 */

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
}

export interface BigbroStar {
  /** owner/repo */
  repo: string;
  /** star 了该项目的大牛列表 */
  bigbros: string[];
  /** 最近一次 star 的 ISO 时间 */
  ts: string;
}

/**
 * 采集大牛 star 动态。
 * @param bigbros 关注的 GitHub 用户名列表
 */
export async function fetchBigbroStars(bigbros: string[]): Promise<BigbroStar[]> {
  if (bigbros.length === 0) {
    console.log("  [bigbro] No bigbros configured, skipping");
    return [];
  }

  const token = process.env["GITHUB_TOKEN"] ?? "";
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  // repo -> { bigbros: Set, ts: 最新 star 时间 }
  const map = new Map<string, { bigbros: Set<string>; ts: string }>();

  await Promise.all(
    bigbros.map(async (bigbro) => {
      try {
        const url = `https://api.github.com/users/${encodeURIComponent(bigbro)}/events/public?per_page=100`;
        const resp = await fetch(url, { headers });
        if (!resp.ok) {
          console.error(`  [bigbro/${bigbro}] HTTP ${resp.status}`);
          return;
        }
        const events = (await resp.json()) as GitHubEvent[];
        let added = 0;
        for (const ev of events) {
          if (ev.type !== "WatchEvent" || !ev.repo?.name) continue;
          const repo = ev.repo.name;
          const existing = map.get(repo);
          if (existing) {
            existing.bigbros.add(bigbro);
            if (ev.created_at > existing.ts) existing.ts = ev.created_at;
          } else {
            map.set(repo, { bigbros: new Set([bigbro]), ts: ev.created_at });
          }
          added++;
        }
        console.log(`  [bigbro/${bigbro}] ${added} star events`);
      } catch (err) {
        console.error(`  [bigbro/${bigbro}] fetch failed: ${err}`);
      }
    }),
  );

  const result: BigbroStar[] = [...map.entries()].map(([repo, v]) => ({
    repo,
    bigbros: [...v.bigbros],
    ts: v.ts,
  }));
  console.log(`  [bigbro] aggregated ${result.length} unique repos from ${bigbros.length} bigbros`);
  return result;
}
