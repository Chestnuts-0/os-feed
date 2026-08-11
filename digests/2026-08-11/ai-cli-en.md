# AI CLI Tools Community Digest 2026-08-11

> Generated: 2026-08-11 00:56 UTC | Tools covered: 9

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



# AI CLI Tools Cross-Tool Comparison Report — 2026-08-11

## 1. Ecosystem Overview

The AI CLI tools landscape is in a phase of rapid maturity, with all eight major projects shipping incremental releases and actively addressing reliability regressions. The dominant theme is the tension between expanding agent capabilities (multi-agent orchestration, subagents, browser automation) and foundational stability (session management, cross-platform consistency, session persistence). Enterprise adoption is introducing new friction points around policy enforcement and model access that did not exist in early consumer-only cycles. Community-driven feature requests increasingly converge on cross-session continuity, suggesting the market is transitioning from single-session tools to persistent development assistants.

## 2. Activity Comparison

| Tool | Hot Issues | Key PRs (Open/Closed) | Release Today |
|------|-----------|----------------------|---------------|
| **Claude Code** | 10 | 3 (1 open, 2 merged) | v2.1.227 |
| **OpenAI Codex** | 10 | 10 (all active) | rust-v0.148.0-alpha.6, v0.147.0-alpha.6.6 |
| **Gemini CLI** | 10 | 10 (mix of fixes/features) | v0.56.0-nightly |
| **GitHub Copilot CLI** | 10 | 0 (no updates) | v1.0.79 |
| **Kimi Code CLI** | 1 | 0 | None |
| **OpenCode** | 10 | 10 (4+ open) | v1.18.16 |
| **Pi** | 10 | 10 (5 open) | None |
| **Qwen Code** | 10 | 10 (6 open) | v0.21.9, nightly |
| **DeepSeek TUI** | 2 (EPICs) | 3 (1 open, 2 merged) | v0.9.6 |

**Activity ranking (PR velocity):** Codex ≈ Gemini CLI ≈ OpenCode ≈ Pi ≈ Qwen Code > Claude Code > DeepSeek TUI > Copilot CLI > Kimi Code CLI.

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Needs |
|-----------|---------------|----------------|
| **Cross-session memory / context persistence** | Kimi Code CLI, Claude Code, OpenCode, Qwen Code | Persistent project patterns, preferences, and conversation context across terminal sessions; no tool fully delivers this yet. |
| **Multi-agent / subagent orchestration** | OpenCode, Qwen Code, Gemini CLI, Pi, DeepSeek TUI | Subagent reliability, permission gating, depth capping, and inter-session coordination remain fragmented across tools. |
| **Browser automation maturity** | Gemini CLI, OpenCode, Claude Code | Wayland support, session lock recovery, and MCP tool contract enforcement are recurring pain points. |
| **MCP reliability & auth robustness** | Copilot CLI, Codex, Gemini CLI, Claude Code | Initialize-timeout failures, OAuth edge cases, and trailing-slash issuer URL bugs affect multiple stacks. |
| **Session transcript / audit trail** | Claude Code, Qwen Code, OpenCode | JSONL transcript gaps, unbounded log growth, and rewind-index misalignment undermine compliance workflows. |
| **Reasoning-effort controls** | Qwen Code, OpenCode | Per-model / per-agent sliders for thinking/effort, with proper prompt-cache support. |
| **Cross-platform session continuity** | Claude Code, Gemini CLI | Syncing conversation state between CLI, desktop, and web interfaces without manual handoff. |

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Qwen Code | DeepSeek TUI | OpenCode | Pi | Kimi Code CLI |
|-----------|------------|-------------|-----------|-------------|-----------|-------------|----------|-----|--------------|
| **Primary focus** | Enterprise CLI + Desktop sync | Rust-native CLI + Computer Use | Multi-agent subagents + eval infra | GitHub-integrated enterprise CLI | Multi-agent fleet + WebShell | Modular TUI crate architecture | Provider flexibility + embeddable UI | TUI polish + session reliability | Context persistence |
| **Target users** | Enterprise/Compliance teams | Windows developers, Computer Use power users | Open-source/eval-driven teams | GitHub Enterprise orgs | Multi-agent researchers | Rust ecosystem developers | Multi-provider power users | Terminal-native developers | General CLI users |
| **Technical approach** | Feature-flag + billing layer | Rust tooling + sandboxes | Subagent lifecycle + eval gating | Policy-driven model access | Leader-worker fleet + ACP | Monolith-to-crates decomposition | Config-first provider routing | Defensive input sanitization | Manual memory config |
| **Platform strength** | macOS/Linux; Windows has GPU crashes | Cross-platform; Windows is primary pain point | macOS/Linux; Wayland gaps | Cross-platform; Windows extension issues | Cross-platform | Linux-first (TUI-native) | Cross-platform | Cross-platform | Windows/Linux |

**Key differentiators:**
- **Claude Code** is the only tool with an active CLI↔Desktop sync debate, signaling a hybrid-desktop strategy.
- **Codex** uniquely targets Computer Use on Windows with significant community investment (and friction).
- **Gemini CLI** is the most eval-centric, with CI-gated behavioral tests and SSRF hardening.
- **Qwen Code** is the most aggressive on multi-agent fleet coordination and WebShell architecture.
- **DeepSeek TUI** is the most architecturally self-critical, pursuing a formal crate-decomposition EPIC.
- **Kimi Code CLI** is the most sparse in activity but has the clearest single-request signal (persistent memory).

## 5. Community Momentum & Maturity

**High momentum / rapid iteration:**
- **Gemini CLI** and **Codex** lead in PR velocity (10 PRs each) with active P1 triage cycles.
- **Qwen Code** and **OpenCode** also show strong dual release + PR activity, indicating healthy engineering throughput.
- **DeepSeek TUI** is in a deliberate architectural refactoring phase rather than feature-ship mode.

**Mature but steady:**
- **Claude Code** ships targeted fixes with strong community engagement on cross-platform continuity; lower PR count reflects a more polished, less experimental codebase.
- **Pi** shows steady TUI-hardening work with clear session-reliability focus.

**Emerging / lower velocity:**
- **GitHub Copilot CLI** has zero PR updates and a cluster of enterprise policy regressions, suggesting the team is consumed by platform-governance issues rather than tool development.
- **Kimi Code CLI** has minimal issue activity (1 feature request) and no releases, indicating an early-stage or quietly iterative project.

## 6. Trend Signals

| Trend | Signal Strength | Implication for Developers |
|-------|----------------|---------------------------|
| **Session irrecoverability is a top-tier risk** | High (Claude Code, Copilot CLI, Qwen Code, Pi all report hard-limit session traps) | Choose tools with transparent compaction/recovery paths; audit transcript and payload limits before production use. |
| **Windows is the universal fragility surface** | High (Codex, Claude Code, Copilot CLI, OpenCode, Pi all flag Windows-specific regressions) | Windows users should prefer tools with longer stable release cycles or prioritize Linux/macOS for critical workflows. |
| **Multi-agent orchestration is the next feature frontier** | High (OpenCode, Qwen Code, Gemini CLI, DeepSeek TUI all investing) | Early adopters should expect subagent reliability gaps; tools with eval gating (Gemini) may mature faster. |
| **Cross-session memory is an unmet market need** | Medium-High (Kimi Code CLI top request; Claude Code sync debate; OpenCode persistence requests) | First tool to ship reliable cross-session context will gain significant developer loyalty. |
| **MCP reliability is an ecosystem weak spot** | Medium (Copilot CLI 60s timeout, Codex auth trailing-slash, Claude Code Chrome upload) | Integrate MCPs with explicit timeout and retry strategies; avoid blocking paths on MCP handshake. |
| **Enterprise policy is introducing new failure modes** | Medium (Copilot CLI model blocks, Claude Code CVP false positives) | Enterprise deployments should validate model access and MCP allowlists in staging before production rollouts. |
| **TUI rendering consistency remains unsolved** | Medium (OpenCode CPU regression, Pi Alt+Enter race, Qwen banner glitch, DeepSeek redraw) | For terminal-native workflows, prefer tools with active TUI hardening cycles; avoid during streaming under tmux/SSH where possible. |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills — Community Highlights Report
**Data as of 2026-08-11** · Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

