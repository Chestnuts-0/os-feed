# AI CLI Tools Community Digest 2026-06-29

> Generated: 2026-06-29 02:32 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Report: June 29, 2026

## 1. Ecosystem Overview
The 2026 AI CLI landscape is characterized by a shift from experimental novelty to enterprise-grade reliability, with developers prioritizing cost predictability, session persistence, and cross-platform stability over raw feature volume. Major players are converging on advanced session management paradigms, specifically moving away from simple rollbacks toward fork-based state isolation and granular security gating. However, the ecosystem is currently plagued by significant infrastructural debt, including unpredictable token billing, persistent platform-specific rendering bugs, and fragile multi-agent orchestration logic.

## 2. Activity Comparison

| Tool | Hot Issues (Last 24h) | Key PRs (Last 24h) | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 4 | No new release |
| **OpenAI Codex** | 10 | 10 | No new release |
| **Gemini CLI** | 10 | 10 | **Nightly Build Released** |
| **GitHub Copilot** | 5 | 1 | No new release |
| **Kimi Code** | 2 | 0 | No new release |
| **OpenCode** | 10 | 10 | No new release |
| **Pi** | 10 | 10 | No new release |
| **Qwen Code** | 10 | 10 | **v0.19.3 Released** |
| **DeepSeek TUI** | 10 | 10 | No new release |

## 3. Shared Feature Directions
*   **Advanced Session Management & Forking:** There is a universal move toward non-destructive history navigation. OpenAI Codex, OpenCode, and Pi are all implementing or refining session forking and manual compaction to replace traditional rollback mechanisms, addressing the need for parallel experimentation without context loss.
*   **Granular Security & Approval Gating:** Developers across Claude Code, OpenAI Codex, DeepSeek TUI, and Qwen Code are demanding finer control over tool execution. This includes separating read/write approvals, implementing fail-closed security policies (Cedar), and preventing unauthorized sub-agent spawning to mitigate cost and safety risks.
*   **Cost Transparency & Token Optimization:** Billing accuracy is a critical shared pain point. Tools like OpenAI Codex, Qwen Code, and DeepSeek TUI are actively addressing discrepancies in token counting, cache hit rates, and rate-limit reporting to restore developer trust in cost predictability.
*   **Multi-Agent Orchestration Stability:** All major tools are struggling with sub-agent reliability. Common themes include infinite recursion loops (Claude Code, Kimi), indefinite hangs (Gemini, OpenAI), and resource contention (DeepSeek). The community is pushing for better timeout handling, concurrency limits, and explicit authorization for parallel agent spawning.

## 4. Differentiation Analysis
*   **Enterprise & Integration Focus:** GitHub Copilot CLI and OpenAI Codex are heavily oriented towards enterprise workflows, with Copilot addressing proxy/network issues and Codex focusing on API compatibility and billing transparency. Their feature sets prioritize integration with existing corporate infrastructures.
*   **Modularity & Extensibility:** OpenCode and Pi distinguish themselves through a plugin-first architecture and strong support for diverse model providers (Anthropic, Groq, local LLMs). They cater to developers who require flexibility in backend selection and custom tool integration.
*   **Performance & Resource Efficiency:** Qwen Code and Gemini CLI are showing strong engineering focus on internal efficiency, such as AST-aware code navigation and bounded search latencies. These tools appeal to users concerned with token waste and computational overhead.
*   **Niche & Regional Adaptation:** DeepSeek TUI (CodeWhale) and Kimi Code show specific adaptations for regional markets (China/Korea) and unique pricing models (non-token billing), while also addressing specific OS-level quirks like WSL2 and ARM-based Macs.

## 5. Community Momentum & Maturity
*   **High Activity & Rapid Iteration:** OpenAI Codex, Gemini CLI, and OpenCode demonstrate the highest momentum, with consistent PR merges and high issue engagement. Gemini’s nightly releases and OpenCode’s active V2 session development indicate a rapid iteration cycle aimed at stabilizing core functionalities.
*   **Established but Stable:** Claude Code and GitHub Copilot show mature but less volatile development patterns. Their high issue volumes reflect large user bases encountering edge cases rather than fundamental instability, though Claude’s recent focus on security plugins suggests continued active development.
*   **Emerging/Niche:** Kimi Code and DeepSeek TUI have smaller but highly engaged communities focused on specific pain points (memory leaks, mode logic). Their lower issue counts do not necessarily indicate lower importance, but rather a more specialized user base.

## 6. Trend Signals
*   **The End of "Black Box" Billing:** The widespread outrage over token cost anomalies (OpenAI, Claude, Qwen) signals that future CLI tools must prioritize transparent, real-time cost tracking and strict, configurable limits. Developers will increasingly adopt tools that offer granular control over spending.
*   **Session Forking as Standard:** The industry is converging on session forking as the standard for safe experimentation. This trend suggests that future tools will deprecate linear history in favor of branching conversation trees, enabling more complex, non-linear coding workflows.
*   **Security-First Defaults:** The introduction of fail-closed policies and explicit approval gates (Claude, DeepSeek, Codex) indicates a regulatory and user-driven shift toward security-by-default. Tools that rely on implicit trust or overly permissive defaults will face increasing community resistance.
*   **Platform-Specific Optimization Wars:** With persistent bugs on Windows, macOS, and Linux, competitive advantage will increasingly come from superior cross-platform stability and resource management (CPU/RAM/Disk I/O). Tools that solve the "SSD wear" and "TUI freeze" problems will gain significant developer loyalty.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** June 29, 2026  
**Source:** `anthropics/skills` Repository Analysis

### 1. Top Skills Ranking
*Based on community engagement and PR activity.*

