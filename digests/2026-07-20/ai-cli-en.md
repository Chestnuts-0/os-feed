# AI CLI Tools Community Digest 2026-07-20

> Generated: 2026-07-20 01:59 UTC | Tools covered: 9

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



# AI CLI Tools Ecosystem Report — 2026-07-20

## 1. Ecosystem Overview
The AI CLI landscape is entering a critical reliability phase where agent orchestration, session state integrity, and cross-platform stability now dominate community discourse over raw capability expansion. While vendors continue rapid release cycles, parallel subagent workflows and complex multi-turn sessions remain the primary source of regressions across nearly every major tool. The market is clearly bifurcating into cloud-managed ecosystems (Claude Code, Codex, Copilot) focused on IDE integration and managed compute, versus open/local-first infrastructures (Gemini CLI, OpenCode, DeepSeek TUI) prioritizing self-hosting, extensibility, and data sovereignty. Developer trust is increasingly tied to transparent observability, robust sandboxing, and predictable permission semantics rather than feature volume alone.

## 2. Activity Comparison

| Tool | Issues Count | PR Count | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 9 | **v2.1.215** (Behavioral shift on `/verify`/`/code-review`) |
| **OpenAI Codex** | 10 | 10 | None |
| **Gemini CLI** | 10 | Multiple (unitemized) | **v0.52.0-nightly.20260720** |
| **GitHub Copilot CLI** | 10 | 1 | None |
| **Kimi Code CLI** | 4 | 8 | None |
| **OpenCode** | 8 | Multiple (unitemized) | None |
| **Pi** | N/A | N/A | N/A (Digest failed) |
| **Qwen Code** | 9 | 3 | **v0.20.0** / **v0.20.1-preview.7215** |
| **DeepSeek TUI** | 6 | Multiple (unitemized) | None |

## 3. Shared Feature Directions

*   **Robust Subagent Orchestration:** Every major tool is struggling with multi-agent state management. Claude Code reports nested subagent completion failures; OpenAI Codex faces audit trail readability issues with encrypted payloads; Gemini CLI masks turn-limit interruptions as success; Qwen Code has subagents mutating the main session model; and DeepSeek TUI experiences session freezes during parallel processing.
*   **Session Persistence & Continuity:** Users demand reliable session handoff and recovery. Kimi Code CLI is prioritizing remote control for cross-device continuity; OpenAI Codex is facing pressure for explicit data deletion controls; and Qwen Code is restoring worktree isolation on session resume.
*   **Extensibility & Observability:** The ecosystem is moving toward production-grade debugging. GitHub Copilot CLI is requested to add skill-level OpenTelemetry spans; Kimi Code CLI introduced a `MessageDisplay` hook for live-streaming integrations; and Claude Code's PreToolUse hook regression highlights the fragility of security-judge workflows.
*   **Native Web Search:** Qwen Code is pushing an opt-in built-in `web_search` tool backed by DashScope, while DeepSeek TUI has shipped provider-native search backends with citation evidence and bounded failover chains.
*   **Platform-Specific Stability:** Desktop clients are a universal friction point. OpenAI Codex reports macOS daemon runaways and Windows HID enumeration hangs; Claude Code faces kernel panics on Intel/AMD Macs; OpenCode struggles with Windows ARM64 initialization; and Copilot CLI reports long Windows startup times.

## 4. Differentiation Analysis

*   **Cloud-Native Managed Agents (Claude Code, OpenAI Codex, GitHub Copilot CLI):** These tools focus on seamless IDE integration, managed infrastructure, and enterprise workflow support. Their technical approach centers on encrypted multi-agent payloads, worktree isolation, and plan-mode execution. The trade-off is higher complexity in state management, leading to regressions in parallel workflows and desktop client performance.
*   **Open/Local-First Infrastructures (Gemini CLI, OpenCode, DeepSeek TUI):** These prioritize self-hosting, local model auto-discovery, and extensive hook systems. OpenCode's SQLite event sourcing and local model discovery contrast with Gemini CLI's rapid nightly iteration and DeepSeek TUI's emphasis on environment-level tool sandboxing. They serve developers who require data sovereignty and granular control over compute.
*   **Emerging & Niche Players (Kimi Code CLI, Qwen Code):** Kimi Code CLI differentiates through cross-device session continuity and real-time streaming hooks, targeting mobile/tablet parity. Qwen Code is rapidly closing feature gaps with native web search and autofix reliability improvements, positioning itself as a fast-moving alternative in the open-source space.

## 5. Community Momentum & Maturity

*   **High Engagement & Maturity:** **OpenAI Codex** demonstrates massive community traction, with its macOS resource issue receiving 255 👍 and voice transcription requests at 193 👍. **Claude Code** shows a mature but strained user base, with systematic reporting of high-severity parser and worktree bugs indicating heavy daily usage in production pipelines.
*   **Rapid Iteration:** **Gemini CLI** maintains momentum through nightly builds, though this comes with P1 agent reliability issues. **Kimi Code CLI** is actively shipping 8 PRs in a single day, focusing on session integrity and streaming extensibility. **Qwen Code** balances preview releases with targeted fixes for daemon logs and subagent contention.
*   **Stabilization Required:** **GitHub Copilot CLI** shows signs of instability with a cluster of reliability regressions in Plan Mode and sub-agent dispatch, alongside minimal PR activity. **OpenCode** is maturing beyond initial CLI/TUI surfaces but faces operational risks from unbounded SQLite growth and rate-limit errors.

## 6. Trend Signals

