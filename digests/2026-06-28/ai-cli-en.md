# AI CLI Tools Community Digest 2026-06-28

> Generated: 2026-06-28 02:32 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Comparison Report
**Date:** 2026-06-28

## 1. Ecosystem Overview
The AI CLI landscape in mid-2026 is characterized by intense competition driven by reliability, cost-efficiency, and cross-platform parity. While major players like OpenAI, Anthropic, and Google are pushing architectural overhauls (MCP, OAuth, Security Hardening), smaller and specialized tools like OpenCode and DeepSeek TUI are focusing on niche optimizations such as token efficiency and native Rust performance. The ecosystem is moving away from simple code completion toward autonomous agent workflows, bringing significant challenges in state management, security sandboxing, and resource leakage across all tools.

## 2. Activity Comparison

| Tool | Issues (Hot/Total) | PRs (Active) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | High (10 Hot) | 1 | No new release |
| **OpenAI Codex** | Very High (10 Hot) | 10 | 3 Alpha Releases (Rust CLI) |
| **Gemini CLI** | High (10 Hot) | 10 | Nightly Build (v0.51.0) |
| **GitHub Copilot** | High (10 Hot) | 3 | No new release |
| **Kimi Code** | Low (None) | N/A | No activity |
| **OpenCode** | Medium (10 Hot) | 10 | No new release |
| **Pi** | High (10 Hot) | 8 | No new release |
| **Qwen Code** | Medium (10 Hot) | 10 | Nightly Build (v0.19.2) |
| **DeepSeek TUI** | Medium (10 Hot) | 10 | No new release (v0.8.66 Gated) |

*Note: Issue counts reflect "Hot Issues" highlighted in the digest. PR counts reflect significant engineering activity identified.*

## 3. Shared Feature Directions

*   **Cross-Platform Stability & Path Handling:**
    *   **Tools:** OpenAI Codex, OpenCode, GitHub Copilot, Gemini CLI.
    *   **Need:** Significant friction exists in Windows/WSL path translation (UNC paths, sandbox initialization) and macOS process management (zombie processes, file descriptor leaks). Users demand consistent behavior across OS boundaries.
*   **Context & Cost Management:**
    *   **Tools:** OpenAI Codex, Qwen Code, DeepSeek TUI, OpenCode.
    *   **Need:** Rapid iteration on billing transparency (rate-limit visibility), prompt caching efficiency (Anthropic/OpenAI), and context window control (manual compaction, persistent state). Users are highly sensitive to "silent" token consumption and unexpected budget drains.
*   **Security & Sandboxing Hardening:**
    *   **Tools:** Gemini CLI, OpenAI Codex, Claude Code.
    *   **Need:** Preventing silent scope expansion, securing MCP OAuth flows, and fixing path traversal/DNS rebinding vulnerabilities. The community is increasingly treating CLI tools as security-sensitive infrastructure requiring strict permission boundaries.
*   **Agent Autonomy vs. User Control:**
    *   **Tools:** Gemini CLI, DeepSeek TUI, Claude Code.
    *   **Need:** Balancing powerful autonomous agents with user oversight. Requests for explicit confirmation before scope changes, better undo/redo mechanisms, and clearer visibility into sub-agent trajectories.

## 4. Differentiation Analysis

*   **Enterprise & Mainstream Focus (OpenAI Codex, GitHub Copilot):**
    *   **Focus:** Stability, billing accuracy, and broad platform support.
    *   **Differentiator:** Copilot struggles with basic TUI/Windows stability; Codex is tackling massive architectural shifts (Rust CLI, OAuth centralization) but facing severe adoption friction due to billing bugs. Both are prioritizing "just working" over novel features.
*   **Developer Experience & Extensibility (Claude Code, OpenCode, Pi):**
    *   **Focus:** Rich IDE integration, extensible APIs (extensions, plugins), and granular UX control.
    *   **Differentiator:** Claude Code leads in VS Code integration depth but suffers from rendering bugs. OpenCode and Pi are building robust extension ecosystems (plugin systems, custom providers) but face challenges with memory leaks and silent failures.
*   **Performance & Efficiency (DeepSeek TUI, Qwen Code):**
    *   **Focus:** Token efficiency, native performance, and cost reduction.
    *   **Differentiator:** DeepSeek TUI is aggressively optimizing cache hit rates and reducing token bloat via Rust and "cache-maximal" modes. Qwen Code focuses on persistent loop states and cross-device sync, appealing to long-running project workflows.
*   **Security-First Approach (Gemini CLI):**
    *   **Focus:** Hardening against attacks (DNS rebinding, path traversal) and enforcing strict agent boundaries.
    *   **Differentiator:** Gemini CLI is uniquely proactive in security patches and preventing "silent scope expansion," targeting security-conscious developers and enterprise compliance needs.

## 5. Community Momentum & Maturity

*   **High Momentum & Rapid Iteration:**
    *   **OpenAI Codex:** Extremely high engagement (300+ likes on billing issues) indicates a critical mass of users but also significant dissatisfaction. The rapid alpha releases suggest a tool in flux, trying to stabilize its new Rust architecture.
    *   **Gemini CLI:** High PR activity focused on security and agent control suggests a mature, responsive engineering team addressing complex edge cases.
*   **Stable but Troubled:**
    *   **Claude Code:** High issue volume on specific bugs (Opus 4.7 rendering) shows a large, dependent user base. The lack of new releases suggests the team is focused on fixing regressions rather than adding features.
    *   **GitHub Copilot:** High frustration with basic regressions (Windows clipboard, TUI glitches) indicates a tool that may be over-engineered or lacking rigorous QA for its latest updates.
*   **Niche but Growing:**
    *   **OpenCode & Pi:** Active communities focusing on extensibility and customization. Pi’s focus on extension API stability suggests it is maturing into a platform for third-party tool developers.
    *   **DeepSeek TUI:** Strong momentum around performance metrics (token/cache) appeals to cost-sensitive and high-volume users.

## 6. Trend Signals

