# -*- coding: utf-8 -*-
"""方向 2 第三轮：凡对照必带现网 C 在左侧。"""
from pathlib import Path

OUT = Path(__file__).resolve().parent

TOKENS = r"""
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
  --danger: #ef4444; --warning: #f59e0b; --border: rgba(255, 255, 255, 0.08);
  --radius-sm: 10px;
  --font-serif: "Lora", "Noto Serif SC", "Times New Roman", "Songti SC", "SimSun", serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 17px; }
body {
  font-family: var(--font-serif); color: var(--text); min-height: 100vh;
  background: #08060e; background-image: linear-gradient(180deg, #120e1f 0%, #0b0914 45%, #05040a 100%);
}
button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }
.banner { position: sticky; top: 0; z-index: 50; background: var(--glass-bg); border-bottom: 1px solid var(--border); padding: 12px 24px 14px; }
.banner-kicker { font-size: 0.72rem; color: var(--text-muted); }
.banner h1 { font-size: 1.05rem; font-weight: 700; margin: 2px 0 4px; }
.banner p { font-size: 0.85rem; color: var(--text-secondary); }
.hint { margin-top: 6px; font-size: 0.78rem; color: var(--accent); }
.back { display: inline-block; margin-top: 8px; font-size: 0.78rem; color: var(--text-muted); text-decoration: none; }
.back:hover { color: var(--accent); }
.pair { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; padding: 16px 20px 8px; }
.pair-title { padding: 20px 20px 0; font-size: 0.9rem; font-weight: 700; }
.pair-title span { font-weight: 500; color: var(--text-muted); font-size: 0.8rem; }
.pane { border: 1px solid var(--glass-border); border-radius: 14px; overflow: hidden; background: rgba(20,17,34,0.45); min-height: 220px; position: relative; }
.pane.now { box-shadow: inset 0 0 0 1px rgba(99,102,241,0.35); }
.pane-h { padding: 8px 12px; border-bottom: 1px solid var(--border); font-size: 0.78rem; display: flex; justify-content: space-between; }
.pane-h .nowtag { color: var(--accent); font-weight: 700; }
.pane-b { padding: 12px; }
.card {
  background: var(--glass-gradient); border: 1px solid var(--glass-border); border-radius: 18px;
  padding: 16px; box-shadow: var(--glass-highlight-top), var(--glass-highlight-bottom), var(--glass-shadow);
  position: relative; overflow: hidden; cursor: pointer; margin-bottom: 12px;
}
.card:last-child { margin-bottom: 0; }
.card-header { display: flex; gap: 10px; margin-bottom: 8px; }
.avatar { width: 36px; height: 36px; border-radius: 10px; background: var(--accent-light); border: 1px solid var(--border); }
.repo-owner { color: var(--text-secondary); font-size: 0.88rem; }
.repo-name { font-weight: 700; color: var(--accent); font-size: 0.88rem; display: inline-block; }
.summary {
  font-size: 0.9rem; font-weight: 700; padding: 6px 10px; margin-bottom: 0;
  background: linear-gradient(135deg, var(--accent-light), transparent);
  border-left: 3px solid var(--accent); border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.feed2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.feed2 .card { margin: 0; }
"""


def card(owner, name, summary, extra=""):
    return f"""<div class="card" data-name="{name}">
  <div class="card-header"><div class="avatar"></div>
    <div><span class="repo-owner">{owner}</span> / <span class="repo-name">{name}</span></div>
  </div>
  <div class="summary">{summary}</div>
  {extra}
</div>"""


C1 = card("facebook", "react", "声明式 UI 库，组件化写界面的事实标准")
C2 = card("vercel", "next.js", "React 全栈框架，路由开箱即用")
C3 = card("microsoft", "vscode", "代码编辑器，插件把编辑器变成 IDE")
C4 = card("openai", "whisper", "开源语音识别，本地把录音转成字")


def page(title, h1, desc, hint, css, body, script=""):
    return f"""<!DOCTYPE html>
<html lang="zh-CN"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700&family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>{TOKENS}\n{css}</style>
</head><body>
<header class="banner">
  <div class="banner-kicker">第三轮 · 左侧一律是现网</div>
  <h1>{h1}</h1>
  <p>{desc}</p>
  <div class="hint">{hint}</div>
  <a class="back" href="./00-点菜.html">← 回点菜页</a>
</header>
{body}
{script}
</body></html>"""


