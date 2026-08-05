# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 06:51 UTC | Tools covered: 9

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



# Cross-Tool Comparison Report: AI CLI Tools Ecosystem
**Date: 2026-08-05**

---

## 1. Ecosystem Overview

The AI CLI tools landscape in August 2026 is characterized by rapid iteration, maturing security postures, and a clear分化 between incumbent platforms (Claude Code, Codex, Copilot) and rising competitors (Gemini CLI, Kimi Code, DeepSeek TUI). Security hardening dominates recent releases—three tools shipped critical security fixes within 24 hours—while community demand consistently converges on session persistence, cross-device continuity, and agent reliability at scale. The ecosystem is transitioning from single-turn coding assistants toward persistent, multi-agent workspaces with fine-grained permission models.

---

## 2. Activity Comparison

| Tool | Hot Issues | Key PRs | Releases | Release Cadence |
|------|-----------|---------|----------|-----------------|
| **Claude Code** | 10 | 11 | v2.1.222 | Stable patch |
| **OpenAI Codex** | 10 | 10 | 4× Rust SDK alpha | Rapid alpha (4 in 24h) |
| **Gemini CLI** | 10 | 10 | None (nightly failed) | Nightly (broken) |
| **GitHub Copilot CLI** | 10 | 2 | v1.0.79-2, v1.0.79-1 | Frequent patch |
| **Kimi Code CLI** | 5 | 2 | None | Low (no release) |
| **OpenCode** | 10 | 10 | v1.18.13 | Stable |
| **Pi** | 10 | 12 | None | Slow |
| **Qwen Code** | 10 | 10 | v0.21.6-preview.0 + nightly | Mixed stable/nightly |
| **DeepSeek TUI** | 10 | 10 | v0.9.4 integration train | Monthly train |

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Needs |
|-----------|---------------|----------------|
| **Session persistence & recovery** | Claude Code, OpenCode, Copilot CLI, Pi, DeepSeek TUI | Cross-device continuity (#1282 Copilot, #1947 OpenCode), session list preservation after crash/reinstall, cloud-synced sessions |
| **Multi-agent / subagent reliability** | Claude Code, Gemini CLI, OpenCode, DeepSeek TUI | Subagent hang detection (#74113 Claude), false success reporting (#22323 Gemini), interrupt/resume from checkpoint (#5242 DeepSeek) |
| **Memory & context management** | Claude Code, Gemini CLI, Kimi Code, OpenCode | Persistent project memory (#1283 Kimi), auto-memory signal detection (#26522 Gemini), context fill degradation at ~500K tokens (#2586 Kimi) |
| **MCP server integration** | Codex, Copilot CLI, Gemini CLI, OpenCode, DeepSeek TUI | Server discovery compatibility (#4370 Copilot), process leak cleanup (#30408 Codex), runtime config endpoints (#5130 DeepSeek) |
| **Usage quota transparency** | OpenCode, Pi, DeepSeek TUI | Programmatic API endpoints (#16017 OpenCode, 126 👍), inline `/usage` commands (#40584), free-tier cut-off warnings (#40588) |
| **Per-turn / fine-grained permissions** | Codex, Claude Code, DeepSeek TUI | Turn-bound sandboxing (#37040 Codex), worktree isolation hardening (Claude v2.1.222), goal-loop state controls (#5133 DeepSeek) |
| **Windows / cross-platform stability** | All tools | IME support (Kimi #2584, Claude #73064), path translation (Pi #7064, DeepSeek sandbox), sandbox restrictions (Codex #30009) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----|-----------|--------------|
| **Primary focus** | Agent isolation & security | Per-turn permission model | Eval infrastructure & security hardening | Enterprise & BYOK integration | Cross-device continuity | V1→V2 protocol migration | Provider diversity & TUI rendering | Trustworthy runtime boundaries | Build performance & runtime API |
| **Target users** | Enterprise developers, security-conscious | Power users, multi-tool workflows | Researchers, eval-driven teams | GitHub enterprise users | Chinese-market developers | Open-source / self-hosted | Multi-provider researchers | Chinese/enterprise users | Rust-native CLI power users |
| **Release style** | Stable patches with security focus | Rapid Rust SDK alpha iteration | Nightly builds (unstable pipeline) | Frequent minor patches | Low cadence, bug-fix driven | Stable with major refactor | Slow, PR-driven | Preview + nightly dual | Monolithic integration trains |
| **Key differentiator** | Worktree isolation + PreToolUse hardening | Per-turn permission binding | SSRF/variable-expansion security fixes | Copilot ecosystem integration | Persistent memory vision | Full V2 protocol overhaul | Mermaid rendering + new providers | Deterministic agent runtime | Monolith decomposition epic |
| **Tech stack** | TypeScript/Node | Rust SDK + TypeScript | TypeScript | TypeScript | TypeScript | Go + TypeScript | Bun/Node | TypeScript | Rust (682K-line crate) |

---

## 5. Community Momentum & Maturity

**High Momentum (rapid iteration, active issue resolution):**
- **OpenAI Codex** — 4 alpha releases in 24 hours signals aggressive development; per-turn permission PRs show architectural maturity in progress.
- **Claude Code** — 11 PRs landed with strong security focus; #33949 (SSE hangs) remains a chronic pain point indicating areas needing deeper investment.
- **OpenCode** — 10 PRs focused on V1→V2 migration; #16017 (126 👍) shows the most engaged feature request across all tools.

**Stable but Slower (mature codebase, lower velocity):**
- **GitHub Copilot CLI** — Only 2 PRs in 24h; breaking config rename (#4366) and MCP regressions (#4370) suggest platform stability priorities over feature velocity.
- **Pi** — 12 PRs but none released; Windows/WSL issues cluster indicates an underserved platform gap.
- **Kimi Code CLI** — Lowest issue count (5) and no releases; community still building.

**Emerging with Infrastructure Focus:**
- **DeepSeek TUI** — v0.9.4 integration train with 77 commits; the #5249 build-performance epic (682K-line crate) signals a project at architectural inflection point.
- **Gemini CLI** — Nightly pipeline failure (#28692) is a self-inflicted reliability concern; security fixes are rapid but release cadence is shaky.
- **Qwen Code** — Balanced preview/nightly approach; #8102 (trustworthy runtime) shows early architectural thinking.

---

## 6. Trend Signals

**1. Session state fragility is an ecosystem-wide problem.** Every tool except DeepSeek TUI has open issues around session loss, transcript corruption, or cross-device continuity. This signals the core session model is not yet solved across the industry—developers should expect ongoing instability in long-running workflows.

**2. Security hardening is accelerating but reactive.** Three tools shipped P1 security fixes within 24 hours (variable expansion bypass in Gemini, SSRF in Gemini, worktree isolation in Claude). The attack surface from MCP, shell tools, and web fetch is expanding faster than defensive architectures can be designed.

**3. Agent reliability degrades non-linearly with context.** Kimi Code's #2586 (closed) identified a sharp reliability cliff at ~500K tokens—repetitive loops and instruction drift. This is a signal for all multi-step agent workflows: context management is becoming a first-class engineering concern.

**4. Per-turn permission models are the next architectural frontier.** Codex's PRs #37040, #37038, #37031 represent the most explicit move toward turn-bound sandboxing. Claude Code's worktree isolation (#2.1.222) and DeepSeek's goal-loop state (#5133) are parallel efforts. Expect this to become a differentiator.

**5. Windows/WSL parity remains the most underserved platform.** Every tool with a Windows cohort reports path-handling bugs, IME issues, or sandbox restrictions. This is a consistent gap across the ecosystem and an opportunity for tools that solve it first.

**6. Build performance is a silent productivity tax.** DeepSeek TUI's #5249 epic (682K-line monolith, 708 dependencies) and Qwen Code's daemon resource bugs (#8182) indicate that as CLI tools grow in capability, compilation and runtime resource management become significant developer friction points.

**Recommendation for developers:** Prioritize tools with active per-turn permission work (Codex, Claude) and transparent session recovery guarantees. Monitor OpenCode's V2 migration for long-term viability signals. For Windows-heavy workflows, DeepSeek TUI and Gemini CLI show the most active cross-platform investment despite current pain points.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
*Data as of 2026-08-05 · Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|-----------|---------------|----------------------|--------|
| 1 | **#1298** — `skill-creator` run_eval fix | Fixes `run_eval.py` reporting `recall=0%` across all descriptions, breaking the description-optimization loop | 10+ independent reproductions; the optimizer was optimizing against noise | 🔴 OPEN |
| 2 | **#514** — Document Typography | Controls typographic quality: orphans, widows, numbering misalignment in AI-generated documents | Addresses a universal pain point — every document Claude generates | 🔴 OPEN |
| 3 | **#486** — ODT Skill | Create, fill, read, and convert OpenDocument Format files (`.odt`, `.ods`); triggers on LibreOffice / open-source document requests | Broad utility for ISO-standard document workflows | 🔴 OPEN |
| 4 | **#210** — Frontend-Design Clarity | Revises the frontend-design skill for actionability and internal coherence; every instruction must be followable in a single conversation | Focus on practical steerability rather than conceptual explanation | 🔴 OPEN |
| 5 | **#83** — Skill Quality & Security Analyzer | Meta-skills evaluating structure/docs (20%), security, trigger accuracy, and reasoning quality | First formal quality-gate for the marketplace | 🔴 OPEN |
| 6 | **#723** — Testing Patterns | Covers full testing stack: Testing Trophy, AAA pattern, React Testing Library, edge cases | Addresses the growing demand for test-generation skills | 🔴 OPEN |
| 7 | **#1367** — Self-Audit Skill | Mechanical file verification + four-dimension reasoning audit before delivery; works across any project/stack/model | Universal pre-delivery quality gate | 🔴 OPEN |
| 8 | **#1302** — Color-Expert | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), and "what to use when" guidance | Niche but high-precision domain skill | 🔴 OPEN |

*GitHub links:* [PR #1298](https://github.com/anthropics/skills/pull/1298) · [PR #514](https://github.com/anthropics/skills/pull/514) · [PR #486](https://github.com/anthropics/skills/pull/486) · [PR #210](https://github.com/anthropics/skills/pull/210) · [PR #83](https://github.com/anthropics/skills/pull/83) · [PR #723](https://github.com/anthropics/skills/pull/723) · [PR #1367](https://github.com/anthropics/skills/pull/1367) · [PR #1302](https://github.com/anthropics/skills/pull/1302)

---

## 2. Community Demand Trends

Analysis of the top Issues reveals four concentrated demand themes:

| Theme | Key Issues | Signal |
|-------|-----------|--------|
| **🔒 Trust & Security** | #492 (43 comments, 2 👍) — community skills impersonating `anthropic/` namespace; #1175 — SharePoint permission concerns | Highest-engagement issue in the repo; users demand namespace isolation and permission clarity |
| **🔧 Skill-Creator Tooling** | #556 (12 comments, 7 👍) — `run_eval.py` never triggers; #1169 — recall=0% loop; #1061 (3 comments, 2 👍) — Windows compatibility | The skill-creator pipeline is unusable on Windows and produces misleading metrics — a critical infrastructure gap |
| **🏢 Enterprise & Sharing** | #228 (16 comments, 8 👍) — org-wide skill sharing; #189 (6 comments, 9 👍) — duplicate skills from overlapping plugins | Users want collaborative skill distribution; current manual download/upload flow is a friction point |
| **🧠 Agent Autonomy** | #1329 — compact-memory for long-running agents; #1385 — reasoning quality gate pipeline; #412 — agent governance patterns | Growing interest in skills that manage agent state, self-audit, and governance — moving beyond single-task skills |

*GitHub links:* [Issue #492](https://github.com/anthropics/skills/issues/492) · [Issue #556](https://github.com/anthropics/skills/issues/556) · [Issue #228](https://github.com/anthropics/skills/issues/228) · [Issue #189](https://github.com/anthropics/skills/issues/189) · [Issue #1329](https://github.com/anthropics/skills/issues/1329)

---

## 3. High-Potential Pending Skills

These active PRs address high-signal community needs and are most likely to land:

| PR | Skill | Why It's Promising |
|----|-------|-------------------|
| **#1298** | `skill-creator` eval fix | Blocker for the entire skill-creation pipeline; 10+ reproductions make it urgent |
| **#1323** | `skill-creator` trigger detection fix | Directly related to #1298 — without it, `recall=0%` is unavoidable |
| **#1099 / #1050** | Windows subprocess + encoding fixes | Enables skill-creator on Windows (large user segment currently blocked) |
| **#539** | YAML unquoted-description validation | Prevents silent parsing failures in skill creation |
| **#1367** | Self-audit skill | First universal pre-delivery quality gate; aligns with #1385 community proposal |
| **#1479** | Plan-file-hygiene skill | Addresses #1417 — planning artifacts accumulate with no lifecycle |
| **#514** | Document typography | Solves a universal document-quality problem with clear trigger conditions |
| **#723** | Testing patterns | Fills a gap in the skill catalog; high practical utility |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable skill-creation tooling and trust-boundary governance** — users can build skills, but the eval pipeline is broken (0% recall), Windows support is absent, and namespace impersonation undermines confidence in the `anthropic/` brand.

---

*Report generated from anthropics/skills repository data as of 2026-08-05.*

---



# Claude Code Community Digest — 2026-08-05

## 1. Today's Highlights

Anthropic shipped **Claude Code v2.1.222**, patching worktree session isolation and a PreToolUse auto-allow hook bypass that could let background agents escape tool restrictions. On the issue side, the community is buzzing around a deep root-cause analysis of indefinite SSE streaming hangs (#33949), a new class of desktop session-list loss after reinstall (#83730, #81907), and the first on-wire evidence of an auth bug trapping paid Max accounts behind new-account onboarding (#83633).

---

## 2. Releases

### v2.1.222

- **Worktree session isolation strengthened** — Subagents in worktree-isolated sessions can no longer run destructive git commands or edit files outside their sandbox. Isolation now applies uniformly across all session types (Bash and file edits).
- **PreToolUse auto-allow hook bypass fixed** — Background agent tasks could previously circumvent tool restrictions via PreToolUse hooks that auto-allowed disallowed tools. This escape path is now closed.

> <https://github.com/anthropics/claude-code>

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| **#33949** | SSE streaming hangs indefinitely + ESC cannot fully cancel | Months-old core reliability bug with a 150+ report history; reporter provides root-cause analysis and fix proposals after repeated babysitting. | 🔴 38 comments · 24 👍 |
| **#22931** | Archived Claude Cowork chats disappear | Archive operation loses visibility into archived sessions entirely — no recovery path from the UI. | 🟠 34 comments · 32 👍 |
| **#57853** | Bun 1.3.14 JSC GC segfault on AMD Ryzen | Platform-native crash (SlotVisitor::drain) affects all bundled binaries on a common CPU, blocking Linux users. | 🟡 18 comments · 0 👍 |
| **#48949** | Desktop ignores `remoteControlAtStartup` setting | Desktop app uses a separate runtime flag, ignoring the CLI-per-configured `~/.claude.json` value — users must re-enable Remote Control every session. | 🟠 13 comments · 28 👍 |
| **#83633** | Login walling paid Max accounts behind onboarding | First report with on-wire mechanism captured; 10th public instance of the same signature — existing paid users cannot access their subscription. | 🟡 12 comments · 0 👍 |
| **#21378** | Memory leak → 15 GB RAM / freeze after 20 min | Critical production-impacting leak on WSL2/Linux; 12 👍 and long open history signal persistent pain. | 🔴 9 comments · 12 👍 |
| **#74113** | Background agents go idle without final report | Agents silently stall and never deliver `SendMessage`; manual re-ping recovers them. Affects multi-agent workflows. | 🟡 8 comments · 7 👍 |
| **#80367** | Plugin cache grows without bound (1318 dirs / 8 GB) | Staging clones in `~/.claude/plugins/cache/temp_*` are never reclaimed; disk exhaustion after ~8 days of normal plugin use. | 🟡 1 comment · 0 👍 |
| **#77651** | Assistant text between tool calls silently lost | Interleaved thinking / text between tool calls is not rendered, not in Ctrl+O, and not persisted to `.jsonl` — data loss at the session level. | 🟡 4 comments · 0 👍 |
| **#76124** | Desktop shows "no messages yet" for SSH sessions on reopen | Transcript persists on the remote host and context is intact, but the local desktop UI renders an empty list — UX regression for remote workflows. | 🟡 4 comments · 0 👍 |

---

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| **#84004** | fix(plugin-dev): limit frontmatter parsing | Restricts YAML frontmatter parsing to the opening block only; rejects files missing delimiters. Fixes a `sed`-based parser that restarted at every later `---`, corrupting Markdown body text. |
| **#84003** | fix(scripts): propagate top-level failures | Maintenance scripts now return a failing process status when top-level duplicate checks reject, instead of resolving the rejection silently. |
| **#83999** | fix(scripts): validate `gh` flag values | Rejects value-taking flags missing their argument in the restricted `gh` wrapper (e.g., `gh issue list --limit` without a number), preventing incomplete commands from leaking through. |
| **#83995** | fix(scripts): validate label option values | `--add-label` / `--remove-label` now require an explicit label name before consuming the next positional arg, fixing `$2: unbound variable` aborts under `set -u`. |
| **#83993** | fix(scripts): reject self-referential duplicates | Prevents `comment-on-duplicates.sh` from posting a comment proposing an issue as a duplicate of itself. |
| **#83992** | fix(plugin-dev): assert expected hook decision | `test-hook.sh` gains an `--expect allow|deny|ask` flag so tests can verify that a deny hook actually denied; previously both outcomes were treated as success. |
| **#83990** | fix(plugin-dev): report missing `jq` dependency | `test-hook.sh` now checks for `jq` before use and surfaces a clear "missing dependency" error instead of silently classifying valid input as malformed JSON. |
| **#83890** | Create `pylint.yml` | Adds a Pylint configuration file to the repo. |
| **#83374** | docs(plugin-dev): document `MessageDisplay` streaming semantics | Adds `MessageDisplay` to the Hook Development skill's trigger description, event guidance, and quick-reference table — it was a supported but undocumented hook event. |

> All PRs: <https://github.com/anthropics/claude-code/pulls>

---

## 5. Feature Request Trends

- **Session persistence & recoverability** — Multiple reports (Desktop session loss after reinstall, SSH transcript not rendering, VS Code session delete needing undo) point to a strong demand for robust, cross-process session state management with explicit recovery guarantees.
- **Consistent configuration across CLI and Desktop** — `remoteControlAtStartup` and similar settings are ignored by the Desktop app, suggesting users want a single source of truth for session-level preferences.
- **Cloud Mode diff base-branch override** — #62391 (closed) highlights demand for configurable diff baselines beyond the repo default branch, especially for release-branch workflows.
- **IME and international input support** — Korean IME toggle failure (#73064) and broader non-Latin input issues signal an ongoing need for improved terminal IME integration on Windows.
- **Input retention across conversation switches** — #82385 requests keeping the current input buffer when switching conversations in the VS Code extension, a common power-user workflow.

---

## 6. Developer Pain Points

1. **Streaming and cancellation unreliability** — SSE hangs and ESC queue auto-restart (#33949) are the highest-engagement open issue by far, indicating a chronic reliability gap in the core I/O layer.
2. **Agent isolation gaps** — Before v2.1.222, worktree isolation and PreToolUse hooks could be bypassed; residual concerns remain around background-agent final-report delivery (#74113) and subagent model-override inheritance (#83920).
3. **Desktop state fragility** — Session lists vanish after reinstall/crash (#83730, #81907), SSH transcripts don't render on reopen (#76124), and Desktop ignores CLI config (#48949, #60356) — the Desktop app's state layer is a recurring frustration.
4. **Resource leaks** — Memory leaks to 15 GB (#21378), plugin cache never reclaimed (#80367), and potential JSC GC segfaults (#57853) suggest background daemon lifecycle management needs attention.
5. **Silent data loss** — Assistant text between tool calls not persisted (#77651) and archived Cowork chats disappearing (#22931) erode trust in the session model.
6. **Authentication edge cases** — Paid Max accounts blocked behind onboarding (#83633) and unauthorized password changes (#84064) indicate auth-state handling has rough edges.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-05

## 1. Today's Highlights

The Rust SDK continued its rapid alpha cadence with four patch-level releases (`0.147.0-alpha.6.1` through `0.147.0-alpha.7`), signaling active work toward the next stable milestone. On the issue side, a persistent conversation-context bug (#8648) remains the community's top concern with 81 comments and 58 upvotes, while a cluster of Windows sandbox and MCP process-leak reports surfaced this week, pointing to ongoing platform-stability work ahead of a wider release.

---

## 2. Releases

| Version | Type | Note |
|---|---|---|
| `rust-v0.147.0-alpha.7` | Rust SDK | Latest alpha; continues tool-registry and permission-profile refactors |
| `rust-v0.147.0-alpha.6.4` | Rust SDK | Patch-level iteration |
| `rust-v0.147.0-alpha.6.3` | Rust SDK | Patch-level iteration |
| `rust-v0.147.0-alpha.6.1` | Rust SDK | Patch-level iteration |

*Four alpha releases landed within 24 h, reflecting tight iteration on the permissions and tool-catalog subsystems.*

---

## 3. Hot Issues

**[#8648] Codex replies to earlier messages instead of the latest one** · 81 comments · 👍 58
The highest-engagement issue on the board. Users report that in multi-turn conversations the assistant sometimes addresses stale turns rather than the most recent prompt, breaking flow in complex sessions. The volume of comments and strong community support signal this is a top-priority UX defect.
<https://github.com/openai/codex/issues/8648>

**[#30009] apply_patch fails with a Windows sandbox–related error** · 31 comments · 👍 10
Windows users hit repeated `apply_patch` failures tied to sandbox restrictions. Given how central patch application is to automated workflows, this is a high-impact regression for the Windows desktop cohort.
<https://github.com/openai/codex/issues/30009>

**[#30408] MCP server processes leak: per-thread processes never cleaned up (9+ GB RSS)** · 23 comments · 👍 6
Orphaned MCP processes accumulate unboundedly across threads, consuming gigabytes of RAM. A serious resource-leak bug that affects anyone running long-lived or multi-threaded sessions.
<https://github.com/openai/codex/issues/30408>

**[#30440] Codex uses bundled pnpm instead of host toolchain** · 20 comments · 👍 26
Developers are frustrated that the bundled `pnpm` is preferred over the system-installed version, causing build-script failures. The strong upvote count (26) indicates broad agreement that host-toolchain respect should be the default.
<https://github.com/openai/codex/issues/30440>

**[#28080] Desktop thread tools intermittently lose handlers (`No handler registered`)** · 19 comments · 👍 2
Within an active session, tool handlers randomly disappear, forcing users to restart. Intermittent reliability issues like this erode trust in long-running workflows.
<https://github.com/openai/codex/issues/28080>

**[#37002] Unable to install after clicking Update** · 17 comments · 👍 0
A fresh install-failure bug reported today; users cannot apply the latest Desktop update. Early-stage report but potentially widespread if it affects the current rollout.
<https://github.com/openai/codex/issues/37002>

**[#25233] `/side` chats are expiring too quickly; expiration behavior is opaque** · 10 comments · 👍 18
Side chats vanish unexpectedly, and the expiration logic is undocumented. The high upvote ratio shows users want clearer lifecycle guarantees for ephemeral conversations.
<https://github.com/openai/codex/issues/25233>

**[#35864] Windows unelevated sandbox rejects enforceable split writable roots** · 10 comments · 👍 0
Includes a contributed bugfix for `apply_patch` failures under restricted-token sandboxes on Windows. Community-submitted patches for Windows sandbox edge cases are increasingly common.
<https://github.com/openai/codex/issues/35864>

**[#10989] Xcode Codex sign-in fails in Safari when HTTPS-only blocks localhost HTTP callback** · 9 comments · 👍 6
The loopback OAuth callback (`http://localhost`) is blocked by Safari's HTTPS-only policy, preventing Xcode extension sign-in. A cross-platform auth flow issue affecting Mac/Safari users.
<https://github.com/openai/codex/issues/10989>

**[#36971] macOS Codex Desktop runaway task worker and app-server consume 12+ GB RAM** · 2 comments · 👍 0
New report of sustained memory bloat on macOS (task worker ~5.5 GB, app-server ~7 GB at 160-200% CPU). Mirrors the MCP-leak pattern in #30408 and suggests a broader perf regression on Apple Silicon.
<https://github.com/openai/codex/issues/36971>

---

## 4. Key PR Progress

| PR | Title | Status | Summary |
|---|---|---|---|
| [#37040](https://github.com/openai/codex/pull/37040) | Use turn environment permissions for context and discovery | Closed | Builds filesystem and permission context from the primary turn environment, falling back to thread context. Foundation for per-turn sandboxing. |
| [#37038](https://github.com/openai/codex/pull/37038) | Use turn environment permissions for tool execution | Closed | Derives sandboxing, approval, and permission variables from the selected turn environment across shell, `apply_patch`, image view, and network flows. |
| [#37031](https://github.com/openai/codex/pull/37031) | Apply permission profile updates to future turn environments | Closed | Each turn environment now carries the current permission profile; retained configs refresh when session settings change. |
| [#37022](https://github.com/openai/codex/pull/37022) | Canonicalize default tools under the `functions` namespace | Closed | Groups tool definitions into a single `functions` namespace for Responses Lite providers, normalizing missing/empty/explicit namespaces. |
| [#37020](https://github.com/openai/codex/pull/37020) | Enforce strict tool name collision errors | Closed | Fails the registry build when duplicate effective tool names are detected (configurable via `error_on_tool_collisions`). |
| [#37035](https://github.com/openai/codex/pull/37035) | Align registry tests with canonical tool names | Closed | Updates tests to expect canonicalized tool names and removes obsolete namespaced-test case. |
| [#37027](https://github.com/openai/codex/pull/37027) | Enforce Agent Plugin runtime boundaries | Closed | Tracks Agent Plugin manifests through loading pipeline; isolates MCP data and excludes app/hook capabilities from skill discovery. |
| [#36998](https://github.com/openai/codex/pull/36998) | Support deferred custom tools in tool search | Closed | Freeform custom tools are now indexed for search and loaded on-demand, serialized as `custom` tools in the Responses API. |
| [#36987](https://github.com/openai/codex/pull/36987) | Add opt-in concurrent exec-server request dispatch | Closed | New `--concurrent-requests <COUNT>` flag lets health checks and cleanup proceed in parallel rather than blocking on long-running requests. |
| [#36981](https://github.com/openai/codex/pull/36981) | Enable remote compaction for Amazon Bedrock | Closed | Bedrock now supports v1 compaction via `/v1/responses/compact`, closing a feature gap for custom-provider users. |

---

## 5. Feature Request Trends

- **Per-turn permission model** — The dominant architectural thrust this cycle: PRs #37040, #37038, and #37031 converge on binding sandbox/permission context to individual turns rather than the entire thread, enabling fine-grained, revocable access.
- **Tool-registry hardening** — Multiple PRs (#37022, #37020, #37035) target collision detection, namespace canonicalization, and test alignment, reflecting community pressure for more predictable tool resolution.
- **Deferred/custom tool discovery** — PR #36998 introduces on-demand loading of freeform tools into search, addressing the pain point of large, static registries.
- **Model selection flexibility** — Issue #14969 requests the ability to pick a different model for plan implementation vs. planning; Issue #28469 asks for a managed, enforceable model allowlist.
- **Global conversation search** — Issue #16672 (11 comments, 11 👍) requests cross-thread search across titles and content, a frequently recurring usability ask.
- **Side-chat lifecycle transparency** — Issue #25233 and related reports call for clearer expiration semantics and persistence guarantees for ephemeral `/side` chats.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|---|---|
| **Windows sandbox restrictions** | #30009, #35864, #19020 — `apply_patch` hangs or fails under sandboxed execution; unelevated tokens reject writable-root splits |
| **MCP / process memory leaks** | #30408, #35485, #36971 — Per-thread MCP processes and task workers leak memory (up to 12+ GB RSS) and are never reaped |
| **Host-toolchain overrides** | #30440 — Bundled `pnpm` takes precedence over the system toolchain, breaking developer build scripts |
| **Conversation context drift** | #8648 — Codex replies to stale messages instead of the latest turn, breaking multi-turn workflows |
| **Tool handler instability** | #28080 — Handlers randomly unregister during active sessions, producing `No handler registered` errors |
| **Side-chat fragility** | #25233, #22001, #20977 — Side chats expire prematurely, fail to persist, and break on fork after inactivity |
| **Auth flow regressions** | #10989 — Safari HTTPS-only policy blocks the localhost OAuth callback; #36418 reports steer messages being dropped after IDE-extension updates |
| **Custom-provider brokenness** | #29156, #32574 — Custom OpenAI-compatible providers fail to surface in the Desktop model picker; MCP tools report `has_cached_tools=false` despite successful startup |

---

*Data sourced from github.com/openai/codex on 2026-08-05. This digest covers the 24-hour window preceding publication.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-05

## 1. Today's Highlights

Two security-critical fixes landed overnight: a variable expansion bypass in bash/PowerShell detection was patched ([#28691](https://github.com/google-gemini/gemini-cli/issues/28691)), and an SSRF vulnerability allowing domain-name IP evasion was resolved via async DNS resolution ([#28557](https://github.com/google-gemini/gemini-cli/issues/28557)). Additionally, the nightly release pipeline for v0.55.0 hit a snag due to npm dist-tag deletion restrictions on the Wombat registry, addressed by [#28694](https://github.com/google-gemini/gemini-cli/issues/28694).

---

## 2. Releases

No new stable releases in the last 24 hours. The nightly build **v0.55.0-nightly.20260805** encountered a release workflow failure ([#28692](https://github.com/google-gemini/gemini-cli/issues/28692)) caused by registries that reject dist-tag deletions — a fix is already in progress ([#28694](https://github.com/google-gemini/gemini-cli/issues/28694)).

---

## 3. Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS reported as GOAL success** (12 comments, 2 👍)
   The `codebase_investigator` subagent silently claims success upon hitting its turn limit, masking the real failure. Critical for anyone relying on subagent delegation in complex repos.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs forever** (8 comments, 8 👍)
   Simple operations like folder creation cause the generalist agent to hang indefinitely. A high-impact bug affecting daily workflows; strong community support signals urgency.

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations** (7 comments)
   Epic tracking behavioral eval infrastructure for 76+ tests across 6 Gemini models. Important for release quality assurance and CI gating.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and mapping** (7 comments, 1 👍)
   Investigation into whether AST-aware tools can reduce turn counts and token noise. Potential major perf win for codebase navigation.

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini does not use skills and sub-agents enough** (6 comments)
   Users report that custom skills (e.g., Gradle, Git) are rarely invoked without explicit prompting. Points to a gap in the agent's tool-discovery reasoning.

6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely** (5 comments)
   Sessions the extractor marks as low-signal are never marked processed, causing them to be re-surfaced endlessly. Affects memory system reliability.

7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Deterministic redaction and reduced Auto Memory logging** (4 comments)
   Secrets may reach model context before redaction occurs in the extraction agent. A security-hardening request with privacy implications.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell execution stuck on "Waiting input"** (4 comments, 3 👍)
   Simple CLI commands leave the agent hanging in an "Awaiting user input" state long after completion. High frustration factor for interactive users.

9. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — Browser agent session takeover and lock recovery** (4 comments)
   Feature request for graceful handling of orphaned browser processes in persistent session mode. Relevant for Linux/Wayland users ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).

10. **[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — Subagents running without permission since v0.33.0** (3 comments)
    After updating, users found subagents active despite being disabled in config. A regression causing unexpected behavior and trust concerns.

---

## 4. Key PR Progress

1. **[#28691](https://github.com/google-gemini/gemini-cli/pull/28691) — Block `$VAR` / `${VAR}` expansion bypass** (Security, P1)
   Fixes incomplete checks in `detectBashSubstitution()` and `detectPowerShellSubstitution()` that allowed variable expansion patterns to bypass the security gate. Defense-in-depth hardening for GHSA-wpqr-6v78-jr5g.

2. **[#28557](https://github.com/google-gemini/gemini-cli/pull/28557) — SSRF fix via async DNS resolution** (Security, P1)
   Replaces synchronous `isPrivateIp()` with an async variant so domain names are resolved before IP-range validation, closing the loophole where hostnames resolving to `169.254.169.254` would pass unchecked.

3. **[#28695](https://github.com/google-gemini/gemini-cli/pull/28695) — Don't abort sendStream on malformed tool args** (Non-interactive, P2)
   Removes an unguarded `JSON.parse()` that threw out of the generator when tool arguments were malformed strings, improving streaming resilience.

4. **[#28694](https://github.com/google-gemini/gemini-cli/pull/28694) — Handle npm dist-tag deletion failures** (Release, P1)
   Gracefully handles 403 errors from registries like Wombat Dressing Room that forbid tag deletion, unblocking nightly release pipelines.

5. **[#28689](https://github.com/google-gemini/gemini-cli/pull/28689) — Unwrap nested gaxios streaming errors** (Core)
   Adds fallback parsing for Google API errors wrapped in `error.cause.message`, improving error visibility for rate limits and capacity exhaustion during streaming.

6. **[#28641](https://github.com/google-gemini/gemini-cli/pull/28641) — Fix ghost text wrapping infinite loop** (Core, P2)
   Resolves an infinite loop in `getGhostTextLines` at narrow terminal widths with CJK/emoji characters by force-advancing the split index. Fixes [#19985](https://github.com/google-gemini/gemini-cli/issues/19985).

7. **[#28688](https://github.com/google-gemini/gemini-cli/pull/28688) — Dynamic OAuth redirect for Cloud Workstations** (Security, P3)
   Resolves OAuth failures in Google Cloud Workstations VMs by dynamically resolving the proxy redirect URI instead of hardcoding `localhost`.

8. **[#28664](https://github.com/google-gemini/gemini-cli/pull/28664) — Full MCP server config in consent prompts** (MCP)
   Consent dialogs now surface the complete server config (env, cwd, headers) rather than just command/args, improving transparency for extension updates.

9. **[#28305](https://github.com/google-gemini/gemini-cli/pull/28305) — Tool-call formatter for eval failures** (Evals)
   Adds a compact, numbered timeline of tool calls with arguments and error details directly in the console on eval failures, greatly improving debuggability.

10. **[#28344](https://github.com/google-gemini/gemini-cli/pull/28344) — `eval:validate` static analysis for CI gating** (Evals)
    New CLI command that validates eval source files against 9 rules, enabling pre-merge quality checks in CI pipelines.

---

## 5. Feature Request Trends

- **Eval & observability infrastructure** — Repeated requests for better evaluation tooling ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), including subagent trajectory sharing, behavioral eval frameworks, and LLM-as-a-judge triage ([#28530](https://github.com/google-gemini/gemini-cli/pull/28530)).
- **AST-aware codebase tools** — Investigation into AST-based reads and navigation ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to reduce turns and token waste.
- **Memory system hardening** — Requests for better Auto Memory signal detection ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), invalid patch quarantine ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Browser agent resilience** — Session takeover, lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), and Wayland compatibility ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Agent self-awareness** — Users want the CLI to understand and accurately describe its own flags, hotkeys, and mechanics ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

---

## 6. Developer Pain Points

- **Subagent reliability** — Multiple open bugs around subagent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), false success reports ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and unauthorized execution ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) are creating friction for users who depend on multi-agent workflows.
- **Shell execution state bugs** — Commands that complete still leave the agent in a stuck "Waiting input" state ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and interactive prompts (e.g., Vite creation) can hang the agent ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
- **Security regressions** — Two security PRs landed in 24 hours (variable expansion bypass, SSRF via domain evasion), signaling that the expanding attack surface from MCP, web fetch, and shell tools requires continuous hardening.
- **Tool overload** — Users hitting 400 errors with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) indicate the agent struggles to scope its toolset in large projects.
- **Terminal UX** — Flickering on resize ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), ghost text infinite loops at narrow widths ([#28641](https://github.com/google-gemini/gemini-cli/pull/28641)), and editor-exit corruption ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)) continue to frustrate terminal users.
- **Cleanup overhead** — The model's tendency to scatter tmp scripts across directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) adds manual cleanup burden, and destructive operation caution remains a concern ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-05

## 1. Today's Highlights

Copilot CLI **v1.0.79-2** shipped with a UX improvement that pins prompts one row higher to reduce timeline cost, while **v1.0.79-1** introduced a breaking rename of the `allowDevToolCaches` sandbox setting to `allowDevToolAccess`. On the issue front, the community is actively requesting custom theme support, session forking, and cloud-synced sessions — while several MCP initialization and BYOK regressions have surfaced in the latest patch releases.

---

## 2. Releases

**v1.0.79-2** ([GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.79-2))
- Pins the current prompt one row higher, reusing the row the tab bar already reserves, reducing timeline height by one row while preserving prompt shape.
- Disables pinned prompts by default on terminals under 30 rows to prevent output crowding; configurable via `pinnedPrompts` setting.

**v1.0.79-1** ([GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.79-1))
- **Breaking:** Sandbox setting `allowDevToolCaches` renamed to `allowDevToolAccess` (it now covers dev-tool config and registries, not just caches). The old key is silently ignored, so an existing `false` opt-out reverts to the default (on). Users must update their config.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#1504](https://github.com/github/copilot-cli/issues/1504) | Add custom theme support | Users want shareable custom themes beyond built-in options. | 👍 23 · 8 comments |
| [#1697](https://github.com/github/copilot-cli/issues/1697) | Session forking — branch conversations with shared context | Enables parallel multi-step workflows without losing context. | 👍 25 · 3 comments |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | Org-level Agent not showing up | Blocks enterprise users from discovering org-scoped agents in CLI/VS Code. | 👍 9 · 7 comments |
| [#2692](https://github.com/github/copilot-cli/issues/2692) | Web Search tool MCP error | `github-mcp-server` fails on `POST` during web search — breaks a key built-in tool. | 👍 2 · 6 comments (closed) |
| [#4005](https://github.com/github/copilot-cli/issues/4005) | Billing entity not selected for enterprise memory | Users can't save memories in enterprise mode despite other features working. | 👍 3 · 4 comments |
| [#4202](https://github.com/github/copilot-cli/issues/4202) | `view` tool reports "Path does not exist" in 1.0.73 | Regression — built-in `view` tool fails on existing files since v1.0.72. | 👍 1 · 4 comments |
| [#1947](https://github.com/github/copilot-cli/issues/1947) | Cloud-synced sessions for cross-device continuity | Sessions are local-only; no way to continue work across machines. | 👍 6 · 4 comments (closed) |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | MCP init fails when `server/discover` returns `-32602` | FastMCP servers aren't compatible with v1.0.79-1's discovery handshake. | 👍 1 · 2 comments |
| [#4196](https://github.com/github/copilot-cli/issues/4196) | BYOK completions fail with `reasoning_content` in streaming deltas | BYOK providers emitting `reasoning_content` trigger transient API errors and 5 retries. | 👍 0 · 2 comments |
| [#4345](https://github.com/github/copilot-cli/issues/4345) | Reasoning effort 'medium' unsupported for claude-haiku-4.5 | Feature flags assign unsupported reasoning levels, causing sub-agent execution failures. | 👍 1 · 1 comment |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#4355](https://github.com/github/copilot-cli/pull/4355) | Merge | Open | General merge PR — details TBD. |
| [#4366](https://github.com/github/copilot-cli/pull/4366) | Security findings resolution for `copilot-cli` | Open | Resolves fundamental Vault security findings for the `ci, production` app. Requires reviewer to replace `<UPDATE_ME>` placeholders before merge. |

*Note: Only 2 PRs were updated in the last 24h. No additional PRs are available for expansion.*

---

## 5. Feature Request Trends

- **Custom theming & accessibility** — Issue #1504 (👍 23) and #3898 (OSC-11 color clash) show strong demand for theme extensibility and palette fixes.
- **Session management & continuity** — Issues #1697 (session forking, 👍 25), #1947 (cloud-synced sessions, 👍 6), #2019 (delete session, 👍 13), and #1343 (remote heartbeat) indicate users want richer session lifecycle controls and cross-device sync.
- **BYOK & custom model support** — Issue #4139 (👍 6) and #4196 highlight demand for bringing your own LLM endpoints and robust streaming/delta handling.
- **Plugin & skill ergonomics** — Issues #1709 (auto-update plugins, 👍 29), #4048 (skills not listed in `/skills`), and #4361 (slash-command regression) point to a need for better plugin discoverability and auto-updates.
- **MCP & agent integration** — Issues #4370, #4371, #2692, and #1285 reveal growing pains as MCP adoption scales, especially around OAuth flows, server discovery, and enterprise agent visibility.

---

## 6. Developer Pain Points

1. **MCP server compatibility regressions** — v1.0.79-1's `server/discover` handshake breaks FastMCP servers (#4370), and OAuth 3LO flows fail without URL elicitation (#4371). Enterprise users also report org-level agents disappearing from CLI (#1285).

2. **BYOK streaming instability** — Providers that include `reasoning_content` in chat completion deltas cause repeated transient errors and retry loops (#4196), making self-hosted model integration unreliable.

3. **Enterprise configuration drift** — Billing entity selection breaks memory persistence in enterprise setups (#4005), and the renaming of `allowDevToolCaches` → `allowDevToolAccess` silently reverts opt-outs (#4366 PR context), creating upgrade friction.

4. **Built-in tool regressions** — The `view` tool reports "Path does not exist" on valid files since v1.0.72 (#4202), and the web search tool sometimes fabricates answers instead of reporting empty results (#4093).

5. **Session UX gaps** — No native session deletion (#2019), no cross-device sync (#1947), stashed prompts are lost on session switch (#4334), and `sessionStart` hooks don't fire on `/new` or `/clear` (#4365), forcing workarounds for workflow automation.

6. **Windows stability** — Repeated native runtime crashes on Windows across multiple versions since May 2026 (#4026) remain an unresolved pain point.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-05

## 1. Today's Highlights

Agent reliability degrades significantly once session context exceeds ~500K tokens, with reports of repetitive action loops and instruction drift — a critical finding for long-running coding workflows. On the platform side, two Windows-specific bugs emerged today: abnormal CLI exits mid-session (v0.29.2 / K3 high) and Thai IME character duplication (v0.31.1). Two PRs also landed in review — one extending shell timeouts for slow operations, and another propagating the `AI_AGENT` environment variable to subprocesses.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### #2586 — Agent reliability degrades at high context fill (~500K tokens) [CLOSED]
**[Link](https://github.com/MoonshotAI/kimi-cli/issues/2586)** · Author: GrokBuildMJW · 1 comment
> Reports a sharp drop in reliability during long-running agentic sessions once context surpasses roughly 500K tokens, manifesting as repetitive action loops, no escalation, and instruction drift. The issue has been closed, suggesting the team acknowledges and is addressing the problem. This is a high-signal finding for anyone running multi-step, tool-heavy agent workflows at scale.

### #2587 — Abnormal CLI exit during normal session advancement [OPEN] [bug]
**[Link](https://github.com/MoonshotAI/kimi-cli/issues/2587)** · Author: Sdongmaker · 0 comments
> Kimi Code v0.29.2 on Windows 11 (build 26200.0 x64) using the K3 high model exits unexpectedly while progressing a session. No comments yet, but the report includes a screenshot (truncated in data). A fresh bug with no community traction yet — worth watching for recurrence patterns.

### #2584 — Thai & other IME-based characters duplicated on Windows [OPEN] [bug]
**[Link](https://github.com/MoonshotAI/kimi-cli/issues/2584)** · Author: mgprona · 0 comments
> On v0.31.1 / Windows 11, Thai and other IME-dependent characters are duplicated when typing in the prompt. This affects non-Latin keyboard layouts and is a recurring class of issue on Windows terminals. Currently unaddressed with no comments.

### #1283 — Feature Request: Memory System for persistent context across sessions [OPEN] [enhancement]
**[Link](https://github.com/MoonshotAI/kimi-cli/issues/1283)** · Author: CatKang · 18 comments · 0 👍
> Proposes a comprehensive memory system — both AI-managed (automatic notes) and user-defined (manual instructions) — so Kimi Code CLI retains project patterns, preferences, and context between sessions. Originally filed in Feb 2026 but updated today. 18 comments indicate active community discussion, though no upvotes yet. A perennial request that signals demand for stateful, personalized agent behavior.

### #1282 — Feature Request: Remote Control — continue sessions from any device [OPEN] [enhancement]
**[Link](https://github.com/MoonshotAI/kimi-cli/issues/1282)** · Author: CatKang · 12 comments · 24 👍
> Requests the ability to continue a local CLI session from a phone, tablet, or browser, preserving full local environment access. This is the most upvoted issue in the dataset (24 👍) and reflects strong community interest in workflow continuity across devices. Updated yesterday; still open.

---

## 4. Key PR Progress

### #2200 — fix(shell): adapt timeouts for long commands [OPEN]
**[Link](https://github.com/MoonshotAI/kimi-cli/pull/2200)** · Author: he-yufeng · Created 2026-05-08 · Updated 2026-08-04
> Extends shell timeouts automatically for commonly slow operations (git submodule cleanup, git clone/fetch, package installs, builds) while keeping the 60s default for normal commands and preserving explicit timeouts from callers. Open for over two months — signals a known pain point around command timeouts that the team has been iterating on.

### #2585 — feat(cli): set AI_AGENT for subprocesses [OPEN]
**[Link](https://github.com/MoonshotAI/kimi-cli/pull/2585)** · Author: complynx · Created 2026-08-04 · Updated 2026-08-04
> Exposes `AI_AGENT=kimi` to subprocesses launched from both pip/uv and standalone binary entrypoints, while preserving any explicit non-blank value from a wrapper or orchestrator. Covers missing, blank, and explicit marker behavior across both entry points. A new PR with no comments yet — relevant for anyone orchestrating Kimi CLI within agent frameworks or CI pipelines.

---

## 5. Feature Request Trends

Two dominant themes emerged from open enhancement issues:

1. **Session continuity & cross-device access** — Issue #1282 (24 👍) shows strong demand for resuming local CLI sessions remotely, indicating users want their agent workflows to be device-agnostic rather than tied to a single terminal.

2. **Persistent memory & personalization** — Issue #1283 (18 comments) points to a desire for the CLI to remember project-specific patterns, preferences, and context across sessions, moving toward a more stateful, personalized coding agent rather than a stateless tool.

Both requests come from the same author (CatKang) and reflect a broader trend: users want Kimi Code CLI to behave more like a persistent assistant than a per-invocation tool.

---

## 6. Developer Pain Points

- **Agent reliability at scale** — Context fill beyond ~500K tokens triggers repetitive loops and instruction drift (#2586), making long-running agentic workflows fragile.
- **Windows stability & input handling** — Two separate Windows bugs surfaced today: unexpected process exits (#2587) and IME character duplication (#2584), pointing to ongoing Windows compatibility gaps.
- **Shell timeout rigidities** — PR #2200 has been open since May, confirming that the one-size-fits-all 60s timeout is a recurring frustration for users running slow commands (git, package installs, builds).
- **Orchestration visibility** — PR #2585 highlights that subprocesses currently lack a reliable way to identify they're being launched by Kimi CLI, a gap for developers building wrapper tools or agent pipelines on top of the CLI.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-05

## 1. Today's Highlights

OpenCode v1.18.13 shipped with RTL layout fixes for Desktop and enhanced GitHub PR context in the TUI. A major backend effort is underway to retire the V1 protocol stack, with six interdependent PRs landed or in progress this week. Community attention is sharply focused on Go plan usage visibility and free-tier cut-off frustration.

## 2. Releases

**v1.18.13** — [GitHub Release](https://github.com/anomalyco/opencode/releases)

- **TUI:** GitHub pull request reviews now surface the PR number and URL in context, improving traceability during code review workflows.
- **Desktop:** Several right-to-left layout bugs fixed across tabs, drawers, resizing, and titlebar interactions; shared RTL directional icon behavior corrected.

## 3. Hot Issues

| # | Title | Reaction | Link |
|---|-------|----------|------|
| #16017 | Add Go plan usage/balance API endpoint (rolling/weekly/monthly) | 🔥 126 👍, 30 comments — the most-engaged open feature request; users need programmatic visibility into quota windows. | [#16017](https://github.com/anomalyco/opencode/issues/16017) |
| #40243 | ChatGPT OAuth rejects GPT-5.6 models for EU-resident workspace | 4 👍, 4 comments — direct conflict with official Codex CLI; EU residency adds a compliance edge case. | [#40243](https://github.com/anomalyco/opencode/issues/40243) |
| #38723 | `opencode run` intermittently hangs during init (~56% failure rate) | 1 👍, 5 comments — unreliable headless execution; the non-deterministic nature makes debugging difficult. | [#38723](https://github.com/anomalyco/opencode/issues/38723) |
| #40588 | Free tier cuts off mid-task with no warning | 2 comments — raised by a Home Assistant add-on user; highlights the UX gap for non-technical free-tier consumers. | [#40588](https://github.com/anomalyco/opencode/issues/40588) |
| #28590 | `writeOsc52` broken under GNU screen | 2 👍, 10 comments — tmux-specific DCS wrapper applied to GNU screen; a long-standing terminal compatibility gap. | [#28590](https://github.com/anomalyco/opencode/issues/28590) |
| #39207 | GitHub OAuth login fails — email param comes back empty | 1 👍, 5 comments — server-side SQL error during OAuth callback; blocks sign-in for affected users. | [#39207](https://github.com/anomalyco/opencode/issues/39207) |
| #40572 | Electron renderer freezes (~3s) with "renderer unresponsive" | 2 comments — Solid.js reactive dependency cycle amplified by ResizeObserver thrashing; performance regression in v1.18.13. | [#40572](https://github.com/anomalyco/opencode/issues/40572) |
| #22233 | Improve subagent runtime visibility in chat UI | 7 comments — users can't tell which agent is running, what it's doing, or how long it's been active; a UX transparency gap. | [#22233](https://github.com/anomalyco/opencode/issues/22233) |
| #30862 | TUI stuck with no response after update | 1 👍, 12 comments — reinstall of GUI and CLI didn't help; session title changes but no output is emitted. | [#30862](https://github.com/anomalyco/opencode/issues/30862) |
| #40584 | `/usage` or `/status` command for Go plan limits in TUI | 2 comments — complements #16017; users want inline usage checks without leaving the TUI. | [#40584](https://github.com/anomalyco/opencode/issues/40584) |

## 4. Key PR Progress

| # | Title | Status | Link |
|---|-------|--------|------|
| #40382 | refactor(app): remove v1 compatibility | 🔄 Open — removes V1 protocol detection, legacy adapters, and `@opencode-ai/sdk`; routes all traffic through V2. | [#40382](https://github.com/anomalyco/opencode/pull/40382) |
| #40381 | refactor(app): gate unsupported v2 capabilities | 🔄 Open — hides/disables controls whose APIs are unavailable on V2 servers; preserves V1 behavior behind a legacy facade. | [#40381](https://github.com/anomalyco/opencode/pull/40381) |
| #40378 | refactor(app): migrate supported v2 APIs | ✅ Closed — migrates session transport, catalog, file, project, workspace, PTY, provider credentials, and MCP integrations to V2. | [#40378](https://github.com/anomalyco/opencode/pull/40378) |
| #40376 | fix(app): reconcile v2 session projections | ✅ Closed — prunes stale projected sources, marks message pages complete, avoids synthetic empty user parts. | [#40376](https://github.com/anomalyco/opencode/pull/40376) |
| #40375 | refactor(app): own rendering contracts | ✅ Closed — defines App-owned message/part projection contracts; routes rendering type imports through the App boundary. | [#40375](https://github.com/anomalyco/opencode/pull/40375) |
| #40595 | fix(app): sync session selection before prompts | 🔄 Open — synchronizes selected agent, model, and reasoning variant before prompt admission for both immediate and queued prompts. | [#40595](https://github.com/anomalyco/opencode/pull/40595) |
| #40576 | fix(core): continue interrupted responses | 🔄 Open — preserves output-bearing attempts when a provider response ends unexpectedly; appends a synthetic continuation prompt. | [#40576](https://github.com/anomalyco/opencode/pull/40576) |
| #40582 | feat(desktop): add inline conversation visualizations | 🔄 Open — Desktop-only inline HTML visualizations; the model writes versioned fragments through a `visualize` tool. | [#40582](https://github.com/anomalyco/opencode/pull/40582) |
| #40578 | feat(session): add `/handoff` command | 🔄 Open — allows explicit handoff between agents/sessions; closes #26757. | [#40578](https://github.com/anomalyco/opencode/pull/40578) |
| #40487 | fix(core): retire legacy provider aliases | 🔄 Open — removes Azure Cognitive Services and Google Vertex Anthropic as standalone registrations; migrates legacy V1 provider IDs. | [#40487](https://github.com/anomalyco/opencode/pull/40487) |

## 5. Feature Request Trends

- **Usage visibility & quota transparency** — The dominant theme: #16017 (API endpoint), #40584 (TUI `/usage` command), and #40588 (free-tier countdown/warning) all demand better programmatic and in-UI visibility into subscription and free-tier consumption.
- **Subagent & session control** — #22233 and #40578 (`/handoff`) reflect a growing multi-agent workflow where users need runtime transparency and explicit session transfer mechanisms.
- **Cross-platform terminal compatibility** — #28590 (GNU screen) and #20234 (WSL thinking output) show ongoing friction in terminal-emulator edge cases.
- **Model catalog hygiene** — #40577 requests removal of retired DeepSeek models from `/models`; #30951 flags a Zen backend/model-catalog mismatch.
- **V2 migration completeness** — The bulk of active PRs (#40382, #40381, #40378, #40376, #40375) signal an aggressive push to fully retire the V1 stack, which itself is a structural feature request from users on legacy configurations.

## 6. Developer Pain Points

- **Intermittent hangs in headless mode** — #38723 reports a ~56% failure rate for `opencode run` during init, with no error output, making CI/CD integration unreliable.
- **Desktop performance regressions** — #40572 documents renderer freezes in v1.18.13 caused by a Solid.js reactive cycle combined with ResizeObserver thrashing and rate-limit retry storms.
- **OAuth flow fragility** — #39207 (GitHub OAuth empty email) and #40243 (ChatGPT OAuth EU residency rejection) show that authentication paths are brittle across providers and regions.
- **Free-tier UX gaps** — #40588 and #40571 describe users hitting silent cut-offs or subscription mismatches with no warning, particularly affecting non-technical Home Assistant users.
- **V1→V2 migration anxiety** — The retired legacy provider aliases (#40487) and v1 compatibility removal (#40382) are necessary but risk breaking existing configurations; users are requesting clearer migration paths and backward-compatible fallbacks.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-05

## 1. Today's Highlights

No new releases landed in the past 24 hours, but activity surged around Windows/WSL compatibility, enterprise Copilot compaction failures, and two new AI provider integrations (Cortecs and LLM Gateway). Mermaid diagram rendering and configurable compaction thinking levels moved into open PRs, signaling near-term feature additions.

## 2. Releases

*No releases in the last 24 hours.*

## 3. Hot Issues

| # | Title | Status | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#7547](https://github.com/badlogic/pi-mono/issues/7547) | How do you use Pi on Windows? | OPEN | 13 | Community rallying point to consolidate Windows pain and prioritize fixes vs. delegation to extensions. |
| [#7064](https://github.com/badlogic/pi-mono/issues/7064) | WSL absolute Windows paths mishandled | OPEN | 12 | `read`/`write`/`edit` tools regularly fail on WSL2 due to path translation bugs — a daily blocker for hybrid dev setups. |
| [#5023](https://github.com/badlogic/pi-mono/issues/5023) | Terminal scrolls to beginning randomly | CLOSED | 11 | Intermittent full-buffer scroll during model turns disrupts workflow; closed but indicates ongoing TUI rendering fragility. |
| [#7465](https://github.com/badlogic/pi-mono/issues/7465) | Add payload size to iTerm2 inline images | OPEN | 7 | `@xterm/addon-image@0.9.0` silently rejects images without a `size` param — breaks inline image rendering in iTerm2. |
| [#7399](https://github.com/badlogic/pi-mono/issues/7399) | `truncateToWidth()` leaves dangling OSC 8 hyperlinks | OPEN | 6 | Truncation inside a hyperlink leaves broken ANSI sequences in the terminal output. |
| [#7413](https://github.com/badlogic/pi-mono/issues/7413) | Compaction fails on GitHub Copilot GHE enterprise | OPEN | 6 | `/compact` throws `unknown stamp "prod-cus-01"` on enterprise accounts; normal chat works — compaction path has a separate auth bug. |
| [#7244](https://github.com/badlogic/pi-mono/issues/7244) | Enhance `version` to show runtime | OPEN | 6 | Bun vs. Node runtime differences cause many issues; users want it in `--version` output for easier triage. |
| [#7553](https://github.com/badlogic/pi-mono/issues/7553) | Configurable thinking level/model for compaction | OPEN | 6 | Compaction unconditionally reuses session thinking level; users want independent control to avoid burning the full thinking budget on summarization. |
| [#6817](https://github.com/badlogic/pi-mono/issues/6817) | `find` returns no results for path patterns on Windows | OPEN | 5 | Patterns with path separators (e.g. `src/**/*.ts`) return "No files found" on Windows — a core agent tooling bug. |
| [#7508](https://github.com/badlogic/pi-mono/issues/7508) | OAuth refresh has no request timeout; freezes session | CLOSED | 5 | Stalled token refresh holds the credential-store lock for ~5 min, freezing the entire session. Closed but highlights a systemic reliability gap. |

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#7638](https://github.com/badlogic/pi-mono/pull/7638) | Support `thinking_token_budget` on openai-completions | CLOSED | Sends vLLM's `thinking_token_budget` behind an opt-in compat flag so reasoning-heavy turns don't consume the full `max_tokens` ceiling and abort early. |
| [#7637](https://github.com/badlogic/pi-mono/pull/7637) | Setup a benchmark for Pi startup | CLOSED | Adds Node/Bun startup profiling for TUI and RPC modes across bare, skills-only, extensions-only, and full configs to prevent regression. |
| [#7619](https://github.com/badlogic/pi-mono/pull/7619) | Resume failed turn by selecting in `/tree` | OPEN | Selecting a failed assistant entry in the transcript tree retries the turn instead of landing on a dead branch. |
| [#7597](https://github.com/badlogic/pi-mono/pull/7597) | Make extension selector scrollable in fullscreen | OPEN | Wraps diff titles in a `ScrollView` and pins yes/no actions so large diffs are reviewable without hidden controls. |
| [#7632](https://github.com/badlogic/pi-mono/pull/7632) | Retry transient management HTTP requests | OPEN | Retries idempotent management requests (pi.dev, GitHub releases, tools) to fix flaky network drops. |
| [#7624](https://github.com/badlogic/pi-mono/pull/7624) | Render Mermaid diagrams | OPEN | Implements inline Mermaid rendering in markdown via the `grok-mermaid` library (closes #7623). |
| [#7571](https://github.com/badlogic/pi-mono/pull/7571) | Add built-in Cortecs provider support | CLOSED | Adds Cortecs (European AI router, models.dev-backed) as a new built-in provider. |
| [#7610](https://github.com/badlogic/pi-mono/pull/7610) | Add LLM Gateway and LLM Gateway DevPass providers | OPEN | Adds two OpenRouter-style LLM Gateway providers as built-in `openai-completions` backends. |
| [#7626](https://github.com/badlogic/pi-mono/pull/7626) | Move SQLite backend tests into storage package | CLOSED | Tests now live in `packages/storage/sqlite-node` with package-owned Vitest/coverage config; removes duplicated cases. |
| [#7612](https://github.com/badlogic/pi-mono/pull/7612) | Add size param to iTerm2 image encoder | OPEN | Includes decoded byte count in OSC 1337 sequences so `@xterm/addon-image@0.9.0` accepts Pi's inline images (closes #7465). |

## 5. Feature Request Trends

- **Provider expansion:** Two new router providers (Cortecs, LLM Gateway) landed or are in review, reflecting demand for more OpenAI-compatible routing options.
- **Compaction configurability:** Users want independent control over the model and thinking level used during summarization (#7553, #7602), rather than inheriting the session-level settings.
- **Visual rendering:** Mermaid diagram support (#7624) and iTerm2 image size fixes (#7612) show continued investment in richer TUI output.
- **Observability & reliability:** Startup benchmarking (#7637) and enhanced `version` output with runtime info (#7244) aim to make regression detection and bug reporting easier.
- **Windows/WSL parity:** A cluster of issues (#7547, #7064, #6817, #7427) points to Windows support as a recurring feature gap the community wants prioritized.

## 6. Developer Pain Points

1. **Windows & WSL path handling** is the top recurring frustration — absolute path translation, `find` glob patterns, and `loadSkills` crashes all stem from OS-specific path logic.
2. **Enterprise Copilot compaction** fails with auth/stamp errors (#7413, #7579) while normal chat works fine, suggesting the compaction code path doesn't properly rewrite `baseUrl` or authenticate against GHE endpoints.
3. **OAuth refresh deadlocks** — stalled token refreshes hold the credential-store lock and freeze sessions for minutes (#7508), a critical reliability issue for users on flaky networks or corporate proxies.
4. **TUI rendering fragility** — terminal scroll jumps (#5023, #7616), dangling hyperlinks (#7399), uncaught exceptions on wide dialog lines (#7528), and fullscreen keybinding conflicts (#7574) all indicate the renderer needs more robust bounds checking.
5. **`node:sqlite` missing in release binaries** (#7594) breaks extensions that depend on it, pointing to a packaging gap in the distribution builds.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-05

## 1. Today's Highlights

Qwen Code released two packages (v0.21.6-preview.0 and v0.21.5-nightly.20260805.32e274157) with alpha readiness diagnostics for the browser extension and updated documentation for headless Goal workflows. Community momentum is strongest around trustworthy agent runtime design (issue #8102, 17 comments) and several UI regression reports involving tmux flickering and terminal scrollback duplication.

---

## 2. Releases

**v0.21.6-preview.0** · [PR #6739](https://github.com/QwenLM/qwen-code/pull/6739)
- **feat(browser-ext):** adds alpha readiness diagnostics for the browser extension.
- **docs:** documents headless Goal workflows.

**v0.21.5-nightly.20260805.32e274157** — Same changes as above; nightly rebuild.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | Deterministic tool-execution boundaries for a trustworthy agent runtime | Core security vision — keeping the LLM outside the trust boundary with deterministic constraints, authorization, and observation. Highest comment count (17) signals strong community interest. |
| [#8519](https://github.com/QwenLM/qwen-code/issues/8519) | Severe screen flickering in tmux | Reproducible UI regression affecting interactive CLI users; 11 comments and already closed. |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | Bound multi-workspace daemon resource usage | Daemon currently count-only limits workspaces/sessions but does not bound bytes held by request bodies or WebSocket assembly — critical for production `qwen serve`. |
| [#8136](https://github.com/QwenLM/qwen-code/issues/8136) | Provider warning sanitizer truncates port-bearing messages & leaks `@` passwords | Security-relevant bug in `sanitizeProviderWarning` that can expose credentials in `/status` payloads. |
| [#8532](https://github.com/QwenLM/qwen-code/issues/8532) | CI logs make mocked disk-full test errors look like runner ENOSPC | Confusing CI signal; tests deliberately throw `'disk full'` which production code logs to stderr, creating false positives. |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | After `APIUserAbortError`, subsequent turns are not written to local session transcript | Session persistence bug affecting ACP/Web bridge workflows — turns silently dropped after user abort. |
| [#8550](https://github.com/QwenLM/qwen-code/issues/8550) | `qwen mcp list` hangs indefinitely on SSE servers that never send `endpoint` | MCP tooling reliability issue; hangs, not just slow, when SSE transport is misconfigured. |
| [#8533](https://github.com/QwenLM/qwen-code/issues/8533) | `Content[]`/`Part[]` cannot safely encode per-provider reasoning-replay contracts | Foundational design concern about how conversation content is serialized across providers — may affect tooling correctness. |
| [#8557](https://github.com/QwenLM/qwen-code/issues/8557) | Shrinking terminal window reprints transcript blocks in scrollback | macOS/Warp-specific UI bug producing duplicated output — 3 comments, still open. |
| [#8182](https://github.com/QwenLM/qwen-code/issues/8182) | Daemon allocates each ACP child 50% of host memory, never divided by child count | Memory-limiting bug in `getAcpMemoryArgs()` that can OOM multi-child daemon deployments. |

---

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#8529](https://github.com/QwenLM/qwen-code/pull/8529) | Resolve model modalities from API metadata | Ships a compact modality-only snapshot from models.dev with background refresh — eliminates cold-start waits for per-model capability data. |
| [#8440](https://github.com/QwenLM/qwen-code/pull/8440) | Support group pairing in channels | Adds `pairing` as a `groupPolicy` so group chats can be approved once by stable chat ID and reused by every member. |
| [#8564](https://github.com/QwenLM/qwen-code/pull/8564) | Sync upstream CUA Driver v0.17.0 | Brings runtime, Python/TS UniFFI SDKs, typed browser automation, and per-session configs up to the released 0.17.0 tag. |
| [#8510](https://github.com/QwenLM/qwen-code/pull/8510) | Scope artifact actions to owning workspace | Binds artifact previews, downloads, code-review reports, and scheduled-task actions to the workspace that produced them via immutable `workspaceCwd`/`workspaceId`. |
| [#8443](https://github.com/QwenLM/qwen-code/pull/8443) | Allow clicking to expand/collapse thought while streaming | Previously disabled during streaming; now users can interact with thinking blocks in real time. |
| [#8454](https://github.com/QwenLM/qwen-code/pull/8454) | Prepare evidence-image tooling for GitHub-triggered reviews | Installs tmux + freeze before review runs, enabling screenshot evidence capture for the `/review` workflow. |
| [#8455](https://github.com/QwenLM/qwen-code/pull/8455) | Echo resume command to main screen on exit | Fixes a VP-mode bug where the "resume this session" hint was drawn on the alternate buffer and lost on teardown. |
| [#7859](https://github.com/QwenLM/qwen-code/pull/7859) | Add native Live Voice to Web Shell | Experimental Codex-parity Live Voice onboarding on macOS; disabled by default and restricted to native-integration surfaces. |
| [#8457](https://github.com/QwenLM/qwen-code/pull/8457) | Expose channel sessions in Web Shell sidebar | Adds a Tasks/Channels source switch; Channels view shows sessions from DingTalk, Feishu, and WeCom integrations. |
| [#8425](https://github.com/QwenLM/qwen-code/pull/8425) | Share compression cache with Gemini and Vertex AI | Enables eligible same-model compression requests on Google providers to reuse the main conversation prefix via implicit caching. |

---

## 5. Feature Request Trends

- **Trustworthy agent runtime:** Deterministic execution boundaries, authorization, and observation (issue #8102) — the most-discussed security architecture direction.
- **Provider-agnostic model metadata:** Resolving modalities, limits, and capabilities from `models.dev` APIs rather than hardcoded constants (issues #8558, #8529).
- **Channel & IM integrations:** Group pairing (#8440), DingTalk interactive cards (#8515), local `gh auth` reuse (#8461), and multi-channel sidebar views (#8457).
- **Review workflow maturity:** Maven multi-module support (#8394, #8416), evidence-image capture (#8454), and reverse-dependency test scoping (#8490).
- **Web Shell feature expansion:** Live Voice (#7859), session workflow cockpit (#8561), and Git diff source views (#8467).
- **Documentation & onboarding:** Korean locale addition (#8551), README refresh with product matrix & screenshots (#8556).

---

## 6. Developer Pain Points

- **Terminal rendering regressions:** tmux flickering (#8519, #8562) and scrollback duplication on window resize (#8557) are recurring UI frustrations across Linux and macOS.
- **Daemon resource accounting gaps:** Memory limits are not divided across ACP children (#8182), and byte-level bounds are missing from multi-workspace sessions (#8051).
- **Session transcript reliability:** Turns are lost after `APIUserAbortError` (#8356) and after `--resume` can reconstruct the dangling-unsigned-thought hazard (#8535).
- **MCP/transport hangs:** `qwen mcp list` can hang forever on unresponsive SSE servers (#8550).
- **Credential sanitization bugs:** The provider warning sanitizer leaks passwords containing `@` and truncates port-bearing URLs (#8136).
- **Prompt cache invalidation:** Size-triggered microcompaction rewrites cached prefixes on consecutive turns, defeating provider prompt caching (#8452, #8463).
- **CI signal noise:** Mocked disk-full test errors surface as real ENOSPC in CI logs (#8532).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-05

## 1. Today's Highlights

The v0.9.4 release train (#5135) is live with 77 commits ahead of `main`, while a major build-performance epic (#5249) and a 10-sub-PR dependency-shrinking initiative (#5248) aim to tame the 682K-line `codewhale-tui` crate. On the runtime-API front, four PRs (#5130–#5133) complete the v0.9.4 lifecycle surface—goals, memory, MCP servers, and verifier receipts. A critical file-edit bug (#5209) silently accepting wrong parameter names is drawing attention.

## 2. Releases

**v0.9.4 integration train** — PR #5135 is open and currently 77 commits ahead of `main`, combining the 18 train commits from `6860a40eb556` with the 2026-08-01 source candidate. This supersedes #5044. Notable merges already in: Windows beginner guide (zh-CN, #5229), `ratatui` pin to 0.30.0 (#5192), Windows linker-quote fix for OpenHarmony (#5095), and reasoning-content surfacing on Alibaba Model Studio (#5233).

## 3. Hot Issues

1. **#5209 — File edit silently accepts wrong params and reports fake success** ([link](https://github.com/Hmbown/CodeWhale/issues/5209))
   The `action=edit` mode accepts non-standard parameter names like `new_str` instead of `replace` and returns a false-success string, forcing users to re-edit 3–5× per location. Community sees this as a critical correctness bug.

2. **#4991 — Compilation times and the TUI crate monolith** ([link](https://github.com/Hmbown/CodeWhale/issues/4991))
   Developers working on slash-command refactoring report severe compile-wait times, sparking a broader discussion on the monolithic crate architecture.

3. **#5244 — Unknown model IDs silently degrade to 128K context default** ([link](https://github.com/Hmbown/CodeWhale/issues/5244))
   When `context_window_for_model` doesn't recognize a model, it falls through to `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS` (128K) with no warning—a 1M-window model silently compacts. Author is Hmbown.

4. **#5239 — 1M-context model triggers compression at 128K** ([link](https://github.com/Hmbown/CodeWhale/issues/5239))
   Related to #5244: a user reports their model supports 1M context but compression fires at 128K, asking whether this can be reconfigured.

5. **#5241 — Pricing endpoint returns 503, all sessions show `unverified_live_pricing`** ([link](https://github.com/Hmbown/CodeWhale/issues/5241))
   Cost display broke after upgrading from 0.8.67 to 0.9.3; every turn across every provider shows `unverified_live_pricing`.

6. **#5005 — Filesystem path whitelist for sandbox (closed)** ([link](https://github.com/Hmbown/CodeWhale/issues/5005))
   Xcode build logs and artifacts live outside the workspace but are blocked by `sandbox_mode = "workspace-write"`. The issue is now closed, suggesting a fix was merged.

7. **#5250 — Only one API key can be saved** ([link](https://github.com/Hmbown/CodeWhale/issues/5250))
   Multi-provider users (DeepSeek + GLM) must overwrite keys each time they switch; a persistent multi-key store is requested.

8. **#5249 — Epic: v0.9.5 build-time lane** ([link](https://github.com/Hmbown/CodeWhale/issues/5249))
   The 682K-line, 620-file `codewhale-tui` crate is 86% of the workspace and recompiles as one unit. Every edit, commit, test, and release pays the full monolith tax. Author: Hmbown.

9. **#5248 — Deps: shrink the 708-package build graph** ([link](https://github.com/Hmbown/CodeWhale/issues/5248))
   708 packages, 95 with build scripts, 52 proc-macros; at least 10 deps compiled at two or three versions simultaneously. Author: Hmbown.

10. **#4029 — Planning an interface similar to Reasonix?** ([link](https://github.com/Hmbown/CodeWhale/issues/4029))
    Community interest in building a Reasonix-style UI layer around the TUI; 4 comments, no strong consensus yet.

## 4. Key PR Progress

1. **#5135 — v0.9.4 release train** ([link](https://github.com/Hmbown/CodeWhale/pull/5135))
   The integration train carrying 77 commits; the primary delivery vehicle for the current release cycle.

2. **#5240 — Surface real wait elapsed time in tool content** ([link](https://github.com/Hmbown/CodeWhale/pull/5240))
   The Bash `wait`/delta tool previously stored `duration_ms` only in metadata the model couldn't see, causing busy-polling bias. Now the elapsed time is surfaced in tool content.

3. **#5242 — Resume interrupted sub-agents from checkpoint via followup** ([link](https://github.com/Hmbown/CodeWhale/pull/5242)**
   Previously, an `interrupted_continuable` child queued a dead-letter: the checkpoint was preserved but nothing could resume it. This PR wires `agents/followup` to actually restart the run.

4. **#5234 — Keep alternate scroll off while mouse capture is active** ([link](https://github.com/Hmbown/CodeWhale/pull/5234)**
   Fixes a bug where wheel input toggled composer history instead of scrolling the transcript when mouse capture was armed alongside xterm DECSE alternate-scroll mode.

5. **#5225 — Expose file/search/git/patch/shell tools over ACP `session/prompt`** ([link](https://github.com/Hmbown/CodeWhale/pull/5225)**
   ACP-driven editors (Zed, third-party adapters) now get a full tool-capable agent instead of chat-only, by executing tool calls requested by the model within `session/prompt`.

6. **#5133 — Persistent goal-loop state and completion controls in Runtime API** ([link](https://github.com/Hmbown/CodeWhale/pull/5133)**
   Adds `GET /v1/threads/{id}/goal` so managed clients can read active-goal state and drive lifecycle transitions.

7. **#5132 — Verifier receipts and evidence beyond aggregate counter** ([link](https://github.com/Hmbown/CodeWhale/pull/5132)**
   Three new read-only endpoints under `/v1/fleet/runs/{run_id}/` expose durable task receipts, failed-task details, and retry eligibility.

8. **#5131 — Runtime API memory endpoints** ([link](https://github.com/Hmbown/CodeWhale/pull/5131)**
   New `/v1/memory` routes let clients inspect active memory, scope, provenance, and apply lifecycle controls without a second store.

9. **#5130 — Bounded MCP server configuration and lifecycle** ([link](https://github.com/Hmbown/CodeWhale/pull/5130)**
   `POST /v1/apps/mcp/servers` lets managed clients create, update, and remove MCP servers via HTTP instead of editing TOML/JSON directly.

10. **#5238 — MCP Registry discovery with Registry-first tool selection** ([link](https://github.com/Hmbown/CodeWhale/pull/5238)**
    Before falling back to `exec_shell` or custom code, the model now consults a public MCP Registry for a matching zero-environment stdio server via `registry_sync`.

## 5. Feature Request Trends

- **Multi-provider / multi-key support:** #5250 and #5005 both reflect users managing multiple AI providers and external build environments; a persistent, per-provider credential store and path allowlisting are recurring needs.
- **Build-time performance:** The v0.9.5 epic (#5249), dep-shrink (#5248), git-SHA decoupling (#5245), test-binary consolidation (#5247), and split shipping/local profiles (#5246) form a coherent push to dismantle the monolith tax on every development cycle.
- **Runtime API completeness:** PRs #5130–#5133 show the team systematically filling gaps in the managed-client surface—goals, memory, MCP config, and verifier receipts—indicating a trend toward making the TUI fully programmable via HTTP.
- **Context-window fidelity:** #5244 and #5239 point to demand for accurate, model-specific context windows with explicit fallback signaling rather than silent degradation.
- **Sub-agent resilience:** #5242 reflects interest in interruptible, checkpoint-resumable long-running agents for document review and multi-step search workflows.

## 6. Developer Pain Points

- **Compile times dominate the feedback loop.** The 682K-line `codewhale-tui` crate recompiles as a single unit on every change; local `git commit` invalidates the build-SHA stamp and forces a full rebuild of both `tui` and `cli` (#5245). Contributors and agents alike report this as the single biggest productivity drag.
- **Dependency bloat.** 708 packages with 95 build scripts and 52 proc-macros compile sequentially; 10+ dependencies exist at multiple versions simultaneously (#5248).
- **Silent correctness bugs.** The file-edit tool accepting wrong parameter names and returning fake success (#5209) and unknown models silently falling back to 128K context (#5244) both erode trust because failures are invisible to the user.
- **Pricing regressions.** The 503 on the pricing endpoint after the 0.8.67 → 0.9.3 upgrade (#5241) broke cost visibility across all providers, a high-friction regression for production users.
- **Test-link overhead.** 25 integration-test binaries each link the full dependency graph (#5247), making `cargo test` prohibitively slow.
- **Multi-key friction.** Having to overwrite the stored API key every time providers change (#5250) is a daily annoyance for power users running DeepSeek, GLM, and other models in parallel.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*