| # | PR | Skill | Status | Summary |
|---|-----|-------|--------|---------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval recall fix** | 🟢 Open | Fixes a critical bug where `run_eval.py` always reports `recall=0%`, breaking the entire description-optimization loop. Also patches Windows stream reading, trigger detection, and parallel-worker issues. |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | 🟢 Open | Pre-delivery audit skill: mechanical file verification + four-dimension reasoning quality gate. Universal across projects and stacks. |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 🟢 Open | Typographic quality control — prevents orphan lines, widow paragraphs, and numbering misalignment in AI-generated documents. |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | **odt** | 🟢 Open | OpenDocument Format skill: create, fill, read, and convert `.odt` / `.ods` / `.odf` files. Triggers on LibreOffice and ISO-standard document requests. |
| 5 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design** | 🟢 Open | Clarity and actionability overhaul of the frontend-design skill — ensures every instruction is executable within a single conversation. |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | 🟢 Open | Meta-skills that evaluate other skills across five dimensions: structure, documentation, examples, security, and functional quality. |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 🟢 Open | Comprehensive testing skill: Testing Trophy philosophy, AAA unit tests, React component testing with Testing Library, and more. |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 🟢 Open | Retro game-development skill for Pyxel (8-bit pixel-art engine), covering write → run → inspect → iterate workflow via MCP. |

> **Note:** All top-listed PRs are currently **open**. No merge activity is reflected in the dataset.

---

## 2. Community Demand Trends (from Issues)

