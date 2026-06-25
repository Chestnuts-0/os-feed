# AI CLI Tools Community Digest 2026-06-26

> Generated: 2026-06-25 18:45 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Report: 2026-06-26

## 1. Ecosystem Overview
The AI CLI landscape is undergoing a critical phase of maturation, shifting from experimental novelty to enterprise-grade reliability. While major players like Anthropic, OpenAI, and Google are pushing advanced multi-agent orchestration and Model Context Protocol (MCP) integration, the community is increasingly vocal about fundamental stability issues, including authentication regressions, resource leaks, and overly aggressive safety harnesses. The market is bifurcating between polished, walled-garden ecosystems (Copilot, Codex) and highly customizable, open-source alternatives (OpenCode, DeepSeek TUI), with developers demanding greater transparency in billing, session persistence, and cross-platform compatibility.

## 2. Activity Comparison

| Tool | Issues Count (Hot/Updated) | PR Count (Key Updates) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 High-Engagement Issues | 2 Major PRs | **v2.1.191** Released |
| **OpenAI Codex** | 10 Critical Issues | 10 Major PRs | **rust-v0.142.2** / Alpha Series |
| **Gemini CLI** | 10 Active Discussions | 10 Security/Stability PRs | **v0.49.0-nightly** Released |
| **GitHub Copilot** | 10 Significant Issues | 1 Minor PR | **v1.0.65** (Released 2 days ago) |
| **Kimi Code** | 1 Critical Issue | 1 Major Architectural PR | No New Release |
| **OpenCode** | 10 High-Impact Issues | 10 Core Infrastructure PRs | **v1.17.11** Released |
| **Pi** | 10 Stable/Fixed Issues | 10 Feature/Refactor PRs | No New Release |
| **Qwen Code** | 10 Active Pain Points | 10 Stability/Feature PRs | **v0.19.2-nightly** Released |
| **DeepSeek TUI** | 10 Regression/Architectural Issues | 10 Refactor/Feature PRs | Stabilizing v0.8.65 |

## 3. Shared Feature Directions
*   **MCP Integration & Standardization:** Nearly all major tools (Codex, Gemini, Kimi, OpenCode, DeepSeek) are actively refining Model Context Protocol support. The focus has shifted from basic connectivity to secure OAuth handling, tool discovery, and resolving resource conflicts between multiple MCP servers.
*   **Multi-Agent Orchestration:** There is a universal push toward robust sub-agent management. Key demands include proper isolation of worktrees (Claude Code), reliable hand-off of MCP configs to sub-agents (Kimi Code), and preventing "thought leakage" or infinite loops in autonomous sub-tasks (Gemini, DeepSeek).
*   **Session Persistence & State Management:** Users across Copilot, OpenCode, and Pi are demanding seamless session resumption. Features like `/rewind` (Claude), directory persistence (Copilot), and deterministic session IDs (Pi) highlight a need for reliable state recovery after disconnects or crashes.
*   **Enterprise & Security Controls:** Strong demand for granular permission profiles, silent hook approvals (Copilot, DeepSeek), and better handling of corporate networks/proxies (Codex, Copilot). The "safety harness" false positives in Claude Code and authentication blocks in Copilot underscore the tension between security and developer velocity.

## 4. Differentiation Analysis
*   **Claude Code:** Focuses on conversational continuity and background agent stability. However, it faces significant community backlash regarding its Linux safety harness, which blocks legitimate infrastructure automation (WiFi, SSH, TLS).
*   **OpenAI Codex:** Prioritizes deep MCP tooling and runtime stability. It is currently hampered by severe billing/quota inaccuracies and resource leaks on macOS/Windows, creating a trust deficit among power users.
*   **GitHub Copilot CLI:** Emphasizes ease of use and integration with the GitHub ecosystem. Its primary weakness is session authentication corruption and Windows UI glitches, which undermine its reliability for long-term workflows.
*   **OpenCode & DeepSeek TUI:** These open-source alternatives differentiate themselves through extreme configurability and local-first architectures. They attract users frustrated by proprietary limitations, though they struggle with platform-specific stability (Windows/Bun crashes for OpenCode, autonomous behavior loops for DeepSeek).
*   **Qwen Code & Gemini CLI:** Focus on architectural rigor. Qwen is optimizing daemon performance and cross-device sync, while Gemini is hardening security (path traversal fixes) and sub-agent reliability.

## 5. Community Momentum & Maturity
*   **High Momentum/Iterative:** **OpenAI Codex** and **OpenCode** show the highest volume of PR activity and community engagement, indicating rapid iteration cycles. However, this speed is correlated with higher regression rates (quota bugs, segfaults).
*   **Maturing/Stabilizing:** **Claude Code** and **GitHub Copilot** appear to be in a stabilization phase, with fewer daily PRs but critical fixes for foundational issues like session persistence and UI stability.
*   **Niche/Technical:** **DeepSeek TUI** and **Pi** cater to specialized developer needs (fleet management, TUI customization) with highly engaged, technically proficient communities that drive architectural refactors rather than just bug fixes.

## 6. Trend Signals
*   **The "Safety vs. Utility" Conflict:** The cluster of false-positive safety blocks in Claude Code and aggressive approval prompts in DeepSeek signals a market opportunity for tools that offer more granular, context-aware security controls without hindering administrative tasks.
*   **Billing Transparency as a Feature:** The outrage over quota discrepancies in OpenAI Codex and cost multiplier confusion in Copilot suggests that transparent, real-time usage tracking will become a key differentiator for enterprise adoption.
*   **Platform Fragmentation Risks:** Persistent issues on Windows (store packages, terminal rendering, resource leaks) and macOS (file descriptors, zombie processes) indicate that cross-platform parity is still a significant hurdle. Tools that solve these platform-specific quirks will gain a competitive advantage.
*   **Shift from Single-Chat to Agent Swarms:** The evolution from simple chat interfaces to complex multi-agent systems (with sub-agents, fleets, and shared contexts) is accelerating. Developers need tools that can manage the complexity of these interactions reliably, making orchestration stability the next battleground.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-06-26  
**Source:** `anthropics/skills` Repository Analysis

## 1. Top Skills Ranking
*Based on community engagement (comments/discussions) and criticality of reported issues.*

