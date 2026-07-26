# AI CLI Tools Community Digest 2026-07-26

> Generated: 2026-07-26 01:49 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Report: 2026-07-26

## 1. Ecosystem Overview
The AI CLI landscape in July 2026 is defined by a shift from basic code completion to complex, stateful agentic workflows. Stability and reliability have become the primary friction points, with cross-platform crashes (particularly on Windows) and session persistence bugs dominating community discourse. Simultaneously, there is a strong industry push toward standardization, evidenced by the surge in support for `AGENTS.md` and robust MCP integration, as tools compete to define the unified interface for multi-agent orchestration.

## 2. Activity Comparison

| Tool | Issues Tracked | PRs Merged/Active | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 5 | No new release |
| **OpenAI Codex** | 10 | 10 | Alpha Updates (`v0.146.0-alpha.10.1`) |
| **Gemini CLI** | 10 | 10 | Nightly Build (`v0.54.0-nightly`) |
| **GitHub Copilot** | 10 | 2 (Closed/Withdrawn) | No new release |
| **Kimi Code CLI** | 2 | 4 | No new release |
| **OpenCode** | 10 | 10 | No new release |
| **Pi** | 10 | 10 | Stable Release (`v0.82.1`) |
| **Qwen Code** | 10 | 10 | Nightly Build (`v0.21.0-nightly`) |
| **DeepSeek TUI** | 10 | 10 | No new release |

*Note: "Issues Tracked" reflects the number of high-engagement or critical items summarized in the digest. PR counts reflect significant engineering activity noted.*

## 3. Shared Feature Directions

*   **Agentic Standardization & Interoperability:**
    *   *Tools:* **Claude Code**, **Codex**, **Gemini CLI**, **Qwen Code**.
    *   *Need:* Universal adoption of `AGENTS.md` and standardized skill definitions. Users demand that configuration and agent behaviors are portable across tools, reducing vendor lock-in.
*   **Robust Session Persistence & State Management:**
    *   *Tools:* **Claude Code**, **Codex**, **Copilot CLI**, **Kimi Code**, **OpenCode**, **Pi**.
    *   *Need:* Reliable handling of long-running sessions, including task ID preservation, context compaction without data loss, and seamless resume capabilities. Current implementations frequently fail to restore state correctly after crashes or restarts.
*   **Advanced Context & Memory Control:**
    *   *Tools:* **Gemini CLI**, **OpenCode**, **Pi**, **Qwen Code**.
    *   *Need:* Granular control over token usage, including AST-aware file reading to reduce noise, protected memory directories (`pinned/`), and transparent quota metering. Users are actively seeking ways to prevent context window bloat during complex agentic loops.
*   **Cross-Platform Stability (Windows/Linux):**
    *   *Tools:* **Claude Code**, **Codex**, **Gemini CLI**, **OpenCode**, **Pi**.
    *   *Need:* Fixes for GPU process crashes (Windows), OAuth loop failures (Linux/Windows), and path normalization issues (WSL/Cross-platform). Stability is the #1 barrier to enterprise adoption.

## 4. Differentiation Analysis

*   **Enterprise & Infrastructure Focus:**
    *   **OpenAI Codex** and **Qwen Code** are heavily focused on infrastructure robustness, addressing network policies, sandbox runtime detection, and enterprise model compatibility (Azure/DashScope). They target users managing complex, secure, or hybrid-cloud environments.
    *   **OpenCode** emphasizes local-first performance and TUI flexibility, appealing to developers who prioritize offline capabilities and legacy UI preferences over cloud-heavy features.
*   **Agentic Architecture & Orchestration:**
    *   **Gemini CLI** is leading in sub-agent orchestration mechanics, with active development on SSR pipelines and deterministic redaction. It appeals to users building complex, multi-step automated workflows.
    *   **Pi** distinguishes itself with a strong focus on extensibility via extensions and durable external tool results, catering to power users who customize their agent behavior deeply.
*   **Accessibility & Localization:**
    *   **DeepSeek TUI** (CodeWhale) shows unique engagement with provider agnosticism and internationalization (HarmonyOS support, multi-language localization), targeting a global developer base and those using diverse, non-US-centric model providers.
    *   **Kimi Code CLI** focuses on mobile/cross-device continuity, offering a distinct value proposition for developers working across desktop and mobile interfaces.

## 5. Community Momentum & Maturity

*   **High Momentum / Rapid Iteration:** **Gemini CLI** and **Qwen Code** show high velocity with nightly builds and significant PR activity focused on core agentic logic. **OpenAI Codex** is also iterating rapidly with alpha releases, indicating an aggressive feature rollout phase.
*   **Stable but Troubled:** **Claude Code** and **GitHub Copilot CLI** have large, highly engaged communities (evidenced by high upvote counts on stability issues) but are currently hindered by critical regressions. Their maturity is evident in the sophistication of user feedback, though stability lags behind feature parity.
*   **Niche & Specialized:** **DeepSeek TUI** and **Pi** maintain dedicated communities focused on specific needs (provider neutrality/extensibility) rather than broad market dominance. **Kimi Code** has lower issue volume but high intent for specific use cases (remote control).

## 6. Trend Signals

*   **From Tool to Platform:** The industry is moving away from simple chat interfaces toward platform-like ecosystems. The demand for `AGENTS.md` standardization suggests a future where CLI tools act as frontends for a unified agent backend, similar to how browsers standardize web interaction.
*   **Trust Crisis in Automation:** The prevalence of "silent failures," session breaks, and credential leaks is eroding user trust. Successful tools will be those that provide transparent error states, robust recovery mechanisms, and clear billing/metering explanations.
*   **Performance at Scale:** As agents become more autonomous, resource management (CPU/RAM leaks, infinite loops) has become a critical differentiator. Tools like **OpenCode** and **Gemini CLI** are gaining traction by addressing these foundational performance issues.
*   **Developer Experience (DX) Parity:** The gap between IDE-integrated tools and standalone CLIs is narrowing. Users expect standalone CLIs to offer remote development support (**Codex**), advanced UI customization (**OpenCode**), and seamless cross-device sync (**Kimi**), mirroring the convenience of modern IDEs.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-07-26  
**Source:** `anthropics/skills` Repository Analysis

### 1. Top Skills Ranking
*Based on community discussion volume and PR activity.*

