# -*- coding: utf-8 -*-
"""第四轮对照：内敛 D、全幅 H、留卡、滚动百分比。"""
from pathlib import Path

OUT = Path(__file__).resolve().parent
TOKENS = Path("_gen_r3.py").read_text(encoding="utf-8") if False else ""

CSS = r"""
:root {
  color-scheme: dark;
  --glass-gradient: linear-gradient(180deg, rgba(38, 32, 62, 0.86) 0%, rgba(26, 22, 44, 0.88) 55%, rgba(20, 17, 34, 0.9) 100%);
  --glass-gradient-hover: linear-gradient(180deg, rgba(46, 40, 74, 0.9) 0%, rgba(32, 28, 54, 0.92) 55%, rgba(24, 20, 40, 0.94) 100%);
  --detail-card-bg: linear-gradient(180deg, rgba(38, 32, 62, 0.97) 0%, rgba(26, 22, 44, 0.97) 55%, rgba(20, 17, 34, 0.97) 100%);
  --glass-border: rgba(224, 217, 255, 0.13);
  --glass-highlight-top: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  --glass-highlight-bottom: inset 0 -1px 0 rgba(255, 255, 255, 0.04);
  --glass-shadow: 0 2px 6px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.45);
  --glass-bg: rgba(26, 22, 44, 0.72);
  --text: #f0f0f5; --text-secondary: #a0a3b1; --text-muted: #6b6e7f;
  --accent: #6366f1; --accent-light: rgba(99, 102, 241, 0.12);
  --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  --danger: #ef4444; --border: rgba(255, 255, 255, 0.08); --radius-sm: 10px;
  --font-serif: "Lora", "Noto Serif SC", "Times New Roman", "Songti SC", "SimSun", serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 17px; }
body {
  font-family: var(--font-serif); color: var(--text); min-height: 100vh;
  background: #08060e; background-image: linear-gradient(180deg, #120e1f 0%, #0b0914 45%, #05040a 100%);
}
button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }
.banner { position: sticky; top: 0; z-index: 40; background: var(--glass-bg); border-bottom: 1px solid var(--border); padding: 12px 24px 14px; }
.banner-kicker { font-size: 0.72rem; color: var(--text-muted); }
.banner h1 { font-size: 1.05rem; font-weight: 700; margin: 2px 0 4px; }
.banner p { font-size: 0.85rem; color: var(--text-secondary); }
.hint { margin-top: 6px; font-size: 0.78rem; color: var(--accent); }
.back { display: inline-block; margin-top: 8px; font-size: 0.78rem; color: var(--text-muted); text-decoration: none; }
.pair { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; padding: 16px 20px; }
.pane { border: 1px solid var(--glass-border); border-radius: 14px; overflow: hidden; background: rgba(20,17,34,0.45); }
.pane.now { box-shadow: inset 0 0 0 1px rgba(99,102,241,0.35); }
.pane-h { padding: 8px 12px; border-bottom: 1px solid var(--border); font-size: 0.78rem; display: flex; justify-content: space-between; }
.nowtag { color: var(--accent); font-weight: 700; }
.pane-b { padding: 14px; }
.card {
  background: var(--glass-gradient); border: 1px solid var(--glass-border); border-radius: 18px;
  padding: 16px; margin-bottom: 12px; cursor: pointer; position: relative; overflow: hidden;
  box-shadow: var(--glass-highlight-top), var(--glass-highlight-bottom), var(--glass-shadow);
}
.card:last-child { margin-bottom: 0; }
.card-header { display: flex; gap: 10px; margin-bottom: 8px; }
.avatar { width: 36px; height: 36px; border-radius: 10px; background: var(--accent-light); border: 1px solid var(--border); }
.repo-owner { color: var(--text-secondary); font-size: 0.88rem; }
.repo-name { font-weight: 700; color: var(--accent); }
.summary {
  font-size: 0.9rem; font-weight: 700; padding: 6px 10px;
  background: linear-gradient(135deg, var(--accent-light), transparent);
  border-left: 3px solid var(--accent); border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}
"""


