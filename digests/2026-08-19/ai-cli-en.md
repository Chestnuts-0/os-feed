# AI CLI Tools Community Digest 2026-08-19

> Generated: 2026-08-19 00:37 UTC | Tools covered: 9

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

**Cross-Tool Comparison Report: AI CLI Ecosystem Digest (2026-08-19)**

### 1. Ecosystem Overview
The AI CLI tools ecosystem is currently in a phase of intense convergence and maturation. While foundational capabilities (coding, session management) have stabilized, the landscape is rapidly evolving toward complex **multi-agent orchestration**, **MCP (Model Context Protocol) extensibility**, and **enterprise-grade security** (sandboxing, audit trails). A significant trend is the fragmentation of provider support, with tools like *OpenCode* and *Pi* focusing on local/self-hosted LLMs, while *Claude Code* and *Copilot CLI* double down on proprietary, high-cost API integrations. The industry is moving away from simple chatbots toward autonomous agents capable of complex workflows, project management integration (Linear/Atlassian), and rigorous safety guardrails.

### 2. Activity Comparison
*Data reflects the last 24 hours of activity.*

| Tool | Issues (Open/Hot) | PRs (Open/Key) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | High (Billing, macOS Cowork) | Low (Attribution) | **v2.1.235** (Today) |
| **OpenAI Codex** | High (Windows stability) | High (10+ Security/Reliability) | **v0.148.0** (RC) |
| **Gemini CLI** | High (P1 Hangs, Wayland) | High (Merged: Security, Eval) | **v0.56.0-nightly** |
| **GitHub Copilot CLI**| High (Sandboxing override) | Moderate (Marketplace UI) | **v1.0.81-1** |
| **Kimi Code CLI** | Low (1 Bug, 1 Showcase) | Low (Knowledge Plane) | **None** |
| **OpenCode** | High (Stuck sessions, DB Bloat)| Moderate (Fixes) | **None** |
| **Pi** | Low (Closed issues) | Moderate (Bedrock, Providers) | **None** |
| **Qwen Code** | High (API errors, Session) | High (Agent Board) | **v0.21.11-nightly** |
| **DeepSeek TUI** | High (CI, Rebranding) | High (TUI Decomposition) | **v0.9.9** (Rebrand) |

### 3. Shared Feature Directions
*   **MCP & Tool Management:** Almost every tool is struggling with or implementing **MCP (Model Context Protocol)** stability. Issues range from server process leaks (Codex) to OAuth handshakes (Copilot) and namespace flattening (Gemini).
*   **Multi-Agent Architecture:** There is a universal push to move from single-threaded chat to **multi-agent workflows**. Tools like Qwen Code (Agent Board), Gemini CLI (Subagents), and OpenCode (Linear Agents) are actively defining protocols for leader-worker dynamics and cross-session collaboration.
*   **Granular Configuration:** Users demand "per-agent" or "per-mode" settings rather than global configurations. This includes per-agent reasoning effort (Copilot), per-mode default models (Copilot), and disabling specific slash commands (Pi).

### 4. Differentiation Analysis
*   **Provider Strategy:**
    *   *Proprietary Heavy:* **Claude Code** and **GitHub Copilot CLI** are tightly coupled to Anthropic/Gemini APIs, focusing on safety and enterprise billing.
    *   *Local/Self-Hosted:* **Pi**, **OpenCode**, and **DeepSeek TUI** prioritize OpenAI-compatible APIs and local LLMs (Ollama/vLLM), with a focus on self-hosting and cost control.
    *   *Multi-Provider:* **Qwen Code** and **Gemini CLI** act as flexible middlemen, supporting various backends while focusing on agent orchestration.
*   **Technical Approach:**
    *   *Rust/Ecosystem:* **DeepSeek TUI** and **Qwen Code** utilize Rust for performance and safety (critical for agents), while **Gemini CLI** leans into Go/NodeJS patterns.
    *   *Extension Architecture:* **Pi** and **DeepSeek TUI** are investing heavily in plugin systems and DI (Dependency Injection) to handle the complexity of expanding features without breaking existing workflows.

### 5. Community Momentum & Maturity
*   **Mature & Enterprise:** **Claude Code** and **GitHub Copilot CLI** have large, enterprise-focused communities dealing with complex billing, security compliance, and integration issues. They are highly polished but struggle with edge-case regressions on specific OS versions.
*   **High-Activity/Experimental:** **Qwen Code**, **OpenAI Codex**, and **Gemini CLI** show the highest volume of active development and PRs. They are rapidly iterating on core infrastructure (agent boards, evals) but suffer from higher instability (hangs, memory leaks).
*   **Niche/Specialized:** **Kimi Code CLI** is experiencing a "validation" phase with niche community benchmarks (quantitative finance), while **DeepSeek TUI** is undergoing a major architectural rebrand (CodeWhale) to stabilize long-term maintenance.

### 6. Trend Signals
*   **Autonomous "Continuous Loops":** Tools like **DeepSeek TUI** (CodeWhale) and **Copilot CLI** are adding features for infinite execution loops, signaling a shift from "interactive coding" to "autonomous agents."
*   **TUI vs. Desktop:** While **Claude Code** focuses on Desktop stability, **DeepSeek TUI** and **OpenAI Codex** are pushing the limits of Terminal UI (TUI) with complex crate decompositions and Markdown rendering.
*   **Context Management Crisis:** A recurring theme across **OpenCode** (DB bloat), **Qwen Code** (session ID wrapping), and **Gemini CLI** (context corruption) indicates that the industry is hitting token limit ceilings and needs better compaction strategies.
*   **Security Hardening:** There is a massive surge in security-focused PRs (Guardian V2, OAuth validation, Sandbox enforcement) across **OpenAI Codex**, **Copilot CLI**, and **Gemini CLI**, reflecting the need for safe, production-ready agent execution environments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** anthropics/skills (GitHub) | **Date:** 2026-08-19

---

## 1. Top Skills Ranking (Most Discussed)

| Rank | Skill Name | PR # | Functionality | Discussion Highlights | Status |
|------|------------|------|---------------|------------------------|--------|
| 1 | **Skill Quality & Security Analysis** | #83 | Meta-skills for auditing skill quality (structure, documentation, examples) and security vulnerabilities. | Adds two new meta-skills to the marketplace; evaluates skills across five dimensions including structure and documentation. | Open |
| 2 | **ServiceNow Platform Skill** | #568 | Comprehensive platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, and IntegrationHub. | Broad scope aiming to be a "platform assistant" rather than narrow scripting helper. Last updated 2026-08-12. | Open |
| 3 | **Document Typography** | #514 | Typographic quality control for AI-generated documents (orphan word wrap, widow paragraphs, numbering alignment). | Targets common document issues affecting every Claude output; rarely requested by users but critical for quality. | Open |
| 4 | **ODT (OpenDocument) Skill** | #486 | Create, fill, read, or convert OpenDocument Format files (.odt, .ods) to HTML. | Triggered by mentions of ODT, ODS, ODF, OpenDocument, or LibreOffice documents. | Open |
| 5 | **Testing Patterns Skill** | #723 | Full testing stack coverage: philosophy, unit testing (AAA pattern), React component testing, and more. | Comprehensive testing patterns skill covering full testing stack. | Open |
| 6 | **Retro Game Development (Pyxel)** | #525 | Pyxel-mcp skill for retro/pixel-art/8-bit game development with Python. | Workflow includes write → run_and_capture → inspect → iterate cycles. | Open |
| 7 | **Frontend Design Clarity** | #210 | Improved clarity and actionability for frontend-design skill. | Revised to ensure instructions are actionable within a single conversation. | Open |

---

## 2. Community Demand Trends

Based on the Issues data, the community is actively demanding Skills in the following areas:

