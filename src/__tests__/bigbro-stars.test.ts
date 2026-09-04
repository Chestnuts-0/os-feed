import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  fetchUserType,
  fetchUserStarredRepos,
  fetchCoreQuotaRemaining,
  stampLibraryStars,
  RateLimitedError,
} from "../bigbro-stars.ts";

const mockFetch = vi.fn();

function okJson(data: unknown) {
  return { ok: true, status: 200, json: async () => data };
}

beforeEach(() => {
  mockFetch.mockReset();
  vi.stubGlobal("fetch", mockFetch);
  delete process.env.GITHUB_TOKEN;
});

afterEach(() => {
  vi.unstubAllGlobals();
});

// ---------------------------------------------------------------------------
// fetchUserType / fetchUserStarredRepos / fetchCoreQuotaRemaining
// ---------------------------------------------------------------------------

describe("fetchUserType", () => {
  it("returns type for a normal user", async () => {
    mockFetch.mockResolvedValueOnce(okJson({ login: "alice", type: "User" }));
    expect(await fetchUserType("alice")).toBe("User");
    expect(mockFetch).toHaveBeenCalledWith("https://api.github.com/users/alice", expect.anything());
  });

  it("returns Organization type untouched (caller decides skip)", async () => {
    mockFetch.mockResolvedValueOnce(okJson({ login: "microsoft", type: "Organization" }));
    expect(await fetchUserType("microsoft")).toBe("Organization");
  });

  it("returns MISSING on 404 (dead account, recorded to state)", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 404 });
    expect(await fetchUserType("ghost-user")).toBe("MISSING");
  });

  it("returns null on transient server error (retry next round)", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });
    expect(await fetchUserType("flaky")).toBeNull();
  });

  it("throws RateLimitedError on 403/429", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 403 });
    await expect(fetchUserType("anyone")).rejects.toBeInstanceOf(RateLimitedError);
  });

  it("returns null on network rejection", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network down"));
    expect(await fetchUserType("anyone")).toBeNull();
  });
});

describe("fetchUserStarredRepos", () => {
  it("fetches one page sorted by created and returns full names", async () => {
    mockFetch.mockResolvedValueOnce(
      okJson([
        { full_name: "openai/whisper" },
        { full_name: "torvalds/linux" },
        { full_name: "no-full-name" }, // 无 owner/repo 形态的条目被过滤
      ]),
    );
    const repos = await fetchUserStarredRepos("alice");
    expect(repos).toEqual(["openai/whisper", "torvalds/linux"]);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.github.com/users/alice/starred?per_page=100&sort=created",
      expect.anything(),
    );
  });

  it("throws RateLimitedError on 429", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 429 });
    await expect(fetchUserStarredRepos("alice")).rejects.toBeInstanceOf(RateLimitedError);
  });

  it("throws plain error on other HTTP failures", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });
    await expect(fetchUserStarredRepos("alice")).rejects.toThrow("HTTP 500");
  });
});

describe("fetchCoreQuotaRemaining", () => {
  it("parses resources.core.remaining", async () => {
    mockFetch.mockResolvedValueOnce(okJson({ resources: { core: { remaining: 4321 } } }));
    expect(await fetchCoreQuotaRemaining()).toBe(4321);
  });

  it("returns -1 on failure (caller treats as zero budget)", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });
    expect(await fetchCoreQuotaRemaining()).toBe(-1);
    mockFetch.mockRejectedValueOnce(new Error("network down"));
    expect(await fetchCoreQuotaRemaining()).toBe(-1);
  });
});

// ---------------------------------------------------------------------------
// stampLibraryStars：库内盖章主流程
// ---------------------------------------------------------------------------

