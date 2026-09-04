/**
 * 库内 star 盖章抓取器（2026-09-01 关注解耦刀重写）。
 *
 * 旧语义（抓大牛/follow 名单的 star 灌新卡进 feed）已退役。现在只做「库内盖章」：
 * 对库里已有的 GitHub **User** owner，拉 TA 最近一页 star（per_page=100&sort=created），
 * 与库内 repo 集合求交，给已有卡的 bigbros 加背书人。不新建卡、不跑 LLM。
 * 前端关注频道（owner 匹配 ∪ bigbros 匹配）由此获得「TA star 了库内哪个项目」的数据。
 *
 * 配额：GitHub 认证 5000 req/h。每个 User 候选 2 请求（1 查 type + 1 查 starred）；
 * 开工先查 GET /rate_limit（不消耗配额）算本轮预算，配额不足即停，剩余候选交还下轮——
 * 增量靠状态文件 data/stamped-owners.json（随 digest 入仓，generateFeed 读写）。
 */

/** /users/{login} 的 type 里值得盖章的只有真用户 */
const STAMPABLE_TYPES = new Set(["User"]);

export type StampUserStatus = "stamped" | "org" | "not-found";

export interface StampOutcome {
  /** repo -> 本轮新盖章的背书人列表（只含库内已有 repo） */
  stamps: Map<string, string[]>;
  /** 本轮成功盖章的 User */
  stampedUsers: string[];
  /** 跳过的 Organization/Bot（记状态防重查） */
  skippedUsers: string[];
  /** 404 的账号（已注销/不存在，记状态防每日重查） */
  notFoundUsers: string[];
  /** 本轮没轮到（预算尽）或临时失败的候选（下轮重试） */
  pendingUsers: string[];
}

export interface StampOptions {
  /** 并发数（默认 6，方案 §9.2：4-8） */
  concurrency?: number;
  /** 单轮最多处理候选数（默认 400） */
  maxUsers?: number;
  /** 配额保留水位：剩余低于此值停盖（留给搜索/刷新等主流程，默认 300） */
  reserveQuota?: number;
}

