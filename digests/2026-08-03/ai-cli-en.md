# AI CLI Tools Community Digest 2026-08-03

> Generated: 2026-08-03 01:51 UTC | Tools covered: 9

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
**Date: 2026-08-03**

---

## 1. Ecosystem Overview

The AI CLI tools landscape in mid-2026 is marked by rapid maturation from single-turn REPLs toward persistent, multi-agent orchestration platforms. Cross-platform parity remains a persistent gap, particularly on Windows and Linux, while session reliability and state management dominate community frustration. Seven major tools are actively shipping nightly builds, but only Gemini CLI and Qwen Code released tonight, suggesting a broader stabilization cycle. Developer communities are converging on similar architectural ambitions—remote session control, cross-session memory, and granular plugin/MCP trust models—indicating the ecosystem is reaching feature parity on core capabilities while diverging on execution strategy.

---

## 2. Activity Comparison

| Tool | Hot Issues | Open PRs | Nightly/Release Today |
|------|-----------|----------|----------------------|
| **Claude Code** | 10 | 3 | None |
| **OpenAI Codex** | 10 | 5 (2 open) | None |
| **Gemini CLI** | 10 | 11 (9 open) | v0.55.0-nightly |
| **GitHub Copilot CLI** | 10 | 0 | None |
| **Kimi Code CLI** | 4 | 1 (closed) | None |
| **OpenCode** | 10 | 11 (10 open) | None |
| **Pi** | 10 | 10 (6 open) | None |
| **Qwen Code** | 9 | 9 (7 open) | v0.21.3-nightly |
| **DeepSeek TUI** | 10 | 7 (all WIP) | None |

