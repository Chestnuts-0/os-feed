# -*- coding: utf-8 -*-
"""方向 2 第二轮 mockup：正交方法、差别放大。UTF-8 无 BOM。"""
import re
from pathlib import Path

OUT = Path(__file__).resolve().parent


def prefix_css(css: str, prefix: str) -> str:
    """给普通规则加前缀；@keyframes 块整段保留。"""
    out, i = [], 0
    while i < len(css):
        m = re.search(r"@keyframes\s+[\w-]+\s*\{", css[i:])
        if not m:
            out.append(_prefix_rules(css[i:], prefix))
            break
        start = i + m.start()
        out.append(_prefix_rules(css[i:start], prefix))
        brace = i + m.end() - 1
        depth = 0
        j = brace
        while j < len(css):
            if css[j] == "{":
                depth += 1
            elif css[j] == "}":
                depth -= 1
                if depth == 0:
                    j += 1
                    break
            j += 1
        out.append(css[start:j])
        i = j
    return "".join(out)


def uniq_kf(css: str, tag: str) -> str:
    names = re.findall(r"@keyframes\s+([\w-]+)", css)
    for n in names:
        css = re.sub(rf"@keyframes\s+{re.escape(n)}\b", f"@keyframes {tag}{n}", css)
        css = re.sub(rf"animation:\s+{re.escape(n)}\b", f"animation: {tag}{n}", css)
    return css


def _prefix_rules(css: str, prefix: str) -> str:
    def repl(m):
        sel, body = m.group(1).strip(), m.group(2)
        if not sel:
            return m.group(0)
        parts = [f"{prefix} {s.strip()}" for s in sel.split(",") if s.strip()]
        return ", ".join(parts) + " {" + body + "}"

    return re.sub(r"([^{}@]+)\{([^{}]*)\}", repl, css)

TOKENS = r"""
:root {
  color-scheme: dark;
  --bg: #08060e;
  --glass-gradient: linear-gradient(180deg, rgba(38, 32, 62, 0.86) 0%, rgba(26, 22, 44, 0.88) 55%, rgba(20, 17, 34, 0.9) 100%);
  --glass-gradient-hover: linear-gradient(180deg, rgba(46, 40, 74, 0.9) 0%, rgba(32, 28, 54, 0.92) 55%, rgba(24, 20, 40, 0.94) 100%);
  --detail-card-bg: linear-gradient(180deg, rgba(38, 32, 62, 0.97) 0%, rgba(26, 22, 44, 0.97) 55%, rgba(20, 17, 34, 0.97) 100%);
  --glass-border: rgba(224, 217, 255, 0.13);
  --glass-highlight-top: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  --glass-highlight-bottom: inset 0 -1px 0 rgba(255, 255, 255, 0.04);
  --glass-shadow: 0 2px 6px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.45);
  --glass-bg: rgba(26, 22, 44, 0.72);
  --side-group-bg: linear-gradient(180deg, rgba(38, 32, 62, 0.82) 0%, rgba(24, 20, 40, 0.86) 100%);
  --text: #f0f0f5; --text-secondary: #a0a3b1; --text-muted: #6b6e7f;
  --accent: #6366f1; --accent-glow: rgba(99, 102, 241, 0.4);
  --accent-light: rgba(99, 102, 241, 0.12);
  --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  --danger: #ef4444; --success: #22c55e; --warning: #f59e0b;
  --border: rgba(255, 255, 255, 0.08); --radius-sm: 10px;
  --font-serif: "Lora", "Noto Serif SC", "Times New Roman", "Songti SC", "SimSun", serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 17px; }
body {
  font-family: var(--font-serif);
  background: #08060e;
  background-image: linear-gradient(180deg, #120e1f 0%, #0b0914 45%, #05040a 100%);
  background-attachment: fixed; color: var(--text); line-height: 1.65; min-height: 100vh;
}
button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }
.banner {
  position: sticky; top: 0; z-index: 50; background: var(--glass-bg);
  border-bottom: 1px solid var(--border); padding: 12px 24px 14px;
}
.banner-kicker { font-size: 0.72rem; color: var(--text-muted); }
.banner h1 { font-size: 1.05rem; font-weight: 700; margin: 2px 0 4px; }
.banner p { font-size: 0.85rem; color: var(--text-secondary); }
.banner .hint { margin-top: 6px; font-size: 0.78rem; color: var(--accent); }
.back { display: inline-block; margin-top: 8px; font-size: 0.78rem; color: var(--text-muted); text-decoration: none; }
.back:hover { color: var(--accent); }
.feed { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 24px; max-width: 1100px; }
.card {
  background: var(--glass-gradient); border: 1px solid var(--glass-border); border-radius: 18px;
  padding: 20px; box-shadow: var(--glass-highlight-top), var(--glass-highlight-bottom), var(--glass-shadow);
  position: relative; overflow: hidden; cursor: pointer;
}
.card-header { display: flex; gap: 10px; margin-bottom: 10px; }
.avatar { width: 40px; height: 40px; border-radius: 10px; background: var(--accent-light); border: 1px solid var(--border); flex-shrink: 0; }
.repo-owner { color: var(--text-secondary); font-size: 0.92rem; }
.repo-name { font-weight: 700; color: var(--accent); font-size: 0.92rem; display: inline-block; }
.card-sub { font-size: 0.74rem; color: var(--text-muted); margin-top: 3px; }
.summary {
  font-size: 0.98rem; font-weight: 700; line-height: 1.5; color: var(--text);
  margin-bottom: 8px; padding: 8px 12px;
  background: linear-gradient(135deg, var(--accent-light), transparent);
  border-left: 3px solid var(--accent); border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.reason { font-size: 0.82rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 10px;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.meta { font-size: 0.78rem; color: var(--text-secondary); }
.stars { color: var(--warning); font-weight: 600; }
.layout { display: flex; align-items: flex-start; }
.sidebar { width: 192px; flex-shrink: 0; padding: 20px 10px; }
.side-group-box {
  background: var(--side-group-bg); border: 1px solid var(--glass-border); border-radius: 18px;
  box-shadow: var(--glass-highlight-top), var(--glass-highlight-bottom), var(--glass-shadow);
  padding: 14px 12px 8px;
}
.side-group { font-size: 0.95rem; font-weight: 700; color: var(--text-secondary); padding: 0 4px 8px; }
.side-item {
  display: block; width: 100%; padding: 10px 12px; margin-bottom: 4px; border-radius: var(--radius-sm);
  color: var(--text-secondary); font-size: 0.92rem; text-align: left;
}
.side-item:hover { background: var(--accent-light); color: var(--text); }
.side-item.active {
  background: var(--accent-gradient); color: #fff; font-weight: 700;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.25);
}
.feed-wrap { flex: 1; min-width: 0; }
.grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; padding: 16px; }
.col { border: 1px solid var(--glass-border); border-radius: 14px; overflow: hidden; background: rgba(20, 17, 34, 0.5); position: relative; }
.col-h { padding: 10px 12px; border-bottom: 1px solid var(--border); }
.col-h strong { display: block; font-size: 0.88rem; }
.col-h span { font-size: 0.74rem; color: var(--text-muted); }
.col-b { padding: 12px; }
.col .feed { display: grid; grid-template-columns: 1fr; gap: 12px; padding: 0; max-width: none; }
"""

