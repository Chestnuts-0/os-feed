/**
 * 事件流观察员测试（P0，2026-09-06）：
 * 聚合纯函数（WatchEvent 计数/CreateEvent 收集/缺 repo 跳过）与
 * 观察员启停语义（stop 提前收尾、落盘到可注入路径、轮询失败静默）。
 * 网络请求全部 stub，不碰真实 GitHub。
 */

import { describe, it, expect, vi, afterEach } from "vitest";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

import { aggregateEvents, startEventsObserver } from "../events.ts";

describe("aggregateEvents 聚合纯函数", () => {
  it("WatchEvent 按 repo 计数，CreateEvent 去重收集", () => {
    const { watch, created, seen } = aggregateEvents([
      { type: "WatchEvent", repo: { name: "a/b" } },
      { type: "WatchEvent", repo: { name: "a/b" } },
      { type: "WatchEvent", repo: { name: "c/d" } },
      { type: "CreateEvent", repo: { name: "e/f" } },
      { type: "CreateEvent", repo: { name: "e/f" } },
      { type: "PushEvent", repo: { name: "a/b" } },
      { type: "WatchEvent" }, // 缺 repo → 跳过不计 seen
    ]);
    expect(watch.get("a/b")).toBe(2);
    expect(watch.get("c/d")).toBe(1);
    expect(watch.size).toBe(2);
    expect(created).toEqual(["e/f", "e/f"]); // 原始收集不去重（落盘时 newRepos 去重）
    expect(seen).toBe(6);
  });
});

describe("startEventsObserver 启停语义", () => {
  const savedFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = savedFetch;
    vi.restoreAllMocks();
  });

  it("stop 提前收尾并把聚合结果落盘到注入路径；轮询失败静默不炸", async () => {
    globalThis.fetch = vi.fn(
      async () => ({ ok: false, status: 403, text: async () => "" }) as unknown as Response,
    );
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "events-test-"));
    const out = path.join(dir, "events-momentum.json");

    const obs = startEventsObserver(60_000, { log: () => {}, error: () => {} }, out);
    await new Promise((r) => setTimeout(r, 150)); // 让它空跑一两个失败周期
    obs.stop();
    await Promise.race([obs.done, new Promise((r) => setTimeout(r, 5_000))]);

    expect(fs.existsSync(out)).toBe(true);
    const data = JSON.parse(fs.readFileSync(out, "utf-8")) as {
      polls: number;
      eventsSeen: number;
      windowStart: string;
      windowEnd: string;
    };
    expect(data.polls).toBe(0); // 全部 403 → 0 成功轮询
    expect(data.eventsSeen).toBe(0);
    expect(new Date(data.windowEnd).getTime()).toBeGreaterThanOrEqual(new Date(data.windowStart).getTime());
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("成功轮询的数据被聚合进结果", async () => {
    const events = [
      { type: "WatchEvent", repo: { name: "x/y" } },
      { type: "WatchEvent", repo: { name: "x/y" } },
      { type: "CreateEvent", repo: { name: "n/m" } },
    ];
    globalThis.fetch = vi.fn(
      async () => ({ ok: true, status: 200, json: async () => events }) as unknown as Response,
    );
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "events-test-"));
    const out = path.join(dir, "events-momentum.json");

    const obs = startEventsObserver(60_000, { log: () => {}, error: () => {} }, out);
    await new Promise((r) => setTimeout(r, 150));
    obs.stop();
    await Promise.race([obs.done, new Promise((r) => setTimeout(r, 5_000))]);

    const data = JSON.parse(fs.readFileSync(out, "utf-8")) as {
      eventsSeen: number;
      watchEvents: number;
      createEvents: number;
      topWatched: Array<{ repo: string; stars: number }>;
      newRepos: string[];
    };
    // 观察员每周期拉 2 页，stub 两页同数据 → 事件翻倍计入（去重交给落盘 newRepos 与 P1 消费方）
    expect(data.eventsSeen).toBe(6);
    expect(data.watchEvents).toBe(4);
    expect(data.createEvents).toBe(2);
    expect(data.topWatched[0]).toEqual({ repo: "x/y", stars: 4 });
    expect(data.newRepos).toEqual(["n/m"]);
    fs.rmSync(dir, { recursive: true, force: true });
  });
});
