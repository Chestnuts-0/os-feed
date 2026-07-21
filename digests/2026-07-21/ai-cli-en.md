# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-21 01:44 UTC | Tools covered: 9

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



# AI CLI Tools Ecosystem Report — 2026-07-21

## 1. Ecosystem Overview
The AI CLI landscape is transitioning from experimental utility to production-grade infrastructure, though significant friction remains around cost predictability, session state reliability, and cross-platform stability. Enterprise readiness has become the primary battleground, with major vendors shipping granular permission profiles, sandboxing controls, and multi-account management. Meanwhile, open-source and regional competitors are differentiating through architectural flexibility, autonomous agent safety, and self-hosting capabilities. Across all tools, community feedback indicates that users prioritize governance and cost transparency over raw model capability.

## 2. Activity Comparison

| Tool | Release Status | Hot Issues | Active/Merged PRs | Key Activity Focus |
| :--- | :--- | :---: | :---: | :--- |
| **Claude Code** | ✅ v2.1.216 | 9 | ~6 | Enterprise profile switching, filesystem isolation, quadratic latency fix. |
| **OpenAI Codex** | ✅ Rust `0.145.0-alpha.25` | 10 | 10 | Permission profiles, Windows sandboxing, proxy resolution, cost anomaly response. |
| **Gemini CLI** | ✅ Nightly `v0.52.0` | 6+ | N/A | A2A server RCE hardening, subagent recovery, automated caretaker triage. |
| **Kimi Code CLI** | ❌ None | 6 | 3 | Session migration, Goal mode loop fixes, `StrReplaceFile` accuracy. |
| **OpenCode** | ✅ v1.18.4 | 10 | 6 | Multi-provider support, Bun install friction, Plan/Build regression. |
| **Qwen Code** | ✅ Nightly `v0.20.0` | 10 | 4+ | Autofix pipeline, `qwen serve` architecture, TokenPlan compatibility. |
| **DeepSeek TUI** | ❌ None | 10 | Multiple | v0.9.1 stabilization, subagent truthfulness, Windows runtime hygiene. |
| **GitHub Copilot CLI** | ⚠️ Data Unavailable | N/A | N/A | Summary generation failed. |
| **Pi** | ⚠️ Data Unavailable | N/A | N/A | Summary generation failed. |

## 3. Shared Feature Directions

*   **Granular Permissions & Sandboxing:** Universal demand for zero-trust execution environments.
    *   *Tools:* Claude (`sandbox.filesystem.disabled`), OpenAI Codex (managed permission profiles, Windows sandboxing), DeepSeek (environment-level tool sandboxing), Qwen (stripping daemon secrets from child envs).
*   **Session State & Context Reliability:** Users report frequent regressions in history persistence, task completion tracking, and resume behavior.
    *   *Tools:* Kimi (context compaction reopens deleted tasks), OpenCode (sessions orphaned on directory rename), Claude (JSONL deletion despite cleanup settings), OpenAI Codex (invisible turns after restart).
*   **Autonomous Agent Governance:** Shift from raw automation to constrained, verifiable agent behavior.
    *   *Tools:* DeepSeek (truthful child runtime, unified permission contract), Qwen (label-driven autofix takeover/release), Gemini (subagent termination states).
*   **Cross-Platform Consistency:** Windows remains a persistent source of regressions across the ecosystem.
    *   *Tools:* OpenAI Codex (freezes/stutters), Kimi (migration/TUI input failures), DeepSeek (hook process leaks, scrolling lag), OpenCode (Desktop crash on WSL restart).

## 4. Differentiation Analysis

*   **Cloud Giants (Claude, Codex, Gemini):** Focus on enterprise compliance, billing integration, and polished desktop experiences. Claude leads in multi-account workflow management; OpenAI Codex faces acute backlash over cost anomalies but advances robustly on permission architecture; Gemini prioritizes security hardening against RCE in A2A servers.
*   **Open-Source/Community-Driven (OpenCode, Qwen, DeepSeek):** Emphasize architectural extensibility, local execution, and provider neutrality. OpenCode supports the broadest range of third-party providers; Qwen is aggressively building an automated SSR code-generation and autofix pipeline; DeepSeek focuses on deterministic subagent lifecycles and constitutional safety.
*   **Regional/Provider-Specific (Kimi):** Targets specific model ecosystems (Kimi-k2.6) and autonomous Goal-mode workflows, while struggling with foundational state management and Windows legacy migration.

## 5. Community Momentum & Maturity

*   **Highest Engagement:** **OpenAI Codex** and **Claude Code** dominate attention. Codex has the highest single-issue upvote count (Linux Desktop App at 801 👍), while Claude Code sees the most intense debate on enterprise needs (Multi-account switching at 668 👍).
*   **Rapid Iteration:** **Qwen Code** and **OpenCode** maintain high velocity with nightly builds and frequent releases, actively addressing provider compatibility and architectural shifts. **Gemini CLI** is also iterating quickly via nightlies focused on security and agent reliability.
*   **Stabilization Phase:** **DeepSeek TUI** and **Kimi Code CLI** are currently prioritizing bug closure and foundational fixes over new feature shipping, indicating a maturation push toward stable releases.

