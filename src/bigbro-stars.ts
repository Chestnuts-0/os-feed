/**
 * 关注大牛 star 动态采集。
 *
 * 调 GitHub Starred API（GET /users/{name}/starred?per_page=100&sort=created）
 * 拉每个大牛的完整 star 列表（响应是完整 repo 对象，自带描述/star 数/语言/
 * topics/pushed_at，免单独 fetch repo detail），合并成"哪些大牛 star 了哪些 repo"。
 * 多个大牛 star 同一 repo 会合并成一条，bigbros 数组记录全部背书人。
 *
 * 名单来源：GitHub follow 列表 ∪ config bigbros（去重）——在 GitHub 上关注大牛，
 * TA star 的项目次日随 digest 自动进入关注频道。
 *
 * Rate limit：GitHub 认证 5000 req/hr。每个大牛一次请求，10 人 = 10 请求可忽略。
 */

interface StarredRepo {
  full_name: string;
  stargazers_count: number;
  description: string | null;
  language: string | null;
  topics: string[];
  pushed_at: string;
}

export interface BigbroStar {
  /** owner/repo */
  repo: string;
  /** star 了该项目的大牛列表 */
  bigbros: string[];
  /** 最近一次 star 的 ISO 时间（Starred API 不带 star 时间，用 repo 的 pushed_at 近似） */
  ts: string;
  /** 项目描述（Starred API 自带，merge 时免二次 fetch 详情） */
  desc?: string;
  /** star 数 */
  stars?: number;
  /** 主语言 */
  language?: string;
  /** topics */
  topics?: string[];
}

function githubHeaders(): Record<string, string> {
  const token = process.env["GITHUB_TOKEN"] ?? "";
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

/**
 * 合并大牛名单：GitHub follow 列表 ∪ config bigbros（去重）。
 * followingUser 未配置或抓取失败（网络/限流）→ 降级只用 config 名单，主流程不挂。
 * @param configBigbros config.yml / 环境变量 BIGBROS 解析后的大牛名单
 */
export async function fetchFollowingUsers(configBigbros: string[]): Promise<string[]> {
  const { loadConfig } = await import("./config.ts");
  const followingUser = loadConfig().followingUser;

  if (!followingUser) {
    console.log(
      `  [bigbro] no following_user configured, using config bigbros only (${configBigbros.length} users)`,
    );
    return [...new Set(configBigbros)];
  }

  try {
    const url = `https://api.github.com/users/${encodeURIComponent(followingUser)}/following?per_page=100`;
    const resp = await fetch(url, { headers: githubHeaders() });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const users = (await resp.json()) as { login?: string }[];
    const logins = users.map((u) => u.login).filter((l): l is string => Boolean(l));
    const merged = [...new Set([...logins, ...configBigbros])];
    console.log(
      `  [bigbro] following list (${followingUser}): ${logins.length} followed + ${configBigbros.length} config = ${merged.length} users`,
    );
    return merged;
  } catch (err) {
    console.error(`  [bigbro] fetch following list failed: ${err} — fallback to config bigbros only`);
    return [...new Set(configBigbros)];
  }
}

/**
 * 采集大牛 star 动态。
 * @param users 大牛 GitHub 用户名列表（fetchFollowingUsers 合并后的名单）
 */
export async function fetchBigbroStars(users: string[]): Promise<BigbroStar[]> {
  if (users.length === 0) {
    console.log("  [bigbro] No users configured, skipping");
    return [];
  }

  // repo -> { bigbros: Set, ts: pushed_at, 自带详情字段 }
  const map = new Map<
    string,
    { bigbros: Set<string>; ts: string; desc?: string; stars?: number; language?: string; topics?: string[] }
  >();

  await Promise.all(
    users.map(async (user) => {
      try {
        const url = `https://api.github.com/users/${encodeURIComponent(user)}/starred?per_page=100&sort=created`;
        const resp = await fetch(url, { headers: githubHeaders() });
        if (!resp.ok) {
          // 单大牛失败跳过（限流/账号不存在等），每日重抓天然重试
          console.error(`  [bigbro/${user}] HTTP ${resp.status} — skipped (daily rerun retries naturally)`);
          return;
        }
        const repos = (await resp.json()) as StarredRepo[];
        let added = 0;
        for (const r of repos) {
          if (!r.full_name) continue;
          const existing = map.get(r.full_name);
          if (existing) {
            existing.bigbros.add(user);
          } else {
            map.set(r.full_name, {
              bigbros: new Set([user]),
              ts: r.pushed_at ?? "",
              desc: r.description ?? undefined,
              stars: r.stargazers_count,
              language: r.language ?? undefined,
              topics: r.topics ?? [],
            });
          }
          added++;
        }
        console.log(`  [bigbro/${user}] ${added} starred repos`);
      } catch (err) {
        console.error(`  [bigbro/${user}] fetch failed: ${err} — skipped (daily rerun retries naturally)`);
      }
    }),
  );

  const result: BigbroStar[] = [...map.entries()].map(([repo, v]) => ({
    repo,
    bigbros: [...v.bigbros],
    ts: v.ts,
    ...(v.desc !== undefined ? { desc: v.desc } : {}),
    ...(v.stars !== undefined ? { stars: v.stars } : {}),
    ...(v.language !== undefined ? { language: v.language } : {}),
    ...(v.topics !== undefined ? { topics: v.topics } : {}),
  }));
  console.log(`  [bigbro] aggregated ${result.length} unique repos from ${users.length} users`);
  return result;
}
