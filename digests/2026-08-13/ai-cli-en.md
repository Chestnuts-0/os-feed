# AI CLI Tools Community Digest 2026-08-13

> Generated: 2026-08-13 01:04 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

**Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-13)**

### 1. Ecosystem Overview
The AI CLI landscape in 2026 is characterized by a transition from "experimental prototype" to "enterprise-grade infrastructure." Major players are aggressively consolidating infrastructure (e.g., OpenAI’s Rust migration, Claude’s multi-agent standardization) while simultaneously battling critical stability regressions. The ecosystem has matured to a point where session persistence, context management, and remote workflow support (WSL2/SSH) are baseline expectations, with the defining competition shifting toward architectural modularity and robust error handling.

### 2. Activity Comparison
*Data aggregated from community digests (August 13, 2026).*

| Tool | Releases (Last 24h) | Open Issues (Count) | Key PR Activity | Release Velocity |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.229 | ~20 | High (Stability fixes) | Active |
| **OpenAI Codex** | v0.148.0-alpha.9 | 10 | Very High (Infrastructure) | High (Alpha) |
| **Gemini CLI** | v0.56.0-nightly | 10 | High (Security & Fixes) | High (Nightly) |
| **GitHub Copilot CLI** | None | 10 | Moderate (Auth/Lifecycle) | Low |
| **Kimi Code CLI** | None | 1 (Feature Req) | Moderate (Bug Fixes) | Low |
| **OpenCode** | v1.18.17 | 10 | Moderate (Core Fixes) | Active |
| **Pi** | None | 2 (Open) | High (New Features) | Moderate |
| **Qwen Code** | desktop-v0.2.1 | 10 | High (Daemon/Security) | Active |
| **DeepSeek TUI** | v0.9.6 | 4 (Open) | High (Refactoring) | Active |

### 3. Shared Feature Directions
Across the ecosystem, the following architectural requirements are converging:

*   **Session Persistence & Recovery:**
    *   *Tools:* **OpenAI Codex, Qwen Code, Pi, DeepSeek TUI.**
    *   *Need:* The community is demanding robust crash recovery mechanisms. Users require that state, context, and conversation history survive power loss, application restarts, and network interruptions without manual intervention.
*   **Subagent Architecture & Recursion:**
    *   *Tools:* **Claude Code, Gemini CLI, OpenCode, Qwen Code.**
    *   *Need:* Moving beyond single-agent workflows, developers require "subagent recursion"—the ability for agents to delegate tasks to other specialized agents (e.g., `codebase_investigator` calling `browser_agent`) to handle complex workflows autonomously.
*   **Remote/WSL2 Integration:**
    *   *Tools:* **OpenAI Codex, GitHub Copilot CLI, OpenCode.**
    *   *Need:* A significant portion of the developer base operates in remote environments (macOS host, WSL2 client). Issues regarding IDE context visibility and `workspaceRoot` availability are the most prevalent blockers in these workflows.

### 4. Differentiation Analysis
*   **OpenAI Codex:** The leader in infrastructure modernization. It is currently undergoing a massive Rust migration, prioritizing high-level architectural stability (thread tracking, protocol unification) over immediate feature releases. It targets enterprise-scale deployments where session reliability is paramount.
*   **Claude Code:** Focuses on "Safety & Governance" at the architectural level. It is heavily investing in Cyber Verification (CVP) and wire protocol safety, making it the preferred choice for regulated industries. Its main pain points are UX stability (hallucinations, crashes) rather than feature gaps.
*   **Gemini CLI:** Differentiated by its "Agent-first" philosophy. It is aggressively implementing AST-aware code navigation and subagent delegation, positioning itself as a tool for complex, multi-step reasoning tasks rather than simple code completion.
*   **GitHub Copilot CLI:** The enterprise standard. It excels in workflow integration (MCP, IDE hooks) but is currently constrained by authentication friction (OAuth silent refresh) and process lifecycle management, suggesting a focus on tight integration rather than raw speed or stability.
*   **DeepSeek TUI:** Differentiated by its "Terminal-First" approach. It is currently undergoing a major Rust-based refactoring (EPIC-005) to decompose monolithic code, catering to developers who want a lightweight, highly interactive shell experience.
*   **Kimi Code CLI:** A specialized tool focused on "Context & Memory." Its primary differentiator is the active community debate on implementing a persistent memory system to bridge session gaps, appealing to users who need continuity across long projects.

### 5. Community Momentum & Maturity
*   **High Momentum / Rapid Iteration:** **OpenAI Codex** and **Gemini CLI**. Both are releasing frequent updates (alpha/nightly) and tackling complex architectural changes. This indicates a vibrant, active development cycle but also implies a higher risk of regressions.
*   **High Maturity / Stabilization:** **Claude Code** and **DeepSeek TUI**. These projects are focusing on bug fixes, security patches, and architectural refactoring (removing technical debt) rather than introducing radical new features.
*   **Stalled / Feature-Heavy:** **GitHub Copilot CLI** and **Kimi Code CLI**. Both are currently in maintenance mode with minimal releases, focusing on specific pain points (authentication, memory systems) rather than broad ecosystem expansion.

### 6. Trend Signals
*   **The "Rust Migration" Wave:** OpenAI Codex is not an anomaly; the industry is moving toward Rust for backend stability. This trend will likely reduce long-term memory leaks and improve performance in complex CLI tools.
*   **Standardization of MCP:** Model Context Protocol is becoming the "API" for CLI tools. Issues regarding MCP registry policies, tool visibility, and authentication are becoming the primary source of friction across multiple tools.
*   **The "Local Model" Pivot:** There is a growing bifurcation in the market. Tools like **Pi** are adding native support for local models (Ollama) to reduce latency and cost, while cloud-native tools (OpenAI, Claude) are focusing on securing their wire protocols and expanding context windows.
*   **Criticality of Session Integrity:** The recurring "Session Hang" and "Crash Loop" issues across all tools signal that the industry has outgrown its "toy" phase. Developers now expect industrial-grade reliability where a session is never lost due to a power flicker or a network hiccup.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data As of:** 2026-08-13  
**Repository:** anthropics/skills

---

## 1. Top Skills Ranking (Most Discussed)

