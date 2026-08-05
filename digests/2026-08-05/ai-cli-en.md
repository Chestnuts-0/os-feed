# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 07:33 UTC | Tools covered: 9

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



# Cross-Tool Comparison Report: AI CLI Ecosystem
**Date:** 2026-08-05 | **Analyst:** Agnes-2.0-Flash

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem in mid-2026 has matured into a multi-vendor landscape where competing frameworks converge on similar architectural challenges — session durability, subagent reliability, MCP integration, and reasoning-model support — while diverging in platform strategy (Windows/Linux parity vs. macOS-first) and trust models (LLM-outside-trust-boundary vs. full-agent autonomy). Security hardening has become a primary focus across all tools, with multiple critical CVE-style patches landing this period, while enterprise adoption friction (billing, entitlements, org-level visibility) remains a persistent drag on user satisfaction.

---

## 2. Activity Comparison

| Tool | Hot Issues (Last 24h) | New/Closed PRs | Release Activity | Release Cadence |
|---|---|---|---|---|
| **Claude Code** | 10 | 10 open (7 hardening PRs from 1 contributor) | v2.1.222 shipped | Steady; security-hardening cycle |
| **OpenAI Codex** | 10 | 9 closed | 5 alpha patches (0.147.0-alpha.6.1→.7) | Rapid iteration; pre-stable |
| **Gemini CLI** | 11 | 9 (2 security-critical) | None | Moderate; security-focused day |
| **GitHub Copilot CLI** | 11 | 2 (both infra/maintenance) | v1.0.79-2 (breaking rename in -1) | Slow; maintenance mode |
| **Kimi Code CLI** | 4 | 2 | None | Early-stage; feature-construction |
| **OpenCode** | 10 | 10 (4 closed) | v1.18.13 shipped | Active; RTL + reliability focus |
| **Pi** | 10 | 10 (2 closed) | None | Steady; reasoning-model tuning |
| **Qwen Code** | 10 | 11 (mixed) | v0.21.6-preview.0 + nightly | Active; enterprise/China-market push |
| **DeepSeek TUI** | 10 | 11 (3 closed) | v0.9.4 release train (77 commits ahead) | Aggressive; monorepo build crisis |

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Need |
|---|---|---|
| **Session durability & recovery** | Claude Code, Codex, OpenCode, Qwen Code, Pi | Crashes, reconnects, and app restarts lose visible session history despite disk persistence; users demand guaranteed recoverability across all session types. |
| **Subagent reliability** | Gemini CLI, DeepSeek TUI, OpenCode, Kimi Code | Agents hang, falsely report success, run without permission, or ignore configuration — the #1 frustration for complex-workflow users across Gemini CLI, DeepSeek, and OpenCode. |
| **MCP server stability** | Codex, Copilot CLI, Gemini CLI, Qwen Code | Process leaks (Codex: 9+ GB RSS), discovery failures (`-32602`), and unresponsive SSE server hangs (`qwen mcp list`) are systemic pain points. |
| **Cross-session memory** | Kimi Code (#1283), Qwen Code (Mem0 PR #8507), OpenCode | Persistent context across invocations is a foundational QoL feature users repeatedly request; currently session-bound in most tools. |
| **Reasoning-model support** | Pi, Qwen Code, OpenCode | `thinking_token_budget` handling (#7638), reasoning-content preservation in transcripts (#7586), and prompt-cache invalidation from microcompaction (#8452) are emerging as critical infrastructure gaps. |
| **Usage transparency & billing** | OpenCode (#16017, #40588), Claude Code (#79386, #83633), DeepSeek TUI (#5241) | Free-tier silent cutoffs, Max-plan credit prompts, and pricing-endpoint 503s erode trust; users demand programmatic quota APIs and clear warning thresholds. |
| **Non-Latin / IME input** | Claude Code, Kimi Code, OpenCode | Korean IME (#73064), Thai character duplication (#2584), and CJK terminal-width infinite loops (#28641) indicate under-tested internationalization across all major tools. |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Lagging / Niche |
|---|---|---|
| **Release velocity** | **Codex** (5 alphas/day), **DeepSeek TUI** (77-commit release train) | **Copilot CLI** (2 PRs in 24h, both infra) |
| **Security focus** | **Gemini CLI** (2 critical CVE fixes in one day), **Claude Code** (worktree isolation + hook bypass) | **Copilot CLI** (no security PRs this cycle) |
| **Enterprise/readiness** | **Qwen Code** (Kimi/MiMo providers, Feishu/DingTalk integrations, GHE compaction bugs acknowledged), **Claude Code** (enterprise onboarding-wall issues) | **Kimi Code CLI** (no enterprise features shipped yet) |
| **Platform coverage** | **OpenCode** (RTL desktop fixes, GNU screen clipboard), **Pi** (active Windows feedback thread #7547) | **DeepSeek TUI** (Windows build-space-path regression still open) |
| **Technical approach** | **Qwen Code** (deterministic trust-boundary architecture #8102), **DeepSeek TUI** (ACP bridge for Zed/third-party tool execution) | **Copilot CLI** (maintenance mode; no novel architecture signals) |
| **Model-provider diversity** | **Pi** (Cortecs, LLM Gateway built-in), **Qwen Code** (Kimi, MiMo added), **OpenCode** (DeepSeek Responses API request #39829) | **Claude Code** (Anthropic-only; no custom-provider expansion this cycle) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Rationale |
|---|---|---|
| **High momentum, rapid iteration** | **Codex**, **DeepSeek TUI**, **Gemini CLI** | Substantial PR throughput, frequent micro-releases, active contributor base. DeepSeek's 77-commit train and Codex's 5-alpha day signal intense development velocity. |
| **Steady maturity, bug-hardening phase** | **Claude Code**, **OpenCode**, **Qwen Code**, **Pi** | Balanced issue-to-PR ratios; focus on reliability (worktree isolation, RTL fixes, reasoning-model support) rather than feature throughput. These tools are entering mature maintenance cycles. |
| **Low momentum, platform-lock risks** | **Copilot CLI**, **Kimi Code CLI** | Copilot CLI's 2 PRs (both infra) and Kimi's 4 hot issues with zero PR responses suggest either small maintainer teams or community disengagement. Kimi's lack of releases this cycle is a concern for a product this early. |

---

## 6. Trend Signals

1. **Reasoning models are exposing infrastructure gaps.** Multiple tools (Pi #7638, Qwen Code #8452, OpenCode #37852) are hitting the same class of bug: reasoning-content handling, prompt-cache invalidation, and stream-deadlock detection are not yet solved problems at the CLI layer. Developers building on top of these tools should assume reasoning-model support will remain unstable through late 2026.

2. **Session state fragility is a universal weakness.** Across every tool surveyed, transcript persistence on disk does not translate to recoverable session state after crashes, restarts, or remote reconnects. This is the single most common pain point and represents a clear differentiation opportunity for any tool that solves it.

3. **MCP process lifecycle management is broken everywhere.** Codex leaks 9+ GB of orphaned MCP processes; Qwen Code's `mcp list` hangs indefinitely; Gemini CLI's consent prompts hide server config fields. The ecosystem lacks a standardized MCP server lifecycle contract, and this will remain a friction point until an implicit standard emerges.

4. **Enterprise onboarding is a trust erosion vector.** Claude Code's onboarding-wall (#83633), Copilot CLI's org-agent invisibility (#1285), and OpenCode's EU-OAuth model rejection (#40243) all point to the same pattern: authenticated enterprise users are silently gated or misconfigured. Tools that surface entitlement state clearly will win enterprise adoption.

5. **Build-system debt is becoming a product risk.** DeepSeek TUI's 682K-line monolith and its maintainer-authored "build-time lane" epic (#5249) signal that even rapid-iteration projects are hitting compilation-scale limits. Developers evaluating DeepSeek TUI for customization should monitor this closely — contributor friction will slow the release cadence if unresolved.

6. **Internationalization is an afterthought.** Thai IME duplication (Kimi), Korean IME friction (Claude), CJK infinite loops (Gemini), and RTL layout fixes (OpenCode) are all post-hoc patches. Tools shipping in non-English markets without native IME investment will face compounding UX debt.

---

*Data sourced from GitHub community digests, 2026-08-05. Analyst: Agnes-2.0-Flash (Sapiens AI).*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
*Data as of 2026-08-05 · Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| # | PR | Title | Status | Focus |
|---|-----|-------|--------|-------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | fix(skill-creator): run_eval.py always reports 0% recall | Open | Skill creation tooling — the eval artifact was never installed as a real skill, breaking the entire description-optimization loop |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | Add document-typography skill | Open | Typographic quality control: orphans, widows, numbering misalignment in AI-generated documents |
| 3 | [#538](https://github.com/anthropics/skills/pull/538) | fix(pdf): correct case-sensitive file references in SKILL.md | Open | PDF skill — 8 uppercase references broken on case-sensitive filesystems |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | Add ODT skill | Open | OpenDocument text creation, template filling, and ODT→HTML parsing |
| 5 | [#210](https://github.com/anthropics/skills/pull/210) | Improve frontend-design skill clarity | Open | Frontend-design skill rewrite for actionability and single-conversation coherence |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | Add skill-quality-analyzer + skill-security-analyzer | Open | Meta-skills evaluating structure/docs (20%), security, and reasoning quality across five dimensions |
| 7 | [#541](https://github.com/anthropics/skills/pull/541) | fix(docx): prevent tracked change w:id collision | Open | DOCX skill — hardcoded low `w:id` values clash with existing bookmarks, corrupting documents |
| 8 | [#1367](https://github.com/anthropics/skills/pull/1367) | Add self-audit: mechanical verification + four-dimension reasoning gate | Open | Pre-delivery audit: verify claimed output files exist, then score reasoning across four axes |

**Discussion highlights:** The skill-creator tooling dominates the top of the list — PRs #1298, #538, #541, #539, #1099, #1050, #1323, and #1261 all target the same `run_eval.py` / `run_loop.py` pipeline, indicating a systemic reliability problem that the community is actively patching.

---

## 2. Community Demand Trends

From the top Issues, the most-anticipated new Skill directions are:

- **Skill creation & evaluation tooling** — Issue [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) documents the recurring `recall=0%` bug that blocks every skill-creator workflow; Issue [#1169](https://github.com/anthropics/skills/issues/1169) extends this to slash-command skills.
- **Trust & security boundaries** — Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) flags community skills impersonating the `anthropic/` namespace, creating permission-escalation risk.
- **Organization-wide skill sharing** — Issue [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) is the most upvoted open issue: users want shared skill libraries, not manual .skill file distribution.
- **Document format coverage** — Multiple PRs and Issues converge on ODT (#486), DOCX (#541), and typography (#514), signaling strong demand for structured-document generation.
- **Testing & verification** — PR #723 (testing-patterns skill) and PR #1367 (self-audit) reflect a community appetite for built-in quality gates.
- **Context-window hygiene** — Issue [#1487](https://github.com/anthropics/skills/issues/1487) reports a single skill injecting ~156 k tokens; Issue [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) flags duplicate skills from overlapping plugins.

---

## 3. High-Potential Pending Skills

| PR | Skill | Why it may land soon |
|----|-------|---------------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** — mechanical file verification + four-dimension reasoning gate | Addresses the #556 / #1169 pain directly; builds on the existing `run_eval.py` infrastructure |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** — lifecycle management for planning artifacts | Named the problem precisely in Issue #1417; solves context-window bloat from accumulated plans |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** — orphans, widows, numbering control | Solves a universal pain point; low-risk, high-utility |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** — color naming systems, spaces, and selection guidance | Niche but well-scoped; fills a gap in creative-workflow skills |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** — testing philosophy, unit tests, React component testing | Broad appeal; aligns with the quality-gate trend seen in #1367 |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** — OpenDocument text creation and template filling | Complements the existing PDF/DOCX skills; completes document-format coverage |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** — retro/pixel-art game development | Unique niche; already has an MCP server ([pyxel-mcp](https://github.com/kitao/pyxel-mcp)) to hook into |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is at the tooling layer, not the skill layer: fixing the broken `run_eval.py` → `run_loop.py` optimization pipeline (recall=0% across every iteration) is the single highest-leverage problem, because until skill creation itself is reliable, every new skill proposal remains unvalidated.**

---



# Claude Code Community Digest — 2026-08-05

## 1. Today's Highlights

Claude Code v2.1.222 shipped with critical fixes for worktree isolation and PreToolUse hook bypasses, closing two security-adjacent gaps in session sandboxing. The community is actively discussing a persistent GitHub connector regression (#71542, 49 comments) and a growing cluster of issues around interleaved-thinking text loss across multiple model versions. Meanwhile, a batch of plugin-development script hardening PRs landed from contributor RerankerGuo, addressing validation, dependency checks, and hook-testing logic.

---

## 2. Releases

### v2.1.222
- **Worktree isolation hardening** — Subagents in worktree-isolated sessions could previously run destructive git commands against the main checkout. Isolation now applies uniformly to file edits and Bash across every session type.
- **PreToolUse auto-allow hook fix** — Background agent tasks could bypass tool restrictions via auto-allow hooks; this vector is now closed.

---

## 3. Hot Issues

| # | Title | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| [#71542](https://github.com/anthropics/claude-code/issues/71542) | GitHub connector links repos but cannot access any content (account-wide regression) | Antares9879 | 49 | 43 | Widespread access failure affects both public and private repos; flagged as a recent regression with strong community signal. |
| [#65620](https://github.com/anthropics/claude-code/issues/65620) | Pre-tool-call assistant text never emitted (prose stays in thinking) | ingo-eichhorst | 28 | 16 | Silent loss of assistant text blocks in session transcripts — data integrity issue affecting Fable 5 and earlier. |
| [#74260](https://github.com/anthropics/claude-code/issues/74260) | Assistant text blocks silently dropped when followed by more thinking (2.1.201, adaptive thinking) | federbenjamin | 25 | 16 | Cross-platform recurrence of the same text-loss bug; confirmed on macOS/Linux/Windows with `claude-fable-5`. |
| [#66960](https://github.com/anthropics/claude-code/issues/66960) | Fable 5: 16 min of silent tool calls, then AskUserQuestion about never-shared findings | rasatpetabit | 14 | 18 | Highlights a severe UX failure in high-stakes incident-response workflows where the model acts autonomously but never surfaces results. |
| [#83633](https://github.com/anthropics/claude-code/issues/83633) | Login authenticates but `has_finished_claudeai_onboarding=false` blocks Max account access | VICTech-admin | 12 | 0 | Tenth public report of this onboarding-wall signature; network-level evidence captured for the first time. |
| [#52477](https://github.com/anthropics/claude-code/issues/52477) | Claude overrode explicit pronouns in user memory, defaulted to male bias | raleighsedona | 11 | 3 | Raises persistent concerns about model memory respecting user-specified identity instructions. |
| [#21378](https://github.com/anthropics/claude-code/issues/21378) | Memory leak causes freeze after 20+ min (15 GB RAM consumption) | wilhelmsson424-jpg | 9 | 12 | Critical perf regression on WSL2; process becomes unusable in long-running sessions. |
| [#77651](https://github.com/anthropics/claude-code/issues/77651) | Assistant text between tool calls silently lost (not rendered, not in Ctrl+O, not in JSONL) | kk1987 | 5 | 0 | Third independent report confirming the text-loss bug is systemic across session types and persisted data. |
| [#79386](https://github.com/anthropics/claude-code/issues/79386) | VS Code extension prompts for usage credits on Fable 5 despite Max plan entitlement | JdthLON | 5 | 0 | Billing/entitlement mismatch in the VS Code extension; users with full Max access see credit prompts. |
| [#76124](https://github.com/anthropics/claude-code/issues/76124) | Desktop shows "no messages yet" for SSH/remote sessions on reopen (transcript intact) | mnrrxyz | 4 | 0 | UX bug where remote session history fails to render in the Desktop app despite being fully preserved on disk. |

---

## 4. Key PR Progress

| # | Title | Author | Status |
|---|-------|--------|--------|
| [#84004](https://github.com/anthropics/claude-code/pull/84004) | fix(plugin-dev): limit frontmatter parsing | RerankerGuo | Open |
| [#84003](https://github.com/anthropics/claude-code/pull/84003) | fix(scripts): propagate top-level failures | RerankerGuo | Open |
| [#83999](https://github.com/anthropics/claude-code/pull/83999) | fix(scripts): validate gh flag values | RerankerGuo | Open |
| [#83995](https://github.com/anthropics/claude-code/pull/83995) | fix(scripts): validate label option values | RerankerGuo | Open |
| [#83993](https://github.com/anthropics/claude-code/pull/83993) | fix(scripts): reject self-referential duplicates | RerankerGuo | Open |
| [#83992](https://github.com/anthropics/claude-code/pull/83992) | fix(plugin-dev): assert expected hook decision | RerankerGuo | Open |
| [#83990](https://github.com/anthropics/claude-code/pull/83990) | fix(plugin-dev): report missing jq dependency | RerankerGuo | Open |
| [#83890](https://github.com/anthropics/claude-code/pull/83890) | Create pylint.yml | KrypticKode007 | Open |
| [#83374](https://github.com/anthropics/claude-code/pull/83374) | docs(plugin-dev): document MessageDisplay streaming semantics | iCodeCraft | Open |

**Notable summary:** A coordinated set of seven hardening PRs from **RerankerGuo** improves the plugin-development test harness and maintenance scripts — adding frontmatter parsing guards, CLI flag validation, self-reference detection, missing-dependency reporting, and explicit hook-decision assertions. The **MessageDisplay** docs PR (#83374) fills a gap in the bundled Hook Development skill documentation.

---

## 5. Feature Request Trends

- **Session recovery and durability** — Multiple reports (#76124, #83730, #81907, #83149) describe session state loss after app crashes, reinstalls, or remote reconnects. Users want guaranteed recoverability of conversation history across all session types.
- **Resilient long-running / autonomous workflows** — Issues #66960 and #83809 reflect demand for better progress visibility and resume capability in unattended or remote-agent scenarios.
- **Cross-platform IME and terminal compatibility** — Korean IME (#73064) and mouse-tracking SGR leaks (#81648) signal ongoing friction in non-Latin input and terminal-integration paths.
- **Entitlement and billing clarity** — Issues #83633 and #79386 show users want unambiguous, account-wide entitlement resolution without onboarding-wall interference.
- **Plugin/skill tooling maturity** — The volume of plugin-dev PRs and the frontmatter/schema mismatch in #83981 indicate the community is pushing for a more stable, well-documented plugin ecosystem.

---

## 6. Developer Pain Points

1. **Interleaved-thinking text loss** — Three to four independent reports (#65620, #74260, #77651, #84065) confirm that assistant text blocks emitted between thinking chunks are silently dropped from the TUI, Ctrl+O view, and session JSONL. This is the dominant bug thread this period.

2. **Session state fragility** — Crashes, reinstalls, SSH reconnections, and remote-control unarchive flows all risk losing visible session history despite transcripts surviving on disk (#76124, #83730, #81907, #83149).

3. **Memory leaks in sustained sessions** — The 15 GB RAM leak (#21378) on WSL2 continues to be the most impactful perf issue for long-running workloads.

4. **Plugin harness reliability** — The plugin test scripts lacked basic validation (missing `jq`, unbound variables, self-referential duplicates), requiring a community-maintained hardening pass (#83990, #83995, #83993).

5. **Entitlement / onboarding wall** — A recurring pattern (#83633, #79386) where authenticated users are incorrectly gated behind new-account onboarding or credit-prompt flows.

6. **Native auto-update side effects** — Issue #84071 reports that the macOS native auto-updater invalidates TCC (Transparency, Consent, and Control) grants, breaking headless and cron-triggered automation after each update cycle.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-05

---

## 1. Today's Highlights

Rapid Rust CLI iteration continues with five alpha releases (0.147.0-alpha.6.1 through .7) released in a single day. The community's top concern remains conversation context fidelity (#8648, 81 comments), while MCP process leaks on Windows and macOS are generating sustained frustration across multiple reports. Meanwhile, a large batch of permission and tool-registry improvements is landing via copyberry[bot]'s PR series.

---

## 2. Releases

**Rust CLI — 0.147.0-alpha series (rapid iteration)**

- **0.147.0-alpha.7** — latest alpha (2026-08-05)
- **0.147.0-alpha.6.4**, **0.147.0-alpha.6.3**, **0.147.0-alpha.6.1** — preceding patch-level alphas

The tight release cadence suggests active work on the upcoming 0.147.0 stable track, with frequent micro-releases targeting sandbox, tool-registry, and permission-profile fixes.

---

## 3. Hot Issues

### #8648 — Codex replies to earlier messages instead of the latest one in conversations
**Author:** BobbyWang0120 | **Comments:** 81 | 👍 58 | **Status:** OPEN
**[View Issue](https://github.com/openai/codex/issues/8648)**

The highest-engagement issue on the board. Users report that in multi-turn conversations, Codex occasionally responds to stale messages rather than the most recent prompt. A Pro subscriber on gpt-5.2-xhigh filed this in January, and it has seen no resolution — the volume of comments signals a widespread UX pain point affecting conversational coherence.

---

### #30408 — MCP server processes leak: per-thread processes never cleaned up (9+ GB RSS)
**Author:** kkkayye | **Comments:** 23 | 👍 6 | **Status:** OPEN
**[View Issue](https://github.com/openai/codex/issues/30408)**

Codex spawns a full set of global MCP server processes per thread/conversation but never reaps them on thread close or archival. Over time, orphaned processes accumulate unboundedly, consuming 9+ GB RSS on macOS Apple Silicon. This is a resource-leak bug with direct impact on long-running sessions.

---

### #30009 — apply_patch fails with a Windows sandbox-related error
**Author:** TheCrake | **Comments:** 31 | 👍 10 | **Status:** OPEN
**[View Issue](https://github.com/openai/codex/issues/30009)**

Windows-specific sandbox issue blocking file edits via `apply_patch`. A Pro user on Windows 11 (build 26200) reports consistent failures, indicating a platform-specific regression in the sandbox-to-filesystem translation layer.

---

### #30440 — Codex uses bundled pnpm instead of host toolchain
**Author:** kkaatii | **Comments:** 20 | 👍 26 | **Status:** OPEN
**[View Issue](https://github.com/openai/codex/issues/30440)**

High upvote count (26) reflects strong community sentiment: Codex Desktop on macOS (Darwin 24.6.0 arm64) refuses to use the system-installed pnpm, instead falling back to a bundled version that breaks build scripts. This is a toolchain-compatibility issue affecting power users with custom development environments.

---

### #28080 — Desktop thread tools intermittently lose handlers (`No handler registered`)
**Author:** Hogna67 | **Comments:** 19 | 👍 2 | **Status:** OPEN
**[View Issue](https://github.com/openai/codex/issues/28080)**

During active Codex Desktop sessions on Windows 11, tool handlers vanish mid-session. This intermittent failure disrupts workflows and suggests a lifecycle-management bug in the thread-to-tool routing layer.

---

### #37002 — Unable to install after clicking Update in the Codex app
**Author:** ytc301 | **Comments:** 17 | 👍 0 | **Status:** OPEN
**[View Issue](https://github.com/openai/codex/issues/37002)**

Filed today (2026-08-05), a fresh report of a broken update/install flow on macOS 12. The issue is early but signals a potential regression in the Desktop auto-updater.

---

### #29787 — Codex app doesn't restart after update (CLOSED)
**Author:** kendonB | **Comments:** 14 | 👍 2 | **Status:** CLOSED
**[View Issue](https://github.com/openai/codex/issues/29787)**

A previously reported Windows issue where the app would close after an update but never relaunch. Closed, but its recurrence risk remains given the fresh install issue above.

---

### #25233 — `/side` chats are expiring too quickly; expiration behavior is opaque
**Author:** miraclebakelaser | **Comments:** 10 | 👍 18 | **Status:** OPEN
**[View Issue](https://github.com/openai/codex/issues/25233)**

Side chats (ephemeral `/side` conversations) expire far sooner than users expect, with no clear indication of why or how long they last. 18 upvotes suggest this is a noticeable UX gap for collaborative workflows.

---

### #29156 — Desktop custom providers are unusable with existing chats and the model picker
**Author:** nostitos | **Comments:** 8 | 👍 17 | **Status:** OPEN
**[View Issue](https://github.com/openai/codex/issues/29156)**

While the CLI handles custom model providers well via `model_providers` and profiles, the Desktop app fails to integrate them sanely with existing chat history and the model picker UI. This creates a fragmented experience for users relying on non-OpenAI providers.

---

### #36971 — macOS Codex Desktop runaway task worker and app-server consume 12+ GB RAM
**Author:** bt1142msstate | **Comments:** 2 | 👍 0 | **Status:** OPEN
**[View Issue](https://github.com/openai/codex/issues/36971)**

Filed yesterday, a new report of sustained high memory (5.5 GB task worker + 7 GB app-server) and CPU (160–200%) during ordinary local task work on macOS. Mirrors the MCP leak pattern and suggests a broader resource-management issue.

---

## 4. Key PR Progress

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#37040](https://github.com/openai/codex/pull/37040) | Use turn environment permissions for context and discovery | ✅ Closed | Builds filesystem and permission context from the primary turn environment's profile, falling back to thread context when unavailable. |
| [#37038](https://github.com/openai/codex/pull/37038) | Use turn environment permissions for tool execution | ✅ Closed | Derives sandboxing, approval, and permission-profile env vars from the selected turn environment for shell, unified exec, `apply_patch`, image viewing, and network approval flows. |
| [#37035](https://github.com/openai/codex/pull/37035) | Align registry tests with canonical tool names | ✅ Closed | Tool collisions now report names canonicalized into the default `functions` namespace; removes obsolete explicit-namespacing test. |
| [#37031](https://github.com/openai/codex/pull/37031) | Apply permission profile updates to future turn environments | ✅ Closed | Includes the current permission profile in each turn environment's config; refreshes retained configs when session settings change. |
| [#37027](https://github.com/openai/codex/pull/37027) | Enforce Agent Plugin runtime boundaries | ✅ Closed | Tracks Agent Plugin manifests through plugin/skill/MCP loading; isolates MCP data and excludes app/hook capabilities from direct-child skill discovery. |
| [#37022](https://github.com/openai/codex/pull/37022) | Canonicalize default tools under the `functions` namespace | ✅ Closed | Groups top-level function and custom tool definitions into a single `functions` namespace for Responses Lite providers. |
| [#37020](https://github.com/openai/codex/pull/37020) | Enforce strict tool name collision errors | ✅ Closed | Tracks the first duplicate effective tool name and fails the registry when `[features.tool_registry].error_on_tool_collisions` is enabled. |
| [#36998](https://github.com/openai/codex/pull/36998) | Support deferred custom tools in tool search | ✅ Closed | Includes top-level freeform tools in the search index, marks them for deferred loading, and converts them to Responses API `custom` tools. |
| [#36993](https://github.com/openai/codex/pull/36993) | Support `includeTurns` reads for paginated threads | ✅ Closed | Reconstructs full projected turns from paginated history for both stored and in-memory threads, serving legacy full-history view clients. |
| [#36987](https://github.com/openai/codex/pull/36987) | Add opt-in concurrent exec-server request dispatch | ✅ Closed | Introduces `--concurrent-requests <COUNT>` for local and remote exec-server connections, preventing long-running requests from blocking health checks. |

---

## 5. Feature Request Trends

1. **Model selection granularity** — Users want per-phase model control (e.g., plan with one model, implementation with another) (#14969) and a managed, enforceable allowlist of selectable models (#28469).
2. **Custom provider support in Desktop** — Strong demand (#29156, 17 👍) for parity between CLI and Desktop when using non-OpenAI model providers, including model picker integration and history compatibility.
3. **Taskboard and agent orchestration APIs** — Community requests official extension APIs for taskboards and managed-agent workflows (#37039), citing projects like Multica and Dashi as reference experiences.
4. **Side-chat persistence and expiration transparency** — Users want clearer, configurable expiration for `/side` ephemeral chats (#25233) and reliable forking (#22001, #20977).
5. **Plan-mode implementation model switching** — A feature request to let users choose a different model when transitioning from plan to implementation (#14969).

---

## 6. Developer Pain Points

- **Context and conversation fidelity** — The #1 reported issue (#8648): Codex responds to stale messages instead of the latest prompt in multi-turn conversations, breaking conversational continuity.
- **Resource leaks on long sessions** — MCP process leaks (#30408, #35485) and runaway task workers (#36971) cause unbounded memory growth (9–12+ GB RSS), especially on Windows and macOS.
- **Windows + WSL path and sandbox bugs** — Recurring Windows-specific failures: `apply_patch` sandbox errors (#30009, #35864), incorrect `/mnt/` path mapping (#28174), and plugin cache resolution issues (#24268).
- **Toolchain compatibility** — Bundled tool versions (pnpm, `node_repl`) override host-installed equivalents (#30440), and critical tools like `node_repl` are sometimes unavailable despite plugin installation (#30026, #37036).
- **Update and installation reliability** — Broken update flows (#37002) and apps that fail to restart post-update (#29787) disrupt the developer experience on both Windows and macOS.
- **Side-chat fragility** — Side chats expire unpredictably (#25233), fail to fork (#22001, #20977), and lose persistence across app reloads.
- **Subagent state restoration** — Completed subagents restore as "Active" after Desktop reloads (#37042), creating confusion in long-running task histories.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-05

## 1. Today's Highlights

A security-focused day in the Gemini CLI repo: two critical security PRs landed addressing an SSRF bypass via async DNS resolution (#28557) and a `$VAR` / `${VAR}` expansion bypass in bash substitution detection (GHSA-wpqr-6v78-jr5g, #28691). Meanwhile, the eval infrastructure continues to mature with new tool-call formatters, validation CLI, and local report commands all advancing in parallel.

## 2. Releases

No new releases published in the last 24 hours.

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Subagents silently claim success when they hit their turn limit, masking real failures — a correctness issue for any agent relying on `codebase_investigator`. | P1, 12 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Common tasks (e.g. folder creation) cause the generalist agent to hang forever; workaround is disabling sub-agents entirely. | P1, 8 comments, 8 👍 — highest thumbs in the issue list |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command stuck at "Waiting input" after completion | Simple CLI commands leave the shell in a hung "awaiting input" state, blocking further agent activity. | P1, 4 comments, 3 👍 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Sessions marked low-signal are never marked processed, causing the memory system to re-surface them repeatedly. | P2, 5 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction and Auto Memory logging reduction | Secret redaction currently happens *after* content enters model context; the system also logs skill details it shouldn't. | P2, 4 comments |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | Users report custom skills (e.g. "gradle", "git") are ignored unless explicitly instructed — a core UX gap. | P2, 6 comments |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | Sub-agents running without permission since v0.33.0 | After updating, agents like generalist started running automatically despite being disabled in config — a regression. | P1, 3 comments |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should discourage destructive behavior | Forceful `git reset` and destructive DB commands are used when safer alternatives exist; users want agent guardrails. | P2, 3 comments, 1 👍 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides | Configuration such as `maxTurns` in `settings.json` is silently ignored by the browser sub-agent. | P2, 3 comments |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | get-shit-done output hook causes crash | The agent crashes with an unhandled error while printing its final user-facing summary. | P1, 3 comments |

## 4. Key PR Progress

| # | PR | What It Does |
|---|-----|-------------|
| [#28691](https://github.com/google-gemini/gemini-cli/pull/28691) | `fix(core): block $VAR and ${VAR} variable expansion bypass` | Closes a security bypass in `detectBashSubstitution()` / `detectPowerShellSubstitution()` that allowed env-variable patterns to evade the gate added for GHSA-wpqr-6v78-jr5g. |
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | `fix: resolve SSRF vulnerability in web-fetch.ts` | Replaces synchronous `isPrivateIp()` with async DNS resolution so hostnames resolving to internal IPs (e.g. `169.254.169.254`) are correctly blocked. |
| [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | `feat(evals): add tool call formatter and failure summaries` | When an eval fails, the runner now prints a compact, numbered timeline of tool calls with args, status, and error details directly in the console. |
| [#28344](https://github.com/google-gemini/gemini-cli/pull/28344) | `Feat/eval validate` | Adds an `eval:validate` static-analysis command checking eval source files against 9 rules — CI-gateable. |
| [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | `feat(evals): add local report command and developer docs` | `npm run eval:report` aggregates pass rates by model from Vitest `report.json` files and maps results to inventory policies. |
| [#28695](https://github.com/google-gemini/gemini-cli/pull/28695) | `fix(sdk): don't abort sendStream on malformed tool arguments` | Guards `JSON.parse()` on model-provided tool arguments so a single malformed string no longer crashes the streaming generator. |
| [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) | `fix(core): unwrap nested gaxios streaming errors` | Extracts structured errors (rate limits, capacity exhaustion) from `error.cause.message` during streaming requests. |
| [#28641](https://github.com/google-gemini/gemini-cli/pull/28641) | `fix(cli): prevent ghost text infinite loop at narrow widths` | Fixes an infinite loop in `getGhostTextLines` when the terminal is narrower than a wide codepoint (CJK/emoji); adds regression test. |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | `fix(core): dynamic Cloud Workstations OAuth redirect URI` | Fixes OAuth 2.0 auth failures inside GCP Workstations VMs by dynamically resolving the proxy redirect URI instead of hardcoding `localhost`. |
| [#28664](https://github.com/google-gemini/gemini-cli/pull/28664) | `fix(mcp): reflect full server config in consent` | MCP extension-update consent prompts now show `env`, `cwd`, and `headers` — fields previously hidden from users during consent decisions. |

## 5. Feature Request Trends

- **Eval infrastructure maturity** — Three back-to-back PRs (#28305, #28344, #28369) show a concerted push for a robust, CI-gateable behavioral eval system with tool-call timelines, validation, and reporting.
- **AST-aware codebase navigation** — Issues #22745 and #22746 track investigations into AST-based file reads, search, and codebase mapping to reduce noisy turns and improve tool precision.
- **Agent self-awareness & better tool selection** — Issue #21432 requests the agent understand its own CLI flags and hotkeys; Issue #21968 highlights that skills/sub-agents are underutilized.
- **Zero-dependency OS sandboxing** — Issue #19873 proposes leveraging the model's native bash affinity with sandboxed execution and post-execution intent routing.
- **Browser agent resilience** — Issue #22232 requests automatic session takeover and lock recovery for the `browser_agent` instead of its current fail-fast behavior.
- **Subagent visibility** — Issue #22598 asks for subagent trajectories to be surfaced via `/chat share` for review and eval.

## 6. Developer Pain Points

1. **Subagent reliability** — The dominant frustration: agents hang (#21409), falsely report success (#22323), run without permission (#22093), or ignore configuration (#22267). Users who rely on sub-agents for complex tasks are hitting consistent blockers.
2. **Shell / terminal glitches** — Commands stuck in "Waiting input" (#25166), interactive prompts causing hangs (#22465), and crash-on-summary bugs (#22186) suggest the CLI layer around shell interaction needs hardening.
3. **Auto Memory quality** — Low-signal sessions are retried indefinitely (#26522), invalid patches are silently dropped (#26523), and secret redaction happens too late in the pipeline (#26525) — all eroding trust in the memory system.
4. **Security hardening** — Two separate PRs landed in one day for variable expansion bypass (#28691) and SSRF via hostname resolution (#28557), indicating the attack surface around command execution and web fetching remains active.
5. **Config and consent transparency** — Users want full visibility into what MCP servers are running (environment, cwd, headers) and expect settings.json to be honored consistently across all agents.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-05

## 1. Today's Highlights

GitHub Copilot CLI v1.0.79-2 shipped with prompt-pin behavior improvements, while v1.0.79-1 introduced a **breaking rename** of `allowDevToolCaches` → `allowDevToolAccess`. The community is most excited about session-forking (#1697, 25 👍) and a major regression where plugin slash commands stopped working in recent versions (#4361).

---

## 2. Releases

### v1.0.79-2
- **Prompt pinning improved** — the current prompt now pins one row higher (in the tab-bar row), preserving layout while saving one visual row. Pinned prompts are hidden by default on terminals under 30 rows to avoid crowding.
- `pinnedPrompts` setting added for opt-in control.

### v1.0.79-1
- **BREAKING:** Sandbox setting `allowDevToolCaches` renamed to `allowDevToolAccess` (it now covers dev-tool config and registries, not just caches). The old key is silently ignored; an existing `false` opt-out reverts to the default `on`.

---

## 3. Hot Issues

| # | Title | Status | 👍 | Why It Matters |
|---|-------|--------|----|----------------|
| [#1697](https://github.com/github/copilot-cli/issues/1697) | Session forking — branch a conversation into parallel sessions | OPEN | 25 | High-demand workflow feature: split a single session into parallel tracks while preserving shared context. |
| [#1504](https://github.com/github/copilot-cli/issues/1504) | Add custom theme support | OPEN | 23 | Users want shareable custom themes via `/theme`; currently limited to built-in options. |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | Organisation-level Agent not showing up | OPEN | 9 | Enterprise users report agents in `{org}/.github-private` repos don't surface in CLI or VS Code despite correct template. |
| [#2692](https://github.com/github/copilot-cli/issues/2692) | Web Search tool — `github-mcp-server` error | CLOSED | 2 | MCP server `github-mcp-server` fails with Streamable HTTP error when executing web search. |
| [#4005](https://github.com/github/copilot-cli/issues/4005) | Copilot billing entity isn't selected | OPEN | 3 | Enterprise users can't save memories after upgrade; everything else works on 1.0.65. |
| [#4202](https://github.com/github/copilot-cli/issues/4202) | Built-in `view` tool reports "Path does not exist" | OPEN | 1 | Regression introduced in v1.0.72; the same probe succeeds on v1.0.71. |
| [#1037](https://github.com/github/copilot-cli/issues/1037) | Device login fails: `ENOTFOUND next-waitlist.azurewebsites.net` | OPEN | 0 | Auth login flow breaks after device approval; DNS resolution failure on backend endpoint. |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | v1.0.79-1 fails MCP init when `server/discover` returns `-32602` | OPEN | 1 | FastMCP-compliant servers that return `-32602 Invalid parameters` cause Copilot CLI to reject them outright. |
| [#4196](https://github.com/github/copilot-cli/issues/4196) | BYOK completions wire API fails with `reasoning_content` | OPEN | 0 | BYOK providers emitting `reasoning_content` in streaming deltas trigger 5 retries before giving up. |
| [#1697](https://github.com/github/copilot-cli/issues/1697) + [#1947](https://github.com/github/copilot-cli/issues/1947) | Cloud-synced sessions (cross-device) | CLOSED | 6+ | Strong community interest in portable sessions across machines; sessions stored locally in `~/.copilot/`. |

---

## 4. Key PR Progress

| # | Title | Status | Notes |
|---|-------|--------|-------|
| [#4355](https://github.com/github/copilot-cli/pull/4355) | Merge | OPEN | Routine merge PR; no detailed description provided. |
| [#4366](https://github.com/github/copilot-cli/pull/4366) | ACTION REQUIRED: Fundamental security findings resolution | OPEN | Vault app security remediation for `ci, production`. Replaces `<UPDATE_ME>` placeholders and merges to complete. Contact `#perimeter-and-secrets` for help. |

> **Note:** Only 2 PRs were filed in the last 24h; both are infra/maintenance rather than feature work.

---

## 5. Feature Request Trends

1. **Session management & portability** — Session forking (#1697), cloud-synced sessions (#1947), and session deletion (#2019, 13 👍) dominate. Users want granular control over conversation state.
2. **Customization & theming** — Custom themes (#1504, 23 👍) and persistent context bars (#2532) show strong appetite for personalization.
3. **BYOK / custom model support** — BYOK wire API failures (#4196) and custom endpoint requests (#4139, 6 👍) indicate growing demand for provider flexibility.
4. **Plugin ecosystem** — Auto-update for plugins (#1709, 29 👍) and slash-command regressions (#4361) highlight plugin reliability as a key concern.
5. **Enterprise & org features** — Agent visibility (#1285), billing entity selection (#4005), and ACP telemetry gaps (#4174) suggest enterprise onboarding friction.

---

## 6. Developer Pain Points

| Category | Issues | Summary |
|----------|--------|---------|
| **MCP compatibility** | #2692, #4370, #4371 | Multiple failures around MCP server discovery (`-32602`), OAuth 3LO flow (`-32042`), and web-search tool errors. |
| **Authentication** | #1037 | Device login flow breaks with DNS errors on the backend waitlist endpoint. |
| **Regression bugs** | #4202, #4361 | `view` tool path resolution broke in v1.0.72; plugin slash commands no longer rewrite to natural language. |
| **Session state loss** | #4334 | Stashed prompts (`Ctrl+S`) are discarded on session switch with no restore path. |
| **Enterprise config** | #1285, #4005 | Org-level agents invisible in CLI/VS Code; billing entity not selected prevents saving memories. |
| **Crashes & stability** | #4026 | Repeated native runtime crashes on Windows across multiple versions since May 2026. |
| **Subconscious sidekick** | #3859 | Background memory-voting agent spawns on every prompt even when `memory` is fully disabled. |
| **Hallucinated search** | #4093 | `web_search` tool returns confident fabricated answers instead of "no results." |

---

*Digest generated from `github.com/github/copilot-cli` data as of 2026-08-05.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-05

## 1. Today's Highlights

Two new bug reports landed today: one documenting unexpected session exits on Windows with K3 High, and another tracking IME-based character duplication (Thai and similar scripts) in the prompt on Windows. Meanwhile, a notable reliability investigation identified a ~500K token context fill threshold where agent behavior degrades into repetitive loops and instruction drift.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| #2586 | Agent reliability degrades at high context fill | First empirical report of a ~500K token reliability cliff in long-running agentic sessions — directly impacts users running complex multi-step workflows. | 1 comment; flagging for maintainer attention. |
| #2587 | Kimi CLI exits abnormally during normal session advancement | Unexplained crashes on Windows (v0.29.2, K3 High) block users mid-workflow with no recovery path. | 0 comments — awaiting reproduction details. |
| #2584 | Thai & IME-based characters duplicated on Windows | Affects a broad class of non-Latin input methods; users typing in Thai, Arabic, CJK, etc. see garbled prompts on Windows 11. | 0 comments — likely under-reported for non-English users. |
| #1282 | Remote Control — continue sessions from any device | High-impact workflow feature; enables phone/tablet/browser access to local sessions. Strong community appetite. | 👍 24 — the most-upvoted open issue in this cycle. |
| #1283 | Memory System — persistent context across sessions | Cross-session memory (both AI-managed and user-defined) is a foundational quality-of-life feature for power users. | 18 comments; active discussion on scope and implementation. |

## 4. Key PR Progress

| # | Title | Author | Summary |
|---|-------|--------|---------|
| #2585 | `feat(cli): set AI_AGENT for subprocesses` | @complynx | Propagates `AI_AGENT=kimi` to all subprocesses from both pip/uv and standalone entrypoints, enabling orchestrators and wrappers to detect Kimi-launched processes reliably. Covers missing, blank, and explicit marker cases. |
| #2200 | `fix(shell): adapt timeouts for long commands` | @he-yufeng | Extends shell timeouts automatically for known-slow operations (git submodule cleanup, clone/fetch, package installs, builds) while keeping the 60 s default for normal commands and preserving any caller-supplied explicit timeout. Open since May; last updated 2026-08-04. |

## 5. Feature Request Trends

- **Cross-session persistence** — Issue #1283 (Memory System) signals demand for the CLI to retain project patterns, preferences, and AI-managed notes beyond a single session.
- **Workflow continuity across devices** — Issue #1282 (Remote Control) is the most upvoted open feature request, reflecting a desire to pick up local sessions from mobile or browser clients.
- **Input method & platform parity** — The Thai/IME duplication bug (#2584) and Windows crash (#2587) indicate that non-Latin input support and Windows stability remain top priorities for the international developer base.

## 6. Developer Pain Points

1. **Session stability at scale** — Agents reliably break down once context exceeds ~500K tokens (#2586), producing repetitive loops and instruction drift with no escalation. This is the most pressing reliability concern for power users running multi-step agentic workflows.
2. **Windows crashes** — Unexpected exit during normal session advancement (#2587) on Windows NT 10.0.26200.0 suggests a platform-specific instability that warrants investigation.
3. **IME character duplication on Windows** — Non-Latin input methods (Thai, and others) produce duplicated characters in the prompt (#2584), degrading the typing experience for a significant portion of the global user base.
4. **Lack of cross-session memory** — Users repeatedly request persistent context (#1283), indicating that the current session-bound design forces reinstruction on every invocation.

---

**Links**

- Repo: <https://github.com/MoonshotAI/kimi-cli>
- Issue #1283: <https://github.com/MoonshotAI/kimi-cli/issues/1283>
- Issue #1282: <https://github.com/MoonshotAI/kimi-cli/issues/1282>
- Issue #2586: <https://github.com/MoonshotAI/kimi-cli/issues/2586>
- Issue #2587: <https://github.com/MoonshotAI/kimi-cli/issues/2587>
- Issue #2584: <https://github.com/MoonshotAI/kimi-cli/issues/2584>
- PR #2200: <https://github.com/MoonshotAI/kimi-cli/pull/2200>
- PR #2585: <https://github.com/MoonshotAI/kimi-cli/pull/2585>

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-05

## 1. Today's Highlights
OpenCode v1.18.13 lands with critical RTL layout fixes for the desktop client and enhanced GitHub PR context in the TUI. Community attention is dominated by a high-demand feature request for Go‑plan usage APIs (#16017) and several provider‑stream reliability issues that impact both desktop and web sessions.

## 2. Releases
**v1.18.13** (last 24h)  
- **TUI:** GitHub pull request reviews now include the PR number and URL in context.  
- **Desktop:** Fixed several right‑to‑left layout issues across tabs, drawers, resizing, and titlebar interactions; unified shared RTL UI behavior (directional icons, etc.).  
  *[v1.18.13 release](https://github.com/anomalyco/opencode/releases)*

## 3. Hot Issues
1. **#16017** – *Add Go plan usage/balance API endpoint* (30 comments, 126 👍)  
   Users need programmatic access to rolling/weekly/monthly usage windows; the dashboard already shows the data, but no public API exists.
2. **#39829** – *Support Responses API for deepseek‑v4‑flash on opencode‑go* (11 comments, 22 👍)  
   DeepSeek’s v4‑flash checkpoint natively supports the OpenAI Responses API; enabling it would expand model coverage on the Go client.
3. **#28590** – *writeOsc52 broken under GNU screen* (10 comments, 2 👍)  
   The clipboard utility incorrectly wraps screen output with the tmux‑specific `tmux;` prefix, breaking copy‑paste in GNU screen.
4. **#37852** – *Aborted provider stream recorded as clean stop* (6 comments, 52 👍)  
   When a provider stream ends mid‑generation without a finish reason, Opencode logs the turn as successful with zero tokens, masking failures.
5. **#31122** – *OMO Harness Stream Consumer Deadlock* (3 comments, 50 👍)  
   The harness can hang indefinitely when an LLM provider stops emitting events but never closes the stream (observed with Kimi K2.6).
6. **#40243** – *ChatGPT OAuth rejects GPT‑5.6 models for EU‑resident workspace* (4 comments, 4 👍)  
   EU‑residency‑enabled workspaces fail OAuth model selection, while the official Codex CLI succeeds with the same credentials.
7. **#37389** – *GitHub Copilot multi‑turn fails with 404 when Opencode sends item_reference* (5 comments, 1 👍)  
   Intermittent 404 errors in opencode2 v2 when using `github‑copilot/gpt‑5.5`; a regression from v1 handling.
8. **#38723** – *`opencode run` intermittently hangs during init* (5 comments, 1 👍)  
   ~56% failure rate: the command stays alive with no stdout, no error, and never progresses past `message=init`.
9. **#39207** – *GitHub OAuth login fails with “Failed query: update `user`”* (5 comments, 1 👍)  
   OAuth callback returns a server‑side SQL error because the email parameter is empty.
10. **#40588** – *Free tier cuts off service mid‑task with no warning* (2 comments, 0 👍)  
    The free `opencode/deepseek‑v4‑flash‑free` tier silently exhausts without exposing remaining allowance or countdown.

## 4. Key PR Progress
1. **#40381** – *refactor(app): gate unsupported v2 capabilities* (CLOSED)  
   Hides/disables controls whose APIs are unavailable on V2 servers while preserving V1 behavior behind a legacy facade.
2. **#40382** – *refactor(app): remove v1 compatibility* (OPEN)  
   Removes V1 protocol detection, compatibility adapters, and legacy client surfaces; routes all traffic through the V2 client.
3. **#40597** – *fix(app): show active search details* (CLOSED)  
   Keeps glob/grep directory details and search patterns visible while searches are active and results are pending.
4. **#36068** – *fix: accept Ollama reasoning field in OpenAI Chat deltas* (OPEN)  
   Ollama emits reasoning content in a `reasoning` field; this fix prevents the field from being silently dropped.
5. **#40477** – *fix(app): fall back to directory listing in project picker* (OPEN)  
   Resolves a blocker where first‑time users cannot open a project because the picker’s filesystem query fails.
6. **#40595** – *fix(app): sync session selection before prompts* (OPEN)  
   Ensures the selected agent, model, and reasoning variant are synchronized before prompt admission for both immediate and queued follow‑ups.
7. **#40378** – *refactor(app): migrate supported v2 APIs* (CLOSED)  
   Migrates session transport, catalog, file, project‑copy, workspace, PTY lifecycle, provider credentials, and MCP integrations to current V2 APIs.
8. **#36746** – *refactor(tui): remove subtle syntax styles* (CLOSED)  
   Removes the subtle syntax style generator and renders reasoning with the standard syntax style.
9. **#40567** – *fix(app): keep home sessions without opened projects* (CLOSED)  
   Preserves unfiltered home sessions when no local projects are open and uses the session directory as fallback project metadata.
10. **#40576** – *fix(core): continue interrupted responses* (OPEN)  
    Preserves output‑bearing attempts when a provider response ends unexpectedly and appends a synthetic user message to continue without repeating completed content.

## 5. Feature Request Trends
- **Usage transparency:** Strong demand for programmatic access to subscription usage (rolling/weekly/monthly) and clear, in‑client warnings before free‑tier exhaustion (#16017, #40584, #40588).
- **Provider/model expansion:** Requests to support new model APIs (DeepSeek Responses API on Go #39829) and retire deprecated model aliases (#40577).
- **Session reliability:** Improvements to sub‑agent visibility (#22233), handling of aborted streams (#37852), and resilience against provider deadlocks (#31122).
- **Cross‑platform parity:** Fixes for WSL terminal behavior (#20234), GNU screen clipboard (#28590), and consistent OAuth flows across regions (#40243, #39207).

## 6. Developer Pain Points
- **Initialization hangs:** `opencode run` intermittently stalls with no error output, forcing external timeouts (#38723).
- **OAuth callback failures:** Server‑side SQL errors when email is empty during GitHub OAuth (#39207); EU‑workspace model rejection (#40243).
- **Desktop performance/rendering freezes:** Electron renderer becomes unresponsive due to Solid.js reactive cycles, exacerbated by ResizeObserver thrashing and API retry storms (#40572).
- **Missing usage telemetry:** Free‑tier and Go‑plan users cannot see remaining quota or receive early warnings, leading to abrupt mid‑task cutoffs (#40588, #16017).
- **Terminal/clipboard inconsistencies:** Clipboard writes break under GNU screen (#28590); WSL reasoning output is line‑broken (#20234).

---
*Digest generated from GitHub data for anomalyco/opencode on 2026‑08‑05.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-05

## 1. Today's Highlights

Pi 0.83.0 continues to see active development focused on reasoning model reliability, with a new PR addressing `thinking_token_budget` for OpenAI-compatible endpoints to prevent empty-response runs. Multiple enterprise and provider-specific bugs surfaced around Copilot GHE compaction failures and DeepSeek role handling, while Windows path handling and WSL compatibility remain persistent pain points for the community.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#7547](https://github.com/badlogic/pi-mono/issues/7547) | How do you use Pi on Windows? What issues are you seeing? | petrroll | 13 | Centralized Windows feedback thread — critical for prioritizing OS-specific bug fixes and documentation. |
| [#7064](https://github.com/badlogic/pi-mono/issues/7064) | WSL absolute Windows paths are mishandled | lionkor | 12 | Directly impacts the `read`/`write`/`edit` toolchain; causes automatic fallback to CLI replacements, breaking smooth file operations. |
| [#5023](https://github.com/badlogic/pi-mono/issues/5023) | Terminal scrolls to beginning without reason | markokocic | 11 | Random scroll jumps during model reasoning degrade UX and disrupt workflow; closed but likely still affecting users. |
| [#7465](https://github.com/badlogic/pi-mono/issues/7465) | Add payload size to iTerm2 inline images | Trolann | 7 | `@xterm/addon-image@0.9.0` silently rejects images without a `size` param — breaks inline image rendering in modern terminals. |
| [#7413](https://github.com/badlogic/pi-mono/issues/7413) | Compaction fails on GitHub Copilot GHE enterprise accounts | timnee | 6 | Enterprise users hit an `unknown stamp` error on `/compact`; normal chat works, making this a silent data-loss risk for long sessions. |
| [#7553](https://github.com/badlogic/pi-mono/issues/7553) | Configurable thinking level/model for compaction | Saolence | 6 | Auto-compaction reuses the session's thinking level unconditionally, wasting tokens on summarization; community wants independent control. |
| [#6817](https://github.com/badlogic/pi-mono/issues/6817) | `find` returns no results for path patterns on Windows | Hotragn | 5 | Any pattern containing a path separator (e.g., `src/**/*.ts`) fails on Windows — blocks common file-discovery workflows. |
| [#7560](https://github.com/badlogic/pi-mono/issues/7560) | xAI Grok 4.5 missing from Copilot Business model list | dubchord | 5 | Closed — model availability issue for Copilot Business subscribers using custom provider URLs. |
| [#7528](https://github.com/badlogic/pi-mono/issues/7528) | TUI crashes when custom dialog line exceeds terminal width | ZYist | 4 | Uncaught exception instead of truncation; crashes the entire process, not just the widget. |
| [#7594](https://github.com/badlogic/pi-mono/issues/7594) | `node:sqlite` missing in release binary | icedream | 4 | Breaks `pi-total-recall` and any extension using the module; closed but signals a packaging gap. |

---

## 4. Key PR Progress

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| [#7638](https://github.com/badlogic/pi-mono/pull/7638) | Support `thinking_token_budget` on openai-completions | bnsd55 | OPEN | Fixes reasoning models exhausting `max_tokens` on thought alone, which previously caused premature run termination with no output. |
| [#7612](https://github.com/badlogic/pi-mono/pull/7612) | Add `size` param to iTerm2 image encoder | rwachtler | OPEN | Includes decoded byte count in OSC 1337 sequences, satisfying `@xterm/addon-image@0.9.0` and restoring inline image support. |
| [#7619](https://github.com/badlogic/pi-mono/pull/7619) | Resume failed turns via `/tree` selection | arajkumar | OPEN | Selecting an error-ended assistant entry in the conversation tree now retries the turn as a sibling branch instead of a dead end. |
| [#7597](https://github.com/badlogic/pi-mono/pull/7597) | Scrollable extension selector for long diffs in fullscreen | Snail-Turbo | OPEN | Wraps diff titles in `ScrollView` and pins yes/no actions so large diffs are reviewable without clipping. |
| [#7632](https://github.com/badlogic/pi-mono/pull/7632) | Retry transient management HTTP requests | petrroll | OPEN | Adds retries for idempotent management requests (pi.dev, GitHub releases, tools), addressing flaky network failures. |
| [#7624](https://github.com/badlogic/pi-mono/pull/7624) | Render Mermaid diagrams | xl0 | OPEN | Closes #7623 — enables in-UI Mermaid diagram rendering via the `grok-mermaid` library. |
| [#7602](https://github.com/badlogic/pi-mono/pull/7602) | Configurable summarization models | haoqixu | OPEN | Closes #7553 — allows per-session configuration of compaction/summarization models and thinking levels. |
| [#7571](https://github.com/badlogic/pi-mono/pull/7571) | Built-in Cortecs provider support | Henrik-3 | CLOSED | Adds European AI router [Cortecs](https://cortecs.ai) as a built-in provider via models.dev. |
| [#7610](https://github.com/badlogic/pi-mono/pull/7610) | LLM Gateway & DevPass providers | RATCHAW | OPEN | Adds [LLM Gateway](https://llmgateway.io) as a built-in `openai-completions` provider; replaces auto-closed #7480. |
| [#7621](https://github.com/badlogic/pi-mono/pull/7621) | Expose `get_argument_completions` via RPC | fan92rus | CLOSED | Enables embedded clients (e.g., pi-livecraft web UI) to surface slash-command argument completions. |

---

## 5. Feature Request Trends

- **Reasoning model finetuning:** Multiple requests围绕 compaction thinking budget (#7553), `thinking_token_budget` support (#7638), and reasoning_content preservation (#7586) point to growing adoption of reasoning models and the need for token-efficient summarization.
- **Provider diversity:** Community pushes for more built-in providers — Cortecs (#7571), LLM Gateway (#7610/#7480), Qwen Token Plan Individual (#7631) — indicating demand for alternative routing beyond OpenAI/Copilot.
- **Terminal UX maturity:** Inline images (#7465/#7612), Mermaid rendering (#7623/#7624), and fullscreen widget scrolling (#7597) show sustained interest in richer TUI capabilities.
- **Context file flexibility:** `AGENTS.override.md` per-directory override (#7642) reflects desire for granular, hierarchical prompt configuration.
- **IDE backend parity:** JetBrains support via pi-serena (#7641) continues the pattern of extending language-backend compatibility.

---

## 6. Developer Pain Points

| Theme | Recurring Issues |
|-------|-----------------|
| **Windows/WSL compatibility** | Path mishandling in WSL (#7064), `find` pattern failures on Windows (#6817), Windows skill-loading `RangeError` (#7427), centralized Windows feedback thread (#7547) |
| **Copilot/enterprise reliability** | Compaction failures on GHE (#7413, #7579), Grok 4.5 missing from model list (#7560), Copilot models empty after login (#7634), `baseUrl` dropped during compaction (#7579) |
| **TUI stability** | Dialog width crash (#7528), fullscreen keybinding consumption (#7574), scroll jump on viewport overflow (#7616), select pageUp/pageDown inconsistent (#7629), widget clipping in fullscreen dock (#7625) |
| **Reasoning model regression** | `reasoning_content` dropped from conversation history (#7586), compaction thinking budget inflexible (#7553), OpenAI-compatible endpoints timing out on reasoning-only turns (#7638) |
| **Tool/schema bugs** | Parallel tool batches losing results when one stalls (#7053), `validateToolArguments` coercing valid `null` (#7328), successful retries leaving red error lines (#7613) |
| **Runtime environment** | `node:sqlite` absent from release binary (#7594), crash on Node 20 due to undici CacheStorage requirement (#7601), Bun runtime not surfaced in `version` (#7244) |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-05

---

## 1. Today's Highlights

Qwen Code v0.21.6-preview.0 and v0.21.5-nightly were released with alpha readiness diagnostics for the browser extension and documentation for headless Goal workflows. The community is actively engaging with a proposal for deterministic tool-execution boundaries to build a trustworthy agent runtime (#8102), while several bugs around tmux flickering, MCP hangs, and session transcript persistence dominate the open issues.

---

## 2. Releases

**v0.21.6-preview.0** and **v0.21.5-nightly.20260805.32e274157**
- **feat(browser-ext):** Add alpha readiness diagnostics to help users troubleshoot the browser extension setup. ([PR #6739](https://github.com/QwenLM/qwen-code/pull/6739))
- **docs:** Document headless Goal workflows for users running Qwen Code without an interactive terminal.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | Deterministic tool-execution boundaries for a trustworthy agent runtime | Proposes keeping the LLM outside the trust boundary and making the runtime deterministically constrain, authorize, observe, and evaluate model actions — a foundational security architecture discussion with 17 comments. |
| [#8519](https://github.com/QwenLM/qwen-code/issues/8519) | Severe flickering in tmux | High-frequency visual bug reported by multiple users (also #8562); impacts Linux/terminal users significantly with 11 comments. |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | Bound multi-workspace daemon resource usage | The `qwen serve` daemon currently only enforces count-based limits; this issue calls for bounding bytes held by request bodies, WebSocket assembly, and other resource vectors. |
| [#8136](https://github.com/QwenLM/qwen-code/issues/8136) | Provider warning sanitizer truncates messages & leaks passwords | A security-relevant bug where `sanitizeProviderWarning` fails to strip credentials from URLs containing `@` in ports, leaking passwords in `/status` payloads. |
| [#8550](https://github.com/QwenLM/qwen-code/issues/8550) | `qwen mcp list` hangs indefinitely on unresponsive SSE servers | A practical blocker for users configuring MCP servers; the command can hang forever if the server accepts connection but never sends the `endpoint` event. |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | Post-abort turns not written to local session transcript | After an `APIUserAbortError`, subsequent conversation turns are silently dropped from the local transcript — a data-loss bug in ACP/Web bridge sessions. |
| [#8533](https://github.com/QwenLM/qwen-code/issues/8533) | Content[]/Part[] cannot encode per-provider reasoning-replay contracts | A foundational design issue: the current content model cannot safely represent per-provider reasoning/replay semantics, affecting cross-provider compatibility. |
| [#8557](https://github.com/QwenLM/qwen-code/issues/8557) | Terminal shrink reprints transcript blocks in scrollback | On macOS/Warp, shrinking the terminal window causes duplicate output in scrollback — a UI rendering regression. |
| [#8452](https://github.com/QwenLM/qwen-code/issues/8452) | Size-triggered microcompaction invalidates prompt cache | Microcompaction rewrites cached conversation prefixes on consecutive ToolResult turns, defeating the prompt cache and degrading performance. |
| [#8527](https://github.com/QwenLM/qwen-code/issues/8527) | Wrapped timeout errors drop original error code | Timeout errors surface as generic "Request timeout after Ns" instead of the original transport error code, preventing auto-retry logic from triggering. |

---

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#8529](https://github.com/QwenLM/qwen-code/pull/8529) | Resolve model modalities from API metadata | Ships a compact modality-only snapshot from models.dev, uses disk cache immediately, and refreshes remote metadata in the background — eliminating cold-start waits for model capability discovery. |
| [#8568](https://github.com/QwenLM/qwen-code/pull/8568) | Use Qwen CUA driver by default for Computer Use | Switches the built-in Computer Use backend from the external `trycua` driver to the vendored Qwen CUA driver (pinned at v0.17.0), with Qwen-owned binary and permission identities. |
| [#8507](https://github.com/QwenLM/qwen-code/pull/8507) | Add opt-in Mem0 memory writes | Extends the External Context integration with an optional Mem0 write variant, enabling persistent memory storage for conversation context. |
| [#8388](https://github.com/QwenLM/qwen-code/pull/8388) | `qwen review capture-tui` — evidence images for rendering claims | Phase 2 of the review toolchain: drives the code under review in a private tmux server and captures the pane as an image, enabling visual verification of terminal-rendering claims. |
| [#8568](https://github.com/QwenLM/qwen-code/pull/8564) | Sync vendored CUA Driver to v0.17.0 | Imports the SDK-owned runtime, Python/TypeScript UniFFI SDKs, typed browser automation, and per-session configs from upstream. |
| [#8445](https://github.com/QwenLM/qwen-code/pull/8445) | Allow Web Shell session refresh with daemon auth | Fixes a 401 on session deep-link refresh when `qwen serve` uses a bearer token, by loading the public HTML shell before authentication. |
| [#8353](https://github.com/QwenLM/qwen-code/pull/8353) | Let ESC cancel ongoing work before popping queued messages | ESC now cancels the active streaming request instead of being consumed by the input prompt's pop-queue logic, improving responsiveness. |
| [#8450](https://github.com/QwenLM/qwen-code/pull/8450) | Bound ACP textual tool-result payloads | Adds a 65,536 UTF-8 byte limit on textual tool-call updates in every status, preventing unbounded memory growth from large tool outputs. |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | Add Kimi and Xiaomi MiMo providers | First-class support for Kimi (Coding Plan, API Key CN/Intl) and Xiaomi MiMo (pay-as-you-go, CN/SG) in the `/auth` provider selection. |
| [#8565](https://github.com/QwenLM/qwen-code/pull/8565) | Keep DingTalk status cards continuous during runs | Fixes fragmented status cards by creating one continuous interactive card per task run, with streaming output and elapsed time refresh within the same card. |

---

## 5. Feature Request Trends

- **Trustworthy agent runtime:** The community is pushing for deterministic execution boundaries (#8102) that keep the LLM outside the trust zone — a recurring theme in security-focused discussions.
- **Multi-modal & omni input expansion:** PR #8512 extends S1 video-only upload to full image/audio/URL modalities with token-dimension transport guards, signaling strong interest in broader input support.
- **Provider diversity:** Adding Kimi and Xiaomi MiMo (#8368) and resolving model modalities from API metadata (#8529) reflects demand for richer provider ecosystems and dynamic capability discovery.
- **Memory & context persistence:** The Mem0 integration (#8507) and session transcript fixes (#8356) indicate users want reliable, persistent conversation state across sessions and providers.
- **Channel integrations:** Feishu form cards (#8567), Feishu contact label enrichment (#8566), and DingTalk card continuity (#8565) show active investment in Chinese enterprise messaging platforms.

---

## 6. Developer Pain Points

- **Terminal rendering bugs:** Tmux flickering (#8519, #8562) and scrollback duplication on window resize (#8557) are high-frequency complaints, especially among Linux/macOS power users.
- **MCP server reliability:** `qwen mcp list` hanging on unresponsive SSE servers (#8550) is a practical blocker for users managing multiple MCP configurations.
- **Session state loss:** Abort errors causing silent transcript drops (#8356) and `--resume` reconstructing dangling-unsigned-thought hazards (#8535) point to fragility in session management.
- **Resource unboundedness in daemon mode:** The multi-workspace daemon lacks byte-level resource caps (#8051, #8182), and ACP child processes incorrectly divide host memory (#8182), creating production reliability concerns.
- **Prompt cache invalidation:** Size-triggered microcompaction repeatedly rewrites cached prefixes (#8452), undermining performance gains from caching.
- **Error visibility:** Timeout and provider-warning sanitization bugs (#8136, #8527) mask root causes, making debugging difficult for end users.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-05

## 1. Today's Highlights

The v0.9.4 release train (#5135) remains the central focus, now 77 commits ahead of `main` with runtime API, MCP, and memory endpoints landing in parallel. Meanwhile, a cluster of performance-epic issues (#5249, #5248, #5245–#5247) has surfaced around the monolithic 682K-line `codewhale-tui` crate, with the maintainer explicitly calling for a "build-time lane" to stop the compile tax on every edit, commit, and test run.

---

## 2. Releases

No new releases in the last 24 hours. The v0.9.4 integration train (#5135) is in progress.

---

## 3. Hot Issues

| # | Title | Why It Matters | Reaction |
|---|-------|---------------|----------|
| #5249 | **Epic: v0.9.5 build-time lane** | The 682K-line `codewhale-tui` crate recompiles as a single unit on every change — a blocker for daily agent and contributor workflows. | Maintainer-authored; no comments yet — early discussion stage. |
| #5248 | **Shrink the 708-package build graph** | 95 build scripts + 52 proc-macro crates serialize on clean builds; 10+ deps compiled at 2–3 versions simultaneously. | Maintainer-authored; sets the scope for the build-epic. |
| #5245 | **Git commit forces full rebuild** | Every `git commit` invalidates the embedded SHA stamp, triggering a rebuild of both `tui` and `cli` even with no source changes. | Maintainer-authored; directly impacts agent loop latency. |
| #5247 | **25 integration-test binaries** | Each of the 25 test binaries links the full `codewhale-tui` graph plus dev-deps — 25 large link jobs per `cargo test`. | Maintainer-authored; test turnaround is a major pain point. |
| #5246 | **Split shipping profile from local release gate** | Fat LTO (`lto = true`, `codegen-units = 1`) is applied to every pre-push `--release` build, not just dist artifacts. | Maintainer-authored; simple config change with outsized impact. |
| #5244 | **Unknown model IDs silently degrade to 128K** | A residual bug from #5239 — unknown model IDs fall through to `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS` (128K) with no warning, causing 1M-window models to compact prematurely. | Maintainer-authored; directly referenced #5239 as root cause. |
| #5209 | **`File(action=edit)` accepts wrong params & reports fake success** | Using `new_str` instead of `replace` silently succeeds, forcing 3–5x re-edits per location — a critical correctness bug. | Open 3 days; 3 comments; users affected by false-positive edits. |
| #5241 | **Pricing endpoint returns 503** | After upgrading from 0.8.67 → 0.9.3, all sessions show `unverified_live_pricing` across every provider. Cost display is entirely broken. | Open 2 days; 1 comment; regresses a core UX feature. |
| #5005 | **Filesystem path whitelist for sandbox** | Xcode/DerivedData logs sit outside the workspace, but `sandbox_mode = "workspace-write"` blocks access — needs an allowlist mechanism. | Closed; 2 comments; resolved but highlights sandbox rigidity. |
| #5250 | **Only one API key can be saved** | Users switching between DeepSeek and GLM must re-fetch keys every time; no multi-provider key storage. | Open today; 1 comment; cross-provider users affected. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| #5135 | **v0.9.4 release train** | Open | 77 commits ahead of `main`; supersedes #5044. Core release PR bundling the 0.9.4 feature set. |
| #5229 | **Windows beginner guide (zh-CN)** | Open | New Chinese-language Windows onboarding doc with 4 real-operation screenshots; validated on Windows 10. |
| #5240 | **Surface real wait elapsed time in tool content** | Open | Bash `wait`/delta tool now exposes `duration_ms` in visible tool content instead of hidden metadata, fixing model's bias toward busy-polling. |
| #5242 | **Resume interrupted subagents from checkpoint** | Open | Fixes a dead-letter bug where `agents/followup` on `interrupted_continuable` children preserved the checkpoint but returned nothing that could actually resume the run. |
| #5234 | **Keep alternate scroll off during mouse capture** | Open | Mouse-wheel was toggling composer history instead of scrolling the transcript; now correctly disables xterm alternate-scroll while `EnableMouseCapture` is armed. |
| #5095 | **Re-quote Windows linker args containing spaces** | Closed | Fixed OpenHarmony SDK builds under paths with spaces (e.g. `D:\DevEco Studio\...\native`) where `%*` expansion stripped quotes from `--sysroot`. |
| #5192 | **Pin ratatui to 0.30.0** | Closed | `ratatui-core` 0.1.1+ issues blocking CPR queries that race the TUI event loop for crossterm's event-reader lock — pin restores stability. |
| #5225 | **Expose file/search/git/patch/shell tools over ACP** | Open | `session/prompt` previously only streamed text; now model-requested tool calls actually execute, enabling Zed and third-party ACP bridges to perform real code edits. |
| #5133 | **Persistent goal-loop state in runtime API** | Open | New `GET /v1/threads/{id}/goal` endpoint lets managed clients read active-goal state and drive lifecycle transitions through the runtime boundary. |
| #5238 | **MCP Registry discovery with registry-first selection** | Open | Before falling back to `exec_shell` or custom code, the model now consults a public MCP Registry for matching zero-environment stdio servers. |

---

## 5. Feature Request Trends

- **Build-performance decomposition** — The dominant trend: 6 interconnected issues (#5245–#5249, #5248) all targeting the same root cause — the monolithic `codewhale-tui` crate. The community and maintainer agree on a "build-time lane" epic.
- **Multi-provider / multi-key support** — Users running DeepSeek alongside GLM and other providers want persistent per-provider key storage (#5250) and better OAuth token hand-off (#5243).
- **Sandbox allowlisting** — Developers need granular path exceptions for build artifacts and logs outside the workspace (#5005).
- **ACP tool execution** — Bridge authors (Zed, third-party adapters) need ACP sessions to actually execute tool calls, not just stream text (#5225).
- **Context-window transparency** — Unknown model IDs silently degrading to 128K is a reliability concern; users want explicit fallback warnings (#5244, #5239).

---

## 6. Developer Pain Points

1. **Compile latency** — The 682K-line single-crate monolith means every edit, commit, test, and pre-push gate pays the full build tax. This is the #1 friction point across the contributor and agent communities.
2. **False-positive edits** — `File(action=edit)` accepting wrong parameter names and returning success (#5209) forces repeated manual re-edits and erodes trust in the tool's reliability.
3. **Pricing regression** — The 503 on the pricing endpoint (#5241) broke cost display across all providers after the 0.8.67 → 0.9.3 upgrade, a high-visibility regressions affecting billing transparency.
4. **Silent context compression** — 1M-window models compacting at 128K without warning (#5244, #5239) wastes context and surprises users who configured longer windows.
5. **OAuth token not auto-applied** — After a successful xAI device login, users must manually re-select the provider to activate the minted token (#5243), adding friction to the auth flow.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*