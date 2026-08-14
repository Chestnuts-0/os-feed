# OpenClaw Ecosystem Digest 2026-08-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-14 01:03 UTC

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

# OpenClaw Project Digest: 2026-08-14

## 1. Today's Overview
OpenClaw maintained high velocity today with 500 issues updated and 500 PRs updated, indicating a robust development cycle. Activity is heavily skewed toward bug fixes and UI polish, with 112 PRs merged or closed. The project is actively addressing stability issues related to multi-agent orchestration, gateway reliability, and the Web UI. The community reports a mix of critical stability regressions and feature requests, but the volume of activity suggests a healthy, engaged codebase.

## 2. Releases
No new releases were generated in the last 24 hours.

## 3. Project Progress
*   **PR Activity:** 112 PRs were merged or closed today. This represents a significant throughput, driven largely by maintainer contributions (e.g., `steipete`).
*   **Key Fixes Merged:** Recent PRs addressed specific UI bugs such as unit picker overflows on mobile screens, silent delivery destination clearing, and session rail accessibility issues for screen readers.
*   **Gateway Stability:** Several PRs focused on gateway stability, including a fix for phantom active runs in sessions and a correction to device-pairing join links to prevent random 404s.

## 4. Community Hot Topics
The most heated discussions are centered on persistent, high-severity bugs that are impacting core functionality.