CARDS = [
    ("facebook", "react", "声明式 UI 库，组件化写界面的事实标准"),
    ("vercel", "next.js", "React 全栈框架，路由和渲染策略开箱即用"),
    ("microsoft", "vscode", "代码编辑器，插件生态把编辑器变成 IDE"),
    ("openai", "whisper", "开源语音识别，本地也能把录音转成字"),
]


def card_html(n=2, extra_class=""):
    bits = []
    for owner, name, summary in CARDS[:n]:
        cls = f'card {extra_class}'.strip()
        bits.append(f"""
<div class="{cls}">
  <div class="card-header"><div class="avatar"></div>
    <div><div><span class="repo-owner">{owner}</span> / <span class="repo-name">{name}</span></div>
    <div class="card-sub">2小时前 · TypeScript</div></div>
  </div>
  <div class="summary">{summary}</div>
  <div class="reason">把页面拆成可组合的组件，状态变了就自动重绘。适合学前端或要搭中后台的人收藏。</div>
  <div class="meta"><span class="stars">★ 233.1k</span></div>
</div>""")
    return "".join(bits)


SIDEBAR = """
<aside class="sidebar"><div class="side-group-box">
  <div class="side-group">发现</div>
  <button class="side-item active" type="button" data-ch="推荐">推荐</button>
  <button class="side-item" type="button" data-ch="热门">热门</button>
  <button class="side-item" type="button" data-ch="每日">每日</button>
</div></aside>
"""

ICONS = """
<button class="action-btn like-btn" type="button" data-kind="like" aria-label="喜欢">
  <svg viewBox="0 0 24 24"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
</button>
<button class="action-btn dislike-btn" type="button" data-kind="dislike" aria-label="不喜欢">
  <svg viewBox="0 0 24 24"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
</button>
<button class="action-btn bookmark-btn" type="button" data-kind="bm" aria-label="收藏">
  <svg viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
</button>
"""


def page(title, kicker, h1, desc, hint, extra_css, body, script=""):
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700&family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
{TOKENS}
{extra_css}
</style>
</head>
<body>
<header class="banner">
  <div class="banner-kicker">{kicker}</div>
  <h1>{h1}</h1>
  <p>{desc}</p>
  <div class="hint">{hint}</div>
  <a class="back" href="./00-点菜.html">← 回点菜页</a>
</header>
{body}
{script}
</body>
</html>
"""


files = {}

# ---------- 候选1 卡片悬停 D–J ----------
HOVER = {
    "D": (
        "沉入纸面",
        "卡往里凹，和现网「浮起来」相反",
        r"""
.card { transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s; }
.card:hover {
  transform: scale(0.97);
  box-shadow: inset 0 2px 16px rgba(0,0,0,0.5), var(--glass-highlight-bottom);
}
""",
    ),
    "E": (
        "黑影加厚",
        "卡不跳，只变「厚」——没有紫晕、没有位移",
        r"""
.card { transition: box-shadow 0.35s, background 0.35s, border-color 0.35s; }
.card:hover {
  background: var(--glass-gradient-hover);
  border-color: rgba(184, 153, 255, 0.35);
  box-shadow: var(--glass-highlight-top), var(--glass-highlight-bottom),
    0 12px 28px rgba(0,0,0,0.55), 0 28px 56px rgba(0,0,0,0.4);
}
""",
    ),
    "F": (
        "左侧色条",
        "左边从上往下长出一条 accent，卡本身不移动",
        r"""
.card::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
  background: var(--accent-gradient);
  transform: scaleY(0); transform-origin: top;
  transition: transform 0.28s ease;
}
.card:hover::before { transform: scaleY(1); }
.card:hover { background: var(--glass-gradient-hover); }
""",
    ),
    "G": (
        "邻卡压暗",
        "悬一张，其余变淡——阅读焦点，不是单卡跳舞",
        r"""
.feed.dim-mode .card { transition: opacity 0.28s ease; }
.feed.dim-mode .card.is-dim { opacity: 0.32; }
.feed.dim-mode .card:hover { background: var(--glass-gradient-hover); }
""",
    ),
    "H": (
        "字在动",
        "卡钉死，只有仓库名和摘要往右挪 10px",
        r"""
.repo-name, .summary { transition: transform 0.28s ease; }
.card:hover .repo-name, .card:hover .summary { transform: translateX(10px); }
""",
    ),
    "J": (
        "抬得更高",
        "现网是 4px，这版 10px，专门把「浮」做明显",
        r"""