def page(title, h1, desc, hint, extra_css, body, script=""):
    return f"""<!DOCTYPE html>
<html lang="zh-CN"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700&family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>{CSS}\n{extra_css}</style>
</head><body>
<header class="banner">
  <div class="banner-kicker">第四轮 · 左侧一律现网</div>
  <h1>{h1}</h1>
  <p>{desc}</p>
  <div class="hint">{hint}</div>
  <a class="back" href="./00-点菜.html">← 回点菜页</a>
</header>
{body}
{script}
</body></html>"""


def card(o, n, s):
    return f"""<div class="card"><div class="card-header"><div class="avatar"></div>
    <div><span class="repo-owner">{o}</span> / <span class="repo-name">{n}</span></div></div>
    <div class="summary">{s}</div></div>"""


C1 = card("facebook", "react", "声明式 UI 库，组件化写界面的事实标准")
C2 = card("vercel", "next.js", "React 全栈框架，路由开箱即用")
files = {}

# 1 D 内敛
files["card-hover-D-vs-C.html"] = page(
    "卡片悬停 D内敛 · 对照现网",
    "候选 1 · 更收的沉入 vs 现网抬起",
    "F / G 已刷。上一版 D 缩到 0.97，幅度偏大。这一版只缩到 0.992，内阴影也更浅。现网仍是抬 4px + 紫晕。",
    "两列悬停同一张卡。D 往里一点点，C 往上浮。",
    r"""
.now .card { transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
.now .card::before { content:""; position:absolute; top:0; left:0; right:0; height:3px; background:var(--accent-gradient); opacity:0; transition:opacity 0.3s; }
.now .card:hover {
  background: var(--glass-gradient-hover);
  border-color: rgba(184,153,255,0.35);
  box-shadow: var(--glass-highlight-top), var(--glass-highlight-bottom), var(--glass-shadow),
    0 0 0 1px rgba(184,153,255,0.25), 0 0 28px rgba(99,102,241,0.18);
  transform: translateY(-4px);
}
.now .card:hover::before { opacity: 1; }
.vD .card { transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s, background 0.35s; }
.vD .card:hover {
  background: var(--glass-gradient-hover);
  transform: scale(0.992);
  box-shadow: inset 0 1px 6px rgba(0,0,0,0.22), var(--glass-highlight-bottom), var(--glass-shadow);
}
""",
    f"""
<div class="pair">
  <div class="pane now"><div class="pane-h"><span>现网 C · 抬 4px + 紫晕</span><span class="nowtag">现状</span></div>
    <div class="pane-b">{C1}{C2}</div></div>
  <div class="pane"><div class="pane-h"><span>D 内敛 · 缩 0.8% + 浅内影</span><span>对照</span></div>
    <div class="pane-b vD">{C1}{C2}</div></div>
</div>
""",
)

