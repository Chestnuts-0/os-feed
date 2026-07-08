# AI CLI Tools Community Digest 2026-07-08

> Generated: 2026-07-08 01:45 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Report: July 8, 2026

## 1. Ecosystem Overview
The AI CLI landscape in mid-2026 is characterized by intense competition driven by agent autonomy, complex multi-agent orchestration, and rigorous enterprise security requirements. While major players like Anthropic, OpenAI, and Google refine their core reliability and billing transparency, niche tools like OpenCode and Pi are aggressively pursuing architectural parity and extensibility. The market is shifting from simple code completion to sophisticated, stateful development assistants that require robust session management, secure sandboxing, and seamless integration with external design and data tools.

## 2. Activity Comparison

| Tool | Issues (Hot/Total Focus) | PRs (Active/Key Focus) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 Hot Issues (High engagement on billing/stability) | 3 PRs (Docs, Config, Examples) | **v2.1.204** (Stability Fix) |
| **OpenAI Codex** | 10 Hot Issues (Model reliability, Platform bugs) | 10 PRs (Core, Perf, CI, Telemetry) | **rust-v0.143.0** (Remote Plugins) |
| **Gemini CLI** | 10 Hot Issues (Agent stability, Sandbox) | 10 PRs (Caretaker Infra, Eval, Privacy) | **v0.51.0-nightly** (Sandbox Hardening) |
| **GitHub Copilot** | 10 Hot Issues (Session leaks, Platform compat) | 0 PRs (Last 24h) | **v1.0.69** (Sandbox Policy) |
| **Kimi Code** | 1 Hot Issue (Figma MCP) | 0 PRs | None |
| **OpenCode** | 10 Hot Issues (V2 Migration, UX) | 10 PRs (V2 Core, Durability, TUI) | **v1.17.15** (Z.ai Fix) |
| **Pi** | 10 Hot Issues (TUI Stability, Extensibility) | 10 PRs (API Exposure, TUI Fixes) | None |
| **Qwen Code** | 10 Hot Issues (Token efficiency, Daemon stability) | 10 PRs (SDK, Hooks, Channels) | **v0.19.7** (PR Triage) |
| **DeepSeek TUI** | 10 Hot Issues (Windows stability, Rebrand) | 10 PRs (TUI Fixes, Workflow V0.8.68) | **v0.8.67** (Rebrand to CodeWhale) |

## 3. Shared Feature Directions