.card { transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s, background 0.35s; }
.card:hover {
  background: var(--glass-gradient-hover);
  transform: translateY(-10px);
  box-shadow: var(--glass-highlight-top), var(--glass-highlight-bottom), var(--glass-shadow);
}
""",
    ),
}

G_SCRIPT = """
<script>
const feed = document.querySelector('.feed');
if (feed) {
  feed.classList.add('dim-mode');
  const cards = [...feed.querySelectorAll('.card')];
  cards.forEach(c => {
    c.addEventListener('mouseenter', () => cards.forEach(o => o.classList.toggle('is-dim', o !== c)));
    c.addEventListener('mouseleave', () => cards.forEach(o => o.classList.remove('is-dim')));
  });
}
</script>
"""

for key, (name, hint, css) in HOVER.items():
    n = 4 if key == "G" else 2
    files[f"card-hover-{key}.html"] = page(
        f"卡片悬停 · {key}",
        f"候选 1 · 第二轮 · 方案 {key} · {name}",
        f"卡片悬停 · {name}",
        "第一轮 B/C 只有 2px 之差所以看不出。这一轮每种方法完全不同。",
        hint,
        css,
        f'<div class="layout">{SIDEBAR}<div class="feed-wrap"><div class="feed">{card_html(n)}</div></div></div>',
        G_SCRIPT if key == "G" else "",
    )

# 候选1 对比2
hover_cols = []
hover_css = []
for key, (name, hint, css) in HOVER.items():
    hover_css.append(prefix_css(css, f".v{key}"))
    n = 4 if key == "G" else 2
    hover_cols.append(
        f'<div class="col v{key}"><div class="col-h"><strong>{key} · {name}</strong><span>{hint}</span></div>'
        f'<div class="col-b"><div class="feed">{card_html(n)}</div></div></div>'
    )

files["card-hover-对比2.html"] = page(
    "卡片悬停 · 第二轮对比",
    "候选 1 · 第二轮 · 六种方法并排",
    "卡片悬停 · 方法矩阵",
    "D 凹进去 / E 变厚 / F 左边长条 / G 旁卡变淡 / H 字挪 / J 抬 10px。现网对照仍是第一轮 C。",
    "每列自己悬停。差应当一眼能看出来；看不出的列告诉我。",
    "\n".join(hover_css) + ".grid { grid-template-columns: 1fr 1fr 1fr; }\n.col .feed { grid-template-columns: 1fr; }",
    f'<div class="grid">{"".join(hover_cols)}</div>'
    + """
<script>
document.querySelectorAll('.vG .feed').forEach(feed => {
  feed.classList.add('dim-mode');
  const cards = [...feed.querySelectorAll('.card')];
  cards.forEach(c => {
    c.addEventListener('mouseenter', () => cards.forEach(o => o.classList.toggle('is-dim', o !== c)));
    c.addEventListener('mouseleave', () => cards.forEach(o => o.classList.remove('is-dim')));
  });
});
</script>
""",
)

# ---------- 候选2 弹窗入场 ----------
DETAIL_BASE = r"""
.detail-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.75); z-index: 200;
  display: none; align-items: flex-start; justify-content: center; padding: 8vh 20px;
}
.detail-overlay.open { display: flex; }
.detail-card {
  background: var(--detail-card-bg); border-radius: 20px; border: 1px solid rgba(255,255,255,0.14);
  max-width: 720px; width: 100%; padding: 32px;
  box-shadow: var(--glass-highlight-top), var(--glass-highlight-bottom), 0 24px 80px rgba(0,0,0,0.5);
  position: relative;
}
.detail-close {
  position: absolute; top: 16px; right: 16px; width: 36px; height: 36px; border-radius: 50%;
  background: var(--accent-light); color: var(--text-secondary);
}
.retry { margin: 16px 24px 0; padding: 7px 16px; border-radius: 20px; border: 1px solid var(--border); color: var(--text-secondary); font-size: 0.82rem; }
"""

DETAIL_ANIM = {
    "D": (
        "中心放大",
        "从 0.88 缩开放大到 1，不是上滑",
        r"""
.detail-overlay.open { animation: ov 0.18s ease; }
.detail-overlay.open .detail-card { animation: pop 0.28s ease; }
@keyframes ov { from { opacity: 0; } to { opacity: 1; } }
@keyframes pop { from { transform: scale(0.88); opacity: 0; } to { transform: scale(1); opacity: 1; } }
""",
    ),
    "E": (
        "右侧滑入",
        "从右边来 48px，方向和现网上滑完全不同",
        r"""
.detail-overlay.open { animation: ov 0.18s ease; }
.detail-overlay.open .detail-card { animation: fromRight 0.32s ease; }
@keyframes ov { from { opacity: 0; } to { opacity: 1; } }
@keyframes fromRight { from { transform: translateX(48px); opacity: 0; } to { transform: none; opacity: 1; } }
""",
    ),
    "F": (
        "先遮罩后卡片",
        "先黑 180ms，卡片再出现——两段节奏",
        r"""
.detail-overlay.open { animation: ov 0.18s ease; }
.detail-overlay.open .detail-card { animation: late 0.28s ease 0.18s both; }
@keyframes ov { from { opacity: 0; } to { opacity: 1; } }
@keyframes late { from { transform: translateY(16px); opacity: 0; } to { transform: none; opacity: 1; } }
""",
    ),
    "G": (
        "过冲回落",
        "冲过目标再弹回，一眼能感到「顿」",
        r"""
.detail-overlay.open { animation: ov 0.16s ease; }
.detail-overlay.open .detail-card { animation: overshoot 0.45s cubic-bezier(0.22, 1.2, 0.36, 1); }
@keyframes ov { from { opacity: 0; } to { opacity: 1; } }
@keyframes overshoot {
  0% { transform: translateY(28px) scale(0.97); opacity: 0; }
  70% { transform: translateY(-8px) scale(1.015); opacity: 1; }
  100% { transform: none; opacity: 1; }
}
""",
    ),
    "J": (
        "几乎瞬间",
        "40ms 切出来，像换一页纸，故意不做动画",
        r"""
.detail-overlay.open { animation: ov 0.04s linear; }
.detail-overlay.open .detail-card { animation: none; }
@keyframes ov { from { opacity: 0; } to { opacity: 1; } }
""",
    ),
}

DETAIL_BODY = f"""
<button class="retry" id="retry" type="button">再看一次入场</button>
<div class="layout">{SIDEBAR}<div class="feed-wrap"><div class="feed">{card_html(2)}</div></div></div>
<div class="detail-overlay" id="ov">
  <div class="detail-card" id="dc">
    <button class="detail-close" id="x" type="button">×</button>
    <div><span class="repo-owner">facebook</span> / <span class="repo-name">react</span></div>
    <p style="margin-top:12px;color:var(--text-secondary)">关了再开，只看入场方法。</p>
  </div>