# 2 H 全幅
files["detail-enter-H-vs-C.html"] = page(
    "弹窗 H 全幅 · 对照现网",
    "候选 2 · 从卡片长出 vs 现网上滑（全幅，不再塞进小格子）",
    "上一版对照把 H 塞进小格子，FLIP 起终点被压扁，所以看起来不像第一眼那个 H。这一版两列都是整列高度。下面写了不同设备怎么兜底。",
    "左列点卡片看现网，右列点卡片看 H。请拉一下窗口宽度再试一次。",
    r"""
.split { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 110px); }
.col { border-right: 1px solid var(--border); position: relative; overflow: auto; padding: 16px; }
.col:last-child { border-right: none; }
.col-label { font-size: 0.78rem; color: var(--text-muted); margin-bottom: 10px; display: flex; justify-content: space-between; }
.nowtag { color: var(--accent); font-weight: 700; }
.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.75); display: none; align-items: flex-start; justify-content: center; padding: 8vh 16px; z-index: 8; }
.overlay.open { display: flex; }
.dcard { background: var(--detail-card-bg); border-radius: 20px; border: 1px solid rgba(255,255,255,0.14); padding: 24px; width: 100%; max-width: 520px; position: relative;
  box-shadow: var(--glass-highlight-top), var(--glass-highlight-bottom), 0 24px 80px rgba(0,0,0,0.5); }
.now .overlay.open { animation: ov 0.2s ease; }
.now .overlay.open .dcard { animation: up 0.3s ease; }
@keyframes ov { from { opacity: 0; } to { opacity: 1; } }
@keyframes up { from { transform: translateY(20px); opacity: 0; } to { transform: none; opacity: 1; } }
.x { position: absolute; top: 12px; right: 12px; width: 32px; height: 32px; border-radius: 50%; background: var(--accent-light); }
.notes { padding: 16px 20px 32px; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.7; }
.notes h2 { font-size: 0.95rem; color: var(--text); margin: 12px 0 6px; }
.notes li { margin: 4px 0 4px 1.1em; }
@media (max-width: 700px) {
  .split { grid-template-columns: 1fr; }
  .col { min-height: 70vh; border-right: none; border-bottom: 1px solid var(--border); }
}
@media (prefers-reduced-motion: reduce) {
  .now .overlay.open, .now .overlay.open .dcard { animation: ov 0.15s ease; }
}
""",
    f"""
<div class="split">
  <div class="col now" id="colC">
    <div class="col-label"><span>现网 C · 上滑 20px / 300ms</span><span class="nowtag">现状</span></div>
    {C1}{C2}
    <div class="overlay" id="ovC"><div class="dcard">现网入场<button class="x" type="button" id="xC">×</button></div></div>
  </div>
  <div class="col" id="colH">
    <div class="col-label"><span>H · 从这张卡长到中央</span><span>对照</span></div>
    {C1}{C2}
    <div class="overlay" id="ovH"><div class="dcard" id="dcH">从卡片长出<button class="x" type="button" id="xH">×</button></div></div>
  </div>
</div>
<div class="notes">
  <h2>H 的适配（会不会在别的设备上坏）</h2>
  <ul>
    <li><strong>宽屏 / 窄屏</strong>：起点是矮卡片、终点是宽弹窗，宽高比差大会被拉扁。做法：宽高比差超过 2.5 倍时，放弃 FLIP，改成短淡入（和现网类似，只是更短）。窄屏手机上卡片和弹窗都接近全宽，比例接近，FLIP 最稳。</li>
    <li><strong>Tabbit 软渲染</strong>：只用 transform / opacity，不碰 blur、不碰宽高动画。和现网卡片悬停同一类合成属性。</li>
    <li><strong>虚拟列表</strong>：只对点到的那张可见卡做 FLIP；滚走回收的节点不会参与。</li>
    <li><strong>动画中途滚动</strong>：播放时锁住这一列 overflow，结束再放开，避免起终点对不齐。</li>
    <li><strong>系统「减少动态」</strong>：直接淡入，不跑 FLIP。</li>
    <li><strong>旧浏览器</strong>：没有 Web Animations 就退回现网 slideUp。不作为主路径。</li>
  </ul>
</div>
""",
    """
<script>
const ovC = document.getElementById('ovC');
document.querySelectorAll('#colC .card').forEach(c => c.addEventListener('click', () => {
  ovC.classList.remove('open'); void ovC.offsetWidth; ovC.classList.add('open');
}));
document.getElementById('xC').addEventListener('click', e => { e.stopPropagation(); ovC.classList.remove('open'); });

const colH = document.getElementById('colH');
const ovH = document.getElementById('ovH');
const dc = document.getElementById('dcH');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function closeH() {
  ovH.classList.remove('open');
  dc.style.transition = 'none';
  dc.style.transform = '';
  dc.style.opacity = '';
  colH.style.overflow = 'auto';
}
function openH(card) {
  ovH.classList.add('open');
  colH.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    if (reduce) { dc.style.opacity = '1'; return; }
    dc.style.transition = 'none';
    const r = card.getBoundingClientRect();
    const d = dc.getBoundingClientRect();
    const sx = r.width / d.width, sy = r.height / d.height;
    const ratio = Math.max(sx / sy, sy / sx);
    if (ratio > 2.5) {
      dc.style.opacity = '0';
      requestAnimationFrame(() => {
        dc.style.transition = 'opacity 0.22s ease';
        dc.style.opacity = '1';
      });
      return;
    }
    dc.style.transformOrigin = 'top left';
    dc.style.transform = 'translate(' + (r.left - d.left) + 'px,' + (r.top - d.top) + 'px) scale(' + sx + ',' + sy + ')';
    dc.style.opacity = '1';
    requestAnimationFrame(() => {
      dc.style.transition = 'transform 0.38s cubic-bezier(0.4,0,0.2,1)';
      dc.style.transform = 'translate(0,0) scale(1)';
    });
  });
}
document.querySelectorAll('#colH .card').forEach(c => c.addEventListener('click', () => { closeH(); requestAnimationFrame(() => openH(c)); }));
document.getElementById('xH').addEventListener('click', e => { e.stopPropagation(); closeH(); });
</script>
""",
)

