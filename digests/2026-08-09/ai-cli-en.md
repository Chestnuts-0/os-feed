# AI CLI Tools Community Digest 2026-08-09

> Generated: 2026-08-09 00:54 UTC | Tools covered: 9

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
**Date:** 2026-08-09 | **Analyst:** Agnes

---

## 1. Ecosystem Overview

The AI CLI tool landscape in mid-2026 is characterized by rapid iteration, maturing subagent architectures, and intensifying competition around session reliability and cross-platform parity. Legacy tools like Claude Code and OpenAI Codex are hardening their enterprise-grade features (billing transparency, workload identity, Guardian approval), while open-source alternatives such as OpenCode, Pi, and CodeWhale are carving niches through extensibility, multi-provider support, and TUI polish. A consistent theme across all eight tools is the transition from single-session assistants to multi-agent orchestration platforms, with communities actively stress-testing subagent lifecycle management, context-window safety, and provider abstraction layers.

---

## 2. Activity Comparison

| Tool | Open Issues (24h) | PRs Updated (24h) | Release (24h) | Release Cadence |
|------|:-:|:-:|---|---|
| **Claude Code** | 10 | 1 | v2.1.225, v2.1.226 | Bi-daily patches |
| **OpenAI Codex** | 10 | 10 | v0.148.0-alpha.5 | Rapid alpha cycle |
| **Gemini CLI** | 10 | 10 | v0.56.0-nightly.20260808 | Nightly builds |
| **GitHub Copilot CLI** | 5 (closed: 2) | 0 | None | Sporadic |
| **Kimi Code CLI** | 2 | 0 | None | Slow |
| **OpenCode** | 10 | 11 | None | Steady PR flow |
| **Pi** | 5 (closed: 5) | 11 | None | PR-heavy, infrequent releases |
| **Qwen Code** | 6 (closed: 2) | 10 | v0.21.8 | Weekly-ish |
| **DeepSeek TUI / CodeWhale** | ~10 (milestone) | 8 | v0.9.5 | Milestone-driven |

*Note: Issue counts reflect distinct items highlighted in each digest; total open issue pools are significantly larger.*

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Community Need |
|-----------|---------------|------------------------|
| **Subagent autonomy & recursion** | Gemini CLI, OpenAI Codex, Pi, CodeWhale | Subagents should invoke other subagents; current implementations report false `GOAL` success or hang after turn limits |
| **Context-window safety & auto-compaction** | Pi, CodeWhale, OpenCode | Compaction must trigger *before* API overflow, not after; double-compact crashes and silent failures reported |
| **Persistent cross-session memory** | Kimi Code, Pi, Qwen Code | Users demand project-level state retention across sessions beyond the single-turn context window |
| **MCP / plugin ecosystem maturity** | Claude Code, OpenCode, CodeWhale | MCP server loading (VS Code), plugin command availability in background sessions, TUI-native server management |
| **Cross-platform shell & hook compatibility** | GitHub Copilot CLI, Claude Code, CodeWhale | POSIX shell operators (`&&`, `||`) broken on Windows; hooks must respect user-configured shell |
| **TUI reliability & UX polish** | OpenAI Codex, Pi, OpenCode, CodeWhale | Multi-line status lines, copy-paste symmetry, terminal mouse reporting, scrollback repaint, IME candidate positioning |
| **Billing & cost transparency** | Claude Code, OpenAI Codex | Silent model switches (Sonnet→Opus), invisible spend caps, "Paid" invoice but Free account; community wants proactive alerts |
| **Session resume fidelity** | GitHub Copilot CLI, Qwen Code, OpenCode | Resuming a session must preserve model, context tier, and permissions—not reset to defaults |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | OpenCode | Pi | Qwen Code | CodeWhale | GitHub Copilot CLI | Kimi Code CLI |
|-----------|------------|--------------|------------|----------|----|-----------|-----------|-------------------|---------------|
| **Primary differentiator** | Enterprise billing & gateway controls | Subagent orchestration depth | Bash-native POSIX alignment | TUI plugin system & session goals | Multi-provider flexibility | Fork-based PR autofix | Rust performance & runtime API | GitHub ecosystem integration | Minimal, emerging |
| **Target user** | Enterprise / org admins | Power users, agent architects | Linux/POSIX developers | Open-source contributors | Multi-account power users | China/global CI workflows | Rust-native TUI users | GitHub Desktop users | Early adopters |
| **Release style** | Patch releases (trust + billing) | Rapid alpha cadence | Nightly builds | PR-driven, occasional releases | PR-heavy, no recent release | Weekly features | Milestone-driven releases | Sporadic, triage-heavy | Very slow |
| **Technical approach** | Gateway spend-limits, workspace trust | Workload-identity auth, Guardian approval | Zero-dependency OS sandboxing | SQLite event store, region-based plugin slots | bun runtime, extension API | Web Shell desktop, compression cache | Rust monolith, runtime REST API | Node.js, ACP protocol | Node.js, single-process |

---

## 5. Community Momentum & Maturity

