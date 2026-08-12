# AI CLI Tools Community Digest 2026-08-07

> Generated: 2026-08-07 02:06 UTC | Tools covered: 9

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



# Cross-Tool AI CLI Comparison Report — 2026-08-07

## 1. Ecosystem Overview

The AI CLI tools ecosystem is in a phase of rapid maturation, with all major players shipping substantive releases this cycle while simultaneously grappling with similar reliability and UX challenges. The dominant theme is the tension between agentic autonomy (subagents, plugins, skill systems) and the operational safeguards needed to make those systems trustworthy—permission models, resource lifecycle management, and state integrity all surfaced as critical friction points across communities. Platform fragmentation, particularly around Windows and terminal compatibility, remains a universal pain point, while provider integrations and context-window economics are increasingly strategic differentiators.

## 2. Activity Comparison

| Tool | Hot Issues | Open PRs | Releases (24h) | Release Activity |
|------|-----------|----------|----------------|-----------------|
| **Gemini CLI** | 10 | 14 | v0.54.1, v0.54.2, v0.55.0-preview.2 | High — 3 version bumps |
| **CodeWhale** | 10 | 12 | v0.9.4 (merged prev. day) | High — 77-commit train |
| **Qwen Code** | 10 | 10 | v0.21.7, nightly, live-host-v0.1.0 | High — 3 releases |
| **Pi** | 10 | 10 | v0.84.0 | High — major TUI release |
| **OpenCode** | 10 | 10 | None | Medium — hardening PRs |
| **OpenAI Codex** | 10 | 10 | rust-v0.147.0 | Medium — feature release |
| **Claude Code** | 9 | 4 | None | Low — bug-fix cycle |
| **Copilot CLI** | 11 | 0 | v1.0.79-6 | Low — patch only |

## 3. Shared Feature Directions

