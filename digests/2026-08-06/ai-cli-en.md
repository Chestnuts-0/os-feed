# AI CLI Tools Community Digest 2026-08-06

> Generated: 2026-08-06 01:29 UTC | Tools covered: 9

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



# Cross-Tool Comparison Report — AI CLI Ecosystem
**Date: 2026-08-06**

---

## 1. Ecosystem Overview

The AI CLI tools landscape in August 2026 is characterized by rapid iteration, with most major players shipping daily or weekly builds. The ecosystem has moved past the "experimental" phase into active stability-hardening, with all eight tracked tools reporting significant bug-fix velocity. MCP integration has emerged as a universal battleground—every major tool faces community friction around server discovery, lifecycle management, and policy enforcement. Subagent orchestration reliability and terminal rendering stability represent the two largest remaining quality gaps across the board.

---

## 2. Activity Comparison

| Tool | Hot Issues | Key PRs (24h) | Release Status | Release Type |
|------|-----------|---------------|----------------|--------------|
| **Claude Code** | 11 | 5 | ✅ v2.1.223 | Stable |
| **OpenAI Codex** | 10 | 10 | ✅ v0.146.1 + α series | Stable + Alpha |
| **Gemini CLI** | 10 | 11 | ✅ v0.55.0-nightly | Nightly |
| **GitHub Copilot CLI** | 10 | 0 | 🔄 v1.0.79-pre | Pre-release train |
| **Kimi Code CLI** | 3 | 3 | ⏸ None | — |
| **OpenCode** | 10 | 11 | ✅ v1.18.14 | Stable |
| **Pi** | 10 | 12 | ⏸ None | — |
| **Qwen Code** | 10 | 10 | ✅ v0.21.6 + Desktop v0.1.0 | Stable + Desktop |
| **DeepSeek TUI** | 4 | 9 | 🔄 v0.9.4 (77 commits ahead) | Release train |

**Activity leaders by PR velocity:** Pi (12), Gemini CLI (11), OpenCode (11), Codex (10), Qwen Code (10).

**Highest issue engagement:** Codex #9203 (373 👍 for `/undo`), Claude Code #66504 (46 👍 for opt-in session URLs), OpenCode #16017 (126 👍 for Go-plan usage API), OpenCode #11176 (134 👍 for VS Code extension).

---

## 3. Shared Feature Directions

| Theme | Tools Involved | Specific Needs |
|-------|---------------|----------------|
| **MCP robustness & compatibility** | Claude Code, Codex, Copilot CLI, Gemini CLI, OpenCode, Qwen Code, DeepSeek TUI | Graceful fallback for non-compliant servers, tool discovery across threads, enterprise policy parity with editor extensions, SSE timeout contracts |
| **Subagent / multi-agent reliability** | Gemini CLI, Claude Code, Codex, Copilot CLI, DeepSeek TUI | Turn-limit failure surfacing (not silent success), resume-from-checkpoint for interrupted agents, security hook parity across agent types, parallel-agent status visibility |
| **Session persistence & portability** | Claude Code, Codex, OpenCode, Pi | Cross-session memory, session-URL injection opt-in, conversation export, state following the project (not the launch path) |
| **Terminal / TUI rendering stability** | All tools | Alt-screen opt-out, OSC 8 hyperlink handling, WSL/ConPTY text duplication, tmux compatibility, mouse-capture conflicts |
| **Model flexibility & BYOM** | Codex, Gemini CLI, Copilot CLI, Pi, Qwen Code | In-session model switching, provider auto-discovery (LAN/mDNS), capability declaration for custom endpoints, reasoning-effort-per-thread control |
| **Security classifier accuracy** | Codex, Qwen Code, Gemini CLI | False positives on cybersecurity research workflows, read-only shell bypass via edge-case syntax, credential sanitization in status payloads |
| **Desktop app maturity** | Claude Code, Codex, Qwen Code | GPU process crash resilience, platform-specific auth flows (macOS vs. Windows vs. Linux), memory leak prevention in embedded browser/MCP layers |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Qwen Code | OpenCode | Pi | DeepSeek TUI | Kimi Code CLI |
|-----------|------------|--------------|------------|-------------|-----------|----------|-----|--------------|---------------|
| **Primary focus** | Enterprise/organizational control (marketplace restrictions, org-level policies) | Open-ended agent autonomy, cyber-specialty models | Native OS integration, AST-aware navigation | GitHub-ecosystem tight integration (worktrees, canvas, PRs) | Voice ACP, Web Shell, Tauri desktop | Developer workflow & payments (crypto, Go-plan API) | Multimodal input, per-directory context layers | Runtime API completeness, ACP tool-call execution | Custom OpenAI-compatible endpoints, error discoverability |
| **Target user** | Org-administered teams, security-conscious enterprises | Power users, cyber-research workflows | Linux/GCP enterprise, open-weight model advocates | GitHub-centric teams, enterprise cloud users | Chinese-language/voice-first workflows, self-hosted | Budget-conscious devs, multi-provider users | Extension/embedding developers, GCP Vertex users | DeepSeek/GLM multi-provider users, ACP integrators | Custom API endpoint users, voice-hands-free scenarios |
| **Technical approach** | Bun runtime, managed marketplace, forked-skill warnings | Rust, Guardian safety layer, compaction v2 | Bash affinity, POSIX tool chaining, seatbelt profiles | TypeScript, worktree-native, canvas-based sessions | Tauri desktop, Ink TUI renderer, tmux-backed sub-agents | Go, local LAN discovery, mDNS/Bonjour | Node.js, event-bus extensions, scoped model catalogs | Rust, ratatui TUI, HTTP Runtime API boundary | Node.js, ACP client protocol, graceful media degradation |
| **Key differentiator** | Org-level marketplace allow/block + usage-accounting transparency | Cyber-model circuit-breaker, legacy rollback migration | Model-capacity auto-fallback (429 → Flash), zero-dependency sandbox | Worktree-native sessions, canvas auth persistence | Live Voice (macOS), audio bridge, Feishu cards | Crypto payments, VS Code extension demand | Per-directory `AGENTS.override.md`, line-range `@file` references | Runtime API covering memory/MCP/goals/skills in one HTTP surface | Actionable error messages naming exact config fix needed |

---

## 5. Community Momentum & Maturity

**Rapidly iterating (high PR velocity, active release trains):**
- **Pi** — 12 PRs in 24h with a mix of closed fixes and open features; strong signal of active development velocity.
- **Gemini CLI** — 11 PRs including P1 hangs, tool-argument robustness, and OAuth fixes; nightly cadence indicates aggressive iteration.
- **OpenCode** — 11 PRs covering data migration, session export, workspace flows, and MCP hardening; maturing fast with clear feature growth.
- **Codex** — 10 PRs with a stable release plus 5 alpha builds in 24h; classic high-velocity open-source cadence.
- **Qwen Code** — 10 PRs alongside a desktop launch and nightly; transitioning from CLI-only to multi-form-factor.

**Steady-state with focused fixes:**
- **Claude Code** — 5 PRs (mostly bug fixes); release cadence is measured, community friction centers on session accounting and platform bugs.
- **DeepSeek TUI** — 9 PRs but 4 hot issues; the v0.9.4 release train is 77 commits ahead, suggesting a consolidation phase.

**Lower visibility / niche:**
- **Kimi Code CLI** — 3 PRs, 3 issues; small but responsive community, focused on error discoverability and data-integrity bugs.
- **Copilot CLI** — 0 PRs in 24h, 10 hot issues; the pre-release train is in a holding pattern, with issues surfacing faster than fixes land.

**Most engaged individual issues:** Codex `/undo` (373 👍), OpenCode VS Code extension (134 👍), OpenCode Go-plan API (126 👍), Claude Code session URL opt-in (46 👍).

---

## 6. Trend Signals

1. **MCP is the new compatibility layer—and it's broken everywhere.** Every tool community reports MCP pain: non-compliant servers treated as fatal, tool discovery gaps between Desktop/CLI threads, OAuth races, and enterprise policy divergence from editor extensions. Developers should expect a period of instability here and prioritize tools with graceful-fallback patterns (Gemini CLI's `-32602` handling, OpenCode's OAuth refresh-race fix).

