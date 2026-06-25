# OpenClaw Ecosystem Digest 2026-06-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-25 18:45 UTC

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
**Date:** 2026-06-26

## 1. Today's Overview
OpenClaw is experiencing extremely high activity levels, with 500 issues and 500 pull requests updated in the last 24 hours, indicating a critical phase in stability and feature maturation. The project released `v2026.6.11-beta.1`, introducing significant improvements to channel control and automation. However, the sheer volume of "diamond lobster" rated issues suggests persistent systemic instability regarding session state, memory leaks, and message delivery reliability. The community is heavily engaged in debugging complex race conditions and security regressions, with maintainers actively responding to high-severity bugs.

## 2. Releases
**Latest Release: v2026.6.11-beta.1**
*   **Highlights:** Enhanced channel control capabilities including Slack relay mode, native Mattermost `/oc_queue` support, and per-DM model overrides. These changes aim to reduce operational friction and improve automation tuning for enterprise users.
*   **Contributors:** @sjf-oa, @amknight, @xydigit-zt, @thomaszta, @gandalf-at-lerian.
*   **Migration Notes:** As this is a beta release, users should expect potential edge-case regressions in channel-specific integrations. Review documentation for Slack and Mattermost configurations before upgrading production instances.

## 3. Project Progress
**Merged/Closed PRs Today:**
*   **#96831 [CLOSED] fix(cli): sync official plugins during update --all**
    *   Ensures official plugins are correctly synchronized during bulk updates, maintaining consistency across installations.
*   **#96730 [CLOSED] fix(codex): prefer desktop app-server for Computer Use on macOS**
    *   Optimizes the Codex integration on macOS by prioritizing the signed desktop app bundle, improving stability for computer-use tasks.
*   **#96495 [CLOSED] fix(image-gen): bound image generation provider JSON response reads**
    *   Addresses a potential memory exhaustion vector by bounding JSON response sizes for six image generation providers.
*   **#96496 [CLOSED] fix(speech): bound TTS/STT voice-list and transcription JSON responses**
    *   Similar memory protection applied to speech providers (ElevenLabs, Azure, etc.) to prevent unbounded memory reads.
*   **#96505 [CLOSED] fix(openrouter): bound video catalog JSON reads**
    *   Limits memory usage for OpenRouter video model catalog fetching.

