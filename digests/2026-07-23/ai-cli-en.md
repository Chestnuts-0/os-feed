# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 01:50 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Report
**Date:** 2026-07-23
**Analyst:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The AI CLI ecosystem in July 2026 is characterized by a shift from basic code generation to complex, multi-agent orchestration and robust enterprise integration. Major platforms like Claude Code, OpenAI Codex, and Gemini are stabilizing their core agent architectures while grappling with significant regressions in permission systems and cross-platform stability (particularly Windows/WSL). Concurrently, open-source and specialized tools like OpenCode and Pi are focusing heavily on local provider autodiscovery, cost optimization, and granular user control, highlighting a market demand for transparency and autonomy beyond proprietary black boxes.

## 2. Activity Comparison

| Tool | Issues Count (Hot) | PR Count (Key Progress) | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 10 | **v2.1.218** (Stable) |
| **OpenAI Codex** | 10 | 10 | **v0.146.0-alpha.1-4** (Rapid Alpha Iteration) |
| **Gemini CLI** | 10 | 10 | **v0.52.0** / **v0.53.0-preview** |
| **GitHub Copilot CLI** | 10 | 1 | **v1.0.74-{1,2,3}** (Incremental Fixes) |
| **Kimi Code CLI** | 5 | 3 | No new release |
| **OpenCode** | 10 | 10 | No official release (Desktop v1.18.4 issues) |
| **Pi** | 10 | 10 | No new release |
| **Qwen Code** | 10 | 10 | **v0.0.0-benchmark-poc.20260722.1** (Internal POC) |
| **DeepSeek TUI** | 10 | 10 | No new release (v0.9.1 integration pending) |

## 3. Shared Feature Directions

*   **Granular Model & Cost Control:**
    *   *Tools:* Claude Code, GitHub Copilot CLI, Kimi Code CLI, OpenCode.
    *   *Need:* Users demand the ability to select specific models per task or sub-agent (e.g., cheap models for simple edits, expensive ones for reasoning) and configure context compaction thresholds to manage API costs.
*   **Multi-Agent Autonomy & Reliability:**
    *   *Tools:* Claude Code, Gemini CLI, OpenCode, Qwen Code.
    *   *Need:* Robust handling of sub-agents, including better recovery from hangs, clear completion states, and the ability to dismiss background tasks without cluttering the UI.
*   **Local Provider Integration:**
    *   *Tools:* OpenCode, Pi, Qwen Code.
    *   *Need:* Automatic discovery of local models (Ollama, LM Studio) and support for OpenAI-compatible endpoints to reduce dependency on cloud APIs.
*   **Cross-Platform Stability (Windows/WSL):**
    *   *Tools:* OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI, DeepSeek TUI.
    *   *Need:* Fixes for terminal rendering, path resolution, encoding errors, and sandbox crashes specifically on Windows and WSL environments.

## 4. Differentiation Analysis

*   **Proprietary Giants (Claude Code, OpenAI Codex, Gemini CLI):** Focus on seamless, high-fidelity code review and complex task execution. Their pain points revolve around internal consistency (permission bypasses, tool availability regressions) and desktop vs. CLI parity. They are pushing towards "background subagents" and automated triage.
*   **Enterprise-Integrated (GitHub Copilot CLI):** Prioritizes integration with GitHub workflows (PRs, issues) and enterprise observability (credit usage breakdowns). However, it suffers from severe platform-specific instability (Windows crashes, tmux issues).
*   **Open Source/Community-Driven (OpenCode, Pi, Qwen Code):** Emphasize configurability, local-first capabilities, and transparency. OpenCode focuses on theme/TUI improvements and local model autodiscovery. Pi focuses on provider flexibility (Bedrock, StepFun) and interruptible async operations. Qwen Code is optimizing cold-start performance and enterprise memory profiles.
*   **Specialized/Niche (Kimi Code CLI, DeepSeek TUI):** Kimi Code struggles with third-party API compatibility (schema sanitization), while DeepSeek TUI is maturing its skill management system but faces security debt and installer bugs.

## 5. Community Momentum & Maturity

*   **High Momentum/Rapid Iteration:** **OpenAI Codex** is releasing four alpha versions in 24 hours, indicating aggressive bug fixing and feature testing. **Claude Code** has high engagement on critical bugs (permissions, filesystem extensions), suggesting a large, active user base hitting edge cases in production.
*   **Maturing/Stabilizing:** **Gemini CLI** is balancing stable releases with preview features, showing a more measured approach. **OpenCode** shows strong community contribution activity (many PRs) but faces stability issues in its desktop client, indicating rapid growth outpacing QA.
*   **Niche/Developing:** **Kimi Code CLI** and **DeepSeek TUI** have fewer hot issues but face foundational compatibility problems (API schemas, installers), suggesting they are still refining their core infrastructure for broader adoption.

## 6. Trend Signals

*   **From "Chat" to "Orchestration":** The industry is moving past simple code completion. Features like "subagent recovery," "context compaction," and "multi-account isolation" indicate users are running complex, long-lived agent sessions that require enterprise-grade reliability and observability.
*   **Cost Transparency is Paramount:** Requests for per-agent credit breakdowns, configurable compaction thresholds, and local model autodiscovery signal that API costs are a primary driver for tool selection and configuration.
*   **Platform Fragmentation is a Critical Risk:** Recurring Windows/WSL bugs across multiple major tools (Codex, Copilot, Kimi, DeepSeek) suggest that cross-platform compatibility remains a significant technical hurdle. Developers should expect instability on non-Linux/macOS environments until these regressions are resolved.
*   **Security & Permission Fatigue:** Persistent issues with permission bypasses (Claude Code) and sandbox failures (Copilot, Codex) indicate that current security models are either too restrictive (blocking legitimate workflows) or too fragile (breaking easily). A more robust, user-friendly permission framework is needed.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-07-23  
**Source:** `anthropics/skills` Repository Analysis

## 1. Top Skills Ranking (Most Discussed PRs)

The following skills and improvements generated the highest community engagement based on comment volume and issue cross-references.

