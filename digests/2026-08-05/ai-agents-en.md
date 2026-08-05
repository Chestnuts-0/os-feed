# OpenClaw Ecosystem Digest 2026-08-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-05 01:41 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive



# OpenClaw Project Digest — 2026-08-05

## 1. Today's Overview
OpenClaw exhibited **very high activity** on 2026-08-05, with 500 issues and 500 PRs updated in the last 24 hours. The project is in a dense maintenance phase, focusing on **stability fixes, subagent orchestration reliability, and session-state bugs**. No new releases were published today, but a steady stream of closed PRs indicates ongoing bug squashing and QA improvements. The overall health is that of a mature, high-traffic open-source project dealing with complex distributed-agent edge cases.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
**Merged/Closed PRs (selected highlights):**
- **#118558** – `fix(synology-chat): report rejected webhook messages and files`  
  Ensures Synology Chat delivery status reflects explicit webhook rejections instead of false successes.
- **#118450** – `fix(slack): finalize the actual delivered question card`  
  Resolves issues where Slack question controls remained active or the wrong message was edited after chunked uploads.
- **#118787** – `fix(ui): clear split-pane questions after answers and cancellations`  
  Clears stale waiting indicators and disabled chat panes in the Control UI after a Gateway response is committed.
- **#118556** – `test(node-host): isolate linux plugin discovery`  
  Speeds up Linux node-host integration tests by scanning only the real plugin instead of the full bundled set.
- **#118554** – `improve: speed up storage migration tests`  
  Reduces CI time by avoiding lock retries and generic metadata loads in storage migration shards.
- **#118552** – `test(state): reuse canonical database template`  
  Reuses a single initialized SQLite schema across multiple drift/read-only tests to accelerate test runs.
- **#118544** – `refactor: canonicalize Crabbox run invocation transforms`  
  Fixes ambiguity where run-option values could be mistaken for remote commands when option-arity tables drift.
- **#118536** – `fix(zalouser): route reactions through canonical conversation targets`  
  Ensures Zalo reactions are sent to the correct upstream API endpoint, avoiding mis‑routed direct messages.

## 4. Community Hot Topics
**Most commented issues (top 5):**
1. **#116277** – [DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277) (104 comments, closed)  
   *Underlying need:* Reliable fallback behavior when a model silently fails to generate a reply. Users require clear error signaling and robust retry/fallback paths.
2. **#116201** – [Realtime voice work can retain unbounded provider and consult state](https://github.com/openclaw/openclaw/issues/116201) (59 comments, open)  
   *Underlying need:* Resource management and state cleanup for long‑running voice sessions to prevent memory leaks and stalled provider frames.
3. **#115326** – [Crash-loop breaker suppresses Discord/WhatsApp permanently](https://github.com/openclaw/openclaw/issues/115326) (25 comments, closed)  
   *Underlying need:* Fault‑tolerant channel recovery; the documented recovery path (`channels.start`) fails with WebSocket 1006, leaving channels permanently disabled.
4. **#44925** – [Subagent completion silently lost — no retry, no notification, no auto-restart on timeout](https://github.com/openclaw/openclaw/issues/44925) (23 comments, open)  
   *Underlying need:* Reliable subagent orchestration with guaranteed delivery and observable failures; a critical pain point for complex multi‑agent workflows.
5. **#48788** – [feat: centralized filename encoding utility for multi-encoding Content-Disposition handling](https://github.com/openclaw/openclaw/issues/48788) (20 comments, open)  
   *Underlying need:* Robust internationalized filename handling across all channel adapters (Feishu, WhatsApp, etc.) beyond the current UTF‑8/Latin‑1 workaround.

## 5. Bugs & Stability
**High‑severity bugs reported/updated today (ranked by impact):**

| Issue | Rating | Summary | Fix PR? |
|-------|--------|---------|---------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 🦞 diamond lobster | DeepSeek v4 Flash silent reply failure; generic fallback posted. | Closed – likely resolved in a recent patch. |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 🦞 diamond lobster | Realtime voice sessions retain unbounded provider/consult state under slow/bursty behavior. | No fix PR yet. |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | 🦞 diamond lobster | Crash‑loop breaker suppresses Discord/WhatsApp permanently; recovery path fails with WebSocket 1006. | Closed – regression patched. |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 🦞 diamond lobster | Subagent completion silently lost on timeout, drain, or orphan prune. | No fix PR yet. |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | 🦐 gold shrimp | Gateway main thread saturated at boot by plugin‑metadata snapshot + fs statting; starves accept loop. | No fix PR yet. |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 🦞 diamond lobster | Session transcript projection can livelock under sustained writes, blocking the main thread. | No fix PR yet. |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 🦞 diamond lobster | Subagent completion delivery lost on direct‑announce timeout, drain, or orphan prune. | No fix PR yet. |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | 🦐 gold shrimp | Isolated cron consistently fails with “LLM request failed” on model‑call‑started phase. | No fix PR yet. |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | 🦐 gold shrimp | Memory management is in chaos – inconsistent storage locations across users. | No fix PR yet. |

