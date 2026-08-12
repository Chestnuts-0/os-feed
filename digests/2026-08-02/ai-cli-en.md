# AI CLI Tools Community Digest 2026-08-02

> Generated: 2026-08-02 01:48 UTC | Tools covered: 9

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
**Date: 2026-08-02**

---

## 1. Ecosystem Overview

The AI CLI tools landscape in August 2026 is characterized by rapid maturation across nine major projects, with community feedback converging on three core challenges: agent reliability (subagent hangs, silent failures, and permission boundary violations), session durability (compaction bugs, V8 string limits, and prompt-cache invalidation), and provider/workspace flexibility (BYOK models, MCP scaling, and cross-platform stability). Tool makers are iterating at different paces — open-source projects like OpenCode, Pi, and DeepSeek TUI are shipping frequent fixes, while platform-backed tools like Codex and Copilot CLI are managing larger user bases with correspondingly higher bug visibility. The community signal is clear: the next competitive differentiator will be session integrity and cost transparency, not raw model capability.

---

## 2. Activity Comparison

| Tool | Hot Issues | PRs (Last 24h) | Releases | Release Status |
|------|-----------|----------------|----------|----------------|
| **Claude Code** | 10 | 3 (all closed) | None | Desktop 1.24012.9 / Engine 2.1.217–2.1.220 |
| **OpenAI Codex** | 10 | 7 closed / 3 open | None | Stalled — no new release |
| **Gemini CLI** | 10 | 10 (mixed) | v0.55.0-nightly.20260802 | Nightly active |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.78-2 | Patch release only |
| **Kimi Code CLI** | 5 | 5 (all closed) | None | Stable, no new release |
| **OpenCode** | 10 | 9 (mix) | v1.18.11 | Active release cadence |
| **Pi** | 10 | 10 (8 closed / 2 open) | None | No release, high PR velocity |
| **Qwen Code** | 10 | 10 | v0.21.3 (stable) + 2 nightlies | Three concurrent tracks |
| **DeepSeek TUI** | 10 | 10 | v0.9.4 source candidate | Release candidate under review |

**Key observations:**
- **DeepSeek TUI** and **Qwen Code** show the highest PR volume (10 each), indicating rapid iteration cycles.
- **Copilot CLI** had zero PR activity in 24h, suggesting a more stable but slower release rhythm.
- **Codex** has the most open PRs (3) relative to closed, signaling ongoing work on complex features.
- **Kimi Code** has the fewest hot issues (5), reflecting a smaller but focused community.

---

## 3. Shared Feature Directions