def pair(title, note, now_body, new_body, now_cls="now", new_cls=""):
    return f"""
<div class="pair-title">{title} <span>{note}</span></div>
<div class="pair">
  <div class="pane {now_cls}"><div class="pane-h"><span>现网 C</span><span class="nowtag">现状</span></div><div class="pane-b">{now_body}</div></div>
  <div class="pane {new_cls}"><div class="pane-h"><span>方案</span><span>对照</span></div><div class="pane-b">{new_body}</div></div>
</div>"""


files = {}

# ----- 1 卡片悬停 vs C -----
HOVER_C = r"""
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
"""
HOVER_D = r"""
.vD .card { transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s; }
.vD .card:hover { transform: scale(0.97); box-shadow: inset 0 2px 16px rgba(0,0,0,0.5), var(--glass-highlight-bottom); }
"""
HOVER_F = r"""
.vF .card::before {
  content:""; position:absolute; left:0; top:0; bottom:0; width:4px;
  background: var(--accent-gradient); transform: scaleY(0); transform-origin: top; transition: transform 0.28s ease;
}
.vF .card:hover::before { transform: scaleY(1); }
.vF .card:hover { background: var(--glass-gradient-hover); }
"""
HOVER_G = r"""
.vG .feed2 .card { transition: opacity 0.28s ease; }
.vG .feed2 .card.is-dim { opacity: 0.32; }
.vG .feed2 .card:hover { background: var(--glass-gradient-hover); }
"""
HOVER_G2 = r"""
.vG2 .feed2 .card { transition: opacity 0.28s ease, transform 0.28s ease, background 0.28s; }
.vG2 .feed2 .card.is-dim { opacity: 0.32; }
.vG2 .feed2 .card:hover { background: var(--glass-gradient-hover); transform: translateY(-2px); }
"""
four = f'<div class="feed2">{C1}{C2}{C3}{C4}</div>'
two = f"{C1}{C2}"
files["card-hover-vs-C.html"] = page(
    "卡片悬停 · 对照现网",
    "候选 1 · 每条都跟现网并排",
    "没点名的已刷。D / F / G 留下。你说 G 抬太高挡上卡：原版 G 是邻卡压暗、并不抬；挡上卡的是已刷掉的 J（抬 10px）。G 做成不抬；G低 是压暗+抬 2px。",
    "每对左侧现网、右侧方案。悬停同一位置看差。",
    HOVER_C + HOVER_D + HOVER_F + HOVER_G + HOVER_G2,
    pair("D · 沉入纸面", "卡往里凹，和现网往上浮相反", f'<div class="now">{two}</div>', f'<div class="vD">{two}</div>')
    + pair("F · 左侧色条", "左边长出一条，卡不移动", f'<div class="now">{two}</div>', f'<div class="vF">{two}</div>')
    + pair("G · 邻卡压暗（不抬）", "悬一张，其余变淡；自己不位移，不会挡上卡", f'<div class="now">{four}</div>', f'<div class="vG">{four}</div>')
    + pair("G低 · 压暗 + 抬 2px", "按「调低」来的：压暗还在，只抬 2px（现网是 4px，J 是 10px）", f'<div class="now">{four}</div>', f'<div class="vG2">{four}</div>'),
    """
<script>
function dim(rootSel) {
  document.querySelectorAll(rootSel).forEach(feed => {
    const cards = [...feed.querySelectorAll('.card')];
    cards.forEach(c => {
      c.addEventListener('mouseenter', () => cards.forEach(o => o.classList.toggle('is-dim', o !== c)));
      c.addEventListener('mouseleave', () => cards.forEach(o => o.classList.remove('is-dim')));
    });
  });
}
dim('.vG .feed2'); dim('.vG2 .feed2');
</script>
""",
)