**Regression notes:** Several issues (#115326, #97616, #77733, #44502) are tagged as regressions that worked in earlier versions, indicating possible instability in recent releases.

## 6. Feature Requests & Roadmap Signals
**User‑requested features with significant discussion:**
- [#48788](https://github.com/openclaw/openclaw/issues/48788) – Centralized filename encoding utility for multi‑encoding Content‑Disposition handling.  
  *Roadmap signal:* Improving internationalization and robustness across channel adapters.
- [#45758](https://github.com/openclaw/openclaw/issues/45758) – Support YAML as config file format alongside JSON5.  
  *Roadmap signal:* Enhancing configuration usability and aligning with DevOps conventions.
- [#42840](https://github.com/openclaw/openclaw/issues/42840) – Add MathJax/LaTeX support to Control UI. (10 👍)  
  *Roadmap signal:* Better rendering of scientific/mathematical content in the web UI.
- [#44395](https://github.com/openclaw/openclaw/issues/44395) – Heading‑aware chunking + entity extraction for memory search.  
  *Roadmap signal:* Improving memory indexing quality for better retrieval.
- [#45508](https://github.com/openclaw/openclaw/issues/45508) – Self‑hosted STT/TTS provider support in webchat (route through gateway).  
  *Roadmap signal:* Enabling fully self‑hosted voice stacks beyond browser Web Speech APIs.
- [#9016](https://github.com/openclaw/openclaw/issues/9016) – Expose OpenRouter usage cost to agent runtime.  
  *Roadmap signal:* Cost transparency and per‑message cost tracking for budgeting.

**Prediction:** YAML config support, heading‑aware memory chunking, and the centralized filename encoder are likely candidates for the next minor release, given their repeated discussion and practical impact.

## 7. User Feedback Summary
**Pain points & use cases:**
- **Silent failures are unacceptable:** Multiple high‑comment issues (#116277, #44925, #67777) center on subagent completions or model replies being lost without any notification. Users need observable failure modes and automatic retries.
- **Channel‑specific bugs cause trust erosion:** Discord/WhatsApp permanent suppression (#115326), Slack question‑card finalization (#118450), Synology Chat rejection reporting (#118558) show that channel adapters still have delivery‑state bugs.
- **Resource management under load:** Gateway thread saturation (#118846), transcript projection livelock (#115908), and unbounded voice‑session state (#116201) indicate that the system struggles under sustained or bursty workloads.
- **Configuration inconsistency:** Memory storage locations vary across users (#43747), and `auth.order` is ignored for GitHub Copilot (#46031), leading to confusion and debugging overhead.
- **Internationalization gaps:** Feishu Chinese filename handling (#48788) highlights the need for robust multi‑encoding support across all channels.

**Satisfaction indicators:** The high volume of closed PRs addressing these exact issues suggests the maintainers are responsive, but the recurrence of similar bugs across releases points to underlying architectural complexity.

## 8. Backlog Watch
**Long‑open, high‑impact issues requiring maintainer attention:**
- [#44925](https://github.com/openclaw/openclaw/issues/44925) – Subagent completion silently lost (23 comments, open since March 2026).  
  *Tagged:* `clawsweeper:needs-maintainer-review`, `clawsweeper:needs-product-decision`.
- [#67777](https://github.com/openclaw/openclaw/issues/67777) – Subagent completion delivery lost on timeout/drain (10 comments, open since April 2026).  
  *Tagged:* `clawsweeper:needs-maintainer-review`, `impact:session-state`.
- [#116201](https://github.com/openclaw/openclaw/issues/116201) – Realtime voice unbounded state retention (59 comments, open since July 2026).  
  *Tagged:* `clawsweeper:needs-maintainer-review`, `clawsweeper:needs-product-decision`.
- [#118846](https://github.com/openclaw/openclaw/issues/118846) – Gateway main thread saturation at boot (14 comments, open since August 2026).  
  *Tagged:* `impact:crash-loop`.
- [#115908](https://github.com/opencl

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem
**Date:** 2026-08-05

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is in a **stability-hardening phase**, with the highest-activity projects shifting from feature exploration to production reliability, security hardening, and multi-channel orchestration. Six projects (OpenClaw, IronClaw, CoPaw, Hermes Agent, NanoBot, ZeroClaw) are executing at high velocity, while three (TinyClaw, ZeptoClaw, NullClaw, Moltis) show minimal or no recent activity—suggesting a bifurcating ecosystem where maintainership bandwidth determines momentum. Cross-cutting concerns—subagent reliability, channel adapter bugs, enterprise deployability, and security isolation—dominate community discussions across all active projects.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | None | 🟡 Maintenance — stable but complex |
| **IronClaw** | 50 | 50 | v1.1.0-rc.1 pending | 🟢 Strong — active consolidation |
| **CoPaw (QwenPaw)** | 28 | 49 | v2.1.0-beta.1 closed | 🟢 Strong — beta stabilization |
| **Hermes Agent** | 50 | 50 | None | 🟡 Active — regression-heavy |
| **NanoBot** | 5 | 26 | None | 🟡 High velocity — maturing |
| **ZeroClaw** | 50 | 50 | None | 🟡 High activity — security-critical gaps |
| **NanoClaw** | 0 | 5 | None | 🟢 Stable — low but steady |
| **LobsterAI** | 1 | 13 | v2026.8.3 merged | 🟢 Stable — polish phase |
| **PicoClaw** | 3 | 4 | None | 🔴 Slow — maintainer bottleneck |
| **NullClaw** | 0 | 1 | None | 🟡 Quiet — minimal engagement |
| **Moltis** | 0 | 1 | None | 🔴 Near-stalled |
| **TinyClaw** | 0 | 0 | None | 🔴 Inactive |
| **ZeptoClaw** | 0 | 0 | None | 🔴 Inactive |

*Health score based on activity velocity, bug-response cadence, release currency, and backlog resolution.*

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale of operations:** 500 issues/500 PRs daily—the highest absolute volume in the ecosystem—indicating the largest active user base and contributor pool.
- **Multi-channel depth:** Channel adapters for Synology Chat, Slack, Zalo, Feishu, Discord, and WhatsApp with ongoing reliability fixes signal the most mature adapter surface.
- **Subagent orchestration focus:** Deep investment in distributed-agent reliability (issues #44925, #67777) positions OpenClaw as the reference architecture for complex multi-agent workflows.

**Technical approach differences:**
- OpenClaw uses a **Gateway-centric architecture** with plugin-scoped tests and canonical database templates, contrasting with IronClaw's WASM-module approach and ZeroClaw's RFC-driven design process.
- Test infrastructure investment (storage migration speedups, Linux plugin discovery isolation) is more systematic than peers, suggesting a larger engineering team.

**Community size comparison:**
OpenClaw's 104-comment issue on DeepSeek silent failures and 59-comment voice-session issue are the highest-engagement items across the entire digest, confirming it has the largest and most engaged community. IronClaw and Hermes Agent follow at moderate scale; NanoBot and ZeroClaw show smaller but technically sophisticated communities.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Subagent/Agent orchestration reliability** | OpenClaw, Hermes Agent, ZeroClaw | Guaranteed delivery, timeout handling, silent failure recovery, cross-session isolation |
| **Channel adapter stability** | OpenClaw, NanoBot, PicoClaw, CoPaw | Telegram polling recovery, Matrix/Continuwity compat, Slack card finalization, Discord auth |
| **Enterprise deployment** | NanoBot, Hermes Agent, ZeroClaw | Trusted-proxy auth, custom API endpoints, multi-tenant isolation, self-hosted gateways |
| **MCP tool reliability** | NanoBot, PicoClaw, Hermes Agent | Error-envelope handling, connection-failure recovery, server-hang containment |
| **Voice/Realtime sessions** | OpenClaw, CoPaw | Unbounded state cleanup, Web Speech API alternatives, self-hosted STT/TTS |
| **Cost/usage observability** | OpenClaw, PicoClaw, LobsterAI | Prompt-cache token visibility, OpenRouter cost exposure, per-message billing |
| **Web UI performance** | PicoClaw, NanoBot, CoPaw | Chat-history rendering lag, session conversion, inline token highlighting |
| **Security & data isolation** | ZeroClaw, NanoBot, LobsterAI | Cross-agent key leakage, webhook authentication gaps, per-tenant ownership scoping |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | CoPaw | Hermes Agent | NanoBot | ZeroClaw | NanoClaw |
|---|---|---|---|---|---|---|---|
| **Primary focus** | Multi-channel agent orchestration | WASM sandbox + Reborn architecture | Desktop-first AI assistant (Qwen) | Plugin lifecycle + multi-tenant | Enterprise channel integrations | RFC-driven security architecture | Telephony/voice channel expansion |
| **Target users** | Power users, multi-agent teams | Infrastructure/infra-heavy users | Desktop consumers, Qwen ecosystem | Plugin developers, ops teams | Enterprise/IT teams | Security-conscious deployers | SMS/voice channel users |
| **Architecture** | Gateway + plugin registry | Rust WASM modules, port inversion | Node.js desktop (Electron) | Lifecycle hooks + skill system | Provider-agnostic channels | RFC-governed, pluggable auth | Skill-owned capability model |
| **Key differentiator** | Deepest channel adapter coverage | Strongest architectural rigor (Waves 0–5) | Playwright integration, desktop polish | Surgical orchestration skill, telemetry | Meta-Search RRF aggregation, Quick Chat | Formal RFC process, MoA support | Dial telephony adapter |
| **Release cadence** | Sparse (no releases today) | Active (v1.1.0-rc.1 in flight) | Beta track (v2.1.0-beta.1) | None (regression-heavy cycle) | Accumulating before bump | None (design-first) | None (feature accumulation) |

---

## 6. Community Momentum & Maturity

**Tier 1 — High-velocity, actively shipping:** OpenClaw, IronClaw, CoPaw, Hermes Agent
- All posting 50+ daily activity items; IronClaw and CoPaw have release candidates in progress.
- Hermes Agent is in a regression correction cycle (lifecycle_guard, prompt_cache_key).
- OpenClaw's volume suggests the most mature contributor base but also the most complex edge cases.

**Tier 2 — Steady development, maturing:** NanoBot, ZeroClaw, NanoClaw, LobsterAI
- NanoBot is producing high-quality PRs (WebUI polish, Meta-Search, trusted-proxy auth) at 26 PRs/day.
- ZeroClaw is design-forward (RFC process) but has critical unaddressed P0 security bugs.
- NanoClaw is slowly advancing telephony features with a 3-week review backlog on Dial PRs.
- LobsterAI merged a full release (v2026.8.3) and is in polish/monetization mode.

**Tier 3 — Low activity, potential concern:** PicoClaw, NullClaw, Moltis, TinyClaw, ZeptoClaw
- PicoClaw has a 16-day-old critical MCP-hang bug with no fix PR—maintainer bottleneck.
- NullClaw, Moltis, TinyClaw, ZeptoClaw show near-zero community engagement, raising sustainability questions.

---

## 7. Trend Signals

| Trend | Evidence Across Projects | Value for AI Agent Developers |
|---|---|---|
| **Enterprise deployability is table stakes** | NanoBot (trusted-proxy auth, custom Telegram API), Hermes Agent (multi-tenant isolation), ZeroClaw (pluggable auth) | Agents must support on-prem, self-hosted, and constrained-network deployments; standard cloud-only models are insufficient |
| **Silent failures are the #1 trust killer** | OpenClaw (#116277, #44925), NanoBot (#5237 MCP envelope), PicoClaw (#3269 MCP hang) | Observable failure modes, retry semantics, and explicit error signaling must be first-class design requirements |
| **Multi-channel adapter quality varies wildly** | 10+ projects each maintaining 5-15 channel adapters; recurrent bugs in Telegram, Discord, Slack, Feishu | Adapter code is the biggest source of production instability; standardized integration tests across channels would benefit the ecosystem |
| **Security isolation in multi-agent/multi-tenant contexts is unresolved** | ZeroClaw (P0 webhook auth, P1 cross-agent data leakage), NanoBot (P1 API key leakage via os.environ), Hermes Agent (cross-session cache pollution) | No project has fully solved per-agent data ownership; this is a gap where a well-scoped contribution would have high impact |
| **Search aggregation is emerging as a standard capability** | NanoBot (Meta-Search RRF), PicoClaw (Exa provider), OpenClaw (memory search chunking) | Built-in multi-engine search with quality ranking is becoming a baseline expectation for agent tooling |
| **Web UI polish is a competitive differentiator** | NanoBot (6 WebUI PRs in one day), CoPaw (Playwright desktop integration), OpenClaw (split-pane UI fixes) | Desktop and web UX quality directly correlates with user retention; "invisible" UI bugs erode trust faster than backend issues |
| **RFC-driven design is gaining traction** | ZeroClaw (8 active RFCs), IronClaw (epic-driven architecture waves) | Formal design review processes produce higher-quality architecture decisions; communities adopting this show better long-term maintainability |
| **Cron/automation reliability is a widespread gap** | OpenClaw (#91363 LLM failure in cron), ZeroClaw (#9320 SQLite lock hold), CoPaw (cron enabled-state persistence) | Scheduled agent execution needs wall-clock timeouts, lock management, and state persistence—this is an underserved area |

---

**Summary:** The ecosystem is consolidating around production reliability and enterprise deployability. OpenClaw leads in scale and channel depth; IronClaw in architectural rigor; CoPaw in desktop integration; NanoBot in contributor velocity; ZeroClaw in security-focused design. The most impactful opportunities for new contributors are **cross-agent data isolation**, **MCP error-handling standardization**, and **cron/automation reliability**—areas where multiple projects report persistent, unresolved gaps.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-05

## 1. Today's Overview

NanoBot is exhibiting **high development velocity**, with 26 PRs updated and 5 issues touched in the last 24 hours. The project is in an active stabilization phase: a wave of WebUI polish, bug fixes, and feature refinements landed today alongside two major capability additions (Meta-Search provider, Mattermost thread policies). No new release was published, suggesting the team is accumulating changes before a version bump. Activity is concentrated around channel reliability, WebUI consistency, and provider compatibility — indicative of a project maturing past its initial feature-build phase into production hardening.

## 2. Releases

**None.** No new versions were published in the reporting window.

## 3. Project Progress

### Merged / Closed PRs Today

| PR | Author | Description |
|---|---|---|
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | goodtiding5 | **Mattermost:** separate `groupPolicyInThread` config + WebUI exposure |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | santhreal | **WeCom fix:** fall back when filename sanitization strips everything |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | santhreal | **Telegram fix:** preserve fenced code blocks with special-char languages (`c++`, `html+django`) |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | concertypin | **WebUI security:** trusted-proxy bootstrap auth for Cloudflare Tunnel + Access deployments |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) | aoliaoduo | **Telegram fix:** add missing `group_mode` field to Pydantic schema (long-standing silent ignore) |
| [#5244](https://github.com/HKUDS/nanobot/pull/5244) | chengyongru | **WebUI fix:** render Markdown in prompt-rail hover previews |
| [#5245](https://github.com/HKUDS/nanobot/pull/5245) | chengyongru | **WebUI fix:** align timestamp tooltip styles with shared component |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | Re-bin | **WebUI refactor:** unify floating controls styling |
| [#5243](https://github.com/HKUDS/nanobot/pull/5243) | chengyongru | **WebUI fix:** align automation metadata with timestamps |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) | chengyongru | **Commands fix:** reject malformed slash commands, suggest closest match |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | chengyongru | **WebUI feature:** integrated Vite dev mode (`nanobot webui --dev`) |
| [#5241](https://github.com/HKUDS/nanobot/pull/5241) | chengyongru | **WebUI polish:** refine inline token highlights (accent color, semibold) |
| [#5236](https://github.com/HKUDS/nanobot/pull/5236) | chengyongru | **Anthropic fix:** Opus 5 effort controls + adaptive thinking support |

**Key advances:** A cohesive WebUI visual-consistency pass led by `chengyongru` (6 merged PRs), the first long-overdue Telegram `group_mode` schema fix, and production-grade security hardening via trusted-proxy bootstrap auth.

### Open PRs Advancing Features

| PR | Author | Description |
|---|---|---|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | goodtiding5 | **Meta-Search provider** (mst-python) — aggregates DuckDuckGo, Google, Brave, Bing via Reciprocal Rank Fusion |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | nolanchic | **Telegram custom Bot API base URL** — self-hosted / enterprise gateway support |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | orrinwitt | **Matrix fix** — non-empty POST body for Continuwuity compatibility |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | chengyongru | **WebUI refactor** — elevation system, flattened layouts, auto-save theme |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | QQQ300kuai | **Telegram polling recovery** — recover from silently stalled polling after network blips |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | chengyongru | **Session refactor** — remove request-scoped access grants, simplify `Tool.enabled()` |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | Re-bin | **Quick Chat & Temporary Chat** — persistent Quick Chat + opt-in ephemeral in-memory sessions |

## 4. Community Hot Topics

| Issue / PR | Author | Comments | Activity |
|---|---|---|---|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) — Meta-Search provider | goodtiding5 | — | High interest: multi-engine search aggregation addresses a widely requested capability |
| [#5236](https://github.com/HKUDS/nanobot/pull/5236) — Opus 5 effort controls | chengyongru | — | Critical for Anthropic power users; directly closes [#5235](https://github.com/HKUDS/nanobot/issue/5235) |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) — Trusted proxy auth | concertypin | — | Enterprise deployment need; enables Cloudflare Tunnel + Access patterns |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) — Quick / Temporary Chat | Re-bin | — | UX enhancement for casual and sandboxed interactions |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) — Custom Telegram API base | nolanchic | — | Enterprise/self-hosted Telegram gateway support |

**Underlying needs:** Users are pushing hard on **enterprise deployability** (trusted proxy auth, custom Bot API endpoints, Matrix homeserver compatibility) and **search quality** (Meta-Search RRF aggregation). The Quick Chat feature signals demand for low-friction, non-persistent interactions alongside the core persistent-session model.

## 5. Bugs & Stability

| Severity | Issue / PR | Author | Summary | Fix PR |
|---|---|---|---|---|
| **P1 — Security** | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | hamb1y | Provider API keys leaked via global `os.environ` mutation; gateway providers overwrite keys from other providers | — |
| **P1 — Provider** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) | whisperity | Opus 5 temperature bug: `omit_temperature` list missing `"opus-5"`, causing rejected API requests | [#5236](https://github.com/HKUDS/nanobot/pull/5236) ✅ closed |
| **P2 — Agent** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | Lucky314159 | MCP tool "data not found" envelope misinterpreted as success; agent waits for timeout without recovery | — |
| **P2 — Channel** | [#5247](https://github.com/HKUDS/nanobot/issues/5247) | orrinwitt | Matrix bot fails to auto-join on invitation; Continuwuity rejects empty POST body from `nio.Api.join()` | [#5248](https://github.com/HKUDS/nanobot/pull/5248) 🔄 open |
| **P2 — Channel** | [#5156](https://github.com/HKUDS/nanobot/pull/5156) | QQQ300kuai | Telegram polling silently stalls after transient network blips; no log output, bot stops receiving messages | 🔄 open |
| **P2 — Channel** | [#5222](https://github.com/HKUDS/nanobot/pull/5222) | santhreal | Telegram fenced code blocks with special chars (`c++`, `html+django`) rendered corrupted | ✅ closed |
| **P2 — Channel** | [#5223](https://github.com/HKUDS/nanobot/pull/5223) | santhreal | WeCom media download writes to directory path when filename sanitization strips everything | ✅ closed |
| **P2 — Commands** | [#5242](https://github.com/HKUDS/nanobot/pull/5242) | chengyongru | Malformed slash commands forwarded to LLM instead of being rejected | ✅ closed |

**Notable:** The **API key leakage bug [#4784](https://github.com/HKUDS/nanobot/issues/4784)** remains unfixed and is the highest-severity open issue — it has been open since July 6 with no responsive PR. The MCP envelope misinterpretation [#5237](https://github.com/HKUDS/nanobot/issues/5237) is also concerning for production reliability.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|---|---|---|
| **Meta-Search provider** (RRF multi-engine aggregation) | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | **High** — PR is P1, well-scoped, ready for review |
| **Quick Chat & Temporary Chat** | [#5184](https://github.com/HKUDS/nanobot/pull/5184) | **Medium-High** — feature-complete but open; may be held for a minor version |
| **Custom Telegram Bot API base URL** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **Medium** — P2, open since July 14; niche enterprise need |
| **Integrated Vite dev mode** | [#5239](https://github.com/HKUDS/nanobot/pull/5239) | **High** — already merged; improves contributor workflow |
| **Session access simplification** | [#5238](https://github.com/HKUDS/nanobot/pull/5238) | **Medium** — refactor, P1, removes abstraction layer |

The roadmap clearly trends toward **search enrichment**, **enterprise deployment flexibility**, and **WebUI polish**. The Quick Chat feature, if merged, would significantly broaden the product's appeal for casual users.

## 7. User Feedback Summary

- **Enterprise deployment pain:** Multiple issues (trusted proxy auth [#5210], custom Telegram API [#4919], Matrix/Continuwity compatibility [#5247]) show users are running NanoBot in constrained corporate environments (Cloudflare Access, self-hosted Mattermost, Continuwity homeservers) and hitting friction points.
- **Provider compatibility gaps:** Opus 5 support was broken on launch (#5235 → fixed in #5236). Users expect rapid model-release coverage.
- **MCP reliability concern:** The "data not found" envelope misinterpretation (#5237) reveals a gap in how business-layer errors are distinguished from transport-level success — a pattern likely to recur with other tool integrations.
- **Telegram robustness:** Two separate Telegram bugs (polling stall #5156, code-block rendering #5222, missing `group_mode` schema #1776) suggest the Telegram channel needs sustained attention.
- **WebUI satisfaction:** The volume of WebUI polish PRs (6 merged, 2 open) indicates strong contributor momentum and likely high user satisfaction with the evolving interface.

## 8. Backlog Watch

| Issue / PR | Author | Open Since | Risk |
|---|---|---|---|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) — API key leakage via `os.environ` | hamb1y | 2026-07-06 (30 days) | **Critical** — security issue, no fix in progress |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) — MCP "data not found" misinterpreted as success | Lucky314159 | 2026-08-04 | **High** — agent reliability, no fix yet |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) — Telegram polling stall recovery | QQQ300kuai | 2026-07-29 | **Medium** — PR open, unmerged |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) — Custom Telegram API base | nolanchic | 2026-07-14 | **Medium** — PR open, unmerged |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) — Remove request-scoped access grants | chengyongru | 2026-08-04 | **Low** — refactor, just opened |

**Top concern:** Issue [#4784](https://github.com/HKUDS/nanobot/issues/4784) has been open for a month with no responding PR. API key leakage between providers is a **security-critical** bug that warrants urgent maintainer attention before it reaches production deployments.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-05

## 1. Today's Overview

Hermes Agent showed **high activity** today with 50 issues and 50 PRs touched in the last 24 hours, though no new releases were published. The project is in an active development and stabilization phase: two bug-fix PRs were closed (likely merged), and a large wave of P2 critical bugs—many stemming from the recent `prompt_cache_key` and `lifecycle_guard` regressions—were surfaced today. Community engagement around plugin architecture expansion and multi-tenant isolation remains strong. No breaking changes or version bumps are scheduled for this cycle.

---

## 2. Releases

No new releases were published today.

---

## 3. Project Progress

**Closed/Merged today:**
- [#78949](https://github.com/NousResearch/hermes-agent/issues/78949) — `refactor(telegram): extract DM-topic machinery into TelegramDmTopicMixin` (−661 lines). Part of the Telegram god-file decomposition epic.
- [#78971](https://github.com/NousResearch/hermes-agent/issues/78971) — `fix(terminal): guard NUL bytes in remote script read fallback` (follow-up to #76762). Prevents `ValueError` when the lifecycle guard encounters ELF/Mach-O binaries.

**Open PRs advancing features or fixes:**
- [#78959](https://github.com/NousResearch/hermes-agent/pull/78959) — **P0** fix scoping `prompt_cache_key` by session to stop cross-session cache bucket sharing (fixes #78941).
- [#78873](https://github.com/NousResearch/hermes-agent/pull/78873) — Fixes orphaned `hermes serve` pile-up on macOS Desktop causing `OSError: [Errno 24] Too many open files`.
- [#79000](https://github.com/NousResearch/hermes-agent/pull/79000) — New `surgical-orchestration` skill with parallel worker-pool concurrency for multi-folder subagent builds.
- [#79010](https://github.com/NousResearch/hermes-agent/pull/79010) — Telegram adapter wave-2 sharding (−4,724 lines from 10,147-line god file).
- [#78829](https://github.com/NousResearch/hermes-agent/pull/78829) — Fixes lifecycle guard crash on slash-bearing executables in terminal commands.
- [#79009](https://github.com/NousResearch/hermes-agent/pull/79009) — Hardens memory entry scanning for injection/promptware patterns.

---

## 4. Community Hot Topics

| Issue | Comments | Reactions | Focus |
|-------|----------|-----------|-------|
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) — Plugin Interface Expansion tracking | 21 | 0 | Plugin API roadmap |
| [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) — Lifecycle-event catalog & hook taxonomy | 17 | 0 | Plugin lifecycle standards |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) — Solving the Multi-Tenant Hermes Problem | 14 | 2 | Multi-tenant memory isolation |
| [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) — Configurable bounded auto-continue | 9 | 1 | Agent iteration budgeting |
| [#54204](https://github.com/NousResearch/hermes-agent/issues/54204) — Move/rescope sessions between projects | 8 | 3 | Desktop UX improvement |

**Analysis:** The plugin interface (#64182, #64231) is the dominant discussion topic, with the community pushing for a formal lifecycle-event catalog before accepting the backlog of pending hook PRs. Multi-tenant isolation (#34352) is a high-sentiment issue (2 👍) with a production-backed fix already in use, signaling strong enterprise demand. Auto-continue (#16004) and session migration (#54204) reflect power-user workflow needs.

---

## 5. Bugs & Stability

**P2 (high severity) bugs reported today:**

| Issue | Summary | Fix PR |
|-------|---------|--------|
| [#78942](https://github.com/NousResearch/hermes-agent/issues/78942) | `lifecycle_guard` crashes on NUL-bearing candidate paths — incomplete #76762 fix | [#78829](https://github.com/NousResearch/hermes-agent/pull/78829), [#78971](https://github.com/NousResearch/hermes-agent/pull/78971) |
| [#78974](https://github.com/NousResearch/hermes-agent/issues/78974) | `lifecycle_guard` crashes with `RuntimeError: Could not determine home directory`, breaking all terminal commands | — |
| [#78122](https://github.com/NousResearch/hermes-agent/issues/78122) | Regression: `max_in_progress` enforced per-board, not gateway-wide | — |
| [#78975](https://github.com/NousResearch/hermes-agent/issues/78975) | Feishu cron delivery fails — `receive_id_type="thread_id"` invalid API value | — |
| [#77047](https://github.com/NousResearch/hermes-agent/issues/77047) | `read_file` misdetects valid UTF-8 CJK files as binary at 1000-byte sample boundary | — |
| [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) | OpenCode Go `gpt-5.6-luna` omits `finish_reason` → fake mid-stream drops strip streamed answers | — |
| [#78406](https://github.com/NousResearch/hermes-agent/issues/78406) | OpenAI transport not rebuilt until retry budget exhausted on mid-stream connection drops | — |
| [#78948](https://github.com/NousResearch/hermes-agent/issues/78948) | Auxiliary client sends primary provider model to custom fallback endpoint → 404 | — |
| [#76602](https://github.com/NousResearch/hermes-agent/issues/76602) | Auxiliary vision with custom provider + `base_url` loses `api_key` → 401 | — |
| [#44349](https://github.com/NousResearch/hermes-agent/issues/44349) | `auxiliary.vision.provider="custom:xxx"` collapses to bare built-in provider | — |
| [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) | Windows 11 25H2: `hermes dashboard --status` falsely reports no dashboard | — |
| [#78514](https://github.com/NousResearch/hermes-agent/issues/78514) | Feishu multiplex mode: per-profile dedup cache causes replayed events to process twice | — |
| [#78847](https://github.com/NousResearch/hermes-agent/issues/78847) | Desktop: folder attachment overwritten by message content on send | — |
| [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) | Desktop scans entire home directory for git repos with no config to restrict or disable | — |

**P3 bugs:**
- [#77950](https://github.com/NousResearch/hermes-agent/issues/77950) — Root `overrides` pins vulnerable `brace-expansion` 5.0.8 (GHSA-rgw5-rvv9-x895, high DoS)
- [#78254](https://github.com/NousResearch/hermes-agent/issues/78254) — Docs: quickstart calls Nous Portal "free" but Portal page says subscription required

**Security:** [#79009](https://github.com/NousResearch/hermes-agent/pull/79009) addresses memory-entry injection scanning gaps; [#24302](https://github.com/NousResearch/hermes-agent/pull/24302) redacts sensitive MCP URL query values.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likely In Next Version? |
|---------|-------|------------------------|
| Disable automatic project/repo discovery | [#64615](https://github.com/NousResearch/hermes-agent/issues/64615) | **Yes** — low-risk config toggle |
| Desktop status bar: subscription/token usage | [#78997](https://github.com/NousResearch/hermes-agent/issues/78997) | Possible — UI enhancement |
| Move/rescope sessions between projects | [#54204](https://github.com/NousResearch/hermes-agent/issues/54204) | Unlikely — requires backend changes |
| Configurable bounded auto-continue on iteration budget exhaustion | [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) | **Likely** — P2, clear user need |
| Surgical-orchestration skill (multi-folder subagent builds) | [#79000](https://github.com/NousResearch/hermes-agent/pull/79000) | **Yes** — PR already open |
| Telegram Bot API 10.2 parity | [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) | Ongoing — wave-2 sharding in progress |
| Windows portable/isolated deployment | [#46199](https://github.com/NousResearch/hermes-agent/issues/46199) | Unlikely — packaging effort |
| Multi-tenant memory isolation | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | **Yes** — production-backed, high demand |

---

## 7. User Feedback Summary

**Pain points:**
- **Multi-tenant isolation is broken** — memory operations bypass the hook system, forcing users to fork core for tenant separation ([#34352](https://github.com/NousResearch/hermes-agent/issues/34352)).
- **Desktop home-directory scan** causes performance degradation on launch with no way to disable it ([#53328](https://github.com/NousResearch/hermes-agent/issues/53328)).
- **`lifecycle_guard` fragility** — multiple crash vectors (NUL paths, unresolvable `HOME`, slash-bearing executables) are destabilizing terminal tool usage ([#78942](https://github.com/NousResearch/hermes-agent/issues/78942), [#78974](https://github.com/NousResearch/hermes-agent/issues/78974), [#78829](https://github.com/NousResearch/hermes-agent/issues/78829)).
- **Caching regressions** — `prompt_cache_key` not scoped by session causes cross-tenant cache pollution ([#78959](https://github.com/NousResearch/hermes-agent/pull/78959)), with cascading follow-up issues for xAI and Codex transports ([#79017](https://github.com/NousResearch/hermes-agent/issues/79017)–#79012).
- **Auxiliary vision provider bugs** — custom providers lose API keys or collapse to built-ins ([#76602](https://github.com/NousResearch/hermes-agent/issues/76602), [#44349](https://github.com/NousResearch/hermes-agent/issues/44349), [#78948](https://github.com/NousResearch/hermes-agent/issues/78948)).
- **Feishu cron and multiplex bugs** — delivery failures and duplicate message processing in production ([#78975](https://github.com/NousResearch/hermes-agent/issues/78975), [#78514](https://github.com/NousResearch/hermes-agent/issues/78514)).

**Positive signals:** Users are actively contributing fixes (Telegram sharding, cache scoping, memory hardening). The new surgical-orchestration skill and real-time usage indicator request show engaged power users.

---

## 8. Backlog Watch

| Issue | Age | Priority | Why It Needs Attention |
|-------|-----|----------|----------------------|
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) — Multi-tenant memory isolation | ~2.5 months | P3 | Production用户使用已验证修复；无官方合并路径 |
| [#16004](https://github.com/NousResearch/hermes-agent/issues/16004) — Configurable bounded auto-continue | ~3.5 months | P2 | Blocks long-running autonomous workflows |
| [#54204](https://github.com/NousResearch/hermes-agent/issues/54204) — Move sessions between projects | ~1.5 months | P3 | 3 👍; high usability value |
| [#64615](https://github.com/NousResearch/hermes-agent/issues/64615) — Disable auto project discovery | ~1.5 months | P3 | Directly requested; simple config toggle |
| [#46199](https://github.com/NousResearch/hermes-agent/issues/46199) — Windows portable deployment | ~2 months | P3 | Security-conscious enterprise users |
| [#78942](https://github.com/NousResearch/hermes-agent/issues/78942) — lifecycle_guard NUL crash (incomplete fix) | 1 day | P2 | Fix PR open but issue unresolved |
| [#78974](https://github.com/NousResearch/hermes-agent/issues/78974) — lifecycle_guard HOME crash | 1 day | P2 | No fix PR yet; breaks all terminal usage |
| [#78122](https://github.com/NousResearch/hermes-agent/issues/78122) — max_in_progress per-board regression | 1 day | P3 | Production gateway behavior change |
| [#77950](https://github.com/NousResearch/hermes-agent/issues/77950) — Vulnerable brace-expansion pin | 2 days | P3 | GHSA high; `npm audit fix` is no-op |

**Recommended maintainer focus:** The `lifecycle_guard` crash surface (two P2 issues, one incomplete fix) and the `prompt_cache_key` cross-session pollution (P0 fix in PR, but 6 follow-up issues still open) are the highest-impact items to close before the next release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-05

## 1. Today's Overview

PicoClaw saw moderate activity on 2026-08-04, with 3 issues and 4 pull requests updated in the last 24 hours. Two PRs were closed/merged (both marked stale), while two new feature PRs remain open and unreviewed. Two new open bugs were reported by users, one concerning severe Web UI responsiveness and another involving agent loop hangs on MCP server failure. No new releases were published. Overall, the project is actively receiving user reports but maintainer response on feature PRs appears slow.

## 2. Releases

No new releases this period.

---

## 3. Project Progress

**Merged / Closed PRs:**

- **[PR #3280](https://github.com/sipeed/picoclaw/pull/3280)** — *fix(auth): make browser OAuth login survive real-world callback conditions* (Author: honbou, Updated: 2026-08-04, Closed/Stale)
  - Fixes a persistent OAuth login failure on headless/remote setups where the authorization code is burned after user consent but the callback never reaches the client. Four independent root causes addressed.

- **[PR #3251](https://github.com/sipeed/picoclaw/pull/3251)** — *fix(providers): capture the prompt cache token usage in Anthropic providers* (Author: hydrogenbond007, Updated: 2026-08-04, Closed/Stale)
  - Ensures the Anthropic SDK and Messages API providers expose cache-related token metrics, enabling operators to verify prompt cache functionality and cost optimization.

**Open PRs awaiting review:**

- **[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** — *Add native Exa web search provider* (Author: kesku, Created: 2026-07-26)
  - Adds Exa as a native `tools.web` / `web_search` provider with date-range filtering and content highlights.

- **[PR #3317](https://github.com/sipeed/picoclaw/pull/3317)** — *feat(providers): log prompt cache tokens in LLM response debug output* (Author: vmuliadi-astro, Created: 2026-08-04)
  - Extends gateway debug logging to surface cache metadata (e.g., from DeepSeek via Cloudflare AI Gateway) alongside standard token counts.

---

## 4. Community Hot Topics

| # | Type | Title | Author | Comments | 👍 | Link |
|---|------|-------|--------|----------|-----|------|
| 1 | Issue | Web UI chat input is very laggy when history has a little bit long | xpader | 3 | 1 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| 2 | Issue | If the MCP server connection fails, the agent loop will hang | ruiyigen | 3 | 1 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) |
| 3 | Issue | Android version | Monessem | 6 | 0 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) |

**Analysis:** The two most-discussed open issues both concern **core agent loop reliability** — one around Web UI performance under realistic usage, the other around MCP server connectivity causing complete UI freezes. These signal that the user base is moving beyond prototype usage into sustained, production-like sessions, exposing scaling and fault-tolerance gaps. The Android issue, though closed as stale, accumulated 6 comments without resolution, indicating strong mobile-user demand that has not been addressed.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Author | Link | Fix PR? |
|----------|-------|---------|--------|------|---------|
| 🔴 High | #3269 | MCP server connection failure causes agent loop hang; chat interface stops responding entirely | ruiyigen | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | None yet |
| 🟡 Medium | #3281 | Web UI input becomes very laggy with moderate chat history | xpader | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | None yet |
| 🟢 Low | #3182 | Android app cannot launch service despite full permissions; path change fails in settings | Monessem | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | None (closed stale) |

The MCP hang bug (#3269) is the most critical — it causes a complete service outage in multi-provider setups. No fix PR has been submitted. The Web UI lag (#3281) likely relates to client-side history rendering performance and may require frontend optimization.

---

## 6. Feature Requests & Roadmap Signals

- **[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** — Native Exa web search provider. This reflects community demand for expanding the built-in tool providers beyond the existing set. Exa's focus on semantic search and highlights makes it a strong fit for AI agent workflows.
- **[PR #3317](https://github.com/sipeed/picoclaw/pull/3317)** — Debug logging for prompt cache tokens. Signals operator demand for cost-observability, especially when routing through gateways like Cloudflare AI.

**Prediction:** The Exa web search provider PR is the strongest candidate for inclusion in the next release, given it is a self-contained feature addition with clear user demand. Cache token visibility improvements are also likely to land soon, as they build on the recently merged PR #3251.

---

## 7. User Feedback Summary

| Theme | Sentiment | Details |
|-------|-----------|---------|
| OAuth / Authentication | Frustrated | PR #3280 resolved a long-standing pain point for headless/remote OAuth flows, but the issue's stale closure suggests the fix may not have been fully integrated. |
| Web UI Performance | Dissatisfied | Users report significant lag in the chat input when history grows moderately — a regression from smooth early-stage use. |
| MCP Reliability | Critical | A single MCP server failure takes down the entire chat interface, making multi-provider setups risky in production. |
| Mobile Support | Neglected | Android users continue to report launch and configuration issues with no maintainer response. |
| Cost Observability | Positive | Users appreciate improvements in prompt cache visibility and want more of it. |

---

## 8. Backlog Watch

| # | Type | Title | Created | Days Open | Priority |
|---|------|-------|---------|-----------|----------|
| #3182 | Issue | Android version — can't launch service, can't change path | 2026-06-26 | ~40 | Medium (closed stale but demand remains) |
| #3269 | Issue | MCP server hang freezes chat interface | 2026-07-20 | ~16 | 🔴 High — no fix PR |
| #3281 | Issue | Web UI input lag with chat history | 2026-07-21 | ~15 | 🟡 Medium — no fix PR |
| #3299 | PR | Add native Exa web search provider | 2026-07-26 | ~10 | Feature — awaiting review |
| #3317 | PR | Log prompt cache tokens in debug output | 2026-08-04 | 1 | Feature — newly opened |

**Key concern:** Two high-impact bug reports (#3269, #3281) have no associated fix PRs and have gone unaddressed for 15–16 days. The Android issue (#3182) has been stale for ~40 days despite 6 user comments. Maintainer attention to these items is recommended to prevent user churn.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-05

## 1. Today's Overview

NanoClaw showed moderate development activity today with 5 PR updates and zero new issue activity. One PR was merged (a scheduled-task runtime fix), while four PRs remain open and under review. No new releases were published. The project is in a steady contributory state—active feature work on the Dial channel integration is progressing through review, and a critical Discord approval bug fix is awaiting merge. Overall project health is stable with no blocking concerns.

## 2. Releases

No new releases today.

## 3. Project Progress

**Merged/Closed Today:**

- **[PR #3154](https://github.com/nanocoai/nanoclaw/pull/3154)** — `fix(agent-runner): give scheduled tasks current run time` (Koshkoshinsk). The agent runner now renders task `time` from the effective scheduled occurrence (`process_after`) with a fallback to creation timestamp for legacy rows. A task-only `current_time` is also generated on arrival at the agent, including weekday and configured agent-group timezone. This improves scheduling accuracy for timed automation workflows.

**PRs Under Review:**

- **[PR #3186](https://github.com/nanocoai/nanoclaw/pull/3186)** — Refactor to add host seams for skill-owned capabilities, enabling skills to expose their own capabilities more cleanly.
- **[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)** — Feature skill adding **Dial** to the channel picker, wizard, and `runChannelSkill` model.
- **[PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)** — Feature skill implementing the **Dial channel adapter** for SMS and AI voice calls.
- **[PR #3185](https://github.com/nanocoai/nanoclaw/pull/3185)** — Bug fix for Discord webhook interaction `custom_id` parsing (see Bugs & Stability).

## 4. Community Hot Topics

The most discussed items today are the two **Dial channel** feature PRs and the **Discord approval bug** fix:

| PR | Author | Status | Topic |
|---|---|---|---|
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | OmriBenShoham | Open | Dial channel adapter (SMS + AI voice calls) |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | OmriBenShoham | Open | Dial integration in setup wizard & channel picker |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | omerh | Open | Discord approval button fix |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | zvi-fried | Open | Refactor: host seams for skill-owned capabilities |

**Analysis:** The dominant theme is **telephony/voice channel expansion** via the Dial integration. Two separate but related PRs from the same author suggest a coordinated feature push to bring SMS and AI voice call capabilities into NanoClaw. The Discord fix PR addresses a high-impact user-facing bug where every approval button click resolves as rejection—a critical usability issue for anyone using Discord-based approval flows. The refactor PR (#3186) signals architectural work to make skill-owned capabilities more modular, likely a prerequisite for future channel integrations.

## 5. Bugs & Stability

| Severity | Bug | PR | Status |
|---|---|---|---|
| **High** | Discord `ask_question` / approval buttons always resolve as rejected due to incorrect `custom_id` parsing in the webhook interaction path | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | Open (fix in review) |
| **Medium** | Scheduled tasks lacked current runtime context, causing incorrect time rendering in agent output | [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | **Merged** |

The Discord bug is the most impactful open issue: any user relying on Discord button approvals for agent interactions is experiencing complete failure. No other new bug reports were filed today (0 new issues).

## 6. Feature Requests & Roadmap Signals

**Active feature work:**
- **Dial channel (SMS + AI voice calls)** — [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [#3050](https://github.com/nanocoai/nanoclaw/pull/3050). These are the most significant feature pushes on the board. If merged, the next release will add Dial as a first-class channel option alongside existing integrations.
- **Host seams for skill-owned capabilities** — [#3186](https://github.com/nanocoai/nanoclaw/pull/3186). This refactor enables skills to own and expose their capabilities at the host level, a structural enabler for future skill-based feature expansion.

**Prediction:** The Dial integration is likely to ship in the next minor release if both PRs pass review. The host-seams refactor may land sooner as a non-breaking architectural improvement.

## 7. User Feedback Summary

No new issues were opened today, so direct user feedback is absent from this cycle. However, the merged and open PRs reveal clear pain points:

- **Discord approval flows are broken** — users clicking "Approve" on Discord cards get rejected responses. This is a critical usability defect that likely affects a non-trivial portion of the Discord-integrated user base.
- **Scheduled task timing is unreliable** — the merged fix (#3154) indicates prior users experienced incorrect task scheduling display, particularly around timezone and weekday context.
- **Demand for telephony channels** — the dual Dial PRs suggest strong user or community interest in SMS and AI voice call integrations, filling a gap in NanoClaw's current channel roster.

## 8. Backlog Watch

| PR | Age | Concern |
|---|---|---|
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3186) | Open since 2026-07-14 (~22 days) | Dial channel adapter — core feature, needs review |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | Open since 2026-07-14 (~22 days) | Dial setup wizard integration — blocked on or parallel to #3041 |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | Open since 2026-08-04 (~1 day) | Discord fix — high severity, low age; monitor for quick merge |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | Open since 2026-08-04 (~1 day) | Host seams refactor — new, low risk |

The two Dial PRs (#3041, #3050) have been open for ~3 weeks. While feature PRs naturally take longer to review, maintainers should prioritize triage to unblock the telephony integration pipeline. The Discord fix (#3185) is recent and high-severity—it should be the top review priority this week.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-08-05

---

## 1. Today's Overview

NullClaw recorded **low activity** over the past 24 hours, with zero issues updated and only one open pull request in progress. No new releases were published, and no issues were closed or merged today, suggesting a quiet maintenance cycle. The sole ongoing contribution—PR #981, which introduces a `grok-cli` provider for xAI's Grok CLI—represents a feature expansion rather than a stability or bug-fix effort. Overall project health appears stable but not actively evolving at this moment.

---

## 2. Releases

No new releases were published in the last 24 hours. The project is currently awaiting the next version iteration, likely to include any merged contributions from the active PR backlog.

---

## 3. Project Progress

**Merged/Closed PRs Today:** None.

**Open PRs in Flight:**

- **[PR #981](https://github.com/nullclaw/nullclaw/pull/981)** — `feat(provider): add grok-cli provider for xAI Grok CLI`
  - **Author:** valonmulolli
  - **Created:** 2026-07-29 | **Last Updated:** 2026-08-04
  - **Status:** Open (1 day inactive)
  - **Summary:** Adds an optional `grok-cli` provider that delegates to the local `grok` CLI (xAI Grok), following the same spawn-per-request pattern established by existing providers (`codex-cli`, `gemini-cli`, `claude-cli`). Requires the `grok` CLI to be installed and authenticated locally.

No features were merged and no bugs were resolved today.

---

## 4. Community Hot Topics

| Rank | Item | Type | Activity | Link |
|------|------|------|----------|------|
| 1 | Add grok-cli provider for xAI Grok CLI | PR #981 | Open, updated 2026-08-04, 0 reactions | [PR #981](https://github.com/nullclaw/nullclaw/pull/981) |

**Analysis:** PR #981 is the only active community contribution. The request to add a `grok-cli` provider reflects user demand for xAI's Grok as a first-class provider within NullClaw's multi-provider architecture. The spawn-per-request pattern mirrors existing CLI-based providers, suggesting the maintainers are open to consistent provider additions. No contentious issues or heated debates were observed today.

---

## 5. Bugs & Stability

No bug reports, crashes, or regressions were filed or resolved in the last 24 hours. The project shows no immediate stability concerns.

---

## 6. Feature Requests & Roadmap Signals

- **PR #981 — xAI Grok CLI Provider ([link](https://github.com/nullclaw/nullclaw/pull/981)):** The most prominent roadmap signal this period. If merged, it would extend NullClaw's provider ecosystem to include xAI's Grok alongside Claude, Gemini, and Codex. This aligns with the project's pattern of supporting CLI-based agent providers and suggests the roadmap continues to emphasize **provider diversity** and **local CLI integration**.

No other feature requests or roadmap signals were active today.

---

## 7. User Feedback Summary

No new user feedback, issues, or discussions were posted today. Based on the single open PR, the community's current focus is on **expanding provider coverage** rather than reporting pain points or requesting fixes. The absence of issues suggests user satisfaction is steady, though the lack of engagement could also indicate a lull in active development cycles.

---

## 8. Backlog Watch

| Item | Type | Open Since | Status | Link |
|------|------|------------|--------|------|
| Add grok-cli provider for xAI Grok CLI | PR #981 | 2026-07-29 (~7 days) | Open, no maintainer review activity since 2026-08-04 | [PR #981](https://github.com/nullclaw/nullclaw/pull/981) |

**Note:** PR #981 has been open for approximately one week with no merge or review activity in the most recent 24 hours. Maintainer attention is needed to evaluate the provider implementation and determine if it fits the current release cycle. No other backlog items require immediate attention.

---

*Digest generated from GitHub data retrieved on 2026-08-05. All links reference github.com/nullclaw/nullclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-05

## 1. Today's Overview
IronClaw is experiencing **very high activity** with 50 issues and 50 PRs updated in the last 24 hours. The team is heavily focused on v1.1.0 stabilization, with 12 issues closed and 18 PRs merged/closed today. The dominant effort is the Reborn architecture consolidation (Waves 0–5), alongside targeted bug fixes for Windows build blockers, CI linting, and runtime reliability. No new releases were published today; `ironclaw-v1.1.0-rc.1` remains the latest target.

## 2. Releases
No new releases were published today. The upcoming `v1.1.0-rc.1` migration is being actively worked on ([#7178](https://github.com/nearai/ironclaw/issues/7178), fix PR [#7198](https://github.com/nearai/ironclaw/pull/7198)).

## 3. Project Progress
**Merged / Closed today:**
- [#7167](https://github.com/nearai/ironclaw/pull/7167) — Fixed per-package clippy on bin-only crates; the `--lib` flag was causing hard errors on crates like `ironclaw_reborn_cli`.
- [#7200](https://github.com/nearai/ironclaw/pull/7200) — Stopped `icacls` writing to CLI stdout on Windows, resolving a fourth Windows release-blocker defect.
- [#7197](https://github.com/nearai/ironclaw/pull/7197) — Passed Windows identity environment variables to the release smoke test.
- [#7156](https://github.com/nearai/ironclaw/pull/7156) — Enforcement gates for same-layer edge inventory, composition LOC ceiling, D-E vendor census, and ratchet slack (all sabotage-tested).
- [#7161](https://github.com/nearai/ironclaw/pull/7161) — Converted loud path-keyed CI gates to inventory keying (WS10).
- [#7160](https://github.com/nearai/ironclaw/pull/7160) — WS3: lanes now consume a narrow reserve/reconcile/release port; `mcp` and `sandbox` drop `ironclaw_resources`.
- [#7159](https://github.com/nearai/ironclaw/pull/7159) — WS5: severed `conversations → turns` dependency via port inversion (register 4 → 3, zero behaviour moved).

**Key open PRs advancing the roadmap:**
- [#7198](https://github.com/nearai/ironclaw/pull/7198) — Lossless `1.0.0-rc.1 → 1.1.0-rc.1` startup migration (stacked on #7170).
- [#7181](https://github.com/nearai/ironclaw/pull/7181) — Waves 0–4 batch 2: adapter-registry move, fleet accumulation.
- [#7184](https://github.com/nearai/ironclaw/pull/7184) — Nostr host functions for WASM tools (`nostr-sign-event`).
- [#7029](https://github.com/nearai/ironclaw/pull/7029) — Restored durable delivery claim via compare-and-swap.
- [#7028](https://github.com/nearai/ironclaw/pull/7028) — Preserved terminal status during outbound recovery.

## 4. Community Hot Topics
| Issue | Comments | Summary |
|-------|----------|---------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) — *error-recoverability endgame* | 15 | Epic targeting 100% mid-run error recoverability with a formal contract (survival, model visibility, cause + cure, model turn, no non-success reports). |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) — *hermetic capability & journey testing* | 4 | Epic demanding deterministic, meaningful coverage for every supported capability and critical user journey. |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) — *clippy package-set-dependent* | 4 | `main` fails clippy for the `{ironclaw, ironclaw_reborn_config}` package set — reproduced on clean checkout. |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) — *instance deletion stuck* | 3 | Deleting an instance shows "Loading your agents…" and never completes on re-login. |
| [#7145](https://github.com/nearai/ironclaw/issues/7145) — *extension_host → loops re-layer* | 3 | Sizing the flip from file count repeats a known error; must size from four-port residue instead. |

**Analysis:** The top-discussed items are all internal architecture/epic issues rather than user-facing bugs, indicating the team is in a deep structural-refinement phase. The error-recoverability epic (#6284) with 15 comments is the most debated item, reflecting strong community interest in agent reliability guarantees.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#7168](https://github.com/nearai/ironclaw/issues/7168) — *skill invisible after install* | `builtin.skill_install` returns `{"installed":true}` but skill never appears in Settings or model listing. | Closed — likely addressed in v1.1 migration work. |
| **High** | [#7185](https://github.com/nearai/ironclaw/issues/7185) — *memory not recalled across conversations* | Context established in one conversation is lost in subsequent ones; reported by multiple Champions testers. | No fix PR yet. |
| **Medium** | [#6752](https://github.com/nearai/ironclaw/issues/6752) — *instance deletion hangs* | Deletion triggers infinite "Loading your agents…" loop. | No fix PR yet. |
| **Medium** | [#7192](https://github.com/nearai/ironclaw/issues/7192) — *optimistic user messages render below agent output* | User messages appear out of order until the durable timeline row arrives. | No fix PR yet. |
| **Medium** | [#7191](https://github.com/nearai/ironclaw/issues/7191) — *builtin.time relative-offset broken* | `parse` operation on "24 hours ago" fails with opaque `input_error()`; no relative arithmetic support. | No fix PR yet. |
| **Medium** | [#7180](https://github.com/nearai/ironclaw/issues/7180) — *web scraping hit-or-miss* | Agent uses `http` tool instead of `web_search`; some sources succeed, others fail with no clear pattern. | No fix PR yet. |
| **Low** | [#7103](https://github.com/nearai/ironclaw/issues/7103) — *latency-trace field computed when tracing is off* | Unnecessary computation in per-tool-call path (`coding/tool JSON byte count`). | Filed, no fix yet. |
| **Low** | [#7104](https://github.com/nearai/ironclaw/issues/7104) — *extractors report "no text" as Failed* | Should report `Empty` not `Failed`; model receives incorrect signal. | Filed, no fix yet. |
| **Low** | [#7146](https://github.com/nearai/ironclaw/issues/7146) — *121 tracing sites use wrong `target` syntax* | `target = "…"` sets a field instead of metadata target, making events invisible to filters. | No fix PR yet. |
| **Blocker (Windows)** | [#7197](https://github.com/nearai/ironclaw/pull/7197) + [#7200](https://github.com/nearai/ironclaw/pull/7200) | Windows build chain had multiple defects (unset env vars, `icacls` stdout pollution). | Both merged/closed today. |

## 6. Feature Requests & Roadmap Signals
| Issue | Description | v1.1 likelihood |
|-------|-------------|-----------------|
| [#7194](https://github.com/nearai/ironclaw/issues/7194) — *shared channel as outbound delivery target* | Allow admin-allowed Slack channels to be set as run-level outbound targets. | Medium — scope is L, risk high. |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) — *run-now for automations* | Manual fire button across trigger domain, product surface, capability, and WebUI. | High — direct user request, scope L. |
| [#7183](https://github.com/nearai/ironclaw/issues/7183) — *per-user LLM model selection* | Currently admin-only; users want individual model choice. | Medium — raised by Champions, scope M. |
| [#7177](https://github.com/nearai/ironclaw/issues/7177) — *schema-aware ranked tool search* | Replace fixed exact/substring scoring with canonical capability-name ranking for deferred tool retrieval. | High — directly improves agent performance, scope M. |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) — *Nostr WASM host functions* | `nostr-sign-event` for BIP-340 Schnorr signing inside the WASM sandbox. | Lower — niche extension, but already in PR. |
| [#7105](https://github.com/nearai/ironclaw/issues/7105) — *dedicated identity/payments service* | Extract identity/session/payments from cloud API into a standalone service. | Low — architectural restructure, P2. |
| [#7199](https://github.com/nearai/ironclaw/issues/7199) — *skill selection telemetry* | Log "candidate existed but wasn't chosen" vs "chosen and changed answer" separately. | Low — observability improvement, community suggestion. |

## 7. User Feedback Summary
- **Memory recall is unreliable across conversations** — multiple Champions testers independently flagged this ([#7185](https://github.com/nearai/ironclaw/issues/7185)). This is the most impactful user-facing pain point reported this cycle.
- **Web scraping/data retrieval is inconsistent** — agents sometimes succeed and sometimes fail with no clear pattern ([#7180](https://github.com/nearai/ironclaw/issues/7180)). Users find this unpredictable and frustrating.
- **Instance deletion can hang indefinitely** — a reported workflow blocker ([#6752](https://github.com/nearai/ironclaw/issues/6752)).
- **Per-user model selection is desired** — users want autonomy over LLM choice, currently restricted to admin control ([#7183](https://github.com/nearai/ironclaw/issues/7183)).
- **Skill install appears to succeed but is invisible** — a broken UX loop where the API says `{"installed":true}` but the skill is nowhere to be found ([#7168](https://github.com/nearai/ironclaw/issues/7168), now closed).
- **Positive signal**: The community is actively contributing architectural improvement suggestions ([#7199](https://github.com/nearai/ironclaw/issues/7199)), indicating strong engagement with the project's reliability direction.

## 8. Backlog Watch
| Issue | Created | Days Open | Risk |
|-------|---------|-----------|------|
| [#3773](https://github.com/nearai/ironclaw/issues/3773) — *Land the IronClaw Target Crate Architecture* | 2026-05-19 | ~78 | Critical — foundational architecture epic with zero comments, likely awaiting maintainer prioritization. |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) — *Reliable Skill Discovery, Routing, and Activation* | 2026-07-23 | ~13 | High — core agent capability gap; 21 acceptance criteria, many blocked on other work. |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) — *Skills the model can self-create/find/choose* | 2026-07-31 | ~5 | High — subset of #6565, noted as too large for one person. |
| [#7144](https://github.com/nearai/ironclaw/issues/7144) — *Trace contribution pipeline defects* | 2026-08-04 | 1 | Medium — 29 pre-existing defects surfaced by review of moved (not new) code. |
| [#7147](https://github.com/nearai/ironclaw/issues/7147) — *Architecture ratchets with untracked slack* | 2026-08-04 | 1 | Medium — two shrink-only ratchets carry slack; three open PRs hold different baseline values. |
| [#6947](https://github.com/nearai/ironclaw/issues/6947) — *classify-test-scope.sh mis-buckets ironclaw_product* | 2026-07-31 | 5 | Low — pre-existing CI bug, already recorded, low urgency but needs fixing before it causes silent test-scope failures. |
| [#7115](https://github.com/nearai/ironclaw/issues/7115) — *Docker entrypoint gates Slack migration on dead env var* | 2026-08-04 | 1 | Medium — following docs skips the legacy Slack migration entirely. |

---

**Overall project health: Active and structurally focused.** The team is executing a large architecture consolidation (Waves 0–5) with strong merge velocity (18 PRs closed today). The main risk is a cluster of user-facing stability issues (memory recall,

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-08-05

## 1. Today's Overview
The LobsterAI repository shows steady development activity with **13 PR updates** (10 merged/closed, 3 open) and **1 issue addressed** in the past 24 hours. No new releases were published today, indicating the team is integrating recent changes into the existing codebase. Activity is moderately high, with a focus on security hardening, user‑experience refinements, and dependency modernization.

## 2. Releases
**None** today. The latest release, **2026.8.3** (#2430), was merged into `main` today and introduces native credit‑reward activities, a streamlined first‑run login experience, artifact auto‑preview controls, and improved Windows installer reliability.

## 3. Project Progress
Merged/closed PRs today advanced several areas:

| PR | Status | Theme |
|----|--------|-------|
| [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) | Merged | Release 2026.8.3 merge |
| [#2424](https://github.com/netease-youdao/LobsterAI/pull/2424), [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427), [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428), [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) | Merged | Startup credit‑campaign overhaul, login‑page optimization, analytics field completion |
| [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | Merged | Separated model‑capacity‑overload errors from generic rate‑limit messages |
| [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | Merged | Added artifact auto‑preview toggle in settings |
| [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282), [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283), [#1284](https://github.com/netease-youdao/LobsterAI/pull/1284) | Merged | Updated `@headlessui/react`, `react`, and `react‑syntax‑highlighter` |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Open | Dependabot update for Electron group (electron 40.2.1 → 43.2.0, electron‑builder) |

## 4. Community Hot Topics
| Item | Type | Activity | Insight |
|------|------|----------|---------|
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | Issue | 1 comment, 0 👍 | Security‑conscious users are flagging the agent’s tendency to expose model‑key configuration. The issue reflects growing demand for stronger data‑privacy safeguards. |
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | PR | 0 👍 | User‑submitted feature to permanently hide the sidebar ad banner addresses a common pain point around persistent in‑app advertising. |

## 5. Bugs & Stability
| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **High** | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | Agent leaks model‑key information when queried, creating a sensitive‑data exposure risk. | No fix PR yet. |
| **Medium** | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | Session‑rename failures are silently swallowed; users receive no error feedback. | Fix PR open but stale (created 2026‑04‑01). |
| **Low** | Regression in error classification | Model‑capacity‑overload errors were previously mislabeled as rate‑limit errors, misleading users into immediate retries. | Corrected in merged [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426). |

## 6. Feature Requests & Roadmap Signals
- **Permanent ad‑banner dismissal** (PR #2374) – indicates user desire for a cleaner, non‑distracting UI.
- **Error‑feedback for session operations** (PR #1205) – small‑scale UX improvement that reduces confusion.
- **Credit‑reward campaign enhancements** (merged #2424, #2427, #2428, #2429) – suggests the product roadmap is leaning into user‑engagement and monetization features.
- **Granular control over artifacts** (PR #2425) – aligns with a trend toward customizable, power‑user‑friendly settings.

## 7. User Feedback Summary
- **Pain points:** Security‑concern over key leakage, intrusive persistent ads, lack of feedback on failed UI operations.
- **Satisfaction drivers:** Streamlined login experience, transparent credit‑reward activities, improved error messaging, and per‑setting toggles.
- **Overall sentiment:** Users appreciate the ongoing polish of the desktop client and the push toward more transparent, user‑controlled features. The open security issue (#1202) remains a notable detractor.

## 8. Backlog Watch
| Item | Created | Stale? | Notes |
|------|---------|--------|-------|
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | 2026‑04‑01 | Yes | Critical security bug awaiting patch. |
| [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | 2026‑04‑01 | Yes | Bug‑fix PR for session‑rename errors; needs review/merge. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 2026‑04‑02 | Yes | Dependabot update for Electron group; may require compatibility testing before merge. |

**Maintainer attention recommended:** Prioritize the security fix (#1202) and evaluate the stale bug‑fix PR (#1205) to restore trust and improve UX consistency. The Electron dependency update (#1277) should be reviewed to ensure it does not introduce regressions.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-08-05

## 1. Today's Overview

The Moltis project showed minimal activity over the past 24 hours, with no new issues opened or closed and no releases published. The sole recent action is Dependabot's automated dependency bump (PR #1184) targeting the `undici` package in the `/website` directory, upgraded from 7.28.0 to 7.29.0. This is a routine maintenance PR with no code changes from contributors, indicating a quiet development cycle. Overall project health appears stable but low-velocity at this time.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

- **Merged/Closed PRs Today:** None.
- **Open PRs Today:** 1 — [#1184](https://github.com/moltis-org/moltis/pull/1184) (Dependabot — `undici` bump from 7.28.0 to 7.29.0 in `/website`). No feature work or bug fixes advanced today.

## 4. Community Hot Topics

No issues or PRs attracted significant community engagement today. With zero comments and zero reactions across all tracked items, there are no identifiable hot topics. The Dependabot PR (#1184) is a standard dependency update with no discussion, suggesting no underlying community concerns on this change.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were filed today. The only activity is a non-security-critical dependency bump (undici minor update), which does not indicate any known stability issues in the project.

## 6. Feature Requests & Roadmap Signals

No new feature requests or roadmap-related issues were opened today. The absence of community feature proposals makes it difficult to infer upcoming priorities from current data.

## 7. User Feedback Summary

No user feedback was collected today. There are no new pain points, use cases, or satisfaction signals to report.

## 8. Backlog Watch

No long-unanswered issues or PRs were flagged in the provided data window. With only one open PR (automated dependency update), there is currently no visible backlog requiring urgent maintainer attention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# QwenPaw Project Digest — 2026-08-05

## 1. Today's Overview
The repository shows strong mid-cycle activity with **28 issues** and **49 PRs** updated in the last 24 hours. Maintenance velocity remains high: 12 issues were closed and 21 PRs were merged or closed today. Development focus centers on stabilizing the recently published `v2.1.0-beta.1` desktop build, hardening channel reliability (WeChat, Matrix, Console), and addressing memory/context management edge cases. No new official release was published today, but the integration test suite and backend sandboxing are being actively refined ahead of a potential release candidate.

## 2. Releases
No new releases published today.  
Note: `v2.1.0-beta.1` installation verification ([#6656](https://github.com/agentscope-ai/QwenPaw/issues/6656)) closed today after platform checkpoint testing, confirming baseline readiness for the beta track.

## 3. Project Progress
**Merged/Closed today:**
- [#6678](https://github.com/agentscope-ai/QwenPaw/pull/6678) — Installs Playwright Chromium for integration suites, resolving nightly `Executable doesn't exist` failures.
- [#6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) — Fixes p-tier assignment gaps and Chrome contract mismatches in integration tests.
- [#6679](https://github.com/agentscope-ai/QwenPaw/pull/6679) — Aligns `import-local` test expectations with source-guard logic, fixing deterministic 403 failures.
- [#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685) — Corrects naive UTC timestamp normalization in session conversion.
- [#6682](https://github.com/agentscope-ai/QwenPaw/pull/6682) — Syncs legacy `max_iters` with the new `loop.iteration.max_iterations` config.
- [#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618) — Removes forced UTC suffix on legacy session timestamps.
- [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) — Fixes DeepSeek/OAI-compatible 400 errors caused by incorrect `role=user` injection during scroll compression.
- [#4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) — Merges macOS `sandbox-exec` file whitelist pre-hook.

**Key open PRs advancing the stack:**
- [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) — Persists cron `enabled` state across restarts.
- [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) — Adds opt-in exponential-backoff retry for channel startup failures.
- [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) — Isolates bare absolute imports per plugin namespace.
- [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) — Triggers `summarize_when_compact` on auto-scroll compression.
- [#6669](https://github.com/agentscope-ai/QwenPaw/pull/6669) — Stabilizes Chrome native messaging and Windows process-locking for the desktop app.

## 4. Community Hot Topics
High-comment issues reveal where users are actively engaging with core workflows:

| Issue | Comments | Theme |
|-------|----------|-------|
| [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 13 | GPT-5.6 prompt caching support |
| [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | 12 | Console channel invisible security approvals |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 6 | Task artifact directory organization |
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | 5 | DeepSeek thinking mode `reasoning_content` loss |
| [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | 5 | Drag-and-drop direct file path reading |
| [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | 3 | Multi-model parallel execution per task |
| [#4947](https://github.com/agentscope-ai/QwenPaw/issues/4947) | 3 | Kanban board for multi-agent playground (closed) |

**Analysis:** Users are prioritizing **cost/latency optimization** (prompt caching, on-demand skill loading), **UX visibility in headless channels** (console approvals, WeChat tokens), and **multi-model orchestration**. The repeated demand for direct file-path reads and task-scoped media directories indicates friction around current upload/download abstraction layers.

## 5. Bugs & Stability
Ranked by severity and recurrence impact:

**Critical / Desktop Regressions (v2.1.0b1)**
- [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) — `PYTHONHOME` injected into child envs causes `ModuleNotFoundError` on every Python subprocess.
- [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) — Browser SDK `open()` fails with `WireProtocolError: Target crashed` in isolated Playwright sessions.

**High / Channel & Scheduling**
- [#66

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-05

## 1. Today's Overview

ZeroClaw shows sustained development velocity with **50 issues and 50 PRs updated in the last 24 hours**, reflecting high contributor engagement. The project is actively advancing its security architecture, channel integrations, and plugin system through RFC-driven design. No new releases were published this cycle, indicating the team is focused on stabilizing existing workstreams before the next version. The dominant theme across activity is **security hardening and ownership scoping**—a clear signal that the project is maturing from feature-completion toward production-grade reliability.

---

## 2. Releases

*No new releases in the current reporting period.*

---

## 3. Project Progress

### Merged / Closed (2 PRs in last 24h)
While the data does not detail which specific PRs were merged, the closed-issue count (2) and merged/closed PR count (2) suggest routine maintenance closures rather than major feature landings.

### Key Open Workstreams Advancing
- **RFC #8603** (Chat Completions profile) — 16 comments; aiming to expose ZeroClaw agents to the OpenAI-compatible client ecosystem (Open WebUI, Continue.dev, LangChain, etc.)
- **RFC #8303** (Goal mode v1) — 14 comments; bounded foreground Matrix work for multi-turn agent objectives
- **RFC #7155** (Per-execution confirmation tier) — 13 comments; unified tool permission layer replacing shell-only policies
- **RFC #9488** (Unified attachment architecture) — 12 comments; web chat and channel attachment unification
- **RFC #9487** (Runtime-owned conversation sessions) — 10 comments; durable admission and transport surface adapters
- **RFC #7141** (Pluggable inbound authentication) — 10 comments; Rev 7 targeting Identity & Access milestone
- **RFC #6850** (Memory lifecycle decoupling) — 10 comments; separating storage from lifecycle policy
- **RFC #8568** (Mixture-of-Agents virtual provider) — **CLOSED**; 10 comments; MoA aggregator/judge model now ratified

---

## 4. Community Hot Topics

| Issue / PR | Comments | Focus |
|---|---|---|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — Chat Completions profile | 16 | OpenAI-protocol interoperability |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — Goal mode v1 | 14 | Multi-turn bounded objectives |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — Per-execution confirmation tier | 13 | Tool permission unification |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — Unified attachment architecture | 12 | Cross-channel media handling |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) — A2A outbound client | — | Agent-to-Agent protocol v1.0 |

**Underlying needs:** The community is driving toward **protocol compatibility** (Chat Completions, A2A), **multi-turn goal management**, and **unified security/permission models**. The RFC process is being used effectively to surface these concerns before implementation, with maintainers actively engaging on design trade-offs.

---

## 5. Bugs & Stability

### Critical / High-Severity Bugs (P0–P1)

| Issue | Severity | Description | Fix PR |
|---|---|---|---|
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | **P0 — data loss / security risk** | Gateway webhook handlers for WhatsApp Cloud, Linq, and WATI do **not fail closed**; attacker-controllable messages dispatched without authentication | Open — no fix PR yet |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | **P1 — data loss / security risk** | Knowledge graph has **no per-agent attribution**; any agent reads/mutates another's data | Open — no fix PR yet |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | **P1 — data loss / security risk** | Session/channel read+write tools lack per-agent ownership scoping; any agent can access another's sessions | Open — no fix PR yet |
| [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) | **P1** | Browser tool `screenshot` action had arbitrary file write escape | **Fix PR open** (#9362) — validates path against workspace policy |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | **P1** | Cron agent jobs had no wall-clock timeout; hung runs held SQLite locks indefinitely | **Fix PR open** (#9320) |

### Notable Bug Fixes in Flight
- **#9723** — DeepSeek DSML / `<\|tool_call\|>` envelope parsing
- **#9477** — `<tools>` tag recovery for Qwen2.5-Coder invocations
- **#9504** — Context-exhaustion terminal notice
- **#9313** — WeChat sync cursor persistence race
- **#9304** — Retry rejected tool turns with reasoning disabled
- **#9757** — Anthropic tool-result image delivery as nested blocks

**Assessment:** Three **unaddressed P0/P1 security bugs** involving cross-agent data isolation are the most pressing stability concerns. The project has multiple fix PRs actively in review for other issues, indicating a responsive maintenance cadence.

---

## 6. Feature Requests & Roadmap Signals

| RFC / Tracker | Priority | Predicted Inclusion |
|---|---|---|
| #8603 — Chat Completions profile | P2 | Next minor release (client compatibility) |
| #8303 — Goal mode v1 | P2 | Next minor release (core agent capability) |
| #7155 — Per-execution confirmation tier | P1 | Next minor release (security posture) |
| #9488 — Unified attachment architecture | P2 | Post-release (cross-cutting) |
| #7141 — Pluggable inbound authentication | P1 | Identity & Access milestone |
| #8568 — Mixture-of-Agents (MoA) | P2 | **✓ Accepted** (RFC closed) |
| #6850 — Memory lifecycle decoupling | P2 | Architecture milestone |
| #5607 — Deterministic precondition gates for cron | P2 | Future |
| #8132 — Rust→Wasm web UI | P3 | Long-term (split from #7674) |

**Signal:** The project is prioritizing **security-first architecture** (pluggable auth, confirmation tiers, ownership scoping) alongside **interoperability** (Chat Completions, A2A). The MoA feature is already ratified and likely to land soon. The Rust→Wasm UI migration remains a lower-priority long-term goal.

---

## 7. User Feedback Summary

**Pain Points:**
1. **Cross-agent data leakage** — Multiple P1 bugs report that agents can read/mutate other agents' knowledge graphs and sessions, a critical trust gap for multi-user deployments.
2. **Silent context exhaustion** — Users reported agents appearing "idle" when context windows are exceeded (#9504), with no terminal notice.
3. **Cron job hangs** — Long-running or stuck agent jobs held SQLite locks indefinitely, blocking subsequent executions (#9320).
4. **Channel webhook auth gaps** — WhatsApp/Linq/WATI handlers accept unauthenticated messages (#9565).
5. **Tool-call format fragmentation** — DeepSeek DSML, Qwen `<tools>` tags, and other non-OpenAI envelope formats caused silent failures or raw-text leakage (#9723, #9477).

**Satisfaction Indicators:**
- Active RFC participation (10–16 comments on top issues) suggests engaged, constructive community.
- Multiple contributors submitting fix PRs for bugs they discovered (e.g., #9362, #9723).
- The MoA RFC reaching closure (#8568) indicates the design review process is working.

---

## 8. Backlog Watch

| Issue | Age | Why It Needs Attention |
|---|---|---|
| [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) — Webhook fail-closed | ~6 days | P0 security bug; no fix PR yet |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) — Knowledge graph ownership | ~4 days | P1 data isolation bug; no fix PR yet |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) — Session/channel ownership | ~4 days | P1 data isolation bug; no fix PR yet |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue | ~32 days | Tracker for RFC/design decisions needing closure |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) — Persistent memory parity | ~27 days | 18 open items; multi-PR rollout tracker |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) — Session-persistence ownership | ~5 days | Four workstreams touching same contract; no owner |

**Recommended focus:** The three unaddressed P0/P1 security issues (#9565, #9647, #9646) should be prioritized for immediate fix PRs. The session-persistence ownership tracker (#9600) needs a designated owner to unblock four parallel workstreams. The maintainer decision queue (#8692) is a structural bottleneck — clearing RFC decisions would unblock multiple feature workstreams.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*