# 8 留卡优雅
files["dislike-留卡-vs-C.html"] = page(
    "留卡撤销 · 对照现网",
    "候选 8 · 留卡 + 撤销的观感 vs 现网抽走",
    "行为你已选留卡。现网会抽走并让两列补位。方案：卡留在原位，正文略收，底下多一行「不感兴趣 · 撤销」。不用变灰整张、不飞走、不留空洞。详情里再点一次踩就是撤销（现网按钮本来就能 toggle）。",
    "左侧点踩看整页挪位。右侧点踩看卡还在。再点撤销。",
    r"""
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.grid .card { margin: 0; }
.kick { margin-top: 8px; font-size: 0.75rem; padding: 4px 10px; border-radius: 10px; border: 1px solid var(--border); color: var(--text-secondary); }
.card.ignored .summary, .card.ignored .repo-name, .card.ignored .repo-owner { opacity: 0.58; }
.card.ignored { border-color: var(--border); }
.ignore-row {
  display: flex; justify-content: space-between; align-items: center;
  margin-top: 10px; font-size: 0.75rem; color: var(--text-muted);
}
.ignore-row button { color: var(--accent); font-size: 0.75rem; }
.reset { margin-top: 12px; padding: 5px 12px; border-radius: 12px; border: 1px solid var(--border); font-size: 0.78rem; color: var(--text-secondary); }
""",
    """
<div class="pair">
  <div class="pane now"><div class="pane-h"><span>现网 · 抽走补位</span><span class="nowtag">现状</span></div>
    <div class="pane-b" id="pack"><div class="grid"></div><button class="reset" type="button">重置</button></div></div>
  <div class="pane"><div class="pane-h"><span>留卡 · 原文变淡 + 一行撤销</span><span>对照</span></div>
    <div class="pane-b" id="keep"><div class="grid"></div><button class="reset" type="button">重置</button></div></div>
</div>
""",
    """
<script>
const NAMES = [["facebook","react"],["vercel","next.js"],["microsoft","vscode"],["openai","whisper"]];
function fill(grid, keep) {
  grid.innerHTML = "";
  NAMES.forEach(([o,n]) => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = '<div class="card-header"><div class="avatar"></div><div><span class="repo-owner">'+o+'</span> / <span class="repo-name">'+n+'</span></div></div><div class="summary">点踩看这一页怎么变</div><button class="kick" type="button">踩</button>';
    grid.appendChild(el);
  });
  grid.onclick = (e) => {
    const btn = e.target.closest(".kick, .undo");
    if (!btn) return;
    const card = btn.closest(".card");
    if (btn.classList.contains("undo")) {
      card.classList.remove("ignored");
      btn.className = "kick"; btn.textContent = "踩";
      const row = card.querySelector(".ignore-row");
      if (row) row.remove();
      return;
    }
    if (!keep) {
      card.style.transition = "opacity 0.3s, transform 0.3s";
      card.style.opacity = "0"; card.style.transform = "scale(0.96)";
      setTimeout(() => card.remove(), 300);
    } else {
      card.classList.add("ignored");
      btn.remove();
      const row = document.createElement("div");
      row.className = "ignore-row";
      row.innerHTML = "<span>不感兴趣</span><button class='undo' type='button'>撤销</button>";
      card.appendChild(row);
    }
  };
}
fill(document.querySelector("#pack .grid"), false);
fill(document.querySelector("#keep .grid"), true);
document.querySelectorAll(".reset").forEach(b => b.addEventListener("click", () => {
  const keep = b.parentElement.id === "keep";
  fill(b.parentElement.querySelector(".grid"), keep);
}));
</script>
""",
)

# 11：左右各一个独立滚动页（iframe），百分比跟真站一样跟窗口走
SIM_CARDS = "".join(
    card("owner", f"repo-{i}", f"第 {i} 张 · 先滚到下面再点热门") for i in range(1, 19)
)


