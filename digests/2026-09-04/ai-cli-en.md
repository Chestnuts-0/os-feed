# AI CLI Tools Community Digest 2026-09-04

> Generated: 2026-09-04 12:47 UTC | Tools covered: 9

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



# AI CLI Tools Ecosystem — Cross-Tool Comparison Report
**Date:** 2026-09-04

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a phase of rapid maturation, with established players (Claude Code, Codex, Copilot CLI) shipping feature-rich releases while newer entrants (Kimi Code, Pi, Qwen Code) compete on differentiation and model-agnostic flexibility. The dominant theme across all communities is **session reliability** — broken resumption, memory regressions, and agent state loss are the #1 friction points regardless of vendor. Simultaneously, the plugin/MCP ecosystem is becoming a battleground, with communities demanding deeper customization hooks, better policy enforcement, and transparent cost reporting.

---

## 2. Activity Comparison

| Tool | Hot Issues | Key PRs (24h) | Releases (24h) | Release Velocity |
|------|-----------|---------------|----------------|-----------------|
| **Claude Code** | 10 | 5 | v2.1.260 | Steady incremental |
| **OpenAI Codex** | 10 | 10 | v0.153.2, v0.153.1, v0.154.0-alpha.2/3 | High — 3 releases |
| **Gemini CLI** | 10 | 10 | v0.60.0-nightly | Nightly cadence |
| **GitHub Copilot CLI** | 10 | 1 | v1.0.83-5, v1.0.83-4 | Moderate; PR activity low |
| **Kimi Code CLI** | 7 (3 open) | 0 | None | Low |
| **OpenCode** | 10 | 10 (+5 merged) | None | High dev activity, no release |
| **Pi** | 10 | 10 (+5 merged) | v0.85.0 | Active with release |
| **Qwen Code** | 4 | 10 | None | Design-heavy, no release |
| **DeepSeek TUI** | 2 | 4 | None | Niche, low volume |

> **Note:** PR counts reflect *key* PRs listed in digest; not all repository PRs. OpenCode and Pi show high merged PR volume despite no releases, suggesting a merge-before-release cadence.

---

## 3. Shared Feature Directions

