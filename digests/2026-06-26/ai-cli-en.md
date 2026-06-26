# AI CLI Tools Community Digest 2026-06-26

> Generated: 2026-06-26 02:15 UTC | Tools covered: 9

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
The AI CLI landscape is currently defined by a critical tension between rapid feature expansion and foundational stability. As major vendors (Anthropic, OpenAI, Google, Microsoft) push complex multi-agent architectures and Model Context Protocol (MCP) integrations, the primary community friction point has shifted from basic usability to **cost transparency, session state reliability, and cross-platform consistency**. Tools are increasingly competing on extensibility and enterprise governance, while open-source alternatives focus on performance optimization and robust local-first execution.

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (Active) | Release Status | Key Focus Area |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 1 | **v2.1.193** | Auto-mode routing & cost transparency |
| **OpenAI Codex** | 10 | 10 | **rust-v0.142.2** | MCP runtime reuse & rate limit stability |
| **Gemini CLI** | 10 | 10 | **v0.51.0-nightly** | Agent autonomy & security/redaction |
| **GitHub Copilot** | 10 | 1 | **v1.0.66-0** | MCP OAuth recovery & session state |
| **Kimi Code** | 2 | 0 | None (v0.19.2) | UI stability & large-scale MCP support |
| **OpenCode** | 10 | 10 | **v1.17.11** | Session snapshots & Windows/Bun fixes |
| **Pi** | 10 | 10 | None | TUI robustness & multi-instance orchestration |
| **Qwen Code** | 10 | 10 | None | Windows OOM fixes & extension extensibility |
| **DeepSeek TUI** | 10 | 10 | **v0.8.65/66** | Fleet loadouts & Hotbar UI migration |

## 3. Shared Feature Directions
*   **MCP Maturity & Security:** Nearly all major tools are refining MCP integration. Common themes include **automatic OAuth token refresh** (OpenAI, GitHub Copilot, OpenCode), **security redaction** of sensitive data in logs (Gemini, OpenCode), and handling **high-volume tool registries** (Kimi, OpenAI).
*   **Session State & Continuity:** There is a universal demand for resilient session management. Features like **session snapshots/reverts** (OpenCode), **interrupt hooks** (Claude, Pi), and **resume authentication fixes** (GitHub Copilot, OpenAI) highlight the fragility of long-running AI contexts.
*   **Cost & Quota Transparency:** Financial unpredictability is a cross-cutting pain point. Users across Claude, OpenAI, and OpenCode are demanding clearer warnings for model upgrades, visible token budgets, and consistent quota accounting.
*   **Extensibility & Plugins:** Developers are pushing for deeper plugin ecosystems. Trends include **bundled extension creators** (Qwen), **custom hook capabilities** (GitHub Copilot, Pi), and **global instruction files** (Qwen, Claude) to standardize agent behavior.

## 4. Differentiation Analysis
*   **Enterprise vs. Individual Focus:** **GitHub Copilot** and **Qwen Code** are heavily oriented toward enterprise governance, featuring server-managed settings, organizational telemetry, and team-tier memory. In contrast, **Pi** and **OpenCode** cater to power users and developers seeking granular control over local instances, TUI rendering, and custom RPC layers.
*   **Technical Architecture:** **OpenAI Codex** and **DeepSeek TUI** are distinguishing themselves through infrastructure innovation—Codex focuses on Rust-based runtime efficiency and MCP protocol depth, while DeepSeek is exploring a Rust-native client and "fleet loadout" routing. **Gemini CLI** differentiates via its "generalist agent" autonomy and AST-aware code navigation.
*   **Platform Stability:** **Kimi Code** and **OpenCode** are currently battling significant platform-specific bugs (Linux UI shaking, Windows Bun segfaults), whereas **Claude Code** and **GitHub Copilot** have more stable, albeit complex, cross-platform implementations, though still facing macOS permission friction.

## 5. Community Momentum & Maturity
*   **High Velocity & Iteration:** **OpenAI Codex**, **Gemini CLI**, **OpenCode**, and **DeepSeek TUI** show high momentum with frequent PR merges and nightly/preview releases. These communities are rapidly prototyping new features (MCP apps, Hotbars, Session Snapshots).
*   **Stability-Focused:** **Claude Code** and **GitHub Copilot** are in a phase of stabilization and bug-fixing, with fewer daily releases but high engagement on critical stability issues (cost, permissions, session resumes).
*   **Emerging/Consolidating:** **Kimi Code** shows lower activity, suggesting a consolidation phase or smaller user base compared to the giants. **Pi** maintains a niche, highly technical community focused on TUI internals and RPC architecture.

## 6. Trend Signals
*   **From Chat to Agent Orchestration:** The industry is moving beyond single-turn chat. Features like **multi-agent collaboration** (Qwen, DeepSeek), **sub-agent recovery** (Gemini, DeepSeek), and **fleet loadout routing** (DeepSeek) indicate a shift toward autonomous, multi-step coding workflows.
*   **MCP as the Standard Interface:** Model Context Protocol is no longer optional; it is the central integration layer. Success depends on how well tools handle **OAuth, token refresh, and schema validation** within this protocol.
*   **The "Trust" Crisis:** Silent cost upgrades and data loss (session history, file overwrites) are eroding user trust. Tools that prioritize **transparency** (visible denial reasons, clear budgeting) and **safety** (non-destructive operations, clear approval flows) will gain competitive advantage.
*   **Local-First Performance:** With cloud costs rising, there is increased interest in **local execution optimizations** (Rust runtimes, efficient token caching, AST-aware processing) to reduce latency and API spend.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-06-26  
**Source:** `anthropics/skills` GitHub Repository

## 1. Top Skills Ranking
*Based on community attention, discussion volume, and impact on core tooling.*

1.  **Frontend-Design Skill Clarity Improvement**
    *   **Functionality:** Refines the `frontend-design` skill to ensure instructions are actionable within single conversations, improving specificity and coherence.
    *   **Discussion Highlights:** Focus on reducing ambiguity in AI-generated code structures and ensuring immediate applicability.
    *   **Status:** Open
    *   **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

2.  **Document-Typography Skill**
    *   **Functionality:** Introduces a skill to enforce typographic quality in generated documents, specifically targeting orphan words, widows, and numbering misalignments.
    *   **Discussion Highlights:** Addresses a pervasive pain point in professional document generation where AI outputs often lack print-ready formatting.
    *   **Status:** Open
    *   **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **PDF Skill Case-Sensitivity Fix**
    *   **Functionality:** Corrects case-sensitive file reference mismatches (`REFERENCE.md` vs `reference.md`) in the PDF skill documentation.
    *   **Discussion Highlights:** Critical fix for Linux/macOS environments where case sensitivity breaks skill loading.
    *   **Status:** Open
    *   **Link:** [PR #538](https://github.com/anthropics/skills/pull/538)

4.  **ODT (OpenDocument) Skill**
    *   **Functionality:** Enables creation, filling, and conversion of OpenDocument Format files (.odt, .ods), supporting LibreOffice workflows.
    *   **Discussion Highlights:** Fills a gap for users requiring open-standard document formats over proprietary MS Office formats.
    *   **Status:** Open
    *   **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

5.  **Skill Quality & Security Analyzer**
    *   **Functionality:** Meta-skills that evaluate other Skills based on structure, documentation, quality, and security risks.
    *   **Discussion Highlights:** Establishes a governance framework for the growing skills marketplace, ensuring baseline standards.
    *   **Status:** Open
    *   **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)