**Active Developments:**
*   Major refactoring underway to move sessions and transcripts to SQLite storage (**#96625**), a critical step toward resolving unbounded memory growth issues.
*   Work continues on stabilizing the Codex integration and fixing cron job reliability (**#96637**, **#96096**).

## 4. Community Hot Topics
**Most Discussed Issues (by Comments):**
1.  **[Issue #25592] Text between tool calls leaks to messaging channels** (32 comments)
    *   *Link:* https://github.com/openclaw/openclaw/issues/25592
    *   *Analysis:* Users are frustrated by UX pollution where internal agent processing text appears in public channels. This indicates a need for stricter separation between agent internal state and user-facing output.
2.  **[Issue #44925] Subagent completion silently lost** (20 comments)
    *   *Link:* https://github.com/openclaw/openclaw/issues/44925
    *   *Analysis:* Reliability of multi-agent orchestration is a top concern. Silent failures in subagent completion undermine trust in the platform for complex workflows.
3.  **[Issue #48788] Centralized filename encoding utility** (18 comments)
    *   *Link:* https://github.com/openclaw/openclaw/issues/48788
    *   *Analysis:* Internationalization and robustness in file handling across different channels (Feishu, etc.) are key pain points for global users.
4.  **[Issue #50090] Community Skill Development & ClawHub** (15 comments)
    *   *Link:* https://github.com/openclaw/openclaw/issues/50090
    *   *Analysis:* Strong community desire for a vibrant ecosystem. The gap between the promise of ClawHub and current functionality is a major discussion point.
5.  **[Issue #53628] ${XDG_CONFIG_HOME} not processed during skill install** (13 comments)
    *   *Link:* https://github.com/openclaw/openclaw/issues/53628
    *   *Analysis:* Basic environment variable handling in Docker/containerized setups is causing friction for power users.

## 5. Bugs & Stability
**High-Severity Bugs Reported/Fixed:**
*   **Gateway Memory Leak/OOM:**
    *   *Issues:* **#55334** (sessions.json unbounded growth), **#54155** (389MB → 14.7GB leak).
    *   *Status:* Critical. These are driving the push for SQLite migration (**#96625**).
    *   *Fix PRs:* **#96625** (refactor: flip sessions to sqlite) is the primary mitigation strategy.
*   **Security Regressions:**
    *   *Issue:* **#51396** (`clearUnboundScopes` strips operator scopes).
    *   *Issue:* **#53599** (Chrome extension relay removal breaks cross-machine setups).
    *   *Issue:* **#49083** (TLS fingerprint timing attack vulnerability).
    *   *Status:* High risk. Maintainers are actively patching auth and security boundaries.
*   **Session State & Orchestration Instability:**
    *   *Issue:* **#43367** (Multi-agent orchestration unstable).
    *   *Issue:* **#47975** (Subagent sessions persist, main session unresponsive).
    *   *Issue:* **#50165** (Subagents appear completed prematurely).
    *   *Status:* Systemic issue affecting the core value proposition of multi-agent workflows.
*   **Message Delivery Loss:**
    *   *Issue:* **#25592** (Tool call text leakage).
    *   *Issue:* **#44925** (Subagent results lost).
    *   *Issue:* **#50093** (WhatsApp backfill missed messages).
    *   *Status:* Persistent reliability concerns across channels.

## 6. Feature Requests & Roadmap Signals
*   **Per-Agent Cost Budgets (#42475):** Users want granular financial control at the gateway level to prevent runaway LLM costs. Likely to be prioritized given the enterprise focus.
*   **Skill Priority Configuration (#50199):** To resolve conflicts between overlapping skills, users request explicit priority settings.
*   **YAML Config Support (#45758):** A long-standing request for more readable configuration formats.
*   **Distributed Agent Runtime (#42026):** Proposal to split control plane and compute. Indicates a roadmap toward scalable, distributed deployments.
*   **Context Provenance (#54373):** Adding metadata to context segments to help agents distinguish between static config and dynamic retrieval.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Reliability:** The most consistent complaint is about silent failures, lost messages, and unstable subagent orchestration.
    *   **Resource Consumption:** Unbounded memory growth and JSON response parsing are causing crashes and OOM kills.
    *   **UX Noise:** Internal agent thoughts leaking into chat channels is a major detractor from the professional user experience.
    *   **Configuration Complexity:** Environment variable handling and skill installation paths are causing unexpected behavior.
*   **Satisfaction:**
    *   Users appreciate the rapid response to high-severity bugs (e.g., security patches).
    *   The new channel control features in the beta release are well-received for automating complex setups.
    *   The community is highly engaged, providing detailed repro steps and contributing fixes.

## 8. Backlog Watch
*   **#96625 [OPEN] refactor: flip sessions and transcripts to sqlite storage**
    *   *Risk:* High. This is a massive refactor critical for solving memory leaks. Requires careful testing to avoid data loss during migration.
*   **#43367 [OPEN] Multi-agent orchestration is unstable**
    *   *Risk:* Medium-High. Core functionality is compromised. Needs architectural review beyond simple bug fixes.
*   **#50090 [OPEN] Community Skill Development & ClawHub**
    *   *Risk:* Medium. Without a robust skill ecosystem, the platform may stagnate. The gap between promise and practice needs addressing.
*   **#42026 [OPEN] RFC: Distributed Agent Runtime**
    *   *Risk:* Low (RFC stage). Important for long-term scalability but not an immediate blocker.
*   **#53599 [OPEN] Chrome extension browser relay removed**
    *   *Risk:* High for specific user segments (managed hosting). A replacement or rollback is needed.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-06-26
**Subject:** Comparative Analysis of Top Open-Source AI Agent Projects

## 1. Ecosystem Overview
The 2026 personal AI agent landscape is defined by a shift from experimental prototypes to enterprise-grade, stable infrastructures. Projects are heavily prioritizing security hardening (supply chain, sandboxing), memory efficiency (SQLite migrations, context compression), and multi-agent orchestration reliability. The market is consolidating around robust gateway architectures that support diverse channel integrations (Slack, Telegram, Matrix) while addressing critical pain points like silent session failures and resource leaks.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | Beta (v2026.6.11) | ⚠️ Critical (High Instability) |
| **IronClaw** | 41 | 50 | Stable (No new tag) | 🟡 Moderate (Refinement Phase) |
| **ZeroClaw** | 48 | 50 | Pre-release (v0.8.x) | 🟢 High (Rapid Stabilization) |
| **Hermes Agent**| 50 | 50 | Stable (No new tag) | 🟡 Moderate (Security Focus) |
| **NanoBot** | 21 | 36 | Patch Expected Soon | 🟢 High (Security Remediation) |
| **CoPaw** | 27 | 50 | Stable (No new tag) | 🟡 Moderate (Runtime 2.0 Migration) |
| **NanoClaw** | N/A | 18 | Stable (No new tag) | 🟢 High (Security/Extensibility) |
| **LobsterAI** | 1 | 9 | Stable (No new tag) | 🟢 High (Focused Maintenance) |
| **PicoClaw** | N/A | 17 | Stable (No new tag) | 🟢 High (Efficiency Fixes) |
| **TinyClaw** | 0 | 0 | Stable (No new tag) | 🔵 Dormant (Stable) |
| **NullClaw** | 0 | 0 | Inactive | 🔴 Inactive |
| **Moltis** | 0 | 0 | Inactive | 🔴 Inactive |
| **ZeptoClaw** | 0 | 0 | Inactive | 🔴 Inactive |

*\*Health Score is subjective based on issue resolution velocity, security activity, and release cadence relative to project age.*

## 3. OpenClaw's Position

**Advantages vs. Peers:**
*   **Scale & Engagement:** OpenClaw operates at a significantly higher volume (500+ issues/PRs) than any peer, indicating it is the de facto standard for large-scale, complex deployments.
*   **Enterprise Feature Depth:** Its recent beta release offers granular channel control (Slack relay, Mattermost queue) and per-DM model overrides, features that are still in RFC or early stages for competitors like ZeroClaw or IronClaw.
*   **Architectural Ambition:** The push toward distributed agent runtimes and SQLite-based session storage positions it as the most forward-thinking regarding scalability, whereas others are still stabilizing core gateways.

**Technical Approach Differences:**
*   Unlike **NanoBot** and **Hermes**, which focus on tight security sandboxes and credential hygiene, OpenClaw is tackling systemic state management and memory leaks at the gateway level.
*   Compared to **CoPaw**’s browser automation focus, OpenClaw is more centered on multi-channel messaging orchestration and sub-agent reliability.

**Community Size:**
*   OpenClaw has the largest active community, evidenced by the sheer number of "diamond lobster" rated issues and high comment counts on UX/security topics. This suggests a massive user base but also a proportionally larger bug surface area.

## 4. Shared Technical Focus Areas

1.  **Security & Sandboxing:**
    *   **Projects:** NanoBot, ZeroClaw, Hermes Agent, IronClaw.
    *   **Need:** Granular control over tool execution, preventing MCP scope bypasses, and securing credential injection. NanoBot and ZeroClaw are particularly aggressive here with CVE patches and delegate policy fixes.

2.  **Memory & Context Management:**
    *   **Projects:** OpenClaw, CoPaw, ZeroClaw, TinyClaw.
    *   **Need:** Moving away from unbounded JSON/file storage to SQLite or compressed contexts. OpenClaw is refactoring sessions to SQLite; CoPaw is implementing "scroll" context strategies; ZeroClaw is adding context window usage bars.

3.  **Multi-Agent Orchestration Stability:**
    *   **Projects:** OpenClaw, LobsterAI, ZeroClaw, CoPaw.
    *   **Need:** Reliable sub-agent completion, preventing silent failures, and managing parent-child session lifecycles. OpenClaw and LobsterAI are actively fixing sub-agent loss and premature termination.

4.  **Cross-Platform Channel Reliability:**
    *   **Projects:** All active projects.
    *   **Need:** Consistent behavior across Telegram, Slack, Matrix, and Feishu. Issues range from message leakage (OpenClaw) to rich media handling (NanoClaw, ZeroClaw).

## 5. Differentiation Analysis

*   **Feature Focus:**
    *   **OpenClaw:** Comprehensive enterprise gateway with heavy customization and multi-agent orchestration.
    *   **NanoBot:** Security-first, lightweight agent with strong focus on MCP tool scoping and shell execution safety.
    *   **CoPaw:** Specialized in browser automation (ACP-backed TUI) and visual UI management, targeting developers needing web interaction.
    *   **IronClaw:** WebUI-centric ("Reborn") with a focus on human-in-the-loop approval gates and scheduler stability.
    *   **ZeroClaw:** Modular, WASM-plugin-driven architecture with strong emphasis on supply chain integrity and delegate governance.

*   **Target Users:**
    *   **OpenClaw/IronClaw:** Enterprise and power users requiring complex workflows and multi-channel support.
    *   **NanoBot/NanoClaw:** Security-conscious developers and admins prioritizing safe tool execution.
    *   **CoPaw:** Developers and researchers needing robust browser automation and visual debugging.
    *   **ZeroClaw:** Advanced users interested in plugin ecosystems and decentralized agent governance.

*   **Technical Architecture:**
    *   **OpenClaw:** Monolithic gateway with planned distributed runtime.
    *   **ZeroClaw:** WASM-first plugin host with external integrations.
    *   **CoPaw:** Runtime 2.0 architecture with strong TUI/WebUI duality.
    *   **NanoBot:** Lightweight, config-driven agent with strict security boundaries.

## 6. Community Momentum & Maturity

*   **Rapid Iteration / High Volatility:**
    *   **OpenClaw:** Extremely high activity but critical instability. Users are debugging systemic issues (memory leaks, race conditions).
    *   **ZeroClaw:** High activity focused on architectural hardening and security. Moving quickly toward v0.8.2/v0.8.3 stability.
    *   **CoPaw:** High PR volume driven by Runtime 2.0 migration and browser automation fixes.

*   **Stabilization / Security Focus:**
    *   **NanoBot:** High-quality, targeted security patches. Velocity is high but focused on remediation rather than new features.
    *   **Hermes Agent:** Steady, moderate activity. Focus on credential security and session persistence.
    *   **IronClaw:** Intense but localized activity around WebUI "Reborn" dogfooding. Moving from feature addition to bug squashing.

*   **Maintenance / Niche:**
    *   **LobsterAI:** Focused on specific collaboration modes and plugin ecosystem stability.
    *   **PicoClaw/NanoClaw:** Efficient, targeted updates (token efficiency, file security).
    *   **TinyClaw:** Dormant but stable post-Windows fix.

*   **Inactive:**
    *   **NullClaw, Moltis, ZeptoClaw:** No recent activity suggests abandonment or very low user bases.

## 7. Trend Signals

1.  **From Monolith to Modular/WASM:** ZeroClaw’s WASM plugin host and IronClaw’s move to "Memory as Extension" signal a trend toward decoupling core agent logic from plugins/tools for better security and upgradability.
2.  **Security as a Primary Feature:** The volume of security-related PRs (NanoBot, ZeroClaw, Hermes) indicates that "trustworthy execution" is becoming a key differentiator. Users are demanding verifiable bounds on tool access and credential handling.
3.  **Storage Modernization:** The shift from JSON/file-based session storage to SQLite (OpenClaw, CoPaw) is a critical industry trend to solve memory bloat and improve query reliability for long-running agents.
4.  **Human-in-the-Loop Refinement:** IronClaw’s focus on approval gates and ZeroClaw’s delegate policies show that complex agents are moving toward structured, auditable human oversight rather than fully autonomous black boxes.
5.  **Multi-Agent Orchestration Maturation:** OpenClaw and LobsterAI’s intense focus on sub-agent reliability suggests that multi-agent workflows are moving from proof-of-concept to production-critical systems, requiring robust error handling and state persistence.

**Value for AI Agent Developers:**
Developers should prioritize projects that offer strong security boundaries (NanoBot/ZeroClaw) and modern storage backends (OpenClaw/CoPaw). For enterprise use, IronClaw’s approval workflows and OpenClaw’s channel control are key differentiators. The trend toward WASM and modular plugins suggests that future-proof architectures will separate core reasoning from tool execution.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-06-26
**Source:** HKUDS/nanobot

## 1. Today's Overview
NanoBot experienced a highly active 24-hour period characterized by significant security remediation efforts and core stability fixes. The project addressed multiple critical vulnerabilities related to MCP tool scoping and the `exec` tool's command allowlists, indicating a strong response to recent security advisories. Concurrently, several long-standing bugs affecting Windows service management, Telegram web interfaces, and memory cursor handling were resolved. With 36 Pull Requests updated and 21 Issues touched, the development velocity remains high, focusing heavily on hardening the agent's execution environment and improving cross-platform reliability.

## 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Note:** Given the volume of critical security patches (MCP scope bypass, `exec` allowlist bypasses), a patch release addressing these issues is expected soon.

## 3. Project Progress
The following key improvements were merged or closed today:
*   **Security Hardening:**
    *   **[Fix] MCP Scope Bypass:** PR #4524 resolves Issue #4519 by applying `enabledTools` filtering to MCP resources and prompts, preventing unauthorized exposure of non-tool capabilities.
    *   **[Fix] Exec Allowlist Bypass:** PR #4526 addresses Issues #4514 and #4515 by switching `re.search` to `re.fullmatch` in `_guard_command`, effectively blocking chained command injections (e.g., `echo; rm -rf`).
    *   **[Fix] Login Shell Secrets:** PR #4525 closes Issue #4518 by changing the default `login_shell` execution to `false`, preventing secrets from being leaked via shell startup files.
*   **Stability & Bug Fixes:**
    *   **[Fix] Subagent Error Handling:** PR #4485 makes `fail_on_tool_error` configurable for subagents (Issue #4198), allowing agents to recover from minor tool errors instead of immediate failure.
    *   **[Fix] Dream Cursor Logic:** PR #4481 resolves Issue #4242 by advancing the `.dream_cursor` even when the Dream feature is disabled, preventing system prompt bloat from re-injecting old history.
    *   **[Fix] Xiaomi MiMo ASR:** PR #4493 fixes web-to-wav conversion for Xiaomi MiMo transcription (Issue #4492), resolving browser compatibility issues.
    *   **[Fix] Onboarding Wizard:** PR #4438 corrects the search engine selection display in the CLI onboarding wizard.
*   **Infrastructure:**
    *   **[Chore] Test Flakiness:** PR #4523 fixes a flaky test related to file modification times in `MemoryStore`.

## 4. Community Hot Topics
*   **Security Vulnerabilities (High Engagement):**
    *   Multiple issues raised by author **YLChen-007** regarding MCP and Exec tool bypasses are dominating the discussion.
    *   *Links:* [Issue #4519](https://github.com/HKUDS/nanobot/issues/4519), [Issue #4517](https://github.com/HKUDS/nanobot/issues/4517), [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434), [Issue #4521](https://github.com/HKUDS/nanobot/issues/4521).
    *   *Analysis:* Users are increasingly concerned about the blast radius of agent tool access. The density of security reports suggests a thorough audit is underway, and the community values granular control over MCP resources and shell execution.
*   **Trust & Supply Chain:**
    *   Issue #4503 proposes adding an HVTracker trust badge to the README.
    *   *Link:* [Issue #4503](https://github.com/HKUDS/nanobot/issues/4503)
    *   *Analysis:* Reflects a growing demand for verifiable trust signals in open-source AI agents, moving beyond code quality to include supply chain integrity metrics.
*   **Mobile/Web UI Experience:**
    *   Issue #4479 requests PWA support and mobile swipe gestures.
    *   *Link:* [Issue #4479](https://github.com/HKUDS/nanobot/issues/4479)
    *   *Analysis:* Indicates users are deploying NanoBot on diverse devices and expect native-like mobile experiences.

## 5. Bugs & Stability
Ranked by severity based on impact on security and functionality:

1.  **[Critical] Security: Exec Tool Allowlist Bypasses**
    *   *Issues:* #4521, #4520, #4518, #4516, #4515, #4514.
    *   *Details:* Various bypasses allowing unintended shell command execution or secret leakage.
    *   *Status:* Mitigated via PRs #4526 and #4525.
2.  **[High] Security: MCP Scope Bypass**
    *   *Issues:* #4519, #4517, #4434, #4435.
    *   *Details:* `enabledTools` configuration failing to restrict resource/prompt exposure.
    *   *Status:* Mitigated via PR #4524.
3.  **[Medium] Windows Service Instability**
    *   *Issues:* #4513, #4511.
    *   *Details:* `nssm` integration causing restart loops or incorrect background process tracking when using `/restart` or `--background`.
    *   *Status:* Open. Requires investigation into Windows-specific process management.
4.  **[Medium] Telegram Web UI Regression**
    *   *Issue:* #4488.
    *   *Details:* Rich messages causing "not supported" errors in Telegram Web clients.
    *   *Status:* Closed/Fixed in related PRs or pending update.
5.  **[Low] Gateway Stream Corruption**
    *   *Issue:* #4068/#4063 (Referenced in PR #4528).
    *   *Details:* Overlapping streams corrupting buffers.
    *   *Status:* Fixed in PR #4528.

## 6. Feature Requests & Roadmap Signals
*   **Eager Memory Consolidation (PR #4402):** Adds opt-in archival of conversation slices to reduce context window pressure. *Signal:* Strong focus on optimizing memory efficiency for long-running sessions.
*   **Subagent Model Overrides (PR #4415) & Aggregated Results (PR #4414):** Allows fine-grained control over subagent execution models and result formatting. *Signal:* Enhancing multi-agent orchestration flexibility.
*   **Cron Job Model Presets (PR #4416):** Enables specific models for scheduled tasks. *Signal:* Cost optimization and performance tuning for background agents.
*   **Ask Clarification Tool (Issue #4508):** Proposes a dedicated tool for asking users for missing info. *Signal:* Improving user experience by reducing hallucination/assumption errors.
*   **Idle MCP Server Auto-Kill (PR #4506):** Prevents zombie processes. *Signal:* Better resource management for server deployments.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the lack of configurability in subagent error handling (leading to brittle workflows) and the complexity of setting up secure shell execution environments. The Windows service integration is also a notable friction point for enterprise/desktop users.
*   **Use Cases:** Heavy reliance on MCP servers for tool extension, with a need for strict security boundaries. Voice transcription (Xiaomi MiMo) and scheduled tasks (Dream/Cron) are active production use cases.
*   **Satisfaction:** High engagement with security fixes suggests users trust the maintainers' responsiveness. The introduction of granular controls (e.g., subagent model overrides, exec sandbox bindings) indicates satisfaction with the direction of extensibility.

## 8. Backlog Watch
*   **[Open] Windows Gateway Background Mode:** Issues #4513 and #4511 highlight persistent bugs with `nssm` and the `--background` flag. These need priority attention as they affect deployment stability on Windows.
*   **[Open] Telegram Web Rich Message Support:** While Issue #4488 is noted, ensure the fix propagates correctly to the web client interface.
*   **[Open] PWA/Mobile Support:** Issue #4479 is a significant UX enhancement request that remains open. Implementing PWA support would greatly improve accessibility for mobile users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-26
**Source:** NousResearch/hermes-agent

## 1. Today's Overview
The Hermes Agent project exhibits high daily activity with 50 issues and 50 pull requests updated in the last 24 hours, indicating a robust contribution cycle despite zero new official releases. The focus remains heavily on stability fixes within the gateway and agent core, particularly regarding session state management, credential handling, and tool execution integrity. Community engagement is strong, with significant discussion around security boundaries, multi-device synchronization, and platform-specific enhancements for Telegram and Slack. While no new version was deployed, the volume of merged and open PRs suggests imminent patches for critical bugs affecting Windows installations and cron job reliability.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress
**Merged/Closed Items:**
*   **Security Hardening (PR #48073):** Closed three P0 security gaps identified in the iron-proxy integration, specifically addressing credential injection risks in sandboxes.
*   **Additional Security Fixes (PR #48076):** Addressed P1/P2 findings from security reviews, including fail-closed secrets and GPG verification improvements.
*   **Cron Job Safety (PR #52622):** Closed a bug where `every 0m` intervals caused runaway jobs; the fix now rejects zero-interval schedules.
*   **Session Context Persistence (PR #52616):** Fixed a critical issue where fresh agent turns failed to persist non-NULL system prompts, ensuring cache consistency.

**Advanced Features/Fixes:**
*   **Telegram Clarify Prompts (PR #22532):** Added support for structured clarify callbacks in Telegram sessions, enhancing user interaction clarity.
*   **Feishu Table Rendering (PR #27922):** Improved markdown table rendering in Feishu by utilizing native table pipelines instead of plain text fallbacks.
*   **Skill Write Verification (PR #52626):** Enhanced reliability by verifying that skill file writes actually persist to disk before reporting success.

## 4. Community Hot Topics
*   **Credential Security & Zero-Knowledge Proxies (Issue #4656):** High interest (11 comments, 1 reaction) in developing a zero-knowledge HTTP/HTTPS broker for credentials to mitigate exfiltration risks. This reflects a growing community demand for stricter security boundaries in agent operations.
*   **Context Compression Improvements (Issue #39691):** Strong engagement (8 comments, 10 reactions) for integrating `headroom-ai` for tool output compression. Users are seeking better handling of large tool outputs to reduce token costs and context window pressure.
*   **Slack Markdown Upgrade (Issue #8552):** Active discussion (7 comments, 9 reactions) on migrating Slack messages to Block Kit markdown to support tables and richer formatting, addressing limitations of legacy mrkdwn.
*   **Multi-Device Sync (Issue #52529 & #47341):** Emerging consensus on the need for seamless cross-machine synchronization. Users desire consistent agent identity, memory, and configuration across devices (e.g., laptop vs. desktop) without manual intervention.

## 5. Bugs & Stability
*   **Windows Installation Failure (Issue #46260):** Critical blocker where the installer fails at the "desktop" stage with `npm install` exit code 1 on Windows 10. No immediate fix PR linked.
*   **OpenAI Credential Drop (Issue #19566):** P1 bug where newly added OpenAI-Codex credentials are dropped during rotation due to stale `auth.json` rewrites. High risk for authentication stability.
*   **Secret Redaction Corruption (Issue #33801):** P2 bug where secret redaction corrupts Python/Shell syntax in tool outputs (write_file, execute_code), causing silent failures.
*   **Dashboard Chat Broken (Issue #36658):** P2 regression causing React errors in the dashboard chat feature after updates.
*   **TUI Voice Mic Freeze (Issue #52573):** macOS-specific bug where the microphone fails to re-open after TTS playback in continuous mode.
*   **Gateway Config Read Error (Issue #52562):** Configuration key `gateway.multiplex_profiles` is written but not read by `load_gateway_config`, breaking intended functionality.

## 6. Feature Requests & Roadmap Signals
*   **Cross-Machine Full Sync:** Multiple requests (Issues #52529, #47341, #4335) indicate a strong roadmap signal for native, first-class multi-device support with identity continuity.
*   **Shareable Profile Templates:** Request (Issue #43784) for easier profile sharing and templating to streamline agent specialization setup.
*   **Telegram Rich Messages:** Feature request (Issue #44428) to support Telegram Bot API 10.1 rich messages, including LaTeX and tables, improving UX on mobile.
*   **Portuguese Localization:** Request (Issue #40239) to add pt-BR support to the desktop app, leveraging existing backend translations.
*   **Developer Authoring Workflow:** Request (Issue #52598) for faster profile distribution creation tools, suggesting a need for better developer experience (DX) for power users.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by installation blockers on Windows and instability in credential management across different providers (OpenAI, Anthropic). The corruption of code syntax during secret redaction is a major usability issue for developers.
*   **Use Cases:** Heavy usage in automated scheduling (cron jobs), multi-platform messaging (Telegram, Slack, WeChat), and secure sandboxed environments (iron-proxy).
*   **Satisfaction:** Positive reception of security hardening efforts (iron-proxy fixes). However, dissatisfaction exists regarding the fragmentation of session contexts across platforms and the lack of reliable cross-device sync.

## 8. Backlog Watch
*   **Installer Stuck Prompt (Issue #6147):** Users report the installer hanging at "Install ripgrep / ffmpeg" with no keyboard input detection. Requires investigation into terminal input handling.
*   **Skill Curator Archiving Active Skills (Issue #29912):** P1 risk where the curator archives operational skills incorrectly, leading to loss of functionality. Needs urgent review of consolidation logic.
*   **MCP Startup Hang (Issue #29184):** Synchronous HTTP call in `osv_check` blocks the asyncio event loop, causing gateway startup delays.
*   **Session Search Memory Black Hole (Issue #13840):** Compressed parent sessions are excluded from search results, creating gaps in agent memory retrieval.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-06-26

## 1. Today's Overview
The PicoClaw project demonstrates high development velocity with 17 Pull Requests updated in the last 24 hours, indicating a robust contribution pipeline driven largely by automated dependency updates and targeted bug fixes. Two significant issues were resolved, addressing critical token consumption bugs and channel errors, while no new official releases were published during this window. The repository remains stable with ongoing maintenance focused on dependency hygiene, error handling improvements, and specific integration fixes for LINE, Matrix, and WebSocket modes.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Several key areas saw advancement through merged or closed PRs:
*   **Evolution Logic Optimization:** PR #3169 (merged) introduced logic to skip the "cold path" for heartbeat turns in Evolution mode, directly addressing token waste. PR #3168 (merged) improved error handling for model list fetches.
*   **Code Quality & Stability:** PR #3170 (merged) fixed a resource leak by ensuring base64 encoders are closed even on error paths. PR #3166 (merged) resolved a build failure in `openai_compat` by switching to a structured logger.
*   **Dependency Updates:** Dependabot successfully merged updates for `github.com/github/copilot-sdk/go` (#3145), `telego` (#3176), `line-bot-sdk-go` (#3174), `systray` (#3175), and `modernc.org/sqlite` (#3173).
*   **New Features in Review:** PR #3118 proposes adding a remote WebSocket mode for the `picoclaw agent` command, allowing external control via `ws://`. PR #3063 introduces a new DeltaChat gateway.

## 4. Community Hot Topics
*   **Token Efficiency Concerns:** Issue #3012 highlights a severe bug where "Evolution" mode causes continuous token consumption every minute. This is a high-priority topic given the cost implications for users running long-running agents.
    *   *Link:* [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)
*   **Channel Reliability:** Issue #1757 reports a channel error when scheduling hourly tasks, affecting users relying on cron-like automation.
    *   *Link:* [Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)
*   **Integration Expansion:** The proposal for a DeltaChat gateway (PR #3063) signals strong community interest in expanding beyond traditional messaging platforms (Telegram, Line, Matrix).
    *   *Link:* [PR #3063](https://github.com/sipeed/picoclaw/pull/3063)

## 5. Bugs & Stability
*   **High Severity (Resolved):** Issue #3012 regarding continuous token drain in Evolution mode was addressed via PR #3169, which skips unnecessary processing during heartbeat turns.
*   **Medium Severity (Resolved):** Issue #1757 concerning channel errors during scheduled tasks was closed.
*   **Stability Improvements (Merged):**
    *   PR #3171 fixed potential panics in the LINE channel due to missing type assertion checks.
    *   PR #3170 prevented resource leaks in base64 encoding operations.
    *   PR #3115 fixed session history corruption caused by misinterpreting inline data URLs as media attachments.

## 6. Feature Requests & Roadmap Signals
*   **Remote Agent Control:** PR #3118 suggests adding a remote WebSocket interface for the agent, indicating a demand for headless or remotely managed agent instances.
*   **New Messaging Channels:** PR #3063 proposes a DeltaChat gateway, reflecting user desire for privacy-focused or niche messaging integrations.
*   **Enhanced Tool Output Handling:** PR #3115 improves how generic tool outputs (like file reads) are handled, suggesting a roadmap focus on improving data fidelity in agent workflows.

## 7. User Feedback Summary
Users are primarily concerned with **cost efficiency** and **reliability**. The bug report in #3012 underscores anxiety over unexpected billing spikes due to infinite loops in evolution modes. Additionally, the resolution of #1757 indicates that users rely heavily on scheduled tasks for automation, making channel stability critical. There is positive engagement with infrastructure improvements, such as the remote WebSocket mode, which appeals to power users deploying agents in server environments.

## 8. Backlog Watch
*   **Open Dependency Updates:** Several Dependabot PRs remain open (#3177, #3176, #3174, #3175, #3173, #3172, #3118, #3115, #3171, #3128). While routine, maintaining timely merges ensures security and compatibility.
*   **DeltaChat Gateway:** PR #3063 has been open since June 8. Maintainer review is needed to determine its inclusion in the main branch.
*   **Remote Agent Mode:** PR #3118 is a significant feature addition currently under review. Its acceptance will define future deployment capabilities for PicoClaw.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-26

## 1. Today's Overview
NanoClaw exhibits high development velocity with 18 pull requests updated in the last 24 hours, indicating strong contributor engagement and rapid iteration. While no new releases were published, significant progress was made on core infrastructure, security hardening, and multi-agent communication protocols. Activity is currently balanced between merging critical fixes (security, stability) and advancing feature sets (multi-bot support, remote MCP), suggesting a healthy transition toward a more robust and extensible platform.

## 2. Releases
*No new releases were published on this date.*

## 3. Project Progress
The following key areas saw advancement through merged/closed PRs today:
*   **Security Hardening:** PR #2799 was closed, addressing CVE-2026-29611 by confining `send_file` reads to `/workspace`, preventing unauthorized file access from compromised agents.
*   **System Stability & Cleanup:** PR #2830 resolved an issue where deleted checkouts left behind dead launchd/systemd registrations, improving system hygiene. PR #2854 fixed macOS-specific API connection failures caused by CA bundle mounting issues in Rancher Desktop.
*   **Resource Management:** PR #2856 introduced opt-in per-container CPU/memory limits, allowing better resource isolation when multiple agents share a host.
*   **Authentication Resilience:** PR #2855 merged a feature that prioritizes subscription-based OAuth credentials while keeping API keys as a hot standby, reducing downtime from silent eviction.

## 4. Community Hot Topics
*   **Multi-Admin Approval Workflow (Issue #2857):** Users are requesting a failover mechanism for approval requests. Currently, if the primary admin is unavailable, the process stalls. There is a clear demand for CLI-based approvals for owners with direct machine access.
*   **Telegram Multi-Bot Support (Issue #2852 & PR #2849/#2853):** There is significant interest in running multiple Telegram bots from a single instance. While PR #2849 addressed this via environment variable discovery (`TELEGRAM_BOT_TOKEN_<SUFFIX>`), Issue #2852 indicates confusion regarding previous removals and "instance" support, suggesting documentation or clarity improvements are needed alongside the technical fix.
*   **Matrix E2EE Native Adapter (PR #2844):** A major architectural shift is underway to replace the WASM-based Chat SDK bridge with a native Rust-binding adapter (`matrix-bot-sdk`) for persistent End-to-End Encryption, addressing performance and reliability concerns.

## 5. Bugs & Stability
*   **Critical Security (Fixed):** PR #2799 mitigated a critical vulnerability (CVE-2026-29611) allowing arbitrary file reading via `send_file`.
*   **macOS Connectivity Crash (Fixed):** PR #2854 resolved a crash/error loop on macOS (Rancher Desktop) where self-signed certificate detection prevented API connections.
*   **Test Instability (Open):** PR #2851 highlights a bug in test helpers where abandoned poll loops steal messages from subsequent tests, causing flaky CI results. This needs resolution to ensure stable development pipelines.
*   **Signal Group Routing (Open):** PR #2850 addresses a bug where Signal group messages lacked `isMention` flags, causing routing failures.

## 6. Feature Requests & Roadmap Signals
*   **Remote MCP Servers:** PR #2847 introduces support for URL-based MCP servers, signaling a move towards cloud-connected tooling rather than just local stdio processes.
*   **Skill Distillation:** PR #2843 added a `/learn` skill to distill reusable skills from directories or URLs, enhancing the agent's ability to autonomously build its toolkit.
*   **Docker-in-Docker Support:** PR #2846 enables agents to run Docker-in-Docker, expanding capabilities for complex build/test environments.
*   **Prediction:** The next release will likely focus on stabilizing the new Matrix E2EE adapter and refining the multi-admin approval workflow based on Issue #2857.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by rigid approval chains that halt workflows when a single admin is offline. There is also dissatisfaction with the complexity of setting up secure Matrix connections (leading to the native adapter rewrite) and confusion around Telegram multi-bot configuration.
*   **Use Cases:** Heavy emphasis on enterprise-grade security (file confinement, auth failover) and operational efficiency (resource limits, cleanup of dead services).
*   **Satisfaction:** High engagement with new features like `/learn` and remote MCP suggests users value autonomy and flexibility. However, the lack of immediate feedback on Issue #2852 indicates potential friction in user onboarding for multi-instance setups.

## 8. Backlog Watch
*   **Issue #2857 [OPEN]:** Multi-admin approval support remains open. This is a critical workflow blocker for teams. Maintainers should prioritize defining the CLI approval interface and fallback logic.
*   **PR #2832 [OPEN]:** "Reject with reason" feature. While minor, it improves agent adaptability. It has been open since June 22; review is pending.
*   **PR #2844 [OPEN]:** Matrix native E2EE adapter. This is a large refactor. Given the dependencies on `matrix-bot-sdk`, it requires careful testing before merge.
*   **PR #2851 [OPEN]:** Test loop bug. Although a fix PR exists, the underlying test infrastructure fragility may require broader refactoring to prevent future regressions.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-06-26
**Source:** GitHub (nearai/ironclaw)

## 1. Today's Overview
The IronClaw project is experiencing a period of intense refinement focused on the "Reborn" WebUI and core runtime stability. With 41 issues and 50 pull requests updated in the last 24 hours, the development velocity is exceptionally high, driven largely by local dogfooding efforts initiated around June 22. The primary focus has shifted from feature addition to critical bug fixing, particularly regarding approval gate persistence, UI responsiveness, and scheduler heartbeats. No new releases were published today, suggesting the team is prioritizing code stabilization and internal testing over public deployment.

## 2. Releases
*   **No new releases.**
    *   The absence of new tags indicates a focus on resolving critical blockers identified during the recent "Reborn" dogfooding phase before cutting a new version.

## 3. Project Progress
Significant progress was made in merging fixes related to WebUI usability and core runtime reliability. Key closed/merged items include:

*   **WebUI UX Improvements:**
    *   **Auto-scrolling:** Fixed issues where new responses did not stay in view (PR #5248 [CLOSED](https://github.com/nearai/ironclaw/pull/5248)).
    *   **Composer State:** Resolved the frozen message input box while waiting for agent responses (PR #5235 [CLOSED](https://github.com/nearai/ironclaw/pull/5235)).
    *   **Approval Visibility:** Ensured approval gates remain visible even when users send new messages while blocked (PR #5241 [CLOSED](https://github.com/nearai/ironclaw/pull/5241)).
    *   **Timestamps:** Standardized message timestamp display in conversations (Issue #5212 [CLOSED](https://github.com/nearai/ironclaw/issues/5212)).
*   **Core Runtime & Logic Fixes:**
    *   **Content Denylist:** Removed overly aggressive prompt-assembly content denylists that caused false positives for innocent requests (PR #5254 [CLOSED](https://github.com/nearai/ironclaw/pull/5254)).
    *   **Trigger Recovery:** Implemented recovery for stale trigger fires that were claimed but never settled (PR #5245 [CLOSED](https://github.com/nearai/ironclaw/pull/5245)).
    *   **Concurrency Guard:** Addressed scheduler concurrency defaults to prevent worker starvation (PR #5224 [CLOSED](https://github.com/nearai/ironclaw/pull/5224)).
    *   **Slack Bindings:** Persisted Slack host conversation bindings through the durable conversation service (PR #5252 [CLOSED](https://github.com/nearai/ironclaw/pull/5252)).

## 4. Community Hot Topics
The most discussed topics revolve around the "Reborn" WebUI dogfooding experience and permission management.

*   **Dogfooding Tracker:** Issue [#5119](https://github.com/nearai/ironclaw/issues/5119) serves as the central hub for tracking bugs found during local Reborn usage, driving many of today's fixes.
*   **Tool Permissions & Approvals:** There is significant activity around how tool permissions are handled.
    *   Issue [#5242](https://github.com/nearai/ironclaw/issues/5242) highlights errors for non-operator users accessing tool settings.
    *   Issue [#5243](https://github.com/nearai/ironclaw/issues/5243) reports that "Approve & always allow" does not persist settings.
    *   Issue [#5196](https://github.com/nearai/ironclaw/issues/5196) describes authorization errors when using "Ask each time" modes.
    *   *Analysis:* Users need granular, persistent control over tool approvals without requiring operator-level privileges. The current UX for managing these permissions is fragmented and unreliable.

## 5. Bugs & Stability
Several critical stability and logic bugs were reported today, primarily affecting the Reborn WebUI and scheduler.

*   **High Severity:**
    *   **Scheduler Heartbeat Deadlock:** Issue [#5148](https://github.com/nearai/ironclaw/issues/5148) reports that the turn scheduler can self-deadlock if a heartbeat fires while a run holds a transition state lock. This causes runs to get stuck indefinitely.
    *   **WASM Execution Starvation:** Issue [#5206](https://github.com/nearai/ironclaw/issues/5206) (PR linked) addresses a bug where WASM tool execution starves the Tokio worker pool, leading to multi-minute freezes during bursts of concurrent turns.
    *   **False Run Failures:** Issue [#5239](https://github.com/nearai/ironclaw/issues/5239) notes the scheduler misclassifying stale terminal heartbeats as runner failures.
*   **Medium Severity:**
    *   **UI State Loss:** Issue [#5210](https://github.com/nearai/ironclaw/issues/5210) describes lost message state and repeated warnings when sending new messages while an approval gate is open.
    *   **Token Validation:** Issue [#5190](https://github.com/nearai/ironclaw/issues/5190) reports that invalid bearer tokens allow entry into the UI but cause subsequent actions to hang silently.
    *   **Activity Details Missing:** Issue [#5189](https://github.com/nearai/ironclaw/issues/5189) notes that successful tool runs do not show activity details while running, creating an inconsistent UX compared to failed runs.
*   **Low Severity:**
    *   **Log Flooding:** Issue [#5237](https://github.com/nearai/ironclaw/issues/5237) highlights that debug logging can flood Railway logs with Wasmtime/Cranelift output.
    *   **Failure Message Attachment:** Issue [#5227](https://github.com/nearai/ironclaw/issues/5227) reports run failure messages attaching to the wrong conversation turn.

## 6. Feature Requests & Roadmap Signals
*   **User-Scoped Tool Settings:** PR [#5256](https://github.com/nearai/ironclaw/pull/5256) and PR [#5251](https://github.com/nearai/ironclaw/pull/5251) indicate a strong push to expose user-scoped tool settings in the WebUI, moving away from operator-only configurations.
*   **Global Auto-Approve Shortcuts:** Issue [#5246](https://github.com/nearai/ironclaw/issues/5246) requests adding a global auto-approve shortcut text under approval checkboxes to improve discoverability.
*   **Memory as Extension:** PR [#5205](https://github.com/nearai/ironclaw/pull/5205) proposes modeling memory as a userland extension, signaling a architectural shift towards more modular, plugin-like memory management.
*   **Responsive Sidebar:** Issue [#5188](https://github.com/nearai/ironclaw/issues/5188) focuses on improving the responsive behavior of the WebUI v2 sidebar, indicating ongoing investment in mobile/tablet usability.

## 7. User Feedback Summary
Real user feedback, primarily from the dogfooding initiative, highlights frustration with UI responsiveness and confusing permission flows.

*   **Pain Points:**
    *   **Unresponsive UI:** Users report the chat composer freezing (Issue #5208) and messages not auto-scrolling (Issue #5211), breaking the flow of conversation.
    *   **Confusing Permissions:** The inability to persist "Always Allow" settings (Issue #5243) and the error faced by non-admin users trying to access tool settings (Issue #5242) suggest the permission model is too complex for general users.
    *   **Lack of Guidance:** The empty state for automations does not explain how to create them (Issue #4980), leading to confusion for new users.
    *   **Internal Noise:** Internal skill activation messages are leaking into the chat UI (Issue #5191), cluttering the conversation with technical noise.

## 8. Backlog Watch
*   **DeepSeek-V4-Flash Harness:** Issue [#5221](https://github.com/nearai/ironclaw/issues/5221) tracks the backlog for optimizing performance against the DeepSeek V4 Flash model. This is a critical performance metric for the agent's efficiency.
*   **Write-Behind Lease Design:** Issue [#5253](https://github.com/nearai/ironclaw/issues/5253) and PR [#5249](https://github.com/nearai/ironclaw/pull/5249) highlight a pending architectural decision to move runner-lease renewal off the synchronous Postgres path. This is essential for preventing future scalability bottlenecks and heartbeat failures.
*   **Durable Capability Previews:** Issue [#5229](https://github.com/nearai/ironclaw/issues/5229) notes that durable capability display previews are failing in WebUI runs due to scope issues, which impacts debugging and transparency for users.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-26
**Source:** GitHub (netease-youdao/LobsterAI)

### 1. Today's Overview
The LobsterAI project exhibited high development velocity on June 25, with nine pull requests merged or closed, indicating a focused push toward stabilizing the "Cowork" collaboration mode and refining the "OpenClaw" plugin ecosystem. While no new releases were published today, the rapid integration of fixes suggests imminent stability improvements for users relying on streaming responses and subagent coordination. Community engagement remains low, with only one open issue reported in the last 24 hours, though it has persisted for several weeks. The overall project health appears robust, with maintainers actively addressing edge cases in session management and UI synchronization.

### 2. Releases
No new versions were released today.

### 3. Project Progress
Nine significant updates were merged/closed today, primarily focusing on bug fixes and UX refinements:

*   **Cowork Mode Enhancements:**
    *   **#2204:** Fixed parsing of block-level `proposed_plan` tags to ensure GLM plan mode renders correctly without leaking tags into messages.
    *   **#2205:** Updated the plan mode icon to a theme-aware SVG component for better visual consistency.
    *   **#2200:** Resolved duplicate plan messages caused by stream jitter in Qwen plan mode responses.
    *   **#2199:** Improved subagent polling logic to keep running child sessions alive after parent completion, with a 5-minute timeout window.
*   **OpenClaw Plugin System:**
    *   **#2203:** Fixed precompilation of local extension entries for OpenClaw, ensuring proper index.js generation.
    *   **#2202:** Ensured the bundled browser plugin remains allowlisted under restrictive configurations.
    *   **#2201:** Deduplicated assistant final sync segments to prevent repeated visible replies and thinking blocks.
    *   **#2198:** Preinstalled official QQ and Discord channel plugins for OpenClaw, syncing trusted plugin allow lists.
*   **Settings & UI:**
    *   **#2206:** Fixed synchronization of the "launch at login" state with the operating system, including Windows login item cleanup.

### 4. Community Hot Topics
*   **Issue #1392:** [Open] Scheduled task toggle unresponsive.
    *   **Link:** https://github.com/netease-youdao/LobsterAI/issues/1392
    *   **Analysis:** A user reports that clicking the toggle for scheduled tasks fails to close them, despite most other toggles working. This issue has been open since April 3, 2026, and is marked as stale. It highlights a potential UI state management bug specific to certain task configurations.

### 5. Bugs & Stability
Several critical bugs related to session handling and UI rendering were addressed today:

1.  **Duplicate Messages in Plan Mode (#2200):** Stream jitter was causing Qwen plan mode responses to split into duplicate visible messages. *Status: Fixed.*
2.  **Subagent Session Termination (#2199):** Parent sessions were completing prematurely, stopping polling for running subagents. *Status: Fixed with added diagnostic logs.*
3.  **OpenClaw Extension Compilation (#2203):** Local ask-user/media extensions failed to precompile correctly due to missing TypeScript entry declarations. *Status: Fixed.*
4.  **Scheduled Task Toggle Failure (#1392):** Users cannot disable specific scheduled tasks via the UI toggle. *Status: Open/Stale. No fix PR identified yet.*

### 6. Feature Requests & Roadmap Signals
*   **Plugin Ecosystem Expansion:** The inclusion of preinstalled QQ and Discord plugins (#2198) signals a strategic move to broaden LobsterAI’s connectivity beyond standard interfaces, emphasizing multi-channel support.
*   **UI/UX Polish:** The update to theme-aware icons (#2205) and improved synchronization of OS-level settings (#2206) indicate a roadmap focus on native-like integration and visual consistency.
*   **Advanced Session Management:** Fixes related to `sessions_yield` and subagent polling suggest ongoing efforts to support complex, multi-agent workflows within the Cowork mode.

### 7. User Feedback Summary
*   **Pain Points:** The primary user complaint today concerns the reliability of the scheduled task toggle mechanism. The persistence of Issue #1392 suggests frustration with intermittent UI failures that require workarounds or restarts.
*   **Satisfaction:** The community has not expressed explicit dissatisfaction with the recent merges, but the high volume of "fix" PRs implies that previous versions had noticeable instability in streaming responses and plugin loading.

### 8. Backlog Watch
*   **Issue #1392:** This issue has been open for over two months (since 2026-04-03) and is currently marked as stale. Maintainers should prioritize investigating whether this is a race condition or a specific configuration conflict, as it affects core scheduling functionality.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest: 2026-06-26

### 1. Today's Overview
The TinyAGI repository exhibits minimal activity as of June 26, 2026, with no new issues, releases, or open pull requests recorded in the last 24 hours. The primary recent movement was the closure of Pull Request #281 on June 24, which addressed critical Windows compatibility bugs in the CLI. The project currently maintains a stable but quiet development cycle, focusing on resolving platform-specific edge cases rather than introducing new features.

### 2. Releases
*   **No new releases.** There are no version updates published since the last cycle.

### 3. Project Progress
*   **Merged/Closed PR #281:** Fixed Windows cross-platform support in the CLI. This pull request, authored by `mperkins0155`, resolved three specific bugs preventing the `tinyagi` CLI from running on native Windows environments (excluding WSL). Key fixes included handling doubled drive letters in path resolution (`/C:/Users/...`) which previously caused `MODULE_NOT_FOUND` errors due to incorrect `path.resolve` behavior.

### 4. Community Hot Topics
*   **PR #281 (Windows CLI Fix):** While this PR has no visible reaction count (`👍: 0`) or comments listed in the current data snapshot, it represents the sole recent community contribution. It highlights an ongoing need for robust non-Linux/non-macOS support in the CLI tooling.
    *   *Link:* [TinyAGI/tinyagi PR #281](https://github.com/TinyAGI/tinyagi/pull/281)

### 5. Bugs & Stability
*   **Resolved:** Windows-native CLI execution failures (PATH resolution errors).
    *   *Status:* Fixed in PR #281.
    *   *Severity:* High (prevented usage on major OS).
*   **New Reports:** None. No new bugs or regressions were reported in the last 24 hours.

### 6. Feature Requests & Roadmap Signals
*   **Platform Parity:** The recent focus on Windows fixes suggests a roadmap commitment to ensuring feature parity across all major desktop operating systems.
*   **Current Status:** No new feature requests were logged today. The absence of new issues indicates users may be waiting for broader stability improvements before requesting new capabilities.

### 7. User Feedback Summary
*   **Pain Points:** Prior to PR #281, Windows users faced significant friction due to path handling inconsistencies in the CLI.
*   **Sentiment:** Neutral to Positive. The resolution of blocking bugs improves accessibility for Windows developers, though the lack of recent engagement suggests a small or dormant active user base at this moment.

### 8. Backlog Watch
*   **Open Issues:** 0.
*   **Pending PRs:** 0.
*   **Maintainer Attention:** With zero open items, maintainers have a clear backlog. Attention should shift toward monitoring for new bug reports regarding the recently patched Windows paths or soliciting feedback for upcoming features.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-06-26
**Source:** GitHub (agentscope-ai/CoPaw)

## 1. Today's Overview
The CoPaw project exhibits high development velocity with 50 Pull Requests and 27 Issues updated in the last 24 hours, indicating robust community engagement and rapid iteration. Activity is heavily focused on stabilizing the Runtime 2.0 architecture, resolving critical browser automation regressions, and enhancing frontend resilience. While no new official releases were published today, the volume of merged fixes suggests an imminent patch release to address stability concerns. The project remains in a mature maintenance phase, balancing new feature integrations (like Slack) with deep architectural refinements.

## 2. Releases
*   **No new releases** were published in the last 24 hours.
*   *Note:* Several critical bug fixes (e.g., browser process leaks, context window management) are currently in PRs and likely to be included in the next minor or patch update.

## 3. Project Progress
**Key Merged/Closed Items:**
*   **[Fixed] PR #5443:** Restored ACP-backed TUI commands and inline approvals after the AgentScope 2.0 migration, ensuring continuity for terminal users.
*   **[Fixed] PR #5534:** Updated README with trending badges to improve project visibility.
*   **[Fixed] PR #4887:** Implemented custom endpoint support for DingTalk private deployments, addressing enterprise security requirements.
*   **[Fixed] PR #5345:** Resolved issues with custom OpenAI-compatible providers (e.g., OMLX) failing to support function calling correctly.
*   **[Fixed] PR #2733:** Addressed Chrome process exhaustion issues in browser automation (though a regression was noted in Issue #5520, see below).

**Active Development Highlights:**
*   **Memory System Refactor (PR #5540):** Significant changes to the auto-memory system, introducing turn-based tracking and adjusting persistence defaults to optimize context management.
*   **Slack Integration (PR #5193):** A major feature addition bringing full multimodal and streaming support to Slack via Socket Mode.
*   **Context Management (PR #5321):** Introduction of a "scroll" context strategy allowing durable history recall via SQLite, offering an alternative to summarization.

## 4. Community Hot Topics
**Most Discussed Issues/PRs (by activity):**

1.  **Browser Automation Stability & Resource Leaks**
    *   *Issues:* #2733 (Closed), #5520 (Open), #5528 (Open).
    *   *Analysis:* Users are experiencing significant regressions in browser tool reliability, specifically regarding orphaned Chrome processes and Linux environment compatibility. This is a critical pain point for agents relying on web interaction.
    *   *Links:* [#2733](https://github.com/agentscope-ai/QwenPaw/issues/2733), [#5520](https://github.com/agentscope-ai/QwenPaw/issues/5520), [#5528](https://github.com/agentscope-ai/QwenPaw/issues/5528)

2.  **Frontend Performance & Rendering Bugs**
    *   *Issues:* #5480 (Console layout breakage), #5479 (Large session crash), #5403 (Autofill hijacking).
    *   *Analysis:* The web UI is struggling with scalability (large JSON sessions) and CSS recalculations. Users demand better performance handling for long conversations.
    *   *Links:* [#5480](https://github.com/agentscope-ai/QwenPaw/issues/5480), [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479), [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403)

3.  **Runtime 2.0 Migration Gaps**
    *   *Issues:* #5523 (`spawn_subagent` missing), #5442 (Mission mode integration).
    *   *Analysis:* As the core shifts to Runtime 2.0, several legacy tools and modes (Mission, Sub-agents) are either broken or undocumented in the new architecture, causing confusion among advanced users.
    *   *Links:* [#5523](https://github.com/agentscope-ai/QwenPaw/issues/5523), [#5442](https://github.com/agentscope-ai/QwenPaw/issues/5442)

## 5. Bugs & Stability
**Ranked by Severity:**

1.  **High: Browser Process Leak (Regression)**
    *   *Issue:* [#5520](https://github.com/agentscope-ai/QwenPaw/issues/5520) - `browser_use stop()` fails to kill renderer processes, causing memory leaks.
    *   *Status:* Fix PR [#5536](https://github.com/agentscope-ai/QwenPaw/pull/5536) is open.
2.  **High: Large Session Frontend Crash**
    *   *Issue:* [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) - Sessions >500KB crash the web UI with "unexpected error."
    *   *Impact:* Blocks access to historical data for power users.
3.  **Medium: Context Explosion Risk**
    *   *Issue:* [#5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) - Tool results accumulate if LLM calls fail, leading to context bloat.
    *   *Request:* Proposal for a hard cap on tool result size at the execution layer.
4.  **Medium: Incorrect Media Rejection Caching**
    *   *Issue:* [#5505](https://github.com/agentscope-ai/QwenPaw/issues/5505) - MiniMax-M3 safety rejections are cached as permanent model limitations, blocking future image inputs.
    *   *Status:* Fix PR [#5535](https://github.com/agentscope-ai/QwenPaw/pull/5535) is open.
5.  **Low: Minor UI/UX Glitches**
    *   *Issues:* [#5501](https://github.com/agentscope-ai/QwenPaw/issues/5501) (Button alignment), [#5508](https://github.com/agentscope-ai/QwenPaw/issues/5508) (Windows file preview 404), [#5529](https://github.com/agentscope-ai/QwenPaw/issues/5529) (Command autocomplete conflict).

## 6. Feature Requests & Roadmap Signals
*   **Per-Message Timestamps:** Issue [#5455](https://github.com/agentscope-ai/QwenPaw/issues/5455) requests moving the "Current Date" from static system context to a dynamic per-message prefix to prevent stale time references. PR [#5499](https://github.com/agentscope-ai/QwenPaw/pull/5499) addresses this.
*   **Plugin Distribution via PyPI:** Issue [#5484](https://github.com/agentscope-ai/QwenPaw/issues/5484) asks for standard pip installation support for plugins, aligning with Python ecosystem norms.
*   **Dynamic Model Switching:** Issue [#5527](https://github.com/agentscope-ai/QwenPaw/issues/5527) highlights a need for runtime hot-swapping of models during execution to handle rate limits or failures gracefully.
*   **Data Analysis Plugin:** PR [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) introduces "DataPaw," suggesting a roadmap expansion into specialized vertical agent bundles.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Reliability of Browser Tools:** Users report consistent crashes and resource exhaustion when using `browser_use`, particularly on Linux and after repeated start/stop cycles.
    *   **Frontend Scalability:** The web console becomes unusable with large conversation histories (>500KB), forcing users to delete sessions.
    *   **Configuration Confusion:** Mismatch between documented capabilities and actual behavior in Runtime 2.0 (e.g., `spawn_subagent` missing from registry).
*   **Satisfaction:**
    *   Positive reception for the DingTalk private deployment fix and the new Slack integration.
    *   Appreciation for the granular control over memory persistence and context management strategies.

## 8. Backlog Watch
*   **Issue #5497:** Internal network installation results in a blank white page on Windows. Requires investigation into asset loading or CSP issues.
*   **Issue #5541:** Ollama cloud model access failure despite correct configuration. Indicates potential authentication or endpoint parsing bugs in the Ollama integration.
*   **Issue #5512:** Provider statistics display inaccurately (showing 4 online when 3 are configured). Affects user trust in system status monitoring.
*   **PR #5321 (Scroll Context):** While innovative, this PR is under review. Maintainers should prioritize evaluation as it represents a fundamental shift in how context history is managed beyond simple compression.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-06-26

## 1. Today's Overview
ZeroClaw is experiencing high-intensity development activity, with 48 issues and 50 pull requests updated in the last 24 hours. The project is heavily focused on architectural hardening, specifically regarding security (supply chain signing, WASM plugin isolation) and governance (delegate handoffs, SOP control planes). While no new releases were published, the volume of merged and closed items indicates a rapid stabilization phase leading up to v0.8.2 and v0.8.3 milestones. The community is actively engaging with RFCs that propose significant shifts in how plugins and agents interact.

## 2. Releases
**No new releases.**
*   Current focus is on stabilizing v0.8.2 and v0.8.3 tracking issues.
*   Upcoming release candidates likely incorporate the merged security patches and the new delegate mode configurations.

## 3. Project Progress
Significant technical strides were made today in security, configuration, and runtime stability:

*   **Security & Supply Chain:**
    *   **Merged/Closed:** #8279 (Bug: Delegate bypasses parent tool allowlist) – Critical security fix addressed.
    *   **Merged/Closed:** #8236 (Bug: Voice wake struct literal missing field) – Build fix.
    *   **Merged/Closed:** #8154 (Bug: Kimi Code dead endpoint) – Provider compatibility fix.
    *   **Merged/Closed:** #6714 (Feature: Remove remote-markdown-link block) – Audit improvement.
*   **Core Functionality:**
    *   **PR #8239:** Added independent delegate targets, allowing specialist agents to run under their own policy.
    *   **PR #8304:** Implemented out-of-band SOP approval plane with fail-closed timeouts.
    *   **PR #7946:** Added context window usage bars to TUI, Gateway, and CLI for better observability.
    *   **PR #7928:** Initial WASM component-model plugin host code committed.
*   **Stability Fixes:**
    *   **PR #8149:** Fixed mutex poisoning crashes in WASM plugins.
    *   **PR #8003:** Wired up previously dead `session_end` hooks.
    *   **PR #7960:** Gated `execute_pipeline` sub-tool execution with per-agent policies.

## 4. Community Hot Topics
The most engaged discussions revolve around governance, security architecture, and plugin standardization.

*   **RFC: Work Lanes & Board Automation** ([Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808))
    *   *Activity:* 11 comments.
    *   *Analysis:* Users are requesting better maintenance workflows to reduce cognitive load on contributors. This reflects a growing project size necessitating structured triage.
*   **RFC: Supply Chain Signing & SLSA Provenance** ([Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177))
    *   *Activity:* 8 comments.
    *   *Analysis:* High interest in hardware-backed PGP keys and hermetic builds. This signals a user base prioritizing enterprise-grade security and trustworthiness for their AI agents.
*   **RFC: Prefer Lighter Core via External Integrations** ([Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165))
    *   *Activity:* 5 comments.
    *   *Analysis:* Debate on stripping ad-hoc integration code (Jira, GitHub) in favor of a skills-based model. Users want a modular, lightweight core rather than a monolithic application.
*   **RFC: OCI-Compliant Container Registries for Plugins** ([Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497))
    *   *Activity:* 3 comments.
    *   *Analysis:* Pushing for industry-standard distribution mechanisms for WASM plugins, indicating maturity in the plugin ecosystem strategy.

## 5. Bugs & Stability
Several critical and high-severity bugs were identified and resolved or are being tracked:

*   **Delegate Policy Bypass** ([Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279))
    *   *Severity:* S0 (Data Loss/Security Risk).
    *   *Status:* Closed/Fixed. Sub-agents could previously invoke tools excluded by the parent. This is a major security win.
*   **MCP Stdio Child Process Leak** ([Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903))
    *   *Severity:* High.
    *   *Status:* Open. Heartbeat-enabled daemons leak one child process per tick. Requires investigation into the MCP stdio integration.
*   **Telegram Image Accumulation** ([Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514))
    *   *Severity:* Medium.
    *   *Status:* Open. Sending multiple images on Telegram causes the agent to output duplicate messages. Related to tracker #7873.
*   **Translation Map Leak** ([Issue #8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312))
    *   *Severity:* High (Silent Data Loss).
    *   *Status:* Open. `fill-translations` leaves stale entries that re-ship leaked text.
*   **Kimi Code Endpoint Regression** ([Issue #8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154))
    *   *Status:* Closed. Fixed by updating the provider URL.

## 6. Feature Requests & Roadmap Signals
*   **Goal Mode for Autonomous Sessions** ([Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)): Users need a persistent mode to pursue objectives until completion or cancellation, distinct from interactive turns or cron jobs. Likely candidate for v0.9.0.
*   **Independent Delegate Mode** ([Issue #8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) / [PR #8239](https://github.com/zeroclaw-labs/zeroclaw/pull/8239)): Explicitly allowing specialist agents to run under their own policy. This is actively being implemented for v0.8.3.
*   **OpenRouter Fallback Models** ([Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138): Request to support automatic model failover arrays. Improves reliability for users dependent on specific providers.
*   **Rust→Wasm Web UI** ([Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)): Proposal to replace React/Vite with a Rust-based framework (Dioxus/Leptos/Yew) to eliminate Node.js from the build/runtime. Aligns with the "WASM-first" architectural goal.

## 7. User Feedback Summary
*   **Reliability Concerns:** Users are frustrated by race conditions in session persistence ([PR #7847](https://github.com/zeroclaw-labs/zeroclaw/pull/7847)) and Telegram media grouping issues ([Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)).
*   **Security Anxiety:** The high engagement with supply chain signing ([Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)) and delegate bypass fixes ([Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)) shows users are sensitive to security boundaries between agents and plugins.
*   **Usability:** The addition of context window bars ([PR #7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946)) addresses a common pain point: users don't know when they are nearing token limits.
*   **Configuration Complexity:** Requests for simpler provider configs (OpenRouter fallbacks) and clearer CLI behaviors (`zeroclaw models set` bug #7087) indicate a desire for more robust, self-healing configuration management.

## 8. Backlog Watch
*   **SkillForge Orphaned** ([Issue #8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309)): The auto-discovery engine landed in #144 but is wired to nothing. Maintainers need to decide whether to complete integration or remove it.
*   **MCP Child Process Leak** ([Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)): A persistent resource leak that requires deep runtime investigation.
*   **Telegram Media Group Dispatch** ([Issue #7873](https://github.com/zeroclaw-labs/zeroclaw/issues/7873)): Tracker for fixing how multi-image messages are handled, preventing fragmented agent responses.
*   **WASM Plugin Runtime Default-On** ([Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)): RFC for making WASM the default plugin runtime. Needs maintainer review to finalize the capability-enforcement path.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*