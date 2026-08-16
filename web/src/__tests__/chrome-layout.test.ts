// @ts-ignore —— 与 storage.test.ts 相同：根 vitest 跑 web 测试
import { readFileSync } from "node:fs";
// @ts-ignore
import { resolve } from "node:path";
// @ts-ignore
import { describe, expect, it } from "vitest";

const cssRaw = readFileSync(resolve("web/src/styles.css"), "utf8");
const css = cssRaw.replace(/\/\*[\s\S]*?\*\//g, "");
const app = readFileSync(resolve("web/src/App.tsx"), "utf8");

describe("顶栏是框架不是贴纸", () => {
  it("顶栏不 sticky、不用半透明玻璃底", () => {
    const header = css.match(/\.header\s*\{[^}]+\}/)?.[0] ?? "";
    expect(header).not.toMatch(/position:\s*sticky/);
    expect(header).not.toMatch(/var\(--glass-bg\)/);
    expect(header).toMatch(/position:\s*relative/);
    expect(header).toMatch(/background:\s*var\(--header-bg\)/);
    expect(css).toMatch(/--header-bg:\s*#16122a/);
  });

  it("页面锁成壳，只有顶栏下方的 app-body 滚动", () => {
    expect(css).toMatch(/html\s*\{[^}]*overflow:\s*hidden/s);
    expect(css).toMatch(/\.app\s*\{[^}]*overflow:\s*hidden/s);
    expect(css).toMatch(/\.app-body\s*\{[^}]*overflow:\s*auto/s);
    expect(app).toMatch(/className="app-body"/);
    expect(app).toMatch(/nearestScrollRoot/);
    expect(app).toMatch(/feedViewportOf/);
    expect(app).not.toMatch(/window\.scrollTo/);
  });
});

describe("侧栏离开视口左缘", () => {
  it("侧栏左边距走 --sidebar-inset，不再贴死 10px", () => {
    expect(css).toMatch(/--sidebar-inset:\s*24px/);
    const sidebar = css.match(/\.sidebar\s*\{[^}]+\}/)?.[0] ?? "";
    expect(sidebar).toMatch(/margin-left:\s*var\(--sidebar-inset\)/);
    expect(sidebar).not.toMatch(/padding:\s*20px 10px 32px;/);
    expect(sidebar).toMatch(/top:\s*0/);
  });
});