*   **Advanced Agent Orchestration & Subagent Reliability:**
    *   **Tools:** Claude Code, Gemini CLI, OpenAI Codex, OpenCode, Qwen Code.
    *   **Need:** Robust handling of nested agents, automatic recovery from hangs, and clear completion signals. Users are frustrated by silent failures in multi-agent chains (e.g., Claude Code #75043, Gemini #22323).
*   **Context Window & Token Efficiency:**
    *   **Tools:** Claude Code, OpenAI Codex, Qwen Code, DeepSeek TUI.
    *   **Need:** Better management of long-running sessions. Specific demands include preventing context compaction from dropping critical rules (Codex #25792), reducing overhead in daemon sessions (Qwen #6312), and optimizing token usage in built-in skills (Qwen #6264).
*   **Cross-Platform & IDE Stability:**
    *   **Tools:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot, OpenCode.
    *   **Need:** Consistent TUI rendering and input handling across macOS, Windows, and Linux. Recurring issues include Windows-specific hook failures (Copilot #4001), iTerm2 corruption (Claude #68461), and VS Code extension freezes (Codex #28726).
*   **Security, Sandboxing & Enterprise Compliance:**
    *   **Tools:** GitHub Copilot, Gemini CLI, OpenAI Codex.
    *   **Need:** Granular control over file edits and network access. Copilot v1.0.69 refines sandbox policies, while Gemini focuses on "Caretaker" triage and privacy tiers. Users demand strict adherence to OAuth standards (Claude #42765) and safe default behaviors for destructive commands.

## 4. Differentiation Analysis

*   **Anthropocentric vs. Agnostic:** **Claude Code** and **OpenAI Codex** are tightly coupled to their respective ecosystems (Anthropic/Opus, OpenAI/GPT), focusing on deep integration with their proprietary models and billing structures. In contrast, **OpenCode**, **Pi**, and **Qwen Code** emphasize provider agnosticism, allowing users to switch between multiple LLM backends (e.g., DeepSeek, Z.ai, Azure) within a single tool.
*   **Architectural Maturity:** **GitHub Copilot CLI** and **Claude Code** represent mature, polished products with stable user bases but facing growing pains related to enterprise scale (billing, complex workflows). **OpenCode** and **DeepSeek TUI (CodeWhale)** are in aggressive transition phases (V2 migration, rebranding), prioritizing architectural overhaul and extensibility over immediate stability, appealing to developers who want to customize their AI workflow deeply.
*   **Target Audience Nuance:** **Gemini CLI** is pushing towards automated community support and infrastructure ("Caretaker"), targeting large-scale open-source maintenance. **Kimi Code** is currently niche, focusing on specific vertical integrations like Figma for design-to-code workflows. **Qwen Code** is expanding into non-traditional channels (WeCom, QQ Bot), targeting Asian markets and integrated communication workflows.

## 5. Community Momentum & Maturity

*   **High Momentum & Rapid Iteration:** **OpenCode** and **DeepSeek TUI (CodeWhale)** show high velocity with significant PR activity focused on foundational changes (V2 architecture, rebranding). Their communities are highly engaged in shaping the product direction. **OpenAI Codex** also shows high momentum with 10 active PRs and critical discussions around model reliability.
*   **Stable but Engaged:** **Claude Code** and **GitHub Copilot CLI** have fewer new PRs but extremely high issue engagement, particularly around billing and stability. This indicates a mature user base encountering real-world production friction rather than early adopter experimentation.
*   **Emerging/Niche:** **Kimi Code** has low activity, suggesting it is either in a quiet development phase or has a smaller, less vocal community. **Pi** shows steady progress in stability and extensibility APIs, catering to power users who need fine-grained control.

## 6. Trend Signals

*   **Billing Transparency is Critical:** The high volume of issues related to unexpected token usage and silent billing changes (Claude Code #41506, #28927; Codex #30364) signals that enterprise adoption hinges on predictable cost management. Tools offering granular usage analytics and clear billing boundaries will gain trust.
*   **The Rise of "Headless" and Remote Workflows:** With increased focus on remote plugins (Codex), headless session stability (Claude Code), and networked filesystem issues (Copilot #4053), AI CLIs are becoming integral to distributed development teams. Reliability in non-interactive, server-side environments is a key differentiator.
*   **Extensibility as a Standard Expectation:** Users increasingly expect CLI tools to act as platforms rather than just applications. The demand for hook parity (Codex #21753), plugin ecosystems (OpenCode, Pi), and custom agent definitions (Gemini, Qwen) indicates that the ability to extend and automate the AI's behavior is as important as the underlying model quality.
*   **Security by Design:** The implementation of sandboxing (Copilot, Gemini) and strict OAuth compliance (Claude) reflects a broader industry shift towards securing AI agents in corporate environments. Developers are looking for tools that can operate safely within strict IT governance policies.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**
*Data Source: github.com/anthropics/skills (as of 2026-07-08)*

### 1. Top Skills Ranking
*Based on community attention and discussion volume.*

1.  **Self-Audit Skill (PR #1367)**
    *   **Functionality:** A universal auditing skill that performs mechanical file verification followed by a four-dimension reasoning quality gate before delivering AI output.
    *   **Status:** Open | **Discussion:** High interest in pre-delivery quality assurance mechanisms.
    *   **Link:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

2.  **Skill Creator Tooling Fixes (PR #1298, #1323, #1099, #1050)**
    *   **Functionality:** Critical bug fixes for the `skill-creator` ecosystem, specifically addressing `run_eval.py` reporting 0% recall due to trigger detection failures and Windows subprocess encoding issues.
    *   **Status:** Open | **Discussion:** Vital for enabling community skill development; multiple overlapping PRs indicate persistent friction in the evaluation loop.
    *   **Link:** [PR #1298](https://github.com/anthropics/skills/pull/1298) | [PR #1323](https://github.com/anthropics/skills/pull/1323) | [PR #1099](https://github.com/anthropics/skills/pull/1099) | [PR #1050](https://github.com/anthropics/skills/pull/1050)

3.  **Document Typography Skill (PR #514)**
    *   **Functionality:** Ensures typographic quality in generated documents by preventing orphan lines, widows, and numbering misalignments.
    *   **Status:** Open | **Discussion:** Addresses a common pain point in professional document generation.
    *   **Link:** [PR #514](https://github.com/anthropics/skills/pull/514)

4.  **Frontend Design Clarity (PR #210)**
    *   **Functionality:** Refines the `frontend-design` skill to ensure instructions are actionable within a single conversation, improving coherence and specificity.
    *   **Status:** Open | **Discussion:** Focus on reducing hallucination and improving instruction adherence.
    *   **Link:** [PR #210](https://github.com/anthropics/skills/pull/210)

5.  **Color Expert Skill (PR #1302)**
    *   **Functionality:** Provides deep color knowledge including naming systems (ISCC-NBS, Munsell), color spaces (OKLCH, CAM16), and usage recommendations.
    *   **Status:** Open | **Discussion:** Niche but high-value for design-focused workflows.
    *   **Link:** [PR #1302](https://github.com/anthropics/skills/pull/1302)

### 2. Community Demand Trends
*Distilled from Issue discussions.*

*   **Trust & Security Governance:** Significant concern over namespace impersonation and trust boundaries, with users demanding clearer distinction between official and community skills (Issue #492).
*   **Enterprise Collaboration:** Strong demand for org-wide skill sharing capabilities to streamline deployment beyond manual file transfers (Issue #228).
*   **Context Optimization:** Interest in symbolic notation and compact memory techniques to reduce context window usage in long-running agents (Issue #1329).
*   **Agent Safety Patterns:** Requests for built-in governance skills focusing on policy enforcement, threat detection, and audit trails (Issue #412).
*   **Cross-Platform Compatibility:** Persistent need for robust Windows support in skill-creation tooling and encoding handling (Issue #1061).

### 3. High-Potential Pending Skills
*Active PRs likely to merge soon based on technical specificity and community validation.*

1.  **Testing Patterns Skill (PR #723)**
    *   **Summary:** Comprehensive coverage of testing philosophy, unit testing (AAA pattern), and React component testing.
    *   **Potential:** High utility for developers seeking standardized testing workflows.
    *   **Link:** [PR #723](https://github.com/anthropics/skills/pull/723)

2.  **ODT Support Skill (PR #486)**
    *   **Summary:** Enables creation, filling, and parsing of OpenDocument Text files (.odt), bridging a gap in open-source document formats.
    *   **Potential:** Essential for LibreOffice/OpenDocument users.
    *   **Link:** [PR #486](https://github.com/anthropics/skills/pull/486)

3.  **MacOS Automation via AppleScript (PR #806)**
    *   **Summary:** Native macOS automation using `osascript` with a tiered permission system, offering an alternative to screenshot-based computer use.
    *   **Potential:** Improves reliability and security for macOS-specific workflows.
    *   **Link:** [PR #806](https://github.com/anthropics/skills/pull/806)

4.  **DOCX Tracked Change Fix (PR #541)**
    *   **Summary:** Resolves document corruption caused by `w:id` collisions when adding tracked changes to documents with existing bookmarks.
    *   **Potential:** Critical fix for maintaining integrity in collaborative document editing.
    *   **Link:** [PR #541](https://github.com/anthropics/skills/pull/541)

### 4. Skills Ecosystem Insight
The community’s most concentrated demand is for **robust, secure, and enterprise-ready skill infrastructure**, specifically prioritizing reliable evaluation tooling, cross-platform compatibility, and clear governance models to mitigate trust and security risks.

---

# Claude Code Community Digest: 2026-07-08

## 1. Today's Highlights
Anthropic released **v2.1.204**, addressing critical session stability issues regarding hook streaming and idle reaping in headless environments. Community attention is heavily focused on billing anomalies, with significant engagement around unexpected token consumption spikes and silent shifts in plan allocations. Additionally, several regression bugs affecting terminal rendering on macOS and Windows resume functionality are currently driving high-volume discussion.

## 2. Releases
**v2.1.204** (Released today)
*   **Fix:** Resolved an issue where hook events were not streaming correctly during `SessionStart` hooks in headless sessions. This prevented remote workers from being incorrectly idle-reaped while executing hooks.

*(Note: v2.1.203 was also updated recently with login expiration warnings and UI badges, but v2.1.204 is the latest patch.)*

## 3. Hot Issues
These issues represent the highest community engagement and technical concern over the last 24 hours.

1.  **[Bug] Max Plan Token Usage Spike (~3-5x Increase)**
    *   **Issue:** [#41506](https://github.com/anthropics/claude-code/issues/41506)
    *   **Why it matters:** Users on the $100/mo Max plan report dramatic, unexplained increases in token consumption since late March, threatening budget caps.
    *   **Reaction:** 52 comments, 26 👍. High anxiety among enterprise users.

2.  **[Bug] Abnormal Usage on Session Resume**
    *   **Issue:** [#38029](https://github.com/anthropics/claude-code/issues/38029)
    *   **Why it matters:** Reports suggest resuming sessions triggers disproportionate token usage compared to fresh sessions, potentially indicating inefficient context handling.
    *   **Reaction:** 23 comments, 33 👍. Strong consensus that this is a bug, not user error.

3.  **[Bug] Advisor Unavailable with Fable 5**
    *   **Issue:** [#73365](https://github.com/anthropics/claude-code/issues/73365)
    *   **Why it matters:** The Fable 5 advisor (Opus 4.8 main) is consistently reporting as "unavailable," blocking workflow automation for many users.
    *   **Reaction:** 12 comments, 31 👍. Critical infrastructure failure for advanced agent setups.

4.  **[Enhancement] Built-in Usage Analytics Command**
    *   **Issue:** [#33978](https://github.com/anthropics/claude-code/issues/33978)
    *   **Why it matters:** Consolidates 10+ open issues requesting better visibility into token costs. Users want a native `claude usage` command.
    *   **Reaction:** 18 comments, 10 👍. Widely supported feature gap.

5.  **[Bug] Silent Billing Change in v2.1.51 (1M Context)**
    *   **Issue:** [#28927](https://github.com/anthropics/claude-code/issues/28927)
    *   **Why it matters:** Users report that moving to 1M context models silently shifted billing from subscription allocation to "Extra Usage" without changelog documentation.
    *   **Reaction:** 16 comments, 19 👍. Trust issue regarding transparency of pricing changes.

6.  **[Bug] Marketplace Update Button Disabled**
    *   **Issue:** [#45810](https://github.com/anthropics/claude-code/issues/45810)
    *   **Why it matters:** The UI prevents updating plugins even when versions are outdated, breaking security and feature patches.
    *   **Reaction:** 13 comments, 5 👍. Frustrating UX blocker for plugin users.

7.  **[Bug] Text Selection/Copy Paste Regression in VS Code**
    *   **Issue:** [#61021](https://github.com/anthropics/claude-code/issues/61021)
    *   **Why it matters:** A regression in the VS Code extension breaks standard text selection and copying workflows, impacting daily productivity.
    *   **Reaction:** 10 comments, 7 👍. High-frequency annoyance for IDE users.

8.  **[Bug] Nested Subagent Completion Failures**
    *   **Issue:** [#75043](https://github.com/anthropics/claude-code/issues/75043)
    *   **Why it matters:** Complex multi-agent setups fail because child agents spawned by sub-agents do not send completion notifications back to the parent.
    *   **Reaction:** 7 comments, 1 👍. Critical for developers building sophisticated agentic workflows.

9.  **[Bug] OAuth Redirect URI Violation (localhost vs 127.0.0.1)**
    *   **Issue:** [#42765](https://github.com/anthropics/claude-code/issues/42765)
    *   **Why it matters:** Uses `localhost` instead of `127.0.0.1` for OAuth redirects, violating RFC 8252 and causing auth failures in strict environments.
    *   **Reaction:** 6 comments, 17 👍. Important for security-conscious and enterprise deployments.

10. **[Bug] TUI Screen Corruption in Long iTerm2 Sessions**
    *   **Issue:** [#68461](https://github.com/anthropics/claude-code/issues/68461)
    *   **Why it matters:** A regression causes the terminal UI to corrupt display state (cursor jumping, stale content) during long sessions on macOS iTerm2.
    *   **Reaction:** 4 comments, 0 👍. Niche but severe usability issue for power users.

## 4. Key PR Progress
While only 3 PRs were highlighted in the last 24h, these represent key community contributions:

1.  **[Docs] Fix GitHub Capitalization**
    *   **PR:** [#73476](https://github.com/anthropics/claude-code/pull/73476)
    *   **Summary:** Minor typo fix in README (`Github` -> `GitHub`). No functional impact.

2.  **[Docs] Clarify Plugin MCP Configuration Scope**
    *   **PR:** [#75252](https://github.com/anthropics/claude-code/pull/75252)
    *   **Summary:** Clarifies that `mcpServers` config in plugins is distinct from the user-level MCP allow/deny list in `~/.claude/settings.json`. Helps prevent configuration confusion.

3.  **[Examples] Safe Stop Hook Wrapper**
    *   **PR:** [#41453](https://github.com/anthropics/claude-code/pull/41453)
    *   **Summary:** Provides a reference implementation for `Stop` hooks that includes PID locking and timeouts to prevent runaway background processes, addressing issue #41393.

## 5. Feature Request Trends
*   **Granular Cost Control & Visibility:** There is a strong demand for native tools to monitor and control spending. Users are requesting a built-in `claude usage` command (#33978) and clearer alerts for approaching limits.
*   **Desktop-Specific UI Customization:** macOS users are requesting independent font scaling (#50543) to improve readability without affecting the entire UI layout.
*   **Robust Agent Lifecycle Management:** Developers need better handling of nested agents (#75043) and background task resumption (#74529), indicating a trend toward complex, multi-step autonomous workflows.

## 6. Developer Pain Points
*   **Billing Transparency & Anomalies:** The most significant pain point is unpredictable token usage. Users feel blindsided by silent changes in how context windows or models are billed against their plans (#28927, #41506, #38029).
*   **Terminal Rendering Instability:** Frequent regressions in the TUI (Text User Interface) across platforms (macOS iTerm2, Windows WSL, VS Code) are causing friction. Issues include screen corruption (#68461), input freezing (#75496), and copy-paste failures (#61021).
*   **OAuth & Security Compliance:** Strict adherence to standards like RFC 8252 is lacking in some areas, causing authentication headaches in enterprise environments (#42765).
*   **Plugin Ecosystem Friction:** Broken update mechanisms (#45810) and unclear configuration scopes (#75252) hinder the adoption and maintenance of community plugins.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-07-08

### 1. Today's Highlights
The Codex CLI released version `0.143.0`, enabling remote plugins by default and adding robust proxy support for authentication and Responses API traffic on macOS and Windows. Community attention is heavily focused on potential performance degradation in the GPT-5.5 model due to reasoning-token clustering, alongside ongoing stability reports regarding context compaction losing critical `AGENTS.md` rules.

### 2. Releases
**rust-v0.143.0**
*   **Remote Plugins Enabled:** Remote plugins are now on by default, featuring richer catalog rows, npm marketplace sources, and visibility for both remote and local versions.
*   **Proxy Support:** Improved routing for authentication and Responses API traffic through macOS and Windows system proxies, including PAC file support.
*   *See also:* Pre-release versions `0.143.0-alpha.39` and `0.143.0-alpha.38` continue to iterate on these features.

### 3. Hot Issues
1.  **[BUG] GPT-5.5 Reasoning-Token Clustering** [#30364](https://github.com/openai/codex/issues/30364)
    *   **Impact:** High. Users report that `gpt-5.5` responses disproportionately cluster at specific token counts (516, 1034, 1552), correlating with degraded performance on complex tasks.
    *   **Reaction:** 251 👍, 156 comments. This is the most discussed issue, indicating significant concern over model reliability.
2.  **[ENHANCEMENT] Full Claude Code Hook Parity** [#21753](https://github.com/openai/codex/issues/21753)
    *   **Impact:** Critical for automation. Tracks the effort to bring Codex hooks to full parity with Claude Code’s 29+ event surface.
    *   **Reaction:** 19 👍, 26 comments. Essential for power users migrating workflows.
3.  **[ENHANCEMENT] Dynamically Loading Nested AGENTS.md** [#12115](https://github.com/openai/codex/issues/12115)
    *   **Impact:** Improves context management. Users want Codex to load `AGENTS.md` files from child directories on demand, similar to Claude Code’s behavior.
    *   **Reaction:** 83 👍, 23 comments. A widely requested feature for large monorepos.
4.  **[BUG] Context Compaction Forgets AGENTS Rules** [#25792](https://github.com/openai/codex/issues/25792)
    *   **Impact:** Severe reliability issue. Automatic context compaction causes task progress to reset (e.g., 97% to 42%) by dropping previously loaded `AGENTS` rules.
    *   **Reaction:** 0 👍, 13 comments. High severity for long-running tasks despite low emoji engagement.
5.  **[ENHANCEMENT] Disable Auto-Resolve for Questions** [#28969](https://github.com/openai/codex/issues/28969)
    *   **Impact:** UX Control. Users request a setting to disable the 60-second auto-resolve for clarification questions, allowing more time for manual intervention.
    *   **Reaction:** 88 👍, 12 comments. Strong community support for granular control.
6.  **[BUG] VS Code Extension Freezes code-server** [#28726](https://github.com/openai/codex/issues/28726)
    *   **Impact:** Stability. The IDE extension causes the `code-server` sidebar to freeze on desktop Chromium browsers, though it works on Android/Samsung Internet.
    *   **Reaction:** 0 👍, 14 comments. Specific to web-based IDE setups.
7.  **[ENHANCEMENT] Explicit Memory Writability** [#19195](https://github.com/openai/codex/issues/19195)
    *   **Impact:** Security/Trust. When `memories=true` is set, the model prompt currently contradicts itself by saying "Never update memories." Users want explicit, non-contradictory writability indicators.
    *   **Reaction:** 1 👍, 12 comments. Important for accurate memory management.
8.  **[BUG] Computer Use MCP Timeout** [#23840](https://github.com/openai/codex/issues/23840)
    *   **Impact:** Functionality. Computer Use MCP initializes with a timeout in the Desktop app, whereas the same client works via Terminal.
    *   **Reaction:** 0 👍, 11 comments. Blocks advanced automation workflows.
9.  **[ENHANCEMENT] Better SSH Key Auth for Remotes** [#22857](https://github.com/openai/codex/issues/22857)
    *   **Impact:** Developer Experience. Requests improved key authentication for SSH remote connections, specifically for controlling CLI hosts from iOS/Desktop apps.
    *   **Reaction:** 14 👍, 11 comments. Enhances mobility and remote development.
10. **[BUG] Locked Computer Use Failure on Mac M4** [#24086](https://github.com/openai/codex/issues/24086)
    *   **Impact:** Hardware Specific. "Locked" Computer Use mode fails with `cgWindowNotFound` on Mac mini M4 + Studio Display when the Mac is locked.
    *   **Reaction:** 9 👍, 10 comments. Affects security-conscious users relying on locked-mode automation.

### 4. Key PR Progress
1.  **[PERF] Speed up Reverse History Search** [#30887](https://github.com/openai/codex/pull/30887)
    *   Optimizes fetching persistent history, moving away from sequential `history.jsonl` reads to improve navigation speed.
2.  **[FEAT] Emit Canonical Review Mode Items** [#31473](https://github.com/openai/codex/pull/31473)
    *   Moves review-mode markers (`TurnItem::EnteredReviewMode`, etc.) to the canonical `TurnItem` lifecycle, improving consistency in turn tracking.
3.  **[TEST] Remove TestAppServer Constructors** [#31452](https://github.com/openai/codex/pull/31452)
    *   Cleans up the test suite by removing obsolete constructors, enforcing `TestAppServer::builder()` as the single fixture API.
4.  **[FEATURE] Expose Scheduled Task Summaries** [#31512](https://github.com/openai/codex/pull/31512)
    *   Adds nullable `scheduledTasks` metadata to `PluginDetail`, allowing the Desktop app to preview skill schedules without materializing bundles.
5.  **[FIX] Detect pnpm Installs** [#31503](https://github.com/openai/codex/pull/31503)
    *   Corrects the JavaScript shim to properly identify `pnpm` installations, preventing incorrect fallback to npm commands for `codex doctor` and updates.
6.  **[CORE] Preserve Session Imports** [#31483](https://github.com/openai/codex/pull/31483)
    *   Ensures imported sessions retain identity, timestamps, and project working directories, while deduplicating concurrent imports.
7.  **[CI] Route Build IO through Dev Drives** [#31357](https://github.com/openai/codex/pull/31357)
    *   Optimizes Windows CI builds by routing filesystem-heavy operations to Dev Drives, reducing build times.
8.  **[CORE] Atomic Idle Resume Decisions** [#31388](https://github.com/openai/codex/pull/31388)
    *   Makes idle resume configuration comparisons and shutdowns atomic, preventing stale cold replacements after settings updates.
9.  **[SERVER] Atomic Thread Teardown Groups** [#31400](https://github.com/openai/codex/pull/31400)
    *   Generalizes the teardown coordinator to operate on exact operation-owned groups, improving race condition handling in thread lifecycle management.
10. **[TELEMETRY] Correlate WebSocket Stage Timing** [#30667](https://github.com/openai/codex/pull/30667)
    *   Stamps WebSocket requests with client start timestamps and parses server-side timing fields (TTFT, sampling) for better observability.

### 5. Feature Request Trends
*   **Automation Parity:** There is a strong push for Codex to match or exceed Claude Code’s automation capabilities, specifically regarding **hooks** (#21753), **nested context loading** (#12115), and **explicit memory management** (#19195).
*   **Remote & Mobile Integration:** Users are increasingly requesting better support for remote development workflows, including **SSH key authentication improvements** (#22857) and **mobile/desktop remote control** stability.
*   **Granular UX Control:** Requests for disabling auto-resolve (#28969) and explicit safety indicators (#31505) suggest users want more fine-grained control over the AI's autonomous actions and safety checks.

### 6. Developer Pain Points
*   **Model Reliability & Performance:** The GPT-5.5 token clustering issue (#30364) is a major concern, suggesting underlying inefficiencies in how the model handles reasoning steps. Additionally, context compaction forgetting rules (#25792) breaks long-term task continuity.
*   **Platform-Specific Bugs:** Significant friction exists on **Windows** (memory leaks from duplicate MCP processes #31499, nonpaged pool growth #16786, and update failures #29787) and **macOS** (Computer Use failures on locked screens #24086, #30608).
*   **IDE Integration Stability:** The VS Code extension causing `code-server` freezes (#28726) and inotify watch exhaustion on large Linux workspaces (#23574) highlight performance bottlenecks in the IDE integration layer.
*   **Connectivity & Auth:** Intermittent issues with sending messages (#25127, #29632) and missing API scopes in login tokens (#31506) disrupt daily workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-07-08

### 1. Today's Highlights
The latest nightly release (v0.51.0) addresses critical sandbox configuration issues on macOS and fixes escape sequence handling in string literals for modern models. Concurrently, the engineering team is advancing the "Caretaker" triage infrastructure, implementing LLM-based issue classification and automated GitHub API actions to streamline community support. Significant attention is also being paid to agent stability, with multiple high-priority issues highlighting subagent recovery failures and generalist agent hangs.

### 2. Releases
**v0.51.0-nightly.20260707.g15a9429b6**
*   **Sandbox Hardening:** Made `~/.gitconfig` read-only within the macOS sandbox environment to prevent unintended modifications during agent operations.
*   **Model Compatibility:** Preserved escape sequences in string literals to ensure compatibility with newer model behaviors.
    *   [PR #28221](https://github.com/google-gemini/gemini-cli/pull/28221)
    *   [PR #28222](https://github.com/google-gemini/gemini-cli/pull/28222)

### 3. Hot Issues
*   **Subagent Recovery Failure:** The `codebase_investigator` subagent incorrectly reports success upon hitting turn limits, masking interruptions and preventing proper error handling. *(10 comments)*
    *   [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
*   **Generalist Agent Hangs:** Users report indefinite hanging when the generalist agent is invoked, even for simple tasks like folder creation, requiring manual cancellation. *(8 comments, 8 👍)*
    *   [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
*   **Shell Command Stalling:** CLI commands often remain stuck in "Waiting input" state immediately after completion, disrupting workflow automation. *(4 comments, 3 👍)*
    *   [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
*   **Browser Agent on Wayland:** The browser subagent fails to operate correctly in Wayland environments, limiting usability for Linux users with modern desktop compositors. *(4 comments, 1 👍)*
    *   [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
*   **Auto Memory Infinite Retry:** Low-signal sessions in Auto Memory are retried indefinitely because the system fails to mark them as processed if the extraction agent declines to read them. *(5 comments)*
    *   [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)
*   **Subagent Utilization:** Anecdotal evidence suggests the main agent rarely utilizes custom skills or subagents unless explicitly prompted, indicating potential prompt or routing inefficiencies. *(6 comments)*
    *   [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
*   **Tool Limit Error:** A 400 error occurs when more than 128 (or 400 depending on report) tools are available, suggesting a need for better tool scoping logic. *(3 comments)*
    *   [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
*   **Symlink Agent Recognition:** Agents defined as symlinks in `~/.gemini/agents/` are not recognized, breaking workflows that rely on symbolic links for configuration management. *(4 comments)*
    *   [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)
*   **Browser Settings Ignored:** The Browser Agent completely ignores `settings.json` overrides, such as `maxTurns`, leading to unexpected behavior during long-running web tasks. *(3 comments)*
    *   [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)
*   **Destructive Behavior:** Users request stricter guardrails against destructive commands (e.g., `git reset --force`) in complex scenarios where safer alternatives exist. *(3 comments, 1 👍)*
    *   [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

### 4. Key PR Progress
*   **Caretaker Triage Orchestrator:** Implemented LLM inference orchestration using the Antigravity SDK for automated issue triage, including GCS debug logging and Cloud Run job definitions. *(Closed)*
    *   [PR #28307](https://github.com/google-gemini/gemini-cli/pull/28307)
*   **Caretaker Egress Handler:** Added Octokit GitHub API integration to enable automated issue comment posting and label assignment via the Egress Cloud Run Service. *(Closed)*
    *   [PR #28303](https://github.com/google-gemini/gemini-cli/pull/28303)
*   **Caretaker Worker Loop:** Introduced the main execution loop for the Caretaker Triage Worker and Pub/Sub egress action publisher to handle asynchronous processing. *(Open)*
    *   [PR #28306](https://github.com/google-gemini/gemini-cli/pull/28306)
*   **Eval Failure Diagnostics:** Enhanced behavioral evaluations by adding tool-call timeline formatting and failure summaries, making it easier to debug why specific evals fail. *(Open)*
    *   [PR #28305](https://github.com/google-gemini/gemini-cli/pull/28305)
*   **Privacy Tier Messaging:** Improved user experience by displaying clear messages when accounts lack a Code Assist tier, replacing raw backend errors in the privacy dialog. *(Open)*
    *   [PR #28304](https://github.com/google-gemini/gemini-cli/pull/28304)
*   **CI Configuration Cleanup:** Refactored `WorkspaceContext` to exclude transient CI credential files, preventing sensitive or temporary files from polluting the agent's context. *(Closed)*
    *   [PR #28216](https://github.com/google-gemini/gemini-cli/pull/28216)
*   **Thought Leakage Fix:** Resolved an issue where internal model "thoughts" leaked into plain-text history, causing confusion and infinite loops in subsequent turns. *(Closed)*
    *   [PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971)
*   **MCP Elicitation Support:** Implemented form and URL-based elicitation capabilities in the core MCP client, aligning with the 2025-11-25 specification. *(Closed)*
    *   [PR #28089](https://github.com/google-gemini/gemini-cli/pull/28089)
*   **Windows Extension Safety:** Added retry logic for transient directory cleanup failures during extension updates to prevent aborts caused by Windows file-lock timing issues. *(Open)*
    *   [PR #27200](https://github.com/google-gemini/gemini-cli/pull/27200)
*   **Settings Deep Merge:** Fixed a bug where workspace settings were shallow-merged over user settings, causing nested configurations (tools, telemetry) to be lost. *(Closed)*
    *   [PR #28094](https://github.com/google-gemini/gemini-cli/pull/28094)

### 5. Feature Request Trends
*   **Robust Evaluation Infrastructure:** Strong interest in improving evaluation frameworks, specifically regarding component-level behavioral tests, coverage reporting, and detailed failure diagnostics.
*   **Agent Autonomy & Recovery:** Users are requesting better subagent resilience, including automatic session takeover, lock recovery for browsers, and proper handling of turn limits without silent failures.
*   **Security & Privacy Enhancements:** Demands for deterministic redaction in Auto Memory, reduced logging of sensitive data, and clearer messaging around account tiers and permissions.
*   **Cross-Platform Stability:** Continued focus on ensuring consistent behavior across different operating systems, particularly fixing Wayland support for browser agents and Windows-specific file locking issues.

### 6. Developer Pain Points
*   **Agent Reliability:** Frequent reports of agents hanging, failing to recover from errors, or ignoring configuration overrides indicate a need for more robust error handling and state management.
*   **Context Noise:** Issues with "thought leakage" and transient CI files polluting the workspace context suggest the agent's context window management needs refinement to maintain signal-to-noise ratio.
*   **Configuration Complexity:** Users struggle with recognizing symlinks for agents and dealing with shallow merge conflicts in settings, pointing to a need for simpler, more resilient configuration parsing.
*   **Tool Scoping Limits:** Encountering 400 errors with large numbers of tools highlights a bottleneck in how the CLI manages and presents available capabilities to the model.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-08

## 1. Today's Highlights
GitHub Copilot CLI v1.0.69 introduces significant sandbox policy refinements, allowing approved file edits to bypass OS-level sandboxes and aligning `web_fetch` with active network policies. Concurrently, the community is addressing critical stability issues regarding session resumption, plugin synchronization, and TUI rendering bugs on networked filesystems.

## 2. Releases
### v1.0.69 (2026-07-07)
*   **Sandbox Policy Updates:** Renamed built-in file edit labels from "(sandboxed)" to "(sandbox policy)" to clarify best-effort enforcement. Added ability for approved file edits to bypass the OS-level sandbox.
*   **Network Policy Alignment:** `web_fetch` now respects the active sandbox network policy (denying blocked outbound/local targets) and allows one-time bypass approval if `sandbox.allowBypass` is opted-in.
*   **Plugin Management:** Introduced a `/plugins` dashboard for managing extensions and enabled reloading installed plugin extensions without restarting the CLI session.

*(Note: v1.0.69-3 also released with similar sandbox bypass capabilities for file edits.)*

## 3. Hot Issues
1.  **#53: Bring back GitHub Copilot in CLI commands**
    *   *Why it matters:* High community demand (75 👍) for native CLI integration to prevent workflow breaks. Community alternatives like `shell-ai` are gaining traction due to perceived silence from official maintainers.
    *   *Link:* [github/copilot-cli Issue #53](https://github.com/github/copilot-cli/issues/53)

2.  **#4053: TUI hangs at 'Loading: N skills' on NFS/GPFS**
    *   *Why it matters:* A critical race condition involving `SIGCHLD` delivery and Tokio concurrency causes indefinite hangs for users on networked filesystems, blocking core functionality.
    *   *Link:* [github/copilot-cli Issue #4053](https://github.com/github/copilot-cli/issues/4053)

3.  **#3123: /research can't write its research report**
    *   *Why it matters:* The `create` tool availability error prevents agents from saving output, breaking end-to-end research workflows.
    *   *Link:* [github/copilot-cli Issue #3123](https://github.com/github/copilot-cli/issues/3123)

4.  **#2643: preToolUse silent command rewrite fails**
    *   *Why it matters:* Hooks using `updatedInput` with `permissionDecision: allow` still trigger interactive dialogs, undermining automation efforts in plugin development.
    *   *Link:* [github/copilot-cli Issue #2643](https://github.com/github/copilot-cli/issues/2643)

5.  **#3954: explore tool hardcodes model ignoring config**
    *   *Why it matters:* The `explore` tool ignores custom model configurations (e.g., DeepSeek) and defaults to `gpt-5.4-mini`, breaking BYOK (Bring Your Own Key) setups.
    *   *Link:* [github/copilot-cli Issue #3954](https://github.com/github/copilot-cli/issues/3954)

6.  **#4001: Windows .claude/settings.json hooks fail**
    *   *Why it matters:* Windows users face "fail-closed" hooks because the CLI executes them via PowerShell instead of bash, violating the Claude Code hook contract.
    *   *Link:* [github/copilot-cli Issue #4001](https://github.com/github/copilot-cli/issues/4001)

7.  **#4054: /resume broken for non-git sessions**
    *   *Why it matters:* A catch-22 where sessions started outside git repos store `repository='/'`, causing the resume picker’s git gate to reject them entirely.
    *   *Link:* [github/copilot-cli Issue #4054](https://github.com/github/copilot-cli/issues/4054)

8.  **#4049: Docker stdio MCP servers duplicated on /new and /resume**
    *   *Why it matters:* Resuming sessions spawns fresh Docker clients without tearing down old ones, leading to resource leaks and duplicate processes within the same CLI lifetime.
    *   *Link:* [github/copilot-cli Issue #4049](https://github.com/github/copilot-cli/issues/4049)

9.  **#4038: Late-connecting MCP server injects empty user message**
    *   *Why it matters:* Non-interactive mode fails when MCP servers connect late, causing the model to answer an empty turn or echo system prompts instead of the actual user query.
    *   *Link:* [github/copilot-cli Issue #4038](https://github.com/github/copilot-cli/issues/4038)

10. **#3604: Windows 1252 encoding changed to UTF-8**
    *   *Why it matters:* Copilot strips original file encodings during edits, forcing users to manually revert formats, which disrupts legacy project compatibility.
    *   *Link:* [github/copilot-cli Issue #3604](https://github.com/github/copilot-cli/issues/3604)

## 4. Key PR Progress
*   No new Pull Requests were reported in the last 24 hours.

## 5. Feature Request Trends
*   **Plugin & Hook Automation:** Strong demand for silent command execution in `preToolUse` hooks (#2643) and support for interactive input variables in plugins (#4042) to improve UX and security.
*   **Multi-Agent Orchestration:** Continued interest in collaborative multi-agent workflows (#1389) and persistent custom agent selection (#4047).
*   **Enterprise & BYOK Integration:** Requests for better Branch Prefix control (#4044), BYOK support in ACP server mode (#4037), and fixing enterprise-managed plugin sync issues (#4039).
*   **Input Enhancements:** Suggestions to allow `Ctrl+G` for long-form answers in `ask_user` (#4050) and fix image paste repetition (#4045).

## 6. Developer Pain Points
*   **Session Stability & Resource Leaks:** Users report significant issues with session resumption (#4054), duplicate MCP server spawning (#4049), and hanging TUIs on network drives (#4053).
*   **Platform-Specific Incompatibilities:** Windows users face hook execution failures (#4001) and encoding corruption (#3604), while macOS users experience notification suppression when terminals are backgrounded (#4036).
*   **Configuration Drift:** Tools like `explore` (#3954) and `delegate` (#2729) ignore user-specified models or branches, leading to unexpected behavior and broken workflows.
*   **Networking & Sandbox Friction:** `web_fetch` failures in IPv4-only sandboxes (#4041) and late-connecting MCP servers breaking non-interactive modes (#4038) highlight gaps in robustness for constrained environments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-08

### 1. Today's Highlights
The repository saw no new releases or pull requests in the last 24 hours. Community attention is currently focused on a single open issue requesting native support for Figma via the Model Context Protocol (MCP). This enhancement aims to streamline design-to-code workflows by integrating Figma’s MCP catalog directly into the CLI environment.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Hot Issues
*   **#1604 [OPEN] Figma MCP Support** (Author: maoxian-1)
    *   **Why it matters:** Users are requesting pre-registration and native integration for Figma’s MCP server. Supporting this would allow developers to pull design tokens, layouts, and assets directly into their coding workflow using standard MCP interfaces.
    *   **Community Reaction:** The issue has garnered 2 👍 and 1 comment, indicating moderate interest in expanding design-tool interoperability beyond basic text-based interactions.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1604](https://github.com/MoonshotAI/kimi-cli/issues/1604)

*(Note: Only 1 issue was updated in the last 24 hours. No other issues were selected as they did not meet the "updated in last 24h" criteria for this specific digest window.)*

### 4. Key PR Progress
*   **No new pull requests** were submitted or updated in the last 24 hours.

### 5. Feature Request Trends
Based on the recent activity, the primary trend is the expansion of **external tool integration via MCP**. Specifically, there is a demand for connecting specialized design platforms (like Figma) to the CLI, suggesting users want a unified context layer that bridges design specifications with code generation.

### 6. Developer Pain Points
*   **Design-Code Handoff Friction:** The request for Figma MCP support highlights a pain point where developers must manually extract design assets or context. Native MCP support for design tools would reduce this manual overhead.
*   **Pre-registration Barriers:** The issue mentions that Figma MCP requires pre-registration, implying that friction in access setup is a minor but notable hurdle for adoption.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-07-08

### 1. Today's Highlights
OpenCode v1.17.15 was released with critical bugfixes for Z.ai context-window error handling and improved config directory resilience. Significant progress is being made on the V2 architecture, particularly regarding durable session recovery, plugin metadata preservation, and the resolution of V1-to-V2 parity gaps in provider authentication.

### 2. Releases
**v1.17.15**
*   **Core**: Improved classification of Z.ai context-window overflow errors to ensure correct failure modes surface for oversized requests. Added graceful handling for unavailable config directories during file reading.
*   **Desktop**: Restored model details tooltips in the model picker interface.

### 3. Hot Issues
*   **#6823 CLI colors have low contrast on macOS Terminal** [CLOSED]
    *   *Why it matters*: High-impact UX issue affecting readability on popular macOS setups.
    *   *Community*: 17 👍, 16 comments.
    *   [Link](https://github.com/anomalyco/opencode/issues/6823)
*   **#4461 Input text is black on black** [CLOSED]
    *   *Why it matters*: Critical accessibility bug where input becomes invisible on specific themes.
    *   *Community*: 13 comments, 6 👍.
    *   [Link](https://github.com/anomalyco/opencode/issues/4461)
*   **#34359 Track TUI migration to @opencode-ai/client** [OPEN]
    *   *Why it matters*: Central tracking issue for migrating the V2 TUI to the new generated Promise client, essential for V2 stability.
    *   *Community*: 9 comments.
    *   [Link](https://github.com/anomalyco/opencode/issues/34359)
*   **#35556 V2: first Location can expose an empty plugin generation** [OPEN]
    *   *Why it matters*: Identifies a transient race condition in `PluginSupervisor` that can lead to partial plugin loads on startup.
    *   *Community*: 8 comments.
    *   [Link](https://github.com/anomalyco/opencode/issues/35556)
*   **#34341 Route progressive AGENTS.md through durable Instructions** [OPEN]
    *   *Why it matters*: Defines semantics for path-scoped instructions, addressing lifetime issues where synthetic messages persist too long.
    *   *Community*: 7 comments.
    *   [Link](https://github.com/anomalyco/opencode/issues/34341)
*   **#20584 Themes rendering incorrectly on MacBook Pro 2015** [CLOSED]
    *   *Why it matters*: Legacy hardware compatibility issue causing unreadable text across all themes.
    *   *Community*: 7 comments.
    *   [Link](https://github.com/anomalyco/opencode/issues/20584)
*   **#10054 Can't see any text in the zsh terminal on a Mac** [CLOSED]
    *   *Why it matters*: Another macOS-specific visibility bug affecting zsh users.
    *   *Community*: 6 comments, 1 👍.
    *   [Link](https://github.com/anomalyco/opencode/issues/10054)
*   **#34497 Support file attachments in V2 prompts** [OPEN]
    *   *Why it matters*: Core functionality gap in V2; users cannot attach files to prompts yet.
    *   *Community*: 4 comments.
    *   [Link](https://github.com/anomalyco/opencode/issues/34497)
*   **#34387 Support @-tagged files and folders in prompts** [OPEN]
    *   *Why it matters*: Essential for V2 context management, allowing users to reference files/directories via `@` mentions.
    *   *Community*: 4 comments.
    *   [Link](https://github.com/anomalyco/opencode/issues/34387)
*   **#35803 pip waiting on (unclear stall)** [CLOSED]
    *   *Why it matters*: Installation/hanging issue on Windows environments requiring investigation.
    *   *Community*: 3 comments.
    *   [Link](https://github.com/anomalyco/opencode/issues/35803)

### 4. Key PR Progress
*   **#35829 feat(app): add inline file browser tabs**
    *   Integrates TanStack-backed file search and inline file tabs into the V2 review pane.
    *   [Link](https://github.com/anomalyco/opencode/pull/35829)
*   **#35817 fix(core): preserve provider metadata namespaces**
    *   Ensures complete provider metadata is preserved across start/delta/end events, improving replay fidelity.
    *   [Link](https://github.com/anomalyco/opencode/pull/35817)
*   **#35793 refactor(schema): apply session review decisions**
    *   Normalizes V2 Session, Message, and Agent contracts, updating runtime behavior for streaming and compaction.
    *   [Link](https://github.com/anomalyco/opencode/pull/35793)
*   **#35818 fix(core): skip non-vcs location watcher**
    *   Optimizes performance by skipping file watching for locations without VCS metadata.
    *   [Link](https://github.com/anomalyco/opencode/pull/35818)
*   **#35820 fix(core): resume sessions after restart**
    *   Enables durable recording of session lifecycle outcomes, allowing recovery from interrupted executions.
    *   [Link](https://github.com/anomalyco/opencode/pull/35820)
*   **#35826 fix(cli): elect one managed daemon**
    *   Prevents race conditions by acquiring a process-lifetime lock, ensuring only one daemon manages services.
    *   [Link](https://github.com/anomalyco/opencode/pull/35826)
*   **#35497 feat(core): make path-local instruction discovery durable**
    *   Redesigns how subdirectory `AGENTS.md` files are discovered and injected, preventing loss during compaction.
    *   [Link](https://github.com/anomalyco/opencode/pull/35497)
*   **#35188 feat(core): implement models fallback**
    *   Adds capability to specify fallback models for agents, enhancing reliability.
    *   [Link](https://github.com/anomalyco/opencode/pull/35188)
*   **#31637 docs: clarify server plugin lifecycle hooks**
    *   Documents existing server plugin hooks to aid plugin authorship.
    *   [Link](https://github.com/anomalyco/opencode/pull/31637)
*   **#34634 feat(core): resolve v2 prompt attachments**
    *   Resolves V2 file attachments by inlining text/directories and materializing media URLs for stable replay.
    *   [Link](https://github.com/anomalyco/opencode/pull/34634)

### 5. Feature Request Trends
*   **V2 Parity & Migration**: The majority of open issues and PRs focus on closing the feature gap between V1 and V2, specifically regarding file attachments (`#34497`), `@`-tagged references (`#34387`), and provider OAuth logins (Snowflake, GitHub Copilot, xAI).
*   **Durable State Management**: Strong emphasis on making session state, plugin instructions, and metadata durable across restarts and compactions (`#35820`, `#35497`, `#35817`).
*   **UX Polish in V2 TUI**: Requests for optimistic rendering of queued prompts (`#34766`) and improved form UI consistency (`#35067`) indicate a push for a smoother V2 desktop experience.

### 6. Developer Pain Points
*   **macOS Terminal Compatibility**: A significant cluster of closed issues (`#6823`, `#4461`, `#10054`, `#20584`, `#4721`, `#6923`) highlights persistent difficulties with theme rendering, font colors, and contrast in the default macOS Terminal.app and zsh.
*   **V2 Provider Authentication Gaps**: Multiple issues (`#34780`, `#34779`, `#34778`) report missing OAuth flows for major providers (Snowflake, GitHub Copilot, xAI) in the V2 branch, blocking enterprise and advanced users.
*   **Windows Stability**: Issues related to port locking on exit (`#32932`) and TUI failures when `.opencode` directories exist (`#35828`) suggest ongoing stability challenges on Windows platforms.
*   **Plugin Discoverability**: Bugs where skills registered via the V2 plugin API are not discoverable via `/skills` (`#33896`) point to friction in the plugin development workflow.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-07-08

### 1. Today's Highlights
The Pi development team has closed several critical stability bugs related to TUI rendering, extension loading performance, and edge-case handling in reasoning models. Significant attention was paid to improving the robustness of the coding agent's tool usage and session management, while the community continues to push for better integration with diverse AI providers and extended configuration flexibility.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Hot Issues
These issues garnered the most community engagement or addressed critical functional gaps:

1.  **[Bug] Reasoning models returning null content** (#6259)
    *   **Why it matters:** Fixes a `TypeError` crash when models like GLM-5.2 return `reasoning_content` without text `content`.
    *   **Status:** Closed.
    *   **Link:** [Issue #6259](https://github.com/earendil-works/pi/issues/6259)
2.  **[Bug] Edit tool tolerating extra keys** (#5501)
    *   **Why it matters:** Prevents validation errors when models append stray keys (e.g., `newText_strip`) during edits, improving compatibility with non-standard model outputs.
    *   **Status:** Closed.
    *   **Link:** [Issue #5501](https://github.com/earendil-works/pi/issues/5501)
3.  **[Bug] Escape key leaving TUI stuck in Working** (#6234)
    *   **Why it matters:** Resolves a UI state bug where pressing `Escape` fails to abort runs if extension hooks don't settle, leaving the user stuck.
    *   **Status:** Open.
    *   **Link:** [Issue #6234](https://github.com/earendil-works/pi/issues/6234)
4.  **[Bug] Scoped models failing with bracketed IDs** (#6210)
    *   **Why it matters:** Fixes regex parsing issues that prevented selection of custom model IDs containing brackets (e.g., `custom/model[1m]`).
    *   **Status:** Open.
    *   **Link:** [Issue #6210](https://github.com/earendil-works/pi/issues/6210)
5.  **[TUI] Cursor visibility on window blur** (#3896)
    *   **Why it matters:** Improves UX by ensuring the cursor visually indicates when the terminal window loses focus, matching standard CLI behavior.
    *   **Status:** Closed.
    *   **Link:** [Issue #3896](https://github.com/earendil-works/pi/issues/3896)
6.  **[Bug] TUI Segfault on minimal Node builds** (#6359)
    *   **Why it matters:** Critical fix for crashes on RHEL/minimal containers caused by `Intl.Segmenter` null dereferences, expanding compatible environments.
    *   **Status:** Closed.
    *   **Link:** [Issue #6359](https://github.com/earendil-works/pi/issues/6359)
7.  **[Enhancement] Defer extension loading strategies** (#6360)
    *   **Why it matters:** Proposes lazy/async/sync extension loading to drastically reduce startup time for users with many extensions.
    *   **Status:** Closed.
    *   **Link:** [Issue #6360](https://github.com/earendil-works/pi/issues/6360)
8.  **[Bug] Auto-retry emitting premature agent_end** (#6410)
    *   **Why it matters:** Fixes UI flashing issues where transient errors (429s) incorrectly signaled task completion before retrying.
    *   **Status:** Closed.
    *   **Link:** [Issue #6410](https://github.com/earendil-works/pi/issues/6410)
9.  **[Bug] Context window clamping logic** (#6206)
    *   **Why it matters:** Clarifies how `max_tokens` clamping interacts with context limits, preventing artificial cutoffs distinct from provider constraints.
    *   **Status:** Open.
    *   **Link:** [Issue #6206](https://github.com/earendil-works/pi/issues/6206)
10. **[Bug] Clipboard images ignored by LLMs** (#6373)
    *   **Why it matters:** Highlights a limitation where pasted images are saved to temp files but not reliably sent to models that ignore file paths.
    *   **Status:** Closed.
    *   **Link:** [Issue #6373](https://github.com/earendil-works/pi/issues/6373)

### 4. Key PR Progress
These pull requests represent significant improvements to stability, API exposure, and developer experience:

1.  **Disable padding for assistant messages** (#6169)
    *   **Summary:** Adjusts rendering to remove unnecessary whitespace around assistant responses.
    *   **Link:** [PR #6169](https://github.com/earendil-works/pi/pull/6169)
2.  **Export image resize utilities** (#4775)
    *   **Summary:** Makes `resizeImage` functions available to extensions, enabling better image handling within custom tools.
    *   **Link:** [PR #4775](https://github.com/earendil-works/pi/pull/4775)
3.  **Stabilize working status row** (#6026)
    *   **Summary:** Fixes UI flickering and instability in the TUI status bar during active operations.
    *   **Link:** [PR #6026](https://github.com/earendil-works/pi/pull/6026)
4.  **Add system prompt options to extension commands** (#5306)
    *   **Summary:** Allows extensions to inject or modify system prompts dynamically via commands.
    *   **Link:** [PR #5306](https://github.com/earendil-works/pi/pull/5306)
5.  **Print benchmark timings after TUI stop** (#6030)
    *   **Summary:** Enhances debugging by displaying performance metrics post-execution for the coding agent.
    *   **Link:** [PR #6030](https://github.com/earendil-works/pi/pull/6030)
6.  **Stable markdown working** (#5913)
    *   **Summary:** Improves the reliability of markdown rendering in the TUI, reducing layout shifts.
    *   **Link:** [PR #5913](https://github.com/earendil-works/pi/pull/5913)
7.  **Stabilize streaming code fence rendering** (#5846)
    *   **Summary:** Fixes visual glitches in code blocks during live streaming responses.
    *   **Link:** [PR #5846](https://github.com/earendil-works/pi/pull/5846)
8.  **Add extension prompt guideline API** (#5711)
    *   **Summary:** Provides a standardized API for extensions to receive prompt guidelines from the core agent.
    *   **Link:** [PR #5711](https://github.com/earendil-works/pi/pull/5711)
9.  **Emit session name changes to extensions** (#6175)
    *   **Summary:** Ensures extensions are notified when session names are updated, improving state synchronization.
    *   **Link:** [PR #6175](https://github.com/earendil-works/pi/pull/6175)
10. **Expose full tool definitions from getAllTools** (#5085)
    *   **Summary:** Grants extensions read-only access to complete tool schemas, aiding in UI generation and validation.
    *   **Link:** [PR #5085](https://github.com/earendil-works/pi/pull/5085)

### 5. Feature Request Trends
*   **Provider Flexibility:** Strong demand for adding first-class support for new providers (e.g., Eden AI) and handling edge cases in existing ones (Azure OpenAI, DeepInfra).
*   **Configuration Granularity:** Users are requesting more control over session management, such as supporting opaque custom metadata in JSONL headers and allowing "no-session" modes even when global flags are set.
*   **Extension Ecosystem Expansion:** There is a clear trend toward exposing more internal APIs (image resizing, tool definitions, CLI parsers) to empower extension developers.

### 6. Developer Pain Points
*   **Startup Performance:** Heavy reliance on eager extension loading is causing significant delays for users with many plugins, driving the push for lazy/deferred loading strategies.
*   **Environment Compatibility:** Crashes on minimal Node.js builds (RHEL) and issues with Bun-installed binaries indicate a need for more robust environment detection and dependency handling.
*   **Configuration Rigidity:** Users are frustrated by strict validation on model IDs (brackets) and edit tool schemas, leading to requests for more tolerant parsing.
*   **Session State Management:** Silent failures when creating new sessions via `--session-id` or losing state during retries highlight inconsistencies in how session lifecycle events are handled and communicated to the UI.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-07-08

### 1. Today's Highlights
Qwen Code v0.19.7 was released with significant improvements to PR triage automation and review processes. The community is actively discussing multi-workspace support in the daemon and token efficiency optimizations, while new SDK control methods for reasoning effort and model switching have landed in pull requests.

### 2. Releases
*   **v0.19.7**: The latest stable release focuses on internal stability and workflow enhancements. Key changes include strengthened PR gating via batch detection and red flag patterns, and improvements to the review skill logic.
    *   [View Changelog](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7)
*   **v0.19.7-nightly.20260708.394c1a289**: Nightly build including documentation updates for WeCom channel support.
    *   [View Changelog](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.7-nightly.20260708.394c1a289)

### 3. Hot Issues
1.  **[RFC] Support multiple workspaces in one daemon** (#6378)
    *   *Why it matters:* Proposes a shift from `1 daemon = 1 workspace` to a multi-workspace model, crucial for complex monorepos. High engagement (19 comments) indicates strong demand.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/6378)
2.  **`/review` skill consumes large amounts of tokens** (#6264)
    *   *Why it matters:* Identifies a critical cost/performance bottleneck in a popular built-in skill, affecting daily development efficiency.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/6264)
3.  **Reduce per-session overhead on daemon session-creation path** (#6312)
    *   *Why it matters:* Addresses latency issues in long-running daemon sessions where synchronous I/O repeats unnecessarily.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/6312)
4.  **Shell tool fails on Windows with stdout output** (#6298)
    *   *Why it matters:* Blocks Windows users from using core shell tools due to missing `cat` dependency in `cmd.exe`.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/6298)
5.  **`tool_search` invalidates LLM server KV-cache** (#6265)
    *   *Why it matters:* A performance regression where deferred tool loading disrupts caching, increasing latency and token usage.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/6265)
6.  **Hard limit: 0 when model reserves full context for output** (#6384)
    *   *Why it matters:* Causes immediate API errors when models have minimal context headroom, breaking session continuity.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/6384)
7.  **Unable to `/rewind` after `/compress`** (#6318)
    *   *Why it matters:* Limits user ability to undo actions after compression, a key frustration for iterative debugging.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/6318)
8.  **Sub-agent max parallel count setting** (#5176)
    *   *Why it matters:* Essential for local LLM users with limited VRAM/CPU resources to prevent resource exhaustion.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/5176)
9.  **VSCode Extension Failed to Connect** (#6414)
    *   *Why it matters:* Critical connectivity issue for the primary IDE integration, blocking workflow adoption.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/6414)
10. **Add MessageDisplay hook for mid-turn streaming** (#6488)
    *   *Why it matters:* Enables custom UIs and hooks to react to streaming text in real-time, a major gap in current extensibility.
    *   [Link](https://github.com/QwenLM/qwen-code/issues/6488)

### 4. Key PR Progress
1.  **feat(core): Add `working_dir` to Agent tool** (#6456)
    *   Pins sub-agents to specific git worktrees, enabling precise isolation for multi-workspace workflows.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/6456)
2.  **feat(sdk): Add control request methods** (#6492)
    *   Introduces `set_effort()` and similar methods in Python/TS SDKs for runtime reasoning control and model switching.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/6492)
3.  **fix(web-shell): Count daemon sessions in Dashboard** (#6493)
    *   Corrects usage metrics by including live daemon sessions in the Web Shell dashboard.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/6493)
4.  **feat(qqbot): Group message handling and cron support** (#6457)
    *   Completes QQ Bot channel integration with keyword triggers and experimental cron messaging.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/6457)
5.  **feat(serve): Bound replay snapshot history** (#6482)
    *   Limits memory usage in live daemon sessions by bounding the replay window size.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/6482)
6.  **fix(scripts): Handle missing NPM dist-tags** (#6481)
    *   Resolves release workflow failures caused by unhandled errors during version detection.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/6481)
7.  **feat(hooks): Add MessageDisplay hook** (#6489)
    *   Implements the requested `MessageDisplay` hook for observing streaming replies incrementally.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/6489)
8.  **fix(cli): Bound live streaming-table height** (#6421)
    *   Fixes terminal UI bugs like scroll-to-top locking and header flashing during wide table rendering.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/6421)
9.  **fix(channel): Relay ACP permission requests** (#6446)
    *   Allows channel users to approve/deny ACP permission requests directly via chat.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/6446)
10. **fix(core): Reject Windows-style workspace paths** (#6483)
    *   Enhances security/validation by rejecting backslash-based absolute paths in `record_artifact`.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/6483)

### 5. Feature Request Trends
*   **Multi-Workspace & Isolation:** Strong demand for supporting multiple workspaces within a single daemon instance and isolating memory/sessions per worktree.
*   **Extensibility & Hooks:** Users are requesting deeper integration points, specifically mid-streaming hooks (`MessageDisplay`) and better control over sub-agent concurrency.
*   **Channel Integration:** Continued expansion of non-standard interfaces, including WeCom, QQ Bot, and improved DingTalk interactive cards.
*   **Resource Management:** Features to limit parallel sub-agents and manage token/context limits dynamically to protect local or constrained environments.

### 6. Developer Pain Points
*   **Token Inefficiency:** Several issues highlight excessive token consumption in built-in skills (`/review`) and tool search operations, impacting cost and speed.
*   **Context Window Management:** Users struggle with hard limits, compression side-effects, and context leakage, particularly when dealing with large files or complex session histories.
*   **Platform Specific Bugs:** Recurring issues on Windows, specifically regarding shell command execution (`cat` dependency) and path validation.
*   **Daemon Stability:** Concerns around session reordering, auto-title pollution, and memory leaks in long-running daemon processes.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-07-08
**Repository:** github.com/Hmbown/DeepSeek-TUI (Canonical: CodeWhale)

### 1. Today's Highlights
The project has officially rebranded `deepseek-tui` to **CodeWhale**, with v0.8.67 marking the start of the new canonical npm package and release asset naming convention. The v0.8.68 milestone is currently in active stabilization, focusing on fixing critical TUI freezes, sub-agent panel visibility, and workflow lane synchronization. Community attention is heavily directed toward Windows-specific input handling (IME deadlocks) and performance optimizations for high-token contexts.

### 2. Releases
*   **v0.8.67**: This is the current canonical release.
    *   **Rebranding**: The legacy `deepseek-tui` npm package is deprecated. Users must migrate to `CodeWhale`.
    *   **Action Required**: Consult `docs/REBRAND.md` for migration instructions from v0.8.x legacy names.

### 3. Hot Issues
1.  **[CLOSED] #2487: Frequent error: Turn stalled - no completion signal received**
    *   *Significance*: Critical reliability bug in `yolo` mode causing unresponsive UIs. High engagement (20 comments) indicates widespread impact.
    *   *Link*: [Issue #2487](https://github.com/Hmbown/CodeWhale/issues/2487)
2.  **[CLOSED] #3144: Add natural-language auto-review policy and a pre-push review gate**
    *   *Significance*: Enhances security and automation by integrating Cursor-like SDK review patterns.
    *   *Link*: [Issue #3144](https://github.com/Hmbown/CodeWhale/issues/3144)
3.  **[CLOSED] #3063: v0.8.59 release tracker — TUI mouse-report leak, runtime safety**
    *   *Significance*: Stabilization release addressing macOS input leaks and general runtime safety.
    *   *Link*: [Issue #3063](https://github.com/Hmbown/CodeWhale/issues/3063)
4.  **[CLOSED] #1812: TUI-freeze-Windows-crossterm-poll**
    *   *Significance*: Intermittent freezing on Windows 11 affecting keyboard/screen updates while process remains alive.
    *   *Link*: [Issue #1812](https://github.com/Hmbown/CodeWhale/issues/1812)
5.  **[OPEN] #4092: v0.8.68 execution board: lane order, dependencies, and agent protocol**
    *   *Significance*: Central tracking issue for the v0.8.68 milestone, defining lane labels and agent protocols.
    *   *Link*: [Issue #4092](https://github.com/Hmbown/CodeWhale/issues/4092)
6.  **[CLOSED] #2300: Multi-model compatibility, provider docs, and automatic Fleet loadout selection**
    *   *Significance*: Improves UX for multi-provider setups (vLLM vs OpenAI) and auto-selection logic.
    *   *Link*: [Issue #2300](https://github.com/Hmbown/CodeWhale/issues/2300)
7.  **[CLOSED] #2791: Refactor command dispatch from monolithic match to modular strategy pattern**
    *   *Significance*: Major architectural cleanup to improve maintainability of command implementations.
    *   *Link*: [Issue #2791](https://github.com/Hmbown/CodeWhale/issues/2791)
8.  **[CLOSED] #2261: TUI 对话中进程崩溃，输入内容泄漏到 PowerShell 终端**
    *   *Significance*: Critical Windows/PowerShell integration bug where focus loss causes input execution in the host shell.
    *   *Link*: [Issue #2261](https://github.com/Hmbown/CodeWhale/issues/2261)
9.  **[CLOSED] #2061: Hotbar: MMO-style quick action bar at bottom of sidebar**
    *   *Significance*: Introduces a customizable, one-key-action interface for frequent commands.
    *   *Link*: [Issue #2061](https://github.com/Hmbown/CodeWhale/issues/2061)
10. **[OPEN] #4094: Sub-agent detail panel is empty and can freeze the TUI during active work**
    *   *Significance*: UX bug where active sub-agents show blank details, potentially leading to TUI hangs.
    *   *Link*: [Issue #4094](https://github.com/Hmbown/CodeWhale/issues/4094)

### 4. Key PR Progress
1.  **#4181: fix(tui): Fleet setup role/profile roster editor**
    *   Aligns Fleet setup with role/profile editing and exposes model routes from all providers.
    *   [PR #4181](https://github.com/Hmbown/CodeWhale/pull/4181)
2.  **#4189: fix(ci): only auto-label agent-ready on issue open**
    *   Prevents CI from re-labeling issues incorrectly during manual triage edits.
    *   [PR #4189](https://github.com/Hmbown/CodeWhale/pull/4189)
3.  **#4183: docs: add architecture phase links to v0.8.68 playbook**
    *   Updates documentation with cross-linked architecture trackers and vocabulary tables.
    *   [PR #4183](https://github.com/Hmbown/CodeWhale/pull/4183)
4.  **#4182: fix(tui): populate sub-agent detail panel with live activity**
    *   Resolves #4094 by showing live tool calls and summaries for active sub-agents.
    *   [PR #4182](https://github.com/Hmbown/CodeWhale/pull/4182)
5.  **#4180: fix(tui): normalize raw Ctrl+C byte for PTY quit-arm flow**
    *   Fixes key normalization issues in PTY sessions, ensuring reliable cancellation behavior.
    *   [PR #4180](https://github.com/Hmbown/CodeWhale/pull/4180)
6.  **#4163: feat(workflows): v0.8.68 agent execution lanes and milestone sync**
    *   Implements wave-based workflow files and automated milestone syncing for v0.8.68.
    *   [PR #4163](https://github.com/Hmbown/CodeWhale/pull/4163)
7.  **#4099: 0.8.68 train: workflow correctness, TUI stability, modes & permissions**
    *   Comprehensive release train PR covering completion polling fixes, cancel interrupts, and security hardening.
    *   [PR #4099](https://github.com/Hmbown/CodeWhale/pull/4099)
8.  **#4098: docs(constitution): add anti-polling rule for sub-agent waiting strategy**
    *   Documents best practices to prevent wasteful peek-sleep loops in parent agents.
    *   [PR #4098](https://github.com/Hmbown/CodeWhale/pull/4098)
9.  **#3902: perf(tui): fix the five render/input hot paths**
    *   Addresses significant performance regressions in task sidebar rendering and input handling.
    *   [PR #3902](https://github.com/Hmbown/CodeWhale/pull/3902)
10. **#4088: fix(tui): preserve native selection without mouse capture**
    *   Fixes text selection issues in host terminals when mouse capture is disabled.
    *   [PR #4088](https://github.com/Hmbown/CodeWhale/pull/4088)

### 5. Feature Request Trends
*   **Modular Command Dispatch**: Strong push to break down monolithic command structures into reusable, modular components (Issue #2791).
*   **Context Efficiency**: Significant interest in reducing token usage through "cache-maximalism," slimming base prompts, and optimizing benchmark outputs (Issues #528, #2953, #2956).
*   **Sub-Agent Autonomy & Routing**: Demand for better sub-agent tool scoping, provider routing, and graceful fallback strategies when external APIs fail (Issues #1641, #3969, #4096).
*   **Workflow Visualization**: Requests for better UI representation of complex agent workflows, including "hotbars" and detailed sub-agent panels (Issues #2061, #1982, #4094).

### 6. Developer Pain Points
*   **Windows Stability & Input Handling**: Recurring crashes, freezes, and IME deadlocks on Windows (Issues #1812, #2261, #1835) remain the top technical hurdle.
*   **TUI Freezes & Stalls**: Users frequently encounter unresponsive states during "yolo" mode or when sub-agents stall, requiring manual intervention (Issues #2487, #4094, #1472).
*   **Token Cost & Performance**: High completion token usage and slow render times in large repositories are major concerns, driving efforts to align with Codex CLI efficiency metrics (Issues #2957, #3902).
*   **Complex Configuration**: Managing multiple providers, fleets, and hotbar setups is cited as cumbersome, with calls for better defaults and wizards (Issues #2300, #2071).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*