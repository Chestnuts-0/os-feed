# OpenClaw Ecosystem Digest 2026-08-11

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-11 00:56 UTC

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



# OpenClaw Project Digest — 2026-08-11

## 1. Today's Overview

OpenClaw saw high activity on 2026-08-11 with **500 issues** and **500 PRs** updated in the last 24 hours. The project has **no new releases** since the previous reporting period. Of the 500 issues, 407 remain open while 93 were closed — a ~19% close rate, indicating a healthy volume of issue resolution alongside sustained discovery. PR activity mirrors this with 348 open and 152 merged/closed, suggesting strong maintainer responsiveness. Several critical regressions and session-state bugs remain active without confirmed fixes, which is the primary concern for stability.

## 2. Releases

No new releases were published on 2026-08-11.

## 3. Project Progress

### Notable Merged/Closed Items
- **#114690** [CLOSED] — Discord source reply duplicate after native Codex compaction ([openclaw/openclaw#114690](https://github.com/openclaw/openclaw/issues/114690))
- **#96242** [CLOSED] — Multiple independent paths causing duplicate Telegram messages ([openclaw/openclaw#96242](https://github.com/openclaw/openclaw/issues/96242))
- **#116116** [CLOSED] — Model registry `catalog.json` schema violation and unguarded cost deref crashes ([openclaw/openclaw#116116](https://github.com/openclaw/openclaw/issues/116116))

### PRs Actively Advancing
- **#121369** — Fix LongCat cache pricing and add provider icon (waiting on author)
- **#121599** — Centralize provider diagnostic redaction for security (waiting on author)
- **#121579** — Acknowledge rejected/refused mutating tool outcomes in Discord (needs proof)
- **#121671** — Fix cloud workers with trusted-proxy browser auth (waiting on author)
- **#120398** — Detach service-managed tool children on Linux to prevent zombie accumulation
- **#121601** — Open terminals no longer delay gateway updates (ready for maintainer look)
- **#112932** — Re-seed only tombstoned OAuth target from fresh Codex login (needs proof)
- **#121647** — Fix durable context engine stalls in long sessions (needs proof)
- **#121509** — Fix heartbeats losing conversation context on claude-cli transitions (ready for maintainer look)
- **#119001** — Bind native realtime voice to existing Codex sessions (needs proof)
- **#121586** — Zero-click Chrome extension bootstrap (ready for maintainer look)
- **#121715** — Migrate internal agent turn callers to typed facade (waiting on author)
- **#121764** — Add prepared cancellable OAuth refresh hooks to plugin SDK (waiting on author)
- **#93952** — Bound auth refresh without releasing token ownership (waiting on author)

## 4. Community Hot Topics

| Issue | Title | Comments | 👍 | Link |
|---|---|---|---|---|
| #121058 | Silent reply failures recurring after #116277 closed | 47 | 0 | [Issue](https://github.com/openclaw/openclaw/issues/121058) |
| #7707 | Memory Trust Tagging by Source | 33 | 0 | [Issue](https://github.com/openclaw/openclaw/issues/7707) |
| #22438 | Tiered bootstrap file loading for progressive context control | 18 | 0 | [Issue](https://github.com/openclaw/openclaw/issues/22438) |
| #86519 | Agent repeats identical replies 2-10x on Telegram (closed) | 15 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/86519) |
| #42475 | Per-agent cost budget enforcement at gateway level | 14 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/42475) |
| #115908 | Session transcript projection livelock under sustained writes | 13 | 0 | [Issue](https://github.com/openclaw/openclaw/issues/115908) |
| #40001 | Write tool lacks append mode — cron sessions destroy shared files | 12 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/40001) |
| #27445 | `announceTarget` option for sub-agent completion routing | 12 | 5 | [Issue](https://github.com/openclaw/openclaw/issues/27445) |

