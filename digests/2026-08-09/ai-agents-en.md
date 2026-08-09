# OpenClaw Ecosystem Digest 2026-08-09

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-09 00:54 UTC

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



# OpenClaw Project Digest — 2026-08-09

## 1. Today's Overview

OpenClaw shows sustained high activity with 500 issues and 500 PRs updated in the last 24 hours. The project released two security-focused versions (v2026.6.33 and v2026.6.34) hardening browser, network, and secret boundaries. 49 issues were closed and 179 PRs merged/closed, indicating strong maintainer throughput. However, the open issue count (451 active) and a cluster of P0/P1 bugs around session state, memory leaks, and message delivery suggest ongoing stability challenges in production deployments.

## 2. Releases

### v2026.6.34 — *Safer Browser & Network Boundaries*
- Sandboxed browser routes, trusted DNS targets, custom browser origins, and loopback provider endpoints now reject unsafe access paths.
- Related: [#97958](https://github.com/openclaw/openclaw/issues/97958), [#38290](https://github.com/openclaw/openclaw/issues/38290), [#103075](https://github.com/openclaw/openclaw/issues/103075), [#110693](https://github.com/openclaw/openclaw/issues/110693)
- Contributors: @eleqtrizit, @brunowowk, @mosidevv, @pgondhi987

### v2026.6.33 — *Safer Network & Secret Boundaries*
- Provider streams, Discord REST responses, browser fetches, OAuth paths, and logs now cap hostile response sizes.
- Telegram credentials are excluded from diagnostics output.
- Related: [#96989](https://github.com/openclaw/openclaw/issues/96989), [#95412](https://github.com/openclaw/openclaw/issues/95412), [#99428](https://github.com/openclaw/openclaw/issues/99428)
- Contributors: @wangmiao0668000666, @Alix-007

**Migration notes:** No breaking changes announced. Both releases are additive security hardening.

## 3. Project Progress

**Key merged/closed PRs today:**
- [#120698](https://github.com/openclaw/openclaw/pull/120698) — `perf(doctor)`: Kept bundled doctor contract closures dependency-light, reducing cold-load overhead across ~40 plugins.
- [#120705](https://github.com/openclaw/openclaw/pull/120705) — `fix(process)`: Reports output discarded by retention caps, preventing false-complete process results.
- [#120640](https://github.com/openclaw/openclaw/pull/120640) — `fix(ui)`: Keeps dashboards alive across Control UI view switches, preserving board-local state.
- [#120802](https://github.com/openclaw/openclaw/pull/120802) — `fix(windows)`: Preserves configured child env overrides across key casing, fixing command discovery and MCP server env leakage on Windows.
- [#120800](https://github.com/openclaw/openclaw/pull/120800) — `fix(telegram)`: Acquires polling queue before starting worker, preventing orphaned HTTP listeners on queue init failure.

**Notable open PRs advancing:**
- [#88504](https://github.com/openclaw/openclaw/pull/88504) — Multi-slot memory role architecture (showcase-rated, needs proof).
- [#119139](https://github.com/openclaw/openclaw/pull/119139) — Continuously admit newly due cron jobs while earlier timer-batch jobs run.
- [#120768](https://github.com/openclaw/openclaw/pull/120768) — One-paste device pairing via `oc-pair` setup links.
- [#120505](https://github.com/openclaw/openclaw/pull/120505) — Centralizes gateway connect failure classification across probe, health, and TUI surfaces.

## 4. Community Hot Topics

| Issue | Title | Comments | Tags |
|-------|-------|----------|------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent reply failure | 179 | P1, diamond lobster, message-loss |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 31 | P2, security, session-state |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost | 24 | P1, silver shellfish, message-loss |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak — 350MB → 15.5GB OOM | 22 | P0, platinum hermit, crash-loop |
| [#80319](https://github.com/openclaw/openclaw/issues/80319) | QA tool-defaults suite conflation | 17 | P2, diamond lobster |

**Analysis:** The top issue (#116277) dominates discussion — DeepSeek v4 Flash's silent failure mode is a significant reliability gap for users relying on that model. The memory trust tagging request (#7707) reflects growing concern about prompt injection via untrusted memory sources. The gateway memory leak (#91588) at 15.5GB RSS is a critical production blocker rated platinum hermit. Session-state and message-loss themes recur across the top issues, indicating the core orchestration layer remains the weakest stability surface.

## 5. Bugs & Stability

**P0 (Critical):**
- [#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway RSS memory leak (350MB → 15.5GB) causing repeated OOM kills. *No fix PR yet.*
- [#108435](https://github.com/openclaw/openclaw/issues/108435) — Gateway fails to start after update to 2026.7.1 (`gateway did not start on 127.0.0.1`). *No fix PR yet.*
- [#112395](https://github.com/openclaw/openclaw/issues/112395) — Startup migration preflight blocks gateway after upgrade from 6.11 → 7.1; migration tables empty. *No fix PR yet.*

**P1 (High):**
- [#116277](https://github.com/openclaw/openclaw/issues/116277) — DeepSeek v4 Flash silent reply failure, generic fallback posted.
- [#96834](https://github.com/openclaw/openclaw/issues/96834) — WhatsApp 1:1 inbound image wedges main lane ~3min before processing.
- [#86215](https://github.com/openclaw/openclaw/issues/86215) — Codex OAuth refresh failures wedge agent for hours without alerting.
- [#87109](https://github.com/openclaw/openclaw/issues/87109) — Gateway heap grows to 1073MB+ at idle; cron jobs fail silently under memory pressure.
- [#103231](https://github.com/openclaw/openclaw/issues/103231) — `claude-cli` backend compaction assumption false; sessions grow past 200% context.
- [#118923](https://github.com/openclaw/openclaw/issues/118923) [CLOSED] — Safeguard compaction retry loop: 24 attempts in 47min, session wedged.
- [#92186](https://github.com/openclaw/openclaw/issues/92186) — Foreground reply fence cancels delivery of completed replies to earlier concurrent group messages.
- [#98435](https://github.com/openclaw/openclaw/issues/98435) — MCP loopback transport does not auto-reconnect after gateway restart.

**Regressions:**
- [#38327](https://github.com/openclaw/openclaw/issues/38327) — "Cannot convert undefined or null to object" in 2026.3.2 with google-vertex/gemini-3.1-pro-preview.
- [#48810](https://github.com/openclaw/openclaw/issues/48810) — Compaction retry creates orphan fork in parentId chain.
- [#72370](https://github.com/openclaw/openclaw/issues/72370) — Workspace hooks rejected as "cannot override openclaw-managed hook code" since 2026.4.23.

**Fix PRs in flight:** [#120343](https://github.com/openclaw/openclaw/pull/120343) (per-agent contextTokens cap), [#120572](https://github.com/openclaw/openclaw/pull/120572) (tool loop warnings to models), [#119835](https://github.com/openclaw/openclaw/pull/119835) (preserve quiet native tool results), [#120717](https://github.com/openclaw/openclaw/pull/120717) (preserve accepted workspace after SSH loss).

## 6. Feature Requests & Roadmap Signals

| Issue | Summary | Rating |
|-------|---------|--------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory trust tagging by source — prevent memory poisoning | 🌊 off-meta tidepool |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) | Topic-session families for multi-lane context | 🌊 off-meta tidepool |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | Fully dynamic model discovery (OpenRouter + beyond) | 🦪 silver shellfish |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | Per-model usage logging for cost tracking | 🌊 off-meta tidepool |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | Persistent task-status surface for long-running turns | 🌊 off-meta tidepool |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | `before_route_inbound_message` hook for channel bridging | 🌊 off-meta tidepool |
| [#49740](https://github.com/openclaw/openclaw/issues/49740) | Cron job auto-retry on failure | 🌊 off-meta tidepool |
| [#9637](https://github.com/openclaw/openclaw/issues/9637) | Accessibility config: disable emojis/unicode in TUI | 🦞 diamond lobster |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | Config option to suppress sub-agent announce | 🌊 off-meta tidepool |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) | OpenAI Realtime speech-to-speech for Talk Mode | 🌊 off-meta tidepool |

**Prediction:** Dynamic model discovery (#10687) and per-model usage logging (#13219) align with the project's push toward provider-agnosticism and operational observability — both likely candidates for the next minor release. The `before_route_inbound_message` hook (#81061) addresses a structural gap in the plugin system and has maintainer interest. Cron auto-retry (#49740) is a pragmatic reliability feature that could ship soon.

## 7. User Feedback Summary

**Pain points:**
- **Silent failures** are the #1 complaint: DeepSeek silent reply failures (#116277), subagent completions lost without notification (#44925, #92076), cron jobs failing silently under memory pressure (#87109), and Slack/WhatsApp reply delivery drops (#96692, #92186) all share the pattern of the agent appearing to work while nothing reaches the user.
- **Memory leaks** in the gateway process cause repeated OOM kills and launchd restart cycles (#91588, #87109), degrading production reliability.
- **OAuth/auth fragility**: Codex OAuth refresh failures wedge agents for hours (#86215); Google Vertex regression (#38327) blocks embedded runs.
- **Session state corruption**: Compaction retries create orphan forks (#48810), Claude CLI sessions grow past context limits (#103231), and `/new` cannot recover retired Codex bindings (#116022).
- **Platform-specific friction**: Windows Scheduled Task instability (#91144), Feishu streaming render slowdown after 2026.7.1 upgrade (#108265), Telegram polling queue race (#120800).

**Satisfaction signals:**
- The security hardening in v2026.6.33/#34 is well-received (multiple contributor PRs merged).
- The doctor perf improvement (#120698) and dashboard state preservation (#120640) address real UX friction.
- Windows env-casing fix (#120802) resolves a long-standing platform gap.

## 8. Backlog Watch

| Item | Reason |
|------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | P0 gateway memory leak — no fix PR, 15.5GB RSS OOM, platinum hermit |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | P0 gateway startup failure post-upgrade to 2026.7.1, release blocker |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | Startup migration preflight blocks gateway, empty migration tables |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory trust tagging — security-critical feature, 31 comments, needs product decision |
| [#88504](https://github.com/openclaw/openclaw/pull/88504) | Multi-slot memory architecture — showcase-rated but needs proof, blocks memory plugin roadmap |
| [#119139](https://github.com/openclaw/openclaw/pull/119139) | Cron continuous admission — needs proof, addresses real batch-processing gap |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | Dynamic model discovery — needs maintainer review, product decision pending |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | OAuth wedge without alerting — needs live repro, P1 production impact |

**Overall health assessment:** The project is in a high-velocity stabilization phase. Security hardening is progressing well with two rapid successive releases, but the P0 backlog around memory leaks, startup regressions, and silent message loss represents significant production risk. The 451:49 open-to-closed issue ratio in the last 24h suggests the team is triaging faster than resolving. Maintainer attention should prioritize the three P0 bugs and the gateway memory leak before the next feature release.

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem
**Date:** 2026-08-09

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is in a high-velocity stabilization phase, with active projects concentrating on security hardening, MCP integrations, session-state reliability, and multi-platform desktop releases. The market is bifurcating: large platforms (OpenClaw, IronClaw, Hermes Agent, QwenPaw) are investing heavily in architecture migrations and production reliability, while mid-sized projects (NanoBot, NanoClaw, LobsterAI) are differentiating through observability, provider flexibility, and niche integrations. Several projects (PicoClaw, Moltis) are pursuing lightweight or sandbox-first deployments. Overall, the ecosystem is converging on MCP as the default tooling standard, while grappling with common failure modes around silent message loss, memory leaks, OAuth fragility, and session compaction.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score |
|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | v2026.6.33, v2026.6.34 | 🟡 Caution — high throughput but 451 open issues, 3 P0s unresolved |
| **IronClaw** | 30 | 50 | None | 🟡 Caution — rapid activity focused on Reborn migration; 2 P1 security gaps open |
| **Hermes Agent** | 50 | 50 | None | 🟡 Caution — high activity but P1 desktop freeze, Windows update breakage, compaction bugs |
| **QwenPaw (CoPaw)** | 18 | 50 | v2.1.0-beta.2 (recent) | 🟡 Caution — fast bug-fix cadence but critical macOS/Windows desktop crashes unresolved |
| **NanoClaw** | 8 | 6 | None | 🟢 Stable — responsive maintenance, closed 3 critical/high bugs, 3 open medium issues |
| **LobsterAI** | 1 | 3 | None | 🟢 Stable — low volume, no bug reports, steady feature progress |
| **PicoClaw** | 3 | 4 | None | 🟡 Caution — stagnant backlog, WhatsApp channel broken pending PR merge |
| **Moltis** | 2 | 1 | None | 🟢 Stable — low velocity, one Docker fix merged, one Apple Container gap |
| **NanoBot** | 5 | 9 | None | 🟡 Caution — active observability work but P0 MCP crash and Docker deploy issues unfixed |
| **NullClaw** | 0 | 0 | None | 🔴 Dormant — no activity |
| **TinyClaw** | 0 | 0 | None | 🔴 Dormant — no activity |
| **ZeptoClaw** | 0 | 0 | None | 🔴 Dormant — no activity |
| **ZeroClaw** | 50 | 50 | None | 🟡 Caution — high velocity on SOP/security; no releases published |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Sheer scale and contributor velocity:** 500 issues/PRs in 24 hours dwarfs all other projects, indicating the largest active contributor base and maintainer bandwidth.
- **Rapid security hardening cadence:** Two security-focused patches released in succession (browser/network boundaries, secret caps), with multiple external contributors — a pattern unmatched by competitors.
- **Breadth of channel integrations:** Telegram, Discord, WhatsApp, Slack, Feishu, OAuth flows across providers — the most mature multi-channel surface in the ecosystem.

**Technical Approach Differences:**
- OpenClaw is a **gateway-centric architecture** with a persistent gateway process, MCP loopback transport, and plugin system — contrasting with NanoBot's simpler agent loop and Moltis's sandbox-isolated model.
- Unlike IronClaw (which is undergoing a full Reborn architecture rewrite), OpenClaw is **stabilizing an established codebase** rather than migrating.
- OpenClaw's session-state and compaction problems are the most severe in the ecosystem, suggesting its architectural complexity is outpacing its reliability engineering.

**Community Size Comparison:**
- OpenClaw is the clear leader (~500 activity events/day), roughly 10–50× the volume of mid-tier projects (Hermes, QwenPaw, IronClaw at 30–50 events/day) and 100×+ the smaller projects (LobsterAI, Moltis at 1–3 events/day).

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **MCP Reliability** | OpenClaw, NanoBot, QwenPaw, NanoClaw, PicoClaw | Transient failures causing permanent session hangs (OpenClaw #98435, NanoBot #5300, QwenPaw #6822); auto-reconnect, timeout wiring, session recovery |
| **Token/Cost Observability** | NanoBot, OpenClaw, IronClaw, QwenPaw | Per-iteration and per-model token logging (NanoBot #5266, #5293; OpenClaw #13219; IronClaw #6989 token estimate bug); cost opacity is a top user complaint |
| **Session Compaction & State** | OpenClaw, Hermes Agent, QwenPaw | Silent compaction failures, orphan fork chains, context growth past limits — core orchestration remains the weakest stability surface across all three |
| **OAuth/Auth Fragility** | OpenClaw, NanoBot, PicoClaw | OAuth refresh wedging (OpenClaw #86215), MCP OAuth web auth demand (NanoBot #5297, PicoClaw #3302), indefinite credential resolution failures |
| **Silent Failure Modes** | OpenClaw, Hermes Agent, QwenPaw | Subagent completions lost, cron jobs failing silently, message delivery drops — the #1 cross-project user complaint |
| **Desktop/Platform Stability** | Hermes Agent, QwenPaw, NanoBot | macOS freezes (Hermes #63047), Windows installer failures (QwenPaw #6810), Docker deployment issues (NanoBot #5295, Hermes npm 11/12 #62171) |
| **Memory/Resource Leaks** | OpenClaw, Hermes Agent | Gateway RSS growth to 15.5GB (OpenClaw #91588), Kanban WS leak 100%+ CPU (Hermes #77833), FTS index corruption (Hermes #63386) |
| **Security Hardening** | OpenClaw, Hermes Agent, IronClaw, ZeroClaw | ANSI redaction bypass (Hermes #81012), skill content-scan gaps (Hermes #78515), SafetyLayer not wired on Reborn path (IronClaw #7391), host-path injection (ZeroClaw #842) |
| **Multi-Provider/Flexible Routing** | OpenClaw, QwenPaw, LobsterAI, NanoClaw | Dynamic model discovery, LiteLLM gateway (LobsterAI merged), NVIDIA NIM support (QwenPaw), remote MCP transport (NanoClaw) |
| **Channel Richness** | NanoClaw, IronClaw, PicoClaw | Telegram rich messages (#2877), Slack progressive previews (#7396), IRC long-message reassembly (#3287), Mattermost integration |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | Hermes Agent | QwenPaw | NanoBot | NanoClaw | LobsterAI |
|---|---|---|---|---|---|---|---|
| **Architecture** | Gateway-centric, plugin system, MCP loopback | Reborn rewrite (crate-based), declarative policy | Desktop-first (Electron/TUI), session-heavy | Tauri desktop, TUI, plugin ecosystem | Lightweight agent loop, Docker-friendly | Channel-adapter focused, MCP-heavy | OpenClaw-based extension layer |
| **Target User** | Power users, multi-channel operators, enterprises | Ops/platform teams, security-conscious adopters | Desktop power users, reasoning-model fans | General desktop users, API automation consumers | Developers, cost-conscious users | Niche integrators (Strava, Mattermost) | Chinese-market users, LiteLLM adopters |
| **Key Differentiator** | Scale + channel breadth + security hardening speed | Reborn architecture + Inspector debugging tool + approval parity | Desktop UX + reasoning token optimization + memory tiering | Model fallback + provider diversity + structured SSE outcomes | Cost observability + simplicity + per-iteration diagnostics | MCP remote transport + OAuth flows + approval workflows | LiteLLM integration + SQLite perf + provider flexibility |
| **Session Model** | Complex, compaction-prone | Undergoing Reborn migration | Active compaction research, fork support | Beta-level, several regressions in 2.1.0 | Simple, iterative | Lightweight, channel-driven | OpenClaw-derived |
| **Security Posture** | Hardening releases, trust-tagging roadmap | SafetyLayer gap (unwired), gate audit in progress | Credential leakage, ANSI redaction bypass, skill scan gap | Config corruption handling, approval routing | anyio crash on MCP failure | OAuth web auth gaps | Minimal reporting |
| **Release Cadence** | Frequent (2 releases in 1 day) | Active but no release yet | No releases, bug-fix focused | Beta train (2.1.0b2) with rapid fixes | No releases, maintenance mode | No releases, incremental merges | No releases |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (50+ daily activity events):**
- **OpenClaw** — Largest contributor pool, highest throughput, but stability debt is accumulating faster than it's being resolved (451:49 open-to-closed ratio in 24h).
- **QwenPaw** — Fast bug-fix cadence (3 critical PRs merged same day), but beta release accumulating platform-specific regressions.
- **Hermes Agent** — High engagement with deep technical discussion; desktop freeze and compaction bugs suggest maturity gaps in QA.
- **ZeroClaw** — High velocity on SOP/security; no releases yet, indicating early-stage maturity.

**Tier 2 — Moderate/Steady (5–30 daily activity events):**
- **IronClaw** — Concentrated on Reborn migration; 24 issues closed in one day shows focused output, but two P1 security gaps are concerning.
- **NanoClaw** — Responsive maintenance, good triage discipline, community-driven integrations.
- **NanoBot** — Observability improvements advancing; P0 MCP crash is a blocker.

**Tier 3 — Low/Niche (1–5 daily activity events):**
- **PicoClaw** — Stale backlog, WhatsApp breakage unmerged, momentum sluggish.
- **LobsterAI** — Stable but low velocity; performance PRs sitting for ~4 months.
- **Moltis** — Small but functional; 66-day resolution time for Docker bug is a concern.

**Tier 4 — Dormant:**
- NullClaw, TinyClaw, ZeptoClaw — No activity. Either deprioritized or abandoned.

---

## 7. Trend Signals

| Trend | Evidence Across Projects | Implication for Developers |
|---|---|---|
| **MCP as default tooling standard** | Every major project has MCP as a core integration surface; failures here are the #1 reliability concern | Invest in MCP session resilience, timeout handling, and auto-reconnect; this is table stakes |
| **Cost opacity is a user pain point** | NanoBot (#5266), OpenClaw (#13219), IronClaw (#6989) all report token accounting gaps | Build-in per-call/per-iteration cost observability; users will choose agents they can budget |
| **Silent failures erode trust** | Recurring across OpenClaw, Hermes, QwenPaw, NanoBot — subagent loss, cron silence, delivery drops | Default to explicit failure notification; silent degradation is the #1 satisfaction killer |
| **Desktop builds are fragile** | macOS SIGBUS (QwenPaw), Windows installer locks (QwenPaw), desktop freeze (Hermes), npm 11/12 breakage (Hermes) | Multi-platform desktop requires rigorous QA gates; Tauri/Electron packaging is a significant liability |
| **Security hardening is a race** | OpenClaw shipping 2 patches/day, IronClaw's SafetyLayer unwired, Hermes ANSI bypass, ZeroClaw workspace guard | Security is becoming a differentiator; projects that ship hardening visibly will gain operator trust |
| **Session compaction is an unsolved problem** | OpenClaw, Hermes, QwenPaw all report compaction-related corruption, orphan forks, context bloat | Compaction strategy is a key architectural decision; reversible/transparent compaction is likely a winning pattern |
| **Multi-provider flexibility is expected** | LiteLLM (LobsterAI), NIM (QwenPaw), dynamic discovery (OpenClaw), Volcengine/MiMo (QwenPaw) | Vendor lock-in is a risk; provider-agnostic architecture with fallback is becoming table stakes |
| **Docker-first deployment friction persists** | NanoBot entrypoint permissions, Moltis Docker filesystem, QwenPaw App market in Docker, OpenClaw Windows Scheduled Tasks | Containerized deployments need first-class testing; "it works locally" is insufficient |
| **Credential isolation is immature** | OpenClaw Telegram credential exposure, Hermes cross-profile leakage (#82119), IronClaw duplicate projection IDs (#7352) | Multi-tenant/isolated deployments are not yet safe; this is a high-signal differentiator if solved |

---

*Report generated from community digest data for 13 projects on 2026-08-09.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-09

## 1. Today's Overview

NanoBot showed moderate development activity over the past 24 hours with 5 open issues and 9 open/closed PRs tracked. The project appears to be in a maintenance-and-refinement phase, with no new releases published today. Activity centered on two major themes: improving token-usage observability and resolving a critical MCP connection stability bug. Community engagement remains steady, with issue #5266 on token consumption logging accumulating 13 comments, indicating strong user interest in cost transparency.

## 2. Releases

No new releases were published today.

## 3. Project Progress

Four PRs were merged/closed today, advancing the project in cleanup, observability, and WebUI polish:

- **#5293** (closed) — `feat(usage): log per-iteration token diagnostics` by kuaijiemei. Directly addresses issue #5266 by adding per-agent-iteration token tracking, enabling users to identify which execution produced unexpectedly high consumption.
- **#5296** (closed) — `refactor: remove verified dead code` by chengyongru. Removed 19 dead-code units and 11 orphaned test-only seams, cleaning up the codebase with no behavioral changes.
- **#5294** (closed) — `fix(webui): prevent image hover clipping` by chengyongru. Fixed a WebUI regression where assistant image previews were clipped on hover by removing hover scaling and ring effects.

Three other PRs remain open: #5271 (session data race fix), #5206 (duplicate stream logging fix), and #4276 (model-agnostic computer use tools).

## 4. Community Hot Topics

- **[Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)** — *Logs about token consumption* (13 comments). The most discussed issue today. Users report millions of tokens burned during idle periods and need per-call diagnostics to trace the source. This reflects a growing pain point as NanoBot deployments scale and LLM costs become a real concern.
- **[Issue #5297](https://github.com/HKUDS/nanobot/issues/5297)** — *MCP OAuth web authorization* (2 comments). A feature request for OAuth web login support in MCP configurations (e.g., XMind MCP). Signals demand for broader third-party MCP integrations that require interactive auth flows.
- **[Issue #5298](https://github.com/HKUDS/nanobot/issues/5298)** — *Budget model-visible MCP schemas for large tool sets* (0 comments, but raised same day). Proposes exposing MCP tool count/cost to the model to prevent context overflow with large tool registries.

**Underlying need:** Users are adopting NanoBot for more complex, tool-heavy workflows, and the current observability and integration capabilities don't yet match production-grade expectations around cost tracking, auth flexibility, and context management.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P0 — Critical** | [#5300](https://github.com/HKUDS/nanobot/issues/5300) | MCP connection failure triggers `anyio` cancel-scope crash across tasks, causing gateway process hang/crash, task leaks, and CPU spike to abnormal levels. | No fix PR yet |
| **P1 — High** | [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker Compose deployment fails with `entrypoint.sh: Permission denied`, blocking first-time setups. | No fix PR yet |
| **P2 — Medium** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | Stale background task (e.g., `maybe_generate_webui_title`) can overwrite session data when user runs `/new` during an `await` window. | PR open, has conflicts |
| **P2 — Medium** | [#5206](https://github.com/HKUDS/nanobot/pull/5206) | Streamed responses logged twice — once at stream finalization, once in `AgentLoop._assemble_outbound`. | PR open, has conflicts |

**Assessment:** The MCP crash bug (#5300) is the most urgent stability concern — it directly impacts reliability for users with remote MCP servers and currently has no pending fix. The Docker deployment issue (#5295) blocks new users from getting started.

## 6. Feature Requests & Roadmap Signals

- **#5293** (merged) — Per-iteration token diagnostics. Likely signals a trend toward built-in cost-observability features in upcoming releases.
- **#5299** (open) — *Show recent token usage details* in WebUI by chengyongru. Complements #5293 by adding a UI layer for the per-iteration data, suggesting a coordinated push on cost transparency.
- **#5297** (open) — MCP OAuth web authorization. Reflects community demand for easier third-party MCP integrations (e.g., XMind, Notion-style tools).
- **#5298** (open) — Model-visible MCP schema budgets. A sophisticated request to help models manage context when tool sets grow large.

**Prediction:** The next release will likely include token-usage visibility improvements (#5293 + #5299) and possibly a Docker deployment fix. MCP OAuth support and schema budgeting are likely Q3/Q4 roadmap items given their complexity.

## 7. User Feedback Summary

- **Pain point — Cost opacity:** Multiple users report runaway token consumption (millions in hours) with no way to trace which calls or tools are responsible. This is the dominant feedback theme (#5266, #5293, #5299).
- **Pain point — MCP reliability:** Remote MCP connections that return errors (e.g., Cloudflare 530) can crash the entire gateway process due to improper exception handling in the anyio task model (#5300).
- **Pain point — Onboarding friction:** Docker Compose deployment fails with a permission error on the entrypoint script, blocking new users (#5295).
- **Satisfaction signal:** The merged dead-code cleanup (#5296) and WebUI image fix (#5294) suggest the core team is actively responding to quality concerns. The temporary chat feature (#5252, merged) also shows responsiveness to UX requests.

## 8. Backlog Watch

- **[Issue #5300](https://github.com/HKUDS/nanobot/issues/5300)** — MCP crash bug with no fix PR. This is the highest-priority unresolved item: a single remote MCP failure can bring down the entire gateway. Needs maintainer attention soon.
- **[Issue #5295](https://github.com/HKUDS/nanobot/issues/5295)** — Docker deployment permission error with no fix PR. Blocks new user onboarding.
- **[PR #5271](https://github.com/HKUDS/nanobot/pull/5271)** — Session data race condition fix, marked P0 but still open with conflicts. High-impact bug for multi-turn users.
- **[PR #5206](https://github.com/HKUDS/nanobot/pull/5206)** — Duplicate logging fix, P2, also open with conflicts.
- **[Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)** — Token logging feature request, 13 comments, no merged solution yet (partial fix via #5293 addresses diagnostics but not per-call logging requested here).

**Project health:** Moderate — active development on observability and cleanup, but two critical bugs (MCP crash, Docker deploy) lack fixes, and two P0/P2 PRs are stalled on conflicts. Token-usage improvements are moving forward well.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-09

## 1. Today's Overview

Hermes Agent is showing **high activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating a rapidly evolving codebase under active development. The project is navigating a wave of **session-state and compaction-related bugs**, several **platform-specific install/update regressions** (Windows, npm 11/12, Docker/SELinux), and a few **security hardening reports**. Five PRs were merged/closed today, primarily addressing reasoning-token estimation, desktop HUD overflow, and Anthropic OAuth billing stability. No new releases were published during this window.

## 2. Releases

*No new releases today.*

## 3. Project Progress

**Merged/Closed PRs (2026-08-09):**

| PR | Type | Summary |
|----|------|---------|
| [#82116](https://github.com/NousResearch/hermes-agent/pull/82116) | Bugfix | Compaction tail budget now charges stale reasoning only on the newest assistant turn, reclaiming ~19–24% of budget previously wasted on unreplayed thinking blocks. Closes #73624. |
| [#73730](https://github.com/NousResearch/hermes-agent/pull/73730) | Bugfix | Uses actual reasoning tokens in `_estimate_msg_budget_tokens` instead of stale values. Duplicate/closed in favor of #82116. |
| [#82113](https://github.com/NousResearch/hermes-agent/pull/82113) | Bugfix | Keeps tool rows and background notices out of the HUD band, preventing answers from being pushed out of view. |
| [#57248](https://github.com/NousResearch/hermes-agent/pull/57248) | Bugfix | Preserves reasoning fields (`reasoning_details`, `codex_reasoning_items`) intact across session forks — fixes double-encoding bug from #57240. |
| [#82066](https://github.com/NousResearch/hermes-agent/pull/82066) | Bugfix | Adapts Claude Code's message-dependent billing fingerprint into the Anthropic OAuth adapter, keeping prompt-cache markers stable as conversation history grows. |

**Notable Open PRs advancing today:**
- [#82119](https://github.com/NousResearch/hermes-agent/pull/82119) — Fixes cross-profile credential leakage in OpenViking memory plugin for `hermes serve --isolated`.
- [#82120](https://github.com/NousResearch/hermes-agent/pull/82120) — Restores the "Branch into new chat" fork button in session tiles.
- [#82122](https://github.com/NousResearch/hermes-agent/pull/82122) — MCP servers using `${workspaceFolder}` now resolve from the calling session's workspace, not the backend default.
- [#81958](https://github.com/NousResearch/hermes-agent/pull/81958) — Introduces Browser Use CLI 3.0 mode, consolidating twelve `browser_*` tools into a single `browser_exec` driver.
- [#51152](https://github.com/NousResearch/hermes-agent/pull/51152) — Adds memory tiering with `[core]` prefix for always-injected entries and extended (on-demand via `search` action) entries to reduce system-prompt token cost.

## 4. Community Hot Topics

**Most discussed issues (by comment count):**

1. **[Bug] Desktop unresponsive after ~5 messages on macOS 27 beta** — [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) (18 comments)
   The highest-engagement issue this cycle. A full UI freeze (not just typing lag) that locks out Settings points to a session-state or main-thread blocking bug. Users are frustrated by data-loss risk.

2. **[Security] Skills written by agents bypass content scan, injected into every session prompt** — [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) (6 comments)
   Filed as a defense-in-depth note per `SECURITY.md`. Raises concerns about agent-authored skills entering the system prompt without review — relevant to multi-tenant or automated workflows.

3. **[Bug] Cron script-path guard rejects valid profile-scoped jobs** — [#40801](https://github.com/NousResearch/hermes-agent/issues/40801) (6 comments)
   Inverse of a previously fixed issue (#32091); the guard now over-corrects and blocks scripts in the default-profile directory. Affects cron-dependent automation users.

4. **[Bug] Desktop update handoff produces duplicate `hermes-setup` instance** — [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) (6 comments)
   Two `hermes-setup` processes race on macOS; the second fails against the first's marker, showing a misleading "failed" dialog while the real update continues. Erodes user trust in updates.

5. **[Bug] `lifecycle_guard` rejects terminal commands with ELF binary paths** — [#81322](https://github.com/NousResearch/hermes-agent/issues/81322) (5 comments)
   Null-byte error on benign paths (e.g., venv Python interpreters) blocks legitimate terminal tool usage.

**Underlying need:** Users are hitting **stability and trust gaps** — update mechanisms, session compaction, and credential isolation are all producing friction. The high comment counts reflect recurring pain rather than one-off bugs.

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | Desktop completely unresponsive after ~5 messages on macOS 27 beta | No known fix yet |
| **P1** | [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) | Every update breaks installation on Windows; user reports losing configs | [#82118](https://github.com/NousResearch/hermes-agent/pull/82118) open |
| **P1** | [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) | Duplicate `hermes-setup` process on macOS update handoff | No known fix yet |
| **P2** | [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | Agent flush after compression shows misleading "full disk" error | No known fix yet |
| **P2** | [#70846](https://github.com/NousResearch/hermes-agent/issues/70846) | Compaction wipes human-visible message history | No known fix yet |
| **P2** | [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) | `state.db` FTS index corruption on macOS | No known fix yet |
| **P2** | [#78807](https://github.com/NousResearch/hermes-agent/issues/78807) | DeepSeek V4 Flash infinite reasoning loop | No known fix yet |
| **P2** | [#77833](https://github.com/NousResearch/hermes-agent/issues/77833) | Kanban WS handler leaks poll tasks on disconnect → 100%+ CPU | No known fix yet |
| **P2** | [#66978](https://github.com/NousResearch/hermes-agent/issues/66978) | `_tui_need_npm_install` triggers `npm install` on every TUI launch (duplicate) | No known fix yet |
| **P2** | [#81995](https://github.com/NousResearch/hermes-agent/issues/81995) | Stalled stdio MCP cold-spawn leaves in-flight calls for 300s | No known fix yet |
| **P2** | [#81012](https://github.com/NousResearch/hermes-agent/issues/81012) | ANSI CSI/SGR sequences defeat token redaction → API key leak | No known fix yet |
| **P3** | [#81430](https://github.com/NousResearch/hermes-agent/issues/81430) | `hermes memory status` reports disabled despite memory being healthy | No known fix yet |
| **P3** | [#62171](https://github.com/NousResearch/hermes-agent/issues/62171) | npm 12 breaks Hermes Desktop on Linux after `hermes update` | [#81983](https://github.com/NousResearch/hermes-agent/pull/81983) open (Windows variant) |

**Stability assessment:** The project has **multiple P1/P2 bugs concentrated in session-state management, desktop update flow, and compaction** — all core reliability areas. The redaction bypass (#81012) and skill content-scan gap (#78515) are security-relevant. Fix PRs exist for several items but many P1 bugs remain unaddressed.

## 6. Feature Requests & Roadmap Signals

| Issue | Summary | Likelihood for Next Release |
|-------|---------|----------------------------|
| [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | Lifecycle management UX for built-in memory (inspection, dedup, conflict detection) | Medium — scoped, well-defined |
| [#49103](https://github.com/NousResearch/hermes-agent/issues/49103) | Unified Cmd+K search across files, sessions, and skills | Medium — matches TUI/CLI parity patterns |
| [#35573](https://github.com/NousResearch/hermes-agent/issues/35573) | ToolCallStormBreaker — suppress repeated tool-call loops | Medium — addresses a known pain point |
| [#51152](https://github.com/NousResearch/hermes-agent/pull/51152) | Memory tiering with `[core]` prefix + `search` action | **High** — PR already open, actively discussed |
| [#81958](https://github.com/NousResearch/hermes-agent/pull/81958) | Browser Use CLI 3.0 mode | Medium-High — salvage PR, broadens browser tooling |
| [#27040](https://github.com/NousResearch/hermes-agent/pull/27040) | Generic `voice_server` gateway platform | Low-Medium — large scope, needs-decision tag |
| [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) | `claude-agent-sdk` as first-class provider | Medium — fixes #25267, merges with #72002 |

**Prediction:** Memory tiering (#51152) and browser-exec consolidation (#81958) are the most likely to land in the next release. The voice_server gateway and Claude Agent SDK are larger efforts that may span multiple versions.

## 7. User Feedback Summary

- **Update trust is declining.** Issue #81969 explicitly states: *"do you not test your updates before pushing to production?"* — users are losing configurations and rebuilds after every update. The npm 11/12 incompatibility (#62171) and Windows install script blocks (#81969, #81983) compound this.
- **Session compaction is destroying conversational continuity.** Issue #70846 reports that compaction wipes human-visible history; #82001 reports misleading "full disk" errors on flush failures. Users need transparent, reversible compaction.
- **Desktop UX regressions are frequent.** The fork button disappearing (#81846), HUD band overflow (#82113), and macOS freeze (#63047) all point to desktop-client quality control gaps.
- **Multi-profile isolation is not yet solid.** Credential leakage across profiles (#82119) and MCP workspace confusion (#82122) suggest `--isolated` mode needs more rigorous testing.
- **Satisfaction drivers:** The Anthropic billing fix (#82066) and reasoning-field preservation across forks (#57248) address real power-user needs and were well-received.

## 8. Backlog Watch

| Issue | Age | Why It Needs Attention |
|-------|-----|----------------------|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | ~28 days | P1 desktop freeze; highest engagement; no fix PR yet |
| [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) | 1 day | P1 Windows update breakage; user trust at risk |
| [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) | ~9 days | P1 macOS update race condition; no fix PR yet |
| [#81012](https://github.com/NousResearch/hermes-agent/issues/81012) | 2 days | P2 security — token redaction bypass via ANSI sequences; potential credential leak |
| [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) | 5 days | P3 security — skills bypass content scan; defense-in-depth gap |
| [#77833](https://github.com/NousResearch/hermes-agent/issues/77833) | 6 days | P3 Kanban WS leak causing sustained 100%+ CPU; no fix PR |
| [#57752](https://github.com/NousResearch/hermes-agent/issues/57752) | ~37 days | Session DB auto-prune is opt-in and off by default — silent data accumulation with no user warning |
| [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) | ~28 days | P2 FTS index corruption on macOS; affects session search and handoff state |

**Recommendation:** The top priorities for maintainers are the **P1 desktop freeze (#63047)**, **Windows update regression (#81969)**, and the **security-adjacent issues (#81012, #78515)**. The `auto_prune` default-off behavior (#57752) is a quiet but growing reliability risk as session databases accumulate.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-09

---

## 1. Today's Overview

PicoClaw shows moderate daily activity with 3 updated issues and 4 open pull requests in the last 24 hours, though no merges or closed PRs were recorded today. No new releases were published. The project remains in a steady development cycle with several stale items awaiting maintainer review, and recent PR activity is focused on dependency bumps and internal refactors rather than user-facing feature launches. Overall, project health is stable but momentum appears sluggish, with most contributions still open and unmerged.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

No PRs were merged or closed today. The open PR landscape includes:

- **PR #3320** — Bumps `whatsmeow` dependency to resolve WhatsApp's "client outdated (405)" error, unblocking the native WhatsApp channel. *(https://github.com/sipeed/picoclaw/pull/3320)*
- **PR #3321** — Relocates dynamic context blocks after conversation history to preserve prefix caching, a performance-oriented fix for token caching efficiency. *(https://github.com/sipeed/picoclaw/pull/3321)*
- **PR #3222** — Refactors and cleans up the Deltachat implementation, dropping ~200 lines of legacy code, removing password-based email config, and renaming invite link fields. *(https://github.com/sipeed/picoclaw/pull/3222)*
- **PR #3193** — Adds a new SimpleX channel type, expanding supported messaging protocols. *(https://github.com/sipeed/picoclaw/pull/3193)*

---

## 4. Community Hot Topics

- **Issue #3287** — *Better support for long messages in IRC* (4 comments) — Users need PicoClaw to reassemble IRCv3 split messages (>512 bytes) into cohesive exchanges. This reflects a real pain point for users routing IRC-based AI conversations through PicoClaw. *(https://github.com/sipeed/picoclaw/issues/3287)*

- **Issue #3302** — *Support OAuth 2.1 for MCP servers* (2 comments) — A follow-up to issue #2546, requesting OAuth 2.1 parity for MCP server authentication. Signals growing demand for standardized, secure MCP server integrations. *(https://github.com/sipeed/picoclaw/issues/3302)*

- **Issue #3292** — *High CPU usage when chat input box is focused* (CLOSED, 2 comments) — A performance bug on Linux/Firefox with deepseek-v4-flash, now closed but indicative of UI rendering overhead concerns. *(https://github.com/sipeed/picoclaw/issues/3292)*

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description |
|----------|-----------|-------------|
| **High** | [#3292](https://github.com/sipeed/picoclaw/issues/3292) (CLOSED) | Excessive CPU usage when the chat input box is focused on Linux/Firefox. Work appears resolved but was reported under version 0.3.1. |
| **Medium** | [#3320](https://github.com/sipeed/picoclaw/pull/3320) (OPEN PR) | WhatsApp channel broken due to client version drift (error 405). A fix PR exists but remains unmerged. |

No new regressions were reported today. The WhatsApp issue is the most pressing stability concern, as it completely blocks a core channel.

---

## 6. Feature Requests & Roadmap Signals

- **OAuth 2.1 for MCP servers** (#3302) — User-requested enhancement aligning with broader MCP ecosystem security trends. Likely candidate for a future release if #2546 groundwork is already in place.
- **SimpleX channel support** (#3193) — PR is open and stale; if merged, would add a privacy-focused messaging protocol, expanding PicoClaw's channel diversity.
- **IRC long-message reassembly** (#3287) — Niche but important for users relying on IRC as a chat interface; reflects demand for better protocol-aware message handling.

---

## 7. User Feedback Summary

- **WhatsApp breakage** is the most urgent real-world pain point — users cannot use the WhatsApp channel at all until the dependency is bumped.
- **IRC message splitting** causes fragmented AI conversations, degrading user experience for IRC-based deployments.
- **CPU performance** in the chat UI on Linux/Firefox was flagged and closed, suggesting responsiveness issues are being addressed but may resurface.
- **MCP OAuth** demand indicates users are integrating PicoClaw into more complex, multi-server environments requiring robust authentication.

---

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) — Deltachat cleanup | ~37 days open, stale | Significant refactor that improves code quality; prolonged delay risks stale conflicts. |
| [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) — SimpleX channel | ~43 days open, stale | New channel type that broadens platform support; long wait may push contributors away. |
| [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) — IRC long messages | ~18 days open, stale | Protocol-level bug affecting UX; low comment count but clearly impactful for IRC users. |
| [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) — WhatsApp dependency bump | ~2 days open | Time-sensitive fix; WhatsApp's client auth churn means delays directly break functionality. |
| [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302) — OAuth 2.1 for MCP | ~10 days open | Enhancement request with no active PR; signals roadmap interest but no immediate action. |

**Recommendation:** Prioritize merging PR #3320 (WhatsApp fix) as it unblocks a critical channel, followed by reviewing the stale Deltachat and SimpleX PRs to clear the backlog.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-09

### 1. Today's Overview
NanoClaw showed moderate contributor activity over the past 24 hours, with 8 issues and 6 pull requests updated. Three issues were resolved and three PRs were merged/closed, indicating steady progress on reliability and channel integrations. No new releases were shipped, suggesting the team is prioritizing backlog remediation and feature stabilization ahead of the next version. Overall project health is positive, with active community contributions targeting core UX bugs and MCP expansion.

### 2. Releases
*No new releases reported in the last 24 hours.*

### 3. Project Progress
**Merged/Closed PRs:**
- [#2777](https://github.com/nanocoai/nanoclaw/pull/2777) — Strava MCP skill added, completing an official integration with host-side OAuth and token refresh.
- [#2776](https://github.com/nanocoai/nanoclaw/pull/2776) — Remote HTTP/SSE MCP server support extended the existing stdio-only `McpServerConfig` union, enabling cloud-hosted tool servers.
- [#3199](https://github.com/nanocoai/nanoclaw/pull/3199) — Initial Mattermost `ChannelAdapter` implementation landed, then closed to allow a follow-up rewrite.

**Closed Issues:**
- [#3201](https://github.com/nanocoai/nanoclaw/issues/3201) — Discord approval button mapping bug resolved.
- [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) — SQLite journal-mode lock contention on Docker cross-mount filesystems patched.

### 4. Community Hot Topics
- **[PR #3185](https://github.com/nanocoai/nanoclaw/pull/3185)** — Discord approval custom_id parsing fix. *Underlying need:* Reliable human-in-the-loop approval flows; webhook interaction routing must correctly preserve option delimiters.
- **[Issue #3205](https://github.com/nanocoai/nanoclaw/issues/3205)** — Persistent group-scoped OneCLI secret assignment. *Underlying need:* Multi-tenant secret governance; current spawn-time assignment lacks per-group persistence, creating a design fork.
- **[Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528)** — Signal channel attachments unreachable from agent container. *Underlying need:* Consistent cross-platform file mounting for channel integrations.

### 5. Bugs & Stability
| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| 🔴 Critical | [#3201](https://github.com/nanocoai/nanoclaw/issues/3201) | Discord approval cards reject all votes due to `custom_id` mapping failure | ✅ Closed |
| 🟠 High | [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) | SQLite lock contention causes 29k+ readonly errors on Docker mounts | ✅ Closed |
| 🟡 Medium | [#3206](https://github.com/nanocoai/nanoclaw/issues/3206) | Attachments dropped when message IDs contain `/` or `\` (e.g., Google Chat) | 🟡 Open |
| 🟡 Medium | [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | Codex provider emits undeclared `file` event; breaks typecheck and drops images | 🟡 Open |
| 🟡 Medium | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | Signal DM images/PDFs never reach the agent container | 🟡 Open |
| 🟢 Low | [#3200](https://github.com/nanocoai/nanoclaw/issues/3200) | Off-topic persona prompt | ✅ Closed (noise) |

**Open fix PRs:** [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) addresses the Discord approval regression.

### 6. Feature Requests & Roadmap Signals
- [#3202](https://github.com/nanocoai/nanoclaw/pull/3202) — Mattermost channel adapter (v2 architecture)
- [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) — Telegram native rich rendering via Bot API 10.1 `sendRichMessage`
- [#3205](https://github.com/nanocoai/nanoclaw/issues/3205) — Group-scoped persistent secret assignment
- [#2776](https://github.com/nanocoai/nanoclaw/pull/2776) — Remote MCP server transport (HTTP/SSE)

**Prediction:** The next release will likely surface Telegram rich-message support, a polished Mattermost integration, and expanded MCP remote transport. The secret-assignment design fork (#3205) remains undecided and may be deferred to a dedicated architecture RFC.

### 7. User Feedback Summary
**Pain points:** 
- Approval workflows are fragile when webhook interaction IDs contain special characters.
- Containerized agents repeatedly lose host-side file attachments across channels (Signal, Google Chat).
- Skill documentation drifts from runtime code after refactor cycles (`add-opencode` vs `cli-tools.json`).

**Satisfaction signals:**
- Rapid closure of high-impact bugs (#3201, #3177) shows responsive maintenance.
- Active community contributions for niche integrations (Strava, Mattermost, Telegram) indicate strong ecosystem engagement.

### 8. Backlog Watch
- [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) — Open since May 18; unresolved cross-container attachment routing.
- [#3205](https://github.com/nanocoai/nanoclaw/issues/3205) — Architectural fork on secret scope; needs maintainer direction.
- [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) & [#3204](https://github.com/nanocoai/nanoclaw/issues/3204) — Typecheck failure and skill-documentation drift; requires triage against current `providers`/`main` parity.

*Recommendation:* Prioritize container file-mount standardization and a secret-assignment RFC to unblock multi-tenant workflows and reduce recurring integration bugs.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-09

## 1. Today's Overview

IronClaw is experiencing high development velocity with **30 issues** and **50 pull requests** updated in the last 24 hours, indicating strong contributor engagement. The project is heavily focused on two parallel tracks: completing the **Reborn architecture migration** (with 24 issues closed today across product workflows, CLI parity, channel ports, and memory/workspace surfaces) and shipping **WebUI/Inspector features** alongside new channel capabilities. No new releases were published today. Activity is concentrated around core infrastructure hardening, with notable work on delivery race fixes, security gate audits, and Slack/Telegram presence features.

---

## 2. Releases

*No new releases published in the last 24 hours.*

---

## 3. Project Progress

### Merged/Closed Today
- **#7377** — `feat!: a run acts as its invoker` — Reapplies the acting-identity ladder across three remaining split points with full audit hardening (closed)
- **#7382** — `feat(stress): scripted tool-call workload` — Phase 1 of stress coverage for API capacity scenarios with deterministic builtin tool sequences (closed)
- **#7280** — `test(inspector): browser, security, and operator coverage` — Security and isolation coverage for Web Debug Inspector (closed)
- **#7393** — `test(disclosure): wide-catalog benchmark for Core delivery pair` — Benchmark for `outbound_deliver` and `outbound_delivery_targets_list` (closed)
- **#7389** — `fix(live-qa): verify triggered Slack delivery` — Fixes live-qa lane failures post-#7157 (closed)
- **#7226** — `Inspector: browser, security, and documentation coverage` — Completes cross-layer Inspector coverage (closed)
- **#4539** — `Epic: Reborn approvals parity` — Full V1 approval workflow parity for Reborn (closed)
- **#4470** — `Refactor reborn composition into owned crates` — CI-enforced crate boundaries (closed)
- **#4382** — `Product auth: default OAuth account per provider` — Silent credential resolution after initial auth (closed)
- **#4120** — `Declarative Reborn capability policy for local-dev grants` — Configuration-as-Code for local dev (closed)
- **#4118** — `Reborn CLI provider add/login parity` — CLI provider management parity (closed)
- **#4059** — `Enrich model-visible Reborn runtime errors` — Safe recovery context for tool failures (closed)
- **#3905** — `Support safe user-scoped tool installs` — Scoped skill model exposed through read handles (closed)
- **#3577/#3582** — Legacy channel port tracking and WeChat → Reborn ProductAdapter migration (closed)
- **#3280/#3285/#3286/#3287/#3288** — Reborn ProductWorkflow, channel adapter migration, agent command preservation, memory/workspace migration, and capability lifecycle parity (all closed)

### Open PRs Advancing
- **#7398** — `feat(web-push): browser push notifications + PWA` — Web app as first-party notification channel with W3C Web Push support
- **#7396** — `feat(channels): generic progressive previews for Slack` — Channel-neutral preview contract mapped to Slack streaming APIs
- **#7397** — `Presence-based shared conversations for Slack & Telegram` — Builds on acting-identity ladder for shared conversation context
- **#7171** — `fix(skills): one DB-backed tree per skill mount` — Fixes skills disappearing after installation (#7168)
- **#7395** — `fix(outbound): close send-claim TOCTOU race` — Fixes delivery claim-loss misclassification in outbound state store
- **#7352** — `fix(product): bind gate projection identities to their gate ref` — Fixes duplicated projection IDs across approval/auth gates
- **#7028/#7029** — Durable delivery claim and terminal status preservation during recovery
- **#7291** — `feat(inspector): statistics, navigation, and localization` — Completes Inspector Stats tab with tool-call metrics and stream health
- **#7373** — `Gate & ratchet audit: full-inventory report` — Full audit of 37 architecture-test gates with 5 fail-opens armed

---

## 4. Community Hot Topics

| Issue/PR | Comments | Focus | Link |
|----------|----------|-------|------|
| [#3280](https://github.com/nearai/ironclaw/issues/3280) — ProductWorkflow facade | 7 | Reborn product-layer architecture | [Issue](https://github.com/nearai/ironclaw/issues/3280) |
| [#6989](https://github.com/nearai/ironclaw/issues/6989) — Token accounting bug | 5 | ModelWorkRequest estimation fix | [Issue](https://github.com/nearai/ironclaw/issues/6989) |
| [#7360](https://github.com/nearai/ironclaw/issues/7360) — Stress coverage expansion | 2 | Built-in capability write testing | [Issue](https://github.com/nearai/ironclaw/issues/7360) |
| [#6939](https://github.com/nearai/ironclaw/issues/6939) — Legacy migration tool | 2 | Hermes/Openclaw → IronClaw migration | [Issue](https://github.com/nearai/ironclaw/issues/6939) |
| [#7218](https://github.com/nearai/ironclaw/issues/7218) — Web Debug Inspector | 0 | Operator debugging tooling | [Issue](https://github.com/nearai/ironclaw/issues/7218) |

**Analysis:** The Reborn migration epics (#3280, #3285–#3288) dominate closed issues, reflecting the project's strategic pivot to the new architecture. The token accounting bug (#6989) and safety layer gap (#7391) indicate ongoing hardening of the inference path. The legacy migration request (#6939) signals real user pain around switching costs.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **P1** | [#6989](https://github.com/nearai/ironclaw/issues/6989) | `ModelWorkRequest::for_assistant` estimates input tokens from `content_ref.as_str().len()` instead of actual referenced content — hybrid provider-usage + tail estimates | Open, no fix PR yet |
| **P1** | [#7391](https://github.com/nearai/ironclaw/issues/7391) | `SafetyLayer::validate_input` / `scan_inbound_for_secrets` have no caller on the live Reborn turn path — security docs describe a validation stage that is not wired | Open, no fix PR yet |
| **Medium** | [#7168](https://github.com/nearai/ironclaw/issues/7168) | Skills disappear after installation — absent from Settings and unactivatable | Fixed in [#7171](https://github.com/nearai/ironclaw/pull/7171) (open) |
| **Medium** | [#7395](https://github.com/nearai/ironclaw/pull/7395) | TOCTOU race in `claim_delivery_attempt_for_send` causing sending-row claim loss | PR open for review |
| **Medium** | [#7352](https://github.com/nearai/ironclaw/pull/7352) | Duplicate projection IDs across approval/auth gates on same run | PR open for review |
| **Low** | [#7389](https://github.com/nearai/ironclaw/pull/7389) | Live-qa lane failures post-#7157 due to retired `triggered-run-delivery` outcome | Merged |

**Notable:** Two P1 security/stability issues remain open without fix PRs — the safety layer gap (#7391) is particularly critical given it represents an unenforced validation stage on the production turn path.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Release |
|---------|--------|----------------------------|
| **Web Debug Inspector** — operator-only tool for prompt construction, agent activity, model usage, and tool execution | [#7218](https://github.com/nearai/ironclaw/issues/7218), PRs #7291, #7280, #7225, #7226 | **High** — actively being completed |
| **Legacy agent migration tool** — port Hermes/Openclaw setup, config, and memory | [#6939](https://github.com/nearai/ironclaw/issues/6939) | **Medium** — user demand evident, no PR yet |
| **Web Push notifications** — web app as first-party notification channel | [#7398](https://github.com/nearai/ironclaw/pull/7398) | **High** — PR open, W3C-compliant implementation |
| **Slack progressive previews** — channel-neutral preview contract | [#7396](https://github.com/nearai/ironclaw/pull/7396) | **High** — PR open |
| **Replace coding tools with omp** — pinned `oh-my-pi` tool contract | [#7392](https://github.com/nearai/ironclaw/issues/7392) | **Medium** — epic just opened |
| **Stress coverage expansion** — scripted tool-call workloads for durable write paths | [#7360](https://github.com/nearai/ironclaw/issues/7360), PR #7382 | **High** — Phase 1 merged, Phase 2 likely |

---

## 7. User Feedback Summary

- **Migration friction is real.** Issue #6939 reports that Hermes/Openclaw users face high switching costs with no way to carry over setup, configuration, and memory. Users explicitly resist starting with a clean slate.
- **Skill persistence matters.** Issue #7168 (fixed in #7171) shows installed skills vanishing after installation — a critical trust issue for power users.
- **Operator debugging needs.** The Web Debug Inspector (#7218) addresses a clear demand for visibility into prompt construction, token usage, and tool execution during agent runs.
- **Notification parity expectations.** Users expect web push to match Slack/Telegram as a first-party channel — feature parity is a recurring theme (#7398, #7396, #7397).
- **Security transparency.** The safety layer gap (#7391) and gate audit (#7373) suggest users and auditors are closely examining the security model, with expectations of documented enforcement.

---

## 8. Backlog Watch

| Issue | Age | Risk | Description |
|-------|-----|------|-------------|
| [#6989](https://github.com/nearai/ironclaw/issues/6989) | 8 days | **High** | Token accounting bug — estimates from content reference string length instead of actual content. No fix PR. |
| [#7391](https://github.com/nearai/ironclaw/issues/7391) | <1 day | **High** | SafetyLayer validation functions exist but have no caller on live Reborn turn path. Security-critical gap. |
| [#6939](https://github.com/nearai/ironclaw/issues/6939) | 9 days | **Medium** | Legacy migration tool — user-facing pain point with no implementation started. |
| [#7392](https://github.com/nearai/ironclaw/issues/7392) | <1 day | **Low** | Replace coding tools with omp — newly opened epic, tracking required. |
| [#7395](https://github.com/nearai/ironclaw/pull/7395) | <1 day | **Medium** | TOCTOU race fix PR — needs review to land before it impacts production delivery. |

**Maintainer Attention Needed:** The two P1 issues (#6989, #7391) represent security and correctness gaps on the production path that should be prioritized. The migration tool (#6939) addresses a user retention risk that, while not urgent, deserves a roadmap commitment.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# 🦞 LobsterAI Project Digest — 2026-08-09

---

## 1. Today's Overview

LobsterAI showed modest but steady activity today with **1 open issue** and **3 PRs** updated in the last 24 hours (2 open, 1 merged/closed). No new releases were published. The project remains actively maintained by the Netease-Youdao team, with community contributions flowing in on performance, integrations, and documentation. A notable merged PR today adds LiteLLM gateway support, expanding provider flexibility for users. Overall project health is **stable and progressing**.

---

## 2. Releases

**No new releases** were published today.

---

## 3. Project Progress

- **✅ PR #2193 — [Merged] feat: add LiteLLM as AI gateway provider** (`area: renderer, area: main, area: openclaw`)
  - *Author:* RheagalFire | *Created:* 2026-06-23 | *Merged/Closed:* 2026-08-08
  - [GitHub Link](https://github.com/netease-youdao/LobsterAI/pull/2193)
  - Adds [LiteLLM](https://litellm.ai) as a first-class AI gateway provider, enabling access to 100+ LLM providers through a single OpenAI-compatible endpoint. No new dependencies required — reuses the existing `chatWithOpenAICompatible` handler. This is a meaningful integration expansion for multi-provider setups.

---

## 4. Community Hot Topics

| Item | Type | Title | Comments | 👍 | Link |
|------|------|-------|----------|-----|------|
| #1192 | Issue | 自定义已有工具的默认配置 (Custom default config for existing tools) | 1 | 0 | [Link](https://github.com/netease-youdao/LobsterAI/issues/1192) |
| #1193 | PR | perf(sqlite): eliminate write amplification with debounce + batch transactions | — | 0 | [Link](https://github.com/netease-youdao/LobsterAI/pull/1193) |
| #2294 | PR | docs: add TakoAPI directory badge | — | 0 | [Link](https://github.com/netease-youdao/LobsterAI/pull/2294) |

**Analysis:**

- **Issue #1192** reflects a common user pain point: the inability to hardcode default configurations for built-in tools (e.g., forcing headless browser mode). Users want deterministic behavior without relying on LLM instruction-following, which is unreliable for low-level config overrides.
- **PR #1193** addresses a significant performance concern — SQLite write amplification caused by `sql.js`'s in-memory model requiring full-database serialization on every mutation. If merged, this would substantially improve persistence performance.
- **PR #2294** is a visibility/metadata PR adding a discovery badge for the TakoAPI agent directory, reflecting community interest in project discoverability.

---

## 5. Bugs & Stability

**No new bugs, crashes, or regressions** reported today. All open items are feature requests or performance improvements. The project appears stable with no urgent stability concerns.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Signal Strength |
|---------|--------|----------------|
| Custom default configs for built-in tools (e.g., headless browser) | Issue #1192 | ⭐⭐⭐ High — repeatedly implied need for deterministic tool behavior |
| SQLite performance optimization (debounce + batch transactions) | PR #1193 | ⭐⭐⭐ High — directly addresses a known architectural bottleneck |
| LiteLLM gateway integration | PR #2193 | ✅ **Already merged** — multi-provider gateway support now available |
| Project discoverability via third-party directories | PR #2294 | ⭐ Low — cosmetic/marketing |

**Prediction:** Issue #1192 (tool default config override) and PR #1193 (SQLite perf) are the strongest candidates for inclusion in the next release cycle, alongside any follow-up work from the LiteLLM integration.

---

## 7. User Feedback Summary

| Theme | Feedback | Sentiment |
|-------|----------|-----------|
| Tool configurability | Users want to override defaults (e.g., headless mode) without depending on LLM prompt following | 😐 Frustrated — LLM reliability gaps |
| Performance | SQLite write amplification is a known pain point; batch/debounce fix is eagerly awaited | 😐 Concerned — persistence overhead |
| Provider flexibility | LiteLLM integration well-received as a no-dependency expansion | 😊 Positive |
| Discoverability | Community members proactively seeking listing directories | 😊 Engaged |

**Overall sentiment:** Satisfied with direction but frustrated by configurability gaps and performance limitations. The merged LiteLLM PR is a clear win.

---

## 8. Backlog Watch

| Item | Age | Risk | Link |
|------|-----|------|------|
| **Issue #1192** — Custom default tool config | ~4 months | ⚠️ Medium — core usability gap | [Link](https://github.com/netease-youdao/LobsterAI/issues/1192) |
| **PR #1193** — SQLite write amplification fix | ~4 months | 🔴 High — performance bottleneck, pending merge | [Link](https://github.com/netease-youdao/LobsterAI/pull/1193) |
| **PR #2294** — TakoAPI badge | ~1 month | 🟢 Low — cosmetic | [Link](https://github.com/netease-youdao/LobsterAI/pull/2294) |

**Key concern:** PR #1193 has been open since April with no visible merge activity. Given its direct impact on database persistence performance, this should be prioritized. Issue #1192 also deserves maintainer attention as it represents a fundamental gap in tool configurability.

---

*Digest generated from LobsterAI GitHub data via LobsterAI (github.com/netease-youdao/LobsterAI) — 2026-08-09*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-08-09

---

## 1. Today's Overview

Moltis saw light activity today with 2 issues and 1 pull request updated in the last 24 hours. No new releases were published, suggesting the project is in a maintenance phase between version bumps. The most notable development is the closure of PR #1105, which resolved a Docker sandbox filesystem regression, and the opening of a new bug report (#1185) concerning Apple Container sandbox detection. Overall project velocity is low but focused on stability fixes rather than feature expansion.

---

## 2. Releases

**No new releases today.** The project has no recent version bumps reflected in the current data. The latest merged work (PR #1105) remains unreleased, indicating the next version may incorporate it in a future update cycle.

---

## 3. Project Progress

### Merged / Closed PRs
- **[PR #1105](https://github.com/moltis-org/moltis/pull/1105)** — *Fix Docker sandbox filesystem tool fallback* (Author: penso)
  - **Status:** Merged on 2026-08-08
  - **Summary:** Adds regression coverage for sandboxed Read/Write/Edit/MultiEdit operations on `/home/sandbox` and `workspace/data` paths. Introduces a fallback mechanism that translates Docker host paths to container operations when the gateway process cannot access the host mount directly. Preserves direct-host missing-list semantics while improving reliability of filesystem tools inside Docker sandboxes.
  - **Impact:** Resolves a persistent Docker-specific bug affecting core sandbox tooling. This is a meaningful stability improvement for users running Moltis in Docker environments.

---

## 4. Community Hot Topics

| Item | Type | Author | Activity | Link |
|------|------|--------|----------|------|
| #1185 | Open Bug | mikz | 0 comments, 0 reactions | [Issue #1185](https://github.com/moltis-org/moltis/issues/1185) |
| #1096 | Closed Bug | IlyaBizyaev | 0 comments, 0 reactions | [Issue #1096](https://github.com/moltis-org/moltis/issues/1096) |

**Analysis:**
- **Issue #1185** (open) reports that the Apple Container 1.x sandbox starts successfully but Moltis fails to detect it as running. This reflects an ongoing need for robust multi-platform container runtime detection — users expect Moltis to reliably recognize sandboxes across Docker and Apple Container implementations.
- **Issue #1096 / PR #1105** pair shows a resolved Docker filesystem bug. The original issue had no comments, but the fix was implemented without community discussion, which may indicate a small but active contributor base handling bugs proactively.

---

## 5. Bugs & Stability

| Rank | Bug | Severity | Status | Fix PR | Link |
|------|-----|----------|--------|--------|------|
| 1 | Apple Container 1.x sandbox starts but Moltis treats it as not running | Medium | 🟡 Open | None yet | [Issue #1185](https://github.com/moltis-org/moltis/issues/1185) |
| 2 | `Read`/`Write`/`Edit` tools don't work in Docker | High (resolved) | ✅ Closed | [PR #1105](https://github.com/moltis-org/moltis/pull/1105) | [Issue #1096](https://github.com/moltis-org/moltis/issues/1096) |

**Assessment:** The Docker filesystem bug (#1096) was a significant stability issue for Docker-based sandbox users and has been addressed. The remaining open bug (#1185) affects Apple Container users and could block workflow for a subset of the user base, but it is lower severity since Docker remains functional.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were updated today. However, the Apple Container sandbox detection gap (#1185) signals a **roadmap opportunity**: improved multi-runtime container support. Users are clearly engaging with Moltis across different sandbox technologies (Docker and Apple Container), and the project would benefit from a formalized compatibility matrix or unified container detection layer.

---

## 7. User Feedback Summary

- **Apple Container users** (mikz) are experiencing friction with sandbox detection — the container runs but Moltis does not recognize it. This suggests the runtime detection logic may need updates to support Apple Container 1.x APIs or status checks.
- **Docker users** (IlyaBizyaev) previously faced broken filesystem tools, which has now been remediated. No follow-up complaints were found, suggesting the fix in PR #1105 is satisfactory.
- **Overall satisfaction signal:** Low — both open and closed issues have zero comments and zero reactions, which may indicate a quiet but niche user base, or users resolving issues without providing public feedback.

---

## 8. Backlog Watch

| Item | Days Open | Priority | Note | Link |
|------|-----------|----------|------|------|
| #1185 | 1 day | Medium | New bug, no fix in progress. Apple Container detection gap. | [Issue #1185](https://github.com/moltis-org/moltis/issues/1185) |
| #1096 (resolved) | 66 days | High | Fixed by PR #1105, but 66 days from report to resolution is a notable gap. | [Issue #1096](https://github.com/moltis-org/moltis/issues/1096) |

**Recommendation:** Issue #1185 should be triaged promptly to prevent Apple Container users from feeling underserved. The 66-day resolution time for #1096, while ultimately resolved, highlights that Docker-related bugs may sit before being picked up — a pattern worth monitoring.

---

*Digest generated from GitHub data via Moltis project analytics. All links are live to the respective GitHub issues and pull requests.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw (QwenPaw) Project Digest — 2026-08-09

## 1. Today's Overview

QwenPaw shows **high development velocity** with 50 PRs updated and 18 issues touched in the last 24 hours, signaling an active pre-release cycle around the `2.1.0b2` desktop build. The project is in a robust bug-fixing phase: three PRs merged/closed today directly address regressions introduced in recent betas (MCP timeouts, auto-title `KeyError`, and offscreen CSS animation CPU spikes). However, several critical stability issues — a SIGBUS crash on macOS SQLite, indefinite MCP session hangs, and Windows installer lock failures — remain open, suggesting the desktop release train still needs stabilization work before general availability. No new release was published today.

## 2. Releases

**None.** The latest tracked version is `v2.1.0-beta.2` (Desktop, Tauri). Beta-2 was recently shipped and is already accumulating bug reports, particularly around MCP session handling, desktop Whisper on macOS, and Windows installation file locks.

## 3. Project Progress

**Merged / Closed PRs today:**

| PR | Author | Summary |
|----|--------|---------|
| [#6836](https://github.com/agentscope-ai/QwenPaw/pull/6836) | mohitdebian | `fix(mcp)`: wire `read_timeout_seconds` into MCP SDK `ClientSession` — resolves indefinite hangs on stale MCP streams. |
| [#6835](https://github.com/agentscope-ai/QwenPaw/pull/6835) | mohitdebian | `fix(llm)`: resolve `KeyError: '__aiter__'` during auto-title generation for non-streaming/dict responses. |
| [#6834](https://github.com/agentscope-ai/QwenPaw/pull/6834) | mohitdebian | `fix(console)`: pause offscreen infinite CSS animations via `IntersectionObserver` — addresses ~20% idle CPU in Tauri build. |
| [#6827](https://github.com/agentscope-ai/QwenPaw/pull/6827) | gy23rm | `enhancement`: optional cleanup of agent-created temp files when deleting a chat (closed as accepted feature request). |
| [#6833](https://github.com/agentscope-ai/QwenPaw/pull/6833) | mohitdebian | `fix(approvals)`: pass `channel_meta` and `_channel_instance` in driver gate so approval notifications route to the correct channel. |
| [#4558](https://github.com/agentscope-ai/QwenPaw/issue/4558) | BLUE0818 | `bug` (closed): high CPU during long text output — suspected resolved alongside the animation PR. |

**Notable open PRs advancing features:**

- [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) — Model fallback with cooldown mechanism (addresses rate-limit / timeout failover; fixes #2199, #1327, #2089).
- [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) — OpenAI Responses prompt caching support for GPT-5.6+.
- [#6586](https://github.com/agentscope-ai/QwenPaw/pull/6586) — Recover stale MCP server sessions after restart/expiry.
- [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817) — Integrate AnySearch as built-in web search (replaces Tavily), including MCP env-ref header fix.
- [#6526](https://github.com/agentscope-ai/QwenPaw/pull/6526) — NVIDIA NIM provider support.
- [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) — Structured run outcome in SSE responses for API automation.
- [#6830](https://github.com/agentscope-ai/QwenPaw/pull/6830) — Align memory compression and toolkit lifecycle (fixes context pollution and session-resume bugs in auto-memory).
- [#6799](https://github.com/agentscope-ai/QwenPaw/pull/6799) — Stop temp output file leakage and cap captured shell output on Windows.

## 4. Community Hot Topics

| Issue / PR | Type | Comments | Link |
|------------|------|----------|------|
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) — Plugin/App market always shows "under maintenance" in 2.0.1 Docker | Bug | 9 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6782) |
| [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) — OpenAI Responses continuation summary ignores `disable_thinking` | Bug | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6811) |
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) — Add Volcengine Agent Plan & Xiaomi MiMo Standard as built-in providers | Feature | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6490) |
| [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820) — Frontend UI doesn't stream output (shows everything at once) | Bug | 4 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6820) |
| [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) — SIGBUS crash on macOS when opening SQLite WAL history.db | Bug | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6814) |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) — Windows installer doesn't terminate file-locking processes before overwrite | Bug | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6810) |

**Analysis:** The highest-engagement topics cluster around three pain points: (1) **provider compatibility** (Volcengine, Xiaomi MiMo, NVIDIA NIM, StepFun sanitization) — users are expanding beyond the default OpenAI-compatible stack and hitting edge cases; (2) **desktop stability** (SIGBUS, Windows installer, Whisper ffmpeg PATH) — the Tauri build is still maturing; (3) **MCP/session reliability** — stale sessions and broken reconnect logic are a recurring theme, with both an open issue (#6822) and multiple fix PRs (#6586, #6825, #6836) in flight.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 Critical | [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | SIGBUS (`FS pagein 22`) crash in `sqlite3WalFindFrame` when opening Scroll history.db on macOS | — |
| 🔴 Critical | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows NSIS installer fails with multiple "cannot open file" errors due to locked processes (browser extension NM host) | — |
| 🟠 High | [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) | Transient `streamable_http` MCP failure permanently blocks conversation after auto-reconnect | [#6825](https://github.com/agentscope-ai/QwenPaw/pull/6825), [#6836](https://github.com/agentscope-ai/QwenPaw/pull/6836), [#6586](https://github.com/agentscope-ai/QwenPaw/pull/6586) |
| 🟠 High | [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | ~20% idle CPU from infinite CSS animations in Console Tauri build | [#6834](https://github.com/agentscope-ai/QwenPaw/pull/6834) ✅ closed |
| 🟠 High | [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | `disable_thinking` ignored in OpenAI Responses continuation summary; 60s cancellation misreported as malformed | — |
| 🟡 Medium | [#6831](https://github.com/agentscope-ai/QwenPaw/issues/6831) | Local Whisper shows "ffmpeg: disabled" on macOS because `/opt/homebrew/bin` is absent from backend PATH | — |
| 🟡 Medium | [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820) | Frontend renders tool calls / thinking / model output only after full completion (no streaming) | — |
| 🟡 Medium | [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | `KeyError: '__aiter__'` in auto-title generation for dict-style ChatResponse | [#6835](https://github.com/agentscope-ai/QwenPaw/pull/6835) ✅ closed |
| 🟡 Medium | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) | Plugin/App market always reports "under maintenance" in Docker 2.0.1 | — |
| 🟡 Medium | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Google/Gemini provider rejects tool schemas containing `$schema` field | — |
| 🟡 Medium | [#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821) | `reasoning_content` relay fails for thinking-mode models (DeepSeek V4) → 400 BadRequestError | — |
| 🟡 Medium | [#6819](https://github.com/agentscope-ai/QwenPaw/issues/6819) | Channel tool does not prompt for approval when required | [#6833](https://github.com/agentscope-ai/QwenPaw/pull/6833) ✅ closed |
| 🟢 Low | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | Assistant message end time displays incorrectly in conversation | — |

## 6. Feature Requests & Roadmap Signals

| Issue / PR | Description | Likelihood for Next Version |
|------------|-------------|----------------------------|
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | Add Volcengine Agent Plan & Xiaomi MiMo Standard as built-in providers | **High** — clearly scoped, positive maintainer engagement (5 comments) |
| [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | Show AI-generated description on approval requests (instead of raw PowerShell code) | **High** — direct UX improvement, low risk |
| [#6827](https://github.com/agentscope-ai/QwenPaw/issues/6827) | Optional cleanup of temp files when deleting a chat | **High** — already closed as accepted; straightforward to implement |
| [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817) | Replace Tavily with AnySearch as built-in web search provider | **Medium-High** — PR is open, includes MCP header fix as prerequisite |
| [#6526](https://github.com/agentscope-ai/QwenPaw/pull/6526) | NVIDIA NIM provider support | **Medium** — first-time contributor PR, already tested |
| [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) | Structured run outcome in SSE for API automation | **Medium** — addresses a real integration gap for non-web consumers |
| [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | OpenAI Responses prompt caching (GPT-5.6+) | **Medium** — opt-in, provider-specific, low risk |
| [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) | Model fallback with cooldown mechanism | **High** — fixes three long-standing issues (#2199, #1327, #2089); under review |

**Prediction:** The next release (`2.1.0-rc1` or `2.1.0`) will likely include the model fallback mechanism, MCP session recovery fixes, AnySearch integration, and the approval-description enhancement. Provider expansions (Volcengine, MiMo, NIM) may ship as follow-up patches given their PR-review cadence.

## 7. User Feedback Summary

**Pain points:**
- **Desktop build instability on macOS/Windows** is the dominant theme: SIGBUS crashes (#6814), file-lock failures during install (#6810), Whisper/ffmpeg PATH resolution (#6831), and idle CPU spikes from CSS animations (#6828) all point to Tauri packaging gaps on Apple Silicon and Windows.
- **MCP reliability** remains a concern. Transient network failures can permanently block conversations (#6822), and stale session recovery is only partially addressed.
- **Streaming / real-time feedback** is broken in some configurations (#6820 — output appears only after completion; #6811 — thinking disabled flag ignored in continuation summaries).
- **Provider compatibility friction**: Google/Gemini rejects `$schema` in tool definitions (#6812); DeepSeek V4 reasoning content relay fails (#6821); StepFun-like strict providers need content sanitization (#6809 in PR).
- **Plugin/App marketplace** in Docker 2.0.1 is non-functional (#6782), blocking users who rely on the extension ecosystem.

**Positive signals:**
- Users appreciate the rapid bug-fix turnaround — three critical issues had PRs merged the same day they were reported.
- The community is actively contributing: first-time contributors are submitting provider integrations (NIM, AnySearch) and robustness fixes (corrupted config handling #6615, relative path resolution #6528).
- API-automation users value the structured SSE outcome work (#5930).

## 8. Backlog Watch

| Issue / PR | Age | Why It Needs Attention |
|------------|-----|----------------------|
| [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) — Plugin/App market "under maintenance" in Docker 2.0.1 | ~2 weeks, 9 comments | Blocks a significant user segment running in containerized deployments; no fix PR yet. |
| [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) — SIGBUS crash on macOS SQLite WAL | 1 day, 3 comments | Crash-on-start for Scroll history on macOS; no fix PR. High-severity stability gap. |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) — Windows installer file-lock failure | 2 days, 3 comments | Prevents clean installation/upgrade; no fix PR. Affects all Windows users with browser extensions locking files. |
| [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) — `disable_thinking` ignored in OpenAI Responses summary | 2 days, 5 comments | Causes unexpected token cost and latency for reasoning-model users; no fix PR. |
| [#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821) — `reasoning_content` relay fails for DeepSeek V4 | 1 day, 2 comments | Breaks multi-turn thinking-mode usage; no fix PR. |
| [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) — Handle corrupted agent config / invalid JSON | ~9 days, open | First-time contributor PR; prevents startup crashes on config corruption. Needs maintainer review. |
| [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) — Fix relative paths in agent.json | ~12 days, open | Same author, related to config robustness. Stalled in review. |
| [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) — Model fallback with cooldown | ~6 days, "Under Review" | High-impact reliability feature; should be prioritized for merge before 2.1.0 release. |

---

**Overall Project Health: 🟡 Caution.** Development velocity is strong (50 PRs/day), and the team is responding quickly to bugs (3 merged same-day). However, the critical backlog of desktop-environment crashes (macOS SIGBUS, Windows installer) and MCP session reliability gaps suggest the `2.1.0` release candidate still

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-09

## 1. Today's Overview
ZeroClaw is operating at high velocity with **50 issue and 50 pull request updates** in the last 24 hours. Development is currently concentrated on runtime reliability, security policy hardening, and channel consistency. Two issues were closed and two PRs merged today, while no new releases were published. The project is in a active stabilization phase, with maintainer attention heavily focused on correcting security-evaluation logic and completing the SOP (Standard Operating Procedure) headless execution path.

## 2. Releases
None today.

## 3. Project Progress
- **Merged/Closed Today:** PR [#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494) landed the core fix for cron-triggered headless SOP runs, and [#9798](https://github.com/zeroclaw-labs/zeroclaw/pull/9798) closed supplementary SOP documentation.
- **In Flight:** PR [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) continues the SOP headless driver, addressing five blocking defects found during review. PR [#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828) introduces validated, operator-approved agent config authoring. Infrastructure consolidation continues with PR [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) (network guard refactor), PR [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) (WATI channel removal), and PR [#9853](https://github.com/zeroclaw-labs/zeroclaw/pull/9853) (crate retirement).

## 4. Community Hot Topics
- **[RFC] Workspace-relative forbidden paths** [#842

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*