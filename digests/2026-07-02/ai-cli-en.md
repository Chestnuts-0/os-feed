# AI CLI Tools Community Digest 2026-07-02

> Generated: 2026-07-02 02:12 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Report: 2026-07-02

## 1. Ecosystem Overview
The AI CLI landscape in mid-2026 is defined by a shift from experimental prototyping to enterprise-grade reliability and security hardening. Major players like Anthropic, OpenAI, and Google are stabilizing core agent loops and addressing critical vulnerabilities (RCE, path traversal), while open-source alternatives focus on architectural extensibility and local-first data control. The market is fragmenting slightly around specialized needs—such as cross-platform compatibility, granular security policies (constitutions), and advanced multi-agent orchestration—indicating a mature but competitive ecosystem where stability and trust are the primary differentiators.

## 2. Activity Comparison

| Tool | Issues Updated (Last 24h) | PRs Updated (Last 24h) | Release Status | Key Focus Area |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 2 | **v2.1.198** (GA) | Windows/Cowork stability, Safety filter false positives |
| **OpenAI Codex** | 10 | 10 | Alpha (rust-v0.143.0-alpha.33) | Security hardening (Git filters), Windows stability |
| **Gemini CLI** | 10 | 10 | **Nightly** (v0.51.0) | Security (Symlink escape), Agent reliability/hangs |
| **GitHub Copilot** | 10 | 0 | **v1.0.69-0** | Sandbox path completion, Session state integrity |
| **Kimi Code** | 4 | 2 | None (Stable 0.76) | Infinite loop fixes, Parallel subagent execution |
| **OpenCode** | 10 | 10 | **v1.17.13** | V2 Plugin architecture, Windows path normalization |
| **Pi** | 10 | 10 | None (Stable) | AOT Compilation, Provider expansion (Bedrock/Vertex) |
| **Qwen Code** | 10 | 10 | **v0.19.4** + Nightly | Daemon stability, Config persistence, Skill memoization |
| **DeepSeek TUI** | 10 | 10 | Beta (v0.8.67) | "Constitution-first" security, Dynamic MCP management |

## 3. Shared Feature Directions

*   **Security Hardening & Sandboxing:**
    *   *Tools:* OpenAI Codex, Gemini CLI, DeepSeek TUI.
    *   *Need:* All three are actively patching critical vulnerabilities (Git filter RCE, Symlink escapes, Path traversal). DeepSeek introduces "Constitution-first" security boundaries, while others focus on technical isolation.
*   **Dynamic MCP & Plugin Extensibility:**
    *   *Tools:* OpenCode, DeepSeek TUI, Pi.
    *   *Need:* Moving beyond static configurations. OpenCode and DeepSeek are implementing dynamic MCP server lifecycle management (start/stop via chat) and plugin architectures. Pi is expanding provider support (Bedrock/Vertex) to integrate diverse AI services.