describe("stampLibraryStars", () => {
  const repoSet = new Set(["old/card1", "old/card2", "microsoft/vscode"]);

  it("returns empty outcome without any request when no candidates", async () => {
    const outcome = await stampLibraryStars([], repoSet);
    expect(outcome.stamps.size).toBe(0);
    expect(outcome.stampedUsers).toEqual([]);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("stamps only library repos and ignores out-of-library stars", async () => {
    mockFetch
      .mockResolvedValueOnce(okJson({ resources: { core: { remaining: 5000 } } }))
      .mockResolvedValueOnce(okJson({ type: "User" }))
      .mockResolvedValueOnce(okJson([{ full_name: "old/card1" }, { full_name: "outside/repo" }]));

    const outcome = await stampLibraryStars(["alice"], repoSet);

    expect(outcome.stampedUsers).toEqual(["alice"]);
    expect(outcome.pendingUsers).toEqual([]);
    // 库外 star 不产生任何盖章（盖章永不建卡）
    expect([...outcome.stamps.keys()]).toEqual(["old/card1"]);
    expect(outcome.stamps.get("old/card1")).toEqual(["alice"]);
  });

  it("skips organizations without fetching their stars", async () => {
    mockFetch
      .mockResolvedValueOnce(okJson({ resources: { core: { remaining: 5000 } } }))
      .mockResolvedValueOnce(okJson({ type: "Organization" }));

    const outcome = await stampLibraryStars(["microsoft"], repoSet);

    expect(outcome.skippedUsers).toEqual(["microsoft"]);
    expect(outcome.stampedUsers).toEqual([]);
    // 只查了 rate_limit + type 两次，没查 starred
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });

  it("records 404 accounts as not-found without fetching stars", async () => {
    mockFetch
      .mockResolvedValueOnce(okJson({ resources: { core: { remaining: 5000 } } }))
      .mockResolvedValueOnce({ ok: false, status: 404 });

    const outcome = await stampLibraryStars(["ghost"], repoSet);

    expect(outcome.notFoundUsers).toEqual(["ghost"]);
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });

  it("pends everything when quota is below the reserve", async () => {
    mockFetch.mockResolvedValueOnce(okJson({ resources: { core: { remaining: 100 } } }));

    const outcome = await stampLibraryStars(["alice", "bob"], repoSet);

    // (100 - 300) / 2 < 0 → 预算 0：全部留待下轮，不打用户接口
    expect(outcome.pendingUsers).toEqual(["alice", "bob"]);
    expect(outcome.stampedUsers).toEqual([]);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it("pends everything when quota check itself fails", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });

    const outcome = await stampLibraryStars(["alice"], repoSet);

    expect(outcome.pendingUsers).toEqual(["alice"]);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it("respects maxUsers budget and pends the rest", async () => {
    mockFetch
      .mockResolvedValueOnce(okJson({ resources: { core: { remaining: 5000 } } }))
      // alice：type + starred
      .mockResolvedValueOnce(okJson({ type: "User" }))
      .mockResolvedValueOnce(okJson([]))
      // bob：type + starred
      .mockResolvedValueOnce(okJson({ type: "User" }))
      .mockResolvedValueOnce(okJson([]))
      // carol 不应被查询
      .mockResolvedValueOnce(okJson({ type: "User" }))
      .mockResolvedValueOnce(okJson([]));

    const outcome = await stampLibraryStars(["alice", "bob", "carol"], repoSet, {
      maxUsers: 2,
      concurrency: 1,
    });

    expect(outcome.stampedUsers).toEqual(["alice", "bob"]);
    expect(outcome.pendingUsers).toEqual(["carol"]);
    expect(mockFetch).toHaveBeenCalledTimes(5); // quota + 2 用户 × 2 请求
  });

  it("stops the whole round on rate limit and pends the unprocessed", async () => {
    mockFetch
      .mockResolvedValueOnce(okJson({ resources: { core: { remaining: 5000 } } }))
      // alice：正常盖章
      .mockResolvedValueOnce(okJson({ type: "User" }))
      .mockResolvedValueOnce(okJson([{ full_name: "old/card2" }]))
      // bob：starred 撞限流
      .mockResolvedValueOnce(okJson({ type: "User" }))
      .mockResolvedValueOnce({ ok: false, status: 403 });

    const outcome = await stampLibraryStars(["alice", "bob"], repoSet, { concurrency: 1 });

    expect(outcome.stamps.get("old/card2")).toEqual(["alice"]);
    expect(outcome.pendingUsers).toContain("bob");
    // 限流后停轮：quota + alice 2 请求 + bob type 1 + bob starred 1 = 5，无更多重试
    expect(mockFetch).toHaveBeenCalledTimes(5);
  });

  it("pends users whose type check fails transiently", async () => {
    mockFetch
      .mockResolvedValueOnce(okJson({ resources: { core: { remaining: 5000 } } }))
      .mockResolvedValueOnce({ ok: false, status: 500 });

    const outcome = await stampLibraryStars(["flaky"], repoSet);

    expect(outcome.pendingUsers).toEqual(["flaky"]);
    expect(outcome.stampedUsers).toEqual([]);
  });

  it("merges multiple starrers of the same repo", async () => {
    // 并发下调用顺序交叉（alice type → bob type → alice starred → bob starred），
    // mock 按 URL 路由，不依赖 once 队列顺序
    mockFetch.mockImplementation(async (url: unknown) => {
      const u = String(url);
      if (u.includes("/rate_limit")) {
        return okJson({ resources: { core: { remaining: 5000 } } });
      }
      if (u.endsWith("/users/alice") || u.endsWith("/users/bob")) {
        return okJson({ type: "User" });
      }
      if (u.includes("/users/alice/starred") || u.includes("/users/bob/starred")) {
        return okJson([{ full_name: "old/card1" }]);
      }
      return { ok: false, status: 404 };
    });

    const outcome = await stampLibraryStars(["alice", "bob"], repoSet);

    expect(outcome.stampedUsers).toEqual(["alice", "bob"]);
    expect(outcome.stamps.get("old/card1")).toEqual(["alice", "bob"]);
  });
});
