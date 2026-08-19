# OpenClaw Ecosystem Digest 2026-08-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-19 00:37 UTC

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

**OpenClaw Project Digest: 2026-08-19**

### 1. Today's Overview
OpenClaw maintained a high volume of active development today with 500 issues and 500 PRs updated, indicating robust community engagement and intense maintenance activity. The project is currently in a stabilization phase, addressing critical regressions in session state, prompt caching, and gateway stability while simultaneously advancing infrastructure improvements like shared retry runtimes and security boundaries. Overall, the project demonstrates strong momentum with a slight shift toward fixing stability and integration issues over new feature development.

### 2. Releases
**No new releases were detected in the last 24 hours.**

### 3. Project Progress
*   **PRs Merged/Closed:** While specific merge counts for the last 24h are not detailed in the data, PR #126097 (fix(copilot): finalize settled BYOK tool turns reliably) was marked as **CLOSED** today, indicating a fix for the Copilot integration was successfully delivered.
*   **Key Focus Areas:**
    *   **Prompt Caching & Session Warmth:** PR #125528 (fix(claude-cli): apply thinking and keep live sessions warm) and PR #125972 (fix: Claude live sessions lose prompt cache on every captured turn) were actively discussed. These address a regression where the Claude CLI backend was failing to preserve prompt cache hits between turns, which is critical for reducing API costs and latency.
    *   **UI & Dashboard Stability:** PR #125823 (fix(ui): stop completed chats staying in progress) and PR #123535 (fix(ui): avoid session catalog refresh storms) were submitted to improve the Control UI experience, specifically targeting issues where sessions could appear stuck or browser navigation could cause performance storms.
    *   **Security & Auth:** PR #126088 (feat(secrets): add explicit protected and agent-readable access) and PR #116489 (feat(security): require acknowledgement for install policy warnings) are advanced features designed to clarify and enforce security boundaries around secrets management and plugin installation.