### #1298: Skill Creator Evaluation Bug Fixes
**Functionality:** Fixes critical bugs in the `skill-creator` evaluation system where `run_eval.py` reports 0% recall, causing the description-optimization loop to optimize against noise.
**Discussion Highlights:** Addresses a systemic issue affecting the core skill-creation workflow; multiple reproductions reported (#556). Fixes Windows stream reading, trigger detection, and parallel workers.
**Status:** Open
**Link:** [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)

### #514: Document Typography Quality Control
**Functionality:** A skill to prevent common typographic problems in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment.
**Discussion Highlights:** Addresses a quality gap affecting every document Claude generates; community recognizes this as a high-impact, frequently encountered issue.
**Status:** Open
**Link:** [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)

### #568: ServiceNow Platform Assistant
**Functionality:** A comprehensive ServiceNow platform skill covering scripting, architecture, SecOps, ITAM/SAM, FSM, SPM, CSDM, and IntegrationHub.
**Discussion Highlights:** Broad, enterprise-focused skill addressing multiple ServiceNow domains (ITSM, ITOM, HRSD, etc.).
**Status:** Open (Last updated 2026-08-12)
**Link:** [anthropics/skills PR #568](https://github.com/anthropics/skills/pull/568)

### #541: DOCX Tracked Changes & Bookmarks Fix
**Functionality:** Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks.
**Discussion Highlights:** Critical bug fix for document integrity; addresses OOXML `w:id` collision issues.
**Status:** Open
**Link:** [anthropics/skills PR #541](https://github.com/anthropics/skills/pull/541)

### #539: YAML Description Validation for Skill Creator
**Functionality:** Adds pre-parse validation in `quick_validate.py` to detect unquoted `description` fields containing YAML special characters (`:`), preventing silent parsing failures.
**Discussion Highlights:** Prevents silent YAML parsing failures where descriptions are truncated or split into multiple keys.
**Status:** Open
**Link:** [anthropics/skills PR #539](https://github.com/anthropics/skills/pull/539)

### #1367: Self-Audit Quality Gate (v1.3.0)
**Functionality:** A mechanical verification + four-dimension reasoning quality gate skill that audits AI output before delivery (structure, reasoning, logic, completeness).
**Discussion Highlights:** A universal quality gate applicable to any project/tech stack; focuses on damage-severity priority order.
**Status:** Open (Created 2026-06-28)
**Link:** [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367)

### #723: Testing Patterns Skill
**Functionality:** A comprehensive testing skill covering the full testing stack: AAA pattern, test naming, pure functions, edge cases, React component testing, and testing libraries.
**Discussion Highlights:** Addresses testing philosophy and practical implementation patterns.
**Status:** Open
**Link:** [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723)

---

## 2. Community Demand Trends

**High-Priority Themes:**

*   **Enterprise Workflow Automation:** Strong demand for platform-specific skills (ServiceNow, SAP, SharePoint) and org-wide skill sharing capabilities (Issue #228).
*   **Quality Assurance & Validation:** Community is actively building and requesting skills for output verification (Self-Audit, Typography Control, Quality Analyzer).
*   **Testing & Debugging:** Comprehensive testing-patterns skills are a major priority for improving code reliability.
*   **Security & Governance:** Skills addressing trust boundaries, permission handling, and agent governance are gaining traction.
*   **Documentation & Tooling:** Demand for better tooling (skill-creator fixes, validation, contributing guides) and documentation standards.

**Notable Trend:** The community is moving beyond basic utility skills toward meta-skills (Quality Gate, Security Analyzer) and high-stakes enterprise workflows.

---

## 3. High-Potential Pending Skills

These active PRs are likely to land soon due to high community visibility and clear value:

*   **ServiceNow Platform Skill (#568):** Enterprise-grade skill covering multiple ServiceNow domains; recently updated (2026-08-12).
*   **Self-Audit Quality Gate (#1367):** A sophisticated v1.3.0 quality gate skill; addresses a universal need for output verification.
*   **Document Typography Skill (#514):** Fixes a frequently encountered quality issue affecting all document generation.
*   **Testing Patterns Skill (#723):** Comprehensive testing stack coverage; addresses a critical gap in the ecosystem.
*   **DOCX Fixes (#541, #539):** Critical bug fixes for document integrity and YAML parsing; low-hanging fruit for immediate impact.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for high-value, meta-skills that govern quality assurance, security, and enterprise workflow automation, rather than just basic utility skills.**

*   **Link to Report:** [anthropics/skills Community Highlights](https://github.com/anthropics/skills)

---

# Claude Code Community Digest
**Date:** 2026-08-13

## 1. Today's Highlights
A new release (v2.1.229) introduces critical stability improvements for self-hosted runners and Remote Control sessions. However, the community is heavily focused on resolving critical regressions in Claude Opus 5 hallucinations, GPU process crashes on Windows, and persistent Cyber Verification Program (CVP) safeguard blocks for approved organizations.

## 2. Releases
**v2.1.229**
*   **Remote Control Enhancement:** Documented `--continue` flag to resume the most recent Remote Control session.
*   **Self-Hosted Hooks:** Added server-supplied Claude Code hook support for self-hosted runner sessions to match managed-environment behavior.
*   **Gateway Stability:** Added SSE keepalive pings to gateway streaming responses.

## 3. Hot Issues
*   **#84352 [OPEN] CVP-approved Orgs Still Blocked:** A high-volume issue (80 comments) reports that organizations previously approved for the Cyber Verification Program are still receiving cyber-safeguard blocks in Claude Code, despite the portal showing "Under review."
*   **#54393 [OPEN] Multi-Agent Coordination Post-Mortem:** A detailed analysis of 12 coordination bugs surfacing during a single autonomous overnight cycle, revealing architectural gaps in the multi-agent framework.
*   **#81698 [OPEN] Windows GPU Crash Kills App:** Users report that a GPU process crash (exit code 101457950) kills the entire Claude Desktop app and all running sessions on Windows 11.
*   **#85199 [OPEN] Desktop Repair Loop:** Users experiencing repeated crashes requiring "Advanced Options → Repair" on Windows, suggesting a potential uninstallation loop.
*   **#82326 [OPEN] Opus 5 Hallucinations:** Users report that Opus 5 is generating hallucinated responses that did not occur in version 4.8.
*   **#66202 [OPEN] Mark Agents Complete:** A popular feature request (20 upvotes) to allow users to dismiss/complete agent sessions that are stuck in "Ready for review" or "Needs input" states.
*   **#79366 [OPEN] Worktree Session Reuse:** A bug where new sessions with worktree isolation reuse an existing directory from a previous session instead of creating a fresh one.
*   **#75899 [OPEN] Unbindable Left Arrow Key:** The left arrow key in the TUI unexpectedly navigates to the agents screen and is not rebindable, breaking the main session view.
*   **#83364 [OPEN] WebSearch HTTP 400 on Opus 5:** A regression where WebSearch calls fail with HTTP 400 when session effort is set to `xhigh` or `max` on Opus 5.
*   **#71700 [OPEN] Kitty Terminal Protocol:** The keyboard protocol is gated on a terminal-name allow-list instead of the `CSI ? u` capability, incorrectly denying capable terminals like Alacritty.

## 4. Key PR Progress
*   **#85925 [CLOSED] Doc Link Cleanup:** Pointed remaining stale doc links (docs.claude.com) to the canonical code.claude.com targets in plugins and skills.
*   **#85822 [CLOSED] Plugin README Drift:** Fixed stale documentation links in example files and the plugins README.
*   **#57888 [CLOSED] Python False-Positive Fix:** Scoped the `child_process_exec` security reminder hook to JS/TS files only, stopping it from incorrectly flagging Python `asyncio.create_subprocess_exec`.
*   **#42996 [OPEN] MEP (Meat Puppet Elimination Protocol):** An ongoing PR proposing a self-enforcing pattern for eliminating context loss when switching machines or resuming sessions across different devices.
*   **#41611 [OPEN] Missing Source Code:** An open request to add the missing source code for Claude Code to the repository.

## 5. Feature Request Trends
*   **Linux Desktop Support:** A highly upvoted feature request for an official Linux build (Ubuntu LTS/Debian) for Claude Desktop.
*   **Agent Session Management:** A recurring theme is the need to mark agent sessions as "completed" or "dismissed" to clean up the agents view.
*   **Thinking Block UX:** Requests to make it easier to collapse expanded thinking blocks while preserving scroll position.
*   **On-Disk Transcripts:** A request to surface on-disk transcripts to enable cross-machine session continuity.
*   **MCP Annotation Support:** A feature request to honor `MCP.Annotations.Audience` on tool-result content blocks to handle long text bodies more gracefully.

## 6. Developer Pain Points
*   **Windows Stability:** Severe issues with GPU process crashes, MSIX repair loops, and the Browser pane crashing Electron.
*   **Model Picker Issues:** Confusion and bugs regarding the visibility of Opus 4.8 and 5 models, including missing 1M context options.
*   **TUI Navigation:** Broken keybindings (specifically left arrow) that force users out of their main session.
*   **Safeguard Blocks:** Frustration with inconsistent Cyber Verification Program approval status and safeguard blocks for legitimate organizations.
*   **Context Management:** Issues with prompt cache invalidation (triggered by `git status` changes) and worktree directory reuse.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-08-13

### 1. Today's Highlights
A significant release cycle is underway with the alpha release of `rust-v0.148.0-alpha.9`, signaling the transition to a new Rust-based architecture. Simultaneously, the development team has been aggressively unifying core infrastructure, closing a series of high-impact PRs related to session management, protocol dependencies, and thread usage tracking. However, the community is currently facing a wave of stability regressions, particularly surrounding Windows compatibility, IDE context integration, and session recovery.

### 2. Releases
*   **rust-v0.148.0-alpha.9**: A new alpha release has been published, marking continued progress on the Rust migration effort.

### 3. Hot Issues
1.  **[OPEN] CLI Auto-Resolve Timeout (#28969)**
    *   **Why it matters:** This is the most active issue with 70 comments and 194 likes. Users are frustrated by the "60-second auto-resolve" timeout in CLI mode, which interrupts workflows without a way to disable it.
2.  **[OPEN] Windows 10 Computer Use Screenshot Failure (#25178)**
    *   **Why it matters:** A critical regression affecting the "Computer Use" automation features on Windows 10 22H2. Users cannot capture screenshots, rendering the automation tool non-functional.
3.  **[OPEN] VS Code IDE Context Broken (#34920)**
    *   **Why it matters:** Multiple reports indicate that the "IDE Context" feature has silently failed or stopped working in recent extension builds (26.715.x), preventing the AI from seeing active files or selection.
4.  **[OPEN] Windows Desktop Crash Safety (#26990)**
    *   **Why it matters:** Users report that local state (pins, projects, config) is not crash-safe after a power loss, leading to data loss and configuration regressions.
5.  **[OPEN] VS Code Remote/WSL2 Context Issues (#35419, #34696)**
    *   **Why it matters:** Specific issues regarding context auto-disabling in WSL2 environments and missing `workspaceRoot` in recent builds highlight persistent struggles with remote development workflows.
6.  **[OPEN] Windows Computer Use EPERM Block (#37743)**
    *   **Why it matters:** Runtime blocking via `EPERM` and helper failures (`EnumWindows`) on Windows 25H2 are preventing the Computer Use feature from initializing correctly.
7.  **[OPEN] Composer Submit Timeout (#23644)**
    *   **Why it matters:** A recurring timeout issue when submitting messages after stale conversation state accumulates, requiring app restarts to clear.
8.  **[OPEN] Desktop "Unloaded Chat" Timeout (#37398)**
    *   **Why it matters:** Opening local chats that aren't currently loaded results in a ~5-second delay due to an owner-discovery timeout, impacting responsiveness.
9.  **[OPEN] TUI Scrollback Rows Disappearing (#30745)**
    *   **Why it matters:** A UI glitch in the Terminal User Interface (TUI) where finalized message rows vanish from the terminal scrollback during streaming.
10. **[OPEN] Excessive Full Screen Shots (#38263)**
    *   **Why it matters:** Users report that Computer Use is taking excessive full-screen screenshots, likely due to a logic error in the screenshot capture loop.

### 4. Key PR Progress
1.  **[CLOSED] Represent Persisted World State as JSON Objects (#38274)**
    *   **Description:** Refactored the storage format for world state to use standard JSON objects, improving serialization and replay capabilities.
2.  **[CLOSED] Unify Turn Input Submission and Routing (#38275)**
    *   **Description:** Introduced `TurnInputRequest` to atomically start or steer turns, improving the reliability of input handling.
3.  **[CLOSED] Use Bounded Fallback Ports for Windows Proxies (#38265)**
    *   **Description:** Resolved port collision issues in Windows network configurations by implementing bounded fallback ranges for HTTP and SOCKS5 listeners.
4.  **[CLOSED] Add Thread Usage to TUI and `/status` (#38282, #38281)**
    *   **Description:** Added enterprise features to track estimated thread credits and costs, displaying them in the TUI status line and CLI status commands.
5.  **[CLOSED] Collect Plugin Metrics from Remote Exec (#38283)**
    *   **Description:** Fixed plugin measurement collection for remote executors, ensuring metrics are captured even when commands run in the background.
6.  **[CLOSED] Reconnect gRPC Sessions After Host Restarts (#38257)**
    *   **Description:** Implemented logic to automatically reopen cached code-mode sessions when the gRPC host restarts, maintaining session continuity.
7.  **[CLOSED] Use Protobuf's Bazel Proto Rule (#38280)**
    *   **Description:** Cleaned up build dependencies by moving to the standard `proto_library` from the `com_google_protobuf` repository.
8.  **[CLOSED] Stamp Conversation History with Creation Times (#38272)**
    *   **Description:** Added fractional Unix timestamps to conversation history items to improve debugging and audit trails.
9.  **[CLOSED] Unify External Authentication Provider Handling (#38258)**
    *   **Description:** Standardized error classification for external auth providers, allowing for dynamic provider replacement and clearer error reporting.
10. **[CLOSED] Collect Plugin Metrics from Unified Exec (#38253)**
    *   **Description:** Extended plugin measurement collection to cover "unified exec" commands, ensuring metrics are captured even if the turn completes before the command exits.

### 5. Feature Request Trends
*   **CLI Workflow Customization:** The most prominent trend is the demand for granular control over CLI behaviors, specifically the ability to disable the 60-second auto-resolve timeout and control autoscroll.
*   **Session Persistence & Recovery:** There is a heavy focus on ensuring that session state, context, and conversation history survive crashes, power loss, and app restarts without data loss.
*   **Remote/WSL2 Support:** Users are increasingly utilizing remote workflows (macOS host, WSL2 client) and requesting robust support for IDE context in these environments.

### 6. Developer Pain Points
*   **Windows Stability:** The "Windows OS" tag appears frequently, indicating a widespread struggle with Computer Use features, IDE context, and proxy connections on the latest Windows builds (25H2/26200).
*   **Context Disconnect:** The "IDE Context" feature is a primary source of frustration, frequently breaking in specific environments (VS Code, WSL2, Remote) and requiring manual intervention.
*   **Timeout & Performance:** Developers are experiencing frequent timeouts during composer submissions and chat loading, indicating backend latency or inefficient state discovery mechanisms.
*   **Session State Corruption:** Issues with threads resetting to zero, archived conversations reappearing, and local state regression suggest underlying database or file-system integrity problems.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-08-13
**Repo:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

## 1. Today's Highlights
The project has released **v0.56.0-nightly**, addressing critical infrastructure stability including capacity exhaustion retries and quota lookup fixes. Simultaneously, the team has prioritized security hardening, blocking variable expansion bypasses and resolving SSRF vulnerabilities in web fetching.

## 2. Releases
*   **v0.56.0-nightly.20260812.g5024443c7** (Released Today)
    *   **Core Fixes:** Resolved false model capacity exhaustion errors and fixed core quota lookup model mapping.
    *   **Evals:** Added a local report command and accompanying developer documentation for evaluation workflows.

## 3. Hot Issues
1.  **Subagent Recovery Failure (Priority P1)**
    *   **Issue:** #22323
    *   **Summary:** The `codebase_investigator` subagent incorrectly reports `status: "success"` and `Termination Reason: "GOAL"` even when it hits the MAX_TURNS limit, hiding the fact that it was interrupted.
    *   **Why it matters:** This creates a false sense of completion, preventing users from knowing when an investigation was actually cut short.
2.  **Generalist Agent Hangs**
    *   **Issue:** #21409
    *   **Summary:** The generalist agent hangs indefinitely, even for simple tasks like folder creation, when instructed to defer to sub-agents.
    *   **Why it matters:** A core agent mode is currently unreliable, causing significant workflow disruption.
3.  **Browser Agent Fails on Wayland**
    *   **Issue:** #21983
    *   **Summary:** The browser subagent fails specifically when running on the Wayland display server.
    *   **Why it matters:** Limits accessibility for Linux users on modern display servers.
4.  **Shell Command "Waiting Input" Hang**
    *   **Issue:** #25166
    *   **Summary:** After executing a shell command that does not require input, the CLI hangs showing "Awaiting user input".
    *   **Why it matters:** A critical UX blocker that stops execution flow unexpectedly.
5.  **Auto Memory Low-Signal Retry Loop**
    *   **Issue:** #26522
    *   **Summary:** Auto Memory retries low-signal sessions indefinitely, leaving the inbox in a stuck state.
    *   **Why it matters:** Prevents the memory system from cleaning up and can lead to index pollution.
6.  **Destructive Behavior in Agents**
    *   **Issue:** #22672
    *   **Summary:** Users report agents using dangerous commands like `git reset --force` or `--force` when safer alternatives exist.
    *   **Why it matters:** Safety and security concern regarding unmonitored agent actions.
7.  **Symlink Agent Recognition**
    *   **Issue:** #20079
    *   **Summary:** Agent files defined as symlinks in `~/.gemini/agents/` are not recognized.
    *   **Why it matters:** Limits user flexibility in managing agent configurations.
8.  **Agent Trajectory Visibility**
    *   **Issue:** #22598
    *   **Summary:** Subagent trajectories are saved but not easily accessible via `/chat share`.
    *   **Why it matters:** Makes debugging and evaluating agent behavior difficult for developers.
9.  **400 Error with >128 Tools**
    *   **Issue:** #24246
    *   **Summary:** The CLI encounters a 400 error when there are more than 128 tools available.
    *   **Why it matters:** Limits the scalability of the agent system as users add more integrations.
10. **AST-Aware File Reading**
    *   **Issue:** #22745
    *   **Summary:** An Epic requesting the investigation and implementation of AST-aware file reads to reduce token noise and improve precision.
    *   **Why it matters:** A major architectural improvement to make codebase navigation more efficient.

## 4. Key PR Progress
1.  **Fix Corrupt MCP Config (Priority P1)**
    *   **PR:** #28794
    *   **Summary:** Prevents fail-open behavior and data loss if `mcp-server-enablement.json` is corrupted. Previously, JSON parse failures were collapsed into an empty object, inadvertently enabling all servers.
2.  **Context-Aware Silent Retries**
    *   **PR:** #28790
    *   **Summary:** Implements intelligent retry policies for capacity exhaustion errors, allowing unattended CLI runs to automatically back off and retry without user intervention.
3.  **Security: Variable Expansion Bypass (GHSA-wpqr-6v78-jr5g)**
    *   **PR:** #28691
    *   **Summary:** Blocks `$VAR` and `${VAR}` variable expansion bypasses in bash and PowerShell substitution detection, closing a security vulnerability.
4.  **Security: SSRF Vulnerability Fix**
    *   **PR:** #28557
    *   **Summary:** Resolves a Server-Side Request Forgery (SSRF) vulnerability in `web-fetch.ts` by using asynchronous DNS resolution to properly block private IPs and internal metadata endpoints.
5.  **Allow Agents to Call Agents**
    *   **PR:** #28738
    *   **Summary:** Enables subagents to delegate to other subagents (or recurse), fixing a limitation where subagents could only call the generalist agent.
6.  **Gemini 3.6 Flash & 3.5 Flash-Lite Support**
    *   **PR:** #28673
    *   **Summary:** Adds configuration for the latest Gemini Flash models (3.6 and 3.5 Flash-Lite) with support for multimodal tool use and thinking capabilities.
7.  **Fix VSCode IDE Companion Hang**
    *   **PR:** #28789
    *   **Summary:** Fixes a resource leak and hang in the VSCode companion extension where `stop()` would hang indefinitely during active streaming sessions.
8.  **Changelogs for v0.55.1 & v0.56.0-Preview**
    *   **PR:** #28779, #28776
    *   **Summary:** Automated changelog generation for recent release versions to improve version tracking.
9.  **Terminal Resize Performance**
    *   **PR:** #28405
    *   **Summary:** Fixes a scroll position jump when scrolling up during content updates in the terminal interface.
10. **Fix Auto Memory Inbox**
    *   **PR:** #26523
    *   **Summary:** Fixes logic to surface or quarantine invalid memory patches in the Auto Memory inbox, preventing silent data loss.

## 5. Feature Request Trends
*   **Subagent Recursion & Delegation:** The community is heavily pushing for agents to be able to call other agents (recursion/delegation) rather than being limited to a single generalist agent.
*   **AST-Aware Code Navigation:** There is a strong desire to move from simple text/file reads to AST-aware (Abstract Syntax Tree) tools to reduce token usage and improve codebase mapping precision.
*   **Trajectory Visibility:** Users want better ways to visualize and share the internal steps taken by subagents during a task.

## 6. Developer Pain Points
*   **Intermittent Hangs:** A recurring pattern of agents hanging indefinitely (Generalist, Browser on Wayland, Shell execution) creates a poor user experience.
*   **Configuration & Permissions:** Issues with symlinks, corrupt config files, and agents running without permission post-update are causing friction.
*   **Memory System Stability:** The Auto Memory system is struggling with edge cases like low-signal retry loops and invalid patch handling.
*   **Tool Limits:** The system hits hard limits (400 tools) or performance bottlenecks (scrolling/flickering) as user complexity grows.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-08-13

## 1. Today's Highlights
*   **MCP Authentication & Lifecycle Fixes:** The team addressed critical authentication failures and process cleanup issues. Specifically, a fix was merged to prevent MCP OAuth silent refresh failures (AADSTS70011) and resolved issues where extension-host processes and Docker containers failed to terminate after session closure.
*   **Model Configuration Stability:** Multiple bugs regarding model selection and override were resolved, including the silent downgrade of subagent models and the exclusion of Claude models from the effective catalogue.
*   **Security & Governance:** A significant PR was merged to migrate internal automation away from the `pull_request_target` workflow signal to reduce potential attack surfaces.

## 2. Releases
*   **No new releases detected in the last 24 hours.**

## 3. Hot Issues
1.  **[#1730] SessionStart Hooks Not Firing (v0.0.420)**
    *   **Why it matters:** Users on Windows 11 (PowerShell 7) report that hooks defined in `.github/hooks/*.json` are not executing when a session starts.
    *   **Reaction:** 3 upvotes.
2.  **[#4328] Ctrl+H Behavior in WSL2**
    *   **Why it matters:** A regression where Ctrl+H (delete previous character) is misinterpreted as Ctrl+Backspace (delete word) under WSL2 due to a Windows Terminal environment variable leak.
    *   **Reaction:** 0 upvotes.
3.  **[#4390] Enabled Organization Models Missing**
    *   **Why it matters:** Organization-level enabled models (e.g., Claude Sonnet 5/Opus 5, Kimi K3) are not appearing in the CLI catalogue, preventing users from accessing their paid resources.
    *   **Reaction:** 4 upvotes.
4.  **[#4346] MCP Registry Policy 403 Error**
    *   **Why it matters:** GitHub Actions workflows using the default `GITHUB_TOKEN` are failing to fetch MCP registry policies, blocking all non-default MCP servers in CI environments.
    *   **Reaction:** 3 upvotes.
5.  **[#4432] Rubber-Duck Model Override Silencing**
    *   **Why it matters:** The `rubber-duck` sub-agent is ignoring the user's `model` argument and complementary strategy settings, preventing the intended cross-family model reviews.
    *   **Reaction:** 0 upvotes.
6.  **[#4468] Extension-Host Process Accumulation**
    *   **Why it matters:** When running `--server --stdio`, extension-host processes (4 per session) are not released upon session end, potentially exhausting system resources.
    *   **Reaction:** 0 upvotes.
7.  **[#4466] Remote MCP Hard Failure on Transient Errors**
    *   **Why it matters:** A transient 5xx error (e.g., 502) during the `initialize` handshake marks the server as failed permanently for the session, preventing retries and causing connection loss.
    *   **Reaction:** 0 upvotes.
8.  **[#4464] MCP OAuth Silent Refresh Failure**
    *   **Why it matters:** Remote HTTP MCP servers force repeated interactive logins because the silent refresh path fails with AADSTS70011 due to scope mixing bugs.
    *   **Reaction:** 0 upvotes.
9.  **[#4457] Spurious "Unknown Tool" Warnings**
    *   **Why it matters:** Cross-family sub-agents trigger false warnings about unknown tools because the tool registry validation logic is too strict.
    *   **Reaction:** 0 upvotes.
10. **[#4385] Shell Tasks Not Terminating**
    *   **Why it matters:** Background shell tasks started by models exit at the OS level but the CLI remains stuck waiting for them to finish.
    *   **Reaction:** 0 upvotes.

## 4. Key PR Progress
1.  **[PR #4449] Migrate PR Automation Security**
    *   **Summary:** Migrated internal invalid-label automation away from `pull_request_target` to use `pull_request` and direct issue closures. This reduces the attack surface by avoiding the elevated privileges of `target` without losing functionality.
2.  **[PR #4453] Ship It Patch 1**
    *   **Summary:** A maintenance patch (ship-it).
3.  **[PR #4452] Revert Copilot Fixes**
    *   **Summary:** A revert of 5 copilot-related fixes.

## 5. Feature Request Trends
*   **MCP & Authentication:** The community is actively debugging the integration of Remote OAuth MCP servers and the handling of transient network errors (5xx) during initialization.
*   **Model Governance:** There is significant friction regarding the visibility of organization-enabled models and the ability to override subagent models effectively.
*   **Process Management:** Users are requesting better lifecycle management for CLI sessions, specifically regarding the cleanup of background processes, Docker containers, and extension hosts.
*   **Shell Integration:** Feedback is pouring in regarding the stability of shell tasks (background processes) and specific keyboard shortcuts (Ctrl+H) in WSL2 environments.

## 6. Developer Pain Points
*   **Resource Leaks:** The accumulation of extension-host processes and Docker containers after session closure is a major resource management concern.
*   **Authentication Friction:** The inability to perform silent refresh for OAuth MCP servers leads to a poor UX with repeated login prompts.
*   **Tooling Stability:** Background tasks started by AI models failing to exit cleanly causes the CLI to hang indefinitely.
*   **Configuration Visibility:** Enabled organization models failing to appear in the selection menu prevents users from utilizing their subscriptions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-08-13

### 1. Today's Highlights
Activity remains focused on stabilization and bug fixing within the core engine. The community is actively debating the implementation of a persistent memory system to improve context retention across sessions, while two critical fixes regarding subprocess communication and string formatting have been merged.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
*   **[Feature Request] Persistent Memory System (#1283)**
    *   **Status:** Open | **Reaction:** 0 👍
    *   **Details:** A major enhancement request to implement a Memory System allowing the CLI to remember project patterns and user preferences across sessions. The proposal suggests a hybrid approach involving both automatic AI-managed notes and manual user-defined instructions.
    *   **Significance:** This is the most discussed issue currently, addressing a core need for developers who require continuity in their AI-assisted coding workflow. The discussion highlights a desire for the CLI to evolve from a session-based tool to a persistent assistant.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

### 4. Key PR Progress
*   **[Fix] String Formatting in Tool Calls (#2449)**
    *   **Status:** Open | **Reaction:** 0 👍
    *   **Details:** Addresses a bug in `shorten_middle` where newlines were not being stripped before length validation. This ensures that key argument summaries remain single-line, preventing potential rendering errors or truncation issues in the CLI output.
    *   **Significance:** Improves the reliability of the tool call rendering logic, ensuring clean and consistent output for developers parsing AI responses.
    *   **Link:** [MoonshotAI/kimi-cli PR #2449](https://github.com/MoonshotAI/kimi-cli/pull/2449)

*   **[Fix] BrokenPipeError Handling in SessionProcess (#2324)**
    *   **Status:** Open | **Reaction:** 0 👍
    *   **Details:** Adds a guard against `BrokenPipeError` in `SessionProcess.send_message`. The fix prevents crashes when the subprocess exits between the process start and the message write operation, ensuring graceful handling of communication failures.
    *   **Significance:** A critical stability fix that prevents the CLI from crashing unexpectedly during interactive sessions or message sending.
    *   **Link:** [MoonshotAI/kimi-cli PR #2324](https://github.com/MoonshotAI/kimi-cli/pull/2324)

### 5. Feature Request Trends
*   **Context & Memory Persistence:** There is a significant demand for the CLI to retain context and learn from previous sessions. The community is specifically requesting a structured memory system (both AI-managed and user-defined) to maintain project history and preferences.
*   **Process Communication Stability:** While less of a "feature" and more of a "must-have," the recurring requests for better error handling in subprocess communication (specifically handling BrokenPipeErrors) indicate a need for a more robust backend.

### 6. Developer Pain Points
*   **Output Integrity:** Developers are experiencing issues with multi-line text being improperly truncated in summaries, which disrupts the parsing of tool arguments.
*   **Process Lifecycle Management:** There is a recurring frustration with the CLI crashing when the underlying subprocess terminates unexpectedly during message transmission, leading to interrupted workflows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-08-13
**Source:** anomalyco/opencode

## 1. Today's Highlights
The community focused heavily on the stability of the v2 provider and session management. A significant bug was identified where the new `responses` API fails for DeepSeek v4 Pro on multi-turn requests, causing sessions to hang. Concurrently, the team addressed the fragmentation between the Desktop and CLI environments by aligning WSL server management to use the matching v2 CLI version.

## 2. Releases
**v1.18.17**
This release targets core stability and session management:
*   **Session Compaction:** Improved logic to keep complete recent turns and generate clearer summaries for smaller models.
*   **Gateway Support:** Added MERGE Gateway reasoning variants to ensure model options function correctly.
*   **Resilience:** Capped automatic session retries and added jitter to reduce repeated retry loops.

## 3. Hot Issues
1.  **[OPEN] deepseek-v4-pro on opencode-go /responses fails on any multi-turn request** (#42135)
    *   *Impact:* Critical runtime failure. Newer DeepSeek models using the `responses` API crash immediately after the first turn, breaking multi-turn conversations.
2.  **[CLOSED] Free usage exceeded. Add credits** (#14273)
    *   *Impact:* A long-standing user confusion regarding Zen balance vs. free tier limits persists. Users with balances report being capped at the 200-request limit.
3.  **[OPEN] Azure OpenAI large models (gpt-5.6-luna/sol, gpt-5.4, o3) hang in OpenCode** (#42147)
    *   *Impact:* Native Azure provider fails to stream responses for larger models, causing indefinite hangs.
4.  **[OPEN] MCP tools connected but not exposed to agent** (#33027)
    *   *Impact:* Functional MCP servers fail to make tools available to the AI agent, breaking external tool integration.
5.  **[OPEN] Instance bootstrap hangs forever (Linux)** (#41806)
    *   *Impact:* The TUI fails to initialize on Linux as spawned git children exit but are never reaped.
6.  **[OPEN] LLM retry has no max attempts** (#41848)
    *   *Impact:* Infinite retry loops occur during stream errors (e.g., DeepSeek errors), freezing the UI indefinitely.
7.  **[OPEN] Desktop fails to load sessions: no such column: project_id** (#42170)
    *   *Impact:* Database migration issue prevents the Desktop app from launching.
8.  **[OPEN] Models like Nemotron 3 Ultra are very slow** (#42168)
    *   *Impact:* Performance regression affecting specific NVIDIA models.
9.  **[OPEN] Copied to clipboard doesn't work** (#41470)
    *   *Impact:* UX bug in VSCode Server environments where copy actions fail silently.
10. **[OPEN] Free Usage Limit Exceeded on First Request** (#42128)
    *   *Impact:* Users encounter "Free usage exceeded" errors immediately upon starting a session, even without prior usage.

## 4. Key PR Progress
1.  **[OPEN] feat(opencode): add per-session budget limit** (#42202)
    *   Adds a configurable per-session cost cap with a UI widget in the sidebar to prevent runaway token costs.
2.  **[OPEN] fix(desktop): use matching v2 CLI in WSL** (#42199)
    *   Migrates Desktop WSL servers to use the v2 CLI and enforces strict version matching to prevent incompatibilities.
3.  **[CLOSED] [contributor] feat(tui): render Mermaid GitGraph diagrams** (#42179)
    *   Implements terminal-native rendering for Mermaid `gitGraph` fences, providing visual commit history directly in the interface.
4.  **[OPEN] [contributor] fix(tui): repair baseline unit failures** (#42198)
    *   Fixes rendering bugs in OpenTUI, specifically addressing Unicode source rendering and code fence cleanup.
5.  **[OPEN] [contributor] fix(client): prevent stale service replacement** (#42185)
    *   Prevents older clients from replacing newer managed background services, ensuring version consistency.
6.  **[CLOSED] [contributor] feat(catalog): click-to-annotate captures with GitHub issue handoff** (#42183)
    *   Adds an annotation feature to catalog captures that generates prefilled GitHub issues for specific terminal cells.
7.  **[OPEN] [contributor] fix(core): subagent sessions inherit ancestor deny rules** (#42174)
    *   Fixes permission logic in subagent sessions so they respect the deny rules configured in their parent sessions.
8.  **[CLOSED] [contributor] feat(catalog): auto-generated Open Graph cards** (#42201)
    *   Adds dynamic Open Graph image generation for catalog links, improving social sharing and previews.
9.  **[OPEN] [beta] refactor(app): align UI packages with solid best practices** (#41977)
    *   A large-scale UI refactor aiming to clean up prop passing and component structures in the SolidJS app.
10. **[OPEN] [contributor] fix(tui): retry migration status transport errors** (#42188)
    *   Ensures the migration status overlay continues polling even if there are temporary server transport drops.

## 5. Feature Request Trends
*   **Session Budgeting:** There is growing demand for granular control over session costs, leading to the implementation of per-session budget limits.
*   **Enhanced Visualization:** Users are requesting better diagram rendering (Mermaid) and improved terminal output handling (clickable paths).
*   **Permission & Security:** Increased requests for fine-grained trust configurations regarding MCP servers (Issue #40111) and stricter subagent rule inheritance (PR #42174).

## 6. Developer Pain Points
*   **Database & Migration Failures:** Frequent crashes due to column mismatches (`project_id`) and migration status hangs.
*   **Streaming Errors:** The system lacks robust handling for stream errors, leading to infinite loops or UI hangs.
*   **Billing & Limits:** Confusion remains regarding the separation between Zen balance and free-tier request caps, with paid users (OpenCode Go) reporting incorrect limits.
*   **WSL/Version Fragmentation:** Inconsistent behavior between Desktop and CLI environments, particularly regarding server version matching.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-08-13

## 1. Today's Highlights
No new releases were published in the last 24 hours. Development activity remains high, focusing heavily on TUI (Terminal User Interface) interactivity and local model integration. The community is actively resolving high-severity bugs regarding session persistence and CPU usage, while pushing new features like local Ollama support and mouse event handling.

## 2. Releases
**None** in the last 24 hours.

## 3. Hot Issues
*   **[6879] [OPEN] [bug] auto-compaction never triggers after context grows past 100%**
    *   **Impact:** This is a critical stability bug. A long-running session can exceed the context window (up to 373k tokens) without triggering automatic compaction, eventually causing the API to reject requests.
    *   **Link:** [GitHub Issue #6879](https://github.com/earendil-works/pi/issues/6879)
*   **[7730] [OPEN] [bug] High CPU usage on Mac OS with long session**
    *   **Impact:** Users on macOS report unbounded CPU usage (swinging 50-110%) during long sessions, making the tool resource-intensive.
    *   **Link:** [GitHub Issue #7730](https://github.com/earendil-works/pi/issues/7730)
*   **[8000] [OPEN] @ file autocomplete: direct children lose to deep nested matches**
    *   **Impact:** A frustrating UX issue where the autocomplete ranking prefers deep folder structures over direct siblings, breaking expected file navigation behavior.
    *   **Link:** [GitHub Issue #8000](https://github.com/earendil-works/pi/issues/8000)
*   **[8029] [OPEN] [bug] Very slow performance on moving in prompt editor**
    *   **Impact:** Performance degrades linearly with buffer size; scrolling through large text blocks (7000+ lines) results in millisecond-level delays per keystroke.
    *   **Link:** [GitHub Issue #8029](https://github.com/earendil-works/pi/issues/8029)
*   **[8055] [CLOSED] [untriaged] tui: Ambiguous-width chars break table alignment on CJK terminals**
    *   **Impact:** Characters like `①` or `±` render 2 columns wide on CJK terminals but are counted as 1, causing Markdown tables to break visually.
    *   **Link:** [GitHub Issue #8055](https://github.com/earendil-works/pi/issues/8055)
*   **[8054] [CLOSED] [untriaged] [feat request] cite-wsl-path-url in wt**
    *   **Impact:** Addresses a cross-platform workflow issue where Windows Terminal fails to open file links generated by Pi in WSL environments.
    *   **Link:** [GitHub Issue #8054](https://github.com/earendil-works/pi/issues/8054)
*   **[8048] [CLOSED] [bug, untriaged] Resume message does not include PI_CODING_AGENT_DIR override**
    *   **Impact:** A configuration regression that prevents resuming sessions when custom agent directories are set.
    *   **Link:** [GitHub Issue #8048](https://github.com/earendil-works/pi/issues/8048)
*   **[8053] [CLOSED] [untriaged] todo**
    *   **Impact:** A placeholder issue likely marking a future improvement.
    *   **Link:** [GitHub Issue #8053](https://github.com/earendil-works/pi/issues/8053)
*   **[8051] [CLOSED] [untriaged] Add option to show all llama.cpp models in /models**
    *   **Impact:** Requests a feature to list all available models in a directory, not just loaded ones, to facilitate auto-loading strategies.
    *   **Link:** [GitHub Issue #8051](https://github.com/earendil-works/pi/issues/8051)
*   **[8041] [OPEN] coding-agent: Render mermaid and LaTex in HTML exports to match TUI**
    *   **Impact:** A feature request to ensure HTML exports (for archiving/chats) render math and diagrams natively, rather than displaying raw text.
    *   **Link:** [GitHub Issue #8041](https://github.com/earendil-works/pi/issues/8041)

## 4. Key PR Progress
*   **[8049] [CLOSED] feat: use local Ollama models in pi via a local model proxy**
    *   **Summary:** Adds two dependency-free Node.js scripts (18+) to bridge local Ollama models with Pi. This allows Pi to consume local models without a full LLM infrastructure setup.
    *   **Link:** [GitHub PR #8049](https://github.com/earendil-works/pi/pull/8049)
*   **[8052] [CLOSED] fix(coding-agent): make session persistence transactional**
    *   **Summary:** Fixes a critical race condition where the in-memory session graph could become desynchronized with disk persistence if an `ENOSPC` error occurred, potentially leading to broken sessions on restart.
    *   **Link:** [GitHub PR #8052](https://github.com/earendil-works/pi/pull/8052)
*   **[7982] [CLOSED] fix(coding-agent): preserve usage in streaming events**
    *   **Summary:** Resolves a regression in v0.84.0 where streaming usage metrics were accidentally stripped from wire protocol events.
    *   **Link:** [GitHub PR #7982](https://github.com/earendil-works/pi/pull/7982)
*   **[8037] [CLOSED] feat(tui): dispatch mouse events to components via onMouse**
    *   **Summary:** Implements the mouse event handling hook (from Issue #7683) to allow extension widgets to receive mouse events in fullscreen TUI mode, rather than having them swallowed by the viewport listener.
    *   **Link:** [GitHub PR #8037](https://github.com/earendil-works/pi/pull/8037)
*   **[8032] [OPEN] feat(tui): let components receive mouse events on their own rows**
    *   **Summary:** Continues the implementation of the `Component.onMouse` hook to support granular mouse event handling for custom UI components.
    *   **Link:** [GitHub PR #8032](https://github.com/earendil-works/pi/pull/8032)
*   **[8030] [CLOSED] feat(ai): add MiniMax image-to-image generation**
    *   **Summary:** Adds support for image-to-image generation through MiniMax's global and CN APIs, mapping image content to the `subject_reference` field.
    *   **Link:** [GitHub PR #8030](https://github.com/earendil-works/pi/pull/8030)
*   **[8014] [CLOSED] feat(ai): add synchronous speech generation**
    *   **Summary:** Completes the speech generation SDK path for regional endpoints, adding synchronous bearer-authenticated transport and status validation.
    *   **Link:** [GitHub PR #8014](https://github.com/earendil-works/pi/pull/8014)
*   **[8042] [CLOSED] feat(ai): add Grok 4.6**
    *   **Summary:** Adds xAI's Grok 4.6 model to the provider catalog, supporting various reasoning levels (low, medium, high, xhigh).
    *   **Link:** [GitHub PR #8042](https://github.com/earendil-works/pi/pull/8042)
*   **[8039] [CLOSED] feat: add add-local-model example extension**
    *   **Summary:** Provides a ready-to-use extension (`/add-local-model`) to help users dynamically register local LLM providers via `pi.registerProvider()`.
    *   **Link:** [GitHub PR #8039](https://github.com/earendil-works/pi/pull/8039)
*   **[8022] [CLOSED] fix: triggerTurn: false should not start turn**
    *   **Summary:** Fixes a logic bug where an `agent_end` handler sending a custom message with `{ triggerTurn: false }` was inadvertently consuming a second, unintended response.
    *   **Link:** [GitHub PR #8022](https://github.com/earendil-works/pi/pull/8022)

## 5. Feature Request Trends
*   **Local LLM Integration:** The community is increasingly interested in running models locally. Issues #8051 (llama.cpp listing) and the merged PR #8049 (Ollama proxy) highlight a strong demand for easier local model management and consumption.
*   **TUI Interactivity:** There is a concerted effort to make the TUI more "application-like." Mouse event handling (Issues #7683, PRs #8032, #8037) and custom component rendering are top priorities to improve the UX for terminal-based workflows.
*   **Export Capabilities:** Users want the HTML export feature to match the capabilities of the TUI. Specifically, rendering Mermaid diagrams and LaTeX equations in HTML exports (Issue #8041, PR #7956) is a frequent request.

## 6. Developer Pain Points
*   **Performance Degradation:** Large prompt buffers cause severe performance degradation. The linear increase in latency with text size (Issue #8029) is a major usability blocker for power users.
*   **Session Persistence:** There is a high sensitivity to session corruption. Bugs like #6879 (auto-compaction) and #8052 (transactional persistence) cause existential concerns about losing work during crashes or disk errors.
*   **Resource Management:** High CPU usage on macOS (Issue #7730) and potential memory leaks with large contexts are recurring complaints that affect the stability of the tool during long coding sessions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-08-13  
**Repository:** [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

### 1. Today's Highlights
The community focused on stabilizing the daemon and CLI, specifically addressing channel configuration failures and session management regressions. Significant effort was also directed at tightening security boundaries for Anthropic wire protocols and review contexts to prevent memory leaks and undefined behavior. Additionally, a new Desktop release v0.2.1 was deployed to stabilize transcript history pagination.

### 2. Releases
*   **desktop-v0.2.1:** Released to address stability in transcript history pagination within the web shell interface.

### 3. Hot Issues
1.  **[P2] Regression: Crash on image load since v0.21.2** ([#8957](https://github.com/QwenLM/qwen-code/issues/8957))
    *   **Why it matters:** Users report Qwen Code crashes instantly upon reading images, making the tool unusable following version 0.21.1.
2.  **[P2] Shell automation hangs on long tasks** ([#8963](https://github.com/Qwen-code/issues/8963))
    *   **Why it matters:** Users report that running Python scripts or long commands via the shell hangs indefinitely, prompting comparisons to competitors like Kimi Code.
3.  **[P1] Main CI E2E Tests Failure** ([#9015](https://github.com/QwenLM/qwen-code/issues/9015))
    *   **Why it matters:** A critical CI pipeline failure on the main branch is blocking automated testing, requiring immediate attention to ensure code quality.
4.  **[P1] Anthropic Wire Missing Stream Safety** ([#9005](https://github.com/QwenLM/qwen-code/issues/9005))
    *   **Why it matters:** A security vulnerability in the Anthropic wire protocol is missing protections that OpenAI has, potentially leading to undefined behavior during stream handling.
5.  **[P2] Vertex AI Authentication Failure** ([#9016](https://github.com/QwenLM/qwen-code/issues/9016))
    *   **Why it matters:** Users cannot authenticate with Google Cloud Vertex AI using Application Default Credentials (ADC), forcing manual API key usage which disables the intended secure credential flow.
6.  **[P2] Shell ignores tool output threshold config** ([#8922](https://github.com/QwenLM/qwen-code/issues/8922))
    *   **Why it matters:** The configuration for `tools.truncateToolOutputThreshold` is being ignored by the Shell, reverting to a fixed 30,000-character budget regardless of user settings.
7.  **[P2] SDK rejects "auto" permission mode** ([#9002](https://github.com/QwenLM/qwen-code/issues/9002))
    *   **Why it matters:** A discrepancy exists where the CLI accepts `permission_mode="auto"` but the Python SDK rejects it during validation, breaking SDK integration.
8.  **[P2] Web Shell Session Name Reset** ([#8977](https://github.com/QwenLM/qwen-code/issues/8977))
    *   **Why it matters:** Manually named Web Shell sessions are incorrectly reset to auto-generated titles after a `/clear` command, causing confusion in session management.
9.  **[P2] Tmux Flickering on Linux** ([#8562](https://github.com/QwenLM/qwen-code/issues/8562))
    *   **Why it matters:** Users experiencing screen flickering specifically in tmux sessions over SSH report this as a significant UI regression.
10. **[P2] Duplicate Work in Multi-Agent Coordination** ([#8097](https://github.com/QwenLM/qwen-code/issues/8097))
    *   **Why it matters:** Background agents duplicate work and prematurely complete when communicating via `send_message`, breaking multi-agent workflows.

### 4. Key PR Progress
1.  **[PR #8978](https://github.com/QwenLM/qwen-code/pull/8978)**: Graceful no-op for empty channel sets in `qwen serve --channel all`. Fixes a daemon crash that occurred when no channels were configured.
2.  **[PR #8905](https://github.com/QwenLM/qwen-code/pull/8905)**: Adaptive growth of live-journal caps. The daemon now dynamically increases memory limits for sessions that are growing too large, preventing mid-turn data loss.
3.  **[PR #8874](https://github.com/QwenLM/qwen-code/pull/8874)**: Workspace file uploads in Web Shell. Users can now drop files directly into the composer or use the file panel for sequential uploads with conflict handling.
4.  **[PR #9020](https://github.com/QwenLM/qwen-code/pull/9020)**: Hardening the review layer gate. Closes the "inline-quotation gap" to ensure review outputs strictly adhere to CommonMark parsing rules.
5.  **[PR #9003](https://github.com/QwenLM/qwen-code/pull/9003)**: SDK support for "auto" permission mode. Aligns the Python and Java SDKs with the CLI and TypeScript SDK to accept `auto` as a valid permission mode.
6.  **[PR #8972](https://github.com/QwenLM/qwen-code/pull/8972)**: Workflow agent directory pinning. Allows workflow subagents to execute work in a pinned directory (git worktree) that outlives the default bounds.
7.  **[PR #9001](https://github.com/QwenLM/qwen-code/pull/9001)**: Cache downloaded linters on ECS runners. Optimizes CI performance by caching linting tool versions, reducing test flakiness caused by load sensitivity.
8.  **[PR #9022](https://github.com/QwenLM/qwen-code/pull/9022)**: Narrow repository context related paths. Reduces the scope of file scanning during code review to stay within file limits, improving performance.
9.  **[PR #9027](https://github.com/QwenLM/qwen-code/pull/9027)**: Drop AI template tells in unattributed reviews. Removes machine-generated prefixes from `/review` posts when attribution is disabled.
10. **[PR #9007](https://github.com/QwenLM/qwen-code/pull/9007)**: Bound ACP HTTP pre-attach buffers. Prevents memory exhaustion by capping HTTP buffers by bytes in the ACP module.

### 5. Feature Request Trends
*   **Autonomous Long-Running Tasks:** There is a strong demand for the tool to handle long-running scripts or background processes without hanging, with users requesting "no-brain acceptance modes."
*   **Review Attribution Control:** The community is actively discussing granular controls for review attribution and the removal of AI-generated formatting in code reviews.
*   **Memory Recall Improvements:** An ongoing RFC (Request for Comments) focuses on reliable auto-memory recall, specifically regarding timing, quality, and telemetry for memory management.

### 6. Developer Pain Points
*   **Session Management Instability:** Recurring issues with session resumption, transcript discrepancies, and Web Shell navigation are causing data loss and confusion.
*   **Configuration Misalignment:** Discrepancies between CLI and SDK configurations (e.g., permission modes, dynamic command settings) are hindering developer productivity.
*   **Output Handling:** The tool often fails to respect user-defined output truncation limits or crashes when processing complex streams (images, long tool outputs).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale Community Digest
**Date:** 2026-08-13

### 1. Today's Highlights
The project has shifted branding to **Codewhale**, with the legacy `deepseek-tui` package officially deprecated. Significant progress is being made on **EPIC-005**, a major structural refactoring to decompose the TUI command architecture. Additionally, a new **"Pin"** feature for Windows terminal windows has been integrated, allowing users to shrink and float their host terminal session.

### 2. Releases
*   **v0.9.6** (Latest)
    *   **Branding & Legacy:** The project is now branded as **Codewhale** (from Shannon Labs). The legacy npm package `deepseek-tui` is deprecated and will receive no further releases.
    *   **Identifier:** The new command and package names use the lowercase technical identifier `codewhale`.

### 3. Hot Issues
1.  **[OPEN] The Chinese Translation of "Constitution" (#4949)**
    *   *Why it matters:* A community debate has arisen regarding the translation of the "Constitution" file. The author changed it from "协作准则" (Cooperation Guidelines) to "宪法" (Constitution) to reflect its foundational authority, but this has sparked concern about potential political sensitivity in the Chinese context.
    *   *Reaction:* The author is actively soliciting input from Chinese native speakers to determine the most appropriate and culturally sensitive translation.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/4949)

2.  **[OPEN] Regression: Auto-Review mode blocking destructive actions (#5323)**
    *   *Why it matters:* Users report a regression in v0.9.5 where Auto-Review mode has silently switched from auto-approving all tool calls to blocking every Bash call and write operation, requiring manual intervention for every action.
    *   *Reaction:* This is flagged as a release-blocker that disrupts the workflow automation users expect.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/5323)

3.  **[OPEN] Wrong deepseek completions url (#4683)**
    *   *Why it matters:* Users are experiencing flaky network errors when the tool tries to connect to the DeepSeek API. The error message indicates a malformed URL being generated (`api.deepse ▏ ek.com`).
    *   *Reaction:* This is a critical reliability issue affecting the tool's ability to fetch completions, particularly after long-running sessions.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/4683)

4.  **[CLOSED] Regression: output area doesn't fill wide terminals (#5322)**
    *   *Why it matters:* Following the v0.9 upgrade, the output area is capped at a fixed width instead of expanding to fill the terminal, creating unused whitespace on wide monitors.
    *   *Reaction:* Confirmed bug affecting TUI layout and readability.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/5322)

5.  **[CLOSED] API keys silently persist only in the working repo (#5047)**
    *   *Why it matters:* A critical security/UX issue was fixed where API keys were being saved locally in the repository's `.codewhale/config.toml` instead of a durable global store, potentially leaking keys in version control.
    *   *Reaction:* Resolved, but highlights the importance of secure credential management.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/5047)

6.  **[OPEN] Proposed 'stop' command (#4959)**
    *   *Why it matters:* When the model is in "YOLO" mode or autonomous workflow, simple commands like `+ stop` are ignored. Users need a robust way to interrupt the runtime or block mechanical tool-calls.
    *   *Reaction:* Requested for better control over long-running agent tasks.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/4959)

7.  **[OPEN] Web: finish the #4934 dictionary spine (#5337)**
    *   *Why it matters:* The project is migrating to a centralized dictionary spine for i18n to retire conditional `isZh` branches. This issue tracks the remaining web pages needing migration to the new dictionary pattern.
    *   *Reaction:* A technical debt cleanup effort to improve maintainability.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/5337)

8.  **[CLOSED] Switching providers can retain an unrelated default model (#5034)**
    *   *Why it matters:* When switching API providers (e.g., to OpenAI), the tool incorrectly retained the previous provider's default model (e.g., `gpt-5.5`), leading to potential routing errors.
    *   *Reaction:* Fixed, ensuring provider and model resolution are updated coherently.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/5034)

9.  **[CLOSED] v0.9.5: unified tasks surface (#5270)**
    *   *Why it matters:* v0.9.5 unified background shells, subagents, and workers into a single "Tasks" panel. This issue documented the goal of providing one operator-facing list of active background processes.
    *   *Reaction:* Successfully implemented to improve visibility of active workflows.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/5270)

10. **[OPEN] Multiple API Key Support (#5250)**
    *   *Why it matters:* Users utilizing multiple providers (e.g., DeepSeek and GLM) currently have to overwrite keys. They require separate storage for different providers to switch seamlessly.
    *   *Reaction:* A common UX friction point for multi-provider workflows.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/5250)

### 4. Key PR Progress
1.  **[OPEN] FEAT-014: Command contract crate boundary (#5328)**
    *   *Progress:* A major step in **EPIC-005**. This PR establishes the crate boundaries and shared types for extracting commands, preparing the architecture for the upcoming command migration.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/5328)

2.  **[OPEN] feat(tui): pin host terminal window (#5333)**
    *   *Progress:* Integrated community PR #5318. This feature allows users to "pin" the host terminal window (Windows) to the top of the screen in a 640x400 mini-window, useful for multitasking while the agent runs in the background.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/5333)

3.  **[CLOSED] fix(session): separate snapshot reads from crash recovery (#5330)**
    *   *Progress:* Fixed a crash recovery issue where snapshot reads conflicted with active tool calls. Added `load_session_snapshot` for safe side-effect-free reads and `recover_session_for_resume` for post-crash repair.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/5330)

4.  **[OPEN] feat(tui): interactive extensions manager (#5327)**
    *   *Progress:* Adds a localized interactive `/plugin` and `/plugins` command to manage extensions. It centralizes bundle lifecycle operations and marks the Marketplace boundary.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/5327)

5.  **[CLOSED] feat(config): register OrcaRouter as a named provider (#5321)**
    *   *Progress:* Added support for **OrcaRouter** (an OpenAI-compatible gateway) as a first-class provider in the config, allowing users to access 150+ models via a single `ORCAROUTER_API_KEY`.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/5321)

6.  **[CLOSED] fix(tui): copy messages without visual rails (#5331)**
    *   *Progress:* Fixed the "Copy message" context menu. It now copies the canonical source content instead of the rendered UI decorations (rails like `▏`), making copied text cleaner and more usable.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/5331)

7.  **[CLOSED] fix(mcp): omit nextCursor when there are no further pages (#5336)**
    *   *Progress:* Fixed an MCP (Model Context Protocol) compliance issue where `nextCursor` was being returned as `null` instead of a string or omitted, causing strict clients like Claude Code to reject the response.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/5336)

8.  **[CLOSED] fix(tui): move lru to 0.18 (#5329)**
    *   *Progress:* Fixed a critical security advisory (**RUSTSEC-2026-0253**). The project upgraded the `lru` crate to version 0.18 to prevent potential panic-unsafe operations and dangling pointers.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/5329)

9.  **[OPEN] feat(web): move the docs guide page onto the dictionary spine (#5338)**
    *   *Progress:* Part of the i18n refactoring (Issue #5337). This PR moves the docs guide page to use the new dictionary spine pattern, removing `isZh` ternaries from the page logic.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/5338)

10. **[OPEN] web: audit fixes — i18n parity, copy/spacing (#5326)**
    *   *Progress:* A maintainer-led polish pass over the community website. Fixes include i18n parity checks, spacing adjustments, and test fixes to ensure the web interface is consistent.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/5326)

### 5. Feature Request Trends
*   **Architecture Refactoring (EPIC-005):** The community is heavily focused on decomposing the monolithic TUI command structure into smaller, manageable crates. This is a massive engineering effort to improve code maintainability.
*   **i18n Standardization:** There is a strong push to remove conditional logic (`isZh` branches) in favor of a centralized dictionary spine to support better internationalization (i18n) across the project.
*   **Workflow Control:** Users are requesting better interruption mechanisms (like a `stop` command) and more granular control over agent autonomy to prevent runaway tool calls.

### 6. Developer Pain Points
*   **Credential Management:** Users struggle with saving multiple API keys for different providers and ensuring keys are stored securely in a global store rather than local repo files.
*   **UI/Copypaste UX:** The "Copy Message" feature historically included UI artifacts (rails/decorations), which has been a recurring complaint fixed in recent PRs.
*   **Layout Responsiveness:** The transition to v0.9 broke terminal layout, specifically the ability for the output area to expand on wide screens.
*   **Provider Switching Logic:** The tool often fails to reset the default model when switching providers, leading to routing errors.

</details>

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*