/** 限流（403/429）——stampLibraryStars 捕获后立即停整轮 */
export class RateLimitedError extends Error {
  constructor(status: number) {
    super(`GitHub API rate limited (HTTP ${status})`);
    this.name = "RateLimitedError";
  }
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
 * 查账号类型。返回 type（"User"/"Organization"/"Bot"...）；
 * 404 返回 "MISSING"（账号已注销/不存在，记 not-found 防每日重查）；
 * 其余失败返回 null（临时错误，下轮重试）。
 */
export async function fetchUserType(login: string): Promise<string | null> {
  try {
    const url = `https://api.github.com/users/${encodeURIComponent(login)}`;
    const resp = await fetch(url, { headers: githubHeaders() });
    if (resp.status === 404) return "MISSING";
    if (!resp.ok) {
      if (resp.status === 403 || resp.status === 429) throw new RateLimitedError(resp.status);
      console.error(`  [stamp/type/${login}] HTTP ${resp.status}`);
      return null;
    }
    const d = (await resp.json()) as { type?: string };
    return d.type ?? null;
  } catch (err) {
    if (err instanceof RateLimitedError) throw err;
    console.error(`  [stamp/type/${login}] fetch failed: ${err}`);
    return null;
  }
}

/**
 * 拉某用户最近一页 star 的 repo 全名（Starred API，稳定按 star 时间倒序）。
 * 单用户失败抛错（403/429 抛 RateLimitedError），由上层决定跳过/停轮。
 */
export async function fetchUserStarredRepos(login: string): Promise<string[]> {
  const url = `https://api.github.com/users/${encodeURIComponent(login)}/starred?per_page=100&sort=created`;
  const resp = await fetch(url, { headers: githubHeaders() });
  if (!resp.ok) {
    if (resp.status === 403 || resp.status === 429) throw new RateLimitedError(resp.status);
    throw new Error(`HTTP ${resp.status}`);
  }
  const repos = (await resp.json()) as { full_name?: string }[];
  return repos.map((r) => r.full_name).filter((n): n is string => typeof n === "string" && n.includes("/"));
}

/**
 * 查核心配额剩余。GET /rate_limit 不消耗配额；查询失败返回 -1（上层按零预算处理）。
 */
export async function fetchCoreQuotaRemaining(): Promise<number> {
  try {
    const resp = await fetch("https://api.github.com/rate_limit", { headers: githubHeaders() });
    if (!resp.ok) return -1;
    const d = (await resp.json()) as { resources?: { core?: { remaining?: number } } };
    return d.resources?.core?.remaining ?? -1;
  } catch (err) {
    console.error(`  [stamp/quota] fetch failed: ${err}`);
    return -1;
  }
}

/**
 * 库内盖章主流程：候选 owner 逐个（type 检查 → 拉最近 star → 与库内求交）。
 * - 只产出库内已有 repo 的盖章（repoSet 之外的 star 直接忽略，永不建卡）
 * - Organization/Bot 跳过、404 记 not-found，都写状态文件防每日重查
 * - 预算 = min(maxUsers, (剩余配额 - reserveQuota) / 2)；预算尽或中途限流即停，
 *   没轮到的候选进 pendingUsers（不写状态，下轮重试）
 * - 单用户临时失败跳过主流程不挂
 */
export async function stampLibraryStars(
  candidates: string[],
  repoSet: ReadonlySet<string>,
  opts: StampOptions = {},
): Promise<StampOutcome> {
  const { concurrency = 6, maxUsers = 400, reserveQuota = 300 } = opts;
  const outcome: StampOutcome = {
    stamps: new Map(),
    stampedUsers: [],
    skippedUsers: [],
    notFoundUsers: [],
    pendingUsers: [],
  };
  if (candidates.length === 0) return outcome;

  const remaining = await fetchCoreQuotaRemaining();
  let budget = remaining >= 0 ? Math.min(maxUsers, Math.floor((remaining - reserveQuota) / 2)) : 0;
  console.log(
    `  [stamp] candidates ${candidates.length}, quota remaining ${remaining}, budget ${budget} users`,
  );
  if (budget <= 0) {
    outcome.pendingUsers = [...candidates];
    return outcome;
  }

  const queue = [...candidates];
  let stopped = false;

  const worker = async (): Promise<void> => {
    while (!stopped) {
      const login = queue.shift();
      if (login === undefined) return;
      if (budget <= 0) {
        outcome.pendingUsers.push(login);
        continue;
      }
      budget--;
      try {
        const type = await fetchUserType(login);
        if (type === null) {
          outcome.pendingUsers.push(login);
          continue;
        }
        if (type === "MISSING") {
          outcome.notFoundUsers.push(login);
          continue;
        }
        if (!STAMPABLE_TYPES.has(type)) {
          outcome.skippedUsers.push(login);
          continue;
        }
        const starred = await fetchUserStarredRepos(login);
        let hits = 0;
        for (const repo of starred) {
          if (!repoSet.has(repo)) continue; // 库外 star 忽略——盖章永不建卡
          hits++;
          const list = outcome.stamps.get(repo);
          if (list) {
            if (!list.includes(login)) list.push(login);
          } else {
            outcome.stamps.set(repo, [login]);
          }
        }
        outcome.stampedUsers.push(login);
        console.log(`  [stamp/${login}] ${hits}/${starred.length} starred repos in library`);
      } catch (err) {
        if (err instanceof RateLimitedError) {
          // 限流：立即停整轮，没跑的候选全部留待下轮
          console.error(`  [stamp] rate limited at ${login}, stopping for this round`);
          stopped = true;
          outcome.pendingUsers.push(login);
          break;
        }
        console.error(`  [stamp/${login}] failed: ${err} — skipped (next round retries)`);
        outcome.pendingUsers.push(login);
      }
    }
  };

  await Promise.all(Array.from({ length: Math.min(concurrency, queue.length) }, () => worker()));

  // 队列里没消费完的（预算尽/停轮后残留）全部 pending
  for (const rest of queue) outcome.pendingUsers.push(rest);
  console.log(
    `  [stamp] stamped ${outcome.stampedUsers.length}, skipped ${outcome.skippedUsers.length} org, ` +
      `${outcome.notFoundUsers.length} missing, ${outcome.pendingUsers.length} pending; ` +
      `${outcome.stamps.size} library repos received stamps`,
  );
  return outcome;
}