# ----- 2 弹窗 vs C -----
DET = r"""
.detail-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.75); display:none; align-items:flex-start; justify-content:center; padding:24px 12px; z-index:5; }
.detail-overlay.open { display:flex; }
.detail-card { background:var(--detail-card-bg); border-radius:16px; border:1px solid rgba(255,255,255,0.14); padding:20px; width:100%; max-width:420px; position:relative; }
.mini { padding:6px 12px; border-radius:14px; border:1px solid var(--border); font-size:0.8rem; color:var(--text-secondary); margin-bottom:8px; }
.now .detail-overlay.open { animation: ovC 0.2s ease; }
.now .detail-overlay.open .detail-card { animation: upC 0.3s ease; }
@keyframes ovC { from { opacity:0; } to { opacity:1; } }
@keyframes upC { from { transform:translateY(20px); opacity:0; } to { transform:none; opacity:1; } }
.vE .detail-overlay.open { animation: ovE 0.18s ease; }
.vE .detail-overlay.open .detail-card { animation: fromRight 0.32s ease; }
@keyframes ovE { from { opacity:0; } to { opacity:1; } }
@keyframes fromRight { from { transform:translateX(48px); opacity:0; } to { transform:none; opacity:1; } }
.vF .detail-overlay.open { animation: ovF 0.18s ease; }
.vF .detail-overlay.open .detail-card { animation: late 0.28s ease 0.18s both; }
@keyframes ovF { from { opacity:0; } to { opacity:1; } }
@keyframes late { from { transform:translateY(16px); opacity:0; } to { transform:none; opacity:1; } }
.pane { min-height: 360px; }
"""
det_now = f'<button class="mini" type="button" data-open="now">打开现网入场</button>{C1}<div class="detail-overlay" id="ovnow"><div class="detail-card">现网：上滑 20px / 300ms<button class="mini" type="button" data-x="now" style="position:absolute;top:12px;right:12px">×</button></div></div>'
det_now2 = f'<button class="mini" type="button" data-open="now2">打开现网入场</button>{C1}<div class="detail-overlay" id="ovnow2"><div class="detail-card">现网：上滑 20px / 300ms<button class="mini" type="button" data-x="now2" style="position:absolute;top:12px;right:12px">×</button></div></div>'
det_e = f'<button class="mini" type="button" data-open="E">打开右侧滑入</button>{C1}<div class="detail-overlay" id="ovE"><div class="detail-card">E：从右边来 48px<button class="mini" type="button" data-x="E" style="position:absolute;top:12px;right:12px">×</button></div></div>'
det_f = f'<button class="mini" type="button" data-open="F">打开两段式</button>{C1}<div class="detail-overlay" id="ovF"><div class="detail-card">F：先遮罩，再弹出<button class="mini" type="button" data-x="F" style="position:absolute;top:12px;right:12px">×</button></div></div>'
files["detail-enter-vs-C.html"] = page(
    "弹窗入场 · 对照现网",
    "候选 2 · 每条都跟现网并排",
    "留下 H / E / F。G 过冲已刷（你说僵）。H 从卡片长出单独占一整页对照，见下面链接。",
    "每对先开左侧现网，再开右侧方案。",
    DET,
    pair("E · 从右侧滑入", "方向和现网上滑不同", f'<div class="now" style="position:relative;min-height:300px">{det_now}</div>', f'<div class="vE" style="position:relative;min-height:300px">{det_e}</div>')
    + pair("F · 先遮罩后卡片", "两段节奏，现网是同时动", f'<div class="now" style="position:relative;min-height:300px">{det_now2}</div>', f'<div class="vF" style="position:relative;min-height:300px">{det_f}</div>')
    + '<p style="padding:8px 20px 24px;font-size:0.88rem;"><a class="back" href="./detail-enter-H-vs-C.html">H · 从这张卡长出 对照现网 →</a></p>',
    """
<script>
function openK(k){ const ov=document.getElementById('ov'+k); ov.classList.remove('open'); void ov.offsetWidth; ov.classList.add('open'); }
function closeK(k){ document.getElementById('ov'+k).classList.remove('open'); }
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openK(b.dataset.open); }));
document.querySelectorAll('[data-x]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); closeK(b.dataset.x); }));
</script>
""",
)

