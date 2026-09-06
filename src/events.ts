/**
 * 事件流观察员（P0 · 2026-09-06 栗子拍板「并行推进」）。
 *
 * 作用：跑批期间旁路轮询 GitHub 公共事件流（/events，2 页×100 条，60s 粒度），
 * 聚合 WatchEvent（星动）/CreateEvent（新库）→ 落盘 data/events-momentum.json。
 * 铁律：**纯观察，零算法介入**——P0 只攒数据，P1 是否入取材管道由数据说了算。
 *
 * 设计约束：
 * - 静默失败：观察员任何异常都不影响主流程（数据丢了下轮再攒）
 * - 预算制：budgetMs 内轮询，主流程结束时 stop() → ≤60s 内收尾落盘
 * - 限流不重试：403/429 直接跳过本窗口（观察员宁缺毋滥，不跟主流程抢配额）
 */

import fs from "node:fs";
import path from "node:path";
import { nextApiToken } from "./github-tokens.ts";

interface EventItem {
  type?: string;
  repo?: { name?: string };
  created_at?: string;
}

export interface EventsMomentum {
  windowStart: string;
  windowEnd: string;
  polls: number;
  eventsSeen: number;
  watchEvents: number;
  createEvents: number;
  /** 星动次数 top 50（P1 候选准入的原始依据） */
  topWatched: Array<{ repo: string; stars: number }>;
  /** 本窗口新建的仓库（P1「零星新库」发现能力的原始依据） */
  newRepos: string[];
}

/** 纯函数聚合：WatchEvent 按 repo 计数、CreateEvent 收集、总事件数 */
export function aggregateEvents(items: EventItem[]): {
  watch: Map<string, number>;
  created: string[];
  seen: number;
} {
  const watch = new Map<string, number>();
  const created: string[] = [];
  let seen = 0;
  for (const it of items) {
    const repo = it.repo?.name;
    if (!repo) continue;
    seen++;
    if (it.type === "WatchEvent") watch.set(repo, (watch.get(repo) ?? 0) + 1);
    else if (it.type === "CreateEvent") created.push(repo);
  }
  return { watch, created, seen };
}

/**
 * 启动事件流观察员（不阻塞调用方）。
 * @param budgetMs 总观察预算（毫秒），到点自动收尾
 * @returns done（收尾落盘完成后 resolve）与 stop（主流程结束时调用，≤60s 内收尾）
 */
export function startEventsObserver(
  budgetMs: number,
  log: Pick<Console, "log" | "error"> = console,
  outPath = "data/events-momentum.json",
): { done: Promise<void>; stop: () => void } {
  let stopped = false;
  const start = Date.now();
  const items: EventItem[] = [];
  let polls = 0;

  const done = (async () => {
    try {
      while (!stopped && Date.now() - start < budgetMs) {
        for (const page of [1, 2]) {
          const token = nextApiToken();
          const headers: Record<string, string> = {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          };
          if (token) headers["Authorization"] = `Bearer ${token}`;
          try {
            const res = await fetch(`https://api.github.com/events?per_page=100&page=${page}`, { headers });
            if (res.ok) {
              items.push(...((await res.json()) as EventItem[]));
              polls++;
            } else if (res.status === 403 || res.status === 429) {
              log.log(`[events-observer] rate limited, skip this cycle`);
              break; // 本周期放弃，不重试不抢配额
            }
          } catch (e) {
            log.error(`[events-observer] poll failed: ${e}`);
          }
        }
        const remain = budgetMs - (Date.now() - start);
        if (stopped || remain <= 0) break;
        // 分片睡眠：stop() 需在 500ms 粒度内被感知（主流程收尾不等整段间隔）
        let waited = 0;
        const need = Math.min(60_000, remain);
        while (waited < need && !stopped) {
          await new Promise((r) => setTimeout(r, Math.min(500, need - waited)));
          waited += 500;
        }
      }
    } catch (e) {
      log.error(`[events-observer] unexpected: ${e}`);
    }
    const { watch, created, seen } = aggregateEvents(items);
    const top = [...watch.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 50)
      .map(([repo, stars]) => ({ repo, stars }));
    const out: EventsMomentum = {
      windowStart: new Date(start).toISOString(),
      windowEnd: new Date().toISOString(),
      polls,
      eventsSeen: seen,
      watchEvents: [...watch.values()].reduce((a, b) => a + b, 0),
      createEvents: created.length,
      topWatched: top,
      newRepos: [...new Set(created)].slice(0, 100),
    };
    try {
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, JSON.stringify(out, null, 2), "utf-8");
      log.log(
        `[events-observer] ${polls} polls / ${seen} events / ${out.watchEvents} stars / ${out.createEvents} new repos → ${outPath}`,
      );
    } catch (e) {
      log.error(`[events-observer] write failed: ${e}`);
    }
  })();

  return { done, stop: () => (stopped = true) };
}