1.  **Skill Creator & Evaluation Infrastructure Fixes**
    *   **Functionality:** Core tools for authoring, testing, and optimizing skills (`skill-creator`). Recent focus is on fixing critical bugs in `run_eval.py` that caused false negatives (0% recall) and Windows-specific subprocess failures.
    *   **Discussion Highlights:** Intense debugging of YAML parsing errors, UTF-8 handling, and trigger detection logic. Multiple PRs (#1298, #1099, #1323, #1050, #362) address the same underlying instability in the evaluation loop.
    *   **Status:** Open (Multiple concurrent fix PRs).
    *   **Links:** [PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1323](https://github.com/anthropics/skills/pull/1323), [PR #1099](https://github.com/anthropics/skills/pull/1099)

2.  **Document Typography & Formatting**
    *   **Functionality:** Ensures high-quality output for generated documents by preventing orphan lines, widows, and numbering misalignments.
    *   **Discussion Highlights:** Addresses a common pain point in AI-generated prose where visual formatting degrades readability.
    *   **Status:** Open.
    *   **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **OpenDocument Text (ODT) Support**
    *   **Functionality:** Enables creation, filling, and conversion of `.odt` and `.ods` files, supporting LibreOffice workflows.
    *   **Discussion Highlights:** Fills a gap for non-Microsoft Office users requiring open-standard document manipulation.
    *   **Status:** Open.
    *   **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

4.  **Frontend Design Clarity**
    *   **Functionality:** Refines the `frontend-design` skill to be more actionable and coherent, ensuring instructions are executable within a single conversation context.
    *   **Discussion Highlights:** Focuses on reducing ambiguity in CSS/HTML generation prompts to improve reliability.
    *   **Status:** Open.
    *   **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

5.  **Skill Quality & Security Analyzers**
    *   **Functionality:** Meta-skills that evaluate other skills based on structure, documentation, security risks, and quality dimensions.
    *   **Discussion Highlights:** Critical for maintaining ecosystem integrity as community contributions grow.
    *   **Status:** Open.
    *   **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

6.  **PDF Case-Sensitivity Fix**
    *   **Functionality:** Corrects file references in the PDF skill to match case-sensitive filesystem requirements.
    *   **Discussion Highlights:** Simple but vital fix for cross-platform compatibility (Linux/macOS vs. Windows).
    *   **Status:** Open.
    *   **Link:** [PR #538](https://github.com/anthropics/skills/pull/538)

7.  **DOCX Tracked Changes Fix**
    *   **Functionality:** Prevents document corruption when adding tracked changes to DOCX files with existing bookmarks.
    *   **Discussion Highlights:** Addresses deep XML structure conflicts in OOXML standards.
    *   **Status:** Open.
    *   **Link:** [PR #541](https://github.com/anthropics/skills/pull/541)

8.  **Testing Patterns**
    *   **Functionality:** Comprehensive guide for unit testing, React component testing, and testing philosophy (Testing Trophy).
    *   **Discussion Highlights:** Expands capability beyond code generation into quality assurance workflows.
    *   **Status:** Open.
    *   **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

### 2. Community Demand Trends
*Derived from Issue discussions.*

*   **Enterprise & Organizational Sharing:** High demand for native org-wide skill sharing (Issue #228) and secure deployment within teams, moving away from manual file distribution.
*   **Security & Trust Boundaries:** Significant concern over impersonation and trust boundaries (Issue #492). Users are wary of community skills masquerading as official Anthropic skills, highlighting a need for verified namespaces.
*   **Persistent Memory & Context Management:** Strong interest in long-term context retention (Issue #154, #1329) and efficient state compression ("compact-memory") to reduce context window costs for long-running agents.
*   **Cross-Platform Compatibility:** Persistent friction with Windows environments (Issues #1061, #556) indicates a need for robust, OS-agnostic tooling in the core skill infrastructure.
*   **Governance & Safety:** Emerging request for "Agent Governance" skills (Issue #412) to enforce policy, audit trails, and threat detection within autonomous agent loops.

### 3. High-Potential Pending Skills
*Active PRs likely to merge soon due to technical necessity or clear value.*

*   **CONTRIBUTING.md & Documentation Standards:** Adding proper contribution guidelines to improve community health metrics (PR #509).
*   **System Documentation & Flowcharts:** Comprehensive architectural documentation for evidence management systems (PR #95).
*   **Codebase Inventory Audit:** A skill for automated codebase cleanup, orphan detection, and infrastructure audit (PR #147).
*   **AppDeploy Skill:** Integration for deploying full-stack web apps directly from Claude via AppDeploy.ai (PR #360).
*   **SAP-RPT-1-OSS Predictor:** Specialized skill for predictive analytics using SAP’s open-source tabular foundation model (PR #181).

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust, cross-platform evaluation infrastructure** and **enterprise-grade security/governance**, as current tooling struggles with basic Windows compatibility and trust verification while users push for deeper organizational integration and persistent agent memory.

---

# Claude Code Community Digest | 2026-06-29

### 1. Today's Highlights
The community is currently grappling with significant stability and cost-management issues, particularly regarding infinite recursion in subagent spawning and severe token bloat in auto-compaction paths. Additionally, authentication friction remains a top concern, with users reporting excessive login requirements and certificate chain errors affecting OAuth flows.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
These issues have garnered the most attention and engagement from the developer community.

1.  **[BUG] Constant Login Requirements** (#1757)
    *   **Why it matters:** Users are forced to re-authenticate via web daily, disrupting workflow.
    *   **Reaction:** 73 comments, 63 👍. High frustration level regarding UX friction.
    *   [View Issue](https://github.com/anthropics/claude-code/issues/1757)

2.  **Model Tool Call Parsing Errors** (#63875)
    *   **Why it matters:** Intermittent parsing failures abort in-progress actions, causing data loss and session interruptions.
    *   **Reaction:** 72 comments, 110 👍. One of the highest-engagement bug reports due to direct impact on reliability.
    *   [View Issue](https://github.com/anthropics/claude-code/issues/63875)

3.  **Subagent Infinite Recursion & Token Burn** (#68619)
    *   **Why it matters:** Critical bug where subagents spawn recursively (50+ levels), ignoring configuration flags, leading to massive token waste and lost work.
    *   **Reaction:** 26 comments, 8 👍. Described as a "catastrophic token burn scenario."
    *   [View Issue](https://github.com/anthropics/claude-code/issues/68619)

4.  **Mouse Wheel Scroll Regression** (#59979)
    *   **Why it matters:** Recent update (v2.1.143) broke mouse wheel functionality, cycling through input history instead of chat transcript.
    *   **Reaction:** 11 comments. Specific to Windows users.
    *   [View Issue](https://github.com/anthropics/claude-code/issues/59979)

5.  **Usage Command Rate Limit Errors** (#32503)
    *   **Why it matters:** The `/usage` command fails with rate limit errors, preventing visibility into consumption and limits.
    *   **Reaction:** 9 comments, 13 👍. Impacts cost monitoring.
    *   [View Issue](https://github.com/anthropics/claude-code/issues/32503)

6.  **Granular Mouse Control Request** (#70672)
    *   **Why it matters:** Users want to disable click-selection in menus while retaining scroll functionality, a common TUI preference.
    *   **Reaction:** 6 comments, 18 👍. Strong support for customizable TUI interactions.
    *   [View Issue](https://github.com/anthropics/claude-code/issues/70672)

7.  **Auto-compaction Cost Bugs** (#70459)
    *   **Why it matters:** Stale precompute data causes shallow compaction, leading to repeated cache creation and inflated token costs.
    *   **Reaction:** 4 comments, 3 👍. Highlights inefficiencies in core memory management.
    *   [View Issue](https://github.com/anthropics/claude-code/issues/70459)

8.  **Agent View Session Loss** (#72012)
    *   **Why it matters:** Reopening stopped/background sessions generates new session IDs, losing prior conversation context.
    *   **Reaction:** 3 comments. Critical for long-running agent workflows.
    *   [View Issue](https://github.com/anthropics/claude-code/issues/72012)

9.  **Workflow Tool Silent Token Burn** (#72127)
    *   **Why it matters:** A simple research task triggered 8-10 parallel agents, burning a 5x plan quota in minutes without explicit authorization.
    *   **Reaction:** 3 comments. Raises serious concerns about safety defaults and cost controls.
    *   [View Issue](https://github.com/anthropics/claude-code/issues/72127)

10. **Bash Sandbox History Expansion Corruption** (#64301)
    *   **Why it matters:** Bubblewrap sanitization corrupts `!` characters in commands, rendering the sandbox unusable for agentic bash workflows.
    *   **Reaction:** 2 comments, 3 👍. Blocks Linux users relying on sandboxed execution.
    *   [View Issue](https://github.com/anthropics/claude-code/issues/64301)

### 4. Key PR Progress
Active pull requests focusing on plugins, security, and documentation.

1.  **Add Handover Plugin** (#72037)
    *   **Summary:** Introduces a `/handover` plugin to export session context to structured Markdown, facilitating LLM-to-LLM handoffs.
    *   [View PR](https://github.com/anthropics/claude-code/pull/72037)

2.  **Add Protect-MCP Plugin** (#72014)
    *   **Summary:** Implements a fail-closed Cedar policy gate that blocks tool calls violating security policies and signs offline-verifiable receipts.
    *   [View PR](https://github.com/anthropics/claude-code/pull/72014)

3.  **Update Plugin Install Instructions** (#72000)
    *   **Summary:** Updates documentation to reflect recommended installation methods for plugins.
    *   [View PR](https://github.com/anthropics/claude-code/pull/72000)

4.  **Fix Hookify Event Filtering** (#62315)
    *   **Summary:** Closed PR fixing event filtering logic within pre/post hooks.
    *   [View PR](https://github.com/anthropics/claude-code/pull/62315)

*(Note: Only 4 relevant PRs were found in the last 24h; the "open source claude code" PR is unrelated to official development.)*

### 5. Feature Request Trends
*   **Context Visibility & Debugging:** Strong demand for granular control over what enters the context window. Users want a debug command to view the full chronological context and better tools for inspecting hook/system prompt injection.
*   **Session Management & Persistence:** Requests for saving finished chats as reusable skills/agents in one click, and robust handling of session resumes without context loss.
*   **Customizable TUI Interactions:** Users are requesting more control over mouse behaviors (click vs. scroll) and menu interactions in the terminal interface.

### 6. Developer Pain Points
*   **Unpredictable Costs & Token Usage:** Multiple reports highlight excessive token consumption due to subagent recursion, poor auto-compaction, and silent workflow expansions. Developers feel a lack of transparency and hard limits on agent spawning.
*   **Authentication Friction:** Frequent re-login requirements and certificate chain issues (Let's Encrypt ISRG Root X2) are causing significant operational overhead.
*   **Platform-Specific Instabilities:** Windows (mouse scroll, IDE integration), Linux (sandbox corruption), and macOS (system shortcuts, Agent View bugs) all have distinct, high-priority bug clusters affecting core functionality.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-06-29

## 1. Today's Highlights
The Codex community is primarily focused on significant billing anomalies affecting Plus and Pro subscribers, with reports of rate limits consuming budgets 10–20x faster than expected since mid-June. Concurrently, developers are addressing persistent performance regressions on macOS and Windows, specifically regarding SQLite log churn causing SSD wear and high CPU usage. On the development front, the team is refining multi-agent orchestration, introducing session forks to replace deprecated rollback mechanisms, and stabilizing MCP server integration.

## 2. Releases
No new releases were published in the last 24 hours. The most recent stable updates remain at `rust-v0.142.0` and Codex Desktop `26.623.x`.

## 3. Hot Issues
These issues have garnered the most community attention and engagement:

1.  **[Bug] Rate-limit cost per token jumped ~10-20x** ([#28879](https://github.com/openai/codex/issues/28879))
    *   *Why it matters:* Plus plan users report their 5-hour budget draining in 2-3 prompts on `gpt-5.5`, a severe regression from previous behavior.
    *   *Community Reaction:* 194 comments, 337 upvotes. High urgency due to financial impact.

2.  **[Bug] SQLite feedback logs consume ~640 TB/year** ([#28224](https://github.com/openai/codex/issues/28224))
    *   *Why it matters:* Unchecked logging volume threatens SSD endurance on local machines.
    *   *Community Reaction:* 99 comments, 404 upvotes. Although partially fixed in `0.142.0`, concerns remain about residual churn.

3.  **[Bug] Model not supported when using X-OpenAI-Internal-Codex-Responses-Lite** ([#30224](https://github.com/openai/codex/issues/30224))
    *   *Why it matters:* Indicates a breaking change in API compatibility for `gpt-5.5` within specific internal headers.
    *   *Community Reaction:* 53 comments. Affects developers relying on specific response headers.

4.  **[Bug] macOS `syspolicyd` / `trustd` CPU and memory runaway** ([#25719](https://github.com/openai/codex/issues/25719))
    *   *Why it matters:* Severe battery drain and thermal issues for Mac users.
    *   *Community Reaction:* 35 comments, 55 upvotes. Recurring stability complaint for macOS Desktop.

5.  **[Bug] Server-side quota over-reports consumption** ([#30002](https://github.com/openai/codex/issues/30002))
    *   *Why it matters:* Pro users hit limits after ~41 mins (1.35M tokens) vs ~5 hours previously, suggesting accounting errors.
    *   *Community Reaction:* 28 comments. Compounds the billing concerns raised in #28879.

6.  **[Bug] Persistent SQLite TRACE log churn on macOS** ([#29532](https://github.com/openai/codex/issues/29532))
    *   *Why it matters:* Users report the fix in `0.142.0` was incomplete, with `responses_websocket` logs still causing I/O spikes.
    *   *Community Reaction:* 24 comments. Indicates fragmented resolution of the logging bug.

7.  **[Bug] Windows Codex App freezes/stutters** ([#20214](https://github.com/openai/codex/issues/20214))
    *   *Why it matters:* Performance degradation on Windows 11 Pro despite adequate hardware.
    *   *Community Reaction:* 20 comments, 38 upvotes. Highlights cross-platform performance disparity.

8.  **[Bug] Excessive SQLite WAL writes during streaming** ([#17320](https://github.com/openai/codex/issues/17320))
    *   *Why it matters:* TRACE logs ignore `RUST_LOG` settings, leading to disk thrashing.
    *   *Community Reaction:* 16 comments, 36 upvotes. Long-standing infrastructure issue affecting Linux/macOS.

9.  **[Bug] Sub-agents occasionally get stuck indefinitely** ([#30400](https://github.com/openai/codex/issues/30400))
    *   *Why it matters:* Critical for multi-agent workflows; hangs prevent automation pipelines from completing.
    *   *Community Reaction:* 3 comments. Early report but high risk for enterprise users.

10. **[Bug] GPT-5.5 Fast session freezes then resumes slowly** ([#28155](https://github.com/openai/codex/issues/28155))
    *   *Why it matters:* Specific instability with the `gpt-5.5` Fast model variant on macOS.
    *   *Community Reaction:* 2 comments. Points to potential model-specific backend issues.

## 4. Key PR Progress
Recent pull requests focusing on stability, UX, and architectural improvements:

1.  **Allow review while MCP servers are starting** ([#30500](https://github.com/openai/codex/pull/30500))
    *   Fixes UI blocking by decoupling review actions from MCP initialization states.

2.  **Replace rollback with session forks** ([#30504](https://github.com/openai/codex/pull/30504))
    *   Deprecates `thread/rollback` in favor of `session forks` for safer transcript time travel and interruption recovery.

3.  **Add writes app approval mode** ([#30482](https://github.com/openai/codex/pull/30482))
    *   Introduces granular control over tool approvals, allowing `readOnlyHint=true` tools to bypass prompts while requiring approval for writes.

4.  **Configurable multi-agent mode hint text** ([#30493](https://github.com/openai/codex/pull/30493))
    *   Stabilizes policy for multi-agent V2, ensuring consistent UI hints across explicit-only and proactive modes.

5.  **Update safety check links** ([#30491](https://github.com/openai/codex/pull/30491))
    *   Corrects stale URLs in Bio/Cyber safety buffers and improves Help Center exposure.

6.  **Clear completed safety buffering prompt** ([#30490](https://github.com/openai/codex/pull/30490))
    *   Resolves UI glitches where stale modal prompts remained visible after turn completion.

7.  **Fall back from unsupported reasoning effort** ([#30487](https://github.com/openai/codex/pull/30487))
    *   Prevents crashes when cross-thread messages specify reasoning efforts (e.g., `max`) unsupported by the current model.

8.  **Show reset details in redemption picker** ([#30488](https://github.com/openai/codex/pull/30488))
    *   Enhances transparency by displaying credit expiry dates and amounts in the rate-limit reset UI.

9.  **Expose rate-limit reset credit details** ([#30395](https://github.com/openai/codex/pull/30395))
    *   Backend API update to support the new redemption UI, providing credit expiry and consumption logic.

10. **Treat `max` as a first-class reasoning effort** ([#30467](https://github.com/openai/codex/pull/30467))
    *   Aligns UI presentation for `max` effort with productized labels, fixing casing inconsistencies in catalogs like Bedrock.

## 5. Feature Request Trends
*   **Advanced Session Management:** Strong demand for non-destructive history navigation. The shift from `rollback` to `session forks` (#30504) suggests users want safer, parallelizable state management.
*   **Granular Security & Approval Controls:** Users are requesting finer control over tool execution, specifically distinguishing between read-only and write operations (#30482), and managing sandbox permissions for remote/SSH sessions.
*   **Multi-Agent Orchestration Stability:** There is a clear trend toward robustifying multi-agent workflows, with requests for non-blocking startup (#30399) and better handling of stuck sub-agents (#30400).
*   **Transparent Billing & Quotas:** Given the high volume of billing issues, there is an implicit request for clearer, real-time quota tracking and more predictable rate-limit mechanics, evidenced by the PRs exposing credit details (#30488, #30395).

## 6. Developer Pain Points
*   **Billing Inaccuracies:** The most critical pain point is the discrepancy between expected and actual token consumption/rate limits, particularly for `gpt-5.5` on Plus/Pro plans. This is causing significant frustration and perceived value loss.
*   **Disk I/O and Storage Wear:** Persistent SQLite logging issues (TRACE/WAL churn) are causing excessive disk writes, threatening SSD longevity and degrading system performance on macOS and Windows.
*   **Platform-Specific Instabilities:** Windows users report frequent freezes, stuttering, and issues with elevated/admin privileges breaking UI interactions. macOS users face CPU runaways and sandbox connectivity drops.
*   **MCP Integration Friction:** Users encounter errors when using specific internal headers with newer models, and struggles with sub-agents hanging indefinitely, indicating the multi-agent/MCP stack is still maturing.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** June 29, 2026
**Source:** github.com/google-gemini/gemini-cli

### 1. Today's Highlights
The Gemini CLI team addressed critical stability and security concerns with a batch of merged fixes, including resolving session corruption issues, bounding web search latency, and patching a vulnerability in the workspace trust dialog. Concurrently, the community is actively debugging complex sub-agent behaviors, particularly regarding recovery after turn limits and generalist agent hangs.

### 2. Releases
*   **v0.51.0-nightly.20260629.gae0a3aa7b**: A new nightly build was released today.
    *   [View Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b)

### 3. Hot Issues
These issues represent the highest engagement and criticality within the community over the last 24 hours.

1.  **[P1] Subagent recovery after MAX_TURNS reported as GOAL success**
    *   **Why it matters:** Critical bug where `codebase_investigator` falsely reports success upon hitting turn limits, hiding interruptions.
    *   **Reaction:** High concern for reliability; 8 comments, 2 👍.
    *   [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
2.  **[P1] Generalist agent hangs**
    *   **Why it matters:** The core generalist agent freezes indefinitely on simple tasks (e.g., folder creation), requiring explicit instructions to disable sub-agents as a workaround.
    *   **Reaction:** Significant frustration; 8 comments, 8 👍.
    *   [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
3.  **[P2] Robust component level evaluations**
    *   **Why it matters:** Epic tracking the expansion of behavioral evals to improve testing infrastructure for agent components.
    *   **Reaction:** Technical focus; 7 comments.
    *   [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)
4.  **[P2] Assess impact of AST-aware file reads/search**
    *   **Why it matters:** Investigation into using Abstract Syntax Trees to reduce token waste and improve precision in code navigation.
    *   **Reaction:** Architectural discussion; 7 comments, 1 👍.
    *   [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
5.  **[P2] Gemini does not use skills and sub-agents enough**
    *   **Why it matters:** Users report the agent fails to autonomously leverage custom skills (e.g., Gradle, Git) unless explicitly prompted.
    *   **Reaction:** Anecdotal evidence suggests a gap in agent autonomy; 6 comments.
    *   [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
6.  **[P2] Add deterministic redaction and reduce Auto Memory logging**
    *   **Why it matters:** Security concern where secrets may enter model context before redaction occurs in Auto Memory extraction.
    *   **Reaction:** Privacy-focused; 5 comments.
    *   [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)
7.  **[P2] Stop Auto Memory from retrying low-signal sessions indefinitely**
    *   **Why it matters:** Performance and cost issue where the extractor loops over unprocessed low-signal sessions.
    *   **Reaction:** Efficiency concern; 5 comments.
    *   [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)
8.  **[P1] Shell command execution gets stuck with "Waiting input"**
    *   **Why it matters:** Core CLI functionality broken for simple commands that finish immediately but leave the agent hanging.
    *   **Reaction:** Blocks basic workflows; 4 comments, 3 👍.
    *   [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
9.  **[P1] Browser subagent fails in Wayland**
    *   **Why it matters:** Specific OS environment failure for the browser agent, causing immediate termination.
    *   **Reaction:** Platform compatibility issue; 4 comments, 1 👍.
    *   [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
10. **[P2] Extension not listed in Gallery despite meeting requirements**
    *   **Why it matters:** Discovery friction for third-party developers extending the CLI ecosystem.
    *   **Reaction:** Administrative bug; 4 comments.
    *   [Issue #27838](https://github.com/google-gemini/gemini-cli/issues/27838)

### 4. Key PR Progress
Significant fixes and dependency updates merged or closed in the last 24 hours.

1.  **fix(core): trust dialog discloses the hook shape that never runs**
    *   Fixes a security/information asymmetry where the trust dialog showed inverse hook shapes.
    *   [PR #27915](https://github.com/google-gemini/gemini-cli/pull/27915)
2.  **fix(core): bound web search tool latency**
    *   Adds a 120s timeout to `google_web_search` to prevent agent hangs on slow network responses.
    *   [PR #27910](https://github.com/google-gemini/gemini-cli/pull/27910)
3.  **fix(cli): don't offer to resume a session that wasn't saved**
    *   Prevents "resume" prompts when disk space is full (`ENOSPC`) and the session file is null.
    *   [PR #27914](https://github.com/google-gemini/gemini-cli/pull/27914)
4.  **fix(core): validate GCP project ID format**
    *   Prevents auto-memory storage of invalid aliases that cause 403/CONSUMER_INVALID errors later.
    *   [PR #27916](https://github.com/google-gemini/gemini-cli/pull/27916)
5.  **fix(core): keep recreated session files loadable after deletion**
    *   Guards against race conditions where session cleanup deletes files while the writer is still active.
    *   [PR #27905](https://github.com/google-gemini/gemini-cli/pull/27905)
6.  **fix(core): load JSONL sessions when projectHash is missing**
    *   Improves backward compatibility for legacy or corrupted session records.
    *   [PR #27904](https://github.com/google-gemini/gemini-cli/pull/27904)
7.  **fix(trust): disclose hooks declared in canonical nested shape**
    *   Ensures the trust dialog correctly reads and displays commands from complex hook definitions.
    *   [PR #27903](https://github.com/google-gemini/gemini-cli/pull/27903)
8.  **chore(deps): bump @google/genai from 1.30.0 to 2.9.0**
    *   Major version update to the underlying GenAI SDK.
    *   [PR #28191](https://github.com/google-gemini/gemini-cli/pull/28191)
9.  **chore(deps): bump undici from 7.10.0 to 8.5.0**
    *   Updates HTTP client to address security vulnerabilities in the release line.
    *   [PR #28194](https://github.com/google-gemini/gemini-cli/pull/28194)
10. **chore(deps): bump the npm-dependencies group with 75 updates**
    *   Includes updates to `simple-git`, `@agentclientprotocol/sdk`, and others.
    *   [PR #28190](https://github.com/google-gemini/gemini-cli/pull/28190)

### 5. Feature Request Trends
*   **AST-Aware Code Navigation:** Multiple issues (#22745, #22746) indicate strong interest in using Abstract Syntax Trees for more precise file reading and codebase mapping, aiming to reduce token usage and turn counts.
*   **Enhanced Agent Autonomy & Skill Usage:** Users are requesting better default behavior for skills (#21968) and sub-agents (#22598), specifically wanting the agent to proactively use defined skills and expose sub-agent trajectories for debugging.
*   **Resilience & Recovery:** There is a clear demand for better session recovery mechanisms (#22232) and robust error handling for browser agents (#22267), particularly regarding persistent sessions and lock recovery.

### 6. Developer Pain Points
*   **Agent Hangs and Infinite Loops:** The most frequent complaint involves the agent hanging indefinitely, either due to generalist agent failures (#21409), shell command waits (#25166), or web search timeouts (#27890).
*   **Session Corruption and State Management:** Users are experiencing issues with session files becoming corrupted or unreadable after disk errors or deletions (#27275, #27279), leading to lost progress.
*   **Security and Trust Transparency:** Concerns remain about the workspace trust dialog not accurately reflecting executed hooks (#27901) and potential secret leakage in Auto Memory (#26525).
*   **Browser Agent Instability:** Specific failures in Wayland environments (#21983) and ignoring configuration overrides (#22267) are causing friction for developers relying on browser automation.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-29
**Source:** github.com/github/copilot-cli

### 1. Today's Highlights
The community focus has shifted heavily toward usability enhancements for repository-backed sessions, with multiple feature requests addressing file navigation, session organization, and status visibility. Simultaneously, a critical networking issue persists for enterprise users operating behind corporate proxies, highlighting ongoing friction in SDK headless modes. No new releases were published in the last 24 hours.

### 2. Releases
*   **No new releases.** The latest version remains v1.0.36 (released April 2026).

### 3. Hot Issues
*   **[Issue #2978] `session.create` fails with "fetch failed" in SDK headless mode behind corporate proxy**
    *   **Why it matters:** This blocks enterprise adoption for automated/CI pipelines where proxy configuration is mandatory. The error suggests the SDK subprocess is not correctly inheriting or utilizing proxy environment variables despite `undici` compatibility claims.
    *   **Community Reaction:** High potential impact for enterprise users; currently low engagement (0 👍) likely due to niche audience, but critical for affected workflows.
    *   **Link:** [github/copilot-cli Issue #2978](https://github.com/github/copilot-cli/issues/2978)

*   **[Issue #3971] Copilot App: Full file-tree browser for repository-backed sessions**
    *   **Why it matters:** Addresses a significant UX inconsistency. Folder-backed sessions offer full file-tree navigation, while repository-backed sessions are limited to a Git Changes view, hindering deep code exploration.
    *   **Community Reaction:** New feature request (created today); reflects user desire for parity between session types.
    *   **Link:** [github/copilot-cli Issue #3971](https://github.com/github/copilot-cli/issues/3971)

*   **[Issue #3970] Feature Request: User-defined tags on sessions**
    *   **Why it matters:** As session counts grow, discoverability becomes a major pain point. Current reliance on session names is insufficient for multi-repo or multi-feature workflows.
    *   **Community Reaction:** New feature request; highlights the need for better organizational tools.
    *   **Link:** [github/copilot-cli Issue #3970](https://github.com/github/copilot-cli/issues/3970)

*   **[Issue #3969] Feature Request: Plan status indicators on session list items**
    *   **Why it matters:** Improves workflow efficiency by allowing users to gauge session progress without opening each one individually. Crucial for developers juggling multiple concurrent workstreams.
    *   **Community Reaction:** New feature request; complements the tagging request for better session management.
    *   **Link:** [github/copilot-cli Issue #3969](https://github.com/github/copilot-cli/issues/3969)

*   **[Issue #3967] Copilot disappeared while working in two terminals, now won't run**
    *   **Why it matters:** Reports a critical stability/regression bug on Ubuntu 24.04 LTS involving terminal multiplexing (Guake) and state persistence. The tool fails to recognize its own installation after an unexpected disappearance.
    *   **Community Reaction:** Indicates potential issues with state management or installation integrity checks in multi-terminal environments.
    *   **Link:** [github/copilot-cli Issue #3967](https://github.com/github/copilot-cli/issues/3967)

*(Note: Only 5 issues were updated in the last 24 hours. All are listed above.)*

### 4. Key PR Progress
*   **[PR #3968] Rename changelog.md to changelog.md**
    *   **Status:** Closed
    *   **Description:** A trivial rename operation with no functional change. Likely a cleanup or typo correction that was merged or closed quickly.
    *   **Link:** [github/copilot-cli PR #3968](https://github.com/github/copilot-cli/pull/3968)

*(Note: Only 1 PR was updated in the last 24 hours.)*

### 5. Feature Request Trends
Based on today's activity, the top three feature directions are:
1.  **Session Organization & Discoverability:** Users are requesting metadata capabilities (tags) and visual cues (status badges) to manage growing numbers of sessions effectively.
2.  **UX Parity:** There is strong demand for aligning the experience of repository-backed sessions with folder-backed sessions, specifically regarding file-tree browsing capabilities.
3.  **Enterprise Network Support:** Continued need for robust proxy handling in headless/SDK modes to support corporate environments.

### 6. Developer Pain Points
*   **Proxy Configuration in Headless Mode:** Enterprise developers are struggling with the SDK's inability to correctly route requests through corporate HTTP proxies in headless contexts, leading to "fetch failed" errors.
*   **Inconsistent Navigation UI:** The disparity between folder and repository session interfaces (file tree vs. git changes) frustrates users trying to navigate large codebases.
*   **Session Management Overhead:** Without tags or status indicators, tracking progress across multiple sessions requires excessive context switching and manual inspection.
*   **Stability in Multi-Terminal Environments:** Bugs related to session persistence and installation recognition when using split or nested terminals (e.g., Guake) cause workflow interruptions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-06-29

### 1. Today's Highlights
The community is currently addressing critical stability issues, specifically an infinite file-reading loop affecting the CLI on Linux and high memory consumption in the VS Code extension on macOS. Despite these challenges, active discussion continues on GitHub, with the file-loop bug garnering significant community attention due to its blocking nature for development workflows.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Hot Issues
*Note: Only 2 issues were updated in the last 24 hours. Both are detailed below.*

1.  **[Bug] Kimi CLI stuck in reading one file again and again and stuck in a loop**
    *   **Why it matters:** This issue describes a critical infinite loop where the CLI repeatedly reads a single file, halting progress entirely. It affects version 0.76 on Linux (Arch) using a custom Anthropic endpoint (`mimo-v2-flash`).
    *   **Community Reaction:** High engagement with 15 comments and 1 upvote, indicating strong interest in a fix as this blocks core functionality.
    *   [View Issue #640](https://github.com/MoonshotAI/kimi-cli/issues/640)

2.  **[Bug] kimi code vscode 插件很耗内存 / kimi code vscode plug-in consumes a lot of memory**
    *   **Why it matters:** Users report excessive RAM usage during long-running tasks in the VS Code plugin (v0.4.5). While specific reproduction steps are brief, memory leaks or inefficient handling during extended sessions degrade performance, particularly on ARM-based Macs.
    *   **Community Reaction:** Low immediate traction (0 upvotes, 1 comment), but highlights a persistent pain point for power users running complex, multi-step AI tasks.
    *   [View Issue #1592](https://github.com/MoonshotAI/kimi-cli/issues/1592)

### 4. Key PR Progress
*   No pull requests were updated in the last 24 hours.

### 5. Feature Request Trends
Based on the current issue landscape, the primary "feature" demand is actually **stability and efficiency**:
*   **Loop Prevention:** Robust error handling for file I/O operations to prevent infinite loops when interacting with custom endpoints or specific file structures.
*   **Resource Optimization:** Better memory management for the VS Code extension, specifically for long-duration tasks on resource-constrained environments (like ARM architectures).

### 6. Developer Pain Points
*   **Infinite Loops in CLI:** The most urgent pain point is the CLI getting stuck in repetitive read cycles, likely triggered by specific configuration combinations (custom endpoints + specific models).
*   **Memory Bloat in IDE Integration:** The VS Code plugin exhibits poor memory hygiene during sustained usage, leading to potential crashes or system slowdowns for developers working on large projects.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-06-29

## 1. Today's Highlights
OpenCode developers are actively addressing critical stability issues, including auto-compaction loops and CPU spikes that render the CLI unresponsive. Significant architectural progress is being made in the core engine with the introduction of V2 session forking and manual compaction, alongside improved handling of large MCP tool catalogs.

## 2. Releases
**No new releases** were published in the last 24 hours.

## 3. Hot Issues
These issues reflect the highest community engagement and pain points this week:

1.  **[OPEN] Can not copy and paste in opencode CLI** (#13984)
    *   *Why it matters:* A fundamental usability bug affecting 50+ comments; users report clipboard indicators firing but pasting nothing.
    *   *Reaction:* High frustration among TUI power users.
2.  **[OPEN] Gemma-4-26b/31b interaction issues leading to tool loops** (#21034)
    *   *Why it matters:* Specific models are becoming unusable due to tokenizer/engine mismatches, despite recent patches.
    *   *Reaction:* Developers are seeking workarounds for local Gemma deployments.
3.  **[OPEN] Termux support** (#961)
    *   *Why it matters:* Long-standing request for mobile/Android development workflows.
    *   *Reaction:* Strong community advocacy for accessibility.
4.  **[OPEN] Unified usage tracking via /usage** (#9281)
    *   *Why it matters:* Addresses the lack of visibility into OAuth provider rate limits and plan usage.
    *   *Reaction:* Highly requested for enterprise and multi-provider setups.
5.  **[CLOSED] Skills don't show up in TUI autocomplete** (#22129)
    *   *Why it matters:* Inconsistency between Web App and TUI functionality disrupts workflow.
    *   *Reaction:* Confirmed bug, now resolved.
6.  **[CLOSED] Paid Go subscription charged but not activated** (#32420)
    *   *Why it matters:* Critical billing failure reported by multiple users; indicates backend sync issues.
    *   *Reaction:* Urgent support escalation required.
7.  **[CLOSED] OpenCode immediately enters auto-compaction loop** (#30680)
    *   *Why it matters:* Causes infinite token consumption and silence, effectively bricking sessions.
    *   *Reaction:* Major stability concern.
8.  **[OPEN] opencode utilization at 99-100% randomly** (#33399)
    *   *Why it matters:* Unresponsive CLI and high fan noise indicate potential infinite loops or blocking I/O.
    *   *Reaction:* Users reporting hardware impact.
9.  **[OPEN] SessionStart hook for session lifecycle events** (#5409)
    *   *Why it matters:* Enables advanced automation similar to Claude Code hooks.
    *   *Reaction:* Strong interest from power users.
10. **[OPEN] MCP remote client has no transport-level retry** (#25287)
    *   *Why it matters:* Remote MCP servers fail permanently after transient network drops without recovery.
    *   *Reaction:* Critical for reliable remote tool integration.

## 4. Key PR Progress
Significant engineering efforts are focused on core stability and V2 session management:

1.  **feat(opencode): defer large MCP tool catalogs** (#34368)
    *   *Impact:* Improves performance and stability for users with extensive MCP toolsets by deferring search/call bridges.
2.  **feat(usage): unified usage tracking with auth refresh** (#9545)
    *   *Impact:* Implements the highly requested #9281 feature, providing built-in usage stats for OAuth-authenticated providers.
3.  **fix(opencode): use detected MIME type for --file attachments** (#34369)
    *   *Impact:* Fixes incorrect handling of image and non-text file attachments in local mode.
4.  **fix(core): skip fff in node runtime** (#34353)
    *   *Impact:* Ensures correct filesystem search layer selection (ripgrep) in Node environments, preventing desktop sidecar initialization errors.
5.  **fix(core): remove per-prompt system option** (#34361)
    *   *Impact:* Cleans up V2 schema by removing redundant prompt-level system options, simplifying the LLM input structure.
6.  **fix(opencode): use xhigh instead of max for GLM-5.2** (#34360)
    *   *Impact:* Corrects variant mapping for GLM-5.2 OpenAI-compatible models, fixing provider transform issues.
7.  **feat(core): add v2 manual compaction** (#34336)
    *   *Impact:* Allows users to manually trigger session compaction via the existing endpoint, offering better control over context window management.
8.  **feat(core): implement v2 session forking** (#34343)
    *   *Impact:* Introduces `SessionV2.fork()`, enabling users to branch conversations while maintaining history integrity and avoiding sequence collisions.
9.  **refactor(app): add suspense support to persisted** (#34357)
    *   *Impact:* Enhances React/Solid state management resilience by integrating Suspense directly into the persistence helper.
10. **feat: add Android/Termux support to postinstall** (#33010)
    *   *Impact:* Officially adds platform detection and wrapper support for Android (`os.platform() === "android"`), addressing long-term issue #961.

## 5. Feature Request Trends
*   **Advanced Session Management:** There is a clear demand for granular control over session lifecycles, evidenced by requests for `SessionStart` hooks, manual compaction, and session forking.
*   **Cross-Platform Accessibility:** Support for mobile environments (Termux/Android) and integrated desktop browsers for visual inspection (like Codex) are top priorities.
*   **Observability & Billing:** Users consistently request better visibility into token usage, cost tracking across multiple providers, and clearer rate limit indicators.

## 6. Developer Pain Points
*   **Stability & Performance:** Recurring reports of 100% CPU usage, unresponsive CLIs, and infinite auto-compaction loops suggest underlying race conditions or resource leaks in the core engine.
*   **MCP Reliability:** Remote MCP connections are fragile, lacking retry mechanisms and suffering from persistent failure states after minor network hiccups.
*   **Model-Specific Bugs:** Certain model families (Gemma-4, MiniMax) exhibit specific parsing or tool-calling failures that require targeted sanitizers or tokenizer fixes.
*   **UI/UX Inconsistencies:** Discrepancies between the Web App and TUI (e.g., skill autocomplete visibility) and desktop app glitches (unresponsive loops) continue to frustrate users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-06-29

### 1. Today's Highlights
The Pi development team addressed critical stability issues regarding OpenAI Codex connectivity and Windows-specific file path corruption in the `find` utility. Significant progress was made on the Context Matrix MVP, with Phase 3 and 4a implementations merged, alongside fixes for LLM cache inefficiencies and provider compatibility for Anthropic and Groq endpoints.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **#4945: openai-codex Connection Reliability Issues** [OPEN]
    Users report the TUI hanging on "Working..." with no streamed output when using `gpt-5.5`. With 72 comments and 30 upvotes, this is a major pain point affecting core usability.
    https://github.com/earendil-works/pi/issues/4945
*   **#5825: Streaming markdown forces scroll to bottom** [OPEN]
    A UX regression where enabling `clear on shrink` causes the view to jump to the bottom during streaming, disrupting readability. High visibility despite low upvotes (0).
    https://github.com/earendil-works/pi/issues/5825
*   **#6083: LLM cache is not working properly with z.ai GLM coding plan** [OPEN]
    Developers report excessive token consumption with multi-step tasks on z.ai GLM plans, burning 10-20% of session limits per task. 9 upvotes indicate strong community concern regarding cost efficiency.
    https://github.com/earendil-works/pi/issues/6083
*   **#6104: `find` drops first path-segment character on Windows** [OPEN]
    A critical bug where searching from bare drive roots (e.g., `C:\`) corrupts paths by dropping the first character and doubling slashes.
    https://github.com/earendil-works/pi/issues/6104
*   **#6093: Scoped Anthropic API keys need necessary request params** [CLOSED]
    Clarified that scoped Anthropic keys (`sk-ant-api03-...`) require different header handling than standard OAT keys. Resolved by updating detection logic.
    https://github.com/earendil-works/pi/issues/6093
*   **#6139: Strip unsupported reasoning_content for providers that don't accept it** [CLOSED]
    Fixed 400 Bad Request errors on providers like Groq that do not support the `reasoning_content` field by stripping it from payloads.
    https://github.com/earendil-works/pi/issues/6139
*   **#6124: Devnagri breaking the Pi harness** [OPEN]
    Non-Latin script input (Devanagari) causes UI rendering failures in the harness, highlighting ongoing internationalization challenges.
    https://github.com/earendil-works/pi/issues/6124
*   **#6088: RpcClient hardcoded 60s wait timeout causes failures** [CLOSED]
    Identified that a hardcoded 60-second timeout in `RpcClient` caused long-running MCP tool sessions to fail prematurely.
    https://github.com/earendil-works/pi/issues/6088
*   **#6114: Azure Open AI 5.2-chat-latest doesn't exist in foundary** [CLOSED]
    Addressed a mapping issue where Azure's `gpt-5.2-chat-latest` was not recognized in the model finder.
    https://github.com/earendil-works/pi/issues/6114
*   **#6075: Pi startup time is too slow** [CLOSED]
    User reported ~10s startup latency on Fedora Linux. Likely resolved or deferred alongside general performance optimizations.
    https://github.com/earendil-works/pi/issues/6075

### 4. Key PR Progress
*   **#6148: fix(ai): support Anthropic bearer token env** [OPEN]
    Attempted fix for Anthropic authentication interfaces. Maintainer notes uncertainty about the solution due to interface limitations.
    https://github.com/earendil-works/pi/pull/6148
*   **#6142: Enable DeepSeek reasoning_effort high for GitHub agent scripts** [CLOSED]
    Added support for `reasoning_effort: high` in DeepSeek payloads and logging for usage tracking.
    https://github.com/earendil-works/pi/pull/6142
*   **#6144: fix: normalize tabs to spaces in edit tool fuzzy matching** [CLOSED]
    Resolved edit tool failures in files using tab indentation by normalizing whitespace before fuzzy matching.
    https://github.com/earendil-works/pi/pull/6144
*   **#6146: fix(ai): reverts #4110 - both models now work on OpenCode Go** [CLOSED]
    Reverted previous workarounds for MiniMax and Qwen models on OpenCode Go, simplifying the codebase as upstream compatibility improved.
    https://github.com/earendil-works/pi/pull/6146
*   **#6141: fix(context-canvas): normalize matrix-run AiCommand response parsing** [CLOSED]
    Fixed Zod validation errors in Context Matrix by normalizing JSON response structures for `AiCommand` payloads.
    https://github.com/earendil-works/pi/pull/6141
*   **#6078: feat(coding-agent): add get_entries and get_tree RPC commands** [CLOSED]
    Exposed new read-only RPC commands for session management, allowing extensions to retrieve session entries and tree structures.
    https://github.com/earendil-works/pi/pull/6078
*   **#6074: fix(coding-agent): avoid pre-prompt compaction continue** [CLOSED]
    Prevented incorrect agent continuation after prompt compaction when no messages were queued.
    https://github.com/earendil-works/pi/pull/6074
*   **#6136: fix(coding-agent): guard compaction continuation with hasQueuedMessages check** [CLOSED]
    Similar to #6074, this PR ensures `agent.continue()` is only called if there are actual queued messages, preventing empty loops.
    https://github.com/earendil-works/pi/pull/6136
*   **#6115: feat(coding-agent): add configurable chat padding** [OPEN]
    Proposed feature to allow users to remove chat padding, though maintainers express caution about TUI structure implications.
    https://github.com/earendil-works/pi/pull/6115
*   **#60: feat: Fuzzy search for files and folders** [CLOSED]
    Implemented fuzzy search capabilities for file navigation, offering an alternative to directory walking.
    https://github.com/earendil-works/pi/pull/60

### 5. Feature Request Trends
*   **Provider Extensibility:** Strong demand for easier integration of custom providers (e.g., Friendli, Charm Hyper) and payload transforms, as seen in issues #6042, #6091, and #6089.
*   **Context Matrix Evolution:** Continued focus on the Context Matrix feature, with requests for markdown storage projections (#6137) and template enhancements (#6134).
*   **UX Customization:** Users are requesting more control over the TUI layout, specifically regarding chat padding (#6115) and scroll behavior during streaming (#5825).

### 6. Developer Pain Points
*   **Platform-Specific Bugs:** Recurring issues with Windows path handling (#6104) and macOS bash version incompatibilities (#6135) suggest a need for more robust cross-platform abstraction layers.
*   **Streaming & TUI Stability:** Frequent reports of TUI freezing, flickering during simultaneous tool calls (#6131), and scroll-jumping (#5825) indicate instability in the rendering engine under heavy load.
*   **Token Efficiency:** Concerns over LLM cache inefficiencies (#6083) and unnecessary token burn during tool-heavy workflows are driving requests for better caching strategies and payload optimization.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-06-29

### 1. Today's Highlights
The Qwen Code team released **v0.19.3**, addressing critical caching issues and introducing a JSON fallback for `web_fetch`. The community is actively reporting significant regressions in v0.19.2, particularly regarding terminal rendering glitches, token management inaccuracies, and UI freezing during long conversations.

### 2. Releases
**v0.19.3**
*   **Core Fix:** Allows `web_fetch` to fall back to JSON parsing when standard HTML parsing fails, improving reliability for dynamic content extraction.
*   **Link:** [Release v0.19.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.3)

### 3. Hot Issues
*   **[Bug] Terminal Rendering Overwrites Last Line:** Users report that in Static mode, replies taller than the terminal height cause the final line to disappear immediately upon completion. *(#5800)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5800)
*   **[Bug] Zombie Agents Consuming Tokens:** Reports of "zombie" agents running for hours in the background without proper timeout or logging, leading to unexpected token consumption and bill shock. *(#5964)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5964)
*   **[Bug] Context Window Exceedance Error:** Users hitting 400 errors because the client fails to compress context before sending, exceeding model limits (e.g., 131k tokens) despite available compression tools. *(#5950)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5950)
*   **[Bug] TUI Scrolling/Screen Flickering:** On Linux, extensive TUI output causes the window to scroll back to the beginning repeatedly, disrupting the reading experience. *(#5971)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5971)
*   **[Bug] Auto-Entry into Plan Mode:** Switching from Yolo mode unexpectedly triggers Plan mode, causing failures when reading files from other projects or writing plan markdowns. *(#5970)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5970)
*   **[Bug] Anthropic Cache Misses:** Significant cost inflation due to prompt-cache misses on Anthropic endpoints, attributed to side-queries using different prefixes. *(#5942)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5942)
*   **[Bug] Chinese IME Unresponsive:** Intermittent UI bugs where the Chinese Input Method Editor becomes completely non-functional, allowing only Pinyin entry. *(#5966)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5966)
*   **[Bug] Subagent Token Counting Inaccuracy:** Subagent token usage reports numbers vastly higher than actual consumption, confusing users monitoring their quota. *(#5683)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5683)
*   **[Bug] Memory System Not Triggering:** Users note that the memory system often remains empty unless explicitly invoked via `/memory`, ignoring implicit memory cues. *(#5968)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5968)
*   **[Bug] Full Prompt Reprocessing:** Increased frequency of full prompt reprocessing by local LLMs (llama.cpp) during conversation continuations, impacting speed and context window efficiency. *(#5736)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5736)

### 4. Key PR Progress
*   **[UI] Token Display Accuracy:** Switches subagent token displays from cumulative API throughput to actual output tokens, aligning UI metrics with loading indicators. *(#5972)* [View PR](https://github.com/QwenLM/qwen-code/pull/5972)
*   **[Daemon] Resumable Session Streams:** Implements Last-Event-ID support for `/acp` streams, allowing reconnections to resume seamlessly without losing session state. *(#5852)* [View PR](https://github.com/QwenLM/qwen-code/pull/5852)
*   **[CLI] Self-Signed TLS Support:** Adds `--insecure` flag and env vars to bypass TLS verification, enabling usage with self-hosted endpoints using self-signed certificates. *(#5962)* [View PR](https://github.com/QwenLM/qwen-code/pull/5962)
*   **[UI] Character Width Fix:** Replaces ambiguous-width Unicode characters (✦) with consistent ones (◆) to fix TUI alignment issues, especially in East Asian locales. *(#5974)* [View PR](https://github.com/QwenLM/qwen-code/pull/5974)
*   **[Extensions] Project-Level Management:** Finalizes support for installing extensions at the project level, allowing scoped dependency management alongside user-level defaults. *(#4835)* [View PR](https://github.com/QwenLM/qwen-code/pull/4835)
*   **[UX] Safe Mode for Troubleshooting:** Introduces `--safe-mode` to disable all customizations (hooks, extensions, MCPs) for a clean baseline session during debugging. *(#4943)* [View PR](https://github.com/QwenLM/qwen-code/pull/4943)
*   **[Security] Secret Disclosure Prevention:** Adds mandates to prevent sensitive files (keys, `.env`) from being copied to public destinations during broad file operations. *(#5550)* [View PR](https://github.com/QwenLM/qwen-code/pull/5550)
*   **[CLI] Startup Input Preservation:** Captures TTY input during initialization and replays it once the UI mounts, preventing loss of early keystrokes. *(#3242)* [View PR](https://github.com/QwenLM/qwen-code/pull/3242)
*   **[Performance] UI Flicker Reduction:** Throttles stream updates and batches text rendering to significantly reduce visual flickering in the TUI. *(#5396)* [View PR](https://github.com/QwenLM/qwen-code/pull/5396)
*   **[Daemon] Workspace Remember API:** Adds a sessionless API for the daemon to enqueue memory tasks without creating visible user sessions, optimizing background processing. *(#5884)* [View PR](https://github.com/QwenLM/qwen-code/pull/5884)

### 5. Feature Request Trends
*   **Configurable Compaction Models:** Users request the ability to specify a separate, cheaper model for auto-compacting conversations to save expensive context windows. *(#5956)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5956)
*   **Inline Model Switching:** Desire for a single-command syntax to switch models and send a prompt simultaneously, reducing friction in multi-model workflows. *(#5967)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5967)
*   **Loop Task Persistence:** Request for a durable `.qwen/loop.md` file to manage long-running loop tasks, allowing mid-run edits without restarting. *(#5889)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5889)
*   **Voice Dictation Expansion:** Users want voice input (`/voice`) available in the Web Shell and Desktop UI, not just the terminal CLI. *(#5796)* [View Issue](https://github.com/QwenLM/qwen-code/issues/5796)
*   **Project-Local Todo Persistence:** Request to store TODO lists within the project directory (e.g., `.qwen/todos`) for Git synchronization and team collaboration. *(#5928)* [View PR](https://github.com/QwenLM/qwen-code/pull/5928)

### 6. Developer Pain Points
*   **Rendering Instability:** Recurring complaints about TUI glitches, including screen scrolling back to top, character misalignment, and UI freezes, particularly on Linux and Windows.
*   **Token Cost Opacity:** Users are frustrated by inaccurate token reporting (subagents and cache misses) and lack of granular control over context compression, leading to unexpected costs.
*   **Session Management Blind Spots:** The inability to reliably detect or kill "zombie" sessions and the inconsistency of the auto-memory feature create trust issues with the agent's autonomy.
*   **Input Method Compatibility:** Specific pain points for Chinese-speaking developers regarding IME integration and ambiguous character widths in the TUI.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-06-29
**Source:** github.com/Hmbown/DeepSeek-TUI (CodeWhale)

## 1. Today's Highlights
The CodeWhale project is aggressively refining its mode system and state management ahead of v0.8.67, notably deprecating the "Hollow Auto" mode and fixing critical session visibility issues post-migration from `.deepseek` to `.codewhale`. Significant engineering effort has also gone into stabilizing the TUI interface, resolving modal rendering bugs, improving startup performance, and addressing prompt cache regressions that impacted DeepSeek API costs.

## 2. Releases
**None.** No new official releases were published in the last 24 hours. Development activity is focused on the upcoming v0.8.67 candidate.

## 3. Hot Issues
*   **[BUG] Modal UI/UX Broken Across All Modals** [#3732](https://github.com/Hmbown/CodeWhale/issues/3732)
    *   *Why it matters:* Content bleed-through and truncated action rows affect every confirmation dialog.
    *   *Reaction:* Critical bug identified by maintainer; immediate fix prioritized for v0.8.67.
*   **[BUG] Plan Mode Write Tools Not Hard-Blocked** [#3734](https://github.com/Hmbown/CodeWhale/issues/3734)
    *   *Why it matters:* Security mismatch where the prompt claims writes are blocked, but the engine only blocks execution.
    *   *Reaction:* Flagged as a prompt/enforcement logic error requiring immediate correction.
*   **[BUG] Auto Mode is a Hollow Shell** [#3733](https://github.com/Hmbown/CodeWhale/issues/3733)
    *   *Why it matters:* "Auto" mode behaves identically to "Agent" mode, violating user expectations and documentation.
    *   *Reaction:* Maintainer decided to remove it from v0.8.66 and properly fix/cut it in v0.8.67.
*   **[ENHANCEMENT] Prompt-Cache Hit-Rate Regression** [#3738](https://github.com/Hmbown/CodeWhale/issues/3738)
    *   *Why it matters:* Users report increased DeepSeek costs due to cache misses caused by unstable prompt prefixes.
    *   *Reaction:* High priority for cost optimization; requires investigation into `turn_meta` blocks.
*   **[BUG] TUI Freezes Under Many Concurrent Sub-Agents** [#3728](https://github.com/Hmbown/CodeWhale/issues/3728)
    *   *Why it matters:* `RwLock` contention in the event receiver starves the render loop, causing total UI freeze.
    *   *Reaction:* Root cause persists on `main`; significant stability concern for heavy multi-agent workflows.
*   **[BUG] Windows WSL2 Installation Errors** [#1816](https://github.com/Hmbown/CodeWhale/issues/1816)
    *   *Why it matters:* Missing dependencies (`pkg-config`, `libdbus-1-dev`) block compilation on common dev environments.
    *   *Reaction:* Closed after documentation update; community credit given to reporter.
*   **[BUG] Version Command Flagged as Destructive** [#3730](https://github.com/Hmbown/CodeWhale/issues/3730)
    *   *Why it matters:* Read-only commands like `--version` incorrectly trigger approval prompts in Auto mode.
    *   *Reaction:* Highlighted inconsistency between mode labels and actual permission logic.
*   **[BUG] DSML Content Interrupts Tasks on Windows** [#3717](https://github.com/Hmbown/CodeWhale/issues/3717)
    *   *Why it matters:* Specific parsing/rendering issue halts task execution when DSML tags appear.
    *   *Reaction:* Isolated to Windows builds; requires regex or parser adjustment.
*   **[ENHANCEMENT] Next-Wave Localization (KR, ES, PT-BR)** [#3093](https://github.com/Hmbown/CodeWhale/issues/3093)
    *   *Why it matters:* Strategic expansion of UI languages to improve global accessibility.
    *   *Reaction:* Planned for v0.8.69 roadmap.
*   **[ENHANCEMENT] Neuralwatt Provider Support** [#3751](https://github.com/Hmbown/CodeWhale/issues/3751)
    *   *Why it matters:* Demand for supporting GLM 5.2 via Neuralwatt's non-token pricing model.
    *   *Reaction:* Feature request open; highlights market interest in alternative pricing models.

## 4. Key PR Progress
*   **#3756 [FIX] Default Interactive Agent Shell to Approval-Gated**
    *   Ensures shell tools require approval by default in interactive sessions, enhancing security posture.
*   **#3754 [FIX] Surface Legacy State Migrations**
    *   Adds visible one-time notices when migrating from `.deepseek` to `.codewhale`, preventing user confusion.
*   **#3752 [FIX] Restore Legacy Session Visibility**
    *   Fixes #3724 by copying missing sessions from the legacy directory structure during upgrade.
*   **#3750 [FIX] Clear Modal Backdrop Centrally**
    *   Resolves #3732 by painting an opaque backdrop from `ViewStack`, stopping content bleed-through.
*   **#3749 [FEAT] Add Sakana AI Fugu Provider**
    *   Integrates Sakana AI as a first-class OpenAI-compatible provider with dedicated env var support.
*   **#3747 [FIX] Label Readonly Shell Approvals Calmly**
    *   Improves UX by clearly distinguishing read-only shell commands from destructive ones in approval modals.
*   **#3745 [FIX] Show Cache Telemetry Route**
    *   Addresses #3738 by adding provider/model routing info to `/cache` telemetry to diagnose cache misses.
*   **#3743 [FIX] Show Routes in Cache Telemetry**
    *   Complements #3745 by ensuring failed dispatches don't leave stale telemetry, aiding cost debugging.
*   **#3742 [FIX] Split Trust from Approval Bypass**
    *   Refines permission logic to ensure workspace trust doesn't inadvertently bypass standard tool approvals.
*   **#3739 [FIX] Defer Hollow Auto Mode**
    *   Hides the non-functional "Auto" mode from UI elements until it can be properly implemented in v0.8.67.

## 5. Feature Request Trends
*   **Provider Expansion:** Strong demand for integrating third-party providers like Neuralwatt (#3751) and Sakana AI (#3748/#3749), driven by unique pricing models (e.g., non-token billing) and specific model availability (GLM 5.2, Fugu).
*   **Localization & Global Reach:** Continued push for broader language support, specifically targeting Korean, Spanish, and Brazilian Portuguese for v0.8.69 (#3093), alongside localizing setup wizards (#3759).
*   **Permission Granularity:** Users and maintainers are seeking simplified permission models, collapsing four overlapping knobs into two clearer controls (#3736) to reduce configuration complexity.

## 6. Developer Pain Points
*   **State Migration Friction:** The transition from `.deepseek` to `.codewhale` has caused significant user distress regarding "lost" sessions and silent data moves (#3724, #3726, #3727), necessitating robust diagnostic tools (`codewhale doctor`) and clear user notifications.
*   **Cost Volatility due to Caching:** Users are sensitive to API costs, and recent changes have inadvertently reduced prompt cache hit rates, leading to higher DeepSeek bills (#3738). Debugging this requires better telemetry visibility.
*   **UI Stability & Performance:** Concurrent sub-agent execution causing TUI freezes (#3728) and slow startup times (#3757) are major friction points for power users relying on heavy multi-agent workflows.
*   **Mode Logic Inconsistencies:** The "Auto" mode being functionally identical to "Agent" while claiming different behaviors (#3733, #3730) has eroded trust in the mode definitions, requiring a temporary removal and rigorous re-evaluation of permission logic.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*