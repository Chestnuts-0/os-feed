# OpenClaw Ecosystem Digest 2026-08-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-05 22:43 UTC

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



# OpenClaw Project Digest — 2026‑08‑06

## 1. Today’s Overview
The OpenClaw repository saw **500 issues** and **500 pull requests** updated in the last 24 hours (469 open, 31 closed; 423 open PRs, 77 merged/closed). **No new releases** were published today. Activity remains extremely high, with the majority of open issues clustered around session‑state reliability, message‑loss bugs, and auth‑provider hiccups. The project is in a sustained maintenance‑heavy cycle, with many P1/P2 bugs awaiting maintainer review and several large‑scale PRs stuck in author‑waiting or proof‑request states.

## 2. Releases
*No new releases were published in the reporting window.*

## 3. Project Progress
**Merged/Closed PRs today (77 total; highlighted):**
- **#119747** `[CLOSED]` fix(diagnostics): preserve OTEL startup failure during rollback (maintainer, XS)
- **#119698** `[OPEN]` fix(qa): recognize portable Slack commentary lane (ready for maintainer look)
- **#119680** `[OPEN]` fix(ci): restore package Telegram beta validation (ready for maintainer look)
- **#119752** `[OPEN]` fix(gateway): finish successful sessions after timestamp races (ready for maintainer look)
- **#119745** `[OPEN]` improve(ollama): reduce inactive startup cost (waiting on author)
- **#119741** `[OPEN]` fix(sessions): prevent memory spikes during large transcript cleanup (new)
- **#119729** `[OPEN]` fix(ui): preserve chat history and active run timing (waiting on author)
- **#119718** `[OPEN]` fix(googlechat): deliver remote media URLs as text links (autofix)
- **#119753** `[OPEN]` fix(codex): align skill guidance with tool surface (waiting on author)
- **#119325** `[OPEN]` feat(models): add session‑only `/model -s` selection (waiting on author)

*Several PRs are tagged with `merge‑risk: 🚨` (session‑state, availability, auth‑provider) and await maintainer triage or author proof.*

## 4. Community Hot Topics
*Top issues by comment count (all opened earlier but most active today):*