**Analysis:** The silent reply failure recurrence (#121058) is the most discussed open issue, signaling that a prior fix was insufficient — a pattern that erodes user trust. Memory trust tagging (#7707) and tiered bootstrap loading (#22438) both reflect growing operator maturity: users are running multi-agent, long-context deployments and need finer-grained control over security boundaries and context budget. Sub-agent orchestration (#27445) has the strongest 👍 count (5), indicating high community demand for composable agent workflows.

## 5. Bugs & Stability

### P1 Bugs (Critical/High Severity)

| Issue | Summary | Status | Fix PR? | Link |
|---|---|---|---|---|
| #115908 | Transcript projection livelock blocks main thread, stalling all channels | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/115908) |
| #40001 | Write tool no append mode — cron sessions silently overwrite shared files | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/40001) |
| #97983 | iOS/WebChat messages append but don't trigger assistant replies | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/97983) |
| #92516 | Containerized deploys can't use externalized channel plugins (trust gating) | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/92516) |
| #97616 | Child process leak causing zombie accumulation and runtime degradation | Open | #120398 (partial Linux fix) | [Issue](https://github.com/openclaw/openclaw/issues/97616) |
| #119087 | Gateway cold start regressed ~2.5x between beta.1 and beta.7 | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/119087) |
| #89278 | Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout | Open | #121764, #93952 (in progress) | [Issue](https://github.com/openclaw/openclaw/issues/89278) |
| #83598 | anthropic:claude-cli OAuth refresh dead-ends main lane | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/83598) |
| #111010 | Detached Codex subagents lose hook relay when parent turn releases | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/111010) |
| #113181 | Cron `delivery.mode="none"` + isolated agent → silent no-op | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/113181) |
| #100941 | Gateway drops concurrent WebSocket connections under parallel tool fan-out | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/100941) |
| #118793 | Claude CLI session limit error dies instead of triggering model fallback | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/118793) |
| #114020 | Feishu/Telegram dispatch requires `runDispatchLifecycle` — breaks after 2026.7.2-beta.4 | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/114020) |
| #121485 / #121509 | Heartbeats lose all conversation context on claude-cli transitions | Open | #121509 (ready for review) | [Issue](https://github.com/openclaw/openclaw/issues/121509) |

### P2 Bugs

| Issue | Summary | Status | Fix PR? | Link |
|---|---|---|---|---|
| #121058 | Silent reply failures recur after #116277 closure | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/121058) |
| #45494 | Cron jobs silently timeout during sustained LLM API outages | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/45494) |
| #47975 | Subagent sessions persist after completion, main session unresponsive | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/47975) |
| #82662 | Isolated cron `agentTurn` fails with setup timeout | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/82662) |
| #114154 | bundle-mcp tool passes policy but never appears in ToolSearch | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/114154) |
| #119796 | Windows vitest teardown EBUSY on agent state DB handle | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/119796) |
| #94919 | Z.AI ECONNRESET triggers fallback but notice invisible in async contexts | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/94919) |
| #119401 | `NO_REPLY` suppression is unconditional, ignores `silentReply` policy | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/119401) |
| #40919 | Session memory sync full delete-reinsert pattern causes perf regression | Open | — | [Issue](https://github.com/openclaw/openclaw/issues/40919) |

**Stability Assessment:** The project is under significant pressure from session-state and auth-provider bugs. Several P1 issues lack any associated fix PRs. The OAuth/auth refresh cluster (#89278, #83598, #98702, #118793) is a recurring pain point. The gateway cold-start regression (#119087) and WebSocket drop issue (#100941) suggest scaling limits under concurrent load.

## 6. Feature Requests & Roadmap Signals

| Issue | Summary | Comments | 👍 | Link |
|---|---|---|---|---|
| #7707 | Memory Trust Tagging by Source | 33 | 0 | [Issue](https://github.com/openclaw/openclaw/issues/7707) |
| #42475 | Per-agent cost budget enforcement at gateway level | 14 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/42475) |
| #27445 | `announceTarget` for sub-agent completion routing | 12 | 5 | [Issue](https://github.com/openclaw/openclaw/issues/27445) |
| #15032 | Per-spawn tool restrictions for sub-agents | 7 | 0 | [Issue](https://github.com/openclaw/openclaw/issues/15032) |
| #22438 | Tiered bootstrap file loading for progressive context control | 18 | 0 | [Issue](https://github.com/openclaw/openclaw/issues/22438) |
| #33413 | Slack tool-level progress in assistant thread status | 8 | 3 | [Issue](https://github.com/openclaw/openclaw/issues/33413) |
| #38568 | Inject context window % into system prompt | 6 | 2 | [Issue](https://github.com/openclaw/openclaw/issues/38568) |
| #28300 | Theme Customization System — Preset Themes + Custom Studio | 6 | 5 | [Issue](https://github.com/openclaw/openclaw/issues/28300) |
| #45565 | Route gateway lifecycle warnings to dedicated channel | 7 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/45565) |
| #39406 | Suppress transient tool error warnings | 7 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/39406) |
| #9986 | Trigger model fallback on context length exceeded | 5 | 0 | [Issue](https://github.com/openclaw/openclaw/issues/9986) |
| #26037 | Ali Bailian coding plan support (thinking/reasoning enabled) | 5 | 4 | [Issue](https://github.com/openclaw/openclaw/issues/26037) |

**Roadmap Prediction:** Sub-agent isolation and orchestration (#27445, #15032) form a coherent theme — users are building multi-agent pipelines and need boundaries. Cost control (#42475) and memory trust (#7707) reflect operational maturity. Context window visibility (#38568) and fallback-on-context-exceeded (#9986) suggest the team should prioritize context-aware routing. The theme customization system (#28300) with 5 👍 is a strong UX signal.

## 7. User Feedback Summary

**Pain Points:**
- **Silent failures** are the dominant complaint: silent reply failures (#121058), cron silent no-ops (#113181), and `NO_REPLY` unconditionally stripped (#119401) all point to a trust gap — users cannot tell when the agent is working vs. broken.
- **Auth fragility**: Multiple OAuth refresh failures across providers (Codex #89278, Anthropic #83598, OpenAI #98702) create unreliable gateways, especially in cron and heartbeat contexts.
- **Session state corruption**: Subagent persistence (#47975), transcript livelock (#115908), and context loss on claude-cli transitions (#121509) indicate the session management layer is a pressure point.
- **Duplicate messages** on Telegram (#86519, #96242) and Feishu (#49381) erode user confidence in reliability.

**Positive Signals:**
- The `announceTarget` sub-agent feature (#27445) has strong engagement (5 👍).
- Theme customization (#28300) and context window % injection (#38568) show users value observability and personalization.
- Several fix PRs are in active review (#121509, #121601, #114183, #121586), indicating the team is responsive.

## 8. Backlog Watch

These important issues have been open for extended periods without confirmed fix PRs and require maintainer attention:

| Issue | Open Since | Comments | Severity | Link |
|---|---|---|---|---|
| #7707 | 2026-02-03 | 33 | P2 / security | [Issue](https://github.com/openclaw/openclaw/issues/7707) |
| #22438 | 2026-02-21 | 18 | P2 | [Issue](https://github.com/openclaw/openclaw/issues/22438) |
| #42475 | 2026-03-10 | 14 | P2 | [Issue](https://github.com/openclaw/openclaw/issues/42475) |
| #115908 | 2026-07-29 | 13 | P1 | [Issue](https://github.com/openclaw/openclaw/issues/115908) |
| #40001 | 2

---

## Cross-Ecosystem Comparison



# Cross-Project Ecosystem Comparison Report — 2026-08-11

## 1. Ecosystem Overview

The personal AI agent open-source landscape in August 2026 is characterized by rapid iteration and increasing operational maturity. Projects are moving beyond single-agent prototypes toward multi-agent orchestration, production-grade deployment patterns, and deeper MCP ecosystem integration. Security hardening and session-state reliability have emerged as the dominant community concerns across all active projects, while provider fragmentation and silent-failure patterns represent the most persistent pain points. The ecosystem is consolidating around two axes: gateway-centric architectures (OpenClaw, ZeroClaw, LobsterAI) versus desktop-first experiences (CoPaw, NanoBot, Hermes Agent).

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Merged/Closed PRs | Releases | Open Issues | Health Score* |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 152 | None | 407 | 6.5/10 |
| **CoPaw** | 40 | 50 | 6 | None (v2.1.0 imminent) | 34 | 8.0/10 |
| **Hermes Agent** | ~100 | — | 7 | v0.20.0 (ongoing) | ~30 | 7.5/10 |
| **ZeroClaw** | 50 | 50 | 1 | None | 49 | 5.5/10 |
| **NanoBot** | 4 | 23 | 10 | None | 1 | 8.5/10 |
| **IronClaw** | 50 | 50 | 2+ | v1.1.1-rc.1 | 26 | 7.5/10 |
| **NanoClaw** | 3 | 20 | 10 | None | 3 | 8.0/10 |
| **LobsterAI** | 1 | 34 | 20 | None | 0 | 7.0/10 |
| **PicoClaw** | 4 | 9 | 7 | None | 2 | 7.5/10 |
| **NullClaw** | 1 | 1 | 1 | None | 0 | 7.0/10 |
| **Moltis** | 3 | 1 | 0 | None | 3 | 5.0/10 |
| **TinyClaw** | 0 | 0 | 0 | None | — | 3.0/10 |
| **ZeptoClaw** | 0 | 0 | 0 | None | — | 3.0/10 |

*Health Score factors: issue close rate, PR merge velocity, release cadence, and maintainer responsiveness.

## 3. OpenClaw's Position

**Advantages vs. peers:** OpenClaw is the largest project by absolute activity (500 issues/PRs updated in 24h), with the deepest provider coverage (Codex, Anthropic Claude CLI, OpenAI, Feishu, Telegram, Discord, iMessage, Slack) and the most mature multi-channel dispatch system. Its session-state architecture, while under pressure, represents the most complex operational footprint in the ecosystem.

**Technical approach differences:** Unlike NanoBot and CoPaw, which emphasize desktop-native experiences, OpenClaw is gateway-first with an extensible plugin model. It diverges from ZeroClaw in embracing a broader range of LLM providers rather than focusing on Wasm plugin security. OpenClaw's multi-agent orchestration (Codex sub-agents, Cron, heartbeats) is more production-focused than the single-agent defaults of PicoClaw or NullClaw.

**Community size comparison:** OpenClaw's issue volume (407 open) and PR throughput dwarf NanoClaw (3 open), NullClaw (0), and ZeptoClaw (0). CoPaw and ZeroClaw sit in a middle tier with 34–49 open issues. The 19% issue close rate is moderate — NanoClaw and CoPaw show significantly better resolution ratios.

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Silent failure / observability** | OpenClaw, NanoClaw, CoPaw, IronClaw, ZeroClaw | Agents that appear to ignore users; cron jobs that silently drop output; `NO_REPLY` suppression inconsistencies |
| **Auth & OAuth fragility** | OpenClaw, NanoBot, CoPaw, ZeroClaw | Codex/OAuth refresh failures in cron & heartbeat contexts; unauthenticated mutations in WebUI |
| **Session-state reliability** | OpenClaw, NanoBot, Hermes Agent, CoPaw | Transcript livelock, subagent persistence, context loss on CLI transitions, SIGBUS on SQLite WAL |
| **MCP ecosystem expansion** | NanoBot, NanoClaw, CoPaw, ZeroClaw, IronClaw | Browser OAuth for XMind/Notion/Linear, remote Streamable HTTP MCP servers, structured token-usage APIs |
| **Multi-agent orchestration** | OpenClaw, CoPaw, NullClaw, ZeroClaw | Sub-agent completion routing (`announceTarget`), client-side A2A tools, per-agent memory isolation, tool restrictions |
| **Cost control & token visibility** | OpenClaw, NanoBot, CoPaw, ZeroClaw | Per-agent cost budgets, context window % injection, structured usage records, model fallback on context exceeded |
| **Channel-specific UX** | OpenClaw, NanoClaw, CoPaw, IronClaw, PicoClaw | Rich Telegram messages, Slack working indicators, Feishu card footers, WebChat streaming display |
| **Production deployment** | NanoClaw, IronClaw, Hermes Agent, Moltis | systemd units, profile-agnostic storage, graceful shutdown, Docker health checks |

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | CoPaw | Hermes Agent | ZeroClaw | IronClaw | NanoClaw | PicoClaw | NullClaw |
|---|---|---|---|---|---|---|---|---|---|
| **Primary model** | Gateway + multi-channel dispatch | Desktop + MCP-native | Desktop-first (Tauri) | Multi-backend (CLI/Desktop/Gateway) | Gateway + Wasm plugins | Gateway + Reborn runtime | Gateway + skill plugins | Lightweight gateway | Minimalist A2A agent |
| **Target users** | Power users, operators | MCP developers, cost-conscious | Chinese-market users, desktop users | Multi-platform server operators | Security-focused operators | Enterprise/on-prem | Container/WSL deployers | Hobbyists | A2A protocol researchers |
| **Architecture** | Plugin SDK, Codex integration | MCP v2 SDK, WebUI | ReMe memory, Console UX | God-file decomposition, multi-backend | Wasm isolation, governance RFCs | Reborn crate, durable state | Host seams, migration registry | Schema v4 config, i18n | Server-side A2A + client tools |
| **Key differentiator** | Deepest provider/channel coverage | MCP OAuth for remote servers | ReMe memory + Chinese UX | Multi-backend lifecycle management | Security audit rigor + RFC governance | Enterprise-grade RC releases | Remote HTTP MCP + privacy logs | Security hardening + i18n | A2A protocol specialization |

## 6. Community Momentum & Maturity

**Tier 1 — High-velocity, large community (500+ items/24h):**
- **OpenClaw**: Largest but shows signs of strain — 407 open issues, several P1 bugs without fix PRs, recurring silent-failure patterns. Active but under pressure.

**Tier 2 — Fast iteration, focused community (40–100 items/24h):**
- **CoPaw**: Pre-release stabilization for v2.1.0; high PR throughput with good resolution ratio. Chinese-market focus with strong community engagement.
- **Hermes Agent**: Active god-file decomposition; responsive to desktop/Windows issues. Moderate open backlog.
- **ZeroClaw**: High activity volume but 49 open PRs with only 1 merged suggests review bottlenecks. Security audit driving engagement.
- **IronClaw**: RC cycle with active development; 26 open issues is manageable. Enterprise-grade stability focus.

**Tier 3 — Active but smaller (10–30 items/24h):**
- **NanoBot**: Excellent velocity — 10 PRs merged in 24h, only 1 open issue. Strong fix-to-report ratio.
- **NanoClaw**: High PR throughput (10 merged), clean backlog. Rapid issue-to-PR turnaround.
- **LobsterAI**: 20 PRs merged, 0 open issues. Quiet but productive.

**Tier 4 — Low/no recent activity:**
- **PicoClaw**: Moderate; 7 PRs merged but 2 high-severity open bugs.
- **NullClaw**: Minimal; single A2A feature added.
- **Moltis**: 3 open bugs on Apple Container backend with no fixes; 4-month-stalled PR.
- **TinyClaw / ZeptoClaw**: No activity in 24h.

## 7. Trend Signals

**1. Silent failures are the ecosystem's #1 trust problem.** At least five projects (OpenClaw, NanoClaw, CoPaw, ZeroClaw, IronClaw) report the same class of bug: the agent appears to ignore the user or tasks fail invisibly. Operators need explicit failure signaling — not just recovery, but visibility.

**2. MCP is becoming table-stakes, but OAuth is the bottleneck.** NanoBot's merged browser OAuth PR (#5316) and NanoClaw's remote HTTP MCP work (#3092) show the direction. Users expect one-click provider presets (XMind, Notion, Linear) — projects without this roadmap risk falling behind.

**3. Multi-agent orchestration is moving from feature to requirement.** OpenClaw's `announceTarget` (#27445, 5 👍), CoPaw's creator plugin aggregation, and NullClaw's A2A client tools all signal that composable agent pipelines are the next battleground. Per-agent memory isolation (#9647 in ZeroClaw) is an unsolved security prerequisite.

**4. Cost control and token observability are maturing demands.** Per-agent budgets (OpenClaw #42475), structured usage records (NanoBot #5299), and context-window injection (OpenClaw #38568, ZeroClaw #7100) show users are running production workloads and need FinOps-grade visibility.

**5. Desktop vs. gateway architectures are diverging.** CoPaw and NanoBot invest in desktop UX (Tauri, Console); OpenClaw and ZeroClaw invest in gateway resilience. This split suggests the ecosystem is segmenting between personal-desktop users and server/operators.

**6. Security audits are becoming a standard maturity signal.** ZeroClaw's comprehensive audit is producing the most actionable findings in the ecosystem. Projects without audit coverage (PicoClaw, TinyClaw) risk falling behind on trust signals for enterprise adoption.

**7. Provider compatibility fragmentation is increasing.** Strict schema validation rejections (CoPaw/StepFun #6803, Gemini `thought_signature` #6867), codex CLI extra_args warnings (ZeroClaw #5842), and per-model capability config (ZeroClaw #7100) indicate the LLM provider landscape is fragmenting — agents need increasingly adaptive protocol layers.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-11

## 1. Today's Overview

NanoBot saw **high development activity** on 2026-08-11, with 23 PRs and 4 issues updated in the last 24 hours. Three of four issues were closed, and ten PRs were merged or closed — a strong signal of active maintenance velocity. The day's work concentrated on **MCP OAuth support**, **WebUI security hardening**, and **critical bug fixes** around memory consolidation loops and session state races. No new release was published, suggesting the team is still integrating today's changes before a cutoff.

---

## 2. Releases

No new releases were published on this date.

---

## 3. Project Progress

**Merged / Closed PRs today (8 shown; 2 additional closed PRs not detailed in top-20 by comments):**

| PR | Status | Summary |
|----|--------|---------|
| [#5316](https://github.com/HKUDS/nanobot/pull/5316) | ✅ Closed | **feat(mcp): browser OAuth for remote servers** — one-click presets for XMind, Notion, Linear; custom HTTP/SSE OAuth support |
| [#5325](https://github.com/HKUDS/nanobot/pull/5325) | ✅ Closed | **fix(files): reject no-op edits** — prevents infinite loops in Dream memory consolidation |
| [#5321](https://github.com/HKUDS/nanobot/pull/5321) | ✅ Closed | **refactor(webui): gateway-owned settings services** — atomic read-modify-write, OAuth state in gateway scope |
| [#5319](https://github.com/HKUDS/nanobot/pull/5319) | ✅ Closed | **refactor(agent): replace reflective runtime state access** — explicit `RuntimeControl` protocol, credential redaction |
| [#5318](https://github.com/HKUDS/nanobot/pull/5318) | ✅ Closed | **refactor(webui): deterministic event projection helpers** — extract folds from `useNanobotStream` into `thread-event-projection.ts` |
| [#5317](https://github.com/HKUDS/nanobot/pull/5317) | ✅ Closed | **fix(webui): move mutations to authenticated WebSocket** — eliminates unauthenticated state changes via GET/query-string |
| [#5315](https://github.com/HKUDS/nanobot/pull/5315) | ✅ Closed | **fix(webui): UX recovery and empty states** — preserved prompt on failed workspace creation, streamlined auth challenge |
| [#5310](https://github.com/HKUDS/nanobot/pull/5310) | ✅ Closed | **fix(weixin): honor forced QR login** — fresh QR flow across CLI and WebUI, rejecting stale `binded_redirect` |

**Key themes:** Security hardening of the WebUI, robustness of the agent loop, and MCP ecosystem expansion.

---

## 4. Community Hot Topics

| Item | Type | Activity | Link |
|------|------|----------|------|
| **#5324** — Dream memory consolidation infinite loop | Issue | 🔴 Critical — 10M tokens burned in 23 min; closed via #5325 | [Issue](https://github.com/HKUDS/nanobot/issues/5297) |
| **#5300** — MCP connection crash + anyio cancel scope | Issue | 🔴 Critical — CPU spike, process hang on remote MCP failure; relates to #5179 | [Issue](https://github.com/HKUDS/nanobot/issues/5300) |
| **#5297** — MCP OAuth web authorization | Issue | 🟡 Feature request — users need OAuth for XMind, Notion, Linear; addressed by #5316 | [Issue](https://github.com/HKUDS/nanobot/issues/5297) |
| **#5179** — MCP SDK v2 migration | PR | 🟡 P1, conflict — migrating from v1 `ClientSession` to v2 `Client`; long-open since Jul 30 | [PR](https://github.com/HKUDS/nanobot/pull/5179) |
| **#5327** — Message repetition during reasoning | Issue | 🟡 Open — agent randomly repeats phrases like "Good points, let me investigate"; no fix yet | [Issue](https://github.com/HKUDS/nanobot/issues/5327) |

**Analysis:** The community is actively pushing for **broader MCP integrations** (OAuth, remote servers) and **reliability under failure conditions**. The Dream-loop bug (#5324) and MCP crash (#5300) both indicate that token-cost失控 and crash-resilience are top user concerns.

---

## 5. Bugs & Stability

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| 🔴 Critical | [#5324](https://github.com/HKUDS/nanobot/issues/5324) — Dream memory consolidation infinite loop on no-op `edit_file` calls; 10M+ tokens consumed | ✅ Closed | [#5325](https://github.com/HKUDS/nanobot/pull/5325) — rejects identical `old_text`/`new_text` edits |
| 🔴 Critical | [#5300](https://github.com/HKUDS/nanobot/issues/5300) — MCP connection failure triggers `RuntimeError` in anyio cancel scope, crashes gateway, leaks tasks, spikes CPU | ✅ Closed | No direct fix merged yet; depends on [#5179](https://github.com/HKUDS/nanobot/pull/5179) (MCP SDK v2 migration) |
| 🟡 Medium | [#5327](https://github.com/HKUDS/nanobot/issues/5327) — Agent repeats the same reasoning message multiple times randomly | 🔄 Open | No fix PR identified |
| 🟡 Medium | [#5257](https://github.com/HKUDS/nanobot/pull/5257) — Sustained-goal continuation unbounded when turn goes idle; burns tokens on rephrasing | 🔄 Open | [PR](https://github.com/HKUDS/nanobot/pull/5257) — bound continuation cycles |

**Stability assessment:** Two critical bugs were resolved today, notably the token-burning Dream loop. However, the MCP crash (#5300) lacks a merged fix and the agent repetition bug (#5327) remains open — both warrant close monitoring.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Status | Link |
|---------|--------|--------|------|
| **MCP browser OAuth for remote servers** | #5297 → #5316 | ✅ Merged | [PR](https://github.com/HKUDS/nanobot/pull/5316) |
| **OrcaRouter as named gateway provider** (150+ models, single API key) | #5328 | 🔄 Open | [PR](https://github.com/HKUDS/nanobot/pull/5328) |
| **Structured token-usage records API** (last 50 records, per-day endpoint) | #5299 | 🔄 Open | [PR](https://github.com/HKUDS/nanobot/pull/5299) |
| **Tabbed pane workbench** (multi-pane sessions per topic, layout modes) | #5322 | 🔄 Open | [PR](https://github.com/HKUDS/nanobot/pull/5322) |
| **Agent Plugins with CLI Apps** (vendor-neutral skill boundary) | #5288 | 🔄 Open | [PR](https://github.com/HKUDS/nanobot/pull/5288) |
| **MCP SDK v2 migration** (v1→v2, `httpx2` transport, legacy SSE compat) | #5179 | 🔄 Open, P1, conflict | [PR](https://github.com/HKUDS/nanobot/pull/5179) |

**Prediction:** The next release will likely include **MCP OAuth**, **structured token usage API**, and **tabbed workbench** features. The MCP SDK v2 migration (#5179) and goal-continuation bounds (#5257) are strong candidates for stabilization before a release.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Token-cost失控** | #5324: Dream consolidation burned 10M tokens (~half a month's usage) in 23 minutes | ⚠️ Dissatisfied — critical reliability gap |
| **MCP OAuth demand** | #5297: Users need OAuth for XMind, Notion, Linear; currently impossible to configure | 🟡 Frustrated but satisfied by #5316 merge |
| **MCP crash resilience** | #5300: Remote MCP HTTP 530 errors crash the gateway and spike CPU | ⚠️ Dissatisfied — stability gap with external tools |
| **WebUI security** | #5317: Mutations previously exposed via unauthenticated GET/query-string | ✅ Satisfied — hardening merged |
| **Weixin login** | #5310: Forced QR login not honored; stale credentials restored | ✅ Satisfied — fix merged |
| **Agent repetition** | #5327: Random message duplication during reasoning | ⚠️ Dissatisfied — no fix yet |

**Overall:** Users are highly engaged with MCP ecosystem expansion and cost-control. Critical bugs around token waste and crash resilience are top pain points; fixes for WebUI security and Weixin login are well-received.

---

## 8. Backlog Watch

| Item | Type | Priority | Days Open | Link | Risk |
|------|------|----------|-----------|------|------|
| #5327 — Agent message repetition | Bug | 🟡 | ~1 | [Issue](https://github.com/HKUDS/nanobot/issues/5327) | Low-moderate; intermittent UX bug |
| #5179 — MCP SDK v2 migration | PR | 🔴 P1 | 12 | [PR](https://github.com/HKUDS/nanobot/pull/5179) | **High** — blocks #5300 fix; has merge conflicts |
| #5257 — Sustained-goal unbounded continuation | PR | 🟡 P2 | 6 | [PR](https://github.com/HKUDS/nanobot/pull/5257) | Moderate — token-cost risk |
| #5328 — OrcaRouter provider | PR | 🟡 P2 | 1 | [PR](https://github.com/HKUDS/nanobot/pull/5328) | Low — new feature, no conflicts |
| #5288 — Agent Plugins with CLI Apps | PR | 🟡 P2 | 4 | [PR](https://github.com/HKUDS/nanobot/pull/5288) | Low — architectural improvement |
| #5299 — Structured token usage API | PR | 🟡 P2 | 3 | [PR](https://github.com/HKUDS/nanobot/pull/5299) | Low — diagnostic feature |

**Key risk:** [#5179](https://github.com/HKUDS/nanobot/pull/5179) has been open for 12 days with merge conflicts and is a prerequisite for resolving the MCP crash issue (#5300).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-11

## 1. Today's Overview

Hermes Agent is in a high-velocity development phase with 100 items (issues + PRs) touched in the past 24 hours, signaling sustained community and maintainer engagement despite zero new releases today. The dominant narrative is a repo-wide god-file decomposition initiative (epic #78647), with multiple shard PRs landed and more in review. Stability remains a concern: file descriptor leaks in `SessionDB`, orphaned backend processes on desktop, and Windows-specific React crashes are the most pressing quality signals. The project is actively shipping incremental fixes across desktop, gateway, and cron subsystems.

## 2. Releases

**No new releases today.** The latest tagged version remains v0.20.0 / v2026.8.3. Several closed PRs (notably #83397 on SQLite FD leaks and #83556 on Windows backend lifecycle) are candidates for the next patch release.

## 3. Project Progress

### Merged/Closed Today
- **#83397** (closed) — Fixed SQLite file descriptor leak on exception/shutdown paths in `SessionDB`. ([PR](https://github.com/NousResearch/hermes-agent/pull/83397))
- **#79428** (closed) — Addressed the Windows second-window React #310 renderer crash and the misleading "Open logs" link. ([Issue](https://github.com/NousResearch/hermes-agent/issues/79428))
- **#80560** (closed) — Fixed React #310 crash on Windows when any desktop plugin is loaded post-v0.20.0. ([Issue](https://github.com/NousResearch/hermes-agent/issues/80560))
- **#83558** — Fix for SGLang output-cap error parsing. ([PR](https://github.com/NousResearch/hermes-agent/pull/83558))
- **#83556** — Keeps `hermes serve` backend alive through the Windows launcher, fixing a startup regression. ([PR](https://github.com/NousResearch/hermes-agent/pull/83556))
- **#83554** — Restores authenticated Actual model discovery on macOS via Hermes' credential-safe urllib opener. ([PR](https://github.com/NousResearch/hermes-agent/pull/83554))
- **#83545** (closed) — Makes SSH terminal backend reliable on Windows sandbox routing. ([PR](https://github.com/NousResearch/hermes-agent/pull/83545))

### Actively Developed (Open PRs)
- **#83546 / #83547** — Byte-verbatim extractions from `api_server.py` and `conversation_loop.py` as part of the god-file shard epic.
- **#83557** — Fixes cron multiplex delivery using the correct per-profile bot token and adapter.
- **#83552** — Enforces a global Kanban worker concurrency cap across boards.
- **#83549** — Treats negative pricing sentinels as unknown in cost accounting (OpenRouter fix).
- **#83553** — Adds opt-in `tokens_in`/`tokens_out`/`effort` runtime footer fields for gateway.
- **#83550** — Ensures the multiplex gateway respects each routed profile's busy mode.
- **#83551** — Explains silently auto-approved dangerous commands in the terminal approval flow.
- **#77297** — Stops app-managed gateway on graceful desktop backend shutdown.
- **#83519** — Fixes fork-PR E2E evidence publishing in CI.
- **#82822 / #82821 / #82823** — Desktop sidebar improvements: session steppers, view switcher bar, and per-profile project state clearing.
- **#56766** — Adds `--board` flag to kanban create and `prompt_file` for cronjob tool.
- **#80758** — Extends `hashline-guard` plugin with full content-addressed patch anchoring.

## 4. Community Hot Topics

| Issue/PR | Comments | Topic | Link |
|---|---|---|---|
| #78647 | 64 | Epic: Shard all 20 god files | [Issue](https://github.com/NousResearch/hermes-agent/issues/78647) |
| #75269 | 9 | SessionDB WAL reader FD leak until shutdown | [Issue](https://github.com/NousResearch/hermes-agent/issues/75269) |
| #66824 | 7 | cronjob `repeat='forever'` type error | [Issue](https://github.com/NousResearch/hermes-agent/issues/66824) |
| #69451 | 5 | Desktop custom endpoints ignore active profile | [Issue](https://github.com/NousResearch/hermes-agent/issues/69451) |
| #63395 | 5 | Matrix cron delivery destabilizes after E2EE | [Issue](https://github.com/NousResearch/hermes-agent/issues/63395) |

**Analysis:** The god-file decomposition epic (#78647) is the single most-discussed item, reflecting a community that values long-term maintainability and clear module boundaries. The SessionDB FD leak (#75269) and cron type error (#66824) indicate pain points around long-running production deployments and recurring schedule configuration. Desktop profile scoping (#69451) and Matrix E2EE instability (#63395) surface demands for more robust multi-tenant and secure-messaging support.

## 5. Bugs & Stability

### Critical / High Severity
- **#75269 / #83512** — `SessionDB._read_conns` leaks one SQLite read-only FD per agent thread, causing EMFILE after ~40h. Closed PR #83397 addresses this. [[Issue #75269](https://github.com/NousResearch/hermes-agent/issues/75269)] [[Issue #83512](https://github.com/NousResearch/hermes-agent/issues/83512)]
- **#80898 / #78872** — Orphaned `hermes serve` backends accumulate across desktop restarts (macOS #80898, Windows #78872), exhausting file descriptors and causing empty tabs/sidebar. PR #83556 partially addresses the Windows case; PR #77297 covers graceful shutdown. [[Issue #80898](https://github.com/NousResearch/hermes-agent/issues/80898)] [[Issue #78872](https://github.com/NousResearch/hermes-agent/issues/78872)]
- **#80560 / #79428** — React #310 crash on Windows desktop when plugins are loaded or a second window is opened. Both issues are closed. [[Issue #80560](https://github.com/NousResearch/hermes-agent/issues/80560)] [[Issue #79428](https://github.com/NousResearch/hermes-agent/issues/79428)]

### Medium Severity
- **#83455** — [Regression] Kanban `boards` table never created; empty `kanban.db` persists across restarts (v0.17.0). Fix PR #83552 targets related concurrency issues. [[Issue](https://github.com/NousResearch/hermes-agent/issues/83455)]
- **#69451** — Desktop custom endpoints ignore the active profile, causing cross-profile request leakage in app-global remote mode. [[Issue](https://github.com/NousResearch/hermes-agent/issues/69451)]
- **#63395** — Matrix cron delivery to E2EE rooms succeeds once, then floods logs with `RuntimeError: database pool has been stopped`. [[Issue](https://github.com/NousResearch/hermes-agent/issues/63395)]
- **#83213** — Background process completion notifications routed to the wrong session after `/new`. [[Issue](https://github.com/NousResearch/hermes-agent/issues/83213)]
- **#69304** — `cron deliver=origin` silently fails for jobs created in an `api_server` session (origin platform can't send). [[Issue](https://github.com/NousResearch/hermes-agent/issues/69304)]
- **#83484** — Cron retries indefinitely when delivery target is permanently incompatible (e.g., API-server session already closed). [[Issue](https://github.com/NousResearch/hermes-agent/issues/83484)]
- **#83473** — HUD becomes unusable on Linux/X11 (Xfce); click-through band never re-arms. [[Issue](https://github.com/NousResearch/hermes-agent/issues/83473)]
- **#83006** — TUI Ctrl+Z binding suspends the entire process group; accidental `0x1A` paste triggers it. [[Issue](https://github.com/NousResearch/hermes-agent/issues/83006)]
- **#82816** — Session auto-title generation fails 100% on OpenAI-compatible providers using vLLM guided_grammar. [[Issue](https://github.com/NousResearch/hermes-agent/issues/82816)]

### Low Severity
- **#66824** — `cronjob create` with `repeat='forever'` raises `TypeError` comparing str and int. [[Issue](https://github.com/NousResearch/hermes-agent/issues/66824)]
- **#45762** (closed) — Telegram Rich Message body text renders oversized. [[Issue](https://github.com/NousResearch/hermes-agent/issues/45762)]
- **#83482** — Closing Desktop window on Linux leaks an orphaned backend (SIGTERM not escalated). [[Issue](https://github.com/NousResearch/hermes-agent/issues/83482)]
- **#83380** — Desktop artifacts page shows 1970 timestamps and broken image previews (seconds vs milliseconds). [[Issue](https://github.com/NousResearch/hermes-agent/issues/83380)]
- **#83475** (closed) — Browser toolset doesn't surface after post-setup on headless Linux. [[Issue](https://github.com/NousResearch/hermes-agent/issues/83475)]
- **#83517** — `/refine` rejects completed Desktop sessions when in-memory agent cache is absent. [[Issue](https://github.com/NousResearch/hermes-agent/issues/83455)]

## 6. Feature Requests & Roadmap Signals

| Request | Details | Link |
|---|---|---|
| HermesClaw CRM Frontend | Visual CRM interface for sales outreach pipelines (Camoufox, WhatsApp, LinkedIn). | [Issue #9485](https://github.com/NousResearch/hermes-agent/issues/9485) |
| Runtime Footer Telemetry | `tokens_in`, `tokens_out`, `effort` fields in gateway footer (PR #83553 in progress). | [PR #83553](https://github.com/NousResearch/hermes-agent/pull/83553) |
| Kanban `--board` Flag | Positional `--board` on `kanban create` and `prompt_file` for cronjob tool. | [PR #56766](https://github.com/NousResearch/hermes-agent/pull/56766) |
| Auto-Approval Explanation | Explain why dangerous commands were silently approved (PR #83551). | [PR #83551](https://github.com/NousResearch/hermes-agent/pull/83551) |
| Desktop View Switcher | Sessions/Projects/Profiles sidebar switcher and session steppers (PRs #82821, #82822). | [PR #82821](https://github.com/NousResearch/hermes-agent/pull/82821) [[PR #82822](https://github.com/NousResearch/hermes-agent/pull/82822)] |
| Content-Addressed Patches | `hashline-guard` plugin with `anchored_patch` and `hashline_compute` for stable edits. | [PR #80758](https://github.com/NousResearch/hermes-agent/pull/80758) |
| Feishu Card Footer | Card-style runtime footer for Feishu platform. | [PR #83553](https://github.com/NousResearch/hermes-agent/pull/83553) |

**Prediction:** The runtime footer telemetry (#83553), Kanban features (#56766), and desktop UX improvements (#82821, #82822) are close to merge and likely ship in the next minor release. The HermesClaw CRM frontend (#9485) remains a community proposal without maintainer traction. Auto-approval explanations (#83551) and hashline-guard (#80758) are niche but valuable for power users.

## 7. User Feedback Summary

- **Long-running deployments are fragile.** The SessionDB FD leak (#75269, #83512) and orphaned backend accumulation (#80898, #78872, #83482) are reported by users running Hermes as a persistent service, indicating that graceful lifecycle management is not yet production-hard.
- **Desktop multi-profile / multi-window UX needs work.** Custom endpoints ignoring active profiles (#69451), HUD wedging on Linux/X11 (#83473), and React crashes on second-window open (#80560) suggest the Electron layer is a growth area under strain from feature complexity.
- **Cron delivery across stateless sessions is unreliable.** Issues #69304 and #83484 show that cron jobs originating from API-server sessions fail silently or retry forever, a significant gap for automated workflows.
- **Windows is a recurring pain point.** React #310 crashes (#80560, #79428), backend lifecycle bugs (#78872, #83556), and SSH routing issues (#83545) all target Windows specifically, suggesting CI coverage gaps.
- **Satisfaction signals are positive but muted.** Closed issues show responsive maintainer behavior; the #78647 epic has 0 👍 but 64 comments, indicating strong engagement rather than dissatisfaction. The community is actively contributing fixes (e.g., #83397, #83557, #83552).

## 8. Backlog Watch

| Issue | Reason for Attention | Link |
|---|---|---|
| #66824 | `repeat='forever'` cron bug open for 3 weeks, P2, simple type fix — high ROI. | [Issue](https://github.com/NousResearch/hermes-agent/issues/66824) |
| #69451 | Desktop custom endpoints profile scoping bug, open 3 weeks, affects multi-profile users. | [Issue](https://github.com/NousResearch/hermes-agent/issues/69451) |
| #63395 | Matrix E2EE cron instability, open 1 month, no fix PR yet. | [Issue](https://github.com/NousResearch/hermes-agent/issues/63395) |
| #75269 | Though related PR #83397 closed, this issue remains open — verify closure is accurate. | [Issue](https://github.com/NousResearch/hermes-agent/issues/75269) |
| #83455 | Kanban regression (empty DB, no tables) is a user-facing blocking bug with no fix PR yet. | [Issue](https://github.com/NousResearch/hermes-agent/issues/83455) |
| #83484 | Infinite cron retry on incompatible delivery target — no fix PR, P2. | [Issue](https://github.com/NousResearch/hermes-agent/issues/83484) |
| #83213 | Background process notification misrouting after `/new` — no fix PR, affects session integrity. | [Issue](https://github.com/NousResearch/hermes-agent/issues/83213) |
| #82816 | Auto-title 100% failure on guided-grammar providers — no fix PR, P3. | [Issue](https://github.com/NousResearch/hermes-agent/issues/82816) |
| #5908 | kimi-coding credential pool `base_url` not re-resolved on load — open since April, 2 👍. | [Issue](https://github.com/NousResearch/hermes-agent/issues/5908) |
| #9485 | HermesClaw CRM frontend proposal — no maintainer response in 4 months. | [Issue](https://github.com/NousResearch/hermes-agent/issues/9485) |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-11

## 1. Today's Overview
PicoClaw shows moderate daily activity with **4 issues updated** (2 open, 2 closed) and **9 PRs updated** (2 open, 7 merged/closed). No new releases were published today. The project is actively addressing security hardening, internationalization, and channel‑stability fixes while several high‑severity bug reports remain open. Maintainer attention is concentrated on merging community contributions rather than shipping a new version.

## 2. Releases
*No new releases today.*

## 3. Project Progress
**Merged/Closed PRs (7):**
- [#1547](https://github.com/sipeed/picoclaw/pull/1547) — Merge of previously open fixes #1466 & #1465.
- [#3297](https://github.com/sipeed/picoclaw/pull/3297) — **Security hardening**: isolates remote sender metadata, defaults remote exec to disabled, enforces origin policy at execution time, and migrates configs to schema v4.
- [#3296](https://github.com/sipeed/picoclaw/pull/3296) — **i18n**: completes Czech code‑wrap labels.
- [#3295](https://github.com/sipeed/picoclaw/pull/3295) — **Stability**: fixes `SplitMessage` hanging when an opening fenced‑code info string exceeds `maxLen`.
- [#3327](https://github.com/sipeed/picoclaw/pull/3327) — **Feature**: enables native rich‑message table rendering in Telegram replies.
- [#3326](https://github.com/sipeed/picoclaw/pull/3326) — **Web/Tooling**: removes duplicate `semver@7.8.5` entries from `pnpm‑lock.yaml`, fixing `ERR_PNPM_BROKEN_LOCKFILE`.
- [#2132](https://github.com/sipeed/picoclaw/pull/2132) — **Config**: decouples model lookup key from runtime ID and introduces granular model‑level `max_tokens` overrides.

## 4. Community Hot Topics
**Most commented/open issues:**
- [#3301](https://github.com/sipeed/picoclaw/issues/3301) *(3 comments)* — **BUG**: `/clear` and session auto‑compression fail for chats routed to a non‑default agent via dispatch rules. Users rely on per‑agent session management; broken state‑clearing undermines multi‑agent deployments.
- [#3298](https://github.com/sipeed/picoclaw/issues/3298) *(2 comments)* — **Feature** (closed): Request to add AI Router as a named OpenAI‑compatible provider preset. Indicates demand for curated, one‑click provider integrations.
- [#3294](https://github.com/sipeed/picoclaw/issues/3294) *(2 comments)* — **BUG**: `/list models` shows only the current model instead of all configured models. Signals a UX expectation that the command should enumerate the full `model_list`.

**Underlying needs:** Users expect reliable multi‑agent session isolation, clear model‑listing diagnostics, and plug‑and‑play provider presets.

## 5. Bugs & Stability
**Open issues ranked by severity:**
1. **[HIGH] #3311** *(1 comment)* — **BUG**: Repeated identical tool‑failure loops silently consume `max_tool_iterations` and the user never receives an answer. Fixes turn‑looping when a tool (e.g., `git`) fails identically on every call. *Fix PR: [#3312](https://github.com/sipeed/picoclaw/pull/3312) (open).*
2. **[MEDIUM] #3301** *(3 comments)* — **BUG**: `/clear` and session auto‑compression are ignored for chats routed to a non‑default agent. Suggests a state‑management bug in the dispatch‑rule layer.
3. **[LOW] #3294** *(2 comments)* — **BUG**: `/list models` displays only the active model/provider. Low severity but affects usability.

**Recently merged stability fixes:** `SplitMessage` hang (#3295) and broken lockfile (#3326) are now resolved.

## 6. Feature Requests & Roadmap Signals
- **#3298** (closed) — Request for an AI Router preset. While closed, the affiliation disclosure and explicit use‑case (“users cannot select a named AI Router preset”) indicate sustained interest in **curated provider integrations**.
- **#2132** (merged) — Introduces model‑specific `max_tokens` and fixes config‑key collisions. This **granular parameter override** pattern may appear in future config‑system enhancements.
- **#3327** (merged) — Native Telegram table rendering expands **rich‑message support**, suggesting the team is investing in channel‑specific UX improvements.

**Prediction:** The next release may include a provider‑preset system and further model‑config refinements, but no release date is indicated.

## 7. User Feedback Summary
**Pain points:**
- Multi‑agent deployments break core session features (`/clear`, auto‑compression) (#3301).
- Tool‑failure loops cause silent, prolonged turn stalls with no user feedback (#3311).
- `/list models` misleads users by showing only the current model instead of the configured set (#3294).

**Positive signals:**
- Security hardening (#3297) and i18n progress (#3296) are welcomed.
- Native table rendering in Telegram (#3327) addresses a visible UX gap.

**Overall sentiment:** Users appreciate security and internationalization efforts but are frustrated by bugs that degrade multi‑agent reliability and basic diagnostic commands.

## 8. Backlog Watch
**Long‑unanswered important items:**
- **#3301** (open, stale, created 2026‑07‑29) — Multi‑agent session management bug. Requires maintainer investigation into dispatch‑rule state isolation.
- **#3311** (open, stale, created 2026‑08‑02) — Tool‑failure loop bug. Fix PR [#3312](https://github.com/sipeed/picoclaw/pull/3312) is open but unmerged; needs review/merge.
- **#3314** (open, stale, created 2026‑08‑03) — `customAllowPatterns` not working because default deny patterns take precedence in `guardCommand`. Security‑relevant; requires maintainer attention.

**Maintainer focus should prioritize merging the two open fix PRs (#3312, #3314) and resolving the dispatch‑rule state bug (#3301).**

---
*Generated from GitHub data as of 2026-08-11. All links point to the sipeed/picoclaw repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-11

## 1. Today's Overview

NanoClaw shows **high development velocity** with 20 PRs touched in the last 24 hours (10 merged/closed, 10 still open) and 3 active issues. No new release was published, indicating the current cycle is focused on hardening and refactoring rather than shipping. Activity is heavily concentrated around security hardening (Telegram pairing), session-stability fixes (message ID reuse), and infrastructure refactoring (host file surfaces, module lifecycle hooks). The project appears healthy with a strong contributor base and rapid PR turnaround.

---

## 2. Releases

**None.** No new version was cut today. The recent merge activity (security fixes, template migration, CLI stdin support) suggests a release may be酝酿 in the near term, but nothing is marked as release-ready yet.

---

## 3. Project Progress

### Merged / Closed PRs Today (10)

| PR | Title | Author | Summary |
|----|-------|--------|---------|
| [#3216](https://github.com/nanocoai/nanoclaw/pull/3216) | `docs(hardened-image): note that install_packages covers apt and npm only` | stumpjumper | Documents a real limitation in the hardened-image guide — `install_packages` only reaches `apt` and `npm`, not other package sources. |
| [#3228](https://github.com/nanocoai/nanoclaw/pull/3228) | `fix: deduplicate turn-scoped chat delivery` | johnmu-docker | Fixes duplicate message delivery within a single agent turn. |
| [#3222](https://github.com/nanocoai/nanoclaw/pull/3222) | `feat(permissions): add opt-in privacy-safe DM logs` | zvi-fried | Adds a `privacySafeLogs` toggle that omits user IDs, handles, and raw adapter errors from DM logs while retaining channel context. |
| [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) | `fix(permissions): redact DM resolution logs` | zvi-fried | Redacts PII from DM resolution log output. |
| [#3219](https://github.com/nanocoai/nanoclaw/pull/3219) | `Telegram and container env` | maxmedina05 | Container-environment adjustments for Telegram. |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | `refactor: add host seams for skill-owned capabilities` | zvi-fried | Introduces host-level extension points so skills can own capabilities without hacking the core. |
| [#3213](https://github.com/nanocoai/nanoclaw/pull/3213) | `refactor(channels): register question renderers` | zvi-fried | Centralizes question-renderer registration across channels. |
| [#3214](https://github.com/nanocoai/nanoclaw/pull/3214) | `refactor(host): unify module lifecycle hooks` | zvi-fried | Unifies module lifecycle hooks in the host for cleaner startup/shutdown ordering. |
| [#3212](https://github.com/nanocoai/nanoclaw/pull/3212) | `refactor(db): add module migration registry` | zvi-fried | Adds a migration registry so database schema changes are versioned and ordered per-module. |
| [#3211](https://github.com/nanocoai/nanoclaw/pull/3211) | `docs(skills): define single-responsibility integration rule` | zvi-fried | Documents the single-responsibility principle for skill integrations. |

### Key Open PRs Advancing

- **[PR #3227](https://github.com/nanocoai/nanoclaw/pull/3227)** — Refactors host file-surface declaration from inference to explicit single-writer specification. Reduces ambiguity in shared filesystem access between host and agent containers.
- **[PR #3229](https://github.com/nanocoai/nanoclaw/pull/3229)** — Fixes Telegram pairing code generation to use `crypto.randomInt` (CSPRNG) instead of `Math.random()`, widening the code space from 4 to 6 digits. Direct response to [Issue #3225](https://github.com/nanocoai/nanoclaw/issues/3225).
- **[PR #3224](https://github.com/nanocoai/nanoclaw/pull/3224)** — Fixes silent message loss when platforms reuse message IDs in long-lived sessions. Direct response to [Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226).
- **[PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092)** — Adds support for remote Streamable HTTP MCP servers. A significant feature expansion for distributed tooling.
- **[PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220)** — Migrates agent templates to "Agent Plugins 1.0.0" directory format. Breaking-format change with symlink/caps/secret hardening.
- **[PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)** — Completes the template setup flow with wizard integration and first-agent stamping.
- **[PR #3218](https://github.com/nanocoai/nanoclaw/pull/3218)** — Adds `--stdin-json` bounded input mode to both host and container `ncl` CLI clients.
- **[PR #3221](https://github.com/nanocoai/nanoclaw/pull/3221)** — Extends PR #3092's remote MCP support to codex and opencode payloads (currently they throw on HTTP entries).
- **[PR #3193](https://github.com/nanocoai/nanoclaw/pull/3193)** — Updates Chat SDK for rich Telegram messages.

---

## 4. Community Hot Topics

### Most Active / Discussable Items

1. **[Issue #3075](https://github.com/nanocoai/nanoclaw/issues/3075)** — *Silent log loss + duplicate-insert errors after long uptime; no systemd unit installed*
   - Raised by `libellebilai-collab` on 2026-07-17; updated 2026-08-10. Covers two pain points: log silencing after extended operation and the absence of a systemd unit for production deployment. **1 comment, 0 reactions.** This issue highlights a real operational gap — users running NanoClaw in WSL2/Docker are hitting reliability and deploy-ops issues that block production use.

2. **[Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226)** — *Inbound messages silently dropped when a platform reuses a message ID*
   - Raised by `dweekly` on 2026-08-10. **0 comments.** Fix PR [#3224](https://github.com/nanocoai/nanoclaw/pull/3224) already open. A user-visible bug described as "indistinguishable from the agent ignored me" — high frustration potential.

3. **[Issue #3223](https://github.com/nanocoai/nanoclaw/issues/3223)** — *Scheduled-task errors produce unroutable error messages that are silently dropped*
   - Raised by `chiptoe-svg` on 2026-08-10. **0 comments.** Operators never learn when a scheduled task fails. No fix PR yet.

4. **[PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092)** — *Support remote Streamable HTTP MCP servers*
   - Open since 2026-07-19. This is a major feature enabling distributed tool servers and has spawned a follow-up ([#3221](https://github.com/nanocoai/nanoclaw/pull/3221)) to extend it to codex/opencode.

**Underlying Need:** The community is pushing hard on **operational reliability** (silent failures, missing deployment units, error visibility) and **integration extensibility** (remote MCP, template plugins, stdin JSON). The privacy-focused logging changes also signal users care about PII in logs.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#3226](https://github.com/nanocoai/nanoclaw/issues/3226) | Inbound messages silently dropped on platform message-ID reuse | [#3224](https://github.com/nanocoai/nanoclaw/pull/3224) ✅ Open |
| **High** | [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) | Scheduled-task errors silently dropped; operator never learns of failure | ⚠️ No fix yet |
| **Medium** | [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) | Silent log loss + duplicate-insert errors after long uptime | ⚠️ Partially addressed (systemd unit still missing) |
| **Medium** | [#3225](https://github.com/nanocoai/nanoclaw/issues/3225) | Telegram pairing codes generated with `Math.random()` (predictable) | [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) ✅ Open |
| **Low** | — | [#3219](https://github.com/nanocoai/nanoclaw/pull/3219) merged — Telegram/container env adjustments | Merged |

**Notable:** Two high-severity bugs (silent message loss, silent task-failure) share a common pattern: errors are swallowed without operator visibility. This suggests a systemic gap in error-handling and logging discipline across the agent-runner and scheduling subsystems.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Assessment |
|--------|--------|------------|
| **Remote Streamable HTTP MCP servers** | [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) + [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) | Strong roadmap item — moves NanoClaw toward distributed tool ecosystems. Likely in next minor release. |
| **Agent Templates → Plugins 1.0.0** | [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) + [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) | Format migration with wizard integration. Breaking change; should ship together. |
| **Privacy-safe DM logs (opt-in)** | [#3222](https://github.com/nanocoai/nanoclaw/pull/3222) | Growing demand for PII minimization. Will likely land as a config toggle. |
| **Bounded JSON stdin for CLI** | [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) | Improves automation/scripting surface. Low risk, high utility. |
| **Rich Telegram messages** | [#3193](https://github.com/nanocoai/nanoclaw/pull/3193) | Channel enhancement; depends on Chat SDK update. |
| **systemd unit / production deployment** | [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) | User-requested; no PR yet. Signals need for opinionated production templates. |

**Prediction:** The next release will likely include the template→plugin migration, remote MCP support, and the privacy-safe logging toggle. The systemd unit request may be deferred to a separate `nanoclaw-service` package.

---

## 7. User Feedback Summary

- **Pain Point — Silent Failures:** Multiple users report the same class of issue: the agent appears to ignore them or tasks fail invisibly ([#3226](https://github.com/nanocoai/nanoclaw/issues/3226), [#3223](https://github.com/nanocoai/nanoclaw/issues/3223), [#3075](https://github.com/nanocoai/nanoclaw/issues/3075)). This is the dominant dissatisfaction theme.
- **Pain Point — No Production Deployment Blueprint:** The absence of a systemd unit and unclear long-uptime reliability ([#3075](https://github.com/nanocoai/nanoclaw/issues/3075)) makes production adoption risky.
- **Pain Point — Predictable Pairing Codes:** Telegram pairing using `Math.random()` is a security concern ([#3225](https://github.com/nanocoai/nanoclaw/issues/3225)).
- **Positive — Privacy Controls:** The opt-in privacy-safe logs ([#3222](https://github.com/nanocoai/nanoclaw/pull/3222)) and DM log redaction ([#3215](https://github.com/nanocoai/nanoclaw/pull/3215)) show responsiveness to data-protection concerns.
- **Positive — Rapid Fix Turnaround:** Issues raised on 2026-08-10 already have open fix PRs the same day, indicating active maintainer engagement.

---

## 8. Backlog Watch

| Item | Type | Open Since | Risk |
|------|------|-----------|------|
| [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) — Long-uptime log loss + no systemd unit | Issue | 2026-07-17 (~25 days) | **High** — Blocks production deployment for a user. Only 1 comment, no fix PR. |
| [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) — Scheduled-task errors silently dropped | Issue | 2026-08-10 | **High** — No fix PR yet. Same silent-failure pattern as #3226. |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) — Remote Streamable HTTP MCP servers | PR | 2026-07-19 (~23 days) | **Medium** — Important feature, still open. Follow-up [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) is also open. |
| [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) — Agent templates → Plugins 1.0.0 | PR | 2026-08-10 | **Medium** — Breaking migration; needs careful review. |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) — Template setup wizard | PR | 2026-07-02 (~40 days) | **Medium** — Long-open but depends on #3220 for the format migration. |

**Maintainer Attention Needed:** Issue [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) has been open for ~25 days with minimal engagement and no fix. Issue [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) was raised today with no response yet. Both represent user-facing reliability gaps that could erode trust if left unaddressed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-08-11

## 1. Today's Overview
NullClaw shows **moderate development activity** with one closed issue and one open pull request in the last 24 hours. No new releases were published. The most significant movement is the closure of issue #700, which adds a client-side `a2a_call` tool to complement nullclaw's existing server-side A2A protocol support. Dependency maintenance continues with an open Dependabot PR for Alpine Docker image updates.

## 2. Releases
*No new releases in the past 24 hours.*

## 3. Project Progress
- **Issue #700 (Closed):** Added `a2a_call` client tool enabling nullclaw agents to send `message/send` JSON-RPC requests to remote A2A agents. This fills a previously identified gap in nullclaw's A2A protocol implementation by providing client-side connectivity.

## 4. Community Hot Topics
- **[Issue #700](https://github.com/nullclaw/nullclaw/issues/700)** — "Add a2a_call client tool for calling remote agents"  
  *1 comment, 1 👍*  
  The author reports running multiple nullclaw instances (public doorman + private personal agent) and needing client-side A2A communication. This indicates growing multi-agent orchestration use cases and validates the protocol's practical adoption.

- **[PR #956](https://github.com/nullclaw/nullclaw/pull/956)** — "ci(deps): bump alpine from 3.23 to 3.24"  
  *0 likes*  
  Standard dependency maintenance; lower community visibility but important for security and stability.

## 5. Bugs & Stability
*No bug reports, crashes, or regressions filed today.*

## 6. Feature Requests & Roadmap Signals
- The resolution of **[Issue #700](https://github.com/nullclaw/nullclaw/issues/700)** signals that **client-side A2A capabilities** are a priority for users. Future releases may expand the client tooling suite (e.g., additional JSON-RPC methods, agent discovery, or streaming support).

## 7. User Feedback Summary
- Users are successfully deploying nullclaw in **multi-instance configurations** and require inter-agent communication. The closure of the client tool issue addresses a clear pain point without reported dissatisfaction. The community appears engaged with practical, production-oriented use cases.

## 8. Backlog Watch
- **[PR #956](https://github.com/nullclaw/nullclaw/pull/956)** — Alpine 3.23 → 3.24 bump has been open since 2026-06-15. Maintainers should ensure timely review to keep Docker images current and secure.

---

**Project Health Assessment:** Active development with a focus on expanding A2A protocol usability. Community contributions are being merged, and dependency maintenance is ongoing. No stability concerns reported.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-11

## 1. Today's Overview

IronClaw is in an active release-candidate cycle, with **v1.1.1-rc.1** published on 2026-08-10 as an urgent patch for the 1.1 line. The project shows sustained daily velocity: 50 issues and 50 PRs were updated in the last 24 hours, with 26 open issues and 33 open PRs still in flight. Activity is concentrated on channel delivery, pairing stability, IronHub/MCP compatibility, WebUI streaming, and durable state—aligning closely with the rc.1 release focus. The open-issue backlog remains manageable, though several high-priority architecture and onboarding epics are still awaiting resolution.

## 2. Releases

### v1.1.1-rc.1 (2026-08-10)
A **patch candidate** for the 1.1 line. Key areas:
- **Channel delivery & pairing** fixes
- **IronHub / custom MCP compatibility** improvements
- **WebUI streaming stability** patches
- **Durable retrieval** enhancements
- **Safe upgrades** from both 1.0.0 and the previous 1.1 stable

> **Migration note:** When upgrading from 1.0.0, **stop all writers** before installing.

[Release on GitHub](https://github.com/nearai/ironclaw/releases)

## 3. Project Progress

**Closed/Merged PRs today (key items):**

- **#7336** — Fixed duplicate steering replays in the loop-host; deduplicates consumed messages against original queue sequence to prevent redundant model iterations.
- **#7446** — Ships a **rich working indicator** for Slack and Telegram (varied copy, reactions, failure states, progress nudges).

**Open PRs advancing today:**

- **#7475** — Fixes the connect-nudge throttle leaking on ref-less deliveries (web push, Slack).
- **#7456** — Makes Reborn durable storage **profile-agnostic**, preventing stranded data on profile changes.
- **#7470** — Restores thread listability for unprojected `thread_index` rows.
- **#7474** — Stops the agent asserting unverified automation state across three QA-reported bugs.
- **#7410** — Completes fair-discovery arms for `tool_search`, removing mandatory `tool_describe` round-trips when schemas fit.
- **#7464** — Implements Telegram linked-device auth with session custody (epic #7354).
- **#7468 / #7469** — Captures per-token logprobs to a local sidecar and reduces them to envelope confidence aggregates for Trace Commons compatibility.
- **#7426** — Adds a durable memory parity stress-matrix workload suite.

## 4. Community Hot Topics

| Issue | Status | Comments | Summary |
|---|---|---|---|
| [#7137](https://github.com/nearai/ironclaw/issues/7137) | Open | 12 | Live-canary artifacts are **700 MB–1.5 GB each**, exceeding 5 GB total — burning Actions storage and slowing triage. |
| [#7145](https://github.com/nearai/ironclaw/issues/7145) | Closed | 4 | WS2 extension-host re-layer sizing defect resolved; the original count-based approach was fundamentally flawed. |
| [#6257](https://github.com/nearai/ironclaw/issues/6257) | Open | 3 | `Invalid value (attachments.mime_type)` error when sending/generating PDFs — a user-facing bug reported via Slack feedback. |
| [#7147](https://github.com/nearai/ironclaw/issues/7147) | Closed | 3 | Architecture audit found two shrink-only ratchets carrying untracked slack on `main`. |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | Closed | 3 | Repeated Slack reconnects leave auth flow broken; only recovery is reinstall. |
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | Open | 2 | Editing `AGENTS.md` in the WebUI does **not** update the system prompt for current or future conversations. |

**Analysis:** The top-comment issue (#7137) reflects a **CI/infrastructure cost** concern that impacts all contributors. The PDF mime-type bug (#6257) and AGENTS.md prompt-sync issue (#3762) are the most visible **user-facing pain points** still open. Architecture soundness audits (BenKurrek's series of issues #7145, #7147, #7149, #7150, #7151) dominate the closed items, indicating a deep refactoring pass is underway on the Reborn crate layout.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| **Medium** | [#7473](https://github.com/nearai/ironclaw/issues/7473) | `post_notice` collapses "delivered with no vendor ref" into "not delivered," allowing duplicate connect-nudges. | **PR #7475** open |
| **Medium** | [#6257](https://github.com/nearai/ironclaw/issues/6257) | `Invalid value (attachments.mime_type)` on PDF send/generate. | No fix PR yet |
| **Medium** | [#7470](https://github.com/nearai/ironclaw/issues/7470) | Threads with unprojected `thread_index` rows silently disappear from `list_threads`. | **PR #7470** open |
| **Low** | [#7447](https://github.com/nearai/ironclaw/issues/7447) | Agent gets stuck in redundant tool-call loops, burning through turn budget. | No fix PR yet |
| **Low** | [#3762](https://github.com/nearai/ironclaw/issues/3762) | `AGENTS.md` edits in WebUI don't update system prompt. | No fix PR yet |
| **Resolved** | [#5882](https://github.com/nearai/ironclaw/issues/5882) | Slack reconnect auth broken state — resolved. | Closed |
| **Resolved** | [#7336](https://github.com/nearai/ironclaw/pull/7336) | Duplicate steering replays causing spurious model iterations — fixed. | Merged |

## 6. Feature Requests & Roadmap Signals

- **[Epic #7467](https://github.com/nearai/ironclaw/issues/7467)** — Make Reborn durable state profile-agnostic and migrate legacy profile roots. (PR #7456 in progress.)
- **[Epic #7038](https://github.com/nearai/ironclaw/issues/7038)** — Storybook + AI-first Design System for the WebUI (theming, assets, interactions).
- **[Epic #7046](https://github.com/nearai/ironclaw/issues/7046)** — Configure all tools, channels, and extensions via AI chat as an Admin.
- **[Epic #7354](https://github.com/nearai/ironclaw/issues/7354)** — Extensions vNext: Web Push, Rich Messaging, Telegram User Sessions, Signal. (PR #7464 for Telegram linked-device is active.)
- **[Epic #7044](https://github.com/nearai/ironclaw/issues/7044)** — Channel-first onboarding approach (v1.4.0).
- **[PR #6994](https://github.com/nearai/ironclaw/pull/6994)** — OOBE automation-tasks prototype (carousel, inline cards, agent-mode pill) for WebChat v2.
- **[PR #7410](https://github.com/nearai/ironclaw/pull/7410)** — `tool_search` fair discovery with complete input signatures.

**Prediction:** Web Push notifications, Telegram linked-device sessions, and rich channel working indicators are likely to land in **v1.2–v1.3**. The profile-agnostic storage migration (#7467) is critical infrastructure that will enable future multi-tenant features.

## 7. User Feedback Summary

- **PDF attachment failures** (#6257) are a reported product-feedback item via Slack, suggesting MIME-type validation is too strict or misconfigured.
- **Slack auth recovery** (#5882) was painful for users — required full extension reinstall. Now closed, but signals fragility in the OAuth flow under reconnect stress.
- **AGENTS.md edits not reflecting** (#3762) undermines the WebUI's value as a configuration surface; users expect edits to take effect immediately.
- **Tool-call loop exhaustion** (#7447) indicates the agent's planning/turn budget needs better guardrails — a real reliability concern for power users running long workflows.
- **Onboarding friction** (#7044) remains a top strategic concern: new users face a blank slate with no guidance on use-case selection.

## 8. Backlog Watch

| Issue | Age | Risk | Why It Needs Attention |
|---|---|---|---|
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | ~3 months | Medium | WebUI `AGENTS.md` edits silently fail to propagate — erodes trust in the UI config surface. |
| [#6257](https://github.com/nearai/ironclaw/issues/6257) | ~3 weeks | Medium | PDF mime-type bug blocks a core attachment use case; has a direct customer feedback path. |
| [#7137](https://github.com/nearai/ironclaw/issues/7137) | ~7 days | Low (infra) | CI artifact bloat wastes GitHub Actions storage; PR #7466 is addressing shard trimming. |
| [#7447](https://github.com/nearai/ironclaw/issues/7447) | 1 day | Medium | Agent loops burning through turn budget — no fix PR yet, high-visibility reliability issue. |
| [#7465](https://github.com/nearai/ironclaw/issues/7465) | 1 day | — | "Company Brain FDE" epic — newly opened, no details yet; may need scoping. |
| [#7036](https://github.com/nearai/ironclaw/issues/7036) | ~8 days | Low | Changed-coverage gate not running on ordinary PRs; owner instructed to leave CI as-is for now. |

---

*Data source: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) — snapshot as of 2026-08-11.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# 🦞 LobsterAI Project Digest — 2026-08-11

---

## 1. Today's Overview
- **Activity level:** Active. One issue was closed in the last 24 hours, and **34 PRs** were updated (14 open, 20 merged/closed).
- **Release status:** No new version released today.
- **Health assessment:** Steady development momentum, with a strong focus on **cowork UX**, **renderer stability**, and **OpenClaw runtime fixes**. The closed bug (#1243) indicates the team is addressing long‑standing configuration loops that impacted gateway stability.

---

## 2. Releases
*No new releases today.*

---

## 3. Project Progress
**Merged/Closed PRs (20 today):**
- `#2473` – **feat(cowork):** Add right‑click context menu for local file links ([link](https://github.com/netease-youdao/LobsterAI/pull/2473))
- `#2472` – **feat(cowork):** Activity group collapse ([link](https://github.com/netease-youdao/LobsterAI/pull/2472))
- `#2471` – **feat(cowork):** Render submitted file attachments as clickable cards ([link](https://github.com/netease-youdao/LobsterAI/pull/2471))
- `#2454` – **fix(openclaw):** Stop tool‑loop guard from killing legitimate polling ([link](https://github.com/netease-youdao/LobsterAI/pull/2454))
- `#2467` – **fix(python-runtime):** Repair stale pip shims on Windows runtime upgrade ([link](https://github.com/netease-youdao/LobsterAI/pull/2467))
- `#2466` – **fix(renderer):** Init IPC stall retry ([link](https://github.com/netease-youdao/LobsterAI/pull/2466))
- `#2470` – **fix(openclaw):** Surface provider runtime failures on late chat error ([link](https://github.com/netease-youdao/LobsterAI/pull/2470))
- `#2469` – **feat(cowork):** Add collapse‑agent‑tasks shortcut & allow modifier shortcuts while typing ([link](https://github.com/netease-youdao/LobsterAI/pull/2469))
- `#2468` – **refactor(cowork):** Unify streaming loading indicators into single component ([link](https://github.com/netease-youdao/LobsterAI/pull/2468))

**Open PRs (14 today):**
- `#2452` – **fix(openclaw):** Preserve provider for slashed model IDs ([link](https://github.com/netease-youdao/LobsterAI/pull/2452))
- Several dependency bumps (Vite, React‑DOM, Mermaid, ESLint plugin, rimraf, js‑x‑ray).

---

## 4. Community Hot Topics
- **Closed Issue #1243** – `[BUG] qwen-portal-auth plugin config loop causing gateway restarts` ([link](https://github.com/netease-youdao/LobsterAI/issues/1243))
  - *Underlying need:* Users require stable configuration persistence; frequent gateway restarts disrupt workflows. The fix resolves a critical stability pain point for Windows users running the `qwen-portal-auth` plugin.

*No other open issues were reported today.*

---

## 5. Bugs & Stability
- **Severity: Medium** – Issue #1243 (now closed) described a configuration‑loop bug that forced the OpenClaw gateway to restart every 5–20 minutes. The bug was marked stale and subsequently closed, likely resolved by the merged PRs addressing OpenClaw runtime and tool‑loop behavior (#2454, #2470).
- **No new crash reports or regressions** were logged today.

---

## 6. Feature Requests & Roadmap Signals
- **Cowork UX enhancements** are clearly prioritized:
  - Right‑click context menus for local files (#2473)
  - Clickable file‑attachment cards (#2471)
  - Agent‑task collapsing shortcuts (#2469)
  - Unified streaming loading indicators (#2468)
- These improvements signal a roadmap focus on **making multi‑agent collaboration more interactive and visually coherent**.

---

## 7. User Feedback Summary
- **Pain point resolved:** Users reported severe disruption from gateway restarts caused by the `qwen-portal-auth` plugin’s infinite config loop. The closure of issue #1243 indicates the team is responsive to stability‑critical bugs.
- **No other user complaints or satisfaction signals** were captured in today’s activity.

---

## 8. Backlog Watch
- **Issue #1243** was open for ~4 months (created 2026‑04‑01, closed 2026‑08‑10) and was marked `[stale]` before resolution. Maintainers should monitor for similar stale‑marked issues to ensure timely triage.
- **No other long‑unanswered issues or PRs** are highlighted in today’s data.

---

**Overall project health:** 🟢 Active and responsive. Development is concentrated on cowork‑mode UX, OpenClaw runtime stability, and dependency modernization. Bug resolution is occurring, though some issues may languish before being closed.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-08-11

## 1. Today's Overview

Moltis is experiencing moderate development activity with 3 open issues and 1 open PR updated in the last 24 hours, and zero new releases. The project is focused on resolving Apple Container backend bugs, with no merged PRs or closed issues reported today. The single active PR (#531) — an interactive browser viewing UI — has been open since March, indicating a potentially stalled but high-value feature. Overall project health shows active bug reporting from users but no release cadence in the immediate term.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

- **Merged/Closed PRs today:** None
- **Open PR advanced:** PR #531 ([feat(browser): interactive browser viewing UI with CDP screencast](https://github.com/moltis-org/moltis/pull/531)) was updated on 2026-08-10. This PR adds a full browser viewing and interaction UI to Settings > Browser, featuring live CDP screencast, mouse/keyboard/scroll interaction, session history with action logs, and per-agent browser profiles for cookie isolation. Despite being open since 2026-03-31, it remains the only active PR and represents a significant UX feature if merged.

## 4. Community Hot Topics

- **Issue #1185** — [Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185) (3 comments, updated 2026-08-10). This is the most discussed issue today and points to a status-detection mismatch in the Apple Container backend. Users rely on accurate runtime state reporting, and this bug undermines trust in the sandboxing layer.
- **Issue #1188** — [Resource limits not applied for Apple Container backend](https://github.com/moltis-org/moltis/issues/1188) (0 comments, created 2026-08-10). Filed by the same author as #1189, this indicates a broader backend configuration issue.
- **Issue #1189** — [Sandbox build failing due to wrong gogcli GitHub URL](https://github.com/moltis-org/moltis/issues/1189) (0 comments, created 2026-08-10). A build-time bug suggesting a dependency URL regression, likely introduced recently.
- **PR #531** — [Interactive browser viewing UI with CDP screencast](https://github.com/moltis-org/moltis/pull/531) — the most impactful open PR, reflecting strong user demand for browser automation visibility and multi-profile isolation.

## 5. Bugs & Stability

All three open issues reported today are bugs, signaling a stability concern around the Apple Container backend:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#1188](https://github.com/moltis-org/moltis/issues/1188) | Resource limits not applied for Apple Container backend | None yet |
| **High** | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Sandbox starts but Moltis reports it as not running | None yet |
| **Medium** | [#1189](https://github.com/moltis-org/moltis/issues/1189) | Sandbox build failing due to wrong gogcli GitHub URL | None yet |

Issues #1185 and #1188 are related to the same backend and may share a root cause. No fix PRs are currently open for any of these bugs.

## 6. Feature Requests & Roadmap Signals

- **PR #531** — [Interactive browser viewing UI with CDP screencast](https://github.com/moltis-org/moltis/pull/531) remains the most prominent feature signal. Its 4+ month open duration suggests it may be awaiting review or integration work. If merged, it would be a major UX release feature.
- No new feature-request issues were filed today.
- The concentration of bug reports on the Apple Container backend suggests roadmap attention may need to shift toward stabilizing that backend before new features are prioritized.

## 7. User Feedback Summary

Users are actively engaging with the Apple Container backend but encountering friction:
- **Pain points:** Sandbox status misreporting (#1185), resource limits silently ignored (#1188), and build failures from incorrect dependency URLs (#1189). These are reliability-blocking issues for users running Moltis on Apple Silicon.
- **Use cases:** Users are running sandboxed AI agent containers and expect correct resource enforcement and status reporting — foundational requirements for production use.
- **Satisfaction signal:** The volume of same-day bug reports from multiple contributors (mikz, holgzn) indicates an active user base that depends on Moltis but is currently frustrated by backend instability. The long-open PR #531 also reflects strong desire for browser automation improvements.

## 8. Backlog Watch

- **PR #531** ([Interactive browser viewing UI with CDP screencast](https://github.com/moltis-org/moltis/pull/531)) — Open since 2026-03-31 with no merge in over 4 months. This is the highest-impact pending PR and warrants maintainer attention.
- **Issue #1185** ([Apple Container status detection bug](https://github.com/moltis-org/moltis/issues/1185)) — 3 comments suggest ongoing discussion but no resolution; this and #1188 together form a coherent backend stability block that should be prioritized.
- **Issue #1189** ([gogcli URL regression](https://github.com/moltis-org/moltis/issues/1189)) — A build-breaking bug with no comments or activity; likely needs a quick maintainer triage response.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw Project Digest — 2026-08-11

## 1. Today's Overview

CoPaw is experiencing high development velocity with 90 issues/PRs updated in the last 24 hours (40 issues, 50 PRs), signaling strong community engagement and active maintenance ahead of the v2.1.0 release. Six issues were closed today, including a critical plugin bug and a desktop UX complaint, while zero new releases were published — v2.1.0 release notes are being prepared in PR #6875. The project is in a pre-release stabilization phase with significant focus on Console UX fixes, ReMe memory improvements, and plugin reliability.

## 2. Releases

No new releases published today. PR #6875 is preparing the v2.1.0 release notes (English + Chinese) and updating all README translations, suggesting a v2.1.0 release is imminent.

## 3. Project Progress

**Merged / Closed Today:**

- **#6809** (closed) — `fix(providers): sanitize Chat Completions content for strict providers` — Sanitizes internal runtime envelope fields and Responses-API text types from message content, fixing 400 errors from strict OpenAI-compatible providers like StepFun.
- **#6878** (closed) — `feat(console): add hidden-folders toggle to project directory picker` — Adds a UI toggle to show/hide hidden folders in the workspace directory picker.
- **#6866** (closed) — User question about excessive auto-generated `.py`/`.sh` files in workspace agent directories, now resolved.
- **#6812** (closed) — `fix: Model 'unknown' execution failed on Google API` — Root cause: Gemini provider was sending `$schema` fields in tool schemas, which Google's API rejects.

**Notable Open PRs Advancing:**

- **#6889** — Fixes Chinese IME crash in Console (resolves #6885).
- **#6888** — Hides Scroll retrieval headlines in XiaoYi mobile messages.
- **#6870** — Creator plugin aggregation: settings center, agent skills, async media generation, cross-platform hardening.
- **#6884** — Makes Auto-Dream integration tolerant of malformed LLM structured output (fixes #6841).
- **#5992** — Per-session model overrides (first-time contributor).
- **#6877** — Remember window geometry on Tauri desktop restart.
- **#6880** — Unified marketplace page for apps, plugins, and skills.
- **#6772** — Embedding hot updates and Daily Paper support added to ReMe Light.
- **#6869** — Fixes `task_timeout` string serialization and adds default background task timeout.

## 4. Community Hot Topics

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #6782 | Docker版插件/应用市场始终提示"维护中" | 9 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6782) |
| #6803 | OpenAI-compatible requests rejected by strict providers (StepFun 400) | 6 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6803) |
| #6811 | Responses continuation summary ignores `disable_thinking` | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6811) |
| #6826 | 助手消息结束时间显示异常 | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6826) |
| #4237 | In-chat observability for running shell commands | 4 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/4237) |
| #6405 | MCP工具升级后总是提示Tool notfound | 4 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6405) |
| #6814 | SIGBUS crash opening SQLite WAL history.db on macOS | 4 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6814) |
| #6820 | 前端UI不显示流式输出，全部完成后才显示 | 4 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6820) |

**Analysis:** The most-discussed topics cluster around three areas: (1) **provider compatibility** (#6803, #6811, #6821) — users are integrating diverse LLM providers and hitting strict schema validation issues; (2) **Console UX/stability** (#6782, #6820, #6885, #6828) — streaming display and IME support remain pain points; (3) **MCP tool reliability** (#6405, #6839) — post-upgrade tool resolution and type serialization problems.

## 5. Bugs & Stability

**Critical / High Severity:**

- **#6885** — Console UI crashes during Chinese IME composition in v2.1.0b2; message queue becomes unusable. **Fix PR: #6889** (open).
- **#6814** — SIGBUS (`FS pagein 22`) crash in `sqlite3WalFindFrame` when opening Scroll `history.db` (WAL mode) on macOS. No fix PR yet.
- **#6828** — Console idle CPU at ~20% due to infinite CSS animations (`ai-copilot-blink` + antd spinner). No fix PR yet.
- **#6820** — Frontend does not stream agent output; all content appears only after completion. No fix PR yet.
- **#6803 / #6821** — OpenAI-compatible and reasoning-content relay failures with strict/thinking-mode providers. **#6803 fix PR: #6809** (closed/merged). #6821 has no fix PR yet.
- **#6811** — Responses continuation summary blocks main conversation and misreports cancellation. No fix PR yet.
- **#6806 / #6807** — `qwenpaw-creator` plugin fails on Windows (model config save, video/image generation). No fix PR yet.
- **#6839** — MCP tools coerce numeric-looking strings to integers, breaking API calls. No fix PR yet.

**Medium Severity:**

- **#6782** — Docker plugin/app marketplace stuck in "maintenance" state. No fix PR yet.
- **#6405** — MCP tools report "Tool not found" after 2.0 upgrade. No fix PR yet.
- **#6876** — Background task panel floods chat window (closed as feature request). No fix PR yet.
- **#6867** — Gemini compaction error: missing `thought_signature` in function call parts. No fix PR yet.
- **#6813** — `consume_model_response` raises `KeyError: '__aiter__'` on AgentScope 2.x `ChatResponse`; breaks auto-title generation. No fix PR yet.
- **#6683** — `qwenpaw-creator` install fails due to `utils` module naming conflict. No fix PR yet.

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood for v2.1.0 |
|----------|---------|----------------------|
| #5992 | Per-session model overrides | Likely — PR open, under review |
| #6881 | Auto-refresh session title after auto-memory update | Possible — small scope |
| #4634 | Remember window size/position on restart | Likely — PR #6877 implements this |
| #6880 | Unified marketplace (apps/plugins/skills) | Likely — PR open, aligns with v2.1.0 scope |
| #4237 | In-chat shell command observability (kill/extend timeout) | Deferred — low priority, no PR yet |
| #6585 | Toggle to disable dynamic character counter | Possible — low effort |
| #6724 | Configurable MCP tool-call timeout | Possible — PR not yet filed |
| #6398 | Reranker support for ReMe memory search (backend) | Likely in later roadmap — PR closed, backend work done |
| #6772 | Embedding hot updates + Daily Paper for ReMe Light | Likely — PR open, significant scope |
| #6854 | Localized approval purpose descriptions | Likely — PR open, first-time contributor |

**Roadmap Signal:** The v2.1.0 release appears to focus on Console UX hardening, ReMe Light memory improvements, marketplace unification, and plugin stability. Long-requested features like per-session models and window geometry persistence are being picked up.

## 7. User Feedback Summary

**Pain Points:**
- **Streaming display broken** (#6820): Users expect real-time output but see nothing until completion — a core UX regression.
- **IME crash on Chinese input** (#6885): Critical for the Chinese-user base; blocks usage entirely during agent runs.
- **High idle CPU** (#6828): Infinite CSS animations cause 18-22% CPU at idle, leading to UI jank and battery drain.
- **Plugin marketplace broken in Docker** (#6782): Users cannot install or update plugins/apps, effectively breaking the extensibility model.
- **Antivirus false positives** (#6847): QwenPaw processes被杀软拦截, creating friction vs. competitors like WorkBuddy.
- **MCP type coercion** (#6839): Numeric string parameters silently converted to integers, breaking downstream API calls.
- **Desktop bloat** (#6866, #6876): Auto-generated files and background task cards clutter the workspace and chat UI.

**Satisfaction Signals:**
- Positive feedback on ReMe memory features and the overall project direction (#6585: "非常不错的项目").
- Users appreciate the transparency around ReMe4 roadmap (#6840).
- The auto-Dream resilience improvement (#6884) addresses a real production pain point.

## 8. Backlog Watch

| Issue | Age | Why It Needs Attention |
|-------|-----|----------------------|
| #4237 | Since May 2026 (3+ months) | In-chat command observability is a quality-of-life feature with no PR; high user demand. |
| #6405 | Since Jul 2026 (1+ month) | MCP "Tool not found" after upgrade affects multiple users; no fix PR. |
| #6814 | Created Aug 8 | SIGBUS on macOS SQLite WAL is a crash bug with no assigned fix; platform-specific but severe. |
| #6828 | Created Aug 8 | 20% idle CPU is a noticeable performance regression; no fix PR despite clear root cause (CSS animations). |
| #6820 | Created Aug 8 | Streaming display not working is a core functionality bug; no fix PR. |
| #6811 | Created Aug 7 | Continuation summary bug blocks reasoning-model users; no fix PR. |
| #6806 / #6807 | Created Aug 7 | Creator plugin broken on Windows — two related issues, no fix PRs; affects plugin ecosystem. |
| #6683 | Created Aug 4 | Plugin install failure due to naming conflict — blocks new plugin adoption. |
| #6813 | Created Aug 8 | `KeyError: '__aiter__'` in auto-title generation — no fix PR; affects chat UX. |

**Overall Project Health:** CoPaw is in an active stabilization sprint ahead of v2.1.0. Development throughput is high (50 PRs in 24h), and several critical bugs have fix PRs already in progress. The main risk areas are the unresolved Console streaming/IME issues, macOS SQLite crash, and Windows plugin failures — all of which could impact the v2.1.0 release quality if not addressed before cutoff.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-11

## 1. Today's Overview

ZeroClaw is experiencing high development velocity with 50 issues and 50 pull requests updated in the last 24 hours, indicating sustained community engagement. The project shows a healthy open/active ratio of 50:0 for issues (no closes today) and 49 open / 1 merged for PRs, suggesting most activity centers on ongoing work rather than resolution. A security audit thread is producing a cluster of high-risk findings across multiple channels, while governance RFCs continue to shape project direction. No new releases were published today.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

**Merged today:**
- **PR #9903** — Hardware: clean up Arduino flash temp dirs using `tempfile::TempDir` for proper lifecycle management ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/9903))

**Notably advanced (open PRs with recent activity):**
- **PR #9867** — CI automation for PR size labels, adding `pr-size-labeler.yml` to recalculate `size:*` labels from GitHub PR metadata ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/9867))
- **PR #9900** — Fix for OpenAI Codex provider retry logic that incorrectly fell back to non-streaming, causing 400 errors ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/9900))
- **PR #9898** — Fix for `zeroclaw status` memory banner resolving the wrong backend label ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/9898))
- **PR #9350** — CLI delivery flags for `cron add/update`, fixing the bug where cron jobs ran in `"none"` mode by default ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/9350))
- **PR #9126** — Plugin config validation with Draft 2020-12 schema enforcement ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/9126))
- **PR #9002** — Gateway fix to keep agent turns alive after WebSocket viewer disconnect ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/9002))

## 4. Community Hot Topics

**Most discussed RFCs and governance items:**
- **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — RFC: Work Lanes, Board Automation, and Label Cleanup (23 comments) — The project's governance workflow is a persistent focus; maintainers and contributors are refining how RFCs and design issues get triaged.
- **[Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)** — RFC: Per-model capability & context-window config (13 comments) — Addresses a practical pain point where provider-family defaults misreport vision support and context windows.
- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — Tracker: Maintainer decision queue for RFCs and design issues (12 comments) — Signals community demand for clearer maintainer responsiveness on design decisions.
- **[Issue #9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)** — RFC: Treat empty WhatsApp Web `allowed_groups` as permit-none (12 comments) — Security-first stance on channel configuration defaults.
- **[Issue #9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)** — RFC: Streamline RFC scope, discussion, voting, and assignment (7 comments) — Community feedback that the current RFC process has become too slow and cumbersome.

**Underlying need:** The community is investing heavily in process maturity — governance RFCs, label automation, and risk classification — alongside hardening security boundaries across channels.

## 5. Bugs & Stability

**Critical (S0 — data loss / security risk):**
- **[Issue #9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)** — Knowledge graph has no per-agent attribution; any agent can read/mutate another's data. In-progress.
- **[Issue #9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855)** — Matrix channel fails to resolve homeserver via `.well-known` delegation. In-progress.
- **[Issue #9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627)** — `git write` verbs bypass risk classifier via global options like `-C` / `--git-dir`. In-progress.

**High severity (S1 — workflow blocked):**
- **[Issue #9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207)** — `web_fetch` returns garbage binary data for compressed responses. In-progress.
- **[Issue #9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425)** — Running SOP jobs have no operator cancellation path from the dashboard. In-progress.
- **[Issue #9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)** — Docker Compose gateway can remain loopback-bound behind a published port. In-progress.
- **[Issue #9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)** — `sops_dir` documented default is not honored by the daemon; SOPs silently never load. Accepted.
- **[Issue #9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391)** — Command audit logging defaults to enabled but writes nothing. In-progress.

**Medium severity (S2):**
- **[Issue #9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)** — Daemon reload signal mismatch: docs tell operators to send SIGUSR1, which kills the daemon instead. Accepted.
- **[Issue #9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796)** — Cron parent help prints invalid examples. Accepted.
- **[Issue #9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562)** — WebChat auto-scroll overrides manual scrolling during streaming. In-progress.

**Audit-related security issues (all high-risk, in-progress):**
- [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) — LINE group messages skip allowlist and pairing handshake
- [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) — Bluesky and Reddit have no sender authorization
- [#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) — Plugin wasi:http egress has no destination policy
- [#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) — Unauthenticated POST /api/pair keys lockout on attacker-supplied header

**Fix PRs in flight:** Multiple audit issues have corresponding fix PRs or are marked in-progress; the security audit is producing concrete remediation work.

## 6. Feature Requests & Roadmap Signals

- **[Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)** — Per-model capability and context-window configuration. Strong community signal; directly affects multi-model deployments.
- **[Issue #9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339)** — Custom CA trust for remote MCP servers. Needed for enterprise/private-network deployments.
- **[Issue #5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)** — Warn when Codex CLI `extra_args` weaken sandbox/policy boundaries.
- **[PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)** — OpenAI chat completions endpoint on the gateway. Would enable broader LLM client compatibility (LangChain, Aider, Continue.dev).
- **[PR #9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222)** — Per-dimension LLM-judge grader for evals. Diagnostic-first, not yet calibrated for gating.
- **[PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)** — Native PowerShell support on Windows.

**Likely next-release candidates:** The OpenAI gateway endpoint (#8486), cron delivery flag fix (#9350), and the Arduino temp dir cleanup (#9903) are the most polished and narrowest in scope. The per-model config RFC (#7100) is also a strong candidate if the design is finalized.

## 7. User Feedback Summary

**Pain points:**
- **Security audit findings** are the dominant concern — multiple channel implementations (Bluesky, Reddit, LINE, WhatsApp) lack sender authorization or pair correctly, and the knowledge graph has no per-agent isolation.
- **Cron jobs silently discarding output** (#9779, #9350) frustrates operators relying on scheduled tasks.
- **WebFetch returning binary garbage** (#9207) breaks web-based agent workflows entirely.
- **Dashboard lacks cancellation** for running SOP jobs (#9425) — operators are trapped once a job starts.
- **Daemon reload documentation is wrong** (#9768), causing operators to accidentally kill the process.
- **WebChat auto-scroll** (#9562) prevents reading conversation history during active agent responses.
- **ZeroCode CLI help prints invalid examples** (#9796) — documentation consistency issues.

**Positive signals:** The project is responding actively — most P1 bugs are marked in-progress, and the security audit is being taken seriously with a high volume of follow-up issues and PRs.

## 8. Backlog Watch

**Long-open items needing maintainer attention:**
- **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — RFC on work lanes and board automation (created 2026-05-20, 23 comments, status: "Ratification deferred / rollout in progress"). Over 2 months open.
- **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — Maintainer decision queue tracker (created 2026-07-04, 12 comments). Reflects community frustration with slow governance decisions.
- **[Issue #9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)** — Streamline RFC process (created 2026-07-28, 7 comments). Direct feedback that the RFC process itself is broken.
- **[Issue #9383](https://github.com/zeroclaw-labs/zeroclaw/issues/9383)** — npm audit failure with 6 high/critical findings (created 2026-07-26). Dependencies not yet resolved.
- **[Issue #5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)** — Codex CLI extra_args sandbox warning (created 2026-04-17, 5 comments). Open for nearly 4 months.
- **[PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)** — Matrix single-message progress drafts (created 2026-06-28, risk: high, size: XL). Large PR pending review.
- **[PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)** — OpenAI chat completions endpoint (created 2026-06-29, risk: high, size: XL). High-demand feature stalled in review.

**Overall health assessment:** The project is in an active hardening phase. A comprehensive security audit has surfaced significant issues across channels and runtime components, and the team is responding with in-progress fixes. Governance process RFCs are accumulating, which suggests the project is scaling and hitting organizational growing pains. The high issue volume (50 updated/24h) with no merges beyond a single PR is a mild concern — it may indicate PR review bottlenecks or a backlog of changes awaiting coordination.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*