# H vs C full page
files["detail-enter-H-vs-C.html"] = page(
    "弹窗 H · 对照现网",
    "候选 2 · H 从卡片长出 vs 现网上滑",
    "左侧现网：上滑 20px。右侧 H：弹窗从你点的那张卡长到中央。",
    "先点左侧卡片看现网，再点右侧卡片看 H。",
    r"""
.detail-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.75); display:none; align-items:flex-start; justify-content:center; padding:28px 12px; z-index:5; }
.detail-overlay.open { display:flex; }
.detail-card { background:var(--detail-card-bg); border-radius:16px; border:1px solid rgba(255,255,255,0.14); padding:20px; width:100%; max-width:420px; position:relative; }
.now .detail-overlay.open { animation: ovC 0.2s ease; }
.now .detail-overlay.open .detail-card { animation: upC 0.3s ease; }
@keyframes ovC { from { opacity:0; } to { opacity:1; } }
@keyframes upC { from { transform:translateY(20px); opacity:0; } to { transform:none; opacity:1; } }
.vH .detail-card { opacity: 0; }
.pane { min-height: 420px; }
.mini { padding:6px 12px; border-radius:14px; border:1px solid var(--border); font-size:0.8rem; color:var(--text-secondary); }
""",
    pair(
        "H · 从这张卡长出",
        "点卡片，不要只看自动播放",
        f'<div class="now" id="nowRoot" style="position:relative;min-height:380px">{C1}{C2}<div class="detail-overlay" id="ovC"><div class="detail-card">现网上滑 20px <button class="mini" type="button" id="xC" style="position:absolute;top:12px;right:12px">×</button></div></div></div>',
        f'<div class="vH" id="hRoot" style="position:relative;min-height:380px">{C1}{C2}<div class="detail-overlay" id="ovH"><div class="detail-card" id="dcH">从卡片长出 <button class="mini" type="button" id="xH" style="position:absolute;top:12px;right:12px">×</button></div></div></div>',
    ),
    """
<script>
const ovC = document.getElementById('ovC');
document.querySelectorAll('#nowRoot .card').forEach(c => c.addEventListener('click', () => {
  ovC.classList.remove('open'); void ovC.offsetWidth; ovC.classList.add('open');
}));
document.getElementById('xC').addEventListener('click', () => ovC.classList.remove('open'));

const ovH = document.getElementById('ovH');
const dc = document.getElementById('dcH');
function closeH(){ ovH.classList.remove('open'); dc.style.transition='none'; dc.style.transform=''; dc.style.opacity='0'; }
function openH(card){
  ovH.classList.add('open');
  dc.style.transition='none';
  const r = card.getBoundingClientRect();
  const d = dc.getBoundingClientRect();
  const dx = r.left - d.left, dy = r.top - d.top;
  const sx = r.width / d.width, sy = r.height / d.height;
  dc.style.transformOrigin = 'top left';
  dc.style.transform = 'translate('+dx+'px,'+dy+'px) scale('+sx+','+sy+')';
  dc.style.opacity = '1';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    dc.style.transition = 'transform 0.38s cubic-bezier(0.4,0,0.2,1)';
    dc.style.transform = 'translate(0,0) scale(1)';
  }));
}
document.querySelectorAll('#hRoot .card').forEach(c => c.addEventListener('click', () => { closeH(); requestAnimationFrame(() => openH(c)); }));
document.getElementById('xH').addEventListener('click', closeH);
</script>
""",
)

# ----- 3 按钮 J vs C -----
ACT = r"""
.action-row { display:flex; gap:12px; padding-top:8px; }
.action-btn {
  width:52px; height:52px; border-radius:50%; border:1px solid var(--border);
  color:var(--text-secondary); display:flex; align-items:center; justify-content:center;
}
.action-btn svg { width:22px; height:22px; fill:none; stroke:currentColor; stroke-width:2; }
.now .action-btn { transition: all 0.25s; }
.now .action-btn:hover { border-color:var(--accent); color:var(--accent); background:var(--accent-light); transform:scale(1.1); }
.vJ .action-btn { transition: transform 0.18s ease, border-color 0.2s, color 0.2s; }
.vJ .action-btn:hover { border-color:var(--accent); color:var(--accent); }
.vJ .action-btn:active { transform: scale(1.08, 0.82); }
"""
BTN = """
<div class="action-row">
  <button class="action-btn" type="button" aria-label="喜欢"><svg viewBox="0 0 24 24"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg></button>
  <button class="action-btn" type="button" aria-label="不喜欢"><svg viewBox="0 0 24 24"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg></button>
  <button class="action-btn" type="button" aria-label="收藏"><svg viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg></button>
</div>
"""
files["action-vs-C.html"] = page(
    "按钮 · 对照现网",
    "候选 3 · J 压扁 vs 现网放大",
    "其余按钮方案已刷。只留 J。左侧现网 hover 放到 1.1；右侧按下压扁，松手恢复。",
    "悬停，再按住看。",
    ACT,
    pair("J · 压扁回弹", "和现网等比放大不是一类动作", f'<div class="now">{card("facebook", "react", "声明式 UI 库，组件化写界面的事实标准", BTN)}</div>', f'<div class="vJ">{card("facebook", "react", "声明式 UI 库，组件化写界面的事实标准", BTN)}</div>'),
)

