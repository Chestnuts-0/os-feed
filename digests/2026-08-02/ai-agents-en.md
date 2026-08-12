# OpenClaw Ecosystem Digest 2026-08-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-02 01:48 UTC

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



# OpenClaw Project Digest — 2026‑08‑02

## 1. Today’s Overview
OpenClaw activity remains high with **500 issues** and **500 PRs** updated in the last 24 hours. Of the issues, **462 are still open** and **38 closed**; **405 PRs are open** while **95 have been merged/closed**. A new beta release (`v2026.7.2‑beta.6`) focuses on state‑safety and crash‑recovery improvements. The volume and pace indicate an actively maintained project with strong community engagement, though a substantial backlog of open issues persists.

---

## 2. Releases
### v2026.7.2‑beta.6
**Highlights:**  
- **Quarantine store** for persisted data to survive primary‑database damage.  
- **Crash‑recoverable SQLite snapshots** and **crash‑durable filesystem publication**.  
- **Schema‑upgrade data‑loss rejection** and **rollback‑writer snapshot recovery**.  

*No breaking changes or migration notes were announced.*  
🔗 [GitHub Release](https://github.com/openclaw/openclaw/releases) (linked from issue #1)

---

## 3. Project Progress
**Merged/Closed PRs today:**
- **#117720** – Improve CLI command‑startup attribution (`closed`).  
- **#117710** – Refactor WhatsApp reply‑delivery test fixtures (`closed`).  
- **#110834** – Stream JSONL line counts in `openclaw doctor` without full‑file reads (`closed`).  

**Key open PRs advancing features/fixes:**
- **#117738** – Fix plugin host resolution when OpenClaw is a direct dependency.  
- **#117735** – Reject provider‑owned binary downloads returning JSON/HTML/empty bodies.  
- **#117737** – Fail `nodes push` when APNs rejects delivery.  
- **#115277** – Materialize MCP for server‑name `toolsAllow` globs in isolated cron runs.  
- **#117697** – Preserve source direction for automatic WhatsApp reactions.  
- **#117721** – Render live “thinking” agent events in WebChat.  
- **#116248** – Fix default agent losing auth keys after `paste‑api‑key` for a non‑default agent.  
- **#96438** – Reload configuration changes from `$include` files (hot‑reload fix).

---

## 4. Community Hot Topics
Issues with the most comments, reflecting core user concerns:

| Issue | Comments | Summary |
|-------|----------|---------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 73 | DeepSeek v4 Flash silently fails to generate a reply; generic fallback posted. |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 39 | Text between tool calls leaks into messaging channels (Slack, iMessage, etc.). |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 38 | Realtime voice work can retain unbounded provider/consult state, causing resource leaks. |

**Analysis:** Users are most concerned about **model reliability** (silent failures), **privacy/UX** (internal tool output leaking to channels), and **resource management** (unbounded state in voice sessions). These themes recur across many P1/P0 issues and drive a significant portion of maintainer effort.

---

## 5. Bugs & Stability
**P0 (Critical) Bugs:**
- [#101290](https://github.com/openclaw/openclaw/issues/101290) – CLI startup preflight corrupts the live state DB while the gateway is running; “database disk image is malformed” (regression, macOS).
- [#115421](https://github.com/openclaw/openclaw/issues/115421) – Schema downgrade recovery quarantines/wipes the state DB, losing cron jobs.

**P1 (High) Bugs (selected):**
- [#116277](https://github.com/openclaw/openclaw/issues/116277) – DeepSeek v4 Flash silent reply failure.
- [#116201](https://github.com/openclaw/openclaw/issues/116201) – Realtime voice unbounded state retention.
- [#115326](https://github.com/openclaw/openclaw/issues/115326) – Crash‑loop breaker permanently suppresses Discord/WhatsApp; recovery fails with WebSocket 1006.
- [#115908](https://github.com/openclaw/openclaw/issues/115908) – Session transcript projection livelock under sustained writes, stalling the main thread.
- [#114154](https://github.com/openclaw/openclaw/issues/114154) – `bundle‑mcp` tool passes policy but never bundles in agent sessions.
- [#115424](https://github.com/openclaw/openclaw/issues/115424) – Gateway V8 heap OOM during main‑session turn; restart‑recovery converts crash into a 7‑core‑dump loop.

**Fix PRs:** Several open PRs address these areas (e.g., #117732 for WebRTC tool‑call lifecycle, #117733 for meeting‑bot audio lifecycle, #117676 for memory‑core snippet contamination). No direct fixes yet for the P0 DB‑corruption issues.

---

## 6. Feature Requests & Roadmap Signals
- [#113251](https://github.com/openclaw/openclaw/issues/113251) – **Add image viewing in the webchat file viewer.**  
- [#17840](https://github.com/openclaw/openclaw/issues/17840) – **Opt‑in reaction‑triggered agent turns** (e.g., emoji‑choice polling).  
- [#110171](https://github.com/openclaw/openclaw/issues/110171) – **Voice‑chat parity with text chat** (full context for agent‑consult sessions).  
- [#95724](https://github.com/openclaw/openclaw/issues/95724) – **Index memory by source directory, not by agent** to eliminate duplicate vector stores.  

**Prediction:** The image‑viewer request (#113251) and reaction‑triggered turns (#17840) have been open for months with moderate engagement; the memory‑indexing feature (#95724) aligns with ongoing memory‑core improvements. Voice‑chat parity (#110171) is a larger ask but matches the project’s direction (see #116201). Next beta/patch may include the image‑viewer and reaction features if they receive maintainer review.

---

## 7. User Feedback Summary
**Pain points:**
- **Model fallback failures:** DeepSeek silent failures (#116277), provider refusals not triggering fallback (#98976).
- **Context/session leaks:** Tool‑call text leaking to channels (#25592), stale message‑ID replay after compaction (#115476), superseded reply operations never released (#116488).
- **Resource leaks:** Unbounded realtime voice state (#116201), WebRTC provisional arguments retained (#117732), meeting‑bot audio not bounded (#117733).
- **Auth/configuration bugs:** Default agent loses keys after `paste‑api‑key` (#116248), exec tool does not inherit skill env vars (#31583), config hot‑reload ignores `$include` files (#96438).
- **Channel‑specific quirks:** Feishu reaction‑message‑ID 400 errors (#34528), Mattermost tool‑warning gating real answer (#111778), WebChat message ordering duplication (#95566).

**Use cases:** Telegram, Discord, WhatsApp, iMessage, Slack, Feishu, Microsoft Teams, WebChat, iOS Talk (realtime voice), cron jobs, isolated agent runs.

**Satisfaction:** Users express frustration with regressions and data‑loss risks but appreciate the rapid bug‑fix turnover and the beta program’s focus on stability.

---

## 8. Backlog Watch
**Long‑standing important issues needing maintainer attention:**
- [#25592](https://github.com/openclaw/openclaw/issues/25592) – Text between tool calls leaks to messaging channels (open since 2026‑02‑24, `clawsweeper:needs‑maintainer‑review`).
- [#31583](https://github.com/openclaw/openclaw/issues/31583) – `exec` tool does not inherit `skills.entries.*.env` (regression, open since 2026‑03‑02).
- [#99241](https://github.com/openclaw/openclaw/issues/99241) – Tool outputs render as image attachments, becoming unreadable to the agent (closed 2026‑08‑01, but may re‑emerge).
- [#115421](https://github.com/openclaw/openclaw/issues/115421) – Schema downgrade recovery wipes state DB (P0, open since 2026‑07‑28).

**PRs waiting for maintainer review/proof:**
- [#117738](https://github.com/openclaw/openclaw/pull/117738) – Plugin dependency resolution fix.
- [#117735](https://github.com/openclaw/openclaw/pull/117735) – Reject provider binary downloads with non‑binary bodies.
- [#117737](https://github.com/openclaw/openclaw/pull/117737) – Fail `nodes push` on APNs rejection.
- [#115277](https://github.com/openclaw/openclaw/pull/115277) – Materialize MCP for `toolsAllow` globs.

---

**Overall project health:** Active development with a steady stream of bug fixes and feature improvements. Critical stability issues (DB corruption, data‑loss during recovery) remain unresolved and require priority attention. Community engagement is high, with clear demand for better model reliability, privacy, and resource management.

---

## Cross-Ecosystem Comparison



# Cross-Project Ecosystem Comparison Report — 2026-08-02

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is in a high-velocity consolidation phase, with projects pivoting from feature sprawl toward **stability hardening, security boundary enforcement, and production-grade reliability**. The dominant trend is a shift from single-channel demo bots to multi-channel, multi-provider agent platforms with hardened state management, credential lifecycle, and observability. Six of thirteen projects showed zero or near-zero activity today, suggesting market fragmentation with a handful of projects carrying most of the active developer and user base.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Open Issues | Open PRs | Health Score* |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ✅ v2026.7.2‑beta.6 | 462 | 405 | 🟡 High activity, high backlog |
| **NanoBot** | 5 | 25 | ❌ | — | — | 🟢 Active, focused sprint |
| **Hermes Agent** | 50 | 50 | ❌ | — | — | 🟢 Active, stability-driven |
| **PicoClaw** | 1 | 3 | ❌ | — | 2 | 🟡 Low velocity, dormant bugs |
| **NanoClaw** | 2 | 15 | ✅ v2.1.54 | — | — | 🟢 Active, releasing frequently |
| **NullClaw** | 0 | 0 | ❌ | — | — | 🔴 Inactive |
| **IronClaw** | 11 | 24 | ❌ | — | — | 🟡 Refactoring-heavy, moderate output |
| **LobsterAI** | 7 | 2 | ❌ | — | 2 | 🟡 Maintenance mode, stale closures |
| **TinyClaw** | 0 | 0 | ❌ | — | — | 🔴 Inactive |
| **Moltis** | 0 | 3 | ❌ | 0 | 1 | 🟢 Quiet but focused, zero bugs open |
| **CoPaw** | 9 | 13 | ❌ | 9 | 13 | 🟡 Backlogged, no merges today |
| **ZeptoClaw** | 0 | 0 | ❌ | — | — | 🔴 Inactive |
| **ZeroClaw** | 50 | 50 | ❌ | — | 50 | 🟡 High volume, no merges today |

*\*Health Score: qualitative assessment based on velocity, maintainer responsiveness, bug closure rate, and release cadence.*

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Sheer scale of activity** — 500 issues/PRs per day dwarfs every other project, indicating the largest active community and broadest channel coverage (Telegram, Discord, WhatsApp, iMessage, Slack, Feishu, Teams, WebChat, iOS Voice).
- **Release cadence** — Only NanoClaw (v2.1.54) and OpenClaw (v2026.7.2‑beta.6) shipped releases today, signaling sustained release discipline.
- **State-safety focus** — The new beta's quarantine store, crash-recoverable SQLite snapshots, and schema-upgrade rejection represent the most mature data-loss-prevention work in the ecosystem.

**Technical approach differences:**
- OpenClaw uses a **SQLite-backed state engine with filesystem publication**, whereas NanoBot and Moltis rely on JSONL session archives and Rust-backed stores respectively.
- OpenClaw's **MCP materialization for cron runs** (#115277) shows deeper server-side tool integration compared to peers that treat MCP as a peripheral.
- OpenClaw carries a **462-issue open backlog**, the largest raw count by far — a trade-off of scale for maintainability.

**Community size comparison:** OpenClaw is the clear leader in issue/PR volume. Hermes Agent and ZeroClaw are secondary hubs with 50 updates each. NanoBot and NanoClaw serve smaller but more focused communities. PicoClaw, LobsterAI, and CoPaw operate at 1/10th the activity tier.

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Model reliability & fallback** | OpenClaw, NanoBot, CoPaw, ZeroClaw | Silent model failures (#116277), provider refusal handling, empty-response visibility (#6630), context-window misreporting (#7100) |
| **Channel/state memory separation** | OpenClaw, ZeroClaw, IronClaw | Conflated history/memory backends causing inconsistency across gateways (#9048, #9103, #95724) |
| **Resource/state leaks** | OpenClaw, NanoBot, CoPaw | Unbounded voice state (#116201), session transcript livelock (#115908), ACP race conditions (#6623), nohup detachment hangs (#6480) |
| **Security hardening** | Hermes Agent, Moltis, ZeroClaw, NanoBot | Cross-profile credential leaks (#51603), privilege escalation via allowlists (#1170), WhatsApp security misconfiguration (#9348), delegated-approval boundaries (#76509) |
| **Provider diversity** | NanoClaw, PicoClaw, CoPaw, IronClaw, ZeroClaw | OrcaRouter native support (PicoClaw #3309, CoPaw #6622, IronClaw #7009), local-vs-cloud routing hijacking (NanoBot #3732), OpenAI adapter (#8603) |
| **Observability & evaluation** | Moltis, ZeroClaw, IronClaw | Langfuse/OTLP export (#1174), cross-turn OTel correlation (#8933), CI proof-gate evidence stripping (#6626) |
| **Cron/scheduled execution reliability** | OpenClaw, NanoBot, ZeroClaw | State loss on manual runs (NanoBot #5183), CLI cron output silently discarded (ZeroClaw #9340), schema-downgrade data wipe (OpenClaw #115421) |
| **Container/deployment resilience** | NanoClaw, Hermes Agent, IronClaw | Rootless Docker support (NanoClaw #3174), Windows update loops (Hermes #75598), Postgres capacity regression (IronClaw #6973) |

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | NanoClaw | IronClaw | ZeroClaw | Moltis | CoPaw |
|---|---|---|---|---|---|---|---|---|
| **Language** | TypeScript | Python | Rust/Node | TypeScript | Rust | TypeScript | Rust | Python/TypeScript |
| **Primary focus** | Multi-channel agent hub | Session/memory stability | Desktop + gateway security | Channel unification + reliability | Arch refactor (Wave 2) | RFC-driven architecture | Privacy + operator model | Qwen integration |
| **Target user** | Power users, multi-channel operators | Python-native devs, cron-heavy users | Windows/Desktop users, security-conscious | Mac/iMessage-centric operators | Rust ecosystem, infrastructure teams | RFC contributors, multi-agent researchers | Operators needing audit trails | Chinese ecosystem users |
| **Architecture** | SQLite state + FS pub + MCP | JSONL archives + memory store | Dual gateway + multiplex profiles | Plugin channel abstraction | Crate-split dependency inversion | ScopedToolRegistry + RFC pipeline | Langfuse/OTLP native | ACP transport + Tauri desktop |
| **Release model** | Beta cadence | Sprint-based | Patch-driven | Rollup releases | Refactor-first, no hot releases | RFC-accepted features | Sporadic |
| **Key differentiator** | Broadest channel support | Provider routing hardening | Windows desktop + security scopes | iMessage unification | Deep architectural audit | Memory/credential RFCs | Built-in observability | Gemini/DeepSeek compat fixes |

**NullClaw, TinyClaw, and ZeptoClaw** are effectively dormant, suggesting consolidation or abandonment.

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (high velocity, regular releases):**
- **OpenClaw** — Highest volume, beta cadence, but 462-issue backlog is a maturity risk.
- **NanoClaw** — Rolling rollup releases (v2.1.54), responsive PR triage, clean backlog discipline.
- **Hermes Agent** — Strong fix cadence, Windows-focused improvements, security PRs landing.

**Tier 2 — Steady Contributors (moderate velocity, active communities):**
- **NanoBot** — Dense bug-fix sprints, cron reliability focus, no release but healthy merge rate.
- **ZeroClaw** — RFC-driven development, 50 PRs open but none merged today; architectural depth but slow shipping.
- **IronClaw** — Wave 2 refactoring in progress; merges are structural, not feature-oriented.

**Tier 3 — Maintaining (low velocity, small teams):**
- **CoPaw** — 13 open PRs with zero merges; critical bugs unaddressed.
- **PicoClaw** — 2 open PRs, stale bug (#3203 Matrix reconnection) ignored.
- **LobsterAI** — Six issues auto-closed as stale; active PRs but low throughput.
- **Moltis** — Zero open issues, small PR volume, but clean and stable.

**Tier 4 — Dormant:**
- **NullClaw, TinyClaw, ZeptoClaw** — No activity; likely superseded or abandoned.

## 7. Trend Signals

1. **Memory architecture is the next frontier.** Three projects (OpenClaw #95724, ZeroClaw #9048/#9103, NanoBot memory formatting #5153) are independently converging on the same problem: conversation history and durable memory must be separated at the storage layer. Projects that solve this cleanly will have a structural advantage.

2. **Security is shifting from auth to scope.** Hermes Agent's delegated-approval hardening (#76509), Moltis's operator/allowlist split (#1170), and ZeroClaw's WhatsApp security misconfiguration (#9348) all signal that the community now treats *privilege boundaries* as a first-class concern, not just credential management.

3. **Provider routing is a battleground.** NanoBot's `api_base` guard (#3732), CoPaw's OrcaRouter native support (#6622), and OpenClaw's binary-download rejection (#117735) show that silent model hijacking and provider confusion are top user pain points. A project that gets routing right will win developer trust.

4. **Observability is becoming table stakes.** Moltis shipped Langfuse v4 + OTLP export (#1174) natively. ZeroClaw is RFC-ing cross-turn span correlation (#8933). IronClaw has a CI proof-gate system. The expectation is shifting from "does it work?" to "can I prove it worked?"

5. **Deployment fragility is a hidden cost.** Rootless Docker (NanoClaw #3174), Windows update loops (Hermes #75598), npm engine constraints (Hermes #76486), and systemd restart bypasses (PicoClaw #3203) all indicate that production deployment remains a significant friction point. Projects that ship with resilient deployment patterns will differentiate.

6. **RFC-driven architecture is gaining traction.** ZeroClaw's RFC pipeline (#9048, #9127, #8603) and IronClaw's Wave 1/2 audit model are producing more deliberate, community-informed architectures than rapid-fire feature accumulation. This may signal a maturity inflection point for the ecosystem.

**Value for AI agent developers:** The ecosystem is moving from "build a bot that talks" to "build a system that survives production." The projects winning today are those treating state safety, security scope, and provider reliability as first-class concerns — not afterthoughts. Developers choosing a platform should prioritize projects with active RFC pipelines, merged security fixes, and evidence of crash-recovery investment.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-02

---

## 1. Today's Overview

NanoBot showed strong development velocity over the last 24 hours, with 25 PRs updated and 5 issues touched. No new releases were published, but the project is actively shipping a dense batch of bug fixes, performance work, and UI improvements. The dominant theme is **stability hardening** across cron execution, session consolidation, memory formatting, and provider message handling. With 13 PRs merged/closed and several priority-P1 fixes landing, the maintainers appear to be in a consolidation sprint ahead of an upcoming release.

---

## 2. Releases

**No new releases published today.** The project did not tag or deploy a version in the reporting window.

---

## 3. Project Progress

### Merged / Closed PRs Today

| PR | Title | Focus |
|---|---|---|
| [#5209](https://github.com/HKUDS/nanobot/pull/5209) | `refactor(webui): reuse sidebar selection highlight` | UI polish — eliminated flicker from nested fade/scale surfaces |
| [#5208](https://github.com/HKUDS/nanobot/pull/5208) | `fix(dream): advance cursor when durable changes were made` | Cron bug — history cursor now advances on ephemeral runs with edits |
| [#5172](https://github.com/HKUDS/nanobot/pull/5172) | `feat: preserve Responses reasoning state and compact context` | OpenAI Responses API — opaque output-item chain now preserved across tool calls |
| [#5108](https://github.com/HKUDS/nanobot/pull/5108) | `fix(channels): add per-sender message rate limiting` | Security/stability — per-user rate limits prevent token spam on any channel |
| [#3732](https://github.com/HKUDS/nanobot/pull/3732) | `fix(providers): require api_base before local provider wins on keyword match` | Provider routing — prevents silent cloud-model hijacking by local providers |
| [#5199](https://github.com/HKUDS/nanobot/pull/5199) | `refactor(cli): narrow Pyright suppressions` | Code quality — reduced file-level type suppressions to line-level |
| [#5153](https://github.com/HKUDS/nanobot/pull/5153) | `fix(memory): handle non-string timestamp and missing role in raw_archive` | Stability — `MemoryStore._format_messages` now tolerates malformed entries |
| [#5183](https://github.com/HKUDS/nanobot/pull/5183) | `fix(cron): preserve manual run completion state` | Stability — manual cron runs no longer lose `Completed` status under WebUI reloads |
| [#5200](https://github.com/HKUDS/nanobot/pull/5200) | `fix(exec): preserve wait targets across response truncation` | Stability — `write_stdin(wait_for=...)` now survives output head/tail truncation |
| [#5201](https://github.com/HKUDS/nanobot/pull/5201) | `fix(session): tolerate malformed persisted session summary` | Stability — `AutoCompact` no longer crashes on invalid `_last_summary` metadata |

**Key takeaways:**
- **Cron reliability** is a major focus — three fixes this cycle address race conditions and state loss in scheduled/manual runs.
- **Provider routing hardening** continues with the `api_base` guard (PR #3732), closing a silent hijack vector.
- **OpenAI Responses API** parity work is progressing with reasoning-state preservation.

---

## 4. Community Hot Topics

| Item | Type | Comments | Topic |
|---|---|---|---|
| [#5185](https://github.com/HKUDS/nanobot/issues/5185) | Issue | 4 | Tool-calls code leaking into text responses |
| [#5205](https://github.com/HKUDS/nanobot/issues/5205) | Issue | 2 | `ensurepip` missing when enabling Feishu plugin |
| [#4801](https://github.com/HKUDS/nanobot/issues/4801) | Issue | 1 | `KeyError` on malformed `message['role']` (now fixed in PR #5153) |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Issue | 1 | Cannot switch models per-session without full reconfiguration |

**Underlying needs:**
- **Plugin install reliability** (Issue #5205): Users hitting missing `ensurepip` on minimal Debian installs signals a gap in the plugin activation path — the Feishu channel plugin may require a Python rebuild that isn't guaranteed in the uv toolchain.
- **Per-session model flexibility** (Issue #5198): A recurring UX pain point. Users want Cloud-SaaS-style model switching per conversation. PR #5202 (open) attempts to make preset switching more discoverable but does not fully address per-session override.
- **Response leakage** (Issue #5185): Tool-call code appearing in responses suggests a formatting or streaming bug in the agent loop. Unresolved.

---

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|---|---|---|---|
| 🔴 P1 | [#5205](https://github.com/HKUDS/nanobot/issues/5205) — `ensurepip` missing on Feishu plugin enable | Open | Blocking for Feishu adoption on lean deployments |
| 🔴 P1 | [#5185](https://github.com/HKUDS/nanobot/issues/5185) — Tool-call code in responses | Closed | Resolved; user confirmed invalid |
| 🟡 P2 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) — Per-session model switching | Open | Feature gap, not a crash; PR #5202 partially addresses discoverability |
| 🟢 Fixed | [#4801](https://github.com/HKUDS/nanobot/issues/4801) — `KeyError` on missing `message['role']` | Closed via PR #5153 | Tolerates non-string timestamps and missing roles in raw archive |
| 🟢 Fixed | [#5163](https://github.com/HKUDS/nanobot/issues/5163) — Cron manual run loses completion state | Closed via PR #5183 | Race between `CronService.run_job()` and store-reading APIs now guarded |

---

## 6. Feature Requests & Roadmap Signals

| PR | Title | Priority | Likelihood in Next Release |
|---|---|---|---|
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | Cross-session search and mentions (`@`-ping, `search_sessions` tool) | — | **High** — substantial feature, likely next minor |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | Quick Chat & Temporary Chat | — | **High** — complements #5211, same author, coherent UX direction |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | Trusted proxy bootstrap auth | P1 | **Medium** — deployment-specific; needs security review |
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) | Accelerated JSONL session list & thread loading | P2 | **High** — performance win, low risk |
| [#5207](https://github.com/HKUDS/nanobot/pull/5207) | Model preset for subagents (`spawn` tool) | P2 | **Medium** — niche but useful for multi-agent workflows |
| [#5202](https://github.com/HKUDS/nanobot/pull/5202) | Discoverable model preset switching (UI dropdown) | P2 | **High** — low risk, directly addresses user pain |

**Roadmap signal:** The project is clearly prioritizing **WebUI UX improvements** (Quick Chat, cross-session search, mentions) and **performance** (JSONL loading), alongside ongoing stability hardening. Expect these themes in the next release.

---

## 7. User Feedback Summary

- **Plugin friction:** Feishu channel plugin activation fails on minimal systems lacking `ensurepip`. Users expect `plugins enable` to work out-of-the-box without manual Python toolchain fixes.
- **Model rigidity:** Users accustomed to Cloud SaaS AI UIs find the single-model-per-session model restrictive. The model blip is non-interactive and `/model` command lacks per-session override.
- **Cron state unreliability:** Manual cron runs incorrectly retain `Failed` status after successful execution, confusing operators relying on the WebUI for observability. Now fixed.
- **Provider hijacking:** Local providers silently claiming cloud-hosted model names caused unexpected routing. Users value the `api_base` guard fix.
- **Response formatting leaks:** Tool-call code appearing in chat responses was alarming but has been resolved.

---

## 8. Backlog Watch

| Item | Author | Open Since | Concern |
|---|---|---|---|
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) — Trusted proxy bootstrap auth | concertypin | 2026-08-01 | P1 security feature still open; needs review for Cloudflare Tunnel deployments |
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) — Cross-session search & mentions | Re-bin | 2026-08-01 | Major UX feature, open — should be merged before next release |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) — Quick Chat & Temporary Chat | Re-bin | 2026-07-30 | Open — large feature, same PR queue as #5211 |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) — Per-session model switching | whisperity | 2026-07-31 | Unresolved feature gap; PR #5202 only improves discoverability, not per-session override |
| [#5206](https://github.com/HKUDS/nanobot/pull/5206) — Duplicate log lines for streamed responses | professionelle-hypnose | 2026-08-01 | Open P2 bug; minor but noisy in production logs |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) — DeepSeek message hardening | DreamShepherd2006 | 2026-05-16 | **Open since May** — long-standing PR with conflicts; fixes null-content 400 errors and `(empty)` placeholder leakage on DeepSeek models. Needs maintainer attention. |
| [#5139](https://github.com/HKUDS/nanobot/pull/5139) — Preserve media paths during session consolidation | woaiwang | 2026-07-28 | Open P1 regression; uploaded media dropped after archiving, making files unrecoverable |

**Top priority backlog items:** PR #3869 has been open ~3 months with merge conflicts — a significant provider compatibility fix. PR #5139 is a P1 regression with data-loss impact. Both need prompt maintainer review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026‑08‑02

## 1. Today’s Overview
Hermes Agent shows **high development velocity** with 50 issues and 50 pull requests updated in the last 24 h. The project is actively addressing **Windows update reliability, security‑boundary hardening, and cross‑platform installation blockers**. No new release was published today, but several critical fixes were merged or are in review, indicating a stable maintenance cycle focused on desktop and gateway stability.

## 2. Releases
None.

## 3. Project Progress
**Merged/Closed PRs today:**
- **#75875** – Fixed Windows “Update didn’t finish” loop by preventing stranded `.hermes‑update‑in‑progress` marker on file‑lock contention.  
- **#76513** – Hardened Discord auto‑thread session keying to use `prospective_thread_id`, fixing stale thread names.  
- **#76515** – Updated gateway test conftest to prefer the real `python‑telegram‑bot` package over a process‑wide mock.

**Closed issues reflecting active development:**
- **#76448**, **#76510** – Gateway lifecycle‑guard false‑positives on terminal script execution and absolute‑path binaries.
- **#76482** – Kanban notifier silently skipped subscriptions when an adapter‑less gateway owned the dispatcher singleton.
- **#76484**, **#76511** – Bootstrap installer `EBADENGINE` failure and Copilot token‑exchange startup stall (~4.5 s sleep).

## 4. Community Hot Topics
| Issue / PR | Comments | 👍 | Topic |
|------------|----------|----|-------|
| [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) | 7 | 0 | Desktop update instability – multiple gateways conflicting across profiles |
| [#65274](https://github.com/NousResearch/hermes-agent/issues/65274) | 6 | 1 | Fresh Desktop sessions fall back to home cwd on Windows |
| [#51603](https://github.com/NousResearch/hermes-agent/issues/51603) | 5 | 0 | **Security:** `resolve_anthropic_token()` bypasses profile secret scope in multiplex mode |
| [#76509](https://github.com/NousResearch/hermes-agent/pull/76509) | – | 0 | Hardening delegated‑approval boundaries (opt‑in immutable scopes) |

**Underlying needs:** Users demand **robust multi‑profile isolation**, **predictable session‑cwd behavior**, and **transparent approval‑scope contracts** for delegated agent tasks.

## 5. Bugs & Stability
**High‑severity bugs:**
- [#51603](https://github.com/NousResearch/hermes-agent/issues/51603) – Cross‑profile credential leak in multiplex gateway (security).  
- [#62935](https://github.com/NousResearch/hermes-agent/issues/62935) – `microsoft‑teams‑apps` import side‑effect loads foreign `.env` into every gateway process (security).  
- [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) – Update mechanism makes whole program unstable when multiple gateways run.

**Medium‑severity bugs:**
- [#65274](https://github.com/NousResearch/hermes-agent/issues/65274) – Desktop project‑scoped fresh sessions ignore primary path on Windows.  
- [#60845](https://github.com/NousResearch/hermes-agent/issues/60845) – Queued follow‑up responses bypass MEDIA extraction; attachments delivered as plain‑text paths.  
- [#76435](https://github.com/NousResearch/hermes-agent/issues/76435) – Discord gateway reconnect loop + unusable desktop updater.  
- [#76486](https://github.com/NousResearch/hermes-agent/issues/76486) – `package.json` engine constraint `>=12.0.0` blocks Node 22 / npm 11 installs.

**Fix PRs in progress:**
- [#76499](https://github.com/NousResearch/hermes-agent/pull/76499) – Relaxes npm engine constraint to allow Node 22 / npm 11.  
- [#76484](https://github.com/NousResearch/hermes-agent/issues/76484) – Covered by #76459 (managed Node/uv toolchain).  
- [#76511](https://github.com/NousResearch/hermes-agent/issues/76511) – Copilot token‑exchange stall fixed on main.

## 6. Feature Requests & Roadmap Signals
- [#37566](https://github.com/NousResearch/hermes-agent/issues/37566) – **Font selector** for Desktop (5 👍).  
- [#64229](https://github.com/NousResearch/hermes-agent/issues/64229) – **Plugin lifecycle** (registration handles, `on_unload`, supervised tasks).  
- [#34992](https://github.com/NousResearch/hermes-agent/issues/34992) – **Policy/audit authorization layer** for tool execution.  
- [#76503](https://github.com/NousResearch/hermes-agent/pull/76503) – Per‑provider `reasoning_echo` opt‑in for custom providers (Kimi K3, GLM‑5.2).  
- [#76466](https://github.com/NousResearch/hermes-agent/issues/76466) – Use sample rate returned by OpenAI‑compatible TTS endpoints.

**Likely next‑version candidates:** Plugin lifecycle (#64229) and TTS sample‑rate adaptation (#76466) are both advanced in PRs and align with current stability‑and‑flexibility goals.

## 7. User Feedback Summary
**Pain points:**
- Windows Desktop users repeatedly hit **update loops** and **installer `EBADENGINE` failures** due to npm‑version mismatches.  
- **Gateway reconnect storms** on Discord after token resets cause service disruption.  
- **Cross‑profile secret leakage** remains a top‑ranked security concern.  
- Desktop **IME preedit positioning** is broken for CJK locales.

**Satisfaction signals:**
- Rapid merging of lifecycle‑guard and Windows‑update fixes shows **responsive maintenance**.  
- Security‑hardening PRs (#76509) address community‑reported delegation‑boundary issues.

## 8. Backlog Watch
**Long‑open issues needing maintainer attention:**
- [#32887](https://github.com/NousResearch/hermes-agent/issues/32887) – `gateway_state.json` heartbeat tick missing; breaks cross‑container liveness checks after idle periods.  
- [#25849](https://github.com/NousResearch/hermes-agent/issues/25849) – `EMAIL_ADDRESS` env var does not always match the actual IMAP/SMTP account; request for `EMAIL_ACCOUNT`.  
- [#34992](https://github.com/NousResearch/hermes-agent/issues/34992) – Policy/audit authorization layer for tool execution (feature request).

**Open PRs awaiting review:**
- [#76509](https://github.com/NousResearch/hermes-agent/pull/76509) – Hardened delegated‑approval boundaries.  
- [#76516](https://github.com/NousResearch/hermes-agent/pull/76516) – Stable per‑message sender attribution for gateway inbound traffic.  
- [#76470](https://github.com/NousResearch/hermes-agent/pull/76470) – Decode JSON array literals into YAML lists on `config set`.

---

**Project health assessment:** Active bug‑fix cadence, strong security‑focused PRs, and clear community‑driven roadmap signals. No release published, but the flow of merged fixes suggests an upcoming patch release addressing Windows installation, gateway lifecycle, and delegation‑security concerns.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-02

## 1. Today's Overview

PicoClaw showed moderate activity over the past 24 hours with 1 updated issue and 3 updated pull requests, though no new releases were published. Development momentum is primarily feature-oriented, with two open PRs expanding provider and search capability support. One notable bug report regarding Matrix reconnection remains unresolved and is marked stale, suggesting a gap between community need and maintainer bandwidth. Overall project health appears stable with ongoing contributor engagement but limited recent merge velocity.

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

**Merged/Closed PR:**

- **[PR #3261](https://github.com/sipeed/picoclaw/pull/3261)** — Added zh-TW locale and Traditional Chinese translations. This non-breaking feature expands WebUI and documentation localization coverage for Taiwanese users. Authored by PeterDaveHello; now closed (merged).

**Open PRs advancing features:**

- **[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** — Adds Exa as a native `tools.web` / `web_search` provider with `POST /search`, `type: "auto"`, highlights support, and date-range filtering via `startPublishedDate`. Authored by kesku; open for review.
- **[PR #3309](https://github.com/sipeed/picoclaw/pull/3309)** — Adds OrcaRouter as a first-class OpenAI-compatible provider (`orcarouter`), supporting multi-vendor model routing under the existing provider abstraction. Authored by jinhaosong-source; open, submitted today.

---

## 4. Community Hot Topics

- **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** — *Matrix sync loop has no reconnection logic — silent death after network/server disruption* (7 comments, 2 👍, stale)
  The most discussed issue on record this period. Users report that after any network interruption or homeserver restart, the Matrix `/sync` long-polling loop terminates permanently without recovery. Because the parent process remains alive, systemd's `Restart=on-failure` is never triggered. This reflects a broad need for resilient, production-grade channel integrations — particularly for users deploying PicoClaw as a persistent background service via systemd. The stale status suggests the issue has not received maintainer acknowledgment, which is a concern for reliability-focused adopters.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix `/sync` loop dies permanently after network/server disruption; no auto-reconnection; silent failure bypasses systemd restart policies | None yet |

No other bugs, crashes, or regressions were reported today.

---

## 6. Feature Requests & Roadmap Signals

- **Exa web search provider** ([PR #3299](https://github.com/sipeed/picoclaw/pull/3299)): Community demand for alternative search backends beyond existing providers. Exa's AI-native search with highlights and date filtering addresses a clear gap for users who need high-quality web results in agent tool workflows.
- **OrcaRouter provider integration** ([PR #3309](https://github.com/sipeed/picoclaw/pull/3309)): Growing ecosystem of OpenAI-compatible routers is driving demand for first-class provider support. This signals users want flexible model routing without manual workarounds.

Both PRs are open and unmerged; they are strong candidates for inclusion in the next minor release if review proceeds smoothly.

---

## 7. User Feedback Summary

- **Pain point:** The Matrix integration lacks reconnection resilience, which is critical for users running PicoClaw as always-on infrastructure. A silent loop death combined with ineffective systemd restart policies creates a poor production experience.
- **Satisfaction signal:** Localization contributions (zh-TW) and multiple new provider PRs indicate a healthy, expanding user base contributing back — a positive sign for community engagement.
- **Implicit need:** Users are increasingly deploying PicoClaw in production environments where reliability and auto-recovery are non-negotiable. The #3203 issue, though labeled stale, highlights a widening gap between development focus and operational requirements.

---

## 8. Backlog Watch

- **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** — Open since 2026-07-02, updated 2026-08-01, marked stale with 7 comments and 2 👍. This is the most important backlog item requiring maintainer attention. The bug affects production reliability for Matrix users and has no active fix PR. Without a reconnection implementation or at minimum a maintainer response, the issue risks further stagnation.

---

*Digest generated from GitHub activity data. All links point to sipeed/picoclaw on GitHub.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-02

## 1. Today's Overview

NanoClaw is in a high-velocity development phase, with **15 PRs updated and 2 issues resolved** in the last 24 hours, all converging on release **v2.1.54**. Activity is overwhelmingly fix- and integration-focused: the team closed out a major iMessage unification, patched setup flows, removed orphaned Qodo skill dependencies, and hardened the router against malformed input. The project shows healthy maintainer responsiveness — 5 of 15 PRs were merged/closed today, and open issues are being met with direct PR counter-actions. Health assessment: **Active and stabilizing**, with strong momentum around reliability improvements ahead of the v2.1.x release train.

---

## 2. Releases

### v2.1.54 (Rollup)
A cumulative rollup covering **v2.1.18 through v2.1.54** — all changes merged since the v2.1.17 tag.

**Notable breaking change included in this rollup:**

- **[BREAKING] iMessage unified into a single `imessage` channel** via `/add-imessage`, with two pluggable backends:
  - **Local backend** — uses the Chat SDK to read `chat.db` on the host Mac
  - **Hosted backend** — uses native [Photon](https://photon.codes) via `spectru`
- Operators must re-run `/add-imessage` to select their preferred backend; the previous separate channel registrations are superseded.

**Migration note:** Users with existing iMessage setups should review the new registration flow (PR #3164 closes the gap left by #2999) and ensure their iMessage integration is re-configured post-upgrade.

---

## 3. Project Progress

**Merged / Closed today:**

| PR | Title | Type |
|----|-------|------|
| [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) | `fix(setup): dispatch failure assist to the picked provider` | Fix |
| [#3168](https://github.com/nanocoai/nanoclaw/pull/3168) | `fix(release): close post-merge safety gaps` | Fix |
| [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | `feat(credentials): alert when a provider credential expires` | Feature |
| [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) | `feat(channels): unify iMessage into a single channel (local + hosted)` | Feature |
| [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | `Hosted iMessage (Photon): supersede #2999 with a working registration flow` | Feature |

**Key advances:**
- **iMessage unification** is now complete with both local and hosted (Photon) backends, replacing what was previously two disjoint channels.
- **Setup flow hardening**: failure-assist now correctly routes to the user's chosen provider instead of defaulting to Claude (resolves #3169).
- **Credential expiry alerts** now surface to operators before silent failures (PR #3167), addressing a real pain point where Codex ChatGPT credential expiry went unnoticed for days.

---

## 4. Community Hot Topics

1. **[Issue #3171](https://github.com/nanocoai/nanoclaw/issues/3171)** — *The two Qodo skills depend on an integration nothing sets up and intercept normal coding requests*
   - **Activity:** Open, 0 comments. Directly prompted PR #3172 (now open, removing the Qodo skills).
   - **Analysis:** Users are frustrated that bundled skills silently intercept requests and require a SaaS account (`~/.qodo/config.json`) with no setup path. This signals a demand for **opt-in-by-default skill activation** and clearer documentation of third-party dependencies.

2. **[PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090)** — *Fix templates: prepend all top-level context Markdown*
   - **Status:** Open since 2026-07-19, still under review.
   - **Analysis:** Template context ordering is a recurring pain point for users customizing agent behavior. This fix ensures consistent prepend behavior across skill types.

3. **[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750)** — *Recover stale outbound.db journals after container kills*
   - **Status:** Open since 2026-06-12 (over 2 months). References two filed bugs (#2516, #2640).
   - **Analysis:** A long-standing stability issue affecting Docker-based deployments. The PR is well-scoped and credited to reporters; its age suggests it may need a maintainer nudge.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| 🔴 **High** | [Issue #3171](https://github.com/nanocoai/nanoclaw/issues/3171) / [PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172) | Qodo skills depend on uns upplied SaaS integration and intercept coding requests | PR #3172 (remove skills) open |
| 🟠 **Medium** | [Issue #3169](https://github.com/nanocoai/nanoclaw/issues/3169) / [PR #3170](https://github.com/nanocoai/nanoclaw/pull/3170) | Setup always offers Claude CLI install even when a non-Claude provider was selected | ✅ Merged |
| 🟠 **Medium** | [PR #3166](https://github.com/nanocoai/nanoclaw/pull/3166) | `migrate-v2` crashes on static import mismatch (`insertTask` vs `insertTaskRow`) | ✅ Closed (merged) |
| 🟡 **Low** | [PR #2956](https://github.com/nanocoai/nanoclaw/pull/2956) | Duplicate message delivery when agent reply repeats tool-sent content | Open since 2026-07-05 |
| 🟡 **Low** | [PR #2801](https://github.com/nanocoai/nanoclaw/pull/2801) | Router `safeParseContent` returns non-object for primitive JSON, causing `undefined` reads | Open since 2026-06-17 |
| 🟡 **Low** | [PR #3174](https://github.com/nanocoai/nanoclaw/pull/3174) | Agent containers unusable on rootless Docker daemon | Open |

**Stability note:** Two critical setup/upgrade bugs (#3169, #3166) were caught and merged quickly, suggesting good testing coverage on the release path. The rootless Docker issue (#3174) is a new regression that may affect a growing segment of users who deliberately avoid adding themselves to the `docker` group.

---

## 6. Feature Requests & Roadmap Signals

- **Credential expiry visibility** (PR #3167, merged) — Operators want proactive alerts before credentials silently expire. Expect similar "liveness check" features for other integrations (e.g., rate-limit warnings, quota near-exhaustion).
- **iMessage hosted backend** (PR #3164, merged) — The Photon-based hosted backend was a community-requested alternative to the local Chat SDK approach. This signals demand for **cloud-hosted messaging backends** across other channels.
- **Rootless Docker support** (PR #3174, open) — Security-conscious users are pushing for container runs without root or `docker` group membership. If merged, this could become a baseline requirement.
- **No duplicate delivery** (PR #2956, open) — Users want idempotent message output. A general "dedup on send" policy may appear in a future release.

**Predicted next-version focus:** Hardening around container reliability (rootless Docker, journal recovery) and credential lifecycle management are the strongest signals for the v2.1.55+ cycle.

---

## 7. User Feedback Summary

| Theme | Feedback | Sentiment |
|-------|----------|-----------|
| **Provider-agnostic setup** | Users picking non-Claude providers (e.g., Codex) are confused when setup prompts force Claude CLI installation (#3169) | Frustrated — fixed in #3170 |
| **Bundled skill bloat** | Qodo skills intercept requests without consent and require an undocumented SaaS setup (#3171) | Negative — removal PR #3172 in progress |
| **Credential blindness** | Expired Codex credential went unnoticed for days; operator saw only a cryptic "Read-only file system" error (#3167) | Frustrated — alert feature now merged |
| **Docker accessibility** | Rootless Docker users cannot run agent containers at all (#3174) | Blocked — fix PR open |
| **iMessage experience** | Unifying local and hosted backends into one channel is well-received; the hosted Photon path fills a real gap | Positive — both PRs merged |

**Overall:** Users value provider flexibility and are impatient with hidden dependencies. The Qodo skill situation is the most significant dissatisfaction signal — bundled features that activate without consent and require external accounts erode trust.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750) — *Recover stale outbound.db journals* | **Open 52 days** (since 2026-06-12) | High — affects Docker deployment reliability; two filed bugs reference it | Maintainer review / merge |
| [PR #2801](https://github.com/nanocoai/nanoclaw/pull/2801) — *Harden untrusted router input* | **Open 46 days** (since 2026-06-17) | Medium — security-adjacent; malformed input can cause silent `undefined` reads | Maintainer review / merge |
| [PR #2956](https://github.com/nanocoai/nanoclaw/pull/2956) — *Suppress duplicate message delivery* | **Open 28 days** (since 2026-07-05) | Low-Medium — user-experience degradation, not a crash | Maintainer review |
| [PR #3174](https://github.com/nanocoai/nanoclaw/pull/3174) — *Rootless Docker support* | **Open 1 day** | Medium — blocks a growing user segment; newly surfaced | Quick triage expected |
| [PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172) — *Remove Qodo skills* | **Open 1 day** | Medium — responds to active user complaint (#3171) | Quick triage expected |

**Priority call:** PR #2750 (journal recovery) and PR #2801 (router hardening) are the longest-open items with the highest impact. Both address reliability and security concerns that affect production deployments. Maintainer attention here would significantly improve project health signals.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-02

---

## 1. Today's Overview

IronClaw shows robust development velocity with **11 issues and 24 PRs** updated in the last 24 hours, of which **8 PRs were merged/closed** and only **2 issues closed**. The project is in the middle of a major architectural reorganization under the "reborn" initiative (Wave 2 refactors), with core work focusing on dependency inversion, crate splits, and CI gate hardening. No new releases were published today. Activity is heavily contributor-driven (BenKurrek, serrrfirat, ilblackdragon dominate), with one new external feature request (OrcaRouter) and one regular contributor landing a UI prototype. The project is healthy but in a significant refactoring flight phase, with most open work clustered around Wave 2 checklist items.

---

## 2. Releases

*No new releases today.*

---

## 3. Project Progress

### Merged / Closed Today

| PR/Issue | Summary |
|---|---|
| [#6963 → #6996](https://github.com/nearai/ironclaw/pull/6996) | **Closed** — Path-keyed CI gates inventory completed; fail-closed across remaining gates discovered by #6946 sweep. |
| [#6921](https://github.com/nearai/ironclaw/issues/6921) | **Closed** — Extracted neutral loop, extension, and product contracts; sealed evidence minting. |
| [#6995](https://github.com/nearai/ironclaw/pull/6995) | **Closed** — Wave 1 truth audit reconciled architecture docs with shipped reality (7 PRs: #6967, #6975, #6977, #6979, #6980, #6981, #6982). |
| [#6998](https://github.com/nearai/ironclaw/pull/6998) | **Closed** — Wave 2 Slot 1: inverted `extension_host`'s product-facing ports onto `product_contracts`. |
| [#7002](https://github.com/nearai/ironclaw/pull/7002) | **Closed** — Wave 2: inverted webui + openai_compat onto `product_contracts` (stacked on #6998). |
| [#6761](https://github.com/nearai/ironclaw/pull/6761) | **Closed** — Added regression test for generic outbound registration (new contributor: ogarciarevett). |

### Active PRs Advancing Features

- **[PR #6973](https://github.com/nearai/ironclaw/pull/6973)** — Postgres API capacity recovery: p95 regressed from 3.74s to 12.0s after #6696; this PR aims to restore throughput.
- **[PR #7000](https://github.com/nearai/ironclaw/pull/7000)** — Resolves `ProductSurfaceFailure` linchpin (Wave 2 Slot 2), unifying error vocabulary across 19 production files.
- **[PR #7003](https://github.com/nearai/ironclaw/pull/7003)** — Splits `ironclaw_extension_manager` out of `extension_host` (Wave 2 Slot 4).
- **[PR #7004](https://github.com/nearai/ironclaw/pull/7004)** — Inverts `ironclaw_operator`'s product-facing ports (Wave 2 Slot 5), removing `ironclaw_product` dependency.
- **[PR #7005](https://github.com/nearai/ironclaw/pull/7005)** — Fixes `conversations`/`threads` naming trap and widens attachments (Wave 2 Slot 6).
- **[PR #5981](https://github.com/nearai/ironclaw/pull/5981)** — Queued-message steering (forward-ported, turn-boundary races fixed, E2E tested).
- **[PR #5982](https://github.com/nearai/ironclaw/pull/5982)** — Budget approval-as-blocked-gate + usage settings (stacked on #5981).
- **[PR #7001](https://github.com/nearai/ironclaw/pull/7001)** — Keeps cached system prefix byte-stable across model calls (P0 #2 of pi-harness adoption).
- **[PR #6997](https://github.com/nearai/ironclaw/pull/6997)** — Explicit Anthropic `cache_control` breakpoints on both transports (P0 #1 of pi-harness adoption).
- **[PR #6994](https://github.com/nearai/ironclaw/pull/6994)** — OOBE automation-tasks UI prototype (carousel, inline cards, agent-mode pill) — UI-only, mock data.
- **[PR #6917](https://github.com/nearai/ironclaw/pull/6917)** — Open workspace file links in authenticated previews (regular contributor: italic-jinxin).
- **[PR #6780](https://github.com/nearai/ironclaw/pull/6780)** — Deep-link register/install gateway + private manifest source (Re-port of #5409).

---

## 4. Community Hot Topics

| Item | Comments | Type | Analysis |
|---|---|---|---|
| [#6963](https://github.com/nearai/ironclaw/issues/6963) — Path-keyed CI gates | 7 | Closed | Reflects deep concern over CI reliability and mechanical gate hygiene; community values deterministic, inventory-driven quality gates. |
| [#6973](https://github.com/nearai/ironclaw/pull/6973) — Postgres capacity regression | — | Open | Performance regression from #6696 is a top-priority fix; p95 degradation from 3.74s→12.0s directly impacts hosted single-tenant users. |
| [#6974](https://github.com/nearai/ironclaw/issues/6974) — libSQL thread_store_writes pathology | 2 | Open | Post-#6696, tool-heavy stress cases still hit p95 of 37–135s; indicates deeper database-layer bottleneck needing attention. |
| [#7009](https://github.com/nearai/ironclaw/issues/7009) — OrcaRouter as built-in LLM provider | 0 | Open | New external request from jinhaosong-source; shows users want broader multi-provider gateway support alongside existing OpenRouter, Together, Cerebras, etc. |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) — Queued-message steering | — | Open | Long-standing PR (opened Jul 11) finally forward-ported; indicates sustained demand for reliable message queue behavior. |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) — OOBE automation-tasks prototype | — | Open | First-time-user onboarding is a visible roadmap priority; design session from July being rebased into a PR. |

**Underlying need:** The community is focused on **performance recovery** post-refactor (#6696), **reliable CI**, and **expanding LLM provider coverage**. The pi-harness adoption program (cache breakpoints, prefix stability) signals investment in cost-efficient LLM usage.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR |
|---|---|---|---|
| **P0** | [#6974](https://github.com/nearai/ironclaw/issues/6974) — libSQL thread_store_writes | Tool-heavy stress cases at p95 37–135s; `main` cannot complete `large-context` prefill within 20-min CI timeout. | No fix PR yet; spawned from #6973 (open). |
| **P1** | [#6978](https://github.com/nearai/ironclaw/issues/6978) — reborn-tests.yml workflow_dispatch | `workflow_dispatch` runs structurally fail the Tests (Reborn) roll-up because `critical-mutation` requires `pull_request` or `merge_group` event name. | No fix PR yet. |
| **P1** | [#7006](https://github.com/nearai/ironclaw/issues/7006) — Changed-coverage gate | PR #5981 trips coverage gate on ~180 lines that are fault-injection error paths the hermetic harness cannot execute. | No fix PR yet; coverage gate may need adjustment. |
| **P2** | [#7011](https://github.com/nearai/ironclaw/issues/7011) — extension_manager findings | Five pre-existing bugs surfaced by WS2.4 split: false `WriteFilesystem` effect, untested lock predicate, two missing dispatch tests, six dropped causes. All in byte-identical moved code. | No fix PR yet; likely will follow #7003 merge. |
| **P2** | [#6999](https://github.com/nearai/ironclaw/issues/6999) — dependency boundaries gap | `reborn_dependency_boundaries` server-lifecycle rule never covered the WebChat v2 route surface it documents. Recorded as architecture call, not a gate. | No fix PR; deferred. |
| **P3** | [#6992](https://github.com/nearai/ironclaw/pull/6992) — CI locale bug | `comm` command failed under UTF-8 collation vs expected C order; fixed by pinning `LC_ALL=C`. | [PR #6992](https://github.com/nearai/ironclaw/pull/6992) (open). |

**Regression note:** The #6696 row-native process journal change caused significant Postgres capacity regression (addressed in #6973) and libSQL thread-store pathologies (#6974). The project appears to be in a recovery phase post-large-refactor.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|---|---|---|
| **OrcaRouter as built-in LLM provider** (#7009) | External contributor (jinhaosong-source) | **Medium** — `providers.json` already lists 9+ gateways; adding OrcaRouter is a small, consistent extension. |
| **OOBE automation-tasks UI** (#6994 + #6993) | Regular contributor (rdisandro) | **High** — UI prototype landed (#6994); backend wiring (#6993) is tracked. Part of onboarding roadmap. |
| **Budget approval gate + usage settings** (#5982) | Core contributor (ilblackdragon) | **High** — Stacked on #5981 (queued-message steering); both are forward-ported and tested. |
| **Private manifest source + deep-link register** (#6780) | Re-port by core (serrrfirat) | **Medium-High** — Design follows original #5409; would enable private IronHub registries. |
| **Anthropic cache_control breakpoints** (#6997 + #7001) | Core (ilblackdragon) | **High** — Marked P0 for pi-harness adoption; directly reduces LLM costs. |
| **Workspace file link previews** (#6917) | Regular contributor (italic-jinxin) | **High** — UX improvement, low risk, already in review. |

**Roadmap signal:** The Wave 2 refactor (WS2.x checklist) is the dominant theme — dependency inversion across `extension_host`, `operator`, `webui`, and `product_contracts`. Expect these crate boundaries to stabilize in the next release cycle.

---

## 7. User Feedback Summary

- **Performance pain:** The #6696 refactor caused measurable Postgres and libSQL regressions (p95 from 3.74s to 12.0s+, tool-heavy cases at 37–135s). Hosted single-tenant users are most affected. The community is actively tracking recovery (#6973, #6974).
- **CI reliability:** Multiple issues around CI gate correctness (#6963, #6978, #7006) suggest users and contributors depend on deterministic builds and are frustrated by mechanical failures. The fail-closed approach (#6996) is well-received.
- **Provider diversity:** The OrcaRouter request (#7009) indicates users want parity with existing multi-provider gateway support (OpenRouter, Together, Cerebras, etc.).
- **Onboarding experience:** The OOBE automation-tasks prototype (#6994) shows the team is investing in first-time-user experience, though backend wiring (#6993) is still pending.
- **Cost optimization:** Explicit cache breakpoints (#6997) and prefix stability (#7001) address real cost concerns for heavy Anthropic users.
- **Satisfaction signal:** The large volume of merged Wave 1 PRs (7 PRs audited in #6995) and the systematic Wave 2 progression suggest contributors are satisfied with the architectural direction, even if the refactoring period is disruptive.

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|---|---|---|---|
| [#5981](https://github.com/nearai/ironclaw/pull/5981) — Queued-message steering | ~21 days (opened Jul 11) | **High** | Long-open PR, now forward-ported and tested; stacked PR #5982 depends on it. Critical for message reliability. |
| [#5982](https://github.com/nearai/ironclaw/pull/5982) — Budget approval gate | ~21 days | **Medium** | Stacked on #5981; blocked until #5981 merges. |
| [#6780](https://github.com/nearai/ironclaw/pull/6780) — Deep-link register/install | ~5 days | **Medium** | Re-port of #5409; adds private manifest source support. |
| [#6978](https://github.com/nearai/ironclaw/issues/6978) — workflow_dispatch structural failure | ~2 days | **Medium** | CI gate bug that causes false negatives on dispatched runs. |
| [#7006](https://github.com/nearai/ironclaw/issues/7006) — Changed-coverage gate false positive | ~1 day | **Low-Medium** | Coverage gate trips on harness-incompatible paths; needs gate adjustment, not a code fix. |
| [#7008](https://github.com/nearai/ironclaw/issues/70

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-08-02

## 1. Today's Overview

LobsterAI shows moderate community activity with 7 issues and 2 PRs updated in the last 24 hours. The project appears to be in a steady maintenance phase — 6 of 7 issues were closed as stale (likely auto-closed due to inactivity), while 1 issue and both PRs remain open. No new releases were published, suggesting the team is focused on incremental fixes rather than major releases. The one active open issue (#1223) and two open PRs indicate ongoing UX and i18n improvements are in progress.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

**Open PRs advancing:**

- **[PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224)** — Addresses i18n hardcoding in `CoworkPromptInput.tsx`, adds Escape key to close Agent modals, and prevents duplicate deletion clicks. Closes #1223.
- **[PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358)** — Shows localized feedback when a session rename fails, resolving #670 by catching IPC errors and surfacing user-facing error messages.

**Closed today (stale):** #1293, #1296, #1298, #1302, #1305, #1307 — these were likely closed by automation due to lack of recent maintainer engagement.

## 4. Community Hot Topics

| Issue/PR | Author | Comments | 👍 | Link |
|---|---|---|---|---|
| #1223 — i18n hardcoding & UX bugs | MaoQianTu | 1 | 0 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1223) |
| #1293 — Custom MCP not working in openclaw | qxjysd | 2 | 1 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1293) |
| #1296 — Long image (3M) upload crashes page | devilszy | 2 | 0 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1296) |
| #1298 — Short input flagged as exceeding token limit | xuzx-code | 2 | 0 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1298) |

**Analysis:** The most discussed topics reveal three underlying user needs: (1) **MCP protocol parity** — users expect both SSE and HTTP-based MCPs to work consistently in the openclaw engine; (2) **Media handling robustness** — large image uploads causing page crashes indicate a need for better upload size validation and error handling; (3) **Token limit accuracy** — false "input too long" errors on short prompts suggest the token estimation logic needs review.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 High | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | Uploading a 3MB long image crashes the page and breaks subsequent tasks | No |
| 🟠 Medium | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | Two-character input incorrectly triggers "exceeds model limit" error | No |
| 🟠 Medium | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | Model provider config panel becomes read-only after closing and reopening | No |
| 🟡 Low | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | Scheduled task history shows incorrect title after task deletion | No |
| 🟡 Low | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | Custom HTTP MCP not registered in openclaw engine; only SSE MCPs work | No |

The image upload crash (#1296) is the most concerning stability issue — it causes a cascading failure that renders the app unusable until a new task is started. This warrants urgent attention.

## 6. Feature Requests & Roadmap Signals

- **Code block line numbers** (#1302) — User requested a line number toggle for code blocks with and without language identifiers. This is a quality-of-life feature for developers using LobsterAI's Cowork mode.
- **Session rename feedback** (#670, addressed in [PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358)) — Adding error feedback for failed rename operations signals a broader need for better user feedback across state mutations.
- **i18n expansion** (#1223) — The hardcoding issue and its fix suggest the project is actively improving multi-language support, which could indicate plans to broaden the international user base.

**Prediction:** The next minor release is likely to include the i18n fixes (#1224), session rename feedback (#2358), and possibly the code block line numbers (#1302) if the PR lands.

## 7. User Feedback Summary

**Pain points:**
- **MCP inconsistency** — Users are frustrated that HTTP-based MCPs are not supported in the openclaw engine while SSE ones work, creating an unreliable integration experience (#1293).
- **Upload fragility** — Large image uploads crash the entire page and break the session, with no graceful degradation or error message (#1296).
- **False token limit errors** — Short inputs triggering "content too long" errors erode user trust in the system's reliability (#1298).
- **UI state bugs** — Model config panel becoming read-only (#1307) and scheduled task titles not persisting correctly (#1305) suggest the renderer's state management needs cleanup.
- **UX accessibility** — Lack of Escape key support for closing modals and missing protections against duplicate actions (#1223) are basic UX gaps that power users notice.

**Satisfaction signals:** The project has active contributors submitting polished PRs (MaoQianTu, wangxu-dev), and the community is responsive with comments and reactions, indicating a healthy contributor base.

## 8. Backlog Watch

| Issue/PR | Age | Status | Concern |
|---|---|---|---|
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | ~4 months | Closed (stale) | 3MB image upload crash — no fix, no discussion |
| [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | ~4 months | Closed (stale) | Token limit miscalculation — no fix |
| [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | ~4 months | Closed (stale) | Config panel read-only bug — no fix |
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | ~4 months | Closed (stale) | MCP HTTP protocol gap — ⭐ 1 reaction, active user interest |
| [PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | ~4 months | Open | i18n + UX fix — awaiting review/merge |
| [PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | ~15 days | Open | Session rename feedback — awaiting review/merge |

**Key concern:** Six high-value issues were closed as stale without resolution, including two bugs with real user impact (#1296 crash, #1293 MCP gap). Maintainer attention is needed to either address these bugs or re-open them with clear prioritization. The two open PRs have been waiting for review for an extended period, which may slow the release cadence.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-08-02

## 1. Today's Overview

Moltis saw light but focused activity over the past 24 hours, with three pull requests updated and no new issues opened. Two of the three PRs were merged/closed while one remains open, indicating steady contribution momentum. No new releases were published during this window. Overall project health appears stable — maintenance and security work continues without significant disruption or backlog growth.

## 2. Releases

No new releases were published today. The most recent version remains unchanged from the prior release cycle.

## 3. Project Progress

Three PRs were updated today, two of which were closed/merged:

- **PR #1174** (merged) — *Add instrumentation and feedback collection infrastructure*. This is a substantial backend-neutral addition bringing Langfuse v4 export, OTLP operational backends, and end-user reaction feedback into the platform. It records immutable completion-only turns, provider failover attribution, and cache-aware token usage across streaming and non-streaming parity. This materially advances Moltis's observability and product-feedback capabilities.

- **PR #1170** (merged) — *fix(channels): gate /sh and privileged tools behind a per-account operators list*. This closes a privilege-escalation gap where channel senders on an access allowlist could previously reach privileged commands and host tools. The fix enforces a strict separation between access and privilege using an explicit per-account `operators` list.

- **PR #1182** (open) — *fix(sessions): allow deleting and archiving the main session*. Addresses #1132 by removing the `main` session guard in `delete_impl` and `is_archivable_entry`, while retaining the current-active-channel-session archive restriction. Awaiting merge review.

## 4. Community Hot Topics

- **[PR #1182](https://github.com/moltis-org/moltis/pull/1182)** — Open fix for session management parity. Users have long found it unintuitive that the `main` session was treated as non-deletable and non-archiveable. This PR resolves that inconsistency and is the only currently open PR in the window.

- **[PR #1170](https://github.com/moltis-org/moltis/pull/1170)** — Security-critical fix that closed a privilege boundary gap. The underlying need here is clear: as Moltis exposes more privileged tooling through channels, users and operators need assurance that access-list membership does not implicitly grant operator-level privileges.

- **[PR #1174](https://github.com/moltis-org/moltis/pull/1174)** — Instrumentation infrastructure. Reflects a growing user base that requires production-grade observability (Langfuse, OTLP) and a desire for end-user feedback loops to guide product iteration.

## 5. Bugs & Stability

No new bugs or crashes were reported today (0 open issues). However, two bug-fix PRs were closed/merged:

| Severity | PR | Description |
|----------|-----|-------------|
| **High** (security) | [#1170](https://github.com/moltis-org/moltis/pull/1170) | Privilege escalation via channel access allowlist — fixed by enforcing per-account `operators` boundary |
| **Medium** (UX/consistency) | [#1182](https://github.com/moltis-org/moltis/pull/1182) | `main` session could not be deleted or archived — fix open, awaiting merge |

No regressions were flagged in today's activity.

## 6. Feature Requests & Roadmap Signals

- **Session management parity** (PR #1182, refs #1132): Users want the `main` session treated consistently with other sessions. This signals a broader expectation of feature parity across session types — likely to recur for other `main`-specific guards.

- **Observability & feedback tooling** (PR #1174): The addition of Langfuse v4 export, OTLP backends, and reaction feedback suggests these are high-priority roadmap items. Expect further instrumentation features (tracing, metrics dashboards) in upcoming releases.

- **Fine-grained permission model** (PR #1170): The shift from access-list-based privilege to an explicit `operators` list indicates a roadmap direction toward granular, role-based access control — likely to see more PRs in this space.

## 7. User Feedback Summary

- **Pain point: unintuitive session restrictions.** The `main` session being non-deletable and non-archiveable (raised in #1132, addressed in PR #1182) is a recurring usability friction. Users expect uniform session behavior.

- **Pain point: privilege boundary ambiguity.** Channel users on allowlists who could reach privileged commands (PR #1170) represent a real security concern. The fix signals Moltis is taking this feedback seriously, and operators will likely appreciate the clearer access/privilege separation.

- **Satisfaction signal: investment in developer tooling.** The instrumentation PR (#1174) suggests the team is listening to operator and power-user needs for production observability, which should improve satisfaction among technical users.

No overt dissatisfaction or feature complaints were raised in today's issue activity (0 new issues).

## 8. Backlog Watch

- **[Issue #1132](https://github.com/moltis-org/moltis/issues/1132)** — Referenced in PR #1182. While a fix is open, it has not yet been merged. Monitor for timely closure.

- **No long-unanswered issues** were detected today. The zero open-issues count is a positive signal, though it may also suggest limited community issue-filing activity. Maintainers should encourage bug and feature reporting to ensure the backlog remains visible.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw Project Digest — 2026-08-02

## 1. Today's Overview

QwenPaw activity remains steady with 9 open issues and 13 open PRs updated in the last 24 hours, alongside zero new releases. The project is primarily in a maintenance-and-bugfix mode, with most today's PRs targeting stability regressions in memory compression, ACP transport, and provider compatibility. No merged or closed PRs were recorded in the 24h window, suggesting the maintainer queue is backed up. Community engagement is moderate: no issue has accumulated reactions or comments beyond 1–2, and no release was cut.

## 2. Releases

No new releases were published today.

## 3. Project Progress

**PRs advanced today (all still open):**

- **#6632** — Preserves plugin-sourced skill tags across reconcile cycles (fixes #6537). Extends the fix from the previously merged #6598 to workspace manifest reconciliation as well.
- **#6631** — Aligns Aliyun coding-plan models with the official website, removing unsupported `glm-5.2`/`glm-5.1` and adding missing `qwen3.7-plus`.
- **#6630** — Reports empty model responses to the user instead of silently failing, improving observability in long sessions (#6601).
- **#6629** — Triggers `summarize_when_compact` memory flow on auto-compression, fixing a gap between manual `/compact` and scroll-triggered compression (#6624).
- **#6628** — Uses `SystemMsg` for compressed-memory placeholders, preventing DeepSeek/OpenAI-compatible HTTP 400 errors (#6541).
- **#6623** — Prevents final text loss in ACP when `session/update` notifications race with `session/prompt` responses (#6625).
- **#6622** — Registers OrcaRouter as a built-in provider, removing the need for manual custom-provider setup.
- **#6620** — Relays Gemini `thought_signature` via `extra_content` without mutating the strict `ToolCallBlock` schema, unblocking Gemini streaming (#6619).
- **#6618** — Removes forced UTC normalization in session-list timestamps, restoring local-time display.

**Previously merged:**
- **#6598** — Same skill-tag preservation fix as #6632, now merged.

## 4. Community Hot Topics

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #6593 | Dedicated cleanup page for QwenPaw | 2 | https://github.com/agentscope-ai/QwenPaw/issues/6593 |
| #6480 | `nohup`/detached shell commands stall the agent | 2 | https://github.com/agentscope-ai/QwenPaw/issues/6480 |
| #6568 | Global hotkey floating quick-input bar (Doubao-style) | 2 | https://github.com/agentscope-ai/QwenPaw/issues/6568 |
| #6621 | Multi-agent collaboration guidance missing | 1 | https://github.com/agentscope-ai/QwenPaw/issues/6621 |
| #6626 | Evidence-block stripping in CI proof gate | 1 | https://github.com/agentscope-ai/QwenPaw/issues/6626 |

**Underlying needs:**
- **#6593** reflects a growing pain-point: long-term users accumulate stale sessions, auto-backed-up data, and orphaned workspace files with no unified management UI. A global cleanup tool is a natural extension of mature personal-AI usage.
- **#6568** mirrors a cross-app UX pattern (Doubao, Raycast); users want lightweight, always-accessible input without launching the full desktop window.
- **#6480** reveals a shell-tool design gap: detached processes never signal back to the agent's event loop, causing hangs that disrupt automation workflows.
- **#6621** highlights a documentation-to-behavior mismatch: multi-agent orchestration is under-discovered because the default agent does not auto-route to peers without explicit prompt engineering.

## 5. Bugs & Stability

| Rank | Issue | Severity | Description | Fix PR |
|------|-------|----------|-------------|--------|
| 1 | #6619 / #6620 | **Critical** | Streaming Gemini responses crash with `ValueError: ToolCallBlock has no field extra_content` | #6620 (open) |
| 2 | #6625 / #6623 | **High** | ACP delegate loses final text output when notification and prompt race in the same TCP segment | #6623 (open) |
| 3 | #6624 / #6629 | **High** | Auto-scroll compression skips `summarize_when_compact` memory flow; manual `/compact` works | #6629 (open) |
| 4 | #6541 / #6628 | **High** | Compressed-memory placeholder injected as `role=user` causes DeepSeek/OpenAI APIs to return HTTP 400 | #6628 (open) |
| 5 | #6626 | **Medium** | CI `Real behavior proof` gate strips fenced code blocks from `## Evidence`, rejecting valid PRs | None yet |
| 6 | #6601 / #6630 | **Medium** | Empty model responses are silently swallowed, giving users no feedback in long sessions | #6630 (open) |
| 7 | #6480 | **Medium** | `nohup`/trailing `&` shell commands stall the agent permanently | None yet |

All critical and high-severity bug fixes have open PRs from `BlackBox-Labs` and `cocoakekeyu`, but none are yet merged.

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood |
|---------|----------|------------|
| Global hotkey floating input bar (Doubao/Raycast style) | #6568 | **Medium** — well-scoped Tauri feature; author has already audited `console/src-tauri/Cargo.toml` |
| Unified cleanup page for sessions, memory, backups, workspace | #6593 | **Medium** — cross-cutting concern; would require UI + storage-layer work |
| OrcaRouter as built-in provider | #6622 | **Low** — already submitted as a PR; low-friction addition |
| Workspace shortcut in desktop sidebar | #6306 | **Low** — PR already open; desktop-specific UX polish |
| Inline tool-card image gallery in console | #5490 | **Low** — PR open since June; visual enhancement, no blocking issues |
| Shell command detach handling | #6480 | **Low** — requires agent loop redesign; no PR yet |

**Predicted next-release inclusions:** #6631 (provider alignment), #6630 (empty-response reporting), #6629/#6628 (memory compression fixes), #6620 (Gemini streaming fix), #6618 (timestamp timezone fix), and #6622 (OrcaRouter).

## 7. User Feedback Summary

**Pain points:**
- **Data bloat with no cleanup tool** (#6593): Long-term users report unmanaged storage growth from auto-memory, tool artifacts, session history, and backups. Deletion is currently per-workspace and error-prone.
- **Silent failures in long sessions** (#6601/#6630): Empty LLM responses are swallowed, leaving users unable to diagnose whether the model or the pipeline failed.
- **Multi-agent orchestration is opaque** (#6621): Users discover that the default agent does not auto-invite peers unless explicitly instructed in `PROFILE.md`, leading to wasted debugging time.
- **Shell process detachment hangs agents** (#6480): `nohup` and backgrounded commands block the agent's idle loop with no recoverable timeout.
- **Provider model lists drift from reality** (#6551/#6631): Aliyun coding-plan models listed in QwenPaw don't match the API, causing confusing "model unknown" errors.
- **Timezone display bugs** (#6618): Session timestamps forced to UTC, confusing non-UTC users.

**Satisfaction signals:**
- The `summarize_when_compact` feature is valued but broken on auto-trigger, indicating users rely on it for long-session continuity.
- ACP (Agent Communication Protocol) is actively used by external agents, and the race-condition bug (#6625) affects production workflows.

## 8. Backlog Watch

| Issue/PR | Age | Risk |
|----------|-----|------|
| #6480 — `nohup` shell detachment hang | ~7 days, no PR | High — breaks automation workflows |
| #6593 — Global cleanup page | ~2 days, no PR | Medium — impacts long-term storage |
| #6626 — CI evidence-block stripping | 1 day, no PR | Medium — blocks contributor PRs |
| #5490 — Inline tool-card image gallery | ~39 days, open | Low — feature request |
| #6302 — Unified provider/model routing | ~12 days, open | Medium — large refactor, needs review |
| #6306 — Workspace sidebar shortcut | ~12 days, open | Low — desktop UX polish |

**Maintainer attention needed:** The critical Gemini streaming crash (#6619/#6620) and the ACP race-condition bug (#6625/#6623) both have open fix PRs but remain unmerged, leaving two high-severity regressions unfixed in the current release track. The `nohup` shell hang (#6480) has been open for a week with no proposed fix and should be prioritized for automation users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-02

## 1. Today's Overview

ZeroClaw is in an active development phase, with 50 issues and 50 pull requests updated in the last 24 hours — all 50 PRs remain open, indicating no merges today. No new releases were published, though PR #9648 (a version bump to v0.8.4) is open and waiting for review. The project is seeing strong RFC-driven architectural discussion (memory separation, security hardening, OpenAI API adapter, A2A support) alongside a focused batch of evaluation-tooling improvements and channel bug fixes. Maintainer attention is spread across the v0.9.0 security/gateway milestone and ongoing channel stability work.

## 2. Releases

**No new releases today.** PR [#9648](https://github.com/zeroclaw-labs/zeroclaw/pull/9648) (`chore(release): bump version to v0.8.4`) is open and notes that the translation catalogue must be corrected before publication. No version reaches release readiness in the current window.

## 3. Project Progress

### Closed Issues (last 24h)
- [#9550](https://github.com/zeroclaw-labs/zeroclaw/issues/9550) — **Fixed**: broken LinkedIn link on the GitHub org profile corrected.
- [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) — **Closed**: Mixture-of-Agents (MoA) virtual model provider RFC (accepted/closed, likely deferred or folded into another effort).

### Notable PRs Active Today
- [#9648](https://github.com/zeroclaw-labs/zeroclaw/pull/9648) — v0.8.4 release prep; pinning corrected translation catalogue.
- [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) — **WATI channel removal**: strips the entire WATI channel module, CI, and migration entries.
- [#9634](https://github.com/zeroclaw-labs/zeroclaw/pull/9634) — **Telegram `allow_groups` fix**: skips unauthorized handler for non-mentioned group messages when `mention_only` is set.
- [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) — **Engine tool registry sealed** as `ScopedToolRegistry`, tightening the turn engine's tool surface.
- [#9080](https://github.com/zeroclaw-labs/zeroclaw/pull/9080) — **Secure relay transport + browser enrollment frontdoor** with mTLS, CSR-only issuance, and cert audit state.
- [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) — **Computer-use native drivers** added for macOS, Linux X11, and Windows, gated behind the `computer_use` feature.
- [#8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985) — **Slack lifecycle progress**: six typed agent lifecycle states surfaced during long-running Slack turns.

## 4. Community Hot Topics

### Top Issues by Discussion Depth

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #9048 | RFC: Separate conversation history from agent-curated long-term memory | 16 | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) |
| #9127 | RFC: Abstract a `KeySource` trait for master-key classification | 13 | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) |
| #8603 | RFC: OpenAI Chat Completions compatibility adapter | 12 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| #8933 | RFC: Cross-turn conversation correlation to OTel export | 12 | [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) |
| #7155 | RFC: Per-execution confirmation tier for high-risk shell commands | 11 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| #9103 | RFC: Separate authoritative memory storage from enrichment connectors | 10 | [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) |
| #9106 | RFC: A2A outbound client (A2ATool) | 10 | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) |

### Underlying Needs
- **Memory architecture clarity** is the dominant concern. Issues #9048 and #9103 both target the same root problem: conversation history and durable memory are conflated in the same storage backend, making lifecycle management inconsistent across gateways and channels.
- **Security & credential abstraction** (#9127, #7141, #7142) is a sustained focus for v0.9.0. The community is pushing for pluggable authentication, runtime-owned security pipelines, and granular sandbox policies.
- **Interoperability** is driving the OpenAI adapter (#8603) and A2A outbound client (#9106) — users want ZeroClaw agents to work as both clients and servers in multi-agent ecosystems.
- **Observability** (#8933) is gaining traction; correlating OTel spans across turns is a prerequisite for production debugging.

## 5. Bugs & Stability

### P1 Bugs Reported Recently

| Issue | Title | Severity | Link | Fix PR? |
|-------|-------|----------|------|---------|
| #9348 | WhatsApp Web answers every DM and every group in `business` mode (empty `allowed_groups` admits all) | **S1 — security risk** | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) (RFC follow-up) |
| #9417 | WhatsApp Cloud `request_approval` leaks a live approval token on send failure/cancellation | S2 — degraded | [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) | No fix PR yet |
| #9340 | CLI-created cron jobs cannot deliver output; delivery hardcoded to `None` | P1 | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | No fix PR yet |
| #6157 | Nextcloud Talk uses wrong bot message API | S3 — minor | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | No fix PR yet |
| #9631 | OpenRouter prompt caching not used (no stable `session_id` sent) | P2 — feature gap | [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) | No fix PR yet |

**Key concern:** The WhatsApp security bugs (#9348, #9417) are the highest-risk items. An operator who believes they've locked down WhatsApp to specific groups gets a fully open agent. Issue #9397 proposes treating empty `allowed_groups` as permit-none, which would address #9348's root cause.

## 6. Feature Requests & Roadmap Signals

| RFC / Feature | Status | Predicted Inclusion |
|---------------|--------|---------------------|
| OpenAI Chat Completions adapter (#8603) | RFC accepted, in progress | Likely v0.9.0 — high user demand for Open WebUI / LobeChat compat |
| A2A outbound client (#9106) | RFC accepted, in progress | v0.9.0 or v0.10.0 — depends on agent coordination milestone |
| Per-model capability & context-window config (#7100) | RFC accepted | v0.9.0 — addresses widespread misreporting of vision/context |
| Granular sandbox policy (filesystem + network) (#6996) | RFC in progress | v0.9.0 — core to the security hardening roadmap |
| Realtime speech-to-speech Gemini Live channel (#8780) | RFC, needs author action | Likely v0.10.0 — gated on Gemini integration maturity |
| Computer-use desktop drivers (#9091) | PR active, feature-gated | v0.9.0 — native drivers merged, awaiting stabilization |
| Compact skill injection default (#8313) | PR active | v0.8.5 or v0.9.0 — deprecation path is clear |
| Mixture-of-Agents provider (#8568) | Closed | Deferred / no clear owner |
| Unified slash-command registries (#7929) | RFC, needs maintainer review | v0.10.0 |
| OpenRouter prompt caching (#9631) | New issue, needs maintainer review | Unlikely before v0.10.0 — lower priority |

## 7. User Feedback Summary

- **Pain point — WhatsApp security misconfiguration**: Users deploying ZeroClaw in business WhatsApp mode are getting agents that respond to all groups, not just the allowlisted ones. This is a trust and security gap that could cause real harm in production deployments.
- **Pain point — Cron job output silently lost**: CLI-created cron jobs run successfully but discard all output (`delivery.mode = "none"`). Users have no visibility into whether their scheduled agent work produced anything useful.
- **Pain point — Model capabilities misreported**: Context window and vision support defaults from provider families override actual model capabilities, leading to rejected requests or unused features.
- **Pain point — Memory mixing confusion**: Session history and long-term memory are stored in the same backend, causing inconsistency when different channels or gateways perform autosave.
- **Positive signal — Evaluation framework expanding**: The #9220–#9248 PR series (receipts, baselines, LLM-judge grader, JUnit XML) shows strong community investment in testability and regression prevention.
- **Positive signal — Slack progress UX**: Lifecycle progress events in Slack (#8985) address the "agent seems stuck" complaint for long-running turns.

## 8. Backlog Watch

| Issue / PR | Reason for Attention | Age |
|------------|---------------------|-----|
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — Shell command confirmation tier | P1 security RFC, needs maintainer review | ~2 months |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) — Computer-use desktop support RFC | P2 architecture RFC, blocked on maintainer review | ~2.5 months |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) — Runtime-owned security decision pipeline | Core v0.9.0 security architecture, needs review | ~2 months |
| [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) — Security policy hot-reload without daemon restart | Operational pain point, needs maintainer review | ~1.5 months |
| [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — Unified slash-command registries | UX consistency across web UI, zerocode TUI, channels | ~1.5 months |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) — Unified capability catalog tracker | Cross-cutting architectural roadmap, needs coordination | ~3 months |
| [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) — WATI channel removal | XL-sized removal PR, needs author action to finalize | ~3 weeks |
| [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) — OpenRouter session_id for prompt caching | New issue, no maintainer response yet | ~1 day |

---

*Digest generated from ZeroClaw GitHub data as of 2026-08-02. All issue and PR links are direct URLs to the repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*