</div>
"""
DETAIL_JS = """
<script>
const overlay = document.getElementById('ov');
function openDetail() { overlay.classList.remove('open'); void overlay.offsetWidth; overlay.classList.add('open'); }
function closeDetail() { overlay.classList.remove('open'); }
document.querySelectorAll('.card').forEach(el => el.addEventListener('click', openDetail));
document.getElementById('retry').addEventListener('click', openDetail);
document.getElementById('x').addEventListener('click', closeDetail);
overlay.addEventListener('click', e => { if (e.target === overlay) closeDetail(); });
setTimeout(openDetail, 280);
</script>
"""

for key, (name, hint, css) in DETAIL_ANIM.items():
    files[f"detail-enter-{key}.html"] = page(
        f"弹窗入场 · {key}",
        f"候选 2 · 第二轮 · 方案 {key} · {name}",
        f"弹窗入场 · {name}",
        "第一轮 B/C 是 8px vs 20px。这一轮换方法：放大 / 侧滑 / 错开 / 过冲 / 瞬间。",
        hint,
        DETAIL_BASE + css,
        DETAIL_BODY,
        DETAIL_JS,
    )

# H 共享元素（独立整页）
files["detail-enter-H.html"] = page(
    "弹窗入场 · H",
    "候选 2 · 第二轮 · 方案 H · 从卡片长出",
    "弹窗入场 · 从这张卡放大",
    "点某一张卡，弹窗从那张卡的位置长到中央。和上滑/淡入都不是一类动作。",
    "点左边任意一张。关了再点另一张。",
    DETAIL_BASE + r"""
.detail-overlay.open { display: flex; }
.detail-card { opacity: 0; }
.detail-card.ready { opacity: 1; }
""",
    DETAIL_BODY,
    """
<script>
const overlay = document.getElementById('ov');
const dc = document.getElementById('dc');
function closeDetail() {
  overlay.classList.remove('open');
  dc.classList.remove('ready');
  dc.style.transition = 'none';
  dc.style.transform = '';
}
function openFrom(card) {
  overlay.classList.add('open');
  dc.classList.remove('ready');
  dc.style.transition = 'none';
  const r = card.getBoundingClientRect();
  const d = dc.getBoundingClientRect();
  const dx = r.left - d.left, dy = r.top - d.top;
  const sx = r.width / d.width, sy = r.height / d.height;
  dc.style.transformOrigin = 'top left';
  dc.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(' + sx + ',' + sy + ')';
  dc.style.opacity = '1';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    dc.style.transition = 'transform 0.38s cubic-bezier(0.4,0,0.2,1)';
    dc.style.transform = 'translate(0,0) scale(1)';
    dc.classList.add('ready');
  }));
}
document.querySelectorAll('.card').forEach(el => el.addEventListener('click', () => {
  closeDetail();
  requestAnimationFrame(() => openFrom(el));
}));
document.getElementById('retry').addEventListener('click', () => {
  const c = document.querySelector('.card');
  closeDetail();
  requestAnimationFrame(() => openFrom(c));
});
document.getElementById('x').addEventListener('click', closeDetail);
overlay.addEventListener('click', e => { if (e.target === overlay) closeDetail(); });
</script>
""",
)

# 候选2 对比2（不含 H，H 需整页）
dcols = []
dcss = [
    prefix_css(
        DETAIL_BASE.replace("position: fixed", "position: absolute").replace(
            "padding: 8vh 20px", "padding: 20px 12px"
        ),
        ".col",
    )
    + ".col { min-height: 380px; }\n.mini { padding: 6px 12px; border-radius: 14px; border: 1px solid var(--border); font-size: 0.8rem; margin-bottom: 8px; color: var(--text-secondary); }\n"
]
for key, (name, hint, css) in DETAIL_ANIM.items():
    dcss.append(prefix_css(uniq_kf(css, key), f".v{key}"))
    dcols.append(f"""
<div class="col v{key}">
  <div class="col-h"><strong>{key} · {name}</strong><span>{hint}</span></div>
  <div class="col-b">
    <button class="mini" type="button" data-open="{key}">打开</button>
    {card_html(1)}
    <div class="detail-overlay" id="ov{key}">
      <div class="detail-card"><button class="detail-close" type="button" data-x="{key}">×</button>
      <div>方案 {key} · {name}</div></div>
    </div>
  </div>
</div>""")

files["detail-enter-对比2.html"] = page(
    "弹窗入场 · 第二轮对比",
    "候选 2 · 第二轮 · 五种方法并排（H 从卡片长出见单独页）",
    "弹窗入场 · 方法矩阵",
    "D 放大 / E 右侧来 / F 两段式 / G 过冲 / J 瞬间。H 共享元素单独打开。",
    "每列点「打开」。H 请开独立页，格子里做不像。",
    "\n".join(dcss),
    f'<div class="grid">{"".join(dcols)}</div><p style="padding:0 16px 24px;font-size:0.85rem;"><a class="back" href="./detail-enter-H.html">单独看 H · 从卡片长出 →</a></p>'
    + """