**Key observation:** Gemini CLI and OpenCode show the highest PR throughput tonight (11 each), while GitHub Copilot CLI had zero PR updates—a signal of potential triage backlog or reduced contributor velocity.

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Community Need |
|-----------|---------------|----------------|
| **Cross-session / cross-device memory** | Kimi Code (#1283), Claude Code Cowork (#40175), OpenCode memory megathread, Codex session retention (#6015) | Persistent context across sessions; project state survives tool restarts and device switches |
| **Remote session control** | Kimi Code (#1282), Codex (#27565) | Mobile/tablet oversight of long-running CLI sessions without SSH |
| **Per-request model switching** | OpenCode (#40188), Pi (model catalog), Qwen Code (daemon providers) | Programmatic model selection per turn without global config churn |
| **Multi-agent orchestration reliability** | Claude Code (#83421), Gemini (#22323, #21409), OpenCode (MCP trust), Qwen Code (forks) | Fault-tolerant subagent spawning, graceful timeout handling, permission propagation |
| **MCP / plugin trust & lifecycle** | OpenCode (#40125), Gemini (ACP 1.0.0), DeepSeek TUI (#5130), Qwen Code (#7306) | Per-server trust granularity, skill install/update/audit APIs, bounded discovery |
| **Session state persistence** | Copilot CLI (#4334, #4329, #4336), Claude Code (#40175), OpenCode (#20695), Pi (session storage refactor) | Data-loss bugs on session switch, resume, and backgrounding erode user trust across all tools |
| **Cross-platform correctness** | Claude Code (CRLF #2805, BSOD #32870), Copilot CLI (WSL2 keybindings #4328, symlinks #2286), Codex (Linux desktop #11023) | Windows/WSL2 and Linux platform gaps are a universal pain class |
| **Observability & streaming** | Kimi Code (Monitor tool #2471), OpenCode (SQLite WAL #37495), Qwen Code (tool execution telemetry #8180), Pi (cycle timing #7496) | Real-time visibility into agent execution, token spend, and resource consumption |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|------------|-------------|-----------|-------------------|--------------|---------|-----|----------|-------------|
| **Primary stance** | Desktop-first, agent-hub | IDE-integrated, OpenAI-native | CLI-first, Google ecosystem | GitHub-native, enterprise | Single-user, Moonshot-focused | Plugin-rich, extensible | Provider-agnostic, terminal-native | Daemon + TUI, China-market | Fleet-config, multi-provider |
| **Agent model** | Hierarchical, Cowork sessions | Background polling + desktop app | A2A protocol, subagents | ACP mode, task delegation | Swarm parallel mode | MCP-first, per-server trust | Session lanes, compaction | Workspace runtime ownership | Fleet profiles, goal loops |
| **Plugin/MCP** | Git-marketplace, hooks | Stdio MCP servers | ACP 1.0.0, skill lifecycle | Limited marketplace | No formal plugin system | Deep plugin API, open-source | Extension API | MCP with bounded config | MCP server management (WIP) |
| **Session model** | Desktop persistence, URL embedding | Long-lived, history-heavy | Auto-Memory, compacting | Resume-aware, but buggy | Device-agnostic (requested) | SQLite-backed, WAL issues | In-memory experimental | Daemon + local mirror | Auto-resume, sidebar (requested) |
| **Target user** | Power users, enterprise teams | OpenAI subscribers, VS Code users | Google Workspace, Android users | GitHub orgs, Copilot subscribers | Chinese market, solo devs | Self-hosted, privacy-conscious | Multi-provider researchers | Qwen model users, China | DeepSeek API users, fleet ops |

---

## 5. Community Momentum & Maturity

**High engagement, mature communities:**
- **Claude Code** — 44 upvotes on session URL opt-in (#66504), strong plugin ecosystem debate. The CRLF issue (#2805) being the most-voted open issue signals long-tail community investment.
- **OpenAI Codex** — Linux desktop request (#11023) at 906 👍 is the single highest upvote count across all tools today, indicating massive unmet demand.
- **OpenCode** — Memory megathread (#20695) with 121 comments and 94 👍 is the deepest discussion thread of the day; the community is actively contributing heap snapshots, signaling a technically engaged user base.

**Rapid iteration, active contributor base:**
- **Gemini CLI** — 11 PRs in 24h including major dependency bumps (genai v2.13.0, A2A SDK 1.0.0). The nightly cadence and ACP stabilization suggest a team moving fast on infrastructure.
- **OpenCode** — 10 open PRs spanning hooks, trust config, Unicode normalization, and persistence writes. Broad contributor involvement.
- **Pi** — 6 open PRs focused on session storage re-architecture and experimental in-memory backends. The team is actively refactoring core data models.
- **Qwen Code** — 9 PRs including workspace runtime ownership and fork-from-any-message. Feature velocity is high with a clear architectural direction.

**Stalled or narrow communities:**
- **GitHub Copilot CLI** — Zero PRs today with 7 bugs filed in 48 hours, including a regression in `view` tool (#4202). The session-state bug cluster suggests a stability patch is overdue.
- **Kimi Code CLI** — Only 4 hot issues and 1 PR (closed). The community is smaller but the pain points (swarm reliability #2578, no cross-session memory) point to architectural gaps that need foundational work.
- **DeepSeek TUI** — All 7 PRs are WIP with no merged releases. The v0.9.4 release-blocker focus on fleet config suggests the team is still hardening core multi-agent semantics.

---

## 6. Trend Signals

| Signal | Evidence | Implication |
|--------|----------|-------------|
| **Session state is the #1 trust breaker** | 6+ tools report data-loss bugs on session switch/resume/backgrounding today | Tools that solve persistent, crash-resistant session state will gain competitive advantage. This is the "memory management" problem of AI CLIs. |
| **Multi-agent orchestration is the new battleground** | 5 tools have active subagent/fleet/swarm work; Gemini and DeepSeek both shipping lifecycle APIs | The differentiator will shift from single-agent quality to orchestration reliability—timeout handling, partial-work recovery, and inter-agent communication. |
| **Compaction / context management is unsolved** | Pi (#6879, #7020), OpenCode (WAL bloat #37495), Qwen (daemon resource bounding #8051) | Long-session survival is a hard systems problem. Tools with robust compaction will unlock multi-hour agentic workflows; those without will hit API limits. |
| **Provider-agnosticism is table stakes** | Pi's experimental in-memory backends, OpenCode's per-server trust, Gemini's A2A 1.0.0, Qwen's multi-provider daemon | Lock-in risk is pushing tools toward abstraction layers. The winners will be those that make provider switching frictionless. |
| **Cross-platform parity is still a gap, not a goal** | CRLF on Linux, BSOD on Windows, no Linux desktop for Codex, WSL2 keybinding bugs, ARM64 feature gaps | Every major tool has platform-specific correctness issues. This is a persistent market opening for tools that invest in cross-platform testing discipline. |
| **Observability is the next feature frontier** | Cycle timing (Pi), tool execution telemetry (Qwen), Monitor tool (Kimi), memory inspection (DeepSeek) | As agents run longer and touch more systems, developers need visibility into token spend, execution paths, and resource consumption. This is underserved across the board. |
| **Nightly cadence signals confidence** | Gemini and Qwen both shipping nightly builds with substantive changes | Tools with nightly release trains are iterating faster and likely have stronger CI/CD pipelines. This correlates with higher community PR participation. |

**Bottom line for developers:** The ecosystem is transitioning from "can the agent write code?" to "can the agent *reliably* run for hours across sessions, devices, and agents?" The tools solving session persistence, compaction, and multi-agent fault tolerance will define the next wave. GitHub Copilot CLI's zero-PR day amid a regression cluster and Kimi Code's architectural gaps are early warning signs; OpenCode's memory megathread and Codex's Linux demand are signals of unmet scale.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-03 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| # | Skill / PR | Description | Discussion Highlights | Status |
|---|---|---|---|---|
| 1 | [PR #1298](https://github.com/anthropics/skills/pull/1298) · `skill-creator: run_eval.py fix` | Fixes a critical bug where `run_eval.py` (and downstream `run_loop.py` / `improve_description.py`) reported **recall = 0%** for every description, making the description-optimization loop optimize against noise. Also fixes Windows stream-reading, trigger detection, and parallel-worker issues. | 10+ independent reproductions of the 0% recall bug; this is the most-discussed PR in the repo and blocks the entire skill-creation improvement pipeline. | **Open** |
| 2 | [PR #514](https://github.com/anthropics/skills/pull/514) · `document-typography` | Prevents orphan word-wrap, widow paragraphs, and numbering misalignment in AI-generated documents — addressing a quality gap users report but rarely explicitly request. | Strong interest from professionals generating formatted documents; fills a visible-quality niche with low-friction trigger keywords. | **Open** |
| 3 | [PR #723](https://github.com/anthropics/skills/pull/723) · `testing-patterns` | Covers the full testing stack: Testing Trophy philosophy, AAA unit tests, React Component Testing (Testing Library), and test naming/edge-case conventions. | Appeals to the largest developer segment; combines pedagogical grounding with actionable Claude instructions. | **Open** |
| 4 | [PR #1367](https://github.com/anthropics/skills/pull/1367) · `self-audit` | A universal pre-delivery audit skill: mechanical file-verification followed by a four-dimension reasoning quality gate. Works across any project/stack/model. | Bridges the gap between "agent delivers output" and "agent verifies output" — closely aligned with the Reasoning Quality Gate proposal in Issue #1385. | **Open** |
| 5 | [PR #83](https://github.com/anthropics/skills/pull/83) · `skill-quality-analyzer` + `skill-security-analyzer` | Two meta-skills that evaluate skills on five dimensions: structure, documentation, examples, triggers, and security posture. | Unique "meta" category — the community wants tools to evaluate other tools, signaling maturity in skill engineering practices. | **Open** |
| 6 | [PR #525](https://github.com/anthropics/skills/pull/525) · `pyxel` | Retro/pixel-art game development skill wrapping the [pyxel-mcp](https://github.com/kitao/pyxel-mcp) server, covering the write → run_and_capture → inspect → iterate loop. | Niche but enthusiastic; demonstrates the skill model extending into creative-game domains via MCP servers. | **Open** |
| 7 | [PR #1479](https://github.com/anthropics/skills/pull/1479) · `plan-file-hygiene` | Addresses [Issue #1417](https://github.com/anthropics/skills/issues/1417): planning artifacts (drafts, scratch files, intermediate outputs) accumulate with no lifecycle management. | Directly targets a pain point identified by community members; frames the problem as a lifecycle gap. | **Open** |
| 8 | [PR #1302](https://github.com/anthropics/skills/pull/1302) · `color-expert` | Self-contained color-knowledge skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), and "what to use when" decision tables. | Cross-cutting utility for design-heavy workflows; high specificity makes it reliably triggerable. | **Open** |

---

## 2. Community Demand Trends

Analysis of the top Issues reveals four dominant demand signals:

1. **Skill creation tooling reliability** — The #556 / #1298 cluster (0% recall, trigger detection failures, Windows bugs) is the single most-upvoted concern (7 👍 on the issue, multiple related PRs). The community is heavily invested in making `skill-creator` tools *actually work* before new skills can iterate forward.

2. **Organization-level skill distribution** — Issue #228 (16 comments, 8 👍) requests native org-wide skill sharing in Claude.ai, eliminating the current manual download/share/upload friction. This signals a move from individual to team/enterprise adoption.

3. **Output quality & governance** — Issues #1385 (Reasoning Quality Gate Pipeline), #412 (Agent Governance), and the #1367 self-audit PR all converge on one demand: **pre-delivery verification**. The community wants Claude to check its own work before handing it to the user.

4. **Multi-format document skills** — Document-typography (#514), ODT (#486), and DOCX fixes (#541) show sustained demand for professional document-quality assurance beyond basic text generation.

---

## 3. High-Potential Pending Skills

These active PRs are not yet merged but address high-signal community needs — strong candidates for near-term inclusion:

| PR | Skill | Why It's High-Potential |
|---|---|---|
| [PR #1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval fix | Blocks the entire skill-optimization pipeline; merging unblocks all downstream description-improvement work. |
| [PR #514](https://github.com/anthropics/skills/pull/514) | `document-typography` | First skill targeting typographic quality — a widely felt but rarely addressed pain point. |
| [PR #1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | Directly implements the Reasoning Quality Gate vision; universal applicability across all use cases. |
| [PR #723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Broad developer audience; complements the existing code-generation skills with a testing vertical. |
| [PR #1479](https://github.com/anthropics/skills/pull/1479) | `plan-file-hygiene` | Solves a documented lifecycle gap (#1417) that degrades long-running agent sessions. |
| [PR #1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | High-specificity, reliable-trigger skill that fills a gap in design-oriented workflows. |
| [PR #525](https://github.com/anthropics/skills/pull/525) | `pyxel` | Demonstrates the MCP-server skill pattern; opens the creative/entertainment vertical. |

---

## 4. Skills Ecosystem Insight

> The community's most concentrated demand is **self-improving skill infrastructure**: fixing the broken evaluation loop in `skill-creator` (#1298 / #556) so that skills can be reliably tested, optimized, and governed — a prerequisite that everything else depends on.

---



# Claude Code Community Digest — 2026-08-03

## 1. Today's Highlights

No releases landed in the last 24 hours. The community is sharply focused on a persistent **Windows CRLF issue on Linux** (#2805, 33 👍) and a **regression causing WebSearch and Opus 5 to fail** at high effort levels (#83364). A notable pattern is emerging around **effort-level compatibility bugs** on Opus 5, alongside ongoing frustration with **plugin update staleness** and **desktop session reliability**.

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

**[#2805] Windows line endings on Linux** · 44 comments · 33 👍
> `anthropics/claude-code/issues/2805`

The longest-running and most-voted open issue this cycle. Claude Code on Ubuntu persists in writing CRLF files despite `CLAUDE.md` instructions to the contrary, breaking shell script execution. Community reaction is frustrated but persistent — a fundamental cross-platform correctness bug.

**[#32870] BSOD via Wof.sys during directory listing on Windows** · 38 comments · 1 👍
> `anthropics/claude-code/issues/32870`

A severe kernel-level crash triggered by `claude.exe` calling `NtQueryDirectoryFileEx` against the Windows Overlay File System. Confirmed reproducible; likely requires coordination with Microsoft. High impact for Windows users, though low upvote count reflects its niche attack surface.

**[#40175] Cowork global instructions silently revert after saving** · 32 comments · 20 👍
> `anthropics/claude-code/issues/40175`

Global instructions set in Claude Cowork revert to an older version on save — a data-loss bug in the collaborative workspace. Strong community signal (20 👍) given how critical persistent config is for team workflows.

**[#66504] Session URL in commits/PRs should be opt-in** · 11 comments · 44 👍
> `anthropics/claude-code/issues/66504`

The highest upvoted open issue. Every commit message and PR description now appends a session URL by default, and the community wants a toggle. This touches both developer experience and potentially internal-repo policy.

**[#76689] Opus 4.8 rejects `effort: xhigh` when thinking is disabled** · 10 comments · 11 👍
> `anthropics/claude-code/issues/76689`

Even with `alwaysThinkingEnabled: true`, requests intermittently fail with a 400. Suggests a race or config propagation bug in the CLI → API path.

**[#83364] WebSearch returns HTTP 400 at xhigh/max effort on Opus 5** · 1 comment · 0 👍
> `anthropics/claude-code/issues/83364`

A **regression from v2.1.219** — WebSearch is completely broken at the two highest effort levels. Directly impacts power users relying on deep research workflows.

**[#24537] Agent Hierarchy Dashboard (TUI + Desktop)** · 14 comments · 17 👍
> `anthropics/claude-code/issues/24537`

Feature request for a unified real-time visualization of multi-agent workflows. High engagement suggests strong demand as agent-based workflows become common.

**[#82803] Degenerate repetition loop — single token repeated ~32k times** · 4 comments · 0 👍
> `anthropics/claude-code/issues/82803`

A silent model-generation bug where one token ("court") is emitted until `max_tokens` is hit. Reproduces across two model generations — suggests a deeper sampling or context issue, not isolated to one model.

**[#73673] Git-marketplace plugins never auto-update** · 2 comments · 2 👍
> `anthropics/claude-code/issues/73673`

Personal plugins with `autoUpdate: true` remain stale; the Update button is a silent no-op. A trust-and-maintenance issue for the plugin ecosystem.

**[#83421] `bypassPermissions` not propagating to subagents** · 1 comment · 0 👍
> `anthropics/claude-code/issues/83421`

Subagents spawned via Task/Agent tools ignore the parent's `bypassPermissions` mode and prompt for every tool call. Breaks automation pipelines that rely on permissionless delegation.

---

## 4. Key PR Progress

**[#83374] docs(plugin-dev): add MessageDisplay hook guidance**
> `anthropics/claude-code/pull/83374`

Fills a documentation gap in the bundled Hook Development skill — `MessageDisplay` is a supported hook but was omitted from triggers, event guidance, and the quick-reference table.

**[#26056] Fix code-review plugin posting without `--comment` flag**
> `anthropics/claude-code/pull/26056`

Adds behavioral guardrails so the model stops at terminal output when `--comment` isn't provided, preventing unintended GitHub posts. Related to #16606.

**[#48343] fix(plugin-dev): make skill-reviewer frontmatter valid YAML**
> `anthropics/claude-code/pull/48343`

Rewrites the `skill-reviewer` frontmatter description as a YAML block scalar to fix parsing. Part of ongoing plugin SDK hardening (#40370).

---

## 5. Feature Request Trends

- **Visibility into session state** — The Agent Hierarchy Dashboard (#24537), scoped rate-limit data in the statusline (#81940), and custom slash-command ordering (#83441) all point to a demand for **better situational awareness** during complex, multi-session workflows.
- **Configurability of default behaviors** — Session URL opt-in (#66504), custom ExitPlanMode button text (#83438), and suppressing delegation lines via `ultracode` (#83439) reflect a community that wants **more control over what the CLI does automatically**.
- **Cross-platform parity** — `/desktop` handoff on Windows ARM64 (#83437) and the CRLF bug (#2805) highlight that **platform feature gaps** remain a top request.
- **Multi-agent / Cowork reliability** — Features around subagent permission propagation (#83421) and cross-instance communication (#69912, closed duplicate) signal growing interest in **scalable agent orchestration**.

---

## 6. Developer Pain Points

1. **Effort-level regressions on Opus 5** — Two separate issues (#76689, #83364) report that high effort settings (`xhigh`/`max`) break API calls (400 errors) or disable WebSearch entirely. This is a **fresh regression from v2.1.219** and directly impacts power users.

2. **Platform-specific correctness bugs** — CRLF output on Linux (#2805), BSOD on Windows (#32870), macOS Desktop crashes on Tahoe (#65239, closed), and Windows ARM64 feature gaps (#83437) show that **cross-platform testing coverage is a persistent concern**.

3. **Silent data loss** — Mobile input drafts discarded on background (#71603), queued messages lost on session switch (#77010), and Cowork instructions reverting (#40175) form a pattern of **unsaved-state bugs** that erode trust.

4. **Plugin ecosystem maintenance** — Stale auto-updates (#73673), invalid frontmatter (#48343), and missing hook documentation (#83374) indicate the **plugin SDK is maturing but still rough around the edges**.

5. **Security/false-positive friction** — A safety-policy false positive on a routine coding request (#83440) and a model-hallucinated system-reminder with fake MCP instructions (#83442) suggest **guardrail tuning and system-prompt integrity** need attention.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026‑08‑03

## 1. Today’s Highlights
The Codex community continues to push for broader platform support and deeper IDE integration, with the long‑requested Linux desktop app seeing strong engagement. On the technical side, several high‑impact performance and token‑waste issues are drawing attention, particularly around background polling and session‑file bloat in the app‑server. Developers are also highlighting regressions in Windows stability and VS Code extension reliability.

## 2. Releases
*No new releases in the past 24 hours.*

## 3. Hot Issues

| Issue | Summary | Why It Matters | Community Reaction |
|-------|---------|----------------|-------------------|
| [#11023](https://github.com/openai/codex/issues/11023) | Codex desktop app for Linux | Cross‑platform parity is a top developer demand; the app currently lacks an official Linux build. | 906 👍, 197 comments – overwhelmingly positive support for Linux availability. |
| [#35058](https://github.com/openai/codex/issues/35058) | Codex Diff crashes in VS Code on macOS | Blocks a core IDE workflow; the error occurs in every repository, including fresh workspaces. | 115 👍, 45 comments – users report the diff view is completely unusable. |
| [#13733](https://github.com/openai/codex/issues/13733) | Background‑process polling wastes tokens | Each status poll triggers a full API turn with complete history, burning credits proportional to conversation length. | 30 👍, 35 comments – highlights a significant efficiency and cost concern. |
| [#23198](https://github.com/openai/codex/issues/23198) | Codex Desktop on Windows extremely slow | Performance degrades even on healthy machines, isolating the issue to the Codex app itself. | 47 👍, 21 comments – users note day‑to‑day usability is severely impacted. |
| [#31860](https://github.com/openai/codex/issues/31860) | GPT‑5.6 Sol catalog‑capped at 372K context | The effective context is far below the model’s published 1.05M spec, limiting complex tasks. | 25 👍, 12 comments – developers are tracking the discrepancy between spec and actual behavior. |
| [#35259](https://github.com/openai/codex/issues/35259) | Desktop repeatedly re‑enters model during polling | Re‑entry for wait/status polling can consume nearly 20% of token budget on a single turn. | 2 👍, 11 comments – raises flags about hidden credit drain during multi‑agent workflows. |
| [#34863](https://github.com/openai/codex/issues/34863) | app‑server memory footprint reaches 27 GB | Image‑heavy sessions produce 10+ GB JSONL files, causing extreme RAM and swap pressure. | 2 👍, 6 comments – a critical scalability issue for long‑running, media‑rich sessions. |
| [#22411](https://github.com/openai/codex/issues/22411) | app‑server loads all session files on every thread/list call | Catastrophic slowdown and background token waste as the sessions directory grows. | 0 👍, 4 comments – identified as a major performance regression for power users. |
| [#27565](https://github.com/openai/codex/issues/27565) | Claude Code‑like remote control | Allows developers to manage CLI sessions from a mobile app without SSH tunnels, improving workflow flexibility. | 12 👍, 9 comments – praised for enabling on‑the‑go oversight of long‑running tasks. |
| [#6015](https://github.com/openai/codex/issues/6015) | Customizable session retention period | Unbounded history growth consumes disk and can obscure older conversations; users want periodic cleanup. | 15 👍, 6 comments – aligns with operational hygiene and storage management needs. |

## 4. Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| [#36641](https://github.com/openai/codex/pull/36641) | Closed | Captures `codex_rollout_budget_units` from Response API usage into `TokenUsage`, keeping the provider‑only value out of serialized protocols. |
| [#31817](https://github.com/openai/codex/pull/31817) | Open | Automated update of `models.json` – keeps the model catalog current. |
| [#36635](https://github.com/openai/codex/pull/36635) | Closed | Exposes onboarding hints (e.g., `.onboarding_entrypoint=life_sciences`) in login‑completion notifications, enabling targeted first‑run flows. |
| [#36632](https://github.com/openai/codex/pull/36632) | Closed | Preserves SQLite thread metadata during goal mutations, preventing accidental overwrite of thread previews. |
| [#31781](https://github.com/openai/codex/pull/31781) | Open | Bounds executor‑controlled HTTP response buffering to mitigate memory retention when communicating with an untrusted remote exec‑server. |
| [#36544](https://github.com/openai/codex/pull/36544) | Closed | Supports portable Agent Plugins throughout installation, allowing dotted names and non‑standard versions without breaking the legacy manifest layout. |

## 5. Feature Request Trends
- **Cross‑platform desktop apps** – Linux support is the most upvoted request, with macOS and Windows already covered.
- **Mobile / remote session management** – Developers want native mobile‑app integration (similar to Claude Code’s remote control) to oversee and interact with long‑running CLI sessions without SSH.
- **Session hygiene controls** – Customizable retention policies, automatic cleanup of old conversation history, and better resource accounting.
- **MCP server exposure** – Standardized discovery and tool‑exposure for custom stdio MCP servers across all Codex surfaces (Desktop, CLI, extension).
- **Reasoning‑effort granularity** – Parity between the Desktop app and VS Code extension for model‑specific settings (e.g., max reasoning effort for GPT‑5.6‑Sol).
- **Undo / revision history** – Reliable, git‑backed undo for code modifications remains a persistent ask.

## 6. Developer Pain Points
- **Token waste from background polling** – Every status check can trigger a full API turn, draining credits disproportionately to the actual work done.
- **Windows performance and stability** – Slow app response, silent crashes on browser‑tab close, and IPC errors are frequently reported.
- **VS Code extension bugs** – Diff view crashes and missing feature parity (e.g., reasoning‑effort controls) degrade the IDE experience.
- **App‑server memory bloat** – Long sessions with inline images or unbounded session‑file loading cause extreme RAM usage and slow startup.
- **Subscription and billing anomalies** – Users report unexpected limit thresholds and discrepancies between Pro/Plus tier behavior.
- **Sync and remote‑session reliability** – Remote conversations sometimes fail to propagate to web or mobile clients, and Windows‑WSL integration shows regression in repository detection.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026‑08‑03

## 1. Today's Highlights
A new nightly build (`v0.55.0-nightly.20260803.gf47d6c6f7`) was released, bringing a major dependency update to `@google/genai` v2.13.0 and `@a2a-js/sdk` 1.0.0. Community attention is focused on persistent agent‑hang issues, subagent recovery failures, and shell‑command stalls that block routine workflows. Several PRs target core stability fixes, while evaluations of AST‑aware tooling and memory‑system robustness continue to shape the agent roadmap.

## 2. Releases
**v0.55.0‑nightly.20260803.gf47d6c6f7**  
Nightly build with automated dependency bumps, most notably upgrading the core GenAI client to v2.13.0 and the Agent Client Protocol SDK to 1.0.0.  
**Full Changelog:** https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7

## 3. Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Subagents that hit turn limits incorrectly report success, masking interruptions and breaking debugging flows. | 12 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | The generalist agent can hang indefinitely, forcing manual cancellation and disrupting automation. | 8 comments, **8 👍** |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck “Waiting input” | Simple CLI commands appear to hang after completion, blocking further agent actions. | 4 comments, 3 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via Zero‑Dependency OS Sandboxing | Proposes a secure, sandboxed way to let the model use native bash tools without compromising UX. | 8 comments, 1 👍 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component‑level evaluations | Epic tracking behavioral eval generation and run‑rate across supported Gemini models. | 7 comments |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST‑aware file reads, search, and mapping | Investigation into whether AST‑aware tools can reduce tool calls and noise while improving codebase understanding. | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub‑agents enough | Anecdotal reports that the model ignores custom skills and sub‑agents unless explicitly prompted. | 6 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low‑signal sessions | Auto Memory repeatedly surfaces the same low‑value sessions because unprocessed candidates are never marked. | 5 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction and reduce Auto Memory logging | Background extraction agent currently sees raw transcripts before redaction; logging may leak skill content. | 4 comments |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance browser\_agent resilience | Current “fail‑fast” lock‑handling breaks persistent‑session workflows; automatic takeover is requested. | 4 comments |

## 4. Key PR Progress
| # | Title | Type | Summary |
|---|-------|------|---------|
| [#28638](https://github.com/google-gemini/gemini-cli/pull/28638) | chore/release: bump version to v0.55.0‑nightly | Release | Automated nightly version bump. |
| [#28631](https://github.com/google-gemini/gemini-cli/pull/28631) | chore(deps): bump @google/genai 1.30.0 → 2.13.0 | Dependency | Major upgrade of the core GenAI client. |
| [#28628](https://github.com/google-gemini/gemini-cli/pull/28628) | chore(deps): bump @a2a-js/sdk 0.3.11 → 1.0.0 | Dependency | Agents‑protocol SDK reaches stable 1.0.0. |
| [#28627](https://github.com/google-gemini/gemini-cli/pull/28627) | chore(deps): bump @agentclientprotocol/sdk 0.16.1 → 1.3.0 | Dependency | ACP SDK updated alongside a2a‑js. |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | fix(vscode‑ide‑companion): stop leaking disposables | Fix | Resolves #27790 by ensuring `gemini.diff.accept` and workspace‑folder listeners are properly cleaned up. |
| [#28624](https://github.com/google-gemini/gemini-cli/pull/28624) | fix(core): prevent boolean thought parts leaking as `[Thought: true]` | Fix | Addresses #23525 by filtering out boolean‑typed thought fields before serialization. |
| [#28438](https://github.com/google-gemini/gemini-cli/pull/28438) | Trim tool names before registry lookup | Fix | Adds whitespace trimming and a regression test for tool‑name resolution. |
| [#28535](https://github.com/google-gemini/gemini-cli/pull/28535) | fix: use resolveRipgrepPath in perf‑test setup | Fix | Updates performance‑test global setup to use the current ripgrep resolver API. |
| [#28534](https://github.com/google-gemini/gemini-cli/pull/28534) | fix(ci): retry staging‑tmp dist‑tag removal after npm publish | CI/Release | Adds a retry loop to handle timing‑sensitive dist‑tag cleanup in nightly releases. |
| [#27070](https://github.com/google-gemini/gemini-cli/pull/27070) | branch optimize virtual list2 | Performance | Optimizes `VirtualizedList`, scrolling checkpoints, and fixes flaky tests for terminal‑resize performance. |

## 5. Feature Request Trends
- **Agent reliability & recovery** – Multiple P1/P2 issues focus on preventing hangs, handling turn‑limit failures gracefully, and ensuring subagents are invoked appropriately.
- **Memory‑system robustness** – Requests to make Auto Memory more deterministic (skip low‑signal retries, redact before logging, quarantine invalid patches).
- **AST‑aware tooling** – Investigation into whether parse‑tree‑based reads/search can reduce token waste and improve codebase navigation.
- **Secure native bash execution** – Proposal for zero‑dependency OS sandboxing that lets the model leverage its bash affinity while maintaining safety.
- **Browser‑agent resilience** – Interest in automatic session takeover and lock recovery for persistent browser workflows.

## 6. Developer Pain Points
1. **Agents hanging indefinitely** – Generalist and browser subagents can block for hours, requiring manual intervention.
2. **Shell commands stuck in “Waiting input”** – Simple CLI commands appear to hang after completion, breaking automated flows.
3. **Subagent/ skill under‑utilization** – The model often ignores configured skills and subagents unless explicitly prompted.
4. **Auto Memory quirks** – Low‑signal sessions are retried endlessly; invalid patches are silently skipped; redaction occurs after content reaches the model.
5. **Tool‑limit errors** – Exceeding ~128–400 tools triggers 400 errors; the agent does not intelligently scope its toolset.
6. **Escape‑character mishandling** – Naive `\\n` workarounds cause display and parsing issues across the terminal UI.
7. **Dependency‑bump friction** – Major version upgrades (e.g., `chalk` v6, `undici` v8) may introduce breaking changes that require careful validation.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-03

---

## 1. Today's Highlights

A cluster of bugs filed in the last 48 hours highlights regressions and UX gaps in recent releases (1.0.71–1.0.78). Most pressing: the `view` tool regressed in 1.0.72–1.0.73 reporting false "Path does not exist" errors (#4202), and cancelled user input in autopilot mode is incorrectly processed as a valid turn (#4336). A model-accessibility mismatch around `gpt-5.6-luna` (#4337) also surfaced, breaking OpenAI-compatible aggregator tooling.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

**#4202 — Built-in `view` reports "Path does not exist" for existing files (1.0.73 regression)**
A clear regression introduced between 1.0.71 and 1.0.72: the `view` tool incorrectly reports that existing text files do not exist. Isolated SDK probes confirm the filesystem is fine, pointing to a CLI-side change. A controlled repro is underway. *(0 upvotes · 3 comments)*
→ https://github.com/github/copilot-cli/issues/4202

**#4337 — `gpt-5.6-luna` advertised in `/models` but unreachable via `/chat/completions`**
The model appears in the models API but only responds through `/responses`, not the standard OpenAI-compatible `/chat/completions` endpoint. This breaks MoA and aggregator tooling that assumes parity. Triage label applied.
→ https://github.com/github/copilot-cli/issues/4337

**#4336 — Cancelled user input delivered to agent as a valid turn (autopilot)**
Users report that typing and then cancelling input before send still results in the cancelled text being bundled into a later message block with its original timestamp. The agent processes it as a normal turn with no indication of cancellation. Active bug.
→ https://github.com/github/copilot-cli/issues/4336

**#4334 — Stashed (`Ctrl+S`) prompt lost on session switch**
A prompt typed but not submitted, then stashed with `Ctrl+S`, disappears after switching sessions. Pressing `Ctrl+S` to pop on return restores nothing. Data loss risk for power users.
→ https://github.com/github/copilot-cli/issues/4334

**#4335 — `toolCall.title` shows natural-language summary instead of shell command (ACP mode)**
In Agent Context Protocol mode (e.g., Zed), `toolCall.title` is populated with a high-level summary like *"Search whole monorepo for double-entry"* rather than the actual executable command. This obscures what will run in client approval modals, undermining informed consent.
→ https://github.com/github/copilot-cli/issues/4335

**#4329 — Autopilot not enabled when resuming a previously-autopilot session**
Status line shows autopilot as enabled after resuming, but any action requiring approval fails. The state is not persisted across sessions. Affects 1.0.77.
→ https://github.com/github/copilot-cli/issues/4329

**#4328 — `Ctrl+H` (delete previous character) misinterpreted as `Ctrl+Backspace` (delete word) under WSL2**
`/help` documents `Ctrl+H` as delete-char, but under WSL2 it deletes the previous word instead. Root cause traced to `WT_SESSION` leaking from Windows Terminal into the WSL2 environment, changing key-event interpretation.
→ https://github.com/github/copilot-cli/issues/4328

**#4292 — Colors completely wrong in tmux with light theme**
Light theme renders incorrectly when Copilot CLI runs inside tmux; outside tmux colors are fine. Affects theming and accessibility. Image evidence provided.
→ https://github.com/github/copilot-cli/issues/4292

**#2286 — Support git symlinks in plugin install on Windows**
Long-standing request (open since March 2026): plugin install should resolve git symlink text stubs on Windows where `core.symlinks=false` by default. Without this, marketplace plugin installs can be broken or incomplete.
→ https://github.com/github/copilot-cli/issues/2286

**#4332 — No way to silence the "Memory is disabled" session notice**
Users with `"memory": false` in settings see a one-per-session info line on every launch. No configuration exists to suppress it, creating repeated noise for users who explicitly disabled memory.
→ https://github.com/github/copilot-cli/issues/4332

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

- **Silence and configurability**: Users want explicit control over on-screen notices (e.g., memory-disabled banner, startup tips). The trend points toward a `showTipsOnStartup`-style flag covering more informational messages.
- **ACP mode fidelity**: Several reports (#4335, #4337) focus on the Agent Context Protocol surface not matching user expectations — titles should be executable, and model availability should be consistent across API endpoints.
- **Cross-platform keybinding parity**: WSL2 (#4328) and Windows symlink (#2286) issues reflect ongoing tension between Windows Terminal behavior and POSIX assumptions in the CLI.
- **Theme/rendering robustness**: tmux color issues (#4292) and session-state persistence (#4329, #4334) signal a broader need for terminal-environment-agnostic behavior.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Related Issues |
|---|---|---|
| Session state not persisting across switches/resumes | 3 | #4334, #4329, #4336 |
| Regression in built-in tool behavior (1.0.72+) | 2 | #4202 |
| Windows/WSL2 keybinding and environment leakage | 2 | #4328, #2286 |
| API surface inconsistency (`/models` vs `/chat/completions`) | 1 | #4337 |
| ACP mode UX gaps (title content, approval clarity) | 1 | #4335 |
| Terminal rendering incompatibilities (tmux) | 1 | #4292 |
| No-op informational noise with no suppression path | 1 | #4332 |

**Takeaway**: The dominant frustration is **session-state reliability** — three issues in a single day involve data loss or incorrect state after a session switch or resume. Coupled with the 1.0.72 regression, this suggests the recent release train may need a stability patch cycle before new features ship.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-03

## 1. Today's Highlights

The past 24 hours saw no new releases, but community engagement remains active around two persistent feature requests from author **CatKang**: cross-session memory and remote session control (both with sustained discussion dating back to February). A new issue surfaced around **swarm/parallel subagent reliability**, flagging that HTTP 403s and timeouts mid-batch cause half-written workspaces and token waste — a concern likely to resonate with teams running batch operations at scale.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

### [#1282] Remote Control — Continue local sessions from any device**
- **Author:** CatKang | **Upvotes:** 24 | **Comments:** 11 | **Updated:** 2026-08-02
- [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/1282)
- **Why it matters:** This is the most-upvoted open issue by a wide margin. Users running Kimi Code CLI in long-lived sessions want seamless handoff to mobile/tablet/browser when away from their desk — critical for on-call, travel, and hybrid-work scenarios. The 24 upvotes signal strong demand for session continuity.

### [#1283] Memory System — Persistent context across sessions
- **Author:** CatKang | **Upvotes:** 0 | **Comments:** 14 | **Updated:** 2026-08-02
- [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **Why it matters:** A companion to #1282, this proposes both AI-managed auto-notes and user-defined manual memory (via config). Cross-session recall is a foundational capability for any developer tool positioned as an "agent" rather than a one-shot REPL. 14 comments indicate an active design discussion, even without upvotes yet.

### [#2578] Swarm/parallel subagent 403/timeout — partial work lost, resume re-spends tokens
- **Author:** myagizmaktav | **Upvotes:** 0 | **Comments:** 0 | **Updated:** 2026-08-02
- [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/2578)
- **Why it matters:** A newly filed issue describing a real operational failure: when a parallel subagent batch hits a quota limit or fixed timeout mid-execution, the workspace is left in a broken intermediate state (partial route files, styles, server functions). Worse, resumption re-spends tokens on already-attempted work, and broken tree blocks other subagents. This is a reliability gap for anyone using the swarm mode in production.

### [#2579] External wake channel for running interactive sessions
- **Author:** munich35 | **Upvotes:** 0 | **Comments:** 0 | **Updated:** 2026-08-02
- [GitHub Link](https://github.com/MoonshotAI/kimi-cli/issues/2579)
- **Why it matters:** Describes an advanced multi-agent pattern where an `inotifywait`-based mailbox system notifies a running TUI session of incoming Markdown messages from other agents (potentially on remote machines via SSH). While niche, this points to users pushing Kimi Code CLI into multi-agent orchestration workflows — a sign the tool is being used beyond its core single-user scope.

## 4. Key PR Progress

### [#2471] feat(tools): add Monitor tool for per-line stdout streaming — **CLOSED**
- **Author:** Nitjsefnie | **Created:** 2026-06-22 | **Updated:** 2026-08-02
- [GitHub Link](https://github.com/MoonshotAI/kimi-cli/pull/2471)
- **Summary:** Adds a `Monitor` tool that provides per-line streaming output, serving as a streaming counterpart to the existing background tool. Closed after review — whether merged or declined, the proposal highlights user demand for real-time observability into long-running subprocesses, a gap in the current tooling.

## 5. Feature Request Trends

Three clear directions are emerging from the current issue landscape:

| Trend | Evidence |
|---|---|
| **Session persistence & continuity** | #1282 (remote control) and #1283 (memory system) both address the same underlying need: Kimi Code CLI sessions should survive context switches and be resume-able across devices and time. |
| **Multi-agent / orchestration support** | #2579 (external wake channel) and #2578 (swarm reliability) both indicate users are composing Kimi Code CLI into larger agent systems — raising the bar for inter-process communication and fault tolerance. |
| **Observability & streaming** | PR #2471's `Monitor` tool and the streaming concern in #2579 point to a demand for real-time visibility into what subagents and background processes are doing. |

## 6. Developer Pain Points

1. **Lost work on transient failures (swarm mode):** #2578 captures a painful operational scenario — quota limits and timeouts kill subagents mid-flight, leaving broken workspaces and wasting tokens on re-execution. No checkpoint-and-resume semantics exist for parallel batches today.

2. **No cross-session recall:** Despite 14 comments, #1283 remains open with no implementation. Users repeatedly start fresh and lose project context, patterns, and preferences between sessions — a friction point for long-term adoption.

3. **Tight coupling to the local terminal:** #1282's 24 upvotes reflect frustration that sessions are locked to the machine they were started on. There is no remote-access or multi-device fallback when the local environment is unavailable.

4. **Limited real-time feedback for long-running operations:** The closed PR #2471 and the inotify-based mailbox in #2579 both suggest users are building workarounds for the absence of built-in streaming and event-driven wake mechanisms in the CLI.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-03

---

## 1. Today's Highlights

The community is wrestling with a cluster of memory and disk bloat issues, from leaking `.so` and `libopentui.dylib` temp files in `/tmp` to an unbounded SQLite WAL that can consume tens of gigabytes. On the feature front, two significant PRs landed: a request-scoped `chat.model` hook for per-request model switching, and per-MCP-server trust configuration—both long-requested capabilities. Meanwhile, the ongoing memory megathread continues to gather community heap snapshots as the central tracking issue for all memory-related reports.

---

## 2. Releases

**No new releases in the last 24 hours.** The latest tracked version remains 1.18.x for Desktop and v1.15.x for CLI.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| **#20695** | [OPEN] Memory Megathread | Central hub for all scattered memory-issue reports; the team is explicitly asking for heap snapshots, not LLM-suggested fixes. | 🔥 121 comments · 94 👍 — the most engaged issue on the board. |
| **#4695** | [CLOSED] Speech-to-Text Voice Input | Long-requested accessibility feature; the author already built a prototype. Closed but signals clear demand. | 36 comments · 170 👍 — highest upvote count of any issue. |
| **#39845** | [OPEN] DeepSeek V4 Flash requires "hosted in China" opt-in mid-session | Sudden provider policy change broke an active session without warning, forcing an explicit geo-restriction toggle. | 11 comments · 18 👍 — friction around opaque provider gating. |
| **#39861** | [OPEN] Removal of zero-data-retention policy | Users noticed the "zero-retention" claim was stripped from Go docs; privacy-conscious users are watching closely. | 8 comments · 15 👍 |
| **#28089** | [OPEN] Leaks temporary `.so` files in `/tmp`, hundreds of GB over time | A Linux-specific resource leak that can fill disks silently; confirmed on CentOS 7. | 7 comments · 7 👍 |
| **#39876** | [OPEN] `libopentui` temp copies consume 207 GiB | macOS equivalent of the `.so` leak—nearly 59k dangling dylib files reported by one user. | 2 comments · 0 👍 |
| **#37495** | [OPEN] SQLite WAL grows unbounded (10–15 GB) | Multiple independent SQLite connections prevent WAL checkpointing; only a full quit recovers space. | 2 comments · 0 👍 |
| **#37821** | [OPEN] Crash on startup when SQLite DB is corrupted | No graceful recovery path—power loss or disk issues produce an unrecoverable `disk image is malformed` error. | 2 comments · 0 👍 |
| **#23595** | [OPEN] `<system-reminder>` keeps moving, breaking llama.cpp cache | Prompt-history drift invalidates KV-cache, causing unnecessary re-processing on every turn. | 7 comments · 11 👍 |
| **#37239** | [OPEN] `service restart` spawns silent retry loop | `serve --service` is spawned ~16 times in ~2.5 min with no error logs, requiring manual `kill`. Affects v2 service management. | 5 comments · 0 👍 |

---

## 4. Key PR Progress

| # | PR | Author | Summary |
|---|-----|--------|---------|
| **#40188** | [OPEN] `feat(plugin): add request-scoped chat.model hook` | millsydotdev | Closes #18793, #24006. Plugins can now swap the model for a single request before provider/auth resolution—enables per-turn model routing without global config changes. |
| **#40125** | [OPEN] `feat(opencode): Allow per-MCP-server trust configuration` | karup | Closes #40111, #23506, #14696, #26862, #1694. Introduces granular trust flags per MCP server rather than a global allow/deny toggle. |
| **#40197** | [OPEN] `fix(app): eliminate persistence write amplification` | Hona | Replaces setter-coupled `makePersisted` writes with a shared repository and a 500 ms checkpoint deadline. Desktop documents and content-addressed blobs now go through SQLite WAL with IndexedDB parity. |
| **#40202** | [OPEN] `fix(app): search every known project in the open project dialog` | NumerousJLs | Closes #39142. The project picker now searches beyond the five most-recent entries, fixing discoverability for larger project collections. |
| **#40198** | [OPEN] `fix(opencode): match canonically equivalent Unicode in patches` | leizd | Closes #31651. Adds a canonical Unicode-equivalence pass to `seekSequence()`, fixing patch verification when filenames or content use different normalization forms. |
| **#40163** | [OPEN] `fix(tui): let the prompt Down arrow reach the end of the text` | 3351163616 | Closes #40161. Fixes cursor-offset measurement so the Down arrow key can navigate to the true end of multiline prompts. |
| **#40199** | [OPEN] `fix(opencode): handle removed OpenAI OAuth auth` | opencode-agent[bot] | Fixes a mid-session race where removing OpenAI OAuth auth after provider load would still mutate subsequent requests. Includes a regression test. |
| **#40184** | [CLOSED] `feat(teach): Add Teach mode for pedagogical workflows` | ThibaultGH | Draft PR for a dedicated "Teach" mode (#36521). Still WIP with test scaffolding; invites discussion on implementation approach. |
| **#38200** | [OPEN] `feat: add support for Solidity file type and highlighting` | ConceptCodes | Adds Solidity syntax highlighting to the TUI editor—addresses a recurring request from Web3 developers. |
| **#34977** | [CLOSED] `fix(queue): prevent pending resolver leak on abandoned iteration` | HEETMEHTA18 | Closes #34984. Pending RPC resolver callbacks are now cleaned up when a consumer breaks out of a `for await...of` loop before draining the queue. |

---

## 5. Feature Request Trends

- **Per-request model control** — The `chat.model` hook (#40188) and the long-running demand for model switching per turn (#18793, #24006) show developers want fine-grained, programmatic model selection rather than global config.
- **MCP trust granularity** — Five related issues (#40111, #23506, #14696, #26862, #1694) converged into a single PR (#40125), indicating strong community appetite for per-server, not per-session, trust decisions.
- **Voice / accessibility input** — Issue #4695 (170 👍) demonstrates sustained interest in speech-to-text, even though the PR was closed; the demand remains unmet.
- **Teach / pedagogical mode** — The Draft PR #40184 signals an emerging niche for structured learning workflows inside the editor.
- **Multi-language / localization** — The German docs PR (#35007) and Solidity highlighting (#38200) reflect ongoing requests for broader language and domain coverage.

---

## 6. Developer Pain Points

1. **Resource leaks are the dominant bug class.** Three separate issues this week address temp-file bloat (`.so` on Linux #28089, `libopentui.dylib` on macOS #39876) and one addresses unbounded WAL growth (#37495). All share the same pattern: long-running sessions silently consume disk until manual intervention is required.

2. **SQLite durability is fragile.** Corrupted databases crash on startup (#37821), concurrent VS Code instances cause silent crashes (#38849), and the multi-connection WAL problem (#37495) means the app has no graceful degradation path for disk I/O contention.

3. **Provider policy changes break mid-session.** The DeepSeek V4 Flash geo-restriction flip (#39845) and the removal of the zero-retention promise (#39861) both illustrate that opaque upstream policy changes surface as jarring in-session errors with no migration path.

4. **Service lifecycle is unreliable.** The v2 `service restart` retry loop (#37239) and the Windows first-launch onboarding hang (#38222, #40170) point to fragile process-management code that requires manual `kill` or leaves users stuck on splash screens.

5. **Auth state is inconsistent.** Changing providers re-prompts for API keys (#33775), and GitHub Copilot credentials expire prematurely despite being stored (#40183), suggesting the auth persistence layer has race conditions around credential lifecycle.

---

*Data source: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) · Generated 2026-08-03*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-03

## Today's Highlights

The Pi team shipped several provider additions (DeepInfra, LLM Gateway) and closed out a cluster of connectivity and compaction issues that were stalling users on flaky networks. A major round of session-storage refactoring landed, introducing in-memory backends, server-session persistence, and repository-composed storage — all experimental for now. Meanwhile, two high-comment compaction bugs (#6879, #7020) remain open and continue to draw community attention.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Title | Status | Comments | 👍 | Why it matters |
|---|-------|--------|----------|-----|----------------|
| [#6879](https://github.com/badlogic/pi-mono/issues/6879) | Auto-compaction never triggers after context grows past 100% | OPEN | 10 | 10 | Compaction is the core long-session survival mechanism; when it fails to fire, users hit API rejection at 373k tokens. Heavily upvoted — a top-priority fix. |
| [#7020](https://github.com/badlogic/pi-mono/issues/7020) | Pi doesn't continue after compaction | OPEN (in-progress) | 7 | 2 | Long-running "coordinator" sessions break post-compaction, making extended workflows unreliable. |
| [#7062](https://github.com/badlogic/pi-mono/issues/7062) | Handle array content & missing `finish_reason` | OPEN | 6 | 0 | Non-standard streaming responses from Databricks/Qwen3 models produce garbled output (`[object Object]`). Affects multiple providers. |
| [#7113](https://github.com/badlogic/pi-mono/issues/7113) | TUI freezes after `/login` when pi.dev is unreachable | CLOSED | 4 | 0 | Post-login refresh awaited with no timeout or `AbortSignal`, freezing the TUI for ~5 minutes. Root cause fixed. |
| [#7315](https://github.com/badlogic/pi-mono/issues/7315) | Fireworks requests timeout instantly | CLOSED | 4 | 0 | Transient 2s/4s/8s retries produced empty-content failures. Connection timeout increased in #7435. |
| [#7486](https://github.com/badlogic/pi-mono/issues/7486) | Hardware cursor jumps in WezTerm | CLOSED | 3 | 0 | `PI_HARDWARE_CURSOR=1` workaround for IME conflicts causes visible cursor jitter during spinner states. |
| [#7323](https://github.com/badlogic/pi-mono/issues/7323) | `pi update --models` fails on transient catalog stall | CLOSED | 3 | 0 | Single HTTP stall kills the entire refresh. Retrying per-provider would recover from transient network hiccups. |
| [#7413](https://github.com/badlogic/pi-mono/issues/7413) | Compaction fails on GitHub Copilot GHE | CLOSED | 3 | 0 | Enterprise Copilot accounts get "unknown stamp" errors during `/compact`. Auth path for compaction diverges from normal chat. |
| [#7497](https://github.com/badlogic/pi-mono/issues/7497) | Symlinked session dirs silently ignored | CLOSED | 2 | 0 | `listSessions` used `readdir` without `followSymlinks`, making symlinked session storage invisible to `pi-web` and other tools. |
| [#7504](https://github.com/badlogic/pi-mono/issues/7504) | IPv6 blackhole hangs pi for ~5 min | CLOSED | 1 | 0 | `autoSelectFamily` not enabled in undici — IPv6-first resolution stalls on networks where AAAA is a blackhole but A works. |

---

## Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#7503](https://github.com/badlogic/pi-mono/pull/7503) | Experimental in-memory sessions | OPEN | New `Session`, `SessionStorage`, and `SessionRepository` contracts with an in-memory backend covering entries, records, lanes, facts, queries, logs, stats, and forks. |
| [#7501](https://github.com/badlogic/pi-mono/pull/7501) | Add DeepInfra provider | CLOSED | Standard OpenAI-completions provider for DeepInfra. Submitted alongside feature request #7502. |
| [#7498](https://github.com/badlogic/pi-mono/pull/7498) | Defer idle compaction until next prompt | OPEN | Prevents unnecessary compaction cycles and token waste, especially with large-context GPT models. Related to #6879. |
| [#7459](https://github.com/badlogic/pi-mono/pull/7459) | Compose experimental CLI commands | CLOSED | Combines experimental command parsing with the existing CLI parser, adds typed dispatch for combined/server/client commands. |
| [#7480](https://github.com/badlogic/pi-mono/pull/7480) | Add LLM Gateway provider | CLOSED | OpenRouter-style router provider with ~151 tool-capable models fetched from `api.llmgateway.io/v1/models`. |
| [#7496](https://github.com/badlogic/pi-mono/pull/7496) | Cycle execution duration & `/copy cycle` | CLOSED | Prints `Execution time: Xh Ym Zs` per work cycle (measured via monotonic clock). Adds a copy-command for cycle data. |
| [#7494](https://github.com/badlogic/pi-mono/pull/7494) | Preserve Gemini 3 tool call IDs | OPEN | Gemini 3 requires matching IDs on function calls and responses during history replay. Currently dropped because `requiresToolCallId()` doesn't cover Gemini. |
| [#7493](https://github.com/badlogic/pi-mono/pull/7493) | Set `AI_AGENT` for child process attribution | OPEN | Sets `AI_AGENT=pi` alongside `PI_CODING_AGENT=true` so child processes can identify their parent agent — an emerging cross-agent convention. |
| [#7482](https://github.com/badlogic/pi-mono/pull/7482) | Prefer iTerm2 inline images over kitty on WezTerm | CLOSED | Fixes WezTerm image degradation (#7481) by switching capability detection to iTerm2 for WezTerm, avoiding kitty's progressive erasure in scrolling transcripts. |
| [#7396](https://github.com/badlogic/pi-mono/pull/7396) | Server session backend | OPEN | Durable JSONL-backed session storage for `PiServer` with exclusive cross-process locking, crash recovery, and live transcript progress. |

---

## Feature Request Trends

1. **Provider expansion** — DeepInfra (#7502/#7501) and LLM Gateway (#7480) reflect demand for more OpenAI-compatible inference providers, especially open-weight and router-style offerings.
2. **Compaction reliability** — Both open compaction bugs (#6879, #7020) and PR #7498 show the community prioritizing robust long-context handling. Users running multi-hour agentic sessions need compaction that fires predictably.
3. **Session storage architecture** — A cluster of PRs (#7503, #7396, #7478, #7455) points to an active re-architecture of how sessions are stored, searched, and persisted across server and client backends.
4. **Cross-agent interoperability** — `AI_AGENT` env var (#7493) and Claude Code skill frontmatter support (#7468) signal a push toward agent-to-agent compatibility and skill portability.
5. **Tool-calling fidelity** — Gemini 3 tool call ID preservation (#7494) and the double-serialization complaint (#7485) highlight ongoing friction with non-Anthropic/GPT tool-calling protocols.

---

## Developer Pain Points

- **Compaction edge cases**: Two open issues (#6879, #7020) with 17 combined comments — compaction either doesn't trigger or leaves sessions stuck. This is the #1 reliability concern for long-running workflows.
- **Network timeouts on pi.dev**: Issues #7113, #7323, and #7504 all describe hangs when the model catalog is unreachable or on IPv6-blackhole networks. Users on marginal connections experience multi-minute freezes during login and startup.
- **Provider-specific quirks**: Array content bugs (#7062), Fireworks timeouts (#7315), and GHE compaction auth failures (#7413) show that non-standard provider behaviors are a recurring source of friction.
- **Terminal rendering on WezTerm**: Three issues in one day (#7481, #7486, #7490) — image degradation, cursor jumping, and IME ghosting — indicate WezTerm compatibility needs sustained attention.
- **Extension development gaps**: Slash commands sent via `pi.sendUserMessage` are ignored (#7484), shellPath is overridden in minimal-mode examples (#7489/#7495), and extension loading is serial (#7483). The extension API needs more robustness.
- **Argument completion after Tab** (#7479): Tab-completing a slash command name closes the autocomplete list without re-querying, making it impossible to discover command arguments — a UX gap for power users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-03

## 1. Today's Highlights

A new nightly build (v0.21.3-nightly) shipped with a completed TUI keyboard shortcut reference and a history-pagination fix. The community continues to push hard on daemon resource bounding, workspace runtime ownership, and security hardening around voice egress and hook trust boundaries.

---

## 2. Releases

**v0.21.3-nightly.20260803.e1e5b42ce** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3-nightly.20260803.e1e5b42ce))
- Docs: Complete TUI keyboard shortcut reference (#8327)
- Fix: Unblock history pagination on `o` (core)

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | Direct External Context Provider Profile | Enables monorepo-wide shared context via a private admin-bound memory service — 11 comments, active discussion on scope. |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | Bound Multi-Workspace Daemon Resource Usage | Count-only limits don't bound bytes held by request bodies, WebSocket assembly, or output — critical for production `qwen serve` stability. |
| [#4156](https://github.com/QwenLM/qwen-code/issues/4156) | `qwen --serve` (Mode A) — TUI + In-Process HTTP Daemon | Resolves the "TUI and daemon can't coexist" blocker; closed after phased implementation completed. |
| [#7306](https://github.com/QwenLM/qwen-code/issues/7306) | Harden Tool-Output Budgeting & Artifact Lifecycle | Phase 1 correctness merged (#7323, #7470); tracks next hardening steps for observability and finalization contracts. |
| [#8123](https://github.com/QwenLM/qwen-code/issues/8123) | Desktop Client Can't Resolve Files via `@` | Japanese/Chinese file referencing broken in Desktop v0.5.5 — 5 comments, needs triage. |
| [#8376](https://github.com/QwenLM/qwen-code/issues/8376) | Change Process Name from `node.exe` to `qwen.exe` | External tooling (task managers, watchdogs) can't reliably identify the Qwen Code process; 4 comments requesting a clean rename. |
| [#8281](https://github.com/QwenLM/qwen-code/issues/8281) | Email Channel with IMAP/SMTP Support | Proposes an official email channel for agent interaction — 4 comments, aligns with background-automation roadmap. |
| [#8382](https://github.com/QwenLM/qwen-code/issues/8382) | Duplicate Provider Tool Call ID | Tool calls intermittently fail with "Duplicate provider tool call id" — affects ACP and daemon sessions. |
| [#8400](https://github.com/QwenLM/qwen-code/issues/8400) | Sessions Silently Auto-Deleted on Windows Restart **[P1]** | Workspace cwd mismatch causes provider message loader to return 0 messages, erasing local session mirrors without warning. |
| [#8398](https://github.com/QwenLM/qwen-code/issues/8398) | `isAbortError` Misses OpenAI `APIUserAbortError` | User cancellations in `auth_type=openai` sessions are misclassified as failures instead of aborts — high-impact bug. |

---

## 4. Key PR Progress

| # | Title | Type | Summary |
|---|-------|------|---------|
| [#8408](https://github.com/QwenLM/qwen-code/pull/8408) | Fix provider warning sanitizer | **Bugfix** | Fixes port truncation and password leakage in `sanitizeProviderWarning`. |
| [#8405](https://github.com/QwenLM/qwen-code/pull/8405) | Deprioritize Maven generated test sources | **Review** | `/review` now treats Maven-compiler-generated test sources as generated output, improving Java path prioritization. |
| [#6739](https://github.com/QwenLM/qwen-code/pull/6739) | Browser extension alpha diagnostics | **Feature** | Adds daemon/browser-automation onboarding states, runtime MCP diagnostics, deterministic packaging, and real-Chrome acceptance flow. |
| [#8383](https://github.com/QwenLM/qwen-code/pull/8383) | Fix `readText` line-ending detection | **Bugfix** | `lineEnding` now detected from the full file, not the returned slice — fixes CRLF detection in single-line reads. |
| [#8407](https://github.com/QwenLM/qwen-code/pull/8407) | Prevent table dialog scroll jump | **UI Fix** | Closing a Markdown table cell dialog no longer scrolls the page; keyboard focus restoration preserved. |
| [#8213](https://github.com/QwenLM/qwen-code/pull/8213) | Workspace runtime ownership | **Feature** | Establishes `WorkspaceRuntime` as the authoritative ownership boundary for ACP child lifecycle with five-state snapshots and work leases. |
| [#8406](https://github.com/QwenLM/qwen-code/pull/8406) | Enable synchronized output for ConEmu/Cmder | **Bugfix** | Activates DEC mode 2026 to eliminate full-screen flicker; also adds `WT_SESSION` detection for Windows Terminal. |
| [#8274](https://github.com/QwenLM/qwen-code/pull/8274) | Fork from any conversation | **Feature** | Allows branching a session from any visible message (not just the latest), with safeguards against tool-call/cancellation races. |
| [#8180](https://github.com/QwenLM/qwen-code/pull/8180) | Track tool execution outcomes | **Telemetry** | Adds `executionStatus` alongside terminal status to capture whether `invocation.execute()` was entered and succeeded. |
| [#8394](https://github.com/QwenLM/qwen-code/pull/8394) | Maven multi-module review verification | **Feature** | `/review build-test` now recognizes root Maven reactors, maps changed files to deepest modules, and prefers leaf modules. |

---

## 5. Feature Request Trends

- **Daemon & workspace lifecycle:** Repeated asks for bounded resource usage (#8051), workspace runtime ownership (#8213), and concurrent session transcript integrity (#7164).
- **External integration channels:** Email (IMAP/SMTP) (#8281), cloud deployment (#8291), and direct external context providers (#7585) — users want Qwen Code to connect to more systems beyond shell/HTTP.
- **Voice & media:** Audio bridge for attachments (#8332), trusted private ASR base URLs (#8350), and inline terminal images (#8305) — expanding modalities beyond text.
- **Review & verification maturity:** Maven multi-module support (#8394), structured Web Shell review artifacts (#8402), and terminal capture for evidence (#8388) — `qwen review` is maturing into a serious code-quality tool.

---

## 6. Developer Pain Points

- **Windows process identity:** The `node.exe` process name makes task management, logging, and external tool integration unreliable — a clean rename to `qwen.exe` is requested (#8376).
- **Terminal flicker on Windows:** ConEmu/Cmder users experience full-screen flicker during streaming output; resolved by DEC mode 2026 but still a top complaint (#8385 → #8406).
- **Session loss on restart:** Desktop v0.0.5 on Windows silently deletes sessions after restart due to cwd mismatch (#8400) — a P1 reliability issue.
- **Abort error misclassification:** OpenAI-compatible providers using `auth_type=openai` misclassify user cancellations because `isAbortError` doesn't recognize `APIUserAbortError` (#8398 → #8356).
- **Deferred tool discovery breaks prompt cache:** Prompt-cache stability during deferred tool discovery was a known gap, addressed in #8276 but indicates ongoing tension between dynamic tool loading and caching.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026‑08‑03

## 1. Today's Highlights
The v0.9.4 release‑blocker cycle is actively addressing agent‑spawn surface complexity and fleet‑config silent shadowing ([#5123](https://github.com/Hmbown/CodeWhale/issues/5123), [#5098](https://github.com/Hmbown/CodeWhale/issues/5098)). Several pull requests target provider‑neutral model resolution, skill/MCP lifecycle management, and goal‑loop durability, indicating a push toward more stable multi‑agent workflows and clearer configuration semantics.

## 2. Releases
No new releases in the last 24 h.

## 3. Hot Issues
| # | Title | Why it matters | Community reaction |
|---|-------|----------------|---------------------|
| [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) | Sidebar sessions panel with auto‑resume & history browsing | Persistent session navigation reduces friction for users with many conversations. | 12 comments, 0 👍 |
| [#998](https://github.com/Hmbown/CodeWhale/issues/998) | Text display incomplete (Chinese) | UX bug where long prompts are truncated without hover‑tooltip fallback. | 11 comments, 1 👍 |
| [#689](https://github.com/Hmbown/CodeWhale/issues/689) | `deepseek doctor` passes but `deepseek run` fails | Diagnostic mismatch suggests config‑resolution or runtime‑initialization gaps. | 10 comments, 0 👍 |
| [#1004](https://github.com/Hmbown/CodeWhale/issues/1004) | `/dryrun` command to preview next completion request | Enables safe iteration on long prompts, tool definitions, and cached context without side‑effects. | 8 comments, 0 👍 |
| [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) | Session hangs after large‑text processing | Subagent‑spawn timeout leads to dead sessions when analyzing multi‑million‑character works. | 6 comments, 0 👍 |
| [#1829](https://github.com/Hmbown/CodeWhale/issues/1829) | SSH connection failure (exit 255) inside TUI shell sandbox | Suggests outbound TCP 22 may be blocked by the integrated shell environment. | 5 comments, 0 👍 |
| [#5134](https://github.com/Hmbown/CodeWhale/issues/5134) | How to adjust context length | Users notice auto‑compression at 128K while models support up to 1M context. | 2 comments, 0 👍 |
| [#855](https://github.com/Hmbown/CodeWhale/issues/855) | Auto‑switch profiles to continue | Load‑balancing across multiple API accounts requires transparent fallback on rate‑limit errors. | 2 comments, 0 👍 |
| [#5098](https://github.com/Hmbown/CodeWhale/issues/5098) | Fleet config silent shadowing | Edits to `~/.codewhale/agents/builder.toml` appear ignored because `.codewhale/agents/` overrides are not surfaced. | 1 comment, 0 👍 |
| [#5123](https://github.com/Hmbown/CodeWhale/issues/5123) | v0.9.4 release‑blocker: agent‑spawn surface too many knobs | Labeled `builder` delegates report read‑only tool contracts and self‑BLOCKED state. | 1 comment, 0 👍 |

## 4. Key PR Progress
| # | Title | Description |
|---|-------|-------------|
| [#5124](https://github.com/Hmbown/CodeWhale/pulls/5124) | Fix spawn: fall back to session route when role/profile model is foreign | Resolves hard‑rejects when Fleet spawns from non‑DeepSeek parent sessions (xai, moonshot). |
| [#5127](https://github.com/Hmbown/CodeWhale/pulls/5127) | Add offline deterministic test corpus for web search/fetch retrieval | Covers ranking, deduplication, domain filtering, truncation, citation metadata, and fallback receipt structure. |
| [#5133](https://github.com/Hmbown/CodeWhale/pulls/5133) | [WIP] Expose persistent goal‑loop state and completion controls | Adds `codewhale‑state` dependency, `thread_goals` capability, and REST handlers for goal inspection. |
| [#5128](https://github.com/Hmbown/CodeWhale/pulls/5128) | [WIP] Update notification policy for actionable and consistent branding | Introduces focus‑aware suppression, per‑event‑kind cooldowns, and a `disabled_events` config field. |
| [#5131](https://github.com/Hmbown/CodeWhale/pulls/5131) | [WIP] Add memory inspection and lifecycle controls to runtime API | Exposes `GET /v1/memory` (list by scope), and likely future CRUD endpoints for managed memory entries. |
| [#5132](https://github.com/Hmbown/CodeWhale/pulls/5132) | [WIP] Expose verifier evidence beyond the `verifier_failed` counter | Adds `/v1/fleet/runs/{run_id}/receipts` with full run‑id, task‑id, worker‑id, attempt, result, and redacted evidence. |
| [#5126](https://github.com/Hmbown/CodeWhale/pulls/5126) | [WIP] Fix goal loop to allow completion beyond 10 continuations | Adds configurable `max_continuations` to `GoalBudget` and workflow config, defaulting to `u32::MAX`. |
| [#5129](https://github.com/Hmbown/CodeWhale/pulls/5129) | [WIP] Add skill install, update, uninstall, trust, and audit operations | Introduces `skill_lifecycle` capability and REST handlers for `POST /v1/skills/install`, `/{name}/update`, `DELETE`, etc. |
| [#5125](https://github.com/Hmbown/CodeWhale/pulls/5125) | [WIP] Fix fleet config silent shadowing issue | Tracks shadowed layers in `FleetRoster`, emits deprecation warnings when `[fleet.profiles]` is non‑empty, and badges shadowing members in the UI. |
| [#5130](https://github.com/Hmbown/CodeWhale/pulls/5130) | [WIP] Add bounded MCP server configuration and lifecycle management | Adds `mcp_server_management` capability, redaction helpers, and routes for MCP server CRUD (`POST /v1/apps/mcp/servers`, `GET /v1/apps/mcp/servers`, etc.). |

## 5. Feature Request Trends
- **Session & conversation management** – persistent sidebar, auto‑resume, history browsing, and context‑length tuning.
- **Debugging & inspection** – `/dryrun` preview, verifier‑receipt detail, goal‑loop state exposure, and dry‑run of tool contracts.
- **Configuration clarity & transparency** – fleet‑config shadowing detection, provider‑neutral model resolution, and profile‑switching fallback.
- **Multi‑agent & subagent reliability** – continuation‑chain resume, stale‑state isolation, worktree contention fixes, and non‑progressing‑turn detection.
- **Extension & skill lifecycle** – install/update/uninstall/trust/audit APIs, bounded MCP server management, and skill‑lifecycle capability flags.
- **Platform & localization** – Termux/Android arm64 support, FreeBSD npm binary, expanded i18n coverage for commands and widgets.
- **Performance & cost visibility** – cache‑read pricing in model catalog, decomposed spend by route/token class, and auto‑profile switching for rate‑limit resilience.

## 6. Developer Pain Points
- **Session hangs after large‑scale processing** – subagent‑spawn timeouts cause dead conversations when analyzing multi‑million‑character texts.
- **Diagnostic mismatches** – `deepseek doctor` reports healthy while `deepseek run` fails to start or produce output.
- **Shell‑sandbox network restrictions** – SSH connections (TCP 22) fail with exit 255 inside the TUI’s integrated shell.
- **Fleet‑config silent overrides** – edits to agent‑level config files are shadowed by higher‑priority directories without warning.
- **Model‑resolution & provider switching** – spawning subagents from non‑DeepSeek parent sessions hard‑rejects when the role model does not belong to the session provider.
- **Image‑rendering confusion** – interleaved or duplicated images during execution break the TUI layout.
- **Slow large‑file operations** – merging analysis reports into local documents incurs extremely low cache hit and long save times.
- **IDE integration instability** – VS Code crashes or exits unexpectedly when YOLO Agent autonomously runs test scripts in the background.
- **Missing preview/debug tools** – no way to inspect the exact completion request (system prompt, cached repo files, tool definitions, `@mentions`) before sending, especially costly for V4 Pro users.
- **Context‑length ceiling** – automatic compression at 128K while underlying models support up to 1M, with no user‑adjustable knob.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*