# ----- 6 频道切换 vs C -----
CH = r"""
.side { display:flex; gap:6px; margin-bottom:10px; }
.side button { padding:6px 12px; border-radius:10px; border:1px solid var(--border); font-size:0.8rem; color:var(--text-secondary); }
.side button.on { background: var(--accent-gradient); color:#fff; border-color:transparent; }
.vB .feed.enter .card { animation: upB 0.45s ease-out both; }
.vB .feed.enter .card:nth-child(1) { animation-delay: 0s; }
.vB .feed.enter .card:nth-child(2) { animation-delay: 0.1s; }
.vB .feed.enter .card:nth-child(3) { animation-delay: 0.2s; }
.vB .feed.enter .card:nth-child(4) { animation-delay: 0.3s; }
@keyframes upB { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform:none; } }
.feed { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.feed .card { margin:0; }
"""
ch_block = f'<div class="side"><button type="button" data-ch>推荐</button><button type="button" data-ch>热门</button></div><div class="feed">{C1}{C2}{C3}{C4}</div>'
files["channel-enter-vs-C.html"] = page(
    "频道切换 · 对照现网",
    "候选 6 · 放慢后的错开入场 vs 现网瞬间",
    "B 仍是错开上浮，但放慢了：每张间隔 100ms（原先 70ms），动画 450ms ease-out（原先 320ms），位移 10px。最后一张约 0.75s 落稳，没有拖成慢动作。",
    "每侧点「热门 / 推荐」看切换。左侧现网是瞬间替换。",
    CH,
    pair("B · 错开上浮（放慢）", "左侧瞬间，右侧依次浮现", f'<div class="now" id="chC">{ch_block}</div>', f'<div class="vB" id="chB">{ch_block}</div>'),
    """
<script>
function bind(root, animate) {
  const feed = root.querySelector('.feed');
  const btns = [...root.querySelectorAll('[data-ch]')];
  btns[0].classList.add('on');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.toggle('on', x===b));
    if (!animate) return;
    feed.classList.remove('enter'); void feed.offsetWidth; feed.classList.add('enter');
  }));
}
bind(document.getElementById('chC'), false);
bind(document.getElementById('chB'), true);
</script>
""",
)

# ----- 7 点赞 A vs C -----
LIKE = r"""
.action-row { display:flex; gap:12px; padding-top:10px; }
.action-btn { width:46px; height:46px; border-radius:50%; border:1px solid var(--border); color:var(--text-secondary); display:flex; align-items:center; justify-content:center; }
.action-btn svg { width:20px; height:20px; fill:none; stroke:currentColor; stroke-width:2; }
.like-btn.active { background: rgba(239,68,68,0.15); border-color:var(--danger); color:var(--danger); }
.vA .card::before {
  content:""; position:absolute; top:0; left:0; right:0; height:3px;
  background: var(--accent-gradient); opacity:0; transform:scaleX(0); transform-origin:left;
}
.vA .card.flash::before { animation: bar 0.7s ease; }
@keyframes bar { 0% { opacity:1; transform:scaleX(0);} 35% { opacity:1; transform:scaleX(1);} 100% { opacity:0; transform:scaleX(1);} }
"""
LIKE_BTN = """<div class="action-row"><button class="action-btn like-btn" type="button" data-like><svg viewBox="0 0 24 24"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg></button></div>"""
LIKE_CARD = card("facebook", "react", "声明式 UI 库，组件化写界面的事实标准", LIKE_BTN)
files["like-success-vs-C.html"] = page(
    "点赞成功 · 对照现网",
    "候选 7 · 顶条扫过一次 vs 现网只变按钮",
    "B 已刷。左侧现网：只有按钮变红。右侧 A：按钮变红，同时顶上色条从左长出再淡掉（只一次）。",
    "两侧都点喜欢。再点一次取消。",
    LIKE,
    pair("A · 顶条扫过一次", "交互点出现、结束归零", f'<div class="now">{LIKE_CARD}</div>', f'<div class="vA">{LIKE_CARD}</div>'),
    """
<script>
document.querySelectorAll('[data-like]').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const card = btn.closest('.card');
    card.classList.remove('flash'); void card.offsetWidth;
    if (btn.classList.contains('active')) card.classList.add('flash');
  });
});
</script>
""",
)

