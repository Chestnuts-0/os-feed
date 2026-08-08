# AI CLI Tools Community Digest 2026-08-08

> Generated: 2026-08-08 00:52 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Ecosystem
**Date:** 2026-08-08

## 1. Ecosystem Overview
The AI CLI toolchain in August 2026 is maturing from experimental agents into enterprise-grade workflows, characterized by a shift toward self-hosting, robust sandboxing, and persistent session management. Community velocity remains high, with major players like Anthropic and OpenAI shipping incremental reliability patches while smaller competitors like Pi and OpenCode aggressively pursue feature parity in memory systems and plugin extensibility. The landscape is increasingly fragmented by platform-specific stability issues (particularly on Windows and Linux virtualization), suggesting that cross-platform abstraction layers are becoming the critical differentiator for developer adoption.

## 2. Activity Comparison

| Tool | Issues (Hot/Total) | PRs (Last 24h) | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 Hot | 3 | **v2.1.224** (Self-hosted runners) |
| **OpenAI Codex** | 10 Hot | 10 | **v0.147.0** (Stable) + Alpha series |
| **Gemini CLI** | 10 Hot | 10 | **v0.56.0-nightly** / **v0.55.0-preview.2** |
| **GitHub Copilot** | 10 Hot | 0 | **v1.0.79-9** (Enterprise sandbox focus) |
| **Kimi Code** | 3 Hot | 2 | None (Stable) |
| **OpenCode** | 10 Hot | 10 | **v1.18.15** (Chronology fixes) |
| **Pi** | 10 Hot | 10 | **v0.84.1** (Qwen/Corp integration) |
| **Qwen Code** | 10 Hot | 10 | **v0.21.7-nightly** (Reasoning effort) |
| **DeepSeek TUI** | 10 Hot | 10 | **v0.9.4** (Stabilization phase) |

*Note: "Hot" issues represent the top-engagement items tracked in the digest. DeepSeek TUI source references `Hmbown/CodeWhale`.*

## 3. Shared Feature Directions

