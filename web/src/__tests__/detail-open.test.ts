// @ts-ignore —— 与 storage.test.ts 相同：根 vitest 跑 web 测试
import { describe, expect, it } from "vitest";
import {
  OPEN_DURATION,
  OPEN_EASING,
  OPEN_SPRING_POINTS,
  OPEN_SPRING_RESPONSE,
  OPEN_SPRING_SAMPLES,
  afterPaint,
  destBoxFromViewport,
  openFromCard,
  sampleLinearEasing,
  springProgress,
  uniformScale,
  type Box,
} from "../detail-open.ts";

const src: Box = { left: 120, top: 180, width: 710, height: 288 };
const dest: Box = { left: 120, top: 45, width: 1200, height: 810 };

describe("uniformScale", () => {
  it("只有一个比例，等于卡片宽/详情宽", () => {
    expect(uniformScale(src, dest)).toBeCloseTo(710 / 1200, 6);
  });

  it("非法宽度返回 null", () => {
    expect(uniformScale(src, { ...dest, width: 0 })).toBeNull();
  });
});

describe("openFromCard", () => {
  it("from 是 translate3d + 单参数 scale，落到 translate3d(0) scale(1) 而不是 none", () => {
    const t = openFromCard(src, dest);
    expect(t).not.toBeNull();
    if (!t) return;
    expect(t.s).toBeCloseTo(710 / 1200, 6);
    expect(t.from).toBe(`translate3d(0px, 135px, 0) scale(${t.s})`);
    expect(t.to).toBe("translate3d(0px, 0px, 0) scale(1)");
    expect(t.from).not.toMatch(/scale\([^)]+,/);
  });
});

describe("destBoxFromViewport", () => {
  it("宽 = min(1200, 视口-40)，顶距 5vh", () => {
    expect(destBoxFromViewport(1440, 900)).toEqual({ left: 120, top: 45, width: 1200, height: 810 });
    expect(destBoxFromViewport(900, 700)).toEqual({ left: 20, top: 35, width: 860, height: 630 });
  });
});

describe("时长与缓动", () => {
  it("弹簧先密采再按曲率写进 linear()，总时长在卡片展开窗口", () => {
    expect(OPEN_EASING.startsWith("linear(")).toBe(true);
    expect(OPEN_EASING).toMatch(/\d%\s*,/);
    expect(OPEN_SPRING_SAMPLES).toBeGreaterThanOrEqual(60);
    expect(OPEN_SPRING_POINTS.length).toBeGreaterThanOrEqual(16);
    expect(OPEN_DURATION).toBeGreaterThanOrEqual(240);
    expect(OPEN_DURATION).toBeLessThanOrEqual(400);
  });

  it("linear() 折线相对真弹簧的误差小于一帧观感", () => {
    const settle = OPEN_DURATION / 1000;
    let maxErr = 0;
    for (let i = 0; i <= 100; i++) {
      const u = i / 100;
      const err = Math.abs(springProgress(u * settle) - sampleLinearEasing(OPEN_SPRING_POINTS, u));
      if (err > maxErr) maxErr = err;
    }
    expect(maxErr).toBeLessThan(0.012);
  });
});

describe("springProgress", () => {
  it("前段比匀速快，不是 S 形慢启动", () => {
    const t = OPEN_SPRING_RESPONSE * 0.3;
    expect(springProgress(t)).toBeGreaterThan(0.45);
    expect(springProgress(t)).toBeGreaterThan(t);
  });

  it("收尾贴近 1，超调不超过 2.5%", () => {
    expect(springProgress(OPEN_SPRING_RESPONSE)).toBeGreaterThan(0.88);
    expect(springProgress(OPEN_SPRING_RESPONSE * 1.5)).toBeGreaterThan(0.97);
    expect(springProgress(OPEN_SPRING_RESPONSE * 0.7)).toBeLessThan(1.025);
  });
});

describe("afterPaint", () => {
  it("第二帧才回调；cancel 之后不再调用", () => {
    const queued: FrameRequestCallback[] = [];
    const origRaf = globalThis.requestAnimationFrame;
    const origCancel = globalThis.cancelAnimationFrame;
    globalThis.requestAnimationFrame = (cb: FrameRequestCallback) => {
      queued.push(cb);
      return queued.length;
    };
    globalThis.cancelAnimationFrame = (id: number) => {
      queued[id - 1] = () => undefined;
    };
    try {
      let n = 0;
      afterPaint(() => {
        n += 1;
      });
      expect(n).toBe(0);
      queued[0](0);
      expect(n).toBe(0);
      queued[1](0);
      expect(n).toBe(1);

      afterPaint(() => {
        n += 10;
      })();
      queued[2]?.(0);
      queued[3]?.(0);
      expect(n).toBe(1);
    } finally {
      globalThis.requestAnimationFrame = origRaf;
      globalThis.cancelAnimationFrame = origCancel;
    }
  });
});