<script>
function openK(k){ const ov=document.getElementById('ov'+k); ov.classList.remove('open'); void ov.offsetWidth; ov.classList.add('open'); }
function closeK(k){ document.getElementById('ov'+k).classList.remove('open'); }
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openK(b.dataset.open); }));
document.querySelectorAll('[data-x]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); closeK(b.dataset.x); }));
document.querySelectorAll('.detail-overlay').forEach(ov => ov.addEventListener('click', e => { if (e.target===ov) ov.classList.remove('open'); }));
</script>
""",
)

# ---------- 候选3 按钮 ----------
ACTION_BASE = r"""
.action-row { display: flex; gap: 12px; align-items: center; padding: 8px 0 0; }
.action-btn {
  width: 52px; height: 52px; border-radius: 50%; border: 1px solid var(--border);
  color: var(--text-secondary); display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.action-btn svg { width: 22px; height: 22px; fill: none; stroke: currentColor; stroke-width: 2; }
.like-btn.active { background: rgba(239, 68, 68, 0.15); border-color: var(--danger); color: var(--danger); }
.bookmark-btn.active { background: rgba(245, 158, 11, 0.15); border-color: var(--warning); color: var(--warning); }
.demo { max-width: 480px; margin: 24px; }
"""

ACTION = {
    "D": (
        "点击弹跳",
        "悬停几乎不动，点下去才缩一下弹回",
        r"""
.action-btn { transition: border-color 0.2s, color 0.2s, background 0.2s; }
.action-btn:hover { border-color: var(--accent); color: var(--accent); }
.action-btn.pop { animation: tap 0.35s ease; }
@keyframes tap { 0% { transform: scale(1); } 40% { transform: scale(0.82); } 100% { transform: scale(1); } }
""",
    ),
    "E": (
        "圆心涟漪",
        "点击从圆心扩开一圈再消失（只播一次）",
        r"""
.action-btn { transition: border-color 0.2s, color 0.2s; }
.action-btn:hover { border-color: var(--accent); color: var(--accent); }
.action-btn::after {
  content: ""; position: absolute; inset: 0; border-radius: 50%;
  background: var(--accent); opacity: 0; transform: scale(0);
}
.action-btn.rippling::after { animation: ripple 0.5s ease-out; }
@keyframes ripple {
  0% { transform: scale(0); opacity: 0.35; }
  100% { transform: scale(2.4); opacity: 0; }
}
""",
    ),
    "F": (
        "图标自己跳",
        "圆底钉死，只有图标往上跳",
        r"""
.action-btn svg { transition: transform 0.22s ease; }
.action-btn:hover { border-color: var(--accent); color: var(--accent); }
.action-btn:hover svg { transform: translateY(-5px) scale(1.2); }
""",
    ),
    "G": (
        "整圆填色",
        "悬停变成实心 accent 圆，反差最大",
        r"""
.action-btn { transition: background 0.22s, color 0.22s, border-color 0.22s; }
.action-btn:hover {
  background: var(--accent-gradient); color: #fff; border-color: transparent;
}
""",
    ),
    "H": (
        "点击光环",
        "点一下向外扩一圈光环（只一次，不循环）",
        r"""
.action-btn { transition: border-color 0.2s, color 0.2s; overflow: visible; }
.action-btn:hover { border-color: var(--accent); color: var(--accent); }
.action-btn.ring { animation: ring 0.55s ease-out; }
@keyframes ring {
  0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.5); }
  100% { box-shadow: 0 0 0 16px rgba(99, 102, 241, 0); }
}
""",
    ),
    "J": (
        "压扁回弹",
        "按下纵向压扁，松手恢复——和现网等比放大不是一类",
        r"""
.action-btn { transition: transform 0.18s ease, border-color 0.2s, color 0.2s; }
.action-btn:hover { border-color: var(--accent); color: var(--accent); }
.action-btn:active { transform: scale(1.08, 0.82); }
""",
    ),
}

ACTION_JS = """
<script>
document.querySelectorAll('.action-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.kind === 'like' || btn.dataset.kind === 'bm') btn.classList.toggle('active');
    btn.classList.remove('pop', 'rippling', 'ring');
    void btn.offsetWidth;
    btn.classList.add('pop', 'rippling', 'ring');
  });
});
</script>
"""

for key, (name, hint, css) in ACTION.items():
    files[f"action-feedback-{key}.html"] = page(
        f"按钮反馈 · {key}",
        f"候选 3 · 第二轮 · 方案 {key} · {name}",
        f"操作按钮 · {name}",
        "第一轮 B/C 是轻抬 vs 放大 1.1。这一轮换机制：点按 / 涟漪 / 图标跳 / 填色 / 光环 / 压扁。",
        hint,
        ACTION_BASE + css,
        f'<div class="card demo"><div class="summary">悬停，再点喜欢 / 收藏</div><div class="action-row">{ICONS}</div></div>',
        ACTION_JS,
    )

acols, acss = [], [ACTION_BASE]
for key, (name, hint, css) in ACTION.items():
    acss.append(prefix_css(uniq_kf(css, key), f".v{key}"))
    acols.append(
        f'<div class="col v{key}"><div class="col-h"><strong>{key} · {name}</strong><span>{hint}</span></div>'
        f'<div class="col-b"><div class="action-row">{ICONS}</div></div></div>'
    )

files["action-feedback-对比2.html"] = page(
    "按钮反馈 · 第二轮对比",
    "候选 3 · 第二轮 · 六种方法并排",
    "操作按钮 · 方法矩阵",
    "D 点按弹跳 / E 涟漪 / F 图标跳 / G 填满 / H 光环 / J 压扁。现网对照仍是第一轮 C。",
    "每列悬停并点击。",
    "\n".join(acss),
    f'<div class="grid">{"".join(acols)}</div>' + ACTION_JS,
)

# ---------- 新候选 6 频道切换入场 ----------
CH_A = r"""
.feed.enter .card { animation: fadein 0.28s ease both; }
@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
"""
CH_B = r"""
.feed.enter .card { animation: up 0.32s ease both; }
.feed.enter .card:nth-child(1) { animation-delay: 0s; }
.feed.enter .card:nth-child(2) { animation-delay: 0.07s; }
.feed.enter .card:nth-child(3) { animation-delay: 0.14s; }
.feed.enter .card:nth-child(4) { animation-delay: 0.21s; }
@keyframes up { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
"""
CH_C = "/* 现网：瞬间切换，无入场 */\n"
CH_JS = """
<script>
function replay() {
  const feed = document.querySelector('.feed');
  feed.classList.remove('enter');
  void feed.offsetWidth;
  feed.classList.add('enter');
}
document.querySelectorAll('.side-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.side-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    replay();
  });
});
const r = document.getElementById('retry');
if (r) r.addEventListener('click', replay);
replay();
</script>
"""
for key, name, hint, css in [
    ("A", "整列淡入", "切频道时四张卡一起淡入 280ms", CH_A),
    ("B", "错开入场", "四张卡依次上浮，间隔 70ms", CH_B),
    ("C", "现网瞬间", "切了就在，没有任何入场", CH_C),
]:
    files[f"channel-enter-{key}.html"] = page(
        f"频道切换 · {key}",
        f"候选 6 · 新项 · 方案 {key} · {name}",
        f"频道切换入场 · {name}",
        "切侧栏频道时内容怎么出现。现网是瞬间替换。",
        hint + "。点侧栏或「再看一次」。",
        css + ".retry { margin: 16px 24px 0; padding: 7px 16px; border-radius: 20px; border: 1px solid var(--border); color: var(--text-secondary); font-size: 0.82rem; }",
        f'<button class="retry" id="retry" type="button">再看一次</button><div class="layout">{SIDEBAR}<div class="feed-wrap"><div class="feed">{card_html(4)}</div></div></div>',
        CH_JS,
    )

files["channel-enter-对比.html"] = page(
    "频道切换 · 对比",
    "候选 6 · A/B/C",
    "频道切换入场 · 对比",
    "A 一起淡 / B 错开上浮 / C 现网瞬间。",
    "每列点「再看一次」或点该列侧栏。",
    prefix_css(uniq_kf(CH_A, "A"), ".vA")
    + prefix_css(uniq_kf(CH_B, "B"), ".vB")
    + ".mini { padding: 6px 12px; border-radius: 14px; border: 1px solid var(--border); font-size: 0.8rem; margin-bottom: 8px; color: var(--text-secondary); }",
    """
