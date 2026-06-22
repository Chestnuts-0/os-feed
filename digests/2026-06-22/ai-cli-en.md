# AI CLI Tools Community Digest 2026-06-22

> Generated: 2026-06-22 07:49 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Report: 2026-06-22

## 1. Ecosystem Overview
The AI CLI landscape in mid-2026 is characterized by a shift from experimental utility to enterprise-grade stability, with a heavy emphasis on resource management, cost transparency, and security hardening. Major players like OpenAI and Anthropic are grappling with significant technical debt related to context window defaults and memory leaks, while smaller, open-source alternatives like OpenCode and Pi are gaining traction through superior local integration and granular user control. The market is bifurcating between "heavyweight" cloud-centric tools struggling with API instability and "agile" local-first tools focusing on robust agent orchestration and offline capabilities.

## 2. Activity Comparison

| Tool | Open Issues (High Engagement) | Key PRs (Last 24h) | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 2 | None |
| **OpenAI Codex** | 10 | 10 | Alpha (Rust v0.142.0) |
| **Gemini CLI** | 10 | 10 | None |
| **GitHub Copilot CLI** | 10 | 1 | None |
| **Kimi Code CLI** | 3 | 0 | None |
| **OpenCode** | 10 | 10 | None |
| **Pi** | 10 | 10 | None |
| **Qwen Code** | 10 | 10 | **v0.18.5** |
| **DeepSeek TUI** | 10 | 10 | In Progress (v0.8.64) |

*Note: "Open Issues" refers to the number of "Hot Issues" tracked in the provided digests. PR counts reflect significant engineering activity.*

## 3. Shared Feature Directions

*   **Context Window & Cost Transparency:**
    *   **Tools:** Claude Code, OpenAI Codex, Pi, OpenCode.
    *   **Need:** Users are demanding granular control over context defaults (especially 1M+ windows) and real-time visibility into token/billing consumption. There is widespread frustration with opaque billing spikes and "silent" context inflation.
*   **Robust Session Management & Resilience:**
    *   **Tools:** Gemini CLI, Pi, DeepSeek TUI, OpenAI Codex.
    *   **Need:** Reliable recovery from crashes, disk errors, and network timeouts. Features like "opt-in" auto-compaction, session persistence across restarts, and handling of corrupt metadata are critical for long-running autonomous workflows.
*   **Security & Permission Granularity:**
    *   **Tools:** Claude Code, OpenCode, DeepSeek TUI, Pi.
    *   **Need:** Stricter sandboxing, explicit consent for background processes (e.g., MCP injection), and prevention of secret leakage in logs. The trend is moving towards "human-in-the-loop" approvals for sensitive operations.
*   **MCP (Model Context Protocol) Integration:**
    *   **Tools:** Claude Code, Gemini CLI, OpenCode, Qwen Code.
    *   **Need:** Stable, configurable MCP server connections. Issues range from auto-injection bugs (Claude) to missing support in specific modes (Kimi/Gemini) and the need for OAuth-based remote authentication (OpenCode).

## 4. Differentiation Analysis

*   **Cloud Giants (Claude Code, OpenAI Codex, GitHub Copilot):**
    *   **Focus:** Scaling enterprise features, integrating with broader ecosystems (VS Code, Web).
    *   **Pain Points:** Struggling with basic stability (parsing errors, OOM crashes), billing transparency, and platform-specific regressions (Windows ARM, Wayland). Their approach is often "push-heavy," introducing features like auto-injected MCPs that users resist.
*   **Local-First / Open Source (OpenCode, Pi, DeepSeek TUI):**
    *   **Focus:** User control, privacy, and deep local integration (Ollama, LM Studio).
    *   **Strengths:** Better handling of edge cases (offline modes, local model aliases), more transparent cost models (or free), and responsive community-driven fixes. Pi and OpenCode are winning on "session isolation" and "local LLM flexibility."
*   **Agile Innovators (Qwen Code, Gemini CLI):**
    *   **Focus:** Multimodal capabilities (Voice, Video) and rapid protocol adoption.
    *   **Strengths:** Qwen Code is leading in voice dictation and dynamic workflows. Gemini CLI is focusing on core agent reliability and security patches. Both are differentiating via specific feature sets rather than just general coding assistance.

## 5. Community Momentum & Maturity

*   **High Momentum / Rapid Iteration:**
    *   **OpenAI Codex:** Despite stability issues, the volume of PRs (10+ in 24h) and high issue engagement (600+ comments on billing) indicates a massive, active user base pushing for immediate fixes.
    *   **Qwen Code:** Released a minor version with significant feature additions (Voice, Dynamic Workflows), showing strong engineering velocity.
*   **Maturing / Stabilizing:**
    *   **OpenCode:** Focus on security (OAuth) and enterprise scalability (PostgreSQL backend) suggests moving from hobbyist tool to production-ready platform.
    *   **DeepSeek TUI:** The v0.8.64 release cycle, with a focus on security hardening and CI/CD stability, indicates a maturation phase where reliability is prioritized over new features.
*   **Frustrated / Critical Juncture:**
    *   **Claude Code:** High engagement on "blocking" bugs (OOM, parsing failures) suggests a crisis of confidence among power users who rely on it for automation.
    *   **GitHub Copilot CLI:** Lower issue volume but high severity (fatal crashes, doc inaccuracies) points to a niche but critical user base facing stability cliffs.

## 6. Trend Signals

*   **The End of "Black Box" Agents:** Users are rejecting tools that auto-modify their environment (e.g., Claude’s auto-MCP injection). The trend is toward **explicit, opt-in configurations** and **transparent state management**.
*   **Resource Awareness as a Feature:** Memory leaks, SSD wear (SQLite logs), and CPU usage are becoming primary differentiators. Tools that offer **efficient resource usage** (e.g., OpenAI’s terminal observation cleanup, Pi’s secret-disclosure guards) will gain enterprise trust.
*   **Multimodal CLI Convergence:** Voice input (Qwen), video/audio support (OpenCode), and browser automation (DeepSeek) are expanding the CLI from text-only to **full sensory integration**, driven by developer demand for richer interaction modes.
*   **Local-First Hybridity:** The ability to seamlessly switch between cloud models and local LLMs (Pi, OpenCode) is no longer a niche feature but a **standard expectation** for privacy-conscious and cost-aware developers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-06-22
**Source:** `anthropics/skills` Repository Analysis

## 1. Top Skills Ranking (Most Discussed PRs)

