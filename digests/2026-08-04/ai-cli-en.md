# AI CLI Tools Community Digest 2026-08-04

> Generated: 2026-08-04 01:26 UTC | Tools covered: 9

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
**Date: 2026-08-04**

---

## 1. Ecosystem Overview

The AI CLI tool landscape in early August 2026 is characterized by rapid iteration, with all nine tracked projects actively shipping releases or nightly builds. The ecosystem is maturing from single-session coding assistants toward multi-agent, cross-session workflows with persistent state, while simultaneously grappling with platform-specific stability gaps—particularly on Windows and WSL. Enterprise adoption signals are emerging through demands for multi-account isolation, quota transparency, and deterministic security boundaries around agent execution.

---

## 2. Activity Comparison

| Tool | Hot Issues | Active PRs | Release (Last 24h) |
|---|---|---|---|
| **Claude Code** | 10 | 2 (docs) | v2.1.221 |
| **OpenAI Codex** | 10 | 10 | rust-v0.147.0-alpha.6, alpha.1.2 |
| **Gemini CLI** | 10 | 10 | v0.55.0-nightly.20260803 |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.78 |
| **Kimi Code CLI** | 3 | 8 (5 open) | — |
| **OpenCode** | 10 | 10 | v1.18.12 |
| **Pi** | 10 | 10 | — |
| **Qwen Code** | 10 | 10 | v0.21.4 |
| **DeepSeek TUI** | 10 | 10 | v0.9.4 (in progress) |

---

## 3. Shared Feature Directions

