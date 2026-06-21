/**
 * 每日精选推送 —— 从 data/feed.json 取 top N 卡片，
 * 格式化成飞书/Telegram 消息推送。
 *
 * 用法：tsx src/notify-feed.ts
 * 或在 package.json 中：pnpm notify:feed
 *
 * 环境变量：
 *   FEISHU_WEBHOOK_URLS — 飞书机器人 webhook（逗号分隔）
 *   TELEGRAM_BOT_TOKEN  — Telegram bot token
 *   TELEGRAM_CHAT_ID    — Telegram chat ID
 *   PAGES_URL           — GitHub Pages URL（用于消息中加链接）
 *   FEED_TOP_N          — 推送条数（默认 10）
 */

import fs from "node:fs";
import type { FeedCard } from "./feed/types.ts";

const FEED_PATH = "data/feed.json";
const DEFAULT_TOP_N = 10;

// ---------------------------------------------------------------------------
// 读取 feed.json
// ---------------------------------------------------------------------------

function loadFeed(): FeedCard[] {
  if (!fs.existsSync(FEED_PATH)) {
    console.log("[notify-feed] data/feed.json not found — skipping.");
    return [];
  }
  const data = JSON.parse(fs.readFileSync(FEED_PATH, "utf-8"));
  if (!Array.isArray(data)) {
    console.log("[notify-feed] feed.json is not an array — skipping.");
    return [];
  }
  return data as FeedCard[];
}

// ---------------------------------------------------------------------------
// 格式化
// ---------------------------------------------------------------------------

function formatStars(n: number): string {
  if (n >= 10000) return (n / 10000).toFixed(1) + "w";
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(n);
}

function sourceEmoji(src: string): string {
  switch (src) {
    case "trending":
      return "🔥";
    case "bigbro":
      return "👥";
    case "search":
      return "🔍";
    default:
      return "📦";
  }
}

function buildFeishuContent(cards: FeedCard[], pagesUrl: string): string {
  const date = new Date().toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const lines: string[] = [
    `📡 **开源信息流 · 每日精选 · ${date}**`,
    `共 ${cards.length} 个好项目，先看 top ${cards.length}：`,
    "",
  ];

  for (let i = 0; i < cards.length; i++) {
    const c = cards[i]!;
    const num = i + 1;
    const emoji = sourceEmoji(c.source);

    lines.push(`### ${num}. ${emoji} [${c.repo}](${c.url})`);

    if (c.reasonCn) {
      // 取推荐理由的前 150 字，避免消息过长
      const reason = c.reasonCn.length > 150 ? c.reasonCn.slice(0, 150) + "…" : c.reasonCn;
      lines.push(`> ${reason}`);
    }

    const meta: string[] = [`★ ${formatStars(c.stars)}`];
    if (c.starGrowth > 0) meta.push(`+${c.starGrowth} today`);
    if (c.language) meta.push(c.language);
    if (c.aiDim) meta.push(c.aiDim);
    lines.push(meta.join(" · "));

    if (c.bigbros.length > 0) {
      lines.push(`👥 ${c.bigbros.slice(0, 3).join("、")} star 了`);
    }

    lines.push("");
  }

  lines.push(`---`);
  lines.push(`[🌐 去刷更多](${pagesUrl})  ·  刷到好项目，点赞让推荐更准`);

  return lines.join("\n");
}