| Theme | Tools Involved | Specific Need |
|-------|---------------|---------------|
| **Subagent reliability & lifecycle** | Gemini CLI, Claude Code, CodeWhale, Pi | Subagents silently failing, hanging, or leaking resources; need for explicit checkpointing and bounded recursion |
| **Context-window awareness** | Pi, OpenCode, CodeWhale, Claude Code | Users demand visibility into context usage (#6152 — 129 👍 on OpenCode) and proactive compaction |
| **Multi-provider / BYOM** | Pi, Qwen Code, CodeWhale, OpenAI Codex | Ollama Cloud, Qwen Token Plan, Bedrock Mantle, OpenAI-compatible endpoints — users want cost flexibility |
| **MCP server lifecycle** | OpenAI Codex, Copilot CLI, CodeWhale | Per-session MCP spawning wastes memory (10.9 GB reported); pooling and OAuth recovery are key asks |
| **TUI / terminal UX** | Pi, Qwen Code, Gemini CLI, CodeWhale | Multi-line status bars (#21653 — 58 👍), terminal resize stability, cross-platform rendering |
| **Session persistence & recovery** | OpenAI Codex, Copilot CLI, CodeWhale | Orphaned child processes, corrupted transcripts on rename, resume regressions |
| **Permission & security models** | Claude Code, Qwen Code, Gemini CLI | Allow-list bypass bugs (#6527), read-only classifier evasion (#8582), subagent privilege bounds |
| **Plugin / skill ecosystems** | Claude Code, Qwen Code, OpenCode, CodeWhale | Project-scoped plugins, hot-reloading, Registry-first tool discovery |

## 4. Differentiation Analysis

| Tool | Focus Area | Target Users | Technical Approach |
|------|-----------|--------------|-------------------|
| **Claude Code** | Enterprise permission models, Cowork integration | Teams with strict access controls | Anthropic-native, policy-driven agent lifecycle |
| **OpenAI Codex** | Plugin ecosystem, sandbox security | Developers using OpenAI models | Rust-based, Bubblewrap sandboxes, per-agent context lineages |
| **Gemini CLI** | Agent orchestration, subagent reliability | Power users running multi-step workflows | Google-native, deep generalist/subagent decomposition |
| **Copilot CLI** | GitHub ecosystem integration, CI/CD | GitHub-centric teams | ACP protocol, Actions-native auth, org model routing |
| **Kimi Code** | File integrity, UTF-8 safety, memory | Developers working with mixed-encoding codebases | Moonshot-native, StrReplaceFile correctness focus |
| **OpenCode** | Subscription model transparency, TUI polish | Users on paid provider tiers | Go-based, provider-agnostic, strong TUI plugin system |
| **Pi** | TUI innovation, provider expandability | Users wanting local-first + cloud flexibility | TypeScript, Harness v2, Ollama/Bedrock/Qwen integrations |
| **Qwen Code** | Multimodal, voice frontend, compression caching | Chinese-market and cost-conscious users | DashScope-native, goal-based execution, terminal image rendering |
| **CodeWhale** | Runtime API, workflow orchestration | Embedders and platform builders | Rust, ACP server tool exposure, fleet agent management |

## 5. Community Momentum & Maturity

**Most Active (rapid iteration):** Gemini CLI and CodeWhale are shipping the most commits and version bumps per cycle. Gemini's three version releases and 14 PRs, plus CodeWhale's 77-commit train, signal high development velocity.

**Maturing (stabilization focus):** Claude Code and Copilot CLI are in bug-fix mode — fewer PRs, patch releases. This is a sign of maturity: the core feature set is established, and energy is going toward reliability.

**Emerging (feature expansion):** Pi's v0.84.0 fullscreen TUI and Qwen Code's removal of the 50-turn Goal limit show platforms still aggressively adding capabilities. OpenCode's upstream subscription outage (#38257) is a maturity stress test — a paid-feature dependency on a third-party proxy that has been broken for 17+ days with no fix.

**Community Health Signals:**
- Highest single-issue engagement: OpenCode's context-usage display (#6152, 129 👍) and Qwen Code's OAuth free-tier policy (#3203, 150 comments)
- Most upvoted cross-tool theme: Subagent reliability (Gemini #21409, 8 👍; CodeWhale #5253)
- Critical unresolved outages: OpenCode Go/Zen 401s (dozens of comments, no fix)

## 6. Trend Signals

| Signal | Evidence | Developer Implication |
|--------|----------|----------------------|
| **Agent orchestration is the new frontier** | Gemini's generalist hangs (#21409), CodeWhale's subagent isolation PRs (#5252), Pi's Harness v2 (#7710) — all indicate the industry is moving from single-agent to multi-agent workflows, and reliability is the bottleneck | Invest in subagent observability, checkpointing, and bounded recursion; expect this layer to mature over the next 2-3 cycles |
| **MCP is becoming a resource liability** | Codex #20883 (per-session MCP), CodeWhale #5238 (Registry-first discovery), Copilot #4392 (orphaned stdio processes) — MCP servers are being spawned wastefully across all tools | Advocate for project-scoped MCP pooling; vendor lock-in risk if tools don't standardize on lifecycle management |
| **Context economics are a competitive differentiator** | Qwen's compression cache sharing (#8418, #8425), OpenCode's usage display (#6152), Claude's auto-compaction (#33026) — users care deeply about token cost and context budget | Tools that reduce context waste (lazy schema loading, compression sharing) will win cost-conscious users |
| **Platform fragmentation persists** | Windows Desktop crashes (Qwen #8615, Codex #33776), tmux rendering (Copilot #4212), Wayland (Gemini #21983), macOS shell regression (CodeWhale #4828) — no tool has solved cross-platform TUI consistency | Prioritize Windows and WSL testing; terminal emulator compatibility is still a raw edge across the ecosystem |
| **Permission models need transparency** | Claude #6527 (allow-list bypass), Qwen #8582 (read-only bypass), Copilot #4388 (permission mode regression) — users cannot trust permission gating when bugs silently override policy | Audit your tool's permission system; prefer tools with explicit, auditable policy enforcement |
| **Provider dependency is a single point of failure** | OpenCode's 401 outage (#38257) affecting all Go/Zen users for 17+ days with no fix — proxy-layer failures silently block entire user bases | Avoid tools that abstract provider keys behind a single paid proxy without a clear fallback path; direct provider access is more resilient |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
**As of 2026-08-07 | Source: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

### #1 — `skill-creator` Evaluation Fix (PR #1298 / #1323 / #1099 / #1050 / #1261)
**Functionality:** Core meta-skill for creating, evaluating, and optimizing other Skills. `run_eval.py` — the backbone of the description-optimization loop — was reporting **0% recall** universally due to Windows subprocess bugs, trigger-detection failures, and parallel-worker interference. Multiple PRs converged to fix these.
**Discussion Highlights:** 10+ independent bug reproductions; Windows `[WinError 10038]` pipe errors; YAM special-character quoting in descriptions; trigger-eval files polluting live `.claude/commands/` directories.
**Status:** Multiple open PRs with overlapping fixes — fragmentation concern.

### #2 — `document-typography` (PR #514)
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a universal pain point: users rarely ask for good typography, but Claude regularly produces sloppy output.
**Discussion Highlights:** Zero comments but strong conceptual fit; covers every document-generating workflow.
**Status:** Open.

### #3 — `docx` Tracked-Change Fix (PR #541)
**Functionality:** Fixes document corruption when the DOCX skill adds tracked changes to files containing existing bookmarks. Root cause: OOXML `w:id` is a shared ID space; hardcoded low IDs (1, 2, 3) collide with pre-existing bookmarks.
**Discussion Highlights:** Critical reliability bug for enterprise DOCX workflows.
**Status:** Open.

### #4 — `pdf` Case-Sensitivity Fix (PR #538)
**Functionality:** Fixes 8 broken references in `skills/pdf/SKILL.md` where `REFERENCE.md` and `FORMS.md` were uppercase but actual files are lowercase. Breaks on macOS/Linux with case-sensitive filesystems.
**Discussion Highlights:** Single-author, focused fix from an active contributor (`Lubrsy706`).
**Status:** Open.

### #5 — `frontend-design` Clarity Improvement (PR #210)
**Functionality:** Revises the frontend-design skill for better actionability — ensuring every instruction is followable within a single Claude Code conversation.
**Discussion Highlights:** Focuses on internal coherence and token efficiency.
**Status:** Open.

### #6 — `skill-quality-analyzer` + `skill-security-analyzer` (PR #83)
**Functionality:** Two meta-skills evaluating Skill quality across five dimensions (structure, documentation, examples, etc.) and security posture. Designed for the `example-skills` marketplace collection.
**Discussion Highlights:** Addresses the growing need for Skill governance as the ecosystem scales.
**Status:** Open.

### #7 — `ODT` Skill (PR #486)
**Functionality:** Full OpenDocument Format support — create, fill, read, and convert `.odt`/`.ods` files. Triggers on any mention of ODT, ODS, ODF, LibreOffice, or ISO-standard document requests.
**Discussion Highlights:** Fills a gap for open-source document workflows (critical for Linux/LibreOffice environments).
**Status:** Open.

### #8 — `testing-patterns` (PR #723)
**Functionality:** Comprehensive testing skill covering the Testing Trophy model, AAA pattern, test naming, React Testing Library, and end-to-end testing.
**Discussion Highlights:** One of the few community submissions targeting the full testing stack rather than a single format.
**Status:** Open.

---

## 2. Community Demand Trends

| Trend | Source | Signal |
|---|---|---|
| **Tooling & Quality Gates** | Issue #492 (43 comments), PR #83, PR #1367 | Community is urgently requesting governance layer — security analysis, quality measurement, and audit trails for Skills themselves |
| **Multi-Format Document Handling** | PRs #514, #486, #538, #541 | ODT, DOCX, PDF, and typography form a cluster; users need reliability across the entire document pipeline |
| **Cross-Platform Compatibility** | PRs #1099, #1050, #1323 | Windows is a consistent friction point for `skill-creator`; ecosystem tooling must support non-macOS environments |
| **Context-Window Awareness** | Issue #1487, Issue #1175 | Skills that eagerly inject large content (156k+ tokens) are flagged; users want lazy-on-demand patterns |
| **Org-Wide Sharing** | Issue #228 (16 comments, 8 👍) | Strong demand for enterprise skill distribution beyond individual installation |
| **Reasoning & Verification** | PR #1367, Issue #1385 | Pre-delivery self-audit and adversarial review pipelines are being requested for production-grade agents |

---

## 3. High-Potential Pending Skills

These PRs have active community engagement and address high-signal gaps — likely candidates for near-term merging:

| PR | Skill / Fix | Why It May Land Soon |
|---|---|---|
| [PR #1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval fix | Blocks the entire Skill creation feedback loop; 10+ reproductions confirm criticality |
| [PR #541](https://github.com/anthropics/skills/pull/541) | DOCX tracked-change collision | Real-world document corruption; single-author, focused scope |
| [PR #538](https://github.com/anthropics/skills/pull/538) | PDF case-sensitivity | 8-line factual fix; zero controversy |
| [PR #1367](https://github.com/anthropics/skills/pull/1367) | Self-audit (v1.3.0) | Builds on two of three pipeline gates already proven in Issue #1385 |
| [PR #723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | First comprehensive testing-skill submission; broad developer audience |
| [PR #486](https://github.com/anthropics/skills/pull/486) | ODT | Opens Linux/enterprise document workflows; no competing PR |
| [PR #1479](https://github.com/anthropics/skills/pull/1479) | `plan-file-hygiene` | Addresses acknowledged lifecycle gap (#1417); community co-authored framing |

**Note:** Windows-related `skill-creator` PRs (#1099, #1050, #1323, #1261) are fragmented — reviewers may prefer a unified approach over four overlapping patches.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is not for new domain Skills, but for tooling that makes Skills themselves trustworthy, testable, and cross-platform — a meta-layer of quality gates, eval infrastructure, and governance is what the ecosystem is starved for right now.**

---



# Claude Code Community Digest — 2026-08-07

## 1. Today's Highlights

Permission and security boundary bugs dominate this cycle: the `ask` list is being silently ignored when `"Bash"` appears in the allow list (#6527), and compound-command permission prompts are flooding users with 700+ prompts on non-mutating chains (#76718). Meanwhile, Cloud/Cowork git proxy restrictions have broken push workflows even with fine-grained PATs (#76248), signaling an active rollout issue.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

**#6527 — `ask` list ignored when "Bash" is in allow list** [OPEN · 23 comments · 19 👍](https://github.com/anthropics/claude-code/issues/6527)
The `ask` permission list is completely bypassed whenever `"Bash"` appears in the allow list, effectively nullifying granular command controls. High community concern given security implications.

**#57371 — Disable bundled Cowork background service on Windows** [OPEN · 18 comments · 42 👍](https://github.com/anthropics/claude-code/issues/57371)
Top upvoted feature request: Windows users without Cowork want to disable the `CoworkVMService` to reduce background resource usage. Strong consensus for a configuration toggle.

**#54750 — Session limit at 100% despite low local usage** [OPEN · 16 comments · 9 👍](https://github.com/anthropics/claude-code/issues/54750)
Claude Code reports session limits as exhausted even when local usage is minimal, blocking further work. Points to a metering sync or tracking bug between local state and server-side limits.

**#76248 — Git proxy blocks all pushes in Cloud/Cowork sessions** [OPEN · 14 comments · 5 👍](https://github.com/anthropics/claude-code/issues/76248)
Since ~10 Jul 2026, Cowork/remote sessions reject pushes to repos outside the authorized set—even with user-supplied fine-grained PATs. Appears to be a `CCR_TEST_GITPROXY` rollout regression.

**#79584 — Assistant text intermittently not rendered before tool calls on Windows** [OPEN · 9 comments · 7 👍](https://github.com/anthropics/claude-code/issues/79584)
Text emitted in the same turn as an `AskUserQuestion` tool call fails to display on Windows, breaking plugin-driven workflows. A reproducible TUI rendering gap.

**#73638 — Session rename mid-server-tool-call corrupts transcript** [OPEN · 9 comments · 0 👍](https://github.com/anthropics/claude-code/issues/73638)
Renaming a session while a `server_tool_use` is in flight injects a synthetic `system-reminder` user turn, permanently breaking the transcript and causing 400 errors on every subsequent prompt. Critical core bug with a clear repro.

**#26581 — System notifications when Claude needs attention** [OPEN · 8 comments · 32 👍](https://github.com/anthropics/claude-code/issues/26581)
Strong demand for OS-level notifications (VSCode or terminal) signaling task completion or required user input, matching Copilot's behavior. High upvote count reflects broad multi-task workflow needs.

**#33026 — Allow Claude to self-initiate context compaction** [CLOSED · 8 comments · 15 👍](https://github.com/anthropics/claude-code/issues/33026)
Claude cannot proactively compact context, creating workflow friction on complex multi-step tasks. Closed—likely implemented or deferred.

**#76718 — Compound-command permission prompts make orchestration unusable** [OPEN · 7 comments · 0 👍](https://github.com/anthropics/claude-code/issues/76718)
Permission system prompts on compound commands even when every segment is individually allowlisted, generating 700+ prompts in two days of parallel-session work. Directly blocks fan-out orchestration patterns.

**#78775 — Session time-range filter only appears when grouped by State** [OPEN · 7 comments · 23 👍](https://github.com/anthropics/claude-code/issues/78775)
Desktop regression: the session time-range filter UI is hidden unless "Group by" is set to State, undermining session navigation for Desktop users.

---

## 4. Key PR Progress

**[#84600 — Enable frontend-design plugin at project scope](https://github.com/anthropics/claude-code/pull/84600)**
Registers the official marketplace and enables the `frontend-design` skill via `.claude/settings.json`, auto-loading it for all repo users.

**[#84427 — Fix plugin-dev validator exiting on first warning](https://github.com/anthropics/claude-code/pull/84427)**
Follow-up to #76985: prevents `validate-agent.sh` from terminating on the first warning/error under `set -e`, allowing full validation reports.

**[#84381 — Handle wrapped hook schemas in validate-hook-schema.sh](https://github.com/anthropics/claude-code/pull/84381)**
Updates the hook schema validator to detect and handle top-level `"hooks"` object wrappers and optional matchers in `hooks.json`.

**[#84365 — Allow any user to prevent auto-close with thumbs down](https://github.com/anthropics/claude-code/pull/84365)**
Fixes #79146: any user's thumbs-down reaction now prevents bot auto-closure, aligning with the dedupe bot's existing behavior.

---

## 5. Feature Request Trends

- **Notification & alerting:** System-level notifications for task completion and attention requests (#26581) remain highly requested.
- **Proactive context management:** Users want Claude to self-initiate compaction rather than relying on opaque system thresholds (#33026).
- **Session & state visibility:** Terminal tab titles reflecting agent state (#71369) and better session filtering in Desktop (#78775) point to demand for richer workspace awareness.
- **Resource control on Windows:** Disabling unused background services like CoworkVMService (#57371) is a recurring lightweight-installation request.

---

## 6. Developer Pain Points

1. **Permission system over-restriction:** The compound-command prompt bug (#76718) and `ask` list bypass (#6527) suggest the permission model is not correctly handling allowlisted commands, breaking automation and multi-session workflows.
2. **Cloud/Cowork git restrictions:** The PAT pass-through regression (#76248) disrupts established CI/CD and remote-session push workflows without clear migration guidance.
3. **TUI rendering reliability:** Intermittent text non-rendering (#79584) and mouse-click interaction regressions (#72173) undermine trust in the CLI experience, especially on Windows.
4. **Desktop session UX regressions:** Time-range filter hiding (#78775) and repeated crash-on-screenshot issues (#81664) indicate surface-level QA gaps in the Desktop app.
5. **Transcript corruption on session management:** The rename-while-tool-in-flight bug (#73638) shows that concurrent session operations can permanently corrupt state, with no recovery path.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-07

## 1. Today's Highlights

Codex `rust-v0.147.0` landed with portable Agent Plugins and persistent conversation sections, significantly expanding the plugin ecosystem and long-transcript usability. Community attention is dominated by a Windows Desktop process-leak crisis—hundreds of orphaned `taskkill.exe`/`conhost.exe` processes are degrading WMI and DWM—and a parallel macOS zombie-child leak hitting the same root pattern. On the development side, a wave of internal PRs addresses MCP stability, context-window tracking, and sandbox improvements.

---

## 2. Releases

**rust-v0.147.0** — [GitHub](https://github.com/openai/codex)

- **Portable Agent Plugins:** Install plugins from local, personal, workspace, and remote catalogs with cross-catalog search. (#36544, #36409, #36919, #36796)
- **Persistent Conversation Sections:** Organize long transcripts into manually ordered, persistent sections with incremental browsing. (#35722, #36007, #36380, #36948)

---

## 3. Hot Issues

1. **[Windows] ChatGPT.exe spawns hundreds of taskkill.exe/conhost.exe processes, causing WMI storms and DWM degradation** — #33776 · 32 comments · 27 👍
   A severe Windows Desktop bug where Codex leaves child processes orphaned during sessions, triggering WMI failure cascades and visual desktop corruption. High community impact; the most upvoted open issue this cycle.

2. **[Bug] Desktop thread tools intermittently lose handlers (`No handler registered`)** — #28080 · 21 comments · 2 👍
   Thread-based tools in Codex Desktop randomly become unregistered mid-session, breaking tool calls without a clear restart path. Signals a lifecycle-management gap in the app server.

3. **Codex Desktop should use a project-scoped MCP process pool instead of starting MCP per session** — #20883 · 17 comments · 4 👍
   MCP servers are currently spawned per chat/session rather than shared per project, inflating resource use and causing duplicate server instances. A widely felt ergonomics and performance pain point.

4. **[CLOSED] Model picker filters out models returned from model_catalog_json** — #19694 · 14 comments · 35 👍
   A highly upvoted (35) now-closed bug where the Desktop model picker silently dropped models from the catalog. Its resolution is likely connected to the broader model-routing work in recent PRs.

5. **CLI cannot acquire Chrome extension backend while Codex app UI works** — #26820 · 12 comments · 9 👍
   The CLI and Desktop app use the same Chrome extension but only the app succeeds at acquiring the backend, pointing to a race or permissions gap in the CLI's connection flow.

6. **[Enhancement] Support multi-line status line** — #21653 · 12 comments · 58 👍
   The single most upvoted open issue (58 👍). Users with custom status-line configs see truncation because the TUI status line cannot wrap. A high-visibility quality-of-life request.

7. **[Bug] ChatGPT for Windows cannot complete setup or enter limited-access mode** — #33967 · 9 comments · 0 👍
   New installations on Windows are stuck on the "Complete Windows setup" screen. Blocks onboarding for affected users; no visible workaround.

8. **[Bug] MCP suites persist after subagents complete, reaching 10.9 GB private memory** — #33531 · 5 comments · 1 👍
   Subagent-completed MCP server processes are not cleaned up, accumulating gigabytes of private memory. Directly tied to PR #37344 (fix landed today).

9. **Compaction can promote partial output from interrupted commands into falsely confirmed task state** — #35355 · 5 comments · 0 👍
   A correctness issue where interrupted command output is treated as durable task state and inherited across turns without re-verification. Raises data-integrity concerns for long-running agents.

10. **[Bug] Codex subagents drain full week quota overnight — usage counting broken** — #35463 · 4 comments · 0 👍
    Subagents appear to double-count or miscount usage against the weekly quota, exhausting limits prematurely. Critical for Pro/Plus users running automated workloads.

---

## 4. Key PR Progress

1. **Configure the default code-mode exec yield timeout** — #37352 ✅
   Adds a configurable `default_exec_yield_time_ms` (default 30s) for code-mode `exec` calls, making timeout behavior explicit and tunable.

2. **Allow `ThreadManager` to customize thread ID generation** — #37350 ✅
   Introduces `ThreadManager::with_thread_id_generator`, enabling custom ID allocation while preserving UUIDv7 as default and stored IDs on resume.

3. **Mount a minimal `/dev` in full-filesystem Bubblewrap sandboxes** — #37349 ✅
   Prevents host device-tree leakage into network-isolated sandboxes by overlaying a minimal `/dev`, addressing security concerns around sandbox escape.

4. **Add rollout migration tooling and background migration** — #37348 ✅
   Ships `codex migrate-rollouts` with dry-run, `--apply`, thread filtering, I/O throttling, and JSON/verbose reports for safer model-rollout transitions.

5. **Track context windows per agent** — #37347 ✅
   Forked subagents now get distinct context-window lineages identified by agent name, fixing compaction-metadata collisions between parent and child agents.

6. **Send model routing hints to the Codex backend** — #37345 ✅
   Adds an `x-codex-routing-hint` header (model + service tier) on Responses HTTP, remote compaction, and WebSocket handshakes, improving backend routing fidelity.

7. **Fix subagent MCP startup status settling** — #37344 ✅
   Resolves a bug where cached MCP servers remained in a "running" state indefinitely after subagent completion, directly addressing #33531.

8. **Preserve foreign cwd URIs for turn-input contributors** — #37342 ✅
   Switches `TurnInputEnvironment.cwd` to `PathUri` to correctly handle non-native path formats (e.g., WSL paths on Windows), fixing silent environment drops.

9. **Support content references for inline visualizations** — #37341 ✅
   Extends TUI rendering to recognize structured `visualize` content references alongside inline directives, enabling richer visualization workflows.

10. **Recover MCP servers after OAuth reauthentication** — #37337 ✅
    Streamable HTTP MCP servers that failed startup due to rejected credentials are now automatically retried after OAuth sign-in completes, reducing manual restart friction.

---

## 5. Feature Request Trends

- **MCP lifecycle & pooling:** Users consistently want MCP servers shared per-project rather than per-session (#20883), with better startup-state tracking (#33531) and OAuth recovery (#37337). The trend points toward a persistent, pooled MCP runtime.
- **TUI ergonomics:** The multi-line status line (#21653) and forced-focus notification disable (#13979) reflect demand for a less intrusive, more customizable terminal experience.
- **Shell configurability on Windows:** Allowing a configurable default session shell (#16579, 32 👍) is a repeated ask from users who prefer Git Bash or other non-PowerShell shells.
- **Strict subagent delegation:** The RFC for host-enforced monotonic authority ceilings (#36381) signals community interest in least-privilege subagent spawning with verifiable capability bounds.
- **Prompt caching support:** GPT-5.6 `prompt_cache_breakpoint` support (#35300) is a targeted but important feature for users running long, prefix-stable sessions.

---

## 6. Developer Pain Points

- **Zombie/orphaned child processes across platforms:** Both Windows (#33776) and macOS (#37247, #37236) report severe child-process leaks—hundreds to thousands of defunct processes exhausting OS resource tables. This is the dominant stability concern this cycle.
- **MCP server resource waste:** Per-session MCP spawning (#20883) and post-subagent persistence (#33531) cause memory bloat (reported up to 10.9 GB), especially in projects with many chats.
- **Quota & usage tracking inaccuracies:** Subagent usage counting appears broken (#35463), and OAuth fallback silently uses a hardcoded dummy key after network changes (#37192), both eroding trust in usage guarantees.
- **Compaction integrity:** Partial command output being promoted to confirmed task state (#35355) and checkpoint prose overriding durable artifacts (#37325) represent a class of correctness bugs where ephemeral observations are treated as authoritative.
- **Windows setup & sandbox friction:** New-install hangs (#33967), elevated-sandbox UAC storms (#31556), and WSL `bwrap` / Landlock panics (#24873) make the Windows + WSL experience notably fragile compared to macOS.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-07

## 1. Today's Highlights

Two significant bug fixes landed today: a patch resolving the "model finishes your sentence" bug caused by interrupted tool streams (PR #28700), and a classification change that treats model capacity exhaustion as a terminal error instead of retrying indefinitely (PR #28716). On the issue side, the community continues to report subagent reliability problems, with the generalist agent hang (#21409) and subagent recovery after MAX_TURNS (#22323) drawing the most attention.

---

## 2. Releases

**No new releases** published in the last 24 hours. However, three version bumps were merged and closed:

- **v0.54.1** — cherry-picked via PR #28710, containing fixes from PRs #28607 and #28700
- **v0.54.2** — bumped via PR #28712
- **v0.55.0-preview.2** — created via PR #28719 (cherry-pick of commit `2139b12` into the preview branch)

---

## 3. Hot Issues

### 🔴 P1 — Subagent reliability concerns

1. **#22323** — *Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption* — 12 comments, 2 👍
   A `codebase_investigator` subagent reports `status: "success"` with `Termination Reason: "GOAL"` even when it hit its turn limit without completing any analysis, making failures invisible to the orchestrator. Critical for anyone relying on subagent orchestration.

2. **#21409** — *Generalist agent hangs* — 8 comments, 8 👍
   When Gemini CLI defers to the generalist agent, it hangs indefinitely — even for simple tasks like folder creation. Workaround: explicitly disabling sub-agents. Highly upvoted, indicating broad impact.

3. **#21968** — *Gemini does not use skills and sub-agents enough* — 6 comments
   Users report that custom skills (e.g., "gradle", "git") are ignored unless explicitly instructed. This undermines the value of skill registration and agent orchestration.

4. **#21983** — *Browser subagent fails in Wayland* — 4 comments, 1 👍
   The browser agent fails on Wayland sessions with a `Termination Reason: GOAL` but no actionable output. Affects Linux users on modern desktop environments.

5. **#25166** — *Shell command execution gets stuck with "Waiting input" after command completes* — 4 comments, 3 👍
   Simple CLI commands leave the agent stuck in an "Awaiting user input" state despite the command having finished. Frustrating for workflow-heavy users.

### 🟡 P2 — Quality and robustness

6. **#26522** — *Stop Auto Memory from retrying low-signal sessions indefinitely* — 5 comments
   Sessions the extraction agent dismisses as low-signal remain unprocessed and get surfaced repeatedly, causing infinite retry loops.

7. **#26525** — *Add deterministic redaction and reduce Auto Memory logging* — 4 comments
   Auto Memory transcripts containing secrets are sent to the extraction model before redaction occurs, raising privacy concerns.

8. **#24246** — *Gemini CLI encounters 400 error with > 128 tools* — 3 comments
   When the tool count exceeds ~400, the CLI returns a 400 error. Users expect smarter tool scoping rather than a hard failure.

9. **#22093** — *Subagents running without permission since v0.33.0* — 3 comments
   After updating to v0.33.0, subagents activate despite being explicitly disabled in configuration. A regression in agent control.

10. **#28714** — *UNKNOWN_UPSTREAM_ERROR when attaching any image; chat freezes* — 1 comment *(new, today)*
    Image attachment on Windows 11 triggers an `UNKNOWN_UPSTREAM_ERROR` and freezes the chat until a new session is started. Reported against `gemini-3.6-flash-high`.

---

## 4. Key PR Progress

### Merged / Closed

| PR | Description |
|----|-------------|
| [#28700](https://github.com/google-gemini/gemini-cli/pull/28700) | **Fix:** Prevents a new user message from fusing into an unanswered tool response after stream interruption or ESC. Resolves the "model finishes your sentence" bug. |
| [#28716](https://github.com/google-gemini/gemini-cli/pull/28716) | **Fix:** Reclassifies capacity exhaustion and insufficient credit errors as terminal errors, enabling immediate model fallback instead of infinite retries. |
| [#28710](https://github.com/google-gemini/gemini-cli/pull/28710) | **Patch release:** Cherry-picks to create v0.54.1. |
| [#28712](https://github.com/google-gemini/gemini-cli/pull/28712) | **Version bump** to v0.54.2 across the monorepo. |

### Open — Notable Work in Progress

| PR | Description |
|----|-------------|
| [#28718](https://github.com/google-gemini/gemini-cli/pull/28718) | **Fix:** Records usage metadata even when a stream is aborted, addressing a logging gap in the error path. |
| [#28673](https://github.com/google-gemini/gemini-cli/pull/28673) | **Feat:** Adds model configurations for Gemini 3.6 Flash and 3.5 Flash-Lite, including capabilities (`thinking`, `multimodalToolUse`), aliases, and Code tools. |
| [#28641](https://github.com/google-gemini/gemini-cli/pull/28641) | **Fix:** Prevents an infinite loop in ghost text wrapping at narrow terminal widths (CJK/emoji characters). Fixes #19985. |
| [#28679](https://github.com/google-gemini/gemini-cli/pull/28679) | **Fix:** Improves the Vertex AI 401 error message when users provide a standard API key instead of GCP credentials. |
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | **Fix:** Preserves `thoughtSignature` in `functionCall` parts to resolve a 400 error during parallel tool calls (regression from v0.53.0). |
| [#19638](https://github.com/google-gemini/gemini-cli/pull/19638) | **Fix:** Caps `SearchText` (grep/ripgrep) results to prevent context window overflow from broad queries, with improved overflow messaging. |
| [#28405](https://github.com/google-gemini/gemini-cli/pull/28405) | **Fix:** Prevents scroll position jumps when the user scrolls up during streaming content updates (fixes #5009). |
| [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | **Fix:** Forwards termination signals (SIGTERM, SIGHUP, etc.) to relaunched child processes so supervised kills no longer orphan children. |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | **Fix:** Stops leaking `gemini.diff.accept` and `onDidChangeWorkspaceFolders` disposables in the VSCode IDE companion (fixes #27790). |
| [#20536](https://github.com/google-gemini/gemini-cli/pull/20536) | **Feat:** Enables `/stats` output in non-interactive (headless) mode by wiring `SessionMetrics` to stdout. |

---

## 5. Feature Request Trends

- **Subagent autonomy & observability** — Users want subagents to be triggered contextually without explicit instructions (#21968), with visible trajectories via `/chat share` (#22598), and better recovery from failures (#22323, #21763).
- **Auto Memory reliability** — Requests to stop infinite retry loops on low-signal sessions (#26522), improve privacy via deterministic redaction (#26525), and surface/quarantine invalid patches (#26523).
- **AST-aware tooling** — Ongoing investigation into AST-based file reads, codebase mapping, and search for more precise tool calls and reduced token noise (#22745, #22746).
- **Browser agent hardening** — Automatic session takeover, lock recovery (#22232), Wayland support (#21983), and respecting `settings.json` overrides (#22267).
- **Terminal UX** — Flicker-free resize behavior (#21924), ghost text wrapping fixes (#28641), scroll position stability (#28405), and no more interactive prompt traps (#22465).
- **Destructive-action guardrails** — Suggestions to discourage `git reset --force` and similar risky operations when safer alternatives exist (#22672).

---

## 6. Developer Pain Points

1. **Subagent unreliability dominates** — The single biggest friction area. Generalist agent hangs (#21409), subagents ignoring configured settings (#22093), silent failures after MAX_TURNS (#22323), and skills not being invoked autonomously (#21968) all point to a mature but fragile agent orchestration layer.

2. **Auto Memory quality gaps** — Infinite retries on dismissed sessions (#26522), insufficient redaction before model exposure (#26525), and silently skipped invalid patches (#26523) make the memory system feel unpolished.

3. **Browser agent environment compatibility** — Wayland failures (#21983), config override ignore (#22267), and restrictive lock handling (#22232) suggest the browser agent needs broader environment support and resilience.

4. **Tool and context management** — The 400 error at high tool counts (#24246), context overflow from broad searches (#19638), and model creating temp scripts in random locations (#23571) indicate the agent struggles with large or complex codebases.

5. **Stream and session state bugs** — Interrupted streams causing message fusion (#28700), shell commands getting stuck in "awaiting input" (#25166), and image attachment crashes (#28714) point to ongoing fragility in the I/O and streaming layers.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# Copilot CLI Community Digest — 2026-08-07

## 1. Today's Highlights

GitHub Copilot CLI v1.0.79-6 was released, addressing a rare interactive UI diagnostic warning and a session-history loading failure that silently left timelines blank. The issue tracker saw a heavy influx of new reports today, spanning terminal rendering bugs, MCP process leaks, permission-mode regressions, and organization model catalogue gaps.

## 2. Releases

**v1.0.79-6** ([Release](https://github.com/github/copilot-cli/releases))
- Fixed a rare internal delay that incorrectly printed a diagnostic warning atop the interactive UI.
- Fixed a session-history load failure that was silently discarded, leaving the conversation transcript permanently blank for the remainder of the session.

## 3. Hot Issues

1. **#3392 — Bash tool breaks on NixOS (≥1.0.49)** [7 👍]
   The Bash tool fails with "Failed to start bash process" on NixOS. A long-standing issue with strong community signal; impacts users on non-standard distros.
   <https://github.com/github/copilot-cli/issues/4313>

2. **#4313 — Allow scrolling through current conversation history** [0 👍]
   Users cannot scroll conversation history with mouse wheel or PageUp/PageDown. A core UX gap for long sessions.
   <https://github.com/github/copilot-cli/issues/4313>

3. **#4251 — Resume of large session OOMs / spins one core for ~70 min in v1.0.74** [1 👍]
   Regression vs v1.0.73: resuming a large session causes ~3–4× memory increase and can OOM. Confirmed via A/B on same machine.
   <https://github.com/github/copilot-cli/issues/4251>

4. **#4311 — Transcript renders as blank lines until children or terminal width change** [0 👍]
   Interactive transcript blanks out (especially the bottom region) until a new message or terminal resize triggers repaint. `/resume` does not recover it.
   <https://github.com/github/copilot-cli/issues/4311>

5. **#4212 — Prompt box and highlighted menu items render invisible inside tmux** [0 👍]
   Dark-on-dark rendering makes the prompt and selected menu items unreadable in tmux; works fine in plain iTerm2.
   <https://github.com/github/copilot-cli/issues/4212>

6. **#4392 — Post-authentication MCP client rebuild leaves orphaned stdio MCP server processes** [0 👍]
   After GitHub auth completes, the CLI tears down and rebuilds the MCP client, but the first-generation stdio child processes are neither killed nor reaped, leaking resources.
   <https://github.com/github/copilot-cli/issues/4392>

7. **#4346 — MCP registry policy fetch returns 403 for Actions GITHUB_TOKEN** [1 👍]
   In GitHub Actions using the documented PAT-less setup, MCP registry policy fetch fails with 403, blocking all non-default MCP servers in CI.
   <https://github.com/github/copilot-cli/issues/4346>

8. **#4093 — web_search returns fabricated answers with no grounding** [0 👍]
   The built-in AI-powered web search tool returns confident, detailed, entirely fabricated answers when retrieval finds nothing relevant, instead of reporting "no results."
   <https://github.com/github/copilot-cli/issues/4093>

9. **#4388 / #4389 — Permissions stuck in auto mode after switching back to interactive** [0 👍]
   Two nearly identical reports: after changing permissions from auto back to interactive, the agent continues making code changes without requesting permission. Affected version 1.0.78.
   <https://github.com/github/copilot-cli/issues/4388> · <https://github.com/github/copilot-cli/issues/4389>

10. **#4390 — Organization-enabled models missing from catalogue** [0 👍]
    Anthropic models (Claude Sonnet 5, Opus 5, Kimi K3) explicitly enabled by a Copilot Business org are unavailable in the CLI; selecting them reports the model as disabled.
    <https://github.com/github/copilot-cli/issues/4390>

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

## 5. Feature Request Trends

- **Session navigation & history controls:** Scrolling through conversation history (#4313) and better worktree/branch naming conventions (#3914) are recurring themes, indicating users want finer-grained control over long-running sessions.
- **BYOM model switching without restart:** Issue #4376 requests in-session model switching for Bring-Your-Own-Model providers, currently requiring a CLI restart to change models.
- **`.agents` discovery beyond Git repos:** Issue #4204 asks to extend `.agents` convention (currently limited to skills) to instructions, agents, and hooks in any opened folder, not just Git repositories.
- **Transparent permission prompts:** Issue #4386 requests that permission prompts explain the specific rule or command characteristic that triggered approval, helping users evaluate safety decisions.
- **ACP token/context usage visibility:** Issue #4174 (now closed) highlighted the absence of token and cost telemetry in the ACP protocol, a recurring demand from enterprise users.

## 6. Developer Pain Points

- **Terminal rendering instability:** Multiple issues (#4311, #4212, #4391) report rendering bugs — blank transcripts, dark-on-dark text in tmux, and screen clears on Windows copy — suggesting the interactive UI layer is a fragile surface.
- **MCP process lifecycle management:** Orphaned stdio MCP servers (#4392) and registry 403 errors in CI (#4346) point to incomplete teardown logic and credential-handling gaps in the MCP stack.
- **Permission-mode state bugs:** The auto-mode persistence after switching back to interactive (#4388, #4389) indicates a state-management regression that directly impacts user trust in the tool.
- **Session resume regressions:** The v1.0.74 OOM regression (#4251) and model-prefix mismatch on resume (#4282) show that session persistence is a high-risk area where small changes cause disproportionate user impact.
- **Model routing & catalog inconsistency:** Rubber duck reviews reusing the primary model (#4380), GPT-5.6 Terra delegating to Opus unexpectedly (#4377), and org models missing from the catalogue (#4390) all reflect growing pains as the model routing system expands.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-07

## 1. Today's Highlights

Two PRs address a critical `StrReplaceFile` bug that corrupts non-UTF-8 bytes outside the edited region, with PR #2594 preserving raw bytes and PR #2595 taking the stricter approach of refusing to edit invalid files entirely. A long-standing feature request for a persistent Memory System (#1283) continues to gather community interest with 20 comments.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Feature Request: Memory System — Persistent context across sessions | A comprehensive memory system would let the CLI retain project patterns and user preferences, a capability many developers consider essential for multi-session workflows. | 20 comments; actively discussed since Feb 2026. |
| [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) | StrReplaceFile corrupts undecodable bytes outside the edited region | `StrReplaceFile` decodes entire files with `errors="replace"`, turning any invalid UTF-8 byte anywhere in the file into `U+FFFD` and permanently altering file length and content — a serious data-integrity bug. | Open; upstreamed two fix PRs on the same day. |
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) | [Bug] Plan mode file path not clickable in chat webview | Blocks developers from navigating between the plan view and source files in the VSCode extension, degrading the UX of plan-mode workflows. | 4 comments; 1 👍 |
| [#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) | CLI interface keeps shaking and re-rendering conversation from scratch | A visual instability issue on Linux that disrupts the editing experience and suggests a potential race condition or inefficient re-render cycle in the TUI. | 2 comments; 2 👍 |
| [#2147](https://github.com/MoonshotAI/kimi-cli/issues/2147) | Lazy-load MCP tool schemas into context | Injecting all MCP schemas at session start wastes tokens — sometimes thousands — before any tool is called, squeezing context budget for downstream tasks. | 1 comment; 1 👍; strong alignment with cost-aware development. |
| [#2593](https://github.com/MoonshotAI/kimi-cli/issues/2593) | Quick mode-switching (auto/yolo/manual) in VSCode panel | Developers want direct UI controls for mode switching and a remaining-usage indicator (e.g., "5 hours left") without navigating menus. | 0 comments; newly opened today. |
| [#621](https://github.com/MoonshotAI/kimi-cli/issues/621) | First WriteFile always errors with "Invalid path" | A recurrent path-resolution bug that forces users to fall back to absolute paths on the first write operation. Now closed. | 2 comments; resolved via workaround. |
| [#821](https://github.com/MoonshotAI/kimi-cli/issues/821) | [Security] Missing authorization checks + dependency updates | Identified 2 code vulnerabilities (IDOR/missing auth) and 5 dependency CVEs during a security review. Severity rated High (CVSS 7.0–8.0). Now closed. | 0 comments; addressed and closed. |

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594) | fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits | **OPEN** | Applies `old`/`new` as raw UTF-8 byte substrings on the buffer instead of full re-encode, preserving all non-UTF-8 bytes anywhere in the file. Direct fix for #2591. |
| [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) | fix(StrReplaceFile): refuse to edit files that are not valid UTF-8 | **OPEN** | Takes a stricter stance — refuses to process files containing invalid UTF-8 rather than risk silent corruption. Addresses #2591. |
| [#2255](https://github.com/MoonshotAI/kimi-cli/pull/2255) | feat(shell): support Shift+Enter for inserting newlines | **CLOSED** | Closes #2254. Adds `Shift+Enter` as an alternative newline shortcut alongside `Ctrl-J` and `Alt-Enter`, improving accessibility for users accustomed to that convention. |

## 5. Feature Request Trends

- **Persistent context & memory**: Issue #1283 is the most-discussed open feature request, calling for both automatic (AI-managed) and manual (user-defined) memory across sessions. This signals a community desire for the CLI to act as a continuing assistant rather than a stateless tool.
- **MCP efficiency**: Issue #2147 reflects growing use of MCP servers and a need to reduce token overhead — lazy-loading tool schemas is seen as a high-leverage optimization.
- **VSCode UX polish**: Issue #2593 (mode-switching shortcuts, usage display) and #2317 (unclickable plan-mode paths) point to the VSCode extension as a friction area where power-user ergonomics are lagging behind CLI parity.

## 6. Developer Pain Points

- **File corruption via `StrReplaceFile`**: The UTF-8 decode-with-replace bug (#2591) is the most critical pain point this cycle — it silently corrupts binary and mixed-encoding files, making it a trust issue for production use.
- **TUI instability**: Interface jitter and full conversation re-renders (#2474) disrupt workflow and suggest underlying rendering inefficiencies.
- **Token waste from MCP**: Loading all tool schemas at session start (#2147) consumes context budget that could otherwise be used for code generation, a direct cost concern for paid-plan users.
- **VSCode extension gaps**: Missing clickable paths in plan mode (#2317) and lack of quick mode-switching (#2593) indicate the extension lags behind the CLI in feature parity and polish.
- **Path-resolution quirks**: The `WriteFile` invalid-path error (#621) forces workarounds and reduces confidence in basic file operations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-07

---

## 1. Today's Highlights

A widespread **401 "Request blocked by upstream provider"** outage continues to affect OpenCode Go and Zen paid-subscription models, with over 100 combined comments across a dozen issues and no resolution yet. On the development side, the team shipped several TUI hardening fixes (stale permission prompts, session-scoped model selection, queued prompt handling) alongside a new bound tool-output feature and streaming robustness improvements for provider edge cases.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#38257](https://github.com/anomalyco/opencode/issues/38257) | Go: 401 "Request blocked by upstream provider" | Largest-concern bug of the cycle — all Go-subscription models fail at `/chat/completions` while `/v1/models` succeeds, pointing to an upstream auth/proxy failure. | 44 comments · 11 👍 |
| [#38218](https://github.com/anomalyco/opencode/issues/38218) | All Go subscription models return "Request blocked" | Confirms the outage is universal across Go models, not isolated to a single provider. | 31 comments · 13 👍 |
| [#38195](https://github.com/anomalyco/opencode/issues/38195) | 401 AuthError on all Go models | Reproduced on Desktop, Hermes, and multiple OSes — rules out client-side config as the cause. | 24 comments · 17 👍 |
| [#39827](https://github.com/anomalyco/opencode/issues/39827) | Zen models also broken | Shows the upstream block is not limited to Go — Zen-tier accounts are affected too. Direct provider keys still work. | 9 comments · 4 👍 |
| [#40234](https://github.com/anomalyco/opencode/issues/40234) | Subscription not activated after payment | Users receiving "No payment method" despite successful subscription and confirmation email. | 13 comments · 0 👍 |
| [#6152](https://github.com/anomalyco/opencode/issues/6152) | Session context-usage display | Long-requested TUI dialog showing context-window breakdown per session — high visibility request. | 22 comments · **129 👍** |
| [#1168](https://github.com/anomalyco/opencode/issues/1168) | Make links clickable (Ctrl+Click) | Basic usability gap in the TUI; frequently cited across editor/terminal audiences. | 11 comments · **119 👍** |
| [#39875](https://github.com/anomalyco/opencode/issues/39875) | Revert Go privacy wording / add telemetry transparency | Subscriber-led push for policy clarity after two commits quietly changed privacy language and attribution. | 6 comments · **44 👍** |
| [#32157](https://github.com/anomalyco/opencode/issues/32157) | Configurable mid-run prompt delivery (queue vs steer) | Architecture-level feature for controlling how user input interacts with an in-flight agent turn — critical for power users. | 5 comments · **67 👍** |
| [#31932](https://github.com/anomalyco/opencode/issues/31932) | Cross-project session list / picker | `/sessions` is currently project-scoped; multi-repo workflows have no way to jump between them. | 15 comments · 6 👍 |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| [#40929](https://github.com/anomalyco/opencode/pull/40929) | `feat(core): bound tool output` | Caps tool output by configured line/byte limits; retains full text in managed files with 7-day retention; honors `metadata.truncated` and surfaces the marker on `read`. |
| [#40971](https://github.com/anomalyco/opencode/pull/40971) | `feat(tui): expose prompt action commands` | Exposes stable prompt-action commands (`form.option.previous`, etc.) to TUI plugins for form and permission prompts. Closes #40953. |
| [#40922](https://github.com/anomalyco/opencode/pull/40922) | `feat(tui): queue prompts with Option+Enter` | Enter steers the active response; Option/Alt+Enter queues prompts. Queued work displays in a compact dock; steers remain inline. |
| [#40943](https://github.com/anomalyco/opencode/pull/40943) | `fix(ai): preserve Responses item IDs` | Preserves provider-hosted item IDs across reasoning, assistant, function-call, and output items; unifies OpenAI, Azure, and Open Responses clients around a single history strategy. |
| [#40969](https://github.com/anomalyco/opencode/pull/40969) | `fix(llm): treat empty tool-call identity as absent` | Fixes streaming tool-call failures on providers (e.g., Alibaba DashScope) that send `id: ""` instead of omitting the field on continuation deltas. |
| [#40965](https://github.com/anomalyco/opencode/pull/40965) | `fix(ai): support streams without finish reasons` | Honors `compatibility.requireFinishReason`; synthesizes an `unknown` terminal finish on clean EOF when the option is `false`; makes protocol halt finalization optionally effectful. |
| [#40954](https://github.com/anomalyco/opencode/pull/40954) | `fix(core): reload changed skill sources` | Hot-reloads local skill directories (global and project-external); additions, edits, removals, and symlink changes invalidate the catalog and publish `skill.updated` without a restart. |
| [#40956](https://github.com/anomalyco/opencode/pull/40956) | `fix(session): restart loop for queued input stranded by interrupt` | Fixes a bug where interrupting a turn (Esc or abort) silently dropped queued user input that had already been persisted to the queue. Closes #40955. |
| [#40967](https://github.com/anomalyco/opencode/pull/40967) | `feat(core): add workspace environment foundation` | Pure-addition module establishing `spawn` as the driver contract; `Files` derived from an Effect `ChildProcessSpawner`; enables future fast-path driver overrides. |
| [#40940](https://github.com/anomalyco/opencode/pull/40940) | `docs: explain projects and sessions` | Adds a "Projects and sessions" section to the getting-started guide, clarifying the relationship between the two concepts. Closes #40938. |

---

## 5. Feature Request Trends

- **Context & session awareness** — Users repeatedly ask for visibility into session state: context-window usage (#6152), cross-project session browsing (#31932), session search (#38973), and per-directory session stats (#37760).
- **Prompt delivery control** — The mid-run prompt queue-vs-steer model (#32157) and the Option+Enter queuing PR both point to strong demand for finer-grained control over how user input interacts with running agent turns.
- **TUI usability** — Clickable links (#1168), session-scoped model selection (now fixed in #40913), and tab-layout configuration (#40952) reflect ongoing pressure to bring the TUI up to modern terminal-editor expectations.
- **Integration & extensibility** — Linear todo integration (#38081), server API exposure in Code Mode (#35629), and skill hot-reloading (#40954) show the community pushing OpenCode toward a more open, plugin-friendly ecosystem.
- **Policy transparency** — Issue #39875 (44 👍) signals that subscribers want clear, stable privacy and telemetry language rather than silent policy shifts.

---

## 6. Developer Pain Points

1. **Upstream subscription API outages** — The dominant frustration. Dozens of users across Go and Zen tiers report identical `401 Request blocked by upstream provider` errors since ~2026-07-21. Free models are unaffected, and direct provider keys work, isolating the failure to OpenCode's paid-proxy layer. No fix has landed.

2. **Subscription activation bugs** — Even when payment succeeds, some users see residual "No payment method" or "please subscribe" prompts (#40234), suggesting a billing-state sync issue.

3. **TUI stability on Linux** — Occasional freezes on Debian 13 / XFCE / X11 (#35494) and garbled terminal output in PowerShell after exit (#11748) indicate lingering terminal-emulator compatibility gaps.

4. **Web interface lag** — Real-time conversation refresh is absent; users must manually reload to see new messages (#40502).

5. **Session regression after updates** — The `/sessions` command broke in v1.18.14, wiping chat history on session switch (#40759), and Windows 10 + Node.js 26.7 fails to start at all (#40957).

6. **Permission and prompt state bugs** — Stale permission prompts (#40960, now fixed) and stranded queued input after interrupts (#40956, now fixed) were high-friction edge cases that the latest PRs address.

7. **Metadata misconfiguration** — DeepSeek V4 Flash Free incorrectly reports a 200K context cap instead of its native 1M (#40958), limiting long-context workflows.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-07

## 1. Today's Highlights

Pi v0.84.0 shipped with a long-awaited **Fullscreen TUI mode**, bringing a sticky editor, independently scrollable transcript, and draggable scrollbars — immediately sparking both adoption and refinement requests. The team also closed several persistent bugs around TUI crashes on over-wide lines, mid-stream reset state corruption, and missing `reasoning_content` round-tripping for DeepSeek models. Community momentum is heavy on TUI UX polish, provider expandability (Ollama Cloud, Qwen Token Plan, Amazon Bedrock Mantle), and harness v2 progress.

## 2. Releases

**v0.84.0** — [Release notes](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/setting.md)
- New **Fullscreen TUI mode** with runtime toggle, sticky editor + footer, independently scrollable transcript, and draggable scrollbars.
- This release also introduced a few rough edges (see Issues #7720, #7736, #7737, #7721, #7733) that the team is already addressing in parallel PRs.

## 3. Hot Issues

| # | Title | Why It Matters | Community |
|---|-------|---------------|-----------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | How do you use Pi on Windows? | Windows is the dominant dev OS; fragmented setup paths make bug-fix prioritization difficult. | 22 comments, 1 👍 |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | Auto-compaction never triggers past 100% context | Agentic long-running turns can blow past the context window before compaction fires, risking API errors. | 12 comments, **15 👍** |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | New `PI_*` guideline over-encourages bash calls | A system-prompt nudge is biasing agents toward unnecessary env-inspection commands. | 10 comments, 5 👍 |
| [#7736](https://github.com/earendil-works/pi/issues/7736) | Uncaught exception when exceeding terminal width | v0.84.0 TUI crashes instead of gracefully truncating — directly regressed by the new fullscreen mode. | 3 comments, 1 👍 |
| [#7600](https://github.com/earendil-works/pi/issues/7600) | X11 connection leak fills server client table | A ~8-day leak of 182 X11 connections can crash the entire X session for other apps. | 3 comments |
| [#7703](https://github.com/earendil-works/pi/issues/7703) | `Agent.reset()` during active run leaves orphan transcript | Mid-stream reset clears state but doesn't abort the in-flight run, producing an assistant-only transcript. | 4 comments |
| [#7702](https://github.com/earendil-works/pi/issues/7702) | `reasoning_content` not passed back for DeepSeek via Zen | Multi-turn tool-call conversations with DeepSeek V4 Flash through the opencode zen gateway hit a 400 error. | 4 comments |
| [#7413](https://github.com/earendil-works/pi/issues/7413) | Compaction fails on GitHub Copilot GHE enterprise | `/compact` returns "unknown stamp" auth error on GHE.com accounts while normal chat works fine. | 7 comments, 1 👍 |
| [#7321](https://github.com/earendil-works/pi/issues/7321) | Multi-line paste broken without bracketed paste | Termux and similar terminals submit on the first `\r` instead of pasting the full block. | 3 comments, 1 👍 |
| [#7720](https://github.com/earendil-works/pi/issues/7720) | No way to disable select-to-copy in fullscreen TUI | Heavy terminal users accidentally lose clipboard content when selecting in the new mode. | 3 comments |

## 4. Key PR Progress

| # | Title | Type | Summary |
|---|-------|------|---------|
| [#7745](https://github.com/earendil-works/pi/pull/7745) | Preserve Gemini thought signatures in OpenAI completions | Fix | Captures `extra_content.google/vertex.thought_signature` from streamed tool calls and replays it on follow-up requests. Closes #6733. |
| [#7742](https://github.com/earendil-works/pi/pull/7742) | Ollama Cloud support | Feature | Adds `ollama-cloud` provider using `OLLAMA_API_KEY`; hybrid local+cloud flows preserved via `ollama launch pi`. |
| [#7733](https://github.com/earendil-works/pi/pull/7733) | Correct multi-click text selection | Fix | Double-click no longer includes trailing whitespace or incorrectly selects whitespace groups — fixes TUI selection regressions from v0.84.0. |
| [#7721](https://github.com/earendil-works/pi/pull/7721) | Avoid unwanted newlines when copying in fullscreen | Fix | Tracks which visual rows belong to the same logical line so pasted text no longer gains spurious newlines. |
| [#7717](https://github.com/earendil-works/pi/pull/7717) | Reject reset during active runs | Fix | `Agent.reset()` now rejects while a run is in-flight, preserving transcript integrity. Closes #7703. |
| [#7715](https://github.com/earendil-works/pi/pull/7715) | Allow blocked tool calls to terminate | Feature | Adds optional `terminate` hint to `beforeToolCall` results so extensions can signal the agent to end its turn. Closes #5998. |
| [#7710](https://github.com/earendil-works/pi/pull/7710) | Restore suspended harness operations | Feature | Implements R3 of the harness v2 plan — `AgentHarness.create` can now load a harness from an existing session with live state restored. |
| [#7686](https://github.com/earendil-works/pi/pull/7686) | Configurable Harness factory | Feature | Internal coding-agent factory for constructing the experimental Harness, preserving caller-provided tools, activation, and prompt policy. |
| [#7659](https://github.com/earendil-works/pi/pull/7659) | Qwen Token Plan Individual provider | Feature | Adds `qwen-token-plan-individual` provider using the international Token Plan endpoint and `QWEN_TOKEN_PLAN_API_KEY`. |
| [#7681](https://github.com/earendil-works/pi/pull/7681) | `AGENTS.override.md` per-directory context override | Feature | Highest-priority context file per directory; when present, Pi loads only the override instead of layering both files. Closes #7642. |

## 5. Feature Request Trends

- **TUI/UX polish** — The fullscreen mode launch generated a cluster of requests: disable select-to-copy (#7720), half-page scroll (#7735), better multi-click selection (#7733, #7725), and graceful truncation instead of crashes (#7737). The community clearly wants the new mode to match the maturity of the classic TUI.
- **Provider expandability** — Three parallel PRs (Ollama Cloud #7742, Qwen Token Plan #7659, Amazon Bedrock Mantle #6216) show sustained demand for new provider integrations, especially for cost-sensitive or region-specific endpoints.
- **Agent lifecycle control** — Requests around `terminate` hints for blocked tools (#7715 / #5998), reset safety (#7717 / #7703), and session reload (#7699) indicate users want finer-grained programmatic control over agent runs, especially in extension authoring scenarios.
- **Reasoning/thought signature round-tripping** — Gemini (#7745 / #6733) and DeepSeek (#7702 / #7704) thinking-model signatures are a recurring theme; users want Pi to faithfully preserve model-specific metadata across provider boundaries.
- **Harness v2** — PRs #7710 and #7686 signal active investment in the next-generation agent harness, with community features like suspended-operation restore and configurable factories.

## 6. Developer Pain Points

1. **Context compaction is unreliable for long agentic turns** — Issue #6879 (15 👍) highlights that compaction only fires when the API rejects an over-limit request, not proactively. This is a correctness gap for multi-hour agent runs.
2. **Windows fragmentation** — Issue #7547 underscores that Pi can be run on Windows through too many paths (native, WSL, Docker, etc.), making it hard to prioritize docs and bug fixes. Windows users are asking for a clear, supported story.
3. **TUI regressions in v0.84.0** — Multiple crash and UX issues (#7736, #7737, #7721, #7720, #7733) all trace back to the fullscreen mode launch. Developers want stability parity before more features land on top.
4. **X11 / resource leaks** — Issue #7600 (182 leaked X11 connections over 8 days) reflects a broader concern about long-running Pi processes leaking OS resources, which can cascade into system-wide failures.
5. **System prompt drift** — Issue #7128 shows that even small guideline additions to the default system prompt can meaningfully shift agent behavior (excess bash calls), and users want more control or at least awareness of these changes.
6. **Cross-provider thinking-model metadata loss** — DeepSeek (#7702) and Gemini (#6733) reasoning-content/thought-signature round-tripping failures suggest the OpenAI-compat layer is a bottleneck for emerging thinking-model ecosystems.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-07

## 1. Today's Highlights

Qwen Code v0.21.7 shipped with two major improvements: the 50-turn Goal limit has been removed, enabling long-running tasks to resume across boundaries, and inline terminal image rendering is now enabled for supported terminals (KiTTY, iTerm2, WezTerm, Ghostty, Warp). A companion nightly build v0.21.7-nightly also landed with a CI autofix-takeover admission fix.

## 2. Releases

- **v0.21.7** — Removed the 50-turn limit on Goals ([#8421](https://github.com/QwenLM/qwen-code/pull/8421)); enabled inline terminal image rendering from model outputs in the interactive CLI for Kitty/iTerm2/WezTerm/Ghostty/Warp; CI now runs Windows merge-queue tests on ECS and prepares evidence-image tooling for GitHub reviews.
- **v0.21.7-nightly.20260807.fca8f3c1f** — Surfaces blocked autofix takeover admission in CI ([#8410](https://github.com/QwenLM/qwen-code/pull/8410)).
- **live-host-v0.1.0 / live-host-latest** — Stable installer feed for Qwen Live Host.

## 3. Hot Issues

1. **#3203 — OAuth Free Tier Policy Adjustment** (150 comments, CLOSED) — Community mobilized around proposed reductions (1,000 → 100 requests/day) and eventual free-tier sunset. High engagement signals strong user dependence on the free tier.
2. **#6565 — Internal Error connecting to Qwen Coder** (10 comments, CLOSED) — Authentication-related crash reported in both English and Japanese; reflects ongoing stability concerns around the OAuth login flow.
3. **#8316 — Prompt not restored to input box when canceling (Ctrl+C)** (8 comments) — UX regression: users lose their prompt after cancellation and must retype, directly impacting iterative workflows.
4. **#5199 — Minified React error #185** (7 comments) — Production error surfaces on Windows installations; unresolved and likely blocks users on CherryStudio bundles.
5. **#8557 — Terminal shrinking reprints transcript blocks on macOS** (6 comments) — Duplicate output in scrollback when narrowing the terminal; affects power users on Warp.
6. **#8615 — Desktop 0.1.0 Windows startup crash: EISDIR lstat 'C:'** (5 comments) — Critical P1 for Windows Desktop users; the bundled runtime fails to open any workspace folder.
7. **#8622 — 0.21.6 regression: PreToolUse/PostToolUse hooks never dispatched** (5 comments) — P1 regression breaking custom hook pipelines; only `UserPromptSubmit` and `Stop` fire, making this a high-impact bug for extension authors.
8. **#8582 — Read-only shell classifier auto-approves hidden command substitution** (5 comments) — Security vulnerability where line-continuation and `${var@P}` patterns bypass the read-only gate; actively being patched in PR #8590.
9. **#8592 — Desktop UI language switching has no effect** (5 comments, CLOSED) — Selecting a display language in Settings produces no change; blocks non-English Desktop users.
10. **#8643 — DO_NOT_TRUST loses to ancestor TRUST_FOLDER for .env loading** (3 comments) — Credential security issue: an untrusted workspace can inject the `qwen serve` bearer token via ancestor `.env` files.

## 4. Key PR Progress

1. **#8590 — Close read-only classifier bypasses** (fixes #8582) — Hardens the shell classifier against line-continuation and `${var@P}` substitution tricks; directly addresses a security advisory.
2. **#7897 — Skip terminal redraw optimizer on WSL/ConPTY** (fixes #7634) — Resolves the streaming-text duplication bug on WSL + Windows Terminal by disabling the batched cursor-up optimization that ConPTY mishandles.
3. **#8290 — Fail closed on zero inode file cache** — Prevents unrelated files from being conflated when `fs.Stats.ino` returns 0, hardening the file-read cache on platforms with sparse inode support.
4. **#8645 — Confirm read-only git commands when repo config executes programs** (fixes #8575) — Extends the read-only gate to cover git sub-commands that invoke external programs via local repo config, closing another auto-approval bypass.
5. **#8418 — Share compression caches with OpenAI providers** — Extends prefix-preserving compression cache sharing beyond DashScope to all OpenAI-compatible endpoints, reducing redundant token usage.
6. **#8425 — Share compression cache with Gemini and Vertex AI** — Enables same-model compression request reuse on Gemini/Vertex via Google GenAI's implicit caching, with cold-path fallback.
7. **#8390 — Review bundle age warning** — Reviews now report when the bundle they're driving was not built from the current working tree, improving traceability for review runs.
8. **#8320 — Cooperative pause and resume for workflows** — Adds whole-run pause/resume semantics to Dynamic Workflows, allowing in-flight dispatches to converge before holding results at a gate.
9. **#8399 — Recognize OpenAI SDK APIUserAbortError as abort** — Fixes spurious error noise on user cancellation by properly detecting the OpenAI SDK's abort error class.
10. **#8631 — Run ACP agent fan-outs concurrently past the tool-call cap** — Aligns the daemon's tool-batch execution with the core scheduler's concurrency semantics, fixing serialized fan-outs that previously killed long-running `/review` runs.

## 5. Feature Request Trends

- **Long-running goal support** — The removal of the 50-turn limit (#8421) reflects sustained community demand for unbounded task execution; users want Goals that can resume across session boundaries.
- **Multimodal input** — Issue #8197 tracks the Omni multimodal integration roadmap; the community is actively contributing to file-recognition and metadata handling for image/audio inputs.
- **Voice frontend ecosystem** — Proposal #8629 seeks to list `qwen-audio-agent` in the README, signaling demand for a full-duplex voice layer over ACP.
- **Compression cache sharing** — PRs #8418 and #8425 show community-driven push to extend cost-saving compression across OpenAI, Gemini, and Vertex AI providers.
- **Localization** — Issue #8551 requests Korean language support in the docs README bar, continuing a pattern of multilingual localization requests.

## 6. Developer Pain Points

- **Windows Desktop stability** — Startup crash on workspace open (#8615), VS Code extension overlay blocking content (#8617), and Chinese input/Pinyin display issues (#8625, #7634) form a cluster of platform-specific friction for Windows users.
- **Hook system regression** — The 0.21.6 hook dispatch break (#8622) disrupts extension authors who depend on `PreToolUse`/`PostToolUse`/`PreCompact`/`SessionStart` hooks; the tight regression window makes this especially painful.
- **Security classifier bypasses** — Two separate read-only classifier issues (#8582, #8643) reveal that the permission-gating logic has exploitable gaps, eroding trust in the sandbox model.
- **Terminal rendering artifacts** — Duplicate character rendering on WSL/ConPTY (#7634), transcript reprints on terminal resize (#8557), and tmux flickering over SSH (#8562) indicate that the terminal rendering pipeline remains a fragile surface across environments.
- **Slash-command history noise** — Transient slash commands pollute the TUI history (#8365), prompting a feature request to filter them out silently.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-07

---

## 1. Today's Highlights

The v0.9.4 integration release train (#5135) has landed with 77 commits ahead of main, closing a batch of workflow-runtime, TUI UX, and build-infra fixes. The long-running command-boundary refactor EPIC (#2870) finally closed after Layer 5.3 lands in PR #5255, consolidating palette, completion, and discovery filtering. A new wave of Runtime API endpoints (#5129–#5133) exposes memory, goal-loop state, verifier receipts, and MCP/skill lifecycle controls to managed clients.

---

## 2. Releases

No new releases in the last 24 hours. The v0.9.4 train (#5135) was merged on 2026-08-06 and supersedes the previous candidate branch.

---

## 3. Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | Only one API key can be saved across providers | OPEN | Multi-provider users (DeepSeek + GLM, etc.) must overwrite keys each session — a real friction point for power users. |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | Unknown model IDs silently fall back to 128K context | OPEN | A 1M-window model can silently compact at 128K with no warning — quality-of-service bug with data-loss potential. |
| [#5253](https://github.com/Hmbown/CodeWhale/issues/5253) | Nested subagent `max_depth` can widen root session budget | OPEN | Recursion budget is a safety guarantee; a descendant spawning a nested agent can bypass the ceiling, risking unbounded recursion. |
| [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | Intermittent Anthropic API 400 on `openmodel` provider | CLOSED | Users of the Anthropic-compatible `openmodel` proxy report sporadic `'type' must be in [...]` errors with no deterministic trigger. |
| [#4828](https://github.com/Hmbown/CodeWhale/issues/4828) | macOS underwater shell breaks `open`/`osascript`/`launchctl` | CLOSED | The v0.9.0 terminal-shell upgrade regressed macOS users; `exec_shell` commands fail with exit code -54. Downgrade to v0.8.67 is the workaround. |
| [#5223](https://github.com/Hmbown/CodeWhale/issues/5223) | Mouse wheel scrolls input history instead of content | CLOSED | When long responses overflow the screen, scroll input is hijacked by the composer history buffer — fixed in PR #5234. |
| [#4681](https://github.com/Hmbown/CodeWhale/issues/4681) | `<turn_meta>` blocks visible on session reopen | CLOSED | Metadata blocks that are hidden during an active session reappear after reload, cluttering the transcript. |
| [#5178](https://github.com/Hmbown/CodeWhale/issues/5178) | Admin digest POST returns `ok:true` but posts nothing | CLOSED | The digest endpoint gives a false success response, leaving drafts stuck in Pending — a reliability bug in the web admin panel. |
| [#5046](https://github.com/Hmbown/CodeWhale/issues/5046) | Fleet agents ignore configured roles and clone the model | CLOSED | Named fleet agents were supposed to bind strictly to roles, but the model was re-cloning the operator's model five times instead. |
| [#5035](https://github.com/Hmbown/CodeWhale/issues/5035) | Workflow authoring failures hidden by parallel fan-out | CLOSED | A dogfood run showed that parallel-slot failures were silently treated as `null`, masking orchestration errors. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#5255](https://github.com/Hmbown/CodeWhale/pull/5255) | Layer 5.3: Palette, completion, and discovery filtering | OPEN | Final layer of the command-boundary refactor; verifies user-command integration in the palette and slash-completion surfaces. |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | Fix: keep alternate scroll off while mouse capture active | CLOSED | Resolves the mouse-wheel hijacking bug (#5223) by preventing DECSE alternate-scroll mode from arming during capture. |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | Resume interrupted subagents from checkpoint via followup | CLOSED | `agents/followup` on an `interrupted_continuable` child now resumes from its checkpoint instead of queuing a dead-letter. |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | Surface real wait elapsed time in tool content | CLOSED | Bash `wait`/delta results now include visible `duration_ms` in tool content so the model can distinguish fresh from stale waits. |
| [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) | MCP Registry discovery with Registry-first tool selection | CLOSED | Before falling back to `exec_shell` or custom code, the model now consults the public MCP Registry for matching zero-env stdio servers. |
| [#5077](https://github.com/Hmbown/CodeWhale/pull/5077) | Progressively disclose fresh context | CLOSED | Caps ambient skills block at 2,400 chars while keeping all skills discoverable; moves session-scoped skills to lazy loading. |
| [#5252](https://github.com/Hmbown/CodeWhale/pull/5252) | Isolate subagent runtime state roots | OPEN | Adds `EngineConfig::subagent_state_root` so embedding hosts can give delegated agents session-scoped state without leaking. |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | Runtime API: bounded memory endpoints | OPEN | New `/v1/memory` routes let managed clients inspect active memory, scope, and apply lifecycle controls. |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | Runtime API: goal-loop state and completion controls | OPEN | Exposes `GET /v1/threads/{id}/goal` and lifecycle transitions so clients can drive goal execution via the runtime boundary. |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | Runtime API: skill lifecycle endpoints | OPEN | Adds install, update, uninstall, trust, and audit routes for the full skill lifecycle previously only available in the TUI. |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | Expose file/search/git/patch/shell tools over ACP | CLOSED | `session/prompt` in the ACP server now executes tool calls, enabling editors like Zed to drive a real coding agent. |
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | v0.9.4 release train | CLOSED | 77 commits including all 18 train commits on top of the 2026-08-01 source candidate; the definitive v0.9.4 merge. |

---

## 5. Feature Request Trends

- **Multi-provider key management** — Users want independent API keys per provider rather than a single global key that gets overwritten (#5250).
- **Transparent model-capability fallbacks** — Silent degradation to legacy context windows or unrecognised model IDs should surface an explicit warning (#5244).
- **Runtime API surface expansion** — A cluster of five open PRs (#5129–#5133) shows strong demand for programmatic lifecycle control of memory, goals, skills, MCP servers, and verifier receipts.
- **Subagent isolation & checkpointing** — Embedders need per-session state roots (#5252) and the ability to resume interrupted children from checkpoints (#5242).
- **MCP Registry as primary tool source** — Registry-first discovery (#5238) signals a community direction toward zero-env, pre-vetted tool selection.

---

## 6. Developer Pain Points

- **Build-infra friction** — Every local `git commit` forces a full rebuild of `codewhale-tui` (682K lines, 620 files) because the embedded short SHA is watched as a build dependency (#5245). The team responded by splitting the shipping LTO profile from the local release gate (#5246).
- **macOS terminal regression** — The v0.9.0 "underwater" shell broke fundamental macOS commands (`open`, `osascript`, `launchctl`) with exit code -54, forcing a downgrade workaround (#4828).
- **Mouse-input routing bugs** — Scroll events leaking into the composer history buffer instead of the transcript (#5223 / #5234) and alternate-scroll mode conflicting with mouse capture are recurring TUI UX pain points.
- **Anthropic-compatible proxy instability** — The `openmodel` provider intermittently returns 400 errors on the `'type'` field with no deterministic trigger (#4978), creating unreliable user experiences.
- **Workflow failure masking** — Parallel fan-out can silently convert task failures into `null` results, making orchestration bugs hard to detect (#5035, #5046).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*