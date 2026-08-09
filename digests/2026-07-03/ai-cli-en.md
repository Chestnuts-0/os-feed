# AI CLI Tools Community Digest 2026-07-03

> Generated: 2026-07-03 01:56 UTC | Tools covered: 9

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
**Date:** July 3, 2026

## 1. Ecosystem Overview
The AI CLI landscape in mid-2026 is characterized by a shift from basic code completion to complex, multi-agent orchestration with strict security and state management requirements. Major players are heavily investing in "Fleet" or sub-agent architectures, necessitating robust solutions for session persistence, memory limits, and cross-platform stability. Security hardening, particularly around Git operations and sandboxing, has become a central development theme, reflecting enterprise adoption pressures. While feature parity in core coding tasks is largely achieved, differentiation is now driven by UX polish, platform-specific reliability (especially Windows/macOS), and advanced billing/quota transparency.

## 2. Activity Comparison

| Tool | Issues Updated (Hot) | PRs Updated (Key) | Release Status | Primary Focus Area |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 4 | v2.1.199 (Stable) | Session limits, SSL fixes, sub-agent stability |
| **OpenAI Codex** | 10 | 10 | v0.143.0-alpha.34 | Rust backend, Git security hardening, Linux desktop |
| **Gemini CLI** | 10 | 10 | v0.51.0-nightly | Agent routing, recursive loop fixes, JSON integrity |
| **GitHub Copilot** | 10 | 2 | None (v1.0.69-0) | UI rendering, accessibility, session state integrity |
| **Kimi Code** | 2 | 1 | None | Infinite loop fixes, Windows clipboard handling |
| **OpenCode** | 10 | 10 | None | V2 session runner, billing fairness, large file perf |
| **Pi** | 10 | 10 | None | Reasoning model compatibility, SQLite storage |
| **Qwen Code** | 10 | 10 | v0.19.5 | Enterprise channels (WeCom/QQ), mobile UX, nested agents |
| **DeepSeek TUI** | 10 | 10 | None | Fleet memory management, Windows IME/Input stability |

*Note: "Issues Updated" refers to the number of top hot issues discussed in the digest. "PRs Updated" refers to significant PRs detailed in the digest.*

## 3. Shared Feature Directions

*   **Multi-Agent & Sub-Agent Orchestration:**
    *   **Tools:** Claude Code, Gemini CLI, OpenCode, Qwen Code, DeepSeek TUI.
    *   **Need:** Robust handling of nested agents, preventing infinite loops/recursion, managing state desynchronization, and defining clear termination conditions (e.g., MAX_TURNS).
*   **Security & Sandboxing Hardening:**
    *   **Tools:** OpenAI Codex, Gemini CLI, DeepSeek TUI, Qwen Code.
    *   **Need:** Preventing repository-controlled executable hijacking (Git filters), deterministic secret redaction, and safe shell execution environments.
*   **Cross-Platform Stability (Especially Windows/macOS):**
    *   **Tools:** All major tools.
    *   **Need:** Resolving platform-specific regressions such as Windows terminal encoding issues, macOS sandbox limits, Wayland browser agent support, and IME deadlocks.
*   **Session State & Persistence:**
    *   **Tools:** GitHub Copilot, Pi, OpenCode, DeepSeek TUI.
    *   **Need:** Reliable saving/loading of session history, metrics, and configuration across restarts or context switches; prevention of data loss during `/new` or mode switches.

## 4. Differentiation Analysis

*   **OpenAI Codex:** Focuses heavily on **security and infrastructure**. The significant PR volume relates to Git isolation, sandbox authority, and Rust backend performance. It is aggressively pursuing Linux desktop parity and granular user control over auto-resolve/safety.
*   **Qwen Code:** Differentiates through **enterprise and regional integrations**. It is the only tool prominently featuring WeCom and QQ Bot adapters, targeting Chinese enterprise users. It also emphasizes nested sub-agent depth and mobile web shell optimization.
*   **DeepSeek TUI:** Focuses on **Fleet architecture and guided UX**. It introduces a "Constitution Creator" for onboarding and prioritizes memory/resource management for concurrent sub-agents ("Fleets"). It targets power users seeking structured, rule-based agent behavior.
*   **OpenCode:** Emphasizes **billing fairness and IDE integration**. It addresses user concerns over API cost fluctuations (DeepSeek price cuts) and seeks to bridge the gap between TUI and traditional IDEs (VS Code diff previews).
*   **GitHub Copilot CLI:** Currently struggling with **UI/UX polish and state integrity**. Its recent issues revolve around rendering glitches, accessibility, and session metric loss, suggesting it is in a stabilization phase for its v1.0 release rather than rapid feature addition.
*   **Pi:** Focuses on **provider agnosticism and local model compatibility**. It addresses nuanced issues with reasoning model content handling (`null` checks) and adds support for diverse providers (DeepInfra, Bedrock caching).

## 5. Community Momentum & Maturity

*   **High Momentum/Rapid Iteration:** **OpenAI Codex** and **Gemini CLI** show the highest PR velocity, indicating active development on core engine stability and security. **Qwen Code** is also moving fast with frequent releases targeting mobile and enterprise features.
*   **Maturing/Stabilizing:** **Claude Code** shows mature community engagement (high issue volume) but slower PR output, focusing on critical bug fixes (SSL, session limits) rather than new features. **OpenCode** has a highly engaged community demanding fairness and UX improvements, suggesting a mature user base with specific expectations.
*   **Emerging/Niche:** **Kimi Code** and **DeepSeek TUI** have lower issue counts but high-severity problems (infinite loops, Windows freezes), indicating they are scaling their user base while addressing foundational stability issues. **Pi** shows strong community involvement in extending provider support and fixing reasoning model compatibility.

## 6. Trend Signals

*   **Security-First Development:** The volume of PRs addressing Git security, sandbox isolation, and secret redaction (Codex, Gemini, DeepSeek) signals that enterprise adoption is driving security hardening as a primary feature, not an afterthought.
*   **Agent Reliability Over Capability:** Communities are less focused on raw coding capability and more on **agent reliability** (preventing loops, managing state, handling timeouts). Bugs related to infinite loops, session hangs, and sub-agent failures are top priorities across nearly all tools.
*   **Platform Parity is Non-Negotiable:** Persistent friction on Windows (encoding, IME, clipboard) and macOS (sandboxing) is a major pain point. Tools that fail to address these platform-specific nuances (Copilot, Kimi, DeepSeek) risk losing developer trust.
*   **Transparency & Cost Control:** Users are increasingly demanding visibility into token usage, reasoning steps, and billing fairness (OpenCode, Claude, Pi). The trend is towards giving users more granular control over costs and model behavior.
*   **Hybrid Workflows:** The demand for IDE integration (OpenCode, Copilot) and cross-platform parity (Codex Linux desktop) indicates that CLI tools are no longer standalone silos but part of a broader, hybrid development ecosystem.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** July 3, 2026
**Source:** `anthropics/skills` Repository Analysis

## 1. Top Skills Ranking
*Based on community engagement and technical complexity in recent Pull Requests.*

1.  **Self-Audit / Mechanical Verification**
    *   **Functionality:** A meta-skill that performs pre-delivery checks on AI output, verifying file existence and reasoning quality across four dimensions.
    *   **Status:** Open | **Link:** [PR #1367](https://github.com/anthropics/skills/pull/1367)
    *   **Highlights:** Addresses the critical need for reliability in agent workflows; introduces "damage-severity priority" auditing.

2.  **Frontend Design Clarity & Actionability**
    *   **Functionality:** Refines the `frontend-design` skill to ensure instructions are executable within a single conversation, removing ambiguity.
    *   **Status:** Open | **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)
    *   **Highlights:** Focuses on practical usability over theoretical guidance; aims to reduce hallucination in design tasks.

3.  **Color Expert**
    *   **Functionality:** Provides deep expertise in color naming systems (ISCC-NBS, Munsell, XKCD) and spaces (OKLCH, CAM16).
    *   **Status:** Open | **Link:** [PR #1302](https://github.com/anthropics/skills/pull/1302)
    *   **Highlights:** Fills a niche gap in professional design workflows requiring precise color specification beyond basic hex codes.

4.  **Document Typography Quality Control**
    *   **Functionality:** Prevents typographic errors like orphan words, widows, and numbering misalignment in generated documents.
    *   **Status:** Open | **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)
    *   **Highlights:** Targets high-frequency pain points in professional document generation (PDFs/Word).

5.  **ODT (OpenDocument) Support**
    *   **Functionality:** Enables creation, filling, and parsing of OpenDocument Text/Spreadsheet formats.
    *   **Status:** Open | **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)
    *   **Highlights:** Expands ecosystem support beyond Microsoft Office formats, appealing to Linux/LibreOffice users.

