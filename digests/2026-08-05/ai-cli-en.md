# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 05:56 UTC | Tools covered: 9

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

The AI CLI tools landscape in August 2026 is defined by a shift from raw capability expansion to agent reliability, security hardening, and enterprise readiness. All major tools are investing heavily in subagent/multi-agent orchestration, MCP ecosystem integration, and cross-platform parity. Competition is increasingly differentiated by provider flexibility (BYOK, local models), session durability, and the reliability of autonomous agent loops — areas where community friction remains significant across the board.

---

## 2. Activity Comparison

| Tool | Open Issues (Digest) | PRs (Digest) | Releases (24h) | Release Cadence |
|------|---------------------|--------------|----------------|-----------------|
| **Claude Code** | 10 hot + 5 PRs | 5 key PRs | v2.1.222 (patch) | Steady; security-focused |
| **OpenAI Codex** | 5 hot + 10 PRs | 10 key PRs | 4 alpha patches | Rapid iteration (4 alphas/day) |
| **Gemini CLI** | 10 hot + 10 PRs | 10 key PRs | None (nightly failed) | Slower cadence; security patches |
| **GitHub Copilot CLI** | 7 hot + 2 PRs | 2 key PRs | v1.0.79-1, v1.0.79-2 (patches) | Conservative; breaking change |
| **Kimi Code** | 5 hot + 3 PRs | 3 key PRs | None | Early-stage; building foundations |
| **OpenCode** | 10 hot + 6 PRs | 6 key PRs | v1.18.13 | Steady; V2 migration active |
| **Pi** | 9 hot + 10 PRs | 10 key PRs | None | Feature-rich; TUI polish focus |
| **Qwen Code** | 10 hot + 10 PRs | 10 key PRs | 2 previews/nightlies | Active; ACP integration push |
| **DeepSeek TUI** | 10 hot + 11 PRs | 11 key PRs | None (v0.9.4 train in progress) | High activity; technical debt visible |

---

## 3. Shared Feature Directions

| Direction | Tools | Community Signal |
|-----------|-------|-----------------|
| **Subagent reliability** | Claude Code, Gemini CLI, OpenCode, DeepSeek TUI | Silent agent stalls, MAX_TURNS misreporting, missing final reports — across all tools this is the #1 reliability complaint |
| **MCP compatibility** | Codex, Gemini CLI, Copilot CLI, Qwen Code, DeepSeek TUI | Fragmented MCP init, silent rejections, missing `server/discover` — adoption barrier |
| **BYOK / multi-provider support** | Gemini CLI, Pi, Qwen Code, OpenCode, Kimi Code | Users want to bring their own models; SGLang/OpenAI-compatible endpoints increasingly expected |
| **Session durability & recovery** | Claude Code, OpenCode, Pi, Kimi Code | Fear of data loss (archived chats, silent truncation, session wipes on reinstall) |
| **Cross-device / remote continuity** | Kimi Code, OpenCode, Copilot CLI | "Continue sessions from any device" is a top feature request |
| **Usage/balance transparency** | OpenCode, Copilot CLI | Programmatic quota access and upfront balance feedback are unmet expectations |
| **ACP (Agent Communication Protocol)** | Qwen Code, DeepSeek TUI, Claude Code, Codex | Protocol-level standardization is emerging; JetBrains parity is a specific differentiator |
| **Security hardening** | Gemini CLI, Claude Code | Variable expansion bypass, worktree isolation, OAuth flow fixes — security is now a first-class release driver |

---

## 4. Differentiation Analysis

