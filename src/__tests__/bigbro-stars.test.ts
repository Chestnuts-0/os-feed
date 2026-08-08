import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// ---------------------------------------------------------------------------
// loadConfig mock：控制 followingUser / bigbros，避免读真实 config.yml
// ---------------------------------------------------------------------------
const { configMock } = vi.hoisted(() => ({
  configMock: {
    followingUser: "",
    bigbros: [] as string[],
  },
}));

vi.mock("../config.ts", () => ({
  loadConfig: () => ({ followingUser: configMock.followingUser, bigbros: configMock.bigbros }),
}));

import { fetchBigbroStars, fetchFollowingUsers } from "../bigbro-stars.ts";

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
  configMock.followingUser = "";
});

// ---------------------------------------------------------------------------
// fetchBigbroStars：Starred API 响应解析
// ---------------------------------------------------------------------------

describe("fetchBigbroStars", () => {
  it("parses starred response into BigbroStar with full repo fields", async () => {
    mockFetch.mockResolvedValueOnce(
      okJson([
        {
          full_name: "openai/whisper",
          stargazers_count: 68000,
          description: "Robust Speech Recognition via Large-Scale Weak Supervision",
          language: "Python",
          topics: ["speech-recognition", "deep-learning"],
          pushed_at: "2024-05-01T10:00:00Z",
        },
      ]),
    );

    const result = await fetchBigbroStars(["KKKKhazix"]);
    expect(result).toHaveLength(1);
    const star = result[0]!;
    expect(star.repo).toBe("openai/whisper");
    expect(star.bigbros).toEqual(["KKKKhazix"]);
    expect(star.desc).toBe("Robust Speech Recognition via Large-Scale Weak Supervision");
    expect(star.stars).toBe(68000);
    expect(star.language).toBe("Python");
    expect(star.topics).toEqual(["speech-recognition", "deep-learning"]);
    // ts 取自 pushed_at（Starred API 不带 star 时间）
    expect(star.ts).toBe("2024-05-01T10:00:00Z");
  });

  it("tolerates missing fields (null description/language, undefined topics)", async () => {
    mockFetch.mockResolvedValueOnce(
      okJson([
        {
          full_name: "torvalds/linux",
          stargazers_count: 170000,
          description: null,
          language: null,
          topics: undefined,
          pushed_at: "2024-06-01T00:00:00Z",
        },
      ]),
    );

    const result = await fetchBigbroStars(["esengine"]);
    expect(result).toHaveLength(1);
    expect(result[0]!.repo).toBe("torvalds/linux");
    expect(result[0]!.desc).toBeUndefined();
    expect(result[0]!.language).toBeUndefined();
    expect(result[0]!.topics).toEqual([]);
    expect(result[0]!.stars).toBe(170000);
    expect(result[0]!.ts).toBe("2024-06-01T00:00:00Z");
  });

  it("merges bigbros when multiple users star the same repo", async () => {
    const repo = {
      full_name: "openai/whisper",
      stargazers_count: 1,
      description: null,
      language: null,
      topics: [],
      pushed_at: "2024-01-01T00:00:00Z",
    };
    mockFetch.mockResolvedValueOnce(okJson([repo])).mockResolvedValueOnce(okJson([repo]));

    const result = await fetchBigbroStars(["KKKKhazix", "esengine"]);
    expect(result).toHaveLength(1);
    expect([...result[0]!.bigbros].sort()).toEqual(["KKKKhazix", "esengine"]);
  });

  it("skips a failing user and keeps the others (daily rerun retries naturally)", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 404 }).mockResolvedValueOnce(
      okJson([
        {
          full_name: "foo/bar",
          stargazers_count: 42,
          description: "desc",
          language: "Go",
          topics: [],
          pushed_at: "2024-02-02T00:00:00Z",
        },
      ]),
    );

    const result = await fetchBigbroStars(["ghost-user", "esengine"]);
    expect(result).toHaveLength(1);
    expect(result[0]!.repo).toBe("foo/bar");
    expect(result[0]!.bigbros).toEqual(["esengine"]);
  });

  it("accepts starred repos without any event-type filtering (WatchEvent logic removed)", async () => {
    // Starred API 响应元素没有 type 字段——全部 repo 都应被接受，不再按事件类型过滤
    mockFetch.mockResolvedValueOnce(
      okJson([
        {
          full_name: "a/b",
          stargazers_count: 10,
          description: null,
          language: null,
          topics: [],
          pushed_at: "2024-03-03T00:00:00Z",
        },
      ]),
    );

    const result = await fetchBigbroStars(["KKKKhazix"]);
    expect(result).toHaveLength(1);
    expect(result[0]!.repo).toBe("a/b");
  });

  it("returns empty when no users configured", async () => {
    const result = await fetchBigbroStars([]);
    expect(result).toEqual([]);
    expect(mockFetch).not.toHaveBeenCalled();
  });
});

// ---------------------------------------------------------------------------
// fetchFollowingUsers：follow 列表 ∪ config bigbros
// ---------------------------------------------------------------------------

describe("fetchFollowingUsers", () => {
  it("merges follow list with config bigbros and dedupes", async () => {
    configMock.followingUser = "Chestnuts-0";
    mockFetch.mockResolvedValueOnce(
      okJson([{ login: "KKKKhazix" }, { login: "torvalds" }, { login: "sindresorhus" }]),
    );

    const users = await fetchFollowingUsers(["KKKKhazix", "esengine"]);
    expect(users).toHaveLength(4); // torvalds/sindresorhus/esengine + KKKKhazix 去重
    expect(users).toEqual(expect.arrayContaining(["KKKKhazix", "esengine", "torvalds", "sindresorhus"]));
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.github.com/users/Chestnuts-0/following?per_page=100",
      expect.anything(),
    );
  });

  it("falls back to config bigbros when follow fetch fails (rate limit / network)", async () => {
    configMock.followingUser = "Chestnuts-0";
    mockFetch.mockResolvedValueOnce({ ok: false, status: 403 });

    const users = await fetchFollowingUsers(["KKKKhazix", "esengine"]);
    expect(users).toEqual(["KKKKhazix", "esengine"]);
  });

  it("falls back to config bigbros when follow fetch rejects", async () => {
    configMock.followingUser = "Chestnuts-0";
    mockFetch.mockRejectedValueOnce(new Error("network down"));

    const users = await fetchFollowingUsers(["esengine"]);
    expect(users).toEqual(["esengine"]);
  });

  it("returns config bigbros only when followingUser is empty", async () => {
    configMock.followingUser = "";
    const users = await fetchFollowingUsers(["KKKKhazix", "esengine"]);
    expect(users).toEqual(["KKKKhazix", "esengine"]);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("dedupes config list itself", async () => {
    configMock.followingUser = "";
    const users = await fetchFollowingUsers(["KKKKhazix", "KKKKhazix"]);
    expect(users).toEqual(["KKKKhazix"]);
  });
});
