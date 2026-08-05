# OpenClaw Ecosystem Digest 2026-08-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-05 05:56 UTC

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

OpenClaw continues to operate at very high engagement, with 500 issues and 500 PRs updated in the last 24 hours. The project shows no new releases today but is actively churning maintenance and bugfix PRs across multiple subsystems (memory, gateway, channels, plugins, security). The community and maintainers are focused on stabilizing session-state correctness, subagent lifecycle integrity, and migration reliability following the 2026.7.2 release. Overall health indicators point to a mature but intensity-phase project — heavy bug throughput signals active post-release triage rather than design stagnation.

## 2. Releases

**No new releases today.**

The most recent stable release is **2026.7.2 (b4f01af)**, which introduced several migration-schema changes (v14 → v15/v16) that are currently causing startup failures for some operators (see #119263, #112395). A beta tag `2026.7.2-beta.7` was also referenced in the gateway CPU-saturation issue (#118846).

## 3. Project Progress

**Merged / Closed PRs today:**

- **[#119498](https://github.com/openclaw/openclaw/pull/119498)** (Closed) — QA smoke tests now prevented from passing on mocked providers, closing a validation gap in Anthropic auth and OpenAI web-search scenarios.
- **[#119494](https://github.com/openclaw/openclaw/pull/119494)** (Closed) — QA test infrastructure now cleans up leaked Gateway/plugin runtime directories after startup failures.

**Key open PRs advancing today:**

- **[#119507](https://github.com/openclaw/openclaw/pull/119507)** — Fix for memory-file-watcher dirty-flag logic; ensures `openclaw memory status` reflects actual on-disk vs indexed count drift (#119411).
- **[#119464](https://github.com/openclaw/openclaw/pull/119464)** — Fixes tool-search dotted-target argument preservation for nested provider schemas (Copilot Gemini `args.path`, `args.command`).
- **[#119467](https://github.com/openclaw/openclaw/pull/119467)** — Calibrates web-readability nesting-depth cap to prevent unbounded HTML parsing on deeply-nested pages.
- **[#119271](https://github.com/openclaw/openclaw/pull/119271)** — Addresses the P1 migration blocker (#119263) by installing v15 session additions before the v14 canonical index repair runs.
- **[#119369](https://github.com/openclaw/openclaw/pull/119369)** — Prevents `chat.metadata` RPC from blocking concurrent gateway calls, addressing main-thread saturation (#118846).
- **[#119476](https://github.com/openclaw/openclaw/pull/119476)** / **[#119477](https://github.com/openclaw/openclaw/pull/119477)** — Security hardening: introduces `allowAmbientProviderKeys` flag and subsystem-scoped API key names (`OPENAI_TTS_API_KEY`, etc.) with opt-in enforcement.
- **[#119504](https://github.com/openclaw/openclaw/pull/119504)** — Adds guarded plugin replacement transaction (`openclaw plugins replace-guarded`) with SQLite trust-anchored rollback.
- **[#119319](https://github.com/openclaw/openclaw/pull/119319)** — Migrates MCP dependency to 2.0 split packages with stateless support (addresses #119294).

## 4. Community Hot Topics

**Most-commented open issues (by engagement):**

| Rank | Issue | Comments | Core Concern |
|------|-------|----------|--------------|
| 1 | [#116201](https://github.com/openclaw/openclaw/issues/116201) — Realtime voice unbounded provider/consult state | 59 | Resource limits in voice sessions |
| 2 | [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost | 23 | Subagent lifecycle reliability |
| 3 | [#48788](https://github.com/openclaw/openclaw/issues/48788) — Centralized filename encoding utility | 20 | Multi-encoding Content-Disposition handling across channel adapters |
| 4 | [#118846](https://github.com/openclaw/openclaw/issues/118846) — Gateway main thread saturated at boot | 15 | Plugin-metadata snapshot + fs statting starving accept loop |
| 5 | [#115908](https://github.com/openclaw/openclaw/issues/115908) — Session transcript projection livelock | 12 | Sustained writes causing synchronous event-loop stall |
| 6 | [#117956](https://github.com/openclaw/openclaw/issues/117956) — claude-cli API-usage leakage despite env scrubbing | 10 | ~13.7M tokens billed erroneously in one day (security/financial) |

**Underlying needs:** The community is consistently surfacing **reliability gaps in async session and subagent lifecycle management**, **gateway scalability under concurrent load**, and **security/financial integrity around API-key scoping and billing**. The filename-encoding issue (#48788) reflects a broader need for robust i18n support in channel adapters (Feishu, etc.).

## 5. Bugs & Stability

**P0 — Release/blocker severity:**

- **[#119263](https://github.com/openclaw/openclaw/issues/119263)** — Agent DB v14→v15 migration fails with `no such column: entry_valid`; gateway refuses to start. **Fix PR: [#119271](https://github.com/openclaw/openclaw/pull/119271)** (in review).
- **[#112395](https://github.com/openclaw/openclaw/issues/112395)** — Startup migration preflight blocks gateway after upgrade from 6.11→7.1; migration tables empty.
- **[#119090 / #119260](https://github.com/openclaw/openclaw/issues/119090)** — Managed outgoing media deletion proceeds even when session store is unreadable, causing data loss. **Fix PR: [#119260](https://github.com/openclaw/openclaw/pull/119260)**.

**P1 — High severity:**

- **[#116201](https://github.com/openclaw/openclaw/issues/116201)** — Realtime voice sessions retain unbounded provider/consult state, risking memory leaks under bursty behavior.
- **[#118846](https://github.com/openclaw/openclaw/issues/118846)** — Gateway main thread pegged at 100% from boot due to plugin-metadata snapshotting; RPC accept loop starved. **Fix PR: [#119369](https://github.com/openclaw/openclaw/pull/119369)**.
- **[#115908](https://github.com/openclaw/openclaw/issues/115908)** — Session transcript projection livelocks under sustained write load, stalling all channel transports.
- **[#119411](https://github.com/openclaw/openclaw/issues/119411)** — Memory file watcher never reindexes; `memory status` reports stale `Dirty: no`. **Fix PR: [#119507](https://github.com/openclaw/openclaw/pull/119507)**.
- **[#111498](https://github.com/openclaw/openclaw/issues/111498)** — Main agent blocked by persistent workspace-state migration after Anthropic auth recovery (regression).
- **[#103804](https://github.com/openclaw/openclaw/issues/103804)** — `service-env` generator double-quotes values, breaking AWS_REGION hostname resolution.
- **[#107873](https://github.com/openclaw/openclaw/issues/107873)** — Embedded prompt-lock session takeover aborts WebChat turns after tool failure instead of retrying.
- **[#115700](https://github.com/openclaw/openclaw/issues/115700)** — `chat.send` rejected with "thread switched branches" after model completes; stale `expectedLeafEntryId`.
- **[#118018](https://github.com/openclaw/openclaw/issues/118018)** — Stale subagent completion delivered into replaced requester lifecycle.
- **[#118489](https://github.com/openclaw/openclaw/issues/118489)** — Failed-tool finalization skipped after prior tool presentation or stale lifecycle state.

**P2 — Medium severity (selected):**

- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — Subagent completion silently lost on timeout without retry/notification.
- **[#67777](https://github.com/openclaw/openclaw/issues/67777)** — Subagent completion delivery lost on direct-announce timeout, drain, or orphan prune.
- **[#91363](https://github.com/openclaw/openclaw/issues/91363)** — Isolated cron consistently fails with "LLM request failed" at model-call-started phase.
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — Unreaped hook/tool child processes accumulate as zombies, degrading runtime.
- **[#116116](https://github.com/openclaw/openclaw/issues/116116)** — Anthropic `catalog.json` schema violation + unguarded cost deref crashes all `openclaw models` CLI commands.
- **[#108265](https://github.com/openclaw/openclaw/issues/108265)** — Feishu streaming mode causes extremely slow frontend rendering post-v2026.7.1 upgrade.
- **[#116010](https://github.com/openclaw/openclaw/issues/116010)** — All persistent sessions capped at 128k context regardless of model or config.
- **[#117609](https://github.com/openclaw/openclaw/issues/117609)** — Transient LLM/socket errors retried for channels but not for embedded-assistant stage.
- **[#95610](https://github.com/openclaw/openclaw/issues/95610)** — OpenAI prompt-cache prefix churn defeats automatic prefix caching.

**Regressions flagged:** #111498, #107873, #97616, #77733, #116116, #108265 — all items where prior versions behaved correctly.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Comments | Likelihood for Next Release |
|---------|-------|----------|----------------------------|
| YAML config-file support | [#45758](https://github.com/openclaw/openclaw/issues/45758) | 9 | Medium — low risk, high UX gain |
| MathJax/LaTeX in Control UI | [#42840](https://github.com/openclaw/openclaw/issues/42840) | 9 👍10 | Medium — rendering-layer change |
| Self-hosted STT/TTS in WebChat | [#45508](https://github.com/openclaw/openclaw/issues/45508) | 7 | Low — requires webchat architecture change |
| Centralized filename encoding | [#48788](https://github.com/openclaw/openclaw/issues/48788) | 20 | High — cross-cutting i18n need |
| Heading-aware chunking + entity extraction for memory | [#44395](https://github.com/openclaw/openclaw/issues/44395) | 6 | Medium — improves memory search relevance |
| Content-based prompt injection scanning on tool output | [#79168](https://github.com/openclaw/openclaw/issues/79168) | 6 | High — security hardening priority |
| Command inventory (`openclaw tools commands list/inspect`) | [#100960](https://github.com/openclaw/openclaw/pull/100960) | — | In progress (PR open) |
| Execution-scoped plugin turn yielding | [#118570](https://github.com/openclaw/openclaw/pull/118570) | — | In progress (PR open) |
| Guarded plugin replacement transaction | [#119504](https://github.com/openclaw/openclaw/pull/119504) | — | In progress (PR open) |
| Tailscale identity integration into user profiles | [#119479](https://github.com/openclaw/openclaw/pull/119479) | — | In progress (PR open) |

**Notable momentum:** The project is actively advancing security hardening (#119476, #119477), plugin ecosystem tooling (#119504, #118570), and observability (#100960). The MCP 2.0 migration (#119319) is also a significant infrastructure upgrade.

## 7. User Feedback Summary

**Pain points expressed:**

- **Silent data/session loss** is the dominant frustration. Users report subagent completions disappearing (#44925, #67777, #118018), cron jobs failing without explanation (#91363), and Telegram progress duplicating commentary (#116512). The sentiment is that failures should be **visible and actionable**, not silently swallowed.
- **API billing integrity** is a serious concern. The claude-cli leakage of ~13.7M tokens in one day despite env scrubbing (#117956) erodes trust. Users want guarantees that configured key-scrubbing actually prevents unauthorized spend.
- **Session migration pain** after upgrades (v6→v7, v14→v15) is causing operational outages. Operators upgrading in production are seeing gateways refuse to start, with empty migration tables and missing columns.
- **Streaming and rendering performance** on Feishu (#108265) and WebChat (#118560) is degrading after upgrades, directly impacting end-user experience.
- **Context-cap inconsistencies** (#116010) — users expect their configured contextTokens to be respected but see a hard 128k ceiling regardless of model tier.

**Satisfaction signals:** The MathJax feature request has 10 upvotes (#42840), indicating strong demand for better formula rendering. The command-inventory feature (#100960) is widely requested by operators seeking better CLI discoverability.

## 8. Backlog Watch

**Items needing maintainer attention (stale or unresolved >30 days):**

| Issue | Age | Priority | Blocker? |
|-------|-----|----------|----------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost | ~5 months | P1 | Yes — core reliability |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) — Subagent completion delivery loss | ~4 months | P1 | Yes — same root cause area |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) — Intermittent `memory_search` index-metadata missing | ~2 months | P1 | Yes — affects memory tooling |
| [#54463](https://github.com/openclaw/openclaw/issues/54463) — QMD memory indexing recurses into symlink loops | ~5 months | P2 | No — robustness |
| [#58139](https://github.com/openclaw/openclaw/issues/58139) — memory-lancedb fails on Windows Docker bind mount | ~5 months | P2 | No — platform-specific |
| [#77733](https://github.com/openclaw/openclaw/issues/77733) — `/new` and `/reset` no longer trigger persona greeting | ~3 months | P2 | Regression |
| [#45573](https://github.com/openclaw/openclaw/issues/45573) — Group chat sessions not persisted | ~5 months | P2 | Data-loss |
| [#90595](https://github.com/openclaw/openclaw/issues/90595) — Cron "failed" notifications during hot reload | ~2 months | P2 | Alert fatigue |

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — Personal AI Agent Ecosystem
**Date:** 2026-08-05 | **Projects Tracked:** 13

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape in August 2026 is characterized by a dominant cluster of "Claw"-branded projects (OpenClaw, PicoClaw, NanoClaw, NullClaw, IronClaw, ZeptoClaw, ZeroClaw, TinyClaw) competing in the gateway/session/extension layer, alongside distinct architectures in NanoBot (modular WebUI-first), Hermes Agent (multi-profile daemon), CoPaw/QwenPaw (Qwen-native with desktop focus), and LobsterAI (enterprise channel integration). Development intensity spans from extreme (OpenClaw at 500+ daily PRs/issues) to dormant (TinyClaw, ZeptoClaw, Moltis), with a clear bifurcation between projects in post-release stabilization (OpenClaw, IronClaw v1.1-rc) and those actively shipping features (Hermes, CoPaw beta). Security and session-state reliability have emerged as the defining cross-cutting concerns across all active projects.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Merged (24h) | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | None (v2026.7.2) | ~20+ bugfix PRs | 🟡 Intensity-phase (post-release triage) |
| **IronClaw** | 50 | 50 | v1.1.0-rc.1 (2 days ago) | 25 | 🟡 Caution (v1.1 regressions unfixed) |
| **CoPaw** | 28 | 47 | v2.1.0-beta.1 | 22 | 🟡 Critical desktop regressions |
| **ZeroClaw** | 38 | 50 | None | 0 | 🔴 Merge bottleneck + P0 security |
| **Hermes Agent** | 50 | 50 | None (v0.18→0.20) | ~10 | 🟢 Strong (rapid triage, campaign) |
| **NanoBot** | 4 | 20 | None | 16 | 🟢 Good (but P1 security open) |
| **LobsterAI** | 1 | 14 | None (release/2026.8.3 merged) | 11 | 🟢 Good |
| **PicoClaw** | 3 | 4 | None | 2 | 🟡 Moderate (backlog growing) |
| **NanoClaw** | 0 | 5 | None | 1 | 🟡 Low-moderate (Discord bug critical) |
| **NullClaw** | 0 | 1 | None | 0 | 🔴 Dormant |
| **TinyClaw** | 0 | 0 | None | 0 | 🔴 Inactive |
| **ZeptoClaw** | 0 | 0 | None | 0 | 🔴 Inactive |
| **Moltis** | 0 | 1 (dependabot) | None | 0 | 🔴 Maintenance-only |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of engagement:** OpenClaw processes 10–100× more issues and PRs daily than any peer, indicating the largest and most active user base in the ecosystem. This creates strong network effects: more bug reporters, more PR contributors, and faster identification of edge cases.
- **Maturity of subsystems:** With v14→v15/v16 migration schema work, subagent lifecycle management, MCP 2.0 split-package migration, and guarded plugin replacement transactions all in flight, OpenClaw has the most comprehensive architectural surface — spanning gateway, memory, channels, plugins, and security hardening simultaneously.
- **Security-hardening velocity:** The introduction of `allowAmbientProviderKeys` flags, subsystem-scoped API keys (`OPENAI_TTS_API_KEY`), and content-based prompt injection scanning shows OpenClaw is addressing security at multiple layers in a single release cycle, a depth no other project matches.

**Technical Approach Differences:**
- Unlike IronClaw's radical Rust monorepo restructure (Reborn waves) or Hermes Agent's profile-scoped `ContextVar` runtime, OpenClaw takes an **incremental hardening approach** — fixing migration schemas, tightening tool-search argument preservation, and adding SQLite trust-anchored rollback for plugins without architectural breaks.
- ZeroClaw pursues a parallel security-hardening strategy but is stalled at the PR review stage (0 merges despite 50 open PRs), while OpenClaw is actively merging fixes.
- CoPaw's Qwen-native desktop approach and NanoBot's WebUI-first philosophy represent divergent UX strategies; OpenClaw remains channel-agnostic with plugin extensibility as the primary extension model.

**Community Size:** OpenClaw's community is an order of magnitude larger than any peer. The top-commented issue (#116201) has 59 comments vs. IronClaw's 15 and CoPaw's 13, and OpenClaw's issue #44925 (subagent completion loss) has been open ~5 months with 23 comments — indicating deep, sustained user investment.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Session-state reliability** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw | Subagent lifecycle integrity, profile-switching message loss, hydration-state correctness, cross-conversation memory persistence |
| **Security hardening / key scoping** | OpenClaw, NanoBot, ZeroClaw, CoPaw | API-key leakage prevention (NanoBot P1 #4784), per-agent ownership scoping (ZeroClaw P0 #9646/#9647), content-based injection scanning, OAuth resilience |
| **Channel parity for security flows** | CoPaw, OpenClaw, Hermes Agent | Approval workflows visible in all channels (console, WeChat, Telegram), not just WebUI |
| **Gateway / process lifecycle** | OpenClaw, Hermes Agent, IronClaw | Gateway thread saturation (#118846), Windows double-spawn (#79087), desktop backend self-reaping, launchd restart survivability |
| **MCP ecosystem integration** | OpenClaw, NanoClaw, PicoClaw, IronClaw | MCP 2.0 migration, nested tool failure surfacing, plugin resilience on connection failure, MCP apps host support |
| **Scheduling / cron reliability** | OpenClaw, CoPaw, NanoClaw | Cron job failure notifications, timezone-aware scheduling, pause/resume state persistence |
| **Web UI performance** | CoPaw, PicoClaw, NanoBot, LobsterAI | Input lag with long history (#3281), optimistic rendering ordering (#7192), context-window size caps (#116010) |
| **Prompt cache observability** | PicoClaw, ZeroClaw, OpenClaw | Token-level cache metrics, cost transparency, session-ID propagation for cache savings (#9631) |
| **Multi-provider / multi-model** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw | Provider key scoping, rate-limit handling (#6674), model capability probing accuracy (#6687), interleaved thinking regressions (#75725) |
| **Migration / upgrade reliability** | OpenClaw, IronClaw, CoPaw | DB schema migration failures (OpenClaw v14→v15), lossless upgrade paths, desktop env isolation |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | Hermes Agent | CoPaw/QwenPaw | NanoBot | ZeroClaw | LobsterAI |
|---|---|---|---|---|---|---|---|
| **Core architecture** | Gateway + plugin system, channel-agnostic | Rust monorepo (Reborn), typed ExtensionId | Multi-profile daemon with ContextVar scoping | Qwen-native, desktop-first | WebUI-first, modular | WASM plugins, security-first RFCs | Electron desktop, enterprise channels |
| **Target users** | Operators, self-hosters, multi-channel power users | Production deployments, enterprise | Multi-tenant operators, Telegram-heavy users | Chinese-market users, desktop power users | WebUI-centric contributors, channel integrators | Security-conscious operators, multi-agent | Enterprise team deployments (NIM) |
| **Extension model** | Plugins (guarded transactions, SQLite rollback) | Skills + MCP + IronHub | Skills + MCP + end-turn contracts | Skills + App Center | Tool-based with metasearch providers | WASM plugins with wall-clock deadlines | Channel adapters (Dial/SMS/voice in progress) |
| **Differentiator** | Sheer scale + migration complexity management | Reborn architectural clarity + error recoverability goal | Telegram Bot API 10.2 parity campaign | Desktop stability + GPT-5.6 prompt caching | Vite dev mode + trusted proxy auth | P0 security RFCs + per-execution confirmation tiers | Startup credit campaign + dependency modernization |
| **Risk profile** | Post-release migration pain (v14→v15) | v1.1.0-rc.1 blockers (memory, skills, migration) | Profile-scoping transition side-effects | Critical desktop regressions (Python env, Playwright) | P1 API key leakage unpatched | P0 session/KB ownership gaps | NIM super-group bug stale 4 months |

---

## 6. Community Momentum & Maturity

**Tier 1 — High Velocity, Active Iteration:**
- **OpenClaw** — 500 issues/PRs daily. Post-release stabilization mode with heavy bug throughput. Maturity signal: migration-schema complexity and subagent lifecycle issues indicate a system that has outgrown its initial design and is undergoing painful but necessary scaling corrections.
- **Hermes Agent** — 50/50 with rapid triage (5 issues closed in one day). The Telegram campaign (#78791) with 20+ sub-features tracked systematically signals a project with clear roadmap discipline and active contributor base.
- **CoPaw** — 28 issues/47 PRs with strong community contribution rate (multiple community-merged PRs). Critical beta regressions suggest a project moving faster than its QA can validate — typical of rapid iteration cycles.

**Tier 2 — Moderate Velocity, Directional Focus:**
- **IronClaw** — 50/50 but concentrated on a single architectural effort (Reborn waves). The v1.1.0-rc.1 release with unfixed memory and skill bugs indicates the team is prioritizing structural work over user-facing polish.
- **NanoBot** — 20 PRs with 16 merged, strong WebUI polish wave. The P1 security issue open for 30 days is a concerning gap but the overall contribution pipeline is healthy.
- **LobsterAI** — 14 PRs, 11 merged. Dependency modernization (React 19, Electron 43, Vite 8) is the dominant effort. A mature maintenance rhythm with clear feature direction (credit campaign).

**Tier 3 — Low Velocity, Emerging or Stalled:**
- **PicoClaw** — 3 issues/4 PRs. Two merged fixes but growing backlog (MCP hang #3269, WebUI lag #3281). Moderate-project trap: enough activity to stay relevant, not enough to clear backlog.
- **NanoClaw** — 0 issues/5 PRs. Critical Discord bug (approval always rejects) with open fix PR. Low issue volume may indicate a smaller user base rather than stability.
- **ZeroClaw** — 38 issues/50 PRs but **0 merged**. This is a review bottleneck, not inactivity. The P0 security bugs and heavy RFC activity suggest a project in serious design phase.

**Tier 4 — Dormant:**
- **NullClaw, TinyClaw, ZeptoClaw, Moltis** — Minimal to zero activity. Moltis runs only Dependabot. These projects are in maintenance or abandonment mode.

---

## 7. Trend Signals

**1. Security hardening is the defining frontier.** Every major project is surfacing security concerns: OpenClaw's scoped API keys and prompt injection scanning, NanoBot's unpatched P1 key-leakage, ZeroClaw's three P0 bugs (webhook auth, session ownership, knowledge graph attribution), and CoPaw's OneBot security hardening. **For AI agent developers:** Zero-trust session scoping and per-provider key isolation are table stakes — the market will penalize projects that ship multi-tenant or multi-provider without strict boundaries.

**2. Session-state and lifecycle reliability are the #1 user pain point.** Across OpenClaw (subagent loss #44925, #67777, #118018), Hermes Agent (session-switch message loss #79050, profile activation #57757), CoPaw (cron state #6690, memory flush #6624), and IronClaw (cross-conversation memory #7185), users consistently report silent data/session loss as the dominant frustration. **For developers:** Visibility into failure states and explicit retry/notification mechanisms are not feature requests — they are reliability requirements.

**3. Channel parity for security-critical flows is an emerging gap.** CoPaw's approval-flow blindness in console/WeChat (#6655, #6695) and OpenClaw's subagent lifecycle gaps both reflect a pattern: security and approval mechanisms are designed for WebUI first, then retrofitted to channels. **For developers:** Design approval and confirmation flows at the agent core, not per-channel.

**4. Prompt caching observability is becoming table stakes.** PicoClaw (#3251, #3317), ZeroClaw (#9631), and OpenClaw (cost leakage #117956) all show operators demanding token-level cost visibility and cache-hits attribution. **For developers:** Build cost observability into the provider adapter layer from day one — it's a trust signal.

**5. Multi-profile and per-session runtime scoping is the next architectural paradigm.** Hermes Agent's `ContextVar`-backed profile scoping (#78030), IronClaw's typed `ExtensionId`, and ZeroClaw's per-agent session ownership (#9487) all converge on the same insight: single-process, single-context agent runtimes are insufficient for production. **For developers:** Plan for per-profile, per-session, per-tenant runtime isolation as a foundational architecture decision.

**6. The "claw" ecosystem is consolidating around gateway + plugin architectures.** Seven of thirteen tracked projects share the "Claw" naming and pursue gateway/plugin models. This suggests a dominant architectural pattern is emerging — a central gateway managing channel adapters, tool plugins, and session state, with extensibility as the primary differentiator. **For developers:** Building on or contributing to the gateway/plugin paradigm offers the highest ecosystem leverage.

**7. Dependency modernization is a quiet but significant risk vector.** LobsterAI's React 18→19, Vite 5→8, Electron 40→43 migration and CoPaw's v2.1.0b1 critical regressions both show that major dependency jumps and beta releases can introduce breaking changes that cascade across the stack. **For developers:** Budget for integration testing after any major dependency bump — the cost of undetected regressions far exceeds the cost of staged rollouts.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-05

## 1. Today's Overview

NanoBot exhibited high merge throughput today with **16 of 20 PRs closed**, concentrated heavily around WebUI polish, Telegram channel fixes, and session-scope refactoring. No new releases were published, and all four open issues remain unresolved. The project's health is strong on the execution side — contributors are actively shipping — but the security vulnerability in Issue #4784 (API key leakage via `os.environ` mutation) remains open and unaddressed, warranting attention.

---

## 2. Releases

**None.** No new versions were published today.

---

## 3. Project Progress

### Merged / Closed PRs Today

| PR | Author | Summary |
|----|--------|---------|
| [#5250](https://github.com/HKUDS/nanobot/pull/5250) | chengyongru | Fix: feathered activity pane edge clipping in WebUI |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | chengyongru | Refactor: WebUI visual consistency overhaul (elevation system, flattened layouts, timezone detection) |
| [#5245](https://github.com/HKUDS/nanobot/pull/5245) | chengyongru | Fix: align timestamp tooltip styles across WebUI |
| [#5244](https://github.com/HKUDS/nanobot/pull/5244) | chengyongru | Fix: render markdown in prompt rail previews |
| [#5243](https://github.com/HKUDS/nanobot/pull/5243) | chengyongru | Fix: align automation metadata with timestamps in WebUI |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) | chengyongru | Fix: reject malformed slash commands instead of forwarding to LLM |
| [#5241](https://github.com/HKUDS/nanobot/pull/5241) | chengyongru | Fix: refine inline token highlights with accent color |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | Re-bin | Refactor: unify floating controls (menus, popovers, combobox semantics) |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | chengyongru | **Feat:** Add integrated Vite dev mode (`nanobot webui --dev`) with HMR |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | chengyongru | **Refactor:** Remove request-scoped access grants (`Tool.available()`, `SessionAccessScope`) |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | goodtiding5 | **Feat (OPEN):** Integrate mst-python as metasearch provider |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | santhreal | Fix: WeCom filename sanitization fallback when name strips to empty |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | santhreal | Fix: Telegram fenced code blocks with special chars in language tags (`c++`, `html+django`) |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | concertypin | **Feat (SECURITY/P1):** Trusted proxy bootstrap auth for `/webui/bootstrap` |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | goodtiding5 | **Feat:** Mattermost group policy for threads vs. main channels |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) | aoliaoduo | Fix: Add missing `group_mode` field to TelegramConfig schema (open since March) |

**Key advances:**
- **WebUI maturity** — a substantial visual and behavioral refactor by chengyongru (9 merged PRs today) brought consistency, developer ergonomics (Vite dev mode), and input validation to the foreground.
- **Session simplification** — PR #5238 removed the request-scoped access grant abstraction, consolidating tool availability to construction-time switches.
- **Telegram reliability** — two bug fixes (code fencing, `group_mode` schema) and one long-pending PR merged after 5 months.

---

## 4. Community Hot Topics

| Item | Type | Author | Activity |
|------|------|--------|----------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Issue | hamb1y | Created 2026-07-06 · Updated 2026-08-04 · 2 comments |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Issue | yuklcool | Created 2026-08-05 · 0 comments |
| [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Issue | orrinwitt | Created 2026-08-04 · 0 comments |
| [#5246](https://github.com/HKUDS/nanobot/issues/5246) | Issue | whisperity | Created 2026-08-04 · 0 comments |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | PR (OPEN) | nolanchic | Created 2026-07-14 · 0 comments |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | PR (OPEN) | QQQ300kuai | Created 2026-07-29 · 0 comments |

**Analysis:**

- **#4784** is the most discussed open issue (2 comments) and the most serious item on the board — a cross-provider API key leakage vector via `os.environ` mutation. It has been open for a month with no merged fix.
- **#5251** (MCP Apps host support in WebUI) reflects growing user interest in extending the MCP ecosystem beyond tools/resources into the UI layer — a strategic feature request.
- **#4919** (custom Telegram Bot API base URL) and **#5156** (stalled polling recovery) are both open PRs with no recent maintainer engagement, suggesting community-driven contributions are stalling for review.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **P1 — Security** | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Provider API keys leaked between providers via global `os.environ` mutation | ❌ No fix PR |
| **P2 — Channel** | [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Matrix bot does not auto-join on room invite (Continuwuity rejects empty POST body) | ✅ PR [#5248](https://github.com/HKUDS/nanobot/pull/5248) open, not yet merged |
| **P2 — Channel** | [#5222](https://github.com/HKUDS/nanobot/pull/5222) | Telegram fenced code blocks corrupted for language tags with special chars (`c++`, `html+django`) | ✅ Merged |
| **P2 — Channel** | [#5223](https://github.com/HKUDS/nanobot/pull/5223) | WeCom media download crashes when filename sanitization strips everything | ✅ Merged |
| **P2 — Telegram** | [#5156](https://github.com/HKUDS/nanobot/pull/5156) | Telegram polling stalls silently after transient network blips | ⏳ Open PR, not merged |
| **P2 — WebUI** | [#5242](https://github.com/HKUDS/nanobot/pull/5242) | Malformed slash commands previously forwarded to LLM instead of being rejected | ✅ Merged |
| **P2 — WebUI** | [#5250](https://github.com/HKUDS/nanobot/pull/5250) | Activity pane feather/clip rendering artifacts | ✅ Merged |
| **P1 — Session** | [#5238](https://github.com/HKUDS/nanobot/pull/5238) | Request-scoped access grants were an over-complicated abstraction | ✅ Merged (refactor) |

**Notable:** The P1 security issue (#4784) remains the most critical unaddressed item. The Matrix Continuwity compatibility fix (#5248) has an open PR but hasn't been merged yet.

---

## 6. Feature Requests & Roadmap Signals

| Item | Type | Summary | Likelihood for Next Release |
|------|------|---------|----------------------------|
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Enhancement | MCP Apps host support in WebUI — render in-app MCP server UIs | 🟡 Medium — novel area, needs design |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Feature (OPEN PR) | mst-python metasearch provider — RRF-merged multi-engine web search | 🟢 High — PR is ready, pending review |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Feature (OPEN PR) | Custom Telegram Bot API base URL + extra headers for self-hosted gateways | 🟡 Medium — needs maintainer review |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | Feature (CLOSED/CONFLICT) | Quick Chat & Temporary Chat in WebUI | 🟡 Medium — closed with conflicts, may need rebase |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | Feature (CLOSED) | Integrated Vite dev mode for WebUI contributors | ✅ Already merged — will ship |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | Feature (CLOSED) | Trusted proxy bootstrap auth for `/webui/bootstrap` | ✅ Already merged — will ship |

**Signal:** The project is clearly investing in WebUI developer ergonomics (Vite dev mode, trusted proxy auth) and expanding its provider/channel surface (mst-python search, Mattermost threading). MCP Apps support is an emerging community demand.

---

## 7. User Feedback Summary

- **Security concern (P1):** Users are sensitive to API key isolation across providers. Issue #4784 highlights a real leak path that could affect multi-provider deployments — this will erode trust if left unresolved.
- **Telegram reliability:** Two separate Telegram-channel bug reports (stalled polling #5156, code fencing #5222) and a long-pending schema gap (#1776, open since March) indicate the Telegram integration needs sustained maintenance attention.
- **WebUI quality:** The wave of WebUI refinements today (9 merged PRs) suggests strong user engagement with the frontend and a healthy contribution pipeline from chengyongru and Re-bin.
- **Self-hosted deployment needs:** Custom Telegram API base URL (#4919) and trusted proxy auth (#5210, now merged) both reflect a user base operating behind corporate proxies, cloudflare tunnels, and self-hosted gateways — a growing segment.
- **MCP evolution:** Issue #5251 signals that users see MCP as expanding beyond tool calling into full app hosting, and they want that reflected in the WebUI.

---

## 8. Backlog Watch

| Item | Age | Priority | Risk |
|------|-----|----------|------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) — API key leakage via `os.environ` | ~30 days | **P1 Security** | 🔴 High — unpatched security vulnerability |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) — Custom Telegram Bot API base URL | ~22 days | P2 | 🟡 Medium — feature PR awaiting review |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) — Telegram stalled polling recovery | ~7 days | P2 | 🟡 Medium — fix PR open, not merged |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) — Matrix Continuwity POST body fix | ~1 day | P2 | 🟢 Low — recent PR, may merge soon |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) — mst-python metasearch provider | ~2 days | P1 | 🟢 Low — feature PR, pending review |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) — Quick Chat & Temporary Chat | ~6 days | P2 | 🟡 Medium — closed with conflicts, needs rebase |

**Recommendation:** The top priority for maintainers is addressing **#4784** — a month-old security issue with no fix PR. Secondarily, #4919 and #5156 are community-contributed Telegram fixes that have been open for over a week without review, potentially slowing adoption among self-hosted and enterprise users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-05

---

## 1. Today's Overview

Hermes Agent is experiencing **very high daily activity**, with 50 issues and 50 PRs touched in the last 24 hours, though no new releases were published. The project shows a strong focus on platform stability (Desktop process lifecycle, gateway session auth) and a major Telegram feature-completion campaign led by contributor `andrexibiza`. Several critical bugs were resolved today, while a cluster of new security, configuration-scoping, and delivery-path fixes landed. Overall project health is robust: active contributor engagement, rapid triage, and clear prioritization of session-state and security-boundary risks.

---

## 2. Releases

**No new releases were published today.** The latest relevant version referenced in issues is **v0.18.0** (issue #57757) and the upcoming **v0.20.0** (issue #79050).

---

## 3. Project Progress

### Merged / Closed Today

| PR | Summary |
|---|---|
| [#79115](https://github.com/NousResearch/hermes-agent/issues/79115) | Prevents headless `hermes serve` containers from spawning duplicate per-profile gateway services during reconcile. |
| [#79114](https://github.com/NousResearch/hermes-agent/issues/79114) | Fixes numeric sorting of Kimi model IDs prefixed with `k`/`K` (e.g., `k3` now sorts ahead of `k2.6`). |
| [#79091](https://github.com/NousResearch/hermes-agent/issues/79091) | Closed intermittent `APIConnectionError` with custom providers (issue-level investigation complete). |
| [#79113](https://github.com/NousResearch/hermes-agent/issues/79113) | Resolved `gateway.profile_routes` leaving `HERMES_HOME` on the secondary adapter owner in multiplex mode. |
| [#79050](https://github.com/NousResearch/hermes-agent/issues/79050) | Fixed session-switch message-loss regression in v0.20.0 hydrate path. |
| [#78030](https://github.com/NousResearch/hermes-agent/issues/78030) | Scoped execution state per profile via `ContextVar`-backed routed-profile runtime context. |

### Open PRs Advancing

- **#79117** — Extends profile-scoped terminal config to multiplexed gateway (builds on #78030).
- **#79116** — Polishes Buzz coordinator transport (final-answer-first conversations, DM preservation).
- **#79099** — Surfaces nested MCP tool failures instead of masking them as success.
- **#79097** — Redacts current Mem0 API keys (`m0-...` prefix) in logs and tool output.
- **#79112** — Enables desktop backend self-reaping when its parent process dies.
- **#79111** — Ensures full gateway fleet restarts on macOS after `hermes update`.
- **#79109** — Retries and logs unflushed-message persistence failures before TUI teardown discards them.

---

## 4. Community Hot Topics

| Issue | Activity | Focus |
|---|---|---|
| [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) — Telegram Feature Parity & Alignment Campaign (meta-issue) | 4 comments | Umbrella tracking 20+ Telegram API gaps against Bot API 10.2. |
| [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) — MiniMax-M3 interleaved thinking stops after first tool-call turn | 5 comments | Provider-specific regression in `/anthropic` endpoint tool-use handling. |
| [#55498](https://github.com/NousResearch/hermes-agent/issues/55498) — Dashboard BasicAuthProvider crashes on `/auth/login` | 4 comments, 1 👍 | `NotImplementedError` when binding dashboard to non-loopback with basic auth. |

**Analysis:** The Telegram campaign dominates community attention — contributors are systematically closing feature gaps across inline mode, payments, games, passport, reply keyboards, and bot identity. The MiniMax-M3 tool-call regression and the Dashboard auth crash both reflect pain around **provider reliability and self-hosted deployment**, suggesting these are top-tier stability concerns for power users.

---

## 5. Bugs & Stability

| Rank | Issue | Severity | Description | Fix PR |
|---|---|---|---|---|
| 🔴 | [#79087](https://github.com/NousResearch/hermes-agent/issues/79087) | **P2** | Windows Desktop spawns **two** backend processes per boot (venv + uv), causing GIL stalls and gateway ready-frame starvation. | — |
| 🔴 | [#79050](https://github.com/NousResearch/hermes-agent/issues/79050) | **P2** | Session switch loses completed-turn messages on v0.20.0 (hydrate path overwrites local pending with stale store data). | ✅ Closed |
| 🟠 | [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) | **P3** | Telegram Bot API 10.2 parity — 20+ missing features across billing, identity, and message delivery. | Ongoing (see #4) |
| 🟠 | [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) | **P3** | MiniMax-M3 interleaved thinking halts after first tool-call turn on `/anthropic` endpoint. | — |
| 🟡 | [#55498](https://github.com/NousResearch/hermes-agent/issues/55498) | **P2** | Dashboard `BasicAuthProvider` crashes with `NotImplementedError` on `/auth/login` (OAuth redirect flow mismatch). | ✅ Closed |
| 🟡 | [#76245](https://github.com/NousResearch/hermes-agent/issues/76245) | **P3** | Desktop backend not reliably killed on quit — stray `hermes serve` orphans. | ✅ PR #79112 |
| 🟡 | [#61457](https://github.com/NousResearch/hermes-agent/issues/61457) | **P3** | Remote gateway session cookie never persists after basic-auth login — immediate 401 loop. | — |
| 🟡 | [#57757](https://github.com/NousResearch/hermes-agent/issues/57757) | **P3** | Desktop always activates Default profile on startup, ignoring `is_active` from API. | — |
| 🟡 | [#79113](https://github.com/NousResearch/hermes-agent/issues/79113) | **P3** | `profile_routes` leaves `HERMES_HOME` on secondary adapter owner in multiplex mode. | ✅ Closed |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood (Next 1–2 Releases) |
|---|---|---|
| **Telegram Bot API 10.2 full parity** — inline mode, payments/Stars, games, passport, reply/inline keyboards, bot identity, business account management | #78791 (meta) + 18 sub-issues | **High** — systematic campaign with dedicated contributor. |
| **End-turn plugin tool contract** | PR #20713 (open) | **Medium** — enables terminal tool batches; still needs maintainer decision. |
| **Native Ollama `/api/chat` adapter** | PR #73285 (open) | **Medium** — supersedes prior #55606; addresses `num_ctx` and tool-calling gaps. |
| **Multi-profile terminal config scoping** | PR #79117 (open, follows #78030) | **High** — directly follows merged #78030; unblocks multiplexed deployments. |
| **MCP nested failure surfacing** | PR #79099 (open) | **High** — closes a real debuggability gap for MCP-powered tool users. |
| **Launchd restart survivability** | PR #72752 (open) | **Medium** — macOS-specific; blocks production Daemon deployments. |

---

## 7. User Feedback Summary

**Pain Points:**
- **Process lifecycle** on Desktop (Windows double-spawn, Linux orphaning, macOS incomplete fleet restart) is the most frequent complaint, with 3+ related issues today.
- **Session-state loss** during profile switching and hydrate cycles continues to frustrate power users (issues #79050, #61457, #57757).
- **Provider inconsistencies** — MiniMax-M3 silent thinking-stop and custom-provider intermittent `APIConnectionError` (#79091) erode trust in multi-provider setups.
- **Self-hosted auth** remains fragile: Dashboard basic-auth crashes and session-cookie non-persistence suggest auth flows need unification.

**Satisfaction Signals:**
- Rapid triage and closure of bugs (5 issues closed today) reflects healthy maintainer responsiveness.
- The Telegram campaign shows strong community investment and provides a clear, trackable roadmap for platform parity.
- The profile-scoped runtime context (#78030) and its follow-up (#79117) demonstrate architectural investment that will benefit multi-tenant and multiplex deployments.

---

## 8. Backlog Watch

| Issue / PR | Age | Concern |
|---|---|---|
| [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) — MiniMax-M3 interleaved thinking | ~5 days | Provider regression with no assigned fix; affects tool-use workflows. |
| [#61457](https://github.com/NousResearch/hermes-agent/issues/61457) — Remote gateway session cookie persistence | ~27 days | Self-hosted auth users hit a 401 loop with no resolution. |
| [#57757](https://github.com/NousResearch/hermes-agent/issues/57757) — Desktop always activates Default profile | ~33 days | Profile-persistence bug affecting multi-profile Desktop users. |
| [#72752](https://github.com/NousResearch/hermes-agent/issues/72752) — launchd restart survivability | ~9 days | Production macOS Daemon deployments at risk. |
| [#20713](https://github.com/NousResearch/hermes-agent/issues/20713) — End-turn plugin tool contract | ~61 days | Architectural feature still awaiting maintainer decision. |
| [#73285](https://github.com/NousResearch/hermes-agent/issues/73285) — Native Ollama `/api/chat` adapter | ~8 days | Blocks local-Ollama users from proper `num_ctx` and tool-calling. |
| [#53544](https://github.com/NousResearch/hermes-agent/issues/53544) — Recover undelivered tool-call content | ~70 days | Core delivery-path gap for `interim_assistant_messages: false` configs. |
| [#25119](https://github.com/NousResearch/hermes-agent/issues/25119) — Preserve queued follow-up media delivery | ~84 days | Media attachments silently dropped in queued message resends. |

**Recommendation:** The backlog is dominated by session-state, auth, and message-delivery issues that share a common root — the transition to per-profile runtime scoping. Maintainers should prioritize closing the remaining auth/session issues (#61457, #57757) alongside the profile-scoping work, as these are likely fixable within the same architectural change.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-05

## 1. Today's Overview

PicoClaw shows moderate development activity with 3 issues and 4 pull requests updated in the last 24 hours. Two PRs were merged/closed today (#3280 for OAuth login resilience and #3251 for Anthropic prompt cache token tracking), indicating progress on auth stability and observability. Two new open PRs were filed today (#3299 adding native Exa web search, #3317 logging cache tokens in debug output), signaling community interest in search expansion and cost transparency. No new releases were published. Overall, the project is in a steady state with bug fixes and feature additions moving in parallel.

## 2. Releases

No new releases published in the last 24 hours.

## 3. Project Progress

**Merged/Closed PRs:**

- **[PR #3280](https://github.com/sipeed/picoclaw/pull/3280)** — *fix(auth): make browser OAuth login survive real-world callback conditions* (merged/closed). Addresses four independent causes of OAuth flow failure on headless/remote setups where the authorization code is burned after user consent but before the callback is captured. This is a meaningful reliability improvement for remote and CI/CD deployments.
- **[PR #3251](https://github.com/sipeed/picoclaw/pull/3251)** — *fix(providers): capture the prompt cache token usage in Anthropic providers* (merged/closed). Ensures Anthropic SDK and Messages API providers expose cache-related token metrics, enabling operators to verify prompt caching is active and monitor costs accurately.

**Open PRs:**

- **[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** — *Add native Exa web search provider*. Introduces Exa as a first-class `tools.web` provider with `POST /search`, `type: "auto"`, highlight support, date-range filters, and config-driven API key auth.
- **[PR #3317](https://github.com/sipeed/picoclaw/pull/3317)** — *feat(providers): log prompt cache tokens in LLM response debug output*. Extends the gateway debug log to surface cache metadata (e.g., `cached_prompt_tokens`) alongside standard token counts, improving observability for providers like DeepSeek via Cloudflare AI Gateway.

## 4. Community Hot Topics

- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)** — *Web UI chat input lag with long history* (3 comments, 1 👍). Users report significant input lag in the web UI when a session has accumulated chat history. This points to a frontend performance bottleneck — likely excessive DOM re-rendering or unbounded state growth per session. High relevance to daily users.
- **[Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)** — *MCP server connection failure hangs agent loop* (3 comments, 1 👍). A critical reliability issue where a failed MCP server connection causes the entire agent loop to hang, silencing the chat interface. This affects production-like deployments and has no open fix PR yet.
- **[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** — *Native Exa web search provider* (0 comments). Community-driven request for a dedicated Exa provider, reflecting demand beyond the existing search backends. Suggests users want broader web search coverage with Exa's semantic search capabilities.

**Analysis:** The dominant community needs are **Web UI performance** (Issue #3281) and **MCP resilience** (Issue #3269). Both are systemic issues that affect reliability at scale rather than edge-case bugs.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection failure causes agent loop to hang; chat interface stops responding entirely | None yet |
| **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input becomes very laggy with moderate chat history | None yet |
| **Medium** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android app cannot launch service; path cannot be changed from settings (stale, closed) | Closed as stale |

**Note:** Issue #3269 is the most critical open bug — a single MCP failure taking down the entire chat UX. No fix PR has been filed. Issue #3281 impacts power users with long sessions but does not cause crashes. Issue #3182 (Android) was closed as stale with no resolution.

## 6. Feature Requests & Roadmap Signals

- **[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** — Native Exa web search provider. Strong roadmap signal that the project is expanding its tooling ecosystem beyond existing providers. If merged, Exa would join the `tools.web` family alongside current search backends.
- **[PR #3317](https://github.com/sipeed/picoclaw/pull/3317)** — Prompt cache token visibility in debug logs. Reflects growing operator demand for cost transparency, especially as caching becomes a standard feature across Anthropic, DeepSeek, and other providers. Likely to be merged given alignment with PR #3251 (already merged).
- **Predicted next release focus:** Anticipated improvements in **auth reliability** (following PR #3280), **observability/cost tracking** (PRs #3251 and #3317), and **search provider coverage** (PR #3299). Web UI performance (Issue #3281) and MCP resilience (Issue #3269) are also strong candidates for the next iteration if addressed.

## 7. User Feedback Summary

- **Pain points:**
  - Web UI input lag with long histories (#3281) — users are hitting a practical ceiling on session length in the browser.
  - MCP failures are fatal to the chat experience (#3269) — users expect graceful degradation when a tool server is unavailable.
  - Android app instability (#3182) — mobile users report launch and path configuration issues; the stale closure suggests low priority for mobile support.
  - Hidden prompt cache costs — users cannot verify whether caching is actually working without the fixes in PRs #3251 and #3317.
- **Satisfaction signals:** The merged OAuth fix (#3280) and Anthropic cache metrics (#3251) directly address frequently raised operational concerns, indicating the maintainers are responsive to power-user feedback. The volume of open bug issues (2 active, 1 stale) relative to merged PRs (2) suggests a slight backlog in bug resolution.

## 8. Backlog Watch

| Item | Age | Risk |
|------|-----|------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP hang on connection failure | ~16 days open | **High** — no fix PR; affects production reliability |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI input lag | ~15 days open | **Medium** — no fix PR; impacts UX at scale |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) — Android service launch failure | Closed as stale (no fix) | **Low** — stale, but mobile support gap remains unaddressed |
| [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) — Exa search provider | 10 days open, 0 comments | **Low** — unreviewed feature PR; may need maintainer triage |

**Recommendation:** Issues #3269 and #3281 warrant maintainer attention in the near term. The MCP hang is a correctness issue with no workaround, and the Web UI lag affects a broad user base. PR #3299 would benefit from an initial review or comment to signal community interest.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-05

## 1. Today's Overview

NanoClaw shows moderate development activity on 2026-08-04/05 with five pull requests updated in the last 24 hours and zero issues or releases. The project is in a steady integration phase: one PR was merged/closed today (PR #3154), while four remain open awaiting review or CI. No new issues were reported, indicating stable day-to-day operations. The dominant theme across today's activity is the expansion of communication channel support (Dial/SMS/voice) and a critical Discord approval bug fix.

---

## 2. Releases

No new releases were published during this reporting period. The project has not shipped a new version since the last cycle.

---

## 3. Project Progress

**Merged/Closed Today:**

- **PR #3154** — *fix(agent-runner): give scheduled tasks current run time* (Author: Koshkoshinsk)
  - **What advanced:** Scheduled tasks now receive their `time` from the effective scheduled occurrence (`process_after`) rather than the creation timestamp, with creation time retained as a fallback for legacy rows. A new task-only `current_time` field is generated when the task reaches the agent, including weekday information and using the configured agent-group timezone. This improves scheduling accuracy for recurring/deferred agent tasks.
  - 🔗 [PR #3154](https://github.com/nanocoai/nanoclaw/pull/3154)

---

## 4. Community Hot Topics

| PR | Author | Topic | Status |
|---|---|---|---|
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | OmriBenShoham | Dial channel adapter (SMS + AI voice calls) | Open |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | OmriBenShoham | Add Dial to channel picker + wizard/skills (runChannelSkill model) | Open |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | zvi-fried | Refactor: add host seams for skill-owned capabilities | Open |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | omerh | Fix Discord webhook custom_id parsing | Open |

**Analysis:** The most prominent community focus is on **multi-channel voice/SMS integration** via the Dial adapter. PRs #3041 and #3050 are clearly paired — one implements the channel adapter itself, the other wires it into the user-facing channel picker and skill model. This signals a deliberate roadmap push toward phone-based interaction channels, moving NanoClaw beyond chat-only integrations. The Discord fix (#3185) is a high-severity bug affecting a popular channel and is likely to draw reviewer attention quickly.

---

## 5. Bugs & Stability

### Critical

- **Discord approval buttons always resolve as "Reject"** — [PR #3185](https://github.com/nanocoai/nanoclaw/pull/3185) (Author: omerh)
  - **Severity:** Critical — every `ask_question` / approval card on Discord incorrectly resolves to rejection, even when the user clicks Approve. The bug is in the raw HTTP-interaction (webhook) path of the Chat SDK bridge, caused by improper decoding of the `custom_id` field (split on `:` strips newlines).
  - **Fix PR:** PR #3185 is open and addresses the issue. Awaiting merge.
  - **Impact:** Any Discord deployment using approval/question flows is functionally broken.

No other bugs were reported via issues today.

---

## 6. Feature Requests & Roadmap Signals

- **Dial / SMS / AI Voice Channel** — PRs #3041 and #3050 strongly signal that the next major feature release will include voice and SMS support through a Dial integration. The paired PRs (adapter + picker/wizard/model) suggest the feature is nearing completion and may ship as a **Feature skill** per the project's contribution model.
- **Skill-owned capability refactoring** — PR #3186 (zvi-fried) adds "host seams" to decouple skill-owned capabilities from their host runtime. This suggests a roadmap direction toward more modular, self-contained skills that can run across different host environments.
- **Scheduled task time resolution** — PR #3154 (merged) shows active improvement to the agent runner's scheduling precision, likely part of a broader reliability effort.

**Prediction:** The next release will likely highlight Dial channel support and the refactored skill architecture.

---

## 7. User Feedback Summary

- **Discord approval broken (high pain):** PR #3185's description makes clear that Discord users cannot approve agent requests — a blocker for any team using NanoClaw for moderated approval workflows on Discord.
- **Demand for voice/SMS channels:** The sustained effort on the Dial adapter (PRs #3041, #3050) by the same author suggests strong community or product demand for telephony integration, potentially driven by enterprise use cases needing SMS or AI voice notifications/reminders.
- **Scheduling reliability:** PR #3154 addresses legacy task-time resolution, implying prior user reports of scheduled tasks firing at creation time rather than their intended run time.

No negative user feedback was captured via issues this cycle.

---

## 8. Backlog Watch

| PR/Issue | Author | Days Open | Concern |
|---|---|---|---|
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) — Dial channel adapter | OmriBenShoham | ~22 days | Core feature PR open since 2026-07-14; paired with #3050. Needs maintainer review to unblock the Dial feature. |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — Dial picker/wizard integration | OmriBenShoham | ~22 days | Blocked on #3041 or awaiting parallel review. Long-open feature PRs may need a nudge. |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) — Host seams refactor | zvi-fried | ~1 day | Recently opened; less concern but warrants early review. |
| [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) — Discord approval fix | omerh | ~1 day | High-severity bug; should be prioritized for fast-track review and merge. |

**Action items for maintainers:**
1. Prioritize review of **PR #3185** (Discord bug fix) — it affects production correctness.
2. Review the paired **Dial PRs (#3041, #3050)** which have been open for ~3 weeks and represent a significant feature rollout.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-08-05

## 1. Today's Overview

NullClaw shows **low daily activity** as of 2026-08-05, with zero issues opened, closed, or updated in the last 24 hours and no new releases. The sole activity signal is one open pull request (#981) proposing a new `grok-cli` provider for xAI's Grok CLI. The project appears to be in a quiet maintenance phase rather than an active development sprint, with no merged PRs or closed issues today.

## 2. Releases

No new releases were published in the last 24 hours. There is currently no version to detail.

## 3. Project Progress

- **Merged/Closed PRs today:** None
- **Open PRs:** 1

The only active development effort is **PR #981** — *feat(provider): add grok-cli provider for xAI Grok CLI* ([github.com/nullclaw/nullclaw/pull/981](https://github.com/nullclaw/nullclaw/pull/981)). This PR follows the established spawn-per-request pattern used by existing providers such as `codex-cli`, `gemini-cli`, and `claude-cli`. If merged, it would expand NullClaw's provider ecosystem to support xAI's Grok CLI as an optional integration.

## 4. Community Hot Topics

No issues or PRs generated comments or reactions today. The most notable ongoing item remains:

- **PR #981** — *Add grok-cli provider for xAI Grok CLI* ([link](https://github.com/nullclaw/nullclaw/pull/981))
  - **Underlying need:** Users are seeking first-class support for xAI's Grok through its official CLI, continuing a clear community trend toward local/CLI-based provider integrations. The repeated pattern of similar PRs (codex-cli, gemini-cli, claude-cli) indicates the contributor base values extensibility and local execution models.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were filed today. No stability issues are indicated in the current data.

## 6. Feature Requests & Roadmap Signals

- **PR #981 (grok-cli provider)** signals strong community interest in adding xAI/Grok as a supported provider. If merged, this would be a logical addition alongside the existing CLI-based providers. Its optional nature — requiring the `grok` CLI to be installed and authenticated locally — aligns with NullClaw's established design philosophy.

## 7. User Feedback Summary

No new user feedback was recorded today. The absence of issues and low PR activity suggests either a stable contributor base with no pressing complaints, or a slowdown in community engagement. No satisfaction or dissatisfaction signals are available for this reporting period.

## 8. Backlog Watch

- **PR #981** has been open since **2026-07-29** with no merged or closed status as of 2026-08-04. While not critically long, it warrants maintainer review to determine if the grok-cli integration aligns with the project's current roadmap and to avoid PR stagnation.

---

*Data sourced from github.com/nullclaw/nullclaw. Digest generated 2026-08-05.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-05

## 1. Today's Overview

IronClaw is in an active development phase heading toward the **v1.1.0 release candidate**, with the v1.1.0-rc.1 tag published on 2026-08-03. The project shows **high overall velocity**: 50 issues and 50 PRs were updated in the last 24 hours, with 13 issues closed and 25 PRs merged/closed. The dominant theme is the **Reborn restructure** (Waves WS0–WS6), a large architectural consolidation effort led by @BenKurrek that is steadily reducing exceptions and narrowing crate boundaries. Several foundational reliability bugs were surfaced today, including memory cross-conversation persistence and skill install discovery gaps.

## 2. Releases

### ironclaw-v1.1.0-rc.1 (2026-08-03)
**First release candidate since 1.0.0.** Headline additions:

- **Extension reach**: register arbitrary hosted MCP servers; install from IronHub deep links
- **Durable file attachments** that cross channel boundaries
- **Slack `/ironclaw` slash commands**
- Broad pass on **making failures legible** for the model

**API-breaking changes** (via PR #5598):
- `ironclaw_common`: 0.4.2 → 0.5.0 (⚠ breaking)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (⚠ breaking)

**Migration note**: Upgrade from v1.0.0-rc.1 → v1.1.0-rc.1 is **not currently lossless** automatically; tracked in issue [#7178](https://github.com/nearai/ironclaw/issues/7178).

## 3. Project Progress

**Major PRs merged/closed today:**

| PR | Summary |
|----|---------|
| [#7181](https://github.com/nearai/ironclaw/pull/7181) | Waves 0–4 batch 2: adapter-registry move, ruled decisions (merged with zero conflicts) |
| [#7189](https://github.com/nearai/ironclaw/pull/7189) | WS2: cleared extension_host → product residue (auth/conversations vocabulary, free functions) |
| [#7190](https://github.com/nearai/ironclaw/pull/7190) | WS6: evicted policy cluster from composition, severed product→loop_host |
| [#7187](https://github.com/nearai/ironclaw/pull/7187) | WS6: RebornRuntime slimming, typed ExtensionId, domain cleanups |
| [#7186](https://github.com/nearai/ironclaw/pull/7186) | WS6: evicted service cluster from composition |
| [#7179](https://github.com/nearai/ironclaw/pull/7179) | WS6 module charters: MCP 2,767-line lib.rs split, auth two-engine, webui |
| [#7175](https://github.com/nearai/ironclaw/pull/7175) | WS3 closeout: `LAYER_MATRIX_EXCEPTIONS` reduced to empty (1 → 0) |
| [#7174](https://github.com/nearai/ironclaw/pull/7174) | WS5: moved adapter_registry parsing to its contracts/registry owners |
| [#7172](https://github.com/nearai/ironclaw/pull/7172) | WS4/WS6: triggered/hooks SQL ADRs + identity binding-store convergence |
| [#7157](https://github.com/nearai/ironclaw/pull/7157) | Explicit channel delivery tool — two-lane model (notification + lifecycle) |
| [#6970](https://github.com/nearai/ironclaw/pull/6970) | Docs upgraded for IronClaw V1, Reborn terminology removed from public docs |
| [#6965](https://github.com/nearai/ironclaw/pull/6965) | IronHub documentation added (3 pages) |

**In progress:**
- [#7202](https://github.com/nearai/ironclaw/pull/7202) — WS2: inverting channel_host's product-stack behind D-A factory port (stacked, not yet merged)
- [#7152](https://github.com/nearai/ironclaw/pull/7152) — WS6: executing 13 renames, closing remaining Wave 4 rows
- [#7029](https://github.com/nearai/ironclaw/pull/7029) — fix(product): restore durable delivery claim

## 4. Community Hot Topics

| Issue | Topic | Comments | Link |
|-------|-------|----------|------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Error-recoverability endgame — model recovers from 100% of errors | 15 | [link](https://github.com/nearai/ironclaw/issues/6284) |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Hermetic capability & journey testing platform epic | 4 | [link](https://github.com/nearai/ironclaw/issues/6524) |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) | Clippy failure on main for new package set | 4 | [link](https://github.com/nearai/ironclaw/issues/7119) |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | Instance deletion fails, "Loading your agents…" stuck | 3 | [link](https://github.com/nearai/ironclaw/issues/6752) |
| [#7145](https://github.com/nearai/ironclaw/issues/7145) | WS2 extension_host → loops re-layer sizing | 3 | [link](https://github.com/nearai/ironclaw/issues/7145) |
| [#7194](https://github.com/nearai/ironclaw/issues/7194) | Slack shared channel as outbound delivery target | 2 | [link](https://github.com/nearai/ironclaw/issues/7194) |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) | Manual "run-now" fire across automation surface | 2 | [link](https://github.com/nearai/ironclaw/issues/7193) |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | Reliable Skill Discovery, Routing, and Activation epic | 2 | [link](https://github.com/nearai/ironclaw/issues/6565) |

**Underlying needs:**
- The top-commented issue (#6284) signals a **core reliability priority**: the model must not only survive errors but see them with causal context and get a turn to act. This is foundational for production trust.
- The testing epic (#6524) reflects a **coverage gap** — the team needs mechanical assurance that every capability has deterministic test coverage.
- Skill-related issues (#6565, #6941, #7168) indicate **skills are a key differentiator** but current discovery/activation is unreliable.

## 5. Bugs & Stability

### Confirmed bugs reported or updated today:

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| 🔴 High | [#6752](https://github.com/nearai/ironclaw/issues/6752) | Instance deletion hangs on re-login — "Loading your agents…" stuck | None yet |
| 🔴 High | [#7185](https://github.com/nearai/ironclaw/issues/7185) | Memory not reliably recalled across conversations | None yet |
| 🟠 Medium | [#7168](https://github.com/nearai/ironclaw/issues/7168) | Agent-installed skills invisible — `skill_install` writes where discovery doesn't read | None yet |
| 🟠 Medium | [#7192](https://github.com/nearai/ironclaw/issues/7192) | WebUI optimistic user messages render below agent output (out-of-order) | None yet |
| 🟠 Medium | [#7191](https://github.com/nearai/ironclaw/issues/7191) | `builtin.time` lacks relative-offset arithmetic; opaque `input_error()` | None yet |
| 🟡 Low | [#7119](https://github.com/nearai/ironclaw/issues/7119) | `cargo clippy` fails on main for new package set `{ironclaw, ironclaw_reborn_config}` | None yet |
| 🟡 Low | [#7103](https://github.com/nearai/ironclaw/issues/7103) | Latency-trace field computed even when tracing is off | Filed, no fix yet |

**Stability assessment:** The project has **multiple medium-to-high severity user-facing bugs** that remain unfixed. Memory cross-conversation persistence (#7185) and skill visibility (#7168) are particularly concerning for a v1.1 release. The v1.1.0-rc.1 migration is also not yet lossless (#7178).

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood for v1.1 |
|-------|---------|---------------------|
| [#7194](https://github.com/nearai/ironclaw/issues/7194) | Slack shared channel as outbound delivery target | Likely — scope is extensions, aligns with rc.1 "extension reach" theme |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) | Manual "run-now" fire for automations across all surfaces | Possible — explicitly requested from model, WebUI, and product surface |
| [#7177](https://github.com/nearai/ironclaw/issues/7177) | Schema-aware ranked search for deferred tool retrieval | Possible — improves skill/tool selection, fits Reborn scope |
| [#7203](https://github.com/nearai/ironclaw/issues/7203) | Expose virtual filesystem as real mount for skill execution | Future — architectural change, likely post-v1.1 |
| [#7105](https://github.com/nearai/ironclaw/issues/7105) | Dedicated identity/session and payments service | Long-term — suggests org-scale deployment needs |
| [#7183](https://github.com/nearai/ironclaw/issues/7183) | Per-user LLM model selection (currently admin-only) | Possible — raised by Champions program feedback |

**Roadmap signal:** The v1.1.0 focus is clearly on **extensibility** (MCP servers, IronHub, channels) and **architectural clarity** (Reborn waves). The skill ecosystem (#6565, #6941) is a major strategic priority that is not yet stable.

## 7. User Feedback Summary

**Pain points from Champions program (2026-07-23 check-in, relayed by @sergeiest):**

- **Memory loss across conversations** (#7185): Multiple testers independently reported that context established in one conversation is not available in subsequent ones. A legal user (Devon) specifically noted the agent lacks access to previously established information.
- **Model selection rigidity** (#7183): Users cannot choose their own LLM model; it is admin-controlled only. Jeremy Koch (marketing) flagged this as a limitation.
- **Web scraping unreliability** (#7180): Michael Kelly (builder ops) reported hit-or-miss data retrieval — some sources succeed, others fail with no clear pattern. The agent sometimes uses `http` tool instead of `web_search`.
- **Skill value proof** (#7199, @PostChairmanLock): Building FaceSeek revealed that the hard part isn't making tools — it's **proving a selected tool helped** after paying the selection cost. Suggested separate logging for "candidate existed but wasn't chosen" vs "chosen and changed the answer."

**Satisfaction signals:** The IronHub integration (#6731) and extension ecosystem are generating positive interest. Documentation improvements (#6970, #6965) are addressing user onboarding friction.

## 8. Backlog Watch

| Issue | Concern | Age | Priority |
|-------|---------|-----|----------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Error-recoverability endgame (15 comments) | 17 days | **P0** — blocks production trust |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | Reliable Skill Discovery, Routing, Activation epic | 44 days | **P0** — core product differentiator |
| [#6941](https://github.com/nearai/ironclaw/issues/6941) | Skills the model can self-create/find/choose/use | 36 days | **P1** — subset of #6565 |
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | Memory not recalled across conversations | 1 day | **P1** — user-reported, no fix |
| [#7168](https://github.com/nearai/ironclaw/issues/7168) | Agent-installed skills invisible | 1 day | **P1** — blocks skill workflow |
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | Instance deletion hangs | 9 days | **P1** — user-reported, no fix |
| [#7178](https://github.com/nearai/ironclaw/issues/7178) | v1.0.0-rc.1 → v1.1.0-rc.1 migration not lossless | 1 day | **P1** — blocks upgrade path |
| [#3773](https://github.com/nearai/ironclaw/issues/3773) | Target Crate Architecture epic | 78 days | **P1** — structural, ongoing |
| [#6731](https://github.com/nearai/ironclaw/issues/6731) | IronHub integration | 9 days | **P2** — in progress |

**Overall project health:** 🟡 **Caution.** Development velocity is strong (25 PRs closed in 24h, architectural restructuring progressing well), but **multiple user-facing bugs remain unfixed** ahead of a release candidate. The Reborn restructure

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-08-05

---

## 1. Today's Overview

LobsterAI is showing active development velocity today with 14 PRs updated (3 open, 11 merged/closed) and 1 open issue. The dominant focus is the `release/2026.8.3` branch landing into main, along with a cluster of features around the new **startup credit campaign** and polished first-run login experience. Dependabot has been actively bumping core dependencies (React, Vite, Electron, cross-env), signaling a maturing maintenance rhythm. Overall project health appears strong — steady merge flow, no new releases announced yet, and bug activity is minimal.

---

## 2. Releases

**No new releases published today.** However, PR [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) merged `release/2026.8.3` into `main`, indicating the next release is imminent. Anticipated highlights (from PR #2430 summary):

- Native credit-reward activities (startup credit campaign)
- Streamlined first-run login experience
- Artifact auto-preview user control
- Improved model-error handling
- Windows installer reliability improvements

---

## 3. Project Progress

### Merged / Closed PRs Today

| PR | Author | Summary |
|---|---|---|
| [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) | fisherdaddy | Merge `release/2026.8.3` into `main` |
| [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433) | btc69m979y-dotcom | Polish startup credit campaign experience (crop poster, add failure messaging, refresh binding on retry) |
| [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) | btc69m979y-dotcom | Disable final reward auto-popup; keep manual claim flow intact |
| [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) | btc69m979y-dotcom | Complete startup credit campaign analytics (full URL reporting, error messages, auth IPC contract) |
| [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | btc69m979y-dotcom | Bundle startup credit campaign artwork locally in the desktop client |
| [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) | fisherdaddy | Optimize login page |
| [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) | liuzhq1986 | Fix rlog 202683 |
| [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) | liuzhq1986 | Fix rlog 202683 |

**Open PRs:**

| PR | Author | Summary |
|---|---|---|
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | bunnysayzz | **Feature:** Permanent setting to hide sidebar ad banner (addresses #2342) |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | dependabot[bot] | Bump Electron group (40.2.1 → 43.2.0) |

---

## 4. Community Hot Topics

### Most Discussed Issue

- **[Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200)** — *NIM super-group @mention returns raw ID instead of group name*
  - **Status:** Open, stale
  - **Comments:** 1 · 👍: 0
  - **Underlying need:** Users in Netease NIM super-groups (超大群) experience broken @-mention resolution — the bot shows a raw group ID instead of the real group name. This is a UX-critical bug for teams relying on LobsterAI as a group bot, but has seen no maintainer response in over 4 months.

### Most Active PR Today

- **[PR #2430](https://github.com/netease-youdao/LobsterAI/pull/2430)** — Release 2026.8.3 merge, the single highest-impact PR of the day, gating multiple campaign and stability fixes.
- **[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)** — User-requested ad-banner hide toggle, still open with no recent maintainer comment since Aug 4. Reflects community desire for ad-free desktop experience.

---

## 5. Bugs & Stability

| Severity | Item | Details | Fix PR? |
|---|---|---|---|
| **Medium** | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | `teamTypeNum` hardcoded incorrectly in `nimGateway.ts:917` — causes super-group and normal-group name resolution to fail for @-mentions. A fix PR (#1201) exists but is **open and stale**, never merged. | ✅ PR #1201 (open, stale) |

No new crash reports or regressions logged today. The one outstanding bug (#1200) has a ready fix but remains unmerged — a stability concern for NIM super-group users.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Analysis |
|---|---|---|
| **Permanent sidebar ad banner toggle** | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) (open) | Direct user request (#2342). The PR is complete but not merged. Likely candidate for inclusion in the next patch release given community demand. |
| **Startup credit campaign** | [PRs #2427, #2428, #2432, #2433](https://github.com/netease-youdao/LobsterAI/pull/2427) | Fully shipped in 2026.8.3. Bundled artwork, analytics tracking, manual-only reward claim, and polished UI. |
| **Dependency modernization** | [PRs #1279–#1281](https://github.com/netease-youdao/LobsterAI/pull/1279), [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | React 18→19, Vite 5→8, Electron 40→43, cross-env 7→10. Major version jumps suggest an upcoming upgrade cycle; breaking changes should be noted in release notes. |
| **Artifact auto-preview control** | Mentioned in [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) | New user-facing toggle coming in 2026.8.3. |

**Prediction:** The next release will focus on dependency migration fallout (React 19 / Vite 8 compatibility) and possibly merging PR #2374 (ad banner toggle) if user pressure continues.

---

## 7. User Feedback Summary

- **Pain point — NIM group name display:** Users in super-groups (@-mention in 超大群) see raw IDs instead of group names, breaking conversational flow. ([#1200](https://github.com/netease-youdao/LobsterAI/issues/1200))
- **Pain point — sidebar ads:** Users want a permanent way to hide the ad banner; current dismiss-only behavior is insufficient. ([PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374), refs [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342))
- **Satisfaction — Campaign UX:** The startup credit campaign has received thoughtful polish (local artwork, manual claim, analytics coverage), suggesting a positive reception from early users.
- **Satisfaction — Login experience:** PR #2429 optimizes the login page, and PR #2428 adds robust error reporting for unauthenticated campaign claims, indicating responsiveness to first-run friction.

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|---|---|---|---|
| **[Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200) + [PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201)** | ~4 months | **High** | One-line fix ready but stale; NIM super-group users permanently affected. |
| **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** (Electron 40→43) | ~4 months | **Medium** | Dependabot PR open; Electron major bump may carry breaking changes needing validation. |
| **[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)** (hide sidebar ads) | ~15 days | **Low–Medium** | Recently opened by user; no maintainer response yet. Growing community ask. |
| **[PR #1279–#1281](https://github.com/netease-youdao/LobsterAI/pull/1279)** (cross-env, react-dom, vite bumps) | ~4 months | **Medium** | All closed but dependency migration fallout (React 19, Vite 8) may still need integration testing. |

---

**Overall Health Assessment:** 🟢 **Good.** Active merge flow, clear feature direction (credit campaign, dependency upgrades), but the stale NIM bug fix and unmerged ad-toggle request deserve maintainer attention. The Electron 43 and React 19 migrations are the most significant technical risk to monitor in the coming weeks.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-08-05

## 1. Today's Overview

The Moltis project shows minimal daily activity as of 2026-08-05, with no new issues opened and no issues closed in the last 24 hours. The only incoming activity is a single Dependabot-driven dependency update PR targeting the `undici` package in the `/website` directory. No new releases were published today, and there are no open issues requiring attention. Overall, the project appears to be in a low-activity maintenance phase, with routine automated upkeep as the sole visible progress.

## 2. Releases

No new releases were published today. The project has no recent version updates to report.

## 3. Project Progress

**Merged/Closed PRs:** 0

The only PR updated in the last 24 hours remains open:

- **[PR #1184](https://github.com/moltis-org/moltis/pull/1184)** — `chore(deps-dev): bump undici from 7.28.0 to 7.29.0` in `/website` (npm_and_yarn group). Submitted by Dependabot on 2026-08-04. No feature work or bug fixes landed today.

## 4. Community Hot Topics

No issues or PRs attracted comments or reactions today. There are no active community discussions to highlight. The absence of user engagement on open items may indicate a quiet period or a need for the maintainers to re-engage the community on outstanding items.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were filed today. The `undici` bump to 7.29.0 may implicitly address security or stability concerns in the dependency, but no specific bug reports reference this.

## 6. Feature Requests & Roadmap Signals

No feature requests or roadmap-related discussions were posted today. The lack of new requests makes it difficult to infer near-term roadmap direction from community activity alone.

## 7. User Feedback Summary

No user feedback was collected today. The project currently has zero open issues and zero comment activity, providing no observable signal on user satisfaction, pain points, or use cases at this time.

## 8. Backlog Watch

With zero open issues, there is no backlog of unanswered or stale items to flag. However, the single open PR (#1184) has been pending since 2026-08-04 with no maintainer review activity yet, which is worth monitoring to ensure routine dependency updates are not stalled.

---

*Digest generated from GitHub data sourced via Moltis project analytics. Report date: 2026-08-05.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw Project Digest — 2026-08-05

## 1. Today's Overview

CoPaw (QwenPaw) shows strong daily activity with **28 issues** and **47 PRs** updated in the last 24 hours, indicating a highly active development cycle ahead of the v2.1.0 release. 12 issues were closed and 22 PRs merged/closed today, reflecting a healthy resolution rate. No new formal releases were published today, though the v2.1.0-beta.1 release duty issue (#6656) was addressed. The project is in a focused stabilization phase, with significant effort directed at bug fixes, channel reliability, and desktop stability.

## 2. Releases

**No new releases today.** The most recent release activity centers on **v2.1.0-beta.1**, whose release verification issue (#6656) was updated/closed today. This beta introduced desktop improvements but also surfaced regressions (see Bugs & Stability).

## 3. Project Progress

**Merged/Closed PRs today:**

- **PR #6691** — Fixed cron `pause`/`resume` state persistence; enabled state now correctly written to job storage instead of being lost on restart.
- **PR #6688** — Fixed plugin namespace isolation bug (#6683) where bare absolute imports in plugins conflicted with QwenPaw's internal `utils` package.
- **PR #6676** — Hardened OneBot channel security: `ws_host` now defaults to `127.0.0.1` and token authentication is required when exposed.
- **PR #6692** — Stopped logging raw conversation command arguments at INFO level; added regression coverage for `/compact` hint redaction.
- **PR #6657** — Closed: sandbox constraint reporting now surfaces backend-enforced limits instead of silently ignoring them.
- **PR #6673** — Closed: fixed frontend conversation window display issue in v2.1.0b1.

**Key open PRs advancing today:**

- **PR #6704** — New *session fork* feature: snapshot conversation context into a new independent session (relates to #6560).
- **PR #6689** — Added shared retry contract for channel startup failures with exponential backoff (5s–60s cap), targeting Matrix and similar channels.
- **PR #6564** — Fixes memory middleware gap where pending turns were not flushed before compression (#6555).
- **PR #6669** — Stabilizes Chrome native messaging and Windows restore locking for the desktop app.

## 4. Community Hot Topics

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #6649 | GPT-5.6 prompt caching support | 13 | https://github.com/agentscope-ai/QwenPaw/issues/6649 |
| #6655 | Console channel doesn't render approval prompts | 12 | https://github.com/agentscope-ai/QwenPaw/issues/6655 |
| #6643 | Task artifacts organization (per-task directories) | 6 | https://github.com/agentscope-ai/QwenPaw/issues/6643 |
| #6667 | DeepSeek thinking mode fails in multi-turn | 5 | https://github.com/agentscope-ai/QwenPaw/issues/6667 |
| #6642 | Direct file path reading on drag-drop (no upload) | 5 | https://github.com/agentscope-ai/QwenPaw/issues/6642 |
| #6455 | Multi-model parallel execution per agent | 3 | https://github.com/agentscope-ai/QwenPaw/issues/6455 |
| #5906 | False positive in dedup/loop detection | 3 | https://github.com/agentscope-ai/QwenPaw/issues/5906 |

**Analysis:** The top-voted issue (#6649) reflects user demand for cost/latency optimization via prompt caching as GPT-5.6 ships. Issues #6655 and #6695 (WeChat approval unreachability) both point to a systemic gap: **channel parity for security approval flows** — web UI handles it well, but console/WeChat channels lack the interaction surface. Issue #6455 (multi-model parallel execution) signals power users want comparative/ensemble workflows natively. The recurring file-handling requests (#6642, #6643) indicate the current media directory model is a friction point for heavier users.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR | Link |
|----------|-------|-------------|--------|------|
| **Critical** | #6697 | v2.1.0b1 desktop injects `PYTHONHOME` into child env → all Python subprocesses crash (`ModuleNotFoundError: encodings`) | — | https://github.com/agentscope-ai/QwenPaw/issues/6697 |
| **Critical** | #6698 | v2.1.0b1 browser SDK: `open()` always fails with `WireProtocolError: Target crashed` (isolated Playwright session) | — | https://github.com/agentscope-ai/QwenPaw/issues/6698 |
| **High** | #6696 | WeChat iLink: one-time `context_token` consumed by typing indicator → replies rejected (`ret=-2`), "working" stuck | — | https://github.com/agentscope-ai/QwenPaw/issues/6696 |
| **High** | #6674 | Free-tier model (deepseek-v4-flash) rate limiting (429) causes task interruptions with no backoff | — | https://github.com/agentscope-ai/QwenPaw/issues/6674 |
| **High** | #6687 | OpenRouter multimodal probe overwrites documented capabilities with `false` | — | https://github.com/agentscope-ai/QwenPaw/issues/6687 |
| **Medium** | #6700 | Ultra-large tool output deadlocks session loading in browser | — | https://github.com/agentscope-ai/QwenPaw/issues/6700 |
| **Medium** | #6690 | Cron `pause`/`resume` doesn't persist `enabled` state across restarts *(closed via PR #6691)* | ✅ #6691 | https://github.com/agentscope-ai/QwenPaw/issues/6690 |
| **Medium** | #6624 | Auto-compress (Scroll) doesn't trigger `summarize_when_compact` memory flow | — | https://github.com/agentscope-ai/QwenPaw/issues/6624 |
| **Low** | #6683 | App Center plugin install fails: `No module named 'utils.env'` *(closed via PR #6688)* | ✅ #6688 | https://github.com/agentscope-ai/QwenPaw/issues/6683 |
| **Low** | #6301 | Naive UTC timestamps treated as local time in session display *(closed)* | ✅ | https://github.com/agentscope-ai/QwenPaw/issues/6301 |

**Assessment:** The v2.1.0b1 desktop release has **two critical regressions** (Python env poisoning and Playwright crash) that block core functionality. These should be addressed before any stable v2.1.0 cut. The WeChat token bug (#6696) is a protocol-level flaw affecting a popular channel.

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood for Next Release |
|----------|---------|----------------------------|
| #6704 (PR) | Session fork — snapshot conversation to new session | **High** — PR is ready, directly addresses #6560 |
| #6649 | GPT-5.6 prompt caching params in Responses API | **Medium** — provider-level addition, needs testing |
| #6699 | On-demand skill loading (reduce 8-10K token overhead) | **Medium** — architectural change, significant impact for power users |
| #6694 | Global rules file (`.agent` / `.claude`-style system prompt) | **Low-Medium** — simple to implement, clear UX benefit |
| #6455 | Multi-model parallel execution per agent | **Low** — complex orchestration, but high user demand |
| #6490 (Issue) | Volcano Engine & Xiaomi MiMo as built-in providers | **Medium** — straightforward provider additions |
| #6684 (Issue) | Channel startup retry (implemented in PR #6689) | **High** — already in PR, targets Matrix and similar |
| #6674 | Rate-limit handling for free-tier models | **Medium** — needs backoff/retry strategy design |

## 7. User Feedback Summary

**Pain points:**
- **Desktop v2.1.0b1 regressions** are the dominant complaint — Python subprocess crashes and browser tool failures make the beta unusable for core workflows (#6697, #6698).
- **Channel inequality**: security approvals work in Web UI but are invisible in console and WeChat channels (#6655, #6695), creating a dangerous blind spot for destructive operations.
- **File handling friction**: users want direct path access on drag-drop (#6642) and per-task artifact isolation (#6643) rather than a monolithic `media/` directory.
- **Free-tier rate limits** interrupt long-running tasks with no graceful degradation (#6674).
- **Skill bloat**: 27+ skills consume 25-30% of the system prompt budget even when unused (#6699).

**Positive signals:**
- Plugin ecosystem is active (App Center installs, community plugins like `qwenpaw-creator`).
- Multi-model and multi-agent workflows are deeply desired, indicating product-market fit for advanced users.
- The community is contributing substantive fixes (PRs #6691, #6688, #6676 all from community contributors).

## 8. Backlog Watch

| Issue | Age | Why It Needs Attention |
|-------|-----|------------------------|
| #6697 | 1 day (new) | **Blocks v2.1.0 stable** — desktop Python env corruption affects all subprocess-based tools |
| #6698 | 1 day (new) | **Blocks v2.1.0 stable** — browser tool completely non-functional in desktop beta |
| #6696 | 2 days | WeChat is a major channel; token exhaustion breaks all replies until restart |
| #6455 | 12 days | High-value feature request with 3 comments; no PR yet |
| #6699 | 1 day (new) | On-demand skill loading is a significant token-efficiency win; no PR yet |
| #6624 | 4 days | Auto-compaction not triggering memory summarization is a data-loss risk for long sessions |
| #5906 | 27 days | False positive doom-loop detection causes legitimate conversations to be killed; no fix PR |
| #6687 | 1 day | OpenRouter capability probe bug causes models to be incorrectly classified as non-multimodal |

---

**Project Health Verdict:** Active development with strong community contribution velocity. The v2.1.0b1 beta has **critical regressions** that must be resolved before a stable release. Channel parity (especially approval flows) and desktop stability are the top priorities. The roadmap is well-aligned with user demand — session fork and retry contracts are already in PR.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-05

## 1. Today's Overview

ZeroClaw saw elevated activity today with **38 issues** and **50 pull requests** updated, though no PRs were merged or issues closed — all open PRs remain under review. The project is in a heavy design and security-hardening phase, with multiple high-priority RFCs progressing simultaneously and three P0-severity security bugs filed in the last week. No new releases were published. The maintainer team is actively engaging with contributors on authentication, sandboxing, and session-ownership concerns.

## 2. Releases

No new releases were published today.

## 3. Project Progress

**No PRs were merged or closed today.** All 50 updated PRs remain open and under review, indicating a thorough review bottleneck or deliberate staging before merge. Notable workstreams advancing today:

- **#9744** — Authenticated webhook ingress added as a typed boundary (`VerifiedWebhookIngress`) between transport verification and agent dispatch, directly addressing P0 security bugs (#9565). [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9744)
- **#9748** — Fixes stale provider refreshes mutating replacement sessions by introducing a per-session generation counter. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9748)
- **#9402** — Prevents nested Docker sandbox-in-Docker-runtime misconfiguration via canonical `RuntimeKind` selection. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9402)
- **#9403** — Binds WASM plugin exports to a wall-clock deadline (30s default) to prevent runaway guest execution. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9403)
- **#9476** — Adds authenticated operator cancellation for running SOP jobs. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9476)
- **#9217 / #9219 / #9224** — Evaluation framework now supports async graders, workspace/budget/json-field graders, and repeated live runs with pass@k statistics. [Links: [#9217](https://github.com/zeroclaw-labs/zeroclaw/pull/9217), [#9219](https://github.com/zeroclaw-labs/zeroclaw/pull/9219), [#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224)]
- **#8315 / #8902** — Bidirectional RPC fixes for ask_user and poll flows. [Links: [#8315](https://github.com/zeroclaw-labs/zeroclaw/pull/8315), [#8902](https://github.com/zeroclaw-labs/zeroclaw/pull/8902)]

## 4. Community Hot Topics

The most discussed issues today center on **agent architecture, security policy, and unified session/attachment models**:

| # | Title | Comments | Link |
|---|-------|----------|------|
| #8303 | RFC: Goal mode v1 — bounded foreground Matrix work | 16 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| #7155 | RFC: Per-execution confirmation tier for high-risk shell commands | 14 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| #9488 | RFC: Unified attachment architecture for web chat and channels | 13 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| #8568 | Mixture-of-Agents (MoA) virtual model provider | 10 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) |
| #6850 | RFC: Decouple memory lifecycle policy from storage backends | 10 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| #9487 | RFC: Runtime-owned conversation sessions and transport adapters | 10 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |

**Analysis:** The community is pushing hard on durable multi-turn agent goals (#8303), shell command safety with explicit confirmation tiers (#7155), and unifying session/attachment ownership across channels (#9487, #9488). The MoA proposal (#8568) — already closed — signals strong interest in model aggregation as a first-class feature. The memory-lifecycle RFC (#6850) reflects operator demand for cleaner separation between storage and policy. The tracker for maintainer decision queues (#8692, 9 comments) shows contributors are attentive to governance and want faster RFC ratification.

## 5. Bugs & Stability

Three **P0-severity security bugs** were flagged within the past week, all still open or in-progress:

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **P0** | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | Gateway webhook handlers for WhatsApp Cloud, Linq, WATI do not fail closed — unauthenticated messages reach the agent | **#9744** (auth ingress boundary) |
| **P0** | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | Knowledge graph has no per-agent attribution — any agent reads/mutates another's data | None yet |
| **P0** | [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | Session/channel read+write tools lack per-agent ownership scoping | None yet |

Other notable bugs:
- [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — `verifiable-intent` evaluates constraints without verifying the credential chain (P2, 4 comments)
- [#9504](https://github.com/zeroclaw-labs/zeroclaw/pull/9504) — Context-exhaustion now surfaces a terminal notice instead of ending silently (fix in progress)
- [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) — Tool-call parser recovers invocations wrapped in `<tools>` tags from Qwen2.5-Coder models

## 6. Feature Requests & Roadmap Signals

| RFC / Issue | Summary | Likelihood in Next Version |
|-------------|---------|---------------------------|
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Per-execution confirmation tier for high-risk shell commands (allow/ask/deny) | **High** — normative scope narrowed, in active revision |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Unified attachment architecture across web and channels | **Medium** — recently proposed, needs ratification |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Runtime-owned conversation sessions with transport adapters | **Medium** — cross-referenced with #9488 and #9600 |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | Replace React/Vite web UI with Rust→Wasm (Dioxus/Leptos/Yew) | **Low-Medium** — architectural shift, depends on review velocity |
| [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) | Send stable `session_id` to OpenRouter for prompt-cache savings | **High** — small, cost-impact, straightforward to ship |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | WASM plugin lifecycle hook subscriptions | **Medium** — enables third-party plugin telemetry |

**Predicted near-term inclusions:** The per-model capability config RFC (#7100), OpenRouter prompt-cache session IDs (#9631), and shell command confirmation tiers (#7155) are strong candidates for the next release given their progress and operator demand.

## 7. User Feedback Summary

- **Security transparency is a top concern.** Operators want to inspect active credentials, sandbox policies, and tool-approval states in real time (#7691, #7155, #8424). The forbidden-path RFC (#8424) specifically calls out that `.env` and `rust-toolchain.toml` inside the workspace are currently unprotected.
- **Multi-agent isolation is broken.** The P0 bugs (#9646, #9647) confirm that agents can read and mutate each other's sessions and knowledge graphs — a critical trust gap for shared-hosting or multi-tenant deployments.
- **Context exhaustion is opaque.** Users report silent turn failures when context windows are exceeded; PR #9504 addresses this with a visible terminal notice.
- **Webhook reliability is poor.** WhatsApp/Linq/WATI webhooks dispatch unauthenticated messages (#9565), a direct risk for production channel deployments.
- **Plugin permissions are too coarse.** Operators want per-capability granularity rather than all-or-nothing `PluginPermission` enums (#8398).

## 8. Backlog Watch

| Issue | Age | Risk | Why It Needs Attention |
|-------|-----|------|----------------------|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) — Knowledge graph lacks per-agent attribution | 4 days | **P0** | No fix PR yet; any agent can mutate another's knowledge |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) — Session/channel tools lack per-agent ownership | 4 days | **P0** | No fix PR yet; model-supplied IDs bypass ownership checks |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue for RFCs | 32 days | P2 | Tracker for stalled RFC ratification; 9 comments |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) — Session-persistence contract ownership | 5 days | P2 | Four independent workstreams touching the same contract with no owner |
| [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) — Plugin permission/open-questions RFC | 39 days | P2 | Permission model仍未 settled; blocks plugin security hardening |
| [#8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) — Derived capability readiness for agent guidance | 40 days | P3 | Agents can't distinguish unsupported vs. disabled capabilities |

**Overall project health:** Active development with strong contributor participation, but a significant merge backlog (50 open PRs, 0 merged today) and three unpatched P0 security bugs warrant urgent maintainer attention. The RFC process is producing well-scoped proposals, but ratification velocity is the current bottleneck.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*