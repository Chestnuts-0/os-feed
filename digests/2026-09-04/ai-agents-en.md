# OpenClaw Ecosystem Digest 2026-09-04

> Issues: 126 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-04 12:47 UTC

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

⚠️ Summary generation failed.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Ecosystem
**Date:** 2026-09-04
**Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview
The open-source AI agent landscape in 2026 is characterized by a bifurcation between **core infrastructure frameworks** (like NanoClaw, PicoClaw, and ZeroClaw) and **end-user applications** (like Hermes Agent, LobsterAI, and CoPaw). While foundational projects focus on architectural stability, message routing, and multi-channel interoperability, application-layer projects are prioritizing UX polish, subscription management, and deep integrations with specific ecosystems (e.g., Google via AGY, Netease via LobsterAI). The ecosystem shows high velocity, with most projects actively stabilizing post-refactor releases, though a few (like ZeroClaw) are experiencing "feature avalanche" phases requiring heavy maintainer triage.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Signal |
|---------|--------------|-----------|----------------|---------------|
| **NanoClaw** | 4 | 17 | Stable (v0.3.0) | High (Security & Container focus) |
| **PicoClaw** | 6 | 9 | Stable | High (Upstream Sync) |
| **IronClaw** | 8 | 20 | Stable | High (Refactoring & CI) |
| **CoPaw** | 23 | 37 | Beta Maintenance | High (Feature-heavy) |
| **ZeroClaw** | 1 | 50 | Stable | Medium (Pipeline bottleneck) |
| **Hermes Agent** | 13 | 50 | Stable | Medium (Stability fixes) |
| **LobsterAI** | 0 | 38 | v2026.9.3 | Medium (Bug fixes) |
| **Moltis** | 0 | 1 | Stable | Low (Single PR) |
| **NanoBot** | 5 | 30 | v0.3.0 (Stabilizing) | High (Regression remediation) |
| **OpenClaw** | N/A | N/A | N/A | N/A (Reference) |

---

## 3. OpenClaw's Position
As the **core reference implementation**, OpenClaw serves as the architectural blueprint for the ecosystem. Projects like PicoClaw and NanoClaw explicitly derive from this structure. OpenClaw's technical approach—focusing on agent loop isolation, bounded recovery, and multi-channel fanout—establishes the "claw" architecture standard. While specific projects like NanoClaw and ZeroClaw are currently outpacing OpenClaw in raw PR volume, OpenClaw remains the critical foundation that ensures interoperability and shared patterns across the ecosystem.

---

## 4. Shared Technical Focus Areas

**A. Runtime Context & Budget Management**
*   **Projects:** NanoBot, IronClaw, ZeroClaw
*   **Need:** Accurate derivation of prompt budgets from model capabilities (e.g., `Current Time` context restoration in NanoBot, adaptive thinking budgets in ZeroClaw) to prevent token waste and API errors.

**B. Interoperability & External Ecosystems**
*   **Projects:** ZeroClaw, Moltis, NanoClaw
*   **Need:** Bridging gaps with external protocols (Matrix, A2A, AGY) and proprietary APIs (OpenCode, Claude Fable 5.1) to reduce vendor lock-in and enable multi-agent workflows.

**C. WebUI & Desktop Experience**
*   **Projects:** Hermes Agent, PicoClaw, LobsterAI
*   **Need:** Performance at scale (handling long chat histories), "dismissible" result cards, and robust error handling to prevent UI freezing and improve user retention.

**D. Security & Sandboxing**
*   **Projects:** NanoClaw, ZeroClaw, Hermes Agent
*   **Need:** Strict enforcement of tool boundaries (MCP governance), secure container mounting, and proper isolation of slow clients to prevent security bypasses or DoS scenarios.

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target User | Architecture |
|---------|---------------|-------------|--------------|
| **NanoBot** | Runtime Context, WebUI Reliability, Provider Compatibility | Power Users / Prosumers | Monolithic Agent Loop |
| **Hermes Agent** | NixOS, Desktop Integration, Code Refactoring | Developers / DevOps | Modular Plugin System |
| **ZeroClaw** | Adaptive Thinking, A2A Protocol, Interoperability | Enterprise / Agentic Teams | Multi-Channel Router |
| **PicoClaw** | Upstream Sync, Channel Reliability (Slack/QQ) | Community / Hobbyists | Structured Go Agent |
| **CoPaw** | Mobile Experience, Multi-tenant "Hub" | Teams / Enterprise | React Native + Web |
| **LobsterAI** | Browser Integration, Subscription UX | Consumers / Creators | React SPA |

---

## 6. Community Momentum & Maturity

*   **Rapid Iteration (High Velocity):** **ZeroClaw** and **CoPaw** are in "feature avalanche" phases (50+ PRs), indicating a large, active contributor base pushing for rapid feature expansion, though they face bottlenecks in review speed.
*   **Stabilization & Refactoring:** **NanoBot**, **IronClaw**, and **PicoClaw** are in post-release stabilization phases. They are actively fixing regressions (e.g., NanoBot's context loss, IronClaw's timeout issues) and improving code hygiene.
*   **Niche/Single-Track:** **Moltis** and **TinyClaw** show very low activity, suggesting they may be specialized tools or niche projects rather than general-purpose platforms.
*   **Maturity:** **Hermes Agent** and **LobsterAI** show signs of maturation, focusing on desktop polish, build stability, and business features (subscriptions), moving from experimental to production-ready.

---

## 7. Trend Signals

1.  **Shift to Adaptive Thinking:** The industry is moving away from fixed context windows to adaptive thinking budgets (e.g., Claude Fable 5.1). Projects like ZeroClaw are already adapting providers to handle this dynamic, signaling a necessary architectural shift for future compatibility.
2.  **Multi-Agent Orchestration:** There is a clear trend toward **Agent-to-Agent (A2A)** communication and external CLI integration (AGY). Projects like ZeroClaw and Moltis are building the "plumbing" required for autonomous multi-agent swarms rather than single-agent chatbots.
3.  **Observability as a Standard:** Users are demanding granular visibility into token usage, model speed, and context compaction (NanoBot, Hermes Agent). This indicates that the user base is shifting from "playing with the AI" to "using it for production workloads."
4.  **Platform Fragmentation:** To maintain relevance, projects are actively adding support for mobile (CoPaw), specific ecosystems (QQ via PicoClaw, AGY via Moltis), and desktop-native features (Browser integration in LobsterAI).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-09-04

## 1. Today's Overview