Based on comment volume and community engagement, the following skills represent the highest interest areas. Note: While explicit comment counts are listed as `undefined` in the raw PR metadata, these items were selected based on their position in the "sorted by comments" list and significant issue linkage (e.g., Issue #556 linking to PR #1298).

1.  **Frontend-Design Skill Improvement**
    *   **Functionality:** Enhances clarity and actionability for generating frontend code, ensuring instructions are executable within a single conversation.
    *   **Discussion Highlights:** Focus on reducing hallucination in UI generation and improving internal coherence of instructions.
    *   **Status:** [Open](https://github.com/anthropics/skills/pull/210)
    *   **Author:** @justinwetch

2.  **ServiceNow Platform Skill**
    *   **Functionality:** Comprehensive assistant for the ServiceNow ecosystem, covering ITSM, ITOM, SecOps, FSM, and IntegrationHub.
    *   **Discussion Highlights:** Broad coverage of enterprise service management workflows; high utility for IT professionals.
    *   **Status:** [Open](https://github.com/anthropics/skills/pull/568)
    *   **Author:** @Vanka07

3.  **AURELION Skill Suite**
    *   **Functionality:** A structured cognitive framework including kernel, advisor, agent, and memory skills for professional knowledge management.
    *   **Discussion Highlights:** Introduces "structured thinking templates" and persistent memory patterns for AI agents.
    *   **Status:** [Open](https://github.com/anthropics/skills/pull/444)
    *   **Author:** @Chase-Key

4.  **PDF Skill Case-Sensitivity Fix**
    *   **Functionality:** Corrects file references in `SKILL.md` to match lowercase filenames on case-sensitive systems.
    *   **Discussion Highlights:** Critical bug fix preventing PDF skills from failing on Linux/macOS environments.
    *   **Status:** [Open](https://github.com/anthropics/skills/pull/538)
    *   **Author:** @Lubrsy706

5.  **SAP-RPT-1-OSS Predictor Skill**
    *   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics on business data.
    *   **Discussion Highlights:** Bridges enterprise data science with Claude Code workflows using Apache 2.0 licensed models.
    *   **Status:** [Open](https://github.com/anthropics/skills/pull/181)
    *   **Author:** @amitlals

6.  **Testing Patterns Skill**
    *   **Functionality:** Covers full testing stacks including unit testing (AAA pattern), React component testing (Testing Library), and testing philosophy.
    *   **Discussion Highlights:** Addresses the need for standardized, high-quality test generation strategies.
    *   **Status:** [Open](https://github.com/anthropics/skills/pull/723)
    *   **Author:** @4444J99

7.  **Document Typography Skill**
    *   **Functionality:** Prevents typographic errors in AI-generated documents, such as orphans, widows, and numbering misalignment.
    *   **Discussion Highlights:** Targets a niche but high-friction pain point in professional document generation.
    *   **Status:** [Open](https://github.com/anthropics/skills/pull/514)
    *   **Author:** @PGTBoos

8.  **ODT Skill**
    *   **Functionality:** Creates, fills, and parses OpenDocument Format files (.odt, .ods), supporting LibreOffice standards.
    *   **Discussion Highlights:** Expands support beyond Microsoft Office formats to open-source document standards.
    *   **Status:** [Open](https://github.com/anthropics/skills/pull/486)
    *   **Author:** @GitHubNewbie0

## 2. Community Demand Trends

Analysis of top Issues reveals three primary vectors of community demand:

*   **Robust Evaluation & Tooling:** There is significant frustration with the `skill-creator` evaluation pipeline. Issues #556, #1169, and #1298 highlight critical bugs in `run_eval.py` where skills fail to trigger during evaluation (0% recall). The community demands reliable tools to test and optimize skill descriptions before submission.
*   **Enterprise & Platform Specificity:** Users are actively requesting deep integration with major enterprise platforms. Beyond the ServiceNow and SAP skills mentioned above, Issue #1175 shows demand for secure handling of sensitive corporate data (SharePoint Online) within skill contexts.
*   **Cross-Platform Compatibility:** Issues #1099, #1050, and #1061 indicate strong demand for Windows compatibility in the skill-creator scripts. The community expects the tooling to work seamlessly across OS environments, not just Unix-like systems.
*   **Security & Trust Boundaries:** Issue #492 raises concerns about namespace impersonation, indicating a need for clearer verification mechanisms for community-contributed skills.

## 3. High-Potential Pending Skills

These PRs have active maintenance or significant community visibility and are likely candidates for future inclusion or refinement:

*   **Skill Quality & Security Analyzers**
    *   **Summary:** Adds meta-skills to evaluate other skills for structure, documentation, and security risks.
    *   **Potential:** Addresses the quality control bottleneck identified in Issues #556/#1298.
    *   **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)
*   **Contribution Guidelines Overhaul**
    *   **Summary:** Adds `CONTRIBUTING.md` to address community health gaps and lower barriers to entry.
    *   **Potential:** Essential for scaling the ecosystem and reducing duplicate/low-quality submissions.
    *   **Link:** [PR #509](https://github.com/anthropics/skills/pull/509)
*   **Compact Memory Skill**
    *   **Summary:** Proposes a symbolic notation for compact agent state to reduce context window usage in long-running agents.
    *   **Potential:** Directly addresses performance and cost concerns in complex agent workflows.
    *   **Link:** [Issue #1329](https://github.com/anthropics/skills/issues/1329)

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **reliable, cross-platform evaluation tooling** and **enterprise-grade security/compliance patterns**, as evidenced by the high volume of bug reports surrounding the `skill-creator` pipeline and requests for secure handling of corporate data sources.

---

# Claude Code Community Digest: 2026-06-22

## 1. Today's Highlights
Significant community attention is focused on critical parsing errors interrupting tool calls (#63875) and memory leaks caused by auto-injected MCP servers on constrained systems (#20412). Additionally, users are reporting widespread context-window billing issues and API instability, particularly regarding 1M-context session handling and transient 529 errors.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
These issues have generated the highest community engagement and concern.

1.  **[Bug] Model tool call parsing failure** (#63875)
    *   **Why it matters:** Intermitent "tool call could not be parsed" errors abort ongoing sessions, breaking automation workflows.
    *   **Reaction:** 106 👍, 67 comments. High frustration due to lack of self-correction.
2.  **[Bug] Silent MCP injection causing OOM** (#20412)
    *   **Why it matters:** Claude Code 2.1.x automatically syncs MCP servers from the web account without opt-in, leading to Out-Of-Memory crashes on Linux/resource-constrained setups.
    *   **Reaction:** 136 👍, 38 comments. Strong pushback against non-consensual background services.
3.  **[Bug] Default 1M context on Pro plan** (#62063)
    *   **Why it matters:** Fresh sessions default to 1M context, incurring higher costs or quota exhaustion for users on the Pro plan who expect standard context windows.
    *   **Reaction:** 42 👍, 61 comments.
4.  **[Bug] Sandbox `autoAllowBashIfSandboxed` bypass** (#43713)
    *   **Why it matters:** Security/UX friction: commands with shell expansions trigger permission prompts despite `autoAllow` settings, breaking seamless scripted operations.
    *   **Reaction:** 63 👍, 32 comments.
5.  **[Bug] Advisor API timeout/no response** (#69238)
    *   **Why it matters:** The "Advisor" feature hangs with "No response from API," stalling sessions using Sonnet as a base.
    *   **Reaction:** 23 👍, 18 comments.
6.  **[Bug] Cowork Google Drive MCP visibility** (#53442)
    *   **Why it matters:** Users cannot access content in Workspace Shared Drives via the Cowork integration, limiting utility for enterprise teams.
    *   **Reaction:** 21 👍, 19 comments.
7.  **[Bug] Persistent HTTP 429 on auto-mode classifier** (#60438)
    *   **Why it matters:** Account-side configuration triggers rate-limiting loops (429) on the internal classifier, rendering auto-mode unusable.
    *   **Reaction:** 2 👍, 13 comments.
8.  **[Bug] Sonnet subagent 1M context credit error** (#68727)
    *   **Why it matters:** Subagents dispatched from 1M context sessions fail with "Extra usage is required," indicating a billing/quota propagation bug.
    *   **Reaction:** 0 👍, 7 comments.
9.  **[Enhancement] Disable Cowork VM Service on Windows** (#57371)
    *   **Why it matters:** The `CoworkVMService` runs in the background by default; Windows users want an opt-out to reduce resource usage.
    *   **Reaction:** 23 👍, 7 comments.
10. **[Bug] API Service Unavailable** (#69942)
    *   **Why it matters:** Reports of general API downtime affecting VS Code and terminal users.
    *   **Reaction:** 11 👍, 6 comments.

## 4. Key PR Progress
Only 2 pull requests were updated in the last 24 hours.

1.  **fix: print error message before silent exit in edit-issue-labels.sh** (#69916)
    *   **Summary:** Improves debugging for the internal triage workflow by ensuring exit codes are logged rather than failing silently.
    *   **Link:** [PR #69916](https://github.com/anthropics/claude-code/pull/69916)
2.  **feat: add shell completions (bash, zsh, fish)** (#4943)
    *   **Summary:** Adds static completion scripts for major shells to improve CLI usability.
    *   **Link:** [PR #4943](https://github.com/anthropics/claude-code/pull/4943)

## 5. Feature Request Trends
*   **Resource Management & GC:** Multiple issues highlight the need for better memory management, including compaction of JSONL session logs (#42810, #55934) and the ability to disable background services like Cowork (#57371).
*   **Cross-Session State:** Users are requesting shared state across different Claude surfaces (Web, Desktop, Code) to maintain continuity in long conversations (#69903).
*   **Customization:** Requests for customizable syntax highlighting colors (#48636) persist, indicating a desire for deeper TUI/UI personalization.

## 6. Developer Pain Points
*   **Context Window Costs & Defaults:** There is significant confusion and frustration regarding 1M context window defaults, associated credit requirements (#62063, #68727, #69984), and billing transparency.
*   **Session Stability & Parsing:** Frequent session interruptions due to tool-call parsing errors (#63875) and resume/fork context inflation (#69568) disrupt autonomous coding workflows.
*   **Windows-Specific Instabilities:** A cluster of issues relates to Windows environment problems, including case-sensitive drive letter mismatches (#62288), orphaned job objects preventing launch (#53247), and tool-I/O corruption (#69994).
*   **Unwanted Background Processes:** The auto-injection of MCP servers (#20412) and the inability to easily disable the Cowork VM service (#57371) are viewed as intrusive and resource-heavy.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest | 2026-06-22

### 1. Today's Highlights
The Codex development team is aggressively refactoring the core session protocol to improve stability, idempotency, and resource management, with significant focus on fixing terminal observation handling and cell lifecycle management. Meanwhile, the community is experiencing severe friction regarding token consumption rates and unexpected billing spikes, particularly affecting Plus and Business subscribers.

### 2. Releases
*   **rust-v0.142.0-alpha.10**: An alpha release for the Rust bindings, likely addressing underlying protocol or sandboxing changes discussed in recent PRs.
    *   [View Release](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.10)

### 3. Hot Issues
These issues reflect the highest community engagement and critical bugs reported in the last 24 hours.

1.  **[Bug] Burning tokens very fast** (#14593)
    *   *Why it matters:* Users report rapid token drain on Business plans, indicating potential inefficiencies in context handling or model behavior.
    *   *Reaction:* 619 comments, 271 👍
    *   [Link](https://github.com/openai/codex/issues/14593)

2.  **[Bug] Rate-limit cost per token jumped ~10-20x** (#28879)
    *   *Why it matters:* A drastic increase in rate-limit consumption for `gpt-5.5` on Plus plans is draining budgets significantly faster than previous weeks.
    *   *Reaction:* 105 comments, 203 👍
    *   [Link](https://github.com/openai/codex/issues/28879)

3.  **[Enhancement] Codex Remote Control** (#9224)
    *   *Why it matters:* High demand for mobile-controlled CLI execution, allowing users to manage desktop sessions via phone.
    *   *Reaction:* 56 comments, 405 👍
    *   [Link](https://github.com/openai/codex/issues/9224)

4.  **[Bug] Verification of inaccessible legacy phone number** (#25749)
    *   *Why it matters:* Auth blockers for users with outdated phone numbers, preventing access despite valid OAuth/MFA.
    *   *Reaction:* 59 comments, 35 👍
    *   [Link](https://github.com/openai/codex/issues/25749)

5.  **[Bug] Sandbox missing field `sandboxPolicy`** (#29205)
    *   *Why it matters:* Critical failure in desktop browser/annotation tools due to configuration schema mismatches.
    *   *Reaction:* 15 comments, 0 👍
    *   [Link](https://github.com/openai/codex/issues/29205)

6.  **[Bug] Windows sandbox regression (os error 740)** (#26158)
    *   *Why it matters:* CLI sandbox execution broken on Windows in newer versions; users forced to rollback to v0.132.0.
    *   *Reaction:* 15 comments, 5 👍
    *   [Link](https://github.com/openai/codex/issues/26158)

7.  **[Bug] Crashpad pending dumps growing without limit** (#25921)
    *   *Why it matters:* macOS app leaks ~5GB/day in crash dump files, threatening disk space and SSD endurance.
    *   *Reaction:* 13 comments, 3 👍
    *   [Link](https://github.com/openai/codex/issues/25921)

8.  **[Bug] SQLite feedback logs consuming SSD endurance** (#28224)
    *   *Why it matters:* Local logging writes excessive data (~640 TB/year projected), posing hardware risks.
    *   *Reaction:* 11 comments, 34 👍
    *   [Link](https://github.com/openai/codex/issues/28224)

9.  **[Bug] macOS app leaves code_sign_clone directories** (#25667)
    *   *Why it matters:* Resource leak issue on macOS, accumulating ~965MB per launch.
    *   *Reaction:* 8 comments, 14 👍
    *   [Link](https://github.com/openai/codex/issues/25667)

10. **[Bug] Business Codex unusable (401 errors)** (#28672)
    *   *Why it matters:* Enterprise users facing repeated auth failures and forced phone verification loops.
    *   *Reaction:* 5 comments, 0 👍
    *   [Link](https://github.com/openai/codex/issues/28672)

### 4. Key PR Progress
The engineering team is focusing heavily on the "code-mode" protocol stability and session management.

1.  **code-mode: use client cell ids and linear observations** (#29398)
    *   Refines identity tracking for cells to prevent ambiguity and reduce memory overhead by dropping unnecessary idempotency keys.
    *   [Link](https://github.com/openai/codex/pull/29398)

2.  **code-mode: release acknowledged terminal observations** (#29401)
    *   Fixes memory retention issues by explicitly releasing terminal observations once acknowledged, rather than keeping them until session end.
    *   [Link](https://github.com/openai/codex/pull/29401)

3.  **code-mode: clean up terminal cell dispatch gates** (#29310)
    *   Improves cleanup logic for background completions to prevent allocated gate leaks.
    *   [Link](https://github.com/openai/codex/pull/29310)

4.  **code-mode: expose transport-neutral session runtime** (#29292)
    *   Enables hosting the session runtime outside the in-process protocol service, facilitating better adapter coverage and preventing silent drift.
    *   [Link](https://github.com/openai/codex/pull/29292)

5.  **Persist session IDs across thread resume** (#29327)
    *   Ensures subagents maintain consistent session identity across cold resumes, preventing fragmented agent trees.
    *   [Link](https://github.com/openai/codex/pull/29327)

6.  **code-mode: make create and observe retry-safe** (#29397)
    *   Adds idempotency to IPC boundaries, ensuring lost responses don't create duplicate cells or consume unobserved output.
    *   [Link](https://github.com/openai/codex/pull/29397)

7.  **code-mode: make cell creation idempotent** (#29403)
    *   Introduces stable request identities for cell creation to linearize concurrent requests and avoid orphaned cells.
    *   [Link](https://github.com/openai/codex/pull/29403)

8.  **code-mode: type cells by execution capability** (#29400)
    *   Enforces distinct lifecycle contracts for continuing vs. pause-at-frontier executions to prevent runtime errors from mixed states.
    *   [Link](https://github.com/openai/codex/pull/29400)

9.  **Apply sandbox intent inside remote exec servers** (#29113)
    *   Completes the split between orchestrator and executor by having executors interpret portable sandbox intents using local OS implementations.
    *   [Link](https://github.com/openai/codex/pull/29113)

10. **[config] Activate generic managed-layer precedence** (#28979)
    *   Implements new precedence rules for managed configurations, preferring system overlays over enterprise fallbacks.
    *   [Link](https://github.com/openai/codex/pull/28979)

### 5. Feature Request Trends
*   **Cost Transparency & Control:** There is a strong demand for visibility into token costs. Users are requesting the return of the `/cost` command (#20087) and better tools to monitor rate-limit consumption (#28879).
*   **Mobile/Remote Integration:** The desire to control desktop CLI instances from mobile devices (#9224) remains a top feature request.
*   **Project Management:** Users want native project management within the Desktop app, specifically the ability to register folders and move threads between projects (#25498).
*   **UI/UX Improvements:** Requests for better visual distinction between user/AI output in TUI (#8782) and customizable installation locations on Windows (#21074).

### 6. Developer Pain Points
*   **Unexpected Billing Spikes:** The most urgent pain point is the perceived "burning" of tokens and rate limits, with reports of 10-20x increases in cost per token for specific models like `gpt-5.5` (#28879, #14593).
*   **Resource Leaks:** Multiple reports highlight significant resource exhaustion on local machines, including massive SSD wear from SQLite logs (#28224), disk space leaks from Crashpad dumps (#25921), and code signing artifacts (#25667).
*   **Platform-Specific Instability:** Windows users are facing sandbox failures (#26158, #29089, #29115) and stuck processes (#29408), while macOS users encounter bridge connectivity issues (#29389) and dock tile crashes (#28237).
*   **Authentication Friction:** Legacy phone number requirements are blocking access for users who have valid OAuth/MFA but no longer have access to the registered number (#25749, #28672).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-06-22

### 1. Today's Highlights
Significant security and stability patches landed today, including critical fixes for workspace trust disclosure vulnerabilities and session resume logic errors. Concurrently, core agent reliability is under scrutiny, with multiple high-priority reports detailing subagent hangs, browser automation failures on Wayland, and persistent shell execution loops.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **[Bug] Generalist agent hangs** (#21409)
    *   *Why it matters:* The main agent enters an infinite loop when deferring to sub-agents, rendering basic tasks like folder creation impossible.
    *   *Community Reaction:* High engagement (8 👍); users report having to manually disable sub-agents to regain functionality.
*   **[Bug] ACP: Execute tool call title field contains conversational text** (#23018)
    *   *Why it matters:* In JetBrains IDEs, permission prompts for terminal commands are cluttered with irrelevant conversational filler, confusing users during approval.
    *   *Community Reaction:* Noted as a major component bug affecting user experience in non-interactive flows.
*   **[Bug] Subagent recovery after MAX_TURNS is reported as GOAL success** (#22323)
    *   *Why it matters:* Subagents incorrectly signal success when they hit turn limits, hiding interruptions and leading to incomplete analysis.
    *   *Community Reaction:* Critical for debugging complex multi-step investigations.
*   **[Bug] Gemini does not use skills and sub-agents enough** (#21968)
    *   *Why it matters:* Anecdotal evidence suggests the model ignores custom skills (e.g., Gradle, Git) unless explicitly prompted, reducing automation efficacy.
    *   *Community Reaction:* Users feel the agent is not leveraging configured toolsets effectively.
*   **[Bug] Shell command execution gets stuck with "Waiting input"** (#25166)
    *   *Why it matters:* Simple CLI commands leave the shell in a hanging state, requiring manual cancellation.
    *   *Community Reaction:* Frustrating for users relying on automated shell interactions.
*   **[Bug] GeminiCLI.com Feedback: Login problem** (#28072)
    *   *Why it matters:* Authentication flow fails with "Invalid response body" when exchanging OAuth codes, blocking new user onboarding.
    *   *Community Reaction:* Immediate blocker for getting started; 1 👍 indicates shared frustration.
*   **[Bug] browser subagent fails in wayland** (#21983)
    *   *Why it matters:* The browser agent crashes on Wayland compositors, limiting usability for Linux users on modern desktop environments.
    *   *Community Reaction:* Specific but impactful for the Linux dev community.
*   **[Bug] Auto Memory logging and redaction issues** (#26525, #26522)
    *   *Why it matters:* Security concerns regarding premature secret exposure in logs and infinite retries on low-signal memory sessions.
    *   *Community Reaction:* Maintainer-focused issues highlighting backend stability and security hygiene.
*   **[Bug] Browser Agent ignores settings.json overrides** (#22267)
    *   *Why it matters:* Configuration files are not respected by the browser agent, forcing users to rely on hardcoded defaults.
    *   *Community Reaction:* Reduces flexibility for advanced users managing multiple projects.
*   **[Bug] (Sub)agents running without permission since v0.33.0** (#22093)
    *   *Why it matters:* A regression where subagents activate despite being disabled in config, violating user intent and potentially increasing token costs.
    *   *Community Reaction:* Significant regression report from a user who specifically disabled this feature.

### 4. Key PR Progress
*   **[Security] Trust dialog discloses the hook shape that never runs** (#27915)
    *   *Fix:* Corrects a security vulnerability where the workspace trust dialog displayed inverse hook information, failing to show commands that actually execute on trust.
*   **[Core] Validate GCP project ID format** (#27916)
    *   *Fix:* Prevents `auto-memory` from storing invalid GCP display names/aliases, resolving 403 and `CONSUMER_INVALID` errors in subsequent sessions.
*   **[Core] Bound web search tool latency** (#27910)
    *   *Fix:* Adds a 120-second timeout to `google_web_search` to prevent the agent from hanging indefinitely if the search provider is slow.
*   **[Agent] Don't offer to resume a session that wasn't saved** (#27914)
    *   *Fix:* Addresses an UX bug where users were prompted to resume sessions that failed to save due to disk space (`ENOSPC`) errors.
*   **[Agent] Recover sessions with corrupt or missing metadata** (#27912)
    *   *Fix:* Improves robustness of the JSONL reader to handle missing `projectHash` or corrupted metadata lines, preventing session loading failures.
*   **[Agent] Keep recreated session files loadable after deletion** (#27905)
    *   *Fix:* Guards against race conditions where manual file deletion or cleanup interferes with active session appending.
*   **[Agent] Load JSONL sessions when projectHash is missing** (#27904)
    *   *Fix:* Resolves parsing errors for legacy or incomplete session records by improving fallback logic.
*   **[Core] Skip background session cleanup when listing sessions** (#27906)
    *   *Fix:* Prevents race conditions between background cleanup tasks and session listing commands that could cause file-not-found errors.
*   **[Core] Make useLogger follow active session ID after /clear** (#27907)
    *   *Fix:* Ensures logging persists correctly to the new session after a `/clear` command, fixing logger state desynchronization.
*   **[Extensions] MCP client implements elicitation** (#28074)
    *   *Feature:* Adds support for MCP elicitation (form and URL modes), enhancing interoperability with MCP servers that require user input clarification.

### 5. Feature Request Trends
*   **Robust Session Management:** Strong demand for resilient session handling, specifically recovering from disk errors, corruption, and race conditions during save/load cycles.
*   **Enhanced MCP Interoperability:** Users are requesting deeper MCP compliance, particularly around elicitation capabilities to allow more interactive tool workflows.
*   **AST-Aware Code Navigation:** Ongoing interest in using Abstract Syntax Tree (AST) tools for more precise file reading and codebase mapping to reduce token waste and improve agent accuracy.
*   **Subagent Visibility and Control:** Requests for better transparency into subagent trajectories (shareable via `/chat share`) and stricter enforcement of user-configured subagent permissions.

### 6. Developer Pain Points
*   **Agent Reliability & Hangs:** The most frequent complaint is the agent getting stuck in infinite loops, particularly involving subagents, web search timeouts, and shell command executions.
*   **Configuration Drift:** Users report that settings in `settings.json` are often ignored by specific agents (e.g., Browser Agent) or that subagents activate despite being disabled.
*   **Security Transparency:** Concerns persist around the workspace trust dialog providing misleading information about executed hooks and the potential for secret leakage in Auto Memory logs.
*   **Platform-Specific Instability:** Issues with Wayland support for browser agents and terminal flickering/resizing performance highlight gaps in cross-platform stability.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-22

### 1. Today's Highlights
The community is currently focused on significant stability regressions on Windows ARM64, where users report fatal application exits under memory pressure. Simultaneously, there is growing friction regarding documentation accuracy for sandbox permissions and inconsistencies in quota billing calculations for premium models.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Hot Issues
*Note: While the dataset contains fewer than 10 unique *open* issues with substantive discussion, the following highlights the most critical open discussions and recent closures.*

1.  **[Fatal Crash] copilot.exe fatal-aborts under load (Windows ARM64)**
    *   **Link:** [#3687](https://github.com/github/copilot-cli/issues/3687)
    *   **Significance:** Critical stability issue causing hard crashes via `BEX64` during concurrent session starts.
    *   **Reaction:** High concern due to reproducibility across versions 1.0.57 and 1.0.60; 1 upvote indicates early validation.

2.  **[Feature] Use sparse checkout for plugin installs**
    *   **Link:** [#2399](https://github.com/github/copilot-cli/issues/2399)
    *   **Significance:** Addresses excessive disk I/O and storage waste by fetching only necessary plugin assets instead of full repositories.
    *   **Reaction:** Recently updated by author; represents a long-standing performance optimization request.

3.  **[Bug] Docs present local sandbox capabilities as working, but they do not**
    *   **Link:** [#3861](https://github.com/github/copilot-cli/issues/3861)
    *   **Significance:** Misleading documentation regarding per-host network filtering (`allowedHosts`/`blockedHosts`) creates security risks and confusion.
    *   **Reaction:** Highlights a trust gap between official docs and actual behavior.

4.  **[Bug] VS Code agent `preToolUse` agent hook denial does not work**
    *   **Link:** [#3874](https://github.com/github/copilot-cli/issues/3874)
    *   **Significance:** Security control failure where configured hooks intended to deny specific commands are being ignored.
    *   **Reaction:** Critical for enterprise users relying on strict access controls.

5.  **[Billing] GH Copilot CLI subtracted 5% for one request with 6x multiplier instead of 2%**
    *   **Link:** [#3881](https://github.com/github/copilot-cli/issues/3881)
    *   **Significance:** Discrepancy in premium quota deduction logic (expected ~2%, observed 5%).
    *   **Reaction:** Immediate report upon discovery; affects cost predictability for power users.

6.  **[Closed] No way to list installed hooks**
    *   **Link:** [#3871](https://github.com/github/copilot-cli/issues/3871)
    *   **Significance:** Lack of observability for plugin hooks compared to MCP servers. *Status: Closed.*

7.  **[Closed] No context window visibility or compaction notification**
    *   **Link:** [#3867](https://github.com/github/copilot-cli/issues/3867)
    *   **Significance:** Users cannot see token usage or understand when context is compacted. *Status: Closed.*

8.  **[Closed] Invalid Issue Submission**
    *   **Link:** [#3882](https://github.com/github/copilot-cli/issues/3882)
    *   **Significance:** Empty bug report. *Status: Closed.*

9.  **[Noise] Unrelated PR Submitted as Issue/PR**
    *   **Link:** [PR #3880](https://github.com/github/copilot-cli/pull/3880)
    *   **Significance:** Submission appears to be unrelated code snippet ("beyond the streets of amaerica").

10. **[Observation] Plugin Installation Efficiency**
    *   **Context:** Derived from [#2399](https://github.com/github/copilot-cli/issues/2399).
    *   **Significance:** The community continues to demand better resource management for plugin ecosystems, moving away from full clones.

### 4. Key PR Progress
*   **#3880: beyond the streets of amaerica**
    *   **Link:** [PR #3880](https://github.com/github/copilot-cli/pull/3880)
    *   **Status:** Open
    *   **Description:** This submission appears to be unrelated noise, containing React component code (`ArtistCard`) rather than relevant CLI improvements. It likely requires triage or closure.

*(Note: No other Pull Requests were recorded in the last 24 hours.)*

### 5. Feature Request Trends
*   **Observability & Transparency:** Users are requesting better visibility into internal states, such as context window usage (#3867) and installed hook listings (#3871).
*   **Resource Optimization:** There is a strong push for efficient plugin installation methods, specifically advocating for sparse checkouts to reduce bandwidth and disk usage (#2399).
*   **Security & Control:** Developers need reliable enforcement of permission hooks, particularly in IDE-integrated environments like VS Code (#3874).

### 6. Developer Pain Points
*   **Windows ARM64 Stability:** The fatal aborts (`0xc0000409`) under load represent a severe blocker for users on ARM-based Windows devices.
*   **Documentation vs. Reality Gap:** Significant frustration exists where documented features (specifically sandbox network filtering) do not function as described, leading to potential security misconfigurations (#3861).
*   **Billing Inconsistencies:** Unexpected quota deductions (e.g., 5% instead of expected ~2%) erode trust in the premium tier accounting system (#3881).
*   **Plugin Ecosystem Bloat:** The current practice of cloning entire repositories for small plugins is viewed as inefficient and slow (#2399).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-06-22

## 1. Today's Highlights
The primary focus of community activity today centers on critical compatibility issues within the `kosong` provider and configuration inconsistencies in ACP mode. While no new releases were deployed in the last 24 hours, two high-priority bugs (#2465 and #2464) were reported, highlighting gaps in schema validation and MCP server loading mechanisms. Additionally, long-standing feature requests for persistent memory systems continue to drive engagement among power users.

## 2. Releases
*   **No new releases** were published in the last 24 hours.

## 3. Hot Issues
*Note: Only 3 issues were updated in the last 24 hours. All are listed below.*

1.  **[Bug] kosong: OpenAILegacy emits reasoning_effort: null** (#2465)
    *   **Why it matters:** This bug causes failures when interacting with strict OpenAI-compatible APIs that reject `null` values for `reasoning_effort`. It affects users of `kosong` provider trying to disable thinking models correctly.
    *   **Community Reaction:** Newly opened (0 comments). Critical for API stability.
    *   **Link:** [Issue #2465](https://github.com/MoonshotAI/kimi-cli/issues/2465)

2.  **[Bug] `kimi acp` does not load MCP servers** (#2464)
    *   **Why it matters:** Users report that MCP tools configured via `--mcp-config-file` are ignored in ACP mode, despite working in interactive mode. This breaks workflow consistency for developers relying on Model Context Protocol extensions.
    *   **Community Reaction:** Newly opened (0 comments). High impact on ACP users.
    *   **Link:** [Issue #2464](https://github.com/MoonshotAI/kimi-cli/issues/2464)

3.  **[Enhancement] Feature Request: Memory System** (#1283)
    *   **Why it matters:** A longstanding request for persistent context across sessions, including AI-managed notes and manual user preferences. This addresses the core limitation of stateless CLI interactions.
    *   **Community Reaction:** Updated today with 6 comments. 0 upvotes, but active discussion indicates sustained interest.
    *   **Link:** [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

## 4. Key PR Progress
*   No pull requests were updated in the last 24 hours.

## 5. Feature Request Trends
*   **Persistent State & Memory:** The most significant trend is the demand for long-term memory capabilities (#1283). Developers want the CLI to retain project patterns, user preferences, and contextual notes across different sessions, moving beyond stateless interactions.
*   **Protocol Consistency:** There is a clear need for parity between Interactive Mode and ACP Mode regarding external tool integrations, specifically MCP servers (#2464).

## 6. Developer Pain Points
*   **Schema Validation Strictness:** Users are encountering friction when `kosong` emits invalid JSON values (`null` for enums) that break strict API endpoints (#2465). This suggests a need for better input sanitization in legacy provider implementations.
*   **Configuration Inertia:** The failure of `--mcp-config-file` to load in ACP mode (#2464) highlights a pain point where configuration flags behave inconsistently across different execution modes, forcing users to duplicate efforts or troubleshoot environment-specific bugs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-06-22

### 1. Today's Highlights
The OpenCode community is actively refining multi-agent orchestration and security protocols, with significant traction on OAuth-based MCP remote authentication and background Bash execution. Concurrently, critical stability improvements are addressing TUI crashes on newer Windows builds and resolving persistent issues with stale workspace paths in the Desktop application.

### 2. Releases
No new versions were released in the last 24 hours.

### 3. Hot Issues
1. **[Feature] MCP Remote OAuth Integration (#988)**
   *   **Why it matters:** Simplifies secure installation of MCP servers by triggering an OAuth flow directly from the CLI, eliminating the need for manual secret management.
   *   **Community Reaction:** Highly popular with 95 👍 and 39 comments; considered a major UX/security improvement.
   *   [Link](https://github.com/anomalyco/opencode/issues/988)

2. **[Bug] Black Screen on Fresh Install (#10221)**
   *   **Why it matters:** Blocks new users from accessing the application immediately after installation, indicating a critical rendering or initialization failure.
   *   **Community Reaction:** 16 👍 and 31 comments; urgent for onboarding stability.
   *   [Link](https://github.com/anomalyco/opencode/issues/10221)

3. **[Feature] Go Plan Usage API (#16017)**
   *   **Why it matters:** Provides programmatic access to subscription usage data (rolling/weekly/monthly), enabling better quota management for enterprise users.
   *   **Community Reaction:** 73 👍 and 20 comments; strong demand for transparency and automation.
   *   [Link](https://github.com/anomalyco/opencode/issues/16017)

4. **[UX] Ctrl+C Copy Conflict (#7957)**
   *   **Why it matters:** Resolves the conflict where `Ctrl+C` exits the app instead of copying text, a frequent frustration for Windows/Linux users.
   *   **Community Reaction:** 37 👍 and 14 comments; highlights a critical usability gap in keybinding design.
   *   [Link](https://github.com/anomalyco/opencode/issues/7957)

5. **[Bug] Render Process Freezes on Large Diffs (#33195)**
   *   **Why it matters:** Causes the Desktop/GUI version to become unresponsive when handling large patches, impacting performance with big codebases.
   *   **Community Reaction:** 4 comments; affects workflow continuity for heavy users.
   *   [Link](https://github.com/anomalyco/opencode/issues/33195)

6. **[Bug] Stale Project Path After Workspace Reset (#31888)**
   *   **Why it matters:** The Desktop client fails to update when a project folder is moved, leading to broken references and errors.
   *   **Community Reaction:** 4 comments; indicates a lack of filesystem event syncing in the Electron wrapper.
   *   [Link](https://github.com/anomalyco/opencode/issues/31888)

7. **[Bug] TUI Crash on Windows 25H2 (#33308)**
   *   **Why it matters:** Affects early adopters of Windows Insider Preview builds, suggesting compatibility issues with newer Bun/runtime behaviors.
   *   **Community Reaction:** 1 comment; critical for forward-looking OS compatibility.
   *   [Link](https://github.com/anomalyco/opencode/issues/33308)

8. **[Feature] Support More DBMS for State Storage (#14212)**
   *   **Why it matters:** Allows migration away from SQLite to PostgreSQL or other DBMS, essential for scalability and team-based session sharing.
   *   **Community Reaction:** 20 👍 and 9 comments; key for enterprise deployment architectures.
   *   [Link](https://github.com/anomalyco/opencode/issues/14212)

9. **[Bug] Todo Dock UI Not Refreshing (#33063)**
   *   **Why it matters:** Users see outdated task lists because the UI does not react to `todowrite` tool updates, breaking trust in the agent's progress tracking.
   *   **Community Reaction:** 3 comments; highlights reactivity issues in the SolidJS frontend.
   *   [Link](https://github.com/anomalyco/opencode/issues/33063)

10. **[Bug] CORS Preflight 404 on Zen API (#31041)**
    *   **Why it matters:** Blocks all browser-based clients from interacting with the Zen API due to missing OPTIONS route handling.
    *   **Community Reaction:** 2 comments; impedes custom web client development.
    *   [Link](https://github.com/anomalyco/opencode/issues/31041)

### 4. Key PR Progress
1. **[Fix] Ignore Browser Opener Failures (#32947)**
   *   Fixes issues where `opencode web` fails to launch browsers in isolated environments like WSL.
   *   [Link](https://github.com/anomalyco/opencode/pull/32947)

2. **[Fix] Restore ESC Interrupt for Subagents (#32767)**
   *   Re-introduces the ability to cancel delegated subagent sessions using the ESC key, fixing a regression.
   *   [Link](https://github.com/anomalyco/opencode/pull/32767)

3. **[Feat] Untrimmed Patch Metadata (#33314)**
   *   Adds raw patch metadata for edit tools, allowing precise programmatic access to diffs beyond the trimmed display view.
   *   [Link](https://github.com/anomalyco/opencode/pull/33314)

4. **[Feat] Video/Audio Support in Gemini Protocol (#31889)**
   *   Extends the Gemini provider to accept video and audio inline data, broadening multimodal capabilities.
   *   [Link](https://github.com/anomalyco/opencode/pull/31889)

5. **[Feat] Queued Message Editing & Steering (#33247)**
   *   Introduces advanced control features like "wrap & steer" and "halt & steer," giving users finer granularity over async sessions.
   *   [Link](https://github.com/anomalyco/opencode/pull/33247)

6. **[Fix] Improve Worker RPC Error Handling (#33267)**
   *   Ensures errors thrown in the Bun worker thread are correctly propagated to the main TUI process, preventing silent failures.
   *   [Link](https://github.com/anomalyco/opencode/pull/33267)

7. **[Feat] Session Panels in Desktop UI (#32213)**
   *   Adds optional tiled panel modes for session tabs, improving multi-session management in the GUI.
   *   [Link](https://github.com/anomalyco/opencode/pull/32213)

8. **[Feat] Background Bash Execution (#33310)**
   *   Allows long-running shell commands to execute in the background without blocking the TUI, configurable via tool parameters.
   *   [Link](https://github.com/anomalyco/opencode/pull/33310)

9. **[Fix] Reject Non-Existent Directory Instances (#33309)**
   *   Prevents the Desktop app from initializing sessions for directories that no longer exist, fixing the stale path bug.
   *   [Link](https://github.com/anomalyco/opencode/pull/33309)

10. **[Fix] MCP Tool Key Collision (#33307)**
    *   Resolves a bug where different server/tool pairs could generate identical keys, causing silent overwrites in MCP integrations.
    *   [Link](https://github.com/anomalyco/opencode/pull/33307)

### 5. Feature Request Trends
*   **Enhanced Security & Auth:** There is a strong push for standardized OAuth flows (Issue #988) and better handling of sensitive files like `.env` in search results (Issue #17073).
*   **Enterprise Scalability:** Requests for dedicated database backends (Issue #14212) and public usage APIs (Issue #16017) indicate a growing need for infrastructure that supports larger teams and complex billing models.
*   **Multimodal & Rich Media:** Beyond text, users are requesting native support for video/audio inputs (PR #31889) and improved handling of large binary diffs (Issue #33195).

### 6. Developer Pain Points
*   **Cross-Platform Stability:** Recurring crashes on specific Windows versions (Issue #33308, #10221) and WSL interoperability issues (Issue #31630, #22223) suggest ongoing challenges with the Bun/Electron runtime environment.
*   **State Management Glitches:** Users frequently encounter stale data states, such as unreadable project paths (Issue #31888) or unrefreshed UI elements (Issue #33063), pointing to gaps in reactive state synchronization.
*   **Keybinding Conflicts:** The default `Ctrl+C` behavior conflicting with standard OS copy shortcuts (Issue #7957) remains a significant friction point for new and casual users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-06-22

### 1. Today's Highlights
The Pi development team has prioritized stability and security, resolving critical hangs in the agent core and addressing a significant secret-disclosure vulnerability in file operations. Concurrently, major improvements have been made to context management, with auto-compaction now being opt-in by default and extended with detailed reasoning for better extension control.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **[Bug] openai-codex Connection Reliability Issues** (#4945)
    *   *Why it matters:* Affects core usability; the TUI gets stuck on "Working..." with no output or error, requiring manual intervention.
    *   *Community Reaction:* High engagement (64 comments, 30 👍) indicates widespread frustration with streaming reliability.
    *   [Link](https://github.com/earendil-works/pi/issues/4945)

*   **[Enhancement] Official local LLM provider extension** (#3357)
    *   *Why it matters:* Enables dynamic model fetching from local providers like Ollama and LM Studio, crucial for local-first workflows.
    *   *Community Reaction:* Strong support (36 👍) for improving local integration flexibility.
    *   [Link](https://github.com/earendil-works/pi/issues/3357)

*   **[Bug] Streaming markdown forces scroll to bottom** (#5825)
    *   *Why it matters:* Disrupts reading experience when users scroll up to review previous text while the agent continues generating.
    *   *Community Reaction:* Noted as a specific interaction bug related to `clear on shrink` settings.
    *   [Link](https://github.com/earendil-works/pi/issues/5825)

*   **[Bug] pi-agent-core hangs indefinitely on unresponsive streams** (#5778)
    *   *Why it matters:* Critical stability issue where dropped connections or tool deadlocks cause the agent to freeze indefinitely.
    *   *Community Reaction:* Identified as a vulnerability in the agent loop logic.
    *   [Link](https://github.com/earendil-works/pi/issues/5778)

*   **[Bug] Support provider extensions with model aliases and improve search** (#5916)
    *   *Why it matters:* Addresses limitations in configuring OpenRouter providers via `models.json`, specifically regarding model overrides.
    *   *Community Reaction:* Developer-focused issue regarding configuration granularity.
    *   [Link](https://github.com/earendil-works/pi/issues/5916)

*   **[Bug] pi -p hangs indefinitely when stdin is a non-TTY pipe** (#5571)
    *   *Why it matters:* Causes CLI automation scripts to hang rather than fail fast when credentials are missing or providers are unresponsive.
    *   *Community Reaction:* Reported as a regression in error handling for headless modes.
    *   [Link](https://github.com/earendil-works/pi/issues/5571)

*   **[Bug] Anthropic OAuth-token detection is hardcoded** (#5871)
    *   *Why it matters:* Prevents flexible authentication methods for Anthropic providers by hardcoding prefix checks.
    *   *Community Reaction:* Request for configurability in authentication detection.
    *   [Link](https://github.com/earendil-works/pi/issues/5871)

*   **[Enhancement] Make in-session model changes ephemeral by default** (#5263)
    *   *Why it matters:* Allows users to experiment with models/thinking levels without affecting global settings or other sessions.
    *   *Community Reaction:* Positive reception for improved session isolation.
    *   [Link](https://github.com/earendil-works/pi/issues/5263)

*   **[Bug] Edit tool generates invalid JSON payload** (#4934)
    *   *Why it matters:* Specific to Qwen3-Coder models, highlighting compatibility issues between certain LLM outputs and Pi's tool validation.
    *   *Community Reaction:* Isolated but significant for users of specific coding models.
    *   [Link](https://github.com/earendil-works/pi/issues/4934)

*   **[Bug] Bash and Read Tools Display Only Preview Lines** (#5906)
    *   *Why it matters:* Hardcoded line limits in `bash` and `read` tools obscure full output, hindering debugging and code review.
    *   *Community Reaction:* Frustration with limited visibility into tool outputs.
    *   [Link](https://github.com/earendil-works/pi/issues/5906)

### 4. Key PR Progress
*   **feat: add compaction reason and willRetry to extension events** (#5962)
    *   *Summary:* Closes #5217. Extensions can now distinguish between manual, threshold-based, and overflow compactions, and know if a retry is imminent.
    *   [Link](https://github.com/earendil-works/pi/pull/5962)

*   **fix: add secret-disclosure scope discipline to default system prompt** (#5955)
    *   *Summary:* Addresses #5956. Updates the system prompt to prevent the agent from accidentally copying secrets (like .env files) into public directories during broad file operations.
    *   [Link](https://github.com/earendil-works/pi/pull/5955)

*   **fix: use OpenRouter's actual cost from API response** (#5950)
    *   *Summary:* Replaces static token estimates with real-time cost data returned by OpenRouter, ensuring accurate billing displays in the footer.
    *   [Link](https://github.com/earendil-works/pi/pull/5950)

*   **fix: add required reason and willRetry to compaction events** (#5942 & #5941)
    *   *Summary:* Implements the API changes required for extension compatibility, ensuring `reason` and `willRetry` are present in `SessionBeforeCompactEvent` and `SessionCompactEvent`.
    *   [Link](https://github.com/earendil-works/pi/pull/5942)
    *   [Link](https://github.com/earendil-works/pi/pull/5941)

*   **feat(tui): sync d-pi tui components to clients** (#5938)
    *   *Summary:* Introduces `defineTuiComponent` for agent definitions, allowing custom renderers to be synced and loaded in connected clients.
    *   [Link](https://github.com/earendil-works/pi/pull/5938)

*   **Harden opt-in auto-compaction at between-turn checkpoint** (#5937)
    *   *Summary:* Implements the decision to make auto-compaction opt-in by default and ensures it runs safely after tool execution but before the next provider request.
    *   [Link](https://github.com/earendil-works/pi/pull/5937)

*   **fix: add vLLM context overflow error patterns** (#5929)
    *   *Summary:* Resolves #5930 by adding specific error patterns for vLLM, preventing infinite loops when context limits are exceeded.
    *   [Link](https://github.com/earendil-works/pi/pull/5929)

*   **fix: docs - broken plan-mode example links** (#5957)
    *   *Summary:* Corrects broken documentation links in the TUI docs.
    *   [Link](https://github.com/earendil-works/pi/pull/5957)

*   **fix: find tool respects nested git ignores** (#5960)
    *   *Summary:* Addresses an issue where the `find` tool missed files in nested git repos due to parent `.gitignore` rules.
    *   [Link](https://github.com/earendil-works/pi/pull/5960) *(Note: Listed as Closed Issue #5960, likely fixed in related commits)*

*   **fix: ctx.ui.notify consistency** (#5943)
    *   *Summary:* Resolves inconsistent message display behavior for extensions using `ctx.ui.notify` at session start.
    *   [Link](https://github.com/earendil-works/pi/pull/5943) *(Note: Linked to Issue #5943)*

### 5. Feature Request Trends
*   **Granular Context Management:** Users are requesting more control over *when* and *why* context compaction occurs, including the ability to distinguish compaction reasons in extensions (#5217, #5939).
*   **Local LLM Integration:** There is a sustained push for better, dynamic support for local providers like Ollama and LM Studio, particularly regarding model listing and aliasing (#3357, #5916).
*   **Session Isolation:** Requests for ephemeral in-session settings (model, thinking level) suggest users want to experiment without altering global configurations (#5263).
*   **Per-Model Defaults:** Users are asking for per-model configuration overrides, such as default thinking levels, to accommodate different model capabilities (#5933).

### 6. Developer Pain Points
*   **Agent Stability/Hangs:** Recurring reports of the agent freezing or hanging indefinitely due to unresponsive streams, missing credentials, or tool deadlocks (#5778, #5571, #4945).
*   **Secret Leakage Risks:** Concerns about the agent inadvertently exposing sensitive files during broad file operations, leading to security vulnerabilities (#5956, #5955).
*   **Output Visibility:** Frustration with tools like `bash` and `read` truncating output by default, making debugging difficult (#5906).
*   **Configuration Rigidity:** Hardcoded behaviors in authentication detection (Anthropic OAuth) and provider configurations limit flexibility for advanced users (#5871, #5916).
*   **Error Handling:** Lack of immediate feedback or proper error codes when providers are unavailable or credentials are missing, leading to silent hangs (#5571).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: June 22, 2026

## 1. Today's Highlights
Qwen Code released version **v0.18.5**, introducing critical fixes for plan mode prompts and VSCode companion publishing. The community is heavily engaged in refining the new **voice dictation** capabilities, with numerous issues addressing native prebuilds, telemetry, and cross-platform compatibility (Windows/Linux). Additionally, significant progress was made on **Dynamic Workflows** and **MCP server hot-reloading**, enhancing automation and extensibility.

## 2. Releases
*   **v0.18.5** ([PR #5558](https://github.com/QwenLM/qwen-code/pull/5558)):
    *   **Core Fix**: Requires explicit opt-in for plan mode prompts to prevent unintended execution ([PR #5433](https://github.com/QwenLM/qwen-code/pull/5433)).
    *   **CI**: Auto-publishes the VSCode companion extension following stable releases.
    *   **Cleanup**: Removes duplicate test cases for git diff untracked counts.

## 3. Hot Issues
1.  **[Feature] Skill Persistence Confirmation** (#5263): Users request a confirmation step before saving auto-generated skills to disk, preventing clutter from one-off refactoring tasks.
2.  **[Bug] MCP Documentation Mismatch** (#5563): Critical documentation error where `mcp add --scope` defaults are listed as `project` in docs but `user` in code, causing confusion.
3.  **[Feature] Resume Background Sub-Agents** (#5540): Developers need the ability to revive completed background sub-agents via `send_message`, as current logic hard-fails on terminal states.
4.  **[Feature] Voice Input in TUI** (#5431): High interest in adding optional voice input for terminal prompts to improve accessibility and speed for complex task iteration.
5.  **[Bug] API Timeout Env Parsing** (#5596): Environment variable `QWEN_CODE_API_TIMEOUT_MS` incorrectly accepts non-decimal JS numbers (hex/scientific), leading to inconsistent parsing compared to other env vars.
6.  **[Enhancement] Hot-Reload System** (#3696): A tracking issue for a comprehensive hot-reload system for skills, extensions, and MCPs, aiming to eliminate session restarts.
7.  **[Bug] OAuth Model Picker Discrepancy** (#3745): The `coder-model` is marked discontinued in CLI but remains selectable in VS Code, creating a fragmented user experience.
8.  **[Voice] Native Prebuild Targets** (#5580): Missing native prebuilds for `win32-arm64`, `musl`, and older `glibc` bases force fallbacks, impacting performance on these platforms.
9.  **[Security] External Content Review** (#5424): Request to allow external producers to inject content into the TUI for human approval before the agent acts, addressing security concerns in automated pipelines.
10. **[Voice] Telemetry & Observability** (#5587, #5583): Multiple follow-ups on voice dictation highlight the need for detailed telemetry on success/failure rates and silent fallbacks to native modules.

## 4. Key PR Progress
1.  **#5600: Dynamic Workflows Port** ([PR #5600](https://github.com/QwenLM/qwen-code/pull/5600)): Completes the port of Dynamic Workflows, adding nested global workflows, keyword triggers, and notifications.
2.  **#5561: MCP Live Reconciliation** ([PR #5561](https://github.com/QwenLM/qwen-code/pull/5561): Implements runtime hot-reloading for MCP servers, allowing settings changes to connect/disconnect servers without restart.
3.  **#5599: GLM Web Fetch Fix** ([PR #5599](https://github.com/QwenLM/qwen-code/pull/5599): Prevents GLM models on DashScope from dropping content during `web_fetch` requests.
4.  **#5573: Consecutive Tool Call Guard** ([PR #5573](https://github.com/QwenLM/qwen-code/pull/5573): Moves the guard against consecutive identical tool calls to the "always-on" tier, improving loop detection reliability.
5.  **#5608: Reject Non-Decimal Timeouts** ([PR #5608](https://github.com/QwenLM/qwen-code/pull/5608): Fixes the parsing of `QWEN_CODE_API_TIMEOUT_MS` to strictly reject non-decimal formats, aligning with the shared env parser.
6.  **#5126: Vision Bridge for Text Models** ([PR #5126](https://github.com/QwenLM/qwen-code/pull/5126): Adds an automatic bridge to transcribe images to text for text-only models using an image-capable secondary model.
7.  **#5609: Voice Recorder Retry** ([PR #5609](https://github.com/QwenLM/qwen-code/pull/5609): Ensures the native voice recorder releases its active state even if the backend reports an empty buffer, fixing stop errors.
8.  **#5606: Audio Capture Prebuilds** ([PR #5606](https://github.com/QwenLM/qwen-code/pull/5606): Expands the `audio-capture` prebuild matrix to include `win32-arm64`, `musl`, and older `glibc` targets.
9.  **#5030: Resume Interrupted Turns** ([PR #5030](https://github.com/QwenLM/qwen-code/pull/5030): Allows resuming interrupted assistant turns without injecting synthetic "continue" messages, preserving conversation integrity.
10. **#4511: Daemon Side-Channel Design** ([PR #4511](https://github.com/QwenLM/qwen-code/pull/4511): Proposes a design-first document for daemon-side coordination (A1/A2/A4/A5) to address real-time sync issues.

## 5. Feature Request Trends
*   **Voice & Audio Integration**: A dominant trend, with multiple issues/PRs focusing on voice dictation, native prebuilds, telemetry, and keyterm guards.
*   **Automation & Workflow Resilience**: Requests for robust sub-agent management (resume/revive), dynamic workflow nesting, and uninterrupted session recovery.
*   **Security & Human-in-the-Loop**: Growing demand for explicit confirmations in plan modes, external content review gates, and clearer deprecation indicators.
*   **Developer Experience (DX)**: Hot-reloading configurations/MCPs, consistent CLI/VS Code behavior, and improved logging/observability are top priorities.

## 6. Developer Pain Points
*   **Inconsistent Environment Variable Parsing**: Several bugs (#5596, #5603) highlight frustration with `Number()` parsing accepting hex/scientific notation inconsistently across different config keys.
*   **Silent Fallbacks in Native Modules**: The voice dictation feature suffers from "silent" failures when native prebuilds are missing, making debugging difficult for users on Windows/Linux ARM or Alpine.
*   **Documentation-Code Drift**: Issues like #5563 show that documentation often lags behind code changes, leading to user confusion regarding default scopes and behaviors.
*   **Fragmented User Experience**: Discrepancies between CLI and VS Code extensions (e.g., #3745 on model deprecation) create confusion for users switching interfaces.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-06-22
**Source:** github.com/Hmbown/DeepSeek-TUI

## 1. Today's Highlights
The v0.8.64 release train is in final integration, focusing heavily on security hardening, automated review gates, and robustness fixes for agent self-correction loops. Significant community contributions include new browser automation tools (Playwright), improved sub-agent persona management, and critical fixes for terminal UI visibility and process lifecycle management.

## 2. Releases
*   **Status:** No new official release published in the last 24 hours.
*   **Focus:** Active development is centered on the `v0.8.64` milestone, with multiple PRs addressing security scans, code-scanning fixes, and release readiness primitives.

## 3. Hot Issues
1.  **[Security] v0.8.64: Land and verify security hardening/code-scanning fixes** [#3368](https://github.com/Hmbown/CodeWhale/issues/3368)
    *   *Why it matters:* Critical for the upcoming release to address CodeQL findings and advisory-class reports without exposing exploit details.
    *   *Reaction:* High engagement (27 comments); central to the release gate.

2.  **[Bug] CodeWhale is overly involved... deviating from user intent** [#3275](https://github.com/Hmbown/CodeWhale/issues/3275)
    *   *Why it matters:* Addresses a regression where the agent enters self-driven loops, ignoring user constraints.
    *   *Reaction:* 11 comments; identifies a major UX/reliability friction point.

3.  **[Enhancement] Add natural-language auto-review policy and a pre-push review gate** [#3144](https://github.com/Hmbown/CodeWhale/issues/3144)
    *   *Why it matters:* Introduces automated safety checks for code changes, inspired by industry standards (Cursor).
    *   *Reaction:* 12 comments; discusses balancing autonomy with control.

4.  **[Bug] Sandbox blocks Git write ops on worktree workspaces** [#3355](https://github.com/Hmbown/CodeWhale/issues/3355)
    *   *Why it matters:* Breaks workflows for developers using Git worktrees, a common modern practice.
    *   *Reaction:* 3 comments; urgent fix for workspace compatibility.

5.  **[Enhancement] v0.8.64: Make auto-compaction seamless by default** [#3363](https://github.com/Hmbown/CodeWhale/issues/3363)
    *   *Why it matters:* Solves context limit fragility in long sessions by carrying forward summaries automatically.
    *   *Reaction:* 1 comment; seen as a key "comfort gap" fix.

6.  **[Enhancement] UX: make the approval modal's approve/deny key hints more prominent** [#3380](https://github.com/Hmbown/CodeWhale/issues/3380)
    *   *Why it matters:* Improves accessibility and usability of the approval workflow, especially for first-time users.
    *   *Reaction:* 0 comments; marked as "good first issue."

7.  **[Bug] Restore Nightly cross-target builds and auto-tag idempotency** [#3369](https://github.com/Hmbown/CodeWhale/issues/3369)
    *   *Why it matters:* CI/CD stability is crucial for reliable releases; previous runs showed readiness failures.
    *   *Reaction:* 1 comment; technical debt resolution.

8.  **[Enhancement] Support user-defined subagent personas in .codewhale/agents** [#3367](https://github.com/Hmbown/CodeWhale/issues/3367)
    *   *Why it matters:* Allows users to create reusable, local agent roles without waiting for core feature additions.
    *   *Reaction:* 0 comments; empowers advanced customization.

9.  **[Bug] app-server: clean up delegated serve child when dispatcher exits** [#3259](https://github.com/Hmbown/CodeWhale/issues/3259)
    *   *Why it matters:* Prevents orphaned processes when the main dispatcher is killed, ensuring system hygiene.
    *   *Reaction:* 4 comments; follow-up to v0.8.61 verification.

10. **[Enhancement] v0.8.64: Consolidate model-visible work tracking** [#3366](https://github.com/Hmbown/CodeWhale/issues/3366)
    *   *Why it matters:* Reduces confusion for models by unifying scattered work-tracking surfaces (plans, todos, tasks) into one canonical ledger.
    *   *Reaction:* 0 comments; improves agent reliability.

## 4. Key PR Progress
1.  **[feat] Add dev server readiness tool** [#3376](https://github.com/Hmbown/CodeWhale/pull/3376)
    *   Adds `wait_for_dev_server` for reliable local webapp testing, preventing race conditions in frontend verification.

2.  **[fix] Suppress idle timeout countdown in provider-wait footer** [#3375](https://github.com/Hmbown/CodeWhale/pull/3375)
    *   Resolves noisy status lines during model waits, improving TUI cleanliness.

3.  **[security] v0.8.64 security and release integration** [#3373](https://github.com/Hmbown/CodeWhale/pull/3373)
    *   Draft integration PR bundling security hardening, auto-review rails, and CI fixes for the v0.8.64 release.

4.  **[feat] Add WeCom (Enterprise WeChat) intelligent robot bridge** [#3370](https://github.com/Hmbown/CodeWhale/pull/3370)
    *   Expands integration capabilities for Chinese enterprise environments.

5.  **[fix] Reduce minimum terminal width for sidebar visibility** [#3371](https://github.com/Hmbown/CodeWhale/pull/3371)
    *   Fixes sidebar display issues on standard terminal widths (<100 cols).

6.  **[feat] Add first-class sub-agent toggle** [#327](https://github.com/Hmbown/CodeWhale/pull/327) *(Note: ID likely #3327 based on context)*
    *   Adds `/config subagents on|off|status` for better control over sub-agent features.

7.  **[fix] Harden branch hygiene checks** [#3348](https://github.com/Hmbown/CodeWhale/pull/3348)
    *   Improves release workflow robustness by handling fork checkouts and remote refs correctly.

8.  **[feat] Memory tags** [#3381](https://github.com/Hmbown/CodeWhale/pull/3381)
    *   Introduces new memory tagging capabilities (details pending).

9.  **[chore] Dependency bumps (Tokio, LRU, Similar, TOML)** [#3343](https://github.com/Hmbown/CodeWhale/pull/3343), [#3341](https://github.com/Hmbown/CodeWhale/pull/3341), [#3342](https://github.com/Hmbown/CodeWhale/pull/3342), [#3340](https://github.com/Hmbown/CodeWhale/pull/3340)
    *   Updates core Rust dependencies for performance and security patches.

10. **[fix] Kill delegated server child on uncatchable dispatcher death** [#3378](https://github.com/Hmbown/CodeWhale/pull/3378)
    *   Completes the fix for orphaned processes during hard crashes (SIGKILL).

## 5. Feature Request Trends
*   **Browser Automation & Verification:** Strong demand for Playwright-backed tools, console error verification, and screenshot-to-vision feedback to improve UI testing reliability (Issues #3358, #3361, #3362).
*   **Agent Control & Safety:** Requests for stricter edit guardrails ("read-before-edit"), natural-language auto-review policies, and clearer failure modes to prevent agent hallucination or overreach (Issues #3364, #3144).
*   **Customization & Personas:** Users want more control over sub-agent identities via local configuration files and better model profiling for tool curation (Issues #3367, #3365).
*   **Context Management:** Need for seamless auto-compaction and preserved thinking blocks when loading history to maintain session continuity (Issues #3363, #3300).

## 6. Developer Pain Points
*   **Agent Over-Execution:** Users report frustration with the agent deviating from intent, engaging in unnecessary self-questioning loops, and making broad modifications without confirmation (Issue #3275).
*   **CI/CD Instability:** Release processes are hindered by flaky nightly builds, tag idempotency issues, and branch hygiene problems (Issues #3369, #3348).
*   **Process Orphaning:** When the main dispatcher crashes or is killed forcefully, child server processes (like `app-server`) often remain running, causing port conflicts and resource leaks (Issues #3259, #3378).
*   **Noisy Status Lines:** Persistent idle timeout messages in the footer are considered distracting during normal operation (Issue #3189).
*   **Terminal Width Constraints:** The UI breaks or hides critical components like the sidebar on standard terminal sizes (PR #3371).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*