*   **Billing Transparency is a Core Feature:** Users are rejecting opaque rate-limiting and sudden credit depletion. Tools that expose detailed usage logs and reset times (like Codex PR #30395) are gaining trust.
*   **Security is Non-Negotiable:** The shift from "open shell access" to "sandboxed, permission-bound agents" is accelerating. Features like explicit consent for scope changes (Gemini) and secure OAuth handling (Codex) are becoming standard expectations.
*   **Platform Parity is a Major Gap:** Windows and Linux users consistently report lower quality experiences compared to macOS. Tools that prioritize cross-platform consistency (fixing WSL paths, Linux keychains) will gain significant competitive advantage.
*   **Agent Memory & State Persistence:** The trend is moving beyond simple chat history to persistent, project-local state (todos, plans, context) that survives sessions and enables cross-device sync. This is a key differentiator for long-term project workflows.
*   **Efficiency Wars:** With high token costs, tools that optimize context windows (caching, summarization, pruning) are winning user loyalty. DeepSeek’s focus on cache hit rates and OpenCode’s memory leak fixes highlight this priority.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-06-28
**Source:** `github.com/anthropics/skills`

### 1. Top Skills Ranking
*Based on community attention, bug reproduction volume, and functional impact.*

1.  **Skill Creator Evaluation Fix (PR #1298 / Issue #556)**
    *   **Functionality:** Core tooling for developing and optimizing other skills.
    *   **Discussion:** Critical bug where `run_eval.py` reported 0% recall due to Windows subprocess and encoding issues. Over 10 independent reproductions indicate a systemic failure in the skill optimization loop.
    *   **Status:** Open (Multiple related PRs #1099, #1050, #1323 attempting fixes).
    *   **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **Frontend Design Clarity (PR #210)**
    *   **Functionality:** Enhances the `frontend-design` skill for better actionable guidance.
    *   **Discussion:** Focuses on reducing ambiguity in instructions to ensure Claude follows design patterns consistently within a single conversation.
    *   **Status:** Open.
    *   **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

3.  **Document Typography Control (PR #514)**
    *   **Functionality:** Prevents typographic errors (orphans, widows, numbering misalignment) in generated documents.
    *   **Discussion:** Addresses a universal pain point in AI-generated text formatting. High relevance for professional document output.
    *   **Status:** Open.
    *   **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

4.  **SAP-RPT-1-OSS Predictor (PR #181)**
    *   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics.
    *   **Discussion:** Represents a major enterprise integration trend, moving beyond generic coding to specialized industry data models.
    *   **Status:** Open.
    *   **Link:** [PR #181](https://github.com/anthropics/skills/pull/181)

5.  **Testing Patterns Skill (PR #723)**
    *   **Functionality:** Comprehensive guide for unit, integration, and React component testing.
    *   **Discussion:** Fills a gap in structured QA methodologies, promoting the "Testing Trophy" philosophy and specific tooling like Testing Library.
    *   **Status:** Open.
    *   **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

6.  **DOCX Tracked Change Fix (PR #541)**
    *   **Functionality:** Fixes document corruption in `docx` skill when adding tracked changes to files with existing bookmarks.
    *   **Discussion:** Technical fix for OOXML ID collisions, highlighting the fragility of complex document manipulation skills.
    *   **Status:** Open.
    *   **Link:** [PR #541](https://github.com/anthropics/skills/pull/541)

### 2. Community Demand Trends
*Derived from high-engagement Issues.*

*   **Cross-Platform Compatibility:** Significant demand for stable Windows support in skill-creator tools (Issues #1061, #1169). Users are frustrated by Unix-first assumptions in evaluation scripts.
*   **Enterprise & Org-Wide Sharing:** Strong interest in organizational skill libraries and secure distribution (Issue #228, #492). Users want seamless sharing within teams and protection against namespace abuse.
*   **Persistent Memory & Context Management:** Emerging trend toward skills that manage agent state across sessions, such as `shodh-memory` (Issue #154) and `compact-memory` (Issue #1329), indicating a shift from stateless interactions to long-running agent workflows.
*   **Security & Governance:** Growing concern over trust boundaries (Issue #492) and requests for explicit safety patterns in agent systems (Issue #412).

### 3. High-Potential Pending Skills
*Active PRs with significant community traction or critical bug fixes.*

1.  **ODT Support Skill (PR #486)**
    *   **Potential:** Expands document capability beyond DOCX/PDF to OpenDocument Format, crucial for enterprise/LibreOffice users.
    *   **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

2.  **AppDeploy Skill (PR #360)**
    *   **Potential:** Enables direct deployment of full-stack web apps via Claude, bridging development and operations.
    *   **Link:** [PR #360](https://github.com/anthropics/skills/pull/360)

3.  **Codebase Inventory Audit (PR #147)**
    *   **Potential:** Automated maintenance skill for identifying orphaned code and documentation gaps, appealing to legacy codebase maintainers.
    *   **Link:** [PR #147](https://github.com/anthropics/skills/pull/147)

4.  **Skill Quality/Security Analyzers (PR #83)**
    *   **Potential:** Meta-skills that evaluate other skills for quality and security, addressing the trust boundary concerns raised in Issue #492.
    *   **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust, cross-platform tooling stability** (specifically Windows compatibility in evaluation loops) and **enterprise-grade security/sharing mechanisms**, as functional gaps in core developer utilities currently hinder broader adoption of specialized skills.

---

# Claude Code Community Digest: 2026-06-28

### 1. Today's Highlights
The primary focus of the community this week remains the rendering and configuration challenges introduced by the Opus 4.7 model update, particularly regarding thinking summaries in VS Code and CLI environments. Additionally, users are reporting significant friction with safety filters blocking legitimate cybersecurity research workflows, prompting urgent discussions around false positives and policy clarity.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **[BUG] Opus 4.7 thinking summaries not rendered in VS Code extension** (#49322)
    *   *Why it matters:* High engagement (47 comments, 41 👍) indicates widespread impact on developers relying on extended thinking visibility in their IDE.
    *   *Link:* [Issue #49322](https://github.com/anthropics/claude-code/issues/49322)
*   **Thinking summaries missing on Opus 4.7 — harness doesn't set display: "summarized"** (#49268)
    *   *Why it matters:* Identifies a potential API/harness configuration gap rather than just a UI bug, affecting core functionality (46 comments, 75 👍).
    *   *Link:* [Issue #49268](https://github.com/anthropics/claude-code/issues/49268)
*   **[BUG] API Error: 401 Invalid authentication credentials** (#69706)
    *   *Why it matters:* Authentication failures disrupt workflow continuity; 21 comments suggest ongoing troubleshooting for this specific error state.
    *   *Link:* [Issue #69706](https://github.com/anthropics/claude-code/issues/69706)
*   **Opus 4.7 thinking summaries not rendered (VSCode extension 2.1.112)** (#49902)
    *   *Why it matters:* Confirms the issue persists across WSL2/Linux environments, expanding the scope beyond macOS/Windows (14 comments, 41 👍).
    *   *Link:* [Issue #49902](https://github.com/anthropics/claude-code/issues/49902)
*   **`showThinkingSummaries: true` silently no-ops on Opus 4.7** (#59844)
    *   *Why it matters:* Developers report that explicit configuration settings are being ignored, requiring a workaround or code fix in the CLI/SDK (10 comments).
    *   *Link:* [Issue #59844](https://github.com/anthropics/claude-code/issues/59844)
*   **[FEATURE] Cowork: give users a manual /compact** (#65114)
    *   *Why it matters:* Users want greater control over context window management, as automatic compaction timing is often suboptimal (5 comments).
    *   *Link:* [Issue #65114](https://github.com/anthropics/claude-code/issues/65114)
*   **[BUG] Dispatch permanently shows "Can't reach your desktop"** (#67303)
    *   *Why it matters:* Indicates a persistent pairing/server-side sync issue in Cowork mode that requires manual reset (4 comments).
    *   *Link:* [Issue #67303](https://github.com/anthropics/claude-code/issues/67303)
*   **MCP server instructions are silently truncated** (#43474)
    *   *Why it matters:* Critical bug for users employing multiple MCP servers, where instructions are cut off without warning, leading to degraded agent performance (3 comments).
    *   *Link:* [Issue #43474](https://github.com/anthropics/claude-code/issues/43474)
*   **[FEATURE] Native Windows toast notifications** (#67220)
    *   *Why it matters:* Addresses platform parity, allowing Windows users to receive OS-level notifications for task completion and permissions (3 comments).
    *   *Link:* [Issue #67220](https://github.com/anthropics/claude-code/issues/67220)
*   **[Bug][cyber] Safety block interrupts legitimate open-source drone ground station development** (#71920)
    *   *Why it matters:* Highlights severe false positives in security filters that halt authorized research sessions, raising concerns about usability for security professionals (3 comments).
    *   *Link:* [Issue #71920](https://github.com/anthropics/claude-code/issues/71920)

### 4. Key PR Progress
*   **fix(scripts): add error message to edit-issue-labels.sh** (#68787)
    *   *Description:* Improves developer experience for maintainers by ensuring the CI script provides a clear error message when called without arguments, instead of exiting silently.
    *   *Link:* [PR #68787](https://github.com/anthropics/claude-code/pull/68787)

*(Note: Only 1 active PR was identified in the provided data; the second item listed in source data (#71798) was closed with no summary.)*

### 5. Feature Request Trends
*   **Manual Context Management:** Strong demand for user-initiated context compaction (`/compact`) in Cowork mode to prevent premature truncation of relevant history.
*   **Cross-Surface Parity:** Requests for consistent feature sets and feedback mechanisms across Claude Code, Cowork, and claude.ai to reduce cognitive load.
*   **Agent Self-Correction:** Proposals for mechanisms allowing the agent to generate its own learning signals between sessions, rather than relying solely on explicit user corrections.
*   **Platform-Native Notifications:** Enhancements for OS-level notifications (e.g., Windows Toasts) to improve asynchronous workflow management.

### 6. Developer Pain Points
*   **Opus 4.7 Rendering Gaps:** The dominant frustration is the failure to display thinking summaries in non-interactive surfaces (CLI, VS Code) after the model update, despite correct configuration.
*   **Security Filter False Positives:** Legitimate cybersecurity work (drone firmware, protocol analysis) is being blocked by safety filters, causing session halts and requiring complex workarounds.
*   **Authentication Instability:** Recurring 401 errors and corrupted configuration files are disrupting user sessions.
*   **MCP Configuration Fragility:** Silent truncation of instructions when multiple MCP servers are configured leads to unpredictable agent behavior.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-06-28

## 1. Today's Highlights
The Codex community is currently grappling with significant stability and cost issues, particularly regarding rapid credit depletion on the Plus plan and persistent resource leaks on Windows and macOS. Concurrently, the engineering team is advancing a major architectural overhaul for MCP OAuth handling to improve security and reliability across client connections.

## 2. Releases
Three alpha releases were published for the Rust-based CLI in the last 24 hours:
*   **rust-v0.143.0-alpha.29**: Latest alpha iteration.
*   **rust-v0.143.0-alpha.28**: Previous alpha iteration.
*   **rust-v0.143.0-alpha.27**: Previous alpha iteration.

*Note: These are pre-release builds; stability issues reported in the community (such as SQLite log churn) have been partially addressed in v0.142.0, but new alpha versions suggest ongoing rapid iteration.*

## 3. Hot Issues
The following issues represent the highest community engagement and critical pain points:

1.  **[Bug] Rate-limit cost spike draining budgets** (#28879)
    *   **Why it matters:** Users report a 10–20x increase in rate-limit consumption per token on `gpt-5.5`, causing the 5-hour Plus plan budget to vanish in 2–3 prompts.
    *   **Reaction:** 334 👍, 186 comments. This is the most critical operational issue affecting daily usage.
    *   [Link](https://github.com/openai/codex/issues/28879)

2.  **[Enhancement] Linux Desktop App Request** (#11023)
    *   **Why it matters:** There is strong demand for a native Linux desktop application, citing better power management and performance compared to macOS alternatives.
    *   **Reaction:** 650 👍, 130 comments. Indicates a significant gap in platform support.
    *   [Link](https://github.com/openai/codex/issues/11023)

3.  **[Bug] SQLite Feedback Logs Consuming SSD Endurance** (#28224)
    *   **Why it matters:** Excessive logging was writing up to 640 TB/year, risking hardware failure. Merged fixes in v0.142.0 reduced logs by 85%, but some users report residual churn.
    *   **Reaction:** 399 👍, 93 comments.
    *   [Link](https://github.com/openai/codex/issues/28224)

4.  **[Enhancement] Exclude Sensitive Files Mechanism** (#2847)
    *   **Why it matters:** Users request explicit `.codexignore` support to prevent sensitive data from being sent to models or indexed, enhancing privacy and security.
    *   **Reaction:** 414 👍, 79 comments.
    *   [Link](https://github.com/openai/codex/issues/2847)

5.  **[Bug] Quota Drained Instantly** (#29955)
    *   **Why it matters:** Similar to #28879, Pro users report 100 credits vanishing after a single message, indicating a systemic billing/logic error in rate-limit tracking.
    *   **Reaction:** 7 👍, 29 comments.
    *   [Link](https://github.com/openai/codex/issues/29955)

6.  **[Enhancement] Restore /undo Command** (#9203)
    *   **Why it matters:** The removal of the `/undo` feature causes data loss when Codex modifies uncommitted files or deletes non-git-tracked files unexpectedly.
    *   **Reaction:** 300 👍, 50 comments.
    *   [Link](https://github.com/openai/codex/issues/9203)

7.  **[Bug] macOS Zombie Processes Causing Lag** (#25744)
    *   **Why it matters:** Unreaped child processes from Computer Use/MCP helpers cause HID lag and WindowServer stalls, degrading system responsiveness.
    *   **Reaction:** 3 👍, 8 comments.
    *   [Link](https://github.com/openai/codex/issues/25744)

8.  **[Bug] Windows Sandbox Setup Failure** (#29072)
    *   **Why it matters:** `apply_patch` fails on Windows because the sandbox executable cannot launch from the package path, breaking core editing functionality.
    *   **Reaction:** 19 👍, 22 comments.
    *   [Link](https://github.com/openai/codex/issues/29072)

9.  **[Bug] MCP Pipe FD Leaks Leading to EMFILE** (#26984)
    *   **Why it matters:** Long-running sessions leak file descriptors, eventually hitting the OS limit (`EMFILE`), crashing the CLI.
    *   **Reaction:** 1 👍, 7 comments.
    *   [Link](https://github.com/openai/codex/issues/26984)

10. **[Bug] Windows Git Polling Process Stuck** (#29408)
    *   **Why it matters:** Multi-repo workspaces on Windows spawn `git.exe` processes that do not terminate, consuming resources and potentially causing race conditions.
    *   **Reaction:** 0 👍, 6 comments.
    *   [Link](https://github.com/openai/codex/issues/29408)

## 4. Key PR Progress
Engineering activity focuses heavily on OAuth security, telemetry improvements, and connection stability:

1.  **Show usage-limit reset expiry details** (#30395)
    *   Addresses the lack of transparency in rate-limit resets by exposing expiry dates alongside available counts.
    *   [Link](https://github.com/openai/codex/pull/30395)

2.  **Telemetry: Log structured tool and inference timing events** (#30334)
    *   Improves observability by distinguishing between dispatch/queue time and actual handler execution time.
    *   [Link](https://github.com/openai/codex/pull/30334)

3.  **Disable Nagle on Rendezvous WebSockets** (#30269)
    *   Reduces latency in executor-server communication by disabling TCP delay algorithms.
    *   [Link](https://github.com/openai/codex/pull/30269)

4.  **Route MCP OAuth recovery through Codex** (#30294)
    *   Part of a stacked PR series centralizing OAuth credential management and recovery logic within the Codex client.
    *   [Link](https://github.com/openai/codex/pull/30294)

5.  **Serialize shared MCP OAuth credential stores** (#30292)
    *   Ensures thread-safe access to OAuth tokens, preventing corruption or race conditions during concurrent operations.
    *   [Link](https://github.com/openai/codex/pull/30292)

6.  **Expose environment info RPC** (#30291)
    *   Allows clients to discover shell and working directory details for named execution environments before thread creation.
    *   [Link](https://github.com/openai/codex/pull/30291)

7.  **Increase currentTime/read timeout** (#30384)
    *   Adjusts external request timeouts from 5s to 10s to handle slower network conditions or backend load.
    *   [Link](https://github.com/openai/codex/pull/30384)

8.  **Stabilize synthesized call output IDs** (#30327)
    *   Fixes conversation identity issues by assigning stable IDs to aborted call outputs, improving retry reliability.
    *   [Link](https://github.com/openai/codex/pull/30327)

9.  **Enforce marketplace source policy at runtime** (#29691)
    *   Implements enterprise-grade security by filtering plugins based on source policy, blocking unauthorized marketplaces.
    *   [Link](https://github.com/openai/codex/pull/29691)

10. **Report MCP OAuth Auto store drift** (#30296)
    *   Adds diagnostics to detect inconsistencies between cached and live OAuth states, aiding in debugging token refresh failures.
    *   [Link](https://github.com/openai/codex/pull/30296)

## 5. Feature Request Trends
*   **Platform Parity:** High demand for Linux support (#11023) and improved Windows sandbox reliability (#29072, #29408).
*   **Privacy & Control:** Requests for explicit file exclusion mechanisms (#2847) and granular edit confirmation workflows (#24325).
*   **Transparency:** Users want clearer visibility into rate-limit resets (#29618) and detailed feedback on hook failures (#27052).
*   **UX Recovery:** Strong desire for restored undo capabilities (#9203) and clickable references for subagents (#26200).

## 6. Developer Pain Points
*   **Billing Anomalies:** The most severe friction point is the unpredictable and excessive consumption of rate limits/credits, leading to abrupt session terminations and budget exhaustion.
*   **Resource Leaks:** Persistent memory, file descriptor, and process leaks (especially on Windows and macOS) degrade system performance and require frequent restarts.
*   **Windows Stability:** Multiple issues related to sandbox initialization, git polling, and UI rendering suggest the Windows desktop experience is currently less stable than macOS.
*   **Debugging Difficulty:** Lack of detailed error messages for hooks and OAuth failures makes troubleshooting complex integrations difficult for advanced users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-06-28

### 1. Today's Highlights
The Gemini CLI team prioritized security hardening with multiple critical patches addressing DNS rebinding, path traversal vulnerabilities, and environment variable sanitization. On the agent side, significant efforts are underway to prevent "silent scope expansion," ensuring the AI adheres strictly to user-defined boundaries without unauthorized execution.

### 2. Releases
**v0.51.0-nightly.20260628.gae0a3aa7b**
*   **Security Fix:** Enforced case-insensitive sensitive path blocklists and improved Human-in-the-Loop (HitL) checks within VS Code integrations.
*   [View Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260626.gb14416447...v0.51.0-nightly.20260628.gae0a3aa7b)

### 3. Hot Issues
*   **[Bug] Subagent Recovery After MAX_TURNS (#22323):** Critical P1 bug where subagents incorrectly report "Goal Success" upon hitting turn limits, masking interruptions. *(8 comments)*
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/22323)
*   **[Bug] Shell Command Stuck in "Waiting Input" (#25166):** Simple CLI commands hang indefinitely in the agent state despite completion. High frustration among users relying on automation. *(4 comments, 3 👍)*
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/25166)
*   **[Bug] Browser Agent Fails in Wayland (#21983):** Specific failure mode for Linux users on Wayland compositors, blocking browser automation workflows. *(4 comments, 1 👍)*
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/21983)
*   **[Bug] Gemini Does Not Use Skills/Sub-agents Enough (#21968):** Users report the agent ignores custom skills and sub-agents unless explicitly prompted, indicating a gap in contextual awareness. *(6 comments)*
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/21968)
*   **[Bug] Rewind No Longer Undoes Code Changes (#27595):** Regression in the `/rewind` command functionality. *(7 comments)*
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/27595)
*   **[Bug] Auto Memory Infinite Retry on Low-Signal Sessions (#26522):** Background extraction agents get stuck retrying sessions deemed low-signal, wasting resources. *(5 comments)*
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/26522)
*   **[Bug] Auto Memory Deterministic Redaction (#26525):** Concerns over secrets being logged in model context before redaction occurs in the extraction agent. *(5 comments)*
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/26525)
*   **[Bug] 400 Error with >128 Tools (#24246):** Agent hits API limits when too many tools are enabled, suggesting a need for better tool scoping. *(3 comments)*
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/24246)
*   **[Bug] Browser Agent Ignores settings.json Overrides (#22267):** Configuration values like `maxTurns` are ignored by the browser sub-agent. *(3 comments)*
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/22267)
*   **[Bug] Subagent Context Missing in Bug Reports (#21763):** `/bug` reports lack subagent trajectory details, hindering debugging of complex multi-step tasks. *(2 comments)*
    *   [Link](https://github.com/google-gemini/gemini-cli/issues/21763)

### 4. Key PR Progress
*   **Fix DNS Rebinding Bypass in `web_fetch` (#28181):** Critical security patch fixing synchronous IP checks that allowed DNS rebinding attacks.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28181)
*   **Fix Defensive Path Resolution for `@-reference` Files (#28180):** Re-applies security fix to prevent path traversal via symlinks in file read/edit tools.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28180)
*   **Prevent Silent Scope Expansion on Task Failure (#28172):** Ensures the agent asks for permission before expanding scope if the initial approach fails.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28172)
*   **Prevent Silent Scope Expansion When Initial Approach Fails (#28171):** Complementary fix to #28172, targeting strategic switching without user approval.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28171)
*   **Require Approved Bot Patch Artifacts (#28178):** Enhances safety by requiring explicit approval markers before publishing bot-generated patches.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28178)
*   **Remove Sensitive Env Vars from Always Allowed List (#28179):** Fixes sanitization bypass for `ISSUE_BODY` and `ISSUE_TITLE` in CI modes.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28179)
*   **Require Confirmation for Shell Parameter Expansion (#28175):** Downgrades allowlisted commands with parameter expansion to confirmation mode, preventing accidental execution.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28175)
*   **Add Eval Coverage Report Command (#28169):** New CLI command to cross-reference eval inventory with the tool registry for testing transparency.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28169)
*   **Implement Egress Cloud Run Service (#28167):** Automated caretaker service to handle GitHub operations via Cloud Pub/Sub.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28167)
*   **Sniff MCP Image MIME Types (#27878):** Fixes HTTP 400 errors from Figma MCP by correctly identifying WebP images instead of defaulting to PNG.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/27878)

### 5. Feature Request Trends
*   **AST-Aware Codebase Navigation:** Multiple issues (#22745, #22746) highlight demand for Abstract Syntax Tree-aware file reads and searches to reduce token noise and improve precision in codebase investigation.
*   **Enhanced Auto Memory Reliability:** Users are requesting robust handling of low-signal sessions and deterministic redaction to prevent infinite loops and security leaks in the memory system (#26522, #26525).
*   **Subagent Visibility & Control:** Requests for better visibility into subagent trajectories via `/chat share` (#22598) and stricter enforcement of subagent permissions/settings (#22267).
*   **Resilient Browser Automation:** Demand for automatic session takeover and lock recovery in the browser agent to handle persistent sessions more gracefully (#22232).

### 6. Developer Pain Points
*   **Silent Scope Expansion:** A recurring frustration where the agent performs actions outside user-defined boundaries (reading full files, running scripts) without explicit confirmation, leading to unexpected side effects.
*   **State Management Bugs:** Frequent reports of agents getting stuck (shell commands waiting for input, rewind failures) or losing state (subagents reporting false success), disrupting workflow continuity.
*   **Security Sanitization Gaps:** Developers are concerned about edge cases in environment variable sanitization and path resolution, particularly in CI/CD contexts and when handling sensitive data in memory logs.
*   **Configuration Ignorance:** Users experience friction when their `settings.json` overrides (e.g., for browser agents or skills) are silently ignored by the underlying agent logic.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-28

### 1. Today's Highlights
The Copilot CLI community is currently grappling with significant stability regressions in recent releases (v1.0.65/v1.0.66), particularly concerning Windows compatibility and terminal rendering glitches. Key discussions focus on broken authentication flows on Ubuntu, persistent visual artifacts in the TUI, and critical failures in launching MCP servers on Windows.

### 2. Releases
**No new releases** were published in the last 24 hours. The community is actively troubleshooting issues associated with the recent v1.0.65 and v1.0.66 updates.

### 3. Hot Issues
*   **[#2165] Ubuntu keychain support is broken** (20 👍)
    *   *Why it matters:* Documentation inaccuracies and missing dependencies (`secret-tool`) are blocking authentication for Linux users.
    *   *Reaction:* High engagement due to widespread impact on Ubuntu setups.
    *   [Link](https://github.com/github/copilot-cli/issues/2165)
*   **[#1799] How to turn off alt-screen views?** (7 👍)
    *   *Why it matters:* Users report instability with the new "alt-screen" terminal mode, seeking a fallback to the original rendering engine.
    *   *Reaction:* Community frustration with UI regression; active discussion on workarounds.
    *   [Link](https://github.com/github/copilot-cli/issues/1799)
*   **[#3949] Copy, Windows 11, does not work**
    *   *Why it matters:* Clipboard functionality is silently failing on Windows 11, with the CLI incorrectly reporting success.
    *   *Reaction:* Users demand better error logging and verification before confirming actions.
    *   [Link](https://github.com/github/copilot-cli/issues/3949)
*   **[#3964] Copying soft-wrapped output still drops space at wrap boundary**
    *   *Why it matters:* An incomplete fix from v1.0.49 persists, causing copied text to lose spacing, corrupting code snippets.
    *   *Reaction:* Identified as a regression of a previously closed issue.
    *   [Link](https://github.com/github/copilot-cli/issues/3964)
*   **[#3958] Windows: v1.0.66 fails to start stdio MCP servers with .bat/.cmd args**
    *   *Why it matters:* Critical regression preventing MCP server integration on Windows when arguments are passed to batch files.
    *   *Reaction:* Immediate triage required for plugin developers.
    *   [Link](https://github.com/github/copilot-cli/issues/3958)
*   **[#3959] Visual artifacts / "ghost" characters remain rendered in TUI**
    *   *Why it matters:* Terminal redraw logic fails after deletion, leaving visual noise that confuses users.
    *   *Reaction:* Reported as a fresh bug affecting UX clarity.
    *   [Link](https://github.com/github/copilot-cli/issues/3959)
*   **[#3960] Custom model provider still consuming AI quota**
    *   *Why it matters:* Security/cost concern where custom providers inadvertently drain the primary GitHub Copilot quota.
    *   *Reaction:* Urgent fix needed for enterprise/custom deployment scenarios.
    *   [Link](https://github.com/github/copilot-cli/issues/3960)
*   **[#3962] latest copilot (1.0.65) not working**
    *   *Why it matters:* General startup failure or confusion regarding missing instructions file in the latest build.
    *   *Reaction:* Users seeking clarification on initialization steps.
    *   [Link](https://github.com/github/copilot-cli/issues/3962)
*   **[#3815] Debug logs saved to location is missing a `\`**
    *   *Why it matters:* Path formatting error on Windows prevents copying log locations directly into Explorer.
    *   *Reaction:* Minor but annoying friction point for debugging.
    *   [Link](https://github.com/github/copilot-cli/issues/3815)
*   **[#3957] Unable to scroll through history using trackpad on MBP**
    *   *Why it matters:* Gesture conflicts prevent navigation through long conversation histories on macOS.
    *   *Reaction:* Usability issue for Mac developers.
    *   [Link](https://github.com/github/copilot-cli/issues/3957)

### 4. Key PR Progress
*   **[PR #3928] Add .gitignore and settings configuration**
    *   *Status:* Open
    *   *Description:* Adds standard repository exclusion files and configuration templates to streamline project setup.
    *   [Link](https://github.com/github/copilot-cli/pull/3928)
*   **[PR #570] [WIP] Add macOS installation instructions to README.md**
    *   *Status:* Closed
    *   *Description:* Attempted update to installation docs via Copilot coding agent; closed likely due to duplication or workflow issues.
    *   [Link](https://github.com/github/copilot-cli/pull/570)
*   **[PR #3737] Jigg empire ai**
    *   *Status:* Open
    *   *Description:* Experimental or unrelated contribution ("Let’s try this new method"); likely spam or test PR.
    *   [Link](https://github.com/github/copilot-cli/pull/3737)

*(Note: Only 3 PRs were updated in the last 24h. No other significant PRs are listed in the provided data.)*

### 5. Feature Request Trends
*   **Session Management & Context Control:** Users are requesting granular control over session retention, expiration visibility, and context memory management (e.g., `/btw` style queries from competitors).
*   **Customization & Accessibility:** Strong demand for customizable keyboard shortcuts (specifically for voice dictation) and the ability to disable specific UI modes like "alt-screen."
*   **Competitor Parity:** Explicit requests for features present in competing agents (Claude Code) to maintain workflow continuity.

### 6. Developer Pain Points
*   **Platform-Specific Regressions:** Significant instability on **Windows** (clipboard, MCP server launching, path separators) and **Linux** (Ubuntu keychain auth).
*   **Terminal Rendering Glitches:** Persistent issues with the TUI, including ghost characters, alt-screen instability, and trackpad gesture conflicts on macOS.
*   **Documentation vs. Reality:** Discrepancies between official troubleshooting guides and actual system requirements (e.g., missing `secret-tool` on Ubuntu).
*   **Quota Management:** Confusion and risk regarding how custom model providers interact with the primary GitHub Copilot AI quota.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-06-28

## 1. Today's Highlights
OpenCode continues to refine its cross-platform stability, with significant focus on resolving WSL path handling issues and improving the TUI experience on Windows and macOS. The community is actively addressing complex model integration challenges, particularly regarding provider-specific schema errors and memory leaks in long-running server instances. Concurrently, core infrastructure improvements include the generation of complete protocol clients and enhanced session management features like undo/redo and renaming.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **[FEATURE] Provide llms.txt and docs as markdown** (#8816)
    *   *Why it matters:* Standardizes programmatic access to documentation, crucial for LLM-based agents and external tools.
    *   *Reaction:* High engagement with 34 👍 and 15 comments.
    *   [View Issue](https://github.com/anomalyco/opencode/issues/8816)

*   **[FEATURE] Pay Go with crypto** (#23153)
    *   *Why it matters:* Expands payment flexibility for users preferring decentralized currency options.
    *   *Reaction:* 24 👍 and 13 comments indicate strong interest in alternative billing methods.
    *   [View Issue](https://github.com/anomalyco/opencode/issues/23153)

*   **Desktop App sends UNC paths to WSL-hosted server, breaking all bash tool calls** (#19473)
    *   *Why it matters:* Critical bug affecting Windows users running OpenCode server in WSL2, causing complete tool failure.
    *   *Reaction:* 7 comments; workaround provided but root cause remains open.
    *   [View Issue](https://github.com/anomalyco/opencode/issues/19473)

*   **Server mode: long-running opencode serve accumulates anonymous JS heap/swap** (#33213)
    *   *Why it matters:* Identifies a severe memory leak in production server deployments, peaking at 26.8GiB usage.
    *   *Reaction:* 5 comments; highlights stability concerns for enterprise/self-hosted users.
    *   [View Issue](https://github.com/anomalyco/opencode/issues/33213)

*   **Bun 1.3.14 segfault (SIGILL) on Linux x86_64** (#33890)
    *   *Why it matters:* Crash on AMD Zen4 CPUs with AVX-512 support affects a significant portion of high-performance computing users.
    *   *Reaction:* 6 comments, 5 👍; urgent stability fix required.
    *   [View Issue](https://github.com/anomalyco/opencode/issues/33890)

*   **Model selection silently reverts after answering a question** (#34207)
    *   *Why it matters:* UX bug where user intent (model choice) is lost during agent interaction loops.
    *   *Reaction:* 4 comments; reported against upstream dev build.
    *   [View Issue](https://github.com/anomalyco/opencode/issues/34207)

*   **GLM-5.1 prompt cache randomly drops to 0** (#31348)
    *   *Why it matters:* Causes unpredictable cost spikes due to failed caching, unlike stable competitors like DeepSeek.
    *   *Reaction:* 4 comments, 2 👍; impacts economic efficiency of usage.
    *   [View Issue](https://github.com/anomalyco/opencode/issues/31348)

*   **Windows ARM64 native: OpenTUI fails to initialize with bun:ffi dlopen TinyCC error** (#19130)
    *   *Why it matters:* Blocks TUI functionality on emerging Windows ARM hardware, limiting ecosystem reach.
    *   *Reaction:* 6 comments, 5 👍; specific to native binary execution.
    *   [View Issue](https://github.com/anomalyco/opencode/issues/19130)

*   **macOS kernel NFS messages leak into TUI and corrupt display** (#34146)
    *   *Why it matters:* Visual corruption in TUI when using specific macOS file sharing setups (OrbStack/NFS).
    *   *Reaction:* 3 comments; niche but disruptive environment issue.
    *   [View Issue](https://github.com/anomalyco/opencode/issues/34146)

*   **Subagent fallback chain prepends incorrect opencode/ prefix** (#34043) [CLOSED]
    *   *Why it matters:* Caused infinite retry loops when models returned 429 errors, wasting resources.
    *   *Reaction:* 2 comments; resolved in recent update.
    *   [View Issue](https://github.com/anomalyco/opencode/issues/34043)

## 4. Key PR Progress
*   **feat(client): generate complete protocol client** (#34164) [CLOSED]
    *   Generates Promise and Effect clients from the authoritative Server `HttpApi`, ensuring stable public endpoints for SDK consumers.
    *   [View PR](https://github.com/anomalyco/opencode/pull/34164)

*   **fix(console): account for partial Zen refunds** (#34227)
    *   Corrects Stripe webhook handling to deduct actual refunded amounts and prevents double-deduction on retries.
    *   [View PR](https://github.com/anomalyco/opencode/pull/34227)

*   **feat(app): v2 wsl ui** (#34233)
    *   Introduces a new WSL UI component with loading states and improved visual feedback for WSL connections.
    *   [View PR](https://github.com/anomalyco/opencode/pull/34233)

*   **fix: preserve attachment file paths** (#34234)
    *   Ensures agents can access pasted/dragged files via their original filesystem paths rather than just embedded data.
    *   [View PR](https://github.com/anomalyco/opencode/pull/34234)

*   **fix(tui): prevent piped stdin from breaking UI** (#34242)
    *   Resolves multiple issues (#28538, #24195, etc.) where piping input to the TUI corrupted keyboard state or UI rendering.
    *   [View PR](https://github.com/anomalyco/opencode/pull/34242)

*   **feat(tui): add tool_output_expanded_default option** (#34246)
    *   Adds configuration to control whether tool outputs are expanded by default in the TUI.
    *   [View PR](https://github.com/anomalyco/opencode/pull/34246)

*   **fix(app): resolve sandbox project edits** (#34253)
    *   Improves project metadata matching and adds regression coverage for sandbox directory editing.
    *   [View PR](https://github.com/anomalyco/opencode/pull/34253)

*   **fix(server): reject foreign directory hints before instance lookup** (#34256)
    *   Addresses security/stability issues where incorrect directory hints could break instance resolution.
    *   [View PR](https://github.com/anomalyco/opencode/pull/34256)

*   **feat(tools): port MiMo tools and subsystems to opencode** (#34270)
    *   Integrates new tools (multiedit, notebook_edit, codesearch) and DB-free subsystems (memory, history) using BM25 indexing.
    *   [View PR](https://github.com/anomalyco/opencode/pull/34270)

*   **fix(sdk): preserve V2Event name for SSE streams** (#34171) [CLOSED]
    *   Patches `effect` library to ensure correct OpenAPI identifiers for SSE streams, fixing SDK regeneration issues.
    *   [View PR](https://github.com/anomalyco/opencode/pull/34171)

## 5. Feature Request Trends
*   **Enhanced Session Management:** Users are requesting robust session lifecycle controls, including renaming (#34264), undo/redo/revert capabilities (#34263), and better historical browsing in IDE extensions (#34232).
*   **Payment Flexibility:** There is a notable push for alternative payment methods, specifically cryptocurrency support for pay-as-you-go models (#23153).
*   **Documentation Accessibility:** Developers are seeking standardized ways to ingest project documentation into LLM contexts, such as `llms.txt` support (#8816).
*   **Cross-Platform Path Normalization:** Significant demand for fixing path translation issues between Windows Desktop, WSL servers, and macOS NFS shares (#19473, #30895, #34146).

## 6. Developer Pain Points
*   **Memory Leaks & Stability:** Recurring reports of `MaxListenersExceededWarning` (#22422, #28492) and massive heap growth in server mode (#33213) indicate underlying resource management issues in long-running processes.
*   **Model Provider Inconsistencies:** Users face varied challenges with different providers, including silent model reverts (#34207), schema errors with Google Gemini (#34130), and caching failures with GLM-5.1 (#31348).
*   **Platform-Specific Crashes:** Segfaults on specific CPU architectures (AMD Zen4/AVX-512) (#33890) and FFI initialization failures on Windows ARM64 (#19130) highlight fragmentation in the runtime environment.
*   **WSL Integration Friction:** Despite recent fixes, path handling between Windows hosts and WSL backends remains a persistent source of bugs (#19473, #30895).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-06-28

### 1. Today's Highlights
The Pi mono repository saw significant activity in extension API stability and error handling visibility, with key merges addressing silent failures in session initialization and provider HTTP errors. Developers are actively refining the TUI experience, particularly around streaming behavior and external editor configurations, while upstream provider bugs regarding tool call streaming remain a focal point for debugging.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **[Bug] Streaming markdown forces scroll to bottom (#5825)**
    *   *Why it matters:* Disrupts readability during long agent responses; specifically triggered by `clear on shrink` settings.
    *   *Reaction:* 34 comments indicate strong user frustration with the auto-scroll behavior.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5825)
*   **[Bug] Providers swallow HTTP error bodies (#5763)**
    *   *Why it matters:* Masks critical diagnostic information (e.g., 403s) behind opaque SDK errors like `Unknown: UnknownError`.
    *   *Reaction:* 5 comments; high priority for debugging proxy/gateway issues.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5763)
*   **[Bug] Full screen redraw flicker with multiple tool calls (#6131)**
    *   *Why it matters:* Causes visual instability in the TUI when models execute parallel tools.
    *   *Reaction:* Reported by `china-nyx`; affects UX smoothness.
    *   [View Issue](https://github.com/earendil-works/pi/issues/6131)
*   **[Bug] renderCall/renderResult silently ignore exceptions (#6130)**
    *   *Why it matters:* Silent failures make debugging extension logic extremely difficult, wasting developer time.
    *   *Reaction:* Highlighted by `ngkz` as a major productivity blocker.
    *   [View Issue](https://github.com/earendil-works/pi/issues/6130)
*   **[Bug] User messages get incorrectly escaped (#6105)**
    *   *Why it matters:* Basic input corruption (e.g., `"` becoming `""`) affects core conversation integrity.
    *   *Reaction:* Confirmed reproducible even with extensions disabled.
    *   [View Issue](https://github.com/earendil-works/pi/issues/6105)
*   **[Bug] Devnagri breaking the Pi harness (#6124)**
    *   *Why it matters:* Unicode handling in the TUI is fragile, causing UI crashes with non-Latin scripts.
    *   *Reaction:* Visual regression reported by `sagarsrc`.
    *   [View Issue](https://github.com/earendil-works/pi/issues/6124)
*   **[Bug] Azure Open AI 5.2-chat-latest doesn't exist (#6114)**
    *   *Why it matters:* Configuration mismatch between Pi's internal model registry and actual Azure endpoints.
    *   *Reaction:* Blocked workflows for Azure users.
    *   [View Issue](https://github.com/earendil-works/pi/issues/6114)
*   **[Bug] pi install fails silently on permission denied (#6112)**
    *   *Why it matters:* Users are misled into believing installations succeeded when they fail due to read-only `settings.json`.
    *   *Reaction:* Reported by `jiangge`; highlights poor error propagation.
    *   [View Issue](https://github.com/earendil-works/pi/issues/6112)
*   **[Bug] OpenCode Go streaming ignores thinking disabled (#6116)**
    *   *Why it matters:* External provider (`opencode-go`) bug causes unwanted reasoning tokens to leak into streams.
    *   *Reaction:* Identified as a gateway-level issue, not a Pi core bug.
    *   [View Issue](https://github.com/earendil-works/pi/issues/6116)
*   **[Bug] Public createAgentSession import path instability (#6117)**
    *   *Why it matters:* Breaks deterministic integration tests for downstream SDK consumers.
    *   *Reaction:* Critical for library maintainers using the public API.
    *   [View Issue](https://github.com/earendil-works/pi/issues/6117)

### 4. Key PR Progress
*   **[Fix] Defer extension reload requests safely (#5735)**
    *   *Summary:* Ensures `ctx.reload()` is safe to use across all extension contexts, preventing race conditions during hot-reloads.
    *   [View PR](https://github.com/earendil-works/pi/pull/5735)
*   **[Feat] Add excludeFromContext for custom messages (#5678)**
    *   *Summary:* Allows custom messages to be persisted/rendered without entering the LLM context window, improving efficiency for non-conversational UI elements.
    *   [View PR](https://github.com/earendil-works/pi/pull/5678)
*   **[Feat] Add externalEditor setting for Ctrl+G (#6123)**
    *   *Summary:* Replaces reliance on `$VISUAL`/`$EDITOR` env vars with a configurable JSON setting, fixing Windows/Git Bash compatibility issues.
    *   [View PR](https://github.com/earendil-works/pi/pull/6123)
*   **[Feat] Add reportUsage API for extensions (#6119)**
    *   *Summary:* Enables extensions to feed token/cost usage back into the main session footer, solving subagent cost tracking gaps.
    *   [View PR](https://github.com/earendil-works/pi/pull/6119)
*   **[Fix] Surface provider HTTP error body (#5832)**
    *   *Summary:* Directly addresses Issue #5763 by ensuring raw HTTP error bodies are exposed instead of being swallowed by the SDK.
    *   [View PR](https://github.com/earendil-works/pi/pull/5832)
*   **[Feat] Configurable chat padding (#6115)**
    *   *Summary:* Proposal to allow users to adjust TUI padding, responding to frequent requests for denser UI layouts.
    *   [View PR](https://github.com/earendil-works/pi/pull/6115)
*   **[Fix] Rename Azure model key to gpt-5.2-chat (#6099)**
    *   *Summary:* Corrects the model identifier to match actual Azure OpenAI availability, resolving lookup failures.
    *   [View PR](https://github.com/earendil-works/pi/pull/6099)
*   **[Fix] Report settings write failures in install (#6111)**
    *   *Summary:* Ensures `pi install` returns an error and exits non-zero when it cannot persist changes to `settings.json`.
    *   [View PR](https://github.com/earendil-works/pi/pull/6111)

### 5. Feature Request Trends
*   **Enhanced Extension Visibility & Control:** Strong demand for extensions to report usage/costs (`reportUsage`) and manage their own reload cycles safely.
*   **UI Customization:** Users are requesting granular control over TUI aesthetics, including padding adjustments and external editor configuration overrides.
*   **Robust Error Handling:** A consistent trend of asking for more transparent error reporting, both for CLI operations (install failures) and LLM interactions (HTTP error bodies).

### 6. Developer Pain Points
*   **Silent Failures:** Multiple reports highlight that the system often succeeds silently when it should fail (e.g., install permissions, rendering exceptions), making debugging arduous.
*   **TUI Stability under Load:** Streaming behaviors, particularly with parallel tool calls or complex markdown, cause flickering and unwanted auto-scrolls, degrading the user experience.
*   **Environment Variable Reliability:** Relying on `$EDITOR` or `$VISUAL` is problematic across different OS configurations (especially Windows), necessitating explicit JSON configuration options.
*   **Provider Inconsistency:** Differences in how various providers (Bedrock, OpenAI, Azure) handle errors and model keys create fragmentation in the user experience.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-06-28

## 1. Today's Highlights
The Qwen Code team released nightly build `v0.19.2-nightly.20260628.714513df2`, primarily addressing JSON fallback issues in web fetching. Community attention is heavily focused on improving the `/loop` command's durability via persistent task files, enhancing Anthropic provider performance through cache optimization, and refining session management for cross-device synchronization.

## 2. Releases
*   **v0.19.2-nightly.20260628.714513df2**: A nightly build featuring core fixes, specifically allowing `web_fetch` to handle JSON fallbacks gracefully. This update aims to stabilize network interaction reliability within agent workflows.

## 3. Hot Issues
1.  **[Loop] Durable Task Management**: [#5889](https://github.com/QwenLM/qwen-code/issues/5889) & [#5823](https://github.com/QwenLM/qwen-code/issues/5823) highlight critical usability gaps in long-running loops. Users demand a persistent `.qwen/loop.md` file to maintain task state across ticks and prevent silent, invisible cron fires.
2.  **Anthropic Cache Inefficiency**: [#5942](https://github.com/QwenLM/qwen-code/issues/5942) reports significant cost inflation due to avoidable prompt-cache misses in Anthropic integrations, contrasting negatively with competitor implementations like Claude Code.
3.  **Cross-Device Session Sync**: [#5836](https://github.com/QwenLM/qwen-code/issues/5836) addresses the limitation of local-only todo persistence. Developers are requesting project-local storage for todos/plans to enable Git-based syncing across multiple machines.
4.  **Token Cap Truncation Loops**: [#5756](https://github.com/QwenLM/qwen-code/issues/5756) details how the default 8K output cap causes infinite retry loops for large file writes, severely impacting productivity for complex coding tasks.
5.  **Model Switching Bugs**: [#5819](https://github.com/QwenLM/qwen-code/issues/5819) reports unexpected model upgrades to higher-cost options post-update, alongside translation inconsistencies (Simplified to Traditional Chinese), causing user frustration and token waste.
6.  **Chrome Extension Architecture**: [#5626](https://github.com/QwenLM/qwen-code/issues/5626) & [#5936](https://github.com/QwenLM/qwen-code/issues/5936) track the strategic direction of reviving the Chrome extension via a Daemon + WebUI architecture, comparing it against Claude’s model.
7.  **History Persistence Errors**: [#5920](https://github.com/QwenLM/qwen-code/issues/5920) identifies a bug where `/rewind` records lose parent UUIDs, breaking conversation history continuity upon session resume.
8.  **Windows CPU Leaks**: [#5922](https://github.com/QwenLM/qwen-code/issues/5922) flags high CPU usage by `cua-driver.exe` on Windows even when idle, suggesting resource management issues in the computer-use tools.
9.  **Telegram Bot Parity**: [#5907](https://github.com/QwenLM/qwen-code/issues/5907) serves as a tracking issue for aligning Telegram bot commands with the main UI, ensuring consistent remote chat experiences.
10. **UI Rendering Glitches**: [#5941](https://github.com/QwenLM/qwen-code/issues/5941) & [#5894](https://github.com/QwenLM/qwen-code/issues/5894) report scrolling anomalies during generation and persistent attachment of edit tool summaries, affecting UI stability.

## 4. Key PR Progress
1.  **Loop Task Injection**: [#5890](https://github.com/QwenLM/qwen-code/pull/5890) implements the injection of a `.qwen/loop.md` file at fire time, allowing long-running loops to read durable, user-editable task lists.
2.  **Anthropic Abort Leak Fix**: [#5946](https://github.com/QwenLM/qwen-code/pull/5946) isolates the Anthropic SDK abort listener leak by using per-request child controllers, improving stability for streaming and non-streaming requests.
3.  **Mobile Responsive TodoPanel**: [#5948](https://github.com/QwenLM/qwen-code/pull/5948) adds responsive design to the TodoPanel, switching between full text and compact fractions on mobile viewports.
4.  **Voice Button Visibility Control**: [#5947](https://github.com/QwenLM/qwen-code/pull/5947) exposes the voice dictation button in the ComposerToolbarAction, allowing external consumers to toggle its visibility.
5.  **Configurable Auto-Compact Threshold**: [#5868](https://github.com/QwenLM/qwen-code/pull/5868) introduces a configurable auto-compact threshold and Stop hook, giving users finer control over context window management.
6.  **QQ Bot Streaming Improvements**: [#5902](https://github.com/QwenLM/qwen-code/pull/5902) refactors QQ Bot streaming with idle flushes, removes character limits, and fixes markdown table detection.
7.  **Shell Parsing Refactor**: [#2652](https://github.com/QwenLM/qwen-code/pull/2652) replaces fragile string-based shell command parsing with a robust tree-sitter AST approach.
8.  **Collapsed Session Preview**: [#5848](https://github.com/QwenLM/qwen-code/pull/5848) adds a setting to show the last N turns when resuming collapsed sessions, improving context visibility.
9.  **Multiplayer Channel Agent**: [#5888](https://github.com/QwenLM/qwen-code/pull/5888) introduces the "qwen tag" feature, enabling a channel-resident multiplayer agent within DingTalk groups.
10. **Subagent Crash Enrichment**: [#5795](https://github.com/QwenLM/qwen-code/pull/5795) enhances subagent crash notifications by including partial results and recent activities for better debugging.

## 5. Feature Request Trends
*   **Persistent State & Sync**: Strong demand for storing todos, plans, and memories locally within the project directory (`.qwen/`) to enable Git sync and cross-device collaboration.
*   **Advanced Loop/Cron Controls**: Users want more granular control over automated tasks, including durable task files, visibility controls, and manual interruption capabilities.
*   **Cost Optimization**: Significant interest in reducing token costs, particularly through better prompt caching (Anthropic), avoiding unnecessary model switches, and optimizing output caps.
*   **Platform Expansion**: Continued efforts to integrate Qwen Code into broader ecosystems via Chrome extensions, Telegram bots, and DingTalk channels.

## 6. Developer Pain Points
*   **Unpredictable Token Costs**: Issues with automatic model upgrades to expensive tiers and inefficient caching leading to unexpected billing spikes.
*   **UI/UX Instability**: Recurring bugs involving scroll jumps, truncated outputs causing retry loops, and persistent UI artifacts (like edit summaries) cluttering the chat.
*   **Resource Leaks**: High CPU usage from background drivers (especially on Windows) and memory leaks in SDK listeners.
*   **Context Management**: Difficulty in managing long conversations and large file operations due to rigid token caps and lack of persistent state for automated agents.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-06-28
**Source:** github.com/Hmbown/DeepSeek-TUI (CodeWhale)

### 1. Today's Highlights
The CodeWhale project has released significant infrastructure updates, including a new lightweight plugin system (PRs #3692, #3708) and critical improvements to the Agent Client Protocol (ACP) for better streaming and cancellation support (PRs #3702, #3698). Concurrently, the team is aggressively addressing high token consumption and low cache hit rates through "cache-maximal" context modes and prompt slimming efforts, aiming to bring efficiency in line with competitors like Codex CLI.

### 2. Releases
*   **No new releases in the last 24 hours.**
*   However, PR #3707 documents the **v0.8.66 Release Ledger**, confirming that token/cache optimization, ACP registry submission, and shell-only benchmark hardening are gated for this upcoming release.

### 3. Hot Issues
These issues reflect the highest community engagement and technical friction points.

1.  **[Bug] Low Input Cache Hit Rate (#1177)**
    *   **Why it matters:** Users report cache hit rates significantly lower than competitors (e.g., DeepSeek-Reasonix at 95%+), leading to unnecessary costs and latency.
    *   **Reaction:** High comment count (24); urgent requests for improvement.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/1177)

2.  **[Bug] Cache Hit Problems Persist (#1120)**
    *   **Why it matters:** Confirms that previous fixes in v0.8.17 did not resolve the underlying caching logic for modified projects.
    *   **Reaction:** Developers seeking root causes for false positives in cache misses.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/1120)

3.  **[Bug] Excessive Token Consumption (#743)**
    *   **Why it matters:** Reports of 400M+ tokens consumed in half a day, indicating severe inefficiency in interaction payloads.
    *   **Reaction:** Users demanding optimization of dialogue information exchange.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/743)

4.  **[Enhancement] Register with AgentClientProtocol Registry (#3192)**
    *   **Why it matters:** Critical for integration with editors like Zed; simplifies installation and usage via standard protocols.
    *   **Reaction:** Positive reception from users wanting smoother IDE integration.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3192)

5.  **[Bug] Overly Involved Code Modifications (#3275)**
    *   **Why it matters:** A regression where the agent enters self-questioning loops and deviates from user intent, performing unwanted work.
    *   **Reaction:** Frustration with agent autonomy overriding user control.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3275)

6.  **[Bug] Plan/Agent Mode Mixing (#3568)**
    *   **Why it matters:** The AI fails to perceive mode switches, applying agent-style file modifications in plan mode, causing confusion and errors.
    *   **Reaction:** Users reporting consistent failures in mode isolation.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3568)

7.  **[Enhancement] Fleet Model Classes & Auto Loadout (#3205)**
    *   **Why it matters:** Defines the architecture for multi-model selection and automatic compute loadout resolution, crucial for scalable agent workflows.
    *   **Reaction:** Technical discussion on how fleet workers should select models.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3205)

8.  **[Epic] Staged Command-Boundary Refactor (#2870)**
    *   **Why it matters:** A major architectural cleanup to improve code maintainability and separation of concerns in command handling.
    *   **Reaction:** Active tracking of mergeable layers by contributors.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/2870)

9.  **[Enhancement] Multi-Model Compatibility & Provider Docs (#2300)**
    *   **Why it matters:** Clarifies differences between providers (e.g., vLLM vs. OpenAI) and ensures correct routing for local endpoints.
    *   **Reaction:** Users seeking clearer documentation on provider configuration.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/2300)

10. **[Bug] Slow Document Saving (#1732)**
    *   **Why it matters:** Merging analysis reports is slow with low cache hits, impacting productivity during heavy documentation tasks.
    *   **Reaction:** Users questioning if this latency is expected behavior.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/1732)

### 4. Key PR Progress
Significant merges focusing on plugin architecture, ACP compliance, and token efficiency.

1.  **Feat: Plugin System Infrastructure (#3708)**
    *   Adds manifest parsing, discovery, and registry for built-in and user plugins. Includes a Rust toolkit example.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3708)

2.  **Feat: ACP Streaming & Session Deltas (#3702)**
    *   Enables incremental rendering in editors like Zed by streaming session/prompt updates instead of buffering whole turns.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3702)

3.  **Feat: Cache-Maximal Context Mode (#3697)**
    *   Implements re-reading active file contents instead of summarizing, leveraging cheaper DeepSeek V4 caching to preserve exact source context.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3697)

4.  **Fix: Tool Error Fallback Hints (#3701, #3703, #3705)**
    *   Addresses agent retry loops on transient failures by providing structured fallback hints (e.g., suggesting direct URLs after search failures).
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3701)
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3703)
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3705)

5.  **Feat: Override Base Prompt from Config (#3696)**
    *   Allows users to swap the system prompt via config directory files, enabling non-software use cases (e.g., creative writing) without rebuilding the binary.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3696)

6.  **Feat: ACP Cancel In-Flight Sessions (#3698)**
    *   Fixes serial processing bug where `session/cancel` could not interrupt ongoing provider calls, improving responsiveness.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3698)

7.  **Chore: Reactivate Stale Issue Cleanup (#3607)**
    *   Implements automated labeling and closing policies for stale issues to reduce backlog noise.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3607)

8.  **Fix: Verifier Hunt Verdict Mapping (#3700, #3694)**
    *   Aligns verifier outputs with "hunted/wounded/escaped" status labels for better goal tracking in agent runs.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3700)
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3694)

9.  **Docs: v0.8.66 Release Ledger (#3707)**
    *   Documents the release candidates, ACP status, and token/cache scorecards for the upcoming patch release.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3707)

10. **Fix: CI Required Checks for Light PRs (#3704)**
    *   Optimizes CI pipeline by keeping lint/test checks present but conditional on file changes, speeding up doc-only PR reviews.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3704)

### 5. Feature Request Trends
*   **Non-Software Use Cases:** Strong demand for repurposing the TUI for literary creation, document review, and background reading by allowing customizable system prompts (#3638, #3696).
*   **Editor Integration:** Push for standard compliance via AgentClientProtocol (ACP) to facilitate seamless integration with Zed and other modern editors (#3192).
*   **Performance Optimization:** Continuous requests for reduced token usage and improved cache hit rates, specifically comparing performance against Codex CLI (#743, #2953, #2956).
*   **Native Runtime:** Interest in a Rust-based native desktop client to reduce cold-start latency and memory footprint compared to the Node.js/TUI hybrid (#3541).

### 6. Developer Pain Points
*   **Token Bloat & Efficiency:** The most frequent complaint is excessive token consumption due to large base prompts, repeated transcript inputs, and inefficient context window usage (#743, #2953, #2956).
*   **Cache Hit Instability:** Users experience inconsistent cache hit rates, particularly when modifying existing projects, leading to unpredictable costs and speeds (#1177, #1120, #1732).
*   **Agent Autonomy vs. Control:** Agents frequently overstep boundaries, entering self-reflective loops or ignoring mode distinctions (Plan vs. Agent), causing unintended file modifications (#3275, #3568).
*   **Tool Failure Loops:** When external tools (search/APIs) fail, the agent tends to retry the same action without degradation strategies, stalling progress (#1641).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*