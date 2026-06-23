# AI CLI Tools Community Digest 2026-06-23

> Generated: 2026-06-23 09:59 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Report: June 23, 2026

## 1. Ecosystem Overview
The AI CLI landscape in mid-2026 is defined by a shift from basic model access to complex, multi-agent orchestration and enterprise-grade stability. While major players like Claude Code and OpenAI Codex focus on refining authentication, MCP compatibility, and mobile/remote control parity, emerging tools like OpenCode and Pi are competing on provider agnosticism and local LLM integration. The market is consolidating around robust session management, secure sandboxing, and granular resource controls, with significant community friction observed around API stability and cross-platform rendering inconsistencies.

## 2. Activity Comparison

| Tool | Hot Issues Reported | Key PRs Updated (24h) | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 4 | **v2.1.186** (MCP Auth, Workflow Filter) |
| **OpenAI Codex** | 10 | 10 | **rust-v0.143.0-alpha.5** / **v0.142.0** |
| **Gemini CLI** | 10 | 10 | No new release |
| **GitHub Copilot CLI**| 10 | 1 | **v1.0.64-3** (Proxy, Session Resume) |
| **Kimi Code CLI** | 3 | 3 | **v1.48.0** (Loop Prevention, Reasoning Fix) |
| **OpenCode** | 10 | 10 | No new release (Stability focus) |
| **Pi** | 10 | 10 | No new release |
| **Qwen Code** | 10 | 10 | **v0.19.1** (Session/MCP Fixes) |
| **CodeWhale (DeepSeek TUI)**| 10 | 10 | Preparing **v0.8.65** |

*Note: Issue counts reflect "Hot Issues" listed in the digest; PR counts reflect significant updates noted in the "Key PR Progress" section.*

## 3. Shared Feature Directions

*   **MCP (Model Context Protocol) Maturity:**
    *   **Tools:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Qwen Code.
    *   **Need:** Standardization of tool namespaces, resource reading capabilities, and secure authentication flows. Users demand seamless integration of external tools without complex configuration.
*   **Agent Reliability & State Management:**
    *   **Tools:** All major tools.
    *   **Need:** Robust handling of session persistence, sub-agent recovery (especially after timeouts or turn limits), and prevention of infinite loops or "zombie" processes.
*   **Cross-Platform Consistency:**
    *   **Tools:** Claude Code (Linux desktop demand), OpenAI Codex (Windows/macOS stability), OpenCode (Alpine/musl support).
    *   **Need:** Native builds and consistent TUI rendering across Linux variants, macOS, and Windows, addressing specific pain points like Wayland compatibility and terminal emulator quirks.
*   **Granular Cost & Resource Control:**
    *   **Tools:** OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI.
    *   **Need:** Transparency in token/credit usage, control over "thinking" or reasoning steps, and prevention of accidental high-cost operations (e.g., deep research, infinite retries).

## 4. Differentiation Analysis

*   **Enterprise & Infrastructure Focus:**
    *   **Claude Code** and **OpenAI Codex** lead in addressing enterprise blockers: private marketplace access, strict sandbox permissions, and complex authentication (OAuth, service accounts). Codex is heavily investing in internal stability (SQLite optimization, rate-limit transparency).
*   **Flexibility & Local-First:**
    *   **Pi** and **CodeWhale** differentiate by emphasizing provider agnosticism, local LLM integration (Ollama, llama.cpp), and flexible routing strategies. They cater to users wanting to avoid vendor lock-in or operate in air-gapped environments.
*   **Agentic Architecture:**
    *   **Gemini CLI** and **OpenCode** are pushing the boundaries of multi-agent orchestration, with features like subagent recovery, fleet profiles, and advanced tool chaining. Gemini focuses on security (SSRF fixes), while OpenCode emphasizes mobile/PWA experiences and resource reading.
*   **Simplicity & Specificity:**
    *   **Kimi Code CLI** focuses on specific reliability fixes for autonomous modes (YOLO) and loop prevention.
    *   **Qwen Code** is strengthening its VSCode integration and daemon architecture, focusing on type safety and configuration decoupling.

## 5. Community Momentum & Maturity

*   **High Momentum & Rapid Iteration:**
    *   **OpenAI Codex** shows high activity with 10 key PRs and significant community engagement on stability issues (rate limits, SSD wear). The rapid alpha releases indicate an aggressive development cycle.
    *   **Gemini CLI** and **OpenCode** also show high PR activity, focusing on core architectural improvements (security, MCP resources, mobile UX).
*   **Established & Stabilizing:**
    *   **Claude Code** has a very large community (high upvotes on issues) but lower PR velocity in the last 24h, suggesting a focus on managing backlog and critical regressions rather than new feature releases.
    *   **GitHub Copilot CLI** has minimal PR activity but maintains a steady release cadence, focusing on incremental UX improvements (proxy support, rendering fixes).
*   **Emerging/Niche Momentum:**
    *   **Pi** and **CodeWhale** have active communities driving features around flexibility and local integration, indicating strong niche adoption among power users and local-LLM enthusiasts.

## 6. Trend Signals

*   **From "Chat" to "Orchestration":** The community focus has shifted from simple Q&A to managing complex agent workflows. Features like subagent recovery, fleet management, and hierarchical execution are becoming critical differentiators.
*   **Security & Compliance First:** With increased enterprise adoption, tools are prioritizing security fixes (SSRF, OAuth hardening, sandbox isolation) and transparent resource auditing. The "black box" nature of AI tools is facing scrutiny regarding data privacy and cost control.
*   **Platform Fragmentation Challenges:** Developers are struggling with the diversity of Linux distributions, terminal emulators, and OS versions. Tools that offer robust cross-platform parity (especially native Linux desktops and consistent Windows/macOS behavior) will gain competitive advantage.
*   **Cost Transparency as a Feature:** Aggressive rate-limiting and unclear credit usage are major pain points. Tools that provide granular control over token consumption and clear billing feedback will see higher user satisfaction.
*   **Local/On-Prem Viability:** The strong demand for local LLM support and provider-agnostic routing signals a growing market for self-hosted, cost-controlled AI development environments, challenging the dominance of cloud-only solutions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** June 23, 2026  
**Source:** `anthropics/skills` GitHub Repository

### 1. Top Skills Ranking
*Based on community engagement (comments/issues linked to PRs).*

1.  **[fix(skill-creator): run_eval.py always reports 0% recall]**
    *   **Functionality:** Critical bug fix for the `skill-creator` evaluation pipeline. Addresses a systemic failure where `run_eval.py` incorrectly reported 0% recall due to Windows stream reading issues and trigger detection failures.
    *   **Status:** Open (Updated 2026-06-23)
    *   **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)
2.  **[Add document-typography skill]**
    *   **Functionality:** A new skill designed to enforce typographic quality in AI-generated documents, specifically targeting orphan lines, widows, and numbering misalignment.
    *   **Status:** Open
    *   **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)
3.  **[Add ODT skill]**
    *   **Functionality:** Enables creation, filling, and parsing of OpenDocument Text (.odt) and Spreadsheet (.ods) files, expanding support beyond Microsoft Office formats.
    *   **Status:** Open
    *   **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)
4.  **[Improve frontend-design skill clarity]**
    *   **Functionality:** Refines the existing `frontend-design` skill to ensure instructions are actionable within a single conversation, improving coherence and reducing ambiguity for Claude.
    *   **Status:** Open
    *   **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)
5.  **[Add skill-quality-analyzer and skill-security-analyzer]**
    *   **Functionality:** Meta-skills that evaluate other skills based on structure, documentation, security practices, and overall quality, adding a governance layer to the ecosystem.
    *   **Status:** Open
    *   **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)
6.  **[Add testing-patterns skill]**
    *   **Functionality:** Provides a comprehensive framework for testing, covering unit tests, React component testing, and testing philosophy (what to test vs. what not to test).
    *   **Status:** Open
    *   **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

### 2. Community Demand Trends
*Derived from high-engagement Issues.*

