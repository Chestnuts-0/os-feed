/**
 * 两段式评分测试（2026-09-06 提速刀）。
 *
 * 覆盖：海选 prompt 构建（只要评分不要文案）、海选解析容错、精评 top-K 选择
 * （排序/平手裁决/K 上限）、phase1 缓存读写往返。
 * 栗子铁律的在管道侧闸门（无文案不进 feed）由 index.ts 组装循环既有校验承担，
 * 这里锁「未入选者绝不出现在 proseSelected」的选择语义。
 */

import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

import { buildPhase1ScoringPrompt, parsePhase1ScoringResult } from "../feed/prompts.ts";
import {
  loadPhase1Scores,
  appendPhase1Scores,
  selectForProse,
  type SelectionInput,
} from "../feed/two-phase.ts";
import type { RepoForScoring } from "../feed/types.ts";

const INTERESTS = "AI、好玩的、实用的、各行各业的开源项目都想看";

function mkRepo(repo: string): RepoForScoring {
  return { repo, description: `desc of ${repo}`, stars: 100, language: "TypeScript", topics: ["ai"] };
}

describe("buildPhase1ScoringPrompt 海选 prompt", () => {
  it("包含全部 repo、维度清单与「只要评分」约束，且不要求文案", () => {
    const prompt = buildPhase1ScoringPrompt([mkRepo("a/b"), mkRepo("c/d")], INTERESTS);
    expect(prompt).toContain("a/b");
    expect(prompt).toContain("c/d");
    expect(prompt).toContain("AI Agent"); // AI_DIMS 清单在列
    expect(prompt).toContain("只要评分");
    expect(prompt).not.toContain("reason_cn"); // 明确不要求文案字段
    expect(prompt).not.toContain("detail_cn");
  });
});

describe("parsePhase1ScoringResult 海选解析", () => {
  it("解析标准数组：分数夹取到 [0,1]，缺 dims 容错为空数组", () => {
    const raw = `[{"repo":"a/b","ai_dims":["AI Agent"],"ai_score":0.85},{"repo":"c/d","ai_score":2},{"repo":"e/f"}]`;
    const parsed = parsePhase1ScoringResult(raw);
    expect(parsed).toHaveLength(3);
    expect(parsed[0]).toEqual({ repo: "a/b", aiDims: ["AI Agent"], aiScore: 0.85 });
    expect(parsed[1]!.aiScore).toBe(1); // 越界夹取
    expect(parsed[2]!.aiDims).toEqual([]);
    expect(parsed[2]!.aiScore).toBe(0.5); // 缺分默认
  });

  it("容错：markdown 包裹、字符串内控制字符、垃圾输入", () => {
    const wrapped = '```json\n[{"repo":"a/b","ai_score":0.1}]\n```';
    expect(parsePhase1ScoringResult(wrapped)).toHaveLength(1);

    const ctrl = '[{"repo":"a/b","ai_dims":["可\n视化"],"ai_score":0.3}]';
    // 裸换行被转义成合法 JSON 后解析回来，字符串值保留换行（与 parseScoringResult 同款语义）
    expect(parsePhase1ScoringResult(ctrl)[0]!.aiDims).toEqual(["可\n视化"]);

    expect(parsePhase1ScoringResult("not json at all")).toEqual([]);
    expect(parsePhase1ScoringResult("")).toEqual([]);
  });
});

describe("selectForProse 精评 top-K 选择", () => {
  const mk = (repo: string, aiScore: number, starGrowth = 0, stars = 0): SelectionInput => ({
    repo,
    aiScore,
    starGrowth,
    stars,
  });

  it("按 aiScore 降序取 top-K；未入选者绝不出现在结果里", () => {
    const picked = selectForProse([mk("a", 0.9), mk("b", 0.5), mk("c", 0.7)], 2);
    expect(picked.size).toBe(2);
    expect(picked.has("a")).toBe(true);
    expect(picked.has("c")).toBe(true);
    expect(picked.has("b")).toBe(false); // 低分被筛掉 = 不进 feed = 不需要文案
  });

  it("平手裁决：先比 starGrowth 再比 stars", () => {
    const picked = selectForProse([mk("x", 0.8), mk("y", 0.8, 30), mk("z", 0.8, 30, 9999)], 1);
    expect(picked.has("z")).toBe(true); // 同分同增长比总星
  });

  it("边界：k=0 空集；k 大于候选数全取；空输入空集", () => {
    expect(selectForProse([mk("a", 1)], 0).size).toBe(0);
    expect(selectForProse([mk("a", 1), mk("b", 0.2)], 10).size).toBe(2);
    expect(selectForProse([], 5).size).toBe(0);
  });
});

describe("phase1 缓存读写往返", () => {
  it("append 后 load 原样取回；损坏文件当空不炸", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-test-"));
    const file = path.join(dir, "phase1-scores.json");

    appendPhase1Scores(
      [
        { repo: "a/b", aiDims: ["AI Agent"], aiScore: 0.9 },
        { repo: "c/d", aiDims: [], aiScore: 0.2 },
      ],
      file,
    );
    const loaded = loadPhase1Scores(file);
    expect(loaded.get("a/b")).toEqual({ repo: "a/b", aiDims: ["AI Agent"], aiScore: 0.9 });
    expect(loaded.get("c/d")!.aiScore).toBe(0.2);

    // 同 repo 重写覆盖（重筛更新分数）
    appendPhase1Scores([{ repo: "a/b", aiDims: ["学习资源"], aiScore: 0.4 }], file);
    expect(loadPhase1Scores(file).get("a/b")!.aiScore).toBe(0.4);

    fs.writeFileSync(file, "{corrupted", "utf-8");
    expect(loadPhase1Scores(file).size).toBe(0);
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("空结果不写盘", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-test-"));
    const file = path.join(dir, "phase1-scores.json");
    appendPhase1Scores([], file);
    expect(fs.existsSync(file)).toBe(false);
    fs.rmSync(dir, { recursive: true, force: true });
  });
});
