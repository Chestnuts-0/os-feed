# AI CLI Tools Community Digest 2026-06-22

> Generated: 2026-06-22 10:22 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Cross-Tool Comparison Report
**Date:** 2026-06-22
**Prepared by:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The AI CLI landscape in mid-2026 is characterized by a shift from basic code generation to complex, autonomous agent orchestration with robust session persistence. While major incumbents like Claude Code and OpenAI Codex focus on stabilizing enterprise-grade reliability and billing logic, open-source alternatives like OpenCode and Pi are rapidly innovating on extensibility, local-first integration, and granular user control. The market is consolidating around three pillars: secure sandboxed execution, persistent memory/context management, and seamless multi-provider interoperability, with stability regressions currently outweighing new feature launches across all platforms.

## 2. Activity Comparison

| Tool | Issues (Hot/Total Focus) | PRs (Active/Merged) | Release Status | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 Hot Issues | 2 (Maintenance) | None | Stability & Platform Consistency |
| **OpenAI Codex** | 10 Hot Issues | 10 (Core Logic) | Alpha (`rust-v0.142.0-alpha.10`) | Billing Logic & Protocol Refinement |
| **Gemini CLI** | 10 Hot Issues | 10 (Session/Auth) | None | Auth Stability & Memory System |
| **GitHub Copilot** | 10 Hot Issues | 1 (Spam/Irrelevant) | None | Enterprise Docs & ARM64 Stability |
| **Kimi Code CLI** | 3 Hot Issues | 1 (Merged) | None | MCP Integration & Loop Detection |
| **OpenCode** | 10 Hot Issues | 10 (Feature/Bugfix) | None | TUI Stability & MCP Schema Robustness |
| **Pi** | 10 Hot Issues | 10 (Extension/Core) | Patch (`v0.79.10`) | Agent Loop Stability & Extensibility |
| **Qwen Code** | 10 Hot Issues | 10 (Voice/Session) | Minor (`v0.18.5`) | Voice Dictation & Native Packaging |
| **DeepSeek TUI** | 10 Hot Issues | 10+ (Security/UX) | Draft (`v0.8.64`) | Security Hardening & Agent Safety |

## 3. Shared Feature Directions

*   **Session Persistence & Memory Systems:**
    *   *Tools:* **OpenCode** (Session Goals), **Pi** (Compaction Events), **Gemini CLI** (Auto Memory), **Kimi Code** (Persistent Context).
    *   *Need:* Users universally demand the ability to retain context across restarts, define long-term session goals, and manage context window compaction transparently to avoid data loss or abrupt resets.
*   **Robust MCP Integration:**
    *   *Tools:* **OpenCode** (Schema Validation), **Kimi Code** (Server Lifecycle), **Gemini CLI** (Elicitation).
    *   *Need:* Moving beyond basic tool calling to resilient MCP implementations that handle schema variations, prevent stale server references, and support dynamic elicitation without crashing the host CLI.
*   **Agent Safety & Human-in-the-Loop:**
    *   *Tools:* **DeepSeek TUI** (Approval Modals), **Qwen Code** (Skill Confirmation), **Pi** (Secret Disclosure).
    *   *Need:* As agents become more autonomous, communities require explicit confirmation steps for destructive operations, auto-generated artifacts, and sensitive data handling to prevent unintended side effects.
*   **Cross-Platform Native Stability:**
    *   *Tools:* **Claude Code** (Node.js v25/Windows), **Copilot** (ARM64), **Qwen** (Voice Addons), **OpenCode** (Windows Paths).
    *   *Need:* Significant effort is required to ensure binaries and native modules function correctly across diverse architectures (ARM64, musl) and operating systems, particularly regarding sandboxing and local file access.

## 4. Differentiation Analysis

*   **Enterprise & Reliability Focus:**
    *   **Claude Code** and **GitHub Copilot** prioritize stability, authentication reliability, and enterprise documentation. Copilot specifically lags in feature velocity but emphasizes policy enforcement and sandbox transparency.
    *   **OpenAI Codex** is differentiated by its aggressive protocol refinement (cell idempotency, linear observations) but is currently hampered by severe billing regressions that undermine trust.
*   **Extensibility & Open Architecture:**
    *   **OpenCode** and **Pi** stand out for their modular designs. OpenCode focuses on TUI robustness and MCP schema tolerance, while Pi emphasizes a rich extension API for local LLMs and custom providers. These tools cater to developers who want to customize or extend core behaviors.
*   **Autonomy & Agent Orchestration:**
    *   **DeepSeek TUI** and **Kimi Code** are pushing boundaries in autonomous agent behavior. DeepSeek focuses on "read-before-edit" guardrails and sub-agent personas, while Kimi addresses infinite loops and ACP (Agent Communication Protocol) stability.
*   **Multimodal Innovation:**
    *   **Qwen Code** is uniquely focused on integrating voice dictation and native audio capture, addressing accessibility and hands-free workflows, a area less emphasized by competitors in this snapshot.

## 5. Community Momentum & Maturity

*   **High Momentum/Iterative:** **OpenCode** and **Pi** show the highest activity density with numerous PRs addressing core stability and feature parity. Their communities are actively shaping the direction of session management and extension APIs.
*   **Rapidly Maturing:** **DeepSeek TUI** demonstrates strong momentum through its v0.8.64 release train, focusing heavily on security hardening and agent safety, indicating a maturation phase where stability and trust are paramount.
*   **Stabilization Phase:** **Claude Code** and **Gemini CLI** are in a stabilization phase, with community energy directed toward fixing critical regressions (auth, crashes, memory leaks) rather than introducing new paradigms.
*   **Trust Deficit:** **OpenAI Codex** faces significant community friction due to billing unpredictability, slowing its momentum despite active technical development.

## 6. Trend Signals

*   **Billing Transparency is Critical:** The severe backlash against OpenAI Codex’s rate-limit regressions signals that future CLI success depends on predictable, transparent billing and token accounting. Users will abandon tools that drain budgets unexpectedly.
*   **From Chat to Agents:** The focus has shifted from simple Q&A to managing "agents" with sub-tools, memory, and sandbox constraints. Tools that fail to handle agent loops, stale states, or permission boundaries will face higher churn.
*   **Local-First Hybrid Models:** The strong demand in **Pi** and **OpenCode** for local LLM integration and offline capabilities suggests a trend toward hybrid architectures where users can swap between cloud and local models without losing session context.
*   **Security by Design:** The emphasis on "read-before-edit," secret disclosure scopes, and sandbox intent enforcement indicates that security is no longer a backend concern but a core UX requirement for CLI tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**
*Data Source: anthropics/skills (as of 2026-06-22)*

### 1. Top Skills Ranking
*Based on community attention, PR complexity, and discussion volume.*