1.  **Skill Creator & Evaluation Framework Fixes**
    *   **Functionality:** Tools for generating, optimizing, and evaluating new Skills (`skill-creator`).
    *   **Discussion Highlights:** Intense focus on fixing critical bugs in `run_eval.py` where recall was stuck at 0% due to Windows encoding issues, subprocess pipe failures, and YAML parsing errors. Multiple PRs (#1298, #1099, #1323) target the same root cause: broken trigger detection.
    *   **Status:** Open (Critical Fixes Pending)
    *   **Links:** [PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1323](https://github.com/anthropics/skills/pull/1323)

2.  **Security & Trust Boundary Concerns**
    *   **Functionality:** Not a single skill, but a meta-concern regarding namespace abuse.
    *   **Discussion Highlights:** Issue #492 highlights a security risk where community skills impersonate official Anthropic skills under the `anthropic/` namespace, potentially tricking users into granting elevated permissions. This has generated significant debate on trust mechanisms.
    *   **Status:** Open (High Priority Security Issue)
    *   **Link:** [Issue #492](https://github.com/anthropics/skills/issues/492)

3.  **Document Typography & Quality Control**
    *   **Functionality:** Ensures high-quality output for generated documents by preventing orphan lines, widows, and numbering misalignments.
    *   **Discussion Highlights:** Users are demanding precise typographic control for professional document generation. The skill addresses common AI hallucination/formatting errors in long-form text.
    *   **Status:** Open
    *   **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

4.  **Frontend Design Skill Clarification**
    *   **Functionality:** Provides actionable guidelines for frontend development tasks within Claude Code.
    *   **Discussion Highlights:** The community pushed for clearer, more specific instructions that Claude can follow without ambiguity. The PR revises the skill to improve internal coherence and reduce token waste from vague directives.
    *   **Status:** Open
    *   **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

5.  **Testing Patterns Skill**
    *   **Functionality:** Comprehensive coverage of testing philosophies, unit tests, and React component testing.
    *   **Discussion Highlights:** Addresses the need for structured testing guidance beyond simple code snippets, covering edge cases and pure functions.
    *   **Status:** Open
    *   **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

### 2. Community Demand Trends
*Distilled from open Issues and feature requests.*

*   **Organizational Collaboration:** There is strong demand for **org-wide skill sharing** (Issue #228). Users find manual file distribution inefficient and request integrated libraries or direct sharing links within Claude.ai.
*   **Agent Governance & Safety:** Emerging interest in **AI agent safety patterns** (Issue #412), including policy enforcement, threat detection, and audit trails, suggesting a shift towards enterprise-grade reliability.
*   **Context Window Optimization:** Requests for **compact memory/symbolic notation** (Issue #1329) indicate users are struggling with context limits in long-running sessions and seek efficient state management.
*   **Cross-Platform Compatibility:** Persistent demand for better **Windows support** (Issues #1061, #1169) and **AWS Bedrock integration** (Issue #29), highlighting gaps in the current Unix-centric tooling.
*   **MCP Integration:** Interest in exposing Skills as **MCPs** (Issue #16) to standardize APIs for AI software components.

### 3. High-Potential Pending Skills
*Active PRs with significant technical depth, likely to be merged soon.*

1.  **Self-Audit & Reasoning Quality Gate**
    *   **Summary:** A universal skill that mechanically verifies output files and performs a four-dimension reasoning audit before delivery. It aims to catch errors across any tech stack.
    *   **Potential:** High impact on reliability; addresses the "hallucination" problem proactively.
    *   **Link:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

2.  **Color Expert Skill**
    *   **Summary:** Specialized knowledge for color naming systems (ISCC-NBS, Munsell, etc.) and spaces (OKLCH, OKLAB).
    *   **Potential:** Fills a niche gap in design/development workflows requiring precise color manipulation.
    *   **Link:** [PR #1302](https://github.com/anthropics/skills/pull/1302)

3.  **ODT Support Skill**
    *   **Summary:** Enables creation, filling, and parsing of OpenDocument Format (.odt, .ods) files.
    *   **Potential:** Expands compatibility beyond Microsoft Office formats, appealing to Linux/OpenOffice users.
    *   **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

4.  **DOCX Tracked Change Fix**
    *   **Summary:** Fixes corruption in DOCX files when adding tracked changes to documents with existing bookmarks.
    *   **Potential:** Critical fix for enterprise document workflows; likely to be merged quickly due to its bug-fix nature.
    *   **Link:** [PR #541](https://github.com/anthropics/skills/pull/541)

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust evaluation tooling and cross-platform stability**, as evidenced by the disproportionate attention on fixing the `skill-creator`'s broken Windows compatibility and zero-recall evaluation loops, which currently hinder the reliable creation and validation of new skills.

---

# Claude Code Community Digest: 2026-07-26

## 1. Today's Highlights
The community is heavily focused on standardizing agent configuration with a massive surge in support for `AGENTS.md` (Issue #6235), which now boasts over 4,400 upvotes. Simultaneously, users are reporting critical stability issues across the ecosystem, including GPU process crashes in the Desktop app (Issues #77768, #81275) and session state persistence bugs affecting task lists and daemon forks (Issues #76844, #73742).

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **Support AGENTS.md Standardization** (#6235)
    *   *Why it matters:* Aligns Claude Code with industry standards used by Codex, Cursor, and Amp, enabling better cross-tool collaboration.
    *   *Reaction:* Extremely high engagement; 4,451 👍 and 344 comments indicate this is the top priority for many developers.
    *   [Link](https://github.com/anthropics/claude-code/issues/6235)
*   **Desktop GPU Process Crashes on Web Research** (#77768)
    *   *Why it matters:* Recurring silent crashes kill the entire app during web research, disrupting workflow without recovery options.
    *   *Reaction:* 1 👍; affects Windows users significantly.
    *   [Link](https://github.com/anthropics/claude-code/issues/77768)
*   **Browser Pane Crash in Claude Desktop MSIX** (#81275)
    *   *Why it matters:* Opening the Cowork browser pane causes immediate application termination via GPU exit code `0x60C201E` across Intel, NVIDIA, and WARP drivers.
    *   *Reaction:* 0 👍; newly reported today, likely related to recent updates.
    *   [Link](https://github.com/anthropics/claude-code/issues/81275)
*   **Unauthorized Pro→Max Upgrade & Account Deletion Bug** (#68429)
    *   *Why it matters:* Reports a severe billing loop leading to permanent account/data deletion with no human escalation path.
    *   *Reaction:* 0 👍; marked invalid/stale but highlights critical trust issues.
    *   [Link](https://github.com/anthropics/claude-code/issues/68429)
*   **OAuth Loop: State Parameter Dropped** (#77966)
    *   *Why it matters:* Breaks authentication on Linux/IntelliJ after "sign in again" redirects, preventing login entirely.
    *   *Reaction:* 9 👍; affects multiple platforms.
    *   [Link](https://github.com/anthropics/claude-code/issues/77966)
*   **Task List IDs Not Restored on Resume** (#76844 & #80871)
    *   *Why it matters:* `TaskCreate`/`TaskList` IDs reset upon session resume (`--continue`), breaking long-running multi-day agentic workflows.
    *   *Reaction:* 1-2 👍 each; high impact for power users relying on persistent tasks.
    *   [Link](https://github.com/anthropics/claude-code/issues/76844) | [Link](https://github.com/anthropics/claude-code/issues/80871)
*   **Opus 4.8 Thinking Mode Translation Bug** (#79798)
    *   *Why it matters:* `alwaysThinkingEnabled` fails to translate to `thinking: {type: "adaptive"}`, causing sessions to run without thinking or error out on WebSearch.
    *   *Reaction:* 1 👍; specific to Opus 4.8 users.
    *   [Link](https://github.com/anthropics/claude-code/issues/79798)
*   **Fable 5 Self-Review Blind Spot** (#81178)
    *   *Why it matters:* Fable 5 model fails to self-review effectively in long agentic sessions, leading to potential quality drops in large PRs.
    *   *Reaction:* 0 👍; emerging issue with newer model versions.
    *   [Link](https://github.com/anthropics/claude-code/issues/81178)
*   **Quota Drain Anomaly (Cache Read Metering)** (#81234)
    *   *Why it matters:* Users report 53% of weekly quota consumed in 2 days, suspected due to aggressive `cache_read` metering rather than actual compute usage.
    *   *Reaction:* 1 👍; raises concerns about billing transparency.
    *   [Link](https://github.com/anthropics/claude-code/issues/81234)
*   **Subagent First Tool Call Hang** (#78313)
    *   *Why it matters:* Intermittent hang where subagents emit text but never execute the first tool call, causing parent sessions to wait forever.
    *   *Reaction:* 0 👍; critical for multi-agent reliability.
    *   [Link](https://github.com/anthropics/claude-code/issues/78313)

## 4. Key PR Progress
*   **Log Closed Issues as Closure Events in Statsig** (#81262)
    *   *Summary:* Fixes telemetry data accuracy by distinguishing between issue creation and closure events in Statsig analytics.
    *   [Link](https://github.com/anthropics/claude-code/pull/81262)
*   **Handle Worktree Paths with Spaces in /clean_gone** (#81261)
    *   *Summary:* Updates branch cleanup logic to correctly parse linked worktrees using `git for-each-ref` and `git worktree list`, fixing issues with paths containing spaces.
    *   [Link](https://github.com/anthropics/claude-code/pull/81261)
*   **Remove "Retro-Futuristic" Recommendation from Frontend Design Skill** (#39043)
    *   *Summary:* Removes outdated style guidance from the frontend design skill definition.
    *   [Link](https://github.com/anthropics/claude-code/pull/39043)
*   **Fix Python Import Paths for Hook Modules** (#15727)
    *   *Summary:* Resolves `No module named 'hookify'` errors by correcting import paths relative to `CLAUDE_PLUGIN_ROOT`.
    *   [Link](https://github.com/anthropics/claude-code/pull/15727)
*   **Extract Shared GitHub API Client** (#49596)
    *   *Summary:* Refactors code to extract shared GitHub API logic into `github-api.ts` with associated tests, improving maintainability.
    *   [Link](https://github.com/anthropics/claude-code/pull/49596)

## 5. Feature Request Trends
*   **Cross-Agent Standardization:** The overwhelming demand for `AGENTS.md` support signals a desire for Claude Code to integrate into a broader, standardized agent ecosystem rather than remaining siloed.
*   **Session Persistence & State Management:** Users frequently request robust handling of session resumes, specifically for task IDs, effort levels, and context visibility in multi-agent workflows.
*   **UI/UX Feedback Indicators:** Requests for visual cues during uploads ("Uploading..." status) and humorous feedback strings ("Hallucinating...") suggest a desire for more transparent and engaging UI states.
*   **Safety/Evaluation Exemptions:** Researchers are requesting clearer exemptions or flags for defensive security research to avoid false-positive safety blocks.

## 6. Developer Pain Points
*   **Stability & Crashes:** High-frequency reports of GPU process crashes in the Desktop app (especially on Windows) and silent app terminations during web research are severely impacting user trust.
*   **Authentication Flaws:** OAuth loops and stale credential files causing login failures are recurring frustrations, particularly on Linux and with environment variable overrides.
*   **Billing Transparency:** Users are confused by sudden quota drains attributed to cache reads, indicating a need for clearer metering explanations.
*   **Agentic Workflow Fragility:** Subagents hanging on initial tool calls and task ID resets on session resume make long-running, complex agentic tasks unreliable.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-07-26

## 1. Today's Highlights
The Codex team has released alpha updates for the Rust CLI (`v0.146.0-alpha.10.1`), while community attention remains heavily focused on Windows-specific stability issues, including process leaks and browser GPU crashes. Significant engineering progress is being made on MCP server recursion limits, network policy handling in exec-servers, and unbounded header mitigation to improve system robustness.

## 2. Releases
*   **Rust CLI Alpha Updates**: Two new alpha versions were released in the last 24 hours: `0.146.0-alpha.10` and `0.146.0-alpha.10.1`. These likely contain incremental fixes and feature flags for the upcoming stable release cycle.
    *   [Release v0.146.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10)
    *   [Release v0.146.0-alpha.10.1](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.10.1)

## 3. Hot Issues
These issues represent the highest community engagement and critical bug reports.

1.  **[Enhancement] Remote Development Support** (#10450)
    *   *Why it matters:* Users are requesting full remote development capabilities in the Desktop App to match VS Code parity.
    *   *Reaction:* Highly upvoted (690 👍) with 178 comments; a top-tier feature request.
    *   [Link](https://github.com/openai/codex/issues/10450)

2.  **[Bug] Python UV Fails in Codex Sandbox** (#1457)
    *   *Why it matters:* Breaks core tooling workflows using `uv` and `pre-commit` within the sandboxed environment.
    *   *Reaction:* 61 comments, 46 👍. Indicates persistent friction with modern Python toolchains.
    *   [Link](https://github.com/openai/codex/issues/1457)

3.  **[Bug] Windows Process Leak (taskkill/conhost)** (#33776)
    *   *Why it matters:* Spawns hundreds of orphaned processes causing WMI storms and DWM degradation on Windows.
    *   *Reaction:* 24 comments, 21 👍. Critical performance/stability issue for Windows users.
    *   [Link](https://github.com/openai/codex/issues/33776)

4.  **[Bug] Azure OpenAI JSON Schema Errors** (#30132)
    *   *Why it matters:* `oneOf` root schemas cause failures on Azure endpoints, blocking enterprise deployments.
    *   *Reaction:* 21 comments, 19 👍. Highlights compatibility gaps between standard and Azure models.
    *   [Link](https://github.com/openai/codex/issues/30132)

5.  **[Bug] Context Compaction Loses Operational Continuity** (#29356)
    *   *Why it matters:* Automatic compaction discards recent steps, breaking long-running multi-step tasks.
    *   *Reaction:* 20 comments. Concerns about state preservation in complex agent loops.
    *   [Link](https://github.com/openai/codex/issues/29356)

6.  **[Bug] MCP Server Process Leaks (9+ GB RSS)** (#30408)
    *   *Why it matters:* Orphaned MCP processes accumulate indefinitely, causing severe memory bloat.
    *   *Reaction:* 17 comments, 4 👍. A major resource management failure in the app-server.
    *   [Link](https://github.com/openai/codex/issues/30408)

7.  **[Bug] Windows Browser Screenshot Crashes GPU** (#34133)
    *   *Why it matters:* Taking screenshots via the in-app browser crashes the GPU process due to Code Integrity rejection of SwiftShader.
    *   *Reaction:* 14 comments. Specific but severe Windows rendering bug.
    *   [Link](https://github.com/openai/codex/issues/34133)

8.  **[Bug] VS Code Diff Tab Crash** (#35058)
    *   *Why it matters:* The "Codex Diff" tab in VS Code shows an error immediately after edits, breaking the review workflow.
    *   *Reaction:* 12 comments, 11 👍. High visibility UI bug for IDE users.
    *   [Link](https://github.com/openai/codex/issues/35058)

9.  **[Bug] Windows Spellcheck "No Guesses Found"** (#26478)
    *   *Why it matters:* Spellcheck detects errors but provides no suggestions, frustrating proofreading.
    *   *Reaction:* 12 comments, 23 👍. Recurring usability issue across multiple Windows builds.
    *   [Link](https://github.com/openai/codex/issues/26478)

10. **[Bug] GPT-5.6 Sol Tool Call Failures** (#31864)
    *   *Why it matters:* MultiAgentV2 uses reserved tools incorrectly, causing immediate request failures for GPT-5.6 Sol sessions.
    *   *Reaction:* 6 comments, 14 👍. Blocks advanced model usage patterns.
    *   [Link](https://github.com/openai/codex/issues/31864)

## 4. Key PR Progress
Recent merges and open PRs driving platform stability and API improvements.

1.  **Raise MCP Server Recursion Limit** (#35414)
    *   Sets Rust recursion limit to 256 for MCP crates, preventing stack overflows in deep tool-calling chains.
    *   [Link](https://github.com/openai/codex/pull/35414)

2.  **Handle Exec-Server Network Policy Requests** (#35359)
    *   Implements client-side validation and routing for network policies (allow/deny/ask), enhancing security controls.
    *   [Link](https://github.com/openai/codex/pull/35359)

3.  **Bound Code Mode Metadata Headers** (#35364)
    *   Prevents unbounded growth of HTTP/WebSocket headers by omitting `code_mode_tool_names` from compatibility headers.
    *   [Link](https://github.com/openai/codex/pull/35364)

4.  **Bound Stdio JSON-RPC Frame Size** (#31782)
    *   Introduces a 64 MiB ceiling for stdio frames to prevent memory exhaustion from misbehaving exec-servers.
    *   [Link](https://github.com/openai/codex/pull/31782)

5.  **Expose Thread-Selected Skills** (#31582)
    *   Updates `skills/list` API to include skills selected by the executor capability roots, improving client awareness.
    *   [Link](https://github.com/openai/codex/pull/31582)

6.  **Notify Clients on Skill Changes** (#30228)
    *   Adds invalidation signals when thread-selected environments change state (ready/recover/fail).
    *   [Link](https://github.com/openai/codex/pull/30228)

7.  **Plumb Application Paths on Windows** (#29845)
    *   Prepares Windows launchers for unified-exec resolution by coupling argv with resolved executable paths.
    *   [Link](https://github.com/openai/codex/pull/29845)

8.  **Pipeline Ancestor Discovery Performance** (#31810)
    *   Optimizes remote project startup by parallelizing AGENTS and `.agents/skills` directory discovery.
    *   [Link](https://github.com/openai/codex/pull/31810)

9.  **Make Keymap Action Menu Responsive** (#35375)
    *   Improves TUI UX by stacking descriptions below labels in narrow terminals.
    *   [Link](https://github.com/openai/codex/pull/35375)

10. **Keep Unified Mention Results Fresh** (#35365)
    *   Restarts file search on popup open to avoid stale query states in mention suggestions.
    *   [Link](https://github.com/openai/codex/pull/35365)

## 5. Feature Request Trends
*   **Remote Development Parity:** There is a strong demand for first-class remote development support in the Desktop App (#10450), mirroring existing VS Code capabilities.
*   **Usage Visibility:** Users want persistent display of rate limits (5-hour/weekly) in the app status bar (#32195) to better manage Pro/Plus quotas.
*   **Context Control:** Requests to preserve operational continuity during context compaction (#29356) suggest a need for more granular control over what gets truncated in long sessions.

## 6. Developer Pain Points
*   **Windows Stability & Resource Leaks:** A significant cluster of high-severity bugs affects Windows users, including MCP process leaks (#30408), `taskkill.exe` storms (#33776), and GPU crashes during screenshot capture (#34133).
*   **Context Management & Token Waste:** Users report excessive token consumption and credit waste due to context compaction loops (#35226) and image-heavy task replays (#33235), leading to inefficient cost structures.
*   **Toolchain Compatibility:** Friction persists with specific developer tooling, notably Python `uv` failing in sandboxes (#1457) and Azure OpenAI schema incompatibilities (#30132).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-07-26

### 1. Today's Highlights
The Gemini CLI team released nightly build `v0.54.0-nightly.20260726`, continuing the push toward robust sub-agent orchestration and security hardening. Significant community attention is focused on resolving critical agent hangs, particularly within the browser and generalist sub-agents, while developers are actively contributing to a new SSR Code Generation Pipeline infrastructure.

### 2. Releases
*   **v0.54.0-nightly.20260726.g3818efbbf**: A nightly release incorporating changelogs for `v0.53.0-preview.0` and `v0.52.0`. This build focuses on stabilizing the recent preview features and maintaining version parity with internal rollouts.
    *   [View Release](https://github.com/google-gemini/gemini-cli/pull/28536)

### 3. Hot Issues
These issues reflect high community engagement and critical stability concerns.

1.  **[BUG] Subagent recovery after MAX_TURNS** (#22323)
    *   **Why it matters:** The `codebase_investigator` incorrectly reports success when hitting turn limits, masking failures.
    *   **Reaction:** 12 comments, 2 👍. Critical for debugging complex agent workflows.
2.  **[BUG] Generalist agent hangs forever** (#21409)
    *   **Why it matters:** Simple tasks like folder creation cause infinite hangs when deferring to the generalist agent.
    *   **Reaction:** 8 comments, 8 👍. High frustration due to blocking core functionality.
3.  **[ENHANCEMENT] Zero-Dependency OS Sandboxing** (#19873)
    *   **Why it matters:** Proposes leveraging model's bash affinity for secure, native execution without external dependencies.
    *   **Reaction:** 8 comments. Represents a major architectural shift in security/UX.
4.  **[EVAL] Robust component level evaluations** (#24353)
    *   **Why it matters:** Tracks progress on behavioral evals (76 tests generated) to ensure agent reliability across supported models.
    *   **Reaction:** Internal focus, but vital for quality assurance.
5.  **[INVESTIGATION] AST-aware file reads/search** (#22745)
    *   **Why it matters:** Investigating if AST tools can reduce token noise and improve codebase mapping precision.
    *   **Reaction:** 7 comments. Potential efficiency gain for large repos.
6.  **[BUG] Gemini does not use skills/sub-agents enough** (#21968)
    *   **Why it matters:** Anecdotal evidence suggests the main agent ignores custom skills unless explicitly prompted, undermining modularity.
    *   **Reaction:** 6 comments. Highlights a gap in prompt engineering or tool selection logic.
7.  **[BUG] Auto Memory retries low-signal sessions** (#26522)
    *   **Why it matters:** Inefficient resource usage as the memory system gets stuck re-evaluating irrelevant sessions.
    *   **Reaction:** 5 comments. Impacts performance and context window hygiene.
8.  **[SECURITY] Deterministic redaction & logging reduction** (#26525)
    *   **Why it matters:** Addresses privacy concerns by ensuring secrets are redacted *before* entering model context in Auto Memory.
    *   **Reaction:** 4 comments. Critical for enterprise adoption.
9.  **[BUG] Shell command stuck "Waiting input"** (#25166)
    *   **Why it matters:** Simple CLI commands hang indefinitely, requiring manual cancellation.
    *   **Reaction:** 4 comments, 3 👍. Recurring pain point for terminal users.
10. **[BUG] Browser Agent fails in Wayland** (#21983)
    *   **Why it matters:** Linux users on Wayland experience immediate failure of the browser sub-agent.
    *   **Reaction:** 4 comments, 1 👍. Platform-specific compatibility issue.

### 4. Key PR Progress
Significant work is underway in security, performance, and new pipeline infrastructure.

1.  **[FIX] Bound shell command output** (#28401)
    *   **Impact:** Prevents context window overflow from verbose commands (`find /`, large logs), improving token efficiency and response quality.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28401)
2.  **[FIX] Refresh MCP OAuth tokens with stored client ID** (#28481)
    *   **Impact:** Fixes credential deletion loops during OAuth refresh for dynamic MCP servers, restoring seamless authentication.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28481)
3.  **[FIX] CI: Retry staging-tmp dist-tag removal** (#28534)
    *   **Impact:** Resolves nightly release failures caused by race conditions in npm dist-tag management.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28534)
4.  **[FIX] Performance test setup using resolveRipgrepPath** (#28535)
    *   **Impact:** Updates perf tests to match current API, preventing false negatives in benchmarking.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28535)
5.  **[SECURITY] Prevent path traversal in A2A restore** (#28353 - Merged)
    *   **Impact:** Closes a defense-in-depth vulnerability allowing arbitrary file reads via symlink attacks in checkpoint restoration.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28353)
6.  **[FIX] Resolve MaxListenersExceededWarning & auth loops** (#28348 - Merged)
    *   **Impact:** Fixes critical stability issues on Windows involving infinite OAuth loops and event listener leaks.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28348)
7.  **[FEAT] SSR Pipeline: Environment Config Parser** (#28435)
    *   **Impact:** Introduces foundational utilities for the new Issue-to-PR generation pipeline, including GitHub API integration.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28435)
8.  **[FEAT] SSR Pipeline: Bug-fixing State Machine** (#28433)
    *   **Impact:** Implements the orchestrator layer for iterative AI coding, ESLint analysis, and diff verification.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28433)
9.  **[FEAT] SSR Pipeline: Antigravity Agent Runner** (#28434)
    *   **Impact:** Adds prompt templates and runner logic for headless agents in the code generation pipeline.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28434)
10. **[FEAT] SSR Pipeline: Firestore Dual-Locking** (#28432)
    *   **Impact:** Provides transactional locking and state management for concurrent AI agent operations in the new pipeline.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28432)

### 5. Feature Request Trends
*   **AST-Aware Tooling:** Multiple issues (#22745, #22746) indicate strong interest in using Abstract Syntax Tree parsers for more precise codebase navigation and reduced token waste.
*   **Enhanced Agent Visibility:** Requests for better transparency into sub-agent trajectories (#22598) and bug reports (#21763) suggest users want deeper observability into multi-step agent reasoning.
*   **Security & Sandboxing:** Growing demand for zero-dependency sandboxing (#19873) and stricter secret redaction (#26525) reflects enterprise security concerns.
*   **Auto Memory Optimization:** Users are requesting smarter handling of memory inbox patches (#26523) and session processing to prevent inefficiencies.

### 6. Developer Pain Points
*   **Agent Hangs & Infinite Loops:** The most frequent complaint involves agents getting stuck—whether the generalist agent hanging (#21409), shell commands waiting for non-existent input (#25166), or browser agents failing on specific OS environments (#21983).
*   **Sub-Agent Reliability:** There is consistent friction regarding sub-agents ignoring settings (#22267), running without permission (#22093), or failing to trigger appropriately (#21968).
*   **Context Management:** Users are frustrated by unbounded command outputs consuming context windows (#28401 discussion) and models creating messy temporary scripts (#23571).
*   **Platform Compatibility:** Specific failures on Wayland (#21983) and Windows auth loops (#28348) highlight ongoing cross-platform stability challenges.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-26

## 1. Today's Highlights
The community is currently focused on significant stability regressions in version 1.0.74/1.0.75, particularly regarding session memory management and configuration persistence bugs that are causing OOM errors and settings overwrites. Additionally, there is growing frustration with terminal rendering issues and plugin marketplace registration failures, which are impacting daily developer workflows.

## 2. Releases
No new releases were published in the last 24 hours. However, users are reporting critical regressions in recent versions (1.0.74 and 1.0.75), specifically concerning session resume performance and context window handling.

## 3. Hot Issues
*   **[OPEN] #4251: Resume of a large session OOMs / grinds one CPU core for ~70 min in 1.0.74**
    *   **Why it matters:** A severe regression where resuming long-lived sessions causes Out-Of-Memory errors or extreme CPU usage, effectively breaking workflow continuity.
    *   **Community Reaction:** High concern due to data loss risk and time wasted debugging.
    *   **Link:** [github/copilot-cli Issue #4251](https://github.com/github/copilot-cli/issues/4251)

*   **[OPEN] #4183: Auto-compaction does not prevent CAPI 5 MB failure from accumulated normal tool history**
    *   **Why it matters:** Despite token limits, the serialized request body hits the 5MB API limit, causing permanent session failure. This indicates a flaw in how context compression handles tool output vs. text.
    *   **Community Reaction:** Developers report stuck sessions that cannot be recovered without restarting.
    *   **Link:** [github/copilot-cli Issue #4183](https://github.com/github/copilot-cli/issues/4183)

*   **[OPEN] #4252: Session exit writes launch-time `model` back to settings.json, silently reverting edits**
    *   **Why it matters:** A self-perpetuating bug where changing the model mid-session and then exiting reverts the global config, forcing users to repeatedly change their default model.
    *   **Community Reaction:** Frustration with silent data corruption of user preferences.
    *   **Link:** [github/copilot-cli Issue #4252](https://github.com/github/copilot-cli/issues/4252)

*   **[OPEN] #2205: Usability issue - scroll in terminal (Terminator)**
    *   **Why it matters:** Mouse scrolling behavior changed, navigating input history instead of agent output history, which breaks natural reading patterns in terminal emulators like Terminator.
    *   **Community Reaction:** 14 👍; considered a major usability regression.
    *   **Link:** [github/copilot-cli Issue #2205](https://github.com/github/copilot-cli/issues/2205)

*   **[OPEN] #1464: Skills beyond alphabetical position ~32 appear unreachable when many skills are installed**
    *   **Why it matters:** Token limits in the system prompt truncate the skill list, making higher-alphabetical-index skills invisible to the AI, reducing the utility of extensive skill libraries.
    *   **Community Reaction:** 5 👍; affects power users with large custom skill sets.
    *   **Link:** [github/copilot-cli Issue #1464](https://github.com/github/copilot-cli/issues/1464)

*   **[OPEN] #1996: Unable to install anthropics/claude-plugins-official marketplace: Invalid marketplace.json**
    *   **Why it matters:** Schema validation errors prevent installation of official third-party marketplaces, blocking access to new models/plugins.
    *   **Community Reaction:** Blocks adoption of new Anthropic integrations via CLI.
    *   **Link:** [github/copilot-cli Issue #1996](https://github.com/github/copilot-cli/issues/1996)

*   **[OPEN] #4246: archive_session times out after 60 seconds and leaves large worktrees orphaned**
    *   **Why it matters:** Cleanup processes fail on large repositories, leaving orphaned worktrees that consume disk space and prevent session reuse.
    *   **Community Reaction:** Concerns about disk hygiene and resource leaks.
    *   **Link:** [github/copilot-cli Issue #4246](https://github.com/github/copilot-cli/issues/4246)

*   **[OPEN] #4247: plugin marketplace add reports success but registration is not persisted**
    *   **Why it matters:** Silent failure in plugin installation commands leads to confusion as tools appear installed but are immediately unavailable.
    *   **Community Reaction:** Annoyance at misleading feedback loops.
    *   **Link:** [github/copilot-cli Issue #4247](https://github.com/github/copilot-cli/issues/4247)

*   **[OPEN] #4241: Password masking feature fails to mask passwords from agents and makes them use extra tokens**
    *   **Why it matters:** Security feature bypasses cause the agent to attempt parsing masked content, wasting tokens and potentially exposing sensitive data logic.
    *   **Community Reaction:** Security-conscious developers are concerned about the reliability of masking.
    *   **Link:** [github/copilot-cli Issue #4241](https://github.com/github/copilot-cli/issues/4241)

*   **[OPEN] #4248: `/pr` does not recognize GitHub repositories that use SSH host aliases**
    *   **Why it matters:** Users with custom SSH configs (`~/.ssh/config`) cannot use the `/pr` command, limiting functionality for enterprise or complex git setups.
    *   **Community Reaction:** 0 comments but high relevance for non-standard git configurations.
    *   **Link:** [github/copilot-cli Issue #4248](https://github.com/github/copilot-cli/issues/4248)

## 4. Key PR Progress
*   **#23: Create monad.yml** (Closed)
    *   **Status:** Withdrawn/Closed.
    *   **Summary:** Proposed workflow file for design and technology standards.
    *   **Link:** [github/copilot-cli PR #23](https://github.com/github/copilot-cli/pull/23)

*   **#4228: Withdrawn: incorrect scope for #3534** (Closed)
    *   **Status:** Withdrawn.
    *   **Summary:** PR withdrawn because it modified documentation instead of the private clipboard runtime implementation. Source branch deleted.
    *   **Link:** [github/copilot-cli PR #4228](https://github.com/github/copilot-cli/pull/4228)

*(Note: No other open PRs were provided in the source data for this digest period.)*

## 5. Feature Request Trends
*   **Improved Context Management:** Strong demand for better handling of large sessions, including robust auto-compaction that respects API body size limits (5MB) rather than just token counts.
*   **Terminal UX Enhancements:** Requests for more intuitive mouse interactions in terminal renderers, specifically separating scroll history navigation from input history navigation.
*   **Robust Plugin/Marketplace Integration:** Need for persistent registration of plugins and marketplaces, ensuring that installation commands provide accurate feedback and that schema validations do not block legitimate official plugins.
*   **Session Persistence & Configuration Safety:** Desire for safer configuration handling that prevents accidental overwrites of user settings during session exits or switches.

## 6. Developer Pain Points
*   **Regression in Performance/Memory:** The OOM and CPU grinding issues in v1.0.74 are the most acute pain point, disrupting long-running development sessions.
*   **Silent Failures:** Multiple issues (#4247, #4252) highlight a pattern where the CLI reports success or operates silently while failing to persist state or correctly apply changes, leading to trust issues in the tool's reliability.
*   **Configuration Fragility:** The interaction between session-local settings and global `settings.json` is causing unintended side effects, requiring manual intervention to maintain desired states.
*   **Compatibility with Complex Setups:** Issues with SSH aliases (#4248) and specific terminal emulators (#2205) suggest the CLI does not yet fully support diverse or enterprise-grade developer environments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-26
**Source:** github.com/MoonshotAI/kimi-cli

### 1. Today's Highlights
The repository saw significant activity in session state management, with three critical bug fixes merged today addressing context truncation, stale system prompts, and file upload persistence issues following server restarts. Additionally, a new feature request for remote session control gained substantial community traction, highlighting a strong demand for cross-device workflow continuity.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **[Feature] Remote Control - Continue local sessions from any device (#1282)**
    *   **Why it matters:** Enables seamless transition between desktop and mobile/tablet devices, allowing users to maintain context without losing their local environment setup.
    *   **Community Reaction:** Highly popular with 16 👍 and 8 comments, indicating strong user desire for mobility.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1282)

*   **[Bug] Dead Loop (#2557)**
    *   **Why it matters:** Reports a critical infinite loop in version 1.44.0 under the Kimi Code subscription, potentially blocking development workflows entirely.
    *   **Community Reaction:** New report (created yesterday), currently awaiting investigation.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2557)

*(Note: Only 2 open issues were recorded in the last 24h.)*

### 4. Key PR Progress
*   **fix(session): align fork/undo context truncation to wire turns (#2520)**
    *   **Status:** Closed
    *   **Impact:** Resolves history mismatches after forks/undos (#2049) and fixes slash-turn shifting issues (#1974). Ensures consistency between wire turns and context turns.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2520)

*   **fix(app): refresh stale frozen system prompt on session resume (#2519)**
    *   **Status:** Closed
    *   **Impact:** Fixes an issue where skills added to `~/.kimi/skills/` or edits to `AGENTS.md` were ignored when resuming existing sessions. Critical for dynamic agent configuration.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2519)

*   **fix(web): persist uploads .sent marker so restarts do not re-send files (#2518)**
    *   **Status:** Closed
    *   **Impact:** Prevents session pollution by stopping the re-sending of previously uploaded images/files after a server restart. Directly addresses regression #2413.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2518)

*   **fix(tests): improve Windows cross-platform test compatibility (#2558)**
    *   **Status:** Open
    *   **Impact:** Addresses line-ending conversion issues (`\n` vs `\r\n`) in `test_background_tools.py` on Windows, ensuring reliable CI/CD execution for Windows developers.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2558)

*(Note: Only 4 PRs were recorded in the last 24h.)*

### 5. Feature Request Trends
*   **Cross-Device Continuity:** The top requested feature is "Remote Control," suggesting users want to treat their local CLI as a headless backend accessible via web/mobile clients.
*   **Dynamic Configuration Persistence:** Recent bug fixes highlight a trend where users expect runtime changes (new skills, updated docs) to persist across session resumes without manual intervention.

### 6. Developer Pain Points
*   **Session State Inconsistency:** Multiple recent issues (#2519, #2518, #2520) point to fragility in how the CLI handles state transitions between sessions, forks, and restarts. Developers are frustrated by stale prompts and duplicate file uploads.
*   **Platform-Specific Test Failures:** The need for Windows-specific test fixes (#2558) indicates ongoing friction in maintaining cross-platform compatibility within the test suite.
*   **Stability Under Load:** The "Dead Loop" report (#2557) suggests potential stability risks in the core execution engine under specific subscription configurations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-07-26

## 1. Today's Highlights
The community is currently grappling with significant performance regressions in recent versions, specifically high CPU usage and desktop freezes on Windows, which have drawn intense discussion. Meanwhile, the development team is actively refining the TUI experience with new startup progress indicators and fixing critical session management bugs, while users continue to advocate for UI layout flexibility and offline tooling support.

## 2. Releases
No new releases were published in the last 24 hours. The most recent stable version referenced in bug reports is Desktop v1.18.5.

## 3. Hot Issues
*   **[Performance] High CPU usage in newer versions of OpenCode** [#30086](https://github.com/anomalyco/opencode/issues/30086)
    *   **Why it matters:** Users report dramatic CPU spikes causing system lag after recent updates, severely impacting multi-session workflows.
    *   **Reaction:** 36 comments, 19 upvotes. High engagement indicates widespread impact.
*   **[UX] Keep legacy layout option** [#37012](https://github.com/anomalyco/opencode/issues/37012)
    *   **Why it matters:** A strong sentiment exists among power users that the new UI navigation is less efficient than the legacy layout, particularly regarding workspace access.
    *   **Reaction:** 33 comments, 31 upvotes. Strong community support for maintaining backward compatibility.
*   **[Bug] UnsupportedContentType error on project reload (Desktop v1.18.5)** [#38789](https://github.com/anomalyco/opencode/issues/38789)
    *   **Why it matters:** A regression in v1.18.5 prevents projects from reloading correctly, blocking daily work for affected users.
    *   **Reaction:** 7 comments. Recent onset suggests a specific patch issue.
*   **[Bug] Desktop freezes when closing a project on Windows 11** [#38885](https://github.com/anomalyco/opencode/issues/38885)
    *   **Why it matters:** Critical stability issue on Windows where closing projects causes total UI freeze, requiring hard resets.
    *   **Reaction:** 2 comments. Confirmed reproducible even after clean reinstall.
*   **[Bug] Core: long-lived V2 server enters persistent allocation loop** [#36677](https://github.com/anomalyco/opencode/issues/36677)
    *   **Why it matters:** Memory leak/CPU loop in `opencode2 serve` consuming ~1GB RSS, indicating instability in long-running headless deployments.
    *   **Reaction:** 3 comments. Technical severity is high for server users.
*   **[Bug] TUI input area covered by black rectangle during heavy tool-call** [#38773](https://github.com/anomalyco/opencode/issues/38773)
    *   **Why it matters:** Visual rendering bug in v2 TUI blocks text entry during complex agent operations, degrading usability.
    *   **Reaction:** 2 comments. Specific to heavy reasoning loads.
*   **[Bug] Run loop can never exit when message ids are not time-sortable** [#38791](https://github.com/anomalyco/opencode/issues/38791)
    *   **Why it matters:** Logic error in `SessionPrompt.runLoop` causes infinite loops when importing sessions with non-standard ID formats, leading to provider 400 errors.
    *   **Reaction:** 3 comments. Affects data migration and third-party integrations.
*   **[Bug] Windows Desktop installer is broken offline** [#34442](https://github.com/anomalyco/opencode/issues/34442)
    *   **Why it matters:** Core tools (`grep`, `glob`) fail if `ripgrep` is missing, breaking functionality for air-gapped or offline Windows users.
    *   **Reaction:** 2 comments, 3 upvotes. Highlighting dependency management gaps.
*   **[Bug] Internal Server Error / Request Timeout for managed models** [#38874](https://github.com/anomalyco/opencode/issues/38874)
    *   **Why it matters:** Widespread service outage for OpenCode-managed models (DeepSeek variants) starting July 25, affecting both free and Go tiers.
    *   **Reaction:** 2 comments. Indicates infrastructure instability.
*   **[Bug] Mouse selection unreliable in opentui** [#15760](https://github.com/anomalyco/opencode/issues/15760)
    *   **Why it matters:** Regression in text selection behavior makes copying CLI output frustratingly difficult.
    *   **Reaction:** 9 comments. Long-standing pain point resurfacing.

## 4. Key PR Progress
*   **[Feature] Add progress bar to TUI startup screen** [#38906](https://github.com/anomalyco/opencode/pull/38906)
    *   Addresses user concerns about "frozen" startup screens by adding staged progress feedback for terminal, settings, and plugins.
*   **[Feature] Add roll-call command** [#38433](https://github.com/anomalyco/opencode/pull/38433)
    *   Introduces `/roll-call` for testing model connectivity and latency across multiple providers simultaneously.
*   **[Fix] Resolve keyboard deadlock in question mode** [#36550](https://github.com/anomalyco/opencode/pull/36550)
    *   Fixes mutual exclusivity issues in `QuestionPrompt` bindings that caused unresponsive keys in TUI.
*   **[Feature] Add Dynamic workflows** [#29789](https://github.com/anomalyco/opencode/pull/29789)
    *   Implements project-local workflows executable via `/workflow <name>`, enhancing automation capabilities within the TUI.
*   **[Fix] Defer auto-compaction until next model input** [#38901](https://github.com/anomalyco/opencode/pull/38901)
    *   Corrects timing logic for context compaction to prevent premature truncation or errors during assistant steps.
*   **[Feature] Route ChatGPT OAuth inference via codexApiEndpoint** [#38903](https://github.com/anomalyco/opencode/pull/38903)
    *   Allows users to configure custom endpoints for ChatGPT Plus/Pro OAuth flows, improving flexibility for enterprise or proxy setups.
*   **[Fix] Restore timeline scroll position** [#33943](https://github.com/anomalyco/opencode/pull/33943)
    *   Persists viewport offset across tab switches and reloads, significantly improving navigation continuity in long sessions.
*   **[Fix] Prevent crash with thousands of untracked files** [#33927](https://github.com/anomalyco/opencode/pull/33927)
    *   Stabilizes the VCS layer to handle large repositories without crashing the application.
*   **[Refactor] Distinguish published event durability** [#33930](https://github.com/anomalyco/opencode/pull/33930)
    *   Improves internal schema handling for events, separating pre-commit payloads from published ones for better reliability.
*   **[Fix] Ignore bare slash autocomplete submit** [#33904](https://github.com/anomalyco/opencode/pull/33904)
    *   Fixes a UX bug where pressing Enter on a bare `/` accidentally submitted the first autocomplete suggestion (`/agents`).

## 5. Feature Request Trends
*   **UI/Layout Flexibility:** There is a strong demand for retaining the legacy UI layout (#37012, #38875) and improving font size adjustability (#38884). Users find the new navigation less intuitive.
*   **Offline/Air-Gapped Support:** Requests for bundling core dependencies like `ripgrep` (#34442) highlight a need for robust offline functionality, especially for enterprise environments.
*   **Subscription & Billing Options:** Suggestions for annual plans and invoice support (#20252) indicate a desire for easier procurement processes for corporate users.
*   **Advanced Session Management:** Features like forcing immediate reading of queued messages (#24298) and displaying session names in the TUI status bar (#38881) show a need for finer control over agent interaction flow.

## 6. Developer Pain Points
*   **Performance Regressions:** The most critical pain point is the sudden increase in CPU and memory usage in recent versions (#30086, #36677), which users attribute directly to the latest updates.
*   **Windows Stability:** Multiple reports of freezing, crashing, and UI bugs specific to the Windows Desktop environment (#38885, #38789, #34442) suggest platform-specific testing gaps.
*   **Session Import/ID Handling:** The assumption that message IDs are always timestamp-sorted is causing infinite loops in imported sessions (#38791), breaking workflows for users migrating data from other tools.
*   **Service Reliability:** Frequent "Internal Server Error" and timeout issues for managed models (#38874) create friction for users relying on OpenCode's default API proxies.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-07-26

## 1. Today's Highlights
The Pi coding agent has released **v0.82.1**, introducing support for **Claude Opus 5** on Anthropic and Amazon Bedrock with adaptive thinking capabilities. Community attention is heavily focused on stability improvements, particularly regarding session compaction errors with Copilot Enterprise, TUI rendering performance bottlenecks, and fixes for cross-platform path handling in WSL environments.

## 2. Releases
*   **v0.82.1**: Released with key feature additions for Claude Opus 5 (adaptive thinking, `xhigh`, inference profiles, prompt caching) available via Anthropic and Amazon Bedrock. See [Providers Documentation](https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/docs/providers.md#api-keys).

## 3. Hot Issues
*   **#6768: Compaction using Copilot Enterprise not possible** [OPEN] - Users report `421 Misdirected Request` errors during context compaction when using Copilot Enterprise licenses. High community interest (11 👍) suggests a widespread compatibility gap.
*   **#6665: TUI pins a full core while streaming** [OPEN] - A significant performance bug where long sessions cause 100% CPU usage on one core due to uncached `Intl.Segmenter` calls in the Markdown renderer.
*   **#4877: Session folder collision** [CLOSED] - Addressed a logic error where distinct file paths resulted in identical session folder names (e.g., `/a/b/c/d` vs `/a-b/c-d`), potentially causing data confusion.
*   **#6050: TUI full redraw clears terminal scrollback** [CLOSED] - Fixed an issue where active rendering caused the terminal scrollbar to jump, disrupting user workflow during interactive mode.
*   **#5990: TUI flickers when dialog content exceeds height** [OPEN] - Reports continuous screen flickering when built-in dialogs are taller than the terminal viewport, impacting UX stability.
*   **#7090: Regenerate shrinkwrap with brace-expansion 5.0.8+** [CLOSED] - Resolved a critical security vulnerability (`CVE-2026-14257`) in `minimatch` dependencies that could lead to memory-exhaustion DoS attacks.
*   **#7020: Sometimes Pi doesn't continue after compaction** [OPEN] - Long-running "coordinator" sessions experience interruptions post-compaction, indicating potential state management issues in extended workflows.
*   **#6948: llama.cpp provider default model race condition** [CLOSED] - Fixed a bug where the specified default model in `settings.json` was not applied at startup due to async model refresh races.
*   **#7064: WSL absolute windows paths mishandled** [OPEN] - Tool execution failures (`read`, `write`, `edit`) occur in WSL2 environments due to incorrect path normalization between Windows and Linux filesystems.
*   **#7048: Compaction summary truncated mid-word** [OPEN] - Identified a bug where summarization hits token caps without checking `stopReason`, resulting in persistently truncated JSON summaries.

## 4. Key PR Progress
*   **#7118: Expose extension context clear callback** [CLOSED] - Enables extensions to clear session context without generating a summary, facilitating safe handoffs for tools like Mecha.
*   **#7117: Add extension creation eval** [OPEN] - Introduces a focused `AgentSession` adapter for `vitest-evals` to test extension creation, reloading, and invocation in isolation.
*   **#7116: Truncate over-width lines instead of crashing** [CLOSED] - Prevents TUI session crashes caused by unhandled errors when rendered lines exceed terminal width, improving robustness for permission systems.
*   **#7114: Manual redirect URL fallback for OpenRouter OAuth** [OPEN] - Adds support for manual pasting of callback URLs, enabling OpenRouter login flows to work over SSH and headless environments.
*   **#7112: Normalize path separators in footer** [CLOSED] - Fixes cross-platform display issues in the terminal footer by standardizing path separators to forward slashes (`/`) on Windows.
*   **#7111: Support durable external tool results** [OPEN] - Implements a flow for persistent external tool results, allowing agents to wait for typed results from outside the running process without fabricating messages.
*   **#7110: Prevent duplicate messages after startup switch** [OPEN] - Addresses a bug where switching models immediately after startup could result in duplicated message entries in the session history.
*   **#7106: Exclude directories from resource loader** [CLOSED] - Fixes warnings related to illegal operations on directories by ensuring the resource loader only processes files.
*   **#7091: Reject overlapping user bash commands** [CLOSED] - Enhances RPC safety by preventing race conditions when users send multiple bash commands simultaneously.
*   **#7081: Support Claude Opus 5 on Bedrock** [CLOSED] - Configures adaptive thinking requirements for Opus 5 on AWS Bedrock and improves error message masking for validation errors.

## 5. Feature Request Trends
*   **Extensibility & Handoffs**: Strong demand for better extension APIs, specifically regarding context clearing (#7118), durable tool results (#7111), and evaluation harnesses (#7117).
*   **Cost Transparency**: Requests for visual cost previews in the model selector (#7101) and accurate pricing for routing aliases and long-context tiers (#7109, #7102).
*   **Configuration Flexibility**: Users are requesting configurable truncation limits for tool outputs (#7066) to optimize context usage for local models.
*   **Remote Authentication**: Need for manual OAuth callback handling (#7114) to support headless/SSH workflows.

## 6. Developer Pain Points
*   **Session State Integrity**: Recurring issues with session continuation after compaction (#7020), mid-session model switches breaking contexts (#7067, #7065), and duplicate messages (#7110).
*   **TUI Stability**: Performance bottlenecks causing high CPU usage (#6665), visual flickering (#5990), and crashes on wide output (#7116) indicate ongoing challenges with the terminal UI renderer.
*   **Cross-Platform Path Handling**: Persistent bugs in WSL (#7064) and Windows path normalization (#7112) highlight friction in maintaining consistent behavior across operating systems.
*   **Provider Compatibility**: Errors with specific enterprise licenses (Copilot Enterprise #6768) and custom providers ignoring base URLs (#7105) suggest gaps in provider abstraction layers.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-07-26

## 1. Today's Highlights
Qwen Code v0.21.0-nightly is active with a focus on refining subagent model selection and stabilizing the review workflow through mutation testing. Significant community attention is directed toward resolving sandbox runtime detection logic, improving IME cursor alignment in complex UI states, and addressing MCP integration compatibility issues.

## 2. Releases
*   **v0.21.0-nightly.20260726.9d19eafa9**: A nightly build released today. Key changes include fixing CLI insight metrics to use local time consistently across all modules and refactoring the autofix logic for improved stability.
    *   [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260726.9d19eafa9)

## 3. Hot Issues
*   **[Sandbox Runtime Selection Logic](https://github.com/QwenLM/qwen-code/issues/7732)**: Users report that the CLI selects Docker based solely on PATH presence, ignoring usability (e.g., stopped daemon). This is critical for users relying on Podman or unstable Docker environments. *(Open, P2)*
*   **[Unity MCP Connection Failure in VSCode](https://github.com/QwenLM/qwen-code/issues/7697)**: A high-priority integration bug where Qwen Code fails to connect to Unity MCP, while Claude Code succeeds. This highlights potential compatibility gaps in the MCP implementation. *(Open, P2)*
*   **[IME Cursor Misalignment in Command Mode](https://github.com/QwenLM/qwen-code/issues/7684)**: On macOS, when the status line wraps to multiple lines, the IME candidate box appears far from the cursor. This significantly impacts user experience for non-English input methods. *(Open, P2)*
*   **[Session Restore Broken After Bridge Restart](https://github.com/QwenLM/qwen-code/issues/7721)**: The `AcpBridge.loadSession()` returns undefined due to schema mismatches, breaking session continuity for QQ Channel users. *(Closed, P1)*
*   **[Skill Auto-complete Regression](https://github.com/QwenLM/qwen-code/issues/7717)**: Recent updates broke auto-completion for multiple skills mentioned consecutively, affecting workflow efficiency. *(Open, P2)*
*   **[Token Usage Visibility Gap](https://github.com/QwenLM/qwen-code/issues/7719)**: Users are frustrated by the lack of real-time token usage display in the CLI, making quota management difficult. *(Open, P3)*
*   **[Thinking Mode vs. Required Tool Choice Conflict](https://github.com/QwenLM/qwen-code/issues/7659)**: DashScope rejects `tool_choice: "required"` in thinking mode, causing errors for workflows relying on memory recall side queries. *(Closed, P2)*
*   **[Subagent Model Grade Selection](https://github.com/QwenLM/qwen-code/issues/7685)**: A highly requested feature allowing AI to dynamically select model grades (small/medium/high) for spawned subagents. *(Open, P3)*
*   **[Pinned Memory Directory Proposal](https://github.com/QwenLM/qwen-code/issues/6801)**: Users propose a `pinned/` directory to protect critical memory files from `/dream` consolidation, ensuring persistent context integrity. *(Open, P2)*
*   **[Inline Math Rendering Inconsistency](https://github.com/QwenLM/qwen-code/issues/7700)**: Developers working with math-heavy codebases report inconsistencies between rendering, copying, and streaming tokenization of inline math. *(Open, P3)*

## 4. Key PR Progress
*   **[feat(web-shell): Git Branch Picker & PR Flow](https://github.com/QwenLM/qwen-code/pull/7731)**: Introduces an IntelliJ-style branch picker in the web shell, enabling search, checkout, and PR creation directly from the interface.
*   **[fix(cli): Probe Sandbox Runtime Before Selection](https://github.com/QwenLM/qwen-code/pull/7734)**: Addresses Issue #7732 by verifying if the selected sandbox runtime (Docker/Podman) is actually functional before committing to it, preventing silent failures.
*   **[feat(review): Mutation Testing for Test Coverage](https://github.com/QwenLM/qwen-code/pull/7735)**: Enhances Agent 5’s test coverage pass to include mutation testing, ensuring tests actually fail when code is broken, rather than just existing.
*   **[feat(core): Goal v3 Worker Tools](https://github.com/QwenLM/qwen-code/pull/7729)**: Adds new tools for Goal v3 workers, exposing snapshot evidence and verifier feedback to improve agent transparency and control.
*   **[feat(core): Subagent Model Grade Selection](https://github.com/QwenLM/qwen-code/pull/7702)**: Implements the ability for the AI to select model grades for subagents at spawn time, as defined in user settings.
*   **[fix(ci): Deflake Tool-Control E2E Tests](https://github.com/QwenLM/qwen-code/pull/7725)**: Migrates flaky E2E tests to use `fake-openai-server` for deterministic results and adds flake-detection prechecks.
*   **[fix(cli): Keep IME Cursor Aligned](https://github.com/QwenLM/qwen-code/pull/7711)**: Fixes the cursor alignment issue reported in #7684 by reasserting cursor positions during render phases in Ink.
*   **[fix(core): Avoid Required Tools in DashScope Thinking](https://github.com/QwenLM/qwen-code/pull/7661)**: Resolves the conflict with DashScope’s thinking mode by removing forced `tool_choice: "required"` when thinking is enabled.
*   **[feat(webui): Workspace Channel Management Hook](https://github.com/QwenLM/qwen-code/pull/7728)**: Adds React data layer hooks for managing Channels in WebUI, allowing configuration and pairing request approval.
*   **[fix(web-shell): Parse 256/Truecolor SGR Sequences](https://github.com/QwenLM/qwen-code/pull/7620)**: Corrects ANSI parsing in the web shell to properly handle extended color arguments, ensuring accurate terminal output rendering.

## 5. Feature Request Trends
*   **Granular Subagent Control**: Strong demand for dynamic model selection (grades) and explicit tool constraints within subagent spawning workflows (#7685, #7702).
*   **Memory Persistence & Protection**: Requests for protected memory directories (`pinned/`) to prevent automatic consolidation from overwriting critical context (#6801, #7714).
*   **Enhanced Observability**: Need for real-time token usage tracking (#7719) and detailed generation metrics like TPS and TTFT (#4252).
*   **Improved Math & Code Rendering**: Specific requests for consistent inline math handling and source-preserving contracts for technical documentation (#7700, #7699).

## 6. Developer Pain Points
*   **Runtime Detection Fragility**: The assumption that a command on PATH equals a usable runtime (especially Docker) causes significant friction in diverse development environments (#7732, #7734).
*   **MCP Integration Compatibility**: Discrepancies between Qwen Code and other agents (like Claude Code) in connecting to specific MCP providers (e.g., Unity) suggest gaps in the protocol implementation or extension compatibility (#7697, #7503).
*   **UI/UX Consistency in Complex States**: Issues with IME cursor positioning and multi-line status line rendering indicate challenges in maintaining UI state consistency during rapid interactive updates (#7684, #7711, #7713).
*   **CI Flakiness**: Persistent flakiness in E2E tests, particularly around tool control and session management, requires robust mocking strategies to ensure reliable development cycles (#7712, #7725).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-07-26
**Source:** github.com/Hmbown/DeepSeek-TUI (CodeWhale)

## 1. Today's Highlights
The CodeWhale v0.9.2 development cycle is intensifying with a focus on provider neutrality, resolving critical bugs where non-DeepSeek providers were ignored or failed silently. Significant attention has shifted to performance optimization, with multiple issues targeting synchronous filesystem calls and heavy rendering overhead in the TUI, alongside cleanup of legacy memory modules and localization infrastructure.

## 2. Releases
No new releases were published in the last 24 hours. Development remains focused on the upcoming v0.9.2 milestone.

## 3. Hot Issues
*   **[Bug] macOS underwater shell breaks open/osascript/launchctl (#4828)**: Critical regression where v0.9.0+ breaks core macOS utilities via `exec_shell`. Users report exit code -54, requiring downgrade to v0.8.67 as a workaround.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/4828)
*   **[Bug] Config validation rejects non-DeepSeek providers’ own models (#4829)**: A severe setup bug where `Config::validate()` fails for any provider not using DeepSeek models, bricking the CLI for users of Zai/GLM/etc.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/4829)
*   **[Bug] `codew model set` is a silent no-op for every non-DeepSeek provider (#4838)**: Related to #4832, this issue highlights that user-selected models for non-DeepSeek providers are dropped silently, with defaults reverting incorrectly.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/4838)
*   **[Enhancement] Add configurable session token breakdown (#4520)**: Users request restoring verbose token stats (input/cache hit/output) in the header bar, arguing the compacted single-total view hides valuable diagnostic data.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/4520)
*   **[Bug] v0.9.1 light-background TUI renders default text at near-background contrast (#4833)**: Accessibility regression reported by early adopters; pale gray text on light terminal backgrounds makes the interface nearly illegible.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/4833)
*   **[Enhancement] Full test suite intermittently writes to real config (#4831)**: Test flakiness causing data corruption in developer environments, correlating with `allow_shell_save` failures.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/4831)
*   **[Enhancement] Workflow: wire the model-facing workflow tool and run driver (#2974)**: Essential for v0.9.2, this tracks the integration of the workflow runtime into the TUI so users can trigger sub-agent executions from model turns.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/2974)
*   **[Enhancement] Extract App god object state into owned submodules (#3314)**: Refactoring effort to break down the ~4,450-line `App` struct, improving maintainability and reducing coupling in the TUI core.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3314)
*   **[Enhancement] Add an explicit provider-independent offline path (#3927)**: Request for a "look around" mode during onboarding that doesn't require API keys or active providers, improving first-run experience for local-only users.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3927)
*   **[Bug] Wrong deepseek completions url (#4683)**: Flaky network errors due to malformed URLs (`api.deepse ▏ ek.com`) appearing after long sessions, suggesting a string concatenation or encoding bug.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/4683)

## 4. Key PR Progress
*   **#4455 Remove legacy memory push/inject in report building**: Cleans up deprecated `UserMemory` and `ConfigEnabled` tokens, streamlining context reports for the new Moraine recall system.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/4455)
*   **#4442 Remove legacy memory composition block in refresh_system_prompt**: Replaces old memory retrieval logic with `user_memory_block: None`, aligning system prompt generation with v0.9.x architecture.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/4442)
*   **#4686 feat(minimax): add China / Token Plan provider routes**: Adds support for `minimaxi.com` endpoints (`minimax-cn`, `minimax-anthropic-cn`), expanding provider options for Chinese developers.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/4686)
*   **#4566 update tui Cargo.toml for HarmonyOS build**: Fixes compilation on HarmonyOS by adjusting `portable-pty` and `nix` dependency gates, enabling native support on the OS.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/4566)
*   **#4743 fix: stop applying the 45s SSE open timeout to non-streaming chat requests**: Resolves false-positive timeouts for non-streaming backends where generation legitimately exceeds 45 seconds.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/4743)
*   **#4722 fix(tui): show complete edit previews in details**: Improves UX by lazily rendering full localized search/replace previews in the Alt+V pager, preventing truncated feedback for large edits.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/4722)
*   **#4724 fix(tui): archive completed background shell output**: Ensures final stdout/stderr tails are preserved in `ExecCell` when background jobs terminate, fixing data loss in session history.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/4724)
*   **#4756 fix: do not retry failed qualified MCP tool calls**: Optimizes MCP client error handling by returning fast-path errors directly instead of unnecessary re-resolution retries.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/4756)
*   **#4760 fix: replace dirs::home_dir() with effective_home_dir()**: Fixes Windows CI failures by standardizing home directory resolution across the TUI crate.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/4760)
*   **#4792 ci(triage): stop over-labelling well-specified issues**: Improves GitHub automation by preventing auto-labelers from adding conflicting tags (e.g., `bug, question`) based on body text keywords.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/4792)

## 5. Feature Request Trends
*   **Provider Agnosticism**: Strong demand for robust support of non-DeepSeek providers (Zai, Kimi, Minimax, Ollama). Users are frustrated by hardcoded assumptions and validation errors that break multi-provider setups.
*   **Plugin & Skill Ecosystem**: Requests for a formal plugin market, hook support (session start/end), and better compatibility with external skill ecosystems (e.g., Claude Code skills) to extend functionality beyond core features.
*   **Localization & Global Reach**: Continued push for website and README parity across languages (Japanese, Vietnamese, Korean, Spanish, Portuguese, Russian), indicating a growing international developer base.
*   **Transparency & Diagnostics**: Users want detailed visibility into token usage, provider health status, and model routing decisions to debug interactions and manage costs.

## 6. Developer Pain Points
*   **Performance Bottlenecks**: Multiple high-priority issues (#3905, #3906, #3907, #3908) highlight severe performance regressions in the TUI, including synchronous file I/O on the event loop, O(N) history rescans per frame, and expensive JSON serialization during rendering.
*   **Configuration Fragility**: The validation logic is brittle, rejecting valid configurations for third-party providers and failing silently on model selection, leading to a poor onboarding experience.
*   **macOS Specific Regressions**: The "underwater" shell implementation introduced breaking changes for macOS users, affecting fundamental OS integrations like `open` and `osascript`.
*   **Legacy Code Debt**: The `App` struct is becoming unmanageable ("god object"), and legacy memory modules are still present in some paths, causing confusion and maintenance overhead.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*