NanoBot exhibited **high development velocity** on 2026-09-04, with 30 PRs and 5 issues updated in a single day — a strong signal of active contributor engagement. Two bug fixes were merged today (PR #5654 restoring current-time runtime context, PR #5655 isolating slow WebSocket clients), addressing regressions introduced in the 0.3.0 refactor cycle. The project is in a stabilization phase following the 0.3.0 release, with significant effort directed at WebUI reliability, provider compatibility, and runtime-context integrity. No new release was published today.

## 2. Releases

No new releases were published today. The project appears to be holding at **0.3.0**, with active bug-fixing PRs targeting regressions from that version.

## 3. Project Progress

**Merged / Closed PRs today:**

- **PR #5654** — *fix(agent): restore current-time runtime context via a built-in provider* — Restores the `Current Time` runtime-context block that was lost during the #4891 refactor. This directly closes issue #5645.
- **PR #5655** — *fix(websocket): isolate slow clients from outbound fanout* — Adds bounded FIFO queues and per-connection writer tasks to prevent a single slow TUI client from blocking WebSocket fanout to all other connections. Closes the regression described in issue #5644's broader context.
- **PR #5657** — *refactor(webui): extract outbound wire encoding* — Extracts typed payload encoders (`recovery_state`, `turn_end`) from `WebSocketChannel`, replacing ad-hoc transport methods with a shared `send_payload` primitive. Code-health refactor with no user-facing changes.

**PRs advanced today (open, recently updated):**

- **PR #5662** — Sends `x-opencode-session` header for OpenCode Zen/Go session affinity; required after OpenCode's 2026-09-06 enforcement deadline.
- **PR #5660** — Adds model generation speed (tokens/sec) to the WebUI context usage popover, addressing feature request #5631.
- **PR #5656** — Makes context compaction visible across channels via structured lifecycle events and a `/compact` command.
- **PR #5659** — Adds `ephemeral` opt-out flag to `RuntimeContextBlock`, solving the problem of session-constant context being replayed unnecessarily.
- **PR #5658** — Fixes session title generation when the frontend envelope lacks the `webui` flag (closes #5647).

## 4. Community Hot Topics

| Issue / PR | Activity | Link |
|---|---|---|
| [#5661 / #5662](https://github.com/HKUDS/nanobot/issues/5661) — OpenCode session-affinity header | Created & updated today; time-sensitive (deadline 2026-09-06) | [Issue](https://github.com/HKUDS/nanobot/issues/5661) · [PR](https://github.com/HKUDS/nanobot/pull/5662) |
| [#5631 / #5660](https://github.com/HKUDS/nanobot/issues/5631) — WebUI context & speed display | Community-requested feature; PR #5660 implements it today | [Issue](https://github.com/HKUDS/nanobot/issues/5631) · [PR](https://github.com/HKUDS/nanobot/pull/5660) |
| [#5645](https://github.com/HKUDS/nanobot/issues/5645) — Current Time runtime context absent in 0.3.0 | Critical regression; now closed via PR #5654 | [Issue](https://github.com/HKUDS/nanobot/issues/5645) |
| [#5644](https://github.com/HKUDS/nanobot/issues/5644) — Channel locale registry drops concurrent locales | Concurrency bug in WebUI i18n; related to PR #5655's fanout fix | [Issue](https://github.com/HKUDS/nanobot/issues/5644) |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) — Langfuse tracing for Codex provider | Long-standing feature request (open since Aug 24); adds per-request Langfuse generations | [PR](https://github.com/HKUDS/nanobot/pull/5520) |

**Analysis:** The dominant theme is **regression remediation** from the 0.3.0 refactor — runtime context loss, WebUI session metadata gaps, and WebSocket concurrency issues. The OpenCode header issue (#5661) reflects external dependency pressure requiring urgent action. The community is actively engaging with UX visibility improvements (context usage, model speed), suggesting users are moving from adoption to production-style usage where observability matters.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR | Link |
|---|---|---|---|---|
| 🔴 **High** | [#5645](https://github.com/HKUDS/nanobot/issues/5645) | `Current Time` runtime context absent by default in 0.3.0; regression from #4891 refactor | ✅ **PR #5654** (merged) | [Issue](https://github.com/HKUDS/nanobot/issues/5645) |
| 🔴 **High** | [#5647](https://github.com/HKUDS/nanobot/issues/5647) | WebUI session titles not generated when envelope lacks `webui` flag | ✅ **PR #5658** (open) | [Issue](https://github.com/HKUDS/nanobot/issues/5647) |
| 🟡 **Medium** | [#5644](https://github.com/HKUDS/nanobot/issues/5644) | Channel locale registry drops a locale under concurrent startup load | Partially addressed by PR #5655's fanout isolation | [Issue](https://github.com/HKUDS/nanobot/issues/5644) |
| 🟡 **Medium** | [#5648](https://github.com/HKUDS/nanobot/pull/5648) | Session metadata not checked during WebUI title generation (follow-up to #5647) | Open, awaiting review | [PR](https://github.com/HKUDS/nanobot/pull/5648) |
| 🟢 **Low** | [#5490](https://github.com/HKUDS/nanobot/pull/5490) | Aggregate turn token usage display unclear when multiple prompt reports are merged | Open, in review | [PR](https://github.com/HKUDS/nanobot/pull/5490) |
| 🟢 **Low** | [#5431](https://github.com/HKUDS/nanobot/pull/5431) | Background task failures silently swallowed (no error logging) | Open, in review | [PR](https://github.com/HKUDS/nanobot/pull/5431) |

**Notable regression:** The 0.3.0 refactor (#4891) removed the default `Current Time` runtime-context injection, affecting all users who relied on automatic timezone-aware context. This has now been fixed in PR #5654.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Status | Link |
|---|---|---|---|
| WebUI: display context usage + model speed | [#5631](https://github.com/HKUDS/nanobot/issues/5631) | ✅ Implemented in PR #5660 | [Issue](https://github.com/HKUDS/nanobot/issues/5631) |
| Context compaction visibility in channels | [#5656](https://github.com/HKUDS/nanobot/pull/5656) | 🔄 Open, in progress | [PR](https://github.com/HKUDS/nanobot/pull/5656) |
| Ephemeral runtime-context blocks (opt-out persistence) | [#5659](https://github.com/HKUDS/nanobot/pull/5659) | 🔄 Open, in progress | [PR](https://github.com/HKUDS/nanobot/pull/5659) |
| Langfuse tracing for Codex provider | [#5520](https://github.com/HKUDS/nanobot/pull/5520) | 🔄 Open since Aug 24 | [PR](https://github.com/HKUDS/nanobot/pull/5520) |
| `copy_file` / `move_file` filesystem tools | [#5626](https://github.com/HKUDS/nanobot/pull/5626) | 🔄 Open | [PR](https://github.com/HKUDS/nanobot/pull/5626) |
| Heartbeat: shared session + cheaper model override | [#4551](https://github.com/HKUDS/nanobot/pull/4551), [#4549](https://github.com/HKUDS/nanobot/pull/4549) | 🔄 Open since Jun 26 | [PR #4551](https://github.com/HKUDS/nanobot/pull/4551) · [PR #4549](https://github.com/HKUDS/nanobot/pull/4549) |
| Budget model-visible MCP schemas | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | 🔄 Open since Aug 13, conflict flagged | [PR](https://github.com/HKUDS/nanobot/pull/5388) |

**Roadmap prediction:** The next release (likely **0.3.1**) will probably include: PR #5654 (current-time fix), PR #5655 (WebSocket fanout isolation), PR #5658/#5648 (WebUI session title fixes), PR #5660 (model speed display), and PR #5662 (OpenCode header). PR #5656 (compaction visibility) and PR #5659 (ephemeral runtime context) are also strong candidates given their recent activity.

## 7. User Feedback Summary

- **Observability demand is rising.** Users want to see model speed, context usage, and compaction events in the WebUI — signals that the user base is shifting from experimental to production usage patterns where token costs and latency matter.
- **Regression frustration is real but being addressed.** The loss of `Current Time` context in 0.3.0 (#5645) and WebUI session title bugs (#5647) indicate the 0.3.0 refactor had insufficient integration testing. The rapid closure of these bugs (PR #5654 merged same day) is a positive signal.
- **External dependency pressure.** The OpenCode session-affinity header requirement (#5661) with a hard 2026-09-06 deadline shows users are integrated with upstream provider ecosystems and need Nanobot to stay compatible.
- **Tooling gaps.** The request for `copy_file` / `move_file` (#5626) reflects users hitting the limits of the current read/write/edit filesystem toolset and having to chain operations manually.
- **Satisfaction indicator:** High PR activity with multiple contributors (HaisamAbbas, chengyongru, GUTYL, dajiaohuang) suggesting a healthy, distributed contributor base rather than sole-maintainer dependency.

## 8. Backlog Watch

| PR / Issue | Age | Risk | Link |
|---|---|---|---|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) — Heartbeat model override | ~69 days | Medium; blocks cost-optimization for heartbeat users | [PR](https://github.com/HKUDS/nanobot/pull/4549) |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) — Heartbeat isolated_session config | ~69 days | Medium; pairs with #4549 | [PR](https://github.com/HKUDS/nanobot/pull/4551) |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) — Budget MCP schemas | ~22 days; conflict flagged | High; blocked on resolution | [PR](https://github.com/HKUDS/nanobot/pull/5388) |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) — Langfuse tracing for Codex | ~11 days | Medium; observability gap for Codex users | [PR](https://github.com/HKUDS/nanobot/pull/5520) |
| [#5639](https://github.com/HKUDS/nanobot/pull/5639) — Session labels & TUI streaming stability | ~2 days | Low; styling/usability fix | [PR](https://github.com/HKUDS/nanobot/pull/5639) |
| [#5626](https://github.com/HKUDS/nanobot/pull/5626) — copy_file / move_file tools | ~3 days | Low; feature request | [PR](https://github.com/HKUDS/nanobot/pull/5626) |

**Key concern:** PRs #4549 and #4551 (heartbeat features) have been open since mid-June with no recent activity. If these are important to maintainers, they may be deprioritized. PR #5388 has a conflict marker and needs resolution before it can proceed. The two heartbeat PRs, if merged, would significantly improve cost control for long-running heartbeat deployments.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

### **Hermes Agent Project Digest**  
**Date:** 2026-09-04  

---

### **1. Today's Overview**  
Hermes Agent shows moderate activity today with **13 issues** and **50 PRs** updated. The project is active in fixing stability issues (especially around cron workers, session management, and Desktop integration) while advancing architectural refactoring (code simplification) and NixOS compatibility. No new releases are available, but significant work is underway to address platform-specific bugs and improve tool interoperability.  

---

### **2. Releases**  
**None** – No new versions were released in the last 24 hours.  

---

### **3. Project Progress**  
- **Closed PRs:** 4 (e.g., `#65182` fixed CPython 3.14 compatibility for `DaemonThreadPoolExecutor`).  
- **Open PRs (Highlights):**  
  - `#102117`: Major refactoring reducing source LOC by **34%** and decomposing monolithic files (zero behavior change).  
  - `#102886`: Fixes async auxiliary calls dropping API-key providers.  
  - `#102880`: Isolates MCP plugin failures from transport health checks.  
  - `#102878`: Security hardening for memory/state databases.  

---

### **4. Community Hot Topics**  
#### **Most Discussed Issues (by comments):**  
1. **[#66616](https://github.com/nousresearch/hermes-agent/issues/66616)** – Skills index stale (degraded, 29.8h old).  
   - **Needs:** Automated index rebuilding and monitoring.  
2. **[#94726](https://github.com/nousresearch/hermes-agent/issues/94726)** – Umbrella tracker for Desktop Bot Mode bugs.  
   - **Needs:** Consolidated tracking for cross-plugin issues.  
3. **[#102486](https://github.com/nousresearch/hermes-agent/issues/102486)** – Cron worker OOMPolicy=kill fails on systemd 249.  
   - **Needs:** Compatibility fix for systemd configurations.  

#### **Most Discussed PRs:**  
1. **[#102117](https://github.com/nousresearch/hermes-agent/pull/102117)** – Refactoring (34% LOC reduction).  
2. **[#102870](https://github.com/nousresearch/hermes-agent/pull/102870)** – NixOS cron worker fixes.  
3. **[#102886](https://github.com/nousresearch/hermes-agent/pull/102886)** – Async API-key provider fix.  

---

### **5. Bugs & Stability**  
| **Bug Severity** | **Issue** | **Summary** | **Fix PR** |  
|------------------|-----------|-------------|------------|  
| **P1** | [#102486](https://github.com/nousresearch/hermes-agent/issues/102486) | Cron workers fail on systemd 249 (`OOMPolicy=kill` rejected). | — |  
| **P1** | [#101279](https://github.com/nousresearch/hermes-agent/issues/101279) | Session exclusivity not configurable for shared-brain deployments. | — |  
| **P2** | [#102868](https://github.com/nousresearch/hermes-agent/issues/102868) | Desktop spawns `wsl.exe` on WSL-less Windows. | [#102882](https://github.com/nousresearch/hermes-agent/pull/102882) |  
| **P2** | [#102864](https://github.com/nousresearch/hermes-agent/issues/102864) | Context compaction drops dynamically injected `message_agent`. | — |  
| **P2** | [#102871](https://github.com/nousresearch/hermes-agent/issues/102871) | Homebrew gateway drops `HERMES_BUNDLED_LOCALES`. | — |  

---

### **6. Feature Requests & Roadmap Signals**  
- **German i18n Support:** [#102842](https://github.com/nousresearch/hermes-agent/issues/102842) – Desktop app missing German locale.  
- **Unified Package Manager:** [#102765](https://github.com/nousresearch/hermes-agent/pull/102765) – Clean lineage for Windows/Unix tooling.  
- **Per-Session Exclusivity:** [#101279](https://github.com/nousresearch/hermes-agent/issues/101279) – Critical for multi-user shared-brain setups.  

---

### **7. User Feedback Summary**  
- **Pain Points:**  
  - Desktop freezes on large sessions (1,500+ messages).  
  - Cron workers failing on systemd 249 and NixOS.  
  - Inconsistent session handling in shared deployments.  
- **Satisfaction:** Positive on refactoring (zero behavior change) and NixOS fixes, but frustrated by Desktop stability and session management.  

---

### **8. Backlog Watch**  
- **Unanswered Critical Issues:**  
  - [#66616](https://github.com/nousresearch/hermes-agent/issues/66616) – Skills index staleness (153 comments).  
  - [#94726](https://github.com/nousresearch/hermes-agent/issues/94726) – Desktop Bot Mode bug tracker (7 comments).  
- **Stalled PRs:**  
  - [#82243](https://github.com/nousresearch/hermes-agent/pull/82243) – Deferred tools in `execute_code` (awaiting decision).  

---  
**Project Health:** Stable but requires attention to Desktop stability and cross-platform compatibility.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-09-04

## 1. Today's Overview

PicoClaw remains actively maintained with 15 GitHub events in the past 24 hours (6 issues, 9 PRs), indicating steady community engagement. No new releases were published, but a critical UI performance fix (PR #3347) targeting the long-standing web chat lag issue (#3281) has been submitted and is awaiting review. Dependency maintenance continues through Dependabot, with 5 dependency bumps filed. The project shows a healthy open-to-closed issue ratio and ongoing contributor participation, though several issues carry the `[stale]` label, suggesting some community attention gaps.

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

**Closed/Merged PRs:**

- **[PR #2810](https://github.com/sipeed/picoclaw/pull/2810)** — *Sync with upstream/main (1095 commits) + forward-port magicform customizations.* Merged on 2026-09-04. This is a major synchronization effort bringing ~1095 upstream commits and forward-porting 6 customization commits onto a restructured layout (agent loop split into `agent_*.go`, tools reorganized into `pkg/tools/{fs,integration}/`, channel config moved). This significantly advances codebase hygiene and feature parity with upstream.

- **[PR #3329](https://github.com/sipeed/picoclaw/pull/3329)** — *fix(line): warn on inert webhook_host/webhook_port instead of seeding them.* Closed on 2026-09-03. Fixes #3328 by addressing the LINE channel's unused `webhook_host`/`webhook_port` configuration, which was declared and defaulted but never actually read by the channel implementation.

**Open PRs Under Review:**

- **[PR #3340](https://github.com/sipeed/picoclaw/pull/3340)** — *fix(slack): set FileSize on media upload params.* Addresses #3338.
- **[PR #3347](https://github.com/sipeed/picoclaw/pull/3347)** — *fix laggy interface.* Addresses #3281.
- **[PR #3360–3364](https://github.com/sipeed/picoclaw/pulls)** — Five Dependabot dependency bumps (AWS SDK v2, golang.org/x/term, irc-go, protobuf, Lark SDK).

---

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Link |
|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI chat input lag | 9 | 2 | [Issue](https://github.com/sipeed/picoclaw/issues/3281) |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) Antigravity 429 error | 3 | 0 | [Issue](https://github.com/sipeed/picoclaw/issues/3339) |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) Slack media upload failure | 3 | 0 | [Issue](https://github.com/sipeed/picoclaw/issues/3338) |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) QQ channel 401 error | 3 | 0 | [Issue](https://github.com/sipeed/picoclaw/issues/3349) |
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) QQ channel root cause analysis | 0 | 0 | [Issue](https://github.com/sipeed/picoclaw/issues/3365) |

**Analysis:**

- **Web UI performance (#3281)** is the most discussed issue (9 comments, 2 upvotes), reflecting a significant user pain point around scalability of chat history in the web interface. The existence of PR #3347 suggests the community is actively contributing fixes.
- **QQ channel authentication (#3349, #3365)** is a cluster of related issues where the botgo SDK + resty combination produces 401 errors. Issue #3365 provides a detailed root cause analysis pointing to `botgo v0.2.1` and `resty >= v2.17`, indicating a dependency compatibility problem rather than a PicoClaw logic bug.
- **Slack media uploads (#3338)** and **Google Antigravity rate limits (#3339)** reflect integration-layer issues tied to third-party API behavior changes or SDK misconfiguration.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|---|---|---|---|
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input becomes very laggy with long history | [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) |
| **High** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack media upload always fails (FileSize = 0) | [PR #3340](https://github.com/sipeed/picoclaw/pull/3340) |
| **Medium** | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ channel returns 401 "Authorization参数格式错误" | — |
| **Medium** | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ channel root cause: botgo v0.2.1 + resty >= v2.17 incompatibility | — |
| **Medium** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Google Antigravity returns generic 429 despite valid OAuth scopes | — |
| **Low** | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | RKLLM abnormal replies on ARM dev boards | — |

**Notes:**
- The two highest-severity bugs (UI lag, Slack media) both have open fix PRs under review, which is a positive signal.
- The QQ channel issue appears to be an upstream dependency regression (`botgo`/`resty`) rather than a PicoClaw code bug; resolution likely requires a dependency update or workaround in PicoClaw's HTTP client configuration.
- The RKLLM issue (#3346) is environment-specific and low-volume but may indicate model-serving integration gaps on edge ARM platforms.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed in the last 24 hours. However, the following items signal user demand:

- **QQ Channel support reliability** — The cluster of QQ-related issues (#3349, #3365) suggests users are actively adopting the QQ channel but hitting stability walls. A roadmap priority would be hardening the botgo integration or publishing a known-versions matrix.
- **Slack media support** — Issue #3338 and PR #3340 indicate users expect image/media sharing in Slack. Fixing this is likely to land in the next patch release.
- **Web UI performance at scale** — Issue #3281 reveals that the current UI doesn't handle long conversation histories well. Users are pushing for responsiveness improvements, which PR #3347 addresses.

**Prediction:** The next release (likely 0.3.2) will include the Slack media fix (#3340), the QQ channel dependency investigation results, and the web UI lag fix (#3347), along with the updated dependency versions from the Dependabot PRs.

---

## 7. User Feedback Summary

**Pain Points:**
1. **Web UI lag with long history** (#3281) — The most upvoted issue (2 👍). Users report the chat input becomes unresponsive after accumulating conversation history, impacting both desktop and mobile browsers. This is a quality-of-life issue affecting daily usage.
2. **Slack media uploads broken** (#3338) — Users cannot send images via Slack because `FileSize` is not set in the upload parameters. This is a regression or incomplete implementation.
3. **QQ channel authentication failures** (#3349, #3365) — Chinese-language users report 401 errors from the QQ channel, with one contributor providing a detailed root cause pointing to `botgo`/`resty` incompatibility. This blocks adoption in the QQ ecosystem.
4. **Google Antigravity 429 errors** (#3339) — Users with valid OAuth scopes still encounter quota errors, suggesting either a misconfiguration on the user side or a missing error-message refinement in PicoClaw's error handling.
5. **RKLLM abnormal responses** (#3346) — Edge computing users on ARM boards report unexpected model output, indicating potential quantization or inference pipeline issues.

**Satisfaction Signals:**
- The active contribution of fix PRs (#3347, #3340) by community members suggests a healthy contributor base that is engaged and responsive.
- The large upstream sync PR (#2810) with 1095 commits demonstrates that maintainers are actively keeping the project aligned with upstream, which is reassuring for long-term viability.

---

## 8. Backlog Watch

| Issue | Age | Status | Concern |
|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI lag | ~45 days | Open, `[stale]` | High-impact bug with a fix PR pending review; needs maintainer triage to merge. |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) Slack media | ~18 days | Open, `[stale]` | Fix PR #3340 exists but unmerged; quick win for integration quality. |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) Antigravity 429 | ~18 days | Closed | Resolved but without clear public resolution notes. |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) QQ channel 401 | ~5 days | Open | Dependency issue; needs maintainer decision on botgo/resty version pinning. |
| [#3346](https://github.com/sipeed/picoclaw/issues/3346) RKLLM replies | ~8 days | Open, `[stale]` | Niche but important for edge-computing users; needs investigation or documentation. |
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) QQ root cause | <1 day | Open | Technical deep-dive; may need a maintainer-led dependency update decision. |

**Key Watch Items:**
- **PR #3347** (web UI lag fix) and **PR #3340** (Slack media fix) are the two highest-impact pending PRs. Timely review and merge would resolve the most user-facing bugs.
- The **QQ channel dependency issue** (#3349/#3365) requires a maintainer decision: whether to pin `botgo`/`resty` to compatible versions, or to file an upstream bug.
- Several issues carry the `[stale]` label despite being substantively important — this may reflect insufficient maintainer triage rather than lack of user interest.

---

*Data source: github.com/sipeed/picoclaw — 2026-09-04*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest**  
*Date: 2026-09-04*  

---

### 1. Today's Overview
NanoClaw shows active development with 21 repository updates in the last 24 hours (4 issues, 17 PRs). The project remains stable with no new releases, but a mix of bug fixes, feature additions, and configuration improvements are in progress. Activity is balanced between core infrastructure (containers, agent runner) and integrations (Zapier, Cursor), indicating steady momentum toward enhancing agent orchestration and container management.

---

### 2. Releases
**None.** No new releases were published in the last 24 hours.

---

### 3. Project Progress
- **Merged/Closed PRs Today:** 4 (all closed, from a pool of 17 total updated PRs).  
- **Key Advances:**  
  - **Security & Containers:** PR #3680 fixes a mount-security bypass vulnerability, closing an issue where allowlisted-extra mounts could be exploited.  
  - **Chat SDK:** PRs #2232 and #2231 (both closed) improve adapter compatibility and prevent Markdown round-trip issues.  
  - **Dependencies:** PR #3461 (closed) bumps chat SDK versions across adapters to 4.38.1, resolving version mismatches.  

---

### 4. Community Hot Topics
**Most Active Issues:**  
- **#3714 (Operator env overrides):** Discusses missing environment variable propagation (e.g., `CLAUDE_CODE_AUTO_COMPACT_WINDOW`) from host to session containers. Needs plumbing to honor documented overrides.  
  [GitHub Issue #3714](https://github.com/qwibitai/nanoclaw/issues/3714)  
- **#3706 (ncl groups config add-mount):** Reports a bug where absolute container paths break double-nested path generation in `ncl groups config add-mount`.  
  [GitHub Issue #3706](https://github.com/qwibitai/nanoclaw/issues/3706)  

**Most Active PRs:**  
- **#3715 (Zapier MCP skill):** Adds a skill to securely integrate Zapier’s MCP server without exposing tokens in config.  
  [GitHub PR #3715](https://github.com/qwibitai/nanoclaw/pull/3715)  
- **#3711 (Router optimization):** Defer expensive inbound content processing until agents actually receive messages, reducing unnecessary work.  
  [GitHub PR #3711](https://github.com/qwibitai/nanoclaw/pull/3711)  

---

### 5. Bugs & Stability
**Top Bugs Reported Today:**  
1. **#3714 (Operator env overrides):** Critical. Environment variables for operator settings (e.g., auto-compact window) are not forwarded to session containers, requiring manual patching.  
   [GitHub Issue #3714](https://github.com/qwibitai/nanoclaw/issues/3714)  
2. **#3706 (Absolute path mount bug):** High. `ncl groups config add-mount --container` fails silently with absolute paths, breaking nested mount paths.  
   [GitHub Issue #3706](https://github.com/qwibitai/nanoclaw/issues/3706)  
3. **#3709 (SQLite test fixtures):** Medium. Concurrent vitest runs overwrite each other’s databases due to hardcoded `/tmp` paths.  
   [GitHub Issue #3709](https://github.com/qwibitai/nanoclaw/issues/3709)  
4. **#3705 (Task recurrence):** Medium. `ncl tasks update --recurrence` doesn’t recompute `process_after`, leaving tasks on old schedules.  
   [GitHub Issue #3705](https://github.com/qwibitai/nanoclaw/issues/3705)  

**Fix PRs:**  
- PR #3680 (closed) addresses the mount-security bypass in #3706.  
- PR #3440 (open) fixes SELinux mounts and database connection issues.  

---

### 6. Feature Requests & Roadmap Signals
**Notable Feature Requests:**  
- **#3715 (Zapier MCP skill):** Secure integration of Zapier’s hosted MCP server, likely to land in a future skill release.  
- **#3711 (Lazy content routing):** Performance optimization for message content processing, aligning with roadmap goals for efficient agent workflows.  
- **#3713 (Per-group delivery modes):** Adds configuration for envelope vs. tool-based delivery, supporting diverse model capabilities.  

**Predicted Next Version:**  
- Integration skills (Zapier, Cursor) and container configuration fixes (mount paths, env overrides).  

---

### 7. User Feedback Summary
**Pain Points:**  
- Users struggle with absolute path handling in container mounts (Issue #3706).  
- Operator environment variables are inaccessible without patching (Issue #3714).  
- Concurrent test runs fail due to SQLite fixture conflicts (Issue #3709).  

**Satisfaction Signals:**  
- Active PRs for security fixes and performance optimizations indicate responsive maintenance.  
- New skills (Zapier, Cursor) address integration needs, enhancing ecosystem flexibility.  

---

### 8. Backlog Watch
**Long-Standing Issues:**  
- **#1820 (Env overrides):** Follow-up to #3714, unresolved since 2026-09-04.  
- **#1879 (Voice transcription):** Resubmitted as PR #2003 (open since 2026-04-25).  

**PRs Needing Review:**  
- **#3715 (Zapier skill):** Ready for merge, pending review.  
- **#3711 (Router optimization):** Complex change, requires core team sign-off.  

---

**Links:**  
- [NanoClaw GitHub Repository](https://github.com/qwibitai/nanoclaw)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-09-04

## 1. Today's Overview

IronClaw is in a period of high development velocity with **20 PRs updated** and **8 issues touched** in the last 24 hours, indicating strong contributor momentum. The project is actively advancing both its core agent loop architecture (prompt budget derivation, subagent reliability, LLM cache key handling) and the WebUI v2 experience (command card behavior, slash-command menu polish). No new releases were published today, but multiple significant features and fixes are in open review. Project health is robust: most PRs carry **low risk** ratings, and the CI backlog has been partially unblocked by recent merges.

## 2. Releases

**No new releases published today.**

---

## 3. Project Progress

### Merged / Closed Today
- **#8033** — Remove redundant `@ts-nocheck` directives and add CI ratchet to prevent new suppressions (41 files cleaned). *italic-jinxin*
- **#8037** — Ratchet TypeScript suppressions in WebUI v2; added legacy suppression baseline. *italic-jinxin*
- **#8060** — Increased timeout headroom for whole-tree architecture scans in CI (were failing at ~177s against 180s limit). *henrypark133*
- **#8043** — Coalesce streamed text updates in `ProviderStreamSink` to eliminate O(N·k) re-sanitization cost. *henrypark133*
- **#8058** — Fixed test using stale extension ID `"web-push"` (renamed to `"web-app"`). *henrypark133*
- **#8055** — Unblocked `main` branch: fixed panic in `sidebar_trace_credits_card_assets_are_embedded` unit test. *henrypark133*
- **#8046** — Subagent child approval/auth gate now reaches the owner's inbox (R3 slice 3a). *henrypark133*
- **#7984** — `tool_search` replies now sized to the model's first-look envelope instead of an independent budget. *henrypark133*

### Key Open PRs Under Review
- **#8053** — **feat(loop):** Derive prompt context budget from the model's advertised context window (90% heuristic) rather than a hardcoded 128k/20k constant. [Link](https://github.com/nearai/ironclaw/pull/8053)
- **#8067** — **feat(subagent):** Boot/periodic sweep for stranded background deliveries, counters, and e2e revival (R4). Addresses a durable-inbox edge case where a result written into a parent's inbox is never read if the parent thread never runs again. [Link](https://github.com/nearai/ironclaw/pull/8067)
- **#8062** — **feat(llm):** Send conversation cache keys on all OpenAI request paths, preserving a stable pseudonymous key per conversation across turns and tool-loop iterations. [Link](https://github.com/nearai/ironclaw/pull/8062)
- **#8059** — **fix(responses):** `POST /api/v1/responses/{id}/cancel` currently returns 400 in all states; corrects cancel reason parsing. *jlwaugh* [Link](https://github.com/nearai/ironclaw/pull/8059)
- **#8056** — **fix(host-api):** Prevent panic from malformed embedded tool-result text (closing JSON delimiter before opening delimiter). *BenKurrek* [Link](https://github.com/nearai/ironclaw/pull/8056)
- **#8054** — **fix(assistant):** Check pairing before command admission so first-contact Telegram users see the connect notice immediately. *thisisjoshford* [Link](https://github.com/nearai/ironclaw/pull/8054)

### WebUI v2 Polish (All by *italic-jinxin*)
- **#8071** — Preserve command result card height (fixes flex-collapse bug). [Link](https://github.com/nearai/ironclaw/pull/8071)
- **#8070** — Align slash-command menu metadata with consistent responsive grid. [Link](https://github.com/nearai/ironclaw/pull/8070)
- **#8069** — Add dismiss actions to command result cards. [Link](https://github.com/nearai/ironclaw/pull/8069)
- **#8068** — Keep active slash-command visible during keyboard/mouse navigation. [Link](https://github.com/nearai/ironclaw/pull/8068)

---

## 4. Community Hot Topics

| # | Type | Title | Activity |
|---|------|-------|----------|
| #7903 | Issue | Decision spike: persistent per-user sandboxed executor behind trusted host kernel | 2 comments, updated today |
| #8052 | Issue | Daily ironclaw failure taxonomy — 2026-09-03 | Benchmark analysis |
| #8057 | Issue | Prompt budget should account for non-transcript prompt material | Linked to #8053 |

**Analysis:** Issue **#7903** is the most discussion-heavy open item. It addresses a fundamental architectural tension: the current Reborn design keeps the canonical agent loop on the trusted host and shells out only `builtin.shell` commands to a per-user Docker sandbox. Every new CLI tool requires host-to-sandbox plumbing. The community is weighing whether a persistent per-user sandboxed executor behind the trusted host kernel is worth the architectural shift — a high-impact, high-risk decision that will shape the project's security model.

Issue **#8057** (prompt budget not accounting for identity/skills/tool schemas) is directly addressed by the open PR **#8053**, which derives the budget from the model's advertised window and keeps the flat 20k reservation for system content.

---

## 5. Bugs & Stability

| Severity | Item | Status |
|----------|------|--------|
| **Critical** | `main` branch failing: unit test panic in `sidebar_trace_credits_card_assets_are_embedded` | ✅ Fixed in **#8055** (merged) |
| **High** | `POST /api/v1/responses/{id}/cancel` returns 400 in all states; run never actually cancels | 🔄 Open in **#8059** |
| **High** | Malformed embedded tool-result text causes host-api panic (closing JSON before opening) | 🔄 Open in **#8056** |
| **Medium** | Command result cards collapse to horizontal lines as they accumulate in transcript | 🔄 Open in **#8071** (unmerged) |
| **Medium** | Slash-command menu does not auto-scroll to keep active option visible | 🔄 Open in **#8068** (unmerged) |
| **Medium** | Architecture scan CI jobs hitting 180s timeout at ~177s (flaky) | ✅ Fixed in **#8060** (merged) |
| **Low** | TypeScript `@ts-nocheck` sprawl across ~41 files | ✅ Fixed in **#8033/#8037** (merged) |

**OfficeQA benchmark** (#8052) reports 63 non-passes, all classified as genuine model-quality errors by `deepseek-v4-flash` over OCR'd Treasury Bulletins — no tooling regressions detected.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release |
|---------|--------|---------------------------|
| Prompt context budget derived from model's advertised window (not hardcoded) | #8057 / #8053 | **High** — PR already open, core contributor authored |
| Dismissible command result cards | #8064 / #8069 | **High** — PR open, UX polish, low risk |
| Persistent per-user sandboxed executor behind host kernel | #7903 | **Medium** — Architectural spike; needs decision before implementation |
| Subagent boot/periodic sweep for stranded deliveries | #8067 | **Medium** — R4 debt, complex but well-scoped |
| Conversation cache keys on all OpenAI-compatible paths | #8062 | **High** — Cost-optimization feature, low risk |
| Claude family cache-gate expansion (denylist approach) | #8044 | **Medium** — Addresses newer Claude families falling through allowlist |

**Roadmap Signal:** The project is clearly investing in **subagent reliability** (R3/R4 slices) and **cost-aware LLM routing** (cache keys, prompt budget derivation). The WebUI v2 is receiving sustained polish attention from *italic-jinxin*, suggesting a push toward a more mature frontend experience.

---

## 7. User Feedback Summary

**Pain Points:**
1. **Command result cards consume unbounded conversation space** with no way to dismiss them (#8064). Users executing slash commands repeatedly report cluttered conversations.
2. **Slash-command menu navigation is broken** — active options scroll out of view during both keyboard and mouse use (#8063, #8068).
3. **First-contact Telegram users see the wrong message** — command inventory appears before the pairing/connect notice due to ordering bug in assistant workflow (#8054).
4. **Prompt context budget is misleading** — the loop believes it has headroom while identity/skills/tool schemas push the actual request over the model's window (#8057).
5. **Cancel API is non-functional** — `POST /api/v1/responses/{id}/cancel` always returns 400 (#8059).

**Satisfaction Signals:**
- CI stability has improved; the `main` branch was unblocked after the test panic was fixed.
- Benchmark taxonomy (#8052) shows non-passes are model-quality, not tooling bugs — a positive signal for the agent's core capabilities.
- TypeScript hygiene is being systematized with a ratchet pattern, reducing long-term maintenance burden.

---

## 8. Backlog Watch

| # | Type | Title | Concern |
|---|------|-------|---------|
| #7903 | Issue | Decision spike: persistent per-user sandboxed executor | **Stale since Aug 26** — only 2 comments; high-impact architectural decision needing maintainer guidance |
| #8059 | PR | fix(responses): send cancel reason the product surface accepts | **Open since Sep 3** — breaks a core API contract; unpaired users hit a dead end |
| #8056 | PR | fix(host-api): avoid malformed preview range panic | **Open since Sep 3** — panic on malformed input is a stability risk |
| #8067 | PR | feat(subagent): boot/periodic sweep for stranded deliveries | **Open since Sep 4** — large PR (XL size); needs thorough review before merge |
| #8053 | PR | feat(loop): derive prompt context budget from model window | **Open since Sep 3** — XL size, medium risk; touches core loop behavior |

**Recommendation:** Maintainers should prioritize triaging **#7903** (architectural decision) and **#8059** (broken cancel API) as they block user-facing functionality. The WebUI polish PRs (#8068–#8071) are low-risk and ready for quick merge to unblock the frontend experience.

---

*Generated from GitHub data as of 2026-09-04. Source: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-09-04
**Project:** LobsterAI (netease-youdao/LobsterAI)

## 1. Today's Overview
LobsterAI experienced a highly productive day characterized by significant repository maintenance and stability improvements. With 38 pull requests updated in the last 24 hours, the project shows strong momentum, particularly in fixing build pipelines, browser integrations, and in-app user experience flows. A major release (2026.9.3) was pushed out earlier today, addressing critical stability concerns, while the community actively worked on refining the collaborative workspace and subscription management features.

## 2. Releases
**Version 2026.9.3** (Released: 2026-09-03)
This release focuses on enhancing the user onboarding experience and fixing browser integration issues.
*   **What's Changed:**
    *   **Coworking:** Added a login prompt modal to prevent unauthenticated users from initiating chats, improving workflow integrity. (PR #2573)
    *   **Browser:** Added an interactive in-app browser feature. (PR #2574)
    *   **Onboarding:** Feature updates included (marked as `feat(onboarding)`).

## 3. Project Progress
**Pull Request Activity:** 38 PRs updated (33 Closed/Merged, 5 Open).
The bulk of the work today focused on stabilization and UI polish:
*   **Build & CI Stability:** Significant effort was invested in fixing the CI pipeline. PR #2616 restricted the duration of `npm audit` commands to prevent timeouts during dependency installation on Windows.
*   **Browser & Login Improvements:** PR #2615 fixed support for Unicode paths on Windows and improved error handling for the internal browser launcher. PR #2617 (Open) refines in-app login feedback and tab controls.
*   **Subscription & Resource Sync:** PR #2613 was merged to enhance the subscription recovery guidance and synchronize resource states across Artifacts and the library, improving the post-purchase user experience.
*   **Renderer/UI Fixes:** Multiple PRs addressed minor UI regressions, including voice quota messaging, bot card layout, sidebar promo tips, and text input context menus (Cut/Copy/Paste).

## 4. Community Hot Topics
*   **Issue #1071 (Open) - Critical Data Integrity Bug:**
    *   **Topic:** SQLite Storage Layer Failure.
    *   **Summary:** A high-severity report identifies three critical defects: `ON DELETE CASCADE` failure leading to orphaned messages, non-atomic write failures causing data corruption, and a `storeInitPromise` timeout causing permanent system failure.
    *   **Analysis:** This is the only active issue. It represents a fundamental reliability risk that could lead to data loss in production environments. The report was created in March but updated today, indicating the maintainer is aware but the fix has not yet been implemented.

## 5. Bugs & Stability
**Severity Ranking:**

1.  **High: SQLite Storage Corruption (Issue #1071)**
    *   **Description:** The SQLite storage layer suffers from data integrity issues where orphaned messages accumulate and potential crashes can corrupt the database due to non-atomic writes.
    *   **Status:** **Unresolved**. This is a critical stability issue requiring immediate architectural review.

2.  **Medium: CI/Build Pipeline Instability (PR #2616)**
    *   **Description:** The skill audit duration was previously unbounded, causing build failures on Windows.
    *   **Status:** **Fixed**. PR #2616 successfully capped the audit duration to 90 seconds.

3.  **Low: Browser & Login UI Glitches**
    *   **Description:** Minor issues with in-app browser credential saving, tab controls, and login feedback modals.
    *   **Status:** **Fixed**. PRs #2615, #2617, and #2612 address these specific UX friction points.

## 6. Feature Requests & Roadmap Signals
*   **In-App Browser & Collaboration:** The integration of an interactive browser (PR #2574) and the "Cowork" login prompt (PR #2573) indicate a roadmap shift towards deeper browser integration and smoother collaboration workflows.
*   **Subscription Recovery UX:** The work on subscription recovery guidance (PR #2613) suggests a focus on monetization retention and user onboarding flow optimization.
*   **Text Input Controls:** The addition of a main-window context menu for text inputs (PR #2503) highlights an effort to standardize the input experience across the application, moving away from OS-specific defaults.

## 7. User Feedback Summary
*   **Pain Point - Reliability:** Users are concerned about data safety, evidenced by the detailed report on SQLite failures. They expect robust data persistence.
*   **Pain Point - Usability:** There has been feedback regarding the clarity of login prompts and the usability of the in-app browser interface, specifically regarding tab management and credential saving.
*   **Pain Point - Build Experience:** Developers report issues with Windows build stability, particularly around dependency auditing.

## 8. Backlog Watch
*   **Issue #1071 (SQLite Storage Layer):** This issue has been open since March 2026 and remains unresolved. It requires immediate attention from the backend/storage team to ensure data integrity. Maintainer action is critical here.
*   **PR #2617 (In-app Browser Improvements):** This is the only PR currently open. While it improves on recent changes, the maintainers should aim to close it to maintain a clean release cycle.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-09-04

---

## 1. Today's Overview

Moltis saw light activity on 2026-09-04, with a single open pull request ([#1258](https://github.com/moltis-org/moltis/pull/1258)) addressing streaming integration with the AGY CLI. No issues were opened, updated, or closed today, and no new releases were published. The project appears to be in a steady development phase, with contributors actively advancing feature work but no urgent stability concerns raised.

---

## 2. Releases

No new releases were published today. The project has no recent version updates to report.

---

## 3. Project Progress

**Open PRs Today: 1**

- **[PR #1258](https://github.com/moltis-org/moltis/pull/1258)** — *feat(external-agents): add direct AGY streaming* (Author: GTanger, created & updated 2026-09-04)

  This PR introduces a first-class streaming transport for the official `agy` CLI, enabling Moltis to reuse AGY's existing Google OAuth session rather than requiring Gemini CLI or a separate API key. It translates AGY's versioned `stream-json` output into Moltis-native event types (text, reasoning, notice, tool, sub-agent, usage, and resumable-session). No PRs were merged or closed today.

---

## 4. Community Hot Topics

The sole notable activity today is **PR #1258**, which has 0 reactions and no comments yet (just opened). 

**Underlying need:** The project community appears to be pushing toward richer multi-agent orchestration capabilities. The AGY streaming integration signals demand for seamless OAuth-based authentication flows that reduce friction for users who already rely on Google's ecosystem, avoiding the need for separate API key management or Gemini CLI dependencies. This aligns with a broader trend of Moltis evolving into a unified agent coordination layer.

---

## 5. Bugs & Stability

No bug reports, crashes, or regressions were raised today. The issue tracker shows zero activity, suggesting no immediate stability concerns on the horizon.

---

## 6. Feature Requests & Roadmap Signals

**Signal from PR #1258:** The push for direct AGY streaming support indicates the roadmap is expanding Moltis's external-agent transport layer. If merged, this feature would likely ship in the next minor release, broadening the set of natively supported CLI agents and strengthening Moltis's positioning as a multi-agent orchestrator.

---

## 7. User Feedback Summary

No new user feedback was recorded today. The open PR (#1258) represents developer-driven feature work rather than a user-reported pain point, though the implied use case—reducing authentication friction for Google-based agent workflows—suggests an underlying user need for simpler, session-reuse-based integrations.

---

## 8. Backlog Watch

With zero open issues and only one open PR today, there are no long-unanswered items requiring immediate maintainer attention. The single open PR (#1258) is fresh and may benefit from early review to ensure timely merge.

---

*Report generated from GitHub data at 2026-09-04.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-09-04

### 1. Today's Overview
Activity on the CoPaw (agentscope-ai/CoPaw) repository remains robust, with 23 issues and 37 pull requests updated in the last 24 hours. The project is currently in a feature-heavy development phase, balancing the introduction of new capabilities (such as a native mobile experience and enhanced memory management) with critical stability fixes for desktop environments and multi-agent workflows. The community is actively driving the roadmap through discussions on the upcoming multi-tenant "QwenPaw Hub," while developers continue to resolve integration issues and platform-specific bugs.

### 2. Releases
**No new releases detected.** The project is currently in the beta maintenance cycle (versions 2.2.0-beta.7 and 2.2.1b1 observed in recent issues), with development focused on refining existing features rather than major versioning.

### 3. Project Progress
*   **Merged/Closed PRs:** 14 PRs were closed or merged today, indicating a strong velocity of development.
*   **Key Completed Work:**
    *   **MCP Governance:** PR #7504 successfully enforced the per-tool MCP whitelist on the agent runtime path, fixing a security gap where disabled tools were still accessible.
    *   **Console UX:** PR #7560 fixed a bug where the selected Loop mode was not preserved during navigation or submission.
    *   **Memory API:** PR #7544 returned proper HTTP status codes (404/503) for unavailable memory routes, improving API reliability.
    *   **Plugin Lifecycle:** PR #7565 introduced clean unload and rollback-safe hot reload for plugins to prevent half-applied updates.

### 4. Community Hot Topics
*   **QwenPaw Hub Multi-Tenant Strategy (#7318):** This is the most active discussion with 22 comments. The project is shifting focus from a personal assistant to a multi-tenant platform. The community is debating the roadmap for version 2.2.0, specifically asking what features should be prioritized next for team management.
    *   [View Discussion](https://github.com/agentscope-ai/QwenPaw/issue/7318)
*   **LAN LLM Connectivity Issues (#7505):** A high-severity bug report regarding frequent disconnections when connecting to local LLM servers (e.g., LM Studio) via LAN. Users report timeout failures and retries.
    *   [View Issue](https://github.com/agentscope-ai/QwenPaw/issue/7505)
*   **Desktop UI/UX Improvements (#7553, #7545):** Users are requesting UI enhancements to display artifacts (outputs) more prominently in the chat stream and restoring the "Copy" context menu in the Desktop application.
    *   [View Artifact UI Request](https://github.com/agentscope-ai/QwenPaw/issue/7553)
    *   [View Copy Menu Bug](https://github.com/agentscope-ai/QwenPaw/issue/7545)

### 5. Bugs & Stability
*   **Critical: 409 Conflict Error During Task Execution (#7559):** Users attempting to send new messages or files while a task is running trigger a 409 error, indicating a race condition between the frontend message queue and the running agent loop.
    *   [View Bug](https://github.com/agentscope-ai/QwenPaw/issue/7559)
*   **Desktop Hangs on Startup (#7023):** A regression where the Desktop app blocks for ~60 seconds during "Installing managed Playwright Chromium" on every boot, with no option to skip or lazy-load.
    *   [View Bug](https://github.com/agentscope-ai/QwenPaw/issue/7023)
*   **Shell Tool Hangs on Windows (#7554):** When executing shell commands in Windows, child processes inherit the controlling console, causing `Ctrl+C` to fail to kill the process and potentially freezing the shared console session.
    *   [View Bug](https://github.com/agentscope-ai/QwenPaw/issue/7554)
*   **Stuck Feishu Sessions (#7534):** A specific issue with the Lark (Feishu) integration where a session queue consumer can become stuck indefinitely, rendering the entire session unresponsive to new messages.
    *   [View Bug](https://github.com/agentscope-ai/QwenPaw/issue/7534)

### 6. Feature Requests & Roadmap Signals
*   **Native Mobile Experience:** PR #7378 introduces a React Native/Expo client for Android and iOS. This signals a major expansion of the platform's reach beyond the desktop/web console.
*   **PostgreSQL/MySQL Support:** PR #7558 requests a pluggable relational storage backend to support WAL-sensitive deployments in Docker/K8s environments, addressing infrastructure needs for enterprise users.
*   **PawPort (Portability):** PR #6960 introduces a system to import instructions, settings, and recent work from other agent harnesses (like Codex) into QwenPaw, suggesting a strategy to lower the barrier for new users.

### 7. User Feedback Summary
The feedback today highlights a shift from "Personal Assistant" use cases to "Team/Enterprise" requirements. Users are frustrated with **interoperability issues** (LAN connection drops, plugin migration) and **UI responsiveness** (stuck sessions, 409 errors). A recurring theme is the lack of **configuration flexibility** (startup blocking, hardcoded channel imports). However, enthusiasm remains high for the **mobile** and **multi-tenant** directions, showing that the community is eager for the project to mature into a professional-grade workspace tool.

### 8. Backlog Watch
*   **Loop Mode Persistence (#7555):** Users report that the selected Loop mode (e.g., Goal vs. Default) resets or disappears when navigating away and returning to a chat session, causing confusion about the current agent state.
    *   [View Issue](https://github.com/agentscope-ai/QwenPaw/issue/7555)
*   **Session History Loss (#7548):** An intermittent bug where conversation history or navigation records disappear after switching sessions or restarting the application, though data remains in the local database.
    *   [View Issue](https://github.com/agentscope-ai/QwenPaw/issue/7548)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-09-04

## 1. Today's Overview

ZeroClaw shows active development momentum with 50 PRs updated and 1 open issue in the last 24 hours. The project is in a high-volume triage and iteration phase — the vast majority of PR activity (47 open) indicates a large pipeline of contributions awaiting review rather than immediate releases. No new releases were published today, and the single bug report centers on a Claude Fable 5.1 thinking-display regression. Overall, the project is healthy with sustained contributor engagement, though merge velocity appears bottlenecked by maintainer review capacity.

## 2. Releases

No new releases were published today.

## 3. Project Progress

**Merged/Closed PRs (today):**

- **[PR #10616](https://github.com/zeroclaw-labs/zeroclaw/issues/10616)** — Docs and site links migrated from `zeroclawlabs.ai` to `zeroclaw.com`, including the docs custom domain (`docs.zeroclaw.com`). The marketing site had already moved; this completed the transition.

**PRs advanced today (major activity):**

- **[PR #10611](https://github.com/zeroclaw-labs/zeroclaw/issues/10611)** — Adapts Anthropic and Bedrock providers to work with Claude's adaptive-thinking models (Fable 5.1, Fable 5, Opus 4.7/4.8, Sonnet 5), which reject fixed thinking budgets. This directly addresses the bug in issue #10617.
- **[PR #10615](https://github.com/zeroclaw-labs/zeroclaw/issues/10615)** — Hardens bounded recovery and completion for long channel turns, adding privacy-safe progress streaming and one-shot repair-only recovery for qualifying tool failures.
- **[PR #10618](https://github.com/zeroclaw-labs/zeroclaw/issues/10618)** — Surfaces approval carry-forward candidates in the `second-core` review queue, helping maintainers assess whether older Core approvals still apply.
- **[PR #10607](https://github.com/zeroclaw-labs/zeroclaw/issues/10607)** — Routes fork PR CI builds to Blacksmith and trims PR gate waste, improving CI efficiency across contributions.
- **[PR #10584](https://github.com/zeroclaw-labs/zeroclaw/issues/10584)** — Adds a visible close control to the Todo tracker in zerocode, improving discoverability beyond the `Ctrl+P` keyboard shortcut.

## 4. Community Hot Topics

- **[PR #10411](https://github.com/zeroclaw-labs/zeroclaw/issues/10411)** — *Serialize same-session messages*: Long-running discussion on ensuring messages in the same runtime conversation-history session are serialized rather than run concurrently when `interrupt_on_new_message` is disabled. Signals strong community need for predictable message ordering in multi-turn agent flows.
- **[PR #9841](https://github.com/zeroclaw-labs/zeroclaw/issues/9841)** — *Drive headless SOP runs*: A canonical continuation of prior work (#9494), carrying forward fixes from multiple contributors. High complexity (size: XL, risk: high) and broad scope across channels (core, MQTT, ACP) make this a significant architectural piece.
- **[PR #9324](https://github.com/zeroclaw-labs/zeroclaw/issues/9324)** — *A2A outbound client*: Phase 1 of the A2A outbound client RFC, introducing four `a2a_*` tools, a shared wire model, and a default-closed config block. This is a foundational interoperability feature with cross-cutting impact.
- **[PR #10489](https://github.com/zeroclaw-labs/zeroclaw/issues/10489)** — *Matrix voice notes via MSC3245*: Extends TTS delivery to Matrix channels, which previously had no TTS wiring despite valid configuration. Highlights a gap in cross-channel feature parity.

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Medium** | [#10617](https://github.com/zeroclaw-labs/zeroclaw/issues/10617) | `thinking.display = "updates"` returns HTTP 400 on Claude Fable 5.1 — the `ThinkingDisplay` enum was narrowed to `summarized`/`omitted`, dropping `updates` | Fix PR [#10611](https://github.com/zeroclaw-labs/zeroclaw/issues/10611) open |
| **High** | [#10556](https://github.com/zeroclaw-labs/zeroclaw/issues/10556) | Seatbelt runtime not honoring allowed roots on macOS — security boundary gap | PR [#10556](https://github.com/zeroclaw-labs/zeroclaw/issues/10556) open, under review |
| **High** | [#10391](https://github.com/zeroclaw-labs/zeroclaw/issues/10391) | Bounded delegate filesystem tools were incorrectly inheriting caller's tool instances instead of respecting the target's workspace (inverted rule) | PR [#10391](https://github.com/zeroclaw-labs/zeroclaw/issues/10391) open, fix in progress |
| **High** | [#10236](https://github.com/zeroclaw-labs/zeroclaw/issues/10236) | Desktop daemon capture logs were unbounded — potential log leakage | PR [#10236](https://github.com/zeroclaw-labs/zeroclaw/issues/10236) open, under maintainer review |

No crashes or regressions reported beyond the thinking-display 400 error. The security-related PRs (#10556, #10391, #10236) are all high-risk and still open, suggesting the team is being deliberate about security-boundary changes.

## 6. Feature Requests & Roadmap Signals

- **Adaptive-thinking model support** ([#10611](https://github.com/zeroclaw-labs/zeroclaw/issues/10611)): As Anthropic shifts to adaptive thinking budgets, this PR is essential for continued compatibility with Claude Fable 5.1 and Opus 4.7/4.8. Likely to merge soon given the blocking bug.
- **Telegram secure model picker** ([#9997](https://github.com/zeroclaw-labs/zeroclaw/issues/9997)): Paginated inline keyboard for `/model` selection, built from configured provider aliases. Currently blocked — likely awaits author action.
- **Egress grant ceremony for plugins** ([#9584](https://github.com/zeroclaw-labs/zeroclaw/issues/9584)): Adds explicit permission ceremonies during plugin install/list. Signals a roadmap direction toward finer-grained plugin security.
- **Zerocode turn-state terminal reporting** ([#9876](https://github.com/zeroclaw-labs/zeroclaw/issues/9876)): OSC title and progress updates for terminal UX. Reflects investment in local/CLI experience.
- **A2A outbound client** ([#9324](https://github.com/zeroclaw-labs/zeroclaw/issues/9324)): Phase 1 of agent-to-agent protocol support. A major interoperability feature that could define next-gen multi-agent capabilities.

## 7. User Feedback Summary

- **Pain point — thinking display breaking on new Claude models**: Users configuring `thinking.display = "updates"` are hitting 400 errors with Fable 5.1, indicating the config schema fell behind provider changes.
- **Pain point — delegate tool sandboxing**: The inverted delegation rule (#10391) suggests users relying on bounded delegation for secure tool scope may have been getting overly permissive access.
- **Pain point — TTS not working on Matrix**: Users configuring TTS providers expected Matrix channel support but got no output and no diagnostics, indicating a gap in error reporting.
- **Satisfaction signal — Todo tracker UX**: The visible close control (#10584) addresses discoverability, suggesting users found the `Ctrl+P` shortcut non-obvious.
- **Satisfaction signal — Docs domain consolidation**: The migration to `zeroclaw.com` (#10616) reflects attention to brand consistency and user-facing polish.

## 8. Backlog Watch

| PR/Issue | Age | Risk | Concern |
|----------|-----|------|---------|
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/issues/9324) — A2A outbound client | ~42 days | High / XL | Foundational RFC feature, stalled pending author action |
| [#9841](https://github.com/zeroclaw-labs/zeroclaw/issues/9841) — Headless SOP runs | ~27 days | High / XL | Multi-contributor, cross-channel; needs maintainer rebasing |
| [#9997](https://github.com/zeroclaw-labs/zeroclaw/issues/9997) — Telegram model picker | ~21 days | High / XL | Blocked, needs author action |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/issues/10391) — Delegate filesystem fix | ~9 days | High / L | Security-relevant; should prioritize review |
| [#10556](https://github.com/zeroclaw-labs/zeroclaw/issues/10556) — Seatbelt allowed roots | ~3 days | High / M | macOS security boundary; fix is ready but under review |

**Overall assessment:** ZeroClaw is in a robust contributor-driven development cycle with 50 PRs in the pipeline. The main risk is review throughput — several high-impact security and interoperability PRs are open with `needs-author-action` or `needs-maintainer-review` labels. The thinking-display bug is the only active user-facing regression, and a fix is already in progress. No releases today, but the merge of docs/domain work (#10616) and the adaptive-thinking adapter (#10611) suggest a release may be approaching once the security PRs land.

</details>