6.  **Testing Patterns**
    *   **Functionality:** Comprehensive guide covering testing philosophy (Testing Trophy), unit testing (AAA pattern), and React component testing.
    *   **Status:** Open | **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)
    *   **Highlights:** Moves beyond simple code generation to enforce industry-standard testing methodologies.

7.  **Skill Quality & Security Analyzer**
    *   **Functionality:** Meta-skills that evaluate other skills based on structure, documentation, and security practices.
    *   **Status:** Open | **Link:** [PR #83](https://github.com/anthropics/skills/pull/83)
    *   **Highlights:** Critical infrastructure for maintaining repository hygiene and trust.

## 2. Community Demand Trends
*Distilled from top community Issues.*

*   **Trust & Security Boundaries:** High anxiety regarding namespace impersonation. Users are demanding stricter verification that skills are officially endorsed by Anthropic versus community-contributed (#492).
*   **Enterprise Collaboration:** Strong demand for org-wide skill sharing mechanisms to bypass manual file distribution (#228).
*   **Tooling Reliability:** Significant frustration with `run_eval.py` and `skill-creator` utilities failing due to OS-specific bugs (Windows encoding, path resolution) and YAML parsing errors (#556, #1050, #362).
*   **Context Efficiency:** Requests for skills that help manage agent memory and context windows, such as "compact-memory" (#1329) and "agent-governance" (#412).
*   **Platform Integration:** Interest in exposing skills as MCPs (Model Context Protocol) servers for broader API integration (#16) and better AWS Bedrock compatibility (#29).

## 3. High-Potential Pending Skills
*Active PRs addressing critical bugs or adding foundational capabilities.*

*   **Fixes for `run_eval.py` Recall Errors:** Multiple PRs (#1298, #1323, #1099, #1169) are attempting to fix a systemic bug where evaluation scripts report 0% recall. Merging any of these would significantly improve the quality of the skill-creation loop.
    *   *Priority:* Critical. **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298)
*   **YAML Validation Improvements:** PRs #539 and #361 address silent failures in skill descriptions containing special characters, which break installation.
    *   *Priority:* High. **Link:** [PR #539](https://github.com/anthropics/skills/pull/539)
*   **Windows Subprocess Compatibility:** PRs #1050 and #362 fix fundamental runtime errors on Windows, expanding the viable user base for skill creation.
    *   *Priority:* High. **Link:** [PR #1050](https://github.com/anthropics/skills/pull/1050)

## 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust, cross-platform tooling reliability** (fixing Windows/YAML bugs) and **enterprise-grade security/trust mechanisms** (namespace protection and org-sharing), rather than just new functional skills.

---

# Claude Code Community Digest | 2026-07-03

## 1. Today's Highlights
Anthropic released v2.1.199, introducing stacked slash-skill invocations and critical SSL certificate handling improvements. Community attention remains heavily focused on Issue #38335 regarding abnormal session limit exhaustion on the Max plan, which has garnered significant engagement. Recent updates also highlight ongoing stability challenges with background sub-agents and macOS sandbox configurations.

## 2. Releases
**v2.1.199**
*   **Stacked Skill Invocations:** Users can now chain slash-skill commands (e.g., `/skill-a /skill-b do XYZ`), allowing up to 5 leading skills to load simultaneously rather than just the first.
*   **SSL/TLS Fixes:** Addressed persistent SSL certificate errors caused by TLS-inspecting proxies, missing `NODE_EXTRA_CA_CERTS`, or expired certs. The update ensures retries occur before presenting actionable guidance to prevent silent failures.

## 3. Hot Issues
1.  **[BUG] Max plan session limits exhausted abnormally fast** (#38335)
    *   **Why it matters:** Reports severe quota depletion starting March 23, impacting core utility for high-tier users.
    *   **Reaction:** 789 comments, 467 👍. High community concern due to billing implications.
2.  **[FEATURE] Add Option to Always Show Claude's Thinking** (#8477)
    *   **Why it matters:** Addresses transparency desires post-v2.0.0, allowing users to view the reasoning process.
    *   **Reaction:** 86 comments, 307 👍. Strong demand for visibility into model logic.
3.  **[BUG] AskUserQuestion: "No response after 60s"** (#73125)
    *   **Why it matters:** Critical UX bug where the tool auto-dismisses while users are actively typing, breaking workflows.
    *   **Reaction:** 62 comments, 218 👍. Frustration over timeout mechanics interrupting complex inputs.
4.  **[FEATURE] Add support for subdirectories in skills** (#10238)
    *   **Why it matters:** Essential for organizing larger skill sets and modular development.
    *   **Reaction:** 46 comments, 162 👍. Widely requested structural improvement.
5.  **[BUG] Scroll wheel no longer scrolls conversation (v2.1.150+)** (#65833)
    *   **Why it matters:** Regression in WSL/TUI navigation; scroll sends arrow keys instead of scrolling.
    *   **Reaction:** 29 comments, 53 👍. Disrupts basic interaction patterns.
6.  **[FEATURE] Require double ESC in Vim mode for Plan Mode Q&A** (#10621)
    *   **Why it matters:** Prevents accidental message deletion in Vim mode during planning phases.
    *   **Reaction:** 20 comments, 26 👍. Quality-of-life fix for power users.
7.  **[BUG] Subagents not awaiting nested results** (#69824)
    *   **Why it matters:** Causes race conditions and duplicate work, undermining reliability of agent hierarchies.
    *   **Reaction:** 6 comments, 0 👍. Technical deep-dive issue affecting advanced automation.
8.  **[BUG] Anthropic API Usage Policy classifier false positive** (#61625)
    *   **Why it matters:** Legitimate security terminology triggers policy blocks, hindering professional use cases.
    *   **Reaction:** 5 comments, 2 👍. Concerns over overly sensitive content filters.
9.  **[BUG] Background sub-agents stay "In esecuzione"** (#73490)
    *   **Why it matters:** UI state desynchronization where completed agents appear stuck, confusing users.
    *   **Reaction:** 5 comments, 9 👍. Visual bug in activity tracking.
10. **[BUG] macOS sandbox unusable with many git worktrees** (#73468)
    *   **Why it matters:** `ARG_MAX` exceeded by Seatbelt profiles breaks all sandboxed commands, including trivial ones.
    *   **Reaction:** 1 comment, 1 👍. Critical blocker for macOS developers using complex repo structures.

## 4. Key PR Progress
*Note: Only 4 PRs were updated in the last 24 hours.*

1.  **[fix] Remove statsig.anthropic.com from init-firewall.sh** (#72451)
    *   Resolves devcontainer startup failures by removing a non-resolving hostname from the firewall allowlist.
2.  **[docs] Fix GitHub capitalization in README** (#73476)
    *   Corrects "Github" to "GitHub" in documentation for consistency.
3.  **[docs] Fix Github -> GitHub typo in README** (#72866)
    *   Additional documentation cleanup correcting capitalization errors.
4.  **[Create Cha...** (#72543)
    *   Summary truncated in source data; appears to be an incomplete or draft pull request with no further details provided.

## 5. Feature Request Trends
*   **Transparency & Visibility:** Users strongly desire control over the display of internal model thinking (#8477) and clearer error messages for policy flags (#61625).
*   **Workflow Efficiency:** Requests for auto-updating plugins/skills at session start (#73681) and improved keyboard shortcuts for split-view navigation (#73679) indicate a need for smoother, less interruptive workflows.
*   **Structural Organization:** Support for subdirectories in skills (#10238) reflects a maturing user base needing better tool organization.

## 6. Developer Pain Points
*   **Agent Stability:** Recurring issues with sub-agent lifecycle management, including race conditions (#69824), orphaned processes (#73670), and UI state desynchronization (#73400), suggest instability in the background execution engine.
*   **Platform-Specific Regressions:** Significant friction points on macOS (sandbox limits #73468, daemon restart failures #73670) and Windows (Vim mode behavior #10621, log rotation #68029) highlight ongoing challenges with cross-platform consistency.
*   **Quota & Billing Anxiety:** The massive engagement on session limit exhaustion (#38335) reveals deep user anxiety regarding resource consumption predictability on paid tiers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-07-03

## 1. Today's Highlights
The Codex team has released alpha versions `v0.143.0-alpha.33` and `v0.143.0-alpha.34`, signaling active development on the Rust backend. Simultaneously, a massive security hardening effort is underway, with over ten pull requests focusing on isolating Git operations, blocking malicious filters, and preventing repository-controlled executable hijacking.

## 2. Releases
*   **rust-v0.143.0-alpha.34**: Latest alpha release.
*   **rust-v0.143.0-alpha.33**: Previous alpha release.

## 3. Hot Issues
1.  **[Enhancement] Codex desktop app for Linux** (#11023)
    *   *Why it matters:* Addresses the long-standing demand for native Linux support, crucial for developers prioritizing power efficiency and open-source ecosystems.
    *   *Community Reaction:* Extremely high engagement with 680 👍 and 139 comments.
2.  **[Bug] Codex SQLite feedback logs can write ~640 TB/year** (#28224)
    *   *Why it matters:* Highlights severe storage endurance issues on client devices due to excessive logging.
    *   *Community Reaction:* 419 👍; marked as resolved via recent PR merges, closing the issue.
3.  **[Bug] WebSocket upgrade succeeds then server closes with 1008 Policy** (#13041)
    *   *Why it matters:* Indicates underlying connectivity instability where WebSockets fall back to HTTPS, potentially impacting performance and real-time capabilities.
    *   *Community Reaction:* 161 👍, 74 comments.
4.  **[Bug] Codex replies to earlier messages instead of latest one** (#8648)
    *   *Why it matters:* A critical context management bug affecting conversation continuity and accuracy.
    *   *Community Reaction:* 55 👍, 73 comments.
5.  **[Bug] High GPU usage while the app is “thinking”** (#16857)
    *   *Why it matters:* Points to inefficient resource utilization during idle processing states, causing thermal throttling on laptops.
    *   *Community Reaction:* 39 👍.
6.  **[Bug] Codex App frequently freezes/stutters on Windows 11 Pro** (#20214)
    *   *Why it matters:* Significant UX degradation on a major OS platform, despite adequate hardware specs.
    *   *Community Reaction:* 39 👍.
7.  **[Bug] Windows Codex Desktop: node_repl/js fails with missing field** (#29193)
    *   *Why it matters:* Breaks JavaScript execution tools in the Windows sandbox, hindering web development workflows.
    *   *Community Reaction:* 4 👍.
8.  **[Enhancement] Add setting to disable the auto-resolve in 60 seconds** (#28969)
    *   *Why it matters:* Gives users control over the "Fast Mode" auto-approval behavior, improving safety for sensitive operations.
    *   *Community Reaction:* 74 👍.
9.  **[Bug] Windows Desktop: Chrome/Computer Use enabled but mcp__node_repl__js is not exposed** (#30486)
    *   *Why it matters:* Configuration mismatch between installed plugins and available tools blocks Computer Use workflows.
    *   *Community Reaction:* 0 👍, but critical for specific use cases.
10. **[Bug] GPT-5.5 performance and reliability seem significantly worse today** (#24431)
    *   *Why it matters:* Reports regression in model quality, specifically regarding bug fixing capabilities and introducing new errors.
    *   *Community Reaction:* 14 👍, 8 comments.

## 4. Key PR Progress
1.  **[core] Support interleaved response items** (#30876)
    *   Improves handling of streaming responses where reasoning and final answer events interleave, ensuring complete TUI output.
2.  **[codex] Add configurable multi-agent mode hint text** (#30493)
    *   Allows customization of delegation policies for multi-agent V2 modes, replacing built-in reasoning effort derivations.
3.  **[codex] Wire reasoning summary delivery configuration** (#30752)
    *   Adds typed configuration for reasoning summary delivery (sequential/concurrent) and exposes it via the API.
4.  **Derive effective patch paths through Git** (#30837)
    *   Enhances patch safety by ensuring Git determines actual changed paths, avoiding discrepancies with diff headers.
5.  **Block selected Git filters before staging patch paths** (#30850)
    *   Prevents security risks where a validated file becomes a directory during staging, allowing unchecked recursion.
6.  **Centralize repository authority for Git helper launches** (#30896)
    *   Creates a single trusted authority for Git executables to improve security and reduce timeout issues on Windows.
7.  **Block selected merge drivers before three-way patch application** (#30854)
    *   Mitigates risks from repository-selected merge drivers that could damage unrelated staged work during patch application.
8.  **Confine staged patch paths to the parent worktree** (#30844)
    *   Stops Git staging from following symlinks or junctions outside the trusted worktree parent directory.
9.  **Block selected executable Git filters before patch application** (#30848)
    *   Secures patch operations by blocking repository-controlled clean/smudge/process filters.
10. **Trust only system PowerShell parsers on Windows** (#30628)
    *   Hardens Windows security by ensuring only system-installed PowerShell executables are used for command parsing, preventing repository hijacking.

## 5. Feature Request Trends
*   **Cross-Platform Parity:** Strong demand for Linux desktop support (#11023) and consistent feature parity between CLI and Desktop apps (e.g., Computer Use in CLI #20851).
*   **User Control & Safety:** Requests for granular control over auto-resolve timeouts (#28969) and better visibility into usage limits (#30918).
*   **Workflow Integration:** Desire for native worktree selection (#22316) and improved handling of detached HEAD states (#10704).

## 6. Developer Pain Points
*   **Security & Sandboxing Complexity:** A significant volume of issues and PRs relate to Git security, sandbox isolation, and tool exposure failures, particularly on Windows (#29193, #29413, #30343). Developers are frustrated by broken toolchains (MCP/Node REPL) and complex setup requirements.
*   **Performance & Stability:** Recurring reports of app freezing (#20214), high GPU/CPU usage during idle thinking (#16857), and temperature spikes on Windows (#30055) indicate optimization gaps in the desktop client.
*   **Context Management:** Bugs related to responding to old messages (#8648) and stale thread entries (#14162) disrupt coding workflows and require manual intervention.
*   **Storage Overhead:** The SQLite logging issue (#28224) highlights concerns about client-side storage bloat, although recent fixes suggest this is being addressed.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-07-03

### 1. Today's Highlights
The Gemini CLI team released nightly build `v0.51.0-nightly.20260703`, introducing the skeleton for the Egress Cloud Run service within the caretaker tooling. Significant attention is directed toward stabilizing the agent architecture, with critical fixes for recursive reasoning loops, JSON/IPYNB file corruption, and subagent recovery mechanisms. Community engagement highlights persistent challenges with subagent utilization and browser agent resilience on Wayland.

### 2. Releases
**v0.51.0-nightly.20260703.gf7af4e518**
*   **feat(caretaker):** Introduced the skeleton for the Egress Cloud Run service to handle verified action events via Cloud Pub/Sub.
    *   [PR #28167](https://github.com/google-gemini/gemini-cli/pull/28167)
    *   [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260702.gff00dacd9...v0.51.0-nightly.20260703.gf7af4e518)

### 3. Hot Issues
1.  **[Bug] Subagent recovery after MAX_TURNS reported as GOAL success (#22323)**
    *   *Why it matters:* Critical bug where the `codebase_investigator` subagent falsely reports success despite hitting turn limits, masking errors.
    *   *Reaction:* 9 comments, 2 👍. High priority for debugging reliability.
2.  **[Enhancement] Leverage model's bash affinity via Zero-Dependency OS Sandboxing (#19873)**
    *   *Why it matters:* Proposes using native bash tools for code exploration to align with Gemini 3's training, improving efficiency and security.
    *   *Reaction:* 8 comments, 1 👍. Strong interest in optimizing agent execution paths.
3.  **[Bug] Generalist agent hangs forever (#21409)**
    *   *Why it matters:* The generalist agent enters an infinite wait state for simple tasks (e.g., folder creation), requiring manual cancellation.
    *   *Reaction:* 7 comments, 8 👍. One of the highest-engagement bug reports due to usability impact.
4.  **[Bug] Gemini does not use skills and sub-agents enough (#21968)**
    *   *Why it matters:* Anecdotal evidence suggests the model fails to autonomously invoke custom skills or sub-agents without explicit prompting.
    *   *Reaction:* 6 comments. Highlights a gap in prompt engineering or agent routing logic.
5.  **[Security] Add deterministic redaction and reduce Auto Memory logging (#26525)**
    *   *Why it matters:* Addresses privacy risks where secrets might be sent to the model before redaction occurs in the extraction pipeline.
    *   *Reaction:* 5 comments. Critical for enterprise compliance.
6.  **[Bug] Auto Memory retries low-signal sessions indefinitely (#26522)**
    *   *Why it matters:* Resource waste and potential infinite loops in the background memory extraction agent.
    *   *Reaction:* 5 comments. Impacts performance and stability.
7.  **[Bug] Shell command execution gets stuck with "Waiting input" (#25166)**
    *   *Why it matters:* CLI hangs after simple commands complete, falsely awaiting user input.
    *   *Reaction:* 4 comments, 3 👍. Frequent frustration point for workflow automation.
8.  **[Bug] Browser subagent fails in Wayland (#21983)**
    *   *Why it matters:* Blocks browser automation capabilities for Linux users on Wayland compositors.
    *   *Reaction:* 4 comments, 1 👍. Platform-specific compatibility issue.
9.  **[Bug] 400 error with > 128 tools (#24246)**
    *   *Why it matters:* Hard limit encountered when many tools are enabled, suggesting poor tool scoping logic in the API request.
    *   *Reaction:* 3 comments. Limits scalability of complex toolsets.
10. **[Bug] Browser Agent ignores settings.json overrides (#22267)**
    *   *Why it matters:* Configuration changes (e.g., `maxTurns`) are silently ignored by the browser agent, leading to unexpected behavior.
    *   *Reaction:* 3 comments. Configuration drift issue.

### 4. Key PR Progress
1.  **Fix: Bypass LLM correction for JSON and IPYNB files (#28223)**
    *   Resolves critical corruption issues in Jupyter Notebooks and JSON files by preventing unnecessary LLM intervention during writes.
    *   [PR #28223](https://github.com/google-gemini/gemini-cli/pull/28223)
2.  **Feat: Support AGENTS.md out of the box (#28240)**
    *   Adds `AGENTS.md` to the default context loading list alongside `GEMINI.md`, improving discoverability of agent instructions.
    *   [PR #28240](https://github.com/google-gemini/gemini-cli/pull/28240)
3.  **Fix: Limit recursive reasoning turns per request (#28164)**
    *   Caps recursive reasoning at 15 turns (customizable) to prevent CPU exhaustion and API quota abuse.
    *   [PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164)
4.  **Fix: Avoid keep-alive socket reuse during OAuth (#28103)**
    *   Addresses OAuth failures on recent Node.js releases (24.17.0, 22.23.0, 26.3.0) caused by CVE-2026-48931 security fixes.
    *   [PR #28103](https://github.com/google-gemini/gemini-cli/pull/28103)
5.  **Fix: Prevent infinite loop in ghost text wrapping (#27747)**
    *   Fixes CLI freeze when terminal width is narrower than a codepoint (e.g., emojis) during completion.
    *   [PR #27747](https://github.com/google-gemini/gemini-cli/pull/27747)
6.  **Fix: Strip thoughts from scrubbed history (#27971)**
    *   Resolves "Thought Leakage" where internal monologues corrupt plain-text history, causing infinite loop monologues.
    *   [PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971)
7.  **Feat: Report cached and thought tokens in ACP usage (#27986)**
    *   Ensures accurate cost estimation for ACP clients by including cached and reasoning token counts.
    *   [PR #27986](https://github.com/google-gemini/gemini-cli/pull/27986)
8.  **Fix: Decode response body using Content-Type charset (#27996)**
    *   Corrects garbled text issues for non-UTF-8 encodings (e.g., GBK, ISO-8859-1) in web fetches.
    *   [PR #27996](https://github.com/google-gemini/gemini-cli/pull/27996)
9.  **Fix: Show ellipsis on multi-line edit snippets (#28126)**
    *   Improves UI clarity by appending `...` when edit snippets are truncated.
    *   [PR #28126](https://github.com/google-gemini/gemini-cli/pull/28126)
10. **Docs: Safe test command for policy engine (#28244)**
    *   Updates documentation to use safe test commands instead of `rm -rf /` examples.
    *   [PR #28244](https://github.com/google-gemini/gemini-cli/pull/28244)

### 5. Feature Request Trends
*   **Robust Agent Routing & Recovery:** Users are requesting better handling of subagent failures (MAX_TURNS) and more autonomous invocation of skills/subagents.
*   **Security & Privacy Hardening:** Strong demand for deterministic redaction in Auto Memory, prevention of secret leakage in logs, and safer shell execution environments.
*   **Platform Compatibility:** Specific requests for fixing browser agent behavior on Wayland and resolving symlink recognition issues in agent definitions.
*   **UI/UX Stability:** Requests for fixing terminal flicker during resize, handling emoji truncation correctly, and stabilizing external editor interactions.

### 6. Developer Pain Points
*   **Agent Reliability:** Recurring reports of agents hanging indefinitely (Generalist, Shell commands) or failing to recover from turn limits.
*   **Configuration Drift:** Settings in `settings.json` (e.g., for Browser Agent) are sometimes ignored, leading to inconsistent behavior.
*   **Tool Limitations:** The 128-tool limit causing 400 errors and the inability to safely use destructive commands in documentation without risk.
*   **Platform-Specific Bugs:** Wayland support for browser automation and macOS symlink path mismatches remain persistent friction points.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-03

### 1. Today's Highlights
The Copilot CLI community is currently grappling with significant stability issues regarding session state management, particularly concerning memory loss during `/new` commands and incorrect model switching when using BYOK configurations. Additionally, rendering bugs affecting text alignment, scrollbar interference, and accessibility (screen reader echo) are generating high community engagement, indicating a need for immediate UI/UX refinements in the latest v1.0.69 release.

### 2. Releases
*   **No new releases.** The latest stable version remains **v1.0.69-0**, introduced in recent updates. Several reported bugs (themes, rendering, BYOK logic) are tied to this specific build.

### 3. Hot Issues
These issues have garnered attention due to their impact on core functionality, accessibility, or widespread platform compatibility.

1.  **[Bug] Scroll bar makes text unalign (#3501)**
    *   **Why it matters:** Affects the fundamental readability of the CLI interface on Windows.
    *   **Community Reaction:** High engagement (9 👍), indicating a persistent pain point since the scroll bar's introduction.
    *   [Link](https://github.com/github/copilot-cli/issues/3501)

2.  **[Bug] Plan→Compact→Re-Plan infinite loop (#3158)**
    *   **Why it matters:** Causes agents to hang in a 217-cycle loop with zero execution, effectively breaking long-running coding sessions.
    *   **Community Reaction:** Marked as high-severity by internal routing; critical for agent reliability.
    *   [Link](https://github.com/github/copilot-cli/issues/3158)

3.  **[Bug] Screen-reader does not echo characters (#3993)**
    *   **Why it matters:** Blocks accessibility for visually impaired developers, preventing reliable input correction.
    *   **Community Reaction:** New report, highlighting a gap in inclusive design for the CLI.
    *   [Link](https://github.com/github/copilot-cli/issues/3993)

4.  **[Bug] Theme setting not remembered (#4015)**
    *   **Why it matters:** User preferences reset unexpectedly after the `/settings` command changes, degrading UX.
    *   **Community Reaction:** Fresh report (today) affecting v1.0.69-0 users.
    *   [Link](https://github.com/github/copilot-cli/issues/4015)

5.  **[Bug] Terminal mouse-selection copy corrupted by scrollbar (#4009)**
    *   **Why it matters:** Makes copying output difficult as every line includes trailing whitespace and the `┃` glyph.
    *   **Community Reaction:** New report (today), directly linked to the rendering issues in #3501.
    *   [Link](https://github.com/github/copilot-cli/issues/4009)

6.  **[Bug] Ctrl+G expands literal token instead of text (#3936)**
    *   **Why it matters:** Breaks the expected workflow for editing pasted content in `$EDITOR`, reducing parity with other tools like Claude Code.
    *   **Community Reaction:** Feature request with strong user advocacy (1 👍).
    *   [Link](https://github.com/github/copilot-cli/issues/3936)

7.  **[Bug] BYOK: reasoning effort not supported (#4012)**
    *   **Why it matters:** Prevents advanced usage of custom models (e.g., GLM) that require specific reasoning flags.
    *   **Community Reaction:** New report (today) impacting enterprise/custom model workflows.
    *   [Link](https://github.com/github/copilot-cli/issues/4012)

8.  **[Bug] Session shutdown loses metrics (#3994)**
    *   **Why it matters:** Token usage data is discarded without logging when switching sessions, affecting billing/monitoring accuracy.
    *   **Community Reaction:** New report (today) highlighting telemetry gaps.
    *   [Link](https://github.com/github/copilot-cli/issues/3994)

9.  **[Bug] Cannot copy output in VSCode Server (#3996)**
    *   **Why it matters:** Breaks clipboard functionality in browser-based remote environments, a common setup for many devs.
    *   **Community Reaction:** New report (yesterday) affecting cross-platform usability.
    *   [Link](https://github.com/github/copilot-cli/issues/3996)

10. **[Bug] Allowed-tools: shell does not auto-approve compound commands (#3165)**
    *   **Why it matters:** Forces excessive permission prompts for complex but safe shell scripts, slowing down automation.
    *   **Community Reaction:** Closed but relevant context for ongoing permission friction discussions.
    *   [Link](https://github.com/github/copilot-cli/issues/3165)

### 4. Key PR Progress
*Note: The provided data contains two PRs (#3880, #3873) with ambiguous titles and limited context. They appear to be minor or potentially unrelated contributions. No major functional PRs were listed in the last 24h.*

1.  **PR #3880** - `beyond the streets of amaerica`
    *   **Summary:** Imports `Card` and `Badge` components. Context suggests UI component refactoring or example code, but title is non-descriptive.
    *   [Link](https://github.com/github/copilot-cli/pull/3880)

2.  **PR #3873** - `1000Add initial console log for greeting`
    *   **Summary:** Adds initial console logging for greeting. Likely a debug or initialization aid.
    *   [Link](https://github.com/github/copilot-cli/pull/3873)

*(Note: The remaining PR slots are empty as no other significant PRs were provided in the source data for this period.)*

### 5. Feature Request Trends
*   **Custom Endpoint & Model Support:** Users are requesting parity with VS Code’s ability to configure custom model endpoints (Issue #4003) and better support for BYOK features like `reasoning-effort` (Issue #4012).
*   **Keyboard & Accessibility Parity:** Strong demand for improving keyboard shortcuts (Ctrl+G expansion, Issue #3936) and ensuring screen reader compatibility (Issue #3993) to match industry standards.
*   **Persistent Permissions:** Requests for persistent deny-rules in `permissions-config.json` (Issue #3995) to reduce repetitive approval prompts for specific command families.
*   **Non-Interactive Initialization:** Need for headless `/init` capabilities for CI/CD or scripting environments (Issue #4011).

### 6. Developer Pain Points
*   **Session State Integrity:** Frequent reports of data loss (metrics, session history) when switching between `/clear`, `/new`, and BYOK modes indicate fragile state management in the core engine.
*   **Terminal Rendering Glitches:** Multiple overlapping issues regarding text alignment, scrollbar interference, and copy-paste corruption suggest the new rendering layer in v1.0.69-0 needs stabilization across Windows, macOS, and remote environments.
*   **BYOK Configuration Fragility:** Users are experiencing unexpected model resets and unsupported flags when switching between Copilot-managed and Bring-Your-Own-Key models, creating friction for enterprise and advanced users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-03

### 1. Today's Highlights
There are no new releases in the last 24 hours, but community attention is focused on resolving persistent looping bugs in version 0.76 and WebSocket connectivity issues on macOS. A notable contribution addresses Windows terminal compatibility by fixing binary paste handling via BracketedPaste events.

### 2. Releases
*No new releases reported in the last 24 hours.*

### 3. Hot Issues
*Note: Only 2 issues were updated in the last 24 hours. Listed below are the most relevant from the provided data.*

*   **[BUG] Kimi CLI stuck in reading one file again and again and stuck in a loop (#640)**
    *   **Why it matters:** This critical bug affects users on Linux (Arch) using custom Anthropic endpoints with `mimo-v2-flash`. The infinite loop disrupts workflow significantly.
    *   **Community Reaction:** High engagement with 16 comments and 1 👍, indicating strong interest in a resolution.
    *   **Link:** [Issue #640](https://github.com/MoonshotAI/kimi-cli/issues/640)

*   **[BUG] kimi web use tailscale websocket connecttion error (#1111)**
    *   **Why it matters:** Users attempting to use Tailscale for secure remote connections on macOS (Darwin arm64) encounter WebSocket errors, blocking remote development scenarios.
    *   **Community Reaction:** Low engagement (2 comments, 0 👍), suggesting it may be an edge case or already under investigation.
    *   **Link:** [Issue #1111](https://github.com/MoonshotAI/kimi-cli/issues/1111)

### 4. Key PR Progress
*Note: Only 1 PR was updated in the last 24 hours.*

*   **[fix(shell)] read clipboard media on BracketedPaste for Windows terminals (#2481)**
    *   **Description:** Fixes silent failures when pasting binary content (like images) on Windows Terminal and VS Code integrated terminals. The fix modifies `_handle_bracketed_paste()` to properly handle BracketedPaste events where `Ctrl+V` is intercepted by the terminal.
    *   **Status:** Open, awaiting review.
    *   **Link:** [PR #2481](https://github.com/MoonshotAI/kimi-cli/pull/2481)

### 5. Feature Request Trends
Based on the current issue landscape, there is a trend toward:
*   **Enhanced Platform Compatibility:** Specifically targeting niche environments like Tailscale-integrated networks and specific Windows terminal behaviors.
*   **Stability in Custom Configurations:** Users are increasingly relying on custom configurations (`config.toml`) and third-party endpoints, highlighting a need for robustness in non-standard setups.

### 6. Developer Pain Points
*   **Infinite Loops in File Reading:** The "stuck in a loop" bug (#640) represents a significant stability pain point for users on Linux with custom models.
*   **Clipboard Handling on Windows:** The inability to paste binary media silently fails is a usability friction point for Windows users, particularly those using integrated terminals like VS Code.
*   **Network Connectivity in Remote Setups:** WebSocket errors when using tunneling solutions like Tailscale indicate gaps in how the CLI handles complex network proxying scenarios.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-07-03

### 1. Today's Highlights
The OpenCode development team is heavily focused on stabilizing the V2 session runner and refining the desktop UI, with significant contributions from Kitlangton regarding prompt lifecycle and context checkpoints. Community attention is dominated by billing discrepancies in the Go subscription service and performance bottlenecks when handling large files or deep sessions on Windows and macOS.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Hot Issues
*   **[FEATURE] Adjust Go usage limits after DeepSeek V4 Pro price reduction** (#28846)
    *   *Why it matters:* Users are requesting usage limits be recalibrated to match the 75% permanent price cut of DeepSeek V4 Pro.
    *   *Reaction:* High engagement with 90 comments and 82 upvotes, indicating strong demand for fairer quota allocation.
*   **[FEATURE] VS Code Integration for Reviewing OpenCode Code Changes** (#8003)
    *   *Why it matters:* Addresses the pain point of reviewing large diffs in the TUI by proposing a native VS Code diff preview.
    *   *Reaction:* 73 upvotes highlight the need for better IDE integration for code review workflows.
*   **[bug] Hidden calls Haiku** (#10272)
    *   *Why it matters:* Reports silent fallback to paid/unused models (Claude Haiku 4.5) when using OpenRouter with explicit model selection.
    *   *Reaction:* Critical for trust in provider routing; 5 upvotes suggest early detection by power users.
*   **[OPEN] Zen API endpoints return 404 on CORS preflight** (#31041)
    *   *Why it matters:* Blocks all browser-based clients from accessing the Zen API due to missing OPTIONS handling.
    *   *Reaction:* Technical blocker for web integrations; 8 comments indicate active debugging.
*   **[OPEN] Desktop app merges separate directories of the same Git repo** (#29869)
    *   *Why it matters:* Unexpected behavior where distinct local worktrees are merged into a single project, complicating multi-repo workflows.
    *   *Reaction:* 4 upvotes reflect frustration with project isolation logic.
*   **[OPEN] New Layout and Designs开启无法切换Plan/Build** (#31072)
    *   *Why it matters:* A regression in v1.16.2 where the Plan/Build mode toggle becomes unresponsive in the new UI layout.
    *   *Reaction:* 7 upvotes show immediate impact on workflow efficiency.
*   **[OPEN] OpenCode Go hangs forever after "build" on Windows** (#35035)
    *   *Why it matters:* New subscribers on Windows experience indefinite hangs after model initialization, blocking basic functionality.
    *   *Reaction:* 0 upvotes but high severity; reported immediately upon discovery.
*   **[OPEN] Billing: OpenCode Go Subscription Remains Locked After Removing Previous Member** (#35049)
    *   *Why it matters:* Workspace administration bug preventing subscription transfer after removing the original owner.
    *   *Reaction:* Critical administrative blocker; reported today.
*   **[OPEN] Read Tool is really slow on massive files** (#35044)
    *   *Why it matters:* Performance degradation when reading files with millions of lines, impacting agent reliability on large codebases.
    *   *Reaction:* 0 upvotes but directly linked to an incoming fix PR.
*   **[CLOSED] V2 runner has no native route for @ai-sdk/xai models** (#35034)
    *   *Why it matters:* xAI models fail due to missing prompt cache key routing in the V2 runner.
    *   *Reaction:* 2 comments; resolved quickly by contributors.

### 4. Key PR Progress
*   **fix(go): filter models list to only show oa-compat supported models** (#33547)
    *   *Description:* Filters the `/zen/go/v1/models` endpoint to exclude non-compatible models, fixing catalog display issues.
*   **fix(core): skip ahead by counting newlines when reading at a high offset** (#35050)
    *   *Description:* Optimizes the `ReadTool` to handle large files efficiently by skipping newline counts rather than parsing linearly.
*   **feat(app): navigate tabs on mousedown in new layout** (#35042)
    *   *Description:* Reduces latency in tab switching within the new desktop layout by triggering navigation on `mousedown` instead of `mouseup`.
*   **refactor(core): simplify v2 prompt lifecycle and execution coordination** (#35047)
    *   *Description:* Cleans up the V2 prompt admission and drainage logic, ensuring tool output failures are not silently absorbed.
*   **feat(core): deterministic session log replay with synced watermark** (#35040)
    *   *Description:* Replaces moving-boundary markers with a fixed watermark for deterministic log replay, improving stability for reconnects.
*   **fix(console): skip console-side 429 retry for gateway providers** (#34943)
    *   *Description:* Prevents double-retry of rate-limited requests by letting the gateway handle failovers internally.
*   **refactor(core): replace context epoch with checkpoint** (#35046)
    *   *Description:* Simplifies context persistence by replacing epochs with a single-entry checkpoint, resolving deduplication conflicts.
*   **fix(core): remove mcp tool call timeout** (#35043)
    *   *Description:* Removes unnecessary timeouts from prompt retrieval and tool execution, scoping them only to catalog/list requests.
*   **feat(desktop): add recently closed projects to home** (#34926)
    *   *Description:* Enhances the desktop home view with a "Recently closed" list for quicker project restoration.
*   **feat(desktop): reopen closed tabs, cmd+w close tab, background tab open** (#35010)
    *   *Description:* Implements browser-standard tab management behaviors in the V2 desktop UI.

### 5. Feature Request Trends
*   **Subscription & Billing Fairness:** There is a strong trend toward adjusting usage limits to reflect actual API costs (e.g., DeepSeek price cuts) and fixing workspace transfer bugs.
*   **IDE Integration:** Users are increasingly requesting tighter integration with standard IDEs (VS Code) for code review and diffing, moving beyond the TUI.
*   **Desktop UX Polish:** The community values "papercut" fixes like tab management, recent project lists, and faster navigation interactions in the new V2 layout.
*   **Performance Transparency:** Requests for better handling of large files and sessions, along with clearer error reporting for network interruptions.

### 6. Developer Pain Points
*   **Windows Stability:** Multiple reports of hangs, crashes, and subscription locks on Windows, suggesting the platform requires rigorous testing in the latest builds.
*   **Large File/Session Performance:** Significant latency and memory leaks occur when processing massive files or long session histories, particularly on Electron-based clients.
*   **Context Routing Errors:** Silent model fallbacks (e.g., OpenRouter/Haiku) and missing provider routes (xAI) cause confusion and unexpected billing.
*   **V2 Layout Regression:** The new layout introduced several regressions, including broken Plan/Build toggles and slow tab navigation, requiring rapid patching.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - 2026-07-03

### 1. Today's Highlights
The Pi community is heavily focused on stabilizing the 0.80.x series, with significant attention paid to fixing `null` content iteration errors introduced by recent reasoning model updates and addressing context window clamping issues in OpenAI providers. Concurrently, developers are pushing forward with infrastructure improvements, including the introduction of SQLite session storage and enhanced TUI rendering performance to reduce unnecessary redraws.

### 2. Releases
**No new releases were published in the last 24 hours.**

### 3. Hot Issues
*   **[Bug] OpenAI Completions Delta Handling (#4228)**
    *   *Summary:* Fixes incorrect accumulation of `reasoning_content`, `content`, and `tool_calls` in streams.
    *   *Impact:* Critical for ensuring accurate state management in multi-modal OpenAI interactions.
    *   *Reaction:* High discussion volume (19 comments); resolved via refactor. [Link](https://github.com/badlogic/pi-mono/issues/4228)
*   **[Bug] MiMo Models 400 Error in Multi-Turn Tool Use (#4505)**
    *   *Summary:* Cold-start sessions using MiMo models fail with 400 errors when tool calls are involved.
    *   *Impact:* Blocks usage of specific Xiaomi provider models for complex tasks.
    *   *Reaction:* 4 upvotes; identified as a regression requiring refactoring. [Link](https://github.com/badlogic/pi-mono/issues/4505)
*   **[Bug] `message.content` Not Iterable Crash (#4909 / #6259)**
    *   *Summary:* Reasoning models returning `null` content cause `TypeError: content is not iterable` across extensions and compaction.
    *   *Impact:* Breaks core agent loops and extension compatibility with newer models like GLM-5.2.
    *   *Reaction:* Multiple related reports (#2785, #6259); high priority fix merged. [Link](https://github.com/badlogic/pi-mono/issues/4909)
*   **[Bug] Auth Blocking Local Models (#6231)**
    *   *Summary:* Users report forced OAuth/API key prompts for local DeepSeek instances.
    *   *Impact:* UX friction for offline/local AI workflows.
    *   *Reaction:* Community confusion regarding provider detection logic. [Link](https://github.com/badlogic/pi-mono/issues/6231)
*   **[Bug] Pi Login Hangs in WSL (#6187)**
    *   *Summary:* Browser-based GitHub Copilot auth completes, but WSL client hangs waiting for token.
    *   *Impact:* Breaks authentication flow for Windows Subsystem for Linux users.
    *   *Reaction:* Active debugging of inter-process communication. [Link](https://github.com/badlogic/pi-mono/issues/6187)
*   **[Bug] DS4-Server Context Overflow Detection (#6262)**
    *   *Summary:* Auto-compaction fails to detect `400` prompt-too-large errors from local DeepSeek servers.
    *   *Impact:* Leads to silent failures or excessive token usage before compaction triggers.
    *   *Reaction:* Request for better error parsing in the compaction loop. [Link](https://github.com/badlogic/pi-mono/issues/6262)
*   **[Bug] Fable 5 Bedrock Caching Disabled (#6235 / #6245)**
    *   *Summary:* Recent Claude/Fable models on AWS Bedrock lack proper cache support flags.
    *   *Impact:* Increases latency and cost for Bedrock users.
    *   *Reaction:* Quick fix identified in provider config. [Link](https://github.com/badlogic/pi-mono/issues/6235)
*   **[Bug] Codex Websocket Termination (#6268)**
    *   *Summary:* Long-running tasks fail when Codex websocket hits 60-minute limit without retry.
    *   *Impact:* Reliability issue for extended coding sessions.
    *   *Reaction:* Feature request for automatic reconnection logic. [Link](https://github.com/badlogic/pi-mono/issues/6268)
*   **[Bug] OpenAI `max_output_tokens` Below Minimum (#6265)**
    *   *Summary:* Context-aware clamping pushes `max_output_tokens` below API minimum (16), causing 400 errors.
    *   *Impact:* Crashes long sessions nearing context limits.
    *   *Reaction:* Fix proposed in PR #6264. [Link](https://github.com/badlogic/pi-mono/issues/6265)
*   **[Bug] TUI Escape Key Stuck State (#6234)**
    *   *Summary:* Pressing Escape during extension hook hangs leaves Pi in "Working..." state.
    *   *Impact:* Poor UX and requires manual process kill.
    *   *Reaction:* Highlighted as a stability bug in the TUI event loop. [Link](https://github.com/badlogic/pi-mono/issues/6234)

### 4. Key PR Progress
*   **PR #6267: InlineExtension Type Support**
    *   *Status:* Open
    *   *Description:* Adds typed factory support for inline extensions, improving type safety for embedded agents. [Link](https://github.com/badlogic/pi-mono/pull/6267)
*   **PR #6266: Anthropic Strict Tool Use for Edit**
    *   *Status:* Open
    *   *Description:* Adjusts tool definitions to reduce error rates (~10%) in Claude edit operations. [Link](https://github.com/badlogic/pi-mono/pull/6266)
*   **PR #6264: Clamp OpenAI Responses Output Tokens**
    *   *Status:* Closed
    *   *Description:* Fixes the `max_output_tokens` minimum violation in OpenAI Responses API. [Link](https://github.com/badlogic/pi-mono/pull/6264)
*   **PR #6263: DeepInfra Provider Integration**
    *   *Status:* Closed
    *   *Description:* Adds built-in support for DeepInfra text and image generation APIs. [Link](https://github.com/badlogic/pi-mono/pull/6263)
*   **PR #6258: Guard Against Null Content**
    *   *Status:* Closed
    *   *Description:* Addresses the `TypeError: content is not iterable` crash by adding null checks in agent loops. [Link](https://github.com/badlogic/pi-mono/pull/6258)
*   **PR #6227: SQLite Session Storage**
    *   *Status:* Open
    *   *Description:* Introduces optional parallel SQLite storage for session transcripts alongside JSONL, enabling richer querying. [Link](https://github.com/badlogic/pi-mono/pull/6227)
*   **PR #6252: Fix Windows Drive Root Paths**
    *   *Status:* Closed
    *   *Description:* Corrects path formatting in the `find` tool for Windows bare drive roots. [Link](https://github.com/badlogic/pi-mono/pull/6252)
*   **PR #6248: Remove TUI Trailing Spaces**
    *   *Status:* Closed
    *   *Description:* Stops padding lines with spaces, fixing clipboard corruption in xterm.js/VS Code. [Link](https://github.com/badlogic/pi-mono/pull/6248)
*   **PR #6244: Sticky Interactive Input/Footer**
    *   *Status:* Closed
    *   *Description:* Implements a sticky-bottom API to keep input and footer visible during scrolling. [Link](https://github.com/badlogic/pi-mono/pull/6244)
*   **PR #6243: Fix Session Storage Race Conditions**
    *   *Status:* Closed
    *   *Description:* Resolves UUID collisions and data corruption in `JsonlSessionStorage`. [Link](https://github.com/badlogic/pi-mono/pull/6243)

### 5. Feature Request Trends
*   **Configurable Skill Paths:** Users are requesting `PI_SKILL_PATH` env vars and project-level `.pi/settings.json` support to manage skills across repositories without CLI flags (Issues #4981, #5570, #6191).
*   **Multi-Modal Provider Expansion:** Demand for adding new providers (DeepInfra, GitHub Copilot model updates like Kimi K2.7 and Claude Sonnet 5) is high, indicating a trend toward broader model accessibility (Issues #6256, #6257, #6263).
*   **TUI/UX Improvements:** Requests for sticky footers, improved scrollback navigation (Home/End keys), and cleaner clipboard handling suggest a focus on polishing the interactive experience (Issues #6199, #6244, #6251).

### 6. Developer Pain Points
*   **Reasoning Model Compatibility:** The shift toward models returning `reasoning_content` separately from `content` has caused widespread crashes (`null` iteration errors) and provider-specific bugs (OpenAI delta handling), requiring significant defensive coding in the core agent loop.
*   **Context Window Management:** Clamping logic for `max_tokens` is proving fragile, leading to API violations (minimum token limits) and failure to detect context overflows in local models, disrupting long-running sessions.
*   **Platform-Specific Auth & Clipboard:** WSL authentication hangs and Linux/Bun clipboard failures highlight ongoing challenges with cross-platform native bindings and inter-process communication.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-07-03

## 1. Today's Highlights
Qwen Code released v0.19.5, featuring hardened daemon workers and deferred session creation for improved stability. The community is actively addressing significant UX friction points, including mobile session-switching jank in the Web Shell and garbled text output on Windows non-UTF-8 consoles. Additionally, substantial progress was made on enterprise integrations with the introduction of WeCom (Enterprise WeChat) support and enhanced QQ Bot security protocols.

## 2. Releases
**v0.19.5** and nightly build `v0.19.5-nightly.20260703.b16baf1ff` have been published. Key changes include:
*   **CLI Hardening:** Daemon-managed channel workers are now more robust ([#6098](https://github.com/QwenLM/qwen-code/pull/6098)).
*   **Web Shell Optimization:** Session creation is deferred until the first prompt is sent, reducing initial load overhead ([#618](https://github.com/QwenLM/qwen-code/pull/618)).
*   **Mobile UX Fix:** Resolved jank during mobile session switching by memoizing timeline signatures and optimizing replay dispatches.

## 3. Hot Issues
1.  **[Bug] Mobile Session Switching Jank** ([#6181](https://github.com/QwenLM/qwen-code/issues/6181))
    *   *Why it matters:* Critical UX blocker for mobile Web Shell users; identified as a multi-layer performance bottleneck involving sidebar polling and transcript rendering.
    *   *Reaction:* High engagement; resolved in recent release.
2.  **[Bug] Incorrect Context Window Calculation** ([#6144](https://github.com/QwenLM/qwen-code/issues/6144))
    *   *Why it matters:* Users report discrepancies between configured `ctx-size` and actual token usage, potentially leading to truncation errors.
    *   *Reaction:* Moderate; requires deeper investigation into token management logic.
3.  **[Bug] Windows Garbled Text in Shell Commands** ([#6214](https://github.com/QwenLM/qwen-code/issues/6214))
    *   *Why it matters:* Affects all Windows users with non-UTF-8 console code pages (e.g., CP936, CP1251), breaking command output readability.
    *   *Reaction:* Active development; PR [#6216](https://github.com/QwenLM/qwen-code/pull/6216) addresses this.
4.  **[Feature] Daemon UI for Vision Bridge Model** ([#6195](https://github.com/QwenLM/qwen-code/issues/6195))
    *   *Why it matters:* Enables persistent selection of vision models via UI, aligning with existing CLI capabilities (`/model --vision`).
    *   *Reaction:* Positive demand for parity between CLI and Daemon UI.
5.  **[Bug] Auth Config Not Persisting Across Sessions** ([#5979](https://github.com/QwenLM/qwen-code/issues/5979))
    *   *Why it matters:* Changing model provider configs via `/auth` fails to apply to new sessions, causing repeated 401 errors.
    *   *Reaction:* Frustration from users expecting immediate config propagation.
6.  **[Bug] Thinking Duration Shows 0s** ([#6175](https://github.com/QwenLM/qwen-code/issues/6175))
    *   *Why it matters:* Misleading UI feedback for models using `reasoning_content`; breaks transparency of model "thought" processes.
    *   *Reaction:* Developers investigating streaming API parsing logic.
7.  **[Feature] Local Always-On Schedule Daemon** ([#6112](https://github.com/QwenLM/qwen-code/issues/6112))
    *   *Why it matters:* Proposes background automation capabilities analogous to desktop scheduled tasks, expanding Qwen Code beyond interactive sessions.
    *   *Reaction:* Strong interest from power users seeking automation.
8.  **[Bug] macOS Sandbox Files Missing** ([#6089](https://github.com/QwenLM/qwen-code/issues/6089))
    *   *Why it matters:* Causes fatal launch errors on Apple Silicon due to missing `.sb` profile files in packaging.
    *   *Reaction:* Urgent fix required for Mac users.
9.  **[Question] Brew Version Lag** ([#6187](https://github.com/QwenLM/qwen-code/issues/6187))
    *   *Why it matters:* Community concerns about delayed updates on Homebrew, impacting adoption for macOS/Linux users preferring package managers.
    *   *Reaction:* Users requesting faster sync between npm releases and brew taps.
10. **[Bug] YOLO Mode MCP Freeze** ([#6131](https://github.com/QwenLM/qwen-code/issues/6131))
    *   *Why it matters:* Manual confirmation blocks automated YOLO mode workflows when MCP is enabled, breaking headless automation.
    *   *Reaction:* High priority for automation-focused users.

## 4. Key PR Progress
1.  **Add WeCom Channel Adapter** ([#6210](https://github.com/QwenLM/qwen-code/pull/6210))
    *   Introduces built-in support for Enterprise WeChat, enabling custom app callbacks and secure routing.
2.  **Fix Windows Shell Garbling** ([#6216](https://github.com/QwenLM/qwen-code/pull/6216))
    *   Applies UTF-8 prefixes to `cmd.exe` executions, resolving character encoding issues on non-UTF-8 Windows systems.
3.  **QQ Bot Security Hardening** ([#6200](https://github.com/QwenLM/qwen-code/pull/6200))
    *   Implements gateway URL validation (SSRF prevention) and sanitizes logs to prevent sensitive data leakage.
4.  **Preserve OpenAI Reasoning as Raw Thoughts** ([#6192](https://github.com/QwenLM/qwen-code/pull/6192))
    *   Stops parsing `reasoning_content` with Gemini-style logic, preserving markdown formatting in OpenAI-compatible streams.
5.  **Nested Sub-Agent Support** ([#6189](https://github.com/QwenLM/qwen-code/pull/6189))
    *   Allows sub-agents to spawn further sub-agents up to a configurable depth (`model.maxSubagentDepth`), enhancing complex task delegation.
6.  **Raise Stream Idle Timeout** ([#6107](https://github.com/QwenLM/qwen-code/pull/6107))
    *   Increases default streaming inactivity timeout from 2 to 4 minutes, preventing premature disconnects during long generations.
7.  **Project-Local Todo Persistence** ([#5928](https://github.com/QwenLM/qwen-code/pull/5928))
    *   Adds `todosDirectory` setting to save todos within the project (e.g., `.qwen/todos`), enabling Git-synced task management.
8.  **LSP Server Hot Reload** ([#5953](https://github.com/QwenLM/qwen-code/pull/5953))
    *   Enables dynamic reloading of LSP configurations without restarting the session, improving developer workflow.
9.  **Dataviz Bundled Skill** ([#6198](https://github.com/QwenLM/qwen-code/pull/6198))
    *   Provides design guidance and palette validation scripts for the Artifact tool, enhancing chart generation quality.
10. **Skip Abbreviations in Sentence Filter** ([#6193](https://github.com/QwenLM/qwen-code/pull/6193))
    *   Fixes false positives in follow-up suggestions where periods in abbreviations (e.g., "Dr.") were mistaken for sentence boundaries.

## 5. Feature Request Trends
*   **Enterprise Channel Integrations:** Significant momentum around WeCom ([#6210](https://github.com/QwenLM/qwen-code/pull/6210)) and QQ Bot ([#6200](https://github.com/QwenLM/qwen-code/pull/6200)), indicating a push toward private messaging platform support.
*   **Background Automation:** Requests for always-on daemons ([#6112](https://github.com/QwenLM/qwen-code/issues/6112)) and scheduled tasks suggest users want Qwen Code to operate autonomously outside of interactive sessions.
*   **Nested Agent Architectures:** The ability for sub-agents to spawn further sub-agents ([#6189](https://github.com/QwenLM/qwen-code/pull/6189)) reflects a trend toward more complex, hierarchical AI workflows.
*   **Config Persistence & Localization:** Users increasingly demand local project configuration for todos ([#5928](https://github.com/QwenLM/qwen-code/pull/5928)) and seamless auth propagation across sessions.

## 6. Developer Pain Points
*   **Platform-Specific Encoding Issues:** Recurring bugs related to Windows console code pages ([#6214](https://github.com/QwenLM/qwen-code/issues/6214)) and macOS sandbox file packaging ([#6089](https://github.com/QwenLM/qwen-code/issues/6089)) highlight ongoing challenges with cross-platform binary distribution.
*   **Performance Jank on Mobile:** The heavy resource cost of session switching and transcript rendering on mobile devices ([#6181](https://github.com/QwenLM/qwen-code/issues/6181)) is a major friction point for Web Shell users.
*   **Streaming & Token Management Discrepancies:** Users are confused by incorrect context window calculations ([#6144](https://github.com/QwenLM/qwen-code/issues/6144)) and misleading "0s" thinking durations ([#6175](https://github.com/QwenLM/qwen-code/issues/6175)), pointing to a need for better transparency in how tokens and stream states are handled.
*   **Configuration State Drift:** The failure of `/auth` changes to persist into new sessions ([#5979](https://github.com/QwenLM/qwen-code/issues/5979)) creates a fragmented user experience where settings must be reapplied repeatedly.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-07-03  
**Source:** github.com/Hmbown/DeepSeek-TUI

### 1. Today's Highlights
The community is heavily focused on stabilizing the "Fleet" sub-agent architecture, with critical fixes addressing memory exhaustion and state corruption during concurrent worker execution. Simultaneously, significant progress has been made on v0.8.67 setup UX, introducing guided localization and improved first-run onboarding flows to replace the previous blank-config-editor experience.

### 2. Releases
No new releases were published in the last 24 hours. However, several closed PRs indicate imminent patches for v0.8.67 and v0.8.70 stability, particularly regarding Fleet runtime limits and Windows input handling.

### 3. Hot Issues
1. **[Bug] TUI-freeze-Windows-crossterm-poll (#1812)**  
   *Why it matters:* Critical usability blocker on Windows 11 where the TUI becomes completely unresponsive while the process remains alive.  
   *Reaction:* High engagement (10 comments); users report intermittent freezes affecting keyboard input and screen updates.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/1812)

2. **[Enhancement] v0.8.67 Setup: Guided localized constitution creator (#3793)**  
   *Why it matters:* Addresses poor first-run UX by replacing the blank prompt editor with a guided, language-first constitution builder.  
   *Reaction:* Active discussion on separating constitutional text from runtime security controls.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/3793)

3. **[Bug] Project-scope instructions overly denied (#3867)**  
   *Why it matters:* Multi-project workflows are hindered because `instructions` config lacks glob support and auto-discovery, effectively breaking trust-awareness.  
   *Reaction:* Users find the current hard-blocking behavior unusable for complex repo structures.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/3867)

4. **[Enhancement] Token cost estimation currency units (#1607)**  
   *Why it matters:* Global users request support for non-USD currencies (e.g., CNY ¥) for accurate cost tracking.  
   *Reaction:* Community呼声 (calls) for broader financial localization.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/1607)

5. **[Bug] TUI process crash leaking input to PowerShell (#2261)**  
   *Why it matters:* A severe security/usability issue where lost focus causes user input to be executed as shell commands rather than TUI input.  
   *Reaction:* Urgent reports on Windows Terminal environments.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/2261)

6. **[Enhancement] Auto-check for new versions & update (#1678)**  
   *Why it matters:* Users lack a built-in mechanism to check for updates or navigate to GitHub releases easily.  
   *Reaction:* Simple feature request with consistent demand for better lifecycle management.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/1678)

7. **[Enhancement] Slash commands: PEEK-backed receipts (#1889)**  
   *Why it matters:* Ensures slash-command results are durable and source-linked across session resumption and handoffs.  
   *Reaction:* Maintainers outlining continuity layers for `/relay`, `/context`, etc.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/1889)

8. **[Enhancement] Sidebar sessions panel with auto-resume (#2934)**  
   *Why it matters:* Current session switching via `Ctrl+R` is friction-heavy; a persistent sidebar would improve workflow speed.  
   *Reaction:* Positive reception for reducing cognitive load in multi-session contexts.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/2934)

9. **[Bug] Windows IME composition event deadlock (#1835)**  
   *Why it matters:* Chinese IME users experience total input field unresponsiveness due to deadlock.  
   *Reaction:* One 👍 indicates strong agreement; affects a significant portion of the Asian developer base.  
   [Link](https://github.com/Hmbown/CodeWhale/issues/1835)

10. **[Enhancement] Fleet vocabulary for model picking (#3932)**  
    *Why it matters:* The agent cannot currently select specific models or fleet members because the schema lacks `role`/`model_class` definitions.  
    *Reaction:* Identified as a gap in the `agent` tool schema that limits autonomous deployment capabilities.  
    [Link](https://github.com/Hmbown/CodeWhale/issues/3932)

### 4. Key PR Progress
1. **[feat] Auto-discover `.codewhale/rules/` and `.claude/rules/` (#3892)**  
   *Summary:* Implements automatic scanning of rule directories for project context, addressing the usability issues raised in #3867.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3892)

2. **[fix] Enforce absolute recursion-depth ceiling for Fleet (#3931)**  
   *Summary:* Contains correctness fixes for sub-agent orchestration, ensuring the global admission cap is enforced and preventing escalation.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3931)

3. **[fix] Unique temp path per atomic state write (#3936)**  
   *Summary:* Resolves a concurrency bug that caused corrupted persisted sub-agent state during parallel writes.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3936)

4. **[perf] Fix five render/input hot paths (#3902)**  
   *Summary:* Optimizes performance by fixing double-computation in the Tasks sidebar and other critical UI loops.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3902)

5. **[fix] Report local worker RSS in host status (#3901)**  
   *Summary:* Adds memory usage telemetry for Fleet workers, crucial for debugging the memory exhaustion issues mentioned in #3882.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3901)

6. **[chore] Remove unused execpolicy amend module (#3873)**  
   *Summary:* Cleans up dead code and dependencies (`fd-lock`) to streamline the TUI build.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3873)

7. **[chore] Prune dead fleet runtime helpers (#3879)**  
   *Summary:* Removes legacy compatibility helpers from `fleet/worker_runtime.rs` that no longer have call sites.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3879)

8. **[feat] Setup summary wizard step for MCP/skills (#3643)**  
   *Summary:* Implements the first step of the v0.8.67 setup wizard, displaying MCP status and plugin state in a modal.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3643)

9. **[fix] Persist sub-agent state to `.codewhale/` (#3865)**  
   *Summary:* Corrects a rebrand-era fallback that saved state to the legacy `.deepseek/` directory.  
   [Link](https://github.com/Hmbown/CodeWhale/pull/3865)

10. **[fix] Show safety policy in status (#3789)**  
    *Summary:* Adds a "Safety" row to `/status` reporting sandbox and network posture based on the current mode.  
    [Link](https://github.com/Hmbown/CodeWhale/pull/3789)

### 5. Feature Request Trends
*   **Guided Onboarding:** Strong shift from manual config editing to guided, interactive setup wizards (Constitution Creator, Setup Summary).
*   **Fleet Reliability:** Demands for better resource management (memory caps, recursion limits) and observability (RSS reporting) for sub-agent fleets.
*   **Localization & Accessibility:** Requests for multi-currency token estimation, robust IME support on Windows, and clearer i18n handling for agent outputs.
*   **Workflow Continuity:** Interest in "truth surfaces" where slash commands and sub-agent results are visibly persistent and recoverable across sessions.

### 6. Developer Pain Points
*   **Windows Stability:** Recurring crashes, freezes, and IME deadlocks on Windows platforms (PowerShell/Terminal) are the most frequent and severe complaints.
*   **Memory Leaks in Fleet:** Uncontrolled memory growth when using multi-agent fleets, leading to OOM kills or system sluggishness.
*   **Config Rigidity:** The inability to easily manage project-specific instructions via globs or auto-discovery forces verbose, error-prone manual configuration.
*   **Input Focus Loss:** Instances where the TUI loses focus and allows raw input to leak into the host shell, creating security risks and user confusion.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*