| Tool | Target Users | Technical Differentiator | Current Weakness |
|------|-------------|-------------------------|-----------------|
| **Claude Code** | Enterprise/Pro subscribers | Worktree isolation, hook system maturity, PreToolUse enforcement | Fable 5 credit bug on Max plan; Windows SSE streaming hang |
| **Codex** | OpenAI Pro users | Rapid alpha iteration; Rust CLI; concurrent request dispatch | Stale-message replies (#8648); MCP process leaks (9+ GB RSS) |
| **Gemini CLI** | Google Workspace / open-model users | AST-aware tools roadmap; local endpoint support; security-first patches | Agent hangs on simple tasks; subagent config overrides silently ignored |
| **Copilot CLI** | GitHub/Enterprise orgs | Org-level agent management; plugin auto-update demand | MCP init fragility; WSL2 input regression; BYOK `reasoning_content` crash |
| **Kimi Code** | Chinese-market / Moonshot users | ACP protocol-level permission switching; `AI_AGENT` env propagation | Agent reliability degrades at ~500K tokens; IME bugs on Windows |
| **OpenCode** | Open-source / self-hosted users | V2 migration (6-PR stack); Go-plan balance transparency demand (126 👍) | Quota bugs hitting paying users; migration data-loss risk |
| **Pi** | Power users / TUI enthusiasts | Mermaid rendering; configurable compaction models; LLM Gateway/Cortecs providers | Copilot Enterprise compaction broken; Windows path handling fragile |
| **Qwen Code** | Multi-provider / JetBrains users | ACP task-list parity push; provider-warning sanitizer; `--resume` fixes | Prompt-cache thrashing from microcompaction; credential sanitization leak |
| **DeepSeek TUI** | Open-source / self-hosted developers | ACP tool execution exposure; subagent checkpoint resume; MCP Registry discovery | 682K-line monolithic crate; 708-package dependency graph; compile times crushing |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Rationale |
|------|-------|-----------|
| **High maturity, steady iteration** | Claude Code, Copilot CLI | Release cadence is conservative but purposeful; security patches land fast; enterprise governance features visible |
| **Rapid iteration, high velocity** | Codex, OpenCode | Codex ships 4 alphas/day; OpenCode has a major V2 migration in flight with 6 stacked PRs; both show high engineering throughput |
| **Growing fast, reliability gaps** | Gemini CLI, Qwen Code | Strong PR volume and active feature development, but agent hangs and multi-turn bugs dominate community discourse |
| **Emerging, foundational work** | Kimi Code, DeepSeek TUI | Building core capabilities (ACP, checkpoint resume) but facing compile-time and reliability debt that will slow velocity |
| **Niche power-user focus** | Pi | TUI polish and provider diversity are strong; Windows support and enterprise compaction remain painful gaps |

---

## 6. Trend Signals

1. **Agent reliability is the new arms race.** Every tool's top community pain point is subagent hangs, silent failures, or misreported completions. Tools that solve this first — particularly checkpoint resume (DeepSeek TUI) and graceful degradation — will gain信任.

2. **MCP is the integration frontier, not a solved problem.** Across 6 of 9 tools, MCP init failures, missing discovery methods, and process leaks are blocking adoption. The ecosystem lacks a stable MCP client contract.

3. **Prompt-cache preservation is a hidden cost driver.** Qwen Code (#8452/8463) and Claude Code (#81077) both report that agent internals (microcompaction, hook context reshaping) silently invalidate provider prompt caches. This directly increases latency and cost for enterprise users.

4. **Enterprise governance is maturing alongside friction.** Org-level agent visibility, billing entity selection, and model allowlisting are the top enterprise feature requests — but implementations are fragmented (Copilot CLI enum rejections, OpenCode billing-auth bugs).

5. **Cross-platform parity remains a liability.** Windows (IME bugs, path handling, sandbox restrictions) and Linux (Wayland, systemd/Wayland browser agent, screen terminal) are systematically underserved. The tools that close this gap will capture power-user segments.

6. **Session durability is a trust compounder.** Data-loss fears (archived chats, silent truncation, session wipes) appear in 5 of 9 tools. The market signal is clear: users will not adopt autonomous agents until session recovery is guaranteed.

7. **ACP (Agent Communication Protocol) is emerging as a standard.** Qwen Code, DeepSeek TUI, Claude Code, and Codex all have active ACP work. Tools that invest in ACP compliance early will integrate more easily into multi-agent and IDE-embedded workflows.

**Bottom line for developers:** The ecosystem is transitioning from "can it code?" to "can it reliably execute long autonomous sessions without losing state, leaking resources, or breaking on a specific platform?" The tools that ship agent reliability, prompt-cache awareness, and ACP parity first will capture enterprise adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
**Data as of 2026-08-05 | Source: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

### #1 — skill-creator evaluation fixes (PRs #1298, #1099, #1323, #1261)
**Status:** Open (ongoing bugfix thread)
**Discussion:** A cluster of interrelated PRs debugging `run_eval.py` — the core evaluation harness for the skill-creator skill. The symptom is universal: every description optimization iteration reports `recall=0%`, making the loop optimize against noise. Root causes span Windows subprocess pipe failures, trigger-detection logic bugs, and test artifacts leaking into live project registries. This is the single most-debated technical problem in the repo.
- [PR #1298](https://github.com/anthropics/skills/pull/1298) · [PR #1099](https://github.com/anthropics/skills/pull/1099) · [PR #1323](https://github.com/anthropics/skills/pull/1323) · [PR #1261](https://github.com/anthropics/skills/pull/1261)

### #2 — document-typography skill (PR #514)
**Status:** Open
**Discussion:** Proposes a skill that catches typographic defects in AI-generated documents — orphans, widows, and numbering misalignment. The author notes these issues affect every document Claude produces but are rarely addressed by users.
- [PR #514](https://github.com/anthropics/skills/pull/514)

### #3 — skill-quality-analyzer & skill-security-analyzer (PR #83)
**Status:** Open
**Discussion:** Meta-skills for evaluating other Skills across five dimensions (structure, documentation, examples, resources, security). Targets the "quality bar" gap as the marketplace grows.
- [PR #83](https://github.com/anthropics/skills/pull/83)

### #4 — testing-patterns skill (PR #723)
**Status:** Open
**Discussion:** Comprehensive testing skill covering philosophy (Testing Trophy model), unit testing (AAA pattern, edge cases), and React component testing (Testing Library). Responds to repeated community requests for test-generation guidance.
- [PR #723](https://github.com/anthropics/skills/pull/723)

### #5 — ODT / DOCX / PDF document skills (PRs #486, #538, #541)
**Status:** Mixed (one new skill, two bugfixes)
**Discussion:** PR #486 adds OpenDocument Format support (ODT/ODS). PRs #538 and #541 fix case-sensitivity and tracked-change ID collisions in the existing PDF/DOCX skills. Document-format coverage is a clear demand area.
- [PR #486](https://github.com/anthropics/skills/pull/486) · [PR #538](https://github.com/anthropics/skills/pull/538) · [PR #541](https://github.com/anthropics/skills/pull/541)

### #6 — self-audit / reasoning quality gate (PR #1367)
**Status:** Open
**Discussion:** A pre-delivery audit skill that performs mechanical file verification first, then four-dimension reasoning quality scoring. Universal — works across any project, stack, or model.
- [PR #1367](https://github.com/anthropics/skills/pull/1367)

### #7 — color-expert skill (PR #1302)
**Status:** Open
**Discussion:** Covers color naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces with usage guidance (OKLCH, OKLAB, CAM16), and practical color work for design tasks.
- [PR #1302](https://github.com/anthropics/skills/pull/1302)

### #8 — frontend-design skill improvement (PR #210)
**Status:** Open
**Discussion:** Revision for clarity and actionability — ensuring every instruction is executable by Claude within a single conversation, with specific enough guidance to steer behavior without overreach.
- [PR #210](https://github.com/anthropics/skills/pull/210)

---

## 2. Community Demand Trends (from Issues)

| Trend | Signal | Key Issue |
|---|---|---|
| **Trust & security boundaries** | Highest-comment issue (#492, 43 comments) | Community skills impersonating official Anthropic namespace |
| **Org-wide skill sharing** | Issue #228 (16 comments, 8 👍) | Direct sharing links vs. manual file exchange |
| **Evaluation tooling reliability** | Issues #556, #1169, #1061 | `run_eval.py` trigger detection broken; Windows compatibility |
| **Agent governance & safety** | Issues #412, #1385 | Policy enforcement, adversarial review, reasoning quality gates |
| **Context window hygiene** | Issue #1487 | Skills eagerly injecting 156k tokens and exhausting context |
| **Compact persistent memory** | Issue #1329 | Symbolic notation for long-running agent state |
| **Enterprise integration** | Issue #1175 | SharePoint Online document handling with access control |
| **MCP exposure** | Issue #16 | Skills as MCPs for programmatic discovery |

---

## 3. High-Potential Pending Skills

These active PRs address real community pain points and have clear paths to merge:

| PR | Skill | Why it may land soon |
|---|---|---|
| [#538](https://github.com/anthropics/skills/pull/538) | PDF skill case-sensitivity fix | Single-purpose bugfix, 4-line change |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX tracked-change collision fix | Reproducible corruption bug |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows subprocess fix (1-line) | Narrow scope, high impact for Windows users |
| [#514](https://github.com/anthropics/skills/pull/514) | Document-typography skill | Clear value prop, no dependencies |
| [#723](https://github.com/anthropics/skills/pull/723) | Testing-patterns skill | Repeated community demand, well-scoped |
| [#1302](https://github.com/anthropics/skills/pull/1302) | Color-expert skill | Unique domain, actionable guidance |
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-audit quality gate | Builds on Issue #1385 proposal discussion |
| [#1479](https://github.com/anthropics/skills/pull/1479) | Plan-file-hygiene skill | Addresses lifecycle gap named by community |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable evaluation and quality-gating tooling** — not just new domain skills, but the meta-infrastructure to verify that skills trigger correctly, evaluate accurately, and don't corrupt documents or exhaust context windows. The parallel burst of `run_eval.py` bugfixes (5+ PRs on the same problem) and the security-trust issue (#492) both point to a growing ecosystem that needs stronger governance and testing foundations before further skill proliferation.

---



# Claude Code Community Digest — 2026-08-05

## 1. Today's Highlights

Claude Code v2.1.222 shipped with two critical security fixes: worktree-isolated sessions can no longer run destructive git commands against the main checkout, and PreToolUse auto-allow hooks can no longer bypass tool restrictions in background agents. Community attention is dominated by the Fable 5 credit-requirement bug on Max plans (#79337, 61 comments), which represents the most-discussed open issue this cycle, and a persistent SSE streaming hang on Windows (#33949, 38 comments) that lacks a root-cause fix after months of reports.

## 2. Releases

### v2.1.222
- **Worktree isolation hardening**: Subagents in worktree-isolated sessions can no longer run destructive git commands against the main checkout; isolation now applies to file edits and Bash across every session type.
- **PreToolUse hook enforcement**: Fixed a bug where auto-allow hooks could bypass tool restrictions in background agent tasks.

🔗 [GitHub Releases](https://github.com/anthropics/claude-code/releases)

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|-----|----------------|
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | Fable 5 prompts 'usage credits required' on Max plan | 61 | 21 | Fable 5 is now standard on Max, yet the CLI silently downgrades sessions to Opus 4.8 — directly blocks a core model feature for a large subscriber tier. |
| [#33949](https://github.com/anthropics/claude-code/issues/33949) | SSE streaming hangs indefinitely + ESC cannot fully cancel | 38 | 24 | A multi-month Windows issue with no root-cause fix; users must manually press ESC every few minutes, severely impacting agent workflows. |
| [#22931](https://github.com/anthropics/claude-code/issues/22931) | Archived Claude Cowork chats are unrecoverable | 34 | 32 | Data-loss fear; users report archived Cowork conversations disappearing entirely from the UI after archival. |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | OAuth loop drops `state` parameter on Linux/IntelliJ | 23 | 15 | Blocks login entirely for a subset of IDE users; the redirect chain silently corrupts the auth state. |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | Fatal GPU-process crash crashes the desktop app | 20 | 3 | Crashes via in-app browser tab leave the MSIX package unlaunchable until manual Repair — a reliability hit on Windows. |
| [#57853](https://github.com/anthropics/claude-code/issues/57853) | Bun 1.3.14 JSC GC segfault on AMD Ryzen 5 5500 | 18 | 0 | Segfault in the bundled JavaScript engine on a specific CPU; all platform binaries are identical, suggesting a deeper runtime issue. |
| [#48949](https://github.com/anthropics/claude-code/issues/48949) | Persistent always-on Remote Control for desktop app | 13 | 28 | CLI supports `remoteControlAtStartup: true` but the desktop app ignores it — feature parity gap for heavy Remote Control users. |
| [#74113](https://github.com/anthropics/claude-code/issues/74113) | Background agents go idle without final report | 8 | 7 | Agents silently stall and fail to deliver `SendMessage` reports; re-ping recovers them, indicating a watchdog gap in the agent lifecycle. |
| [#77651](https://github.com/anthropics/claude-code/issues/77651) | Assistant text between tool calls is silently lost | 4 | 0 | Interleaved thinking blocks on Fable 5 produce text that is neither rendered nor persisted to `.jsonl` — potential data loss in session replay. |
| [#81077](https://github.com/anthropics/claude-code/issues/81077) | PostToolUse `additionalContext` re-serialized, invalidating prompt cache | 2 | 1 | Hook-developer-facing bug: context shape changes between turns break prompt caching, directly impacting cost and latency for custom integrations. |

## 4. Key PR Progress

| # | Title | Author | Focus |
|---|-------|--------|-------|
| [#84004](https://github.com/anthropics/claude-code/pull/84004) | fix(plugin-dev): limit frontmatter parsing | RerankerGuo | Restricts YAML frontmatter parsing to the opening block only; prevents horizontal rules in Markdown bodies from corrupting settings file parsing. |
| [#84003](https://github.com/anthropics/claude-code/pull/84003) | fix(scripts): propagate top-level failures | RerankerGuo | Maintenance scripts now return failing process status instead of silently resolving; keeps logging while allowing pending output to flush. |
| [#83999](https://github.com/anthropics/claude-code/pull/83999) | fix(scripts): validate gh flag values | RerankerGuo | Rejects value-taking `gh` flags that are missing their argument (e.g., `gh issue list --limit`), closing a wrapper validation bypass. |
| [#83995](https://github.com/anthropics/claude-code/pull/83995) | fix(scripts): validate label option values | RerankerGuo | Ensures `--add-label` and `--remove-label` receive a label name before reading the next positional arg, fixing `$2: unbound variable` aborts under `set -u`. |
| [#83993](https://github.com/anthropics/claude-code/pull/83993) | fix(scripts): reject self-referential duplicates | RerankerGuo | Prevents `comment-on-duplicates.sh` from proposing an issue as a duplicate of itself, which previously posted a self-referential comment and returned success. |
| [#83992](https://github.com/anthropics/claude-code/pull/83992) | fix(plugin-dev): assert expected hook decision | RerankerGuo | Adds `--expect allow|deny|ask` to `test-hook.sh`; previously both allow and deny outcomes were treated as success, masking hooks that allow operations they should deny. |
| [#83990](https://github.com/anthropics/claude-code/pull/83990) | fix(plugin-dev): report missing jq dependency | RerankerGuo | Checks for `jq` before first use in `test-hook.sh`; previously missing `jq` was silently reported as invalid JSON input. |
| [#83890](https://github.com/anthropics/claude-code/pull/83890) | Create pylint.yml | KrypticKode007 | Adds a Pylint configuration file for Python-based hook/plugin development. |
| [#83374](https://github.com/anthropics/claude-code/pull/83374) | docs(plugin-dev): document MessageDisplay streaming semantics | iCodeCraft | Adds `MessageDisplay` to the bundled Hook Development skill documentation — triggers, event guidance, and quick-reference table were previously missing. |
| [#83738](https://github.com/anthropics/claude-code/pull/83738) | Fix symlink path expansion | KrypticKode007 | Fixes `claude install` on Linux creating broken symlinks with a literal `%h` placeholder instead of the expanded home directory path. |

## 5. Feature Request Trends

- **Remote Control persistence**: Multiple open issues (#48949, #60356) request that the desktop app honor the CLI's `remoteControlAtStartup` setting so remote sessions connect by default without per-session toggling.
- **Session recoverability**: Users want session deletion to be confirmable and reversible (#75937), and session lists to survive app reinstallation (#81907).
- **Diff base branch override in Cloud Mode** (#62391): Currently locked to the repo default branch; users working from release branches want to set an alternative diff base.
- **Batch review of suggested-task chips** (#84037): A feature request to let users review multiple suggested tasks before accepting, rather than handling them one-at-a-time.
- **Input retention across conversation switches** (#82385): VS Code extension users want their current input preserved when switching between Claude Code sessions.

## 6. Developer Pain Points

1. **Auth instability across platforms** — OAuth state-loss loops on Linux/IntelliJ (#77966) and intermittent GitHub/Notion connector failures (#84019, #84025, #84039) suggest fragmented auth plumbing that breaks inconsistently between machines and environments.
2. **Background agent reliability** — Agents stall silently without delivering final reports (#74113), and the no-progress watchdog detects stalls but has no recovery path (#75036). This is a recurring, well-documented gap that keeps getting auto-closed without resolution.
3. **SSE streaming hangs on Windows** (#33949) — Months-old, unresolved, and requiring manual ESC intervention; cited as the top productivity friction point.
4. **Hook/plugin development tooling gaps** — Several maintenance scripts had validation and error-propagation bugs (#83999, #83995, #83993, #84003), and the plugin test harness lacked dependency checks (#83990) and decision assertions (#83992), all patched in this cycle's PRs — indicating the developer tooling surface is still maturing.
5. **Session data loss fears** — Archived Cowork chats disappearing (#22931), assistant text between tool calls vanishing without persistence (#77651), and session lists wiped on reinstall (#81907) are compounding trust issues around session durability.
6. **Prompt cache invalidation from hook context reshaping** (#81077) — Hook authors using `PostToolUse.additionalContext` are seeing cache misses because the context is re-serialized in a different shape between turns, directly increasing latency and cost.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-05

## 1. Today's Highlights

The Codex team shipped four alpha releases of the Rust CLI (0.147.0-alpha.7, .6.4, .6.3, .6.1), signaling continued rapid iteration on the backend. Community attention is dominated by a persistent conversation-model bug (#8648) where Codex replies to stale messages, alongside recurring MCP process-leak issues on both Windows and macOS that can balloon RSS to 9+ GB.

---

## 2. Releases

| Version | Notes |
|---|---|
| `rust-v0.147.0-alpha.7` | Latest alpha in the 0.147 series |
| `rust-v0.147.0-alpha.6.4` | Patch-level alpha |
| `rust-v0.147.0-alpha.6.3` | Patch-level alpha |
| `rust-v0.147.0-alpha.6.1` | Patch-level alpha |

Four alpha versions landed in the last 24 hours, reflecting active development on the Rust CLI toolchain.

---

## 3. Hot Issues

1. **[OPEN] Codex replies to earlier messages instead of latest one** [#8648](https://github.com/openai/codex/issues/8648) — 81 comments · 58 👍
   The most upvoted open issue. Multi-turn conversations occasionally cause Codex to respond to stale turns, a critical UX break for Pro users on gpt-5.2-xhigh.

2. **[CLOSED] Cannot force UTF-8** [#4013](https://github.com/openai/codex/issues/4013) — 26 comments · 9 👍
   Windows extension overwrites emoji with unicode gibberish. Now closed, likely resolved.

3. **[OPEN] MCP server processes leak: per-thread processes never cleaned up (9+ GB RSS)** [#30408](https://github.com/openai/codex/issues/30408) — 23 comments · 6 👍
   Codex Desktop spawns global MCP processes per thread but never reaps them, causing unbounded memory growth over time.

4. **[CLOSED] Codex Desktop Projects sidebar shows "No chats" for older non-archived conversations** [#25500](https://github.com/openai/codex/issues/25500) — 18 comments · 2 👍
   Sidebar display bug for projects with older conversations; now closed.

5. **[CLOSED] Codex CLI timeout because of sandboxed environment** [#3557](https://github.com/openai/codex/issues/3557) — 17 comments · 5 👍
   pytest timeouts attributed to sandbox restrictions; now closed.

6. **[CLOSED] Full Computer Use support for Codex Desktop on Windows** [#19305](https://github.com/openai/codex/issues/19305) — 17 comments · 41 👍
   Highly requested feature for native Windows desktop Computer Use beyond WSL2/PowerShell; now closed.

7. **[OPEN] Unable to install after clicking Update in the Codex app** [#37002](https://github.com/openai/codex/issues/37002) — 16 comments
   Fresh report from macOS 12 users who cannot complete the app update flow.

8. **[CLOSED] Custom subagents in .codex/agents not accessible from tool-backed sessions** [#15250](https://github.com/openai/codex/issues/15250) — 16 comments · 16 👍
   Docs imply subagent accessibility from tool-backed sessions but they are not; now closed.

9. **[CLOSED] Allow per-subagent model/provider/profile selection** [#14039](https://github.com/openai/codex/issues/14039) — 15 comments · 17 👍
   Users want subagents to route through different models or providers than the parent; now closed.

10. **[OPEN] Windows unelevated sandbox rejects enforceable split writable roots, breaking apply_patch** [#35864](https://github.com/openai/codex/issues/35864) — 10 comments
    Includes a bugfix; traces apply_patch failures on Windows to a filesystem override compatibility check.

---

## 4. Key PR Progress

1. **[CLOSED] Apply permission profile updates to future turn environments** [#37031](https://github.com/openai/codex/pull/37031) — Ensures permission profiles are refreshed in each turn's environment config.

2. **[CLOSED] Enforce Agent Plugin runtime boundaries** [#37027](https://github.com/openai/codex/pull/37027) — Isolates Agent Plugin capabilities (skills, MCP data) from legacy plugins during discovery.

3. **[CLOSED] Canonicalize default tools under the `functions` namespace** [#37022](https://github.com/openai/codex/pull/37022) — Normalizes tool definitions into a single `functions` namespace for Responses Lite providers.

4. **[CLOSED] Enforce strict tool name collision errors** [#37020](https://github.com/openai/codex/pull/37020) — Adds an opt-in strict mode that fails the tool registry on duplicate tool names.

5. **[CLOSED] Support deferred custom tools in tool search** [#36998](https://github.com/openai/codex/pull/36998) — Freeform custom tools are now indexed for search and serialized as `custom` tools for deferred loading.

6. **[CLOSED] Support `includeTurns` reads for paginated threads** [#36993](https://github.com/openai/codex/pull/36993) — Reconstructs full projected turns from paginated history for clients requiring legacy full-history views.

7. **[CLOSED] Allow injecting model catalog caches** [#36992](https://github.com/openai/codex/pull/36992) — Introduces a `ModelsCache` contract so providers can supply custom cache implementations.

8. **[CLOSED] Remove legacy collaboration mode variants** [#36990](https://github.com/openai/codex/pull/36990) — Drops hidden `PairProgramming` and `Execute` variants from `ModeKind`, simplifying to `Default` and `Plan`.

9. **[CLOSED] Add opt-in concurrent exec-server request dispatch** [#36987](https://github.com/openai/codex/pull/36987) — New `--concurrent-requests` flag prevents long-running requests from blocking health checks on the same connection.

10. **[CLOSED] Enable remote compaction for Amazon Bedrock** [#36981](https://github.com/openai/codex/pull/36981) — Adds provider-owned remote compaction for Bedrock, marking it as v1-only for compaction endpoints.

---

## 5. Feature Request Trends

- **Subagent configurability**: Users repeatedly want per-subagent model/provider/profile selection (#14039, now closed) and broader control over subagent invocation.
- **Global conversation search**: A searchable index across thread titles and history (#16672) is a frequent request to improve long-term workflow navigation.
- **Model allowlisting**: Enterprises want managed, enforceable allowlists of selectable models (#28469), composable with existing config layers.
- **Computer Use on Windows** (#19305, closed): Strong community demand for native Windows desktop Computer Use parity.
- **Side-chat durability**: Persistent complaints about `/side` chat expiration (#25233) and inability to fork side chats (#20977).
- **MCP App inline rendering**: End-to-end MCP app support in the GUI (#28912, #21019) remains a desired capability.

---

## 6. Developer Pain Points

- **Memory leaks from MCP processes**: At least three open issues (#30408, #35485, #36971) describe MCP server and task-worker processes that accumulate unboundedly, consuming 5–12+ GB RSS across Windows and macOS.
- **Model routing & custom providers**: Desktop custom providers remain unusable with existing chats and the model picker (#29156), and tools cached as `has_cached_tools=false` despite startup success (#32574).
- **Browser/Computer Use plugins non-functional**: Bundled plugins appear enabled but `node_repl` JS tool is not exposed (#30026).
- **Context compaction regressions**: Long-running image-heavy threads trigger repeated auto-compaction loops (#33493), and goal compaction can resurrect completed manual steering instructions (#29811).
- **Plugin UI hidden in Desktop**: The Plugins entry is absent from the sidebar despite CLI marketplace availability (#16783).
- **Windows sandbox restrictions**: Unelevated sandbox rejects split-writable roots, breaking `apply_patch` updates and deletes (#35864).
- **Conversation state bugs**: Codex replying to earlier messages (#8648) and new extensions ignoring steer messages (#36418) erode trust in multi-turn accuracy.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-05

## 1. Today's Highlights

The Gemini CLI team is pushing hard on agent reliability and security this cycle. A critical security patch (#28691) closes a `$VAR`/`${VAR}` expansion bypass in shell substitution detection, while two major P1 bugs — the generalist agent hang (#21409) and subagent MAX_TURNS misreporting (#22323) — remain the top open concerns. On the release side, the nightly build for v0.55.0 hit a snag (#28692), and an npm dist-tag deletion failure was already addressed in #28694.

## 2. Releases

No new published release in the last 24 hours. The nightly release workflow for **v0.55.0-nightly.20260805** failed (Issue [#28692](https://github.com/google-gemini/gemini-cli/issues/28692)); a companion PR [#28694](https://github.com/google-gemini/gemini-cli/pull/28694) now handles dist-tag deletion failures on registries that forbid tag removal (e.g., Wombat Dressing Room).

## 3. Hot Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after MAX_TURNS reported as GOAL success** (12 comments, P1)
   The `codebase_investigator` subagent reports `status: "success"` with termination reason `GOAL` even when it hit its turn limit before completing analysis. This silently swallows failures and is the most-discussed agent bug this week.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs indefinitely** (8 comments, 8 👍, P1)
   The generalist agent stalls forever on simple tasks like folder creation. Users who disable sub-agents report normal behavior. High community resonance (8 upvotes) signals a widespread pain point.

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — Robust component-level evaluations** (7 comments, P1)
   A follow-up epic to the behavioral evals initiative, tracking 76 generated tests across 6 supported Gemini models. Critical for maintaining quality as the agent surface grows.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware file reads, search, and codebase mapping** (7 comments, P2)
   Investigates whether AST-aware tools can reduce turns, cut token noise, and improve method-bound reads. Directly impacts `codebase_investigator` performance.

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini does not use skills and sub-agents enough** (6 comments, P2)
   Anecdotal but widely felt: the model ignores custom skills (e.g., `gradle`, `git`) unless explicitly prompted. Highlights a gap between skill registration and actual invocation.

6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely** (5 comments, P2)
   Sessions the extraction agent dismisses as low-signal remain unprocessed and keep surfacing, creating a loop. Users with long histories report degraded performance.

7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Deterministic redaction & Auto Memory logging reduction** (4 comments, P2, 🔒 security)
   Auto Memory currently reads transcripts and sends them to the extraction model before redaction occurs. Raises privacy concerns about secrets in model context and service logs.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell commands stuck at "Waiting input"** (4 comments, 3 👍, P1)
   Simple CLI commands complete but Gemini still shows the shell as active and awaiting input. Repeatedly reported; affects automation workflows.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland** (4 comments, 1 👍, P1)
   The `browser_agent` terminates with `GOAL` on Wayland displays, blocking Linux users who don't run X11.

10. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent ignores settings.json overrides** (3 comments, P2)
    `maxTurns` and other settings in `settings.json` are silently ignored by the browser agent, undermining configuration-driven behavior control.

## 4. Key PR Progress

1. **[#28695](https://github.com/google-gemini/gemini-cli/pull/28695) — Don't abort sendStream on malformed tool arguments**
   Closes #28649. Guards against an unguarded `JSON.parse()` on model-generated string tool arguments that previously threw out of the async generator and killed the stream.

2. **[#28694](https://github.com/google-gemini/gemini-cli/pull/28694) — Handle npm dist-tag deletion failures**
   Nightly releases fail on registries like Wombat Dressing Room that return `403 Forbidden` on tag deletion. This PR makes the release pipeline resilient.

3. **[#28691](https://github.com/google-gemini/gemini-cli/pull/28691) — Block `$VAR` / `${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g)**
   Critical security fix: `detectBashSubstitution()` and `detectPowerShellSubstitution()` had an incomplete check allowing variable expansion to bypass the security gate. Includes defense-in-depth hardening of the issue-dedup workflow. Closes #28418.

4. **[#28557](https://github.com/google-gemini/gemini-cli/pull/28557) — Fix SSRF vulnerability in web-fetch.ts**
   `isBlockedHost` called the synchronous `isPrivateIp()`, which only checks literal IPs — hostnames resolving to `169.254.169.254` or other internal ranges sailed through unchecked. Switches to the existing async variant. Closes #28555.

5. **[#28689](https://github.com/google-gemini/gemini-cli/pull/28689) — Unwrap nested gaxios streaming errors**
   Adds a fallback to parse structured errors (rate limits, capacity exhaustion) wrapped inside `error.cause.message` by gaxios during streaming, improving error visibility.

6. **[#28641](https://github.com/google-gemini/gemini-cli/pull/28641) — Fix ghost-text infinite loop at narrow terminal widths**
   Fixes #19985: `getGhostTextLines` hung when `inputWidth` was narrower than a single wide codepoint (CJK/emoji). Forces advance of `splitIndex` so wrapping always terminates.

7. **[#28671](https://github.com/google-gemini/gemini-cli/pull/28671) — Resolve context corruption and quota error fallback**
   Addresses model "autocomplete" prefix-continuation behavior when tool executions are interrupted or hit quota error fallbacks. Adds defensive history hardening.

8. **[#28681](https://github.com/google-gemini/gemini-cli/pull/28681) — Support SGLang and local OpenAI-compatible endpoints**
   New feature PR extending model provider support beyond Google's API to SGLang and any OpenAI-compatible local endpoint, broadening self-hosted deployment options.

9. **[#28664](https://github.com/google-gemini/gemini-cli/pull/28664) — Reflect full MCP server config in consent prompts**
   Extension update consent previously showed only `command`/`args`/`httpUrl`. Now includes `env`, `cwd`, and `headers` so users can make informed consent decisions and the system detects config drift.

10. **[#28688](https://github.com/google-gemini/gemini-cli/pull/28688) — Dynamic Cloud Workstations OAuth redirect URI**
    Fixes OAuth 2.0 auth flows in GCP Workstations VMs that were hardcoded to redirect to `localhost`, which is unreachable from the developer's local browser.

## 5. Feature Request Trends

- **Agent reliability & observability**: Repeated requests for better subagent recovery, visible trajectories (#22598), and bug-report context (#21763). The community wants agents that fail gracefully and are debuggable.
- **AST-aware codebase tools**: Two linked issues (#22745, #22746) explore AST-based reads and mapping as a way to reduce turn count and token waste — a clear direction for efficiency improvements.
- **Multi-provider / local model support**: PR #28681 signals growing demand for SGLang and OpenAI-compatible endpoints, reflecting the self-hosted and cost-sensitive segment of the user base.
- **Auto Memory hardening**: Three issues (#26522, #26523, #26525) target the memory system's reliability and privacy, indicating users rely on it but want it to be more robust and secure.
- **Browser agent resilience**: Feature request for automatic session takeover and lock recovery (#22232), plus Wayland support (#21983), points to a demand for more robust browser automation on diverse platforms.

## 6. Developer Pain Points

- **Agent hangs and silent failures**: The generalist agent hang (#21409), shell-command stuck state (#25166), and subagent MAX_TURNS misreported as success (#22323) form a cluster of reliability issues that disrupt automated workflows.
- **Subagent invocation inconsistency**: Users report that skills and sub-agents are not used autonomously (#21968), and subagent config overrides are ignored (#22267), making it hard to predict agent behavior.
- **Security & privacy gaps in Auto Memory**: Transcripts with secrets reach the model before redaction (#26525), low-signal sessions loop indefinitely (#26522), and invalid memory patches are silently skipped (#26523).
- **Terminal rendering bugs**: Ghost-text infinite loops at narrow widths with CJK/emoji (#28641 / #19985) and terminal corruption after external editor exits (#24935) disrupt the core CLI experience.
- **Platform-specific friction**: Browser agent failures on Wayland (#21983) and OAuth redirect issues in Cloud Workstations (#28688) indicate gap coverage for non-X11 Linux and enterprise cloud environments.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-05

## 1. Today's Highlights

GitHub Copilot CLI shipped two patch releases (v1.0.79-1 and v1.0.79-2) in the last 24 hours, introducing a breaking rename of the `allowDevToolCaches` sandbox setting and UX improvements for the pinned prompt on smaller terminals. The community is actively tracking MCP compatibility regressions, WSL2 input-keyboard bugs, and session-hydration issues that affect daily workflows.

---

## 2. Releases

**v1.0.79-2** — UX polish for the pinned-prompt feature. The prompt is now pinned one row higher, reusing the tab bar's reserved row to preserve layout shape while saving a timeline row. Pinned prompts are also disabled by default on terminals under 30 rows to prevent output crowding.

**v1.0.79-1** — ⚠️ Breaking change. The sandbox setting `allowDevToolCaches` is renamed to `allowDevToolAccess` to accurately reflect that it governs dev-tool config and registries, not just caches. The old key is silently ignored; any existing `false` opt-out reverts to the default (on). [GitHub Copilot CLI Releases](https://github.com/github/copilot-cli/releases)

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| **#1504** | [Open] Add custom theme support | Users want shareable custom themes via `/theme`, extending beyond the built-in palette. | 👍 23 · 8 comments — strong interest in personalization |
| **#1697** | [Open] Session forking — branch conversations with shared context | Enables parallel multi-step workflows without losing context; widely requested pattern. | 👍 25 · 3 comments — high demand, open |
| **#4328** | [Open] Ctrl+H misinterpreted as Ctrl+Backspace under WSL2 | Input regression tied to WT_SESSION leaking; breaks a core editing shortcut for WSL2 users. | 👍 0 · 5 comments — recently reported, active triage |
| **#4370** | [Open] MCP init fails when `server/discover` returns -32602 | FastMCP servers are silently rejected because Copilot treats a non-implemented discover method as a fatal error. | 👍 1 · 2 comments — blocks MCP adoption for many users |
| **#4196** | [Open] BYOK completions fail with `reasoning_content` in streaming deltas | Any BYOK provider emitting `reasoning_content` in streaming responses triggers 5 retries and a hard failure. | 👍 0 · 2 comments — blocks BYOK workflows |
| **#4005** | [Open] "Copilot billing entity isn't selected" error persists | Enterprise users can't save memories despite everything else working; blocking for org deployments. | 👍 3 · 4 comments — ongoing enterprise pain |
| **#1285** | [Open] Organisation-level agents not showing up in CLI | Agents defined under `{org}/.github-private` are invisible to the CLI and VS Code; naming/spacing appears correct. | 👍 9 · 7 comments — org adoption blocker |
| **#2692** | [Closed] Web Search MCP error — streamable HTTP POST failure | `github-mcp-server` web search tool fails with HTTP errors; now closed but indicative of MCP stability concerns. | 👍 2 · 6 comments — closed, likely resolved |
| **#2019** | [Closed] Command to delete a session | Long-standing request for session lifecycle management via `/resume`-adjacent delete command. | 👍 13 · 2 comments — closed, feature may be implemented |
| **#1947** | [Closed] Cloud-synced sessions for cross-device continuity | Users want sessions stored in `~/.copilot/` to sync across machines; a foundational workflow enabler. | 👍 6 · 4 comments — closed, feature may be implemented |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| **#4355** | Merge | Open | Routine merge PR; no functional changes described. |
| **#4366** | ACTION REQUIRED: Fundamental security findings resolution | Open | Security remediation PR from Vault chatops bot for the `copilot-cli` app in `ci, production`. Requires review and `<UPDATE_ME>` value replacement before merge. |

*Note: Only 2 PRs were updated in the last 24 hours. The community's most impactful PRs this cycle appear to be in flight without yet landing.*

---

## 5. Feature Request Trends

- **Custom theming & accessibility** (#1504, #2532) — Users want shareable JSON themes and a persistent token-usage context bar.
- **Session management** (#1697, #1947, #2019, #1343) — Forking sessions, cloud sync, session deletion, and remote heartbeat reporting are consistently requested.
- **MCP & BYOK extensibility** (#4370, #4196, #4139) — The community is pushing for broader MCP server compatibility and custom LLM endpoint support.
- **Plugin auto-update** (#1709) — Automated plugin version management remains the #1 plugin-requested feature (👍 29).
- **Enterprise governance** (#1285, #4005) — Org-level agent visibility and billing-entity configuration are top enterprise pain points.

---

## 6. Developer Pain Points

1. **MCP server compatibility is fragile.** Issues #4370, #2692, and #4349 show that MCP initialization failures — whether from missing `server/discover`, OAuth 3LO URL elicitation (#4371), or invalid enum values in managed settings — are blocking users from adopting custom and org-managed MCP servers.

2. **BYOK streaming edge cases.** Issue #4196 reveals that providers emitting `reasoning_content` in streaming deltas cause hard failures after 5 retries, making BYOK unreliable for models that include reasoning fields.

3. **WSL2 / Windows Terminal input bugs.** Issue #4328 shows that `Ctrl+H` is incorrectly remapped to word-deletion under WSL2 due to `WT_SESSION` leaking, breaking a documented shortcut.

4. **Enterprise policy regressions.** Issue #4005 and #4349 both report that valid enterprise configurations (billing entity selection, enum values like `"enable"`) are being rejected by the CLI, suggesting schema validation is over-constraining valid org policies.

5. **Session state loss.** Issue #4334 reports that stashed prompts (`Ctrl+S`) are discarded on session switch, and #4365 notes that `sessionStart` hooks don't fire on `/new` or `/clear`, creating inconsistent automation behavior.

---

*Data sourced from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) — last 24 hours as of 2026-08-05.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026‑08‑05

## 1. Today’s Highlights
The community is actively discussing long‑context agent reliability (Issue #2586) and Windows IME character‑duplication bugs (Issue #2584), while two high‑interest feature requests—persistent memory (#1283) and remote‑session continuation (#1282)—continue to gather support. On the development side, PR #2585 introduces a universal `AI_AGENT` subprocess marker, and PR #2364 adds protocol‑level ACP permission‑mode switching.

---

## 2. Releases
*No new releases in the last 24 h.*

---

## 3. Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| #2586 | Agent reliability degrades at high context fill (~500K tokens) | Highlights a sharp drop in agent performance during long, multi‑step coding sessions, suggesting a practical context‑length threshold that needs investigation. | New (0 👍, 1 comment) |
| #1282 | Remote Control – Continue local sessions from any device | Enables workflow continuity by allowing users to attach to a local CLI session from mobile/tablet browsers—a high‑value feature for distributed development. | 24 👍, 12 comments |
| #1283 | Memory System – Persistent context across sessions | Proposes a comprehensive memory layer (auto‑managed AI notes + manual user instructions) to retain project patterns and preferences between sessions. | 0 👍, 17 comments |
| #2587 | CLI exits abnormally when advancing a session on Windows | A regression/bug that disrupts normal session progression; affects users on Windows NT 10.0.26200.0 with K3 high model. | New (0 👍, 0 comments) |
| #2584 | Thai & other IME‑based characters duplicated in prompt on Windows | A usability bug where composition‑based input methods cause character duplication, impacting non‑Latin‑script developers. | New (0 👍, 0 comments) |
| #2583 | Advertise available models & support mid‑session model switching in ACP | Addresses a gap in the Agent Communication Protocol: clients cannot discover or switch models during an active session, limiting flexibility. | New (0 👍, 0 comments) |

---

## 4. Key PR Progress
| # | Title | Description |
|---|-------|-------------|
| #2200 | `fix(shell): adapt timeouts for long commands` | Extends shell timeout automatically for commonly slow operations (git submodule cleanup, clone/fetch, package installs, builds) while keeping the 60 s default for normal commands. |
| #2585 | `feat(cli): set AI_AGENT for subprocesses` | Exposes `AI_AGENT=kimi` to subprocesses launched from both pip/uv and standalone binaries, preserving an explicit marker when supplied by a wrapper or orchestrator. |
| #2364 | `feat(acp): support permission mode switching` | Adds protocol‑level ACP permission‑mode switching for Kimi sessions, advertising `default` and other modes at the protocol level (depends on PR #2363). |

---

## 5. Feature Request Trends
- **Persistent session memory** – Users want the CLI to remember project context, patterns, and preferences across restarts (Issue #1283).
- **Cross‑device session continuity** – A strong demand for remote‑control capabilities that let developers pick up a local session from any browser‑based client (Issue #1282).
- **Dynamic model management in ACP** – Clients need to discover available models and switch models mid‑session without reconnecting (Issue #2583).
- **Robust timeout & environment handling** – Requests for adaptive timeouts for long‑running shell commands and reliable propagation of agent‑identifying environment variables (PRs #2200, #2585).

---

## 6. Developer Pain Points
- **Agent reliability at scale** – Performance degrades noticeably once session context exceeds ~500K tokens, leading to repetitive loops and instruction drift (Issue #2586).
- **Windows IME integration** – Input‑method‑based characters are duplicated in the prompt, affecting Thai and other composition‑based languages (Issue #2584).
- **Session stability on Windows** – Abnormal exits during normal session advancement disrupt workflow (Issue #2587).
- **Lack of cross‑device continuity** – Users cannot easily continue a local CLI session from a phone or tablet, forcing context loss when stepping away from the primary machine (Issue #1282).
- **Limited ACP extensibility** – ACP clients currently cannot query available models or switch models mid‑session, reducing flexibility in multi‑model workflows (Issue #2583).

---

*All items reference the public GitHub repository at `https://github.com/MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-05

---

## 1. Today's Highlights

OpenCode v1.18.13 shipped with RTL layout fixes for the desktop app and improved GitHub PR review context in the TUI. The community is buzzing around usage-balance transparency — a long-standing feature request for a Go plan API endpoint (#16017) has climbed to 126 upvotes, and multiple users reported "Insufficient Balance" errors despite having quota remaining. Meanwhile, the V2 migration is advancing in earnest with six stacked PRs from @Brendonovich rewriting session projections and provider contracts.

---

## 2. Releases

### v1.18.13
- **[TUI]** GitHub pull request reviews now include the PR number and URL in context.
- **[Desktop]** Fixed multiple right-to-left layout issues across tabs, drawers, resizing, and titlebar interactions; unified directional icon behavior for RTL.
- **Link:** <https://github.com/anomalyco/opencode/releases/tag/v1.18.13>

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | Add Go plan usage/balance API endpoint | Users have no programmatic way to check rolling/weekly/monthly usage limits from TUI or CLI — only the web console works. | 126 👍 — the most upvoted open issue in the dataset, signaling strong demand. |
| [#27593](https://github.com/anomalyco/opencode/issues/27593) | 402 Insufficient Balance with ds4-flash | Users with 98% session usage remaining hit balance errors on specific models (ds4-flash) despite a healthy dashboard showing spend. | 13 👍 — suggests a pricing/quotas bug affecting real users. |
| [#30950](https://github.com/anomalyco/opencode/issues/30950) | Insufficient balance on paid models (GLM 5.1, Kimi v2.6) | Same error pattern as #27593 but across multiple non-free models, indicating a systemic quota-valuation issue rather than a single-model bug. | Active discussion — directly impacts paying subscribers. |
| [#28590](https://github.com/anomalyco/opencode/issues/28590) | writeOsc52 broken under GNU screen | The clipboard utility incorrectly wraps screen in the tmux-specific `\x1bPtmux;` prefix, breaking copy-paste for screen users. | 2 👍 — niche but painful for terminal power users. |
| [#40243](https://github.com/anomalyco/opencode/issues/40243) | ChatGPT OAuth rejects GPT-5.6 for EU-resident workspaces | EU residency enforcement in OAuth differs from the official Codex CLI behavior, blocking access for a growing regional user base. | 4 👍 — regulatory-compliance-adjacent concern. |
| [#40588](https://github.com/anomalyco/opencode/issues/40588) | Free tier cuts off mid-task with no warning | Free-tier users get silently killed mid-generation with no remaining-allowance feedback. Requests a countdown or explicit limit indicator. | Raised by a Home Assistant addon user — highlights the non-developer audience gap. |
| [#40579](https://github.com/anomalyco/opencode/issues/40579) | "Nothing works" after installing skills | New Windows 11 user reports total breakage after skill installation, even after removal. | Early stage — needs triage. |
| [#40571](https://github.com/anomalyco/opencode/issues/40571) | Go subscription active but never works | User shows "Free usage exceeded" despite active subscription and visible receipt; Config button is unresponsive. | Potential billing-auth pipeline bug. |
| [#22233](https://github.com/anomalyco/opencode/issues/22233) | Improve subagent runtime visibility | Users can't tell which subagent is running, what it's doing, or how long it's been active — only vague "wait for xxx" messages. | Relevant as multi-agent workflows become common. |
| [#30963](https://github.com/anomalyco/opencode/issues/30963) | Migration 20260604172448 deletes entire event log | A merged PR unconditionally ran `DELETE FROM event` and `UPDATE session SET workspace_id = NULL`, affecting all users on upgrade. | 1 👍 — data-loss concern that drew immediate community attention. |

---

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#40378](https://github.com/anomalyco/opencode/pull/40378) | Migrate supported V2 APIs | Session transport, catalog, location, file, project-copy, workspace ops, PTY lifecycle, provider credentials, and MCP integrations all migrated to V2. **Stack 3 of 6.** |
| [#40382](https://github.com/anomalyco/opencode/pull/40382) | Remove V1 compatibility | Strips V1 protocol detection, compatibility adapters, legacy client surfaces, and the `@opencode-ai/sdk` dependency. App traffic now routes exclusively through V2. |
| [#40381](https://github.com/anomalyco/opencode/pull/40381) | Gate unsupported V2 capabilities | Hides or disables controls for APIs unavailable on V2 servers (config, custom providers, sharing, archive/reset, Git init, shells, LSP, todos). |
| [#40376](https://github.com/anomalyco/opencode/pull/40376) | Reconcile V2 session projections | Marks message pages complete when cursor is exhausted, prunes stale projected sources, and aligns fixture tool identity with V2. |
| [#40375](https://github.com/anomalyco/opencode/pull/40375) | Own rendering contracts | Defines App-owned message and part projection contracts; routes rendering type imports through the App boundary. |
| [#40590](https://github.com/anomalyco/opencode/pull/40590) | Support GITHUB_TOKEN auth in install script | Install script currently makes three anonymous GitHub requests; this PR adds GITHUB_TOKEN support to avoid rate limiting. Closes #40589. |
| [#40576](https://github.com/anomalyco/opencode/pull/40576) | Continue interrupted responses | Preserves output-bearing attempts when a provider response ends unexpectedly, appends a hidden synthetic "continue" message, and writes continuation markers. |
| [#40581](https://github.com/anomalyco/opencode/pull/40581) | Report model in `run --format json` events | Fixes #40544 — `step_start`/`step_finish` events now include model attribution so headless consumers can track tokens and cost per model. |
| [#40538](https://github.com/anomalyco/opencode/pull/40538) | Make xAI OAuth device-only | Replaces xAI loopback OAuth with RFC 8628 device authentication, exposing a single SuperGrok subscription method that works both locally and remotely. |
| [#40566](https://github.com/anomalyco/opencode/pull/40566) | Preserve compaction tail media | Raises default retained compaction context from 8K to 15K tokens and preserves image, audio, video, and PDF media in the retained tail. |

---

## 5. Feature Request Trends

- **Usage transparency for Go subscribers:** The #1 recurring demand. Users want programmatic access to rolling/weekly/monthly quota windows (issues #16017, #40584, #40588). The current gap — only the web console exposes this — is a significant UX friction point.
- **Subagent and multi-agent visibility:** As Opencode embraces multi-agent workflows, users are requesting better runtime telemetry (issue #22233) and clearer task-handoff mechanics (PR #40578 adds a `/handoff` command).
- **Cross-environment parity:** Issues with WSL output (#20234), GNU screen clipboard (#28590), and Windows desktop behavior (#40571, #40579) reflect a persistent theme: Opencode's desktop/TUI experience lags behind the web UI in feature coverage and stability across platforms.
- **Model catalog hygiene:** Request to remove retired DeepSeek models from `/models` (issue #40577) and fix the nemotron-3-ultra-free catalog mismatch (issue #30951) show users want the model list to stay in sync with provider realities.

---

## 6. Developer Pain Points

1. **Quota/balance bugs affecting paying users:** Multiple independent reports (#27593, #30950, #40571) of "Insufficient Balance" errors when users have active subscriptions and remaining quota. This is the highest-severity pain point — it directly impacts revenue and trust.
2. **V1→V2 migration complexity:** The six-PR stack from @Brendonovich (#40375–#40382) is substantial and touches core rendering, session, and provider contracts. Maintainers are clearly feeling the weight of legacy compatibility; the cleanup is necessary but risky.
3. **Desktop performance regressions:** Issue #40572 reports renderer freezes (~3s) caused by a Solid.js reactive dependency cycle amplified by ResizeObserver thrashing and API rate-limit retry storms — a classic electro-nutrition problem that's hard to reproduce but hurts perceived quality.
4. **Data-loss risk from migrations:** Issue #30963 highlights that a merged migration unconditionally deleted event logs. Any future DB migrations need safeguards or rolling-window design.
5. **New-user onboarding friction:** Issues #40579 and #40559 show that first-time users (especially on Windows) are hitting hard failures during setup and update flows, with unclear error messages.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-05

## 1. Today's Highlights

The most active discussion this cycle centers on a cluster of **Compaction + GitHub Copilot Enterprise** bugs (Issues #6768, #7413, #7579), all reporting 421/Misdirected Request errors when summarizing context — a significant friction point for enterprise users. On the feature side, the team continues to ship provider integrations (Cortecs, LLM Gateway) and TUI reliability improvements (Mermaid rendering, configurable compaction models, scrollable fullscreen diffs).

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Status | Comments | 👍 |
|---|-------|--------|----------|----|
| [#6768](https://github.com/earendil-works/pi/issues/6768) | Compaction using Copilot Enterprise not possible | ✅ Closed | 19 | 18 |
| [#7547](https://github.com/earendil-works/pi/issues/7547) | [Windows] sink-thread — how do you use Pi on Windows? | 🟢 Open | 13 | 0 |
| [#7064](https://github.com/earendil-works/pi/issues/7064) | [bug] WSL absolute Windows paths are mishandled | 🟢 Open | 12 | 1 |
| [#5023](https://github.com/earendil-works/pi/issues/5023) | [bug] terminal scrolls to beginning without reason | ✅ Closed | 11 | 1 |
| [#7465](https://github.com/earendil-works/pi/issues/7465) | Add payload size to iTerm2 inline images | 🟢 Open | 7 | 0 |
| [#7413](https://github.com/earendil-works/pi/issues/7413) | Compaction fails on GitHub Copilot GHE — "unknown stamp" error | 🟢 Open | 6 | 0 |
| [#7244](https://github.com/earendil-works/pi/issues/7244) | Enhance `version` to show runtime (bun|node|deno) | 🟢 Open | 6 | 0 |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | Configurable thinking level/model for compaction | 🟢 Open | 6 | 0 |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | New default PI_* guideline over-encourages unnecessary bash calls | ✅ Closed | 6 | 1 |
| [#6817](https://github.com/earendil-works/pi/issues/6817) | [bug] find returns no results for path patterns on Windows | 🟢 Open | 5 | 0 |

**Why they matter:**

- **#6768** — The highest-engagement issue this cycle. Copilot Enterprise compaction returns `421 Misdirected Request` during turn-prefix summarization, effectively breaking long sessions for enterprise users. 18 👍 signals strong demand for a fix.
- **#7547** — A community diagnostic thread on Windows support; acknowledges the fragmentation of Pi runtimes on Windows and seeks consensus on where to focus engineering effort.
- **#7064** — WSL path-handling bug causes the agent to fall back to full writes instead of `read`/`write`/`edit` tools when paths contain Windows-style separators. Directly impacts developer workflow on hybrid setups.
- **#7413 / #7579** — Two additional Copilot Enterprise compaction failures with distinct error signatures (`unknown stamp` vs `421 Misdirected Request`), suggesting a systemic issue in how compaction routes requests vs. normal chat turns.
- **#7465** — Required by `@xterm/addon-image@0.9.0`, which silently rejects images without a `size` param. Affects terminal image rendering in iTerm2.
- **#7553** — Requests independent thinking-budget control for compaction, currently forced to reuse the session's thinking level — a problem for users running auto-compaction on reasoning models.

---

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#7632](https://github.com/earendil-works/pi/pull/7632) | fix: retry transient management HTTP requests | 🟢 Open | Retries idempotent management requests (pi.dev, GH releases, tools). Fixes #6675. No per-attempt timeout to avoid slowing slower networks. |
| [#7624](https://github.com/earendil-works/pi/pull/7624) | feat(coding-agent): render Mermaid diagrams | 🟢 Open | Closes #7623. Renders Mermaid diagrams in markdown using the `grok-mermaid` library. |
| [#7612](https://github.com/earendil-works/pi/pull/7612) | fix(tui): add size param to iTerm2 image encoder | 🟢 Open | Includes decoded byte count in OSC 1337 sequences, satisfying `@xterm/addon-image@0.9.0`. Closes #7465. |
| [#7602](https://github.com/earendil-works/pi/pull/7602) | feat(coding-agent): configurable summarization models | 🟢 Open | Adds configurable models and thinking levels for compaction and branch summaries. Closes #7553. |
| [#7619](https://github.com/earendil-works/pi/pull/7619) | feat(coding-agent): resume failed turn by selecting it in /tree | 🟢 Open | Selecting a failed assistant entry in `/tree` now retries the turn in-place instead of landing on a dead end. Closes #7609. |
| [#7597](https://github.com/earendil-works/pi/pull/7597) | fix(coding-agent): scrollable extension selector in fullscreen mode | 🟢 Open | Wraps diff title in `ScrollView` and pins yes/no actions so large diffs remain reviewable. Addresses #7616. |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | feat(ai): add LLM Gateway and DevPass providers | 🟢 Open | Adds LLM Gateway (OpenRouter-style router) as built-in `openai-completions` providers. Replaces #7480. |
| [#7571](https://github.com/earendil-works/pi/pull/7571) | feat(ai): add built-in Cortecs provider support | ✅ Closed | Adds Cortecs (European AI router) via models.dev backend. |
| [#7621](https://github.com/earendil-works/pi/pull/7621) | feat(rpc): expose argument completions via `get_argument_completions` | ✅ Closed | New RPC command lets embedded clients (e.g., pi-livecraft) surface slash-command subcommand completions. |
| [#7614](https://github.com/earendil-works/pi/pull/7614) | feat: remove legacy server implementation | ✅ Closed | Removes experimental legacy child-process server, `server` executable, and `@earendil-works/pi-server/legacy` export. |

---

## 5. Feature Request Trends

1. **Compaction & context management** — The dominant theme: configurable summarization models/thinking levels (#7553), context window size selection (#5064), and reliable compaction across enterprise providers (#6768, #7413, #7579).
2. **Provider diversity** — New built-in providers for Cortecs (#7571), LLM Gateway (#7610), and Qwen Token Plan Individual (#7631) show sustained demand for OpenRouter-style aggregation and regional providers.
3. **TUI/UX polish** — Mermaid diagram rendering (#7623/#7624), scrollable fullscreen diffs (#7597), iTerm2 image size support (#7465/#7612), and fix for persistent red error lines after successful retries (#7613).
4. **RPC & embedded clients** — Argument completions (#7621) and provider auth exposure via RPC (#7590) indicate growing interest in headless/embedded Pi usage.
5. **Windows parity** — Ongoing requests for Windows-first support (runtime detection #7244, path handling #7064, find tool #6817, skill loading #7427) suggest Windows is a second-class platform worth closing the gap on.

---

## 6. Developer Pain Points

- **Copilot Enterprise compaction is broken.** Three separate issues (#6768, #7413, #7579) report that compaction fails with 421 or "unknown stamp" errors while normal chat works fine. The common thread is that `ModelRuntime.prepareRequest()` rewrites `baseUrl` for summarization in a way enterprise seats don't accept.
- **Windows path and tool failures.** WSL path mishandling (#7064), `find` tool rejecting path-separator patterns (#6817), and `loadSkills` throwing `RangeError` from the `ignore` lib on recursive Windows dirs (#7427) all point to fragile Windows path normalization.
- **TUI crash on wide content.** Custom dialog lines exceeding terminal width cause an uncaught exception and process crash (#7528), rather than graceful truncation.
- **Persistent error artifacts.** Successful retries after transient failures leave red `Error: fetch failed` lines in the chat transcript (#7613), misleading users about request outcome.
- **Runtime detection gaps.** The `version` command doesn't report whether Pi is running under bun, node, or deno (#7244), forcing users to manually disclose this in bug reports.
- **node:sqlite missing in release binaries.** Extensions using `node:sqlite` fail to load in shipped binaries (#7594), breaking `pi-total-recall` and similar plugins.
- **Fullscreen keybinding conflicts.** Home/End/PageUp/PageDown are consumed by the transcript viewport instead of the editor even when the input is focused (#7574).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-05

## 1. Today's Highlights

Qwen Code released two preview/nightly builds (v0.21.6-preview.0 and v0.21.5-nightly) adding alpha readiness diagnostics for the browser extension and documentation for headless Goal workflows. The community is actively discussing trust boundaries for the agent runtime, bounded multi-workspace daemon resource usage, and ACP integration gaps in JetBrains IDEs. A cluster of issues highlights recurring prompt-cache invalidation from size-triggered microcompaction and a `--resume` round-trip that re-introduces the dangling-unsigned-thought hazard.

## 2. Releases

- **v0.21.6-preview.0** ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-preview.0))
- **v0.21.5-nightly.20260805.32e274157** ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5-nightly.20260805.32e274157))

Both builds include:
- `feat(browser-ext): add alpha readiness diagnostics` ([PR #6739](https://github.com/QwenLM/qwen-code/pull/6739))
- `docs: document headless Goal workflows` ([PR #6739](https://github.com/QwenLM/qwen-code/pull/6739))

## 3. Hot Issues

1. **[8102] Deterministic tool-execution boundaries for a trustworthy agent runtime** — Proposes keeping the LLM outside the trust boundary and deterministically constraining/authorizing agent actions. 17 comments; highest discussion volume, signaling strong community interest in safety guarantees.

2. **[8519] Severe screen flickering in tmux** — Users report ~1–2 flickers per second when running Qwen Code inside tmux. Now closed; likely resolved by a rendering fix.

3. **[8051] Bound multi-workspace daemon resource usage** — Tracks bytes held by request bodies, WebSocket assembly, and other unbounded memory rather than just session counts. 9 comments; critical for production `qwen serve` deployments.

4. **[8136] Provider warning sanitizer leaks passwords containing `@`** — The `sanitizeProviderWarningSegment` function misidentifies `@` as a credential boundary, causing information leaks in `/status` payloads. 8 comments; security-relevant fix pending.

5. **[8550] `qwen mcp list` hangs on SSE servers without `endpoint` events** — Slow or non-compliant SSE servers cause indefinite hangs instead of a timeout. Open and waiting for agent review.

6. **[8356] Session transcript not written after `APIUserAbortError`** — After a user abort, subsequent turns fail to persist to the local session transcript, breaking continuity in ACP/Web bridge sessions. 5 comments.

7. **[8412] Recover complete turns after live journal truncation** — When the daemon's live journal exceeds 10k events / 8 MiB, truncated history is marked but not fully recoverable. Closed; fix landed.

8. **[8452 / 8463] Size-triggered microcompaction defeats prompt caching** — Once tool-result output crosses the 500k-character threshold, microcompaction rewrites cached conversation prefixes on every turn, eliminating provider prompt-cache hits. Two linked issues; 3+3 comments. Core perf concern.

9. **[8535] `--resume` reconstructs the dangling-unsigned-thought hazard** — The `--resume` / `--continue` paths bypass the fix from PR #8260, re-introducing a known correctness bug for signed thought blocks. Needs discussion.

10. **[8544] Task list not rendered in JetBrains ACP** — Multi-step task lists (todo/plan) visible in Claude Code and Codex do not appear when using Qwen Code through JetBrains AI Assistant. Open; ACP integration gap.

## 4. Key PR Progress

1. **[8548] Build review CLI bundle once per scan** — Closes a perf hole where each autofix leg re-built the CLI bundle independently. Closed; merged.

2. **[8524] Reuse base URL sanitizer for provider warnings** — Fixes the credential-leak bug from #8136 by reusing the existing authority-aware sanitizer. Open; ready for review.

3. **[8423] Observe daemon and child memory against real denominators** — Stacked PR that establishes accurate RSS and heap accounting across multi-workspace daemons, addressing #8051 and #8182.

4. **[8553] Bound backward transcript pages in long single-turn sessions** — Caps pagination expansion so transcript pages don't grow unboundedly when aligning to turn boundaries.

5. **[8368] Add Kimi and Xiaomi MiMo providers** — First-class presets for `/auth` → Third-party Providers, including Coding Plan and regional API key options.

6. **[8529] Resolve model modalities from API metadata** — Pulls modality info from models.dev at runtime with a local disk cache, avoiding cold-start stalls.

7. **[8213] Establish workspace runtime ownership** — Defines `WorkspaceRuntime` as the ownership boundary for ACP child lifecycle, with five-state snapshots and bounded startup/teardown.

8. **[8440] Support group pairing in channels** — Allows a group chat to be approved once by its stable chat ID and reused by every member.

9. **[8461] Support local `gh` authentication** — Lets GitHub channels reuse the daemon host's existing `gh auth login` credential when no PAT is configured.

10. **[8274] Fork from any conversation** — Enables branching sessions from any visible message rather than only the latest active state, addressing unsafe branch-point assumptions.

## 5. Feature Request Trends

- **Trustworthy runtime boundaries** — Repeated calls for deterministic sandboxing, authorization, and observability of agent actions (#8102, #8533).
- **ACP integration parity** — JetBrains task-list rendering (#8544), reasoning-effort exposure (#8514), context-usage updates (#8513), and DingTalk interactive cards (#8515) all point to a push for ACP feature parity with Claude Code / Codex.
- **Model metadata from API** — Moving from hard-coded model defaults to provider-fetched capabilities (#8558, #8529).
- **Multi-workspace daemon resource bounding** — Beyond count limits, users want byte-level and per-child memory guarantees (#8051, #8423).
- **Extension hook support** — Qwen Code should surface and execute hooks defined by extensions like Ponytail (#8539).
- **Korean localization** — Request to add 한국어 to the README language bar and docs site (#8551).

## 6. Developer Pain Points

- **Prompt-cache thrashing** — Size-triggered microcompaction repeatedly rewrites cached prefixes, destroying provider prompt-cache hit rates in long sessions (#8452, #8463).
- **Dangling-unsigned-thought regression** — `--resume` and `--continue` reintroduce a hazard already fixed for live sessions (#8535); the recovery path needs alignment with `coalesceRecoveryPairs`.
- **Credential sanitization bugs** — The provider-warning sanitizer mishandles `@` in passwords and truncates port-containing messages, risking secret leaks (#8136).
- **ACP session continuity** — After user aborts (`APIUserAbortError`), subsequent turns drop from the local transcript (#8356); ACP clients also lack task-list and usage-update rendering (#8544, #8513).
- **MCP SSE hang** — `qwen mcp list` can block indefinitely on non-compliant SSE servers that omit the legacy `endpoint` event (#8550).
- **Memory over-allocation in daemon** — Each ACP child receives a V8 heap ceiling based on host memory rather than dividing by child count (#8182).
- **Terminal rendering artifacts** — Shrinking the terminal on macOS duplicates scrollback output (#8557); tmux flickering was a similar pain point that has since closed (#8519).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-05

## 1. Today's Highlights

The v0.9.4 integration train continues to advance (#5135), while the maintainer launched a coordinated set of build-performance epics (#5249, #5248, #5245, #5247, #5246) targeting the 708-package dependency graph and monolithic `codewhale-tui` crate. On the feature front, PRs landed for ACP tool exposure (#5225), MCP Registry discovery (#5238), and sub-agent checkpoint resume (#5242), while a critical bug in the File tool's `action=edit` mode (#5209) remains open.

## 2. Releases

**No new releases in the last 24 hours.** The v0.9.4 integration train (#5135) remains the active release vehicle, currently 77 commits ahead of `main`.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#5209](https://github.com/Hmbown/CodeWhale/issues/5209) | File `action=edit` silently accepts wrong parameters and reports fake success | Users must re-edit locations 3–5× due to false-positive responses when passing `new_str` instead of `replace`. A correctness bug with direct workflow impact. | 3 comments, 0 👍 |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | Unknown model IDs silently degrade to 128K legacy context default | A 1M-window model compacts at 128K without any warning, silently degrading quality. Maintainer-reported residual bug. | 1 comment, 0 👍 |
| [#5239](https://github.com/Hmbown/CodeWhale/issues/5239) | Model supports 1M context but compression triggers at 128K | Directly related to #5244 — users expect full context-window utilization. | 1 comment, 0 👍 |
| [#5241](https://github.com/Hmbown/CodeWhale/issues/5241) | Pricing endpoint returns 503 — all sessions show `unverified_live_pricing` | Cost display broke between v0.8.67 and v0.9.3 across all providers. Regression affecting transparency. | 1 comment, 0 👍 |
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | Only one API key can be saved | Multi-provider users (DeepSeek + GLM, etc.) must re-obtain keys on every model switch. High-frequency pain point. | 1 comment, 0 👍 |
| [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) | Filesystem path whitelist for sandbox access to external logs | Xcode/DerivedData artifacts live outside the workspace; current `workspace-write` sandbox blocks them. Closed — likely addressed. | 2 comments, 0 👍 |
| [#4991](https://github.com/Hmbown/CodeWhale/issues/4991) | Compilation times and the TUI crate monolith | Developer working on slash-command refactoring reports painful compile waits; opens community discussion. | 4 comments, 0 👍 |
| [#4029](https://github.com/Hmbown/CodeWhale/issues/4029) | Planning an interface similar to Reasonix? | Community member exploring UI direction; reflects interest in reasoning/plan-style interfaces. | 4 comments, 0 👍 |
| [#5249](https://github.com/Hmbown/CodeWhale/issues/5249) | Epic: v0.9.5 build-time lane | 682K-line monolithic crate recompiles as one unit on every edit/commit/test. Blockers for contributor velocity. | 0 comments, 0 👍 |
| [#5248](https://github.com/Hmbown/CodeWhale/issues/5248) | Deps: shrink the 708-package build graph | 95 build scripts + 52 proc-macro crates serialized on clean build; 10+ deps compiled at multiple versions. Root-cause of #5249. | 0 comments, 0 👍 |

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | v0.9.4 release train | Open | Integration train superseding #5044; 77 commits ahead of `main` including 18 train commits. |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | Expose file/search/git/patch/shell tools over ACP | Open | `session/prompt` previously only streamed text; now executes tool calls, enabling Zed and third-party ACP bridges to perform actual code edits. |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | Resume interrupted sub-agents from checkpoint | Open | `agents/followup` on `interrupted_continuable` children previously queued a dead-letter; now restores from checkpoint so long tasks can resume mid-way. |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | Surface real wait elapsed time in tool content | Open | Bash `wait`/delta now exposes elapsed duration in tool content (not just metadata), preventing model bias toward busy-polling short waits. |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | Keep alternate scroll off during mouse capture | Open | Fixes wheel/trackpad scrolling being hijacked by composer input history when mouse capture is active — a long-standing UX bug. |
| [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) | MCP Registry discovery with Registry-first selection | Open | Before falling back to `exec_shell` or custom code, the model now consults the public MCP Registry for a matching zero-environment stdio server. |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | Runtime API: persistent goal-loop state & controls | Open | New `GET /v1/threads/{id}/goal` endpoint lets managed clients read active-goal state and drive lifecycle transitions. |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | Runtime API: memory endpoints | Open | `GET /v1/memory` routes let clients inspect active memory scope/provenance and apply lifecycle controls without a secondary store. |
| [#5229](https://github.com/Hmbown/CodeWhale/pull/5229) | Docs: Windows beginner guide (zh-CN) | Open | New Chinese-language Windows guide covering install, config, model switching, modes, permissions, and FAQ — validated on Windows 10. |
| [#5192](https://github.com/Hmbown/CodeWhale/pull/5192) | Pin ratatui to 0.30.0 | **Closed** | Fixes a race between `Terminal::clear()` CPR queries and the TUI event loop introduced in ratatui-core 0.1.1+. |

## 5. Feature Request Trends

1. **Multi-provider key management** — Users running DeepSeek, GLM, xAI, and others simultaneously need per-provider key storage, not a single overwrite slot (#5250).
2. **Sandbox path allowlisting** — Build-tool artifacts (Xcode DerivedData, external logs) need whitelisted access beyond the workspace root (#5005, now closed).
3. **Full context-window utilization** — Models with 1M-token contexts are being silently capped at 128K; users want the window to match the model (#5239, #5244).
4. **ACP tool execution** — External editors driving CodeWhale over ACP need more than text streaming; they need tool calls (edit, search, shell) to actually execute (#5225).
5. **Build-time performance** — The monolithic crate and 708-package dependency graph are seen as blocking contributor velocity; multiple epic-level performance PRs are queued (#5249, #5248).

## 6. Developer Pain Points

- **Compile times are crushing development velocity.** The `codewhale-tui` crate is 682K lines across 620 files and recompiles as a single unit. Every local `git commit` forces a full rebuild because the embedded SHA stamp watches the branch ref (#4991, #5249, #5245).
- **Dependency bloat.** 708 packages with 95 build scripts and 52 proc-macro crates, at least 10 compiled at 2–3 versions simultaneously. This drives the slow builds and large link times for the 25 standalone integration-test binaries (#5248, #5247).
- **Fat LTO on every pre-push build.** The `[profile.release]` settings target shipping, but every contributor and agent pays full fat-LTO on local `cargo build --release` before pushing (#5246).
- **ratatui upgrade instability.** The 0.1.1+ `ratatui-core` introduced a CPR-race that required an emergency pin to 0.30.0 (#5192), signaling fragility in the TUI rendering stack.
- **File tool parameter validation is missing.** The `action=edit` mode silently accepts wrong parameter names and returns fake success, causing users to waste multiple edit attempts (#5209).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*