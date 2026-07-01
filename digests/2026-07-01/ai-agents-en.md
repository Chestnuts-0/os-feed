# OpenClaw Ecosystem Digest 2026-07-01

> Issues: 305 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-01 02:33 UTC

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
**Date:** July 1, 2026
**Source:** github.com/openclaw/openclaw

## 1. Today's Overview
The OpenClaw project demonstrates high velocity with 305 issues and 500 pull requests updated in the last 24 hours, indicating a highly active development and community engagement cycle. Recent maintenance efforts focus heavily on reliability, with the v2026.6.11 release addressing critical "rough edges" such as message loss, stuck sends, and configuration failures. While the volume of reported bugs is significant—particularly around session isolation and provider routing—the large number of open PRs suggests a robust pipeline for rapid fixes and feature integration.

## 2. Releases
**Latest Release:** v2026.6.11
*   **Focus:** Stability and Dependability.
*   **Key Fixes:**
    *   Resolved issues with misplaced replies and stuck message sends.
    *   Fixed reconnection logic failures.
    *   Addressed model setup failures during initialization.
    *   Implemented safer default configurations for admin settings.
*   **Migration Notes:** Users are advised to update immediately if experiencing intermittent message delivery failures or configuration errors on startup.
*   **Link:** [Release Notes](https://docs.openclaw.ai/releases/2026.6.11)

## 3. Project Progress
Significant progress was made in stabilizing core infrastructure and expanding provider support:
*   **Security & Secrets Management:** Multiple PRs (#84779, #84738, #84689) focus on stripping plaintext API keys from `models.json` and auditing config backups, enhancing security posture.
*   **Provider Expansion:** Support for **GPT-5.6 series** (#98333) and **NEAR AI Cloud** (#84997) is being integrated, alongside fixes for structured tool result preservation across providers (#97742).
*   **Channel Enhancements:** Improvements to **Zalo** media handling (#84924), **Nostr** connection stability (#98337), and **WhatsApp** QA scenarios (#95622).
*   **Core Logic:** Normalization of provider-to-channel stream grammar (#93342) aims to unify event handling across the platform.

## 4. Community Hot Topics
High-engagement discussions reveal user priorities around mobile accessibility, session reliability, and complex routing:
*   **Android APK Releases (#9443):** 26 comments, 3 likes. Users are requesting prebuilt Android APKs for the companion app, highlighting a gap in mobile distribution despite existing source code.
*   **Steer Mode Injection (#48003):** 14 comments, 3 likes. Critical discussion on how `steer` mode handles mid-turn message injection, affecting real-time interaction quality.
*   **Multi-Agent Teams Support (#71058):** 8 comments. Feature request for supporting multiple Azure/Teams bots on a single gateway, indicating enterprise scaling needs.
*   **MCP Tool Injection in Subagents (#85030):** 9 comments. Users are frustrated by MCP tools not being properly injected into spawned subagent sessions, breaking expected functionality.

## 5. Bugs & Stability
Several high-severity bugs affecting stability and data integrity were reported or discussed:
*   **Session Isolation Failures (#84903, #85103):** Agents blocking the entire Gateway event loop or failing to trigger fallback chains during quota exhaustion.
*   **Message Loss/Truncation (#84516, #92433):** Silent truncation of long replies and dropped subagent completions.
*   **Data Loss Risks (#84882, #96704):** Memory-core deleting daily files and managed browser cookies not persisting across restarts.
*   **Configuration Conflicts (#97970, #85042):** Auto-update scripts conflicting with `auth.mode:none` and missing provider configs silently routing to wrong providers.
*   **Fix Status:** Many of these issues have linked PRs or are tagged with `needs-maintainer-review`. Specific fixes are underway for exec process leaks (#98340) and duplicate message deduplication (#98336).

## 6. Feature Requests & Roadmap Signals
*   **Prebuilt Mobile Apps:** The strong interest in Android APKs (#9443) suggests mobile-first distribution may be a near-term roadmap item.
*   **Advanced Session Management:** Requests for persistent thread sessions across daily resets (#90226) and session history family lookups (#90239) indicate a push toward more robust conversational continuity.
*   **Enterprise/Teams Integration:** Support for multiple Teams bots (#71058) signals demand for more flexible enterprise deployment options.
*   **New Model Support:** The addition of GPT-5.6 and NEAR AI provider support shows active alignment with emerging model ecosystems.

## 7. User Feedback Summary
*   **Pain Points:** Users are highly sensitive to silent failures, particularly message truncation, stuck sessions, and data loss (cookies/memory). The frustration with "stale" bugs that were auto-closed but not fixed (e.g., #96704) indicates a need for better issue lifecycle management.
*   **Satisfaction:** Positive feedback is directed at the responsiveness of the maintainers in addressing "rough edges" in recent releases. The detailed tagging system (`clawsweeper`) helps users understand the status of their reports.
*   **Use Cases:** Heavy usage in automated agent workflows (cron jobs, subagents) and multi-channel deployments (Telegram, WhatsApp, Discord, Teams) is evident from the bug reports.

## 8. Backlog Watch
Maintainers should prioritize the following items requiring deeper investigation or decision-making:
*   **Android APK Distribution (#9443):** Needs product decision on build/release pipeline for mobile clients.
*   **Event Loop Saturation (#84771, #84983):** Multiple reports highlight synchronous operations blocking the gateway. This is a core architectural concern affecting all users.
*   **Security Bypass (#98315):** An agent bypassing MCP allowlists via config override is a critical security vulnerability requiring immediate attention.
*   **Legacy Stale Issues:** Several issues marked `stale` or closed without fix (e.g., #15645 referenced in #96704) need review to ensure valid bugs aren't lost due to automation.

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: AI Agent Ecosystem Digest (July 1, 2026)**

### 1. Ecosystem Overview
The open-source AI agent landscape in mid-2026 is characterized by intense competition in stability, security, and multi-channel integration. Projects have moved beyond basic LLM wrappers to complex orchestration layers handling session isolation, memory management, and enterprise-grade reliability. While most major players are actively iterating on core infrastructure, the market is bifurcating into generalist frameworks (like OpenClaw) and specialized, lightweight agents (like NanoBot). Security and cost optimization (token efficiency) have emerged as critical differentiators, with users demanding transparent error handling and robust sandboxing.

### 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 305 | 500 | v2026.6.11 (Stable) | 9.5 |
| **Hermes Agent** | 50 | 50 | None (Patch Pending) | 8.0 |
| **ZeroClaw** | 50 | 50 | None (v0.8.x Dev) | 8.5 |
| **CoPaw** | 21 | 50 | None (v2.0.0b2 Alpha) | 7.5 |
| **IronClaw** | 22 | 50 | None (Reborn Infra) | 8.0 |
| **NanoClaw** | N/A | 14 | None (Imminent) | 7.0 |
| **LobsterAI** | 8 | 17 | v2026.6.30 (Stable) | 7.5 |
| **PicoClaw** | 6 | 7 | Nightly Build | 6.5 |
| **NanoBot** | 12 | 66 | None (Hardening) | 7.0 |
| **NullClaw** | 2 | 4 | Stable (v2026.4.17) | 6.0 |
| **Moltis** | 0 | 3 | None (Maintenance) | 5.0 |
| **TinyClaw** | 0 | 0 | None (Inactive) | 2.0 |
| **ZeptoClaw** | 0 | 0 | None (Inactive) | 2.0 |

*\*Health Score derived from velocity, issue resolution rate, and community engagement intensity.*

### 3. OpenClaw's Position
OpenClaw dominates the ecosystem in terms of sheer volume and velocity, serving as the de facto reference implementation for complex, multi-agent gateway architectures. Its primary advantage lies in its comprehensive provider support (including emerging GPT-5.6 and NEAR AI) and robust channel integration (Zalo, Nostr, WhatsApp). Unlike competitors focusing on niche use cases, OpenClaw addresses enterprise-scale concerns like session isolation and multi-bot routing. However, this scale brings significant technical debt, evidenced by high-severity bugs in message delivery and configuration conflicts, suggesting a trade-off between feature breadth and core stability.

### 4. Shared Technical Focus Areas
*   **Session Isolation & State Integrity:** Almost all active projects (OpenClaw, Hermes, NanoBot, IronClaw, ZeroClaw) are prioritizing fixes for session leakage, data corruption, and context overflow. This indicates a industry-wide realization that state management is the primary failure point for reliable agents.
*   **Security Hardening (SSRF & Sandboxing):** Specific vulnerabilities like SSRF (PicoClaw, NanoBot) and symlink escapes (NanoClaw) are being actively patched. ZeroClaw and OpenClaw are also focusing on secrets management and plugin permissions, reflecting heightened security awareness.
*   **Cost & Token Optimization:** Projects like NanoBot (context truncation), Hermes (lazy tool schema loading), and IronClaw (progressive tool disclosure) are directly addressing the financial impact of large context windows. This is a critical requirement for sustainable agent usage.
*   **Multi-Channel & Enterprise Integration:** Support for diverse platforms (WeChat, Discord, Slack, Telegram) and enterprise features (OAuth, SSO, multi-tenant routing) is a common roadmap item across OpenClaw, NanoClaw, LobsterAI, and CoPaw.

### 5. Differentiation Analysis
*   **Architecture:** OpenClaw and Hermes are heavy-weight gateways with complex dependency trees. In contrast, NanoBot and PicoClaw position themselves as lightweight, embeddable, or edge-friendly solutions. IronClaw is distinguishing itself with a Rust-based "Reborn" backend focused on concurrency.
*   **Target User:** OpenClaw and LobsterAI cater to broad consumer and developer markets needing rich UIs and integrations. NanoBot and PicoClaw appeal to developers seeking simplicity and control. NullClaw and Moltis serve niche automation or embedded use cases.
*   **Platform Focus:** CoPaw and LobsterAI show strong ties to specific ecosystems (Alibaba/Qwen and NetEase, respectively), while OpenClaw and ZeroClaw maintain a more agnostic, open-standard approach. PicoClaw’s focus on hardware (NanoKVM) and Android ADB sets it apart as an IoT-focused agent.

### 6. Community Momentum & Maturity
*   **High Velocity/Stabilizing Phase:** OpenClaw, Hermes Agent, IronClaw, and ZeroClaw are in a critical stabilization phase, merging significant architectural changes (e.g., IronClaw’s concurrency fixes, ZeroClaw’s plugin security) while addressing high-severity bugs.
*   **Rapid Iteration:** NanoBot and CoPaw are showing aggressive development cycles with frequent PR merges, focusing on refining core logic and UX.
*   **Mature/Maintenance:** LobsterAI and NullClaw have released stable versions and are now in maintenance mode, with activity focused on bug fixes and minor enhancements.
*   **Declining/Inactive:** TinyClaw and ZeptoClaw show zero activity, indicating potential abandonment or very small user bases. Moltis is in a low-volatility maintenance state.

### 7. Trend Signals
*   **Shift to Rust/Native Performance:** IronClaw’s "Reborn" backend and ZeroClaw’s RFC for a Rust→Wasm Web UI signal a broader industry trend toward native languages for performance, security, and reduced dependency bloat.
*   **Enterprise Readiness as a Baseline:** Features like OAuth, SSO, multi-tenant memory, and audit trails are no longer "nice-to-haves" but expected standards, driven by user requests in CoPaw, NanoClaw, and OpenClaw.
*   **Resilience Over Features:** The high volume of bug reports related to silent failures, message loss, and session crashes indicates that users now prioritize reliability and observability over new features. Projects that fail to address these "rough edges" risk losing community trust.
*   **Decentralized & Edge Computing:** Interest in Android APKs (OpenClaw), ADB tools (PicoClaw), and edge deployments (NanoBot) suggests a growing demand for agents that can operate outside centralized cloud environments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-07-01

## 1. Today's Overview
NanoBot is experiencing high-velocity development on July 1, 2026, with 66 Pull Requests and 12 Issues updated in the last 24 hours. The project is heavily focused on stabilizing core agent reliability, optimizing context management, and refining the WebUI experience, with no new official releases issued this period. Activity indicates a shift from rapid feature expansion to hardening infrastructure, particularly around tool execution, memory consolidation, and session state integrity.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Significant technical advancements were made today through merged/closed PRs and active development branches:
*   **Context & Cost Optimization:** PR #4608 introduces emergency tool result truncation to prevent context overflow, addressing critical stability issues during multi-tool turns. PR #4581 further reduces input tokens by compacting oversized subagent announcements, directly lowering operational costs.
*   **Memory & Session Integrity:** PR #4373 ensures delivery context is preserved during memory consolidation, preventing data loss in replay windows. PR #4609 fixes WebUI session recency sorting by stopping idle compaction from artificially refreshing session timestamps.
*   **Reliability Layers:** PR #4534 adds a comprehensive reliability layer for the agent loop and Codex provider integration, aiming to resolve task loss issues observed in real-world evaluations.
*   **Configuration & Auth:** PR #4573 allows OAuth login to be set as the main provider by default, improving initial setup UX for users relying solely on OAuth flows.

## 4. Community Hot Topics
The community is actively discussing infrastructure improvements and security vulnerabilities:
*   **Security Vulnerability:** Issue #4611 highlights a DNS rebinding TOCTOU vulnerability in SSRF validation (`validate_url_target`). This is a critical security concern that requires immediate attention to ensure network safety. [Link](https://github.com/HKUDS/nanobot/issues/4611)
*   **OAuth Integration:** Issue #4604 requests native Anthropic OAuth support, reflecting a growing need for seamless provider authentication beyond manual token entry. [Link](https://github.com/HKUDS/nanobot/issues/4604)
*   **External Triggers:** Issue #4605 expresses strong user interest in triggering agent actions from external scripts, indicating a desire for deeper integration with existing automation workflows. [Link](https://github.com/HKUDS/nanobot/issues/4605)
*   **Structured Error Handling:** PR #4610 proposes using structured `ToolResult` contracts for errors, moving away from string parsing. This suggests the community values robust, predictable tool behavior. [Link](https://github.com/HKUDS/nanobot/pull/4610)

## 5. Bugs & Stability
Several bugs affecting stability and user experience were reported or addressed today:
*   **High Severity:** Issue #4595 reports "permanent session poisoning" due to `apply_final_call_ids` overwriting correct tool call IDs, affecting all tool types. This is a critical data integrity bug. [Link](https://github.com/HKUDS/nanobot/issues/4595)
*   **Medium Severity:** Issue #4599 describes a crash in the Linux install script TUI, hindering new user onboarding. [Link](https://github.com/HKUDS/nanobot/issues/4599)
*   **Medium Severity:** Issue #4513 details exceptions when restarting NanoBot as a Windows service via NSSM, specifically regarding port conflicts and process state mismatches. PR #4547 addresses a related PID state file issue on Windows restarts. [Link](https://github.com/HKUDS/nanobot/issues/4513)
*   **Low Severity:** Issue #1023 notes that provider login tokens are not persisted correctly in certain Docker/Podman environments, though this has been open since February. [Link](https://github.com/HKUDS/nanobot/issues/1023)

## 6. Feature Requests & Roadmap Signals
User requests and PRs suggest the following roadmap priorities:
*   **Cost Control:** Multiple PRs (#4549, #4555, #4556) focus on allowing model overrides for specific components like heartbeats and sessions. This signals a strong push towards enabling users to route low-priority tasks to cheaper models.
*   **Agent Collaboration:** PR #4571 introduces native A2A (Agent-to-Agent) peer delegation, moving beyond simple subagent spawning to support team-based collaboration structures.
*   **WhatsApp Enhancements:** PR #4563 restores activity cues and mentions for WhatsApp, improving real-time interaction feedback for mobile users.
*   **OpenAI Response API:** Issue #4612 requests support for the newer OpenAI Response API, indicating a need to stay compatible with evolving provider interfaces.

## 7. User Feedback Summary
Users are praising the lightweight nature of NanoBot compared to competitors like OpenClaw, citing ease of understanding the source code (Issue #4605). However, pain points remain around:
*   **Onboarding Friction:** Crashes during installation (Issue #4599) and confusing OAuth setup (Issue #1023, PR #4573) hinder new users.
*   **Windows Service Management:** Issues with NSSM configuration and restart behaviors (Issue #4513) suggest the project needs better documentation or testing for Windows server deployments.
*   **Context Management:** Users are sensitive to context window limits and costs, driving demand for the truncation and compaction features in PRs #4608 and #4581.

## 8. Backlog Watch
*   **Issue #1023 (Provider Login Token Persistence):** Open since February 2026, this bug affects OAuth flows and has received 2 reactions. It requires maintainer attention as it impacts core authentication reliability. [Link](https://github.com/HKUDS/nanobot/issues/1023)
*   **Issue #4220 (GitHub Copilot for Business/Enterprise):** An enhancement request for enterprise GHE support, currently closed/stale. With the rise of enterprise AI adoption, revisiting this might be beneficial. [Link](https://github.com/HKUDS/nanobot/issues/4220)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-01

## 1. Today's Overview
The Hermes Agent project exhibits high development velocity on July 1, 2026, with significant activity across both issue tracking and pull requests (50 items updated in each category within the last 24 hours). The focus is heavily weighted toward stabilizing the Desktop and Gateway components, particularly regarding cross-platform compatibility (Windows/Linux fixes) and session state integrity. While no new official releases were published today, a cluster of merged and open PRs suggests imminent patching of critical session isolation bugs and UI enhancements. The community remains engaged, with ongoing debates around token optimization and provider-specific edge cases.

## 2. Releases
*   **No new releases.**
*   Several critical bug fixes and features are currently in PRs (e.g., #55980, #56016) that will likely be bundled in the next minor or patch release. Users are advised to monitor the `main` branch for these stability improvements, particularly regarding Windows runtime stability and session key generation.

## 3. Project Progress
**Merged/Closed PRs (Recent Activity):**
*   **#56016 [MERGED]** Refactored relay adapter scope terminology (`guild_id` → `scope_id`) to align with the D-Q2.5c wire migration, improving internal consistency.
*   **#55980 [MERGED]** Hardened desktop session isolation by preventing internal post-compression snapshots from being persisted as user turns and fixing weak lineage rows.
*   **#55735 [MERGED]** Removed deprecated `rcedit@5.0.2` dependency in Desktop devDependencies to clean up build warnings.

**Advanced Features/Fixes:**
*   **Kanban Board Integration:** PR #56017 adds a native Kanban board tab to the Desktop app, allowing users to manage multi-agent tasks without switching to the terminal.
*   **Cloud Connectivity:** PR #55402 introduces "Hermes Cloud" connection mode, simplifying the setup for hosted agents via one-click sign-in and discovery.
*   **Localization:** PR #45619 adds Arabic localization and RTL support for the Desktop app.
*   **Platform Expansion:** PR #3335 begins wiring Zulip as a first-class messaging platform in the gateway.

## 4. Community Hot Topics
**Most Active Issues (by Comments/Engagement):**
1.  **#6839 [OPEN] Lazy Tool Schema Loading:** (29 comments, 15 👍)
    *   *Topic:* Reducing token overhead by injecting tool schemas only when needed.
    *   *Analysis:* High engagement indicates strong community demand for cost/efficiency optimization, especially for local model users. This is a strategic architectural improvement.
2.  **#33932 [CLOSED] OpenAI Codex Provider Crash:** (12 comments)
    *   *Topic:* `gpt-5.5` on OpenAI Codex provider crashing with `HTTP None`.
    *   *Analysis:* Critical blocker for users utilizing the latest OpenAI models. Its closure suggests a temporary fix or workaround, but stability remains a concern.
3.  **#14448 [OPEN] Docker UX Issues:** (7 comments, 5 👍)
    *   *Topic:* Poor Docker user experience, specifically regarding `/root` directory creation and unclear mount paths.
    *   *Analysis:* Highlights friction in deployment for power users and enterprise setups.

## 5. Bugs & Stability
**Critical/High Severity Issues:**
1.  **#55647 [CLOSED] Skill Manage Hallucination:** Background self-improvement skills were hallucinating content due to lack of read-before-write invariants. *Fixed.*
2.  **#55985 [OPEN] Dashboard Logout Crash:** `NotImplementedError` in `BasicAuthProvider` causes container restart loops. *Severity: High (Availability).*
3.  **#55925 [OPEN] Telegram Polling Crash:** Failing background review threads kill the Telegram polling coroutine. *Severity: High (Message Delivery).*
4.  **#55815 [OPEN] Cline Provider URL Bug:** Custom Cline provider incorrectly appends `/models` to base URL. *Severity: Medium.*
5.  **#55416 [OPEN] Photon iMessage Stream Error:** Persistent `RST_STREAM` errors on shared lines. *Severity: Medium (Platform Specific).*

**Active Fixes (PRs):**
*   **#56013 [OPEN]** Fix for Windows gateway freezes caused by blocking log lock retries.
*   **#56012 [OPEN]** Stabilization of Windows runtime output and encoding issues.
*   **#55561 [OPEN]** Fix for DashScope `max_tokens` range errors causing compression death-loops.
*   **#56009 [OPEN]** Repair for weak session project bindings.

## 6. Feature Requests & Roadmap Signals
**Top Requests:**
1.  **#55961 Auto-summarize Conversation History:** To reduce token consumption in long chats. *Likelihood: High.* Aligns with the spirit of #6839 (token efficiency).
2.  **#55540 Configurable Backoff for 503/529 Errors:** Parity with Z.AI path for better resilience against provider overload. *Likelihood: High.* Improves reliability.
3.  **#29299 HTTPS OAuth Callback Support:** Needed for MCP integrations like Salesforce. *Likelihood: Medium-High.* Addressed partially by PR #47755 (configurable redirect_uri).
4.  **#523 Local Model Setup Skill:** Comprehensive guide/configuration for local models (Ollama, vLLM). *Likelihood: Medium.* Supports the growing local-first user base.
5.  **#29026 Discord Reaction Support:** Using emoji reactions for quick feedback. *Likelihood: Low-Medium.* Nice-to-have for UX speed.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Token Waste:** Users are frustrated by the fixed cost of tool schema injection, driving interest in lazy loading (#6839).
    *   **Deployment Complexity:** Docker users find the default setup restrictive and confusing, particularly regarding directory permissions and mounts (#14448).
    *   **Session Isolation:** Multiple reports indicate confusion and data leakage between profiles/sessions, especially on Windows and with complex gateway configurations (#41517, #12099).
    *   **Provider Instability:** Specific providers (OpenAI Codex, Cline, DashScope) have distinct bugs causing crashes or silent failures (#33932, #55815, #55561).
*   **Satisfaction:**
    *   Positive reception for Desktop UI improvements (Kanban board, Arabic RTL).
    *   Appreciation for the move towards "self-healing" gateways (Telegram recovery) and better cloud connectivity options.

## 8. Backlog Watch
**Items Requiring Maintainer Attention:**
1.  **#6839 Lazy Tool Schema Loading:** A high-value feature request that requires significant architectural decision-making ("needs-decision"). It impacts core performance and cost.
2.  **#55925 Telegram Crash Root Cause:** While a self-healing layer exists, the underlying cause (bg-review killing the poller) needs investigation to prevent recurrence and resource leaks.
3.  **#55985 Dashboard Logout Crash:** A simple `NotImplementedError` blocking a basic security/action flow. Should be prioritized for a quick patch.
4.  **#50170 MCP Tools Silently Absent:** A critical reliability issue where MCP tools disappear after keepalive failures without warning. Needs robust reconnection logic.
5.  **#23944 Generic OAuth Broker Credential Source:** Addresses security risks with rotating refresh tokens in multi-runtime environments. Important for enterprise security posture.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-07-01
**Source:** github.com/sipeed/picoclaw

## 1. Today's Overview
PicoClaw remains highly active with 6 issues and 7 pull requests updated in the last 24 hours, indicating robust community engagement and ongoing maintenance. The project released a new nightly build (`v0.3.1-nightly.20260701.2cf030d2`), though users are cautioned about potential instability. Current development focuses on hardening security protocols (SSRF fixes), improving provider error handling, and expanding hardware integration capabilities such as Android ADB and remote WebSocket agents.

## 2. Releases
*   **Nightly Build:** `v0.3.1-nightly.20260701.2cf030d2`
    *   **Status:** Automated nightly release.
    *   **Note:** This build is marked as potentially unstable. Users are advised to use with caution.
    *   **Changelog:** [View Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.1...main)

## 3. Project Progress
The following Pull Requests were merged or closed today, reflecting progress in stability and security:

*   **Security Hardening (Merged):** PR #3143 fixed a Server-Side Request Forgery (SSRF) vulnerability in `web_fetch` by enhancing IP classification to detect ISATAP literals embedding private IPv4 addresses.
*   **Authentication UX Improvement (Merged):** PR #3198 improved provider authentication error handling, ensuring users receive structured and friendly HTTP error messages when API keys or tokens fail.
*   **Tool Schema Stability (Closed):** PR #3131 added explicit `ok` checks for type assertions in tool schemas, preventing crashes when extracting names or descriptions from malformed tool definitions.

## 4. Community Hot Topics
These issues and PRs show significant community interest or recent activity:

*   **[Bug] Volcengine Doubao Tool Call Leakage (#3153):**
    *   *Activity:* 2 comments, created 2026-06-22.
    *   *Link:* [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)
    *   *Analysis:* Users report that tool calls from Volcengine's Doubao model are leaking as raw XML text (`<seed:tool_call>`) rather than executing. This indicates a parsing or provider-specific integration gap for newer Chinese LLM providers.
*   **[Feature] Android ADB Remote Operations (#3157):**
    *   *Activity:* Open/Stale, created 2026-06-22.
    *   *Link:* [PR #3157](https://github.com/sipeed/picoclaw/pull/3157)
    *   *Analysis:* A proposal to add experimental ADB tools for Android device control (screenshots, taps, UI hierarchy). This signals strong demand for mobile automation capabilities within the agent framework.
*   **[Bug] Task Repetition/Duplication (#3159):**
    *   *Activity:* Stale, created 2026-06-23.
    *   *Link:* [Issue #3159](https://github.com/sipeed/picoclaw/issues/3159)
    *   *Analysis:* Users using DeepSeek models report the agent repeating previous tasks (e.g., fetching US news again before French news). This suggests a context management or state-tracking regression in multi-turn conversations.

## 5. Bugs & Stability
Several critical bugs were reported today, primarily concerning connectivity and OAuth flows:

1.  **Local Endpoint Connection Failure (#3199):**
    *   *Severity:* High.
    *   *Description:* Custom model providers using local OpenAI-compatible endpoints (`127.0.0.1`) fail to connect, despite working in other clients.
    *   *Link:* [Issue #3199](https://github.com/sipeed/picoclaw/issues/3199)
2.  **OAuth Login Failures (#3196, #3197):**
    *   *Severity:* Medium-High.
    *   *Description:* Codex and Antigravity OAuth logins are reported as non-functional in v0.2.9.
    *   *Links:* [Issue #3196](https://github.com/sipeed/picoclaw/issues/3196), [Issue #3197](https://github.com/sipeed/picoclaw/issues/3197)
3.  **NanoKVM/GPT Compatibility (#3195):**
    *   *Severity:* Medium.
    *   *Description:* Default configuration fails to interact with OpenAI GPT models on NanoKVM hardware.
    *   *Link:* [Issue #3195](https://github.com/sipeed/picoclaw/issues/3195)
4.  **Session History Corruption via Inline Data URLs (#3115):**
    *   *Status:* PR Open/Fixed logic available.
    *   *Description:* A bug where generic tool outputs containing `data:image/...` strings were incorrectly parsed as media attachments, corrupting session history.
    *   *Link:* [PR #3115](https://github.com/sipeed/picoclaw/pull/3115)

## 6. Feature Requests & Roadmap Signals
*   **Remote Agent Connectivity:** PR #3118 proposes adding a WebSocket remote mode to the `picoclaw agent` CLI. This suggests a roadmap direction toward distributed agent architectures and remote execution capabilities.
*   **Deltachat Integration:** PR #3063 introduces a Deltachat gateway, indicating an expansion into decentralized communication protocols beyond standard web/UI interfaces.
*   **Mobile Automation:** As noted in Hot Topics, the Android ADB PR (#3157) highlights a growing interest in physical device control and IoT/mobile integration for AI agents.

## 7. User Feedback Summary
*   **Provider Reliability:** There is noticeable friction with specific providers (Volcengine/Doubao, Codex, Antigravity). Users are experiencing both functional bugs (leaking tool calls, OAuth failures) and configuration issues (local host connections).
*   **State Management:** Reports of task repetition (#3159) suggest users are encountering instability in long-running or multi-step conversations, particularly with specific model backends.
*   **Hardware Compatibility:** Users are actively testing PicoClaw on edge devices like NanoKVM, providing feedback on compatibility with default configurations.

## 8. Backlog Watch
Maintainers should prioritize addressing the following stale or high-impact items:

*   **Android ADB Tool PR (#3157):** Open since June 22. Needs review for merging or rejection to clarify mobile automation support.
*   **Deltachat Gateway PR (#3063):** Open since June 8. Significant feature addition requiring thorough testing.
*   **Remote WebSocket Mode PR (#3118):** Open since June 12. Enhances core agent architecture.
*   **Issue #3153 (Volcengine Leak):** Despite being open for ~10 days, it has low comment activity but represents a critical functional bug for a segment of users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest: 2026-07-01**

### 1. Today's Overview
The NanoClaw project exhibits high development velocity with 14 Pull Requests updated in the last 24 hours, indicating rapid iteration on channel integrations and security patches. Activity is split between merging significant feature additions (Discord, WeChat, Document Rendering) and resolving critical stability issues in existing adapters (WhatsApp, Signal). While no new releases were published, the volume of merged changes suggests an imminent release cycle. Security remains a primary focus, with immediate fixes applied to symlink vulnerabilities and deployment stability improvements.

### 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Pending:** Several merged PRs address breaking changes or new dependencies (e.g., `@chat-adapter/discord@4.29.0`, `matrix-bot-sdk` rewrite) that will likely be included in the next patch or minor release.

### 3. Project Progress
**Merged/Closed PRs (Key Highlights):**
*   **[feat] Daily News Agent & WeChat Adapter (#2889):** Introduced a new `daily-news-agent` with TDD coverage and a WeChat channel adapter, expanding ecosystem reach beyond Western platforms.
*   **[feat] Discord Channel Adapter (#2884):** Added a native Discord adapter via Chat SDK bridge with concurrent dispatch and fixed approval-button routing in DMs.
*   **[feat] Host-Mediated Document Rendering (#2893):** Implemented secure document rendering (Quarto/LaTeX/Chromium) in isolated ephemeral containers to prevent agent-side resource exhaustion.
*   **[fix] WhatsApp Media Recovery (#2895):** Resolved silent media loss by implementing `reuploadRequest` fallback in the Baileys adapter.
*   **[fix] Signal Boot Stability (#2874):** Prevented crash-loops during `signal-cli` initialization flaps.
*   **[fix] Slack Setup Flow (#2885):** Corrected the guided setup to properly offer Socket Mode, which was previously missing from the main branch.
*   **[fix] Discord DM Context Approval (#2018):** Fixed user resolution in DM-based approval cards, a long-standing bug affecting DM workflows.

### 4. Community Hot Topics
*   **Security Hardening (#2828 / #2880):** The symlink escape vulnerability in A2A attachment forwarding garnered 2 👍 reactions and was rapidly patched. This highlights community concern over multi-agent session isolation and file system security.
    *   *Issue:* [nanocoai/nanoclaw Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828)
    *   *PR:* [nanocoai/nanoclaw PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880)
*   **WhatsApp Reliability (#2894 / #2895):** The issue regarding silent media dropping sparked immediate action. The correlation between the issue report and the follow-up fix PR (#2896) demonstrates a responsive maintenance cycle.
    *   *Issue:* [nanocoai/nanoclaw Issue #2894](https://github.com/nanocoai/nanoclaw/issues/2894)
    *   *PR:* [nanocoai/nanoclaw PR #2895](https://github.com/nanocoai/nanoclaw/pull/2895)

### 5. Bugs & Stability
*   **Severity: High - Symlink Escape (Fixed):** Issue #2828 allowed writing outside session roots via symlinks. **Fixed** in PR #2880.
*   **Severity: Medium - WhatsApp Media Loss (Fixed):** Inbound media dropped on CDN failure. **Fixed** in PR #2895, with a regression fix in PR #2896.
*   **Severity: Medium - Discord DM Approval Failure (Fixed):** Button clicks in DMs failed to resolve users correctly. **Fixed** in PR #2018.
*   **Severity: Low - Signal Crash Loops (Fixed):** Service instability during boot. **Fixed** in PR #2874.
*   **Regression Risk:** PR #2896 addresses a regression introduced in #2895 where `appendMediaFailureNote` was applied too early in the pipeline.

### 6. Feature Requests & Roadmap Signals
*   **Matrix E2EE Support (#2844):** An open PR proposes replacing the WASM-based Chat SDK bridge with a native Rust-binding adapter (`matrix-bot-sdk`). This signals a roadmap shift toward higher performance and native cryptographic security for Matrix users.
*   **Agent Templates (#2890):** Open PR introduces a templating system for agent groups, suggesting a future focus on ease-of-deployment and standardized agent configurations.
*   **Telegram Thread Support (#2892):** Open PR enables forum/topic threads, indicating continued refinement of the Telegram adapter to match platform-native features.

### 7. User Feedback Summary
*   **Pain Point:** Silent failures in media handling (WhatsApp) and user identification (Discord DMs) are critical friction points. Users require transparent error handling rather than swallowed exceptions.
*   **Use Case Expansion:** The addition of WeChat and Discord adapters shows users are actively integrating NanoClaw into diverse communication ecosystems, particularly in regions/platforms previously underserved.
*   **Security Awareness:** Users are increasingly attentive to sandbox boundaries, as evidenced by the detailed reporting of the symlink vulnerability.

### 8. Backlog Watch
*   **Matrix Native Adapter (#2844):** This is a significant architectural change. Maintainers need to ensure thorough testing of the Rust bindings before merging, as it replaces a core dependency.
*   **Template System (#2890):** The introduction of templates requires careful design of the schema and loading logic to avoid breaking existing agent structures.
*   **Telegram Threads (#2892):** Minor feature but important for UX parity; should be reviewed for edge cases in large groups.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-07-01

### 1. Today's Overview
NullClaw demonstrates high development velocity with four pull requests merged/closed within the last 24 hours, indicating a strong focus on stabilizing core infrastructure and cron subsystems. However, active engagement in issue resolution is currently low, with two open bugs remaining unaddressed despite recent reports. The absence of new releases suggests the team is prioritizing code integration and bug fixing over public distribution. Overall, the project health is robust in terms of contributor activity but shows a bottleneck in maintaining timely responses to user-reported stability issues.

### 2. Releases
No new releases were published during this period. The latest stable version remains v2026.4.17.

### 3. Project Progress
The following four Pull Requests were closed/merged, significantly advancing the stability and usability of the Cron subsystem and Provider integrations:

*   **[PR #641](https://github.com/nullclaw/nullclaw/pull/641)**: Fixed critical logic errors in GLM/ZhipuAI providers, specifically addressing infinite response loops caused by default "thinking mode" behavior.
*   **[PR #643](https://github.com/nullclaw/nullclaw/pull/643)**: Resolved a regression where agent cron jobs disappeared after gateway restarts by making the `command` field optional for agent-type jobs.
*   **[PR #645](https://github.com/nullclaw/nullclaw/pull/645)**: Enhanced CLI functionality by adding `--account` support to `nullclaw cron add-agent`, allowing full delivery routing configuration without manual JSON editing.
*   **[PR #783](https://github.com/nullclaw/nullclaw/pull/783)**: Major feature advancement introducing a DB-backed Cron subagent engine, including history tracking, JSON CLI outputs, timezone offsets, and security hardening.

### 4. Community Hot Topics
The most discussed items today involve platform-specific build failures and service reliability:

*   **Issue #868** ([Link](https://github.com/nullclaw/nullclaw/issues/868)): A bug report regarding `zig build` failures on Android/Termux (aarch64). This highlights the community's interest in mobile/embedded deployment, though it currently lacks traction (0 reactions).
*   **Issue #972** ([Link](https://github.com/nullclaw/nullclaw/issues/972)): A newly reported bug concerning Telegram channels becoming unresponsive after idle periods. Despite having 0 comments, this touches on critical uptime concerns for production users relying on automated messaging.
*   **PR #641** ([Link](https://github.com/nullclaw/nullclaw/pull/641)): While merged, the fix addresses a common pain point with LLM providers that enforce reasoning modes, suggesting ongoing community friction with non-standard API behaviors.

### 5. Bugs & Stability
Two open issues indicate stability risks that require immediate attention:

1.  **High Severity - Telegram Service Instability [Issue #972](https://github.com/nullclaw/nullclaw/issues/972)**: Users report that Telegram channels "die" after overnight idle times. This suggests a potential connection pool exhaustion, heartbeat failure, or session timeout issue in the backend agent loop.
2.  **Medium Severity - Build Failure on Mobile Platforms [Issue #868](https://github.com/nullclaw/nullclaw/issues/868)**: The build process fails on Android/Termux environments due to permission errors during linking (`linkat`). This blocks contributors and users attempting to compile from source on ARM-based mobile devices.

*Note: No open PRs currently target these specific bugs.*

### 6. Feature Requests & Roadmap Signals
Based on the merged PRs, the roadmap for the upcoming cycle focuses on:
*   **Advanced Automation**: The introduction of the DB-backed Cron engine (PR #783) signals a shift towards more robust, persistent, and schedulable autonomous agent tasks.
*   **Provider Compatibility**: Continued effort to normalize behavior across different LLM providers (GLM/Zhipu) to ensure consistent agent performance.
*   **Developer Experience (DX)**: Improvements in CLI usability for complex configurations (account routing, JSON outputs) suggest a goal to lower the barrier to entry for power users.

### 7. User Feedback Summary
*   **Pain Points**: Users are frustrated by silent data loss in cron jobs (PR #643 context) and confusing API behaviors from providers like ZhipuAI that inject unwanted reasoning tokens (PR #641 context).
*   **Use Cases**: Strong usage in automated Telegram bot operations and scheduled agent runs. There is also a niche but active segment of users trying to run NullClaw on resource-constrained or non-standard environments like Termux.
*   **Satisfaction**: The merging of several fixes indicates responsiveness to technical debt, but the lack of replies to recent stability issues may lead to user anxiety regarding production reliability.

### 8. Backlog Watch
Maintainers should prioritize investigating the following long-standing or newly escalated items:
*   **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868)**: Created in April, still open. Requires investigation into Zig's build system compatibility with Termux permissions.
*   **[Issue #972](https://github.com/nullclaw/nullclaw/issues/972)**: Created today but represents a critical production failure for Telegram users. Immediate triage is recommended to determine if this is a network timeout or state management issue.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-07-01
**Source:** GitHub Data Analysis (nearai/ironclaw)

## 1. Today's Overview
The IronClaw project exhibits high velocity with 50 Pull Requests updated and 22 Issues active in the last 24 hours, indicating intense development and QA cycles despite zero new releases. Activity is heavily concentrated on the "Reborn" backend infrastructure, focusing on concurrency stability, CAS (Compare-And-Swap) serialization fixes, and integration test coverage. While feature work continues on UI improvements like notification headers and chat composer fixes, significant technical debt regarding runtime leases and concurrent turn execution is being actively addressed. The project appears to be in a critical stabilization phase for its Reborn architecture ahead of potential upcoming releases.

## 2. Releases
*   **No new releases published.**
*   **Note:** Several PRs merged today (e.g., #5234, #5432, #5465) represent significant architectural shifts in concurrency handling and CI pipelines, suggesting a release may be forthcoming once these foundational changes are validated in staging.

## 3. Project Progress
**Merged/Closed PRs (Significant Updates):**
*   **Concurrency Stabilization (#5234):** Merged a critical fix removing per-record mutex convos in favor of a shared `cas_update` helper, addressing runtime wedges caused by burst traffic.
    *   [PR #5234](https://github.com/nearai/ironclaw/pull/5234)
*   **CI Pipeline Improvements (#5432, #5430):** Added dedicated low-contention jobs for Reborn group tests and integrated `cargo-llvm-cov` for coverage tracking.
    *   [PR #5432](https://github.com/nearai/ironclaw/pull/5432)
    *   [PR #5430](https://github.com/nearai/ironclaw/pull/5430)
*   **Test Harness Optimization (#5465):** Collapsed group harnesses to a single runtime to reduce flakiness caused by CPU contention and scheduler claims.
    *   [PR #5465](https://github.com/nearai/ironclaw/pull/5465)
*   **Feature Rollout (#5431):** Re-enabled `spawn_subagent` functionality and un-ignored associated E2E tests after confirming the previous disablement was only a temporary toggle.
    *   [PR #5431](https://github.com/nearai/ironclaw/pull/5431)
*   **Dependency Security (#5473, #5474):** Bumped `ws` and `rand` packages to resolve Dependabot alerts.
    *   [PR #5473](https://github.com/nearai/ironclaw/pull/5473)
    *   [PR #5474](https://github.com/nearai/ironclaw/pull/5474)

**Open PRs Advancing Features:**
*   **Trace Commons (#5280):** Implementing instance-wide enrollment and per-user profiles for tracing.
    *   [PR #5280](https://github.com/nearai/ironclaw/pull/5280)
*   **Latency Tracing (#5472):** Adding live latency trace instrumentation to debug request stalls.
    *   [PR #5472](https://github.com/nearai/ironclaw/pull/5472)
*   **Performance Optimization (#5471):** Rewriting the assistant reply finalization path to use a one-shot append, reducing write operations.
    *   [PR #5471](https://github.com/nearai/ironclaw/pull/5471)

## 4. Community Hot Topics
**Most Active/Discussed Issues:**
*   **Routine Delivery Scope Bug (#5420):** Users report that setting a Slack delivery target for one routine incorrectly overrides the default for *all* routines for a user. This highlights a critical design flaw in how routine configurations are scoped globally vs. locally.
    *   [Issue #5420](https://github.com/nearai/ironclaw/issues/5420)
*   **Reborn Runtime Leases (#5476, #5456):** Multiple issues cite "runner lease expired" and "could not start agent runtime" failures, particularly under concurrency. This is a major pain point for reliability.
    *   [Issue #5476](https://github.com/nearai/ironclaw/issues/5476)
    *   [Issue #5456](https://github.com/nearai/ironclaw/issues/5456)
*   **WebUI Header Notifications (#5443):** A feature request to add header notifications for automation tasks, addressing the issue where users miss automated triggers.
    *   [Issue #5443](https://github.com/nearai/ironclaw/issues/5443)

**Underlying Needs:**
*   **Granular Configuration:** The community needs finer-grained control over routine settings (delivery channels, scopes) rather than global defaults.
*   **Reliability Under Load:** High concurrency exposes race conditions in the Reborn backend; users and QA teams need robust serialization mechanisms.
*   **Visibility:** Users want better feedback loops for background automation tasks.

## 5. Bugs & Stability
**Critical/High Severity Bugs:**
1.  **Runner Lease Expiration (#5456, #5476):** Routine runs fail due to aggressive 90-second inactivity thresholds during multi-tool workflows involving model inference.
    *   [Issue #5456](https://github.com/nearai/ironclaw/issues/5456)
    *   [Issue #5476](https://github.com/nearai/ironclaw/issues/5476)
    *   *Status:* Active investigation; likely linked to the concurrency fixes in PR #5234.
2.  **Global Routine Scope Override (#5420):** Changing delivery for one routine affects all routines for a user.
    *   [Issue #5420](https://github.com/nearai/ironclaw/issues/5420)
    *   *Status:* Open, requires architectural change to support per-routine configuration.
3.  **CAS Serialization Contention (#5466, #5468):** Parallel turn runs cause ~10% failure rates due to serialization behind `AsyncStorageWorker` and per-key mutex violations.
    *   [Issue #5466](https://github.com/nearai/ironclaw/issues/5466)
    *   [Issue #5468](https://github.com/nearai/ironclaw/issues/5468)
    *   *Status:* Addressed by PR #5234 (merged), but follow-up issues (#5470, #5469) remain open to fully migrate stores.
4.  **Memory Visibility Leak (#5460):** Memories saved in a workspace are visible to all users, violating privacy expectations.
    *   [Issue #5460](https://github.com/nearai/ironclaw/issues/5460)
5.  **UI Rendering Errors (#5458, #5457):** Duplicate headers on Logs page and infinite loading states preventing debugging.
    *   [Issue #5458](https://github.com/nearai/ironclaw/issues/5458)
    *   [Issue #5457](https://github.com/nearai/ironclaw/issues/5457)

## 6. Feature Requests & Roadmap Signals
*   **Configurable Skills/Tools (#5459):** Request for granular permission controls (admin vs. user, shared vs. private) for installing WASM tools and skills.
    *   [Issue #5459](https://github.com/nearai/ironclaw/issues/5459)
*   **Progressive Tool Disclosure (#5149):** PR #5149 aims to cut prompt size by dynamically disclosing tools, directly addressing latency and timeout issues with large tool schemas.
    *   [PR #5149](https://github.com/nearai/ironclaw/pull/5149)
*   **Trace Commons Enrollment (#5280):** Moving towards instance-wide trace enrollment and per-user profiles, signaling a shift toward standardized observability.
    *   [PR #5280](https://github.com/nearai/ironclaw/pull/5280)
*   **Mock-MCP Test Hardening (#5428):** Improving test scaffolding for MCP integration, suggesting increased focus on third-party tool compatibility.
    *   [Issue #5428](https://github.com/nearai/ironclaw/issues/5428)

**Prediction:** The next version will likely emphasize **concurrency stability** (fixing the CAS/lease issues) and **performance optimization** (progressive tool disclosure, reduced token usage) as primary selling points.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Frustration with Automation Reliability:** Users are encountering frequent failures in routine creation and execution due to system drive availability (#5426) and lease timeouts (#5456).
    *   **Privacy Concerns:** The visibility of memories across workspace users (#5460) is a significant trust issue.
    *   **Debugging Barriers:** The empty/unloading Logs page (#5457) prevents users from diagnosing why their automations fail.
    *   **Configuration Confusion:** The global scope bug for routine delivery (#5420) leads to unexpected behavior where users lose control over individual automation channels.
*   **Positive Signals:**
    *   Developers appreciate the detailed QA reports and the proactive fixing of infrastructure issues (e.g., the merge of #5234).
    *   The push for better notification systems (#5443) addresses user desire for awareness of background tasks.

## 8. Backlog Watch
*   **Resource Governor Store Async Migration (#5470):** Follow-up to PR #5234, needs to make `ResourceGovernorStore` async to prevent serialization bottlenecks.
    *   [Issue #5470](https://github.com/nearai/ironclaw/issues/5470)
*   **Filesystem Service CAS Loop Migration (#5469):** `ironclaw_threads` still uses local CAS loops that need to be migrated to the shared `cas_update` helper.
    *   [Issue #5469](https://github.com/nearai/ironclaw/issues/5469)
*   **Credential Owner Scope Typing (#5464):** Needs strong typing for host-managed credentials to prevent misuse in fallback scenarios.
    *   [Issue #5464](https://github.com/nearai/ironclaw/issues/5464)
*   **Web Search Token Requirement (#5429):** QA reports that Web Search requires a NEAR AI Cloud API token in multi-tenant setups, which may be a configuration or documentation gap.
    *   [Issue #5429](https://github.com/nearai/ironclaw/issues/5429)
*   **Daily Failure Taxonomy (#5437):** Ongoing tracking of nightly E2E failures, specifically noting HTTP 400 errors from model providers (DeepSeek).
    *   [Issue #5437](https://github.com/nearai/ironclaw/issues/5437)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-07-01
**Source:** GitHub (netease-youdao/LobsterAI)

### 1. Today's Overview
LobsterAI demonstrates high development velocity with 17 PRs updated and 8 issues touched in the last 24 hours, indicating robust maintenance activity. The release of version 2026.6.30 marks a significant milestone, focusing heavily on observability, analytics compliance, and stability fixes for the Cowork and OpenClaw modules. While the core engineering team is actively merging fixes and refining UI components, community engagement on long-standing usability bugs remains stagnant, with several critical user-reported issues marked as "stale."

### 2. Releases
**Version:** 2026.6.30
**Release Date:** 2026-06-30

*   **Key Changes:**
    *   **Diagnostics:** Added comprehensive logging for Cowork and OpenClaw flows to aid in production troubleshooting (PR #2229).
    *   **OpenClaw Stability:** Fixed fallback catalog max token limits for native Anthropic-format providers (PR #2232).
    *   **Analytics Compliance:** Expanded product analytics coverage and unified reporting parameters; removed sensitive prompt intent fields from analytics payloads to enhance privacy (PR #2237, #2233).
    *   **UI Optimization:** Refined the model editing UI (PR #2236).
*   **Breaking Changes/Migration:** No major breaking changes noted. However, analytics payloads have changed to exclude prompt intent types/subtypes; downstream users relying on these specific semantic fields should update their parsing logic.

### 3. Project Progress
The majority of today's activity was dedicated to stabilizing the "Cowork" module and ensuring release readiness.

*   **Merged/Closed PRs:**
    *   **UI/UX Fixes:** Multiple PRs (#2235, #2226, #2223, #2218) addressed conversation rail overlaps, tooltip cleanliness, and navigation rail previews. A notable effort involved reverting and re-applying conversation rail fixes to ensure stability on the release branch (PR #2225, #2226).
    *   **Backend Logic:** Fixed scheduled task run history initialization via the OpenClaw gateway (PR #2231) and resolved cron yield descendant finalization issues (PR #2234).
    *   **Service Deployment:** PR #2238 introduced service deployment updates for OC 2026.1.1.

### 4. Community Hot Topics
*   **Performance Discrepancy:** Issue #2230 highlights a severe performance gap where LobsterAI takes ~25 minutes compared to CodeBuddy's ~2 minutes for similar tasks, consuming significantly more tokens. This indicates a potential bottleneck in the current LLM routing or context handling pipeline.
    *   [Link](https://github.com/netease-youdao/LobsterAI/issues/2230)
*   **WeChat Sync & State Management:** Issues #1383 and #1385 report persistent bugs regarding WeChat bot synchronization, specifically duplicate message handling and history persistence after deletion.
    *   [Link](https://github.com/netease-youdao/LobsterAI/issues/1383)
    *   [Link](https://github.com/netease-youdao/LobsterAI/issues/1385)

### 5. Bugs & Stability
Several high-impact bugs were reported today, primarily affecting user experience and data integrity.

1.  **Multi-file Upload Failure (High Severity):** Issue #1384 and PR #1372 address a bug where selecting multiple files in a session results in only the last file being retained. This affects core productivity workflows.
    *   [Issue](https://github.com/netease-youdao/LobsterAI/issues/1384) | [Fix PR](https://github.com/netease-youdao/LobsterAI/pull/1372)
2.  **Scheduled Task Session Proliferation (Medium Severity):** Issue #1381 notes that cron jobs create new windows every time instead of reusing sessions, leading to clutter.
    *   [Issue](https://github.com/netease-youdao/LobsterAI/issues/1381)
3.  **Skill Upload UX Gaps (Low-Medium Severity):** Issues #1426 and #1427 report missing success notifications and duplicate skill creation upon local upload.
    *   [Issues](https://github.com/netease-youdao/LobsterAI/issues/1426) | [Issues](https://github.com/netease-youdao/LobsterAI/issues/1427)
4.  **Log Export UI Feedback (Low Severity):** Issue #1382 suggests changing red error indicators to less alarming colors, noting user confusion.
    *   [Issue](https://github.com/netease-youdao/LobsterAI/issues/1382)

### 6. Feature Requests & Roadmap Signals
*   **System Notifications for Background Tasks:** PR #1428 introduces a feature to push native OS notifications when sessions complete or error out while the window is unfocused. This addresses a key usability gap compared to competitors like Cursor.
    *   [PR](https://github.com/netease-youdao/LobsterAI/pull/1428)
*   **WeChat Bot Robustness:** Multiple issues (#1383, #1385) suggest a need for better state management and deduplication in the WeChat integration module.
*   **Token Efficiency:** The complaint in Issue #2230 signals strong demand for optimization in token consumption and latency, likely driving future roadmap priorities for the Cowork engine.

### 7. User Feedback Summary
Users are experiencing frustration with **state inconsistency** and **performance inefficiency**.
*   **Pain Points:** The multi-file upload bug (#1384) and the WeChat sync issues (#1383, #1385) disrupt daily workflows. Users feel that the tool is losing data (files, history) unexpectedly.
*   **Satisfaction:** The addition of diagnostic logging (PR #2229) and system notifications (PR #1428) is positively received by power users who value transparency and background awareness.
*   **Comparison:** Direct comparison with CodeBuddy (#2230) shows users are actively benchmarking alternatives, indicating that LobsterAI must improve speed/token efficiency to retain enterprise/developer users.

### 8. Backlog Watch
Maintainers should prioritize addressing the "stale" issues that have seen recent updates but no resolution:
*   **Issue #1372 / #1384:** The fix for multi-file selection is ready in PR #1372 but the issue remains open/stale. Immediate merge is recommended.
*   **Issue #1381:** Cron job session reuse is a common pattern request; lack of fix may drive users to manual workarounds.
*   **Issue #2230:** The performance regression/comparison requires immediate investigation by the engineering team to prevent churn.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-07-01

### 1. Today's Overview
The Moltis project is currently in a maintenance-heavy phase, with no new feature releases or critical issue resolutions recorded in the last 24 hours. Activity is limited to three recent pull requests focused entirely on dependency updates via Dependabot, indicating a stable but quiet development cycle. There are zero open issues or active discussions requiring immediate community or maintainer attention, suggesting low volatility in the codebase at this moment.

### 2. Releases
No new releases have been published since the last report. The project remains on its previous version, relying on automated dependency updates rather than full release cycles during this period.

### 3. Project Progress
Three pull requests were merged/closed recently, all related to JavaScript dependency management:
*   **[PR #1141](https://github.com/moltis-org/moltis/pull/1141)**: Merged/Updated on 2026-06-30. Bumped `npm_and_yarn` groups in `/crates/web/ui` (esbuild, vite) and `/docs` (esbuild). This ensures the build tools remain current without introducing breaking changes.
*   **[PR #1134](https://github.com/moltis-org/moltis/pull/1134)**: Closed on 2026-06-30. Updated `astro` (docs) and `undici` (website). Specifically upgraded `astro` from 6.3.3 to 6.4.8, likely improving static site generation performance and compatibility.
*   **[PR #1121](https://github.com/moltis-org/moltis/pull/1121)**: Closed on 2026-06-30. Significant update to `esbuild` in `/crates/web/ui` from 0.25.12 to 0.28.1. This major jump in minor/patch versions suggests improvements in bundling speed or output optimization for the web UI component.

### 4. Community Hot Topics
There are no hot topics or active discussions today. The most recent activity involves automated bot contributions:
*   **PR #1141**: Focuses on keeping the frontend toolchain modern (Vite/esbuild).
*   **PR #1134**: Focuses on documentation and website infrastructure (Astro/Undici).
*   **PR #1121**: Focuses on core UI build stability (Esbuild).
Underlying needs appear to be strictly technical maintenance rather than feature demand or bug reporting.

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The closure of PR #1121 (esbuild update) implies that potential stability issues associated with the older 0.25.x version may have been mitigated by moving to 0.28.1. No open issues indicate current stability concerns.

### 6. Feature Requests & Roadmap Signals
No new feature requests were filed or discussed today. The roadmap signals are neutral, dominated by routine dependency upkeep. There is no evidence of urgent user-driven feature requests in the current issue tracker.

### 7. User Feedback Summary
There is no real-time user feedback available due to a lack of open issues or comments. The absence of user complaints or praise suggests either a stable user base encountering no friction or a low-engagement period where users are not actively interacting with the repository.

### 8. Backlog Watch
There are no long-unanswered important issues or PRs visible in the current data snapshot. With 0 open issues and 0 pending PRs requiring review beyond the recently closed/merged ones, the backlog is effectively clear of immediate maintenance tasks.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-07-01
**Source:** agentscope-ai/CoPaw (QwenPaw)

### 1. Today's Overview
The project exhibits high development velocity with 21 active issues and 50 pull requests updated in the last 24 hours. While no new releases were published today, significant progress was made in core stability, specifically addressing frontend rendering crashes and backend cancellation logic. Community engagement is strong, particularly around usability enhancements like input limits and memory retrieval precision. The absence of a new release suggests the team is currently stabilizing the codebase ahead of a potential v2.0.0 GA or patch update.

### 2. Releases
*   **No new releases.**
*   Current tracked versions include `1.1.12.post2` and `2.0.0b2` (alpha/pre-release).

### 3. Project Progress
Several key improvements were merged or advanced today, focusing on memory precision, UI responsiveness, and security documentation:
*   **Memory Precision:** PRs #5647 and #5648 introduced configurable reranker support for memory search, allowing users to enable `qwen3-rerank` or external APIs (e.g., SiliconFlow) to improve retrieval accuracy beyond simple vector similarity.
*   **Security & Governance:** PR #5301 merged the ToolGuard detectors into the Policy engine, while PR #5621 added comprehensive Sandbox documentation. PR #5623 fixed a critical bug where "OFF" mode for tool execution still triggered approval prompts.
*   **UI/UX Refinements:** PR #5669 implemented `qwen3-rerank` integration for `ReMeLightMemoryManager`. PR #5679 resolved session switch flashing and alert flickering in the console. PR #5673 added a live context-usage bar to the TUI status bar.

### 4. Community Hot Topics
High-interest discussions revolve around usability constraints and channel-specific performance issues:
*   **Input Character Limit:** Issue #5670 and PR #5675 highlight user frustration with the hardcoded 10k character limit in the input box, arguing it restricts modern LLM capabilities.
*   **Memory Retrieval Accuracy:** Issue #5588 discusses the need for two-stage retrieval (embedding + reranking) to combat recall degradation as memory libraries grow.
*   **Channel Performance:** Issue #5603 reports slow streaming output on DingTalk cards, impacting user efficiency for long-form responses.
*   **Link:**
    *   [Issue #5670](https://github.com/agentscope-ai/QwenPaw/issues/5670)
    *   [Issue #5588](https://github.com/agentscope-ai/QwenPaw/issues/5588)
    *   [Issue #5603](https://github.com/agentscope-ai/QwenPaw/issues/5603)

### 5. Bugs & Stability
Critical stability issues were addressed today, particularly regarding frontend crashes and backend task management:
*   **Frontend Crash on Large History:** Issue #5401 described a crash when rendering sessions with extensive tool-use history. This appears linked to data type mismatches (`type: "data"` vs `type: "tool_use"`).
*   **Task Cancellation Stuck State:** PR #5674 fixes an issue where cancelling a task left the frontend stuck in a "processing" state due to `asyncio` cancellation handling.
*   **Browser Autofill Interference:** Issue #5403 reports that the browser's autofill pop-up hijacks the "Search providers" input on the Model Configuration page.
*   **Heartbeat Timeout:** Issue #5539 identifies a hard-coded 120-second timeout causing intermittent failures in heartbeat tasks.
*   **Link:**
    *   [PR #5674](https://github.com/agentscope-ai/QwenPaw/pull/5674)
    *   [Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)
    *   [Issue #5403](https://github.com/agentscope-ai/QwenPaw/issues/5403)

### 6. Feature Requests & Roadmap Signals
User feedback indicates a clear demand for granular control and platform expansion:
*   **Loop Detection:** Issue #5657 requests a mechanism to detect and break infinite loops in agentic workflows, especially with larger models.
*   **Linux Desktop Support:** Issue #5668 proposes adding an AppImage build for Linux, leveraging Tauri's native support.
*   **File Browser Integration:** Issue #5667 suggests adding a workspace file browser to the chat interface for easier access to agent-generated outputs.
*   **Per-Cron Job Model Override:** Issue #5638 requests honoring the `request.model` field in cron jobs, allowing different models for scheduled tasks.
*   **Prediction:** The loop detection mechanism and Linux build support are likely candidates for near-term roadmap inclusion given the explicit community interest and technical feasibility.

### 7. User Feedback Summary
Users express dissatisfaction with artificial constraints (input limits, timeout durations) and channel-specific performance bottlenecks. However, there is positive reception for improvements in memory retrieval and security governance.
*   **Pain Points:** DingTalk streaming latency (#5603), arbitrary input length caps (#5670), and rigid heartbeat timeouts (#5539).
*   **Use Cases:** Heavy usage of cron jobs for monitoring (#5566) and multi-agent collaboration via DingTalk mentions (#5564).
*   **Satisfaction:** Users appreciate the new memory reranking capabilities and clearer security documentation.

### 8. Backlog Watch
Several issues require maintainer attention due to lack of recent updates or pending resolution:
*   **Telegram BaseURL Support:** Issue #5630 has been open since June 29 with 6 comments, requesting custom BaseURL support for Telegram channels.
*   **Flights/Replies Delivery:** Issue #5561 reports that Feishu (Lark) bot replies fail for longer messages unless sent as files.
*   **Auto-termination:** Issue #5616 describes automated tasks terminating unexpectedly without manual intervention, though details are sparse.
*   **Link:**
    *   [Issue #5630](https://github.com/agentscope-ai/QwenPaw/issues/5630)
    *   [Issue #5561](https://github.com/agentscope-ai/QwenPaw/issues/5561)
    *   [Issue #5616](https://github.com/agentscope-ai/QwenPaw/issues/5616)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-07-01
**Source:** github.com/zeroclaw-labs/zeroclaw

## 1. Today's Overview
ZeroClaw exhibits high development velocity with 50 issues and 50 PRs updated in the last 24 hours, indicating intense active maintenance and feature iteration. Although no new releases were published, the project is heavily engaged in architectural refinements for v0.8.x, specifically focusing on plugin security, channel integrations, and CI/CD robustness. The community is actively debating governance structures and runtime optimizations, with several high-priority bugs regarding session management and provider connectivity currently being addressed.

## 2. Releases
No new releases were published on this date. Development is currently consolidated around the upcoming v0.8.3 release cycle, evidenced by multiple tracking issues and RFCs targeting runtime and provider stability.

## 3. Project Progress
Significant technical advancements were made in the following areas:
*   **Security & Dependency Management:** PR #8547 removed the `rag-pdf` feature to mitigate the `RUSTSEC-2026-0192` vulnerability in `ttf-parser`. PR #8548 introduced strict bounds for skill ZIP extraction (50 MiB limit, 500 entries) to prevent resource exhaustion.
*   **Channel Integrations:** PR #8486 implemented the OpenAI Chat Completions endpoint for the gateway, enhancing interoperability with external LLM clients. PR #8504 added a Git Forge channel with SOP ingress, and PR #8443 introduced single-message streaming for Matrix.
*   **Observability:** PR #8540 fixed cost reporting in `AgentEnd` events, ensuring accurate billing metrics across CLI, Agent, and Channel turns.
*   **CI/CD:** PR #8516 and #8517 strengthened quality gates by guarding repository submodules and introducing Windows Clippy checks for tool changes.

## 4. Community Hot Topics
The most discussed topics reflect a desire for better security, usability, and architectural clarity:
*   **RFC: Work Lanes & Board Automation (#6808):** With 13 comments, this governance proposal aims to streamline maintainer workflows. *Analysis:* High community interest in reducing maintainer burnout and improving triage efficiency.
*   **RFC: Replace React/Vite Web UI with Rust→Wasm (#8132):** Discusses shifting the frontend stack to improve performance and reduce Node.js dependencies. *Analysis:* Indicates a strategic push towards a fully Rust-native ecosystem.
*   **RFC: Plugin Permission & Secrets Model (#8398):** Addresses open questions in the plugin system's security architecture. *Analysis:* Critical for enabling safe third-party plugin ecosystems.
*   **Bug: MCP tools missing from TUI sessions (#8193):** Reports a blocker where TUI fails to discover MCP tools available in the gateway. *Analysis:* Highlights friction between the TUI and runtime components.

[Link to #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
[Link to #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)
[Link to #8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398)
[Link to #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)

## 5. Bugs & Stability
Several high-severity bugs were reported or updated, posing risks to workflow continuity and data integrity:
1.  **Critical: Telegram Channel Configuration Failure (#8505):** Users report that Telegram bots do not respond despite successful quickstart setup. *Status:* Open, P1.
2.  **Critical: Anthropic Provider Unavailability (#8094):** Providers added via Quickstart are not accessible in chat until a reset occurs. *Status:* Open, P2.
3.  **High: SOPs Not Detected in Web Dashboard (#8563):** Standard Operating Procedures configured in `/shared/sops` are ignored by the agent runtime. *Status:* Open, P1.
4.  **High: Consecutive OOM in WSL2 (#5542):** Memory leaks causing process kills in Windows Subsystem for Linux environments. *Status:* Open, P1, Needs Reproduction.
5.  **Medium: SQLite Hybrid Search Degradation (#8386):** Default memory backend silently falls back to keyword-only search without prompting for embeddings. *Status:* Closed/Fixed.

[Link to #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)
[Link to #8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094)
[Link to #8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)
[Link to #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)

## 6. Feature Requests & Roadmap Signals
User feedback and RFCs suggest the following priorities for the near term:
*   **Per-Agent Custom Environment Variables (#8226):** Request for isolated runtime contexts to support multi-tenancy and secure secret management.
*   **Cross-Channel TOTP Gate (#3767):** Implementation of 2FA for critical tool execution across all channels (Telegram, Discord, etc.).
*   **Pluggable Skill Registries (#7816):** Moving beyond the default GitHub repo to support external skill sources like ClawHub or user-configured catalogs.
*   **Telegram Multi-Message Mode (#8445):** Allowing agents to send separate messages per turn to improve readability on mobile platforms.
*   **Desktop App Reintroduction (#8565):** Proposal to bring back a Tauri-based desktop companion app with a focus on quickstart ease-of-use.

[Link to #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)
[Link to #3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767)
[Link to #7816](https://github.com/zeroclaw-labs/zeroclaw/issues/7816)
[Link to #8565](https://github.com/zeroclaw-labs/zeroclaw/pull/8565)

## 7. User Feedback Summary
Users are expressing frustration with configuration inconsistencies, particularly regarding channel setups (Telegram, Anthropic) and memory backends (SQLite). There is a strong demand for improved security controls (TOTP, plugin permissions) and better observability (cost tracking, detailed logs). The community values the move towards Rust-native Web UI and enhanced plugin security, viewing these as steps toward a more stable and performant platform. However, the "silent degradation" of features (like hybrid search) and broken quickstarts are significant pain points affecting user trust.

## 8. Backlog Watch
Maintainers should prioritize reviewing and addressing the following stalled items:
*   **RFC: Wire-Protocol-First Provider Model (#8396):** Blocked on maintainer review; critical for unifying provider implementations.
*   **RFC: .ignore File Mechanism (#8424):** Blocked on author action; needed for workspace file protection.
*   **CI: Security Jobs (#8057, #8056):** Blocked on maintainer review; essential for automated vulnerability scanning.
*   **Publish Full-Channel Prebuilts (#7952):** Blocked on maintainer review; impacts user installation experience.

[Link to #8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)
[Link to #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)
[Link to #8057](https://github.com/zeroclaw-labs/zeroclaw/issues/8057)
[Link to #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*