<div class="grid">
<div class="col vA"><div class="col-h"><strong>A · 整列淡入</strong></div><div class="col-b"><button class="mini" data-r="A" type="button">再看一次</button><div class="feed">"""
    + card_html(4)
    + """</div></div></div>
<div class="col vB"><div class="col-h"><strong>B · 错开入场</strong></div><div class="col-b"><button class="mini" data-r="B" type="button">再看一次</button><div class="feed">"""
    + card_html(4)
    + """</div></div></div>
<div class="col vC"><div class="col-h"><strong>C · 现网瞬间</strong></div><div class="col-b"><button class="mini" data-r="C" type="button">再看一次</button><div class="feed">"""
    + card_html(4)
    + """</div></div></div>
</div>
<script>
document.querySelectorAll('[data-r]').forEach(b => b.addEventListener('click', () => {
  const feed = document.querySelector('.v' + b.dataset.r + ' .feed');
  feed.classList.remove('enter'); void feed.offsetWidth; feed.classList.add('enter');
}));
document.querySelectorAll('.vA .feed, .vB .feed').forEach(f => f.classList.add('enter'));
</script>
""",
)

# ---------- 新候选 7 点赞成功 ----------
LIKE_A = r"""
.card::before {
  content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: var(--accent-gradient); opacity: 0; transform: scaleX(0); transform-origin: left;
}
.card.flash::before { animation: bar 0.7s ease; }
@keyframes bar {
  0% { opacity: 1; transform: scaleX(0); }
  35% { opacity: 1; transform: scaleX(1); }
  100% { opacity: 0; transform: scaleX(1); }
}
"""
LIKE_B = r"""
.fly {
  position: absolute; pointer-events: none; color: var(--danger);
  font-size: 1.2rem; opacity: 0;
}
.card.flash .fly { animation: fly 0.7s ease forwards; }
@keyframes fly {
  0% { opacity: 1; transform: translate(0,0) scale(1); }
  100% { opacity: 0; transform: translate(48px, -56px) scale(1.4); }
}
"""
LIKE_C = "/* 现网：只把按钮变成红色，卡片无反馈 */\n"
LIKE_JS = """
<script>
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const card = btn.closest('.card');
    card.classList.remove('flash');
    void card.offsetWidth;
    if (btn.classList.contains('active')) card.classList.add('flash');
  });
});
</script>
"""
LIKE_CARD = f"""
<div class="card" style="max-width:520px;margin:24px;">
  <span class="fly">♥</span>
  <div class="card-header"><div class="avatar"></div>
    <div><div><span class="repo-owner">facebook</span> / <span class="repo-name">react</span></div></div>
  </div>
  <div class="summary">点喜欢，看卡片上有没有多余反馈</div>
  <div class="action-row">{ICONS}</div>
</div>
"""
for key, name, hint, css in [
    ("A", "顶条扫过一次", "喜欢成功时顶上色条从左长出再淡掉（一次）", LIKE_A),
    ("B", "心飞到右上", "一颗心从按钮飞走消失（一次，不循环）", LIKE_B),
    ("C", "现网只变色", "只有按钮变红，卡片无事发生", LIKE_C),
]:
    files[f"like-success-{key}.html"] = page(
        f"点赞反馈 · {key}",
        f"候选 7 · 新项 · 方案 {key} · {name}",
        f"点赞成功 · {name}",
        "交互点出现、结束归零。现网点赞只改按钮颜色。",
        hint,
        ACTION_BASE + css,
        LIKE_CARD,
        LIKE_JS,
    )

files["like-success-对比.html"] = page(
    "点赞反馈 · 对比",
    "候选 7 · A/B/C",
    "点赞成功 · 对比",
    "A 顶条一次 / B 心飞走 / C 现网只变按钮。",
    "每列点喜欢。",
    ACTION_BASE
    + prefix_css(uniq_kf(LIKE_A, "A"), ".vA")
    + prefix_css(uniq_kf(LIKE_B, "B"), ".vB")
    + ".col .card { max-width: none; margin: 0; }",
    """
<div class="grid">
"""
    + "".join(
        f'<div class="col v{k}"><div class="col-h"><strong>{k} · {n}</strong></div><div class="col-b">'
        f'<div class="card"><span class="fly">♥</span><div class="summary">{n}</div><div class="action-row">{ICONS}</div></div></div></div>'
        for k, n in [("A", "顶条扫过"), ("B", "心飞走"), ("C", "只变按钮")]
    )
    + "</div>"
    + LIKE_JS,
)

# ---------- 新候选 8 点踩消失 ----------
DIS_A = r"""
.card.dismissing { animation: goRight 0.35s ease forwards; pointer-events: none; }
@keyframes goRight { to { opacity: 0; transform: translateX(48px); } }
"""
DIS_B = r"""
.card.dismissing { animation: shrink 0.35s ease forwards; pointer-events: none; }
@keyframes shrink { to { opacity: 0; transform: scale(0.82) rotate(2deg); } }
"""
DIS_C = r"""
.card.dismissing { animation: card-fade-out 0.3s ease forwards; pointer-events: none; }
@keyframes card-fade-out { to { opacity: 0; transform: scale(0.96); } }
"""
DIS_JS = """
<script>
document.querySelectorAll('.dislike-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    card.classList.remove('dismissing');
    void card.offsetWidth;
    card.classList.add('dismissing');
    setTimeout(() => { card.classList.remove('dismissing'); }, 450);
  });
});
const r = document.getElementById('retry');
if (r) r.addEventListener('click', () => document.querySelector('.dislike-btn').click());
</script>
"""
for key, name, hint, css in [
    ("A", "向右滑走", "点踩后整卡向右 48px 淡出", DIS_A),
    ("B", "缩小带一点转", "缩小到 0.82 并转 2°", DIS_B),
    ("C", "现网对照", "现网：缩到 0.96 再淡出", DIS_C),
]:
    files[f"dismiss-{key}.html"] = page(
        f"点踩消失 · {key}",
        f"候选 8 · 新项 · 方案 {key} · {name}",
        f"点踩消失 · {name}",
        "不喜欢时卡片怎么离开。现网是几乎看不出的缩小。",
        hint + "。点不喜欢，动画结束会自动回来方便再看。",
        ACTION_BASE + css + ".retry { margin: 16px 24px 0; padding: 7px 16px; border-radius: 20px; border: 1px solid var(--border); color: var(--text-secondary); }",
        f'<button class="retry" id="retry" type="button">再看一次</button><div class="card demo"><div class="summary">点不喜欢看离开方式</div><div class="action-row">{ICONS}</div></div>',
        DIS_JS,
    )

files["dismiss-对比.html"] = page(
    "点踩消失 · 对比",
    "候选 8 · A/B/C",
    "点踩消失 · 对比",
    "A 右滑 / B 缩小略转 / C 现网微缩。",
    "每列点不喜欢。",
    ACTION_BASE
    + prefix_css(uniq_kf(DIS_A, "A"), ".vA")
    + prefix_css(uniq_kf(DIS_B, "B"), ".vB")
    + prefix_css(uniq_kf(DIS_C, "C"), ".vC")
    + ".col .card { margin: 0; max-width: none; }",
    """