### 4. Community Hot Topics
*   **[Issue #77598] Track live dev agent behavior and trajectory** (23 comments)
    *   **Topic:** Observational monitoring of a development agent's autonomous behavior.
    *   **Analysis:** This is a meta-issue tracking the live performance and decision-making process of a specific agent (Pash's dev agent), serving as a live log for agent behavior research.
*   **[Issue #112423] Large SQLite transcript cleanup blocks the gateway event loop** (16 comments)
    *   **Topic:** Performance bottleneck in session state management.
    *   **Analysis:** A critical backend issue where archiving large transcripts is causing the entire gateway event loop to block, impacting the responsiveness of the system.
*   **[Issue #101290] CLI startup preflight can corrupt the live state DB** (15 comments)
    *   **Topic:** Data integrity and migration regression.
    *   **Analysis:** A high-severity data corruption bug affecting macOS users where the CLI's health-check commands are corrupting the live SQLite database while the gateway is running.

### 5. Bugs & Stability
*   **P0: SQLite Corruption & Migration Failures (Issues #101290, #112423, #112395)**
    *   **Severity:** Critical.
    *   **Details:** Multiple reports of database corruption during CLI startup and session cleanup, as well as migration failures after upgrading versions (e.g., 6.11 to 7.1), leading to empty or malformed state databases.
*   **P1: Gateway Event Loop Blocking (Issue #124788)**
    *   **Severity:** High.
    *   **Details:** A new bug in `beta.2` gateway causing the event loop to block for ~100s every ~10 minutes, disrupting WebSocket connections, HTTP readiness checks, and cron jobs.
*   **P1: Prompt Cache Loss (PRs #125972, #125528)**
    *   **Severity:** High (Performance/Cost).
    *   **Details:** The Claude CLI backend is losing prompt cache hits on every turn, forcing re-generation of context and increasing API costs and latency.

### 6. Feature Requests & Roadmap Signals
*   **Session Management & Seams:** **[Issue #79902]** proposes adding companion-friendly SQLite transcript seams to allow advanced consumers to build on the canonical runtime state without scraping opaque blobs. This suggests a move towards more structured, queryable data access patterns.
*   **Memory & Vector Store Optimization:** **[Issue #95724]** requests isolating subagent completion from parent context and eliminating duplicate vector stores for same-workspace agents. This indicates a focus on optimizing memory management for multi-agent setups.
*   **UI Improvements:** **[Issue #75947]** calls for a UI quality update based on UX scoring, highlighting that the current interface is perceived as dense and hard to navigate, a common pain point for long-term users.
*   **Android Surface:** **[Issue #46058]** explores a chat-first Android surface, suggesting potential interest in mobile-first integrations beyond the web/CLI interfaces.

### 7. User Feedback Summary
*   **Pain Point:** Users are experiencing significant friction with **state migration and data integrity**. Reports of corrupted databases after upgrades and empty migration states suggest that the project's backend architecture, while powerful, is prone to edge-case failures during updates.
*   **Pain Point:** **Performance and UX** are major concerns. Issues range from gateway event loop blocking (system stability) to UI navigation difficulties and missing favicons in chat links (user experience).
*   **Feedback:** The community is actively debugging and testing the system (evidenced by the high comment counts on monitoring and bug reports), indicating a strong, engaged user base willing to dig into complex logs to identify root causes.

### 8. Backlog Watch
*   **[Issue #111498]**: Main agent blocked by persistent workspace-state migration after Anthropic auth recovery. (12 comments, P1) - *Requires resolution to unblock agents.*
*   **[Issue #84662]**: Codex app-server stores per-turn OpenClaw runtime context in native user history, causing runaway response growth. (6 comments, P1) - *Affects long-running sessions with Codex integration.*
*   **[Issue #91223]**: Active memory injection breaks prompt cache hit rate (99.9% → 22%). (6 comments, P1) - *Affects cost efficiency and performance of memory features.*
*   **[PR #126065]**: Refactor to adopt shared plugin retry runtime. (0 comments, P1) - *A large-scale refactoring requiring maintainer review to consolidate retry logic across plugins.*

---

## Cross-Ecosystem Comparison

### Cross-Project Comparison Report: AI Agent & Assistant Ecosystem (2026-08-19)

**1. Ecosystem Overview**
The personal AI assistant and agent open-source ecosystem is in a state of robust expansion and maturation, characterized by a shift from experimental frameworks to production-grade platforms. Projects are actively resolving core stability issues—specifically regarding cross-platform compatibility (Windows/macOS), session state management, and database integrity—while aggressively expanding integration capabilities (MCP, WebUIs, multi-channel support). The landscape is bifurcating: some projects (e.g., OpenClaw, ZeroClaw) are stabilizing massive, monolithic gateways with complex backend infrastructures, while others (e.g., NanoBot, Hermes) are refining agent execution logic and desktop interfaces. A strong trend toward "unification" is evident, with communities demanding seamless synchronization between CLI, Web, and Runtime environments.

**2. Activity Comparison**

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Health Score (Inferred) | Focus Phase |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | High (500+) | High (500+) | None | **Stabilizing** (Fixing regressions) | Stabilization / Core Refactor |
| **ZeroClaw** | High (50) | High (50) | None | **Active** (Security & Architecture) | Active Dev / Unification |
| **Hermes Agent** | Medium (50) | Medium (50) | **v0.20.4** | **Stable** (Patch Release) | Feature Integration / OS Fixes |
| **NanoBot** | Medium (9) | High (26) | None | **Active** (Windows/Stability) | Active Dev / Windows Focus |
| **CoPaw (QwenPaw)**| High (46) | High (50) | None | **Beta** (Refining Execution) | Beta / UI Fixes |
| **NanoClaw** | Low (3) | High (38) | None | **Active** (Infrastructure) | Active Dev / Refactor |
| **LobsterAI** | Low (3) | High (16) | **v2026.8.18** | **Stable** (New Features) | Feature Expansion |
| **IronClaw** | Medium (High) | High (15) | **v1.3.0-rc.2**| **Stable** (Release Cycle) | Release / Refactor |
| **Moltis** | Low (2) | Medium (6) | **v20260818.08**| **Stable** (Maintenance) | Maintenance / Docs |

**3. OpenClaw's Position**
OpenClaw remains the **core reference implementation** in this ecosystem, serving as the "central nervous system" for many other projects (e.g., LobsterAI, NanoBot). Its primary advantage lies in its massive feature set and comprehensive gateway architecture, which allows for complex orchestration. However, it is currently the most **fragile** project in terms of backend stability, battling critical database corruption bugs and regressions in session caching. While peers like Hermes Agent and IronClaw are focused on releasing clean patches, OpenClaw is in a "painful stabilization" phase, where high activity is driven by maintenance rather than new feature discovery.

**4. Shared Technical Focus Areas**
*   **Windows Compatibility:** This is the dominant friction point across the ecosystem (OpenClaw, Hermes, NanoBot, ZeroClaw). Projects are aggressively fixing environment variable handling, process handoffs (Venv), console encoding (GBK), and resource limits (ulimits).
*   **Session & State Management:** Multiple projects (OpenClaw, Hermes, NanoClaw) are struggling with data integrity during migrations, session persistence, and preventing "state storms" or database corruption during updates.
*   **MCP (Model Context Protocol) Integration:** Security and reliability of MCP connections are a shared priority. Issues range from OAuth token rotation (CoPaw) to transport configuration errors and stream disconnections.
*   **WebUI & UX Standardization:** There is a collective demand for better interfaces. Projects are moving away from CLI-only or "developer-only" interfaces to include native desktop apps, Web UIs, and better accessibility (e.g., PicoClaw, LobsterAI).

**5. Differentiation Analysis**
*   **Architecture:**
    *   **OpenClaw / NanoClaw / ZeroClaw:** Focus on **Gateway/Runtime** layers. They act as the backend orchestrators, handling message passing, authentication, and database management.
    *   **Hermes Agent / NanoBot / CoPaw:** Focus on **Agent Execution**. They prioritize the "brain" logic—tool calling, memory management, and workflow orchestration.
    *   **LobsterAI / Moltis:** Focus on **Platform/UI**. They are consumer-facing applications that wrap the engine (OpenClaw/Hermes) in a desktop client with specific integrations (DeepSeek, Tesla).
*   **Target Users:**
    *   *OpenClaw / Hermes:* Developers and power users building custom agents.
    *   *LobsterAI / Moltis:* Enterprise users or power users needing a managed desktop experience.
    *   *PicoClaw / NanoBot:* Users seeking lightweight, channel-specific bots (IRC, WhatsApp).

**6. Community Momentum & Maturity**
*   **High Momentum (Active Iteration):** **ZeroClaw**, **CoPaw**, and **NanoClaw**. These projects are undergoing significant architectural refactoring (e.g., async databases, session drivers) and are pushing toward breaking changes or major version bumps.
*   **Stabilizing (Release Cycles):** **Hermes Agent**, **IronClaw**, and **LobsterAI**. They are in "patch and feature" cycles, releasing stable versions (v0.20.4, v1.3.0-rc.2) and focusing on polish rather than foundational changes.
*   **Stabilizing (Maintenance):** **Moltis**. Activity is steady but lower volume, focused on documentation and bug fixes.

**7. Trend Signals**
*   **From CLI to GUI:** The community is demanding "Graphical User Interfaces" as a survival requirement. Projects that remain CLI-only (e.g., PicoClaw) are facing user attrition, while those adding WebUIs (LobsterAI, Moltis) are seeing better engagement.
*   **Enterprise-Grade Safety:** There is a shift from "just make it work" to "prevent data loss and security leaks." Critical attention is being paid to sandboxing (IronClaw, ZeroClaw), resource limits (NanoBot), and credential management (ZeroClaw).
*   **Hybrid Agent Architectures:** The trend is moving toward **Multi-Agent Systems** (CoPaw, Hermes) where a single session contains multiple agents collaborating, rather than isolated single-agent workflows.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest**
**Date:** 2026-08-19
**Repository:** HKUDS/nanobot

### 1. Today's Overview
NanoBot maintained a high level of community engagement on 2026-08-18, with 26 Pull Requests and 9 Issues opened. The project is in a robust "active development" phase, characterized by intensive work on WebUI improvements, Windows compatibility fixes, and security hardening. A significant portion of the activity today focused on stabilizing the Windows development environment and resolving agent lifecycle management bugs.

### 2. Releases
**None.** No new versions were released in the last 24 hours.

### 3. Project Progress
*   **Windows Stability & TUI:** The development team made significant strides in stabilizing the Windows environment. Several PRs addressed the Windows-specific issue of VirtualEnv PID handoffs, ensuring the WebUI and gateway processes can correctly track child processes without crashing. Additionally, the TUI (Text User Interface) received refinements to keep the composer visible and focused, and to handle API credential refreshes deterministically.
*   **WebUI Enhancements:** The WebUI team continued to add features, including cross-session messaging, turn observability, and safe recovery mechanisms.
*   **Agent Lifecycle:** Work advanced on fixing background task handling in the `AgentLoop`, ensuring that completed tasks and empty session groups are properly cleaned up to prevent memory leaks.

### 4. Community Hot Topics
*   **Windows Compatibility Crisis:** Multiple threads are currently converging on fixing Windows-specific bugs. Users are experiencing crashes related to Venv handoffs and PowerShell `curl` aliases.
    *   *PR #5415:* Adopt Windows venv child process.
    *   *PR #5341:* Make weather workflow Windows-safe.
*   **Proxy Configuration:** There is a high demand for support of legacy `socks://` proxy URLs, which is currently blocking users from connecting to custom OpenAI-compatible providers.
    *   *PR #5435:* Support legacy socks:// proxy URLs (Fixes #5425).
*   **Agent Memory & Consolidation:** Users are actively debating and debugging the "Consolidator" logic, specifically regarding idle compaction and whether it should preserve provider states across concurrent turns.

### 5. Bugs & Stability
**Severity: Medium / High**
*   **Background Task Exceptions:** The `AgentLoop` is currently not retrieving exceptions from background tasks, causing silent failures.
    *   *Issue #5429:* AgentLoop does not retrieve exceptions from background tasks.
    *   *PR #5431:* Fix agent: report background task failures.
*   **Audio Sending Failure:** Users are unable to send audio messages via WhatsApp.
    *   *Issue #5149:* No audio sending on WhatsApp.
*   **System Post Noise:** Mattermost channel join/leave notifications are being processed as user messages, cluttering the chat.
    *   *PR #5434:* Fix mattermost: ignore system posts.
*   **Resource Limits (Security):** The shell subprocess creation lacks OS-level resource limits (ulimits/cgroups), posing a potential risk of fork bombs.
    *   *Issue #4797:* No resource limits on shell subprocesses.

### 6. Feature Requests & Roadmap Signals
*   **Budget Control:** A user proposed adding a "Hybrid Spend Firewall" to prevent power users from running infinite loops that drain LLM budgets.
*   **Agent Memory:** There is a strong interest in persistent memory integration to avoid re-sending context, with a proposal for a specific system (ViBo).
*   **Meta-Search:** A feature request for integrating MST (Meta-Search Tool) as a provider is open, aiming to provide richer search coverage via RRF (Reciprocal Rank Fusion).

### 7. User Feedback Summary
The community feedback indicates a project that is maturing rapidly but is currently navigating growing pains associated with Windows adoption and complex agent workflows. Users are highly satisfied with the framework's flexibility but are frustrated by stability issues on Windows and gaps in proxy configuration support. The feedback suggests a transition from basic functionality to enterprise-grade reliability (security limits, memory management).

### 8. Backlog Watch
*   **Issue #5149 (Audio on WhatsApp):** Created on 2026-07-28. While updated today, it has 6 comments and 0 reactions, suggesting it is a lingering nuisance rather than a critical blocker for the core agent loop.
*   **Issue #4797 (Resource Limits):** Created on 2026-07-06. This is a critical security concern that has gone unanswered for over a month, despite being labeled a Priority 1 bug.

*Links:*
- [Issues Overview](https://github.com/HKUDS/nanobot/issues)
- [PRs Overview](https://github.com/HKUDS/nanobot/pulls)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-08-19

## 1. Today's Overview
Hermes Agent demonstrates high community engagement and active maintenance, with 50 issues and 50 pull requests updated in the last 24 hours. The project released version v0.20.4 today, rolling up 74 merged PRs since the previous patch. While the release stabilizes core infrastructure for downstream consumers, the development team is actively addressing several critical performance and stability issues, particularly surrounding Windows compatibility, session state management, and OpenAI/Anthropic provider integration.

## 2. Releases
**v0.20.4 (v2026.8.18)**
*   **Release Date:** August 18, 2026
*   **Type:** Patch Release
*   **Summary:** This tag consolidates approximately 74 merged pull requests since v0.20.3 into a stable, tagged release. This facilitates downstream consumers (Docker images, hosted deployments, and fresh installs) to access a consistent set of improvements and fixes.
*   **Migration Notes:** No breaking changes noted in the release notes; standard patch upgrade path.

## 3. Project Progress
*   **PRs Merged/Closed:** 10 PRs were closed or merged today.
*   **Key Integrations:**
    *   **Nix/HM:** A significant PR adds a Home Manager module for user-level configuration, shared with the NixOS module, simplifying credential and environment management for Linux users.
    *   **MCP Catalog:** Added "Pin Seeker" to the MCP (Model Context Protocol) catalog, allowing users to search GolfNow tee times via natural language.
    *   **xAI Video:** Enabled native 1080p generation for xAI Grok Imagine, resolving a feature gap where high-resolution requests were silently clamped to 720p.
*   **Tools & UX:** Enhanced the `clarify` tool to allow asking multiple independent questions in a single call, improving efficiency.

## 4. Community Hot Topics
The most active discussions focus on platform-specific performance regressions and architectural identity management.

*   **[Issue #88275] Desktop CPU Throttling (macOS Intel):**
    *   *Status:* Open (9 comments)
    *   *Context:* Users report high CPU usage (40-70%) and thermal throttling on macOS Intel machines, even with GPU disabled. This is a critical performance blocker for desktop users.
*   **[Issue #66616] Skills Index Stale/Degraded:**
    *   *Status:* Open (54 comments)
    *   *Context:* A long-running issue where the skills documentation index fails to refresh correctly (stuck at 29.8h old). This affects the discoverability of agent capabilities.
*   **[Issue #88715] Profile Identity Latency:**
    *   *Status:* Open (3 comments)
    *   *Context:* An architectural concern regarding how profile identity is bound in a multiplexed environment, potentially causing state inconsistency across different layers (transport, session, storage).

## 5. Bugs & Stability
Several critical bugs affecting core functionality and cross-platform compatibility are currently open.

*   **High Priority - Windows Terminal Hang:** Users report that the Windows ACP adapter hangs when executing terminal tools, preventing file operations or local environment initialization.
    *   *Status:* Open (3 comments)
    *   *Fix PR:* [#69083](https://github.com/nousresearch/hermes-agent/pull/69083)
*   **High Priority - OpenAI/Anthropic Title Generation Failure:** Session auto-titling fails 100% of the time on Anthropic/Bedrock providers due to the `response_format` field being leaked into the Messages API, which is unsupported by those providers.
    *   *Status:* Open (4 comments)
    *   *Fix PR:* [#89589](https://github.com/nousresearch/hermes-agent/pull/89589) (Closed)
*   **Medium Priority - Credential Pool Staleness:** After a provider hits a rate limit (429), Hermes may fail to re-probe the provider for credit top-ups because the cached cooldown state prevents re-connection.
    *   *Status:* Open (1 comment)
*   **Medium Priority - Discord Slash Command Timeouts:** The safe sync diff treats Discord-managed `integration_types` as Hermes changes, causing unnecessary and timed-out command recreations.
    *   *Status:* Open (3 comments)

## 6. Feature Requests & Roadmap Signals
*   **Desktop Connection Picker:** Users request a permanent status bar button for quick switching between local, SSH, and backend connections, as the current button is invisible in pure local mode.
    *   *Link:* [Issue #88307](https://github.com/nousresearch/hermes-agent/issues/88307)
*   **Profile Alias Routing:** Users want to create a Desktop profile alias that points to a remote gateway profile, allowing them to manage remote agents from the local desktop interface seamlessly.
    *   *Link:* [Issue #89304](https://github.com/nousresearch/hermes-agent/issues/89304)

## 7. User Feedback Summary
*   **Performance Frustration:** macOS Intel users are experiencing thermal throttling and high CPU usage, indicating potential optimization needs in the Electron rendering process or background processes.
*   **Configuration Complexity:** Users utilizing custom providers (like Ollama) are experiencing issues where profile identity files (SOUL.md/AGENTS.md) are being ignored, complicating multi-user or multi-profile setups.
*   **Platform Support:** Windows users are reporting persistent issues with terminal execution and file fetching, suggesting a gap in cross-platform path handling and shell integration.

## 8. Backlog Watch
*   **[Issue #66616]** Skills Index Stale: A 54-comment issue regarding the skills documentation index. This has been open since July and requires maintenance of the CI/CD workflow to ensure the JSON index remains fresh.
*   **[Issue #18885] Memory Provider in Cron:** A request to allow memory provider tools (like Holographic/Honcho) to be used in cron jobs. This is a feature request to extend agent autonomy, currently pending decision.
*   **[Issue #84580] WhatsApp Inbound Hook:** A request for a specific inbound message hook with sender and message IDs. This is needed for secure CRM integrations but is marked as "needs-decision".

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-08-19
**Source:** GitHub Analysis (PicoClaw)

## 1. Today's Overview
PicoClaw demonstrated moderate activity with 10 total updates across issues and pull requests in the last 24 hours. The project is currently focused on stabilizing core functionality, specifically addressing configuration bugs and performance issues in the Web UI. While there were no new releases, the community is actively pushing fixes for stale bugs and refining provider integrations, indicating a healthy maintenance cycle.

## 2. Releases
**None.** No new releases were pushed to the repository in the last 24 hours.

## 3. Project Progress
There were **4** pull requests updated, with **2** merged or closed and **2** remaining open.
*   **Webhook Fixes:** A PR (#3329) was merged to address configuration warnings for `webhook_host` and `webhook_port`, fixing the issue where these settings were being ignored despite being defined in the config.
*   **Shell Command Fixes:** A critical bug fix was merged (#3314) that restored the ability for agents to execute shell commands (like `git push`) by correcting logic in `customAllowPatterns`.
*   **Debugging Improvements:** A PR (#3317) was closed to enhance logging capabilities, specifically adding support for displaying prompt cache tokens in the DeepSeek provider response debug output.

## 4. Community Hot Topics
The most active discussion is currently focused on lowering the barrier to entry for new users.
*   **Web UI Support (Issue #806):** This is the most discussed item, with 9 comments and 8 reactions. The author, Zepan, is actively working on a refactoring to implement a dedicated browser-based interface. The community sees this as a vital step to make the tool accessible to non-technical users.
*   **IRC Long Messages (Issue #3287):** The second most active topic involves improving message handling for IRC channels, specifically how to treat long messages (over 512 bytes) sent over IRCv3 as a single cohesive unit.
    *   [Web UI Support Issue](https://github.com/sipeed/picoclaw/issues/806)
    *   [IRC Long Messages Issue](https://github.com/sipeed/picoclaw/issues/3287)

## 5. Bugs & Stability
The bug report volume was high, with **6** issues updated, 3 of which remain open.
*   **High Severity - Resource Exhaustion:** Issue #3339 reports a persistent 429 error when using the Google Antigravity provider, despite valid OAuth scopes. This suggests a quota handling or gateway configuration issue affecting external API calls.
*   **Performance Regression:** Issue #3292 highlights a CPU usage spike when the chat input box is focused. This is a regression in the Web UI performance that is likely impacting user experience.
*   **Configuration Bug:** Issue #3328 was addressed by a PR (#3329) but remains open; the issue identified that webhook host/port settings were completely ignored by the codebase.
    *   [Antigravity 429 Error](https://github.com/sipeed/picoclaw/issues/3339)
    *   [CPU Usage Spike Issue](https://github.com/sipeed/picoclaw/issues/3292)

## 6. Feature Requests & Roadmap Signals
*   **Web UI Development:** The roadmap is clearly pivoting toward a more graphical user experience. The feature request for a dedicated Web UI is tagged with "Refactoring now," suggesting it is a current priority task for the maintainers.
*   **IRC Protocol Enhancement:** The request to handle long messages in IRC indicates a need for better protocol compliance. This suggests future updates may focus on stricter adherence to IRCv3 standards and better message fragmentation handling.
*   **Anthropic Protocol Support:** While a previous PR (#1158) added support for the Anthropic messages protocol, the continued discussions on provider compatibility suggest the team is actively working to standardize support across various proxy and third-party services.

## 7. User Feedback Summary
User feedback indicates a mix of high satisfaction with the AI agent capabilities and frustration with the "developer-only" nature of the current interface.
*   **Pain Points:** Users are experiencing significant friction with the Web UI, specifically regarding input box performance and inability to use shell commands (which was recently fixed via PR #3314).
*   **Use Cases:** The community is expanding beyond simple chat, utilizing the system for complex automation (routing chats via dispatch rules) and multi-channel management (Discord, Telegram, IRC).
*   **Configuration Struggles:** Users are finding the configuration model (specifically line settings and webhook configurations) confusing, as settings they input are not being applied, leading to lost trust in the config file.

## 8. Backlog Watch
*   **Stale High-Priority Issues:** Several issues are marked as "stale" but are still open. These include the long-running IRC long message support (#3287) and the CPU usage bug (#3292). While these have been acknowledged, they require more maintainer attention to reach resolution.
*   **Configuration Documentation:** There is a gap between documentation and implementation. The config struct defines settings like `webhook_host` and `webhook_port`, but users are unaware these settings do nothing, leading to wasted configuration time.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-08-19

## 1. Today's Overview
Activity on the NanoClaw repository was substantial today, with 38 Pull Requests updated and 3 Issues resolved, indicating a robust development cycle. The team is actively refactoring core infrastructure, specifically moving toward a centralized async database architecture and session runtime abstractions. Despite the high volume of work, the project remains stable with no new releases, suggesting a focus on internal consolidation and quality assurance before the next major version bump.

## 2. Releases
**No new releases detected.**

## 3. Project Progress
*   **Core Infrastructure Refactoring:** The core team is heavily focused on architectural improvements, most notably the introduction of a `SessionDriver` seam. This allows the host's session lifecycle (spawn, adoption, supervision) to be routed through a driver interface, with Docker currently serving as the built-in realization. This change is purely additive at this stage, allowing for green test suites (128 files/1672 tests) without disrupting existing call sites.
*   **Database Migration:** A significant effort is underway to adopt an async central database. Multiple PRs are working to make the database portable, add backend composition, and introduce async central database seams. This includes fixing concurrency races and updating tests to run through the new drivers.
*   **Feature Integration:** The project is expanding its integration capabilities with the addition of a Webex Poll REST adapter and a You.com MCP tool, adding to the existing channel ecosystem.

## 4. Community Hot Topics
*   **#3306 [OPEN] drivers: a session-runtime driver seam, with Docker as the built-in realization**
    *   **Link:** [nanocoai/nanoclaw PR #3306](https://github.com/qwibitai/nanoclaw/pull/3306)
    *   **Analysis:** This is a foundational architectural change. By creating a seam between "what a session is" and "how it runs," the project is likely paving the way for future container runtime support beyond Docker (e.g., Podman, VMs, or sandboxed execution environments).
*   **#3334 [OPEN] [BREAKING] refactor(db): adopt async central database safely**
    *   **Link:** [nanocoai/nanoclaw PR #3334](https://github.com/qwibitai/nanoclaw/pull/3334)
    *   **Analysis:** This PR addresses a critical stability concern. Moving to an async database is essential for handling high concurrency and preventing race conditions, which aligns with the "safe" requirement mentioned in the title.
*   **#3343 [OPEN] feat(channels): add webex-poll REST polling adapter**
    *   **Link:** [nanocoai/nanoclaw PR #3343](https://github.com/qwibitai/nanoclaw/pull/3343)
    *   **Analysis:** This represents the user-facing benefit of the internal work, providing a new channel adapter for Cisco Webex that operates via polling rather than webhooks, likely improving reliability for enterprise users.

## 5. Bugs & Stability
*   **Issue #3338 [OPEN] Codex WebSocket idle retry is hidden until NanoClaw’s 10-minute turn timeout**
    *   **Severity:** High (User Experience)
    *   **Summary:** When the Codex Responses WebSocket stalls, NanoClaw waits silently for 10 minutes (its own timeout) instead of surfacing the internal 5-minute retry failure from the Codex CLI.
    *   **Status:** **Unresolved.** This indicates a gap in error visibility where the agent appears frozen to the user, hiding the underlying connection recovery attempts.

## 6. Feature Requests & Roadmap Signals
*   **Breaking Changes:** The `refactor(db)` PRs and the Session Driver changes suggest a **version 4.30+** is imminent. Users should prepare for potential breaking changes in database interactions and session lifecycle management.
*   **Enterprise Reliability:** The focus on async database operations and the Webex adapter indicates a roadmap towards **higher reliability and enterprise-grade support**, specifically targeting environments with strict connectivity requirements.

## 7. User Feedback Summary
*   **Silent Failures:** Users are frustrated by the "silent no-op" behavior in `/update-skills` and the WebSocket timeout issue. The feedback highlights a need for better visibility into internal agent state and retry mechanisms.
*   **Installation Friction:** Recent issues regarding `/update-nanoclaw` failing to protect the database and configuration files suggest that while the codebase is evolving, update mechanisms need to be hardened to prevent partial state corruption.

## 8. Backlog Watch
*   **Issue #3194 [CLOSED] `/update-nanoclaw` can stamp success without a recoverable cutover**
    *   **Analysis:** This issue was closed recently. It highlighted a dangerous scenario where the update process could succeed at the Git level but leave the SQLite database or configuration in an inconsistent state (gitignored). The resolution of this issue is crucial for user trust, as it prevents data loss during updates.
*   **Issue #2868 [CLOSED] `/update-skills` is a silent no-op**
    *   **Analysis:** Another closed issue regarding the update mechanism. This confirmed that running update commands on already-installed channels does not refresh dependencies or code, forcing users to re-run installation commands unnecessarily. This fix is essential for a smooth maintenance workflow.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-08-19  
**Project:** IronClaw (nearai/ironclaw)

---

## 1. Today's Overview
Activity remains robust for the IronClaw project, driven by a pre-release cycle for v1.3.0 and significant architectural work for v1.4.0. The team addressed critical boot-looping bugs in the v1.3.0 release candidate and continued aggressive refactoring to clean up test modules and centralize capability processing. A substantial volume of documentation and UX improvements were merged, focusing on the WebUI and channel integrations. Overall project health is stable, with a clear trajectory toward the v1.3.0 release candidate 2.

## 2. Releases
**Version:** `ironclaw-v1.3.0-rc.2` (Released 2026-08-18)
*   **Fixed in 1.3.0-rc.2:**
    *   **Critical Boot Loop Fix:** Upgrades from version 1.2 now correctly accept and preserve the `activation_state` field in extension installations, resolving a crash-looping issue during startup that left workers dead.
    *   **Runtime SSH:** The canonical Reborn runtime image now supports opt-in, public-key-only worker SSH on port 2222 while running IronClaw.
*   **Migration Notes:** Users upgrading from v1.2.x should update to rc.2 immediately to avoid startup failures.

## 3. Project Progress
*   **Merged PRs:** 15 PRs were closed today (merged or completed).
*   **Key Progress:**
    *   **Refactoring:** Completed massive test-module extractions, moving 317 tests and zero production lines out of the main codebase.
    *   **Capability Normalization:** Centralized capability outcome processing to handle fresh, approval, and auth resumes uniformly.
    *   **WebUI Improvements:** Merged fixes for thread deletion alerts (replacing blocking `window.alert` with toasts) and OAuth sign-in placement.
    *   **Documentation:** Updated Slack channel scopes to ensure proper setup drift is corrected.

## 4. Community Hot Topics
*   **Slack UX & Security (Issue #7681):** Users report that unlinked-user connection messages in Slack are public rather than private, requiring a manual round trip that degrades UX. A fix has been submitted in PR #7682.
    *   *Link:* [Issue #7681](https://github.com/nearai/ironclaw/issues/7681) | [PR #7682](https://github.com/nearai/ironclaw/pull/7682)
*   **v1.3.0 RC Crashes (Issue #7720):** Users are reporting that v1.3.0-rc.1 fails to boot on upgrades from 1.2.x due to a missing `activation_state` field. This was immediately addressed in the release of rc.2.
    *   *Link:* [Issue #7720](https://github.com/nearai/ironclaw/issues/7720)
*   **BudgetLedger Accounting (Issue #7673):** A specific bug in the BudgetLedger chokepoint regarding "truncated-launch reconciliation" and charge durability is being actively discussed.
    *   *Link:* [Issue #7673](https://github.com/nearai/ironclaw/issues/7673)

## 5. Bugs & Stability
*   **High Severity:** **v1.3.0-rc.1 Boot Loop.** Upgraded deployments crash immediately due to database schema incompatibility with `activation_state`. **Status:** Fixed in rc.2.
*   **Medium Severity:** **libSQL Resource Starvation.** During bench load, a single shared write connection causes cascading authority invalidation and journal stalls.
    *   *Link:* [Issue #7714](https://github.com/nearai/ironclaw/issues/7714)
*   **Low Severity:** **Missing Manifest URL Config.** The `IRONHUB_MANIFEST_URL` is configurable in code but hardcoded at runtime for security reasons, preventing self-hosted catalog usage.
    *   *Link:* [Issue #7726](https://github.com/nearai/ironclaw/issues/7726)
*   **Stability Note:** The daily failure taxonomy (Issue #7736) highlights that weak models (e.g., Qwen3.8-27B) are the primary cause of enterprise test suite failures.

## 6. Feature Requests & Roadmap Signals
*   **v1.4.0 Epic: Design System.** There is a push to formalize the `DESIGN.md` governance and implement a comprehensive AI-first Design System (Storybook, theming) to unify the WebUI.
    *   *Link:* [Issue #7733](https://github.com/nearai/ironclaw/issues/7733)
*   **v1.4.0 Epic: Reborn Durable State.** Work is ongoing to make Reborn storage profile-agnostic and migrate legacy profile roots to prevent data loss during profile changes.
    *   *Link:* [Issue #7467](https://github.com/nearai/ironclaw/issues/7467)
*   **v1.4.0 Epic: OMP Tool Surface.** The team is replacing first-party coding tools with a pinned `oh-my-pi` tool surface to standardize the coding environment.
    *   *Link:* [Issue #7392](https://github.com/nearai/ironclaw/issues/7392)

## 7. User Feedback Summary
*   **Memory Recall:** Users are experiencing inconsistent recall of context established in previous conversations, which is a known structural issue being tracked for v1.3.0/v1.4.0.
*   **Automation Reliability:** Users report that automation runs are "hit-or-miss," particularly on smaller models (DeepSeek V4 Flash), often executing as plain interactive chat turns rather than autonomous runs.
    *   *Link:* [Issue #6879](https://github.com/nearai/ironclaw/issues/6879)
*   **Tool Call Limits:** Agents are failing to complete tasks after calling too many tools, often getting stuck in fetch-retry loops rather than paginating results effectively.
    *   *Link:* [Issue #7447](https://github.com/nearai/ironclaw/issues/7447)

## 8. Backlog Watch
*   **Voice-to-Text Integration (PR #7724):** A significant feature request to add microphone input via NEAR AI Whisper has been opened. This represents a major UX shift for the WebUI composer.
    *   *Link:* [PR #7724](https://github.com/nearai/ironclaw/pull/7724)
*   **Design System Proposal (PR #7257):** The foundational documentation for the WebUI's new design system is open and awaiting final integration, which will drive future UI consistency.
    *   *Link:* [PR #7257](https://github.com/nearai/ironclaw/pull/7257)
*   **Sandboxing Solution:** An epic request for "Sandboxing Solution with CLIs" has been opened, indicating a future direction for secure execution environments.
    *   *Link:* [Issue #7732](https://github.com/nearai/ironclaw/issues/7732)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-08-19  
**Source:** netease-youdao/LobsterAI  
**Analyst:** AI Assistant

---

### 1. Today's Overview
LobsterAI experienced a highly productive development cycle yesterday, marked by a significant version release and a surge in active development. The project merged 16 pull requests and closed 9 issues, indicating a strong focus on stabilizing the platform and integrating new capabilities. The community is actively engaging with core functionality—ranging from engine integrations and UI refinements to critical bug fixes—demonstrating robust project health and momentum.

### 2. Releases
**Version 2026.8.18** was released today (PR #2510 merged).
*   **Key Changes:**
    *   **DeepSeek Harness (DSH) Integration:** Added an opt-in experimental integration of the DeepSeek engine, alongside updates to the DSH process launcher and version bumps to RC.7.
    *   **Performance & Stability:** Improved model loading logic and implemented backoff retries for server model fetches to handle transient failures.
    *   **Scheduled Tasks:** Enhanced the cron run history page to prevent pagination issues when fetching large data sets.
    *   **UI/UX:** Refined the sidebar task search, added multi-agent task activity filters, and improved the artifact auto-preview toggle.

### 3. Project Progress
*   **Total PRs Merged/Closed:** 16 (Closed 16, Open 3)
*   **Feature Focus:** The team focused heavily on **Platform Stability** and **UI Polish**.
    *   **Engine & Core:** Updated the DeepSeek engine integration and fixed OpenClaw gateway crashes caused by illegal configuration fields.
    *   **Frontend:** Significant work on the renderer, including UI alignment for settings pages, model selector enhancements, and global search improvements.
    *   **Data Integrity:** Fixed a SQLite issue where foreign key cascading deletes were disabled, preventing orphaned data during session or memory deletion.

### 4. Community Hot Topics
*   **Feature Request: Hermes-Agent Integration** (#1614)
    *   *Status:* Open (Stale)
    *   *Link:* [netease-youdao/LobsterAI Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614)
    *   *Analysis:* Users are requesting the inclusion of the `hermes-agent` as an optional AI engine, similar to the existing OpenClaw integration. This suggests the community is looking for more diverse agent backends to support complex workflows.
*   **Feature Request: System Notifications for Scheduled Tasks** (#1620)
    *   *Status:* Open (Stale)
    *   *Link:* [netease-youdao/LobsterAI Issue #1620](https://github.com/netease-youdao/LobsterAI/issues/1620)
    *   *Analysis:* Users want native OS notifications (macOS/Windows) when scheduled tasks complete. A corresponding PR (#1621) was merged recently, indicating this feature is moving from "idea" to "implementation."
*   **UX Issue: Global Search Scope** (#1634)
    *   *Status:* Open
    *   *Link:* [netease-youdao/LobsterAI PR #1634](https://github.com/netease-youdao/LobsterAI/pull/1634)
    *   *Analysis:* Users reported that the search feature was implicitly restricted to the current Agent rather than being a true global search. A fix was merged to address this UX inconsistency.

### 5. Bugs & Stability
*   **Severity: HIGH (Blocker)** - **OpenClaw Gateway Crash** (#1627)
    *   *Description:* Users reported that after upgrading OpenClaw, the gateway fails to start, preventing the app from functioning.
    *   *Status:* **FIXED** via PR #1626.
    *   *Root Cause:* The new OpenClaw version removed the `skipMissedJobs` configuration field, causing a strict validation error and immediate exit.
*   **Severity: MEDIUM** - **Crash on First Launch** (#1587)
    *   *Description:* Users experienced application crashes immediately after updating to the latest version.
    *   *Status:* **FIXED** via PR #2508 (Retry logic for server model load).
*   **Severity: MEDIUM** - **Session Export Quality** (#1615)
    *   *Description:* Exports were missing timestamps, metadata, and had truncated content (2000 char limit).
    *   *Status:* **FIXED** via PR #1615.

### 6. Feature Requests & Roadmap Signals
*   **Scheduled Task Notifications:** The implementation of OS-native notifications for scheduled tasks is a clear roadmap signal for the next iteration, focusing on better user awareness of background jobs.
*   **UI/UX Standardization:** The frequent merges regarding model selectors, artifact previews, and layout alignment suggest a push to standardize the visual experience across different operating systems (macOS/Windows).
*   **Engine Expansion:** The request for `hermes-agent` and the successful integration of `DeepSeek` (DSH) indicate a roadmap focused on supporting multiple, specialized AI backends for different use cases.

### 7. User Feedback Summary
*   **Positive:** Users appreciate the rapid fixes for critical crashes and the improvement in the stability of the OpenClaw gateway. The addition of the "Recently Used" skills tab and avatar settings has been well-received for improving usability.
*   **Negative/Pain Points:**
    *   **Localization:** Users reported that switching the app to English does not fully translate all UI elements (e.g., Terms, Tool Styles).
    *   **Data Loss/Management:** There are concerns about skill deletion not syncing properly in the UI and orphaned database records due to foreign key issues.
    *   **Complex Task Failure:** The app crashes when handling "slightly complex tasks," suggesting a need for better memory management or error handling in high-load scenarios.

### 8. Backlog Watch
*   **Issue #1622 (Custom Model Addition Failure):** A user reports that after adding a custom model, tests fail. This requires investigation into the model validation or configuration schema.
*   **Issue #1632 (Skill Installation after Local Model Switch):** Users cannot install skills after switching to a local model. This implies a potential dependency or state management issue between the engine selection and the skill registry.
*   **Issue #1586 (Language Switching):** Partial language localization issues persist, indicating that the internationalization (i18n) pipeline may be incomplete.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

### Moltis Project Digest (2026-08-19)

**1. Today's Overview**
The Moltis project maintained steady, healthy activity on August 19, 2026, with 2 new issues and 6 pull requests processed in the last 24 hours. The release cadence remains active, with two new minor versions deployed, bringing the platform's stability and feature set forward. Overall, the project shows a strong commitment to bug resolution and feature expansion, balancing maintenance with innovation.

**2. Releases**
Two new versions were deployed recently, focused on stability and documentation improvements:
*   **v20260818.08**: General release.
*   **v20260818.06**: General release.

**3. Project Progress**
Six pull requests were closed today, indicating significant cleanup and feature implementation. Key advancements include:
*   **Gateway Stability**: A fix for the Heartbeat settings UI was merged, resolving a serialization issue where partial updates would overwrite the entire configuration.
*   **Documentation**: A fix restored the broken GitHub star history chart in the README by switching to a working data source.
*   **Sandbox Engineering**: A long-standing issue regarding Podman support was addressed, adding explicit escape hatches for sandbox management.
*   **Storage & Settings**: A "Files library" and Settings browser were added, enabling persistent file management and a Finder-style interface for system settings.

**4. Community Hot Topics**
*   **Podman Compatibility (Issue #1095)**: A user reported that Podman is not working via Moltis. This issue has been closed, suggesting the underlying problem was addressed in recent updates regarding sandbox escape hatches. [Link: Issue #1095](https://github.com/moltis-org/moltis/issues/1095)
*   **Heartbeat UI Reset (Issue #1187)**: A bug regarding the Heartbeat settings UI silently resetting fields was reported and subsequently fixed. [Link: Issue #1187](https://github.com/moltis-org/moltis/issues/1187)
*   **Tesla Fleet Integration (PR #1210)**: An open pull request proposes adding a read-only connector for Tesla vehicle data sync. This indicates active exploration of new data source integrations. [Link: PR #1210](https://github.com/moltis-org/moltis/pull/1210)

**5. Bugs & Stability**
*   **Heartbeat Configuration Reset (Severity: Medium)**: The settings UI was incorrectly deserializing partial updates, resetting unspecified fields to their defaults. This has been fixed in PR #1209. [Link: PR #1209](https://github.com/moltis-org/moltis/pull/1209)
*   **Podman Sandbox Failures (Severity: Medium)**: Users reported issues with Podman execution. This was resolved by implementing explicit escape hatches and improving diagnostics. [Link: PR #1106](https://github.com/moltis-org/moltis/pull/1106)

**6. Feature Requests & Roadmap Signals**
*   **Files Library & Settings Browser**: The addition of a managed Files library suggests a shift towards more robust local data persistence and management tools for users.
*   **Tesla Fleet API**: The open PR for Tesla vehicle data sync highlights a roadmap interest in IoT and automotive data integrations, specifically focusing on read-only, non-intrusive monitoring.

**7. User Feedback Summary**
User feedback today was primarily focused on stability and configuration management. The reported pain points centered on configuration fields resetting unexpectedly and sandbox environments (specifically Podman) failing to initialize. The rapid closure of these issues suggests a responsive development team that prioritizes user experience and system reliability.

**8. Backlog Watch**
*   **Star History Chart**: While fixed in the latest PRs, the previous dependency on the GitHub stargazer API highlights a recurring architectural challenge regarding API reliability and token management for public facing documentation.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# QwenPaw (CoPaw) Project Digest
**Date:** 2026-08-19
**Project:** agentscope-ai/CoPaw
**Activity Level:** High

### 1. Today's Overview
QwenPaw is experiencing high activity with 46 open issues and 50 PRs updated in the last 24 hours, indicating active development and a vibrant community. The project is currently in a robust beta phase (2.1.x), focusing on stabilizing the agent execution engine, improving MCP (Model Context Protocol) integration, and refining the user interface for multi-session management. While new releases are absent, the rapid velocity of PR merges suggests a push toward the next major version.

### 2. Releases
**None**
No new releases were published in the last 24 hours. The project appears to be stabilizing around version 2.1.0 based on recent bug fixes and user reports.

### 3. Project Progress
*   **Merged/Closed PRs:** 19 PRs were updated/closed (merged/closed) in the last 24 hours.
*   **Key Progress:** Significant progress was made on **MCP Security and Reliability**. Multiple PRs addressed OAuth2 token rotation (fixing long-standing authentication issues for remote MCP servers like XMind) and shell evasion checks. Additionally, PR #6990 introduced a file cache for system files to improve performance, and PR #6990 restored workspace-over-builtin precedence for skills.
*   **New Features:** PR #6800 introduces an "Intelligent Email Management Assistant," expanding the agent's capability to manage mailboxes automatically.

### 4. Community Hot Topics
The community is most active around **Agent Execution Stability** and **MCP Transport Configuration**.
*   **[Feature] Channel Retry Mechanism** (#6684): Users report that custom Matrix channels frequently fail because QwenPaw does not retry or health-check connections after server restarts. (Link: [agentscope-ai/QwenPaw Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684))
*   **[Bug] Multi-step Task Interruption** (#6921): A critical UX issue where agents pause after planning steps without user intervention, requiring manual "continue" commands. (Link: [agentscope-ai/QwenPaw Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921))
*   **[Bug] Console Freeze/Glitch** (#7102, #7074): Users are experiencing prolonged freezes and random crashes, particularly with GLM models and in the Console UI. (Link: [agentscope-ai/QwenPaw Issue #7102](https://github.com/agentscope-ai/QwenPaw/issues/7102))
*   **[Bug] MCP Streamable HTTP Disconnect** (#5900): The MCP driver ignores `streamable_http` configuration and fails to auto-reconnect when sessions terminate, forcing manual resets. (Link: [agentscope-ai/QwenPaw Issue #5900](https://github.com/agentscope-ai/QwenPaw/issues/5900))

### 5. Bugs & Stability
The following stability issues were reported today, ranked by severity:
1.  **Console UI Freezes/Crashes (#7102, #7074):** Users report desktop application freezes lasting over 10 minutes and random crashes requiring page refreshes.
2.  **Agent Execution Crashes (#7063):** A critical bug where the agent crashes immediately upon executing a tool call due to an `async for` loop error (`TypeError`).
3.  **MCP Transport Hardcoding (#6470):** The MCP driver forces `sse_client` regardless of YAML configuration, breaking `streamable_http` servers.
4.  **Session Management Glitches (#7039, #7065):** Spontaneous new sessions are created, and chat history becomes unreadable after several rounds of discussion.
5.  **Media Loading Failures (#7110):** Presence of a single un-downloadable image link in the context renders the entire conversation unusable.

### 6. Feature Requests & Roadmap Signals
*   **Agent Collaboration in Single Window (#6925):** Users want agents to collaborate within one session instead of creating multiple sessions.
*   **Reasoning Effort Configuration (#7062):** Users request the ability to set `reasoning_effort` (thinking depth) per-agent or per-session, rather than globally.
*   **Per-Message Deletion (#4001):** A long-standing request to allow deletion of individual messages in the chat history (like WeChat).
*   **Skill Pool Search (#7090):** Users request a search/filter feature for the skills configuration page as the list grows large.
*   **Disable File Preview (#7039):** Users want an option to disable automatic file preview to allow direct downloads.

### 7. User Feedback Summary
*   **Praise:** Users are generally satisfied with the formula rendering and UI improvements in version 2.1.0.
*   **Pain Points:** The primary friction points are **reliability** (freezes, crashes) and **context management** (unwanted new sessions, broken history). Users feel the "Agent" part of QwenPaw is becoming capable, but the "Paw" (desktop app/UI) is still brittle.
*   **Specific Complaint:** "It's great, but I have to restart the app every hour because it freezes."

### 8. Backlog Watch
*   **[Bug] Tool Call Crash (#7063):** While PRs are merging for similar issues, this specific crash is still open and critical for production stability.
*   **[Bug] MCP Streamable HTTP Reconnection (#5900):** An older issue (July) that remains unresolved, affecting users relying on HTTP-based MCP servers.
*   **[Feature] Manual Message Deletion (#4001):** A high-volume feature request from May that remains in the backlog, indicating a high demand for better chat hygiene.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-08-19
**Repository:** [ZeroClaw (zeroclaw-labs/zeroclaw)](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. Today's Overview
ZeroClaw is experiencing high activity with 50 issues and 50 PRs updated in the last 24 hours. The project is actively addressing core stability issues, particularly regarding Windows compatibility and agent runtime safety. A significant portion of the work is focused on security hardening, credential management, and architectural unification across web, CLI, and runtime interfaces. The project maintains a healthy mix of open feature requests and urgent bug fixes.

## 2. Releases
**None.** No new releases were detected in the last 24 hours.

## 3. Project Progress
*   **Closed Issues:** 19 issues were closed, including security advisories and feature requests like GitHub PR title enforcement.
*   **Merged PRs:** 3 PRs were merged/closed.
    *   **Fix Memory Autosave (#10009):** A critical fix was merged to correct conversation autosave suppression logic on turn origin, preventing data loss.
    *   **Fix Windows Self-Update (#7853):** A previous fix for Windows self-update was closed, following up on test coverage requests.
*   **Active PRs:** The repository currently has 47 open PRs, with several large-scale refactorings and security hardening efforts in progress (e.g., `fix(runtime): avoid nesting Docker sandbox`, `feat(secrets): extract KeySource trait`).

## 4. Community Hot Topics
The community is deeply engaged in architectural unification and security.

*   **[RFC] Goal mode v1 — bounded foreground Matrix work** ([Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303))
    *   **Status:** Accepted | **Comments:** 22
    *   **Analysis:** This is the most active discussion, proposing a durable mechanism for agents to pursue objectives across multiple turns. It involves complex integration of restart handoffs and asynchronous work.
*   **[Bug] 74 test failures on Windows** ([Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462))
    *   **Status:** Accepted | **Comments:** 17
    *   **Analysis:** A critical stability blocker for Windows users involving test commands and console encoding.
*   **[Feature] Unify slash-command registries** ([Issue #7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929))
    *   **Status:** Accepted | **Comments:** 8
    *   **Analysis:** A major UX improvement to ensure slash commands declared in the Web UI, ZeroCode, and Runtime are synchronized, preventing drift.
*   **[RFC] Session-scoped persistent prompt attachments** ([Issue #9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998))
    *   **Status:** Open | **Comments:** 4
    *   **Analysis:** Addresses the fragility of agent objectives when history is trimmed or sessions restart.

## 5. Bugs & Stability
The project is prioritizing stability, particularly around Windows and memory management.

*   **Severity S1 (Workflow Blocked):**
    *   **#8563:** [Bug] SOPs not available through web dashboard. (Status: Closed)
    *   **#7462:** [Bug] 74 test failures on Windows. (Status: Accepted)
*   **Severity S2 (Degraded Behavior):**
    *   **#8410:** Channel tasks sending visible responses when "no reply" is intended. (Status: Accepted)
    *   **#8642:** MCP/tool-schema cloning causing unbounded RSS growth. (Status: Accepted)
*   **Security / Dependency:**
    *   **#8519:** Reconcile `cargo-audit` ignores and remediate `wasmtime-wasi` CVEs. (Status: Accepted)
    *   **#10097:** Advisory scan failed (Security audit issue from yesterday). (Status: Closed)

## 6. Feature Requests & Roadmap Signals
*   **Slash Command Unification (#7929):** High priority feature to synchronize commands across UI surfaces.
*   **Session TTL (#8134):** Feature to automatically truncate stale channel sessions to reduce token costs.
*   **Windows Runtime Coverage (#7910):** Adding test coverage for self-update paths on Windows to prevent regressions.
*   **Model-wise Reasoning Config (#5843):** Moving reasoning settings from global runtime config to per-provider configuration.

## 7. User Feedback Summary
Users are reporting friction points in cross-platform usage (Windows) and session management.
*   **Windows Users:** Specifically cited issues with console encoding (GBK 936) and broken test suites.
*   **Integration Users:** Requesting robust "no-reply" handling for channel tasks to avoid notification spam when no action is needed.
*   **Security/Privacy:** Strong demand for storing API keys out of URLs and avoiding credential leakage in logs.

## 8. Backlog Watch
Several high-priority items are pending maintainer review or action:

*   **[PR #10003]** `fix(providers): account Reliable rejected attempts exactly`: Needs review to ensure provider retry logic handles semantic rejections correctly.
*   **[PR #9808]** `chore(deps): bump rust-all group`: Large dependency update (46 packages) needs review to ensure no regressions.
*   **[PR #9013]** `refactor(config)!: move TodoWrite display config`: Large refactoring moving display logic from daemon to client.
*   **[Issue #8642]** `MCP/tool-schema cloning drives unbounded RSS growth`: A memory leak path that requires immediate attention to prevent OOM crashes.

</details>

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*