*   **Workflow Automation & Sharing:** High demand for org-wide skill sharing (Issue #228) to streamline internal collaboration and eliminate manual file transfers.
*   **Quality Assurance & Security:** Strong focus on skills that can self-audit and detect vulnerabilities (Issue #492 highlights trust boundary abuse concerns; Issue #1385 proposes a "Reasoning Quality Gate Pipeline").
*   **Testing & Testing Patterns:** Growing need for comprehensive testing patterns skills, including unit testing, React testing, and testing philosophy (PR #723, Issue #202).
*   **Enterprise System Integration:** Demand for specific platform skills, particularly ServiceNow (PR #568, Issue #1175 regarding SharePoint/SPO).
*   **Context Window Management:** Concerns about skills that inject excessive tokens (Issue #1487) and the need for skills that help manage context efficiently.
*   **File Format Handling:** Active development and discussion around advanced document handling skills, including DOCX, ODT, and PDF (PRs #541, #486, #538).

---

## 3. High-Potential Pending Skills

These are active PRs with recent updates and no merged status, indicating they are likely to land soon:

*   **Self-Audit Skill (v1.3.0):** PR #1367 (Updated 2026-07-02). A mechanical verification + four-dimension reasoning quality gate that audits AI output before delivery.
*   **UIZZE Partner Skill:** PR #1595 (Updated 2026-08-17). Adds a free anti-UI-slop skill to the Partner Skills section.
*   **ServiceNow Skill:** PR #568 (Updated 2026-08-12). Comprehensive platform assistant covering multiple ServiceNow domains.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **high-quality, enterprise-grade platform skills and meta-tools** that provide robust, self-contained workflows for complex domains like ServiceNow, document processing, and system auditing, rather than general-purpose coding assistants.

---

# Claude Code Community Digest
**Date:** 2026-08-19

## 1. Today's Highlights
A minor update (v2.1.235) introduces a spellcheck feature using system dictionaries, while a significant billing incident regarding overcharges continues to generate high community engagement. Additionally, several critical regressions in the Cowork feature for macOS users have been reported.

## 2. Releases
**v2.1.235** (Released Today)
*   **Spellcheck:** Added an optional `spellcheck` setting that underlines misspelled words in the prompt input using `aspell`, `hunspell`, or `ispell`.
*   **Bug Fixes:** Fixed whole-prompt-cache invalidation issues when language servers disconnect or reconnect mid-session.

## 3. Hot Issues
**Billing & Accounts**
*   **#84352** (121 comments): A persistent bug where Cyber Verification Program (CVP)-approved organizations are still receiving cyber-safeguard blocks, despite portal status showing "Under review."
*   **#81703** (12 comments): Report on the July 17 mass billing incident where usage credits were charged despite plan allowance, resulting in disputed auto-recharges.
*   **#83062** (1 comment): An incident involving $995.67 in auto-recharges for individual-plan users after limits reset.

**Desktop App Stability (Windows)**
*   **#76357** (26 comments): A recurring Windows MSIX update failure where the app is "unlaunchable until reboot" due to file locking issues.
*   **#73107** (4 comments): A specific failure mode after package upgrades where orphaned elevated child processes prevent the AppX container from starting.

**Cowork Feature (macOS Regressions)**
*   **#87503** (11 comments): Cowork VM connection timeout on Intel Macs after updating to 1.32352.0.
*   **#87512** (10 comments): Guest kernel fails to enumerate NVMe disks on Intel Macs, causing hangs after `Run /init`.
*   **#87759** (1 comment): VM fails to boot on Intel Mac after update to 1.32352.1; kernel halts shortly after startup.
*   **#87642** (1 comment): Cowork workspace VM fails to complete `guest_vsock_connect` after the Aug 18 bundle update, with an incorrect error blaming the VPN.

**IDE/Editor Experience**
*   **#32726** (14 comments): A popular feature request to prevent the VSCode panel from stealing focus when output is generated.

## 4. Key PR Progress
*   **#41611** (Author: tornikeo): Adding missing source attribution to Claude Code codebase. (Status: Open)

## 5. Feature Request Trends
*   **Model Fallback Configuration:** There is a strong push to make the safety-classifier fallback target configurable. Users want the chain to be **Fable 5 → Opus 5 → Opus 4.8** instead of skipping directly to Opus 4.8 for cybersecurity-flagged requests.
*   **VSCode UX:** Users continue to request better control over the VSCode panel's focus stealing behavior to maintain workflow continuity.

## 6. Developer Pain Points
*   **Billing Discrepancies:** Users are experiencing unexpected charges and unreconciled usage data, creating trust issues with the subscription management.
*   **macOS Cowork Instability:** The Cowork feature is currently experiencing a wave of regressions on Intel Macs, specifically around VM booting and disk enumeration.
*   **Windows Update Locking:** Windows users face frequent "file in use" errors that require manual reboots to resolve, suggesting a file locking or process isolation issue with MSIX packaging.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-08-19

### 1. Today's Highlights
The OpenAI Codex repository has seen significant momentum with the release of **v0.148.0**, introducing robust session management features like prompt drafting during TUI initialization and enhanced Markdown export capabilities. The development team has also aggressively addressed security and stability concerns, closing out 10 high-impact Pull Requests focused on Guardian V2 risk scoring, OAuth metadata validation, and agent role restrictions. Concurrently, the community has flagged critical performance and compatibility issues, particularly regarding Windows WSL integrations and MCP server resource leaks.

### 2. Releases
*   **rust-v0.148.0** (Release Candidate)
    *   **New Features:**
        *   **Export Conversations:** Added `/export` command to save complete TUI conversations to Markdown, supporting clipboard and file output.
        *   **Session Forking:** Introduced `codex exec fork` to create forked sessions, with capabilities to archive and restore sessions directly from the TUI resume picker.
        *   **Draft Prompts:** Ability to draft prompts while the TUI is initializing.

*   **rust-v0.148.0-alpha.23 & alpha.22**
    *   Standard pre-release updates (Release 0.148.0-alpha.23 and 0.148.0-alpha.22).

### 3. Hot Issues
*   [#39136] **[Windows] Browser Plugin Initialization Fails**
    *   **Why it matters:** This is currently the most active issue with 63 comments and 20 upvotes. It prevents the Codex in-app browser from functioning on Windows 11, blocking users from utilizing the browser tool within the desktop app.
    *   **URL:** [openai/codex Issue #39136](https://github.com/openai/codex/issues/39136)

*   [#32041] **[Linux] VS Code Extension Blank Webview**
    *   **Why it matters:** A persistent regression affecting the VS Code/Cursor extension on Linux. Version 26.5707.* opens a blank webview, while 26.5623 works but lacks Sol support.
    *   **URL:** [openai/codex Issue #32041](https://github.com/openai/codex/issues/32041)

*   [#20400] **[Auth] Feature Request: Multiple Named Accounts**
    *   **Why it matters:** Highly upvoted (107 likes) feature request. Users want to connect multiple separate accounts to a single app/connector for privacy boundaries, rather than just switching the active session account.
    *   **URL:** [openai/codex Issue #20400](https://github.com/openai/codex/issues/20400)

*   [#30408] **[MCP] Server Process Leaks (9+ GB RSS)**
    *   **Why it matters:** Critical performance bug where MCP server processes leak memory. The app-server spawns processes per thread but never cleans them up, leading to unbounded memory consumption.
    *   **URL:** [openai/codex Issue #30408](https://github.com/openai/codex/issues/30408)

*   [#25928] **[Extension] Submitted Prompts Randomly Disappear**
    *   **Why it matters:** Affects Cursor and VS Code users on Windows where the queue logic fails to keep prompts in the system.
    *   **URL:** [openai/codex Issue #25928](https://github.com/openai/codex/issues/25928)

*   [#35119] **[Windows/WSL] Git Unavailable Error**
    *   **Why it matters:** Version 26.721.3404 incorrectly marks valid WSL repositories as non-Git, breaking repository operations in the WSL2 environment.
    *   **URL:** [openai/codex Issue #35119](https://github.com/openai/codex/issues/35119)

*   [#2880] **[TUI] Copy/Export Message as Markdown**
    *   **Why it matters:** A closed but popular issue (#2880) regarding the inability to copy/export messages as Markdown for documentation purposes.
    *   **URL:** [openai/codex Issue #2880](https://github.com/openai/codex/issues/2880)

*   [#23930] **[Subagent] Cards Remain Stuck After Close**
    *   **Why it matters:** UI glitch where closed subagents remain visible in the UI even when the backend reports no active agent.
    *   **URL:** [openai/codex Issue #23930](https://github.com/openai/codex/issues/23930)

*   [#13270] **[Tool Calls] String Input Too Long Error**
    *   **Why it matters:** Technical limitation where input arguments exceed the 1MB limit (received 1.5MB), causing tool calls to fail.
    *   **URL:** [openai/codex Issue #13270](https://github.com/openai/codex/issues/13270)

*   [#37104] **[Windows] Integrated Terminal Silent Failure**
    *   **Why it matters:** Terminal and panel issues preventing WSL/PTY startup on Windows.
    *   **URL:** [openai/codex Issue #37104](https://github.com/openai/codex/issues/37104)

### 4. Key PR Progress
*   [#39322] **Enforce Workspace Restrictions for Header Authentication** (Closed)
    *   Validates externally supplied header credentials against configured workspace restrictions (ChatGPT Account ID), rejecting unauthorized access attempts.
*   [#39320] **Expand OAuth Metadata Redirect Test Coverage** (Closed)
    *   Enhanced security testing to verify same-origin vs. cross-origin redirect handling and prevent redirect loops.
*   [#39319] **Add the Async User Message Tool** (Closed)
    *   Implements `send_user_message_async` to allow root agents to emit asynchronous messages without ending the current turn.
*   [#39316] **Support Edu Plus and Edu Pro Account Plans** (Closed)
    *   Added support for distinct education workspace plans in authentication and rate-limiting schemas.
*   [#39315] **Evict Guardian Transcript Entries** (Closed)
    *   Optimized caching logic by replaying non-user transcript entries through a bounded buffer, improving cache stability.
*   [#39314] **Run Hooks with Captured Session Environment** (Closed)
    *   Ensures hook registries capture and reuse a stable snapshot of the process environment across configuration reloads.
*   [#39311] **Bind Unified Exec Approvals to Shell Executables** (Closed)
    *   Improved security by evaluating unfamiliar executables alongside their commands to prevent implicit trust.
*   [#39307] **Fail Closed on Guardian V2 Risk Scoring Errors** (Closed)
    *   Treats configuration and serialization errors as elevated risk, forcing a "fail closed" state to prevent unsafe actions.
*   [#39304] **Keep Guardian v2 Risk Scores in Memory** (Closed)
    *   Removes the writing of risk scores to rollout history and resets scores for resumed/forked threads.
*   [#39301] **Prevent Node REPL Auth Tokens from Reaching Child Processes** (Closed)
    *   Removes `NODE_REPL_AUTH_TOKEN` from the environment to prevent sensitive credentials from leaking to child processes.

### 5. Feature Request Trends
*   **Multi-Account Management:** There is a strong demand for a "multi-account" feature within a single app session to maintain privacy boundaries and context switching without logging out.
*   **Session Management & Export:** Users frequently request robust ways to manage, archive, and export conversation history (specifically as Markdown) for documentation purposes.
*   **MCP Tool Visibility:** There are requests to flatten namespace tool specs for custom model backends (like llama.cpp) to make MCP tools easier to call.

### 6. Developer Pain Points
*   **Windows Stability:** The Windows ecosystem is experiencing the highest density of issues, including browser plugin failures, WSL Git detection errors, and terminal silent failures.
*   **Resource Leaks:** The MCP server architecture is causing significant memory leaks (9GB RSS) due to improper process cleanup in thread management.
*   **Extension Regression:** The VS Code/Cursor extension is suffering from regressions (blank webviews, disappearing prompts) that affect the core developer workflow on Linux.
*   **Authentication Loops:** OAuth and token refresh mechanisms are failing to surface re-authentication errors correctly, causing infinite retry loops.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** August 19, 2026

## 1. Today's Highlights
The team released a new nightly build (`v0.56.0-nightly.20260818`) focused on stabilizing the SSR Agent and security hardening. Simultaneously, the project is tackling a surge of high-priority bugs related to agent hang-ups, shell execution failures, and context management, alongside significant efforts to evaluate agent behavior rigorously.

## 2. Releases
**v0.56.0-nightly.20260818.g194edea47**
This nightly release consolidates several critical fixes from the last 24 hours:
*   **SSR Agent Stability:** Fixed privacy notice wording and resolved TypeScript strict-null errors in integration tests.
*   **Security & Reliability:** Improved subprocess execution security to prevent token leaks and handled OAuth callback timeouts gracefully.
*   **Core Fixes:** Addressed false-positive loop detection and symlinked agent file recognition issues.

## 3. Hot Issues
*   **[Priority P1] Subagent Recovery Failure (#22323):** A critical bug where the `codebase_investigator` subagent incorrectly reports "GOAL" success immediately after hitting the MAX_TURNS limit, hiding the actual interruption. *Reaction: High concern as it masks critical failure states.*
*   **[Priority P1] Generalist Agent Hangs (#21409):** The agent hangs indefinitely when deferring to sub-agents or performing simple folder operations, with workarounds only available by disabling sub-agents entirely.
*   **[Priority P1] Shell Command Stuck State (#25166):** Users report the CLI hangs showing "Awaiting user input" long after simple shell commands have already completed execution.
*   **[Priority P1] Browser Agent Wayland Failure (#21983):** The browser subagent fails specifically when running on the Wayland display server, rendering it unusable for many Linux users.
*   **[Priority P2] AST-Aware Codebase Exploration (#19873):** A major enhancement request to leverage the model's native bash affinity using Zero-Dependency OS Sandboxing to improve codebase analysis efficiency.
*   **[Priority P2] Component Level Evaluations (#24353):** An Epic tracking the creation of "behavioral evals" tests to validate agent performance across 6 supported models.
*   **[Priority P2] Shell Execution Script Spawning (#23571):** Users report the model frequently generates temporary scripts in random directories, creating significant cleanup overhead.
*   **[Priority P2] Agent Destructive Behavior (#22672):** A request to improve safety mechanisms so the agent avoids destructive commands (like `git reset --force`) when safer alternatives exist.
*   **[Priority P2] Auto Memory Inbox Issues (#26523):** The memory system silently skips invalid patches, requiring manual intervention to quarantine corrupted data.
*   **[Priority P2] Tool Limit Errors (#24246):** The CLI crashes with a 400 error when more than 128 tools are available, lacking logic to scope tool usage intelligently.

## 4. Key PR Progress
*   **[Merged] SSR Agent Symlink Support (#28883):** Successfully resolved the issue where agent markdown files stored as symlinks in `~/.gemini/agents/` were not being recognized.
*   **[Merged] Subprocess Security Hardening (#28898):** Enhanced security for core orchestrator subprocesses and configuration ingestion to prevent sensitive token leakage.
*   **[Merged] Ghost Text Wrapping Fix (#28641):** Resolved an infinite loop in the input prompt when rendering narrow text (CJK/emoji), improving UX on small terminals.
*   **[Merged] Context Corruption & Quota Fallback (#28671):** Fixed a critical issue where context history could become corrupted during tool interruptions or quota errors.
*   **[Merged] Host Network Resolution for gVisor (#28869):** Fixed the VSCode extension companion failure when using `GEMINI_SANDBOX=runsc` by resolving TCP network access limitations.
*   **[Merged] Markdown Table Wrapping (#18240):** Added intelligent text wrapping capabilities to markdown tables in the CLI for better readability.
*   **[Open] Preserve Empty Text Turns (#28892):** Updated chat history validation to ensure turns with empty text but crucial structured payloads (like media) are preserved.
*   **[Open] Shell Execution Refactoring (#28862):** Working to remove `eslint-disable` directives and unsafe type assertions from `shellExecutionService` to clean up the codebase.
*   **[Open] Flash Model ID Handling (#28893):** Ensuring explicit Flash model IDs (e.g., `gemini-3.6-flash`) are preserved while allowing generic aliases.
*   **[Open] Eval Retry Rate Limiting (#28891):** Implementing logic to properly retry and handle 429 rate limit errors during evaluation runs.

## 5. Feature Request Trends
*   **AST-Aware Analysis:** The community is heavily invested in shifting from simple file reading to AST (Abstract Syntax Tree) aware tools to reduce token usage and improve precision.
*   **Robust Sandboxing:** There is a strong push to utilize the native bash affinity of Gemini models within secure, zero-dependency sandboxes to enable complex file operations.
*   **Enhanced Visibility:** Users are requesting better visibility into subagent trajectories and "self-awareness" regarding CLI flags and hotkeys to debug and control agents better.

## 6. Developer Pain Points
*   **Hangs and Deadlocks:** The most frequent complaint is the agent hanging indefinitely, particularly during shell execution or when using sub-agents, leaving users with no recourse but to kill the process.
*   **Context Bloat and Corruption:** Issues with context management (corruption, token bloat, and incorrect escape behavior) are frequent, disrupting long-running sessions.
*   **Safety and Destructive Actions:** Developers worry about the agent's propensity to use destructive commands (like force resets) in complex git workflows, requiring manual intervention.
*   **Tool Limitations:** The CLI struggles when the context exceeds 128 tools, failing to dynamically scope available tools effectively.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-08-19

## 1. Today's Highlights
The community is actively testing the latest v1.0.81-1 release, which introduces support for the new Gemini 3.7 Flash model and improvements to the Schedule Manager. However, a significant trend has emerged regarding the **Enforced Sandbox feature**: several critical issues have been filed over the last 24 hours suggesting that the latest version incorrectly forces sandboxing even when explicitly disabled by users, breaking core Git functionality.

## 2. Releases
### v1.0.81-1
*   **Added:**
    *   Support for **Gemini 3.7 Flash** model.
    *   Ability to open `settings.json` in your editor directly from `/sandbox` using `Ctrl+E`.
    *   Per-agent usage metrics in the `--usage-output-file` JSON output.
*   **Improved:**
    *   Use `x` to remove scheduled `/every` and `/after` prompts in the Schedule Manager.
*   **Fixed:**
    *   Resolved issues related to turning "allow-all" off (details truncated in source).

## 3. Hot Issues
1.  **[OPEN] Enabled organization models missing from catalogue** (#4390)
    *   **Why it matters:** Users with specific Anthropic models (Claude Sonnet 5/Opus 5) explicitly enabled by their organization report they are unavailable in the CLI, despite being enabled in the catalogue.
    *   **Reaction:** 10 comments, 7 👍.
2.  **[OPEN] Allow scrolling through the current conversation history** (#4313)
    *   **Why it matters:** A long-standing UX request to navigate the chat buffer using the mouse wheel or PageUp/PageDown.
    *   **Reaction:** 8 comments.
3.  **[OPEN] Sandbox config mismatch / forced sandboxing** (#4522, #4521, #4524)
    *   **Why it matters:** Multiple issues (10+) filed in 24 hours suggest v1.0.81-1 is overriding user settings (`sandbox.enabled=false`) and blocking Git access, severely impacting usability.
    *   **Reaction:** 5 👍 on #4522.
4.  **[OPEN] Custom Agent YAML Frontmatter Should Support Reasoning Effort** (#2904)
    *   **Why it matters:** Users want to fine-tune the "reasoning effort" level per individual agent file rather than setting it globally.
    *   **Reaction:** 20 👍 (High community interest).
5.  **[OPEN] Support per-mode default model configuration** (#2958)
    *   **Why it matters:** Allows users to specify different default models for "plan mode" vs "autopilot mode" for optimized workflows.
    *   **Reaction:** 16 👍.
6.  **[OPEN] Atlassian MCP OAuth authentication broken** (#4490)
    *   **Why it matters:** Regression in v1.0.80 breaking OAuth connections to Atlassian MCP servers due to RFC 8414 compliance checks.
7.  **[OPEN] Post-authentication MCP client rebuild leaves orphaned processes** (#4392)
    *   **Why it matters:** Startup logic rebuilds the MCP client after auth, leaving behind zombie `stdio` server processes that consume resources.
8.  **[OPEN] Environment footer stuck on "Loading:"** (#4206)
    *   **Why it matters:** UI gets stuck in a loading state indefinitely when the GitHub MCP handshake stalls under organization policy.
9.  **[OPEN] Built-in agents do not inherit custom instructions** (#1990)
    *   **Why it matters:** Built-in agents (explore, task) ignore custom system instructions, leading to inconsistent behavior.
    *   **Reaction:** 3 👍.
10. **[OPEN] 1.0.42 falsely reports registry-listed custom MCP servers as blocked** (#3162)
    *   **Why it matters:** False negatives in policy validation for registered MCP servers.

## 4. Key PR Progress
1.  **ViewSonic monitor** (#3163)
    *   Adds monitor functionality for previous issues #2591, #3561, #3559. Includes a GitHub Action runner.
2.  **[OPEN] Add search/filter support to plugin marketplace browse command** (#4523)
    *   Adds interactive search input to the marketplace browse command to handle the growing list of plugins.

## 5. Feature Request Trends
*   **Granular Configuration:** The most requested feature is moving away from global settings to granular configuration—specifically **per-agent settings** (reasoning effort, models) and **per-mode settings** (plan vs. autopilot).
*   **MCP Ecosystem Stability:** There is high demand for better stability in the Model Context Protocol (MCP) integration, specifically regarding OAuth handshakes, server process management (leaks), and tool availability.
*   **Enhanced UX:** Users are asking for better navigation controls (scrolling history) and clearer feedback states (loading indicators).

## 6. Developer Pain Points
*   **Sandboxing Overreach:** The most critical pain point currently is the **Enforced Sandbox** implementation. Developers are reporting that the sandbox cannot be disabled, Git commands are failing, and permissions are not being honored for JVM processes.
*   **Model Visibility:** Users struggle to see or use organization-specific models (BYOK/Org models) effectively.
*   **Configuration Persistence:** Issues with config files (like `AGENTS.md`) not reloading and manual session names being overwritten indicate configuration management is a friction point.
*   **MCP Tool Availability:** Third-party MCP servers (like Atlassian) show as connected in the UI but fail to provide tools in the CLI sessions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-08-19

### 1. Today's Highlights
The community has seen a surge in feedback regarding the Web UI's rendering stability for OpenAI-compatible providers. Additionally, there was positive community validation with a Bilibili quantitative trading creator sharing benchmarks showing K3 + Kimi Code successfully generating out-of-sample strategies. The maintainers are also actively integrating a new "knowledge plane" feature.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **#2607: Web UI Rendering Bug (OpenAI-Compatible Providers)**
    *   **Why it matters:** This is a critical UX bug affecting users who rely on Kimi Code via the Web UI with custom providers. Assistant messages stream correctly initially but break into "one-fragment-per-line" after tab switching or page reloads, ruining the readability of the chat interface.
    *   **Reaction:** 1 comment so far; no resolution yet.
    *   **Link:** [MoonshotAI/kimi-cli Issue #2607](https://github.com/MoonshotAI/kimi-cli/issues/2607)

*   **#2608: Community Benchmark Report (K3 + Kimi Code)**
    *   **Why it matters:** This highlights successful real-world application of the CLI in quantitative finance. A creator shared a full open-source report and video series demonstrating the tool's ability to generate complex strategies (e.g., ETH perpetual futures) from scratch.
    *   **Reaction:** Positive user showcase; no official maintainers' comments yet.
    *   **Link:** [MoonshotAI/kimi-cli Issue #2608](https://github.com/MoonshotAI/kimi-cli/issues/2608)

### 4. Key PR Progress
*   **#2606: Dev/knowledge plane (Open)**
    *   **Description:** A new feature branch is being developed to introduce a "knowledge plane" to the development workflow. This suggests an effort to improve how context, documentation, or external knowledge bases are integrated into the CLI's reasoning capabilities.
    *   **Status:** Open for discussion.
    *   **Link:** [MoonshotAI/kimi-cli PR #2606](https://github.com/MoonshotAI/kimi-cli/pull/2606)

*   **#848: Fix SSH Failures (Closed)**
    *   **Description:** A fix was implemented to properly log SSH connection failures when the feature is enabled. This ensures better debugging capabilities for users relying on remote execution.
    *   **Status:** Closed.
    *   **Link:** [MoonshotAI/kimi-cli PR #848](https://github.com/MoonshotAI/kimi-cli/pull/848)

### 5. Feature Request Trends
*   **Web UI Stability:** The most prominent trend is the demand for UI resilience. Developers are specifically asking for fixes that prevent message re-rendering artifacts (such as line-breaking) when switching tabs or reloading sessions, particularly for non-Kimi providers.

### 6. Developer Pain Points
*   **UI State Persistence:** Users are experiencing frustration when the chat interface fails to maintain its correct formatting state upon remounting (tab switching/reloading), forcing them to restart sessions to see clean output.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-08-19

## 1. Today's Highlights
No new releases were published in the last 24 hours. However, the community remains active with a focus on stabilizing the OpenCode Go subscription, resolving performance bottlenecks in the event database, and addressing UI responsiveness issues on various platforms. A significant bug regarding Qwen model sampling parameters was also resolved in the core engine.

## 2. Releases
**None** in the last 24 hours.

## 3. Hot Issues

1.  **[OPEN] Tool call succeeds but OC waits indefinitely (#43315)**
    *   *Why it matters:* Users are experiencing a critical blocking bug where the application fails to proceed after a tool execution completes successfully, rendering the session unusable.
2.  **[OPEN] Sessions permanently stuck during normal use (#43277)**
    *   *Why it matters:* A severe persistence bug where sessions refuse new messages and survive system reboots, making recovery impossible without manual intervention.
3.  **[OPEN] Message IDs wrapped on 2026-08-14 (#43303)**
    *   *Why it matters:* A system-wide ID rollover bug caused new messages to sort *before* old ones, resulting in history deletion, silenced sessions, and potential data loss.
4.  **[OPEN] OpenCode Go quota exhausted in ~20 minutes (#42935)**
    *   *Why it matters:* A severe caching/billing anomaly where DeepSeek V4 Flash cache reads dropped to zero, causing quota to deplete abnormally fast for active users.
5.  **[CLOSED] [FEATURE]: Linear Agent (#3787)**
    *   *Why it matters:* A highly requested feature to integrate Linear Agents for direct issue assignment, reflecting the growing demand for project management integration.
6.  **[OPEN] Performance issue: Context cache invalidation (#37489)**
    *   *Why it matters:* Affects users running local LLMs (vLLM/Ollama), causing significant slowdowns during context switching and compaction operations.
7.  **[OPEN] Excessive storage: event table grows to gigabytes (#41175)**
    *   *Why it matters:* The `event` table stores full message snapshots on every update (quadratic complexity), causing database bloat and performance degradation.
8.  **[OPEN] TUI scrolling behavior (#7648)**
    *   *Why it matters:* A persistent UX complaint regarding unwanted scrolling while trying to read streaming messages in the Terminal UI.
9.  **[OPEN] [FEATURE]: Add Qwen3.8-27B (#42729)**
    *   *Why it matters:* Users want access to specific open-weight models in the OpenCode Go subscription catalog.
10. **[OPEN] zen has balance USD 10, but keep saying Free usage exceeded (#43208)**
    *   *Why it matters:* A critical billing logic error where a paid Zen balance is not being recognized, blocking user access despite having funds.

## 4. Key PR Progress

1.  **[OPEN] fix(session): degrade undecodable image attachments (#43314)**
    *   *Summary:* Prevents the entire prompt from failing if a user uploads an unsupported image format (e.g., AVIF, HEIC), degrading it gracefully instead of crashing.
2.  **[CLOSED] fix(opencode): remove Qwen sampling defaults (#43310)**
    *   *Summary:* Removed hardcoded `temperature: 0.55` and `top_p: 1` for all Qwen models, allowing provider defaults to apply while maintaining plugin override capability.
3.  **[OPEN] fix(core): expose valid subagent IDs (#43282)**
    *   *Summary:* Fixes a bug where the `subagent` tool failed to list valid agent types, preventing users from launching new subagent conversations programmatically.
4.  **[OPEN] feat(opencode): make generated title length configurable (#43309)**
    *   *Summary:* Adds a `title_max_words` configuration option, allowing users to control how verbose the auto-generated titles are.
5.  **[OPEN] fix(app): limit prompt drag state to files (#43308)**
    *   *Summary:* Improves drag-and-drop UX by preventing text or non-file items from triggering the attachment handler, while keeping file-tree drags functional.
6.  **[OPEN] fix(app): show current worktree branch (#42978)**
    *   *Summary:* Ensures that manually created Git worktrees correctly display their branch names in the Desktop UI.
7.  **[OPEN] docs: add SuperCompress MCP server example (#43306)**
    *   *Summary:* Expands documentation for the MCP ecosystem with a new example for the SuperCompress server, aiding developers in setting up compression tools.
8.  **[OPEN] fix(core): resolve spawn completion on exit (#29831)**
    *   *Summary:* Fixes a Windows-specific hang where shell commands would finish but the process would appear stuck, preventing agents from proceeding.
9.  **[CLOSED] fix(core): drop undefined metadata values from permission requests (#37679)**
    *   *Summary:* Ensures that permission requests are clean by removing undefined values from metadata, preventing potential schema errors during file operations.
10. **[CLOSED] feat(cli): add saved remote servers (#37670)**
    *   *Summary:* Added CLI commands to manage named remote server profiles, improving workflow for users managing multiple server endpoints.

## 5. Feature Request Trends
*   **Model Expansion:** There is high demand for specific open-weight models like **Qwen3.8-27B** and new providers like **CommandCode**.
*   **Project Management Integration:** Users are increasingly requesting integrations with tools like **Linear** for automated issue management.
*   **Session Control:** A recurring theme is the need for finer control over sessions, specifically requesting `/resume` and `/pause` commands.
*   **Visual Customization:** Users want more granular control over the UI, such as preventing TUI scrolling and configuring auto-generated title lengths.

## 6. Developer Pain Points
*   **Quota & Billing:** There is significant confusion and frustration regarding OpenCode Go quota metering, with reports of "Free" caps appearing on paid accounts and mismatched cost statistics.
*   **Database Bloat:** The exponential growth of the `event` table due to full snapshot storage is a major performance concern for heavy users.
*   **Stability & Persistence:** The community is reporting critical bugs where sessions become "stuck" across reboots and IDs wrapping causing data loss.
*   **Local LLM Performance:** Users utilizing local inference engines (vLLM/Ollama) are experiencing severe context switching and compaction performance issues.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest
**Date:** 2026-08-19  
**Repository:** [badlogic/pi-mono](https://github.com/badlogic/pi-mono)

---

## 1. Today's Highlights

The Pi project is stabilizing its core infrastructure this week, with a significant focus on **agent reliability** and **provider integration**. A major breakthrough in agent resilience addresses the critical issue of infinite loops caused by stalled provider streams. Additionally, the team is enhancing the developer experience by introducing OpenAI-compatible API providers and a "disabledCommands" setting to manage built-in slash commands.

## 2. Releases

**No new releases detected in the last 24 hours.**

## 3. Hot Issues

1.  **[CLOSED] Agent loop hangs forever when a provider stream stalls** (#8331)
    *   *Why it matters:* This is a critical stability bug where the agent would freeze indefinitely during provider incidents (e.g., API overload) because the event stream never closed.
    *   *Reaction:* Addressed immediately by the PR #8330, which introduces a stream inactivity watchdog.
2.  **[CLOSED] Pi allows two processes to share one session file** (#8300)
    *   *Why it matters:* Allowed two instances of Pi to append to the same session file simultaneously, leading to divergent branches and cross-window message delivery.
    *   *Reaction:* High priority for users running multiple terminals or sessions.
3.  **[CLOSED] OpenAI client created with no timeout** (#8323)
    *   *Why it matters:* Local models running longer than 10 minutes (600s default) would be cut off mid-generation because no custom timeout was set.
    *   *Reaction:* Prevents unexpected truncation of long-running code generation tasks.
4.  **[CLOSED] find in Windows: dead process scanning massive directories** (#8282)
    *   *Why it matters:* Using the `find` command on directories with millions of files (like `C:\Windows`) caused the process to hang indefinitely and consume 100% CPU.
    *   *Reaction:* Community explicitly requested migration to `fd` in AGENTS.md; this highlights a need for better tool selection.
5.  **[CLOSED] TUI: full-screen flash when content above the viewport changes** (#8281)
    *   *Why it matters:* A visual glitch that causes the entire terminal screen to flash and clear/redraw constantly during long transcript interactions.
    *   *Reaction:* Distracting for users working in long-running sessions.
6.  **[CLOSED] read + edit on the same path: read reports 1-line EOF** (#8318)
    *   *Why it matters:* A race condition where an `edit` followed by a `read` on the same file would cause the `read` operation to fail, even though the file was updated.
    *   *Reaction:* Breaks tool orchestration flows for agents needing to verify file changes immediately.
7.  **[CLOSED] Preserve Bedrock redactedContent reasoning across turns** (#8315)
    *   *Why it matters:* AWS Bedrock Converse returns reasoning in an encrypted format (`redactedContent`) that was being ignored, losing valuable context.
    *   *Reaction:* Essential for maintaining context fidelity when using Bedrock providers.
8.  **[CLOSED] Pi silently fails over real network, only succeeds on 127.0.0.1** (#8286)
    *   *Why it matters:* Non-deterministic failures over real network paths (vs. loopback) with Ollama providers, making deployment unreliable.
    *   *Reaction:* Critical for users deploying Pi on remote servers or Docker containers.
9.  **[CLOSED] isRecoverableLength misses exact-limit truncation** (#8322)
    *   *Why it matters:* A logic error in the `overflow.ts` utility meant that hitting the exact `max_output_tokens` limit was incorrectly classified as non-recoverable.
    *   *Reaction:* Affects the agent's ability to handle token limits gracefully.
10. **[CLOSED] Tool result images never collapse** (#8304)
    *   *Why it matters:* Tool output images were visible even when collapsed, occupying unnecessary terminal space.
    *   *Reaction:* Improves UI cleanliness for agents that generate images.

## 4. Key PR Progress

1.  **[CLOSED] feat(coding-agent): stream inactivity watchdog** (#8330)
    *   *Summary:* Introduces a watchdog mechanism to detect stalled provider streams and timeout the agent loop, preventing infinite hangs.
2.  **[CLOSED] feat(coding-agent): add agent_recovery_exhausted extension hook** (#8316)
    *   *Summary:* Adds a public extension event allowing custom logic to intervene after native retry and overflow recovery are exhausted, enabling model switching.
3.  **[CLOSED] feat(coding-agent): add OpenAI-compatible API provider to /login flow** (#8320 / #8324)
    *   *Summary:* Adds a new synthetic provider type to the login flow, allowing users to add their own OpenAI-compatible endpoints (e.g., Ollama, local LLMs) with a simple UI form.
4.  **[CLOSED] feat(coding-agent): collapse tool result images until output is expanded** (#8303)
    *   *Summary:* Fixes the UI display of images in collapsed tool output to ensure they are hidden until explicitly expanded.
5.  **[CLOSED] fix(ai): anthropic fallback usage** (#8308)
    *   *Summary:* Corrects the calculation of API usage costs when Anthropic falls back to a different model (e.g., Opus 4-8 instead of Fable 5).
6.  **[CLOSED] feat(coding-agent): enable experimental cache-friendly compaction** (#8307)
    *   *Summary:* Optimizes the compaction process to reuse the current session's cache rather than making standalone requests, reducing cost and latency.
7.  **[CLOSED] feat(tui): yield long markdown rendering** (#8327)
    *   *Summary:* Improves TUI responsiveness by yielding control back to the event loop during long Markdown renders to prevent the terminal from freezing.
8.  **[CLOSED] fix(coding-agent): add `disabledCommands` setting** (#8326)
    *   *Summary:* Adds a `disabledCommands` setting to block built-in slash commands (like `/share` or `/export`) from being invoked.
9.  **[CLOSED] Revert "fix(ai): anthropic fallback usage"** (#8313)
    *   *Summary:* A revert of a previous fix for Anthropic fallback usage, likely due to an incomplete implementation in PR #8308.
10. **[OPEN] feat(ai): amazon bedrock mantle** (#8302)
    *   *Summary:* Work-in-progress support for Amazon Bedrock Mantle, the new API surface for GPT-5.x models, which is currently routed incorrectly through the Converse API.

## 5. Feature Request Trends

*   **Provider Abstraction:** The community is heavily requesting the ability to add custom OpenAI-compatible providers via a UI flow (Issue #8286, PR #8320).
*   **Slash Command Management:** There is a growing need to disable or hide built-in slash commands to prevent accidental uploads or data leakage (Issue #8325, PR #8326).
*   **Agent Recovery Hooks:** Users want more granular control over agent recovery strategies, specifically the ability to switch models after exhausting retries (Issue #8317).
*   **Tool Selection:** A recurring request involves switching from `find` to `fd` for file searching to prevent hanging on large directories (Issue #8282).

## 6. Developer Pain Points

*   **Stability/Deadlocks:** The most critical pain point remains the agent loop hanging during API outages (Issue #8331).
*   **Race Conditions:** File editing and reading operations on the same path often fail due to state inconsistency (Issue #8318).
*   **Session File Locking:** Lack of in-use detection allows multiple processes to corrupt session files (Issue #8300).
*   **Network Reliability:** Non-deterministic failures when connecting to remote Ollama providers make local dev setups feel "buggy" (Issue #8286).
*   **Windows Performance:** The npm installation process is significantly slower than the bundled binary due to Windows Defender scanning (Issue #8299).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest**
**Date:** 2026-08-19
**Source:** github.com/QwenLM/qwen-code

---

### 1. Today's Highlights
The Qwen Code repository saw a flurry of activity focused on **session management**, **multi-agent coordination**, and **performance monitoring**. The team released `v0.21.11-nightly.20260818`, introducing a live-session registry and improvements to daemon attachment. Concurrently, the development community is actively refining multi-agent workflows, particularly regarding peer-to-peer session collaboration and the resolution of "review storms" in the Autofix pipeline.

### 2. Releases
*   **v0.21.11-nightly.20260818.259951c53e** (Latest Nightly)
    *   **Changes:** Core feature addition of a live-session registry enabling `qwen sessions ps` commands. The daemon received updates for skill toggling. The release includes comprehensive end-to-end validation results for SWE-bench Verified and Terminal-Bench 2.0.

### 3. Hot Issues
Here are 10 noteworthy issues trending in the community:

1.  **API Error 400 InternalError.Algo.InvalidParameter (#656)**
    *   **Status:** Open | **Priority:** P1
    *   **Details:** A critical P1 bug causing API errors for every message sent. Users report this started suddenly during a session and affects the core functionality.
    *   *Link:* [QwenLM/qwen-code Issue #656](https://github.com/QwenLM/qwen-code/issues/656)
2.  **Team Member "Shutdown" False Positive (#9276)**
    *   **Status:** Open | **Priority:** P2
    *   **Details:** Team members cannot send ordinary messages to their leader; the system incorrectly treats them as shutdown requests. This breaks multi-agent task delegation.
    *   *Link:* [QwenLM/qwen-code Issue #9276](https://github.com/QwenLM/qwen-code/issues/9276)
3.  **WeChat Typing Indicator Expiry (#9353)**
    *   **Status:** Closed | **Priority:** P2
    *   **Details:** The typing indicator vanishes during long-running agent turns, breaking real-time user feedback in WeChat channels.
    *   *Link:* [QwenLM/qwen-code Issue #9353](https://github.com/QwenLM/qwen-code/issues/9353)
4.  **Cross-Session Messaging (#8724)**
    *   **Status:** Open | **Priority:** P2
    *   **Details:** An RFC for allowing Qwen Code sessions on the same machine to discover and message each other, enabling local peer collaboration without a central leader.
    *   *Link:* [QwenLM/qwen-code Issue #8724](https://github.com/QwenLM/qwen-code/issues/8724)
5.  **Autofix Review Storms & Runner Capacity Waste (#9296)**
    *   **Status:** Open | **Priority:** P1
    *   **Details:** An analysis of the Autofix pipeline reveals 59% of runs are cancelled. The issue highlights inefficiencies in handling closed PRs and duplicate address dispatch.
    *   *Link:* [QwenLM/qwen-code Issue #9296](https://github.com/QwenLM/qwen-code/issues/9296)
6.  **Manual Task Assignment Persistence Failure (#9282)**
    *   **Status:** Closed | **Priority:** P2
    *   **Details:** When a leader manually sets a task to `in_progress`, the update persists, but the idle teammate never receives a prompt because the auto-claim logic ignores owned tasks.
    *   *Link:* [QwenLM/qwen-code Issue #9282](https://github.com/QwenLM/qwen-code/issues/9282)
7.  **Agent Board & Session Collaboration RFC (#8718)**
    *   **Status:** Closed | **Priority:** P2
    *   **Details:** A major feature request for "Native coordination for independent Qwen sessions," proposing a path for leader-worker dynamics and structured result collection.
    *   *Link:* [QwenLM/qwen-code Issue #8718](https://github.com/QwenLM/qwen-code/issues/8718)
8.  **Session Auto-Deletion on Windows (#8400)**
    *   **Status:** Open | **Priority:** P1
    *   **Details:** Windows users report sessions silently disappearing after app restart due to workspace CWD mismatches in ACP session loading.
    *   *Link:* [QwenLM/qwen-code Issue #8400](https://github.com/QwenLM/qwen-code/issues/8400)
9.  **Artifact Panel Spam on Web Shell (#7427)**
    *   **Status:** Closed | **Priority:** P2
    *   **Details:** The artifact panel spams "Load artifacts failed: Failed to fetch" errors on automatic refresh, cluttering the UI.
    *   *Link:* [QwenLM/qwen-code Issue #7427](https://github.com/QwenLM/qwen-code/issues/7427)
10. **Desktop "Load Artifacts" Ambiguity (#9431)**
    *   **Status:** Open | **Priority:** P3
    *   **Details:** The `list_agents` tool returns "No background agents" even when named teammates are active, causing confusion about session state.
    *   *Link:* [QwenLM/qwen-code Issue #9431](https://github.com/QwenLM/qwen-code/issues/9431)

### 4. Key PR Progress
Here are 10 significant pull requests advancing the project:

1.  **feat: agent board — share work across independently started agents** (#9402)
    *   **Author:** yiliang114
    *   **Progress:** Open
    *   **Details:** A repurposed PR adding the core "Agent Board" feature, allowing work sharing across independently started agents. It corrects an earlier misconception about deleting agent-view code.
    *   *Link:* [QwenLM/qwen-code PR #9402](https://github.com/QwenLM/qwen-code/pull/9402)
2.  **feat(serve): Add live-state session activity watermark** (#9396)
    *   **Author:** doudouOUC
    *   **Progress:** Open
    *   **Details:** Implements a durable watermark for live session activity to improve the ordering and visibility of active sessions in the daemon.
    *   *Link:* [QwenLM/qwen-code PR #9396](https://github.com/QwenLM/qwen-code/pull/9396)
3.  **feat(providers): recommend the live model list in the setup wizard** (#9389)
    *   **Author:** qqqys
    *   **Progress:** Open
    *   **Details:** The provider setup wizard now queries the live model list via OpenAI-compatible APIs, ensuring users always see the most current models available.
    *   *Link:* [QwenLM/qwen-code PR #9389](https://github.com/QwenLM/qwen-code/pull/9389)
4.  **fix(core): isolate image payload eviction state** (#9423)
    *   **Author:** yiliang114
    *   **Progress:** Open
    *   **Details:** Ensures image payload eviction is consistent across durable history, outgoing requests, and fork snapshots to prevent visual or functional errors.
    *   *Link:* [QwenLM/qwen-code PR #9423](https://github.com/QwenLM/qwen-code/pull/9423)
5.  **fix(cli): surface the daemon duplicate tool-call breaker as a visible stop** (#9435)
    *   **Author:** doudouOUC
    *   **Progress:** Open
    *   **Details:** Makes the daemon's duplicate tool-call circuit breaker more visible to users by terminating the turn with a standard "loop-detected" error.
    *   *Link:* [QwenLM/qwen-code PR #9435](https://github.com/QwenLM/qwen-code/pull/9435)
6.  **fix(core): keep heredoc bodies out of permission rule splitting** (#9417)
    *   **Author:** he-yufeng
    *   **Progress:** Open
    *   **Details:** Fixes permission evaluation for shell commands containing heredocs by preventing them from being split into invalid segments.
    *   *Link:* [QwenLM/qwen-code PR #9417](https://github.com/QwenLM/qwen-code/pull/9417)
7.  **fix(cli): prevent /rewind from dropping conversation history after /compress-fast** (#9331)
    *   **Author:** yiliang114
    *   **Progress:** Open
    *   **Details:** Aligns `/rewind` behavior with `/compress-fast` by treating compression markers as summarizing boundaries, preserving history integrity.
    *   *Link:* [QwenLM/qwen-code PR #9331](https://github.com/QwenLM/qwen-code/pull/9331)
8.  **feat(scheduled-tasks): allow creating a task with an existing session** (#9361)
    *   **Author:** yiliang114
    *   **Progress:** Open
    *   **Details:** Allows users to bind scheduled tasks to a live, existing session rather than forcing a new session creation, improving workflow continuity.
    *   *Link:* [QwenLM/qwen-code PR #9361](https://github.com/QwenLM/qwen-code/pull/9361)
9.  **fix(dingtalk): parse forwarded chat records** (#9339)
    *   **Author:** qqqys
    *   **Progress:** Open
    *   **Details:** Enhances the DingTalk channel to properly parse forwarded chat record payloads, ensuring context is correctly passed to the agent.
    *   *Link:* [QwenLM/qwen-code PR #9339](https://github.com/QwenLM/qwen-code/pull/9339)
10. **fix(core): treat duplicate provider tool-call ids as replays only when arguments match** (#9436)
    *   **Author:** doudouOUC
    *   **Progress:** Open
    *   **Details:** Improves the safety of the duplicate tool-call guard by ensuring replays are only identified when the arguments match the original call.
    *   *Link:* [QwenLM/qwen-code PR #9436](https://github.com/QwenLM/qwen-code/pull/9436)

### 5. Feature Request Trends
The community is heavily focused on **Multi-Agent Architecture** and **Session State Management**.
*   **Peer Collaboration:** There is a strong push (Issue #8724, #9399) for sessions to discover and communicate with each other locally, moving beyond the current leader-worker model to allow ad-hoc peer-to-peer collaboration.
*   **Autonomous Coordination:** RFCs for "Native coordination" (#8718) and "Agent Board" (#9402) highlight a desire for a more explicit, structured way to manage multiple independent agents and their work sharing.
*   **Memory & Context:** There is continued interest in "Reliable auto-memory recall" (#7040) and "Cross-host chat transcript contracts" (#9354), indicating a need for better handling of long-term context across different platforms (VS Code, Desktop, Web).

### 6. Developer Pain Points
*   **API Stability:** The recurring "API Error 400" (#656) is a critical blocker affecting users' ability to use the tool.
*   **Session Persistence:** Users on Windows are experiencing silent data loss (#8400) and confusing UI states (#9431) regarding session recovery and background agent visibility.
*   **Tool/Command Confusion:** Issues around `/rewind` history loss (#9331) and incorrect permission handling for complex shell commands (heredocs) (#9417) suggest edge cases in the CLI logic that frustrate power users.
*   **Review Loop Efficiency:** The Autofix pipeline is consuming significant resources with high cancellation rates (#9296), pointing to a need for better workflow optimization in the review process.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-08-19
**Repository:** [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

---

## 1. Today's Highlights
The project has officially rebranded to **CodeWhale** with the release of **v0.9.9**, marking the retirement of the legacy `deepseek-tui` npm package in favor of the `codewhale` CLI. Development is heavily focused on the TUI (Terminal User Interface) architecture, specifically implementing a "color vocabulary" for the status bar and decomposing the crate structure for better maintainability. The team also made significant strides in localization and CI reliability.

## 2. Releases
*   **v0.9.9** ([PR #5499](https://github.com/Hmbown/CodeWhale/pull/5499))
    *   **Key Changes:**
        *   **Rebranding:** `Codewhale` is now the official product name; the legacy `deepseek-tui` npm package is deprecated.
        *   **TUI Fixes:** Narrow-terminal compact-row metrics are now fixed below 60 columns; strict rustdoc bare URL validation is enforced.
        *   **Stability:** Enhanced handling of SSE UTF-8 splits across HTTP/2 to prevent garbled text on macOS.

## 3. Hot Issues
*   **[EPIC-005: CodeWhale TUI Crate Decomposition](https://github.com/Hmbown/CodeWhale/issues/5316)** - *Status: Open*
    *   **Why it matters:** This is the umbrella Epic tracking the complete restructuring of the TUI codebase. It is the central blueprint for future architectural changes, ensuring the project remains maintainable as it scales.
*   **[Documentation: Formalize status-bar color grammar](https://github.com/Hmbown/CodeWhale/issues/5437)** - *Status: Open*
    *   **Why it matters:** Following a design review, the maintainer confirmed the current "purple" palette is intentional and correct. This issue solidifies the visual language of the TUI, preventing future aesthetic drift.
*   **[Bug: System prompt dropped after `/new`](https://github.com/Hmbown/CodeWhale/issues/5505)** - *Status: Closed*
    *   **Why it matters:** A critical bug was resolved where starting a new session would cause the model to lose its system prompt, forcing users to re-configure context manually.
*   **[Bug: Header status indicator broken](https://github.com/Hmbown/CodeWhale/issues/5512)** - *Status: Open*
    *   **Why it matters:** Since v0.9.7, the header indicator (showing status like `cw` or `whale`) has failed to render on Windows 11, breaking visual feedback for users.
*   **[CI: Bound release-candidate workflows](https://github.com/Hmbown/CodeWhale/issues/5496)** - *Status: Open*
    *   **Why it matters:** Addresses a major reliability risk where release jobs could hang indefinitely (up to 6 hours) due to uncapped timeouts, blocking downstream deployments.
*   **[Web: Dictionary spine migration](https://github.com/Hmbown/CodeWhale/issues/5337)** - *Status: Open*
    *   **Why it matters:** A massive cleanup effort to retire legacy `isZh` conditional branches and inline i18n modules, simplifying the codebase and improving i18n reliability.
*   **[Documentation: Full Chinese localization](https://github.com/Hmbown/CodeWhale/issues/5482)** - *Status: Open*
    *   **Why it matters:** With a growing Chinese user base, this epic seeks to localize the entire documentation tree to remove barriers for non-English speakers.
*   **[Enhancement: Continuous loop mode](https://github.com/Hmbown/CodeWhale/issues/5508)** - *Status: Open*
    *   **Why it matters:** A highly requested feature allowing AI agents to run in an infinite loop until manually interrupted, enabling more complex, autonomous workflows.
*   **[Bug: Durable execution stuck](https://github.com/Hmbown/CodeWhale/issues/5497)** - *Status: Open*
    *   **Why it matters:** Fixes a race condition where Task Manager workers could become permanently stuck if the runtime failed to emit a `turn.completed` event.
*   **[Release: Trusted Publishing](https://github.com/Hmbown/CodeWhale/issues/5299)** - *Status: Open*
    *   **Why it matters:** Attempts to automate the npm publication process (currently gated by manual login) to streamline the release pipeline.

## 4. Key PR Progress
*   **[feat(tui): Show repository context](https://github.com/Hmbown/CodeWhale/pull/5511)** - *Status: Open*
    *   **Summary:** Implements the approved status slice from #5437, visually displaying repository and worktree state (e.g., `repo/worktree · branch*`) directly in the TUI header.
*   **[fix(tui): Restore /title command](https://github.com/Hmbown/CodeWhale/pull/5509)** - *Status: Open*
    *   **Summary:** Reverts a previous merge that broke the `/title` command, restoring it as an independent terminal window title setter separate from `/rename`.
*   **[docs(readme): Restore star history](https://github.com/Hmbown/CodeWhale/pull/5510)** - *Status: Open*
    *   **Summary:** Replaces the blocked star history chart with a fan-out animation clip, restoring visual growth metrics to the README.
*   **[feat(tui): Command context adapters](https://github.com/Hmbown/CodeWhale/pull/5506)** - *Status: Open*
    *   **Summary:** **FEAT-015:** Builds DI (Dependency Injection) infrastructure to safely extract slash-command implementations, enabling incremental refactoring.
*   **[docs(i18n): Chinese docs Tier 1](https://github.com/Hmbown/CodeWhale/pull/5507)** - *Status: Open*
    *   **Summary:** Delivers the first tier of the localization epic, restructuring docs to use per-language folders and migrating existing Chinese translations.
*   **[feat(web): Dictionary spine migration](https://github.com/Hmbown/CodeWhale/pull/5504)** - *Status: Open*
    *   **Summary:** Completes the migration of `docs/hooks` and `docs/troubleshooting` to the new dictionary spine, eliminating redundant i18n ternary logic.
*   **[test(ci): Harden release gates](https://github.com/Hmbown/CodeWhale/pull/5500)** - *Status: Closed*
    *   **Summary:** Serializes telemetry contracts and introduces 10-second timeouts for dead runners, preventing CI pipelines from hanging indefinitely.
*   **[feat(tui): Configurable read budgets](https://github.com/Hmbown/CodeWhale/pull/5405)** - *Status: Closed*
    *   **Summary:** Allows self-hosted users to configure per-result context budgets, improving the handling of large files on local DeepSeek V4 instances.
*   **[fix(client): SSE UTF-8 split](https://github.com/Hmbown/CodeWhale/pull/5404)** - *Status: Closed*
    *   **Summary:** Fixes text corruption (garbled CJK characters) caused by HTTP/2 DATA frames splitting multi-byte UTF-8 characters during streaming.
*   **[feat(pricing): OrcaRouter billing fix](https://github.com/Hmbown/CodeWhale/pull/5493)** - *Status: Closed*
    *   **Summary:** Corrects the billing classification for OrcaRouter, ensuring it is billed as an aggregator rather than first-party PAYG, fixing cost reporting.

## 5. Feature Request Trends
*   **TUI Architecture & UX:** High demand for better visual feedback (status bars, headers) and architectural stability (crates decomposition, DI infrastructure).
*   **Workflow Automation:** Strong interest in advanced AI orchestration features, specifically the ability to run agents in **continuous loops** without manual intervention.
*   **Localization:** The community is actively pushing for comprehensive **Chinese documentation** to support the user base effectively.

## 6. Developer Pain Points
*   **CI/CD Reliability:** Recurring issues with **timed-out runners** and "dead" jobs that sit for hours, necessitating hard timeouts and trusted publishing.
*   **Text Streaming:** Garbled output on macOS due to **HTTP/2 buffer splitting** and encoding issues.
*   **Session State Loss:** Bugs where starting a new session (`/new`) fails to carry over system prompts or context.
*   **Build/Doc Errors:** Frequent failures in CI due to **rustdoc linting** (bare URLs) and formatting issues.

</details>

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*