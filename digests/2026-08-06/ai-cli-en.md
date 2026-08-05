# AI CLI Tools Community Digest 2026-08-06

> Generated: 2026-08-05 22:43 UTC | Tools covered: 9

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



# Cross-Tool Comparison Report: AI CLI Ecosystem — 2026-08-06

## 1. Ecosystem Overview

The AI CLI tool landscape is entering a phase of rapid maturation, with all major players shifting focus from core functionality to reliability, security, and cross-platform parity. Multi-agent architectures have become a universal battleground, with every tool grappling with sub-agent stability, resource leaks, and permission enforcement. The ecosystem is simultaneously expanding its integration surface—MCP protocol support, IDE embeddings, and voice/multimodal inputs—while struggling with consistent desktop vs. CLI divergence and platform-specific regressions, particularly on Windows.

## 2. Activity Comparison

| Tool | Hot Issues (24h) | Key PRs (24h) | Release | Status |
|---|---|---|---|---|
| **Claude Code** | 10 | 10 | None | Stable, high community intensity |
| **OpenAI Codex** | 10 | 10 | v0.146.1 + alpha track | Rapid iteration (6 alpha releases) |
| **Gemini CLI** | 10 | 10 (5 merged) | None | Active security hardening |
| **GitHub Copilot CLI** | 10 | 1 (open merge) | v1.0.79-4 | Minor release, MCP friction |
| **Kimi Code CLI** | 4 | 2 | None | Low volume, targeted fixes |
| **OpenCode** | 10 | 10 | v1.18.14 | V2 migration in progress |
| **Pi** | 10 | 10 | None | Steady, incremental improvements |
| **Qwen Code** | 10 | 10 | v0.21.6 + Desktop v0.1.0 | Major desktop milestone |
| **DeepSeek TUI** | 4 | 12+ (train) | v0.9.4 (in-progress, 77 commits) | Heavy integration push |

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Needs |
|---|---|---|
| **Sub-agent reliability** | Claude Code, Gemini CLI, Codex, OpenCode, DeepSeek TUI | Turn-limit handling, permission enforcement, checkpoint/resume, runaway prevention, correct success/failure reporting |
| **Token/cost visibility** | Claude Code, Codex, Pi | Pre-operation cost estimation, autonomous context management, per-session limits, transparent usage telemetry |
| **MCP protocol maturity** | Claude Code, Codex, Copilot CLI, Gemini CLI, Qwen Code, DeepSeek TUI | Graceful degradation for non-compliant servers, policy enforcement transparency, OAuth/3LO reliability, server lifecycle management via API |
| **Session memory & persistence** | OpenCode, Codex, Kimi Code CLI, DeepSeek TUI | Cross-session context retention, side-chat persistence, structured checkpoints, configurable memory budgets |
| **Cross-platform parity** | All tools | Windows stability (recurring pain point across 6 tools), macOS binary compatibility (AVX2, ELF/Mach-O mismatches), Linux Wayland support |
| **Multimodal input** | Pi, Qwen Code, OpenCode | Video/audio in prompts, inline terminal images, voice ACP clients, audio bridge for unsupported models |
| **IDE/embedded integration** | OpenCode, Codex, Kimi Code CLI, DeepSeek TUI | VS Code extension demand, ACP protocol tool execution, Zed/bridge integration, process management in PyCharm |

## 5. Community Momentum & Maturity

**High momentum, rapid iteration:**
- **OpenAI Codex** — 6 alpha releases in a single cycle, aggressive multi-agent feature push, but community friction is high (Luna subagent regressions, Windows stability). Signal: shipping fast, stabilizing slower.
- **Qwen Code** — Launched its first stable Desktop v0.1.0, added 2 new providers (Kimi, Xiaomi MiMo), and is actively hardening security. The shift from Electron to Tauri signals product maturation.
- **DeepSeek TUI** — The v0.9.4 release train (77 commits) represents the most concentrated integration effort across all tools, with a comprehensive Runtime API expansion covering memory, goals, skills, and MCP lifecycle endpoints.

**Steady maturity:**
- **Claude Code** — No releases but intense community activity around stability regressions. The closed-issue cycle (all 10 hot issues resolved) suggests responsive maintainers, but the depth of bugs (PTY leaks, sub-agent runaway loops) indicates growing-pain scaling.
- **OpenCode** — v1.18.14 shipped with practical improvements; V2 migration PRs show architectural progress. The #1 issue (official VS Code extension, 134 👍) reveals a community that wants deeper IDE embedding over new features.
- **Pi** — Incremental but well-scoped PRs (event-bus leak fix, thinking-token-budget support, Qwen provider). The community is smaller but engaged, with clear prioritization around reliability over features.

**Emerging / lower volume:**
- **Kimi Code CLI** — Only 4 issues updated, but the high-severity bugs (silent aborts with side effects, 500K-token reliability wall) suggest a tool still finding its stability footing for production agentic workflows.
- **GitHub Copilot CLI** — v1.0.79-4 is a minor release; the community pain is concentrated on MCP protocol friction and terminal rendering, not feature gaps. Signal: the core product works, but the integration layer is fragile.

## 6. Trend Signals

**1. Multi-agent is the front line — and it's broken everywhere.** Every tool community reports sub-agent failures: runaway loops (Claude Code), turn-limit misreporting (Gemini CLI), cross-model incompatibility (Codex), checkpoint dead letters (DeepSeek TUI), and hook bypasses (Copilot CLI). The community is demanding permission-respecting, observable, and bounded agent delegation. Tools that solve this reliably will gain significant trust advantage.

**2. Windows is the canary for ecosystem health.** Six of seven tools report Windows-specific regressions this cycle: WSL Git detection (Codex), native crashes (Copilot CLI, OpenCode), path URI case-sensitivity (Codex), desktop copy-button failure (Qwen Code), and process-spawning OOM (OpenCode). Any tool claiming cross-platform parity should treat Windows stability as a leading indicator.

**3. Security hardening is shifting from reactive to proactive.** Gemini CLI patched an SSRF vulnerability and a shell variable expansion bypass in the same cycle. Qwen Code flagged two P1/P2 security issues in its shell classifier and credential sanitizer. Claude Code is adding cost-confirmation guardrails. The trend: tools are moving from "ship and patch" to "ship with bounded permissions and transparent error surfaces."

**4. The MCP protocol is immature but universally adopted.** Every major tool supports MCP, but community pain is consistent: non-compliant servers cause hangs (Qwen Code, Copilot CLI), policy blocks are opaque (Copilot CLI), and server discovery failures are treated as fatal errors rather than graceful no-ops. The Runtime API expansion in DeepSeek TUI (HTTP-level MCP lifecycle management) may become a de facto standard other tools follow.

**5. Long-context agent workflows are hitting a reliability wall.** Kimi Code CLI reports sharp degradation at ~500K tokens. Claude Code users demand autonomous context clearing. Qwen Code is adding evidence checkpointing and bounded transcript pagination. The community signal is clear: users are running agents on multi-hour, high-context workloads, and the tools are not yet optimized for that regime. Expect tooling around context budgeting, loop detection, and graceful degradation to become a key differentiator.

**6. Desktop-first is replacing CLI-first for mainstream adoption.** Qwen Code's Tauri desktop launch, OpenCode's V2 migration, and persistent complaints about Desktop-vs-CLI divergence (Claude Code exit 143, Qwen Code copy-button regression) indicate the product frontier is shifting from terminal to desktop app. Tools that nail the desktop experience while maintaining CLI parity will capture the broader developer audience.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
**Data as of 2026-08-06 | Source: anthropics/skills**

---

## 1. Top Skills Ranking

