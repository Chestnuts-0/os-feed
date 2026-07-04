# OpenClaw Ecosystem Digest 2026-07-04

> Issues: 314 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-04 01:55 UTC

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

# OpenClaw Project Digest: 2026-07-04

### 1. Today's Overview
OpenClaw is experiencing extremely high development velocity, with **500 Pull Requests** and **314 Issues** updated in the last 24 hours. The project is in a critical stability phase, focusing heavily on hardening worker failures, consolidating infrastructure primitives (secrets, aborts, HTTP bodies), and fixing regressions introduced in recent patches like `v2026.6.11`. While no new releases were published today, the sheer volume of PRs suggests a massive internal refactoring and bug-fix sprint is underway to stabilize the platform before the next major version.

### 2. Releases
**No new releases** were published today. However, the community is actively discussing and reporting regressions from the recent `v2026.6.11` patch, indicating a potential hotfix may be imminent.

### 3. Project Progress
Significant progress was made in **infrastructure consolidation** and **security hardening**:
*   **Security Refactoring:** Multiple PRs by `RomneyDa` (#99746, #99755, #99750, #99753, #99744, #99740) focus on consolidating secret primitives, policy-free deferred promises, boolean coercion, abort mechanisms, and HTTP body reads. This aims to reduce code duplication and audit surface area.
*   **Codex Worker Hardening:** Issue #99551 tracks a sprint to harden Codex/OpenClaw worker failure modes, specifically addressing the `019f18dc` incident.
*   **iOS App Polish:** PR #99243 addresses onboarding, chat critique, and empty-state issues, while PR #99426 adds a slash command picker to the iOS chat composer.
*   **Telegram/WhatsApp Improvements:** PR #99745 hardens Telegram rich send fallbacks, and PR #83600 adds support for WhatsApp list reply actions.

### 4. Community Hot Topics
The most discussed issues revolve around **security leaks**, **session state integrity**, and **UX improvements**:
*   **[P1] Text between tool calls leaks to messaging channels** (#25592): 33 comments. Users are frustrated that internal agent processing text is visible in Slack/iMessage, creating noise and potential security risks.
*   **[Tracker] Codex worker runaway hardening sprint** (#99551): 14 comments. Directly linked to recent stability incidents, this tracker coordinates fixes for worker failures.
*   **[Image tool] Opaque "Failed to optimize image"** (#73148): 14 comments. Users lack clear diagnostics when the `sharp` dependency is missing.
*   **[Feature] Slack Block Kit support** (#12602): 13 comments. High demand for richer, interactive Slack messages beyond plain text.
*   **[Feature] Masked Secrets** (#10659): 13 comments. Critical security feature request to prevent agents from seeing raw API keys.

### 5. Bugs & Stability
Several high-severity bugs and regressions were reported or addressed today:
*   **Regression: Tool output returns empty after first call per turn** (#98528): Reported in `v2026.6.11`. Affects `exec`, `web_fetch`, and `web_search`. **Fix PR:** #99748 strips stale thinking signatures, and #99749 surfaces empty interactive replies, but a dedicated fix for the empty output regression is likely needed.
*   **Missing reentrancy guard in v2026.6.11** (#98416): Causes reply session initialization conflicts.
*   **Compaction timeout failures** (#92043): The 180s timeout is too short for legitimate long histories, causing crash loops.
*   **Stale module imports after rollback** (#92241): Gateway holds stale paths, dropping inbound messages.
*   **Subagents list empty after spawn** (#75593): Continuation of previous bug #71495.
*   **iOS/WebChat messages not triggering replies** (#97983): Messages append to transcript but don't generate assistant responses.

### 6. Feature Requests & Roadmap Signals
User feedback strongly indicates priorities for the next few months:
*   **Security & Permissions:**
    *   **Masked Secrets** (#10659): Prevent agents from accessing raw API keys.
    *   **Capability-based permissions** (#12678): Default-deny high-risk actions for skills/tools.
    *   **Skill Permission Manifest** (#12219): Standardize `skill.yaml` for transparent permission declaration.
*   **Multi-Agent & Collaboration:**
    *   **Multi-Agent Collaboration Enhancement** (#35203): Capability profiling, shared blackboard, and token cost governance.
    *   **Per-agent plugin configuration** (#55401): Allow different agents to have different plugin settings.
    *   **Per-spawn tool restrictions** (#15032): Restrict tools available to sub-agents.
*   **UX & Integrations:**
    *   **Slack Block Kit** (#12602): Richer interactive messages.
    *   **WhatsApp Sticker Support** (#7476): Send `.webp` stickers natively.
    *   **Backup/Restore Utility** (#13616): Standardized disaster recovery for config, cron, and sessions.
    *   **Auto-update with confirmation** (#12855): Scheduled, safe updates with post-update notifications.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Noise in Channels:** Internal agent thoughts and error messages leaking into user-facing channels (Slack, WhatsApp) is a major frustration (#25592, #85714).
    *   **Opaque Errors:** Missing dependencies (like `sharp`) cause cryptic failures without clear guidance (#73148).
    *   **Context Overhead:** Tool schemas consume ~3,500 tokens per session, impacting cost and speed (#14785).
    *   **Instability:** Recent updates (`v2026.6.11`) introduced regressions in tool outputs and session handling (#98528, #98416).
*   **Satisfaction:**
    *   Users appreciate the active development and responsiveness to security concerns (e.g., masked secrets, denylists).
    *   The push for better multi-agent isolation and permission controls is highly valued.

### 8. Backlog Watch
*   **#25592 [P1] Text between tool calls leaks to messaging channels:** Requires immediate product decision and maintainer review.
*   **#10659 [P1] Masked Secrets:** Critical security feature, needs maintainers to define implementation strategy.
*   **#12678 [P1] Capability-based permissions:** Essential for secure skill ecosystems, awaiting product decision.
*   **#99551 [P1] Codex worker runaway hardening:** Active sprint, needs coordination to ensure all child issues are resolved.
*   **#92043 [P1] Compaction timeout failures:** Needs engineering fix to handle long-running compactions gracefully.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: AI Agent & Assistant Open Source Landscape
**Date:** 2026-07-04
**Analyst:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The 2026 open-source AI agent landscape is characterized by intense fragmentation and rapid iteration, with projects pivoting from basic conversational wrappers to complex, multi-agent orchestration platforms. Stability and security have become the primary bottlenecks, as evidenced by widespread critical bugs related to session state integrity, credential leakage, and memory management across major repositories. The market is clearly dividing into two camps: those prioritizing deep enterprise integration and security (IronClaw, ZeroClaw) and those focusing on consumer-friendly, cross-channel accessibility (OpenClaw, NanoBot).

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 314 | 500 | None (Stabilizing) | ⚠️ Critical (High Volatility) |
| **Hermes Agent** | 50 | 50 | None (Pending Patches) | ✅ Stable (High Velocity) |
| **NanoClaw** | N/A | 17 | None | ✅ Healthy |
| **ZeroClaw** | 36 | 50 | None (Targeting v0.8.3) | ✅ Healthy (Intense) |
| **NanoBot** | 29 | 38 | None (Patch Pending) | ✅ Healthy |
| **PicoClaw** | N/A | 17 | **v0.3.1 Released** | ✅ Stable |
| **CoPaw** | 39 | 33 | None (Beta Track) | ⚠️ Risky (Beta Instability) |
| **IronClaw** | 33 | 50 | None (Pre-Major Bump) | ⚠️ Risky (Refactoring) |
| **LobsterAI** | 1 | 16 | **v2026.7.3 Released** | ✅ Stable |
| **NullClaw** | 1 | 0 | None (Stalled) | ❌ Low Activity |
| **TinyClaw** | 0 | 0 | None | ❌ Dormant |
| **Moltis** | 0 | 0 | None | ❌ Dormant |
| **ZeptoClaw** | 0 | 0 | None | ❌ Dormant |

*\*Health Score based on issue/PR velocity relative to release cadence and critical bug density.*

## 3. OpenClaw's Position
OpenClaw dominates the ecosystem in terms of raw activity volume, processing over 500 PRs and 300+ issues daily, yet it exhibits signs of severe technical debt and instability.
*   **Advantages:** Unmatched scale of community engagement and breadth of channel integrations (Slack, WhatsApp, Telegram, iOS). It leads in user-facing UX polish (iOS app, Block Kit).
*   **Technical Approach:** Unlike IronClaw’s strict Rust-based security model or ZeroClaw’s WASM isolation, OpenClaw relies on a more fluid, Python/JS-heavy infrastructure that is currently struggling with consistency.
*   **Community Size:** By far the largest, but also the most frustrated, with high volumes of reports regarding "noise leaks" and regression bugs from recent patches.

## 4. Shared Technical Focus Areas
Several critical requirements are emerging across nearly all active projects, indicating industry-wide consensus on next-generation agent needs:

*   **Security & Credential Isolation:**
    *   *Projects:* OpenClaw (#10659), Hermes (#48441), IronClaw (#5614-5616), ZeroClaw (#8678).
    *   *Need:* Masked secrets, preventing token leakage in logs, and strict separation of admin/user privileges.
*   **Context & Memory Management:**
    *   *Projects:* NanoBot (#4044), CoPaw (#5746), OpenClaw (#14785).
    *   *Need:* Solving "short-term memory loss" and reducing context window bloat from tool schemas is the top pain point for power users.
*   **Multi-Agent Orchestration:**
    *   *Projects:* OpenClaw (#35203), NanoBot (#4179), LobsterAI (#2241), ZeroClaw (#8393).
    *   *Need:* Moving beyond simple sub-agents to structured Supervisor/Worker patterns with shared blackboards and goal-oriented execution.
*   **Channel Resilience:**
    *   *Projects:* PicoClaw, ZeroClaw (#8627), NullClaw (#972).
    *   *Need:* Robust reconnection logic and handling of API changes (e.g., WhatsApp "Shortcake") to prevent silent failures.

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | ZeroClaw | NanoBot / PicoClaw |
| :--- | :--- | :--- | :--- | :--- |
| **Core Architecture** | Monolithic, Fluid | Rust-based, Strict Type Safety | WASM Plugin Host, Modular | Lightweight, Connector-Focused |
| **Target User** | Mass Market / Enthusiasts | Enterprise / Security-Conscious | Developers / Power Users | Mobile / Consumer |
| **Key Differentiator** | Channel Breadth & UX | Identity Layer & Audit Trails | SOP Engine & Goal Mode | Simplicity & Speed |
| **Primary Risk** | Regression Instability | High Refactoring Cost | Complex Dependency Graph | Limited Scalability |

*   **IronClaw** distinguishes itself with a rigorous "Reborn" architecture focused on identity management and type safety, appealing to enterprise users wary of security flaws.
*   **ZeroClaw** focuses on procedural correctness via its SOP engine and WASM isolation, targeting developers who need deterministic agent behavior.
*   **OpenClaw** competes on ecosystem breadth and ease of use, sacrificing some architectural rigidity for rapid feature delivery.

## 6. Community Momentum & Maturity

*   **Rapid Iteration (High Velocity, High Risk):**
    *   **OpenClaw:** Massive PR volume suggests a "firefighting" mode. Stability is compromised by recent regressions.
    *   **IronClaw:** Intense refactoring for the "Reborn" transition. High activity but significant internal disruption.
    *   **Hermes Agent:** Steady, high-velocity development with a focus on critical stability fixes.
*   **Stabilizing (Moderate Velocity, High Quality):**
    *   **PicoClaw:** Released v0.3.1, focusing on channel resilience. Mature and reliable.
    *   **LobsterAI:** Released v2026.7.3, focused on UI/UX refinements for Cowork.
    *   **NanoClaw:** Incremental improvements in channel support and container security.
*   **Emerging/Beta:**
    *   **CoPaw:** v2.0 beta shows promise but suffers from context management bugs and UI slowness.
    *   **ZeroClaw:** Approaching v0.8.3 with significant architectural shifts (WASM, Goal Mode).
*   **Stalled/Dormant:**
    *   **NullClaw, TinyClaw, Moltis, ZeptoClaw:** Little to no activity. NullClaw has critical unresolved connectivity issues.

## 7. Trend Signals

*   **Shift from Chat to Action:** Projects like LobsterAI (Goal Mode) and ZeroClaw (SOP Engine) indicate a move away from pure conversational interfaces toward autonomous, task-execution agents.
*   **Security as a Feature:** The proliferation of issues regarding secret leaks, credential isolation, and sandboxing (IronClaw, ZeroClaw, OpenClaw) shows that security is no longer a backend concern but a primary selling point for enterprise adoption.
*   **Context Efficiency is King:** The repeated complaints about token overhead from tool schemas and memory loss (NanoBot, CoPaw, OpenClaw) highlight that future competitive advantage will belong to projects that can optimize context window usage through better summarization, dynamic schema loading, or hierarchical memory.
*   **Decentralized Skill Distribution:** ZeroClaw’s move to Git-based skill catalogs and OpenClaw’s focus on skill manifests suggest a trend toward open, interoperable skill ecosystems rather than walled-garden proprietary plugins.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-07-04
**Source:** HKUDS/nanobot

## 1. Today's Overview
The NanoBot project demonstrates high development velocity with 29 issues and 38 pull requests updated in the last 24 hours. Activity is heavily skewed toward bug fixes and provider integrations, particularly concerning Anthropic’s latest model updates and MCP stability. While no new releases were published, the volume of closed issues (2) and merged PRs (6) indicates active maintenance addressing critical regressions. The community is actively engaging with memory management enhancements and multi-agent orchestration features.

## 2. Releases
*   **Status:** No new releases issued on 2026-07-04.
*   **Note:** Recent closed PRs (#4685, #4687) address critical configuration issues with Anthropic providers that will likely be included in the next patch release.

## 3. Project Progress
**Merged/Closed PRs Today:**
*   **[P2] Fix Anthropic Temperature Omission (#4685):** Resolved `400 invalid_request_error` for `claude-sonnet-5` by correctly omitting deprecated temperature parameters.
*   **[P1] Update Anthropic Default Model (#4687):** Updated the default model from the stale `claude-sonnet-4-20250514` to `claude-sonnet-4-6`.
*   **[Feature] Safe WebUI First-Run Launcher (#4688):** Introduced a dedicated `nanobot webui` command to streamline initial setup and configuration validation.
*   **[Bug] Polish Optional Feature Controls (#4691):** Improved error handling and logging for the newly introduced plugin system to ensure safer feature discovery.

**Advanced Features:**
*   **MCP Stability:** Significant work on containing malformed tool results (#4666) and handling Windows gateway stop fallbacks (#4690) to prevent crashes.
*   **Memory Systems:** Implementation of a read-only `search_history` tool (#4439) and gates for archiving facts with provenance context (#4621) to reduce hallucinations.

## 4. Community Hot Topics
*   **[Enhancement] Keep Skill Content in Multi-Turn Conversations (#3846):** *5 comments, 1 👍*
    *   **Analysis:** Users are struggling with context window pressure. The proposal to load skill definitions once and keep them persistent suggests a need for more efficient context management strategies beyond simple truncation.
*   **[Feature Request] Native Agent-to-Agent (A2A) Orchestration (#4179):** *2 comments, 1 👍*
    *   **Analysis:** There is growing demand for multi-agent architectures (Supervisor/Worker patterns) within a single instance, moving beyond isolated subagents to collaborative teams.
*   **[Bug] Short Term Memory Loss (#4044):** *6 comments*
    *   **Analysis:** This high-engagement issue highlights a fundamental usability problem where conversational continuity breaks due to context window limits or system prompt bloat. It is a primary blocker for power users.
*   **[Channel] Mattermost Support (#4459):**
    *   **Analysis:** Expansion into enterprise communication platforms continues, with Mattermost being the latest addition alongside existing WeChat/Telegram support.

## 5. Bugs & Stability
**High Severity:**
*   **#4652: Nanobot Process Crashes on MCP Tool Call Exception:** Reported 2026-07-02. The agent crashes immediately when an MCP tool returns an error or empty data.
    *   **Fix Status:** Addressed in PR #4666, which contains malformed tool results and marks timeouts/cancellations as structured errors.
*   **#4302: Gateway Crashes After MCP Reconnect:** Reported 2026-06-11. Similar to #4652 but at the gateway level during session termination.
*   **#4511: Windows `--background` Option Inconsistency:** Reported 2026-06-25. The gateway process info file becomes outdated after a restart command.
    *   **Fix Status:** Addressed in PR #4690, which handles Windows stop fallbacks properly.

**Medium Severity:**
*   **#4061: OpenAI-Compatible Text-Format Tool Calls Not Parsed:** Structured tool calls are required, but some providers emit plain text markup, causing dispatch failures.
*   **#4307: Post-Turn Consolidation Wipes Delivery Messages:** Long multi-iteration turns can exceed context windows before consolidation, leading to loss of the agent's own output.

## 6. Feature Requests & Roadmap Signals
*   **Ask Clarification Tool (#4508):** Users desire a native tool for the agent to pause and ask for missing information rather than hallucinating or failing.
*   **Heartbeat-Specific Model Override (#4431):** Request to run the Heartbeat service on a cheaper/dedicated model to reduce costs for idle monitoring tasks.
*   **WebUI Cron Job Management (#4218):** The CLI supports cron jobs extensively, but the WebUI lacks a UI for management. This is a significant usability gap for non-technical users.
*   **Multi-Instance Support for "Normies" (#4390):** Users want a simpler way to manage multiple instances via folders/configs without complex CLI setups.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Context Management:** Users frequently report issues with "short-term memory loss" (#4044) and context window pressure. The inability to retain skill content or previous conversation summaries effectively is a major friction point.
    *   **Stability with External Tools:** MCP tool failures causing immediate crashes (#4652) are severely impacting reliability for users integrating custom tools.
    *   **Configuration Rigidity:** Hardcoded deny patterns in the `exec` tool lack user authorization mechanisms (#3887), forcing users to disable security guards or modify code.
*   **Satisfaction:**
    *   The introduction of optional plugin controls (#4396) and the safe WebUI launcher (#4688) is positively received as it lowers the barrier to entry.
    *   Proactive fixes for Anthropic provider issues (#4685, #4687) demonstrate responsiveness to upstream model changes.

## 8. Backlog Watch
*   **#3626: Telegram Long Polling Silently Hangs:** Open since May 2026. Network-level issues cause the bot to stop receiving updates while remaining alive. Requires robust health checks or reconnection logic.
*   **#3744: Session-Level Memory for Team Collaboration:** Open since May 2026. Asks how `USER.md` and `MEMORY.md` are handled when multiple IM users interact with the same agent. Critical for multi-user deployments.
*   **#4107: Configure Additional Bind Mounts for bwrap Sandbox:** Open since May 2026. Users need more flexibility in defining sandbox paths for the `exec` tool.
*   **#4166: Allow Subagent Access to MCP Service:** Open since June 2026. Subagents currently cannot access MCP tools created by the parent, limiting complex workflows.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-04

## 1. Today's Overview
The Hermes Agent project is experiencing high-velocity development with 50 issues and 50 pull requests updated in the last 24 hours. Activity is heavily skewed toward critical stability fixes, particularly concerning authentication flows, gateway multiplexing, and desktop application performance. While no new official releases were published today, a significant volume of patches (including security hardening and bug fixes) are pending merge, indicating a focus on stabilizing the recent v0.18/v0.16 surface releases. The project health shows strong community engagement but highlights growing pains related to complex deployment configurations (Docker/Multiplexing) and cross-platform consistency.

## 2. Releases
*   **No new releases published.**
*   *Note:* Several PRs suggest imminent patch updates, particularly addressing security boundaries and gateway state management.

## 3. Project Progress
**Key Merged/Closed PRs:**
*   **[PR #58012]** Closed: Implemented export endpoint and agent summary for achievements tracking.
*   **[PR #57999]** Closed: Added external callback handlers for Telegram, allowing prefix-based dispatch to local scripts.
*   **[PR #56074]** Closed: Fixed in-memory caching bug where `/model --refresh` failed to clear the `_openrouter_catalog_cache`, ensuring accurate model listing.
*   **[PR #51592]** Closed: Optimized Docker builds by avoiding overlayfs copy-up storms during permission changes, improving container startup times.

**Advanced Features/Fixes:**
*   **Gateway Multiplexing:** Multiple PRs (#58016, #57563) are actively resolving credential isolation and Feishu websocket binding issues within multiplexed profiles.
*   **Security Hardening:** PR #58006 addresses a Time-of-Check to Time-of-Use (TOCTOU) vulnerability in Anthropic OAuth token saving.
*   **Desktop Stability:** PR #58004 introduces self-healing mechanisms for virtual environments after failed updates.

## 4. Community Hot Topics
**Most Active/Discussed Issues:**
1.  **[Issue #12058](https://github.com/NousResearch/hermes-agent/issues/12058)**: *OpenAI Codex OAuth in Telegram Gateway.* Users are reporting discrepancies between CLI and Gateway authentication states.
    *   *Need:* Consistent credential handling across different access methods (CLI vs. Telegram/Discord).
2.  **[Issue #48441](https://github.com/NousResearch/hermes-agent/issues/48441)**: *Terminal Snapshot Secret Leak.* Critical security finding regarding `.env` secrets being written to disk in plaintext via terminal snapshots.
    *   *Need:* Immediate security remediation for local execution environments.
3.  **[Issue #12188](https://github.com/NousResearch/hermes-agent/issues/12188)**: *Docker Compose Configuration.* Users struggle with configuring models and settings via environment variables in Docker deployments.
    *   *Need:* Better documentation and native env-var support for Dockerized setups.
4.  **[Issue #40173](https://github.com/NousResearch/hermes-agent/issues/40173)**: *Telegram Channel Profiles.* Request to route different Telegram chats to different agent profiles within a single gateway.
    *   *Need:* Multi-tenant personality support for Telegram bots.

## 5. Bugs & Stability
**High Severity:**
*   **[Issue #54675](https://github.com/NousResearch/hermes-agent/issues/54675)**: *Multiplexed Gateway Token Leakage.* Secondary profiles use the default profile's bot token due to `os.getenv` bypassing per-profile secret scopes.
    *   *Status:* Fix PR [#57563](https://github.com/NousResearch/hermes-agent/pull/57563) is addressing credential isolation and OAuth path hijacks.
*   **[Issue #48441](https://github.com/NousResearch/hermes-agent/issues/48441)**: *Terminal Secret Leak.* (See above). Tagged P1 Security.
*   **[Issue #58010](https://github.com/NousResearch/hermes-agent/issues/58010)**: *AsyncSessionDB Crash.* `/resume` command crashes due to missing `await` in `slash_commands.py`.
    *   *Status:* Identified as a regression in async wrapping.

**Medium/Low Severity:**
*   **[Issue #57928](https://github.com/NousResearch/hermes-agent/issues/57928)**: *Telegram File Attachment Drop.* Files attached with `/steer` commands are silently dropped.
*   **[Issue #57903](https://github.com/NousResearch/hermes-agent/issues/57903)**: *Desktop UI Blocking.* Async LLM calls busy-poll and block the desktop WebSocket loop. Draft fix exists in PR #57933.
*   **[Issue #57967](https://github.com/NousResearch/hermes-agent/issues/57967)**: *Kanban Silent Failure.* `hermes kanban create` loses data due to race conditions under gateway contention.
*   **[Issue #57905](https://github.com/NousResearch/hermes-agent/issues/57905)**: *Windows Window Discovery.* `computer_use` fails to detect windows due to incompatibility with `cua-driver 0.7.0` output format.

## 6. Feature Requests & Roadmap Signals
*   **[Issue #524](https://github.com/NousResearch/hermes-agent/issues/524)**: *Agent Migration System.* Users want automatic detection and import of settings (API keys, MCP servers) from competitors like Claude Code, Codex, and Cursor.
*   **[Issue #31776](https://github.com/NousResearch/hermes-agent/issues/31776)**: *Multi-Bank Memory Routing.* Request to expose Hindsight memory tools with support for multiple memory banks, moving beyond single-bank-per-session limitations.
*   **[Issue #17790](https://github.com/NousResearch/hermes-agent/issues/17790)**: *Configurable Discord Voice Timeout.* Current 5-minute hardcoded timeout disrupts persistent voice workflows.
*   **[Issue #57973](https://github.com/NousResearch/hermes-agent/issues/57973)**: *Privacy-Safe MoA Accounting.* Request for granular, per-model usage accounting for Mixture-of-Agents (MoA) to facilitate external billing/analytics.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Configuration Complexity:** Users find Docker and multiplexed gateway setups fragile, specifically regarding credential scoping and environment variable propagation.
    *   **Platform Inconsistency:** Bugs are frequently reported on specific platforms (Windows desktop flashing terminals, Telegram file drops), suggesting fragmentation in testing coverage.
    *   **Security Anxiety:** The discovery of plaintext secret leaks in terminal snapshots has caused concern among enterprise/self-hosted users.
*   **Satisfaction:**
    *   The rapid release cycle and responsiveness to security bugs (e.g., immediate PRs for OAuth TOCTOU) are viewed positively.
    *   The "Achievements" and "Skills" systems are generating interest, with users requesting better export/visibility features.

## 8. Backlog Watch
*   **[Issue #7269](https://github.com/NousResearch/hermes-agent/issues/7269)**: *WhatsApp Group Permissions.* Long-standing question regarding whether `require_mention: true` can work for non-whitelisted users in groups. Needs clarification from maintainers.
*   **[Issue #6347](https://github.com/NousResearch/hermes-agent/issues/6347)**: *Anthropic OAuth Refresh Failures.* Cloudflare 403s blocking token refresh. Affects long-term stability of Anthropic integrations.
*   **[Issue #57569](https://github.com/NousResearch/hermes-agent/issues/57569)**: *Auth JSON Caching Bug.* Credentials cached in `auth.json` cause double requests and confusion when endpoints are updated.
*   **[PR #3651](https://github.com/NousResearch/hermes-agent/pull/3651)**: *Phase 1 Secrets Tool.* This major feature for secure secrets management has been open for a long time. Its progress should be monitored as it directly addresses several security concerns raised in issues.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-07-04

### 1. Today's Overview
PicoClaw demonstrates high development velocity with 17 Pull Requests updated in the last 24 hours and one new release (v0.3.1). The project is actively stabilizing its core agent routing logic and significantly improving resilience across communication channels like WhatsApp, Matrix, and DeltaChat. While bug reports regarding Android compatibility and WebSocket timeouts remain open, the maintainer team is aggressively addressing infrastructure stability and configuration migration issues. The overall health of the repository indicates a mature phase focused on reliability and multi-agent collaboration features.

### 2. Releases
**Version: v0.3.1**
*   **Changes:** This release merges several key updates including a NearAI provider integration (#2917), fixes for store lock type assertions in Codex (#3053), and additional internal merges.
*   **Breaking Changes/Migration Notes:** No explicit breaking changes are noted in the summary for v0.3.1, though recent PRs indicate ongoing work on v2 to v3 configuration migrations (see #3218). Users upgrading should ensure their config files include `BuildInfo` fields to avoid validation errors during migration.

### 3. Project Progress
Significant progress was made in **Agent Core**, **Channel Resilience**, and **Configuration Management**:
*   **Agent Routing Fix:** PR #3224 fixes a critical bug where `/clear` commands failed to clear sessions for non-default routed agents. This ensures proper context isolation in multi-agent setups.
*   **WhatsApp & Matrix Stability:** Multiple PRs (#3179, #3220, #3219) introduce robust reconnection logic with exponential backoff for WhatsApp and Matrix sync loops, preventing silent disconnections after network interruptions.
*   **DeltaChat Cleanup:** PR #3222 refactors the DeltaChat implementation, dropping legacy features and hard-coded lists in favor of official relay sources, reducing codebase bloat by ~320 lines.
*   **Model Fallbacks:** PR #3200 introduces a configurable default fallback chain for models, allowing users to define priority lists for AI providers directly via the UI/API.
*   **Discord Security:** PR #3178 adds role-based access control (`allow_roles`) to Discord settings, enhancing security without requiring privileged intents.

### 4. Community Hot Topics
*   **Android Launch Failures (Issue #3182):**
    *   *Link:* [sipeed/picoclaw#3182](https://github.com/sipeed/picoclaw/issues/3182)
    *   *Analysis:* Users are struggling to launch services on Android despite having full permissions. This suggests potential issues with file path handling or background service restrictions in the Android environment, a recurring pain point for mobile deployment.
*   **WhatsApp WebSocket Timeouts (Issue #3178):**
    *   *Link:* [sipeed/picoclaw#3178](https://github.com/sipeed/picoclaw/issues/3178)
    *   *Analysis:* Reports of timeouts when connecting to WhatsApp Websockets indicate instability in the bridge layer. The community is highly interested in reliable persistent connections, which is being addressed by the recent reconnection PRs (#3220, #3179).
*   **Agent Collaboration Bus (PR #2937):**
    *   *Link:* [sipeed/picoclaw#2937](https://github.com/sipeed/picoclaw/pull/2937)
    *   *Analysis:* A major architectural feature introducing durable inter-agent communication with mailboxes and isolated sessions. This signals a shift towards complex, multi-agent workflows rather than simple single-agent interactions.

### 5. Bugs & Stability
*   **High Severity:**
    *   *Android Service Launch:* Issue #3182 reports inability to launch the service on Android.
    *   *Config Migration Blocker:* PR #3218 addresses a false positive error (`unknown field(s): build_info`) that blocks v2 to v3 configuration migrations. This is a critical stability fix for users upgrading versions.
*   **Medium Severity:**
    *   *Routed Session Clearing:* Fixed in PR #3224. Previously, clearing chat history did not affect the correct agent session if routing was involved.
    *   *Seed XML Leakage:* PR #3165 fixes issues where Volcengine Doubao Seed XML tool calls were leaking into user-visible content in OpenAI-compatible responses.
*   **Low Severity:**
    *   *Response Body Errors:* PR #3128 explicitly ignores non-meaningful `resp.Body.Close()` errors after `io.ReadAll` in web search tools, cleaning up log noise.

### 6. Feature Requests & Roadmap Signals
*   **Simplex Channel Support:** PR #3193 adds support for the Simplex messaging protocol, indicating a roadmap expansion into privacy-focused or alternative messaging channels.
*   **Per-Turn Token Usage:** PR #3156 (merged) emits real per-turn LLM token usage on finalized messages. This suggests a strong focus on cost tracking and observability for downstream consumers.
*   **Structured Agent Collaboration:** PR #2937 outlines a comprehensive "Agent Collaboration Bus," implying future versions will heavily feature multi-agent orchestration capabilities.
*   **Predicted Next Features:** Based on the influx of channel-specific fixes (WhatsApp, Matrix, DeltaChat, Discord), the next release cycle will likely prioritize **channel reliability** and **cross-platform consistency** before introducing new major integrations.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated with Android deployment hurdles (#3182) and intermittent WhatsApp connectivity drops (#3178). The lack of automatic recovery in network disruptions was a major complaint until recently.
*   **Satisfaction:** The community appreciates the rapid response to stability issues (multiple reconnection PRs in one day). The introduction of role-based access for Discord (#3178) and configurable model fallbacks (#3200) addresses specific enterprise/power-user needs for control and flexibility.
*   **Use Cases:** Heavy usage in Docker/Launchpad environments, with increasing interest in multi-agent setups and privacy-centric channels (Simplex, DeltaChat).

### 8. Backlog Watch
*   **Issue #3182 (Android Bug):** Remains open and stale. Requires maintainer attention to reproduce or provide specific Android configuration guidelines.
*   **Issue #3178 (WhatsApp Timeout):** Remains open and stale. Although PRs for reconnection exist, the root cause of initial timeout/connectivity issues may need further investigation if the new reconnection logic doesn't fully resolve the startup phase.
*   **PR #2937 (Agent Collaboration):** This is a large, complex feature. Maintainers should monitor for merge conflicts or performance implications as it touches core agent routing logic.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-07-04
**Source:** github.com/qwibitai/nanoclaw

### 1. Today's Overview
NanoClaw demonstrates high development velocity with 17 pull requests updated in the last 24 hours, indicating a burst of maintenance, feature additions, and infrastructure fixes. The project is actively expanding its communication channel ecosystem (adding LINE and improving Signal/WhatsApp) while stabilizing core container and polling mechanics. Despite the high PR volume, there were no new releases published today, suggesting these changes are currently undergoing review or staging for a future release cycle. Community engagement remains focused on connectivity stability and token efficiency, with one significant open issue regarding local model overhead.

### 2. Releases
No new releases were published today. The previous updates suggest a focus on incremental bug fixes and skill integrations rather than major version jumps.

### 3. Project Progress
**Merged/Closed PRs:**
*   **#2765** [CLOSED] Added `.format-lint-off` provider configuration (`amit-shafnir`).
*   **#2330** [CLOSED] Fixed axios MCP server compatibility with OneCLI’s CONNECT-only proxy (`Tij8i`).

**Key Advancements (Open PRs):**
*   **Channel Expansion:** PR #2918 introduces a native LINE Official Account channel adapter and skill (`joshm1230212`).
*   **Infrastructure Fixes:** PR #2184 improves the poll loop to retry immediately on stale sessions rather than showing errors (`cfis`). PR #2208 adds support for HTTP and SSE MCP server transports (`cfis`).
*   **Container & Security:** PR #2230 fixes host user mapping for rootless Podman (`cfis`). PR #2349 tolerates missing path fields in mount security allowlists (`cfis`).
*   **Skills:** PR #2530 adds a CalDAV tool skill (`cfis`). PR #2693 adds a Google Contacts tool skill (`cfis`). PR #2863 adds system digest skills (`grantland`).
*   **Bug Fixes:** PR #2694 ensures Signal DMs are not dropped by setting correct flags (`cfis`). PR #2695 stages Signal image attachments as base64 for container readability (`cfis`). PR #2531 suppresses duplicate text messages during polls (`cfis`). PR #2921 gates skill fragments based on group selection to prevent instruction bloat (`michaelzetune`). PR #2920 fixes a database connection leak in container restarts (`fix2015`).

### 4. Community Hot Topics
*   **Issue #2917:** "Local model as primary agents pay full MCP tool-schema token cost" (`cappuccinowholemilk-stack`).
    *   *Analysis:* This is the most critical open issue today. Users running local models (e.g., Gemma4:31B) are facing ~27k token overhead per request because the full MCP tool schema is sent even when the primary orchestrator is local. This directly impacts cost-efficiency and latency for self-hosted setups.
*   **PR #2918:** LINE Official Account Channel Addition.
    *   *Analysis:* Reflects a strong demand for diverse messaging integrations beyond standard webhooks or email, specifically targeting Asian markets where LINE is dominant.
*   **PR #2184 & #2330:** Proxy and Session Stability.
    *   *Analysis:* Users are encountering friction with corporate proxies and session timeouts. The community values robustness in enterprise-like network environments.

### 5. Bugs & Stability
**Reported/Addressed Bugs:**
1.  **High Severity:** Database connection leak during container restarts causing potential resource exhaustion.
    *   *Fix:* PR #2920 wraps the `openInboundDb` call in a try/finally block.
2.  **Medium Severity:** Signal DMs being silently dropped due to missing `isMention`/`isGroup` flags.
    *   *Fix:* PR #2694 sets these flags on inbound messages.
3.  **Medium Severity:** Axios-based MCP servers failing behind OneCLI's CONNECT-only proxy.
    *   *Status:* Fixed in merged PR #2330.
4.  **Low Severity:** Duplicate text messages appearing in chat due to mid-turn `send_message` firing.
    *   *Fix:* PR #2531 suppresses these duplicates.
5.  **Low Severity:** Inbound Signal images unreadable in containers due to path mismatch.
    *   *Fix:* PR #2695 stages images as base64.

### 6. Feature Requests & Roadmap Signals
*   **Diverse Channel Support:** The addition of LINE (#2918), WhatsApp improvements (#2348), and Signal fixes (#2694/#2695) signals a roadmap priority on becoming a universal hub for various messaging platforms.
*   **Local-First Optimization:** Issue #2917 highlights a need for better token management when using local LLMs as primary agents. Future versions may introduce dynamic tool schema loading or caching to reduce overhead.
*   **Skill Ecosystem Growth:** Multiple PRs adding specific tools (CalDAV #2530, Google Contacts #2693, System Digest #2863) indicate a push toward a modular, plugin-based skill architecture that users can easily extend.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by token inefficiency when mixing local models with MCP tools (#2917). There is also dissatisfaction with silent failures in Signal integrations (#2694) and proxy incompatibilities (#2330).
*   **Use Cases:** Heavy usage of containerized deployments (Podman/Docker) requiring rootless security fixes (#2230). Users are leveraging the platform for personal productivity via calendar/contact integrations.
*   **Satisfaction:** The rapid response to bug reports (multiple fixes merged or proposed within days) suggests a healthy feedback loop between users and maintainers.

### 8. Backlog Watch
*   **Issue #2917:** Needs maintainer attention to address the token overhead problem for local models. This is a significant barrier for efficient self-hosted AI operations.
*   **PR #2919:** "PR-Test2-LargePRTest" by `zybChaitin` appears to be a test PR. Maintainers should verify if this is intentional or accidental clutter.
*   **PR #2921:** While open, the fix for gating skill fragments is critical for performance. Ensure it is reviewed promptly to prevent instruction bloat in large groups.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-07-04

### 1. Today's Overview
The NullClaw project is currently in a low-activity state with no new releases or pull requests merged in the last 24 hours. Development momentum appears stalled, with the primary focus shifting to maintenance and stability rather than feature expansion. The single active issue highlights a critical reliability concern regarding Telegram integration, suggesting that backend stability does not guarantee seamless connector performance. Maintainer attention is required to address this specific connectivity bug to prevent user churn.

### 2. Releases
No new releases were published during this reporting period. The latest version remains unchanged since the previous cycle.

### 3. Project Progress
There were no merged pull requests or closed issues today. Consequently, no new features were advanced or formally fixed within the codebase during this timeframe. The project is in a holding pattern pending investigation into the reported Telegram channel instability.

### 4. Community Hot Topics
The most discussed topic is **Issue #972**, which addresses a persistent bug where Telegram channels cease responding after periods of inactivity.
*   **Link:** [Issue #972](https://github.com/nullclaw/nullclaw/issues/972)
*   **Analysis:** This issue reflects a broader need for robust "heartbeat" mechanisms or auto-reconnection logic in long-running agent sessions. Users are relying on NullClaw for continuous monitoring, and intermittent downtime breaks trust in the system's reliability. The fact that the core agent (`nullclaw agent`) remains functional while the Telegram connector fails indicates a disconnect-specific resource leak or timeout handling error.

### 5. Bugs & Stability
*   **Severity: High**
    *   **Issue #972:** Telegram channel stops responding after idle time (e.g., overnight).
    *   **Details:** The backend logs indicate normal operation, but the frontend connector becomes unresponsive. This is a regression in reliability for users deploying agents for 24/7 monitoring.
    *   **Fix Status:** No fix PR exists yet. The author notes the backend is healthy, suggesting the issue lies within the Telegram API client library or session management layer.

### 6. Feature Requests & Roadmap Signals
No new feature requests were submitted today. However, the nature of Issue #972 serves as a strong signal that the roadmap should prioritize **connector resilience**. Future updates should likely include improved session recovery, explicit heartbeat checks for external APIs (like Telegram), and better logging for connector-specific failures to distinguish them from core engine errors.

### 7. User Feedback Summary
Current user feedback centers on frustration with **intermittent service availability** rather than missing functionality. The user `i11010520` reports that the system works well when active but fails unpredictably after idle periods. This suggests that while the core AI logic is satisfactory, the integration layer lacks the robustness required for production-grade, unattended deployment. Satisfaction is currently compromised by reliability issues.

### 8. Backlog Watch
*   **Issue #972:** This issue has been open since June 30, 2026, and has received no response from maintainers in the last day. Given its impact on core functionality (Telegram integration), it requires immediate triage.
*   **Link:** [Issue #972](https://github.com/nullclaw/nullclaw/issues/972)
*   **Action Required:** Maintainders should investigate whether this is a known limitation of the underlying Telegram library or a configuration issue, and provide a workaround or timeline for a fix.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-07-04

## 1. Today's Overview
The IronClaw project exhibits high development velocity with 33 issues and 50 pull requests updated in the last 24 hours, signaling intense focus on the "Reborn" architecture transition. Activity is dominated by critical bug fixes in identity management, credential handling, and QA-reported stability issues within the Reborn agent loop. While no new releases were published today, significant internal refactoring and feature parity work (particularly around Slack ingress and WASM credentials) are nearing completion or have just landed. The project health indicates a stabilization phase following major architectural shifts, with a strong emphasis on closing security gaps and ensuring feature parity with previous versions.

## 2. Releases
**No new releases published today.**

*Note:* PR #5598 indicates a pending release preparation involving API-breaking changes in `ironclaw_common` (0.4.2 -> 0.5.0) and `ironclaw_skills` (0.3.0 -> 0.4.0), suggesting a major version bump may be imminent.

## 3. Project Progress
**Merged/Closed PRs & Key Advances:**
*   **Slack Ingress Consolidation:** PR #5626 and PR #5625 finalized the shift to manifest-driven host-ingress for Slack, removing hardcoded Rust policy literals and ensuring credential coherence. This completes a multi-PR effort started in June to generalize channel ingress ([PR #5626](https://github.com/nearai/ironclaw/pull/5626), [PR #5625](https://github.com/nearai/ironclaw/pull/5625)).
*   **Identity Layer Cleanup:** PR #5619 executed a "de-slop" pass on `ironclaw_reborn_identity`, removing dead types and clarifying boundaries based on recent audit findings ([PR #5619](https://github.com/nearai/ironclaw/pull/5619)).
*   **Type Deduplication:** PR #5567 unified DTO clusters and removed redundant traits, reducing code size by 176 lines without behavioral changes ([PR #5567](https://github.com/nearai/ironclaw/pull/5567)).
*   **WebUI Routing Fixes:** PR #5130 and PR #5132 improved WebUI v2 navigation by clearing sidebar highlights on non-chat routes and handling invalid thread redirects ([PR #5130](https://github.com/nearai/ironclaw/pull/5130), [PR #5132](https://github.com/nearai/ironclaw/pull/5132)).
*   **AWS Bedrock Support:** PR #5059 successfully wired AWS Bedrock through `ironclaw-reborn`, fixing schema issues for the Converse tool ([PR #5059](https://github.com/nearai/ironclaw/pull/5059)).

## 4. Community Hot Topics
**Most Active Discussions:**
*   **Vertical-Slice Integration Tests:** Issue #3067 remains the most discussed topic (33 comments), focusing on creating caller-level Reborn integration tests to prove substrate functionality via public entrypoints. This reflects a community need for robust verification of the new architecture. ([Issue #3067](https://github.com/nearai/ironclaw/issues/3067))
*   **Reborn Architecture Deepening:** Issue #3231 tracks follow-up architectural improvements post-substrate landing, emphasizing small, reviewable PRs to avoid blocking the main release. ([Issue #3231](https://github.com/nearai/ironclaw/issues/3231))
*   **MissionService Integration:** Issue #3278 discusses integrating MissionService with TurnCoordinator, a key component for complex agent workflows. ([Issue #3278](https://github.com/nearai/ironclaw/issues/3278))

## 5. Bugs & Stability
**Critical & High-Severity Issues Reported Today:**
*   **[High] Identity Security Gaps:** Multiple issues filed by `ilblackdragon` highlight severe flaws in `ironclaw_reborn_identity`:
    *   **Cross-process Divergence:** Issue #5614 identifies a risk where different email logins can split a user principal due to process-local locking. ([Issue #5614](https://github.com/nearai/ironclaw/issues/5614))
    *   **Missing OAuth Guard:** Issue #5615 notes that `bind()` lacks an OAuth-surface guard, allowing potential unauthorized upserts. ([Issue #5615](https://github.com/nearai/ironclaw/issues/5615))
    *   **Data Integrity Error:** Issue #5616 reveals `adopt_migrated_identity` never writes the `StoredUser` record, creating phantom users. ([Issue #5616](https://github.com/nearai/ironclaw/issues/5616))
*   **[Medium] Credential Injection Logic:** Issue #5512 reports that the WASM credential provider re-derives injection eligibility from the manifest rather than consulting the authorizer's decisions, potentially leading to incorrect credential exposure. ([Issue #5512](https://github.com/nearai/ironclaw/issues/5512))
*   **[Medium] Hallucinated Tool Calls:** Issue #5583 describes a scenario where a model calling a disabled capability causes a fatal `model_error` instead of a graceful denial, crashing the run. ([Issue #5583](https://github.com/nearai/ironclaw/issues/5583))
*   **[Low/Medium] UI/UX Bugs:**
    *   Issue #5510: Users cannot delete old routines, requiring a full restart. ([Issue #5510](https://github.com/nearai/ironclaw/issues/5510))
    *   Issue #5507: Failed routine runs show "No thread attached," blocking debugging. ([Issue #5507](https://github.com/nearai/ironclaw/issues/5507))
    *   Issue #5602: Slack connection fails when initiated via chat prompt, returning only a pairing code. ([Issue #5602](https://github.com/nearai/ironclaw/issues/5602))

## 6. Feature Requests & Roadmap Signals
*   **Cost-Based Budgeting:** Issue #3141 seeks to integrate cost-based budgets into the ResourceGovernor, a feature requested to prevent runaway costs in autonomous agent loops.
*   **Scalable Permission UX:** Issue #3127 aims to design a user-facing permission system for capabilities, indicating a roadmap priority towards better user control and transparency.
*   **Parallel PR Review Skill:** PR #5622 introduces a new skill for reviewing multiple PRs simultaneously, suggesting an expansion of built-in automation tools for developers.

## 7. User Feedback Summary
*   **Debugging Friction:** Users are frustrated by the inability to delete stale routines (Issue #5510) and the lack of visibility into failed runs (Issue #5507), which hinders troubleshooting.
*   **Integration Reliability:** Reports of Slack connections failing or behaving inconsistently (Issue #5602, Issue #5522 regarding Slack DM reading) suggest that channel integrations are still maturing and require more robust error handling and state management.
*   **Security Concerns:** The detailed audits of the identity module (Issues #5614-5618) indicate that power users and maintainers are closely scrutinizing security implementations, demanding rigorous defense-in-depth measures.

## 8. Backlog Watch
*   **CI Greenliness:** Issue #5590 highlights ongoing instability in the main branch CI checks, requiring immediate attention to ensure reliable build pipelines. ([Issue #5590](https://github.com/nearai/ironclaw/issues/5590))
*   **Docker Build Failures:** Issue #5603 points to specific Docker build failures related to missing prompt files after engine-v2 removal, which blocks deployment workflows. ([Issue #5603](https://github.com/nearai/ironclaw/issues/5603))
*   **Retry Path Unreachability:** Issue #5608 identifies a bug where the retry logic for local-dev synthetic capabilities is unreachable, effectively collapsing recoverable errors into terminal failures. ([Issue #5608](https://github.com/nearai/ironclaw/issues/5608))

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-07-04
**Source:** GitHub (netease-youdao/LobsterAI)

## 1. Today's Overview
LobsterAI demonstrated high development velocity on July 3rd, with 16 Pull Requests merged or closed, indicating a robust release cycle leading up to version 2026.7.3. The primary focus was stabilizing the "Cowork" multi-agent environment, specifically addressing UI rendering issues, context maintenance errors, and synchronization with the OpenClaw backend. While community engagement on open issues remains low (only 1 issue updated in the last 24 hours), the core team is actively refactoring the codebase to improve performance and user experience in complex agent workflows.

## 2. Releases
**Version:** 2026.7.3
*   **Key Features:**
    *   **Service Deployment:** Introduced new capabilities for service deployment (PR #2238).
    *   **Cowork Goal Mode:** Added a "Goal Mode" for the Cowork feature, allowing agents to operate with specific objectives (PR #2241).
    *   **Subagent Artifact Panel:** Enhanced the UI for subagent interactions with a dedicated artifact panel (PR #2241).
*   **Migration Notes:** No major breaking changes reported for existing users, but the introduction of Goal Mode may require configuration adjustments for advanced Cowork setups.

## 3. Project Progress
Significant progress was made in refining the **Cowork** and **Renderer** modules:
*   **UI/UX Refinements:** Several PRs focused on visual stability, including restoring compact menu widths (PR #2268), optimizing font sizes (PR #2263), and fixing deployment popup layout issues (PR #2265).
*   **Performance Optimization:** Large session rendering was improved by reducing collapsed tool-result formatting from 64K to 16K and adding memoization for derived displays (PR #2264).
*   **OpenClaw Integration:** Deepened integration with the OpenClaw gateway, ensuring model overrides in IM channels are synchronized correctly (PR #2267) and separating task working directories from agent workspaces in system prompts (PR #2260).
*   **Error Handling:** Improved robustness by clearing context maintenance states on chat errors to prevent UI freezes (PR #2266) and delaying plan recovery until aborted runs settle (PR #2247).

## 4. Community Hot Topics
*   **Issue #1422:** *MCP Custom Page Display Issue* (Closed)
    *   **Summary:** Users reported poor display in the deletion confirmation dialog when service names were long.
    *   **Analysis:** Highlights a need for better text truncation and responsive design in modal dialogs, particularly for enterprise users managing many services.
*   **PR #1353:** *Agent Skill Selector Enhancements* (Open/Stale)
    *   **Summary:** Proposed adding "Select All" and "Clear" buttons to the Agent skill selector.
    *   **Analysis:** Reflects a common user pain point in complex agent configuration interfaces where bulk actions are necessary for efficiency.
*   **PR #1464:** *IM Instance Duplicate Validation* (Open/Stale)
    *   **Summary:** Adds validation to prevent duplicate instance names and robot additions for DingTalk, Feishu, and QQ.
    *   **Analysis:** Critical for multi-instance users to maintain data integrity and prevent message processing conflicts.

## 5. Bugs & Stability
*   **macOS Fullscreen Black Screen (PR #2246):** Fixed an issue where closing the app in macOS fullscreen caused a black screen. The fix ensures proper exit from native fullscreen before hiding the window.
*   **Context Stuck State (PR #2266):** Resolved a bug where failed context compaction or LLM timeouts left the UI stuck in a "compacting" state.
*   **Timestamp Aliasing (PR #2261):** Fixed incorrect timestamp displays in the subagent panel by correctly aliasing SQLite row reads.
*   **Session Model Divergence (PR #2267):** Addressed a bug where IM/channel sessions did not reflect model switches made outside the app, causing confusion between local overrides and actual session models.

## 6. Feature Requests & Roadmap Signals
*   **Diagnostics Export (PR #2264):** A new feature allows users to export raw session diagnostics (metadata, raw messages) via the Share menu. This signals a roadmap commitment to better debugging tools for power users and developers.
*   **Goal-Oriented Agents (PR #2241):** The addition of "Goal Mode" suggests a strategic shift towards more autonomous, objective-driven multi-agent interactions rather than just conversational partners.
*   **Bulk Actions in Configuration (PR #1353, #1464):** The pending PRs for skill selectors and IM instance validation indicate upcoming improvements in configuration usability and data safety.

## 7. User Feedback Summary
*   **Positive:** Users appreciate the stability fixes regarding UI freezing and the new diagnostic tools which aid in troubleshooting complex agent behaviors.
*   **Negative:** Long-standing issues with UI responsiveness in modals (Issue #1422) and the lack of bulk management tools in Agent configuration (PR #1353) remain friction points.
*   **Pain Points:** Managing multiple IM instances without duplicate checks is risky (PR #1464), and context management errors can severely disrupt workflow (PR #2266).

## 8. Backlog Watch
*   **PR #1353:** *Agent Skill Selector Bulk Actions* - Open since April 2, 2026. High utility for users creating/editing agents with many skills.
*   **PR #1464:** *IM Instance Duplicate Validation* - Open since April 4, 2026. Critical for data integrity in multi-instance setups.
*   **Recommendation:** Maintainers should prioritize these stale PRs as they address fundamental usability and reliability concerns for the core user base.

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

**CoPaw Project Digest**
**Date:** 2026-07-04
**Source:** GitHub (agentscope-ai/CoPaw / QwenPaw)

### 1. Today's Overview
The CoPaw project exhibited high engagement on July 3, 2026, with 39 issues and 33 pull requests updated within the last 24 hours. While no new official releases were published, significant development momentum is visible in the `2.0 beta` track, particularly regarding context management stability, security enhancements, and frontend architecture improvements. The community is actively addressing critical bugs related to session continuity and tool execution loops, indicating a strong focus on stabilizing the upcoming major version.

### 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Note:** Development is heavily focused on `v2.0.0b2` and `v1.1.12` patches. Users should monitor PR #5734 for the shift to Tauri-based desktop builds.

### 3. Project Progress
**Key Merged/Closed Pull Requests:**
*   **[Memory] Configurable Reranker (#5648, #5647):** Added support for external rerankers (e.g., SiliconFlow) in memory search, allowing hybrid vector/BM25 results to be re-ranked for higher relevance. Includes UI configuration panels.
*   **[Sandbox] Windows Native Sandbox (#5525):** Implemented native sandboxing for Windows environments, improving isolation and security for agent executions.
*   **[Providers] GitHub Models Endpoint Update (#5735):** Migrated GitHub Models provider from the deprecated Azure endpoint to the new `models.github.ai` endpoint, with added support for fine-grained Personal Access Tokens (PATs).
*   **[Fix] Execution Policy Sync (#5506):** Fixed a bug where frontend policy updates did not sync the `execution_level` to `policy.yaml`, ensuring approval workflows function correctly after upgrading to v2.0.
*   **[Fix] MCP Config Resilience (#5755):** Made `AgentProfileConfig` resilient to malformed MCP client configurations (e.g., incorrect transport keys), preventing total agent startup failure due to single invalid entries.

**Active/Open Pull Requests:**
*   **[Desktop] Tauri Migration (#5734):** Switching desktop release pipeline to Tauri for better performance and smaller footprint.
*   **[Channel] Azure Bot Integration (#5762):** New channel support for Azure Bot Framework (Teams, Slack, etc.).
*   **[CI] AI Review Bot (#5736):** Introduced an automated code review bot using QwenPaw itself to streamline PR reviews.

### 4. Community Hot Topics
**Most Discussed Issues (by comments/activity):**
*   **Security & Key Management (#5705):** High interest in securing secrets in `agent.json` and masking logs (Dialog/ReMe). *Underlying Need:* Enterprise users require stricter compliance and audit trails for API keys and sensitive data.
*   **Context Compression Bugs (#5746, #5710):** Critical discussion on `scroll` context strategy failing to preserve active tasks and truncate key messages. *Underlying Need:* Long-running agents lose state, leading to "amnesia" or incorrect responses, a major blocker for complex multi-step workflows.
*   **Performance Degradation (#4559):** Reports of UI slowness with >40 agents. *Underlying Need:* Scalability concerns for power users managing multiple agents simultaneously.
*   **Proxy Configuration (#4607):** `NO_PROXY` environment variable not working as expected. *Understanding Need:* Network flexibility for users in restricted corporate environments.
*   **Reasoning Chain Display (#4650):** GLM-5.1 reasoning content not displaying in Console UI. *Understanding Need:* Transparency in model decision-making processes.

**Links:**
*   [#5705](https://github.com/agentscope-ai/QwenPaw/issues/5705)
*   [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746)
*   [#5710](https://github.com/agentscope-ai/QwenPaw/issues/5710)
*   [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559)
*   [#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607)
*   [#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650)

### 5. Bugs & Stability
**Critical/High Severity:**
*   **Context Loss in Scroll Strategy (#5746):** Agents revert to old conversations or lose current task context during long operations. *Status:* Fix PR #5765 is open, aiming to protect the active turn and implement graduated pressure relief.
*   **Endless Tool Execution Loop (#5717):** Malformed tool-call inputs in history cause the model to repeat the same tool call indefinitely. *Status:* Fix PR #5761 is open to surface malformed inputs to the model for correction rather than dropping them.
*   **Plugin Removal Errors (#5689):** Deleting a plugin (e.g., Remote SSH) leaves residual modules causing `ModuleNotFoundError`. *Status:* Closed, likely resolved in recent patches.

**Medium Severity:**
*   **Double API Prefix 404 (#5769):** Frontend calls result in `/api/api/...` errors. *Status:* Open.
*   **Repeated File Reading (#5759):** Plan mode agents redundantly read the same file multiple times without change. *Status:* Open.
*   **Heavy Task Hangs (#5763):** Users report random freezes/interrupts during heavy tasks. *Status:* Open, investigation ongoing.
*   **GBK Encoding on Windows (#4481):** System-level encoding issues affecting subprocess and logging. *Status:* Closed, systemic fix applied.

**Links:**
*   [Bug #5746](https://github.com/agentscope-ai/QwenPaw/issues/5746)
*   [Bug #5717](https://github.com/agentscope-ai/QwenPaw/issues/5717)
*   [Bug #5769](https://github.com/agentscope-ai/QwenPaw/issues/5769)
*   [Bug #5759](https://github.com/agentscope-ai/QwenPaw/issues/5759)

### 6. Feature Requests & Roadmap Signals
*   **Custom Model Protocols (#5609):** Request to support non-standard API endpoints (e.g., image generation URLs) beyond standard chat completions. *Prediction:* Likely to be addressed in future provider abstraction layers.
*   **Conversation Deletion (#4113):** Ability to remove low-quality Q&A pairs from context to prevent confusion. *Prediction:* High priority for context hygiene; may be included in next maintenance release.
*   **Plugin Hook Support (#4613):** Desire for non-invasive plugin extensions (Hooks, Skills, Channels) similar to OpenClaw. *Prediction:* Core to the v2.0 architecture evolution.
*   **Browser Automation Stability (#4584):** Switching from CDP to Playwright for better stability. *Prediction:* Already partially addressed in backend updates; user feedback suggests further refinement needed.
*   **Window Close Behavior (#4672):** Keep agent running in background when macOS window is closed. *Prediction:* Standard desktop app behavior; likely in Tauri migration scope.

**Links:**
*   [#5609](https://github.com/agentscope-ai/QwenPaw/issues/5609)
*   [#4113](https://github.com/agentscope-ai/QwenPaw/issues/4113)
*   [#4613](https://github.com/agentscope-ai/QwenPaw/issues/4613)

### 7. User Feedback Summary
*   **Pain Points:** Context management is the primary source of dissatisfaction, with users reporting "amnesia" and broken task flows in long-running sessions. Security visibility (key masking) is also a major concern for enterprise deployments.
*   **Use Cases:** Heavy usage of remote SSH plugins, automated cron jobs, and multi-agent coordination. Users are pushing for more robust sandboxing and plugin extensibility.
*   **Satisfaction:** Positive reception of the new memory reranker feature. Mixed feelings on the stability of the 2.0 beta, particularly regarding session persistence and UI responsiveness under load.

### 8. Backlog Watch
*   **#5767 (Console Architecture):** The current `@agentscope-ai/chat` SDK's single-session pull model is blocking multi-agent/multi-workspace evolution in the Console. Requires architectural refactoring.
*   **#5711 (Competitor Analysis & Improvement):** A comprehensive analysis of QwenPaw's shortcomings vs. competitors (tool calling efficiency, rule execution). Needs prioritization by maintainers for the roadmap.
*   **#5616 (Auto-task Termination):** Unexplained termination of automated tasks. Lack of logs makes debugging difficult; requires better error reporting mechanisms.

**Links:**
*   [#5767](https://github.com/agentscope-ai/QwenPaw/issues/5767)
*   [#5711](https://github.com/agentscope-ai/QwenPaw/issues/5711)
*   [#5616](https://github.com/agentscope-ai/QwenPaw/issues/5616)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-07-04

### 1. Today's Overview
ZeroClaw is experiencing high-velocity development on July 4, 2026, with 36 issues and 50 pull requests updated in the last 24 hours. The project is heavily focused on stabilizing the upcoming v0.8.3 release, with significant efforts directed toward security hardening (OIDC, zip-bomb protection), memory leak remediation in the agent loop, and enhancing the Standard Operating Procedure (SOP) engine. While no new official releases were published today, the integration of "Goal Mode" and the transition to out-of-process WASM plugin execution indicate major architectural shifts are imminent. The community is actively engaging with governance RFCs and critical bug fixes, suggesting a healthy but intense development cycle.

### 2. Releases
**None.** No new versions were released today. Development is currently targeting the v0.8.3 milestone, evidenced by multiple tracker issues and feature implementations.

### 3. Project Progress
Several key areas advanced today through merged or highly active PRs:
*   **SOP Documentation & Syntax:** PR #8679 filled critical gaps in SOP documentation, expanding condition syntax references and documenting `SOP.toml` (Linked to Issue #8587).
*   **WASM Plugin Isolation:** PR #8661 introduced a prototype for executing WASM plugins out-of-process via a `zeroclaw-plugin-host` sidecar, aiming to improve security containment (Linked to Issue #7314).
*   **Multi-User Auth Stack:** PR #8672 implemented the RFC #7141 multi-user authentication framework, adding support for peercred, native pairing, SSH keys, and OIDC providers.
*   **Goal Mode Implementation:** PR #8393 repurposed from draft to feature implementation for RFC #8303, introducing durable "Goal Mode" for bounded autonomous sessions.
*   **Skill Management Overhaul:** PR #8335 made skill installation/listing bundle-aware, fixing path resolution issues in multi-agent runtimes.
*   **Closed/Merged:** PR #8524 was merged to fix OpenAI-compatible providers by omitting empty assistant tool-call content, resolving provider rejection errors.

### 4. Community Hot Topics
The most discussed topics reflect a demand for robustness, security, and better developer experience:
*   **RFC: Work Lanes & Board Automation (#6808):** With 13 comments, this governance RFC is the highest-engagement discussion. It proposes automating issue routing and label cleanup to reduce maintainer overhead.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/6808
*   **Windows CI Failures (#7462):** 8 comments highlight a critical blocker where 74 tests fail on Windows due to path semantics and encoding issues. This suggests a strong need for cross-platform parity in the core tooling.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7462
*   **OIDC Authentication Support (#7141):** 7 comments track the umbrella RFC for pluggable authentication. The community is eager for standardized enterprise-grade auth solutions.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7141
*   **WASM Plugin Program Tracker (#7314):** Active discussion around the future of the plugin architecture, specifically focusing on the WIT/component-model direction.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7314

### 5. Bugs & Stability
A cluster of high-severity bugs emerged today, primarily affecting the runtime, SOP engine, and memory management:
*   **P1 - Skill-Review Fork Panic (#8654):** The agent daemon crashes (SIGSEGV) after tool-heavy turns due to an out-of-range slice in the `skills/review.rs` module. **Fix PR:** #8680 is open to bound the history slice.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8654
*   **P1 - SOP Approval Gate Bypass (#8678):** A logic flaw allows `advance_step` to bypass approval gates, posing a security/integrity risk in automated workflows.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8678
*   **P1 - WhatsApp Linking Broken (#8627):** Native WhatsApp Web device linking is blocked by WhatsApp’s new "Shortcake" passkey gate, rendering the channel unusable for many users.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8627
*   **P1 - MCP Tools Unavailable on Reasoning Turns (#7756):** Native MCP tools are not passed to OpenAI Responses or Anthropic reasoning models, blocking complex agent workflows.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7756
*   **P2 - Memory Leak in Agent Loop (#8642):** Split from the OOM issue, this tracks unbounded RSS growth driven by MCP/tool-schema cloning.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8642
*   **P2 - ZeroCode Silent Completion (#8644):** Code sessions can complete without visible output, confusing users.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8644

### 6. Feature Requests & Roadmap Signals
*   **Goal Mode (#8303 / #8393):** The implementation of "Goal Mode" signals a shift towards more autonomous, long-running agent tasks that persist until completion or cancellation. This is likely a flagship feature for v0.8.3.
*   **Per-Cron `uses_memory` Flag (#8397 / #8676):** Exposing memory usage controls for cron jobs in the CLI and Gateway UI indicates a focus on resource management for automated tasks.
*   **WASM Out-of-Process Execution (#8661):** The prototype for sidecar-hosted WASM plugins suggests a roadmap move towards stricter security isolation for third-party code.
*   **Git-Based Skill Catalogs (#8638):** Replacing the hardcoded ClawHub source with a generic git-catalog selector aims to decentralize and democratize skill distribution.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the lack of visibility in ZeroCode (silent completions, copy-paste artifacts) and the instability of the SOP engine (false-completions, panic crashes). The WhatsApp breakage is a significant operational blocker for mobile-integrated agents.
*   **Security Concerns:** There is heightened awareness of security risks, evidenced by reports on zip-bomb vulnerabilities (#8554) and approval gate bypasses (#8678). Users are demanding stronger isolation for plugins and skills.
*   **Usability:** The request for a UI checkbox to manage `uses_memory` (#8677) highlights a gap between backend capabilities and frontend accessibility for automation settings.

### 8. Backlog Watch
*   **Windows CI Parity (#7462):** Despite being opened in June, this issue remains open with 8 comments. Fixing 74 failing tests is essential for broad contributor accessibility and should be prioritized for v0.8.3.
*   **OIDC RFC Tracking (#7141):** As an umbrella RFC for security architecture, ensuring all sub-components are defined and implemented is critical for enterprise adoption.
*   **OOM in WSL2 (#5542):** Although marked closed, the linked issue #8642 splits the root cause into a separate memory leak tracker. Monitoring this split is vital as the original crash may recur if the memory leak isn't fully resolved.
*   **Source Install Failure (#8632):** A build-breaking issue where the embedded web client fails to generate before the gateway compiles needs immediate attention to avoid blocking developers.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*