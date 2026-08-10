// @ts-ignore —— vitest 依赖装在仓库根（web 是独立 npm 包，CI Deploy 的 web npm ci 不含 vitest，tsc -b 会 TS2307）；
// 本文件由根 vitest 运行（vitest.config include 已含 web/src/__tests__），运行时从根 node_modules 解析，@ts-ignore 只跳过编译期模块解析
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { loadSafe, saveDual, bakKey, corruptKey } from "../storage.ts";

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
// 可替换的 setItem 实现（测试 QuotaExceeded 时注入抛错）
let setItemImpl: (k: string, v: string) => void = (k, v) => mem.setItem(k, v);

function quotaError(): Error {
  const err = new Error("QuotaExceededError: storage quota exceeded");
  err.name = "QuotaExceededError";
  return err;
}

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

describe("storage 封装", () => {
  it("正常读写：saveDual 双写主+bak，loadSafe 读回", () => {
    saveDual("k", { likes: ["a"], dislikes: [] });
    expect(JSON.parse(localStorage.getItem("k")!)).toEqual({ likes: ["a"], dislikes: [] });
    expect(JSON.parse(localStorage.getItem(bakKey("k"))!)).toEqual({ likes: ["a"], dislikes: [] });
    expect(loadSafe("k", null)).toEqual({ likes: ["a"], dislikes: [] });
  });

  it("saveDual 支持自定义 bak 轻量版（backupData 与主数据分离）", () => {
    saveDual("k", { likes: ["a"], likedSnapshots: { r: { repo: "r" } } }, { likes: ["a"], dislikes: [] });
    expect(JSON.parse(localStorage.getItem("k")!)).toEqual({
      likes: ["a"],
      likedSnapshots: { r: { repo: "r" } },
    });
    expect(JSON.parse(localStorage.getItem(bakKey("k"))!)).toEqual({ likes: ["a"], dislikes: [] });
  });

  it("损坏：corrupt key 留现场 + bak 恢复", () => {
    // 先正常双写（建立 bak）
    saveDual("os-feed-feedback", { likes: ["a"], dislikes: [] }, { likes: ["a"], dislikes: [] });
    // 主 key 被写坏（模拟外部破坏/写坏）
    localStorage.setItem("os-feed-feedback", '{likes: "broken');
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const result = loadSafe<{ likes: string[]; dislikes: string[] }>("os-feed-feedback", {
      likes: [],
      dislikes: [],
    });
    // 现场保留（覆盖写留最新现场）
    expect(localStorage.getItem(corruptKey("os-feed-feedback"))).toBe('{likes: "broken');
    // bak 恢复列表
    expect(result).toEqual({ likes: ["a"], dislikes: [] });
    expect(warn).toHaveBeenCalled();
  });

  it("损坏且 bak 也损坏 → fallback（现场仍保留）", () => {
    saveDual("k", { likes: ["a"] });
    localStorage.setItem("k", "{{{not-json");
    localStorage.setItem(bakKey("k"), "[[[also-broken");
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const result = loadSafe<{ likes: string[] }>("k", { likes: [] });
    expect(result).toEqual({ likes: [] });
    expect(localStorage.getItem(corruptKey("k"))).toBe("{{{not-json");
    expect(warn).toHaveBeenCalled();
  });

  it("无值 / 空串 → fallback，不写 corrupt", () => {
    expect(loadSafe("absent", "fb")).toBe("fb");
    localStorage.setItem("empty", "");
    expect(loadSafe("empty", "fb")).toBe("fb");
    expect(localStorage.getItem(corruptKey("absent"))).toBeNull();
  });

  it("QuotaExceeded：删 bak 后重试主 key 成功", () => {
    // 先建立 bak
    saveDual("k", { likes: ["old"] });
    let quotaThrown = false;
    setItemImpl = (k, v) => {
      if (k === "k" && !quotaThrown) {
        quotaThrown = true;
        throw quotaError();
      }
      mem.setItem(k, v);
    };
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    saveDual("k", { likes: ["new"] });
    // 主 key 重试成功
    expect(JSON.parse(localStorage.getItem("k")!)).toEqual({ likes: ["new"] });
    // bak 重写成功
    expect(JSON.parse(localStorage.getItem(bakKey("k"))!)).toEqual({ likes: ["new"] });
    // 第一次配额抛错被吞掉后不误报（无 console.warn —— 重试成功路径）
    expect(warn).not.toHaveBeenCalled();
  });

  it("QuotaExceeded 重试仍失败 → console.warn，不写任何值", () => {
    setItemImpl = () => {
      throw quotaError();
    };
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    saveDual("k", { likes: ["a"] });
    expect(warn).toHaveBeenCalled();
    expect(localStorage.getItem("k")).toBeNull();
    expect(localStorage.getItem(bakKey("k"))).toBeNull();
  });

  it("普通异常（非 QuotaExceeded）→ console.warn，不写", () => {
    setItemImpl = () => {
      throw new Error("SecurityError: access denied");
    };
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    saveDual("k", { likes: ["a"] });
    expect(warn).toHaveBeenCalled();
    expect(localStorage.getItem("k")).toBeNull();
  });

  it("bak 写失败（主已成功）→ console.warn，主数据保留", () => {
    setItemImpl = (k, v) => {
      if (k === bakKey("k")) throw new Error("bak write failed");
      mem.setItem(k, v);
    };
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    saveDual("k", { likes: ["a"] });
    expect(JSON.parse(localStorage.getItem("k")!)).toEqual({ likes: ["a"] });
    expect(localStorage.getItem(bakKey("k"))).toBeNull();
    expect(warn).toHaveBeenCalled();
  });
});