*   **Cross-Platform Stability (Specifically Windows):**
    *   *Tools:* Claude Code, OpenAI Codex, OpenCode, GitHub Copilot, Qwen Code.
    *   *Need:* Windows is the primary source of friction. Common issues include path separator mismatches (`\` vs `/`), file synchronization delays (`virtiofs`), and terminal rendering bugs.
*   **Context Window & Token Optimization:**
    *   *Tools:* Claude Code, OpenCode, Pi, Qwen Code.
    *   *Need:* Reducing redundant context injection, implementing auto-compaction thresholds, and using AOT compilation or memoization to lower latency and token costs.

## 4. Differentiation Analysis

*   **Enterprise vs. Open Source Philosophy:**
    *   *Claude Code & GitHub Copilot:* Focus on polished, integrated experiences within corporate ecosystems (Chrome GA, Copilot provider). They prioritize ease of use but suffer from rigid safety filters (false positives in audits).
    *   *OpenCode & Pi:* Emphasize local-first data control, open architectures, and multi-cloud flexibility. OpenCode’s push for project-local session storage and Pi’s SQLite backend appeal to privacy-conscious and data-portable workflows.
*   **Security Approach:**
    *   *DeepSeek TUI:* Unique "Constitution-first" approach, allowing users to define explicit trust levels and behavioral boundaries via a guided setup wizard.
    *   *OpenAI/Gemini:* Focus on defensive coding (blocking malicious Git filters, preventing symlink escapes) rather than user-defined policy layers.
*   **Technical Architecture:**
    *   *Qwen Code:* Heavy investment in daemon stability and IPC (Inter-Process Communication) hardening, aiming for robust background service management.
    *   *Pi:* Focus on runtime performance via AOT compilation for TypeScript extensions, targeting faster startup times for plugin-heavy environments.
    *   *Kimi Code:* Emerging strength in parallel execution via API key pooling, addressing rate limits for high-concurrency workflows.

## 5. Community Momentum & Maturity

*   **High Momentum/Rapid Iteration:**
    *   **OpenCode:** Strong community engagement with V2 development, particularly around plugin architecture and Windows fixes. The active PR volume (10) and discussion on V2 migration signal a healthy, evolving open-source project.
    *   **DeepSeek TUI:** Rapid iteration on the v0.8.67 release candidate, with significant community input on the new security model and setup wizard.
*   **Mature/Stabilizing:**
    *   **Claude Code:** As a GA product, its momentum is reflected in bug fixes for widespread issues (Windows sync, safety filters) rather than new feature experiments. The community is large but frustrated by reliability regressions.
    *   **GitHub Copilot CLI:** Stabilizing post-major release (v1.0.x), focusing on incremental improvements (path completions, session state) rather than disruptive changes.
*   **Niche/Specialized:**
    *   **Kimi Code:** Smaller issue volume but high impact per issue (critical infinite loops). Growing interest in parallel execution capabilities.
    *   **Pi:** Stable core with strong momentum in provider expansion and performance optimizations (AOT).

## 6. Trend Signals

*   **Security as a Primary UX Barrier:** The prevalence of "false positive" safety filters (Claude Code) and the introduction of "Constitution-first" models (DeepSeek) indicate that users are struggling to balance agent autonomy with safety. Future tools will likely need to offer more granular, user-controlled trust levels rather than blanket restrictions.
*   **Windows is the New Frontier:** The disproportionate number of Windows-specific bugs (path separators, file sync, terminal rendering) across almost all major tools suggests that cross-platform parity is not yet achieved. Tools that solve Windows stability (like OpenCode’s recent patches) will gain significant developer goodwill.
*   **Shift from Static to Dynamic Agents:** The ability for agents to dynamically start/stop MCP servers (DeepSeek, OpenCode) and manage their own environment reflects a move towards more autonomous, self-healing agents. This reduces the need for pre-configuration and allows for more fluid, context-aware workflows.
*   **Performance via Compilation & Caching:** The adoption of AOT compilation (Pi) and memoization (Qwen Code) signals that latency is becoming a critical competitive factor. Users expect near-instantaneous responses, driving architectural changes in how extensions and skills are loaded.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-07-02  
**Source Data:** `anthropics/skills` GitHub Repository (Top PRs & Issues)

### 1. Top Skills Ranking
*Ranked by community engagement (comments/attention) and technical significance.*

1.  **[Self-Audit Skill](https://github.com/anthropics/skills/pull/1367)** (PR #1367)
    *   **Functionality:** A universal meta-skill that performs mechanical file verification followed by a four-dimension reasoning quality gate before delivering AI output.
    *   **Status:** Open | **Discussion:** High interest due to its focus on reliability and "damage-severity" prioritization across any tech stack.
2.  **[Skill Creator Fixes (Recall/Trigger)](https://github.com/anthropics/skills/pull/1298)** (PR #1298)
    *   **Functionality:** Critical fix for `run_eval.py` which was reporting 0% recall due to Windows stream reading issues and trigger detection failures.
    *   **Status:** Open | **Discussion:** Vital for developers building custom skills; resolves a major bottleneck in the skill optimization loop.
3.  **[Document Typography Skill](https://github.com/anthropics/skills/pull/514)** (PR #514)
    *   **Functionality:** Prevents typographic errors in AI-generated documents, specifically addressing orphan lines, widows, and numbering misalignment.
    *   **Status:** Open | **Discussion:** Addresses a high-frequency pain point in professional document generation.
4.  **[PDF Skill Case-Sensitivity Fix](https://github.com/anthropics/skills/pull/538)** (PR #538)
    *   **Functionality:** Corrects case-sensitive file reference mismatches (`REFERENCE.md` vs `reference.md`) in the PDF skill documentation.
    *   **Status:** Open | **Discussion:** Essential for cross-platform compatibility (Linux/macOS vs. Windows).
5.  **[Frontend Design Skill Clarity](https://github.com/anthropics/skills/pull/210)** (PR #210)
    *   **Functionality:** Refines instructions for clarity and actionability, ensuring Claude can follow guidance within single conversations without ambiguity.
    *   **Status:** Open | **Discussion:** Focuses on reducing hallucination and improving adherence to design patterns.
6.  **[ODT Skill Addition](https://github.com/anthropics/skills/pull/486)** (PR #486)
    *   **Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods).
    *   **Status:** Open | **Discussion:** Fills a gap in open-standard office document support.
7.  **[Testing Patterns Skill](https://github.com/anthropics/skills/pull/723)** (PR #723)
    *   **Functionality:** Comprehensive guide for testing philosophies, unit testing (AAA pattern), and React component testing.
    *   **Status:** Open | **Discussion:** Strong demand for structured testing methodologies.
8.  **[Color Expert Skill](https://github.com/anthropics/skills/pull/1302)** (PR #1302)
    *   **Functionality:** Specialized knowledge for color naming systems (ISCC-NBS, Munsell) and spaces (OKLCH, CAM16).
    *   **Status:** Open | **Discussion:** Niche but highly valued by design-focused workflows.

### 2. Community Demand Trends
*Derived from high-engagement Issues.*

*   **Security & Trust Boundaries:** Issue #492 highlights urgent concern over community skills impersonating official Anthropic skills under the `anthropic/` namespace. Users demand stricter namespace enforcement and verification mechanisms.
*   **Enterprise Collaboration:** Issue #228 shows strong demand for org-wide skill sharing capabilities within Claude.ai, moving beyond manual file transfers (Slack/Teams) to integrated shared libraries.
*   **Cross-Platform Compatibility:** Multiple issues (#1061, #189) and PRs indicate significant friction with Windows environments (encoding, subprocess handling, path resolution). There is a clear need for robust, OS-agnostic skill tooling.
*   **Context Efficiency:** Issue #1329 proposes "compact-memory" symbolic notation to reduce context window usage for long-running agents, reflecting a trend toward optimizing token efficiency in complex agent loops.
*   **MCP Integration:** Issue #16 suggests exposing Skills as Model Context Protocol (MCP) servers, indicating a desire for standardized API signaling for skill capabilities.

### 3. High-Potential Pending Skills
*Active PRs with unresolved technical blockers or pending review that are likely to land soon.*

1.  **[Self-Audit v1.3.0](https://github.com/anthropics/skills/pull/1367)**
    *   **Potential:** High. Addresses the critical need for pre-delivery quality gates. Recent activity suggests active refinement.
2.  **[Windows Subprocess & Encoding Fixes](https://github.com/anthropics/skills/pull/1050)** & **[Run Eval Crash Fix](https://github.com/anthropics/skills/pull/1099)**
    *   **Potential:** Very High. These are foundational fixes required for the `skill-creator` ecosystem to function on Windows. Their resolution unlocks widespread community contribution.
3.  **[ODT Skill](https://github.com/anthropics/skills/pull/486)**
    *   **Potential:** Medium-High. Completes the "document suite" alongside PDF and DOCX skills.
4.  **[Sensory Skill (macOS Automation)](https://github.com/anthropics/skills/pull/806)**
    *   **Potential:** Medium. Offers native AppleScript automation as an alternative to screenshot-based computer use, appealing to Mac-native developers.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust, cross-platform tooling integrity** (specifically fixing Windows-specific eval crashes and encoding issues) combined with **enhanced security verification** to prevent namespace abuse and ensure trusted skill execution.

---

# Claude Code Community Digest
**Date:** 2026-07-02
**Source:** github.com/anthropics/claude-code

### 1. Today's Highlights
Claude Code v2.1.198 has been released, bringing general availability to Claude in Chrome, introducing background agent notifications via the `Notification` hook, and adding a new `/dataviz` skill for chart design. Community attention is heavily focused on Windows-specific compatibility issues, particularly regarding `virtiofs` file synchronization in Cowork environments and authentication flows on macOS. Additionally, there is significant discussion around false positives in safety filters blocking legitimate security audits and performance regressions in context window management.

### 2. Releases
**v2.1.198**
*   **Claude in Chrome GA:** The integration is now generally available for use within the Chrome browser environment.
*   **Agent Notifications:** Added support for background agent notifications in `claude agents`. Sessions requiring input or completing tasks now trigger the `Notification` hook (`agent_needs_input` / `agent_completed`).
*   **New Skill:** Introduced `/dataviz` skill to provide guidance on chart and dashboard design.

[View Release Details](https://github.com/anthropics/claude-code/releases/tag/v2.1.198)

### 3. Hot Issues
These issues represent the highest engagement and most critical blockers reported in the last 24 hours.

1.  **[BUG] Cowork: virtiofs FUSE mount serves truncated/stale files** (#38993)
    *   **Why it matters:** Critical for Windows users utilizing the Cowork feature in VMs; host-side changes are not reflecting in the guest, breaking development workflows.
    *   **Reaction:** 34 comments, 25 👍. High priority due to impact on multi-OS sync reliability.
    *   [Link](https://github.com/anthropics/claude-code/issues/38993)

2.  **[BUG] API 400 "messages[1].role must be either 'user' or 'assistant'..."** (#63469)
    *   **Why it matters:** Indicates a regression in how system prompts are handled in the API layer, specifically affecting v2.1.156+ users.
    *   **Reaction:** 19 comments, 8 👍.
    *   [Link](https://github.com/anthropics/claude-code/issues/63469)

3.  **[BUG] GitHub connector shows "Connected" but exposes no tools in Cowork** (#61682)
    *   **Why it matters:** Functional breakage of the GitHub integration in the Cowork environment, preventing automated PR/task handling.
    *   **Reaction:** 11 comments, 6 👍.
    *   [Link](https://github.com/anthropics/claude-code/issues/61682)

4.  **[BUG] Claude on MacOS does not use default browser for logging in** (#64630)
    *   **Why it matters:** Authentication friction for Mac users; the app fails to delegate login to the system default browser.
    *   **Reaction:** 8 comments, 7 👍.
    *   [Link](https://github.com/anthropics/claude-code/issues/64630)

5.  **[Bug][aup] Blocks safe, validated edit to own web-server config** (#73068)
    *   **Why it matters:** Reports a false positive in the Usage Policy (AUP) filter that halts authorized security audits and configuration edits.
    *   **Reaction:** 4 comments. Part of a cluster of similar reports indicating systemic filter sensitivity issues.
    *   [Link](https://github.com/anthropics/claude-code/issues/73068)

6.  **[Bug][cyber] ClAudit false-positive in com** (#73091)
    *   **Why it matters:** Similar to above, the cybersecurity safety filter is incorrectly flagging legitimate internal communication audits as violations.
    *   **Reaction:** 3 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/73091)

7.  **[Enhancement] Harness re-injects identical context blocks** (#72997)
    *   **Why it matters:** Performance and cost issue. The harness is sending duplicate context (task lists, tool schemas) without change detection, inflating token usage and potentially degrading model performance.
    *   **Reaction:** 1 comment, 0 👍. Technical deep-dive into token flow.
    *   [Link](https://github.com/anthropics/claude-code/issues/72997)

8.  **[Enhancement] Quality regression: no cross-session context retention** (#72745)
    *   **Why it matters:** Users report that Claude Code loses operational context between sessions, leading to repetitive errors and inability to build on previous work within the same day.
    *   **Reaction:** 1 comment. Highlights a gap in long-term task continuity.
    *   [Link](https://github.com/anthropics/claude-code/issues/72745)

9.  **[Question] Undocumented variation in system-prompt date line** (#67120)
    *   **Why it matters:** The `Today's date is ...` line in the system prompt varies based on endpoint and timezone in undocumented ways, causing confusion for deterministic workflows.
    *   **Reaction:** 1 comment.
    *   [Link](https://github.com/anthropics/claude-code/issues/67120)

10. **[Bug] Desktop file viewer blocks files in permissions.additionalDirectories** (#72423)
    *   **Why it matters:** Regression in the Desktop app where files in allowed additional directories are incorrectly blocked from opening, despite the agent being able to read them.
    *   **Reaction:** 1 comment, 3 👍.
    *   [Link](https://github.com/anthropics/claude-code/issues/72423)

### 4. Key PR Progress
Only 2 Pull Requests were updated in the last 24 hours.

1.  **docs: fix Github -> GitHub typo in README** (#72866)
    *   **Summary:** Corrects capitalization in the main README file.
    *   **Status:** Open.
    *   [Link](https://github.com/anthropics/claude-code/pull/72866)

2.  **Create Cha** (#72543)
    *   **Summary:** Title suggests creation of a new component or documentation section, but description is incomplete/cut off.
    *   **Status:** Open.
    *   [Link](https://github.com/anthropics/claude-code/pull/72543)

### 5. Feature Request Trends
*   **Granular Agent Configuration:** Users are requesting more control over agent behaviors, specifically per-subagent advisor settings (#73072) to allow different executor/advisor model pairings in multi-agent orchestrations.
*   **Security Audit Support:** There is a strong trend of users requesting clearer guidelines or exemptions for prompt injection protections when conducting legitimate security reviews of their own codebases (#73088).
*   **Context Window Optimization:** Requests for better change detection in context injection to reduce redundant token usage (#72997) and improved cross-session memory to maintain state over longer periods (#72745).

### 6. Developer Pain Points
*   **False Positive Safety Filters:** A significant cluster of issues (#73068, #73091, #73082, #73083, #73065, #73058, #73092, #73093, #73085, #73090, #73060, #73057) indicates that the current AUP and Cybersecurity filters are overly aggressive, blocking legitimate security audits and configuration edits for user-owned projects.
*   **Windows/Cowork Stability:** Persistent issues with file synchronization (`virtiofs`) (#38993) and GitHub connector tools (#61682) in the Windows Cowork environment suggest stability gaps in virtualized file access.
*   **Session Continuity:** Users are frustrated by the loss of context between sessions (#72745) and the inability to effectively resume work due to UI limitations in the `/resume` picker (#73089).
*   **Authentication UX:** macOS users are experiencing friction with default browser delegation for login (#64630), and Windows users face issues with background tasks hanging indefinitely (#68992).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** July 2, 2026

### 1. Today's Highlights
The Codex team is aggressively hardening the security posture of the CLI and Desktop applications, releasing a series of critical pull requests to prevent arbitrary code execution via malicious Git configurations (filters, merge drivers, and worktree escapes). Concurrently, the community is actively requesting a Linux desktop app and improved session management features like `/undo`, while reporting significant stability regressions on Windows and macOS.

### 2. Releases
*   **rust-v0.143.0-alpha.33**: Latest alpha release for the Rust-based CLI.
*   **rust-v0.143.0-alpha.32**: Previous alpha release.
    *   *Note:* No detailed changelog provided in source data, but these iterations precede the security-focused PRs merging into the main branch.

### 3. Hot Issues
1.  **[Linux Desktop App Request] (#11023)**
    *   **Why it matters:** High demand (674 👍) from developers needing a native GUI on Linux due to Mac usability issues.
    *   **Community:** Strong support; users cite power consumption and OS preference.
    *   [Link](https://github.com/openai/codex/issues/11023)
2.  **[Sensitive File Exclusion Mechanism] (#2847)**
    *   **Why it matters:** Critical security feature allowing `.codexignore` files to prevent sensitive data from entering the context window.
    *   **Community:** 456 👍; widely requested for enterprise compliance.
    *   [Link](https://github.com/openai/codex/issues/2847)
3.  **[Restore `/undo` Command] (#9203)**
    *   **Why it matters:** Addresses accidental file deletions/modifications in non-git-tracked scenarios.
    *   **Community:** 312 👍; users express frustration with irreversible agent actions.
    *   [Link](https://github.com/openai/codex/issues/9203)
4.  **[Windows Sandbox `apply_patch` Failure] (#29072)**
    *   **Why it matters:** Blocks core functionality for Windows users due to sandbox setup executable path issues.
    *   **Community:** Active troubleshooting; 22 👍.
    *   [Link](https://github.com/openai/codex/issues/29072)
5.  **[Windows App "Something went wrong"] (#29320)**
    *   **Why it matters:** General UI crash/error preventing usage on Windows 11 Enterprise.
    *   **Community:** Reported by Pro users.
    *   [Link](https://github.com/openai/codex/issues/29320)
6.  **[Context Window Oscillation on Windows] (#30875)**
    *   **Why it matters:** Indicates backend instability with GPT-5.5 context handling (oscillating between ~258k and ~353k tokens).
    *   **Community:** Concerns about reliability.
    *   [Link](https://github.com/openai/codex/issues/30875)
7.  **[Mixed Line Endings on Windows] (#4003)**
    *   **Why it matters:** Long-standing bug where Codex ignores local `.gitattributes` line ending settings, causing diff noise.
    *   **Community:** 66 👍; affects cross-platform collaboration.
    *   [Link](https://github.com/openai/codex/issues/4003)
8.  **[Older Sessions Unopenable] (#26104)**
    *   **Why it matters:** Data loss risk for users unable to access historical chats after updates.
    *   **Community:** 0 👍 but high severity for affected users.
    *   [Link](https://github.com/openai/codex/issues/26104)
9.  **[TUI Performance Regression] (#16335)**
    *   **Why it matters:** Noticeable slowdown in CLI/TUI between v0.116 and v0.117.
    *   **Community:** 7 👍; impacts power users.
    *   [Link](https://github.com/openai/codex/issues/16335)
10. **[Inotify Watch Exhaustion on Linux] (#23574)**
    *   **Why it matters:** Memory leak/resource exhaustion in VS Code extension on large Linux workspaces.
    *   **Community:** 9 👍; critical for large monorepos.
    *   [Link](https://github.com/openai/codex/issues/23574)

### 4. Key PR Progress
1.  **[Security] Block selected Git filters before staging patch paths (#30850)**
    *   Prevents race conditions where Git clean/process filters execute unvalidated code during patch staging.
    *   [Link](https://github.com/openai/codex/pull/30850)
2.  **[Security] Block selected merge drivers before three-way patch application (#30854)**
    *   Mitigates arbitrary code execution risks when `git apply --3way` invokes repository-specific merge drivers.
    *   [Link](https://github.com/openai/codex/pull/30854)
3.  **[Security] Block selected executable Git filters before patch application (#30848)**
    *   Ensures clean/smudge/process filters are not executed inside internal worktrees without validation.
    *   [Link](https://github.com/openai/codex/pull/30848)
4.  **[Security] Bind Git worktree helpers to a trusted executable (#30833)**
    *   Replaces PATH-based Git resolution with trusted binaries to prevent symlink attacks or malicious executables.
    *   [Link](https://github.com/openai/codex/pull/30833)
5.  **[Security] Confine staged patch paths to the parent worktree (#30844)**
    *   Prevents patches from escaping the intended directory structure, addressing PSEC-4394.
    *   [Link](https://github.com/openai/codex/pull/30844)
6.  **[UX] Preserve line endings when applying patches (#30882)**
    *   Fixes the Windows line-ending issue (#4003) by respecting source file terminators (LF/CRLF).
    *   [Link](https://github.com/openai/codex/pull/30882)
7.  **[Telemetry] Emit per-request TTFT completion telemetry (#30883)**
    *   Adds `ttft_ms` metrics to SSE/WebSocket events for better performance monitoring.
    *   [Link](https://github.com/openai/codex/pull/30883)
8.  **[Architecture] Consolidate multi-agent v2 communication sends (#30867)**
    *   Unifies outbound paths for inter-agent messages, simplifying logging and future extensions.
    *   [Link](https://github.com/openai/codex/pull/30867)
9.  **[Config] Support interleaved response items (#30876)**
    *   Improves TUI output integrity when reasoning summaries and final answers stream concurrently.
    *   [Link](https://github.com/openai/codex/pull/30876)
10. **[DevOps] Detect Codex installs managed by Vite+ (#30880)**
    *   Enhances update mechanisms for Vite-managed global installations.
    *   [Link](https://github.com/openai/codex/pull/30880)

### 5. Feature Request Trends
*   **Cross-Platform GUI:** There is a distinct push for a native **Linux Desktop App** (#11023), mirroring existing Mac/Windows support.
*   **Safety & Control:** Users heavily prioritize **file exclusion mechanisms** (#2847) and **session undo capabilities** (#9203) to regain control over the agent's destructive potential.
*   **Performance Transparency:** Requests for better **token usage visibility** and removal of compaction overhead (#20582) indicate users want more predictable context management.
*   **Rate Limit Flexibility:** Multiple issues highlight dissatisfaction with **reset credit allocation** inconsistencies (#30726, #30686), suggesting a need for transparent or customizable rate limits.

### 6. Developer Pain Points
*   **Windows Stability & Compatibility:** The Windows ecosystem is experiencing disproportionate friction, including sandbox launch failures (#29072), app crashes (#29320, #30884), session loading errors (#26104), and line-ending bugs (#4003).
*   **Irreversible Actions:** The lack of a robust `/undo` function (#9203) is a major pain point, leading to data loss in non-Git environments.
*   **Resource Leaks:** Linux users face **inotify watch exhaustion** (#23574) and **process leaks** in the desktop app-server (#26869), indicating memory management issues in long-running sessions.
*   **Authentication Glitches:** Intermittent OAuth failures, particularly with **Meta Ads MCP** (#24103) and specific **Pro account OTP flows** in Xcode (#28078), disrupt workflow continuity.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-07-02

### 1. Today's Highlights
The Gemini CLI team prioritized security and stability, releasing `v0.51.0-nightly.20260702` which resolves a critical symbolic link directory escape vulnerability in the memory import processor. Concurrently, the team addressed significant agent reliability issues, including fixes for thought leakage in history turns and prevention of infinite loop monologues. Community attention is heavily focused on subagent robustness, with multiple reports detailing hangs, recovery failures, and configuration overrides being ignored.

### 2. Releases
**v0.51.0-nightly.20260702.gff00dacd9**
*   **Security Fix:** Resolved a high-severity symbolic link directory escape vulnerability in the JIT Memory Import Processor (#28233).
*   **Link:** [View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260702.gff00dacd9)

### 3. Hot Issues
1.  **Subagent Recovery Failure (#22323)**: The `codebase_investigator` subagent falsely reports success upon hitting turn limits, hiding interruptions. *(9 comments)*
2.  **Generalist Agent Hangs (#21409)**: The generalist agent enters infinite loops or hangs indefinitely on simple tasks like folder creation. *(7 comments, 8 👍)*
3.  **Shell Command Stuck State (#25166)**: CLI commands complete but the shell remains in "Awaiting user input" state, blocking further interaction. *(4 comments, 3 👍)*
4.  **Auto Memory Logging Risks (#26525)**: Concerns raised about deterministic redaction and excessive logging in Auto Memory background extraction. *(5 comments)*
5.  **AST-Aware File Reads Investigation (#22745)**: Epic tracking potential performance gains from AST-aware tooling to reduce token noise and misaligned reads. *(7 comments, 1 👍)*
6.  **Underutilization of Skills/Sub-agents (#21968)**: Users report the model rarely invokes custom skills or sub-agents unless explicitly instructed. *(6 comments)*
7.  **Browser Agent Settings Ignored (#22267)**: `settings.json` overrides (e.g., `maxTurns`) are completely ignored by the Browser Agent. *(3 comments)*
8.  **Tool Limit 400 Error (#24246)**: The CLI throws a 400 error when more than 400 tools are available, lacking smart scoping. *(3 comments)*
9.  **Webpage Analysis on Wayland (#21983)**: Browser subagent fails specifically in Wayland environments. *(4 comments, 1 👍)*
10. **Incorrect `\n` Escape Behavior (#22466)**: Naive logic handling newline characters causes formatting issues in outputs. *(2 comments)*

### 4. Key PR Progress
1.  **Fix Symbolic Link Escape (#28233)**: Patched a critical vulnerability allowing directory traversal in memory imports. [PR Link](https://github.com/google-gemini/gemini-cli/pull/28233)
2.  **Prevent Thought Leakage (#27971)**: Strips internal reasoning thoughts from scrubbed history to prevent model confusion and infinite loops. [PR Link](https://github.com/google-gemini/gemini-cli/pull/27971)
3.  **Secure OAuth Token Exchange (#28103)**: Fixes keep-alive socket reuse issues during OAuth token exchange caused by recent Node.js security fixes. [PR Link](https://github.com/google-gemini/gemini-cli/pull/28103)
4.  **Fix IPYNB/JSON Corruption (#28223)**: Bypasses LLM correction for specific file types to prevent corruption in `write_file` and `replace` tools. [PR Link](https://github.com/google-gemini/gemini-cli/pull/28223)
5.  **Supply Chain RCE Prevention (#28232)**: Splits eval workflows to prevent fork code from executing with privileged tokens in `pull_request_target`. [PR Link](https://github.com/google-gemini/gemini-cli/pull/28232)
6.  **SSRF Protection for OAuth (#28112)**: Adds SSRF validation to OAuth metadata discovery flows in MCP servers. [PR Link](https://github.com/google-gemini/gemini-cli/pull/28112)
7.  **Deep-Merge Settings (#28094)**: Fixes `loadSettings()` to properly deep-merge user and workspace configurations instead of shallow spreading. [PR Link](https://github.com/google-gemini/gemini-cli/pull/28094)
8.  **Guard Empty Message Parts (#28068)**: Prevents misclassification of model messages with empty parts arrays in message inspectors. [PR Link](https://github.com/google-gemini/gemini-cli/pull/28068)
9.  **Buffer Telemetry (#28093)**: Ensures chat compression telemetry is buffered until the SDK is fully initialized. [PR Link](https://github.com/google-gemini/gemini-cli/pull/28093)
10. **Caretaker Egress Skeleton (#28167)**: Implements the skeleton for the Egress Cloud Run service in the Caretaker agent. [PR Link](https://github.com/google-gemini/gemini-cli/pull/28167)

### 5. Feature Request Trends
*   **Enhanced Agent Autonomy & Reliability**: Strong demand for the model to better utilize existing skills/sub-agents autonomously and recover gracefully from turn limits or errors.
*   **Security Hardening**: Continued focus on preventing path traversal, SSRF, and ensuring strict separation of concerns in CI/CD pipelines.
*   **Observability & Debugging**: Requests for better visibility into subagent trajectories, improved bug reporting contexts, and clearer error states for stuck processes.
*   **Performance Optimization**: Interest in AST-aware codebase mapping to reduce token consumption and improve navigation precision.

### 6. Developer Pain Points
*   **Agent Instability**: Frequent reports of agents hanging indefinitely, failing to recover from max-turn limits, or ignoring configuration overrides.
*   **State Management Bugs**: Issues with shell commands remaining in "active" states post-completion and incorrect handling of escape characters in outputs.
*   **Configuration Merging**: Frustration with shallow merging of settings leading to lost nested configurations in workspace vs. user levels.
*   **Environment Specific Failures**: Browser agents failing on Wayland and general instability in complex terminal environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-02
**Source:** github.com/github/copilot-cli

### 1. Today's Highlights
GitHub released **v1.0.69-0**, introducing critical sandbox path completions and stabilizing session state management, while **v1.0.68** expanded model support to include `kimi-k2.7-code` and improved IDE tool resilience. Community attention is heavily focused on cross-platform inconsistencies (particularly Windows clipboard and terminal rendering issues) and complex authentication flows for MCP servers.

### 2. Releases

*   **v1.0.69-0**
    *   **Added:** File and folder completion for `/sandbox` path entries.
    *   **Fixed:** Branch labels in Sessions split view now update correctly when working directories change; unnecessary MCP reloads are skipped when returning to existing sessions; prevented `tgrep` indexer crashes.
    *   [Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.69-0)

*   **v1.0.68** (2026-07-01)
    *   **Added:** Support for the `kimi-k2.7-code` model.
    *   **UX/UI:** The focused field in the `/mcp` config form now uses a "❯ " chevron indicator alongside color cues.
    *   **Fixed:** IDE tools remain available during transient disconnects, providing clear error states and automatic recovery upon reconnection.
    *   [Release Link](https://github.com/github/copilot-cli/releases/tag/v1.0.68)

### 3. Hot Issues

1.  **[Feature] Scoped Plugins** [#1665]
    *   *Why it matters:* Enables repository-specific plugin configurations rather than global user-wide installations, crucial for team consistency.
    *   *Community:* High interest (18 👍, 10 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/1665)

2.  **[Bug] Session Authentication Error** [#3596]
    *   *Why it matters:* Users encounter "Not authenticated" errors when resuming sessions via `/model`, blocking workflow continuity despite successful initial login.
    *   *Community:* Active discussion (11 👍, 8 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/3596)

3.  **[Feature] Custom Themes** [#1504]
    *   *Why it matters:* Requests for JSON-based shareable custom themes to improve accessibility and personalization beyond built-in options.
    *   *Community:* Strong support (20 👍, 6 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/1504)

4.  **[Bug] Web Fetch Failures** [#3948]
    *   *Why it matters:* `web_fetch` tool calls consistently fail with `TypeError: fetch failed`, breaking external knowledge retrieval capabilities.
    *   *Community:* Frustration evident in comments (0 👍, 4 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/3948)

5.  **[Feature] Multiple BYOK Models** [#3282]
    *   *Why it matters:* Current limitation forces session termination to switch Bring-Your-Own-Key models; users demand seamless switching within the TUI.
    *   *Community:* High demand (12 👍, 4 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/3282)

6.  **[Bug] Model Availability Error** [#3997]
    *   *Why it matters:* Reports `gpt-5.3-codex` as unavailable during agent creation, potentially indicating backend routing or permission issues.
    *   *Community:* New report, awaiting triage.
    *   [Link](https://github.com/github/copilot-cli/issues/3997)

7.  **[Feature] Auto-Update Plugins** [#3331]
    *   *Why it matters:* Proposes a marketplace flag to automatically update plugins on CLI startup, reducing maintenance overhead for teams.
    *   *Community:* Moderate interest (4 👍, 3 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/3331)

8.  **[Bug] Agent Infinite Loop** [#3158]
    *   *Why it matters:* Critical bug where the agent enters a `Plan→Compact→Re-Plan` infinite loop with zero execution, consuming resources without progress.
    *   *Community:* High severity classification.
    *   [Link](https://github.com/github/copilot-cli/issues/3158)

9.  **[Bug] MCP Auth Flow Ignorance** [#3982]
    *   *Why it matters:* CLI ignores `grant_types_supported` in OAuth metadata, attempting interactive flows for servers that only support `client_credentials`.
    *   *Community:* Technical depth required for fix.
    *   [Link](https://github.com/github/copilot-cli/issues/3982)

10. **[Bug] Windows IDE Connectivity** [#2891]
    *   *Why it matters:* `/ide` command fails to connect to IntelliJ IDEA workspaces on Windows, isolating JetBrains users.
    *   *Community:* Niche but impactful for specific IDE users.
    *   [Link](https://github.com/github/copilot-cli/issues/2891)

### 4. Key PR Progress

*   **No Pull Requests** were merged or opened in the last 24 hours. Development activity is currently focused on issue triage and release stabilization.

### 5. Feature Request Trends

*   **Plugin Management:** Strong desire for scoped (repo/project-level) plugins and automated update mechanisms to reduce administrative burden.
*   **Model Flexibility:** Requests for multi-BYOK support, per-mode default model configuration (plan vs. autopilot), and broader model compatibility (e.g., Kimi).
*   **Customization & Accessibility:** Demand for custom theme sharing, better screen reader support (echoing typed characters), and terminal cursor consistency.
*   **Session Persistence:** Need for persistent command deny-rules in `permissions-config.json` and proper handling of session shutdown events to preserve metrics.

### 6. Developer Pain Points

*   **Windows-Specific Instabilities:** A significant cluster of bugs relates to Windows environments, including clipboard copy failures (#3981, #3996), terminal flickering (#3984), and plugin caching issues (#3627).
*   **Authentication & Networking:** Complex OAuth interactions with MCP servers (#3982) and inconsistent web fetch reliability (#3948) hinder agent functionality.
*   **Session State Integrity:** Bugs related to losing in-memory metrics during session switches (#3994) and authentication drops when resuming sessions (#3596) disrupt workflow continuity.
*   **Agent Logic Errors:** The infinite loop issue (#3158) and background agent termination on cancel (#3980) indicate fragility in core agent orchestration logic.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest: 2026-07-02

## 1. Today's Highlights
The community is currently focused on addressing a critical branding inconsistency across the Kimi Code ecosystem (Issue #2483) and resolving a persistent infinite-loop bug in version 0.76 (Issue #640). Recent contributions include enhanced parallel execution capabilities via API key pooling (PR #2369) and improved clipboard handling for Windows terminals (PR #2481).

## 2. Releases
**No new releases** were published in the last 24 hours. The latest stable version remains 0.76.

## 3. Hot Issues
*Note: Only 4 issues were updated in the last 24h. All available items are listed below.*

1.  **[Bug] Kimi CLI stuck in reading one file again and again [0.76]**
    *   **Link:** [Issue #640](https://github.com/MoonshotAI/kimi-cli/issues/640)
    *   **Significance:** A severe regression causing infinite loops when using custom Anthropic endpoints. With 15 comments, this is the highest-engagement issue, indicating significant disruption for users relying on specific model configurations.
2.  **[Enhancement] Push notifications for Kimi-CLI-Web**
    *   **Link:** [Issue #1938](https://github.com/MoonshotAI/kimi-cli/issues/1938)
    *   **Significance:** Highlights the growing use case of mobile/web interfaces for remote monitoring. Users request native notification support to track task completion without constant polling.
3.  **[Branding] "Kimi CLI" → "Kimi Code" migration inconsistencies**
    *   **Link:** [Issue #2483](https://github.com/MoonshotAI/kimi-cli/issues/2483)
    *   **Significance:** Tracks a strategic fragmentation where documentation, extensions (Zed/VS Code), SDKs, and binaries still use conflicting names. This impacts discoverability and brand cohesion.
4.  **[Feature] Auto-save long goals to `goal.md`**
    *   **Link:** [Issue #2482](https://github.com/MoonshotAI/kimi-cli/issues/2482)
    *   **Significance:** Addresses the 4000-byte limit on the `/goal` command. Users propose automatic file persistence for complex, long-running tasks, mirroring behaviors seen in competitors like Claude Code.

## 4. Key PR Progress
*Note: Only 2 PRs were updated in the last 24h. All available items are listed below.*

1.  **feat(subagent): Add API key pool for parallel subagent execution**
    *   **Link:** [PR #2369](https://github.com/MoonshotAI/kimi-cli/pull/2369)
    *   **Status:** Closed/Merged
    *   **Summary:** Introduces `APIKeyPool` using a round-robin strategy to manage multiple API keys. This enables robust parallel subagent execution, mitigating rate limits and improving throughput for complex workflows.
2.  **fix(shell): Read clipboard media on BracketedPaste for Windows**
    *   **Link:** [PR #2481](https://github.com/MoonshotAI/kimi-cli/pull/2481)
    *   **Status:** Open
    *   **Summary:** Fixes silent failures when pasting binary content (e.g., images) in Windows Terminal and VS Code integrated terminals. It ensures `BracketedPaste` events correctly handle non-text payloads.

## 5. Feature Request Trends
*   **State Persistence & File Integration:** There is a strong demand for treating long-running contexts as files (e.g., auto-saving goals to `goal.md`) rather than relying solely on in-memory or CLI-boundary limits.
*   **Cross-Platform Notification Systems:** Users integrating Kimi Code into mobile or web workflows are requesting push notifications to bridge the gap between terminal-based execution and remote monitoring.
*   **Resource Management at Scale:** The introduction of API key pools suggests a trend toward enterprise-grade resource management, allowing users to rotate keys for higher concurrency and reliability.

## 6. Developer Pain Points
*   **Configuration-Specific Bugs:** The infinite loop reported in Issue #640 indicates that custom endpoint configurations (specifically Anthropic-compatible models) are prone to instability, suggesting a need for stricter validation or error handling in non-default setups.
*   **Ecosystem Fragmentation:** Developers are frustrated by the lack of unified branding ("Kimi CLI" vs. "Kimi Code"), which complicates integration efforts across different tools (IDEs, SDKs, documentation).
*   **Input Limitations:** The 4000-byte cap on the `/goal` command is a frequent bottleneck for power users managing complex, multi-step objectives, leading to requests for more flexible input methods.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest | 2026-07-02

## 1. Today's Highlights
OpenCode v1.17.13 addresses critical reliability issues with reasoning models and GitHub Copilot integrations, while resolving UI minimization bugs in the Desktop client. Concurrently, the V2 development track is accelerating with significant progress on plugin architecture, MCP lifecycle ports, and TUI migration, alongside persistent efforts to stabilize Windows-specific session handling.

## 2. Releases
**v1.17.13** was released within the last 24 hours. Key updates include:
*   **Core:** Enforced reasoning mode for OpenAI-compatible models to ensure settings apply reliably on custom deployments; fixed stale GitHub Copilot response item IDs that caused follow-up request failures.
*   **Desktop:** Resolved an issue preventing question prompts from being minimized.

[View Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.13)

## 3. Hot Issues
1.  **[Discussion] Save conversations to project folder (#14292)**
    *   *Why it matters:* Addresses data portability concerns by moving session storage from global `~/.opencode` to local project directories.
    *   *Community Reaction:* High engagement (18 👍, 11 comments); users strongly prefer project-local state management.
    *   [Link](https://github.com/anomalyco/opencode/issues/14292)

2.  **[Feature] HTTP Streamable transport for remote MCP (#8058)**
    *   *Why it matters:* Enables compatibility with modern MCP servers (e.g., Sanity) that require HTTP Streamable transport over SSE.
    *   *Community Reaction:* Critical for expanding the MCP ecosystem integration.
    *   [Link](https://github.com/anomalyco/opencode/issues/8058)

3.  **[Feature] YOLO Mode - Skip Permission Prompts (#9070)**
    *   *Why it matters:* Offers a `--dangerously-skip-permissions` equivalent for power users seeking faster workflows.
    *   *Community Reaction:* Popular among automation-focused users (3 👍).
    *   [Link](https://github.com/anomalyco/opencode/issues/9070)

4.  **[TUI/V2] Track TUI migration to @opencode-ai/client (#34359)**
    *   *Why it matters:* Central task for migrating V2 TUI from legacy SDK to the new Promise-based client.
    *   *Community Reaction:* Technical tracking issue for core infrastructure improvements.
    *   [Link](https://github.com/anomalyco/opencode/issues/34359)

5.  **[Bug] Web UI sessions missing on Windows (Path Separator Mismatch) (#21340)**
    *   *Why it matters:* Affects Windows users significantly due to `\` vs `/` inconsistencies in DB storage vs API queries.
    *   *Community Reaction:* Multiple related reports indicate this is a widespread pain point.
    *   [Link](https://github.com/anomalyco/opencode/issues/21340)

6.  **[Bug] Sessions missing from sidebar on Windows (#23864)**
    *   *Why it matters:* Sub-agent created sessions fail to appear in the Web UI sidebar due to path formatting issues.
    *   *Community Reaction:* Directly impacts usability for multi-session workflows on Windows.
    *   [Link](https://github.com/anomalyco/opencode/issues/23864)

7.  **[Feature] Progressive AGENTS.md loading (#34341)**
    *   *Why it matters:* Proposes a V2 plugin-based approach for dynamic context loading based on file reads.
    *   *Community Reaction:* Important for scaling V2 agent capabilities.
    *   [Link](https://github.com/anomalyco/opencode/issues/34341)

8.  **[Bug] Unable to Scroll Up in Chat (#11298)**
    *   *Why it matters:* Basic UX regression preventing users from reviewing previous AI outputs.
    *   *Community Reaction:* Frustrating basic functionality gap (1 👍).
    *   [Link](https://github.com/anomalyco/opencode/issues/11298)

9.  **[Bug] V2 ChatGPT OAuth Routing Failure (#34765)**
    *   *Why it matters:* ChatGPT Plus/Pro subscriptions fail with HTTP 401 due to missing `api.responses.write` scope in V2 routing.
    *   *Community Reaction:* Blocks premium users from using V2 with standard OpenAI accounts.
    *   [Link](https://github.com/anomalyco/opencode/issues/34765)

10. **[Bug] Homebrew Publish Stalled (#34813)**
    *   *Why it matters:* Official macOS package manager distribution is lagging behind release versions (v1.17.10 vs v1.17.13).
    *   *Community Reaction:* Minor but affects easy-install macOS users.
    *   [Link](https://github.com/anomalyco/opencode/issues/34813)

## 4. Key PR Progress
1.  **feat: add --base-path support for reverse proxy (#34822)**
    *   Enables deployment behind sub-paths (e.g., `/opencode/`), crucial for enterprise/internal proxy setups.
    *   [Link](https://github.com/anomalyco/opencode/pull/34822)

2.  **fix(tui): clear onboarding after provider connect (#34819)**
    *   Improves UX by ensuring onboarding tips don't persist after successful provider configuration in V2.
    *   [Link](https://github.com/anomalyco/opencode/pull/34819)

3.  **feat(provider): add --model free (#34794)**
    *   Introduces a convenient flag to randomly select a zero-cost OpenCode Zen model for testing or cost-saving.
    *   [Link](https://github.com/anomalyco/opencode/pull/34794)

4.  **feat(app): v2 review panel overhaul (#31882)**
    *   Major UI/UX update for the V2 review panel, duplicating v1 components to ensure stability during transition.
    *   [Link](https://github.com/anomalyco/opencode/pull/31882)

5.  **feat(app): add session file list and desktop backgrounds (#32398)**
    *   Adds a Files tab to the session side panel, enhancing workspace navigation context.
    *   [Link](https://github.com/anomalyco/opencode/pull/32398)

6.  **fix(session): normalize Windows directory paths (#30367)**
    *   Critical fix for Windows session visibility by normalizing path separators in SQL queries.
    *   [Link](https://github.com/anomalyco/opencode/pull/30367)

7.  **fix: normalize Windows paths in session directory SQL queries (#34806)**
    *   Additional patch addressing SQLite exact-match failures on Windows due to mixed path formats.
    *   [Link](https://github.com/anomalyco/opencode/pull/34806)

8.  **fix(tui): prevent piped stdin from breaking UI (#34242)**
    *   Resolves long-standing issues where piped input disrupts TUI keyboard handling and display.
    *   [Link](https://github.com/anomalyco/opencode/pull/34242)

9.  **feat(opencode): support per-variant limit overrides (#34815)**
    *   Allows fine-grained rate limiting per model variant (e.g., different limits for `fast` vs `pro` variants).
    *   [Link](https://github.com/anomalyco/opencode/pull/34815)

10. **fix(app): preserve session scroll position (#33875)**
    *   Fixes UX annoyance where switching tabs loses scroll position in the message timeline.
    *   [Link](https://github.com/anomalyco/opencode/pull/33875)

## 5. Feature Request Trends
*   **V2 Plugin & Architecture Extensibility:** A dominant trend involves designing robust plugin hooks for V2, including tool plugins (#34489), request hooks (#34490), and session scoping (#34380).
*   **Enhanced MCP Support:** Requests for HTTP Streamable transport (#8058), async prompt updates (#34541), and lifecycle API ports (#34435) indicate a push for deeper, more flexible MCP integration.
*   **Workflow Automation:** Features like "YOLO Mode" (#9070) and progressive `AGENTS.md` loading (#34341) reflect a desire for streamlined, less intrusive automation for power users.
*   **Local-First Data Control:** The request to save sessions to project folders (#14292) highlights a growing preference for local, project-scoped data ownership over global configurations.

## 6. Developer Pain Points
*   **Windows Path Inconsistencies:** Recurring issues (#21340, #23864, #31597, #30374, #34806) regarding backslash vs. forward slash mismatches are causing sessions to disappear or fail to load in the UI. This is a high-frequency bug affecting a significant portion of the Windows user base.
*   **V2 Stability & Routing:** Early V2 adoption reveals friction points, specifically with ChatGPT OAuth routing (#34765) and TUI migration tasks (#34359), suggesting the V2 backend/client separation is still maturing.
*   **Basic UX Regressions:** Simple issues like inability to scroll up in chat (#11298) or losing scroll position (#33875) are impacting user satisfaction, indicating a need for better QA on foundational UI interactions.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-02

## 1. Today's Highlights
The Pi project has stabilized several critical infrastructure components, including the addition of **Claude Sonnet 5** to the GitHub Copilot provider and significant performance improvements via **Ahead-of-Time (AOT) compilation** for TypeScript extensions. Concurrently, the team is addressing complex state management issues, such as fixing context window clamping bugs and resolving TUI rendering artifacts in environments like Kitty and WSL.

## 2. Releases
*   **No new releases** were published in the last 24 hours.

## 3. Hot Issues
1.  **[OPEN] Move off Shrinkwrap (#5653)**
    *   *Significance:* Addresses a critical dependency duplication issue where installing `@earendil-works/pi-ai` and `@earendil-works/pi-coding-agent` creates separate module instances, breaking the API provider registry.
    *   *Reaction:* High engagement (18 comments); marked `inprogress`.
2.  **[CLOSED] Follow XDG Base Directory (#2870)**
    *   *Significance:* Improves Linux hygiene by moving config/state files from `$HOME` to `$XDG_CONFIG_HOME`.
    *   *Reaction:* Highly supported (34 👍); closed as resolved.
3.  **[CLOSED] Pi login hangs in WSL after GitHub Copilot device auth (#6187)**
    *   *Significance:* Fixes a blocking bug where the WSL client fails to detect completed browser-based authorization for Copilot.
    *   *Reaction:* Closed; resolved.
4.  **[CLOSED] Split-turn compaction causing 429 errors (#5536)**
    *   *Significance:* Resolves concurrency issues with local `llama.cpp` backends during auto-compaction, preventing rate-limit errors.
    *   *Reaction:* Closed; resolved.
5.  **[CLOSED] Kitty inline image preview renders blank (#6202)**
    *   *Significance:* Fixes a visual bug in the TUI where image previews reserve space but fail to render in plain Kitty terminals.
    *   *Reaction:* Closed; no action required on code side.
6.  **[OPEN] Clamping to context window prevents artificial context limits (#6206)**
    *   *Significance:* Identifies a regression where recent fixes incorrectly clamp `max_tokens`, creating unintended artificial limits distinct from the model's true context window.
    *   *Reaction:* Open; 2 comments.
7.  **[CLOSED] Auth Blocking Local Models (#6231)**
    *   *Significance:* Reports a bug where local models (e.g., DeepSeek) incorrectly trigger OAuth/API key login requirements.
    *   *Reaction:* Closed; resolved.
8.  **[CLOSED] Escape Leaves Pi Stuck in Working (#6234)**
    *   *Significance:* Fixes a TUI state deadlock where pressing Escape during an extension hook failure leaves the UI in a perpetual "Working..." state.
    *   *Reaction:* Closed; resolved.
9.  **[CLOSED] /scoped-models cannot select IDs with brackets (#6210)**
    *   *Significance:* Fixes a parsing bug preventing selection of custom models with special characters like `[1m]` in their IDs.
    *   *Reaction:* Closed; resolved.
10. **[CLOSED] Together.ai models to be deprecated July 10 (#6132)**
    *   *Significance:* Warning notice regarding the deprecation of `GLM-5.1` and `Qwen3-235B` on Together.ai, requiring users to migrate to newer model endpoints.
    *   *Reaction:* Informational; closed.

## 4. Key PR Progress
1.  **#6213 / #6219 / #6218 (Closed) feat(coding-agent): Implement AOT compilation for TypeScript extensions**
    *   *Summary:* Eliminates redundant `jiti` compilation overhead by introducing Ahead-of-Time compilation via `esbuild`, reducing extension startup time from seconds to milliseconds.
2.  **#6207 (Closed) feat(ai): Add Claude Sonnet 5 to GitHub Copilot provider**
    *   *Summary:* Integrates the newly GA'd Claude Sonnet 5 into the GitHub Copilot provider catalog, aligning it with the Anthropic provider updates.
3.  **#6227 (Open) feat: sqlite session storage**
    *   *Summary:* Introduces optional parallel SQLite storage for session transcripts alongside the default JSONL format, enabled via `PI_SQLITE_SESSION_STORAGE`.
4.  **#5678 (Closed) Add excludeFromContext for custom messages**
    *   *Summary:* Implements the `excludeFromContext` flag for custom messages, allowing them to be persisted and rendered without polluting the LLM's context window.
5.  **#6216 (Open) feat: Add Amazon Bedrock Mantle OpenAI Responses provider**
    *   *Summary:* Adds support for Amazon Bedrock Mantle's OpenAI Responses API, supporting GPT 5.5 and 5.4 models via a new provider adapter.
6.  **#5262 (Open) feat(ai): Add Anthropic Vertex provider**
    *   *Summary:* Adds a built-in provider for running Claude models on Google Cloud Vertex AI, utilizing the `AnthropicVertex` SDK.
7.  **#6225 (Closed) fix(ai): Infer toolUse when provider omits finish_reason**
    *   *Summary:* Fixes compatibility with providers like NVIDIA NIM that omit `finish_reason="tool_calls"`, preventing stream termination errors.
8.  **#6230 (Closed) fix(coding-agent): Preserve first path segment in bare root**
    *   *Summary:* Corrects a path resolution bug where `find` relativization incorrectly stripped the first character of paths starting at the bare root (`/`).
9.  **#2780 (Closed) feat(coding-agent,tui): Support argument-hint frontmatter**
    *   *Summary:* Enables autocomplete dropdowns to display expected arguments for commands based on frontmatter hints in prompt templates.
10. **#6205 (Closed) fix(context-canvas): Stop composer overlay blocking clicks**
    *   *Summary:* Fixes CSS layering issues in the context canvas that prevented clicks on the side panel's Save button and Recent Range chips.

## 5. Feature Request Trends
*   **Provider Expansion:** Strong demand for multi-cloud AI integration, specifically **AWS Bedrock Mantle** and **Google Cloud Vertex AI**.
*   **Storage & Performance:** Requests for **SQLite-backed session storage** and **AOT compilation** for extensions indicate a focus on data portability and runtime efficiency.
*   **UX/UI Refinement:** Continued push for better TUI rendering (Kitty/WWSL fixes), XDG compliance, and improved argument hinting in autocomplete.
*   **Context Management:** Features like `excludeFromContext` highlight ongoing efforts to optimize token usage and context window utilization.

## 6. Developer Pain Points
*   **Dependency Hell:** Issues like #5653 (Shrinkwrap) and #6215 (missing `@smithy/node-http-handler`) suggest friction in maintaining consistent dependency trees across nested packages.
*   **TUI State Management:** Recurring bugs related to terminal rendering (Kitty #6202, Spinner #3083, Escape key #6234) indicate complexity in managing asynchronous UI states within different terminal emulators.
*   **Provider Compatibility:** Inconsistent API responses from various providers (e.g., NVIDIA NIM missing `finish_reason` #6225, Bedrock caching flags #6235) require robust fallback logic and adapters.
*   **Local Backend Constraints:** Users with limited hardware (single-slot local GPUs) face rate-limiting issues during parallel operations like split-turn compaction (#5536).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-02

### 1. Today's Highlights
The Qwen Code team released **v0.19.4**, introducing configurable auto-compact thresholds and refreshing daemon documentation, alongside a nightly build focusing on daemon worker stability. Significant community activity surrounds authentication configuration nuances, with users reporting issues regarding API key mixing and session persistence, while core development advances include hardened daemon channels and performance optimizations for skill loading and glob traversal.

### 2. Releases
**v0.19.4** and **v0.19.4-nightly.20260702.46814e4f1** are available.
*   **Daemon & Docs:** Updated daemon documentation (Wave 2) and hardened daemon-managed channel workers with better supervision and logging.
*   **Core Features:** Added configurable auto-compact thresholds to manage context window usage more efficiently.
*   **Web Shell:** Deferred session creation in web-shell to improve startup responsiveness.

[View Release v0.19.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.4)
[View Nightly Build](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.4-nightly.20260702.46814e4f1)

### 3. Hot Issues
1.  **[Bug] Alibaba Cloud API Key/Token Plan Conflicts (#5080)**
    Users report 401 errors when mixing Standard API Keys with Token Plan providers. This highlights ongoing friction in multi-provider authentication configurations.
    [Link](https://github.com/QwenLM/qwen-code/issues/5080)
2.  **[Bug] /auth Configuration Not Persisting to New Sessions (#5979)**
    Modifying model suppliers via `/auth` works for the current session but fails to apply to new ones, causing persistent 401 errors.
    [Link](https://github.com/QwenLM/qwen-code/issues/5979)
3.  **[Bug] IDEA Plugin UI Failure (#4888)**
    The IntelliJ plugin fails to display question text or accept user input, blocking interactive workflows for IDE users.
    [Link](https://github.com/QwenLM/qwen-code/issues/4888)
4.  **[Enhancement] Daemon Cold Start Latency (#4748)**
    Benchmarking shows daemon cold start (~2.5s) is significantly slower than CLI init (~0.7s). Developers are pushing for optimization to improve perceived responsiveness.
    [Link](https://github.com/QwenLM/qwen-code/issues/4748)
5.  **[Bug] Gitignore Handling Inconsistency (#6119)**
    `list_directory` and `read_file` tools handle `.gitignore` differently, leading to unexpected file visibility issues for the agent.
    [Link](https://github.com/QwenLM/qwen-code/issues/6119)
6.  **[Bug] QQ Bot Streaming & Cron Issues (#6094)**
    Follow-up bugs from recent QQ Bot integration include duplicate messages and timing issues with block streaming.
    [Link](https://github.com/QwenLM/qwen-code/issues/6094)
7.  **[Bug] Local Ollama JSON Response Format (#1281)**
    Users deploying via Ollama encounter JSON-format response errors, complicating local deployment setups.
    [Link](https://github.com/QwenLM/qwen-code/issues/1281)
8.  **[Bug] Gitignore Respect Logic (#1093)**
    Setting `respect_gitignore: false` still results in gitignored files being processed, contradicting user expectations.
    [Link](https://github.com/QwenLM/qwen-code/issues/1093)
9.  **[Bug] Context Window Calculation Error (#6144)**
    Incorrect calculation of context windows for local Qwen3-Coder instances leads to potential truncation or memory errors.
    [Link](https://github.com/QwenLM/qwen-code/issues/6144)
10. **[Bug] Terminal Flickering (#6137)**
    Visual flickering reported in xterm/alacritty environments, affecting UX on Linux systems.
    [Link](https://github.com/QwenLM/qwen-code/issues/6137)

### 4. Key PR Progress
1.  **feat(cli): Harden daemon-managed channel worker (#6098)**
    Adds bounded restart supervision, IPC heartbeats, and credential-redacted logging for channel workers, improving stability for `qwen serve`.
    [Link](https://github.com/QwenLM/qwen-code/pull/6098)
2.  **perf(core): Memoize collectAvailableSkillEntries (#6139)**
    Caches skill entries to eliminate 7+ redundant disk scans at startup, significantly reducing initialization time.
    [Link](https://github.com/QwenLM/qwen-code/pull/6139)
3.  **feat(cli): Add credential redaction for worker stderr (#6146)**
    Ensures sensitive credentials are stripped from worker logs before reaching the daemon's stderr, enhancing security.
    [Link](https://github.com/QwenLM/qwen-code/pull/6146)
4.  **perf(glob): Prune ignored directories during traversal (#6123)**
    Applies `.gitignore` rules *during* glob traversal rather than post-filtering, optimizing performance and accuracy for file operations.
    [Link](https://github.com/QwenLM/qwen-code/pull/6123)
5.  **fix(qqbot): Streaming improvements (#5902)**
    Refactors QQ Bot streaming with idle flushes, removes character limits, and fixes markdown detection and reply TTLs.
    [Link](https://github.com/QwenLM/qwen-code/pull/5902)
6.  **feat(web-shell): Overhaul list-dialog interaction (#6128)**
    Adds full keyboard navigation, ARIA compliance, and consistent visual language to web-shell dialogs.
    [Link](https://github.com/QwenLM/qwen-code/pull/6128)
7.  **feat(scheduler): Opt-in per-tool-call execution timeout (#6124)**
    Introduces configurable timeouts for individual tool calls via `QWEN_CODE_TOOL_EXECUTION_TIMEOUT_MS`, preventing hangs.
    [Link](https://github.com/QwenLM/qwen-code/pull/6124)
8.  **feat(skills): Add zvec-grep bundled skill (#6096)**
    Adds a new skill guiding the agent to use `zg` for semantic workspace search, enhancing code investigation capabilities.
    [Link](https://github.com/QwenLM/qwen-code/pull/6096)
9.  **feat(channels): Show lifecycle status in adapters (#6114)**
    Maps channel task lifecycle events to native progress surfaces in Telegram, Weixin, and DingTalk.
    [Link](https://github.com/QwenLM/qwen-code/pull/6114)
10. **fix: Lazy-load memory prompt when indexes are empty (#6104)**
    Reduces system prompt overhead by skipping full memory protocols when no memory indexes are present.
    [Link](https://github.com/QwenLM/qwen-code/pull/6104)

### 5. Feature Request Trends
*   **Reliability & Fallbacks:** Strong demand for a **fallback model chain** (#6116) to automatically switch to backup models during rate limits or outages.
*   **Portability:** Requests for **project-local chat history** (#2373) to enable sharing and migration of conversation contexts across machines.
*   **Hot-Reload:** Continued interest in a comprehensive **hot-reload system** (#3696) for skills, extensions, and configs without restarting sessions.
*   **Security:** Interest in stricter credential handling and redaction in logs and outputs.

### 6. Developer Pain Points
*   **Authentication Complexity:** The most frequent complaints involve **401 errors** and configuration mismatches, particularly when using Alibaba Cloud Token Plans, local Ollama instances, or switching providers within a session. The `/auth` command's lack of persistence across new sessions is a major friction point.
*   **Gitignore Inconsistencies:** Users are confused by the inconsistent behavior of `.gitignore` and `.qwenignore` across different tools (`list_directory` vs `read_file`) and settings.
*   **Performance Overhead:** Startup latency, specifically the daemon cold start time and redundant disk scans for skills, is impacting the developer experience.
*   **UI/UX Bugs:** Specific issues in the IDEA plugin (missing input fields) and terminal rendering (flickering) are hindering usability for non-CLI users.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-07-02
**Repository:** github.com/Hmbown/DeepSeek-TUI

### 1. Today's Highlights
The community is heavily focused on the upcoming **v0.8.67** release, specifically the "Constitution-first" setup wizard and the separation of work modes from approval policies to prevent unintended agent behaviors. Significant technical efforts are underway to support dynamic MCP server management and resolve lingering branding inconsistencies from the recent rebrand.

### 2. Releases
**No new releases** were published in the last 24 hours. Development is currently concentrated on the v0.8.67 beta/rc phase, with multiple issues tracking specific components of the new setup wizard and security posture controls.

### 3. Hot Issues
*Selected by comment volume and strategic impact.*

1.  **[Bug] CodeWhale over-extension & self-questioning loops** (#3275)
    *   **Why it matters:** A critical regression where the agent ignores user intent, entering autonomous loops. This directly impacts reliability and trust.
    *   **Reaction:** High engagement (14 comments); users are reporting severe deviations from expected behavior.
2.  **[Enhancement] Runtime posture card with constitution boundary** (#3406)
    *   **Why it matters:** Defines the core security model for v0.8.67, ensuring users explicitly select trust levels (ask-first, normal, high-trust) rather than having them changed silently.
    *   **Reaction:** Active development discussion on implementation details.
3.  **[Enhancement] Separate work mode from approval policy** (#3736)
    *   **Why it matters:** Addresses structural confusion in `EffectiveModePolicy` where UI modes did not match actual permission execution, causing "ghost" permissions.
    *   **Reaction:** Developers debating the cleanest way to decouple these four overlapping knobs.
4.  **[Epic] Staged command-boundary refactor** (#2870)
    *   **Why it matters:** A foundational refactor to improve how the TUI handles command boundaries, reducing ambiguity in agent execution scopes.
    *   **Reaction:** Ongoing tracking of smaller, mergeable layers for this large refactoring effort.
5.  **[Enhancement] Guided localized constitution creator** (#3793)
    *   **Why it matters:** Moves away from blank prompt editors to a guided UX for creating constitutions, supporting language-first approaches and preventing autonomy flips.
    *   **Reaction:** Positive reception for improving onboarding clarity.
6.  **[Docs] Constitution-first setup documentation** (#3412)
    *   **Why it matters:** Critical for user adoption; defines the scope for v0.8.67 docs, focusing on the setup wizard and constitution lane.
    *   **Reaction:** Clarification needed on what belongs in v0.8.67 vs. future milestones.
7.  **[Enhancement] `/constitution` as primary management surface** (#3806)
    *   **Why it matters:** Simplifies user interaction by making `/constitution` the main entry point, hiding complex context internals unless needed for diagnostics.
    *   **Reaction:** Strong support for reducing cognitive load during setup.
8.  **[Enhancement] Setup verification and doctor integration** (#3411)
    *   **Why it matters:** Ensures the new setup wizard provides actionable, safe reports on readiness, leveraging existing `codewhale doctor` logic.
    *   **Reaction:** Technical discussions on narrowing checks to avoid false positives.
9.  **[Bug] Sub-agent state persists to `.deepseek/`** (#3864)
    *   **Why it matters:** A post-rebrand bug causing state files to write to legacy directories, leading to confusion and potential data loss.
    *   **Reaction:** Quick identification of the fallback logic error; urgent fix required.
10. **[Question] Fleet/Whaleflow usage tutorial** (#3863)
    *   **Why it matters:** Highlights a gap in documentation for complex multi-agent workflows ("Fleet"), which users find unintuitive compared to natural language expectations.
    *   **Reaction:** Users requesting a comprehensive guide to streamline the "natural language → tasks.json" flow.

### 4. Key PR Progress
*Selected by relevance and activity.*

1.  **[Setup] Add setup summary wizard step for MCP/skills/plugins** (#3643)
    *   **Progress:** Implements `SetupSummaryView` to display current MCP status and plugin state, part of the v0.8.67 onboarding flow.
    *   **Link:** [PR #3643](https://github.com/Hmbown/CodeWhale/pull/3643)
2.  **[Cleanup] Prune dead fleet runtime helpers** (#3879)
    *   **Progress:** Removes legacy compatibility code from `fleet/worker_runtime.rs` that no longer has call sites, cleaning up the codebase.
    *   **Link:** [PR #3879](https://github.com/Hmbown/CodeWhale/pull/3879)
3.  **[Windows] Preserve Windows SDK env roots for shell** (#3578)
    *   **Progress:** Fixes Windows shell execution by recovering safe SDK/toolchain paths from the registry before launching child shells.
    *   **Link:** [PR #3578](https://github.com/Hmbown/CodeWhale/pull/3578)
4.  **[Config] v0.8.67 constitution-first setup foundation** (#3861)
    *   **Progress:** Lands the shared model, persistence, and renderer foundation for the constitution setup lane in `crates/config`.
    *   **Link:** [PR #3861](https://github.com/Hmbown/CodeWhale/pull/3861)
5.  **[Feat] LLM can start MCP servers from chat context** (#3866)
    *   **Progress:** Introduces `start_mcp_server` tool, allowing dynamic creation of stdio and HTTP MCP servers during conversations.
    *   **Link:** [PR #3866](https://github.com/Hmbown/CodeWhale/pull/3866)
6.  **[Cleanup] Remove unused model registry helpers** (#3872)
    *   **Progress:** Strips unused enumeration helpers and associated tests from the model registry to reduce bloat.
    *   **Link:** [PR #3872](https://github.com/Hmbown/CodeWhale/pull/3872)
7.  **[Refactor] McpTool storage to Arc<McpTool>** (#3870)
    *   **Progress:** Changes `McpConnection` to use `Arc<McpTool>` to support concurrent access required for dynamic MCP server infrastructure.
    *   **Link:** [PR #3870](https://github.com/Hmbown/CodeWhale/pull/3870)
8.  **[Feat] Add dynamic MCP server infrastructure to McpPool** (#3869)
    *   **Progress:** Adds in-memory dynamic server support to `McpPool`, serving as the backend for the new `start_mcp_server` tool.
    *   **Link:** [PR #3869](https://github.com/Hmbown/CodeWhale/pull/3869)
9.  **[Fix] Persist sub-agent state to `.codewhale/`** (#3865)
    *   **Progress:** Corrects the `default_state_path` fallback logic to ensure sub-agent states are saved in the new branded directory.
    *   **Link:** [PR #3865](https://github.com/Hmbown/CodeWhale/pull/3865)
10. **[Docs] Clarify Hotbar help shortcuts** (#3782)
    *   **Progress:** Updates documentation to accurately reflect terminal chords and shortcut caveats for the Hotbar feature.
    *   **Link:** [PR #3782](https://github.com/Hmbown/CodeWhale/pull/3782)

### 5. Feature Request Trends
*   **Constitution-First Onboarding:** A strong trend toward simplifying initial setup through guided, "constitution-first" wizards that prioritize user intent and security boundaries over raw configuration files.
*   **Dynamic Tool Integration:** Growing demand for the LLM to dynamically manage its own environment, specifically starting/stopping MCP servers and managing provider models from within the chat context.
*   **Security Posture Granularity:** Users and developers are pushing for clearer separation between "work mode" (what the agent does) and "approval policy" (how it gets permission), seeking more explicit control over trust levels.

### 6. Developer Pain Points
*   **Rebrand Lingering Bugs:** Multiple issues (#3864, #3865) highlight friction from the recent brand change, specifically around path resolution and state file persistence (`~/.deepseek/` vs `~/.codewhale/`).
*   **Complexity of Multi-Agent Workflows:** Users struggle with the current "Fleet" and "Whaleflow" implementations, finding the manual `tasks.json` editing process unintuitive compared to natural language commands.
*   **UI/UX Inconsistencies:** Recurring complaints about misleading hints (e.g., "backgrounding" commands that don't work as described) and stale sidebar states when sub-agents complete or cancel.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*