# AI CLI Tools Community Digest 2026-06-27

> Generated: 2026-06-27 02:10 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Report: 2026-06-27

## 1. Ecosystem Overview
The AI CLI landscape is currently defined by a critical transition from prototype stability to enterprise-grade reliability. While major players like Anthropic and OpenAI focus on scaling context windows and managing complex agent hierarchies, the community is grappling with significant regressions in memory management, billing transparency, and cross-platform consistency. The emergence of specialized tools like DeepSeek TUI and Pi highlights a fragmentation where users seek lightweight, customizable alternatives to monolithic IDE integrations. Security and cost control remain the primary friction points across all ecosystems, driving rapid iteration on sandboxing, token usage monitoring, and session persistence.

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Key PRs (24h) | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 2 | **v2.1.195** (Patch) |
| **OpenAI Codex** | 10 | 10 | **rust-v0.143.0-alpha.26** |
| **Gemini CLI** | 10 | 10 | None (Nightly) |
| **GitHub Copilot** | 10 | 1 | **v1.0.66-1** (Beta) |
| **Kimi Code** | 3 | 2 | None |
| **OpenCode** | 10 | 10 | None |
| **Pi** | 10 | 6 | None |
| **Qwen Code** | 10 | 10 | **v0.19.2-nightly** |
| **DeepSeek TUI** | 10 | 10 | None (Stabilizing v0.8.59) |

## 3. Shared Feature Directions

*   **Agent Autonomy & Reliability:**
    *   **Tools:** Gemini CLI, OpenCode, Claude Code, OpenAI Codex.
    *   **Need:** Users demand robust sub-agent management, specifically fixing "hang" states, ensuring graceful recovery from turn limits, and preventing infinite loops in reasoning/memory processing.
*   **Cost & Billing Transparency:**
    *   **Tools:** OpenAI Codex, OpenCode, Qwen Code, DeepSeek TUI.
    *   **Need:** Critical demand for accurate token counting (Codex’s 10-20x spike reports), configurable usage limits, and clear warnings before auto-upgrading to expensive models.
*   **Session Persistence & Context Isolation:**
    *   **Tools:** GitHub Copilot, Claude Code, Pi, OpenCode.
    *   **Need:** Fixing memory leaks between repositories, ensuring conversation history survives restarts, and providing granular control over context window usage (compaction, pruning).
*   **Cross-Platform Stability:**
    *   **Tools:** All major tools.
    *   **Need:** Resolving platform-specific bugs such as Windows memory leaks (Claude/Copilot), macOS disk bloat (Codex/Pi), and Wayland/WSL compatibility (Gemini/OpenCode).

## 4. Differentiation Analysis

*   **Enterprise vs. Individual Focus:**
    *   **GitHub Copilot & Claude Code:** Heavily geared towards enterprise workflows, focusing on security (sandboxing, OAuth), compliance (code signing), and integration with existing dev stacks (CI/CD, plugins).
    *   **OpenCode & DeepSeek TUI:** Cater to power users seeking cost-efficiency and customization, emphasizing local-first architectures, flexible payment options (crypto), and lightweight TUI experiences.
*   **Technical Architecture:**
    *   **OpenAI Codex & Gemini CLI:** Utilizing complex multi-agent architectures with distinct "generalist" and "sub-agent" roles, leading to higher overhead but greater autonomy.
    *   **Pi & Kimi Code:** Focusing on streamlined, single-agent interactions with high configurability for specific providers (Friendli, Anthropic), prioritizing speed and simplicity over complex orchestration.
*   **Innovation Vectors:**
    *   **Qwen Code:** Leading in "Resumable Streams" and "Loop Task Files," targeting long-running, background automation tasks.
    *   **DeepSeek TUI:** Differentiating with "WeCom Bridge" and aggressive token slimming, appealing to regions and users prioritizing efficiency and local ecosystem integration.

## 5. Community Momentum & Maturity

*   **High Momentum & Volatility:** **OpenAI Codex** and **Gemini CLI** show the highest issue volumes and PR activity, indicating rapid feature development but also significant instability (rate limits, agent hangs). These tools are in a "move fast" phase.
*   **Maturing Stability:** **Claude Code** and **GitHub Copilot** are showing signs of maturing, with fewer chaotic spikes but persistent, high-severity platform bugs (memory leaks, context visibility). Their communities are more focused on regression fixes and enterprise-grade reliability.
*   **Niche Growth:** **OpenCode** and **DeepSeek TUI** have highly engaged, vocal communities focused on optimization and cost-control, suggesting a mature user base that values efficiency over sheer feature breadth.

## 6. Trend Signals