| # | PR | Skill / Topic | Status | Discussion Highlights |
|---|-----|--------------|--------|----------------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator fix: `run_eval.py` recall=0%** | Open | Critical bug affecting the entire skill-creation pipeline — `run_eval.py` reports 0% recall for every description, causing the optimization loop to tune against noise. Multiple cross-refs to issues #556 and #1169. |
| 2 | [#492](https://github.com/anthropics/skills/issues/492) | **Trust-boundary abuse: community skills under `anthropic/` namespace** | Open (Issue, 43 comments) | Security concern — community skills impersonating official Anthropic skills, risking elevated permissions. Highest-comment issue. |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography skill** | Open | Addresses orphan words, widow paragraphs, numbering misalignment in AI-generated documents. |
| 4 | [#538](https://github.com/anthropics/skills/pull/538) | **pdf skill: case-sensitive file reference fix** | Open | Fixes 8 broken references (`REFERENCE.md` → `reference.md`, etc.) that break on case-sensitive filesystems. |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Open | Adds OpenDocument Format (`.odt`, `.ods`) creation, filling, parsing-to-HTML support — fills a gap vs. the existing docx skill. |
| 6 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design skill improvement** | Open | Revisions for clarity and actionability — ensures instructions are followable within a single conversation. |
| 7 | [#1367](https://github.com/anthropics/skills/pull/1367) | **Self-audit skill (v1.3.0)** | Open | Mechanical file verification + four-dimension reasoning quality gate; universal across projects and models. |
| 8 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns skill** | Open | Comprehensive testing coverage: Testing Trophy model, AAA pattern, React component testing, edge cases. |

---

## 2. Community Demand Trends

From the issue corpus, four high-demand directions emerge:

- **Skill-creator pipeline reliability** — Issues #556, #1169, #1298, #1099, #1050, #1323, #1261 all converge on the same pain point: the evaluation and description-optimization tooling is broken on Windows and produces unreliable metrics. The community wants a stable skill-authoring workflow.

- **Office-document authoring** — ODT (#486), typographic quality (#514), DOCX bookmark collision fix (#541), and whitespace preservation (#12) signal strong demand for robust document-skill coverage beyond the current docx-only skill.

- **Quality & safety gateways** — Issues #1385 and PR #1367 propose pre-delivery reasoning audits; PR #83 adds a `skill-quality-analyzer` meta-skill. Users want built-in verification before Claude delivers output.

- **Organization-level sharing** — Issue #228 (8 👍) requests org-wide skill sharing; #189 (9 👍) flags duplicate skills from overlapping plugin installs. The demand is for curated, deduplicated skill distribution at the team/org level.

---

## 3. High-Potential Pending Skills

These active PRs are not yet merged and address real pain points — likely candidates for near-term landing:

| PR | Skill | Why It's Close |
|----|-------|---------------|
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | Small, surgical change (8 line references); low risk, high correctness impact. |
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator YAML validation** | One-line pre-parse guard against silent YAML truncation in descriptions. |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel retro-game skill** | Fully self-contained; 4+ months open with no blockers noted. |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene skill** | Directly addresses #1417; authored by a research lab with community-requested framing. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert skill** | Covers ISCC-NBS, Munsell, OKLCH, CAM16 — specialized domain with clear trigger language. |
| [#1323](https://github.com/anthropics/skills/pull/1323) | **skill-creator trigger-detection fix** | Blocks the entire description-optimization loop; high-impact bug fix. |
| [#1261](https://github.com/anthropics/skills/pull/1261) | **skill-creator eval isolation fix** | Fixes parallel-worker collision writing into live project `.claude/commands/`; prerequisite for #556. |

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is a **reliable, bug-free skill-authoring pipeline** — every high-activity issue and PR clusters around the `skill-creator` toolchain (eval triggers, recall metrics, Windows compatibility, YAML validation), indicating that the bottleneck for skill adoption isn't idea generation but the ability to create and iterate on skills with confidence.

---



# Claude Code Community Digest — 2026-08-06

## Today's Highlights
No new releases landed in the past 24 hours, but community activity remains intense around platform-specific stability regressions—most notably a macOS Cowork crash caused by an erroneously downloaded Linux binary and a sub-agent exponential fan-out bug that silently exhausts usage limits. Several PRs targeting plugin-dev tooling robustness and Cowork SSL handling were also opened.

## Releases
None in the last 24 hours.

## Hot Issues

1. **[Bug] Cowork downloads Linux binary on macOS Intel (exit 132)** — [#48827](https://github.com/anthropics/claude-code/issues/48827) · 22 comments · 👍 4 · *Closed*
   The most commented issue this cycle: Cowork fetches an ELF Linux executable instead of a macOS Mach-O binary, crashing with SIGILL on Intel Macs. High-impact because it blocks the entire Cowork workflow on a major platform.

2. **[Feature] Claude clears its own context** — [#21132](https://github.com/anthropics/claude-code/issues/21132) · 10 comments · 👍 15 · *Closed*
   The highest-upvoted issue, requesting that Claude autonomously reset its context window during long sessions. Strong community signal that token management is a top priority.

3. **[Bug] Desktop exit 143 on cycles past ~5 min** — [#59989](https://github.com/anthropics/claude-code/issues/59989) · 8 comments · *Closed*
   Bare CLI runs fine with the same binary and model; the Desktop wrapper terminates after ~5 minutes with exit 143 (SIGTERM). Suggests a Desktop-specific process-lifecycle bug.

4. **[Bug] iOS keyboard covers Send button after voice dictation** — [#61930](https://github.com/anthropics/claude-code/issues/61930) · 8 comments · 👍 5 · *Closed*
   In the iOS Code tab (Remote Control), the on-screen keyboard blocks the Send button post-dictation with no dismiss path. Directly blocks mobile usage.

5. **[Bug] HTTP 529 rendered as "Rate limited" and hard-fails parallel sessions** — [#68502](https://github.com/anthropics/claude-code/issues/68502) · 6 comments · *Closed*
   Parallel subagent runs misclassify transient 529 errors as rate limits and abort without backoff, rather than retrying gracefully. Misleading error messages compound the problem.

6. **[Bug] .mcpb extension tools never reach regular Chat on Windows** — [#70397](https://github.com/anthropics/claude-code/issues/70397) · 5 comments · *Closed*
   An enabled `.mcpb` desktop extension reports its tools on `initialize` + `tools/list`, but the model never receives them in Chat. Confirmed working via `claude_desktop_config.json` but broken in the regular extension path.

7. **[Bug] Background sub-agents recursively self-spawn → usage limit exhaustion** — [#69332](https://github.com/anthropics/claude-code/issues/69332) · 5 comments · *Closed*
   High-severity: general-purpose sub-agents spawn infinitely, burning the entire session quota. The runaway continued even after the host session exited. Community concern is significant.

8. **[Enhancement] Surface estimated token cost + require confirmation for costly skills** — [#68703](https://github.com/anthropics/claude-code/issues/68703) · 4 comments · 👍 2 · *Closed*
   Skills like `deep-research` can fan out 15–20 subagents and consume ~25% of a session's quota before the user intervenes. Directly addresses the pattern in #69332.

9. **[Bug] `/fork` context contaminates main session on switch-back** — [#70399](https://github.com/anthropics/claude-code/issues/70399) · 2 comments · 👍 3 · *Closed*
   Switching back from a `/fork` causes the main session to receive and respond to the fork's topic, interrupting ongoing work. Session isolation is clearly broken.

10. **[Bug] Bash tool leaks PTY master FDs, exhausting `kern.tty.ptmx_max`** — [#70406](https://github.com/anthropics/claude-code/issues/70406) · 1 comment · 👍 1 · *Closed*
    Each Bash invocation opens a `/dev/ptmx` master but never closes the FD. Long sessions exhaust the kernel pool, breaking Terminal.app and any app using `forkpty`. A resource-leak bug with compounding severity.

## Key PR Progress

1. **Fix self-signed cert error in Cowork** — [#84138](https://github.com/anthropics/claude-code/pull/84138)
   Workaround for Bun not loading system certificates on macOS, which surfaces as "Self-signed certificate detected" even without a proxy.

2. **Fix `--comment` flag for `/code-review` GitHub posting** — [#16929](https://github.com/anthropics/claude-code/pull/16929)
   Resolves #16606: inline comments were posted to GitHub by default despite README stating terminal output is the default.

3. **Fix plugin-dev: limit frontmatter parsing** — [#84004](https://github.com/anthropics/claude-code/pull/84004)
   Rejects files without proper opening/closing `---` markers; prevents range-based `sed` from restarting at later horizontal-rule lines in Markdown bodies.

4. **Fix scripts: propagate top-level failures** — [#84003](https://github.com/anthropics/claude-code/pull/84003)
   Ensures duplicate-maintenance scripts return non-zero when rejected, rather than silently resolving.

5. **Fix scripts: validate `gh` flag values** — [#83999](https://github.com/anthropics/claude-code/pull/83999)
   Rejects incomplete commands like `gh issue list --limit` before delegation, fixing a parser loophole.

6. **Fix scripts: validate label option values** — [#83995](https://github.com/anthropics/claude-code/pull/83995)
   Ensures `--add-label` / `--remove-label` receive a label name; previously aborted with unbound-variable errors under `set -u`.

7. **Fix scripts: reject self-referential duplicates** — [#83993](https://github.com/anthropics/claude-code/pull/83993)
   Prevents `comment-on-duplicates.sh` from proposing an issue as its own duplicate and posting a self-referential comment.

8. **Fix plugin-dev: assert expected hook decision** — [#83992](https://github.com/anthropics/claude-code/pull/83992)
   Adds `--expect allow|deny|ask` to `test-hook.sh` so hooks that allow an operation they should deny are caught.

9. **Fix plugin-dev: report missing `jq` dependency** — [#83990](https://github.com/anthropics/claude-code/pull/83990)
   Checks for `jq` before first use and reports the missing dependency clearly instead of misreporting valid input as malformed JSON.

10. **Add 14 Revolutionary Claude Code Plugins** — [#41661](https://github.com/anthropics/claude-code/pull/41661)
    Community-contributed plugin pack covering security, performance, architecture, and fullstack automation; adds 27 total plugins to the marketplace manifest.

## Feature Request Trends
- **Token/cost visibility and guardrails** — Multiple issues (#21132, #68703, #69332) converge on the need for proactive cost estimation, user confirmation before expensive operations, and autonomous context management.
- **Session isolation reliability** — Fork contamination (#70399), sub-agent fan-out (#69332), and PTY leaks (#70406) point to a broader demand for robust session boundaries.
- **MCP/extension tool delivery** — The `.mcpb` silent-failure bug (#70397) and Cowork SSL issues (#84138) show the extension toolchain needs more reliable transport and debugging.
- **Cross-platform parity** — Windows mount truncation (#70414), VS Code MCP path resolution (#70393), and macOS TUI regressions (#63500, #80131) indicate platform-specific feature gaps remain a recurring theme.

## Developer Pain Points
- **Platform-specific binary mismatches** — The macOS Cowork crash from a Linux ELF download (#48827) and the Windows workspace mount truncation (#70414) reflect fragile multi-platform distribution and mount-layer handling.
- **Resource leaks under sustained use** — PTY FD leaks (#70406), busy-loop CPU spin after sleep/hibernate (#67664), and sub-agent runaway loops (#69332) all share a pattern: long-running or multi-session workloads degrade unpredictably.
- **Error message ambiguity** — HTTP 529 masquerading as a rate limit (#68502), generic "Connection closed mid-response" (#70295, #70417), and missing terminal input echo (#70435) make diagnosis difficult without deep log inspection.
- **Desktop vs. CLI divergence** — Several bugs (#59989, #70416) exist only in the Desktop wrapper while the bare CLI works correctly, suggesting the Desktop process lifecycle and environment injection are fragile surfaces.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-06

## 1. Today's Highlights

Codex 0.146.1 shipped with safer auto-review defaults for cyber-capable models, while the 0.147.0-alpha track continues rapid iteration through six beta releases. Community attention is dominated by multi-agent compatibility regressions with gpt-5.6-luna, Windows stability issues, and ongoing friction in the remote/mobile experience.

---

## 2. Releases

**rust-v0.146.1** ([Changelog](https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1))
Backports safer cyber-model auto-review defaults and adds terminal permission-change explanations. See #37057.

**rust-v0.147.0-alpha.12 / .11 / .10 / .6.5** — incremental alpha releases advancing the next minor track.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community |
|---|-------|---------------|-----------|
| [#34700](https://github.com/openai/codex/issues/34700) | `spawn_agent` rejects gpt-5.6-luna with `multi_agent_v2` | Blocks multi-agent workflows on the latest Luna model; 30 👍 signals broad impact. | 11 comments · 30 👍 |
| [#34301](https://github.com/openai/codex/issues/34301) | GPT Sol/Terra threads can't spawn Luna subagents | Cross-model subagent incompatibility in the multi-agent v2 pipeline. | 8 comments · 29 👍 |
| [#26227](https://github.com/openai/codex/issues/26227) | Persist side chats as child threads | Side chats are a beloved long-running-workflow pattern but are ephemeral by design; persistence would preserve session context across restarts. | 9 comments · 21 👍 |
| [#23527](https://github.com/openai/codex/issues/23527) | iOS mobile doesn't surface SSH remote projects | Breaks the remote-coding workflow for mobile users; Mac host sees projects but mobile client doesn't. | 11 comments · 18 👍 |
| [#35119](https://github.com/openai/codex/issues/35119) | Windows WSL marks valid repos as non-Git ("Git is unavailable") | Regression in 26.721.3404; WSL ext4 repos are incorrectly rejected, blocking all Git-based operations. | 16 comments · 14 👍 |
| [#27117](https://github.com/openai/codex/issues/27117) | Windows standalone update fails from pwsh | `PSModulePath` leakage from pwsh into `powershell.exe` causes `Get-FileHash` to fail during updates. | 12 comments · 11 👍 |
| [#35659](https://github.com/openai/codex/issues/35659) | Computer Use leaves ScreenCaptureKit streaming at ~56 FPS | Stale stream after session end drives WindowServer to 50–60% CPU / 59% GPU on macOS — a serious resource leak. | 3 comments |
| [#28643](https://github.com/openai/codex/issues/28643) | File-reference line links unreliable in Desktop | Clicking a line-number link often fails to jump, degrading the code-review experience. | 8 comments · 7 👍 |
| [#37161](https://github.com/openai/codex/issues/37161) | Severe false positives in cybersecurity request filtering | Legitimate security-research prompts (fuzzing, static analysis, debugging) are being blocked; conflicts with the 0.146.1 safety backport. | 3 comments · 1 👍 |
| [#37170](https://github.com/openai/codex/issues/37170) | Suspected silent model routing regression | Users report 5.5 High behaving like 5.6 Sol Max after an Aug 5 rollout — raises transparency and reproducibility concerns. | 1 comment |

---

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#37174](https://github.com/openai/codex/pull/37174) | Centralize skill invocation helpers in `codex-skills` | Moves tool-mention parsing, skill-name counting, and implicit-invocation detection into a single public API; decouples detection from `SkillLoadOutcome`. |
| [#37128](https://github.com/openai/codex/pull/37128) | Centralize tool approval handling in `Session` | Consolidates permission hooks, reviewer routing, approval caching, and user-request flows into the session-level approval pipeline; runtimes now emit `ApprovalAction` values. |
| [#37114](https://github.com/openai/codex/pull/37114) | Add per-session code-mode execution limits | Introduces `create_session_with_limits` and session-scoped `max_yield_time_ms` for execute/wait yields; negotiates support with remote code-mode hosts. |
| [#37168](https://github.com/openai/codex/pull/37168) | Bound remote MCP handshake HTTP requests | Prevents serial-executor blocking when a streamable HTTP MCP handshake times out while its executor-backed request continues running. |
| [#37167](https://github.com/openai/codex/pull/37167) | Expose session sources to MCP contributors | Adds `session_source()` to `McpServerContributionContext` so thread-scoped MCP resolution can propagate `SessionSource` through setup, per-step resolution, and runtime refreshes. |
| [#37151](https://github.com/openai/codex/pull/37151) | Coalesce concurrent Git status scans | Shares an in-flight `git status --porcelain` among concurrent workspace-metadata requests for the same repo root, reducing redundant I/O. |
| [#37149](https://github.com/openai/codex/pull/37149) | Project orchestrator skills through world state | Moves the orchestrator skill catalog into its own `orchestrator_skills` world-state section for incremental cross-turn updates; discovers executor/orchestrator/host catalogs together. |
| [#37154](https://github.com/openai/codex/pull/37154) | Use Azure Key Vault for macOS notarization | Keeps the App Store Connect private key in Azure Key Vault instead of exporting it as a base64 `.p8` secret to release runners. |
| [#37129](https://github.com/openai/codex/pull/37129) | ASCII-case-insensitive Windows path URI comparisons | `PathUri` equality, hashing, `starts_with`, and `relative_to` now ignore ASCII case for Windows drive/UNC paths while preserving POSIX case-sensitivity. |
| [#37134](https://github.com/openai/codex/pull/37134) | Report prompt image resizing to the model | New `image_resize_notice` feature (disabled by default) appends a developer message identifying each resized image and its original vs. prepared dimensions. |

---

## 5. Feature Request Trends

- **Session & context persistence** — Users repeatedly ask for side-chat persistence (#26227), structured cost-aware context checkpoints (#36721), and the ability to fork conversations from transcript messages (#13087). The common thread: losing conversational state across restarts is a major pain point.
- **Remote/mobile workflow maturity** — Four issues (#23527, #37142, #33358, #25202) highlight gaps in the remote-coding experience: missing SSH project visibility on mobile, no file-download support, and broken media rendering. The mobile remote product is clearly a growth area with unresolved foundational gaps.
- **Multi-agent cross-model compatibility** — Issues #34700 and #34301 both point to Luna subagent support breaking under `multi_agent_v2`, suggesting the team should prioritize model-compatibility matrix testing for the multi-agent pipeline.
- **Transparency & trust** — The suspected silent model routing (#37170) and false-positive cybersecurity filtering (#37161) both reflect community concern about opaque model behavior and overzealous safety gates.

---

## 6. Developer Pain Points

- **Windows stability regressions** — At least five issues (#35119, #27117, #37029, #32516, #37172) in the last 24h touch Windows-specific bugs: WSL Git detection, update failures, Computer Use crashes, sustained CPU loops, and desktop redraw freezes. Windows remains the most fracture-prone platform.
- **Multi-agent model compatibility** — The Luna subagent regressions (#34700, #34301) indicate that model-specific capability flags are not being propagated correctly through the multi-agent v2 pipeline, causing silent failures for users who rely on cross-model agent spawning.
- **Computer Use resource leaks** — The ScreenCaptureKit leak (#35659) and interface-recognition issues (#37092, #34419) suggest the Computer Use plugin needs stronger lifecycle management and cross-application window enumeration.
- **Authentication & connectivity fragility** — Notion connector 401s persisting after reconnect (#24848), Chrome native-host manifest pointing to missing paths after reinstall (#37159), and managed-auth enforcement gaps (#37132) all point to brittle credential and plugin bootstrapping paths.
- **Observability gaps** — Silent token-total skipping when `response.completed` lacks a usage block (#37138) and the suspected model-routing regression (#37170) both reflect a lack of transparent telemetry, making it hard for users to detect when something is silently wrong.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-06

## 1. Today's Highlights

No new releases landed in the past 24 hours, but the repository saw significant security and reliability activity: three merged PRs addressed agent session corruption bugs (message fusing, quota-fallback tool loss), while two open PRs target critical security vulnerabilities — an SSRF flaw in web-fetch and a shell variable expansion bypass. The community continues to push for more resilient subagent behavior, with multiple open issues around generalist hangs, browser agent failures, and Auto Memory retry loops.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Response |
|---|-------|---------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Subagents silently claim success when they hit the turn limit, masking real failures from the user and corrupting the agent's state machine. | 12 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | The generalist agent can deadlock indefinitely on simple tasks (e.g., folder creation), forcing manual cancellation. Workaround: disable subagents. | 8 comments, **8 👍** |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell commands stuck at "Waiting input" | CLI commands that should complete instantly leave Gemini showing "Awaiting user input" even after the shell process exits — a persistent UX reliability bug. | 4 comments, 3 👍 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Linux users on Wayland cannot use the browser agent at all; it terminates immediately with a GOAL reason, blocking a core agent type. | 4 comments, 1 👍 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Sessions the extraction agent judges as low-signal are never marked processed, causing them to be re-surfaced repeatedly and degrading memory quality. | 5 comments |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | Subagents running without explicit permission since v0.33.0 | A regression caused subagents to activate despite being disabled in configuration, raising concerns about unexpected behavior and token usage. | 3 comments |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides | Configuration in `settings.json` (e.g., `maxTurns`) is silently ignored by the browser agent, making it impossible to tune via config files. | 3 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction and reduced Auto Memory logging | Secrets may already be present in the model context before the extraction agent redacts them; the team is tracking a fix for deterministic redaction. | 4 comments |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent resilience: session takeover & lock recovery | The browser agent uses a fail-fast strategy on locked profiles; users want automatic session takeover so persistent browser sessions survive crashes and restarts. | 4 comments |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | Custom skills are ignored unless explicitly instructed, reducing the value of the agent's extensibility system. | 6 comments |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#28700](https://github.com/google-gemini/gemini-cli/pull/28700) | Stop a new user message fusing into an unanswered tool response | ✅ Merged | Fixes the "model finishes your sentence instead of answering" bug where interrupted tool calls caused the next user message to be merged into the previous turn. |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | Repair `/compress` session reload and quota-fallback tool response loss | ✅ Merged | Two fixes: `/compress` no longer fails with session-data load errors, and quota-limit errors no longer corrupt tool responses. |
| [#28670](https://github.com/google-gemini/gemini-cli/pull/28670) | Correct fallback on model capacity errors for GCA agent mode | ✅ Merged | GCA agent mode no longer loops infinitely on `MODEL_CAPACITY_EXHAUSTED` (HTTP 429); it now falls back to alternative models (e.g., Flash). |
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | Preserve `functionCall` `thoughtSignature` when stripping thoughts | ✅ Merged | Fixes v0.53.0 regression causing `API Error 400: Function call is missing a thought_signature` by preserving the signature during thought stripping. |
| [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) | Unwrap and parse nested gaxios streaming errors | 🔄 Open | Improves error parsing for nested streaming errors from the HTTP client, ensuring quota/rate-limit errors surface correctly. |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | Dynamically resolve Cloud Workstations proxy redirect URI for OAuth | 🔄 Open | Fixes OAuth auth flows in Cloud Workstations VMs where the statically-configured `localhost` redirect URI is unreachable from the remote browser. |
| [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | Forward termination signals to relaunched child process | 🔄 Open | Ensures `kill -TERM <bootstrap-pid>` takes down the supervised child process instead of orphaning it. |
| [#28677](https://github.com/google-gemini/gemini-cli/pull/28677) | Add timeout to `IdeClient.getInstance()` process traversal | 🔄 Open | Races `getIdeProcessInfo()` against a 3-second timeout so the TUI no longer hangs on "Initializing..." in bare terminals. |
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | Resolve SSRF vulnerability in `web-fetch.ts` | 🔄 Open | Fixes [#28555](https://github.com/google-gemini/gemini-cli/issues/28555) by using async DNS resolution so hostnames resolving to internal IPs (e.g., `169.254.169.254`) are blocked. |
| [#28691](https://github.com/google-gemini/gemini-cli/pull/28691) | Block `$VAR` and `${VAR}` variable expansion bypass | 🔄 Open | Closes an incomplete security check in `detectBashSubstitution()` / `detectPowerShellSubstitution()` that allowed shell variable expansion to bypass the gate added for GHSA-wpqr-6v78-jr5g. |

---

## 5. Feature Request Trends

- **Resilient subagent recovery** — Multiple issues (#22323, #22232, #21409) call for subagents that survive turn limits, handle lock conflicts gracefully, and stop retrying indefinitely.
- **AST-aware tooling** — Epic [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) and follow-up [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) explore using AST-aware reads and codebase mapping (tilth/glyph) to reduce token waste and improve navigation accuracy.
- **Zero-dependency OS sandboxing** — Issue [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) proposes sandboxing that lets the model's native bash affinity shine without compromising security.
- **Auto Memory quality** — A cluster of issues (#26522, #26523, #26525, #26516) from author SandyTao520 targets deterministic redaction, invalid patch quarantine, and low-signal session deduplication.
- **Subagent observability** — [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) requests subagent trajectories be exposed via `/chat share`, and [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) asks for subagent context in bug reports.

---

## 6. Developer Pain Points

1. **Subagent unreliability** — The generalist agent hanging (#21409), subagents misreporting completion status (#22323), and subagents activating without permission (#22093) are the top recurring complaints. Users want predictable, permission-respecting agent delegation.
2. **Shell / terminal UX glitches** — Commands stuck at "Waiting input" (#25166), terminal corruption after external editor exits (#24935), and broken terminal resize behavior (#21924) create a fragile CLI experience.
3. **Browser agent instability** — Failures on Wayland (#21983), ignored config overrides (#22267), and lack of session recovery (#22232) make the browser agent unreliable for Linux and persistent-session users.
4. **Auto Memory quality** — Indefinite retry loops on low-signal sessions (#26522), silent invalid patches (#26523), and redaction timing concerns (#26525) undermine trust in the memory system.
5. **Security hardening** — Two active PRs (#28557, #28691) and an open issue (#22672) on discouraging destructive behavior show the community is sensitive to agent-caused damage (accidental `git reset --force`, workspace pollution from tmp scripts in #23571).
6. **Config not respected** — Beyond the browser agent (#22267), users report that custom skills and subagents are ignored by the main model unless explicitly prompted (#21968), and symlinked agent files aren't recognized (#20079).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-06

## 1. Today's Highlights

Pre-release **v1.0.79-4** drops with worktree session support and a refined pinned-prompt rendering strategy that reduces timeline height on terminals under 30 rows. Community attention is dominated by MCP protocol friction—multiple blockers around policy enforcement, OAuth 3LO, and Azure DevOps remotes—plus a high-upvote regression on the alt-screen layout.

## 2. Releases

**v1.0.79-4** ([Link](github/copilot-cli))
- New: `/worktree new` launches a session inside a freshly created worktree, enabling parallel contexts without manual directory management.
- Improved: the pinned prompt is now pinned one row higher (in the tab-bar-reserved row), preserving its visual shape while freeing one timeline row. It stays off by default on terminals shorter than 30 rows to avoid crowding output.

## 3. Hot Issues

| # | Title | Why It Matters | Community |
|---|-------|---------------|-----------|
| **#1799** | How to turn off alt-screen views? | The alt-screen feature—introduced recently—has caused widespread layout breakage. Users want a toggle back to the prior mode. | 8 👍 · 12 comments ([Link](github/copilot-cli/issues/1799)) |
| **#3172** | "Somebody else is owning the clipboard" error | Clipboard conflict message corrupts the status line and breaks terminal layout after cross-app copy actions. | 7 👍 · 2 comments ([Link](github/copilot-cli/issues/3172)) |
| **#4005** | Copilot billing entity isn't selected | Enterprise users on v1.0.65 can no longer save memories; everything else functions, pointing to a billing-entity resolution regression. | 3 👍 · 4 comments ([Link](github/copilot-cli/issues/4005)) |
| **#3934** | MCP server 'blocked by policy' | Custom MCP registries that work fine in VS Code and IntelliJ are silently dropped by the CLI, with no clear policy-violation signal. | 1 👍 · 2 comments ([Link](github/copilot-cli/issues/3934)) |
| **#4345** | Reasoning effort 'medium' unsupported for claude-haiku-4.5 | Sub-agent execution fails when server-side feature flags enable `copilot_cli_opus_medium_effort_default` alongside haiku models. | 4 👍 · 2 comments ([Link](github/copilot-cli/issues/4345)) |
| **#4370** | 1.0.79-1 fails MCP init when `server/discover` returns -32602 | FastMCP (and likely other servers) don't implement `server/discover`; the CLI treats the resulting `-32602` as a fatal error instead of a graceful no-op. | 1 👍 · 2 comments ([Link](github/copilot-cli/issues/4370)) |
| **#4374** | `/mcp search` fails with 400 on Azure DevOps remotes | Every repo whose git remote points to Azure DevOps triggers a `400 Bad Request` when fetching the MCP registry policy, blocking the interactive browser entirely. | 4 👍 · 0 comments ([Link](github/copilot-cli/issues/4374)) |
| **#4026** | Copilot CLI crashes repeatedly on Windows (native runtime) | Unpredictable crashes across versions since May 2026 on Windows native builds; no reproducible trigger identified. | 0 👍 · 2 comments ([Link](github/copilot-cli/issues/4026)) |
| **#3013** ⭐ | Hooks don't fire for background/task agents | **CLOSED** — A security-relevant gap: hooks (e.g., dangerous-command guards) are bypassed when commands run through sub-agents, effectively allowing a jailbreak path. | 0 👍 · 3 comments ([Link](github/copilot-cli/issues/3013)) |
| **#4093** ⭐ | web_search returns fabricated answers | **CLOSED** — The AI-powered web search tool returns confident, detailed, entirely hallucinated answers with zero grounding when retrieval finds nothing, presented as fact. | 0 👍 · 0 comments ([Link](github/copilot-cli/issues/4093)) |

## 4. Key PR Progress

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| **#4355** | Merge | XavierMP14 | OPEN | General merge PR ([Link](github/copilot-cli/pulls/4355)) |

*Note: No additional PRs were reported in the 24h window. The release changes above ship directly from the main branch.*

## 5. Feature Request Trends

- **MCP protocol resilience** — Users want graceful degradation when servers don't implement every LSP/SSE method (e.g., `server/discover`), plus clearer policy-violation diagnostics.
- **BYOM in-session model switching** — A recurring ask (#4376) to support model discovery and live switching for Bring-Your-Own-Model providers without restarting the CLI.
- **Enterprise configurability** — Billing-entity resolution (#4005) and fine-grained policy controls (#3934) highlight demand for better enterprise-feature parity.
- **Layout/rendering toggle** — The alt-screen regression (#1799) and clipboard message (#3172) both point to a desire for user-controllable rendering modes.
- **Adversarial review quality** — Rubber Duck (#4380) should use a distinct model family rather than mirroring the primary session's model.

## 6. Developer Pain Points

1. **MCP ecosystem friction** — The single largest cluster of issues. FastMCP incompatibility, OAuth 3LO failures (#4371, `-32042`), policy-fetch 400s on non-GitHub remotes (#4374), and silent policy blocks (#3934) all converge on a fragile MCP integration layer.
2. **Terminal rendering instability** — Alt-screen breakage (#1799), clipboard conflict spams (#3172), and pinned-prompt crowding on small terminals are all user-visible layout regressions.
3. **Cross-platform runtime bugs** — Windows native crashes (#4026), macOS `MallocStackLogging` stderr spam on every tool call (#4375), and cloud-agent MCP policy fetch failures on GHEC data-residency instances (#4378) suggest platform-specific regression surface.
4. **Security & trust gaps** — Hooks bypassed by sub-agents (#3013) and hallucinated web-search results presented as fact (#4093) erode developer confidence in autonomous tooling.
5. **Queued-message ordering bugs** — Steering and queued messages can flip order (#4372) or hang indefinitely (#4373), disrupting interactive workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-06

## 1. Today's Highlights

Two PRs landed today addressing long-standing pain points: one improves error clarity for undecleared model capabilities (PR #2590), and another documents a voice ACP client integration (PR #2589). On the issue side, a critical reliability bug emerges at high context fills (~500K tokens), and a session-abnormal-exit bug was reported on Windows with K3 high.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

**[#1283] Feature Request: Memory System — Persistent context across sessions** [OPEN]
A long-standing enhancement request (open since Feb 2026, 18 comments) for a comprehensive memory system supporting both automatic AI-managed notes and manual user-defined instructions. Reflects strong community desire for continuity between sessions.
→ [MoonshotAI/kimi-cli#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

**[#2586] Agent reliability degrades at high context fill** [CLOSED]
Reports sharp reliability drop once sessions exceed ~500K tokens — repetitive action loops, no escalation, and instruction drift observed in long-running agentic workflows. A critical signal for users running multi-step code-change pipelines.
→ [MoonshotAI/kimi-cli#2586](https://github.com/MoonshotAI/kimi-cli/issues/2586)

**[#2588] Model declared without capabilities: image-returning MCP tool aborts run mid-task** [OPEN]
When a custom model config omits `capabilities`, an MCP tool returning an image causes a silent abort *after* side effects have already executed, with no actionable error hint. Directly addressed by PR #2590.
→ [MoonshotAI/kimi-cli#2588](https://github.com/MoonshotAI/kimi-cli/issues/2588)

**[#2587] Kimi CLI exits abnormally when advancing a normal session** [OPEN]
Reported on Windows (NT 10.0.26200.0) running Kimi Code v0.29.2 with K3 high model via `/login`. No comments yet — may indicate a platform-specific regression.
→ [MoonshotAI/kimi-cli#2587](https://github.com/MoonshotAI/kimi-cli/issues/2587)

## 4. Key PR Progress

**[#2590] fix(soul): name the config fix in the unsupported-capability error** [OPEN]
Author: ayaangazali | Targets the "no hint at the fix" half of #2588. Previously, the error named the missing capability but never told the user what to add to `config.toml`. This PR improves the error message to be actionable.
→ [MoonshotAI/kimi-cli#2590](https://github.com/MoonshotAI/kimi-cli/pull/2590)

**[#2589] docs: mention qwen-audio-agent as a voice ACP client** [OPEN]
Author: x-lixu | Adds documentation for `qwen-audio-agent`, an open-source full-duplex voice runtime that launches `kimi acp` as an agent, enabling hands-free voice interaction. Expands the ACP client ecosystem documentation beyond editor/IDE tools.
→ [MoonshotAI/kimi-cli#2589](https://github.com/MoonshotAI/kimi-cli/pull/2589)

## 5. Feature Request Trends

- **Session memory & continuity** — Issue #1283's persistent memory system request is the most active enhancement, signaling demand for stateful, cross-session context retention beyond the current ephemeral model.
- **Long-context agent reliability** — Issue #2586 highlights growing usage of Kimi CLI for extended agentic workflows, with a clear need for context-length handling, loop detection, and graceful degradation.
- **Multi-modal capability declarations** — Issue #2588 and PR #2590 reflect increasing use of MCP tools with image/audio output, exposing a gap in how model capabilities are declared and validated.
- **Voice/hands-free interaction** — PR #2589 documents a voice client, suggesting an emerging trend toward multimodal and voice-first interaction patterns with Kimi CLI.

## 6. Developer Pain Points

- **Silent aborts with side effects** — Issue #2588 describes a worst-case scenario: an agent runs an MCP tool, side effects are committed, and then the session aborts with an opaque error. This is a high-severity reliability concern for production-like workflows.
- **Context-length wall at ~500K tokens** — Issue #2586 reports a hard reliability ceiling for long-running agents, with no documented limit or graceful fallback, forcing users to manually partition work.
- **Windows-specific session crashes** — Issue #2587 suggests a platform-specific bug causing abnormal exit during normal session advancement, a concern for Windows developers.
- **Improving error-actionability** — PR #2590's existence (fixing only half of #2588) indicates the team is incrementally improving error messages, but developers still face confusing diagnostics when misconfiguring model capabilities.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-06

## 1. Today's Highlights

OpenCode v1.18.14 shipped with a streamlined xAI login flow and improved mid-stream error retry handling. The V2 migration effort accelerated with a new v1→v2 data migration PR, while multiple cleanup PRs stripped legacy workspace control plane code from both V1 and V2 surfaces. Community demand remains strongest for an official VS Code extension and crypto-based Go payments.

---

## 2. Releases

**v1.18.14** — [GitHub Release](https://github.com/anomalyco/opencode/releases)

- **Improvements:** Simplified xAI authentication to a single device-code flow, improving reliability in headless and remote environments.
- **Bugfixes:** Structured mid-stream provider errors are now preserved so compatible providers can retry failed responses; additional transient provider and network errors are retried.

---

## 3. Hot Issues

1. **[FEATURE] Official VS Code Extension** [#11176](https://github.com/anomalyco/opencode/issues/11176) — 134 👍, 27 comments
   The most-upvoted open issue by a wide margin. Developers want OpenCode as a native VS Code extension for deeper IDE integration. Community reaction: strong and sustained.

2. **DeepSeek V4 Flash requires "hosted in China" opt-in** [#39845](https://github.com/anomalyco/opencode/issues/39845) — 22 👍, 17 comments
   Users mid-session are hit with a sudden geographic lock requiring explicit opt-in. High frustration due to unexpected breakage.

3. **[FEATURE] Pay Go with crypto** [#23153](https://github.com/anomalyco/opencode/issues/23153) — 36 👍, 16 comments
   Crypto payment support for OpenCode Go remains a top wishlist item, reflecting demand from global and privacy-conscious users.

4. **[FEATURE] Respect `disable-model-invocation` in SKILL.md frontmatter** [#34498](https://github.com/anomalyco/opencode/issues/34498) — 49 👍, 13 comments
   Skill authors want their frontmatter flags honored, parity with Claude Code and Codex. Strong signal from the skills ecosystem.

5. **Crash on older Intel Macs (AVX2 incompatibility)** [#24876](https://github.com/anomalyco/opencode/issues/24876) — 7 comments
   Binary requires AVX2/FMA, crashing on Ivy Bridge and older CPUs. [Related: #29039](https://github.com/anomalyco/opencode/issues/29039) with 7 comments. Together these form a recurring hardware-compatibility pain point.

6. **DeepSeek thinking mode: `reasoning_content` not passed back** [#24104](https://github.com/anomalyco/opencode/issues/24104) — 21 comments · **CLOSED**
   Session stuck after first assistant response when thinking mode is enabled. Now closed, but highlights ongoing DeepSeek compatibility work.

7. **zsh: illegal hardware instruction on macOS** [#8345](https://github.com/anomalyco/opencode/issues/8345) — 6 👍, 21 comments
   Another crash-on-launch report tied to hardware incompatibility, echoing issue #24876.

8. **TUI autocomplete doesn't list files inside configured references** [#34040](https://github.com/anomalyco/opencode/issues/34040) — 5 comments
   Typing `@home` autocomplete stops at the alias instead of descending into nested files. Practical UX gap for reference-heavy workflows.

9. **PyCharm 2026.2 spawns 15–22 opencode.exe acp processes on startup** [#40696](https://github.com/anomalyco/opencode/issues/40696) — 3 comments
   Memory exhaustion and crash (0xC0000409) caused by bulk session creation during IDE init. Critical for Windows PyCharm users.

10. **Desktop "Add server" dialog: name/username/password fields uneditable** [#38193](https://github.com/anomalyco/opencode/issues/38193) — 3 comments, 1 👍
    Only the server address field accepts input; the rest show only placeholder text. Blocks remote server setup in Desktop.

---

## 4. Key PR Progress

1. **[contributor] fix(core): connect custom providers** [#40761](https://github.com/anomalyco/opencode/pull/40761) — Exposes configured custom providers (e.g., LiteLLM) as integrations even without env credentials, adding manual API key auth. Includes regression test.

2. **[contributor] refactor: remove legacy workspace control plane (V2)** [#40760](https://github.com/anomalyco/opencode/pull/40760) — Strips obsolete workspace lifecycle, public events, and legacy plugin adapter surface from V2 while preserving core project/session behavior.

3. **feat(core): migrate v1 data to v2** [#40723](https://github.com/anomalyco/opencode/pull/40723) — Adds REST-triggered v1→v2 session history migration with resumable progress, including legacy JSON credential import. Critical for upgrade paths.

4. **[contributor] refactor: remove legacy workspace control plane (V1/V2)** [#40754](https://github.com/anomalyco/opencode/pull/40754) — Companion PR stripping the same workspace control plane from both V1 and V2 package surfaces.

5. **[contributor] refactor(web): remove superseded ornate logos** [#40750](https://github.com/anomalyco/opencode/pull/40750) — Deletes unused ornate logo SVGs from the V2 web package.

6. **[contributor] refactor(console): remove unused mail & landing assets** [#40758](https://github.com/anomalyco/opencode/pull/40758), [#40757](https://github.com/anomalyco/opencode/pull/40757) — Removes stale font files, PNGs, and logo assets from console packages.

7. **fix(core): multiple clones of same repo are different projects** [#35311](https://github.com/anomalyco/opencode/pull/35311) — Resolves a long-running class of issues (#17940, #19348, #29869, and 10+ more) where identical repos were treated as separate projects.

8. **[automated-pr-cleanup] fix(provider): skip includeUsage for incompatible OpenAI-compatible hosts** [#35446](https://github.com/anomalyco/opencode/pull/35446) — Stops sending `stream_options.include_usage` to Chinese AI gateways (Volcengine, Qianfan, DashScope, ModelScope) that return 400 errors.

9. **[automated-pr-cleanup] fix(opencode): stop silent session title generation failures** [#35440](https://github.com/anomalyco/opencode/pull/35440) — Fixes `ensureTitle` failing silently, which left sessions as generic timestamps.

10. **[automated-pr-cleanup] fix(opencode): stop sending tools when `tool_call` is false** [#35433](https://github.com/anomalyco/opencode/pull/35433) — Ensures models with `tool_call: false` in config actually skip tool sending, closing #19966 and #35432.

---

## 5. Feature Request Trends

- **IDE Integration:** The #1 recurring theme — an official VS Code extension (#11176), PyCharm process-management bugs (#40696), and remote SSH support for Desktop (#33273) all point to developers wanting OpenCode deeply embedded in their editor workflows.
- **Payment Flexibility:** Crypto payments for Go (#23153) and better handling of regional model restrictions (#39845) show users want fewer friction points around access and billing.
- **Skill & Config Fidelity:** Respecting `SKILL.md` frontmatter flags (#34498), mid-line slash-completion (#40719), and skill auto-completion at root (#40720) reflect a mature skills ecosystem demanding parity with Claude Code and Codex.
- **Local/Offline Capability:** Bundling ripgrep in Windows binaries (#31734) and local LAN provider discovery (#27554) indicate demand for offline-first and self-hosted workflows.
- **Multi-Agent UX:** Visualizing parallel agent workflows (#40564) signals growing use of multi-agent patterns that outgrow the current TUI.

---

## 6. Developer Pain Points

- **Hardware compatibility on macOS:** Repeated crash reports on older Intel machines (#24876, #29039, #8345) due to AVX2/FMA requirements. Users on Ivy Bridge and older CPUs cannot run the binary at all.
- **Session state persistence bugs:** Stale `project.worktree` after folder renames (#35240), forgotten global `AGENTS.md` rules across sessions (#40348), and old project folder data clinging after deletion (#40699) all point to incomplete state reconciliation.
- **DeepSeek compatibility gaps:** Thinking mode not continuing conversations (#24104) and sudden geographic-model locks (#39845) create unreliable experiences with a popular model family.
- **Desktop remote-server UX:** The "Add server" dialog having non-editable fields (#38193) and the broader need for SSH remote support (#33273) suggest the Desktop remote workflow is under-tested.
- **Windows process management:** PyCharm spawning dozens of `opencode.exe acp` processes (#40696) causing OOM crashes highlights a resource-leak pattern on Windows that needs attention.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026‑08‑06

## 1. Today’s Highlights
The Pi coding‑agent community focused on Windows compatibility, reliable update paths, and multimodal input. A high‑engagement issue (#7547) collected Windows‑specific usage reports, while two closed PRs hardened the self‑update flow against transient network failures and fixed a dangling‑hyperlink bug in terminal output.

## 2. Releases
No releases were published in the last 24 hours.

## 3. Hot Issues
1. **[Windows] How do you use Pi on Windows? What issues are you seeing?** (#7547)  
   *Open · 17 comments*  
   A community‑driven survey of Windows experiences; the high comment count signals strong developer interest in clearer docs and supported installation paths.  
   [GitHub link](https://github.com/earendil-works/pi/issues/7547)

2. **truncateToWidth() leaves dangling OSC 8 hyperlink** (#7399)  
   *Closed · 12 comments*  
   The bug caused broken terminal hyperlinks when text was truncated inside an OSC 8 sequence. The fix is already merged, but the issue attracted attention from users who hit the same rendering glitch.  
   [GitHub link](https://github.com/earendil-works/pi/issues/7399)

3. **Sessions hang on “working” with Anthropic subscription** (#5291)  
   *Closed · 8 comments · 3 👍*  
   Users reported intermittent “Working…” hangs when using an Anthropic Enterprise subscription; the discussion highlights authentication/timeout edge cases that still affect some workflows.  
   [GitHub link](https://github.com/earendil-works/pi/issues/5291)

4. **`pi update --self` gives up after one transient connection failure** (#6675)  
   *Closed · 8 comments · 2 👍*  
   A reliability improvement: the self‑update command now retries instead of failing immediately on flaky networks, addressing a common frustration for developers behind proxies or with unstable connections.  
   [GitHub link](https://github.com/earendil-works/pi/issues/6675)

5. **Add Context Windows option** (#5064)  
   *Closed · 7 comments*  
   Feature request to expose a context‑window selector in settings (similar to Copilot CLI). The closed status suggests the maintainers are tracking demand but may prioritize later.  
   [GitHub link](https://github.com/earendil-works/pi/issues/5064)

6. **Support video/audio content in prompt command** (#3200)  
   *Open · 7 comments · 4 👍*  
   Extends the `prompt` RPC to forward video/audio alongside images, enabling multimodal models (Gemma 4, GPT‑4o) to process richer input. The high like count indicates strong interest.  
   [GitHub link](https://github.com/earendil-works/pi/issues/3200)

7. **Configurable thinking level/model for compaction** (#7553)  
   *Open · 7 comments*  
   Requests decoupling the thinking budget used during automatic/manual compaction from the session’s current thinking level, allowing cheaper summarization runs.  
   [GitHub link](https://github.com/earendil-works/pi/issues/7553)

8. **Improve Vertex + GCP metadata server support** (#5323)  
   *Open · 6 comments · 1 👍*  
   Identifies a synchronous `existsSync` check for Vertex authentication that can miss valid credential configurations; fixing it would improve GCP‑based workflows.  
   [GitHub link](https://github.com/earendil-works/pi/issues/5323)

9. **WebSocket retry only handles two error codes** (#7444)  
   *Open · 4 comments*  
   The Codex‑Responses WebSocket retry loop currently only retries on `previous_response_not_found` and `websocket_connection_limit_reached`; other transient `response.failed` errors hard‑stop the turn.  
   [GitHub link](https://github.com/earendil-works/pi/issues/7444)

10. **pi‑tui: let components receive mouse events on their own rows** (#7683)  
    *Closed · 2 comments*  
    Feature request for a finer‑grained mouse‑event API in the TUI, enabling custom components to handle clicks on their own rows without interfering with selection/scrolling.  
    [GitHub link](https://github.com/earendil-works/pi/issues/7683)

## 4. Key PR Progress
1. **Naturally sort both model selectors** (#7692) – Closed  
   Shares a natural model‑ID comparator between `/model` and `/scoped‑models`, making context‑window variants easier to navigate.  
   [GitHub link](https://github.com/earendil-works/pi/pull/7692)

2. **Naturally sort scoped model catalog** (#7690) – Closed  
   Complements the previous PR by applying the same case‑insensitive, numeric‑aware sorting to the scoped catalog.  
   [GitHub link](https://github.com/earendil-works/pi/pull/7690)

3. **Add Qwen Token Plan Individual provider** (#7659) – Open  
   Introduces a built‑in provider for Qwen’s international Token Plan Individual subscription, exposing eight documented models while preserving existing China/international providers.  
   [GitHub link](https://github.com/earendil-works/pi/pull/7659)

4. **Colocate tool prompt contributions with tool definitions** (#7671) – Open  
   Moves canonical system‑prompt snippets and guidelines for built‑in tools next to their implementations, improving maintainability and adding regression coverage.  
   [GitHub link](https://github.com/earendil-works/pi/pull/7671)

5. **Make extension selector with long diffs scrollable** (#7597) – Closed  
   Wraps diff titles in a `ScrollView` and pins action buttons so large diffs can be reviewed without hidden yes/no choices.  
   [GitHub link](https://github.com/earendil-works/pi/pull/7597)

6. **Support `thinking_token_budget` on OpenAI completions** (#7638) – Closed  
   Allows reasoning models on OpenAI‑compatible endpoints to explicitly reserve tokens for thinking, preventing runs that consume the entire `max_tokens` budget and return no text.  
   [GitHub link](https://github.com/earendil-works/pi/pull/7638)

7. **Add configurable Harness factory** (#7686) – Open  
   Provides an internal coding‑agent factory for constructing experimental Harness instances while preserving caller‑provided tools, activation, and prompt policy.  
   [GitHub link](https://github.com/earendil-works/pi/pull/7686)

8. **Fix event‑bus leak** (#7656) – Closed  
   Scopes `pi.events.on()` subscriptions to the extension runtime that registered them and removes stale listeners after reload/disposal, addressing a lifecycle bug (#7193).  
   [GitHub link](https://github.com/earendil-works/pi/pull/7656)

9. **Recognize comma after LGTM in approval comments** (#7663) – Closed  
   Fixes a regression where “LGTM, please submit a minimal patch!” was no longer recognized as an approval comment.  
   [GitHub link](https://github.com/earendil-works/pi/pull/7663)

10. **Disable bunfig autoload in compiled binaries** (#7685) – Closed  
    Compiles release and local binaries with `--no‑compile‑autoload‑config` to prevent Bun’s cwd‑based `bunfig.toml` preload from crashing startup when the project lacks dependencies.  
    [GitHub link](https://github.com/earendil-works/pi/pull/7685)

## 5. Feature Request Trends
- **Multimodal input expansion** – Strong demand to extend the `prompt` command beyond images to video/audio (#3200).
- **Configurable thinking & compaction** – Requests to decouple compaction thinking budgets (#7553) and expose context‑window selectors (#5064) show a trend toward fine‑grained control over reasoning cost and performance.
- **Provider & model catalog maturity** – New providers (Qwen Token Plan Individual, #7659) and better model‑sorting (#7692, #7690) indicate ongoing efforts to make the model selector more navigable and inclusive of subscription‑specific offerings.
- **Per‑directory context overrides** – The `AGENTS.override.md` feature (#7642, #7681, #7664) enables directory‑level context isolation, a recurring request for complex monorepos.

## 6. Developer Pain Points
- **Windows compatibility** – The high‑traffic Windows issue (#7547) reflects fragmented installation methods and insufficient out‑of‑the‑box guidance for Windows developers.
- **Session hangs & authentication edge cases** – Intermittent “Working…” hangs (#5291) and Vertex metadata‑server detection problems (#5323) point to fragile auth flows and timeout handling.
- **Update reliability** – Transient network failures previously broke `pi update --self` (#6675); while fixed, similar resilience concerns may appear in other network‑bound operations.
- **WebSocket retry gaps** – The Codex‑Responses retry logic (#7444) only handles two error codes, leaving other transient failures as hard stops that disrupt long runs.
- **Extension lifecycle leaks** – Event‑bus listeners surviving session reloads (#7193, fixed in #7656) highlight the need for stricter runtime scoping in extension APIs.
- **Terminal rendering quirks** – Dangling OSC 8 hyperlinks (#7399) and missing payload‑size parameters for iTerm2 inline images (#7465) are recurring pain points for users of advanced terminal features.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-06

## 1. Today's Highlights

Qwen Code v0.21.6 shipped alongside the first stable Desktop v0.1.0 release, marking a major milestone for the Tauri-based desktop experience. The most notable new feature is experimental native Live Voice support on macOS WebShell, enabling real-time audio interaction through a global shortcut. The community also saw strong movement on security hardening, with two P1/P2 vulnerability reports flagged in the shell classifier and credential sanitization pipeline.

---

## 2. Releases

### v0.21.6 (Latest Stable)
The primary release of the cycle. Changelog is minimal in the public notes, but the release accompanies several backend fixes and the desktop v0.1.0 launch. See the [full release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6).

### desktop-v0.1.0
First stable Desktop release built on Tauri. Includes CI fixes for container bash shells and Web Shell session persistence improvements. See [release notes](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.1.0).

### v0.21.6-preview.0 & v0.21.5-nightly.20260805
Preview and nightly builds carrying alpha readiness diagnostics for the browser extension and headless Goal workflow documentation. See [preview release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-preview.0).

---

## 3. Hot Issues

### #8582 — Read-only shell classifier auto-approves hidden command substitution [P1, Security]
The AST-based read-only classifier and the runtime substitution gate both fail to detect commands hidden behind line continuations or `${var@P}` expansion, effectively allowing arbitrary code execution to slip through the approval filter. This is the highest-severity open security issue this cycle.
[Link](https://github.com/QwenLM/qwen-code/issues/8582)

### #8136 — Provider warning sanitizer truncates port-bearing messages and leaks passwords [P2, Security]
`sanitizeProviderWarningSegment` incorrectly locates the user-info delimiter in URLs containing `@` in passwords, causing it to strip valid port segments while failing to redact the actual credential. Two bugs from a single parsing flaw; directly impacts `/status` payload safety.
[Link](https://github.com/QwenLM/qwen-code/issues/8136)

### #8560 — Web Shell session deep link returns 401 on refresh with bearer token [P2]
When `qwen serve --token` is active, navigating to an active session deep link (`/session/<id>`) and refreshing the browser returns `{"error": "Unauthorized"}`. Session persistence across page reloads is broken for authenticated deployments.
[Link](https://github.com/QwenLM/qwen-code/issues/8560)

### #7306 — Harden tool-output budgeting, observability, and artifact lifecycle [P2, Enhancement]
Phase 1 correctness and focused contract hardening are complete. The shared finalization impl landed in #7323 and the Shell no-artifact regression coverage in #7470. This remains a critical foundation issue for reliable long-running agent workflows.
[Link](https://github.com/QwenLM/qwen-code/issues/7306)

### #8550 — `qwen mcp list` hangs indefinitely on SSE servers without `endpoint` event [P2]
When an MCP server uses the SSE `url` transport and accepts the connection but never emits the legacy `endpoint` event, the CLI hangs forever rather than timing out. Affects users with slow or non-compliant MCP servers.
[Link](https://github.com/QwenLM/qwen-code/issues/8550)

### #8412 — Recover complete turns after live journal truncation [CLOSED]
When a daemon turn exceeds the 10,000-event / 8 MiB bounded journal limit, `session/load` drops oldest events and prepends a `history_truncated` marker. The marker was previously a generic message; this issue tracked the fix to properly identify the missing segment. Now closed.
[Link](https://github.com/QwenLM/qwen-code/issues/8412)

### #8580 — TUI flickers continuously in tmux < 3.5 [P2, Linux]
The bundled Ink renderer overflows frames and triggers a full-screen clear+repaint cycle guarded only by unqueried DEC mode, causing 2–3 fps flicker during streaming. Confirmed on tmux 3.4; a significant UX regression for remote/dev-container users.
[Link](https://github.com/QwenLM/qwen-code/issues/8580)

### #8595 — First-class "Local Control" mode with QR-code pairing [P2, Feature]
Community request for a QR-code-based pairing flow to access local Qwen Code sessions from a phone, with zero manual setup. Signals strong demand for mobile companion access to desktop/CLI sessions.
[Link](https://github.com/QwenLM/qwen-code/issues/8595)

### #8596 — Deprecate Electron desktop, rename desktop-shell to desktop [P2, Feature]
Proposes retiring `packages/desktop` (Electron) and promoting the Tauri `desktop-shell` to `packages/desktop`. Aligns the product naming with the actual future platform; has strong community support given the v0.1.0 desktop launch.
[Link](https://github.com/QwenLM/qwen-code/issues/8596)

### #8538 — Copy-response button does nothing on Windows Desktop [P2, Bug]
The clipboard copy button below assistant messages is non-functional on Qwen Code Desktop 0.0.5 / Windows 10. Reproduced across restarts and reboots. A basic UX regression in the new desktop app.
[Link](https://github.com/QwenLM/qwen-code/issues/8538)

---

## 4. Key PR Progress

### #8305 — Render inline terminal images in CLI [Feature]
Extends terminal-image infrastructure from workspace previews to model and tool `inlineData` in the interactive CLI. Preserves ordered text/image parts while maintaining the existing concatenated `value` contract. A highly requested UX improvement.
[Link](https://github.com/QwenLM/qwen-code/pull/8305)

### #8368 — Add Kimi and Xiaomi MiMo providers [Feature]
First-class provider presets for Kimi (Coding Plan, API Key China/International) and Xiaomi MiMo (pay-as-you-go, China/Singapore). Expands the supported provider ecosystem beyond the existing options.
[Link](https://github.com/QwenLM/qwen-code/pull/8368)

### #8465 — Checkpoint long-running Goal evidence [Feature]
Adds a durable, Core-owned evidence checkpoint for long-running Goals. Before the bounded evidence catalog hits its limit, the runtime pauses and asks an independent verifier to compress cumulative evidence into strictly bounded chunks. Critical for reliability at scale.
[Link](https://github.com/QwenLM/qwen-code/pull/8465)

### #8440 — Support group pairing in channels [Feature]
Adds `pairing` as a `groupPolicy` value so a group chat can be approved once by its stable chat ID and then used by every member. Approval is stored separately from usage, retaining the initiating sender for audit context.
[Link](https://github.com/QwenLM/qwen-code/pull/8440)

### #8578 — Feishu ask-user question cards [Feature]
Native Feishu Card V2 presentation for `ask_user_question`. Renders single/multi-select questions in one form, correlates callbacks to the exact request, and settles the outcome upon acceptance.
[Link](https://github.com/QwenLM/qwen-code/pull/8578)

### #8401 — Declarative repository-context manifest for reviews [Feature]
Makes the review pipeline repository-aware without hardcoding any specific repo. Adds a versioned, bounded repository-context contract and a declarative manifest provider at `.qwen/review-context.json`.
[Link](https://github.com/QwenLM/qwen-code/pull/8401)

### #8517 — Manage DingTalk interactive card config [Fix]
Exposes `interactiveCards` as a manageable nested object in the daemon channel catalog, validates nested values before persistence, mirrors the contract in the TypeScript SDK, and preserves object values in Web Shell.
[Link](https://github.com/QwenLM/qwen-code/pull/8517)

### #8553 — Bound backward transcript pages in long single-turn sessions [Fix]
Backward transcript pagination now expands at most one additional page window beyond the requested size, keeping turns whole across pages while preventing unbounded expansion in very long sessions.
[Link](https://github.com/QwenLM/qwen-code/pull/8553)

### #8332 — Audio bridge for attachments [Feature]
When the primary model doesn't support audio, user-supplied attachments are transcribed through the configured batch voice model and replaced with an explicitly untrusted machine-transcription token. Enables audio input across all models.
[Link](https://github.com/QwenLM/qwen-code/pull/8332)

### #8274 — Fork from any conversation [Feature]
Allows session branching from any visible Assistant message as a branch point, rather than only from the latest active session state. Safely handles tool calls, cancellations, metadata, and concurrent operations at the branch site.
[Link](https://github.com/QwenLM/qwen-code/pull/8274)

---

## 5. Feature Request Trends

1. **Mobile / Remote Session Access** — QR-code pairing (#8595) and Local Control mode reflect strong demand for accessing local Qwen Code sessions from phones without manual configuration.
2. **Multi-Provider Expansion** — Kimi and Xiaomi MiMo additions (#8368) signal continued interest in broadening the provider catalog, especially with China-market and international API key variants.
3. **Channel & Platform Integrations** — Feishu question cards (#8578), DingTalk config management (#8517), and group pairing (#8440) show active investment in Chinese enterprise messaging platforms.
4. **Long-Running Agent Reliability** — Goal evidence checkpointing (#8465), tool-output budgeting (#7306, #8447), and backward transcript bounds (#8553) all point to a community focus on making extended autonomous workflows predictable and bounded.
5. **Desktop App Maturation** — The push to deprecate Electron in favor of Tauri (#8596), add voice support (#7859), and fix basic UX bugs (#8538, #8592) indicates the desktop product is entering a refinement phase.

---

## 6. Developer Pain Points

- **Security classifier gaps** — Two separate P1/P2 issues (#8582, #8136) reveal that the read-only shell classifier and credential sanitizer have real parsing blind spots. These are high-risk areas where community reporters are actively finding edge cases.
- **TUI rendering instability on Linux** — The tmux < 3.5 flicker (#8580) and terminal resize duplicate output (#8557) are recurring renderer issues affecting a significant portion of the developer audience, especially those using remote dev containers.
- **Desktop app polish** — Copy button broken on Windows (#8538), markdown links unclickable (#8593), and language switching having no effect (#8592) are all basic UX regressions in the new Desktop v0.1.0 that erode confidence in the platform transition.
- **Session persistence with auth** — The 401-on-refresh bug (#8560) for token-protected `qwen serve` deployments is a blocking issue for anyone running headless or shared Web Shell instances.
- **MCP server compatibility** — The indefinite hang on non-compliant SSE servers (#8550) suggests the MCP integration lacks robust timeout handling, affecting users with third-party or legacy MCP tooling.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-06

## 1. Today's Highlights

The v0.9.4 release train (#5135) is the dominant activity, carrying 77 commits ahead of main with a broad integration set across runtime API, MCP lifecycle, subagent resilience, and TUI UX fixes. Several PRs from the "Copilot" authorship line ship the first bounded lifecycle endpoints for memory, goals, skills, and verifier evidence — a significant expansion of the Runtime API surface. Community momentum is also visible in the zh-CN Windows beginner guide (#5229) and two subagent/shell UX hardening PRs from SparkofSpike.

---

## 2. Releases

No new release was published in the last 24 hours. The **v0.9.4 release train** (PR #5135) remains open and in-progress, superseding #5044 with 77 commits ahead of `main`, including the 18 train commits from `6860a40eb556`.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | Only one API key can be saved | Multi-provider workflows (DeepSeek + GLM) force users to repeatedly swap keys. This is a direct productivity blocker for mixed-model teams. |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | Unknown model IDs silently degrade to 128K context | A 1M-window model silently compacts at 128K with no warning — a correctness bug that can silently corrupt long-context tasks. Filed by the maintainer (`Hmbown`), signaling urgency. |
| [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) | Filesystem path whitelist/allowlist in sandbox | Xcode `xcodebuild` artifacts live outside the workspace (`~/Library/Developer/Xcode/DerivedData/`). The current `workspace-write` sandbox blocks legitimate build access, blocking IDE-integrated debugging workflows. |
| [#4029](https://github.com/Hmbown/CodeWhale/issues/4029) | Planning an interface similar to Reasonix? | Community interest in a Reasonix-style interface suggests users want deeper semantic/code-reasoning UX beyond the current chat-centric model. |

*Note: Only 4 issues were updated in the last 24h; all are listed above.*

---

## 4. Key PR Progress

### Runtime API Expansion (Copilot-authored series)

| PR | Summary |
|----|---------|
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | **Memory endpoints** — adds `/v1/memory` for bounded inspection and lifecycle controls, closing the gap where managed clients previously needed a second memory store. |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | **MCP server lifecycle** — new `POST /v1/apps/mcp/servers` and mutation routes replace the prior read-only inventory, letting clients add/update/remove servers via HTTP instead of editing TOML/JSON manually. |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | **Goal-loop state** — exposes `GET /v1/threads/{id}/goal` and lifecycle transitions so managed clients can drive long-running goals through the canonical runtime boundary. |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | **Verifier receipts** — three new read-only endpoints under `/v1/fleet/runs/{run_id}/` surface individual task receipts so clients can identify *which* task failed and why, instead of seeing only an aggregate counter. |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | **Skill lifecycle** — install, update, uninstall, trust, and audit routes complete the skill management surface that the TUI already offered but the Runtime API lacked. |

### TUI & Subagent Hardening (SparkofSpike)

| PR | Summary |
|----|---------|
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | **Real wait elapsed time in tool content** — exposes `duration_ms` in tool output so the model can distinguish short waits from long stalls, reducing busy-polling behavior. |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | **Resume interrupted subagents from checkpoint** — fixes a dead-letter bug where `agents/followup` on an `interrupted_continuable` child preserved the checkpoint but could not actually resume it. |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | **Keep alternate scroll off during mouse capture** — fixes a regression where mouse-wheel input toggled composer history instead of scrolling the transcript when content overflowed the screen. |

### Release & Infrastructure

| PR | Summary |
|----|---------|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | **v0.9.4 release train** — 77 commits ahead of main; the integration carrier for the above features plus numerous smaller fixes. |
| [#5192](https://github.com/Hmbown/CodeWhale/pull/5192) **✅ Closed** | **Pin ratatui to 0.30.0** — resolves a race between `Terminal::clear()` and the TUI event loop caused by `ratatui-core` 0.1.1+ issuing a blocking CPR query. |
| [#5095](https://github.com/Hmbown/CodeWhale/pull/5095) **✅ Closed** | **Re-quote Windows linker args with spaces** — fixes OpenHarmony SDK builds under spaced paths (e.g. `D:\DevEco Studio\...\native`) where `%*` expansion stripped required quoting. |

### Documentation & Integration

| PR | Summary |
|----|---------|
| [#5229](https://github.com/Hmbown/CodeWhale/pull/5229) | **zh-CN Windows beginner guide** — new `docs/WINDOWS_BEGINNER.zh-CN.md` with installation, config, model switching, permissions, and troubleshooting; validated on Windows 10 with real screenshots. |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | **Expose file/search/git/patch/shell tools over ACP `session/prompt`** — previously the ACP server only streamed model text without executing tool calls, leaving editor/bridge integrations (Zed, `acp-deepseek-adapter`) as chat-only agents. |
| [#5236](https://github.com/Hmbown/CodeWhale/pull/5236) | **Evidence: attach live Model Studio proof** — replaces terminal screenshots with an MP4 + Alibaba Cloud Model Studio Token Plan screenshots, documenting `qwen3.8-max` reasoning-to-working transitions and Lite subscription proofs. |

---

## 5. Feature Request Trends

1. **Multi-provider key management** — Issue #5250 reflects a growing need to support multiple API keys (DeepSeek, GLM, etc.) simultaneously rather than a single overwrite-prone slot.
2. **Sandbox path allowlisting** — Issue #5005 and related build-debug workflows indicate users need fine-grained filesystem access beyond the current `workspace-write` model, especially for IDE-integrated scenarios (Xcode, OpenHarmony).
3. **Runtime API completeness** — The Copilot PR series (#5129–#5133) shows the project is actively closing gaps in the Runtime API, driven by demand from managed desktop/web clients that need HTTP-level control over memory, goals, skills, and MCP servers.
4. **ACP tool execution** — PR #5225 addresses community demand for full agent capabilities (file/git/shell tools) over the ACP protocol, not just text streaming.
5. **Internationalization & onboarding** — PR #5229 (zh-CN guide) and the Reasonix-style interface question (#4029) signal interest in both language expansion and next-generation UX paradigms.

---

## 6. Developer Pain Points

- **Silent correctness degradation** — Unknown model IDs falling back to 128K context with no warning (#5244) is a correctness hazard that erodes trust in configuration.
- **Sandbox over-restriction** — Legitimate build artifacts (Xcode DerivedData, OpenHarmony SDK paths with spaces) are blocked by the default workspace-only sandbox, forcing manual workarounds (#5005, #5095).
- **Single key bottleneck** — Users managing multiple model providers must repeatedly re-authenticate, creating friction in multi-model pipelines (#5250).
- **Terminal UX regressions** — Mouse capture and alternate-scroll mode conflicts caused broken scrolling behavior in overflow scenarios (#5234), and a ratatui version bump introduced a race condition at startup (#5192).
- **Subagent checkpoint dead letters** — Interrupted long-running subagents could not be resumed from their saved checkpoint, wasting computation and breaking multi-step workflows (#5242).
- **Wait-time blindness** — The model received no duration signal for `wait`/delta tools, leading to busy-polling and misjudged stall detection (#5240).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*