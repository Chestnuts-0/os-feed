# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 06:19 UTC | Tools covered: 9

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
**Date: 2026-08-05**

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a phase of rapid iteration and maturation, with established players (Claude Code, Codex, Gemini CLI) shipping targeted reliability fixes while newer entrants (Kimi Code, DeepSeek TUI, OpenCode) push toward broader extensibility and cross-platform parity. Security hardening (SSRF, auth bypasses, trust-boundary design) and session resilience (compaction, retry, memory) dominate current engineering effort. The ecosystem is converging on ACP protocol adoption, per-session configurability, and observable multi-agent workflows, while fragmenting on platform-specific concerns (Windows sandboxing, Wayland, WSL).

---

## 2. Activity Comparison

| Tool | Hot Issues (Open) | Key PRs (Active/Closed) | Release Status |
|------|-------------------|------------------------|----------------|
| **Claude Code** | 10 tracked | 9 PRs (mix of fixes & infra) | v2.1.222 shipped |
| **OpenAI Codex** | 10 tracked (81 comments on top issue) | 11 PRs closed in rapid batch | 4 Rust alpha releases (0.147.x) in 24h |
| **Gemini CLI** | 10 tracked | 10 PRs (2 security, 3 fixes, 5 features) | Nightly failed (v0.55.0); no stable release |
| **GitHub Copilot CLI** | 10 tracked | 2 PRs (early review) | v1.0.79-2 shipped (1 breaking change) |
| **Kimi Code** | 6 tracked | 3 PRs | No release in 24h |
| **OpenCode** | 10 tracked | 12 PRs (major V2 refactor stack + fixes) | v1.18.13 shipped |
| **Pi** | 10 tracked | 10 PRs (6 open, 4 closed) | No release in 24h |
| **Qwen Code** | 10 tracked | 10 PRs (mixed) | v0.21.6-preview.0 + nightly shipped |
| **DeepSeek TUI** | 10 tracked (build-time epic) | 10 PRs (release train #5135 in progress) | v0.9.4 train open; v0.9.5 build epic started |

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Needs |
|-----------|---------------|----------------|
| **Session resilience & recovery** | Claude Code, Codex, OpenCode, Pi, Qwen Code, DeepSeek TUI | Interrupted-response continuation, compaction reliability, checkpoint resumption, retry semantics that don't leave visual artefacts |
| **Per-session / per-agent configurability** | Codex, Kimi Code, Gemini CLI | Per-thread model/provider/profile selection, subagent isolation, ACP mid-session switching |
| **MCP tooling maturity** | Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode, DeepSeek TUI | Process leak fixes, `server/discover` compatibility, consent dialog transparency, SSE timeout guards |
| **Persistent memory & context** | Kimi Code, Gemini CLI, OpenCode, DeepSeek TUI | AI-managed + user-defined memory, cross-session retention, low-signal session quarantine |
| **Cross-device / remote session control** | Claude Code, Kimi Code, OpenCode | Persistent remote control toggle, SSH transcript loading, phone/tablet session resumption |
| **Plugin / skill ecosystem tooling** | Claude Code, Copilot CLI, OpenCode, DeepSeek TUI | Hook validation, dependency checks, slash-command routing, visible skill inventory |
| **Evaluation & observability infrastructure** | Gemini CLI, OpenCode, Qwen Code | CI-gateable evals, component-level test generation, subagent visibility in chat UI |
| **ACP protocol adoption** | Kimi Code, Qwen Code, DeepSeek TUI | Model discovery, permission mode switching, session/prompt tool execution over ACP |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|-----------|----------|----|-----------|--------------|
| **Primary focus** | Enterprise reliability, hook system maturity | Core CLI iteration, Rust reimplementation | Security hardening, eval infrastructure | IDE integration, MCP compatibility | ACP ecosystem, cross-device | Desktop/TUI polish, V2 API migration | Provider expansion, extension ecosystem | Multi-modal input, channel/IM integration | Build-performance, runtime API surface |
| **Target users** | Enterprise dev teams, plugin authors | Broad developer base, sandbox users | Security-conscious users, Linux/Wayland | GitHub Enterprise orgs | Mobile/ACP frontend users | Open-source contributors, headless/CI | European/router users, extension authors | Qwen model users, China-IM integrations | Multi-provider power users, Rust ecosystem |
| **Technical approach** | Hook system with explicit validation, worktree isolation | Rapid Rust alpha cadence, namespace-cleanup | Defense-in-depth security patches, async DNS | Incremental UX polish, breaking config changes | Protocol-level ACP enhancements | Major V2 API refactor stack | Provider-agnostic with built-in routers | API-resolved model metadata, reverse-dependency test scoping | Monolith-to-layers build refactor, checkpoint-based subagent resume |
| **Platform emphasis** | Cross-platform (Desktop + CLI) | Cross-platform (Rust CLI + Desktop) | Linux-heavy (Wayland, SSH) | Windows/WSL2 pain points | Windows IME, cross-device | Electron desktop, terminal compat | Windows path handling, WSL | tmux, Web Shell, IM channels | Windows linker, Ohos SDK |

---

## 5. Community Momentum & Maturity

**High momentum, rapid iteration:**
- **OpenAI Codex** — 4 alpha releases in 24h signals intense core engineering activity; the top issue (#8648, 81 comments) shows strong community engagement on conversational coherence.
- **OpenCode** — 12 PRs including a major V2 API refactor stack; the Go-plan usage transparency issue (#16017, 126 👍) reflects a mature subscriber base with automation demands.
- **Gemini CLI** — 10 PRs today with 2 critical security patches; nightly pipeline failure indicates release discipline challenges.

**Steady maturation:**
- **Claude Code** — Targeted v2.1.222 release with security and reliability fixes; billing and auth bugs are blocking enterprise rollout.
- **Qwen Code** — Active multi-modal and channel integration work; trust-boundary design discussion (#8102) signals architectural maturity.

**Growing but constrained:**
- **DeepSeek TUI** — The v0.9.5 build-time epic (#5249) acknowledges a critical architectural debt; the v0.9.4 release train is 77 commits deep, suggesting a long stabilization cycle.
- **Kimi Code** — Smaller issue volume but focused ACP protocol work; community wants remote control and memory features.

**Niche but engaged:**
- **Pi** — Provider expansion (Cortecs, LLM Gateway) and compaction configurability are active; Windows path bugs block a significant user segment.
- **Copilot CLI** — Only 2 active PRs; MCP compatibility regression (#4370) from the breaking config rename is the most immediate community pain.

---

## 6. Trend Signals

1. **Security is the new baseline** — Gemini CLI shipped 2 critical security patches (variable expansion bypass, SSRF) in a single day; Qwen Code's trust-boundary proposal (#8102) and Copilot's OAuth regressions signal that security hardening is no longer optional. *Recommendation: Prioritize tools with explicit security review pipelines and transparent vulnerability disclosure.*

2. **Session resilience determines enterprise viability** — Every major tool has open issues around compaction failures, interrupted responses, or session recovery. OpenCode's #40576 (continue interrupted responses) and DeepSeek's #5242 (subagent checkpoint resume) are direct responses. *Recommendation: Evaluate tools on their error-recovery semantics, not just feature lists.*

3. **MCP compatibility is a fragmentation risk** — Copilot CLI's `server/discover` regression (#4370), Codex's process leaks (#30408), and Gemini's consent dialog fixes show the MCP ecosystem is still stabilizing. *Recommendation: Test MCP server compatibility with your existing tooling before committing to a CLI.*

4. **Build performance is becoming a competitive differentiator** — DeepSeek TUI's v0.9.5 epic (708 dependencies, 682K-line monolith) and Qwen Code's reverse-dependency test scoping (#8490) reflect industry-wide pain with Rust/TS build times. *Recommendation: For dev tooling adoption, factor in contributor iteration speed, not just end-user experience.*

5. **Per-session configurability is table stakes** — Codex (#14039), Kimi Code (#2583), and Gemini CLI all show strong demand for model/provider/profile selection at the thread or subagent level. *Recommendation: Choose tools that support multi-provider, multi-model workflows without global config swaps.*

6. **ACP protocol is the emerging standardization layer** — Kimi Code, Qwen Code, and DeepSeek TUI are all investing in ACP for cross-client model discovery, permission switching, and tool execution. *Recommendation: Monitor ACP adoption as a signal of long-term ecosystem interoperability.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-05 · Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

| # | PR | Skill / Fix | Functionality | Status |
|---|-----|-------------|---------------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval fix** | Fixes `run_eval.py` reporting `recall=0%` universally; also patches Windows stream reading, trigger detection, and parallel worker bugs. | 🔴 Open |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Prevents orphan lines, widow paragraphs, and numbering misalignment in AI-generated documents. | 🔴 Open |
| 3 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill: Testing Trophy philosophy, AAA unit tests, React Testing Library, edge-case patterns. | 🔴 Open |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | Two meta-skills evaluating skills across structure/docs (20%), prompt engineering, robustness, safety, and more. | 🔴 Open |
| 5 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Mechanical file-verification + four-dimension reasoning quality gate; runs before delivery on any project/stack. | 🔴 Open |
| 6 | [#486](https://github.com/anthropics/skills/pull/486) | **odt** | Create, fill, read, and convert OpenDocument Format files (.odt/.ods); triggers on ODT/ODS/ODF/LibreOffice keywords. | 🔴 Open |
| 7 | [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Lifecycle management for planning artifacts — addresses accumulation of stale plan files in projects. | 🔴 Open |
| 8 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Color knowledge skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), and practical "what to use when" guidance. | 🔴 Open |

---

## 2. Community Demand Trends

Analysis of the top community Issues reveals the following high-demand directions:

- **🔐 Security & trust boundaries** — Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) exposed community skills impersonating official `anthropic/`-namespace skills, triggering urgent discussion around skill provenance and permission hygiene.
- **🏢 Org-wide skill sharing** — Issue [#228](https://github.com/anthropics/skills/issues/228) (16 comments, **8 👍**) is the most upvoted open issue; users want a built-in shared skill library or direct-sharing links instead of manual `.skill` file exchange.
- **🧪 Test generation & quality assurance** — The `testing-patterns` PR [#723](https://github.com/anthropics/skills/pull/723) and the `skill-quality-analyzer` meta-skill [#83](https://github.com/anthropics/skills/pull/83) both reflect strong demand for automated testing and skill-quality feedback loops.
- **📝 Documentation & typographic quality** — The `document-typography` skill [#514](https://github.com/anthropics/skills/pull/514) and `plan-file-hygiene` skill [#1479](https://github.com/anthropics/skills/pull/1479) target document polish and artifact lifecycle — a recurring pain point for users generating deliverables.
- **🤖 Agent governance & reasoning gates** — Proposals for an `agent-governance` skill [#412](https://github.com/anthropics/skills/issues/412) and a reasoning quality-gate pipeline [#1385](https://github.com/anthropics/skills/issues/1385) show demand for pre-delivery verification of AI output quality.

---

## 3. High-Potential Pending Skills

These active PRs have not yet been merged but address well-validated bugs or clear community needs — strong candidates for near-term landing:

| PR | Title | Why It's Likely to Land |
|----|-------|------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | fix(skill-creator): run_eval.py recall=0% | Blocks the entire description-optimization loop; 10+ independent reproductions per the issue thread. Critical infrastructure fix. |
| [#1323](https://github.com/anthropics/skills/pull/1323) | fix(skill-creator): trigger detection misses skill name | Directly related to #1298; same `recall=0%` root cause. |
| [#1261](https://github.com/anthropics/skills/pull/1261) | fix(skill-creator): isolate trigger-eval from live project | Fixes parallel eval writing synthetic commands into the user's live `.claude/commands/` — a correctness and safety issue. |
| [#1099](https://github.com/anthropics/skills/pull/1099) | fix(skill-creator): Windows subprocess crash | Blocks skill-creator on Windows entirely; 1-line fix. |
| [#1050](https://github.com/anthropics/skills/pull/1050) | fix(skill-creator): Windows PATHEXT / encoding bugs | Second Windows fix; together #1099 + #1050 + #1298 unblock the full skill-creator pipeline on Windows. |
| [#538](https://github.com/anthropics/skills/pull/538) | fix(pdf): case-sensitive file references | 8 straightforward reference fixes; breaks on case-sensitive FS. |
| [#539](https://github.com/anthropics/skills/pull/539) | fix(skill-creator): warn on unquoted YAML descriptions | Pre-parse validation preventing silent YAML truncation. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable skill-authoring tooling** — the `skill-creator` eval pipeline is currently broken on multiple fronts (trigger detection, Windows compatibility, parallel-worker isolation), and until those fixes land, the feedback loop for improving and validating new skills cannot function correctly.

Secondary demands around security provenance, org-wide sharing, and pre-delivery quality gates are also significant but are contingent on the authoring pipeline being trustworthy first.

---



# Claude Code Community Digest — 2026-08-05

## 1. Today's Highlights
Claude Code v2.1.222 shipped with targeted fixes for worktree isolation and background agent hook enforcement. Community focus remains on a persistent billing compatibility bug where Fable 5 incorrectly prompts for usage credits on Max plans, alongside ongoing reliability concerns around SSE streaming hangs and desktop session persistence.

## 2. Releases
**v2.1.222**
- Enforces worktree isolation for file edits and Bash across all session types, preventing subagents from running destructive git commands against the main checkout.
- Closes a bypass where `PreToolUse` auto-allow hooks could circumvent tool restrictions in background agent tasks.
[View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.222)

## 3. Hot Issues
1. **[BUG] Fable 5 prompts 'usage credits required' on Max plan** — Blocks rollout of the new standard model for paying users; 61 comments, 21 👍
[View #79337](https://github.com/anthropics/claude-code/issues/79337)

2. **SSE streaming hangs indefinitely + ESC cannot fully cancel** — Core reliability issue for long-running agents; author provided root-cause analysis and fix proposals. 38 comments, 24 👍
[View #33949](https://github.com/anthropics/claude-code/issues/33949)

3. **[BUG] Archived Claude Cowork chats are nowhere to be found** — Raises data-loss concerns for collaborative workflows. 34 comments, 32 👍
[View #22931](https://github.com/anthropics/claude-code/issues/22931)

4. **Persistent always-on Remote Control option for desktop** — CLI supports `remoteControlAtStartup` but Desktop ignores it; highly requested for headless/devops setups. 13 comments, 28 👍
[View #48949](https://github.com/anthropics/claude-code/issues/48949)

5. **[BUG] Claude account /login OAuth loop — state parameter dropped on Linux/IntelliJ** — Auth friction breaking IDE-integrated logins. 23 comments, 15 👍
[View #77966](https://github.com/anthropics/claude-code/issues/77966)

6. **[BUG] Login authenticates but onboarding wall blocks existing Max account** — Regression where `has_finished_claudeai_onboarding=false` locks out verified paid users. 12 comments
[View #83633](https://github.com/anthropics/claude-code/issues/83633)

7. **[BUG] Background agents frequently go idle without delivering final report** — Breaks async agent reliability; re-pinging recovers the task. 8 comments, 7 👍
[View #74113](https://github.com/anthropics/claude-code/issues/74113)

8. **PostToolUse `additionalContext` re-serialized between turns, invalidating prompt cache** — Hurts performance and increases API costs for hook developers. 2 comments, 1 👍
[View #81077](https://github.com/anthropics/claude-code/issues/81077)

9. **[BUG] Desktop shows "no messages yet" for SSH/remote sessions on reopen** — UI/state mismatch; transcript exists on remote host but isn't loaded locally. 4 comments
[View #76124](https://github.com/anthropics/claude-code/issues/76124)

10. **[BUG] Bun 1.3.14 JSC GC segfault on AMD Ryzen 5 5500 / Linux** — Hard crash in the underlying JS runtime; affects all platform binaries. 18 comments
[View #57853](https://github.com/anthropics/claude-code/issues/57853)

## 4. Key PR Progress
1. **#84004** — Restricts frontmatter parsing to the opening YAML block, preventing horizontal rules in Markdown bodies from corrupting config reads.
2. **#84003** — Fixes maintenance scripts to propagate top-level failures instead of silently resolving rejections.
3. **#83999** — Adds validation for `gh` flag values, closing a gap where missing arguments bypassed wrapper checks.
4. **#83995** — Ensures `--add-label` and `--remove-label` receive explicit values before proceeding.
5. **#83993** — Prevents duplicate-tracking scripts from posting self-referential issue comments.
6. **#83992** — Introduces `--expect allow|deny|ask` to `test-hook.sh` so hooks are validated against their intended decision.
7. **#83990** — Detects missing `jq` dependency upfront instead of masking it as malformed JSON.
8. **#83890** — Adds `pylint.yml` to standardize Python linting across the repo.
9. **#83374** — Documents `MessageDisplay` streaming semantics in the plugin-dev skill, closing a documentation gap.

## 5. Feature Request Trends
- **Remote/headless session management** — Persistent remote control toggles, Cloud Mode diff-base overrides, and reliable SSH transcript loading are recurring themes.
- **Session resilience & recovery** — Users want recoverable deletes, preserved input across conversation switches, and graceful handling of desktop reinstalls.
- **Plugin/hook tooling maturity** — Validation, dependency checks, and explicit hook-decision testing point to a growing plugin ecosystem needing stricter guardrails.
- **Task workflow polish** — Batch review of suggested-task chips and better off-screen navigation in VS Code reflect demand for smoother dev loops.

## 6. Developer Pain Points
- **Async agent unreliability** — Background tasks idling without final reports and SSE hangs disrupting long-running workloads.
- **Hook system gaps** — Prompt-cache invalidation from context re-serialization, missing validation in test hooks, and opaque failure modes.
- **Auth

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-05

## 1. Today's Highlights

The Codex team shipped a rapid cascade of Rust CLI alpha releases (0.147.0-alpha.6.1 → .7) over the past 24 hours, signaling active iteration on core tooling. On the issue side, the community remains most frustrated by conversation turn-order bugs (#8648, 81 comments) and MCP server process leaks under sustained multi-thread use. The PR pipeline is dominated by a batch of infrastructure and namespace-cleanup work from `copyberry[bot]`, including canonical tool naming, plugin runtime isolation, and remote compaction for Amazon Bedrock.

## 2. Releases

Four Rust CLI alpha releases landed in the last 24 hours with no detailed changelogs provided:

- **rust-v0.147.0-alpha.7** — Latest alpha in the 0.147 series.
- **rust-v0.147.0-alpha.6.4** — Patch-level increment.
- **rust-v0.147.0-alpha.6.3** — Patch-level increment.
- **rust-v0.147.0-alpha.6.1** — Patch-level increment.

> Links: [GitHub Releases](https://github.com/openai/codex/releases)

## 3. Hot Issues

### #8648 — Codex replies to earlier messages instead of the latest one
*81 comments · 58 👍 · OPEN · context / agent*
The highest-engagement open issue. Users report that in multi-turn conversations, Codex occasionally addresses stale messages rather than the most recent user input, breaking conversational coherence.

### #30408 — MCP server process leak: orphaned threads consume 9+ GB RSS
*23 comments · 6 👍 · OPEN · mcp / app-server / performance*
Each new thread spawns a full set of MCP server processes that are never cleaned up. This unbounded accumulation makes long-running sessions on Codex Desktop a memory hazard.

### #30440 — Codex uses bundled pnpm instead of the host toolchain
*20 comments · 26 👍 · OPEN · sandbox / app*
Build scripts that depend on the host-installed `pnpm` fail because the sandboxed environment forces the bundled version. High upvote count reflects broad developer pain around toolchain determinism.

### #28080 — Desktop thread tools intermittently lose handlers (`No handler registered`)
*19 comments · 2 👍 · OPEN · tool-calls / app / app-server*
Active sessions on Windows lose registered tool handlers mid-session, causing silent failures. A reliability concern for power users running long workflows.

### #37002 — Unable to install after clicking Update in the Codex App
*17 comments · 0 👍 · OPEN · app*
Fresh install failure reported today. The absence of upvotes may indicate it is newly surfaced rather than low-impact.

### #3557 — Codex CLI timeout in sandboxed environment (CLOSED)
*17 comments · 5 👍 · CLOSED · tool-calls*
A pytest timeout under sandboxing was tracked and resolved. Community appreciated the investigation and resolution path.

### #15250 — Custom subagents in `.codex/agents` not accessible from tool-backed sessions (CLOSED)
*16 comments · 16 👍 · CLOSED · tool-calls*
Docs advertised subagent accessibility that wasn't actually working in tool-backed (non-CLI/TUI) sessions. High upvote-to-comment ratio shows strong community alignment on the fix.

### #14039 — Allow per-subagent model/provider/profile selection (CLOSED)
*15 comments · 17 👍 · CLOSED · custom-model*
Feature request granted: subagents can now route through different models or providers than the parent session, addressing a long-standing flexibility gap.

### #16672 — Global search across thread titles and conversation content (CLOSED)
*11 comments · 11 👍 · CLOSED · app*
Requested and delivered: a search bar covering both thread titles and full conversation history, reducing friction for revisiting past work.

### #35864 — Windows unelevated sandbox rejects split writable roots
*10 comments · 0 👍 · OPEN · windows-os / sandbox / CLI*
Includes an attached bugfix. The restricted-token sandbox on Windows was rejecting valid `apply_patch` updates and deletes due to a filesystem override check regression.

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| #37035 | Align registry tests with canonical tool names | ✅ Closed | Normalizes tool-collision reporting into the `functions` namespace; removes obsolete namespaced test. |
| #37031 | Apply permission profile updates to future turn environments | ✅ Closed | Permission profiles are now propagated into each turn's environment config, ensuring session-setting changes take effect. |
| #37027 | Enforce Agent Plugin runtime boundaries | ✅ Closed | Plugin manifests are tracked through the full loading pipeline; app/hook capabilities are excluded from skill discovery. |
| #37022 | Canonicalize default tools under the `functions` namespace | ✅ Closed | All top-level function and custom tool definitions are unified under a single `functions` namespace for Responses Lite providers. |
| #37020 | Enforce strict tool name collision errors | ✅ Closed | Duplicate tool names now fail the build when `[features.tool_registry].error_on_tool_collisions` is enabled. |
| #37000 | Keep shared skill caches fresh across plugin loads | ✅ Closed | Cache keys are derived from filesystem + plugin snapshot identity; concurrent loads for the same key are coalesced. |
| #36998 | Support deferred custom tools in tool search | ✅ Closed | Freeform tools are indexed for search and loaded on-demand, converting to `custom` tool specs after discovery. |
| #36993 | Support `includeTurns` reads for paginated threads | ✅ Closed | Clients requesting full-history views now receive reconstructed turns even when thread history is stored paginated. |
| #36992 | Allow injecting model catalog caches | ✅ Closed | Public `ModelsCache` trait enables caller-provided cache implementations alongside the default file-backed cache. |
| #36981 | Enable remote compaction for Amazon Bedrock | ✅ Closed | Bedrock is marked v1-only for compaction; manual and automatic compaction now use `/v1/responses/compact`. |

> All PRs: [openai/codex/pulls](https://github.com/openai/codex/pulls)

## 5. Feature Request Trends

- **Per-session / per-subagent configurability** — Users want to control model, provider, profile, and fast mode at the thread level rather than globally (#14039, #19982, #14969).
- **Search & discoverability** — Global conversation search (#16672) and better visibility of custom agents and subagents (#15250) reflect a demand for easier navigation of long project histories.
- **Managed model allowlists** — Enterprise / team users requested an enforceable allowlist of selectable models (#28469).
- **Configurable fast mode** — Per-thread fast-mode toggling remains a popular enhancement request (#19982).

## 6. Developer Pain Points

1. **Memory leaks under sustained use** — MCP process leaks (#30408, #35485) and runaway task workers (#36971) cause 5–12 GB RSS growth, directly impacting productivity on long-running sessions.
2. **Toolchain inconsistency in sandboxes** — Bundled tools (pnpm #30440) and host-toolchain mismatches create reproducible build failures that are hard to diagnose.
3. **Windows-specific sandbox regressions** — Multiple Windows issues (#28080, #35864, #31625, #32574) cluster around sandbox root handling, handler registration, and custom-provider history loss.
4. **Session turn-order bugs** — The #8648 bug of responding to stale messages erodes trust in multi-turn workflows and is the single most-discussed open issue.
5. **Opaque compaction & expiration behavior** — Auto-compaction loops (#33493) and quick `/.side` chat expiration (#25233) leave users unsure why sessions are being trimmed or lost.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-05

## 1. Today's Highlights

Two critical security patches landed today addressing shell variable expansion bypasses (GHSA-related) and an SSRF vulnerability via synchronous IP checking in web fetches. Additionally, a fix for the `sendStream` crash on malformed tool arguments resolves a persistent stability issue, while the nightly release pipeline for v0.55.0 hit a snag with npm dist-tag deletion on the Wombat registry.

---

## 2. Releases

**Nightly release failure** — The v0.55.0-nightly.20260805 build failed due to an npm dist-tag deletion error on the Wombat Dressing Room fallback registry, which rejects tag removal with a 403. A fix is already under review ([PR #28694](https://github.com/google-gemini/gemini-cli/pull/28694)). No stable release shipped in the last 24 hours.

---

## 3. Hot Issues

1. **[Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** — The `codebase_investigator` subagent incorrectly reports `status: "success"` with `Termination Reason: GOAL` when it actually hits the turn limit before completing analysis. P1 bug, 12 comments, 2 👍. Community impact: high — misleading success states confuse users and break downstream workflows.

2. **[Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)** — Simple operations like folder creation cause the generalist agent to hang forever; waiting up to an hour confirmed no recovery. Disabling sub-agents is the only known workaround. P1, 8 comments, 8 👍 — the most upvoted open issue this cycle.

3. **[Shell command execution stuck with "Waiting input"]**(https://github.com/google-gemini/gemini-cli/issues/25166) — After executing simple CLI commands, Gemini hangs showing "Awaiting user input" even though the shell command has completed. P1, 4 comments, 3 👍.

4. **[Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** — The browser agent terminates with `GOAL` immediately on Wayland sessions. P1, 4 comments, 1 👍. Affects Linux users exclusively.

5. **[Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** — Follow-up to the behavioral evals initiative; 76 eval tests have been generated across 6 supported Gemini models. P1, 7 comments. Tracks the growing eval infrastructure effort.

6. **[AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** — Epic investigating whether AST-aware tools can reduce turn counts and token noise by reading precise method bounds. P2, 7 comments, 1 👍.

7. **[Stop Auto Memory from retrying low-signal sessions](https://github.com/google-gemini/gemini-cli/issues/26522)** — Low-signal sessions are never marked processed, causing them to be surfaced indefinitely. P2, 5 comments.

8. **[Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** — Anecdotal but widely felt: custom skills (e.g., "gradle", "git") are ignored unless explicitly instructed. P2, 6 comments.

9. **[Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** — Transcript content reaches the model before redaction occurs, creating a privacy gap. P2, 4 comments.

10. **[Nightly Release Failed for v0.55.0-nightly.20260805](https://github.com/google-gemini/gemini-cli/issues/28692)** — Release pipeline failure tracked as P1. Directly impacts nightly consumers.

---

## 4. Key PR Progress

1. **[Fix: don't abort sendStream on malformed tool arguments](https://github.com/google-gemini/gemini-cli/pull/28695)** — Guards an uncaught `JSON.parse()` in `GeminiCliSession.sendStream()` that throws out of the generator when tool arguments are malformed. Fixes #28649.

2. **[Fix: handle npm dist-tag deletion failures on Wombat registry](https://github.com/google-gemini/gemini-cli/pull/28694)** — Workaround for registries that return 403 on tag deletion, unblocking nightly release flows.

3. **[Fix: block $VAR and ${VAR} variable expansion bypass](https://github.com/google-gemini/gemini-cli/pull/28691)** — Closes an incomplete check in `detectBashSubstitution()` / `detectPowerShellSubstitution()` that allowed variable expansion to slip past the security gate (related to GHSA-wpqr-6v78-jr5g). Defense-in-depth hardening included.

4. **[Fix: resolve SSRF vulnerability in web-fetch.ts](https://github.com/google-gemini/gemini-cli/pull/28557)** — Replaces synchronous `isPrivateIp()` with async DNS resolution so domain names resolving to internal IPs (e.g., `169.254.169.254`) are correctly blocked. Fixes #28555.

5. **[Fix: unwrap nested gaxios streaming errors from cause message](https://github.com/google-gemini/gemini-cli/pull/28689)** — Extracts structured errors (rate limits, capacity exhaustion) from `error.cause.message` during streaming, improving error visibility.

6. **[Fix: guard formatTruncatedToolOutput against non-positive maxChars](https://github.com/google-gemini/gemini-cli/pull/28639)** — Prevents ~2x output inflation when `maxChars <= 0` due to negative-index `String.prototype.slice` behavior. Fixes #28620.

7. **[Fix: prevent ghost text wrapping infinite loop at narrow widths](https://github.com/google-gemini/gemini-cli/pull/28641)** — Resolves an infinite loop in `getGhostTextLines` when `inputWidth` is narrower than a single wide codepoint (CJK/emoji). Fixes #19985.

8. **[Fix: reflect full MCP server config in consent dialog](https://github.com/google-gemini/gemini-cli/pull/28664)** — Consent prompts now show `env`, `cwd`, and `headers` fields, and re-prompt logic compares the full config on updates.

9. **[Fix: dynamically resolve Cloud Workstations proxy redirect URI for OAuth](https://github.com/google-gemini/gemini-cli/pull/28688)** — OAuth flows inside GCP Workstations VMs now resolve the correct redirect URI instead of hardcoding `localhost`.

10. **[Feat: eval validation CLI + local report command](https://github.com/google-gemini/gemini-cli/pull/28344 & #28369)** — Adds `eval:validate` (static analysis with 9 CI-gateable rules) and `eval:report` (aggregated pass-rate summaries by model from Vitest output).

---

## 5. Feature Request Trends

- **Stronger evaluation infrastructure** — Multiple issues and PRs converge on improving eval coverage (component-level evals, eval validation, local reporting, triage framework). The community is pushing for more robust, CI-integrable testing.
- **Auto Memory reliability & privacy** — Repeated requests to fix infinite retry loops on low-signal sessions, improve redaction timing, and surface/quarantine invalid patches.
- **Sub-agent resilience and observability** — Users want sub-agents to be used more reliably by default, to have their trajectories visible via `/chat share`, and to report context correctly in `/bug` reports.
- **AST-aware tooling** — Ongoing interest in replacing naive file reads/searches with AST-based alternatives to reduce token waste and turn counts.
- **Local / OpenAI-compatible endpoint support** — PR #28681 adds SGLang and local OpenAI-compatible endpoint support, signaling community demand for self-hosted inference options.

---

## 6. Developer Pain Points

- **Agent hangs and non-termination** — The generalist agent hanging (#21409) and shell commands stuck in "Waiting input" (#25166) are the top reproducibility complaints. Both block productive workflows and lack clean recovery paths.
- **Sub-agent reliability** — Sub-agents reporting false success (#22323), ignoring config overrides (#22267), failing on Wayland (#21983), and running without explicit permission since v0.33.0 (#22093) create a fragmented trust gap.
- **Security gate bypasses** — Variable expansion bypasses (#28691) and SSRF via unchecked domains (#28557) highlight that security checks are sometimes incomplete, eroding user confidence.
- **Auto Memory infinite loops** — Low-signal sessions stuck in retry loops (#26522) and invalid patches silently dropped (#26523) make the memory system unpredictable.
- **Terminal / rendering glitches** — Ghost text infinite wrap at narrow widths (#28641), terminal corruption after external editor exits (#24935), and flicker on resize (#21924) point to ongoing UX instability in the TUI layer.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-05

---

## 1. Today's Highlights

GitHub Copilot CLI v1.0.79-2 shipped with a prompt UI polish that pins the current prompt higher to preserve visual shape while saving a terminal row; v1.0.79-1 introduced a **breaking rename** of the sandbox setting `allowDevToolCaches` → `allowDevToolAccess`. Two new issues landed today around MCP initialization failures and OAuth 3LO flow errors, while session/prompt reliability remains a recurring theme across the tracker.

---

## 2. Releases

**v1.0.79-2** ([GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.79-2))
- Pin the current prompt one row higher, in the tab-bar row, so the copied prompt retains its shape while freeing one timeline row.
- Pinned prompts are now **off by default** on terminals under 30 rows to avoid crowding output; controlled via `pinnedPrompts` setting.

**v1.0.79-1** ([GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.79-1))
- ⚠️ **BREAKING:** Sandbox setting `allowDevToolCaches` renamed to `allowDevToolAccess` — the key now governs dev-tool config *and* registries, not just caches. The old key is silently ignored; existing `false` opt-outs revert to default (on). Users must rename the key in their config.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#1504](https://github.com/github/copilot-cli/issues/1504) | Custom theme support | Users want shareable, JSON-based themes beyond the built-in palette — a high-demand DX improvement. | 👍 23 · 8 comments |
| [#1697](https://github.com/github/copilot-cli/issues/1697) | Session forking (branch conversations) | Enables parallel exploration from a shared context — a workflow gap many developers hit. | 👍 25 · 3 comments |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | Org-level agents not visible in CLI/VS Code | Enterprise users report agents in `{org}/.github-private` repos are invisible in tooling despite correct templates. | 👍 9 · 7 comments |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | MCP init fails with FastMCP (`-32602`) | v1.0.79-1 breaks compatibility with servers that don't implement `server/discover`; a regression with real-world impact. | 👍 1 · 2 comments |
| [#4196](https://github.com/github/copilot-cli/issues/4196) | BYOK streaming wire API fails on `reasoning_content` | Models emitting `reasoning_content` in deltas cause 5 retry loops and silent failures for BYOK users. | 👍 0 · 2 comments |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | Ctrl+H misinterpreted under WSL2 | WT_SESSION leakage causes `Ctrl+H` (delete char) to behave like `Ctrl+W` (delete word) — a frustrating input bug. | 👍 0 · 5 comments |
| [#4005](https://github.com/github/copilot-cli/issues/4005) | Enterprise billing entity not selected | Memory saves fail with "billing entity isn't selected" in enterprise setups, breaking a core feature. | 👍 3 · 4 comments |
| [#4026](https://github.com/github/copilot-cli/issues/4026) | Windows native runtime crashes | Recurring, unpredictable crashes on Windows across multiple versions since May 2026 — unresolved. | 👍 0 · 1 comment |
| [#4361](https://github.com/github/copilot-cli/issues/4361) | Slash-command plugin skills no longer rewrite to NL | A regression: plugin skills invoked via `/skill-name` now fire a doomed RPC instead of being rewritten to natural language. | 👍 0 · 1 comment |
| [#4093](https://github.com/github/copilot-cli/issues/4093) | `web_search` returns fabricated answers | The built-in web search tool confidently generates hallucinated answers with no grounding when retrieval finds nothing. | 👍 0 · 0 comments |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#4355](https://github.com/github/copilot-cli/pull/4355) | Merge | Open PR — details not yet populated in tracker. |
| [#4366](https://github.com/github/copilot-cli/pull/4366) | Security remediation — Vault app `copilot-cli` | Resolves fundamental security findings for the Vault app in CI and production environments. Requires replacing `<UPDATE_ME>` placeholders before merge. |

> **Note:** Only 2 PRs were active in the last 24 hours, both in early review stages.

---

## 5. Feature Request Trends

- **Custom theming & accessibility** — Multiple open requests (issues #1504, #3898) for user-defined themes and fixable color contrast bugs signal strong demand for personalization and accessibility.
- **Session management & persistence** — Recurring asks for cloud-synced sessions (#1947, closed), session forking (#1697), session heartbeat/status (#1343, closed), and session-delete commands (#2019, closed) point to a clear desire for richer cross-device and multi-session workflows.
- **Bring Your Own Model (BYOK) extensibility** — Beyond the existing BYOK path, users want broader custom endpoint support (#4139, closed) and reliable streaming with models that emit `reasoning_content` (#4196).
- **Plugin & skill ergonomics** — Auto-updating plugins (#1709, closed) and reliable slash-command routing (#4361, #4048) remain top-of-mind for the plugin ecosystem.
- **Persistent context bar** — A token-usage indicator always visible in the CLI (#2532, closed) was requested and addressed, but the conversation suggests ongoing interest in visibility into resource consumption.

---

## 6. Developer Pain Points

1. **MCP compatibility regressions** — v1.0.79-1's `server/discover` requirement breaks FastMCP servers (#4370), and OAuth 3LO flows fail with URL-elicitation errors (#4371). Developers using third-party MCP tooling are hitting hard blockers.
2. **Input/keyboard bugs on Windows & WSL2** — `Ctrl+H` misbehavior under WSL2 (#4328) and native runtime crashes on Windows (#4026) erode trust in the CLI's stability on those platforms.
3. **Plugin skill routing broken** — Slash commands for plugin skills no longer auto-rewrite to natural language (#4361) and repo-level plugin skills are invisible in `/skills` (#4048), frustrating plugin authors and users.
4. **Hallucinated search results** — The `web_search` tool returns confident but fabricated answers with no grounding (#4093), a credibility risk for developers relying on it.
5. **Enterprise feature gaps** — Org-level agents not surfacing (#1285) and billing-entity selection failures for memory saves (#4005) create friction for teams adopting Copilot at scale.
6. **BYOK streaming reliability** — Models emitting `reasoning_content` in deltas cause retry storms and failures (#4196), making BYOK with certain providers unreliable.
7. **Stashed input loss on session switch** — Prompts stashed with `Ctrl+S` are discarded when switching sessions (#4334), risking lost work.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-05

## 1. Today's Highlights

Two new bug reports surfaced today: one documenting agent reliability degradation at high context fill (~500K tokens), and another describing an abnormal CLI exit on Windows. Meanwhile, community momentum continues to build around long-requested features—persistent memory and remote session control—while ACP protocol enhancements make steady progress through pull requests.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

**[#2586] Agent reliability degrades at high context fill** [CLOSED]
Agent sessions orchestrating multi-step code changes show sharp reliability drops once context exceeds ~500K tokens, with symptoms including repetitive action loops, no escalation, and instruction drift. Critical for users running long agentic workflows.
→ https://github.com/MoonshotAI/kimi-cli/issues/2586

**[#2587] Abnormal CLI exit during normal session advancement** [OPEN]
A Windows user on Kimi Code v0.29.2 with K3 high model reports the CLI crashing unexpectedly while progressing through a session. Early report with no comments yet.
→ https://github.com/MoonshotAI/kimi-cli/issues/2587

**[#2584] Thai/IME characters duplicated on Windows** [OPEN]
Thai and other IME-based characters are duplicated when typing in the prompt on Windows 11 (v0.31.1). Affects non-Latin keyboard users significantly.
→ https://github.com/MoonshotAI/kimi-cli/issues/2584

**[#1282] Remote Control — continue sessions from any device** [OPEN]
Allows continuing a local Kimi Code CLI session from a phone, tablet, or browser. Highly requested with 24 👍 and 12 comments. Enables workflow continuity when stepping away from the desk.
→ https://github.com/MoonshotAI/kimi-cli/issues/1282

**[#1283] Memory System — persistent context across sessions** [OPEN]
Proposes both automatic (AI-managed) and manual (user-defined) memory to retain project patterns and preferences. 17 comments signal strong community interest.
→ https://github.com/MoonshotAI/kimi-cli/issues/1283

**[#2583] ACP: advertise models & mid-session switching** [OPEN]
ACP clients (Happy Coder, Zed) currently cannot discover available models or switch mid-session. This feature request would expose model lists and switching via the ACP protocol.
→ https://github.com/MoonshotAI/kimi-cli/issues/2583

## 4. Key PR Progress

**[#2200] fix(shell): adapt timeouts for long commands**
Extends shell timeouts automatically for slow operations (git submodule cleanup, clone/fetch, package installs, builds) while keeping the 60s default for normal commands. Open since May; awaits review.
→ https://github.com/MoonshotAI/kimi-cli/pull/2200

**[#2585] feat(cli): set AI_AGENT for subprocesses**
Exposes `AI_AGENT=kimi` to subprocesses across both pip/uv and standalone binary entrypoints, preserving explicit values from wrappers. Helps orchestrators identify Kimi-launched processes.
→ https://github.com/MoonshotAI/kimi-cli/pull/2585

**[#2364] feat(acp): support permission mode switching**
Adds protocol-level ACP permission mode switching for Kimi sessions, advertising default modes. Stacks on top of PR #2363 and resolves #1414.
→ https://github.com/MoonshotAI/kimi-cli/pull/2364

## 5. Feature Request Trends

- **Session continuity & portability**: Remote control (#1282, 24 👍) and cross-device session resumption are the most upvoted requests, indicating users want to extend CLI workflows beyond the local terminal.
- **Persistent memory**: The memory system (#1283) reflects demand for long-term context retention—both AI-managed and user-defined—so the CLI "remembers" projects and preferences.
- **ACP protocol maturity**: Model discovery and mid-session switching (#2583), plus permission mode switching (#2364), show the community is actively integrating Kimi Code CLI into broader ACP ecosystems (mobile apps, editors like Zed).

## 6. Developer Pain Points

- **Agent reliability at scale**: Context-fill degradation above ~500K tokens (#2586) is a known friction point for long-running agentic workflows, suggesting a need for context management or session-splitting strategies.
- **Windows IME compatibility**: Character duplication for Thai and other IME-based inputs (#2584) points to ongoing input-handling gaps on Windows that affect non-Latin keyboard users.
- **Unexpected exits**: Crashes during normal session advancement (#2587) erode trust in CLI stability, especially for extended coding tasks.
- **ACP discoverability**: Clients cannot list or switch models mid-session (#2583), creating a fragmented experience for users driving Kimi Code CLI through third-party ACP frontends.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-05

---

## 1. Today's Highlights

OpenCode v1.18.13 shipped with TUI GitHub PR review context improvements and a batch of desktop RTL layout fixes. A major refactoring stack from @Brendonovich is actively migrating the desktop app to V2 APIs, while the community continues pushing for Go plan usage transparency and interrupted-response recovery.

---

## 2. Releases

### v1.18.13
- **[TUI]** GitHub pull request reviews now include the PR number and URL in context, improving traceability during code review workflows.
- **[Desktop]** Fixed multiple right-to-left layout issues across tabs, drawers, resizing, and titlebar interactions, including shared directional icon behavior.

🔗 https://github.com/anomalyco/opencode/releases

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Response |
|---|-------|---------------|-------------------|
| #16017 | [FEATURE] Go plan usage/balance API endpoint | OpenCode Go subscribers have no programmatic way to check rolling/weekly/monthly usage limits — the only visibility is the web console. This blocks automation and CLI workflows. | 🔥 126 👍 · 30 comments · widely supported |
| #38723 | `opencode run` intermittently hangs during init | ~56% failure rate observed; the process produces zero stdout, no error, and no session — only an external timeout can unstick it. Impacts headless/CI usage. | 5 comments · 1 👍 · high friction for non-interactive use |
| #40243 | ChatGPT OAuth rejects GPT-5.6 for EU-resident workspaces | EU data residency is supported by official Codex CLI but fails in OpenCode, blocking users who cannot generate API keys for their project. | 4 comments · 4 👍 · regulatory compliance concern |
| #40572 | Electron renderer freeze (~3s) on desktop | Solid.js reactive dependency cycle amplified by ResizeObserver thrashing and API rate-limit retry storms causes visible freezes and degraded performance. | 2 comments · desktop UX regression |
| #30862 | Stuck with no response/error after update | Users report the app hangs silently — session title changes (LLM working) but no output reaches the UI. Reinstallation doesn't help. | 12 comments · 1 👍 · recurring stability concern |
| #30963 | Migration deletes entire event log | PR #30785's migration ran unconditional `DELETE FROM event` and `UPDATE session SET workspace_id = NULL`, wiping user data on upgrade. | 4 comments · 1 👍 · data-loss severity |
| #39207 | GitHub OAuth login fails — email param empty | Server-side SQL error during OAuth callback; `account_id` resolves but email is blank, breaking the `user` update. | 5 comments · 1 👍 · auth flow regression |
| #28590 | `writeOsc52` broken under GNU screen | Uses tmux-specific `\x1bPtmux;` wrapper for both tmux and GNU screen, causing clipboard ops to fail in screen sessions. | 10 comments · 2 👍 · terminal compatibility gap |
| #40588 | Free tier cuts off mid-task with no warning | `opencode/deepseek-v4-flash-free` silently stops mid-response when allowance is exhausted; no countdown or remaining-quota visibility. Affects non-technical Home Assistant users. | 2 comments · new feature request |
| #22233 | Subagent runtime visibility in chat UI | Users can't see which subagent is running, what it's doing, or how long it's been active — only vague "wait for xxx to return" messages. | 7 comments · 0 👍 · workflow transparency gap |

---

## 4. Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| #40378 | refactor | **Migrate supported V2 APIs** — moves session transport, catalog, location, file, project-copy, workspace, PTY lifecycle, provider credentials, and MCP integrations to the current V2 API surface. *(Stack 3/6)* |
| #40382 | refactor | **Remove v1 compatibility** — strips V1 protocol detection, compatibility adapters, legacy client surfaces, and migration docs; routes all App traffic exclusively through the V2 client. |
| #40381 | refactor | **Gate unsupported V2 capabilities** — hides or disables controls whose APIs are unavailable on V2 servers, preserving working V1 behavior behind a single legacy capability facade. |
| #40376 | fix | **Reconcile V2 session projections** — marks message pages complete when cursor is exhausted, prunes stale projected sources, and aligns fixture tool identity with V2. |
| #40375 | refactor | **Own rendering contracts** — defines App-owned message and part projection contracts, routing rendering type imports through the App boundary. |
| #40576 | fix | **Continue interrupted responses** — preserves output-bearing attempts when a provider response ends unexpectedly, schedules continuation, and appends a hidden synthetic user message to resume without repetition. |
| #40582 | feat | **Inline conversation visualizations (Desktop)** — lets the model write versioned HTML fragments through `visualize()` for rich in-chat renderings. |
| #40566 | feat | **Preserve compaction tail media** — raises default retained compaction context from 8K to 15K tokens and preserves image/audio/video/PDF media in the retained tail. |
| #40590 | feat | **Support GITHUB_TOKEN auth in install script** — replaces anonymous GitHub requests (version check, release existence, asset download) with authenticated calls to avoid rate limits. |
| #40538 | fix | **Make xAI OAuth device-only** — replaces loopback OAuth with RFC 8628 device authentication, enabling SuperGrok subscription to work both locally and remotely. |
| #40567 | fix | **Keep home sessions without opened projects** — extracts home session record builder into a pure helper and prevents the entire session list from being dropped when no local project is open. |
| #37620 | fix | **Use custom titlebar on Linux** — extends custom titlebar configuration (previously macOS-only) to Linux Electron windows, resolving native GTK decoration fallback. |

---

## 5. Feature Request Trends

- **Subscription usage transparency** — Multiple open requests (#16017, #40584, #40588) demand CLI/TUI exposure of Go plan limits, free-tier countdowns, and per-window usage data. The current web-only console is a consistent pain point.
- **Headless and CI-oriented APIs** — `opencode run --format json` model attribution (#40581, #40545) and the `GITHUB_TOKEN` install script auth (#40590) reflect growing non-interactive usage.
- **Session and agent observability** — Subagent visibility (#22233), the `/handoff` command (#40578), and compaction tail preservation (#40566) all point to users wanting deeper insight into multi-agent workflows.
- **Resilience and continuity** — Interrupted-response recovery (#40576) and the `opencode run` hang issue (#38723) show a demand for fault-tolerant, resumable sessions.

---

## 6. Developer Pain Points

1. **Authentication regressions** — GitHub OAuth (#39207), xAI OAuth (#40538), and ChatGPT EU workspace OAuth (#40243) issues suggest the auth layer is a frequent failure surface, especially for edge-case environments (EU residency, remote/CI, containerized).
2. **Data-loss risk on upgrades** — The migration that unconditionally wiped the event log (#30963) is a stark reminder that schema migrations need safer guarantees.
3. **Desktop performance on Electron** — Renderer freezes (#40572) and WSL-specific output issues (#20234) indicate the desktop client struggles with reactivity thrashing and terminal emulation edge cases.
4. **Terminal environment compatibility** — GNU screen OSC52 handling (#28590) and WSL line-break behavior (#20234) show that terminal emulation assumptions don't generalize well across environments.
5. **Silent failures in headless mode** — `opencode run` hanging with zero output (#38723) and free-tier cutoffs mid-task (#40588) make debugging and automation unreliable.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026‑08‑05

## Today's Highlights
The most active discussions this cycle revolve around **Copilot Enterprise compaction failures** and **Windows‑specific path and rendering bugs**, with several fixes already merged. A strong wave of provider‑expansion work (Cortecs, LLM Gateway, Qwen) and TUI/rendering improvements (Mermaid, iTerm2 images, scroll fixes) also moved forward.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

### 1. Compaction fails with Copilot Enterprise (421 / unknown stamp) — [#6768](https://github.com/badlogic/pi-mono/issues/6768), [#7413](https://github.com/badlogic/pi-mono/issues/7413), [#7579](https://github.com/badlogic/pi-mono/issues/7579)
**Why it matters:** Compaction is a core reliability feature; when it breaks on enterprise seats the agent falls back to full context, degrading performance and increasing costs. The issue surfaces two variants—a 421 Misdirected Request and an “unknown stamp” auth error—and drew **18 👍** on the primary report. Community consensus is that the summarization endpoint is dropping the resolved `baseUrl` during the compaction call.

### 2. Windows path handling in WSL and native environments — [#7064](https://github.com/badlogic/pi-mono/issues/7064), [#6817](https://github.com/badlogic/pi-mono/issues/6817), [#7547](https://github.com/badlogic/pi-mono/issues/7547)
**Why it matters:** Windows users report that `read`/`write`/`edit` tools fail because absolute paths are mishandled across WSL, and `find` ignores path separators in glob patterns. Issue #7547 is a community‑driven survey to prioritise Windows support; #7064 and #6817 show the concrete failure modes. These bugs block a large developer segment from using Pi out‑of‑the‑box.

### 3. TUI crash on long dialog lines — [#7528](https://github.com/badlogic/pi-mono/issues/7528)
**Why it matters:** A custom dialog line that exceeds terminal width crashes the whole process with an uncaught exception instead of truncating gracefully. This is a severe reliability issue for extension authors and power users who customise the UI.

### 4. node:sqlite missing in release binary — [#7594](https://github.com/badlogic/pi-mono/issues/7594)
**Why it matters:** Extensions that depend on `node:sqlite` (e.g., `pi-total-recall`) fail to load with “No such built‑in module.” The problem affects the shipped binary and blocks plugin ecosystems until the release packaging is corrected.

### 5. OAuth refresh stalls and freezes the session — [#7508](https://github.com/badlogic/pi-mono/issues/7508)
**Why it matters:** A stalled token refresh holds the cross‑process credential‑store lock for ~5 minutes, freezing the entire Pi session. Users on flaky networks or corporate proxies experience long, uninterruptible hangs during mid‑turn auth rotations.

### 6. Configurable thinking level/model for compaction — [#7553](https://github.com/badlogic/pi-mono/issues/7553)
**Why it matters:** Auto‑compaction currently reuses the session’s thinking level, making it impossible to give summarisation its own budget. Reasoning‑model users want to decouple compaction cost from the main turn, a request that has already spawned a PR (#7602).

### 7. Mermaid diagram rendering in markdown — [#7623](https://github.com/badlogic/pi-mono/issues/7623)
**Why it matters:** Users regularly ask for native rendering of Mermaid diagrams to improve readability of technical explanations. The feature is straightforward to add (via `grok-mermaid`) and has already seen a PR.

### 8. Fullscreen mode keybindings consumed by transcript — [#7574](https://github.com/badlogic/pi-mono/issues/7574)
**Why it matters:** In fullscreen UI mode, Home/End/PageUp/PageDown never reach the editor because the transcript viewport steals them. This breaks navigation for users who rely on the fullscreen layout.

### 9. Successful retries leave permanent red error lines — [#7613](https://github.com/badlogic/pi-mono/issues/7613)
**Why it matters:** When a transient fetch error is retried and succeeds, the red error line remains in the chat, making the history look failure‑prone and confusing for users reviewing past turns.

### 10. Copilot models missing after login — [#7634](https://github.com/badlogic/pi-mono/issues/7634)
**Why it matters:** After a successful `/login`, `availableModelIds` is empty because the API now returns models with `model_picker_enabled === false`. Users cannot select any Copilot model until the filter is adjusted.

---

## Key PR Progress

| PR | Summary | Status |
|----|---------|--------|
| [#7602](https://github.com/badlogic/pi-mono/pull/7602) | **Configurable summarization models & thinking levels** – Allows per‑compaction model/thinking settings, addressing #7553. | Open |
| [#7624](https://github.com/badlogic/pi-mono/pull/7624) | **Render Mermaid diagrams in markdown** – Closes #7623 using the `grok-mermaid` library. | Open |
| [#7612](https://github.com/badlogic/pi-mono/pull/7612) | **Add `size` param to iTerm2 image encoder** – Satisfies `@xterm/addon-image@0.9.0` requirement, fixing image rendering in xterm.js terminals. | Open |
| [#7597](https://github.com/badlogic/pi-mono/pull/7597) | **Make extension selector scrollable in fullscreen** – Wraps long diffs in a `ScrollView` so yes/no actions remain visible. | Open |
| [#7632](https://github.com/badlogic/pi-mono/pull/7632) | **Retry transient management HTTP requests** – Retries idempotent calls to pi.dev, GitHub releases, and tools; closes #6675. | Open |
| [#7619](https://github.com/badlogic/pi-mono/pull/7619) | **Resume failed turns from /tree** – Selecting an errored assistant entry retries the turn in‑place, improving recovery from dropped connections. | Open |
| [#7621](https://github.com/badlogic/pi-mono/pull/7621) | **Expose argument completions via RPC** – Adds `get_argument_completions` command so embedded clients (e.g., web UIs) can surface slash‑command completions. | Closed |
| [#7610](https://github.com/badlogic/pi-mono/pull/7610) | **Add LLM Gateway & LLM Gateway DevPass providers** – Built‑in `openai-completions` providers for the LLM Gateway router, contributed by the provider team. | Open |
| [#7571](https://github.com/badlogic/pi-mono/pull/7571) | **Add Cortecs provider support** – European AI router integrated via models.dev, expanding the built‑in provider catalogue. | Closed |
| [#7396](https://github.com/badlogic/pi-mono/pull/7396) | **Add server session backend** – Durable JSONL session persistence with cross‑process locking and crash recovery for `PiServer`. | Closed |

---

## Feature Request Trends

1. **Configurable compaction & summarization** – Users want independent model, thinking level, and context‑window settings for automatic and manual compaction (multiple open issues, now addressed by PR #7602).
2. **Expanded provider ecosystem** – Continued demand for built‑in support for European routers (Cortecs), OpenRouter‑style gateways (LLM Gateway), and region‑specific plans (Qwen Token Plan Individual).
3. **Rich media & diagram rendering** – Mermaid diagrams and improved terminal image support (iTerm2 size param) are recurring requests to make technical output more readable.
4. **RPC & embedding capabilities** – Requests for argument completions, auth flow exposure, and socket‑based RPC indicate growing interest in embedding Pi in custom UIs and tools.
5. **Context‑window controls** – Users explicitly ask for a setting to select the context‑window size, similar to what Copilot CLI offers.

---

## Developer Pain Points

- **Enterprise Copilot compaction breaks** – The summarization endpoint drops the resolved `baseUrl` or returns 421/unknown‑stamp errors, forcing full‑context turns and increasing cost.
- **Windows path inconsistencies** – `read`/`write`/`edit` tools fail on WSL absolute paths; `find` ignores path separators in globs; recursive `loadSkills` throws `RangeError` from the `ignore` library.
- **TUI stability under edge‑case input** – Long dialog lines crash the process; fullscreen keybindings are stolen by the transcript; chat scroll jumps when tool blocks exceed the viewport.
- **Auth refresh freezes** – A stalled OAuth token refresh blocks the credential‑store lock for minutes, freezing the entire session.
- **Missing built‑in modules in releases** – `node:sqlite` is not bundled in the release binary, breaking extensions that depend on it.
- **Provider model‑filtering regressions** – Changes in Copilot’s API response shape (e.g., `model_picker_enabled` flag) silently hide available models after login.
- **Retry semantics leave visual artefacts** – Successful retries after transient errors still display red error lines, confusing users reviewing chat history.
- **Configuration merging bugs** – Project‑level `retry.provider` objects replace global objects instead of recursively merging, silently dropping unoverridden settings.

---

*Data source: github.com/badlogic/pi-mono · Generated 2026‑08‑05*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-05

## 1. Today's Highlights

Qwen Code released v0.21.6-preview.0 and a nightly build, adding alpha readiness diagnostics for the browser extension and documentation for headless Goal workflows. The community is actively debating a foundational trust boundary proposal (#8102, 17 comments) to keep the LLM outside the agent runtime's trust domain, while several high-impact PRs advance live voice, S2 input expansion, and Gemini/Vertex prompt caching.

---

## 2. Releases

**v0.21.6-preview.0** / **v0.21.5-nightly.20260805.32e274157**

- **feat(browser-ext):** Alpha readiness diagnostics added to the browser extension (#6739) — helps surface configuration and connectivity issues early.
- **docs:** Headless Goal workflows now documented, supporting unattended automation scenarios.

> 🔗 [v0.21.6-preview.0](https://github.com/QwenLM/qwen-code/releases) · [v0.21.5-nightly.20260805.32e274157](https://github.com/QwenLM/qwen-code/releases)

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | Deterministic tool-execution boundaries for a trustworthy agent runtime | Proposes keeping the LLM outside the trust boundary and constraining/authorizing/model-evaluating its outputs deterministically — a foundational security direction. | 17 comments; high engagement on trust-boundary design. |
| [#8519](https://github.com/QwenLM/qwen-code/issues/8519) | Severe screen flickering in tmux | Blocks users who rely on tmux for terminal multiplexing; reported as a rendering bug in interactive sessions. | 11 comments · **CLOSED** |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | Bound multi-workspace daemon resource usage | Current count-only limits (workspace/session counts) don't bound bytes held by request bodies, WebSocket assembly, or other memory. Critical for production `qwen serve`. | 9 comments; tagged P2/daemon. |
| [#8136](https://github.com/QwenLM/qwen-code/issues/8136) | Provider warning sanitizer truncates messages containing a port, and leaks a password containing `@` | A security-relevant bug: credentials in provider URLs are not properly redacted in `/status` payloads. | 8 comments; tagged security. |
| [#8532](https://github.com/QwenLM/qwen-code/issues/8532) | CI logs make mocked disk-full test errors look like runner ENOSPC | Unit tests that deliberately throw `disk full` errors produce production-looking stderr noise in CI, confusing debugging. | 5 comments · development/CI. |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | After `APIUserAbortError`, subsequent turns are not written to local session transcript | Session recovery is silently broken after an abort — all subsequent turns are lost from the local transcript. | 5 comments · P2/session-management. |
| [#4362](https://github.com/QwenLM/qwen-code/issues/4362) | Auto Fix CI & Address Review Comments workflow | Opt-in GitHub Actions workflow for automatic CI fixing and review-comment resolution. 2 👍 | 5 comments · **CLOSED** |
| [#8550](https://github.com/QwenLM/qwen-code/issues/8550) | `qwen mcp list` hangs indefinitely on SSE servers that never send `endpoint` | A dead lock in the MCP transport when an SSE server accepts the connection but never emits the legacy `endpoint` event. | 4 comments · P2/MCP. |
| [#2460](https://github.com/QwenLM/qwen-code/issues/2460) | Repeated "edit failed" causing project corruption | Persistent edit failures across CLI and VS Code plugin; users reported tool invocations damaging code when falling back to raw node/ps edits. | 4 comments · **CLOSED** |
| [#8533](https://github.com/QwenLM/qwen-code/issues/8533) | Content[]/Part[] cannot safely encode per-provider reasoning-replay contracts | Foundational gap: the content model can't represent per-provider reasoning-replay contracts, blocking cross-provider consistency. | 4 comments · P2/core. |

---

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#8490](https://github.com/QwenLM/qwen-code/pull/8490) | `feat(review): test the diff's reverse-dependency closure` | Scopes the test suite to only the reverse-dependency closure of touched workspaces, cutting review wall-clock time. Stacked on #8468. |
| [#8561](https://github.com/QwenLM/qwen-code/pull/8561) | `feat(web-shell): add session workflow cockpit` | New Workflow page for the Plan & Review experience — renders the approved Todo plan as a dependency DAG with chat mounted behind it. |
| [#8498](https://github.com/QwenLM/qwen-code/pull/8498) | `perf(review): retire dry chunks and pipeline verification in the reverse audit` | Removes dry-chunk and pipeline-verification overhead from the reverse-audit loop; stacked on #8468. |
| [#7859](https://github.com/QwenLM/qwen-code/pull/7859) | `feat(web-shell): add native Live Voice` | Adds experimental Codex-parity Live Voice on macOS Web Shell; disabled by default and not exposed on non-macOS or API-only daemons. |
| [#8455](https://github.com/QwenLM/qwen-code/pull/8455) | `fix(cli): echo resume command to main screen on exit` | Fixes the lost "resume this session" hint that was previously drawn on the alternate buffer and discarded on teardown. |
| [#8425](https://github.com/QwenLM/qwen-code/pull/8425) | `feat(core): share compression cache with Gemini and Vertex AI` | Enables eligible same-model compression requests on Gemini/Vertex to reuse the conversation prefix via Google GenAI's implicit caching. |
| [#8467](https://github.com/QwenLM/qwen-code/pull/8467) | `feat(web-shell): add Git diff sources and existing branch switching` | Expands Web Shell Git tooling — Uncommitted, Unstaged, Staged, Committed, and Branch comparison sources with searchable commit/branch selectors. |
| [#8512](https://github.com/QwenLM/qwen-code/pull/8512) | `feat(omni): S2 input expansion — image/audio/URL sources` | Extends the omni S1 video-only upload to full input surface: image, audio, URL media sources, tool-result media, and token-dimension transport guard. |
| [#8529](https://github.com/QwenLM/qwen-code/pull/8529) | `feat(core): resolve model modalities from API metadata` | Resolves missing model input modalities from models.dev at runtime; ships a compact snapshot with a valid disk cache and background refresh. |
| [#8457](https://github.com/QwenLM/qwen-code/pull/8457) | `feat(web-shell): expose channel sessions in sidebar and settings` | Adds a Tasks/Channels source switch above the session catalog; Channels view shows sessions started through DingTalk, Feishu, and WeCom integrations. |

---

## 5. Feature Request Trends

1. **Trustworthy, deterministic agent runtime** — Issue #8102 and #8533 reflect a strong community signal that Qwen Code needs formal trust boundaries, deterministic execution constraints, and a content model capable of per-provider reasoning-replay contracts.
2. **IDE/ACP parity** — Multiple issues (#8544, #8546, #8542) call for ACP to match the CLI experience: live task lists, `session_info_update` frames for titles, and queued message support while a turn is running.
3. **Input modality expansion** — PRs #7859 (Live Voice) and #8512 (S2 image/audio/URL) show active investment in multi-modal input beyond text, following a Codex-parity roadmap.
4. **Provider-agnostic metadata** — Issues #8558 and PR #8529 point toward a shift from hardcoded model capabilities to API-resolved metadata (models.dev), enabling runtime flexibility.
5. **Channel/IM integration maturity** — PRs #8457, #8440 (group pairing), and #8461 (local gh auth) demonstrate continued work on the Web Shell channels ecosystem (DingTalk, Feishu, WeCom, GitHub).

---

## 6. Developer Pain Points

- **Session resilience:** Abort errors (#8356), `--resume` reconstructing dangling-unsigned-thought hazards (#8535), and live-journal truncation recovery (#8412) all indicate that long-running daemon sessions remain fragile around error recovery and transcript consistency.
- **Resource bounding in production:** Count-only limits on the multi-workspace daemon (#8051) and a memory-authorization bug where each ACP child gets 50% of host memory instead of an even split (#8182) are blocking production deployments.
- **Credential sanitization bugs:** The provider warning sanitizer both truncates port-containing messages and leaks passwords with `@` (#8136), a trust-and-security gap flagged as P2.
- **CI/debuggability noise:** Mocked test errors masquerading as real ENOSPC failures (#8532) and the release pipeline failure for v0.21.5 (#8476) add friction to contributor workflows.
- **MCP transport reliability:** Indefinite hangs on SSE servers that never emit the `endpoint` event (#8550) suggest the MCP client needs a hard timeout or readiness probe.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-05

## 1. Today's Highlights

The community is focused on two major fronts: a sprawling **v0.9.5 build-time optimization epic** initiated by the maintainer to tackle the 708-package monolithic crate, and a series of **Runtime API expansions** (goals, memory, MCP, and skill lifecycle endpoints) from the Copilot contributor. Additionally, the v0.9.4 release train continues to advance with 77 commits ahead of `main`.

## 2. Releases

No new releases in the last 24 hours. The **v0.9.4 release train** (PR #5135) remains open and in-progress.

## 3. Hot Issues

**[#5209] File `action=edit` silently accepts wrong parameters and reports fake success** — A critical bug where the File tool accepts non-standard parameter names (e.g., `new_str` instead of `replace`) without erroring, instead returning false-positive success and forcing 3–5x re-edits per location. *(3 comments)*

**[#4991] Compilation times and the TUI crate monolith — are others feeling this?** — Developer aboimpinto opens a community discussion on build times while working on slash-command refactoring (Layers 5–5.2). Highlights shared pain around compile-wait loops. *(4 comments, most-discussed open issue)*

**[#5244] Unknown model IDs silently degrade to 128K legacy context default** — When `context_window_for_model` doesn't recognize a model ID, the system falls through to `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS` (128K) with no warning, silently compacting 1M-window models. *(1 comment)*

**[#5239] 1M context model but tool compresses at 128K** — Directly related to #5244; users report context compression triggering well before their model's actual capacity. *(1 comment)*

**[#5241] Pricing endpoint returns 503 — all sessions show `unverified_live_pricing`** — Cost display broken after upgrading from 0.8.67 to 0.9.3 across all providers/routes. A regression impacting visibility into usage costs. *(1 comment)*

**[#5250] Only one API key can be saved** — Multi-provider users (e.g., DeepSeek + GLM) must overwrite keys on each switch. A feature request for per-provider key storage. *(1 comment)*

**[#5005] Filesystem path whitelist/allowlist in sandbox for external logs** **[CLOSED]** — Xcode build artifacts and logs fall outside the workspace sandbox. Closed, likely addressed in v0.9.4. *(2 comments)*

**[#5249] Epic: v0.9.5 build-time lane** — Maintainer-initiated epic to dismantle the 682K-line, 620-file `codewhale-tui` monolith that recompiles as a single unit on every edit, commit, and test run. *(0 comments, starter issue)*

**[#5248] Shrink the 708-package build graph** — Companion to #5249; targets deduplication of versions, pruning features, and dropping redundant dependency stacks (95 build scripts, 52 proc-macro crates). *(0 comments)*

**[#4029] Planning to create an interface similar to Reasonix?** — Community member exploring whether a Reasonix-like interface is feasible. Early discussion stage. *(4 comments)*

## 4. Key PR Progress

**[#5135] release: Codewhale v0.9.4 release train** — The main integration train, 77 commits ahead of `main`. Contains the 18 train commits from `FINISH-0.9.4.md` plus 2026-08-01 source candidates. *(Updated 2026-08-05)*

**[#5242] feat(tui/subagent): resume interrupted children from checkpoint via followup** — Fixes a bug where interrupted subagents entered a dead-letter state; checkpoint was preserved but could never be resumed. Now enables resuming long-running tasks (document review, multi-step search) mid-way. *(Updated 2026-08-05)*

**[#5240] feat(tui/shell): surface real wait elapsed time in tool content** — The Bash `wait`/delta tool previously exposed `duration_ms` only in metadata (invisible to the model), causing identical-looking results regardless of actual elapsed time and biasing the model toward busy-polling. Now surfaces duration in visible content. *(Updated 2026-08-05)*

**[#5234] fix(tui): keep alternate scroll off while mouse capture is active** — Fixes a bug where mouse-wheel scrolling toggled the composer's input history instead of moving the transcript, caused by `recover_terminal_modes()` arming both mouse capture and xterm alternate-scroll mode simultaneously. *(Updated 2026-08-05)*

**[#5192] fix(tui): pin ratatui to 0.30.0** **[CLOSED]** — Pins `ratatui` to `=0.30.0` and `ratatui-core` to `=0.1.0` to avoid a regression in 0.1.1+ where `Terminal::clear()` issues a blocking CPR query that races the TUI event loop. *(Updated 2026-08-05)*

**[#5095] fix(ohos): re-quote Windows linker arguments containing spaces** **[CLOSED]** — Fixes a bug where `cmd %*` expansion stripped quotes from linker arguments, breaking builds for OpenHarmony SDKs installed in paths with spaces. *(Updated 2026-08-05)*

**[#5228] refactor(tui): rail unification stack (rebased onto train)** **[CLOSED]** — 12-commit rail-unification stack rebased onto the release train. Final base at `27c1c9ffe`. *(Updated 2026-08-04)*

**[#5233] fix(modelstudio): surface reasoning on official chat routes** **[CLOSED]** — Classifies `reasoning_content` as a dedicated Thinking stream on verified Alibaba Model Studio OpenAI-compatible routes. Also documents model-capability controls (`enable_thinking`, `preserve_thinking`, `reasoning_effort`). *(Updated 2026-08-04)*

**[#5225] feat(acp): expose file/search/git/patch/shell tools over session/prompt** — Extends the ACP server's `session/prompt` endpoint beyond text streaming to execute tool calls, enabling editor bridges (Zed, community adapters) to drive real code-editing agents instead of chat-only interactions. *(Updated 2026-08-04)*

**[#5133] feat(runtime-api): expose persistent goal-loop state and completion controls** — Adds `GET /v1/threads/{id}/goal` and related endpoints, giving managed clients visibility into active goals and lifecycle control — previously unavailable in v0.9.4's runtime API. *(Updated 2026-08-04)*

> *(Additional Runtime API PRs also from Copilot: **#5132** verifier receipts, **#5131** memory endpoints, **#5130** bounded MCP server config, **#5129** skill lifecycle — all expanding the managed-client surface.)*

## 5. Feature Request Trends

- **Multi-provider / multi-key management** — #5250 reflects repeated demand for per-provider credential storage.
- **Sandbox path allowlisting** — #5005 (closed) shows ongoing need for flexible filesystem access in sandboxed modes.
- **Model capability awareness** — #5244 and #5239 highlight demand for transparent, accurate context-window handling and no silent fallbacks.
- **ACP / external tooling access** — #5225 and #4029 indicate growing interest in exposing TUI capabilities to external editors and alternative interfaces.
- **Build-performance tooling** — The v0.9.5 epic (#5249–#5247) shows the community shares the maintainer's urgency around compile times.

## 6. Developer Pain Points

1. **Monolithic build times** — The 682K-line, 708-dependency `codewhale-tui` crate recompiles as a single unit, penalizing every edit, commit, test run, and pre-push check. This is the dominant friction point.
2. **False-positive tool behavior** — #5209 (silent wrong-parameter acceptance) and #5244 (silent 128K fallback) erode trust in tool outputs; users need explicit errors or warnings.
3. **Pricing regressions** — #5241 broke cost display universally after a minor version upgrade, removing visibility into usage.
4. **Mouse/input mode conflicts** — #5234's alternate-scroll vs. mouse-capture race shows the TUI's terminal-mode management remains a fragile area.
5. **Multi-provider key friction** — Switching between DeepSeek, GLM, xAI, etc. requires manual key overwrites with no saved-profile support.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*