6.  **DOCX Tracked Change Collision Fix**
    *   **Functionality:** Prevents document corruption in DOCX files when adding tracked changes to documents with existing bookmarks.
    *   **Discussion Highlights:** Solves a complex XML ID space collision issue (`w:id`) that caused data loss.
    *   **Status:** Open
    *   **Link:** [PR #541](https://github.com/anthropics/skills/pull/541)

7.  **SAP-RPT-1-OSS Predictor Skill**
    *   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics on business data.
    *   **Discussion Highlights:** Represents significant enterprise adoption interest, bridging AI coding with specialized ERP analytics.
    *   **Status:** Open
    *   **Link:** [PR #181](https://github.com/anthropics/skills/pull/181)

8.  **Codebase Inventory Audit Skill**
    *   **Functionality:** Systematic 10-step workflow to identify orphaned code, unused files, and documentation gaps.
    *   **Discussion Highlights:** Appeals to developers managing legacy codebases, offering automated maintenance insights.
    *   **Status:** Open
    *   **Link:** [PR #147](https://github.com/anthropics/skills/pull/147)

## 2. Community Demand Trends
*Distilled from high-engagement Issues.*

*   **Enterprise & Organizational Sharing:** There is strong demand for org-wide skill libraries (Issue #228), moving away from manual file sharing. Users want seamless integration of skills within team workflows.
*   **Security & Trust Boundaries:** Significant concern exists regarding impersonation of official skills under the `anthropic/` namespace (Issue #492). The community is calling for stricter verification and namespace isolation.
*   **Persistent Agent Memory:** Interest in long-term context retention is high, with proposals for "compact-memory" (Issue #1329) and persistent memory systems (Issue #154) to reduce context window waste in long-running agents.
*   **Cross-Platform Compatibility:** Repeated issues highlight the need for robust Windows support (Issues #1061, #1175), particularly regarding subprocess handling, encoding, and path resolution.
*   **Governance & Safety:** Proposals for "agent-governance" skills (Issue #412) indicate a trend toward embedding safety patterns, policy enforcement, and audit trails directly into agent capabilities.

## 3. High-Potential Pending Skills
*Active PRs with unresolved critical bugs or high utility that may land soon.*

*   **Skill-Creator Evaluation Loop Fixes:** Multiple PRs (#1298, #1099, #1323, #1050) address critical failures in `run_eval.py` and `run_loop.py`, particularly the "recall=0%" bug affecting Windows and Linux. Resolution here is essential for the skill improvement pipeline.
    *   **Key Links:** [PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1323](https://github.com/anthropics/skills/pull/1323), [PR #1050](https://github.com/anthropics/skills/pull/1050)
*   **YAML Validation Improvements:** PRs #539 and #361 introduce pre-parse validation to prevent silent failures from unquoted special characters in skill descriptions. This improves reliability for community-contributed skills.
    *   **Key Links:** [PR #539](https://github.com/anthropics/skills/pull/539), [PR #361](https://github.com/anthropics/skills/pull/361)
*   **UTF-8 Handling:** PR #362 fixes Rust panics caused by multi-byte characters in skill names/descriptions, crucial for internationalization support.
    *   **Key Link:** [PR #362](https://github.com/anthropics/skills/pull/362)

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust, cross-platform tooling integrity** (fixing Windows/Linux evaluation loops) and **enterprise-grade governance** (security namespaces, org-wide sharing, and memory persistence), shifting focus from individual creative skills to systemic reliability and scalability.

---

# Claude Code Community Digest: 2026-06-26

## 1. Today's Highlights
Anthropic released **v2.1.193**, introducing significant improvements to auto-mode classification and transparency regarding permission denials. Community attention is heavily focused on cost management following reports of silent default model upgrades causing unexpected charges, alongside ongoing friction with macOS permissions and multi-account workflows.

## 2. Releases
**v2.1.193**
*   **Enhanced Auto-Mode Routing:** Added `autoMode.classifyAllShell` to route all Bash/PowerShell commands through the auto-mode classifier, not just arbitrary-code-execution patterns.
*   **Transparency Improvements:** Auto-mode denial reasons are now visible in the transcript, toast notifications, and `/permissions` recent denials.
*   [View Release Details](https://github.com/anthropics/claude-code/releases/tag/v2.1.193)

## 3. Hot Issues
1.  **[FEATURE] Multi-account switching in Claude Mobile** (#36151)
    *   *Why it matters:* Critical for users managing multiple identities/projects on iOS/Android.
    *   *Reaction:* 380 👍, 110 comments. High demand for seamless context switching without email sharing.
2.  **[ENHANCEMENT] Pasted text block editing** (#3412)
    *   *Why it matters:* Improves UX for dictation software users on macOS by allowing pre-submission edits of pasted content.
    *   *Reaction:* 269 👍, 76 comments. Addresses a specific pain point for accessibility and voice-input workflows.
3.  **[BUG] Desktop Bypass Permissions mode failure on macOS** (#61415)
    *   *Why it matters:* Blocks power users from enabling unrestricted shell access on macOS, a common requirement for complex dev environments.
    *   *Reaction:* 24 👍, 63 comments. Indicates a regression in v2.1.148.
4.  **[BUG] Opus 4.7 XML/JSON format mixing** (#49747)
    *   *Why it matters:* A regression causing malformed tool calls on long payloads, leading to execution failures.
    *   *Reaction:* 32 👍, 29 comments. Affects stability of complex, long-running sessions.
5.  **[BUG] Opus 4.8 reasoning degradation** (#68780)
    *   *Why it matters:* Users report severe performance drops compared to previous versions, raising concerns about model quality control.
    *   *Reaction:* 16 👍, 12 comments. Includes serious allegations regarding deceptive practices.
6.  **[BUG] Slack Plugin Auth Failure** (#18009)
    *   *Why it matters:* Breaks integration with Slack due to dynamic client registration issues.
    *   *Reaction:* 49 👍, 19 comments. Impairs workflow automation for many teams.
7.  **[FEATURE] User Interrupt Hook** (#9516)
    *   *Why it matters:* Allows custom logic to trigger when a user interrupts a process, essential for cleanup and state management.
    *   *Reaction:* 43 👍, 23 comments. Highly requested for robust agent design.
8.  **[BUG] Session Transcript Persistence Disabled in Tmux** (#70219)
    *   *Why it matters:* Loss of audit trails and session history when running inside tmux/psmux on Windows.
    *   *Reaction:* 1 👍, 2 comments. Niche but critical for enterprise auditing.
9.  **[BUG] VSCode Extension Conversation History Lost** (#29017)
    *   *Why it matters:* Data loss issue in the popular IDE integration.
    *   *Reaction:* 18 👍, 25 comments. Erodes trust in the extension's reliability.
10. **[BUG] Cost Control: Silent Default Model Upgrade** (#71481)
    *   *Why it matters:* Reports of silent upgrades from Sonnet to Opus causing hundreds of dollars in unexpected bills.
    *   *Reaction:* 0 👍, 1 comment (but highly discussed in comments). Major financial concern.

## 4. Key PR Progress
1.  **[CLOSED] Bump stale and autoclose timeouts** (#63686)
    *   *Summary:* Increased inactive issue lifecycle from 14 to 90 days to reduce noise and allow more time for community resolution.
    *   *Status:* Merged/Closed.
    *   [View PR](https://github.com/anthropics/claude-code/pull/63686)

*(Note: Only 1 PR was provided in the source data for the last 24 hours.)*

## 5. Feature Request Trends
*   **Multi-Account & Identity Management:** Strong desire for better account switching capabilities, particularly on mobile and desktop clients, without compromising privacy or requiring shared emails.
*   **Interrupt Handling & Control:** Developers are requesting deeper control over execution flows, specifically "User Interrupt Hooks" to handle cleanup and state restoration during manual interruptions.
*   **Input Pre-processing:** Requests for better handling of raw input, such as editing "pasted text" blocks before submission, indicate a need for finer-grained control over input sanitization and editing.
*   **Privacy-Oriented Feedback:** A new request to submit feedback without attaching session context highlights growing concerns over data privacy in diagnostic reporting.

## 6. Developer Pain Points
*   **Unpredictable Costs:** The most acute pain point is financial surprise. Users are frustrated by silent default model upgrades (e.g., Sonnet to Opus) and lack of clear warnings before high-cost operations, leading to significant unexpected bills.
*   **Platform-Specific Permission Friction:** macOS remains a hotspot for bugs related to permissions (Bypass mode failing) and TUI/accessibility issues (pasted text handling, scrollbars in SSH sessions).
*   **Tool Call Instability:** Regressions in how models handle tool formats (XML vs. JSON mixing) and malformed client errors are disrupting automated workflows and long-context sessions.
*   **Integration Reliability:** Persistent issues with Slack authentication and VSCode history loss suggest instability in core integrations that developers rely on daily.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-06-26

## 1. Today's Highlights
The Codex community is currently grappling with significant stability and cost concerns, particularly regarding erratic rate-limit behaviors on the Plus and Pro plans that are draining usage budgets unexpectedly fast. Simultaneously, the engineering team is advancing the Model Context Protocol (MCP) infrastructure, focusing on runtime reuse, token refresh mechanisms, and integrating Codex Apps as virtual HTTP servers.

## 2. Releases
**rust-v0.142.2**
This patch release introduces critical improvements to tool discovery and network configuration. MCP tools now utilize tool search by default when supported, enhancing discoverability while maintaining backward compatibility. Additionally, macOS authentication clients can now respect system proxies, PAC files, and WPAD settings when the `respect_system_proxy` flag is enabled.

## 3. Hot Issues
*   **[Rate Limit Spikes Draining Budgets](https://github.com/openai/codex/issues/28879)**: Users report a 10-20x increase in token cost per rate-limit unit since June 16, causing the 5-hour Plus budget to vanish in just a few prompts. This is the most discussed issue with 152 comments and 302 upvotes, indicating widespread frustration with pricing transparency.
*   **[SQLite Log Endurance Risks](https://github.com/openai/codex/issues/28224)**: A previous bug caused feedback logs to consume excessive disk space (~640 TB/year estimate). While marked closed due to merged fixes in v0.142.0, it remains highly relevant (385 upvotes) as a cautionary tale for local storage management.
*   **[Legacy Phone Verification Blockers](https://github.com/openai/codex/issues/25749)**: Users authenticated via Google OAuth are blocked from using Codex because the system demands verification of inaccessible legacy phone numbers, with no recovery path provided.
*   **[macOS CPU/Memory Runaway](https://github.com/openai/codex/issues/25719)**: Codex Desktop on macOS is triggering `syspolicyd` and `trustd` processes, leading to high CPU and memory usage. This affects the stability of the native app experience for Pro users.
*   **[Auto Compaction Losing Context](https://github.com/openai/codex/issues/5957)**: Long-standing complaint where GPT-5-Codex loses track of mid-task progress and edited files during auto-compaction, effectively breaking complex multi-step workflows.
*   **[Background Polling Token Waste](https://github.com/openai/codex/issues/13733)**: Polling background processes (like `cargo build`) triggers full API round-trips with entire conversation histories, burning tokens unnecessarily.
*   **[Desktop App MCP Schema Errors](https://github.com/openai/codex/issues/28978)**: New conversations fail with "Invalid request: missing field `inputSchema`" in Desktop v26.616, suggesting a regression in MCP tool definition handling.
*   **[Quota Over-reporting](https://github.com/openai/codex/issues/30002)**: Pro users report hitting the 5-hour limit after only ~41 minutes of use (~1.35M tokens), whereas earlier the same day it took ~156M tokens, indicating inconsistent server-side accounting.
*   **[Instant Credit Drain](https://github.com/openai/codex/issues/29955)**: Similar to the above, users see 100 credits disappear after a single message immediately after a quota reset.
*   **[MCP OAuth Token Refresh Failure](https://github.com/openai/codex/issues/17265)**: Codex fails to auto-refresh expired MCP access tokens despite having valid refresh tokens, causing tool calls to fail silently or with auth errors.

## 4. Key PR Progress
*   **[Reuse MCP Runtimes](https://github.com/openai/codex/pull/30148)**: Optimizes performance by reusing MCP runtimes when selected capability environments change but contain no new MCP servers, preventing unnecessary restarts.
*   **[Forward MCP Resource Updates](https://github.com/openai/codex/pull/30087)**: Enables the core event stream to receive and forward `notifications/resources/updated` callbacks from MCP servers, improving real-time data synchronization.
*   **[Fallback for Remote Filesystem Walk](https://github.com/openai/codex/pull/30156)**: Adds resilience for executor skill discovery by falling back gracefully when older exec-servers do not support the optimized `fs/walk` RPC.
*   **[Prototype Codex Apps as Virtual HTTP MCP Servers](https://github.com/openai/codex/pull/30000)**: Introduces a new `codex-apps` crate that serves authenticated loopback Streamable-HTTP MCP endpoints for apps, decoupling app logic from the core MCP manager.
*   **[Preserve Status for Evicted Agents](https://github.com/openai/codex/pull/30154)**: Fixes a bug where completed or errored V2 agents returned `NotFound` after LRU eviction by persisting their final status in `AgentMetadata`.
*   **[Allow CCA Image/Web Search Extensions](https://github.com/openai/codex/pull/29909)**: Extends support for standalone image-generation and web-search extensions to the actor-authorized provider shape used by Codex Chat Assistant.
*   **[Expose MCP App Identity](https://github.com/openai/codex/pull/29934)**: Adds `appName`, `templateId`, and `actionName` fields to MCP tool-call contexts, allowing v2 clients to identify trusted app actions without inferring from URIs.
*   **[Use Managed Defaults for TUI Threads](https://github.com/openai/codex/pull/30147)**: Ensures the TUI client consumes server-provided managed defaults for model settings when creating new threads, aligning behavior with the Desktop App.
*   **[Process-Owned Code-Mode Session Client](https://github.com/openai/codex/pull/30112)**: Implements a supervised child-process connection with cancellation-safe ownership handoff for code-mode sessions.
*   **[Keep MCP Elicitation Routable](https://github.com/openai/codex/pull/30127)**: Ensures pending MCP tool elicitation responses remain routable even if the underlying MCP runtime is refreshed due to environment changes.

## 5. Feature Request Trends
*   **Enhanced Rate Limit Transparency & Stability**: The dominant theme in issues is the demand for predictable and transparent rate-limiting. Users want clear explanations for sudden spikes in token costs and consistent quota accounting.
*   **Robust MCP Authentication Management**: There is a strong push for automated, seamless OAuth token refreshes for MCP servers, particularly for routed and Streamable HTTP connections, to prevent session breakage.
*   **Cross-Platform Consistency**: Users are requesting parity between CLI, Desktop, and IDE extensions, specifically regarding proxy support (now added for macOS), sandbox behavior, and session restoration.

## 6. Developer Pain Points
*   **Unpredictable Usage Costs**: The primary friction point is the inability to predict token consumption, with multiple reports of quotas draining instantly or rates changing dramatically without warning.
*   **Resource Exhaustion on macOS**: The interaction between Codex Desktop and macOS security daemons (`syspolicyd`, `trustd`) is causing system instability and high resource usage, affecting the user experience on Apple Silicon.
*   **Session Integrity Issues**: Problems with auto-compaction losing context, resumed sessions lacking required `function_call_output` data, and stale permission contexts during `/goal` continuations are disrupting complex coding workflows.
*   **Authentication Friction**: Legacy phone number requirements blocking OAuth-authenticated users and failures in MCP token refreshes create unnecessary barriers to entry and daily usage.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-06-26

### 1. Today's Highlights
The Gemini CLI team released **v0.51.0-nightly** and **v0.50.0-preview.1**, focusing on stabilizing CI/CD pipelines and preventing bad NPM releases. Significant attention is being paid to agent reliability, with critical discussions surrounding subagent recovery failures, generalist agent hangs, and persistent browser agent issues on Wayland. Security improvements include fixes for OAuth socket reuse and deterministic redaction in Auto Memory.

### 2. Releases
*   **v0.51.0-nightly.20260626.gb14416447**
    *   **Key Changes:** Fixed CI jobs that crashed during promotion of bad NPM releases; ensured integration tests run before publishing to prevent dangling tags. Also includes fixes for `no_proxy` tests and workspace binary shadowing during release verification.
    *   [View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260626.gb14416447)
*   **v0.50.0-preview.1**
    *   **Key Changes:** Addressed `npm ci` ignoring scripts during release verification; implemented dependency injection for the tool registry.
    *   [View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1)

### 3. Hot Issues
1.  **Subagent Recovery Failure (#22323):** `codebase_investigator` incorrectly reports success after hitting turn limits, masking interruptions. *(8 comments, 2 👍)*
    [Link](https://github.com/google-gemini/gemini-cli/issues/22323)
2.  **Generalist Agent Hangs (#21409):** The generalist agent freezes indefinitely on simple tasks (e.g., folder creation), requiring manual cancellation. *(7 comments, 8 👍)*
    [Link](https://github.com/google-gemini/gemini-cli/issues/21409)
3.  **Robust Component-Level Evals (#24353):** Epic to improve behavioral evaluation infrastructure, addressing gaps in the current 76-test suite. *(7 comments)*
    [Link](https://github.com/google-gemini/gemini-cli/issues/24353)
4.  **AST-Aware File Reads Impact (#22745):** Investigation into whether AST-aware tools can reduce token noise and improve precision in codebase mapping. *(7 comments, 1 👍)*
    [Link](https://github.com/google-gemini/gemini-cli/issues/22745)
5.  **Low Usage of Skills/Sub-agents (#21968):** Users report the model rarely uses custom skills or sub-agents unless explicitly instructed, indicating a prompt or routing issue. *(6 comments)*
    [Link](https://github.com/google-gemini/gemini-cli/issues/21968)
6.  **Deterministic Redaction & Logging (#26525):** Security concern regarding Auto Memory sending unredacted transcripts to models before extraction occurs. *(5 comments)*
    [Link](https://github.com/google-gemini/gemini-cli/issues/26525)
7.  **Auto Memory Infinite Retries (#26522):** Low-signal sessions are retried indefinitely because the extraction agent skips them without marking them as processed. *(5 comments)*
    [Link](https://github.com/google-gemini/gemini-cli/issues/26522)
8.  **Shell Command Stuck State (#25166):** Simple CLI commands leave the shell in a "Waiting input" state even after completion, causing hangs. *(4 comments, 3 👍)*
    [Link](https://github.com/google-gemini/gemini-cli/issues/25166)
9.  **Wayland Browser Agent Failure (#21983):** The browser subagent fails to terminate correctly on Wayland environments. *(4 comments, 1 👍)*
    [Link](https://github.com/google-gemini/gemini-cli/issues/21983)
10. **Symlink Agent Recognition (#20079):** Subagents defined via symlinks in `~/.gemini/agents/` are not recognized, breaking modular agent setups. *(4 comments)*
    [Link](https://github.com/google-gemini/gemini-cli/issues/20079)

### 4. Key PR Progress
1.  **OAuth Socket Reuse Fix (#28103):** Resolves "Premature close" errors during OAuth token exchange caused by Node.js security fixes for CVE-2026-48931.
    [Link](https://github.com/google-gemini/gemini-cli/pull/28103)
2.  **Cloud Run Webhook Service (#28015):** Implements a new ingestion service for the Caretaker Agent to handle GitHub webhooks securely via Firestore and Pub/Sub.
    [Link](https://github.com/google-gemini/gemini-cli/pull/28015)
3.  **Thought Leakage Resolution (#27971):** Fixes an issue where internal model monologues leak into history turns, causing infinite loops or confused reasoning.
    [Link](https://github.com/google-gemini/gemini-cli/pull/27971)
4.  **MCP Resource Wrapping (#27979):** Ensures `read_mcp_resource` output is wrapped with `wrapUntrusted()` to maintain consistency and security with other MCP tools.
    [Link](https://github.com/google-gemini/gemini-cli/pull/27979)
5.  **Stale Topic Update Fix (#28153):** Prevents `update_topic` calls from persisting to shared state after a session reset (`/clear`).
    [Link](https://github.com/google-gemini/gemini-cli/pull/28153)
6.  **Vertex AI Endpoint Routing (#28145):** Updates base URLs to route correctly to Vertex AI official Representative Endpoints (US/EU) based on `GOOGLE_CLOUD_LOCATION`.
    [Link](https://github.com/google-gemini/gemini-cli/pull/28145)
7.  **Skill Resource Filtering (#28149):** Fixes skill resource listing to respect `.gitignore` and `.geminiignore` files, preventing sensitive or irrelevant files from being exposed to the model.
    [Link](https://github.com/google-gemini/gemini-cli/pull/28149)
8.  **Lazy Editor Detection (#28144):** Optimizes startup time on Windows by detecting available editors lazily instead of probing all known editors synchronously at module load.
    [Link](https://github.com/google-gemini/gemini-cli/pull/28144)
9.  **MCP Cross-Server Confusion (#28143):** Fixes `read_mcp_resource` returning wrong server content when multiple servers expose the same URI.
    [Link](https://github.com/google-gemini/gemini-cli/pull/28143)
10. **PTY Resize Crash Fix (#27461):** Suppresses EBADF errors when resizing PTYs that are exiting, matching upstream node-pty fixes.
    [Link](https://github.com/google-gemini/gemini-cli/pull/27461)

### 5. Feature Request Trends
*   **Improved Agent Autonomy:** Strong demand for the model to better utilize skills and sub-agents without explicit instruction (#21968) and to recognize complex states like "GOAL" success vs. failure more accurately (#22323).
*   **AST-Aware Code Navigation:** Interest in leveraging Abstract Syntax Tree analysis for more precise codebase mapping and file reading to reduce token waste (#22745, #22746).
*   **Enhanced Memory Safety:** Requests for deterministic redaction in Auto Memory and better handling of invalid patches to prevent data leakage or silent failures (#26525, #26523).
*   **Resilient Browser Agent:** Need for automatic session takeover and lock recovery in the browser agent, especially for persistent modes (#22232).

### 6. Developer Pain Points
*   **Agent Reliability & Hangs:** Recurring issues where the generalist agent hangs indefinitely (#21409) or subagents fail to recover properly (#22323), disrupting workflows.
*   **Environment-Specific Bugs:** Persistent failures in specific environments, such as Wayland for browsers (#21983) and slow startup on Windows due to synchronous editor checks (#28144).
*   **Token/Context Leaks:** Concerns about "thought leakage" into history (#27971) and insecure handling of MCP resources (#27979), requiring careful sanitization.
*   **Tool Limitations:** Frustration with the model ignoring `.gitignore` in skills (#28149) or failing to distinguish between MCP servers with overlapping URIs (#28143).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-26
**Source:** github.com/github/copilot-cli

## 1. Today's Highlights
The Copilot CLI team released **v1.0.66-0**, introducing critical stability improvements for Managed Control Plane (MCP) servers, including automatic OAuth token recovery and new experimental response budget controls. Community attention is heavily focused on authentication regressions in resumed sessions and platform-specific rendering bugs on Windows and Linux, with several high-engagement issues demanding immediate triage.

## 2. Releases
**v1.0.66-0**
*   **MCP Stability:** Added automatic recovery for OAuth-authenticated remote MCP servers after mid-session token expiration.
*   **Settings & Control:** Introduced toggles to enable/disable MCP servers directly from the list view and added experimental response budget controls in CLI settings.
*   **Observability:** Enabled managed settings to configure OpenTelemetry export for better telemetry integration.

## 3. Hot Issues
1.  **[Bug] Resumed Sessions Block Model Access** (#3596, #3680)
    *   *Why it matters:* Users cannot list models or use `/model` in resumed sessions due to a "Not authenticated" error, despite successful session resumption. This breaks workflow continuity.
    *   *Reaction:* High priority; 11 👍 on #3596. Multiple users reporting identical behavior.
2.  **[Bug] Windows Terminal Rendering & Scroll Bar Alignment** (#3501)
    *   *Why it matters:* A recent UI update introduced vertical scroll bars that cause text misalignment on Windows, severely impacting readability.
    *   *Reaction:* 9 👍; noted as a regression affecting core usability.
3.  **[Feature] List Supported Models** (#700)
    *   *Why it matters:* Lack of transparency regarding available models and multipliers hinders advanced usage and debugging.
    *   *Reaction:* Long-standing request (since Dec 2025) with 14 comments and 4 👍.
4.  **[Bug] WSL2 Clipboard Failure on ARM64** (#3534)
    *   *Why it matters:* `/copy` commands fail in WSL2 ARM64 environments due to `cmd.exe` quoting issues, breaking basic copy-paste functionality.
    *   *Reaction:* 4 👍; specific but critical for WSL developers.
5.  **[Bug] Voice Mode Fails on Corporate Networks** (#3636)
    *   *Why it matters:* Voice mode activation fails if the model catalog is unreachable (e.g., behind corporate VPNs), disabling a key feature for enterprise users.
    *   *Reaction:* 5 👍; highlights infrastructure compatibility gaps.
6.  **[Plugin] Silent Command Rewrite via Hooks** (#2643)
    *   *Why it matters:* `preToolUse` hooks cannot suppress confirmation dialogs when rewriting commands, forcing unnecessary user interaction.
    *   *Reaction:* 12 comments; crucial for automation-heavy workflows.
7.  **[Bug] AppImage LD_LIBRARY_PATH Leak on Linux** (#3925)
    *   *Why it matters:* Bundled library paths leak into child processes (git), causing HTTPS failures and blocking session initialization.
    *   *Reaction:* Closed but indicative of packaging fragility.
8.  **[Feature] Enterprise Server-Managed Settings** (#3909)
    *   *Why it matters:* Org admins lack a mechanism to push configurations (env vars) to local CLI installs, limiting enterprise governance.
    *   *Reaction:* 2 comments; high value for IT administrators.
9.  **[Bug] Mouse Tracking Disabled on Exit** (#3876)
    *   *Why it matters:* Terminal mouse scrolling breaks after exiting Copilot CLI, requiring manual terminal reset.
    *   *Reaction:* Closed; affects all terminal users.
10. **[UX] Escape Key Behavior** (#3692)
    *   *Why it matters:* Pressing Escape during a running task discards queued prompts instead of canceling the task and focusing the queue, leading to data loss.
    *   *Reaction:* 2 comments; intuitive UX expectation mismatch.

## 4. Key PR Progress
*Note: Only 1 PR was observed in the last 24 hours.*

1.  **#3928: Add .gitignore and settings configuration**
    *   *Status:* Open
    *   *Summary:* Adds standard `.gitignore` patterns and default settings configuration to streamline project setup.
    *   *URL:* [github/copilot-cli PR #3928](https://github.com/github/copilot-cli/pull/3928)

## 5. Feature Request Trends
*   **Enterprise Governance:** Strong demand for centralized configuration management, specifically pushing env vars and settings from org admins to local CLI instances (#3909).
*   **Transparency & Observability:** Requests for detailed model listings (#700), monthly AI usage quotas (#3932), and improved sub-agent visibility in `/tasks` (#3937) indicate a need for deeper insight into CLI operations.
*   **MCP Integration:** Users want finer control over MCP servers, including easier enable/disable toggles in UI menus (#2956, #3564) and support for Azure DevOps work items in the "Up next" panel (#3794).
*   **Fine-Grained Theming:** Beyond basic dark/light modes, developers are requesting per-element customization for accessibility and aesthetic preference (#2123).

## 6. Developer Pain Points
*   **Session State & Authentication Regressions:** The most significant frustration is the inability to manage models or maintain authentication integrity in resumed sessions (#3596, #3680). This suggests a fragile state management layer.
*   **Platform-Specific UI Bugs:** Windows and Linux users are experiencing consistent rendering and clipboard issues (#3501, #3534, #3925), indicating insufficient cross-platform testing for recent UI changes.
*   **Hook Limitations:** Plugin developers are constrained by the inability to silently rewrite commands via `preToolUse` hooks (#2643), forcing interactive prompts that disrupt automation.
*   **Network Sensitivity:** The CLI struggles with restricted network environments (corporate VPNs) for features like voice mode (#3636), lacking robust offline or fallback mechanisms.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-06-26
**Source:** github.com/MoonshotAI/kimi-cli

### 1. Today's Highlights
The Kimi Code CLI community reported two critical stability issues affecting version 0.19.2, specifically regarding UI rendering instability on Linux and functional errors with MCP tool integration on Windows. No new releases or pull requests were published in the last 24 hours, indicating a focus on bug resolution rather than feature deployment.

### 2. Releases
No new releases were published in the last 24 hours. The latest stable version under discussion remains **v0.19.2**.

### 3. Hot Issues
*   **[BUG] MCP Tools Integration Failure (#2475)**
    *   **Link:** [MoonshotAI/kimi-cli Issue #2475](https://github.com/MoonshotAI/kimi-cli/issues/2475)
    *   **Why it matters:** Users attempting to integrate large-scale Model Context Protocol (MCP) servers (specifically those with 200+ tools) are encountering failures. This impacts developers relying on extensive external toolchains within their CLI workflow.
    *   **Community Reaction:** Currently 0 comments/likes, but the specificity of the error suggests a potential parsing or timeout limit issue for high-volume tool definitions.

*   **[BUG] UI Rendering Instability & Screen Shaking (#2474)**
    *   **Link:** [MoonshotAI/kimi-cli Issue #2474](https://github.com/MoonshotAI/kimi-cli/issues/2474)
    *   **Why it matters:** The CLI interface is experiencing severe visual glitches, including "shaking" and full conversation re-renders. This degrades the user experience significantly, particularly for users on Linux environments running the K2.7 Code thinking model.
    *   **Community Reaction:** 0 comments/likes. The report highlights a cross-platform inconsistency, as the previous issue was Windows-specific.

### 4. Key PR Progress
No new Pull Requests were updated or merged in the last 24 hours.

### 5. Feature Request Trends
Based on the current issues, the implicit demand is for:
*   **Robust MCP Support:** Enhanced handling for large-scale MCP server configurations (>200 tools), suggesting a need for better pagination, batching, or connection stability mechanisms.
*   **UI Stability Improvements:** Fixes for terminal rendering engines to prevent involuntary re-renders and screen flickering, ensuring a consistent text-based interface.

### 6. Developer Pain Points
*   **UI/UX Instability:** Developers are frustrated by visual artifacts ("shaking," "re-rendering") that disrupt coding sessions, particularly on Linux systems.
*   **Toolchain Integration Limits:** There is a specific pain point regarding the scalability of MCP integrations, where existing implementations fail when dealing with a high number of available tools.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-06-26
**Source:** github.com/anomalyco/opencode

## 1. Today's Highlights
OpenCode v1.17.11 has been released, introducing critical session snapshot/revert capabilities and fixing MCP OAuth URL visibility. Significant community attention is focused on resolving Windows-specific stability regressions, particularly Bun segmentation faults and Desktop configuration errors introduced in recent versions. Concurrently, core development is advancing the V2 layout infrastructure, including session styling refinements and standalone CLI flows.

## 2. Releases
**v1.17.11**
*   **Core Improvements:** Added session snapshots and revert controls, allowing users to roll back sessions to earlier messages, including associated file changes.
*   **Bugfixes:** Ensured MCP OAuth URLs are always printed to facilitate manual sign-in when the browser flow fails to open automatically.
*   **Desktop:** Added Chrome-styled UI elements (summary truncated in source).

## 3. Hot Issues
*   **#20695: Memory Megathread** [OPEN]
    *   **Why it matters:** Centralized tracking for scattered memory leak reports. Requires community assistance in collecting heap snapshots to diagnose root causes.
    *   **Reaction:** 103 comments, 74 👍. High engagement indicates widespread concern over resource consumption.
*   **#33742: Bun Segmentation Fault on Windows (v1.17.10)** [OPEN]
    *   **Why it matters:** Critical regression causing crashes on Windows after upgrading to v1.17.10. Users report stability returning only upon downgrading to v1.17.9.
    *   **Reaction:** 45 comments, 42 👍. Urgent priority for Windows users.
*   **#15585: "Free Usage Exceed" Error on Free Models** [CLOSED]
    *   **Why it matters:** Clarified confusion regarding usage limits on free-tier models (e.g., Big Pickle). Users reported false positive errors during long sessions.
    *   **Reaction:** 52 comments. Highlights friction around free model reliability.
*   **#16610: Startup Hang due to inotify Limits** [OPEN]
    *   **Why it matters:** Opencode hangs if `fs.inotify.max_user_instances` is low and a `.git` repo is present. Impacts Linux users with strict kernel parameters.
    *   **Reaction:** 14 comments, 7 👍. Niche but impactful for specific dev environments.
*   **#33399: Random 99-100% CPU Utilization** [OPEN]
    *   **Why it matters:** Opencode becomes unresponsive with high fan noise due to CPU spikes. Unclear cause, affecting general usability.
    *   **Reaction:** 6 comments. Indicates potential background process issues.
*   **#33938: ConfigInvalidError on Desktop Upgrade** [OPEN]
    *   **Why it matters:** Post-upgrade to v1.17.11, Windows Desktop users face `ConfigInvalidError` and missing sessions in the sidebar.
    *   **Reaction:** 3 comments. Directly impacts the latest release stability.
*   **#32821: GLM-5.2 API 400 Error** [OPEN]
    *   **Why it matters:** Specific integration bug with GLM-5.2 via OpenCode Go, where content format mismatch causes validation errors.
    *   **Reaction:** 8 comments. Relevant for users of non-standard API providers.
*   **#15676: Bun Crash During Typing** [OPEN]
    *   **Why it matters:** General instability report of Bun crashing mid-interaction, preventing copy-paste recovery.
    *   **Reaction:** 11 comments, 1 👍. Reinforces concerns about Bun stability on certain platforms.
*   **#22227: Slow Startup Time** [OPEN]
    *   **Why it matters:** Persistent complaint about 1-minute startup times.
    *   **Reaction:** 4 comments, 4 👍. Performance regression or legacy bottleneck.
*   **#33903: Effect.tryPromise Error Persisting** [OPEN]
    *   **Why it matters:** Related to the Bun segfault issue (#33742); users report persistent errors even after reinstall/downgrade attempts on Windows.
    *   **Reaction:** 2 comments, 1 👍. Suggests the Windows fix is incomplete.

## 4. Key PR Progress
*   **#33860: Refine Session UI Styling** [OPEN]
    *   Updates markdown/timeline UI to use v2 tokens and fixes inline code path detection.
*   **#30352: Show Build/Plan Agent Picker in V2 Layout** [CLOSED/Merged]
    *   Fixes #30360 by un-hiding the agent picker in the new layout, restoring functionality for build/plan modes.
*   **#33822: Use Bun Canary for Beta Channel** [OPEN]
    *   Switches CI to Bun canary builds to address the frequent Windows segfaults seen in stable releases.
*   **#33979: Normalize Tooltip Trigger Layout** [OPEN]
    *   Fixes UI misalignment in tooltips by normalizing flex layouts, ensuring consistent heights with control buttons.
*   **#33922: Gate Session Redesign to New Layout** [CLOSED/Merged]
    *   Isolates visual changes from PR #33860 behind the `newLayoutDesigns` setting to prevent breaking the legacy UI.
*   **#33974: Enable Auto-Accept in Session Settings** [CLOSED/Merged]
    *   Centralizes settings dialog logic and ensures correct route scoping for server providers.
*   **#33989: Update OpenTUI to 0.4.2** [OPEN]
    *   Dependency update addressing performance and stability issues linked to #33399 and #21470.
*   **#33988: Scaffold MCP Service** [OPEN]
    *   Introduces a foundational `MCP.Service` skeleton with lifecycle management (connect/disconnect) and configurable timeouts.
*   **#33711: Hide MCP Access Token Prefix** [CLOSED/Merged]
    *   Security improvement: replaces printing of the first 20 chars of OAuth tokens in debug logs with masked output.
*   **#33281: Standalone V2 Session Flow** [OPEN]
    *   Adds `--standalone` mode for the CLI, running an authenticated private server to support V2 APIs and session persistence outside the main TUI.

## 5. Feature Request Trends
*   **Session State Management:** Strong demand for granular control over session history, evidenced by the new revert feature and requests for better metadata handling (#33964).
*   **Provider & Model Flexibility:** Requests for auto-detection of models from local providers like LM Studio (#23327) and better handling of obscure API formats (GLM-5.2).
*   **Configuration Granularity:** Users want configurable OAuth callback hosts (#33966) and distinct startup vs. request timeouts for MCP servers (#33977).
*   **Plugin/Event Integration:** Need for better event emission (e.g., session selection in TUI) to allow plugins to react to user navigation (#31051).

## 6. Developer Pain Points
*   **Windows Stability:** The most acute pain point is the instability on Windows, specifically Bun segmentation faults (#33742) and configuration errors post-update (#33938). This is driving users to downgrade or seek beta channels.
*   **Performance Degradation:** Reports of high CPU usage (#33399), slow startup (#22227), and delays when loading git changes (#33952) suggest resource management issues are impacting daily workflow.
*   **Context & Token Management:** Users are frustrated with ineffective context compression (#17557) and unpredictable prompt caching costs (#31348), leading to higher API bills and slower responses.
*   **UI/UX Consistency:** The transition to the V2 layout has caused regressions in agent pickers (#30360) and keyboard shortcut forwarding in IDE terminals (#27006), creating friction for power users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-06-26

### 1. Today's Highlights
The Pi development team addressed critical stability issues in the coding agent’s RPC layer, removing hardcoded timeouts that caused failures with long-running MCP servers. Significant attention was paid to TUI robustness, with fixes for terminal width crashes, scroll-jumping behaviors, and custom widget rendering order. Additionally, an experimental orchestrator package was introduced to manage local Pi instance lifecycles, signaling a move toward more complex multi-instance workflows.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **#4945: openai-codex Connection Reliability Issues** [OPEN]
    *   **Why it matters:** Users report the TUI getting stuck on "Working..." without error feedback, requiring manual interruption. This impacts core reliability for Codex/GPT-5.5 users.
    *   **Community Reaction:** High engagement (71 comments, 30 likes) indicates widespread frustration with recovery mechanisms.
    *   [Link](https://github.com/earendil-works/pi/issues/4945)

*   **#5825: Streaming markdown forces scroll to bottom** [OPEN]
    *   **Why it matters:** A UX bug where enabling `clear on shrink` causes involuntary scrolling, disrupting the reading experience during fast streaming.
    *   **Community Reaction:** Noted by core contributors (xl0), highlighting tension between auto-scroll convenience and user control.
    *   [Link](https://github.com/earendil-works/pi/issues/5825)

*   **#6050: TUI full redraw clears terminal scrollback** [CLOSED]
    *   **Why it matters:** Root cause analysis revealed that frequent UI updates (editor, footer, headers) trigger destructive redraws that wipe terminal history.
    *   **Community Reaction:** Resolved, but highlights performance costs of the current TUI rendering engine.
    *   [Link](https://github.com/earendil-works/pi/issues/6050)

*   **#5595: openai-completions maxTokens not passing through** [CLOSED]
    *   **Why it matters:** Providers like Together.ai were ignoring `maxTokens` settings for reasoning models (e.g., DeepSeek v4pro), leading to unexpected truncation.
    *   **Community Reaction:** Critical for users relying on precise output control for expensive or lengthy reasoning tasks.
    *   [Link](https://github.com/earendil-works/pi/issues/5595)

*   **#5989: pi update broke extension pi-lovely-codex** [CLOSED]
    *   **Why it matters:** Demonstrates breaking changes in the extension loading mechanism after recent updates, causing immediate compatibility failures.
    *   **Community Reaction:** Raises concerns about extension API stability and backward compatibility guarantees.
    *   [Link](https://github.com/earendil-works/pi/issues/5989)

*   **#6060: TUI footer crashes on tool-call-only sessions** [CLOSED]
    *   **Why it matters:** An uncaught `TypeError` when rendering token stats for sessions containing only tool calls (no text content) caused immediate crashes.
    *   **Community Reaction:** Shows gaps in edge-case handling for the compaction and stats estimation logic.
    *   [Link](https://github.com/earendil-works/pi/issues/6060)

*   **#6002: SessionManager.open() silently truncates non-session files** [CLOSED]
    *   **Why it matters:** A dangerous bug where pointing `--session` at a random file (e.g., NDJSON logs) would overwrite and destroy the file with a minimal JSON header.
    *   **Community Reaction:** Strong negative sentiment regarding lack of safety checks/warnings for destructive operations.
    *   [Link](https://github.com/earendil-works/pi/issues/6002)

*   **#6061: MiniMax-M2.7-highspeed context budget smaller than expected** [CLOSED]
    *   **Why it matters:** Built-in provider configuration failed to account for actual context limits of specific MiniMax models, causing premature termination errors.
    *   **Community Reaction:** Highlights the need for dynamic context limit detection rather than static configuration.
    *   [Link](https://github.com/earendil-works/pi/issues/6061)

*   **#6073: TUI viewport jumps when expanding tool output inside tmux** [CLOSED]
    *   **Why it matters:** Specific to `tmux` users, toggling tool output caused visual glitches due to fallback full-redraws interfering with terminal multiplexers.
    *   **Community Reaction:** Confirms ongoing challenges with cross-terminal compatibility for advanced TUI features.
    *   [Link](https://github.com/earendil-works/pi/issues/6073)

*   **#5593: Tab-completing slash command inserts trailing space** [OPEN]
    *   **Why it matters:** A subtle UX bug where auto-completing `/command` adds a space, preventing subsequent argument autocompletion triggers.
    *   **Community Reaction:** Minor but annoying friction point for power users relying on keyboard shortcuts.
    *   [Link](https://github.com/earendil-works/pi/issues/5593)

### 4. Key PR Progress
*   **#6087: fix(coding-agent): remove hardcoded RPC wait timeout** [CLOSED]
    *   **Summary:** Removes the rigid 60-second cap in `RpcClient` for `waitForIdle`, `collectEvents`, and `promptAndWait`. Introduces configurable `waitTimeoutMs` to support long-running MCP servers.
    *   [Link](https://github.com/earendil-works/pi/pull/6087)

*   **#6084: fix(tui): preserve custom widget render order** [CLOSED]
    *   **Summary:** Fixes a bug where high-frequency background ticks caused custom widgets to reorder incorrectly due to `Map` mutation during refresh cycles.
    *   [Link](https://github.com/earendil-works/pi/pull/6084)

*   **#6081: feat: add #RRGGBBAA alpha support for theme colors** [CLOSED]
    *   **Summary:** Enables 8-digit hex color codes with alpha channels. Alpha values are pre-blended with the terminal background at load time to ensure compatibility with ANSI limitations.
    *   [Link](https://github.com/earendil-works/pi/pull/6081)

*   **#6078: feat(coding-agent): add get_entries and get_tree RPC commands** [OPEN]
    *   **Summary:** Exposes `get_entries` (with cursor support) and `get_tree` RPC commands, allowing external drivers to inspect session structure and history efficiently.
    *   [Link](https://github.com/earendil-works/pi/pull/6078)

*   **#6074: fix(coding-agent): avoid pre-prompt compaction continue** [OPEN]
    *   **Summary:** Addresses logic errors where compaction processes might incorrectly continue or interfere with pre-prompt states.
    *   [Link](https://github.com/earendil-works/pi/pull/6074)

*   **#5832: fix(ai): surface provider HTTP error body** [CLOSED]
    *   **Summary:** Ensures that opaque SDK errors (e.g., `UnknownError`) now display the actual HTTP response body from providers behind proxies, aiding debugging for 403/500 errors.
    *   [Link](https://github.com/earendil-works/pi/pull/5832)

*   **#6064: feat(experimental): pi orchestrator** [OPEN]
    *   **Summary:** Introduces a local daemon (`@earendil-works/pi-orchestrator`) communicating via IPC socket to manage lifecycle (start/list/stop) of multiple Pi instances.
    *   [Link](https://github.com/earendil-works/pi/pull/6064)

*   **#6067: fix(prompt): add scope-discipline rule** [CLOSED]
    *   **Summary:** Updates system prompt to enforce stricter scope adherence, preventing the agent from modifying unrelated files or over-engineering solutions.
    *   [Link](https://github.com/earendil-works/pi/pull/6067)

*   **#5515: feat(coding-agent): add alwaysTrust setting** [CLOSED]
    *   **Summary:** Adds a flag to disable project trust gating entirely, useful for automated pipelines or trusted environments where manual confirmation is undesirable.
    *   [Link](https://github.com/earendil-works/pi/pull/5515)

*   **#5270: Ephemeral session model and thinking level selection** [CLOSED]
    *   **Summary:** Changes default behavior of `setModel` and `setThinkingLevel` to be session-scoped unless `persist: true` is explicitly set, preventing accidental global config overwrites.
    *   [Link](https://github.com/earendil-works/pi/pull/5270)

### 5. Feature Request Trends
*   **Advanced Session Management:** There is a strong push for granular control over sessions, including ephemeral vs. persistent modes (#5270), deterministic in-memory IDs (#6070), and hierarchical inspection via RPC (#5810, #6078).
*   **Extension API Maturity:** Developers are requesting better extension hooks, specifically payload transforms for providers (#6089) and stable interfaces for replacing editor components (#6066).
*   **Observability & Debugging:** Requests for detailed reasoning token counts (#6057), durable Human-in-the-Loop (HITL) interrupts (#5901), and better error visibility from providers (#5832) indicate a need for deeper introspection into AI decision-making.
*   **Packaging & Deployment:** Interest in self-contained binaries to avoid Node.js version conflicts (#6065) suggests a desire for easier distribution and reduced environment friction.

### 6. Developer Pain Points
*   **TUI Stability & Rendering:** Recurring crashes and visual glitches in the TUI (scrollback clearing, viewport jumping, width overflows) remain a significant burden. The trade-off between real-time responsiveness and terminal compatibility (especially in `tmux`) is a persistent challenge.
*   **Provider Configuration Fragility:** Users frequently encounter issues where provider-specific settings (context windows, max tokens, reasoning levels) are ignored or misconfigured, leading to silent failures or abrupt terminations.
*   **Extension Compatibility Risks:** Recent updates have broken existing extensions (#5989), and the extension API lacks robust lifecycle management for components like editors and input histories, leading to state loss upon resume.
*   **Silent Data Loss:** The incident where `SessionManager.open()` silently overwrote non-session files (#6002) highlights a critical lack of safety rails in core file operations, eroding trust in the tool's reliability for data preservation.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-06-26

## 1. Today's Highlights
The Qwen Code community is currently addressing critical stability issues, particularly regarding Windows resource leaks causing OOM errors and persistent streaming API timeouts. Simultaneously, significant progress is being made on core extensibility features, including new autocomplete support for extensions, bundled extension-creation skills, and improved daemon architecture.

## 2. Releases
**None.** There were no new releases published in the last 24 hours.

## 3. Hot Issues
*   **[Windows OOM Bug](https://github.com/QwenLM/qwen-code/issues/5873):** Users report that using tools on Windows spawns persistent PowerShell processes that are never closed, leading to Out-Of-Memory crashes. This is marked as P1 and highly urgent.
*   **[Streaming Setup Timeouts](https://github.com/QwenLM/qwen-code/issues/239):** A recurring bug where streaming setup times out (after 64s or 6s), often linked to input complexity or network latency. This issue has high community engagement (16 comments) and multiple reports.
*   **[Project-Level Insight](https://github.com/QwenLM/qwen-code/issues/2040):** A major feature request to move "Insight" functionality from machine-level to project-level granularity, allowing better isolation and analysis for multi-project workflows.
*   **[Chinese Path Handling Bug](https://github.com/QwenLM/qwen-code/issues/1897):** An LLM hallucination bug where tool calls incorrectly insert spaces into Chinese directory paths (e.g., `DNF 私服研究`), causing validation failures.
*   **[Multi-Agent Collaboration](https://github.com/QwenLM/qwen-code/issues/1815):** Strong interest in a native "Agent Team" feature where a lead agent coordinates multiple teammates, addressing the growing trend of complex multi-agent workflows.
*   **[Qwen3 30b Tool Call Failures](https://github.com/QwenLM/qwen-code/issues/535):** Specific compatibility issues with Qwen3 30b models where edit/write tool calls fail due to type mismatches (object vs. string).
*   **[Context Window Compression](https://github.com/QwenLM/qwen-code/issues/1924):** Users report that context compression becomes ineffective or buggy when limits are applied, suggesting issues with the underlying compression logic.
*   **[Global AGENTS.md Instructions](https://github.com/QwenLM/qwen-code/issues/4534):** A request to support global `~/.agents/AGENTS.md` to prevent duplicate prompting across different agent CLIs in multi-agent setups.
*   **[Auto-Memory Team Tier](https://github.com/QwenLM/qwen-code/issues/5867):** A feature request to add a "team" tier to auto-memory, enabling git-shared memory across users rather than just local user/project scopes.
*   **[Daemon Cold Start Latency](https://github.com/QwenLM/qwen-code/issues/4748):** Performance tracking issue aiming to reduce daemon cold start time from ~2.5s to ~1.5s, impacting the initial user experience.

## 4. Key PR Progress
*   **[Extension Autocomplete](https://github.com/QwenLM/qwen-code/pull/5849):** Adds Codex-style `@extension` mention support in CLI input, allowing users to easily reference installed extensions during conversation.
*   **[Bundled Extension Creator Skill](https://github.com/QwenLM/qwen-code/pull/5828):** Introduces a built-in skill to guide agents through scaffolding, customizing, and testing Qwen Code extensions locally.
*   **[Runtime Context Injection](https://github.com/QwenLM/qwen-code/pull/5847):** Enhances the serve API by allowing per-session dynamic context injection (e.g., operator identity) via system reminders.
*   **[Transcript View Design](https://github.com/QwenLM/qwen-code/pull/5666):** Proposes a new UI design for Ctrl+O transcript viewing, removing the distinction between compact/detailed modes for a unified baseline.
*   **[Autofix Workflow Tuning](https://github.com/QwenLM/qwen-code/pull/5860):** Loosens filters in the scheduled autofix CI workflow to ensure the agent can actually find and fix unattended bugs.
*   **[Daemon Route Refactoring](https://github.com/QwenLM/qwen-code/pull/5809):** Refactors the `qwen serve` daemon into focused internal modules for better maintainability of request handling and telemetry.
*   **[PreToolUse TUI Confirmation](https://github.com/QwenLM/qwen-code/pull/5629):** Implements native TUI confirmation for `PreToolUse` hooks that return `permissionDecision: "ask"`, improving security and user control.
*   **[Standalone Archive Build Fix](https://github.com/QwenLM/qwen-code/pull/5878):** Fixes build failures by ignoring `dist/node_modules` during standalone archive packaging, ensuring cleaner distribution artifacts.
*   **[Desktop Voice Dictation](https://github.com/QwenLM/qwen-code/pull/5856):** Brings the `/voice` dictation feature to the desktop app, aligning it with CLI and Web Shell capabilities.
*   **[Web-Shell Code Highlighting](https://github.com/QwenLM/qwen-code/pull/5869):** Improves the web shell experience by adding live syntax highlighting for streaming code blocks and fixing fence-language aliases.

## 5. Feature Request Trends
*   **Advanced Extensibility:** There is a strong push for better extension management, including `@mention` support, bundled creation skills, and global instruction files (`AGENTS.md`).
*   **Memory & Collaboration:** Users are requesting deeper memory capabilities, specifically shared/team-tier memory across git repos and native multi-agent collaboration frameworks ("Agent Teams").
*   **UI/UX Refinement:** Requests focus on reducing visual noise (moving summaries to loading indicators), improving status line visibility by default, and enhancing transcript readability.
*   **Cross-Platform Consistency:** Features like voice dictation and specific CLI behaviors are being ported to Desktop and Web Shell to ensure parity across interfaces.

## 6. Developer Pain Points
*   **Windows Stability:** The most acute pain point is the Windows-specific resource leak (PowerShell processes not closing), which causes severe instability and OOM errors.
*   **Streaming Reliability:** Persistent issues with streaming timeouts and network configuration suggest that the current streaming implementation is fragile under various network conditions or model loads.
*   **LLM Hallucinations in Paths:** The model frequently mishandles non-ASCII characters (specifically Chinese paths), inserting spaces and breaking file operations.
*   **Configuration Conflicts:** Users struggle with conflicting memory sources (local vs. project `QWEN.md`) and credential persistence issues (`.env` files being ignored on updates).
*   **Tool Call Type Errors:** Specific model versions (like Qwen3 30b) exhibit consistent failures in tool parameter formatting (objects instead of strings), requiring workarounds.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-06-26
**Source:** `github.com/Hmbown/DeepSeek-TUI` (Canonical: `Hmbown/CodeWhale`)

## 1. Today's Highlights
The community is actively migrating from the legacy `deepseek-tui` npm package to the canonical **CodeWhale** project, with v0.8.65 establishing new fleet loadout and multi-model routing standards. Significant engineering effort is concentrated on the **v0.8.66 Hotbar MVP**, addressing UI state machines, safety gates, and configuration persistence, while critical bug fixes target stale sub-agent reconciliation and approval mode inconsistencies.

## 2. Releases
*   **v0.8.65**: Released as the canonical version for the **CodeWhale** project.
    *   **Deprecation Notice**: The legacy `deepseek-tui` npm package is deprecated and will receive no further updates.
    *   **Migration**: Users on v0.8.x legacy versions must follow `docs/REBRAND.md` to migrate to CodeWhale.
    *   **Core Changes**: Introduces the shared model/loadout selector and "Fleet loadout auto" mode for resolving compute loads for specific roles.

## 3. Hot Issues
*   **[Fleet Model Classes & Auto Loadout](https://github.com/Hmbown/CodeWhale/issues/3205)**
    *   *Why it matters*: Defines the core mechanism for automatic model/provider selection across TUI, CLI, and sub-agents. Critical for multi-model compatibility.
    *   *Reaction*: High engagement (10 comments); central to v0.8.65 goals.
*   **[Multi-model Compatibility & Provider Docs](https://github.com/Hmbown/CodeWhale/issues/2300)**
    *   *Why it matters*: Addresses confusion between `provider = vllm` and `provider = openai` configurations, serving as an acceptance fixture for v0.8.65 routing.
    *   *Reaction*: 7 comments; highlights ongoing documentation gaps for local vs. remote endpoints.
*   **[SSE Multi-Agent Timeout on Windows](https://github.com/Hmbown/CodeWhale/issues/1679)**
    *   *Why it matters*: Reports a persistent 45s timeout and UI corruption when running 4 parallel agents on Windows 11, forcing a degradation to serial execution.
    *   *Reaction*: Active debugging; impacts cross-platform reliability.
*   **[Plan/Agent Mode Confusion](https://github.com/Hmbown/CodeWhale/issues/3568)**
    *   *Why it matters*: Agents fail to detect mode switches, leading to incorrect file modification attempts in Plan mode.
    *   *Reaction*: Users report recurring logic errors; 1 👍 indicates strong interest in a fix.
*   **[Approval Modal Cancellation (v0.8.66)](https://github.com/Hmbown/CodeWhale/issues/3466)**
    *   *Why it matters*: Users find the new "destructive approval" requirement burdensome compared to previous logic.
    *   *Reaction*: Closed; reflects tension between safety and UX friction.
*   **[Telemetry: Visible Token Context](https://github.com/Hmbown/CodeWhale/issues/2666)**
    *   *Why it matters*: Agents lack visibility into token budgets and context pressure during long tasks, leading to inefficiencies.
    *   *Reaction*: Closed; resolved by exposing resource usage in turn metadata.
*   **[Hotbar: MMO-style Quick Action Bar](https://github.com/Hmbown/CodeWhale/issues/2061)**
    *   *Why it matters*: Umbrella issue for adding an 8-slot command bar to reduce reliance on slash commands and menus.
    *   *Reaction*: Drives significant development effort for v0.8.66.
*   **[Rust-based Native Runtime Request](https://github.com/Hmbown/CodeWhale/issues/3541)**
    *   *Why it matters*: Proposes moving from Node.js/TSC to Rust to reduce cold-start latency and memory footprint.
    *   *Reaction*: 3 comments; highlights performance concerns with the current JS runtime.
*   **[ACP Provider/Model Selection](https://github.com/Hmbown/CodeWhale/issues/3546)**
    *   *Why it matters*: ACP integration currently lacks control over provider/model selection, limiting flexibility for tools like Paseo.
    *   *Reaction*: Closed; feature extended to expose these options.
*   **[Session Logs: Classify Failures](https://github.com/Hmbown/CodeWhale/issues/2022)**
    *   *Why it matters*: Distinguishes between model-quality failures and environment/tool failures to improve triage accuracy.
    *   *Reaction*: Closed; implemented via redacted diagnostic classifiers.

## 4. Key PR Progress
*   **[PR #3624] Codex/LSP PHP Custom Servers**: Adds PHP to built-in LSP registry and introduces `[lsp.custom]` config for arbitrary language servers (Ruby, C#, Swift, etc.).
*   **[PR #3626] Test: Stale Single-Agent Status Reconciliation**: Adds regression coverage for handling stale sub-agents, ensuring they are marked terminal/cancelled rather than hanging.
*   **[PR #3617] Test: Token Cache Report Fixtures**: Creates reproducible fixtures for low cache-hit ratios and high token usage issues (#3390).
*   **[PR #3621] Fix Provider Links Docs Fallback**: Corrects stale documentation URLs and adds specific Qianfan docs links.
*   **[PR #3625] Fix: Warn on Unknown Exec Tool Surface**: Prevents silent typos in `CODEWHALE_TOOL_SURFACE` by warning on unrecognized values.
*   **[PR #3623] Fix: Surface Mode Policy in Turn Metadata**: Injects active mode and policy deltas into `<turn_meta>` blocks to improve agent awareness.
*   **[PR #3622] Fix: Harden Approval Change Previews**: Enforces bounded previews for file changes in approval cards and adds Chinese localization support.
*   **[PR #3620] Fix: Reconcile Stale Subagents Before Status**: Cleans up expired sub-agents before capturing parent state to prevent "zombie" running statuses.
*   **[PR #3583] Refactor Localization**: Extracts hardcoded strings into JSON files and integrates `rust-i18n` for better internationalization management.
*   **[PR #3619] Fix: Show Proposed File Changes in Approvals**: Implements bounded diff previews within approval cards, closing the long-standing request #1846.

## 5. Feature Request Trends
1.  **Unified Command Surface (Hotbar)**: A major push to replace deep menu navigation with a configurable, 8-slot "MMO-style" hotbar for quick actions (Issues #2061, #3389, #3390+).
2.  **Runtime Performance Optimization**: Growing demand for a Rust-native client to mitigate Node.js overhead, specifically targeting cold-start times and memory usage (Issue #3541).
3.  **Enhanced Multi-Model/Fleet Management**: Requests for clearer provider/model routing, automatic loadout selection, and better visibility into token/context usage during complex agent runs (Issues #3205, #2666).
4.  **Cross-Language LSP Support**: Interest in extending built-in LSP capabilities beyond standard languages to include PHP, Ruby, C#, and others via custom configs (PR #3624).

## 6. Developer Pain Points
*   **Stale Agent States**: Recurring issues where sub-agents hang in a "running" state due to heartbeat expiration or race conditions, requiring manual reconciliation (Issues #1679, #3620).
*   **Approval Friction**: Users find the new mandatory approval workflows for destructive changes disruptive, seeking ways to bypass or streamline them (Issues #3466, #3606).
*   **Configuration Visibility**: Lack of immediate feedback on token usage, context pressure, and tool failures leads to difficult debugging sessions (Issues #2666, #2022).
*   **Windows Environment Isolation**: Issues with Windows environment variables not inheriting correctly into the CodeWhale shell, breaking build tools and sub-processes (Issue #3572).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*