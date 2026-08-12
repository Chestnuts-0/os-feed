// @ts-ignore -- vitest 依赖装在仓库根（web 是独立 npm 包，CI Deploy 的 web npm ci 不含 vitest，tsc -b 会 TS2307）；
// 本文件由根 vitest 运行（vitest.config include 已含 web/src/__tests__），运行时从根 node_modules 解析，@ts-ignore 只跳过编译期模块解析
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { migrateLegacyKeys } from "../storage.ts";

/** 内存版 localStorage */
function createMemoryStorage() {
  const store = new Map<string, string>();
  return {
    getItem: (k: string) => (store.has(k) ? store.get(k)! : null),
    setItem: (k: string, v: string) => {
      store.set(k, String(v));
    },
    removeItem: (k: string) => {
      store.delete(k);
    },
    clear: () => {
      store.clear();
    },
    key: (i: number) => [...store.keys()][i] ?? null,
    get length() {
      return store.size;
    },
  };
}

const mem = createMemoryStorage();
// 可替换的 setItem 实现（测试校验失败场景注入）
let setItemImpl: (k: string, v: string) => void = (k, v) => mem.setItem(k, v);

beforeEach(() => {
  mem.clear();
  setItemImpl = (k, v) => mem.setItem(k, v);
  vi.stubGlobal("localStorage", {
    getItem: (k: string) => mem.getItem(k),
    setItem: (k: string, v: string) => setItemImpl(k, v),
    removeItem: (k: string) => mem.removeItem(k),
    clear: () => mem.clear(),
    key: (i: number) => mem.key(i),
    get length() {
      return mem.length;
    },
  });
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("migrateLegacyKeys", () => {
  it("成功迁移：旧 key 有数据、新 key 空 -> 迁移后新 key=旧值、旧 key 已删", () => {
    const oldVal = JSON.stringify({ likes: ["a", "b"], dislikes: ["c"] });
    localStorage.setItem("os-feed-feedback", oldVal);
    localStorage.setItem("os-feed-following", JSON.stringify(["user1", "user2"]));

    migrateLegacyKeys();

    // 新 key 有数据
    expect(localStorage.getItem("gittok-feedback")).toBe(oldVal);
    expect(localStorage.getItem("gittok-following")).toBe(JSON.stringify(["user1", "user2"]));
    // 旧 key 已删
    expect(localStorage.getItem("os-feed-feedback")).toBeNull();
    expect(localStorage.getItem("os-feed-following")).toBeNull();
  });

  it("校验失败回退：写入后读回不一致 -> 旧 key 保留、新 key 不残留错误数据", () => {
    const oldVal = JSON.stringify({ likes: ["a"] });
    localStorage.setItem("os-feed-preferences", oldVal);

    // 注入 setItem：写入新 key 时篡改值（模拟写入后读回不一致）
    setItemImpl = (k, v) => {
      if (k === "gittok-preferences") {
        mem.setItem(k, "CORRUPTED_VALUE");
      } else {
        mem.setItem(k, v);
      }
    };

    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    migrateLegacyKeys();

    // 旧 key 保留
    expect(localStorage.getItem("os-feed-preferences")).toBe(oldVal);
    // 新 key 被清理（不残留错误数据）
    expect(localStorage.getItem("gittok-preferences")).toBeNull();
    expect(warn).toHaveBeenCalled();
  });

  it("幂等：迁移后二次调用 -> 新 key 值不变、无异常", () => {
    const oldVal = JSON.stringify({ likes: ["a", "b"] });
    localStorage.setItem("os-feed-seen", oldVal);

    migrateLegacyKeys();
    // 第一次迁移后旧 key 已删
    expect(localStorage.getItem("os-feed-seen")).toBeNull();
    expect(localStorage.getItem("gittok-seen")).toBe(oldVal);

    // 二次调用
    migrateLegacyKeys();
    // 新 key 值不变
    expect(localStorage.getItem("gittok-seen")).toBe(oldVal);
  });

  it("新 key 已有数据 -> 不覆盖（保留新值）", () => {
    const oldVal = JSON.stringify({ likes: ["old"] });
    const newVal = JSON.stringify({ likes: ["new"] });
    localStorage.setItem("os-feed-collections", oldVal);
    localStorage.setItem("gittok-collections", newVal);

    migrateLegacyKeys();

    // 新 key 保留新值（不覆盖）
    expect(localStorage.getItem("gittok-collections")).toBe(newVal);
    // 旧 key 保留（因为新 key 已有数据，迁移跳过，旧 key 不删）
    expect(localStorage.getItem("os-feed-collections")).toBe(oldVal);
  });

  it("corrupt 现场（旧前缀）-> 迁移函数不触碰", () => {
    const corruptData = "{broken json";
    localStorage.setItem("os-feed-corrupt-gittok-feedback", corruptData);
    // 同时放一个正常的旧 key 确保迁移跑了
    localStorage.setItem("os-feed-interactions", JSON.stringify({ seen: ["r1"] }));

    migrateLegacyKeys();

    // corrupt 现场原样保留
    expect(localStorage.getItem("os-feed-corrupt-gittok-feedback")).toBe(corruptData);
    // 正常旧 key 迁移成功
    expect(localStorage.getItem("os-feed-interactions")).toBeNull();
    expect(localStorage.getItem("gittok-interactions")).toBe(JSON.stringify({ seen: ["r1"] }));
  });

  it("旧 key 无数据（null）-> 跳过，无异常", () => {
    // 不设置任何旧 key
    migrateLegacyKeys();

    // 新 key 也没有数据
    expect(localStorage.getItem("gittok-feedback")).toBeNull();
    expect(localStorage.getItem("gittok-preferences")).toBeNull();
    expect(localStorage.getItem("gittok-collections")).toBeNull();
    expect(localStorage.getItem("gittok-seen")).toBeNull();
    expect(localStorage.getItem("gittok-interactions")).toBeNull();
    expect(localStorage.getItem("gittok-following")).toBeNull();
  });

  it("全部 6 个 key 同时迁移", () => {
    localStorage.setItem("os-feed-feedback", JSON.stringify({ likes: ["a"] }));
    localStorage.setItem("os-feed-preferences", JSON.stringify({ theme: "dark" }));
    localStorage.setItem("os-feed-collections", JSON.stringify([{ id: "c1" }]));
    localStorage.setItem("os-feed-seen", JSON.stringify(["repo1", "repo2"]));
    localStorage.setItem("os-feed-interactions", JSON.stringify({ seen: ["r1"] }));
    localStorage.setItem("os-feed-following", JSON.stringify(["user1"]));

    migrateLegacyKeys();

    // 全部迁移到新 key
    expect(localStorage.getItem("gittok-feedback")).toBe(JSON.stringify({ likes: ["a"] }));
    expect(localStorage.getItem("gittok-preferences")).toBe(JSON.stringify({ theme: "dark" }));
    expect(localStorage.getItem("gittok-collections")).toBe(JSON.stringify([{ id: "c1" }]));
    expect(localStorage.getItem("gittok-seen")).toBe(JSON.stringify(["repo1", "repo2"]));
    expect(localStorage.getItem("gittok-interactions")).toBe(JSON.stringify({ seen: ["r1"] }));
    expect(localStorage.getItem("gittok-following")).toBe(JSON.stringify(["user1"]));
    // 全部旧 key 已删
    expect(localStorage.getItem("os-feed-feedback")).toBeNull();
    expect(localStorage.getItem("os-feed-preferences")).toBeNull();
    expect(localStorage.getItem("os-feed-collections")).toBeNull();
    expect(localStorage.getItem("os-feed-seen")).toBeNull();
    expect(localStorage.getItem("os-feed-interactions")).toBeNull();
    expect(localStorage.getItem("os-feed-following")).toBeNull();
  });
});