def sim_page(reset: bool) -> str:
    label = "方案 · 切频道回顶" if reset else "现网 · 切了停在原地"
    flag = "true" if reset else "false"
    return f"""<!DOCTYPE html>
<html lang="zh-CN"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{label}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700&family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
{CSS}
.meter {{
  position: sticky; top: 0; z-index: 8; padding: 14px 16px 10px;
  background: var(--glass-bg); border-bottom: 1px solid var(--border);
}}
.meter .pct {{ font-size: 2rem; font-weight: 700; color: var(--accent); letter-spacing: 0.02em; }}
.verdict {{ margin-top: 4px; font-size: 0.95rem; font-weight: 700; min-height: 1.4em; }}
.ch {{ display: flex; gap: 8px; padding: 10px 16px; position: sticky; top: 84px; z-index: 7; background: rgba(8,6,14,0.92); }}
.ch button {{ padding: 6px 14px; border-radius: 12px; border: 1px solid var(--border); font-size: 0.85rem; color: var(--text-secondary); }}
.ch button.on {{ background: var(--accent-gradient); color: #fff; border: none; font-weight: 700; }}
.feed {{ padding: 8px 16px 48px; }}
</style>
</head><body>
<div class="meter">滚动 <span class="pct" id="pct">0%</span>
  <div class="verdict" id="verdict">往下滚，数字要过 50%，再点热门</div>
</div>
<div class="ch">
  <button class="on" type="button">推荐</button>
  <button type="button">热门</button>
  <button type="button">日报</button>
</div>
<div class="feed">{SIM_CARDS}</div>
<script>
const RESET = {flag};
const pctEl = document.getElementById("pct");
const verdict = document.getElementById("verdict");
const btns = [...document.querySelectorAll(".ch button")];
function pct() {{
  const max = document.documentElement.scrollHeight - window.innerHeight || 1;
  return Math.round(window.scrollY / max * 100);
}}
function upd() {{ pctEl.textContent = pct() + "%"; }}
window.addEventListener("scroll", upd, {{ passive: true }});
btns.forEach(b => b.addEventListener("click", () => {{
  btns.forEach(x => x.classList.toggle("on", x === b));
  const before = pct();
  if (RESET) window.scrollTo({{ top: 0, behavior: "smooth" }});
  setTimeout(() => {{
    upd();
    const after = pct();
    verdict.textContent = RESET
      ? ("切完回到顶部  " + before + "% → " + after + "%")
      : ("切完还停在 " + after + "%（现网就是这样卡住）");
  }}, RESET ? 450 : 0);
}}));
</script>
</body></html>"""


files["_scroll-sim-C.html"] = sim_page(False)
files["_scroll-sim-S.html"] = sim_page(True)
files["scroll-channel-vs-C.html"] = page(
    "切频道滚动 · 对照现网",
    "候选 11 · 切频道回顶 vs 现网停在半山腰",
    "上一轮框太小，滚动变化几乎看不见。这一轮左右各是一个独立页面：你在框里滚，等于在滚那个页面。只比你说「可能还不错」的最后一个。",
    "步骤：① 在左框滚到 50% 以上，点热门，看大数字还停在原地 ② 右框同样操作，数字应回到 0%。",
    r"""
.split { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 120px); }
.col { display: flex; flex-direction: column; border-right: 1px solid var(--border); min-height: calc(100vh - 120px); }
.col:last-child { border-right: none; }
.col-label { padding: 8px 12px; font-size: 0.78rem; color: var(--text-muted); display: flex; justify-content: space-between; border-bottom: 1px solid var(--border); }
.nowtag { color: var(--accent); font-weight: 700; }
iframe { flex: 1; width: 100%; border: 0; min-height: 70vh; background: transparent; }
@media (max-width: 700px) {
  .split { grid-template-columns: 1fr; }
  .col { border-right: none; border-bottom: 1px solid var(--border); min-height: 80vh; }
}
""",
    """
<div class="split">
  <div class="col now">
    <div class="col-label"><span>现网 · 切了还停在原地</span><span class="nowtag">现状</span></div>
    <iframe src="./_scroll-sim-C.html" title="现网切频道不回顶"></iframe>
  </div>
  <div class="col">
    <div class="col-label"><span>方案 · 切频道滚回顶部</span><span>对照</span></div>
    <iframe src="./_scroll-sim-S.html" title="切频道回顶"></iframe>
  </div>
</div>
""",
)

for name, html in files.items():
    (OUT / name).write_text(html, encoding="utf-8", newline="\n")
    print("wrote", name)
print("done", len(files))