| Theme | Tools Involved | Specific Needs |
|-------|---------------|----------------|
| **Cross-session memory / persistence** | Kimi Code (#1283), OpenCode (#20322), Pi (session persistence PRs) | Retain project patterns, user preferences, and AI-managed notes between invocations |
| **Agent/subagent reliability** | Gemini CLI (#22323, #21409), OpenCode (#33028), Claude Code (#74113), Codex (#34898) | Subagents hanging indefinitely, misreporting success as GOAL, or executing without explicit permission |
| **Prompt cache optimization** | Qwen Code (#8279, #8339), OpenCode (#23595), Claude Code (#83225) | Reusing cache prefixes across compression, preventing tool-discovery churn from invalidating caches |
| **MCP ecosystem scaling** | Codex (#36534), Copilot CLI (#2901), OpenCode (unified marketplace), Kimi Code (#2576) | Higher item limits, lazy-loading at startup, relaxed JSON parsing for configs with comments |
| **BYOK / custom model flexibility** | Copilot CLI (#3282, #2904), Pi (Cline/ClinePass providers), DeepSeek TUI (#5034) | Multiple BYOK models, per-agent reasoning effort, provider-scoped model defaults |
| **Session compaction integrity** | Codex (#31033, #34268), Pi (#6879, #7048), Qwen Code (#8279) | Compaction triggering before quota exhaustion, truncated summaries, multi-agent storage bloat |
| **Windows platform stability** | Codex (#33776, #32149), Claude Code (#81306), DeepSeek TUI (#4564, #5006) | Process-leak storms, MSIX wedge after crashes, PATH truncation by installers |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Qwen Code | OpenCode | Pi | DeepSeek TUI | Kimi Code |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----|--------------|-----------|
| **Primary focus** | Desktop IDE integration | Enterprise/Work workflows | Generalist agent + subagents | GitHub-centric workflows | Open-weight models + self-hosting | Extensibility + marketplace | Provider agnosticism + TUI flexibility | DeepSeek-native with multi-provider | Chinese market + Moonshot API |
| **Target users** | IDE power users, macOS/Linux devs | Enterprise subscribers (Pro/Business) | General AI developers | GitHub users, CI/CD pipelines | Self-hosters, researchers | Open-source enthusiasts, privacy-conscious | Mobile/desktop power users | DeepSeek users, multi-provider | Moonshot API users |
| **Technical approach** | Desktop app + bundled engine | VS Code extension + desktop | Modular agent system with skills | Rust↔JS bridge, GitHub integration | TUI-first, review commands, prompt caching | Go-based, unified marketplace, subagents | Node.js, multi-renderer TUI, extension system | Rust, SQLite-backed, strict sandboxing | Pydantic-based tool calls, shell integration |
| **Key differentiator** | Accessibility (TTS/voice), session history | Multi-agent V2, Guardian approval | Daemon mode, eval infrastructure | BYOK maturity, split-view UX | Prompt cache reuse, `/review` command | MCP SSE fixes, debug prompt command | Provider flexibility, MiniMax/Cline support | Per-turn tool budgets, Windows PATH preservation | Correctness fixes (StrReplaceFile, JSON unwrapping) |
| ** weakest surface** | Linux OAuth, cost transparency | Windows stability, session integrity | Subagent hangs, permission boundaries | Long-session V8 limits, autopilot loops | Prompt cache busting, local model tool calls | Legacy layout removal, Go subscription opacity | Catalog refresh timeouts, npm script blocking | Provider/model state drift, sandbox mismatches | Provider docs, Web UI stability |

---

## 5. Community Momentum & Maturity

**High momentum, rapid iteration:**
- **DeepSeek TUI** — 10 PRs in 24h with a release candidate in flight; active community bug reporting driving adversarially-verified fixes. The v0.9.4 lane shows disciplined release engineering.
- **Qwen Code** — Three concurrent release tracks (stable + 2 nightlies) and 10 PRs indicate strong engineering velocity. The `/review` command enhancement and prompt-cache reuse show feature depth.
- **Pi** — 10 PRs with 8 closed, covering provider additions (MiniMax Video, Cline), auth fixes, and durability barriers. The project is maturing from TUI tool to platform.

**Steady state, larger user base:**
- **Claude Code** — Lower PR volume but high-impact issues (OAuth loop, cost transparency). The community is vocal on governance and accessibility, suggesting an enterprise-adjacent user base.
- **OpenAI Codex** — Highest engagement on single issues (112 👍 on VS Code Diff crash). The Windows instability pattern suggests a large Windows user base reporting infrastructure-scale problems.
- **GitHub Copilot CLI** — Patch-release cadence (v1.0.78-2) with zero PRs in 24h. The community is advocating for features (BYOK, lazy MCP) rather than reporting blockers, indicating a stable core.

**Niche but focused:**
- **Gemini CLI** — Nightly releases with strong eval infrastructure investment (#24353 tracking 76 behavioral tests). The community is technically sophisticated, pushing for AST-aware tools and daemon mode.
- **OpenCode** — Active marketplace expansion (#40108) but community debate over layout removal and Go subscription transparency suggests growing pains.
- **Kimi Code CLI** — Smallest issue queue (5 hot issues) but high PR closure rate (5/5). The project is in a bug-fixing phase with fewer feature requests.

---

## 6. Trend Signals

| Signal | Evidence | Implication for Developers |
|--------|----------|---------------------------|
| **Agent reliability is the new bottleneck** | Subagent hangs (Gemini #21409, OpenCode #33028), misreported success (Gemini #22323), permission boundary violations (Gemini #22093, Claude Code #74113) | Tool selection should prioritize agents with observable trajectories and explicit permission models. Avoid tools where subagents can silently fail. |
| **Session integrity > raw context size** | Compaction bugs (Codex #31033, Pi #6879), V8 string limits (Copilot #4325), prompt-cache busting (Qwen #4777) | Long-running workflows need tools with deterministic compaction controls and cache-aware tool discovery. Multi-agent storage bloat (Codex #34268) is an emerging risk. |
| **MCP is scaling faster than tooling can handle** | Lazy-loading demands (Copilot #2901), item limit increases (Codex #36534), JSON parsing strictness (Copilot #4323), SSE reconnect loops (OpenCode) | Expect MCP server startup to remain a pain point. Tools supporting lazy-loading and relaxed config parsing will have an edge. |
| **BYOK is moving from niche to expected** | Copilot #3282 (multiple BYOK models), Pi (Cline/ClinePass providers), DeepSeek #5034 (provider-scoped defaults) | Custom model workflows will become standard. Tools with per-agent reasoning effort and accurate usage reporting will attract power users. |
| **Cost transparency is a trust issue** | Claude Code #83231 ($19 unapproved GCP spend), OpenCode #40078 (free usage exhausted without warning), Codex #34898 (usage exhaustion in governance loops) | Governance and audit capabilities will differentiate tools. Users are willing to trade convenience for spend visibility. |
| **Windows remains the weakest surface** | Codex (4 high-salience issues), Claude Code (MSIX wedge), DeepSeek (PATH truncation, flag parsing) | Windows deployment requires extra validation. Cross-platform parity is not guaranteed — test on Windows before committing to a tool for team workflows. |
| **Prompt caching is becoming table stakes** | Qwen #8339 (cache reuse across compression), OpenCode #23595 (cache drift from system reminders), Claude Code #83225 (partial compaction controls) | Tools that can reuse cache prefixes and prevent tool-discovery churn will win on latency and cost. This is a key differentiator for high-frequency workflows. |
| **Daemon/headless mode is in demand** | Gemini #21307 (daemon mode PR), OpenCode (API clients), Pi (remote execution) | CI/CD and shell-pipeline integration is a growing use case. Tools supporting non-interactive operation will capture this segment. |

---

**Bottom line for decision-makers:** The AI CLI tool market is transitioning from model-centric competition to **reliability and workflow-integration** competition. Session integrity, agent observability, and cost transparency are the emerging differentiators. For enterprise deployments, prioritize tools with deterministic compaction and audit trails. For individual power users, tools with BYOK flexibility and MCP scaling (Copilot CLI, Pi, Gemini CLI) offer the most room to grow. Windows users should exercise caution across all tools this cycle.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-02 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| # | Skill / PR | Status | Description | Discussion Highlights |
|---|---|---|---|---|
| 1 | [PR #1298 — skill-creator fix: run_eval.py recall=0% + Windows](https://github.com/anthropics/skills/pull/1298) | OPEN | Fixes the broken evaluation pipeline: `run_eval.py` and the description-optimization loop (`run_loop.py`) report 0% recall for every skill, making optimization impossible. Also patches Windows stream reading and parallel-worker bugs. | Root-cause fix for a bug tracked by **10+ independent reproductions** (#556, #1169). The single largest cluster of community frustration. |
| 2 | [PR #723 — testing-patterns skill](https://github.com/anthropics/skills/pull/723) | OPEN | Comprehensive testing guidance covering the Testing Trophy model, unit testing (AAA pattern, naming, edge cases), and React component testing (Testing Library, queries, assertions). | Addresses a high-demand area; integrates directly with the `skill-creator` eval pipeline improvements. |
| 3 | [PR #514 — document-typography skill](https://github.com/anthropics/skills/pull/514) | OPEN | Prevents orphan word-wrap, widow paragraphs, and numbering misalignment in AI-generated documents — a universal pain point for every document Claude produces. | Targets a gap users consistently report: "Claude generates documents but they look unprofessional." |
| 4 | [PR #1367 — self-audit skill](https://github.com/anthropics/skills/pull/1367) | OPEN | Pre-delivery quality gate: mechanical file-existence verification followed by a four-dimension reasoning audit. Universal across projects and models. | Extended from a companion proposal (#1385); represents growing demand for output-quality assurance patterns. |
| 5 | [PR #486 — ODT skill](https://github.com/anthropics/skills/pull/486) | OPEN | Full OpenDocument Format support: create, fill, read, convert `.odt`/`.ods`, and parse ODT to HTML. Triggers on "ODT", "ODS", "LibreOffice", etc. | Fills a format gap — no official ODF skill existed in the bundle. |
| 6 | [PR #83 — skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | OPEN | Meta-skills that score other Skills across five dimensions (Structure & Documentation at 20%, plus others) and assess security posture. | First community contribution aimed at **skill governance** — mirrors the quality-gating trend seen in #1367. |
| 7 | [PR #1479 — plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479) | OPEN | Lifecycle management for planning artifacts (scratch files, plan docs) that accumulate with no cleanup mechanism. | Directly addresses a named community pain point (#1417); authored by Palo Alto AI Research Lab. |
| 8 | [PR #1302 — color-expert skill](https://github.com/anthropics/skills/pull/1302) | OPEN | Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), and practical "what to use when" guidance. | Niche but well-scoped; represents the breadth of domain-specific skills the community is requesting. |

---

## 2. Community Demand Trends (from Issues)

| Trend | Key Issues | Signal |
|---|---|---|
| **Skill eval tooling reliability** | [#556](https://github.com/anthropics/skills/issues/556) · [#1169](https://github.com/anthropics/skills/issues/1169) · [#1061](https://github.com/anthropics/skills/issues/1061) | The `run_eval.py` / `run_loop.py` pipeline is unusable for most contributors. This is the **#1 bottleneck** for skill quality improvement. |
| **Cross-platform (Windows) support** | [#1061](https://github.com/anthropics/skills/issues/1061) · [#1099](https://github.com/anthropics/skills/issues/1099) · [#1050](https://github.com/anthropics/skills/issues/1050) | Three independent Windows-compatibility PRs in a two-month window — the toolchain is Unix-first and alienating a significant user segment. |
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) | Community skills impersonating the `anthropic/` namespace; users cannot distinguish official from third-party skills at install time. |
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) | Strong demand for built-in skill distribution within organizations, replacing the current Slack/Teams manual-upload workflow. |
| **Context-window efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) | The bundled `claude-api` skill injects ~156k tokens in a single tool call, exhausting context. Community wants tighter, on-demand injection. |
| **MCP-native skills** | [#16](https://github.com/anthropics/skills/issues/16) | Vision to expose skills as MCP tools (`generateAlgorithmArt({ prompt })`) rather than prompt-injection pattern. |
| **Governance & audit trails** | [#412](https://github.com/anthropics/skills/issues/412) · [#1385](https://github.com/anthropics/skills/issues/1385) | Growing appetite for safety-pattern and reasoning-quality-gate skills, especially for enterprise agent deployments. |

---

## 3. High-Potential Pending Skills

These PRs are open, actively discussed, and have clear paths to merge:

| PR | Skill | Why It May Land Soon |
|---|---|---|
| [PR #1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval fix** | Resolves the highest-friction bug in the repo; 10+ independent reproductions make it a priority. |
| [PR #723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Addresses a universally needed domain; comprehensive and well-structured. |
| [PR #514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves a visible, recurring quality problem with minimal scope — easy to review and merge. |
| [PR #1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Builds on prior art (#83) and a companion proposal; the four-dimension gate is a differentiated contribution. |
| [PR #1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Authored by an external research lab with a clear problem statement; low risk, high utility. |
| [PR #486](https://github.com/anthropics/skills/pull/486) | **ODT** | Fills a format gap with no competing PR; straightforward scope. |

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is **reliable skill creation tooling** — specifically, a working `run_eval.py` evaluation pipeline that functions correctly on Windows — because without it, every new skill contributor is optimizing against broken telemetry, and the entire quality-gating loop is ineffective.

---



# Claude Code Community Digest — 2026-08-02

## 1. Today's Highlights

The community is focused on a persistent Linux OAuth login loop (#77966, 13 👍) and a regression that dropped the "Last Activity" filter after the 2.1.217 desktop update (#80279, 13 👍). A notable cost-visibility concern surfaced in #83231, where a user reported ~$19 in unchecked Google Cloud spend with no transparency into what Claude Code provisions on their behalf. On the accessibility front, the long-standing TTS/voice-mode request for Remote Control sessions (#42700, 22 👍) continues to gather strong community support.

## 2. Releases

No new releases in the last 24 hours. The desktop app remains on build **1.24012.9** and the bundled Claude Code engine on **2.1.217–2.1.220**.

## 3. Hot Issues

| # | Title | Comments | 👍 | Why it matters |
|---|-------|----------|----|----------------|
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | OAuth `/login` loop — state parameter dropped after redirect | 19 | 13 | Breaks auth on Linux/IntelliJ; state loss after "sign in again" redirect makes login unrecoverable without manual intervention. |
| [#42700](https://github.com/anthropics/claude-code/issues/42700) | TTS readback + voice mode for Remote Control sessions | 13 | 22 | Highest-engagement open enhancement; accessibility gap for Remote Control users who rely on screen readers or voice input. |
| [#80279](https://github.com/anthropics/claude-code/issues/80279) | "Last Activity" filter disappears when grouping by Project (regression in 2.1.217) | 10 | 13 | Direct productivity regression — users can no longer filter sessions by recent activity in the sidebar after auto-update. |
| [#73638](https://github.com/anthropics/claude-code/issues/73638) | Session rename during `server_tool_use` corrupts transcript (has repro) | 8 | 0 | Confirmed repro: renaming injects a synthetic user turn between tool call and result, causing 400 errors on every subsequent prompt. |
| [#74113](https://github.com/anthropics/claude-code/issues/74113) | Background agents go idle without delivering final `SendMessage` report (Windows) | 6 | 5 | Subagent workflows silently fail to return results; re-ping recovers them but breaks automation pipelines. |
| [#82466](https://github.com/anthropics/claude-code/issues/82466) | Default model in `settings.json` not honored at session start | 4 | 1 | Session launches on wrong model despite explicit config; in-session `/model` also unreliable — undermines deterministic setup. |
| [#81306](https://github.com/anthropics/claude-code/issues/81306) | Windows Desktop crash wedges MSIX package; recovery destroys local app data | 4 | 0 | Post-crash recovery requires manual package removal, losing Code-tab group assignments and crash dumps — dangerous for power users. |
| [#83011](https://github.com/anthropics/claude-code/issues/83011) | iOS Simulator helper (`claude-ios-sim`) crash-loops on macOS 27 beta | 3 | 0 | Uncaught `NSException` in Metal/CoreImage path breaks iOS dev workflow on latest macOS betas. |
| [#74715](https://github.com/anthropics/claude-code/issues/74715) | Chrome "Always allow" persisted as duration `"once"` — permissions never stick | 3 | 0 | Site-permission approvals are silently downgraded, forcing repeated prompts for every browser action. |
| [#83231](https://github.com/anthropics/claude-code/issues/83231) | No visibility into what Claude Code provisions on user's cloud accounts | 0 | 0 | User discovered ~$19 in unapproved GCP spend with zero audit trail — raises trust and governance concerns across the community. |

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#77442](https://github.com/anthropics/claude-code/pull/77442) | fix: repair issue-automation telemetry and dead `days_back` input | ✅ Closed | Corrects Statsig dedupe events timestamped to 1970 and fixes a broken `days_back` workflow input. |
| [#77439](https://github.com/anthropics/claude-code/pull/77439) | docs(plugins): sync security-guidance listing with v2.0.0 plugin manifest | ✅ Closed | Updates marketplace listings to reflect the v2.0.0 rewrite of the security-guidance plugin (#62586/#62592). |
| [#77443](https://github.com/anthropics/claude-code/pull/77443) | fix(ralph-wiggum): make stop hook's jq error handling reachable under `set -e` | ✅ Closed | Fixes a subtle bash Pitfall where `$?` was always 0 under `set -euo pipefail`, masking jq parse failures in the ralph-wiggum stop hook. |

## 5. Feature Request Trends

- **Accessibility & voice interaction** — TTS readback and voice mode for Remote Control (#42700) leads enhancement requests, signaling demand for hands-free and screen-reader-compatible workflows.
- **Visibility & auditability** — Users want rate-limit fields in `statusLine` hooks (#69791, closed but still echoed), cost/spend transparency (#83231), and reliable opt-outs for session-link injection into git history (#83226).
- **Session & context management** — Better partial-compaction controls (#83225), more scrollback in embedded terminals (#69799, closed), and reliable model selection at session start (#82466) are recurring themes.
- **Permission granularity** — Persistent site permissions in Chrome (#74715) and working subagent permission prompts (#69790, closed) show continued frustration with permission-handling fragility.

## 6. Developer Pain Points

1. **Auth & permission fragility** — OAuth state drops on Linux (#77966), Chrome "always allow" degrades to "once" (#74715), and subagent permission prompts are broken (#69790).
2. **Silent model/context substitution** — Subagents served a different model than requested without any warning (#83224), default model settings are ignored at session start (#82466), and partial compaction has no desktop UI (#83225).
3. **Desktop stability on Windows & macOS** — MSIX wedge after crashes (#81306), iOS-sim crash on macOS 27 beta (#83011), and transcript corruption from mid-call renames (#73638) erode trust in production workflows.
4. **Background agent reliability** — Agents idle without delivering final reports on Windows (#74113), breaking scripted/automated workflows.
5. **Cost and spend opacity** — No way to see what cloud resources Claude Code provisions, leading to unexpected charges (#83231).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-02

## Today's Highlights

The Codex community is focused on three critical frontiers this week: a severe VS Code Diff crash affecting the largest number of users (112 👍), alarming Windows-specific regressions including a process-leak storm and a missing WSL binary, and a cluster of session-compaction bugs threatening data integrity for Pro/Business subscribers.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| [#35058](https://github.com/openai/codex/issues/35058) | Codex Diff crashes with "Oops, an error has occurred" in VS Code on macOS | Core DX: the Diff tab is unusable across *every* repo, including fresh workspaces, on the latest extension build. | 44 comments · 112 👍 — highest engagement this week; clear priority signal |
| [#33776](https://github.com/openai/codex/issues/33776) | `ChatGPT.exe` spawns hundreds of `taskkill.exe`/`conhost.exe` processes on Windows | System-level resource exhaustion — WMI storms and DWM degradation make the machine unstable during Codex sessions. | 28 comments · 26 👍 |
| [#28103](https://github.com/openai/codex/issues/28103) | MSIX Desktop build missing Linux `codex` binary — "Run agent in WSL" broken | WSL integration, a frequently requested workflow, is entirely non-functional in the Microsoft Store build. | 7 comments · 23 👍 — disproportionately upvoted for its impact |
| [#32149](https://github.com/openai/codex/issues/32149) | Windows setup fails before the UAC prompt; both setup options are non-functional | Users cannot even install the Desktop app on Windows. | 29 comments · 6 👍 |
| [#35420](https://github.com/openai/codex/issues/35420) | Work/Codex stream disconnects when Windows workspace is OneDrive-backed | Directly affects enterprise/Work users with OneDrive-synced repos — repeated `stream disconnected before completion` errors. | 22 comments · 0 👍 |
| [#32297](https://github.com/openai/codex/issues/32297) | Built-in image generation fails with network error after July 9 update | A regression introduced by a recent desktop update; users cannot use the native image generation feature. | 21 comments · 7 👍 |
| [#20864](https://github.com/openai/codex/issues/20864) | Desktop becomes laggy scanning all `~/.codex/sessions` instead of using the index | Performance regression for long-term users; affects Pro/Business subscribers with large session histories. | 18 comments · 5 👍 |
| [#34268](https://github.com/openai/codex/issues/34268) | Multi-agent V2 full-history forks duplicate snapshots — >100 GiB session growth | Storage explosion bug; multi-agent users risk filling disks on long-running tasks. | 5 comments · 3 👍 |
| [#31033](https://github.com/openai/codex/issues/31033) | Context auto-compacted — "Critical Bug" ruining sessions | Users report exhausting reset quotas within a single session due to aggressive compaction. | 9 comments · 0 👍 |
| [#34898](https://github.com/openai/codex/issues/34898) | Codex enters self-reinforcing governance loops, ignores bounded scope, exhausts usage | Agent safety concern: the model loops on approval checks and burns through weekly limits without making progress. | 4 comments · 1 👍 |

---

## Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#36534](https://github.com/openai/codex/pull/36534) | Raise the MCP catalog item limit to 2,048 | ✅ Closed | Doubles the paginated tool/resource discovery limit — essential for MCP-heavy workspaces. |
| [#30977](https://github.com/openai/codex/pull/30977) | Drop parent MCP lifecycle events from forked agent history | ✅ Closed | Cleans up forked agent histories so legacy parent events don't corrupt child rollouts. |
| [#36511](https://github.com/openai/codex/pull/36511) | Support two-stroke TUI key chords | ✅ Closed | Enables bindings like `ctrl-x ctrl-s` in TUI keymaps with pending-chord hints. |
| [#36507](https://github.com/openai/codex/pull/36507) | Retain attempted tool metadata across prompts | ✅ Closed | Bounded to 32 KiB (prioritizing recent calls); preserves context when outputs are re-included. |
| [#36485](https://github.com/openai/codex/pull/36485) | Increase remote plugin bundle size limits | ✅ Closed | Max download raised 50→100 MiB; total extracted size 250→512 MiB — supports larger plugins. |
| [#36482](https://github.com/openai/codex/pull/36482) | Avoid querying terminal size on every TUI redraw | ✅ Closed | Caches screen dimensions; refreshes only after resize, process resume, or external program exit. |
| [#31471](https://github.com/openai/codex/pull/31471) | Extract apps cache logic into ConnectorRuntimeManager | 🔄 Open | Refactors Apps tools cache behind immutable snapshots scoped by account/workspace — foundation for faster connectors. |
| [#15261](https://github.com/openai/codex/pull/15261) | Store guardian transcript boundary on review session | 🔄 Open | Guardian reviews now slice from a cached checkpoint instead of reconstructing parent rollout state. |
| [#36440](https://github.com/openai/codex/pull/36440) | Extract exec-server request dispatching | ✅ Closed | Moves JSON-RPC handling into a dedicated `RequestDispatcher`; improves connection-loop clarity. |
| [#31817](https://github.com/openai/codex/pull/31817) | Update models.json | 🔄 Open | Automated model registry update. |

---

## Feature Request Trends

- **Context-control ergonomics** — A recurring ask to give users finer control over when and how context is compacted or cleared (e.g. [#18490](https://github.com/openai/codex/issues/18490): "compact context and implement plan"; [#31033](https://github.com/openai/codex/issues/31033): auto-compact breaking sessions).
- **Custom model provider & picker flexibility** — Users want custom provider config to work seamlessly in Desktop, and to define their own presets in the model power slider (e.g. [#29156](https://github.com/openai/codex/issues/29156), [#32665](https://github.com/openai/codex/issues/32665)).
- **TUI usability improvements** — Disabling/removing placeholder text and making it task-aware (e.g. [#13466](https://github.com/openai/codex/issues/13466)); supporting two-stroke key chords is now in progress.
- **Multi-agent & MCP expansion** — Higher MCP item limits and larger plugin bundles signal demand for more complex tool integrations and multi-agent workflows.

---

## Developer Pain Points

1. **Windows Desktop stability** — Four high-salience issues this cycle: setup failures before UAC ([#32149](https://github.com/openai/codex/issues/32149)), process-leak storms ([#33776](https://github.com/openai/codex/issues/33776)), missing WSL binary in MSIX ([#28103](https://github.com/openai/codex/issues/28103)), and intermittent `0xc0000409` crashes ([#31989](https://github.com/openai/codex/issues/31989)). Windows is clearly the weakest surface.

2. **Session integrity & compaction** — Aggressive or buggy context compaction is silently destroying sessions and burning usage quotas ([#31033](https://github.com/openai/codex/issues/31033), [#34268](https://github.com/openai/codex/issues/34268), [#28870](https://github.com/openai/codex/issues/28870)). Users report stale timestamps and multi-agent storage bloat.

3. **VS Code extension reliability** — The Diff tab crash ([#35058](https://github.com/openai/codex/issues/35058), 112 👍) is the most upvoted open issue this week and blocks a core developer workflow.

4. **Connectivity & rate-limits** — Stream disconnects on degraded networks ([#35420](https://github.com/openai/codex/issues/35420), [#29087](https://github.com/openai/codex/issues/29087)) and alarming usage-drop reports during subagent review loops ([#35816](https://github.com/openai/codex/issues/35816), [#36528](https://github.com/openai/codex/issues/36528)) suggest both infra and metering need attention.

5. **Agent safety & approval loops** — Self-reinforcing governance loops ([#34898](https://github.com/openai/codex/issues/34898)) and auto-review converting explicit consent into a prose loop ([#36501](https://github.com/openai/codex/issues/36501)) indicate the approval/sandbox surface needs tighter bounded guarantees.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-02

---

## 1. Today's Highlights

Gemini CLI v0.55.0-nightly.20260802 has been released, alongside a critical fix for a v0.53.0 regression causing `Function call is missing a thought_signature` errors. Community attention is heavily focused on agent reliability issues—subagent recovery after turn-limit exhaustion, the generalist agent hanging indefinitely, and subagents executing without explicit permission.

---

## 2. Releases

**v0.55.0-nightly.20260802.gf47d6c6f7**
Nightly build released with a full changelog available. See [PR #28623](https://github.com/google-gemini/gemini-cli/pull/28623).

---

## 3. Hot Issues

1. **[Bug] Subagent recovery after MAX_TURNS reported as GOAL success** (#22323) — A `codebase_investigator` subagent reports success and `GOAL` termination despite hitting its turn limit with no analysis done, silently masking failures. 12 comments, 2 👍. [Link](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **[Bug] Generalist agent hangs indefinitely** (#21409) — When Gemini defers to the generalist agent, the CLI freezes for extended periods. Workaround: disable sub-agent usage. 8 comments, 8 👍 — **most upvoted issue this period.** [Link](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **[Enhancement] Leverage model's bash affinity via Zero-Dependency OS Sandboxing** (#19873) — Proposes using the Gemini model's native bash proficiency for POSIX tool chaining while maintaining security via sandboxing. 8 comments. [Link](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **[EPIC] Robust component-level evaluations** (#24353) — Tracking 76 behavioral eval tests across 6 supported Gemini models. Critical for validating agent behavior changes before release. 7 comments. [Link](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **[EPIC] AST-aware file reads, search, and codebase mapping** (#22745) — Investigation into whether AST-aware tools can reduce turn waste from misaligned reads and improve navigation. 7 comments. [Link](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **[Bug] Gemini does not use skills and sub-agents enough** (#21968) — Users report that custom skills (e.g., "gradle", "git") are ignored unless explicitly requested, reducing agent utility. 6 comments. [Link](https://github.com/google-gemini/gemini-cli/issues/21968)

7. **[Bug] Shell command execution stuck with "Waiting input" after completion** (#25166) — Simple CLI commands that finish immediately still leave Gemini in an "Awaiting user input" state. 4 comments, 3 👍. [Link](https://github.com/google-gemini/gemini-cli/issues/25166)

8. **[Bug] Browser agent fails on Wayland** (#21983) — The browser subagent terminates with a `GOAL` error on Wayland compositors, blocking Linux users without X11. 4 comments, 1 👍. [Link](https://github.com/google-gemini/gemini-cli/issues/21983)

9. **[Bug] Auto Memory retries low-signal sessions indefinitely** (#26522) — Sessions marked low-signal by the extraction agent are never marked processed, causing redundant retries. 5 comments. [Link](https://github.com/google-gemini/gemini-cli/issues/26522)

10. **[Bug] (Sub)agents running without permission since v0.33.0** (#22093) — After updating to v0.33.0, subagents activate despite being disabled in all configurations. Users expected only MCP functionality. 3 comments. [Link](https://github.com/google-gemini/gemini-cli/issues/22093)

---

## 4. Key PR Progress

1. **[fix] Preserve `functionCall` `thoughtSignature` when stripping thought parts** (#28607) — Fixes the v0.53.0 regression causing `API Error 400: Function call is missing a thought_signature`. Root cause traced to `stripThoughts()` in `geminiChat.ts`. [Link](https://github.com/google-gemini/gemini-cli/pull/28607)

2. **[fix] Load environment variables before resolving settings placeholders** (#28597) — Resolves a load-order race condition where `.env` files were parsed after settings placeholders were already expanded. [Link](https://github.com/google-gemini/gemini-cli/pull/28597)

3. **[feat] Add support for daemon mode** (#21307) — Adds a daemon mode plus lightweight client for Unix-like tool ecosystem integration, enabling shell-centric workflows without the rich TUI. Still `help wanted`. [Link](https://github.com/google-gemini/gemini-cli/pull/21307)

4. **[fix] Stop leaking `gemini.diff.accept` and `onDidChangeWorkspaceFolders` disposables** (#28526) — Fixes a stray parenthesis pairing in VSCode IDE companion that collapsed two subscriptions into a comma expression, leaking the command disposable. [Link](https://github.com/google-gemini/gemini-cli/pull/28526)

5. **[chore] Bump version to 0.55.0-nightly.20260802.gf47d6c6f7** (#28623) — Automated nightly release bump. [Link](https://github.com/google-gemini/gemini-cli/pull/28623)

6. **[fix] Replace `console.error` with `debugLogger` in SDK session** (#28613) — Aligns SDK session logging with project conventions, removing an ESLint disable directive. [Link](https://github.com/google-gemini/gemini-cli/pull/28613)

7. **[chore] Update `.gitignore` to ignore `.env` and `.ai` files; add unit tests** (#28619) — Prevents accidental commits of environment and AI-generated files. [Link](https://github.com/google-gemini/gemini-cli/pull/28619)

8. **[docs] Add documentation for approving workflows from forked repositories** (#28618) — Guides maintainers on reviewing and approving PR-triggered workflows from forks. [Link](https://github.com/google-gemini/gemini-cli/pull/28618)

9. **[feat] Add script to connect GitHub repo to GCP project** (#28617) — Uses the Google Cloud DevTools API to scaffold a GitHub-to-GCP project linkage. [Link](https://github.com/google-gemini/gemini-cli/pull/28617)

10. **[fix] Pending changes exported from codespace** (#28616) — Addresses an issue with pending changes in GitHub Codespaces environments. [Link](https://github.com/google-gemini/gemini-cli/pull/28616)

---

## 5. Feature Request Trends

- **Agent Reliability & Transparency** — Multiple requests target making subagent behavior observable and recoverable: subagent trajectories visible via `/chat share` (#22598), bug reports including subagent context (#21763), and robust eval infrastructure (#24353).
- **Smart Agent Invocation** — Users want Gemini to autonomously leverage skills and sub-agents without explicit prompting (#21968), and to use local subagents more effectively (#20195).
- **AST-Aware Codebase Tools** — Investigation into AST-based reading, search, and mapping to reduce token waste and turn count (#22745, #22746).
- **Daemon Mode & Non-Interactive Workflows** — Growing demand for headless/daemon operation to integrate Gemini into shell pipelines and CI (#21307).
- **Memory System Hardening** — Fixes for Auto Memory retry loops (#26522), deterministic secret redaction (#26525), and quarantine of invalid inbox patches (#26523).

---

## 6. Developer Pain Points

1. **Agents hanging or misreporting success** — Subagents silently report `GOAL` success after hitting turn limits (#22323), and the generalist agent can hang indefinitely (#21409). These create false confidence in completed tasks.
2. **Subagents running without consent** — Since v0.33.0, subagents activate despite being explicitly disabled (#22093), violating user expectations and permission boundaries.
3. **Shell command stalls** — Commands that complete instantly still leave the CLI stuck in an "Awaiting user input" state (#25166), and interactive prompts (e.g., Vite scaffolding) cause hangs (#22465).
4. **Uncontrolled file creation** — The model frequently creates temp scripts in random directories (#23571), cluttering workspaces and creating cleanup overhead.
5. **Browser agent instability** — Failures on Wayland (#21983) and ignored `settings.json` overrides like `maxTurns` (#22267) make browser automation unreliable.
6. **Destructive behavior risks** — The agent may use `git reset --force` or similar destructive commands when safer alternatives exist (#22672), raising safety concerns.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-02

## 1. Today's Highlights

GitHub Copilot CLI **v1.0.78-2** shipped with improved split-view sidebar close confirmation UX and a fix for extension slash command handlers firing multiple times. The community is actively advocating for multi-BYOK model support (#3282, 19 👍) and lazy-loading of MCP servers at startup (#2901, 14 👍), while several session-handling and autopilot reliability bugs surfaced this week.

---

## 2. Releases

**v1.0.78-2**
- **Improved** — Split-view sidebar close confirmation now reads `x again to close` (or `x again to exit CLI` on the last session), making the two-step close action unambiguous.
- **Fixed** — Extension slash commands now execute their handler exactly once per invocation when multiple extensions are loaded.

---

## 3. Hot Issues

| # | Title | 👍 | Why It Matters |
|---|-------|----|----------------|
| [#3282](https://github.com/github/copilot-cli/issues/3282) | Add multiple BYOK model capability | 19 | Users with multiple custom models via env vars currently cannot switch between them in-session; a top-voted feature request for BYOK flexibility. |
| [#2904](https://github.com/github/copilot-cli/issues/2904) | Custom Agent YAML frontmatter should support reasoning effort | 16 | Agent authors can pin a model but cannot control `reasoning_effort` per-agent, forcing a global CLI flag compromise. |
| [#2901](https://github.com/github/copilot-cli/issues/2901) | Lazy-load MCP servers on first tool invocation | 14 | All configured MCP servers connect at CLI startup, inflating launch time as server catalogs grow — a clear perf win for lazy initialization. |
| [#4305](https://github.com/github/copilot-cli/issues/4305) | Failed to convert JavaScript value 'Undefined' into rust type 'String' | 5 | Regression in 1.0.76 that surfaces on nearly every command; closed but highlights type-safety gaps in the Rust↔JS bridge. |
| [#4325](https://github.com/github/copilot-cli/issues/4325) | Session permanently unloadable after events.jsonl exceeds V8 max string | 1 | Long-lived sessions can corrupt their own history past V8's string limit, making resumption impossible — a data-loss risk for autopilot runs. |
| [#4327](https://github.com/github/copilot-cli/issues/4327) | BYOK Responses streaming drops apply_patch input before execution | 0 | When using `wireApi: "responses"` with BYOK, the CLI invokes `apply_patch` with empty args despite the SDK stream containing the full input — breaks patch-based workflows. |
| [#4306](https://github.com/github/copilot-cli/issues/4306) | Subtasks freeze and stop responding | 1 | Autopilot agent loops (e.g. speckit-implement ↔ speckit-converge) can dead-lock, leaving users stuck with no recovery path. |
| [#4299](https://github.com/github/copilot-cli/issues/4299) | Increasing typing latency over long sessions | 1 | Background agents cause progressive input lag, degrading interactivity to the point of unusability in extended sessions. |
| [#4318](https://github.com/github/copilot-cli/issues/4318) | Autopilot task-completion enforcement overrides explicit user instructions | 0 | The agent continues acting after a user narrows the scope to research/explanation only, violating explicit instructions. |
| [#4323](https://github.com/github/copilot-cli/issues/4323) | Comments in .mcp.json not supported | 0 | Repository-level MCP configs with `//` or `/* */` comments cause the entire file to be rejected, skipping all declared servers. |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

- **BYOK maturity** — Multiple models (#3282), per-agent reasoning effort (#2904), and accurate usage reporting (#2632, closed) show users want granular control over custom-model workflows.
- **MCP optimization** — Lazy-loading (#2901) and relaxed JSON parsing (#4323) indicate the MCP ecosystem is growing and users need the tooling to scale with it.
- **Autopilot reliability** — Several issues (#4306, #4318, #4329) point to a demand for more robust agent loops, explicit instruction respect, and session-state persistence.
- **Session durability** — Requests around V8 string limits (#4325), plan-mode state after forking (#4324), and typing latency (#4299) reflect a need for resilience in long-running interactive sessions.
- **UX polish** — Pinned session grouping (#4321) and split-view confirmation improvements (v1.0.78-2) show ongoing investment in navigation clarity.

---

## 6. Developer Pain Points

| Area | Friction |
|------|----------|
| **BYOK** | Single-model limit, streaming argument loss (`apply_patch`), and misleading premium-usage messaging erode trust in custom-model workflows. |
| **Sessions** | Long sessions degrade (typing latency), can become unrecoverable (V8 string limit), and lose state across fork/switch operations. |
| **Autopilot** | Agent loops freeze, task-completion logic overrides explicit user directives, and autopilot mode doesn't survive session resume. |
| **MCP Config** | Strict JSON parsing rejects commented config files; nested agent tool grants are undocumented and fragile. |
| **Installation** | Version-specific installs are broken — specifying a version still pulls the latest release. |
| **Platform quirks** | WSL2 + Windows Terminal key-binding leaks cause `Ctrl+H` to behave like `Ctrl+W`. |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-02

## 1. Today's Highlights

This cycle is dominated by a wave of correctness fixes across the tooling layer — `StrReplaceFile` replacement counting, double-encoded JSON in tool-call arguments, and shell pipe blocking all received attention. On the UX side, the Web UI session-switching bug and legacy console banner crash are the top-reported friction points, while a long-standing feature request for a cross-session memory system continues to accumulate community interest.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Feature Request: Memory System — Persistent context across sessions | A memory system would let the CLI retain project patterns, user preferences, and AI-managed notes between invocations — a foundational capability for sustained coding workflows. | 10 comments, open since Feb 2026; no upvotes yet but persists as a top enhancement ask. |
| [#2526](https://github.com/MoonshotAI/kimi-cli/issues/2526) | StrReplaceFile reports too few total replacements for chained edits | Chained edits can fail silently when later replacements reference text produced by earlier ones, because counts are against the original file rather than running content. | 1 comment; directly paired with PR #2554. |
| [#2576](https://github.com/MoonshotAI/kimi-cli/issues/2576) | Docs: document OmniRoute OpenAI-compatible provider setup | OmniRoute is a growing gateway; missing reproducible config docs (base URL, model declaration, env vars) leads to misconfiguration and support friction. | 0 comments; docs-only gap identified by a community contributor. |
| [#2574](https://github.com/MoonshotAI/kimi-cli/issues/2574) | Kimi Code Stuck on "Processing" and Doesn't Respond | A user reported the CLI hanging after successfully setting up a Unity MCP connection, suggesting a potential state-management or MCP lifecycle bug. | 0 comments; no reproduction steps provided yet. |
| [#2573](https://github.com/MoonshotAI/kimi-cli/issues/2573) | Bug: Web UI infinite spinner when switching sessions | The `kimi web` technical preview hangs on session switch, blocking any multi-session workflow in the browser UI. | 0 comments; reported against v1.48.0 on macOS arm64. |

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#2577](https://github.com/MoonshotAI/kimi-cli/pull/2577) | fix(web,vis): do not crash printing the startup banner on legacy console codecs | Resolves #2532. The banner printer uses `print()` with U+279C ("⟜") which crashes on GBK consoles. The PR adds codec-safe encoding for the startup banner output. |
| [#2572](https://github.com/MoonshotAI/kimi-cli/pull/2572) | fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments | Fixes Pydantic validation errors from providers (e.g., Moonshot API) that double-encode nested array/object values in `function.arguments`. Recursively unwraps until the correct shape is reached. |
| [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) | fix(tools): count StrReplaceFile replacements against running content | Corrects `StrReplaceFile` to evaluate each replacement against progressively edited content rather than the original file, matching user expectations for chained edits. |
| [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) | fix(shell): stop blocking until timeout when a detached child holds the pipes | Resolves #2468. Fixes a hang where `_run_shell_command` waits for stdout/stderr EOF even when a detached child process holds the pipes open (e.g., `some_daemon & echo done`). Now checks exit code independently. |
| [#2575](https://github.com/MoonshotAI/kimi-cli/pull/2575) | fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger | Resolves #2564. Hooks were fired with bare `asyncio.create_task(...)` and the handle dropped, causing pending hook tasks to be garbage-collected mid-execution. Now uses the proper fire-and-forget helper to retain task references. |

## 5. Feature Request Trends

- **Cross-session persistence** (#1283) remains the most prominent long-requested feature, with users asking for both AI-managed automatic memory and manual user-defined instructions.
- **Provider compatibility documentation** (#2576) reflects a trend of users self-hosting or routing through alternative gateways (OmniRoute, OpenAI-compatible providers) and needing clear setup guides.
- No new feature requests emerged this cycle beyond the above; the issue queue is otherwise dominated by bug reports.

## 6. Developer Pain Points

- **Correctness of chained file edits:** The `StrReplaceFile` counting bug (#2526 / #2554) reveals that multi-step edit workflows are fragile when replacement state isn't tracked progressively — a pattern that likely affects other compound tool calls.
- **Provider encoding edge cases:** Double-encoded JSON in tool-call arguments (#2572) points to a broader pain point around provider contract variance; tools that work with the native Moonshot API may break when routed through third-party gateways.
- **Shell process lifecycle management:** Detached children holding pipes (#2530 / #2546) causes hangs that are hard to diagnose, suggesting the shell integration needs more robust process-tree awareness.
- **Web UI stability:** The infinite spinner on session switch (#2573) and banner crash on legacy codecs (#2577) indicate the technical-preview Web UI still has foundational stability gaps.
- **Async task lifecycle:** Hook tasks being garbage-collected (#2575) is a subtle but impactful bug that can cause silent post-tool-side-effect failures.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-02

## 1. Today's Highlights

OpenCode v1.18.11 ships with critical fixes for MCP SSE reconnect loops and interleaved reasoning field handling. Community debate intensifies over the removal of the legacy layout option and Go subscription transparency, while a new unified marketplace PR signals a major platform expansion.

## 2. Releases

**v1.18.11**
- **Core:** Stopped MCP SSE connections from stuck reconnection loops after server errors; fixed provider model configs using interleaved reasoning fields (`reasoning_text` or custom names)
- **Desktop:** External links now open in the system browser
- [GitHub Releases](https://github.com/anomalyco/opencode/releases)

## 3. Hot Issues

| Issue | Summary | Engagement |
|-------|---------|------------|
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **Keep legacy layout option** — Users argue the old layout offers easier access to features without navigating through the new UI. | 34 comments · 37 👍 |
| [#39875](https://github.com/anomalyco/opencode/issues/39875) | **Revert removal of Go privacy wording & provider attribution** — Go subscribers report silent policy changes in recent commits and want telemetry/retention details restored. | 5 comments · 35 👍 |
| [#39847](https://github.com/anomalyco/opencode/issues/39847) | **Model hosting location disclosure** — User signed up for EU-hosted models; DeepSeek V4 stopped working and wants clarity on regional provider routing. | 5 comments · 17 👍 |
| [#33028](https://github.com/anomalyco/opencode/issues/33028) | **Subagents hang indefinitely after quick bash calls** — Streaming never completes or times out; only `Esc` or kill unblocks it. Reproduced across `glm-5.2` and `minimax-m3`. | 8 comments · 5 👍 |
| [#20322](https://github.com/anomalyco/opencode/issues/20322) | **Native auto-memory for cross-session learning** — No built-in mechanism to persist learnings; users manually add context each session. | 8 comments · 5 👍 |
| [#23595](https://github.com/anomalyco/opencode/issues/23595) | **`<system-reminder>` keeps moving, breaking cache** — Position drift causes unnecessary prompt processing in llama.cpp, wasting compute. | 6 comments · 11 👍 |
| [#32149](https://github.com/anomalyco/opencode/issues/32149) | **Opencode stops processing requests mid-session** — App enters "thinking" state then goes silent with no response or timeout. | 9 comments · 4 👍 |
| [#40078](https://github.com/anomalyco/opencode/issues/40078) | **Free usage unexpectedly exhausted** — Weekend user hit "subscribe to Go" wall on DeepSeek with no prior warning about usage limits. | 3 comments · 2 👍 |
| [#40064](https://github.com/anomalyco/opencode/issues/40064) | **GO subscription payment stuck** — Recurring payment failing; Zen balance also blocked. Second occurrence for this user. | 2 comments · 0 👍 |
| [#23506](https://github.com/anomalyco/opencode/issues/23506) | **MCP client TLS cert validation skip** — Request for optional certificate validation bypass for internal/MCP development servers. | 2 comments · 5 👍 |

## 4. Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#40115](https://github.com/anomalyco/opencode/pull/40115) | Bug fix | Retry `SQLITE_BUSY/LOCKED` on parallel `todowrite` calls from subagents — closes #40020 |
| [#39905](https://github.com/anomalyco/opencode/pull/39905) | Feature | Add `opencode debug prompt` CLI command to print the full system prompt for diagnostics |
| [#40110](https://github.com/anomalyco/opencode/pull/40110) | Bug fix | Prevent Enter on empty input from sending or interrupting — closes #40106 |
| [#40108](https://github.com/anomalyco/opencode/pull/40108) | Feature | **Unified marketplace** — shared runtime for skills and agents across Desktop, TUI, CLI, and API clients; closes #28696 |
| [#26861](https://github.com/anomalyco/opencode/pull/26861) | Bug fix | Lazy-scroll message loading to prevent old messages disappearing in long sessions; closes #7380 |
| [#37889](https://github.com/anomalyco/opencode/pull/37889) | Bug fix | Handle updated GitHub OIDC token format (`repo:octocat@<sha>`) — closes #37823 |
| [#34786](https://github.com/anomalyco/opencode/pull/34786) | Bug fix | Read text attachments as text for non-`text/plain` MIME types, preventing binary garbage from reaching models |
| [#34740](https://github.com/anomalyco/opencode/pull/34740) | Feature | Show session status (tokens, cost, MCP, LSP, branch, directory) in prompt area when sidebar is hidden |
| [#34739](https://github.com/anomalyco/opencode/pull/34739) | Bug fix | Log server plugin load/install/compatibility failures instead of surfacing them only as session events |
| [#34722](https://github.com/anomalyco/opencode/pull/34722) | Bug fix | Skip compaction summary when computing usage counter after `/compact`, fixing stale token counts |

## 5. Feature Request Trends

- **Persistent cross-session memory** — Multiple related issues (#20322, #32658) request built-in session persistence at project and system levels
- **Model hosting transparency** — Users want clear visibility into regional provider routing and data residency, especially for EU-hosted claims (#39847)
- **MCP security hardening** — Per-server TLS trust configuration (#40111) and optional cert validation skip (#23506) reflect growing MCP adoption and dev-environment needs
- **UI layout flexibility** — Strong community demand to retain the legacy layout alongside the new one (#37012)
- **Privacy & policy clarity** — Go subscribers push for restored transparency on telemetry and data retention in the privacy policy (#39875)
- **Tool output manageability** — Collapsible tool output blocks (#40096) to reduce noise in long sessions

## 6. Developer Pain Points

- **Session compaction failures** — Sessions exceeding model context limits even after stripping media (#17340), and compaction summaries corrupting token counters (#34722 / #40105)
- **Agent hang / infinite loops** — Subagents blocking indefinitely after bash calls (#33028), and self-reply loops when message IDs are non-monotonic (#28986)
- **LLM processing stalls** — Requests entering a "thinking" state with no completion or timeout (#32149), and region errors from DeepSeek requiring manual opt-in with no API path (#39872)
- **Desktop UX friction** — Enter key on empty input sending or interrupting tasks (#40106, #40038); web mode session list not populating (#27837)
- **Payment & billing opacity** — Free-tier usage disappearing without clear warnings (#40078), Go subscriptions stuck on recurring payment failures (#40064)
- **Cache performance degradation** — Drifting `<system-reminder>` tags breaking prompt caching in llama.cpp (#23595)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-02

## 1. Today's Highlights

The Pi project saw a burst of activity across reliability, authentication, and provider integration. Key themes include fixing long-standing session persistence bugs, improving resilience against provider timeouts and transient network failures, and adding support for new AI providers (MiniMax Video, Cline). OAuth credential handling and model catalog refresh timeouts were also addressed after community reports of frozen login flows.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **[Bug] Auto-compaction never triggers after context grows past 100%** (#6879) — A critical bug where compaction stalls until the API rejects an over-limit request. With 6 👍, the community flags this as a recurring pain point for long-running agentic sessions.
   https://github.com/badlogic/pi-mono/issues/6879

2. **[Open] anthropic-messages never sends x-client-request-id** (#7161) — Breaks session affinity for gateways relying on this header; multiple users with round-robin Claude accounts are affected. 8 comments, active discussion.
   https://github.com/badlogic/pi-mono/issues/7161

3. **[Closed] Stalled availability refresh is permanently unrecoverable** (#7301) — `forceRefreshAvailability()` chains onto a stuck promise, leaving the runtime unable to recover even after the underlying cause clears.
   https://github.com/badlogic/pi-mono/issues/7301

4. **[Closed] Keystroke input lag scales with conversation length** (#7385) — CPU profile reveals `tool-result-renderer` bypasses the `Text` component cache, causing 350–520ms per-character lag on sessions with ~160 tool calls.
   https://github.com/badlogic/pi-mono/issues/7385

5. **[Closed] Compaction summary truncated mid-word** (#7048) — `generateSummary` throws on `stopReason === "error"` but ignores `"length"`, causing the persisted summary to be cut mid-word when hitting the token cap.
   https://github.com/badlogic/pi-mono/issues/7048

6. **[Open] pi update --extensions blocks on npm 11.16.0** (#6600) — npm 11.16.0 blocks install scripts by default, breaking the extension update flow. 4 comments, no resolution yet.
   https://github.com/badlogic/pi-mono/issues/6600

7. **[Closed] Remote-catalog refresh after /login has no timeout** (#7418) — Post-login catalog refresh hangs for ~5 minutes when `pi.dev` is unreachable, freezing the entire UI.
   https://github.com/badlogic/pi-mono/issues/7418

8. **[Open] Multi-line paste broken without bracketed paste support** (#7321) — Termux and other terminals that don't support bracketed paste treat each newline as a submit, breaking multi-line input. 2 👍.
   https://github.com/badlogic/pi-mono/issues/7321

9. **[Closed] WebSocket retry only handles two error codes** (#7444) — Any `response.failed` error not explicitly listed (`previous_response_not_found`, `websocket_connection_limit_reached`) hard-stops the turn instead of retrying.
   https://github.com/badlogic/pi-mono/issues/7444

10. **[Closed] /model <name> hangs when pi.dev catalog is unreachable** (#7443) — Same root cause as #7418; the command blocks indefinitely on a firewalled/no-route network.
    https://github.com/badlogic/pi-mono/issues/7443

## 4. Key PR Progress

1. **[Closed] feat(ai): add MiniMax video generation** (#7467) — Adds a video-generation API registry and runtime model collection for MiniMax global and CN providers (v1/v2 endpoints), including create, query, and download handling.
   https://github.com/badlogic/pi-mono/pull/7467

2. **[Closed] feat(coding-agent): opt-in pre-dispatch durability barrier** (#7466) — Introduces a barrier so embedders can distinguish "provider never invoked" from "provider invoked but output lost" during crashes in the pre-message window.
   https://github.com/badlogic/pi-mono/pull/7466

3. **[Closed] fix(auth): support short-lived OAuth tokens** (#7456) — Fixes #7457 by refreshing stored OAuth credentials only when less than one minute remains, preventing a 5-minute-lifetime token from forcing a refresh on every request.
   https://github.com/badlogic/pi-mono/pull/7456

4. **[Open] fix(coding-agent): bound model catalog refreshes** (#7451) — Addresses #7027, #7113, #7153, #7418, #7443 by adding cancellation and queuing to model catalog refreshes, preventing indefinite hangs on unresponsive `pi.dev` API.
   https://github.com/badlogic/pi-mono/pull/7451

5. **[Closed] feat(ai): add Cline API and ClinePass providers** (#7453) — Adds two new OpenAI-compatible providers (`Cline` for usage-billing, `ClinePass` for flat-rate) at `https://api.cline.bot/api/v1`.
   https://github.com/badlogic/pi-mono/pull/7453

6. **[Closed] fix(ai): tolerate missing finish_reason on non-empty streams** (#7441) — Fixes a crash where gateways that omit the terminal `finish_reason` chunk kill every session with `Stream ended without finish_reason`.
   https://github.com/badlogic/pi-mono/pull/7441

7. **[Closed] fix(coding-agent): increase connection attempt timeout** (#7435) — Raises Node's 250ms address-family timeout to 2s for the Fireworks Undici connector, fixing false failures on high-latency routes (#7315).
   https://github.com/badlogic/pi-mono/pull/7435

8. **[Closed] fix(coding-agent): SessionManager._persist should not crash with ENOENT** (#7463) — Ensures the session parent directory exists before `appendFileSync`/`openSync` calls, fixing crashes from external cleanup or workspace resets.
   https://github.com/badlogic/pi-mono/pull/7463

9. **[Closed] feat(coding-agent): add PI_JITI_CACHE env var** (#7462) — Allows packagers like Nix to point the JITI transpile cache to a persistent directory, solving read-only store issues.
   https://github.com/badlogic/pi-mono/pull/7462

10. **[Closed] feat(tui): add switchable terminal renderers** (#7440) — Allows runtime switching between terminal renderers while preserving terminal, focus, input, and renderer state.
    https://github.com/badlogic/pi-mono/pull/7440

## 5. Feature Request Trends

- **Provider & API expansion** — Strong demand for new provider integrations: MiniMax Video (#7467), Cline/ClinePass (#7453), image_url passthrough without base64 encoding (#6151), per-provider/model concurrency limits (#7460), and compaction model/provider overrides (#7447).
- **Session persistence reliability** — Requests for durable session writes (#7466), server-side session backend (#7396), and bounded branch queries (#7448) point to a community priority on crash resilience and long-session integrity.
- **CLI & extension ergonomics** — Batching requests (#5825), structured output from tools (#5980), and session branching via `@` prefixes (#6991) indicate demand for more powerful interactive workflows.
- **Developer experience** — Suggestions like a Pi API (#4489), VS Code extension (#2858), and remote execution (#3009) reflect a desire for deeper IDE and infrastructure integration.

## 6. Developer Pain Points

- **Provider timeout and retry gaps** — Fireworks (#7315, #7435), OpenAI Codex (#7444), and generic WebSocket errors (#7464) reveal that the retry and timeout infrastructure covers only a narrow set of failure modes, leaving users exposed to silent hangs and hard stops.
- **No timeout on catalog/login refresh** — Multiple issues (#7418, #7443) converge on the same root cause: post-login and `/model` commands block indefinitely when `pi.dev` is unreachable, with no user-visible timeout.
- **Session bloat from subagents** — Subagent transcripts are persisted into the parent session, causing rapid JSONL growth and session hangs (#7452).
- **Short-lived OAuth tokens** — Tokens with ~5-minute expiry force a refresh on every request, breaking provider flows (#7457, fixed in #7456).
- **npm script blocking** — The `pi update --extensions` flow is broken by default npm 11.16.0 behavior, which blocks install scripts without explicit opt-in (#6600).
- **Auto-compaction reliability** — Compaction failing to trigger before the context limit is hit (#6879) and generating truncated summaries (#7048) are recurring reliability issues for long-running sessions.
- **Terminal rendering performance** — Input lag scaling with conversation length (#7385) and differential renderer drift on non-ASCII text (#7402) are persistent TUI friction points.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-02

---

## 1. Today's Highlights

Qwen Code v0.21.3 shipped with a significantly enhanced `/review` command featuring test-plan validation, measured failure attribution, and new verification lenses for deeper code change analysis. The community also saw a wave of prompt-caching improvements, with PR #8339 enabling compression to reuse the main conversation's cache prefix, and ongoing discussions on making caching even more efficient. Meanwhile, several key infrastructure and UX improvements landed across concurrency tuning, sub-session management, and desktop packaging.

---

## 2. Releases

### v0.21.3 (Stable)
- **Enhanced `/review` command** — added test plan validation, measured failure attribution, and new verification lenses for code change analysis ([#8215](https://github.com/QwenLM/qwen-code/pull/8215), [#8218](https://github.com/QwenLM/qwen-code/pull/8218))

### v0.21.3-nightly.20260802.184365390
- **Docs:** Completed the TUI keyboard shortcut reference ([#8327](https://github.com/QwenLM/qwen-code/pull/8327))
- **Fix:** Unblocked history pagination on `o` key

### v0.21.2-nightly.20260801.bc382c3ff
- **Hooks:** Session source now included in lifecycle hook payloads ([#8155](https://github.com/QwenLM/qwen-code/pull/8155))
- **Review:** Added cache identity checks

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#176](https://github.com/QwenLM/qwen-code/issues/176) | Tool calling with local model qwen3-30b-a3b | Local-model users report tool calls appear correct in output but are never executed, with no errors surfaced — a critical blocker for self-hosted deployments. | 23 comments · 7 👍 |
| [#1409](https://github.com/QwenLM/qwen-code/issues/1409) | Auto file read/write not working | Users report the CLI outputting only a few lines and terminating without performing expected file operations. | 6 comments |
| [#7966](https://github.com/QwenLM/qwen-code/issues/7966) | How to get files created in a session | No built-in way to distinguish which session created which file (direct writes vs. indirectly generated). | 6 comments |
| [#3804](https://github.com/QwenLM/qwen-code/issues/3804) | AskUserQuestion empty response error | Frequent `API Error: Model stream ended with empty response text` during `AskUserQuestion`, breaking interactive flows. | 5 comments |
| [#5971](https://github.com/QwenLM/qwen-code/issues/5971) | TUI scrolling/flickering on Linux | Long sessions cause the TUI to scroll from the first message repeatedly, creating a distracting "spam" effect. | 4 comments |
| [#8279](https://github.com/QwenLM/qwen-code/issues/8279) | Chat compression prompt-cache reuse | Design discussion on whether compression can fork the main session's prompt cache — key to reducing latency and cost. | 3 comments |
| [#8286](https://github.com/QwenLM/qwen-code/issues/8286) | Trusted private ASR base URLs | Managed deployments need an opt-in setting to use internal/private HTTP ASR endpoints for voice. | 3 comments |
| [#1328](https://github.com/QwenLM/qwen-code/issues/1328) | Missing `tiktoken_bg.wasm` on Windows | App crashes immediately on launch with `Missing tiktoken_bg.wasm` — blocks Windows users from starting. | 3 comments |
| [#8131](https://github.com/QwenLM/qwen-code/issues/8131) | Statusline text unselectable in Virtualized History | Virtualized History mode prevents copying statusline text, impacting debugging and log extraction. | 3 comments |
| [#4777](https://github.com/QwenLM/qwen-code/issues/4777) | Deferred tools bust prompt cache | MCP tool discovery changes invalidate the cached system prompt on every request, destroying caching benefits. | 2 comments |

---

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#8346](https://github.com/QwenLM/qwen-code/pull/8346) | Teach verifier the falsify-not-verify asymmetry | Adds a rule block to the Step 4 verifier identifying two states that masquerade as grounds for rejection: "I could not verify it" and "its evidence is somewhere I did not look." |
| [#8341](https://github.com/QwenLM/qwen-code/pull/8341) | Configurable sub-session concurrency caps | Makes `create_sub_session` concurrency ceilings configurable via `serve.maxConcurrentSubSessionsPerCaller` and `serve.maxConcurrentSubSessionsTotal`, raising defaults from 5→16 and 20→24. |
| [#8349](https://github.com/QwenLM/qwen-code/pull/8349) | `qwen review drive` — readiness polling & proven completion | New review sub-command that starts a process, waits until it's genuinely up, drives it, and captures results as facts rather than guessed sleep durations. |
| [#8350](https://github.com/QwenLM/qwen-code/pull/8350) | Trusted private ASR base URLs | Introduces `security.allowedInsecureVoiceBaseUrls` — an exact allowlist for voice provider URLs, enabling managed deployments to route transcription through private HTTP gateways. |
| [#8339](https://github.com/QwenLM/qwen-code/pull/8339) | Reuse prompt cache during chat compression | Lets compression reuse the main session's prompt-cache prefix when using the same model and a provider supporting Anthropic/DashScope caching. |
| [#8351](https://github.com/QwenLM/qwen-code/pull/8351) | Publish evidence images to assets repo | `qwen review publish-assets` hosts TUI screenshots and rendered-output comparisons in a user-designated repo and embeds them in PR review comments via commit-pinned URLs. |
| [#8305](https://github.com/QwenLM/qwen-code/pull/8305) | Render inline terminal images | Extends terminal-image infrastructure to model and tool `inlineData` in the interactive CLI, preserving ordered text/image parts. |
| [#8132](https://github.com/QwenLM/qwen-code/pull/8132) | Package Web Shell as a desktop app | Transforms the Tauri proof-of-concept into a release-ready desktop app that packages the existing Web Shell with native lifecycle management. |
| [#8344](https://github.com/QwenLM/qwen-code/pull/8344) | Redact sibling directives from forked subagents | Prevents a forked subagent from seeing directives of other forks launched in the same turn, fixing cross-contamination in parallel subagent scenarios. |
| [#6579](https://github.com/QwenLM/qwen-code/pull/6579) | Keep model switches session-scoped | `/model <model-id>` now only affects the active session; persisting as default requires explicit `/model --default <model-id>`, avoiding unintended global model changes. |

---

## 5. Feature Request Trends

- **Prompt caching & performance:** Multiple issues and PRs (#8279, #8284, #8277, #8339) converge on making prompt caching smarter — reusing prefixes across compression, exposing hit-rate telemetry, and preventing tool-discovery churn from invalidating caches.
- **Voice input & private deployments:** Requests for private ASR endpoints (#8286, #8350) and CLI voice input (#3110) reflect growing demand for voice-driven workflows in managed/air-gapped environments.
- **Session & tool observability:** Users want better visibility into session-scoped artifacts (#7966), sub-agent reasoning (#3758), and tool execution outcomes (#8180).
- **Desktop & UX polish:** Web Shell desktop packaging (#8132), inline terminal images (#8305), and settings flicker fixes (#938) show continued investment in the native experience.

---

## 6. Developer Pain Points

1. **Local model tool calling is unreliable** — The most-discussed issue (#176, 23 comments) highlights that tool calls from local models appear valid in output but fail silently without execution or error messages, making debugging extremely difficult.

2. **Prompt cache invalidation from dynamic tool discovery** — Deferred MCP tools (#4777) and subagent forking (#8344) repeatedly bust the prompt cache, negating latency and cost benefits — a structural issue the team is actively addressing.

3. **TUI scrolling and rendering artifacts** — Flickering (#5971), unselectable statusline text (#8131), and settings navigation flash (#938) degrade the interactive CLI experience, especially on Linux.

4. **Interactive flow breakage** — `AskUserQuestion` returning empty responses (#3804) and random "User cancelled" messages (#651) disrupt session continuity with no clear error signal.

5. **Session isolation & state leakage** — Forked subagents seeing sibling directives (#8344) and model switches affecting unintended sessions (#6579) point to ongoing challenges with state scoping in parallel and multi-session workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-02

## 1. Today's Highlights

The v0.9.4 release candidate lane is open (PR #5044), carrying several release-blocker fixes including a critical xAI device login recovery. A large issue burn-down batch (PR #5063) landed today covering Anthropic wire, sandbox, workflow, and TUI fixes, while the team pushed forward on provider-model coherence, SQLite startup safety, and Windows PATH preservation.

## 2. Releases

No new published release in the last 24 hours. The **v0.9.4 source candidate** is under review on the release lane — see [PR #5044](https://github.com/Hmbown/CodeWhale/pull/5044).

## 3. Hot Issues

1. **[5062] Managed sign-in: real device-flow dogfood against CWC staging** — The cloud.rs refactor on the release lane has never been validated with a live `codewhale account login` device flow; the xAI login dogfood previously exposed #5032. Tracking a PASS/FAIL before shipping. [[#5062](https://github.com/Hmbown/CodeWhale/issues/5062)]

2. **[5034] Switching providers can retain an unrelated default model** — Selecting OpenAI may leave `gpt-5.5` as default even when inherited from another route, indicating provider and model resolution aren't updated coherently. Open, release-blocker flag. [[#5034](https://github.com/Hmbown/CodeWhale/issues/5034)]

3. **[4683] Wrong DeepSeek completions URL (flaky)** — Intermittent network errors hitting the DeepSeek completions endpoint after prolonged use. Open issue, no fix yet. [[#4683](https://github.com/Hmbown/CodeWhale/issues/4683)]

4. **[4684] `danger-full-access` doesn't disable tools-layer workspace boundary** — The sandbox mode disables the OS-level sandbox but the tools layer (`read_file`, `grep_files`, etc.) still enforces its own boundary check, breaking global skill access. [[#4684](https://github.com/Hmbown/CodeWhale/issues/4684)]

5. **[5007] YouTuber using Codex instead of CodeWhale for DeepSeek-v4-flash** — Community member flagged a popular tech YouTuber testing DeepSeek-v4-flash with Codex rather than CodeWhale; sparks discussion about official TUI recognition. [[#5007](https://github.com/Hmbown/CodeWhale/issues/5007)]

6. **[4085] Dropbox File Provider read/write failure on macOS** — CodeWhale cannot read, write, grep, or delete files under `~/Library/CloudStorage/Dropbox/` (macOS 12+ File Provider). Not a sandbox issue — the binary is ad-hoc signed with zero entitlements. [[#4085](https://github.com/Hmbown/CodeWhale/issues/4085)]

7. **[4716] TUI exits immediately on launch in fresh Terminal.app tab** — `codew` returns `[Process completed]` on macOS Mac Studio with v0.9.1 candidate. Severity: stop-ship. [[#4716](https://github.com/Hmbown/CodeWhale/issues/4716)]

8. **[4564] Windows `exec --auto`: flags consumed as single arg** — `--model` and `--toolsets` before `exec` are concatenated into one argument on npm global install. Users request pre-exec flag support or env vars. [[#4564](https://github.com/Hmbown/CodeWhale/issues/4564)]

9. **[4415] Per-turn tool budgets not enforced across model routes** — A task routed to GLM-5.2/ZAI with an 8-call budget admitted 13 `read_file` calls in ~20s, violating hard budget constraints. [[#4415](https://github.com/Hmbown/CodeWhale/issues/4415)]

10. **[4682] Custom provider causes launch failure** — Setting a custom model provider name prevents CodeWhale from launching entirely. [[#4682](https://github.com/Hmbown/CodeWhale/issues/4682)]

## 4. Key PR Progress

1. **[PR #5063] Issue burn-down batch — 8 user-facing fixes** — Commits covering Anthropic wire strictness, sandbox, workflow, config scoping, session layer, input handling, and TUI. Each fix includes regression tests and was driven by adversarially-verified diagnosis. [[PR #5063](https://github.com/Hmbown/CodeWhale/pull/5063)]

2. **[PR #5051] Turn-scoped tool restriction and env-gated sampling overrides** — Stacked on #5044. Adds `StartTurnRequest.allowed_tools` / `disallowed_tools`, threaded into per-turn engine tool gate (deny wins). Enables external benchmark drivers as first-class without overlay patches. [[PR #5051](https://github.com/Hmbown/CodeWhale/pull/5051)]

3. **[PR #5044] v0.9.4 source candidate release** — Release lane reconciled with `main`. Carries release-blocker fix #5032 (xAI device login dangling `oauth_credential_generation` pointer recovery; 3/3 dogfood fails). [[PR #5044](https://github.com/Hmbown/CodeWhale/pull/5044)]

4. **[PR #5025] Make permission posture live** — Normalizes Runtime compatibility inputs into one `permission_posture` with canonical thread defaults and per-turn receipts. Auto-Review now deterministic: allows execute, holds unresolved actions closed, no modal on approvals. [[PR #5025](https://github.com/Hmbown/CodeWhale/pull/5025)]

5. **[PR #5030] File edit validation and clippy gate** — Validates C/C++ preprocessor conditionals against complete file before/after `edit_file`; keeps orphaned `#if`/`#endif` edits fail-closed while allowing balanced block insertion. [[PR #5030](https://github.com/Hmbown/CodeWhale/pull/5030)]

6. **[PR #5029] Restore only persisted composer drafts** — Stops inferring drafts from final persisted transcript message; preserves submitted and runtime-owned records in resumed history; restores composer text only from same-session `OfflineQueueState.draft`. [[PR #5029](https://github.com/Hmbown/CodeWhale/pull/5029)]

7. **[PR #5006] Preserve long Windows user PATH** — Fixes NSIS installer overwriting long current-user `PATH` values (registry read returns empty when exceeding fixed buffer, causing replacement with only CodeWhale's bin dir). [[PR #5006](https://github.com/Hmbown/CodeWhale/pull/5006)]

8. **[PR #5008] Actionable File edit diagnostics and stale-line-number tolerance** — Fixes repeated `edit_file` failures on large (100+ line) C files with Chinese comments and CRLF endings; was causing 15+ failures and rollbacks. [[PR #5008](https://github.com/Hmbown/CodeWhale/pull/5008)]

9. **[PR #5027] SQLite startup lock-safe** — Installs 5-second busy timeout before any DB-level connection; treats WAL as persistent mode, transitions only when necessary, and verifies acceptance. [[PR #5027](https://github.com/Hmbown/CodeWhale/pull/5027)]

10. **[PR #4992] User command dispatch precedence, shadowing, and error semantics** — Adds Gherkin acceptance tests for user-command precedence: user command shadows built-in canonical name/alias, absent user command falls back to built-in, invalid user command produces defined error. [[PR #4992](https://github.com/Hmbown/CodeWhale/pull/4992)]

## 5. Feature Request Trends

- **Cross-provider coherence** — Issues #4411, #5034, and PR #5051 all point to a need for provider-scoped defaults and consent flows so that switching providers doesn't leave stale model state or route across providers unexpectedly.
- **Localization expansion** — Multiple issues (#3093, #4790, #4791, #4788, #4749) drove Korean, Spanish, Brazilian Portuguese, Hindi, Ukrainian, French, German, and Catalan packs through v0.9.2. The trend is clearly toward broader non-English locale coverage with Devanagari script support.
- **Multi-worktree ergonomics** — Issue #5061 calls out the lack of cross-worktree file-claim visibility, shared build caches, and branch-to-PR promotion helpers as a gap worth epic-scale investment.
- **Concurrency seam visibility** — Issue #5060 highlights a hardcoded 16-worker ceiling in experimental search; the trend is toward reading live Fleet concurrency limits with fallbacks and surfacing them in run receipts.
- **KV-cache prefix stability** — Issue #5059 continues a thread around `/cache` telemetry and whether DeepSeek Responses `web_search_call` items should be replayed or remain notice-only.

## 6. Developer Pain Points

- **Provider/model state drift** — Switching providers leaves stale defaults (#5034) and cross-provider auto-routing pulls from every authenticated provider rather than the active one (#4411). Developers need coherent, single-source-of-truth resolution.
- **Windows CLI flag parsing** — `--model` and `--toolsets` flags are concatenated on Windows npm installs (#4564); the proposed env var workaround is a band-aid, not a root-cause fix.
- **macOS sandbox vs. tools-layer mismatch** — `danger-full-access` disables the OS sandbox but the tools layer retains its own boundary check (#4684), creating confusion for power users who expect unrestricted access.
- **Dropbox File Provider incompatibility** — CodeWhale can't operate on the modern macOS Dropbox path (#4085), a growing pain point as Apple's File Provider framework becomes the default.
- **Session resume draft corruption** — PR #5029 addressed a root cause where session resume inferred composer drafts from any final transcript message instead of persisted draft state, causing ghost text on re-entry.
- **Windows PATH truncation by installer** — The NSIS installer overwrites long `PATH` values due to registry buffer limits (#5006), silently breaking other toolchains for affected users.
- **Unenforced tool budgets on routed tasks** — Tasks with explicit call budgets can exceed them when routed to certain models (#4415), undermining cost controls and reliability guarantees.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*