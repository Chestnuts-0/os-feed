# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-22 01:43 UTC | Tools covered: 9

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
**Date:** 2026-07-22  
**Analyst:** Agnes-2.5-Flash | Senior Technical Analyst

> **Data Note:** Digest generation failed for Claude Code, OpenAI Codex, Gemini CLI, OpenCode, and Pi. This report synthesizes available signals from GitHub Copilot CLI, Kimi Code CLI, Qwen Code, and DeepSeek TUI.

---

## 1. Ecosystem Overview

The AI CLI landscape is shifting from feature proliferation to **reliability and protocol maturity**. Communities are prioritizing robust shell execution, complete MCP protocol coverage (beyond tools to resources, prompts, and OAuth DCR), and stable multi-agent orchestration. Enterprise adoption barriers remain visible: BYOK validation inconsistencies, silent token refresh failures, and hard context/memory ceilings are generating significant friction. While established players like Copilot stabilize at v1.0+, faster-moving projects like DeepSeek and Qwen demonstrate high iteration velocity, though both face growing pains regarding model-specific regressions and daemon telemetry.

---

## 2. Activity Comparison

| Tool | Release Status | Hot Issues / Updates | PR Activity | Community Signal |
| :--- | :--- | :--- | :--- | :--- |
| **GitHub Copilot CLI** | **v1.0.74-0** released (`/model plan`, search fix) | 10 active discussions; top engagement on MCP DCR and BYOK reliability. | Quiet; only 1 unrelated PR update in cycle. | Stable release cadence; enterprise feature requests dominating discourse. |
| **Kimi Code CLI** | No release | 5 open issues; critical regressions in k2.5 tool-calling and MCP schema rejection. | 1 active fix PR (#2530) addressing shell pipe blocking. | High severity bugs driving attention; stability concerns with model compatibility. |
| **Qwen Code** | **v0.20.1** stable release | Limited data; highlights on daemon telemetry, Web Shell isolation, and multi-agent state leakage. | Limited data; focus on `cua-driver-rs` prebuilts. | Infrastructure hardening; backend stability and driver distribution emphasized. |
| **DeepSeek TUI** | **v0.9.1** in consolidation/dogfood | 10 issues tracked; mix of UX fixes, OAuth restoration, and architectural refactor EPICs. | High velocity noted (>10 PR/day); multiple fixes closed (scrolling, Enter lag). | Rapid iteration; strong community contribution flow; focus on runtime adherence. |

---

## 3. Shared Feature Directions

| Direction | Specific Needs | Involved Tools |
| :--- | :--- | :--- |
| **MCP Protocol Completion** | Demand for Dynamic Client Registration (DCR), resource/prompt primitives, and `tools/list_changed` subscriptions. Client-side schema sanitization needed for provider compatibility. | **Copilot**, **Kimi**, **DeepSeek** |
| **Shell Execution Reliability** | Handling detached child processes, unbounded output truncation, working directory inheritance, and preventing regressions that block shell commands in plan/shell modes. | **Kimi**, **Copilot**, **DeepSeek** |
| **Multi-Agent Orchestration** | Default model configuration for subagents, transparent credit usage breakdown, structured activity reporting, and prevention of state leakage across agents. | **Copilot**, **Qwen**, **DeepSeek** |
| **Auth & Identity Hardening** | Silent refresh via RFC 6749 §6, OAuth DCR for remote servers, and restoring device-code flows for providers like xAI. | **Copilot**, **DeepSeek** |
| **Provider/Model Validation** | BYOK consistency for reasoning effort flags, cross-provider tool schema edge cases, and model-specific tool-calling format regressions. | **Copilot**, **Kimi**, **Qwen** |

---

## 4. Differentiation Analysis

*   **GitHub Copilot CLI:** Focuses on **enterprise-grade control**. Priorities include BYOK reliability, fleet subagent defaults, per-subagent credit transparency, and granular model selection. Technical challenges center on scaling: `tgrep` OOM on monorepos, CAPI 5MB serialization ceilings, and zombie process reaping.
*   **Kimi Code CLI:** Reflects **model-integration friction**. Issues are heavily tied to specific Moonshot model behaviors (k2.5 tool-calling loops, K3 schema rejection) and platform-specific UX bugs (Windows numpad, Linux UI re-renders). The tool appears to be in a critical stability phase.
*   **Qwen Code:** Emphasizes **infrastructure and daemon stability**. Differentiators include Web Shell UI isolation, label-driven autofix logic, and prebuilt binary distribution for `cua-driver-rs`. Pain points involve multi-agent state leakage and background agent roster restoration.
*   **DeepSeek TUI:** Leverages **high-velocity open development**. Distinctive features include "constitution" adherence enforcement, universal PreToolUse/PostToolUse hooks, and rapid command-boundary refactoring. The community is highly engaged in onboarding workflows and UI ergonomics.

---

## 5. Community Momentum & Maturity

*   **Most Active Development:** **DeepSeek TUI** shows the highest momentum with >10 PR/day velocity and aggressive closure of UX/performance regressions. **Qwen Code** maintains steady progress with stable releases and driver distribution improvements.
*   **Enterprise Maturity:** **GitHub Copilot CLI** demonstrates the most mature feature set for organizational use (fleet management, credit tracking, BYOK), though it faces scaling bottlenecks indicative of large-scale deployment.
*   **Growing Pains:** **Kimi Code CLI** exhibits high-severity regressions in core functionality (tool calling, shell blocking), suggesting the codebase requires stabilization before broader adoption. **Qwen** and **DeepSeek** also show complexity pressures around multi-agent state and runtime constraints.

---

## 6. Trend Signals

1.  **MCP DCR is the Next Battleground:** The industry is moving beyond basic tool invocation. OAuth Dynamic Client Registration and silent token refresh are critical for scalable, headless MCP adoption. Tools lacking DCR will face enterprise friction.
2.  **Stability Trumps Model Capability:** Regressions in tool calling and shell execution are causing more disruption than missing features. Developers should prioritize tools with robust validation layers and proven BYOK consistency.
3.  **Architectural Ceilings Emerging:** Hard limits like CAPI response sizes and unbounded daemon memory usage highlight the need for better resource caps and streaming contracts in CLI architectures.
4.  **Multi-Agent Transparency Required:** Enterprise users demand visibility into subagent credit usage and default configurations. "Black box" fleet operations are a barrier to adoption.
5.  **Reference Value:** For developers selecting an AI CLI, verify **MCP schema sanitization**, **shell process lifecycle handling**, and **OAuth refresh behavior** against current issues before committing to production workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
**Date:** 2026-07-22 | **Source:** [anthropics/skills](https://github.com/anthropics/skills)

## 1. Top Skills Ranking
*Most-discussed Skills and tooling improvements by community attention and cross-referenced issue activity.*

| Rank | Skill / Tooling | Functionality | Discussion Highlights | Status |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Skill-Creator Evaluation Fix** ([#1298](https://github.com/anthropics/skills/pull/1298)) | Repairs `run_eval.py` and `run_loop.py`, which were reporting 0% recall for all descriptions, breaking the skill description optimization loop. | Heavily discussed across multiple related issues ([#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169)) as a critical blocker for skill authors. | 🔴 Open |
| 2 | **Skill Quality & Security Analyzers** ([#83](https://github.com/anthropics/skills/pull/83)) | Adds meta-skills to evaluate skill structure, documentation, examples, and security posture across five dimensions. | Responds to growing trust-boundary concerns; aligns with community demand for governance tools. | 🔴 Open |
| 3 | **Testing Patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Comprehensive testing skill covering philosophy, unit testing (AAA pattern), React component testing, and testing libraries. | Addresses the need for standardized testing workflows within Claude-assisted development. | 🔴 Open |
| 4 | **Document Typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents typographic errors in AI-generated documents: orphan/widow lines, numbering misalignment, and page-break issues. | Targets a frequent pain point in professional document generation. | 🔴 Open |
| 5 | **Self-Audit & Reasoning Gate** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Audits AI output before delivery via mechanical file verification and four-dimension reasoning quality checks. | Proposed alongside detailed pipeline discussions ([#1385](https://github.com/anthropics/skills/issues/1385)); addresses reliability concerns. | 🔴 Open |
| 6 | **Frontend Design Clarity** ([#210](https://github.com/anthropics/skills/pull/210)) | Revises the frontend-design skill for better actionability, coherence, and single-conversation execution. | Focuses on making existing skills more operational and less theoretical. | 🔴 Open |
| 7 | **ODT Document Support** ([#486](https://github.com/anthropics/skills/pull/486)) | Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). | Fills a gap for open-standard document workflows alongside PDF/DOCX skills. | 🔴 Open |
| 8 | **Color Expert** ([#1302](https://github.com/anthropics/skills/pull/1302)) | Provides color naming systems, color space guidance (OKLCH, CAM16), and palette generation expertise. | Recently updated; targets design-heavy tasks requiring precise color knowledge. | 🔴 Open |

## 2. Community Demand Trends
*Distilled from high-engagement Issues and proposals.*

*   **Reliable Skill Lifecycle Tooling:** The dominant technical demand is for functional evaluation infrastructure. Multiple issues report that `run_eval.py` fails to trigger skills, rendering description optimization useless. Users need working feedback loops to iterate on skill quality.
*   **Governance, Security, and Trust:** There is strong demand for safety mechanisms, including security analyzers ([#83](https://github.com/anthropics/skills/pull/83)), agent governance patterns ([#412](https://github.com/anthropics/skills/issues/412)), and clear protections against namespace impersonation ([#492](https://github.com/anthropics/skills/issues/492)).
*   **Enterprise & Organizational Sharing:** Users are requesting org-wide skill libraries ([#228](https://github.com/anthropics/skills/issues/228)), Bedrock integration ([#29](https://github.com/anthropics/skills/issues/29)), and secure handling of sensitive data like SharePoint documents ([#1175](https://github.com/anthropics/skills/issues/1175)).
*   **Interoperability with MCP:** A recurring proposal is to expose Skills as MCPs ([#16](https://github.com/anthropics/skills/issues/16)), allowing skills to function as standard API signals for software.
*   **Memory and State Management:** Proposals for compact-memory skills ([#1329](https://github.com/anthropics/skills/issues/1329)) indicate demand for efficient long-running agent state handling.

## 3. High-Potential Pending Skills
*Active PRs not yet merged that address clear community needs.*

*   **[feat(skills): add self-audit](https://github.com/anthropics/skills/pull/1367)** – Directly addresses the reliability and quality gate demand highlighted in recent issues.
*   **[feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** – High utility for engineering workflows; covers full testing stack.
*   **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)** – Solves pervasive document formatting issues in AI outputs.
*   **[Add ODT skill](https://github.com/anthropics/skills/pull/486)** – Expands document support to open standards.
*   **[Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)** – Niche but actively maintained; enables a complete game dev workflow.
*   **[Add color-expert skill](https://github.com/anthropics/skills/pull/1302)** – Specialized domain skill with recent community updates.
*   **[Add SAP-RPT-1-OSS predictor skill](https://github.com/anthropics/skills/pull/181)** – Enterprise AI integration for SAP business data.

## 4. Skills Ecosystem Insight
The community's most concentrated demand is shifting from pure skill authoring toward **robust skill lifecycle tooling and governance**—specifically, reliable evaluation loops, security analyzers, and quality gates—so that skills can be trusted, shared, and optimized at scale.

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest
**Date:** 2026-07-22  
**Repository:** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

## 1. Today's Highlights
The Copilot CLI released **v1.0.74-0**, introducing `/model plan` for granular model selection within plan mode and improving session title search resilience against whitespace variations. Community discussion remains dominated by **MCP protocol maturity**—specifically OAuth DCR support, missing resource/prompt primitives, and silent token refresh—and persistent **BYOK reliability issues** involving reasoning effort flags and streaming delta handling. A new regression in plan mode blocking shell commands has also drawn immediate attention.

---

## 2. Releases
### v1.0.74-0
*Added*
- **`/model plan` (or `--plan`)**: Allows users to pick a model specifically for plan mode without altering the session model. Supports passing a model ID, `off` to clear, or no argument to open the picker. Reverts to the session model upon exiting plan mode.
*Improved*
- **Search Match Resume**: Session title search now resumes matches correctly even when whitespace differs between the query and stored title.

🔗 [Release v1.0.74-0](https://github.com/github/copilot-cli/releases/tag/v1.0.74-0)

---

## 3. Hot Issues
Selected based on community engagement, severity, and strategic relevance.

| Issue | Title | 👍 | Why It Matters | Community Reaction |
| :--- | :--- | :--- | :--- | :--- |
| [#1305](https://github.com/github/copilot-cli/issues/1305) | Support CIMD for Remote OAuth MCP Servers | 26 | Enables Dynamic Client Registration (DCR) for Remote MCP servers, removing the need for pre-registration and improving enterprise OAuth workflows. | High demand; seen as critical for scalable MCP adoption. |
| [#4012](https://github.com/github/copilot-cli/issues/4012) | BYOK: reasoning effort not supported for "glm-5.2:cloud" | 16 | Flags inconsistencies in BYOK provider validation where valid models reject `--reasoning-effort max`. | Users report blocked workflows with specific BYOK configurations. |
| [#2193](https://github.com/github/copilot-cli/issues/2193) | Default model configuration for `/fleet` subagents | 14 | Allows global/project-level default models for fleet subagents, reducing repetitive prompt overhead. | Strong support for ergonomics in multi-agent setups. |
| [#1518](https://github.com/github/copilot-cli/issues/1518) | Support MCP resources and prompts | 14 | Expands MCP coverage beyond tools to include resources and prompts, completing core protocol support. | Frequently cited alongside #1803 and #3073 as a foundational gap. |
| [#4183](https://github.com/github/copilot-cli/issues/4183) | Auto-compaction does not prevent CAPI 5 MB failure | 5 | Long tool-heavy sessions can exceed the serialized CAPI response body limit despite token capacity remaining valid. | Highlights a hard ceiling in context management for complex sessions. |
| [#4207](https://github.com/github/copilot-cli/issues/4207) | Show per-subagent AI credit usage breakdown in `/usage` | 5 | Requests transparency into credit distribution across main agent, subagents, and background operations. | Valued by enterprise teams managing cost allocation. |
| [#4188](https://github.com/github/copilot-cli/issues/4188) | Regression on plan-mode | 2 | Latest version blocks shell commands in plan mode, breaking workflows that use `gh` CLI to enrich plans. | Users flag this as a functional regression from prior behavior. |
| [#3976](https://github.com/github/copilot-cli/issues/3976) | Native `tgrep` indexer OOM-kills host on large monorepos | 0 | The Rust `tgrep` daemon has no memory cap, causing out-of-memory kills on large repositories at session startup. | Severe impact on monorepo users; calls for upper bounds. |
| [#4163](https://github.com/github/copilot-cli/issues/4163) | CLI does not reap child processes — zombies accumulate | 0 | Finished subprocesses accumulate as zombies under the copilot PID (~2/min), leaking resources over time. | Linux-specific resource leak affecting long-running sessions. |
| [#4203](https://github.com/github/copilot-cli/issues/4203) | Remote OAuth: expired access token forces interactive re-auth | 0 | Cached refresh tokens are ignored when access tokens expire, forcing disruptive interactive logins. | Directly relates to #1305; users want silent refresh via RFC 6749 §6. |

---

## 4. Key PR Progress
**Activity Note:** Only one PR was updated in the last 24 hours, and it does not reflect substantive CLI development.

- [#3163](https://github.com/github/copilot-cli/pull/3163) — *ViewSonic monitor*  
  Appears to be an automation trigger or unrelated monitoring request referencing issue numbers #2591, #3561, and #3559. No functional changes to the CLI are described. Repository PR activity is otherwise quiet this cycle.

---

## 5. Feature Request Trends
- **MCP Protocol Completion:** The highest-priority feature cluster involves expanding MCP support: OAuth DCR (#1305), resources/prompts (#1518, #1803), resource subscriptions (#3073), and `tools/list_changed` notifications (#3125).
- **Agent & Fleet Configuration:** Users want better control over multi-agent workflows, including default models for `/fleet` subagents (#2193),

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-07-22

## 1. Today's Highlights
The community focus remains on shell execution stability and model-specific tool calling regressions, highlighted by a new pull request addressing detached child process pipe blocking in foreground shells. Users are actively reporting API schema validation failures with MCP tools on K3 and persistent UI re-rendering issues, while k2.5 users face critical tool-calling and goal-mode loops.

## 2. Releases
*No new releases reported in the last 24 hours.*

## 3. Hot Issues
*Note: The dataset contains 5 open issues updated in the last 24 hours.*

**#2531 [OPEN] MCP tool names & schemas rejected by Moonshot API (HTTP 400)**
*   **Why it matters:** Developers using MCP tools with K3 are encountering HTTP 400 errors due to JSON Schema validation failures (specifically `anyOf` type definitions). This blocks advanced agent workflows relying on custom tool definitions.
*   **Community Reaction:** Requires client-side sanitization of tool schemas before transmission to the provider.
*   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2531)

**#2527 [OPEN] k2.5 model tool calling completely invalid + goal mode infinite loop**
*   **Why it matters:** A critical regression where the k2.5 model generates tool calls that the execution layer rejects as "Tool not found," causing goal mode to enter an unrecoverable infinite loop. Multiple calling formats were tested without success.
*   **Community Reaction:** High severity; prevents reliable autonomous coding tasks on this model version.
*   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2527)

**#2528 [OPEN] The output is too long when using the shell mode**
*   **Why it matters:** Users report excessive output volume in shell mode when using specific commands like `!`, impacting readability and terminal performance.
*   **Community Reaction:** Reported on Windows with k3 model; suggests a need for output truncation or pagination controls.
*   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2528)

**#2529 [OPEN] Numpad input does not respond in the input box**
*   **Why it matters:** A usability bug on Windows where number keys on the numpad fail to register in the CLI input field, likely due to missing key event listeners.
*   **Community Reaction:** Frustrates users relying on numpad entry for code or numeric arguments.
*   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2529)

**#2474 [OPEN] CLI interface keeps shaking and re-renders entire conversation**
*   **Why it matters:** Persistent UI instability on Linux where the interface visually shakes and resets the conversation rendering, disrupting the user experience.
*   **Community Reaction:** Reported on v0.19.2 with K2.7 Code thinking model; indicates legacy rendering issues may still affect stability.
*   [Link](https://github.com/MoonshotAI/kimi-cli/issues/2474)

## 4. Key PR Progress

**#2530 [OPEN] fix(shell): stop blocking until timeout when a detached child holds the pipes**
*   **Description:** Addresses a deadlock in the foreground shell path where `_run_shell_command` waits indefinitely for stdout/stderr EOF before checking exit codes. Commands launching detached background processes (e.g., `some_daemon & echo done`) previously caused hangs.
*   **Impact:** Improves shell reliability for daemon management and background process workflows.
*   [Link](https://github.com/MoonshotAI/kimi-cli/pull/2530)

## 5. Feature Request Trends
Based on current issues, the most requested improvements center on:
*   **Robust Input Handling:** Better keyboard event coverage, specifically for numpad inputs on Windows.
*   **Schema Sanitization:** Automatic client-side validation and sanitization for MCP tool schemas to prevent API rejection.
*   **Shell Output Management:** Controls for handling excessively long outputs in shell mode.
*   **Model Compatibility:** Stable tool-calling implementations across different model versions (k2.5, K3, K2.7).

## 6. Developer Pain Points
*   **Tool Calling Instability:** Significant friction with model-specific tool execution, particularly k2.5 failing to resolve tool names and MCP schemas being rejected by the API.
*   **Shell Mode Edge Cases:** Users encounter blocking issues with detached child processes and unbounded output lengths, suggesting the shell integration needs more robust state management.
*   **UI Rendering Stability:** Visual glitches and unexpected re-renders continue to impact the developer experience, especially on Linux systems.
*   **Cross-Platform Input Gaps:** Missing key listeners for standard hardware layouts (numpad) indicate incomplete input event testing across OS environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-07-22

## 1. Today's Highlights
Qwen Code **v0.20.1** shipped with no breaking changes, introducing label-driven autofix takeover/release logic and a relative-coordinate `cua-driver-rs` fork with prebuilt binaries across macOS, Linux, and Windows. The past 24 hours were dominated by daemon telemetry hardening, Web Shell UI isolation, and background agent roster restoration. Community attention remains concentrated on multi-agent state leakage, Web Shell reliability under refresh/polling, and cross-provider tool schema edge cases.

## 2. Releases
- **v0.20.1** — Stable release. No known breaking changes. Core additions include label-driven autofix takeover/release, and `cua-driver-rs` v0.7.3 prebuilts (macOS codesigned/notarized universal binary + Linux/Windows x86_64 & arm6

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-07-22

## 1. Today's Highlights
The CodeWhale repository is actively consolidating the v0.9.1 release surface, with `main` now integrating the simplified runtime, empty-Work correction, and finalized TUI color grammar. Several high-friction UX and performance regressions were resolved in parallel, including long-output transcript scrolling, Enter-key send latency, and sub-agent shell working directory inheritance. Runtime improvements also introduce dynamic provider/model switching endpoints and richer streaming telemetry for idle-timeout diagnostics.

## 2. Releases
No new published releases in the last 24 hours. Activity is focused on the v0.9.1 completion board, exact final dogfood validation, and the non-publishing release gate before public distribution.

## 3. Hot Issues
1. **[Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)** *(CLOSED, 41 comments)*  
   A high-engagement discussion around agent reliability: the model repeatedly bypassed shared scripts and justified its deviations. Closed after maintainers aligned on stricter runtime adherence to project-defined constraints.
2. **[Staged command-boundary refactor EPIC](https://github.com/Hmbown/CodeWhale/issues/2870)** *(OPEN, 15 comments)*  
   Tracks the incremental decomposition of a large command-routing overhaul. Community values the mergeable-layer approach given the project's >10 PR/day velocity.
3. **[Help map the CodeWhale tsunami](https://github.com/Hmbown/CodeWhale/issues/4227)** *(OPEN, 11 comments)*  
   Proposes an automated dev-environment workflow to keep contributors synchronized with `main`. Reflects growing onboarding pressure as release cadence accelerates.
4. **[UI refactor needed](https://github.com/Hmbown/CodeWhale/issues/2766)** *(OPEN, 9 comments)*  
   Highlights copy-paste friction and confirmation overlays obscuring the main interface. Signals sustained demand for TUI ergonomics improvements.
5. **[Work Agent rows: real sub-agent details](https://github.com/Hmbown/CodeWhale/issues/2889)** *(OPEN, 7 comments)*  
   Requests structured activity reporting in the sidebar instead of raw tool noise. Maintainer explicitly invited focused implementation passes.
6. **[Restore xAI device-code OAuth login](https://github.com/Hmbown/CodeWhale/issues/4410)** *(CLOSED, 7 comments)*  
   Fixed a hard-coded auth path mismatch against the official Grok CLI. Closed after pinpointing the endpoint parsing failure.
7. **[Universal PreToolUse/PostToolUse hook layer](https://github.com/Hmbown/CodeWhale/issues/1917)** *(OPEN, 5 comments)*  
   Architectural proposal for cancel/pause/resume semantics across all action types. Draws interest from contributors building lifecycle-aware tool integrations.
8. **[Long output content cannot scroll](https://github.com/Hmbown/CodeWhale/issues/4603)** *(CLOSED, 3 comments)*  
   Windows/pwsh users reported viewport truncation on large diffs and multi-turn logs. Resolved via a PTY-based scrolling contract in v0.9.1.
9. **[Enter key send lag — UI freezes](https://github.com/Hmbown/CodeWhale/issues/4605)** *(CLOSED, 3 comments)*  
   Documented a cross-version regression freezing the composer for up to 1.2s. Closed after separating UI acknowledgement from background dispatch prep.
10. **[Completion board & no-publish release gate](https://github.com/Hmbown/CodeWhale/issues

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*