| Theme | Tools Involved | Specific Needs |
|-------|---------------|----------------|
| **Plugin/Extension Hooks** | Claude Code, OpenCode, Pi, Kimi Code | Deep customization: Claude Code's "Function Hooks" request (#91870), OpenCode's persistent footer hooks (#18969), Pi's system prompt refactor (#8998), Kimi Code's hooks system (#1313) |
| **Session Resume & State** | Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode | Recovery from interrupted sessions, preventing data loss on restart; Gemini CLI closed #29198 (session deletion on exit), Copilot CLI has OOM crashes on resume (#4699) |
| **MCP Reliability & Policy** | All tools | Consistent policy enforcement, timeout handling, OAuth flows; Gemini CLI P1 on MCP policy inconsistency (#29200), Kimi Code fixed MCP timeout crash (#1316), Copilot CLI has legacy init regression (#4525) |
| **Cost/Token Transparency** | Claude Code, Copilot CLI, OpenCode | Cost reporting (#47142 dashboard math wrong on OpenCode), BYOK prompt-cache regression causing ~5× cost increase on Copilot CLI (#4720), Claude Code improved `/cost` explanations |
| **Cross-Model/Provider Support** | Pi, Codex, OpenCode, Kimi Code | Multi-provider routing, BYOK configurations, provider-agnostic session storage; Pi added OrcaRouter (#9135) and Meta Muse (#9096), OpenCode migrating BYOK routing (#47266) |
| **Extended Thinking / Reasoning** | OpenCode, Pi, DeepSeek TUI, Qwen Code | Handling invalid tool calls during extended thinking (#47274 on OpenCode), configurable reasoning-only retries (#5867 on DeepSeek), reasoning capability toggles (#10999 on Qwen Code) |
| **Windows Platform Stability** | Claude Code, Codex, Copilot CLI, Kimi Code, Pi | Windows-specific regressions are the single largest cross-tool pain cluster: layering issues, keybinding failures, process orphans, MCP denials |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | Kimi Code | DeepSeek TUI |
|-----------|------------|-------------|-----------|------------|---------|-----|-----------|-----------|-------------|
| **Primary Focus** | Enterprise-grade agent with plugin system | General-purpose CLI with Computer Use | Google ecosystem integration, multi-agent | GitHub-integrated workflow, enterprise | Open-source, extensible TUI | Multi-provider flexibility | Model-agnostic, design-first | Lightweight, Moonshot models | Minimalist TUI |
| **Target User** | Professional developers, enterprises | Broad developer base | Google Workspace users | GitHub-powered orgs | Open-source contributors | Multi-cloud users | Chinese/Global mix | Moonshot users | Power users |
| **Technical Approach** | Desktop + CLI, diff panel, cost reporting | Rust-based, managed worktrees, Guardian policies | Subagent architecture, AST-aware tools | ACP mode, sandboxed commands, taskbar integration | TypeScript/Bun, plugin-first TUI, QR pairing | Cloudflare Durable Objects, OrcaRouter | Channel-based sessions, IPC inbox | Simple hooks, notification system | Atomic commit splitting, skill evolution |
| **Open vs. Closed** | Source-available | Open source | Open source | Source-available | Fully open | Open source | Open source | Open source | Open source |
| **Key Differentiator** | Opus 5 reasoning + diff panel | GPT-6-Astra + Computer Use | Gemini 3.8 Flash + browser agent | Copilot integration + sandbox | Plugin TUI + BYOK routing | Multi-provider + Durable Objects | Session rotation + web-shell | Moonshot model access | Lightweight, self-learning skills |

---

## 5. Community Momentum & Maturity

**Mature & Stable (High engagement, structured releases):**
- **Claude Code** — 10 hot issues with clear severity classifications, steady release cadence (v2.1.260), strong plugin architecture discussion. The Opus 5 reliability concerns (#83789, #90542) suggest maturity stress tests.
- **OpenAI Codex** — Highest release velocity (3 releases/24h), strong PR throughput (10 key PRs), but Windows instability is a maturity gap. The 172 GB memory runaway (#26738) is a red flag for production readiness.
- **Gemini CLI** — Nightly cadence indicates rapid iteration. P1-prioritized bugs (agent hangs, session deletion) show active triage. The `gemini-3.8-flash` promotion (#29172) signals model leadership.

**Rapidly Iterating (High PR volume, growing community):**
- **OpenCode** — 10 merged PRs with no release suggests a "ship when ready" approach. The Bun upgrade (#47271), extended-thinking fixes (#47276), and bootstrap timeout work (#47282) show aggressive technical debt repayment.
- **Pi** — v0.85.0 release with multi-provider expansion (OrcaRouter, Meta Muse). The Durable Objects session backend (#9131) and system prompt refactor (#8998) are architecturally significant.
- **Qwen Code** — Design-heavy phase (Part 4B sessions, web-shell turn navigation) with 10 PRs. The session rotation (#8927) and IPC inbox (#10800) features indicate investment in multi-session orchestration.

**Emerging / Lower Volume:**
- **GitHub Copilot CLI** — Only 1 active PR despite 2 releases. The community pain points (token bloat, cost regressions, OOM crashes) are significant but the development velocity appears constrained.
- **Kimi Code CLI** — No releases, 0 PRs listed. Fixed several critical issues (#1316 MCP timeout, #1315 subagent ESC) but currently in maintenance mode.
- **DeepSeek TUI** — Smallest community (2 hot issues). Focused on niche improvements (atomic commits, reasoning config). Self-learning skill evolution (#5860) is an ambitious differentiator.

---

## 6. Trend Signals

**1. Session reliability is the #1 cross-cutting concern.** Every tool community reports bugs around session resume, state loss, and context collapse. This suggests the industry has not yet solved durable agent sessions — a key opportunity for differentiation.

**2. Windows is the weakest platform across all tools.** Every major CLI has Windows-specific regressions (layering, keybindings, process orphans, MCP denials). Any tool that achieves Windows parity will have a competitive advantage.

**3. MCP is becoming a security and reliability minefield.** Inconsistent policy enforcement, timeout cascades, OAuth flow gaps, and legacy init regressions across tools indicate the MCP ecosystem is still immature. Tools with robust MCP lifecycle management (Gemini CLI's RFC 9207 enforcement, Kimi Code's timeout fix) are gaining trust.

**4. Cost transparency is a growing community demand.** BYOK prompt-cache regressions (Copilot CLI's ~5× cost increase), opaque rate limits (Claude Code's `Fable 5.1` weekly limit not surfaced), and incorrect dashboard math (OpenCode's usage percentage bug) are eroding user trust. Tools that get cost reporting right will stand out.

**5. Extended thinking / reasoning modes are exposing new failure modes.** Invalid tool call wedging (OpenCode #47274), reasoning-only retry loops (DeepSeek #5867), and dual-thinking-block API errors (Pi #8576) show that as models spend more tokens thinking, the error surface grows proportionally.

**6. Multi-provider flexibility is table stakes, not a differentiator.** Pi's OrcaRouter/Meta/Muse additions, OpenCode's BYOK routing migration, and Qwen Code's declarative reasoning config all point to a market where users expect to swap providers without workflow disruption.

**7. Plugin/extensibility architecture is the next battleground.** Claude Code's Function Hooks request (#91870), OpenCode's persistent footer hooks (#18969), and Kimi Code's hooks system (#1313) converge on the same need: developers want to modify core behavior safely. The tool that delivers the most robust plugin API will capture power-user loyalty.

---

*Report generated from community digest data dated 2026-09-04. Data reflects open issue/PR activity and does not capture closed-resolved items unless noted.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-09-04 | **Source:** anthropics/skills

---

## 1. Top Skills Ranking

### 1. **Hivemind: Zero-Cost Multi-Agent Orchestration**
*   **Functionality:** A skill enabling Claude Code to delegate mechanical work to headless `opencode` workers running on free models, while Claude remains the planner, reviewer, and merger.
*   **Discussion Highlights:** The community is eager to offload expensive context usage to cheaper models. This skill addresses the core constraint of the expensive model's context window being the scarce resource, not intelligence.
*   **Status:** Open (PR #1628)
*   **Link:** [anthropics/skills PR #1628](https://github.com/anthropics/skills/pull/1628)

### 2. **Self-Audit (Mechanical Verification + Four-Dimension Reasoning)**
*   **Functionality:** A quality gate skill that performs mechanical file verification before executing a four-dimension reasoning audit in damage-severity priority order. Works universally across any project or tech stack.
*   **Discussion Highlights:** Focuses on output integrity and reliability. It is designed to be a robust verification mechanism for AI-generated code and documents.
*   **Status:** Open (PR #1367)
*   **Link:** [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367)

### 3. **ServiceNow Platform Skill**
*   **Functionality:** A broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, SPM, CSDM, SecOps, and IntegrationHub.
*   **Discussion Highlights:** Addresses enterprise-specific workflow needs, particularly for IT operations and Service Management.
*   **Status:** Open (PR #568)
*   **Link:** [anthropics/skills PR #568](https://github.com/anthropics/skills/pull/568)

### 4. **Testing-Patterns Skill**
*   **Functionality:** Comprehensive testing stack coverage including philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing (Testing Library), and edge case handling.
*   **Discussion Highlights:** Centralizes best practices for software quality assurance, a high-demand area for AI coding assistants.
*   **Status:** Open (PR #723)
*   **Link:** [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723)

### 5. **Document-Typography Skill**
*   **Functionality:** Prevents common typographic problems in AI-generated documents such as orphan word wrap, widow paragraphs, and numbering misalignment.
*   **Discussion Highlights:** Focuses on the polish and readability of generated documents, a critical requirement for professional output.
*   **Status:** Open (PR #514)
*   **Link:** [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)

### 6. **ODT Skill (OpenDocument Format)**
*   **Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods) using LibreOffice standards.
*   **Discussion Highlights:** Provides open-source document handling capabilities, filling a gap for users avoiding proprietary formats.
*   **Status:** Open (PR #486)
*   **Link:** [anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)

### 7. **Pyxel Skill (Retro Game Development)**
*   **Functionality:** A skill for the Pyxel retro game engine, covering workflow from writing code to inspecting output and iterating on pixel art.
*   **Discussion Highlights:** Targets the creative coding and hobbyist development community, expanding the scope beyond traditional software engineering.
*   **Status:** Open (PR #525)
*   **Link:** [anthropics/skills PR #525](https://github.com/anthropics/skills/pull/525)

---

## 2. Community Demand Trends

Based on active issues, the community is demanding Skills that address:

*   **Enterprise & Platform Specifics:** There is strong demand for specialized skills handling complex platforms like **ServiceNow** (ITSM/SecOps), **SCNet HPC** (Slurm workflows), and **SharePoint Online** (SPO) document handling with strict security controls.
*   **Output Quality & Reliability:** Users are pushing for skills that enforce **typography** and **structural integrity** (e.g., preventing widow paragraphs) in generated documents.
*   **Testing & Validation:** A clear trend toward **testing-patterns** and **quality gates** (mechanical verification, reasoning audits) to ensure code correctness and reduce hallucinations.
*   **Code Generation & Frameworks:** High interest in skills for specific frameworks like **React** (Testing Library integration) and **Pyxel** (pixel-art game dev).
*   **Workflow Automation:** The **Hivemind** skill highlights a desire for **multi-agent orchestration** and offloading mechanical tasks to cheaper models to save context.

---

## 3. High-Potential Pending Skills

These PRs are currently active and may land in the repository soon:

*   **Hivemind (PR #1628):** With active discussion on resource optimization and multi-agent workflows, this has high potential for adoption.
*   **Self-Audit (PR #1367):** Addresses a critical need for quality assurance, making it a likely candidate for integration.
*   **ServiceNow (PR #568):** Enterprise skills are often highly valued by corporate users and could see quick uptake.
*   **Testing-Patterns (PR #723):** A foundational skill that supports the entire development lifecycle, likely to be prioritized for general utility.
*   **ODT Skill (PR #486):** Provides utility for open-source workflows, which are increasingly popular.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **Quality Assurance and Enterprise-Specific Automation** skills that enforce structural integrity (typography, testing, validation) and handle complex platform workflows (ServiceNow, HPC) to improve the reliability and professionalism of AI-generated code and documents.

---

# Claude Code Community Digest
**Date:** 2026-09-04

## 1. Today's Highlights
Version **2.1.260** was released, introducing a new diff panel (`/diff`) for visualizing uncommitted changes alongside the conversation and improved cost reporting for prompt-cache misses. The community is actively engaging with a major new feature request for "Function Hooks" designed to make plugins significantly more powerful through a structured, side-effect tracking system.

## 2. Releases
### v2.1.260
- **New Feature:** Added a diff panel that opens in fullscreen mode beside the conversation, showing uncommitted changes as Claude edits (toggle with `/diff`).
- **Improvement:** Enhanced the `/cost` command to display a likely cause for prompt-cache misses (e.g., tool definition changes or TTL expiration).

## 3. Hot Issues
1.  **Desktop Window Layering (Windows 11):** The main window remains "always-on-top" of other applications with no user setting to disable it. It is the Windows counterpart to an older macOS issue (#66516). [Link](https://github.com/anthropics/claude-code/issues/85891)
2.  **Function Hooks (Plugins):** A major enhancement request to make plugins 10x more powerful using a parameterized `$` object and continuation model. [Link](https://github.com/anthropics/claude-code/issues/91870)
3.  **Opus 5 Memory Regression:** Models are ignoring their own persistent memory and prior transcripts, leading to repeated failures on tasks solved in previous sessions. [Link](https://github.com/anthropics/claude-code/issues/83789)
4.  **Rule Contract Violations:** Users report that Claude Code (Opus 5) ignores explicit `CLAUDE.md` rules, violating them verbatim even hours into a session. [Link](https://github.com/anthropics/claude-code/issues/90542)
5.  **Worktree Session Failures (Windows):** Since v2.1.260, background full checkouts for worktrees are failing with "Directory not empty" errors. [Link](https://github.com/anthropics/claude-code/issues/92019)
6.  **Slash Autocomplete Broken (Windows):** Following an update on 2026-08-25, slash autocomplete is blank and only shows the first command. [Link](https://github.com/anthropics/claude-code/issues/89628)
7.  **MCP Workspace Bash Denied:** After updating to v1.44121.1.0, the `mcp__workspace__bash` tool is consistently denied access in Cowork sessions. [Link](https://github.com/anthropics/claude-code/issues/91594)
8.  **Fable 5.1 Answer Visibility:** In Windows Desktop, the assistant's explanation is frequently emitted as a "thinking block" instead of visible text before asking the user a question. [Link](https://github.com/anthropics/claude-code/issues/91939)
9.  **Remote Control Stale Entries:** Ended sessions remain marked "Connected" in the mobile app, accumulating indefinitely. [Link](https://github.com/anthropics/claude-code/issues/69655)
10. **CLI Rate Limit Visibility:** The Fable 5.1 weekly limit is received by the client but never surfaced in the statusline or CLI commands. [Link](https://github.com/anthropics/claude-code/issues/92080)

## 4. Key PR Progress
1.  **Diagnostic Script for GitHub Connector:** A PowerShell script to help Windows users troubleshoot the "Connected but no tools" bug in the GitHub MCP connector. [Link](https://github.com/anthropics/claude-code/pull/61691)
2.  **Security Pattern Fix:** Corrects a bug where `**` glob patterns in security-patterns.json were failing to match top-level files. [Link](https://github.com/anthropics/claude-code/pull/87079)
3.  **Agent Validation Fix:** Fixes `validate-agent.sh` to stop false-flagging valid agents by not aborting on warnings. [Link](https://github.com/anthropics/claude-code/pull/89404)
4.  **Code-Review Documentation:** Aligns the README with the current validation-based command implementation. [Link](https://github.com/anthropics/claude-code/pull/79150)
5.  **SKILL.md Update:** Updated `/frontend-design` documentation. [Link](https://github.com/anthropics/claude-code/pull/91894)

## 5. Feature Request Trends
*   **Plugin Architecture:** The community is heavily focused on deep customization, specifically requesting a robust "Function Hooks" system to modify Claude Code's core behavior safely.
*   **Session Management:** Users want better control over sessions, including the ability to set metadata (tags, status) and filter history effectively.
*   **Agent Customization:** There is a demand for more granular control over sub-agents, specifically the ability to set an `effort` parameter at runtime rather than just via configuration files.
*   **Statusline/CLI Visibility:** Users are frustrated by opaque internal state, such as missing rate limits in the statusline or unreported errors in specific tool integrations.

## 6. Developer Pain Points
*   **Desktop App Stability:** Frequent regressions in the Windows Desktop app, particularly around slash commands, UI layering, and app unresponsiveness after idle periods.
*   **Model Reliability:** Growing concerns about Opus 5's ability to maintain context and follow rules over long sessions, leading to hallucinations or rule violations.
*   **Workflow Interruptions:** Issues with background checkout performance (pooling worktrees without throttling) and integration failures (MCP tools being denied unexpectedly).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-04

## 1. Today's Highlights

Three releases landed in the past 24 hours, with **v0.153.2** correcting the GPT-6-Astra Fast tier description and **v0.154.0-alpha.3** moving the next preview forward. The community is most engaged with a Windows+WSL project-creation regression (#41463, 23 comments) and a macOS memory runaway triggered by Computer Use reaching 172 GB (#26738). A cluster of Windows-specific bugs—floating pet input (#41465), app launch failure (#42501), and MCP pool exhaustion (#42740)—dominates the top issues.

---

## 2. Releases

### v0.153.2 (Patch) — [Changelog](https://github.com/openai/codex/compare/rust-v0.153.1...rust-v0.153.2)
- **Bug fix:** Corrected the GPT-6-Astra Fast tier display text from "1.5x" to "2x speed, increased usage" (#42632). No runtime behavior change.

### v0.153.1 (Patch) — [Changelog](https://github.com/openai/codex/compare/rust-v0.153.0...rust-v0.153.1)
- **New feature:** Added API-only configuration support for GPT-6-Astra without altering the default model or surfacing it in the model picker (#42605).

### v0.154.0-alpha.3 & v0.154.0-alpha.2 (Pre-release)
- Successive alpha builds advancing the 0.154.0 track; no detailed changelogs published yet.

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#41463](https://github.com/openai/codex/issues/41463) | Windows + WSL: Cannot create projects — `AbsolutePathBuf` deserialized without a base path | 23 | 15 | Blocks project creation for the Windows/WSL user segment; regression in path handling. |
| [#41465](https://github.com/openai/codex/issues/41465) | Windows floating pet remains click-through and cannot be dragged | 18 | 23 | High upvote count signals strong sentiment; UI accessibility bug on Windows 11. |
| [#29811](https://github.com/openai/codex/issues/29811) | Goal compaction resurrects completed manual steer before goal continuation resumes | 12 | 8 | Long-running `/goal` workflows are disrupted by state reactivation during compaction. |
| [#41078](https://github.com/openai/codex/issues/41078) | Python SDK can drop an early turn/completed notification | 11 | 0 | SDK reliability issue; early `turn/completed` events are silently discarded, causing indefinite waits. |
| [#17541](https://github.com/openai/codex/issues/17541) | Model switch mid-conversation fails: "encrypted content could not be decrypted" | 9 | 7 | Azure users cannot switch models mid-thread without data loss—a longstanding pain point. |
| [#26738](https://github.com/openai/codex/issues/26738) | macOS Computer Use can trigger memory runaway to 172 GB | 8 | 2 | Critical stability issue; system becomes unusable. Force Quit reports Codex at 172.68 GB. |
| [#41077](https://github.com/openai/codex/issues/41077) | `readme_toc.py` misparses tilde and longer Markdown fences | 8 | 0 | Documentation tooling bug affecting README generation for projects using tilde fences. |
| [#32101](https://github.com/openai/codex/issues/32101) | GPT-5.6 Code Mode omits `tool_search` from exec, degrading deferred MCP discovery | 7 | 5 | MCP tool discovery is degraded in Code Mode; deferred tools lose their BM25 search primitive. |
| [#23968](https://github.com/openai/codex/issues/23968) | Git branch names fail to display in the statusline on Windows | 7 | 0 | TUI statusline regression on Windows with specific git-config settings. |
| [#38787](https://github.com/openai/codex/issues/38787) | `thread/resume` is effectively quadratic on large active threads, blocking Remote steering | 6 | 0 | iOS Remote users cannot steer large threads due to timeout; performance scales poorly with thread size. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#42752](https://github.com/openai/codex/pull/42752) | Preserve response IDs for fast collaborator tool events | ✅ Closed | Fixes analytics correlation by holding collaborator tool events until the sampling response arrives. |
| [#42749](https://github.com/openai/codex/pull/42749) | Improve automatic thread naming in the TUI | ✅ Closed | Thread names now persist after switching away; previously generated names were lost on thread switch. |
| [#42746](https://github.com/openai/codex/pull/42746) | Handle pending network reviews after process completion | ✅ Closed | Remote processes that finish while a network policy review is pending now clean up correctly without false failures. |
| [#42744](https://github.com/openai/codex/pull/42744) | Honor model-provided Guardian review policies | ✅ Closed | Introduces per-model Guardian modes (disabled / synchronous / adaptive) across computer use, shell, code mode, file changes, MCP, network, and permissions. |
| [#42718](https://github.com/openai/codex/pull/42718) | Gate unified exec TTY support behind a feature flag | ✅ Closed | New `unified_exec_tty` flag (default-on); when disabled, `tty` is omitted from the `exec_command` schema. |
| [#42716](https://github.com/openai/codex/pull/42716) | Allow trusted symlinks beneath `CODEX_HOME` on macOS | ✅ Closed | New `allow_symlinked_codex_home` setting lets writable roots traverse symlinks under `CODEX_HOME` when explicitly enabled. |
| [#42677](https://github.com/openai/codex/pull/42677) | Narrow async user message guidance | ✅ Closed | `send_message_to_user_async` guidance tightened to focus on critical blockers and direction-changing findings only. |
| [#42676](https://github.com/openai/codex/pull/42676) | Add WebRTC negotiation to the voice host | ✅ Closed | New helpers for WebRTC offer/answer exchange and ordered `oai-events` data channel readiness; supports UDP and TCP candidates. |
| [#42652](https://github.com/openai/codex/pull/42652) | Add managed worktrees to `codex exec` | ✅ Closed | New experimental `worktrees` feature with `--worktree` flag; each session runs in a managed Git worktree. |
| [#42640](https://github.com/openai/codex/pull/42640) | Harden TUI parsing of assistant markup | ✅ Closed | Shared parser now handles quoted/unquoted attributes, embedded braces, escaped quotes, and malformed input consistently across Git receipts and code comments. |

---

## 5. Feature Request Trends

- **Cross-provider history continuity:** Users want local conversation history preserved when switching between ChatGPT and Codex accounts/providers (#20004, #40314).
- **Transparent-background image generation:** GPT Image 2's `background: "transparent"` output format is not exposed in the built-in image tool (#40572).
- **Manual project reordering documentation:** Sidebar project drag-to-reorder works but is undocumented (#38259).
- **Reconsideration workflow for rejected approvals:** Windows users report `/approve` being unavailable after automated security rejections, with no clear manual escalation path (#42751).
- **Local STDIO MCP server stability:** Idle MCP servers on Windows can exhaust the Tokio blocking pool, suggesting a need for better lifecycle management (#42740).
- **Scheduled task focus management:** Automated scheduled runs are stealing foreground focus and duplicating payloads on macOS (#42734, #42016).

---

## 6. Developer Pain Points

1. **Windows platform instability** — The single largest pain cluster: project creation failures under WSL (#41463), floating pet input (#41465), app launch failures after updates (#42501), statusline git display bugs (#23968), and MCP pool exhaustion (#42740). Windows users are disproportionately affected.

2. **Memory and performance regressions** — The 172 GB memory runaway on macOS Computer Use (#26738) and quadratic `thread/resume` scaling (#38787) point to resource-management issues that degrade long-running workflows.

3. **SDK reliability gaps** — The Python SDK dropping early `turn/completed` notifications (#41078) creates indefinite hangs, a critical issue for programmatic users.

4. **Model and auth fragility** — Mid-conversation model switches breaking encryption (#17541), and model deprecation (gpt-daybreak-blue unsupported while gpt-5.6-sol works) (#39441) cause session loss and confusion.

5. **Remote / mobile experience** — iOS Remote timeouts on long sessions with no retry path (#28480), and quadratic resume times (#38787), make remote steering unreliable for power users.

6. **MCP tool discovery degradation** — GPT-5.6 Code Mode dropping `tool_search` (#32101) reduces deferred MCP discoverability, impacting users who rely on dynamic tool registration.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest | 2026-09-04

### 1. Today's Highlights
A new nightly build, v0.60.0, was released today focusing on stability fixes for MCP policies and shell command handling. The development team also addressed critical bugs regarding session resumption and agent state management to improve the reliability of interactive workflows.

### 2. Releases
**v0.60.0-nightly.20260904.g87a9c71d5**
*   **MCP OAuth Flow**: Enforced RFC 9207 issuer identification for better security.
*   **Version Bump**: Automated release process updated to the latest nightly build.

### 3. Hot Issues
1.  **[P1] Subagent Recovery Bug (#22323)**: A critical bug where the `codebase_investigator` incorrectly reports "GOAL" success after hitting MAX_TURNS, masking interruptions.
2.  **[P1] Generalist Agent Hangs (#21409)**: Users report the agent hanging indefinitely, particularly when deferring to sub-agents or performing simple folder operations.
3.  **[P1] Shell Command "Waiting Input" Hang (#25166)**: CLI commands complete successfully in the background but the UI remains stuck in an "Awaiting user input" state.
4.  **[P1] Browser Agent Wayland Failure (#21983)**: The browser subagent fails specifically when running on Wayland display servers.
5.  **[P1] Session Deletion on Immediate Exit (#29198)**: Resuming a session and exiting immediately without interaction deletes the session history entirely.
6.  **[P2] Auto Memory Inbox Patches (#26523)**: Invalid or malformed patches are silently skipped, creating data inconsistency in the memory inbox.
7.  **[P2] Auto Memory Retry Loops (#26522)**: The system retries low-signal sessions indefinitely, consuming resources.
8.  **[P2] Shell Command Execution Stuck (#25166)**: Shell commands often get stuck showing "Waiting input" even after the command has finished.
9.  **[P2] MCP Policy Inconsistency (#29200)**: Runtime policy checks for MCP servers are inconsistent with CLI matching logic, leading to potential security misconfigurations.
10. **[P2] Git Wrapper Flag Handling (#29203)**: The security policy engine fails to strip shell wrappers that contain extra flags (e.g., `bash -c --verbose`), bypassing intended restrictions.

### 4. Key PR Progress
1.  **[PR #29201]**: **Fix Shell Command Confirmation Retries**. Resolves a bug where custom commands with multiple shell injections would cycle endlessly, preventing users from ever approving them.
2.  **[PR #29205]**: **MCP Prompt Encoding Fix**. Submit MCP prompt responses directly without JSON encoding to preserve embedded quotes and newlines accurately.
3.  **[PR #29211]**: **State Update Scheduler Fix**. Prevents state updates from being scheduled inside a state updater, fixing React rendering consistency issues.
4.  **[PR #29206]**: **Fix Resumed Session Orphaning**. Pass resumed session data through config initialization to prevent session files from being lost immediately after resume.
5.  **[PR #29209]**: **Background PID Parsing**. Skip non-numeric lines in background process logs to prevent `NaN` values from reaching the LLM content.
6.  **[PR #29208]**: **Agents.json Robustness**. Adds a fallback to empty data when `agents.json` is malformed (e.g., interrupted saves or sync conflicts), preventing crashes.
7.  **[PR #29196]**: **Release Bump**. Automated version bump to the latest nightly build.
8.  **[PR #29185]**: **Integration Test Deflaking**. Resolves flakiness in E2E tests for shell commands and file system interactions.
9.  **[PR #29172]**: **Gemini 3.8 Flash Model**. Adds support for `gemini-3.8-flash` and promotes it to the default flash model.
10. **[PR #29067]**: **Security Schema Cleanup**. Removes misleading security schemes and hardcoded credentials from the A2A server to reflect the unauthenticated nature of local development.

### 5. Feature Request Trends
*   **AST-Aware Codebase Mapping**: There is significant community interest in investigating AST (Abstract Syntax Tree) aware tools to improve file reading precision and reduce token noise.
*   **Native Bash Affinity**: Users are requesting to leverage the native bash capabilities of Gemini 3 models via Zero-Dependency OS Sandboxing.
*   **Browser Agent Resilience**: Enhancements are requested to handle session takeover and lock recovery automatically in the browser agent.
*   **Subagent Trajectory Visibility**: Users want the ability to share and inspect subagent trajectories via `/chat share` for better debugging.

### 6. Developer Pain Points
*   **State Management**: Frequent issues with state updates causing crashes or hangs, particularly during session resumption and command execution.
*   **Memory System Stability**: The Auto Memory system is a major pain point, with recurring bugs regarding patch validation, retry loops, and inbox handling.
*   **Agent Reliability**: High-priority bugs where agents (Generalist and Browser) hang or fail unexpectedly in specific environments (Wayland) or with specific tools.
*   **Security/Policy Gaps**: Weaknesses in shell wrapper detection and MCP policy enforcement allow potentially unsafe commands to slip through.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-09-04

## 1. Today's Highlights

GitHub Copilot CLI v1.0.83-5 ships Windows 11 taskbar live status cards and tightened sandboxing on macOS/Linux, while v1.0.83-4 added CIMD support for MCP OAuth and a smoother session-resume experience. The community is buzzing about a **~5× cost increase** from a BYOK prompt-caching regression and a persistent ACP auto-approve tool-call regression introduced in 1.0.81-1. Meanwhile, V8 heap OOM crashes on long resumed sessions remain an open concern.

---

## 2. Releases

### v1.0.83-5
- **Added:** Show running Copilot sessions in the Windows 11 taskbar with live hover status cards.
- **Improved:** Sandboxed commands on macOS and Linux can no longer reach host services; on macOS this also blocks 127.0.0.1 servers started by the command itself.

### v1.0.83-4
- **Added:** Client ID Metadata Document (CIMD) support for MCP OAuth sign-in.
- **Improved:** CLI now starts without the interrupted-session restore prompt by default; resuming large sessions keeps the input prompt responsive sooner.
- **Fixed:** Sandboxed file tools now read the same developer-tool permissions.

---

## 3. Hot Issues

| # | Title | Why It Matters | Reaction |
|---|-------|---------------|----------|
| [#2627](https://github.com/github/copilot-cli/issues/2627) | Configurable system prompt to reduce ~20,500 token overhead | A significant chunk of the 200K context window is consumed by fixed instructions users can't trim. | 👍 19 · 4 comments |
| [#4218](https://github.com/github/copilot-cli/issues/4218) | Configure the model pool used by Auto mode | Auto mode currently selects from every available model; users want cost/behavior control. | 👍 13 · 1 comment |
| [#3442](https://github.com/github/copilot-cli/issues/3442) | Remote sessions not enabled after v1.0.51 update | Enterprise users blocked from `/remote on` despite believing policies allow it. **Closed** | 👍 10 · 6 comments |
| [#232](https://github.com/github/copilot-cli/issues/232) | Add `--system-prompt` parameter for Copilot CLI | No way to pass system-level instructions outside repo-specific files. | 👍 10 · 5 comments |
| [#4537](https://github.com/github/copilot-cli/issues/4537) | ACP mode auto-approves tool calls — regression since 1.0.81-1 | Shell commands, file edits, and deletions execute unattended; no permission prompt or log entry. | 👍 2 · 1 comment |
| [#4720](https://github.com/github/copilot-cli/issues/4720) | BYOK silently disables prompt caching (~5× cost) | Every turn re-sends the full growing context at full price; `cached_tokens=0` confirmed. | 👍 0 · 0 comments |
| [#4699](https://github.com/github/copilot-cli/issues/4699) | OOM crash on long `--resume` sessions; dumps written to cwd | Repeated V8 heap OOM at 4 GiB cap; diagnostic reports clutter the user's working directory. | 👍 2 · 1 comment |
| [#4710](https://github.com/github/copilot-cli/issues/4710) | Runaway `copilot-file-search` thread while session is idle | A single CPU core pinned and unbounded log written under `~/.copilot/logs/` even during idle. | 👍 0 · 0 comments |
| [#4721](https://github.com/github/copilot-cli/issues/4721) | Canvas `open_canvas` args corrupted by CLI JSON-RPC bug | Model-parsed arguments get a trailing `}{}` suffix, producing malformed JSON and "Unexpected end of JSON input". | 👍 0 · 0 comments |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | MCP initialization regression: legacy `initialize` after modern `server/discover` | v1.0.81-1 breaks MCP stdio servers using the Python MCP SDK 2.0.0 dual-era runner. | 👍 3 · 6 comments |

---

## 4. Key PR Progress

| # | Title | Status |
|---|-------|--------|
| [#3771](https://github.com/github/copilot-cli/pull/3771) | Initial project setup | OPEN · No activity yet |

> **Note:** Only one PR was active in the last 24 hours. No merges or feature PRs landed in this window.

---

## 5. Feature Request Trends

1. **System-prompt configurability** — Two top-voted issues (#232, #2627) converge on the same theme: users want a way to inject or slim down system-level instructions to reclaim context tokens and control agent behavior at the CLI level.
2. **Auto-mode model pool control** — #4218 reflects a growing demand for cost predictability and behavior guardrails when Auto mode selects models.
3. **Enterprise marketplace allowlisting** — #4715 asks for the ability to block built-in Agent Plugin Marketplaces so orgs can enforce internal-only plugin sources.
4. **Remote session UX** — #3442 (now closed) highlights that enterprise remote-session activation is unclear; users want clearer enabling paths and configuration visibility.
5. **Terminal / UI polish** — #4707 (scrollbar copy bug) and #3194 (mouse-scroll input-history cycling) show demand for terminal rendering and keyboard/mouse interaction refinement.

---

## 6. Developer Pain Points

- **Token bloat from fixed system prompts** — The ~20,500-token system prompt plus ~8,500-token tool definitions consume ~10% of a 200K context window with no user override. This is the single most upvoted request.
- **Cost-regression bugs in new releases** — BYOK prompt-caching disabled (#4720) and ACP mode auto-approving without prompting (#4537) are both regressions that directly impact users' wallets and security posture.
- **Session resume instability** — OOM crashes (#4699), extension-load failures on large histories (#4717), and extremely slow resume with no loading UI (#4714) make long-running workflows unreliable.
- **MCP / extension fragility** — Legacy initialization regressions (#4525), hook-processor disposal on reconnect (#4590), and tool-call hangs after extension startup failures (#4670) signal that the MCP and plugin layers need stronger resilience.
- **Idle resource leaks** — A background `copilot-file-search` thread consuming CPU and disk indefinitely (#4710) points to lifecycle management gaps in the CLI's background worker pool.
- **JSON-RPC / serialization bugs** — Malformed arguments for canvas tools (#4721) and intermittent invocation-markup corruption (#4706) erode trust in tool-call reliability, especially with AI-generated issue reports (#4706) raising questions about correctness boundaries.
- **Enterprise visibility gaps** — Blocked plugin marketplaces (#4715), unclear remote-session enablement (#3442), and managed telemetry headers breaking OTEL export (#4669) show friction in governed deployments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

### **Kimi Code CLI Community Digest**
**Date:** 2026-09-04

---

#### 1. **Today's Highlights**
No new releases were published in the last 24 hours. However, the community is actively addressing critical stability issues, specifically regarding MCP timeouts and user interface customization. A notable open bug highlights persistent issues with terminal keybindings on Windows, preventing standard clipboard operations.

#### 2. **Releases**
*None*

#### 3. **Hot Issues**
*   **[OPEN] #2634 - Terminal Keybinding Failure (Windows Terminal + PowerShell)**
    *   **Impact:** Users running version `0.40.1` on Windows cannot use `Ctrl+V` to paste text in the CLI, rendering basic functionality difficult.
    *   **Details:** The issue suggests the keybindings for clipboard operations are not being recognized by the terminal environment.
    *   **Link:** [MoonshotAI/kimi-cli Issue #2634](https://github.com/MoonshotAI/kimi-cli/issues/2634)
*   **[CLOSED] #290 - OpenRouter Custom Model 401 Authentication Error**
    *   **Impact:** Users attempting to use custom models (e.g., `openai/gpt-5.1-codex`) via OpenRouter are receiving 401 Unauthorized errors.
    *   **Resolution:** This issue was closed, indicating a fix was implemented for authentication handling with external providers.
    *   **Link:** [MoonshotAI/kimi-cli Issue #290](https://github.com/MoonshotAI/kimi-cli/issues/290)
*   **[CLOSED] #1316 - MCP Timeout Causes Full CLI Failure**
    *   **Impact:** A single failed MCP connection causes the entire `kimi-cli` application to crash or become unresponsive.
    *   **Resolution:** This critical stability bug was resolved, likely improving the robustness of the integration layer.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1316](https://github.com/MoonshotAI/kimi-cli/issues/1316)
*   **[CLOSED] #1315 - Subagents Persisting After ESC**
    *   **Impact:** Long-running subagents continue to execute even after the user hits the ESC key to stop them.
    *   **Resolution:** The lifecycle management for background tasks was corrected to ensure they terminate immediately upon user cancellation.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1315](https://github.com/MoonshotAI/kimi-cli/issues/1315)
*   **[CLOSED] #1320 - Smart Arrow Key Navigation for Multiline Input**
    *   **Impact:** Navigation feels unintuitive when editing multiline text; Up/Down keys only cycle through history rather than moving the cursor.
    *   **Resolution:** The input handling logic was updated to distinguish between cursor navigation and history scrolling.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1320](https://github.com/MoonshotAI/kimi-cli/issues/1320)
*   **[CLOSED] #1319 - Local Skills Management Interface**
    *   **Impact:** Users lacked a standardized way to manage custom skills (e.g., listing, removing, or checking versions).
    *   **Resolution:** The CLI now supports better command-line tools for skills management, likely adding commands like `skills list` or `skills rm`.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1319](https://github.com/MoonshotAI/kimi-cli/issues/1319)
*   **[CLOSED] #1313 - Hooks System for Notifications**
    *   **Impact:** Users missed notifications during long-running tasks (like large code analysis) because the CLI lacks a hooks system.
    *   **Resolution:** A notification system was added to alert users when the agent requires attention or completes specific lifecycle events.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1313](https://github.com/MoonshotAI/kimi-cli/issues/1313)

#### 4. **Key PR Progress**
*None*

#### 5. **Feature Request Trends**
*   **Input Navigation Logic:** A recurring request involves refining the interaction model for multiline input to separate cursor movement from command history navigation.
*   **Process Control:** Users have requested better hooks and lifecycle management to ensure that background tasks (subagents) stop immediately when requested, preventing resource waste.
*   **Skill Management:** The community has pushed for a robust CLI interface to manage local skills, moving away from ad-hoc file system interactions toward standardized commands.

#### 6. **Developer Pain Points**
*   **Windows Terminal Compatibility:** The most immediate friction point for Windows users is the failure of standard terminal shortcuts (like paste) to work correctly.
*   **External Provider Instability:** Reliability issues when connecting to external AI providers (like OpenRouter) can cause the entire application to hang, rather than failing gracefully.
*   **Task Lifecycle Gaps:** The inability to cleanly stop background processes (Subagents) creates a sense of lack of control for developers running long analyses.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-09-04

## 1. Today's Highlights

OpenCode 1.18.x continues to see active bug-fixing around session stability and bootstrap hangs, while OpenCode 2.0 development picks up momentum with a clickable subagent navigation feature and BYOK routing improvements. The community is also pushing for better TUI plugin extensibility (persistent footer hooks, Kitty key events) and a long-requested Bun runtime upgrade to 1.4.1 has seen multiple converging PRs land today.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Reaction |
|---|-------|----------|
| [#18969](https://github.com/anomalyco/opencode/issues/18969) | **TUI footer items plugin hook for persistent status display** | 6 👍 · 12 comments · Open since Mar 2026 | The only existing TUI plugin hook (`tui.toast.show`) produces disruptive ephemeral popups. Plugins like `token-tracker` and `tps-meter` work around this with toast spam. A persistent footer hook would formalize status display for the plugin ecosystem. |
| [#25931](https://github.com/anomalyco/opencode/issues/25931) | **Chat history scroll regression — trackpad/keyboard only scrolls input history** | 8 👍 · Closed | A regression broke trackpad/keyboard scrolling through conversation history, now only cycling command history. High upvote count signals broad impact on TUI power users. |
| [#40822](https://github.com/anomalyco/opencode/issues/40822) | **opencode.ai blocked by security providers** | 6 👍 · 1 comment · Open | Domain flagged by SOCRadar, URLhaus, ZeroCERT, and Gridinsoft on VirusTotal. This affects enterprise deployments and zero-trust environments; unlikely to resolve without a public re-review campaign. |
| [#47279](https://github.com/anomalyco/opencode/issues/47279) | **Bootstrap blocks first POST /session for minutes — no timeout on models.opencode.ai fetch** | Closed | Headless `opencode serve` stalls indefinitely on bootstrap when the models endpoint hangs. No timeout is set on the HTTP fetch, and plugin dependency installation compounds the block. Relevant to anyone running OpenCode in CI/CD or containerized environments. |
| [#44684](https://github.com/anomalyco/opencode/issues/44684) | **Plugin installer times out fetching public deps from registry.npmjs.org** | Open · 2 comments | Private Verdaccio-registered plugins work, but any plugin with a public npm dependency causes `NpmInstallFailedError` and a silent boot hang. Affects users in restricted-network environments. |
| [#46166](https://github.com/anomalyco/opencode/issues/46166) | **Instance service init has no timeout and can hang bootstrap indefinitely** | Open · 1 comment | `bootstrap.ts` calls `init()` on LSP, share, format, VCS, snapshot, and project services inside an unbounded-concurrency `Effect.forEach` with no timeout. One slow service blocks all others. |
| [#47120](https://github.com/anomalyco/opencode/issues/47120) | **Zen lists muse-spark-1.3-contributor-free but CLI omits it and returns UnknownError** | Open · 5 comments | Model advertised through the authenticated endpoint is absent from CLI discovery. Tied to the broader `provider-catalog` work in #40. Indicates a gap between Zen's model registry and the CLI's local catalog. |
| [#47142](https://github.com/anomalyco/opencode/issues/47142) | **Overall Usage Percentage Calculation on Dashboard is wrong** | Open · 3 comments | The dashboard sums individual model percentages (each with different quota limits) instead of computing a weighted total, inflating the "Total" to 88.7% when the real usage is much lower. |
| [#47274](https://github.com/anomalyco/opencode/issues/47274) | **Phantom tool call in extended-thinking turn permanently wedges the session** | Open · 1 comment | When a model calls a nonexistent tool during extended thinking, the `invalid` tool part is stored and replayed on every continuation, causing Anthropic to reject the message. Session is permanently broken until manual reset. |
| [#47080](https://github.com/anomalyco/opencode/issues/47080) | **`opencode run` resolves session dir from `$PWD` instead of process `cwd`** | Open · 2 comments | Spawned subprocesses inherit a stale `PWD` env var while the actual cwd is different. This breaks headless invocations from Node/Python spawn APIs that set `cwd` without updating `PWD`. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#47260](https://github.com/anomalyco/opencode/pull/47260) | **fix(tui): restore agent and model selection parity** | ✅ Closed | Restores V1 agent switching behavior (remember per-agent model/variant within a session) while retaining V2 session-local drafts. Falls back to available models instead of blocking sessions. |
| [#44946](https://github.com/anomalyco/opencode/pull/44946) | **chore: bump embedded Bun to 1.4.1** | Open | Bumps the pinned `packageManager` from `bun@1.3.14` to `bun@1.4.1`. Drives CI setup-bun action and `bun build` outputs. Companion to issue #44945. |
| [#47271](https://github.com/anomalyco/opencode/pull/47271) | **chore: upgrade Bun to 1.4.1 and re-enable bytecode** | ✅ Closed | Upgrades repo, release builder, embedded CLI runtime, and container pins to Bun 1.4.1. Re-enables CLI bytecode compilation using Bun's new portable cross-compiled bytecode support. Upgrades `@types/bun` to 1.4.0. |
| [#47276](https://github.com/anomalyco/opencode/pull/47276) | **fix(session): drop phantom invalid tool calls when replaying messages** | Open | Closes #47274. Filters out `invalid` tool parts during message replay so extended-thinking sessions aren't wedged by a single bad model tool call. |
| [#47264](https://github.com/anomalyco/opencode/pull/47264) | **fix(core): preserve original files after failed undo** | Open | Undo can partially restore files and fail before persisting, leaving the working tree in a corrupted state. This fix ensures originals are preserved on undo failure. Discovered during fault-testing of #47029. |
| [#47282](https://github.com/anomalyco/opencode/pull/47282) | **fix(ci): bound Linux dependency downloads** | ✅ Closed | Caps APT HTTP waits at 15s and each dependency-install step at 10 minutes. Stale APT index updates now fail loudly instead of silently proceeding. Covers ffmpeg and Playwright system deps too. |
| [#47281](https://github.com/anomalyco/opencode/pull/47281) | **fix(ui): drive ResizeHandle with pointer capture** | Open | Fixes the desktop app bug where dragging the chat/review divider silently does nothing. Uses pointer capture to ensure the handle responds to mouse drag even when the pointer moves fast. |
| [#47272](https://github.com/anomalyco/opencode/pull/47272) | **fix(tui): avoid disconnection error on terminal exit** | ✅ Closed | Prevents the red "Terminal disconnected" flash when an embedded terminal exits normally. The PTY websocket sends `exited` before the close event; the TUI now handles the `exited` event gracefully. |
| [#47269](https://github.com/anomalyco/opencode/pull/47269) | **fix(console): align file tool disclosures with Patch** | ✅ Closed | Edit, Write, and Patch now share the same non-collapsible tool header (13px title / 16px line height + file count). File rows are shown immediately instead of hidden behind a second disclosure. |
| [#43419](https://github.com/anomalyco/opencode/pull/43419) | **feat(tui): add opt-in Kitty key release events** | Open | Adds an opt-in `kitty_keyboard.events` setting to `tui.json`. When enabled, OpenCode requests Kitty's key-release event protocol, enabling more precise keyboard handling in the Kitty terminal emulator. |

---

## 5. Feature Request Trends

- **Persistent TUI status hooks** — Issue #18969 and PR #43419 both point to a demand for richer, non-disruptive TUI plugin APIs (footer items, terminal-specific keyboard protocols) rather than toast-based workarounds.
- **Developer-experience parity with the shipped binary** — Issue #47283 and PR #43052 request a first-class `opencode_d` wrapper so contributors can run from source identically to the released package, closing the gap between dev and production flows.
- **Client-side Programmatic Tool Calling (PTC)** — PR #9833 continues to push for server-side-equivalent PTC on the client, following Claude Code's pattern to save context and reduce round-trips.
- **BYOK routing through provider connections** — PR #47266 migrates BYOK generation proxying out of global middleware into the shared inference handler, enabling workspace-scoped provider connections.
- **Extended-thinking robustness** — Issue #47274 and its fix in #47276 reflect growing adoption of extended-thinking turns, exposing edge cases around invalid tool calls that need graceful handling.
- **QR-based remote pairing** — Issue #47241 (closed) added a `--qr` flag to `opencode serve`, completing the mobile-pairing flow started in #46098 and #39628.

---

## 6. Developer Pain Points

1. **Bootstrap hangs with no timeout** — Multiple issues (#47279, #44684, #46166) converge on the same theme: bootstrap can stall indefinitely due to unbounded HTTP fetches, missing plugin dep timeouts, and unbounded service init. The community needs hardened timeouts across the boot path.
2. **Headless / programmatic invocations are fragile** — Issues #47080 ($PWD vs cwd) and #47249 (models not responding) indicate that spawning OpenCode as a subprocess remains error-prone, especially around environment inheritance and model availability.
3. **Session-wedging from invalid tool calls** — Issue #47274 shows that a single phantom tool call during extended thinking can irreversibly break a session. Users need defensive handling at the message-replay layer.
4. **Dashboard billing math is misleading** — Issue #47142 highlights that the usage dashboard sums raw percentages across models with different quotas, producing an inflated "Total." This erodes trust in the billing UI.
5. **Enterprise / security-provider blocks** — Issue #40822 remains unresolved; `opencode.ai` is flagged by multiple security vendors, creating friction for organizational deployments that rely on URL allowlists.
6. **Model catalog drift between Zen and CLI** — Issue #47120 reveals that models advertised in Zen are not discoverable in the CLI, pointing to a sync gap in the provider-catalog system that needs attention as the model catalog expands.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest: 2026-09-04

## 1. Today's Highlights
The Pi ecosystem released **v0.85.0** with significant stability improvements for Anthropic thinking modes and a new **OrcaRouter** provider. The update focuses on resilience, introducing persistent effort tracking for Claude models and a robust new first-class gateway for model discovery. Concurrently, the project is aggressively addressing UI/UX friction, closing multiple issues regarding full-screen scrolling, skill conflict context, and Windows process management.

## 2. Releases
**v0.85.0**
*   **Persistent Claude Thinking:** Supported Anthropic transports now preserve per-turn effort and recover safely from signed-thinking mismatches (see [Model Configuration](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration)).
*   *Note:* This release also introduced a static import dependency issue regarding `@earendil-works/pi-server` in the CLI bundle, which has been flagged for immediate attention.

## 3. Hot Issues
1.  **Amazon Bedrock Mantle Support** (#5363)
    *   *Why it matters:* Users want native support for Bedrock Mantle models, which use an OpenAI-compatible API incompatible with the existing Converse API.
    *   *Status:* Open, 17 comments.
2.  **Fullscreen TUI Scrolling Lag** (#9052)
    *   *Why it matters:* A high-impact UX regression where wheel scrolling in fullscreen mode is 3x slower than regular mode.
    *   *Status:* Open, 4 comments.
3.  **Silent Context Loss in HTML Export** (#8896)
    *   *Why it matters:* The `/export HTML` command silently drops custom messages marked `display: false`, breaking session history integrity.
    *   *Status:* Open, 4 comments.
4.  **Dependency-Free Pi-AI** (#9128)
    *   *Why it matters:* Critical for browser-based deployment; users want a lightweight version of Pi-AI stripped of complex provider SDKs.
    *   *Status:* Open, 3 comments.
5.  **GPT-6 Astra Support** (#9133)
    *   *Why it matters:* Users want the latest OpenAI model to appear in the selection dropdown, as it is already available via CLI.
    *   *Status:* Closed (requested feature).
6.  **OpenRouter Session Affinity** (#9102)
    *   *Why it matters:* OpenRouter relies on `x-session-id` for sticky routing; hardcoding `sendSessionAffinityHeaders` off breaks this specific provider's functionality.
    *   *Status:* Closed (bug).
7.  **Windows Bash Timeout Orphans** (#9129)
    *   *Why it matters:* A critical reliability issue where timeouts on Windows leave pipeline processes orphaned, preventing proper session cleanup.
    *   *Status:* Closed (bug).
8.  **Anthropic Replay API Error** (#8576)
    *   *Why it matters:* A specific bug where two thinking blocks in a single turn cause a 400 error from Anthropic's API.
    *   *Status:* Closed (bug).
9.  **Underterminated Bracketed Paste** (#9119)
    *   *Why it matters:* A bug that can permanently disable input over SSH/tmux when pasting certain text sequences.
    *   *Status:* Closed (bug).
10. **Agent Infinite Loop Recovery** (#9104)
    *   *Why it matters:* An agent can get stuck repeating the same response indefinitely; users want better recovery mechanisms.
    *   *Status:* Closed (bug).

## 4. Key PR Progress
1.  **feat(ai): Add OrcaRouter** (#9135)
    *   Adds OrcaRouter as a first-class provider with live catalog model discovery and adaptive routing.
2.  **feat: Durable Object SQLite Session Backend** (#9131)
    *   Wraps Cloudflare Durable Objects to provide a Workers-safe SQLite session backend (`pi-session-backend-sqlite-durable`).
3.  **System Prompt Refactor** (#8998)
    *   A major architectural change enabling partial updates to the system prompt mid-session, supporting dynamic tool changes without wiping context.
4.  **feat(tui): Collapsible Work Process** (#9121)
    *   Adds `alt+o` to collapse intermediate thinking blocks and tool executions into a summary line.
5.  **fix(ai): Omit reasoning effort for xAI Grok Build** (#8422)
    *   Fixes HTTP 400 errors for `grok-build-0.1` by removing unsupported `reasoning.effort` parameters.
6.  **fix(coding-agent): HTML Export Context** (#9110)
    *   Fixes the silent dropping of `display:false` custom messages in HTML exports.
7.  **feat(ai,coding-agent): Meta Provider** (#9096)
    *   Adds native support for Meta's Muse subscription API with OAuth.
8.  **feat(ai): Add mid-conversation system messages** (#9116)
    *   First layer of the system prompt refactor, allowing dynamic updates to system messages during a session.
9.  **fix(coding-agent): realpath extension entries** (#8112)
    *   Fixes extension loading issues caused by symlinks not being resolved correctly by Jiti's resolver.
10. **fix(coding-agent): Scan past non-EXIF APP1 segments** (#8616)
    *   Fixes image processing for JPEGs where XMP data precedes EXIF data.

## 5. Feature Request Trends
*   **Multi-Cloud Provider Expansion:** There is a strong demand for additional first-class providers, specifically **OVHcloud**, **Scaleway**, **Amazon Bedrock Mantle**, and **Meta (Muse)**.
*   **Browser/Edge Deployment:** Users are actively requesting a "dependency-free" or stripped-down version of Pi-AI suitable for running in browsers without the heavy weight of provider SDKs.
*   **Advanced Model Support:** There is a push to include newer models like **GPT-6 Astra** and **OpenAI async tool calling** in the model catalog.

## 6. Developer Pain Points
*   **TUI Responsiveness:** The fullscreen mode scrolling performance is a primary complaint, alongside the "jumpy" overlay when jumping to the latest message.
*   **Process Management:** Windows users are reporting significant frustration with process cleanup during timeouts.
*   **Session Persistence:** Issues with session IDs colliding due to directory encoding (e.g., `tenant-a/project` vs `tenant/a-project`) and the loss of context during HTML exports are causing data integrity concerns.
*   **Extension Stability:** There is a recurring theme of extension crashes (e.g., rendering exceptions or script errors) bringing down the entire TUI session.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-09-04

## 1. Today's Highlights

Today's activity centers on naming-session lifecycle design (Part 4B, #11015), web-shell turn-navigation Phase 2 (#11020), and worktree cleanup scoping (#11024), signaling active progress on channel-based session management. Meanwhile, two SDK release requests (#11022) and a CI audit redesign (#11005) highlight ongoing reliability and packaging improvements.

## 2. Releases

No new releases were published in the last 24 hours. The milestone issue #11023 (#10000 — What 10,000 issues and PRs say about Qwen Code) was closed today as a duplicate celebration post.

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| #11024 | Worktree session lifecycle cleanup — Part 4A residual findings | Tracking orphan-reap cleanup and design gaps left out of Part 4B; touches core session durability. [Link](https://github.com/QwenLM/qwen-code/issues/11024) |
| #11022 | Publish new `@qwen-code/sdk` with managed-memory & prompt-cache fixes | SDK consumers are blocked from merged fixes (#6941, #8464) that affect memory reporting and prompt-cache behavior. [Link](https://github.com/QwenLM/qwen-code/issues/11022) |
| #7167 | Fleet Shepherd Dashboard | Auto-maintained CI/CD bot-fleet tracker; last tick 2026-09-04T12:37:49Z with 0 syncs/dispatches — useful for monitoring fleet health. [Link](https://github.com/QwenLM/qwen-code/issues/7167) |
| #11023 | 🎉 #10000 — What 10,000 issues and PRs say | Milestone celebration issue, now closed as duplicate. [Link](https://github.com/QwenLM/qwen-code/issues/11023) |

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| #11015 | `docs(channels): Add named sessions Part 4B design` | Enables `/clear`, `/new`, `/reset` for worktree-isolated tasks; resetting preserves the daemon-attested worktree intact. [Link](https://github.com/QwenLM/qwen-code/pull/11015) |
| #11020 | `docs(web-shell): add global turn navigation Phase 2 design` | Bounded client-side turn-index store bridging Phase 1 daemon/SDK protocol and Phase 3 virtualized rail UI. [Link](https://github.com/QwenLM/qwen-code/pull/11020) |
| #10999 | `feat(core): configure model reasoning capabilities` | Declarative reasoning config across provider model definitions, ACP, session restoration, workspace previews, TUI effort controls, and OpenAI-compatible output. [Link](https://github.com/QwenLM/qwen-code/pull/10999) |
| #10916 | `fix(core): halt turns on repeated identical tool errors` | Fingerprint-based loop detector halts turns when the same tool-error payload repeats, preventing infinite error loops. [Link](https://github.com/QwenLM/qwen-code/pull/10916) |
| #10802 | `fix(goal): pause the Goal on every user-cancel path` | Fixes cases where a Goal batch with partial tool completion didn't pause on user cancellation. [Link](https://github.com/QwenLM/qwen-code/pull/10802) |
| #10800 | `feat(ipc): keep the peer inbox reachable` | Cross-session messaging inbox now tries multiple candidate paths and refuses to take addresses already in use by live sessions. [Link](https://github.com/QwenLM/qwen-code/pull/10800) |
| #10962 | `feat(web-shell): bridge a browser-granted local directory into a session` | Lets browser users hand a local directory to a remote-run daemon — critical for cloud/container-hosted setups. [Link](https://github.com/QwenLM/qwen-code/pull/10962) |
| #11005 | `ci: schedule dependency audits and use native secret protection` | Moves CVE audits from PR/main-push to daily 02:30 UTC with retry-on-error logic; reduces noise on individual PRs. [Link](https://github.com/QwenLM/qwen-code/pull/11005) |
| #8927 | `feat(channels): bound session lifetime with sessionRotation` | Per-channel `sessionRotation` with `maxTurns`/`maxAge` bounds — rotates to a fresh session when limits are exceeded. [Link](https://github.com/QwenLM/qwen-code/pull/8927) |
| #10347 | `feat(core): auto-retry transient network errors (EOF)` | Wraps low-level EOF/network failures in retryable transport errors instead of fail-fast 4xx client errors. [Link](https://github.com/QwenLM/qwen-code/pull/10347) |

## 5. Feature Request Trends

- **Session & channel lifecycle management** — The strongest signal today: Part 4A/4B worktree cleanup (#11024, #11015), session rotation (#8927), and IPC inbox reliability (#10800) all point to a sustained push for robust multi-session orchestration.
- **Remote / browser-based development** — PR #10962 (browser-granted directory bridging) and the web-shell turn-navigation design (#11020) reflect growing demand for cloud-hosted agent workflows.
- **SDK packaging cadence** — Issue #11022 shows repeated community demand for timely `@qwen-code/sdk` releases that include merged fixes.
- **Model reasoning controls** — PR #10999's declarative reasoning-capability config indicates expanding interest in fine-grained model capability toggles.

## 6. Developer Pain Points

- **Shared CI pool noise** — Latency probes on the shared E2E pool measure host contention rather than daemon performance (#11004); developers want dedicated-environment measurements.
- **Stale SDK releases** — Fixes merged to `main` (managed-memory reporting, prompt-cache clearing) aren't available to SDK users until a new release ships (#11022).
- **Guard holes in lint/CI** — Round-2 review of #10756 exposed serializer and property-comparison gaps that needed closure (#10919).
- **Startup crashes on unwritable config dirs** — Root-owned leftovers or read-only home dirs previously crashed CLI startup; now patched (#10455).
- **Registry-side audit failures masquerading as CVEs** — `npm audit` endpoint errors were folded into the same red status as real advisories, causing false alarms; now retried (#11006).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

### **DeepSeek TUI Community Digest**
**Date:** 2026-09-04  
**Repo:** Hmbown/DeepSeek-TUI

---

### **1. Today's Highlights**
*   **Commit Optimization:** A critical PR (#5870) was merged to fix atomic commit splitting, ensuring unrelated changes are ordered by dependency to prevent cycles.
*   **Provider Configuration:** The community requested and received a new `[reasoning_only]` configuration section to make retry logic for reasoning models user-configurable.
*   **Debugging Support:** A fix was deployed to preserve task origins in shell job snapshots, resolving data mapping issues in multi-session environments.

---

### **2. Releases**
*   **No new releases detected** in the last 24 hours.

---

### **3. Hot Issues**
*(Selected based on engagement, complexity, and impact)*

*   **#5860: [enhancement] Continuous Self-Learning from Dialog (Automatic Skill Evolution)**
    *   **Why it matters:** Addresses a core limitation of the current Skills System where knowledge is static. The author proposes an automated mechanism to extract patterns from repeated problem-solving.
    *   **Reaction:** The issue highlights a desire for the agent to evolve autonomously rather than relying on manual `SKILL.md` updates.
*   **#5871: [bug] To-do list history clutters transcript**
    *   **Why it matters:** A user-reported UX bug where `todo_write` tool calls create permanent "push-down history" cards that cannot be cleared without losing conversation context.
    *   **Reaction:** The issue suggests a need for better state management in the transcript display to prevent UI bloat.

---

### **4. Key PR Progress**
*(Selected based on complexity and feature value)*

*   **#5870: Fix: Tools — atomic commit splitting**
    *   **Description:** Addresses dependency ordering in atomic commits and rejects cycles. This ensures cleaner Git histories and more reliable tool execution workflows.
*   **#5869: fix(shell): preserve task origin in job snapshots**
    *   **Description:** Adds stable origin identifiers to shell job snapshots. This prevents "ghost" error outputs from older jobs from being projected onto newer tool cards.
*   **#5868: feat: send x-opencode-session header**
    *   **Description:** Enables support for the OpenCode Go/Zen providers by sending the required `\x-opencode-session` header, optimizing prompt caching and traffic attribution.
*   **#5867: feat(config): add [reasoning_only] section**
    *   **Description:** Moves the `MAX_REASONING_ONLY_REPROMPTS` constant from hardcoded logic to a user-configurable `[reasoning_only]` section in the config file.

---

### **5. Feature Request Trends**
*   **Autonomous Skill Evolution:** There is a significant push for the Skills System to become dynamic, allowing the AI to automatically recognize and learn from recurring patterns without manual intervention.
*   **Configurable Reasoning Logic:** Users are demanding granular control over how the system handles "reasoning-only" responses (specifically retry counts) through configuration files.

---

### **6. Developer Pain Points**
*   **Transcript Bloat:** The accumulation of static snapshots (To-do lists, shell outputs) makes the conversation history difficult to read and navigate.
*   **Context Preservation:** Developers struggle when clearing state (like a to-do list) inadvertently deletes or obscures valuable context in the transcript.

</details>