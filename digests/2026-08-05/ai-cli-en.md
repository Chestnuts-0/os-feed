# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 01:41 UTC | Tools covered: 9

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

The AI CLI tools landscape in mid-2026 is characterized by intense competition across eight major projects, with mature tools (Claude Code, Codex, Gemini CLI) stabilizing around enterprise-grade reliability while newer entrants (Kimi Code, DeepSeek TUI) iterate rapidly on niche capabilities. Security hardening, session reliability, and cross-platform parity have emerged as the primary battlegrounds — every tool faces community pressure on Windows stability, MCP integration robustness, and agent-level trust boundaries. The ecosystem is shifting from feature race to quality race, with compaction, context management, and subprocess observability becoming table stakes.

---

## 2. Activity Comparison

| Tool | Hot Issues | Open PRs (24h) | Release Status | Release Cadence |
|------|-----------|-----------------|----------------|-----------------|
| **Claude Code** | 10 | 8 | v2.1.222 shipped | Steady; security hardening focus |
| **OpenAI Codex** | 10 | 12 | 4 alpha releases (0.147.0-alpha.6.1–7) | Rapid alpha iteration |
| **Gemini CLI** | 10 | 14 | None | Active bug-fix cycle |
| **GitHub Copilot CLI** | 10 | 2 | v1.0.79-1 (breaking change) | Sparse; policy/regression focus |
| **Kimi Code CLI** | 7 | 3 | None | Early-stage; Windows bugs dominant |
| **OpenCode** | 10 | 12 | v1.18.13 shipped | Moderate; regression in v1.18.5+ |
| **Pi** | 10 | 9 | None | Steady; enterprise auth focus |
| **Qwen Code** | 10 | 11 | v0.21.5 stable + 2 nightlies | Active; trust-boundary architecture |
| **DeepSeek TUI** | 10 | 10 | v0.9.4 train (77 commits ahead) | Aggressive integration pipeline |

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Needs |
|-----------|---------------|----------------|
| **Session continuity & compaction** | Claude Code, Pi, OpenCode, Qwen Code, DeepSeek TUI | Configurable compaction models/thinking levels (#Pi #7553), auto-compact on idle resume (#OpenCode #40403), context-cost thrash avoidance (#ClaudeCode #82144) |
| **MCP reliability & tool curation** | Codex, Gemini CLI, Copilot CLI, DeepSeek TUI | Tool discovery under 400+ tools (#Gemini #24246), graceful fallback on init failure (#Copilot #4370), registry-first selection (#DeepSeek #5238), lifecycle cleanup (#Codex #30408) |
| **Subagent transparency & control** | Claude Code, Gemini CLI, DeepSeek TUI | Subagent turn-limit misreporting (#Gemini #22323), disabled subagents activating anyway (#Gemini #22093), checkpoint-based resume (#DeepSeek #5242) |
| **Enterprise auth & policy** | Pi, Copilot CLI, Qwen Code, Codex | Enterprise compaction 421 errors (#Pi #6768/#7413), schema validation failures (#Copilot #4349), external pre-execution policy provider (#Qwen #8125), ChatGPT cookie auth for staging (#Codex #36983) |
| **Windows platform parity** | Claude Code, Codex, Gemini CLI, Copilot CLI, DeepSeek TUI, Pi | GPU crashes (#ClaudeCode #81275), process leaks/WMI storms (#Codex #33776), IME duplication (#Kimi #2584), path/glob failures (#Pi #6817), bash EOF regression (#ClaudeCode #83243) |
| **Observable subprocesses** | Kimi Code, DeepSeek TUI, Qwen Code | `AI_AGENT` env var propagation (#Kimi #2585), runtime API for goals/memory/MCPs (#DeepSeek #5129–#5133), bounded daemon resource accounting (#Qwen #8051) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----|-----------|--------------|
| **Core positioning** | Enterprise-grade agent with hook system | OpenAI-native desktop+CLI with sandboxed execution | Google-integrated with AST-aware tooling | GitHub-integrated with enterprise policy | Emerging; subprocess observability focus | Multi-provider with Go-plan billing | Runtime-agnostic with provider routing | Trust-boundary architecture; ACP-first | Monolithic Rust TUI; build-performance epic |
| **Target users** | Enterprise devs, security-conscious | General devs, desktop-first | Google ecosystem users | GitHub org admins, enterprise | Windows/non-Latin script users | Multi-provider experimenters | OpenAI/Claude/Codex routing power users | Enterprise security, ACP integrators | Rust/CLI power users, self-hosted |
| **Technical approach** | Hook-based sandboxing, worktree isolation | Rust CLI, deferred tool loading, model caching | LLM-as-a-Judge evals, Caretaker Agent pipeline | Device-flow OAuth, managed settings policy | Process-observable subprocesses | Device-flow OAuth, responses API compliance | Bun/Node/Deno runtime detection, Mermaid rendering | Deterministic trust boundaries, external policy provider | 708-pkg dependency overhaul, runtime API as first-class surface |
| **Release velocity** | Moderate (patch-cycle) | Very high (4 alpha in 24h) | Moderate (bug-fix focused) | Low (2 PRs in 24h) | Low (no release) | Moderate | Low | High (stable + 2 nightlies) | Very high (77 commits ahead) |

---

## 5. Community Momentum & Maturity

**Most Active Communities (by engagement):**
- **OpenAI Codex** — Issue #11023 (Linux desktop request) has 917 👍 and 198 comments, the single highest-engagement issue across all tools. The Windows performance cluster (7+ linked issues) shows a community experiencing real production pain.
- **OpenCode** — Issue #16017 (Go plan usage API) has 126 👍; DeepSeek V4 Flash instability cluster shows active debugging.
- **Pi** — Enterprise compaction broken cluster (#6768, #7413) reflects high-stakes enterprise usage with direct revenue impact.

**Rapidly Iterating:**
- **OpenAI Codex** — 4 alpha releases in 24 hours signals aggressive fix cadence, though Windows process leaks remain unresolved.
- **DeepSeek TUI** — v0.9.4 integration train 77 commits ahead of main; build-performance epic (#5249) indicates architectural maturity effort.
- **Qwen Code** — Nightly builds alongside stable releases; trust-boundary PRs (#8125, #8396) show deliberate security investment.

**Stabilizing:**
- **Claude Code** — v2.1.222 focuses on security hardening and hook correctness; community issues are bug-fix oriented rather than feature-driven.
- **Gemini CLI** — PR volume (14 in 24h) is high but focused on error handling and infrastructure (eval framework, triage) rather than user-facing features.

**Maturing Slowly:**
- **GitHub Copilot CLI** — Only 2 PRs in 24h, breaking change in v1.0.79-1, and multiple enterprise policy regressions suggest a tool where the community is ahead of the release cadence.

---

## 6. Trend Signals

**1. Trust-boundary architecture is the new differentiator.** Qwen Code's deterministic tool-execution boundaries (#8102), Claude Code's worktree isolation hardening (#2.1.222), and external pre-execution policy providers (#8125) all signal that enterprise buyers will prioritize agent safety guarantees over feature count. Developers should evaluate tools based on sandbox enforceability, not just capability.

**2. Windows is the ecosystem's weakest link.** Every major tool reports Windows-specific regressions: Claude Code (GPU crashes, bash EOF), Codex (WMI storms, process leaks), Gemini (Wayland browser crash), Copilot (WSL2 terminal semantics), Kimi (IME duplication), Pi (path glob failures). Cross-platform parity remains an open problem — tools with the fastest Windows fix cycles will capture enterprise adoption.

**3. MCP tool overload is a systemic bottleneck.** Gemini CLI hits 400 errors with 128+ tools (#24246), Copilot CLI treats non-fatal init failures as hard errors (#4370), and DeepSeek TUI is building registry-first tool selection (#5238). The industry is converging on intelligent tool curation as a required capability, not a luxury.

**4. Context compaction is a reliability minefield.** Silent data loss in Claude Code's adaptive thinking (#74260), compaction thrash from skill re-injection (#82144), and Pi's enterprise 421 errors during compaction (#6768) all indicate that context management is the fragile layer most tools haven't yet stabilized. Configurable compaction models and thinking levels (#Pi #7553 → #7602) are the emerging response.

**5. Build-performance engineering is becoming a community signal.** DeepSeek TUI's epic-scale dependency overhaul (#5249) and OpenCode's renderer size reduction (7.45 MB → 1.82 MB, −75.5%) show that developer experience around edit-compile-feedback loops is now a competitive factor. Tools with slow build times lose power-user adoption.

**Recommendation for developers:** Prioritize tools with active Windows fix cycles and explicit trust-boundary architecture (Qwen Code, Claude Code) for enterprise deployments. For multi-provider experimentation, OpenCode and Pi offer the broadest routing flexibility. Monitor DeepSeek TUI's v0.9.4 release for Rust-based reliability gains. Avoid Copilot CLI for MCP-heavy workflows until init-failure handling improves.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
*Data as of 2026-08-05 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

**#1298 — Fix `run_eval.py` recall=0% bug (Windows trigger detection + parallel workers)**
`[OPEN]` · Author: MartinCajiao · [PR #1298](https://github.com/anthropics/skills/pull/1298)
Critical fix for the skill-creator's description-optimization loop. `run_eval.py` was reporting 0% recall for every skill regardless of content, caused by Windows stream-reading failures, broken trigger detection, and conflicts between parallel eval workers. Multiple overlapping PRs (#1099, #1050, #1323, #1261) converge on this same pain point.

**#514 — Document-Typography Skill**
`[OPEN]` · Author: PGTBoos · [PR #514](https://github.com/anthropics/skills/pull/514)
Catches typographic errors in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Addresses a universal but rarely requested quality issue.

**#83 — Skill Quality & Security Analyzer (Meta Skills)**
`[OPEN]` · Author: eovidiu · [PR #83](https://github.com/anthropics/skills/pull/83)
Two meta-skills that evaluate other skills across five dimensions: structure & documentation (20%), examples, resource completeness, clarity, and security patterns. Directly responds to the trust-boundary concerns raised in [Issue #492](https://github.com/anthropics/skills/issues/492).

**#1367 — Self-Audit Skill (Mechanical Verification + Reasoning Quality Gate)**
`[OPEN]` · Author: YuhaoLin2005 · [PR #1367](https://github.com/anthropics/skills/pull/1367)
Audits AI output before delivery in two phases: (1) mechanical file verification, then (2) four-dimension reasoning quality check ordered by damage severity. Universal across projects and tech stacks.

**#723 — Testing-Patterns Skill**
`[OPEN]` · Author: 4444J99 · [PR #723](https://github.com/anthropics/skills/pull/723)
Comprehensive testing coverage: Testing Trophy philosophy, unit testing (AAA pattern, naming, edge cases), and React component testing with Testing Library.

**#486 — ODT Skill (OpenDocument Format)**
`[OPEN]` · Author: GitHubNewbie0 · [PR #486](https://github.com/anthropics/skills/pull/486)
Creates, fills, reads, and converts .odt/.ods files; parses ODT to HTML. Triggers on mentions of ODT, ODS, ODF, LibreOffice, or ISO-standard document requests.

**#509 — CONTRIBUTING.md**
`[OPEN]` · Author: narenkatakam · [PR #509](https://github.com/anthropics/skills/pull/509)
Closes [Issue #452](https://github.com/anthropics/skills/issues/452). The repo scored 25% on GitHub's community health metrics; this PR is identified as the single most impactful addition.

**#1479 — Plan-File-Hygiene Skill**
`[OPEN]` · Author: Palo-Alto-AI-Research-Lab · [PR #1479](https://github.com/anthropics/skills/pull/1479)
Addresses [Issue #1417]: planning artifacts accumulate with no lifecycle management. A dedicated skill to clean up and govern plan files.

---

## 2. Community Demand Trends

From the Issues data, the most-anticipated directions are:

| Trend | Key Issues |
|---|---|
| **Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) — Community skills impersonating the `anthropic/` namespace; [#83](https://github.com/anthropics/skills/pull/83) — Security-analyzer meta-skill |
| **Skill-Creator Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061) — 0% recall bug blocks all description optimization |
| **Cross-Platform (Windows) Support** | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1061](https://github.com/anthropics/skills/issues/1061) — Subprocess, PATHEXT, encoding, and pipe-select failures |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) — Org-wide sharing within Claude.ai; current workflow requires manual file exchange |
| **Context Window Hygiene** | [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` skill eagerly injects ~156k tokens, exhausting context in one call |
| **Agent Lifecycle & Governance** | [#412](https://github.com/anthropics/skills/issues/412) — Agent-governance skill for policy enforcement and audit trails; [#1329](https://github.com/anthropics/skills/issues/1329) — Compact-memory for symbolic agent state |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) — Expose skills as MCPs for programmatic API signaling |

---

## 3. High-Potential Pending Skills

These active PRs are unresolved but have clear scope and community interest — likely candidates for near-term landing:

1. **[PR #1298](https://github.com/anthropics/skills/pull/1298)** — The single highest-impact fix. Resolving the `run_eval.py` recall=0% bug unblocks the entire skill-creator optimization pipeline. Multiple contributors are working related patches; convergence is imminent.

2. **[PR #1367](https://github.com/anthropics/skills/pull/1367)** — Self-audit skill with mechanical + reasoning quality gates. Addresses [Issue #1385](https://github.com/anthropics/skills/issues/1385) and fills a clear gap in the quality-assurance toolchain.

3. **[PR #83](https://github.com/anthropics/skills/pull/83)** — Skill quality + security analyzers. Directly addresses the namespace-trust crisis in [Issue #492](https://github.com/anthropics/skills/issues/492); strong community alignment.

4. **[PR #1479](https://github.com/anthropics/skills/pull/1479)** — Plan-file-hygiene skill. Solves a well-defined lifecycle problem; authored by Palo Alto AI Research Lab with clear issue grounding.

5. **[PR #514](https://github.com/anthropics/skills/pull/514)** — Document-typography skill. Niche but universal pain point; low-risk, high-utility addition.

6. **[PR #1302](https://github.com/anthropics/skills/pull/1302)** — Color-expert skill. Covers ISCC-NBS, Munsell, OKLCH, CAM16 and more — a domain-specific skill with clear trigger conditions and self-contained scope.

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is **reliable skill-creator tooling**: the `run_eval.py` recall=0% bug and its Windows-specific variants are the single largest blocker, preventing authors from validating and optimizing skills, while parallel concerns around trust (namespace impersonation), context hygiene, and cross-platform support form a coherent cluster around making the skill ecosystem *actually usable* at scale.

---



# Claude Code Community Digest — 2026-08-05

## 1. Today's Highlights

Claude Code **v2.1.222** shipped with critical security hardening for worktree isolation and PreToolUse hook enforcement in background agent tasks. Community attention is dominated by a persistent image-processing API error bug draining usage limits, a text-block dropping bug in adaptive-thinking mode, and a new Windows MSIX GPU crash affecting the browser pane.

---

## 2. Releases

**v2.1.222** — Two significant fixes landed in the last 24 hours:

- **Worktree isolation hardening:** Session and subagent isolation now correctly applies to file edits and Bash commands across every session type, preventing destructive git operations against the main checkout from within isolated worktrees.
- **PreToolUse auto-allow hook fix:** Hooks previously bypassed tool restrictions when applied to background agent tasks; this is now closed.

> Security and sandboxing improvements are directly responsive to long-standing community concerns about agent boundary enforcement.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#62466](https://github.com/anthropics/claude-code/issues/62466) | Repeated "Image couldn't be processed" API errors consuming usage | A persistent bug silently burns through rate limits on failed image processing — users report it draining quotas with no visible output. | 30 comments, 👍 20 |
| [#74260](https://github.com/anthropics/claude-code/issues/74260) | Assistant text blocks silently dropped with adaptive thinking | Text emitted mid-turn before additional thinking is never rendered or persisted to the transcript JSONL — a data-loss bug in the new interleaved-thinking mode. | 24 comments, 👍 15 |
| [#13378](https://github.com/anthropics/claude-code/issues/13378) | 2-space indent + hard wrap at 80 breaks copy-paste | Developers using strict formatting configs find Claude Code's output incompatible; no way to configure it out. This is the most-upvoted open issue. | 15 comments, 👍 72 |
| [#23704](https://github.com/anthropics/claude-code/issues/23704) | Read tool PDF support requires undocumented `poppler-utils` | The Read tool claims PDF support but silently fails without `poppler-utils`, which is absent from most container images — a documentation gap with real breaking impact. | 15 comments, 👍 19 |
| [#21108](https://github.com/anthropics/claude-code/issues/21108) | Claude accesses git origin on startup before any command | Unprompted network egress at startup raises privacy and compliance concerns, especially in air-gapped or restricted CI environments. | 13 comments, 👍 15 |
| [#81275](https://github.com/anthropics/claude-code/issues/81275) | Browser pane crashes the entire Desktop app | Chromium GPU process exits with a consistent crash code (`0x60C201E`) whenever the in-app browser pane is opened — affects all GPU backends on Windows. | 11 comments |
| [#83997](https://github.com/anthropics/claude-code/issues/83997) | Browser pane fails to composite frames (ViewPort 0×0) | `read_page` and `screenshot` are broken; only text extraction works. Internal PBC ticket opened — likely related to the GPU crash above. | Closed, 1 comment |
| [#66563](https://github.com/anthropics/claude-code/issues/66563) | Read tool falsely reports unencrypted PDFs as password-protected | `pdftoppm` returns a false "password-protected" error on plain PDFs, blocking the Read tool entirely for valid files. | 6 comments, 👍 1 |
| [#83243](https://github.com/anthropics/claude-code/issues/83243) | Bash tool fails on trivial commands with "unexpected EOF" on Windows | Even single-line Bash commands fail in v2.1.220 on Windows 11 — a regression that blocks basic terminal usage. | 2 comments |
| [#82144](https://github.com/anthropics/claude-code/issues/82144) | Post-compaction skill re-injection costs ~4× the compaction summary | After compaction, full skill bodies are re-injected as system reminders, multiplying context cost and potentially causing compaction thrash. | 1 comment |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|------------|
| [#83999](https://github.com/anthropics/claude-code/pull/83999) | `fix(scripts): validate gh flag values` | Rejects value-taking `gh` flags missing their argument (e.g., `gh issue list --limit`), preventing incomplete commands from bypassing wrapper validation. |
| [#83995](https://github.com/anthropics/claude-code/pull/83995) | `fix(scripts): validate label option values` | Ensures `--add-label` and `--remove-label` receive a label name before proceeding, fixing silent `$2: unbound variable` aborts under `set -u`. |
| [#83993](https://github.com/anthropics/claude-code/pull/83993) | `fix(scripts): reject self-referential duplicates` | Prevents the duplicate-comment script from proposing an issue as its own duplicate, which previously created self-referential comments and false automation loops. |
| [#83992](https://github.com/anthropics/claude-code/pull/83992) | `fix(plugin-dev): assert expected hook decision` | Adds `--expect allow\|deny\|ask` to `test-hook.sh` so hooks can be validated for *correct* denials, not just execution. Fixes #83800. |
| [#83990](https://github.com/anthropics/claude-code/pull/83990) | `fix(plugin-dev): report missing jq dependency` | `test-hook.sh` now checks for `jq` before use and reports a clear error instead of misclassifying valid JSON as malformed when `jq` is absent. Fixes #83802. |
| [#83374](https://github.com/anthropics/claude-code/pull/83374) | `docs(plugin-dev): document MessageDisplay streaming semantics` | Adds `MessageDisplay` to the Hook Development skill's trigger description, event guidance, and quick-reference table — closing a documentation gap for a supported hook event. |
| [#83738](https://github.com/anthropics/claude-code/pull/83738) | `Fix/83484 symlink path expansion` | Fixes broken `claude` symlink on Linux installs where `%h` was left as a literal placeholder instead of being expanded to the home directory. |
| [#83890](https://github.com/anthropics/claude-code/pull/83890) | `Create pylint.yml` | New CI linting configuration for Python-style checks in the repository. |

---

## 5. Feature Request Trends

- **Configurable code formatting output** — Issue #13378 (72 👍) reflects a strong desire for users to control indentation width and soft/hard wrap settings in Claude's generated code, rather than accepting the current defaults.
- **Browser pane reliability** — Multiple browser-related issues (#81275, #83997, #74902) signal demand for a stable, GPU-resilient in-app browser that works across diverse Windows hardware configurations.
- **Session / project identity** — Issue #81628 requests deriving the project tag from the working directory rather than the git repo name, so clones of the same repo appear distinct in the Desktop session list.
- **Plugin / hook testability** — The cluster of PRs from RerankerGuo (#83990, #83992, #83993, #83995, #83999) shows active investment in making the plugin-development experience more robust and testable.

---

## 6. Developer Pain Points

1. **Silent data loss in thinking mode** — The adaptive/interleaved thinking feature (v2.1.201+) is dropping text blocks from transcripts (#74260), making it unreliable for audit-sensitive workflows.
2. **Windows bash instability** — A new "unexpected EOF" regression in v2.1.220 (#83243) breaks even trivial Bash commands, and the MSIX browser pane crashes on WebGPU init (#81275, #83130), creating a particularly painful Windows experience.
3. **PDF toolchain surprises** — The Read tool's PDF support has two independent bugs: undocumented `poppler-utils` dependency (#23704) and false "password-protected" errors on clean PDFs (#66563).
4. **Context cost bloat after compaction** — Post-compaction skill re-injection (#82144) multiplies context by ~4×, causing compaction thrash and inflating token usage.
5. **Startup network egress** — Unprompted git origin access on launch (#21108) remains an unresolved privacy/compliance friction point for enterprise and CI users.
6. **Background session behavior** — Backgrounding an interactive session seeds only the last prompt, dropping all prior context (#83971); background Bash notifications are also misleading when subagents stop (#80834).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-05

---

## 1. Today's Highlights

The Codex community is overwhelmingly focused on Windows desktop performance, with a cluster of issues reporting WMI storms, PowerShell process leaks, and system-wide input lag on Windows builds. On the release front, four alpha versions (0.147.0-alpha.6.1 through alpha.7) landed in the last 24 hours, signaling active iteration on the Rust CLI. Meanwhile, a steady stream of infrastructure PRs from copyberry[bot] tightened up session management, tool discovery, and model-caching systems.

---

## 2. Releases

Four Rust CLI alpha releases shipped in the last 24 hours, all within the 0.147.0 family:

- **rust-v0.147.0-alpha.7** — latest patch in the 0.147 alpha train.
- **rust-v0.147.0-alpha.6.4**
- **rust-v0.147.0-alpha.6.3**
- **rust-v0.147.0-alpha.6.1**

The rapid cadence suggests targeted fixes around session/agent plumbing rather than a single large feature drop.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Linux desktop app request** | Long-standing demand for a native Codex desktop on Linux; the reporter cites macOS usability problems (issue #10432) as motivation. | 🔥 917 👍 · 198 comments — by far the most-watched issue. |
| [#25719](https://github.com/openai/codex/issues/25719) | **macOS `syspolicyd`/`trustd` CPU runaway** | Codex Desktop triggers OS-level policy daemons into sustained high CPU/memory use, degrading battery and thermals. | 387 👍 · 80 comments |
| [#9203](https://github.com/openai/codex/issues/9203) | **`/undo` feature request (TUI)** | Users lose untracked file changes when Codex edits without git safety nets — a recurring pain point. | 372 👍 · 68 comments |
| [#16857](https://github.com/openai/codex/issues/16857) | **High GPU usage during "thinking"** | A tiny animation drives GPU to ~100 %, impacting battery on Apple Silicon Macs. | 46 👍 · 38 comments |
| [#30009](https://github.com/openai/codex/issues/30009) | **`apply_patch` fails in Windows sandbox** | Blocks Windows users who rely on the sandboxed execution model for safe code edits. | 30 comments · 10 👍 |
| [#33776](https://github.com/openai/codex/issues/33776) | **Windows: hundreds of `taskkill.exe`/`conhost.exe` zombies** | Orphaned child processes cause WMI storms and DWM (Desktop Window Manager) degradation — systemic instability. | 29 comments · 26 👍 |
| [#19425](https://github.com/openai/codex/issues/19425) | **Custom stdio MCP tools not exposed to Desktop threads** | Regression in App Server `0.124.0-alpha.2` hides discovered MCP tools from the conversational agent. | 28 comments · 5 👍 |
| [#25453](https://github.com/openai/codex/issues/25453) | **Windows: `powershell.exe` spawned every second** | Full process-polling loop hammers CPU and is a direct contributor to the broader Windows performance cluster. | 22 comments · 6 👍 |
| [#30408](https://github.com/openai/codex/issues/30408) | **MCP server process leak (9+ GB RSS)** | Per-thread MCP processes are never reaped, causing unbounded memory growth over time. | 22 comments · 6 👍 |
| [#36025](https://github.com/openai/codex/issues/36025) | **System-wide mouse/input lag from PowerShell/WMI polling** | Consolidated report linking the Windows polling behavior to user-perceived stutter across the entire OS. | 7 comments · 3 👍 |

---

## 4. Key PR Progress

| PR | Summary |
|----|---------|
| [#37000](https://github.com/openai/codex/pull/37000) | **Shared skill-cache freshness** — Keys cached skill snapshots by filesystem and plugin identity, coalescing concurrent loads to avoid stale data across plugin reloads. |
| [#36998](https://github.com/openai/codex/pull/36998) | **Deferred custom tools in tool search** — Freeform top-level tools are now indexed and loaded on demand, serialized as Responses API `custom` tools. |
| [#36993](https://github.com/openai/codex/pull/36993) | **`includeTurns` for paginated threads** — Reconstructs full projected turns from paginated history so clients get the legacy complete-view even when storage is paged. |
| [#36992](https://github.com/openai/codex/pull/36992) | **Injectable model-catalog caches** — New async `ModelsCache` trait lets providers and `OpenAiModelsManager` accept custom cache implementations. |
| [#36990](https://github.com/openai/codex/pull/36990) | **Remove legacy collaboration modes** — Drops hidden `PairProgramming` and `Execute` variants from `ModeKind`; only `Default` and `Plan` remain. |
| [#36989](https://github.com/openai/codex/pull/36989) | **Preserve bundled skill caches** — System-skill roots are filtered so a service with bundled skills disabled doesn't delete cache files another service still needs. |
| [#36987](https://github.com/openai/codex/pull/36987) | **Concurrent exec-server dispatch** — New `--concurrent-requests <COUNT>` flag lets health checks and cleanup run in parallel instead of blocking on a single long request. |
| [#36986](https://github.com/openai/codex/pull/36986) | **Process-scoped PSP routing for ChatGPT** — Hidden `--psp` flag propagates through TUI/exec/app-server paths and attaches the `oai-chat-psp=true` cookie to first-party requests. |
| [#36983](https://github.com/openai/codex/pull/36983) | **Preserve ChatGPT auth for trusted staging MCPs** — MCP servers matching `chatgpt-staging.com` (or subdomains) are auto-trusted for ChatGPT cookie auth. |
| [#36963](https://github.com/openai/codex/pull/36963) | **Link Codex attribution in PR bodies** — Attribution text updated to include a hyperlink; previous unlinked form is recognized and replaced without duplication. |

---

## 5. Feature Request Trends

- **Cross-platform desktop parity** — Issue #11023 (Linux desktop) and several macOS quality reports show users expect the desktop app to match CLI capabilities on every platform.
- **Undo / safety nets** — Issue #9203 reflects a strong signal: developers want reversible edits and git-aware guards before Codex touches untracked files.
- **MCP tool visibility** — Issues #19425 and #30408, plus the associated PRs on deferred tools and trusted staging auth, indicate the community is pushing hard for reliable, discoverable MCP integration in the desktop agent loop.
- **Session history integration** — Issue #21079 (CLI sessions in desktop history) and #36964 (preserve working dirs on import) point to a desire for seamless cross-client session portability.
- **Performance-first UX** — GPU idle animations (#16857), WMI polling (#33776, #25453, #36025), and subprocess leaks dominate the issue list; the community prioritizes resource sanity over new features.

---

## 6. Developer Pain Points

1. **Windows process/resource leaks (dominant theme)** — At least seven open issues (#33776, #25453, #30009, #29499, #36025, #34158, #22912) describe the same root cause: the Windows desktop app's process-polling loop spawns excessive `powershell.exe`, `taskkill.exe`, and `conhost.exe` processes, which in turn trigger WMI storms and system-wide input lag. This is the single largest quality gap in the current release train.

2. **MCP server lifecycle management** — Orphaned MCP processes (#30408) and tools that are discovered but not exposed to desktop threads (#19425) suggest the agent's tool-discovery and cleanup paths need tightening.

3. **macOS policy-daemon drag** — Issue #25719 reports that Codex Desktop pushes `syspolicyd` and `trustd` into runaway CPU/memory states, a behavior that directly impacts MacBook battery life and thermal throttling.

4. **Missing basic editor affordances** — The repeated request for `/undo` (#9203) and reports of accidental file modification show that safety-conscious workflows are not yet well-supported.

5. **Session and history portability** — CLI sessions don't surface in desktop history (#21079), and imported external sessions can lose working-directory context (#36964 / #31625), forcing users to re-establish project context manually.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-05

## 1. Today's Highlights

Security and agent reliability dominate this cycle: a variable-expansion bypass in bash/PowerShell tool input is being patched (PR #28691), while multiple critical issues around agent hangs, subagent recovery, and quota-error context corruption are actively being addressed. The pipeline infrastructure also sees significant progress with the introduction of a triage evaluation framework and an iterative bug-fixing state machine.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|---------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent reports GOAL success after MAX_TURNS | A P1 bug where `codebase_investigator` masks turn-limit failures as successful completion, leading to silent wrong answers. | 12 comments, 2 👍 — actively being retested. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs indefinitely | P1: simple tasks like folder creation cause the generalist agent to hang for hours; disabling sub-agents is the only known workaround. | 8 comments, 8 👍 — strong community signal; likely widespread. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions forever | P2: the memory inbox never marks skipped sessions as processed, causing the same low-value sessions to resurface continuously. | 5 comments — tracking with other Auto Memory bugs. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell execution stuck "Waiting input" | P1: after a command completes, Gemini remains in an awaiting state, blocking further progress on even trivial commands. | 4 comments, 3 👍 — high friction for daily use. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent fails on Wayland | P1: browser agent crash in Wayland environments; termination reason shows GOAL but no useful output. | 4 comments, 1 👍 — affects Linux Wayland users. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 400 error with >128 tools | P2: agent hits a server-side 400 when too many tools are available, suggesting no intelligent tool curation is happening. | 3 comments — directly impacts MCP-heavy setups. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent ignores settings.json overrides | P2: `maxTurns` and other overrides in `settings.json` are silently ignored by the browser agent, undermining user control. | 3 comments — configuration reliability concern. |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — Subagents run without permission since v0.33.0 | P1: regression where subagents (e.g. generalist) activate despite being disabled in config — breaking the MCP-only usage model. | 3 comments — perceived as a trust/security issue. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory logging exposes secrets | P2: transcript content reaches the extraction model before redaction, and skills log sensitive data. | 4 comments — privacy-critical, tied to #26522. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent encourages destructive behavior | P2: model uses `git reset --force` and similar dangerous commands when safer alternatives exist. | 3 comments, 1 👍 — safety concern across git/DB operations. |

## 4. Key PR Progress

| PR | What It Does |
|----|-------------|
| [#28691](https://github.com/google-gemini/gemini-cli/pull/28691) | **Security fix:** Closes a variable-expansion bypass (`$VAR`, `${VAR}`) in `detectBashSubstitution()` / `detectPowerShellSubstitution()`, re-hardening the gate added for GHSA-wpqr-6v78-jr5g. |
| [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) | **Error handling:** Unwraps nested `gaxios` streaming errors from `error.cause.message` so rate limits and capacity exhaustion surface structured messages correctly. |
| [#28530](https://github.com/google-gemini/gemini-cli/pull/28530) | **Eval infrastructure:** Adds a triage evaluation framework with an LLM-as-a-Judge rubric and parallel Git worktree runner for the Caretaker Agent pipeline (`tools/caretaker-agent/evals/triage/`). |
| [#28690](https://github.com/google-gemini/gemini-cli/pull/28690) | **Caretaker workflow:** Enables `issue_comment.created` webhook handling; allows `@caretaker-agent` mentions and `/caretaker triage` commands to re-triage `NEEDS_INFO` issues. (Now closed.) |
| [#28639](https://github.com/google-gemini/gemini-cli/pull/28639) | **Bug fix:** Guards `formatTruncatedToolOutput` against `maxChars <= 0`, which previously inflated output ~2× via negative-index `slice` behavior. Fixes #28620. |
| [#28641](https://github.com/google-gemini/gemini-cli/pull/28641) | **Bug fix:** Prevents an infinite loop in `getGhostTextLines` when terminal width is narrower than a single wide codepoint (CJK/emoji). Fixes #19985. |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | **Auth fix:** Dynamically resolves the Cloud Workstations proxy redirect URI for OAuth, fixing login failures inside GCW VMs. |
| [#28664](https://github.com/google-gemini/gemini-cli/pull/28664) | **MCP consent hardening:** Now reflects full MCP server config (`env`, `cwd`, `headers`) in consent prompts and uses them for update-detection comparisons. |
| [#28671](https://github.com/google-gemini/gemini-cli/pull/28671) | **Context corruption fix:** Adds defensive history hardening to prevent context drift and model "autocomplete" behavior when tool executions are interrupted or quota-fallbacks trigger. |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | **Two bug fixes:** Repairs `/compress` session reload failures and fixes tool response loss when hitting quota limits. |
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | **Settings lifecycle fix:** Resolves a load-order race condition where `.env` variables weren't available before settings placeholders were expanded. |
| [#28678](https://github.com/google-gemini/gemini-cli/pull/28678) | **OAuth resource leak:** Centralizes callback server settlement and cleanup to prevent stale timeout leaks. Fixes #28652. |
| [#28677](https://github.com/google-gemini/gemini-cli/pull/28677) | **IDE client timeout:** Adds a 3-second timeout to `getIdeProcessInfo()` process traversal, falling back to no-IDE to prevent TUI stuck on "Initializing...". |

## 5. Feature Request Trends

- **AST-aware codebase tools** (#22745, #22746): Multiple issues track whether parsing-aware reads/searches (via tilth or glyph) would reduce turn count and improve navigation precision.
- **Subagent visibility & control** (#22598, #22323, #22232): Users want subagent trajectories shareable via `/chat share`, reliable recovery after turn limits, and resilient browser session takeover.
- **Zero-dependency OS sandboxing** (#19873): A large-effort proposal to leverage the model's native bash affinity through sandboxed execution and post-execution intent routing.
- **Local subagent scaffolding** (#20195): Sprint-level work to build out local subagent capabilities as a first-class feature.
- **Component-level evals** (#24353): 76 behavioral evals now exist; the community wants robust per-component evaluation infrastructure.
- **Self-aware CLI guidance** (#21432): Request for the agent to accurately describe its own flags, hotkeys, and self-execution mechanics.

## 6. Developer Pain Points

- **Agent hangs and silent failures** are the top complaint: generalist agent hangs (#21409), subagent GOAL misreporting (#22323), and shell stuck-in-waiting (#25166) all cause workflows to stall without clear error signals.
- **Configuration is unreliable**: `settings.json` overrides ignored by browser agent (#22267), subagents activating despite being disabled (#22093), and symlinked agent files not recognized (#20079) all erode trust in the config system.
- **Auto Memory quality and privacy**: Low-signal sessions are retried indefinitely (#26522), invalid patches are silently dropped (#26523), and secret redaction happens after model ingestion (#26525).
- **Tool overload causes 400 errors** (#24246): No intelligent tool curation when 400+ tools are registered, breaking the API call.
- **Destructive behavior** (#22672): Model reaches for `git reset --force` and similar commands when safer alternatives exist, especially in complex git and DB workflows.
- **Error messages are unhelpful**: Quota errors and stream failures surface as generic messages rather than actionable guidance (#28672, #28566).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-05

---

## 1. Today's Highlights

GitHub Copilot CLI v1.0.79-1 shipped with a **breaking change**: the sandbox setting `allowDevToolCaches` has been renamed to `allowDevToolAccess`, now covering dev-tool config and registries in addition to caches. A growing set of issues around MCP server initialization failures, BYOK streaming errors, and enterprise policy validation have surfaced in the last 24 hours, signaling active debugging ahead of the next patch cycle.

---

## 2. Releases

### v1.0.79-1

- **BREAKING:** `allowDevToolCaches` renamed → `allowDevToolAccess`. The old key is silently ignored; existing `false` opt-outs revert to the default (on). Users must update their settings to retain the previous blocklist behavior.

🔗 [GitHub Releases](https://github.com/github/copilot-cli/releases)

---

## 3. Hot Issues

| # | Title | Why It Matters | Community |
|---|-------|---------------|-----------|
| [#1504](https://github.com/github/copilot-cli/issues/1504) | Custom theme support | Users want shareable JSON themes beyond the built-in set — a broad quality-of-life request for a tool developers use daily. | 8 comments · 👍 23 |
| [#1697](https://github.com/github/copilot-cli/issues/1697) | Session forking | Enables branching a conversation into parallel sessions with shared context — a natural workflow for multi-track debugging. | 3 comments · 👍 25 |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | Org-level Agents not showing up | Enterprise users report that repo-scoped agents inside `{org}/.github-private` fail to surface in CLI or VS Code, blocking org-wide agent adoption. | 7 comments · 👍 9 |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | MCP init fails with FastMCP `-32602` | CLI 1.0.79-1 cannot connect to FastMCP servers because `server/discover` returning `-32602` is treated as a hard failure instead of a graceful fallback. | 1 comment · 👍 0 |
| [#4196](https://github.com/github/copilot-cli/issues/4196) | BYOK completions wire API fails with `reasoning_content` | Bring-your-own-key providers that emit `reasoning_content` in streaming deltas hit a transient API error loop (5 retries), breaking custom model workflows. | 2 comments · 👍 0 |
| [#4349](https://github.com/github/copilot-cli/issues/4349) | Managed settings policy rejects `"enable"` enum | Enterprise managed-policy fetch fails schema validation when `permissions.disableBypassPermissionsMode` returns `"enable"`, blocking all local/custom MCP servers. | 1 comment · 👍 0 |
| [#2692](https://github.com/github/copilot-cli/issues/2692) | Web Search MCP tool error | `github-mcp-server` web search tool fails with a Streamable HTTP error on POST, disrupting research-and-summarize agent workflows. | 6 comments · 👍 2 |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | Ctrl+H misinterpreted as Ctrl+Backspace under WSL2 | A terminal-emulator leak (`WT_SESSION`) causes `ctrl+h` (delete char) to behave as `ctrl+w` (delete word), breaking expected editing semantics in WSL2. | 5 comments · 👍 0 |
| [#4005](https://github.com/github/copilot-cli/issues/4005) | Billing entity not selected for memory saves | Enterprise users cannot save memories — the CLI reports "billing entity isn't selected" even though other enterprise features work, suggesting a regression in credential routing. | 4 comments · 👍 3 |
| [#4202](https://github.com/github/copilot-cli/issues/4202) | `view` tool reports "Path does not exist" in 1.0.73 | Regression introduced in v1.0.72: the built-in `view` tool fails on existing text files, breaking non-interactive and debugging workflows. | 4 comments · 👍 1 |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#4355](https://github.com/github/copilot-cli/pull/4355) | Merge | OPEN | Merge PR — details pending. |
| [#4366](https://github.com/github/copilot-cli/pull/4366) | Security findings resolution for `copilot-cli` | OPEN | Resolves fundamental security findings for the Vault app in `ci, production`; requires reviewer to fill `<UPDATE_ME>` placeholders before merge. |

> **Note:** Only 2 PRs were updated in the last 24 hours; no feature or fix PRs landed in this window.

---

## 5. Feature Request Trends

1. **Custom theming & accessibility** — [#1504](https://github.com/github/copilot-cli/issues/1504), [#3898](https://github.com/github/copilot-cli/issues/3898): Users want shareable JSON themes and fixes for OSC-based foreground/background clashes.
2. **Session management & cross-device continuity** — [#1947](https://github.com/github/copilot-cli/issues/1947), [#1697](https://github.com/github/copilot-cli/issues/1697), [#2019](https://github.com/github/copilot-cli/issues/2019): Cloud-synced sessions, session forking, and session deletion are top community desires.
3. **Bring-your-own-model (BYOK) expansion** — [#4139](https://github.com/github/copilot-cli/issues/4139), [#4196](https://github.com/github/copilot-cli/issues/4196): Demand for custom LLM endpoints and robust streaming-delta handling (especially `reasoning_content`).
4. **Plugin & skill ergonomics** — [#1709](https://github.com/github/copilot-cli/issues/1709), [#4048](https://github.com/github/copilot-cli/issues/4048), [#4361](https://github.com/github/copilot-cli/issues/4361): Auto-update for plugins, slash-command invocation for repo-level skills, and fixing a regression that breaks plugin skill routing.
5. **Observability & persistent context** — [#2532](https://github.com/github/copilot-cli/issues/2532), [#4174](https://github.com/github/copilot-cli/issues/4174): Persistent token-usage bar and ACP server exposure of context/cost metrics.

---

## 6. Developer Pain Points

- **MCP initialization brittleness:** Both [#4370](https://github.com/github/copilot-cli/issues/4370) (FastMCP `server/discover` failure) and [#4349](https://github.com/github/copilot-cli/issues/4349) (enterprise policy enum validation) show that non-fatal server responses are being treated as hard errors, blocking entire categories of MCP usage.
- **BYOK streaming incompatibility:** [#4196](https://github.com/github/copilot-cli/issues/4196) reveals that the CLI's completions wire API does not gracefully handle `reasoning_content` in streaming deltas, causing retry storms that break custom-model workflows.
- **Session state loss:** [#4334](https://github.com/github/copilot-cli/issues/4334) reports that stashed (`ctrl+S`) prompts are discarded on session switch — a data-loss bug for power users juggling multiple conversations.
- **Enterprise policy regressions:** [#4005](https://github.com/github/copilot-cli/issues/4005) and [#4349](https://github.com/github/copilot-cli/issues/4349) both point to enterprise deployment friction — broken billing-entity routing and overly strict schema validators are preventing otherwise-functional setups from working.
- **Keyboard/terminal semantics drift:** [#4328](https://github.com/github/copilot-cli/issues/4328) and [#4267](https://github.com/github/copilot-cli/issues/4267) highlight that terminal-environment leaks (WSL2, native Windows zellij) are causing input-box corruption and misrouted key bindings.
- **Plugin skill invokability:** [#4048](https://github.com/github/copilot-cli/issues/4048) and [#4361](https://github.com/github/copilot-cli/issues/4361) describe a regression where repo-level plugin skills no longer appear as slash commands and the desktop app's rewrite logic is broken, forcing natural-language fallback.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-05

## 1. Today's Highlights

Two new bugs landed today: a Windows-specific IME character duplication issue (Thai, etc.) and an unexpected CLI exit during normal session progression — both requiring urgent attention from the core team. On the feature side, the long-awaited PR to expose `AI_AGENT` to subprocesses merged into review, enabling better observability for orchestrators wrapping Kimi Code CLI.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| #2586 | Agent reliability degrades at high context fill (~500K tokens) | Long-running agentic sessions hit a sharp reliability wall at ~500K tokens — repetitive action loops, no escalation, instruction drift. This is a fundamental scaling limit that affects power users orchestrating multi-step code changes. | Opened today; 1 comment so far. High concern given the ~500K token threshold being well below theoretical model limits. |
| #2587 | Kimi CLI exits abnormally when advancing the session normally | Unexplained crashes during normal session progression on Windows (v0.29.2, K3 high model). Disrupts every user relying on the CLI for extended coding tasks. | Opened today; no comments yet. |
| #2584 | Thai & IME-based characters duplicated on Windows | IME composition bugs cause character duplication when typing in the prompt on Windows 11 (v0.31.1). Affects non-Latin script users significantly. | Opened yesterday; no comments yet. |
| #1282 | Remote Control — continue local sessions from any device | One of the most-voted enhancement requests (24 👍). Allows users to step away from their desk and continue sessions from phone/tablet/browser while keeping full local environment access. | 12 comments; strong community demand indicated by upvotes. |
| #1283 | Memory System — persistent context across sessions | Users want the CLI to remember project patterns and preferences across sessions, both auto-managed and user-defined. Critical for long-term project continuity. | 17 comments; author is also the Remote Control requester (CatKang), suggesting a unified "session continuity" vision. |
| #2583 | ACP: advertise available models & mid-session switching | ACP clients (Happy Coder, Zed) currently can't discover available models or switch mid-session. Blocks integration with external editors and mobile clients. | Opened yesterday; no comments yet. |
| #1414 | Permission mode switching (referenced in #2364) | Referenced by PR #2364 — protocol-level permission control for ACP sessions. Important for security-conscious deployment. | See PR #2364. |

## 4. Key PR Progress

| # | Title | Description | Status |
|---|-------|-------------|--------|
| #2585 | `feat(cli): set AI_AGENT for subprocesses` | Exposes `AI_AGENT=kimi` to all subprocesses launched from pip/uv and standalone entrypoints. Enables orchestrators and wrappers to detect when a process is spawned by Kimi Code CLI. Covers missing, blank, and explicit marker behavior across both entry points. | Open, awaiting review |
| #2200 | `fix(shell): adapt timeouts for long commands` | Extends shell timeouts automatically for known slow operations (git submodule cleanup, clone/fetch, package installs, builds) while keeping the 60s default for normal commands. Preserves explicit caller-supplied timeouts. Addresses a common pain point where long-running commands are falsely killed. | Open since May 2026 |
| #2364 | `feat(acp): support permission mode switching` | Adds protocol-level ACP permission mode switching for Kimi sessions. Advertises default permission modes to clients. Stacks on top of PR #2363 — must be reviewed in order. Resolves #1414. | Open since May 2026 |

## 5. Feature Request Trends

- **Session continuity** is the dominant theme: both the Remote Control (#1282) and Memory System (#1283) requests, filed by the same author, point to a clear community desire for seamless, persistent workflows that survive context switches, device changes, and session restarts.
- **ACP ecosystem maturity**: Issues and PRs around model discovery (#2583) and permission mode switching (#2364) indicate growing demand from third-party clients (Zed, Happy Coder) for richer protocol support.
- **Tooling reliability at scale**: The 500K token degradation bug (#2586) and the timeout PR (#2200) both signal that as users push Kimi Code CLI into longer, more complex agentic workflows, reliability bottlenecks are emerging.

## 6. Developer Pain Points

1. **Windows IME / input handling** — Character duplication (#2584) and unexpected exits (#2587) on Windows are high-friction bugs that directly block daily use for non-English-input users and Windows developers.
2. **Agentic session stability at scale** — The ~500K token reliability wall (#2586) is a critical gap for users running multi-step, tool-heavy agent workflows. Repetitive loops and instruction drift at high context fill suggest a need for context management or session segmentation strategies.
3. **Subprocess observability** — The push to set `AI_AGENT` (#2585) indicates that orchestrators and wrapper scripts currently lack a reliable way to identify Kimi-spawned processes, pointing to a broader pain around toolchain integration.
4. **Long command timeouts** — Users routinely hit the 60s shell timeout on legitimate long-running operations (git, package installs, builds), driving demand for adaptive timeout logic (#2200).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-05

---

## 1. Today's Highlights

OpenCode v1.18.13 shipped with PR review context improvements in the TUI and extensive right-to-left layout fixes for Desktop. A cluster of DeepSeek V4 Flash issues surfaced on the Go plan, driving significant community discussion, while a regression in v1.18.5+ causing provider/model load failures on Desktop has users demanding an immediate rollback.

---

## 2. Releases

**v1.18.13** ([GitHub](https://github.com/anomalyco/opencode/releases))

- **TUI**: GitHub PR reviews now include the pull request number and URL in context.
- **Desktop**: Fixed multiple right-to-left layout issues across tabs, drawers, resizing, and titlebar interactions, plus shared directional icon behavior.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | Add Go plan usage/balance API endpoint | Developers need programmatic access to rolling/weekly/monthly usage windows for billing and automation. | 🔥 126 👍 · 29 comments |
| [#39845](https://github.com/anomalyco/opencode/issues/39845) | DeepSeek V4 Flash requires "Enable models hosted in China" mid-session | Users are being force-opted into a China-hosted model without warning, breaking workflows. | 22 👍 · 15 comments |
| [#34498](https://github.com/anomalyco/opencode/issues/34498) | Respect `disable-model-invocation: true` in SKILL.md frontmatter | Aligns OpenCode behavior with Claude Code's skill metadata contract; 48 upvotes signal strong demand. | 48 👍 · 9 comments |
| [#40483](https://github.com/anomalyco/opencode/issues/40483) | DeepSeek v4 Flash Free returns blank response on Windows 11 Desktop | Response animation plays but output is empty — a clear bug affecting desktop users. | 7 comments |
| [#40485](https://github.com/anomalyco/opencode/issues/40485) | deepseek-v4-flash via opencode-go returns 403 / hangs | Go plan users report 403 errors while other models (v4-pro, minimax-m3) work on the same key. | 6 👍 · 6 comments |
| [#40409](https://github.com/anomalyco/opencode/issues/40409) | Go `deepseek-v4-flash` serves V3.2 instead of V4 Flash 0731 | High-severity billing/quality mismatch — users pay for V4 but receive V3.2 with a 2025-05 cutoff. | 5 comments |
| [#22235](https://github.com/anomalyco/opencode/issues/22235) | VSCode Context Awareness not taking effect | Users report the feature never activates in VSCode; unclear if prerequisites are documented. | 7 👍 · 12 comments |
| [#38723](https://github.com/anomalyco/opencode/issues/38723) | `opencode run` intermittently hangs during init (~56% failure rate) | A severe reliability issue for headless/CLI workflows; no output or error, process just stalls. | 1 👍 · 4 comments |
| [#40171](https://github.com/anomalyco/opencode/issues/40171) | Go `/v1/responses` emits incomplete SSE stream | Breaking change for Codex-style clients that depend on `output_item.added` and `content_part.added` events. | 2 👍 · 3 comments |
| [#40516](https://github.com/anomalyco/opencode/issues/40516) | Desktop provider/model/MCP fail to load on startup (regression v1.18.5+) | A version regression making the Desktop app unusable for some users ~80% of the time; downgrade to v1.18.4 is the only workaround. | 2 comments |

---

## 4. Key PR Progress

| # | Title | Type | Summary |
|---|-------|------|---------|
| [#40552](https://github.com/anomalyco/opencode/pull/40552) | Avoid eager directory snapshots | Fix | Large repos now pay the directory materialization cost only when a directory/mixed search is requested, instead of on every indexed file. |
| [#40551](https://github.com/anomalyco/opencode/pull/40551) | Streamline tab navigation shortcuts | Feat | Adopts Slack/Mattermost-style shortcuts: `Option+↑/↓` for prev/next tab, `Option+Shift+↑/↓` for unread tabs, `Ctrl+Shift+Tab`/`Ctrl+Tab`. |
| [#40549](https://github.com/anomalyco/opencode/pull/40549) | Classify malformed Responses tool calls | Fix | Distinguishes successfully decoded from malformed function calls; normalizes incomplete responses as `error` instead of `tool-calls`. |
| [#40538](https://github.com/anomalyco/opencode/pull/40538) | Make xAI OAuth device-only | Fix | Replaces loopback OAuth with RFC 8628 device flow for SuperGrok; removes PKCE, CORS, and callback code. |
| [#40547](https://github.com/anomalyco/opencode/pull/40547) | Derive Anthropic tool finish reason | Fix | Normalizes benign `end_turn`/`stop_sequence`/absent reasons as `tool-calls` when local tool work is present. |
| [#40546](https://github.com/anomalyco/opencode/pull/40546) | Preserve Gemini tool finish semantics | Fix | Keeps Gemini tool calls classified as `tool-calls` even when the terminal event omits `finishReason`. |
| [#40545](https://github.com/anomalyco/opencode/pull/40545) | Add model attribution to `run --format json` | Fix | `step_start`/`step_finish` events now include the model, enabling headless consumers to attribute tokens and cost. |
| [#40427](https://github.com/anomalyco/opencode/pull/40427) | Experimental renderer performance improvements | Perf | Initial renderer entry dropped from 7.45 MB to 1.82 MB (−75.5%) using an immutable partial DB snapshot. |
| [#40535](https://github.com/anomalyco/opencode/pull/40535) | Retry empty incomplete streams | Fix | Retries incomplete terminal-less streams only while the Core output guard confirms no model output started. |
| [#40403](https://github.com/anomalyco/opencode/pull/40403) | Auto-compact stale sessions resumed after idle | Feat | Automatically compacts sessions on resume to avoid re-sending full context prefixes, reducing token cost. |

---

## 5. Feature Request Trends

- **Usage & billing transparency**: Issue #16017 (126 👍) is the most-upvoted open issue — developers want a public API for Go plan usage windows (rolling/weekly/monthly) to build external dashboards and cost controls.
- **Skill metadata contracts**: Issue #34498 (48 👍) reflects demand for parity with Claude Code's `SKILL.md` frontmatter, specifically `disable-model-invocation`, so skills can constrain model selection declaratively.
- **Session efficiency**: PR #40403 and issue discussions point to growing interest in automatic context compaction to control costs on long-running sessions.
- **Platform integration parity**: VSCode Context Awareness (issue #22235) and Flatpak auto-updater gating (issue #39670) show users expect OpenCode to match the integration depth of competing tools.
- **OAuth & auth simplicity**: The xAI OAuth device-flow PRs (#40537, #40538) indicate a trend toward removing complex loopback flows in favor of device authentication for broader compatibility.

---

## 6. Developer Pain Points

- **DeepSeek V4 Flash instability on Go plan**: A cluster of issues (#39845, #40483, #40485, #40409, #40460) reports the model returning blank responses, 403 errors, or the wrong model version (V3.2 instead of V4 Flash). This is the most active pain point this cycle.
- **Desktop startup regression (v1.18.5+)**: Issue #40516 describes providers, models, and MCPs failing to load on ~80% of Desktop starts since v1.18.5, with v1.18.4 as the only known stable version — a blocking regression for team deployments.
- **CLI reliability**: Issue #38723 reports `opencode run` hanging during init with a ~56% failure rate, producing no output or error, which breaks headless and CI workflows.
- **Incompletely documented features**: VSCode Context Awareness (issue #22235) and copy-paste in Tmux/Kitty (issue #36646) both reflect friction from features that exist but lack clear configuration or terminal compatibility.
- **Web interface UX gaps**: Issue #40502 reports the web UI does not auto-refresh conversations in real-time, requiring manual page refreshes — a basic expectation for a web-based tool.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-05

## 1. Today's Highlights

The biggest focus this cycle is **compaction reliability under enterprise Copilot deployments** — multiple reports converge on 421 Misdirected Request and "unknown stamp" errors during context summarization, suggesting the model's baseUrl rewrite is dropping in compact paths. Meanwhile, the team shipped several quality-of-life PRs: Mermaid diagram rendering in TUI markdown, retryable management HTTP requests, and configurable summarization models/thinking levels that directly address two of the top community requests.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#6768](https://github.com/badlogic/pi-mono/issues/6768) | Compaction using Copilot Enterprise not possible | 19 comments, 18 👍 — Enterprise users cannot use `/compact` at all due to a 421 from OpenAI API. Open and widely felt. |
| [#7547](https://github.com/badlogic/pi-mono/issues/7547) | [Windows] [sink-thread] How do you use Pi on Windows? | Strategic issue: Windows adoption is a known gap and this is a centralized pain-point collection thread for prioritization. |
| [#5023](https://github.com/badlogic/pi-mono/issues/5023) | Terminal scrolls to beginning without reason | Random, disruptive terminal behavior during active model turns; 11 comments, closed but recurring class of UX issue. |
| [#7161](https://github.com/badlogic/pi-mono/issues/7161) | anthropic-messages never sends x-client-request-id | Breaks session affinity in gateway/proxy setups that key routing on that header — blocks multi-account round-robin users. |
| [#7465](https://github.com/badlogic/pi-mono/issues/7465) | Add payload size to iTerm2 inline images | `@xterm/addon-image@0.9.0` silently drops images without a `size` param — regression-breaking for TUI image rendering. |
| [#7413](https://github.com/badlogic/pi-mono/issues/7413) | Compaction fails on GitHub Copilot GHE.com enterprise — "unknown stamp" | Same root family as #6768; "invalid token: unknown stamp" confirms enterprise auth handling needs a fix in the summarization path. |
| [#7244](https://github.com/badlogic/pi-mono/issues/7244) | Enhance `version` to show runtime (bun|node|deno) | Diagnostic quality-of-life — a disproportionate number of issues stem from bun-specific behavior that isn't captured in reports. |
| [#7553](https://github.com/badlogic/pi-mono/issues/7553) | Configurable thinking level/model for compaction | Users running auto-compaction on reasoning models can't decouple summarization thinking budget from normal turns — now addressed by PR #7602. |
| [#7128](https://github.com/badlogic/pi-mono/issues/7128) | New default PI_* guideline over-encourages unnecessary bash calls | System prompt change is biasing agents toward `env` inspection commands; 6 comments, closed with no-action — worth watching for prompt-tuning feedback. |
| [#6817](https://github.com/badlogic/pi-mono/issues/6817) | `find` returns no results for path patterns on Windows | `src/**/*.ts` style globs fail on Windows due to path-separator handling in the find tool — blocking for Windows developers. |

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#7632](https://github.com/badlogic/pi-mono/pull/7632) | fix: retry transient management HTTP requests | OPEN | Retries idempotent management requests to pi.dev, GitHub releases, and tools — fixes #6675 and related timeout issues. |
| [#7624](https://github.com/badlogic/pi-mono/pull/7624) | feat(coding-agent): render Mermaid diagrams | OPEN | Closes #7623 — renders Mermaid diagrams inside markdown in the TUI using `grok-mermaid`. |
| [#7597](https://github.com/badlogic/pi-mono/pull/7597) | fix: make extension selector scrollable in fullscreen mode | OPEN | Wraps diff titles in ScrollView, pins yes/no actions, adds `[`/`]` keybindings for mouse-free scrolling — closes fullscreen review pain. |
| [#7612](https://github.com/badlogic/pi-mono/pull/7612) | fix(tui): add size param to iTerm2 image encoder | OPEN | Closes #7465 — adds decoded byte count to OSC 1337 sequences so `@xterm/addon-image@0.9.0` renders images correctly. |
| [#7602](https://github.com/badlogic/pi-mono/pull/7602) | feat(coding-agent): configurable summarization models | OPEN | Closes #7553 — lets users configure separate models and thinking levels for compaction and branch summaries. |
| [#7619](https://github.com/badlogic/pi-mono/pull/7619) | feat(coding-agent): resume failed turn by selecting it in /tree | OPEN | Closes #7609 — clicking a failed assistant entry retries the turn in-place instead of dead-ending. |
| [#7621](https://github.com/badlogic/pi-mono/pull/7621) | feat(rpc): expose argument completions via get_argument_completions | CLOSED | New RPC command for embedded clients (e.g. web UIs) to surface slash-command subcommand/argument completions. |
| [#7571](https://github.com/badlogic/pi-mono/pull/7571) | feat(ai): add built-in Cortecs provider support | CLOSED | Adds [Cortecs](https://cortecs.ai) as a built-in provider via models.dev integration — expands European model router options. |
| [#7610](https://github.com/badlogic/pi-mono/pull/7610) | feat(ai): add LLM Gateway and LLM Gateway DevPass providers | OPEN | Adds [LLM Gateway](https://llmgateway.io) as built-in `openai-completions` providers; replaces auto-closed #7480. |
| [#7606](https://github.com/badlogic/pi-mono/pull/7606) | fix(ai): let explicit chatgpt-account-id header override JWT extraction for Codex | CLOSED | Fixes Codex auth for accounts whose tokens omit `chatgpt_account_id` — uses OAuth-stored accountId as fallback. |

## 5. Feature Request Trends

- **Configurable compaction behavior** — Users want separate model/thinking controls for summarization (#7553 → #7602) and context-window size selection (#5064). This is the most vocal request cluster.
- **Provider expansion** — Three new provider integrations landed or are in flight this cycle (Cortecs #7571, LLM Gateway #7610/#7480, Qwen Token Plan Individual #7631), signaling strong community demand for more routing options beyond OpenAI/Claude.
- **TUI visual features** — Mermaid diagram rendering (#7623/#7624) and image-size compliance (#7465/#7612) show ongoing investment in richer terminal output.
- **RPC/embeddability** — Argument completions (#7621) and RPC-over-sockets (#7599) indicate growing interest in embedding Pi in external tooling and web UIs.
- **Windows parity** — Repeated Windows-specific bugs (find globs #6817, skill loading #7427, fullscreen keybindings #7574) suggest a sustained feature request for first-class Windows support.

## 6. Developer Pain Points

1. **Enterprise Copilot compaction is broken** — Issues #6768, #7413, and #7579 all report the same symptom (421 / "unknown stamp") in the compaction path while normal chat works. This is the highest-impact bug cluster this cycle.
2. **OAuth refresh can freeze sessions** — Issue #7508 documents a stalled refresh holding the credential-store lock for ~5 minutes, blocking all work mid-session.
3. **Windows path/glob handling** — The `find` tool (#6817) and `loadSkills` (#7427) both fail on Windows due to path-separator and `path.relative()` assumptions, creating a consistent friction point for Windows users.
4. **TUI rendering regressions** — Fullscreen keybinding theft (#7574), uncaught exceptions on wide dialog lines (#7528), scroll jumps on viewport overflow (#7616), and persistent red error lines after successful retries (#7613) form a pattern of terminal-rendering fragility.
5. **Diagnostic visibility** — Runtime detection (bun vs node #7244), `node:sqlite` missing from release binaries (#7594), and provider auth not exposed via RPC (#7590) all point to a recurring need for better diagnostics and tooling surfaces.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-05

## 1. Today's Highlights

Qwen Code v0.21.5 shipped with a landmark **macOS Electron-to-Tauri migration bridge**, enabling a one-time opt-in upgrade path for desktop users. Community attention is heavily focused on **trust and security** — the deterministic tool-execution boundaries proposal (#8102) and external pre-execution policy provider (#8125) reflect a deliberate push toward a more constrained agent runtime. Concurrently, several critical bugs were surfaced around MCP statefulness, cancelled tool mutation, and daemon resource accounting.

---

## 2. Releases

**v0.21.5** (2026-08-04) — *Stable*
- Adds an opt-in one-time update bridge for macOS users migrating from the Electron desktop app to the new Tauri shell (#8392).
- Introduces detailed execution-specific outcome tracking for tool calls.

**v0.21.6-preview.0** & **v0.21.5-nightly.20260805.32e274157** (2026-08-05)
- `feat(browser-ext)`: Alpha readiness diagnostics for the browser extension (#6739).
- `docs`: Headless Goal workflow documentation.

**v0.21.4-nightly.20260804.d6f55a1c9**
- Electron-to-Tauri bridge for desktop updates (#8392).
- Fix: prevents table dialog issues in web-shell.

---

## 3. Hot Issues

| # | Title | Why It Matters | Comments |
|---|-------|---------------|----------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | Deterministic tool-execution boundaries for a trustworthy agent runtime | Core security architecture proposal — keep the LLM outside the trust boundary and let the runtime constrain, authorize, observe, and evaluate actions deterministically. High-impact for enterprise adoption. | 17 |
| [#8519](https://github.com/QwenLM/qwen-code/issues/8519) | Severe screen flashing in tmux | UX bug affecting terminal-based users;每秒闪屏一两次 makes the tool nearly unusable in tmux environments common among power users. | 11 |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | Bound multi-workspace daemon resource usage | `qwen serve` limits workspace/session counts but does not bound bytes held by request bodies or WebSocket assembly — a gap for production deployments. | 9 |
| [#8136](https://github.com/QwenLM/qwen-code/issues/8136) | Provider warning sanitizer leaks passwords containing `@` | Credentials in URLs are incorrectly parsed by `sanitizeProviderWarningSegment`, leaking passwords into `/status` payloads. Security-relevant. | 6 |
| [#8493](https://github.com/QwenLM/qwen-code/issues/8493) | Cancelled file tools can still mutate files | `write_file` and `edit` continue executing filesystem writes after an abort signal fires during async preparation. Data-safety-critical bug. | 5 |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | Post-abort turns not written to local session transcript | After `APIUserAbortError`, subsequent turns are silently dropped from the transcript, corrupting session continuity in ACP/Web bridge sessions. | 5 |
| [#8533](https://github.com/QwenLM/qwen-code/issues/8533) | Content[]/Part[] cannot encode per-provider reasoning-replay contracts | Foundational type-system limitation identified for multi-provider reasoning consistency. Draft status; invites community discussion. | 4 |
| [#8550](https://github.com/QwenLM/qwen-code/issues/8550) | `qwen mcp list` hangs on SSE servers without `endpoint` event | Infinite hang, not just timeout, when an SSE MCP server never emits the legacy `endpoint` event. Blocks users with non-standard MCP servers. | 3 |
| [#8452](https://github.com/QwenLM/qwen-code/issues/8452) | Size-triggered microcompaction invalidates prompt cache | Microcompaction rewrites an already-cached conversation prefix on consecutive ToolResult turns, causing repeated cache misses and degraded performance. | 3 |
| [#8491](https://github.com/QwenLM/qwen-code/issues/8491) | Signal-terminated shell commands report success | A process killed by an external signal can produce a zero-exit outcome, causing the agent to treat a failed command as successful. | 3 |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#8125](https://github.com/QwenLM/qwen-code/pull/8125) | External tool guard provider for `qwen serve` | Merged | Opt-in pre-execution policy provider for ACP deployments. Completes an authenticated, versioned handshake with an origin-only loopback HTTP(S) provider. Process-start mode is `off` by default. |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | Add Kimi and Xiaomi MiMo providers | Open | First-class presets for `/auth` → Third-party Providers. Kimi supports Coding Plan, API Key (China), API Key (International). MiMo supports pay-as-you-go plus China and Singapore regions. |
| [#8439](https://github.com/QwenLM/qwen-code/pull/8439) | Ctrl+click hyperlinks and right-click context menu in VP mode | Open | Restores native terminal capabilities (link clicking, context menu) that were lost when Virtual Viewport mode enabled SGR mouse tracking. |
| [#8396](https://github.com/QwenLM/qwen-code/pull/8396) | Close four trust-boundary holes in hook execution | Open | Fixes HTTP hooks following redirects (bypassing URL whitelist and SSRF checks), among other execution-surface narrowing changes. |
| [#8496](https://github.com/QwenLM/qwen-code/pull/8496) | Run read-only info commands immediately mid-turn | Open | `/stats`, `/about`, `/context` now execute mid-stream instead of being silently swallowed and deferred. |
| [#8461](https://github.com/QwenLM/qwen-code/pull/8461) | Support local `gh` authentication in channels | Open | Web Shell channels can reuse the daemon host's existing `gh auth login` credential when no PAT is configured. |
| [#8445](https://github.com/QwenLM/qwen-code/pull/8445) | Allow session refresh with daemon auth | Open | Fixes document navigation to load the public HTML shell before bearer auth, while keeping session API subpaths gated. |
| [#8443](https://github.com/QwenLM/qwen-code/pull/8443) | Click to expand/collapse thought while streaming | Open | Removes the restriction that blocked thought expansion during the pending/streaming state. |
| [#8548](https://github.com/QwenLM/qwen-code/pull/8548) | Build review CLI bundle once per scan, fan out to legs | Open | Perf improvement for autofix review pipeline — eliminates redundant `npm ci` + `build` + `bundle` in each leg. |
| [#8353](https://github.com/QwenLM/qwen-code/pull/8353) | Let ESC cancel ongoing work before popping queued messages | Open | ESC now cancels the active agent request instead of being consumed by the input prompt's queue logic. |

---

## 5. Feature Request Trends

- **Trustworthy / bounded agent runtime**: The dominant theme across multiple issues (#8102, #8125, #8396, #8533) — the community and maintainers are actively building a runtime that constrains what the LLM can do, keeps it outside the trust boundary, and provides deterministic authorization and audit trails.
- **ACP / IDE integration parity**: Several feature requests (#8514, #8513, #8544) target missing parity with Claude Code and Codex in JetBrains ACP — reasoning-effort tiers, context-usage indicators, and task-list rendering.
- **MCP reliability**: Requests and bugs (#8550, #8492) highlight a need for more robust MCP session management, hot-reload correctness, and graceful handling of non-standard SSE servers.
- **Multi-provider support**: Addition of Kimi and MiMo (#8368) signals continued expansion beyond OpenAI-compatible providers, with regional pricing and access patterns.
- **Daemon resource governance**: Feature requests around bounded resource usage (#8051) and workspace runtime ownership (#8213) indicate growing production deployment scenarios that need formal resource contracts.

---

## 6. Developer Pain Points

1. **Session continuity broken after aborts** — Cancelled requests and `APIUserAbortError` events lose subsequent turns from the local transcript (#8356) and can reconstruct the dangling-unsigned-thought hazard (#8535), making recovery from interruptions unreliable.
2. **Filesystem safety under cancellation** — Cancelled `write_file` / `edit` calls can still mutate the disk (#8493), and signal-killed shell commands may report success (#8491). Both are serious data-integrity concerns.
3. **MCP session state staleness** — Hot-reloading MCP metadata without reapplying trust/allowlist settings leaves stale registrations (#8492), and `qwen mcp list` can hang indefinitely on slow SSE servers (#8550).
4. **Prompt cache thrashing** — Size-triggered microcompaction repeatedly invalidates cached prefixes on consecutive ToolResult turns (#8452), silently degrading performance.
5. **Daemon resource accounting gaps** — The daemon allocates each ACP child up to 50% of host memory without dividing by child count (#8182), and does not bound request-body bytes (#8051), creating production scaling risks.
6. **Credential leakage in status output** — The provider-warning sanitizer fails to strip passwords containing `@` in URLs (#8136), exposing secrets in `/status` payloads.
7. **Terminal UX regressions in VP mode** — Virtual Viewport mode broke native hyperlink clicking and right-click context menus (#8439), and causes severe screen flashing in tmux (#8519).
8. **Windows Desktop copy-button broken** — The copy-response button below assistant messages does nothing on Windows (#8538), a persistent low-severity but high-frustration bug.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-05

---

## 1. Today's Highlights

Maintainer **Hmbown** launched an epic-scale build-performance initiative (#5249) tackling the 708-package dependency graph, monolithic `codewhale-tui` crate, and rebuild-on-commit overhead — signaling an imminent v0.9.5 lane. Meanwhile, the **v0.9.4 release train** (#5135) continues advancing with 77 commits ahead of `main`, and several runtime API, subagent, and ACP improvements are landing in parallel.

---

## 2. Releases

**No new releases in the last 24 hours.** The v0.9.4 integration train (#5135) remains in progress (~77 commits ahead of `main`).

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| **#5241** | Pricing endpoint returns 503 — all sessions show `unverified_live_pricing` | Cost display completely broken after upgrade from 0.8.67 → 0.9.3 across all providers; direct user-impacting regression. [Link](https://github.com/Hmbown/CodeWhale/issues/5241) |
| **#5209** | File `action=edit` silently accepts wrong parameter names | Tool returns fake success when `new_str` is used instead of `replace`, forcing 3–5x re-edits per location — a serious correctness bug. [Link](https://github.com/Hmbown/CodeWhale/issues/5209) |
| **#4978** | Frequent Anthropic API 400 errors with invalid `type` field | Users of `providers.openmodel` (Anthropic-compatible) hit intermittent HTTP 400 errors with no clear pattern; 6 comments, no resolution yet. [Link](https://github.com/Hmbown/CodeWhale/issues/4978) |
| **#4991** | Compilation times & the TUI crate monolith | Open discussion on painful rebuild times during slash-command refactoring; resonates with the broader build-performance effort. [Link](https://github.com/Hmbown/CodeWhale/issues/4991) |
| **#5239** | 1M-context model triggers compression at 128K | Users with 1M-window models report unexpected context compression; linked to #5244's unknown-model-id fallback bug. [Link](https://github.com/Hmbown/CodeWhale/issues/5239) |
| **#4955** | Zero-sandbox / `--no-sandbox` mode for local dev | Kernel-level Seatbelt sandbox breaks basic shell commands daily; 1 👍, 4 comments — strong signal from power users. [Link](https://github.com/Hmbown/CodeWhale/issues/4955) |
| **#5244** | Unknown model IDs silently degrade to 128K legacy context | Residual bug behind #5239; unmapped model IDs fall through to `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS` with no warning. [Link](https://github.com/Hmbown/CodeWhale/issues/5244) |
| **#5243** | OAuth login must adopt the token it just minted | xAI + ChatGPT/Codex users must second-trip to the provider picker after successful OAuth; friction bug flagged by maintainer dogfood. [Link](https://github.com/Hmbown/CodeWhale/issues/5243) |
| **#5245** | Local git commit forces full rebuild of `codewhale-tui` + `codewhale-cli` | Build script watches git branch ref for SHA stamp, causing unnecessary recompilation on every commit — core pain point in the build-epic. [Link](https://github.com/Hmbown/CodeWhale/issues/5245) |
| **#5246** | Shipping `dist` profile vs. local release gate conflated | Fat LTO (`lto = true`, `codegen-units = 1`) applied to every pre-push local build; splitting profiles would cut developer wait times significantly. [Link](https://github.com/Hmbown/CodeWhale/issues/5246) |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| **#5135** | `release: Codewhale v0.9.4 release train` | Integration train with 77 commits ahead of `main`; supersedes #5044 and contains all 2026-08-01 source candidates. [Link](https://github.com/Hmbown/CodeWhale/pull/5135) |
| **#5242** | `feat(tui/subagent): resume interrupted children from checkpoint` | Fixes dead-lettered `continuation_handle` — interrupted long-running subagent tasks (document review, multi-step search) can now be resumed via `agents/followup`. [Link](https://github.com/Hmbown/CodeWhale/pull/5242) |
| **#5225** | `feat(acp): expose file/search/git/patch/shell tools over session/prompt` | ACP `session/prompt` previously streamed text only; now model-requested tool calls actually execute, enabling Zed and third-party ACP bridges to drive real code edits. [Link](https://github.com/Hmbown/CodeWhale/pull/5225) |
| **#5133** | `feat(runtime-api): expose persistent goal-loop state` | New `GET /v1/threads/{id}/goal` endpoint lets managed clients read active-goal state and drive lifecycle transitions through the runtime boundary. [Link](https://github.com/Hmbown/CodeWhale/pull/5133) |
| **#5131** | `feat(runtime-api): memory endpoints` | `GET/POST /v1/memory` routes let clients inspect active memory scope, provenance, and apply lifecycle controls without a second store. [Link](https://github.com/Hmbown/CodeWhale/pull/5131) |
| **#5130** | `feat(runtime-api): bounded MCP server configuration` | Full CRUD for MCP servers via `POST /v1/apps/mcp/servers`; previously clients had to edit TOML/JSON by hand. [Link](https://github.com/Hmbown/CodeWhale/pull/5130) |
| **#5129** | `feat(runtime-api): skill lifecycle endpoints` | Install, update, uninstall, trust, and audit skills via HTTP — parity with what the TUI already offers. [Link](https://github.com/Hmbown/CodeWhale/pull/5129) |
| **#5132** | `Runtime API: expose verifier receipts and evidence` | `GET /v1/fleet/runs/{run_id}/receipts` surfaces per-task verifier results instead of a single aggregate counter. [Link](https://github.com/Hmbown/CodeWhale/pull/5132) |
| **#5238** | `feat(mcp): MCP Registry discovery with Registry-first tool selection` | Before falling back to `exec_shell` or custom code, the model now consults a public MCP Registry for matching zero-environment stdio servers. [Link](https://github.com/Hmbown/CodeWhale/pull/5238) |
| **#5240** | `feat(tui/shell): surface real wait elapsed time in tool content` | `duration_ms` was hidden in tool metadata (invisible to the model); now surfaced in tool content so the model can distinguish short waits from long stalls. [Link](https://github.com/Hmbown/CodeWhale/pull/5240) |

---

## 5. Feature Request Trends

- **Build-speed overhaul** — The dominant trend: 5 interlinked issues (#5245–#5249) form a coherent epic to decouple git-SHA stamps, split dist vs. local profiles, consolidate 25 integration-test binaries, and prune the 708-package dependency graph.
- **Runtime API completeness** — A cluster of PRs (#5129–#5133) shows active investment in making the HTTP runtime API a first-class managed-client surface (goals, memory, MCP servers, skills, verifier receipts).
- **Subagent resilience** — Checkpoint-based resume (#5242) and real wait-time reporting (#5240) indicate a push toward making long-running subagent tasks robust and observable.
- **ACP tool parity** — Exposing file/search/git/patch/shell over ACP (#5225) reflects growing demand for CodeWhale as a headless agent backend, not just a TUI.
- **MCP Registry integration** — Registry-first tool selection (#5238) suggests the community is moving toward standardized, discoverable MCP tooling over ad-hoc shell commands.

---

## 6. Developer Pain Points

1. **Compilation friction** — The 682K-line, 620-file `codewhale-tui` crate recompiles as a single unit on every edit and every `git commit`. This is the single most cited frustration (issues #4991, #5245, #5246, #5247, #5248).
2. **Context window misconfiguration** — Unknown or newly-added model IDs silently fall back to 128K context (#5239, #5244), causing premature compression without any warning to the user.
3. **OAuth flow friction** — After a successful device login (xAI, ChatGPT/Codex), the token isn't auto-adopted; users must manually re-enter the provider picker (#5243).
4. **Pricing regression** — The 503 on the pricing endpoint after upgrading to 0.9.x leaves all sessions showing `unverified_live_pricing` (#5241), breaking cost tracking entirely.
5. **File-edit tool correctness** — The `action=edit` mode accepting invalid parameter names without error (#5209) forces repeated manual corrections, eroding trust in the tool contract.
6. **Sandbox rigidity** — The Seatbelt sandbox, while security-oriented, breaks basic shell commands for local developers who need unrestricted access (#4955).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*