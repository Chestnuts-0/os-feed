/**
 * feed job 独立入口（2026-09-05 拆 job 刀）：只跑「feed 生成 + LLM 评分」。
 *
 * 背景：原单 job 里 fetch+digest（Search 30req/min 墙）与 feed 万级评分（LLM 墙）
 * 挤同一个 timeout 预算，谁长尾谁拖死全家。拆分后：
 *   digest job（fetch+digest）把 trending 数据快照经 artifact 传过来 →
 *   本进程读快照 → generateFeed（合并/星轮转/评分/排序/落盘 feed.json）。
 * 好处：超时隔离（feed job 独享 360min）、失败重跑只重烧评分不重烧 Search、
 * commit 串行化（needs: digest）后 digest 与 feed 不再抢 push。
 *
 * 用法（CI）：pnpm feed:job（workflow feed job 内，前置下载 trending-snapshot artifact）
 * 本地单进程全管道仍走 pnpm start（不设 SPLIT_FEED），本入口也可独立补评：
 *   npx tsx src/feed-job.ts   （无快照时=空 trending，走零成本重算分类/动量+补评模式）
 */

import fs from "node:fs";
import "dotenv/config";
import { loadConfig } from "./config.ts";
import type { TrendingData } from "./trending.ts";
import { recordFleetHealth } from "./report.ts";

const SNAPSHOT_PATH = "data/trending-snapshot.json";

async function main(): Promise<void> {
  const now = new Date();
  console.log(`[${now.toISOString()}] feed job start（feed 生成 + LLM 评分，拆 job 模式）`);
  const config = loadConfig();

  let trendingData: TrendingData = { trendingRepos: [], searchRepos: [], trendingFetchSuccess: false };
  if (fs.existsSync(SNAPSHOT_PATH)) {
    try {
      trendingData = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, "utf-8")) as TrendingData;
      console.log(
        `[feed-job] 快照已载入：trending=${trendingData.trendingRepos.length}, search=${trendingData.searchRepos.length}, fetchSuccess=${trendingData.trendingFetchSuccess}`,
      );
    } catch (err) {
      console.error(`[feed-job] 快照解析失败，按空 trending 继续（${err}）`);
    }
  } else if (process.env["FEED_FETCH"] === "1") {
    // 滴灌模式（2026-09-06 少量多次）：无 digest job 的快照时自力更生轻抓一次
    // （搜索 89 主题+trending 页 ≈2-3 分钟），让 feed job 脱离 digest job 独立跑批
    console.log("[feed-job] FEED_FETCH=1 且无快照 → 自主轻抓取");
    const { fetchTrendingData } = await import("./trending.ts");
    trendingData = await fetchTrendingData(config.trendingTopics).catch(
      (): TrendingData => ({ trendingRepos: [], searchRepos: [], trendingFetchSuccess: false }),
    );
    console.log(
      `[feed-job] 自主抓取完成：trending=${trendingData.trendingRepos.length}, search=${trendingData.searchRepos.length}`,
    );
  } else {
    console.log(`[feed-job] ${SNAPSHOT_PATH} 不存在 → 空 trending（零成本重算分类/动量 + pending 补评模式）`);
  }

  const { generateFeed } = await import("./feed/index.ts");
  const cards = await generateFeed(config, trendingData);
  console.log(`[feed-job] generated ${cards.length} cards`);

  // 编队健康落盘（feed job 是评分主力，这份统计是编队调优的依据）
  recordFleetHealth("feed");

  console.log("[feed-job] Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