*   **Agent Reliability is the New Frontier:** The industry is shifting from "can the agent execute?" to "does the agent maintain state correctly under load?" Parallel subagent orchestration is the new bottleneck, with bugs ranging from silent failure masking to model mutation and session freezes.
*   **Observability as a Requirement:** Enterprises need deep visibility into agent actions. Requests for OpenTelemetry spans, readable audit trails, and mid-stream steering indicate that black-box agent execution is no longer acceptable for professional workflows.
*   **Security & Sandboxing Maturation:** Prompt injection in subagent contexts (Claude Code), tool sandboxing enforcement (DeepSeek TUI), and permission rule semantics (Kimi Code) show that security is becoming a primary differentiator. Developers expect first-match rule enforcement and isolated execution environments.
*   **Real-Time & Cross-Device UX:** The demand for mid-generation steering, live-reply hooks, and remote session control signals a move toward fluid, non-blocking human-agent interaction patterns that span devices and time.
*   **Local-First Tension:** While cloud agents offer convenience, community demands for local model auto-discovery, explicit data deletion, and worktree isolation highlight an ongoing tension between managed ease-of-use and data

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
**Date:** 2026-07-20  
**Source:** [anthropics/skills](https://github.com/anthropics/skills)

## 1. Top Skills Ranking
*Ranked by community engagement; all listed items remain Open.*

1. **[fix(skill-creator): run_eval.py recall bug](https://github.com/anthropics/skills/pull/1298)**  
   **Functionality:** Critical infrastructure fix for the skill-creator workflow. Resolves a bug where `run_eval.py` consistently reports 0% recall, causing description optimization loops to fail.  
   **Highlights:** Addresses a widespread reproduction issue affecting multiple contributors; essential for reliable skill development tooling.  
   **Status:** Open

2. **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)**  
   **Functionality:** Enforces typographic quality in AI-generated documents, targeting orphan words, widow paragraphs, and numbering misalignment.  
   **Highlights:** Fills a common gap in document generation where visual polish is often overlooked by default behavior.  
   **Status:** Open

3. **[Add ODT skill](https://github.com/anthropics/skills/pull/486)**  
   **Functionality:** Enables creation, template filling, reading, and HTML conversion of OpenDocument Format files (.odt, .ods).  
   **Highlights:** Expands support for open-source and ISO-standard document workflows, particularly relevant for LibreOffice environments.  
   **Status:** Open

4. **[Improve frontend-design skill clarity](https://github.com/anthropics/skills/pull/210)**  
   **Functionality:** Refines the existing frontend-design skill to improve instruction specificity and actionability.  
   **Highlights:** Ensures guidance can be executed within a single conversation without ambiguity, raising the baseline for design-related outputs.  
   **Status:** Open

5. **[Add skill-quality-analyzer and skill-security-analyzer](https://github.com/anthropics/skills/pull/83)**  
   **Functionality:** Introduces meta-skills that evaluate other Claude Skills across structure, documentation, examples, and security dimensions.  
   **Highlights:** Provides a standardized quality gate for community-submitted skills, supporting marketplace trust.  
   **Status:** Open

6. **[Add self-audit skill](https://github.com/anthropics/skills/pull/1367)**  
   **Functionality:** Audits AI output before delivery using mechanical file verification followed by a four-dimension reasoning quality gate.  
   **Highlights:** Stack-agnostic quality assurance layer designed to catch hallucinations or missing artifacts prior to user delivery.  
   **Status:** Open

7. **[Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)**  
   **Functionality:** Comprehensive testing guidance covering the Testing Trophy, unit testing AAA patterns, React component testing, and more.  
   **Highlights:** Broad applicability across development workflows; addresses the full testing stack from philosophy to implementation.  
   **Status:** Open

8. **[Add color-expert skill](https://github.com/anthropics/skills/pull/1302)**  
   **Functionality:** Specialized skill for color knowledge, including naming systems (ISCC-NBS, Munsell, XKCD), color spaces, and palette generation.  
   **Highlights:** Targets designers and developers needing precise color specification without relying on general-purpose guidance.  
   **Status:** Open

---

## 2. Community Demand Trends
*Distilled from high-engagement Issues.*

*   **Security & Trust Boundaries:** Issue [#492](https://github.com/anthropics/skills/issues/492) (39 comments) highlights urgent concerns about community skills impersonating official Anthropic skills under the `anthropic/` namespace, signaling a demand for stricter namespace governance and verification.
*   **Enterprise Collaboration:** Issue [#228](https://github.com/anthropics/skills/issues/228) requests org-wide skill sharing directly within Claude.ai, moving beyond manual file exchange. This indicates a push toward centralized, team-managed skill libraries.
*   **Evaluation Reliability:** Issues [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), and [#1323](https://github.com/anthropics/skills/issues/1323) collectively report failures in `run_eval.py` trigger detection, showing high demand for robust, bug-free skill testing tooling.
*   **Agent Governance & Safety:** Issue [#412](https://github.com/anthropics/skills/issues/412) proposes skills for policy enforcement, threat detection, and audit trails, reflecting interest in safety-oriented agent architectures.
*   **Context Efficiency:** Issue [#13

---



# Claude Code Community Digest — 2026-07-20

## 1. Today's Highlights
Claude Code **v2.1.215** shipped today with a behavioral shift: `/verify` and `/code-review` skills no longer run automatically and must now be invoked explicitly. Community attention is dominated by critical reliability regressions in parallel workflows, including nested subagent orchestration failures, tool calls being emitted as literal XML instead of executing, and worktree isolation bugs that risk corrupting shared repositories.

## 2. Releases
### v2.1.215
*   **Change:** Claude no longer autonomously triggers the `/verify` and `/code-review` skills. Users must explicitly invoke these commands when desired.
*   **Community Reaction:** Mixed; early reports indicate friction for users who relied on the previous implicit behavior, with some requesting configurable defaults ([#79282](https://github.com/anthropics/claude-code/issues/79282)).

## 3. Hot Issues
1.  **[BUG] Tool calls emitted as literal text instead of executing** ([#64108](https://github.com/anthropics/claude-code/issues/64108))  
    *Why it matters:* In long Opus sessions, the agent intermittently leaks raw `<invoke>` XML prefixed by a stray `court` token into the transcript rather than executing the tool. This breaks automation pipelines and indicates a severe parser/regression issue.  
    *Reaction:* 30 👍, 16 comments. High-severity bug with broad impact.

2.  **[FEATURE] Active model and thinking mode indicators in VS Code extension** ([#28986](https://github.com/anthropics/claude-code/issues/28986))  
    *Why it matters:* Developers working across multiple models need immediate visual feedback on the active model and thinking state within the IDE panel.  
    *Reaction:* 58 👍. Top-voted enhancement, signaling strong demand for IDE integration polish.

3.  **[BUG] Nested subagents always async; completion notifications fail** ([#75043](https://github.com/anthropics/claude-code/issues/75043))  
    *Why it matters:* Orchestrator subagents spawning child subagents via the `Agent` tool lose completion notifications and hit `TaskStop` ownership errors. This limits complex multi-agent architectures.  
    *Reaction:* 13 comments, reproducible across Opus and Fable.

4.  **[FEATURE] Real-time steering — send message mid-generation** ([#64624](https://github.com/anthropics/claude-code/issues/64624))  
    *Why it matters:* Currently, typing while Claude generates queues the input until completion; pressing Escape discards all in-progress work. Mid-stream steering is a requested parity feature with other AI coding assistants.  
    *Reaction:* 12 👍, 8 comments.

5.  **[BUG] Server-side experiment silently strips thinking summaries; CLI self-updates against config** ([#75607](https://github.com/anthropics/claude-code/issues/75607))  
    *Why it matters:* An `x-cc-atis` experiment removes Opus 4.8 thinking summaries without notice, and the CLI updates itself even when `autoUpdates: false`. Raises transparency and trust concerns.  
    *Reaction:* 8 👍.

6.  **[BUG] Worktree recycling destroys live sibling sessions' worktrees** ([#77268](https://github.com/anthropics/claude-code/issues/77268))  
    *Why it matters:* Recycling a worktree can wipe locked or uncommitted work in active parallel sibling sessions. Direct data-loss risk.  
    *Reaction:* Flagged with `data-loss`.

7.  **[BUG] `spawn_task`/chip mutates parent repo checkout on Windows** ([#79234](https://github.com/anthropics/claude-code/issues/79234))  
    *Why it matters:* When a spawned worktree directory is not a real git worktree, git commands resolve to the parent repo, silently running `git checkout -b claude/<name>` on the shared main branch.  
    *Reaction:* 100% reproducible scenario described; upstream fix PR opened.

8.  **[BUG] PreToolUse hook deny stops entire turn (regression in v2.1.210)** ([#78527](https://github.com/anthropics/claude-code/issues/78527))  
    *Why it matters:* A `prompt` PreToolUse hook denying a tool now halts the entire turn (`hook_stopped_continuation`) instead of returning a tool error, breaking documented security-judge workflows.  
    *Reaction:* Marked as regression; affects hook developers.

9.  **[BUG] Prompt injection appeared in subagent context** ([#79269](https://github.com/anthropics/claude-code/issues/79269))  
    *Why it matters:* During parallel subagent fan-out, one subagent returned context containing an injected instruction framework impersonating memory, not present in the parent prompt or disk.  
    *Reaction:* Flagged as security/safety concern.

10. **[BUG] Kernel panic on Intel Mac with AMD dGPU during heavy parallel usage** ([#74805](https://github.com/anthropics/claude-code/issues/74805))  
    *Why it matters:* Heavy parallel CLI usage correlates with WindowServer watchdog timeouts and kernel panics on specific Intel/AMD configurations.  
    *Reaction:* 3 comments; platform-specific stability issue.

## 4. Key PR Progress
1.  **[Fix] Add `_is_isolated_worktree` guard to prevent spawn from mutating parent repo** ([#79237](https://github.com/anthropics/claude-code/pull/79237))  
    Addresses the shared-checkout corruption bug reported in [#79234](https://github.com/anthropics/claude-code/issues/79234) by enforcing isolation checks before spawning.

2.  **[Fix] Strip ANSI escape fragments from model value before persisting to settings.json** ([#79210](https://github.com/anthropics/claude-code/pull/79210))  
    Prevents styled display strings (e.g., `[1m`) from corrupting the model ID in settings.

3.  **[Fix] Remove stray `re` syntax error and close `_extract_field` in rule_engine.py** ([#79211](https://github.com/anthropics/claude-code/pull/79211))  
    Resolves a module-level syntax error that caused hooks to error out and incorrectly flag computational work.

4.  **[Fix] Quote `$CLAUDE_PLUGIN_ROOT` in plugin hook commands** ([#54094](https://github.com/anthropics/claude-code/pull/54094))  
    Fixes hook failures when plugin paths contain spaces (e.g., company workspace names).

5.  **[Fix] Honor thumbs-down from any user when skipping duplicate auto-close** ([#79151](https://github.com/anthropics/claude-code/pull/79151))  
    Aligns bot behavior with documentation by allowing any user's `-1` reaction to prevent auto-closure of duplicate issues.

6.  **[Fix] Only log Statsig duplicate-comment metric when a duplicate was actually posted** ([#79152](https://github.com/anthropics/claude-code/pull/79152))  
    Stops unconditional metric emission when the dedupe bot bails early.

7.  **[Fix] Add mandatory `hookify.` prefix to example rule filenames** ([#79148](https://github.com/anthropics/claude-code/pull/79148))  
    Ensures shipped example rules are discoverable by the hookify loader.

8.  **[Fix] Use `disable-model-invocation` to hide ralph-wiggum commands** ([#79140](https://github.com/anthropics/claude-code/pull/79140))  
    Prevents the model from invoking self-loop commands intended only for user slash commands.

9.  **[Fix] Guard empty `FLAGS` array expansion in `gh.sh` for bash < 4.4** ([#79129](https://github.com/anthropics/claude-code/pull/79129))  
    Fixes crashes on

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-07-20

## 1. Today's Highlights
The Codex community is flagging significant stability regressions across desktop clients, with Windows users reporting frequent hangs, CPU spikes triggered by system services, and sandbox-related patch failures. In response to ongoing performance demands, engineering has merged a substantial batch of TUI optimizations targeting memory allocation, rendering latency, and multi-agent stream handling.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues
*Top 10 issues by community engagement and technical impact.*

1. **[macOS] Codex Desktop triggers `syspolicyd` / `trustd` CPU and memory runaway**
   Users report that Codex Desktop v26.527 causes severe macOS resource consumption via system policy daemons. This is the highest-engagement issue today with 255 👍 and 65 comments, indicating a widespread performance regression on Apple Silicon.
   https://github.com/openai/codex/issues/25719

2. **[Windows] Codex App frequently freezes/stutters despite sufficient resources**
   A long-standing performance issue on Windows 11 Pro affecting Plus subscribers. With 68 👍 and 54 comments, this highlights persistent UI thread blocking or rendering bottlenecks in the Electron-based client.
   https://github.com/openai/codex/issues/20214

3. **[Windows] Repeated `serialport.node` delay-load failures cause severe UI lag**
   *Status: Closed.* This issue resolved a critical native module loading failure that caused severe lag in the Windows app. It serves as a reference for similar native dependency issues affecting Windows stability.
   https://github.com/openai/codex/issues/33375

4. **[Windows] App hangs after launch due to HID device enumeration**
   The main process blocks indefinitely when a non-responsive HID device is present. This is a significant usability blocker for users with complex peripheral setups, drawing 39 comments since its report three days ago.
   https://github.com/openai/codex/issues/33780

5. **[IDE Extension] Voice transcription for IDE extension**
   A highly anticipated feature request for push-to-talk mic support in the VS Code panel. With 193 👍, the community continues to demand parity between CLI voice mode and the IDE extension experience.
   https://github.com/openai/codex/issues/3000

6. **[CLI] Regression: Encrypted MultiAgentV2 messages remove readable task audit trail**
   Following the merge of encrypted multi-agent payloads, users report that the task audit trail is no longer human-readable. This 99 👍 issue highlights a trade-off between security and observability in multi-agent workflows.
   https://github.com/openai/codex/issues/28058

7. **[Windows] Crash in `CrBrowserMain` when Browser Use opens a page**
   Codex crashes with an access violation (`0xC0000005`) in `chrome.dll` when using the in-app browser for tool calls. This affects Pro users relying on browser automation capabilities on Windows.
   https://github.com/openai/codex/issues/32683

8. **[Windows] `apply_patch` fails with sandbox-related error**
   File edits through the Windows sandbox are failing, disrupting core coding workflows. This 24-comment issue points to ongoing friction between the desktop app's sandboxing implementation and Windows filesystem permissions.
   https://github.com/openai/codex/issues/30009

9. **[Windows] Orphan `git.exe` processes spawned repeatedly**
   The app continuously spawns `git.exe status --porcelain` commands along with matching `conhost.exe` processes, suggesting inefficient process lifecycle management in the Windows client.
   https://github.com/openai/codex/issues/17229

10. **[Enhancement] Way to configure location of worktrees**
    Users want explicit control over where Codex creates Git worktrees rather than defaulting to the parent directory. This 66 👍 request reflects a need for better integration with existing repository structures.
    https://github.com/openai/codex/issues/10599

## 4. Key PR Progress
*Notable merges and open pull requests advancing the platform.*

1. **#30235 [OPEN] Kill timed-out Git status process groups**
   Fixes a resource leak where wrapped Git processes continue scanning worktrees after timeout. Runs status in its own process group to ensure clean termination on Unix systems.
   https://github.com/openai/codex/pull/30235

2. **#34234 Avoid redundant TUI subagent metadata requests**
   Optimizes TUI startup by skipping unnecessary backfills for fresh and forked threads, while preserving agent navigation population during thread resume.
   https://github.com/openai/codex/pull/34234

3. **#34232 Remeasure dynamic cells in the transcript overlay**
   Fixes clipping issues in the TUI by ensuring dynamic cells (e.g., refreshed status output) are re-measured when content grows after insertion.
   https://github.com/openai/codex/pull/34232

4. **#34229 Persist names for paginated threads**
   Adds a nullable `name` column to persisted thread metadata, allowing paginated threads to maintain distinct user-facing names separate from derived titles.
   https://github.com/openai/codex/pull/34229

5. **#34226 Backfill completion items only for the active exec turn**
   Prevents unnecessary `thread/read` requests in multi-agent sessions by filtering child `turn/completed` notifications that do not belong to the primary turn.
   https://github.com/openai/codex/pull/34226

6. **#34224 Avoid cloning file changes in TUI diff rendering**
   Reduces memory overhead by consuming and sorting `DiffSummary` entries directly, borrowing paths and file change values instead of cloning them for line-based summaries.
   https://github.com/openai/codex/pull/34224

7. **#34223 Cache finalized Markdown history rendering**
   Caches rendered lines for finalized agent messages and plans to avoid repeated measurement and display during transcript history rendering.
   https://github.com/openai/codex/pull/34223

8. **#34218 Track TUI command completion separately from output**
   Corrects a race condition where streaming command output was incorrectly treated as completion, causing premature deactivation of active turns.
   https://github.com/openai/codex/pull/34218

9. **#34217 Keep incremental rendering with visualization context**
   Preserves the stable rendered prefix when inline visualization context is present, avoiding full response rerenders for every streamed Markdown update.
   https://github.com/openai/codex/pull/34217

10. **#34198 Start side conversations without replaying inherited turns**
    Forks side conversations with `exclude_turns` so their initial UI starts empty, preventing parent thread history from cluttering new side discussions.
    https://github.com/openai/codex/pull/34198

## 5. Feature Request Trends
*Emerging directions based on community feedback.*

*   **Granular Usage & Credit Controls:** Users are requesting toggles to prevent automatic consumption of purchased credits when included usage limits are exhausted, seeking better cost predictability.
*   **Privacy & Data Retention:** There is growing demand for explicit deletion controls for archived cloud sessions, addressing concerns about sensitive project context lingering in the system.
*   **Voice Input Parity:** The desire for push-to-talk functionality in the IDE extension remains strong, with users wanting voice interaction capabilities consistent

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-07-20

## 1. Today's Highlights
Gemini CLI shipped nightly build **v0.52.0-nightly.20260720**, continuing rapid iteration on agent reliability and core infrastructure. The community flagged several P1 agent issues, including generalist hangs, shell command stalls, and subagent status reporting that masks turn-limit interruptions. On the contributor front, critical fixes landed for headless OAuth authentication and VS Code extension activation, while broad dependency updates pushed TypeScript, the GenAI SDK, and test tooling forward.

## 2. Releases
**v0.52.0-nightly.20260720.gacae7124b**
Automated nightly release.  
[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260719.gacae7124b...v0.52.0-nightly.20260720.gacae7124b)

## 3. Hot Issues
1. **[#22323] Subagent recovery after MAX_TURNS reported as GOAL success**  
   A `codebase_investigator` subagent reports success despite hitting turn limits, hiding interruptions. This masks real failures in multi-repo workflows.  
   *Reaction:* 11 comments, 2 👍 | [Link](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **[#21409] Generalist agent hangs**  
   Simple tasks like folder creation hang indefinitely when the generalist agent is invoked. Disabling sub-agents resolves the issue.  
   *Reaction:* 7 comments, 8 👍 | [Link](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **[#25166] Shell command execution gets stuck with "Waiting input"**  
   After simple CLI commands complete, the shell remains active and awaits non-existent user input, freezing the session.  
   *Reaction:* 4 comments, 3 👍 | [Link](https://github.com/google-gemini/gemini-cli/issues/25166)

4. **[#21968] Gemini does not use skills and sub-agents enough**  
   Custom skills and sub-agents are ignored unless explicitly instructed, reducing the utility of configured agent ecosystems.  
   *Reaction:* 6 comments | [Link](https://github.com/google-gemini/gemini-cli/issues/21968)

5. **[#26522] Stop Auto Memory from retrying low-signal sessions indefinitely**  
   Auto Memory leaves low-signal sessions unprocessed, causing them to be repeatedly surfaced and retried in the background.  
   *Reaction:* 5 comments | [Link](https://github.com/google-gemini/gemini-cli/issues/26522)

6. **[#26525] Add deterministic redaction and reduce Auto Memory logging**  
   Security concern: transcript content reaches model context before redaction occurs, and logs may expose sensitive skill data.  
   *Reaction:* 3 comments | [Link](https://github.com/google-gemini/gemini-cli/issues/26525)

7. **[#24246] Gemini CLI encounters 400 error with > 128 tools**  
   Agents fail with HTTP 400 when tool counts exceed platform limits, blocking power users with extensive MCP/skill setups.  
   *Reaction:* 3 comments | [Link](https://github.com/google-gemini/gemini-cli/issues/24246)

8. **[#22267] Browser Agent ignores settings.json overrides**  
   Global or project-level `settings.json` overrides (e.g., `maxTurns`) are silently ignored by the Browser Agent despite `AgentRegistry` merging them.  
   *Reaction:* 3 comments | [Link](https://github.com/google-gemini/gemini-cli/issues/22267)

9. **[#22745] Assess the impact of AST-aware file reads, search, and mapping**  
   Investigation into AST-aware tools to reduce token noise and improve method-bound precision for codebase agents.  
   *Reaction:* 7 comments, 1 👍 | [Link](https://github.com/google-gemini/gemini-cli/issues/22745)

10. **[#21983] Browser subagent fails in Wayland**  
    The browser agent terminates with a GOAL status on Wayland displays

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-07-20

## 1. Today's Highlights
The Copilot CLI community is reporting a cluster of reliability issues centered on Plan Mode and sub-agent execution, including a regression blocking shell commands in plan mode (#4188), stale write gates on child tasks (#4173), and `--add-dir` triggering 400 errors during Claude sub-agent dispatch (#4185). Significant context-management concerns have also surfaced, particularly auto-compaction failing to prevent 5 MB CAPI request body limits (#4183), while long-standing usability gaps persist around silent Voice ASR failures (#4024) and interactive TUI input being ignored in automated PTY environments (#4180).

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues
1. **Voice mode: all bundled ASR models fail silently**
   Users report that `/voice` captures audio successfully but returns empty transcriptions across all bundled Nemotron models due to a MultiModalProcessor routing bug. This breaks a core multimodal workflow without clear error feedback.
   *Community Reaction:* 13 comments; ongoing debugging by author.
   [View Issue](https://github.com/github/copilot-cli/issues/4024)

2. **Allow users to cancel or remove enqueued messages before they are executed**
   A highly requested feature allowing users to manage the input queue while the agent is busy or compacting. Currently, queued slash commands/messages process automatically upon agent completion with no cancellation path.
   *Community Reaction:* 24 👍, 8 comments; strong community support for queue control.
   [View Issue](https://github.com/github/copilot-cli/issues/1857)

3. **Interactive TUI ignores all keyboard input written to its PTY**
   When Copilot CLI runs inside programmatically-driven PTYs (orchestrators, tmux, expect), the TUI ignores all keystrokes except Ctrl+C. This severely impacts automation and orchestration tooling.
   *Community Reaction:* 0 comments; flagged as a critical integration blocker.
   [View Issue](https://github.com/github/copilot-cli/issues/4180)

4. **`--add-dir` causes Claude sub-agent dispatch to fail**
   Launching Copilot CLI with `--add-dir` flags causes every Anthropic/Claude sub-agent dispatch to fail instantly with a 400 error regarding `cache_control` block limits.
   *Community Reaction:* 0 comments; reported today, likely affects context-heavy workflows.
   [View Issue](https://github.com/github/copilot-cli/issues/4185)

5. **Regression on plan-mode**
   The latest version reportedly blocks shell commands within Plan Mode, a regression from previous behavior where commands like `gh` were used to enrich plans.
   *Community Reaction:* 0 comments; reported today, impacts planning workflows.
   [View Issue](https://github.com/github/copilot-cli/issues/4188)

6. **Auto-compaction does not prevent CAPI 5 MB failure**
   Long, tool-heavy sessions can exceed the independent 5 MB serialized CAPI Responses body limit even when within token capacity. Auto-compaction currently fails to address this body-size constraint.
   *Community Reaction:* 0 comments; reported today, affects long-running sessions.
   [View Issue](https://github.com/github/copilot-cli/issues/4183)

7. **Exiting plan mode not reliable with new GPT-5.6 models**
   Interactions with GPT-5.6 often end abruptly after saving the plan, failing to prompt the user for implementation tasks as expected.
   *Community Reaction:* 1 comment; indicates model-specific reliability issues.
   [View Issue](https://github.com/github/copilot-cli/issues/4172)

8. **Child writing tasks can retain plan-mode write gates**
   Background writing tasks launched after an approved plan-mode exit may retain stale write gates, falsely blocking tools and stalling fleet execution.
   *Community Reaction:* 0 comments; reported today, impacts multi-step agent execution.
   [View Issue](https://github.com/github/copilot-cli/issues/4173)

9. **Windows desktop app takes ~1-2 minutes to become usable at startup**
   On Windows 11, the desktop app spawns multiple CLI processes that leave the app unresponsive for up to two minutes.
   *Community Reaction:* 0 comments; reported today, highlights performance friction on desktop.
   [View Issue](https://github.com/github/copilot-cli/issues/4176)

10. **Add skill-level spans to OpenTelemetry traces**
    Tool calls invoked by skills are currently emitted as flat children of the root span without skill attribution. Users want intermediate spans to link tool calls to specific skills.
    *Community Reaction:* 1 comment; supports observability and debugging needs.
    [View Issue](https://github.com/github/copilot-cli/issues/3725)

## 4. Key PR Progress
*Note: The provided data reflects only one PR activity update for this 24-hour window. No other PRs were reported.*

1. **Create ownership.yaml**
   Repository governance metadata file addition to define ownership structure.
   *Status:* Closed
   *Author:* johanrosenkilde
   [View PR](https://github.com/github/copilot-cli/pull/1)

## 5. Feature Request Trends
*   **Observability & Telemetry:** Strong demand for deeper tracing granularity, including skill-level spans in OpenTelemetry (#3725), token/context usage exposure in the ACP server protocol (#4

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-07-20

## 1. Today's Highlights
No new releases were published in the last 24 hours, but development activity remains concentrated on session integrity, streaming extensibility, and performance hardening. Several PRs directly address long-standing `/undo`, `/fork`, and session-resume bugs, while a new `MessageDisplay` hook opens the door for live-reply integrations like TTS and incremental UIs. Community attention continues to track toward cross-device session continuity and clearer permission-rule semantics.

## 2. Releases
No new releases in the reporting window.

## 3. Hot Issues
*Note: The 24-hour update window contains 4 issues. All are covered below.*

- **[Feature Request] Remote Control – Continue local sessions from any device** (#1282)  
  [Link](https://github.com/MoonshotAI/kimi-cli/issues/1282)  
  Enables users to hand off an active local CLI session to a phone, tablet, or browser. Matters because it addresses workflow fragmentation for developers who step away from their primary machine. Community reaction is strong: 13 👍 and 5 comments, marking it as one of the highest-traction enhancement requests.

- **Permission rules: deny overrides allow regardless of order** (#2508)  
  [Link](https://github.com/MoonshotAI/kimi-cli/issues/2508)  
  Reports behavior contradicting the documented "first matching rule takes effect" contract on v0.27.0 with API-key auth. Matters because permission evaluation is foundational to safe agent execution. Currently untriaged with minimal community engagement.

- **`/undo` and `/fork` truncate `context.jsonl` at the wrong turn in compacted/steered sessions** (#2517)  
  [Link](https://github.com/MoonshotAI/kimi-cli/issues/2517)  
  Session-history manipulation corrupts the conversation log, breaking undo/fork reliability in advanced workflows. Provider-independent and rooted in local session-file handling, making it a core stability concern.

- **feat(hooks): mid-turn streaming hook (`MessageDisplay`) for live reply consumers** (#2511)  
  [Link](https://github.com/MoonshotAI/kimi-cli/issues/2511)  
  Current hooks only surface `Stop` at turn end, blocking real-time TTS, progress UIs, and incremental logging. Matters for ecosystem builders integrating Kimi Code CLI into external applications.

## 4. Key PR Progress
*Note: The 24-hour update window contains 8 PRs. All are covered below.*

- **#2520** `fix(session): align fork/undo context truncation to wire turns`  
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/2520)  
  Direct resolution for #2517, plus regression coverage for #1974 and likely root-cause fix for #2049. Aligns slash-turn positioning with actual wire turns to prevent history drift after forks/undos.

- **#2515** `perf(kosong): buffer stream merges and avoid deep-copying every delta`  
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/2515)  
  Eliminates quadratic `str +=` merging and removes expensive `model_copy(deep=True)` callbacks during long LLM responses. Directly improves streaming latency and memory footprint.

- **#2516** `Create kimi-cli`  
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/2516)  
  Closed. Appears to be an incomplete/spam submission lacking maintainer review or substantive implementation.

- **#2518** `fix(web): persist uploads .sent marker so restarts do not re-send files`  
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/2518)  
  Resolves #2413. Prevents `kimi web` from re-uploading previously sent images/files after server restarts, keeping resumed sessions clean.

- **#2519** `fix(app): refresh stale frozen system prompt on session resume`  
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/2519)  
  Resolves #2420. Ensures newly installed skills and `AGENTS.md` changes apply to resumed sessions instead of being locked behind the `_system_prompt` record frozen at session creation.

- **#2513** `fix(kosong): recursively decode double-encoded tool-call arguments`  
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/2513)  
  Handles Moonshot API responses where nested arrays/objects are JSON-stringified. Adds shared `decode_tool_arguments` logic to prevent Pydantic validation failures on structured tool calls.

- **#2514** `fix(skill): ignore stray markdown in plugins container during skill discovery`  
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/2514)  
  Corrects plugin discovery to require `plugin.json` + tool scripts, preventing accidental `.md` files inside plugin directories from being misclassified as skills.

- **#2512** `feat(hooks): add MessageDisplay hook for mid-turn streaming`  
  [Link](https://github.com/MoonshotAI/kimi-cli/pull/2512)  
  Closes #2511. Introduces a fire-and-forget `MessageDisplay` event that fires incrementally as the assistant reply streams, enabling live external consumers before the final `Stop` event.

## 5. Feature Request Trends
- **Cross-device session continuity:** Remote control and persistent session handoff remain the most upvoted enhancement direction, signaling demand for mobile/tablet parity with the local CLI.
- **Real-time streaming integrations:** The `MessageDisplay` hook request highlights growing ecosystem interest in sub-turn visibility for TTS, analytics, and custom UIs.
- **Transparent rule/permission semantics:** Users expect documented first-match behavior to hold consistently, especially when mixing allow/deny scopes with API-key authentication.

## 6. Developer Pain Points
- **Session resume & history corruption:** Repeated bugs around `/undo`, `/fork`, frozen system prompts, and re-uploaded files indicate that session-state management is still fragile in compacted, steered, or restarted workflows.
- **API response parsing edge cases:** Double-encoded tool-call arguments and permission-rule ordering contradictions create silent failures or validation errors that are difficult to debug without provider-level transparency.
- **Streaming performance overhead:** Quadratic string concatenation and unnecessary deep copies during high-volume token streams degrade responsiveness on long sessions.
- **Limited extensibility for live consumers:** The absence of mid-turn hook events forces third-party tools to wait for turn completion, restricting real-time integration patterns.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-07-20

## 1. Today's Highlights
OpenCode's development velocity is concentrated on provider compatibility, v2 infrastructure hardening, and internal architectural cleanup. The community is heavily engaged around local model auto-discovery, TUI stability across non-x86 and web-terminal environments, and long-running session storage management. Several contributor PRs landed this week addressing NVIDIA NIM, Kimi adaptive thinking, and SQLite resilience, signaling maturation beyond the initial CLI/TUI surface.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
1. **[Auto-discover models from OpenAI-compatible endpoints](https://github.com/anomalyco/opencode/issues/6231)** (👍 182, 25 comments)  
   Users currently must manually enumerate models in `opencode.json` for LM Studio, Ollama, and llama.cpp. This issue matters because local model inventories shift frequently, and manual config is a major friction point for self-hosted workflows. Community support is overwhelming.

2. **[Plan Mode + Question tool auto-switch to Build mode](https://github.com/anomalyco/opencode/issues/7801)** (👍 26, 8 comments)  
   When a planning question is confirmed, users expect automatic transition to execution. This highlights a gap in the Plan→Build handoff and has drawn parallel reports about token waste on redundant confirmations.

3. **[TUI has too much padding everywhere](https://github.com/anomalyco/opencode/issues/9955)** (👍 17, 8 comments)  
   Desktop/laptop users report poor vertical density compared to competing CLI agents. The complaint centers on consolidatable top/bottom bars and oversized chat scroll areas.

4. **[Windows ARM64 native: OpenTUI fails to initialize with bun:ffi dlopen TinyCC error](https://github.com/anomalyco/opencode/issues/19130)** (👍 8, 11 comments)  
   Native ARM64 binaries work for headless commands but crash the TUI due to FFI loader constraints. Important for Windows on ARM adoption and cross-platform parity.

5. **[Unbounded growth of the `event` table: opencode.db reaches 13GB+](https://github.com/anomalyco/opencode/issues/33356)**  
   Long-lived instances lack pruning, compaction, or retention policies for the SQLite event-sourcing table. Production operators flag this as an operational risk before volume exhaustion hits.

6. **[ResourceExhausted: Worker local total request limit reached](https://github.com/anomalyco/opencode/issues/35265)**  
   Rate-limit and worker-capacity errors recur despite existing mitigation attempts. Indicates the current throttling model needs clearer backoff semantics or configurable per-project limits.

7. **[V2 managed-service restart causes reconnect herd and resource spikes](https://github.com/anomalyco/opencode/issues/36285)**  
   Automatic updates or explicit restarts trigger mass reconnections, concurrent cold boots, and delayed SSE readiness. Critical for v2 reliability in always-on setups.

8. **[Agent sends duplicate message](https://github.com/anomalyco/opencode/issues/20699)**  
   Simple prompts can produce two assistant responses: one hidden with the actual text and one

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-07-20

## 1. Today's Highlights
Qwen Code advanced with **v0.20.0** and **v0.20.1-preview.7215**, bringing autofix reliability improvements and bounded daemon log rotation. The community is actively addressing session stability in multi-agent workflows, particularly around subagent model mutation and background agent resource contention. A significant development is the push for native **`web_search`** functionality via a new opt-in PR backed by DashScope, addressing one of the most requested feature gaps.

## 2. Releases
*   **[v0.20.1-preview.7215](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1-preview.7215)**: Focuses on autofix reliability with label-driven takeover/release logic and resolves a forced-dispatch green no-op issue.
*   **[v0.20.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0)**: Introduces core improvements including bounded daemon log rotation ([#6969](https://github.com/QwenLM/qwen-code/pull/6969)) to manage long-running daemon logs efficiently.

## 3. Hot Issues
*   **[#7156](https://github.com/QwenLM/qwen-code/issues/7156) [P1/Bug] Subagent mutates main session model**
    *   *Why it matters:* Background subagents silently switch the main session's model, causing fatal 400 errors and context overflow recurrence. This is a critical session-state integrity issue affecting multi-agent users.
    *   *Reaction:* High engagement (11 comments) indicates strong community impact; labeled as a P1 bug.
*   **[#4748](https://github.com/QwenLM/qwen-code/issues/4748) [Perf] Optimize daemon cold start and fast-path latency**
    *   *Why it matters:* Tracks the resolution of the initial 2.5s cold-start gap between daemon boot and CLI initialization.
    *   *Reaction:* Closed after significant optimization work, reflecting community interest in daemon performance.
*   **[#7147](https://github.com/QwenLM/qwen-code/issues/7147) [Bug] MCP server never successfully gets tool and resource listing**
    *   *Why it matters:* Users integrating external MCP servers (e.g., Fastmail) face timeout failures during tool discovery, breaking interoperability.
    *   *Reaction:* Active discussion on whether this is an authentication or listing protocol issue.
*   **[#4801](https://github.com/QwenLM/qwen-code/issues/4801) [Feature] Add a dedicated `web_search` tool**
    *   *Why it matters:* Qwen Code was noted as lacking a native web search tool compared to peers. This issue laid the groundwork for the current PR.
    *   *Reaction:* Closed, with momentum shifting to PR [#7215](https://github.com/QwenLM/qwen-code/pull/7215).
*   **[#6569](https://github.com/QwenLM/qwen-code/issues/6569) [Feature] Improve subagent observability**
    *   *Why it matters:* Subagent execution is currently too condensed; users need real-time visibility and manual intervention capabilities.
    *   *Reaction:* Marked as a roadmap item for subagents/tools.
*   **[#6237](https://github.com/QwenLM/qwen-code/issues/6237) [Bug] Plan Mode Content Leakage**
    *   *Why it matters:* After `exit_plan_mode`, plan content leaks into subsequent assistant responses, confusing the conversation flow.
*   **[#6996](https://github.com/QwenLM/qwen-code/issues/6996) [Bug] Custom OpenAI provider generic 'Connection error'**
    *   *Why it matters:* Real underlying errors are discarded before logging, making debugging custom providers nearly impossible.
    *   *Reaction:* Closed, likely resolved by improved error propagation.
*   **[#7139](https://github.com/QwenLM/qwen-code/issues/7139) [Bug] Windows `qwen serve` Docker sandbox invalid workspace cwd**
    *   *Why it matters:* Shell tool calls fail on Windows due to invalid working directory paths passed to the Docker sandbox.
*   **[#7238](https://github.com/QwenLM/qwen-code/issues/7238) [Bug] RestSseTransport leaks SSE subscribers**
    *   *Why it matters:* Normal iterator exits without a signal leak HTTP connections, eventually rendering the daemon unusable (HTTP 429).
*   **[#7181](https://github.com/QwenLM/qwen-code/issues/7181) [Bug] `/goal` loop blocks user input**
    *   *Why it matters:* Active goal loops queue all user input, preventing interruption or command clearing until natural completion or Ctrl+C.
    *   *Reaction:* Closed, indicating a fix for this blocking UX behavior.

## 4. Key PR Progress
*   **[#7215](https://github.com/QwenLM/qwen-code/pull/7215) feat(core): Add opt-in built-in `web_search`**
    *   Implements a native web search tool backed by DashScope Responses API. It is opt-in and requires no extra keys or MCP setup, directly addressing a top community request.
*   **[#7258](https://github.com/QwenLM/qwen-code/pull/7258) fix(cli): Yield to single-slot background agents**
    *   Fixes resource contention where the main agent monopolizes the single background slot. The main agent now waits for subagent completion notifications.
*   **[#7262](https://github.com/QwenLM/qwen-code/pull/7262) feat(daemon): Restore worktree isolation on session load/resume**

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-07-20

## 1. Today's Highlights
The project focused heavily on security hardening and cross-platform CLI reliability, closing out environment-level tool sandboxing for sub-agents while advancing MCP hot-reload, Full Access tool visibility, and Windows shell invocation safety. Multiple PRs shipped to mature the web/search stack, introducing provider-native search backends, bounded failover chains, citation evidence, and a guarded fetch pipeline. On the user-facing side, the team addressed a v0.9.1 theme/grammar shift to Blue Stage, though community reports highlight lingering performance regressions in slash-command latency and sub-agent orchestration timeouts.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*Reporting window contains 6 filed issues; all are covered below.*

- **#4042 [CLOSED] Environment-level tool sandboxing for sub-agents**  
  [Link](https://github.com/Hmbown/DeepSeek-TUI/issues/4042)  
  Tracks runtime enforcement of `tool_restrictions` across sessions, sub-agents, Fleet workers, and MCP servers. Closed after confirming `--disallowed-tools` already functions correctly across execution contexts. High engagement (16 comments) signals strong community demand for granular sandbox governance.

- **#1425 [OPEN] Session freeze/deadlock after large-text sub-agent processing**  
  [Link](https://github.com/Hmbown/DeepSeek-TUI/issues/1425)  
  Users running 10 parallel sub-agents on multi-million-character corpora hit `agent_wait` timeouts that appear to hang the session. Community clarification notes the session was interrupted rather than permanently frozen, but the UX remains risky for long-running batch workloads.

- **#4568 [OPEN] Slash commands (`/xxx`) respond sluggishly in latest build**  
  [Link](https://github.com/Hmbown/DeepSeek-TUI/issues/4568)  
  Windows users report a noticeable latency regression compared to the prior release when invoking slash directives. Indicates a potential input-handling or rendering bottleneck introduced in the recent UI refresh.

- **#4564 [OPEN] `codewhale exec --auto` consumes `--model`/`--toolsets` as a single arg on Windows**  
  [Link](https://github.com/Hmbown/DeepSeek-TUI/issues/4564)  
  A CLI parsing bug in npm-global Windows installs concatenates pre

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*