*   **Cross-Session Memory & Persistence:**
    *   **Demand:** Users increasingly expect AI assistants to remember context across restarts.
    *   **Tools:** **Kimi Code** (#1283) and **DeepSeek TUI** (#2492) have explicit feature requests for persistent memory. **Pi** (#6879) is addressing compaction failures to support long-running sessions. **Claude Code** (#13354) sees the highest volume demand for continuing sessions beyond hard limits.
*   **Sub-Agent Reliability & Orchestration:**
    *   **Demand:** As agents become multi-step, sub-agent hangs and false successes are the primary pain point.
    *   **Tools:** **Gemini CLI** reports critical hangs in `codebase_investigator` (#21409, #22323). **OpenCode** is building native background subagents (#40923). **DeepSeek TUI** is refining subagent state isolation (#5252) and resume chains (#425).
*   **Plugin/Skill Hierarchical Organization:**
    *   **Demand:** Flat directory structures for skills/plugins are no longer scalable for power users.
    *   **Tools:** **GitHub Copilot** (#1632), **OpenCode** (#38853), and **Claude Code** (#14920) all show community demand for granular control and subfolder support in skill/permission management.
*   **Security & Sandbox Hardening:**
    *   **Demand:** Enterprise adoption requires stricter boundaries and clearer permission models.
    *   **Tools:** **Claude Code** introduced self-hosted runners (#2.1.224) and fixed YAML injection (#84711). **Gemini CLI** patched a critical SSRF vulnerability (CVSS 8.6) and upgraded Node runtime. **GitHub Copilot** enhanced enterprise sandbox policies (#1.0.79-9).

## 4. Differentiation Analysis

*   **Enterprise & Infrastructure Focus:**
    *   **Claude Code** and **GitHub Copilot** are targeting the enterprise sector. Claude emphasizes self-hosted infrastructure (`claude self-hosted-runner`) and strict permission scopes. Copilot focuses on policy enforcement (`allow-auto-only`) and integration with the GitHub ecosystem.
*   **Open Source & Extensibility:**
    *   **OpenCode** and **Pi** differentiate through open extensibility. OpenCode is pushing V2 architecture with native subagents and Mermaid rendering. Pi is bridging ecosystems (e.g., Cursor CLI integration #7792) and supporting diverse providers (Bedrock, LM Studio).
*   **Model-Centric vs. Tool-Centric:**
    *   **Qwen Code** and **DeepSeek TUI** are tightly coupled with their respective model capabilities (Qwen's reasoning effort selector, DeepSeek's fleet configuration). **Gemini CLI** focuses heavily on the generalist agent architecture and evals.
    *   **Kimi Code** is currently differentiating through security incidents (fixing `StrReplaceFile` corruption #2591), positioning itself on data integrity safety.
*   **Platform Specifics:**
    *   **Windows** is a universal pain point. **Codex** faces sandbox/ACL issues (#10090), **Copilot** has clipboard and path normalization bugs (#3622, #1409), and **Claude Code** suffers from KVM livelocks on Linux (#77208). Tools with active Windows-specific PRs (Codex, Copilot) are responding faster, while others lag.

## 5. Community Momentum & Maturity

*   **High Momentum / Rapid Iteration:**
    *   **Gemini CLI:** High issue velocity (P1 sub-agent bugs) indicates a rapidly evolving core where reliability is catching up to feature scope.
    *   **OpenAI Codex:** Active alpha/beta track (v0.148.0-alpha) shows aggressive iteration, though community pain points (Windows, memory leaks) suggest the platform layer is still stabilizing.
*   **Stable but Feature-Heavy:**
    *   **Claude Code:** Mature core (v2.1.x) with enterprise-grade feature additions. Community focus is on refining edge cases (plugins, session limits) rather than foundational bugs.
    *   **GitHub Copilot:** Stable releases, but community frustration with recent regressions (session resume, skill paths) suggests the user base is becoming more sensitive to breaking changes.
*   **Emerging / Niche Momentum:**
    *   **Pi:** Strong momentum in cross-tool compatibility (Cursor bridge, Bedrock support) and addressing deep session lifecycle bugs.
    *   **DeepSeek TUI:** High engagement on structural refactors (runtime ownership, subagent isolation) indicating a community invested in the long-term architecture.

## 6. Trend Signals

*   **The "Session Continuity" Imperative:** The #1 request across **Claude Code**, **Kimi Code**, and **DeepSeek TUI** is persistent state. Developers are moving away from stateless, command-by-command interactions toward long-running "projects" where the AI remembers context. Tools that solve session resume and memory retention first will gain enterprise loyalty.
*   **Sub-Agent Reliability as the New Battleground:** With **Gemini CLI**, **OpenCode**, and **DeepSeek TUI** all highlighting sub-agent hangs or false successes, the industry is recognizing that multi-agent orchestration is currently the weakest link. Robust error handling, timeout management, and "goal success" verification are critical differentiators.
*   **Security-First Sandboxing:** The **Gemini CLI** SSRF fix and **Claude Code** plugin security hardening reflect a broader trend: AI CLIs are becoming attack surfaces. Users and enterprises will prioritize tools with rigorous sandboxing (like **Copilot**'s new policies) over those with loose permissions.
*   **Windows Stability Gap:** Persistent, unaddressed Windows bugs across **Codex**, **Copilot**, and **Claude Code** represent a significant barrier to enterprise adoption in corporate environments. Tools that deliver a stable Windows experience will capture a larger share of the desktop market.
*   **Developer Pain Points:** The shift from "can it code?" to "can it manage large codebases safely?" is evident in the focus on **AST-aware navigation** (**Gemini**), **file corruption prevention** (**Kimi**), and **context compression** (**Pi**, **Claude**). Future developments will likely emphasize precision and safety over raw generation speed.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** anthropics/skills | **As of:** 2026-08-08

## 1. Top Skills Ranking

These PRs represent the most technically complex or broadly applicable skills currently under community review.

| Rank | PR | Skill Title | Functionality | Status |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **Skill Creator Evaluation Fix** | Fixes critical `run_eval.py` bugs causing 0% recall rates in skill optimization loops. Ensures the creator toolchain functions correctly on Windows and parallel workers. | **Open** |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **Document Typography** | Prevents typographic errors in AI-generated docs: orphan lines, widow paragraphs, and numbering misalignment. | **Open** |
| 3 | [#1367](https://github.com/anthropics/skills/pull/1367) | **Self-Audit** | A meta-skill for mechanical file verification and four-dimension reasoning quality gating before delivery. Works across any tech stack. | **Open** |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT (OpenDocument)** | Enables creation, filling, and conversion of `.odt`/`.ods` files, targeting the LibreOffice/open-source workflow niche. | **Open** |
| 5 | [#723](https://github.com/anthropics/skills/pull/723) | **Testing Patterns** | Comprehensive guide covering testing philosophy (AAA pattern), unit testing, and React component testing with Testing Library. | **Open** |
| 6 | [#541](https://github.com/anthropics/skills/pull/541) | **DOCX Tracked Changes Fix** | Fixes document corruption in Word docs when adding tracked changes to files with existing bookmarks (OOXML ID collision). | **Open** |
| 7 | [#1302](https://github.com/anthropics/skills/pull/1302) | **Color Expert** | Provides comprehensive color knowledge (OKLCH, CAM16, ISCC-NBS) for design-adjacent tasks. | **Open** |
| 8 | [#210](https://github.com/anthropics/skills/pull/210) | **Frontend Design** | Improves clarity and actionability for frontend design instructions, ensuring feasibility within single conversation windows. | **Open** |

## 2. Community Demand Trends

Analysis of high-comment issues reveals three dominant demand vectors:

*   **Meta-Tooling & Reliability:** The most significant pain point is the stability of the skill creation pipeline itself. Issue #556 and #1169 highlight that the `run_eval.py` tool is fundamentally broken for many users (0% trigger rates). Users demand a robust feedback loop for creating skills, not just the skills themselves.
*   **Enterprise & Security Governance:** Issue #492 (Trust boundary abuse) and #412 (Agent Governance) indicate that as skills gain power, the community is actively seeking built-in safety patterns, policy enforcement, and trust verification mechanisms.
*   **Context Efficiency:** Issue #1487 (`claude-api` injecting 156k tokens) and #1329 (`compact-memory`) show a strong demand for skills that minimize context window bloat. Users want "lean" skills that don't exhaust resources with eager loading.

## 3. High-Potential Pending Skills

These active PRs address critical gaps and have high likelihood of merging due to community support and technical necessity.

*   **[PR #539](https://github.com/anthropics/skills/pull/539) - YAML Validation:** Adds pre-parse validation for skill descriptions. Prevents silent failures where special characters break YAML parsing. **Impact:** High reliability for the entire ecosystem.
*   **[PR #1261](https://github.com/anthropics/skills/pull/1261) - Isolated Trigger Eval:** Fixes the skill-creator from polluting the user's live project directory during parallel evaluations. **Impact:** Essential for safe, concurrent skill testing.
*   **[PR #1099](https://github.com/anthropics/skills/pull/1099) - Windows Subprocess Fix:** Resolves `WinError 10038` in `run_eval.py`. **Impact:** Unlocks the skill creator for the large Windows user base.
*   **[PR #1479](https://github.com/anthropics/skills/pull/1479) - Plan File Hygiene:** Addresses the accumulation of planning artifacts with no lifecycle management. **Impact:** Improves long-running agent hygiene.

## 4. Skills Ecosystem Insight

The community's most concentrated demand is not for new application-specific skills, but for **toolchain reliability and trust**; users are prioritizing fixes for the skill-creator evaluation loop and security namespaces over new functional additions.

---

# Claude Code Community Digest: 2026-08-08

## 1. Today's Highlights
Anthropics released **v2.1.224**, introducing self-hosted environments via `claude self-hosted-runner` and a new `archive` plugin source for HTTPS-based installations. Community attention is dominated by the massive demand to **continue sessions after limits are reached** (Issue #13354, 191 likes), alongside growing frustration over platform-specific bugs including a macOS/iOS hard crash regression and Linux KVM CPU livelocks.

## 2. Releases
**v2.1.224**
- **Self-hosted runners:** New `claude self-hosted-runner` command allows Team/Enterprise users to run web, mobile, and desktop sessions on own machines or containers.
- **Archive plugins:** Added `archive` plugin source enabling installation from zip over HTTPS without git.
- [View Release](https://github.com/anthropics/claude-code/releases)

## 3. Hot Issues
1. **[FEATURE] Continue when the session limit reached** (#13354)
   - **Why it matters:** The most upvoted open issue (191 👍, 73 comments). Users need continuity past hard limits rather than starting fresh.
   - [Link](https://github.com/anthropics/claude-code/issues/13354)

2. **[Feature Request] Add ability to disable individual Claude plugin skills** (#14920)
   - **Why it matters:** 83 👍. Granular control over plugin tools (e.g., disabling `commit-push-pr` while keeping `:commit`) is a high-priority usability request.
   - [Link](https://github.com/anthropics/claude-code/issues/14920)

3. **[BUG] iOS app 1.260618.0 hard-crashes opening a Remote Control session** (#70165)
   - **Why it matters:** Regression causing main-thread stack overflow in Swift KeyPath metadata. Critical for mobile Remote Control usability.
   - [Link](https://github.com/anthropics/claude-code/issues/70165)

4. **[BUG] Prompt suggestions silently suppressed whenever rate-limit status is `allowed_warning`** (#72495)
   - **Why it matters:** A strict-equality gate in Vxy causes silent UI degradation. Confirmed with reproducible prediction by the author.
   - [Link](https://github.com/anthropics/claude-code/issues/72495)

5. **[BUG] Fable 5: text in a response that also contains tool calls is never displayed** (#81853)
   - **Why it matters:** Rendering bug in `claude-fable-5` where text is hidden if tool calls are present, though data remains in the transcript.
   - [Link](https://github.com/anthropics/claude-code/issues/81853)

6. **[BUG] Remote Control: stale environments cannot be deleted and ghost sessions cause permanent 404 errors** (#77372)
   - **Why it matters:** Infrastructure hygiene issue; new environments return 404s due to ghost session references.
   - [Link](https://github.com/anthropics/claude-code/issues/77372)

7. **[BUG] Claude Code ≥ 2.1.205 livelocks at 100% CPU with no output on KVM guests** (#77208)
   - **Why it matters:** Breaks Linux desktop beta in virtualized environments with generic CPU models. No output even on `--version`.
   - [Link](https://github.com/anthropics/claude-code/issues/77208)

8. **[BUG] WebSearch permission allow rule is ignored** (#84956)
   - **Why it matters:** Security/UX bug where valid bare-tool-name rules are bypassed, causing unwanted permission prompts.
   - [Link](https://github.com/anthropics/claude-code/issues/84956)

9. **[Bug] Bash-tool `grep` shim catastrophic backtracking** (#82179)
   - **Why it matters:** The embedded ugrep emulation can OOM (6.6 GB RSS) on simple patterns, crashing the session.
   - [Link](https://github.com/anthropics/claude-code/issues/82179)

10. **[FEATURE] Let users remove stale/dead Remote Control environments** (#50884)
    - **Why it matters:** 26 👍. Directly complements the stale environment bug (#77372); users want a UI method to clean up orphaned entries.
    - [Link](https://github.com/anthropics/claude-code/issues/50884)

## 4. Key PR Progress
*Note: Only 3 PRs were updated in the last 24h.*

1. **fix(hookify): enforce proper rule evaluation scope and secure file read** (#84747)
   - Fixes a logic bug where `load_rules()` bypassed event filters when `event` is `None`, ensuring unbound tools only trigger `all` scoped rules.
   - [Link](https://github.com/anthropics/claude-code/pull/84747)

2. **fix(security): address yaml injection and symlink credential overwrites in plugin scripts** (#84711)
   - Security hardening for plugin scripts, preventing YAML injection and symlink-based credential theft.
   - [Link](https://github.com/anthropics/claude-code/pull/84711)

3. **docs: fix stale hooks documentation link in bash_command_validator_example.py** (#84854)
   - Updates a single example script to point to the current `code.claude.com/docs` URL instead of the deprecated `docs.anthropic.com` path.
   - [Link](https://github.com/anthropics/claude-code/pull/84854)

## 5. Feature Request Trends
- **Session Continuity & Management:** The #1 requested feature is the ability to extend sessions beyond limits (#13354) and rename/edit session metadata (#51791).
- **Granular Plugin Control:** Users want fine-grained toggles for individual plugin skills (#14920) rather than on/off for entire plugins.
- **Self-Hosting Infrastructure:** The new v2.1.224 release validates the high demand for self-hosted runners and remote environment management (#50884).
- **Cross-Session Communication:** Persistent requests for stable peer-messaging sockets and inbox management (#84945).

## 6. Developer Pain Points
- **Platform Stability Regression:** A cluster of bugs affects specific environments: iOS hard crashes (#70165), Windows streaming ECONNRESET (#84072), and Linux KVM CPU livelocks (#77208).
- **Silent Failures:** Issues like suppressed prompt suggestions (#72495) and background task kills without error (#84625) make debugging difficult.
- **Remote Control Reliability:** Ghost sessions and stale environments causing 404s (#77372) and connector attachment delays (#83694) disrupt distributed workflows.
- **Security/Validation Gaps:** The `grep` shim backtracking (#82179) and hookify permission bypasses (#84747) highlight edge cases in tool emulation and plugin security.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-08

## 1. Today's Highlights
Codex CLI v0.147.0 introduces portable Agent Plugins and persistent conversation sectioning, while a v0.148.0 alpha series advances incremental updates. The community is actively addressing critical Windows sandboxing failures, macOS memory leaks, and a regression in LiteLLM streaming within the latest releases.

## 2. Releases
**rust-v0.147.0** is the latest stable release, featuring:
*   **Portable Agent Plugins:** Users can now install and search across local, personal, workspace, and remote plugin catalogs.
*   **Persistent Conversations:** Improved transcript browsing with manually ordered, persistent sections.

Additionally, **rust-v0.148.0-alpha.1**, **alpha.2**, and **alpha.4** have been released, indicating rapid iteration toward the next minor version.

## 3. Hot Issues
1.  **MCP Zombie Processes & Memory Leak** [#12491](https://github.com/openai/codex/issues/12491)
    *   *Why it matters:* Codex.app GUI leaves 1,300+ zombie processes after MCP tasks, causing a 37GB memory leak. High severity for long-running sessions.
    *   *Community:* 38 comments, 5 upvotes.

2.  **MCP Namespace Flattening for Non-OpenAI Providers** [#26234](https://github.com/openai/codex/issues/26234)
    *   *Why it matters:* Tools from MCP servers are uncallable when using Ollama, LM Studio, OpenRouter, or AWS Bedrock due to proprietary namespace serialization.
    *   *Community:* 32 comments, 41 upvotes (high interest).

3.  **VS Code Diff View Error on Windows** [#35481](https://github.com/openai/codex/issues/35481)
    *   *Why it matters:* The Codex Diff view in VS Code throws an "Oops, an error has occurred" on Windows, blocking code review workflows.
    *   *Community:* 26 comments, 54 upvotes.

4.  **Windows `elevated_windows_sandbox` Failure** [#10090](https://github.com/openai/codex/issues/10090)
    *   *Why it matters:* Agent commands fail with `(no output)` due to `CreateProcessAsUserW` failing with access denied (Error 5).
    *   *Community:* 24 comments, 7 upvotes.

5.  **Global Trusted Projects Setting** [#14599](https://github.com/openai/codex/issues/14599)
    *   *Why it matters:* Feature request to allow `trust_level = "trusted"` for any project, removing the need for manual approval prompts on every new project.
    *   *Community:* 16 comments, 57 upvotes (strong demand).

6.  **Windows Computer Use `EnumWindows` Failure** [#37043](https://github.com/openai/codex/issues/37043)
    *   *Why it matters:* Computer Use tools (`sky.list_apps`, `sky.list_windows`) fail immediately on Windows with path-not-found errors.
    *   *Community:* 17 comments, 3 upvotes.

7.  **Local Work Chats in Projects (Windows)** [#34499](https://github.com/openai/codex/issues/34499)
    *   *Why it matters:* Users cannot create local "Work" chats inside ChatGPT Projects via the Windows Desktop App.
    *   *Community:* 15 comments, 6 upvotes.

8.  **Bubblewrap Sandbox Errors on Ubuntu 24.04** [#29908](https://github.com/openai/codex/issues/29908)
    *   *Why it matters:* `apply_patch` and managed sandbox commands fail due to Bubblewrap loopback/userns errors on latest Ubuntu kernels.
    *   *Community:* 14 comments, 0 upvotes.

9.  **Resume Renders Full Thread History** [#34663](https://github.com/openai/codex/issues/34663)
    *   *Why it matters:* Resuming a CLI/TUI session renders the entire history instead of bootstrapping the latest turn, causing performance lag.
    *   *Community:* 7 comments, 5 upvotes.

10. **LiteLLM Streaming Regression in v0.147.0** [#37425](https://github.com/openai/codex/issues/37425)
    *   *Why it matters:* Upgrading to v0.147.0 causes streaming requests to consistently fail for users with custom LiteLLM providers.
    *   *Community:* 4 comments, 3 upvotes.

## 4. Key PR Progress
1.  **Code-Mode Host gRPC Protocol** [#37510](https://github.com/openai/codex/pull/37510)
    *   Defines the `codex.code_mode.v1` protobuf API for managing sessions, executions, and tool callbacks.

2.  **Disable Nagle’s Algorithm for Code-Mode WebSockets** [#37504](https://github.com/openai/codex/pull/37504)
    *   Enables `TCP_NODELAY` to reduce latency for latency-sensitive code-mode connections.

3.  **Preserve Child Waiters During Process Termination** [#37498](https://github.com/openai/codex/pull/37498)
    *   Fixes unreaped PTY children by detaching waiters instead of aborting them during session termination.

4.  **Limit Payload Traces in Diagnostic Logs** [#37497](https://github.com/openai/codex/pull/37497)
    *   Prevents SQLite log database overflow by limiting HTTP/SSE/WebSocket diagnostics to `DEBUG` in persistent sinks.

5.  **MCP Event Discovery and Subscriptions** [#37494](https://github.com/openai/codex/pull/37494)
    *   Exposes `McpResourceClient::list_events` and adds cancellable `events/stream` subscriptions.

6.  **Tool Namespace Inventory in Turn Metadata** [#37492](https://github.com/openai/codex/pull/37492)
    *   Adds opt-in `tool_namespaces_info` metadata to describe model-visible function namespaces.

7.  **Generalize Skill Locator Aliases** [#37488](https://github.com/openai/codex/pull/37488)
    *   Compacts skill locators under metadata pressure using provider-specific aliases (`e`, `o`, `r`).

8.  **Runtime Activity in Server Diagnostics** [#37486](https://github.com/openai/codex/pull/37486)
    *   Adds lifecycle-backed gauges for in-flight requests, active turns, and live MCP connections.

9.  **Keep Response Streams Alive Through Connection Failures** [#37485](https://github.com/openai/codex/pull/37485)
    *   Implements exponential retry delays (5-60s) for HTTP connection failures in sampling requests.

10. **Delegate Remote Process Sandboxing to Executor** [#37480](https://github.com/openai/codex/pull/37480)
    *   Preserves executor-native working directories and permission profiles for remote `exec_command` requests.

## 5. Feature Request Trends
*   **Sandbox & Security Flexibility:** Users frequently request easier trust configurations (`#14599`) and fixes for Windows sandbox ACLs (`#10090`, `#13965`).
*   **MCP Ecosystem Expansion:** Strong demand for better MCP support across non-OpenAI providers (`#26234`) and secure secret/env configuration paths (`#24401`).
*   **UI/UX Improvements:** Requests for global dictation hotkeys (`#34812`) and better handling of long transcripts via persistent sections (already shipped in v0.147.0).

## 6. Developer Pain Points
*   **Windows Stability & Permissions:** A significant cluster of issues relates to Windows-specific failures, including `CreateProcessAsUserW` access denied errors, Computer Use detection failures, and sandbox spawning issues.
*   **macOS Memory Leaks:** Critical OOM crashes in the macOS app, specifically triggered by `external-agent-import` parsing large directories from Claude Desktop on startup (`#36523`) and MCP child process leaks (`#12491`).
*   **Non-OpenAI Provider Compatibility:** Users of Ollama, LM Studio, and LiteLLM are encountering breaking changes or missing tool availability, highlighting friction in the custom model pipeline.
*   **Linux Sandbox Kernel Issues:** Bubblewrap compatibility problems on newer Ubuntu kernels (`#29908`) continue to block managed sandbox usage.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-08-08

## 1. Today's Highlights
The community is prioritizing sub-agent reliability and security hardening, with multiple P1 issues highlighting sub-agent hangs and recovery failures. A critical SSRF vulnerability (CVSS 8.6) in the web-fetch tool was addressed in open PRs today, prompting an immediate upgrade of sandbox Docker images from Node 20 to Node 22.

## 2. Releases
*   **v0.56.0-nightly.20260807.gd5c9a97dc**: The latest nightly build, carrying forward changes from the v0.55.0-preview.1 changelog.
    *   [View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260807.gd5c9a97dc)
*   **v0.55.0-preview.2**: A preview patch release cherry-picking a fix for issue #28716 to stabilize the preview track.
    *   [View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.2)
*   **v0.54.4**: A stable patch release addressing backend issues via cherry-picks from the v0.54.0 branch.
    *   [View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.4)

## 3. Hot Issues
These issues have generated the most community engagement and discussion recently:

1.  **[Bug] Subagent recovery after MAX_TURNS reported as GOAL success** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   *Why it matters*: The `codebase_investigator` falsely reports success upon hitting turn limits, masking failures. With 12 comments and P1 priority, this indicates a significant reliability gap in sub-agent termination logic.
2.  **[Bug] Generalist agent hangs** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   *Why it matters*: The generalist agent frequently deadlocks on simple tasks (e.g., folder creation) unless sub-agents are explicitly disabled. High community impact (8 👍) suggests this is a common friction point for users.
3.  **[Enhancement] Leverage model's bash affinity via Zero-Dependency OS Sandboxing** [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
    *   *Why it matters*: Proposes aligning tool usage with the model's native bash training while maintaining security. This large-effort enhancement aims to reduce turn counts and improve UX for codebase exploration.
4.  **[Task] Robust component level evaluations** [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
    *   *Why it matters*: Tracks the evolution of behavioral evals (now at 76 tests). Critical for maintainers to ensure quality as the agent system grows in complexity.
5.  **[Task] Assess impact of AST-aware file reads/search** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   *Why it matters*: Investigates precision improvements to reduce token noise and misaligned reads. A key architectural discussion for next-gen codebase navigation.
6.  **[Bug] Gemini does not use skills and sub-agents enough** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   *Why it matters*: Users report that custom skills (e.g., gradle, git) are ignored unless explicitly prompted, undermining the value of skill definitions.
7.  **[Bug] Stop Auto Memory from retrying low-signal sessions indefinitely** [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
    *   *Why it matters*: Auto Memory can get stuck re-evaluating sessions it decides not to process, leading to infinite loops or resource waste.
8.  **[Bug] Shell command execution gets stuck with "Waiting input"** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   *Why it matters*: Simple CLI commands hang after completion, displaying a misleading "Awaiting user input" state. This breaks workflow automation and user trust.
9.  **[Feature] Enhance browser_agent resilience** [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)
    *   *Why it matters*: The browser agent fails fast on locked profiles; the community requests automatic session takeover to support persistent browsing modes better.
10. **[Bug] Browser subagent fails in Wayland** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    *   *Why it matters*: Linux Wayland users face critical failures with the browser agent, limiting cross-platform usability.

## 4. Key PR Progress
Significant technical updates and fixes currently in review or merged:

1.  **feat(core): add Gemini 3.6 Flash and 3.5 Flash-Lite configurations** [#28673](https://github.com/google-gemini/gemini-cli/pull/28673)
    *   Adds model definitions and capabilities for the latest Flash variants.
2.  **fix(core,cli): resolve false model capacity exhaustion** [#28730](https://github.com/google-gemini/gemini-cli/pull/28730)
    *   Fixes incorrect quota lookup mappings and ensures the "Keep trying" UI option works during transient capacity surges.
3.  **fix(cli): load environment variables before resolving settings placeholders** [#28597](https://github.com/google-gemini/gemini-cli/pull/28597)
    *   Resolves a race condition where `.env` variables were not available during initial settings parsing.
4.  **feat(ingestion): add issue comment handling and re-triage workflow** [#28690](https://github.com/google-gemini/gemini-cli/pull/28690)
    *   Enables the Caretaker Agent to process issue comments and trigger re-triage via slash commands.
5.  **fix(core): resolve swallowed directory mismatch in IDE connections** [#28729](https://github.com/google-gemini/gemini-cli/pull/28729)
    *   Fixes connectivity issues with VS Code forks and remote workspaces (e.g., Cider) that use virtual paths.
6.  **fix(security): prevent SSRF via DNS resolution bypass in web-fetch** [#28725](https://github.com/google-gemini/gemini-cli/pull/28725)
    *   **Critical**: Patches a CVSS 8.6 SSRF vulnerability allowing access to private IPs via custom domains.
7.  **fix(security): upgrade sandbox Dockerfile to node:22-slim** [#28726](https://github.com/google-gemini/gemini-cli/pull/28726)
    *   Upgrades runtime to Node 22 to address EOL security risks in Node 20.
8.  **fix(caretaker): clear lock on NEEDS_HUMAN transition** [#28601](https://github.com/google-gemini/gemini-cli/pull/28601)
    *   Corrects a logic bug where issue locks were not released after max claim attempts.
9.  **fix(cli): skip diff hunk markers during @ processing** [#28581](https://github.com/google-gemini/gemini-cli/pull/28581)
    *   Prevents heap growth in large diffs by ignoring `@` markers that are not file references.
10. **feat(caretaker-evals): add Cloud Run job entrypoint** [#28727](https://github.com/google-gemini/gemini-cli/pull/28727)
    *   Adds infrastructure for running the evaluation suite on Google Cloud Run.

## 5. Feature Request Trends
*   **Sub-Agent Autonomy & Reliability**: The most frequent requests involve sub-agents (generalist, browser, codebase investigator) failing silently, hanging, or ignoring configuration. Users want robust recovery and correct permission handling.
*   **AST-Aware Codebase Navigation**: There is strong interest in moving beyond text-based search to AST-aware tools for more precise file reading and mapping (Issues #22745, #22746).
*   **Memory System Refinement**: Users are identifying bugs in Auto Memory, specifically around infinite retry loops on low-signal sessions and the need for better signal filtering.
*   **Security & Sandboxing**: Increased focus on securing the agent's internet access (SSRF fixes) and ensuring sandbox environments are up-to-date with secure base images.

## 6. Developer Pain Points
*   **Sub-Agent Instability**: The dominant pain point. Users report that sub-agents hang indefinitely (#21409), report false successes (#22323), or ignore explicit skills (#21968). This forces users to disable sub-agents entirely, losing functionality.
*   **Terminal/Shell Integration Bugs**: Frequent reports of the shell hanging after command completion (#25166), getting stuck on interactive prompts like Vite creation (#22465), and failing on Wayland systems (#21983).
*   **Configuration & Path Resolution**: Issues with symlinked agent definitions (#20079), IDE path mismatches in remote workspaces (#28729), and environment variable load-order race conditions (#28597) create friction during setup and daily use.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-08-08  
**Source:** github.com/github/copilot-cli

## 1. Today's Highlights
GitHub has released v1.0.79-9, focusing on enhanced enterprise sandbox policies and improved Agent Plugins extensibility via new extension directories. Community attention is heavily concentrated on session management regressions, specifically regarding model persistence on resume and default workspace directory selection. Additionally, a critical regression in skill tool path resolution has emerged in recent versions, affecting users with skills installed in `~/.agents/skills`.

## 2. Releases
**v1.0.79-9** (Latest)
*   **Sandbox Configuration:** The `/sandbox` dialog now explicitly indicates where settings are stored in `settings.json`, improving transparency for enterprise-managed environments.
*   **Enterprise Policy Support:** Added support for `allow-auto-only` policies, allowing `/allow-all auto` to function while keeping full `allow-all` blocked. It also enforces proxy URLs for managed sandboxes while retaining user-controlled credentials.
*   **Agent Plugins:** Plugins can now ship extensions under `com.github.copilot/extensions/`.
*   **Model Support:** Added support for the `kimi-k3` model.
*   **Workflow Improvement:** Users can now combine `--plan` with `--mode autopilot` to plan first and implement without immediate approval.

## 3. Hot Issues
1.  **[Bug] /app command does not select current working directory by default** (#4118)  
    *   **Why it matters:** A significant UX regression where `/app` fails to open the current directory, forcing manual navigation.
    *   **Community Reaction:** High engagement with **35 upvotes**, indicating widespread frustration with this workflow break.
2.  **[Feature] Support subfolders for skills** (#1632)  
    *   **Why it matters:** Users with extensive skill libraries (>10 skills) struggle with flat folder structures; subfolder support is critical for organization.
    *   **Community Reaction:** **23 upvotes** with **10 comments**, showing long-standing demand.
3.  **[Bug] copilot login auto-enters 'y/N' keychain prompt** (#2494)  
    *   **Why it matters:** A regression in v1.0.16 where authentication no longer waits for user input, potentially causing login failures or security bypasses in headless/keychain-less environments.
    *   **Community Reaction:** **11 comments** discuss the severity of the auto-enter behavior.
4.  **[Bug] Copy to clipboard silently fails on Windows** (#3622)  
    *   **Why it matters:** Agent output copying appears successful but pastes previous content, breaking copy-paste workflows on Windows.
    *   **Community Reaction:** **4 upvotes**, noted as a regression from v1.0.48.
5.  **[Bug] Transcript renders as blank lines until width change** (#4311)  
    *   **Why it matters:** Visual regression in interactive mode where the terminal blanks out until user interaction, confusing users about session state.
    *   **Community Reaction:** Active discussion on the rendering cache invalidation logic.
6.  **[Bug] add-dir flag converts dashes to underscores** (#1409)  
    *   **Why it matters:** Causes permission loops on Windows (especially OneDrive) due to path mismatches, creating an infinite permission prompt cycle.
    *   **Community Reaction:** **4 upvotes**; flagged as a critical usability blocker for Windows users.
7.  **[Bug] Reasoning effort 'medium' unsupported for claude-haiku-4.5** (#4345)  
    *   **Why it matters:** Feature flag conflicts cause sub-agent execution failures when mixing certain model configurations.
    *   **Community Reaction:** **4 upvotes** from users testing advanced reasoning profiles.
8.  **[Bug] Copilot CLI crashes on Windows with notifications enabled** (#4219)  
    *   **Why it matters:** Hard crashes (access violations) when using `agency copilot` with native toast notifications enabled.
    *   **Community Reaction:** Closed as fixed, but highlights Windows notification subsystem stability.
9.  **[Bug] `--add-dir` causes Claude sub-agent dispatch to fail (400 error)** (#4185)  
    *   **Why it matters:** Sending more than 4 `cache_control` blocks triggers a 400 error from Anthropic, breaking workflows using multiple directory contexts.
    *   **Community Reaction:** Closed as fixed; technical limitation hit in agent scaling.
10. **[Bug] MNC npx command fails with login, shows false positive** (#1129)  
    *   **Why it matters:** MCP servers displaying as "loaded" when they actually failed to initialize due to login issues, leading to silent tool failures.
    *   **Community Reaction:** **1 upvote**; highlights confusion in MCP diagnostic visibility.

## 4. Key PR Progress
*No new Pull Requests were reported in the last 24 hours.*

## 5. Feature Request Trends
*   **Workspace & Session Persistence:** Users are requesting persistent defaults for workspace types (branch vs. worktree) (#4396) and the restoration of quick-delete actions in the sessions view (#4395).
*   **Input & Keyboard Customization:** There is a demand to disable or remap the "Ctrl+C twice to exit" behavior (#4394) to better align with standard terminal habits.
*   **Skill Organization:** Strong recurring demand for hierarchical skill management via subfolders (#1632).
*   **Visibility & Notifications:** Requests for desktop notifications when human input is needed (#2941) and better token usage reporting (#2947) indicate users want more awareness of CLI state and cost.

## 6. Developer Pain Points
*   **Regression in Skill Tooling:** Multiple new issues (#4401, #4399) point to breaks in skill discovery and `.claude/settings.local.json` hook compatibility on Windows, suggesting recent patches may have introduced instability in the agent/skill loading pipeline.
*   **Authentication & Session State:** Users are experiencing friction with login prompts being skipped (#2494), session resumes dropping model settings (#4397), and MCP clients being rebuilt inefficiently at startup (#4392).
*   **Windows Terminal & UX:** A cluster of Windows-specific bugs includes clipboard failures (#3622), screen clearing on text copy (#4391), and permission path normalization errors (#1409), indicating the Windows terminal rendering and input handling layers need stabilization.
*   **Configuration Loading:** Issues with `permissions.config` not loading `allowed_directories` (#4398) and the npm bin acting as a dynamic loader rather than a version pin (#4402) suggest configuration management and deployment reliability are key pain points.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-08

## 1. Today's Highlights
The community is actively addressing critical data safety issues in `StrReplaceFile`, with two complementary PRs (#2594, #2595) aiming to fix UTF-8 corruption bugs reported in #2591. Meanwhile, a severe security incident (#2596) where the agent executed an unintended `rm -rf` outside the workspace has highlighted significant risks in yolo permission modes, while long-standing requests for a persistent memory system (#1283) continue to gather attention.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **#2596: Agent ran rm -rf on a pre-existing directory outside the workspace** [OPEN]
    *   **Why it matters:** This is a critical security and data-loss incident. The agent, operating in yolo mode, failed to detect that a symlink creation had overwritten a real directory, leading to the deletion of user session data. It exposes dangerous edge cases in permission handling and symlink management.
    *   **Link:** [MoonshotAI/kimi-cli Issue #2596](https://github.com/MoonshotAI/kimi-cli/issues/2596)
*   **#2591: StrReplaceFile corrupts undecodable bytes outside the edited region** [OPEN]
    *   **Why it matters:** A high-severity bug where any non-UTF-8 byte in a file, even distant from the edit, is replaced with `U+FFFD` (`EF BF BD`) upon saving. This causes silent, permanent data corruption, undermining trust in file editing operations.
    *   **Link:** [MoonshotAI/kimi-cli Issue #2591](https://github.com/MoonshotAI/kimi-cli/issues/2591)
*   **#1283: Feature Request: Memory System - Persistent context across sessions** [OPEN]
    *   **Why it matters:** Users increasingly demand long-term context retention. This feature would allow Kimi Code CLI to remember project patterns and preferences, significantly enhancing productivity for long-running projects. With 21 comments, it represents a strong community desire for enhanced statefulness.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

## 4. Key PR Progress
*   **#2594: fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits** [OPEN]
    *   **Description:** Proposes a technical fix by applying edits as raw UTF-8 byte substrings on the buffer, ensuring that invalid UTF-8 sequences outside the edit region are preserved rather than corrupted. This directly addresses the root cause in #2591.
    *   **Link:** [MoonshotAI/kimi-cli PR #2594](https://github.com/MoonshotAI/kimi-cli/pull/2594)
*   **#2595: fix(StrReplaceFile): refuse to edit files that are not valid UTF-8** [OPEN]
    *   **Description:** An alternative safety-focused approach that refuses to edit files containing invalid UTF-8 bytes, preventing any risk of corruption. While conservative, it aims to resolve #2591 by avoiding the problematic operation entirely.
    *   **Link:** [MoonshotAI/kimi-cli PR #2595](https://github.com/MoonshotAI/kimi-cli/pull/2595)

## 5. Feature Request Trends
*   **Persistent Context & Memory:** Issue #1283 highlights a growing trend toward tools that maintain session state and remember user preferences, moving beyond stateless interactions to support complex, long-term development workflows.

## 6. Developer Pain Points
*   **Data Integrity & Corruption Risks:** The urgency around #2591 and the corresponding PRs indicates significant frustration with silent data corruption. Developers require guaranteed binary fidelity when editing files, especially those with mixed encodings or non-standard bytes.
*   **Safety Boundaries in Agentic Modes:** Issue #2596 underscores a critical pain point regarding the safety of autonomous agents. Users are concerned about the potential for irreversible damage (e.g., `rm -rf`) when the agent operates in permissive modes or encounters unexpected filesystem states like pre-existing directories versus symlinks.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-08

## 1. Today's Highlights
OpenCode v1.18.15 landed, fixing message chronology and truncation reliability. The community is actively tracking reliability regressions in the Go subscription (401 errors) and the DeepSeek V4 relay (HTTP 400 failures due to missing content keys). Meanwhile, PRs are advancing native background subagents, V2 settings redesigns, and local-first web project discovery.

## 2. Releases
**v1.18.15**
- **Core:** Fixed chronological message ordering for imported/legacy IDs to ensure revert and fork actions respect true chronology.
- **Reliability:** Improved truncation cleanup to remove stale files based on file timestamps.
- *Link:* [anomalyco/opencode](https://github.com/anomalyco/opencode)

## 3. Hot Issues
1.  **[OPEN] Go 401 Request blocked** (#38257) — *45 comments, 11👍*
    All Go subscription models return 401 on chat completions while `/v1/models` works. This is a critical service outage impacting core functionality.
2.  **[OPEN] Crypto payments for Go** (#23153) — *17 comments, 37👍*
    High demand for cryptocurrency support in payments, indicating a significant user segment prefers non-fiat onboarding.
3.  **[OPEN] Image reading failures** (#5359) — *18 comments*
    Regression in v1.0.137+ where pasted images are rejected by the backend (LiteLLM/Vertex AI). Breaks multimodal workflows.
4.  **[CLOSED] Bedrock Opus 4.6 compaction failure** (#14332) — *16 comments, 8👍*
    Compaction fails when modifying messages containing `thinking` blocks, a constraint specific to newer Anthropic models.
5.  **[CLOSED] Go `deepseek-v4-flash` wrong version** (#40409) — *14 comments*
    The Go relay serves DeepSeek V3.2 instead of V4 Flash 0731, causing billing and capability mismatches.
6.  **[OPEN] V2 Snowflake Cortex OAuth** (#34780) — *4 comments*
    V2 branch lacks Snowflake login support present in V1, highlighting a gap in the new authentication provider matrix.
7.  **[OPEN] npm install skip env var** (#37888) — *3 comments, 2👍*
    Request for `OPENCODE_DISABLE_INSTALL` to bypass npm plugin installs in Docker/CI environments, improving automation reliability.
8.  **[OPEN] Skills subfolders** (#38853) — *3 comments, 1👑*
    Users want hierarchical organization for skills rather than the current flat directory structure.
9.  **[CLOSED] Usage >100% / Cannot compact** (#41102)
    Edge case where usage caps at >100% and prevents further compaction, suggesting a state bug in quota tracking.
10. **[CLOSED] Queue messages during generation** (#41106)
    Request to queue user inputs instead of canceling in-flight turns, addressing a common multi-question workflow friction.

## 4. Key PR Progress
1.  **#41169** `fix(lsp): match wildcard root markers` — Fixes `NearestRoot` probe to support glob markers like `*.cabal`, improving LSP compatibility.
2.  **#41147** `fix(tui): show external worktree session labels` — Restores session labels for Git worktrees outside the canonical project directory.
3.  **#41113** `feat(tui): render Mermaid diagrams` — Adds built-in rendering for Mermaid flowcharts and sequence diagrams directly in the TUI transcript.
4.  **#41167** `feat(opencode): let web users avoid browser launches` — Adds `opencode web --no-open` flag for server/headless deployments.
5.  **#41158** `fix(app): default project picker to home` — Hydrates V2 app path state to default the project picker to the home directory.
6.  **#41160** `feat(tool): add Synthetic web search backend` — Introduces a `synthetic` web search provider alongside `exa` and `parallel`.
7.  **#41161** `fix(session): extract tool-result media` — Corrects media extraction for models without native attachment capability in tool results.
8.  **#41159** `fix(provider): propagate config-level npm override` — Fixes a bug where provider-level npm overrides were silently dropped for inherited models.
9.  **#40923** `feat: native background subagents` — Introduces native orchestration for background subagents and auto-continue for transient provider errors.
10. **#41154** `fix(app): show server projects until first bookmark` — Resolves the "Nothing here yet" empty state in `opencode web` by falling back to server project listings.

## 5. Feature Request Trends
-   **Payment Diversity:** Strong push for crypto payments (#23153) and flexible authentication (Snowflake OAuth in V2, #34780).
-   **Workflow Continuity:** Requests to queue messages during generation (#41106) and handle transient errors automatically (#40923) show users prioritizing uninterrupted agentic flows.
-   **Organizational Depth:** Users are outgrowing flat structures, requesting subfolders for skills (#38853) and better visual organization in the TUI (Mermaid rendering, #41113).
-   **DevOps/CI Support:** Need for environment variables to skip installs (#37888) and non-interactive web modes (#41167) indicates growing adoption in automated pipelines.

## 6. Developer Pain Points
-   **Relay/Provider Mismatches:** Recurring issues where the OpenCode relay serves incorrect model versions (DeepSeek V3 vs V4, #40409, #40607) or fails to pass required fields like `reasoning_content` (#24334), leading to HTTP 400 errors.
-   **Go Subscription Reliability:** The 401 provider block (#38257) and overcharging/limit errors (#41146) are causing significant friction for paid users.
-   **V2 Migration Gaps:** Features available in V1 (Snowflake OAuth, image reading) are missing or broken in V2, creating a regression burden for adopters.
-   **Image/Media Handling:** Persistent issues with image pasting (#5359) and tool-result media extraction (#41161) suggest the multimodal pipeline needs stabilization.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-08

## 1. Today's Highlights
Pi v0.84.1 introduces support for Qwen Individual subscription models and authentication readiness checks. The community is actively addressing long-running agent session stability, with significant engagement around context compaction failures, parallel tool result loss, and session lifecycle bugs. Additionally, a new integration bridge for Cursor CLI has landed, allowing seamless use of local Cursor agents without extra API keys.

## 2. Releases
**v0.84.1**
*   **Qwen Token Plan Individual:** Enables use of the built-in provider for models documented for Individual subscriptions.
*   **Authentication readiness checks:** New commands to verify auth status before session initiation.
*   **URL:** https://github.com/earendil-works/pi/releases/tag/v0.84.1

## 3. Hot Issues
1.  **[Bug] Auto-compaction never triggers after context grows past 100%** [#6879](https://github.com/earendil-works/pi/issues/6879)
    *   *Why it matters:* Critical for long-running agentic sessions; compaction only triggers on API rejection (373k tokens) rather than proactively, leading to wasted context and costs.
    *   *Reaction:* 15 👍, 13 comments.

2.  **[Bug] New default PI_* guideline over-encourages unnecessary bash calls** [#7128](https://github.com/earendil-works/pi/issues/7128)
    *   *Why it matters:* Recent system prompt changes bias agents toward frequent env-inspection bash commands, degrading performance and clarity.
    *   *Reaction:* 7 👍, 11 comments.

3.  **[Bug] Sometimes Pi doesn't continue after compaction** [#7020](https://github.com/earendil-works/pi/issues/7020)
    *   *Why it matters:* Affects "coordinator" style long-running sessions where post-compaction continuity is broken.
    *   *Reaction:* 10 comments, closed.

4.  **[Meta] AgentSession settlement/continuation and assistant-tail lifecycle bugs** [#5886](https://github.com/earendil-works/pi/issues/5886)
    *   *Why it matters:* Meta-issue highlighting a recurring class of bugs where post-run logic fails on stale transcripts.
    *   *Reaction:* 6 comments, open.

5.  **[Bug] Parallel tool batches lose completed results when one sibling stalls** [#7053](https://github.com/earendil-works/pi/issues/7053)
    *   *Why it matters:* Directly impacts reliability of parallel tool execution; orphaned tool calls result in "No result provided" errors.
    *   *Reaction:* 4 comments, open/in-progress.

6.  **[Bug] High CPU usage on Mac OS with long sessions** [#7730](https://github.com/earendil-works/pi/issues/7730)
    *   *Why it matters:* Performance regression affecting Mac users, with CPU spiking to 100%+ during extended sessions.
    *   *Reaction:* 5 👍, 4 comments.

7.  **[Bug] DeepSeek models via opencode zen gateway hit 400 on multi-turn** [#7702](https://github.com/earendil-works/pi/issues/7702)
    *   *Why it matters:* `reasoning_content` is not round-tripped correctly, breaking thinking-mode models.
    *   *Reaction:* 6 comments, closed.

8.  **[Bug] Unable to start 0.84.1 on Node 23** [#7771](https://github.com/earendil-works/pi/issues/7771)
    *   *Why it matters:* `zlib.createZstdDecompress` is not a function, indicating a Node version compatibility issue with the new release.
    *   *Reaction:* 5 comments, closed.

9.  **[Bug] Agent.reset() leaves assistant-only transcript** [#7703](https://github.com/earendil-works/pi/issues/7703)
    *   *Why it matters:* Lifecycle bug where resetting during an active run fails to abort the run, leading to orphaned assistant messages.
    *   *Reaction:* 5 comments, closed.

10. **[Bug] openai-responses: deferred function_call round-trip drops namespace** [#7709](https://github.com/earendil-works/pi/issues/7709)
    *   *Why it matters:* Breaks tool usage with OpenAI Responses models that defer tool calls, causing "Missing namespace" errors.
    *   *Reaction:* 3 comments, closed.

## 4. Key PR Progress
1.  **[feat] Bridge Cursor CLI auth via local agent session** [#7792](https://github.com/earendil-works/pi/pull/7792)
    *   Adds a hidden `cursor-agent` extension to use existing Cursor CLI auth without API keys.
2.  **[refactor] Derive recovery state from record queries** [#7784](https://github.com/earendil-works/pi/pull/7784)
    *   Removes recovery-specific query APIs in favor of bounded `findRecords()` calls, simplifying the agent harness.
3.  **[feat] Lazily load uncommon syntax grammars** [#7801](https://github.com/earendil-works/pi/pull/7801)
    *   Experimental refactoring of syntax highlighting to improve performance by lazy loading.
4.  **[fix] Preserve custom tool renderers after reload** [#7749](https://github.com/earendil-works/pi/pull/7749)
    *   Fixes issue where custom tool renderers registered on `session_start` were lost after `/reload`.
5.  **[feat] Add Amazon Bedrock Mantle OpenAI Responses provider** [#6216](https://github.com/earendil-works/pi/pull/6216)
    *   Adds support for AWS Bedrock Mantle's OpenAI-compatible API.
6.  **[fix] Use command -v to verify wl-copy exists** [#7795](https://github.com/earendil-works/pi/pull/7795)
    *   Replaces external `which` dependency with shell built-in `command -v` for better sandbox compatibility.
7.  **[feat] Introduce LM Studio provider** [#7762](https://github.com/earendil-works/pi/pull/7762)
    *   New provider for local LM Studio instances.
8.  **[fix] Render tool errors via context.isError** [#7788](https://github.com/earendil-works/pi/pull/7788)
    *   Fixes unreliable string matching for tool errors in built-in renderers.
9.  **[feat] Add theme override option** [#7722](https://github.com/earendil-works/pi/pull/7722)
    *   Adds `--use-theme` flag for overriding theme selection per run.
10. **[feat] Restore suspended harness operations** [#7710](https://github.com/earendil-works/pi/pull/7710)
    *   Implements recovery query reducer to restore suspended agent sessions.

## 5. Feature Request Trends
*   **Cross-Tool Compatibility:** Strong interest in bridging with other agent ecosystems (Cursor CLI, Agent Plugins spec).
*   **Provider Expansion:** Requests for new providers like Amazon Bedrock Mantle and LM Studio.
*   **UI/UX Refinements:** Demands for better fullscreen TUI behavior (sticky headers, half-page scroll, command menu positioning).
*   **Extensibility:** Requests for safer session replacement APIs for extensions and ability to decorate existing tools.

## 6. Developer Pain Points
*   **Session Lifecycle & Compaction:** Recurring issues with long-running sessions failing to compact correctly or continue after compaction, leading to context overflow and lost state.
*   **Parallel Tool Execution:** Bugs around orphaned tool results and lost completions in parallel batches.
*   **Provider Round-tripping:** Inconsistent handling of model-specific features like `reasoning_content` (DeepSeek) and `namespace` (OpenAI Responses).
*   **Reload/Restart State Loss:** Tools and renderers registered during `session_start` are lost after `/reload`, breaking complex extension workflows.
*   **Platform Compatibility:** Issues with Node 23 compatibility (`zlib`), `which` command dependency in sandboxes, and high CPU usage on macOS.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-08

## 1. Today's Highlights
The Qwen Code team addressed critical session stability in the stream-json protocol and expanded AI capabilities with a new "reasoning effort" selector via the ACP standard. Additionally, a novel "Qwen WebBridge" proposal introduces direct browser automation, while Windows Desktop receives a significant reliability patch for startup crashes.

## 2. Releases
**v0.21.7-nightly.20260808.4ec0371e6** is the latest build. Key updates include:
*   **CI Reliability:** A fix to surface blocked autofix takeover admissions, improving feedback during continuous integration ([PR #8410](https://github.com/QwenLM/qwen-code/pull/8410)).
*   **Documentation:** New documentation covering `serve` sub-session concurrency settings.

## 3. Hot Issues
*   **[Windows UI Input](https://github.com/QwenLM/qwen-code/issues/8625)** – Users report pinyin text clarity issues in Windows terminals. Noteworthy for its direct impact on Chinese-language UX.
*   **[Desktop Windows Crash](https://github.com/QwenLM/qwen-code/issues/8615)** – A P2 bug where the bundled runtime crashes on startup with an `EISDIR` error on Windows 11. Likely closed/fixed given recent build updates.
*   **[MCP List Hang](https://github.com/QwenLM/qwen-code/issues/8550)** – `qwen mcp list` hangs indefinitely on SSE servers that delay sending the `endpoint` event. A critical reliability issue for MCP users.
*   **[Tmux/SSH Flickering](https://github.com/QwenLM/qwen-code/issues/8562)** – Screen tearing reported in iTerm2/tmux environments. Highlights challenges with virtualized terminal rendering in nested SSH sessions.
*   **[Markdown Links Silent Failure](https://github.com/QwenLM/qwen-code/issues/8593)** – Desktop markdown links appear styled but are non-functional (clicks ignored). A usability bug affecting documentation and assistant replies.
*   **[Windows Installer Fail](https://github.com/QwenLM/qwen-code/issues/7118)** – Installation fails if `powershell.exe` cannot resolve `Get-FileHash`. A persistent environment-specific blocker for Windows standalone installs.
*   **[Omni S3 Reliability](https://github.com/QwenLM/qwen-code/issues/8185)** – Proposal for caching and recovery in S3 uploads (47h TTL). Critical for multimodal data integrity in long-running sessions.
*   **[Context Usage Duplication](https://github.com/QwenLM/qwen-code/issues/8695)** – Users see the context percentage displayed twice (status line and footer). A minor UI nit, but frequently noticed.
*   **[Signal-Terminated Shell Success](https://github.com/QwenLM/qwen-code/issues/8491)** – Shell commands killed by signals are incorrectly reported as successful. A semantic bug affecting tool result accuracy.
*   **[Middle-Mouse Copy Regression](https://github.com/QwenLM/qwen-code/issues/8672)** – Middle-button selection/copy broken in PuTTY (regression in v0.21.1). High frustration for SSH/power users.

## 4. Key PR Progress
*   **[feat(chrome) Qwen WebBridge](https://github.com/QwenLM/qwen-code/pull/8707)** – Implements direct browser control compatible with Kimi WebBridge, exposing `/command` and `/status` endpoints.
*   **[fix(cli) Stream-JSON Session Integrity](https://github.com/QwenLM/qwen-code/pull/8509)** – Separates session lifetime from turn cancellation, preventing aborts from breaking reusable sessions.
*   **[feat(telemetry) OpenTelemetry Alignment](https://github.com/QwenLM/qwen-code/pull/8616)** – Adds standard `session.start` and `session.end` logs, improving observability for external metrics collectors.
*   **[feat(cli) Reasoning Effort Selector](https://github.com/QwenLM/qwen-code/pull/8526)** – Exposes `thought_level` options (Low to Max) via ACP, allowing clients to dynamically adjust model thinking depth.
*   **[fix(acp) Context Usage Updates](https://github.com/QwenLM/qwen-code/pull/8528)** – Emits standard `usage_update` notifications, ensuring clients see accurate prompt context occupancy.
*   **[feat(daemon) Cross-Worktree Git Guard](https://github.com/QwenLM/qwen-code/pull/8687)** – Adds host-side guards to block model-issued Git mutations that escape the current workspace directory.
*   **[feat(web-shell) Fullscreen Artifacts](https://github.com/QwenLM/qwen-code/pull/8614)** – Adds a toggle to expand the right artifact panel (subagents, review changes) to fullscreen.
*   **[fix(core) Deferred MCP Tools](https://github.com/QwenLM/qwen-code/pull/8475)** – Restores deferred MCP tools on resumed sessions, fixing tool availability after context restoration.
*   **[perf(review) Tool-Call Budget](https://github.com/QwenLM/qwen-code/pull/8708)** – Introduces a soft tool-call budget into the review briefs to limit agent verbosity.
*   **[feat(web-shell) Tmux Sub-Agent](https://github.com/QwenLM/qwen-code/pull/8613)** – Allows agents to drive interactive CLI/REPL sessions inside tmux as first-class background tasks.

## 5. Feature Request Trends
*   **Browser Automation:** Strong demand for direct browser control (Kimi WebBridge integration) without requiring complex MCP setups ([PR #8707](https://github.com/QwenLM/qwen-code/pull/8707)).
*   **Mobile/Remote Access:** Requests for "Local Control" mode using QR-code pairing to access local sessions from phones ([Issue #8595](https://github.com/QwenLM/qwen-code/issues/8595)).
*   **Session Resilience:** Ongoing focus on reliability for long-running tasks, including S3 upload caching and robust session resume mechanisms ([Issue #8185](https://github.com/QwenLM/qwen-code/issues/8185), [PR #8509](https://github.com/QwenLM/qwen-code/pull/8509)).
*   **Workflow Orchestration:** Proposed additions of policy layers to the Workflow tool to better guide agent decision-making on concurrency and verification ([PR #8694](https://github.com/QwenLM/qwen-code/pull/8694)).

## 6. Developer Pain Points
*   **Terminal Rendering & Legacy Protocols:** Recurring issues with TUI flickering in tmux/SSH ([Issue #8562](https://github.com/QwenLM/qwen-code/issues/8562)) and hangs on non-standard SSE responses ([Issue #8550](https://github.com/QwenLM/qwen-code/issues/8550)) suggest a fragile rendering stack under specific environment conditions.
*   **Windows Ecosystem Fragmentation:** Multiple Windows-specific bugs persist, including installer `Get-FileHash` failures ([Issue #7118](https://github.com/QwenLM/qwen-code/issues/7118)), desktop startup crashes ([Issue #8615](https://github.com/QwenLM/qwen-code/issues/8615)), and input method rendering issues ([Issue #8625](https://github.com/QwenLM/qwen-code/issues/8625)).
*   **Mouse/Clipboard Regressions:** Users report broken middle-mouse paste in PuTTY ([Issue #8672](https://github.com/QwenLM/qwen-code/issues/8672)) and silent failures in Desktop markdown links ([Issue #8593](https://github.com/QwenLM/qwen-code/issues/8593)), indicating a need for regression testing on input event handling.
*   **Signal/Exit Code Semantics:** Confusion and bugs around how signal-terminated processes are reported as successes ([Issue #8491](https://github.com/QwenLM/qwen-code/issues/8491)) continues to affect debugging workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-08-08
**Repository:** [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (Note: Source data references `Hmbown/CodeWhale`)

## 1. Today's Highlights
The v0.9.4 release train has cleared its final CI blockers, shifting focus to stabilization and feature completion such as sidebar session browsing and fleet configuration. Community activity is high, with significant engagement around subagent reliability, cross-session memory persistence, and i18n coverage. Several critical bugs affecting shared workspace writes and credential storage precedence were identified and are being addressed.

## 2. Releases
**No new releases in the last 24 hours.**
The project is currently at v0.9.4, with PR #5282 recently closing the four CI blockers that were holding up the release. The repository state is synchronized with npm and crate pins, awaiting further stabilization.

## 3. Hot Issues
*Selecting top 10 issues by relevance and community interest.*

1.  **[CLOSED] Sidebar sessions panel with auto-resume** (#2934)
    *   *Why it matters:* Addresses the friction of switching between sessions without `Ctrl+R`. Essential for UX continuity.
    *   *Reaction:* 13 comments; high demand for persistent session history browsing.
    *   [View Issue](https://github.com/Hmbown/CodeWhale/issues/2934)

2.  **[OPEN] Subagent deadlock during large text processing** (#1425)
    *   *Why it matters:* Critical bug where `agent_wait` timeouts cause session hangs when processing large documents via parallel subagents.
    *   *Reaction:* 6 comments; users report consistent failures with multi-chunk analysis.
    *   [View Issue](https://github.com/Hmbown/CodeWhale/issues/1425)

3.  **[OPEN] Dead-code sweep: 464 #[allow(dead_code)] attributes** (#4785)
    *   *Why it matters:* Structural hygiene issue; excessive `allow(dead_code)` hides potential drift and bugs in the Rust codebase.
    *   *Reaction:* 5 comments; technical cleanup proposal.
    *   [View Issue](https://github.com/Hmbown/CodeWhale/issues/4785)

4.  **[OPEN] Lack of cross-session memory** (#2492)
    *   *Why it matters:* Users report that restarting the TUI loses context from previous sessions, impacting productivity.
    *   *Reaction:* 5 comments; notable pain point for long-term project work.
    *   [View Issue](https://github.com/Hmbown/CodeWhale/issues/2492)

5.  **[CLOSED] Subagent resume_from continuation chains** (#425)
    *   *Why it matters:* Enables resuming prior subagent sessions via `task_id`, improving reliability and state management.
    *   *Reaction:* 5 comments; 1 👍; foundational for robust agent workflows.
    *   [View Issue](https://github.com/Hmbown/CodeWhale/issues/425)

6.  **[OPEN] Runtime ownership refactor (v0.9.3 umbrella)** (#3306)
    *   *Why it matters:* Addresses architectural debt; 87% of code resides in `codewhale-tui` with duplicated runtime paths.
    *   *Reaction:* 4 comments; critical for long-term maintainability.
    *   [View Issue](https://github.com/Hmbown/CodeWhale/issues/3306)

7.  **[OPEN] Advisor watcher for live turns** (#3982)
    *   *Why it matters:* Enhances reliability by allowing an optional watcher to observe subagent progress and raise warnings without manual intervention.
    *   *Reaction:* 4 comments; viewed as a key UX improvement for complex tasks.
    *   [View Issue](https://github.com/Hmbown/CodeWhale/issues/3982)

8.  **[OPEN] Agent spawn surface too many knobs** (#5123)
    *   *Why it matters:* Release-blocker; builder agents are self-blocked due to read-only tool contracts, causing immediate failures in v0.9.4.
    *   *Reaction:* 3 comments; urgent fix required for stable v0.9.4 experience.
    *   [View Issue](https://github.com/Hmbown/CodeWhale/issues/5123)

9.  **[OPEN] i18n coverage improvement** (#790)
    *   *Why it matters:* Many user-visible strings remain hardcoded in English despite zh-Hant support; affects accessibility.
    *   *Reaction:* 3 comments; community request for broader localization.
    *   [View Issue](https://github.com/Hmbown/CodeWhale/issues/790)

10. **[OPEN] Config keys not editable/persistable from TUI** (#3303)
    *   *Why it matters:* Users cannot reliably discover or edit config knobs (e.g., sub-agent settings) from within the TUI, creating a hidden complexity barrier.
    *   *Reaction:* 3 comments; desire for self-service configuration.
    *   [View Issue](https://github.com/Hmbown/CodeWhale/issues/3303)

## 4. Key PR Progress
*Selecting 10 significant PRs.*

1.  **[CLOSED] docs(readme): lead with mixed fleets** (#5283)
    *   *Summary:* Updates README to highlight mixed-fleet capabilities (any model in any role) rather than just provider switching.
    *   [View PR](https://github.com/Hmbown/CodeWhale/pull/5283)

2.  **[OPEN] fix(subagent): stop counting finished children as shared-checkout contenders** (#5284)
    *   *Summary:* Fixes false-positive `Bash` write rejections in shared workspaces by correcting how finished subagents are tracked.
    *   [View PR](https://github.com/Hmbown/CodeWhale/pull/5284)

3.  **[CLOSED] fix(release): clear the four CI blockers holding v0.9.4** (#5282)
    *   *Summary:* Resolves CI failures that were preventing the v0.9.4 release, allowing the train to proceed.
    *   [View PR](https://github.com/Hmbown/CodeWhale/pull/5282)

4.  **[OPEN] Layer 5.3: Palette, completion, and discovery filtering** (#5255)
    *   *Summary:* Consolidates user-command integration in the command palette and slash-completion surfaces (Layer 5.3 of refactor).
    *   [View PR](https://github.com/Hmbown/CodeWhale/pull/5255)

5.  **[OPEN] fix(tui): stop stale cached session title from pinning New Session** (#5258)
    *   *Summary:* Fixes bug where session titles remained "New Session" due to stale in-memory cache overwrites.
    *   [View PR](https://github.com/Hmbown/CodeWhale/pull/5258)

6.  **[OPEN] feat(mcp): background incremental registry sync** (#5256)
    *   *Summary:* Optimizes MCP registry updates by serving from cache first and syncing in the background, avoiding full downloads on every call.
    *   [View PR](https://github.com/Hmbown/CodeWhale/pull/5256)

7.  **[OPEN] feat(config): add model = auto for prompt-based tier selection** (#5257)
    *   *Summary:* Introduces `model = "auto"` to automatically select between `deepseek-v4-pro` (complex) and `deepseek-v4-flash` (simple) based on prompt analysis.
    *   [View PR](https://github.com/Hmbown/CodeWhale/pull/5257)

8.  **[CLOSED] feat(subagents): allow embedders to isolate runtime state roots** (#5252)
    *   *Summary:* Adds optional `EngineConfig::subagent_state_root` for embedding hosts needing session-owned delegated-agent state isolation.
    *   [View PR](https://github.com/Hmbown/CodeWhale/pull/5252)

9.  **[CLOSED] Build fix for FreeBSD** (#5254)
    *   *Summary:* Resolves compilation failure on FreeBSD by addressing missing `rquickjs` bindings.
    *   [View PR](https://github.com/Hmbown/CodeWhale/pull/5254)

10. **[CLOSED] docs: add Docs/windows beginner guide in zh-CN** (#5229)
    *   *Summary:* Adds a Chinese-language Windows beginner guide covering installation, configuration, and troubleshooting.
    *   [View PR](https://github.com/Hmbown/CodeWhale/pull/5229)

## 5. Feature Request Trends
*   **Session Management & Memory:** Strong demand for persistent cross-session memory (#2492) and improved session browsing/resume (#2934, #425).
*   **Subagent Reliability:** Requests for better subagent state isolation (#5252), resume capabilities (#425), and advisor watchers (#3982) to handle complex, long-running tasks.
*   **Configuration UX:** Users want to edit and persist config keys directly from the TUI (#3303) and have clearer provider/model switching behavior (#5034).
*   **Localization:** Continued push for broader i18n coverage beyond core UI chrome (#790).
*   **Performance & Hygiene:** Interest in runtime ownership refactoring (#3306) and dead-code removal (#4785) to improve stability and maintainability.

## 6. Developer Pain Points
*   **Shared Workspace Write Conflicts:** Subagents frequently fail with false-positive bounded file target errors in shared workspaces (#5284, #5123), hindering parallel processing.
*   **Session Staleness & Memory Loss:** Lack of cross-session memory (#2492) and stale session titles (#5258) create a fragmented user experience.
*   **Configuration Accessibility:** Important runtime knobs are not discoverable or editable from the TUI, forcing users to manually edit config files (#3303).
*   **Credential & Security Precedence:** Issues with credential storage precedence and misleading save confirmations (#5197, #5195) cause confusion and potential security gaps.
*   **Tool Contract Rigidity:** Agent spawn surfaces are overly complex and prone to self-blocking due to read-only tool constraints (#5123).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*