# ----- 9 搜索 hybrid vs C -----
SEARCH = r"""
.search-box { position: relative; }
.search-input {
  width:100%; padding:12px 20px; border:1px solid rgba(255,255,255,0.06);
  border-radius:28px; font-size:0.95rem; background:rgba(28,25,41,0.45);
  color:var(--text); outline:none; font-family:var(--font-serif);
}
.search-input::placeholder { color: var(--text-muted); }
.now .search-input { transition: all 0.2s; }
.now .search-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }
.vH .search-box::after {
  content:""; position:absolute; inset:-5px; border-radius:32px;
  border: 1px solid var(--accent); opacity:0; transform: scale(0.96);
  transition: opacity 0.25s ease, transform 0.25s ease; pointer-events:none;
}
.vH .search-box:focus-within::after { opacity:1; transform: scale(1); }
.vH .search-input:focus { border-color: var(--accent); }
"""
box = '<div class="search-box"><input class="search-input" placeholder="搜索仓库、作者、关键词"></div>'
files["search-focus-vs-C.html"] = page(
    "搜索聚焦 · 对照现网",
    "候选 9 · 光圈长出 vs 现网浅圈",
    "A 底边、B 放大都刷了（毛躁）。这一版把 A 的「长出来」套在 C 的光圈形状上：聚焦时光圈从略小淡入到贴住输入框，不是底边，也不放大输入框。",
    "每侧点进输入框。不确定就维持 C。",
    SEARCH,
    pair("光圈长出（A 的出现方式 × C 的形状）", "输入框本身不大", f'<div class="now">{box}</div>', f'<div class="vH">{box}</div>'),
)

# ----- 10 空态更克制 vs C -----
EMPTY = r"""
.end { text-align:center; color:var(--text-muted); padding: 28px 8px; font-size:0.85rem; }
.vD .end { padding: 36px 8px 20px; }
.vD .hair { width: 48px; height:1px; background: var(--glass-border); margin: 0 auto 14px; }
.vE .end { padding: 48px 8px; font-size: 0.95rem; color: var(--text-muted); letter-spacing: 0.4em; }
"""
files["empty-end-vs-C.html"] = page(
    "刷完空态 · 对照现网",
    "候选 10 · 更克制的收束 vs 现网小字",
    "上一轮虚线残卡和大标题都毛躁，已刷。现网是「已加载全部 N 个项目」。下面两个比现网只多一点点编辑气，不多加装饰。",
    "不用点，直接看。可以全选 C，也可以点 D 或 E。",
    EMPTY,
    pair("D · 一根细线 + 原句", "像文章结稿，不新发明文案", '<div class="now"><div class="end">已加载全部 60 个项目</div></div>', '<div class="vD"><div class="end"><div class="hair"></div>已加载全部 60 个项目</div></div>')
    + pair("E · 一个「完」字", "更少字，空白当收束", '<div class="now"><div class="end">已加载全部 60 个项目</div></div>', '<div class="vE"><div class="end">完</div></div>'),
)