**Most active communities (by engagement):**
- **Claude Code** — 71 comments on a single billing bug (#79337), 184 👍 on message-queue feature; enterprise users are highly vocal about cost transparency.
- **OpenAI Codex** — 10 PRs closed in 24h with rapid subagent-hardening; Windows Computer Use issues signal a large, actively testing user base.
- **OpenCode** — 128 👍 on session goals (#27167); strong plugin-author community driving SDK v2.
- **Pi** — 76 comments on codex connection reliability (#4945); extension authors actively contributing A-level capabilities.

**Rapidly iterating (highest PR velocity):**
- **OpenAI Codex** — 10 PRs in 24h covering auth, hooks, subagent lifecycle, and security.
- **OpenCode** — 11 PRs in 24h focusing on TUI polish, plugin slots, and session tab UX.
- **Qwen Code** — 10 PRs in 24h with CI reliability, security hardening, and multi-session RFCs.
- **Gemini CLI** — 10 PRs in 24h including OAuth fixes, error-handling improvements, and subagent recursion.

**Maturing but slower:**
- **Claude Code** — Lower PR velocity but high-impact enterprise patches; community issues are platform-critical (billing, trust).
- **CodeWhale** — v0.9.5 milestone consolidation; moving from TUI-only to full runtime API surface.
- **GitHub Copilot CLI** — Triage-heavy (23 issues in 24h) but low PR output; Windows regressions indicate adoption growing faster than fixes.
- **Kimi Code CLI** — Minimal activity; community requests (memory, runaway generation) remain unaddressed.

---

## 6. Trend Signals

| Signal | Evidence | Developer Implication |
|--------|----------|----------------------|
| **Subagent orchestration is the new frontier** | Gemini (#28738 — agents calling agents), Codex (subagent rehydration bugs), Pi (compaction + subagent lifecycle), CodeWhale (fleet run receipts) | Tooling for agent-to-agent communication, timeout handling, and result aggregation will be a key differentiator in 2026–2027. |
| **Context-window safety is fragile across the board** | Pi auto-compaction misses thresholds (#6879), OpenCode SQLite event bloat (#33356), Claude Code context reporting errors (#81693) | Developers should implement client-side token budgeting; do not assume the CLI will safely truncate or compact before API errors. |
| **Windows is a cross-tool reliability gap** | Claude Code GPU crashes (#81698), Codex Computer Use failures (#37180, #37383), Copilot CLI shell-operator bugs (#4399), Qwen Code macOS test flakiness (#8753) | Enterprise deployment on Windows requires careful validation; POSIX assumptions in hook/config systems are a common failure mode. |
| **Billing transparency is a trust issue** | Claude Code silent model switches (#60093, #79337), OpenCode relay model-name bugs (#41300) | Users are losing trust when models switch without consent or invoices don't reflect reality; tools that surface real-time spend and model-usage audits will win enterprise adoption. |
| **Multi-session coordination is emergent demand** | Qwen Code cross-session messaging RFC (#8724, #8718), CodeWhale session peek (#5271), Pi cross-session memory (#7823) | The single-session model is reaching its limit; APIs for inter-session communication, leader/follower orchestration, and shared state will define the next generation of CLI tools. |
| **Open-source tools are closing the extensibility gap** | OpenCode plugin SDK v2 (#12042), CodeWhale runtime API (#5129–#5133), Pi extension API maturation | Proprietary tools (Claude Code, Codex) lock extensibility behind gated APIs; open tools are building richer plugin and runtime surfaces, creating a diverging ecosystem. |
| **TUI quality is table-stakes, not a differentiator** | Every tool has open issues around copy-paste, status lines, terminal cleanup, and mouse reporting | Investment in TUI stability yields diminishing returns vs. backend reliability (session resume, subagent correctness, billing accuracy). |

---

**Bottom line for developers:** The ecosystem is shifting from single-session code assistants to multi-agent orchestration platforms. Tools that solve subagent reliability, cross-session continuity, and billing transparency will capture enterprise users; tools that prioritize extensibility and open protocol support (MCP, runtime APIs) will capture the open-source and power-user segment. Windows reliability and context-window safety remain systemic weaknesses across all tools and should be treated as risk factors in production deployments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-09 · Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| # | Skill | Status | Summary |
|---|-------|--------|---------|
| 1 | **Self-Audit** ([PR #1367](https://github.com/anthropics/skills/pull/1367)) | Open | Mechanical file-verification + four-dimension reasoning quality gate. Universal across projects, tech stacks, and models. Latest iteration (v1.3.0) adds damage-severity prioritisation. |
| 2 | **Color-Expert** ([PR #1302](https://github.com/anthropics/skills/pull/1302)) | Open | Self-contained colour-knowledge skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), colour spaces (OKLCH, OKLAB, CAM16), and practical "what-to-use-when" guidance. |
| 3 | **Pyxel Retro Game Dev** ([PR #525](https://github.com/anthropics/skills/pull/525)) | Open | Wraps the [pyxel-mcp](https://github.com/kitao/pyxel-mcp) server for the Pyxel retro game engine. Covers the write → `run_and_capture` → inspect → iterate loop for 8-bit / pixel-art games. |
| 4 | **Testing Patterns** ([PR #723](https://github.com/anthropics/skills/pull/723)) | Open | Full-stack testing guidance: Testing Trophy model, AAA unit-test pattern, React Testing Library, edge-case strategy — a meta-skill covering what to test and what *not* to test. |
| 5 | **ODT (OpenDocument) Skill** ([PR #486](https://github.com/anthropics/skills/pull/486)) | Open | Creates, fills, reads, and converts ODT/ODS files; also parses ODT → HTML. Triggers on mentions of ODT, ODS, ODF, LibreOffice document, or ISO-standard document requests. |
| 6 | **Document Typography** ([PR #514](https://github.com/anthropics/skills/pull/514)) | Open | Prevents orphan word-wrap (1-6 words on a new line), widow paragraphs, and numbering misalignment in AI-generated documents — a quality-control pass for any document output. |
| 7 | **Frontend-Design Clarity** ([PR #210](https://github.com/anthropics/skills/pull/210)) | Open | Revamped the existing frontend-design skill for specificity and actionability; every instruction is single-conversation-executable with unambiguous behaviour steering. |
| 8 | **SAP-RPT-1-OSS Predictor** ([PR #181](https://github.com/anthropics/skills/pull/181)) | Open | Enables predictive analytics on SAP business data using SAP's open-source tabular foundation model (Apache 2.0, released at TechEd 2025). |

---

## 2. Community Demand Trends

Analysis of the top commented issues reveals four concentrated demand signals:

- **Trust & Namespace Security** — Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) flags that community skills are being distributed under the `anthropic/` namespace, impersonating official skills and creating trust-boundary abuse. The community wants clearer provenance guarantees.
- **Organisation-Level Collaboration** — Issue [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) is the most upvoted open issue, requesting native org-wide skill sharing in Claude.ai to replace the current download-and-Slack workflow.
- **Agent Self-Awareness & Governance** — Issues [#1329](https://github.com/anthropics/skills/issues/1329), [#412](https://github.com/anthropics/skills/issues/412), and [#1385](https://github.com/anthropics/skills/issues/1385) collectively point to demand for skills that manage long-running agent state (compact symbolic memory), enforce governance/audit policies, and add pre-delivery reasoning quality gates.
- **Context-Efficiency & Quality Tooling** — Issues [#1487](https://github.com/anthropics/skills/issues/1487) (skill eagerly injecting ~156 k tokens) and [#189](https://github.com/anthropics/skills/issues/189) (duplicate skills across plugins) highlight a need for better context budgeting and a deduplicated marketplace.

---

## 3. High-Potential Pending Skills

These open PRs have active contributor engagement and address known community pain points; they are likely candidates for near-term merge:

| PR | Focus | Why It's High-Potential |
|----|-------|------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) / [#1323](https://github.com/anthropics/skills/pull/1323) / [#1169](https://github.com/anthropics/skills/issues/1169) | `run_eval.py` recall = 0 % bug | Multiple independent repros; the entire skill-description optimisation loop is broken. Fixing this unblocks the `skill-creator` workflow for everyone. |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | Windows `subprocess` + encoding crashes | Two separate Windows-compatibility fixes; `run_loop.py` is unusable on Windows without them. |
| [#1261](https://github.com/anthropics/skills/pull/1261) | Isolate trigger-eval command files | Fixes a parallel-worker race condition that pollutes the user's live `.claude/commands/` directory during eval. |
| [#538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) | Case-sensitivity & DOCX bookmark corruption | Both fix real document-corruption and cross-platform breakage in widely-used bundled skills. |
| [#1479](https://github.com/anthropics/skills/pull/1479) | Plan-file-hygiene skill | Addresses the acknowledged lifecycle gap for planning artifacts (Issue [#1417](https://github.com/anthropics/skills/issues/1417)); contributor explicitly handing off to a maintainer. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for skills that make Claude Code itself more reliable and governable** — specifically: fixing the broken skill-evaluation pipeline, preventing context-window exhaustion, enabling organisation-level skill sharing, and adding pre-delivery self-audit and memory-management capabilities. The technical-foundation gap (eval + Windows + duplicate namespace) currently outweighs the demand for new domain-specific skills.

---



# Claude Code Community Digest — 2026-08-09

## 1. Today's Highlights

Anthropic shipped two patch releases (v2.1.225, v2.1.226) in the last 24 hours, adding gateway spend-limit reporting to the usage-warning flow and workspace trust prompts for `claude agents`. Meanwhile, the community continues to rally around a high-visibility bug where Fable 5 silently downgrades Max-plan sessions to Opus 4.8 and requests usage credits, now at **71 comments** and **23 👍**.

---

## 2. Releases

| Version | Changes |
|---------|---------|
| **v2.1.226** | Bug fixes and reliability improvements. |
| **v2.1.225** | Gateway spend-limit support added to the usage-warning flow — the limit-reached message now surfaces the cap, its reset time, and the operator's message (requires gateway on 2.1.225). Workspace trust prompt added to `claude agents` for untrusted directories. |

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Status |
|---|-------|----------|-----|--------|
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | Fable 5 prompts 'usage credits required' on Max plan | 71 | 23 | OPEN |
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | Feature Request: Message queue mode | 50 | 184 | OPEN |
| [#29006](https://github.com/anthropics/claude-code/issues/29006) | Enable Remote Control for Claude Code sessions in Claude Desktop | 36 | 119 | OPEN |
| [#19054](https://github.com/anthropics/claude-code/issues/19054) | Claude Code for VS Code does not use MCP servers at all | 24 | 26 | OPEN |
| [#81698](https://github.com/anthropics/claude-code/issues/81698) | Windows Desktop app: GPU process crash kills entire app and all sessions | 15 | 0 | OPEN |
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | CVP-approved org still receives cyber safeguard blocks in Claude Code | 13 | 0 | OPEN |
| [#83436](https://github.com/anthropics/claude-code/issues/83436) | Cyber-safeguard false positives on scientific computing session | 11 | 0 | OPEN |
| [#80058](https://github.com/anthropics/claude-code/issues/80058) | Dispatch disabled in macOS Desktop app but works on mobile | 10 | 1 | OPEN |
| [#60093](https://github.com/anthropics/claude-code/issues/60093) | Model switched to Opus without consent — $1,050 overcharge | 10 | 0 | CLOSED |
| [#66558](https://github.com/anthropics/claude-code/issues/66558) | Paid invoice shows Paid but account remains on Free plan | 9 | 1 | CLOSED |

**Why they matter:**

- **#79337** — A **platform-breaking billing bug**: Fable 5, now standard on Max plans since 2026-07-20, is silently downgraded to Opus 4.8 and demands usage credits. 71 comments signal a large affected user base; the community is asking for a hotfix or model override.
- **#50246** — The most-upvoted open feature request (184 👍). Users want a non-blocking message queue so follow-up prompts don't interrupt in-flight Claude Code tasks.
- **#29006** — 119 👍 for enabling Claude Desktop remote-control of CC sessions, a pattern long requested by power users running headless CC alongside the desktop app.
- **#19054** — MCP servers silently ignored in the VS Code extension is a trust-and-utility issue for developers relying on tool ecosystems.
- **#81698** — GPU crash (exit code 101457950) kills **all** running CC sessions on Windows. RTX 5080 + desktop 1.24012.9 + CCD 2.1.219. No public workaround yet.
- **#84352 / #83436** — Cyber-safeguard false positives continue to block legitimate scientific-computing workflows, even for previously CVP-approved organizations.
- **#80058** — Dispatch works on mobile Cowork but is disabled in the macOS Desktop app, fragmenting the multi-device experience.
- **#60093** — A **closed** but still-referenced case of silent model switching from Sonnet → Opus that generated $1,050 in unexpected charges; raises concerns about cost transparency.
- **#66558** — Paid invoices not reflected in account status; a recurring auth/billing sync gap.

---

## 4. Key PR Progress

Only **1 PR** updated in the last 24 hours:

| # | Title | Author | Summary |
|---|-------|--------|---------|
| [#77492](https://github.com/anthropics/claude-code/pull/77492) | fix(hookify): match Write and prompt rules | ShiroKSH | Fixes regression where simple prompt rules were inferred as absent when applied to `Write` tool payloads. Maps prompt rules to `UserPromptSubmit` and retains legacy `configured` field. Adds regression coverage for Write, Edit, and prompt rules. |

*Note: No additional PRs were updated in the 24-hour window.*

---

## 5. Feature Request Trends

1. **Non-blocking interaction models** — The message-queue feature (#50246, 184 👍) and remote-control dispatch (#29006, 119 👍) both reflect a demand for workflows where Claude Code doesn't monopolize the terminal or block follow-up input.
2. **MCP & plugin ecosystem maturity** — Multiple open issues around MCP servers not loading in VS Code (#19054), local `.mcpb` install failures on MSIX (#84199), and per-session plugin allowlists (#70564) point to growing pain as the plugin ecosystem scales.
3. **Multi-model orchestration** — Users are building "home-run derby" style multi-model pipelines (see #85082) and requesting better model-switching controls when limits are reached (#79410, #79337).
4. **Cost & billing transparency** — Repeated requests for clear model-switch notifications, visible spend caps (#84352), and accurate usage reporting (#60093, #66558) signal that billing UX is a top community priority.
5. **Cross-platform parity** — Dispatch working on mobile but not macOS (#80058), and Android draft loss on conversation switch (#85131) highlight inconsistencies across client surfaces.

---

## 6. Developer Pain Points

| Category | Recurring Themes |
|----------|-----------------|
| **Billing & model switching** | Silent model upgrades (Sonnet → Opus) without consent; Fable 5 credits not recognized on Max plans; invoices showing "Paid" while account remains on Free. |
| **Terminal / TUI stability** | Crash leaves terminal in mouse-tracking mode (#84029); terminal mouse reporting breaks copy-paste on Linux (#68602). |
| **Windows reliability** | GPU process crashes (#81698), Windows kernel BSODs (#80912), Defender-triggered `EBUSY` rename errors during plugin installs (#67595), ECONNRESET in desktop-bundled CLI (#84818). |
| **MCP & plugin tooling** | MCP servers not loaded in VS Code (#19054); local `.mcpb` extension install fails on MSIX builds (#84199); plugin commands unavailable in background sessions (#70596). |
| **Session continuity** | `/clear` changes `session_id` without re-running `SessionStart` hooks, breaking session-aware hooks (#70606); typed drafts lost on Android when switching conversations (#85131). |
| **Context-window reporting** | Opus 5 incorrectly reported as 200k context instead of 1M, saturating the statusline gauge (#81693). |

---

*Digest generated from GitHub data for anthropics/claude-code, last 24 hours ending 2026-08-09.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-09

## 1. Today's Highlights

Codex CLI released `v0.148.0-alpha.5`, continuing the rapid alpha cadence. Windows Computer Use remains a focal pain point with three distinct issues reported this week, while PRs shipping this week strengthen async hook support, workload-identity auth, and subagent lifecycle reliability. A major community-requested feature — multi-line status lines in the TUI — continues to accumulate strong support.

---

## 2. Releases

**rust-v0.148.0-alpha.5** ([GitHub](https://github.com/openai/codex))
Latest alpha in the `0.148.0` track. No detailed release notes were provided; this is part of the ongoing rapid alpha rollout cycle.

---

## 3. Hot Issues

| # | Title | Status | 👍 | Why It Matters |
|---|-------|--------|----|----------------|
| [#21653](https://github.com/openai/codex/issues/21653) | Support multi-line status line | OPEN | 59 | Long-running power users with detailed statusline configs see truncation; 59 upvotes signal strong community desire for a TUI UX fix. |
| [#27284](https://github.com/openai/codex/issues/27284) | SSH remote project shows "No chats" while threads exist in state DB | OPEN | 5 | Remote-session users hit a data-consistency gap between the state DB and the app UI, breaking trust in remote workflows. |
| [#37458](https://github.com/openai/codex/issues/37458) | Codex extension fails to start on Windows: "couldn't load its resources" | OPEN | 0 | New extension failure on Windows with VSCode 1.132 — directly blocks IDE integration for Windows users. |
| [#37180](https://github.com/openai/codex/issues/37180) | Windows Computer Use approval prompt never appears; `node_repl exec context not found` | OPEN | 2 | Blocks the core Computer Use workflow on Windows; users can't trigger the approval flow at all. |
| [#37383](https://github.com/openai/codex/issues/37383) | Computer Use on Windows fails during app/window discovery with 0x80070003 | OPEN | 4 | Another Windows Computer Use failure, this time at the discovery layer — two distinct failure modes in the same subsystem. |
| [#33463](https://github.com/openai/codex/issues/33463) | macOS 26.5: "DeviceCheck token generation is unavailable" | CLOSED | 0 | Auth breakage after a ChatGPT app update on the latest macOS; resolved but highlights fragile token-generation dependencies. |
| [#15756](https://github.com/openai/codex/issues/15756) | Symlinked SKILL.md files are not discovered in skills loader | CLOSED | 2 | Skills-resolution edge case for users with symlinked monorepos; closed but the pattern recurs when project layouts are complex. |
| [#33074](https://github.com/openai/codex/issues/33074) | Windows Codex app causes mouse stutter during startup and task switching | OPEN | 9 | Performance regression that impacts the entire desktop, not just Codex; severity is high because it affects all Windows users. |
| [#17103](https://github.com/openai/codex/issues/17103) | Ctrl+V in TUI is image-only when it reaches Codex as a key event | OPEN | 0 | Fundamental clipboard-paste behavior is asymmetrical — a low-visibility but high-impact UX bug for TUI users. |
| [#33479](https://github.com/openai/codex/issues/33479) | Relative write rules under `:workspace_roots` recursively expand until `E2BIG` | OPEN | 3 | Config bug that can crash process spawning; affects users with complex workspace-root configurations. |

---

## 4. Key PR Progress

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#37641](https://github.com/openai/codex/pull/37641) | Use step context for command approval prefix rules | CLOSED | Fixes execution policy selection by reading `allow_prefix_rules` from the active step's turn instead of a stale snapshot, ensuring approvals reflect current context. |
| [#37622](https://github.com/openai/codex/pull/37622) | Include buffered turns when editing prompts | CLOSED | Resolves prompt-edit lookups that missed live turns still in the replay buffer — a correctness fix for concurrent editing. |
| [#37618](https://github.com/openai/codex/pull/37618) | Use step environments for Guardian approval reviews | CLOSED | Guardian now uses the current step's environment (working directory, permissions) instead of a stale turn snapshot, preventing misaligned approval checks. |
| [#37610](https://github.com/openai/codex/pull/37610) | Add workload identity token exchange support | CLOSED | New `codex-workload-identity` crate enables file-backed JWT + federation rule exchange for short-lived ChatGPT credentials, with caching and coalescing. |
| [#37607](https://github.com/openai/codex/pull/37607) | Prevent launch context from reaching child processes | CLOSED | Marks `OPENAI_FEDERATION_RULE_ID` and `OPENAI_IDENTITY_TOKEN_FILE` as non-inheritable (case-insensitive), closing a secret-leak vector to model-reachable children. |
| [#37533](https://github.com/openai/codex/pull/37533) | Support asynchronous command hooks | CLOSED | Hooks marked `async` now run in the background with per-session concurrency limits, instead of being silently skipped outside `SessionEnd`. |
| [#37530](https://github.com/openai/codex/pull/37530) | Implement the gRPC code-mode host service | CLOSED | New `GrpcCodeModeHost` export provides a transport-independent gRPC API for leased sessions, tool-call subscriptions, and lifecycle ops. |
| [#37527](https://github.com/openai/codex/pull/37527) | Terminate timed-out hook process trees | CLOSED | Hook commands now run in process groups (Unix) / job objects (Windows); the full tree is terminated on timeout, preventing orphan processes. |
| [#37519](https://github.com/openai/codex/pull/37519) | Expose auto-review ignore rules in config requirements | CLOSED | `ignoreRules` now flows through the app-server v2 protocol so clients can surface which models skip auto-review. |
| [#37516](https://github.com/openai/codex/pull/37516) | Ignore reusable command approvals for cyber models | CLOSED | Saved `allow` prefix rules are now filtered for cyber-specialized models and models in `auto_review.ignore_rules`, tightening security posture. |

---

## 5. Feature Request Trends

- **TUI UX polish** — Multi-line status lines (#21653), symmetric text paste via Ctrl+V (#17103), and scrollback repaint fixes (#37635) show users want a more resilient terminal interface.
- **Strict subagent authority** — The RFC for host-enforced monotonic authority ceilings (#36381) and the subagent rehydration bug (#37563) both point to a community demand for stronger sandbox guarantees and correct state tracking.
- **Windows reliability** — Three Computer Use failures (#37180, #37383, #37595), mouse stutter (#33074), and SMB/UNC workspace failures (#35476) indicate Windows is a priority area for stability investment.
- **Auth & identity** — Workload identity support (#37610) and the DeviceCheck token issue (#33463) reflect growing need for enterprise-grade, federation-aware authentication paths.
- **Remote / SSH workflow** — The "No chats" mismatch on SSH remote projects (#27284) and remote-turn concurrency bug (#34767) highlight friction in distributed agent setups.

---

## 6. Developer Pain Points

1. **Windows Computer Use is brittle** — Three separate failure modes (approval prompt missing, window discovery error `0x80070003`, state capture `node_repl exec context not found`) suggest the Windows native bridge is still unstable.
2. **Subagent lifecycle correctness** — Issues with quota drainage (#35463), false-positive handler errors on delegation (#29886), and incorrect rehydration of completed subagents (#37563) make programmatic agent orchestration unreliable.
3. **Config edge-case crashes** — Recursive expansion of relative write rules (#33479) and symlinked skill discovery gaps (#15756) show that complex project layouts can trigger unexpected failures.
4. **Rate-limit accounting gaps** — Both an abnormal usage drop (#37532) and overnight quota drain by subagents (#35463) indicate the usage-tracking layer has inconsistencies that are hard to debug.
5. **Windows desktop performance** — Mouse stutter during startup/task-switching (#33074) and GPU spikes up to 80% on M4 Max during subagent-heavy sessions (#18181) suggest resource-management issues across platforms.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026‑08‑09

## 1. Today’s Highlights
A new nightly build (`v0.56.0-nightly.20260808`) shipped with a key reliability fix that reclassifies capacity‑exhaustion errors as terminal errors, and updates the caretaker’s Firestore schema. The community continues to focus on subagent robustness, with several high‑priority issues tracking hangs, recovery, and permission regressions, while a major proposal explores zero‑dependency OS sandboxing to align with the model’s native bash affinity.

## 2. Releases
**v0.56.0‑nightly.20260808.gcf22ac7e8** – The latest nightly drop includes:
- **Reclassifying Capacity Exhaustion as Terminal Error** (#28716) – Ensures that when the model hits capacity limits, the error is treated as a terminal failure rather than retried indefinitely.
- **Caretaker schema update** (#28467) – Adds `error` and `pr_number` fields to the Firestore schema for better tracking of caretaker events.

🔗 [GitHub release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260808.gcf22ac7e8)

## 3. Hot Issues
| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | Subagents can falsely report success after hitting turn limits, masking real failures and confusing the parent agent. | 12 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | The generalist agent may hang indefinitely on simple tasks (e.g., folder creation), requiring manual cancellation. | 8 comments, 8 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Leverage model’s bash affinity via zero‑dependency OS sandboxing | Proposes using POSIX tools directly in a sandbox to let the model operate in its native bash‑centric way while preserving security. | 8 comments, 1 👍 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component‑level evaluations | Epic to expand behavioral evals across all supported Gemini models, ensuring consistent quality as the toolset grows. | 7 comments, 0 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST‑aware file reads/search/mapping | Investigates whether AST‑aware tools can reduce turn‑taking and token waste by more precisely reading code. | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills/sub‑agents enough | Users report that custom skills and sub‑agents are rarely invoked unless explicitly commanded, limiting automation. | 6 comments, 0 👍 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Stop Auto Memory from retrying low‑signal sessions | Auto Memory can loop over the same low‑signal sessions indefinitely, wasting resources and polluting the inbox. | 5 comments, 0 👍 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Deterministic redaction & reduce Auto Memory logging | Highlights a privacy gap: secrets may already be in model context before redaction, and skill‑related logs can leak sensitive data. | 4 comments, 0 👍 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command stuck “Waiting input” after completion | Simple CLI commands that finish normally can leave the agent hanging in an “awaiting user input” state. | 4 comments, 3 👍 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Enhance browser_agent resilience (session takeover, lock recovery) | The browser agent currently fails‑fast on locked profiles, making persistent‑session workflows unreliable. | 4 comments, 0 👍 |

## 4. Key PR Progress
| PR | Description | Status |
|----|-------------|--------|
| [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) Allow agents to call agents | Subagents can now delegate to other subagents or recurse via their `tools:` frontmatter, addressing a long‑standing capability gap. | Open (P2, size L) |
| [#28619](https://github.com/google-gemini/gemini-cli/pull/28619) Update .gitignore to ignore .env and .ai files; add unit tests | Prevents accidental exposure of secrets and AI‑generated scratch files; includes test coverage. | Open (P1, size M) |
| [#28735](https://github.com/google-gemini/gemini-cli/pull/28735) Fix formatTruncatedToolOutput for non‑positive maxChars | Guard against output inflation when `maxChars` is zero or negative, fixing a regression in tool‑output formatting. | Open (P1, size XS) |
| [#28736](https://github.com/google-gemini/gemini-cli/pull/28736) Clear OAuth callback timeout on flow completion | Ensures the OAuth server closes and the timeout is cleared when authentication finishes, preventing dangling processes. | Open (security, size S) |
| [#28679](https://github.com/google-gemini/gemini-cli/pull/28679) Improve Vertex AI 401 error messaging | Provides clearer guidance when a standard Gemini API key is used with the `vertex‑ai` auth type, reducing configuration confusion. | Open (security, size S) |
| [#28734](https://github.com/google-gemini/gemini-cli/pull/28734) Handle EACCES in resolveToRealPath | Fixes a startup crash when macOS Seatbelt sandboxing is enabled and the CWD is inside a Git repository. | Open (P1, size S) |
| [#28606](https://github.com/google-gemini/gemini-cli/pull/28606) Setapart | *(Description pending)* – A large‑scope PR that appears to be a significant structural change. | Open (P1, size L) |
| [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) Fall back to stable models when preview model 404s | Improves resilience for Gemini API‑key users whose projects lack preview‑model access; the client now falls back to a stable model instead of failing. | Open (P2, size M) |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) Stop leaking disposables in VSCode companion | Fixes a resource‑leak bug where two disposables were collapsed into a comma expression, preventing proper cleanup. | Closed |
| [#28732](https://github.com/google-gemini/gemini-cli/pull/28732) Bump version to 0.56.0‑nightly.20260808 | Automated nightly release bump. | Open |

## 5. Feature Request Trends
- **Subagent autonomy & recursion** – Users want subagents to be able to invoke other subagents (or themselves) without top‑level intervention.
- **Bash‑native, zero‑dependency sandboxing** – A push to let the model operate directly with POSIX tools in a secure sandbox, aligning with the model’s training.
- **AST‑aware codebase navigation** – Interest in tools that understand code structure to reduce round‑trips and token waste.
- **Auto Memory reliability & privacy** – Requests to stop infinite retry loops, surface invalid patches, and ensure deterministic redaction before content enters the model context.
- **Browser‑agent resilience** – Need for automatic session takeover, lock recovery, and better handling of persistent‑mode failures.
- **Error‑handling clarity** – Better diagnostics for authentication failures (Vertex AI 401), tool‑output formatting edge cases, and shell‑command stalls.

## 6. Developer Pain Points
- **Subagent hangs & false successes** – Multiple reports of subagents (generalist, browser) hanging indefinitely or reporting `GOAL` success after hitting turn limits, masking real failures.
- **Shell command stalls** – Simple commands that finish can leave the agent stuck in an “awaiting input” state, requiring manual cancellation.
- **Auto Memory loops & privacy gaps** – Low‑signal sessions are retried endlessly, and redaction happens after secrets have already entered the model context.
- **Tool‑limit errors** – When more than ~128 tools are available, the CLI can hit a 400 error; users expect smarter scoping.
- **Permission & configuration regressions** – Since v0.33.0, subagents may run even when disabled in settings, and symlinked agent files are not recognized.
- **Browser‑agent fragility** – Locked profiles cause immediate failures in persistent‑session mode, breaking automated workflows.
- **Startup crashes on macOS** – Seatbelt sandboxing combined with Git repositories can crash the CLI due to unhandled `EACCES` errors.

---
*Generated from GitHub data for `google-gemini/gemini-cli` on 2026‑08‑09.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-09

## Today's Highlights

GitHub Copilot CLI triaged **23 issues** in the past 24 hours, with five key bugs closed around session management, model caching, and a Windows startup regression. The community continues to surface cross-platform compatibility gaps — shell operator parsing on Windows, ACP context-tier parity, and session resume model-drift remain top recurring concerns.

## Releases

No new releases in the last 24 hours.

## Hot Issues

### 1. [area:models] Add cache_control breakpoints to Anthropic requests (#4256) — ✅ Closed
Three 👍. Users reported that expensive context (system prompt, tool definitions, long-lived file context) is fully reprocessed every turn instead of being cached via `cache_control` breakpoints. Fixing this would meaningfully reduce latency and cost on Claude-based models. [View](https://github.com/github/copilot-cli/issues/4256)

### 2. [area:platform-windows] Silent exit 1 at session startup with canonical log levels (#4285) — ✅ Closed
Two 👍. On 1.0.76-1, the CLI exits immediately with no output when log level is set to `none`, `error`, `warning`, `info`, or `debug`. The root cause was traced to an environment-variable resolution bug in the log-level parser. [View](https://github.com/github/copilot-cli/issues/4285)

### 3. [area:sessions] Copilot CLI resume session switches back to default model (#4397) — 📌 Open
On 1.0.78, starting a session with `copilot --model=gpt-5.6-terrain` and resuming later loses the specified model. This breaks workflow continuity for users who switch models mid-session. [View](https://github.com/github/copilot-cli/issues/4397)

### 4. [area:permissions] `allowed_directories` in `permissions.config` is never loaded (#4398) — 📌 Open
Directory entries defined in a user's `permissions.config` for various workspaces are silently ignored. `/list-dirs` never shows them, forcing users to re-approve paths on every new session. [View](https://github.com/github/copilot-cli/issues/4398)

### 5. [area:platform-windows] Cross-tool Claude hook configs with shell operators break on Windows PowerShell (#4399) — 📌 Open
Hooks defined via a single `command` string using POSIX operators (`&&`, `||`) fail on Windows because the copilot CLI passes them to `cmd.exe` instead of honoring the user's configured shell. [View](https://github.com/github/copilot-cli/issues/4399)

### 6. [area:authentication] Fix browser login URL wrapping and fallback (#4400) — 📌 Open
The browser-based sign-in flow shows an improperly wrapped or truncated URL and lacks a reliable fallback, forcing users to manually copy-paste the device-code URL. [View](https://github.com/github/copilot-cli/issues/4400)

### 7. [area:platform-windows] Skill tool cannot find valid skills in `~/.agents/skills` (#4401) — 📌 Open
A regression where the `skill` tool no longer resolves skills installed under `~/.agents/skills`, even when the directory and `SKILL.md` are correctly present. Appears to be an incomplete fix for #2230. [View](https://github.com/github/copilot-cli/issues/4401)

### 8. [area:authentication] Copilot Free in GitHub Codespaces shows "No model available" after update (#4405) — 📌 Open
After a recent update, Copilot Free accounts in GitHub Codespaces fail every prompt with a misleading "No model available" error. The account is properly licensed under Copilot Free, but the CLI does not resolve the correct model tier. [View](https://github.com/github/copilot-cli/issues/4405)

### 9. [area:non-interactive] ACP: expose `contextTier` as a session config option (#4275) — 📌 Open
The interactive CLI lets users change the context window tier mid-session via `/model`, but the ACP server has no equivalent session-level config, creating a capability gap for programmatic/remote clients. [View](https://github.com/github/copilot-cli/issues/4275)

### 10. [triage] github-mcp-server: `/mcp authenticate` always fails on Enterprise (#4408) — 📌 Open
On Copilot Enterprise-routed accounts, the built-in `github-mcp-server` OAuth flow cannot discover the authorization server metadata and fails immediately. [View](https://github.com/github/copilot-cli/issues/4408)

## Key PR Progress

No pull requests were updated in the last 24 hours.

## Feature Request Trends

1. **Session fidelity improvements** — Users consistently want session state (model choice, context tier, permissions) to be fully preserved across resume, not partially reset to defaults.
2. **Cross-platform hook/shell compatibility** — The gap between POSIX-style hook definitions and Windows shell handling is a recurring theme; several closed and open issues point to this.
3. **ACP programmatic parity** — Feature requests like the `contextTier` config option reflect a growing demand for ACP clients to expose all settings available in the interactive CLI.
4. **Localization** — A request for Chinese (zh-CN) UI localization highlights interest beyond English, though currently unsupported.

## Developer Pain Points

- **Session model drift:** Resuming a session resets the chosen model to default (#4397), disrupting workflows that depend on specific models.
- **Permissions config silently ignored:** `allowed_directories` in `permissions.config` has no effect (#4398), forcing manual re-approval.
- **Windows-specific regressions:** Shell operator parsing (#4399), skill-tool resolution (#4401), and login URL wrapping (#4400) are all Windows-specific issues that block adoption.
- **Codespaces model resolution:** Copilot Free users in Codespaces hit a "No model available" error despite valid entitlements (#4405).
- **npm version instability:** The globally-installed `npm` shim resolves to different versions on different invocations without a `--prefer-version` workaround (#4402).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# 🌙 Kimi Code CLI — Community Digest
**Date:** 2026-08-09 | **Source:** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

No new releases landed in the last 24 hours, but developer attention is split between a high-profile feature request for persistent memory across sessions and a critical bug report involving runaway LLM generation producing 88K tokens of gibberish over 53 minutes.

---

## 2. Releases

**None** — No new versions published in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Author | Activity | Why It Matters |
|---|-------|--------|----------|----------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Feature Request: Memory System — Persistent context across sessions | CatKang | 25 comments · Updated 2026-08-08 | A long-standing request (open since Feb) for a comprehensive memory layer — both AI-managed and user-defined — that would let Kimi retain project patterns, preferences, and context between sessions. Strong community interest indicated by sustained comment activity. |
| [#2597](https://github.com/MoonshotAI/kimi-cli/issues/2597) | Bug: Runaway garbled generation — 88K tokens of gibberish in one LLM step | kdp123 | Updated 2026-08-08 | A serious stability issue where a single interactive LLM call ran for **3,214 seconds (~53 min)** and emitted **88,114 tokens** of incoherent multilingual fragments, broken Markdown, and endless repetitions. No responses yet, but the severity is high for production users. |

---

## 4. Key PR Progress

**No pull requests** were updated in the last 24 hours.

---

## 5. Feature Request Trends

- **Persistent Memory / Context Retention** — Issue #1283 dominates the feature request landscape, reflecting a clear community desire for Kimi Code CLI to remember project-specific patterns, conventions, and user preferences across sessions. This signals demand for a "working memory" layer that goes beyond single-session context windows.

---

## 6. Developer Pain Points

- **LLM output stability** — Issue #2597 highlights a critical pain point: the CLI can enter runaway generation loops with no effective token or time limits, producing massive bursts of gibberish. Developers need robust safeguards (max-token caps, timeout enforcement, output validation) to prevent wasted compute and broken sessions.
- **Lack of cross-session continuity** — The persistent memory request (#1283) indicates users feel the current session-isolated design forces repetitive re-contextualization, reducing productivity in long-running or multi-day projects.

---

*Digest generated from [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) data as of 2026-08-09.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-09

## 1. Today's Highlights

OpenCode's TUI team shipped a suite of polish fixes covering session tab shortcuts, plugin reload flushes, and test isolation. On the feature side, session-branch visibility in vertical tabs and a new plugin-slot region structure are advancing. Community attention remains fixed on a major session-goals feature request (#27167, 128 👍) and a cluster of new bugs around the OpenCode Go relay mis-sending model IDs for DeepSeek.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters | Community |
|---|-------|---------------|-----------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | Add native session goals with `/goal` | The most upvoted open feature (128 👍); introduces persistent session lifecycle without plugins. | 69 comments · 128 👍 |
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | Cannot copy and paste in OpenCode CLI | Core UX blocker — clipboard reports success but `Ctrl+V` pastes nothing. | 55 comments · 27 👍 |
| [#14965](https://github.com/anomalyco/opencode/issues/14965) | Slow startup | Regression reported across terminals (Ghostty vs. Alacritty/Kitty); impacts daily workflow. | 19 comments · 13 👍 |
| [#33356](https://github.com/anomalyco/opencode/issues/33356) | Unbounded `event` table growth (13 GB+) | Long-lived sessions fill disks; no retention/compaction on the SQLite event store. | 15 comments · 4 👍 |
| [#38993](https://github.com/anomalyco/opencode/issues/38993) | Add/remove MCP servers from TUI dialog | Runtime MCP controls exist over HTTP (#37712) but the TUI surface is missing — this closes the loop. | 5 comments · 0 👍 |
| [#31307](https://github.com/anomalyco/opencode/issues/31307) | Multiple instances share the same session | Concurrency gap: two terminals in the same project see identical sessions via shared SQLite. | 4 comments · 3 👍 |
| [#41300](https://github.com/anomalyco/opencode/issues/41300) | Leading space in `deepseek-v4-flash` model name | OpenCode Go relay injects a space into the model string, causing HTTP 400 from upstream. | 4 comments · 1 👍 |
| [#41306](https://github.com/anomalyco/opencode/issues/41306) | `deepseek-v4-flash` still broken on Console Go | Confirms the relay bug persists post-#41211; verified 2026-08-09. | 3 comments · 0 👍 |
| [#41273](https://github.com/anomalyco/opencode/issues/41273) | Moonshot/Kimi models hang or fail | Socket closures and indefinite hangs with built-in Moonshot provider; cURL works fine. | 2 comments · 0 👍 |
| [#20989](https://github.com/anomalyco/opencode/issues/20989) | Random characters printed on exit **[CLOSED]** | `Ctrl+C` leaves terminal in a broken state; resolved but highlights a cleanup bug worth tracking. | 5 comments · 2 👍 |

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#41342](https://github.com/anomalyco/opencode/pull/41342) | Show session branches in vertical tabs | Non-default VCS branches appear as `project:branch` metadata on the tab row; default branches stay hidden. |
| [#41189](https://github.com/anomalyco/opencode/pull/41189) | Region structure for plugin slot placement | Replaces position-encoded names (e.g. `prompt.footer.end`) with named region trees so plugins can claim precise positions. |
| [#41202](https://github.com/anomalyco/opencode/pull/41202) | Authorize file mutations before locking | New capability-permission → execution-lock flow: resolve paths and request permission first, then acquire shared locks. |
| [#41308](https://github.com/anomalyco/opencode/pull/41308) | Align session tab shortcut labels | Tabs 1–9 render matching digits, tab 10 renders `0` selectable via `<leader>0`/`Ctrl+0`, later tabs show a subdued `·`. |
| [#41310](https://github.com/anomalyco/opencode/pull/41310) | Isolate lifecycle and theme tests | Stabilized seven flaky TUI tests by avoiding process-global Bun module mocks. |
| [#41309](https://github.com/anomalyco/opencode/pull/41309) | Flush plugin reload generations | `PluginSupervisor.flush` now waits for the current activation generation, fixing a hot-reload regression. |
| [#41343](https://github.com/anomalyco/opencode/pull/41343) | Write prettier-stable generated manifests | `.httpapi-codegen.json` is now formatted through Prettier at write time, fixing the last red v2 CI job. |
| [#7156](https://github.com/anomalyco/opencode/pull/7156) | Agent default variant handling in TUI/desktop | Respects an agent's configured model variant in the app and TUI when the current model supports it. |
| [#41336](https://github.com/anomalyco/opencode/pull/41336) | Fish shell completion support **[CLOSED]** | Fixes #41232 — `opencode completion fish` now emits proper fish syntax instead of bash/zsh. |
| [#41335](https://github.com/anomalyco/opencode/pull/41335) | Escape literal wildcards in patch insertions | Fixes wildcard matcher so literal `[`/`*` characters in patch content aren't interpreted as globs. |

## 5. Feature Request Trends

- **Session-level orchestration** — The dominant request (#27167) is native, persistent session goals/lifecycle, reducing reliance on custom slash commands and plugins for structured workflows.
- **TUI-native MCP management** — Users want to add, remove, connect, and disconnect MCP servers directly from the TUI dialog with config persistence (#38993), rather than editing files or using the HTTP runtime API.
- **Richer input modalities** — Drag-and-drop support for Microsoft Office files (.docx, .xlsx) (#27689) signals demand for broader file-type handling in the chat interface.
- **SDK v2 for plugin authors** — PR #12042 delivers an SDK v2 alongside the v1 client so plugin authors can adopt incrementally without breaking compatibility.

## 6. Developer Pain Points

1. **Relay/model-name bugs** — A cluster of issues (#41300, #41306, #41314, #40420) report the OpenCode Go relay either injecting leading spaces into model IDs or failing to emit `finish_reason`, causing HTTP 400s and stuck streams on DeepSeek and GPT-5.6-Luna.
2. **SQLite event-store bloat** — Long-running instances grow the `event` table without bounds (#33356), pushing databases to 13 GB+ and risking volume exhaustion. Retention or compaction is urgently needed.
3. **Multi-instance session collisions** — Running multiple terminals in the same project shares a single SQLite session (#31307), causing unexpected cross-talk between instances.
4. **Terminal/CLI UX regressions** — Copy-paste failures (#13984), slow startup on certain terminals (#14965), and residual terminal escape sequences on exit (#20989, #29021) point to fragile TUI cleanup and terminal-emulator compatibility gaps.
5. **Transient-retry gaps** — Sessions fail outright on non-`ECONNRESET` transport errors (#30611) instead of leveraging the existing retry policy, and Moonshot/Kimi requests hang rather than back off (#41273).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-09

## 1. Today's Highlights

The most pressing concern for the community remains **openai-codex connection reliability** (#4945), with 76 comments and 31 upvotes tracking a persistent TUI freeze issue on long streaming turns. Additionally, a pair of auto-compaction bugs (#6879, #7821) is driving active discussion around context-window management during extended agentic sessions. On the feature side, LLM Gateway support and a stream of DeepSeek provider fixes landed in the last 24 hours.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Status | Comments | 👍 |
|---|-------|--------|----------|----|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | openai-codex Connection Reliability Issues | OPEN · inprogress | 76 | 31 |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | Auto-compaction never triggers after context grows past 100% | OPEN · bug | 15 | 15 |
| [#7821](https://github.com/earendil-works/pi/issues/7821) | Auto-compaction waits for agent_end during long tool loops | CLOSED | 3 | 0 |
| [#7543](https://github.com/earendil-works/pi/issues/7543) | Meta Model API | CLOSED | 3 | 3 |
| [#7836](https://github.com/earendil-works/pi/issues/7836) | Edit fuzzy match misses lines with whitespace differences | CLOSED | 2 | 1 |
| [#7837](https://github.com/earendil-works/pi/issues/7837) | Fullscreen TUI mouse selection silently overwrites system clipboard | CLOSED | 2 | 0 |
| [#7734](https://github.com/earendil-works/pi/issues/7734) | Print mode hangs at exit when a subagent was spawned | CLOSED · bug | 2 | 0 |
| [#7820](https://github.com/earendil-works/pi/issues/7820) | openai-codex stream requests have no retry wrapper | CLOSED | 2 | 0 |
| [#7782](https://github.com/earendil-works/pi/issues/7782) | Invalid Bedrock tool call poisoned pi session permanently | CLOSED · bug | 2 | 0 |
| [#7814](https://github.com/earendil-works/pi/issues/7814) | Allow multiple logins for one provider | CLOSED | 2 | 0 |

**Why they matter:**

- **#4945** — The #1 community issue by engagement. `openai-codex` / `gpt-5.5` intermittently leaves the TUI stuck on `Working...` with no streamed output and no recoverable error. Users can only press Escape, which aborts the turn. 31 upvotes signal strong pain across the power-user base.
- **#6879** — Auto-compaction silently fails to trigger when context exceeds the window, only firing when the API itself rejects at 373k tokens. This is a correctness bug with real data-loss risk.
- **#7821** — Root-causes the compaction delay: checks only run after `agent_end`, so long uninterrupted tool loops bypass the threshold entirely. Closed alongside #6879 as related.
- **#7543** — Adds Meta's Muse Spark via the standard Meta Model API. Low friction, high utility for Meta-platform users.
- **#7837** — Fullscreen TUI writes every mouse selection to the system clipboard via OSC 52 with no opt-out, a privacy concern for users sharing screens.
- **#7782** — Pi accepted and persisted an invalid Bedrock tool call (`"": ""`), then replayed it every turn, permanently bricking the session. Highlights the need for argument sanitization before execution.
- **#7814** — Users with multiple subscriptions for the same provider (e.g., two ChatGPT Plus accounts) currently must duplicate the OAuth flow manually.

## 4. Key PR Progress

| # | Title | Status | Author |
|---|-------|--------|--------|
| [#7610](https://github.com/earendil-works/pi/pull/7610) | Add LLM Gateway and LLM Gateway DevPass providers | OPEN | RATCHAW |
| [#7713](https://github.com/earendil-works/pi/pull/7713) | Stream assistant and config with telemetry (L1 harness v2) | OPEN · inprogress | cristinaponcela |
| [#7834](https://github.com/earendil-works/pi/pull/7834) | Annotate `--version` with runtime (bun/node/deno) | CLOSED | re2zero |
| [#7833](https://github.com/earendil-works/pi/pull/7833) | Fix notify extension: use `agent_settled` instead of `agent_end` | CLOSED | re2zero |
| [#7811](https://github.com/earendil-works/pi/pull/7811) | Send `max_tokens` to native DeepSeek | CLOSED | yzhg1983 |
| [#7823](https://github.com/earendil-works/pi/pull/7823) | A-level capabilities from oh-my-pi (stream rules, subagent tools, advisor, cross-session memory) | CLOSED | harrisdudu |
| [#7817](https://github.com/earendil-works/pi/pull/7817) | Treat incomplete reason `length` as a length stop, not an error | CLOSED | lyhue1991 |
| [#7801](https://github.com/earendil-works/pi/pull/7801) | Lazily load uncommon syntax grammars | OPEN | mitsuhiko |
| [#7721](https://github.com/earendil-works/pi/pull/7721) | Avoid unwanted newlines when copying in fullscreen TUI | CLOSED | tmustier |
| [#7810](https://github.com/earendil-works/pi/pull/7810) | Reject concurrent compaction calls | CLOSED | SeekuhCrew |
| [#7807](https://github.com/earendil-works/pi/pull/7807) | Expose low reasoning effort for native DeepSeek V4 Flash | OPEN | yzhg1983 |

**Notable progress:**

- **#7823** merges four A-level agent capabilities from oh-my-pi into the core: time-traveling stream rules, subagent tools, advisor, and cross-session memory — a significant feature bump.
- **#7811** and **#7807** together fix DeepSeek native provider parity: `max_tokens` vs `max_completion_tokens` and correct reasoning-effort mapping for V4 Flash.
- **#7810** prevents a TUI crash when users hit the compaction shortcut twice rapidly — a direct response to the compaction discussion in #6879/#7821.
- **#7833** fixes the notify example extension so its "Ready for input" signal fires after all retries and continuations settle, not after each low-level agent pass.

## 5. Feature Request Trends

1. **Multi-provider account support** — #7814 (multiple logins per provider) and #7543 (Meta Model API) reflect demand for broader provider coverage and multi-account workflows.
2. **Settings flexibility** — #7813 (multiple settings profiles) and #7819 (`immediateUserMessage` setting) show users want per-project configuration and faster feedback on send.
3. **TUI quality of life** — #7765 (configurable scroll step), #7830 (line-by-line scroll), #7827 (scrollable slash-popup descriptions), and #7818 (delete active session) point to a community that uses fullscreen TUI heavily and wants finer-grained control.
4. **Session safety & identity** — #7828 (message identity in transformer context) and #7815 (glla goal management defects) indicate extension authors need richer per-message context to build reliable tooling.

## 6. Developer Pain Points

- **Streaming reliability** — The openai-codex provider's lack of retry wrappers (#7820, #4945) causes ~30% of long turns to die on transport errors. This is the single highest-friction area for power users.
- **Context management blind spots** — Auto-compaction not triggering before API overflow (#6879, #7821) and the crash on double-compact (#7810) reveal that context-window safety is still a work in progress.
- **Session resilience** — Invalid provider responses (Bedrock empty-key tool call in #7782) can permanently brick sessions because Pi persists and replays bad calls without validation.
- **Extension authoring gaps** — Lack of message identity in transformers (#7828), premature `agent_end` hooks (#7833), and the need for extension-side turn termination (#7824) show that the extension API is maturing but still has rough edges around lifecycle and observability.
- **TUI clipboard & copy behavior** — Uncontrolled OSC 52 clipboard writes (#7837) and newline insertion on wrapped-line copy (#7721) are recurring friction points for fullscreen TUI users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-09

## Today's Highlights

Qwen Code v0.21.8 shipped with restored real-time autofix for PRs opened from forks and expanded compression cache sharing across OpenAI, Gemini, and Vertex AI providers. The community is actively shaping multi-session coordination, with two RFCs exploring cross-session messaging and a desktop app built on the existing Web Shell. Meanwhile, CI reliability continues to draw sharp focus as multiple E2E failures and release-automation bugs surface in the last 24 hours.

---

## Releases

**v0.21.8** — [Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.8)
- Restores autofix capability for pull requests originating from forks by bridging review events to credentialed workflows.
- Enables compression cache sharing for OpenAI, Gemini, and Vertex AI backends.

---

## Hot Issues

| # | Summary | Why It Matters |
|---|---------|---------------|
| [#8092](https://github.com/QwenLM/qwen-code/issues/8092) | Build a lower-maintenance desktop app around Web Shell | Could unify the desktop and web experiences under a single codebase, reducing maintenance burden significantly. 6 comments. |
| [#8756](https://github.com/QwenLM/qwen-code/issues/8756) | Main CI failed: E2E Tests | Tracks an automatic CI failure on `main` — illustrates ongoing fragility in the E2E test pipeline. 5 comments. |
| [#8766](https://github.com/QwenLM/qwen-code/issues/8766) | Main CI: `cli/extensions-install.test.ts` fails | Targets a specific P1 E2E regression in local Qoder plugin installation; autofix is already in progress. 4 comments. |
| [#8737](https://github.com/QwenLM/qwen-code/issues/8737) | Chrome DevTools consent dialog re-appears on every session | Blocks smooth Chrome MCP automation — users must re-authorize remote debugging each time. 4 comments. |
| [#8724](https://github.com/QwenLM/qwen-code/issues/8724) | Cross-session messaging between Qwen Code sessions | Proposes a `list_agents`/`send_message` API for inter-session communication on the same machine. 4 comments. |
| [#8718](https://github.com/QwenLM/qwen-code/issues/8718) | RFC: Native coordination for independent Qwen sessions | Companion RFC to #8724, calling for leader/follower orchestration with deterministic fan-out and structured results. 4 comments. |
| [#8697](https://github.com/QwenLM/qwen-code/issues/8697) | `OTEL_METRICS_EXPORTER=otlp` silently disables metrics | Metrics export is silently suppressed when OpenTelemetry env vars from other CLIs leak into the environment. Closed. 3 comments. |
| [#8758](https://github.com/QwenLM/qwen-code/issues/8758) | Auto session titles dominated by hook context | `UserPromptSubmit` hooks with long `additionalContext` can hijack the auto-generated session title. 3 comments. |
| [#8752](https://github.com/QwenLM/qwen-code/issues/8752) | VS Code schema rejects supported prompt hooks | The generated settings schema contradicts the runtime, causing VS Code to flag valid hooks as errors. 3 comments. |
| [#8627](https://github.com/QwenLM/qwen-code/issues/8627) | `DO_NOT_TRUST` overridden by ancestor `TRUST_FOLDER` | A security-critical bug where an explicit distrust rule is silently bypassed by a parent trust rule. Closed. 3 comments. |

---

## Key PR Progress

| # | Title | Focus |
|---|-------|-------|
| [#8772](https://github.com/QwenLM/qwen-code/pull/8772) | File-scope micro diff test suite with vitest | `review build-test` now runs only the affected test files via `vitest related`, cutting CI time for small changes. |
| [#8590](https://github.com/QwenLM/qwen-code/pull/8590) | Close read-only classifier bypasses via line continuation and `${var@P}` | Security hardening: the shell classifier now recognizes Bash line-continuation splits and prompt expansion as executable. |
| [#8765](https://github.com/QwenLM/qwen-code/pull/8765) | A/B deterministic gate rejections against pre-round ref | Autofix verification now re-runs the failing check against the original branch commit to distinguish pre-existing from introduced failures. |
| [#8726](https://github.com/QwenLM/qwen-code/pull/8726) | Render the queued-acknowledgement comment | Fixes a formatting bug that caused the `qwen-review-ack` comment to render as raw text instead of markdown. |
| [#8739](https://github.com/QwenLM/qwen-code/pull/8739) | Word-wise and line-wise VP text selection | Extends VP-mode mouse selection with double-click drag (word-wise) and triple-click drag (line-wise) behavior. |
| [#8664](https://github.com/QwenLM/qwen-code/pull/8664) | Batch skill toggle API | Daemon now exposes an endpoint to enable/disable up to 100 Skills in a single request, with per-target error reporting. Closed. |
| [#8762](https://github.com/QwenLM/qwen-code/pull/8762) | Stop `usage_update` frames flooding the demo event log | `usage_update` frames are now rendered as a live context meter instead of raw-JSON entries in the `/demo` Events tab. |
| [#8767](https://github.com/QwenLM/qwen-code/pull/8767) | Make spam blocklist enforcement actually work | Replaces auto-minimize with outright comment deletion and PR closure for blocklisted users; enforcement runs server-side. |
| [#8735](https://github.com/QwenLM/qwen-code/pull/8735) | Make replay journal durable | Workflow replay state is now persisted as a versioned checkpoint; recovery validates the committed journal prefix. |
| [#8475](https://github.com/QwenLM/qwen-code/pull/8475) | Restore deferred MCP tools on resumed sessions | Deferred MCP tools referenced in chat history are re-revealed when tool declarations refresh after session resume. |

---

## Feature Request Trends

1. **Multi-session coordination** — Two parallel RFCs (#8718, #8724) and a proposal (#8699 for Qwen WebBridge) signal strong community demand for inter-session communication, leader/follower orchestration, and direct browser control.
2. **Desktop experience unification** — Issue #8092 proposes building a desktop app around the Web Shell rather than maintaining a separate implementation, reflecting a desire for lower maintenance and consistent UX.
3. **Terminal UX polish** — Requests for word/line-wise text selection (#8738/#8739), better `/clear` blocking messages (#8741), and CJK-aware hyperlink rendering (#8750) show sustained interest in CLI polish.
4. **Observability and telemetry** — The OTEL metrics bug (#8697, closed) and usage_update improvements (#8762, open) indicate the community values reliable metrics and clean debugging surfaces.

---

## Developer Pain Points

- **CI fragility** — Repeated E2E failures on `main` (#8756, #8766) and a release workflow failure for the v0.21.8 nightly (#8771) erode contributor confidence. The team is investing in A/B gating (#8765) and more robust enforcement (#8767) to address this.
- **Configuration drift** — The VS Code settings schema rejecting valid prompt hooks (#8752) and the `dynamicCommandTranslation` setting having no runtime effect (#8748) point to a recurring gap between documentation/schema and actual runtime behavior.
- **Security rule evaluation bugs** — The `DO_NOT_TRUST` override by ancestor `TRUST_FOLDER` (#8627, closed) is a high-severity class of issue; contributors should expect continued scrutiny around trust-rule evaluation.
- **macOS test flakiness** — Workspace mock path-canonicalization issues breaking permission tests on macOS (#8753) suggest test infrastructure needs platform-specific fixes.
- **npm/test build breaks** — `npm test` failing with an unknown flag (#8721) and a vendored `@qwen-code/external-context` version mismatch (#8722) are developer-onboarding blockers that deserve quick resolution.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-09

---

## 1. Today's Highlights

Codewhale v0.9.5 shipped, consolidating the terminal runtime and removing default turn ceilings that interrupted long-running work. The release also formally deprecated the legacy `deepseek-tui` npm package in favor of the `codewhale` command and package surface. Meanwhile, the v0.9.5 milestone board is filling with subagent UX, compaction, and provider-parity work across 30+ linked issues.

---

## 2. Releases

**v0.9.5** — Published and publicly verified (34/34 checks passing). Key changes:

- Consolidates the terminal app into a single compiled runtime; `codewhale` and `codew` commands remain the public entry points.
- Removes default turn ceilings that interrupted long work sessions.
- Aligns the updater, installers, release assets, website, and npm package surfaces under the `codewhale` brand.
- The legacy `deepseek-tui` npm package is **deprecated** with no further releases; users on v0.8.x should migrate.

> 📎 PR [#5292](https://github.com/Hmbown/CodeWhale/pull/5292) · Release notes on GitHub

---

## 3. Hot Issues

| # | Title | Why It Matters | Comments |
|---|-------|---------------|----------|
| [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) | CLI/TUI parity for subagent and runtime control surfaces | Ensures subagent controls aren't trapped in the TUI when a future web/cloud app is built; foundational for multi-surface consistency. | 8 |
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) | Dead-code sweep: 464 `#[allow(dead_code)]` attributes | These attributes silently hide drift; stripping them would let the compiler surface unused code across 143 files. | 6 |
| [#4326](https://github.com/Hmbown/CodeWhale/issues/4326) | RSS spike after cancelling a 32-worker storm | Distinguishes allocator high-water retention from real leaks; critical for high-fan-out reliability. | 6 |
| [#4416](https://github.com/Hmbown/CodeWhale/issues/4416) | Stale failed-agent state between sessions | Second CodeWhale instance in the same workspace shows failed rows from a different session — trust erosion. | 4 |
| [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) | Switching providers retains unrelated default model | Switching to OpenAI can leave `gpt-5.5` as default from a different route; provider × model resolution is not atomic. | 3 |
| [#5272](https://github.com/Hmbown/CodeWhale/issues/5272) | Prompt-scoped file recovery | Restore workspace files from a prior prompt's session snapshot (not just transcript); cooperative with git. | 2 |
| [#5270](https://github.com/Hmbown/CodeWhale/issues/5270) | Unified tasks surface | One operator-facing list for shells + subagents + workers + workflow runs; currently fragmented across panels. | 2 |
| [#5271](https://github.com/Hmbown/CodeWhale/issues/5271) | Session peek | List/peek/answer approvals across sessions without detaching from the current composer context. | 2 |
| [#5266](https://github.com/Hmbown/CodeWhale/issues/5266) | v0.9.5 milestone tracker | Pick-order board for the entire v0.9.5 release; all issues below are self-contained and land via PR. | 2 |
| [#5249](https://github.com/Hmbown/CodeWhale/issues/5249) | Build-time lane — stop the monolith tax | 682k-line, 620-file `codewhale-tui` crate is 86% of the workspace; every edit, commit, test, and release pays the recompilation cost. | 1 |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | Runtime API: persistent goal-loop state & completion controls | ✅ Closed | Adds `GET /v1/threads/{id}/goal` so managed clients can read and drive goal lifecycle through the canonical runtime boundary. |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | Runtime API: verifier receipts & evidence | ✅ Closed | Exposes `GET /v1/fleet/runs/{run_id}/receipts` and per-failure detail — previously only an aggregate counter was available. |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | Runtime API: memory endpoints | ✅ Closed | New `/v1/memory` routes for bounded inspection, scope/provenance awareness, and lifecycle controls. |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | Runtime API: MCP server config & lifecycle | ✅ Closed | `POST /v1/apps/mcp/servers` adds create/update/remove surface; previously clients edited TOML/JSON directly. |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | Runtime API: skill lifecycle endpoints | ✅ Closed | Install, update, uninstall, trust, and audit routes for the full skill lifecycle previously only available in the TUI. |
| [#5205](https://github.com/Hmbown/CodeWhale/pull/5205) | Stabilize IME candidate positioning in Tabby | ✅ Closed | Fixes Chinese IME candidate windows jumping during rapid TUI redraws; adds `TERM_PROGRAM=Tabby` detection and bounded redraw cadence. |
| [#5295](https://github.com/Hmbown/CodeWhale/pull/5295) | Add Mistral AI as a first-class provider | 🔄 Open | New `mistral` provider route defaulting to `mistral-code-latest`; supports `CODEWHALE_PROVIDER=mistral` and `codewhale --provider mistral`. |
| [#5301](https://github.com/Hmbown/CodeWhale/pull/5301) | Compaction: live and pressure-aware | ✅ Closed | Manual `/compact` is now nonblocking; auto-compaction eligibility aligned with 128K/272K/1M window tiers and request pressure. |
| [#5300](https://github.com/Hmbown/CodeWhale/pull/5300) | Refactor core: own primary request preparation | 🔄 Open | Moves `MessageRequest` DTO family into `codewhale-core`; TUI no longer owns the production request scaffold. |
| [#5297](https://github.com/Hmbown/CodeWhale/pull/5297) | Web: publish v0.9.5 release snapshot | ✅ Closed | Advances the site's latest release from v0.9.4 to v0.9.5; regenerating web facts from canonical source. |

---

## 5. Feature Request Trends

1. **Multi-surface CLI/TUI parity** — Subagent controls, session management, and provider resolution must work identically across terminal, web, and future cloud surfaces (#4022, #5261, #5263).
2. **Multi-session orchestration** — Peek, switch, and approve across sessions without losing composer context (#5270, #5271).
3. **Provider neutrality** — Renaming `DeepSeekClient` internals, exposing Responses dialect as a configurable protocol rather than hard-coded enum branches (#5103, #5092–#5094, #5295).
4. **Agent recovery & durability** — Prompt-scoped file restore, compaction survival contracts, and honest turn-stop status (#5272, #4394, #5267).
5. **Build-time ergonomics** — Shrinking the monolith crate to reduce edit/commit/test/released churn (#5249).

---

## 6. Developer Pain Points

- **Stale state across sessions:** Opening a second CodeWhale instance in the same workspace displays failed-agent rows from a previous session (#4416). Users lose trust when status chrome doesn't reflect reality.
- **Provider × model resolution drift:** Switching providers can leave an unrelated default model attached, and unknown model IDs silently fall back to a 128K context window without surfacing a hint (#5034, #5244).
- **RSS leaks after worker cancellation:** High-fan-out worker storms leave elevated memory post-cancel; distinguishing allocator watermark from real leaks remains unresolved (#4326).
- **Dead-code wall:** 464 `#[allow(dead_code)]` attributes across the crate tree structurally prevent the compiler from flagging drift (#4785).
- **Build-time tax:** The 682k-line `codewhale-tui` crate dominates the workspace; every local commit invalidates tui+cli build-SHA stamps and forces full recompile (#5249).
- **Notification unpredictability:** Toasts and system notifications lack consistent actionability, timing, and discoverable controls (#5041).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*