function buildTelegramText(cards: FeedCard[], pagesUrl: string): string {
  const date = new Date().toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function esc(s: string): string {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  const lines: string[] = [
    `📡 <b>开源信息流 · 每日精选 · ${esc(date)}</b>`,
    `共 ${cards.length} 个好项目，先看 top ${cards.length}：`,
    "",
  ];

  for (let i = 0; i < cards.length; i++) {
    const c = cards[i]!;
    const num = i + 1;
    const emoji = sourceEmoji(c.source);

    lines.push(`${num}. ${emoji} <a href="${c.url}"><b>${esc(c.repo)}</b></a>`);

    if (c.reasonCn) {
      const reason = c.reasonCn.length > 120 ? c.reasonCn.slice(0, 120) + "…" : c.reasonCn;
      lines.push(`   ${esc(reason)}`);
    }

    const meta: string[] = [`★ ${formatStars(c.stars)}`];
    if (c.starGrowth > 0) meta.push(`+${c.starGrowth} today`);
    if (c.language) meta.push(esc(c.language));
    if (c.aiDim) meta.push(esc(c.aiDim));
    lines.push(`   ${meta.join(" · ")}`);

    if (c.bigbros.length > 0) {
      lines.push(`   👥 ${esc(c.bigbros.slice(0, 3).join("、"))} star 了`);
    }

    lines.push("");
  }

  lines.push(`<a href="${pagesUrl}">🌐 去刷更多</a>  ·  刷到好项目，点赞让推荐更准`);

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// 飞书发送
// ---------------------------------------------------------------------------

function getWebhookUrls(): string[] {
  const raw = process.env["FEISHU_WEBHOOK_URLS"] ?? process.env["FEISHU_WEBHOOK_URL"] ?? "";
  return raw
    .split(",")
    .map((u) => u.trim())
    .filter(Boolean);
}

async function sendFeishu(title: string, content: string): Promise<void> {
  const urls = getWebhookUrls();
  if (urls.length === 0) {
    console.log("[notify-feed] FEISHU_WEBHOOK_URLS not set — skipping Feishu.");
    return;
  }

  const results = await Promise.allSettled(
    urls.map(async (url) => {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          msg_type: "interactive",
          card: {
            header: {
              title: { tag: "plain_text", content: title },
              template: "blue",
            },
            elements: [{ tag: "markdown", content }],
          },
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        throw new Error(`Feishu API ${res.status}: ${body}`);
      }
    }),
  );

  const failures = results.filter((r) => r.status === "rejected");
  if (failures.length > 0) {
    console.error(`[notify-feed] ${failures.length}/${urls.length} Feishu webhook(s) failed`);
    if (failures.length === urls.length) throw new Error("All Feishu webhooks failed");
  } else {
    console.log(`[notify-feed] Feishu sent to ${urls.length} webhook(s) ✓`);
  }
}

// ---------------------------------------------------------------------------
// Telegram 发送
// ---------------------------------------------------------------------------

async function sendTelegram(text: string): Promise<void> {
  const botToken = process.env["TELEGRAM_BOT_TOKEN"] ?? "";
  if (!botToken) {
    console.log("[notify-feed] TELEGRAM_BOT_TOKEN not set — skipping Telegram.");
    return;
  }

  const chatId = process.env["TELEGRAM_CHAT_ID"] ?? "@agents_radar";
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Telegram API ${res.status}: ${body}`);
  }
  console.log("[notify-feed] Telegram sent ✓");
}

// ---------------------------------------------------------------------------
// 主函数
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const cards = loadFeed();
  if (cards.length === 0) return;

  const topN = parseInt(process.env["FEED_TOP_N"] ?? String(DEFAULT_TOP_N), 10);
  const topCards = cards.slice(0, topN);

  const pagesUrl = (
    process.env["PAGES_URL"] ?? "https://github.com/" + (process.env["DIGEST_REPO"] ?? "")
  ).replace(/\/$/, "");

  const date = new Date().toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log(`[notify-feed] Sending top ${topCards.length}/${cards.length} cards…`);

  // 飞书
  const feishuContent = buildFeishuContent(topCards, pagesUrl);
  await sendFeishu(`📡 开源信息流 · ${date}`, feishuContent);

  // Telegram
  const tgText = buildTelegramText(topCards, pagesUrl);
  await sendTelegram(tgText);

  console.log("[notify-feed] Done!");
}

main().catch((e: unknown) => {
  console.error("[notify-feed]", e instanceof Error ? e.message : e);
  process.exit(1);
});