<div class="grid">
"""
    + "".join(
        f'<div class="col v{k}"><div class="col-h"><strong>{k} · {n}</strong></div><div class="col-b">'
        f'<div class="card"><div class="summary">{n}</div><div class="action-row">{ICONS}</div></div></div></div>'
        for k, n in [("A", "向右滑走"), ("B", "缩小略转"), ("C", "现网微缩")]
    )
    + "</div>"
    + DIS_JS,
)

# ---------- 新候选 9 搜索聚焦 ----------
SEARCH_BASE = r"""
.search-wrap { max-width: 640px; margin: 32px 24px; }
.search-input {
  width: 100%; padding: 12px 20px; border: 1px solid rgba(255,255,255,0.06);
  border-radius: 28px; font-size: 0.95rem; background: rgba(28, 25, 41, 0.45);
  color: var(--text); outline: none; font-family: var(--font-serif);
}
.search-input::placeholder { color: var(--text-muted); }
"""
SEARCH = {
    "A": (
        "底边长出",
        "聚焦时底边 accent 从中间向两边长，框本身不大",
        r"""
.search-box { position: relative; }
.search-box::after {
  content: ""; position: absolute; left: 24px; right: 24px; bottom: 0; height: 2px;
  background: var(--accent-gradient); transform: scaleX(0); transform-origin: center;
  transition: transform 0.28s ease;
}
.search-box:focus-within::after { transform: scaleX(1); }
""",
    ),
    "B": (
        "框略放大",
        "聚焦时整框 scale 1.04，比现网光圈更抢眼",
        r"""
.search-input { transition: transform 0.22s ease, box-shadow 0.22s; transform-origin: left center; }
.search-input:focus {
  transform: scale(1.04);
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
""",
    ),
    "C": (
        "现网光圈",
        "现网：边变 accent + 3px 浅圈，框不放大",
        r"""
.search-input { transition: all 0.2s; }
.search-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}
""",
    ),
}
SEARCH_BOX = '<div class="search-wrap"><div class="search-box"><input class="search-input" placeholder="搜索仓库、作者、关键词"></div></div>'
for key, (name, hint, css) in SEARCH.items():
    files[f"search-focus-{key}.html"] = page(
        f"搜索聚焦 · {key}",
        f"候选 9 · 新项 · 方案 {key} · {name}",
        f"搜索聚焦 · {name}",
        "点进搜索框时的反馈。现网是一圈浅光。",
        hint + "。点进输入框。",
        SEARCH_BASE + css,
        SEARCH_BOX,
    )
files["search-focus-对比.html"] = page(
    "搜索聚焦 · 对比",
    "候选 9 · A/B/C",
    "搜索聚焦 · 对比",
    "A 底边长出 / B 框放大 / C 现网光圈。",
    "每列点进输入框。",
    SEARCH_BASE + "\n".join(prefix_css(css, f".v{k}") for k, (_, _, css) in SEARCH.items())
    + ".col .search-wrap { margin: 0; max-width: none; }",
    '<div class="grid">'
    + "".join(
        f'<div class="col v{k}"><div class="col-h"><strong>{k} · {n}</strong></div><div class="col-b">{SEARCH_BOX}</div></div>'
        for k, n in [("A", "底边长出"), ("B", "框放大"), ("C", "现网光圈")]
    )
    + "</div>",
)

# ---------- 新候选 10 刷完空态 ----------
EMPTY_A = r"""
.empty { text-align: center; padding: 48px 24px; color: var(--text-muted); }
.ghost {
  max-width: 420px; margin: 20px auto 0; height: 120px; border-radius: 18px;
  border: 1px dashed var(--glass-border); background: transparent; opacity: 0.7;
}
"""
EMPTY_B = r"""
.empty { text-align: center; padding: 56px 24px; }
.empty h2 { font-size: 1.6rem; font-weight: 700; margin-bottom: 10px; }
.empty p { color: var(--text-secondary); margin-bottom: 20px; }
.go {
  display: inline-block; padding: 8px 22px; border-radius: 20px;
  background: var(--accent-gradient); color: #fff; font-weight: 600; font-size: 0.9rem;
}
"""
EMPTY_C = r"""
.status { text-align: center; padding: 60px 24px; color: var(--text-muted); }
"""
files["empty-end-A.html"] = page(
    "刷完空态 · A", "候选 10 · 新项 · 方案 A · 虚线残卡", "刷完空态 · 虚线残卡",
    "列表到底时怎么说「没有了」。现网是一句小灰字。",
    "一张虚线空卡，暗示「这里本来有内容」。",
    EMPTY_A,
    '<div class="empty"><p>这一频道暂时刷完了</p><div class="ghost"></div></div>',
)
files["empty-end-B.html"] = page(
    "刷完空态 · B", "候选 10 · 新项 · 方案 B · 大标题收束", "刷完空态 · 大标题收束",
    "列表到底时怎么说「没有了」。现网是一句小灰字。",
    "衬线大标题 + 回推荐，像一篇读完。",
    EMPTY_B,
    '<div class="empty" style="max-width:520px;margin:0 auto;"><h2>刷完了</h2><p>今天这一频道的项目都看过了。</p><button class="go" type="button">回推荐</button></div>',
)
files["empty-end-C.html"] = page(
    "刷完空态 · C", "候选 10 · 新项 · 方案 C · 现网对照", "刷完空态 · 现网对照",
    "列表到底时怎么说「没有了」。现网是一句小灰字。",
    "本版=线上：居中 muted 小字。",
    EMPTY_C,
    '<div class="status">没有更多了</div>',
)
files["empty-end-对比.html"] = page(
    "刷完空态 · 对比",
    "候选 10 · A/B/C",
    "刷完空态 · 对比",
    "A 虚线残卡 / B 大标题收束 / C 现网小灰字。",
    "三列直接看，不用点。",
    prefix_css(EMPTY_A, ".vA") + prefix_css(EMPTY_B, ".vB") + prefix_css(EMPTY_C, ".vC"),
    """