1.  **Self-Audit & Reasoning Quality Gate** (`#1367`)
    *   **Functionality:** A meta-skill that performs mechanical file verification followed by a four-dimension reasoning audit before delivering AI output.
    *   **Status:** Open
    *   **Discussion Highlight:** High interest in universal applicability across tech stacks; addresses the "hallucination of facts" vs. "hallucination of structure" gap.
    *   [View PR](https://github.com/anthropics/skills/pull/1367)

2.  **Skill Creator Evaluation Fix** (`#1298`)
    *   **Functionality:** Critical bug fix for `run_eval.py`, which was incorrectly reporting 0% recall for all skill descriptions, breaking the description optimization loop.
    *   **Status:** Open
    *   **Discussion Highlight:** Essential infrastructure fix; multiple independent reproductions confirmed the bug's severity. Enables accurate skill tuning.
    *   [View PR](https://github.com/anthropics/skills/pull/1298)

3.  **Document Typography Control** (`#514`)
    *   **Functionality:** Prevents typographic errors in generated documents, such as orphan words, widow paragraphs, and numbering misalignment.
    *   **Status:** Open
    *   **Discussion Highlight:** Addresses a pervasive pain point in professional document generation; users requested granular control over page layout aesthetics.
    *   [View PR](https://github.com/anthropics/skills/pull/514)

4.  **ODT Skill (OpenDocument Format)** (`#486`)
    *   **Functionality:** Enables creation, filling, reading, and conversion of ODT/ODS files, triggering on mentions of LibreOffice or ISO standard formats.
    *   **Status:** Open
    *   **Discussion Highlight:** Fills a gap for enterprise users reliant on open-source office suites rather than Microsoft Office formats.
    *   [View PR](https://github.com/anthropics/skills/pull/486)

5.  **Frontend Design Clarity Improvement** (`#210`)
    *   **Functionality:** Refines the `frontend-design` skill to ensure instructions are actionable within a single conversation context.
    *   **Status:** Open
    *   **Discussion Highlight:** Focuses on reducing token waste and improving instruction coherence for complex UI component generation.
    *   [View PR](https://github.com/anthropics/skills/pull/210)

6.  **Testing Patterns Skill** (`#723`)
    *   **Functionality:** Comprehensive testing guidance covering philosophy (Testing Trophy), unit testing (AAA pattern), and React component testing.
    *   **Status:** Open
    *   **Discussion Highlight:** Strong demand for standardized testing methodologies rather than ad-hoc test generation.
    *   [View PR](https://github.com/anthropics/skills/pull/723)

7.  **Color Expert Skill** (`#1302`)
    *   **Functionality:** Provides deep color knowledge including naming systems (ISCC-NBS, Munsell), color spaces (OKLCH, CAM16), and accessibility standards.
    *   **Status:** Open
    *   **Discussion Highlight:** Appeals to designers and frontend developers requiring precise, scientifically accurate color implementation.
    *   [View PR](https://github.com/anthropics/skills/pull/1302)

## 2. Community Demand Trends

Analysis of top issues reveals three primary demand vectors:

*   **Enterprise Security & Trust Boundaries:** Issue #492 highlights significant concern over namespace impersonation (`anthropic/` prefix abuse). Users demand strict verification mechanisms for community skills to prevent privilege escalation.
*   **Cross-Platform Compatibility (Windows):** Multiple high-comment issues (#1050, #1061, #1099, #1323) point to friction in using `skill-creator` tools on Windows due to subprocess handling, encoding (`cp1252`), and path resolution. There is strong demand for robust cross-platform CLI tooling.
*   **Organizational Workflow Integration:** Issue #228 and #189 indicate a need for centralized skill libraries and deduplication mechanisms. Teams want seamless sharing of skills within organizations (Slack/Teams integration) without manual file distribution.

## 3. High-Potential Pending Skills

These PRs have active discussion and address critical gaps, suggesting they may be merged soon pending final review:

*   **Docx Tracked Change Fix** (`#541`): Fixes document corruption when adding tracked changes to DOCX files with existing bookmarks. Critical for enterprise document workflows.
    *   [View PR](https://github.com/anthropics/skills/pull/541)
*   **YAML Validation Improvements** (`#539`): Adds pre-parse validation to catch unquoted special characters in skill descriptions, preventing silent YAML parsing failures.
    *   [View PR](https://github.com/anthropics/skills/pull/539)
*   **Retro Game Dev Skill** (`#525`): Introduces support for Pyxel-based retro game development, expanding creative coding capabilities.
    *   [View PR](https://github.com/anthropics/skills/pull/525)
*   **Compact Memory Skill** (Issue #1329): Proposal for symbolic notation to reduce context window usage in long-running agent sessions.
    *   [View Issue](https://github.com/anthropics/skills/issues/1329)

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **robust, enterprise-grade reliability**—specifically focusing on security trust boundaries, cross-platform CLI compatibility, and deterministic evaluation metrics for skill quality.

---

# Claude Code Community Digest
**Date:** 2026-07-23
**Source:** github.com/anthropics/claude-code

## 1. Today's Highlights
Claude Code v2.1.218 was released, introducing significant UX improvements for code review by shifting it to a background subagent and enhancing accessibility with screen-reader announcements for deletions. The community is currently grappling with widespread regressions in task tool availability across CLI and Desktop environments, alongside persistent permission bypass failures that have stalled for months. Documentation gaps regarding skills, subagents, and auto-mode permissions are generating a high volume of new issues, indicating a need for clearer guidance on recent feature updates.

## 2. Releases
**v2.1.218**
*   **Code Review Optimization:** The `/code-review` command now executes as a background subagent. This prevents review outputs from cluttering the main conversation thread and allows stacked slash commands to target the review process directly.
*   **Accessibility Improvements:** Added screen-reader announcements for deleted text during word (`Ctrl+W`, `Option+Delete`) and line (`Cmd+Backspace`) deletions.

## 3. Hot Issues
1.  **[BUG] macOS: Filesystem extension tools/call dispatch failure** [#80002](https://github.com/anthropics/claude-code/issues/80002)
    *   *Why it matters:* Critical bug preventing the first-party Filesystem extension from executing tools on macOS, despite successful listing. High engagement (56 comments).
2.  **[META] Bypass permissions mode is fundamentally broken** [#39523](https://github.com/anthropics/claude-code/issues/39523)
    *   *Why it matters:* Users report `bypassPermissions` has been non-functional since July 2025. This meta-issue highlights a 9-month unresolved trail affecting workflow automation.
3.  **[BUG] GitHub connector shows "Connected" but exposes no tools in Cowork** [#61682](https://github.com/anthropics/claude-code/issues/61682)
    *   *Why it matters:* Disables core collaboration features on Windows, rendering the GitHub integration useless despite appearing active.
4.  **[FEATURE] Desktop app: inject queued messages mid-task** [#71726](https://github.com/anthropics/claude-code/issues/71726)
    *   *Why it matters:* Highlights a parity gap between CLI (which supports steering via mid-task injection) and the Desktop app, which waits for turn completion.
5.  **[BUG] Remote Control never connects on Desktop** [#78933](https://github.com/anthropics/claude-code/issues/78933)
    *   *Why it matters:* Causes `session_url` undefined errors, blocking remote control functionality for desktop users.
6.  **[FEATURE] Mark agent session as completed/dismiss** [#66202](https://github.com/anthropics/claude-code/issues/66202)
    *   *Why it matters:* Users lack a way to clear finished background agents from the view, causing UI clutter and confusion.
7.  **[BUG] Fable 5 self-scoped verification hallucinations** [#80348](https://github.com/anthropics/claude-code/issues/80348)
    *   *Why it matters:* Reports the model confidently claiming changes were verified when they were not, undermining trust in automated verification loops.
8.  **[BUG] MCP navigate silently denies non-pre-approved domains** [#50842](https://github.com/anthropics/claude-code/issues/50842)
    *   *Why it matters:* No user-facing approval path exists for Chrome MCP navigation, leading to silent failures in web automation workflows.
9.  **[BUG] Task/Todo tools unavailable in top-level CLI session** [#80213](https://github.com/anthropics/claude-code/issues/80213)
    *   *Why it matters:* Regression where structured task tools fail in CLI despite flags being set, while working in Desktop, creating inconsistency.
10. **[BUG] Routine reports connectors as disabled despite being connected** [#79319](https://github.com/anthropics/claude-code/issues/79319)
    *   *Why it matters:* Misleading status reporting in Routines breaks conditional logic dependent on connector state.

## 4. Key PR Progress
1.  **[CLOSED] feat(plugins): add /planwith command** [#18217](https://github.com/anthropics/claude-code/pull/18217)
    *   Merged inline plan mode prompts to reduce friction in planning workflows.
2.  **[OPEN] docs(gcp): stop on checksum mismatch** [#80353](https://github.com/anthropics/claude-code/pull/80353)
    *   Hardens GCP gateway deployment by halting execution if binary checksums do not match.
3.  **[OPEN] Add account profiles plugin** [#80326](https://github.com/anthropics/claude-code/pull/80326)
    *   Introduces an experimental plugin for managing isolated `CLAUDE_CONFIG_DIR` environments, supporting multi-account setups (personal/work/client).
4.  **[OPEN] fix: Console scrolling top of history** [#80241](https://github.com/anthropics/claude-code/pull/80241)
    *   Addresses an issue where the console scrolls to the top when Claude adds text, improving readability during long sessions.
5.  **[OPEN] fix: Auto-compact never triggers** [#80196](https://github.com/anthropics/claude-code/pull/80196)
    *   Fixes a bug where context compaction fails to activate even when usage hits 100%, potentially leading to context limit errors.
6.  **[OPEN] fix: Instantly hitting usage limits with Max subscription** [#80195](https://github.com/anthropics/claude-code/pull/80195)
    *   Resolves a regression causing immediate usage limit exhaustion for Max subscribers.
7.  **[OPEN] Make devcontainer firewall init resilient to DNS failures** [#80112](https://github.com/anthropics/claude-code/pull/80112)
    *   Prevents firewall setup abortion due to transient DNS resolution failures in devcontainers.
8.  **[OPEN] Add twilight plugin** [#80008](https://github.com/anthropics/claude-code/pull/80008)
    *   Demonstrates a strategy for spec-first design/implement skills using a durable focus stack (not yet ready for merge).
9.  **[OPEN] docs: fix 1 broken link(s) via archive.org** [#80294](https://github.com/anthropics/claude-code/pull/80294)
    *   Repairs outbound documentation links using Wayback Machine snapshots.
10. **[OPEN] docs: fix 1 broken link(s) via archive.org** [#80229](https://github.com/anthropics/claude-code/pull/80229)
    *   Additional documentation link repair.

## 5. Feature Request Trends
*   **Account Isolation:** Strong demand for better multi-account management, evidenced by the "account profiles" plugin PR and requests for distinct launch environments.
*   **Workflow Granularity:** Requests for more specific model tier controls (e.g., "Fable plan mode") and finer-grained permission toggles (e.g., `/planwith` for inline planning).
*   **UI/UX Hygiene:** Users frequently request ways to manage background agent clutter (dismissal/completion) and improve steering capabilities in the Desktop app to match CLI parity.
*   **Token Efficiency:** Explicit calls for cost/token optimization features, particularly for lower-complexity tasks where expensive models are overkill.

## 6. Developer Pain Points
*   **Inconsistent Tool Availability:** A major source of frustration is the intermittent unregistration of Task/Todo tools (`TaskCreate`, `TodoWrite`) across different sessions and platforms (CLI vs. Desktop), often appearing account-gated or version-regressed.
*   **Permission System Reliability:** Persistent bugs in `bypassPermissions` and silent denials in browser extensions create unpredictable behavior in automation scripts, forcing developers to implement fragile workarounds.
*   **Documentation Deficits:** A surge of documentation issues highlights that official docs omit critical details about boolean values in frontmatter, background execution defaults for skills, and the interaction between fast mode and model switching.
*   **Remote Control Instability:** Issues with Remote Control failing after sleep/resume or crashing on disconnect suggest stability concerns in the desktop-to-server communication layer.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-07-23

## 1. Today's Highlights
The Codex team released a rapid succession of four alpha versions for the Rust CLI (v0.146.0-alpha.1 through .4), indicating active iteration on core stability or new features. Community attention is heavily focused on Windows-specific regressions, particularly regarding WSL path resolution, sandbox crashes, and severe performance freezes during application launch. Additionally, significant resource leaks in MCP child processes and persistent UI focus loops are driving high-engagement bug reports.

## 2. Releases
*   **Rust CLI v0.146.0-alpha.1 - .4**: Four consecutive alpha releases were published within the last 24 hours. These updates likely address critical bugs or prepare for upcoming stable feature rollouts, though specific changelogs for these pre-releases are not detailed in the current data set.
    *   [Release 0.146.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.1)
    *   [Release 0.146.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.2)
    *   [Release 0.146.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.3)
    *   [Release 0.146.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.4)

## 3. Hot Issues
1.  **Disable Auto-Resolve for Questions** [#28969]
    *   *Why it matters:* Users report frustration with the 60-second timeout forcing auto-resolution, disrupting complex interactive workflows.
    *   *Reaction:* High engagement (53 comments, 151 👍).
    *   [Link](https://github.com/openai/codex/issues/28969)
2.  **MCP Zombie Processes & Memory Leak** [#12491]
    *   *Why it matters:* Critical stability issue where MCP child processes are not reaped, leading to 1300+ zombies and a 37GB memory leak.
    *   *Reaction:* Strong technical concern (27 comments, 5 👍).
    *   [Link](https://github.com/openai/codex/issues/12491)
3.  **Hooks Not Running After Desktop Update** [#21639]
    *   *Why it matters:* Regression breaking automation pipelines that rely on custom hooks.
    *   *Reaction:* Active debugging (23 comments, 6 👍).
    *   [Link](https://github.com/openai/codex/issues/21639)
4.  **WSL Agent Mode Failure on Windows** [#16815]
    *   *Why it matters:* Fundamental connectivity error (`AbsolutePathBuf deserialized without a base path`) prevents agent mode usage in WSL environments.
    *   *Reaction:* High impact for Windows/WSL users (22 comments, 13 👍).
    *   [Link](https://github.com/openai/codex/issues/16815)
5.  **False Positive Safety Checks** [#28015]
    *   *Why it matters:* Normal local DevOps tasks are blocked by cybersecurity safety checks, interrupting paid sessions.
    *   *Reaction:* User dissatisfaction with strictness (22 comments, 3 👍).
    *   [Link](https://github.com/openai/codex/issues/28015)
6.  **IDE Extension Load Failures in Remote-SSH** [#27597]
    *   *Why it matters:* CLI works, but the VS Code extension fails in remote contexts, fragmenting the developer experience.
    *   *Reaction:* Moderate interest (16 comments, 4 👍).
    *   [Link](https://github.com/openai/codex/issues/27597)
7.  **Configure Worktree Location** [#10599]
    *   *Why it matters:* Feature request to allow custom worktree directories instead of defaulting to specific paths.
    *   *Reaction:* Strong community support (16 comments, 66 👍).
    *   [Link](https://github.com/openai/codex/issues/10599)
8.  **Windows Sandbox Setup Refresh Failed** [#22428]
    *   *Why it matters:* `CreateProcessAsUserW` failures block sandboxed execution on Windows Desktop.
    *   *Reaction:* Technical troubleshooting ongoing (15 comments, 10 👍).
    *   [Link](https://github.com/openai/codex/issues/22428)
9.  **MCP Pipe FD Leaks** [#26984]
    *   *Why it matters:* Cumulative file descriptor leaks lead to `EMFILE` errors, crashing long-running sessions.
    *   *Reaction:* Critical for long-session users (14 comments, 3 👍).
    *   [Link](https://github.com/openai/codex/issues/26984)
10. **Headless Remote Linux Support for Mobile** [#23200]
    *   *Why it matters:* Enables mobile control of always-on servers without requiring a desktop client to stay online.
    *   *Reaction:* High demand for workflow flexibility (13 comments, 42 👍).
    *   [Link](https://github.com/openai/codex/issues/23200)

## 4. Key PR Progress
1.  **Wake Sleeping Threads for Queued Agent Mail** [#34852]
    *   Ensures idle threads resume processing when agent work arrives, preventing message backlog during sleep states.
    *   [Link](https://github.com/openai/codex/pull/34852)
2.  **Batch Metadata for Plugin App Summaries** [#34851]
    *   Optimizes plugin loading by batching API requests (100 per batch) and caching metadata, improving startup performance.
    *   [Link](https://github.com/openai/codex/pull/34851)
3.  **Disable Image Generation for Free Plan** [#34850]
    *   Enforces subscription boundaries by skipping the `image_generation` tool registration for Free-tier accounts.
    *   [Link](https://github.com/openai/codex/pull/34850)
4.  **Cache Remote Plugin Catalogs** [#34849]
    *   Implements disk caching with a 3-hour TTL for plugin catalogs, reducing network calls and speeding up plugin discovery.
    *   [Link](https://github.com/openai/codex/pull/34849)
5.  **Guardian Model Limits for Review Sessions** [#34847]
    *   Aligns context-window and compaction limits with the specific Guardian model used, preventing configuration mismatches.
    *   [Link](https://github.com/openai/codex/pull/34847)
6.  **Custom Provider Web Search Opt-in** [#34846]
    *   Allows custom Responses providers to enable standalone web search via a new `supports_standalone_web_search` setting.
    *   [Link](https://github.com/openai/codex/pull/34846)
7.  **Track Multi-Agent Mode in World State** [#34845]
    *   Persists multi-agent instructions in world state to survive history changes without re-emitting setup hints.
    *   [Link](https://github.com/openai/codex/pull/34845)
8.  **Persisted Thread Pinning** [#34840]
    *   Adds server-side support for pinning threads, allowing users to prioritize important conversations in the sidebar.
    *   [Link](https://github.com/openai/codex/pull/34840)
9.  **Preserve User Input on MCP Interruption** [#34839]
    *   Fixes a bug where interrupting MCP startup could abort user input recording, ensuring conversation continuity.
    *   [Link](https://github.com/openai/codex/pull/34839)
10. **Flush Analytics Before Shutdown** [#34831]
    *   Prevents data loss by flushing the bounded analytics queue before the in-process app server shuts down.
    *   [Link](https://github.com/openai/codex/pull/34831)

## 5. Feature Request Trends
*   **Workflow Persistence:** Users are requesting better persistence for side chats and thread pinning to maintain context across app restarts and updates.
*   **Subscription Granularity:** There is a push for clearer enforcement of plan-specific features (e.g., disabling image generation for Free users) and more transparent limit displays.
*   **Remote/Mobile Flexibility:** Strong demand for supporting headless remote Linux hosts from mobile devices, decoupling control from the desktop app's uptime.
*   **Configuration Control:** Requests for granular settings, such as disabling auto-resolve timeouts and configuring worktree locations, indicate a desire for deeper CLI/App configurability.

## 6. Developer Pain Points
*   **Windows/WSL Instability:** A significant cluster of high-priority issues relates to Windows-specific bugs, including WSL path resolution failures, sandbox crashes, and severe UI freezes on cold launch.
*   **Resource Leaks:** Multiple reports highlight memory and file descriptor leaks associated with MCP processes (zombies, orphaned children, pipe FD exhaustion), impacting long-running sessions.
*   **Security False Positives:** Users find the cybersecurity safety checks overly aggressive, blocking standard local repository maintenance and DevOps tasks.
*   **UI/UX Glitches:** Issues with focus loops in the security sidebar, missing threads in the project sidebar, and broken hook execution post-update suggest recent releases have introduced regressions in the desktop application's stability.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-07-23
**Source:** `github.com/google-gemini/gemini-cli`

## 1. Today's Highlights
The Gemini CLI team released **v0.52.0** and the preview for **v0.53.0**, focusing on core stability, credential handling, and the introduction of an LLM-based triage orchestrator for caretaker tasks. Security remains a priority with critical fixes for bash variable expansion bypasses and OAuth token exchange failures on headless systems. Community engagement is high around agent reliability, specifically regarding subagent recovery, memory system bugs, and browser agent resilience.

## 2. Releases
*   **v0.52.0**: A stable release featuring the exclusion of transient CI files from workspace context and foundational modules for the new `caretaker-triage` worker.
    *   [PR #28216](https://github.com/google-gemini/gemini-cli/pull/28216) | [PR #28407](https://github.com/google-gemini/gemini-cli/pull/28407) (part of v0.53.0-preview changes merged into core stability efforts)
*   **v0.53.0-preview.0**: Introduces a significant architectural shift with an LLM triage orchestrator for container builds and fixes to group cancelled tool responses to prevent API errors.
    *   [PR #28407](https://github.com/google-gemini/gemini-cli/pull/28407) | [PR #28472](https://github.com/google-gemini/gemini-cli/pull/28472) (Nightly fix included in preview context)

## 3. Hot Issues
1.  **[Bug] Subagent recovery after MAX_TURNS reported as GOAL success (#22323)**
    *   *Why it matters:* Critical logic error where subagents hide interruption states, leading to incorrect task completion reports. High community concern due to impact on debugging complex workflows.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/22323)
2.  **[Bug] Generalist agent hangs indefinitely (#21409)**
    *   *Why it matters:* A P1 bug causing the CLI to freeze when deferring to the generalist agent, requiring manual cancellation. Users report workarounds involving disabling sub-agents.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/21409)
3.  **[Enhancement] Leverage model's bash affinity via Zero-Dependency OS Sandboxing (#19873)**
    *   *Why it matters:* Proposes aligning with Gemini 3 models' native bash training capabilities while maintaining security, potentially improving codebase exploration efficiency.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/19873)
4.  **[Feature] Robust component level evaluations (#24353)**
    *   *Why it matters:* Tracks the expansion of behavioral evals to 76 tests across supported models, crucial for ensuring reliability as the agent ecosystem grows.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/24353)
5.  **[Investigation] Impact of AST-aware file reads and search (#22745)**
    *   *Why it matters:* Investigates reducing token noise and improving precision by using Abstract Syntax Tree awareness for code navigation, a potential performance booster.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/22745)
6.  **[Bug] Gemini does not use skills and sub-agents enough (#21968)**
    *   *Why it matters:* Anecdotal but widespread feedback that the model fails to autonomously invoke relevant custom skills or sub-agents without explicit prompting.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/21968)
7.  **[Bug] Auto Memory retries low-signal sessions indefinitely (#26522)**
    *   *Why it matters:* The memory system gets stuck re-processing low-value sessions because it only marks them as processed upon successful read, wasting resources.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/26522)
8.  **[Bug] Shell command execution gets stuck "Waiting input" (#25166)**
    *   *Why it matters:* Simple CLI commands hang the terminal UI even after completion, blocking user interaction. A recurring frustration for developers using shell tools.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/25166)
9.  **[Enhancement] Enhance browser_agent resilience (#22232)**
    *   *Why it matters:* Requests automatic session takeover for locked browser profiles, addressing a common failure mode in persistent browsing sessions.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/22232)
10. **[Bug] Browser subagent fails in Wayland (#21983)**
    *   *Why it matters:* Specific but impactful failure for Linux users on Wayland compositors, preventing browser automation entirely in those environments.
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/21983)

## 4. Key PR Progress
1.  **[Security] Block $VAR and ${VAR} variable expansion bypass (#28403)**
    *   Fixes a critical security hole allowing variable expansion to bypass security gates, hardening the defense against injection attacks.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28403)
2.  **[Fix] Rotate session ID on model fallback (#28469)**
    *   Resolves stateful API errors when falling back to `gemini-2.5-flash` by ensuring session IDs are rotated correctly.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28469)
3.  **[Fix] Add gemini-3.5-flash to model selector (#28485)**
    *   Corrects a bug where the new flash model was defined in config but hidden from the user-facing selector in older versions.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28485)
4.  **[Fix] Filter thought parts from getHistoryTurns (#28509)**
    *   Prevents internal monologue leakage into history when context management is disabled, improving data cleanliness.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28509)
5.  **[Fix] Use native fetch for OAuth token exchange (#28446)**
    *   Solves "Premature close" errors on headless VPS environments during login by switching to native fetch instead of HTTP clients.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28446)
6.  **[Feature] Eval coverage report command (#28169)**
    *   Adds a new `eval:coverage` command to cross-reference eval inventory with the tool registry, aiding developer testing workflows.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28169)
7.  **[Docs] Windows PowerShell troubleshooting (#28447)**
    *   Addresses common installation issues for Windows users by providing specific guidance for PowerShell environments.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28447)
8.  **[Infra] Configure Cloud Run job for SSR Code Generation (#28431)**
    *   Establishes the containerized runtime and workflow definitions for the new server-side rendering code generation pipeline.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28431)
9.  **[Fix] Propagate AbortSignal in /compress command (#28506)**
    *   Fixes dangling network requests during chat compression by allowing the operation to be cancelled via Escape.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28506)
10. **[Fix] Sequentially verify cached credentials (#28472)**
    *   Restores proper fallback behavior for `GOOGLE_APPLICATION_CREDENTIALS`, ensuring authentication works reliably in various setups.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28472)

## 5. Feature Request Trends
*   **Agent Autonomy & Reliability:** Users frequently request better autonomous invocation of skills/sub-agents and more robust recovery mechanisms for hung or failed agents (e.g., generalist hangs, subagent exit codes).
*   **Memory System Improvements:** There is strong demand for fixing the "Auto Memory" loop issues, including handling low-signal sessions and quarantining invalid patches.
*   **AST-Aware Navigation:** Interest is growing in using AST-based tools for more precise codebase mapping and file reading to reduce token usage and improve context accuracy.
*   **Security & Sandboxing:** Requests for zero-dependency OS sandboxing and stricter control over destructive commands (like `git reset --force`) indicate a desire for safer, more contained agent operations.

## 6. Developer Pain Points
*   **Terminal Hangs & Stuck Prompts:** Recurring issues with shell commands hanging ("Waiting input") and the generalist agent freezing indefinitely are major friction points.
*   **Authentication Failures on Headless Systems:** Users on VPSs and non-GUI environments struggle with OAuth token exchanges failing due to network client incompatibilities.
*   **Browser Agent Instability:** Specific failures on Wayland and issues with persistent session locks make browser automation unreliable for many users.
*   **Context Noise & Leakage:** Internal thoughts leaking into history or excessive temporary script creation clutters the workspace and confuses the model's context window.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-23

## 1. Today's Highlights
GitHub Copilot CLI released versions v1.0.74-{1,2,3}, introducing Gemini 3.6 Flash support, a new sandbox opt-in splash screen, and fixes for session dialog leakage in multiplexed environments. The community is actively reporting regressions in Windows terminal rendering (infinite React loops) and persistent authentication issues with the `--acp` mode, alongside high engagement on feature requests for granular model selection and PDF reading capabilities.

## 2. Releases
**v1.0.74-{1,2,3}**
*   **Added:** Support for `gemini-3.6-flash` model; first-run splash screen to opt into default sandbox.
*   **Improved:** Fixed session open dialog leaking across multiplexed sessions; eligible pickers now reopen correctly when switching back.
*   **Fixed:** Various internal fixes and changes.

[View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.74-3)

## 3. Hot Issues
*   **#443 Built-in PDF Reading Support** [33 👍]
    *   *Why it matters:* Users frequently work with academic papers and technical docs. Native PDF parsing would eliminate manual tool installation (`pdftotext`) and streamline workflows.
    *   [Link](https://github.com/github/copilot-cli/issues/443)
*   **#4016 BYOK Authentication Regressed in --acp Mode** [5 Comments]
    *   *Why it matters:* A critical regression preventing `COPILOT_PROVIDER_*` from working without interactive login in `--acp` mode, breaking non-interactive CI/CD or custom provider setups.
    *   [Link](https://github.com/github/copilot-cli/issues/4016)
*   **#4163 Zombie Process Accumulation on Linux** [3 Comments]
    *   *Why it matters:* Child processes are not being reaped, leading to memory leaks and system clutter (~2 zombies/min). This impacts long-running sessions and server stability.
    *   [Link](https://github.com/github/copilot-cli/issues/4163)
*   **#1688 Configurable Auto-Compaction Threshold** [5 👍]
    *   *Why it matters:* Current compaction triggers are too late for expensive, slow models like Claude Opus. Allowing users to set thresholds at ~45-60% context usage can significantly reduce latency and cost.
    *   [Link](https://github.com/github/copilot-cli/issues/1688)
*   **#4218 Configure Model Pool for Auto Mode** [6 👍]
    *   *Why it matters:* "Auto" mode currently selects from all available models, making cost and behavior unpredictable. Users want explicit control over which models the auto-selector can choose from.
    *   [Link](https://github.com/github/copilot-cli/issues/4218)
*   **#4207 Per-Subagent AI Credit Usage Breakdown** [6 👍]
    *   *Why it matters:* Enterprise users need visibility into how credits are consumed by subagents vs. main agents for accurate billing and optimization.
    *   [Link](https://github.com/github/copopil-cli/issues/4207)
*   **#4222 Regression of Infinite React Render Loop**
    *   *Why it matters:* The crash reported in v1.0.31 has returned in v1.0.72+ on Windows, causing UI freezes and swallowed output. This is a severe stability regression.
    *   [Link](https://github.com/github/copilot-cli/issues/4222)
*   **#4219 Windows Crash with Notifications Enabled**
    *   *Why it matters:* Hard crashes (access violations) occur when OS notifications are enabled on Windows, forcing users to disable a key UX feature to maintain stability.
    *   [Link](https://github.com/github/copilot-cli/issues/4219)
*   **#4206 Environment Footer Stuck on "Loading:"**
    *   *Why it matters:* Under specific org MCP policies, the status footer hangs indefinitely, providing no feedback on whether the environment is actually ready.
    *   [Link](https://github.com/github/copilot-cli/issues/4206)
*   **#4223 Shell Command Completion Detection Fails in Tmux**
    *   *Why it matters:* Commands run inside tmux are marked as "still running" forever, even if they complete successfully. This blocks subsequent user input and breaks automation in nested terminals.
    *   [Link](https://github.com/github/copilot-cli/issues/4223)

## 4. Key PR Progress
*   **#3163 ViewSonic monitor**
    *   *Status:* Open
    *   *Summary:* Initiates GitHub Action runners for issues #2591, #3561, #3559.
    *   [Link](https://github.com/github/copilot-cli/pull/3163)

*(Note: No other Pull Requests were updated in the last 24 hours.)*

## 5. Feature Request Trends
*   **Granular Control & Cost Management:** Strong demand for configuring model pools (#4218), adjusting context compaction thresholds (#1688), and detailed per-agent credit breakdowns (#4207).
*   **Enhanced Input Capabilities:** Requests for native PDF reading (#443) and explicit inline agent invocation/chaining (#4208) to improve workflow efficiency.
*   **Tooling & Integration:** Suggestions for better shell integration sequences (#3428) and skill tool aliases for custom agents (#4209).

## 6. Developer Pain Points
*   **Windows Stability:** Multiple high-severity issues regarding infinite render loops (#4222), hard crashes with notifications (#4219), and exit crashes via libuv (#4217) indicate significant platform-specific instability on Windows.
*   **Terminal Environment Compatibility:** Persistent issues with `tmux` (zombie processes #4163, completion detection #4223, rendering #4212) suggest the CLI struggles with nested or non-standard terminal emulators.
*   **Authentication & Protocol Regressions:** The `--acp` mode authentication failure (#4016) and Xcode ACP handshake failures (#4227) highlight fragility in the Agent Client Protocol implementation.
*   **Observability Gaps:** Lack of detailed billing attributes in OTel spans for subagents (#4224) makes cost accounting difficult for enterprise users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-23

## 1. Today's Highlights
The community is currently addressing critical compatibility issues with third-party API providers, specifically regarding `prompt_cache_key` validation and MCP tool schema sanitization. Additionally, developers are reporting significant stability regressions on Windows environments involving encoding errors during stdout redirection and shell process blocking.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **[BUG] Model API error 400: Unsupported parameter(s): `prompt_cache_key`** (#2534)
    *   **Why it matters:** Third-party Kimi-compatible endpoints (e.g., Nvidia Nim) are rejecting requests due to Moonshot-specific caching parameters being passed indiscriminately. This breaks workflows for users not using official Moonshot APIs.
    *   **Community Reaction:** High relevance for non-Moonshot users; immediate fix requested.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2534)

*   **[BUG] MCP tool names & schemas rejected by Moonshot API (HTTP 400)** (#2531)
    *   **Why it matters:** The CLI fails to sanitize MCP tool definitions before sending them to the Moonshot API, causing `anyOf` type definition errors. This blocks advanced tool-use scenarios.
    *   **Community Reaction:** Critical for MCP integration stability.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2531)

*   **[BUG] kimi web crashes at startup on Windows (UnicodeEncodeError)** (#2532)
    *   **Why it matters:** A regression causes immediate crashes on Chinese-locale Windows systems when stdout is redirected or captured by parent processes. This affects CI/CD pipelines and scripted usage.
    *   **Community Reaction:** Significant friction for Windows-based enterprise or localized deployments.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2532)

*   **[OPEN] request reached organization TPD rate limit** (#2318)
    *   **Why it matters:** Users report incorrect Total Per Day (TPD) calculation logic, leading to premature rate limiting even when usage seems within bounds.
    *   **Community Reaction:** Frustration regarding billing/quota management accuracy.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2318)

*   **[FEATURE] Per-agent model selection for sub-agents** (#2533)
    *   **Why it matters:** Current architecture forces all sub-agents to inherit the session's default model, preventing cost-optimized multi-tiered workflows (e.g., cheap models for simple tasks, expensive ones for complex reasoning).
    *   **Community Reaction:** Highly anticipated feature for optimizing operational costs.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2533)

## 4. Key PR Progress
*   **[fix(llm)] scope prompt cache keys to Moonshot APIs** (#2535)
    *   **Description:** Addresses #2534 by ensuring `prompt_cache_key` is only sent to official Kimi and Moonshot APIs, resolving 400 errors for third-party compatible endpoints.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2535)

*   **[fix(tools)] count StrReplaceFile replacements against the running content** (#2524)
    *   **Description:** Fixes a bug in `StrReplaceFile` where chained edits failed because replacement counts were calculated against original file content rather than the evolving state of the file.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2524)

*   **[fix(shell)] stop blocking until timeout when a detached child holds the pipes** (#2530)
    *   **Description:** Resolves #2468 by fixing a deadlock in the foreground shell path where detached child processes holding pipes prevented proper exit code checking and timeout handling.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2530)

## 5. Feature Request Trends
*   **Cost-Optimized Multi-Agent Workflows:** There is a strong demand for granular control over model selection per agent/sub-agent to balance performance and cost.
*   **Robust Shell Interaction:** Improvements to shell process management, particularly regarding detached children and pipe handling, are prioritized to prevent hangs.
*   **API Compatibility Layer:** Requests for better abstraction between official Moonshot APIs and third-party compatible endpoints to ensure seamless switching without configuration errors.

## 6. Developer Pain Points
*   **Windows Localization & Encoding:** Recurring issues with character encoding (GBK vs UTF-8) on Windows, particularly affecting `kimi web` and stdout redirection scenarios.
*   **Third-Party API Friction:** Developers using Nvidia Nim or other compatible providers face unexpected 400 errors due to provider-specific parameters (`prompt_cache_key`) or schema strictness not being handled gracefully by the CLI.
*   **MCP Schema Validation:** Complex MCP tool definitions are failing client-side sanitization before reaching the provider, requiring manual workarounds or immediate CLI patches.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-07-23

## 1. Today's Highlights
The community is actively troubleshooting critical subscription service failures (`opencode-go`) and UI instability in the latest Desktop v1.18.4 release. Significant developer attention is focused on improving local model autodiscovery for OpenAI-compatible providers, with a high-engagement issue tracking this feature. Additionally, core infrastructure improvements are underway to refine V2 theme generation and agent color migration.

## 2. Releases
No new official versioned releases were published in the last 24 hours. However, users are reporting issues with **Desktop v1.18.4**, specifically regarding local server connection drops and mode toggle regressions. Verification videos for PR #38252 have been posted, indicating recent internal testing activity.

*   [PR #38252 Verification Videos](https://github.com/anomalyco/opencode/pull/38252)

## 3. Hot Issues
*Selected by comment count and community impact.*

1.  **[Feature] Auto-discover models from OpenAI-compatible provider endpoints**
    *   **Why it matters:** Eliminates manual configuration for LM Studio, Ollama, etc., significantly lowering the barrier to entry for local AI.
    *   **Reaction:** High engagement (185 👍, 28 comments). Users are eager for this automation.
    *   [Issue #6231](https://github.com/anomalyco/opencode/issues/6231)

2.  **[Bug] All subscription models return "Request blocked by upstream provider" (opencode-go)**
    *   **Why it matters:** Critical blocker for paid subscribers; affects core functionality across multiple reports.
    *   **Reaction:** Urgent support requests; multiple duplicate reports in other languages.
    *   [Issue #38218](https://github.com/anomalyco/opencode/issues/38218)

3.  **[Bug] opencode is using CPU for doing nothing!**
    *   **Why it matters:** Resource inefficiency during API rate-limit waits causes performance degradation on powerful machines.
    *   **Reaction:** Frustration from users experiencing unexpected high CPU usage.
    *   [Issue #19466](https://github.com/anomalyco/opencode/issues/19466)

4.  **[Bug] Local server disconnects in Desktop v1.14.48/v1.18.4**
    *   **Why it matters:** Indicates instability in the desktop client's local backend connection handling.
    *   **Reaction:** Reports of the status indicator turning red and unresponsiveness.
    *   [Issue #27018](https://github.com/anomalyco/opencode/issues/27018)

5.  **[Bug] Plan/Build mode toggle missing or broken**
    *   **Why it matters:** Regression in user interface controls for workflow management.
    *   **Reaction:** Users confused by missing UI elements after updates.
    *   [Issue #37970](https://github.com/anomalyco/opencode/issues/37970)

6.  **[Bug] LM Studio shows only 3/9 models in opencode**
    *   **Why it matters:** Autodiscovery is currently incomplete, contradicting user expectations for full `/v1/models` integration.
    *   **Reaction:** Validation of the need for Issue #6231.
    *   [Issue #18011](https://github.com/anomalyco/opencode/issues/18011)

7.  **[Bug] Infinite loop after tool calls complete (Zen/big-pickle)**
    *   **Why it matters:** Severe stability bug causing the application to become unresponsive post-execution.
    *   **Reaction:** Concerns about reliability in complex tool-use scenarios.
    *   [Issue #26220](https://github.com/anomalyco/opencode/issues/26220)

8.  **[Feature] Limit FPS target rate for remote work**
    *   **Why it matters:** Improves UX for RDP/XRDP users by reducing lag and server load.
    *   **Reaction:** Positive reception from remote developers.
    *   [Issue #13817](https://github.com/anomalyco/opencode/issues/13817)

9.  **[Bug] Core: Long-lived V2 server enters persistent allocation loop**
    *   **Why it matters:** Memory/CPU leak in the V2 server architecture under idle conditions.
    *   **Reaction:** Technical concern regarding long-term stability of server deployments.
    *   [Issue #36677](https://github.com/anomalyco/opencode/issues/36677)

10. **[Bug] Subagent task corrupted files by writing null bytes**
    *   **Why it matters:** Data integrity risk when subagents write to files.
    *   **Reaction:** Urgent need for fix to prevent project corruption.
    *   [Issue #38356](https://github.com/anomalyco/opencode/issues/38356)

## 4. Key PR Progress
*   **feat(opencode): add --no-project-instructions switch**
    *   Adds a CLI flag to disable reading repository instructions, crucial for external automation tools that treat repo files as untrusted.
    *   [PR #38420](https://github.com/anomalyco/opencode/pull/38420)

*   **fix(ai): handle incomplete responses without reasons**
    *   Improves robustness with OpenAI SDK by handling `incomplete_details` when the `reason` field is omitted.
    *   [PR #38374](https://github.com/anomalyco/opencode/pull/38374)

*   **fix:(web) 修复web模式下本地客户端时间早于服务端时间导致的大模型不回复bug**
    *   Fixes a timestamp ordering bug in the web client that caused model non-responses when client time was behind server time.
    *   [PR #38418](https://github.com/anomalyco/opencode/pull/38418)

*   **[contributor] refactor(tui): generate syntax from V2 theme**
    *   Refactors TUI syntax highlighting to derive directly from V2 theme tokens, removing parallel V1 resolution logic.
    *   [PR #38397](https://github.com/anomalyco/opencode/pull/38397)

*   **[contributor] fix(core): migrate named agent colors**
    *   Ensures named agent colors are preserved and migrated correctly from V1 config schema to V2 validation.
    *   [PR #38414](https://github.com/anomalyco/opencode/pull/38414)

*   **[contributor] fix(ai): preserve OpenAI message phases**
    *   Correctly decodes and preserves OpenAI Responses message phases (commentary/final_answer) in metadata.
    *   [PR #38417](https://github.com/anomalyco/opencode/pull/38417)

*   **fix(core): load dynamic models for generation**
    *   Enables stateless `/api/generate` requests to use dynamically loaded AI SDK models (e.g., Gemini).
    *   [PR #38401](https://github.com/anomalyco/opencode/pull/38401)

*   **docs: mention Exa and Parallel as web search backends**
    *   Updates documentation to reflect that web search supports both Exa and Parallel backends.
    *   [PR #38395](https://github.com/anomalyco/opencode/pull/38395)

*   **fix: pr-standards falsely flags v2-based PRs as missing a linked issue**
    *   Corrects CI check logic that incorrectly flagged V2-based PRs due to GitHub API behavior with default branches.
    *   [PR #38408](https://github.com/anomalyco/opencode/pull/38408)

*   **fix(ui): standardize tooltip delay**
    *   Standardizes tooltip hover delay to 400ms and adds an `instant` mode for model picker details.
    *   [PR #38403](https://github.com/anomalyco/opencode/pull/38403)

## 5. Feature Request Trends
*   **Local Provider Autodiscovery:** The most requested feature is automatic model discovery for local providers (LM Studio, Ollama) to replace manual JSON configuration.
*   **UI/UX Customization & Stability:** Requests for FPS limiting for remote desktops, better tab management (quick-jump sidebar), and stable mode toggles (Plan/Build).
*   **Portability:** Interest in portable distribution methods (USB creators) for air-gapped or restricted corporate environments.
*   **Tool Execution Transparency:** Desire for timestamps and duration metrics on tool execution blocks to improve debugging and observability.

## 6. Developer Pain Points
*   **Subscription Service Instability:** Multiple reports indicate that `opencode-go` subscriptions are failing with "Request blocked by upstream provider," suggesting a systemic issue with the Go subscription tier's upstream integration.
*   **Desktop Client Regressions:** Recent updates (v1.18.4) have introduced regressions in UI controls (Plan/Build toggle) and local server connectivity, causing frustration among power users.
*   **Resource Inefficiency:** Users report significant CPU waste when the app is idle or waiting on API rate limits, indicating a need for better background process management.
*   **Data Integrity Risks:** Reports of subagents writing null bytes to files highlight a critical pain point in automated file modification safety.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-07-23

## 1. Today's Highlights
The Pi development team addressed several critical infrastructure and provider stability issues, including fixing retry mechanisms for OpenAI/Anthropic SDKs and resolving AWS Bedrock adaptive thinking compatibility. Significant progress was made on TUI rendering accuracy, external editor performance, and session metadata exposure for bash tools, while new provider support for StepFun and Amazon Bedrock Mantle was integrated.

## 2. Releases
**None.** No new releases were published in the last 24 hours.

## 3. Hot Issues
1.  **httpIdleTimeoutMs Regression (#6476)**
    *   **Why it matters:** Self-hosted OpenAI-compatible providers (vLLM) were timing out unexpectedly after upgrading to v0.80.6, breaking long-running inference tasks.
    *   **Community Reaction:** High engagement (12 comments); users confirmed downgrade to v0.80.3 as a workaround.
2.  **Copilot Enterprise Compaction Failure (#6768)**
    *   **Why it matters:** Context compaction fails with "Misdirected Request" errors when using Copilot Enterprise licenses, preventing efficient context management.
    *   **Community Reaction:** 8 upvotes; indicates a significant blocker for enterprise users relying on auto-compaction.
3.  **OpenAI SDK Retry Sleep Ignoring AbortSignal (#6911)**
    *   **Why it matters:** The native SDK retries sleep for the full `Retry-After` duration (potentially days) and cannot be interrupted, causing hangs during rate-limiting or service degradation.
    *   **Community Reaction:** Critical bug report highlighting a lack of control over async operations.
4.  **Scoped Models Bracket Parsing (#6210)**
    *   **Why it matters:** Custom model IDs containing brackets (e.g., `custom/model[1m]`) are rejected by the `/scoped-models` selector due to globbing/parsing issues.
    *   **Community Reaction:** 8 upvotes; affects users with complex model naming conventions.
5.  **Custom Keybindings Not Applied on Startup (#6459)**
    *   **Why it matters:** User-defined keybindings in `keybindings.json` fail on initial session start, requiring a manual `/reload` to take effect.
    *   **Community Reaction:** Frustration with inconsistent state initialization.
6.  **External Editor Slow Launch on Crowded tmpdir (#6774)**
    *   **Why it matters:** Writing temp files directly to `os.tmpdir()` causes latency when the directory is crowded, slowing down `Ctrl+G` editor launches.
    *   **Community Reaction:** Users requesting isolation via `mkdtemp`.
7.  **Windows Extension Path Mislabeled (#6619)**
    *   **Why it matters:** Dependent extensions installed via npm on Windows display absolute paths in the banner instead of clean names, confusing users.
    *   **Community Reaction:** Reported as a cosmetic but disruptive UI bug.
8.  **OpenRouter Cache Breakpoint Issue (#6940)**
    *   **Why it matters:** Conversation cache breakpoints stop advancing during consecutive tool-only turns with Anthropic models via OpenRouter, leading to inefficient token usage.
    *   **Community Reaction:** Technical deep-dive into caching mechanics.
9.  **TUI Crash Log Hardcoded Path (#6652)**
    *   **Why it matters:** Crash logs ignore `PI_CODING_AGENT_DIR`, creating files in the home directory even when the agent data is moved, causing clutter and confusion.
    *   **Community Reaction:** Minor but annoying for organized workflows.
10. **AWS Bedrock Profile Ignored (#6957)**
    *   **Why it matters:** The AWS Bedrock provider falls back to environment variables instead of respecting the configured profile, breaking multi-account setups.
    *   **Community Reaction:** Impacts enterprise security configurations.

## 4. Key PR Progress
1.  **Provider Retries Abortable (#6980)**
    *   Replaces native SDK retries with a common helper that respects `maxRetrayDelayMS` and allows interruption via `AbortSignal`, fixing #6911.
2.  **Grapheme Width Alignment (#6987)**
    *   Fixes TUI rendering artifacts by accurately aligning grapheme widths with terminal cells, addressing longstanding display issues.
3.  **Bedrock Adaptive Thinking Fix (#6984)**
    *   Honors `compat.forceAdaptiveThinking` in the Bedrock provider, allowing Claude models requiring adaptive format to work without `ValidationException`.
4.  **Constrained Sampling Support (#6341)**
    *   Adds opt-in `constrainedSampling` config for tools, allowing providers to enforce JSON-schema strictness on tool arguments.
5.  **Session Metadata for Bash Tools (#6967)**
    *   Exposes active session metadata (provider, model, reasoning level) to bash tools, enabling better context awareness for subprocesses.
6.  **Amazon Bedrock Mantle Provider (#6216)**
    *   Adds native support for Amazon Bedrock Mantle's OpenAI Responses API, expanding cloud provider options.
7.  **Bash Execution Update Events (#6971)**
    *   Emits `bash_execution_update` events to handle parallel bash execution calls correctly on the client side.
8.  **StepFun Providers Added (#6960)**
    *   Integrates four new StepFun providers (China, Global, Prepaid routing) sourced from models.dev.
9.  **OpenRouter OAuth Support (#6927)**
    *   Adds native OpenRouter OAuth support with PKCE S256 and ephemeral localhost callback for secure authentication.
10. **TUI Debug Logs in Agent Dir (#6958)**
    *   Fixes hardcoded paths so TUI crash logs are written to the configured `PI_CODING_AGENT_DIR` instead of the home directory.

## 5. Feature Request Trends
*   **Enhanced Control & Interruptibility:** Strong demand for making asynchronous operations (retries, auth flows) interruptible via `AbortSignal`.
*   **Provider-Side Constraints:** Interest in constrained sampling and provider-specific configuration overrides (e.g., `forceAdaptiveThinking`).
*   **Context Awareness for Extensions:** Requests to expose more session metadata and structured approval primitives to extensions for better integration.
*   **UI/UX Refinements:** Ongoing requests for better TUI rendering accuracy, faster external editor launches, and cleaner extension naming.

## 6. Developer Pain Points
*   **Async Operation Hangs:** Users are frequently frustrated by retries and auth flows that cannot be aborted, leading to stuck sessions.
*   **Path/Config Inconsistencies:** Hardcoded paths for logs and temp files ignore user-configured directories (`PI_CODING_AGENT_DIR`, `os.tmpdir` isolation), causing clutter and performance issues.
*   **Provider Compatibility Gaps:** Specific edge cases with enterprise licenses (Copilot) and cloud providers (AWS Bedrock, OpenRouter) reveal gaps in handling non-standard headers or formats.
*   **TUI Rendering Glitches:** Grapheme width calculations and code block border rendering remain persistent visual annoyances.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-07-23

## 1. Today's Highlights
The community is actively addressing critical core bugs, particularly the `enable_thinking` parameter mismatch causing 400 errors on TokenPlan endpoints and issues with auto-memory caching. Significant progress is being made on performance optimization via lazy-loading the Google GenAI SDK and refining the autonomous agent lifecycle with the new Goal v3 state protocol.

## 2. Releases
*   **v0.0.0-benchmark-poc.20260722.1**: A temporary prerelease for validating the GitHub Actions to ECS benchmark worker pipeline. This is not a product release but a technical proof-of-concept for result publication.

## 3. Hot Issues
1.  **[bug(core): side-query forces enable_thinking=false](https://github.com/QwenLM/qwen-code/issues/7284)**: Critical bug where `runSideQuery` disables thinking, breaking endpoints that require it. High impact on tool reliability.
2.  **[Harden tool-output budgeting...](https://github.com/QwenLM/qwen-code/issues/7306)**: Ongoing enhancement to stabilize artifact lifecycle and observability, marking completion of Phase 1 correctness.
3.  **[proposal(memory): Enterprise external-memory integration](https://github.com/QwenLM/qwen-code/issues/7449)**: Request for a provider-neutral memory profile, indicating strong interest in enterprise-grade data persistence strategies.
4.  **[BUG] Windows PowerShell Alt+V paste failure](https://github.com/QwenLM/qwen-code/issues/6577)**: Persistent UI/platform issue affecting clipboard functionality on Windows terminals.
5.  **[Web Shell input editor not working on mobile](https://github.com/QwenLM/qwen-code/issues/5958)**: Usability blocker for mobile users accessing the Web Shell via iOS Safari/Android Chrome.
6.  **[Cold-start follow-ups: lazy-loading candidates](https://github.com/QwenLM/qwen-code/issues/7264)**: Performance-focused issue highlighting a 17.24 MiB eager static import closure slowing down child process initialization.
7.  **[VS Code Companion: image not attached](https://github.com/QwenLM/qwen-code/issues/7489)**: Bug where file picker inserts `@filename` text but fails to send the actual image content to the model.
8.  **[auto-memory MEMORY.md write_file rejected](https://github.com/QwenLM/qwen-code/issues/7287)**: Logic error where cached reads are not registered, causing subsequent writes to be blocked by `checkPriorRead()`.
9.  **[Core test suite is red on main](https://github.com/QwenLM/qwen-code/issues/7537)**: CI blockage due to a fork dispatch test hanging, preventing PR validation across the board.
10. **[Failed to check for updates (registry error)](https://github.com/QwenLM/qwen-code/issues/7515)**: CLI update mechanism failing due to registry or path resolution issues, affecting user experience.

## 4. Key PR Progress
1.  **[fix(autofix): retry a skipped-Prepare](https://github.com/QwenLM/qwen-code/pull/7490)**: Prevents healthy PRs from stranding due to base/infra failures before agent execution.
2.  **[fix(cli): open the actual serve fallback port](https://github.com/QwenLM/qwen-code/pull/7501)**: Corrects `qwen serve --open` behavior when the primary port is occupied, ensuring the browser opens the correct fallback URL.
3.  **[perf(startup): lazy-load Google GenAI SDK](https://github.com/QwenLM/qwen-code/pull/7512)**: Removes `@google/genai` from the bootstrap static closure, significantly reducing cold-start memory usage and load time.
4.  **[fix(cli): use npm view for update check](https://github.com/QwenLM/qwen-code/pull/7528)**: Addresses update check failures by switching from `update-notifier` to direct `npm view` calls.
5.  **[feat(web-shell): add git mode selector](https://github.com/QwenLM/qwen-code/pull/7471)**: Adds a unified git workflow selector (Current Branch, Worktree, etc.) to the Web Shell composer toolbar.
6.  **[fix(core): retry requests when providers require thinking](https://github.com/QwenLM/qwen-code/pull/7534)**: Implements a retry mechanism for OpenAI-compatible providers that explicitly reject requests with `enable_thinking: false`.
7.  **[fix(core): close force-flag gaps in AUTO destructive-git guard](https://github.com/QwenLM/qwen-code/pull/7531)**: Hardens security by ensuring `git clean` and `git checkout` commands are blocked in all spelling variations.
8.  **[feat(daemon): add explicit channel delivery](https://github.com/QwenLM/qwen-code/pull/7388)**: Introduces a typed channel delivery contract for daemon notifications and scheduled tasks.
9.  **[refactor(core): tier prompt fragments by cache stability](https://github.com/QwenLM/qwen-code/pull/7530)**: Optimizes prompt rendering order (stable, context, volatile) to improve cache efficiency and system instruction clarity.
10. **[feat(core): add Goal v3 state protocol](https://github.com/QwenLM/qwen-code/pull/7517)**: Introduces the v3 state contract for goals, defining lifecycle states and optimistic concurrency controls for subagents.

## 5. Feature Request Trends
*   **Enterprise Memory Integration**: Users are requesting standardized, provider-agnostic profiles for external memory storage to support complex enterprise workflows.
*   **Session Context Management**: There is a clear demand for better control over session contexts, specifically "Start In" selectors for local vs. worktree environments in the Web Shell.
*   **Visualization of Agent Plans**: Requests for DAG-based visualization of Todo plans linked to live subagent executions to improve transparency in multi-agent scenarios.
*   **Version Upgrade Notices**: Interest in lightweight "What's New" startup notices to keep users informed about curated highlights without clutter.

## 6. Developer Pain Points
*   **Parameter Mismatches**: The `enable_thinking` bug is a recurring friction point, causing silent failures or 400 errors when interacting with specific DashScope/TokenPlan endpoints.
*   **Cold Start Latency**: Large static import closures (e.g., Google GenAI SDK) are identified as major bottlenecks for developer productivity during rapid iteration.
*   **Platform-Specific UI Bugs**: Consistent reports of clipboard, paste, and rendering issues on Windows (PowerShell/Terminal) and mobile browsers suggest these platforms need more rigorous testing coverage.
*   **Update Mechanism Fragility**: The CLI update check is brittle, failing with registry errors or path resolution issues (e.g., mise wrappers), disrupting the development workflow.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-07-23
**Source:** github.com/Hmbown/DeepSeek-TUI (CodeWhale)

### 1. Today's Highlights
The CodeWhale project has officially integrated the v0.9.1 runtime, marking a significant milestone with the launch of a unified `/skills` manager and a bundled default skill pack. Concurrently, the team is addressing critical release blockers for v0.9.1, including security audits for npm dependencies and UX refinements to the terminal interface, while actively investigating stability issues on macOS and Windows.

### 2. Releases
**No new official releases were published in the last 24 hours.** However, the `main` branch now contains the v0.9.1 integration (PR #4675), which serves as the foundation for the upcoming stable release pending final security gates.

### 3. Hot Issues
*   **#2870: Staged command-boundary refactor** [OPEN]
    *   **Why it matters:** This epic tracks the modularization of command logic, essential for long-term maintainability.
    *   **Reaction:** High engagement (17 comments); community is closely watching the phased implementation strategy.
*   **#4227: Help JayBeest map the CodeWhale tsunami** [OPEN]
    *   **Why it matters:** Proposes an automated workflow/skill to help contributors manage the high-velocity development environment (10+ PRs/day).
    *   **Reaction:** 12 comments; highlights the need for better contributor onboarding tools.
*   **#4684: `danger-full-access` does not disable tools-layer workspace boundary check** [OPEN]
    *   **Why it matters:** A critical security/usability bug where sandbox bypass flags fail at the tool layer, breaking global skill access.
    *   **Reaction:** Opened yesterday; immediate attention required for power users.
*   **#4085: Cannot read/write files under ~/Library/CloudStorage/Dropbox/** [OPEN]
    *   **Why it matters:** Breaks functionality for macOS users using File Provider frameworks (Dropbox), affecting a significant user base.
    *   **Reaction:** Detailed technical analysis provided by the author; awaiting maintainer review.
*   **#2889: Work Agent rows: real sub-agent details** [CLOSED]
    *   **Why it matters:** Restored issue focusing on improving the visibility and detail of sub-agent activities in the sidebar.
    *   **Reaction:** Community-owned slice; resolved with clear design direction preserved.
*   **#4691: Ship the model-invoked default CodeWhale skill pack** [CLOSED]
    *   **Why it matters:** Defines the goal of shipping a first-party skill pack comparable to competitors like Claude Code.
    *   **Reaction:** Resolved via PR #4695; sets the standard for out-of-the-box experience.
*   **#4687: Fix Kimi Code/direct Moonshot K3 model-ID cross-pairings** [CLOSED]
    *   **Why it matters:** Prevents failures when specific model IDs are incorrectly mapped to API routes.
    *   **Reaction:** Critical fix discovered during dogfooding; resolved quickly.
*   **#2886: Add Gherkin acceptance E2E coverage for tool lifecycle** [CLOSED]
    *   **Why it matters:** Enhances reliability testing for command refactoring efforts.
    *   **Reaction:** Part of the broader #2791 refactor tracking.
*   **#4685: Installer overwrites user PATH on Windows 10** [OPEN]
    *   **Why it matters:** Data loss risk for Windows users; the installer replaces rather than appends to PATH.
    *   **Reaction:** Reported immediately upon discovery; high priority for installer team.
*   **#4683: Wrong deepseek completions url** [OPEN]
    *   **Why it matters:** Flaky network errors due to incorrect URL construction (`api.deepse ek.com`).
    *   **Reaction:** Users reporting intermittent failures after long sessions.

### 4. Key PR Progress
*   **#4679: feat(skills): unified /skills manager** [CLOSED]
    *   Delivers the central interface for discovering, installing, and auditing skills across project and global roots.
*   **#4695: feat(skills): default CodeWhale skill pack (bundled v5)** [CLOSED]
    *   Ships the first-party skill pack with end-user focused models (interview, plan, debug, etc.).
*   **#4675: Integrate CodeWhale v0.9.1 runtime and release surface** [CLOSED]
    *   Merges the v0.9.1 runtime simplifications, empty-Work fixes, and new TUI color grammar into `main`.
*   **#4696: feat(tui): ship staged /uwu theme** [CLOSED]
    *   Introduces the "uwu" theme with soft-classic marks and color shimmer effects.
*   **#4694: fix(kimi): fail closed on K3 model-ID cross-pairings** [CLOSED]
    *   Enforces strict routing identity for Kimi/Moonshot APIs to prevent silent failures.
*   **#4697: fix(tui): hide empty coordination work before v0.9.1** [CLOSED]
    *   Cleans up the UI by hiding non-actionable coordination snapshots in the Work strip.
*   **#4693: fix(tui): Work summary lifecycle** [CLOSED]
    *   Fixes transient work items expiring too slowly or persisting incorrectly in the top bar.
*   **#4714: chore(deps): patch npm lockfiles for Dependabot alerts** [OPEN]
    *   Addresses 17 open security alerts (7 high, 10 moderate) across npm workspaces.
*   **#4680: fix(tui): register debt compatibility aliases** [CLOSED]
    *   Registers `/slop` and `/canzha` as aliases for `/debt` to unify command discovery.
*   **#4087: refactor(hooks): split config and executor modules** [OPEN]
    *   Improves code structure by separating hook configuration from execution logic.

### 5. Feature Request Trends
*   **Unified Skill Management:** Strong demand for a single, coherent interface to manage skills (`/skills`), moving away from fragmented commands.
*   **Context Optimization:** Significant focus on reducing token usage and improving context relevance ("Context Diet"), aiming for simpler prompts across different model families.
*   **Enhanced Visual Rhythm:** Requests for better visual hierarchy in the TUI, including semantic coloring and idle state aesthetics.
*   **Provider Flexibility:** Continued interest in supporting diverse providers (Kimi, TelecomJS, MiniMax) with robust validation and routing.

### 6. Developer Pain Points
*   **Security & Dependency Debt:** The presence of 17 Dependabot alerts (including high-severity ones) is a major blocker for the v0.9.1 release.
*   **Platform-Specific Bugs:** Recurring issues on macOS (File Provider/Dropbox) and Windows (Installer PATH handling) indicate gaps in platform-specific testing.
*   **Configuration Complexity:** Users are struggling with custom provider setups causing launch failures and incorrect URL constructions.
*   **Context Bloat:** Developers are actively working to reduce verbose tool descriptions and redundant system prompt layers to improve performance and cost-efficiency.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*