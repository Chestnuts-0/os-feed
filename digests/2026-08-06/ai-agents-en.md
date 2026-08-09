# OpenClaw Ecosystem Digest 2026-08-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-06 01:29 UTC

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



# OpenClaw Project Digest — 2026-08-06

## 1. Today's Overview

OpenClaw saw **very high activity** today with 500 issues and 500 PRs updated in the last 24 hours. 63 issues were closed and 73 PRs merged or closed, indicating strong triage and resolution velocity. No new releases were published. The project remains in a maintenance-heavy phase, with the majority of effort focused on session-state reliability, channel delivery correctness, and auth-provider edge cases rather than new feature development.

---

## 2. Releases

No new releases today. The latest tracked version context is **2026.7.2** / **2026.7.2-beta.7**, with ongoing migration and regression concerns around that branch.

---

## 3. Project Progress

**Merged / Closed PRs today:**

- [#119787](https://github.com/openclaw/openclaw/pull/119787) — `fix(test): Gateway E2E no longer stalls on x64` — Resolved a false five-minute no-output failure in the Gateway E2E aggregate on x64.
- [#119785](https://github.com/openclaw/openclaw/pull/119785) — `fix: grant administrator access through host-issued Control UI links` — Fixed durable browser credentials lacking `operator.admin` when opened via `openclaw dashboard`.
- [#119792](https://github.com/openclaw/openclaw/pull/119792) — `fix(backup): skip ephemeral coordinator lock databases` — Resolved `openclaw backup create` failures caused by zero-byte ephemeral SQLite lock files.
- [#118796](https://github.com/openclaw/openclaw/pull/118796) — `fix(session): require a real context snapshot for CLI usage` — Ensured CLI-backed provider classification no longer inflates `SessionEntry.totalTokens`.
- [#112278](https://github.com/openclaw/openclaw/issue/112278) — Closed: root OTel span now adopts diagnostic trace context instead of minting a new `traceId`.
- [#119534](https://github.com/openclaw/openclaw/issue/119534) — Closed: bundled skills can now `read` their own support files via corrected path resolution.

**In-progress significant PRs:**

- [#116793](https://github.com/openclaw/openclaw/pull/116793) / [#116795](https://github.com/openclaw/openclaw/pull/116795) — Stacked refactor centralizing immutable execution attribution and binding tool policy to it (P1, size XL).
- [#118465](https://github.com/openclaw/openclaw/pull/118465) — Fixes first-message stall after gateway startup caused by lazy model-catalog / plugin-registry loads.
- [#110803](https://github.com/openclaw/openclaw/pull/110803) — Zalo polling transport fix to prevent message-loss window (platinum hermit rating).
- [#119402](https://github.com/openclaw/openclaw/pull/119402) — Unblocks queued replies after repeated model requests without semantic output.

---

## 4. Community Hot Topics

| Issue | Comments | Focus |
|-------|----------|-------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) — Realtime voice unbounded provider/consult state | 59 | Resource limits in voice sessions under bursty/slow provider behavior |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source | 27 | Trust-tagging agent memories by origin to prevent memory poisoning |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost | 25 | Silent subagent failure modes: no retry, no notification, no auto-restart |

**Analysis:** The top-discussed issues all center on **session-state integrity** and **reliability under failure**. The voice-state issue (#116201) with 59 comments and platinum hermit rating signals a deep architectural concern around unbounded resource retention. The memory trust tagging request (#7707) reflects growing production adoption where agents ingest untrusted content. Subagent loss (#44925) points to orchestration gaps as multi-agent workflows become more common.

---

## 5. Bugs & Stability

**P0 / Critical:**

- [#119263](https://github.com/openclaw/openclaw/issues/119263) — **DB v14→v15 migration fails** with `no such column: entry_valid`; gateway refuses to start after upgrade to 2026.7.2. Closed as release-blocker concern.
- [#118846](https://github.com/openclaw/openclaw/issues/118846) — **Gateway main thread saturated at boot** by plugin-metadata snapshot + fs statting; local RPC dies at `ws_upgrade` with 1006. **Closed.**

**P1 — Session State & Message Loss:**

- [#86519](https://github.com/openclaw/openclaw/issues/86519) — Agent repeats identical Telegram replies 2–10× after 5.20 update (regression; partially mitigated in 5.22).
- [#112423](https://github.com/openclaw/openclaw/issues/112423) — Large SQLite transcript cleanup blocks gateway event loop during session archiving.
- [#85251](https://github.com/openclaw/openclaw/issues/85251) — Codex app-server emits `turn/started` then goes silent; session wedges for full stuck-session recovery window (360s).
- [#109490](https://github.com/openclaw/openclaw/issues/109490) — Client-delegated dynamic tools with `terminate:true` cause promised work to never execute.
- [#116022](https://github.com/openclaw/openclaw/issues/116022) — Beta `/new` reuses stable session ID and cannot recover retired Codex binding tombstone.
- [#117358](https://github.com/openclaw/openclaw/issues/117358) — Post-turn compaction ignores compaction/reset boundaries and delays completed replies (regression).
- [#96692](https://github.com/openclaw/openclaw/issues/96692) — Slack thread replies generated but not delivered after origin tuple is lost. **Fix PR #119737 open.**

**P1 — Auth Provider:**

- [#106779](https://github.com/openclaw/openclaw/issues/106779) — Local llama.cpp provider fails with `400 Unable to generate parser for this template` (closed).
- [#70903](https://github.com/openclaw/openclaw/issues/70903) — Persistent file-based provider cooldown blocks user for hours after billing recovery (P0).
- [#115642](https://github.com/openclaw/openclaw/issues/115642) — Billing cooldown outlives outage; requests probe-based recovery and shorter TTL.

**P1 — Stability / Crash:**

- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool child processes accumulate as zombies, causing runtime degradation.
- [#85844](https://github.com/openclaw/openclaw/issues/85844) — Auto-update leaves running gateway with stale hashed bundle imports.
- [#107873](https://github.com/openclaw/openclaw/issues/107873) — Embedded prompt-lock session takeover aborts visible WebChat turns after tool failure.

**P2 — Notable:**

- [#51429](https://github.com/openclaw/openclaw/issues/51429) — Hardcoded working path (`/Users/wangtao`) merged and published.
- [#67419](https://github.com/openclaw/openclaw/issues/67419) — Bootstrap files re-injected every turn, wasting 20–30% context tokens.
- [#106231](https://github.com/openclaw/openclaw/issues/106231) — Loop detection blocks exec but does not terminate stuck agent run.
- [#119090](https://github.com/openclaw/openclaw/issues/119090) — Managed media cleanup permanently deletes session media when session store is unreadable (closed).

---

## 6. Feature Requests & Roadmap Signals

| Issue | Comments | Description |
|-------|----------|-------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 27 | **Memory Trust Tagging by Source** — Tag memories by trust level (user commands vs. web scrapes vs. third-party skills) to prevent poisoning attacks |
| [#13597](https://github.com/openclaw/openclaw/issues/13597) | 7 👍4 | **AWS deployment guide** (EC2, ECS, Lambda) — Request for cloud deployment documentation |
| [#50205](https://github.com/openclaw/openclaw/issues/50205) | 5 | **Gemini API request labels** — Attach custom labels for GCP billing cost attribution |
| [#50798](https://github.com/openclaw/openclaw/issues/50798) | 5 | **Agent-to-agent visible messaging** — ACP thread-bound sessions without main session creation |
| [#53654](https://github.com/openclaw/openclaw/issues/53654) | 6 👍3 | **Discord messageUpdate/messageDelete events** — Edit-to-reprocess and delete-to-cancel |
| [#44289](https://github.com/openclaw/openclaw/issues/44289) | 7 👍1 | **Generate secretref docs from registry metadata** — Auto-sync reference docs |

**Prediction:** Memory Trust Tagging (#7707) and Discord edit/delete events (#53654) are the most likely candidates for near-term inclusion, given their security relevance and growing multi-channel usage. The AWS deployment guide (#13597) has strong community support (4 👍) and would reduce support burden.

---

## 7. User Feedback Summary

**Pain points:**
- **Session state loss and message duplication** dominate user reports — Telegram repeat replies (#86519), Slack undelivered thread replies (#96692), Zalo polling gaps (#110803).
- **Billing/cool-down frustration** is recurring: users report being blocked for hours after credit is restored (#70903, #115642).
- **Token waste from bootstrap re-injection** (#67419) is a consistent complaint from power users running long multi-turn sessions.
- **Subagent reliability** (#44925, #92369) is a growing concern as users adopt multi-agent cron workflows.
- **Realtime voice resource leaks** (#116201) signal that voice channels are reaching production scale and exposing architectural gaps.

**Satisfaction signals:**
- The community actively engages with maintainer bot triage (`clawsweeper` labels) and provides detailed reproductions.
- Multiple users contributed proof-of-fix PRs (e.g., #118792, #110803).
- Closed issues show responsive maintenance on critical bugs (gateway saturation #118846, media cleanup #119090, OTel tracing #112278).

---

## 8. Backlog Watch

These long-open, high-impact issues require maintainer attention:

| Issue | Age | Rating | Blockers |
|-------|-----|--------|----------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) — Realtime voice unbounded state | ~7 days | 🐚 platinum hermit | `needs-product-decision`, `needs-maintainer-review`, `needs-live-repro` |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging | ~6 months | 🌊 off-meta tidepool | `needs-security-review`, `needs-product-decision` |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) — Persistent provider cooldown | ~4 months | 🦞 diamond lobster | P0, `impact:ux-release-blocker` |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) — Bootstrap file token waste | ~4 months | 🦞 diamond lobster | `needs-product-decision` |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) — Zombie child process leak | ~2 months | 🦪 silver shellfish | — |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) — Stale hashed bundle imports post-auto-update | ~2 months | 🐚 platinum hermit | `needs-live-repro` |
| [#48238](https://github.com/openclaw/openclaw/issues/48238) — Loop-aware compaction guard | ~5 months | 🦪 silver shellfish | stale, `needs-product-decision` |

The **platinum hermit**-rated issues (#116201, #85844) and the **P0 persistent cooldown** (#70903) are the most impactful backlog items. The memory trust tagging feature (#7707), while older, addresses a security concern that will only grow in importance as the agent ecosystem expands.

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — 2026-08-06

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is in a high-velocity stabilization phase, with most projects transitioning from rapid feature expansion to production-readiness hardening. Core concerns across nearly every project converge on session-state reliability, multi-channel delivery correctness, MCP tool-server stability, and token-cost optimization. A handful of projects (OpenClaw, Hermes Agent, CoPaw, IronClaw, ZeroClaw) are running at significant scale with deep feature sets and active community triage, while smaller projects (PicoClaw, NanoClaw, NullClaw) focus on niche reliability gaps and infrastructure refinement. Three projects (TinyClaw, ZeptoClaw, Moltis) showed no activity, suggesting either dormancy or low community visibility.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release | Health Score |
|---|---|---|---|---|
| **OpenClaw** | 500 updated, 63 closed | 500 updated, 73 merged/closed | None (2026.7.2 branch) | 🟢 High |
| **Hermes Agent** | 50 updated | 50 open, 0 merged | None | 🟡 Moderate (review bottleneck) |
| **CoPaw** | 25 updated | 50 updated, 21 merged/closed | None | 🟢 High |
| **IronClaw** | 43 updated | 50 updated, 18 merged/closed | v1.1.0-rc.1 (Aug 3) | 🟢 High |
| **NanoBot** | 4 active | 16 updated, 8 merged | None | 🟢 High velocity |
| **LobsterAI** | 3 new | 13 updated, 12 merged | v2026.8.5 (Aug 5) | 🟢 High |
| **ZeroClaw** | 50 updated | 50 updated, 1 merged/closed | None (v0.8.5 tracking) | 🟡 Moderate |
| **NanoClaw** | 2 active | 12 touched, 2 merged | None | 🟡 Moderate |
| **PicoClaw** | 0 new | 4 updated, 1 merged | None | 🟡 Moderate (blocking bug) |
| **NullClaw** | 0 new | 2 open, 0 merged | None | 🟡 Stable but slow |
| **TinyClaw** | 0 | 0 | — | ⚪ Inactive |
| **ZeptoClaw** | 0 | 0 | — | ⚪ Inactive |
| **Moltis** | 0 | 0 | — | ⚪ Inactive |

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale of activity is unmatched** — 500 issues and 500 PRs in 24h dwarfs every other project, indicating the largest contributor base and most active codebase in the ecosystem.
- **Mature triage discipline** — The `clawsweeper` bot, severity-tiered labels (platinum hermit, diamond lobster, etc.), and structured backlog tracking reflect institutionalized maintenance practices no other project matches.
- **Channel depth** — Supports the broadest set of messaging platforms (Telegram, Slack, WhatsApp, Zalo, Matrix, WebChat, Discord) with per-channel reliability work actively underway.

**Technical approach differences:**
- OpenClaw treats session-state integrity as a first-class invariant (dedicated work on `SessionEntry.totalTokens` inflation, SQLite compaction boundaries, gateway event-loop saturation), whereas most peers address stability reactively.
- The project invests heavily in observability (OTel trace adoption, diagnostic span context) and backup/restore mechanics — areas largely unaddressed by smaller projects.
- Multi-agent orchestration (subagent completion, cron workflows) is a live concern; most competitors are still solidifying single-agent reliability.

**Community size comparison:**
- OpenClaw's issue/PR volume suggests a contributor base an order of magnitude larger than NanoBot or PicoClaw, and roughly 5–10× larger than Hermes Agent or ZeroClaw.
- LobsterAI and IronClaw show strong but more contained activity, consistent with enterprise-backed projects with focused QA cycles.

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Session-state reliability** | OpenClaw, Hermes Agent, NanoBot, CoPaw, ZeroClaw | Message deduplication, subagent loss prevention, context snapshot correctness, idle-time state decay |
| **Multi-channel delivery correctness** | OpenClaw, Hermes Agent, NanoBot, CoPaw, IronClaw, ZeroClaw | Cross-channel contamination (Slack→Telegram in IronClaw), silent channel death (NullClaw, ZeroClaw), retry on startup race (CoPaw) |
| **MCP tool-server stability** | NanoBot, CoPaw, NanoClaw, IronClaw, ZeroClaw | Error-envelope handling (NanoBot #5237), periodic tool failure after hours (CoPaw #6732), SSRF-gated downloads (ZeroClaw #8826) |
| **Token-cost optimization** | OpenClaw, CoPaw, ZeroClaw, LobsterAI | Bootstrap re-injection waste (OpenClaw #67419), on-demand skill loading (CoPaw #6699), prompt-cache support (ZeroClaw #9631), duplicate system-prompt injection (LobsterAI #2440) |
| **Authentication & identity** | OpenClaw, PicoClaw, ZeroClaw, IronClaw | OAuth setup-token flows (PicoClaw #926), pluggable auth principals (ZeroClaw #7141), admin-managed agent identities (IronClaw #6578), provider cooldown persistence (OpenClaw #70903) |
| **Memory/trust management** | OpenClaw, Hermes Agent, ZeroClaw | Memory trust-tagging by source (OpenClaw #7707), memory lifecycle & deduplication (Hermes #78307), forbidden-path glob hardening (ZeroClaw #9776) |
| **Desktop/client stability** | NanoBot, CoPaw, LobsterAI, NullClaw | Stack-overflow fixes (NullClaw #985), Python env injection crashes (CoPaw #6697), shutdown hang prevention (LobsterAI #2437) |

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | CoPaw | NanoBot | ZeroClaw | PicoClaw / NanoClaw |
|---|---|---|---|---|---|---|---|
| **Primary focus** | Multi-channel gateway + session orchestration | Telegram parity + architecture hygiene | Enterprise agent runtime + skills marketplace | Multi-model fallback + LLM routing | WebUI-first personal assistant | Security-first RFC-driven governance | Niche reliability / skill ecosystem |
| **Target user** | Power users, operators, multi-channel deployers | Telegram-centric power users, Nous community | Enterprise teams, SaaS operators | Chinese-market users, multi-model cost optimizers | Desktop-first personal users | Security-conscious operators, governance voters | Embedded/edge (PicoClaw), containerized (NanoClaw) |
| **Architecture** | Monorepo, god-file decomposition in progress, single-writer DB invariants | God-file epic (#78647), shard-by-responsibility | Rust core (`reborn_services.rs` 6,400+ lines), wasm sandboxing | Tauri desktop + OpenClaw runtime, model fallback layer | TypeScript/Node, WebUI-first, metasearch aggregation | RFC-governed, pluggable auth, workspace-relative security | Minimalist, edge-deployed (PicoClaw), container-native (NanoClaw) |
| **Release cadence** | Maintenance-heavy, no release this cycle | Sprint-driven, review bottleneck | RC phase (v1.1.0-rc.1) | Steady, 21 PRs merged | Between releases | Between releases | Patch-focused when active |
| **Key differentiator** | Unmatched scale + channel breadth + session-state rigor | Telegram Bot API 10.2 campaign as organized feature push | Config-as-code + IronHub marketplace + sandbox isolation | LLM fallback + automatic model routing + DeepSeek thinking-mode | Metasearch aggregation + temporary-chat mode + shared PTY | RFC-driven community governance + Chat Completions profile ambition | OAuth expansion (PicoClaw) + skill ecosystem growth (NanoClaw) |

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (High Activity, Strong Merge Velocity):**
- **OpenClaw** — 500+ daily touchpoints, 73 PRs merged/closed, systematic triage. Mature but facing review-load bottlenecks.
- **CoPaw** — 21 PRs merged today, shipping features end-to-end (LLM fallback, DeepSeek fix). Active beta-testing feedback loop.
- **IronClaw** — RC phase with 18 merges, bug-bash cycle driving regression discovery. Enterprise QA engagement.
- **NanoBot** — 8/16 PRs merged, efficient review pipeline, between-releases feature expansion.

**Tier 2 — Active but Constrained (High Volume, Merge Bottlenecks):**
- **Hermes Agent** — 50 PRs submitted but 0 merged; review capacity is the bottleneck. High issue volume with architectural-debt work dominating.
- **LobsterAI** — 12 merges + 1 release, but 4-month-old NIM fix PR (#1201) remains stale. Responsive on stability, slower on design-gap issues.
- **ZeroClaw** — 50 PRs updated but only 1 merged/closed; RFC-driven governance creates deliberation overhead. Strong community engagement on design but slow execution.

**Tier 3 — Stabilization Phase (Low Volume, Targeted Fixes):**
- **NanoClaw** — 2 merges focused on database integrity and agent-to-agent messaging. Smaller contributor base, targeted scope.
- **PicoClaw** — 1 merge (OAuth), 1 blocking lockfile bug pending. Moderate pace, niche focus.

**Tier 4 — Low/No Activity:**
- **NullClaw** — 2 open stability PRs with no merge activity in 2+ days. Production-impacting bugs awaiting triage.
- **TinyClaw, ZeptoClaw, Moltis** — No activity. Likely dormant or maintenance-mode.

## 7. Trend Signals

| Trend | Evidence Across Projects | Value for AI Agent Developers |
|---|---|---|
| **Multi-model fallback is table stakes** | CoPaw shipped LLM fallback (#5597/#5598); PicoClaw has fallback-chain PR (#3200); OpenClaw addresses model-catalog lazy-load stalls | Developers should design for provider failover as a core invariant, not an optimization |
| **MCP reliability is the new frontier** | NanoBot (#5237), CoPaw (#6732), IronClaw (#7248/#7251), ZeroClaw (#8826) all report MCP-specific failures — error handling, SSRF, periodic death | Tool-server integration requires explicit error-envelope parsing, health-checking, and bounded-resource policies |
| **Cross-channel contamination is a real class of bug** | IronClaw (#7249: Slack→Telegram), OpenClaw (#96692: Slack thread loss), ZeroClaw (#9774: Signal sender drops) | Channel adapters need strict origin-tuple binding and delivery-isolation guarantees |
| **Token-cost pressure is shaping architecture** | OpenClaw bootstrap waste (#67419), CoPaw on-demand skill loading (#6699), ZeroClaw prompt-cache (#9631), LobsterAI duplicate injection (#2440) | System-prompt deduplication, lazy skill loading, and prompt-cache headers are becoming differentiators, not luxuries |
| **Session-state integrity is the hardest problem** | Nearly every project reports issues: OpenClaw (500+ touchpoints), Hermes (null-byte crashes, context leaks), NullClaw (stack overflow), CoPaw (tool-role 400 errors) | Any agent framework must treat session lifecycle, compaction boundaries, and turn-state atomics as first-class concerns |
| **OAuth and trust-tagging are maturing requirements** | PicoClaw added OAuth (#926), OpenClaw requests memory trust-tagging (#7707), ZeroClaw pursues pluggable auth (#7141) | Auth flexibility and source-trusted memory are moving from "nice-to-have" to production necessity as agents ingest untrusted content at scale |
| **RFC-driven governance is emerging** | ZeroClaw's 10+ comment RFCs, Hermes' god-file epic policy, IronClaw's config-as-code demand | Projects that formalize design discussion early (RFCs, epics) manage complexity better — worth adopting for team projects |
| **Desktop beta instability is a pattern** | CoPaw v2.1.0b1 crashes (#6697/#6698), LobsterAI shutdown hangs (#2437), NullClaw stack overflows (#985) | Desktop/t GUI wrappers introduce environment-injection and lifecycle risks; isolated runtime boundaries are essential |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-06

## 1. Today's Overview

NanoBot continues to show strong development velocity with 16 PRs updated in the last 24 hours and 4 active issues, indicating a healthy and active contributor base. The project is currently between releases, with no new version published today. Development focus spans bug fixes, WebUI enhancements, and new channel features, suggesting a mature project balancing stability improvements with feature expansion. The high PR turnover (8 merged, 8 still open) reflects an efficient review pipeline.

## 2. Releases

No new releases were published on 2026-08-06.

## 3. Project Progress

**Merged/Closed PRs Today:**

- **#5234** — Integrated `mst-python` as a new metasearch provider, aggregating results from DuckDuckGo, Google, Brave, Bing, and others via Reciprocal Rank Fusion. This significantly expands search coverage beyond single-engine lookups.
- **#5203** — Fixed WhatsApp outbound media handling to detect content by file contents rather than trusting filename extensions, preserving audio format fidelity and correctly routing unsupported formats as documents.
- **#5184** — Added Quick Chat and Temporary Chat as first-class WebUI destinations, with temporary chat maintaining connection-owned, in-memory history only.
- **#5249** — WebUI visual consistency refactor: solid surface menus/popovers/dialogs, two-level elevation system, flattened layouts, removed replay animations, and auto-detecting timezones.
- **#5250** — Fixed feathered clipping edges on agent activity panes with direction-aware fading.
- **#5238** — Refactored session access grants by removing request-scoped `Tool.available()` layer, simplifying the authorization model.
- **#5233** — Extended Mattermost channel support with separate group policy for threads vs. main channels.

**Notable Open PRs:**
- **#5260** — Ignores runtime files inside tracked workspace dirs to prevent memory contamination.
- **#5258** — Keeps credential-bearing URLs away from the remote Jina reader for security.
- **#5257** — Bounds sustained-goal continuation when a turn goes idle, addressing a resource burn issue.
- **#5253** — Adds a shared interactive project terminal (PTY) to the WebUI.
- **#5252 / #5259** — Temporary chat mode implementation, stacked on #5252.
- **#5248** — Fixes Matrix room join for Continuwuity compatibility by sending non-empty POST body.

## 4. Community Hot Topics

- **[Issue #5256](https://github.com/HKUDS/nanobot/issues/5256)** — A `/goal` message producing dozens of repeated replies while waiting for user input. Author reported the loop only resolved when the model recognized it as a system loop. Zero comments but high severity — this is a direct user-observed regression.
- **[Issue #5237](https://github.com/HKUDS/nanobot/issues/5237)** — MCP tool error envelope handling: when an MCP server returns a business error (e.g., `code: 404`) with `isError = False`, nanobot treats it as success and the LLM never learns the call failed. Author is actively troubleshooting (2 comments).
- **[Issue #5149](https://github.com/HKUDS/nanobot/issues/5149)** — WhatsApp audio not sent by nanobot despite being received. Open since 2026-07-28 with 4 comments. PR #5203 appears to address this but was created before this issue — verification needed.
- **[PR #5251](https://github.com/HKUDS/nanobot/pull/5251)** — Feature request to expose MCP Apps host support in the WebUI, allowing MCP servers to attach interactive UI components (`io.modelcontextprotocol/ui`). Zero comments but addresses a growing MCP ecosystem need.

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **P1** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP tool error envelopes swallowed; agent cannot distinguish business errors from success | No fix PR yet |
| **P1** | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | Goal continuation loops produce dozens of repeated replies under idle conditions | PR #5257 is a direct fix (open) |
| **P2** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp audio messages not sent outbound | PR #5203 closed as fix — needs verification against this issue |
| **P2** | [#5248](https://github.com/HKUDS/nanobot/pull/5248) | Matrix join fails on Continuwity homeserver due to empty POST body | Open PR, not yet merged |
| **P2** | [#5258](https://github.com/HKUDS/nanobot/pull/5258) | Credential-bearing URLs leaking to remote Jina reader (security) | Open PR, not yet merged |

**Regression noted:** PR #5238 removed `Tool.available()` and `SessionAccessScope` abstractions, which may affect sessions relying on per-request tool grants. Monitor for downstream issues.

## 6. Feature Requests & Roadmap Signals

- **MCP Apps UI Support** ([#5251](https://github.com/HKUDS/nanobot/issues/5251)) — Request to expose MCP server-attached UI components in the WebUI. Signals growing MCP ecosystem integration demand.
- **Temporary Chat Mode** ([#5252](https://github.com/HKUDS/nanobot/pull/5252), [#5259](https://github.com/HKUDS/nanobot/pull/5259)) — In-progress; connection-owned, in-memory sessions not persisted to history or memory. Likely to ship in the next release.
- **Shared Interactive Terminal** ([#5253](https://github.com/HKUDS/nanobot/pull/5253)) — PTY-backed terminal dock in WebUI for project-scoped interaction. High-value feature for developer users.
- **Provider-Native Request Switches** ([#5254](https://github.com/HKUDS/nanobot/pull/5254)) — WebUI toggles for provider-specific fields (OpenAI Codex Fast mode, web search tools, xAI X Search). Already merged; signals push toward more granular provider control.
- **Metasearch Provider** ([#5234](https://github.com/HKUDS/nanobot/pull/5234)) — Now merged; future providers may follow this pattern.

## 7. User Feedback Summary

- **WhatsApp audio frustration** ([#5149](https://github.com/HKUDS/nanobot/issues/5149)): Users expect full media parity between send and receive. The bug persists long enough (since late July) that it risks eroding trust in WhatsApp channel reliability.
- **Goal loop exhaustion** ([#5256](https://github.com/HKUDS/nanobot/issues/5256)): Users report the agent producing "dozens of near-identical replies" — a severe UX break that wastes tokens and confuses users. The fact that resolution requires the model to self-identify as a loop is unacceptable.
- **MCP error handling gap** ([#5237](https://github.com/HKUDS/nanobot/issues/5237)): Power users integrating custom MCP servers are hitting a fundamental blind spot: business-level errors inside success envelopes are invisible to the agent. This limits MCP's practical utility for real-world tool servers.
- **Security awareness** ([#5258](https://github.com/HKUDS/nanobot/pull/5258)): A contributor proactively flagged credential leakage to Jina reader — indicates a security-conscious user base that values privacy in web content fetching.
- **WebUI polish** ([#5249](https://github.com/HKUDS/nanobot/pull/5249), [#5250](https://github.com/HKUDS/nanobot/pull/5250)): Users respond positively to visual consistency improvements; the refactor removes low-value Settings copy and standardizes components, suggesting satisfaction with UI maturation.

## 8. Backlog Watch

- **[Issue #5149](https://github.com/HKUDS/nanobot/issues/5149)** — Open since 2026-07-28 with no confirmed fix verification. PR #5203 claims to address audio handling but was authored by a different contributor; maintainers should confirm parity.
- **[Issue #5237](https://github.com/HKUDS/nanobot/issues/5237)** — No fix PR yet. The MCP error envelope issue is architecturally significant and affects all MCP-dependent deployments. Prioritization recommended.
- **[Issue #5251](https://github.com/HKUDS/nanobot/issues/5251)** — MCP Apps UI support has been open for one day with no maintainer response. Low urgency but important for MCP ecosystem visibility.
- **[PR #5248](https://github.com/HKUDS/nanobot/pull/5248)** — Matrix/Continuwity fix is open and P2; small change but blocks a subset of users on that homeserver.
- **[PR #5255](https://github.com/HKUDS/nanobot/pull/5255)** — Draft PR for truthful API service status reporting; no review activity yet. Worth advancing to non-draft if the use case is validated.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-06

## 1. Today's Overview

Hermes Agent is experiencing high developer velocity with **50 issues and 50 PRs actively updated** in the last 24 hours, signaling a concentrated sprint window. No new releases were shipped, indicating the team is still in code-review and integration mode. The dominant themes are the **Telegram Bot API 10.2 feature-parity campaign** (a large meta-issue spawning ~20 child issues), ongoing **god-file decomposition** (epic #78647), and a cluster of P2 bug fixes across cron, TTS, terminal lifecycle, and security surfaces. Project health is strong: active PR flow, clear ownership tags, and systematic issue triage with sweeper labels.

## 2. Releases

**No new releases today.** The repo has no tagged version ships in the current 24h window.

## 3. Project Progress

**Merged/closed PRs today: 0** — all 50 PRs remain open. Several significant PRs advanced in discussion or review:

| PR | Focus | Status |
|----|-------|--------|
| [#79656](https://github.com/NousResearch/hermes-agent/pull/79656) | Webhook route secrets resolved from env vars (`${VAR}`) | Open, P2 |
| [#79581](https://github.com/NousResearch/hermes-agent/pull/79581) | Fix TTS local providers honoring configured voice | Open, P2 |
| [#79661](https://github.com/NousResearch/hermes-agent/pull/79661) | Godfile shard s4 — workspace/worker mixins from `kanban_db.py` | Open, P3 |
| [#79810](https://github.com/NousResearch/hermes-agent/pull/79810) | Windows compatibility for TUI terminal-setup & Intl tests | Open, P3 |
| [#79814](https://github.com/NousResearch/hermes-agent/pull/79814) | Default backup output path per `AGENTS.md` §State files | Open |
| [#79404](https://github.com/NousResearch/hermes-agent/pull/79404) | Fix `lifecycle_guard` NUL-byte crash in cron | Open, P2 |
| [#79708](https://github.com/NousResearch/hermes-agent/pull/79708) | Godfile shard s2 — status-bar/skill-command mixins from `cli.py` | Open, P3 |
| [#79154](https://github.com/NousResearch/hermes-agent/pull/79154) | WhatsApp bridge: verify ownership before port cleanup | Open |
| [#79813](https://github.com/NousResearch/hermes-agent/pull/79813) | Bound `TERMINAL_CWD` lock with timeout | Open |
| [#79811](https://github.com/NousResearch/hermes-agent/pull/79811) | Persist provider in model_config on model switch | Open, P2 |
| [#79812](https://github.com/NousResearch/hermes-agent/pull/79812) | Lazy-install Teams SDK on gateway start | Open, P3 |
| [#76219](https://github.com/NousResearch/hermes-agent/pull/76219) | Security: stop bash ANSI-C quoting bypassing hardline floor | Open, P2, blast-broad |
| [#75352](https://github.com/NousResearch/hermes-agent/pull/75352) | Safely reclaim finished-thread WAL readers | Open, P2 |
| [#79808](https://github.com/NousResearch/hermes-agent/pull/79808) | Enforce required skills via `cron.required_skills` | Open, P3 |
| [#79805](https://github.com/NousResearch/hermes-agent/pull/79805) | Desktop: recover attach & `/compress` after stale session drop | Open, P3 |
| [#79809](https://github.com/NousResearch/hermes-agent/pull/79809) | Patch desktop/TUI dependency advisories (Electron 41.10.3, undici) | Open, P3 |

## 4. Community Hot Topics

### Most Commented Issues

1. **#78647** — [Epic: Shard all 20 god files](https://github.com/NousResearch/hermes-agent/issues/78647) (14 comments)  
   The repo-wide god-file decomposition epic. Standing policy mandates all god files be sharded with no reversion. This is the architectural backbone driving multiple PRs (#79661, #79708, #79127).

2. **#77780** — [lifecycle_guard crashes on embedded null byte](https://github.com/NousResearch/hermes-agent/issues/77780) (12 comments)  
   P2 crash in `cron/lifecycle_guard.py` when scanning paths from heredoc/-c payloads. PR [#79404](https://github.com/NousResearch/hermes-agent/pull/79404) is the targeted fix.

3. **#54962** — [Extract Gateway Platform Routing from gateway/run.py](https://github.com/NousResearch/hermes-agent/issues/54962) (11 comments)  
   `gateway/run.py` is 858KB — a top-priority refactoring target under the god-file epic.

4. **#71941** — [Delegated child context persists through shared terminal snapshots](https://github.com/NousResearch/hermes-agent/issues/71941) (5 comments)  
   `HERMES_DELEGATED_CHILD_CONTEXT` leaks across terminal snapshot boundaries.

5. **#78791** — [Telegram Feature Parity & Alignment Campaign (Bot API 10.2)](https://github.com/NousResearch/hermes-agent/issues/78791) (5 comments)  
   Meta-issue spawning ~20 child feature/fix issues covering the full Bot API 10.2 surface.

**Underlying need:** The community is simultaneously pushing hard on **architecture hygiene** (god-file sharding) and **platform coverage** (Telegram 10.2), while P2 stability bugs in cron/terminal are creating user friction. The high issue count with zero merges suggests a review bottleneck rather than a lack of contribution.

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **P2** | [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) | `lifecycle_guard` crashes on `ValueError: embedded null byte` from `os.open` — breaks all terminal commands | [#79404](https://github.com/NousResearch/hermes-agent/pull/79404) |
| **P2** | [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) | Cost label renders as `$0.00` at 2dp for sub-cent-per-turn models (DeepSeek-class) | — |
| **P2** | [#79459](https://github.com/NousResearch/hermes-agent/issues/79459) | Local TTS providers (Piper + KittenTTS) ignore configured voice | [#79581](https://github.com/NousResearch/hermes-agent/pull/79581) |
| **P2** | [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) | Delegated child context leaks through shared terminal snapshots | — |
| **P3** | [#78788](https://github.com/NousResearch/hermes-agent/issues/78788) | Unknown/data-less Telegram callback queries never answered — client spinner never resolves | — |
| **P3** | [#78784](https://github.com/NousResearch/hermes-agent/issues/78784) | `setMyShortDescription` clobbers bot short description with online/offline status text | — |
| **Security** | [#76219](https://github.com/NousResearch/hermes-agent/pull/76219) | Bash ANSI-C quoting bypasses terminal approval hardline floor (disk-wipe risk) | PR open, under review |
| **P3** | [#79805](https://github.com/NousResearch/hermes-agent/pull/79805) | Desktop `attach` and `/compress` fail after stale session drop (sleep/wake) | Fix PR [#79805](https://github.com/NousResearch/hermes-agent/pull/79805) |
| **P3** | [#79813](https://github.com/NousResearch/hermes-agent/pull/79813) | Unbounded `TERMINAL_CWD` lock causes silent job parking | Fix PR [#79813](https://github.com/NousResearch/hermes-agent/pull/79813) |

**Note:** Two critical security/robustness PRs (#76219, #75352) have been open for 6+ days without merge, both tagged `sweeper:blast-broad`.

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Signal |
|---------|----------|--------|
| **Telegram Bot API 10.2 full parity** | [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) + 20 child issues | **High** — systematic campaign; likely to ship as a plugin update batch |
| **Memory lifecycle management** | [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | Inspection, deduplication, conflict detection for `MEMORY.md`/`USER.md` |
| **Cron required skills enforcement** | [#79808](https://github.com/NousResearch/hermes-agent/pull/79808) | `cron.required_skills` config key |
| **Webhook env-var secrets** | [#79656](https://github.com/NousResearch/hermes-agent/pull/79656) | `${VAR}` resolution for route secrets |
| **WhatsApp bridge safety** | [#79154](https://github.com/NousResearch/hermes-agent/pull/79154) | Ownership verification before port cleanup |
| **Teams lazy SDK install** | [#79812](https://github.com/NousResearch/hermes-agent/pull/79812) | Registry `check_fn` wiring fix |

**Prediction:** The Telegram 10.2 campaign will dominate the next release cycle. God-file sharding (epic #78647) will continue as a cross-cutting effort. Memory lifecycle and cron skill enforcement are likely candidates for the following release.

## 7. User Feedback Summary

- **Terminal/cron reliability** is the top pain point: null-byte crashes (#77780), delegated-context leakage (#71941), and unbounded lock acquisition (#79813) all point to terminal session management as a fragile surface.
- **Cost transparency** frustrates users of cheap models (#79220) — sub-cent costs rendering as `$0.00` undermines budget tracking.
- **TTS voice configuration** is silently ignored (#79459), causing unexpected default-voice output.
- **Telegram UX gaps** are widely felt: callback spinner hang (#78788), short-description clobbering (#78784), and missing reply/inline keyboard support (#78780, #78781) create a fragmented bot experience.
- **Desktop resilience** after sleep/wake (#79805) and dependency security patches (#79809) indicate Windows/desktop users are actively engaging and reporting edge cases.
- **Security concern** around ANSI-C quoting bypass (#76219) suggests power users are stress-testing the hardline approval floor.

Overall sentiment: users value Hermes's depth but are encountering growing pains from rapid feature expansion outpacing stability guarantees, particularly in terminal/cron and platform integrations.

## 8. Backlog Watch

| Issue/PR | Age | Concern |
|----------|-----|---------|
| [#54962](https://github.com/NousResearch/hermes-agent/issues/54962) — Extract Gateway Platform Routing | ~39 days | `gateway/run.py` at 858KB; top refactoring target with no merge yet |
| [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) — Delegated child context leak | ~11 days | No fix PR; session-state risk |
| [#76219](https://github.com/NousResearch/hermes-agent/pull/76219) — ANSI-C quoting hardline bypass | ~5 days | Security-critical, `sweeper:blast-broad`, awaiting review |
| [#75352](https://github.com/NousResearch/hermes-agent/pull/75352) — WAL reader reclamation | ~6 days | Resource leak; `sweeper:blast-broad` |
| [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) — Memory lifecycle management | ~2 days | Needs decision; no PR yet |
| [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) — Cost label 2dp formatting | ~1 day | Display bug, no fix PR |

**Key risk:** The merge rate is effectively zero despite high submission volume. The review capacity appears to be the bottleneck. The two `blast-broad` security/resource PRs (#76219, #75352) deserve priority triage.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-06

## 1. Today's Overview

PicoClaw recorded **4 PR updates** in the last 24 hours with zero new issues and no releases, indicating moderate contributor momentum focused on maintenance and feature expansion rather than urgent stabilization. The most notable development is the closure of **PR #926**, which adds Anthropic OAuth setup-token authentication — a meaningful capability upgrade. Three open PRs are actively awaiting review, spanning lockfile repair, fallback-chain configuration, and infrastructure consolidation. With no issue activity, there are no pressing stability concerns surfacing today.

## 2. Releases

No new releases were published in the reporting window.

## 3. Project Progress

**Merged/Closed today:**
- **[PR #926](https://github.com/sipeed/picoclaw/pull/926)** — `feat(auth): add Anthropic OAuth setup-token login` (closed 2026-08-05). Introduced `--setup-token` flag and interactive login menu for Anthropic OAuth tokens (`sk-ant-oat01-*`), integrated the Anthropic usage endpoint for 5-hour/7-day utilization display in `auth status`, and added streaming support for OAuth tokens. This expands PicoClaw's provider authentication surface beyond API keys.

**PRs under active review:**
- **[PR #3318](https://github.com/sipeed/picoclaw/pull/3318)** — Fixes a broken `pnpm-lock.yaml` containing a duplicate `semver@7.8.5` mapping key that causes `ERR_PNPM_BROKEN_LOCKFILE` and blocks installation.
- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** — Adds a configurable default model fallback chain persisted through the backend API, enabling users to define ordered fallback models via the web UI.
- **[PR #1951](https://github.com/sipeed/picoclaw/pull/1951)** — Consolidates installation scripts from the docs repo into the main PicoClaw repo, reducing maintenance fragmentation (related to [docs PR #14](https://github.com/sipeed/picoclaw_docs/pull/14)).

## 4. Community Hot Topics

No issues were opened or updated today, so there are no hot-topic discussions to surface. Among PRs, **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** stands out as the most community-relevant feature request — a configurable fallback chain addresses a common pain point for users relying on multiple models with varying availability and cost. Its existence signals strong demand for **resilient multi-model routing** in personal AI assistants.

## 5. Bugs & Stability

- **PR #3318** ([link](https://github.com/sipeed/picoclaw/pull/3318)) — **High severity**: `pnpm-lock.yaml` duplication prevents dependency resolution on clean installs. This is a build-blocking bug that should be merged promptly. No separate issue was filed; the fix PR is already open.
- No crash reports, regressions, or stability issues were raised today.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Assessment |
|---|---|---|
| Anthropic OAuth setup-token auth | PR #926 (merged) | ✅ Delivered — expands provider coverage |
| Configurable model fallback chain | PR #3200 | ⏳ Likely candidate for next minor release; directly addresses multi-model resilience |
| Installation script consolidation | PR #1951 | ⏳ Dev-experience improvement; low risk, high value for onboarding |

The fallback-chain feature (PR #3200) is the strongest roadmap signal — it represents a user-facing capability that would materially improve assistant reliability and could feature in an upcoming release.

## 7. User Feedback Summary

- **Satisfaction signal**: PR #926's merge indicates users value **alternative authentication flows** beyond static API keys, particularly OAuth-based workflows that improve security and token rotation.
- **Pain point**: The lockfile bug (PR #3318) suggests that dependency management hygiene has lapsed, likely due to concurrent PR merges updating `semver` to the same version under different resolution paths. This points to a need for stricter CI lockfile validation.
- **Use case trend**: The fallback-chain PR (#3200) and OAuth expansion both reflect a growing user base treating PicoClaw as a **production-adjacent personal assistant** requiring reliability and secure auth, not just a dev tool.

No negative feedback or dissatisfaction indicators were reported today.

## 8. Backlog Watch

| PR/Issue | Age | Status | Risk |
|---|---|---|---|
| [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) | ~4.5 months (created 2026-03-24) | Open | Low — infra housekeeping, but long dwell time suggests low priority or stale |
| [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) | ~5 weeks (created 2026-07-01) | Open | Medium — high-value feature sitting in review; recommend triage |
| [PR #3318](https://github.com/sipeed/picoclaw/pull/3318) | 1 day | Open | High — blocking bug with an existing fix; should be fast-tracked |

**Recommendation**: Prioritize merging PR #3318 immediately to unblock installs, then triage PR #3200 for the next release cycle. PR #1951 can be reviewed during a low-activity period.

---

**Project Health Assessment**: 🟡 **Moderate** — Active contributor engagement on features and one critical fix, but no release cadence and a blocking lockfile bug warrant attention.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-06

## 1. Today's Overview

NanoClaw shows healthy development momentum with 12 PRs and 2 active issues touched in the last 24 hours. No new releases were shipped, but 2 PRs were closed (merged), indicating steady progress on database integrity and agent messaging fixes. The project is in a refinement phase—focusing on stabilizing core database invariants, improving channel robustness, and expanding the skills ecosystem—rather than pushing a new version.

## 2. Releases

No new releases were published today. The most recent cycle has centered on accumulated PR closures and open refactors that may collectively land in a future version.

## 3. Project Progress

**Merged / Closed today:**

- **#3175 → #3192** (Joi) — Command-gate denial routing fixed. The original PR (#3175) was superseded by #3192, which routes denial notices through the delivery adapter instead of writing directly to `outbound.db`. This eliminates a second-writer race condition on container-owned databases, aligning with the repo's own single-writer invariant. [[PR #3192](https://github.com/nanocoai/nanoclaw/pull/3192)] [[PR #3175](https://github.com/nanocoai/nanoclaw/pull/3175)]
- **#3187** (dim0627) — Built-in `SendMessage` now disallowed for agents, enabling agent-to-agent messaging to function correctly. [[PR #3187](https://github.com/nanocoai/nanoclaw/pull/3187)]

**Key open work advancing:**

- **#3156** (glifocat) — Channel attachments are now carried to providers as structured parts rather than opaque blobs, improving multimodal support. [[PR #3156](https://github.com/nanocoai/nanoclaw/pull/3156)]
- **#3188** (kambodscharoger294-cyber) — OneCLI gateway environment variables (e.g., `HTTPS_PROXY`, CA trust) are now forwarded to spawned MCP servers, fixing a connectivity gap for constrained networks. [[PR #3188](https://github.com/nanocoai/nanoclaw/pull/3188)]
- **#3172** (glifocat) — Stale Qodo and Google MCP skills removed as part of ongoing cleanup. [[PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172)]
- **#3186** (zvi-fried) — Host-seam refactoring adds capability ownership boundaries for skills. [[PR #3186](https://github.com/nanocoai/nanoclaw/pull/3186)]
- **#3190** (manisrinivasan2k1) — New Tavily MCP tool skill added. [[PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)]
- **#3189** (teran13) — `add-why` skill introduced for explaining what happened to a single message. [[PR #3189](https://github.com/nanocoai/nanoclaw/pull/3189)]
- **#3050** (OmriBenShoham) — Dial integration added to the channel picker and wizard via `runChannelSkill` model. [[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)]
- **#3191** (apelosi) — WhatsApp `setup()` bound to a timeout, preventing host startup hangs on logged-out sessions. [[PR #3191](https://github.com/nanocoai/nanoclaw/pull/3191)]

## 4. Community Hot Topics

- **[PR #3192](https://github.com/nanocoai/nanoclaw/pull/3192)** — Database single-writer integrity is a recurring concern. The fact that Joi re-submitted a corrected version indicates the team is actively addressing architectural consistency. This is likely the highest-impact PR open today.
- **[Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528)** — Signal image/PDF attachments unreachable from the agent container. A persistent bug with no fix PR yet; reflects the ongoing challenge of cross-container file access.
- **[Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006)** — Docker socket permission denied on Debian 12 LXC. The recovery path fails, suggesting gaps in the installer's robustness for containerized Proxmox environments.

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **High** | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | Signal image/PDF attachments unreachable from agent container | No fix PR open |
| **Medium** | [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) | Fresh Debian 12 LXC install: docker socket permission denied, recovery path doesn't fire | No fix PR open |
| **Medium** | [#3191](https://github.com/nanocoai/nanoclaw/pull/3191) | WhatsApp logged-out session hangs host startup (unbounded Promise) | Fix PR open (#3191) |

The WhatsApp hang fix (#3191) directly addresses a stability regression. The two open issues remain unfixed and should be monitored.

## 6. Feature Requests & Roadmap Signals

- **Tavily MCP skill** (#3190) — Community-driven expansion of search/MLP tooling; signals demand for integrated research capabilities.
- **Dial channel** (#3050) — Adding another communication channel to the picker; indicates interest in diversifying supported endpoints beyond messaging apps.
- **`add-why` explainability skill** (#3189) — Debugging/observability feature; suggests users want better tooling for diagnosing agent behavior on individual messages.
- **OneCLI gateway env forwarding** (#3188) — Infrastructure improvement for corporate/proxy environments; likely to be prioritized given the open PR.

These signals point toward a roadmap emphasizing **skill ecosystem growth**, **channel diversity**, and **observability/debugging**.

## 7. User Feedback Summary

- **Pain point — cross-container file access:** Issue #2528 highlights friction when users send media-rich messages over Signal; the agent cannot process attachments it receives. This is a core functionality gap.
- **Pain point — installer fragility on LXC:** Issue #2006 shows the setup script doesn't gracefully handle `usermod` group changes within the same process, a real barrier for Proxmox/LXC users.
- **Satisfaction — skill ecosystem expanding:** New skills (Tavily, add-why, Dial channel) and cleanup (Qodo/Google MCP removal) show responsive maintenance and active contributor engagement.
- **Satisfaction — architectural hardening:** The command-gate denial fix and agent-to-agent messaging resolution indicate the team is addressing correctness at the core.

## 8. Backlog Watch

- **[Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528)** — Open since 2026-05-18 (~79 days). No fix PR. High-priority user-facing bug.
- **[Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006)** — Open since 2026-04-25 (~72 days). No fix PR. Blocks installers on LXC environments.

Both issues are long-standing with no maintainer response. Maintainer attention here would significantly improve onboarding and core feature completeness.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-08-06

## 1. Today's Overview

NullClaw shows **low activity** over the past 24 hours, with zero new issues and zero merged or closed pull requests. Two open PRs remain unmerged, both authored by **raskevichai** and addressing runtime stability fixes. No new releases were published. The project appears to be in a quiet maintenance phase, with no closed issues suggesting the team may not be actively triaging or closing out work today.

---

## 2. Releases

**No new releases.** The most recent release information is unavailable. The two open PRs (#984, #985) address runtime stack sizing and channel polling stability — both candidates for a future patch release once merged.

---

## 3. Project Progress

| PR | Status | Summary |
|----|--------|---------|
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | Open | Fixes stack overflow in the agent turn path by allocating a dedicated 16 MiB stack |
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | Open | Fixes Telegram and Matrix channels going silent overnight due to supervisor not detecting dead polling threads |

**No PRs merged or issues closed today.** Both open PRs target stability regressions rather than new features.

---

## 4. Community Hot Topics

- **[PR #985](https://github.com/nullclaw/nullclaw/pull/985)** — Agent turn path stack size fix. Root cause: `SESSION_TURN_STACK_SIZE` was aliased to `HEAVY_RUNTIME_STACK_SIZE` (only 2 MiB), causing stack overflows in deeper session-processing paths. This is a **structural fix** for production reliability under heavy use.
- **[PR #984](https://github.com/nullclaw/nullclaw/pull/984)** — Channel polling thread death detection. Root cause: the supervisor loop was blind to silent channel threads after idle periods, requiring manual gateway restarts. Closes issue [#972](https://github.com/nullclaw/nullclaw/issues/972).

**Underlying need:** Users are hitting production-grade stability issues (silent channels, stack overflows) rather than feature gaps. The community appears to be running NullClaw at scale, where these bugs have real operational impact.

---

## 5. Bugs & Stability

| Severity | Issue | PR Fix | Notes |
|----------|-------|--------|-------|
| **High** | [#972](https://github.com/nullclaw/nullclaw/issues/972) — Telegram/Matrix channels go silent after idle periods, require full gateway restart | [#984](https://github.com/nullclaw/nullclaw/pull/984) (open) | Supervisor structurally blind to dead polling threads |
| **Medium** | [#976](https://github.com/nullclaw/nullclaw/issues/976) — Stack overflow on deep agent turn paths | [#985](https://github.com/nullclaw/nullclaw/pull/985) (open) | 2 MiB stack insufficient for `SessionManager.processMessage*()` call chains |

Both bugs are **regressions or design oversights** with open PR fixes already in review. No new bugs reported today.

---

## 6. Feature Requests & Roadmap Signals

**No new feature requests reported today.** The active PRs are maintenance-driven. Based on the current trajectory:

- Expect a **patch release** focusing on runtime stability once PRs #984 and #985 are merged.
- No evidence of roadmap-shaping feature discussions in the last 24 hours.

---

## 7. User Feedback Summary

- **Pain point 1:** Channels (Telegram, Matrix) going silent after overnight idle — forces manual intervention and downtime.
- **Pain point 2:** Stack overflows on complex agent turn paths — likely triggered in long-running sessions with deep message processing.
- Both issues come from real production usage patterns. The author (raskevichai) appears to be an active contributor addressing bugs encountered during deployment. No satisfaction/dissatisfaction signals beyond the technical descriptions.

---

## 8. Backlog Watch

| Item | Age | Priority |
|------|-----|----------|
| [#972](https://github.com/nullclaw/nullclaw/issues/972) (silent channels) → [#984](https://github.com/nullclaw/nullclaw/pull/984) (open) | ~2 days since PR creation | High — production-impacting |
| [#976](https://github.com/nullclaw/nullclaw/issues/976) (stack overflow) → [#985](https://github.com/nullclaw/nullclaw/pull/985) (open) | ~2 days since PR creation | Medium — reliability fix |

**Key concern:** Two stability-critical PRs have been open for ~2 days with no merge activity or comments. The 0 merged PRs and 0 closed issues today suggest the maintainer team may be slow on triage. If these remain unmerged, users running NullClaw in production will continue to experience silent channels and stack overflows.

---

**Project Health Assessment:** 🟡 **Stable but slow.** Core runtime bugs exist with fixes in progress, but low merge velocity and no new releases signal a maintenance-heavy period. Worth monitoring PR #984 and #985 for merge status.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026‑08‑06

## 1. Today's Overview
IronClaw is in an active release‑candidate phase for v1.1.0, with high daily activity (43 issues updated, 50 PRs updated in the last 24 h). A bug‑bash cycle (PRs #7245‑#7249) uncovered several agent‑behavior regressions, while core work on skills, sandbox isolation, and outbound delivery continues. The project shows healthy momentum with 18 PRs merged/closed today and a steady stream of new enhancements and bug fixes.

## 2. Releases
**ironclaw‑v1.1.0‑rc.1** (2026‑08‑03)  
First release candidate since 1.0.0. Headline features:
- Register arbitrary hosted MCP servers
- Install extensions from IronHub deep links
- Durable file attachments that cross channels
- Slack `/ironclaw` slash commands
- Broad improvements to failure legibility

No breaking changes or migration notes are listed; the candidate is intended for community validation before a final v1.1.0 release.

## 3. Project Progress
**Merged/Closed PRs (today):**
- [#7261](https://github.com/nearai/ironclaw/pull/7261) – fix(ci): resolve release canary temp path (zero‑job failure in tag‑only workflow)
- [#7196](https://github.com/nearai/ironclaw/pull/7196) – chore(deps): bump wasm group (wasmtime‑wasi, wit‑component, wit‑parser)
- [#6831](https://github.com/nearai/ironclaw/pull/6831) – feat(reborn): standardized messaging framework (16 core ops, canonical error taxonomy)

**Key advancements in progress:**
- Skills lifecycle and selection ([#7171](https://github.com/nearai/ironclaw/pull/7171), [#6938](https://github.com/nearai/ironclaw/pull/6938), [#6745](https://github.com/nearai/ironclaw/pull/6745))
- Outbound delivery durability ([#7029](https://github.com/nearai/ironclaw/pull/7029), [#7028](https://github.com/nearai/ironclaw/pull/7028))
- Sandbox profiles for Docker and Railway ([#7214](https://github.com/nearai/ironclaw/pull/7214))
- Design‑system integration and governance documentation ([#7039](https://github.com/nearai/ironclaw/pull/7039), [#7043](https://github.com/nearai/ironclaw/pull/7043), [#7255](https://github.com/nearai/ironclaw/pull/7255))

## 4. Community Hot Topics
**Most‑discussed issues (by comment count):**
1. [#3036](https://github.com/nearai/ironclaw/issues/3036) – *Epic: Configuration‑as‑Code for IronClaw Reborn* (7 comments) – Demand for declarative tenant blueprints and audit trails.
2. [#7194](https://github.com/nearai/ironclaw/issues/7194) – *feat(outbound): admin‑allowed shared channel as outbound target* (3 comments) – Need for agents to designate Slack channels as delivery endpoints.
3. [#6257](https://github.com/nearai/ironclaw/issues/6257) – *Bug: Invalid value (attachments.mime_type) when sending/generating PDF* (2 comments) – PDF handling regression.
4. [#7204](https://github.com/nearai/ironclaw/issues/7204) – *webui: focus composer on “+ New” and thread open* (2 comments) – UX papercut in WebChat v2.
5. [#7209](https://github.com/nearai/ironclaw/issues/7209) – *fix(ci): regression gate cannot see node:assert style* (2 comments) – CI false‑positive blocking frontend fixes.

**Underlying needs:** Operators want simpler, version‑controlled configuration; agents need richer outbound routing; PDF and attachment workflows require robustness; CI should not block valid frontend changes.

## 5. Bugs & Stability
**Critical/High‑severity bugs (reported 2026‑08‑05):**
- [#7246](https://github.com/nearai/ironclaw/issues/7246) – *P1: Agent hallucinates automation status* – Agent confidently claims an automation is running when none exist.
- [#7247](https://github.com/nearai/ironclaw/issues/7247) – *P1: Agent falsely claims GitHub is already connected* – False authentication‑state reporting.
- [#7248](https://github.com/nearai/ironclaw/issues/7248) – *P2: Invalid custom MCP endpoint accepted, then causes run failure* – Lack of endpoint validation before registration.
- [#7249](https://github.com/nearai/ironclaw/issues/7249) – *P2: Slack DM execution result delivered to Telegram* – Cross‑channel delivery contamination.
- [#7250](https://github.com/nearai/ironclaw/issues/7250) – *P2: DeepWiki MCP misleading auth guidance for network failures* – Error speculation instead of clear reporting.
- [#7251](https://github.com/nearai/ironclaw/issues/7251) – *P2: Agent guesses MCP authentication type* – Instead of discovering or initiating auth flow.
- [#6257](https://github.com/nearai/ironclaw/issues/6257) – *PDF mime_type error* – Attachment generation broken.
- [#7254](https://github.com/nearai/ironclaw/issues/7254) – *P2: Cannot access files attached to Slack feedback threads* – Triage workflow failure.

**Fix PRs in progress:**  
Several bug‑bash issues are new and do not yet have linked fixes. The CI regression gate (#7209) is tracked but no PR is yet open. Outbound delivery durability is addressed by stacked PRs #7028/#7029.

## 6. Feature Requests & Roadmap Signals
- **Configuration‑as‑Code** ([#3036](https://github.com/nearai/ironclaw/issues/3036)) – Epic for declarative tenant blueprints; likely target for post‑v1.1.0.
- **Admin‑managed agents as UserId subjects** ([#6578](https://github.com/nearai/ironclaw/issues/6578)) – Epic to separate product‑agent identities from private users.
- **IronHub integration** ([#6731](https://github.com/nearai/ironclaw/issues/6731)) – Runtime skill marketplace; already mentioned in v1.1.0‑rc.1 notes.
- **Skills self‑creation and selection** ([#6941](https://github.com/nearai/ironclaw/issues/6941)) – Epic driving the stacked skill‑selection PRs.
- **Web Debug Inspector** ([#7218](https://github.com/nearai/ironclaw/issues/7218)) – Operator‑only tool for prompt, tool, and model‑usage inspection.
- **OOBE automation‑tasks prototype** ([#6993](https://github.com/nearai/ironclaw/issues/6993)) – Backend wiring for onboarding automations.

**Predicted v1.1.0 features:** IronHub integration, Slack slash commands, durable attachments, basic MCP registration, and improved failure legibility. Longer‑term epics (config‑as‑code, admin‑managed agents, skills self‑creation) will likely land in v1.2+.

## 7. User Feedback Summary
**Pain points:**
- **Agent reliability:** Hallucinated states (automation running, GitHub connected) and incorrect MCP auth speculation erode trust.
- **Cross‑channel contamination:** Slack DM results appearing in Telegram disrupts workflow isolation.
- **Attachment handling:** PDF generation fails with mime‑type errors; Slack feedback‑thread files are inaccessible.
- **CI friction:** Regression gate blocks frontend PRs that use `node:assert` style, creating false failures.
- **Configuration complexity:** Operators desire declarative, diffable, auditable configuration instead of scattered `.env` and JSON edits.

**Satisfaction signals:**  
The bug‑bash activity shows engaged QA testing. Merged progress on skills lifecycle, standardized messaging, and sandbox profiles indicates the team is addressing core architectural debts.

## 8. Backlog Watch
**Important issues needing maintainer attention:**
- [#7245](https://github.com/nearai/ironclaw/issues/7245) – *Decompose reborn_services.rs (>6,400 lines)* – Architecture debt tracker; no assigned PR yet.
- [#7231](https://github.com/nearai/ironclaw/issues/7231) – *PR reviews saying “APPROVE” never submit real GitHub approval* – Merge‑queue blockage bug.
- [#7208](https://github.com/nearai/ironclaw/issues/7208) – *Delete dead ThreadSidebar component* – Cleanup task with low risk.
- [#7053](https://github.com/nearai/ironclaw/issues/7053) – *Close Critical E2E Coverage Gaps* – Epic tracking three essential E2E scenarios; some sub‑tasks closed, remaining work needs coordination.
- [#7038](https://github.com/nearai/ironclaw/issues/7038) – *Epic: Storybook + AI‑first Design System* – Design‑system initiative; phase‑1 PR merged, phase‑2 in progress.

---

*Data source: GitHub API snapshot for nearai/ironclaw on 2026‑08‑06.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-08-06

## 1. Today's Overview

LobsterAI showed strong development momentum on 2026-08-06, with **13 PRs updated** and **3 new issues** filed in the last 24 hours. A new patch release (2026.8.5) shipped alongside 12 merged/closed PRs, indicating an active release cadence. Community engagement is healthy: two user-reported bugs (#2440, #2441) surfaced on the same day, both pointing to systemic prompt-injection and skill-matching issues in the desktop client. Overall, the project is in a stable developmental phase with consistent merge throughput and responsive maintainer activity.

**Activity Assessment:** 🟢 **High** — 13 PRs, 12 merged, 1 release, 3 open issues.

---

## 2. Releases

### v2026.8.5 (2026-08-05)

| Change | Detail |
|---|---|
| `feat(activity)` | Native daily check-in experience (#2408, @btc69m979y-dotcom) |
| `feat(enterprise)` | Isolated account-scoped auth and service flows (#2409, @liuzhq1986) |
| `style` | Miscellaneous styling updates |

**Breaking Changes:** None reported. Enterprise auth isolation (#2409) may require configuration review for existing deployments using account-scoped services.

**Migration Notes:** No explicit migration guide provided. Users on enterprise deployments should verify that account-scoped auth tokens continue to resolve correctly after the isolation change.

---

## 3. Project Progress

### Merged / Closed PRs (12 today)

| PR | Author | Area | Summary |
|---|---|---|---|
| [#2439](https://github.com/netease-youdao/LobsterAI/pull/2439) | @btc69m979y-dotcom | renderer | Fix: include close icon in startup credit poster |
| [#2438](https://github.com/netease-youdao/LobsterAI/pull/2438) | @btc69m979y-dotcom | renderer | Update startup credit poster asset |
| [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437) | @fisherdaddy | main, cowork | Harden window lifecycle and shutdown against hangs |
| [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436) | @fisherdaddy | main, openclaw | Prevent gateway lock poisoning from self-restart races |
| [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) | @liuzhq1986 | renderer, docs, cowork | Add title-bar conversation search |
| [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | @MaoQianTu | — | Fix: `teamTypeNum` hardcoding bug in NIM gateway |
| [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) | @dependabot[bot] | deps-dev | Bump `cross-env` 7.0.3 → 10.1.0 |
| [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) | @dependabot[bot] | deps | Bump `react-dom` 18.3.1 → 19.2.4 |
| [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | @dependabot[bot] | deps-dev | Bump `vite` 5.4.21 → 8.0.9 |
| [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) | @liuzhq1986 | all | rlog fix 2026-08-03 |
| [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) | @liuzhq1986 | all | rlog fix 2026-08-03 |
| [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433) | @btc69m979y-dotcom | renderer | Polish startup credit campaign experience |
| [#2432](https://github.com/netease-youdao/LobsterAI/pull/2436) | @btc69m979y-dotcom | renderer | Disable final reward auto-popup |

**Key Advances:**
- **Reliability:** PR #2437 and #2436 directly address app shutdown hangs and gateway lock poisoning — two stability-critical fixes for the Electron/OpenClaw runtime.
- **UX:** Conversation search in the title bar (#2435) improves navigability in long cowork sessions.
- **Dependencies:** React DOM upgraded to 19.x and Vite to 8.x, aligning the stack with current LTS standards.

---

## 4. Community Hot Topics

### Issue #1200 / PR #1201 — NIM Super-Group Name Resolution Bug
- **URL:** [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) · [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)
- **Author:** @MaoQianTu · Created 2026-04-01 · Updated 2026-08-05 · **Stale**
- **Comments:** 1
- **Analysis:** This is a **4-month-old open issue** with an associated fix PR (#1201) that remains unmerged. The bug causes incorrect group name display when users @-mention the bot in NIM super-groups. The underlying need is **reliable IM integration** for enterprise users who depend on LobsterAI as a group-bot. The stale status suggests the fix may need re-review or rebase against the current codebase.

### Issue #2441 — Skill Switch Mismatch Between Directory Name and Frontmatter
- **URL:** [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441)
- **Author:** @fujingzhai · Created 2026-08-05
- **Comments:** 0
- **Analysis:** Users cannot persistently simplify system prompts across new conversations because skill开关 are keyed by directory name while OpenClaw matches by frontmatter `name`. This reveals a **design-level gap in skill configuration UX** — a real pain point for power users who want fine-grained control over system prompt injection. Likely to surface again as more users adopt OpenClaw runtimes.

### Issue #2440 — Duplicate System Prompt Injection (4,425 chars)
- **URL:** [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440)
- **Author:** @fujingzhai · Created 2026-08-05
- **Comments:** 0
- **Analysis:** 78% of the injected system instructions in the desktop client duplicate content already present in `AGENTS.md`. This is a **prompt-efficiency and cost issue** — redundant instructions increase token usage and may confuse models with conflicting directives. Both #2440 and #2441 originate from the same author and point to a broader need for **deduplicated, persistent prompt management** in the desktop experience.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|---|---|---|---|
| 🔴 **High** | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | Duplicate system prompt injection (4,425 chars, 78% overlap with `AGENTS.md`) | No fix PR yet |
| 🟠 **Medium** | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | Skill开关 mismatch between directory name and frontmatter; `openclaw.json` overwritten wholesale | No fix PR yet |
| 🟠 **Medium** | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | NIM `teamTypeNum` hardcoding causes incorrect group name display in super-groups | Fix PR #1201 open but stale |
| 🟢 **Low** | Startup credit campaign — white side gutters, auto-popup behavior | Visual polish and UX edge cases | Fixed via #2433, #2432, #2438 |

**Stability Highlights:**
- PR #2437 mitigates **app shutdown hangs** caused by lingering keep-alive sockets — a significant reliability improvement for the Electron main process.
- PR #2436 prevents **gateway lock poisoning** from self-restart race conditions on Windows — reduces restart failures from up to 30s to near-zero.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Prediction |
|---|---|---|
| Persistent, deduplicated system prompt injection | #2440, #2441 | Likely in next desktop release; users demand granular control over prompt composition without file-overwrite side effects |
| Conversation search in title bar | #2435 (merged) | Already shipped — may expand to artifact panel and cowork history |
| Enterprise auth isolation | #2409 (shipped) | Suggests roadmap toward multi-tenant or org-scoped deployment models |
| Native daily check-in | #2408 (shipped) | May indicate a broader engagement/retention feature track |
| OpenClaw runtime maturity | #2441, #2436 | Continued investment in lock management and skill configuration suggests OpenClaw is a strategic priority |

**Predicted Next Version Features:**
1. **Prompt deduplication engine** — resolving #2440's duplicate injection.
2. **Skill config sync fix** — aligning directory-name vs. frontmatter matching (#2441).
3. **Gateway resilience improvements** — building on #2436's lock poisoning fix.

---

## 7. User Feedback Summary

| Theme | Sentiment | Details |
|---|---|---|
| System prompt management | 😠 **Frustrated** | Two issues from @fujingzhai on the same day highlight a broken UX for persistent, concise system prompts. The wholesale overwrite of `openclaw.json` and duplicate injection are significant pain points. |
| IM integration reliability | 😐 **Neutral** | NIM super-group name bug (#1200) has been open 4 months. Users who depend on group @-mention functionality are underserved. |
| App stability (shutdown/lock) | 🙂 **Satisfied** | Maintainers actively patched shutdown hangs and lock poisoning — responsive to user-reported instability. |
| Campaign/Activity UX | 🙂 **Satisfied** | Startup credit campaign polished quickly with multiple PRs (#2432, #2433, #2438, #2439). |
| Dependency modernization | 🙂 **Positive** | React 19 and Vite 8 upgrades signal long-term stack health. |

**Notable User Quote (paraphrased from #2441):** *"Users have no way to persistently simplify the system prompt entered at the start of each new conversation."* — This is a structural design gap, not a one-off bug.

---

## 8. Backlog Watch

| Issue/PR | Age | Severity | Status | Action Needed |
|---|---|---|---|---|
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) + [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | **4 months** | Medium | PR open, issue stale | Re-review and merge fix PR #1201; the one-line fix is well-scoped |
| [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | 1 day | High | Open | Needs design decision: deduplicate at injection time or restructure `AGENTS.md` loading |
| [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 1 day | Medium | Open | Requires architectural change to skill sync — directory name vs. frontmatter alignment |

**Recommendation:** Prioritize #2440 and #2441 in the next sprint — they affect core user workflows (system prompt management) and share a common root cause in the OpenClaw config sync layer. The 4-month-old #1200/#1201 should be triaged and closed or merged promptly to clear the stale backlog.

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



# CoPaw Project Digest — 2026-08-06

---

## 1. Today's Overview

CoPaw (agentscope-ai/CoPaw) shows **high daily activity** with 25 issues and 50 PRs updated in the past 24 hours, indicating a vibrant and actively maintained open-source project. The project is in a period of significant stabilization effort — several critical bugs around streaming retries, MCP tool reliability, and desktop environment crashes were reported and addressed today. No new releases were published, but 21 PRs were merged or closed, suggesting ongoing development velocity is strong. The community is engaged with diverse contributions spanning channel integrations, UX improvements, and backend reliability fixes.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

### Merged/Closed PRs (21 total)

| PR | Description | Impact |
|----|-------------|--------|
| [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) | Console UI for LLM fallback configuration | Enables users to configure per-agent and global fallback model lists via the web UI |
| [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) | Per-agent and global LLM model fallback with safe retry boundaries | Backend support for automatic model failover when primary model exhausts retries |
| [#5462](https://github.com/agentscope-ai/QwenPaw/pull/5462) | Global responsive utility classes for console | Unifies mobile-adaptation patterns, reducing CSS duplication |
| [#5447](https://github.com/agentscope-ai/QwenPaw/pull/5447) | Yield failed AgentResponse on console errors | Fixes UI hanging in perpetual waiting state when model/runtime errors occur |
| [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675) | Force relay `reasoning_content` for DeepSeek models | Fixes #6667, #6541 — resolves 400 errors when thinking-mode APIs require reasoning_content on every turn |
| [#6718](https://github.com/agentscope-ai/QwenPaw/pull/6718) | Unify app market listings | Consolidates app marketplace UI |
| [#6713](https://github.com/agentscope-ai/QwenPaw/pull/6713) | Audit visibility for sensitive directory exclusion | Adds audit logging for router-level directory exclusion rules |
| [#6716 → closed as invalid](https://github.com/agentscope-ai/QwenPaw/issues/6716) | Nightly test `test_auto_update_persists_targets` fix | Integration test stability improvement |

**Key advances today:** The LLM fallback system (PRs #5597, #5598) shipped end-to-end, and DeepSeek thinking-mode compatibility was patched. Console resilience improvements (PR #5447) address a long-standing UX pain point.

---

## 4. Community Hot Topics

### Most Discussed/Open Issues

1. **[Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)** — *Add channel retry functionality* (4 comments)
   Users connecting via self-hosted Matrix report that QwenPaw starts faster than the Matrix service, causing silent failures with no retry or health-check mechanism. **Underlying need:** reliable channel reconnection in production deployments where service startup order is non-deterministic.

2. **[Issue #6436](https://github.com/agentscope-ai/QwenPaw/issues/6436)** — *Automatic Model Routing* (3 comments)
   Proposal to route each message to the most suitable model dynamically (small/fast for simple turns, vision model for images, large model for reasoning). **Underlying need:** cost optimization and capability-aware model selection without manual per-agent configuration.

3. **[Issue #6696](https://github.com/agentscope-ai/QwenPaw/issues/6696)** — *WeChat iLink: one-time context_token consumed by typing indicator* (2 comments)
   The `context_token` is consumed by the typing indicator before the actual reply, causing all replies to be rejected with `ret=-2`. **Underlying need:** WeChat channel reliability for Chinese-speaking users.

4. **[Issue #6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)** — *MCP tools periodically fail* (2 comments)
   MCP tools become unresponsive after hours of operation; only a container restart restores functionality. **Underlying need:** production-grade MCP stability for sustained agent usage.

---

## 5. Bugs & Stability

### Critical / High Severity

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) | `execute_shell_command` crashes with `TypeError: replace() should be called on dataclass instances` when `sandbox_config` is passed | Open — no fix PR yet |
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 desktop injects `PYTHONHOME` into child env → all Python subprocesses crash with `ModuleNotFoundError` | Open — no fix PR yet |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | v2.1.0b1 browser SDK — `open()` always fails with `WireProtocolError: Target crashed` (isolated Playwright session) | Open — no fix PR yet |
| [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) | **Closed** — Massive tool output causes history loading to freeze; suggests output truncation and pagination | Merged (closed) |
| [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | Long console sessions with heavy tool usage fail with 400 "Messages with role 'tool' must be a response to a preceding message with 'tool_calls'" | Open — no fix PR yet |

### Medium Severity

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) | 400 `invalid_request_error` when session history with tool calls is used with thinking-mode upstream; `reasoning_content` relay fails | [PR #6675](https://github.com/agentscope-ai/QwenPaw/pull/6675) merged; [PR #6721](https://github.com/agentscope-ai/QwenPaw/pull/6721) open |
| [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) | 503 SSE in-stream errors not retried, request fails immediately | [PR #6714](https://github.com/agentscope-ai/QwenPaw/pull/6714) open |
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | WeChat iLink `context_token` consumed by typing indicator | No fix PR yet |
| [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) | **Closed** — Approval prompts unreachable when using WeChat channel only | Closed (likely addressed by context_token fix) |
| [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | **Closed** — `cron pause/resume` doesn't persist `enabled` state across restarts | Closed (merged fix) |
| [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter multimodal probe overwrites documented capabilities with `false` | [PR #6723](https://github.com/agentscope-ai/QwenPaw/pull/6723) open |
| [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | Background forked subagent reports completed when worktree finalization fails | [PR #6725](https://github.com/agentscope-ai/QwenPaw/pull/6725) open |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP tools fail periodically; restart fixes it | No fix PR yet |

### Regression Watch
- **v2.1.0b1 desktop regressions** are prominent today (#6697, #6698) — the Tauri beta build has introduced Python subprocess and browser SDK crashes on Windows. These need urgent attention before the beta stabilizes.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood for Next Release |
|---------|----------|----------------------------|
| **Live artifact canvas** — render agent-generated HTML in a side panel | [#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730), [PR #6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) | **High** — PR #6719 (persistent workspace artifact cards) is already open and aligned |
| **On-demand skill loading** — avoid loading all 27+ skills into system prompt (saves 8-10K tokens) | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | **Medium-High** — directly addresses token efficiency; aligns with recent pool skill API work |
| **Configurable MCP tool-call timeout** | [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | **Medium** — reliability improvement; no PR yet |
| **Automatic model routing** — small/fast/vision/large model selection per message | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | **Medium** — strategic feature; complements the shipped LLM fallback system |
| **Chinese approve/deny labels for WeChat** | [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) | **High** — localization win; low effort, high impact for Chinese users |
| **Channel retry / health check** (Matrix, etc.) | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | **Medium** — operational reliability; no PR yet |
| **Agent-level token statistics** | [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) | **Low** — asked about 2 weeks ago with no maintainer response |

---

## 7. User Feedback Summary

### Pain Points
1. **Desktop beta instability** — Multiple users report crashes on v2.1.0b1 (Python subprocess environment injection, Playwright browser crashes). This is the dominant dissatisfaction theme.
2. **MCP tool reliability** — Tools failing after hours of operation with no recovery mechanism other than restart is a serious production concern.
3. **WeChat channel bugs** — Two related issues (#6696, #6695) from the same author indicate ongoing friction with the iLink WeChat integration, particularly around token management and approval flows.
4. **Large tool output freezing the UI** — Users running recursive searches or heavy tool calls hit context window limits and UI hangs (#6700, now closed).
5. **nohup/detached shell processes** — The `execute_shell_command` tool doesn't properly handle detached processes (#6480), a recurring issue for users running long-running tasks.

### Positive Signals
- The **LLM fallback feature** (#5597, #5598) was well-received and shipped fully.
- **Responsive console UI** improvements (#5462) address mobile user needs.
- **Console error unblocking** (#5447) fixes a frustrating UI state.
- The project is actively merging PRs and closing issues — the community sees responsiveness.

---

## 8. Backlog Watch

| Issue | Age | Concern |
|-------|-----|---------|
| [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) — Agent-level token statistics | ~2 weeks | Important observability feature; no maintainer response yet |
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) — Automatic model routing | ~2 weeks | Strategic feature request; no PR yet |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) — `nohup` shell process hangs | ~2 weeks | Affects production users running long tasks; no fix PR |
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) — Channel retry functionality | ~2 weeks | Operational reliability; no PR yet |
| [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) — Configurable MCP timeout | ~1 day | No PR yet, but high relevance given #6732 |
| [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) — `sandbox_config` crash | Today | Critical bug; no fix PR yet — should be prioritized |
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) — v2.1.0b1 Python env crash | Today | Blocks desktop beta; no fix PR yet |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) — v2.1.0b1 browser SDK crash | Today | Blocks desktop beta; no fix PR yet |

### Maintainer Priority Recommendations
1. **v2.1.0b1 desktop regressions** (#6697, #6698) — These are blocking a beta release and need urgent fixes.
2. **MCP periodic failure** (#6732) — Production reliability issue with no workaround beyond restart.
3. **sandbox_config crash** (#6731) — Breaks a core tool when models pass structured config arguments.
4. **Long-backlog observability features** (#6392, #6436) — Consider assigning or acknowledging to manage community expectations.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-06

## 1. Today's Overview
ZeroClaw shows high development velocity with **50 issues and 50 PRs updated** in the last 24 hours. Activity is dominated by open RFCs, security hardening, and channel‑adapter fixes; only one PR was merged/closed today. No new releases were published. The project remains in an active stabilization phase (v0.8.5 tracking) with strong maintainer and community engagement around governance, authentication, and tool‑policy work.

## 2. Releases
*No new releases today.*

## 3. Project Progress
**Merged/Closed today:**
- [#9750](https://github.com/zeroclaw-labs/zeroclaw/issues/9750) – `fix(service): bound launcher-owned daemon logs` (closed). Replaces unbounded daemon log redirection with an 8 MiB‑capped supervisor.

**Key PRs advanced (open):**
- [#9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776) – `feat(security): extend forbidden_paths with workspace‑relative glob patterns` (RFC #8424 implementation).
- [#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777) – `fix(channels): accept Signal source UUID senders` (addresses #9774).
- [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) – `fix(anthropic): support stored OAuth profiles` (aligns with RFC #9464).
- [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) – `fix(runtime): prevent stale provider refreshes from mutating replacement sessions` (fixes #9719).
- [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) – `fix(tools): gate image_gen download URL against SSRF` (ongoing review).

## 4. Community Hot Topics
*Issues with most comments (all updated within 24h):*
- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) – **RFC: Work Lanes, Board Automation, and Label Cleanup** (18 comments). Governance and triage‑process RFC still in ratification‑deferred state.
- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) – **RFC: Goal mode v1 — bounded foreground Matrix work** (18 comments). User demand for durable, multi‑turn objective tracking.
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) – **RFC: ZeroClaw Chat Completions profile** (16 comments). Strong interest in OpenAI‑compatible endpoint for broader client integration.
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) – **RFC: Per‑execution confirmation tier for high‑risk shell commands** (16 comments). Security‑conscious automation remains a top priority.
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) – **RFC: Pluggable inbound authentication and canonical principals** (12 comments). Foundational identity‑access work.

**Underlying needs:** Community is driving structured governance (work lanes, Kanban), secure shell execution, and protocol compatibility (Chat Completions) while simultaneously hardening authentication and session‑handling internals.

## 5. Bugs & Stability
*Bugs reported/updated today, ranked by severity:*

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **S1 – Workflow blocked** | [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) | OpenRouter streaming requests drop `provider_extra` (prompt‑cache keys lost). | None yet |
| **S1 – Workflow blocked** | [#9774](https://github.com/zeroclaw-labs/zeroclaw/issues/9774) | Signal channel silently drops senders with only `sourceUuid`. | [#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777) |
| **S2 – Degraded behavior** | [#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) | ZeroCode cannot connect to daemon launched via Windows Task Scheduler. | None yet |
| **S2 – Degraded behavior** | [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) | Daemon reload signal mismatch: warning instructs sending SIGUSR1, which kills the daemon. | None yet |
| **S1 – Memory leak** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/tool‑schema cloning drives unbounded RSS growth in agent loop. | Related to #8633 (backoff) but memory‑growth path remains open. |

**Notable closed bugs:** [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) – WhatsApp Web `allowed‑numbers` bypassed for LID‑based contacts (now resolved).

## 6. Feature Requests & Roadmap Signals
*RFCs/Enhancements likely to ship in the near term:*
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) – **Chat Completions profile** – high probability; unblocks Open WebUI, Continue.dev, LangChain integrations.
- [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) – **OpenRouter prompt‑cache via `session_id`** – high probability; directly reduces token costs for existing users.
- [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) – **Anthropic stored‑profile OAuth alias contract** – already partially implemented in #9420; likely included in v0.8.5.
- [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) – **Plugin‑owned Kanban board for agent work** – lower probability for v0.8.5 (requires new plugin domain).
- [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) – **Computer‑use support for desktop screen interaction** – longer‑term roadmap item.

## 7. User Feedback Summary
**Pain points:**
- **Security gaps:** WhatsApp allowed‑numbers bypass (#6350, closed), Signal sender‑identity drops (#9774), OpenRouter extra‑body loss (#9775).
- **Cost efficiency:** Repeated system‑prompt/tool‑schema replay inflates OpenRouter bills; users urge prompt‑cache support (#9631).
- **Configuration quirks:** Cron alias with hyphen rejected by `config set` but accepted by TOML loader (#9652, closed); daemon‑reload signal mismatch (#9768).
- **Observability:** Unbounded daemon logs force operators to manage disk space; bounded logging now fixed for launcher‑owned daemons (#9750).
- **Windows reliability:** ZeroCode cannot connect to daemon started via Task Scheduler (#9697).

**Satisfaction signals:** High engagement on RFCs (many with 10+ comments) indicates a community that values transparency and early‑stage design discussion. Multiple security‑focused RFCs and PRs show strong alignment with operator‑safety priorities.

## 8. Backlog Watch
*Important issues pending maintainer review for extended periods:*
- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) – Work Lanes / Board Automation RFC (created 2026‑05‑20, updated 2026‑08‑05). Needs ratification decision.
- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) – Goal mode v1 RFC (created 2026‑06‑24). Awaiting scope finalization.
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) – Pluggable authentication RFC (created 2026‑06‑03). Long‑standing identity/access proposal.
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) – v0.9.0 auth, security, gateway, and breaking‑change tracker (created 2026‑06‑09). Coordination surface for next major release.

---

*Data source: ZeroClaw GitHub repository (issues and PRs updated in the 24 hours preceding 2026‑08‑06).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*