## 6. Trend Signals

*   **Cost Volatility as Adoption Barrier:** OpenAI's reported 10–20× cost spike on Plus plans highlights that unpredictable billing can rapidly erode user trust. Developers should monitor pricing stability before committing to paid tiers for heavy CLI usage.
*   **Security-First Defaults:** Gemini's immediate response to A2A RCE vulnerabilities, combined with widespread requests for permission profiles across other tools, signals that enterprise procurement will increasingly require zero-trust execution by default.
*   **Governed Autonomy:** The industry is moving beyond simple "ask and execute" patterns. Tools like DeepSeek and Qwen are investing heavily in subagent truthfulness, review gates, and label-driven takeover mechanisms to prevent autonomous drift.
*   **Local/Self-Hosted Demand:** Qwen's `qwen serve` refactoring and OpenCode's proxy support requests indicate growing interest in deploying AI CLIs in restricted, on-prem, or air-gapped environments.
*   **Testing Gaps on Windows:** Recurring Windows-specific failures (scrolling, hooks, migrations, freezes) across multiple independent tools suggest a systemic lack of robust cross-platform CI/CD for TUI and desktop layers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
**Data Source:** `anthropics/skills` (GitHub)  
**As of:** 2026-07-21

## 1. Top Skills Ranking
*Ranked by community attention, cross-referenced with issue activity and repository sort order. Note: PR comment counts are not populated in the source feed; ranking reflects observed discussion volume and issue correlation.*