<div class="grid">
<div class="col vA"><div class="col-h"><strong>A · 虚线残卡</strong></div><div class="col-b"><div class="empty"><p>这一频道暂时刷完了</p><div class="ghost"></div></div></div></div>
<div class="col vB"><div class="col-h"><strong>B · 大标题收束</strong></div><div class="col-b"><div class="empty"><h2>刷完了</h2><p>今天这一频道的项目都看过了。</p><button class="go" type="button">回推荐</button></div></div></div>
<div class="col vC"><div class="col-h"><strong>C · 现网小灰字</strong></div><div class="col-b"><div class="status">没有更多了</div></div></div>
</div>
""",
)

# ---------- 新候选 11 滚动感 ----------
SCROLL_BOX = (
    '<div class="scroll-box" id="sb"><p class="scroll-note">在这个框里滚。Windows 也会画出一条常驻滚动条。</p>'
    + card_html(4)
    + "</div>"
)
SCROLL_A = r"""
.scroll-box {
  height: 420px; overflow-y: scroll; margin: 16px 24px; padding-right: 8px;
  scrollbar-width: thin; scrollbar-color: #6366f1 rgba(255,255,255,0.08);
}
.scroll-box::-webkit-scrollbar { width: 6px; }
.scroll-box::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 6px; }
.scroll-box::-webkit-scrollbar-track { background: rgba(255,255,255,0.08); }
.scroll-note { color: var(--text-muted); font-size: 0.82rem; margin-bottom: 12px; }
"""
SCROLL_B = r"""
.scroll-box { height: 420px; overflow-y: scroll; margin: 16px 24px; position: relative; }
.scroll-progress {
  position: sticky; top: 0; height: 2px; background: var(--accent-gradient);
  transform: scaleX(0); transform-origin: left; z-index: 2;
}
.scroll-note { color: var(--text-muted); font-size: 0.82rem; margin: 8px 0 12px; }
"""
SCROLL_C = r"""
.scroll-box { height: 420px; overflow-y: scroll; margin: 16px 24px; }
.scroll-note { color: var(--text-muted); font-size: 0.82rem; margin-bottom: 12px; }
"""
SCROLL_B_JS = """
<script>
const box = document.getElementById('sb');
const bar = document.getElementById('bar');
if (box && bar) {
  box.addEventListener('scroll', () => {
    const p = box.scrollTop / (box.scrollHeight - box.clientHeight || 1);
    bar.style.transform = 'scaleX(' + p + ')';
  });
}
</script>
"""
files["scroll-feel-A.html"] = page(
    "滚动感 · A", "候选 11 · 新项 · 方案 A · 细紫滚动条", "滚动感 · 细紫滚动条",
    "列表滚动时的轨道。做了常驻框，避免 Windows 覆盖滚动条看不见。",
    "在框里滚。6px accent 条。",
    SCROLL_A, SCROLL_BOX,
)
files["scroll-feel-B.html"] = page(
    "滚动感 · B", "候选 11 · 新项 · 方案 B · 顶缘进度", "滚动感 · 顶缘进度",
    "列表滚动时的轨道。做了常驻框，避免 Windows 覆盖滚动条看不见。",
    "在框里滚。顶上一根细线跟着走。",
    SCROLL_B,
    '<div class="scroll-box" id="sb"><div class="scroll-progress" id="bar"></div><p class="scroll-note">在这个框里滚。顶线是阅读进度。</p>'
    + card_html(4)
    + "</div>",
    SCROLL_B_JS,
)
files["scroll-feel-C.html"] = page(
    "滚动感 · C", "候选 11 · 新项 · 方案 C · 现网默认", "滚动感 · 现网默认",
    "列表滚动时的轨道。做了常驻框，避免 Windows 覆盖滚动条看不见。",
    "系统默认滚动条，和线上一样。",
    SCROLL_C, SCROLL_BOX,
)
files["scroll-feel-对比.html"] = page(
    "滚动感 · 对比",
    "候选 11 · A/B/C",
    "滚动感 · 对比",
    "A 细紫条 / B 顶缘进度 / C 系统默认。",
    "每列在框里滚。",
    prefix_css(SCROLL_A, ".vA")
    + prefix_css(SCROLL_B, ".vB")
    + prefix_css(SCROLL_C, ".vC")
    + ".col .scroll-box { margin: 0; height: 280px; }",
    """
<div class="grid">
<div class="col vA"><div class="col-h"><strong>A · 细紫滚动条</strong></div><div class="col-b"><div class="scroll-box">"""
    + card_html(4)
    + """</div></div></div>
<div class="col vB"><div class="col-h"><strong>B · 顶缘进度</strong></div><div class="col-b"><div class="scroll-box" id="sb"><div class="scroll-progress" id="bar"></div>"""
    + card_html(4)
    + """</div></div></div>
<div class="col vC"><div class="col-h"><strong>C · 系统默认</strong></div><div class="col-b"><div class="scroll-box">"""
    + card_html(4)
    + """</div></div></div>
</div>
"""
    + SCROLL_B_JS,
)

# 写入
for name, html in files.items():
    path = OUT / name
    path.write_text(html, encoding="utf-8", newline="\n")
    print("wrote", name, len(html))
print("done", len(files))