| Trend | Representative Issue | Key Signal |
|-------|---------------------|------------|
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) | Community skills impersonating the `anthropic/` namespace is the single most-discussed issue — users demand namespace integrity and permission transparency. |
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) | Strong appetite for built-in organizational skill distribution, eliminating manual Slack/Teams file-sharing workflows. |
| **skill-creator toolchain reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) · [#1169](https://github.com/anthropics/skills/issues/1169) | The description-optimization loop (`run_eval.py` / `run_loop.py`) is fundamentally broken — 0% recall across all iterations. Fixing this is a top infrastructure priority. |
| **Duplicate/namespace pollution** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) | Installing `document-skills` and `example-skills` plugins yields identical content, inflating the context window. |
| **Context-window hygiene** | [#1487](https://github.com/anthropics/skills/issues/1487) · [#1329](https://github.com/anthropics/skills/issues/1329) | Skills like `claude-api` eagerly inject ~156k tokens; users propose compact symbolic memory to reduce agent state bloat. |
| **Quality-gate / reasoning pipelines** | [#1385](https://github.com/anthropics/skills/issues/1385) | Proposal for a three-gate pipeline (pre-task calibration → adversarial review → delivery verification) — signals demand for structured output assurance. |
| **SAP / enterprise analytics** | [#181](https://github.com/anthropics/skills/pull/181) · [#1175](https://github.com/anthropics/skills/issues/1175) | Enterprise-class skills (predictive analytics, SharePoint handling) are on the horizon but need security guidance. |

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and address real gaps — strong candidates for near-term landing:

| PR | Skill | Why It's High-Potential |
|----|-------|------------------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Solves a universal problem (pre-delivery verification) with a model-agnostic approach. |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Addresses a pain point in every AI-generated document; zero overlap with existing skills. |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer** | Meta-tooling that improves the entire skill ecosystem's signal-to-noise ratio. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Testing is a top-3 developer workflow; comprehensive coverage is missing from the current skill set. |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt** | Fills a format gap — no existing skill covers OpenDocument formats. |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator fix** | Not a new skill, but unblocking the skill-creator pipeline is a prerequisite for all community contributions. |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Niche but passionate audience; demonstrates the creative/entertainment skill frontier. |

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is for **reliable skill-tooling infrastructure** — specifically fixing the broken `run_eval.py` recall pipeline and establishing trust/separation boundaries around the `anthropic/` namespace — before the ecosystem can scale quality skill contributions.

Put differently: users want the *means to build and verify skills* to work correctly, and they want *confidence that skills carry truthful provenance*, more than they want any single new domain skill.

---



# Claude Code Community Digest — 2026-08-11

## Today's Highlights

Anthropics released **v2.1.227**, fixing a billing regression where Max plan users were incorrectly prompted to enable usage credits for Fable, and resolving a critical `claude-code-action` bug that caused every Bash command to fail. The community is actively discussing cyber-safeguard false positives for CVP-approved organizations and a highly-upvoted request to sync conversation history between the CLI and Desktop app.

---

## Releases

### v2.1.227
Two targeted bug fixes:
- **Feature flag / billing regression:** Feature flags were being evaluated without checking the user's subscription tier when a session started with an expired login token, incorrectly prompting Max plan users to enable usage credits for Fable.
- **GitHub Action Bash failure:** All Bash commands under `claude-code-action` were failing due to an `allowed_no` configuration issue.

🔗 [GitHub Release](https://github.com/anthropics/claude-code)

---

## Hot Issues

### 1. CVP-approved orgs receiving cyber-safeguard blocks
**[Issue #84352](https://github.com/anthropics/claude-code/issues/84352)** · 32 comments · 👍 1
A Claude.ai organization that received Cyber Verification Program approval is again being blocked by cyber-safeguard checks, with the Verification Portal now showing "Under review" — contradicting the prior approval email. Affects enterprise and compliance-conscious teams.

### 2. Sync conversation history between CLI and Desktop
**[Issue #28791](https://github.com/anthropics/claude-code/issues/28791)** · 31 comments · 👍 120
The most-upvoted open feature request: users want conversation history to flow seamlessly between the CLI and Claude Code Desktop app, eliminating manual export/copy-paste workflows. Strong community demand.

### 3. Seamless session sharing between Claude Code and Claude Desktop
**[Issue #15881](https://github.com/anthropics/claude-code/issues/15881)** · 9 comments · 👍 60
A related but distinct request for direct session context sharing between Claude Code (CLI) and Claude Desktop, flagging the current friction of manual file-based handoffs.

### 4. Fable 5 gated behind usage credits on Max plan (CLOSED)
**[Issue #80749](https://github.com/anthropics/claude-code/issues/80749)** · 8 comments · 👍 1
Now closed following the v2.1.227 fix. Author confirmed the "regression in 2.1.216" claim was incorrect — the behavior was intermittent across versions, consistent with the expired-token billing bug now patched.

### 5. Cowork stale-cache corruption under Fable 5
**[Issue #67585](https://github.com/anthropics/claude-code/issues/67585)** · 7 comments · 👍 1
Host writes appear clean on disk, but the sandbox read view returns truncated data when using Claude Fable 5. Full diagnosis and fix proposed by the reporter. Cross-platform concern (Windows, sandbox, data-loss labels).

### 6. `claude-in-chrome` file_upload fails with path error
**[Issue #84627](https://github.com/anthropics/claude-code/issues/84627)** · 7 comments · 👍 1
The MCP tool `mcp__claude-in-chrome__file_upload` returns `paths: expected array, received undefined` on every call against valid file input elements, across multiple sessions and element references. Blocks browser-automation workflows.

### 7. Claude Desktop GPU crash (exitCode 101457950) on Windows
**[Issue #83744](https://github.com/anthropics/claude-code/issues/83744)** · 6 comments
Windows Desktop app crash linked to GPU process failure, killing the entire application. Ongoing issue with no resolution yet.

### 8. Spoofed "file was modified" system reminders after Write/Edit
**[Issue #74636](https://github.com/anthropics/claude-code/issues/74636)** · 5 comments
A `<system-reminder>` claiming a file was modified appears after Claude's own Write/Edit tool calls, confusing the model and potentially causing redundant file operations. Security and tool-correctness concern.

### 9. Enter key creates newline instead of sending in Code tab
**[Issue #85013](https://github.com/anthropics/claude-code/issues/85013)** · 1 comment
Regression in the Desktop Code tab where Enter produces a newline rather than submitting the message, disrupting the expected interaction pattern.

### 10. Interactive sessions never write transcript JSONL (2.1.227 regression)
**[Issue #85665](https://github.com/anthropics/claude-code/issues/85665)** · Created 2026-08-11
A new regression in v2.1.227: interactive sessions fail to write transcript JSONL files, while headless `-p` mode is unaffected. Regression boundary traced to 2.1.226 → 2.1.227. Critical for audit and debugging workflows.

---

## Key PR Progress

### 1. Multi-platform `/code-review` with GitLab support
**[PR #34951](https://github.com/anthropics/claude-code/pull/34951)** · Open
Adds automatic GitHub/GitLab detection and full GitLab (including self-hosted) support for the `/code-review` command, eliminating the need for duplicated logic across platforms. Addresses [#26932](https://github.com/anthropics/claude-code/issues/26932).

### 2. Community plugin: `entroly-context` for budget-aware context management
**[PR #85464](https://github.com/anthropics/claude-code/pull/85464)** · Closed (merged)
Introduces a community plugin using [Entroly](https://github.com/juyterman1000/entroly) to select context intelligently when codebases exceed the context window, enabling budget-aware session management for Claude Code.

### 3. Enforce Task tool and model metadata in docs
**[PR #9262](https://github.com/anthropics/claude-code/pull/9262)** · Closed (merged)
Documents the `claude-3-5-haiku-latest` model via the `model` parameter on the commit command and requires the Task tool across commit workflows to ensure context isolation best practices.

---

## Feature Request Trends

- **Cross-platform session continuity** — The top community desire is seamless context sync between CLI, Desktop, and web Claude. Two separate high-upvote issues (#28791, #15881) converge on the same need: users work across interfaces and expect continuity without manual handoff.
- **Input ergonomics and keybinding flexibility** — Multiple issues (#74655, #85013) highlight dissatisfaction with Enter-key behavior and requests for opt-in, state-independent submit keys. The TUI input model is a recurring friction point.
- **Session management controls** — Requests for disabling session switching (#85667) and better session resume semantics (#85657) indicate users want more granular control over session lifecycle, especially in multi-project or remote environments.
- **Post-compaction behavior** — Issue #85138 calls for a frontmatter opt-out from skill replay after compaction, reflecting growing pain with how the system re-executes skills with stale `$ARGUMENTS` after context pruning.

---

## Developer Pain Points

1. **Billing/plan evaluation bugs** — The v2.1.227 fix addressed a significant regression where expired tokens caused incorrect plan evaluation. Users need confidence that subscription tiers are respected consistently across session boundaries.

2. **Transcript and audit trail gaps** — The new v2.1.227 regression (#85665) that stops interactive sessions from writing JSONL transcripts is a critical blow for teams relying on session logs for debugging, compliance, or replay.

3. **Sandbox and caching corruption** — Issue #67585 (Cowork stale-cache / Fable 5 truncation) and #85666 (SIGKILL-leaked SOCKS sockets causing 100% CPU spin) point to underlying reliability concerns in the sandbox and network layers that amplify under heavy or interrupted workloads.

4. **Windows Desktop instability** — GPU crashes (#83744), TUI screen buffer corruption from child-process output (#85651), and installation failures across all methods (#85663) indicate Windows remains the most fragile platform surface.

5. **Tool-correctness and spoofed signals** — Spoofed system reminders (#74636) and task-notification disclaimers being misinterpreted as user acknowledgements (#85662) suggest the model can be misled by harness-injected events, creating reliability risks in automated workflows.

6. **MCP tool fragility** — The `claude-in-chrome` file_upload failure (#84627) with undefined path arrays highlights ongoing maturity gaps in MCP tool contract enforcement.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-11

## 1. Today's Highlights

The Codex team shipped two Rust tooling releases (0.148.0-alpha.6 and 0.147.0-alpha.6.6) alongside a batch of app-server and CLI improvements. Community attention is overwhelmingly focused on Windows stability—multiple high-engagement reports document freezes, crashes, and Computer Use regressions on Windows 11—while developers on macOS and Linux flag remote-control resume failures and context-window limitations.

## 2. Releases

- **rust-v0.148.0-alpha.6** — Latest alpha; see release notes [here](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.6)
- **rust-v0.147.0-alpha.6.6** — Patch-level update to the prior alpha branch [here](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.6)

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#20214](https://github.com/openai/codex/issues/20214) | Codex App frequently freezes/stutters on Windows 11 | Blocks daily use for many Windows users; persists despite sufficient RAM/CPU. | 93 comments · 81 👍 |
| [#37458](https://github.com/openai/codex/issues/37458) | Codex extension fails to start — "couldn't load its resources" | Extension cannot initialize at all on Windows; no path to recovery without a fix. | 31 comments |
| [#37013](https://github.com/openai/codex/issues/37013) | Windows Computer Use reuses stale `node_repl` context | Cross-call state leakage breaks Computer Use after the first JS execution. | 18 comments · 4 👍 |
| [#37383](https://github.com/openai/codex/issues/37383) | Computer Use fails on Windows with error `0x80070003` | App/window discovery is completely broken for affected Windows 11 25h2 users. | 13 comments · 4 👍 |
| [#20930](https://github.com/openai/codex/issues/20930) | Notifications don't fire with remote connections | Remote-control workflow is broken end-to-end for users on macOS desktop + remote Linux host. | 10 comments · 16 👍 |
| [#36645](https://github.com/openai/codex/issues/36645) | App exits after task completion when Browser Use tears down | Users lose their session unexpectedly; no graceful recovery path. | 8 comments · 2 👍 |
| [#37403](https://github.com/openai/codex/issues/37403) | macOS regression: cannot resume Remote Control / CLI thread | Post-August-7 update broke an established mobile→desktop remote-control workflow. | 5 comments · 4 👍 |
| [#34619](https://github.com/openai/codex/issues/34619) | Restore GPT-5.6 Sol's 372k context window | 372k context was a key differentiator; its absence limits complex codebase tasks. | 5 comments · 18 👍 |
| [#37373](https://github.com/openai/codex/issues/37373) | MCP app-server strips trailing slash from auth issuer | Auth validation silently fails for MCP servers with canonical issuer URLs. | 4 comments · 3 👍 |
| [#35606](https://github.com/openai/codex/issues/35606) | Windows freezes & crashes consume 100% of weekly Pro usage | Resource leaks and crashes force Pro users to burn quota on broken sessions. | 3 comments |

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#37906](https://github.com/openai/codex/pull/37906) | Make gRPC code-mode notifications fire-and-forget | Notifications no longer block cell completion; acknowledgment RPC kept as compatibility no-op. |
| [#37902](https://github.com/openai/codex/pull/37902) | Defer `view_image` processing to history insertion | Image decoding/resizing moved to the shared history path; invalid images use existing omission placeholder. |
| [#37891](https://github.com/openai/codex/pull/37891) | Use thread configuration for `app/read` | Added optional `threadId` param; loads effective config before feature gating and workspace policy. |
| [#37882](https://github.com/openai/codex/pull/37882) | Read safety buffering from response metadata | Parses safety-buffering payloads from typed SSE metadata; top-level field remains authoritative. |
| [#37878](https://github.com/openai/codex/pull/37878) | Add configurable goal token budget limits | New `goals.max_goal_token_budget` setting controls default budgets and rejects over-budget updates. |
| [#37875](https://github.com/openai/codex/pull/37875) | Honor configured Windows sandbox level for managed networking | Fixes implicit selection of the elevated sandbox backend when a restricted token is configured. |
| [#37896](https://github.com/openai/codex/pull/37896) | Add hermetic Windows SDK and MSVC runtime repos | Pinned SDK/runtime repos for x64 and arm64; requires explicit EULA acceptance via `--repo_env`. |
| [#37867](https://github.com/openai/codex/pull/37867) | Reject duplicate resolved paths in `apply_patch` | Patches containing operations resolving to the same file (e.g. `duplicate.txt` vs `./duplicate.txt`) are now rejected. |
| [#37864](https://github.com/openai/codex/pull/37864) | Support MCP form input in full-access user threads | Recognizes `openai/standard-form-input` extension so non-approval form fields surface correctly in auto-approved sessions. |
| [#37871](https://github.com/openai/codex/pull/37871) | Extract persisted history types into dedicated crate | New `codex-history` crate isolates `RolloutItem`, `RolloutLine`, `CompactedItem`, and history state types. |

## 5. Feature Request Trends

- **Windows-first stability investment** — The dominant request cluster targets Windows-specific reliability: freezing, crashing, extension load failures, and Computer Use regressions.
- **Context-window parity** — Users are pushing to restore the 372k context window on GPT-5.6-Sol, either natively or via an opt-in config.
- **Remote-control continuity** — Reliable resumption of CLI threads from mobile and consistent notification delivery across remote connections are frequently requested.
- **MCP auth robustness** — Trailing-slash handling and OAuth contention are emerging as areas needing stricter validation and better error signaling.
- **Transparent quota management** — Crashes that silently consume Pro usage are driving demand for better error reporting and quota protection.

## 6. Developer Pain Points

1. **Windows performance & crashes** — The single biggest pain point. Multiple reports describe freezes, full crashes, and extension load failures that render the app unusable, with some users burning their entire weekly Pro quota on broken sessions ([#20214](https://github.com/openai/codex/issues/20214), [#35606](https://github.com/openai/codex/issues/35606), [#30906](https://github.com/openai/codex/issues/30906)).

2. **Computer Use on Windows is unreliable** — Stale execution contexts ([#37013](https://github.com/openai/codex/issues/37013)), discovery failures with `0x80070003` ([#37383](https://github.com/openai/codex/issues/37383)), and unexpected app exits after task completion ([#36645](https://github.com/openai/codex/issues/36645)) form a consistent pattern of Windows Computer Use degradation.

3. **Remote-control & notification gaps** — Desktop notifications do not fire over remote connections ([#20930](https://github.com/openai/codex/issues/20930)), and a recent macOS update broke CLI-thread resumption ([#37403](https://github.com/openai/codex/issues/37403)), frustrating users who rely on cross-device workflows.

4. **Context-window reduction** — The loss of GPT-5.6-Sol's 372k context window is felt by users running large-codebase tasks and is a recurring enhancement request ([#34619](https://github.com/openai/codex/issues/34619)).

5. **MCP & auth edge cases** — Trailing-slash stripping on issuer URLs ([#37373](https://github.com/openai/codex/issues/37373)) and OAuth reauthentication loops ([#37219](https://github.com/openai/codex/issues/37219)) cause subtle but blocking failures for developers integrating external tools.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-11

---

## 1. Today's Highlights

Gemini CLI v0.56.0-nightly dropped today, accompanied by a cluster of P1 fixes targeting subagent reliability, macOS sandbox crashes, and a critical SSRF vulnerability in web fetching. The community is actively engaged around subagent behavior — three high-profile issues cover subagent hang recovery, generalist-agent stalls, and missing permission gating — while the eval infrastructure sees notable tooling improvements with new static-analysis gating and failure-timeline output.

---

## 2. Releases

**v0.56.0-nightly.20260810.gcf22ac7e8** — nightly build pushed yesterday.
[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260809.gcf22ac7e8...v0.56.0-nightly.20260810.gcf22ac7e8)

---

## 3. Hot Issues

1. **[BUG] Subagent recovery after MAX_TURNS reported as GOAL success** (#22323) · 🔴 P1 · 12 comments · 2 👍
   The `codebase_investigator` subagent silently reports `status: "success"` with `Termination Reason: "GOAL"` even when it hit the turn ceiling before completing any analysis. This masks real failures and makes debugging agent loops extremely hard.
   [Link](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **[BUG] Generalist agent hangs forever** (#21409) · 🔴 P1 · 8 comments · 8 👍
   When Gemini defers to the generalist subagent, the CLI can stall indefinitely — users report waiting up to an hour. Disabling subagents is the only known workaround, making this a high-visibility reliability issue.
   [Link](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **[ENH] Leverage model's bash affinity via Zero-Dependency OS Sandboxing** (#19873) · 🟡 P2 · 8 comments · 1 👍
   Proposes using POSIX tools natively within a sandbox so the model's bash-trained behavior can be leveraged without compromising security. An ambitious feature that aligns with Gemini 3's native tooling style.
   [Link](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **[Epic] Robust component-level evaluations** (#24353) · 🔴 P1 · 7 comments
   Tracks the expansion of the behavioral eval suite (76 tests across 6 Gemini models). Critical for CI-gated quality assurance as the agent surface grows.
   [Link](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **[Epic] AST-aware file reads, search, and mapping** (#22745) · 🟡 P2 · 7 comments · 1 👍
   Investigates whether AST-based tooling can reduce token waste and misaligned reads by understanding code structure natively. A performance-quality improvement with broad impact.
   [Link](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **[BUG] Gemini does not use skills and sub-agents enough** (#21968) · 🟡 P2 · 6 comments
   Anecdotal but widespread: the model ignores registered custom skills and subagents unless explicitly prompted. Users with "gradle" and "git" skills report they are never auto-triggered.
   [Link](https://github.com/google-gemini/gemini-cli/issues/21968)

7. **[BUG] Auto Memory retrying low-signal sessions indefinitely** (#26522) · 🟡 P2 · 5 comments
   Sessions that the extraction agent dismisses as low-signal remain unprocessed and are surfaced again on every cycle, causing redundant work and potential noise.
   [Link](https://github.com/google-gemini/gemini-cli/issues/26522)

8. **[BUG] Shell command execution stuck "Waiting input" after completion** (#25166) · 🔴 P1 · 4 comments · 3 👍
   Simple CLI commands complete but the shell tool state remains "Awaiting user input", freezing the agent loop. High frustration for everyday users.
   [Link](https://github.com/google-gemini/gemini-cli/issues/25166)

9. **[BUG] Browser subagent fails on Wayland** (#21983) · 🔴 P1 · 4 comments · 1 👍
   The browser agent terminates with `GOAL` without performing work under Wayland compositors, blocking Linux users who cannot fall back to X11.
   [Link](https://github.com/google-gemini/gemini-cli/issues/21983)

10. **[BUG] Subagents running without permission since v0.33.0** (#22093) · 🔴 P1 · 3 comments
    After upgrading, subagents activate even when agents mode is explicitly disabled — a regression that undermines user control and trust.
    [Link](https://github.com/google-gemini/gemini-cli/issues/22093)

---

## 4. Key PR Progress

1. **Fix VS Code IDE companion disposable tracking** (#28764) · 🟡 P2 · `size/s`
   Two registrations in `activate()` were wrapped in comma expressions, causing only the last Disposable of each pair to be tracked. Fixes `gemini.diff.accept` command registration.
   [Link](https://github.com/google-gemini/gemini-cli/pull/28764)

2. **Fix OAuth redirect URI for Cloud Workstations** (#28688) · 🟡 P3 · `size/m`
   OAuth flows in GCP Workstations VMs were failing because the redirect URI was statically bound to `localhost`. Now dynamically resolved.
   [Link](https://github.com/google-gemini/gemini-cli/pull/28688)

3. **Fix IDE connection directory mismatch under Cider / FUSE** (#28729) · `size/m`
   Gemini CLI failed to connect to the IDE companion when virtual or remapped directory paths were in use. The fix resolves the mismatch during connection port detection.
   [Link](https://github.com/google-gemini/gemini-cli/pull/28729)

4. **Add tool-call failure summaries to evals** (#28305) · 🟡 P3 · `size/l`
   Behavioral evals now print a compact, numbered timeline of tool calls (with status and error details) on failure. Greatly improves eval debugging speed.
   [Link](https://github.com/google-gemini/gemini-cli/pull/28305)

5. **Add `eval:validate` static analysis CLI** (#28344) · 🟡 P3 · `size/xl`
   New command validates eval source files against 9 rules and exits non-zero on violations, enabling CI gating for the eval suite.
   [Link](https://github.com/google-gemini/gemini-cli/pull/28344)

6. **Fix false model capacity exhaustion errors** (#28730) · 🟡 P2
   Corrected client-side quota lookup mapping and ensures the "Keep trying" UI option persists during transient capacity surges instead of silently failing.
   [Link](https://github.com/google-gemini/gemini-cli/pull/28730)

7. **Fix MCP OAuth token refresh with stored client ID** (#28481) · 🔴 P1 · `size/m` · ✅ CLOSED
   Refresh was failing before any network I/O for servers using OAuth discovery + dynamic client registration, and the failure incorrectly deleted stored credentials, forcing re-auth on every start.
   [Link](https://github.com/google-gemini/gemini-cli/pull/28481)

8. **Fix SSRF vulnerability in web-fetch via async DNS** (#28557) · 🔴 P1 · `size/m`
   `isBlockedHost` only checked literal IPs synchronously; domain names resolving to internal ranges (e.g., `169.254.169.254`) bypassed validation. Now uses `isPrivateIpAsync` for proper async resolution.
   [Link](https://github.com/google-gemini/gemini-cli/pull/28557)

9. **Handle EACCES in `resolveToRealPath` to prevent sandbox crash** (#28734) · 🔴 P1 · `size/s`
   macOS Seatbelt sandboxing caused a startup crash when the CWD was inside a Git repo. The path resolution now recovers from additional errno codes beyond the previously handled set.
   [Link](https://github.com/google-gemini/gemini-cli/pull/28734)

10. **Prevent boolean thought parts leaking as `[Thought: true]`** (#28624) · 🟡 P2 · `size/m`
    Internal thought parts with `thought: true` were being serialized into the text representation, producing noisy `[Thought: true]` artifacts in the output stream.
    [Link](https://github.com/google-gemini/gemini-cli/pull/28624)

---

## 5. Feature Request Trends

- **Subagent autonomy & visibility** — Users want the model to reliably discover and use registered skills/subagents without explicit prompting (#21968), and to make subagent trajectories inspectable and shareable via `/chat share` (#22598).
- **AST-aware codebase tools** — Two linked epics (#22745, #22746) explore AST-based file reading, searching, and mapping to reduce token waste and improve navigation precision.
- **Bash-native OS sandboxing** — A proposal (#19873) to let the model use POSIX tools natively within a zero-dependency sandbox, leaning into Gemini's bash affinity while preserving security.
- **Browser agent resilience** — Requests for automatic session takeover, lock recovery (#22232), and settings.json override respect (#22267) to make browser automation more robust.
- **Auto Memory quality** — Suggestions to surface or quarantine invalid inbox patches (#26523) and reduce unnecessary transcript logging (#26525) for better privacy and signal quality.

---

## 6. Developer Pain Points

- **Subagent reliability** is the dominant theme: hangs (#21409), silent GOAL misreporting (#22323), permission regressions (#22093), and skills going unused (#21968) are creating friction for anyone relying on multi-agent workflows.
- **Shell tool state bugs** — Commands completing but leaving the CLI in a perpetual "Waiting input" state (#25166) disrupt the interactive flow.
- **Auto Memory loop** — Low-signal sessions are retried indefinitely (#26522), and invalid patches are silently skipped rather than quarantined (#26523), degrading memory quality over time.
- **Browser agent on non-Linux/unsupported displays** — Wayland failures (#21983) and persistent profile locks (#22232) block a subset of users from using web automation at all.
- **Quota and capacity messaging** — False exhaustion errors (#28730) and the 400-error threshold at >128 tools (#24246) confuse users during normal operation with many integrations enabled.
- **Workspace clutter** — The model frequently creates temporary scripts in random directories (#23571), making clean commits difficult.
- **Security awareness** — The SSRF fix (#28557) and deterministic redaction requests (#26525) show the community is vigilant about network and data-exposure risks.

---

*Generated from github.com/google-gemini/gemini-cli data as of 2026-08-11.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-11

## 1. Today's Highlights

The Copilot CLI community is grappling with a cluster of enterprise model-access issues, including sporadic policy blocks (#1595), missing organization-enabled Claude models (#4390, #4422), and an interim fail-closed MCP policy dropping user servers (#4419). On the session-management front, long-lived sessions hit hard limits — a V8 string-length ceiling (#4325) and a 5 MB CAPI payload cap that also blocks `/compact` recovery (#4424) — leaving users with no escape hatch.

## 2. Releases

**v1.0.79** (2026-08-10) — [GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.79)

- The `/sandbox` configuration dialog now surfaces where sandbox settings are persisted in `settings.json`, improving transparency for enterprise admins.
- Added support for the enterprise `allow-auto-only` policy, enabling `/allow-all auto` to work while keeping a full `allow-all` blocked.
- Enterprise-managed sandbox policy can now enforce a proxy URL while credential handling remains intact.

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|---------------|-----------------|
| [#1595](https://github.com/github/copilot-cli/issues/1595) | Sporadic policy blocking issue retrieving models | Enterprise users with valid subs can't even list models — a core workflow blocker. | 👍 11 · 29 comments |
| [#4390](https://github.com/github/copilot-cli/issues/4390) | Enabled org models missing from catalogue (Claude Sonnet 5/Opus 5, Kimi K3) | Directly contradicts admin-enabled model settings; Anthropic models entirely unavailable. | 👍 3 · 2 comments |
| [#4422](https://github.com/github/copilot-cli/issues/4422) | All Claude models disabled under CLI model selection | Personal Enterprise users report Claude models suddenly unavailable after working the day before. | 👍 1 · 1 comment |
| [#4419](https://github.com/github/copilot-cli/issues/4419) | Managed-settings interim fail-closed drops user MCP servers | An empty allow list ` [[]]` permanently rejects any MCP server registering during the policy-resolution window — even on accounts with no managed policy. | New · 0 comments |
| [#4421](https://github.com/github/copilot-cli/issues/4421) | MCP initialize handshake has fixed 60 s budget, no retry | npx-launched stdio servers that exceed the hard limit are killed for the entire session with no recovery path; ~29% failure rate reported. | New · 0 comments |
| [#4424](https://github.com/github/copilot-cli/issues/4424) | `/compact` cannot recover session after 5 MB CAPI limit | The only recovery mechanism is itself blocked by the same limit, creating a fatal session trap. | New · 0 comments |
| [#4325](https://github.com/github/copilot-cli/issues/4325) | Session permanently unloadable when `events.jsonl` exceeds V8 max string | Long sessions hit a hard runtime ceiling; the session appears valid but is unrecoverable. | 👍 1 · 2 comments |
| [#4095](https://github.com/github/copilot-cli/issues/4095) | Windows plugin update fails with EACCES while VS Code is running | The GitHub Copilot desktop extension holds watcher handles that block file replacement; 13 upvotes signal broad Windows-user frustration. | 👍 13 · 1 comment |
| [#4416](https://github.com/github/copilot-cli/issues/4416) | Parallel `explore` subagent fan-out dies to per-model 429s | All parallel explore agents default to `claude-haiku-4.5`, which has a tighter burst limit than any other model — and there is no auto-switch or backoff. | New · 0 comments |
| [#2802 / #4222](https://github.com/github/copilot-cli/issues/4222) | Regression: main pane freezes / infinite React render loop | The same infinite Ink render loop from v1.0.31 resurfaced in v1.0.72+ on Windows; a known bug that should not have returned. | 👍 0 · 3 comments |

## 4. Key PR Progress

*No pull requests were updated in the last 24 hours.*

## 5. Feature Request Trends

- **Reasoning-effort per-agent configuration** (#2904, 👍 19): Users want to pin `--effort` at the agent level via `.agent.md` frontmatter rather than only globally. This is the highest-voted open feature request in the dataset.
- **Prompt caching for Claude Sonnet** (#3808, 👍 2): Explicit support for Anthropic prompt caching to reduce latency and token costs on long-context sessions.
- **Configurable HUD / session-state visibility** (#4418): A request for a configurable heads-up display (referencing an external project) to surface context state, branch, and session info without parsing `/context` output.
- **Accessible prompt composer** (#4417): A floating GUI with large text, word wrap, dark theme, and no clipboard dependency — aimed at reducing input errors.
- **Parallel tool-call response ordering** (#4420): Non-deterministic ordering in parallel tool responses confuses the agent; users are requesting reliable request-response correlation.

## 6. Developer Pain Points

1. **Enterprise policy inconsistency** — Multiple issues (#1595, #4390, #4422, #4419) report models and MCP servers being silently blocked despite correct admin configuration. The interim fail-closed MCP policy (#4419) is especially disruptive because it drops servers even on accounts without any managed policy.
2. **Session irrecoverability** — Sessions are being permanently lost when hard limits are hit (#4325: V8 string length; #4424: 5 MB CAPI payload). Neither condition allows a recovery path such as `/compact`.
3. **Windows platform friction** — Plugin update failures (#4095) and terminal freeze regressions (#4222) continue to disproportionately affect Windows users, particularly those running the VS Code integration.
4. **Rate-limit fragility in parallel agent fan-outs** — The `explore` agent's hardcoded model default (#4416) creates a single-point rate-limit bottleneck with no backoff or auto-fallback, causing cascading 429s in parallel workflows.
5. **MCP reliability** — The 60-second hardcoded initialize budget with zero retry (#4421) and dead TCP connection reuse after idle periods (#3257) make MCP servers feel unreliable, especially for npx-launched stdio servers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-11

**Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights
The Kimi Code CLI community is actively requesting persistent session memory to improve continuity across interactions. The most-discussed issue from the past day is a feature request for a comprehensive memory system that stores project patterns, context, and user preferences.

---

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues
**[Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) — Feature Request: Memory System - Persistent context across sessions**  
This enhancement proposes automatic AI-managed memory and manual user-defined instructions stored via `cli-memory`. It matters because session continuity is a frequent pain point for developers using CLI tools, and persistent context would reduce repetitive setup. The issue has accumulated 31 comments, indicating strong community interest.

---

## 4. Key PR Progress
No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends
The most-requested direction this period centers on **stateful memory and session persistence**. Developers want Kimi Code CLI to remember project-specific patterns, preferences, and conversation context across separate terminal sessions, reducing the need to re-specify context repeatedly.

---

## 6. Developer Pain Points
- **Lack of cross-session memory:** Users must re-enter project context, conventions, and preferences each time they start a new session.
- **No structured manual instructions:** Developers seek a reliable way to persist custom system prompts or workflow rules without editing config files manually.

---

*Generated by Agnes (Sapiens AI) from GitHub issue/PR/release data.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-11

## 1. Today's Highlights

OpenCode v1.18.16 shipped with critical bugfixes for config parsing and project registration, while the team accelerated v2 beta build infrastructure. The community continues to rally around a persistent high-CPU regression (#30086) and a recurring VS Code extension installation ambiguity (#10517).

---

## 2. Releases

**v1.18.16** — [GitHub Release](https://github.com/anomalyco/opencode/releases)

- **Core:** Unknown top-level config fields now ignored instead of failing parsing; projects opened from Home are now registered for cross-app availability.
- **Desktop:** Right-click opens the project menu in Home; improved fallback listing behavior.

---

## 3. Hot Issues

| # | Title | Status | Engagement | Why It Matters |
|---|-------|--------|------------|----------------|
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | High CPU usage in newer versions | OPEN | 46 💬 · 22 👍 | CPU spiked dramatically; users report 3 sessions cause lag vs. 10+ before. Largest community signal on the repo. |
| [#10517](https://github.com/anomalyco/opencode/issues/10517) | VS Code plugin install instructions ambiguous | CLOSED | 8 💬 · 24 👍 | High upvotes reflect widespread confusion over manual vs. auto install; docs fix is overdue. |
| [#26220](https://github.com/anomalyco/opencode/issues/26220) | Infinite loop after tool calls complete | OPEN | 8 💬 · 4 👍 | Blocks production use of Big Pickle / Zen; app becomes unresponsive post-tool execution. |
| [#14041](https://github.com/anomalyco/opencode/issues/14041) | Copy message as raw markdown | CLOSED | 10 💬 · 2 👍 | Long-requested UX gap; resubmitted as [#41609](https://github.com/anomalyco/opencode/issues/41609) after close. |
| [#37389](https://github.com/anomalyco/opencode/issues/37389) | Copilot multi-turn fails with 404 | CLOSED | 7 💬 · 4 👍 | Intermittent `provider.unknown` errors in opencode2 v2 with GitHub Copilot — regression in v2 proxy path. |
| [#40958](https://github.com/anomalyco/opencode/issues/40958) | DeepSeek V4 Flash context capped at 200K | OPEN | 4 💬 · 1 👍 | Metadata misconfiguration hides the model's native 1M context — directly impacts long-context coding workflows. |
| [#35432](https://github.com/anomalyco/opencode/issues/35432) | `tool_call: false` ignored in prompt loop | OPEN | 3 💬 | Config-level tool disable is silently overridden; breaks providers without tool-call support. |
| [#38458](https://github.com/anomalyco/opencode/issues/38458) | SSE stream closes mid-turn | OPEN | 2 💬 | Undermines orchestration use-cases that depend on persistent SSE connections. |
| [#40642](https://github.com/anomalyco/opencode/issues/40642) | MiMo V2.5 video input never received | OPEN | 2 💬 | Model advertises video/audio but ingests neither — broken multimodal pipeline for this provider. |
| [#40866](https://github.com/anomalyco/opencode/issues/40866) | Desktop input fields lose focus | OPEN | 2 💬 | Form inputs become unusable on Windows — blocks settings/dialog interaction. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#41627](https://github.com/anomalyco/opencode/pull/41627) | chore: run beta sync from v2 | OPEN | Serializes hourly/manual beta sync runs; v2 branch checked out before sync. Blocks on #41626. |
| [#41626](https://github.com/anomalyco/opencode/pull/41626) | feat(desktop): publish v2 beta builds | OPEN | Builds beta branch from v2 + V2-targeted PRs; bundles V2 CLI in desktop releases. |
| [#14743](https://github.com/anomalyco/opencode/pull/14743) | fix(cache): improve Anthropic prompt cache hit rate | OPEN | Fixes cross-repo and cross-session prompt cache misses — directly reduces Anthropic API costs. |
| [#41624](https://github.com/anomalyco/opencode/pull/41624) | fix(tui): collapse execute child details | CLOSED | Code Mode `execute` children constrained to one line; click to expand inline. |
| [#40977](https://github.com/anomalyco/opencode/pull/40977) | fix(i18n): use 词元 instead of 令牌 for token | CLOSED | Corrects Chinese locale — "令牌" (API token) was wrong for "token" in LLM context. |
| [#41622](https://github.com/anomalyco/opencode/pull/41622) | refactor(core): skill service stores values, config plugin owns filesystem | CLOSED | Separates filesystem scanning from core service — part of ongoing Architecture clean-up. |
| [#41619](https://github.com/anomalyco/opencode/pull/41619) | fix(util): no filesystem side effects at global module load | CLOSED | Fixes top-level await I/O in `@opencode-ai/util/global` that broke Cloudflare workerd startup. |
| [#41625](https://github.com/anomalyco/opencode/pull/41625) | fix(app): wire desktop menu accelerators to renderer | OPEN | Restores Window/View keyboard shortcuts on Windows/Linux where menus are rendered in-app. |
| [#41525](https://github.com/anomalyco/opencode/pull/41525) | feat(cli): embed web UI | OPEN | Bundles the web app inside `opencode serve`; adds `opencode web` command and TUI `/web`. |
| [#40804](https://github.com/anomalyco/opencode/pull/40804) | feat(app): allow prompting subagent sessions | OPEN | Unlocks the disabled composer on subagent sessions in the web UI — long-awaited multi-agent workflow. |

---

## 5. Feature Request Trends

- **Multi-agent orchestration** — Subagent prompting (#40804), worktree-based workspace switching (#36048), and session persistence (#41621) all point to growing demand for complex agent workflows.
- **Provider & model flexibility** — DeepSeek sampling defaults (#41620), LAN discovery (#27554), and the DeepSeek context cap bug (#40958) show users pushing for broader, better-configured model support.
- **Embeddable / white-label deployments** — Requests to disable the splash (#38010), embed the web UI in CLI (#41525), and fix Cloudflare deployment (#41619) reflect a community interested in running OpenCode as infrastructure, not just a desktop tool.
- **Copy-paste & UX polish** — Raw markdown copy (#14041 / #41609) and input focus bugs (#40866) indicate users want the desktop experience to match the quality of competing tools.

---

## 6. Developer Pain Points

1. **Performance regressions** — The #30086 CPU spike (46 comments, 22 👍) is the most active open issue and signals a trust risk with recent releases.
2. **Configuration silently ignored** — `tool_call: false` (#35432), agent config fields forwarded to providers (#41593), and context-cap metadata (#40958) all share a pattern: config options exist but don't behave as documented.
3. **VS Code extension onboarding** — Two resolved issues (#10517, #16217) and one still-open (#31500) around extension installation show persistent friction in the docs-to-install flow.
4. **Desktop input instability** — Focus loss (#40866), draft persistence across sessions (#36203, #41614), and focused-file regression on tab switch (#41560) suggest the Electron renderer has stability gaps.
5. **Large-session degradation** — The edit tool stores full file snapshots per call (#40816), causing unbounded part-table growth; this is a known scalability bottleneck for long-lived projects.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-11

## 1. Today's Highlights

The Pi community saw significant activity around session reliability and TUI polish, with a notable bug where invalid Bedrock tool calls could permanently brick a session (#7782) and a WSL login hang for Copilot users remaining the top open issue (#6187, 21 comments). On the PR front, fullscreen transcript search (#7913), Cloudflare AI Gateway support (#7901), and a fix for the Alt+Enter keyboard race condition (#7899) are moving through review.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#6187](https://github.com/earendil-works/pi/issues/6187) | Pi login hangs in WSL after browser-based GitHub Copilot device authorization | WSL + Copilot is a popular dev combo; the client never detects completed authorization, leaving users stuck. | 21 comments, actively discussed. |
| [#7855](https://github.com/earendil-works/pi/issues/7855) | Pi stops with "Response was truncated before completion" | Random truncation errors force manual continuation prompts across any OpenAI-compatible API. | Closed as no-action; 4 comments. |
| [#7850](https://github.com/earendil-works/pi/issues/7850) | GitHub Copilot login fails with 429 for orgs with many models | Large Copilot orgs hit rate limits during the device-auth flow, blocking login entirely. | Closed; 2 👍, 4 comments. |
| [#7782](https://github.com/earendil-works/pi/issues/7782) | Invalid Bedrock tool call poisons Pi session | An empty-key tool argument from Bedrock gets persisted and replayed, permanently bricking the session. | Closed; fix PR #7882 merged. |
| [#7876](https://github.com/earendil-works/pi/issues/7876) | Alt+Enter intermittently aborts running task | 10ms StdinBuffer ESC timeout splits `ESC+CR` in legacy keyboard mode (tmux, SSH), triggering an unwanted interrupt. | Closed; fix PR #7899 submitted. |
| [#7836](https://github.com/earendil-works/pi/issues/7836) | Edit fuzzy match misses lines with whitespace differences | `normalizeForFuzzyMatch` doesn't collapse whitespace, causing edit tool failures on semantically identical text. | Open; 1 👍, 3 comments. |
| [#7794](https://github.com/earendil-works/pi/issues/7794) | `APPEND_SYSTEM.md` auto-discovery broken | Two bugs — an empty-array truthy check and a logic gap — prevent the feature from loading at all. | Closed; 3 comments. |
| [#7846](https://github.com/earendil-works/pi/issues/7846) | Unable to start 0.84.0/0.84.1 with Bun runtime | `zlib.createZstdDecompress is not a function` crashes Pi on startup under Bun. | Open; 1 👍, 2 comments. |
| [#7791](https://github.com/earendil-works/pi/issues/7791) | Global Undici dispatcher inherits 16 KiB maxHeaderSize | Large Copilot headers trigger `UND_ERR_HEADERS_OVERFLOW`; Pi's global dispatcher never sets `maxHeaderSize`. | Open; 2 comments. |
| [#7864](https://github.com/earendil-works/pi/issues/7864) | `ExtensionContext.exec` timeout never force-kills SIGTERM-ignoring children | Node marks a process as `killed` on signal send, not exit, so SIGKILL is never escalated for stubborn children. | Closed; 2 comments. |

## 4. Key PR Progress

| # | Title | Type | Summary |
|---|-------|------|---------|
| [#7913](https://github.com/earendil-works/pi/pull/7913) | `feat(tui): add fullscreen transcript search` | Feature | Adds `Ctrl+Shift+f` search across the fullscreen transcript. Open. |
| [#7901](https://github.com/earendil-works/pi/pull/7901) | `feat(ai): AI Gateway transport over Cloudflare AI binding` | Feature | Implements Cloudflare Workers AI Gateway support, superseding issue #7838. Open. |
| [#7899](https://github.com/earendil-works/pi/pull/7899) | `fix(tui): prevent split Alt+Enter from interrupting` | Fix | Increases escape-sequence timeout from 10ms to 100ms, resolving the Alt+Enter race in tmux/SSH. Open. |
| [#7910](https://github.com/earendil-works/pi/pull/7910) | `feat(coding-agent): add canonical message identity to markdown transformer context` | Feature | Gives markdown transformers stable per-message identity across stream/redraw/restore renders. Closes #7828. Open. |
| [#7882](https://github.com/earendil-works/pi/pull/7882) | `fix(ai): sanitize empty Bedrock tool argument keys` | Fix | Strips empty property names recursively only at replay time, preserving canonical conversation data. Closes #7782. Closed. |
| [#7906](https://github.com/earendil-works/pi/pull/7906) | `feat(coding-agent): add fullscreen fixed top bar` | Feature | Adds a fixed top bar in fullscreen showing cwd, git branch, context usage, and compaction state. Closed. |
| [#7904](https://github.com/earendil-works/pi/pull/7904) | `fix(edit): normalize single-object edits argument to array` | Fix | Accepts `{oldText, newText}` as well as `[{oldText, newText}]`, matching what some models emit. Closed. |
| [#7892](https://github.com/earendil-works/pi/pull/7892) | `fix(tui): avoid repainting idle fullscreen sessions on focus loss` | Fix | Stops unnecessary renders on focus-out, eliminating false activity indicators in iTerm2. Open. |
| [#7879](https://github.com/earendil-works/pi/pull/7879) | `Make the interactive footer responsive in narrow panes` | Fix | Reflows context-window info above usage metrics in narrow terminals (40–80 cols). Closes #7884. Closed. |
| [#7881](https://github.com/earendil-works/pi/pull/7881) | `fix(ai): reject item_* content IDs in message-level input[].id fields` | Fix | Prevents SDK confusion between `item_*` and `msg_*` ID namespaces in the Responses API. Closed. |

## 5. Feature Request Trends

- **Fullscreen TUI enhancements** — Search (#7913), fixed top bar (#7906), and unbound line-scroll actions (#7903) show strong demand for a more capable fullscreen mode.
- **Cloudflare Workers AI Gateway** — Two related items (#7838 / #7901) indicate users want first-class support for running Pi inside Cloudflare Workers with the new AI binding.
- **Sticky prompt header** — Issue #7802 requests a pinned last-sent-prompt header in the TUI, reflecting a desire for better context awareness during long sessions.
- **Three-state tool output toggle** — Issue #7907 asks for a "show no output" state alongside preview/full in `/export`, indicating users want finer control over exported session HTML.
- **Man page** — Issue #7888 proposes a `pi.1` man page, a recurring ask for better CLI discoverability.

## 6. Developer Pain Points

- **Session poisoning and reliability** — Multiple issues (#7782, #7862, #7864) highlight race conditions and lack of input sanitization that can corrupt or stall sessions. Developers need robust argument validation and proper process lifecycle management.
- **Environment-specific login failures** — WSL (#6187), Bun (#7846), and large Copilot orgs (#7850) all surface auth/dependency issues that are hard to reproduce outside specific setups. Better error diagnostics and fallback paths are needed.
- **TUI rendering and keyboard edge cases** — Alt+Enter splitting (#7876), scroll-jumping during streaming (#7861), and fullscreen corruption in Orca (#7917) point to ongoing friction in terminal emulation compatibility, especially under tmux, SSH, and nested terminals.
- **Header-size limits** — The Undici 16 KiB default (#7791) causes failures with large Copilot responses, suggesting Pi should explicitly configure `maxHeaderSize` on its global dispatcher.
- **Tool-call format variance** — Models inconsistently wrap edit arguments (#7804) and Bedrock emits empty-key tools (#7782), requiring Pi to be more defensive in argument normalization.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-11

## 1. Today's Highlights

Qwen Code **v0.21.9** shipped with native plugin installation support (directories, archives, Git repos, URLs, npm) and QR-code-based Local Control pairing. The community is actively discussing multi-agent fleet coordination and a WebShell redesign, while several rendering and session-management bugs remain top-of-mind.

---

## 2. Releases

**v0.21.9** ([Changelog](https://github.com/QwenLM/qwen-code/releases))
- Native plugin installation from directories, archives, Git repos, URLs, and npm packages with automatic system-prompt loading (#8661).
- QR-code pairing for Local Control desktop sessions.

**v0.21.9-nightly.20260811.8c90697ace** — nightly build with memory test coverage for context-refresh marker carry-over turns (#8809).

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#8124](https://github.com/QwenLM/qwen-code/issues/8124) | Startup banner missing top lines on first paint | Intermittent TUI rendering bug affecting 10+ users; correlates with provider update flow. |
| [#8718](https://github.com/QwenLM/qwen-code/issues/8718) | RFC: Native multi-session coordination | Envisions a leader dispatching independent worker sessions — foundational for the fleet roadmap. |
| [#8557](https://github.com/QwenLM/qwen-code/issues/8557) | Terminal shrink reprints transcript (macOS) | Duplicate output in scrollback on resize; 8 comments, high visibility on macOS/Warp. |
| [#8504](https://github.com/QwenLM/qwen-code/issues/8504) | Provider update prompt repeats with custom models | Custom models outside provider's built-in list cause a loop of update prompts. |
| [#8871](https://github.com/QwenLM/qwen-code/issues/8871) | ACP child process: "Unknown argument: acp" | Breaks `qwen serve --http-bridge`; 401 token failures for connected clients. |
| [#8888](https://github.com/QwenLM/qwen-code/issues/8888) | Autofix → review-pr cancellation loop on bot PRs | Self-reinforcing GitHub Actions loop on `qwen-code-dev-bot` PRs; blocks CI flow. |
| [#8885](https://github.com/QwenLM/qwen-code/issues/8885) | Rewind indexes misaligned with auto history entries | PR #8838 exposed mismatch between model Content history and ChatRecordingService turn boundaries. |
| [#8837](https://github.com/QwenLM/qwen-code/issues/8837) | Scheduled cron prompts missing from restored transcripts | After session cold-start, automatic scheduled-task prompts vanish from replay. |
| [#8860](https://github.com/QwenLM/qwen-code/issues/8860) | OpenAI API logs grow without bound (~95 GB / 340k files) | No rotation or retention on `logs/openai`; impacts long-running serve deployments. |
| [#8643](https://github.com/QwenLM/qwen-code/issues/8643) | `.env` loaded from untrusted ancestor via fast path | Trust evaluated once for start dir; walking up the tree applies a single boolean to all candidates. |

---

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#8894](https://github.com/QwenLM/qwen-code/pull/8894) | `capture-tui` for review evidence | Phase 2 of evidence images — drives code under review in a private tmux server and captures terminal rendering pixel-accurately. |
| [#8675](https://github.com/QwenLM/qwen-code/pull/8675) | Model-specific reasoning controls | Built-in registry for Thinking/Effort controls across Core, ACP, daemon, SDK, and WebShell; first registration for `qwen3.*`. |
| [#8865](https://github.com/QwenLM/qwen-code/pull/8865) | ACP skill management refactor | Moves install/delete/enable/disable into cohesive modules with shared extension-method routes and filesystem safety guards. |
| [#8895](https://github.com/QwenLM/qwen-code/pull/8895) | Stream autofix agent progress | Headless Qwen now emits streamed partial progress, enabling the idle watchdog to distinguish active tool work from stalled sandboxes. |
| [#8687](https://github.com/QwenLM/qwen-code/pull/8687) | Guard cross-worktree Git mutations | Blocks `run_shell_command` calls that escape the session workspace via `-C`, `--work-tree`, or `--git-dir`. |
| [#8831](https://github.com/QwenLM/qwen-code/pull/8831) | Fix banner duplication & drag flicker | Resolves terminal resize/wake artifacts where the reflowed frame top was stranded and stacked copies on every redraw. |
| [#8900](https://github.com/QwenLM/qwen-code/pull/8900) | Sync skill state with history eviction + `/unskill` | Keeps loaded-skill tracking aligned with eviction; adds a user-facing `/unskill` command. |
| [#8848](https://github.com/QwenLM/qwen-code/pull/8848) | WebShell Channel & workspace redesign | Exposes direct-message, group-access, session-routing, and workspace-ownership controls for every adapter. |
| [#8707](https://github.com/QwenLM/qwen-code/pull/8707) | Qwen WebBridge direct browser control | Exposes Kimi WebBridge-compatible `/command` and `/status` endpoints with a 17-action surface from `qwen serve` to Chrome. |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | Kimi & Xiaomi MiMo providers | First-class presets under `/auth` → Third-party Providers with Coding Plan, API Key (China/International), and pay-as-you-go options. |

---

## 5. Feature Request Trends

- **Multi-agent fleet coordination** — Issues #8718, #8840, #8841, #8842, #8843 form a staged roadmap (1A → 1B → 2 → 3) for in-process fleet MVPs, persistence, recovery, and teammate terminal attach.
- **WebShell / Channel redesign** — #8845 and PR #8848 push for shared channel access, session isolation, and workspace ownership across all adapters.
- **Browser automation** — PR #8707 (Qwen WebBridge) and the Chrome extension integration signal growing demand for direct browser control from the CLI.
- **Reasoning / effort controls** — PR #8675 introduces per-model reasoning sliders, reflecting user demand for fine-grained control over model behavior.
- **Provider ecosystem expansion** — PR #8368 adds Kimi and MiMo, following community demand for more third-party provider presets.

---

## 6. Developer Pain Points

- **TUI rendering glitches** — Startup banner truncation (#8124), transcript duplication on resize (#8557, #8849), and input-box jitter are recurring visual defects affecting daily CLI use.
- **Session & transcript consistency** — Scheduled cron prompts disappearing on restore (#8837), rewind-index misalignment (#8885), and session load-timeout retries (#8883) point to fragile state management in daemon/ACP sessions.
- **Provider & configuration loops** — Repeating update prompts with custom models (#8504), `.env` trust bypass (#8643), and silent model-overwrite on provider update (#8863) create configuration instability.
- **CI fragility** — Autofix/review-pr cancellation loops (#8888), E2E test flakiness (#8847, #8870), and ACP argument parsing failures (#8871) slow developer velocity.
- **Unbounded logging** — OpenAI API logs growing to ~95 GB with no rotation (#8860) is a production-deployment concern for long-running `qwen serve` instances.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-11

## 1. Today's Highlights

The v0.9.6 release landed today as a "subtractive" cleanup release, slimming down runtime guards, unifying the base prompt, and shrinking the compaction path ([#5315](https://github.com/Hmbown/CodeWhale/issues/5315)). A critical bug fix for nested subagent depth capping is now open for review, addressing a recursion-widening regression introduced in v0.9.x ([#5317](https://github.com/Hmbown/CodeWhale/pulls/5317)). Meanwhile, the TUI crate decomposition is formally kicked off as a new umbrella EPIC under the lead of `aboimpinto` ([#5316](https://github.com/Hmbown/CodeWhale/issues/5316)).

## 2. Releases

**v0.9.6** shipped today — a subtractive release that reduces runtime guards, consolidates to one stable base prompt, ensures truthful provider ending markers, and trims the compaction path to better preserve provider tokens. No accompanying public tracking issue (release state tracked in the private codewhale-ops ledger).

## 3. Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | EPIC: staged command-boundary refactor for #2791 | CLOSED | Long-running tracking issue (since June) for decomposing command boundaries into mergeable layers; closed after the reference PR merged. Key architectural milestone. |
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) | OPEN | New umbrella issue kicking off the full TUI crate decomposition. All sub-EPICs and FEAT reports will roll up here. Active discussion expected. |

## 4. Key PR Progress

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| [#5317](https://github.com/Hmbown/CodeWhale/pulls/5317) | fix(subagents): cap nested max_depth by inherited budget | ousamabenyounes | OPEN | Fixes a regression where `child_max_spawn_depth_for_spawn` dropped the inherited absolute budget in the explicit `max_depth` arm, allowing nested spawns to exceed the intended recursion depth (#5253). Mirrors the profile-hint arm's `inherited.min(..)` logic. |
| [#5300](https://github.com/Hmbown/CodeWhale/pulls/5300) | refactor(core): own primary request preparation | Hmbown | CLOSED | Replaces the unused synthetic `ChatRequest` scaffold in `codewhale-core` with the production `MessageRequest` DTO family from the TUI crate. Introduces a pure `prepare_primary_turn_request` constructor for provider-neutral defaults. |
| [#5315](https://github.com/Hmbown/CodeWhale/pulls/5315) | chore(release): ship v0.9.6 | Hmbown | CLOSED | Release-prep PR for v0.9.6. Tracks subtractive changes: fewer runtime guards, unified base prompt, truthful provider endings, smaller compaction path. |

## 5. Feature Request Trends

- **TUI crate decomposition** — The most prominent directional signal. Issue #5316 formalizes a multi-EPIC effort to split the monolithic TUI crate into smaller, independently maintainable sub-crates. This reflects a sustained community push for better modularity and faster compile times.
- **Recursive agent depth control** — PR #5317 and its root issue #5253 highlight ongoing demand for reliable bounded recursion in nested subagent spawning, a feature critical for production reliability.
- **Command-boundary refactoring** — The closure of #2870 signals the completion of a major architectural refactor that will likely enable cleaner API surfaces and further TUI decoupling downstream.

## 6. Developer Pain Points

- **Recursion budget leaks in nested spawns** — The bug fixed in #5317 points to a recurring frustration: subagent depth controls can silently widen across spawn boundaries, leading to unbounded recursion. Developers relying on `max_depth` for resource control should monitor this fix closely.
- **Crate coupling between TUI and core** — PR #5300's move of `MessageRequest` DTOs from the TUI crate into `codewhale-core` indicates long-standing friction from cross-crate DTO ownership. The full decomposition EPIC (#5316) is the community's response to this structural pain.
- **Opaque release tracking** — The v0.9.6 release had no associated public issue, with changes tracked in a private ledger. This opacity frustrates contributors who prefer changelog visibility and community-driven release planning.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*