1.  **Frontend-Design Skill Improvement** ([PR #210](https://github.com/anthropics/skills/pull/210))
    *   **Functionality:** Refines the core frontend-design skill to ensure instructions are actionable within a single conversation, improving coherence and specificity.
    *   **Status:** Open.
    *   **Highlights:** Critical update for developers using Claude for UI generation; focuses on reducing ambiguity in design token and component instructions.

2.  **ServiceNow Platform Skill** ([PR #568](https://github.com/anthropics/skills/pull/568))
    *   **Functionality:** A comprehensive enterprise skill covering ITSM, ITOM, SecOps, ITAM/SAM, FSM, and IntegrationHub.
    *   **Status:** Open.
    *   **Highlights:** Addresses high demand for enterprise-grade ERP/CRM assistance, moving beyond simple scripting to architectural and operational guidance.

3.  **Document Typography Skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Corrects typographic errors in AI-generated documents, specifically targeting orphan/widow lines and numbering misalignments.
    *   **Status:** Open.
    *   **Highlights:** Solves a pervasive pain point in professional document generation, ensuring publication-ready output.

4.  **ODT (OpenDocument) Skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
    *   **Functionality:** Enables creation, template filling, and HTML conversion for OpenDocument formats (.odt, .ods).
    *   **Status:** Open.
    *   **Highlights:** Fills a gap in open-standard document support, appealing to users avoiding proprietary Microsoft formats.

5.  **AURELION Skill Suite** ([PR #444](https://github.com/anthropics/skills/pull/444))
    *   **Functionality:** Introduces a structured cognitive framework including kernel, advisor, agent, and memory components for professional knowledge management.
    *   **Status:** Open.
    *   **Highlights:** Represents a shift toward "agentic" skills that manage context and reasoning structures rather than just executing tasks.

6.  **Masonry Image & Video Generation Skill** ([PR #335](https://github.com/anthropics/skills/pull/335))
    *   **Functionality:** Integrates CLI tools for Imagen 3.0 and Veo 3.1 for text-to-image and text-to-video generation.
    *   **Status:** Open.
    *   **Highlights:** Expands Claude Code’s capabilities into multimodal content creation pipelines.

7.  **Testing Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723))
    *   **Functionality:** Covers unit testing, React component testing (Testing Library), and testing philosophy (Testing Trophy).
    *   **Status:** Open.
    *   **Highlights:** Provides a holistic approach to quality assurance, balancing technical implementation with strategic testing decisions.

8.  **SAP-RPT-1-OSS Predictor Skill** ([PR #181](https://github.com/anthropics/skills/pull/181))
    *   **Functionality:** Utilizes SAP’s open-source tabular foundation model for predictive analytics on business data.
    *   **Status:** Open.
    *   **Highlights:** Niche but high-value integration for SAP-centric enterprises leveraging open-source AI models.

### 2. Community Demand Trends
*Derived from Issue discussions and feature requests.*

*   **Enterprise & Trust Boundaries:** Significant concern exists regarding security and trust boundaries. Issues highlight fears of "namespace abuse" where community skills mimic official Anthropic ones ([Issue #492](https://github.com/anthropics/skills/issues/492)). There is also strong demand for organizational skill sharing within teams ([Issue #228](https://github.com/anthropics/skills/issues/228)).
*   **Robust Memory & Context Management:** Users are actively seeking better ways to handle long-running agent contexts. Proposals for "compact-memory" symbolic notation ([Issue #1329](https://github.com/anthropics/skills/issues/1329)) and persistent memory skills ([PR #154](https://github.com/anthropics/skills/pull/154)) indicate a need for efficient state management in prolonged sessions.
*   **Platform Integration (MCP & Bedrock):** Early interest persists in exposing Skills as Model Context Protocol (MCP) servers ([Issue #16](https://github.com/anthropics/skills/issues/16)) and broader cloud compatibility, such as AWS Bedrock integration ([Issue #29](https://github.com/anthropics/skills/issues/29)).
*   **Developer Tooling Reliability:** Heavy focus on fixing the `skill-creator` pipeline. Users are frustrated by evaluation scripts failing on Windows or reporting inaccurate recall rates, indicating a demand for more robust, cross-platform development tools for creating skills.

### 3. High-Potential Pending Skills
*Active PRs with significant technical discussion or bug-fix urgency.*

1.  **Skill-Creator Evaluation Fix** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
    *   **Why it matters:** Fixes a critical bug where `run_eval.py` always reports 0% recall, breaking the skill description optimization loop. Merging this is essential for the health of the skill creation ecosystem.
2.  **PDF Case-Sensitivity Fix** ([PR #538](https://github.com/anthropics/skills/pull/538))
    *   **Why it matters:** Resolves silent failures in the PDF skill on case-sensitive file systems (Linux/macOS). This is a high-impact bug fix for existing users.
3.  **DOCX Tracked Change Collision Fix** ([PR #541](https://github.com/anthropics/skills/pull/541))
    *   **Why it matters:** Prevents document corruption when adding tracked changes to files with existing bookmarks. Critical for enterprise document workflow stability.
4.  **Windows Subprocess Compatibility** ([PR #1050](https://github.com/anthropics/skills/pull/1050))
    *   **Why it matters:** Fixes fundamental blockers for Windows users attempting to use `skill-creator` scripts, expanding the contributor base to Windows developers.

### 4. Skills Ecosystem Insight
The community’s most concentrated demand is for **enterprise-grade reliability and security**, specifically through robust memory management for long-running agents, secure organizational sharing mechanisms, and rigorous validation of skill-triggering behaviors to prevent trust boundary violations.

---

# Claude Code Community Digest: 2026-06-22

## 1. Today's Highlights
The community focus today centers on critical stability regressions, particularly the Node.js v25 compatibility crash (#9628) and high CPU usage during idle states (#19393). Additionally, significant attention is paid to cross-platform consistency issues, including Windows console flashing (#14828) and persistent authentication failures (#69706, #70002).

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **[BUG] Cowork Edit/Write tools silently truncate files** (#53940)
    *   *Why it matters:* Deterministic data loss in core editing tools affects file integrity.
    *   *Reaction:* 38 comments, 13 upvotes. High engagement due to severity.
*   **Windows: Console window flashing when executing tools** (#14828)
    *   *Why it matters:* Major UX degradation on Windows environments.
    *   *Reaction:* 32 comments, 30 upvotes. Strong community consensus on frustration.
*   **High CPU usage (100%+) when Claude Code instances are idle** (#19393)
    *   *Why it matters:* Makes the tool unusable on lower-end hardware or in WSL2 environments.
    *   *Reaction:* 25 comments, 24 upvotes. Affects performance and battery life.
*   **RTL Support for Hebrew & Arabic** (#38005)
    *   *Why it matters:* Critical accessibility and localization gap for non-LTR languages.
    *   *Reaction:* 23 comments, 58 upvotes. Highest upvote count, indicating strong demand.
*   **Bash tool calls emitted as raw `<invoke>` text** (#63870)
    *   *Why it matters:* Breaks command execution pipeline; requires JSONL evidence for debugging.
    *   *Reaction:* 20 comments, 26 upvotes. Users providing detailed repro steps.
*   **Support standard `.github/skills/` directory** (#16345)
    *   *Why it matters:* Aligns CLI behavior with the recommended `.agents/skills` standard.
    *   *Reaction:* 16 comments, 28 upvotes. Feature parity request.
*   **CC crashes with new release of Nodejs v25** (#9628)
    *   *Why it matters:* Compatibility break with the latest Node.js LTS/Current versions.
    *   *Reaction:* 14 comments, 22 upvotes. Blocking issue for users upgrading their runtime.
*   **Persistent HTTP 429 on auto-mode classifier** (#60438)
    *   *Why it matters:* Rate limiting errors despite account-side config, impacting reliability.
    *   *Reaction:* 13 comments, 2 upvotes. Complex backend interaction issue.
*   **API Error: 401 Invalid authentication credentials** (#69706)
    *   *Why it matters:* Basic access failure for new or updated installations.
    *   *Reaction:* 8 comments, 9 upvotes. Recent spike in reports.
*   **Anthropic API Error: Service Unavailable** (#69942)
    *   *Why it matters:* Indicates potential backend instability or outage.
    *   *Reaction:* 6 comments, 11 upvotes. Reported same day as creation.

## 4. Key PR Progress
*   **fix: print error message before silent exit in edit-issue-labels.sh** (#69916)
    *   *Summary:* Resolves silent failures in the triage workflow script when called without arguments.
    *   *Link:* https://github.com/anthropics/claude-code/pull/69916
*   **feat: add shell completions (bash, zsh, fish)** (#4943)
    *   *Summary:* Adds static completion scripts for major shells to improve CLI usability.
    *   *Link:* https://github.com/anthropics/claude-code/pull/4943

*(Note: Only 2 PRs were updated in the last 24 hours. No additional PRs available.)*

## 5. Feature Request Trends
*   **Accessibility & Internationalization:** Strong demand for RTL support (#38005) and screen reader announcements for permissions/generation status (#69998, #70000).
*   **Standardization:** Requests to align CLI with standard directories like `.github/skills/` (#16345) and granular logging flags for OTEL (#68852).
*   **Timezone Awareness:** Need for optional timezone fields in scheduled triggers to prevent UTC drift (#50529).
*   **Cross-Surface Memory:** Desire for shared state across sessions and surfaces to maintain context over long conversations (#69903).

## 6. Developer Pain Points
*   **Platform Instability:** Recurring crashes on Windows (Node.js v25 incompatibility #9628, BEX64 crashes #62251) and macOS (API outages #69942, random text insertion under load #69829).
*   **Authentication Friction:** Multiple reports of OAuth failures, specifically on Windows Desktop (#39189, #69706) and unclear feedback loops during manual code paste (#69978).
*   **Resource Hogging:** Idle processes consuming 100%+ CPU (#19393) and session data loss upon app updates (#65669).
*   **UI/UX Gaps:** Silent truncations in Cowork tools (#53940), console flashing on Windows (#14828), and lack of feedback for screen readers (#69998).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-06-22

### 1. Today's Highlights
The Codex community is primarily concerned with severe regressions in rate-limiting and budget consumption on the Plus plan, with users reporting up to a 20x increase in token costs per prompt. Concurrently, significant stability issues plague the Windows and macOS desktop applications, ranging from sandbox helper failures to infinite recursion crashes in dock plugins. On the development front, the team is actively refining the "code-mode" protocol to improve cell idempotency, observation handling, and sandbox intent enforcement across remote executors.

### 2. Releases
*   **CLI `rust-v0.142.0-alpha.10`**: A new alpha release for the Rust-based CLI tool was published. While specific changelog details are sparse in this snapshot, it coincides with reported stability issues on macOS Intel architectures (SIGTRAP crashes in v0.141.0/v0.142.0-alpha).
    *   [GitHub Release](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.10)

### 3. Hot Issues
1.  **[Bug] Rate-limit cost jumped ~10-20x on Plus Plan** (#28879)
    *   *Why it matters:* Users report their 5-hour budget draining in 2-3 prompts on `gpt-5.5`, indicating a critical regression in billing logic or token accounting.
    *   *Reaction:* 213 👍, 109 comments. High urgency.
2.  **[Bug] SQLite feedback logs consume excessive SSD endurance** (#28224)
    *   *Why it matters:* Local logging writes ~640 TB/year equivalent data, posing hardware risks for long-term users.
    *   *Reaction:* 65 👍, 13 comments.
3.  **[Bug] Unable to open past conversation history in VS Code Extension** (#18993)
    *   *Why it matters:* Regression in v1.117.0 prevents access to prior sessions, disrupting workflow continuity.
    *   *Reaction:* 51 👍, 33 comments.
4.  **[Bug] Windows Sandbox Setup Helper Fails** (#28982)
    *   *Why it matters:* Native sandbox setup fails with "module not found" errors in app v26.616.3309.0, breaking isolated execution capabilities.
    *   *Reaction:* 9 👍, 28 comments.
5.  **[Bug] Missing field `sandboxPolicy` in Desktop Browser Tools** (#29205)
    *   *Why it matters:* Annotation and browser automation tools fail due to missing configuration fields in recent desktop builds.
    *   *Reaction:* 0 👍, 15 comments.
6.  **[Bug] WebSearch Returns Cloudflare 403 Challenge** (#29197)
    *   *Why it matters:* Internet access within Codex is blocked by Cloudflare managed challenges, preventing web research functionality.
    *   *Reaction:* 0 👍, 9 comments.
7.  **[Bug] Persistent Audio Transcription Failures** (#18460)
    *   *Why it matters:* Voice dictation remains unreliable on macOS, affecting accessibility and hands-free coding workflows.
    *   *Reaction:* 13 👍, 7 comments.
8.  **[Bug] VS Code Blank Sidebar in Remote SSH** (#24601)
    *   *Why it matters:* Remote development workflows are broken in extension v26.519.32039 due to UI rendering failures.
    *   *Reaction:* 8 👍, 7 comments.
9.  **[Bug] macOS Zombie Processes Causing HID Lag** (#25744)
    *   *Why it matters:* Resource leaks in Computer Use/MCP helpers cause system-wide input lag and WindowServer stalls on macOS.
    *   *Reaction:* 2 👍, 6 comments.
10. **[Bug] Windows App Displays "Something Went Wrong"** (#29320)
    *   *Why it matters:* General application failure post-update on Windows 11 Enterprise, suggesting widespread deployment instability.
    *   *Reaction:* 0 👍, 11 comments.

### 4. Key PR Progress
1.  **[Code-Mode] Use client cell IDs and linear observations** (#29398)
    *   *Summary:* Optimizes protocol state by generating compact 16-char CellIds and removing arbitrary observation keys to reduce replay storage.
2.  **[Code-Mode] Release acknowledged terminal observations** (#29401)
    *   *Summary:* Prevents memory bloat by allowing the release of completed/terminated terminal observations rather than retaining them until session end.
3.  **[Sandbox] Apply sandbox intent inside remote exec servers** (#29113)
    *   *Summary:* Enables remote executors to interpret and enforce sandbox intents using their native OS paths, completing the boundary established in PR #29108.
4.  **[Code-Mode] Make create and observe retry-safe** (#29397)
    *   *Summary:* Adds idempotency keys to `CreateCellRequest` and `ObserveRequest` to handle lost IPC responses without duplicating cells or consuming orphaned output.
5.  **[Code-Mode] Expose transport-neutral session runtime** (#29292)
    *   *Summary:* Decouples the session runtime from specific transports, allowing out-of-process hosts to manage cancellation and lifecycle safely.
6.  **[Rollout] Configure budget reminder thresholds** (#29423)
    *   *Summary:* Allows explicit configuration of token-based reminder intervals (e.g., at 65k, 32k tokens remaining) to help users manage budget visibility.
7.  **[Code-Mode] Make cell creation idempotent** (#29403)
    *   *Summary:* Linearizes concurrent cell creations using stable request identities to prevent orphaned handles when responses are canceled or lost.
8.  **[Code-Mode] Type cells by execution capability** (#29400)
    *   *Summary:* Introduces distinct types for continuing vs. pause-at-frontier execution to prevent invalid state combinations and clarify pending observability.
9.  **[Security] Reject remote images at app-server ingress** (#29419)
    *   *Summary:* Blocks HTTP(S) image URLs at the ingress layer for turns and threads, forcing conversion to model-visible text or rejection.
10. **[Sandbox] Report remote sandbox denials semantically** (#29424)
    *   *Summary:* Improves error reporting by classifying sandbox failures semantically rather than exposing concrete OS-specific `SandboxType` details.

### 5. Feature Request Trends
*   **Context Preservation & Compaction:** Users are requesting better handling of long-running sessions, specifically asking for preservation of the last N operational steps during context compaction to maintain continuity (#29356).
*   **Workflow Integration:** There is a strong demand for deeper IDE integration, such as the ability to create worktrees directly from remote branches in the sidebar (#18961) and improved diff loading for large files (#23709).
*   **Provider Management:** Users expect session history to persist seamlessly when switching global providers in the desktop app (#17316).

### 6. Developer Pain Points
*   **Unpredictable Billing/Ratelimits:** The most acute pain point is the drastic, unexplained increase in token cost and rate-limit consumption on Plus plans, leading to rapid budget exhaustion (#28879, #28823).
*   **Desktop Application Stability:** Windows and macOS desktop apps are experiencing frequent crashes, UI freezes, and sandbox initialization failures (#28982, #29205, #29320, #28237).
*   **Resource Exhaustion:** Local logging mechanisms are causing excessive disk I/O and SSD wear (#28224), while macOS processes are leaking resources, causing system lag (#25744, #29408).
*   **Connectivity & Authentication:** Issues with WebSearch being blocked by Cloudflare (#29197) and Business users facing repeated OAuth invalidations (#28672) hinder reliable usage.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-06-22
**Source:** `google-gemini/gemini-cli`

### 1. Today's Highlights
The community is actively discussing critical authentication failures affecting enterprise users, with multiple reports of sudden sign-outs and OAuth token exchange errors. Significant engineering efforts are underway to stabilize the memory and session systems, addressing issues ranging from corrupt session files to infinite retry loops in the Auto Memory subsystem. Security transparency remains a focal point, with recent patches clarifying how workspace trust dialogs display hook executions to users.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **[Login/OAuth Failures]** Users report sudden sign-outs and "Invalid response body" errors during token exchange. This impacts both personal and licensed organizational accounts.
    *   [#28072](https://github.com/google-gemini/gemini-cli/issues/28072) (11 comments)
    *   [#28088](https://github.com/google-gemini/gemini-cli/issues/28088) (4 comments)
*   **[Generalist Agent Hangs]** A P1 bug where the generalist agent freezes indefinitely on simple tasks (e.g., folder creation), forcing users to disable sub-agent delegation.
    *   [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (7 comments, 8 👍)
*   **[Memory System Stability]** Multiple P2/P1 issues highlight instability in the "Auto Memory" feature, including infinite retries on low-signal sessions and silent failures of invalid patches.
    *   [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) (5 comments)
    *   [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) (3 comments)
    *   [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) (2 comments)
*   **[Security & Redaction]** Concerns raised about deterministic redaction and excessive logging in Auto Memory, which may expose sensitive data before the model processes it.
    *   [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) (5 comments)
*   **[Browser Agent Resilience]** Users request automatic session takeover and lock recovery for the browser agent, noting its current "fail-fast" behavior is disruptive in persistent modes.
    *   [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) (3 comments)
*   **[Shell Command Stuck]** A P1 issue where simple CLI commands leave the agent hanging in an "Awaiting user input" state long after completion.
    *   [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (4 comments, 3 👍)
*   **[AST-Aware Tooling]** An epic investigating the value of AST-aware file reads and searches to reduce token noise and improve navigation precision.
    *   [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) (7 comments, 1 👍)
*   **[Subagent Visibility]** Requests to make subagent trajectories visible via `/chat share` to aid in debugging and evaluation.
    *   [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) (2 comments, 1 👍)
*   **[Memory Leak/Crash]** Reports of the CLI crashing due to out-of-memory errors when processing large file lists.
    *   [#26588](https://github.com/google-gemini/gemini-cli/issues/26588) (6 comments)
*   **[Agent Permissions]** Users report that subagents are running automatically despite being disabled in config since v0.33.0.
    *   [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) (2 comments)

### 4. Key PR Progress
*   **[MCP Elicitation]** Implemented form and URL-based MCP elicitation capabilities in the core client, aligning with the 2025-11-25 spec.
    *   [#28089](https://github.com/google-gemini/gemini-cli/pull/28089)
*   **[Message Inspector Guard]** Fixed a bug where `isFunctionCall()` returned true for empty parts arrays, preventing misclassification of model messages.
    *   [#28068](https://github.com/google-gemini/gemini-cli/pull/28068)
*   **[GCP Project Validation]** Added validation for GCP project IDs to prevent Auto Memory from storing invalid aliases that cause 403/CONSUMER_INVALID errors.
    *   [#27916](https://github.com/google-gemini/gemini-cli/pull/27916)
*   **[Security Hook Disclosure]** Fixed the workspace-trust dialog to correctly display hooks defined in the canonical nested shape, ensuring users see actual command executions.
    *   [#27915](https://github.com/google-gemini/gemini-cli/pull/27915)
*   **[Web Search Latency]** Introduced a 120-second timeout for the `google_web_search` tool to prevent agents from waiting indefinitely.
    *   [#27910](https://github.com/google-gemini/gemini-cli/pull/27910)
*   **[Session Recovery]** Fixed issues with loading JSONL sessions when `projectHash` is missing or metadata lines are corrupt.
    *   [#27904](https://github.com/google-gemini/gemini-cli/pull/27904)
    *   [#27912](https://github.com/google-gemini/gemini-cli/pull/27912)
*   **[Resume Prompt Fix]** Prevented the CLI from offering to resume sessions that were not successfully saved (e.g., due to disk space errors).
    *   [#27914](https://github.com/google-gemini/gemini-cli/pull/27914)
*   **[Cleanup Race Condition]** Fixed a race condition where background session cleanup deleted files while the session list was being scanned.
    *   [#27906](https://github.com/google-gemini/gemini-cli/pull/27906)
*   **[Telemetry Truncation]** Fixed GCP export errors by truncating telemetry metric attributes to 1024 characters.
    *   [#27729](https://github.com/google-gemini/gemini-cli/pull/27729)
*   **[Array Tool Results]** Preserved original text content for array-valued tool results, preventing corruption in structured content.
    *   [#27730](https://github.com/google-gemini/gemini-cli/pull/27730)

### 5. Feature Request Trends
*   **Enhanced Browser Agent Resilience:** Strong demand for automatic session recovery and takeover in persistent browser modes to handle orphaned processes gracefully.
*   **AST-Aware Codebase Navigation:** Interest in using Abstract Syntax Tree parsing to improve the precision of file reads and codebase mapping, reducing token usage and improving context accuracy.
*   **Improved Observability:** Requests for better visibility into subagent behaviors, including sharing trajectories and including subagent context in bug reports.
*   **Safe Destructive Operations:** Suggestions for the agent to discourage or require explicit confirmation for destructive commands (e.g., `git reset --hard`, `rm -rf`) in complex workflows.

### 6. Developer Pain Points
*   **Authentication Instability:** Frequent unexpected sign-outs and OAuth token failures are disrupting workflows, particularly for enterprise users with managed accounts.
*   **Session Persistence Bugs:** Users encounter corrupt session files, inability to resume incomplete sessions, and race conditions during session cleanup/listing.
*   **Agent Hangs and Loops:** The generalist agent and browser subagent frequently hang or enter infinite loops, requiring manual intervention or configuration overrides.
*   **Memory System Reliability:** Auto Memory exhibits erratic behavior, including retrying low-signal sessions indefinitely and failing to properly redact sensitive data before model ingestion.
*   **Terminal Interactivity Issues:** Shell commands sometimes leave the terminal in a stuck "awaiting input" state, and external editor exits can cause terminal buffer corruption.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-22

## 1. Today's Highlights
The community focus today centers on critical stability issues on Windows ARM64 and significant gaps in documentation regarding enterprise sandbox policies and local sandbox functionality. Additionally, users are actively requesting improved visibility into context window usage and expanded internationalization support for the CLI interface.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
1. **[Fatal Abort on Windows ARM64]** #3687
   *   **Why it matters:** `copilot.exe` is experiencing fatal hard-aborts (BEX64) under memory pressure or during concurrent session starts. This affects stability across versions 1.0.57 and 1.0.60.
   *   **Community Reaction:** High concern due to reproducibility; 1 upvote, 6 comments.
   *   [Link](https://github.com/github/copilot-cli/issues/3687)

2. **[Sparse Checkout for Plugins]** #2399
   *   **Why it matters:** Plugin installations currently perform full clones, wasting bandwidth and disk space. Implementing sparse checkout would significantly improve installation efficiency.
   *   **Community Reaction:** Long-standing feature request (open since March); 0 upvotes, 2 comments.
   *   [Link](https://github.com/github/copilot-cli/issues/2399)

3. **[Local Sandbox Documentation vs. Reality]** #3861
   *   **Why it matters:** Documentation claims per-host network filtering and cross-platform isolation are working, but users report these features are non-functional. This creates trust issues for enterprise deployments.
   *   **Community Reaction:** Critical feedback on accuracy; 0 upvotes, 1 comment.
   *   [Link](https://github.com/github/copilot-cli/issues/3861)

4. **[Missing Context Window Visibility]** #3867
   *   **Why it matters:** Users cannot see token usage or receive notifications during context compaction, leading to uncertainty about session limits and state.
   *   **Community Reaction:** Request for parity with GUI app features; 0 upvotes, 1 comment.
   *   [Link](https://github.com/github/copilot-cli/issues/3867)

5. **[Enterprise Sandbox Policy Docs Missing]** #3884
   *   **Why it matters:** While Intune/MDM management is mentioned, there are no detailed guides on configuration or enforcement for enterprise users, hindering adoption in regulated environments.
   *   **Community Reaction:** New report highlighting a gap in onboarding materials.
   *   [Link](https://github.com/github/copilot-cli/issues/3884)

6. **[Input Scrolling Bug]** #3885
   *   **Why it matters:** Long text inputs fail to scroll internally, causing the entire page to scroll instead. This degrades usability for complex prompts.
   *   **Community Reaction:** Immediate bug report affecting UX; 0 upvotes, 0 comments.
   *   [Link](https://github.com/github/copilot-cli/issues/3885)

7. **[i18n Support Request]** #3883
   *   **Why it matters:** Users are requesting localization for the top 10 most-spoken languages to make the CLI accessible to non-English speakers.
   *   **Community Reaction:** Strong interest in accessibility; 1 upvote.
   *   [Link](https://github.com/github/copilot-cli/issues/3883)

8. **[Quota Calculation Error]** #3881
   *   **Why it matters:** A user reports incorrect quota deduction (5% vs expected 2%) for a specific model multiplier, indicating potential backend billing or tracking bugs.
   *   **Community Reaction:** Financial impact concern; 0 upvotes.
   *   [Link](https://github.com/github/copilot-cli/issues/3881)

9. **[@ Syntax Autocomplete Broken]** #3854
   *   **Why it matters:** File reference autocompletion via `@` stopped working after recent updates, forcing manual path entry.
   *   **Community Reaction:** Regression reported; 0 upvotes, 2 comments.
   *   [Link](https://github.com/github/copilot-cli/issues/3854)

10. **[No Hook Listing Command]** #3871
    *   **Why it matters:** Unlike MCP servers, there is no way to list installed hooks, making debugging and auditing plugin configurations difficult.
    *   **Community Reaction:** Feature parity request; closed as invalid (likely duplicate or wontfix).
    *   [Link](https://github.com/github/copilot-cli/issues/3871)

## 4. Key PR Progress
1. **[Unrelated UI Component Submission]** #3880
    *   **Summary:** PR titled "beyond the streets of amaerica" imports React components (`Card`, `Badge`) unrelated to the Copilot CLI core functionality.
    *   **Status:** Open. Likely spam or misdirected submission.
    *   [Link](https://github.com/github/copilot-cli/pull/3880)

*(Note: No other relevant PRs were submitted in the last 24 hours.)*

## 5. Feature Request Trends
*   **Enterprise & Security Transparency:** Strong demand for clearer documentation on enterprise policy enforcement (#3884) and accurate descriptions of sandbox capabilities (#3861).
*   **Localization:** A push for i18n support to broaden accessibility (#3883).
*   **Efficiency & Usability:** Requests for sparse checkout in plugin installations (#2399) and better context window visibility (#3867) indicate a desire for more efficient and transparent resource management.

## 6. Developer Pain Points
*   **Platform Stability:** Windows ARM64 users are experiencing critical crashes (#3687), suggesting instability in the native binary handling for that architecture.
*   **Documentation Accuracy:** Significant disconnect between documented features (sandbox filtering, enterprise policies) and actual behavior, leading to confusion and deployment risks.
*   **UI/UX Friction:** Input scrolling issues (#3885) and broken autocomplete (#3854) hinder the daily workflow of power users.
*   **Billing Transparency:** Errors in quota calculation (#3881) raise concerns about reliability in usage tracking.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-06-22

### 1. Today's Highlights
The community focus today centers on critical stability issues within the Agent Communication Protocol (ACP) and MCP integration, specifically regarding tool loading and server persistence bugs. Additionally, a key improvement has been merged to enhance loop detection and error recovery mechanisms in repeated tool calls, signaling a push toward more robust autonomous agent behavior.

### 2. Releases
*   **No new releases** reported in the last 24 hours.

### 3. Hot Issues
*   **[Bug] Kimi Code CLI auto-discovers MCP server after deletion, causing unfixable 400 errors** (#2457)
    *   *Why it matters:* This bug leaves users in an unrecoverable state where deleting a server configuration still triggers fatal API errors due to stale discovery logic. It highlights fragility in the MCP server lifecycle management.
    *   *Community Reaction:* High urgency among users relying on dynamic MCP configurations.
    *   *Link:* https://github.com/MoonshotAI/kimi-cli/issues/2457

*   **[Bug] `kimi acp` does not load MCP servers — MCP tools absent in ACP mode** (#2464)
    *   *Why it matters:* A significant regression for advanced users utilizing ACP mode. The `--mcp-config-file` flag is ignored, breaking workflows that depend on external tools in non-interactive modes.
    *   *Community Reaction:* Frustration from power users unable to automate tasks requiring MCP tools.
    *   *Link:* https://github.com/MoonshotAI/kimi-cli/issues/2464

*   **[Bug] OpenAILegacy emits `reasoning_effort: null` for thinking "off"** (#2465)
    *   *Why it matters:* Invalid schema serialization (`null` instead of omitted or enum) causes failures with strict API consumers. This breaks compatibility for users bridging Kimi CLI with other OpenAI-compatible services.
    *   *Community Reaction:* Developers using custom wrappers or strict validators are impacted.
    *   *Link:* https://github.com/MoonshotAI/kimi-cli/issues/2465

*   **[Enhancement] Feature Request: Memory System - Persistent context across sessions** (#1283)
    *   *Why it matters:* Addresses a fundamental limitation of current CLI interactions. Users desire long-term context retention (project patterns, preferences) to reduce repetitive setup overhead.
    *   *Community Reaction:* Strong interest (oldest active enhancement thread) indicating a core need for continuity.
    *   *Link:* https://github.com/MoonshotAI/kimi-cli/issues/1283

### 4. Key PR Progress
*   **[Merged] feat(soul): escalate repeated-tool-call reminders and force-stop on dead-end streak** (#2466)
    *   *Description:* Ports improved repetition handling from `kimi-code` into `kimi-cli`. Introduces escalating tiered reminders (r1/r2/r3) for repeated tool calls and forces a stop after 3+ consecutive repetitions to prevent infinite loops.
    *   *Impact:* Significantly improves agent stability and prevents resource waste on stuck loops.
    *   *Link:* https://github.com/MoonshotAI/kimi-cli/pull/2466

*(Note: Only 1 PR was available in the provided data set.)*

### 5. Feature Request Trends
*   **Persistent Memory & Context:** There is a clear demand for a "Memory System" that retains user preferences and project patterns across sessions, moving beyond ephemeral context windows.
*   **Robust Agent Control:** Users are requesting better controls over agent behavior, specifically regarding loop detection and forced termination of ineffective tool call patterns.

### 6. Developer Pain Points
*   **MCP Integration Fragility:** Recurring issues with MCP server loading in ACP mode and stale references after deletion suggest that the MCP integration layer is unstable and lacks proper state cleanup mechanisms.
*   **Schema Compliance:** The emission of invalid JSON values (`null` for enum fields) indicates gaps in validation layers, causing interoperability issues with strict API clients.
*   **Configuration Inertia:** Flags like `--mcp-config-file` not behaving consistently across different execution modes (interactive vs. ACP) create confusion and hinder automation efforts.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-06-22

## 1. Today's Highlights
OpenCode continues to see rapid iteration in its TUI and Desktop stability, with significant community focus on fixing session persistence bugs on Windows and resolving TUI crashes on newer OS builds. Concurrently, contributors are pushing major enhancements to the MCP ecosystem, specifically addressing schema validation errors and tool key collisions, while new features like background bash execution and session goals gain traction.

## 2. Releases
**No new releases** were published in the last 24 hours.

## 3. Hot Issues
1. **[FEATURE] Add native session goals with /goal** [#27167](https://github.com/anomalyco/opencode/issues/27167)
   *   **Why it matters:** Users are requesting a persistent lifecycle feature for sessions, distinct from simple chat history, to define long-term objectives.
   *   **Community Reaction:** Highly engaged with 90 👍 and 52 comments, indicating strong demand for structured goal-oriented workflows.

2. **[BUG] Free usage exceeded on Zen free models despite balance** [#14273](https://github.com/anomalyco/opencode/issues/14273)
   *   **Why it matters:** A critical billing logic error where users with positive balances are blocked by "free usage" limits, potentially driving churn.
   *   **Community Reaction:** 28 comments highlight confusion and frustration regarding the discrepancy between displayed balance and enforced limits.

3. **[BUG] TUI crash with "Effect.tryPromise" on v1.17.0+** [#32706](https://github.com/anomalyco/opencode/issues/32706)
   *   **Why it matters:** A severe regression preventing the TUI from launching on recent versions, affecting core CLI usability.
   *   **Community Reaction:** Active debugging thread with multiple reports of the same crash on different environments.

4. **[BUG] @ file mentions do not include files created after startup** [#32747](https://github.com/anomalyco/opencode/issues/32747)
   *   **Why it matters:** Breaks dynamic workflow where users create files mid-session and expect them to be indexable via `@`.
   *   **Community Reaction:** 4 comments confirm the bug persists due to stale search state.

5. **[BUG] Canva MCP: Tool registration fails with schema validation error** [#33316](https://github.com/anomalyco/opencode/issues/33316)
   *   **Why it matters:** Highlights incompatibilities between OpenCode’s MCP parser and specific server schemas (empty enums), blocking integration with popular tools like Canva.
   *   **Community Reaction:** Reported immediately upon discovery, affecting multiple models.

6. **[BUG] Windows installer doesn't query for install folder** [#32690](https://github.com/anomalyco/opencode/issues/32690)
   *   **Why it matters:** Poor UX for Windows users with limited C-drive space; forces manual file transplantation.
   *   **Community Reaction:** Users demanding a proper installer wizard for directory selection.

7. **[BUG] Stale Project Path Persists After Full Workspace Reset (Windows)** [#31888](https://github.com/anomalyco/opencode/issues/31888)
   *   **Why it matters:** Desktop app fails to update internal references when projects are moved, causing repeated access errors.
   *   **Community Reaction:** Linked to PR #33309, showing active community contribution to the fix.

8. **[BUG] Massive token spike causing quota exhaustion** [#26184](https://github.com/anomalyco/opencode/issues/26184)
   *   **Why it matters:** Single sessions consuming ~500k tokens lead to unexpected quota bans, impacting heavy users.
   *   **Community Reaction:** 3 comments discussing mitigation strategies and model behavior.

9. **[FEATURE] Protect .env files in grep/glob results** [#17073](https://github.com/anomalyco/opencode/issues/17073)
   *   **Why it matters:** Security concern where permission rules apply to search patterns rather than matched file paths, risking credential exposure.
   *   **Community Reaction:** 4 comments advocating for stricter default security behaviors.

10. **[BUG] Historical sessions disappear after upgrade** [#28486](https://github.com/anomalyco/opencode/issues/28486)
    *   **Why it matters:** Data loss perception due to session ID format mismatches ("dummy" vs "ses") after upgrades.
    *   **Community Reaction:** Users reporting total loss of UI-visible history despite functional new sessions.

## 4. Key PR Progress
1. **[feat] Runtime base path support for reverse proxy** [#28326](https://github.com/anomalyco/opencode/pull/28326)
    *   Adds `--base-path` flag/config to support deployments behind reverse proxies (Closes #7624).

2. **[fix] Use colon separator for MCP tool keys** [#33307](https://github.com/anomalyco/opencode/pull/33307)
    *   Prevents key collisions in MCP tool registration by using colons instead of underscores, fixing silent overwrites.

3. **[fix] Stop duplicating boundary message in compaction** [#33330](https://github.com/anomalyco/opencode/pull/33330)
    *   Fixes a bug in session compaction where the boundary message was included in both head and recent segments (Closes #33329).

4. **[fix] Preserve server additionalProperties in MCP catalog** [#33327](https://github.com/anomalyco/opencode/pull/33327)
    *   Resolves schema validation errors by ensuring MCP server schemas retain their `additionalProperties` settings (Closes #33322).

5. **[fix] Forward frequencyPenalty, presencePenalty, seed to Gemini** [#33326](https://github.com/anomalyco/opencode/pull/33326)
    *   Restores missing generation parameters for Gemini protocol, aligning with OpenAI-chat standards (Closes #33325).

6. **[feat] Port V1 fuzzy edit matching to V2 core** [#32761](https://github.com/anomalyco/opencode/pull/32761)
    *   Brings 9 fuzzy replacer strategies from V1 to the V2 core edit tool, improving edit reliability.

7. **[fix] Restore ESC interrupt for delegated subagent sessions** [#32767](https://github.com/anomalyco/opencode/pull/32767)
    *   Fixes regression preventing ESC key from interrupting subagent tasks (Closes #3699, #4073, #23534).

8. **[feat] Run bash commands in background** [#33310](https://github.com/anomalyco/opencode/pull/33310)
    *   Introduces explicit opt-in background mode for bash tool calls, allowing non-blocking execution (Closes #1970).

9. **[fix] Reject instance requests for non-existent directories** [#33309](https://github.com/anomalyco/opencode/pull/33309)
    *   Addresses stale project path issues in Desktop by validating directory existence on instance requests (Closes #31888).

10. **[feat] Inline files for attached MCP servers** [#33317](https://github.com/anomalyco/opencode/pull/33317)
    *   Allows attached servers to consume client-local files without requiring shared filesystem mounts.

## 5. Feature Request Trends
*   **Advanced Session Management:** High demand for persistent session goals (`/goal`), token usage visibility (`/context`), and system message inspection.
*   **MCP Robustness:** Users are pushing for better schema tolerance, specifically regarding `additionalProperties` and complex enum types, to integrate with diverse MCP servers (e.g., Canva).
*   **Platform-Specific UX:** Requests for configurable install paths on Windows, better TUI crash recovery, and improved Web UI session switching behavior.
*   **Model Protocol Extensions:** Adding support for new Cohere models and extending Gemini to support video/audio media and standard generation penalties.

## 6. Developer Pain Points
*   **Windows Installer & Path Handling:** The Desktop app struggles with Windows-specific edge cases, including static install paths, stale project references after moves, and TUI crashes on Windows Insider builds.
*   **MCP Schema Compatibility:** Hardcoded assumptions in the MCP catalog (e.g., `additionalProperties: false`) cause widespread integration failures with valid MCP servers.
*   **Session State Persistence:** Bugs related to session history loss, draft input loss on project switch, and compaction duplication indicate fragility in how session state is managed across upgrades and UI interactions.
*   **Resource Monitoring:** Lack of transparent token/cost tracking in subagent sessions and web UI leads to unexpected quota exhaustion and user confusion.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: June 22, 2026

## 1. Today's Highlights
The Pi mono-repo released **v0.79.10**, primarily focusing on enhancing extension visibility into context compaction events with new `reason` and `willRetry` flags. Community attention is heavily concentrated on improving the stability of the core agent loop, addressing critical hangs in `pi-agent-core` and reliability issues with OpenAI Codex connections. Additionally, significant strides were made in securing file operations and refining the TUI experience for local LLM integrations.

## 2. Releases
**v0.79.10**
*   **Extension Compaction Context:** The `session_before_compact` and `session_compact` events now include `reason` (e.g., manual, threshold, overflow) and `willRetry` fields. This allows extensions to differentiate between user-initiated compactions and automated system behaviors, aligning with existing RPC protocol data.
    *   [GitHub Release v0.79.10](https://github.com/badlogic/pi-mono/releases/tag/v0.79.10)

## 3. Hot Issues
1.  **[OPEN] openai-codex Connection Reliability Issues (#4945)**
    *   **Why it matters:** Users report the TUI getting stuck on `Working...` with no output or error, requiring manual intervention. This impacts the reliability of primary provider integrations.
    *   **Reaction:** High engagement (64 comments, 30 👍).
    *   [View Issue](https://github.com/earendil-works/pi/issues/4945)

2.  **[OPEN] Official local LLM provider extension (#3357)**
    *   **Why it matters:** Proposes dynamic fetching of model lists from local providers like Ollama and LM Studio, removing the need for manual configuration.
    *   **Reaction:** Strong community support (36 👍) for better local-first workflows.
    *   [View Issue](https://github.com/earendil-works/pi/issues/3357)

3.  **[CLOSED] pi-agent-core hangs indefinitely on unresponsive streams (#5778)**
    *   **Why it matters:** Identified as a critical vulnerability where dropped connections or deadlocked tools cause infinite wedging.
    *   **Reaction:** Resolved/Closed, highlighting a major stability fix.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5778)

4.  **[CLOSED] pi -p hangs indefinitely when stdin is a non-TTY pipe (#5571)**
    *   **Why it matters:** Affects programmatic usage of Pi via CLI pipes; the process would hang rather than fail fast if credentials were missing.
    *   **Reaction:** Closed/Fixed.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5571)

5.  **[OPEN] Support provider extensions with model aliases and improve search (#5916)**
    *   **Why it matters:** Addresses usability gaps in configuring providers like OpenRouter via `models.json`, specifically regarding model overrides and naming.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5916)

6.  **[CLOSED] pi-agent-core swallows non-abort run-loop errors (#2188)**
    *   **Why it matters:** Errors were previously converted into empty assistant messages, making debugging difficult for integrators.
    *   **Reaction:** Closed/Fixed.
    *   [View Issue](https://github.com/earendil-works/pi/issues/2188)

7.  **[OPEN] pi-tui: `getKeybindings()` realm/instance singleton breaks extensions (#4748)**
    *   **Why it matters:** Extension-loaded keybindings are isolated from the main TUI instance due to module scoping, causing conflicts or missed shortcuts.
    *   [View Issue](https://github.com/earendil-works/pi/issues/4748)

8.  **[OPEN] Anthropic OAuth-token detection is hardcoded (#5871)**
    *   **Why it matters:** Hardcoded substring checks for OAuth tokens limit flexibility for providers using different token formats.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5871)

9.  **[CLOSED] `find` tool misses files inside nested git repos (#5960)**
    *   **Why it matters:** A bug in the built-in `find` tool where parent `.gitignore` rules incorrectly suppress file discovery in nested repositories.
    *   **Reaction:** Closed/Fixed.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5960)

10. **[CLOSED] Edit tool generates invalid JSON payload (#4934)**
    *   **Why it matters:** Models occasionally output malformed JSON for the edit tool, causing validation failures.
    *   **Reaction:** Closed/Fixed.
    *   [View Issue](https://github.com/earendil-works/pi/issues/4934)

## 4. Key PR Progress
1.  **#5962 feat(coding-agent): add compaction reason and willRetry to extension events**
    *   Implements the core logic for v0.79.10, exposing `reason` and `willRetry` to extensions.
    *   [View PR](https://github.com/badlogic/pi-mono/pull/5962)

2.  **#5963 fix(ai): reject malformed final tool call arguments**
    *   Adds validation to reject malformed JSON in final streamed tool calls, preventing silent failures or bad states.
    *   [View PR](https://github.com/badlogic/pi-mono/pull/5963)

3.  **#5955 fix(coding-agent): add secret-disclosure scope discipline**
    *   Updates the system prompt to prevent the agent from accidentally copying sensitive files (like `.env`) into public directories during broad copy tasks.
    *   [View PR](https://github.com/badlogic/pi-mono/pull/5955)

4.  **#5937 Harden opt-in auto-compaction at between-turn checkpoint**
    *   Makes auto-compaction strictly opt-in and ensures it runs at safe checkpoints between tool execution and the next provider request.
    *   [View PR](https://github.com/badlogic/pi-mono/pull/5937)

5.  **#5950 fix: use OpenRouter's actual cost from API response**
    *   Corrects billing display in the TUI footer by using the actual `usage.cost` from OpenRouter instead of static estimates.
    *   [View PR](https://github.com/badlogic/pi-mono/pull/5950)

6.  **#5938 feat(tui): sync d-pi tui components to clients**
    *   Enables client-synced TUI components, allowing custom renderers to be properly loaded and validated across connected clients.
    *   [View PR](https://github.com/badlogic/pi-mono/pull/5938)

7.  **#5941 fix(coding-agent): add required reason and willRetry to compaction events**
    *   Complementary PR ensuring the public extension API strictly enforces the new compaction event fields.
    *   [View PR](https://github.com/badlogic/pi-mono/pull/5941)

8.  **#5956 fix(bug): Agent copies secret files into world-readable directory**
    *   Addresses the security issue noted in Issue #5956, ensuring secret files are not exposed during bulk file operations.
    *   [View PR](https://github.com/badlogic/pi-mono/pull/5956) *(Note: Referenced in Issue summary, likely covered by #5955 logic)*

9.  **#5935 feat: Add setting to override tool output truncation limit**
    *   Allows users to reduce the truncation limit for tool outputs, beneficial for local LLM contexts with smaller window sizes.
    *   [View Issue/PR Context](https://github.com/earendil-works/pi/issues/5935)

10. **#5912 feat: Expose session-switching on ExtensionContext**
    *   Proposes exposing `newSession`, `switchSession`, etc., to non-TUI extensions, enabling programmatic session management.
    *   [View Issue](https://github.com/earendil-works/pi/issues/5912) *(Status: Closed/No Action, see #5952 for alternative)*

## 5. Feature Request Trends
*   **Enhanced Local Provider Integration:** There is a strong push for seamless integration with local LLMs (Ollama, LM Studio), including dynamic model fetching and per-model thinking level configurations (#3357, #5933).
*   **Granular Control Over Context Management:** Users are requesting more control over compaction behaviors, such as making it opt-in, configurable thresholds, and understanding the reasons behind automatic compactions (#5939, #5933).
*   **Extended Extension API Surface:** Developers are asking for deeper access to session state and navigation within extensions, particularly for non-TUI interfaces like Telegram bots or RPC triggers (#5932, #5810, #5912).
*   **Security and Privacy Disclosures:** Increased demand for safeguards against accidental data leakage, specifically regarding secret files during file operations (#5956).

## 6. Developer Pain Points
*   **Agent Loop Stability:** Recurring issues with `pi-agent-core` hanging indefinitely due to unresponsive streams, dropped connections, or deadlocked tools remain a significant frustration (#5778, #5571).
*   **Provider Reliability:** Inconsistent behavior with major providers like OpenAI (Codex) and Anthropic (OAuth token handling) creates friction for users relying on these services (#4945, #5871).
*   **Extension Isolation:** Singleton patterns in the TUI and keybinding systems are causing conflicts for extensions that operate in separate module realms (#4748).
*   **Tool Validation Gaps:** Models generating invalid JSON for tools (e.g., `edit`) or tools ignoring parameters (e.g., `bash` cwd) lead to poor user experiences and hard-to-debug errors (#4934, #5904).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-06-22

### 1. Today's Highlights
Qwen Code v0.18.5 has been released, introducing critical security and UX refinements including mandatory opt-in for plan mode prompts and fixes for duplicate gitdiff cases. The community is actively engaging with the new Voice Dictation feature, resulting in numerous follow-up issues regarding platform support, packaging, and telemetry. Significant progress is also visible in session management, with new capabilities for daemon-backed session branching and background sub-agent resumption.

### 2. Releases
*   **v0.18.5**: Released today, focusing on stability and user control. Key changes include requiring explicit user opt-in for plan mode prompts to enhance safety, and cleaning up test cases for gitdiff untracked counts.
    *   [Release v0.18.5](https://github.com/QwenLM/qwen-code/releases/tag/release/v0.18.5)
    *   [Nightly Build v0.18.5-nightly.20260622.6bc3f853e](https://github.com/QwenLM/qwen-code/releases/tag/release/v0.18.5-nightly.20260622.6bc3f853e)

### 3. Hot Issues
1.  **[Voice] Native Prebuild Targets Missing** (#5580): Highlights the absence of `win32-arm64`, `musl/Alpine`, and older-glibc targets for the new voice capture addon, blocking usage on several platforms.
2.  **[Voice] Streaming Unavailable in Standalone Archives** (#5582): Reports that standalone releases fail to load the native audio addon because it is not bundled in the curated `dist/` directory.
3.  **[Voice] Windows/Linux Mic Validation** (#5581): Flags that the realtime mic-to-WebSocket streaming path was only tested on macOS, leaving Windows and Linux reliability unverified.
4.  **Auto-Generated Skills Confirmation** (#5263): Requests a confirmation step before persisting skills generated by background agents, preventing clutter from one-off refactoring tasks.
5.  **Resuming Completed Background Sub-Agents** (#5540): Identifies a limitation where completed sub-agents cannot be revived via `send_message`, restricting flexible background automation.
6.  **Optional Voice Input Mode** (#5431): Proposes adding voice dictation to the terminal UI for accessibility and faster prompt entry.
7.  **External Content Review in TUI** (#5424): Requests a mechanism for external producers to inject content that requires human approval in the TUI before execution.
8.  **ACP Session List Cursor Bug** (#5614): Reports that the in-process ACP session list accepts non-finite cursors, unlike the daemon path which rejects them.
9.  **MCP `--scope` Documentation Mismatch** (#5563): Notes that documentation claims `mcp add` defaults to `project` scope, while the code defaults to `user` scope.
10. **Long Context Tool Repetition** (#5019): Documents an API error caused by repetitive tool calls in long sessions, leading to session termination.

### 4. Key PR Progress
1.  **Confirm Auto-Generated Skills** (#5616): Implements user confirmation for skills created by background agents, resolving #5263 and improving memory hygiene.
2.  **Standalone Voice Addon Bundling** (#5628): Fixes the standalone archive issue by ensuring the native `@qwen-code/audio-capture` addon is included in release packages.
3.  **Validate Ask User Answer Indexes** (#5622): Patches a vulnerability where malformed answer keys (e.g., `"0junk"`) were incorrectly parsed as valid indices by `parseInt()`.
4.  **Surface PreToolUse Hook 'Ask'** (#5629): Fixes logic so that `PreToolUse` hooks returning `'ask'` properly trigger a TUI confirmation rather than silently denying.
5.  **Voice Prebuild Matrix Expansion** (#5606): Adds CI targets for `win32-arm64`, `musl`, and older-glibc to support broader platform compatibility for voice features.
6.  **Daemon Session Branching** (#5613): Enables the Web Shell to branch sessions via the daemon bridge, allowing users to fork conversations from `/branch`.
7.  **Fail Dangling Replayed Tool Calls** (#5624): Improves history replay robustness by explicitly failing tool calls that started but had no corresponding result.
8.  **Escape Backslashes in Emacs Ediff** (#5630): Fixes path interpolation errors in the emacs diff integration by properly escaping special characters.
9.  **Kebab-Case Serve Filenames** (#5604): Completes the refactoring of the `serve` module to use kebab-case filenames, aligning with project conventions.
10. **Dynamic Workflows Completion** (#5600): Finalizes the Dynamic Workflows port, adding support for nested global workflows, saved workflows, and keyword triggers.

### 5. Feature Request Trends
*   **Voice Dictation Integration**: A dominant theme, with multiple issues and PRs addressing input methods, platform support, and telemetry for voice commands.
*   **Enhanced Human-in-the-Loop Controls**: Users are requesting more granular control over automated actions, specifically confirming auto-generated skills and reviewing externally injected content.
*   **Background Task Flexibility**: There is a strong interest in improving background agent lifecycle management, particularly the ability to resume or revive completed tasks.
*   **Platform Parity**: Significant effort is being directed toward ensuring voice and native features work consistently across Windows, Linux, and macOS, not just macOS.

### 6. Developer Pain Points
*   **Native Module Packaging**: The transition to native audio capture has exposed complexities in bundling native addons for standalone releases and ensuring prebuilds exist for all target architectures.
*   **Input Validation Vulnerabilities**: Several issues highlight risks in parsing user inputs (answer indexes, numeric env vars) using loose JavaScript number parsing, necessitating stricter validation.
*   **Documentation vs. Implementation Drift**: Discrepancies between documented defaults (e.g., MCP scope) and actual code behavior are causing confusion and requiring immediate documentation fixes.
*   **Cross-Platform Testing Gaps**: The reliance on macOS for initial verification of new features (like voice streaming) has led to unexpected failures on Windows and Linux, highlighting a need for broader CI coverage.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-06-22
**Source:** github.com/Hmbown/DeepSeek-TUI (CodeWhale)

### 1. Today's Highlights
The v0.8.64 release train is in active consolidation, with the maintainer merging security hardening, CI stability fixes, and new browser automation primitives. Significant community contributions include a new WeCom (Enterprise WeChat) bridge, improved dev-server readiness detection, and refined TUI UX for approval modals and sidebar visibility.

### 2. Releases
No new official releases were published in the last 24 hours. However, PR #3373 indicates an ongoing draft integration for the v0.8.64 release train, bundling security fixes, auto-review gates, and CI workflow corrections.

### 3. Hot Issues
1.  **[Security] v0.8.64 Security Hardening (#3368)**
    *   **Why it matters:** Centralizes CodeQL findings and advisory-class reports into a single public tracker for the upcoming release gate, ensuring transparent security validation.
    *   **Reaction:** High engagement (27 comments); critical for release confidence.
2.  **[UX] Approval Modal Key Hints (#3380)**
    *   **Why it matters:** Addresses low-contrast, hard-to-find key hints in the approval modal, improving accessibility and speed for first-time users.
    *   **Reaction:** Marked as "good first issue"; 0 comments but timely for v0.8.64.
3.  **[Bug] Overly Involved CodeWhale (#3275)**
    *   **Why it matters:** Reports a regression where the agent executes self-answering loops without user confirmation, violating user intent.
    *   **Reaction:** 11 comments; highlights friction in autonomous execution models.
4.  **[Enhancement] Natural-Language Auto-Review Policy (#3144)**
    *   **Why it matters:** Proposes a middle ground between manual approval and unchecked autonomy, inspired by Cursor’s SDK review workflows.
    *   **Reaction:** 12 comments; strategic discussion on agent safety vs. efficiency.
5.  **[Bug] Sandbox Blocks Git Worktree Ops (#3355)**
    *   **Why it matters:** Breaks functionality for developers using `git worktree`, as the sandbox fails to recognize linked paths without explicit trust_mode.
    *   **Reaction:** 3 comments; affects modern Git workflow users.
6.  **[Enhancement] Auto-Compaction with Carried-Forward Summaries (#3363)**
    *   **Why it matters:** Aims to make context window management seamless by preserving summary state during automatic compaction, reducing user friction in long sessions.
    *   **Reaction:** 1 comment; critical for scaling session length.
7.  **[Bug] Reasoning Style Override for Inline Tags (#3222)**
    *   **Why it matters:** Fixes parsing breaks for reasoning content in MiniMax M3, Qwen, and GLM models via OpenAI-compatible chat completions.
    *   **Reaction:** 6 comments; essential for multi-model compatibility.
8.  **[Enhancement] User-Defined Subagent Personas (#3367)**
    *   **Why it matters:** Allows users to define reusable subagent roles in `.codewhale/agents/`, moving beyond built-in types for greater flexibility.
    *   **Reaction:** 0 comments; requested feature for advanced agent orchestration.
9.  **[Enhancement] Consolidate Model-Visible Work Tracking (#3366)**
    *   **Why it matters:** Reduces confusion by unifying scattered work-tracking surfaces (plans, todos, tasks) into one canonical ledger for agents.
    *   **Reaction:** 0 comments; improves reliability for non-flagship models.
10. **[Enhancement] ModelProfile Descriptors for Tool Curation (#3365)**
    *   **Why it matters:** Introduces descriptors to tailor tool/prompt surfaces based on model capabilities (context length, tool calling), preventing overload for smaller models.
    *   **Reaction:** 0 comments; technical improvement for model diversity.

### 4. Key PR Progress
1.  **Feat: Memory Tags (#3381)**
    *   Adds memory tagging functionality to enhance context retention.
2.  **Fix: Harden Branch Hygiene Checks (#3348)**
    *   Improves release branch validation, supporting fork checkout workflows and remote ref qualification.
3.  **Feat: Dev Server Readiness Tool (#3376)**
    *   Implements `wait_for_dev_server` for loopback TCP/HTTP checks, replacing flaky shell polling with reliable readiness primitives.
4.  **Fix: Suppress Idle Timeout Countdown (#3375)**
    *   Refines the status line to reduce noise during normal model wait times, only showing detailed timeouts after 60s or 75% budget usage.
5.  **Feat: WeCom Intelligent Robot Bridge (#3370)**
    *   Integrates Enterprise WeChat (WeCom) support, expanding collaboration channels for Chinese-speaking teams.
6.  **Integration: v0.8.64 Security & Release (#3373)**
    *   Merges security hardening, auto-review rails, and read-before-edit guardrails into the release branch.
7.  **Fix: Reduce Minimum Terminal Width (#3371)**
    *   Lowers the sidebar visibility threshold from 100 columns to accommodate smaller terminal configurations.
8.  **Feat: Preserve Thinking/Tool Blocks in Seeding (#3300)**
    *   Ensures `loadHistory` correctly reconstructs conversation threads by preserving distinct ContentBlock variants (Thinking, ToolUse).
9.  **Feat: First-Class Sub-Agent Toggle (#3327)**
    *   Adds `/config subagents on|off|status` commands for easier runtime control of sub-agent features.
10. **Config: Pro Plan Routing Profile (#3193)**
    *   Reintroduces Pro Plan routing as a config-gated feature, rejecting `/mode pro-plan` until explicitly enabled.

*(Note: Additional PRs include dependency bumps for `lru`, `similar`, `tokio`, `toml`, `windows`, and `undici`, as well as CLI shortcuts for model switching.)*

### 5. Feature Request Trends
*   **Agent Safety & Control:** Strong demand for "read-before-edit" guardrails, auto-review policies, and explicit user confirmation loops to prevent agent overreach (#3364, #3144, #3275).
*   **Context & Session Management:** Requests for seamless auto-compaction with summary preservation and unified work-tracking surfaces to handle longer sessions (#3363, #3366).
*   **Browser Automation:** Integration of Playwright-based tools, console verification, and screenshot-to-vision feedback for robust UI testing and repair (#3358, #3361, #3362).
*   **Customization:** User-defined subagent personas and model-specific tool profiles to tailor agent behavior to different capabilities (#3367, #3365).

### 6. Developer Pain Points
*   **Autonomous Overreach:** Users report frustration with agents executing self-generated loops or modifying code without explicit intent, leading to broken states or unwanted changes (#3275, #3364).
*   **Flaky Local Development Loops:** Lack of reliable dev-server readiness checks causes race conditions in frontend testing and automation workflows (#3360, #3359).
*   **Sandbox Rigidity:** The current sandbox implementation struggles with complex Git structures like worktrees, requiring manual trust configuration (#3355).
*   **UI Noise:** Persistent status messages regarding idle timeouts are considered distracting during normal operation, needing threshold-based suppression (#3189).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*