2. **Subagent reliability is the next frontier.** Silent turn-limit failures, dead-lettered resumptions, and security-hook bypass in background agents are universal pain points. Tools that solve this (Gemini CLI's capacity-fallback, DeepSeek's checkpoint resume, Qwen's tmux-backed sub-agents) will gain enterprise trust.

3. **Desktop-first is the direction of travel.** Qwen Code's Electron-to-Tauri migration, Claude Code's Cowork Desktop crashes, Codex's GPU process failures, and Copilot's canvas persistence issues all signal that the CLI-to-desktop transition is where the biggest stability gaps remain. The Tauri shift (Qwen Code v0.1.0) may set a new standard for lightweight desktops.

4. **Per-directory / session-scoped configuration is the emerging norm.** Pi's `AGENTS.override.md`, Codex's per-thread model/reasoning control, and OpenCode's skill-level `disable-model-invocation` all point to users demanding granular context layers rather than monolithic config files.

5. **Security-filter false positives are alienating power users.** Cybersecurity researchers on Codex and Claude Code report legitimate workflows being blocked. This is a retention risk—tools that tighten filters without providing override paths will lose their most technical users.

6. **Cost transparency and billing control are becoming table stakes.** OpenCode's Go-plan API (126 👍), Codex's compaction-loop memory leaks, and Gemini CLI's quota-fallback tool loss all show that users need programmatic visibility into spend and session accounting. The absence of `/undo` in Codex (373 👍) is fundamentally a cost-safety concern.

7. **Voice and multimodal input are expanding beyond chat.** Qwen Code's Live Voice, Pi's video/audio request, and Kimi Code's audio bridge indicate the ecosystem is moving toward hands-free and rich-context interaction—not just text-in, text-out.

---

*Report generated from community digest data dated 2026-08-06. Tool sources: GitHub repositories for each listed CLI.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-06 · Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| # | PR | Title | Status | Community Signal |
|---|------|-------|--------|-----------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill-creator): run_eval.py always reports 0% recall** | OPEN | 10+ independent reproductions; crosses into Issues [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) and [#1169](https://github.com/anthropics/skills/issues/1169). Fixes eval artifact installation, Windows stream reading, trigger detection, and parallel workers. |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit: mechanical verification + four-dimension reasoning quality gate (v1.3.0)** | OPEN | Directly implements the proposal in Issue [#1385](https://github.com/anthropics/skills/issues/1385). Audits AI output before delivery — file existence checks first, then reasoning quality in damage-severity priority. Universal across projects/stacks/models. |
| 3 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer & skill-security-analyzer** | OPEN | Two meta-skills evaluating structure/documentation (20%), trigger accuracy, tool usage, and security posture. First structured quality-assurance tooling for the ecosystem. |
| 4 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography skill** | OPEN | Prevents orphan lines, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a pain point acknowledged as affecting every document Claude produces. |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill — OpenDocument creation, filling, and parse-to-HTML** | OPEN | Covers .odt/.ods/.odf and LibreOffice workflows. Fills a gap for open-standard document handling alongside the existing DOCX/PDF skills. |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns skill** | OPEN | Comprehensive testing coverage: Testing Trophy philosophy, AAA pattern, React Testing Library, and edge-case strategy. Fills a notable gap — no testing skill existed in the core collection. |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel skill — retro game development** | OPEN | MCP-server-backed workflow for the Pyxel 8-bit game engine (write → run_and_capture → inspect → iterate). Niche but demonstrates the expanding MCP-integration pattern. |
| 8 | [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene skill** | OPEN | Addresses [Issue #1417](https://github.com/anthropics/skills/issues/1417): planning artifacts accumulate with no lifecycle management. Very recent (July 2026); community actively co-authored the framing. |

---

## 2. Community Demand Trends

Distilled from the top commented Issues:

| Demand Area | Key Issue | Comments | 👍 |
|-------------|-----------|----------|-----|
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) — community skills impersonating official `anthropic/` namespace | 43 | 2 |
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) — shared skill library / direct sharing links | 16 | 8 |
| **Skill creator tooling reliability** | [#556](https://github.com/anthropics/skills/issues/556) + [#1169](https://github.com/anthropics/skills/issues/1169) — eval loop broken, recall永远 0% | 15 total | 8 |
| **Agent memory efficiency** | [#1329](https://github.com/anthropics/skills/issues/1329) — compact-memory (symbolic state notation) | 9 | 0 |
| **AI governance & safety patterns** | [#412](https://github.com/anthropics/skills/issues/412) — policy enforcement, threat detection, audit trails | 6 | 0 |
| **Plugin deduplication** | [#189](https://github.com/anthropics/skills/issues/189) — document-skills & example-skills install identical content | 6 | 9 |
| **Context window hygiene** | [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` skill injects ~156k tokens eagerly | 4 | 0 |
| **MCP exposure for skills** | [#16](https://github.com/anthropics/skills/issues/16) — expose skills as MCP tools | 4 | 0 |
| **Enterprise document handling** | [#1175](https://github.com/anthropics/skills/issues/1175) + [#12](https://github.com/anthropics/skills/issues/12) — SharePoint permissions + OOXML whitespace bugs | 8 total | 1 |

**Notable trend:** The community is shifting from *creating new domain skills* toward *hardening the skill infrastructure itself* — eval tooling, security boundaries, memory hygiene, and context efficiency are the dominant concerns.

---

## 3. High-Potential Pending Skills

These PRs are open, actively discussed, and address clearly articulated community needs — strong candidates for near-term merge:

| PR | Skill | Why It's Promising |
|----|-------|--------------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Implements a widely-supported proposal (#1385); universal applicability; v1.3.0 suggests iterative community refinement. |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Directly addresses a named lifecycle gap (#1417); co-authored with the issue reporters; very recent activity. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Fills the most obvious gap in the core skill catalog; comprehensive scope; no competing PR. |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves a universal document-quality problem; narrowly scoped and self-contained. |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer** | Meta-tooling that improves the entire ecosystem's skill quality; first-of-its-kind in the repo. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained domain skill with well-defined scope (color spaces, naming systems, usage tables). |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | Extends document skill coverage to open standards; complements existing DOCX/PDF skills. |

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is not for more domain-specific skills, but for **infrastructure-grade tooling** — reliable eval loops, security boundaries against namespace abuse, context-window hygiene, and organizational sharing — without which the skill ecosystem cannot scale trustlessly.

---



# Claude Code Community Digest — 2026-08-06

## 1. Today's Highlights

Claude Code v2.1.223 introduces owner wildcard entries for marketplace restrictions and new warnings for forked skills and background session resumption, while the community flags a cluster of bugs around session persistence, safety-guard false positives, and Chrome extension permission loops. Top engagement centers on making session-URL injection into commits opt-in (#66504, 46 👍) and a Max session-limit consumption bug (#82506, 7 👍).

## 2. Releases

**v2.1.223** — Added `"owner/*"` wildcard entries to `strictKnownMarketplaces` and `blockedMarketplaces` managed settings, enabling org-level allow/block of all marketplace repos. Also added a warning when workflow agents, forked skills, slash commands, or resumed background sessions are encountered.

🔗 [GitHub](https://github.com/anthropics/claude-code)

## 3. Hot Issues

| # | Title | Why it matters | Reaction |
|---|-------|---------------|----------|
| [#82506](https://github.com/anthropics/claude-code/issues/82506) | Claude Max usage bug: session limit consumed without using | Users report session quota being drained with no visible activity — a direct billing impact. | 17 comments · 7 👍 |
| [#66504](https://github.com/anthropics/claude-code/issues/66504) | Session URL in commits/PRs should be opt-in | Every commit auto-appends a session URL; the community overwhelmingly wants this behind a flag. | 12 comments · 46 👍 |
| [#58750](https://github.com/anthropics/claude-code/issues/58750) | Cowork Desktop (macOS) AskUserQuestion card never renders | Pending user-prompt cards show a yellow-dot badge but never surface in UI; requests silently dismiss on quit. | 11 comments · 5 👍 |
| [#83403](https://github.com/anthropics/claude-code/issues/83403) | Desktop crashes near 5-hour usage limit, requires full reinstall | Hard crash tied to a usage threshold with no graceful recovery — data loss risk. | 7 comments |
| [#82536](https://github.com/anthropics/claude-code/issues/82536) | `--continue` cannot find sessions created by `-p` | Interactive-resume sessions are invisible to the continuation path, breaking workflow continuity. | 7 comments |
| [#53134](https://github.com/anthropics/claude-code/issues/53134) | Windows: MCP servers spawned twice at startup [CLOSED] | Dual-launch of `directMcpHost` + `LocalMcpServerManager` caused resource conflicts; now closed. | 6 comments |
| [#83744](https://github.com/anthropics/claude-code/issues/83744) | GPU process crash (exitCode 101457950) kills entire desktop | GPU compositor failure brings down the whole app, not just the rendering layer. | 4 comments |
| [#74715](https://github.com/anthropics/claude-code/issues/74715) | "Always allow" Chrome permission saved as `duration:"once"` | Users approving sites permanently still get re-prompted on every action — a permissions persistence bug. | 4 comments |
| [#78915](https://github.com/anthropics/claude-code/issues/78915) | Phantom "Request interrupted by user" on foreground subagent dispatch | Tool-use interrupt message appears without any actual user action, confusing agent orchestration. | 3 comments |
| [#64036](https://github.com/anthropics/claude-code/issues/64036) | FleetView mis-buckets active agents as Completed | Stale text-classifier verdicts stick to job state, showing working agents under Completed. | 3 comments · 1 👍 |

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#41661](https://github.com/anthropics/claude-code/pull/41661) | 14 Revolutionary Claude Code Plugins | Adds 14 production-ready plugins covering security, performance, architecture, and fullstack automation; marketplace.json updated to 27 plugins total. |
| [#16929](https://github.com/anthropics/claude-code/pull/16929) | fix(code-review): respect `--comment` flag | Fixes `/code-review` defaulting to inline GitHub comments instead of terminal output; now only posts to GitHub when `--comment` is provided. |
| [#84138](https://github.com/anthropics/claude-code/pull/84138) | fix: workaround for self-signed cert in Cowork | Bun runtime on macOS doesn't load system certificates; this PR adds a hook to bypass the self-signed cert error in Cowork. |
| [#84004](https://github.com/anthropics/claude-code/pull/84004) | fix(plugin-dev): limit frontmatter parsing | Restricts YAML frontmatter parsing to the opening block only, preventing horizontal rules in Markdown bodies from breaking settings files. |
| [#84003](https://github.com/anthropics/claude-code/pull/84003) | fix(scripts): propagate top-level failures | Duplicate-maintenance scripts now return failing process status on top-level rejection instead of silently resolving. |
| [#83999](https://github.com/anthropics/claude-code/pull/83999) | fix(scripts): validate `gh` flag values | Rejects incomplete `gh` commands (e.g., `gh issue list --limit` without a value) at the wrapper level before delegation. |

## 5. Feature Request Trends

- **Session portability** — Users want transcripts and memory to follow the project (not the absolute launch path) while keeping scratch files local (#81946).
- **Opt-in session URLs** — Strong consensus that auto-injected session links in commits/PRs should be configurable, not forced (#66504).
- **Gesture and keybinding flexibility** — Requests to disable or rebind the left-arrow detach-to-background gesture (#84348) and fix terminal-input regressions in Warp (#72649).
- **Mobile slash-command typeahead** — iOS web client lacks the `/` command completion available on desktop (#56204).
- **Cross-machine browser control security** — Need for reliable device identification when driving a browser from a remote Claude session (#77605).

## 6. Developer Pain Points

**Session and usage accounting bugs** dominate the conversation: sessions created with `-p` are invisible to `--continue` (#82536), Max session limits drain without visible usage (#82506), and detached/background sessions die permanently after a daemon restart with stale workers refusing respawn (#84349). These break workflow continuity and erode trust in the tool.

**Safety-guard false positives** are a recurring theme — authorized security testing on Opus 5 triggers automatic downgrades to Opus 4.8 (#84353, #84340), and CVP-approved organizations still receive cyber-safeguard blocks (#84352). Users report unexpected costs from unattended metered API jobs with no guardrails (#84350).

**Platform-specific bugs** remain high-frequency: macOS Desktop crashes near usage limits (#83403) and on GPU process failure (#83744); Windows MSIX packages silently enter a `NeedsRemediation` state mid-session (#84333); Chrome extension permissions persist incorrectly (#74715, #84355); and the macOS Documents TCC dialog shows a bare version number instead of the app name (#79867).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-06

## 1. Today's Highlights

Codex 0.146.1 shipped with safer auto-review defaults for cyber-capable models and clearer permission-change explanations in the terminal (PR #37057), while multiple alpha builds of 0.147.0 continue landing. The community is actively tracking Windows Desktop GPU crashes, MCP process-leak bugs, and a highly-upvoted request for `/undo` support in the TUI.

## 2. Releases

**rust-v0.146.1** — Bug-fix release addressing cyber-model auto-review safety. Applies stricter automatic-review defaults for models with a `cyber` catalog specialty and improves terminal output to explain permission changes more clearly. [(Changelog)](https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1)

**rust-v0.147.0-alpha series** — Five alpha builds released in the last 24h (alpha.10 through alpha.13), alongside alpha.6.5, indicating an active pre-release cadence ahead of the 0.147.0 stable cut.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#9203](https://github.com/openai/codex/issues/9203) | Please make `/undo` back | Undelete/undo is critical for safety when Codex modifies untracked or uncommitted files. | 373 👍, 70 comments — the most-engaged issue on the board. |
| [#12491](https://github.com/openai/codex/issues/12491) | MCP child processes not reaped — 1300+ zombies, 37 GB leak | A severe memory-leak bug in the Codex.app GUI that degrades system performance over time. | 32 comments, flagged as critical by the reporter. |
| [#33776](https://github.com/openai/codex/issues/33776) | `ChatGPT.exe` spawns hundreds of `taskkill.exe`/`conhost.exe` on Windows | Causes WMI storms and DWM degradation, directly impacting desktop UX. | 27 👍, 30 comments. |
| [#19425](https://github.com/openai/codex/issues/19425) | Custom stdio MCP tools not exposed to Desktop threads | MCP discovery works but tools are invisible to `tool_search`, blocking plugin workflows. | 29 comments, regression since 0.124.0-alpha.2. |
| [#23979](https://github.com/openai/codex/issues/23979) | Conversation history missing after macOS Desktop update | Data persists in `state_5.sqlite` but is invisible in the UI — a data-loss concern. | 26 comments. |
| [#31035](https://github.com/openai/codex/issues/31035) | SysmonDrv v13.22 BSODs on Windows after Codex session | Kernel-level crashes traced to `SysmonDrv.sys` reinstalled by Codex Desktop — serious stability issue. | 23 comments. |
| [#35352](https://github.com/openai/codex/issues/35352) | Desktop exits when embedded browser GPU crashes (unsigned SwiftShader) | Windows Code Integrity blocks `vk_swiftshader.dll`, crashing the in-app browser and the app. | 17 comments, now closed. |
| [#34684](https://github.com/openai/codex/issues/34684) | `codex mcp login` fails on macOS but works on Linux | Platform-specific OAuth discovery bug blocking cross-platform MCP setups. | 10 comments, 5 👍. |
| [#33493](https://github.com/openai/codex/issues/33493) | Local compaction v2 retains unbounded `input_image` payloads | Image-heavy threads trigger repeated auto-compaction loops, degrading performance. | 8 comments, 2 👍. |
| [#37161](https://github.com/openai/codex/issues/37161) | Severe false positives in cybersecurity request filtering | Legitimate security-research and static-analysis requests are being blocked, impacting power users. | 5 comments, 1 👍 — newly opened. |

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#37191](https://github.com/openai/codex/pull/37191) | Preserve legacy semantics during rollout migration | Ensures historical rollbacks, compaction checkpoints, and subagent copies survive migration without altering visible conversation or model context. |
| [#37190](https://github.com/openai/codex/pull/37190) | Interrupt cyber model turns after one Guardian denial | Adds a circuit-breaker for `cyber`-specialty models: a single Guardian denial now interrupts the turn, while other models retain existing thresholds. |
| [#37189](https://github.com/openai/codex/pull/37189) | Track multi-agent usage hints in world state | Resumed sessions now correctly inherit multi-agent usage instructions even when saved history predates tracking. |
| [#37188](https://github.com/openai/codex/pull/37188) | Reserve the `tool_search` namespace for the search tool | Removes namespace collisions by stripping pre-existing `tool_search` tools before registering the built-in search primitive. |
| [#37178](https://github.com/openai/codex/pull/37178) | Preserve image transparency metadata in app-server items | Adds `transparentBackground` to image-generation items and maps Images API background values correctly. |
| [#37177](https://github.com/openai/codex/pull/37177) | Move explicit skill selection into the `skills` crate | Decouples explicit-mention selection from core skill-loading via a new `ExplicitSkillLookup` interface. |
| [#37175](https://github.com/openai/codex/pull/37175) | Add legacy rollout migration to paginated history | Introduces `LocalThreadStore::migrate_rollouts` with dry-run/apply modes, throughput limiting, and per-rollout outcomes. |
| [#37168](https://github.com/openai/codex/pull/37168) | Bound remote MCP handshake HTTP requests | Prevents serial-executor blocking when a streamable HTTP MCP handshake times out mid-flight. |
| [#37167](https://github.com/openai/codex/pull/37167) | Expose session sources to MCP contributors | Adds `session_source()` to `McpServerContributionContext` for thread-scoped MCP resolution. |
| [#37151](https://github.com/openai/codex/pull/37151) | Coalesce concurrent Git status scans | Shares in-flight `git status --porcelain` calls across concurrent workspace-metadata requests for the same repo. |

## 5. Feature Request Trends

- **`/undo` and session safety nets** — Issue #9203 (373 👍) dominates as the most-requested feature, reflecting a strong desire for rollback capability when Codex modifies files unexpectedly.
- **Per-thread / per-session configuration** — Issue #34278 requests auto-mode that routes both model and reasoning effort per thread, indicating demand for finer-grained session control.
- **MCP tool discovery and exposure** — Multiple issues (#19425, #32101) highlight the community's push for reliable MCP tool visibility across Desktop threads and Code Mode.
- **Cross-platform parity** — Issues #34684 (macOS vs. Linux OAuth) and #30048 (Windows-native vs. WSL mode selection) show repeated friction around platform-specific behavior.

## 6. Developer Pain Points

- **Windows Desktop stability** — A cluster of issues (#33776, #31035, #35352, #35635, #35411, #35566, #35737, #35841, #37187) all center on GPU process crashes, SwiftShader Code Integrity blocks, BSODs from `SysmonDrv`, and MSIX self-corruption. This is the single largest source of reported friction.
- **MCP process lifecycle** — The 37 GB memory leak from unreaped MCP child processes (#12491) and the tool-exposure gap (#19425, #32101) point to systemic issues in the MCP integration layer.
- **Context and compaction reliability** — Unbounded image payloads (#33493) and high-frequency polling with large resumed contexts (#32309) create runaway token and compaction loops.
- **Terminal UX gaps** — The sustained demand for `/undo` (#9203) and TUI typing lag from synchronous queries (#24527) indicate the CLI/TUI experience still has room for polish.
- **Security-filter false positives** — Issue #37161 reports that legitimate cybersecurity research and static-analysis workflows are being blocked, alienating a core user segment.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-06

## 1. Today's Highlights

Gemini CLI v0.55.0-nightly drops with a macOS seatbelt fallback fix and the first pr-generator-core infrastructure for the SSR Code Generation Pipeline. The community is increasingly vocal about subagent reliability — two P1 bugs around subagent hangs and silent failures are among the top-discussed issues. Meanwhile, a trio of security/robustness PRs landed overnight, covering malformed tool arguments, OAuth redirect handling, and session message-fusing bugs.

---

## 2. Releases

**v0.55.0-preview.1** — version bump and changelog rolls for v0.54.0-preview.0 and v0.53.

**v0.55.0-nightly.20260806.g761f604c1**
- `fix(cli): fall back to embedded macOS seatbelt profiles if missing` — [#28551](https://github.com/google-gemini/gemini-cli/pull/28551)
- `feat(pr-generator-core): add environment config parser, command executor, GitHub REST client integration` — [#28435](https://github.com/google-gemini/gemini-cli/pull/28435)

---

## 3. Hot Issues

| # | Title | Why It Matters | Community |
|---|-------|---------------|-----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports GOAL success after MAX_TURNS | P1 bug: `codebase_investigator` silently claims success instead of surfacing turn-limit failure, corrupting agent decision-making. | 12 comments · 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | P1 bug: any task that defers to the generalist agent deadlocks (tested up to 1 hour). Disabling subagents is the only known workaround. | 8 comments · 8 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | P2 enhancement: leverages Gemini's native bash affinity through POSIX tool chaining without extra deps. Reflects community desire for lighter, more native execution. | 8 comments · 1 👍 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | P1 tracking: 76 behavioral evals generated across 6 supported models — foundational for release quality gates. | 7 comments |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, and mapping | P2 enhancement: precise method-bound reads could cut token waste and misaligned context from codebase scanning. | 7 comments · 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | P2 behavioral bug: custom skills (e.g., `gradle`, `git`) are ignored unless explicitly prompted, undermining the agent's autonomy. | 6 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | P2 bug: unprocessed sessions loop back into the inbox, degrading memory quality and wasting turns. | 5 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction & reduced Auto Memory logging | P2 security: secrets may already be in model context before redaction runs; service-side logs can also leak skill data. | 4 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell commands stuck at "Waiting input" | P1 bug: even trivial commands leave the TUI hung after completion. High user-visible impact. | 4 comments · 3 👍 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | P1 bug: browser agent terminates with GOAL on Wayland compositors, blocking Linux users. | 4 comments · 1 👍 |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#28695](https://github.com/google-gemini/gemini-cli/pull/28695) | fix(sdk): don't abort sendStream on malformed tool arguments | ✅ Closed | Guards `JSON.parse()` on string-valued tool args; closed after landing. |
| [#28660](https://github.com/google-gemini/gemini-cli/pull/28660) | fix(sdk): keep sendStream alive on malformed tool arguments | 🔄 Open | Follow-up: defensively parses args, rejects arrays/primitives/null, returns structured `functionResponse` errors. |
| [#28700](https://github.com/google-gemini/gemini-cli/pull/28700) | fix(core): stop user message fusing into unanswered tool response | ✅ Closed | Fixes the "model finishes your sentence" bug after stream interruptions or ESC. |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | fix(core,cli): repair /compress session reload & quota-fallback tool loss | ✅ Closed | Fixes broken `/compress` reload and tool-response loss when hitting quota limits. |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | fix(core): dynamic Cloud Workstations proxy redirect URI for OAuth | 🔄 Open | OAuth fails in Cloud Workstations VMs because redirect is hardcoded to `localhost`. |
| [#28670](https://github.com/google-gemini/gemini-cli/pull/28670) | fix(core): fallback on model capacity errors for GCA agent mode | ✅ Closed | P1: 429/capacity-exhaustion no longer loops on the same failed model; falls back to Flash. |
| [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | fix(cli): forward termination signals to relaunched child process | 🔄 Open | `relaunchAppInChildProcess` now propagates SIGTERM/SIGHUP/SIGINT, preventing orphaned processes. |
| [#28677](https://github.com/google-gemini/gemini-cli/pull/28677) | fix(core): add timeout to IdeClient.getInstance() traversal | 🔄 Open | P1: `getIdeProcessInfo()` races against a 3s timeout, preventing the TUI from hanging on "Initializing…". |
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | fix(core): preserve functionCall thoughtSignature when stripping thoughts | ✅ Closed | Fixes v0.53.0 regression causing `API Error 400: thought_signature missing`. |
| [#28701](https://github.com/google-gemini/gemini-cli/pull/28701) | fix(core): fix TRUST_PARENT rule precedence in folder-trust resolution | 🔄 Open | Corrects longest-match trust-rule resolution so explicit child-folder rules override parent rules. |

---

## 5. Feature Request Trends

- **Agent autonomy & subagent reliability** — The dominant theme: community wants agents to *actually* use skills, recover from turn-limit failures, and not silently claim success. Issues #22323, #21409, #21968, #26516 all converge here.
- **AST-aware codebase navigation** — #22745 and #22746 reflect strong interest in moving beyond line-range reads to method-bound, symbol-aware tooling for efficiency gains.
- **Auto Memory hardening** — #26522, #26525, #26523 show users want better signal filtering, deterministic redaction, and visibility into invalid inbox patches.
- **Zero-dependency OS sandboxing** — #19873 and #22672 (discourage destructive behavior) indicate a push toward safer, more native execution without extra runtime layers.
- **Browser agent resilience** — #22232 (session takeover), #21983 (Wayland), #22267 (settings.json ignored) point to a need for robust, cross-platform browser automation.

---

## 6. Developer Pain Points

1. **Subagent reliability** — Repeated P1 reports of generalist hangs (#21409), subagent silence on MAX_TURNS (#22323), and skipped skills (#21968) suggest the agent orchestration layer is the top friction point for power users.
2. **Shell/TUI freezes** — Commands stuck at "Waiting input" (#25166) and IdeClient traversal hangs (#28677) cause repeated workflow interruptions, especially in bare terminals or CI environments.
3. **Memory system bugs** — Auto Memory's retry loops (#26522), silent patch dismissal (#26523), and redaction timing gaps (#26525) erode trust in long-session continuity.
4. **Browser agent fragility** — Wayland failures (#21983), ignored settings overrides (#22267), and lack of session recovery (#22232) make browser-based workflows unreliable on Linux.
5. **Tool-limit 400 errors** — [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) surfaces when >128 tools are registered, indicating the tool-scope selection logic needs intelligent pruning rather than a hard cutoff.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-06

## 1. Today's Highlights

The v1.0.79 pre-release train continues with worktree support and terminal prompt-layout refinements, while the issue backlog reveals persistent pain around MCP initialization failures, Windows stability, and clipboard/alt-screen rendering regressions. A cluster of newly opened triage issues (4370–4382) signals active investigation into agent delegation, canvas session persistence, and cloud-agent policy fetching on GitHub Enterprise Cloud.

## 2. Releases

| Version | Type | Summary |
|---|---|---|
| [v1.0.79-4](https://github.com/github/copilot-cli/releases/tag/v1.0.79-4) | Pre-release | Latest pre-release build |
| [v1.0.79-3](https://github.com/github/copilot-cli/releases/tag/v1.0.79-3) | **Improved** | Added `/worktree new` to start a new session in a separate worktree |
| [v1.0.79-2](https://github.com/github/copilot-cli/releases/tag/v1.0.79-2) | **Improved** | Pinned prompt now renders one row higher (in the tab-bar row), reducing timeline height by one row; pinned prompts are disabled by default on terminals under 30 rows to avoid crowding output; configurable via `pinnedPrompts` |

## 3. Hot Issues

1. **[Issue #1799](https://github.com/github/copilot-cli/issues/1799) — How to turn off alt-screen views?** `[OPEN]` `area:configuration` `area:terminal-rendering` · 👍 8 · 💬 12 · Last active 2026-08-05
   > Users report that the newly introduced alt-screen mode has caused significant disruption. The community is requesting an opt-out or toggle back to the original rendering mode. High engagement (8 upvotes) signals this is a widespread concern.

2. **[Issue #3172](https://github.com/github/copilot-cli/issues/3172) — Strange "Somebody else is owning the clipboard" message** `[OPEN]` `area:input-keyboard` `area:terminal-rendering` · 👍 7 · 💬 2 · Last active 2026-08-05
   > Copy-pasting across applications triggers a layout-breaking status-line message. The clipboard-ownership notification is intrusive and persists until the next interaction, degrading the UX on shared-screen or pair-programming setups.

3. **[Issue #4345](https://github.com/github/copilot-cli/issues/4345) — Reasoning effort 'medium' not supported for claude-haiku-4.5** `[OPEN]` `area:agents` `area:models` · 👍 4 · 💬 2 · Created 2026-08-03
   > When server-side feature flags for `copilot_cli_opus_medium_effort_default` and `copilot_cli_gpt_5_4_mini_for_explore` are active, the CLI throws a repeated error during sub-agent execution. Highlights a model-capability mismatch in the feature-flag routing logic.

4. **[Issue #4374](https://github.com/github/copilot-cli/issues/4374) — `/mcp search` fails with 400 on non-GitHub git remotes** `[OPEN]` `triage` · 👍 4 · 💬 0 · Created 2026-08-05
   > The interactive MCP registry browser returns `400 Bad Request` in any trusted folder whose `git remote` points to Azure DevOps. Affects enterprise users with mixed VCS providers; no comments yet but already 4 upvotes.

5. **[Issue #4202](https://github.com/github/copilot-cli/issues/4202) — Built-in `view` reports "Path does not exist" for existing files in 1.0.73** `[OPEN]` `area:non-interactive` `area:tools` · 👍 1 · 💬 5 · Last active 2026-08-05
   > A regression introduced in 1.0.72: the `view` tool fails on existing text files, while the isolated SDK probe succeeds. Suggests a CLI-layer path-resolution change that broke file discovery.

6. **[Issue #3934](https://github.com/github/copilot-cli/issues/3934) — MCP server "blocked by policy" in custom registry** `[OPEN]` `area:enterprise` `area:mcp` · 👍 1 · 💬 2 · Last active 2026-08-05
   > Custom MCP registries that work fine in VS Code and IntelliJ plugins surface a `blocked by policy` error in the CLI. Indicates a policy-evaluation path difference between the CLI and editor extensions.

7. **[Issue #4370](https://github.com/github/copilot-cli/issues/4370) — 1.0.79-1 fails MCP init when `server/discover` returns `-32602`** `[OPEN]` `triage` · 👍 1 · 💬 2 · Created 2026-08-04
   > FastMCP servers that don't implement `server/discover` return `-32602 Invalid request parameters`; Copilot treats this as a fatal error instead of a graceful fallback. Blocks adoption of FastMCP-built servers.

8. **[Issue #4026](https://github.com/github/copilot-cli/issues/4026) — Copilot CLI crashes repeatedly on Windows (native runtime)** `[OPEN]` `area:sessions` `area:platform-windows` · 👍 0 · 💬 2 · Last active 2026-08-05
   > Unpredictable native crashes on Windows since 2026-05-24, spanning v1.0.15 through v1.0.75+. No single reproducible trigger identified; likely a memory or threading issue in the native runtime.

9. **[Issue #3013](https://github.com/github/copilot-cli/issues/3013) — Hooks don't fire for background (task) agents** `[CLOSED]` `area:permissions` `area:agents` `area:plugins` · 👍 0 · 💬 3 · Closed 2026-08-05
   > Security hooks (e.g., dangerous-command blockers) are bypassed when commands are run via background/task agents or general-purpose sub-agents. Marked as a potential security vulnerability; now closed, likely triaged or assigned.

10. **[Issue #4375](https://github.com/github/copilot-cli/issues/4375) — macOS `MallocStackLogging` spams stderr on every tool call** `[CLOSED]` `triage` · 👍 0 · 💬 0 · Closed 2026-08-05
    > Every subprocess spawn on macOS emits `MallocStackLogging: can't turn off malloc stack logging because it was not enabled.` to stderr, creating noise during sessions. Closed quickly — likely a one-line env-var fix.

## 4. Key PR Progress

No pull requests were updated in the last 24 hours on the `github/copilot-cli` repository.

## 5. Feature Request Trends

- **MCP robustness & compatibility** — Multiple issues (#4370, #4374, #3934, #4378, #4371) point to a common thread: the CLI's MCP integration is fragile against non-GitHub remotes, non-standard server implementations, and enterprise policy configurations. Users want graceful fallbacks and consistent behavior across environments.
- **BYOM / model-switching flexibility** — Issue #4376 requests in-session model switching for Bring-Your-Own-Model providers, eliminating the need to restart the CLI. A natural extension of the existing BYOM feature.
- **Canvas & session persistence** — Issue #4379 highlights that GitHub login state doesn't persist across canvas instances due to isolated storage partitions. Users expect browser-canvas sessions to share authentication.
- **Alt-screen / terminal rendering controls** — Issue #1799 and #3172 show demand for configurable terminal rendering modes, especially the ability to opt out of alt-screen and clean up clipboard-status notifications.
- **Background-agent security parity** — Issue #3013 (now closed) underscored a gap where hooks bypassed by sub-agents. Future requests likely focus on ensuring policy enforcement is agent-agnostic.

## 6. Developer Pain Points

1. **MCP initialization is brittle** — Non-compliant servers (FastMCP returning `-32602`), Azure DevOps remotes triggering 400 errors, and enterprise policy blocks are a recurring frustration. The CLI treats non-critical errors as fatal instead of falling back gracefully.
2. **Windows native-runtime instability** — Intermittent crashes since May 2026 with no clear reproduction path suggest a deeper issue in the native layer that blocks productive use on Windows.
3. **Terminal rendering regressions** — Alt-screen mode and clipboard-ownership notifications are disruptive; users lack an easy way to disable or configure these behaviors.
4. **Sub-agent security gaps** — Hooks and policy checks not applying to background/task agents is a serious concern for enterprise users who rely on these guards.
5. **Model-capability mismatches** — Feature flags can route requests to models that don't support requested parameters (e.g., reasoning effort `medium` on Haiku), producing noisy repeated errors.
6. **Session/authentication persistence in canvas** — Isolated storage partitions prevent GitHub sign-in from carrying across canvas instances, forcing repeated logins.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-06

## 1. Today's Highlights

Two PRs landed addressing a recurring frustration with unconfigured models: [#2592](https://github.com/MoonshotAI/kimi-cli/pull/2592) degrades unsupported tool media (e.g. image-returning MCP tools) instead of aborting mid-task after side effects, and [#2590](https://github.com/MoonshotAI/kimi-cli/pull/2590) makes the error message name the exact config fix needed. Separately, an open bug [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) reports that `StrReplaceFile` silently corrupts non-UTF-8 bytes anywhere in a file.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Memory System — persistent context across sessions | Cross-session memory is one of the most-requested capabilities for any CLI coding assistant; it directly impacts productivity on long-running projects. | Updated today; 19 comments — strong ongoing interest, though no 👍 yet. |
| [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) | `StrReplaceFile` corrupts undecodable bytes outside the edited region | A data-integrity bug: any non-UTF-8 byte anywhere in a file is replaced with `U+FFFD` on every edit, silently mutating binary-adjacent content. | Open; no comments yet — likely low-visibility but high-impact for mixed-content repos. |
| [#2588](https://github.com/MoonshotAI/kimi-cli/issues/2588) | Model without `capabilities` aborts after MCP tool side effects | Users who declare a custom OpenAI-compatible endpoint without `capabilities` get a silent abort *after* a tool has already executed, with no actionable error hint. | Open; no comments yet — the issue is precisely scoped and already being addressed by two PRs. |

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#2592](https://github.com/MoonshotAI/kimi-cli/pull/2592) | `fix(soul): degrade unsupported tool media instead of aborting mid-task` | Resolves [#2588](https://github.com/MoonshotAI/kimi-cli/issues/2588) by replacing the hard `LLMNotSupported` raise with graceful degradation — the run continues and earlier side effects are preserved. |
| [#2590](https://github.com/MoonshotAI/kimi-cli/pull/2590) | `fix(soul): name the config fix in the unsupported-capability error` | Partially addresses [#2588](https://github.com/MoonshotAI/kimi-cli/issues/2588); the error now tells the user exactly which config field to add (e.g. `"capabilities": ["images"]`), not just that a capability is missing. |
| [#2589](https://github.com/MoonshotAI/kimi-cli/pull/2589) | `docs: mention qwen-audio-agent as a voice ACP client` | Adds `qwen-audio-agent` to the ACP client list as an open-source full-duplex voice runtime that launches `kimi acp` hands-free. |

## 5. Feature Request Trends

- **Persistent memory / cross-session context** (Issue #1283) — Users want the CLI to remember project patterns, preferences, and useful notes between invocations, with both AI-managed and user-defined memory modes.
- **Better error discoverability for custom models** (Issue #2588, PRs #2590, #2592) — When using non-standard endpoints, users need clear, actionable guidance on what capabilities to declare rather than opaque aborts.
- **Voice / hands-free interaction** (PR #2589) — Growing interest in extending ACP beyond editor/IDE clients to voice-runtime clients.

## 6. Developer Pain Points

1. **Silent data corruption on edit** — `StrReplaceFile`'s `errors="replace"` decode rewrites bytes outside the edit region, making it unsafe for files containing binary or non-UTF-8 content. This is a correctness bug that could silently break project files.
2. **Unhelpful aborts after side effects** — When a model lacks declared `capabilities`, the CLI lets the tool run, applies its side effects, and then aborts with a message that doesn't point to the root cause. Users lose work and have no clue how to fix the config.
3. **Memory gap between sessions** — The sustained discussion around #1283 indicates users find it frustrating that each CLI invocation starts from scratch with no persistent project context.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026‑08‑06

## 1. Today’s Highlights
OpenCode v1.18.14 shipped with a simplified xAI login flow and improved error‑handling for provider retries, while community momentum remains strong around a VS Code extension, crypto payments, and cross‑project session management.

Several high‑visibility issues—Go‑plan usage APIs, DeepSeek regional restrictions, and slash‑command autocomplete—showcase the project’s focus on developer‑workflow integration and provider flexibility.

## 2. Releases
**v1.18.14** (last 24h)
- **Core improvements:** Simplified xAI login to a single device‑code flow, improving headless and remote‑environment support.
- **Bugfixes:** Preserved structured mid‑stream provider errors so compatible providers can retry failed responses; retried more transient provider and network errors.
- **Link:** https://github.com/anomalyco/opencode/releases/tag/v1.18.14

## 3. Hot Issues
| # | Issue | Comments | 👍 | Why it matters |
|---|-------|----------|----|----------------|
| #16017 | Add Go plan usage/balance API endpoint | 32 | 126 | Developers need programmatic access to subscription quotas for billing and automation. |
| #11176 | Official OpenCode VS Code extension | 27 | 134 | Critical for IDE‑native adoption; community widely supports an official extension. |
| #39845 | DeepSeek V4 Flash requires “Enable models hosted in China” | 17 | 22 | Highlights unexpected regional restrictions that break existing workflows. |
| #23153 | Pay Go with crypto | 16 | 36 | Expands payment flexibility, appealing to global and privacy‑conscious users. |
| #31932 | Cross‑project session list/picker for TUI | 14 | 6 | Addresses multi‑repo project navigation—a common pain point for power users. |
| #34498 | Respect `disable‑model‑invocation: true` in SKILL.md frontmatter | 13 | 49 | Enables finer‑grained control over skill‑level model restrictions. |
| #8058 | Add HTTP Streamable transport support for remote MCP servers | 10 | 0 | Aligns OpenCode with the latest MCP protocol (v2025‑11‑25) and servers like Sanity. |
| #37564 | “Auto mode” LLM model classifier auto‑approval for permissions | 6 | 12 | Seeks to reduce permission‑prompt friction by auto‑approving safe actions. |
| #29308 | Auto‑sync LiteLLM Models into OpenCode Configuration | 5 | 10 | Simplifies model management for users relying on LiteLLM as a proxy. |
| #40759 | `/sessions` does not work anymore | 2 | 0 | Critical regression after v1.18.14 that wipes conversation context when switching sessions. |

## 4. Key PR Progress
| # | PR | Status | Summary |
|---|----|--------|---------|
| #40723 | `feat(core): migrate v1 data to v2` | 🟢 Open | Adds resumable V1‑to‑V2 session migration with TUI flow and legacy JSON‑credential import. |
| #40781 | `feat(app): export session as json from ui` | 🟢 Open | Lets users export full session transcripts via UI dropdown, context‑tab button, or `/export` command. |
| #38790 | `[beta] feat(app): add workspace flows to new layout` | 🟢 Open | Ports Q3 workspace flows: local/existing/new workspace selection, branch context, and session‑move actions. |
| #27554 | `feat(opencode): local LAN provider discovery + auto‑discover models` | 🟢 Open | Adds `Local (LAN)` discovery in `/connect` for OpenAI‑compatible servers using mDNS/Bonjour and polling. |
| #40590 | `feat: support GITHUB_TOKEN auth in install script` | 🟢 Open | Removes anonymous‑rate‑limit risks by using `GITHUB_TOKEN` for version‑check, release, and asset‑download requests. |
| #39758 | `fix(app): show directories in web project picker on open` | 🟢 Open | Fixes a fresh‑browser‑profile bug where the web directory picker always reported “No folders found.” |
| #40768 | `fix(mcp): survive a cross‑process OAuth refresh race on connect` | 🟢 Open | Prevents duplicate refresh‑token failures when two OpenCode processes share one MCP credential row. |
| #40769 | `fix(mcp): reuse the registered dynamic client on re‑login` | 🟢 Open | Stops redundant dynamic client registration by preserving the in‑memory client store across re‑logins. |
| #40772 | `fix(opencode): report a missing auth method instead of crashing` | 🟢 Open | Adds a guard in `ProviderAuth.authorize` so missing auth hooks return a clear error rather than crashing. |
| #31834 | `feat(acp): emit plan session updates from todowrite tool calls` | 🟢 Open | Re‑opens contribution to render plan updates in OpenCode from Hydra‑ACP `todowrite` tool calls. |

*Closed PRs (merged)* include several clean‑ups by @kitlangton: removing unused mail/landing assets, orphaned CLI installer, small‑model selection surface, and an unused SQLite package.

## 5. Feature Request Trends
- **IDE & editor integration:** Strong demand for an official VS Code extension and better TUI autocomplete (skill invocations mid‑prompt, slash commands mid‑line).
- **Payment & billing flexibility:** Crypto payments and programmatic access to Go‑plan usage/balance APIs are frequently requested.
- **MCP & provider ecosystem:** Requests for HTTP Streamable transport, LiteLLM auto‑sync, and LAN‑based local model discovery show growing interest in extensible provider setups.
- **Session & project organization:** Cross‑project session pickers, session‑status management, and robust session export point to a need for better multi‑project workflow support.
- **Fine‑grained control:** Flags like `disable‑model‑invocation` in skill frontmatter and auto‑approval for permissions indicate users want more precise, automation‑friendly configuration.

## 6. Developer Pain Points
- **Authentication & licensing:** Repeated crashes on missing auth methods, OAuth refresh races, and region‑locked model access frustrate users relying on custom or international providers.
- **Session management bugs:** Recent regression in `/sessions` wiping conversation history; autocomplete not resolving reference‑directory files; global `AGENTS.md` rules being forgotten across sessions.
- **UI/UX friction:** Slash‑command and skill autocomplete only triggering at line start; settings tab not scrollable on laptops; mouse unresponsiveness on macOS.
- **Offline & environment constraints:** Need for ripgrep bundled in Windows binaries for offline use; web project picker failing on fresh browser profiles.
- **Performance concerns:** High memory usage on macOS and unresponsive task‑progress updates signal ongoing stability and resource‑management challenges.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-06

## 1. Today's Highlights

The Pi team shipped several bug fixes addressing hanging sessions, model-selector sorting, and OSC 8 hyperlink truncation. Meanwhile, the community is actively debating Windows onboarding friction and a proposal to make in-session model changes ephemeral by default. Two new context file conventions (`AGENTS.override.md`, per-directory overrides) landed, expanding how developers layer agent instructions across worktrees.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Status | Title | Comments | 👍 | Why It Matters |
|---|--------|-------|----------|-----|----------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | OPEN | How do you use Pi on Windows? What issues are you seeing? | 17 | 0 | Windows is a major developer platform; unclear onboarding paths fragment community energy between bug fixes, docs, and out-of-box experiences. |
| [#534](https://github.com/earendil-works/pi/issues/534) | CLOSED | Config folder is out of place on Linux | 14 | 23 | Linux users expect XDG Base Directory compliance; 23 upvotes signal strong community appetite for a config-path fix. |
| [#7399](https://github.com/earendil-works/pi/issues/7399) | CLOSED | `truncateToWidth()` leaves dangling OSC 8 hyperlink | 12 | 0 | A regression in text truncation corrupts terminal output when cutting through hyperlinks — directly impacts `@file` preview rendering. |
| [#5263](https://github.com/earendil-works/pi/issues/5263) | OPEN | Make in-session model/thinking changes ephemeral by default | 11 | 12 | Proposes a cleaner default: session-local model switches shouldn't leak into global defaults without explicit opt-in. |
| [#5291](https://github.com/earendil-works/pi/issues/5291) | CLOSED | Sessions hang on "working..." with Anthropic subscription | 8 | 3 | Reproducible reliability bug for paying enterprise users; interrupt/resume inconsistency erodes trust. |
| [#6675](https://github.com/earendil-works/pi/issues/6675) | CLOSED | `pi update --self` gives up after one transient failure | 8 | 2 | Self-update is a single-request path; any brief network hiccup blocks the entire update silently. |
| [#5064](https://github.com/earendil-works/pi/issues/5064) | CLOSED | Add Context Windows option | 7 | 0 | Users want parity with Copilot CLI's context-window selector — a frequently requested UX feature. |
| [#3200](https://github.com/earendil-works/pi/issues/3200) | OPEN | Support video/audio content in `prompt` command | 7 | 4 | Multimodal expansion: the `prompt` RPC already accepts images; video/audio would unlock reasoning on richer inputs. |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | OPEN | Configurable thinking level/model for compaction | 7 | 0 | Auto-compaction currently reuses the session's thinking level unconditionally — a blind spot for reasoning-model users managing budget. |
| [#5323](https://github.com/earendil-works/pi/issues/5323) | OPEN | Improve Vertex + GCP metadata server support | 6 | 1 | Synchronous `existsSync` checks for Vertex auth are racy; better detection would stabilize enterprise GCP deployments. |

---

## 4. Key PR Progress

| # | Status | Title | Why It Matters |
|---|--------|-------|----------------|
| [#7692](https://github.com/earendil-works/pi/pull/7692) | CLOSED | Naturally sort both model selectors | Shares a natural comparator between `/model` and `/scoped-models`; context-window variants now order predictably (e.g. `@200k` after `@1m`). |
| [#7690](https://github.com/earendil-works/pi/pull/7690) | CLOSED | Naturally sort scoped model catalog | Same fix applied to the scoped-catalog view, ensuring consistency across all model pickers. |
| [#7659](https://github.com/earendil-works/pi/pull/7659) | OPEN | Add Qwen Token Plan Individual provider | Adds `qwen-token-plan-individual` as a built-in provider with eight documented models and strict token-plan enforcement. |
| [#7671](https://github.com/earendil-works/pi/pull/7671) | OPEN | Colocate tool prompt contributions with tool definitions | Moves canonical system-prompt snippets next to their implementations, reducing drift between tool code and prompt output. |
| [#7597](https://github.com/earendil-works/pi/pull/7597) | CLOSED | Make extension selector scrollable in fullscreen mode | Wraps large diffs in a `ScrollView` so yes/no actions remain visible even with looooong diff titles. |
| [#7638](https://github.com/earendil-works/pi/pull/7638) | CLOSED | Support `thinking_token_budget` on OpenAI completions | Fixes a case where reasoning-heavy turns could consume the full `max_tokens` ceiling and return empty assistant messages. |
| [#7686](https://github.com/earendil-works/pi/pull/7686) | OPEN | Add configurable Harness factory | Internal factory for constructing the experimental Harness with preserved tools, activation, and prompt policy. |
| [#7656](https://github.com/earendil-works/pi/pull/7656) | CLOSED | Fix event bus leak | Scopes `pi.events.on()` subscriptions to the extension runtime; removes stale listeners after reload/disposal. Fixes [#7193](https://github.com/earendil-works/pi/issues/7193). |
| [#7663](https://github.com/earendil-works/pi/pull/7663) | CLOSED | Recognize comma after "lgtm" in approval comments | Regression fix for comment parsing; "LGTM, please submit…" now triggers submission correctly. |
| [#7681](https://github.com/earendil-works/pi/pull/7681) | CLOSED | Support `AGENTS.override.md` as per-directory override | When both `AGENTS.override.md` and `AGENTS.md` exist, Pi loads only the override — highest-priority context file per directory. |
| [#7679](https://github.com/earendil-works/pi/pull/7679) | CLOSED | Support line ranges in `@file` references | CLI now accepts `@file#L122-L145` style selectors, preserving literal filenames and aligning with `read` tool EOF handling. |
| [#7665](https://github.com/earendil-works/pi/pull/7665) | CLOSED | Skip OSC 8 scan for plain prefixes | Performance follow-up: avoids per-character ANSI parsing on ordinary truncated text while preserving hyperlink behavior. |
| [#7657](https://github.com/earendil-works/pi/pull/7657) | CLOSED | Close truncated OSC 8 links | Fixes dangling hyperlink output by closing active hyperlinks before the ellipsis reset. |

---

## 5. Feature Request Trends

1. **Multimodal input expansion** — Video/audio in `prompt` (#[3200](https://github.com/earendil-works/pi/issues/3200)) and mermaid diagram rendering (#[7623](https://github.com/earendil-works/pi/issues/7623)) show growing demand for richer context beyond text and images.
2. **Per-directory / per-worktree context layers** — `AGENTS.override.md` (#[7642](https://github.com/earendil-works/pi/issues/7642)) and `@file` line ranges (#[7673](https://github.com/earendil-works/pi/issues/7673)) reflect a trend toward granular, directory-scoped agent configuration.
3. **Session-scoped vs. global defaults** — The ephemeral in-session model change proposal (#[5263](https://github.com/earendil-works/pi/issues/5263)) and configurable compaction thinking level (#[7553](https://github.com/earendil-works/pi/issues/7553)) both point to a desire for tighter boundaries between session-local and persistent settings.
4. **Provider parity and extensibility** — Qwen Token Plan (#[7659](https://github.com/earendil-works/pi/pull/7659)), Vertex/GCP improvements (#[5323](https://github.com/earendil-works/pi/issues/5323)), and the extension API for persisting credentials (#[7658](https://github.com/earendil-works/pi/issues/7658)) indicate ongoing effort to broaden provider support and give extensions deeper control.

---

## 6. Developer Pain Points

- **Windows onboarding is fragmented** — Issue [#7547](https://github.com/earendil-works/pi/issues/7547) captures a clear community frustration: too many ways to run Pi on Windows, making it hard to prioritize documentation, bug fixes, and out-of-box reliability.
- **Transient network failures block critical paths** — Both self-update (#[6675](https://github.com/earendil-works/pi/issues/6675)) and WebSocket retries (#[7444](https://github.com/earendil-works/pi/issues/7444)) hard-stop on recoverable errors instead of backing off gracefully.
- **Extension lifecycle leaks** — Event-bus listeners surviving session reloads (#[7193](https://github.com/earendil-works/pi/issues/7193)) and the lack of a programmatic way for extensions to persist credentials (#[7658](https://github.com/earendil-works/pi/issues/7658)) make embedding Pi in toolchains error-prone.
- **Terminal rendering edge cases** — OSC 8 hyperlink truncation (#[7399](https://github.com/earendil-works/pi/issues/7399)), iTerm2 inline image size missing (#[7465](https://github.com/earendil-works/pi/issues/7465)), and Node 20 incompatibility (#[7601](https://github.com/earendil-works/pi/issues/7601)) all cause visible corruption or startup crashes.
- **Cost reporting bugs** — Negative costs on `openrouter/auto-beta` (#[7688](https://github.com/earendil-works/pi/issues/7688)) and missing Copilot models after login (#[7634](https://github.com/earendil-works/pi/issues/7634)) erode confidence in billing transparency.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-06

## 1. Today's Highlights

Qwen Code v0.21.6 shipped with experimental native Live Voice support on macOS and improved Web Shell session persistence, while Qwen Code Desktop v0.1.0 launched as a Tauri-based replacement for the Electron app. The community is actively reporting desktop startup crashes on Windows and shell security classification edge cases, while a major PR introduces tmux-backed interactive terminal sub-agents for the Web Shell.

## 2. Releases

**v0.21.6** ([Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.21.5...v0.21.6))
- Added experimental native Live Voice support to WebShell on macOS via global shortcut ([#7859](https://github.com/QwenLM/qwen-code/pull/7859))
- Web Shell now keeps conversation turns expanded during active background work
- Fixed CI bash-shell config in container jobs ([#7838](https://github.com/QwenLM/qwen-code/pull/7838))

**v0.21.6-nightly.20260806.cb3dc107f**
- Deflake for glob external-path test using a dedicated empty directory instead of `/tmp` ([#8604](https://github.com/QwenLM/qwen-code/pull/8604))

**desktop-v0.1.0** — First release of the Tauri-based Qwen Code Desktop app, marking the transition away from Electron ([#8092](https://github.com/QwenLM/qwen-code/issues/8092)).

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#8136](https://github.com/QwenLM/qwen-code/issues/8136) | Provider warning sanitizer truncates messages & leaks passwords | Credentials containing `@` are not properly redacted in `/status` payloads — a direct security concern with 8 comments. |
| [#8582](https://github.com/QwenLM/qwen-code/issues/8582) | Read-only shell classifier auto-approves hidden command substitution | P1 security bug: AST-based and regex-based classifiers both miss `${var@P}` and line-continuation tricks, allowing arbitrary code execution in read-only mode. |
| [#8615](https://github.com/QwenLM/qwen-code/issues/8615) | Desktop v0.1.0 crashes on Windows startup (EISDIR) | New desktop release breaks on Windows 11 with `lstat 'C:'` — high visibility since it's the first stable desktop build. |
| [#8550](https://github.com/QwenLM/qwen-code/issues/8550) | `qwen mcp list` hangs on unresponsive SSE servers | P2 bug: no timeout on SSE `endpoint` event means the CLI freezes indefinitely, blocking workflow automation. |
| [#8560](https://github.com/QwenLM/qwen-code/issues/8560) | Web Shell deep-link refresh returns 401 with bearer token | Session deep links (`/session/<id>`) fail auth on refresh when `qwen serve --token` is used — impacts deployed environments. |
| [#7897](https://github.com/QwenLM/qwen-code/issues/7634) | WSL/ConPTY streaming text duplication | Each character renders N times during streaming; the fix PR is open and actively discussed. |
| [#8580](https://github.com/QwenLM/qwen-code/issues/8580) | TUI flickers continuously in tmux < 3.5 | The Ink renderer's overfull-frame clear+repaint cycle causes ~2–3 fps screen flashes in older tmux. |
| [#8538](https://github.com/QwenLM/qwen-code/issues/8538) | Copy-response button does nothing on Windows Desktop | UX bug: clipboard remains unchanged after clicking the copy button, across restarts and reboots. |
| [#8593](https://github.com/QwenLM/qwen-code/issues/8593) | Markdown links in assistant messages are unclickable | Links are styled but clicks are silently swallowed — no browser window opens. |
| [#8532](https://github.com/QwenLM/qwen-code/issues/8532) | CI logs masquerade mocked disk-full errors as runner ENOSPC | Test artifacts confuse operators; 6 comments indicate ongoing triage effort. |

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#7897](https://github.com/QwenLM/qwen-code/pull/7897) | Fix WSL/ConPTY text duplication | Skips the terminal redraw optimizer on WSL and enables sync output on Windows Terminal, resolving N-fold character duplication during streaming. |
| [#8613](https://github.com/QwenLM/qwen-code/pull/8613) | Tmux-backed interactive terminal sub-agent | Lets agents drive a REPL, another CLI agent, or a TUI app inside a tmux session on the daemon host, surfaced live in the Web Shell. |
| [#8350](https://github.com/QwenLM/qwen-code/pull/8350) | Trusted private ASR base URLs | Adds `security.allowedInsecureVoiceBaseUrls` allowlist so managed deployments can route voice transcription through private HTTP/ASR gateways. |
| [#8388](https://github.com/QwenLM/qwen-code/pull/8388) | `qwen review capture-tui` (Phase 2) | Review pipeline can now drive code under a private tmux server and capture pixel-accurate terminal screenshots as evidence. |
| [#8396](https://github.com/QwenLM/qwen-code/pull/8396) | Close four hook trust-boundary holes | Hooks no longer follow redirects; URL whitelist and DNS-level SSRF checks now cover redirect chains and network egress properly. |
| [#8603](https://github.com/QwenLM/qwen-code/pull/8603) | Run heavy autofix jobs on ECS pool | Routes issue-fixing, bundle build, and feedback-address agents off GitHub-hosted runners onto persistent self-hosted ECS infrastructure. |
| [#8332](https://github.com/QwenLM/qwen-code/pull/8332) | Audio bridge for attachments | Transcribes audio attachments through a batch voice model when the primary model lacks audio support, replacing them with machine-transcribed text. |
| [#8578](https://github.com/QwenLM/qwen-code/pull/8578) | Feishu ask-user question cards | Native Card V2 presentation for `ask_user_question`, with structured single/multi-select forms and precise callback correlation. |
| [#8559](https://github.com/QwenLM/qwen-code/pull/8559) | Parallel agent activity feedback | Active parallel-agent status now stays at the conversation tail with auto-expand, collapsing with a smooth transition before the main agent resumes. |
| [#8455](https://github.com/QwenLM/qwen-code/pull/8455) | Echo resume command on exit | The "resume this session" hint is now echoed to the main screen buffer so users see it after quitting VP mode. |

## 5. Feature Request Trends

- **Desktop-first experience**: Multiple issues (#8092, #8596) push for deprecating the Electron app in favor of the Tauri-based desktop, with naming consolidation to `packages/desktop`.
- **Mobile / remote access**: #8595 proposes QR-code pairing for phone access to local sessions ("Local Control" mode), reflecting demand for on-the-go session management.
- **Asynchronous / batch execution**: #8605 requests a `/slow` or `/batch` mode that routes requests through provider async APIs for lower-cost, non-interactive runs.
- **Voice & audio expansion**: #8350 (private ASR URLs) and #8332 (audio bridge) signal strong interest in extending voice capabilities to enterprise and multi-model scenarios.
- **SDK & hooks extensibility**: #8591 requests inline `hooks` configuration in the TypeScript SDK `query()`, reducing the need for separate config-file setup.
- **Observability alignment**: #8589 and #8447 push for OpenTelemetry-convention session telemetry and bounded textual tool-result display across ACP and headless outputs.

## 6. Developer Pain Points

- **Desktop stability on Windows**: The v0.1.0 launch is already marred by a crash-on-open (`EISDIR` on `C:`) and non-functional UI elements (copy button #8538, unclickable links #8593, language setting #8592) — suggesting the Tauri migration needs tightening before broad adoption.
- **Terminal rendering artifacts**: tmux flicker (#8580), WSL text duplication (#7897), and scrollback re-printing (#8557) point to ongoing friction between the Ink renderer and non-standard terminal environments.
- **Security classifier gaps**: The read-only shell classifier bypass via `${var@P}` (#8582) and the credential-leak sanitizer bug (#8136) indicate that security-critical parsing paths need stricter testing, especially around edge-case shell syntax.
- **CI reliability**: Mocked test errors leaking into CI logs (#8532) and `/review` fan-out hangs (#8597) are causing operational noise and burning the 360-minute workflow budget.
- **MCP / SSE robustness**: Indefinite hangs on slow SSE servers (#8550) highlight a missing timeout contract that blocks developers integrating third-party MCP tooling.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-06

---

## 1. Today's Highlights

The v0.9.4 integration train (PR #5135) continues to accumulate commits 77 ahead of `main`, with a substantial batch of Runtime API enhancements landed by the `Copilot` contributor covering memory, MCP, goals, skills, and fleet verifier endpoints. Two bug-fix PRs from `SparkofSpike` address real TUI regressions — mouse-capture scroll conflicts and dead-lettered subagent resumptions — while a Chinese-language Windows beginner guide (PR #5229) expands international documentation coverage.

---

## 2. Releases

**No new releases in the last 24 hours.** The v0.9.4 release train (PR #5135) remains in progress, superseding the prior candidate branch and currently 77 commits ahead of `main`.

---

## 3. Hot Issues

| # | Issue | Author | Why It Matters |
|---|-------|--------|----------------|
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | Only one API key can be saved | ffyuhf | Users juggling multiple providers (DeepSeek, GLM, etc.) must overwrite keys each switch — a friction point for multi-model workflows. |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | Unknown model IDs silently degrade to 128K context | Hmbown | A residual class bug causes 1M-window models to silently compact at the legacy 128K fallback, degrading output quality with no warning. |
| [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) | Filesystem path whitelist for sandbox | WillHouMoe | Xcode build artifacts live outside the workspace; the current `workspace-write` sandbox blocks access to essential logs andDerivedData paths. |
| [#4029](https://github.com/Hmbown/CodeWhale/issues/4029) | Interface similar to Reasonix? | longASKme | Community interest in a Reasonix-style UI pattern signals demand for alternative interaction paradigms beyond the current TUI. |

---

## 4. Key PR Progress

| # | PR | Author | Summary |
|---|-----|--------|---------|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | release: Codewhale v0.9.4 release train | Hmbown | The main integration branch — 77 commits ahead of `main`, includes all 2026-08-01 source candidates plus 18 train commits. |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | feat(acp): expose file/search/git/patch/shell tools over session/prompt | rafaelcavalheri | Enables ACP-driven editors (Zed, third-party adapters) to execute tool calls instead of receiving chat-only responses. |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | feat: Runtime API memory endpoints | Copilot | Adds `/v1/memory` routes for bounded inspection and lifecycle controls — previously no memory resource existed in the Runtime API. |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | feat(runtime-api): bounded MCP server config & lifecycle | Copilot | New `POST /v1/apps/mcp/servers` and mutation routes replace manual TOML/JSON editing for MCP server management. |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | feat(runtime-api): persistent goal-loop state | Copilot | Exposes `GET /v1/threads/{id}/goal` and lifecycle transitions so managed clients can drive goal execution via HTTP. |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | Runtime API: expose verifier receipts & evidence | Copilot | Three new read-only endpoints under `/v1/fleet/runs/{run_id}/` let clients identify which tasks failed and why. |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | feat(runtime-api): skill lifecycle endpoints | Copilot | Full install/update/uninstall/trust/audit routes under `require_runtime_token` — parity with the TUI's skill management. |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | feat(tui/shell): surface real wait elapsed time | SparkofSpike | Exposes `duration_ms` in tool content (not just metadata) so the model can distinguish short waits from long stalls. |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | feat(tui/subagent): resume interrupted children from checkpoint | SparkofSpike | Fixes dead-lettered `interrupted_continuable` children — long tasks can now be resumed via followup instead of re-dispatch. |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | fix(tui): keep alternate scroll off during mouse capture | SparkofSpike | Resolves mouse-wheel / trackpad scrolling being hijacked by composer input history when transcript overflows the screen. |

---

## 5. Feature Request Trends

1. **Multi-provider key management** — Issue #5250 highlights a clear demand for per-provider API key storage, reflecting the growing multi-model workflow.
2. **Transparent model capability signaling** — Issue #5244 underscores the need for explicit fallback warnings when unknown model IDs hit legacy defaults.
3. **Sandbox path flexibility** — Issue #5005 points to power-user toolchains (Xcode, build systems) that require controlled access to files outside the workspace.
4. **ACP tool-call execution** — PR #5225 responds to community integrations (Zed, `acp-deepseek-adapter`) needing full agent capabilities, not just chat streaming.
5. **Runtime API completeness** — The cluster of PRs from `Copilot` (#5129–#5133, #5132) shows sustained demand for a first-class HTTP boundary covering memory, MCP, goals, skills, and fleet verification.

---

## 6. Developer Pain Points

- **Silent capability degradation:** Unknown model IDs silently falling back to 128K context (Issue #5244) erodes trust — users need explicit warnings, not invisible compaction.
- **Single-key storage bottleneck:** Managing multiple AI providers requires manual key overwrites (Issue #5250), a recurring friction for multi-model users.
- **Sandbox rigidity:** Build tools and debuggers that produce artifacts outside the workspace (e.g., Xcode DerivedData) are blocked by the default `workspace-write` sandbox (Issue #5005).
- **Terminal input conflicts:** Mouse capture and alternate-scroll modes race during long transcripts, breaking scroll behavior (PR #5234 fix).
- **Subagent resume dead-locks:** Interrupted long-running subagents were dead-lettered with no recovery path (PR #5242 fix), forcing full re-dispatch.
- **Linker argument quoting on Windows:** Paths with spaces break OpenHarmony SDK builds due to `%*` expansion stripping quotes (PR #5095, closed).
- **ratatui version instability:** A dependency bump in `ratatui-core` introduced a blocking cursor-position-report race condition (PR #5192, closed with pin to `=0.30.0`).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*