# ----- 11 滚动 vs C -----
SCROLL = r"""
.scroll-box { height: 280px; overflow-y: auto; position: relative; }
.now .scroll-box, .vB .scroll-box, .vT .scroll-box { height: 280px; overflow-y: auto; }
.vB .banner-mini, .vT .banner-mini {
  position: sticky; top: 0; height: 36px; background: var(--glass-bg);
  border-bottom: 1px solid var(--border); display:flex; align-items:center; padding:0 10px; font-size:0.78rem; z-index:3;
}
.progress {
  position: sticky; top: 36px; height: 3px; background: var(--accent-gradient);
  transform: scaleX(0); transform-origin: left; opacity: 0; z-index: 4;
  transition: opacity 0.2s;
}
.progress.on { opacity: 1; }
.topbtn {
  position: absolute; right: 12px; bottom: 12px; width: 36px; height: 36px; border-radius: 50%;
  background: var(--accent-gradient); color:#fff; font-size: 0.85rem; display:none; align-items:center; justify-content:center;
  box-shadow: 0 4px 14px rgba(99,102,241,0.25);
}
.topbtn.show { display:flex; }
.ch { display:flex; gap:6px; margin-bottom:8px; }
.ch button { padding:5px 10px; border-radius:10px; border:1px solid var(--border); font-size:0.78rem; color:var(--text-secondary); }
.ch button.on { background:var(--accent-gradient); color:#fff; border:none; }
"""
scroll_cards = C1 + C2 + C3 + C4 + C1 + C2
files["scroll-feel-vs-C.html"] = page(
    "滚动 · 对照现网",
    "候选 11 · 进度条加强 + 回顶部 vs 现网卡进度",
    "现网用的是窗口滚动，切频道 / 切首页搜索再回来，滚动位置还在原地——所以你会「记得自己在半山腰，却想回山顶回不去」。下面三对：进度条加强、滚远了出现回顶部、切频道回顶。",
    "每框里自己滚。右侧切频道看会不会被丢在半山腰。",
    SCROLL,
    pair("B加强 · 贴在顶栏下缘的进度", "滚一点才出现，停在顶部则收掉", 
         f'<div class="now"><div class="scroll-box">{scroll_cards}</div></div>',
         f'<div class="vB"><div class="scroll-box" data-prog><div class="banner-mini">GitTok</div><div class="progress"></div>{scroll_cards}</div></div>')
    + pair("回顶部按钮", "滚过约一屏后右下角出现，点了回顶",
         f'<div class="now"><div class="scroll-box">{scroll_cards}</div></div>',
         f'<div class="vT"><div class="scroll-box" data-top style="position:relative"><div class="banner-mini">GitTok</div><div class="progress"></div>{scroll_cards}<button class="topbtn" type="button" title="回到顶部">↑</button></div></div>')
    + pair("切频道回顶", "左侧=现网（切了还停在半道）；右侧=切频道滚回顶部",
         f'<div class="now"><div class="ch"><button class="on" type="button" data-stay>推荐</button><button type="button" data-stay>热门</button></div><div class="scroll-box" data-stick>{scroll_cards}</div></div>',
         f'<div class="vT"><div class="ch"><button class="on" type="button" data-reset>推荐</button><button type="button" data-reset>热门</button></div><div class="scroll-box" data-resetbox>{scroll_cards}</div></div>'),
    """
<script>
document.querySelectorAll('[data-prog], [data-top]').forEach(box => {
  const bar = box.querySelector('.progress');
  const btn = box.querySelector('.topbtn');
  box.addEventListener('scroll', () => {
    const max = box.scrollHeight - box.clientHeight || 1;
    const p = box.scrollTop / max;
    if (bar) { bar.style.transform = 'scaleX(' + p + ')'; bar.classList.toggle('on', box.scrollTop > 8); }
    if (btn) btn.classList.toggle('show', box.scrollTop > 160);
  });
  if (btn) btn.addEventListener('click', () => box.scrollTo({ top: 0, behavior: 'smooth' }));
});
document.querySelectorAll('[data-stay]').forEach(b => {
  const root = b.closest('.pane-b');
  const btns = [...root.querySelectorAll('[data-stay]')];
  b.addEventListener('click', () => btns.forEach(x => x.classList.toggle('on', x===b)));
});
document.querySelectorAll('[data-reset]').forEach(b => {
  const root = b.closest('.pane-b');
  const btns = [...root.querySelectorAll('[data-reset]')];
  const box = root.querySelector('[data-resetbox]');
  b.addEventListener('click', () => {
    btns.forEach(x => x.classList.toggle('on', x===b));
    box.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
</script>
""",
)

for name, html in files.items():
    (OUT / name).write_text(html, encoding="utf-8", newline="\n")
    print("wrote", name, len(html))
print("done", len(files))