*   **The "Trust Deficit" in Billing:** The severe backlash in OpenAI Codex (#28879) and Qwen Code (#5819) signals that users are no longer accepting opaque token usage. Future tools must prioritize real-time cost monitoring and granular budget controls to maintain adoption.
*   **Agent Fragility as a Barrier:** Recurring issues with sub-agent hangs (Gemini), infinite loops (OpenCode), and memory leaks (Copilot) indicate that current agentic architectures are not yet robust enough for mission-critical, unattended workflows. Reliability will trump autonomy in the near term.
*   **Platform Fragmentation Demands Abstraction:** The prevalence of OS-specific bugs (Windows ARM64, macOS Electron bloat, Wayland failures) suggests a market opportunity for tools that abstract away these environmental variables, possibly through containerized or cloud-hosted agent runtimes.
*   **Rise of "Slim" Alternatives:** The focus on prompt path slimming (DeepSeek) and memory pruning (OpenCode) reflects a user fatigue with bloated, context-heavy interactions. Lightweight, efficient agents are gaining traction among cost-conscious developers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-06-27  
**Source:** `anthropics/skills` Repository Analysis

## 1. Top Skills Ranking
*Based on discussion volume, bug frequency, and feature requests in PRs and Issues.*

1.  **Frontend Design Skill Improvement**
    *   **Functionality:** Enhances clarity and actionability for generating frontend code, ensuring instructions are executable within single conversations.
    *   **Discussion:** Focus on making generic design guidance specific enough to steer behavior without ambiguity.
    *   **Status:** Open (PR #210)
    *   **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

2.  **Document Typography Skill**
    *   **Functionality:** Prevents common typographic errors in AI-generated documents, such as orphan words, widows, and numbering misalignment.
    *   **Discussion:** Addresses widespread user pain points regarding document polish and professional formatting.
    *   **Status:** Open (PR #514)
    *   **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **Skill Creator Evaluation Framework (Bug Fixes)**
    *   **Functionality:** Core infrastructure for validating and optimizing skill descriptions. Multiple PRs address critical bugs where `run_eval.py` reported 0% recall due to Windows compatibility, YAML parsing errors, and trigger detection failures.
    *   **Discussion:** High technical engagement due to broken feedback loops for developers creating new skills.
    *   **Status:** Open (PRs #1298, #1099, #1050, #1323, #539, #361, #362)
    *   **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298) | [PR #1099](https://github.com/anthropics/skills/pull/1099) | [PR #1323](https://github.com/anthropics/skills/pull/1323)

4.  **SAP-RPT-1-OSS Predictor Skill**
    *   **Functionality:** Integrates SAP’s open-source tabular foundation model for predictive analytics on business data.
    *   **Discussion:** Represents a niche but high-value enterprise integration, leveraging specific domain models.
    *   **Status:** Open (PR #181)
    *   **Link:** [PR #181](https://github.com/anthropics/skills/pull/181)

5.  **Codebase Inventory Audit Skill**
    *   **Functionality:** Systematic workflow for identifying orphaned code, unused files, and documentation gaps, producing a `CODEBASE-STATUS.md`.
    *   **Discussion:** Appeals to developers managing legacy or large-scale repositories needing maintenance automation.
    *   **Status:** Open (PR #147)
    *   **Link:** [PR #147](https://github.com/anthropics/skills/pull/147)

## 2. Community Demand Trends
*Distilled from active Issues and proposals.*

*   **Enterprise Security & Trust Boundaries:** Significant concern over community skills impersonating official Anthropic skills under the `anthropic/` namespace (Issue #492). Users demand stricter verification and namespace isolation.
*   **Organizational Collaboration:** Strong demand for org-wide skill sharing in Claude.ai, moving away from manual `.skill` file distribution via Slack/Teams (Issue #228).
*   **Agent Memory & Context Management:** Emerging interest in persistent context solutions, such as `shodh-memory` (PR #154) and `compact-memory` (Issue #1329), to reduce context window waste in long-running agents.
*   **Cross-Platform Compatibility:** High friction reported on Windows environments, particularly regarding subprocess execution, encoding (`cp1252` vs UTF-8), and path resolution in skill-creator tools (Issues #1061, #1169).
*   **MCP Integration:** Desire to expose Skills as Model Context Protocol (MCP) servers to standardize APIs for AI software (Issue #16).

## 3. High-Potential Pending Skills
*Active PRs with significant community attention or utility that may land soon.*

1.  **PDF Case-Sensitivity Fix**
    *   **Summary:** Corrects 8 case-sensitive file reference errors in the PDF skill that break functionality on Linux/macOS.
    *   **Why it matters:** Critical bug fix for a widely used built-in skill.
    *   **Link:** [PR #538](https://github.com/anthropics/skills/pull/538)

2.  **ODT Support Skill**
    *   **Summary:** Adds comprehensive support for OpenDocument Text (`.odt`) and Spreadsheet (`.ods`) creation, filling, and conversion.
    *   **Why it matters:** Fills a major gap in office document handling beyond DOCX/PDF.
    *   **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

3.  **DOCX Tracked Change Collision Fix**
    *   **Summary:** Prevents document corruption by fixing `w:id` collisions between tracked changes and existing bookmarks.
    *   **Why it matters:** Ensures reliability of the DOCX skill for complex document editing.
    *   **Link:** [PR #541](https://github.com/anthropics/skills/pull/541)

4.  **Testing Patterns Skill**
    *   **Summary:** A comprehensive skill covering unit testing, React component testing, and testing philosophy (AAA pattern, pure functions).
    *   **Why it matters:** Addresses the need for standardized, high-quality test generation across frameworks.
    *   **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

5.  **AppDeploy Skill**
    *   **Summary:** Enables direct deployment and lifecycle management of full-stack web apps via AppDeploy.
    *   **Why it matters:** Streamlines the dev-to-production workflow for web applications.
    *   **Link:** [PR #360](https://github.com/anthropics/skills/pull/360)

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust, cross-platform-compatible evaluation and creation tooling** (specifically fixing Windows bugs and YAML parsing errors in `skill-creator`) alongside **enterprise-grade security and organizational sharing features** to ensure trust and scalability.

---

# Claude Code Community Digest: 2026-06-27

## 1. Today's Highlights
Anthropic released **v2.1.195**, introducing a critical fix for MCP hook matcher exactness and a new environment variable to disable mouse interactions in fullscreen mode. Community attention is heavily focused on regressions regarding the **1M context window visibility** in the Desktop app and persistent bugs with **Opus 4.8 tool_use formatting**. Additionally, significant friction remains around Windows memory leaks and ARM64 compatibility in Cowork.

## 2. Releases
**v2.1.195**
*   **New Feature:** Added `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` to allow disabling mouse click/drag/hover in fullscreen mode while retaining wheel scrolling.
*   **Bug Fix:** Resolved an issue where hook matchers with hyphenated identifiers (e.g., `code-reviewer`, `mcp__brave-search`) were accidentally performing substring matches. They now perform exact matches.
    *   [GitHub Release: v2.1.195](https://github.com/anthropics/claude-code/releases/tag/v2.1.195)

## 3. Hot Issues
*Selected based on comment volume, upvotes, and impact on core functionality.*

1.  **[Bug] Cowork fails on ARM64 (Snapdragon X)** (#50674)
    *   **Why it matters:** Blocks usage of Claude Code on emerging ARM-based Windows devices despite passing readiness checks.
    *   **Community Reaction:** High engagement (30 comments); users are sharing workarounds for Snapdragon X optimization.
    *   [Link](https://github.com/anthropics/claude-code/issues/50674)

2.  **[Bug] 1M context window removed from Desktop Code tab model picker after v1.1.7714** (#36351)
    *   **Why it matters:** A major regression for Max plan users relying on large context capabilities for complex codebases.
    *   **Community Reaction:** Strong frustration (11 upvotes, 17 comments); confirms widespread loss of premium features post-update.
    *   [Link](https://github.com/anthropics/claude-code/issues/36351)

3.  **[Bug] Opus 4.8 repeatedly emits malformed tool_use blocks** (#63604)
    *   **Why it matters:** Causes entire responses to be discarded, breaking workflow reliability for the flagship model.
    *   **Community Reaction:** 14 upvotes; users note that v4.7 worked fine, indicating a specific regression in v4.8 parsing.
    *   [Link](https://github.com/anthropics/claude-code/issues/63604)

4.  **[Enhancement] Claude-in-Chrome: Server-side domain blocking breaks legitimate business automation** (#40173)
    *   **Why it matters:** Blocks automation on major financial sites (Wells Fargo, Schwab), impacting professional workflows.
    *   **Community Reaction:** 7 upvotes; users argue for allowlist exceptions for trusted enterprise domains.
    *   [Link](https://github.com/anthropics/claude-code/issues/40173)

5.  **[Bug] Desktop causes NTFS NonPaged Pool kernel memory leak on Windows** (#45889)
    *   **Why it matters:** Severe performance degradation (~0.5GB/min leak) affecting system stability on Windows.
    *   **Community Reaction:** Closed status suggests a fix may be in progress or acknowledged, but legacy impact remains.
    *   [Link](https://github.com/anthropics/claude-code/issues/45889)

6.  **[Bug] Plugin paths hardcoded with absolute paths fail across environments** (#31388)
    *   **Why it matters:** Hinders portability and CI/CD integration for plugin-based workflows.
    *   **Community Reaction:** 4 upvotes; highlights need for relative path support or environment-variable-driven paths.
    *   [Link](https://github.com/anthropics/claude-code/issues/31388)

7.  **[Bug] Conversation history silently lost on restart in `</> Code` tab** (#71729)
    *   **Why it matters:** Data loss incident for users in the embedded Desktop Code interface.
    *   **Community Reaction:** New issue (6 comments); urgent calls for persistence fixes.
    *   [Link](https://github.com/anthropics/claude-code/issues/71729)

8.  **[Bug] Auto-compact stopped working for third-party API providers since v2.1.161** (#65585)
    *   **Why it matters:** Regresses cost management and context efficiency for non-Anthropic model users.
    *   **Community Reaction:** 4 upvotes; indicates fragmentation in how different backends handle state.
    *   [Link](https://github.com/anthropics/claude-code/issues/65585)

9.  **[Bug] Max plan: Opus 4.8 only shows 256k context, 1M option missing** (#68287)
    *   **Why it matters:** Duplicate/related to #36351; confirms the UI bug is pervasive across Mac/Windows.
    *   **Community Reaction:** 1 upvote; reinforces the pattern of 1M context visibility issues.
    *   [Link](https://github.com/anthropics/claude-code/issues/68287)

10. **[Bug] Sandbox SOCKS5 proxy requires authentication breaking SSH git ops** (#70684)
    *   **Why it matters:** Blocks secure Git operations in sandboxed environments due to BSD `nc` limitations.
    *   **Community Reaction:** 12 upvotes; critical for security-conscious developers using sandboxes.
    *   [Link](https://github.com/anthropics/claude-code/issues/70684)

## 4. Key PR Progress
*Note: Only 2 PRs were updated in the last 24 hours.*

1.  **[docs] Sandbox prompt-approved hosts are session-scoped** (#71627)
    *   **Description:** Updates `examples/settings/README.md` to clarify that `sandbox.network.allowedDomains` approvals are session-scoped and lost on restart, preventing user confusion.
    *   [Link](https://github.com/anthropics/claude-code/pull/71627)

2.  **[Merge] Internal main branch sync** (#71530)
    *   **Description:** Standard internal merge commit. No public-facing changes detailed in summary.
    *   [Link](https://github.com/anthropics/claude-code/pull/71530)

## 5. Feature Request Trends
*   **Remote Control & Mobility:** Users increasingly want to manage concurrent sessions and take control of desktop apps from mobile/remote devices without requiring local physical access (#71731).
*   **Voice Dictation Accuracy:** Requests for custom vocabulary support to improve handling of technical acronyms and non-native accents (#71721).
*   **UI Steering Parity:** Desire for the Desktop app to support mid-task message injection (steering) like the CLI/TUI version (#71726).
*   **Prompt Suggestion Control:** Users requesting the ability to disable AI-generated prompt suggestions in the web/app interface to reduce cognitive load (#66117).

## 6. Developer Pain Points
*   **Context Window Visibility Bugs:** A recurring theme is the disappearance of the 1M context option for Max plan users in the Desktop UI (#36351, #68287, #69109, #69444). This suggests a systemic issue with model picker configuration in recent Desktop releases.
*   **Platform-Specific Instabilities:** Windows users report severe memory leaks (#45889) and authentication loops (#71717), while ARM64 users face fundamental compatibility failures in Cowork (#50674).
*   **Multibyte Character Handling:** Critical encoding issues in the TUI prompt input strip bytes in the C1 control range (0x80–0x9F), causing irrecoverable mojibake for non-ASCII languages like Thai (#71712).
*   **Agent Reliability:** Sub-agents are exhibiting unpredictable behavior, including silent switching to teammate protocols (#71723), losing results (#71644), and inconsistent sync/async execution (#69691).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-06-27

## 1. Today's Highlights
The Codex team released maintenance patch `rust-v0.142.3` and advanced the `0.143.0` alpha series with `alpha.26`. Community attention is heavily focused on severe rate-limit anomalies affecting Plus and Pro users, with reports indicating token costs have spiked 10-20x, draining budgets rapidly. Internally, significant progress is being made on remote plugin stability, WebSocket authentication improvements, and canonical turn-item persistence for rollouts.

## 2. Releases
*   **rust-v0.142.3**: A maintenance-only patch release with no user-facing changes since `0.142.2`.
    *   [Changelog](https://github.com/openai/codex/compare/rust-v0.142.2...rust-v0.142.3)
*   **rust-v0.143.0-alpha.26**: Alpha release continuing development for the next major version.
    *   [Release Page](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.26)

## 3. Hot Issues
These issues represent the highest community engagement and critical bugs reported in the last 24 hours.

1.  **[Bug] Burning tokens very fast** (#14593)
    *   *Why it matters:* Users report rapid token consumption on the IDE extension, raising concerns about billing fairness.
    *   *Reaction:* 624 comments, 274 👍.
    *   [Link](https://github.com/openai/codex/issues/14593)

2.  **[Bug] Rate-limit cost per token jumped ~10-20x** (#28879)
    *   *Why it matters:* Plus users on `gpt-5.5` report their 5-hour budget depleting in minutes, a drastic change from prior behavior.
    *   *Reaction:* 175 comments, 326 👍.
    *   [Link](https://github.com/openai/codex/issues/28879)

3.  **[Bug] Upgraded to PRO but "You’re out of Codex messages"** (#18357)
    *   *Why it matters:* Persistent licensing sync issue where paid PRO users are incorrectly flagged as having no quota.
    *   *Reaction:* 9 comments, 5 👍.
    *   [Link](https://github.com/openai/codex/issues/18357)

4.  **[Bug] Codex app usage limit depleted abnormally** (#30212)
    *   *Why it matters:* Pro users report their 20x allowance being consumed in ~1 hour without heavy usage.
    *   *Reaction:* 6 comments, 8 👍.
    *   [Link](https://github.com/openai/codex/issues/30212)

5.  **[Bug] macOS: code_sign_clone grows unbounded** (#27536)
    *   *Why it matters:* Electron app leaves behind massive temporary files (62GB+), causing disk exhaustion on macOS.
    *   *Reaction:* 10 comments.
    *   [Link](https://github.com/openai/codex/issues/27536)

6.  **[Bug] MCP stdio servers leak pipe fds** (#26984)
    *   *Why it matters:* Long-running CLI sessions hit `EMFILE` (too many open files) due to resource leaks in MCP integration.
    *   *Reaction:* 5 comments.
    *   [Link](https://github.com/openai/codex/issues/26984)

7.  **[Bug] Codex Desktop: pressing Enter occasionally sends same message multiple times** (#19529)
    *   *Why it matters:* UX reliability issue causing duplicate API calls and confusion.
    *   *Reaction:* 6 comments, 1 👍.
    *   [Link](https://github.com/openai/codex/issues/19529)

8.  **[Bug] This model is not supported when using X-OpenAI-Internal-Codex-Responses-Lite** (#30224)
    *   *Why it matters:* Internal API header conflicts prevent model selection in newer app versions.
    *   *Reaction:* 11 comments, 3 👍.
    *   [Link](https://github.com/openai/codex/issues/30224)

9.  **[Bug] Codex CLI 0.141.0 crashes with SIGTRAP on Intel macOS** (#29000)
    *   *Why it matters:* Critical crash for Intel Mac users on specific CLI versions.
    *   *Reaction:* 16 comments, 11 👍.
    *   [Link](https://github.com/openai/codex/issues/29000)

10. **[Bug] Codex App writes high-volume TRACE logs** (#30236)
    *   *Why it matters:* Log verbosity ignores `RUST_LOG=warn`, potentially impacting disk I/O and privacy.
    *   *Reaction:* 3 comments.
    *   [Link](https://github.com/openai/codex/issues/30236)

## 4. Key PR Progress
Selected pull requests driving architectural improvements and feature stabilization.

1.  **[codex] Enable remote plugins by default** (#30297)
    *   Promotes remote plugin functionality from under development to stable, enabling broader extensibility.
    *   [Link](https://github.com/openai/codex/pull/30297)

2.  **[codex] Add generated token auth to app-server WebSockets** (#30315)
    *   Enhances security by generating URL-safe tokens for WebSocket connections when explicit auth isn't configured.
    *   [Link](https://github.com/openai/codex/pull/30315)

3.  **[app-server] expose environment info RPC** (#30291)
    *   Adds an experimental RPC to retrieve shell and working directory metadata for named environments.
    *   [Link](https://github.com/openai/codex/pull/30291)

4.  **[codex] gate Rendezvous TCP_NODELAY by signed path** (#30269)
    *   Optimizes networking performance by gating TCP_NODELAY settings via signed URLs for the exec-server.
    *   [Link](https://github.com/openai/codex/pull/30269)

5.  **[codex] Add retired model compaction repro** (#30319)
    *   Adds integration tests to ensure model switching handles retired slugs correctly during compaction.
    *   [Link](https://github.com/openai/codex/pull/30319)

6.  **[codex] Guardian Policy Update** (#30320)
    *   Refines guardian prompts to clarify sandbox restrictions and denial logic for low-severity actions.
    *   [Link](https://github.com/openai/codex/pull/30320)

7.  **core: overlap diff root discovery with world state** (#30286)
    *   Reduces cold-start latency by parallelizing filesystem metadata probing with world-state construction.
    *   [Link](https://github.com/openai/codex/pull/30286)

8.  **[codex] consume pushed exec-server process events** (#30273)
    *   Improves process event handling reliability by consuming from the ordered stream rather than relying solely on final waits.
    *   [Link](https://github.com/openai/codex/pull/30273)

9.  **core: trace executor skill discovery** (#30318)
    *   Adds tracing spans to measure performance of skill loading steps, aiding in optimization.
    *   [Link](https://github.com/openai/codex/pull/30318)

10. **[code-reviewed] core-skills: cache snapshots before root discovery** (#30281)
    *   Prevents redundant metadata probes on remote filesystems by aligning root discovery with snapshot caching.
    *   [Link](https://github.com/openai/codex/pull/30281)

## 5. Feature Request Trends
*   **Agent Reactivity:** Users strongly desire an agent-callable `monitor` tool (#29922) that allows Codex to wake up on background events (logs, CI) without polling, moving away from strictly turn-driven interactions.
*   **Memory Management:** There is a clear demand for official CLI commands to inspect, prune, and scope Codex memories (#30299), as the current accumulation is becoming unmanageable for power users.
*   **Provider Flexibility:** Requests for configurable `base_url` for Amazon Bedrock (#28902) indicate a need for better proxy support and enterprise routing for non-OpenAI providers.

## 6. Developer Pain Points
*   **Billing Transparency & Anomalies:** The most significant pain point is the discrepancy in token usage and rate limits. Users on Plus and Pro plans report budgets draining 10-20x faster than expected (#28879, #30212), leading to trust issues regarding billing accuracy.
*   **Platform-Specific Instability:** Windows and macOS users are experiencing distinct stability issues, including unbounded disk growth on macOS (#27536), sandbox configuration blocks on Windows (#29622), and browser plugin removals after updates (#28703, #30270).
*   **Resource Leaks in CLI:** Long-running CLI sessions are prone to file descriptor leaks via MCP stdio servers (#26984), causing `EMFILE` errors that disrupt complex workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-06-27

## 1. Today's Highlights
The Gemini CLI team is actively addressing critical stability issues within the agent architecture, specifically focusing on subagent recovery loops, generalist agent hangs, and memory system reliability. Concurrently, significant security hardening efforts are underway, including fixes for thought leakage, case-insensitive path blocklists, and OAuth socket reuse vulnerabilities introduced by recent Node.js updates.

## 2. Releases
*   **No new releases** were published in the last 24 hours. The latest version remains `0.51.0-nightly.20260626.gb14416447` (PR #28158).

## 3. Hot Issues
*   **[Bug] Subagent recovery after MAX_TURNS reported as GOAL success** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   *Why it matters:* The `codebase_investigator` subagent incorrectly reports success upon hitting turn limits, masking interruptions and leading to incomplete analysis.
    *   *Reaction:* High priority (P1); 2 likes.
*   **[Bug] Generalist agent hangs forever** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   *Why it matters:* Simple tasks like folder creation cause the generalist agent to hang indefinitely, requiring users to disable sub-agents as a workaround.
    *   *Reaction:* Strong community frustration; 8 likes, 7 comments.
*   **[Bug] Gemini does not use skills and sub-agents enough** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   *Why it matters:* Anecdotal reports suggest the model fails to autonomously utilize custom skills (e.g., Gradle, Git) unless explicitly instructed, reducing automation efficacy.
    *   *Reaction:* 6 comments; highlights a gap between intended and actual agent behavior.
*   **[Bug] Shell command execution gets stuck with "Waiting input"** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   *Why it matters:* Simple CLI commands hang in the UI state despite completing execution, blocking further interaction.
    *   *Reaction:* 4 comments; affects core workflow continuity.
*   **[Bug] Browser subagent fails in Wayland** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    *   *Why it matters:* Linux users on Wayland compositors experience immediate failure of the browser subagent due to display server incompatibilities.
    *   *Reaction:* 4 comments; critical for non-X11 desktop environments.
*   **[Security] Add deterministic redaction and reduce Auto Memory logging** [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    *   *Why it matters:* Auto Memory sends raw transcripts to the model before redaction, potentially exposing secrets in logs or context before filtering occurs.
    *   *Reaction:* 5 comments; raises privacy concerns.
*   **[Bug] Auto Memory retrying low-signal sessions indefinitely** [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
    *   *Why it matters:* Sessions deemed "low-signal" but not read remain unprocessed, causing the extractor to loop over them repeatedly.
    *   *Reaction:* 5 comments; impacts performance and resource usage.
*   **[Bug] Gemini CLI encounters 400 error with > 128 tools** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   *Why it matters:* Large toolsets cause API failures, limiting scalability for complex enterprise setups with many integrated tools.
    *   *Reaction:* 3 comments; suggests a need for smarter tool scoping.
*   **[Bug] Model frequently creates tmp scripts in random spots** [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
    *   *Why it matters:* Uncontrolled temporary file generation creates workspace clutter and complicates version control hygiene.
    *   *Reaction:* 3 comments; affects developer experience.
*   **[Bug] Browser Agent ignores settings.json overrides** [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
    *   *Why it matters:* Configuration overrides for `maxTurns` and other settings are ignored by the browser agent, preventing fine-grained control.
    *   *Reaction:* 3 comments; undermines configuration management.

## 4. Key PR Progress
*   **[feat] Implement Egress Cloud Run Service** [#28167](https://github.com/google-gemini/gemini-cli/pull/28167)
    *   Automates GitHub operations by receiving verified events from Cloud Pub/Sub, enhancing the Caretaker Agent's ability to manage issues programmatically.
*   **[fix] Limit recursive reasoning turns per request** [#28164](https://github.com/google-gemini/gemini-cli/pull/28164)
    *   Enforces a strict limit of 15 reasoning turns per user request to prevent infinite loops and protect local CPU/API quota resources.
*   **[fix] Strip thoughts from scrubbed history turns** [#27971](https://github.com/google-gemini/gemini-cli/pull/27971)
    *   Resolves "Thought Leakage" where internal model monologues persist in history, causing confusion and emulation of scratchpad behaviors in subsequent turns.
*   **[fix] Resolve defensive path resolution for @-reference files** [#28053](https://github.com/google-gemini/gemini-cli/pull/28053)
    *   Fixes a critical bug where filesystem tools failed with "File not found" when paths were prefixed with `@`, improving reliability of reference-based edits.
*   **[fix] Enforce case-insensitive sensitive path blocklist** [#27966](https://github.com/google-gemini/gemini-cli/pull/27966)
    *   Patches a security vulnerability allowing bypass of blocklists (e.g., `.git`, `.env`) via case manipulation, ensuring robust protection of sensitive directories.
*   **[feat] Add Triage Worker Core Foundation** [#28163](https://github.com/google-gemini/gemini-cli/pull/28163)
    *   Introduces the initial modules for the Caretaker Agent Triage Worker, splitting implementation to facilitate modular code review and testing.
*   **[fix] Trust dialog discloses hook shape incorrectly** [#27915](https://github.com/google-gemini/gemini-cli/pull/27915)
    *   Corrects the workspace-trust dialog to accurately display the hooks that will execute, preventing users from inadvertently trusting folders with dangerous shell commands.
*   **[fix] Prevent unreadable .env from breaking extensions** [#28059](https://github.com/google-gemini/gemini-cli/pull/28059)
    *   Hardens extension loading against `EACCES` errors caused by unreadable `.env` files, particularly in sandboxed or restricted environments.
*   **[fix] Sync footer branch name on fs.watch-free filesystems** [#28012](https://github.com/google-gemini/gemini-cli/pull/28012)
    *   Fixes branch indicator staleness in the footer for WSL mounts and network shares where `fs.watch` events are unreliable.
*   **[fix] Avoid keep-alive socket reuse during OAuth** [#28103](https://github.com/google-gemini/gemini-cli/pull/28103)
    *   Addresses OAuth failures ("Premature close") on Node.js 24.17.0, 22.23.0, and 26.3.x by disabling keep-alive during token exchange, mitigating CVE-2026-48931 side effects.

## 5. Feature Request Trends
*   **Enhanced Agent Autonomy & Reliability:** Users are demanding better detection and usage of custom skills/sub-agents without explicit prompting, as well as more robust error handling for subagent timeouts and recoveries.
*   **Advanced Evaluation Infrastructure:** There is a strong push for "behavioral evals" and component-level evaluations to rigorously test agent performance, AST-aware tooling precision, and memory system accuracy.
*   **Transparency & Debugging:** Requests for improved visibility into subagent trajectories via `/chat share` and better context inclusion in bug reports indicate a need for deeper debugging capabilities for complex agent interactions.
*   **Multi-User & Shared Environment Support:** Documentation and feature requests highlight the need for clearer guidelines and potential architectural shifts to support shared responsibility models in multi-user or enterprise environments.

## 6. Developer Pain Points
*   **Agent Instability & Hanging:** Recurring issues with the generalist agent hanging, subagents failing to terminate correctly, and shell commands getting stuck in "awaiting input" states are major friction points.
*   **Configuration Ignorance:** The browser agent ignoring `settings.json` overrides and skills not being utilized autonomously frustrate users trying to customize agent behavior.
*   **Security & Privacy Risks:** Concerns about secrets leaking through Auto Memory before redaction, thought leakage into history, and case-insensitive bypasses of blocklists are critical pain points requiring immediate attention.
*   **Platform-Specific Bugs:** Failures on Wayland, issues with `fs.watch` on WSL/network shares, and incompatibilities with recent Node.js security fixes highlight the complexity of maintaining a cross-platform CLI tool.
*   **Resource Management:** Infinite loops in reasoning or memory processing, coupled with excessive temporary file creation, lead to poor performance and messy workspaces.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-27

## 1. Today's Highlights
GitHub has released **v1.0.66-1**, introducing critical controls for subagent concurrency, a new skill review workflow (`/chronicle skills review`), and desktop notifications. Community attention is heavily focused on significant regressions in input handling (copy/paste failures on Linux/Windows) and session management issues, including context memory leaks across repositories.

## 2. Releases
**Version: v1.0.66-1**
*   **Subagent Controls:** Added configuration for subagent concurrency and depth limits via `/settings` (available for usage-based billing users).
*   **Skill Management:** Introduced `/chronicle skills review` to allow developers to accept, reject, or defer proposed draft skill changes.
*   **UX Improvements:** Added desktop notifications for attention prompts and idle sessions.

## 3. Hot Issues
*Selected based on community engagement, recency, and impact on core functionality.*

1.  **[OPEN] ctrl+shift+c no longer copies to clipboard on Linux (#2082)**
    *   **Why it matters:** Breaks a standard terminal shortcut for Ubuntu/Linux users, forcing reliance on alternative methods.
    *   **Reaction:** High engagement (10 👍, 22 comments); long-standing issue since v1.0.4.
    *   [Link](https://github.com/github/copilot-cli/issues/2082)

2.  **[OPEN] Allow to pause copilot work (#1928)**
    *   **Why it matters:** Addresses the need for granular control over autonomous agent sessions without terminating them.
    *   **Reaction:** Strong demand for better session steering capabilities (4 👍).
    *   [Link](https://github.com/github/copilot-cli/issues/1928)

3.  **[OPEN] Subagent transcripts are inlined verbatim and uncapped (#3944)**
    *   **Why it matters:** Causes exponential token growth in parent sessions, potentially hitting context limits and increasing costs.
    *   **Reaction:** Critical architectural concern raised by advanced users (2 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/3944)

4.  **[OPEN] Memories are leaking between repositories (#3945)**
    *   **Why it matters:** Security and accuracy risk where global context influences isolated repo analyses.
    *   **Reaction:** Immediate report upon discovery (1 comment).
    *   [Link](https://github.com/github/copilot-cli/issues/3945)

5.  **[OPEN] Custom agent support for 'skills' field (#3940)**
    *   **Why it matters:** Enables precise control over which skills are preloaded, optimizing context window usage.
    *   **Reaction:** Feature request for customization (2 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/3940)

6.  **[OPEN] Drag and drop of files to attach no longer works in the Copilot app (macOS) (#3955)**
    *   **Why it matters:** Regression in core UI interaction for the desktop application.
    *   **Reaction:** New report today (0 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/3955)

7.  **[OPEN] Bug: `explore` tool hardcodes model to `gpt-5.4-mini` (#3954)**
    *   **Why it matters:** Ignores custom API configurations (e.g., DeepSeek), breaking enterprise/custom deployments.
    *   **Reaction:** Critical for non-OpenAI users (0 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/3954)

8.  **[OPEN] App: "failed to browse marketplace" error toast for private SSO repos (#3950)**
    *   **Why it matters:** Blocks access to plugins in SSO-enforced organizations, affecting enterprise workflows.
    *   **Reaction:** New report today (0 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/3950)

9.  **[OPEN] Any web_fetch: TypeError: fetch failed (#3948)**
    *   **Why it matters:** Complete failure of web browsing capabilities, likely due to network/proxy misconfigurations or bugs.
    *   **Reaction:** New report today (0 comments).
    *   [Link](https://github.com/github/copilot-cli/issues/3948)

10. **[CLOSED] Code sign not consistent for binary files inside copilot cli package (#3941)**
    *   **Why it matters:** Security compliance issue where binaries are signed by different entities (Microsoft vs. GitHub).
    *   **Reaction:** Resolved, but highlights ongoing security scrutiny (1 👍).
    *   [Link](https://github.com/github/copilot-cli/issues/3941)

## 4. Key PR Progress
*   **#570 [CLOSED] Add macOS installation instructions to README.md**
    *   **Status:** Closed/WIP.
    *   **Description:** Automated documentation update for macOS installation steps.
    *   [Link](https://github.com/github/copilot-cli/pull/570)

*(Note: No other active PRs were reported in the last 24 hours.)*

## 5. Feature Request Trends
*   **Session Granularity:** Users are requesting finer control over agent execution, specifically the ability to pause sessions (#1928) and limit subagent context bloat (#3944).
*   **Customization & Isolation:** There is a strong push for better isolation of context (fixing memory leaks #3945) and customizable skill loading per agent (#3940) to optimize performance and cost.
*   **Platform Native Integration:** Requests for deeper OS integration, such as PowerShell CLI compatibility (#3951) and reliable drag-and-drop/file attachment (#3955).

## 6. Developer Pain Points
*   **Input/Clipboard Regressions:** Significant frustration regarding copy/paste functionality failing on both Linux (#2082) and Windows (#3949). This is the highest-volume complaint type.
*   **Context Leakage & Bloat:** Developers are encountering issues where repository analysis is polluted by global memories (#3946) and subagent transcripts consume excessive context (#3944).
*   **Configuration Overrides:** Hardcoded models in specific tools (like `explore`) (#3954) and inconsistent code signing (#3941) are causing reliability and security concerns.
*   **Network/Proxy Issues:** Persistent `web_fetch` failures (#3948) suggest unresolved issues with how the CLI handles network requests in complex corporate environments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-06-27

## 1. Today's Highlights
The community is currently addressing critical state management bugs in Plan Mode and API access errors related to the `kimi-for-coding` model. Recent contributions focus on improving documentation clarity for developers and fixing serialization issues with reasoning effort parameters.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*Note: Only 3 issues were updated in the last 24 hours.*

1.  **[CLOSED] 403 Error with Kimi For Coding** (#2425)
    *   **Why it matters:** Users on v0.9.0 experienced persistent 403 Forbidden errors when using the `kimi-for-coding` model. Although closed, this highlights potential authentication or quota misconfigurations for specific coding agents.
    *   **Community Reaction:** 3 👍, 10 comments. High engagement suggests many users may have encountered similar permission issues.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2425)

2.  **[OPEN] Plan Mode State Inconsistency** (#2478)
    *   **Why it matters:** A bug where `ExitPlanMode` fails because the CLI claims the agent is not in plan mode, despite system reminders indicating otherwise. This blocks workflow automation for complex tasks requiring strict planning phases.
    *   **Community Reaction:** New report (0 likes).
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2478)

3.  **[OPEN] Double Enter & `/sessions` Feedback Loss** (#2477)
    *   **Why it matters:** Users on v0.20.0/Linux report UI/input handling issues with double-enter keys and loss of feedback data via `/sessions`. This affects usability and debugging capabilities for Linux power users.
    *   **Community Reaction:** New report (0 likes).
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2477)

## 4. Key PR Progress
1.  **[docs] Add Prerequisites to Development Section** (#2287)
    *   **Summary:** Adds a `### Prerequisites` subsection to the README, clarifying installation requirements before running `make prepare`. Improves onboarding experience for contributors.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2287)

2.  **[fix] Omit reasoning_effort when thinking is off** (#2476)
    *   **Summary:** Fixes a serialization bug where `thinking="off"` sent `null` to the OpenAI SDK, causing potential API errors. Now correctly omits the parameter, ensuring compatibility with legacy endpoints.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2476)

## 5. Feature Request Trends
*   **Robust State Management:** The recurrence of Plan Mode inconsistencies suggests a need for more rigorous state tracking and synchronization between the CLI interface and the backend agent state.
*   **Cross-Platform Input Handling:** Reports regarding keybinding issues (double enter) indicate a demand for more consistent input parsing across different operating systems, particularly Linux.

## 6. Developer Pain Points
*   **API Permission/Authentication Errors:** The 403 errors associated with `kimi-for-coding` indicate friction in accessing specific models or quotas, requiring clearer error messages or pre-flight checks.
*   **Serialization Compatibility:** Developers are encountering edge cases where default values (like `None` for reasoning effort) cause unexpected API failures, highlighting the need for stricter payload validation.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-06-27

### 1. Today's Highlights
The community is actively engaging with subscription adjustments following DeepSeek's price reductions, while significant efforts are underway to refine the Child Agent picker and improve Question tool UX. Stability remains a focus, with multiple bug fixes addressing infinite compaction loops, truncated tool call recovery, and provider-specific inference stalls.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **#28846: Adjust Go usage limits after DeepSeek V4 Pro price cut** (84 comments, 82 👍)
    *   **Why it matters:** Directly impacts cost efficiency for Pro subscribers. The community strongly advocates for aligning usage tiers with the 75% API price reduction.
    *   **Link:** [Issue #28846](https://github.com/anomalyco/opencode/issues/28846)
*   **#18108: Truncated tool calls are misclassified and unrecoverable** (7 comments)
    *   **Why it matters:** Addresses a critical reliability flaw where JSON truncation leads to session death loops rather than graceful retry or repair mechanisms.
    *   **Link:** [Issue #18108](https://github.com/anomalyco/opencode/issues/18108)
*   **#31152: Infinite compaction loop on every response** (4 comments)
    *   **Why it matters:** A severe stability bug where sessions trigger continuous context compaction even with empty configs, rendering the app unusable.
    *   **Link:** [Issue #31152](https://github.com/anomalyco/opencode/issues/31152)
*   **#450: Support for reasoning_effort parameter in UI** (15 comments, 26 👍)
    *   **Why it matters:** Enhances control over model behavior for supported providers (OpenAI, Gemini, DeepSeek), allowing users to balance latency vs. quality directly in the TUI.
    *   **Link:** [Issue #450](https://github.com/anomalyco/opencode/issues/450)
*   **#32149: Opencode Stops Processing Requests Without Response** (6 comments)
    *   **Why it matters:** Reports a regression where the app hangs in the "thinking" state, indicating potential issues with backend connectivity or internal state management.
    *   **Link:** [Issue #32149](https://github.com/anomalyco/opencode/issues/32149)
*   **#6169: /model TUI picker does not display all custom provider models** (12 comments)
    *   **Why it matters:** Hinders usability for users managing large sets of custom models, as the UI fails to populate the picker despite correct backend loading.
    *   **Link:** [Issue #6169](https://github.com/anomalyco/opencode/issues/6169)
*   **#23153: Pay Go with crypto** (12 comments, 23 👍)
    *   **Why it matters:** Reflects strong community demand for decentralized payment options, increasing engagement and accessibility for global users.
    *   **Link:** [Issue #23153](https://github.com/anomalyco/opencode/issues/23153)
*   **#19005: Make local file paths clickable in terminal output** (6 comments, 2 👍)
    *   **Why it matters:** Improves developer workflow by reducing manual copy-paste actions when interacting with generated files.
    *   **Link:** [Issue #19005](https://github.com/anomalyco/opencode/issues/19005)
*   **#34065: Expose coding agent marker to shell commands** (4 comments)
    *   **Why it matters:** Enables better integration with external CLIs by allowing downstream tools to detect they are being executed within an OpenCode agent context.
    *   **Link:** [Issue #34065](https://github.com/anomalyco/opencode/issues/34065)
*   **#17873: Preserve Model Selection Per Chat** (4 comments)
    *   **Why it matters:** Addresses a usability friction point where switching chats resets model preferences, disrupting complex multi-model workflows.
    *   **Link:** [Issue #17873](https://github.com/anomalyco/opencode/issues/17873)

### 4. Key PR Progress
*   **#34135: feat(tui): add child agent picker**
    *   Introduces a dedicated picker for managing child sessions, replacing the standard composer to streamline multi-agent interactions.
    *   **Link:** [PR #34135](https://github.com/anomalyco/opencode/pull/34135)
*   **#34116: fix(app): question UX fixes and improvements**
    *   Resolves truncation issues in question dialogs (#14924) and allows minimizing cards to view conversation context (#32791).
    *   **Link:** [PR #34116](https://github.com/anomalyco/opencode/pull/34116)
*   **#34129: fix(opencode): strip required from type-less Gemini schemas**
    *   Fixes compatibility with Google's Function Calling API by sanitizing schema structures that incorrectly enforce "required" fields on non-object types.
    *   **Link:** [PR #34129](https://github.com/anomalyco/opencode/pull/34129)
*   **#34123: fix(tui): add plain text paste**
    *   Adds `Ctrl+Alt+V` binding to bypass automatic file path interpretation, solving inconsistency between Desktop and TUI pasting behaviors.
    *   **Link:** [PR #34123](https://github.com/anomalyco/opencode/pull/34123)
*   **#34132: fix(app): space home sessions from scrollbar**
    *   Improves UI clarity by reserving space for custom scrollbars, preventing hover state overlaps in the session list.
    *   **Link:** [PR #34132](https://github.com/anomalyco/opencode/pull/34132)
*   **#33918: fix(skill): include v2 plugin skills in legacy list**
    *   Ensures backward compatibility by registering v2 plugin skills in the legacy `/skills` list used by instance APIs.
    *   **Link:** [PR #33918](https://github.com/anomalyco/opencode/pull/33918)
*   **#34125: fix(mcp): request refresh token scope**
    *   Backports MCP SEP-2207 scope selection to handle offline access correctly during dynamic registration and browser auth.
    *   **Link:** [PR #34125](https://github.com/anomalyco/opencode/pull/34125)
*   **#34119: refactor(core): separate out location node functionality**
    *   Refactors core location logic to integrate into v2 architecture, improving modularity and maintainability.
    *   **Link:** [PR #34119](https://github.com/anomalyco/opencode/pull/34119)
*   **#29457: fix(plan): don't carry plan model into build agent**
    *   Prevents configuration bleed-over where the "plan" model is incorrectly applied to subsequent "build" agents.
    *   **Link:** [PR #29457](https://github.com/anomalyco/opencode/pull/29457)
*   **#29446: fix(opencode): bound codex stream stalls**
    *   Mitigates indefinite hanging when using Codex/OAuth streams by implementing proper timeout and stall detection.
    *   **Link:** [PR #29446](https://github.com/anomalyco/opencode/pull/29446)

### 5. Feature Request Trends
*   **Payment Flexibility:** Strong interest in cryptocurrency payments for subscription services (#23153).
*   **Granular Control:** Requests for UI controls over advanced model parameters like `reasoning_effort` (#450) and per-chat model persistence (#17873).
*   **Workflow Integration:** Demand for better terminal interaction, such as clickable file paths (#19005) and environment markers for shell commands (#34065).

### 6. Developer Pain Points
*   **Session Stability:** Recurring reports of infinite compaction loops (#31152, #33128) and sessions stopping mid-task due to empty provider responses (#31430).
*   **Tool Call Reliability:** Issues with truncated JSON leading to unrecoverable errors (#18108) and invalid tool calls from specific models like Qwen 3.7 (#33618).
*   **UI/UX Inconsistencies:** Confusion and frustration regarding platform-specific behaviors, particularly around pasting file paths (#34006) and desktop menu localization (#34104).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-06-27

### 1. Today's Highlights
The Pi ecosystem saw significant activity around TUI stability, with critical fixes addressing terminal scrollback corruption and viewport jumping in tmux environments. Provider support expanded notably with the addition of Friendli as a built-in OpenAI-compatible provider and ongoing work to refine Anthropic OAuth token handling. Additionally, the experimental `pi-orchestrator` package was introduced to manage local instance lifecycles, signaling a push toward more robust multi-instance management.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **#5825 [OPEN] Streaming markdown forces scroll to bottom**
    *   **Why it matters:** Disrupts reading flow during long streaming responses, particularly with `clear on shrink` enabled.
    *   **Community Reaction:** High engagement (33 comments), indicating widespread frustration with the UX interruption.
    *   [Link](https://github.com/earendil-works/pi/issues/5825)
*   **#6050 [CLOSED] TUI full redraw clears terminal scrollback during active rendering**
    *   **Why it matters:** Causes loss of context in terminal history during active processing.
    *   **Community Reaction:** Resolved, validating the core renderer fix.
    *   [Link](https://github.com/earendil-works/pi/issues/6050)
*   **#5886 [OPEN] AgentSession settlement/continuation and assistant-tail lifecycle bugs**
    *   **Why it matters:** Meta-issue highlighting systemic failures in post-run logic and transcript continuity.
    *   **Community Reaction:** Significant attention from core contributors (mitsuhiko); 2 👍.
    *   [Link](https://github.com/earendil-works/pi/issues/5886)
*   **#5363 [OPEN] Add amazon-bedrock-mantle provider for OpenAI-compatible models**
    *   **Why it matters:** Enables usage of Bedrock Mantle models via OpenAI-compatible API, filling a gap for AWS users.
    *   **Community Reaction:** Strong demand (4 👍, 15 comments).
    *   [Link](https://github.com/earendil-works/pi/issues/5363)
*   **#6093 [CLOSED] Scoped Anthropic API keys need necessary request params**
    *   **Why it matters:** Fixes authentication failures for users with scoped `sk-ant-api...` keys that didn't match the hardcoded `sk-ant-oat` prefix check.
    *   **Community Reaction:** Critical fix for enterprise/security-conscious users.
    *   [Link](https://github.com/earendil-works/pi/issues/6093)
*   **#5871 [OPEN] Anthropic OAuth-token detection is hardcoded**
    *   **Why it matters:** Prevents flexible configuration of OAuth tokens for Anthropic providers.
    *   **Community Reaction:** 6 comments discussing the need for configurability.
    *   [Link](https://github.com/earendil-works/pi/issues/5871)
*   **#6073 [CLOSED] TUI viewport jumps when expanding tool output inside tmux**
    *   **Why it matters:** Severe UX bug for users running Pi in tmux, causing disorientation during tool execution.
    *   **Community Reaction:** Resolved, improving tmux compatibility.
    *   [Link](https://github.com/earendil-works/pi/issues/6073)
*   **#5992 [CLOSED] Pi crashes due to "value.startsWith is not a function"**
    *   **Why it matters:** Fatal crash upon session reload after long sessions, leading to data loss.
    *   **Community Reaction:** Resolved, stabilizing session persistence.
    *   [Link](https://github.com/earendil-works/pi/issues/5992)
*   **#5438 [CLOSED] Clipboard image paste only submits a temp file path**
    *   **Why it matters:** Broken image attachment functionality in interactive mode; users couldn't send images effectively.
    *   **Community Reaction:** Resolved, restoring multimodal input capabilities.
    *   [Link](https://github.com/earendil-works/pi/issues/5438)
*   **#6105 [CLOSED] User messages get incorrectly escaped**
    *   **Why it matters:** Minor but annoying bug where quotes are double-escaped in the editor/display.
    *   **Community Reaction:** Quick triage and closure.
    *   [Link](https://github.com/earendil-works/pi/issues/6105)

### 4. Key PR Progress
*   **#6064 [CLOSED] feat(experimental): pi orchestrator**
    *   **Summary:** Introduces `@earendil-works/pi-orchestrator`, a local daemon managing Pi instance lifecycles via IPC. Enables starting, listing, and controlling multiple Pi instances.
    *   [Link](https://github.com/earendil-works/pi/pull/6064)
*   **#6087 [CLOSED] fix(coding-agent): remove hardcoded RPC wait timeout**
    *   **Summary:** Removes the rigid 60s cap in `RpcClient`, allowing long-running MCP tool sessions to complete successfully without premature failure.
    *   [Link](https://github.com/earendil-works/pi/pull/6087)
*   **#6090 [CLOSED] feat(ai): add Friendli provider**
    *   **Summary:** Adds built-in support for Friendli as an OpenAI-compatible provider, defaulting to `zai-org/GLM-5.2`.
    *   [Link](https://github.com/earendil-works/pi/pull/6090)
*   **#6026 [OPEN] fix(tui): stabilize working status row**
    *   **Summary:** Addresses flickering or incorrect status updates in the TUI working row, linked to issue #5825.
    *   [Link](https://github.com/earendil-works/pi/pull/6026)
*   **#6099 [CLOSED] Rename model key from 'gpt-5.2-chat-latest' to 'gpt-5.2-chat'**
    *   **Summary:** Corrects model key naming to align with available OpenAI models, preventing configuration errors.
    *   [Link](https://github.com/earendil-works/pi/pull/6099)
*   **#6092 [CLOSED] draft: hosted websearch**
    *   **Summary:** Experimental PR exploring always-on hosted search tools; marked as draft/not intended for merge, but highlights interest in persistent search capabilities.
    *   [Link](https://github.com/earendil-works/pi/pull/6092)

### 5. Feature Request Trends
*   **Provider Expansion & Compatibility:** Strong demand for adding new providers (Friendli, Amazon Bedrock Mantle) and ensuring OpenAI-compatible interfaces for non-standard endpoints.
*   **OAuth/Flexible Authentication:** Requests to decouple authentication detection from hardcoded string prefixes (Anthropic) to support diverse key formats and OAuth flows.
*   **Multi-Instance Management:** The introduction of the Orchestrator suggests a trend toward managing multiple concurrent Pi sessions or agents within a single environment.
*   **Embedded Library Stability:** Several issues (#6101, #6102) highlight the need for better state isolation and initialization patterns when Pi is embedded as a library, rather than used as a standalone CLI.

### 6. Developer Pain Points
*   **TUI Rendering Instability:** Recurring issues with scrollback corruption, viewport jumping (especially in tmux), and forced scrolling during streaming indicate fragility in the core TUI renderer.
*   **Session State Management:** Bugs related to session reloads causing crashes (#5992), compaction failures (#5676), and stale context in embedded libraries (#6101) suggest complex state synchronization challenges.
*   **Hardcoded Constraints:** Multiple issues (#6088, #5871, #6104) point to frustration with hardcoded timeouts, path parsing logic, and authentication checks that prevent flexibility for advanced users or specific environments.
*   **Tool Execution Continuity:** Issues with tool loops aborting prematurely (#6096) or hanging post-completion (#5944) hinder reliable automation workflows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-06-27

### 1. Today's Highlights
The Qwen Code team released **v0.19.2-nightly**, featuring critical fixes for `web_fetch` JSON fallback and `cua-driver-rs` relative coordinate support. Community attention is heavily focused on security hardening around source slug validation and performance issues involving zombie processes and memory leaks on Windows. Significant progress was also made on the ACP (Agent Control Protocol) permission voting and resumable stream capabilities.

### 2. Releases
*   **v0.19.2-nightly.20260627.d93bec905**: Includes a fix for allowing `web_fetch` to fall back to JSON when necessary ([PR #5660](https://github.com/QwenLM/qwen-code/pull/5660)).
*   **cua-driver-rs v0.6.8**: Prebuilt binaries released for macOS (codesigned/notarized), Linux (x86_64/arm64), and Windows (x86_64/arm64). Enables relative-coordinate driver functionality vendored under `packages/cua-driver`.

### 3. Hot Issues
1.  **[Proposal] Mode B Feature-Priority Roadmap** [#4175](https://github.com/QwenLM/qwen-code/issues/4175): High engagement (42 comments) discussing the production-ready status of `qwen serve` and Stage 1 daemon integration.
2.  **[Bug] Connection Errors & Streaming Timeouts** [#1002](https://github.com/QwenLM/qwen-code/issues/1002): Persistent reports of intermittent `connection error` and streaming timeouts, highlighting stability concerns.
3.  **[Bug] Rider OAuth Login Loop** [#4493](https://github.com/QwenLM/qwen-code/issues/4493): Users reporting redirection loops when logging in via Alibaba Cloud Token Plan in JetBrains Rider.
4.  **[Security] False Positive Antivirus Detection** [#5055](https://github.com/QwenLM/qwen-code/issues/5055): VSCode extension flagged as `Trojan:JS/ShaiWorm.DBA!MTB`, requiring clarification on packaging integrity.
5.  **[Bug] TUI Freeze Due to Zombie Processes** [#5083](https://github.com/QwenLM/qwen-code/issues/5083): Linux TUI unresponsive due to unreaped bash child processes, indicating a process management bug.
6.  **[Bug] MCP Filesystem Tools Invisible to Model** [#4218](https://github.com/QwenLM/qwen-code/issues/4218): Windows users report MCP server connects successfully but tools are not available to the AI model.
7.  **[Bug] PowerShell OOM Leak on Windows** [#5873](https://github.com/QwenLM/qwen-code/issues/5873): Critical performance bug where tool usage spawns persistent PowerShell instances leading to Out-Of-Memory crashes.
8.  **[Bug] Auto-Upgrade to Expensive Models** [#5819](https://github.com/QwenLM/qwen-code/issues/5819): Users report automatic setting changes to higher-cost models after upgrade, causing unexpected token billing.
9.  **[Security] Source Deletion Path Traversal** [#5834](https://github.com/QwenLM/qwen-code/issues/5834): Vulnerability where crafted `sourceSlug` could escape workspace directories during deletion.
10. **[Bug] Negative Cleanup Period Values** [#5905](https://github.com/QwenLM/qwen-code/issues/5905): API accepts negative integers for `cleanupPeriodDays`, bypassing schema validation constraints.

### 4. Key PR Progress
1.  **[Fix] Resolve ACP Permission Votes Across Connections** [#5912](https://github.com/QwenLM/qwen-code/pull/5912): Fixes daemon HTTP permission voting to ensure responses are not tied to specific connections, improving reliability.
2.  **[Fix] Normalize Source Slug Validation Errors** [#5911](https://github.com/QwenLM/qwen-code/pull/5911): Ensures consistent structured validation results for invalid/legacy slugs, preventing uncaught generic failures.
3.  **[Feat] Web-Shell Syntax Highlighting** [#5869](https://github.com/QwenLM/qwen-code/pull/5869): Improves streaming code blocks in web shell by reducing flicker and fixing fence-language aliases.
4.  **[Fix] Skip Follow-Up Suggestions on Local OpenAI** [#5821](https://github.com/QwenLM/qwen-code/pull/5821): Disables default follow-up suggestions for local loopback endpoints to reduce noise.
5.  **[Feat] Resumable ACP Session Streams** [#5852](https://github.com/QwenLM/qwen-code/pull/5852): Implements Last-Event-ID support for `/acp` streams, allowing reconnection to resume from the last event.
6.  **[Refactor] Tree-Sitter AST for Shell Utils** [#2652](https://github.com/QwenLM/qwen-code/pull/2652): Replaces fragile string parsing with tree-sitter AST for improved robustness in shell command handling.
7.  **[Feat] Loop Task Files via Sentinels** [#5890](https://github.com/QwenLM/qwen-code/pull/5890): Introduces `.qwen/loop.md` for durable, user-editable task lists in long-running loops.
8.  **[Feat] Per-Provider Request Concurrency Cap** [#3636](https://github.com/QwenLM/qwen-code/pull/3636): Adds client-side back-pressure to handle `429 Too Many Requests` gracefully.
9.  **[Fix] LSP Diagnostics Caching** [#3034](https://github.com/QwenLM/qwen-code/pull/3034): Caches `publishDiagnostics` notifications as a fallback when pull requests fail.
10. **[Fix] Reject Unsafe Source Slugs** [#5829](https://github.com/QwenLM/qwen-code/pull/5829): Blocks path-like slugs in source deletion to prevent directory traversal attacks.

### 5. Feature Request Trends
*   **Session Persistence & Recovery**: Strong demand for resumable streams and stateful sessions, evidenced by the ACP Last-Event-ID work and discussions on long-running task durability.
*   **Advanced Loop Automation**: Requests for better control over background automation, including editable task files (`.qwen/loop.md`) and visibility into cron jobs.
*   **Multiplayer/Channel Integration**: Exploration of channel-resident agents (e.g., DingTalk "qwen tag") and remote bot command alignment.
*   **Model Management Flexibility**: Features like fallback vision models (`/model --vision`) and per-provider concurrency caps indicate a need for finer-grained control over AI resource usage.

### 6. Developer Pain Points
*   **Resource Leaks & Stability**: Recurring reports of memory leaks (PowerShell zombies on Windows, unreaped children on Linux) causing TUI freezes and OOM errors.
*   **Security & Validation Gaps**: Multiple issues highlight lax input validation in APIs (negative numbers, path traversal), requiring urgent hardening.
*   **Cross-Platform Inconsistencies**: Differences in behavior between IDEs (Rider vs. IntelliJ) and OS-specific bugs (Windows shell handling) create friction.
*   **Unexpected Costs**: Users are frustrated by automatic model upgrades that increase token consumption without clear warning, necessitating better transparency in billing settings.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-06-27  
**Repository:** Hmbown/CodeWhale (DeepSeek-TUI)

### 1. Today's Highlights
The community focused heavily on stabilizing the upcoming v0.8.59 release, specifically addressing critical TUI mouse-report leaks on macOS and reasoning block integrity issues. Significant infrastructure updates include the addition of OpenModel provider support and the formalization of WeCom Bridge deployment guides, while dependency maintenance saw major bumps to `rusqlite`, `sha2`, and `axum`.

### 2. Releases
**No new releases published in the last 24 hours.**  
Development is currently centered on the v0.8.59 stabilization track (Issue #3063), which aims to ship fixes for mouse-report input leaks and runtime safety before cutting the release candidate.

### 3. Hot Issues
1. **[v0.8.59 Release Tracker](https://github.com/Hmbown/CodeWhale/issues/3063)**  
   *Why it matters:* Critical stabilization release addressing TUI mouse-report leaks on macOS and runtime safety.  
   *Community:* High priority; serves as the gate for the next stable version.

2. **[Thinking Collapse Bug](https://github.com/Hmbown/CodeWhale/issues/861)**  
   *Why it matters:* Addresses a family of defects where reasoning blocks freeze, truncate silently, or drop entirely, causing downstream API errors.  
   *Community:* Identified as the top verified community bug for reasoning models.

3. **[Install Script Returns HTML](https://github.com/Hmbown/CodeWhale/issues/3582)**  
   *Why it matters:* The official `curl | sh` installation method failed because the endpoint returned an HTML page instead of the script.  
   *Community:* Urgent fix required for new user onboarding.

4. **[Plan/Agent Mode Mixed Up](https://github.com/Hmbown/CodeWhale/issues/3568)**  
   *Why it matters:* AI fails to detect mode switches, leading to inappropriate file modification attempts in Plan mode.  
   *Community:* Recurring frustration; requires strict separation of context.

5. **[Editor Freezes/Crashes](https://github.com/Hmbown/CodeWhale/issues/3657)**  
   *Why it matters:* Typing specific characters or opening editors causes full application freeze, requiring process kill.  
   *Community:* High impact on daily usability; flagged as a severe reliability issue.

6. **[Legacy Code Cleanup](https://github.com/Hmbown/CodeWhale/issues/3490)**  
   *Why it matters:* Inventory of dead code and `allow(dead_code)` markers before v0.9 expansion to prevent technical debt accumulation.  
   *Community:* Essential for long-term maintainability.

7. **[Reasoning Content Integrity Audit](https://github.com/Hmbown/CodeWhale/issues/3016)**  
   *Why it matters:* Follow-up to Issue #861, auditing root causes on the constitution branch to ensure `reasoning_content` is not dropped.  
   *Community:* Technical deep-dive into API message handling.

8. **[Prompt Path Slimming](https://github.com/Hmbown/CodeWhale/issues/2953)**  
   *Why it matters:* Reducing default prompt footprint to match Codex CLI token usage, lowering costs and latency.  
   *Community:* Optimizing efficiency for high-volume users.

9. **[Cross-Target Build Failures](https://github.com/Hmbown/CodeWhale/issues/3369)**  
   *Why it matters:* CI/CD pipeline instability in Nightly builds affecting release readiness.  
   *Community:* DevOps focus to ensure reproducible binaries.

10. **[IME Composition Freeze](https://github.com/Hmbown/CodeWhale/issues/2612)**  
    *Why it matters:* Placeholder text obscures CJK input composition, making typing unintelligible for Asian users.  
    *Community:* Critical UX fix for internationalization.

### 4. Key PR Progress
1. **[WeCom Bridge Deployment Guide](https://github.com/Hmbown/CodeWhale/pull/3678)**  
   Merged comprehensive documentation for deploying the WeCom Bridge, including security boundaries and architecture diagrams.

2. **[OpenModel Provider Support](https://github.com/Hmbown/CodeWhale/pull/3677)**  
   Added first-class support for OpenModel as an Anthropic Messages provider, routing `deepseek-v4-flash` by default.

3. **[Moraine MCP Memory Integration](https://github.com/Hmbown/CodeWhale/pull/3575)**  
   Wired `moraine-mcp` as a recall tool source, enabling agents to access session search and file attention tools.

4. **[Rusqlite Dependency Bump](https://github.com/Hmbown/CodeWhale/pull/3675)**  
   Updated `rusqlite` to 0.39.0 to avoid unstable `cfg_select!` issues in newer versions while maintaining stability.

5. **[SHA2 Hash Support Fix](https://github.com/Hmbown/CodeWhale/pull/3673)**  
   Fixed digest hex formatting to support `sha2` 0.11 upgrade, ensuring stable hash outputs across CLI and TUI.

6. **[Axum Dependency Upgrade](https://github.com/Hmbown/CodeWhale/pull/3669)**  
   Bumped `axum` to 0.8.9, adding WebSocket upgrade support for improved real-time communication.

7. **[Telegram Stream Debounce](https://github.com/Hmbown/CodeWhale/pull/3665)**  
   Implemented debouncing for Telegram turn-sequence writes to prevent race conditions and improve stream resilience.

8. **[Provider Docs Link Fix](https://github.com/Hmbown/CodeWhale/pull/3676)**  
   Corrected fallback documentation URLs for providers like Qianfan, ensuring users land on accurate help pages.

9. **[Auth Helper Refactor](https://github.com/Hmbown/CodeWhale/pull/3674)**  
   Extracted runtime API authentication helpers into a dedicated module, cleaning up router logic.

10. **[Stale Issue Cleanup Reactivation](https://github.com/Hmbown/CodeWhale/pull/3607)**  
    Restored automated stale-issue labeling policies to keep the backlog manageable.

### 5. Feature Request Trends
*   **Token Efficiency & Cost Reduction:** Multiple issues (#2953, #2956, #2957, #2958) focus on slimming down prompt paths, reducing repeated transcript inputs, and optimizing benchmark outputs to lower token consumption.
*   **Enhanced Memory & Tooling:** Demand for better memory integration via MCP servers (e.g., Moraine) and more robust tool discovery/setup wizards (#3407).
*   **Localization & UX Improvements:** Requests for replacing hard-coded localization files with dedicated i18n libraries (#3537) and improving CJK input handling (#2612).
*   **Non-Software Use Cases:** Interest in adapting the TUI for literary creation and background reading by allowing configurable personalities/prompts (#3638).

### 6. Developer Pain Points
*   **Installation Instability:** The broken `install.sh` endpoint (#3582) caused immediate friction for new adopters.
*   **Reasoning Block Reliability:** Persistent issues with thinking blocks freezing, truncating, or dropping (#861, #3016) undermine trust in the AI's internal logic.
*   **Performance Overhead:** Excessive token usage due to redundant prompt layers and transcript history is a significant concern for cost-conscious developers.
*   **Platform-Specific Bugs:** Mouse-report leaks on macOS and IME composition issues for CJK users highlight gaps in platform-specific QA testing.
*   **Dependency Maintenance:** Frequent breaking changes in Rust ecosystem dependencies (e.g., `sha2`, `rusqlite`, `axum`) require constant vigilance and patching.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*