| Issue | Comments | Rating | Summary |
|-------|----------|--------|---------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 58 | 🐚 platinum hermit | Realtime voice sessions retain unbounded provider/consult state under bursty behavior. |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 25 | 🦞 diamond lobster | Subagent completion silently lost—no retry, notification, or auto‑restart on timeout. |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | 19 | 🦪 silver shellfish | Gateway main thread saturated at boot by plugin‑metadata snapshotting, starving the accept loop. |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 14 | 🦞 diamond lobster | Regression: agent repeats identical Telegram replies 2‑10× after 5.20 update. |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | 13 | 🦪 silver shellfish | SQLite snapshot restore lacks end‑to‑end crash and identity guarantees. |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 13 | 🦞 diamond lobster | Hardcoded working path (`/Users/wangtao`) shipped in a published release. |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | 13 | 🌊 off‑meta tidepool | Feature request for companion‑friendly SQLite transcript/session seams. |
| [#106779](https://github.com/openclaw/openclaw/issues/106779) | 12 | 🦪 silver shellfish | Local llama.cpp provider fails with parser error after 2026.7.1 update. |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) | 12 | 🦞 diamond lobster | Cron announce delivery triggers `EmbeddedAttemptSessionTakeoverError` when user chats. |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 12 | 🦪 silver shellfish | Umbrella issue for duplicate transcript/replay/context‑assembly bugs across channels. |

*Underlying needs:* The community is overwhelmingly focused on **session‑state integrity**, **message‑loss avoidance**, and **stable subagent orchestration**. High comment counts on race‑condition and stale‑state bugs indicate repeated production hits.

## 5. Bugs & Stability
*Ranked by severity (P0/P1) and issue rating:*

**P0 / Release‑Blocker**
- [#119263](https://github.com/openclaw/openclaw/issues/119263) – **Agent DB v14→v15 migration fails** (`no such column: entry_valid`), gateway refuses to start. Fix PR? None linked.
- [#70903](https://github.com/openclaw/openclaw/issues/70903) – **Persistent file‑based provider cooldown** blocks users for hours after billing recovery.

**P1 – Session‑State & Message Loss**
- [#116201](https://github.com/openclaw/openclaw/issues/116201) – Realtime voice state unbounded retention.
- [#44925](https://github.com/openclaw/openclaw/issues/44925) – Subagent completion silently lost.
- [#86519](https://github.com/openclaw/openclaw/issues/86519) – Duplicate Telegram replies (regression).
- [#113306](https://github.com/openclaw/openclaw/issues/113306) – SQLite snapshot restore lacks durability guarantees.
- [#67419](https://github.com/openclaw/openclaw/issues/67419) – Session context bloat (20‑30% tokens wasted on bootstrap reinjection).
- [#112423](https://github.com/openclaw/openclaw/issues/112423) – Large SQLite transcript cleanup blocks gateway event loop.
- [#85251](https://github.com/openclaw/openclaw/issues/85251) – Codex app‑server turn wedges until stuck‑session recovery.
- [#106231](https://github.com/openclaw/openclaw/issues/106231) – Loop detection blocks exec but does not terminate stuck agent run.
- [#109490](https://github.com/openclaw/openclaw/issues/109490) – Client‑delegated message tool result interrupts turn, promised work never executes.
- [#96692](https://github.com/openclaw/openclaw/issues/96692) – Slack thread replies generated but not delivered after origin tuple lost.
- [#116022](https://github.com/openclaw/openclaw/issues/116022) – `/new` reuses stable session ID, cannot recover retired Codex binding tombstone.
- [#50165](https://github.com/openclaw/openclaw/issues/50165) – Subagents appear completed before delegated work finishes.
- [#85844](https://github.com/openclaw/openclaw/issues/85844) – Auto‑update leaves gateway with stale hashed bundle imports.
- [#97616](https://github.com/openclaw/openclaw/issues/97616) – Child‑process leak (zombies) causes runtime degradation.
- [#107873](https://github.com/openclaw/openclaw/issues/107873) – Embedded prompt‑lock takeover aborts visible WebChat turns.
- [#115700](https://github.com/openclaw/openclaw/issues/115700) – `chat.send` rejected with “thread switched branches” after model completes.
- [#91892](https://github.com/openclaw/openclaw/issues/91892) – Cron jobs stall during AI model calls.
- [#117445](https://github.com/openclaw/openclaw/issues/117445) – Feishu plugin decodes inbound DM as `?`, replies=0.
- [#117209](https://github.com/openclaw/openclaw/issues/117209) – `AuthProfileStoreUnreadable` sticky after runtime snapshot publication failure.

**P1 – Auth & Provider Issues**
- [#106786](https://github.com/openclaw/openclaw/issues/106786) – gpt‑5.6‑* advertised on ChatGPT‑OAuth route then silently falls back.
- [#46031](https://github.com/openclaw/openclaw/issues/46031) – `auth.order` ignored for GitHub Copilot provider.
- [#106779](https://github.com/openclaw/openclaw/issues/106779) – llama.cpp provider fails parser generation.

**Fix PRs in flight (selected):**
- [#119741](https://github.com/openclaw/openclaw/pull/119741) – prevents memory spikes during large transcript cleanup (addresses #112423).
- [#119752](https://github.com/openclaw/openclaw/pull/119752) – finishes successful sessions after timestamp races (addresses #119407).
- [#119718](https://github.com/openclaw/openclaw/pull/119718) – delivers remote media URLs as text links for Google Chat (addresses #89430).
- [#119753](https://github.com/openclaw/openclaw/pull/119753) – aligns Codex skill guidance with tool surface (addresses #119459).
- [#119698](https://github.com/openclaw/openclaw/pull/119698) – fixes Slack QA commentary lane detection.
- [#119680](https://github.com/openclaw/openclaw/pull/119680) – restores Telegram beta validation in CI.

## 6. Feature Requests & Roadmap Signals
- [#79902](https://github.com/openclaw/openclaw/issues/79902) – Companion‑friendly SQLite transcript/session seams (high comment count, marked `🌊 off‑meta tidepool`).
- [#50798](https://github.com/openclaw/openclaw/issues/50798) – Visible agent‑to‑agent messaging for ACP thread‑bound sessions.
- [#53654](https://github.com/openclaw/openclaw/issues/53654) – Discord `messageUpdate`/`messageDelete` support for edit‑to‑reprocess / delete‑to‑cancel.
- [#8892](https://github.com/openclaw/openclaw/issues/8892) – `--agent` flag for TUI to select agent per session.
- [#50205](https://github.com/openclaw/openclaw/issues/50205) – Configurable request labels for Gemini API calls (GCP billing tracking).
- [#48918](https://github.com/openclaw/openclaw/issues/48918) – User‑level skill preferences/conventions support.
- **#119325** – Session‑only `/model -s` selection (PR already open, likely next release).
- **#117365** – Control UI collapsible reasoning blocks (PR open, user‑visible enhancement).

*Prediction:* The **session‑scoped model selection** (#119325) and **collapsible reasoning UI** (#117365) are the most mature feature‑adjacent PRs and may land in the next minor release. The SQLite transcript‑seam request (#79902) has strong community support and could be prioritized after the current stability push.

## 7. User Feedback Summary
- **Session‑state fragility** is the dominant pain point: users report duplicated replies, lost subagent results, stuck turns, and broken cron deliveries.
- **High‑token‑waste** from bootstrap reinjection (#67419) frustrates users running multi‑turn conversations.
- **Auth‑provider quirks** (Copilot order ignored, GPT‑5.6 silent fallback, llama.cpp parser errors) cause confusion and manual workarounds.
- **Channel‑specific regressions** (Telegram duplicates, Feishu decode failure, Slack origin‑tuple loss) erode trust in channel plugins.
- **Migration pain** (#119263) blocks upgrades and requires manual database repair.
- Overall satisfaction is strained by the volume of P1 bugs; users appreciate the rapid issue turnover but want more stable releases.

## 8. Backlog Watch
*Issues requiring maintainer attention (stale or long‑open):*

| Issue | Age | Tags | Risk |
|-------|-----|------|------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 7 days | P1, platinum hermit, needs‑live‑repro | Voice‑session resource leak |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 5 months | P1, diamond lobster, source‑repro | Subagent completion loss |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 5 months | P2, diamond lobster, source‑repro | Hardcoded path in production |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 3 months | P1, diamond lobster, regression | Telegram duplicate replies |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | 13 days | P1, silver shellfish, needs‑product‑decision | SQLite snapshot integrity |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 4 months | P0, diamond lobster, stale | Provider cooldown persistence |
| [#106779](https://github.com/openclaw/openclaw/issues/106779) | 3 weeks | P1, silver shellfish, not‑repro‑on‑main | llama.cpp parser failure |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 4 months | P1, silver shellfish, umbrella | Cross‑channel transcript duplication |

*Many PRs remain in `status: �

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — Open-Source AI Agent Ecosystem
**Date:** 2026-08-06 | **Analyst:** Agnes

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape in mid-2026 is dominated by a family of "Claw" branded projects, each built on or alongside the OpenClaw runtime, with a handful of distinct architectures (NanoBot, CoPaw, ZeroClaw) filling adjacent niches. The ecosystem is in a **stability-crusade phase**: nearly every active project is wrestling with session-state integrity, channel reliability, and session-token bloat rather than shipping new capabilities. OpenClaw remains the de facto reference implementation and largest project by volume, while IronClaw and CoPaw are the most release-disciplined. A clear split exists between **gateway-focused** projects (OpenClaw, IronClaw, ZeroClaw) and **desktop/client-focused** projects (CoPaw, NanoBot, LobsterAI), with NanoClaw and NullClaw occupying a middle ground as lightweight runtimes.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release | Health Score* |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 77 merged | None | 🟡 5.2 — High volume, P0 migration bug unpatched |
| **IronClaw** | 43 | 50 | ~12 merged | v1.1.0-rc.1 | 🟢 7.8 — Active RC hardening, clear release cadence |
| **CoPaw** | 23 | 50 | 17 merged | v2.1.0-beta.1 | 🟡 6.5 — High velocity, 2 critical desktop regressions |
| **ZeroClaw** | 50 | 50 | 1 merged | None | 🟡 5.8 — Heavy RFC pipeline, review bottleneck |
| **LobsterAI** | ~3 new | ~12 merged | 12 merged | 2026.8.5 | 🟢 7.5 — Shipping cadence, 2 high-sev unpatched bugs |
| **NanoBot** | 4 | 16 | 8 merged | None | 🟢 7.2 — Strong merge ratio, focused refinement |
| **NanoClaw** | 2 open | 10 | 1 merged | None | 🟡 6.0 — Active but 1 blocker unpatched 3+ months |
| **NullClaw** | 0 new | 2 open | 0 merged | None | 🟠 4.5 — Quiet, fixes awaiting maintainer review |
| **PicoClaw** | 0 new | 2 open | 0 merged | None | 🟠 4.0 — Single contributor, integration pause |
| **Hermes Agent** | 50 | 50 | 5 merged | — | 🟡 — Digest incomplete |
| **CoPaw** | 23 | 50 | 17 merged | v2.1.0-beta.1 | 🟡 6.5 |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚪ — Dormant |

*Health Score (0–10): weighted composite of merge ratio, release cadence, P0/P1 bug exposure, and backlog freshness.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale and ecosystem depth** — 500 issues/PRs daily dwarfs every other project. OpenClaw is the central runtime that others (LobsterAI, NanoClaw) build on or alongside, making it the primary innovation vector.
- **Breadth of channel coverage** — Telegram, Slack, Feishu, Google Chat, Codex, Ollama, and more. Few peers match this breadth (IronClaw is closest).
- **Skill/MCP extensibility** — The skills system and MCP tool ecosystem are the most mature in the landscape, with community-contributed skills landing regularly (NanoClaw's Tavily skill, IronClaw's IronHub deep links).

**Technical approach differences:**
- OpenClaw uses a **gateway-centric architecture** with a SQLite-backed session store and a plugin channel model. This enables rich channel integration but introduces the session-state fragility that dominates its issue backlog.
- IronClaw has adopted a **"reborn" architecture** (Rust core, lossless migration from 1.0) with per-skill DB trees — a more modular, typed approach that appears to reduce certain classes of state bugs.
- ZeroClaw is pursuing a **capability-bound, policy-first model** (goal modes, pluggable auth, per-execution confirmation tiers) — more operator/security-focused than OpenClaw's usability-first stance.
- CoPaw and NanoBot are **desktop-client-first**, wrapping the gateway in Tauri/electron shells with local UI state management.

**Community size:** OpenClaw's issue/PR volume suggests a community 5–10× larger than the next-most-active project (IronClaw). LobsterAI appears to have a smaller but highly engaged enterprise-user base.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Need |
|---|---|---|
| **Session-state integrity** | OpenClaw, CoPaw, NanoClaw, ZeroClaw | Lost subagent completions, duplicate replies, stuck turns, context bloat — the #1 cross-project pain point |
| **Channel reliability / idle degradation** | OpenClaw, NullClaw, ZeroClaw, CoPaw | Telegram/Matrix going silent after idle, WhatsApp hang on logout, Signal message drops — always-on deployments demand self-healing |
| **MCP tool reliability** | NanoBot, NanoClaw, IronClaw, ZeroClaw | Silent error swallowing (NanoBot #5237), env-var forwarding gaps (NanoClaw #3188), auth-type guesswork (IronClaw #7251), schema-cloning memory leak (ZeroClaw #8642) |
| **Token / prompt efficiency** | OpenClaw, CoPaw, LobsterAI | 20–30% bootstrap reinjection waste (OpenClaw), 8–10K token skill-descriptions (CoPaw), duplicate system-prompt injection (LobsterAI #2440) |
| **Installation / onboarding friction** | NanoClaw, CoPaw, ZeroClaw | Docker permission recovery (NanoClaw #2006), PYTHONHOME injection (CoPaw #6697), Windows Task Scheduler daemon issues (ZeroClaw #9697) |
| **Multi-agent / subagent orchestration** | OpenClaw, NanoClaw, ZeroClaw | Silent subagent loss, forked-subagent false-completion, agent-to-agent messaging blocked — early-stage capability with widespread raw bugs |
| **Authentication & provider quirks** | OpenClaw, IronClaw, ZeroClaw | Copilot auth order ignored, GPT-5.6 silent fallback, pluggable auth RFCs — provider integration remains a fragmentation risk |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | CoPaw | ZeroClaw | NanoBot | LobsterAI |
|---|---|---|---|---|---|---|
| **Primary architecture** | Gateway + SQLite sessions | Rust core, per-skill DB trees | Tauri desktop + gateway | Policy-bound runtime | Tauri desktop + gateway | Electron desktop wrapping OpenClaw |
| **Target user** | Power users, self-hosters | Enterprise/ops teams | Desktop-first consumers | Security-conscious operators | Individual users, researchers | Chinese-market enterprise |
| **Channel strategy** | Broadest (10+ channels) | Broad, Slack-native | WeChat/DingTalk focus | Matrix/Telegram/Signal | WhatsApp/Slack/Mattermost | NIM/WeChat/Telegram |
| **Release discipline** | Low (no release today) | High (RC cadence) | Medium (beta track) | Medium (stabilization line) | Low (no release) | High (patch cadence) |
| **Extensibility model** | Skills + MCP + plugins | IronHub deep links + skills | App market + plugin pool | WASM plugins + RFC-driven | MCP metasearch + skills | OpenClaw skill compat |
| **Security posture** | Good (gating PRs with merge-risk) | Strong ( Config-as-Code epic) | Developing | Strongest (confirmation tiers, auth RFCs) | Moderate | Moderate |
| **Multi-agent support** | Early, buggy | In progress (skills self-create) | Background subagents | RFC: goal modes v1 | Limited | N/A |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly Iterating (shipping, high merge velocity):**
- **IronClaw** — v1.1.0-rc.1 in flight, 12+ PRs merged today, clear release cadence, dogfooding epics closing.
- **LobsterAI** — Patch release 2026.8.5 shipped today, 12 PRs merged, dependency upgrades (React 19, Vite 8) in progress.
- **NanoBot** — 8/16 PRs merged today (50% merge ratio), focused refinement, no release noise.

**Tier 2 — High Activity, Stability Bottlenecks:**
- **OpenClaw** — Massive volume but 500 open issues, P0 migration blocker, review pipeline saturated. The ecosystem anchor but operationally strained.
- **CoPaw** — 17 PRs merged today but 2 critical desktop regressions (#6697, #6698) blocking Windows users; beta-stage turbulence.
- **ZeroClaw** — 50 PRs open, 1 merged; RFC-driven architecture work is intellectually active but shipping is slow. Review saturation is the bottleneck.

**Tier 3 — Quiet / Maintenance Mode:**
- **NanoClaw** — Active but slow merge rate (1/10 today), 3-month-old blocker (#2006) unpatched.
- **NullClaw** — 2 fix PRs open, no maintainer response. Genuine bugs, stalled review.
- **PicoClaw** — Single contributor, 4.5-month-old housekeeping PR. Low velocity, stable.

**Tier 4 — Dormant:**
- **ZeptoClaw** — Zero activity.
- **Hermes Agent** — Insufficient data (digest truncated).

---

## 7. Trend Signals

| Trend | Evidence Across Projects | Value for AI Agent Developers |
|---|---|---|
| **Session-state is the #1 reliability risk** | OpenClaw (13 P1 session bugs), CoPaw (subagent false-completion, 400 errors), ZeroClaw (session migration, eviction), NanoClaw (attachment loss) | Invest in deterministic session lifecycle management, crash-recovery semantics, and idempotent tool execution before scaling features |
| **Multi-agent orchestration is raw** | OpenClaw subagent loss (#44925), CoPaw forked subagent false-completion (#6722), ZeroClaw goal-mode RFC, NanoClaw agent-to-agent messaging fix (#3187) | This is an unsolved problem space — early movers in reliable subagent communication, worktree finalization, and cross-agent messaging will define the next generation |
| **MCP is a fragility surface** | Silent errors (NanoBot), env leaks (NanoClaw), auth guesswork (IronClaw), RSS leaks (ZeroClaw) | MCP tool contracts need formal error semantics; developers should validate tool schemas and enforce timeout/capacity bounds |
| **Token efficiency is a user-facing concern** | 20–30% bootstrap waste (OpenClaw), 8–10K skill-descriptions (CoPaw), duplicate prompt injection (LobsterAI) | On-demand skill loading, prompt deduplication, and context compaction are high-ROI features users will notice immediately |
| **Desktop clients are hitting runtime boundaries** | CoPaw PYTHONHOME crash, NullClaw channel idle death, ZeroClaw Windows daemon issues | Cross-platform runtime abstractions need stricter environment isolation and supervisor-level process management |
| **Security/ops maturity is differentiating** | ZeroClaw's confirmation tiers and pluggable auth RFCs, IronClaw's Config-as-Code epic, ZeroClaw's SSRF gating | Operator-grade features (auditable config, policy enforcement, verifiable intent) are becoming table-stakes for production deployments |
| **Channel reliability determines trust** | Telegram duplicates (OpenClaw), WhatsApp hangs (NanoClaw/ZeroClaw), Matrix silence (NullClaw), WeChat token leaks (CoPaw) | Channel plugins need autonomous recovery (reconnect, timeout, fallback) — silent degradation is the #1 trust-killer for always-on agents |
| **OpenAI-protocol compatibility is a roadmap driver** | ZeroClaw Chat Completions RFC (#8603), IronClaw's Slack slash commands and durable attachments | Projects that embrace OpenAI-compatible endpoints will capture the existing client ecosystem (Open WebUI, Continue, Aider) faster |

---

**Bottom line:** The ecosystem is past the "does it work?" phase and into the "does it stay working?" phase. Session integrity, channel self-healing, and multi-agent reliability are the unifying challenges. IronClaw and LobsterAI demonstrate that release discipline and operator focus are viable differentiators. OpenClaw's scale is unmatched but its operational strain suggests the architecture needs the kind of modular hardening IronClaw's "reborn" design and ZeroClaw's policy-bound approach are exploring.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-06

## 1. Today's Overview

NanoBot shows sustained development momentum with **20 GitHub events** in the last 24 hours (4 issues, 16 PRs). The project is in an active refinement phase: 8 PRs were merged/closed today, covering search provider integration, UI polish, session security hardening, and channel improvements. No new release was published. The most notable closed PR (#5234) adds a multi-engine metasearch provider, while several open PRs target reliability fixes around goal loops, credential leakage, and media handling.

---

## 2. Releases

No new releases published today.

---

## 3. Project Progress

### Merged / Closed PRs (8)

| PR | Type | Summary |
|----|------|---------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Feature | Integrate **mst-python** as a metasearch provider (RRF-merged multi-engine search) |
| [#5203](https://github.com/HKUDS/nanobot/pull/5203) | Bug fix | WhatsApp outbound media detection now inspects file contents, not just extensions; unsupported audio sent as documents |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | Refactor | WebUI visual consistency: solid surface elevations, flattened layouts, removed replay animations, auto timezone detection |
| [#5250](https://github.com/HKUDS/nanobot/pull/5250) | Bug fix | Feathered/clipped activity pane edges with direction-aware fade |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | Refactor | Removed request-scoped access grants; simplified `Tool.enabled()` to a single construction-time switch |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | Feature | Mattermost: separate thread vs. main-channel mention policy (`groupPolicyInThread`) |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | Feature | *Closed* (superseded by #5252/#5259) — originally added Quick Chat & Temporary Chat |
| [#5254](https://github.com/HKUDS/nanobot/pull/5254) | Feature | Provider-native WebUI request switches (OpenAI Codex Fast mode, DeepSeek/web search, xAI Grok X Search) |

### Active PRs Under Review (8)

- [#5248](https://github.com/HKUDS/nanobot/pull/5248) — Matrix room join fix for Continuwuity compatibility
- [#5260](https://github.com/HKUDS/nanobot/pull/5260) — Memory workspace: ignore runtime files (e.g. `.dream_cursor`)
- [#5259](https://github.com/HKUDS/nanobot/pull/5259) — Enforce memory-only temporary sessions (stacked on #5252)
- [#5258](https://github.com/HKUDS/nanobot/pull/5258) — Strip credential-bearing URLs from remote Jina reader (security)
- [#5257](https://github.com/HKUDS/nanobot/pull/5257) — Bound sustained-goal continuation to prevent idle-loop spam
- [#5252](https://github.com/HKUDS/nanobot/pull/5252) — Temporary Chat mode (in-memory, non-persisted)
- [#5253](https://github.com/HKUDS/nanobot/pull/5253) — Shared interactive project terminal (PTY-backed, xterm.js)
- [#5255](https://github.com/HKUDS/nanobot/pull/5255) — Draft: truthful API server status for externally-managed instances

---

## 4. Community Hot Topics

| Item | Comments | Reactions | Link |
|------|----------|-----------|------|
| #5149 — WhatsApp audio not sending | 4 | 0 | [Issue](https://github.com/HKUDS/nanobot/issues/5149) |
| #5237 — MCP tool error envelope ignored | 2 | 0 | [Issue](https://github.com/HKUDS/nanobot/issues/5237) |
| #5256 — `/goal` produces dozens of repeated replies | 0 | 0 | [Issue](https://github.com/HKUDS/nanobot/issues/5256) |
| #5251 — MCP Apps host support in WebUI | 0 | 0 | [Issue](https://github.com/HKUDS/nanobot/issues/5251) |

**Analysis:** The most-discussed issue (#5149) reflects a real user pain point around WhatsApp media round-tripping. The MCP error-handling bug (#5237) and the goal-loop issue (#5256) both signal that agent autonomy controls are being stress-tested in production. The MCP Apps request (#5251) indicates growing demand for richer server-side UI integration beyond text/tool responses.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 High | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | `/goal` produces dozens of near-identical repeated replies while waiting for user input | [#5257](https://github.com/HKUDS/nanobot/pull/5257) (open) |
| 🟠 Medium | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP tools returning business-error envelopes (`isError=False`) are silently swallowed; agent waits for `tool_timeout` | No fix PR yet |
| 🟡 Low | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp audio messages received but not sent back | [#5203](https://github.com/HKUDS/nanobot/pull/5203) (merged — may address if root cause was extension-based detection) |

**Regression note:** PR #5238 removed request-scoped access grants, simplifying session authorization. While this is a refactor rather than a bug fix, users relying on per-request tool scoping should verify behavior.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Predicted Inclusion |
|--------|--------|---------------------|
| **Metasearch via RRF** (mst-python aggregating DuckDuckGo, Google, Brave, Bing) | [#5234](https://github.com/HKUDS/nanobot/pull/5234) (merged) | ✅ Already merged; available in next release |
| **Temporary Chat mode** (ephemeral, in-memory sessions) | [#5252](https://github.com/HKUDS/nanobot/pull/5252), [#5259](https://github.com/HKUDS/nanobot/pull/5259) | Likely in next minor release; both PRs open |
| **Provider-native request switches** (Codex Fast, web search, xAI X Search) | [#5254](https://github.com/HKUDS/nanobot/pull/5254) (closed) | Possibly folded into upcoming WebUI config overhaul |
| **Shared project terminal** (PTY-backed xterm.js dock) | [#5253](https://github.com/HKUDS/nanobot/pull/5253) | Unlikely in next release; larger feature, still open |
| **MCP Apps host support** | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Not yet started; pure enhancement request |
| **Mattermost thread policy** | [#5233](https://github.com/HKUDS/nanobot/pull/5233) (merged) | ✅ Merged; available in next release |

---

## 7. User Feedback Summary

- **WhatsApp audio round-trip failure** (#5149): User installed current nanobot, found audio received but never sent. The merged fix (#5203) switches from extension-based to content-based media detection — users should verify their audio formats work post-upgrade.
- **Goal-loop spam** (#5256): A single `/goal` command produced dozens of near-identical replies while the agent waited for user input. This is a serious usability bug that erodes trust in autonomous goal execution. The bound fix (#5257) is critical.
- **MCP error handling** (#5237): Business-level errors (404s, "data not found") wrapped in `isError=False` envelopes are invisible to the LLM. Users running custom MCP servers will hit this repeatedly.
- **Credential leakage risk** (#5258): URLs containing tokens or passwords were being forwarded to the remote Jina reader. The fix PR routes these through the local readability path — an important security hardening step.
- **WebUI polish**: Multiple merged PRs (#5249, #5250) address visual consistency and clipping artifacts, suggesting user feedback on UI quality is being actively incorporated.

---

## 8. Backlog Watch

| Item | Type | Age | Risk |
|------|------|-----|------|
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) — MCP error envelope swallowed | Bug | ~2 days open | 🔴 No fix PR yet; affects all MCP tool users with custom servers |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) — WhatsApp audio not sent | Bug | ~9 days open | 🟠 Fix merged but unverified by reporter; may remain open if issue persists |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) — MCP Apps host in WebUI | Enhancement | 1 day | 🟡 Pure feature request; no timeline |
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) — Draft: API status truthfulness | PR (draft) | 1 day | 🟡 Draft status; needs maintainer review before merging |
| [#5253](https://github.com/HKUDS/nanobot/pull/5253) — Shared project terminal | PR (open) | 1 day | 🟡 Large-scope feature; likely queued for a future release |

---

**Project Health Assessment:** NanoBot is in a high-velocity refinement cycle. The merge rate (8/16 PRs today) is strong, and critical bugs (goal loops, credential leakage, media handling) are being addressed. The main risk is the unpatched MCP error-handling bug (#5237) and the unverified WhatsApp audio fix. The temporary chat and provider-switch features signal a roadmap toward privacy-conscious, config-rich deployments.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-06

## 1. Today's Overview
Hermes Agent shows strong development velocity with 50 issues and 50 PRs updated in the past 24 hours, though only 5 of each reached closed/merged status today. Activity is heavily weighted

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-06

## 1. Today's Overview

PicoClaw saw modest activity today with zero new issues and no closed or merged pull requests in the last 24 hours. Two open PRs were updated, both authored by **lc6464**, indicating a single core contributor is actively advancing key infrastructure changes. No new releases were published, suggesting the project may be in a quiet integration phase between features. Overall, project health appears stable but low-velocity at present.

---

## 2. Releases

No new releases were published today. The project does not appear to be in an active release cycle at this time.

---

## 3. Project Progress

No PRs were merged or issues closed today. The two open PRs under active review are:

- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** — *feat(models): add configurable default fallback chain* — This introduces a user-configurable default fallback model chain via the web UI and backend API, allowing users to set primary and fallback models, reorder them, and persist the configuration. This is a meaningful UX improvement for model routing resilience.
- **[PR #1951](https://github.com/sipeed/picoclaw/pull/1951)** — *chore: move installation scripts from docs repo to here* — A housekeeping PR consolidating installation scripts from the separate docs repository into the main PicoClaw repo, improving maintainability and reducing cross-repo friction.

Both PRs remain open with no merges today.

---

## 4. Community Hot Topics

| PR/Issue | Title | Author | Updated | Link |
|----------|-------|--------|---------|------|
| #3200 | feat(models): add configurable default fallback chain | lc6464 | 2026-08-05 | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) |
| #1951 | chore: move installation scripts from docs repo to here | lc6464 | 2026-08-05 | [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) |

**Analysis:** The two most active items today are both PRs rather than issues, and neither has accumulated comments or reactions yet. The fallback chain feature ([#3200](https://github.com/sipeed/picoclaw/pull/3200)) addresses a clear user need: when a primary AI model is unavailable or rate-limited, users want automatic failover without manual reconfiguration. The installation script consolidation ([#1951](https://github.com/sipeed/picoclaw/pull/1951)), while less visible to end-users, reduces long-term maintenance burden by centralizing setup tooling.

---

## 5. Bugs & Stability

No new bug reports, crashes, or regressions were filed today. The issue backlog for new bugs is at zero. No fix PRs are associated with today's activity.

---

## 6. Feature Requests & Roadmap Signals

- **Configurable default fallback chain ([PR #3200](https://github.com/sipeed/picoclaw/pull/3200))** — This is the most significant feature signal today. Users clearly need resilient model routing, and this PR directly addresses it by enabling a persistent, reorderable fallback list through the UI. If merged, this would likely be highlighted as a key feature in the next release.
- **Installation script consolidation ([PR #1951](https://github.com/sipeed/picoclaw/pull/1951))** — While not a user-facing feature, this signals a roadmap commitment to reducing structural debt and improving onboarding reliability.

No new feature requests were opened today.

---

## 7. User Feedback Summary

No new user feedback was posted via issues today. Based on the active PRs, the community appears to value:

- **Model resilience** — The fallback chain PR suggests users are encountering model unavailability or rate-limiting and need graceful degradation.
- **Simplified setup** — The installation script consolidation indicates that distributing setup instructions across repos has been a friction point.

No dissatisfaction signals were detected in today's activity.

---

## 8. Backlog Watch

| PR/Issue | Age | Status | Link |
|----------|-----|--------|------|
| #1951 — chore: move installation scripts from docs repo to here | ~4.5 months (created 2026-03-24) | Open, no merges | [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) |

**PR #1951** is the most notable backlog item. Open since March 2026 with no merge activity despite being updated recently, this long-standing housekeeping PR warrants maintainer attention. Its delay may be blocking docs repo cleanup and adding ongoing maintenance overhead.

PR #3200 (created 2026-07-01) is newer and still within a reasonable review window.

---

*Digest generated from GitHub data as of 2026-08-06. Source: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-06

## 1. Today's Overview

NanoClaw shows **active development momentum** with 10 pull requests updated in the last 24 hours, including 9 still open and 1 merged/closed. Two long-standing issues remain open, both updated yesterday but unresolved. No new releases were published today, suggesting the team is in a code-review and stabilization phase rather than a release cadence. The project is healthy: PR throughput is strong, contributors are engaged across channels, skills, and infrastructure, and critical bugs have open fix PRs.

**Activity assessment:** 🟢 High — strong PR volume with a mix of fixes, refactors, and new features.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

### Merged / Closed PRs
- **#3187** — [fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works](https://github.com/nanocoai/nanoclaw/pull/3187) *(closed)*
  - Author: dim0627 | Updated: 2026-08-05
  - Enables proper agent-to-agent messaging by preventing the built-in `SendMessage` from intercepting inter-agent communication. This unblocks multi-agent workflows that were silently broken.

### Key Open PRs Advancing
- **#3156** — [fix(agent-runner): carry channel attachments to providers as structured parts](https://github.com/nanocoai/nanoclaw/pull/3156) *(open)*
  - Author: glifocat | Directly addresses the attachment-handling gap flagged in Issue #2528 (Signal images/PDFs unreachable). Likely the fix PR for that issue.
- **#3191** — [fix(whatsapp): bound setup() to a timeout so a logged-out session can't hang host startup](https://github.com/nanocoai/nanoclaw/pull/3191) *(open)*
  - Author: apelosi | Prevents WhatsApp channel initialization from blocking container startup indefinitely when a session is logged out.
- **#3188** — [fix(container): forward OneCLI gateway env to spawned MCP servers](https://github.com/nanocoai/nanoclaw/pull/3188) *(open)*
  - Author: kambodscharoger294-cyber | Fixes a gap where MCP stdio child processes lacked proxy/CA-trust environment variables.
- **#3186** — [refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186) *(open)*
  - Author: zvi-fried | Structural refactor to improve how skills interface with the host — supports the growing skills ecosystem.

---

## 4. Community Hot Topics

### Most Discussed / Reacted Issues
1. **[Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528)** — Signal channel: image/PDF attachments unreachable from agent container
   - Open since 2026-05-18 | Updated 2026-08-05 | 1 comment
   - **Underlying need:** Users expect multimodal input (images, PDFs) over messaging channels to reach the agent's provider pipeline. This is a core UX gap for a personal AI assistant — users sending media via Signal can't have it processed.

2. **[Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006)** — Fresh install on Debian 12 LXC: docker socket permission denied — recovery path doesn't fire
   - Open since 2026-04-25 | Updated 2026-08-05 | 1 comment
   - **Underlying need:** First-time install on Proxmox LXC containers fails due to Docker group-permission timing. The setup script's recovery path doesn't trigger, leaving users stuck. This is an onboarding barrier for a significant portion of the Proxmox-hosted user base.

### Most Active PRs
3. **[PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)** — feat: add Tavily MCP tool skill *(open)*
   - Author: manisrinivasan2k1 | Adds a popular web-search MCP integration as a utility skill.
4. **[PR #3189](https://github.com/nanocoai/nanoclaw/pull/3189)** — feat(skill): add-why — explain what happened to one message *(open)*
   - Author: teran13 | A diagnostic utility skill for understanding agent message flow — reflects demand for transparency and debugging tooling.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix PR? |
|----------|-----------|-------------|---------|
| 🔴 High | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | Signal attachments (images/PDFs) unreachable from agent container | ✅ #3156 targets this |
| 🔴 High | [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) | Docker socket permission denied on Debian 12 LXC; recovery path fails | ⚠️ No fix PR yet |
| 🟡 Medium | [#3191](https://github.com/nanocoai/nanoclaw/pull/3191) | WhatsApp setup hangs indefinitely on logged-out session | ✅ Fix PR open |
| 🟡 Medium | [#3188](https://github.com/nanocoai/nanoclaw/pull/3188) | MCP server env vars (HTTPS_PROXY, CA trust) not forwarded | ✅ Fix PR open |

**Assessment:** Two high-severity bugs remain open but at least one has an active fix PR. The Debian/LXC installation issue (#2006) has been open for ~3 months without a fix PR — a stability concern for that user segment.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Implication |
|--------|--------|-------------|
| Tavily MCP search skill | [PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190) | Growing demand for ready-made MCP tool skills; community-driven integrations |
| "add-why" diagnostic skill | [PR #3189](https://github.com/nanocoai/nanoclaw/pull/3189) | Users want explainability — visibility into why the agent took specific actions on a message |
| Dial channel support | [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) | New messaging channel integration in progress; expands platform coverage |
| WhatsApp timeout fix | [PR #3191](https://github.com/nanocoai/nanoclaw/pull/3191) | Reliability hardening for an existing channel |
| Host seams for skills | [PR #3186](https://github.com/nanocoai/nanoclaw/pull/3186) | Architectural investment in the skills system — suggests skills are a roadmap priority |
| Stale skill cleanup (qodo, Google MCP) | [PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172) | Maintenance and deprecation of unused skills |

**Prediction for next release:** Expect PRs #3156 (attachments), #3187 (agent-to-agent messaging), and #3191 (WhatsApp timeout) to land. PR #3190 (Tavily skill) and #3050 (Dial channel) are strong candidates for inclusion if review timelines hold.

---

## 7. User Feedback Summary

- **Pain point — Media attachments don't reach the agent:** Issue #2528 reflects a fundamental expectation mismatch — users send images/PDFs via Signal and expect the agent to process them. The current architecture drops these silently.
- **Pain point — Installation fails on Proxmox LXC:** Issue #2006 shows that the Docker setup recovery path doesn't account for LXC environment constraints, blocking first-time users.
- **Positive signal — Skills ecosystem is thriving:** Three skill-related PRs landed or are open this week (Tavily, add-why, Dial channel, skill refactor), indicating healthy community contribution and a clear user demand for extensibility.
- **Satisfaction — Agent-to-agent messaging unblocked:** PR #3187's closure directly resolves a multi-agent workflow blocker, which is critical power-user functionality.

---

## 8. Backlog Watch

| Item | Age | Risk |
|------|-----|------|
| [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) — Docker socket permission denied on Debian 12 LXC | Open ~3 months | 🔴 High — blocks onboarding for Proxmox users; no fix PR |
| [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) — Signal image/PDF attachments unreachable | Open ~3 months | 🟡 Medium — fix PR #3156 is open and in review |
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) — Unknown slash commands treated as normal chat | Open ~2.5 months | 🟡 Medium — formatting fix for passthrough commands; low urgency but affects UX |

**Recommendation:** Issue #2006 should receive maintainer attention soon — it's a fresh-install blocker with no fix PR and has been open the longest. The Debian/LXC deployment path deserves a prioritized fix to protect the onboarding funnel.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-08-06

## 1. Today's Overview

NullClaw's activity today is modest, with no new issues filed and no releases published. Two open pull requests from contributor **raskevichai** remain under review, both addressing runtime stability concerns rather than introducing new features. The project shows no closed issues or merged PRs in the last 24 hours, suggesting a quiet development cycle. The absence of maintainer responses on these PRs warrants attention, as both tackle real user-impacting bugs.

## 2. Releases

No new releases were published today.

## 3. Project Progress

- **PR #985** — *fix(runtime): give the agent turn path a 16 MiB stack* ([link](https://github.com/nullclaw/nullclaw/pull/985)): Addresses a stack size mismatch where `SESSION_TURN_STACK_SIZE` was incorrectly aliased to `HEAVY_RUNTIME_STACK_SIZE` (2 MiB). The agent turn path, which runs `SessionManager.processMessage*()` / `Agent.turn()`, was being allocated insufficient stack space. **Status: Open.**
- **PR #984** — *fix(channels): let poll failures age out a dead polling thread* ([link](https://github.com/nullclaw/nullclaw/pull/984)): Fixes a bug where Telegram and Matrix channels go silent after idle periods (e.g., overnight), requiring a full gateway restart to recover. The supervision loop was structurally blind to polling thread failures. **Status: Open.**

No PRs were merged or issues closed today.

## 4. Community Hot Topics

- **PR #985** — Stack size fix for agent turn path (0 comments, 0 reactions)
- **PR #984** — Polling thread failure handling for channels (0 comments, 0 reactions)

Both items are newly opened and awaiting review. The underlying needs are clear: users are hitting **runtime crashes or instability** under the agent turn path (likely deep recursion or heavy message processing), and **channel connectivity degradation** after idle periods, which directly impacts reliability for always-on deployments. Neither PR has yet attracted community discussion, possibly due to low visibility or a small active contributor base.

## 5. Bugs & Stability

| Severity | Bug | Fix PR | Status |
|----------|-----|--------|--------|
| **Medium** | Agent turn path stack overflow risk (`#976`) — `SESSION_TURN_STACK_SIZE` set too low at 2 MiB | [#985](https://github.com/nullclaw/nullclaw/pull/985) | Open |
| **High** | Telegram/Matrix channels go silent after idle; requires full gateway restart (`#972`) | [#984](https://github.com/nullclaw/nullclaw/pull/984) | Open |

No new crash reports or regressions were filed today. Both bugs have identified fix PRs, which is a positive sign for project health — no unaddressed critical bugs are visible.

## 6. Feature Requests & Roadmap Signals

No feature requests were filed today. The two open PRs are both bug fixes, suggesting the project is in a **stability-focused phase** rather than a feature-development phase. If these fixes merge, the next likely release will emphasize reliability improvements for long-running agent deployments and channel resilience.

## 7. User Feedback Summary

- **Pain point:** Channels (Telegram, Matrix) become unresponsive after idle periods, forcing disruptive full gateway restarts. This is a **reliability blocker** for always-on bot deployments.
- **Pain point:** The agent turn path risks stack overflow due to undersized thread stacks, likely triggered during complex or deep message processing.
- Both issues are operational in nature — users value NullClaw's agent capabilities but need **production-grade uptime** from its channel integrations and runtime.

## 8. Backlog Watch

- **PR #985** and **PR #984** — Both opened on 2026-08-05 with **no maintainer review or comment** as of today. These fix real user-reported bugs and are ready for merge review. Their stalled status is the most notable backlog item.
- No other open issues or PRs were reported in the last 24 hours, so the backlog is narrow but focused on these two critical fixes.

---

**Project Health Assessment:** NullClaw is in a quiet but targeted maintenance window. Two bug fix PRs address genuine stability concerns, but the lack of maintainer engagement (no reviews, no merges) is a mild yellow flag. The project appears stable otherwise with no new regressions or feature churn today.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-06

## 1. Today's Overview
IronClaw is exhibiting high development velocity heading toward the 1.1.0 release, with **43 issues** and **50 pull requests** updated in the last 24 hours. Activity is concentrated on the upcoming **v1.1.0‑rc.1**, which introduces extension reach, MCP server registration, and Slack slash‑command support. The team is actively closing long‑running E2E‑coverage epics and fixing critical regressions in skill installation, MCP authentication, and cross‑channel delivery. Overall project health is strong, with a clear focus on stabilizing the “reborn” architecture and hardening the agent’s external integrations.

## 2. Releases
**ironclaw‑v1.1.0‑rc.1** (2026‑08‑03)  
Headline changes:
- **Extension reach**: register arbitrary hosted MCP servers, install from IronHub deep links.
- **Durable file attachments** that cross channels.
- **Slack `/ironclaw` slash commands**.
- Broad pass on making failures more legible.

This is the first release candidate since 1.0.0. Migration notes and a full changelog are available in the release announcement.

## 3. Project Progress
**Merged / closed PRs today**
- [#7258](https://github.com/nearai/ironclaw/pull/7258) – The “narrowing tail”: closed WS5/WS6/WS8/WS10 slices and both crate dissolutions (batch of 7).
- [#7256](https://github.com/nearai/ironclaw/pull/7256) – Preserves 1.0 state during 1.1 RC startup (lossless migration).
- [#7227](https://github.com/nearai/ironclaw/pull/7227) – Keeps readable text logs writable after read‑before‑edit verification.
- [#7244](https://github.com/nearai/ironclaw/issues/7244) – Fixed main‑branch CI failures.
- [#6892](https://github.com/nearai/ironclaw/issues/6892) – Dogfooding & QA bug‑fixing epic closed.

**Key features advanced**
- **Skills system**: [#7171](https://github.com/nearai/ironclaw/pull/7171) gives every skill mount its own DB‑backed tree and makes skill commands runnable.
- **Channel delivery**: [#7157](https://github.com/nearai/ironclaw/pull/7157) implements the explicit channel‑delivery tool (two‑lane model).
- **MCP egress**: [#7260](https://github.com/nearai/ironclaw/pull/7260) backports fixes so dynamically discovered hosted MCP tools retain their registered HTTPS endpoint.

## 4. Community Hot Topics
| Issue / PR | Comments | Focus |
|------------|----------|-------|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | 7 | **Configuration‑as‑Code epic** – declarative tenant blueprints, schema‑driven config, audit trail. |
| [#7194](https://github.com/nearai/ironclaw/issues/7194) | 3 | **Admin‑allowed shared channel as outbound target** – extend delivery layer to address channels the agent can enumerate. |

**Underlying needs**  
Operators want **declarative, diff‑able, auditable configuration** (instead of hand‑editing `.env`, workspace docs, and settings JSON). The outbound‑target request reflects a desire for **flexible delivery routing** without breaking the existing channel‑binding model.

## 5. Bugs & Stability
**Reported today (ranked by severity)**

| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| [#7249](https://github.com/nearai/ironclaw/issues/7249) | P2 | Slack DM execution result delivered to Telegram | – |
| [#7251](https://github.com/nearai/ironclaw/issues/7251) | P2 | Agent guesses MCP auth type instead of discovering/initiating auth | – |
| [#7248](https://github.com/nearai/ironclaw/issues/7248) | P2 | Invalid custom MCP endpoint accepted, then fails run | – |
| [#7247](https://github.com/nearai/ironclaw/issues/7247) | P1 | Agent falsely claims GitHub is already connected | – |
| [#7246](https://github.com/nearai/ironclaw/issues/7246) | P1 | Agent hallucinates automation status | – |
| [#6257](https://github.com/nearai/ironclaw/issues/6257) | Bug | `Invalid value (attachments.mime_type)` when sending/generating PDFs | – |
| [#7254](https://github.com/nearai/ironclaw/issues/7254) | Bug | Cannot access files attached to Slack feedback threads | – |
| [#7209](https://github.com/nearai/ironclaw/issues/7209) | Bug | Regression‑test gate fails frontend‑only PRs | – |

**Mitigating actions**  
- [#7260](https://github.com/nearai/ironclaw/pull/7260) backports MCP‑egress and log‑writability fixes.
- [#7227](https://github.com/nearai/ironclaw/pull/7227) resolves the readable‑text‑log‑writable regression.

## 6. Feature Requests & Roadmap Signals
| Issue | Type | Signal |
|-------|------|--------|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | Epic | **Configuration‑as‑Code** – likely to ship as part of the 1.1.x config‑management suite. |
| [#6578](https://github.com/nearai/ironclaw/issues/6578) | Epic | **Admin‑managed agents as UserId subjects** – needed for tenant‑level automation and delegated integrations. |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) | Epic | **Skills the model can self‑create, find, choose, and use** – directly tied to the v1.1.0 skill‑system overhaul. |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Epic | **Storybook + AI‑first design system** – will standardize theming and interactions across the WebUI. |
| [#7218](https://github.com/nearai/ironclaw/issues/7218) | Epic | **Web Debug Inspector** – operator‑only tool for prompt construction, agent activity, and tool execution. |

**Prediction**  
The next minor release (1.1.0‑final) will likely include the **skills‑system overhaul**, **explicit channel‑delivery tool**, **MCP egress fixes**, and **lossless migration**. The Config‑as‑Code epic and design‑system work are scoped for post‑1.1 iterations.

## 7. User Feedback Summary
**Pain points**
- **Cross‑channel delivery leaks** (Slack DM results appearing in Telegram).
- **MCP authentication guesswork** – agents speculate instead of discovering or initiating auth flows.
- **Invalid endpoints accepted** – leading to run failures after silent registration.
- **File‑attachment access failures** – PDFs and Slack thread attachments produce errors or are inaccessible.
- **False confidence** – agents claim connections/automations are active without verifying state.

**Satisfaction signals**
- Positive reception of the **IronHub integration** and **deep‑link skill installation**.
- Appreciation for **durable file attachments** and **Slack slash commands** in the RC.
- Users are engaging with the **dogfooding epics**, providing concrete bug reports that are being triaged rapidly.

## 8. Backlog Watch
| Issue | Created | Age | Why it needs attention |
|-------|---------|-----|------------------------|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | 2026‑04‑28 | ~3 months | High‑value Config‑as‑Code epic; blocks operator workflows. |
| [#6578](https://github.com/nearai/ironclaw/issues/6578) | 2026‑07‑23 | ~2 weeks | Admin‑managed agents are a prerequisite for multi‑tenant automation. |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) | 2026‑07‑31 | ~1 week | Skills epic is large; needs sustained maintainer oversight. |
| [#7245](https://github.com/nearai/ironclaw/issues/7245) | 2026‑08‑05 | Today | `reborn_services.rs` exceeds 6,400 lines; violates architecture rules. |
| [#7231](https://github.com/nearai/ironclaw/issues/7231) | 2026‑08‑05 | Today | “APPROVE” comments don’t submit GitHub approvals, blocking PR merges. |

**Recommendation**  
Prioritize decomposition of the monolithic `reborn_services.rs` file and clarify the GitHub‑approval workflow to unblock PRs. The Config‑as‑Code and admin‑agent epics should be tracked in the next milestone planning session.

---
*Generated from GitHub data as of 2026‑08‑06. All issue/PR links point to the nearai/ironclaw repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-08-06

---

## 1. Today's Overview

LobsterAI shows **strong development velocity** with 12 PRs merged/closed in the last 24 hours and one new patch release (2026.8.5). Activity is concentrated around the OpenClaw runtime gateway, startup campaign polish, and dependency upgrades. Three active open issues were flagged today — all reporting real bugs rather than feature requests — signaling the current release candidate is surfacing integration friction. Overall project health: **active and shipping**, with maintainers responding promptly to both stability and experience issues.

---

## 2. Releases

### LobsterAI 2026.8.5 (2026-08-05)

| Change | Detail |
|---|---|
| **feat(activity)** | Native daily check-in experience — [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) |
| **feat(enterprise)** | Isolate account-scoped auth and service flows — [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) |
| **style** | Cosmetic / formatting updates |

No breaking changes announced. The enterprise auth isolation may affect custom integrations that relied on shared account-scoped tokens — developers should audit their auth flows against the new scoping rules.

---

## 3. Project Progress

### Key Merged / Closed PRs (2026-08-05)

| PR | Area | Summary |
|---|---|---|
| [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437) | `main`, `cowork` | Harden window lifecycle and shutdown; drain timers + hard deadline prevent keep-alive sockets from stalling app quit |
| [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436) | `openclaw` | Prevent gateway lock poisoning from self-restart races — a notable stability fix for Windows TerminateProcess mid-lock-write |
| [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) | `cowork` | Add title-bar conversation search button with query-aware navigation |
| [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433) | `renderer` | Polish startup credit campaign: crop white gutters, show localized failure messages, refresh campaign binding on retry |
| [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) | `renderer` | Disable World Cup final reward auto-popup; keep manual claim flow |
| [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | `nim` | Fix hardcoded `teamTypeNum` bug causing incorrect group name lookup in NIM supergroups (closes [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200)) |
| [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) | `deps-dev` | Bump `cross-env` 7.0.3 → 10.1.0 |
| [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) | `deps` | Bump `react-dom` 18.3.1 → 19.2.4 |
| [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | `deps` | Bump `vite` 5.4.21 → 8.0.9 |

**Notable trend:** A major dependency sweep (React 19, Vite 8) landed alongside two critical gateway-stability fixes, suggesting the team is preparing a foundation upgrade while hardening runtime reliability.

---

## 4. Community Hot Topics

| Issue / PR | Comments | Reactions | Status |
|---|---|---|---|
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) — NIM supergroup name resolution bug | 1 | 0 | Open (stale) / Fix PR #1201 merged |
| [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) — Skill switch silent failure + config overwrite | 0 | 0 | Open |
| [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) — Duplicate system prompt injection (4,425 chars) | 0 | 0 | Open |

**Analysis:** The top-voted activity today centers on **configuration persistence and prompt hygiene** — users are hitting edge cases where OpenClaw's skill-matching logic diverges from LobsterAI's write path, and where system instructions are being injected redundantly. These signal a growing power-user base that relies on fine-grained control over agent behavior, and whose workflows break when internal conventions (directory names vs. frontmatter names) drift apart.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR |
|---|---|---|---|
| **🔴 High** | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | Desktop injects duplicate system-prompt block (~78% overlap with `AGENTS.md`), doubling prompt token cost and potentially confusing the model | None yet |
| **🟠 Medium** | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | Skill开关 silently fails: OpenClawConfigSync writes by directory name but OpenClaw reads by frontmatter `name`; `openclaw.json` overwritten wholesale, losing user customization | None yet |
| **🟡 Low** | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | NIM `teamTypeNum` hardcoded incorrectly; supergroup names fall back to raw ID in @-mentions | [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) ✅ merged |

**Stability highlights from merged PRs today:**
- [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437) — Eliminates hang-on-quit caused by lingering OpenClaw gateway keep-alive sockets.
- [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436) — Fixes lock-file poisoning race that could block gateway respawns for up to 30 seconds on Windows.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Assessment |
|---|---|---|
| **Enterprise auth isolation** | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) (shipped) | Confirmed feature — accounts may expect dedicated auth/service scoping in future enterprise builds. |
| **Native daily check-in** | [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) (shipped) | Indicates an engagement-focused roadmap; expect further activity/retention features. |
| **Conversation search in title bar** | [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) (shipped) | Power-user navigation improvement; similar search-first UX patterns likely to expand. |
| **Prompt hygiene / deduplication** | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | Strong signal — users want predictable, lean system-prompt injection. Likely to surface as a dedicated feature or config option. |
| **Skill config persistence** | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | Users need a reliable, non-overwrite mechanism for skill toggles; a dedicated settings UI or patch-write strategy is a probable next step. |

---

## 7. User Feedback Summary

- **Satisfaction:** The startup credit campaign polish (crop, localized errors, manual reward claim) received positive engagement via merge activity, suggesting the team is responsive to campaign UX feedback.
- **Pain points:**
  - **Prompt bloat:** Duplicate system-prompt injection doubles token usage and risks degraded model behavior — a quality-of-life and cost issue.
  - **Config fragility:** The skill-switch / `openclaw.json` overwrite problem means users cannot reliably customize agent behavior across restarts, which erodes trust for power users.
  - **NIM supergroup names:** @-mention displays raw IDs instead of group names breaks collaboration workflows in enterprise settings.
- **Overall sentiment:** Users are deeply engaged with the agent customization layer and are hitting real friction around configuration persistence and prompt efficiency — areas where small fixes yield high perceived value.

---

## 8. Backlog Watch

| Issue | Age | Risk | Notes |
|---|---|---|---|
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | ~4 months (stale) | Medium | Fix merged (#1201) but issue still open — confirm close. |
| [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | 1 day | High | Duplicate prompt injection; no fix yet. High impact on cost and correctness. |
| [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 1 day | High | Skill-switch silent failure + config overwrite; no fix yet. Blocks customization workflows. |

**Recommendation:** The two newly opened issues (#2440, #2441) should be prioritized for the next patch cycle. Both describe reproducible bugs with clear impact and no existing fix PRs. The stale-but-fixed #1200 should be closed to keep the backlog clean.

---

*Data source: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) via LobsterAI GitHub activity, 2026-08-05/06.*

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

## 1. Today's Overview

CoPaw is experiencing **high development velocity** today, with 23 issues and 50 pull requests updated in the last 24 hours (17 open issues, 21 merged/closed PRs). No new releases were published. Activity is concentrated around bug fixes for streaming/reasoning-content handling, desktop stability improvements, and UX enhancements for channel integrations (WeChat, DingTalk). The project is in an active hardening phase leading up to the v2.1.0 release, with particular focus on reliability under heavy tool-use and multi-turn scenarios.

## 2. Releases

**No new releases today.** The most recent tracked version is **v2.1.0-beta.1** (Tauri Desktop), which is currently experiencing regressions (see Bugs & Stability).

## 3. Project Progress

### Merged / Closed Today
- **#5598** — [feat(console): add LLM fallback configuration UI](https://github.com/agentscope-ai/CoPaw/issues/5598) — Users can now configure per-agent and global model fallback lists from the Console UI.
- **#5597** — [feat(backend): per-agent and global LLM model fallback with safe retry boundaries](https://github.com/agentscope-ai/CoPaw/issues/5597) — Core backend logic for automatic model switching on transient/permission failures.
- **#5462** — [feat(console): add global responsive utility classes](https://github.com/agentscope-ai/CoPaw/issues/5462) — Shared CSS utilities for mobile adaptation.
- **#5447** — [fix(channel): yield failed AgentResponse on console errors to unblock UI](https://github.com/agentscope-ai/CoPaw/issues/5447) — Fixes perpetual waiting state in the Console when model/runtime errors occur.
- **#6675** — [fix: force relay reasoning_content for DeepSeek models](https://github.com/agentscope-ai/CoPaw/issues/6675) — Resolves #6667/#6541; ensures `reasoning_content` is preserved through scroll compaction.
- **#6718** — [feat: unify app market listings](https://github.com/agentscope-ai/CoPaw/issues/6718) — Standardized marketplace UI.
- **#6716** — [invalid] Integration test `test_auto_update_persists_targets` fixed (KeyError resolved).
- **#6413** — [closed] UI "full mode" simplification request — consolidated into config button flow.
- **#6392** — [closed] Agent-level token statistics feature — deferred to plugin development for now.
- **#6700** — [closed] Tool output truncation and history pagination added to address session load freezes.

### Key Open PRs in Review
- **#6729** — Integration test for auto-update targets via pool detail endpoint.
- **#6727** — Fixes Windows directory auto-marking in tests, unhiding 66 previously skipped cases.
- **#6669** — Stabilizes Chrome native messaging and Windows restore locking on desktop.
- **#6725** — Reports fork finalization failures in background subagents (fixes #6722).
- **#6723** — Expires stale capability cache entries and clears on model switch (fixes #6687).
- **#6580** — Sprint 4/5 e2e coverage: 15 new UI test cases (sidebar, memory, inbox, plugins, slash commands).
- **#6720** — Cross-harness Agent OS blog post (Chinese + English).
- **#6719** — Persistent workspace artifact cards for chat turns (WorkBuddy-style).
- **#6715** — OneBot remote inbound voice and image media handling.

## 4. Community Hot Topics

| Issue/PR | Comments | Topic | Link |
|---|---|---|---|
| #6684 | 4 | Channel retry functionality for self-hosted Matrix | [Issue #6684](https://github.com/agentscope-ai/CoPaw/issues/6684) |
| #6436 | 3 | Automatic model routing (small/fast → vision → big) | [Issue #6436](https://github.com/agentscope-ai/CoPaw/issues/6436) |
| #6480 | 2 | `nohup`/background shell processes causing agent hang | [Issue #6480](https://github.com/agentscope-ai/CoPaw/issues/6480) |
| #6696 | 2 | WeChat iLink `context_token` consumed by typing indicator | [Issue #6696](https://github.com/agentscope-ai/CoPaw/issues/6696) |
| #6690 | 1 | Cron pause/resume not persisting `enabled` state | [Issue #6690](https://github.com/agentscope-ai/CoPaw/issues/6690) |

**Analysis:** The community is pushing hard on **reliability under real-world conditions** — channel resilience (Matrix retries, WeChat token leaks), shell process detachment, and state persistence. The automatic model routing request (#6436) signals demand for cost-aware, context-aware model selection rather than static per-agent pinning. The WeChat channel issues (#6696, #6695, #6728) indicate the iLink integration is maturing but still has UX and protocol-level gaps for non-English users.

## 5. Bugs & Stability

### Critical / High Severity
| # | Title | Status | Fix PR | Link |
|---|---|---|---|---|
| #6697 | v2.1.0b1 desktop injects PYTHONHOME → all Python subprocesses crash (ModuleNotFoundError) | **OPEN** | — | [Issue #6697](https://github.com/agentscope-ai/CoPaw/issues/6697) |
| #6698 | Browser SDK `open()` always fails with WireProtocolError: Target crashed | **OPEN** | — | [Issue #6698](https://github.com/agentscope-ai/CoPaw/issues/6698) |
| #6726 | Long console sessions with heavy tool usage → 400 "tool must respond to tool_calls" | **OPEN** | — | [Issue #6726](https://github.com/agentscope-ai/CoPaw/issues/6726) |
| #6707 | 400 invalid_request_error when thinking-mode upstream receives tool-call history | **OPEN** | #6721 (open), #6675 (merged) | [Issue #6707](https://github.com/agentscope-ai/CoPaw/issues/6707) |
| #6722 | Background forked subagent reports completed when worktree finalization fails | **OPEN** | #6725 (open) | [Issue #6722](https://github.com/agentscope-ai/CoPaw/issues/6722) |

### Medium Severity
| # | Title | Status | Fix PR | Link |
|---|---|---|---|---|
| #6696 | WeChat iLink one-time `context_token` consumed by typing indicator | **OPEN** | — | [Issue #6696](https://github.com/agentscope-ai/CoPaw/issues/6696) |
| #6695 | Approval prompts unreachable when using WeChat channel only | **CLOSED** | — | [Issue #6695](https://github.com/agentscope-ai/CoPaw/issues/6695) |
| #6708 | 503 in-stream SSE errors not retried | **OPEN** | #6714 (open) | [Issue #6708](https://github.com/agentscope-ai/CoPaw/issues/6708) |
| #6687 | OpenRouter multimodal probe overwrites capabilities with false | **OPEN** | #6723 (open) | [Issue #6687](https://github.com/agentscope-ai/CoPaw/issues/6687) |
| #6690 | Cron pause/resume doesn't persist `enabled` state | **CLOSED** | — | [Issue #6690](https://github.com/agentscope-ai/CoPaw/issues/6690) |

**Notable:** The v2.1.0b1 desktop regressions (#6697, #6698) are serious and block Windows users. The reasoning-content / tool-call interaction bugs (#6707, #6726) affect a growing set of users running long multi-turn sessions with thinking-models. PR #6721 and #6723 are actively addressing some of these.

## 6. Feature Requests & Roadmap Signals

| # | Title | Link | Likelihood for Next Release |
|---|---|---|---|
| #6730 | Live artifact canvas — render agent-generated HTML in a side panel | [Issue #6730](https://github.com/agentscope-ai/CoPaw/issues/6730) | Medium — aligns with #6719 (artifact cards) |
| #6699 | On-demand skill loading (current: all 27+ skills consume 8-10K tokens in system prompt) | [Issue #6699](https://github.com/agentscope-ai/CoPaw/issues/6699) | **High** — directly addresses token bloat, complements #6650 pool split |
| #6724 | Configurable MCP tool-call timeout (per-client + call-level guard) | [Issue #6724](https://github.com/agentscope-ai/CoPaw/issues/6724) | Medium — infra-level, useful but not user-facing |
| #6436 | Automatic model routing (small/fast → vision → big) | [Issue #6436](https://github.com/agentscope-ai/CoPaw/issues/6436) | Low-Medium — ambitious, requires provider abstraction work |
| #6728 | WeChat approval prompts support Chinese approve/deny labels | [Issue #6728](https://github.com/agentscope-ai/CoPaw/issues/6728) | **High** — small UX fix, #6695 already closed |
| #6684 | Channel retry functionality (Matrix and others) | [Issue #6684](https://github.com/agentscope-ai/CoPaw/issues/6684) | Medium — reliability improvement |

**Prediction:** On-demand skill loading (#6699) and WeChat i18n (#6728) are the most likely to land in the next patch or beta, given their focused scope and clear user demand. The artifact canvas (#6730) may follow #6719 as a natural extension.

## 7. User Feedback Summary

**Pain Points:**
- **Token waste from skill loading:** Users with 27+ skills report 8-10K tokens consumed just by skill descriptions (#6699). This is a top complaint from power users.
- **Desktop regressions in v2.1.0b1:** Python subprocess crashes and browser SDK failures block Windows desktop users (#6697, #6698).
- **WeChat channel UX gaps:** English-only approval prompts, token consumption bugs, and unreachable approval dialogs frustrate Chinese-speaking users (#6695, #6696, #6728).
- **Long session instability:** Heavy tool-use sessions crash with 400 errors due to tool-call / reasoning_content mismatches (#6707, #6726).
- **UI confusion around "full mode":** Users find the dual "full/simple mode" concept confusing; prefer direct config access (#6413 — closed, addressed).
- **Large tool outputs freeze the console:** Multi-MB tool outputs cause page hangs on session reload (#6700 — fixed/closed).

**Satisfaction Signals:**
- The LLM fallback feature (#5597/#5598) was well-received and merged.
- Reasoning-content fixes for DeepSeek (#6675) address a known pain point.
- The responsive UI work (#5462) and console error unblocking (#5447) improve everyday usability.

## 8. Backlog Watch

| # | Title | Age | Risk | Link |
|---|---|---|---|---|
| #6697 | v2.1.0b1 PYTHONHOME injection → Python crashes | ~2 days | **Critical** — blocks Windows desktop users | [Issue #6697](https://github.com/agentscope-ai/CoPaw/issues/6697) |
| #6698 | Browser SDK `open()` always crashes (WireProtocolError) | ~2 days | **Critical** — breaks browser automation on desktop | [Issue #6698](https://github.com/agentscope-ai/CoPaw/issues/6698) |
| #6726 | 400 error in long sessions with heavy tool usage | ~1 day | High — affects production reliability | [Issue #6726](https://github.com/agentscope-ai/CoPaw/issues/6726) |
| #6707 | 400 invalid_request_error with thinking-mode + tool calls | ~1 day | High — impacts DeepSeek and similar providers | [Issue #6707](https://github.com/agentscope-ai/CoPaw/issues/6707) |
| #6696 | WeChat iLink context_token consumed by typing indicator | ~2 days | Medium-High — breaks WeChat reply flow | [Issue #6696](https://github.com/agentscope-ai/CoPaw/issues/6696) |
| #6722 | Forked subagent reports completion on worktree failure | ~1 day | Medium — silent data loss risk | [Issue #6722](https://github.com/agentscope-ai/CoPaw/issues/6722) |
| #6480 | `nohup` shell processes cause agent to hang | ~11 days | Medium — workaround exists but UX is poor | [Issue #6480](https://github.com/agentscope-ai/CoPaw/issues/6480) |

**Maintainer Attention Needed:** The two v2.1.0b1 desktop regressions (#6697, #6698) are the most urgent — they block a whole platform segment. The WeChat token bug (#6696) and the long-session 400 errors (#6726, #6707) also deserve prioritization given their impact on production users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-06

## 1. Today's Overview

ZeroClaw shows sustained high activity with 50 issues and 50 PRs updated in the last 24 hours, though only 1 PR was merged/closed — indicating a heavy review pipeline rather than a merge bottleneck. The project is in an active stabilization phase for v0.8.5 (stabilization line through August 30), with significant architectural RFCs advancing in parallel on agent goal modes, chat-completions compatibility, and runtime session ownership. Security hardening remains a dominant theme, with multiple PRs and RFCs addressing authentication, shell policy, and verifiable intent. No new releases were published today.

## 2. Releases

No new releases today. The v0.8.5 stabilization line (#9459) remains active with intake frozen since August 4; weekly cuts will ship ready work through August 30.

## 3. Project Progress

**Merged/Closed today:**

- **#9750** [CLOSED] `fix(service): bound launcher-owned daemon logs` — Replaced unbounded fixed-file daemon log redirection with an 8 MiB-bounded shared service supervisor using nonblocking queues.
- **#9462** [CLOSED] Bug fix for `zeroclaw-plugins` unit tests behind `plugins-wasmtime` feature not executing in CI.
- **#7467** [CLOSED] Feature: cursor navigation support while editing string settings in zerocode.
- **#9335** [CLOSED] Feature: support for data-wrapped OpenAI-compatible chat responses.
- **#9652** [CLOSED] Bug fix: `config set` now accepts cron keys with hyphenated aliases consistently with `config list`/`get`.
- **#6350** [CLOSED] Bug fix: WhatsApp Web LID-based contact silent message drops (allowed-numbers bypass).
- **#9432** [CLOSED] Task: `vi_verify` no longer registered as a model-callable tool pending a chain verifier; startup warning emitted.
- **#9728** [CLOSED] `session/new` now supports opt-out from idle-sibling eviction (part of #9727).

**PRs advanced (open, under review):**

- **#9737** — Enforces agent policy in tool pipelines, applying memory and ACP delivery predicates to eager pipeline children.
- **#9717** — CI: replaced three release provenance steps with direct `actions/attest` action for release attestation.
- **#9773** — Bounds launchd daemon logs on macOS to 8 MiB per file (companion to #9750).
- **#9678** — Hardens Git shell policy arguments with quote- and escape-aware normalization at the command-policy boundary.
- **#9715** — Makes JSONL session migration retry-safe with atomic commit and SQLite transaction.
- **#9428** — Requires sender authorization for Bluesky and Reddit channels (they previously bypassed `peer_groups`).
- **#8826** — Gates `image_gen` download URLs against SSRF (fal.ai-supplied URLs).
- **#9403** — Binds WASM plugin exports by wall-clock deadline (30 s default via `plugins.limits.call_timeout_ms`).
- **#9772** — Adds `per_user_session` toggle for shared Telegram group-chat sessions.
- **#9701** — Keeps chat WebSockets alive with configurable `websocket_ping_interval_secs`.

## 4. Community Hot Topics

| Issue | Title | Comments | Link |
|---|---|---|---|
| #8303 | RFC: Goal mode v1 — bounded foreground Matrix work | 17 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8303> |
| #8603 | RFC: ZeroClaw Chat Completions profile | 16 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8603> |
| #7155 | RFC: Per-execution confirmation tier for high-risk shell commands | 16 | <https://github.com/zeroclaw-labs/zeroclaw/issues/7155> |
| #7141 | RFC: Pluggable inbound authentication and canonical principals | 12 | <https://github.com/zeroclaw-labs/zeroclaw/issues/7141> |
| #8692 | Tracker: Maintainer decision queue for RFCs | 10 | <https://github.com/zeroclaw-labs/zeroclaw/issues/8692> |
| #9487 | RFC: Runtime-owned conversation sessions & transport adapters | 10 | <https://github.com/zeroclaw-labs/zeroclaw/issues/9487> |

**Analysis:** The community is heavily engaged on **architectural RFCs** that define ZeroClaw's control plane. Goal mode (#8303) addresses multi-turn objective persistence — a core agent capability users need for complex workflows. The Chat Completions profile (#8603) responds to strong demand for OpenAI-protocol compatibility so clients like Open WebUI, Continue.dev, and Aider can integrate natively. The shell confirmation-tier RFC (#7155) and pluggable auth RFC (#7141) reflect maturing security expectations from operators running agents with shell access. The maintainer decision tracker (#8692) shows the team is formalizing RFC intake discipline.

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR |
|---|---|---|---|
| **S1 — workflow blocked** | #9775 | OpenRouter streaming drops `provider_extra`, breaking configured params | — |
| **S1 — workflow blocked** | #9774 | Signal channel silently drops `sourceUuid`-only senders | — |
| **S2 — degraded** | #9768 | `daemon reload` not on SIGUSR1; degraded-security warning instructs operators to send a signal that kills the daemon | — |
| **S2 — degraded** | #6350 (closed) | WhatsApp LID contacts silently dropped | #9428-style fix landed |
| **S2 — degraded** | #9697 | ZeroCode cannot connect to daemon launched via Windows Task Scheduler | — |
| **P1** | #8642 | MCP/tool-schema cloning drives unbounded RSS growth in agent loop | — |
| **P2** | #9328 (closed) | `vi_verify` evaluated constraints without verifying credential chain | #9432 safeguard landed |
| **P2** | #9770 | `cron update` silently discards declarative job changes (6 columns) | — |
| **P2** | #9771 | `zeroclaw-gateway` fails `clippy -D warnings` on default features | — |
| **P2** | #9769 | Withheld-capability notice invisible when log persistence is disabled | — |

**Notable:** Two S1 bugs filed today (#9775, #9774) indicate regressions in provider and channel paths that deserve urgent attention. The P1 RSS growth issue (#8642) from MCP tool-schema cloning remains unresolved and is a known memory-leak vector.

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Description | Likelihood for v0.8.5+ |
|---|---|---|
| #8603 | OpenAI Chat Completions profile for ZeroClaw gateway | High — broad client compatibility demand; PRs like #9772 show parallel integration work |
| #8303 | Goal mode v1 — bounded foreground agent work | Medium-High — architectural RFC still under review; spans multiple turns |
| #9631 | Stable `session_id` to OpenRouter for prompt-cache savings | Medium — low-risk, cost-impact feature; author OskarSwierad |
| #7431 | Pre-turn tool elicitation hints for NL routing | Low-Medium — lightweight intent extraction layer |
| #9727 | zerocode sidebar for multi-agent monitoring | Medium — epic in progress; #9728 subtask landed |
| #9109 | Native Hailo-Ollama provider support | Low — niche provider, depends on upstream contract stability |
| #9223 | JUnit XML test report format | Low-Medium — CI utility, no user-facing impact |

The **Chat Completions profile** (#8603) and **Goal mode** (#8303) are the two highest-impact roadmap signals. If accepted, they would significantly expand ZeroClaw's client ecosystem and agent capabilities respectively.

## 7. User Feedback Summary

- **Cost sensitivity:** #9631 highlights that OpenRouter prompt caching is unutilized, causing unnecessarily high per-conversation costs — a practical pain point for power users.
- **Multi-agent UX gap:** #9727 and #9728 reveal that users running several agents simultaneously lack side-by-side monitoring in zerocode, forcing session replacement instead of parallel visibility.
- **Security visibility:** #9769 shows operators need the `vi_verify` withheld-capability notice to surface even when log persistence is off — trust but verify.
- **Channel reliability:** Silent message drops on WhatsApp (#6350, now closed) and Signal (#9774) erode operator trust; users expect explicit errors, not silent failures.
- **Config consistency:** #9652 (closed) and #9770 (open) reflect frustration with config CLI inconsistencies — users expect `set`, `list`, and `get` to behave uniformly.
- **Daemon lifecycle:** #9697 and #9768 indicate Windows Task Scheduler and macOS launchd integration needs polishing; the SIGUSR1/reload confusion is a documentation or implementation gap.

## 8. Backlog Watch

| Issue | Why It Needs Attention |
|---|---|
| #8303 | Goal mode RFC — blocked on maintainer review; high architectural impact |
| #8603 | Chat Completions profile — blocks third-party client adoption; needs acceptance decision |
| #7155 | Shell confirmation tier — security-critical; revision 3 submitted, awaiting ratification |
| #7141 | Pluggable auth / canonical principals — identity milestone dependency; Rev 8 pending |
| #9487 | Runtime-owned sessions & transport adapters — design ratification deferred (#8692) |
| #8642 | MCP tool-schema RSS unbounded growth — P1 memory leak, no fix PR yet |
| #9770 | `cron update` discards declarative changes — data-loss bug, no fix PR |
| #9775 | OpenRouter streaming drops `provider_extra` — S1, newly filed, no fix PR |
| #9774 | Signal channel drops `sourceUuid` senders — S1, newly filed, no fix PR |
| #9768 | SIGUSR1 reload / degraded-security warning contradiction — S2, operator-confusing |

**Overall project health:** Active development with strong community RFC participation. Security hardening is a clear priority. The main concern is the imbalance between open PRs (49) and merged/closed (1) — the review pipeline is saturated. Two new S1 bugs filed today should be triaged urgently. The v0.8.5 stabilization line provides a natural shipping cadence through August 30.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*