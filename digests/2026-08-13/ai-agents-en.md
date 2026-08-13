# OpenClaw Ecosystem Digest 2026-08-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-13 01:04 UTC

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

# OpenClaw Project Digest: 2026-08-13

### 1. Today's Overview
The OpenClaw project maintains high activity with 500 issues and 500 pull requests updated in the last 24 hours, indicating a vibrant development environment. While no new releases occurred today, the community is actively addressing complex stability issues and architectural refinements. The project appears to be in a stabilization phase, with a heavy focus on fixing memory management, subagent orchestration, and authentication flows that have accumulated over recent months. The volume of feedback suggests active beta testing and user engagement with the latest versions.

### 2. Releases
**None.** No new releases were published on 2026-08-13. The latest activity focuses on patching regressions and refining features in the current codebase.

### 3. Project Progress
**Merged PRs:** No PRs were explicitly marked as closed/merged in the provided list, though several are flagged as "CLOSED" (e.g., #42820, #44502, #45501, #45758). **Open PRs:** 30 PRs are currently open and awaiting review or merging.
*   **Key Fixes:** Several PRs address critical stability issues:
    *   **Gateway Stability:** PR #110709 separates channel lifecycle from released request admission, preventing channel accounts from stopping work after a short-lived request.
    *   **Subagent Routing:** PR #101248 introduces `completionTarget` for parent-only routing, addressing complex subagent delivery logic.
    *   **UI/UX:** PR #110842 fixes UTF-8 streaming decoding in the terminal, resolving display issues for CJK and emoji characters.
    *   **Auth & Config:** PR #110458 fixes a schema mismatch where eight model compatibility fields were rejected by the TypeScript runtime. PR #110649 prevents ACP client hangs on unresponsive servers.

### 4. Community Hot Topics
The most discussed topics center on **subagent orchestration reliability** and **memory management chaos**.

*   **#121058 - Silent reply failures still recurring** (91 comments)
    *   *Link:* [openclaw/openclaw Issue #121058](https://github.com/openclaw/openclaw/issues/121058)
    *   *Analysis:* A persistent and severe bug where subagent completion payloads are lost during high-load or timeout scenarios. Despite previous fixes (#116277), this critical failure mode remains active, impacting core orchestration reliability.
*   **#7707 - Memory Trust Tagging by Source** (45 comments)
    *   *Link:* [openclaw/openclaw Issue #7707](https://github.com/openclaw/openclaw/issues/7707)
    *   *Analysis:* A feature request to implement a security model where memory entries are tagged by trust level (e.g., user vs. web scrape) to prevent memory poisoning attacks. This is a major architectural concern for users handling untrusted data.
*   **#44925 - Subagent completion silently lost** (26 comments)
    *   *Link:* [openclaw/openclaw Issue #44925](https://github.com/openclaw/openclaw/issues/44925)
    *   *Analysis:* Reports of subagent results vanishing entirely without retries or notifications, affecting multi-agent workflows.

### 5. Bugs & Stability
**Top Regressions & Critical Bugs:**

1.  **Memory Management Chaos (#43747):** A regression causing inconsistent memory behavior across different users (chunking/embedding failing intermittently). This is a **P1** issue affecting session state.
    *   *Link:* [openclaw/openclaw Issue #43747](https://github.com/openclaw/openclaw/issues/43747)
2.  **Subagent Delivery Failures (#67777, #92433, #47975):** A cluster of related bugs where subagent completions are dropped due to timeouts, drain events, or steering into a requester session that ends prematurely.
    *   *Link:* [openclaw/openclaw Issue #67777](https://github.com/openclaw/openclaw/issues/67777)
3.  **OAuth Heartbeat Failures (#89278):** Codex OAuth refresh succeeds but cron/heartbeat tasks fail with a 10s timeout, breaking background tasks.
    *   *Link:* [openclaw/openclaw Issue #89278](https://github.com/openclaw/openclaw/issues/89278)
4.  **Active Memory Gateway Overload (#72015):** The `active-memory` plugin causes reply delays and unreliable behavior on multi-agent gateways by blocking the event loop.
    *   *Link:* [openclaw/openclaw Issue #72015](https://github.com/openclaw/openclaw/issues/72015)

### 6. Feature Requests & Roadmap Signals
*   **Memory Security:** The high volume of discussion around **#7707** (Memory Trust Tagging) signals a strong user demand for built-in memory security features. This is likely to be a priority for the next major version.
*   **Configuration & Tooling:**
    *   **YAML Support (#45758):** Users want YAML as an alternative config format for better readability.
    *   **Agent-Scoped Messaging (#104889):** A request to allow CLI sends to target a specific agent, improving workflow granularity.
    *   **Skill Priority (#50199):** Users are asking for configuration to prioritize skills when multiple can perform a task.

### 7. User Feedback Summary
*   **Pain Points:** Users are experiencing significant frustration with **unreliable subagent orchestration** and **inconsistent memory state**. The lack of visibility into why a subagent failed (no notification, silent loss) is a major UX friction point.
*   **Security Concerns:** There is growing concern about memory safety, specifically the risk of poisoning agent memory with malicious instructions from web scrapes or third-party integrations.
*   **Workflow Frustrations:** Users report issues with the Control UI (e.g., empty replies, unreadable streaming text) and CLI stability (e.g., hanging on shutdown, `attach` command failures).

### 8. Backlog Watch
*   **Longstanding Critical Bugs:** Several **P1** issues, including **#111498** (Main agent blocked by workspace-state migration) and **#97616** (Leaking unreaped child processes), have been open for weeks/months and are marked as regressions. These require immediate attention to prevent production outages.
*   **Stale PRs:** Several PRs are marked as "stale" or "waiting on author" (e.g., #93247, #122884) and have not seen recent activity, indicating potential bottlenecks in the code review process or maintenance backlog.

---

## Cross-Ecosystem Comparison

# AI Agent & Personal Assistant Open-Source Ecosystem Digest (2026-08-13)

## 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently undergoing a critical transition from experimental prototypes to robust, production-grade platforms. Projects like **OpenClaw**, **IronClaw**, and **ZeroClaw** are leading this shift by implementing complex architectural refinements focused on multi-agent orchestration, cross-platform stability, and modular plugin systems. Simultaneously, ecosystem-specific agents such as **NanoBot**, **Hermes Agent**, and **CoPaw** are prioritizing specialized tooling integration (e.g., MCP servers, DeepSeek/Qwen providers) and security hardening. The landscape is characterized by high community engagement and rapid iteration, with a collective consensus emerging on the necessity of memory security, subagent reliability, and seamless multi-channel deployment.

## 2. Activity Comparison
*Activity measured as Issues/PRs updated in the last 24 hours.*

| Project | Issues | Pull Requests | Releases | Health Score (Est.) |
| :--- | :---: | :---: | :---: | :---: |
| **OpenClaw** | 500 | 500 | No | **High** |
| **ZeroClaw** | 50 | 50 | No | **High** |
| **CoPaw** | 29 | 42 | Yes (v2.1.0-beta.4) | **High** |
| **IronClaw** | 41 | 50 | Yes (v1.2.0-rc.3) | **High** |
| **Hermes Agent** | 50 | 50 | No | **High** |
| **NanoBot** | 8 | 36 | No | **High** |
| **PicoClaw** | 2 | 3 | No | **Moderate** |
| **NanoClaw** | 4 | 10 | No | **Moderate** |
| **LobsterAI** | 6 | 8 | No | **Moderate** |

## 3. OpenClaw's Position
**OpenClaw** stands as the largest and most architecturally complex project in the ecosystem, evidenced by its 500+ open issues and PRs. Its primary advantage lies in its **core reference architecture** for subagent orchestration and memory management, which other projects are building upon.

*   **Technical Approach:** OpenClaw focuses on a high-density, multi-agent gateway model with complex lifecycle management (channel separation, subagent routing). It is currently in a "stabilization phase," aggressively patching regressions in memory trust tagging and subagent delivery.
*   **Community Size:** Significantly larger than peers (10x+ issues compared to NanoBot or PicoClaw), suggesting a massive user base and a high volume of external feedback driving its roadmap.
*   **Comparison:** While **IronClaw** offers a more polished, channel-first approach with modern WebUI tooling, and **ZeroClaw** focuses on unified slash commands and observability, OpenClaw provides the deepest "plumbing" for complex agent workflows, albeit with higher operational friction due to its complexity.

## 4. Shared Technical Focus Areas
Across the ecosystem, four specific technical requirements have emerged as critical priorities:

1.  **Subagent Orchestration Reliability:**
    *   *Projects:* **OpenClaw** (P1 bugs on payload loss), **Hermes Agent** (Gateway crashes on restart), **IronClaw** (Stuck agents on GIFs/Stickers).
    *   *Need:* Robust error handling and state persistence to prevent "silent failures" where agent results are dropped.
2.  **Memory Security & Trust Tagging:**
    *   *Projects:* **OpenClaw** (#7707), **NanoBot** (Workspace isolation), **CoPaw** (Plugin permissions).
    *   *Need:* Architectural separation between trusted (user) and untrusted (web scrape) data to prevent memory poisoning attacks.
3.  **Cross-Platform Stability (Windows/macOS):**
    *   *Projects:* **ZeroClaw** (Installer crashes, test failures), **IronClaw** (File locking), **LobsterAI** (Plugin installation junctions).
    *   *Need:* Native atomic operations and dependency management to ensure desktop applications run consistently across OSs.
4.  **Plugin Architecture & Extensibility:**
    *   *Projects:* **Hermes Agent** (Plugin Event Bus), **NanoClaw** (Agent Plugins 1.0 migration), **CoPaw** (Apps market).
    *   *Need:* Standardized interfaces for tool injection, skill management, and lifecycle hooks to allow community growth without core code changes.

## 5. Differentiation Analysis
*   **OpenClaw:** The "Enterprise Kernel." Focuses on deep system integration, complex routing, and handling massive scale. High technical debt but high capability.
*   **IronClaw:** The "Modern Platform." Focuses on WebUI polish, channel-first design, and cross-platform compatibility. Targets developers who want a "batteries included" desktop app.
*   **NanoBot:** The "Specialized Tool." Focuses on specific channel integrations (Matrix, WeChat) and security hardening for file operations. Targets power users needing niche connectivity.
*   **CoPaw:** The "Research/Prototype." Focuses on memory/dreaming workflows and multimodal capabilities (MiniMax TTS). Targets experimental setups and AI researchers.
*   **PicoClaw:** The "Lightweight CLI." Focuses on performance and routing. Targets users who want a simple, fast local agent without complex overhead.

## 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Velocity):** **OpenClaw**, **ZeroClaw**, **Hermes Agent**. These projects have thousands of open issues and are actively refactoring core engines. They are in a "growth" phase where breaking changes and architectural pivots are common.
*   **Stabilizing (Quality Focus):** **IronClaw**, **CoPaw**, **NanoBot**. These projects are releasing betas and focusing on bug fixes, UI polish, and security hardening. They are moving from "proof of concept" to "production ready."
*   **Maintenance Mode:** **LobsterAI**, **PicoClaw**, **NanoClaw**. Activity is steady but focused on specific feature requests and minor patches. They appear to be maturing into stable tools.

## 7. Trend Signals
1.  **From Chatbots to Workflows:** The industry is shifting away from simple chat interfaces toward **multi-step tasking** and **agent collaboration**. Projects like CoPaw and Hermes are introducing "event buses" and "single-window collaboration" to support complex workflows.
2.  **Security by Design:** Memory poisoning and plugin security are no longer edge cases; they are central to the roadmap. The "Trust Tagging" feature is becoming a standard expectation.
3.  **Platform Consolidation:** There is a trend toward a **"Channel-First"** architecture (IronClaw) where the agent's behavior is defined by the platform it lives on (Telegram vs. Web vs. Desktop), rather than a generic chat model.
4.  **Provider Abstraction:** Projects are rapidly adding support for new AI providers (DeepSeek V4, Qwen, MiniMax) and abstracting them behind compatible APIs to avoid vendor lock-in.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest**
**Date:** 2026-08-13
**Repository:** HKUDS/nanobot

---

### 1. Today's Overview
Activity on the NanoBot repository remained high and focused on stabilization and security hardening. With 8 issues and 36 pull requests updated in the last 24 hours, the project is in a robust maintenance phase. The majority of work involved resolving critical security vulnerabilities in file system and network tools, alongside ongoing architectural refactoring to support new AI providers and improved channel integrations. No new software releases were published today.

### 2. Releases
**None.** No new releases were detected in the provided data.

### 3. Project Progress
*   **Merged/Closed PRs:** 17 of the 36 updated PRs were merged or closed today.
*   **Key Fixes Merged:**
    *   **Security & Stability (Priority P1):** Multiple security fixes were merged to address path traversal risks in `ExecTool` (handling tilde expansion and shell operators) and prevent credential leakage in `WebFetchTool` when using the Jina reader. Docker capabilities were also restored to ensure secure privilege dropping.
    *   **Provider Support:** Added native support for DeepSeek V4 Pro Responses, expanding the agent's reasoning capabilities.
    *   **Channel Fixes:** Fixed Matrix channel responses to correctly link bot replies to user events and improved WeChat QR-login token persistence.
    *   **Session Management:** Refactored session history storage to move it outside the workspace directory, improving security isolation.

### 4. Community Hot Topics
The most active discussion today focused on **text-to-speech (TTS) capabilities**.
*   **Issue #4010:** A feature request proposing voice output support to complete the conversational loop for channels that support voice notes. This is a significant usability enhancement for voice-first channels like Matrix and Discord. **[View Issue](https://github.com/HKUDS/nanobot/issues/4010)**
*   **PR #5358:** A related enhancement proposing session collaboration via mentions in the WebUI, allowing users to reference other sessions. **[View PR](https://github.com/HKUDS/nanobot/pull/5358)**

### 5. Bugs & Stability
Several high-severity bugs were reported and some were already addressed via PRs.
*   **Critical (Security):** `ExecTool` path traversal vulnerability (Issue #5297). Nanobot could potentially execute commands outside the workspace by exploiting tilde expansion. **[View Issue](https://github.com/HKUDS/nanobot/issues/5297)**
*   **High (Stability):** Nanobot repeating reasoning messages randomly (Issue #5327). This affects the quality of output in complex reasoning tasks. **[View Issue](https://github.com/HKUDS/nanobot/issues/5327)**
*   **Medium (Deployment):** Docker Compose deployment failure due to permission denied on `entrypoint.sh`. **[View Issue](https://github.com/HKUDS/nanobot/issues/5295)**
*   **Medium (Test Flakiness):** Token usage tests failing intermittently due to UTC vs configured timezone mismatches. **[View Issue](https://github.com/HKUDS/nanobot/issues/5348)**

### 6. Feature Requests & Roadmap Signals
*   **Voice Output (TTS):** The persistent request for text-to-speech suggests the roadmap is moving toward multimodal agents that can both listen and speak, not just text-based interaction.
*   **MCP Provider Refactoring:** The push for a `QwenCloud` provider path alongside DashScope indicates a strategic pivot to support the Qwen ecosystem more directly for international developers.
*   **WebUI Redesign:** A major PR regarding "Apps Discovery" and "Setup Flows" suggests the project is maturing into a platform, focusing on user onboarding and third-party app integration.

### 7. User Feedback Summary
*   **Positive:** Users appreciate the continued addition of provider support (DeepSeek, Qwen) and the focus on security hardening (workspace boundary enforcement).
*   **Negative/Annoyances:** Users are experiencing random reasoning repetition, which degrades the reliability of the agent. There is also frustration with deployment failures and flaky tests affecting trust in the CI/CD pipeline.

### 8. Backlog Watch
*   **Issue #5350:** A proposal to add a backward-compatible QwenCloud provider path. This is a high-priority architectural request that bridges existing configurations with new model access needs.
*   **PR #5342 (Conflict):** The "Apps Discovery" redesign PR is marked as having a conflict. Resolving this will likely define the future look and feel of the WebUI.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-08-13
**Project:** Hermes Agent (nousresearch/hermes-agent)

### 1. Today's Overview
Hermes Agent is experiencing a high-activity period with 50 issues and 50 pull requests updated in the last 24 hours. The community is heavily focused on **plugin architecture expansion** and **session management stability**, addressing token overhead, gateway lifecycle, and cross-platform compatibility. The project remains active and responsive, with a strong signal of "plumbing" work to stabilize the ecosystem for contributors.

### 2. Releases
**No new releases were detected for today.**

### 3. Project Progress
*   **Merged PRs:** 2 (PRs #41236, #84903) related to Linux keychain backend auto-detection for secure token storage in the desktop application.
*   **Closed Issues:** 7 (Issues #64174, #64180, #64900, #64162, #64177, #64179, #64167, #64227).
    *   **Feature Advancements:** Significant progress on the plugin interface expansion, including the ability to route LLM calls through auxiliary slots, cache-safe context injection, and plugin API versioning.
    *   **Stability Fixes:** Resolved gaps in secret-source plugin bootstrap and clarified tool-approval flows.

### 4. Community Hot Topics
The most active discussions center on reducing resource usage and expanding the plugin ecosystem.

*   **Token Overhead Optimization (#6839):** This is the top active issue with 39 comments. Users are requesting "Lazy Tool Schema Loading" to reduce the massive token cost (~3,500-5,000 tokens per call) of injecting schemas for 50+ tools when they aren't needed.
    *   *Underlying Need:* Cost-efficiency for local models and faster response times.
*   **Plugin Interface Expansion (#64182):** A tracking issue with 33 comments gathering community ideas for expanding the core agent's plugin interface.
    *   *Underlying Need:* A desire for a more robust, standardized, and powerful plugin system that allows for complex extension without core code changes.

### 5. Bugs & Stability
Several critical stability issues are being actively triaged, primarily involving session management and gateway crashes.

*   **[P1] Desktop Gateway Crash (Windows):** Issue #83683 reports that restarting the Hermes Desktop app kills the live messaging gateway (WeChat/QQ/Telegram), causing complete silence until manual intervention. A fix PR (#84924) is being prepared.
*   **[P1] Message Delivery Regression:** Issue #78069 describes a bug where "clarify" free-text responses fail to bind to pending calls, causing turns to hang indefinitely. Issue #82975 identifies a similar regression in Telegram where follow-up messages are queued instead of resolving.
*   **[P2] Browser Tool Crash:** Issue #83427 reports a `ModuleNotFoundError: pydantic_core._pydantic_core` crash when using the browser tool, specifically when the Python path points at the Hermes venv.
*   **[P2] Windows File Locking:** Issue #57775 (historical but relevant) highlights a regression where `atomic_replace` drops writes due to concurrent readers on Windows.

### 6. Feature Requests & Roadmap Signals
The roadmap is clearly shifting toward a more "plugin-first" architecture.

*   **Plugin Event Bus & Messaging:** PRs #84929 and #84932 introduce the ability for plugins to inject messages into sessions and communicate with each other via a declared event bus. This signals a move toward highly decoupled, reactive plugins.
*   **Multi-Gateway Desktop Support:** Issue #45779 (6 comments) requests a UI feature to manage multiple gateway connections (e.g., one per machine) from a single Desktop instance.
*   **Xiaomi TTS/ASR Support:** Issue #46257 requests native support for Xiaomi's MiMo-V2.5 speech models, indicating strong demand for specialized provider integrations.

### 7. User Feedback Summary
*   **Pain Point:** The sheer cost of running Hermes with a full suite of tools (terminal, file, browser, etc.) on local hardware. Users are desperate for ways to disable tools or lazy-load schemas to save tokens.
*   **Pain Point:** **"Session Bleed"** across platforms. Users report that Discord/Telegram sessions are leaking control messages or triggering messages into stored history, making transcripts messy and hard to read.
*   **Pain Point:** **Gateway Reliability.** The "silent failure" of gateways (disappearing without error) is the most frustrating user experience reported, particularly after app restarts or updates.

### 8. Backlog Watch
*   **Plugin Development Tooling:** Issue #64230 (Closed) requested developer tooling like scaffolding and a test harness. The open PR #84919 (#84919) now introduces a community plugin index and search, a direct response to this backlog item.
*   **Webhook Revamp:** Issue #84834 is a meta-issue ("Webhook Revolution") calling for a graph-gated repair campaign for the entire webhook surface, signaling a major upcoming refactoring effort.
*   **Plugin Lifecycle:** There are several long-standing PRs (#76490, #65632) being salvaged and integrated into the new plugin system, indicating a backlog of legacy features being modernized.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-08-13
**Project:** sipeed/picoclaw

### 1. Today's Overview
Activity on the PicoClaw repository remained moderate on August 13, 2026, with 2 open issues and 3 active pull requests initiated or updated within the last 24 hours. The project demonstrates consistent engagement from the community, focusing primarily on performance optimization and feature expansion. While there were no new releases, the high volume of open PRs suggests an active development cycle aimed at stabilizing the Web UI and enhancing routing capabilities.

### 2. Releases
**No new releases detected.**

### 3. Project Progress
With no releases, progress is currently driven by active pull requests in the queue. Three significant PRs were updated today, focusing on core agent logic, Telegram integration, and external search capabilities:
*   **Routing & Context Management:** A fix addressing context management and history compression in routed agents was updated.
*   **Telegram Integration:** Support for Telegram topics in private bot chats was updated.
*   **Web Search:** A new provider for native Exa web search was added.

### 4. Community Hot Topics
The most discussed topics today center on Web UI performance and system reliability.
*   **Web UI Lag (Issue #3281):** A user reported severe lag when typing in the chat interface with a moderately long history. This indicates a performance bottleneck in the frontend rendering or state management as session data grows.
    *   *Link:* [sipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)
*   **MCP Server Failure Handling (Issue #3269):** Users highlighted a critical stability issue where connection failures to MCP servers cause the entire agent loop to hang, freezing the chat interface.
    *   *Link:* [sipeed/picoclaw Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)

### 5. Bugs & Stability
*   **High Severity: Agent Loop Hang on MCP Failure (#3269):**
    *   **Description:** When an MCP server connection fails, the agent loop hangs indefinitely, stopping all user replies.
    *   **Status:** Open. The project is vulnerable to single-point-of-failure crashes.
*   **Medium Severity: Web UI Input Lag (#3281):**
    *   **Description:** The input box becomes unresponsive/laggy as chat history grows.
    *   **Status:** Open. This impacts the user experience during long-running sessions.

### 6. Feature Requests & Roadmap Signals
*   **Native Exa Web Search (PR #3299):** A request to integrate Exa as a native web search provider has been submitted. This aligns with the trend of standardizing external tool integrations for AI agents.
    *   *Link:* [sipeed/picoclaw PR #3299](https://github.com/sipeed/picoclaw/pull/3299)
*   **Telegram Forum Topics (PR #3315):** An update to support Telegram topics in private chats. This suggests the project is actively expanding compatibility with newer Telegram features and multi-topic workflows.

### 7. User Feedback Summary
User feedback highlights a tension between feature richness and stability. While users are utilizing advanced features like routed agents and web search (Exa), they are encountering friction points:
1.  **Performance vs. Features:** Users want long histories and complex routing, but the current implementation lags under load.
2.  **Resilience:** Users expect the chat interface to remain responsive even if backend services (MCP servers) fail, rather than freezing the entire system.

### 8. Backlog Watch
*   **Issue #3269 (MCP Hang):** This issue has been open for 24 days (created 2026-07-20) and has received 4 comments. It is critical for the stability of the application as it affects core functionality.
    *   *Link:* [sipeed/picoclaw Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)
*   **Issue #3281 (Web UI Lag):** Open for 23 days (created 2026-07-21). While annoying, it may be prioritized lower than the critical stability issue regarding MCP failures.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest (2026-08-13)

## 1. Today's Overview
NanoClaw activity remains steady with 4 open issues and 10 active pull requests updated in the last 24 hours. The project is currently navigating a major architectural transition, specifically the migration of agent templates to the new Agent Plugins 1.0.0 directory structure. While no new releases were made today, the high volume of PRs indicates active maintenance and ongoing refactoring work.

## 2. Releases
**None today.** The project has no new releases scheduled or available in the last 24 hours.

## 3. Project Progress
The project made progress on the transition to the new Agent Plugins architecture. A core-team PR (#3220) is advancing the "agent templates become Agent Plugins 1.0.0 directories" feature, which involves a significant engine change and format migration. Additionally, a PR related to the setup wizard and first-agent stamping (#2909) is stacked on this core change, indicating a coordinated effort to update the user onboarding flow.

## 4. Community Hot Topics
The most active discussions revolve around the new plugin architecture and operational tooling:
*   **Agent Plugins Migration:** PR #3220 is currently the focal point, driving the core-engine changes required to support Agent Plugins 1.0.0 directories.
*   **New Provider Integration:** Issue #3232 proposes adding **QwenCloud** as an optional provider skill, leveraging OpenAI/Anthropic-compatible APIs.
*   **Operational Health:** Issue #2504 requests a lightweight `ncl status` command to improve operational visibility, currently missing from the CLI.

## 5. Bugs & Stability
*   **Signal DM Delivery Failure:** PR #2689 addresses a critical routing issue where Signal DMs were being silently dropped. The root cause was identified as a missing `isMention` flag for direct messages, preventing the router from creating necessary database entries.
*   **WhatsApp Validation:** PR #3086 fixes a validation issue where WhatsApp messages were being sent to invalid recipient numbers without error checking, leading to failed delivery despite success logs.

## 6. Feature Requests & Roadmap Signals
*   **Agent Group ID Prefixing:** Issue #3234 highlights a bug where `ncl groups create --template` generates a UUID without the `ag-` prefix, causing OneCLI to reject the agent ID. This suggests a roadmap item for standardizing group ID generation.
*   **Task Management Migration:** Issue #3233 identifies a gap in the migration path for recurring tasks. Agents created after v2.1.54 cannot see or manage legacy recurring tasks, indicating a need for a data migration tool or backfill script.
*   **QwenCloud Provider:** Issue #3232 proposes adding QwenCloud as a modular provider skill, signaling an intent to expand model provider support without core changes.

## 7. User Feedback Summary
Users are currently focused on the transition period between the old template system and the new Plugins system. Feedback indicates a need for better operational visibility (Issue #2504) and clearer migration paths for existing data (Issue #3233). There is also user interest in expanding the ecosystem with new provider integrations like QwenCloud.

## 8. Backlog Watch
Several long-standing issues are currently open and may need maintainer attention:
*   **Issue #2504 (Operational Health):** Requested since May 15th, this remains a high-priority missing tool for system operators.
*   **PR #2689 (Signal Consistency):** Open since June 4th, this PR fixes DM delivery but has not yet been merged.
*   **PR #2346 (Slash Command Parsing):** Open since May 8th, this fixes how unknown slash commands are handled in the formatter.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest (2026-08-13)

### 1. Today's Overview
IronClaw experienced a significant spike in activity today, driven by the release of two pre-release candidates (v1.2.0-rc.3 and v1.2.0-rc.2) and a robust workflow of 41 open issues and 50 pull requests. The project is currently focused on stabilizing the runtime environment, improving the WebUI design system, and expanding cross-platform channel support (Telegram, Slack, GitHub). While the majority of issues are "bash_P2" quality QA bugs regarding channel integration and UI responsiveness, the release cadence indicates a healthy push toward the v1.2.0 milestone.

### 2. Releases
Two new release candidates were published on 2026-08-12, focusing on critical stability and platform-specific fixes.

*   **ironclaw-v1.2.0-rc.3** (2026-08-12)
    *   **Fixed:** Resolved a critical healthcheck failure in the runtime container. Previously, the container image lacked an HTTP client (`curl`), causing orchestrator probes (`curl -fsS http://localhost:3000/`) to fail silently. This release installs the necessary tool to ensure container liveness detection works correctly.
    *   **Link:** [GitHub Release](https://github.com/nearai/ironclaw/releases/tag/v1.2.0-rc.3)

*   **ironclaw-v1.2.0-rc.2** (2026-08-12)
    *   **Fixed:** Improved Windows filesystem stability by switching to native atomic rename semantics for first-start publication. Also addressed "Release smoke runs" to better preserve Windows account identity required for securing standalone secrets keys.
    *   **Link:** [GitHub Release](https://github.com/nearai/ironclaw/releases/tag/v1.2.0-rc.2)

### 3. Project Progress
*   **Merged PRs:** 19 PRs were merged or closed today.
*   **Key Integrations:**
    *   **Telegram Linked-Device Auth:** A major PR (#7464) implementing "linked-device" authentication for Telegram is in progress, allowing users to link their personal accounts as real MTProto devices for better session custody.
    *   **Coding Tools Refactor:** Significant work on the "coding" surface (#7491) is underway, consolidating file tools into a single surface with exact names (`read`, `write`, `edit`, `glob`, `grep`) to reduce model confusion.
    *   **WebUI Design System:** The project is advancing the "Storybook + AI-first Design System" Epic (#7038), with PRs moving the governance documentation and scaffolding the `@ironclaw/ui` package for future theming.
*   **Infrastructure:** Documentation reorganization (#7559) is consolidating the `docs/reborn/` directory under `docs/internal/reborn/` to enforce publication fences.

### 4. Community Hot Topics
The community is actively debating the direction of the WebUI and the complexities of agent "thinking" control.

*   **WebUI Onboarding & Design System (#7038, #7044, #7042):**
    *   **Analysis:** A high-priority epic is underway to address the "blank slate" problem where new users don't know what to do with IronClaw. The project is simultaneously building a design system governed by `DESIGN.md` to standardize the UI.
    *   **Link:** [Epic: Storybook + AI-first Design System](https://github.com/nearai/ironclaw/issues/7038)
    *   **Link:** [Onboarding to channel-first approach](https://github.com/nearai/ironclaw/issues/7044)

*   **Thinking/Effort Control (#7537):**
    *   **Analysis:** A technical enhancement request to add generic "thinking level" control to LLM requests. This is specifically mentioned as a trigger for DeepSeek V4 Flash, which was generating verbose responses. The goal is to map provider-native parameters to a unified control surface.
    *   **Link:** [feat(llm): generic per-request thinking/effort control](https://github.com/nearai/ironclaw/issues/7537)

### 5. Bugs & Stability
Several regressions and integration bugs were reported, predominantly affecting Telegram and WebUI interactions.

*   **Telegram Integration (P1 - High):**
    *   **#7538:** Agent becomes completely stuck after receiving GIFs or stickers.
    *   **#7535:** Webhook activation fails after saving bot configuration; requires a full redeploy to fix.
    *   **#7540:** Long messages split by Telegram are partially missed; the agent rejects subsequent parts.
    *   **#7543:** Telegram routines execute successfully in the backend but fail to deliver the message on the first run.
    *   **#7554:** Custom MCP server flow shows a spurious "validation" error preventing server addition.

*   **WebUI & UX:**
    *   **#7536:** Multi-user access flow is broken; additional users receive "Invalid secret" errors when trying to access the UI.
    *   **#6541:** WebUI "Reconnecting" message appears constantly, causing user confusion despite the agent working fine.

*   **Agent Logic:**
    *   **#7484:** Context window eviction logic was incorrectly pinning messages, potentially losing data.
    *   **#7485:** Token estimator double-counted ASCII characters, halving the effective context window size.

### 6. Feature Requests & Roadmap Signals
*   **OOBE (Out of Box Experience):** Users are demanding a better onboarding flow (#7044) so they aren't left with a blank screen upon first login. The backend wiring for this prototype is currently being developed (#6993).
*   **Cloud Authentication:** Users request the ability to "stake" for inference using social logins (Google/GitHub) on `cloud.near.ai`, rather than being limited to Stripe or NEAR-only wallets (#7517).
*   **Channel-First Approach:** The roadmap is shifting towards a "channel-first" approach (#7044), prioritizing the assistant's behavior and configuration based on the channel (WebUI, Telegram, Slack) rather than a generic chat interface.

### 7. User Feedback Summary
*   **Pain Point:** **"The agent is stuck."** Multiple users report the agent freezing entirely after specific inputs (stickers, GIFs, or long text) in Telegram, breaking the conversation flow.
*   **Pain Point:** **"Confusing UI errors."** Users encounter "Reconnecting" loops and "Invalid secret" errors that don't actually prevent the agent from working, leading to frustration.
*   **Pain Point:** **"No clear starting point."** The primary feedback for new users is that the WebUI opens with no guidance on how to begin, highlighting a significant gap in the onboarding experience.

### 8. Backlog Watch
*   **#7383 (Chore/Architecture):** Tracking the decomposition of `tool_disclosure_port.rs` (4,425 lines). This file is approaching the 3,000-line limit defined by the project's architecture rules and requires refactoring. No action has been taken since Aug 7.
*   **#7042 (Design System):** The "Phase 2: DESIGN.md governance" issue is open and tracking the authoring of governance documentation for the WebUI design system.
*   **#6993 (Backend Wiring):** The backend implementation for the OOBE automation-tasks prototype is open and waiting for integration.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest (2026-08-13)**

### 1. Today's Overview
Activity on the LobsterAI repository has been moderate, with 6 issues and 8 pull requests updated within the last 24 hours. The team has focused heavily on refining the UI/UX, specifically addressing cross-platform rendering issues and workflow improvements, while simultaneously resolving plugin management and model selection stability bugs. Overall, the project appears to be in a stable maintenance phase, prioritizing polish and bug fixes over major feature releases.

### 2. Releases
**No new releases** were published in the last 24 hours.

### 3. Project Progress
The development team successfully merged and closed 7 pull requests today, focusing on UI refinement, platform compatibility, and core bug fixes.
*   **UI/UX Polish:** Significant work was done on the renderer layer to improve the task search interface (PR #2481) and split the skills manager tabs (PR #2482).
*   **Cross-Platform Stability:** Fixes were deployed to prevent large file icon rendering errors on macOS and Windows (PR #2478) and to resolve thinking level selection conflicts between different models (PR #2475).
*   **Plugin & Installation Management:** A critical fix for Windows plugin installation junctions was merged to prevent `EPERM` errors during setup (PR #2479).

### 4. Community Hot Topics
The community is actively engaging with issues regarding UI/UX usability and configuration stability.
*   **Sandbox Configuration Issue:** A user reported that the 3.31 update introduced a forced sandbox mode that cannot be disabled, forcing a rollback to 3.30. **[Link](https://github.com/netease-youdao/LobsterAI/issues/1179)**
*   **Plugin ID Mismatch:** Users are experiencing repeated warnings regarding mismatched plugin IDs in the MCP bridge configuration, causing startup noise. **[Link](https://github.com/netease-youdao/LobsterAI/issues/1236)**

### 5. Bugs & Stability
Several stability issues were addressed in today's PRs, and others were reported by users:
*   **Fixed:** Windows Plugin Junction Preservation (PR #2479) - Fixed installation failures on Windows due to symlink preservation.
*   **Fixed:** macOS Large Icon Support (PR #2478) - Resolved Electron rendering crash/fallback on macOS when displaying large file icons.
*   **Fixed:** Model Thinking Level Conflicts (PR #2475) - Resolved a bug where adjusting the "thinking level" for one model would incorrectly reset another model's setting.
*   **Reported:** "Hidden" Sessions - An internal OpenClaw agent session was appearing in the user's cowork list, causing confusion. A fix is in progress via PR #1181.

### 6. Feature Requests & Roadmap Signals
*   **Multi-Provider Support:** A feature request was submitted to allow users to add and manage multiple custom model providers simultaneously, rather than switching between a single active provider. **[Link](https://github.com/netease-youdao/LobsterAI/issues/1174)**

### 7. User Feedback Summary
User feedback highlights concerns regarding application persistence and configuration management.
*   **Persistence & Privacy:** A user reported a critical concern where the application continued to function and send messages to Feishu (Lark) even after being uninstalled via Windows "Add/Remove Programs," raising suspicions about hidden backdoors. **[Link](https://github.com/netease-youdao/LobsterAI/issues/1173)**
*   **Workflow Disruption:** Users noted that modifying custom agent icons in version 3.31 triggers the gateway to repeatedly restart, disrupting the user experience.

### 8. Backlog Watch
*   **Unresolved Sandbox Issue:** Issue #1179 regarding the forced sandbox mode introduced in 3.31 has not been addressed by the maintainers yet.
*   **Unresolved "Stale" Issues:** Several older issues tagged as "stale" (Issues #1236, #2071, #1173, #1174, #1180) have seen recent activity but remain open.

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

# CoPaw Project Digest (2026-08-13)

## 1. Today's Overview
Activity on the QwenPaw project was substantial, with 29 issues and 42 pull requests updated in the last 24 hours, indicating robust developer engagement. The project is currently in the beta phase of v2.1.0, with a new beta release (v2.1.0-beta.4) deployed to address styling and tooling bugs. While stability issues persist across different OS environments (Windows and Linux) and specific memory/dreaming workflows, the community is actively addressing these through rapid PR merges and detailed bug reports. The project demonstrates healthy momentum in both fixing regressions and expanding capabilities.

## 2. Releases
*   **v2.1.0-beta.4**
    *   **Published:** 2026-08-12
    *   **What's Changed:**
        *   **Fix:** `fix(files)`: Repaired previews and dark mode styling by @rayrayraykk.
        *   **Fix:** `fix(tools)`: Corrected `read_file` tool description by @AntiQuality.
        *   **Chore:** Bumped version to 2.1.0b4.
    *   **Note:** This release focuses on UI polish and tooling accuracy. No breaking changes were explicitly listed, but beta releases may contain refinements.

## 3. Project Progress
*   **PRs Merged/Closed:** 15 PRs were processed today (15 of 42 active were closed).
*   **Key Fixes Merged:**
    *   **Prefix Cache Stability:** PR #6953 stabilizes LLM KV caching by sorting tool schemas and splitting environment context, addressing performance jitter.
    *   **Tool Argument Validation:** PR #6936 coerces string-typed tool arguments emitted as JSON numbers, fixing MCP tool call failures.
    *   **Chat UI Time Display:** PR #6938 corrects the assistant completion time display in chat history.
    *   **Media Handling:** PR #6913 improved macOS element activation and inbound media localization.
    *   **Memory Guidance:** PR #6942 simplified long-term memory guidance prompts to remove incorrect implementation details about the "dream" pipeline.
*   **New Features/Docs:**
    *   Added **MiniMax TTS support** via PR #6954.
    *   Added native **DataPaw app runtime** via PR #6940.
    *   Updated website documentation for the Files workspace and long-term memory.

## 4. Community Hot Topics
*   **[Bug] Multi-step Task Interruption (#6921):** Reported by `rerbin`. Users report that tasks frequently halt after planning steps without visual cues, requiring manual "continue" commands. This suggests a potential issue with task execution flow or state management in long-horizon tasks.
*   **[Bug] Plugin Security/Permissions (#6916):** A critical security concern was raised where plugins can silently create cron jobs and inject messages without approval. This highlights a gap in the permission model for the Apps market.
*   **[Feature] Agent Collaboration in Single Window (#6925):** Users desire a single conversation window for multi-agent collaboration rather than spawning new sessions for every interaction.
*   **[Feature] Inbox for Agent Reports (#6917):** Users want agents to be able to proactively push structured reports to a central "Inbox" (non-scrolling, with notification badges) rather than losing them in chat history.

## 5. Bugs & Stability
*   **High Severity:**
    *   **Network Recovery Failure (#6932):** Users cannot auto-recover after brief network interruptions; the service requires a manual restart to re-establish LLM connections.
    *   **Plugin Security Vulnerability (#6916):** Plugins can execute unauthorized actions silently.
*   **Medium Severity:**
    *   **Memory/Dream Pipeline Mismatch (#6853):** The documentation claims the "dream" process syncs to `MEMORY.md`, but the code does not support this. This causes confusion and potential data loss.
    *   **MCP Tool Type Coercion (#6839):** Tools are failing because the system converts string parameters to numbers, rejecting valid JSON schemas.
    *   **Chat UI Time Display (#6826):** Assistant completion times are displayed incorrectly (showing seconds instead of minutes) in the UI.
*   **Low Severity/UI:**
    *   **Input Box Deletion Bug (#6928):** Typing in the input box deletes subsequent text.
    *   **Scroll Compression Visibility (#6951):** After compressing a long chat, the original message history disappears from the UI, leaving only internal indices.
    *   **File Tree Grouping (#6883):** Notes in subfolders are appearing under the wrong dates in the "Daily" page.

## 6. Feature Requests & Roadmap Signals
*   **Long-Horizon Tasking:** PR #6923 suggests exploring integration with `LongHorizon-Harness` for better sustained task handling without state drift.
*   **Inbox System:** Feature request #6917 for an Inbox system is gaining traction, indicating a need for better structured output management from agents.
*   **Single-Session Collaboration:** #6925 suggests a roadmap item for improving multi-agent workflows within a unified context window.

## 7. User Feedback Summary
The user base is heavily focused on **stability and workflow fidelity**. Users are frustrated by:
1.  **Intermittent Crashes:** Frequent crashes on Windows (v2.0.1) and macOS.
2.  **State Loss:** Loss of visible chat history after compression or session switching.
3.  **Silent Failures:** Tasks stopping without error messages or requiring manual intervention.
4.  **UI Inconsistencies:** Time displays and input behaviors that contradict user expectations.

Conversely, users are excited about **new capabilities** like MiniMax TTS and the new DataPaw app runtime, suggesting a willingness to adopt new features if core stability is maintained.

## 8. Backlog Watch
*   **Legacy Session Loading (#6872):** Sessions created before v2.0 with local media sources fail to load with an internal error.
*   **Auto-Title Generation Failure (#6813):** Chat auto-title generation consistently fails due to a `KeyError` in AgentScope 2.x compatibility.
*   **Per-Session Model Overrides (#5992):** An older feature request from July to allow per-conversation model overrides is still under review.
*   **Console TUI Commands (#5869):** A long-standing request to expose system commands in slash autocomplete across all UIs (from July) is still under review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest (2026-08-13)

## 1. Today's Overview
ZeroClaw activity remains high with 50 issues and 50 pull requests updated in the last 24 hours, indicating robust community engagement. The project is currently navigating a mix of architectural refinements and critical bug fixes. A significant portion of the focus is directed toward improving cross-platform stability (Windows/macOS), securing dependency management, and unifying agent execution boundaries. Overall project health appears stable with a clear focus on hardening the runtime environment and improving the developer experience.

## 2. Releases
**None.** No new releases were generated in the last 24 hours.

## 3. Project Progress
A substantial amount of work has been consolidated today, primarily through the merging of documentation and minor bug fixes.
*   **Documentation & Refinement:** PR #9778 successfully reconciled revision histories across foundational documentation (FND-001 through FND-005), ensuring consistency for contributors.
*   **CLI Improvements:** PR #9877 corrected cron scheduling help examples to be runnable, improving usability for system administrators.
*   **Observability:** PR #9701 introduced configurable WebSocket keepalive pings for the web gateway chat interface, enhancing connection stability.
*   **Runtime Fixes:** PR #8902 fixed bidirectional JSON-RPC routing, resolving issues with ZeroCode's interactive interactions.

## 4. Community Hot Topics
The most active discussions center on architectural improvements for the agent runtime and unified slash command handling.
*   **Unified Slash Command Registry (#7929):** This is a high-priority feature request aimed at unifying slash command definitions across the web UI, ZeroCode TUI, and channel runtime to prevent drift and improve consistency.
    *   *Link:* [Issue #7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)
*   **Kanban Board for Agent Work (#8832):** An RFC proposing a plugin-owned domain for agent coordination, focusing on card semantics and workflow stages.
    *   *Link:* [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)
*   **Maintainer Decision Queue (#8692):** A tracker for RFCs and design issues requiring maintainer attention before acceptance or rejection.
    *   *Link:* [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)

## 5. Bugs & Stability
Several critical bugs were identified, particularly regarding cross-platform execution and security.
*   **Windows Test Failures (#7462):** **Severity: S2 (Degraded)**. A massive block of 74 tests is failing on Windows 11 due to Unix-only test commands and path semantics issues. This is a high-risk item affecting the project's portability.
    *   *Link:* [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)
*   **Windows Desktop Installer Crash (#9290):** **Severity: S1 (Workflow Blocked)**. The Windows desktop installer fails to launch at runtime due to a missing system dependency (`TaskDialogIndirect`).
    *   *Link:* [Issue #9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290)
*   **Web Fetch Garbage Data (#9207):** **Severity: S1 (Workflow Blocked)**. The `web_fetch` tool returns corrupted binary data for compressed responses (gzip/brotli), rendering the tool useless for fetching external resources.
    *   *Link:* [Issue #9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207)
*   **Discord Typing Indicator Stuck (#9198):** **Severity: S3 (Minor)**. The typing indicator remains permanently stuck on after a dashboard daemon reload.
    *   *Link:* [Issue #9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198)

## 6. Feature Requests & Roadmap Signals
*   **Agent Iteration Budget (#9323):** A request to define ownership of execution-tree iteration budgets to prevent uncontrolled fan-out in complex agent workflows.
    *   *Link:* [Issue #9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)
*   **Consolidated Release Attestation (#9101):** A priority P1 request to consolidate multiple signing mechanisms (cosign, GitHub attestations, slsa-github-generator) to reduce CI overhead and complexity.
    *   *Link:* [Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)
*   **Retire Lucid Memory Connector (#9644):** A plan to retire the Lucid memory backend due to upstream dormancy, suggesting a move toward more stable memory providers.
    *   *Link:* [Issue #9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644)

## 7. User Feedback Summary
Users are actively reporting friction points in the ZeroClaw ecosystem.
*   **Cross-Platform Frustration:** There is significant user frustration regarding Windows support. The user `swellee` reported a macOS desktop app crash (empty window) while `newcomm` reported a critical Windows installer crash, indicating the project struggles with desktop application packaging and initialization on non-Linux platforms.
*   **Search Reliability:** Users are requesting improved web search tooling. Issue #5316 highlights a need for better privacy-focused search (SearXNG) and CAPTCHA detection for DuckDuckGo to make autonomous agents more reliable.
*   **CLI Usability:** Users are finding the CLI documentation and help text confusing, specifically regarding cron job examples, which has been flagged for correction.

## 8. Backlog Watch
Several important issues require maintainer attention to unblock development.
*   **CLI Cron Delivery Bug (#9340):** A critical bug where CLI-created cron jobs discard their output (`delivery.mode = "none"`). This is marked as **Priority P1** and **In-Progress**.
    *   *Link:* [Issue #9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)
*   **Windows CI Matrix (#7461):** A long-standing request to extend the CI test suite to Windows and macOS, not just Linux. Currently, the project is unaware of Windows regressions until they are manually reported.
    *   *Link:* [Issue #7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)
*   **Dependency Security (Bitmaps):** **Priority P1**. A security CI failure is blocking the project due to an unmaintained advisory waiver for the `bitmaps` crate.
    *   *Link:* [Issue #9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899)

</details>

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*