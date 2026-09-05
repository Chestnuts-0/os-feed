/**
 * 编队健康统计测试（2026-09-05 拆 job 刀配套）。
 *
 * 覆盖：createLlmCaller 实例的 fleetHealth 钩子——成功/429 重试/429 冷却/
 * 非 429 错误的计数语义、同名 worker 的 #N 标签、以及 fleet-health.json
 * 的按 job upsert 合并纯函数。recordFleetHealth 含文件 I/O，不在单测范围。
 */

import { describe, it, expect, vi } from "vitest";

// report.ts 模块加载即实例化主源（createLlmCaller(createProvider(), ...)），
// mock 掉 createProvider 避免碰真实 SDK——本测试只用自造 provider（report.test.ts 同款手法）。
vi.mock("../providers/index.ts", () => ({
  createProvider: () => ({ name: "mock", call: async () => "unused" }),
}));

import { createLlmCaller, upsertFleetHealthEntry, type FleetHealthFileEntry } from "../report.ts";
import type { LlmProvider } from "../providers/types.ts";

function err429(): Error {
  return Object.assign(new Error("rate limited"), { status: 429 });
}

/** 自造 provider：按调用序号走脚本化行为，记录收到的调用数 */
function fakeProvider(
  name: string,
  script: (callIndex: number) => Promise<string> = async () => "ok",
): LlmProvider & { calls: number } {
  let n = 0;
  return {
    name,
    calls: 0,
    call(prompt: string, maxTokens: number): Promise<string> {
      void prompt;
      void maxTokens;
      this.calls++;
      return script(n++);
    },
  };
}

describe("createLlmCaller fleetHealth 编队健康统计", () => {
  it("成功调用计入 calls/ok，round-robin 分摊到两个 worker", async () => {
    const a = fakeProvider("alpha");
    const b = fakeProvider("beta");
    const caller = createLlmCaller(a, [() => b], { retryBaseMs: 1, maxRetries: 2, cooldownMs: 1 });
    await caller("p1", 10);
    await caller("p2", 10);

    const rows = caller.fleetHealth!();
    expect(rows).toHaveLength(2);
    expect(rows.find((r) => r.name === "alpha")).toMatchObject({ calls: 1, ok: 1, err429: 0, cooldowns: 0 });
    expect(rows.find((r) => r.name === "beta")).toMatchObject({ calls: 1, ok: 1, err429: 0, cooldowns: 0 });
  });

  it("429 重试拉满 → 冷却并切到健康源：err429 按每次实际调用计，cooldowns=1", async () => {
    const bad = fakeProvider("bad", async () => {
      throw err429();
    });
    const good = fakeProvider("good");
    const caller = createLlmCaller(bad, [() => good], {
      retryBaseMs: 1,
      maxRetries: 2,
      cooldownMs: 60_000, // 冷却窗口拉长，cooling 断言稳定
    });

    await expect(caller("p1", 10)).resolves.toBe("ok"); // 主源拉满后换备源成功

    const rows = caller.fleetHealth!();
    // 初始 1 次 + 重试 2 次 = 3 次调用全部 429，最后一次触发冷却
    expect(rows.find((r) => r.name === "bad")).toMatchObject({
      calls: 3,
      ok: 0,
      err429: 3,
      cooldowns: 1,
      cooling: true,
    });
    expect(rows.find((r) => r.name === "good")).toMatchObject({ calls: 1, ok: 1, cooldowns: 0 });
  });

  it("非 429 错误不换源直接抛，计入 otherErrors 不计冷却", async () => {
    const bad = fakeProvider("bad", async () => {
      throw new Error("boom");
    });
    const good = fakeProvider("good");
    const caller = createLlmCaller(bad, [() => good], { retryBaseMs: 1, maxRetries: 2, cooldownMs: 1 });

    await expect(caller("p1", 10)).rejects.toThrow("boom");
    expect(good.calls).toBe(0); // 非 429 不换源

    const rows = caller.fleetHealth!();
    expect(rows.find((r) => r.name === "bad")).toMatchObject({
      calls: 1,
      ok: 0,
      err429: 0,
      cooldowns: 0,
      otherErrors: 1,
      cooling: false,
    });
    expect(rows.find((r) => r.name === "bad")?.lastError).toContain("boom");
  });

  it("同名多 worker 标签加 #N 序号（编队 groq@模型A / groq@模型B 区分统计）", () => {
    const g1 = fakeProvider("groq");
    const g2 = fakeProvider("groq");
    const caller = createLlmCaller(g1, [() => g2], { retryBaseMs: 1, maxRetries: 1, cooldownMs: 1 });

    const names = caller.fleetHealth!().map((r) => r.name);
    expect(names).toEqual(["groq", "groq#2"]);
  });
});

describe("upsertFleetHealthEntry 按 job 合并", () => {
  const mk = (job: string): FleetHealthFileEntry => ({ job, at: "t", workers: [] });

  it("digest 与 feed 先后写入互不覆盖", () => {
    let list = upsertFleetHealthEntry([], mk("digest"));
    list = upsertFleetHealthEntry(list, mk("feed"));
    expect(list.map((e) => e.job)).toEqual(["digest", "feed"]);
  });

  it("同 job 重复写入替换旧条目（拆 job 重跑场景）", () => {
    let list = upsertFleetHealthEntry([], mk("digest"));
    list = upsertFleetHealthEntry(list, mk("feed"));
    list = upsertFleetHealthEntry(list, { job: "digest", at: "t2", workers: [] });
    expect(list.map((e) => e.job)).toEqual(["feed", "digest"]);
    expect(list.find((e) => e.job === "digest")?.at).toBe("t2");
  });
});