*   **Enterprise Collaboration & Sharing:** There is strong demand for native org-wide skill sharing within Claude.ai (#228), moving away from manual file distribution.
*   **Robustness & Reliability:** Significant frustration exists around the fragility of the skill creation tooling, particularly regarding Windows compatibility (#1061, #1099) and YAML parsing errors (#361, #539).
*   **Security & Trust Boundaries:** Users are concerned about namespace impersonation (#492) and the security implications of agent skills handling sensitive data like SharePoint documents (#1175).
*   **Context Management:** Interest in persistent memory solutions (#154, #1329) indicates a need for skills that maintain state across long-running agent sessions.

### 3. High-Potential Pending Skills
*Active PRs addressing critical blockers or introducing widely requested features.*

*   **[fix(skill-creator): run_eval trigger detection misses real skill name]**
    *   **Why it matters:** Directly resolves the "0% recall" bug affecting the entire skill optimization loop. Merging this is essential for the `skill-creator` workflow to function correctly.
    *   **Status:** Open (Updated 2026-06-23)
    *   **Link:** [PR #1323](https://github.com/anthropics/skills/pull/1323)
*   **[fix(skill-creator): warn on unquoted description with YAML special characters]**
    *   **Why it matters:** Prevents silent failures during skill creation caused by YAML parsing errors, improving the developer experience for skill authors.
    *   **Status:** Open (Updated 2026-04-16)
    *   **Link:** [PR #539](https://github.com/anthropics/skills/pull/539)
*   **[Add AppDeploy skill]**
    *   **Why it matters:** Introduces automated deployment capabilities for full-stack web apps, a highly practical utility for developers.
    *   **Status:** Open (Updated 2026-05-04)
    *   **Link:** [PR #360](https://github.com/anthropics/skills/pull/360)

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **tooling stability and cross-platform compatibility** (specifically fixing the broken `skill-creator` evaluation loops on Windows) alongside **enterprise-grade collaboration features** (org-wide sharing and security auditing).

---

# Claude Code Community Digest
**Date:** June 23, 2026
**Source:** github.com/anthropics/claude-code

## 1. Today's Highlights
Anthropic released **v2.1.186**, introducing streamlined MCP authentication via CLI (`claude mcp login`) and status filtering for workflows. Community attention remains heavily focused on the long-standing demand for an official Linux desktop build and critical regressions involving API connectivity and iOS app stability.

## 2. Releases
**v2.1.186**
*   **CLI MCP Authentication:** Added `claude mcp login <name>` and `claude mcp logout <name>` commands to authenticate servers without the interactive menu. Includes `--no-browser` support for SSH-based stdin redirects.
*   **Workflow Filtering:** Added status filtering (press `f`) within the `/workflows` agent interface.
*   [View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.186)

## 3. Hot Issues
1.  **[FEATURE] Official Claude Desktop build for Linux** (#65697)
    *   *Why it matters:* The most upvoted issue (469 👍), highlighting a significant gap for Linux users relying on the GUI.
    *   *Reaction:* High community support; considered a priority for broader adoption.
2.  **[BUG] claude.ai visualize feature broken** (#34820)
    *   *Why it matters:* DNS resolution failure for `claudemcpcontent.com` breaks visualization tools for many users.
    *   *Reaction:* 90 comments, 37 👍; urgent infrastructure concern.
3.  **[BUG] No Response From API (Regression)** (#69358)
    *   *Why it matters:* Reports of constant API non-responses in recent versions (2.1.181/183) render the tool unusable.
    *   *Reaction:* 23 comments, 59 👍; indicates severe stability regression.
4.  **[BUG] Cowork Can't add private GitHub marketplace** (#28125)
    *   *Why it matters:* Blocks enterprise workflows requiring private plugin sources.
    *   *Reaction:* 26 comments, 27 👍; persistent blocker for corporate users.
5.  **[BUG] API Error: Connection closed mid-response** (#69415)
    *   *Why it matters:* Frequent connection drops make sustained coding sessions impossible.
    *   *Reaction:* 21 comments, 21 👍; critical reliability issue.
6.  **[BUG] iOS app silently crashes on Remote Control** (#70182)
    *   *Why it matters:* Breaks mobile development workflows and remote control features on iOS.
    *   *Reaction:* New report with immediate crash reproduction.
7.  **[BUG] iPadOS App crashes in Code tab** (#70144)
    *   *Why it matters:* Main-thread stack overflow in SwiftUI prevents session loading on iPad.
    *   *Reaction:* 7 comments, 12 👍; specific to iPadOS environment.
8.  **[BUG] Auto mode blocks Bash with endless retries** (#63873)
    *   *Why it matters:* Opus 4.8 classifier unavailability causes infinite loops, freezing the terminal.
    *   *Reaction:* 8 comments, 9 👍; highlights fragility in auto-mode error handling.
9.  **[BUG] Usage credits required for 1M context with Opus** (#61869)
    *   *Why it matters:* Confusing error message regarding API credit usage for specific model contexts.
    *   *Reaction:* 60 comments; clarity and billing transparency issue.
10. **[BUG] Agent ignored explicit instruction to use Haiku subagent** (#70268)
    *   *Why it matters:* Demonstrates a failure in hierarchical agent execution logic.
    *   *Reaction:* 2 comments; indicates potential regression in multi-agent orchestration.

## 4. Key PR Progress
*(Note: Only 4 PRs were updated in the last 24h)*

1.  **fix(commit-commands): detect [gone] branches** (#70173)
    *   Fixes the `/clean_gone` command which failed to delete branches due to incorrect `git branch -v` parsing.
2.  **Bump stale and autoclose timeouts** (#63686)
    *   Extends issue lifecycle management from 14 to 90 days to reduce noise from inactive but unresolved tickets.
3.  **docs: fix stale marketplace name** (#70074)
    *   Updates documentation to reflect the rename from `claude-code-marketplace` to `claude-code-plugins`.
4.  **docs(plugin-dev): update marketplace install docs** (#70066)
    *   Corrects CLI flags (`cc` to `claude`) and clarifies contribution guidelines in the plugin developer README.

## 5. Feature Request Trends
*   **Platform Parity:** There is overwhelming demand for a native Linux Desktop application (#65697) and better support for Linux-specific packaging (ppc64le #50443).
*   **Accessibility:** Requests for built-in text-to-speech for responses (#58429) indicate a growing need for hands-free and screen-reader-friendly interactions.
*   **Workflow Flexibility:** Users are requesting the ability to push to task-assigned branches rather than being restricted to `claude/*` branches (#24535), seeking tighter integration with existing Git workflows.

## 6. Developer Pain Points
*   **Stability & Connectivity:** Recurring issues with API timeouts (#69415), connection closures (#69358), and DNS failures (#34820) are the primary sources of friction, often rendering the tool unusable until fixed.
*   **Mobile/Remote Control Bugs:** Multiple crashes on iOS/iPadOS (#70182, #70144) suggest instability in the mobile client, particularly around Remote Control session linking.
*   **Resource Management:** Concerns about excessive token consumption by deep-research agents (#70269) and PTY handle leaks on macOS (#63131) highlight efficiency and resource management gaps.
*   **CLI/TUI Interactions:** Conflicts with terminal emulators (GNOME scroll capture #70251, slash command hijacking #63065) disrupt the core coding experience.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-06-23

### 1. Today's Highlights
The Codex community is heavily focused on stability and performance regressions introduced in recent updates, particularly regarding `gpt-5.5` availability on Windows/macOS and aggressive rate-limiting that depletes Plus plan budgets rapidly. Significant engineering effort is being directed at resolving persistent SQLite log churn, which was causing excessive SSD wear, alongside critical fixes to sandbox connectivity and plugin namespaces for MCP compatibility.

### 2. Releases
*   **rust-v0.143.0-alpha.5**: Latest alpha release in the 0.143 series.
*   **rust-v0.142.0**: Released with notable features including enhanced `/usage` commands for managing credit resets and improved organization for `/plugins` (Curated, Workspace, Shared).

### 3. Hot Issues
1.  **[BUG] Rate-limit cost per token jumped ~10-20x** [#28879](https://github.com/openai/codex/issues/28879)
    *   *Why it matters:* Users on Plus plans report budgets draining in 2-3 prompts with `gpt-5.5`, indicating a severe regression in token accounting or pricing logic.
    *   *Reaction:* High engagement (245 👍, 125 comments).
2.  **[BUG] gpt-5.5 listed locally but returns 404** [#26892](https://github.com/openai/codex/issues/26892)
    *   *Why it matters:* Affects Windows and CLI users; the model appears available in metadata but fails at the API level, breaking workflows.
    *   *Reaction:* 28 👍, 80 comments.
3.  **[BUG] SQLite feedback logs consume massive SSD endurance** [#28224](https://github.com/openai/codex/issues/28224)
    *   *Why it matters:* Logs were estimated to write ~640 TB/year, threatening hardware longevity. Merged fixes (#29432, #29457) reduced volume by 85%.
    *   *Reaction:* 291 👍, 53 comments.
4.  **[BUG] Project chat histories disappeared** [#20741](https://github.com/openai/codex/issues/20741)
    *   *Why it matters:* Data loss after recent app updates affects Pro users on macOS, raising concerns about session persistence reliability.
    *   *Reaction:* 15 👍, 47 comments.
5.  **[BUG] Unable to open past conversation history in VS Code** [#18993](https://github.com/openai/codex/issues/18993)
    *   *Why it matters:* Regression in the VS Code extension prevents access to historical context, disrupting iterative development.
    *   *Reaction:* 51 👍, 35 comments.
6.  **[BUG] Full Access mode permission loop** [#28988](https://github.com/openai/codex/issues/28988)
    *   *Why it matters:* macOS users on Pro Max report a continuous permission prompt loop in "Full Access" sandbox mode after update 26.614+.
    *   *Reaction:* 25 👍, 27 comments.
7.  **[BUG] GitHub PR review fails with deactivated workspace** [#26867](https://github.com/openai/codex/issues/26867)
    *   *Why it matters:* Migration from Business to Personal Pro accounts breaks GitHub integration workflows, requiring manual re-authentication.
    *   *Reaction:* 12 👍, 24 comments.
8.  **[ENHANCEMENT] Voice transcription for TUI** [#14630](https://github.com/openai/codex/issues/14630)
    *   *Why it matters:* Users request the return of high-quality voice transcription in the CLI/TUI, noting the desktop `Ctrl+M` dictation is insufficient for terminal workflows.
    *   *Reaction:* 45 👍, 17 comments.
9.  **[BUG] Windows Sandbox Helper not found** [#27125](https://github.com/openai/codex/issues/27125)
    *   *Why it matters:* Regression in CLI 0.138.0 causes sandbox initialization failures on Windows, blocking local execution capabilities.
    *   *Reaction:* 2 👍, 11 comments.
10. **[BUG] Windows Desktop triggers kernel-pool growth** [#29436](https://github.com/openai/codex/issues/29436)
    *   *Why it matters:* Memory leak in the Windows app causes system-wide slowdowns and delays in screenshot/clipboard operations.
    *   *Reaction:* 0 👍, 3 comments.

### 4. Key PR Progress
1.  **[CORE] Use current step environments for tools** [#29547](https://github.com/openai/codex/pull/29547)
    *   Addresses race conditions in deferred executors where environment state changes between sampling requests.
2.  **[MCP] Flatten namespace tools for unsupported providers** [#28271](https://github.com/openai/codex/pull/28271)
    *   Fixes compatibility with Responses API providers that do not understand the proprietary `type: "namespace"` wrapper.
3.  **[AGENT] Namespace multi-agent v2 tools under collaboration** [#29067](https://github.com/openai/codex/pull/29067)
    *   Aligns model-visible hints with actual tool surfaces using the `functions.collaboration.*` namespace.
4.  **[LOGGING] Stop persisting bridged log events** [#29599](https://github.com/openai/codex/pull/29599)
    *   Follow-up to log churn fixes; filters high-volume dependency TRACE events that bypassed previous optimizations.
5.  **[SERVER] List descendant threads by ancestor** [#29591](https://github.com/openai/codex/pull/29591)
    *   Adds experimental support for retrieving entire thread subtrees, improving efficiency for clients managing spawned contexts.
6.  **[PLUGIN] Make selected plugin roots URI-native** [#28918](https://github.com/openai/codex/pull/28918)
    *   Standardizes plugin paths to `file://` URIs end-to-end, improving cross-platform consistency.
7.  **[STORE] Separate thread names and repair ownership** [#29352](https://github.com/openai/codex/pull/29352)
    *   Decouples explicit thread names from history-derived titles in SQLite and improves read-repair logic.
8.  **[ATTRIBUTION] Support thread-level originator overrides** [#29477](https://github.com/openai/codex/pull/29477)
    *   Distinguishes between local Work launches and cloud-backed Work launches for better downstream attribution.
9.  **[NETWORK] Attribute managed network requests to exact execs** [#29578](https://github.com/openai/codex/pull/29578)
    *   Enhances Guardian security by attaching specific originators to network requests when multiple execs are active.
10. **[SANDBOX] Allow codex sandbox to consume MCP sandbox state** [#29358](https://github.com/openai/codex/pull/29358)
    *   Enables the sandbox to accept JSON state payloads, improving integration with external MCP configurations.

### 5. Feature Request Trends
*   **Voice Input in Terminal:** Strong demand for bringing high-fidelity voice transcription (similar to the Desktop app) back to the TUI/CLI environment.
*   **Multi-Window Support:** Continued requests for native multi-window capabilities in the Desktop app to facilitate complex, parallel coding tasks.
*   **Context Reuse:** Users want terminal-launched contexts to seamlessly join active Desktop app threads rather than spawning isolated conversations.
*   **Plugin Organization:** Interest in finer-grained control over plugin visibility (Curated vs. Workspace vs. Shared) and namespace handling for broader provider compatibility.

### 6. Developer Pain Points
*   **Rate Limit Volatility:** Unpredictable and aggressive token costing on Plus plans is causing budget exhaustion and frustration.
*   **Platform-Specific Instability:** Windows users are experiencing a disproportionate number of issues, including 404 errors for `gpt-5.5`, sandbox helper missing, kernel memory leaks, and permission loops.
*   **Storage Performance:** Despite recent fixes, persistent SQLite log churn continues to impact SSD endurance and system responsiveness on both macOS and Windows.
*   **Session Persistence:** Recurring bugs involving lost chat histories, disconnected VS Code extensions, and out-of-sync turn states suggest underlying instability in the session management layer.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-06-23

## 1. Today's Highlights
The community focus remains heavily on stabilizing the multi-agent architecture, with significant engagement around subagent reliability, tool usage patterns, and configuration overrides. Security and core stability saw notable progress with merged fixes for SSRF vulnerabilities, OAuth socket reuse regressions in newer Node.js versions, and file corruption bugs affecting Jupyter and JSON outputs.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **[P1] Generalist Agent Hangs** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   **Why it matters:** The generalist agent enters infinite loops on simple tasks (e.g., folder creation), blocking productivity.
    *   **Reaction:** High interest (8 👍); users report waiting up to an hour before manual cancellation.
*   **[P1] Subagent Recovery After MAX_TURNS** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **Why it matters:** Subagents incorrectly report "GOAL" success when hitting turn limits, masking failures and hiding interruptions from the user.
    *   **Reaction:** 2 👍; critical for debugging complex agent chains.
*   **[P2] Leverage Bash Affinity via Zero-Dependency Sandboxing** [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
    *   **Why it matters:** Proposes using native POSIX tools (`grep`, `sed`) in sandboxes to align with Gemini 3’s training, improving efficiency and security.
    *   **Reaction:** 1 👍; viewed as a major architectural enhancement for core agent capabilities.
*   **[P2] Gemini Does Not Use Skills/Sub-agents Enough** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   **Why it matters:** Anecdotal evidence suggests the model ignores custom skills and sub-agents unless explicitly prompted, reducing utility.
    *   **Reaction:** 0 👍 but high discussion volume (6 comments); indicates a widespread usability gap.
*   **[P2] Shell Command Execution Stuck "Waiting Input"** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   **Why it matters:** Simple CLI commands hang with "Awaiting user input" even when non-interactive, breaking automation flows.
    *   **Reaction:** 3 👍; affects basic core functionality.
*   **[P2] Browser Subagent Fails in Wayland** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    *   **Why it matters:** Linux users on Wayland face broken browser automation due to subagent termination issues.
    *   **Reaction:** 1 👍; highlights platform-specific compatibility gaps.
*   **[P2] Add Deterministic Redaction & Reduce Auto Memory Logging** [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    *   **Why it matters:** Addresses security concerns where secrets might be logged before redaction in Auto Memory transcripts.
    *   **Reaction:** 0 👍; critical for enterprise compliance.
*   **[P2] Stop Auto Memory from Retrying Low-Signal Sessions** [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
    *   **Why it matters:** Infinite retries on low-signal sessions waste resources and clutter the inbox.
    *   **Reaction:** 0 👍; improves system efficiency.
*   **[P2] Gemini CLI Encounters 400 Error with >128 Tools** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   **Why it matters:** Hard limits on tool counts cause crashes in large projects with many extensions/skills.
    *   **Reaction:** 0 👍; scalability bottleneck.
*   **[P3] Experiment with Native File Tools for Task Tracker** [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)
    *   **Why it matters:** Explores replacing complex task tracking logic with simple native file operations to reduce overhead.
    *   **Reaction:** 4 comments; ongoing investigation into simpler agent state management.

## 4. Key PR Progress
*   **[FIX] Resolve DNS before SSRF Guard** [#27744](https://github.com/google-gemini/gemini-cli/pull/27744) *(Closed)*
    *   Fixes a critical SSRF vulnerability where wildcard DNS services could bypass private IP checks.
*   **[FIX] Prevent SSRF via DNS Hostnames and Redirects** [#27739](https://github.com/google-gemini/gemini-cli/pull/27739) *(Closed)*
    *   Complements the above by addressing gaps in `isBlockedHost` delegation to synchronous private IP checks.
*   **[FIX] Avoid Keep-Alive Socket Reuse During OAuth** [#28103](https://github.com/google-gemini/gemini-cli/pull/28103)
    *   Resolves `ERR_STREAM_PREMATURE_CLOSE` errors on Node.js >= 24.17.0 during "Sign in with Google".
*   **[FIX] Correct Ellipsis Logic in EditTool** [#28105](https://github.com/google-gemini/gemini-cli/pull/28105)
    *   Fixes a display bug where edit description snippets incorrectly computed ellipsis suffixes.
*   **[FIX] Drop Late Tool Calls After SIGINT** [#28096](https://github.com/google-gemini/gemini-cli/pull/28096)
    *   Prevents side effects from executing after user cancellation by dropping delayed provider chunks.
*   **[FIX] Resolve Jupyter/JSON Corruption in write_file** [#28000](https://github.com/google-gemini/gemini-cli/pull/28000) *(Closed)*
    *   Critical fix for silent corruption of `.ipynb` and JSON files caused by the `write_file` tool.
*   **[FIX] Defensive Path Resolution for @-Reference Files** [#28053](https://github.com/google-gemini/gemini-cli/pull/28053)
    *   Fixes "File not found" errors when models pass paths prefixed with `@`.
*   **[FIX] Validate GCP Project ID Format** [#27916](https://github.com/google-gemini/gemini-cli/pull/27916)
    *   Prevents Auto Memory from storing invalid display names/aliases that cause 403/CONSUMER_INVALID errors.
*   **[FIX] Strip Thoughts from Scrubbed History** [#27971](https://github.com/google-gemini/gemini-cli/pull/27971)
    *   Resolves "Thought Leakage" where internal monologues confused the model in subsequent turns.
*   **[FEAT] Implement Cloud Run Webhook Ingestion** [#28015](https://github.com/google-gemini/gemini-cli/pull/28015)
    *   Adds infrastructure for the Caretaker Agent to ingest GitHub webhooks securely via Cloud Run and Firestore.

## 5. Feature Request Trends
*   **Robust Subagent Management:** Strong demand for better visibility into subagent trajectories [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), improved recovery mechanisms [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), and reliable activation of skills/subagents without explicit prompting [#21968](https://github.com/google-gemini/gemini-cli/issues/21968).
*   **Security & Sandboxing:** Interest in zero-dependency OS sandboxing for bash affinity [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) and deterministic redaction of sensitive data in memory logs [#26525](https://github.com/google-gemini/gemini-cli/issues/26525).
*   **AST-Aware Codebase Navigation:** Multiple issues track the value of AST-aware tools for precise file reading and codebase mapping to reduce token noise and improve turn efficiency [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746).
*   **Resilience & Error Handling:** Requests for automatic session takeover in browser agents [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) and discouragement of destructive behaviors like `git reset --force` [#22672](https://github.com/google-gemini/gemini-cli/issues/22672).

## 6. Developer Pain Points
*   **Agent Reliability & Stability:** Frequent reports of agents hanging [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), getting stuck in interactive prompts [#22465](https://github.com/google-gemini/gemini-cli/issues/22465), or failing to execute simple tasks due to subagent misconfiguration [#22267](https://github.com/google-gemini/gemini-cli/issues/22267).
*   **Tool Limitations & Bugs:** Issues with file corruption [#28000](https://github.com/google-gemini/gemini-cli/pull/28000), incorrect path resolution [#28053](https://github.com/google-gemini/gemini-cli/pull/28053), and shell command hang states [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) disrupt daily workflows.
*   **Platform Compatibility:** Specific failures on Wayland [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) and terminal flickering/resizing issues [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) indicate ongoing friction in non-standard environments.
*   **Configuration Complexity:** Users struggle with symlink recognition for agents [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) and unexpected subagent activation despite disabled settings [#22093](https://github.com/google-gemini/gemini-cli/issues/22093).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-23

## 1. Today's Highlights
The latest release, v1.0.64-3, introduces HTTP(S) proxy configuration support and resolves critical session resumption bugs for names containing spaces. Community attention is heavily focused on terminal rendering inconsistencies on Windows and macOS, alongside significant friction points regarding AI credit consumption during session management.

## 2. Releases
**v1.0.64-3**
*   **Added:** Configuration option to set an HTTP(S) proxy via user settings.
*   **Fixed:** Resumed sessions now function correctly even when named with spaces.
*   **Fixed:** Unsupported slash commands are now hidden in remote-hosted sessions.

**v1.0.64-2**
*   **Added:** User setting to hide the conversation scrollbar.
*   **Added:** Inline image rendering support within the CLI interface.
*   **Added:** Frontmatter support for skill argument hints.
*   **Added:** OpenTelemetry enhancements where successful compaction spans now carry `gen_ai.conversation.compacted=true` and emit summaries as `CompactionPart`.

[GitHub Releases](https://github.com/github/copilot-cli/releases)

## 3. Hot Issues
1.  **[CLOSED] Mouse wheel scroll captured by input box instead of conversation history**
    *   **Why it matters:** A regression on Windows that breaks navigation of chat history, forcing users to rely on keyboard shortcuts or mouse clicks.
    *   **Reaction:** 3 👍, 10 comments. [Issue #1944](https://github.com/github/copilot-cli/issues/1944)

2.  **[OPEN] Error loading model list: Error: Not authenticated**
    *   **Why it matters:** Users cannot switch models when resuming existing sessions, despite authentication working fine in new sessions, indicating a state management bug.
    *   **Reaction:** 11 👍, 6 comments. [Issue #3596](https://github.com/github/copilot-cli/issues/3596)

3.  **[OPEN] Thinking/reasoning text is unreadable on dark backgrounds**
    *   **Why it matters:** Accessibility issue causing "Thinking..." text to become invisible on dark terminal themes due to hardcoded low-contrast colors.
    *   **Reaction:** 2 👍, 1 comment. [Issue #3886](https://github.com/github/copilot-cli/issues/3886)

4.  **[OPEN] Support subfolders for skills to better organize them**
    *   **Why it matters:** Essential for scalability; users with many custom skills need hierarchical organization rather than flat directory structures.
    *   **Reaction:** 20 👍, 8 comments. [Issue #1632](https://github.com/github/copilot-cli/issues/1632)

5.  **[OPEN] Restarting copilot uses AI credits**
    *   **Why it matters:** Unexpected resource consumption; restarting or resuming sessions incurs a fixed credit cost (~174 credits), impacting usage limits.
    *   **Reaction:** 0 👍, 0 comments. [Issue #3886](https://github.com/github/copilot-cli/issues/3886)

6.  **[CLOSED] 1.0.42 falsely reports registry-listed custom MCP servers as blocked by policy**
    *   **Why it matters:** False positives in policy enforcement block legitimate MCP server usage, disrupting workflow automation.
    *   **Reaction:** 1 👍, 7 comments. [Issue #3162](https://github.com/github/copilot-cli/issues/3162)

7.  **[OPEN] Expose extended thinking as a control independent of reasoning effort**
    *   **Why it matters:** Users want granular control over model behaviors (like extended thinking for Claude) without adjusting the general reasoning effort parameter.
    *   **Reaction:** 0 👍, 0 comments. [Issue #3888](https://github.com/github/copilot-cli/issues/3888)

8.  **[OPEN] Display per-response elapsed time during and after generation**
    *   **Why it matters:** Lack of feedback during long-running autonomous agent tasks causes uncertainty about whether the process is stuck or active.
    *   **Reaction:** 1 👍, 2 comments. [Issue #3278](https://github.com/github/copilot-cli/issues/3278)

9.  **[OPEN] WebFetchRedirectError: Redirects are not followed for OpenAI documentation URLs**
    *   **Why it matters:** Tool failure to handle standard HTTP 301 redirects prevents fetching valid documentation, breaking research workflows.
    *   **Reaction:** 0 👍, 0 comments. [Issue #3890](https://github.com/github/copilot-cli/issues/3890)

10. **[OPEN] Copilot CLI ignores MCP server "instructions"**
    *   **Why it matters:** MCP servers provide context-rich instructions during initialization; ignoring them degrades the quality of AI interactions.
    *   **Reaction:** 3 👍, 0 comments. [Issue #1579](https://github.com/github/copilot-cli/issues/1579)

## 4. Key PR Progress
*Note: Only 1 PR was reported in the last 24 hours.*

1.  **[OPEN] Add initial console log for greeting**
    *   **Description:** Adds basic logging for the CLI greeting sequence to aid in debugging startup issues.
    *   **Impact:** Minor utility improvement for developers diagnosing launch failures.
    *   **Link:** [PR #3873](https://github.com/github/copilot-cli/pull/3873)

## 5. Feature Request Trends
*   **Enhanced Visibility & Feedback:** Strong demand for timers showing generation duration (#3278, #3111, #3055) and improved visual feedback for "thinking" states.
*   **Granular Model Control:** Requests to decouple specific model features (extended thinking) from general reasoning efforts (#3888).
*   **Organizational Scalability:** Need for hierarchical skill storage (#1632) and better handling of MCP server configurations (#3887, #1579).
*   **Network & Protocol Compliance:** Improvements in handling HTTP redirects (#3890) and strict adherence to Agent Client Protocol standards like stdio transport (#3889).

## 6. Developer Pain Points
*   **Session State & Authentication:** Bugs preventing model listing in resumed sessions (#3596) and false policy blocks on MCP servers (#3162) create friction in maintaining continuous workflows.
*   **Terminal Rendering & Accessibility:** Inconsistent scroll behavior on Windows (#1944), unreadable text on dark modes (#3886), and input box scrolling issues (#3885) degrade the core CLI experience.
*   **Credit Consumption Uncertainty:** Unexpected AI credit usage during session restarts/resumes (#3886) concerns users managing tight quota limits.
*   **MCP Integration Gaps:** Failure to follow redirects (#3890), ignore server instructions (#1579), and lack of stdio transport support (#3889) indicate immature MCP protocol implementation.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-06-23
**Source:** `github.com/MoonshotAI/kimi-cli`

### 1. Today's Highlights
The latest release, **v1.48.0**, introduces critical stability improvements, including a fix for empty reasoning content round-tripping and enhanced logic to prevent infinite loops during repeated tool calls. Concurrently, the community is actively reporting edge cases regarding YOLO mode behavior and MCP server path resolution, while proposals for new streaming tools indicate a growing demand for finer-grained output control.

### 2. Releases
**Version 1.48.0** was released recently, featuring the following key updates:
*   **Bug Fix:** Resolved an issue where empty reasoning content failed to round-trip correctly ([PR #2446](https://github.com/MoonshotAI/kimi-cli/pull/2446)).
*   **Feature:** Implemented escalation logic for repeated tool calls; the CLI now injects reminders with increasing severity and forces a stop on dead-end streaks to prevent resource waste ([PR #2466](https://github.com/MoonshotAI/kimi-cli/pull/2466)).

### 3. Hot Issues
*   **[BUG] Kimi CLI is prompting for approval in yolo mode (#2448)**
    *   **Why it matters:** "Yolo" mode is designed for autonomous execution without user intervention. Prompts for approval break this workflow, forcing users to manually approve actions despite explicit configuration.
    *   **Community Reaction:** High relevance for users relying on full automation; currently has low engagement (0 👍) but represents a significant functional regression.
*   **[BUG] `kimi web` starts MCP servers from the CLI installation directory (#2469)**
    *   **Why it matters:** This breaks workspace-relative paths for MCP (Model Context Protocol) tools. Users cannot easily use local or project-specific MCP servers because the working directory is misaligned with the workspace root.
    *   **Community Reaction:** Critical for developers integrating custom tools; affects users on newer versions (0.18.0).
*   **[BUG] Kimi CLI hangs after detached child-process tool call (#2468)**
    *   **Why it matters:** A hanging state renders the CLI unusable until a manual restart. This is particularly problematic for long-running tasks or complex multi-step operations involving detached processes.
    *   **Community Reaction:** Indicates potential race conditions or signal handling issues in the process management layer.

### 4. Key PR Progress
*   **[FEAT] Add Monitor tool for per-line stdout streaming (#2471)**
    *   **Description:** Proposes a new `Monitor` tool that provides streaming output line-by-line, serving as a counterpart to existing background-task tools. This addresses the need for real-time visibility into long-running processes.
*   **[CHORE] Bump kimi-cli to 1.48.0 and kosong to 0.54.0 (#2467)**
    *   **Description:** The release PR that packaged the v1.48.0 updates, syncing version tags and internal dependencies.
*   **[FEAT] Escalate repeated-tool-call reminders and force-stop on dead-end streak (#2466)**
    *   **Description:** Ported logic from `kimi-code` to `kimi-cli`. It tracks consecutive identical tool calls (3+) and escalates warnings before forcibly stopping the turn to prevent infinite loops.

### 5. Feature Request Trends
*   **Granular Output Control:** The proposal for a `Monitor` tool suggests a trend toward needing better visibility into tool execution states, specifically streaming outputs rather than just final results.
*   **Robust Autonomy:** Users are pushing for more reliable "hands-off" modes (YOLO), indicating a desire for fewer false-positive approval prompts in automated workflows.

### 6. Developer Pain Points
*   **Autonomy Failures:** The primary frustration stems from the CLI breaking its own autonomy promises—specifically, requesting approvals in YOLO mode or hanging indefinitely after tool execution.
*   **Environment Pathing:** Issues with MCP server relative paths suggest that the CLI’s current working directory management is not aligning well with user expectations for workspace-local configurations, causing friction in tool integration.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-06-23

### 1. Today's Highlights
The OpenCode community is actively addressing critical stability regressions in version 1.14.50+, particularly regarding Alpine Linux compatibility and worker termination crashes. Significant progress was made on extending Model Context Protocol (MCP) capabilities beyond tools to include resource reading, alongside major refinements to the mobile and iOS PWA user experience.

### 2. Releases
No new releases were published in the last 24 hours. Current discussions indicate ongoing instability in versions 1.14.50 and 1.17.9, prompting urgent bug reports rather than celebration of new features.

### 3. Hot Issues
*   **[Alpine Linux TUI Failure]** #27589: A regression in v1.14.50 breaks the TUI on musl-based systems due to missing `getcontext` symbols. High engagement (37 comments) suggests this affects a significant portion of the Linux power-user base.
*   **[Zen Free Usage Limit Bypass]** #14273 & #33318: Users report that paid Zen balances or existing credits are ignored, triggering "Free usage exceeded" errors. This indicates a potential billing logic flaw in the Zen integration that impacts paying customers directly.
*   **[Worker Termination Crashes]** #32694 & #30221: Multiple reports of sessions crashing immediately after the first interaction with "Worker has been terminated" or generic "terminated" errors. This severely disrupts workflow continuity.
*   **[Copilot Provider Model Fetch Failures]** #31000: The `d7()` function incorrectly constructs URLs for GitHub Copilot model discovery, leading to connection failures for enterprise/github.com users.
*   **[Performance Degradation]** #33466 & #33399: Users report severe latency and CPU spikes (99-100%) causing unresponsiveness, raising concerns about efficiency in recent builds.
*   **[macOS PAC Trap Crash]** #32200: Immediate crash on macOS 15.3.1 Apple Silicon due to pointer authentication traps, blocking adoption on the latest OS.
*   **[GLM-5.2 Validation Errors]** #32821: Specific model compatibility issues where GLM-5.2 rejects OpenCode's message formatting, highlighting gaps in provider-specific serialization.
*   **[Permission System Override]** #31540: Clicking "Allow always" on edits inadvertently disables all deny rules for the session, posing a security risk for users relying on strict permission configs.
*   **[Bash Tool Safety]** #33077: Urgent call for protection against destructive commands (e.g., `rm -rf`) in the Bash tool, as current permission checks are superficial.
*   **[Windows File Deletion Freezes]** #33491: Deleting tracked files on Windows causes renderer freezes and ENOENT toasts, impacting UX for Windows developers managing large repos.

### 4. Key PR Progress
*   **[feat] MCP Resource Read Support** #33483: Implements `resources/read` for MCP, allowing models to access static resources alongside tools. This closes #15535 and expands MCP utility significantly.
*   **[fix] Mobile PWA Shell Improvements** #32798: Enhances iOS PWA with edge-to-edge rendering, updated launch screens, and proper scoping for installed app behavior.
*   **[feat] Mobile Bottom Navigation** #32797: Introduces a persistent bottom navigation bar for mobile devices, improving thumb-reachability and session switching.
*   **[fix] Worker RPC Error Handling** #33267: Ensures errors thrown in Bun workers are properly propagated back to the client, likely mitigating silent failures.
*   **[feat] `/btw` Background Session Command** #17198: Allows users to spawn lightweight background sessions, reducing token overhead for quick tasks.
*   **[fix] Diff Viewer Keybind** #33365: Adds a dedicated keybinding to open the diff viewer, streamlining the code review workflow.
*   **[fix] ACP Question Prompt Bridge** #33482: Resolves hanging `question` tools in ACP mode by correctly forwarding prompts via `extMethod`.
*   **[feat] Collapsible Server Rows** #33384: Adds UI usability improvements by making server lists collapsible on the homepage.
*   **[fix] Interleaved Reasoning Content** #14637: Supports interleaved `reasoning_content` for non-Claude models via the Anthropic SDK, fixing display issues for models like Kimi K2.5.
*   **[feat] Plugin Directory Discovery** #33391: Allows local plugins to be discovered via directory paths in `opencode.jsonc`, simplifying local plugin management.

### 5. Feature Request Trends
*   **Expanded MCP Capabilities:** Strong demand for moving beyond tool calling to include resource access (#33483) and better parameter handling (#33341).
*   **Multi-Agent Orchestration:** Interest in nested sub-agent spawning and workflow orchestration (#32694) indicates users are building complex, hierarchical AI workflows.
*   **Platform-Specific UX:** Continued requests for native-feeling mobile experiences (bottom nav, PWA polish) and robust IDE integrations (JetBrains plugin request #28573).
*   **Safety & Permissions:** Requests for granular control over shell execution safety (#33077) and more intuitive permission overrides.

### 6. Developer Pain Points
*   **Stability Regressions:** The frequency of crashes (Alpine musl, macOS PAC, Worker termination) in recent minor versions (1.14.x, 1.17.x) is a major friction point.
*   **Billing Logic Bugs:** The discrepancy between paid Zen credits and free usage limits is eroding trust in the commercial offering.
*   **Cross-Platform Inconsistency:** Issues vary wildly by OS (Windows file watchers, macOS pointer auth, Linux musl), suggesting a need for stronger cross-platform CI testing.
*   **Performance Variance:** Random CPU spikes and slowness make the tool unreliable for production workflows, especially compared to lighter alternatives.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-06-23

### 1. Today's Highlights
The Pi ecosystem is seeing significant activity around provider flexibility, with major strides in Anthropic OAuth support, local LLM integration, and new gateway providers like Merge Gateway and Anthropic Vertex. Stability improvements are also underway, addressing critical issues such as OpenAI Codex connection reliability, TUI rendering bugs, and session hanging behaviors.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **#4945: openai-codex Connection Reliability Issues** [Open]
    *   *Why it matters:* Users report the TUI getting stuck on "Working..." with no streamed text or error, requiring manual recovery.
    *   *Community Reaction:* High engagement with 66 comments and 30 👍, indicating widespread frustration with current stability.
    *   [Link](https://github.com/earendil-works/pi/issues/4945)
*   **#3357: Official local LLM provider extension** [Open]
    *   *Why it matters:* Proposes dynamic model fetching from local providers (llama.cpp, Ollama, LM Studio), crucial for offline/self-hosted workflows.
    *   *Community Reaction:* Strong support with 36 👍 and 27 comments, reflecting high demand for native local AI integration.
    *   [Link](https://github.com/earendil-works/pi/issues/3357)
*   **#5653: Move off Shrinkwrap** [Open]
    *   *Why it matters:* Addresses duplicate module installation causing separate API provider registries, leading to potential state inconsistencies.
    *   *Community Reaction:* Currently in discussion phase (15 comments), highlighting architectural concerns about dependency management.
    *   [Link](https://github.com/earendil-works/pi/issues/5653)
*   **#5571: pi -p hangs indefinitely when stdin is a non-TTY pipe** [Closed]
    *   *Why it matters:* Identified a bug where missing credentials caused indefinite hangs rather than immediate failures in piped modes.
    *   *Community Reaction:* Resolved, improving CLI robustness for scripting.
    *   [Link](https://github.com/earendil-works/pi/issues/5571)
*   **#5871: Anthropic OAuth-token detection is hardcoded** [Open]
    *   *Why it matters:* Current token detection relies on a hardcoded substring, breaking compatibility with non-standard OAuth implementations.
    *   *Community Reaction:* 6 comments, noting the need for configurable authentication modes.
    *   [Link](https://github.com/earendil-works/pi/issues/5871)
*   **#5291: Sessions hang on "working" with Anthropic subscription** [Closed]
    *   *Why it matters:* Similar to the OpenAI issue, this highlights intermittent streaming failures with Anthropic enterprise subscriptions.
    *   *Community Reaction:* 6 comments, 2 👍, suggesting this is a broader provider-agnostic streaming stability issue.
    *   [Link](https://github.com/earendil-works/pi/issues/5291)
*   **#4748: pi-tui getKeybindings() singleton breaks extensions** [Open]
    *   *Why it matters:* Module isolation issues cause extensions to resolve different instances of keybinding managers, leading to conflicts.
    *   *Community Reaction:* 5 comments, 2 👍, impacting extension developer experience.
    *   [Link](https://github.com/earendil-works/pi/issues/4748)
*   **#5990: TUI flickers when dialog content exceeds terminal height** [Open]
    *   *Why it matters:* Visual regression causing continuous screen repaints, degrading UX for large outputs.
    *   *Community Reaction:* New report (4 comments), quickly identified as a rendering bug.
    *   [Link](https://github.com/earendil-works/pi/issues/5990)
*   **#5952: ExtensionAPI session replacement API** [Closed]
    *   *Why it matters:* Proposes a safe API for extensions to trigger session replacements, previously only available via TUI commands.
    *   *Community Reaction:* 4 comments, 1 👍, enhancing extension capabilities.
    *   [Link](https://github.com/earendil-works/pi/issues/5952)
*   **#5989: pi update broke extension pi-lovely-codex** [Closed]
    *   *Why it matters:* Illustrates breaking changes in recent updates affecting third-party extensions.
    *   *Community Reaction:* 4 comments, highlighting the need for better backward compatibility guarantees.
    *   [Link](https://github.com/earendil-works/pi/issues/5989)

### 4. Key PR Progress
*   **#5994: Route OpenCode Go models through Anthropic** [Closed]
    *   *Summary:* Fixes compatibility for OpenCode Go models by routing them through the Anthropic Messages API instead of OpenAI, resolving metadata mismatches.
    *   [Link](https://github.com/earendil-works/pi/pull/5994)
*   **#5526: Require terminal events for OpenAI Responses streams** [Open]
    *   *Summary:* Addresses random stream stops by enforcing a terminal response event, improving reliability for OpenAI Responses API users.
    *   [Link](https://github.com/earendil-works/pi/pull/5526)
*   **#5987: Resolve --session by agent name via identity daemon** [Closed]
    *   *Summary:* Enables core Pi to correctly resolve agent names to session files using the identity daemon, fixing session loading for named agents.
    *   [Link](https://github.com/earendil-works/pi/pull/5987)
*   **#5859: Send responses prompts as instructions** [Closed]
    *   *Summary:* Corrects how OpenAI expects system prompts, moving them to top-level `instructions` to prevent replay issues.
    *   [Link](https://github.com/earendil-works/pi/pull/5859)
*   **#5985: Add Merge Gateway provider** [Closed]
    *   *Summary:* Introduces built-in support for Merge Gateway, allowing access to 40+ models via a single API key.
    *   [Link](https://github.com/earendil-works/pi/pull/5985)
*   **#5981: Linkify plain URLs in Text output** [Closed]
    *   *Summary:* Implements OSC 8 hyperlink support for plain URLs in TUI output, solving clickability issues for long URLs.
    *   [Link](https://github.com/earendil-works/pi/pull/5981)
*   **#5979: Fix session-id-readonly.test.ts failure** [Closed]
    *   *Summary:* Resolves test suite failures by mocking API key checks, ensuring cleaner CI/CD pipelines.
    *   [Link](https://github.com/earendil-works/pi/pull/5979)
*   **#5977: Allow explicit authMode overrides for Anthropic** [Closed]
    *   *Summary:* Adds a configuration flag to bypass hardcoded OAuth detection heuristics, fixing compatibility with various Anthropic setups.
    *   [Link](https://github.com/earendil-works/pi/pull/5977)
*   **#5262: Add Anthropic Vertex provider** [Open]
    *   *Summary:* Introduces a built-in provider for running Claude models on Google Cloud Vertex AI.
    *   [Link](https://github.com/earendil-works/pi/pull/5262)
*   **#5970: Add auto-router extension for DeepSeek** [Closed]
    *   *Summary:* Provides an extension to automatically route simple tasks to cheaper models (DeepSeek Flash) and complex ones to Pro, optimizing costs.
    *   [Link](https://github.com/earendil-works/pi/pull/5970)

### 5. Feature Request Trends
*   **Provider Agnosticism & Expansion:** There is a strong push for supporting diverse providers beyond standard OpenAI/Anthropic, including local LLMs (#3357), cloud-specific Anthropic endpoints like Vertex (#5262), and aggregated gateways like Merge Gateway (#5985).
*   **Authentication Flexibility:** Users are requesting more granular control over authentication methods, specifically allowing explicit OAuth/Bearer token detection for providers that don't follow standard key patterns (#5871, #5977).
*   **CLI/Extension API Maturity:** Requests for extending the CLI (`--session` resolution #5987) and Extension APIs (safe session replacement #5952, multi-select #5995) indicate a growing need for deeper programmatic control and automation capabilities.

### 6. Developer Pain Points
*   **Streaming Stability:** Recurring reports of sessions hanging on "Working..." or stopping mid-stream across OpenAI (#4945, #5526) and Anthropic (#5291) providers suggest fundamental issues with WebSocket handling and error recovery.
*   **TUI Rendering Bugs:** Multiple issues highlight visual glitches, including TUI flickering on tall dialogs (#5990), footer breaks with newline characters in session names (#5996), and URL clickability loss after wrapping (#5978).
*   **Dependency & Singleton Isolation:** Conflicts arising from module duplication in `node_modules` (#5653) and singleton instance mismatches in extensions (#4748) are causing subtle bugs that are difficult to debug.
*   **Breaking Changes for Extensions:** Recent updates have broken existing extensions (#5989), signaling a need for stricter versioning policies or backward compatibility layers to protect the plugin ecosystem.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-06-23

## 1. Today's Highlights
Qwen Code v0.19.1 was released with critical bug fixes for CLI session management and MCP server discovery, while v0.19.0 stabilized the VSCode companion integration. The community is actively discussing protocol decoupling for model switching and proposing significant UX improvements for the Terminal UI and voice dictation capabilities.

## 2. Releases
*   **v0.19.1**: A patch release addressing immediate stability concerns. Key updates include fixing session list cursor validation issues and enhancing MCP resource completion matching by name.
    *   [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.1)
*   **v0.19.0**: The latest stable release featuring improved CI/CD pipelines for auto-publishing the VSCode companion extension.
    *   [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.0)

## 3. Hot Issues
1.  **[Bug] Session List Cursor Validation (#5708)**: Critical fix for pagination logic; users reported unsafe negative values being accepted. (6 comments)
2.  **[Discussion] Protocol/AuthType Decoupling (#5758)**: High-interest debate on standardizing `providerId` vs `modelId` across CLI, ACP, and VSCode to simplify model switching. (5 comments)
3.  **[Bug] Missing API Key Despite .env (#3877)**: Persistent issue where environment variables in `~/.qwen/.env` are ignored, forcing manual auth selection. (5 comments)
4.  **[Bug] TUI Input Box Background Rendering (#5562)**: Visual glitch in Linux terminals where multi-line input breaks background color continuity. (4 comments)
5.  **[Bug] Semi-Invisible Cursor in Alacritty (#5713)**: Accessibility/usability issue affecting users of specific modern terminal emulators. (4 comments)
6.  **[Bug] LSP MaxRestarts Fractional Values (#5690)**: Type safety issue allowing non-integer values for retry counts, potentially causing logic errors. (4 comments)
7.  **[Bug] LSP Position/Limit Fractional Values (#5694)**: Similar type validation issue in LSP tools accepting floats for integer-only parameters. (4 comments)
8.  **[Bug] Shell/Monitor Param Types (#5698)]**: JSON schema mismatch where integer-only parameters are advertised as generic numbers. (4 comments)
9.  **[Bug] Session Limit Silently Ignored (#5700)**: UX annoyance where invalid `--limit` values silently fall back to defaults without warning. (4 comments)
10. **[Bug] MaxSessions Fractional Limits (#5704)**: Validation gap allowing fractional session caps, which can lead to unexpected daemon behavior. (4 comments)

## 4. Key PR Progress
1.  **Remote LSP Status Route (#5741)**: Adds structured, read-only LSP status endpoints for daemon/ACP clients, improving observability.
2.  **Stabilize VP Mouse Interactions (#5751)**: Fixes broken mouse tracking in virtualized terminals when overlays or collapsed blocks appear.
3.  **Extension Operation Polling (#5753)**: Introduces async polling for extension mutations (install/enable/disable), enabling better UI feedback in daemon modes.
4.  **Daemon Workspace Voice/Control APIs (#5765)**: Expands the daemon API to include voice configuration, transcription, and workspace trust management.
5.  **Fix Context Token Total from Per-Session Chat (#5764)**: Corrects telemetry data collection where global singleton usage skewed token counts across sessions.
6.  **Bundle Audio Capture for Mirror Installs (#5747)**: Ensures native voice packages are bundled correctly, resolving installation issues on restricted registries.
7.  **Always Show Chat View in VSCode Sidebar (#5757)**: Simplifies the VSCode UI by removing complex runtime detection and forcing the chat view to the Activity Bar.
8.  **Workspace Permissions Rules API (#5743)**: Provides REST/ACP endpoints for managing persistent allow/ask/deny permission rules at the workspace level.
9.  **Vision Bridge for Text-Only Models (#5126)**: Allows text-only models to handle image references by automatically routing to a vision-capable model on the same provider.
10. **Deterministic Guards for Destructive Commands (#5754)**: Implements a pre-filter to block dangerous Git/IaC commands in auto-mode before LLM classification occurs.

## 5. Feature Request Trends
*   **Voice Integration**: Strong demand for voice dictation in the Web Shell (#5755) and fallback vision models for text-only setups (#5597).
*   **Safe Mode/Troubleshooting**: Request for a `--safe-mode` flag to disable all customizations (hooks, extensions, MCPs) for debugging (#4943).
*   **Chrome Extension Revival**: Proposal to rebuild browser integration using a Daemon + WebUI architecture for better performance and security (#5626).
*   **Performance Optimization**: Suggestions to use `llama.cpp` slot state save/restore to eliminate costly full prompt re-processing during context compression (#5760).

## 6. Developer Pain Points
*   **Type Validation Gaps**: A significant cluster of bugs (#5690, #5694, #5698, #5700, #5704, #5640, #5648, #5664, #5672, #5692) highlights a systemic issue where integer/count parameters accept fractional values, requiring extensive validation fixes.
*   **Environment Variable Parsing**: Users frequently struggle with `.env` file not being respected or credential types not being cast correctly (#3877, #5717).
*   **Terminal Rendering Artifacts**: Visual bugs in TUI backgrounds (#5562) and cursors (#5713) remain persistent friction points for Linux/macOS users.
*   **Configuration Complexity**: The ongoing debate over how `providerId`, `protocol`, and `modelId` interact suggests confusion in the current configuration model, leading to the reverted PR #5089 and subsequent discussion in #5758.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

` blocks from OpenAI-compatible gateways, preserving the "thinking" UX for non-native providers.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3222)
4.  **[Bug] Self-Q&A Loop Bug (#2942)**
    *   **Why it matters:** Reports a critical bug where the agent acts on its own unrequested instructions, causing project instability. High urgency for user safety.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/2942)
5.  **[Enhancement] Provider-Scoped Auth Sources (#3004)**
    *   **Why it matters:** Allows external commands/secret managers to supply API keys, removing the need to store secrets in plain-text config files or env vars.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3004)
6.  **[Epic] Route Resolution Separation (#2608)**
    *   **Why it matters:** Fundamental architectural shift to decouple provider identity, model identity, and wire IDs. Ensures a model string alone doesn't dictate routing.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/2608)
7.  **[Bug] DSML Tool-Call Streaming Regression (#2900)**
    *   **Why it matters:** Fixes Windows/SiliconFlow specific issues where tool-call markup streamed as ordinary text instead of triggering tool execution.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/2900)
8.  **[Enhancement] Web Search Reliability (#3079)**
    *   **Why it matters:** Improves `web_search` tool stability with SearXNG JSON backend and visible agent status, addressing common complaints about silent failures.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/3079)
9.  **[Bug] Premature Completed-State (#2989)**
    *   **Why it matters:** Fixes Ollama/qwen3-coder issues where streams ended prematurely, marking work as complete before actual processing finished.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/2989)
10. **[Enhancement] Capability-Aware Fallback Chain (#2574)**
    *   **Why it matters:** Implements visible, ordered provider fallbacks when active providers fail, preventing silent vendor switching without user consent.
    *   [Link](https://github.com/Hmbown/CodeWhale/issues/2574)

### 4. Key PR Progress
Significant merges and open work driving v0.8.65 readiness.

1.  **feat(fleet): Fleet Profile Types + Config Plumbing (#3469)**
    *   Merged foundational types (`FleetProfile`, `FleetRole`, etc.) for the Fleet execution substrate.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3469)
2.  **feat(provider): Add Qianfan Route Fixture (#3425)**
    *   Added first-class Baidu Qianfan support with provider-scoped auth and model env configs.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3425)
3.  **fix(bridge): Clear activeTurnId after Approval (#3468)**
    *   Fixes a blocking issue where user input remained locked after an approval decision in the bridge interface.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3468)
4.  **feat(config): EPIC #2608 Route Foundation (#3458)**
    *   Introduced `ReadyRouteCandidate` and `RouteResolver` modules, laying the groundwork for canonical route resolution.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3458)
5.  **fix(tui): Throttle Sub-Agent Mailbox Telemetry (#3454)**
    *   Prevents UI lag caused by chatty child agents flooding the event channel with telemetry.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3454)
6.  **WIP: Route Inline Reasoning Streams (#3446)**
    *   Implements `reasoning_stream_style` config to handle inline `<think>` tags from various providers.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3446)
7.  **fix: Prevent Prompt Text as Mode Switch (#3455)**
    *   Critical fix for a bug where ordinary user prompts were incorrectly interpreted as TUI mode-change commands.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3455)
8.  **feat(automation): Explicit Per-Automation Settings (#3467)**
    *   Allows granular control over mode, shell trust, and approval settings for scheduled automation runs.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3467)
9.  **refactor(tools): Trim Eager Tool Surface (#3463)**
    *   Reduces the default toolset by folding `task_shell_*` and `tool_search_*` into cleaner abstractions.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3463)
10. **ci: Advisory Claude PR Review Workflow (#3456)**
    *   Adds an automated AI code review step using Claude for all non-draft PRs.
    *   [Link](https://github.com/Hmbown/CodeWhale/pull/3456)

### 5. Feature Request Trends
*   **Provider Agnosticism & Routing:** Strong demand for robust, provider-scoped routing that treats different LLM endpoints (OpenRouter, Qianfan, SiliconFlow) uniformly via standardized wire protocols rather than hardcoded exceptions.
*   **Fleet/Agent Orchestration:** Users are pushing for mature multi-agent capabilities ("Fleet") with clear profiles, loadouts, and delegation policies, moving beyond single-turn interactions.
*   **Security & Secret Management:** Increasing requests for integrating external secret managers and avoiding plaintext storage of API keys in config files.
*   **Reasoning Visibility:** Need for better handling and display of "thinking" or reasoning steps from models that use inline XML tags, ensuring parity with native DeepSeek experiences.

### 6. Developer Pain Points
*   **TUI Stability & Freezing:** Recurring reports of the UI freezing or becoming unresponsive when handling multiple sub-agents or complex tool outputs.
*   **Prompt Parsing Leaks:** Users frustrated by the TUI incorrectly interpreting natural language in prompts as control commands (mode switches), leading to unexpected session behavior.
*   **Tool-Call Serialization:** Issues with specific providers (SiliconFlow, Ollama) where tool call markers are not correctly parsed, resulting in raw text output instead of functional tool execution.
*   **Configuration Complexity:** The transition to the new provider/route architecture (#2608) has introduced complexity, with some users struggling with auth setup and endpoint configuration for newer providers.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*