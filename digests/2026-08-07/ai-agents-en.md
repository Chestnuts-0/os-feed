# OpenClaw Ecosystem Digest 2026-08-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-07 02:06 UTC

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



# OpenClaw Project Digest — 2026-08-07

## 1. Today's Overview

OpenClaw shows extremely high development velocity with **500 issues and 500 PRs updated** in the last 24 hours. 68 issues were closed and approximately 100 PRs merged/closed, while 432 issues and 400 PRs remain open or active. No new releases were published today. The project is in a heavy stabilization phase, with a significant portion of recent activity centered on fixing P0/P1 regressions in compaction logic, model-specific streaming failures (notably DeepSeek v4 Flash), and channel delivery bugs. The maintenance team is actively engaged across the agent-core, gateway, and channel plugin layers.

## 2. Releases

No new releases were published today. The most recent version context references `2026.7.2-beta.7` and `2026.7.1`, with several regressions traced between these builds.

## 3. Project Progress

**Merged / Closed PRs today:**

| PR | Description | Status |
|---|---|---|
| [#119896](https://github.com/openclaw/openclaw/pull/119896) | `fix(doctor)`: recover terminal NUL archive tails in archived sessions | ✅ Closed |
| [#120088](https://github.com/openclaw/openclaw/pull/120088) | `fix(release)`: isolate private Telegram QA harness from npm candidate tests | ✅ Closed |
| [#116793](https://github.com/openclaw/openclaw/pull/116793) | `refactor(agents)`: centralize immutable execution attribution (stack 2/5) | ✅ Closed |
| [#116204](https://github.com/openclaw/openclaw/pull/116204) | `fix(google)`: accept base64url provider media for Live voice, TTS, video | ✅ Closed |
| [#118601](https://github.com/openclaw/openclaw/pull/118601) | `fix(plugins)`: warn when `registerHook` uses a typed hook event name | ✅ Closed |
| [#117961](https://github.com/openclaw/openclaw/pull/117961) | `fix(canvas)`: serve `Content-Length` on A2UI HEAD responses | ✅ Closed |
| [#118749](https://github.com/openclaw/openclaw/pull/118749) | `fix(gateway)`: make doctor dreaming timestamp comparators NaN-safe | ✅ Closed |

**Key open PRs advancing today:**
- [#120102](https://github.com/openclaw/openclaw/pull/120102) — Treat `NO_REPLY` silent cron replies as non-recovery for error streaks
- [#119549](https://github.com/openclaw/openclaw/pull/119549) — Preserve paragraph boundaries across streamed replies (fixes #42106)
- [#119827](https://github.com/openclaw/openclaw/pull/119827) — Bound ingress `IN` lists below SQLite bind-variable ceiling to unblock stalled queues
- [#120078](https://github.com/openclaw/openclaw/pull/120078) — Preserve configured MCP tools in Codex cron runs (fixes #113475)
- [#116794](https://github.com/openclaw/openclaw/pull/116794) — Propagate attribution across gateway/ACP/embedded/CLI runtimes (stack 3/5)
- [#116795](https://github.com/openclaw/openclaw/pull/116795) — Bind tool policy to execution attribution (stack 4/5)

## 4. Community Hot Topics

**Most commented issues (last 24h activity):**

1. **#75 — Linux/Windows Clawdbot Apps** — [116 comments, 80 👍, CLOSED](https://github.com/openclaw/openclaw/issues/75)
   Long-requested native desktop apps for Linux and Windows. High community demand signals the platform is maturing beyond macOS/iOS/Android.

2. **#116277 — DeepSeek v4 Flash silent reply failure** — [114 comments, CLOSED](https://github.com/openclaw/openclaw/issues/116277)
   DeepSeek v4 Flash silently returns "No reply was generated" for Telegram group messages. Reflects growing user reliance on DeepSeek models and the fragility of non-Anthropic provider integrations.

3. **#7707 — Memory Trust Tagging by Source** — [28 comments, OPEN](https://github.com/openclaw/openclaw/issues/7707)
   Proposes tagging agent memory entries by trust level based on origin to prevent memory poisoning from untrusted content. Security-conscious users are pushing for defensive memory architectures.

4. **#27445 — `announceTarget` for sub-agent completion routing** — [12 comments, 5 👍, OPEN](https://github.com/openclaw/openclaw/issues/27445)
   Enables sub-agent completion announces to route to the parent session as user-message triggers, enabling multi-step workflow orchestration.

5. **#88657 — DeepSeek V4 Flash incomplete turn (payloads=0, tools=2)** — [10 comments, OPEN](https://github.com/openclaw/openclaw/issues/88657)
   Another DeepSeek v4 Flash regression where the model returns `stopReason=stop` without any payloads, breaking tool-call turns.

**Underlying need:** The community is increasingly running OpenClaw in production with diverse model providers (DeepSeek, Ollama, Claude CLI, MiniMax) and channel integrations (Telegram, WhatsApp, Feishu, LINE). Reliability across this expanded surface is the dominant concern.

## 5. Bugs & Stability

**P0 (Critical):**

| Issue | Summary | Fix PR |
|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 migration fails with `no such column: entry_valid`; gateway refuses to start after upgrading to 2026.7.2 | — |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | `sessionEntry.totalTokens` inflation causes premature compaction at 4–8% of context window → data loss | — |

**P1 (High):**

| Issue | Summary | Fix PR |
|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) ✅ | DeepSeek v4 Flash silent reply failure (CLOSED) | — |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` rejected with "thread switched branches" after model completes; stale `expectedLeafEntryId` | — |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | CLI-budget compaction timeout fires far below deadline (4.9s–50s), 100% failure on large sessions | — |
| [#95553](https://github.com/openclaw/openclaw/issues/95553) | Preflight compaction hard-capped at ~60s, ignores `compaction.timeoutSeconds` | — |
| [#86050](https://github.com/openclaw/openclaw/issues/86050) | Gateway buffers claude-cli stream; surfaces only see final assembled message (regression) | — |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | Foreground reply fence cancels delivery of completed replies to earlier concurrent WhatsApp group messages | — |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | Transient LLM/socket errors retried for channels but not at embedded-assistant stage — long turns die whole | — |
| [#109881](https://github.com/openclaw/openclaw/issues/109881) | Bedrock no thinking-signature replay protection; invalid signature permanently bricks Claude 4+ sessions | — |
| [#117445](https://github.com/openclaw/openclaw/issues/117445) | Feishu DM decoded as "?"; ingress spool throws `undefined.catch`; replies=0 | — |
| [#117209](https://github.com/openclaw/openclaw/issues/117209) | `AuthProfileStoreUnreadable` sticky after runtime snapshot publication failure | — |

**P2 (Medium):**

| Issue | Summary |
|---|---|
| [#88079](https://github.com/openclaw/openclaw/issues/88079) ✅ | WebChat reasoning_content not streamed for Kimi Code & DeepSeek Reasoner (regression, partially addressed) |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows vitest teardown EBUSY on agent state DB handle not released |
| [#58139](https://github.com/openclaw/openclaw/issues/58139) | memory-lancedb plugin fails with Windows Docker bind mount |
| [#87756](https://github.com/openclaw/openclaw/issues/87756) | Regression: prompt-launched Lobster workflow hangs on nested `/tools/invoke` |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway cold start regressed ~2.5x from 2026.7.1-beta.1 to 2026.7.2-beta.7 |
| [#119557](https://github.com/openclaw/openclaw/issues/119557) | Chat delta throttle has no trailing flush; withheld chunk waits indefinitely |
| [#86119](https://github.com/openclaw/openclaw/issues/86119) | Orphaned `node server.js` worker processes accumulate after subagent/cron embedded runs |
| [#77625](https://github.com/openclaw/openclaw/issues/77625) | `reasoningDefault=stream` causes infinite reasoning recursion feedback loop |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash incomplete turn in 2026.5.27/28 |
| [#101445](https://github.com/openclaw/openclaw/issues/101445) | Embedded Ollama reports payloads=0 tools=0 for certain prompts |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | bundle-mcp: tool passes policy but agent sessions never bundle it; ToolSearch finds nothing |
| [#87136](https://github.com/openclaw/openclaw/issues/87136) | Compaction absolute token thresholds break when switching models with different context windows |

**Notable regression cluster:** The 2026.7.x beta series introduced multiple compaction-related regressions (#118772, #115546, #95553) and a gateway cold-start regression (#119087). These suggest the compaction and session-state code paths need a dedicated stabilization pass.

## 6. Feature Requests & Roadmap Signals

| Issue | Summary | Comments | Outlook |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) ✅ | Linux/Windows Clawdbot native apps | 116 / 80 👍 | Likely next major platform push |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 28 | Security hardening; may appear in next security-focused release |
| [#27445](https://github

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem
**Date:** 2026-08-07

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape in August 2026 is defined by a **stabilization wave** following the 2026-Q2 model-provider explosion (DeepSeek, Ollama, Bedrock, MiniMax). Projects are shifting from feature-breadth to reliability, with compaction, session state, credential leakage, and channel delivery emerging as cross-cutting concerns. The ecosystem spans large-scale gateways (OpenClaw, IronClaw, Hermes Agent) to lighter weighted frameworks (NanoBot, NanoClaw, CoPaw) and regional players (PicoClaw/LobsterAI serving Chinese-market channels). Project velocity is highly concentrated — six projects show sustained high activity while four report zero recent changes, indicating consolidation pressure on mid-tier efforts.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Open Issues | Release | Health |
|---|---|---|---|---|---|---|
| **OpenClaw** | 432 open / 68 closed | 400 open / ~100 merged | ~100 merged | 432 | None (2026.7.x beta) | 🟡 High velocity, regressing |
| **IronClaw** | 27 open | 50 | 17 merged/closed | 27 | v1.1.0 (2026-08-06) | 🟢 Post-release stabilization |
| **CoPaw** | 34 | 50 | 30 merged/closed | ~17 open | None (2.0.1 stable, 2.1.0 beta) | 🟢 High velocity, healthy closure |
| **ZeroClaw** | 31 | 50 | Multiple merged | Active | None (v0.8.5 stabilization) | 🟡 Active but SOP crisis |
| **Hermes Agent** | ~100 updates | ~40+ | Several merged | Multiple P1 | None | 🟡 High maintenance burden |
| **NanoClaw** | 2 resolved | 14 | 8 merged | Low | None | 🟢 Healthy contributor momentum |
| **NanoBot** | 10 | 17 | 5 merged | Low | None | 🟢 Dense fix cadence |
| **PicoClaw** | 0 | 2 (1 merged) | 1 merged | 0 | None | 🟡 Stable but dormant |
| **LobsterAI** | 5 | 2 | 0 merged | 5 | 2026.8.5.0 | 🔴 Low maintainer engagement |
| **NullClaw** | 0 | 0 | 0 | — | — | ⚫ Inactive |
| **TinyClaw** | 0 | 0 | 0 | — | — | ⚫ Inactive |
| **Moltis** | 0 | 0 | 0 | — | — | ⚫ Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | — | — | ⚫ Inactive |

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale of community engagement** — 500+ issue/PR updates in 24h dwarfs all other projects; the community is large and actively stress-testing the platform.
- **Gateway + agent-core architecture** — OpenClaw's multi-runtime design (gateway/ACP/embedded/CLI) is more mature than single-process competitors (NanoBot, NanoClaw).
- **Channel breadth** — Supports Telegram, WhatsApp, Feishu, LINE, Google Live, and more; broader than IronClaw (Slack/Telegram focus) and far wider than LobsterAI.
- **Desktop ambition** — The #75 Linux/Windows native app issue (116 comments, 80 👍) signals a strategic push into desktop-first personal AI, a space Hermes Agent partially addresses and no other project targets.

**Technical differentiation:**
- OpenClaw's **compaction engine** is the most battle-tested but also the most regression-prone (5+ compaction-related P0/P1 issues in one day).
- Its **attribution stack** (PRs #116793–#116795) is unique — tracking execution provenance across gateways and sub-agents has no peer equivalent.
- **Model-agnostic provider layer** — DeepSeek v4 Flash, Claude CLI, Bedrock, Ollama all supported; peers like IronClaw and CoPaw are more constrained.

**Community size:** OpenClaw has the largest contributor base by an order of magnitude. Hermes Agent is second; NanoBot/NanoClaw have smaller but more responsive communities. LobsterAI and PicoClaw operate with thin maintainer bands.

---

## 4. Shared Technical Focus Areas

| Area | Projects Affected | Specific Needs |
|---|---|---|
| **Compaction / context-window management** | OpenClaw (5 P0/P1), CoPaw (#6726), ZeroClaw (RFC) | Per-model thresholds, streaming delta flush, token-accurate budget tracking |
| **Model-provider reliability** | OpenClaw (DeepSeek v4 Flash), Hermes Agent (Fireworks), CoPaw (DeepSeek reasoning), IronClaw (MiniMax, Qwen) | Silent-reply failures, thinking-mode tag stripping, 400 errors on provider egress |
| **Channel delivery correctness** | OpenClaw (WhatsApp/Feishu), NanoBot (Matrix/Weixin), Hermes Agent (Telegram/Slack), NanoClaw (Telegram), CoPaw (Matrix/OneBot) | Delivery races, stale thread refs, reply-in-thread context, media-only messages |
| **Credential/security hardening** | NanoBot (P1 env leak), ZeroClaw (SOP intent verification), Hermes Agent (child-process env scrub), NanoClaw (credential proxy) | Subprocess credential isolation, per-agent tool gating, allowlist before spawn |
| **Scheduling / cron reliability** | OpenClaw (Codex cron MCP tools), Hermes Agent (flock degradation), NanoBot (cronjob/subagent), NanoClaw (recurring tasks), ZeroClaw (cron update) | Flock contention, failed-task re-arm, subprocess isolation for scheduled jobs |
| **MCP tool stability** | Hermes Agent (stdio crash on null args), CoPaw (periodic unregistration), NanoClaw (Tavily integration), OpenClaw (ToolSearch) | Null-safety, periodic re-registration, policy-attributed tool discovery |
| **Observability / cost tracking** | NanoBot (#5266, 1M-token blind spots), Hermes Agent (#77221–#77223), ZeroClaw (SOP audit) | Per-call token attribution, cost time-series, audit trails for automated turns |
| **Session isolation / security** | NanoBot (#5276/#5278), OpenClaw (#7707 memory trust tagging), ZeroClaw (SOP capability gating) | Per-session filesystem isolation, memory source trust tags, capability scoping |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | Hermes Agent | NanoBot | NanoClaw | CoPaw | ZeroClaw |
|---|---|---|---|---|---|---|---|
| **Architecture** | Gateway + agent-core + channel plugins | Routine-based with Reborn engine | Desktop-first, god-file sharding | WebUI + session-per-model | Skill-centric, upgradeable | AgentScope 2.0 lifecycle | SOP-driven, protocol-governed |
| **Primary users** | Power users, multi-channel operators | DevOps / routine automation | Desktop power users, xAI fans | Researchers, multi-model explorers | Operators, scheduler-heavy workflows | Multi-agent teams, embedding researchers | Governance-focused operators |
| **Channel focus** | Telegram, WhatsApp, Feishu, LINE, Google Live | Slack, WebUI, GitHub | Telegram, Slack, Feishu/Lark (broken) | Matrix, WeChat | Telegram, Chat SDK | Matrix, OneBot, WeChat | Telegram (per-user sessions) |
| **Desktop app** | In development (#75) | Yes (viewer + operator) | Yes (broke in v0.20.0) | WebUI only | WebUI only | Yes (with CI) | N/A |
| **Plugin/skill model** | Hook-based, typed events | MCP-native, IronHub extensions | God-file sharding, plugin expansion | Skill bundles (Qodo removed) | Skill-owned capabilities, Tavily | MCP + embedding providers | RFC-governed, A2A outbound |
| **Multi-agent** | Sub-agent attribution stack | Routine-based sub-agents | Sub-agent via cron | `spawn_subagent` batch bug | Cron + sub-agent reliability | Context protocol alignment | A2ATool RFC |
| **Governance** | Community-driven | Maintainer-led | Maintainer-led + epic sharding | Maintainer-led | Contributor-driven | Active contributor fixes | RFC protocol (Work Lanes) |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (High velocity, high issue volume):**
- **OpenClaw** — Largest ecosystem, but regressing on compaction. The 500/500 update count indicates intense production use exposing edge cases. Health: active but unstable.
- **IronClaw** — Just shipped v1.1.0; post-release stabilization with strong contributor pipeline (operator inspector, channel delivery tool). Health: maturing well.
- **CoPaw** — 50% issue closure rate, 30/50 PRs merged. Dual-track (2.0.x + 2.1.0 beta). Memory/ReMe infrastructure is a differentiator. Health: strong and growing.
- **ZeroClaw** — 50 PRs touched, SOP governance RFCs active. However, the SOP subsystem crisis (8 interrelated P1 issues in 24h) threatens operator trust. Health: active but brittle.

**Tier 2 — Steady Contributors (Moderate velocity, responsive maintainers):**
- **Hermes Agent** — 100 updates/day but heavy maintenance load. God-file sharding is a long-term investment. Desktop regression is a reputational hit. Health: strained but community-sustained.
- **NanoClaw** — 14 PRs, 8 merged, rapid response to #3194 (transactional upgrade fix same-day). Contributor-driven with low maintainer bottleneck. Health: healthy.
- **NanoBot** — 17 PRs, security hardening focus, temporary chat and MST search signals product-market fit. Health: stable and focused.

**Tier 3 — Stabilizing / Quiet (Low velocity):**
- **PicoClaw** — Two PRs in weeks, zero issues. Steady but low engagement. Health: dormant but stable.
- **LobsterAI** — 0 maintainer comments on 5 issues, PRs stale for 4 months. Risk of contributor attrition. Health: at risk.

**Tier 4 — Inactive:**
- **NullClaw, TinyClaw, Moltis, ZeptoClaw** — Zero activity. Likely shelved or absorbed.

---

## 7. Trend Signals

| Trend | Evidence Across Projects | Implication for Developers |
|---|---|---|
| **Provider fragmentation is the dominant bug vector** | DeepSeek v4 Flash (OpenClaw), Fireworks (Hermes), MiniMax (IronClaw), Nova 2 (ZeroClaw), Ollama (OpenClaw) — all producing distinct failure modes | Agent platforms must invest in provider-agnostic error handling, not just integration coverage. Streaming parity and thinking-mode tag stripping are unresolved systemics. |
| **Scheduling reliability is a moat differentiator** | Cron bugs in OpenClaw, Hermes, NanoBot, NanoClaw, ZeroClaw — all independently reported | Operators deploying agents for automation will choose the platform with the most reliable cron. This is a top-3 purchase criterion for production users. |
| **Credential leakage is becoming a security-class concern** | NanoBot P1 env copy (#5269/#5270), Hermes child-process scrub (#77164), ZeroClaw SOP intent verification (#9328), NanoClaw credential proxy (#2705) | Multi-provider agents that spawn subprocesses will face increasing scrutiny. Platforms that solve this cleanly (per-session credential isolation) will gain trust advantages. |
| **Compaction is the silent quality killer** | OpenClaw (5 regressions), CoPaw (tool-role 400s), ZeroClaw (RFC), LobsterAI (per-model context config) | Context management is the hardest unsolved problem. Platforms that ship accurate, per-model compaction with observability will win long-session reliability. |
| **MCP is the plugin standard, but stability is poor** | Hermes (stdio crash), CoPaw (periodic unregistration), OpenClaw (ToolSearch), NanoClaw (Tavily), LobsterAI (stale skills) | MCP adoption is universal but implementations are fragile. Tool-re-registration, null-safety, and policy attribution are the next wave of fixes. |
| **Desktop apps are a maturation signal, not a differentiator** | OpenClaw (#75), Hermes (v0.20.0 regression), CoPaw (desktop CI) | All serious projects are building desktop experiences. The differentiator is reliability — Hermes' v0.20.0 break and OpenClaw's pending Linux/Windows apps show this is hard. |
| **SOP / protocol-governed agents are emerging** | ZeroClaw (RFC-driven governance, Work Lanes, A2ATool), NanoClaw (skill-owned host seams) | The next evolution beyond ad-hoc cron is protocol-defined agent behavior with auditability. Projects investing in SOP foundations now will lead the multi-agent orchestration space. |
| **Observability gaps are blocking production adoption** | NanoBot (1M-token blind spots), Hermes (cost analytics RFCs), ZeroClaw (SOP audit trails) | Token/cost attribution and turn-level observability are table-stakes for enterprise adoption. Platforms without it will lose operators to commercial alternatives. |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-07

## 1. Today's Overview

NanoBot saw **high activity** on 2026-08-07, with 10 issues and 17 PRs updated in the last 24 hours. The project is in a dense fix-and-release cadence, with 5 PRs merged/closed today and a strong focus on security hardening, session management correctness, and WeChat/Matrix channel stability. No new releases were published. The contributor base is active across channels (Matrix, Weixin), the WebUI, and core session logic, suggesting healthy community engagement.

## 2. Releases

No new releases were published today.

## 3. Project Progress

**Merged / Closed PRs (5):**

- **[PR #5261](https://github.com/HKUDS/nanobot/pull/5261)** — Drag sidebar sessions for reordering and structured session mentions (WebUI UX improvement)
- **[PR #5267](https://github.com/HKUDS/nanobot/pull/5267)** — Tighten interactive motion: align transitions to ~220ms, respect reduced-motion preferences (WebUI polish)
- **[PR #5259](https://github.com/HKUDS/nanobot/pull/5259)** — Enforce memory-only temporary sessions, stacking on #5252 (completes the temporary chat feature)
- **[PR #5262](https://github.com/HKUDS/nanobot/pull/5262)** — Reduce WebUI cold-start payload via precompressed gzip assets and chunked React runtime (P1 performance)
- **[PR #5248](https://github.com/HKUDS/nanobot/pull/5248)** — Fix Matrix bot auto-join on Continuwuity by sending non-empty POST body (P2 channel fix)

**Key open PRs advancing features:**

- **[PR #5277](https://github.com/HKUDS/nanobot/pull/5277)** — Responsive model preset detail pane for WebUI
- **[PR #5252](https://github.com/HKUDS/nanobot/pull/5252)** — Temporary chat mode (non-persistent, in-memory sessions)
- **[PR #5234](https://github.com/HKUDS/nanobot/pull/5234)** — Integrate `mst-python` as a metasearch provider (P1)
- **[PR #5253](https://github.com/HKUDS/nanobot/pull/5253)** — Shared interactive project terminal in WebUI

## 4. Community Hot Topics

1. **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)** — Model switching within a session (3 comments)
   Users want per-session model selection parity with commercial SaaS UIs. The current architecture treats the top model as immutable and only falls back to alternatives, which frustrates power users running multi-model workflows.

2. **[Issue #5276](https://github.com/HKUDS/nanobot/issues/5276)** — Session-level temporary file isolation (1 comment)
   A single user raised both this and #5278, signaling strong demand for multi-session security isolation. The global `~/.nanobot/workspace` directory is a shared state bottleneck.

3. **[Issue #5278](https://github.com/HKUDS/nanobot/issues/5278)** — Session history should not live inside agent workspace (0 comments, same author thread as #5276)
   Directly follows up on PR #713's workspace-scoped sessions, pointing out that storing history inside the agent workspace creates a security boundary problem.

4. **[Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)** — Cronjob ends early with subagent spawned (2 comments, open since June)
   A long-standing reliability issue for scheduled multi-agent workflows; users depend on this for automation pipelines.

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|----------|-----------|-------------|------------|
| **P0** | [#5271](https://github.com/HKUDS/nanobot/issues/5271) / [PR #5271](https://github.com/HKUDS/nanobot/pull/5271) | Stale background task saves overwrite session data after `/new` | PR open |
| **P1** | [#5270](https://github.com/HKUDS/nanobot/issues/5270) / [PR #5270](https://github.com/HKUDS/nanobot/pull/5270) | API keys leaked to CLI app subprocesses via `os.environ.copy()` | PR open |
| **P1** | [#5269](https://github.com/HKUDS/nanobot/issues/5269) / [PR #5269](https://github.com/HKUDS/nanobot/pull/5269) | API keys written into process-global `os.environ`, causing cross-provider credential leakage | PR open |
| **P1** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Massive token consumption with no visibility into per-call costs | No fix yet |
| **P2** | [#5273](https://github.com/HKUDS/nanobot/issues/5273) / [PR #5272](https://github.com/HKUDS/nanobot/pull/5272) | Session retention trimming drops proactive `_channel_delivery` messages | PR open |
| **P2** | [#5264](https://github.com/HKUDS/nanobot/issues/5264) / [PR #5268](https://github.com/HKUDS/nanobot/pull/5268) | `/api/sessions/{key}/messages` omits `media_urls` for files outside media root | PR open |
| **P2** | [#5247](https://github.com/HKUDS/nanobot/issues/5247) / [PR #5248](https://github.com/HKUDS/nanobot/pull/5248) | Matrix bot fails to auto-join on Continuwuity homeserver (closed via #5248) | **Fixed** |
| **P2** | [#5263](https://github.com/HKUDS/nanobot/pull/5263) | Weixin channel hardening (protocol, streaming, login) | PR open |
| **P2** | [#5265](https://github.com/HKUDS/nanobot/pull/5265) | Non-finite number parameters (`NaN`, `Infinity`) accepted by tool casting | PR open |

The two P1 security PRs (#5269, #5270) from the same author address a systemic credential leakage issue across providers and CLI subprocesses — these are likely to land together in the next patch.

## 6. Feature Requests & Roadmap Signals

- **Temporary / ephemeral chat** ([PR #5252](https://github.com/HKUDS/nanobot/pull/5252), [PR #5259](https://github.com/HKUDS/nanobot/pull/5259)) — In-memory sessions with no persistence. Strong signal that users want quick, disposable chat without cluttering history.
- **Metasearch provider (MST)** ([PR #5234](https://github.com/HKUDS/nanobot/pull/5234), P1) — Aggregating DuckDuckGo, Google, Brave, Bing via Reciprocal Rank Fusion. Indicates demand for richer web search beyond single-engine providers.
- **Shared project terminal** ([PR #5253](https://github.com/HKUDS/nanobot/pull/5253)) — Persistent PTY shared between WebUI and agent. Signals a push toward dev-oriented, interactive workflows.
- **Session-level file isolation** ([Issue #5276](https://github.com/HKUDS/nanobot/issues/5276)) — Users running multiple sessions simultaneously need sandboxed temporary files, not a shared workspace.
- **Responsive model preset UI** ([PR #5277](https://github.com/HKUDS/nanobot/pull/5277)) — Improving model selection ergonomics on various screen sizes.
- **Token consumption logging** ([Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)) — Observability gap; users report burning ~1M tokens in 2 hours with no attribution. This is likely to appear in a future release as a diagnostics feature.

**Most likely in next release:** The temporary chat mode, MST provider, and security hardening PRs all carry P1 priority and are near completion.

## 7. User Feedback Summary

- **Pain point — model switching:** Users expect to change models mid-session via the UI (like ChatGPT/Claude). The current top-model lock is a friction point ([#5198](https://github.com/HKUDS/nanobot/issues/5198)).
- **Pain point — token bill shock:** No per-call token logging makes cost attribution impossible; users report million-token spikes with no visible activity ([#5266](https://github.com/HKUDS/nanobot/issues/5266)).
- **Pain point — session isolation:** Multi-session users need filesystem and history separation; the global workspace model creates cross-session data leakage risk ([#5276](https://github.com/HKUDS/nanobot/issues/5276), [#5278](https://github.com/HKUDS/nanobot/issues/5278)).
- **Satisfaction — WeChat/Matrix channels:** Active hardening work and quick fixes (Continuwuity join, Weixin protocol alignment) show the team is responsive to channel-specific bugs.
- **Satisfaction — WebUI UX:** Drag-to-reorder sessions, temporary chat, and motion polish indicate the WebUI is maturing as a first-class interface.

## 8. Backlog Watch

| Issue | Age | Risk |
|-------|-----|------|
| [#4290](https://github.com/HKUDS/nanobot/issues/4290) — Cronjob ends early with subagent | ~2 months | High — breaks automated multi-agent workflows |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) — Per-session model switching | ~7 days | Medium — UX gap vs. commercial offerings |
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) — Token consumption logging | ~1 day | Medium — no fix yet, but growing user demand |
| [#5275](https://github.com/HKUDS/nanobot/issues/5275) — Matrix reply-in-thread context isolation | ~1 day | Low — feature request, no PR yet |
| [#5274](https://github.com/HKUDS/nanobot/issues/5274) — Matrix reply-as-reply instead of top-level | ~1 day | Low — same author as #5275, channel polish |

**Maintainer attention recommended:** Issue #4290 has been open since June with no fix PR and directly impacts production cron-based agent workflows. Issue #5198 is a frequent usability complaint that could be addressed with a targeted UI change.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-07

## 1. Today's Overview

Hermes Agent is in a period of high maintenance velocity, with 100 issue/PR updates in the last 24 hours and a strong refactoring push underway. The most visible driver is a repo-wide **god-file sharding epic** targeting decomposition of monolithic files across the codebase. Several P1 and P2 bugs were addressed today, including a critical desktop regression that turned the app into a viewer-only shell (v0.20.0), a SessionDB file-descriptor leak, and Telegram gateway wedging on fatal disconnect. No new releases were published today, though multiple PRs were merged/closed, suggesting the team is batching fixes toward an upcoming release.

## 2. Releases

*No new releases today.*

## 3. Project Progress

**Merged / Closed PRs (today):**

| PR | Description |
|---|---|
| [#80677](https://github.com/NousResearch/hermes-agent/issues/80677) | **Desktop** — Fixed close-confirmation dialog to guard only the last chat window, allowing secondary windows to close immediately. |
| [#80422](https://github.com/NousResearch/hermes-agent/issues/80422) | **Fireworks** — User-agent fix for the Fireworks AI provider. |
| [#80702](https://github.com/NousResearch/hermes-agent/issues/80702) | **Desktop** — Fixed live rendering of agent message reactions (previously required reload). |
| [#80699](https://github.com/NousResearch/hermes-agent/issues/80699) | **Desktop / Remote** — Exposed desktop tools (pane, in-app browser, reactions) to remote and cloud backend connections; previously gated behind `HERMES_DESKTOP=1`. |

**Notable open PRs advancing features/fixes:**

- [#80706](https://github.com/NousResearch/hermes-agent/issues/80706) **[P1]** — Fixes a SessionDB SQLite connection leak (~490 leaked handles) in Desktop/`serve --isolated` backends.
- [#80703](https://github.com/NousResearch/hermes-agent/issues/80703) **[P1]** — Recovers cron jobs lost due to `jobs.json` flock degradation across processes.
- [#80700](https://github.com/NousResearch/hermes-agent/issues/80700) **[P1]** — Recovers Telegram gateway from fatal-disconnect wedges by queuing retries before disconnect awaits.
- [#80701](https://github.com/NousResearch/hermes-agent/issues/80701) — Caps streaming response lifetime (default 30 min) to prevent infinite drip-fed streams.
- [#80696](https://github.com/NousResearch/hermes-agent/issues/80696) **[P1]** — Prevents reference-only context-compaction handoffs from becoming the active turn and resuming stale work.
- [#80633](https://github.com/NousResearch/hermes-agent/issues/80633) — Adds `auth_type: none` support for unauthenticated provider profiles.
- [#77428](https://github.com/NousResearch/hermes-agent/issues/77428) — Fixes `hermes doctor` false-positive "Venv entry point not found" on environment-installed entry points.
- [#80704](https://github.com/NousResearch/hermes-agent/issues/80704) — Bounds Slack channel-directory resolution to prevent uncapped serial API calls on long-lived installs (911+ channels).

## 4. Community Hot Topics

| Issue | Comments | Topic |
|---|---|---|
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | 51 | **Epic: Shard all 20 god files** — repo-wide decomposition policy |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | 27 | **Plugin Interface Expansion** — community-driven plugin roadmap |
| [#78645](https://github.com/NousResearch/hermes-agent/issues/78645) | 19 | Shard `agent/context_compressor.py` (6,789 lines) |
| [#80424](https://github.com/NousResearch/hermes-agent/issues/80424) | 9 | **Grok/xAI Feature Parity Campaign** — full xAI platform alignment |
| [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) | 8 | **v0.20.0 Desktop regression** — bottom panel missing (viewer-only shell) |

**Analysis:** The dominant theme is **codebase health via god-file decomposition** — contributors are actively sharding massive files (`auth.py` at 9,180 lines, `context_compressor.py` at 6,789 lines, Telegram `adapter.py` at 10,147 lines) under a standing 2026-08 policy. The Feishu bug cluster (see §5) and the desktop regression are the most painful user-facing topics. The xAI parity campaign signals a strategic push to match the official xAI developer platform surface.

## 5. Bugs & Stability

### P1 (Critical)
| Issue | Summary | Fix PR |
|---|---|---|
| [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) | **v0.20.0 regression:** Desktop bottom operation panel missing; app becomes viewer-only shell | — |
| [#80706](https://github.com/NousResearch/hermes-agent/issues/80706) | SessionDB SQLite connection leak (~490 handles) in Desktop/`serve --isolated` | [PR #80706](https://github.com/NousResearch/hermes-agent/pull/80706) |
| [#80703](https://github.com/NousResearch/hermes-agent/issues/80703) | Cron jobs disappear from `jobs.json` due to flock degradation | [PR #80703](https://github.com/NousResearch/hermes-agent/pull/80703) |
| [#80700](https://github.com/NousResearch/hermes-agent/issues/80700) | Telegram gateway wedges on fatal disconnect with no retry | [PR #80700](https://github.com/NousResearch/hermes-agent/pull/80700) |
| [#80696](https://github.com/NousResearch/hermes-agent/issues/80696) | Reference-only compaction handoff becomes active turn, resuming stale work | [PR #80696](https://github.com/NousResearch/hermes-agent/pull/80696) |

### P2 (High)
| Issue | Summary | Fix PR |
|---|---|---|
| [#79339](https://github.com/NousResearch/hermes-agent/issues/79339) | `MemoryProvider.sync_turn()` never called in v0.20; external memory backends silently stop receiving turns | — |
| [#80646](https://github.com/NousResearch/hermes-agent/issues/80646) | `agent_context` hardcoded to `"primary"`; cron/flush/subagent context-skip logic is dead code | — |
| [#80259](https://github.com/NousResearch/hermes-agent/issues/80259) | Message reactions gated off for remote-desktop sessions | — |
| [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) | MCP stdio bridge crashes with `TypeError` when `args: null` in config | — |
| [#79628](https://github.com/NousResearch/hermes-agent/issues/79628) | `use_gateway: true` discards valid direct credentials when Tool Gateway is unauthenticated | — |
| [#78645](https://github.com/NousResearch/hermes-agent/issues/78645) | `context_compressor.py` god file (6,789 lines) — refactor in progress | [Issue #78645](https://github.com/NousResearch/hermes-agent/issues/78645) |

### Feishu/Lark Bug Cluster (recurring, P2)
| Issue | Summary |
|---|---|
| [#7675](https://github.com/NousResearch/hermes-agent/issues/7675) | Card interaction events treated as `/card` command; approval buttons not working; no streaming card reply |
| [#13924](https://github.com/NousResearch/hermes-agent/issues/13924) | Approval buttons return error `220340` |
| [#25886](https://github.com/NousResearch/hermes-agent/issues/25886) | Error `200343` on permission approval cards |
| [#38305](https://github.com/NousResearch/hermes-agent/issues/38305) | Error `200340` persists in v0.15.2; PR #10256 unmerged |
| [#10073](https://github.com/NousResearch/hermes-agent/issues/10073) | Mobile: approval card returns error `200340` |

**Note:** The Feishu approval-button bugs span multiple error codes (200340, 200343) and have persisted across multiple versions. PR #10256 is reportedly the correct fix but remains unmerged — this cluster is a significant stability concern for Chinese-market users.

### Security (P3, ongoing)
| Issue | Summary |
|---|---|
| [#77164](https://github.com/NousResearch/hermes-agent/issues/77164) | Child-process env scrub relies on name-shape heuristic; non-credential-shaped secrets leak to children |
| [#77484](https://github.com/NousResearch/hermes-agent/issues/77484) | Emission gaps: `process(list)` returns raw output with no redaction; `*_KEY` regex miss; control-char split issues |
| [#77162](https://github.com/NousResearch/hermes-agent/issues/77162) | Exact-value applied-secret redaction missing on tool-result → provider egress path |
| [#62808](https://github.com/NousResearch/hermes-agent/issues/62808) | **PR open:** Opt-in allowlist for MCP stdio commands before spawn |

## 6. Feature Requests & Roadmap Signals

| Issue / PR | Description |
|---|---|
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | **Plugin Interface Expansion** — community-ideas tracking issue for July 2026 |
| [#80424](https://github.com/NousResearch/hermes-agent/issues/80424) | **Grok/xAI Feature Parity Campaign** — full platform alignment (Models, Chat, Function Calling, Reasoning, Streaming, Imagine, Voice/TTS) |
| [#77221](https://github.com/NousResearch/hermes-agent/issues/77221) | **Desktop token/cost analytics** — metering exists in core but no UI surface |
| [#77223](https://github.com/NousResearch/hermes-agent/issues/77223) | Surface included/estimated/unknown cost buckets in aggregate views |
| [#77222](https://github.com/NousResearch/hermes-agent/issues/77222) | Per-day token/cost time-series aggregation in InsightsEngine |
| [#70849](https://github.com/NousResearch/hermes-agent/issues/70849) | Per-job `deliver_profile` for multiplexed gateway cron delivery |
| [#80708](https://github.com/NousResearch/hermes-agent/issues/80708) | **Bundled `grill-me` skill** — adversarial plan interview (salvages #43694) |
| [#80633](https://github.com/NousResearch/hermes-agent/issues/80633) | `auth_type: none` for no-auth provider profiles |
| [#80627](https://github.com/NousResearch/hermes-agent/issues/80627) | `agent_passthrough_commands` + clearable Telegram menu for `/start` onboarding |

**Prediction for next release:** The security emission-gap fixes (#77164, #77484, #77162), the SessionDB leak fix (#80706), the desktop regression fixes (#80677, #80702, #80699), and the streaming lifetime cap (#80701) are all PR-ready and likely to ship. The cost-analytics features (#77221–#77223) may appear as a set if the desktop PR pipeline is fast enough.

## 7. User Feedback Summary

**Pain points:**
- **Desktop v0.20.0 broke core UX** — the bottom operation panel (Command Center, Gateway controls, Sub-agent status) disappeared, making the app a viewer-only shell. This is the most urgent user complaint.
- **Feishu/Lark approval cards are broken** across all variants (desktop, mobile, web) with multiple error codes. Users are forced to type `/approve session` as a workaround. This has persisted since at least v0.15.2.
- **External memory providers silently stop working** after upgrade to v0.20 — `sync_turn()` is never called, with no error or log.
- **MCP configs with `args: null` crash the bridge** on every connection attempt, creating a connecting/parked loop.
- **Desktop tools unavailable on remote/cloud connections** — the in-app browser, pane, and reaction tools were stripped from the schema when connecting to a plain URL gateway or Hermes Cloud.

**Satisfaction signals:**
- Active community contributions on god-file sharding and Telegram/Slack gateway improvements.
- The `grill-me` adversarial interview skill being merged shows responsive feature curation.
- Auth flexibility improvements (`auth_type: none`, per-job deliver profiles) address real multi-tenant deployment needs.

## 8. Backlog Watch

| Issue | Days Open | Why It Needs Attention |
|---|---|---|
| [#38305](https://github.com/NousResearch/hermes-agent/issues/38305) | ~96 | PR #10256 (Feishu 200340 fix) unmerged for 3+ months; blocking Chinese-market users |
| [#41331](https://github.com/NousResearch/hermes-agent/issues/41331) | ~61 | IMAP/SMTP login user hardcoded to `EMAIL_ADDRESS`; breaks custom-domain setups |
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | 3 | God-file sharding epic — 20 files target, high comment count signals community investment; needs sustained maintainer oversight |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | 24 | Plugin Interface Expansion — community ideas tracking; needs prioritization for next release cycle |
| [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) | 2 | Desktop v0.20.0 regression — no fix PR yet; critical for desktop users |
| [#79339](https://github.com/NousResearch/hermes-agent/issues/79339) | 2 | Memory provider `sync_turn` bug — no fix PR yet; silently breaks external memory backends |
| [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) | 1 | MCP stdio bridge crash on `args: null` — no fix PR yet; blocks users with nullable MCP configs |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-07

---

## 1. Today's Overview

PicoClaw activity on 2026-08-07 was **low**, with zero new issues and zero new releases reported in the past 24 hours. Two pull requests were updated recently (both on 2026-08-06): one merged an enhancement to QQ Channel attachment support, and one remains open proposing a configurable default model fallback chain. The project appears to be in a steady-state period with incremental feature development rather than urgent bug-fixing or release cycles.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The project does not appear to have an active release cadence currently, which may indicate a focus on incremental PR-driven development ahead of a future version bump.

---

## 3. Project Progress

| PR | Status | Summary |
|----|--------|---------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | ✅ **Merged** | Enhanced QQ Channel support — parsing emoji structures, handling incoming voice/image/video/file messages, and replying with local attachments (upload-before-send). Prioritizes Markdown replies with fallback. Domain: `channel`, Language: `go` |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 🔵 **Open** | Introduces a configurable default fallback chain for LLM models via the web UI and backend API. Users can set a primary model, define fallbacks, reorder the chain, and persist configuration. Domain: `models` |

**Key takeaway:** Development is advancing multi-platform channel support (QQ Channel) and improving model orchestration UX — both aligned with making PicoClaw more robust for diverse deployment scenarios.

---

## 4. Community Hot Topics

- **[PR #1349](https://github.com/sipeed/picoclaw/pull/1349)** — QQ Channel attachment support. **0 comments, 0 reactions.** This PR addresses a clear community need for richer QQ integration beyond text-only messaging, particularly for Chinese-language users who rely on QQ as a primary communication channel. The priorization of Markdown with graceful fallback reflects practical deployment concerns.

- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** — Configurable model fallback chain. **0 comments, 0 reactions.** This responds to a recurring pain point: users want resilient AI routing where a primary model can automatically fall back to alternatives without manual intervention. The web UI + API persistence approach suggests demand for both power-user and casual-user configurability.

Both items are relatively quiet on engagement, which may indicate either a smaller active community or that PRs are being reviewed asynchronously.

---

## 5. Bugs & Stability

**No bug reports, crashes, or regressions** were raised in the last 24 hours. The issue count is zero, which is a positive signal for stability but should be interpreted cautiously given the low overall activity volume. No urgent stability concerns are evident.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|----------------------------|
| Configurable model fallback chains | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) | **High** — PR is open with a complete UI + API implementation; likely imminent |
| Expanded QQ Channel media support | [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) | **High** — already merged |
| Broader channel attachment types | [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) | **Medium** — may inspire follow-up PRs for other channels |

The roadmap signal is clear: **multi-platform channel richness** and **model resilience** are the current priorities.

---

## 7. User Feedback Summary

- **QQ Channel users** have a demonstrated need for full-media support (voice, image, video, files) — PR #1349 directly addresses this. The emphasis on Markdown-first replies with fallback suggests users encountered formatting issues in prior implementations.
- **Model-configuration users** want more control over fallback behavior without editing config files manually — PR #3200's web UI approach signals this demand.
- Overall satisfaction appears stable; no negative feedback or complaints surfaced in the current window.

---

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) | Open since 2026-07-01 (~37 days) | A feature-complete PR with no merge activity in nearly a month warrants maintainer attention. If reviews are pending, a nudge may help. |
| No issues open | — | Zero open issues is unusual for an active open-source project and may indicate either excellent maintenance or a community that doesn't file issues regularly. |

---

**Project Health Assessment:** 🟡 **Stable but low-velocity.** No critical bugs, two meaningful PRs in flight (one merged, one awaiting review), and clear roadmap direction. The extended open duration of PR #3200 is the primary item to watch.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-07

---

## 1. Today's Overview

NanoClaw (nanocoai/nanoclaw) is showing sustained contributor momentum with **14 PRs updated** in the last 24 hours and **2 issues resolved**, reflecting a healthy open development rhythm. The project shipped eight merged/closed PRs today, spanning scheduling reliability fixes, Telegram routing improvements, credential infrastructure hardening, and cleanup of deprecated skills. A critical open issue (#3194) flags a transactional integrity gap in the `/update-nanoclaw` command, and a corresponding fix PR (#3195) is already open — suggesting the team is moving quickly to close the loop. No new releases were published in this window.

---

## 2. Releases

No new releases were published during this reporting period.

---

## 3. Project Progress

**Merged / Closed PRs (8):**

| PR | Type | Summary |
|---|---|---|
| [#2213](https://github.com/nanocoai/nanoclaw/pull/2213) | Fix | Accept media-only messages (photo/video/file without caption) on Telegram and other Chat SDK channels |
| [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) | Fix | Re-arm recurrence for permanently failed scheduled tasks (`getCompletedRecurring` → `getFinishedRecurring`) |
| [#2644](https://github.com/nanocoai/nanoclaw/pull/2644) | Fix | Detect reply-to-bot in Telegram `extractReplyContext` via `ReplyContext.isReplyToBot` |
| [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) | Fix | Surface permanently-failed scheduled tasks as user notices instead of silent log entries |
| [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) | Fix | Engage pattern/mention wirings on direct address (@mention, DM, reply-to-bot) |
| [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | Refactor | Remove stale Qodo and Google MCP skills |
| [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) | Fix | Split pre-flight from credentials so `/update-skills` can refresh code independently |
| [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) | Fix | Namespace user IDs by channel-type prefix instead of bare colon |

**Key takeaways:** The project is investing heavily in **scheduling reliability** (two PRs from yairixStudio), **Telegram channel fidelity** (three PRs), and **credential/upgrade hygiene** — all indicating maturation of the platform's operational backbone.

**Open PRs awaiting review (6):**

- [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) — Fix `use-native-credential-proxy` to actually bypass the OneCLI gateway
- [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) — Add `--rw` flag to `groups config add-mount`
- [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) — **New feature:** Tavily MCP tool skill
- [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) — Make NanoClaw upgrades transactional (responds to #3194)
- [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) — Add host seams for skill-owned capabilities
- [#3193](https://github.com/nanocoai/nanoclaw/pull/3193) — Update Chat SDK for rich messages on Telegram

---

## 4. Community Hot Topics

### Most Discussed / Impactful Items

1. **[Issue #3194](https://github.com/nanocoai/nanoclaw/issues/3194)** — *`/update-nanoclaw` can stamp success without a recoverable cutover*
   - **Author:** glifocat · Open · Created 2026-08-06
   - **Analysis:** This is the highest-severity open issue. It identifies a real data-integrity risk: the update command changes the running checkout before validation passes, and the rollback point protects Git but not the SQLite database, gitignored config, or external components. This directly impacts self-hosted operators who rely on `/update-nanoclaw` for zero-downtime upgrades. A fix PR (#3195) is already open.

2. **[Issue #3171](https://github.com/nanocoai/nanoclaw/issues/3171)** — *Qodo skills depend on an integration nothing sets up*
   - **Author:** glifocat · Closed 2026-08-06
   - **Analysis:** Users were hitting dead-end configurations where bundled Qodo skills required a SaaS API key with no setup path. Resolved by removing the stale skills (#3172). Reflects a community need for **batteries-included, zero-config skill bundles**.

3. **[PR #2213](https://github.com/nanocoai/nanoclaw/pull/2213)** — *Accept media-only messages*
   - **Analysis:** Photo/video/file messages without captions were silently dropped. This is a high-visibility bug for Telegram users who expect full media support. Its long open duration (created May 2026, closed Aug 2026) suggests it was deprioritized until a contributor picked it up.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|---|---|---|---|
| **High** | [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) — `/update-nanoclaw` non-transactional cutover | Open | Update can leave SQLite/config in an inconsistent state. **Fix PR: [#3195](https://github.com/nanocoai/nanoclaw/pull/3195)** |
| **Medium** | [#2213](https://github.com/nanocoai/nanoclaw/pull/2213) — Media-only messages silently dropped | Closed (merged) | Regex in `chat-sdk-bridge.ts` required text; now accepts media-only payloads |
| **Medium** | [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) — Pattern wirings ignored @mentions/DMs | Closed (merged) | Direct-address engagement was broken for keyword-based wirings |
| **Medium** | [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) — Failed recurring tasks never re-armed | Closed (merged) | `getCompletedRecurring` only considered `completed` rows, not `failed` |
| **Low** | [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) — User ID namespace collision | Closed (merged) | Bare-colon user IDs could collide across channels; now prefixed by channel type |

**Regressions:** None reported in this window.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Assessment |
|---|---|---|
| **Tavily MCP tool integration** | [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) (open) | Search/answer capability — aligns with the project's skill-centric architecture. Likely to ship in next release if merged. |
| **Rich message support on Telegram** | [#3193](https://github.com/nanocoai/nanoclaw/pull/3193) (open) | Chat SDK update for richer message types — indicates growing Telegram channel maturity. |
| **Host seams for skill-owned capabilities** | [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) (open) | Architectural refactor to let skills declare their own host dependencies — suggests a move toward more modular, self-contained skills. |
| **`--rw` flag for `groups config add-mount`** | [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) (open) | Operational improvement for volume mount configuration — low-visibility but useful for self-hosted operators. |
| **Native credential proxy bypass** | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) (open, 2-month stale) | Security/infrastructure fix — long-open PR warrants maintainer attention. |

**Prediction:** The next release will likely include the Tavily MCP skill (#3190), Telegram rich messages (#3193), and the scheduling/Telegram routing fixes already merged. The transactional upgrade fix (#3195) should also ship given its severity.

---

## 7. User Feedback Summary

**Pain points expressed:**

- **Upgrade fragility:** Users running `/update-nanoclaw` in production environments need confidence that a failed update won't corrupt the running state. Issue #3194 captures this anxiety directly.
- **Dead skill bundles:** The Qodo skills (#3171) frustrated users who encountered them as defaults but had no path to configure them — resolved by removal, but signals a need for better skill discoverability and configuration guidance.
- **Telegram message gaps:** Media-only messages (#2213) and reply-to-bot detection (#2644, #2643) being broken impaired the core chatbot experience for Telegram users, particularly in group and DM contexts.
- **Silent scheduling failures:** Permanently failed scheduled tasks (#2678, #2679) going unnoticed was a reliability gap for operators relying onNanoClaw for automated workflows.

**Satisfaction signals:**
- Active contributor participation (multiple distinct authors merging PRs)
- Rapid response to the upgrade integrity issue (fix PR opened same day as the bug report)
- Cleanup of stale dependencies (Qodo/Google MCP) reduces maintenance burden on users

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) — Native credential proxy bypass | Open since 2026-06-07 (~2 months) | Medium | Maintainer review — security-relevant fix sitting idle |
| [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) — Non-transactional upgrades | Open since 2026-08-06 | **High** | Merge #3195 promptly; this is a production integrity risk |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) — Host seams for skills | Open since 2026-08-04 | Low-Medium | Architectural PR — needs careful review, but unblocks future skill development |
| [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) — `--rw` mount flag | Open since 2026-07-29 | Low | Small operational improvement; low risk to merge |

**Overall Project Health: 🟢 Healthy.** Active contributor base, rapid bug response, clear architectural direction toward modular skills and reliable scheduling. The primary risk is the transactional upgrade gap (#3194/#3195) which, if left unresolved, could erode trust among self-hosted operators.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-07

## 1. Today's Overview

IronClaw continues its highest-velocity period since the 1.1.0 stable release, with 50 issues and 50 PRs updated in the last 24 hours. The project is in a strong post-release stabilization phase: 17 PRs merged/closed and several major inspector/diagnostics features shipped, while QA-driven bug volume remains high (27 open issues). Activity is heavily concentrated around routine reliability, Slack delivery correctness, and operator observability — suggesting the 1.1.0 feature surface is now being stress-tested in production-like environments.

## 2. Releases

**ironclaw v1.1.0** (released 2026-08-06) — First stable release since 1.0.0, promoting `1.1.0-rc.1` with additional fixes. Headline capabilities:

- **MCP extension reach**: register arbitrary hosted MCP servers
- **IronHub deep links**: install extensions directly from links
- **Durable file attachments**: cross-channel persistence
- **Slack delivery tool**: two-lane model for conversation lifecycle + notification channels

No breaking changes noted in release notes. Migration guidance is minimal; users on `1.1.0-rc.1` should see a straightforward upgrade.

## 3. Project Progress

**Merged / Closed PRs (today):**

| PR | Author | Summary |
|---|---|---|
| [#7235](https://github.com/nearai/ironclaw/pull/7235) | italic-jinxin | Operator inspection API + live diagnostic stream (closed after merge) |
| [#7303](https://github.com/nearai/ironclaw/pull/7303) | henrypark133 | Fix: install `curl` in Docker so orchestrator healthchecks pass |
| [#7289](https://github.com/nearai/ironclaw/pull/7289) | serrrfirat | Fix: sanitize libSQL FTS queries for natural-language recall |
| [#7259](https://github.com/nearai/ironclaw/pull/7259) | thisisjoshford | Docs: enforce publication boundary, consolidate internal docs under `docs/internal/` |

**Key work advancing (open PRs):**

- **Inspector observability suite** (#7236, #7277, #7239): debug panel shell, model-call statistics, prompt inspection tab — all open but actively developed.
- **Channel delivery tool** (#7157): two-lane Slack/webui delivery model, implementing the approved design spec.
- **Private MCP registration** (#7253): keeps hosted-MCP definitions scoped to the registering user, definition-only (no activation or publication).
- **Nostr WASM host functions** (#7184): `nostr-sign-event` for BIP-340 Schnorr signing in the WASM sandbox.
- **Docker/Railway sandbox profiles** (#7214): explicit tenant-scoped sandbox profiles for deployment.

## 4. Community Hot Topics

**Most-commented open issues:**

1. **[ISSUE #5553](https://github.com/nearai/ironclaw/issues/5553)** — Approval notifications disappear instead of persisting in notification history (4 comments). *Underlying need: reliable human-in-the-loop approval workflows for automations.*
2. **[ISSUE #5702](https://github.com/nearai/ironclaw/issues/5702)** — GitHub issue search/create fails with HTTP 403 (4 comments). *Underlying need: authenticated GitHub integration must respect token scoping.*
3. **[ISSUE #5522](https://github.com/nearai/ironclaw/issues/5522)** — Reborn routine fails reading Slack DMs; missing capability + retry loop (3 comments). *Underlying need: capability declaration must be discoverable before routine execution.*

**Most-commented closed issues (recently resolved):**

4. **[ISSUE #3533](https://github.com/nearai/ironclaw/issues/3533)** — Telegram auto-setup broken in v0.28.1 (3 comments, closed).
5. **[ISSUE #5701](https://github.com/nearai/ironclaw/issues/5701)** — Activity panel hides tool details during active run (3 comments, open).
6. **[ISSUE #5834](https://github.com/nearai/ironclaw/issues/5834)** — Slack disconnect request incorrectly rejected (3 comments, open).

**Trend**: Notification reliability, Slack integration correctness, and real-time activity visibility are the dominant community concerns.

## 5. Bugs & Stability

**P1 Bugs:**

| Issue | Title | Status | Fix PR |
|---|---|---|---|
| [#5456](https://github.com/nearai/ironclaw/issues/5456) | Routine runs fail with runner lease expiration (90s threshold too aggressive) | OPEN | — |
| [#5877](https://github.com/nearai/ironclaw/issues/5877) | Slack notification delivered to wrong user | CLOSED | — |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | Telegram setup broken in v0.28.1 | CLOSED | — |

**P2 Bugs (active):**

| Issue | Title | Status | Notes |
|---|---|---|---|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear | OPEN | No fix PR yet |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub 403 on issue search/create | OPEN | Auth scope issue |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | Activity panel doesn't update in real time | OPEN | UX regression |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Slack disconnect rejected | OPEN | Integration bug |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | Routine fails "No thread attached" on scheduled runs | OPEN | Systemic; affects `ironclaw-issues-slack-summary` |
| [#5508](https://github.com/nearai/ironclaw/issues/5508) | Slack delivery target not found despite active connection | OPEN | State desync |
| [#5776](https://github.com/nearai/ironclaw/issues/5776) | Long-output prompt → timeout → generic "invalid result" | OPEN | Error degradation |
| [#5838](https://github.com/nearai/ironclaw/issues/5838) | Context compaction error after successful tool execution | CLOSED | Fix PR #7289 addresses related FTS recall |
| [#5552](https://github.com/nearai/ironclaw/issues/5552) | Run fails "invalid result" after multiple tool failures | OPEN | Error message opacity |

**Regression signals**: The "invalid result" generic error (#5552, #5776) appears in multiple related forms — a pattern worth monitoring as a potential shared root cause in the Reborn failure path.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|---|---|---|
| **Inspector / live diagnostics** | PRs #7236, #7277, #7239, #7235 | High — already in progress, operator-facing |
| **Explicit channel delivery tool** | PR #7157, design spec `2026-07-27` | High — implements approved roadmap item |
| **Nostr WASM host functions** | PR #7184 | Medium — sandbox feature, may land in minor |
| **Private MCP registration** | PR #7253 | High — security hardening, definition-only scope |
| **Docker/Railway sandbox profiles** | PR #7214 | Medium — deployment infrastructure |
| **OAuth sign-in above gateway token** | PR #7304 | Low — UX polish, likely next patch |
| **GitHub auth scope fix** | Issue #5702 | Medium — bug fix, but signals demand for better GitHub integration |

**Predicted next release focus**: Inspector observability features, Slack delivery reliability fixes, and MCP registration hardening.

## 7. User Feedback Summary

**Pain points:**

- **Notification reliability**: Approval notifications flashing and disappearing (#5553) breaks human-in-the-loop workflows — the most upvoted discussion area.
- **Slack integration fragility**: Three distinct Slack bugs (#5834 disconnect rejection, #5508 target not found, #5877 wrong-user delivery, #5836 no thread attached) indicate the Slack connection state machine has consistency issues.
- **Error message opacity**: Runs failing with generic "invalid result" (#5552, #5776) instead of surfacing the actual tool failure or timeout prevents debugging.
- **Routine longevity**: Routines created in earlier versions cannot be deleted (#5510), and old routines continue running on stale configs, compounding delivery issues.
- **Latency scaling**: Chat creation latency grows with conversation history (#5509) — a degradation pattern as users accumulate data.

**Satisfaction signals**: The v1.1.0 release is well-received as a stable baseline. The Inspector feature work (#7235–#7277) addresses a clear demand for observability. Dependabot activity is low (3 small bumps), suggesting dependency health is stable.

## 8. Backlog Watch

| Issue | Priority | Age | Concern |
|---|---|---|---|
| [#5456](https://github.com/nearai/ironclaw/issues/5456) | P1 | ~38 days | Runner lease expiration — dominant failure pattern for multi-tool routines |
| [#5510](https://github.com/nearai/ironclaw/issues/5510) | P2 | ~37 days | No working routine deletion mechanism — stale routines persist |
| [#4339](https://github.com/nearai/ironclaw/issues/4339) | P2 | ~66 days | MiniMax-M2.7 tool calls rejected as InvalidInvocation — model-specific validation bug |
| [#4341](https://github.com/nearai/ironclaw/issues/4341) | P2 | ~66 days | Qwen3.6 THINKING chain-of-thought exposed to user and stuck |
| [#4343](https://github.com/nearai/ironclaw/issues/4343) | P2 | ~66 days | MCP integration acknowledged but unusable (driver failure) |
| [#4344](https://github.com/nearai/ironclaw/issues/4344) | P2 | ~66 days | Agent mirrors user message as its own response while loading |
| [#4342](https://github.com/nearai/ironclaw/issues/4342) | P2 | ~66 days | Auth modal persists after page refresh, blocking chat |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) | P2 | ~37 days | Chat creation latency scales with conversation count |

**Maintainer attention needed**: Issues #4339–#4344 (all from 2026-06-02 QA bash, 0 comments) represent a cluster of model-integration and auth-flow bugs that have been open for ~2 months with no engagement. The runner lease issue (#5456, P1) and routine deletion gap (#5510) are the highest-impact backlog items blocking routine reliability.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# 🦞 LobsterAI Project Digest — 2026-08-07

## 1. Today's Overview

LobsterAI activity on 2026-08-07 was low, with only 5 open issues and 2 open PRs updated in the last 24 hours, and no new releases. Most recent issues (#2444, #2443) were created today, reflecting ongoing community engagement on UX improvements and compatibility bugs. The project shows signs of a quiet development cycle — no merges, no closed issues, and no release activity. Maintainer responsiveness on new issues is currently at zero comments, which may warrant attention.

## 2. Releases

No new releases were published during this reporting period. The latest known version remains **2026.8.5.0** (per issue #2443).

## 3. Project Progress

No PRs were merged or issues closed today. Two open PRs remain in play:

- **PR #1197** — Agent management page interaction optimization (conflicted with main, needs rebase)
- **PR #1199** — Per-model context window and token settings (also stale, no recent maintainer response)

Neither PR has advanced since early August, suggesting a developmental lull.

## 4. Community Hot Topics

| Issue/PR | Title | Comments | Link |
|---|---|---|---|
| #1196 | 不要强制建立 Agents.md、User.md 等6个文件 | 1 | [Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) |
| #1198 | 网关重启进度条消失，模型显示不可用 | 1 | [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) |
| #2444 | 输入框编辑模式 | 0 | [Issue #2444](https://github.com/netease-youdao/LobsterAI/issues/2444) |
| #2443 | 模型ID含斜杠的自定义 Provider 无法使用 | 0 | [Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443) |
| #2442 | PowerShell 内核版本未升级 | 0 | [Issue #2442](https://github.com/netease-youdao/LobsterAI/issues/2442) |
| PR #1197 | Agent 管理页面交互优化 | — | [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197) |
| PR #1199 | 模型级 context window 和 token 设置 | — | [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) |

**Analysis:** The two most-commented issues (#1196, #1198) reflect persistent UX friction — forced file creation in working directories and unreliable gateway restart signaling. The newest issues (#2443, #2444) signal community demand for better custom provider support and input ergonomics. PR #1197 indicates a contributor is actively working on agent management UX, but the conflict with main has stalled progress.

## 5. Bugs & Stability

| Severity | Issue | Description |
|---|---|---|
| **Medium** | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | Custom OpenAI-compatible providers with slash-containing model IDs (e.g., SiliconFlow's `deepseek-ai/DeepSeek-V4-Flash`) cannot be selected in the UI. Workaround: use API directly. |
| **Medium** | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | Gateway restart progress bar disappears mid-process; browser service reports unavailable even after Chrome launches. No fix PR identified. |

No crashes or high-severity regressions reported today. The #2443 bug affects all OpenAI-compatible providers using namespaced model IDs, indicating a systemic UI parsing issue rather than an isolated edge case.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood |
|---|---|---|
| **Input box edit mode** — Enter-to-newline / Ctrl+Enter-to-send toggle with optional WYSIWYG Markdown editor | [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | **Medium** — well-scoped, low-risk UI change |
| **Global/system-level prompt file** — shared config outside working directory, avoiding forced per-directory file creation | [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | **Medium** — aligns with user demand for cleaner project structures |
| **Per-model context window & token limits** in settings UI | [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | **High** — PR already implemented, only needs rebase/merge |
| **Agent management page UX overhaul** — inline delete, improved sidebar | [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | **Medium** — useful but blocked by merge conflicts |

PR #1199 is the strongest roadmap signal: the feature is complete and only requires maintainer action to unblock.

## 7. User Feedback Summary

- **Frustration with forced file scaffolding:** Users find the mandatory creation of 6 system files (AGENTS.md, USER.md, etc.) in every working directory cumbersome and messy. The desire for a global, hidden-directory-based config is clear.
- **Custom provider usability gap:** Slash-containing model IDs break the UI selector, pushing power users toward direct API calls — a signal that the provider model is under-tested against real-world OpenAI-compatible services.
- **Input ergonomics matter:** Long prompt composition is hindered by Shift+Enter for newlines, a common pain point in AI chat interfaces.
- **PowerShell version concern:** Users notice LobsterAI still ships with PS 5.1 wrappers and expect an upgrade to PS 7.x for better scripting capabilities.
- **Satisfaction:** The project has an active contributor base submitting PRs and detailed bug reports, but the lack of maintainer responses (0 comments on 3 of 5 issues) risks community fatigue.

## 8. Backlog Watch

| Item | Age | Status | Risk |
|---|---|---|---|
| [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) — Per-model context/token settings | ~4 months | Stale, needs rebase | **High** — feature complete, blocking on merge |
| [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197) — Agent management UX | ~4 months | Stale, merge conflict | **Medium** — valuable UX improvement |
| [Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) — Global prompt config | ~4 months | No response | **Medium** — recurring user pain point |
| [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) — Gateway restart UI bug | ~4 months | No fix PR | **Medium** — reliability concern |
| [Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443) — Slash model IDs | 1 day | No fix PR | **Medium** — systemic UI bug |

**Recommendation:** Maintainer attention should prioritize unblocking PR #1199 (trivial feature, already coded) and addressing issue #2443 (affects a broad class of providers). The four-month staleness on PR #1197 and issues #1196/#1198 suggests a need for a backlog triage cycle to prevent contributor attrition.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw Project Digest — 2026-08-07

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 34 issues and 50 PRs touched in the past 24 hours. The issue closure rate is healthy at 50% (17/34 closed), and PR merge velocity is strong with 30 of 50 PRs closed or merged. The project is actively stabilizing the 2.0.x line and the 2.1.0b1/beta branch simultaneously, with significant work on memory/ReMe infrastructure, channel reliability (Matrix, OneBot, WeChat), and config persistence hardening. No new release was published today.

---

## 2. Releases

No new releases published in the last 24 hours. Current tracked versions include **2.0.1** (stable), **2.0.0.post3**, and **2.1.0b1/beta**.

---

## 3. Project Progress

### Merged / Closed PRs Today
- **#6664** — `fix(harnesses): degrade gracefully without Codex CLI` (rayrayraykk)
- **#6741** — `feat(memory): improve ReMe configuration and embedding lifecycle` (jinliyl) — closed after re-submission
- **#6739** — `docs(memory): add embedding model configuration guide` (jinliyl) — closed after re-submission
- **#6530** — `Fix editable per-tool call limit names` (rayrayraykk) — regression test added
- **#6744** — `fix(config): harden agent config persistence on shared filesystems` (rayrayraykk) — atomic writes for OSSFS/FUSE
- **#6766** — `fix(ci): target rich chat input in desktop verification` (jinglinpeng) — fixes desktop CI verification failures
- **#6611** — `refactor(context): align Scroll and memory with AgentScope lifecycle` (jinliyl) — consolidates Scroll as the sole context protocol

### Key Advancements
- **Memory/ReMe**: Embedding validation pipeline and unified model factory (OpenAI-compatible, DashScope, Gemini, Ollama) merged; docs added.
- **Config hardening**: Atomic JSON writes and improved cache keys for shared-filesystem deployments.
- **Scroll context**: Alignment with AgentScope 2.0 lifecycle completed, removing duplicate middleware paths.

---

## 4. Community Hot Topics

| Issue | Comments | Status | Summary |
|-------|----------|--------|---------|
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) — Channel retry for Matrix | 8 | ✅ Closed | Self-hosted Matrix channels fail when QwenPaw starts faster than the service; no retry or health check exists. |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) — `spawn_subagent` batch placeholder bug | 6 | ✅ Closed | Empty `batch` placeholders from some provider paths trigger unintended batch mode in single-task calls. |
| [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) — No error on empty model response | 5 | 🔓 Open | Long sessions silently receive empty responses without errors, eventually breaking the conversation. |
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) — DeepSeek thinking mode multi-turn failure | 5 | ✅ Closed | `reasoning_content` dropped after OpenAI formatter skips ThinkingBlock, causing 400 errors. |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — MCP tools periodically失效 | 3 | 🔓 Open | MCP tools stop being auto-discovered after hours/days; restart fixes it. |
| [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) — Huge tool output freezes UI | 3 | ✅ Closed | Multi-MB tool outputs cause the web console to hang on session reload and overflow context windows. |

**Underlying needs**: Channel resilience (Matrix retry), robust empty-response handling, MCP stability, and context-window safety are the most pressing user concerns — all pointing to reliability gaps in long-running agent sessions.

---

## 5. Bugs & Stability

### Critical / High Severity
| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) — `run_tool_batch` fails with "No toolkit available" | `ContextVar` not injected at `POST_AGENT_BUILD` phase; affects all agents in 2.1.0b1 | None yet |
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) — agentscope 2.0.4.post1 incompatibility | Proactive/memory-evolving crashes (`Msg.content` type) + tool-permission deadlock | [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) (config robustness, partial) |
| [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) — Agent infinite loop after multi-step task | Agent becomes unresponsive for hours; session blocked | None yet |
| [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) — Malware Bytes flag Trojan Loader | False positive concern on Windows desktop; user uninstalled pending response | None yet |

### Medium Severity
| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — MCP tools周期性失效 | Tools unregistered after hours; restart restores them | [#6724](https://github.com/agentscope-ai/QwenPaw/pull/6724) (timeout guard, partial) |
| [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) — 超大工具输出卡死UI | Long output freezes browser; context overflow | ✅ Closed — truncation/pagination requested |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) — Browser SDK `open()` fails | Playwright isolated session crashes with `WireProtocolError: Target crashed` | None yet |
| [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) — Tool-role 400 error in long sessions | `tool` messages not preceded by `tool_calls` after 20-30+ pairs accumulate | None yet |
| [#6755](https://github.com/agentscope-ai/QwenPaw/issues/6755) — Cross-day date/weekday confusion | Agent misjudges current day in multi-day sessions, schedules wrong dates | None yet |

### Lower Severity
- [#6762](https://github.com/agentscope-ai/QwenPaw/issues/6762) — CodeMirror no line-wrap for long shell commands (closed)
- [#6760](https://github.com/agentscope-ai/QwenPaw/issues/6760) — `qwenpaw task` sandbox warning on 2.0.1 (closed)
- [#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) — MCP tool names starting with `-` reject by strict LLM APIs (closed)
- [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) — Matrix E2E encryption unavailable (closed)

---

## 6. Feature Requests & Roadmap Signals

| PR / Issue | Description | Likely in Next Version? |
|------------|-------------|------------------------|
| [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) — Model fallback with cooldown | Auto failover on rate limits/timeouts with provider cooldown | ✅ High probability |
| [#6724](https://github.com/agentscope-ai/QwenPaw/pull/6724) — Configurable MCP tool-call timeout | Per-client timeout + call-level guard for hung MCP servers | ✅ High probability |
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) — OneBot voice/image media | Handle remote HTTP(S) media URLs in inbound OneBot messages | Moderate — needs review |
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) — Chrome tab lifetime config | Configurable tab persistence across response cycles | Lower — niche use case |
| [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) — WeChat approval in Chinese | Localize approve/deny action labels for WeChat channel | Moderate — quick win |
| [#6765](https://github.com/agentscope-ai/QwenPaw/issues/6765) — EU languages (Hungarian) | Add Hungarian and other EU languages to UI | Lower — i18n expansion |
| [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) — ReMe embedding improvements | Re-submission of embedding config/validation PR | ✅ Already merged as #6741 |
| [#6759](https://github.com/agentscope-ai/QwenPaw/pull/6759) — Preserve tool call extra content | Persist provider-specific metadata (e.g. Gemini thought signatures) across compression | Moderate — niche but important for multi-provider |

**Prediction**: The next release (likely **2.0.2** or **2.1.0 final**) will include model fallback, MCP timeouts, and the ReMe embedding improvements as core features.

---

## 7. User Feedback Summary

**Pain points expressed:**
- **Channel fragility**: Matrix and MCP integrations are unstable under sustained use — restarts are a frequent workaround, not a solution.
- **Long-session reliability**: Empty responses, date confusion, and tool-call ordering errors (400s) accumulate over multi-turn conversations, degrading trust in the agent.
- **UI/UX friction**: Huge tool outputs crash the browser console; auto-generated session titles are unhelpful; CodeMirror lacks line-wrapping for long commands.
- **Desktop security anxiety**: Malware Bytes flagging the Windows build caused a user to uninstall — reputational risk.
- **Version drift**: Incompatibility between QwenPaw 2.0.1 and agentscope 2.0.4.post1 caused proactive subsystem crashes.

**Positive signals**: Users actively contribute fixes (e.g., embedding validation PRs, config hardening), and the project responds quickly with merges. The ReMe memory overhaul and embedding docs show strong investment in long-term agent capabilities.

---

## 8. Backlog Watch

| Issue | Days Open | Severity | Concern |
|-------|-----------|----------|---------|
| [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) — No error on empty response | ~7 days | 🔴 Critical | Framework-level gap; silent failures in production sessions. No fix PR yet. |
| [#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) — `run_tool_batch` toolkit unavailable | 1 day | 🔴 Critical | Affects all agents in 2.1.0b1; root cause identified (ContextVar not injected). |
| [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) — Agent infinite loop, session blocked | 1 day | 🔴 Critical | Multi-step task agent hangs for hours; no fix PR. |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) — Browser SDK `open()` crash | 2 days | 🟠 High | Playwright isolated sessions crash; blocks browser-based agent workflows. |
| [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) — Tool-role 400 after many calls | 2 days | 🟠 High | Accumulating `tool`/`tool_result` pairs break OpenAI-compatible APIs. |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — MCP tools周期性失效 | 1 day | 🟠 High | Periodic MCP registration loss; affects production deployments. |
| [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) — Malware Bytes false positive | 0 days | 🟡 Medium | Requires prompt maintainer response to prevent user churn. |
| [#6761](https://github.com/agentscope-ai/QwenPaw/issues/6761) — MCP 2026-07-28 stateless spec | 1 day | 🟡 Medium | Breaking protocol change; needs roadmap assessment. |

**Notable PRs needing review**:
- [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) — OneBot media handling (under review, 2 days)
- [#6759](https://github.com/agentscope-ai/QwenPaw/pull/6759) — Tool call extra content preservation (open, 1 day)
- [#6764](https://github.com/agentscope-ai/QwenPaw/pull/6764) — CI gate on main mergeability (open, 1 day — requires admin action to enable ruleset)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-07

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 31 issues and 50 PRs updated in the last 24 hours. The project is in an active stabilization phase for the **v0.8.5** release line (tracker #9459, intake frozen as of Aug 4). A notable cluster of SOP (System Operator Protocol) runtime bugs surfaced today, alongside continued RFC-driven governance work. No new releases were published.

## 2. Releases

*No new releases in the last 24 hours.*

## 3. Project Progress

**Merged / Closed PRs today:**

| PR | Author | Summary |
|----|--------|---------|
| [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) | Audacity88 | **fix(tools): enforce agent policy in pipelines** — closes #7947; fixes confused-deputy bug where `execute_pipeline` bypassed per-agent tool gating |
| [#9329](https://github.com/zeroclaw-labs/zeroclaw/pull/9329) | IftekharUddin | **refactor(zerocode): derive slash commands from shared command catalogue** — closes #9172; establishes single source of truth for ZeroCode commands |
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) | ozpool | **fix(providers): exclude Nova 2 from Bedrock prompt caching** — closes #8720; resolves `400: extraneous key [cachePoint]` errors |
| [#9659](https://github.com/zeroclaw-labs/zeroclaw/pull/9659) | Audacity88 | **fix(docs): disambiguate contextual protected literals** — resolves false-positive channel-name matches for generic terms like `Signal` and `Filesystem` |
| [#9764](https://github.com/zeroclaw-labs/zeroclaw/pull/9764) | mov-xound-glitch | **test(config): widen scheduler-latency margin** — closes #9763; fixes flaky onepassword load test |

**Key open PRs advancing features:**
- [#9701](https://github.com/zeroclaw-labs/zeroclaw/pull/9701) — WebSocket keepalive for gateway chat
- [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) — Per-user session toggle for Telegram group chats
- [#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) — Grok Build ACP model provider
- [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) — Fix `strip_think_tags` for OpenAI-compatible reasoning models

## 4. Community Hot Topics

1. **[RFC] Work Lanes, Board Automation, and Label Cleanup** — [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) · 19 comments
   The longest-running governance RFC; drives project workflow automation. Status: ratification deferred, rollout in progress.

2. **Maintainer decision queue tracker** — [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) · 11 comments
   Centralizes RFC and design-issue routing. Reflects community appetite for faster, more transparent decision-making.

3. **RFC: A2A outbound client (A2ATool)** — [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) · 11 comments
   Enables ZeroClaw agents to proactively call external A2A-compliant agents — a major multi-agent collaboration enabler.

4. **RFC: Preserve Todo tracker config during ZeroCode migration** — [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) · 11 comments
   Addresses data-loss concerns during ZeroCode ownership transitions.

5. **RFC: Provenance & reply contract for internally initiated turns** — [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) · 10 comments
   Critical for auditability of cron/SOP-driven agent actions.

## 5. Bugs & Stability

**P1 / High severity bugs reported today:**

| Issue | Author | Summary | Fix PR? |
|-------|--------|---------|---------|
| [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | Pratiikpy | `sops_dir` documented default not honoured; SOP engine never loads silently | In progress |
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | JordanTheJet | Malformed `SOP.toml` silently dropped; `sop validate` reports success | Open |
| [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | Pratiikpy | Cron-triggered SOPs cannot perform network work (no HTTP capability) | Open |
| [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | AngryPacifist | `cron update` silently discards changes to declarative jobs | Open |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | AngryPacifist | Verifiable intent evaluates constraints without verifying the credential chain | Open |
| [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | JordanTheJet | Multi-step SOP marked failed mid-step with no audit event | Open |
| [#9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) | JordanTheJet | `finish_run` accepts failure reason but discards it — no cause recorded | Open |
| [#9792](https://github.com/zeroclaw-labs/zeroclaw/issues/9792) | JordanTheJet | Git channel empty peer allowlist silently drops all events | In progress |

**P2 bugs:**
- [#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) — Parent `cron --help` still prints broken examples after #9704 fix
- [#9657](https://github.com/zeroclaw-labs/zeroclaw/issues/9657) — Protected-literal checker false-positive on generic "Signal" (closed)
- [#9763](https://github.com/zeroclaw-labs/zeroclaw/issues/9763) — Flaky onepassword test (closed via #9764)
- [#9771](https://github.com/zeroclaw-labs/zeroclaw/issues/9771) — Gateway fails `clippy -D warnings` (open)

**Assessment:** The SOP subsystem is experiencing a **stability burst** — multiple interrelated issues around silent failures, missing diagnostics, and capability gaps were all raised within 24 hours. The previously-closed #7947 pipeline bypass fix (#9737) addresses one vector; however, SOP observability and reliability remain an active concern.

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for v0.8.5 / v0.9.0 |
|---------|----------|-------------------------------|
| A2A outbound client (A2ATool) | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) / [#9104](https://github.com/zeroclaw-labs/zeroclaw/issues/9104) (Grok ACP) | **High** — aligns with v0.9.0 multi-agent tracker (#7432) |
| Per-model context-window & capability config | [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | **Medium** — RFC in progress, needs maintainer review |
| Per-user Telegram sessions | [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) | **Likely** — PR open, small surface |
| Cron-triggered SOP HTTP capability | [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | **Depends** — feature gap, may land in v0.9.0 |
| Kimi Code provider | [#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657) (closed) | Unlikely — superseded by compatible-provider work |

**Roadmap trackers to watch:**
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — v0.9.0 auth/security/gateway queue
- [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) — v0.8.5 finite weekly stabilization (cutoff Aug 30)

## 7. User Feedback Summary

- **SOP silent failures are the top pain point.** Operators report that malformed configs and missing `sops_dir` defaults cause the entire SOP engine to fail without any error, warning, or log line — making debugging impossible. [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779), [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786)
- **CLI cron examples are broken.** Users following `zeroclaw cron add --help` examples get errors. [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) (closed), [#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) (follow-up)
- **Bedrock Nova 2 Lite prompt caching causes random 400 errors.** Resolved in #8943 but indicates provider-model compatibility gaps.
- **WhatsApp empty `allowed_groups` is a permit-all security hole.** RFC [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) proposes treating empty as "permit none" — a breaking but security-justified change.
- **Reasoning-model tag stripping** breaks on OpenAI-compatible providers that embed `

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*