| Theme | Tools Involved | Specific Needs |
|---|---|---|
| **Cross-session memory & continuity** | Claude Code (#24798), OpenCode (#16077), Pi (harness v2), Qwen Code (#8400), DeepSeek TUI (#2492) | Persistent context across sessions; project-level state sharing between isolated agents |
| **Multi-session / multi-agent coordination** | Claude Code (#24798, #76727), Gemini CLI (#21409, #22323), OpenCode (#27167) | Inter-session communication, subagent autonomy, graceful failure recovery |
| **Cost & quota transparency** | Claude Code (#13585, 115👍), OpenAI Codex (#33685), Qwen Code (#8452) | CLI-accessible usage data, predictable rate limits, prompt-cache optimization |
| **MCP & auth compliance** | OpenAI Codex (#33403), Gemini CLI (#28481), Qwen Code (#8382), DeepSeek TUI (#5130) | RFC 8707 `resource` parameter, OAuth refresh reliability, MCP conformance testing |
| **Multi-account / enterprise isolation** | OpenAI Codex (#12029, 62👍), Pi (#7161), Claude Code (#81317) | Per-workspace identity, org-level policy enforcement, selective tool enablement |
| **Platform parity (Windows/WSL)** | All 9 tools report Windows/WSL issues | Path resolution, shell integration, terminal emulation quirks |
| **Agent security & trust boundaries** | Qwen Code (#8102, #8125), OpenCode (#4298), DeepSeek TUI (#1917) | Pre-execution policy providers, abort-error handling, undo-capable tool hooks |

---

## 4. Differentiation Analysis

| Dimension | Leader / Notable | Approach |
|---|---|---|
| **Release cadence** | OpenAI Codex, Gemini CLI | Daily alpha/nightly builds with rapid fix cycles |
| **Enterprise focus** | GitHub Copilot CLI, Pi | Built-in model switching, BYOK, Copilot Enterprise integration |
| **Agent autonomy** | OpenCode, DeepSeek TUI | Session goals, persistent memory, subagent lifecycle APIs |
| **Chinese-market support** | Qwen Code, Kimi Code CLI | Local provider presets (Kimi, Xiaomi MiMo, Bailian), GBK console handling |
| **Protocol compliance** | OpenAI Codex | Official MCP conformance test harness; RFC-aware OAuth |
| **Extensibility** | Claude Code, Pi | Hook systems (PreToolUse/PostToolUse), plugin marketplace, session storage backends |
| **Web UI integration** | OpenCode, Kimi Code CLI | Browser-based session management, in-app dev-server preview |
| **Open-source posture** | OpenCode, Qwen Code, DeepSeek TUI | Full source availability, community-driven feature requests, public PR pipelines |

---

## 5. Community Momentum & Maturity

| Maturity Tier | Tools | Rationale |
|---|---|---|
| **High momentum, rapid iteration** | OpenAI Codex, Gemini CLI, Qwen Code | Daily releases, 10+ active PRs, structured release trains, strong issue triage |
| **Steady evolution, established base** | Claude Code, GitHub Copilot CLI | Regular releases with focused PRs; high-upvote feature requests signal engaged power-user bases |
| **Fast-growing, technical debt visible** | OpenCode, Pi, DeepSeek TUI | High PR volume with architectural refactors underway (harness v2, session backends, v0.9.4 train) |
| **Emerging, niche focus** | Kimi Code CLI | Smaller issue volume but active contributor-driven fixes; Chinese-market specialization |

**Highest community engagement:** Claude Code (#13585 quota visibility: 115👍), OpenAI Codex (#20214 Windows freezes: 78👍, #12029 multi-account: 62👍), OpenCode (#27167 session goals: 123👍).

---

## 6. Trend Signals

1. **Multi-agent orchestration is the next frontier.** Across Claude Code, Gemini CLI, and OpenCode, the dominant unmet need is inter-session communication and subagent reliability—not single-turn quality. Tools that ship robust multi-agent primitives first will capture power-user workflows.

2. **Platform fragmentation is a trust risk.** Every tool reports Windows/WSL-specific bugs (path handling, terminal emulation, shell integration). Developers targeting enterprise users should prioritize tools with the most active Windows regression tracking (OpenAI Codex, Claude Code).

3. **Cost opacity is eroding user trust.** The #13585 quota request (115👍) on Claude Code and parallel concerns on OpenAI Codex (#33685) and Qwen Code (#8452) signal that pricing transparency is becoming a purchase criterion, not a nice-to-have.

4. **MCP compliance is becoming table stakes.** OpenAI Codex's conformance test harness and recurring OAuth refresh bugs across Gemini CLI, OpenAI Codex, and Kimi Code CLI indicate the community expects RFC-level correctness, not best-effort integration.

5. **Persistent memory is a feature waiting to mature.** Cross-session memory requests span OpenCode, DeepSeek TUI, Pi, and Qwen Code. Tools that solve this correctly—without privacy regressions (flagged in Gemini CLI #26525)—will differentiate significantly.

6. **Security boundaries around agent execution are being debated publicly.** Qwen Code's #8102 proposing deterministic tool-execution boundaries, paired with DeepSeek TUI's universal hook layer (#1917) and OpenCode's sandbox tool enablement (#4298), suggests the industry is converging on a model where agents operate inside verifiable trust boundaries rather than full system access.

---

*Report generated from community digests across 9 AI CLI tool repositories as of 2026-08-04.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
**Data as of 2026-08-04 | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| # | PR | Skill | Status |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator (fix)** — `run_eval.py` recall fix | OPEN |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** — mechanical verification + reasoning quality gate | OPEN |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** — typographic quality control | OPEN |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | **odt** — OpenDocument text creation & template filling | OPEN |
| 5 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** — full-stack testing methodology | OPEN |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** — meta evaluation skills | OPEN |
| 7 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** — color naming systems, spaces, and palettes | OPEN |
| 8 | [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** — lifecycle management for planning artifacts | OPEN |

**Discussion highlights:**

- **PR #1298** — The most technically consequential PR. A critical bug in `run_eval.py` reports `recall=0%` on every evaluation, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`). Multiple contributors have converged on overlapping fixes (#1099, #1050, #1323, #1261), all stemming from the same root issue in trigger detection and Windows subprocess handling.
- **PR #1367** — A self-audit skill that performs mechanical file verification followed by four-dimension reasoning quality checks. Appeals to power users seeking pre-delivery quality gates.
- **PR #514** — Addresses a widely felt pain point: typographic defects (orphans, widows, numbering misalignment) in AI-generated documents. Low technical risk, high perceived utility.
- **PR #486** — First major entry targeting OpenDocument Format, reflecting demand beyond the Microsoft-centric `.docx`/`.xlsx` ecosystem.
- **PR #723** — Covers the full testing pyramid (philosophy → unit → React → integration), indicating strong community appetite for structured test-generation guidance.
- **PR #83** — Meta-skills for auditing skill quality and security, directly responding to the trust-boundary concerns raised in [Issue #492](https://github.com/anthropics/skills/issues/492).
- **PR #1302** — A niche-but-well-scoped domain skill (color science), showing the community's interest in vertical expertise layers.
- **PR #1479** — Tackles a lifecycle gap in planning artifacts, a problem flagged by the community as accumulating silently over long sessions.

---

## 2. Community Demand Trends

From open and closed issues, four dominant demand vectors emerge:

| Theme | Key Issues | Signals |
|---|---|---|
| **Quality assurance & governance** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments), [#83](https://github.com/anthropics/skills/pull/83), [#412](https://github.com/anthropics/skills/issues/412) (6 comments) | Strong interest in security audit, agent governance, and trust boundary enforcement. |
| **Test generation & patterns** | [#723](https://github.com/anthropics/skills/pull/723), [#1385](https://github.com/anthropics/skills/issues/1385) | Community wants structured testing methodology, not just code generation. |
| **Developer tooling & platform compatibility** | [#1298](https://github.com/anthropics/skills/pull/1298), [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099), [#1061](https://github.com/anthropics/skills/issues/1061) | Windows compatibility is a persistent friction point across skill-creator scripts. |
| **Org/enterprise sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍), [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) | Desire for org-wide skill distribution; duplicate-install bugs are a top complaint. |

**Additional signals:** Compact agent memory ([#1329](https://github.com/anthropics/skills/issues/1329)), MCP-native skill exposure ([#16](https://github.com/anthropics/skills/issues/16)), and Bedrock integration ([#29](https://github.com/anthropics/skills/issues/29)) round out emerging interests.

---

## 3. High-Potential Pending Skills

These active PRs are technically complete, well-scoped, and address clear community demand. They are strong candidates for near-term merge:

| PR | Skill | Why It's High-Potential |
|---|---|---|
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves a universal, daily pain point with minimal risk. No dependencies, pure guidance. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained, well-defined scope. Fills a gap in design-domain skills. |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Addresses a lifecycle gap explicitly named by the community (#1417). Direct response to user demand. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | High vote count on related issues; comprehensive scope covers the full testing pyramid. |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt** | Expands format support beyond Microsoft-centric skills. Low maintenance, broad audience in open-source/enterprise Linux. |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Directly addresses the #492 security concern. Meta-skills are novel and defensible. |

> **Note:** The skill-creator fix PRs (#1298, #1323, #1261, #1099, #1050) are consolidated around a single root cause. The community is waiting on one integrated resolution rather than five separate merges.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **reliable skill-creator tooling and quality assurance**—the ability to author, evaluate, and verify skills is currently broken by a recall-detection bug that affects every description-optimization loop, and the trust-boundary concerns around community skills make robust audit/governance skills an urgent priority alongside the fix itself.

---



# Claude Code Community Digest — 2026-08-04

## 1. Today's Highlights

Claude Code v2.1.221 ships with a new VSCode Focus view for reducing UI noise during tool-heavy turns, plus sandbox credential masking on Linux. Community attention remains fixated on multi-session coordination workflows and persistent macOS network instability, while a strong quota-visibility feature request garners over 115 upvotes.

## 2. Releases

**v2.1.221** — Key changes:
- **[VSCode] Focus view**: A chat-menu toggle (`Ctrl+Alt+F` or command palette) that hides per-turn tool activity behind an expandable summary with a live running-tool indicator.
- **Sandbox credential masking**: Added `mode: "mask"` support for credential files on Linux.

## 3. Hot Issues

1. **#24798 — Inter-session communication for multi-Claude workflows** [61 comments · 20 👍](https://github.com/anthropics/claude-code/issues/24798)
   Long-standing enhancement requesting direct project-level coordination between siloed sessions, enabling dependency-sequenced multi-module work. High comment volume signals sustained demand.

2. **#5674 — Persistent ECONNRESET errors on macOS** [52 comments · 48 👍](https://github.com/anthropics/claude-code/issues/5674)
   Recurring network disconnects reported exclusively on macOS; same network works on Windows and Linux. Strong community signal of a platform-specific regression.

3. **#71542 — GitHub connector links repos but cannot access any content** [48 comments · 42 👍](https://github.com/anthropics/claude-code/issues/71542)
   Account-wide read regression affecting both public and private repos — a recent breaking change that blocks core GitHub integration.

4. **#30492 — Real-time steering: priority message channel** [31 comments · 60 👍](https://github.com/anthropics/claude-code/issues/30492)
   Feature request to redirect Claude mid-execution during multi-step workflows; 60 upvotes make it one of the most-supported open enhancements.

5. **#13585 — Add quota information access to CLI** [24 comments · 115 👍](https://github.com/anthropics/claude-code/issues/13585)
   The highest-upvoted open issue by a wide margin — users want programmatic access to usage/quota data for cost management.

6. **#80468 — Claude Desktop app crashing after latest update on Windows** [12 comments](https://github.com/anthropics/claude-code/issues/80468)
   Post-update crash report; low engagement suggests it may be environment-specific but raises flags for Windows desktop users.

7. **#65687 — Unexpected token usage spike while inactive** [10 comments · 1 👍](https://github.com/anthropics/claude-code/issues/65687)
   Cost-impacting bug where Claude Code continues consuming tokens while seemingly idle; users are watching closely despite low vote count.

8. **#76727 — Cross-session coordination for independently-launched sessions** [9 comments](https://github.com/anthropics/claude-code/issues/76727)
   Companion to #24798; specifically calls out the lack of primitives beyond PreToolUse `deny` hooks for multi-session teams.

9. **#41743 — App refuses to start claiming another instance is running** [9 comments · 4 👍](https://github.com/anthropics/claude-code/issues/41743) · **CLOSED (stale)**
   Zombie-process lock bug triggered by updates; stale closure suggests the issue may resurface with new releases.

10. **#83687 — Stop hook exit-2 verdict silently discarded with pending ScheduleWakeup** [2 comments](https://github.com/anthropics/claude-code/issues/83687)
    Hooks-based reliability bug: stop-hook verdicts disappear when turns end on tool results with a scheduled wakeup, affecting automation correctness.

## 4. Key PR Progress

1. **#83374 — docs(plugin-dev): document MessageDisplay streaming semantics** [[PR](https://github.com/anthropics/claude-code/pull/83374)]
   Fills a gap in the bundled Hook Development skill by adding `MessageDisplay` to trigger descriptions, event guidance, and the quick-reference table.

2. **#77977 — docs(plugin-dev): document skipLfs marketplace sources** [[PR](https://github.com/anthropics/claude-code/pull/77977)]
   Documents the `skipLfs` option for `github` and `git` marketplace source objects, with examples for GitHub shorthand and generic Git URLs that skip LFS downloads.

*(Only 2 PRs updated in the last 24h; both are documentation improvements for plugin development.)*

## 5. Feature Request Trends

- **Multi-session coordination**: Dominant theme across #24798, #76727, and #30492 — users building team or module-parallel workflows need first-party primitives for inter-session communication, shared state, and mid-execution steering.
- **Cost & quota transparency**: #13585 (115 👍) and #81015 reflect strong demand for CLI-accessible usage data and a read-only `usage:read` scope on `setup-token`.
- **Microsoft 365 write tools**: #81317 requests per-plan enablement of M365 write capabilities, indicating enterprises want granular control over Office integration permissions.
- **Editor ecosystem expansion**: #83693 requests JetBrains/Rider support in the desktop "Open in" menu, widening the editor compatibility gap.

## 6. Developer Pain Points

- **macOS network instability**: ECONNRESET bugs (#5674, #77733) recur across both CLI and Desktop, suggesting a systemic macOS TLS/HTTP client issue.
- **GitHub integration regressions**: Authenticated connectors that can't read (#71542) or write (#80874) reflect recent OAuth/API permission regressions that block core workflows.
- **Windows Desktop reliability**: Crashes after updates (#80468), missing HCS services (#80584), and signed-binary issues (#83656) create a fragmented Windows experience.
- **Token cost opacity**: Inactive consumption (#65687) and lack of quota APIs (#13585) make cost predictability difficult, especially for power users running long sessions.
- **Hook fragility**: Silent hook failures (#82323, #83687) and misleading verdicts undermine automation reliability, a critical gap for teams building on Claude Code's plugin system.
- **MCP spec regressions**: Statelessness changes broke header-bound context for servers like Microsoft Business Central (#81965), and JSON Schema `$ref` resolution fails for Google Stitch (#76040).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-04

## 1. Today's Highlights

Two alpha releases landed in the Rust codebase (0.147.0-alpha.6 and 0.147.0-alpha.1.2), while the community continues to report persistent Windows desktop performance and connectivity issues. A cluster of related bugs around subagent model availability (`gpt-5.6-luna` / `gpt-5.6-sol`) and rate-limit regressions dominated discussion, and a wave of internal PRs addressed infrastructure hardening around MCP conformance, session persistence, and process cleanup.

## 2. Releases

| Version | Notes |
|---|---|
| **rust-v0.147.0-alpha.6** | Alpha release; see linked release notes. |
| **rust-v0.147.0-alpha.1.2** | Alpha release; see linked release notes. |

> Full release details: [GitHub Releases](https://github.com/openai/codex/releases)

## 3. Hot Issues

### 1. Codex App frequently freezes/stutters on Windows 11 Pro
**[#20214](https://github.com/openai/codex/issues/20214)** · 88 comments · 78 👍 · Open
The highest-engagement issue this cycle. Users on mid-range hardware (Ryzen 5 5600, 32 GB RAM) report frequent freezes and stuttering despite ample resources, suggesting a platform-specific performance regression rather than a hardware-limit problem.

### 2. Work/Codex stream disconnects on OneDrive-backed workspaces
**[#35420](https://github.com/openai/codex/issues/35420)** · 30 comments · Open
Requests fail with `stream disconnected before completion` when the Windows workspace sits inside OneDrive and the service is degraded. A clear reproducibility path for enterprise users whose orgs enforce OneDrive sync.

### 3. Weekly limit draining faster than the old 5-hour limit
**[#33685](https://github.com/openai/codex/issues/33685)** · 25 comments · 10 👍 · Open
Since the 5-hour cap was removed, the weekly quota appears to deplete at a rate comparable to the old limit, causing confusion among Plus and Pro subscribers. A related report (**[#32791](https://github.com/openai/codex/issues/32791)**) confirms the 5-hour limit disappeared entirely from Plus accounts.

### 4. Full RTL support for Arabic & Hebrew
**[#19504](https://github.com/openai/codex/issues/19504)** · 24 comments · 19 👍 · Open
A long-standing enhancement request for native RTL rendering in both Codex and Chat panels. The community continues to push for this, with punctuation and text-alignment issues flagged as blockers for Arabic/Hebrew-speaking developers.

### 5. `gpt-5.6-luna` rejected by V2 `spawn_agent` (MultiAgent V1 marker)
**[#35097](https://github.com/openai/codex/issues/35097)** · 14 comments · 37 👍 · Open
Marked as a bug; the model is incorrectly tagged MultiAgent V1, causing V2's `spawn_agent` to reject it. A nearly identical issue (**[#34700](https://github.com/openai/codex/issues/34700)**) was filed from Windows, and a third report (**[#34964](https://github.com/openai/codex/issues/34964)**) notes `spawn_agent` simply doesn't expose `gpt-5.6-luna` at all. The cluster suggests a model-metadata regression in the latest alpha.

### 6. Browser Use Node REPL fails in Windows + WSL
**[#29639](https://github.com/openai/codex/issues/29639)** · 14 comments · Open
The Desktop app generates a Windows `node_repl.exe` MCP server, but tool calls transmit a Linux/WSL `sandboxCwd`, causing the REPL to fail. A cross-platform sandbox-path mismatch.

### 7. WSL repos reported as "non-Git" / "Git is unavailable"
**[#35119](https://github.com/openai/codex/issues/35119)** · 14 comments · 13 👍 · Open
Starting with package `26.721.3404`, valid WSL repositories are no longer recognised as Git repos. The regression appeared between `26.715.10079.0` and `26.721.3404`, pointing to a recent change in Git detection logic.

### 8. Ability to use more than one account
**[#12029](https://github.com/openai/codex/issues/12029)** · 12 comments · 62 👍 · Open
A highly-upvoted enhancement: users need separate personal and corporate (org/policy/billing) accounts on the same machine. Cross-surface auth sharing remains a blocker for enterprise adoption.

### 9. Desktop thread tools intermittently lose handlers (`No handler registered`)
**[#28080](https://github.com/openai/codex/issues/28080)** · 12 comments · Open
During active sessions on Windows 11, tool handlers disappear unpredictably, breaking the agent mid-workflow. A reliability concern for long-running autonomous sessions.

### 10. MCP OAuth refresh omits RFC 8707 `resource` parameter
**[#33403](https://github.com/openai/codex/issues/33403)** · 4 comments · 6 👍 · Open
Authenticated MCP servers break after access-token expiry because the OAuth refresh request is missing the `resource` parameter. A standards-compliance bug affecting remote Streamable HTTP MCP servers.

## 4. Key PR Progress

| PR | Status | Summary |
|---|---|---|
| [#36815](https://github.com/openai/codex/pull/36815) | Closed | Identify agents by canonical name in token-budget context instead of thread ID; root sessions emit `/root`, subagent sessions emit their own path. |
| [#36812](https://github.com/openai/codex/pull/36812) | Closed | Dual-WebSocket transport for code mode — a second token-scoped WebSocket prevents large nested-tool callbacks from blocking unrelated session operations. |
| [#36811](https://github.com/openai/codex/pull/36811) | Closed | Honor per-environment login-shell policy, including inherited environments where the child thread has a different policy. |
| [#36810](https://github.com/openai/codex/pull/36810) | Closed | MCP client conformance regression gates — harness runs the Codex executable against the official MCP conformance suite across protocol versions, transports, and OAuth scenarios. |
| [#36809](https://github.com/openai/codex/pull/36809) | Closed | Prefer the state database for `exec resume --last` lookups instead of auditing every rollout file. |
| [#36808](https://github.com/openai/codex/pull/36808) | Closed | Prefer SQLite names for local `archive`, `delete`, and `unarchive` commands, falling back to rollout scanning only when needed. |
| [#36800](https://github.com/openai/codex/pull/36800) | Closed | Avoid reinjecting full permission lists after command approvals; only newly approved prefixes are emitted, reducing world-state snapshot bloat. |
| [#36793](https://github.com/openai/codex/pull/36793) | Closed | Terminate timed-out Git process trees via dedicated process groups (Unix) and Job Objects (Windows) to prevent orphaned helper processes. |
| [#36796](https://github.com/openai/codex/pull/36796) | Closed | Parse Agent Plugins MCP config — translates v1 `mcp.json` files into Codex MCP server config, normalising stdio and streamable HTTP transports. |
| [#36781](https://github.com/openai/codex/pull/36781) | Closed | Per-surface MCP tool exposure controls (`omit_tools_from`) so servers can opt out of direct exposure, tool search, or Code Mode independently. |

## 5. Feature Request Trends

- **Multi-account / multi-org support** — Issue [#12029](https://github.com/openai/codex/issues/12029) (62 👍) and [#30418](https://github.com/openai/codex/issues/30418) (Gmail multi-account) reflect a clear demand for per-workspace or per-surface identity isolation.
- **RTL / i18n support** — Issue [#19504](https://github.com/openai/codex/issues/19504) continues to gather traction; Arabic and Hebrew users need native rendering direction and punctuation handling.
- **Background event notification** — Issue [#29922](https://github.com/openai/codex/issues/29922) proposes an agent-callable `monitor` tool so Codex can react to logs, file changes, and CI events without polling.
- **Ghost-suggestion UX controls** — Issue [#10562](https://github.com/openai/codex/issues/10562) requests the ability to disable inline ghost text in the CLI input, a quality-of-life improvement for terminal users.
- **Heavy-dependency feature-gating** — Issue [#13091](https://github.com/openai/codex/issues/13091) (closed) pushed for feature-gating to trim the ~80 MB binary; while closed, it signals ongoing community interest in a leaner CLI footprint.

## 6. Developer Pain Points

1. **Windows desktop stability** — The single most repeated frustration. Freezes/stutters ([#20214](https://github.com/openai/codex/issues/20214)), OneDrive connectivity drops ([#35420](https://github.com/openai/codex/issues/35420)), WSL repo detection regressions ([#35119](https://github.com/openai/codex/issues/35119)), sandbox path mismatches ([#29639](https://github.com/openai/codex/issues/29639)), and tool-handler loss ([#28080](https://github.com/openai/codex/issues/28080)) all point to Windows as the weakest surface.

2. **Rate-limit regressions** — Users report the weekly limit draining faster than the old 5-hour cap ([#33685](https://github.com/openai/codex/issues/33685), [#32791](https://github.com/openai/codex/issues/32791), [#24818](https://github.com/openai/codex/issues/24818)), and a silent quota mismatch in Codex Cloud auto code review ([#15477](https://github.com/openai/codex/issues/15477)). Trust in the usage metering system is eroding.

3. **Subagent / model availability bugs** — `gpt-5.6-luna` and `gpt-5.6-sol` are inconsistently exposed across surfaces ([#35097](https://github.com/openai/codex/issues/35097), [#34700](https://github.com/openai/codex/issues/34700), [#34964](https://github.com/openai/codex/issues/34964), [#34027](https://github.com/openai/codex/issues/34027)), suggesting a model-metadata or registration issue in the latest alpha cycle.

4. **MCP & auth compliance** — OAuth refresh missing the RFC 8707 `resource` parameter ([#33403](https://github.com/openai/codex/issues/33403)) and session-state leaks across concurrent projects ([#24224](https://github.com/openai/codex/issues/24224)) are the most technical pain points, affecting power users and enterprise configurations.

5. **Session persistence & recovery** — Full-Access sessions reverting to per-action approval after restart ([#34453](https://github.com/openai/codex/issues/34453)) and `exec resume` appending to Desktop transcripts without updating the UI index ([#28259](https://github.com/openai/codex/issues/28259)) break long autonomous agent runs and reduce confidence in session continuity.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-04

## 1. Today's Highlights

A nightly build **v0.55.0-nightly.20260803** was released, accompanied by a flurry of stability and reliability fixes focused on context corruption, malformed response handling, and agent fallback behavior. The community is actively surfacing subagent recovery bugs and Auto Memory edge cases as the primary pain points.

## 2. Releases

- **[v0.55.0-nightly.20260803.gf47d6c6f7](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7)** — Nightly build with ongoing core and agent hardening.

## 3. Hot Issues

| # | Issue | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | 12 | 2 | The `codebase_investigator` subagent falsely reports success after hitting its turn limit, silently hiding interruptions — a critical correctness bug for multi-agent workflows. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | 8 | 8 | The generalist agent locks up on simple tasks (e.g., folder creation) for extended periods. Workaround: disable sub-agents. High community sympathy (8 upvotes). |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | 7 | 0 | Epic tracking behavioral eval coverage across 76 tests and 6 Gemini model variants — key for release quality assurance. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, and mapping | 7 | 1 | Investigates whether AST-aware tools can reduce turn waste and token noise by reading precise method bounds — potential performance win. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini underuses skills and sub-agents | 6 | 0 | Users report Gemini rarely invokes custom skills or sub-agents autonomously, undermining the extensibility design. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | 5 | 0 | Sessions the extraction agent dismisses as low-signal are never marked processed, causing infinite re-surfacing in the inbox. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction & Auto Memory logging reduction | 4 | 0 | Sensitive transcript data reaches the model *before* redaction occurs — a security and privacy gap in the Auto Memory pipeline. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command stuck "Waiting input" after completion | 4 | 3 | Simple CLI commands hang with an active "Awaiting user input" status despite finishing — frustrates basic automation workflows. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent lock recovery | 4 | 0 | Feature request for automatic session takeover when a persistent browser profile is locked by an orphaned process. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | 4 | 1 | The browser subagent crashes on Wayland compositors, blocking Linux users with modern desktop environments. |

## 4. Key PR Progress

| # | PR | Area | Description |
|---|----|------|-------------|
| [#28673](https://github.com/google-gemini/gemini-cli/pull/28673) | feat(core): add Gemini 3.6 Flash and 3.5 Flash-Lite configs | Core | Adds model definitions, capabilities (`thinking`, `multimodalToolUse`), aliases, and Code Assist support for two new Flash-tier models. |
| [#28671](https://github.com/google-gemini/gemini-cli/pull/28671) | fix: resolve context corruption and quota error fallback | Core/CLI | Defensively hardens conversation history against corruption when tool executions are interrupted or quota errors trigger fallback paths. |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | fix: repair `/compress` session reload and quota-fallback response loss | Core/CLI | Fixes two independent bugs: `/compress` now correctly reloads session data, and lost tool responses during quota fallback are restored. |
| [#28657](https://github.com/google-gemini/gemini-cli/pull/28657) | fix: prevent malformed GitHub JSON from crashing extensions | Extensions | `JSON.parse()` in `fetchJson` was unguarded; malformed or truncated API responses now raise structured errors instead of uncaught exceptions. |
| [#28663](https://github.com/google-gemini/gemini-cli/pull/28663) | fix: harden `fetchJson` against malformed JSON and stream failures | Extensions | Complements #28657 — stream `error`/`aborted` handlers added and `JSON.parse` failures reject the promise cleanly. |
| [#28658](https://github.com/google-gemini/gemini-cli/pull/28658) | fix: don't start voice recording before providers are ready | Core | `TranscriptionProvider.connect()` now resolves only when the backend (Whisper or Gemini Live) is fully initialized, preventing silent recording failures. |
| [#28660](https://github.com/google-gemini/gemini-cli/pull/28660) | fix: keep `sendStream` alive on malformed tool arguments | SDK | Invalid tool arguments are now defensively parsed and returned as structured `functionResponse` errors instead of crashing the stream. |
| [#28670](https://github.com/google-gemini/gemini-cli/pull/28670) | fix: correct fallback on model capacity errors for GCA agent mode | Core | Resolves an infinite retry loop when `MODEL_CAPACITY_EXHAUSTED` (HTTP 429) occurs — now falls back to alternate models like Flash. |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | fix: refresh MCP OAuth tokens with stored client ID | Security | OAuth token refresh for dynamically registered MCP servers was failing locally and deleting stored credentials, forcing re-auth every session. |
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | fix: preserve `thoughtSignature` in functionCall parts | Core | Fixes a v0.53.0 regression that stripped `thoughtSignature` from parallel tool calls, causing 400 Bad Request errors from the API. |

## 5. Feature Request Trends

- **Subagent autonomy and reliability** — Multiple issues (#21968, #22323, #21409) converge on the desire for subagents that trigger contextually without explicit prompting and recover gracefully from failures.
- **Auto Memory hardening** — Issues #26522, #26525, #26523, #26516 collectively push for robust inbox management, deterministic redaction, and better invalid-patch quarantine.
- **AST-aware tooling** — Issues #22745 and #22746 explore whether parsing-aware reads and searches can meaningfully reduce token waste and improve codebase navigation.
- **Browser agent resilience** — Requests for Wayland support (#21983), lock recovery (#22232), and settings override respect (#22267) indicate the browser subagent needs production-grade robustness.
- **Eval infrastructure** — Component-level evaluations (#24353) and subagent trajectory visibility via `/chat share` (#22598) show growing investment in measurable quality assurance.

## 6. Developer Pain Points

1. **Context/session corruption** — The most recurring theme. Bugs in `/compress` reload (#28672), history hardening (#28671), and quota-fallback response loss (#28672) indicate that session state management under interrupt conditions remains fragile.
2. **Subagent reliability** — Hangs (#21409), false success reports (#22323), and silent underuse (#21968) suggest the agent orchestration layer needs significant robustness work before it can be trusted in production workflows.
3. **Shell command stalls** — Commands completing but leaving the CLI in a stuck "Waiting input" state (#25166) disrupts automation and is a high-salience frustration.
4. **Auto Memory privacy gaps** — Sensitive data reaching the model before redaction (#26525) and infinite retry on dismissed sessions (#26522) are eroding trust in the memory system.
5. **Extension error handling** — Malformed API responses crashing extensions (#28657, #28663) and OAuth token refresh failures (#28481) point to insufficient defensive coding in external-facing code paths.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-04

## 1. Today's Highlights

Copilot CLI **v1.0.78** shipped yesterday with timeline headers for tool-call durations, first-party plugin auto-updates at session start, and an experimental `/new-worktree` command for branching into new worktrees with fresh conversations. The release also improves the interactive shell shortcut and defaults login to the browser flow on local desktop.

## 2. Releases

### v1.0.78 — 2026-08-03
- **Tool-call timeline headers** — right-aligned, ticking live during calls ≥ 5 s; disable with `/settings showToolDurations`
- **First-party plugins** auto-update to the latest version at session start
- **Experimental `/new-worktree`** — create a new worktree and start a new conversation in it
- **Interactive shell shortcut** now launches on Enter and shows an inline hint when `$` is armed
- **Copilot login** now defaults to the browser flow on local desktop

> [GitHub Releases](https://github.com/github/copilot-cli/releases)

## 3. Hot Issues

| # | Title | Upvotes | Comments | Status |
|---|-------|---------|----------|--------|
| [#1665](https://github.com/github/copilot-cli/issues/1665) | Plugins scoped to Project/Repository | 18 👍 | 14 | ✅ Closed |
| [#3282](https://github.com/github/copilot-cli/issues/3282) | Multiple BYOK models via env var | 20 👍 | 7 | 🔓 Open |
| [#1464](https://github.com/github/copilot-cli/issues/1464) | Skills beyond position ~32 unreachable | 7 👍 | 6 | 🔓 Open |
| [#4078](https://github.com/github/copilot-cli/issues/4078) | Scheduled prompts kill the prompt queue | 0 👍 | 5 | ✅ Closed |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | `/model` switch including BYOK/local in-session | 20 👍 | 3 | 🔓 Open |
| [#2286](https://github.com/github/copilot-cli/issues/2286) | Git symlinks in plugin install on Windows | 0 👍 | 3 | 🔓 Open |
| [#2830](https://github.com/github/copilot-cli/issues/2830) | Custom color themes | 6 👍 | 2 | 🔓 Open |
| [#4337](https://github.com/github/copilot-cli/issues/4337) | gpt-5.6-luna advertised but not accessible via `/chat/completions` | 0 👍 | 2 | ✅ Closed |
| [#2714](https://github.com/github/copilot-cli/issues/2714) | Toggle plugins enabled/disabled | 11 👍 | 2 | 🔓 Open |
| [#4298](https://github.com/github/copilot-cli/issues/4298) | Sandbox config to selectively enable tools | 1 👍 | 1 | 🔓 Open |

**Why these matter:** The top-voted issues cluster around **model flexibility** (#3282, #3709 — 20 upvotes each), **plugin governance** (#1665, #2714), and **Windows/WSL parity** (#2286, #4328). The scheduled-prompt bug (#4078) was resolved but highlighted queue-handling fragility. The `gpt-5.6-luna` API discrepancy (#4337) was closed, yet it exposed a real gap between model listing and actual endpoint availability for aggregator tooling.

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The latest merged work is reflected in the v1.0.78 release.

## 5. Feature Request Trends

- **BYOK & multi-model flexibility** — Users repeatedly want in-session model switching and support for multiple BYOK/local providers without restarting (Issues #3282, #3709, #4345, #4340).
- **Plugin governance** — Scoped-to-repo plugins (#1665), toggling without uninstall (#2714), and selective tool enablement in sandbox mode (#4298) point to a demand for finer-grained plugin and tool control.
- **Terminal UX polish** — Scrollable conversation history (#4313), custom themes (#2830), and table rendering fixes (#2412, #4347) show persistent interest in a more refined interactive experience.
- **Cross-platform reliability** — Windows/WSL-specific keyboard shortcuts (#4328, #2286, #4267) and OSC 9;4 progress-bar opt-out (#4352) indicate the team should prioritize parity across shell environments.

## 6. Developer Pain Points

- **Model lock-in during sessions** — BYOK pins to one model; switching requires session termination, which disrupts workflow.
- **Plugin visibility limits** — With many skills installed, alphabetically later entries become unreachable due to token-bound system-prompt truncation (#1464).
- **Prompt-queue fragility** — Scheduled prompts can silently clear the existing queue instead of inserting into it (#4078).
- **Windows/WSL input handling** — `Ctrl+H` is misinterpreted as `Ctrl+Backspace` under WSL2 when `WT_SESSION` leaks from Windows Terminal (#4328); zellij sessions also receive raw escape sequences on startup (#4267).
- **Enterprise policy validation gaps** — Managed settings reject valid enum values like `"enable"` for `permissions.disableBypassPermissionsMode` (#4349), and Actions `GITHUB_TOKEN` receives a 403 on MCP registry fetch, blocking non-default MCP servers in CI (#4346).
- **Session-resume inconsistency** — Resuming a session ignores the requested model while honoring reasoning effort, producing confusing UX (#4340). Stashed prompts (`Ctrl+S`) are also lost on session switch (#4334).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-04

---

## 1. Today's Highlights

The past 24 hours were dominated by a wave of bug-fix PRs from contributor **ayaangazali**, addressing reliability gaps in the web UI banner, shell pipe handling, and ACP question signaling. Two closed PRs also shipped a **kosong 0.56.0** dependency bump and fixed a stray `anthropic-beta` header. On the issue side, a persistent **Memory System** feature request continues to gather traction, while two new bugs surfaced around the Web UI session spinner and CLI stream hangs.

---

## 2. Releases

No new releases in the last 24 hours. The most recent landed release is **kosong 0.56.0** (PR #2581, closed).

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#2582](https://github.com/MoonshotAI/kimi-cli/issues/2582) | CLI stream hangs indefinitely during generation | Critical reliability bug — a session becomes unusable mid-generation on Windows with `kimi-k2.7-code`. No comments yet; likely early-stage impact. |
| [#2573](https://github.com/MoonshotAI/kimi-cli/issues/2573) | Web UI "Connecting to session…" infinite spinner | Blocks session switching in the `kimi web` technical preview on macOS arm64. Affects UX for anyone using the browser interface. |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Feature Request: Memory System | Long-standing enhancement (open since Feb 2026, 15 comments) asking for persistent cross-session context and user-defined instructions. A high-value roadmap item that would significantly improve developer workflow. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#2577](https://github.com/MoonshotAI/kimi-cli/pull/2577) | fix(web,vis): do not crash printing startup banner on legacy console codecs | 🟢 Open | Fixes a crash on GBK consoles (e.g., Chinese Windows) when the startup banner contains `➜` (U+279C). Resolves #2532. |
| [#2575](https://github.com/MoonshotAI/kimi-cli/pull/2575) | fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger | 🟢 Open | Prevents dangling async hook tasks from being garbage-collected before completion. Resolves #2564. |
| [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) | fix(tools): count StrReplaceFile replacements against running content | 🟢 Open | Self-contained correctness fix: the success message now counts replacements accurately against the running document content. |
| [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) | fix(shell): stop blocking until timeout when a detached child holds the pipes | 🟢 Open | Fixes a hang where `_run_shell_command` waits forever for EOF on stdout/stderr when a detached child process keeps the pipes open (e.g. `some_daemon & echo done`). Resolves #2468. |
| [#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507) | fix(acp): signal QuestionNotSupported instead of resolving empty answers | 🟢 Open | ACP server now correctly signals `QuestionNotSupported` rather than returning an empty dict, which was indistinguishable from the user dismissing the question. Resolves #2495. |
| [#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581) | chore(release): bump kosong to 0.56.0 | ✅ Closed | Bumps `kosong` to 0.56.0, updates root dependency pin, and moves release notes. |
| [#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580) | fix(kosong): omit empty anthropic-beta header when no beta features declared | ✅ Closed | Removes the unconditional `anthropic-beta` header from `Anthropic._streamed_request`, fixing a verification report against kosong 0.55.0. |
| [#2535](https://github.com/MoonshotAI/kimi-cli/pull/2535) | fix(llm): scope prompt cache keys to Moonshot APIs | 🟢 Open | Ensures third-party Kimi-compatible endpoints no longer receive Moonshot's `prompt_cache_key` parameter, while official APIs retain session caching. Resolves #2534. |

---

## 5. Feature Request Trends

The single open feature request this period is **#1283 — Memory System**, which calls for:

- **Persistent context across sessions** (both AI-managed notes and user-defined instructions via custom commands)
- **Project pattern memory** (remembering codebases, conventions, and preferences)
- **Manual memory** (user-configurable instructions)

This reflects a broader community desire for **continuity and personalization** — developers want the CLI to "remember" their workspace rather than starting cold each session. No other feature requests appeared in the 24h window.

---

## 6. Developer Pain Points

1. **CLI stream hangs** (#2582) — generation can dead-lock the session, leaving users with a broken terminal. This overlaps with the shell pipe hang fix in PR #2530, suggesting the underlying I/O handling needs ongoing attention.
2. **Web UI session management is fragile** (#2573) — the infinite spinner on session switch indicates race conditions or missing state reconciliation in the technical preview.
3. **Legacy console / encoding crashes** (#2532, fixed in PR #2577) — non-UTF-8 consoles (especially GBK on Chinese Windows) break startup banner rendering, a recurring friction point for international users.
4. **Hook reliability** (#2564, fixed in PR #2575) — async tasks being dropped by `asyncio`'s `WeakSet` is a subtle but impactful issue for users relying on `PostToolUse` hooks.
5. **Third-party endpoint compatibility** (#2534, fixed in PR #2535) — Moonshot's prompt cache key leaking into non-Moonshot API calls causes confusion and potential billing/compatibility issues for users running compatible endpoints.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026‑08‑04

## 1. Today's Highlights
OpenCode v1.18.12 was released, fixing Azure GPT‑5.5+ reasoning‑effort failures and reducing desktop composer lag with large attachments. Community discussion is dominated by feature requests for native session goals and persistent memory, alongside several high‑visibility bugs affecting streaming reliability, desktop stability, and cross‑platform configuration sync.

## 2. Releases
**v1.18.12** (last 24h)  
- **Core:** Fixed Azure GPT‑5.5+ completion requests failing when reasoning is enabled.  
- **Desktop:** Reduced composer lag when drafts include large pasted images or attachments. Project search now matches any known recent project instead of only the first five.

## 3. Hot Issues
1. **#27167 – Add native session goals with /goal** (67 comments, 123 👍)  
   High‑demand feature for persistent, session‑scoped objectives. Community actively debating implementation.

2. **#16077 – Persistent Session Memory** (12 comments, 3 👍)  
   Request for loading previous conversation context at startup to enable continuity between sessions.

3. **#36942 – Vertical tabs** (10 comments, 16 👍)  
   UI improvement to address horizontal‑tab overcrowding and improve session navigation.

4. **#38932 – Pasting long text hangs Desktop app** (4 comments)  
   Bug where pasting 5,000+ characters freezes the prompt box indefinitely.

5. **#39207 – GitHub OAuth login fails with empty email** (CLOSED, 4 comments)  
   Server‑side SQL error during OAuth callback when the email parameter is missing.

6. **#40314 – Unable to connect to the first certificate** (4 comments)  
   SSL‑certificate connection failures reported by users on certain networks (e.g., MTN Broadband).

7. **#20600 – Desktop app randomly scrolls to middle of conversation** (4 comments, 2 👍)  
   Intermittent viewport‑jump bug that disrupts chat reading during active sessions.

8. **#40319 – Connection to unreachable provider retries without error** (3 comments)  
   `opencode run` hangs for 60+ seconds when a provider’s baseURL is unreachable, with no error surfaced.

9. **#37096 – Web UI Session List Empty on Windows/WSL** (3 comments, 5 👍)  
   Project auto‑registration fails on Windows/WSL, leaving the Web UI session list empty.

10. **#40347 – OpenCode app freeze** (2 comments)  
    User‑reported app freeze even after reinstall; debug logs suggest an update‑related issue.

## 4. Key PR Progress
1. **#40268 – fix(session): retry top‑level stream request timeouts** (OPEN)  
   Retries stream timeouts that return HTTP 200 with SSE error events.

2. **#40144 – fix(tui): reject unavailable project destinations** (CLOSED)  
   Prevents selecting deleted project directories in the TUI project picker.

3. **#40198 – fix(opencode): match canonically equivalent Unicode in patches** (OPEN)  
   Adds Unicode‑equivalence matching to patch verification.

4. **#36710 – fix(core): bound event log compaction** (OPEN)  
   Introduces bounded compaction for event logs with dry‑run and apply modes.

5. **#40188 – feat(plugin): add request‑scoped chat.model hook** (OPEN)  
   Allows plugins to replace the model for a single request before provider resolution.

6. **#18209 – feat: App – Support setting base URL during build** (OPEN)  
   Enables hosting the OpenCode app under a URL prefix via `VITE_BASE_URL`.

7. **#38790 – feat(app): add workspace flows to new layout** (OPEN)  
   Adds Local/New/Existing workspace selection with persisted drafts and updated guidance.

8. **#40334 – feat(tui): make permission mode keybind configurable** (OPEN)  
   Allows users to bind a key to toggle auto‑approve permissions.

9. **#40337 – feat(desktop): localhost browser preview for sessions** (OPEN)  
   Adds an in‑app browser‑preview panel to interact with a session’s dev server.

10. **#40320 – docs: add autonomous agents guide with reboot‑resume** (CLOSED)  
    Documents a pattern for running OpenCode agents unattended with SQLite‑based persistence.

## 5. Feature Request Trends
- **Session continuity & memory** – Persistent goals (#27167), session‑long memory (#16077), and timestamp precision (#35348) indicate strong demand for stateful, reusable workflows.
- **UI/UX customization** – Vertical tabs (#36942), configurable keybinds (#40334), and diff‑viewer refinements (#40285) show users seeking more control over

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-04

## 1. Today's Highlights

The Pi project is in a busy patch cycle with several critical bugs being addressed simultaneously: WebSocket retry gaps, compaction race conditions, and JSON mode quadratic output are all seeing active PR work. On the feature side, in-memory harness v2 storage and a new server session backend are progressing, while a new Cortecs provider has just been added. Windows path handling and Copilot Enterprise compaction remain the most-discussed pain points in issues.

## 2. Releases

**No new releases** were published in the last 24 hours.

## 3. Hot Issues

1. **[Bug] Pi login hangs in WSL after browser-based GitHub Copilot device authorization** (#6187) — 20 comments · [Link](https://github.com/earendil-works/pi/issues/6187)
   The device registration completes in the browser but the WSL terminal never picks it up. A high-friction blocker for Copilot users on WSL; no thumbs-up but the comment volume signals it's a common pain point.

2. **[Bug] Compaction using Copilot Enterprise not possible** (#6768) — 17 comments · 18 👍 · [Link](https://github.com/earendil-works/pi/issues/6768)
   Context compaction fails with a 421 "Misdirected Request" from the OpenAI API for Copilot Enterprise users. The strong thumbs-up count confirms broad impact across the paid Copilot user base.

3. **[Bug] WSL absolute Windows paths are mishandled** (#7064) — 11 comments · [Link](https://github.com/earendil-works/pi/issues/7064)
   The `read`/`write`/`edit` tools fail to resolve paths correctly on WSL2, causing fallback to full-file replacements. Affects a large segment of Windows-based developer workflows.

4. **[In-Progress] anthropic-messages never sends x-client-request-id** (#7161) — 9 comments · [Link](https://github.com/earendil-works/pi/issues/7161)
   Missing session-affinity headers break Anthropic gateway routing for users with multi-account proxies. Critical for users relying on gateways like CliProxyAPI.

5. **[Bug] xai Grok 4.5 not visible in Copilot Business model list** (#7560) — 3 comments · [Link](https://github.com/earendil-works/pi/issues/7560)
   A newly discovered model-visibility bug specific to the Copilot Business provider. Reported just two days ago; still unconfirmed.

6. **[Bug] JSON mode serializes cumulative assistant state causing quadratic output** (#7395) — 3 comments · [Link](https://github.com/earendil-works/pi/issues/7395)
   Long `--mode json` sessions produce exponentially growing output due to duplicate serialization, stalling stdout. This has an active fix PR (#7561 / #7394).

7. **[Bug] TUI crashes on custom dialog lines exceeding terminal width** (#7528) — 3 comments · [Link](https://github.com/earendil-works/pi/issues/7528)
   An uncaught exception crashes the entire process when a dialog renders wider than the terminal. A regression of the older #911 issue; the fix was never fully effective.

8. **[Bug] find returns no results for path patterns with separators on Windows** (#6817) — 4 comments · [Link](https://github.com/earendil-works/pi/issues/6817)
   Patterns like `src/**/*.ts` silently return no matches on Windows. A fundamental tooling bug with clear community interest.

9. **[Bug] Session discovery silently ignores symlinked directories** (#7497) — 3 comments · [Link](https://github.com/earendil-works/pi/issues/7497)
   Symlinked session directories under `~/.pi/agent/sessions/` are skipped by `listSessions`, making them invisible to `pi-web` and other tools. Fixed in PR #7552.

10. **[Bug] Sometimes Pi doesn't continue after compaction** (#7020) — 9 comments · 2 👍 · [Link](https://github.com/earendil-works/pi/issues/7020)
    Long-running "coordinator" sessions frequently stall after compaction finishes. An ongoing reliability concern for heavy auto-compaction users.

## 4. Key PR Progress

1. **Harness v2 in-memory storage** (#7503) — OPEN · [Link](https://github.com/earendil-works/pi/pull/7503)
   Introduces `SessionStorage`, `SessionRepo`, and `Session` APIs with an in-memory backend. Lays the foundation for backend-neutral session management.

2. **Server session backend** (#7396) — OPEN · [Link](https://github.com/earendil-works/pi/pull/7396)
   Adds a durable JSONL-based session store for `PiServer` with exclusive cross-process locking and crash recovery. Projects harness events into protocol snapshots.

3. **Bound model catalog refreshes** (#7451) — CLOSED · [Link](https://github.com/earendil-works/pi/pull/7451)
   Fixes five open issues (#7027, #7113, #7153, #7418, #7443) related to unbounded or infinite model catalog refresh loops by adding cancellation and queuing.

4. **Stream delta-only `message_update` in JSON mode** (#7561 / #7394) — CLOSED · [Link](https://github.com/earendil-works/pi/pull/7561)
   Resolves quadratic JSON output (Issue #7395) by emitting only delta records instead of cumulative snapshots on every streaming update. Applies stdout backpressure.

5. **Normalize `find` root results on Windows** (#7569) — CLOSED · [Link](https://github.com/earendil-works/pi/pull/7569)
   Fixes path relativization in the `find` tool by using `.relative()` consistently and handling path selectors via native Node facilities instead of hand-rolled heuristics.

6. **Discover sessions through symlinked directories** (#7552) — CLOSED · [Link](https://github.com/earendil-works/pi/pull/7552)
   Fixes Issue #7497 by traversing symlinked directories under the global sessions root, with proper error handling for broken and non-directory links.

7. **Prevent auto-compaction race during manual compaction** (#7370) — CLOSED · [Link](https://github.com/earendil-works/pi/pull/7370)
   Fixes the duplicate compaction bug (Issue #7253) by keeping the session subscribed to agent events during manual compaction, removing the old disconnect/reconnect cycle.

8. **Resum after context-limited length stops** (#7540) — CLOSED · [Link](https://github.com/earendil-works/pi/pull/7540)
   Treats length stops as context overflow when prompt usage is within 1% of the configured window, allowing compaction to resume rather than hard-failing.

9. **Add built-in Cortecs provider support** (#7571) — CLOSED · [Link](https://github.com/earendil-works/pi/pull/7571)
   Adds European AI provider/router [Cortecs](https://cortecs.ai) as a new built-in provider, backed by models.dev.

10. **Switch UI modes at runtime** (#7555) — CLOSED · [Link](https://github.com/earendil-works/pi/pull/7555)
    Allows toggling between TUI modes (e.g., fullscreen, normal) without restarting the process. Described as an alternative design by the author.

## 5. Feature Request Trends

- **Flexible compaction control** — Users want per-operation thinking level configuration (Issue #7553), reliable post-compaction continuation (Issue #7020, #7253), and resilience to context-limited length stops (PR #7540). Compaction is the dominant reliability concern.
- **Cross-platform path & tooling parity** — Multiple issues (WSL paths #7064, Windows `find` #6817, drive-root `find` #6104) point to a strong demand for consistent path semantics across Windows/WSL/Linux environments.
- **Server-side & in-memory session backends** — Two major PRs (#7396, #7503) indicate active investment in pluggable session storage, enabling headless/server deployments and reducing filesystem coupling.
- **OpenAI background mode** — PR #7339 proposes supporting `background: true` for non-blocking responses, following the harness v2 spec.
- **Opaque API key support for custom Codex providers** — PR #7546 addresses the need for standard Bearer keys on custom gateways, separate from the built-in JWT/ChatGPT validation.

## 6. Developer Pain Points

- **Copilot Enterprise compaction failure** (#6768) — The 421 error during context compaction is a hard blocker for a significant paid user segment and has drawn the most community support (18 👍).
- **WSL as a first-class environment is undersupported** — Three separate issues (#6187, #7064, #7547) highlight path handling, login flows, and general Windows/WSL UX gaps. The community survey request in #7547 signals the maintainers acknowledge this fragmentation.
- **JSON mode is unusable for long sessions** (#7395) — Quadratic output growth from cumulative serialization was silently degrading performance until PRs #7561 and #7394 addressed it.
- **WebSocket retry is too narrow** (#7444) — Only two error codes trigger reconnection in `openai-codex-responses`; any other transient `response.failed` hard-stops the turn, frustrating users behind unreliable proxies.
- **TUI crashes on terminal resize or wide content** (#7528, #911) — The terminal-width overflow crash recurs across environments (Kitty, Termux, SSH), suggesting the truncation logic needs a systemic fix rather than per-component patches.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-04

## 1. Today's Highlights

Qwen Code v0.21.4 shipped with Web Shell now graduating to a release-ready desktop app featuring native lifecycle management, single-instance behavior, and automatic updates (#8132). The community is actively discussing a trustworthy agent runtime direction that keeps the language model outside the trust boundary while deterministically constraining tool execution (#8102). Meanwhile, a cluster of session-management and MCP stability bugs surfaced this week, pointing to ongoing hardening work around deferred tool discovery and interrupted turns.

## 2. Releases

**v0.21.4** — The latest release. Web Shell is now a desktop-quality app with proper lifecycle management, single-instance enforcement, and auto-updates. (Note: v0.21.5 release failed on the quality gate; see #8476.)

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | Deterministic tool-execution boundaries for a trustworthy agent runtime | Proposes keeping the LLM outside the trust boundary and making the runtime able to constrain, authorize, observe, and evaluate model-produced actions — a foundational shift for agent security. | 13 comments, active discussion; author chiga0 also has a companion PR (#8125) adding an external pre-execution policy provider. |
| [#8316](https://github.com/QwenLM/qwen-code/issues/8316) | Prompt not restored to input box when canceling (Ctrl+C) | High-UX-bug: users lose their drafted prompt after cancellation and must retype, blocking iterative refinement workflows. | 7 comments; straightforward reproduction path makes it a quick win. |
| [#8382](https://github.com/QwenLM/qwen-code/issues/8382) | Duplicate provider tool call id | Tool calls fail with "Duplicate provider tool call id" errors, disrupting session continuity — especially problematic in daemon/MCP-heavy setups. | 6 comments; indicates a deduplication gap in the tool-call ID generator. |
| [#8326](https://github.com/QwenLM/qwen-code/issues/8326) | Fork agents inherit sibling fork directives via last model message | Parallel `agent` tool calls leak each other's function-call context, causing context pollution across forked sub-agents. | 4 comments, 1 👍; closed — confirms the bug was real and impactful for multi-fork workflows. |
| [#8432](https://github.com/QwenLM/qwen-code/issues/8432) | Bailian Personal Token Plan models out of sync; image/video generation fails | Built-in model list for Alibaba ModelStudio Token Plan diverges from the live console, breaking auth flow and media-generation features. | 4 comments; P2 priority; directly impacts Chinese-market users. |
| [#8452](https://github.com/QwenLM/qwen-code/issues/8452) | Size-triggered microcompaction repeatedly invalidates prompt cache | Microcompaction rewrites already-cached conversation prefixes on consecutive ToolResult turns, negating cache hits and increasing latency/cost. | 3 comments; performance-critical for long sessions. |
| [#8398](https://github.com/QwenLM/qwen-code/issues/8398) | `isAbortError` doesn't recognize OpenAI SDK's `APIUserAbortError` | User cancellations on the `auth_type=openai` path (the most common provider) are misclassified as non-aborts, breaking session transcript integrity. | 3 comments; companion PR #8399 fixes this. |
| [#8400](https://github.com/QwenLM/qwen-code/issues/8400) | Sessions silently auto-deleted after app restart (Windows Desktop) | ACP `session/load` failure due to cwd mismatch causes all sessions to vanish on relaunch — data-loss severity, P1. | 3 comments; affects Windows Desktop v0.0.5 users. |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | After `APIUserAbortError`, subsequent turns not written to local transcript | Abort errors corrupt the session transcript write path, causing permanent history gaps in OpenAI-compatible setups. | 3 comments; same root-cause cluster as #8398. |
| [#8281](https://github.com/QwenLM/qwen-code/issues/8281) | Add an Email channel with IMAP and SMTP support | Community-requested async communication channel for agent interactions — would enable background task workflows and notification-driven agent use. | 5 comments; ambitious feature request with clear scope definition. |

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#8260](https://github.com/QwenLM/qwen-code/pull/8260) | fix(core): preserve every reasoning episode's signature during history consolidation | Fixes a bug where turn consolidation kept only the first `thoughtSignature`, losing reasoning traces in turns with multiple parallel tool calls. |
| [#8125](https://github.com/QwenLM/qwen-code/pull/8125) | feat(serve): add a required external tool guard provider | Adds an opt-in pre-execution policy provider for `qwen serve` ACP deployments — the companion to Issue #8102's trustworthy runtime vision. |
| [#8399](https://github.com/QwenLM/qwen-code/pull/8399) | fix(core): recognize OpenAI SDK `APIUserAbortError` as an abort | Teaches `isAbortError` to detect the OpenAI SDK's abort exception, fixing the misclassification that broke transcripts on user cancel (#8398, #8356). |
| [#8488](https://github.com/QwenLM/qwen-code/pull/8488) | fix(core): harden Qwen 3.8 reasoning effort wire shape | Follow-up to #8472 — resolves competing thinking knobs by dropping `enable_thinking` and `thinking_budget` when `reasoning_effort` is present. |
| [#8276](https://github.com/QwenLM/qwen-code/pull/8276) | fix(core): preserve prompt cache across deferred tool discovery | Keeps provider tool declarations and cached system instructions stable while deferred tools are discovered, preventing cache invalidation during tool search. |
| [#8482](https://github.com/QwenLM/qwen-code/pull/8482) | fix(core): a never-delivered MCP call is a first delivery, not a replay | Fixes a regression where auto-reconnect on MCP connection error was incorrectly treated as a replay, causing test failures on main. |
| [#8397](https://github.com/QwenLM/qwen-code/pull/8397) | docs: add legacy code audit (`/audit`) design doc | Design doc for a new `/audit <path>` skill that reuses the `/review` machinery (dimension fan-out, verification shards) on merged code instead of diffs. |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | feat(auth): add Kimi and Xiaomi MiMo providers | Adds first-class presets for Kimi (Coding Plan, API Key CN/Intl) and Xiaomi MiMo (pay-as-you-go, CN/SG) to the `/auth` flow. |
| [#8467](https://github.com/QwenLM/qwen-code/pull/8467) | feat(web-shell): add Git diff sources and branch switching | Expands Web Shell Git tooling with Uncommitted/Staged/Committed/branch comparison sources and searchable commit/branch selectors. |
| [#7925](https://github.com/QwenLM/qwen-code/pull/7925) | fix(core): sweep stale worktree project snapshots on startup | Cleans up orphaned `.qwen/projects/` snapshots left by crash/force-kill paths in worktree sessions, preventing disk bloat. |

## 5. Feature Request Trends

1. **Trustworthy agent runtime** — Issue #8102 and PR #8125 reflect a growing community demand for deterministic security boundaries around agent tool execution, especially for enterprise/ACP deployments.
2. **Multi-channel agent communication** — Email channel (#8281) and GitHub local auth (#8461) show interest in extending Qwen Code beyond the terminal into async and devops workflows.
3. **Web Shell maturation** — Git sources (#8467), read-only mid-turn commands (#8496), and session refresh with daemon auth (#8445) indicate the Web Shell is being treated as a first-class interface, not a secondary feature.
4. **Fork and sub-agent isolation** — Issue #8326 (closed) and PR #8274 (fork from any conversation) show active investment in making parallel fork agents truly independent.
5. **Provider expansion** — Kimi and Xiaomi MiMo (#8368) continue the pattern of broadening third-party provider support for the Chinese market.

## 6. Developer Pain Points

- **Session transcript corruption after aborts** — Issues #8398, #8356, and #8400 form a cluster around abort/error handling in OpenAI-compatible and ACP sessions, causing lost history and silent data deletion. This is the most impactful pain point this cycle.
- **MCP stability** — Duplicate tool call IDs (#8382), stale session registrations on metadata hot-reload (#8492), and failed subsequent queries in resumed sessions (#8433) indicate MCP integration is a fragility hotspot.
- **Prompt cache invalidation** — Issue #8452 (microcompaction) and the deferred-tool cache fix (#8276) show that prompt caching is fragile under compaction and dynamic tool discovery, directly impacting latency and cost.
- **UI rendering in terminal emulators** — Flickering output in ConEmu/Cmder (#8385), inaccessible tab switching in Warp (#8330), and moving/thought-panel rendering issues (#8319) point to ongoing terminal-UX friction on Windows and niche terminals.
- **Model list drift** — Issue #8432 (Bailian Token Plan) and #8470 (long model name truncation on mobile) reflect the pain of keeping built-in provider metadata in sync with live cloud consoles.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-04

## 1. Today's Highlights
The v0.9.4 release train is actively being assembled and stabilized, with a major stack of runtime API, TUI hygiene, and rail‑unification PRs landing today. Community discussion is focused on improving Chinese‑input‑method compatibility, standardizing remote‑workbench flows across Tencent/Cloudflare lanes, and extending the Agent’s control surface with a `/stop` command and pre/post‑tool‑use hooks.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
1. **[enhancement] Register with Agent Client Protocol registry** (#3192)  
   Listing the project in the ACP registry would make discovery and installation (especially in Zed) significantly easier. 13 comments show active interest in ecosystem integration.  
   https://github.com/Hmbown/CodeWhale/issues/3192

2. **[bug/enhancement] Fleet model classes & loadout auto** (#3205)  
   The maintainer outlines a unified loadout selector for TUI, CLI, subagents, and Fleet workers—a core architectural piece for v0.9.3. The discussion is shaping the user‑facing “Fleet loadout auto” mode.  
   https://github.com/Hmbown/CodeWhale/issues/3205

3. **[enhancement] Support OpenCode Go/Zen as a DeepSeek provider** (#1481)  
   Users want to connect the TUI to OpenCode Go/Zen endpoints (which offer DeepSeek‑V4 at low cost). The issue highlights a gap in provider coverage and has attracted 10 comments and 1 up‑vote.  
   https://github.com/Hmbown/CodeWhale/issues/1481

4. **[enhancement] Add a `/stop` command with runtime intercept** (#4959)  
   Proposes a reliable way to halt autonomous workflows (YOLO/deep‑agent) via a slash command or sentinel word. 7 comments indicate strong demand for better workflow control.  
   https://github.com/Hmbown/CodeWhale/issues/4959

5. **[discussion] Chinese translation of “Constitution”** (#4949)  
   A localization debate over whether to use “宪法” (Constitution) or “协作准则” (Cooperation Guideline). The author invites native‑speaker feedback to resolve the tension between accuracy and cultural sensitivity.  
   https://github.com/Hmbown/CodeWhale/issues/4949

6. **[documentation/enhancement] CLI/TUI parity for subagent runtime** (#4022)  
   Ensures that subagent status, expand/collapse, and cancellation controls are accessible not only in the TUI sidebar but also via CLI and future cloud apps. 7 comments discuss the multi‑surface design.  
   https://github.com/Hmbown/CodeWhale/issues/4022

7. **[bug] Lack of cross‑session memory** (#2492)  
   Users report that the agent forgets previous‑session context after restart and does not automatically read persisted memory. The issue is a recurring pain point for long‑running workflows.  
   https://github.com/Hmbown/CodeWhale/issues/2492

8. **[enhancement] Universal PreToolUse/PostToolUse hook layer** (#1917)  
   Proposes a unified hook lifecycle that provides cancel‑with‑rollback, pause, and resume for any tool‑calling action—a foundational reliability improvement. 5 comments show architectural interest.  
   https://github.com/Hmbown/CodeWhale/issues/1917

9. **[documentation/enhancement] OpenAI Codex/ChatGPT OAuth route verification** (#2984)  
   Validates whether the OAuth route can move from preview to supported status, complementing the live‑account verification slice for the Responses wire protocol.  
   https://github.com/Hmbown/CodeWhale/issues/2984

10. **[documentation] Dead‑code sweep** (#4785)  
    Highlights that 464 `#[allow(dead_code)]` attributes across 143 files mask compiler drift. The issue calls for a systematic cleanup to improve code‑base health.  
    https://github.com/Hmbown/CodeWhale/issues/4785

## 4. Key PR Progress
1. **v0.9.4 release train** (#5135) – Open  
   The integration branch that supersedes previous release candidates. Currently 77 commits ahead of `main`, including the core train commits and numerous feature/fix slices.  
   https://github.com/Hmbown/CodeWhale/pull/5135

2. **Expose persistent goal‑loop state & completion controls** (#5133) – Open  
   Adds `/v1/threads/{id}/goal` endpoints to the Runtime API, allowing managed clients to read active‑goal state and drive lifecycle transitions.  
   https://github.com/Hmbown/CodeWhale/pull/5133

3. **Bounded MCP server configuration & lifecycle management** (#5130) – Open  
   Introduces `POST /v1/apps/mcp/servers` so clients can create, update, and remove MCP servers without editing TOML/JSON directly.  
   https://github.com/Hmbown/CodeWhale/pull/5130

4. **Runtime API memory endpoints** (#5131) – Open  
   Adds a `/v1/memory` resource for bounded inspection and lifecycle controls, giving managed clients a first‑class view of active memory scope and provenance.  
   https://github.com/Hmbown/CodeWhale/pull/5131

5. **Skill lifecycle endpoints** (#5129) – Open  
   Extends the Runtime API with install, update, uninstall, trust, and audit routes for skills, closing the gap between TUI and HTTP‑managed clients.  
   https://github.com/Hmbown/CodeWhale/pull/5129

6. **Expose verifier receipts & evidence** (#5132) – Open  
   Adds read‑only endpoints under `/v1/fleet/runs/{run_id}/` to list durable task receipts, enabling clients to identify which task failed and why.  
   https://github.com/Hmbown/CodeWhale/pull/5132

7. **ACP: expose file/search/git/patch/shell tools over session/prompt** (#5225) – Open  
   Allows ACP servers (e.g., Zed, third‑party adapters) to execute tool calls instead of merely streaming text, unlocking real code‑editing capabilities.  
   https://github.com/Hmbown/CodeWhale/pull/5225

8. **Pin ratatui to 0.30.0** (#5192) – Open  
   Fixes a race condition where `ratatui‑core` 0.1.1+ issues a blocking cursor‑position report that competes with the TUI event loop.  
   https://github.com/Hmbown/CodeWhale/pull/5192

9. **Re‑quote Windows linker arguments containing spaces** (#5095) – Open  
   Corrects linker‑argument expansion on Windows so that paths with spaces (e.g., OpenHarmony SDK under `D:\DevEco Studio\...`) are passed correctly to clang.  
   https://github.com/Hmbown/CodeWhale/pull/5095

10. **Train hygiene – locale parity, fmt drift, warnings, budget** (#5227) – Closed  
    Addresses hygiene debt from the v0.9.4 stack: completes zh‑Hant locale keys, resolves a regression from #5110, and cleans up formatting and warning drift.  
    https://github.com/Hmbown/CodeWhale/pull/5227

## 5. Feature Request Trends
- **Deeper ecosystem integration** – Registration with the Agent Client Protocol registry (#3192) and extension of ACP tool exposure (#5225) show a push to make DeepSeek TUI a first‑class peer in editor bridges.
- ** richer remote‑workbench flows** – Multiple issues (#1990, #1984) seek to unify Tencent/Cloudflare/AWS/Telegram lanes into a coherent source‑deploy‑control‑verify pipeline.
- **Stronger workflow control & safety** – Requests for a `/stop` command (#4959), pre/post‑tool‑use hooks (#1917), and read‑before‑edit guardrails (#3364) reflect a demand for more granular, undo‑capable automation.
- **Provider & model‑strategy flexibility** – Support for OpenCode Go/Zen (#1481), OAuth 2.1 for MCP (#1409), and unified loadout selectors (#3205) indicate users want cheaper, more diverse model options and simpler configuration.
- **Localized & accessible UX** – Discussions around Chinese‑translation terminology (#4949), cross‑session memory (#2492), and Chinese‑input‑method compatibility (#2323) highlight ongoing efforts to improve the experience for Chinese‑speaking developers.

## 6. Developer Pain Points
- **Cross‑platform shell & path handling** – Windows‑specific issues (raw `.exe` launch vs. Windows Terminal #1854, PowerShell/cmd mismatches #1754, spaced‑path linker failures #5095) continue to surface.
- **Input‑method & encoding glitches** – Chinese‑input‑method conflicts (#2323) and garbled real‑time agent output (#1675) are frequent complaints that degrade the terminal experience.
- **Missing persistence & memory** – Users expect the agent to retain context across sessions; the current behavior feels “fix‑and‑forget” (#2492).
- **Control‑surface fragmentation** – The TUI sidebar, CLI, and future cloud apps each expose different subsets of subagent and runtime controls, creating confusion (#4022).
- **Code‑base hygiene debt** – Hundreds of `#[allow(dead_code)]` attributes (#4785) and race conditions in TUI rendering (#5192) indicate that technical debt is beginning to impact stability and developer velocity.

---
*Data sourced from github.com/Hmbown/DeepSeek-TUI as of 2026-08-04.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*