*   **Silent Reply Failures Recurring** (Issue #121058, 92 comments)
    *   **Link:** [openclaw/openclaw Issue #121058](https://github.com/openclaw/openclaw/issues/121058)
    *   **Analysis:** This is the most active issue, with users reporting that a previously "fixed" silent-reply failure is still occurring after a previous patch was closed. The user notes that a monitoring cron is still logging new occurrences, suggesting the underlying race condition or state management issue has not been fully resolved.
*   **Memory Trust Tagging by Source** (Issue #7707, 48 comments)
    *   **Link:** [openclaw/openclaw Issue #7707](https://github.com/openclaw/openclaw/issues/7707)
    *   **Analysis:** A high-value feature request for security. The proposal is to tag agent memory entries by trust level based on origin (e.g., user commands vs. web scrapes) to prevent memory poisoning attacks. This reflects a maturing concern for security in autonomous agent workflows.
*   **Text Between Tool Calls Leaks** (Issue #25592, 48 comments)
    *   **Link:** [openclaw/openclaw Issue #25592](https://github.com/openclaw/openclaw/issues/25592)
    *   **Analysis:** Users are frustrated that internal processing text (like error handling) is being routed to messaging channels (Slack/iMessage), polluting user conversations with internal system noise.
*   **Subagent Completion Silently Lost** (Issue #44925, 27 comments)
    *   **Link:** [openclaw/openclaw Issue #44925](https://github.com/openclaw/openclaw/issues/44925)
    *   **Analysis:** A critical reliability issue where subagent task orchestration fails to notify or retry when subagent completions are lost during timeout or busy conditions.

## 5. Bugs & Stability
The project is currently battling several critical regressions that are impacting session reliability and message delivery.

*   **High Severity:**
    *   **Silent Reply Failures (Issue #121058):** Recurring failure mode where reply payloads are lost, making the agent unresponsive to user inputs.
    *   **Subagent Delivery Loss (Issue #44925, #67777, #92433):** Multiple reports of subagent results being dropped or silently discarded, leading to incomplete task execution.
    *   **Session State Corruption (Issue #43367):** Concurrent agents are overwriting configurations and failing session locks, making multi-agent workflows unstable.
*   **Medium Severity:**
    *   **iOS/WebChat Message Delivery (Issue #97983):** Messages append to the transcript but fail to trigger assistant replies in the mobile/web interfaces.
    *   **Memory Management Chaos (Issue #43747):** A regression causing memory management inconsistencies across different users/instances of OpenClaw.
    *   **Cron Agent Stalling (Issue #121953):** The cron agent stalls on specific models (DeepSeek) due to message prefix prioritization.

## 6. Feature Requests & Roadmap Signals
*   **Security & Memory:** The high engagement on **Issue #7707** (Memory Trust Tagging) suggests that the project roadmap is moving toward more sophisticated security models for handling untrusted data sources (web scraping, third-party skills).
*   **YAML Support (Issue #45758):** Users are requesting YAML configuration support, which would improve usability for DevOps-style workflows where YAML is standard.
*   **Pace-Aware Rate Limiting (Issue #45771):** A feature request to prevent autonomous agents from burning through API rate limits, indicating a need for better resource management tools.
*   **OpenRouter Cost Tracking (Issue #9016):** Users want to expose API usage costs to the agent runtime, a signal for better financial transparency in autonomous systems.

## 7. User Feedback Summary
The user base is experiencing significant friction with **session reliability** and **message delivery**.
*   **Dissatisfaction:** Users report "silent" failures where tasks appear to run but produce no output or deliver no message to the channel. This breaks the fundamental trust in the agent's ability to communicate.
*   **Use Case:** The primary use case appears to be complex, multi-agent orchestration and long-running autonomous sessions. Users are experiencing "zombie" sessions, blocked lanes, and state corruption that require manual intervention or restarts.
*   **UX Friction:** There is notable frustration with the Web UI's handling of long messages (truncation), mobile layout issues, and confusing behavior when clearing automation settings.

## 8. Backlog Watch
*   **Long-standing High-Priority Issues:** Issues like **#43367** (Multi-agent orchestration instability) and **#121058** (Silent reply failures) have been open for months and are highly commented, indicating they are blockers for production use.
*   **UI/UX Refinement:** Several UI issues (e.g., **#33102** TUI config, **#51028** Sessions panel sorting) are "off-meta" or P3, but indicate a desire for a more polished, professional user experience.
*   **Plugin Integration:** **Issue #114154** (bundle-mcp tool not loading) suggests that while the core agent is stable, integration with external tools and plugins remains a fragile area.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Ecosystem
**Date:** 2026-08-14

## 1. Ecosystem Overview
The open-source AI agent ecosystem in August 2026 is characterized by rapid maturation from experimental prototypes to production-grade orchestrators. While core LLM integration remains commoditized, the community is aggressively addressing critical infrastructure challenges: **architectural stability**, **security hardening** (memory poisoning, command execution), and **UX polish** for complex multi-agent workflows. Projects are diverging based on use case—some focusing on enterprise-grade persistence and reliability (e.g., OpenClaw, IronClaw), while others prioritize desktop-native experiences and modular extensibility (e.g., CoPaw, NanoBot).

## 2. Activity Comparison

| Project | Repo | Issues (24h) | PRs (24h) | Releases (24h) | Health Score (Est.) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | openclaw/openclaw | 500 | 500 | No | High (Stabilization) |
| **NanoBot** | HKUDS/nanobot | N/A | 31 | No | High (Maintenance) |
| **Hermes** | nousresearch/hermes-agent | 50 | 50 | v0.20.1 | High (Refactoring) |
| **CoPaw** | agentscope-ai/CoPaw | 42 | 50 | v2.1.0 | High (Feature-Heavy) |
| **IronClaw** | nearai/ironclaw | N/A | 13 | v1.2.0 | High (Arch Overhaul) |
| **NanoClaw** | qwibitai/nanoclaw | N/A | 13 | v2.2.0 | High (Security Focus) |
| **LobsterAI** | netease-youdao/LobsterAI | 1 | 11 | No | Medium (Consolidation) |
| **PicoClaw** | sipeed/picoclaw | N/A | 12 | No | Medium (Performance) |
| **ZeroClaw** | zeroclaw-labs/zeroclaw | 50 | 50 | No | High (RFC Heavy) |
| **Moltis** | moltis-org/moltis | N/A | 4 | No | Stable (Infra) |

*Note: Activity metrics represent updates to open/closed items in the last 24 hours. "Health Score" is inferred based on release cadence and issue resolution trends.*

## 3. OpenClaw's Position
OpenClaw maintains the **highest velocity** and the most mature community engagement in the ecosystem. Its position as a "core reference" is solidified by its high throughput of 500+ issues and PRs, indicating it serves as a central hub for complex agent orchestration discussions.
*   **Advantages vs. Peers:** Unlike projects like NanoClaw or PicoClaw which are focused on specific niches (CLI tools, embedded UI), OpenClaw tackles the hardest problems in the space: **multi-agent orchestration reliability** and **session state management**.
*   **Technical Approach:** OpenClaw appears to operate a monolithic or highly integrated kernel (evidenced by "gateway" and "session rail" architecture) that handles high-concurrency workflows better than modular competitors, though this comes at the cost of higher technical debt and complexity.
*   **Community Size:** It has the largest active community, evidenced by the volume of comments on critical bugs (e.g., Silent Reply Failures), suggesting a user base that is heavily invested in production deployment.

## 4. Shared Technical Focus Areas
Across the ecosystem, three critical technical requirements are emerging:

1.  **Memory & Security Trust Management:**
    *   *Projects:* OpenClaw, NanoBot, ZeroClaw.
    *   *Focus:* Agents are increasingly handling untrusted data (web scraping, MCP tools). There is a shared demand for "trust tagging" to prevent memory poisoning and ensure data integrity.
2.  **Session Persistence & State Recovery:**
    *   *Projects:* OpenClaw, IronClaw, Hermes.
    *   *Focus:* "Zombie sessions" and state corruption are top blockers. Projects are investing heavily in locking mechanisms, transactional history archiving, and preventing race conditions in concurrent agent execution.
3.  **Plugin & Tool Safety Governance:**
    *   *Projects:* Hermes, CoPaw, ZeroClaw.
    *   *Focus:* As agents gain execution rights, the industry is shifting toward "fail-closed" policies and explicit confirmation tiers for tool execution to prevent arbitrary code execution (ACI) vulnerabilities.

## 5. Differentiation Analysis

| Project | Primary Differentiation | Target User | Technical Architecture |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **Orchestration Engine:** Full-featured gateway for complex workflows. | Power Users / DevOps | Monolithic Kernel / Gateway-based |
| **NanoBot** | **Protocol Ecosystem:** Deep integration with Matrix, Telegram, and MCP. | Protocol-focused Users | Modular / Protocol-heavy |
| **CoPaw (QwenPaw)** | **Desktop Experience:** Native OS shell, window management, and app center. | Desktop Native Users | Desktop App / GUI-first |
| **IronClaw** | **Infrastructure:** Focus on cloud orchestration, Postgres persistence, and WASM sandboxes. | Cloud Engineers / SysAdmins | Infrastructure-as-Code / WASM |
| **NanoClaw** | **Agent Lifecycle:** CLI-first, focus on template management and CI/CD security. | Developers / CI/CD Pipelines | CLI Tool / Template Manager |
| **LobsterAI** | **Safety & Memory:** Focus on memory file integrity and safety modules. | Enterprise / Data-Sensitive Users | Enterprise-focused / Safety-First |

## 6. Community Momentum & Maturity

*   **Rapid Iteration (Sprint Phase):** **OpenClaw, Hermes, CoPaw, ZeroClaw**. These projects are releasing frequent patches and handling high volumes of issues/PRs. They are in a "feature-heavy" or "stabilization" sprint, actively fixing regressions while pushing new architectural changes (e.g., ZeroClaw's RFCs, Hermes's Webhook Revolution).
*   **Stabilization & Polish (Consolidation Phase):** **NanoBot, IronClaw, NanoClaw**. These projects have reached a stable version (v1.2, v2.2) and are now focused on architectural overhauls ("Reborn", "Pluggable Loops") and deep maintenance rather than new feature additions.
*   **Maintenance Mode:** **PicoClaw, Moltis**. Activity is driven primarily by dependency updates and performance tuning (UI lag) rather than new features.

## 7. Trend Signals

1.  **The "Webhook Revolution" & External Orchestration:** Hermes and ZeroClaw are aggressively refactoring how agents communicate via webhooks. This signals a move away from purely local CLI agents toward agents that can act as API endpoints for external applications.
2.  **Desktop OS Integration:** CoPaw’s introduction of a "QwenPaw OS Shell" represents a trend where personal agents are becoming desktop operating systems, blurring the line between the agent and the host OS.
3.  **Memory Economics:** There is a strong push for memory optimization (e.g., NanoBot's "ViBo" memory system, CoPaw's 97.5% reduction request). As context windows become expensive, agents must prioritize what to remember.
4.  **Security as a First-Class Concern:** The frequency of "Memory Trust Tagging" and "Shell Command Confirmation" issues suggests that the community is moving past "does it work?" to "is it safe?" for production use.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-08-14
**Project:** HKUDS/nanobot (AI Agent & Personal Assistant Framework)

---

### 1. Today's Overview
NanoBot maintained a high level of activity on 2026-08-14, characterized by robust development momentum in both the core agent loop and the WebUI. The project saw a high volume of pull request activity (31 updates), with a significant portion focused on stabilizing file system persistence and session management. While no new releases were pushed, the frequency of bug fixes suggests active maintenance and rapid response to stability issues, keeping the project in a healthy, evolving state.

### 2. Releases
**No new releases detected.**
*(No version updates were pushed in the last 24 hours.)*

### 3. Project Progress
The development focus today was heavily skewed toward **stability and user experience (UX) fixes** rather than new feature additions.
*   **Core Stability:** The team addressed critical persistence failures. Three PRs (rickererer) fixed the Cron scheduler crash issue (Issue #5373), ensuring the scheduler survives disk full or permission errors. Additionally, PRs (dajiaohuang) resolved file-cap archive failures and session truncation bugs, ensuring data integrity during history management.
*   **WebUI Enhancements:** Significant progress was made on the WebUI collaboration and UX. PRs (chengyongru) enabled session collaboration via mentions and fixed race conditions during session deletion. PRs (Re-bin) restored transcript-only history and added native workspace folder pickers.
*   **Integration Features:** Work continued on expanding protocol support, specifically regarding Telegram stickers (PR #5387) and Matrix SAS verification flows (PR #5385).

### 4. Community Hot Topics
The community is actively engaged in refining how agents handle external data and tools, specifically regarding the MCP (Model Context Protocol) ecosystem and protocol-specific features.

*   **MCP Schema Optimization:** Issue #5298 proposes a budget model for MCP schemas. As agents integrate more tools, the context window is becoming a bottleneck. Users are requesting a mechanism to "hide" complex tool schemas from the LLM while keeping them available for tool execution.
    *   *Link:* [Issue #5298](https://github.com/HKUDS/nanobot/issues/5298)
*   **Telegram Stickers & Reactions:** Issue #5289 highlights a missing feature in the Telegram integration: the ability to send stickers and handle inbound sticker reactions properly.
    *   *Link:* [Issue #5289](https://github.com/HKUDS/nanobot/issues/5289)
*   **Matrix Device Trust:** Issue #4841 addresses a friction point for Matrix users: the bot device appearing as "untrusted" in Element clients due to the lack of SAS verification paths.
    *   *Link:* [Issue #4841](https://github.com/HKUDS/nanobot/issues/4841)

### 5. Bugs & Stability
Several critical stability issues were reported and subsequently addressed today, indicating the project is undergoing a "polish" phase.

*   **Cron Scheduler Crash (Severity: High):** **[Issue #5373](https://github.com/HKUDS/nanobot/issues/5373)** reported that a single file system error (disk full/locked file) inside the CronService permanently kills the scheduler. **Status:** Fixed by PRs #5374 and #5375.
*   **Session Archive Data Loss (Severity: High):** **[Issue #5378](https://github.com/HKUDS/nanobot/issues/5378)** noted that `Session.enforce_file_cap()` mutates the session before a failed archive callback, causing data loss. **Status:** Fixed by PR #5380.
*   **WebUI State Conflicts (Severity: Medium):** **[Issue #5368](https://github.com/HKUDS/nanobot/issues/5368)** reported that "Copy" and "Fork" buttons appear while the Agent is still generating text, causing UI confusion. **Status:** Open (No fix PR yet).
*   **Consolidation Truncation (Severity: Medium):** **[Issue #5377](https://github.com/HKUDS/nanobot/issues/5377)** highlighted that the consolidation model truncates input, but the session cursor advances past the original batch, potentially losing context.

### 6. Feature Requests & Roadmap Signals
The roadmap is trending toward **context management** and **protocol completeness**.

*   **MCP Apps Integration:** **[Issue #5251](https://github.com/HKUDS/nanobot/issues/5251)** requests support for "MCP Apps" (the `io.modelcontextprotocol/ui` extension) in the WebUI. This would allow the agent to display rich, interactive UI results directly within the dashboard, moving beyond simple text artifacts.
*   **QwenCloud Provider:** **[Issue #5350](https://github.com/HKUDS/nanobot/issues/5350)** proposes a provider path for QwenCloud. This suggests the project is expanding its compatibility layer to support international deployment scenarios where DashScope (Alibaba) might not be the primary or preferred provider.
*   **Agent Memory:** **[Issue #5372](https://github.com/HKUDS/nanobot/issues/5372)** notes that agents start from zero every session. While this is a standard design for many agents, the proposal for a memory integration (ViBo) highlights a demand for persistent cross-session memory to reduce token costs.

### 7. User Feedback Summary
User feedback today reflects a maturing user base that is pushing for finer control over the agent's behavior and the WebUI's reliability.
*   **Localization:** Users want the WebUI to stop showing hardcoded English strings (e.g., "Working for...") and respect the selected interface language.
*   **Matrix UX:** Users are frustrated by the "Untrusted" device warnings in Element, indicating a need for better security UX flows.
*   **Session Management:** Users are concerned about the reliability of session deletion and history archiving, fearing data loss during high-load operations.

### 8. Backlog Watch
*   **WebUI Localization:** **[Issue #5366](https://github.com/HKUDS/nanobot/issues/5366)** is a clean, straightforward request to localize agent activity text. This is a low-hanging fruit for maintainers to improve accessibility.
*   **Telegram Sticker Support:** **[Issue #5289](https://github.com/HKUDS/nanobot/issues/5289)** has been open for a week. Given the high volume of Telegram usage, adding sticker support is a high-impact, low-effort feature.
*   **Matrix SAS Verification:** **[Issue #4841](https://github.com/HKUDS/nanobot/issues/4841)** has been open since July 7th. As E2EE (End-to-End Encryption) usage grows, fixing this "untrusted" device issue will be crucial for enterprise adoption.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-08-14
**Repository:** NousResearch/hermes-agent

---

### 1. Today's Overview
Hermes Agent experienced high activity today with 50 new issues and 50 PR updates, indicating a robust development cycle and active community engagement. The project released **v0.20.1 (v2026.8.13)**, a significant patch release rolling up 656 merged PRs since v0.20.0, aimed at stabilizing downstream deployments and Docker images. The project is currently navigating a complex web of stability issues, particularly around TUI overlays, Desktop rendering, and Windows/Docker compatibility, alongside a massive "Webhook Revolution" refactoring effort.

### 2. Releases
**v0.20.1 (v2026.8.13)** - [Release Notes](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.8.13)
*   **Type:** Patch Release
*   **Summary:** This release consolidates approximately 656 merged PRs since v0.20.0 into a stable, tagged release.
*   **Target Audience:** Downstream consumers (Docker image maintainers, hosted deployment providers, and installers).
*   **Migration Notes:** No breaking changes or migration notes are explicitly listed in the provided data, but users upgrading from v0.20.0 should ensure they pull the latest tag for the most up-to-date features and bug fixes.

### 3. Project Progress
*   **Merged PRs:** While specific merged counts aren't detailed for today, the volume of open PRs (47) suggests a high rate of active development and review.
*   **Key Focus Areas:**
    *   **Security:** Added a Gitleaks secret scan workflow and fixed OAuth authorization URL validation to prevent malicious redirect handlers.
    *   **Refactoring:** Significant work on "graph-gated repair campaigns" for webhooks and "fail-closed" skill governance.
    *   **Platform Fixes:** Updates to Playwright, macOS service restart handling, and Japanese locale support for the website.

### 4. Community Hot Topics
*   **Webhook Revolution (Meta-Issue):** [Issue #84834](https://github.com/nousresearch/hermes-agent/issues/84834) - A massive 16-comment epic focusing on a "5×2×3 repair campaign" for the entire Hermes webhook surface (ingress, execution, delivery, management UI).
*   **Skills Index Degradation:** [Issue #66616](https://github.com/nousresearch/hermes-agent/issues/66616) - A 25-comment open bug regarding stale skills indices and automated freshness probes failing after 29.8 hours.
*   **TUI Overlay Visibility:** [Issue #69592](https://github.com/nousresearch/hermes-agent/issues/69592) - A 12-comment critical bug affecting TUI workflows where `/sessions` overlays are invisible when ambient widgets are active, blocking resume/switch functionality.

### 5. Bugs & Stability
*   **P1 - TUI Session State Loss:** [Issue #62142](https://github.com/nousresearch/hermes-agent/issues/62142) - Verification stops can discard streamed final answers and cron reports, breaking session history integrity.
*   **P2 - Desktop/Cli Inconsistencies:**
    *   [Issue #52339](https://github.com/nousresearch/hermes-agent/issues/52339): Terminal update leaves Desktop app bundle (`/Applications/Hermes.app`) stale.
    *   [Issue #83427](https://github.com/nousresearch/hermes-agent/issues/83427): `browser_exec` crashes on Windows with `pydantic_core` ModuleNotFoundError.
    *   [Issue #84058](https://github.com/nousresearch/hermes-agent/issues/84058): Desktop composer caret disappears during tool streaming.
*   **P2 - Windows Compatibility:**
    *   [Issue #76267](https://github.com/nousresearch/hermes-agent/issues/76267): `sync_back` drops remote sandbox file changes on Windows.
    *   [Issue #83851](https://github.com/nousresearch/hermes-agent/issues/83851): GBK encoding crash on Chinese Windows gateways.

### 6. Feature Requests & Roadmap Signals
*   **Rich Spreadsheet Skill:** [Issue #4438](https://github.com/nousresearch/hermes-agent/issues/4438) - A long-running request (created April 2026) for a structured abstraction to handle Excel/CSV files without raw Python parsing.
*   **Signal Adapter Native Features:** [Issue #39043](https://github.com/nousresearch/hermes-agent/issues/39043) - Request for full Signal support including native quote/reply, edits, and remote delete.
*   **Configurable Credential Pool TTL:** [Issue #33049](https://github.com/nousresearch/hermes-agent/issues/33049) - Request to make credential exhaustion cooldowns configurable instead of hardcoded constants.
*   **Telegram Drop Pending Updates:** [Issue #84317](https://github.com/nousresearch/hermes-agent/issues/84317) - Request to allow opting out of aggressive `drop_pending_updates` on Telegram cold boot.

### 7. User Feedback Summary
The community feedback highlights a tension between feature richness and stability, particularly in the Desktop application and TUI.
*   **Pain Point:** Users are experiencing "split-brain" states where local terminal updates do not sync with the installed Desktop app, causing confusion.
*   **Pain Point:** TUI users report that the default ambient widget dock pattern breaks core workflows (sessions/models) due to invisible overlays, forcing users to find workarounds.
*   **Pain Point:** Desktop rendering issues (duplicate messages, caret loss) suggest a frontend rendering layer struggle with state management during tool execution.
*   **Satisfaction:** The release of v0.20.1 and the "Webhook Revolution" indicate the project is actively addressing architectural debt, which is generally viewed positively by power users.

### 8. Backlog Watch
*   **Long-standing Feature:** [Issue #4438](https://github.com/nousresearch/hermes-agent/issues/4438) - Rich Spreadsheet Skill (opened April 2026, 8 comments). This remains a top feature request likely to be addressed in future iterations.
*   **Session State Integrity:** [Issue #81639](https://github.com/nousresearch/hermes-agent/issues/81639) - A critical session-stuck bug (opened Aug 8) regarding tool-call history mutation, currently open.
*   **MCP OAuth Security:** [PR #82350](https://github.com/nousresearch/hermes-agent/pull/82350) - A security-focused fix for MCP OAuth URL validation, currently open and likely needs review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-08-14

### 1. Today's Overview
PicoClaw demonstrates steady, maintenance-focused activity today with 12 total updates across Issues and Pull Requests. The project is currently in a maintenance phase, with the vast majority of activity driven by dependency updates rather than new feature development. A critical UX performance issue in the Web UI has resurfaced, highlighting a gap between current feature set and user experience quality.

### 2. Releases
**None.** No new releases were pushed in the last 24 hours.

### 3. Project Progress
The development velocity today was primarily focused on dependency management and infrastructure stability.
*   **Infrastructure:** One PR (#3318) addressed a broken `pnpm-lock.yaml` file in the Web frontend, which was preventing builds or causing installation errors due to duplicate keys.
*   **Dependencies:** Six dependency bumps were merged or processed, updating Go SDKs for AWS (BedrockRuntime, Config), Anthropic, and Matrix (mautrix). These updates ensure compatibility with the latest API changes and security patches.

### 4. Community Hot Topics
*   **Web UI Performance Degradation (#3281):** This is the most active discussion, with 5 comments and 1 reaction. Users report severe input lag when the chat history grows. The underlying need is **scalability optimization**; the application struggles to handle state management efficiently as conversational context length increases.
    *   *Link:* [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)
*   **Audio Transcription Model Flexibility (#3331):** A new feature request seeks to decouple ASR (Automatic Speech Recognition) from the legacy `*-whisper-*` model pattern. The user wants to use newer, faster transcription models via the `/audio/transcriptions` endpoint.
    *   *Link:* [Issue #3331](https://github.com/sipeed/picoclaw/issues/3331)

### 5. Bugs & Stability
*   **High Severity - Web UI Input Lag:** Issue #3281 identifies a critical performance regression where typing in the chat input box becomes "very laggy" as session history increases. This impacts usability significantly for users with long-term context sessions.
    *   *Status:* Open (No fix PR yet).

### 6. Feature Requests & Roadmap Signals
*   **Dynamic Model Override:** Issue #3330 requests the ability to specify a model dynamically when using `delegate`, `spawn`, or `subagent` tools, rather than relying on static configuration. This is a **architectural enhancement** signal, suggesting users want more granular control over agent behavior during runtime.
*   **Generic Transcription Support:** Users are pushing for a switch to support generic transcription endpoints, moving away from the rigid `*-whisper-*` naming convention. This indicates a need for **API flexibility**.

### 7. User Feedback Summary
User feedback highlights a tension between feature availability and performance.
*   **Pain Point:** Users are utilizing the Web UI for long sessions but are frustrated by input lag.
*   **Expectation:** Users want the system to feel "snappy" and responsive even as context windows grow, similar to modern chat applications (e.g., ChatGPT).
*   **Configuration:** Users desire more granular configuration, specifically the ability to choose models on-the-fly rather than hardcoding them in `config.json`.

### 8. Backlog Watch
*   **Stale Dependency PRs:** Several Dependabot PRs (e.g., #3305, #3306) have been closed or marked as stale. While merged, these indicate a backlog of dependency updates that require periodic maintenance to keep the project secure and up-to-date.

---
**Data Source:** GitHub (sipeed/picoclaw) | **Generated:** 2026-08-14

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**Project Digest: NanoClaw (nanocoai/nanoclaw)**
**Date:** 2026-08-14

### 1. Today's Overview
NanoClaw remains highly active with 21 repository updates today, indicating robust development momentum. The team successfully released version **v2.2.0**, focusing on optimizing template plugin handling to prevent duplicate agents during group creation. Activity is heavily weighted towards CI/CD hardening and security verification, with 13 pull requests closed and merged. Overall, the project shows excellent health, focusing on stabilization and security verification of the agent image pipeline.

### 2. Releases
*   **v2.2.0**
    *   **Key Change:** The `ncl groups create --template <ref>` command now supports **in-place updates**. Previously, running this command on a group already carrying the template's plugin would mint a duplicate agent. Now, it updates the existing group's plugin surface (files, skills, MCP servers) directly.
    *   **Migration Notes:** Users can now safely re-run the template creation command to synchronize updates without creating conflicting agent identities.

### 3. Project Progress
*   **CI/CD & Security:** The team significantly advanced the **verify-agent-image** gate. Multiple PRs (e.g., #3238, #3239, #3241, #3243) were merged to ensure signature verification is mandatory, correctly handling draft PRs and transient API errors. A new "signature approver" feature was implemented, allowing verified signatures to act as the approving review for pin bumps, eliminating reliance on manual clicks.
*   **Agent Templates:** The migration to "Agent Plugins 1.0.0" directories (PR #3220) is complete, followed by the wizard and first-agent stamping flow (PR #2909). Plugin MCP working directories are now correctly honored in both Codex and Opencode providers.
*   **Telegram Security:** A critical security fix was merged (PR #3229) to replace `Math.random()` with `crypto.randomInt` in the Telegram pairing code generator, widening the code space and improving randomness.

### 4. Community Hot Topics
*   **Unknown Sender Policy (Issue #3235):** Open issue regarding the `unknown_sender_policy = 'request_approval'`. Automated senders (webhooks/bots) generate unbounded approval cards that cannot be sensibly approved or denied. The underlying need is better handling of system-to-system messaging to prevent notification spam.
*   **Template UUID Prefix (Issue #3234):** Closed issue where template-stamped agents received bare UUIDs (missing the `ag-` prefix), causing OneCLI `ensureAgent` to reject them. The fix aligns the ID generation with the `--folder` path convention.

### 5. Bugs & Stability
*   **High Severity (Fixed):** **Template UUID Prefix Mismatch.** (Issue #3234). The agent-group ID generated by `ncl groups create --template` was incompatible with OneCLI identifiers, blocking agent spawns.
*   **Medium Severity (Open):** **Unbounded Approval Cards.** (Issue #3235). The approval gate for unknown senders currently treats bots the same as humans, creating an infinite loop of approval requests for webhooks.
*   **Low Severity (Fixed):** **CI Verification Failures.** The `verify-agent-image` workflow was previously advisory and failing due to missing environment variables. It has been updated to be a required status check (PRs #3238, #3158).

### 6. Feature Requests & Roadmap Signals
*   **Hindsight Memory Integration (PR #2420):** A new skill `/add-hindsight` has been proposed to bundle an MCP wrapper for the Hindsight long-term memory engine. This suggests the roadmap is moving toward richer agent persistence and memory features.
*   **Bounded JSON Input (PR #3218):** A request to accept bounded JSON from stdin (`--stdin-json`) is open. This would improve CLI usability for programmatic automation by providing a safer, structured input method.

### 7. User Feedback Summary
*   **User Pain Point:** Users creating agent groups via templates previously faced friction due to duplicate agents being created when trying to update existing groups.
*   **Satisfaction:** The community is actively testing the new CI/CD security gates (e.g., signature-based approvals). However, there is concern regarding the UX of the approval workflow, specifically regarding the inability to handle automated sender policies gracefully.

### 8. Backlog Watch
*   **Telegram Pairing Randomness:** While fixed in the last 24h, this was a notable security gap previously.
*   **Hindsight MCP Wrapper:** The `/add-hindsight` skill is a significant feature request that has been developed but is currently open for review, suggesting it may land in a future release pending final integration tests.

---
**Links:**
*   [NanoClaw GitHub Repository](https://github.com/qwibitai/nanoclaw)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest - 2026-08-14

### 1. Today's Overview
IronClaw demonstrated a highly active development cycle today, characterized by a major "Reborn" architectural overhaul and significant performance optimization work. The project promoted version **1.2.0** to stable, following the stabilization of its RC3 candidate. Concurrently, the engineering team is aggressively implementing the "Pluggable agent loops" epic, a high-risk, high-reward initiative that aims to transform IronClaw from a monolithic orchestrator into a more modular kernel. The activity level suggests a sprint-heavy phase focused on scaling infrastructure and architectural restructuring.

### 2. Releases
**ironclaw-v1.2.0** (Released 2026-08-13)
This release marks the stable promotion of the `1.2.0-rc.3` candidate.
*   **Key Changes:** The runtime container image now includes `curl`, enabling in-container HTTP healthchecks for orchestrator probes.
*   **Migration Notes:** No breaking changes were noted in the release notes; the focus was on stabilizing the fixes validated in RC2 and RC3.

### 3. Project Progress
*   **Closed PRs (13):** A significant portion of work focused on closing implementation tasks for the "Reborn" architecture.
    *   **Performance:** `#7630` (Stress measurement for Postgres writes) and `#7631` (Coalescing runtime milestone writes) were merged to address write amplification.
    *   **Architecture:** `#7625` promoted RC3 to stable 1.2.0.
    *   **Bug Fixes:** `#7581` fixed the Extensions UI to correctly refresh bundled MCP state after authentication.
*   **Open PRs (20):** Active work continues on the "Unbound Turns" design (`#7633`) and document fact contracts (`#7378`).

### 4. Community Hot Topics
*   **Pluggable Agent Loops (Epic #7482):** This is the central theme of the current development cycle. With 6 comments, it is the most active issue.
    *   **Analysis:** The project is moving away from hard-coded agent loops toward a "kernel" architecture where loops are off-the-shelf harnesses. This involves consolidating multiple sub-issues into implementation tasks for egress edges, foreign harness execution, and capability access.
*   **Document Round-Trip & Editing:** PR `#7163` (Closed) and Issue `#6257` (Open) discuss PDF generation and file handling, indicating a focus on improving the agent's ability to manipulate documents like Word, Excel, and PDFs.
*   **Local File Access:** Issue `#2117` (2 comments) remains a blocker for cloud-hosted users trying to access local file systems (e.g., Obsidian vaults) via a local bridge daemon.

### 5. Bugs & Stability
*   **High Severity - Memory Recall:** Issue `#7185` reports that context established in one conversation is not reliably recalled in later conversations. This impacts the agent's long-term memory persistence.
*   **Medium Severity - PDF Generation:** Issue `#6257` is a recurring bug where sending/generating PDF files throws an `Invalid value (attachments.mime_type)` error.
*   **Medium Severity - MCP Auth:** Issue `#7626` notes that custom MCP tools requiring browser/email auth get stuck during connection, breaking integration workflows.

### 6. Feature Requests & Roadmap Signals
*   **Local Bridge Daemon:** Requested in `#2117`, this feature is critical for users needing to bridge cloud-hosted agents with local resources. The project acknowledges this as a blocker for specific use cases.
*   **Nostr Integration:** PR `#7184` adds Nostr host functions for WASM tools, suggesting the project is expanding its sandbox capabilities to support Web3 social protocols.
*   **Structured Execution Contracts:** PR `#7548` introduces structured execution contracts for scheduled automations, moving toward more formalized automation logic.

### 7. User Feedback Summary
*   **Visibility:** Users requested clearer exposure of the "IronClaw Reborn" version in the Web UI (`#7580`), indicating a gap between the backend versioning and frontend discovery.
*   **Connectivity:** The GitHub extension has a UX flaw where it shows as "connected" even with invalid credentials (`#7627`), causing user confusion and frustration.

### 8. Backlog Watch
*   **Unbound Turns Design:** PR `#7633` is a large, size-XL change implementing a complex architectural shift where threads are the unit of work, and the kernel no longer carries reply routing. This requires significant review due to its scope.
*   **Document Fact Contract Tests:** PR `#7378` (3/5 in a series) is adding deterministic contract tests to prevent documentation drift. It requires integration into the CI pipeline.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-08-14
**Project:** netease-youdao/LobsterAI

---

### 1. Today's Overview
LobsterAI experienced moderate activity today, with 11 Pull Requests updated and 1 active Issue. The community is actively addressing long-standing technical debt by adding comprehensive test coverage to core memory and safety modules. Additionally, the project is undergoing significant UI refactoring to unify rendering components and preparing for enterprise edition features, indicating a transition from feature expansion to consolidation and scalability improvements.

### 2. Releases
**No new releases** were published in the last 24 hours. The most recent stable version is `release/2026.7.30`.

### 3. Project Progress
**Merged/Closed PRs (6):**
*   **UI Refactoring:** The team successfully merged a series of rendering area PRs focused on unifying the user interface. This includes merging skills and MCP views into a single "skills-and-connectors" view (#2487) and standardizing card styling across MCP, Kits, and Skills modules (#2486).
*   **Activity Features:** A "Evergreen Daily Check-in" feature was integrated into the renderer area (#2485), replacing the previous time-limited event logic with a permanent user engagement feature.
*   **Enterprise Edition:** Significant groundwork was laid for the enterprise edition, including documentation and main area updates (#2484).
*   **Bug Fixes:** The "Run Manually" interaction for scheduled tasks was fixed to provide optimistic UI updates and proper state synchronization (#1232).

### 4. Community Hot Topics
**Most Active:**
*   **Issue #1162 (Open):** *Add Vitest unit tests for openclawMemoryFile and openclawLocalTimeContextPrompt.*
    *   **Analysis:** This is a high-priority technical debt item. The `openclawMemoryFile` module manages critical memory files (MEMORY.md) and is heavily relied upon by business logic. The addition of 75 unit tests aims to prevent data corruption during SQLite migrations and workspace switching. It has received 1 comment, indicating active maintenance review.
    *   **[Link](https://github.com/netease-youdao/LobsterAI/issues/1162)**

### 5. Bugs & Stability
**Reported Issues (1):**
*   **Missing Test Coverage:** The primary stability concern highlighted today is the lack of unit tests for safety and memory modules.
    *   **Severity:** High. `commandSafety.ts` (dangerous command detection) and `coworkMemoryJudge.ts` (memory quality scoring) lack coverage. Without tests, regressions could lead to silent failures like `rm -rf` execution or incorrect memory storage.
    *   **Status:** A PR (#1156) has been opened to address this, but it is currently open.

### 6. Feature Requests & Roadmap Signals
**Current Signals:**
*   **Optimistic UI Updates:** A PR (#1163) is open to improve the "Run Now" interaction for scheduled tasks. Currently, users face a 15-second polling delay to see results. Implementing optimistic updates and gateway synchronization will significantly improve user experience (UX).
*   **Agent Name Validation:** There is a request to prevent duplicate custom agent names (#1166), which would improve data integrity in user profiles.
*   **Enterprise Edition:** The "Feat/enterprise edition" PR (#2484) suggests the project is preparing for a version that may include enterprise-specific features or architecture changes.

### 7. User Feedback Summary
*   **UX Friction:** Users are reporting poor interaction feedback when triggering scheduled tasks manually. The lack of loading states and success indicators causes confusion and potential duplicate clicks.
*   **UI Consistency:** Users appreciate the ongoing work to unify the UI styles (MCP, Skills, Kits) to reduce visual clutter and improve the cohesive feel of the application.

### 8. Backlog Watch
**Long-Standing Items (Last Updated > 100 days ago):**
*   **PR #1156:** *Add Vitest unit tests for commandSafety and coworkMemoryJudge.* (Created: 2026-03-31). This PR addresses critical safety modules and has been dormant for 4+ months.
*   **Issue #1163:** *Fix scheduled task "Run Now" interaction.* (Created: 2026-03-31). This addresses a significant UX bug that has persisted for months.
*   **PR #1165:** *Add Vitest unit tests for openclawMemoryFile...* (Created: 2026-03-31). Another stale test coverage request.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-08-14

## 1. Today's Overview
The Moltis project experienced a moderate level of activity on August 14th, characterized by active maintenance and dependency resolution rather than new feature releases. Activity was driven entirely by Pull Requests focused on fixing build configurations and module paths. Overall project health remains stable, with no new issues reported and all current issues remaining open without critical severity flags.

## 2. Releases
**None.** No new releases were published in the last 24 hours.

## 3. Project Progress
*   **PRs Updated:** 4 Pull Requests were updated today. All are currently **Open**.
*   **Activity Focus:** The development team is actively refactoring internal dependencies to migrate legacy module paths to the new `openclaw` organization. This includes fixing build scripts for the local validation workflow and correcting Go module references in the sandbox and skills systems.
*   **Feature Integration:** Significant progress was made on connector architecture, specifically the addition of durable CalDAV support and channel history connectors (PR #1190).

## 4. Community Hot Topics
*   **#1191: fix(sandbox): point gogcli module path at the openclaw org** ([Link](https://github.com/moltis-org/moltis/pull/1191))
    *   **Status:** Open
    *   **Context:** This is a critical infrastructure fix. The `moltis sandbox build` command was failing due to a stale module path for `gogcli`. The PR updates the reference to the new organization location (`openclaw`), ensuring that pre-built Docker images function correctly.
*   **#1190: Add durable CalDAV and channel history connectors** ([Link](https://github.com/moltis-org/moltis/pull/1190))
    *   **Status:** Open
    *   **Context:** This is a major feature addition. It introduces provider-neutral connector persistence, atomic snapshots, and full-text search capabilities, alongside new CalDAV datasets and message history connectors for major platforms.

## 5. Bugs & Stability
*   **Flaky Test: `fanout_is_bounded_and_times_out_a_hung_endpoint`** ([Issue #1193](https://github.com/moltis-org/moltis/issues/1193))
    *   **Severity:** Medium (Test Stability)
    *   **Details:** A regression has been identified in the gateway push tests. The test intermittently fails (2 out of 3 runs) under full-suite load on an idle macOS machine. The issue suggests a potential race condition in the timeout assertion.
    *   **Status:** No fix has been merged yet; the issue is currently open and awaiting a resolution.

## 6. Feature Requests & Roadmap Signals
*   **Durable CalDAV & Connector Enhancements:** The addition of durable connectors and full-text search capabilities (PR #1190) signals a roadmap focus on improving data persistence and searchability within the agent's knowledge base.
*   **Dependency Migration:** The flurry of fixes pointing dependencies to `openclaw` suggests a long-term strategy to consolidate tooling under a single organization, likely improving maintainability for contributors.

## 7. User Feedback Summary
*   **Pain Point:** Users relying on the `local-validate-full` workflow on macOS are experiencing immediate failures due to bash 3.2 compatibility issues with empty arrays (PR #1194).
*   **Pain Point:** Users attempting to install the `wacrawl` skill are blocked because the installation metadata points to a repository that has moved and renamed.

## 8. Backlog Watch
*   **No items identified.** There are no currently unanswered issues or PRs that require immediate maintainer intervention outside of the active discussions taking place in the 4 open PRs.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**Project Digest: QwenPaw (agentscope-ai/CoPaw)**
**Date:** 2026-08-14

### 1. Today's Overview
The project demonstrates robust development activity with 42 issues and 50 pull requests updated in the last 24 hours. A significant milestone was reached with the release of **v2.1.0**, introducing a major desktop OS shell overhaul. The community is actively engaging with memory management improvements, UI stability fixes, and security audits, indicating a healthy project trajectory focused on both feature expansion and stability.

### 2. Releases
*   **v2.1.0** (Stable)
    *   **What's Changed:** Major update to the desktop application experience.
    *   **New Features:** Introduction of **QwenPaw OS Shell**. This allows apps to be opened in movable, resizable windows with a taskbar, notifications, saved layouts, and a unified app catalog.
    *   **Latest Beta Fixes:** v2.1.0-beta.5 addressed specific memory guidance and model response handling issues.
    *   **Migration:** Users upgrading from 2.0.0 should verify `agent.json` fields (like `active_model`) are not overwritten, as reported in [Issue #6100](https://github.com/agentscope-ai/QwenPaw/issues/6100).

### 3. Project Progress
*   **PR Activity:** 31 Open, 19 Merged/Closed. Notable merged work includes fixing rate-limiter semaphore leaks and chat history pagination.
*   **Key Integrations:** Enhanced support for Matrix group rooms (issuing session isolation per sender) and improved ReMe runtime status dashboards.
*   **Optimizations:** Added file-level caching for system files and skills to reduce I/O overhead.

### 4. Community Hot Topics
*   **Task Continuation & Stopping:** Users report agents frequently stopping mid-task without visual feedback or prompts, requiring manual intervention. (Link: [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921))
*   **Security & Architecture:** A critical report regarding a lack of API authentication on port 8088 and arbitrary command execution via plugins. (Link: [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992))
*   **UI/UX Feedback:** Users request a toggle to stop the character count display in the chat footer, which causes visual fatigue. (Link: [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585))
*   **Plugin Safety:** Concerns over plugins silently creating cron jobs and injecting messages without approval. (Link: [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916))

### 5. Bugs & Stability
*   **High Severity (Security):** Port 8088 exposed on `0.0.0.0` without authentication; plugins can execute arbitrary commands and inject persistence mechanisms. (Link: [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992))
*   **High Severity (Crash/Interruption):** Agents enter infinite loops or stop responding during multi-step tasks. (Link: [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768))
*   **Medium Severity:** Windows Desktop TUI fails to start with "Connection closed" error. (Link: [#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007))
*   **Medium Severity:** Anthropic model security filters incorrectly flaging historical images as "sensitive" and blocking sessions. (Link: [#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008))
*   **Stability:** Random startup crashes on v2.0.1/2.1.0. (Link: [#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955))

### 6. Feature Requests & Roadmap Signals
*   **Desktop Customization:** Users request the ability to open chat interfaces without sidebars or headers for embedding, and filtering session lists by date/session ID. (Link: [#6970](https://github.com/agentscope-ai/QwenPaw/issues/6970))
*   **Server Deployment:** A request for a "proxy client" version for server-side deployment to control local desktop resources without a heavy local client. (Link: [#7002](https://github.com/agentscope-ai/QwenPaw/issues/7002))
*   **Memory Efficiency:** Proposal for a "ViBo" memory system to reduce token usage by 97.5%. (Link: [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003))
*   **Provider Support:** Request to add support for Alibaba Cloud Bailian token plans. (Link: [#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973))

### 7. User Feedback Summary
User feedback highlights a dichotomy between the excitement for the new OS shell features and frustration with stability. While users praise the "App Center" and window management, there is significant pain regarding "black box" agent behavior—agents stopping without explanation—and security concerns regarding how plugins interact with the system. The "character count" UI element is specifically noted as a distraction for power users.

### 8. Backlog Watch
*   **Long-standing UI Bug:** The character count in the chat footer does not have a disable option, despite being requested since July 30th (Issue #6585).
*   **Long-running Memory Issue:** The "Dream" process documentation claims automatic sync to `MEMORY.md`, but this functionality was never implemented (Issue #6853).
*   **Core Architecture:** A request to unify provider discovery, routing, and agent controls (PR #6302) has been open since July, suggesting a major refactoring effort is pending.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest**  
**Date:** 2026-08-14  

---

### 1. Today's Overview
ZeroClaw remains highly active with 50 issues and 50 PRs updated in the last 24 hours, indicating strong community engagement and ongoing development. The project shows a healthy mix of active RFC discussions, bug fixes, and feature proposals, with no new releases. Activity is balanced between open enhancements and closed fixes, suggesting a stable but evolving codebase.  

---

### 2. Releases
**None.** No new releases were published in the last 24 hours.  

---

### 3. Project Progress
- **Merged/Closed PRs:** 9 PRs were merged or closed today, primarily focused on bug fixes and minor improvements.  
- **Key Fixes:**  
  - Fixed Edge TTS temporary file cleanup on error paths (PR #9709).  
  - Resolved WeChat channel test compilation issues (PR #9951).  
  - Addressed filesystem dashboard asset containment (PR #9969).  
- **Feature Advances:**  
  - Added portable agent export functionality (PR #9986).  
  - Enhanced Anthropic OAuth profile support (PR #9420).  

---

### 4. Community Hot Topics
- **RFC: Goal mode v1 — bounded foreground Matrix work (#8303)**  
  - *Comments:* 20 | *Focus:* Establishing a durable control-plane for multi-turn agent objectives.  
  - [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)  
- **RFC: Per-execution confirmation tier for shell commands (#7155)**  
  - *Comments:* 18 | *Focus:* Security-hardening shell command execution with allow/ask/deny policies.  
  - [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)  
- **RFC: Runtime-owned conversation sessions and transport surface adapters (#9487)**  
  - *Comments:* 11 | *Focus:* Decoupling session management from channel-specific implementations.  
  - [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)  

---

### 5. Bugs & Stability
- **High-severity bugs:**  
  - **WhatsApp Web approval_timeout_secs ignored (#9366):** Config setting is accepted but not read by WhatsApp transports.  
  - **Verifiable intent credential chain verification (#9328):** Constraints evaluated without verifying the full credential chain.  
- **Medium-severity bugs:**  
  - **Headless SOP session persistence (#9929):** Session paths not persisted for headless SOP steps.  
  - **WeChat channel tests failing in CI (#9951):** Module gated behind `channel-wechat` feature not running in CI.  

---

### 6. Feature Requests & Roadmap Signals
- **OpenRouter prompt caching (#9631):** Request to send stable `session_id` for prompt-cache savings.  
- **LSP support for ZeroCode (#5907):** Opt-in language server protocol support to reduce hallucinations.  
- **Telegram model picker pagination (#9895):** UI improvement for model selection on mobile.  

---

### 7. User Feedback Summary
Users are actively pushing for **security hardening** (e.g., shell command policies, credential verification) and **architectural clarity** (e.g., session management, memory lifecycle). There is also strong demand for **UX improvements** (e.g., portable agent bundles, unified slash-command registries).  

---

### 8. Backlog Watch
- **RFC: Goal mode v1 (#8303):** High-priority, needs maintainer review.  
- **RFC: Memory lifecycle policy decoupling (#6850):** Affects multiple gateways and backends.  
- **Tracker: Session-persistence contract ownership (#9600):** Unresolved ownership conflict.  

--- 

*This digest is based on GitHub data from zeroclaw-labs/zeroclaw as of 2026-08-14.*

</details>

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*