1. **[PR #1298] Fix Skill-Creator Evaluation Loop & Windows Compatibility**  
   **Functionality:** Resolves a critical bug where `run_eval.py` reports 0% recall for every skill description, breaking the description-optimization loop. Also fixes Windows stream reading, subprocess crashes, and parallel worker issues.  
   **Discussion Highlights:** Heavily cross-referenced with Issue #556 (7 👍) and multiple Windows-compatibility PRs (#1099, #1050, #1061). Community consensus indicates the current eval pipeline is unusable without these fixes.  
   **Status:** Open  
   🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298) | [Issue #556](https://github.com/anthropics/skills/issues/556)

2. **[PR #1367] Self-Audit: Mechanical Verification + Reasoning Quality Gate**  
   **Functionality:** A meta-skill that audits AI output before delivery. Step 0 verifies claimed output files mechanically; subsequent steps perform four-dimension reasoning audits prioritized by damage severity. Universal across tech stacks.  
   **Discussion Highlights:** Aligns with Issue #1385 (Reasoning Quality Gate Pipeline) and growing demand for pre-delivery safety checks.  
   **Status:** Open  
   🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)

3. **[PR #723] Testing Patterns Skill**  
   **Functionality:** Comprehensive testing guidance covering the Testing Trophy model, AAA unit testing patterns, pure functions, edge cases, and React component testing with Testing Library.  
   **Discussion Highlights:** Addresses a broad developer need for consistent testing standards within Claude-assisted workflows.  
   **Status:** Open  
   🔗 [PR #723](https://github.com/anthropics/skills/pull/72

---



# Claude Code Community Digest — 2026-07-21

## 1. Today's Highlights
Anthropic shipped **v2.1.216**, introducing a new `sandbox.filesystem.disabled` configuration for teams that need filesystem isolation bypass while retaining network egress controls, alongside a critical fix for quadratic message-normalization latency in long-running sessions. Community attention remains heavily concentrated on enterprise-readiness gaps: multi-account profile switching, unpredictable billing/model routing, and skill-level workflow regressions dominate issue activity this week.

---

## 2. Releases
### v2.1.216
- **New setting:** `sandbox.filesystem.disabled` allows skipping filesystem isolation while preserving network egress enforcement, useful for legacy toolchains that require unrestricted local writes.
- **Performance fix:** Resolved quadratic growth in message normalization cost across turn count, eliminating multi-second stalls and slow session resumes in long conversations.
- **Other fixes:** Changelog entry was partially truncated in the source feed (`Fixed au…`). Full patch notes should be verified against the official release page.

🔗 [Release](https://github.com/anthropics/claude-code/releases)

---

## 3. Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | Multi-account profile switching in Claude Desktop | Core enterprise/agency need: manage personal + work Anthropic accounts without reinstalling or CLI flags. | 🔥 148 comments · 668 👍 — highest-engagement issue in the repo. |
| [#28125](https://github.com/anthropics/claude-code/issues/28125) | Cowork cannot add private GitHub marketplace plugins | Blocks internal tooling distribution and vendor lock-in for teams using private plugin registries. | 36 comments · 30 👍 |
| [#23626](https://github.com/anthropics/claude-code/issues/23626) | Diff comparison against non-main branches | Limits IDE review workflows; developers routinely compare feature branches against `develop` or hotfixes. | 33 comments · 95 👍 |
| [#62272](https://github.com/anthropics/claude-code/issues/62272) | Chat JSONLs deleted despite `cleanupPeriodDays` | Data-loss bug triggered by updates/restarts; community authored a Time Machine recovery script. | 18 comments · 3 👍 |
| [#49790](https://github.com/anthropics/claude-code/issues/49790) | SSH remote sessions should survive disconnect | Remote work resilience: long-running agent jobs terminate on lid close/network drop with no reconnect/resume path. | 10 comments · 29 👍 |
| [#60848](https://github.com/anthropics/claude-code/issues/60848) | Ambiguous “Don’t ask me again” in session resume prompt | Users accidentally opt out of full-session resume prompts, losing context in large token-heavy workflows. | 8 comments · 13 👍 |
| [#79341](https://github.com/anthropics/claude-code/issues/79341) | Fable 5 forces usage credits on Max 20x plan | Model routing/billing mismatch: weekly allowance ignored mid-session, forcing unexpected credit consumption. | 5 comments · 8 👍 |
| [#78273](https://github.com/anthropics/claude-code/issues/78273) | Silent file overwrite without confirmation | Safety regression: agent overwrote user-authored research files without approval, highlighting trust/perms gap. | 3 comments |
| [#79023](https://github.com/anthropics/claude-code/issues/79023) | `/code-review` skill broken when invoked by custom skills | Regression in v2.1.215: `disable-model-invocation` flag prevents programmatic skill chaining, breaking CI/PR workflows. | 2 comments · 9 👍 |
| [#79615](https://github.com/anthropics/claude-code/issues/79615) | Kill signals fail to stop running agents | `/stop`, `/clear`, `Ctrl+C` do not terminate active jobs, causing uncontrolled API token burn. | 1 comment |

---

## 4. Key PR Progress
*Note: The 24-hour reporting window contained 6 active PRs. All are summarized below.*

- [#74722](https://github.com/anthropics/claude-code/pull/74722) **feat(commit-commands): Conventional Branch naming in `/commit-push-pr`**  
  Adds an optional `conventional` argument that names branches per the Conventional Branch 1.0.0 spec (`<type>/<description>`), inferring type from the diff. Improves GitOps compliance for automated commit flows.

- [#79387](https://github.com/anthropics/claude-code/pull/79387) **fix: better error handling in `

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-07-21

## 1. Today's Highlights
The Codex community is reporting a critical rate-limit cost anomaly where Plus plan usage on `gpt-5.5` consumes credits ~10–20× faster than previous baselines, draining budgets in minutes. Simultaneously, demand for a Linux desktop client remains the highest-priority feature request, while the Rust CLI advances to `0.145.0-alpha.25` with recent merges improving managed permission profiles and Windows sandbox execution.

## 2. Releases
*   **Rust CLI `0.145.0-alpha.25`**: A new alpha release was published within the last 24 hours. Developers tracking the bleeding edge should review this build for updates to the underlying Rust toolchain.
    *   [View Release](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.25)

## 3. Hot Issues
1.  **[Rate-limit cost spike on Plus/gpt-5.5](https://github.com/openai/codex/issues/28879)** — Users report token-to-cost ratio jumping 10–20× since June 16, depleting the 5-hour budget in 2–3 prompts. With 358 upvotes and 208 comments, this is the most urgent community concern.
2.  **[Linux Desktop App Request](https://github.com/openai/codex/issues/11023)** — Continues to be the top feature request with 801 upvotes. Developers cite power consumption and workflow needs on Linux desktops.
3.  **[Windows 11 App Freezes/Stutters](https://github.com/openai/codex/issues/20214)** — Frequent UI freezes on Windows 11 Pro despite adequate hardware. Highlights ongoing stability gaps on the Windows platform compared to macOS.
4.  **[Background Process Polling Wastes Tokens](https://github.com/openai/codex/issues/13733)** — Polling loops during background tasks (e.g., `cargo build`) trigger full API round-trips with complete history, burning credits proportional to history size × poll count.
5.  **[Projects Sort By Last Updated Bug](https://github.com/openai/codex/issues/31836)** — The "Last updated" sort in the Projects view fails to reorder projects, only sorting tasks within groups. A clear regression in the desktop UX.
6.  **[Desktop Stuck in Thinking / Stop Fails](https://github.com/openai/codex/issues/24287)** — Sessions become invisible after restart when the UI hangs in "Thinking" state and stop commands fail. Affects session reliability.
7.  **[Automations Ignore Timezone for RRULE](https://github.com/openai/codex/issues/26633)** — Scheduled automations compute next execution times as UTC rather than local wall-clock time, breaking recurring task expectations.
8.  **[Unsupported Parameter: reasoning.summary](https://github.com/openai/codex/issues/31969)** — Users configuring `gpt-5.3-codex-spark` encounter errors when passing `reasoning.summary`, indicating a config/model mismatch in the app.
9.  **[Headless Remote Linux for Mobile](https://github.com/openai/codex/issues/23200)** — Developers want Codex mobile to act as a control layer for always-on SSH Linux servers without requiring the desktop app to remain online.
10. **[Yeet Skill Overly Opinionated](https://github.com/openai/codex/issues/16127)** — Feedback that default skills force branch naming conventions and PR tags, and incorrectly trigger git commands in non-git DVCS workflows like `jj`.

## 4. Key PR Progress
1.  **[Honor managed permission profiles in network proxy resolution](https://github.com/openai/codex/pull/34436)** — Fixes a security/config gap where network proxy specs ignored permission profiles defined in `requirements.toml`.
2.  **[Support per-environment permission profiles](https://github.com/openai/codex/pull/34438)** — Allows selected environments to override thread-level `PermissionProfile`, enabling granular shell, filesystem, and approval policy control.
3.  **[Support Windows sandboxing in exec server](https://github.com/openai/codex/pull/34423)** — Adds a native process launcher that selects the Windows sandbox session backend, addressing a long-standing platform limitation.
4.  **[Move shared skill models into `codex-skills`](https://github.com/openai/codex/pull/34429)** — Refactors core dependencies to use shared skill metadata and policy types, improving maintainability across core, plugin, and extension consumers.
5.  **[Optimize remote compaction history handling](https://github.com/openai/codex/pull/34431)** — Reduces CPU/memory overhead during remote compaction by estimating token counts once and avoiding unnecessary history cloning.
6.  **[Resolve outbound proxy routes explicitly](https://github.com/openai/codex/pull/34435)** — Prevents system proxy discovery from blocking and ensures consistent environment proxy behavior across transports.
7.  **[Limit Linux `/proc` preflight filesystem view](https://github.com/openai/codex/pull/34409)** — Tightens security by running bubblewrap `/proc` mount probes with minimal read-only policies instead of inheriting command filesystem policies.
8.  **[Support threadless MCP connections without event channels](https://github.com/openai/codex/pull/34408)** — Makes MCP event senders optional, allowing connections where no session event stream exists.
9.  **[Enrich app/read connector metadata](https://github.com/openai/codex/pull/34417)** — Adds icon URLs, distribution channels, and plugin display names to connector metadata, supporting better third-party integrations.
10. **[Kill timed-out Git status process groups](https://github.com/openai/codex/pull/30235)** — Ensures wrapped Git processes are killed on timeout by running status checks in their own process group, preventing lingering worktree scans.

## 5. Feature Request Trends
*   **Cross-Platform Expansion:** Strong demand for a Linux desktop client and support for headless remote Linux hosts via mobile, reducing dependency on local macOS/Windows machines.
*   **Usage Transparency & Control:** Users want precise expiration timestamps with timezones on reset cards and clearer visibility into rate-limit consumption mechanics.
*   **Project Organization:** Requests to prefix chat titles with project names and display project names in pinned sidebar chats to improve navigation in large workspaces.
*   **Skill Customization:** Feedback indicates default skills (like "yeet") should be opt-in or configurable to avoid conflicting with non-standard DVCS or branch naming conventions.

## 6. Developer Pain Points
*   **Unpredictable Costs:** The most severe pain point is the sudden increase in token-to-cost ratio on Plus plans, compounded by background polling loops that waste credits on history-heavy turns.
*   **Windows Desktop Instability:** Multiple reports of freezes, micro-stutters, cold-launch hangs, and elevated sandbox disk saturation on Windows indicate the platform requires significantly more stabilization than macOS.
*   **Session & History Reliability:** Users experience stuck "Thinking" states, invisible turns after restart, and disappearing history threads—particularly when initial prompts are stored only as pasted-text attachments.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-07-21

## 1. Today's Highlights
Gemini CLI shipped nightly build `v0.52.0-nightly.20260721.gacae7124b`, headlined by critical A2A server hardening to prevent RCE and enforce workspace trust. Community attention is concentrated on agent reliability, with multiple P1 reports tracking startup freezes, incorrect subagent termination states, and silent `tools/list` timeouts. Internally, the team continues shipping infrastructure for an automated SSR code-generation pipeline and a Cloud-based caretaker triage workflow to accelerate issue resolution.

## 2. Releases
**v0.52.0-nightly.20260721.gacae7124b**
The latest nightly incorporates A2A server environment isolation, a rotated session-ID fix for model fallbacks, faster MCP discovery timeout handling, and caretaker triage automation updates.  
🔗 Full Changelog: https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b

## 3. Hot Issues
1. **[Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — P1 agent reliability bug where the `codebase_investigator` masks turn-limit interruptions as successful goal completion. *Reaction:* 12 comments, 2 👍; flagged maintainer-only and marked for retesting.
2. **[Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** — Simple tasks like folder creation freeze indefinitely when deferring to the generalist subagent. *Reaction:* 7 comments, 8 👍; strong community frustration due to workarounds requiring manual skill disabling.
3. **[Leverage model's bash affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)** — Proposes using native POSIX tool chaining while isolating execution without external sandbox dependencies. *Reaction:* 8 comments; viewed as a high-value architectural shift for secure bash-heavy workflows.
4. **[Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** — Tracks behavioral eval expansion (76 tests across 6 Gemini models) to improve release confidence. *Reaction:* 7 comments; signals a maturing QA pipeline tied directly to agent stability.
5. **[Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — Evaluates whether AST-native tooling can reduce misaligned reads, token waste, and multi-turn navigation noise. *Reaction:* 7 comments; widely seen as a performance/UX win if validated.
6. **[Gemini does not use skills and sub

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest
**Date:** 2026-07-21  
**Source:** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

## 1. Today's Highlights
No new releases were published in the last 24 hours, but community activity remains active with six open issues and three pull requests addressing critical state management, tool accuracy, and cross-platform stability. Key friction points include Windows session migration failures, Goal mode infinite loops burning tokens, and a fix in progress for chained `StrReplaceFile` edits.

## 2. Releases
*No new versions released in the last 24 hours.*

## 3. Hot Issues
*Note: All 6 recently updated issues are listed below.*

*   **[Bug] Kimiclaw on Cloud Server Continuously Returns 429 engine_overloaded**
    *   **Link:** [MoonshotAI/kimi-cli#2209](https://github.com/MoonshotAI/kimi-cli/issues/2209)
    *   **Summary:** A user on Linux x86_64 reports persistent `429 engine_overloaded` errors on a remote server using Kimi-k2.6, even after upgrading from v1.24.0 to v1.41.0.
    *   **Why it Matters:** Highlights reliability concerns for users deploying Kimi Code CLI in headless/cloud environments.
    *   **Community Reaction:** High interest; 3 👍 and 4 comments, indicating others may be experiencing similar rate-limit or overload issues.

*   **StrReplaceFile Reports Too Few Total Replacements for Chained Edits**
    *   **Link:** [MoonshotAI/kimi-cli#2526](https://github.com/MoonshotAI/kimi-cli/issues/2526)
    *   **Summary:** `StrReplaceFile` counts replacements against original file content rather than running content, causing chained edits to fail silently or report incorrect counts.
    *   **Why it Matters:** Directly impacts edit accuracy and developer trust in automated file modifications.
    *   **Community Reaction:** 0 reactions; linked PR #2524 is actively addressing this.

*   **Goal Mode: No-Op Continuation Loop Burns Tokens and Context**
    *   **Link:** [MoonshotAI/kimi-cli#2525](https://github.com/MoonshotAI/kimi-cli/issues/2525)
    *   **Summary:** In Goal mode, if the agent waits on an external condition (e.g., long-running training job), continuation turns fire indefinitely every few seconds.
    *   **Why it Matters:** Causes excessive token consumption and context pollution during idle waiting states.
    *   **Community Reaction:** 0 reactions; critical for long-running autonomous workflows.

*   **[Bug] Context Compaction Reopens Completed and Deleted Task**
    *   **Link:** [MoonshotAI/kimi-cli#2523](https://github.com/MoonshotAI/kimi-cli/issues/2523)
    *   **Summary:** Kimi Code reopens a task that was already completed and deleted following context compaction.
    *   **Why it Matters:** Indicates a regression in task state tracking within the context management pipeline.
    *   **Community Reaction:** 0 reactions.

*   **Windows: Old Sessions Not Migrated to .kimi After Upgrade; `kimi migrate` Missing**
    *   **Link:** [MoonshotAI/kimi-cli#2522](https://github.com/MoonshotAI/kimi-cli/issues/2522)
    *   **Summary:** Upgrading from old `kimi-code` to new `kimi` v1.49.0 on Windows leaves `%USERPROFILE%\.kimi-code` data unmigrated, and the `kimi migrate` command is unavailable.
    *   **Why it Matters:** Blocks smooth upgrades and risks loss of session history on Windows.
    *   **Community Reaction:** 0 reactions.

*   **[Bug] Windows Herder Arrow Keys Do Not Work for Selection**
    *   **Link:** [MoonshotAI/kimi-cli#2521](https://github.com/MoonshotAI/kimi-cli/issues/2521)
    *   **Summary:** In the Windows version of the herder, arrow keys cannot be used to select options (e.g., when selecting models or commands).
    *   **Why it Matters:** Degrades usability of the interactive TUI on Windows.
    *   **Community Reaction:** 0 reactions.

## 4. Key PR Progress
*Note: All 3 recently updated PRs are listed below.*

*   **[fix(tools)] Count StrReplaceFile Replacements Against Running Content**
    *   **Link:** [MoonshotAI/kimi-cli#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524)
    *   **Status:** Open
    *   **Description:** Corrects `StrReplaceFile` to compute replacement counts against progressively edited content rather than the original file, resolving [Issue #2526](https://github.com/MoonshotAI/kimi-cli/issues/2526).

*   **[fix(session)] Align Fork/Undo Context Truncation to Wire Turns**
    *   **Link:** [MoonshotAI/kimi-cli#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520)
    *   **Status:** Open
    *   **Description:** Resolves [Issue #2517](https://github.com/MoonshotAI/kimi-cli/issues/2517) and [Issue #1974](https://github.com/MoonshotAI/kimi-cli/issues/1974) by aligning context truncation with wire turns, likely fixing history mismatches after forks/undos referenced in [Issue #2049](https://github.com/MoonshotAI/kimi-cli/issues/2049).

*   **[fix(app)] Refresh Stale Frozen System Prompt on Session Resume**
    *   **Link:** [MoonshotAI/kimi-cli#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519)
    *   **Status:** Open
    *   **Description:** Resolves [Issue #2420](https://github.com/MoonshotAI/kimi-cli/issues/2420) by ensuring resumed sessions adopt the current `_system_prompt` instead of the frozen value, fixing issues where skills and `AGENTS.md` edits were ignored after resume.

## 5. Feature Request Trends
*   **Robust Migration Tooling:** Users expect seamless data migration between client versions, particularly on Windows where `kimi migrate` appears to be missing or non-functional.
*   **Intelligent Idle Handling in Goal Mode:** Autonomous agents should detect external dependencies and pause efficiently without burning tokens or polluting context.
*   **Cross-Platform TUI Consistency:** Interactive controls (e.g., arrow keys in herder) should behave identically across OS environments.
*   **Stateful Context Compaction:** Compaction algorithms must preserve task completion status and avoid resurrecting closed work.

## 6. Developer Pain Points
*   **Windows-Specific Instability:** Three of the six recent issues relate to Windows, including broken migration, missing commands, and TUI input failures.
*   **Token and Context Waste:** Infinite loops in Goal mode and context compaction bugs lead to unnecessary resource consumption and degraded performance.
*   **Session State Management:** Resume and compaction features remain fragile, with reports of lost skills, incorrect system prompts, and reopened tasks.
*   **Cloud/Server Reliability:** Persistent `429 engine_overloaded` errors on remote deployments suggest insufficient handling of server-side rate limits or capacity issues.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-07-21

## 1. Today's Highlights
OpenCode **v1.18.4** is now available, introducing adaptive thinking controls for Kimi models on Anthropic-compatible providers and resolving OpenAI provider header timeout issues. Community discussion is dominated by installation compatibility with non-NPM package managers like Bun, silent configuration limits on output tokens, and ongoing desktop stability efforts surrounding the notification server. Several high-engagement bug reports regarding regressions in Plan/Build modes and multi-question tool calls have been addressed or remain active.

## 2. Releases
### v1.18.4
*   **Core Improvements:** Implemented adaptive thinking controls for Kimi models on Anthropic-compatible providers, enabling summarized reasoning output by default.
*   **Bugfixes:** Reduced OpenAI provider header timeouts during slow connection setups and ensured provider-defined reasoning options are respected.
*   **Visual Updates:** Final screenshots for PR #37967 published.

[View Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.4)

## 3. Hot Issues
1.  **Bun Installs Broken Since v1.15.1** [#27906](https://github.com/anomalyco/opencode/issues/27906)  
    Users report that requiring postinstall lifecycle scripts breaks global installs in Bun, which blocks these scripts by default. High engagement (13 👍) indicates significant friction for non-NPM users.

2.  **`limit.output` Silently Capped at 32k** [#29363](https://github.com/anomalyco/opencode/issues/29363)  
    Configured `maxOutputTokens` are silently capped at 32,000 despite higher values set in `opencode.json`. The only workaround is an experimental environment variable, frustrating users seeking large context outputs.

3.  **Plan/Build Mode Regression** [#37970](https://github.com/anomalyco/opencode/issues/37970)  
    Users report the Plan/Build mode option has been removed or is inconsistent in the latest Desktop version, causing unintended behavior changes.

4.  **Desktop Crashes on WSL Restart** [#37171](https://github.com/anomalyco/opencode/issues/37171) *(Closed)*  
    OpenCode Desktop entered an infinite crash loop with `Notification server not found: wsl:Ubuntu`. This reflects broader instability in the desktop-to-server communication layer.

5.  **Multi-Question Tool Calls Fail Silently** [#35434](https://github.com/anomalyco/opencode/issues/35434) *(Closed)*  
    A regression since v1.17.13 caused the `question` tool to fail silently when called with two or more questions in the TUI. Resolved, but highlights fragility in tool call handling.

6.  **Sessions Orphaned on Directory Rename** [#23248](https://github.com/anomalyco/opencode/issues/23248)  
    Renaming or moving a project directory makes existing sessions invisible because the stored absolute path is never updated. 6 👍 suggests this affects many users managing project structures.

7.  **DeepSeek V4 Flash Server Errors** [#36826](https://github.com/anomalyco/opencode/issues/36826)  
    Users encounter "Unexpected server error" when sending prompts via DeepSeek V4 Flash, indicating provider-specific reliability issues.

8.  **Built-in Proxy Support Request** [#37993](https://github.com/anomalyco/opencode/issues/37993)  
    A feature request for auto-start/stop proxy support to accommodate restricted network environments where webfetch, git clone, and package installs are blocked.

9.  **Plugin API for Status Bar Widgets** [#23539](https://github.com/anomalyco/opencode/issues/23539)  
    Long-standing request for a concrete Plugin API to allow custom status bar widgets, consolidating earlier ideas around `ui.statusLine` and `ui.footer` hooks.

10. **Console Go Provider Errors** [#37056](https://github.com/anomalyco/opencode/issues/37056)  
    Subscribed Console Go plans return frequent 400/401/500 errors, particularly for large requests, impacting reliability for users relying on this provider.

## 4. Key PR Progress
1.  **Fix Windows npm Plugin Entry Point** [#38014](https://github.com/anomalyco/opencode/pull/38014)  
    Resolves an issue where `import.meta.resolve()` returns raw filesystem paths on Windows instead of `file://` URLs, ensuring correct plugin loading.

2.  **Bound Shell Output After Exit** [#38019](https://github.com/anomalyco/opencode/pull/38019)  
    Improves shell process handling by waiting up to 500ms for EOF after exit and marking incomplete output, preventing lost terminal data.

3.  **Nix Build for opencode2** [#37647](https://github.com/anomalyco/opencode/pull/37647)  
    Adds Nix build support to compile `opencode2` (TUI) alongside the main OpenCode binary.

4.  **Ignore node_modules in Config Discovery** [#37219](https://github.com/anomalyco/opencode/pull/37219)  
    Prevents config and skill discovery from traversing `node_modules`, fixing performance and false-positive detection issues.

5.  **Image Backgrounds Feature** [#37956](https://github.com/anomalyco/opencode/pull/37956)  
    Adds background image controls to appearance settings for Web and Desktop clients, with persistence via Cache Storage and managed files.

6.  **Improve Patch

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-07-21

## 1. Today's Highlights
Qwen Code v0.20.0-nightly.20260721 is live, bringing label-driven autofix takeover/release logic and fixes for forced-dispatch no-ops. The development focus is heavily concentrated on stabilizing the autofix pipeline—improving real-time feedback pickup, verification-gate crash handling, and CI patrol resilience—while `qwen serve` undergoes significant architectural changes around workspace-owned runtime coordination. Community attention is currently drawn to critical TokenPlan `enable_thinking` parameter conflicts, MCP tool-listing failures, and Web Shell authentication persistence across page refreshes.

## 2. Releases
**v0.20.0-nightly.20260721.cda0e0348**
*   **Autofix Enhancements:** Implements label-driven takeover and release mechanisms for the autofix loop.
*   **Bug Fix:** Resolves a forced-dispatch green no-op condition where CI signals were incorrectly marked as successful.
*   [View Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721.cda0e0348)

## 3. Hot Issues
1.  **[RFC] Reliable auto-memory recall** [#7040](https://github.com/QwenLM/qwen-code/issues/7040)
    *   **Why it matters:** Defines the Core roadmap for memory recall, narrowing scope to improve the recall path for all users without building an enterprise governance platform.
    *   **Reaction:** Active discussion on timing, quality metrics, and telemetry requirements.

2.  **Side-query forces `enable_thinking=false`, breaking TokenPlan endpoints** [#7284](https://github.com/QwenLM/qwen-code/issues/7284)
    *   **Why it matters:** P1 bug where `runSideQuery` (used by `web_fetch` and classifiers) sends incompatible thinking flags to DashScope/TokenPlan, causing 400 errors on endpoints requiring reasoning.
    *   **Reaction:** Multiple duplicate reports confirm widespread impact on TokenPlan users.

3.  **MCP server never successfully gets tool and resource listing** [#7147](https://github.com/QwenLM/qwen-code/issues/7147)
    *   **Why it matters:** Authentication succeeds, but tool listing times out for valid MCP servers (e.g., Fastmail), blocking integration adoption.
    *   **Reaction:** Marked as a welcome PR; highlights gaps in MCP server compatibility.

4.  **Agent tool schema forces mutually exclusive `working_dir` and `isolation` parameters** [#7315](https://github.com/QwenLM/qwen-code/issues/7315)
    *   **Why it matters:** P1 schema issue causes OpenAI-compatible providers to treat optional fields as required, breaking subagent launches.
    *   **Reaction:** Urgent fix requested due to complete subagent functionality failure.

5.  **Web Shell loses bearer token on page refresh** [#7301](https://github.com/QwenLM/qwen-code/issues/7301)
    *   **Why it matters:** Users running `qwen serve --token` lose authentication after refreshing the browser, disrupting daemon-based workflows.
    *   **Reaction:** Active development; PRs #7372 and #7374 address this immediately.

6.  **Model switch invalidates a loaded daemon session** [#7023](https://github.com/QwenLM/qwen-code/issues/7023)
    *   **Why it matters:** Switching models in an embedded WebShell/daemon client can make the active session unavailable immediately.
    *   **Reaction:** Impact on session continuity and multi-model workflows.

7.  **Support context-inheriting subagents in headless mode** [#7348](https://github.com/QwenLM/qwen-code/issues/7348)
    *   **Why it matters:** Enables real parent-context inheritance for subagents in CI/CD, SDK headless sessions, and automated evaluation harnesses.
    *   **Reaction:** High demand for non-interactive automation scenarios.

8.  **ACP Plan mode blocks unclassified read-only shell commands** [#6949](https://github.com/QwenLM/qwen-code/issues/6949)
    *   **Why it matters:** Safety classifiers can bypass exit confirmation or block legitimate read-only operations in Plan mode.
    *   **Reaction:** Discussion on balancing safety with developer productivity.

9.  **VS Code Companion failed to connect to Qwen agent** [#7056](https://github.com/QwenLM/qwen-code/issues/7056)
    *   **Why it matters:** ACP process exits unexpectedly (exit code 0) in the VS Code extension, indicating instability in the bridge layer.
    *   **Reaction:** Ongoing triage for Windows/VS Code environments.

10. **Update check timeout UX** [#7049](https://github.com/QwenLM/qwen-code/issues/7049)
    *   **Why it matters:** Slow networks cause update checks to fail as errors instead of warnings, degrading CLI experience in restricted regions.
    *   **Reaction:** Request to raise timeout budgets and soften failure states.

## 4. Key PR Progress
1.  **Establish workspace runtime ownership for `qwen serve`** [#7308](https://github.com/QwenLM/qwen-code/pull/7308)
    *   Refactors ACP lifecycle so capability state belongs to the registered workspace rather than the last active session, improving startup and reconciliation.

2.  **Strip Qwen-internal daemon secrets from agent-spawned child env** [#7256](https://github.com/QwenLM/qwen-code/pull/7256)
    *   Security hardening preventing shell subprocesses and MCP servers from inheriting `QWEN_SERVER_TOKEN` and other daemon credentials.

3.  **Persist daemon bearer token per-tab in Web Shell** [#7374](https://github.com/QwenLM/qwen-code/pull/7374)
    *   Fixes token loss on refresh by writing the token from the URL fragment/query to `sessionStorage` on first load.

4.  **Autofix resolves review threads whose findings it implemented** [#7

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-07-21

## 1. Today's Highlights
The v0.9.1 release queue is being aggressively stabilized, with the team closing out foundational contracts around subagent runtime truthfulness, unified tool permissions, and provider-neutral model routing. A high volume of merged PRs addresses persistent TUI reliability gaps—including long-output scrolling, onboarding persistence, Moonshot/Kimi schema compliance, and headless execution reproducibility—while no new official release was published in the last 24 hours. Community engagement remains concentrated on Windows-specific runtime hygiene, viewport/scrolling regressions, and deterministic child-agent lifecycle management.

## 2. Releases
No new releases in the last 24 hours. Current PR velocity and the closure of multiple `[release-blocker, v0.9.1]` items indicate an imminent stabilization push.

## 3. Hot Issues
1. **[#4032] Codewhale not following the constitution**  
   `https://github.com/Hmbown/DeepSeek-TUI/issues/4032`  
   **Why it matters:** Core trust and reliability contract; the runtime consistently bypasses jointly authored scripts in favor of temporary ones.  
   **Community reaction:** Highest engagement this cycle (40 comments), signaling strong developer concern about agent consistency and constitutional adherence.

2. **[#4042] Environment-level tool sandboxing for sub-agents**  
   `https://github.com/Hmbown/DeepSeek-TUI/issues/4042`  
   **Why it matters:** Tracks runtime enforcement of `tool_restrictions` across sessions, sub-agents, Fleet workers, and MCP servers.  
   **Community reaction:** Closed after confirming `--disallowed-tools` works but needs broader context-level enforcement.

3. **[#4489] Hooks process leak**  
   `https://github.com/Hmbown/DeepSeek-TUI/issues/4489`  
   **Why it matters:** Hook commands inheriting stdin without EOF hang indefinitely on Windows, leaking `node.exe` grandchild processes.  
   **Community reaction:** Closed; highlights a critical Windows-specific cleanup gap in hook execution.

4. **[#414] Resolve one truthful child runtime before launch**  
   `https://github.com/Hmbown/DeepSeek-TUI/issues/414`  
   **Why it matters:** Foundational v0.9.1 contract requiring prompt, role, model, tools, permissions, and workspace boundary to resolve from a single persisted manifest.  
   **Community reaction:** Open but actively tracked; author-maintained design anchor for subagent safety.

5. **[#2889] Work Agent rows: real sub-agent details and structured current activity**  
   `https://github.com/Hmbown/DeepSeek-TUI/issues/2889`  
   **Why it matters:** Restores community-owned design for the sidebar’s Work/To-do, Activity, and Agents panels.  
   **Community reaction:** Open; preserves prior contributor’s focused implementation offer.

6. **[#4605] Enter key send lag — UI freezes for hundreds of milliseconds**  
   `https://github.com/Hmbown/DeepSeek-TUI/issues/4605`  
   **Why it matters:** P1 performance regression across `0.6.x–0.9.0` on Windows pwsh; directly impacts message-sending responsiveness.  
   **Community reaction:** Open; flagged as a high-frequency touchpoint regression.

7. **[#4603] Long output content cannot scroll — content truncated beyond viewport**  
   `https://github.com/Hmbown/DeepSeek-TUI/issues/4603`  
   **Why it matters:** Large diffs, logs, and multi-turn transcripts become unreviewable when exceeding the terminal viewport.  
   **Community reaction:** Open; actively paired with a new PTY scrolling test in PR #4653.

8. **[#3934] Collapse Fleet and agent roles to Planner / Worker / Reviewer / Verifier**  
   `https://github.com/Hmbown/DeepSeek-TUI/issues/3934`  
   **Why it matters:** Simplifies the agent surface to four canonical responsibility roles while keeping capability/permission/lifecycle separate.  
   **Community reaction:** Open; architectural unification effort for v0.9.1.

9. **[#4412] Resolve Ask, Auto-Review, and Full Access through one permission contract**  
   `https://github.com/Hmbown/DeepSeek-TUI/issues/4412`  
   **Why it matters:** Unifies approval/resume logic for every root, child, foreground, background, headless, Bash, streaming, or MCP call.  
   **Community reaction:** Open; central to non-modal Auto-Review and security posture.

10. **[#4627] Resolve and isolate every child execution environment before launch**  
    `https://github

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*