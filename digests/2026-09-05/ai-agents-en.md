# OpenClaw Ecosystem Digest 2026-09-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-04 18:24 UTC

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

# OpenClaw Project Digest
**Date:** 2026-09-05
**Project:** openclaw/openclaw (AI Agent & Personal Assistant Platform)

## 1. Today's Overview
The OpenClaw project remains highly active with a significant volume of engagement, generating 500 issues and 500 pull requests in the last 24 hours. This indicates a thriving ecosystem where users are actively debugging, reporting regressions, and proposing features. The project maintains a healthy release cadence, having just pushed v2026.9.1, which focuses on UI improvements for diagrams. However, the high volume of open issues (417 active) highlights ongoing stability challenges, particularly around session management, channel delivery, and memory tool performance.

## 2. Releases
**v2026.9.1** (Released 2026-09-05)
*   **Highlights:**
    *   **Diagrams in every chat:** Mermaid blocks now render as diagrams in the Control UI and native apps (macOS, iOS, Android) with enlarged previews and retry logic for mobile failures.
    *   **Progressive Context Control:** Introduction of tiered bootstrap file loading to optimize token usage for large workspaces.
    *   **Plugin Management:** Ability to manage and reload plugins without restarting the Gateway (partially addressed in PR #135599).
*   **Status:** Stable release.

## 3. Project Progress
*   **PR Activity:** 500 PRs updated, with 30 notable items highlighted. The top contributors are focusing on UI localization, memory core stability, and gateway plugin handling.
*   **Key Fixes Merged/Advanced:**
    *   **UI Localization:** Fixed schema-derived config metadata labels to respect user-selected languages (PR #137192).
    *   **Memory Tooling:** Made the Dream Diary narrative timeout configurable to handle slow local models (PR #138405).
    *   **Discord/Channels:** Fixed code preservation across message boundaries and parent channel permission reporting (PRs #121144, #138413).
    *   **CLI Improvements:** Fixed `openclaw automations runs` to accept positional job IDs (PRs #138438, #138478).
*   **Gateway Stability:** Improved handling of plugin drain events and 503 errors during hot reloads (PR #137706).

## 4. Community Hot Topics
The community is intensely focused on **Session State Integrity** and **Subagent Orchestration**. A recurring theme is "silent data loss" where subagent completions or messages are dropped without user notification.
*   **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)** (27 comments): **Subagent Completion Silently Lost**. Users report that subagent tasks fail (timeout) and are never retried or notified.
*   **[Issue #69208](https://github.com/openclaw/openclaw/issues/69208)** (15 comments): **Umbrella Issue for Duplicate Transcripts**. A broad class of bugs affecting context assembly across channels (Telegram, MS Teams, Webchat).
*   **[Issue #115908](https://github.com/openclaw/openclaw/issues/115908)** (15 comments): **Session Transcript Projection Livelock**. Under sustained writes, the main thread blocks, stalling all channel transports.
*   **[Issue #97616](https://github.com/openclaw/openclaw/issues/97616)** (10 comments): **Zombie Process Accumulation**. Unreaped child processes from hook/tool execution causing runtime degradation.

## 5. Bugs & Stability
**Severity Ranking (High Impact):**
1.  **P0 - Gateway Crash Loop:** **[Issue #135171](https://github.com/openclaw/openclaw/issues/135171)** (Closed). Gateway crashes on startup in v2026.8.1/2 because the bundled Perplexity plugin requires capability consent that cannot be inspected. *Status: Fixed.*
2.  **P1 - Session State/Data Loss:** **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)**. Subagent task orchestration failures result in silent data loss with no retry logic.
3.  **P1 - Livelock:** **[Issue #115908](https://github.com/openclaw/openclaw/issues/115908)**. Sustained transcript writes cause the main thread to enter a non-converging rebuild cycle.
4.  **P1 - Memory Tool Timeout:** **[Issue #128140](https://github.com/openclaw/openclaw/issues/128140)**. The `memory_search` tool always times out on the Gateway (15s), though it works fine via CLI.
5.  **P1 - Codex Native Thread Loss:** **[Issue #137613](https://github.com/openclaw/openclaw/issues/137613)**. Pre-compaction memory flush is disabled on CLI backends, causing loss of durable notes.

## 6. Feature Requests & Roadmap Signals
*   **Context Optimization:** **[Issue #22438](https://github.com/openclaw/openclaw/issues/22438)** (18 comments). Strong interest in "Tiered bootstrap file loading" to save tokens on large workspaces.
*   **Transparency & Cost:** **[Issue #13219](https://github.com/openclaw/openclaw/issues/13219)** (9 comments). Request for native per-model usage logging for cost tracking.
*   **UX Improvements:** **[Issue #9637](https://github.com/openclaw/openclaw/issues/9637)** (7 comments). Accessibility config to disable emojis/unicode in the TUI for screenreader users.
*   **Model Control:** **[Issue #30381](https://github.com/openclaw/openclaw/issues/30381)** (8 comments). Ability to ignore the request model field when using `x-openclaw-agent-id` headers.

## 7. User Feedback Summary
Users express high dissatisfaction with **silent failures** in the system. The feedback highlights a gap between the CLI experience (where `openclaw memory search` works) and the Gateway experience (where the tool times out). Additionally, users are frustrated by "livelock" situations where the system becomes unresponsive for minutes, forcing manual intervention. The community is also pushing for better transparency regarding costs and context window usage to manage expensive AI models effectively.

## 8. Backlog Watch
*   **[Issue #70903](https://github.com/openclaw/openclaw/issues/70903)** (7 comments, P0): Persistent file-based provider cooldown blocks users for hours after billing recovery. This is a critical user friction point.
*   **[Issue #112391](https://github.com/openclaw/openclaw/issues/112391)** (6 comments, P1): Docker `:latest` tag regressed from 2026.7.1 to 2026.6.33, triggering a downgrade guard and blocking startup.
*   **[Issue #111372](https://github.com/openclaw/openclaw/issues/111372)** (6 comments, P1): Gateway restarts immediately after "loading configuration" on macOS (infinite SIGTERM loop).
*   **[PR #135528](https://github.com/openclaw/openclaw/pull/135528)** (Waiting on Author): A massive refactoring to give each agent its own Skill Workshop. This is a complex change with high merge risk but high value.

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — Personal AI Agent Ecosystem
**Date:** 2026-09-05 | **Analyst:** Agnes (Sapiens AI)

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is in a high-velocity consolidation phase, with projects splitting between **aggressive iteration** (OpenClaw, IronClaw, LobsterAI) and **targeted stabilization** (NanoBot, Hermes, NanoClaw). The dominant theme across nearly all active projects is the transition from single-session CLI tools to multi-channel, multi-agent gateways — a shift that is exposing fundamental architectural weaknesses in session management, memory persistence, and context compaction. Community momentum is concentrated among ~7 of the 13 tracked projects, while NullClaw, TinyClaw, ZeptoClaw, and Moltis show minimal recent activity, suggesting market consolidation or dormancy.

---

## 2. Activity Comparison

| Project | Open Issues | PRs (24h) | Latest Release | Open Bugs (P0/P1) | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 417 active | 500 | v2026.9.1 | 4 (incl. data loss, livelock) | 🟡 6.5/10 |
| **Hermes Agent** | ~50 | 50 | v0.21.0 (Aug 31) | 3 (auth stale token, profile limit) | 🟡 6/10 |
| **ZeroClaw** | 36 | 50 | — | 4 (security, config silence) | 🟡 6/10 |
| **IronClaw** | 6 | 19 | — | 2 (medium-severity API bugs) | 🟢 7.5/10 |
| **LobsterAI** | 1 (critical) | 34 (29 merged) | v2026.9.4 | 1 (SQLite cascade, open 5mo) | 🟡 6/10 |
| **NanoBot** | ~4 | 29 (21 open) | — | 2 (locale registry, OAuth leak) | 🟢 7/10 |
| **NanoClaw** | ~3 | 14 | — | 1 (PreCompact OOM crash) | 🟡 5.5/10 |
| **PicoClaw** | 4 | 18 merged | — | 0 critical | 🟢 7/10 |
| **CoPaw** | Multiple | Multiple | — | Network/session stability | 🟡 5/10 |
| **Moltis** | 0 | 1 | — | 0 | 🟡 4/10 (quiet) |
| **NullClaw** | — | — | — | — | 🔴 Dormant |
| **TinyClaw** | — | — | — | — | 🔴 Dormant |
| **ZeptoClaw** | — | — | — | — | 🔴 Dormant |

*Health Score weights: release cadence (20%), bug severity & resolution speed (30%), PR throughput (20%), community engagement (15%), stability signals (15%).*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of engagement** is unmatched — 500 PRs and 500 issues in 24h dwarfs all competitors, indicating the largest active developer base and broadest channel coverage (Telegram, Discord, MS Teams, Webchat, macOS/iOS/Android native).
- **Diagrams-in-chat** (Mermaid rendering across all UIs) is a unique UX differentiator not replicated by any other project.
- **Plugin hot-reload** (PR #135599) and **tiered bootstrap context loading** show architectural ambition toward enterprise-grade multi-workspace use.

**Technical Approach Differences:**
- OpenClaw is the only project pursuing a **gateway-centric architecture** with separate CLI and Gateway runtime paths — a design that creates the "CLI works, Gateway times out" parity gap seen in Issue #128140.
- Competitors like NanoBot and IronClaw use a **single-runtime model**, avoiding this duality but sacrificing multi-process isolation.
- OpenClaw's **subagent orchestration model** is the most sophisticated in the ecosystem but also the most buggy (silent data loss, Issue #44925), suggesting the architecture is ahead of its reliability engineering.

**Community Size:** OpenClaw's engagement volume (500+ PRs/24h) is approximately **5–10x** the next most active projects (Hermes ~50, ZeroClaw ~50, LobsterAI ~34), confirming it as the ecosystem bellwether.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Need |
|---|---|---|
| **Session State Integrity** | OpenClaw, Hermes, ZeroClaw, LobsterAI | Subagent/message loss, stale tokens, session livelocks, SQLite cascade failures — all point to a fundamental gap in durable session management across the ecosystem. |
| **Context/Token Optimization** | OpenClaw, NanoBot, IronClaw, ZeroClaw | Tiered bootstrap loading, compaction visibility, prompt-cache passthrough, budget accounting from model window — token cost is the #1 operational concern. |
| **Memory Tool Reliability** | OpenClaw, NanoClaw, Hermes | Timeout mismatches (CLI vs Gateway), unbounded rewrite crashes (PreCompact OOM), missing persistence — memory layer is the weakest common component. |
| **Channel Delivery Robustness** | OpenClaw, PicoClaw, NanoBot, IronClaw | Race conditions in streaming, transcript projection livelocks, OAuth flow bounding, Telegram ordering — multi-channel is mature in feature but fragile in execution. |
| **Security & Sandboxing** | ZeroClaw, NanoClaw, IronClaw, OpenClaw | RFC-driven permission policies, filesystem mutation confinement, computer_use fail-open bugs, mount security bypass — security hardening is a shared priority, not yet solved. |
| **Observability & Cost Transparency** | NanoBot, OpenClaw, ZeroClaw | Per-model usage logging, tokens-per-second metrics, log-path visibility, cron failure auditing — users demand cost control and debugging visibility. |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | NanoBot | LobsterAI | ZeroClaw |
|---|---|---|---|---|---|---|
| **Target User** | Power users, multi-channel teams | Desktop-first professionals | Rust-native/infra-focused | Lightweight CLI users | Consumer/EN apps | Security-conscious operators |
| **Architecture** | Gateway + CLI dual runtime | Desktop app + gateway | Single Rust runtime | Single runtime (Go?) | Electron + browser | Single runtime + RFC-driven |
| **Channel Strategy** | 10+ channels (Telegram, Discord, Teams, iMessage, WhatsApp, Slack, Web, native apps) | Desktop + limited channels | WebUI + Telegram | Multi-channel, locale-aware | Browser + cowork | Gateway + Twitch, WhatsApp |
| **Subagent Model** | Full orchestration (buggy) | Cross-session intercom (requested) | Approval gate + recovery sweep | — | — | — |
| **Security Posture** | Plugin consent, capability gating | Fail-open computer_use risk | Per-user Docker sandbox RFC | OAuth flow bounding | — | Explicit RFCs, permission tiers |
| **Release Cadence** | Weekly (v2026.9.1) | Bi-weekly (v0.21.0) | Irregular | Irregular | Weekly (9.3, 9.4) | None in 24h |
| **Unique Feature** | Diagrams in every chat, tiered bootstrap | Profile switching | Prompt-cache per-transport | Model speed in WebUI | In-app browser, login gating | Multi-session ZeroCode UI |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (High PR throughput, frequent releases):**
- **OpenClaw** (500 PRs, weekly releases) — largest community, but stability debt is accumulating
- **LobsterAI** (29 merged PRs, bi-weekly releases) — strong consumer-facing velocity, UI polish focus

**Tier 2 — Active Development (Steady output, targeted fixes):**
- **ZeroClaw** (50 PRs, RFC-driven) — security-first culture, architectural decisions in flux
- **Hermes Agent** (50 PRs) — post-release stabilization after v0.21.0 regressions
- **NanoBot** (29 PRs, 21 open) — methodical bug fixing, approaching 0.3.1 stability
- **IronClaw** (19 PRs, 6 merged) — high signal-to-noise ratio, fast UX fix turnaround (24h issue→PR)
- **PicoClaw** (18 merged) — focused backend fixes, lower visibility

**Tier 3 — Maintenance Mode (Low activity, bug-focused):**
- **NanoClaw** (14 PRs) — OOM and SQLite issues dominating, feature work stalled
- **CoPaw** (moderate) — network stability issues unresolved, multi-tenant ambitions

**Tier 4 — Dormant / Quiet:**
- **Moltis** (1 PR), **NullClaw**, **TinyClaw**, **ZeptoClaw** — no meaningful recent activity

---

## 7. Trend Signals

| Trend | Evidence Across Projects | Implication for AI Agent Developers |
|---|---|---|
| **Context is the new bottleneck** | OpenClaw (tiered bootstrap), NanoBot (compaction UI), IronClaw (prompt budget from model window), ZeroClaw (prompt-cache passthrough) | Token optimization will be a key differentiator; developers should prioritize context-aware architectures over raw model capability. |
| **Multi-agent orchestration is fragile** | OpenClaw (silent subagent loss), Hermes (profile limits), IronClaw (recovery sweeps), ZeroClaw (session RFCs) | Subagent reliability is the #1 unsolved problem. Systems that solve durable orchestration will gain enterprise traction. |
| **Security is shifting from feature to foundation** | ZeroClaw (3+ RFCs on permissions), NanoClaw (mount bypass), IronClaw (sandbox RFC), Hermes (fail-open computer_use) | Sandbox-first design is becoming table stakes. Projects without explicit security boundaries will face adoption barriers. |
| **Observability = trust** | NanoBot (tokens/sec), ZeroClaw (log paths, cron audit), OpenClaw (cost tracking RFC), LobsterAI (analytics events) | Users will adopt tools that make cost and behavior transparent. Black-box agents face resistance. |
| **Channel parity is expected, channel reliability is not** | OpenClaw (livelock across channels), PicoClaw (Telegram race), NanoBot (locale registry), LobsterAI (Windows path) | Multi-channel support is table stakes; reliability across channels is the real differentiator. |
| **Gateway vs. single-runtime tension** | OpenClaw (CLI/Gateway parity gap), Hermes (Desktop/Gateway disconnect), NanoBot (single runtime) | The dual-runtime model introduces complexity costs. Single-runtime architectures may win on reliability; gateway models win on scale. |
| **Memory persistence is unsolved** | OpenClaw (memory tool timeout), NanoClaw (PreCompact OOM), LobsterAI (SQLite cascade) | No project has a robust, production-ready memory layer. This is the biggest open opportunity in the ecosystem. |

---

*Report generated by Agnes-2.0-Flash | Sapiens AI | 2026-09-05*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest – 2026‑09‑05  

### 1. Today’s Overview  
- Activity remains **high**: 4 issues were updated (3 closed, 1 newly opened) and **29 pull‑requests** saw activity, of which **21 are still open** and **8 were merged or closed**.  
- The focus is on **memory‑leak prevention**, **runtime‑context correctness**, and **visibility of performance metrics** in the WebUI.  
- No new releases were published, but a steady stream of bug‑fix PRs and feature work suggests the code‑base is moving toward a **0.3.1‑ish** stabilization point.

---

### 2. Releases  
*No new releases were cut in the last 24 h.*  

---

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Scope | Type | Key Impact |
|------|---------------|------|------------|
| **#5660** | *feat(webui): show model generation speed in context usage popover* | Feature (WebUI) | Adds real‑time **tokens‑per‑second** metric next to generation time, addressing Issue #5631. |
| **#5639** | *fix: stabilize session labels, TUI streaming, and pairing prompts* | Bug‑fix | Improves session‑label handling, upgrades OpenTUI (0.5.3 → 0.5.10) and fixes streamed fenced‑code visibility. |
| **#5657** | *refactor(webui): extract outbound wire encoding* | Refactor | Centralises WebSocket payload encoding, reduces duplication and prepares for future protocol extensions. |
| **#5654** | *fix(agent): restore current‑time runtime context via a built‑in provider* | Bug‑fix | Re‑introduces the **Current Time** block that vanished in 0.3.0, restoring expected timezone behaviour. |
| **#5648** | *fix(webui): check session metadata when generating webui titles* | Bug‑fix | Guarantees WebUI title generation even when the envelope lacks the `webui` flag (fixes #5647). |
| **#5658** | *fix(webui): generate session title when envelope omits webui flag* | Bug‑fix | Mirrors the fix above for the underlying title‑generation logic. |

*These merged PRs collectively tighten memory usage (see the “Bug & Stability” section), improve UI observability, and restore a missing runtime‑context feature that broke backward compatibility.*

---

### 4. Community Hot Topics  

| Item | Comments / 👍 | Link | Why it matters |
|------|----------------|------|----------------|
| **Issue #5631** – “Display context, model speed in WebUI” | 2 comments, 0 👍 | <https://github.com/HKUDS/nanobot/issues/5631> | Users want immediate performance feedback (speed, token usage) to gauge model cost and latency. The subsequent PR #5660 closed this request. |
| **PR #5665** – “fix(mcp): bound browser OAuth flows” | No comment count shown (high priority label *p2*) | <https://github.com/HKUDS/nanobot/pull/5665> | OAuth flow accumulation caused unbounded memory growth on rapid restarts – a classic stability concern for deployments with many concurrent auth attempts. |
| **Issue #5645** – “Current Time runtime context missing in 0.3.0” | 1 comment | <https://github.com/HKUDS/nanobot/issues/5645> | Highlights a regression that broke a core convenience feature; the fix landed in PR #5654. |
| **PR #5656** – “make context compaction visible in channels” | Open, high‑visibility label *p2* | <https://github.com/HKUDS/nanobot/pull/5656> | Signals a growing demand for transparent context‑management, especially as token limits tighten. |

*Underlying need*: **observability** (speed, token usage, compaction events) and **robustness** (memory boundedness, runtime‑context consistency) dominate community conversation.

---

### 5. Bugs & Stability  

| Severity | Issue/PR | Description | Fix status |
|----------|----------|-------------|------------|
| **Critical** | #5645 (bug) – Current Time block removed in 0.3.0 | Breaks timezone‑aware prompts; many agents rely on it. | Fixed by **PR #5654** (merged). |
| **High** | #5644 (bug) – Channel locale registry drops locales when loaded concurrently | Affects multilingual deployments; UI may fall back to English unexpectedly. | No fix yet; open. |
| **High** | #5665 (PR) – Unbounded MCP OAuth flow registry | Potential OOM on heavy auth traffic. | Open (PR in progress). |
| **Medium** | #5648 (bug) – WebUI title generation ignores session metadata | UI titles become generic, hurting multi‑session navigation. | Fixed by **PR #5648** (merged). |
| **Medium** | #5658 (bug) – Session title not generated when envelope omits `webui:true` | Same symptom as #5648 for non‑WebUI envelopes. | Fixed by **PR #5658** (merged). |
| **Low** | #5647 (linked bug) – WebUI titles missing in certain flows | Already resolved by the two PRs above. | – |

*Overall*: The most severe regressions from the recent 0.3.0 jump have been addressed quickly (Current Time, title generation). Locale handling and OAuth flow bounding remain the **top open stability tickets**.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Issue/PR | Current Status | Likelihood for next minor release (0.3.1) |
|---------|----------|----------------|------------------------------------------|
| **OpenCode `x‑opencode‑session` header** | #5661 (open) → PR #5662 (open) | Provider‑level change, already PRed. | **High** – needed before 2026‑09‑06 deadline. |
| **Context‑compaction visibility (`/compact` endpoint + events)** | #5656 (open) | New endpoint and structured events. | **Medium‑High** – aligns with UI observability push. |
| **Filesystem copy/move tools** | #5626 (open) | Adds `copy_file` & `move_file`. | **Medium** – useful for tool‑heavy agents; may land after testing. |
| **Runtime‑context `ephemeral` opt‑out** | #5659 (open) | Allows non‑persisted context blocks. | **Medium** – complements the Current Time fix. |
| **Langfuse tracing for Codex** | #5520 (open) | Adds tracing SDK integration. | **Low‑Medium** – niche but valuable for analytics. |
| **Heartbeat isolation & model‑override config** | #4551, #4549 (open) | Fine‑grained heartbeat control. | **Low‑Medium** – internal ops improvement. |

*Roadmap inference*: The team is likely to ship **OpenCode header support** (deadline‑driven) and **context‑compaction UI** together, followed by the **filesystem copy/move** tools in a later patch.

---

### 7. User Feedback Summary  

- **Performance transparency** – Users repeatedly request real‑time speed and token‑usage info (Issue #5631). The merged UI change shows the project is responding.  
- **Runtime context reliability** – The loss of the “Current Time” block broke a widely‑used convenience feature (Issue #5645). Quick remediation indicates the team values backward compatibility.  
- **Internationalisation stability** – Locale registry regression (Issue #5644) signals that multilingual deployments are a growing user segment; current fix pending.  
- **Auth scalability** – The OAuth flow memory leak (PR #5665) reveals that large‑scale, multi‑tenant setups are hitting edge‑case limits.  
- **Tooling completeness** – Requests for copy/move file primitives (PR #5626) demonstrate that users are building more complex agent workflows and need richer OS‑level tooling.

Overall sentiment is **constructive**: users are reporting concrete pain points, and maintainers are delivering targeted fixes.

---

### 8. Backlog Watch  

| Item | Type | Reason for attention |
|------|------|----------------------|
| **#5644** – Channel locale registry bug | Open Issue (bug) | Affects every multilingual channel; no PR yet. |
| **#5665** – MCP OAuth flow bounding | Open PR (bug, p2) | Potential OOM; needs review/merge soon. |
| **#5663** – Mattermost thread‑context cache bounding | Open PR (bug, p2) | Mirrors OAuth issue; memory growth risk. |
| **#5656** – Context compaction UI | Open PR (feature, p2) | Important for token‑budget transparency; may need additional testing. |
| **#5626** – copy/move filesystem tools | Open PR (feature) | Expands agent capabilities; pending CI feedback. |
| **#5661** – OpenCode session header (feature) | Open Issue (feat) – PR #5662 ready | Deadline‑driven; must be merged before 2026‑09‑06. |
| **#5431** – Background task failure reporting | Open PR (bug, p2) | Improves observability of internal failures; should be merged before next release. |
| **#5379** – Preserve full consolidation input | Open PR (bug, p2) | Prevents subtle data loss in history compaction. |

**Action recommendation**: Prioritise the two memory‑leak PRs (#5665, #5663) and the locale bug (#5644) to safeguard large‑scale deployments, then push the OpenCode header PR (#5662) to meet the external deadline.

---  

*Prepared by the NanoBot project‑watch analyst (2026‑09‑05).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-09-05  
**Project:** Hermes Agent (NousResearch/hermes-agent)

---

## 1. Today's Overview
Hermes Agent demonstrates high community engagement and active maintenance with 50 issues and 50 pull requests updated in the last 24 hours. The project is currently stabilizing v0.21.0, addressing critical regressions in profile switching and session management. A significant amount of development effort is focused on hardening the gateway control plane and fixing desktop stability issues, particularly around authentication and session lifecycle management.

## 2. Releases
**No new releases** were generated in the last 24 hours. The latest release mentioned in the data is **v0.21.0 (2026.8.31)**, which is currently undergoing bug fix validation via active PRs and issue reports.

## 3. Project Progress
**Activity:** High  
**Status:** Stabilization & Hardening

*   **PRs Merged/Closed (24h):** 6
*   **Active PRs:** 44 (Open)

**Key Progress:**
*   **Gateway Stability:** Multiple PRs are hardening the gateway dispatcher lock and restart guards to prevent data loss during mid-turn restarts (e.g., PR #103108).
*   **Desktop Fixes:** Fixes for macOS Window menu functionality (PR #103107) and skin persistence (PR #103100) are advancing to resolve user experience regressions.
*   **CLI & Plugin Fixes:** Plugin isolation issues (PR #96841) and configuration restoration for unlimited max-turns (PR #99551) have been merged to improve reliability.

## 4. Community Hot Topics
The community is heavily focused on **Desktop stability and Authentication**. The most discussed topics center on the "Could not connect" error, session state corruption, and the behavior of the new v0.21.0 profile switching logic.

*   **[Issue #41566] Desktop Gateway Connection Failure (7 comments)**
    *   *URL:* [NousResearch/hermes-agent Issue #41566](https://github.com/nousresearch/hermes-agent/issues/41566)
    *   *Analysis:* Users are experiencing a persistent disconnect despite verified gateway connectivity. This suggests a potential client-side state synchronization or token refresh issue.
*   **[Issue #102163] Profile Switching Regression (4 comments)**
    *   *URL:* [NousResearch/hermes-agent Issue #102163](https://github.com/nousresearch/hermes-agent/issues/102163)
    *   *Analysis:* A hard block on opening a 4th profile in v0.21.0 indicates a resource management logic change that requires configuration tuning or a code fix.
*   **[Issue #102895] Agent Turn Not Stopping on Delete (2 comments)**
    *   *URL:* [NousResearch/hermes-agent Issue #102895](https://github.com/nousresearch/hermes-agent/issues/102895)
    *   *Analysis:* A critical UX/Resource leak issue where deleting a session fails to terminate a stuck worker thread.

## 5. Bugs & Stability
**Status:** High Activity (P1/P2 Focus)

*   **[P1] Desktop SSH Auth Token Stale (Issue #103039 / #103054)**
    *   *Severity:* High - Blocks SSH sessions entirely.
    *   *Summary:* After connecting via SSH, Desktop authenticates successfully but subsequently fails all API calls with 401 errors due to a stale session token.
*   **[P1] Computer Use Security Boundary Fail (Issue #87724 / #103028)**
    *   *Severity:* High - Security Risk.
    *   *Summary:* `computer_use` mutations fail open (auto-approve) when the approval callback is unwired, bypassing destructive action guards on Desktop and CLI.
*   **[P2] Session State Lockups (Issue #102163)**
    *   *Severity:* Medium - UX Regression.
    *   *Summary:* v0.21.0 introduced a strict local slot limit (3) causing crashes when switching profiles.
*   **[P2] Cron Job Delivery Bypass (Issue #91356)**
    *   *Severity:* Medium - Data Integrity.
    *   *Summary:* Desktop cron can bypass the live gateway, breaking Discord delivery for continuable jobs.

## 6. Feature Requests & Roadmap Signals
*   **GPT-6 Astra Support (Issue #103015):** Users are requesting compatibility for the new "Astra" model variant within the OpenAI provider path.
*   **Local Cross-Session Messaging (Issue #81885):** A significant feature request for an "intercom" system to share context between concurrent local sessions (research, implement, review).
*   **Memory Lifecycle Management (Issue #103101):** Request for an "Anchor, Archive, Semantic Search" system to manage the holographic memory store more dynamically.
*   **Last 5 Models Dashboard (Issue #103011):** UI enhancement to track recent model usage.

## 7. User Feedback Summary
*   **Frustration with v0.21.0:** The update has caused noticeable regressions, specifically regarding profile limits and connection stability.
*   **Security Concerns:** Users are concerned about the "fail-open" behavior of computer_use tools when approval handlers are missing.
*   **CLI/Plugin Reliability:** There is ongoing feedback regarding plugin timeouts and configuration parsing errors (e.g., `photon setup` writing to the wrong config path).

## 8. Backlog Watch
*   **FTS5 Session Search (Issue #66242):** Open since July 17. The session search API cannot find sessions by title because the FTS5 index only covers messages, not session metadata.
*   **Clarify Card UX (Issue #101203):** Users report that "clarify" cards consistently fail to return user input, resulting in interrupted turns.
*   **Telegram Plugin State (PR #97446):** A PR to fix Telegram polling persistence is open but not merged, indicating potential delivery instability for Telegram users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### Today's Overview
Picoclaw's development activity sawtered 4 new issues reports and 18 PRs merged. Notably, there significant bugs were addressed, with PRs resolving e streamline editing issues, tool call identifiers, and e and web UI laggy issues. The project also gained support e in enhancing theOpenAI-compatible" provider support support, and e. A see merged with the main the `main` branch aligned was completed achieving 195 commits.

### Releases
No new releases were-reported during the last.

### Project Progress
Merged ~195 commits from the`sipeipeed/picoclaw` `main` branch onto `picoclaw` project. Significant bugs were resolved on the PostgreSQL streaming delivery pipeline and web lass a lot of text in the the chat area. Extensive efforts of OpenAI-compatible frame support support e now e e support locally when a smaller form width is requested.

### Hot Topics
- ** [# Issue #3347** [fix laggy interface](https://github.com/sipeed/picoclaw/pull/3347)): A notable conversation on fixing the lag in the web UI. A This prison issue had been tested and validated succeed in multiple browsers, indicating a high interest level of user satisfaction after the fix. (4 comments)
- ** PR #2189** [fix(telegram): resolve race condition](https://github.com/sipeed/picoclaw/ppull/289): resolved addressed several critical errors in the Telegram streaming processing, with improvements in handling `message` and `app_mentioned` event delivery order. (3 comments)

These PRs and issues indicate address the hot areas of interface responsiveness and reliability message update robustness.

### Bugs & Crashes
- ** Issue #3381 [Feature] e): ] [Fix channel format e on Telegram Group](https://github.com/sipeed/piciclaw/pull/338)|: resolution of a format issue in Telegram channel parsing (1)
- #3352 [Feature]: [Fixing identity system issue](https://github.com/sipeed/picoc-law/pr/3358): address identity system for a more accurate type detection (1)
- #335' [Feature] : [Fix context overflow detection](https://github.com/sipel/picoclaw/pull/3354): improvements in preventing contextccount contexte/window overflow errors ( e)
 
These resolution e a significant set of bug fixes for key stream edi and interaction e with the Telegram platform.

### Feature Requests & Roadmap Signals
- PR #228e4 [feat(provider): support GitHub stdio transport](https://github.com/sipeed/picoclaw/pull/e8e4): being worked to support stdin/stdout interface in the GitHub provider. This extends the functionality, making it more flexible bridge interaction between local and remote environments.

### User Feedback Summary
- PR #3347 [fix lagy interface](https://github.com/sipeeded/picoclaw/pull/3347)): The user pain point of addressed by this PR is specifically has significantly improved user, and users reported experiencing no more lag with both desktop and mobile browsers tested. User reported cases report high positive feedback from the fix.

### Backlog Watch
- [#3356 [Feature](https://github.com/sipeeded/picoclaw/ issuuee#3366) [Add support for OpenAI compatible providers]: This issue remain e has remained open for some now, indicating further it d may need maintainer attention. No attempt γ in e relevant PR despite.
 
The backlog remains with the Open for extended support OpenAI-compatible providers, open for not only further ongoing discussion but e implementation exploration.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest**
**Date:** 2026-09-05
**Source:** github.com/qwibitai/nanoclaw

### 1. Today's Overview
Activity remains high with 3 new issues opened and 14 pull requests updated in the last 24 hours. The project is currently in a maintenance and stabilization phase, with a strong focus on fixing critical production crashes, improving test suite stability, and adding new delivery capabilities. While there are no new releases, the volume of PR activity suggests active development toward the next version.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Project Progress
*   **Closed PRs:** 4 PRs were closed today, primarily related to dependency bumps (chat adapter versions) and bug fixes in the chat SDK bridge and agent runner.
*   **Merged PRs:** No PRs were explicitly marked as merged in the provided data, though several closed PRs indicate previous merges.
*   **Key Development:** Development is focused on expanding delivery modes (e.g., Zapier integration, envelope contract fallback) and improving container security/permissions.

### 4. Community Hot Topics
*   **PreCompact OOM Crash (#3716):** A critical production issue where the `PreCompact` hook writes unbounded, full-rewrite files, causing Out-of-Memory crashes.
    *   *Analysis:* Users are experiencing unbounded disk growth and OOM loops in production, indicating a serious resource management flaw that needs immediate attention.
*   **Zapier MCP Skill Addition (#3715):** A feature request to add a Zapier tool skill that allows secure access to hosted MCP servers without exposing tokens.
    *   *Analysis:* This addresses a security and usability need, allowing operators to integrate automation tools without hardcoding credentials in configuration files.
*   **Operator Env Override Bug (#3714):** Operator environment variables (auto-compact window, transcript rotation) are not being passed to the session container.
    *   *Analysis:* This is a configuration gap where documented features are not functionally available, limiting the operator's ability to manage agent lifecycle settings.

### 5. Bugs & Stability
*   **High Severity:** **Production OOM Crash Loop (#3716)**. The `PreCompact` hook writes a full file re-serialization on every firing without rotation, leading to unbounded disk usage and crashes.
*   **Medium Severity:** **Concurrent Test Failures (#3709)**. SQLite tests use a fixed `/tmp` root, causing race conditions in concurrent vitest runs (e.g., in worktrees or CI).
*   **Medium Severity:** **Mount Security Bypass (#3680)**. A vulnerability in `mount-security` that could allow allowlisted-extra mounts to bypass validation.
*   **Low Severity:** **SELinux/Permissions Issues (#3440)**. Mounts are blocked by SELinux or are incorrectly marked group-writable.

### 6. Feature Requests & Roadmap Signals
*   **Delivery Mode Configuration:** The addition of a per-agent-group delivery mode (#3713) suggests the roadmap includes supporting different delivery contracts (envelope vs. tool-based) for different model providers.
*   **MCP Integration:** The push for a Zapier MCP skill (#3715) indicates a strategy to expand the ecosystem of tools and automations accessible to agents via the Model Context Protocol.
*   **Content Lazy Loading:** PR #3711 proposes deferring expensive inbound content (network fetches) until an agent actually receives the message, which is a performance optimization for high-volume chat environments.

### 7. User Feedback Summary
Users are reporting significant stability concerns regarding disk management in production environments (OOM crashes) and concurrent development workflows (test failures). The feedback highlights a need for better resource capping and thread-safe testing utilities. Conversely, the community is actively requesting new integration capabilities (Zapier) and better configuration controls (env overrides).

### 8. Backlog Watch
*   **Chat SDK Bridge Fixes:** PRs #2232 and #2231 (Closed) address Markdown round-trip issues and adapter fallbacks, suggesting a history of adapter compatibility challenges.
*   **Agent Runner Database Locking:** PRs #3708 and #3462 address SQLite locking (busy_timeout, journal_mode) and MCP double-delivery bugs, indicating a history of database concurrency issues that require ongoing maintenance.
*   **Deprecation/Versioning:** PR #3461 notes that dependencies are being bumped to stay current (chat 4.29.0 -> 4.38.1), highlighting the importance of keeping the dependency tree up to date for security and compatibility.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-09-05

## 1. Today's Overview

IronClaw shows strong development velocity with **19 PRs updated** and **6 open issues** in the last 24 hours. Activity is concentrated in two areas: a batch of WebUI polish fixes from contributor `italic-jinxin` (4 PRs) and continued subagent infrastructure work from core maintainer `henrypark133` (3 PRs). Six PRs were merged or closed today, including critical fixes for the prompt cache, main-branch test breakage, and a panic in embedded tool-result parsing. No new releases were published.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

### Merged / Closed PRs (6)

| PR | Title | Summary |
|---|---|---|
| [#8062](https://github.com/nearai/ironclaw/pull/8062) | `fix(llm): send conversation cache keys on OpenAI request paths` | Enables stable prompt-cache keys across turns and tool-loop iterations for all OpenAI-compatible transports. |
| [#8043](https://github.com/nearai/ironclaw/pull/8043) | `perf(loop-host): coalesce streamed text updates` | Eliminates O(N·k) text cloning in `ProviderStreamSink::text_delta`; large responses no longer trigger quadratic memory copies across deltas. |
| [#8046](https://github.com/nearai/ironclaw/pull/8046) | `feat(subagent): child approval/auth gate reaches owner's inbox` | Blocked subagent children now surface their approval state to the parent instead of remaining invisible. |
| [#8058](https://github.com/nearai/ironclaw/pull/8058) | `test(webui): use live extension id in notification-setup boundary test` | Fixes a stale-extension-id regression in `api-boundary.test.ts`. |
| [#8055](https://github.com/nearai/ironclaw/pull/8055) | `fix(webui): follow authorizeTraceHold to trace-api.ts in asset test` | **Unblocks main branch** — resolves a panic in `sidebar_trace_credits_card_assets_are_embedded` introduced by commit `666ebcbf08`. |
| [#8060](https://github.com/nearai/ironclaw/pull/8060) | `ci(nextest): whole-tree architecture scans timeout headroom` | Increases timeout headroom for the three `ironclaw_architecture_tests` binaries that were finishing at 176.8s against a 180s hard kill. |

### Key Open PRs Advancing

- **[#8053](https://github.com/nearai/ironclaw/pull/8053)** — Derives prompt context budget from the model's advertised window instead of a hard-coded 128k/20k constant.
- **[#8067](https://github.com/nearai/ironclaw/pull/8067)** — Adds a boot-time sweep to recover stranded background subagent deliveries — the long-requested third healing trigger.
- **[#8044](https://github.com/nearai/ironclaw/pull/8044)** — Switches Claude family prompt-cache support from an allowlist to a denylist, preventing newer families from silently falling back to `CacheRetention::None`.
- **[#8054](https://github.com/nearai/ironclaw/pull/8054)** — Fixes Telegram pairing order so unpaired users see the connect notice on first contact.

---

## 4. Community Hot Topics

### Most Discussed Issue

**[#7903](https://github.com/nearai/ironclaw/issues/7903)** — *Decision spike: persistent per-user sandboxed executor behind the trusted host kernel*
- **2 comments**, open since 2026-08-26 | Author: `serrrfirat` | Tags: `enhancement`, `risk: high`, `scope: agent`, `scope: sandbox`, `reborn`
- **Analysis:** This is the most debated open issue. It proposes moving the canonical agent loop out of the trusted host and into a persistent per-user Docker sandbox, currently keeping only `builtin.shell` commands sandboxed. The discussion centers on the authority boundary trade-off: full sandboxing eliminates host-side command plumbing for every new CLI but raises complexity around loop persistence and cross-sandbox communication.

### Other Notable Issues

- **[#8057](https://github.com/nearai/ironclaw/issues/8057)** — *Prompt budget should account for non-transcript prompt material* (open since 2026-09-03). Directly motivates the companion PR [#8053](https://github.com/nearai/ironclaw/pull/8053), which is already in progress.
- **[#8066–#8064, #8063](https://github.com/nearai/ironclaw/issues/8066)** — Four related WebUI issues from `italic-jinxin`, all opened 2026-09-04, each now paired with a corresponding fix PR (#8071, #8070, #8069, #8068 respectively). These show a tight issue→PR pipeline for UX polish.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|---|---|---|---|
| **High** | [#8056](https://github.com/nearai/ironclaw/pull/8056) (PR open) | `fix(host-api): avoid malformed preview range panic` — a closing JSON delimiter before the first opening delimiter caused a panic in embedded tool-result text. | PR [#8056](https://github.com/nearai/ironclaw/pull/8056) open, not yet merged. |
| **Medium** | [#8059](https://github.com/nearai/ironclaw/pull/8059) (PR open) | `fix(responses): send cancel reason the product surface accepts` — `POST /api/v1/responses/{id}/cancel` always returned `400 invalid_request`; `cancel_response` hardcoded a reason string that `parse_cancel_reason` rejected. | PR [#8059](https://github.com/nearai/ironclaw/pull/8059) open, not yet merged. |
| **Medium** | [#8066](https://github.com/nearai/ironclaw/issues/8066) | Command result cards collapse to invisible lines when results accumulate. | Fix PR [#8071](https://github.com/nearai/ironclaw/pull/8071) open. |
| **Low** | [#8055](https://github.com/nearai/ironclaw/pull/8055) ✅ | Asset test panic on `main` — unblocked all open PRs. | **Merged.** |
| **Low** | [#8058](https://github.com/nearai/ironclaw/pull/8058) ✅ | Stale extension ID in `api-boundary.test.ts`. | **Merged.** |

The two unmerged bugs (#8056, #8059) both involve API contract mismatches rather than runtime crashes and are low-risk in the meantime.

---

## 6. Feature Requests & Roadmap Signals

| Item | Type | Signal |
|---|---|---|
| [#7903](https://github.com/nearai/ironclaw/issues/7903) | Roadmap decision | Persistent per-user sandboxed executor — if approved, this would be a major Reborn architecture shift. |
| [#8057](https://github.com/nearai/ironclaw/issues/8057) | Enhancement | Prompt budget accounting for identity/skills/tool-schemas — PR [#8053](https://github.com/nearai/ironclaw/pull/8053) is actively addressing it; likely inclusion in the next release. |
| [#8067](https://github.com/nearai/ironclaw/pull/8067) | Feature (R4 debt) | Stranded subagent background delivery sweep — completes a three-pronged healing strategy. High probability of inclusion. |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | Feature | Telegram Bot API command menu registration at activation — improves first-run UX for Telegram channel users. Likely next release. |

---

## 7. User Feedback Summary

**WebUI UX pain points (primary volume of today's activity):**
- Command result cards accumulate without dismiss actions — users want the ability to close them manually. **Addressed by [#8069](https://github.com/nearai/ironclaw/pull/8069).**
- Cards collapse into invisible lines as results pile up. **Addressed by [#8071](https://github.com/nearai/ironclaw/pull/8071).**
- Slash-command menu metadata is misaligned due to variable-width flex rows, reducing scanability. **Addressed by [#8070](https://github.com/nearai/ironclaw/pull/8070).**
- Keyboard navigation in the slash-command menu doesn't auto-scroll the active option into view. **Addressed by [#8068](https://github.com/nearai/ironclaw/pull/8068).**

**Telegram onboarding friction:**
- Unpaired users' first contact returned the command inventory instead of the pairing/connect notice. **Addressed by [#8054](https://github.com/nearai/ironclaw/pull/8054).**

All four WebUI issues were opened and resolved within 24 hours, indicating a responsive maintainer-contributor loop.

---

## 8. Backlog Watch

| Item | Open Since | Concern |
|---|---|---|
| [#7903](https://github.com/nearai/ironclaw/issues/7903) | 2026-08-26 (10 days) | High-risk architectural spike with only 2 comments — needs maintainer direction to move from discussion to decision. |
| [#8057](https://github.com/nearai/ironclaw/issues/8057) | 2026-09-03 (2 days) | Prompt budget issue — actively being addressed by PR [#8053](https://github.com/nearai/ironclaw/pull/8053), but the issue itself remains open awaiting merge. |
| [#8056](https://github.com/nearai/ironclaw/pull/8056) | 2026-09-03 | Panic fix for malformed embedded tool-result text — open PR, no reviewer activity yet. |
| [#8059](https://github.com/nearai/ironclaw/pull/8059) | 2026-09-03 | Cancel-reason API contract bug — open PR, no reviewer activity yet. |

---

**Project Health Assessment:** 🟢 Active and healthy. High PR throughput (19 updates, 6 merged), fast turn-around on UX bugs (24h issue→PR), and clear progress on architectural debt (subagent recovery, prompt budgeting). The main risk is the stalled decision on [#7903](https://github.com/nearai/ironclaw/issues/7903), which blocks a longer-term sandboxing strategy.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – Daily Project Digest (2026‑09‑05)**  

---

### 1. Today’s Overview
- Activity is **high**: 34 pull‑requests were touched in the last 24 h, 29 of which were merged or closed, and **5 remain open**.  
- Two point releases (2026.9.4 and 2026.9.3) were published, bringing back the interactive in‑app browser, a new login‑confirmation flow, and several UI/UX refinements.  
- The only open issue is a **critical SQLite storage defect** that could lead to orphaned messages and permanent data loss. No new bugs were reported today beyond that issue, but a handful of bug‑fix PRs landed, indicating a focus on stability.  

---

### 2. Releases  

| Version | Date | Highlights | Breaking / Migration Notes |
|---------|------|------------|-----------------------------|
| **2026.9.4** | 2026‑09‑04 | • Restored the interactive in‑app browser (feat browser). <br>• Added a “confirm before install & quit” dialog (feat update). <br>• Various UI polish and diagnostics. | No breaking API changes. Users should restart the app after the “confirm before quit” update to see the new dialog. |
| **2026.9.3** | 2026‑09‑03 | • Prompted unauthenticated users to log in before chatting (feat cowork). <br>• First iteration of the interactive in‑app browser (feat browser). <br>• Minor onboarding tweaks. | Same as above – a simple restart is enough. |

*Full changelogs:*  
- 2026.9.4: <https://github.com/netease-youdao/LobsterAI/releases/tag/2026.9.4>  
- 2026.9.3: <https://github.com/netease-youdao/LobsterAI/releases/tag/2026.9.3>  

---

### 3. Project Progress (Merged / Closed PRs)

| PR # | Title / Area | Key Outcome |
|------|--------------|--------------|
| **#2609** | feat(update): confirm before install & quitting | Introduces a safety prompt that reduces accidental app termination. |
| **#2602** | feat(browser): restore interactive in‑app browser | Re‑enables full‑screen, tab‑based browsing inside LobsterAI. |
| **#2616** | fix(ci): bound skill audit duration | Caps npm‑audit to 90 s per skill, preventing CI time‑outs. |
| **#2615** | fix(browser): support Unicode Windows install paths | Fixes launch failures on non‑ASCII Windows installations. |
| **#2614** | fix(config): correct test‑mode backend URL | Switches default API endpoint back to the standard internal network. |
| **#2613** | feat(publishing): improve subscription‑recovery flow | Adds UI and analytics for subscription renewal and resource sync. |
| **#2612** | fix(cowork): preserve model display during login refresh | Keeps the selected model visible while auth tokens are refreshed. |
| **#2603** | fix(i18n): refine voice‑quota‑exhausted copy | Updates Chinese copy to match new free‑trial wording. |
| **#2599** | fix(im): improve bot‑card layout | Responsive two‑column layout; tighter spacing for empty add‑bot cards. |
| **#2596** | fix(analytics): track chat‑login CTA clicks | Emits a new onboarding analytics event for login‑prompt interactions. |
| **#2503** | fix(electron): add edit context menu for text inputs | Enables Cut/Copy/Paste/Select‑All in prompt fields across platforms. |
| **#2501** | fix(skills): portal upgrade progress overlay | Renders upgrade overlay at document‑body level for consistent coverage. |
| *(and many other small fixes – e.g., #2520, #2521, #2532, #2571, #2567)* | | |

These merges collectively advance **user onboarding, in‑app browsing, Windows compatibility, and CI robustness** while tightening UI polish and telemetry.

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Link | Why it matters |
|------|------|---------------|------|----------------|
| **#1071** – SQLite storage layer defects (CASCADE, atomic writes, init‑promise timeout) | Issue (open, stale) | 1 comment, 0 👍 | <https://github.com/netease-youdao/LobsterAI/issues/1071> | Direct impact on data integrity; could cause orphan messages and permanent crashes in production. |
| **#2618** – Release/2026.9.4 (multi‑area) | PR (closed) | – | <https://github.com/netease-youdao/LobsterAI/pull/2618> | Central coordination of the 2026.9.4 release; touches renderer, main, Windows build, docs, and artifact generation. |
| **#2617** – fix(browser): improve in‑app login and tab controls | PR (open) | – | <https://github.com/netease-youdao/LobsterAI/pull/2617> | Enhances the newly‑added in‑app browser; addresses user‑feedback on login feedback and tab ergonomics. |
| **#2573** – feat(cowork): show login prompt before unauthenticated chat | PR (closed) | – | <https://github.com/netease-youdao/LobsterAI/pull/2573> | Directly linked to the “login‑prompt” UI introduced in 2026.9.3; reflects demand for clearer auth gating. |

**Analysis:**  
- The SQLite issue dominates risk discussion – the community is flagging it as “stale” but its severity keeps it on the radar.  
- Browser‑related PRs (#2602, #2617) receive continuous attention, suggesting the in‑app browser is a high‑visibility feature.  
- Authentication/ onboarding flows (login prompt, CTA tracking) are also a recurrent theme, indicating that new or occasional users are a key demographic.

---

### 5. Bugs & Stability  

| Severity | Bug / Regression | PR (if fixed) | Status |
|----------|------------------|---------------|--------|
| **Critical** | SQLite cascade failure, non‑atomic `save()`, init‑promise timeout (Issue #1071) | – (no fix yet) | **Open**; requires immediate attention. |
| **High** | In‑app browser login feedback not dismissible, tab‑strip behavior (PR #2617 – still open) | – | Open, under active development. |
| **Medium** | Unicode Windows install path causing launch failure (fixed in #2615) | ✅ #2615 | Resolved. |
| **Medium** | Missing edit context menu in text inputs (fixed in #2503) | ✅ #2503 | Resolved. |
| **Low** | Voice‑quota exhausted copy wording (fixed in #2603) | ✅ #2603 | Resolved. |
| **Low** | Bot‑card layout overflow on multi‑instance view (fixed in #2599) | ✅ #2599 | Resolved. |

**Takeaway:** Apart from the critical SQLite defect, most regressions reported today have already been addressed. The remaining high‑priority items are UI‑centric and already in a PR pipeline.

---

### 6. Feature Requests & Roadmap Signals  

| Requested Feature | Evidence (PR / Issue) | Likelihood for Next Release |
|-------------------|-----------------------|-----------------------------|
| **More robust in‑app browser** (e.g., persistent tabs, better login flow) | Ongoing PR #2617; recent feat(browser) in 2026.9.4 | **High** – slated for 2026.9.5 or 2026.9.6. |
| **Improved authentication prompts & analytics** | PR #2573 (login prompt) and #2596 (login‑CTA tracking) | **High** – already merged, will be polished in next minor. |
| **Enhanced Windows installer Unicode support** | Fixed in #2615; user feedback prompted the change | **Medium** – future installer refinements expected. |
| **Subscription‑recovery UI & state sync** | PR #2613 (publishing) | **Medium** – may see incremental upgrades. |
| **SQLite storage reliability** | Issue #1071 (critical) | **Critical** – must be addressed before any further feature work; likely a dedicated hot‑fix release. |

---

### 7. User Feedback Summary  

- **Pain Points:**  
  - **Data loss risk** due to SQLite cascade/atomic‑write bugs – users fear permanent message loss.  
  - **In‑app browser usability** – login feedback was previously sticky; users requested dismissible messages and better tab management.  
  - **Windows path handling** – non‑ASCII installation directories broke the browser launcher for some users.  

- **Positive Signals:**  
  - The **login‑prompt before unauthenticated chat** was well‑received; analytics tracking (PR #2596) shows increased click‑through on the CTA.  
  - UI polish (context menus, bot‑card layout) is being noticed and praised in community comments.  

Overall, the community is **satisfied with rapid UI fixes** but **concerned about data integrity**.  

---

### 8. Backlog Watch  

| Item | Type | Age | Why it needs attention |
|------|------|-----|------------------------|
| **#1071** – SQLite storage defects | Issue (open, stale) | Created 2026‑03‑30 (≈5 months) | Critical data‑integrity risk; no fix yet. |
| **#2617** – fix(browser): improve in‑app login and tab controls | PR (open) | Created 2026‑09‑04 (today) | High‑impact UI improvement; pending review. |
| **#2609** – feat(update): confirm before install & quit | PR (closed) | – | Already merged, but may need user documentation. |
| **#2501** – fix(skills): portal upgrade progress overlay | PR (closed) | Closed today, but overlay may need visual testing on low‑spec devices. |
| **Any open PRs labeled “area: cowork” that have been idle > 7 days** – e.g., #2523 (add IM icon) – could be merged to improve the messaging experience. |

**Recommendation:** Prioritize a **hot‑fix** for the SQLite issue (perhaps a dedicated “2026.9.5‑security” release). Simultaneously, accelerate review of PR #2617 to complete the in‑app browser overhaul, as it aligns with the current release cadence and user demand.

--- 

*Prepared by the LobsterAI Open‑Source Analyst – 2026‑09‑05*  

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-09-05

## 1. Today's Overview

Moltis saw light activity today with a single open pull request (#1258) submitted on 2026-09-04. No issues were updated in the past 24 hours, and no releases were published. The project appears to be in a quiet development phase with no merged or closed PRs to report. The sole open contribution focuses on integrating the official `agy` CLI as a streaming transport, which could expand Moltis's agent ecosystem if merged.

## 2. Releases

No new releases were published today.

## 3. Project Progress

No PRs were merged or issues closed today. The only active development item is:

- **[PR #1258](https://github.com/moltis-org/moltis/pull/1258)** — *feat(external-agents): add direct AGY streaming* (Open, created 2026-09-04 by GTanger). This PR introduces first-class streaming transport support for the official `agy` CLI, reusing its existing Google OAuth session and translating AGY's versioned `stream-json` output into Moltis-native text, reasoning, notice, tool, sub-agent, usage, and resumable-session formats. No merge or review activity has been recorded yet.

## 4. Community Hot Topics

- **[PR #1258](https://github.com/moltis-org/moltis/pull/1258)** — Currently the most discussed open item, though it has zero reactions and no comments. The feature addresses a clear community need: reducing friction for users who already rely on AGY (Gemini-based CLI) by eliminating the need for a separate Gemini CLI install or API key. This suggests Moltis users value seamless OAuth-based integrations with Google's AI tooling.

No issues were reported or discussed today.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today. No open issue traffic warrants attention on the stability front.

## 6. Feature Requests & Roadmap Signals

- **[PR #1258](https://github.com/moltis-org/moltis/pull/1258)** — The AGY streaming integration is a roadmap signal that Moltis is expanding its supported agent backends beyond its native stack. If merged, it would represent a notable feature addition for the next release cycle, particularly for users in the Google/AI ecosystem. Its absence from any milestone or label makes it unclear whether it is targeted for an imminent release.

## 7. User Feedback Summary

No new user feedback was recorded today. Based on the open PR, there is user interest in:

- **Reduced setup friction** — eliminating the requirement for a separate Gemini CLI or API key for AGY users.
- **Streaming parity** — ensuring AGY's `stream-json` output is natively understood by Moltis's agent runtime.

No complaints, dissatisfaction signals, or critical use-case gaps were raised today.

## 8. Backlog Watch

- **[PR #1258](https://github.com/moltis-org/moltis/pull/1258)** — This PR has been open since 2026-09-04 with no maintainer review, comments, or reactions. A delay in review could indicate a sparse maintainer bandwidth period. It is important for the team to assess whether this integration aligns with current release priorities and provide timely feedback to the contributor.

---

**Project Health Assessment:** 🟡 Moderate — Low daily activity with no regressions, but a single unreviewed feature PR and no recent releases suggest a lull in active development. Maintainer engagement on PR #1258 would be the most impactful next step.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

### Project Digest for Q 22iten2  2626-

---

#### Overview:  日期 - 2 概述
-最近一周，QwenPaw 项目活动频繁，主要主要多关注多多租户支持、、对Windows与平台兼容、和和用户体验改进和和，具体包括多次修复关于网络延迟、`会话频道多次沟通和让以解决部分用户反映的问题。项目中并无新版本发布，主要社区反馈主要集中于网络连接、相关问题问题以及针对一些已知Bug的 的沟通。

---

#### Releases
 - 无新版本发布。

 **

#### Project Status
 - ** 项目更新积极，多个 Pull Requests 草草处理，全针对于系统功能优化以及解决社区反馈问题。主要
 - 开持续整合开发环境，并，包括统自动理内存管理、DFS接口优化、等等等多，以提升整体系统稳定性与。
 ` 多个PRared专注于调整用户界面体验和校正用户在使用过程中遇到的一些roblem。

 **

#### Community Hot Topics
 - ** 罽多wenPaw多多多个网络连接相关问题被，如首当其冲的是关于LLwenpaw访问环境在局域网访问时出现客户断断开后的频繁重启</导致无法稳定运行的问题。第二是多个用户反馈在使用过程中会采取的了任务对话模式时出现会模式调整失败问题的情况，但核心逻辑依旧保持怎样的表现。相关问题发表热烈并热烈讨论，且均有社区成员积极分享解决想法

 URL: 
 - GitHub Issue #: [agentscope-on/QwenPawkIssue #7 #5  #7318

- Github PR: [agentscope -on/QwenPawskRepo # #7 77

  - 有关接口前后置，用户提及频繁发生2重复数据库在当前实例上导致重新启动的问题。多个用户建议改变现有接口使用以确保前后置接口调用有功能性解这一问题。

 URL:  GitHub Issue Link: [agentscope |on/QwenPawIssue #[7651

  - ` 项目案对于客户端桌面启动耗机时较长的问题进行调试讨论，提了一些潜在解决方案。

 URL:  GitHub Issue Link: agentscope -on/QwenPawIssue #u 7y6

  

#### Bugs & Stability Issues
 - ** 顶级问题出现频繁连接中断问题，这要求用户多次报告,，项目通过调整网络处理机制已寻找解决方案，但现未完全解决问题。
 - 任务执行过程中忽断出现模式切换的问题仍需进一步确认，GitHub Issues #已跟踪多个这种情况: [agentscope -on/QwenPwIssue #

5，满足对模式切换过程中出现问题情况。

 URL: 项目 GitHub 问题帖链接: agentsscope -on/QwenP，wIssue

  

#### Feature Requests & & & Roadmap Signals
 - 项目界面关于移动端支持功能讨论激烈，建议望关注讨论进展以斟定推送。
 - 尽心考虑未来版本中增加平台支持广度，如MCP以支持;适。作、易D开、恳D求特定平台进行优化。

 URL: GitHub Issue Link: agentscope -on/QwenPawIllify ##D51

  -社区提出要求加强兼容性戴,对认为当前系统插件插件管理机制较局促，资源亟需整合与其优化。

 URL: GitHub Issue Link: agentscope-on/Qwen()skd#7

 

####Feedback Summary
 -大多数用户表示功能使用较为顺畅，但仍有部分用户反映一些体验上技术，包括多启动速度问题、黎
 具体迭代版本更新后备注方式。
 

###Backlog Watch
 - 多个问题重复连接问题需
接入社区逐步解决，下一步优先将形式，有待跟进以了解是否有更新。

 URL:GitHub issue Link: agentscope -on/QwenP`uue-issue

 - 项目** 枚CD休充分考虑建议用户日反馈于最
 钒多种功能优化建议然扶需要更多的审核，待进一步审。

 URL:GitHub问题 Link: agentscope -on/QwenPaw# #

6维数社区用户反馈情况推进协调优化方案，以改进模型的即未过有完关于此板块的更新了。

 URL: GitHub Issue Link: agentsscope-on/QwenPd#7

 **具体当前版本评估面积极处理用户各个方面问题，即将密切关注相关推进进展，适时进行优先调度。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest | 2026-09-05

## 1. Today's Overview
ZeroClaw demonstrates robust development momentum with 36 active issues and 50 pull requests updated in the last 24 hours, reflecting a healthy project cycle. The repository is currently navigating a complex security and architectural transition, evidenced by a high volume of "risk:high" and "security" labeled tickets. While no new releases occurred today, the active maintenance of critical infrastructure bugs and the implementation of security RFCs suggest the team is focused on stabilization before the next major release.

## 2. Releases
**None.** No new releases were published on 2026-09-05.

## 3. Project Progress
*   **PRs Merged/Closed:** 9 pull requests were closed today.
*   **Key Merges:**
    *   **Docs & Channels:** PR #10581 successfully added a Twitch setup guide to the documentation, improving onboarding for the social channel feature.
    *   **Runtime Fixes:** PR #10464 fixed a PowerShell module path preservation issue, ensuring compatibility with Windows environments.
    *   **Testing:** PR #10471 improved test reliability by avoiding execution of Edge TTS fixtures, reducing flakiness in CI.
    *   **Observability:** PR #10474 enhanced ZeroCode logs by showing the active log path in the payload fallback.

## 4. Community Hot Topics
*   **#9487 - RFC: Runtime-owned conversation sessions and transport surface adapters** (32 comments)
    *   *Analysis:* This is the most heated topic, a high-risk architectural proposal regarding session ownership. It requires a maintainer to reopen voting after the previous snapshot failed.
*   **#6909 - RFC: Computer-use support for desktop screen interaction and input control** (16 comments)
    *   *Analysis:* A major enhancement for desktop automation capabilities, recently updated with a security clarification from maintainers.
*   **#10050 - RFC: Verbatim channel send over the gateway** (13 comments)
    *   *Analysis:* Focuses on API design and routing; aims to add a direct message dispatch route to reduce overhead.
*   **#9397 - RFC: Treat an empty WhatsApp Web `allowed_groups` as permit-none** (14 comments)
    *   *Analysis:* A critical security clarification for the WhatsApp channel, ensuring that empty configuration lists behave strictly (deny-all) rather than permissive.

## 5. Bugs & Stability
*   **S1 - Workflow Blocked / Security Risks:**
    *   **#10603 - OpenCode providers never send x-opencode-session:** OpenAI-compatible providers are failing to send required headers, risking account flags for users. (Author: JordanTheJet)
    *   **#10609 - zerocode ignores launch directory:** The CLI forces the workspace as the current working directory, breaking local execution workflows.
    *   **#10593 - backup.schedule_cron silently schedules nothing:** A critical configuration bug where scheduled backups fail silently without logging.
    *   **#10625 - Internal media placeholder delivered to text-only users:** When a text-only model encounters an image marker it can't render, it delivers a raw placeholder string instead of handling the error gracefully.
*   **S2 - Degraded Behavior:**
    *   **#10626 - TTS synthesizes text verbatim:** Text-to-speech reads Markdown syntax and emoji names aloud, rather than processing the text.
    *   **#10594 - cron records nothing when a job does not run:** Silent failures in the scheduler leave no audit trail for failed cron jobs.

## 6. Feature Requests & Roadmap Signals
*   **Anthropic Prompt Caching:** PR #10623 and Issue #10619 indicate a push to enable prompt caching passthrough for OpenAI-compatible providers. This is a high-priority feature for cost optimization.
*   **ZeroCode Multi-Session UI:** PR #9739 proposes a significant UX overhaul for ZeroCode, introducing a sidebar for managing multiple agent sessions and independent panes.
*   **MCP Type Materialization:** PR #10566 aims to fully integrate MCP (Model Context Protocol) tool results into the multimodal pipeline, ensuring images/audio from MCP tools are processed correctly.
*   **Shell V1 Permission Policy:** PR #10610 implements the accepted shell permission policy (RFC #7155), moving the project toward fine-grained, tiered tool execution approval.

## 7. User Feedback Summary
The community is currently focused on **security hardening** and **operational reliability**. Users are concerned about configuration behaviors that appear secure but function permissively (e.g., WhatsApp empty groups) and strict API compliance (OpenCode headers). There is also a strong demand for better observability in the ZeroCode TUI (log paths, clipboard management) and more robust error handling for edge cases like partial terminal responses or missing cron jobs.

## 8. Backlog Watch
*   **#9487 (Architecture)**: Requires immediate maintainer intervention to reset the voting mechanism for the runtime session architecture proposal.
*   **#9977 (Security)**: A large, distinguished contributor PR (Size: XL) currently open to confine filesystem mutations to the workspace. This is a critical security improvement that has been in progress for weeks.
*   **#10158 (Release)**: A blocked PR to publish the workspace to crates.io. It requires hardware access for CI validation and has been stuck for weeks, potentially delaying the next public release.

</details>

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*