1.  **Skill Creator Evaluation & Optimization Suite**
    *   **Functionality:** Tools (`run_eval.py`, `run_loop.py`) for validating and optimizing skill descriptions to ensure accurate triggering.
    *   **Discussion Highlights:** Dominates recent activity due to critical bugs where evaluation scripts report `0% recall` on Windows and Linux alike. Multiple PRs attempt to fix subprocess piping, YAML parsing, and trigger detection logic.
    *   **Status:** **Open/Critical** (Multiple active PRs: #1298, #1099, #1050, #1323, #539, #361, #362)
    *   **Links:** [PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1323](https://github.com/anthropics/skills/pull/1323), [Issue #556](https://github.com/anthropics/skills/issues/556)

2.  **Frontend Design Skill**
    *   **Functionality:** Guidelines for generating high-quality frontend code with better clarity and actionability.
    *   **Discussion Highlights:** Community focus on refining instructions to be strictly actionable within single conversations, improving internal coherence.
    *   **Status:** **Open** (PR #210)
    *   **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

3.  **Security & Trust Boundary Management**
    *   **Functionality:** Meta-discussion on security implications of community skills, specifically namespace impersonation.
    *   **Discussion Highlights:** High concern regarding community skills distributed under the `anthropic/` namespace, creating trust boundary vulnerabilities.
    *   **Status:** **Open** (Issue #492)
    *   **Link:** [Issue #492](https://github.com/anthropics/skills/issues/492)

4.  **ODT (OpenDocument Text) Skill**
    *   **Functionality:** Creation, filling, and parsing of `.odt` and `.ods` files, supporting LibreOffice standards.
    *   **Discussion Highlights:** Addresses a gap in open-standard document support compared to dominant Microsoft formats.
    *   **Status:** **Open** (PR #486)
    *   **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

5.  **PDF Processing Skill**
    *   **Functionality:** Handling PDF files, including form filling and reference management.
    *   **Discussion Highlights:** Recent fixes focused on case-sensitive file reference mismatches in documentation (`SKILL.md` vs actual filenames).
    *   **Status:** **Open** (PR #538)
    *   **Link:** [PR #538](https://github.com/anthropics/skills/pull/538)

6.  **DOCX Tracked Changes Fix**
    *   **Functionality:** Improved handling of Word documents with tracked changes and existing bookmarks.
    *   **Discussion Highlights:** Critical fix for document corruption caused by `w:id` collisions between bookmarks and tracked changes.
    *   **Status:** **Open** (PR #541)
    *   **Link:** [PR #541](https://github.com/anthropics/skills/pull/541)

7.  **Agent Governance & Memory Skills**
    *   **Functionality:** Skills for policy enforcement, audit trails, and persistent context/memory management (`shodh-memory`, `compact-memory`).
    *   **Discussion Highlights:** Growing interest in long-running agent stability and safety patterns.
    *   **Status:** **Open/Draft** (Issue #412, PR #154, Issue #1329)
    *   **Links:** [Issue #412](https://github.com/anthropics/skills/issues/412), [PR #154](https://github.com/anthropics/skills/pull/154), [Issue #1329](https://github.com/anthropics/skills/issues/1329)

## 2. Community Demand Trends
*Derived from top Issues and PR themes.*

*   **Robust Evaluation Infrastructure:** There is intense demand for reliable tools to test and optimize skill definitions. The current `skill-creator` evaluation loops are perceived as broken, particularly on Windows, hindering skill development.
*   **Enterprise & Organizational Sharing:** Users frequently request mechanisms for sharing skills within organizations (Issue #228) and managing permissions securely (Issue #492, #1175).
*   **Persistent Agent Memory:** Strong interest in skills that maintain context across sessions (`shodh-memory`, `compact-memory`), indicating a shift from single-turn tasks to multi-turn agent workflows.
*   **Cross-Platform Compatibility:** Significant friction exists with Windows-specific bugs (encoding, subprocess handling, PATHEXT) in the core skill creation and evaluation scripts.

## 3. High-Potential Pending Skills
*Active PRs addressing critical gaps or usability issues.*

1.  **Comprehensive Testing Patterns Skill**
    *   **Description:** Covers the full testing stack, including the Testing Trophy, unit testing (AAA pattern), and React component testing.
    *   **Potential:** High utility for developers seeking standardized testing guidance within Claude.
    *   **Status:** Open (PR #723)
    *   **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

2.  **AppDeploy Skill**
    *   **Description:** Enables deployment and management of full-stack web apps directly from Claude using AppDeploy.ai.
    *   **Potential:** Bridges the gap between code generation and live deployment, a key workflow for many users.
    *   **Status:** Open (PR #360)
    *   **Link:** [PR #360](https://github.com/anthropics/skills/pull/360)

3.  **Codebase Inventory Audit Skill**
    *   **Description:** Systematic workflow for identifying orphaned code, unused files, and documentation gaps.
    *   **Potential:** Useful for maintenance and onboarding in large repositories.
    *   **Status:** Open (PR #147)
    *   **Link:** [PR #147](https://github.com/anthropics/skills/pull/147)

4.  **Contributing Guidelines & Documentation**
    *   **Description:** Addition of `CONTRIBUTING.md` to improve community health metrics and guide submissions.
    *   **Potential:** Crucial for reducing noise and improving the quality of incoming PRs.
    *   **Status:** Open (PR #509)
    *   **Link:** [PR #509](https://github.com/anthropics/skills/pull/509)

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for **reliable, cross-platform tooling to evaluate and optimize skill definitions**, as current bugs in the `skill-creator` evaluation loops are blocking effective skill development and adoption.

---

# Claude Code Community Digest
**Date:** 2026-06-26

## 1. Today's Highlights
Anthropic released **v2.1.191**, introducing critical stability fixes for background agents and enhancing conversation continuity with `/rewind` support. Community attention is heavily focused on false-positive safety blocks in the Linux harness, particularly regarding infrastructure automation and credential management, alongside significant engagement around Chrome tab group cleanup.

## 2. Releases
**v2.1.191**
*   **Conversation Continuity:** Added `/rewind` support to resume conversations from before a `/clear` command, improving workflow fluidity.
*   **UI Stability:** Fixed an issue where scroll position jumped to the bottom during streaming responses, allowing users to read earlier output comfortably.
*   **Agent Reliability:** Resolved a bug where background agents would "resurrect" or restart unexpectedly after being manually stopped.

[View Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.191)

## 3. Hot Issues
1.  **[FEATURE] Auto-cleanup Chrome tab groups** (#15436)
    *   **Why it matters:** Addresses persistent UI clutter as "Claude in Chrome" sessions leave orphaned tab groups.
    *   **Community Reaction:** High engagement (45 👍, 20 comments), indicating strong demand for better browser integration hygiene.
    *   [Link](https://github.com/anthropics/claude-code/issues/15436)

2.  **[BUG] /desktop fails on Windows MSIX/Store packages** (#59692)
    *   **Why it matters:** Breaks functionality for users installing Claude Desktop via the Microsoft Store, a common distribution channel.
    *   **Community Reaction:** Refiled after previous closure; 6 👍 indicates frustration with recurring installation barriers.
    *   [Link](https://github.com/anthropics/claude-code/issues/59692)

3.  **[BUG] Isolation "worktree" is a no-op for tmux teammates** (#71362)
    *   **Why it matters:** Critical for multi-agent workflows; agents currently share the orchestrator's git context, risking unintended file modifications.
    *   **Community Reaction:** Reported by advanced users utilizing complex agent orchestration.
    *   [Link](https://github.com/anthropics/claude-code/issues/71362)

4.  **[BUG] Safety block halts WPA3/SAE WiFi config** (#71373)
    *   **Why it matters:** Demonstrates overly aggressive security classifiers blocking legitimate, user-authorized infrastructure changes.
    *   **Community Reaction:** Part of a broader trend of Linux users reporting false positives.
    *   [Link](https://github.com/anthropics/claude-code/issues/71373)

5.  **[BUG] Safety block halts WLAN PUT update (WPA3 SAE)** (#71374)
    *   **Why it matters:** Similar to #71373, highlights friction in automated network configuration tasks.
    *   **Community Reaction:** Indicates a pattern in how the harness interprets credential-related API calls.
    *   [Link](https://github.com/anthropics/claude-code/issues/71374)

6.  **[BUG] Safety block blocks trusting Caddy local-CA certs** (#71378)
    *   **Why it matters:** Blocks essential development workflows involving internal TLS termination and FQDN resolution.
    *   **Community Reaction:** User argues the action was explicitly authorized and necessary for local dev.
    *   [Link](https://github.com/anthropics/claude-code/issues/71378)

7.  **[BUG] Desktop PR picker shows stale cards** (#71326)
    *   **Why it matters:** UX bug causing confusion in desktop environments where closed/merged PRs remain visible.
    *   **Community Reaction:** Re-raise of older issues, suggesting the fix wasn't fully effective.
    *   [Link](https://github.com/anthropics/claude-code/issues/71326)

8.  **[BUG] Safety block blocks reading local wallet config** (#71365)
    *   **Why it matters:** False positive on reading configuration files during debugging sessions.
    *   **Community Reaction:** Highlights difficulty in distinguishing between malicious intent and routine debugging.
    *   [Link](https://github.com/anthropics/claude-code/issues/71365)

9.  **[BUG] Safety block halts SSH key bootstrap** (#71366)
    *   **Why it matters:** Prevents basic credential recovery steps (password-to-pubkey) on user-owned hosts.
    *   **Community Reaction:** Users feel the safety layer is hindering self-administration.
    *   [Link](https://github.com/anthropics/claude-code/issues/71366)

10. **[BUG] Safety block stops restoring reverse-proxy backend** (#71367)
    *   **Why it matters:** Blocks file overwrites deemed risky by the classifier, despite user authorization.
    *   **Community Reaction:** Emphasizes the need for better context awareness in safety classifiers.
    *   [Link](https://github.com/anthropics/claude-code/issues/71367)

## 4. Key PR Progress
1.  **Bump stale and autoclose timeouts** (#63686)
    *   **Status:** Closed/Merged
    *   **Summary:** Increased the lifecycle timeout for issues from 14 days to 90 days, reducing noise from premature auto-closures of valid discussions.
    *   [Link](https://github.com/anthropics/claude-code/pull/63686)

2.  **Fix: handle server rate limiting** (#70634)
    *   **Status:** Open
    *   **Summary:** Addresses connection instability caused by server-side rate limits, aiming to improve reliability during high-frequency usage.
    *   [Link](https://github.com/anthropics/claude-code/pull/70634)

*(Note: Only 2 PRs were updated in the last 24h)*

## 5. Feature Request Trends
*   **Deep Linking & Automation:** Requests for programmatic control over desktop dialogs, such as pre-filled URLs for adding marketplace plugins (#62481) and sharing artifacts via org-wide links (#70254).
*   **UI/UX Customization:** Demands for finer control over the TUI environment, including configurable cursor shapes (#71371) and improved scrolling behavior during streaming.
*   **Browser Integration:** Strong desire for automatic cleanup of browser artifacts (tab groups) left behind by Claude sessions (#15436).

## 6. Developer Pain Points
*   **Overly Aggressive Safety Harness (Linux):** A significant cluster of issues (#71373, #71374, #71378, #71365, #71366, #71367, #71368, #71370, #71372, #71358, #71359, #71361, #71364, #71346, #71351, #71388, #71390) stems from the "harness" falsely identifying routine infrastructure administration, credential management, and configuration changes as security risks. Developers are frustrated that authorized, user-directed actions are blocked without clear rationale.
*   **Windows Installation Fragility:** The failure of `/desktop` commands on MSIX/Store installations (#59692) points to ongoing compatibility challenges with modern Windows packaging standards.
*   **Agent Isolation Flaws:** The worktree isolation bug (#71362) reveals gaps in how multi-agent environments handle filesystem boundaries, creating risks for collaborative coding sessions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-06-26

### 1. Today's Highlights
The Codex community is primarily reacting to significant discrepancies in rate-limit accounting and quota consumption, with multiple users reporting that their 5-hour usage budgets are draining exponentially faster than expected. Concurrently, the engineering team is advancing the Model Context Protocol (MCP) integration, focusing on stabilizing runtime lifecycles, OAuth security, and tool discovery mechanisms in recent alpha releases.

### 2. Releases
**rust-v0.142.2**
*   **MCP Tool Search:** MCP tools now utilize tool search by default when supported, enhancing tool discovery while maintaining backward compatibility with older models and providers.
*   **System Proxy Support:** macOS authentication clients can now honor system proxy, PAC, and WPAD settings when `respect_system_proxy` is enabled.

*(Note: Several `v0.143.0-alpha` releases were published, but no specific changelog details were provided in the source data.)*

### 3. Hot Issues
1.  **[Rate Limit Cost Spike] Codex (gpt-5.5, Plus plan) — rate-limit cost per token jumped ~10-20x** (#28879)
    *   *Why it matters:* Users report their 5-hour budget draining in 2–3 prompts on `gpt-5.5`, a drastic increase from previous baselines.
    *   *Community Reaction:* 287 👍, 147 comments. This is the highest-engagement issue of the day.
2.  **[Quota Drained Instantly] 100 credits gone after 1 message, 5h limit reset to 0%** (#29955)
    *   *Why it matters:* Reports of immediate quota exhaustion on Pro plans, suggesting a potential billing or counter logic bug.
    *   *Community Reaction:* 21 comments, 2 👍.
3.  **[SQLite Log Bloat] Codex SQLite feedback logs can write ~640 TB/year** (#28224)
    *   *Why it matters:* Addresses severe local storage consumption and SSD wear.
    *   *Community Reaction:* 380 👍. *Status:* Marked closed by author after fixes in v0.142.0 reduced log volume by 85%.
4.  **[Capacity Errors] Selected model is at capacity** (#29760)
    *   *Why it matters:* Interoperability issues with `gpt-5.4 high` on GPT Pro plans causing service interruptions.
    *   *Community Reaction:* 25 comments, 1 👍.
5.  **[Quota Meter Discrepancy] Codex 5-hour usage meter appears to consume much faster** (#28823)
    *   *Why it matters:* Corroborates #28879, highlighting a mismatch between local telemetry and server-side quota meters.
    *   *Community Reaction:* 18 comments, 1 👍.
6.  **[Server-Side Over-reporting] Server-side quota accounting over-reports consumption after 5h reset** (#30002)
    *   *Why it matters:* Pro accounts hitting limits after ~41 minutes despite low token usage (~1.35M tokens), compared to ~156M tokens earlier in the day.
    *   *Community Reaction:* 17 comments, 3 👍.
7.  **[SSH Remote Projects] Codex mobile does not show SSH remote projects** (#23527)
    *   *Why it matters:* Broken UX for mobile users connecting to Mac hosts with SSH remote projects.
    *   *Community Reaction:* 9 comments, 12 👍.
8.  **[App Spinning] Codex App just spinning and not doing anything** (#10786)
    *   *Why it matters:* Persistent stability issue where the app fails to respond to basic prompts like "Hello".
    *   *Community Reaction:* 9 comments, 2 👍.
9.  **[macOS System Policy Exhaustion] macOS: Codex Desktop/app-server appears to exhaust syspolicyd** (#27662)
    *   *Why it matters:* Causes global OS instability ("Too many open files") affecting unrelated applications and Finder.
    *   *Community Reaction:* 9 comments, 4 👍.
10. **[Zombie Processes] Codex for macOS accumulates Computer Use / MCP helper processes** (#25744)
    *   *Why it matters:* Resource leaks leading to HID lag and WindowServer stalls on macOS.
    *   *Community Reaction:* 7 comments, 2 👍.

### 4. Key PR Progress
1.  **[Pin MCP runtime to each model step]** (#30101)
    *   Ensures MCP connections are scoped correctly to model steps, preventing tool execution mismatches when the MCP manager is replaced dynamically.
2.  **[Project selected MCP runtimes from extension-owned metadata]** (#30093)
    *   Aligns plugin manifests and MCP declarations with the stable selected executor root, improving lifecycle management.
3.  **[Consolidate the authority-neutral skill runtime]** (#30100)
    *   Merges overlapping skill catalogs (`core-skills` vs. skills extension) to ensure a consistent skill view for model steps.
4.  **[Add Codex-owned OAuth recovery]** (#30091)
    *   Prevents concurrent MCP OAuth refreshers from replaying rotating tokens or overwriting credentials, enhancing security and stability.
5.  **[Allow partial MCP server definitions across config layers]** (#29905)
    *   Improves configuration flexibility by allowing partial MCP server definitions in individual config layers while maintaining strict validation.
6.  **[Expose permission profile to shell tools]** (#29941)
    *   Injects `CODEX_PERMISSION_PROFILE` env var into shell tools, enabling nested commands to inherit correct permission contexts.
7.  **[Retry failed Codex Apps MCP startup]** (#29920)
    *   Fixes memoization of terminated futures during MCP manager startup, ensuring robust reconnection attempts.
8.  **[Retry temporarily offline exec-server recovery]** (#30098)
    *   Adds handling for `409 environment_offline` responses in the exec-server recovery loop, improving resilience against transient disconnections.
9.  **[Refresh one server in place]** (#30083)
    *   Introduces `RefreshMcpServer` operation for Managed Agents, allowing credential rotation for a single server without reconnecting the entire session.
10. **[Add history_mode to thread]** (#29927)
    *   Adds `legacy` or `paginated` history modes to threads, stored in session metadata for better control over history retrieval strategies.

### 5. Feature Request Trends
*   **Proxy Configuration:** Strong demand for configurable outbound HTTP proxies (`http_proxy` in `config.toml`) to support enterprise environments using Zscaler or explicit proxies (#6060).
*   **Project Management:** Requests for first-class project management in the Desktop app, including registering folders as projects and moving threads between them (#25498).
*   **Localization:** Specific request for Chinese UI localization support, noting that `localeOverride` exists but translations are missing (#30060).
*   **Enterprise GitHub Integration:** Support for GitHub Enterprise (GHE.com) repositories in Codex Cloud/IDE extensions (#12691).

### 6. Developer Pain Points
*   **Quota & Rate Limit Inaccuracies:** The dominant pain point is the perceived or actual inflation of token costs and quota consumption, particularly on `gpt-5.5` and Pro plans. Users feel penalized for usage patterns that previously consumed minimal budget.
*   **Windows Stability:** Multiple reports of the Windows App failing to start conversations, getting stuck in "Thinking," crashing with memory pressure, or failing sandbox execution (`CreateProcessAsUserW`) (#29544, #30050, #30076, #30024).
*   **macOS Resource Leaks:** Persistent issues with zombie processes, file descriptor exhaustion (`syspolicyd`), and resource leaks causing system-wide instability on macOS (#27662, #25744).
*   **CLI/TUI Glitches:** Issues with local plugins being hidden by remote catalogs (#29633) and hooks being ignored in git worktrees (#27133) hinder smooth local development workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-06-26

## 1. Today's Highlights
The Gemini CLI team prioritized security and stability in the latest nightly release, addressing critical path traversal vulnerabilities and refining tool trust overrides. Significant engineering efforts are underway to resolve subagent reliability issues, including fixes for "thought leakage" in history turns and robust handling of MCP resource conflicts.

## 2. Releases
**v0.49.0-nightly.20260625.gd845bc5d4**
*   **Security Fix:** Prevented path traversal vulnerabilities during skill installation ([PR #27767](https://github.com/google-gemini/gemini-cli/pull/27767)).
*   **Bug Fix:** Resolved issues with pending tools and trust overrides ([PR #27854](https://github.com/google-gemini/gemini-cli/pull/27854)).
*   **CI:** Updated continuous integration configurations.

## 3. Hot Issues
*   **[P1] Subagent Recovery & Goal Success Hiding Interruption** (#22323): Critical bug where subagents report success despite hitting turn limits, masking errors. *(8 comments, 2 👍)*
*   **[P1] Generalist Agent Hangs** (#21409): The generalist agent frequently hangs indefinitely on simple tasks, requiring manual cancellation. *(7 comments, 8 👍)*
*   **[P2] Robust Component Level Evaluations** (#24353): Epic tracking the expansion of behavioral evals to improve agent reliability across supported Gemini models. *(7 comments)*
*   **[P2] Assess Impact of AST-Aware Tools** (#22745): Investigation into using Abstract Syntax Tree parsing for more precise file reading and codebase mapping. *(7 comments, 1 👍)*
*   **[P2] Gemini Does Not Use Skills/Sub-agents Enough** (#21968): Users report the agent rarely invokes custom skills or sub-agents unless explicitly prompted, reducing autonomy. *(6 comments)*
*   **[P2] Shell Command Execution Stuck** (#25166): CLI hangs showing "Waiting input" after simple shell commands complete, blocking workflow. *(4 comments, 3 👍)*
*   **[P2] Browser Agent Fails in Wayland** (#21983): The browser subagent fails to operate correctly on Wayland-based Linux desktops. *(4 comments, 1 👍)*
*   **[P2] Auto Memory Low-Signal Retry Loop** (#26522): Auto Memory feature retries processing low-signal sessions indefinitely instead of quarantining them. *(5 comments)*
*   **[P2] Deterministic Redaction & Logging** (#26525): Concerns regarding sensitive data exposure in Auto Memory logs and the need for better redaction before model context ingestion. *(5 comments)*
*   **[P3] Invalid Auto Memory Inbox Patches** (#26523): System silently skips invalid memory patches (malformed or out-of-bounds), leading to inconsistent state. *(3 comments)*

## 4. Key PR Progress
*   **Fix Docker Artifacts** (#28148): Corrects multi-stage Docker builds to properly copy packed artifacts from the builder stage.
*   **Prevent Bad NPM Releases** (#28147): Reorganizes CI to run integration tests before publishing, preventing dangling releases if tests fail.
*   **Vertex AI Endpoint Routing** (#28145): Routes default base URLs to Vertex AI Regional Endpoints (US/EU) based on `GOOGLE_CLOUD_LOCATION`.
*   **Lazy Editor Detection** (#28144): Optimizes startup time by detecting available editors lazily, avoiding synchronous process checks on startup.
*   **Resolve Thought Leakage** (#27971): Fixes a bug where internal model reasoning ("thoughts") leaked into plain-text history turns, causing infinite loops.
*   **MCP Resource Conflict Fix** (#28143): Ensures `read_mcp_resource` resolves content by server to prevent returning wrong data when multiple servers expose the same URI.
*   **Honor Vertex Location with API Key** (#28142): Fixes a bug where `GOOGLE_CLOUD_LOCATION` was ignored when using API keys, routing requests to global endpoints instead of regional ones.
*   **Fix Trust Dialog Hook Display** (#27915): Corrects the workspace trust dialog to accurately display which hooks execute, preventing security confusion.
*   **Deep-Merge Settings** (#28094): Fixes a shallow merge bug in A2A server settings, ensuring nested configurations (tools, telemetry) are preserved.
*   **Patch Shell/Git Dependencies** (#28140): Updates `shell-quote` and `simple-git` to address public security advisories.

## 5. Feature Request Trends
*   **Enhanced Subagent Autonomy:** Strong demand for the agent to better utilize custom skills and sub-agents without explicit user instruction (#21968, #22323).
*   **Improved Observability:** Requests for better visibility into subagent trajectories via `/chat share` (#22598) and inclusion of subagent context in bug reports (#21763).
*   **Resilience & Error Handling:** Interest in automatic session takeover for browser agents (#22232) and robust handling of invalid memory patches (#26523).
*   **Performance Optimization:** Desire for faster startup times (#28144) and flicker-free terminal resizing (#21924).

## 6. Developer Pain Points
*   **Agent Reliability:** Frequent hangs, infinite loops, and failure to respect configuration overrides (e.g., `settings.json` ignored by Browser Agent #22267) frustrate users relying on automation.
*   **Security & Privacy:** Concerns persist around secret redaction in Auto Memory (#26525), case-insensitive path bypasses (#27966), and potential hook disclosure in trust dialogs (#27915).
*   **Environment Compatibility:** Specific failures on Wayland (#21983) and issues with external editor interactions in `terminalBuffer` mode (#24935) highlight ongoing platform stability challenges.
*   **Tool Limitations:** Errors encountered with large numbers of tools (>128/400) (#24246) and incorrect character encoding in web fetches (#27996) suggest scaling and robustness issues in core utilities.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-26

### 1. Today's Highlights
The Copilot CLI team released **v1.0.65** on June 24, introducing critical improvements to session persistence via `/cd` and fixing spurious permission prompts for slash-prefixed arguments. Community attention is heavily focused on authentication regressions in resumed sessions, Windows terminal rendering alignment issues, and clarifications regarding model cost multipliers and quota deductions.

### 2. Releases
**v1.0.65** (Released 2026-06-24)
*   **Session Persistence:** The `/cd` command now persists the working directory, ensuring that resuming a session returns to the correct context and discovers custom agents within that directory.
*   **Permission Prompt Fix:** Resolved an issue where commands with slash-prefixed string arguments (e.g., `--body "/azp run"`) incorrectly triggered filesystem permission prompts.
*   **UI Stability:** Continued refinements to the fullscreen timeline interface.

[View Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.65)

### 3. Hot Issues
1.  **[Bug] Resumed Session Authentication Block** (#3596, #3680)
    *   **Why it matters:** Users cannot list models or use `/model` in resumed sessions, receiving a "Not authenticated" error despite successful login. This breaks workflow continuity.
    *   **Reaction:** High interest (11 👍 on #3596); multiple reports indicate this is a widespread regression in v1.0.56+.
    *   [Link #3596](https://github.com/github/copilot-cli/issues/3596) | [Link #3680](https://github.com/github/copilot-cli/issues/3680)

2.  **[Bug] Windows Terminal Scrollbar Misalignment** (#3501)
    *   **Why it matters:** Since the introduction of the vertical scrollbar, text rendering on Windows Console/Terminal is misaligned, affecting readability.
    *   **Reaction:** 9 👍; users report inability to self-fix via settings.
    *   [Link](https://github.com/github/copilot-cli/issues/3501)

3.  **[Bug] Voice Mode Failure on Corporate Networks** (#3636)
    *   **Why it matters:** Voice mode activation fails due to inability to fetch the model catalog behind corporate VPNs/firewalls, blocking STT functionality entirely.
    *   **Reaction:** 5 👍; highlights network resilience gaps.
    *   [Link](https://github.com/github/copilot-cli/issues/3636)

4.  **[Question] Model Cost Multiplier Discrepancy** (#3881)
    *   **Why it matters:** A user reports that a 6x multiplier model deducted 5% of their monthly quota instead of the expected ~2%, suggesting potential billing logic errors.
    *   **Reaction:** 0 👍 but flagged for immediate financial accuracy review.
    *   [Link](https://github.com/github/copilot-cli/issues/3881)

5.  **[Feature] List Supported Models** (#700)
    *   **Why it matters:** Lack of a native `--list-models` command forces users to guess available models and their multipliers, hindering efficient resource management.
    *   **Reaction:** 4 👍; long-standing request since Dec 2025.
    *   [Link](https://github.com/github/copilot-cli/issues/700)

6.  **[Bug] preToolUse Silent Rewrite Ignored** (#2643)
    *   **Why it matters:** Hooks using `updatedInput` with `permissionDecision: allow` still trigger interactive confirmation dialogs, defeating the purpose of silent automation.
    *   **Reaction:** 2 👍; critical for plugin developers.
    *   [Link](https://github.com/github/copilot-cli/issues/2643)

7.  **[UX] Escape Key Drops Queued Prompts** (#3692)
    *   **Why it matters:** Pressing Escape to cancel a task discards pending queued prompts instead of focusing on them, leading to data loss for users.
    *   **Reaction:** 1 👍; intuitive behavior expectation mismatch.
    *   [Link](https://github.com/github/copilot-cli/issues/3692)

8.  **[Bug] Linux AppImage LD_LIBRARY_PATH Leak** (#3925)
    *   **Why it matters:** The AppImage exports bundled library paths to child processes (like Git), causing HTTPS failures due to symbol lookup errors in `libnghttp2`.
    *   **Reaction:** 0 👍; high severity for Linux deployments.
    *   [Link](https://github.com/github/copilot-cli/issues/3925)

9.  **[Feature] Configurable Key Bindings** (#2419, #1729)
    *   **Why it matters:** Users want to map F-keys to slash commands for faster model switching and input customization, citing friction in current workflows.
    *   **Reaction:** 5 👍 each; strong demand for developer ergonomics.
    *   [Link #2419](https://github.com/github/copilot-cli/issues/2419) | [Link #1729](https://github.com/github/copilot-cli/issues/1729)

10. **[UX] Queued vs Pending Message Ambiguity** (#3919)
    *   **Why it matters:** The CLI uses "queued" and "pending" interchangeably or confusingly without documentation, causing user confusion about message state.
    *   **Reaction:** 0 👍; clarity improvement needed.
    *   [Link](https://github.com/github/copilot-cli/issues/3919)

### 4. Key PR Progress
*   **#3928: Add .gitignore and settings configuration**
    *   **Status:** Open
    *   **Summary:** Initial contribution adding standard ignore patterns and settings configuration scaffolding.
    *   [Link](https://github.com/github/copilot-cli/pull/3928)

*(Note: No other significant PRs were reported in the last 24 hours.)*

### 5. Feature Request Trends
*   **Enterprise Configuration Management:** Significant demand for org-level management of local CLI settings, particularly environment variables and MCP server configurations, to support secure corporate environments (#3909).
*   **Advanced Plugin & Hook Control:** Requests for finer-grained control over plugin behaviors, specifically silent command rewrites (#2643) and asynchronous execution of read-only slash commands like `/mcp show` (#3829).
*   **Cross-Platform Mobile Parity:** Users are requesting that the GitHub Mobile app support advanced CLI features when attached to remote sessions, such as slash commands, shell execution (`!`), and file/image uploads (#3922, #3923, #3924).
*   **Ergonomics & Accessibility:** Continued push for customizable keybindings (#2419), fine-grained theming beyond dark/light modes (#2123), and improved keyboard handling for pasted content (#3936).

### 6. Developer Pain Points
*   **Authentication State Corruption:** The most acute pain point is the failure of authentication context when resuming sessions, preventing basic functionality like model selection (#3596, #3680).
*   **Rendering Instability on Windows:** Terminal UI glitches, specifically text misalignment caused by scrollbars (#3501) and markdown rendering bugs like em-dashes triggering strikethrough (#3920), degrade the user experience.
*   **Network Resilience:** The CLI struggles with corporate proxies/VPNs, failing to fetch necessary catalogs for voice mode (#3636) and leaking environment variables that break child processes on Linux (#3925).
*   **Billing Transparency:** Users are confused by model cost multipliers and quota deduction rates, indicating a need for clearer documentation or real-time feedback on usage costs (#3881).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-06-26

### 1. Today's Highlights
The repository saw no new releases in the last 24 hours, but community attention remains focused on UI stability and advanced agent configuration. A critical bug report regarding interface rendering issues on Linux has been opened, while a significant pull request fixing MCP tool propagation to subagents has recently been merged.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*(Note: Only 1 issue was updated in the last 24 hours.)*

1. **[BUG] Interface shaking and full conversation re-rendering**
   * **Link:** [Issue #2474](https://github.com/MoonshotAI/kimi-cli/issues/2474)
   * **Summary:** Users on Linux (K2.7 Code thinking model) report severe UI instability where the interface shakes and repeatedly re-renders the entire chat history from scratch.
   * **Significance:** This affects core usability and performance, particularly for long conversations. The lack of comments suggests it may be an isolated environment-specific bug or still under investigation by maintainers.

### 4. Key PR Progress
*(Note: Only 1 PR was updated/closed in the last 24 hours.)*

1. **[fix] Propagate MCP configs to subagents and resume immediately**
   * **Link:** [PR #1942](https://github.com/MoonshotAI/kimi-cli/pull/1942)
   * **Status:** Closed/Merged
   * **Summary:** Fixes a critical architectural gap where `SubagentBuilder` hardcoded empty `mcp_configs`, preventing MCP tools from functioning in sub-agents (explore, coder, plan) and resumed sessions.
   * **Impact:** Restores expected functionality for complex multi-agent workflows involving Model Context Protocol tools.

### 5. Feature Request Trends
Based on the recent activity:
*   **Robustness in Multi-Agent Workflows:** With the merge of PR #1942, there is a clear trend toward ensuring configuration consistency (like MCP settings) across nested agent hierarchies and session resumption.
*   **UI Stability on Headless/Linux Environments:** The reported issue highlights a demand for stable TUI (Text User Interface) rendering, especially when using heavy reasoning models like K2.7 Code thinking on Linux servers.

### 6. Developer Pain Points
*   **Rendering Performance:** High-frequency re-rendering and UI "shaking" on Linux platforms disrupt the coding flow, indicating potential optimization issues with the terminal interface handling large context windows or specific model outputs.
*   **Configuration Drift in Sub-agents:** Previously, users faced frustration when MCP tools available in the main session failed to inherit into sub-agents or upon session resume, requiring manual reconfiguration. This pain point appears to have been addressed by the recent PR, but vigilance is required for edge cases.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-06-26

### 1. Today's Highlights
OpenCode v1.17.11 introduces critical session snapshot and revert controls, allowing users to roll back sessions to earlier states, including file changes, alongside improved MCP OAuth URL handling. Significant community attention remains on Windows-specific stability issues, particularly Bun segmentation faults and TUI black screens affecting recent versions. Concurrently, core infrastructure work continues with major refactors to schema contracts and session runtime operations to ensure protocol compatibility and reliability.

### 2. Releases
**v1.17.11**
*   **Core Improvements:** Added session snapshots and revert controls to rollback sessions to earlier messages, preserving file changes.
*   **Bugfixes:** Ensured MCP OAuth URLs are always printed to facilitate manual sign-in when the browser flow fails.

*(Note: v1.17.10 previously added MCP server instructions to session context, Opencode-managed provider integration, `--mini` CLI mode, and various resource template/listing tools.)*

### 3. Hot Issues
1.  **[OPEN] OpenCode v1.17.10 crashes with Bun segmentation fault on Windows** (#33742)
    *   *Why it matters:* High-impact regression causing immediate crashes for Windows users upgrading to v1.17.10. Downgrading to v1.17.9 is the current workaround.
    *   *Reaction:* 44 comments, 39 👍. Urgent community concern.
2.  **[CLOSED] Free usage exceeded. Add creddits (when using Zen free models)** (#14273)
    *   *Why it matters:* Highlights confusion around Opencode Zen billing and free-tier caps for specific models like Kimi K2.5.
    *   *Reaction:* 33 comments, 1 👍. Long-standing discussion on pricing logic.
3.  **[OPEN] Very frequent errors when using openai** (#23944)
    *   *Why it matters:* Reports persistent `server_error` messages with OpenAI models (e.g., gpt-5.4), impacting reliability for cloud-based users.
    *   *Reaction:* 19 comments, 14 👍.
4.  **[OPEN] Tool execution aborted/terminated** (#26063)
    *   *Why it matters:* Local LLM users (LM Studio) report interrupted tool executions, suggesting instability in local provider integrations.
    *   *Reaction:* 22 comments.
5.  **[OPEN] [FEATURE]: Add native Jupyter notebook (.ipynb) support** (#11409)
    *   *Why it matters:* Addresses a major gap in data science workflows by requesting direct `.ipynb` file interaction.
    *   *Reaction:* 12 comments, 20 👍. Strong feature demand.
6.  **[CLOSED] /sessions TUI only shows recent sessions, ignores historical ones** (#16270)
    *   *Why it matters:* Users with large databases could not access older sessions due to a hardcoded time-limit filter in the TUI bootstrap.
    *   *Reaction:* 11 comments. Resolved via code change.
7.  **[CLOSED] [docs] feat(i18n): Add RTL (Right-to-Left) support for Arabic and other RTL languages** (#10908)
    *   *Why it matters:* Improves accessibility for non-LTR language speakers, expanding global usability.
    *   *Reaction:* 11 comments, 7 👍.
8.  **[OPEN] [FEATURE]: Multiple account login with Codex OAuth and round robin load balancing** (#8145)
    *   *Why it matters:* Enterprise users seek multi-account support to distribute load or manage different API keys seamlessly.
    *   *Reaction:* 7 comments, 19 👍.
9.  **[OPEN] There’s no way to open opencode** (#33828)
    *   *Why it matters:* New users report blank screens after installation on Windows, indicating potential setup or rendering issues in the latest builds.
    *   *Reaction:* 6 comments.
10. **[CLOSED] [FEATURE]: Add the possibility to read the thoughts of AI in Desktop OpenCode App** (#33906)
    *   *Why it matters:* Requests visibility into the AI's internal reasoning process ("thoughts") within the desktop interface.
    *   *Reaction:* 6 comments.

### 4. Key PR Progress
1.  **fix(acp): include shell command and file path in permission prompts** (#28921)
    *   Enhances transparency in Agent Control Plane (ACP) permissions by displaying specific commands and paths in prompts.
2.  **fix(acp): show real tool context in permission prompt title** (#33950)
    *   Replaces generic tool kind titles (e.g., "bash") with descriptive context in permission dialogs.
3.  **refactor(core): support tiered layer nodes** (#33937)
    *   Introduces type-safe tier makers and dependency validation for core architectural layers.
4.  **fix(tui): avoid rendering "1000.0K" in compact number formatting** (#33948)
    *   Corrects cosmetic formatting issues in TUI context panels and footers.
5.  **fix(app): restore timeline scroll position** (#33943)
    *   Persists session timeline positions across tab switches and reloads, improving UX continuity.
6.  **feat(sdk): restore session runtime operations** (#33777)
    *   Adds `sessions.events`, `interrupt`, and `message` to the Session HttpApi for better programmatic control.
7.  **fix(tui): restore ESC interrupt for delegated subagent sessions** (#32767)
    *   Fixes a regression preventing users from interrupting subagent tasks via the ESC key.
8.  **fix(app): use tab-scoped servers in sessions** (#33946)
    *   Ensures session-specific terminal auth and project selection are isolated per tab/server connection.
9.  **feat(opencode): add /goal stop-condition command** (#33944)
    *   Allows users to define custom stop conditions evaluated by a judge model during agent runs.
10. **refactor(protocol): define current event surface** (#33772)
    *   Establishes a clear boundary between current and legacy protocol events for SDK and App consumption.

### 5. Feature Request Trends
*   **Enhanced Session Management:** Users heavily request granular control over sessions, including reverting changes (#11409 trend implies broader workflow control), viewing historical sessions beyond recent windows, and defining custom stop conditions (#33944).
*   **Multi-Account & Enterprise Support:** There is growing demand for multi-account login capabilities (#8145) and per-user credential management for shared deployments (#20067), indicating a push toward team/enterprise adoption.
*   **Transparency & Debugging:** Requests for seeing AI "thoughts" (#33906) and detailed permission contexts (#28921) suggest users want deeper insight into the agent's decision-making process.
*   **Format Support:** Native Jupyter Notebook support (#11409) remains a top-requested feature for data-centric developers.

### 6. Developer Pain Points
*   **Windows/Bun Instability:** A significant cluster of issues (#33742, #15676, #31144, #15283, #33887) points to severe stability problems on Windows, specifically involving Bun runtime crashes, segmentation faults, and TUI rendering failures (black screens).
*   **Database Migration Compatibility:** Concerns about downgrade-incompatible database migrations (#33898) breaking recovery workflows highlight risks in version skew scenarios.
*   **Zen Billing Confusion:** Discrepancies between free usage caps and paid balances (#14273, #33495) cause friction, with paid users sometimes hitting free-tier limits unexpectedly.
*   **Local Provider Reliability:** Issues with local models like LM Studio (#26063) and OpenAI endpoints (#23944) indicate ongoing challenges with third-party provider integration stability.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-06-26

### 1. Today's Highlights
The Pi community is actively addressing critical stability issues in the TUI renderer and OpenAI provider integrations, with several high-engagement discussions surrounding connection reliability and session management bugs. Significant progress is being made on infrastructure improvements, including the introduction of a local orchestrator daemon and enhanced RPC capabilities for session introspection.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **#4945 [OPEN] openai-codex Connection Reliability Issues**
    *   **Why it matters:** Addresses a persistent bug where the TUI hangs on "Working..." without streaming text or errors, requiring manual intervention.
    *   **Reaction:** High engagement (70 comments, 30 👍), indicating widespread impact on user workflow.
    *   [View Issue](https://github.com/earendil-works/pi/issues/4945)

*   **#5103 [CLOSED] pi-windows-x64.zip build from GitHub can't detect git-bash from PATH properly**
    *   **Why it matters:** Resolved a critical compatibility issue for Windows users relying on Git Bash for built-in tools.
    *   **Reaction:** Closed as fixed; originally reported by CXwudi.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5103)

*   **#5363 [OPEN] Add amazon-bedrock-mantle provider for OpenAI-compatible models**
    *   **Why it matters:** Enables support for Amazon Bedrock Mantle models, which use a different API endpoint than standard Bedrock Converse API.
    *   **Reaction:** Feature request with 14 comments and 4 👍, driven by tasadurian.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5363)

*   **#6050 [CLOSED] TUI full redraw clears terminal scrollback during active rendering**
    *   **Why it matters:** Fixed a UX regression where terminal scrollback was cleared during active TUI rendering, particularly noticeable with custom UI components.
    *   **Reaction:** Closed as fixed; reported by AeonDave.
    *   [View Issue](https://github.com/earendil-works/pi/issues/6050)

*   **#5595 [CLOSED] openai-completions maxTokens not passing through**
    *   **Why it matters:** Resolved an issue where reasoning models (e.g., DeepSeek v4pro) ignored `maxTokens` settings, leading to premature cutoffs.
    *   **Reaction:** Closed as fixed; reported by elialbert.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5595)

*   **#5989 [CLOSED] pi update broke extension pi-lovely-codex**
    *   **Why it matters:** Highlighted breaking changes in recent updates that affected third-party extensions, prompting compatibility reviews.
    *   **Reaction:** Closed; reported by graehl.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5989)

*   **#4290 [CLOSED] Messages aborted for length treated as regular stops**
    *   **Why it matters:** Clarified behavior around message abortion vs. normal completion, helping users distinguish between errors and intended stops.
    *   **Reaction:** Closed; reported by DanielThomas.
    *   [View Issue](https://github.com/earendil-works/pi/issues/4290)

*   **#5670 [CLOSED] Tab completion grabs first item after typing to narrow a still-ambiguous menu**
    *   **Why it matters:** Improved tab completion logic in the editor to prevent premature selection when narrowing ambiguous paths.
    *   **Reaction:** Closed as fixed; reported by ekans.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5670)

*   **#5671 [CLOSED] ~/.pi and cwd/.pi overlap**
    *   **Why it matters:** Discussed architectural improvements to separate global and project-local settings in the `.pi` directory structure.
    *   **Reaction:** Closed for discussion; reported by mitsuhiko.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5671)

*   **#6060 [CLOSED] TypeError: content is not iterable when TUI footer renders token stats**
    *   **Why it matters:** Fixed a crash in the TUI footer when calculating token statistics for sessions containing only tool-call assistant messages.
    *   **Reaction:** Closed as fixed; reported by wickedTangent.
    *   [View Issue](https://github.com/earendil-works/pi/issues/6060)

### 4. Key PR Progress
*   **#6078 [OPEN] feat(coding-agent): add get_entries and get_tree RPC commands**
    *   Exposes `get_entries` and `get_tree` RPC commands for external drivers to inspect session history and structure.
    *   [View PR](https://github.com/earendil-works/pi/pull/6078)

*   **#6064 [OPEN] feat(experimental): pi orchestrator**
    *   Introduces a local orchestrator daemon for managing multiple Pi instances via IPC, enabling lifecycle control and process coordination.
    *   [View PR](https://github.com/earendil-works/pi/pull/6064)

*   **#5832 [OPEN] fix(ai): surface provider HTTP error body instead of opaque SDK message**
    *   Improves debugging by ensuring HTTP error bodies from providers (e.g., Bedrock, OpenAI) are surfaced instead of generic SDK messages.
    *   [View PR](https://github.com/earendil-works/pi/pull/5832)

*   **#5270 [CLOSED] Ephemeral session model and thinking level selection**
    *   Changes `setModel` and `setThinkingLevel` to session-only by default, preventing accidental overwrites of global defaults during in-session tweaks.
    *   [View PR](https://github.com/earendil-works/pi/pull/5270)

*   **#6074 [OPEN] fix(coding-agent): avoid pre-prompt compaction continue**
    *   Fixes a logic error in the coding agent that incorrectly triggered continuation after pre-prompt compaction.
    *   [View PR](https://github.com/earendil-works/pi/pull/6074)

*   **#6067 [CLOSED] fix(prompt): add an overeager scope-discipline rule to the system prompt**
    *   Adds a system prompt directive to keep the agent strictly within the requested scope, reducing unnecessary code modifications.
    *   [View PR](https://github.com/earendil-works/pi/pull/6067)

*   **#6063 [CLOSED] Extension stats**
    *   Fixes issues with OSC garbage printing when using benchmarking flags and improves extension statistics reporting.
    *   [View PR](https://github.com/earendil-works/pi/pull/6063)

*   **#6056 [CLOSED] feat(subagent): simplify agent configs, add default agent, use minimax model**
    *   Simplifies subagent extension configurations and switches example agents to use the MiniMax model for better performance/conciseness.
    *   [View PR](https://github.com/earendil-works/pi/pull/6056)

*   **#6054 [CLOSED] feat(agent,coding-agent): add runParallelAgentTasks + parallel batching system prompt guideline**
    *   Introduces `runParallelAgentTasks` utility and guidelines to encourage the model to batch independent tool calls for efficiency.
    *   [View PR](https://github.com/earendil-works/pi/pull/6054)

*   **#6070 [CLOSED] feat: allow --session-id with --no-session for deterministic in-memory session IDs**
    *   Allows specifying a deterministic session ID even when running in `--no-session` mode, useful for testing and reproducibility.
    *   [View PR](https://github.com/earendil-works/pi/pull/6070)

### 5. Feature Request Trends
*   **Enhanced Provider Support:** Strong demand for adding new providers (Amazon Bedrock Mantle, custom OpenRouter-style routers) and improving error visibility for existing ones.
*   **Orchestration & Management:** Interest in local orchestration daemons and better session management tools (e.g., deterministic IDs, parallel task execution).
*   **TUI/UX Improvements:** Requests for better handling of terminal resizing, scrollback preservation, and clearer token usage statistics (including reasoning tokens).

### 6. Developer Pain Points
*   **TUI Stability:** Recurring issues with TUI crashes, viewport jumping, and scrollback clearing, especially when running inside `tmux` or with custom extensions.
*   **Session & State Management:** Bugs related to session file truncation, overlapping global/project settings, and silent failures in `SessionManager.open()`.
*   **Provider Integration Fragility:** Issues with token limits not passing through, connection hangs, and stale authentication tokens in parallel sessions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-06-26
**Source:** github.com/QwenLM/qwen-code

## 1. Today's Highlights
The Qwen Code team released nightly build `v0.19.2-nightly.20260625.b2f11b735`, addressing core stability with a fix for `web_fetch` JSON fallbacks. Significant attention is being paid to daemon architecture refinements, including splitting server routes and optimizing startup performance, while critical bugs regarding PowerShell resource leaks on Windows and context compression timeouts are being actively addressed.

## 2. Releases
*   **v0.19.2-nightly.20260625.b2f11b735**
    *   **Core Fix:** Allows `web_fetch` to fall back to JSON parsing when initial fetch fails, improving reliability with API providers. ([PR #5660](https://github.com/QwenLM/qwen-code/pull/5660))

## 3. Hot Issues
These issues represent the most active or impactful discussions among the community and maintainers.

1.  **[Bug] Windows PowerShell OOM Leak** - A severe memory leak where PowerShell processes are spawned but never closed, leading to Out-of-Memory errors on Windows. High frustration expressed by users. ([#5873](https://github.com/QwenLM/qwen-code/issues/5873))
2.  **[Bug] Streaming Setup Timeout** - Users report API errors due to streaming setup timeouts, suggesting input reduction or config adjustments. ([#401](https://github.com/QwenLM/qwen-code/issues/401))
3.  **[Feature] Team-Tier Git-Shared Memory** - Proposal to add a shared "team" tier to auto-memory, allowing cross-device synchronization of project facts via Git. ([#5867](https://github.com/QwenLM/qwen-code/issues/5867))
4.  **[Bug] Context Compression Gateway Timeout** - Non-streaming context compression requests are timing out in gateway-heavy deployments, impacting long sessions. ([#5861](https://github.com/QwenLM/qwen-code/issues/5861))
5.  **[Feature] Adjustable Agent Command Timeout** - Request to allow users to configure timeouts for commands initiated by the AI agent, enhancing control over long-running tasks. ([#5838](https://github.com/QwenLM/qwen-code/issues/5838))
6.  **[Bug] Repeated Shell Tool Results** - Deterministic providers may cause Qwen Code to repeat completed shell tool results indefinitely. ([#5641](https://github.com/QwenLM/qwen-code/issues/5641))
7.  **[UI Bug] Response Cut Off** - Agent responses are occasionally truncated in the UI, despite logs showing the full content was generated. ([#5837](https://github.com/QwenLM/qwen-code/issues/5837))
8.  **[Feature] Persistent Todo Lists** - Users want task lists to persist within the project directory (`.qwen/todos`) for cross-device sync, rather than just local app data. ([#5836](https://github.com/QwenLM/qwen-code/issues/5836))
9.  **[Security] WebFetch Userinfo Validation** - Feature to reject URLs containing embedded credentials (userinfo) to prevent accidental exposure of sensitive data. ([#5782](https://github.com/QwenLM/qwen-code/issues/5782))
10. **[UI] Status Line Preset Default** - Suggestion to enable the built-in status line preset by default for new users to provide immediate context (model, git branch, etc.). ([#5789](https://github.com/QwenLM/qwen-code/issues/5789))

## 4. Key PR Progress
Notable pull requests advancing the codebase stability and feature set.

1.  **feat(core): PreToolUse Hook Confirmation** - Surfaces `ask` decisions from `PreToolUse` hooks as native TUI confirmations, improving security and user control. ([#5629](https://github.com/QwenLM/qwen-code/pull/5629))
2.  **feat(core): Extension Creator Skill** - Adds a bundled skill to guide agents through scaffolding and testing Qwen Code extensions locally. ([#5828](https://github.com/QwenLM/qwen-code/pull/5828))
3.  **feat(desktop): Voice Dictation** - Brings the `/voice` dictation feature to the desktop app, matching CLI and Web Shell capabilities with a dedicated microphone toolbar. ([#5856](https://github.com/QwenLM/qwen-code/pull/5856))
4.  **feat(core): Self-Paced Loop Improvements** - Optimizes `/loop` to rely on monitor/background-task notifications instead of just timers, reducing unnecessary wake-ups. ([#5844](https://github.com/QwenLM/qwen-code/pull/5844))
5.  **ci(autofix): Loosen Candidate Filters** - Adjusts the scheduled autofix workflow to successfully identify and fix unattended bugs, which were previously being skipped. ([#5860](https://github.com/QwenLM/qwen-code/pull/5860))
6.  **feat(ui): Collapsed Session Preview** - Adds `ui.history.collapsePreviewCount` to show the last N user turns when resuming collapsed sessions, aiding navigation. ([#5848](https://github.com/QwenLM/qwen-code/pull/5848))
7.  **refactor(cli): Split Serve Server Routes** - Refactors the `qwen serve` daemon by moving route handling into focused internal modules for better maintainability. ([#5809](https://github.com/QwenLM/qwen-code/pull/5809))
8.  **fix(core): Stream Chat-Compression** - Fixes gateway timeouts by enabling streaming for the context-compression side-query. ([#5865](https://github.com/QwenLM/qwen-code/pull/5865))
9.  **perf(cli): Skip SpawnSync Wrapper** - Optimizes daemon boot by importing `cli.js` directly in-process, eliminating a redundant Node.js startup. ([#5874](https://github.com/QwenLM/qwen-code/pull/5874))
10. **feat(browser-ext): Daemon-Direct Architecture** - Revives the Chrome extension using a thin-client architecture connecting directly to the local `qwen serve` daemon via HTTP+SSE. ([#5777](https://github.com/QwenLM/qwen-code/pull/5777))

## 5. Feature Request Trends
*   **Cross-Device & Team Collaboration:** Strong demand for syncing state (todos, memories, plans) via Git to enable multi-device and team workflows.
*   **Enhanced Control & Configuration:** Users are requesting finer-grained control over timeouts (shell, streaming), loop behaviors, and ASR biasing for voice dictation.
*   **Daemon & API Enrichment:** Interest in exposing more granular session status via the serve API (turn phases, active tools) and improving the extensibility of the browser extension ecosystem.

## 6. Developer Pain Points
*   **Resource Leaks on Windows:** The PowerShell OOM issue (#5873) is a critical blocker for Windows users, highlighting a significant gap in process lifecycle management.
*   **Gateway Timeouts:** Context compression and streaming setups frequently fail in complex network environments due to non-streaming defaults or rigid timeouts.
*   **Stale CI Checks:** Merging PRs with outdated CI statuses leads to semantic conflicts slipping into `main`, necessitating stricter merge queues or up-to-date branch requirements.
*   **UI Glitches:** Screen flickering, scroll-back failures, and truncated responses during heavy agent activity degrade the user experience, particularly in non-VP modes.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest: 2026-06-26

### 1. Today's Highlights
The v0.8.65 release cycle has reached significant stabilization with major architectural shifts in provider routing, fleet execution, and context budgeting. Concurrently, the team is addressing critical regressions in v0.8.66, specifically regarding approval modal semantics and the persistent confusion between Plan and Agent modes. New contributions are focusing on expanding provider support (OpenModel) and enhancing localization infrastructure.

### 2. Releases
No new releases were published in the last 24 hours. The project remains focused on finalizing the v0.8.65 stabilization and addressing v0.8.66 regression bugs.

### 3. Hot Issues
*   **[Bug] CodeWhale Over-Involvement (Issue #3275)**: Reports a regression where the agent enters a self-questioning loop, deviating from user intent. *Significance*: Highlights a critical UX/reliability flaw in autonomous behavior.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3275)
*   **[Enhancement] Fleet Model Classes & Auto Loadout (Issue #3205)**: Defines the shared model/loadout selector for TUI, CLI, and subagents. *Significance*: Centralizes fleet management logic for v0.8.65.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3205)
*   **[Bug] MCP Duplicate Server Instances (Issue #3461)**: Identifies that single MCP config entries spawn orphaned processes, wasting resources. *Significance*: Critical lifecycle and resource management bug.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3461)
*   **[Epic] Separate Provider/Model Facts (Issue #2608)**: Aims to decouple provider identity, model identity, and route resolution. *Significance*: Foundational architectural shift for multi-provider stability.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/2608)
*   **[Enhancement] Multi-model Compatibility & Docs (Issue #2300)**: Requests clearer documentation on provider differences (vLLM vs. OpenAI). *Significance*: Addresses user confusion in complex routing setups.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/2300)
*   **[Enhancement] Provider Descriptors & Adapters (Issue #3084)**: Introduces data-backed, testable provider contracts. *Significance*: Reduces scattered config logic and improves reliability.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3084)
*   **[Enhancement] Fleet Profiles for Agents (Issue #3167)**: Standardizes terminology (`FleetProfile`, `FleetRole`) for agent delegation. *Significance*: Unifies the user-facing API for fleet management.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3167)
*   **[Bug] Approval Modal Cancellation (Issue #3466)**: Users report excessive destructive approval prompts post-update. *Significance*: High-impact regression affecting daily workflow efficiency.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3466)
*   **[Feature Request] Rust Native Runtime (Issue #3541)**: Suggests rewriting the TUI/CLI in Rust to reduce Node.js overhead. *Significance*: Addresses performance concerns regarding cold-start and memory.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3541)
*   **[Bug] Plan/Agent Mode Mixed Up (Issue #3568)**: Reports that the AI fails to perceive mode switches, leading to incorrect behavior. *Significance*: Core functional regression impacting reliability.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3568)

### 4. Key PR Progress
*   **[Fix] Python Command Arity (PR #3588)**: Fixes dead code in `classify_command` where `python -m` flags were stripped before arity lookup.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3588)
*   **[Cleanup] Compaction Dead Code (PR #3587)**: Removes obsolete "hard compaction" logic superseded by soft-seam compression.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3587)
*   **[Feat] OpenModel Provider Support (PR #3585)**: Adds first-class support for OpenModel via Anthropic Messages wire protocol.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3585)
*   **[Feat] Natural Language Approval (PR #3586)**: Work in progress to enhance approval workflows.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3586)
*   **[Refactor] Localization Extraction (PR #3583)**: Moves hardcoded texts to JSON and integrates `rust-i18n` for better i18n support.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3583)
*   **[Fix] Session Mode in Auto Router (PR #3581)**: Ensures the auto-router receives correct session mode (Plan vs. Agent) to prevent behavior drift.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3581)
*   **[Fix] YOLO Approval for Detached Tools (PR #3580)**: Preserves auto-approval shortcuts for detached destructive tools, addressing #3466.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3580)
*   **[Docs] Update Installation References (PR #3579)**: Bumps v0.8.63 references to v0.8.65 in `INSTALL.md`.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3579)
*   **[Fix] Windows SDK Env Roots (PR #3578)**: Fixes `exec_shell` on Windows to recover safe SDK paths from environment registry.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3578)
*   **[Feat] ACP Provider/Model Exposure (PR #3576)**: Exposes provider and model selection over the ACP stdio adapter for external clients like Paseo.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3576)

### 5. Feature Request Trends
*   **Provider Agnosticism & Expansion**: Strong demand for robust support of diverse providers (OpenModel, Anthropic-compatible endpoints) and cleaner separation of provider facts from model strings.
*   **Performance & Native Runtime**: Community interest in moving away from Node.js overhead, with specific requests for a Rust-based native runtime for lower latency.
*   **User Experience & Control**: Requests for better visibility into provider health (`/provider` dashboard), clearer session management (sidebar panel), and more intuitive approval mechanisms (natural language approval).
*   **Internationalization**: Growing need for proper localization infrastructure, evidenced by the extraction of hardcoded strings.

### 6. Developer Pain Points
*   **Autonomous Behavior Regressions**: Frequent reports of the agent overstepping user intent (self-questioning loops) or failing to respect mode switches (Plan vs. Agent), indicating instability in the core reasoning/execution loop.
*   **Approval Workflow Friction**: Users are frustrated by overly aggressive destructive approval prompts that disrupt workflow, particularly when trying to maintain "YOLO" or auto-approval efficiencies.
*   **Configuration Complexity**: Managing multi-provider setups, especially with custom endpoints and auth, remains confusing for users, necessitating better documentation and clearer routing abstractions.
*   **Resource Leaks**: Issues with MCP server spawning orphaned processes highlight gaps in lifecycle management within the tool ecosystem.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*