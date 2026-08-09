# AI CLI Tools Community Digest 2026-08-01

> Generated: 2026-08-01 01:52 UTC | Tools covered: 9

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



# Cross-Tool Comparison Report: AI CLI Developer Tools
**Date:** 2026-08-01 | **Analyst:** Agnes-2.0-Flash (Sapiens AI)

---

## 1. Ecosystem Overview

The AI CLI tool landscape in mid-2026 is characterized by rapid iteration, platform fragmentation, and intensifying competition around session reliability, billing transparency, and cross-client consistency. Major vendors (Anthropic, OpenAI, Google, GitHub) ship frequent alpha/beta releases with significant regression rates, while niche tools (Pi, Qwen Code, Kimi Code) differentiate through architecture choices and provider flexibility. The dominant theme this cycle is **agent operational maturity** — communities are shifting focus from "can it write code?" to "will it reliably complete and preserve context?"

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (Active) | Releases (24h) | Release Cadence |
|------|-------------|--------------|----------------|-----------------|
| **Claude Code** | 10 hot + 3 new | 5 (2 open) | None | Steady; Fable 5 launch drove issue spike |
| **OpenAI Codex** | 10 hot | 9 (all open) | 3 alpha builds | Aggressive alpha cycle (Rust CLI) |
| **Gemini CLI** | 10 hot | 11 (8 open) | 3 releases (nightly/preview/stable) | Highest release velocity this cycle |
| **GitHub Copilot CLI** | 10 hot | 2 | v1.0.78-0 | Moderate; regression-heavy recent history |
| **Kimi Code CLI** | 4 hot | 1 | None | Low activity; feature-request driven |
| **OpenCode** | 10 hot | ~10 (partial) | None | Moderate; TUI V2 in development |
| **Pi** | 10 hot | 11 (6 open) | None | Architecture refactoring sprint |
| **Qwen Code** | 10 hot | 11 | v0.21.2 | Steady; multi-workspace RFC active |
| **DeepSeek TUI** | 10 hot | 9 (5 open) | v0.9.3 | Weekly cadence; v0.9.3 shipped yesterday |

---

## 3. Shared Feature Directions

| Theme | Tools Involved | Specific Needs |
|-------|---------------|----------------|
| **Session resilience & persistence** | Claude Code, Codex, Copilot CLI, Pi, DeepSeek TUI | Reliable resume, no data loss on interruption, bounded context growth, crash recovery |
| **Sub-agent / background agent reliability** | Claude Code, Gemini CLI, Codex, OpenCode | Agents that complete without hanging, deliver final reports, and can be force-resumed |
| **Billing & usage transparency** | Claude Code, Codex | Clear credit tracking, no silent model downgrades, protection against quota burn from polling |
| **Cross-client consistency** | Claude Code, Codex, OpenCode | Same features/behavior across CLI, VS Code extension, web, and desktop |
| **Provider flexibility & compatibility** | Pi, Qwen Code, OpenCode, DeepSeek TUI | Support for non-OAI models (Gemini 3.x, DeepSeek V4, Databricks/Qwen), OAuth lifecycle management |
| **Sandboxing & security** | Claude Code, Gemini CLI, DeepSeek TUI, Codex | OS-level sandboxes, SSRF prevention, credential leakage fixes, safe destructive operations |
| **Context management / compaction** | Pi, Codex, Gemini CLI | Automatic compaction that doesn't stall, no token waste on long sessions |
| **TUI/UX stability** | Claude Code, OpenCode, Qwen Code, Pi | Scroll behavior, rendering regressions, dark mode, mouse tracking, Wayland support |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Pi | Qwen Code | DeepSeek TUI | Kimi Code CLI |
|-----------|------------|--------------|------------|-------------------|----|-----------|-------------|---------------|
| **Primary focus** | Enterprise/Max plan users | Research & prototyping | Multi-model experimentation | GitHub-integrated workflows | Extension API & self-hosting | Multi-workspace daemon | DeepSeek-native efficiency | Growing ecosystem |
| **Key differentiator** | Fable 5 model access, cross-client consistency | Rust CLI + paginated sessions + sandboxed V8 | Capacity-exhaustion handling, SSRF fixes | ACP protocol maturity, `/permissions` | Server-side SQLite sessions, JSON streaming | Multi-workspace `qwen serve`, `/review` depth | Canonical tool unification, context efficiency | Remote session continuity vision |
| **Architecture** | Node.js 24 upgrade in progress | Rust, thread history ownership model | Bazel-built, seatbelt sandboxing | Electron + Rust interop | Rust server backend + SQLite | `qwen serve` daemon with cgroup awareness | Rust ratatui TUI | Rust-based, provider-agnostic |
| **Target user** | Professional developers on paid plans | Researchers, power users | Multi-model evaluators | GitHub Enterprise users | Self-hosters, extension authors | Teams needing multi-workspace | DeepSeek model users | Early-adopter community |

---

## 5. Community Momentum & Maturity

**Most Active Communities (by issue volume + engagement):**
- **OpenAI Codex** — Highest single-issue engagement (#28969: 185 👍, 64 comments on auto-resolve). Strong signal on quota burn complaints.
- **Claude Code** — Consistent high engagement on billing/model-access issues (83 👍 on scroll regression). Cross-client bug reports show an engaged power-user base.
- **DeepSeek TUI** — Active governance discussions (Constitution translation debate) and rapid issue-to-PR cycles indicate a responsive, collaborative community.
- **Gemini CLI** — Multiple P1 bugs with community triage; capacity-exhaustion fix shipped within hours shows responsive maintainers.

**Rapidly Iterating:**
- **OpenAI Codex** — 3 alpha releases in 24h, 9 open PRs on core infrastructure (thread ownership, paginated loads, sandboxed V8).
- **Gemini CLI** — Fastest release cadence (nightly + preview + stable cherry-picks); capacity fix shipped across all tracks within hours.
- **Pi** — Major server-side refactoring sprint (6 merged PRs in one cycle) targeting multi-process architecture.
- **Qwen Code** — Dual PRs for `/review` verification depth, image display tool, and daemon memory bounding — aggressive feature expansion.

**Maturing / Stabilizing:**
- **GitHub Copilot CLI** — Fewer releases but high-severity regressions (V8 string limit, OOM on resume) suggest a tool struggling to keep pace with feature growth.
- **Kimi Code CLI** — Low release frequency, community driven by feature requests rather than bug volume; early-stage ecosystem.
- **OpenCode** — Significant TUI instability (black screen regressions) but strong plugin ecosystem momentum and marketplace proposal.

---

## 6. Trend Signals

| Signal | Evidence | Developer Implication |
|--------|----------|----------------------|
| **Agent reliability is the new frontier** | Sub-agent hangs (#21409 Gemini), silent failures (#22323), quota burn from polling (#36396 Codex) | Tool selection should prioritize agent completion guarantees over raw capability for production workflows |
| **Session state is a critical differentiator** | V8 string death limit (#4325 Copilot), interrupted turns losing state (#5000 DeepSeek), compaction failures (Pi) | Long-session users should avoid tools with known session fragility; monitor tool's compaction/restore strategy |
| **Cross-platform TUI stability remains uneven** | GPU crashes on Windows (Claude Code), Wayland clipboard (Pi), SGR mouse leaks (Qwen Code), AltGr keymaps (DeepSeek) | Linux/Wayland and Windows users should expect friction; Mac remains the most stable target across tools |
| **Provider-agnostic architectures are gaining traction** | Pi's Baseten provider, Qwen's multi-provider tool-call handling, OpenCode's model routing | Tools that decouple from single providers offer more resilience against API changes and pricing shifts |
| **Quota/credit transparency is a top community demand** | Fable 5 billing bugs (Claude Code), polling token waste (Codex), Auto Memory inefficiency (Gemini) | Enterprise users should evaluate tools' usage visibility and billing accuracy before committing to subscriptions |
| **Multi-workspace and daemon architectures are emerging** | Qwen's `qwen serve` RFC, Pi's server backend, Codex's thread management | Teams running parallel projects should watch Qwen Code and Pi for multi-workspace support |
| **Security hardening is accelerating** | SSRF fix (Gemini), credential leakage (Claude Code), OAuth loop fixes (Gemini), sandbox seatbelt (Gemini) | Security-conscious users should prioritize tools with recent vulnerability disclosures and fixes |
| **Review and verification tooling is maturing** | Qwen Code's `/review` with seven lenses and test-plan checks, Codex's strict auto-review for MCP | Code-review workflows are becoming first-class features; Qwen Code leads in verification depth |

---

**Bottom Line for Technical Decision-Makers:** The AI CLI tool market in 2026 is in a **maturation phase** where raw coding capability is table-stakes, and the competitive differentiators are session reliability, billing transparency, and cross-platform stability. For enterprise use, Claude Code and GitHub Copilot CLI offer the most polished (if occasionally regressive) experiences. For multi-model flexibility and self-hosting, Pi and Qwen Code are strong candidates. DeepSeek TUI and Gemini CLI are the most responsive to community feedback but carry higher regression risk. Tools with long-lived session requirements should avoid Copilot CLI (#4325) and monitor Pi's compaction fixes before adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills Community Highlights Report
*Data as of 2026-08-01 · Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

### #1 — `skill-creator` (Bug Fix Cluster)
- **Related PRs:** [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323), [#1261](https://github.com/anthropics/skills/pull/1261)
- **Functionality:** The `skill-creator` skill helps author and optimize other skills, including a description-optimization loop (`run_loop.py`) backed by `run_eval.py`.
- **Discussion highlights:** Dominates community attention. A critical bug causes `run_eval.py` to report **recall=0% on every iteration** across all skill descriptions, rendering the optimization loop useless. Additional Windows-specific blockers (subprocess `PATHEXT` handling, cp1252 encoding, pipe `select()` calls) and trigger-detection failures compound the issue. The root cause is traced to how synthetic command files are written into the live project registry during parallel eval.
- **Status:** 🟡 **Open** — multiple overlapping PRs仍未合并; the core fix remains unmerged as of the data date.

### #2 — `document-typography`
- **PR:** [#514](https://github.com/anthropics/skills/pull/514)
- **Functionality:** Detects and prevents typographic errors in AI-generated documents — orphan word wrap, widow paragraphs, and numbering misalignment.
- **Discussion highlights:** Addresses a widespread pain point ("users rarely ask for good typography but notice it when it's bad"). Noted as universally applicable across all document-generation workflows.
- **Status:** 🟡 **Open**

### #3 — `skill-quality-analyzer` / `skill-security-analyzer`
- **PR:** [#83](https://github.com/anthropics/skills/pull/83)
- **Functionality:** Two meta-skills that evaluate other skills across five dimensions (structure, documentation, examples, trigger quality, security) with weighted scoring.
- **Discussion highlights:** First community contribution targeting skill governance and quality assurance as a systemic need rather than a single-use workflow.
- **Status:** 🟡 **Open**

### #4 — `self-audit`
- **PR:** [#1367](https://github.com/anthropics/skills/pull/1367)
- **Functionality:** Audits AI output before delivery in two phases — mechanical file existence verification followed by a four-dimension reasoning quality gate. Universal across projects and tech stacks.
- **Discussion highlights:** Directly addresses the delivery-verification problem raised in issue [#1385](https://github.com/anthropics/skills/issues/1385); represents the community's push toward pre-delivery quality gates.
- **Status:** 🟡 **Open**

### #5 — `testing-patterns`
- **PR:** [#723](https://github.com/anthropics/skills/pull/723)
- **Functionality:** Comprehensive testing coverage including the Testing Trophy model, AAA pattern, React component testing with Testing Library, and test naming conventions.
- **Discussion highlights:** Fills a clear gap — no existing testing-focused skill in the marketplace. Cross-language applicability noted.
- **Status:** 🟡 **Open**

### #6 — `odt` (OpenDocument Format)
- **PR:** [#486](https://github.com/anthropics/skills/pull/486)
- **Functionality:** Create, fill, read, and convert `.odt` / `.ods` / `.odf` files; triggers on mentions of ODT, ODS, ODF, LibreOffice, or ISO-standard document requests.
- **Discussion highlights:** Extends document-skill coverage beyond DOCX/PDF into the OpenDocument ecosystem, addressing enterprise and Linux-first users.
- **Status:** 🟡 **Open**

### #7 — `claude-api` (Context Window Issue)
- **Issue:** [#1487](https://github.com/anthropics/skills/issues/1487)
- **Functionality:** Bundled skill for interacting with the Claude API.
- **Discussion highlights:** Eagerly injects ~156k tokens in a single tool call, exhausting the context window. Highlights a systemic risk in how bundled skills manage token budgets.
- **Status:** 🟡 **Open issue, no PR yet**

---

## 2. Community Demand Trends

| Trend | Key Issues / PRs |
|---|---|
| **Skill quality & governance** | #83 (quality analyzer), #1367 (self-audit), #1385 (reasoning quality gate), #202 (skill-creator best practices) |
| **Cross-platform / Windows compatibility** | #1099, #1050, #1061, #539 — consistent demand for robust Windows support in skill tooling |
| **Document generation & typography** | #514 (typography), #538 (PDF case-sensitivity), #541 (DOCX tracked changes), #486 (ODT) |
| **Testing infrastructure** | #723 (testing-patterns), #1329 (compact-memory for agent state) |
| **Organizational skill sharing** | #228 — strong interest (8 👍) in org-wide skill libraries and direct sharing |
| **Security & trust boundaries** | #492 (community skills impersonating `anthropic/` namespace), #412 (agent governance patterns) |
| **Specialized domain skills** | #181 (SAP-RPT-1-OSS predictive analytics), #525 (pyxel retro game dev) |

---

## 3. High-Potential Pending Skills

These PRs are open with active community commentary and address high-visibility pain points — strong candidates for eventual merge:

| PR | Skill | Why It's Promising |
|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | Directly addresses the #1385 proposal; universal applicability; mechanical + reasoning gates |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | First meta-skill for the ecosystem; 5-dimension scoring aligns with community governance concerns |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Solves a universal, high-visibility quality problem in document output |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Fills a clear gap with no competing PR; comprehensive scope |
| [#486](https://github.com/anthropics/skills/pull/486) | `odt` | Extends document coverage to a major format with enterprise demand |
| [#1479](https://github.com/anthropics/skills/pull/1479) | `plan-file-hygiene` | Addresses accumulated planning artifacts (issue #1417); lifecycle management for agent outputs |
| [#1329](https://github.com/anthropics/skills/issues/1329) | `compact-memory` | Solves context bloat from prose-style persistent memory; symbolic notation approach |
| [#228](https://github.com/anthropics/skills/issues/228) | Org-wide skill sharing | 8 👍; represents a platform-level feature request with clear enterprise demand |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for skill quality assurance and trust infrastructure** — not just new skills, but tools to audit, secure, and govern skills themselves (self-audit, quality analyzers, security analyzers, reasoning gates), driven by real pain from broken eval tooling (#556), Windows compatibility failures, and namespace impersonation risks (#492).

---



# Claude Code Community Digest — 2026-08-01

## 1. Today's Highlights

Fable 5 continues to dominate community attention, with multiple users reporting that the Max plan incorrectly blocks or silently downgrades sessions despite available weekly allowance — a problem spanning CLI, VS Code, and Desktop. Simultaneously, Windows Desktop users are experiencing repeated GPU-process crashes when using the built-in browser feature, raising concerns about stability on that platform.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | Fable 5 prompts "usage credits required" on Max plan | 51 | 20 | The flagship new model is silently downgrading Max-plan users to Opus 4.8 on its launch day. The most-discussed open issue. |
| [#65833](https://github.com/anthropics/claude-code/issues/65833) | Scroll wheel no longer scrolls conversation in TUI (v2.1.150 regression) | 35 | 83 | High-engagement regression: mouse wheel sends arrow keys instead, breaking a core navigation UX. 83 upvotes signal strong community frustration. |
| [#11139](https://github.com/anthropics/claude-code/issues/11139) | Claude Code Web cannot use `gh` CLI (Permission Denied) | 28 | 31 | Web users are blocked from essential GitHub workflows — a significant gap vs. the native CLI experience. |
| [#79441](https://github.com/anthropics/claude-code/issues/79441) | VS Code extension blocks Fable 5 on Max plan | 13 | 10 | Confirms the Fable 5 billing bug spans both CLI and VS Code; user has 20% weekly Fable allowance remaining. |
| [#81159](https://github.com/anthropics/claude-code/issues/81159) | GPU process crash (exitCode 101457950) kills Claude Desktop on Windows 11 | 9 | 0 | Opus 5 triggers a consistent GPU crash during in-page browser actions — same root cause as #81275. |
| [#81275](https://github.com/anthropics/claude-code/issues/81275) | Claude Desktop MSIX browser pane crashes on GPU exit 101457950 | 7 | 0 | Duplicate-reinforced GPU crash across Intel, NVIDIA, and WARP rendering — affects all Windows GPU vendors. |
| [#72274](https://github.com/anthropics/claude-code/issues/72274) | Cross-session credential leakage: production DB modified on unauthorized host | 6 | 1 | Security-critical: leaked server credentials from another user's session caused unauthorized production DB mutations. |
| [#74113](https://github.com/anthropics/claude-code/issues/74113) | Background agents frequently go idle without delivering final report | 5 | 5 | Subagent reliability issue — re-ping recovers the report, but first-delivery failure wastes time in automated workflows. |
| [#16222](https://github.com/anthropics/claude-code/issues/16222) | Gradle wrapper fails to download in Claude Code Web (Java ignores `https_proxy`) | 5 | 17 | Long-open Web-environment limitation blocking Java developers behind proxies. |
| [#80830](https://github.com/anthropics/claude-code/issues/80830) | Claude Code destructively removes pre-existing directories without confirmation | 1 | 0 | Auto-mode destroyed a local repo checkout before cloning, then deleted the re-clone — a data-loss safety concern. |

**Today's new issues:**
- [#83037](https://github.com/anthropics/claude-code/issues/83037) — Fable 5 still requires credits on CLI despite active Max plan (Fable works in Desktop on same account)
- [#83036](https://github.com/anthropics/claude-code/issues/83036) — Session silently falls back from Fable 5 to Sonnet 5 mid-conversation; manual re-switch blocked by credit error
- [#83035](https://github.com/anthropics/claude-code/issues/83035) — Workspace sandbox config silently dropped for sessions rooted in nested project directories (sandbox escape)

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#82987](https://github.com/anthropics/claude-code/pull/82987) | Fix CI cron failures, exclude PRs, propose TUI latency fix | OPEN | Addresses GitHub Actions cron/scheduled job failures and proposes an architectural fix for TUI input latency under high agent workloads (#82984). |
| [#82794](https://github.com/anthropics/claude-code/pull/82794) | `code-review` plugin: implement confidence scoring and `--threshold` flag | OPEN | Reconciles README ↔ command drift — implements the documented 0–100 confidence scoring as a single validate-and-score pass. |
| [#39872](https://github.com/anthropics/claude-code/pull/39872) | Upgrade Node.js from 20 to 24 | OPEN | Prepares for upcoming LTS change; long-standing dependency modernization. |
| [#81540](https://github.com/anthropics/claude-code/pull/81540) | Fix usage leak (#80705) | CLOSED | Automated contribution closing a reported usage/credit leak. |
| [#17776](https://github.com/anthropics/claude-code/pull/17776) | docs: add README for security-guidance plugin | CLOSED | Added missing documentation for the only plugin without a README. |
| [#82981](https://github.com/anthropics/claude-code/pull/82981) | Claude/inventariar insumos w4n98s | OPEN | — |

## 5. Feature Request Trends

- **Fable 5 plan enforcement & billing clarity** — Multiple overlapping issues (#79337, #79441, #83037, #83036) demand reliable Fable 5 access on Max plans, consistent credit tracking across CLI/Desktop/VS Code, and protection against silent model downgrades.
- **Background agent reliability** — Users want agents that reliably deliver final reports and can be force-resumed by advisor agents after API errors (#74113, #83014).
- **CLI ↔ Cloud session bridging** — No programmatic way to retrieve results from a backgrounded Ultraplan/web session from a local CLI session (#83012).
- **Session transcript portability & retention** — Transcripts default outside typical backup paths and auto-delete after 30 days with no warning (#83019); session-limit terminations lose multi-agent output despite quota consumption (#83001).
- **Sandbox config inheritance** — Nested project directories silently drop workspace-level sandbox settings, creating security gaps (#83035).

## 6. Developer Pain Points

1. **Fable 5 billing/auth bugs are the top pain point.** The model's launch on 2026-07-20 triggered a wave of credit-requirement errors, silent downgrades to Opus/Sonnet, and cross-client inconsistencies. Community sentiment is frustrated that a feature advertised as "standard on Max" behaves as if credits are required.

2. **Windows Desktop GPU stability is fragile.** Recurring GPU-process crashes (exit code `101457950`) during browser pane usage affect all GPU vendors and offer no crash dump or recovery path (#81159, #81275, #77768, #82962).

3. **Auto-mode safety guards are inconsistent.** `rm -rf` inside backtick substitutions bypasses destructive-command prompts (#81273), and pre-existing directories are deleted without confirmation (#80830), leading to real data-loss incidents (#82165).

4. **TUI regressions impair daily workflow.** The scroll-wheel regression (#65833, 83 👍) and dark-mode unreadable text (#62911) degrade the terminal experience with minimal community recourse.

5. **Web environment limitations persist.** `gh` CLI permission denial (#11139) and Java `https_proxy` not honored (#16222) leave Web users with a substantially reduced toolset compared to the native CLI.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-01

## 1. Today's Highlights

The Codex team shipped three Rust CLI alpha releases (0.147.0-alpha.4, .3, and .1.1) and merged a wave of core infrastructure PRs covering thread history ownership, paginated summary loading, sandboxed V8 for code mode, and strict automatic review for MCP elicitations. On the issue front, community sentiment is dominated by concerns around token waste from agent polling loops and the 60-second auto-resolve behavior for user questions.

## 2. Releases

Three Rust CLI alpha builds landed in the last 24 hours:

- **rust-v0.147.0-alpha.4** — latest alpha, supersedes .3 and .1.1
- **rust-v0.147.0-alpha.3**
- **rust-v0.147.0-alpha.1.1**

These are incremental alpha snapshots; full release notes are not yet published.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#28969](https://github.com/openai/codex/issues/28969) | Disable auto-resolve in 60 seconds for questions | The forced auto-resolve can prematurely answer questions before the user finishes typing, breaking interactive workflows. | 185 👍 · 64 comments — strongest community signal this cycle. |
| [#35058](https://github.com/openai/codex/issues/35058) | Codex Diff crashes in VS Code on macOS | The diff viewer is core to reviewing agent edits; a crash makes it unusable for the entire VS Code user base. | 109 👍 · 42 comments |
| [#34133](https://github.com/openai/codex/issues/34133) | Page.captureScreenshot crashes GPU on Windows | Screenshot capture after a Code Integrity rejection leaves the desktop app frozen or unopenable. | 0 👍 · 30 comments |
| [#30408](https://github.com/openai/codex/issues/30408) | MCP server process leak (9+ GB RSS) | Per-thread MCP processes are never reaped on archive/close, causing unbounded memory growth on long-lived machines. | 6 👍 · 21 comments |
| [#35119](https://github.com/openai/codex/issues/35119) | WSL repos marked as non-Git, "Git is unavailable" | Breaks Codex in WSL workspaces after the 26.721.3404 update — a regression affecting Windows + WSL users. | 11 👍 · 11 comments |
| [#35259](https://github.com/openai/codex/issues/35259) | Repeated re-entry during wait/status polling burns credits | Model turns with only polling tool actions accounted for ~20% of token usage in one session — a direct cost concern. | 0 👍 · 9 comments |
| [#25779](https://github.com/openai/codex/issues/25779) | Meta-bug: unbounded session/turn state causes freezes & bloat | Long sessions degrade into unresponsive behavior due to context growth with no compaction. | 8 👍 · 13 comments |
| [#36396](https://github.com/openai/codex/issues/36396) | Sub-agent busy-waiting burns a week of quota in 11 days | 6,932 blocking waits in a single session; 23.7% returned empty. A concrete, quantified quota-bleed report. | 0 👍 · 2 comments |
| [#35763](https://github.com/openai/codex/issues/35763) | Max reasoning effort missing in VS Code extension | Feature parity gap: Codex App exposes Max reasoning for GPT-5.6-Sol, but the VS Code extension does not. | 1 👍 · 3 comments |
| [#32250](https://github.com/openai/codex/issues/32250) | GPT-5.6 Sol Medium depletes Pro allowance extremely fast | Pro users report the medium-reasoning variant consuming their 5-hour allowance far faster than expected. | 8 👍 · 4 comments |

## 4. Key PR Progress

| PR | Title | Summary |
|----|-------|---------|
| [#36413](https://github.com/openai/codex/pull/36413) | Realtime delegation acknowledgement control | Adds optional `delegationAckFiller` to `thread/realtime/start`; forwards explicit true/false to V3 Frameless Bidi sessions. |
| [#36410](https://github.com/openai/codex/pull/36410) | Make user input blocking behavior explicit | Introduces required `isBlocking` field to disambiguate wait-vs-auto-resolve, decoupling it from `autoResolutionMs`. |
| [#36389](https://github.com/openai/codex/pull/36389) | Enforce single-writer ownership for all thread histories | Acquires and retains writer locks on legacy and paginated thread creation/resume, eliminating concurrent-write races. |
| [#36384](https://github.com/openai/codex/pull/36384) | Load turn summaries with paginated queries | Joins first-user/final-agent items into the paginated turn query, removing the per-turn summary sub-query. |
| [#36374](https://github.com/openai/codex/pull/36374) | Enable sandboxed V8 for code mode | Switches Windows MSVC and package builds to the sandboxed V8 artifact, strengthening code-mode isolation. |
| [#36373](https://github.com/openai/codex/pull/36373) | Add `--approve-for-me` CLI flag | Routed approval requests through automatic review with `approval_policy="on-request"` and `workspace-write` sandbox. |
| [#36365](https://github.com/openai/codex/pull/36365) | Strict auto-review for MCP elicitations | New `codex_strict_auto_review` marker routes MCP approval requests through the auto-reviewer; fails closed without user input. |
| [#36409](https://github.com/openai/codex/pull/36409) | Remote plugin search | Implements `plugin/search` against the remote service with scoped (global/workspace/personal) results and pagination. |
| [#36380](https://github.com/openai/codex/pull/36380) | Thread section management APIs | New `threadSection/create`, `/update`, `/delete` endpoints with SQLite persistence and UUIDv7 identities. |
| [#36378](https://github.com/openai/codex/pull/36378) | Load local session pickers from state DB first | Resume/fork pickers now read indexed state DB metadata before falling back to store-backed listing. |

## 5. Feature Request Trends

- **Controllable auto-resolve / explicit input blocking** — Issue [#28969](https://github.com/openai/codex/issues/28969) and PR [#36410](https://github.com/openai/codex/pull/36410) show strong demand for users to control when pending input is resolved, rather than the system auto-resolving on a fixed timer.
- **Dynamic sub-agent naming** — Multiple issues ([#29649](https://github.com/openai/codex/issues/29649), [#19186](https://github.com/openai/codex/issues/19186)) request that user-defined agent names take precedence over Codex-generated nicknames, and that callers be able to name sub-agents at spawn time.
- **Hybrid local/cloud "Instant" models using NPUs** — Issue [#22041](https://github.com/openai/codex/issues/22041) proposes on-device NPU-backed instant models for Codex and ChatGPT, reflecting interest in lower-latency, offline-capable tiers.
- **Enterprise MCP OAuth lifecycle** — Issue [#35006](https://github.com/openai/codex/issues/35006) is an umbrella request for reliable OAuth re-authentication and SSO integration for MCP tools in enterprise settings.
- **Max reasoning effort in VS Code extension** — Issue [#35763](https://github.com/openai/codex/issues/35763) highlights parity gaps between the Codex App and the VS Code extension, especially around reasoning-control exposure.

## 6. Developer Pain Points

- **Quota burn from polling and busy-wait loops** — The most quantified complaints this cycle ([#35259](https://github.com/openai/codex/issues/35259), [#36396](https://github.com/openai/codex/issues/36396), [#32250](https://github.com/openai/codex/issues/32250)). Users report that sub-agent wait/status polling and medium-reasoning modes consume disproportionate tokens, sometimes erasing a week's quota in days. The community is asking for better idle-polling semantics and more accurate usage estimates.
- **MCP process and memory leaks** — Issue [#30408](https://github.com/openai/codex/issues/30408) documents unbounded RSS growth from orphaned MCP server processes. This is a compounding operational pain for long-running Codex sessions.
- **Platform-specific regressions** — Windows WSL detection ([#35119](https://github.com/openai/codex/issues/35119)), macOS GPU crash on screenshots ([#34133](https://github.com/openai/codex/issues/34133)), and VS Code diff crashes ([#35058](https://github.com/openai/codex/issues/35058)) indicate that platform-specific test coverage around recent releases is insufficient.
- **Context bloat and session freezes** — Meta-issue [#25779](https://github.com/openai/codex/issues/25779) and the base64-image resend issue [#28316](https://github.com/openai/codex/issues/28316) both point to a pattern: long sessions degrade when history compaction and payload deduplication are absent.
- **Inconsistent feature parity across clients** — The missing Max reasoning effort in the VS Code extension ([#35763](https://github.com/openai/codex/issues/35763)) and browser/model compatibility gaps ([#33592](https://github.com/openai/codex/issues/33592)) suggest fragmentation between the desktop app, CLI, and IDE extension surfaces.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-01

---

## 1. Today's Highlights

Gemini CLI v0.55.0-nightly ships with a critical fix preventing retry hangs when capacity is exhausted, and v0.53.1 is released as a patch against the same issue. The community is actively debating subagent reliability, with multiple P1 bugs filed around agent hangs and recovery failures. A notable SSRF vulnerability in `web-fetch.ts` has also drawn attention.

---

## 2. Releases

**v0.55.0-nightly.20260801.gf47d6c6f7** ([PR #28612](https://github.com/google-gemini/gemini-cli/pull/28612))
- **Fix**: Classifies capacity exhaustion as a terminal error to prevent the agent from entering infinite retry loops ([PR #28599](https://github.com/google-gemini/gemini-cli/pull/28599)).
- **Fix**: Propagates `InvalidStreamError` details (type + message) up to the CLI UI so users receive actionable guidance, such as a suggestion to run `/compress` ([PR #28566](https://github.com/google-gemini/gemini-cli/pull/28566) — now closed after merging).

**v0.54.0-preview.1** ([PR #28609](https://github.com/google-gemini/gemini-cli/pull/28609))
- Cherry-picks the capacity-exhaustion fix from `f47d6c6` into the preview track. Closed.

**v0.53.1** ([PR #28610](https://github.com/google-gemini/gemini-cli/pull/28610))
- Cherry-picks the same fix into the stable v0.53.0 branch. **Merge conflicts detected** — manual resolution required. Closed.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Misreporting success when a subagent hits its turn limit masks failures and silently drops work. P1, agent area. | 12 comments · 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Simple tasks like folder creation cause the generalist subagent to hang for hours. Workaround: disable subagents entirely. P1. | 8 comments · 8 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model's bash affinity via OS Sandboxing | Proposes zero-dependency OS sandboxing so Gemini can use its native bash chaining skills securely. Large-effort enhancement. | 8 comments · 1 👍 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | Follow-up to behavioral evals (76 tests generated across 6 Gemini models). Tracks evaluation infrastructure maturity. | 7 comments |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, and mapping | Investigating whether AST-aware tools can reduce token waste and misaligned reads. Could improve codebase-investigator performance significantly. | 7 comments · 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | Anecdotal but widely felt: custom skills (e.g., gradle, git) are ignored unless explicitly prompted. P2. | 6 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory from retrying low-signal sessions | Auto Memory loops over unprocessed sessions that the extraction agent has already deemed low-signal, wasting tokens. P2. | 5 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction & reduce Auto Memory logging | Secrets may be logged before redaction occurs in the extraction prompt. Security concern with data-privacy implications. P2. | 4 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command hangs with "Waiting input" after completion | The shell reports a command as active even after it finishes, blocking the agent loop. P1, core area. | 4 comments · 3 👍 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | get-shit-done output hook causes crash | The agent crashes mid-summary when using the get-shit-done flow, losing progress. P1. | 3 comments |

---

## 4. Key PR Progress

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | Fall back to embedded macOS seatbelt profiles if missing | @amelidev | Open | Fixes a critical startup crash in sandbox mode (`-s`) on macOS/gMac when `.sb` profiles are absent from runfiles. |
| [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) | Propagate InvalidStreamError to UI | @DavidAPierce | Closed | Streams error type and message to CLI hooks, enabling contextual suggestions like `/compress`. Merged into v0.55 nightly. |
| [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) | Fallback to stable models when preview model 404s | @alarcritty | Open | Fixes a 404 crash when a Gemini API key lacks preview-model access; now gracefully falls back to stable model variants. |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | Refresh MCP OAuth tokens with stored client ID | @ParthivNaresh | Open | Fixes MCP OAuth refresh for servers using dynamic client registration. Token refresh previously failed and deleted credentials. P1. |
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | Preserve functionCall thoughtSignature when stripping thoughts | @sarbojitrana | Open | Fixes a v0.53.0 regression causing `API Error 400: thought_signature missing` during parallel tool calls. |
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | Preserve thoughtSignature in functionCall parts | @Tejas-Raj01 | Open | Duplicate/concurrent fix for the same 400-error regression as #28607. |
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | Resolve SSRF vulnerability in web-fetch.ts | @deepresearcher08 | Open | Fixes SSRF by switching `isBlockedHost` to async DNS resolution, preventing hostnames from bypassing IP-range checks (e.g., `169.254.169.254`). P1. |
| [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) | Prevent infinite auth loop by awaiting credential save | @EngKMM | Open | Fixes an infinite OAuth consent loop by correctly awaiting the async write of `oauth_creds.json`. P1. |
| [#28609](https://github.com/google-gemini/gemini-cli/pull/28609) | Cherry-pick capacity fix to preview | @gemini-cli-robot | Closed | Automated cherry-pick of `f47d6c6` into v0.54.0-preview.0 → v0.54.0-preview.1. |
| [#28610](https://github.com/google-gemini/gemini-cli/pull/28610) | Cherry-pick capacity fix to stable | @gemini-cli-robot | Closed | Automated cherry-pick into v0.53.0 → v0.53.1; **merge conflicts detected**, needs manual resolution. |

---

## 5. Feature Request Trends

- **Subagent reliability & observability** — Multiple P1 issues (#22323, #21409, #22186) and feature requests (#22598: surface subagent trajectories in `/chat share`, #20195: local subagent sprint) signal strong demand for more robust subagent execution and better debugging tooling.
- **AST-aware codebase navigation** — Issues #22745 and #22746 explore replacing naïve text reads with AST-aware tools (recommending `tilth` or `glyph`) to reduce token waste and improve precision.
- **Security hardening** — SSRF fix (#28557), deterministic redaction in Auto Memory (#26525), and MCP OAuth refresh (#28481) reflect an ongoing community push for stronger security guarantees in agent operations.
- **Bash/POSIX affinity** — Issue #19873 proposes leveraging the model's native bash chaining ability through zero-dependency OS sandboxing, aligning tooling with how Gemini is fundamentally trained to operate.
- **Smarter tool scoping** — Issue #24246 (400 error with >128 tools) and #21968 (skills not used autonomously) point to demand for better automatic tool selection and scoping.

---

## 6. Developer Pain Points

1. **Subagent hangs and silent failures** — The most recurring frustration. Agents either hang indefinitely (#21409, #25166) or report false successes after hitting turn limits (#22323). Users are forced to disable subagents entirely as a workaround.
2. **Shell command state management** — Commands that complete successfully still leave the agent stuck in "awaiting input" (#25166), blocking the agent loop and requiring manual cancellation.
3. **OAuth and auth loop bugs** — Infinite consent loops (#28519) and MCP token-refresh failures (#28481) force repeated re-authentication, degrading the developer experience.
4. **Regression from thought-stripping logic** — The v0.53.0 `stripThoughts()` change (#28607, #28586) introduced a 400 API error for parallel tool calls, affecting a significant user segment until the fix lands.
5. **Auto Memory inefficiency** — Low-signal sessions are retried indefinitely (#26522), and invalid patches are silently dropped without user feedback (#26523), wasting tokens and obscuring issues.
6. **Browser agent fragility on Linux** — Wayland compatibility issues (#21983) and ignored `settings.json` overrides (#22267) make the browser subagent unreliable for non-macOS users.
7. **macOS sandbox startup crashes** — Missing seatbelt profiles cause hard crashes in sandbox mode (#28551), blocking users who rely on `-s` for security.

---

*Digest generated from GitHub data for `google-gemini/gemini-cli` on 2026-08-01. All links reference the upstream repository.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-01

## 1. Today's Highlights

The team released **v1.0.78-0** introducing `/permissions` for switching approval modes and ACP session closure support, along with a new sandbox cache setting. The community is actively flagging several regressions from recent versions, including a session-resume OOM crash in 1.0.74, a plan-mode shell-command block, and a V8 string-length limit that permanently breaks large sessions.

---

## 2. Releases

### v1.0.78-0
- **Added:** `/permissions` command to switch between approval modes.
- **Added:** ACP mode support for closing sessions via the `closeSession` request.
- **Improved:** New sandbox setting `allowDevToolCaches` (enabled by default) grants sandboxed builds access to toolchain caches, registries, and installs so builds work correctly.

> Full release notes: <https://github.com/github/copilot-cli/releases>

---

## 3. Hot Issues

1. **[#4325] Session becomes permanently unloadable once `events.jsonl` exceeds V8's max string length** (OPEN, 0 👍)
   A long-lived session that grows past V8's string limit can never be resumed again. The session still appears in `/resume` and its DB row is intact, but no support can recover it. This is a hard data-loss vector for power users.

2. **[#4251] Resume of a large session OOMs / grinds one CPU core for ~70 min in 1.0.74** (OPEN, 1 👍)
   Confirmed regression vs 1.0.73 — resuming the same ~3–4× larger session causes massive memory spikes. Users are seeing 70-minute hangs or OOM kills on resume.

3. **[#4188] Regression on plan-mode — blocks shell commands** (CLOSED, 7 comments, 3 👍)
   Plan mode now blocks `gh` CLI and other shell commands that were previously used to enrich plans (e.g., reading/creating issues). Users consider this a breaking regression of established workflow.

4. **[#4305] Failed to convert JavaScript value 'Undefined' into rust type 'String'** (CLOSED, 4 comments, 4 👍)
   Upgrading to 1.0.76 causes immediate Rust type-conversion errors on every command. Affects both the stable and pre-release (`1.0.76-2`) paths.

5. **[#4078] Scheduled prompts kill the existing prompt queue** (OPEN, 4 comments, 0 👍)
   When a `/every` or `/after` scheduled prompt fires, it consumes the queue slot but does not pop the next item. The queue stalls permanently after the first scheduled trigger.

6. **[#4318] Autopilot task-completion enforcement can override explicit user instructions** (OPEN, 1 comment, 0 👍)
   In autopilot mode, the agent continues executing actions even after the user explicitly narrows the task to research/explanation only. Directly contradicts user intent.

7. **[#3909] Enterprise/org server-managed settings for the local Copilot CLI** (OPEN, 4 comments, 0 👍)
   Org admins currently have no way to push configuration — especially environment variables — to developers' local CLI installs. Only cloud-side mechanisms (Codespaces secrets) exist today.

8. **[#2109] ACP: support an `ask_user` / `ask_question` style extension method** (OPEN, 2 comments, 6 👍)
   High community interest in adding a structured question-asking extension to ACP, beyond the existing `session/request_permission`. Enables custom ACP clients to surface clarifying questions.

9. **[#3215] Fail Tool Calls with DeepSeek-V4 models (400 error)** (CLOSED, 3 comments, 1 👍)
   Using DeepSeek-V4 (Flash or Pro) triggers a 400 error about unclosed `tool_use` IDs. Indicates a protocol mismatch between the model provider and the CLI's tool-result tracking.

10. **[#4319] Plan review not shown and session hangs after switching sessions during plan mode** (OPEN, 0 comments, 0 👍)
    Switching away from and back to a session mid-plan leaves the approval UI invisible. The only recovery path is a hard terminate — plan mode loses its wait state on session switch.

---

## 4. Key PR Progress

1. **[PR #3163] ViewSonic monitor** (OPEN, created 2026-05-06)
   References prior issues #2591, #3561, #3559 and initiates a GitHub Action runner configuration. Community-triage item for display/hardware compatibility.
   <https://github.com/github/copilot-cli/pull/3163>

2. **[PR #4316] Create devcontainer.json** (OPEN, created 2026-07-31)
   Adds a devcontainer configuration to streamline local development setup for contributors.
   <https://github.com/github/copilot-cli/pull/4316>

---

## 5. Feature Request Trends

- **Enterprise configuration management:** Multiple issues (#3909) call for org-level push of local CLI config and env vars, closing the gap between cloud and local management.
- **ACP protocol maturity:** Requests for `ask_user` (#2109), token/context usage exposure (#4174), and session-close support (now in v1.0.78-0) show a strong push toward making ACP a full-featured integration protocol.
- **Session resilience:** Feature requests for scrollable conversation history (#4313), pinned-session nav grouping (#4321), and robust resume behavior point to sessions as a core friction area.
- **Input & terminal UX:** Arrow-key navigation in the sidebar (#4304), transcript rendering fixes (#4311), and terminal-scroll support indicate ongoing investment in the interactive CLI experience.

---

## 6. Developer Pain Points

1. **Version regressions are hitting power users hard.** Issues #4251 (OOM on resume), #4188 (plan-mode shell block), #4305 (Rust type crash on upgrade), and #3215 (DeepSeek tool-call failure) all trace back to recent version bumps. The pace of change is outstripping regression testing for long-lived session workflows.

2. **Large / long-lived sessions are fragile.** Beyond the V8 string-length death limit (#4325), scheduled prompts stalling the queue (#4078) and resume memory bloat (#4251) suggest the session persistence layer needs architectural attention.

3. **Autopilot mode occasionally overrides explicit intent.** Issue #4318 and #4161 (tool availability after mode switch) show that the agent's task-completion loop can push past user instructions, eroding trust in autopilot for nuanced workflows.

4. **MCP configuration is brittle.** Strict JSON parsing without comment support (#4323), nested tool-grant bugs (#4320), and missing help text in the interactive wizard (#1478) make shared repo-level MCP setups error-prone.

5. **Terminal rendering has persistent bugs.** Blank transcript regions (#4311), missing `sessionStart` hook output (#1352), and PTY-buffer hangs on large command output (#2182) continue to degrade the interactive experience.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-08-01

## 1. Today's Highlights

No new releases were published in the last 24 hours. The community's attention is focused on two major feature requests — **Remote Control** (#1282) and a **Memory System** (#1283) — both championed by long-time contributor CatKang and updated yesterday. Meanwhile, PR #2572 introduces a critical bug fix for double-encoded JSON arguments in tool calls, addressing a recurring compatibility issue with certain API providers.

## 2. Releases

*No releases in the last 24 hours.*

## 3. Hot Issues

1. **#1282 — Remote Control: Continue local sessions from any device** [👍 23 · 9 comments]
   The most upvoted open issue, requesting the ability to resume a local Kimi Code CLI session from a phone, tablet, or browser. Signals strong community demand for workflow continuity beyond the desktop.
   <https://github.com/MoonshotAI/kimi-cli/issues/1282>

2. **#1283 — Memory System: Persistent context across sessions** [👍 0 · 8 comments]
   Companion feature to #1282 — a memory layer for AI-managed notes and user-defined instructions (`custom instructions`) that persist across CLI sessions. Both are by the same author and reflect a unified vision for session-aware usage.
   <https://github.com/MoonshotAI/kimi-cli/issues/1283>

3. **#2422 — Auto-scroll to bottom after conversation completes** [👍 1 · 2 comments]
   Bug where scrolling up to review output causes the viewport to snap back to the bottom. Affects Linux users on version 1.46.0 with the kimi2.6 model. Low upvotes but high signal for UX quality.
   <https://github.com/MoonshotAI/kimi-cli/issues/2422>

4. **#796 — Error: "the message at position 1 with role"** [👍 0 · 1 comment]
   Closed LLM provider 400 error from early KimiCLI/1.3 days on macOS. While closed, its persistence in the issue list highlights historical provider-compatibility fragility that PR #2572 now addresses more broadly.
   <https://github.com/MoonshotAI/kimi-cli/issues/796>

## 4. Key PR Progress

1. **#2572 — fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments** [OPEN]
   Fixes Pydantic validation errors when providers like Moonshot return nested array/object values as JSON strings inside `function.arguments`. Impacts tools such as `SetTodoList`, `ExitPlanMode`, and `StrReplaceFile`. A timely fix for cross-provider reliability.
   <https://github.com/MoonshotAI/kimi-cli/pull/2572>

*(Only 1 PR was active in the last 24 hours.)*

## 5. Feature Request Trends

- **Cross-device session continuity** — #1282 is the clear top-voted feature request, reflecting a desire to treat the CLI as a persistent workspace rather than a desk-bound terminal.
- **Persistent memory & context** — #1283 pairs naturally with #1282, pointing to a broader trend toward stateful, aware CLI interactions rather than stateless per-session calls.
- **UI/UX polish** — #2422 underscores ongoing sensitivity to terminal scrolling and viewport behavior, a recurring category of friction in TUI-style tools.

## 6. Developer Pain Points

- **Provider incompatibility on nested JSON** — The double-encoding issue (now addressed in PR #2572) has been a recurring pain point, traceable to older issues like #796. Tool-calling providers that serialize nested structures differently cause validation failures.
- **Session fragility** — The absence of remote access and cross-session memory forces developers to manually re-establish context, undermining the CLI's value for extended coding workflows.
- **Terminal viewport behavior** — Auto-scroll after conversation completion disrupts code review and output inspection, a subtle but frequent irritation for power users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-01

## 1. Today's Highlights
The community is closely tracking widespread `401 Request blocked by upstream provider` errors impacting both OpenCode Go and Zen subscriptions, with users confirming direct API keys function normally. Amidst this, anticipation is high around the newly formal DeepSeek V4 Flash release and whether it will be available on OpenCode's curated tiers. On the engineering side, the core team is advancing V2 TUI stability, external plugin runtime sharing, and tab-state hygiene, while introducing new UX configuration options for message sending and browser launching.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
1. **[OPEN] Go: 401 Request blocked on chat/completions while /v1/models works** (42 comments, 11 👍)  
   `github.com/anomalyco/opencode/issues/38257`  
   Critical paid-subscriber outage. `/v1/models` succeeds but chat completions are blocked upstream, suggesting a provider-side authorization or routing issue rather than a client bug.
2. **[CLOSED] TUI black screen on versions >1.0.46** (37 comments, 13 👍)  
   `github.com/anomalyco/opencode/issues/4140`  
   Recurring display regression that forces users to revert to 1.0.46. Highlights ongoing instability in the terminal UI layer across minor bumps.
3. **[OPEN] DeepSeek V4 Flash formal version availability** (22 comments, 20 👍)  
   `github.com/anomalyco/opencode/issues/39823`  
   High community interest in whether OpenCode will promptly support DeepSeek’s newly formalized V4 Flash checkpoint and its improved agent benchmarks.
4. **[CLOSED] Black screen on fresh install** (33 comments, 17 👍)  
   `github.com/anomalyco/opencode/issues/10221`  
   Another TUI initialization failure report, indicating potential environment-specific rendering or dependency conflicts across installations.
5. **[CLOSED] Clarify self-hosted vs. proxied models in Go** (14 comments, 31 👍)  
   `github.com/anomalyco/opencode/issues/24649`  
   Strong community demand for infrastructure transparency. Users want clear mapping of which models are run natively vs. routed through third-party providers.
6. **[CLOSED] Allow text selection** (13 comments, 29 👍)  
   `github.com/anomalyco/opencode/issues/927`  
   Long-standing UX gap. Developers repeatedly request native clipboard/selection support for copying prompts, outputs, and errors without workaround scripts.
7. **[OPEN] Revert silent removal of Go privacy wording & add telemetry/retention disclosures** (4 comments, 20 👍)  
   `github.com/anomalyco/opencode/issues/39875`  
   Raises trust concerns after recent commit history quietly altered privacy documentation. Community wants explicit telemetry and retention policy updates.
8. **[OPEN] Plugin/Agent marketplace proposal** (6 comments, 23 👍)  
   `github.com/anomalyco/opencode/issues/28696`  
   Master issue for a unified registry covering discovery, installation, and versioning. Signals strong appetite for an official ecosystem distribution layer.
9. **[OPEN] SQLite `NOT NULL` crash on `/model` switch mid-session** (3 comments, 0 👍)  
   `github.com/anomalyco/opencode/issues/39165`  
   Switching models corrupts session message sequencing, causing hard crashes and silent input failure. High severity for multi-model workflows.
10. **[OPEN] gpt-5.6-luna stream degradation on Go vs Codex path** (3 comments, 0 👍)  
    `github.com/anomalyco/opencode/issues/39881`  
    Same model produces repeated answers, mid-stream cuts, and junk tails on OpenCode Go, while direct Codex routing remains clean. Points to potential proxy/transcoding artifacts.

## 4. Key PR Progress
1. **[needs:compliance] Configurable send key** `github.com/anomalyco/opencode/pull/39985`  
   Adds Enter / Shift+Enter / Ctrl+Enter modes under Settings → General → Input, aligning with common IDE conventions.
2. **Add `no-browser` option to web command** `github.com/anomalyco/opencode/pull/39984`  
   Suppresses automatic browser launch, improving automation and headless workflow compatibility.
3. **Share runtime with external TSX plugins** `github.com/anomalyco/opencode/pull/39983`  
   Fixes frozen reactive JSX in V2 TUI plugins by wiring plugin signals to the host OpenTUI/Solid runtime.
4. **Concise error output for failed shell commands** `github.com/anomalyco/opencode/pull/39982`  
   Trims verbose stack traces from non-zero exits, complementing earlier smart-timeout implementations.
5. **Watch newly created plugin directories** `github.com/anomalyco/opencode/pull/39981`  
   Enables runtime discovery of `.opencode/plugins/tui/` created after TUI startup, removing the silent-watch failure.
6. **Persist tab reorder once per drag** `github.com/anomalyco/opencode/pull/39942`  
   Reduces FLOCK write cycles during tab drags from N crossings to a single atomic commit, improving responsiveness.
7. **Harden session tab state hygiene** `github.com/anomalyco/opencode/pull/39941`  
   Exposes previously swallowed `.catch(() => {})` failures, preventing silent tab reset loops on persistence errors.
8. **Ignore hidden tab close hitbox** `github.com/anomalyco/opencode/pull/39940`  
   Decouples `onMouseUp` from hover-only rendered close marks, fixing accidental closes in terminals without motion tracking.
9. **Toggle transparent background** `github.com/anomalyco/opencode/pull/5657`  
   Introduces a tri-state `auto | on | off` transparency policy persisted via `theme_transparent`, with command-palette exposure.
10. **Wait for mini prompt readiness in tests** `github.com/anomalyco/opencode/pull/39980`  
   

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-01

## 1. Today's Highlights

The Pi team shipped a major server-side architecture refactoring across a batch of merged PRs (#7410, #7409, #7408, #7379), introducing SQLite-linear session operations, storage-owned session readers, and remote session client coordination. Two high-impact fixes landed for long-standing pain points: Wayland clipboard paste (#7387 closes #7248) and JSON-streaming O(n²) stdout growth (#7394). Meanwhile, compaction bugs remain the top open issue cluster, with at least three reports (#7020, #6879, #7253) and enterprise Copilot GHE failures (#7413).

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Status | Reaction | Why it matters |
|---|-------|--------|----------|----------------|
| [#6187](https://github.com/earendil-works/pi/issues/6187) | Pi login hangs in WSL after GitHub Copilot device authorization | OPEN · 19 comments | WSL + Copilot users are blocked from login entirely. |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | TUI pins a full core while streaming (uncached `Intl.Segmenter`) | OPEN · 11 comments | Directly impacts long-session CPU usage; spindump confirms the hot path. |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | Auto-compaction never triggers after context exceeds 100% | OPEN · 7 comments · 👍 5 | Agentic sessions routinely overshoot compaction thresholds and only recover on API rejection. |
| [#7267](https://github.com/earendil-works/pi/issues/7267) | Custom provider docs vs. `registerProvider` implementation mismatch | CLOSED · 8 comments | Breaks extension authors relying on documented API; signals a docs–code drift risk. |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | Pi doesn't continue after compaction | OPEN · 7 comments · 👍 2 | Long-running "coordinator" sessions stall post-compaction — a reliability gap for power users. |
| [#7161](https://github.com/earendil-works/pi/issues/7161) | `anthropic-messages` never sends `x-client-request-id` | OPEN · 6 comments | Breaks gateway session affinity (e.g., CliProxyAPI round-robin across Claude accounts). |
| [#7062](https://github.com/earendil-works/pi/issues/7062) | Handle array content & missing `finish_reason` in OpenAI-compat streams | OPEN · 5 comments | Databricks/Qwen3 models produce non-standard `choice.delta.content`; causes JSON parse errors. |
| [#6996](https://github.com/earendil-works/pi/issues/6996) | Gemini 3.x models fail during tool use (missing `thought_signature`) | OPEN · 4 comments | Gemini 3.x tool-use chains silently break — affects a growing model family. |
| [#7253](https://github.com/earendil-works/pi/issues/7253) | `/compact` triggers compaction twice when context ≥ 90% | OPEN · 3 comments · in-progress | Manual compaction conflicts with auto-compaction, causing infinite retry until ESC. |
| [#7413](https://github.com/earendil-works/pi/issues/7413) | Compaction fails on GitHub Copilot GHE.com enterprise accounts | CLOSED · 2 comments | Enterprise Copilot users get "unknown stamp" errors on `/compact`; chat itself works fine. |

---

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#7396](https://github.com/earendil-works/pi/pull/7396) | feat: add server session backend | OPEN | Durable `@earendil-works/pi-coding-agent/server` backend; persists sessions as JSONL with exclusive cross-process locking and crash recovery. |
| [#7411](https://github.com/earendil-works/pi/pull/7411) | feat: add experimental CLI option parser | OPEN | New parser for combined/server/client CLI modes with role-specific discriminated-union auth sources and Unix socket validation. |
| [#7381](https://github.com/earendil-works/pi/pull/7381) | fix: make model refresh state consistent | OPEN | Addresses race conditions where overlapping refreshes (model list, login, runtime key change, extension register) corrupt provider state. |
| [#7394](https://github.com/earendil-works/pi/pull/7394) | fix: make JSON streaming output linear | OPEN | Emits delta-only `message_update` records in `--mode json`, restoring backpressure and fixing the O(n²) stdout bug (#7290). |
| [#7410](https://github.com/earendil-works/pi/pull/7410) | fix: make SQLite session operations linear | CLOSED | Stages connection cache until append transactions succeed; replaces repeated `unshift()` with `push()` + `reverse()`. |
| [#7409](https://github.com/earendil-works/pi/pull/7409) | feat: add remote session client coordination | CLOSED | Adds `PiClient` connection ownership, idempotent async disposal, and shared/exclusive session leases for multi-process safety. |
| [#7408](https://github.com/earendil-works/pi/pull/7408) | feat: add storage-owned session readers | CLOSED | Replaces eager `SessionSnapshot` loading with store-owned `SessionReader` capabilities; moves fork selection into `SessionStore`. |
| [#7404](https://github.com/earendil-works/pi/pull/7404) | feat: add Baseten provider | CLOSED | New built-in API-key provider (OpenAI-compatible) via `BASETEN_API_KEY`; mirrors the Together AI integration pattern. |
| [#7387](https://github.com/earendil-works/pi/pull/7387) | fix: read clipboard text on Wayland | CLOSED | Fixes #7248 — uses `wl-paste` before native X11 clipboard; preserves empty-clipboard semantics with X11 fallback. |
| [#7386](https://github.com/earendil-works/pi/pull/7386) | feat: add composable protocol server | CLOSED | Transport-independent `PiServer` with framed-CBOR protocol, Unix listener, and `pi-server/testing` conformance helpers. |

---

## 5. Feature Request Trends

- **Server-side / multi-process architectures** — The largest concentrated effort this cycle (#7396, #7410, #7409, #7408, #7379, #7391, #7386) is building a durable, crash-recoverable server backend with SQLite, session leases, and composable protocols. This points to strong community and team demand for headless / remote Pi sessions.
- **New model provider integrations** — Baseten (#7404) and Amazon Bedrock Mantle (#6216) PRs landed; Kimi K3 on Fireworks (#7199) was also added. Users continue to push for broader provider coverage beyond the core OpenAI/Anthropic/Gemini triad.
- **Extension API maturation** — Native `pi.prompt()` for extensions (#7389) and a request to run extension commands after agent settle (#7277) show extensions are moving from a fringe capability toward first-class usage.
- **CLI ergonomics** — The experimental CLI option parser (#7411) and the JSON output linearity fix (#7394) both target programmatic / pipeline usage of Pi.

---

## 6. Developer Pain Points

1. **Compaction reliability** — Four open/closed issues (#7020, #6879, #7253, #7413) center on compaction triggering at wrong times, not triggering at all, or failing on enterprise accounts. This is the #1 reliability concern for long-running agentic sessions.
2. **TUI performance at scale** — Core-pinning during streaming (#6665) and keystroke lag scaling with conversation length (#7385) both trace to uncached rendering paths (`Intl.Segmenter`, bypassed `Text` component cache). Long sessions are where Pi hurts most.
3. **Provider / gateway compatibility** — Missing `x-client-request-id` on Anthropic (#7161), non-standard Databricks content arrays (#7062), and Gemini `thought_signature` gaps (#6996) all indicate that Pi's provider abstraction still has edge-case holes with non-OAI-native models and proxy gateways.
4. **Linux binary compatibility** — SIGILL on pre-Haswell CPUs (#7149) persists; the fix PR (#7390) is open but the official binary still targets BMI2-capable chips, excluding older hardware.
5. **Clipboard / Wayland support** — Ctrl+V silently failing on Wayland (#7248) was a recurring friction point; the fix landed but signals that Pi's terminal-interop layer needs more comprehensive cross-platform testing.
6. **Settings concurrency** — Concurrent writes to `settings.json` can lose unrelated settings (#7384), a data-integrity bug in the lock-acquisition path that affects multi-window or multi-process setups.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-01

## 1. Today's Highlights

Qwen Code v0.21.2 shipped with key improvements to autofix behavior, now deferring lower-severity suggestions after five rounds and posting visible notices when refusing to proceed due to round limits. The community is actively tackling daemon resource management for multi-workspace support, while a mouse-tracking regression in the TUI and several SGR escape-sequence leaks have drawn rapid fix PRs.

---

## 2. Releases

**v0.21.2** — Latest release. Autofix improvements: lower-severity suggestions are deferred after five fix rounds, and the CLI now posts visible notices when refusing further autofix attempts due to round limits. See [#7913](https://github.com/QwenLM/qwen-code/pull/7913) and [#8067](https://github.com/QwenLM/qwen-code/pull/8067).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community |
|---|-------|---------------|------------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | RFC: Multiple workspaces in one `qwen serve` daemon | Foundational architecture shift — a single daemon serving multiple workspaces would drastically improve resource efficiency for power users. Closed after discussion. | 31 comments, high engagement |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | Track bounded multi-workspace daemon resource usage | Direct follow-up to #6378 — without memory/CPU bounds, multi-workspace daemons risk uncontrolled resource consumption. | 9 comments |
| [#8182](https://github.com/QwenLM/qwen-code/issues/8182) | Daemon gives each ACP child 50% of host memory, never divided | P2 bug: `getAcpMemoryArgs()` caches a host-derived value and assigns it in full to every child process, causing OOM in multi-child scenarios. Open, author is a core maintainer. | 3 comments |
| [#8267](https://github.com/QwenLM/qwen-code/issues/8267) | SGR mouse escape sequences leak into TUI input box | v0.21.2 regression: mouse events (`ESC [ < ... M`) are injected as raw text instead of being consumed by the TUI, breaking input. Fast-tracked fix PR #8268 already opened. | 2 comments |
| [#8003](https://github.com/QwenLM/qwen-code/issues/8003) | Model outputs XML-style tool calls as plain text in long sessions | In 200+ turn sessions, `qwen3.8-max-preview` occasionally emits `<invoke>`/`<parameter>` tags inside the `content` field instead of structured `tool_calls`. Closed with a welcome-pr fix. | 3 comments |
| [#8207](https://github.com/QwenLM/qwen-code/issues/8207) | JSON-style tool call args leak as plain text when format drops | Production DataAgent session saw the model serialize tool arguments as plain text instead of structured calls at ~35K input tokens. Open, needs triage. | 3 comments |
| [#6721](https://github.com/QwenLM/qwen-code/issues/6721) | Deferred tool discovery invalidates prompt cache prefixes | Tool search during deferred discovery currently resolves real schemas and calls `setTools()`, breaking cache prefix continuity. Open, P2. | 7 comments |
| [#8039](https://github.com/QwenLM/qwen-code/issues/8039) | Anthropic 4.6+ assistant-prefill 400 + thinking.display defaults to 'omitted' | Affects every Claude Opus/Sonnet 4.6+ and 5.x model on the Anthropic wire. Two verified bugs: prefill 400 errors and silent thinking suppression. Closed with fix. | 6 comments |
| [#8227](https://github.com/QwenLM/qwen-code/issues/8227) | Windows `@`-file reads lose O_NOFOLLOW protection | Security follow-up to #7206 — Windows lacks `O_NOFOLLOW`, making symlink/TOCTOU hardening materially weaker and currently untested. Open, welcome-pr. | 3 comments |
| [#5199](https://github.com/QwenLM/qwen-code/issues/5199) | Minified React error #185 in IDE/windows scope | Users seeing cryptic minified React errors with no actionable stack trace. Open, needs information. | 9 comments |

---

## 4. Key PR Progress

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8268](https://github.com/QwenLM/qwen-code/pull/8268) | fix(cli): filter SGR mouse escape sequences | Bug fix | Adds `0x3c` to the CSI third-byte check so SGR mouse events are classified and filtered during early input capture. Direct response to #8267. |
| [#8245](https://github.com/QwenLM/qwen-code/pull/8245) | feat(serve): resolve and report daemon memory budget | Feature | Gives the daemon awareness of its own memory limits by reading cgroup/heap-size fields — the first step toward bounding multi-workspace resource usage (#8051). |
| [#8077](https://github.com/QwenLM/qwen-code/pull/8077) | fix(cli): stabilize thinking block height, inline Ctrl+O toggle | UX fix | Hides streaming thinking preview by default to eliminate page reflow flicker; replaces fullscreen transcript overlay with an inline toggle. |
| [#8217](https://github.com/QwenLM/qwen-code/pull/8217) | feat(cli): TUI image display tool | Feature | New model-invocable `display_image` tool for the main TUI — validates PNG paths (8 MiB limit, signature check) and persists structured metadata rather than raw bytes. |
| [#8198](https://github.com/QwenLM/qwen-code/pull/8198) | fix(cli): add `ui.mouseTracking` setting | Bug fix / escape hatch | Restores right-click and URL click behavior in VP mode by adding a toggleable `ui.mouseTracking` setting (default `true`), addressing the mouse regression from v0.21.1. |
| [#8261](https://github.com/QwenLM/qwen-code/pull/8261) | feat(review): mined disciplines — effective-diff guard, positive control, seven lenses | Feature | Expands the `/review` command with three verification capabilities: effective-diff guards, positive controls, and seven analytical lenses, based on 108 maintainer verification comments. |
| [#8215](https://github.com/QwenLM/qwen-code/pull/8215) | feat(review): Test Plan claim check, base-tree A/B harness, per-hunk probes | Feature | Further strengthens `/review` with test-plan validation, A/B base-tree comparison, and per-hunk diagnostic probes. |
| [#8229](https://github.com/QwenLM/qwen-code/pull/8229) | feat(web-shell): mutable default mid-turn messages | Feature | Messages sent during an active turn now enter the running turn by default with a "Queued…" status, improving interactivity in the Web Shell. |
| [#8050](https://github.com/QwenLM/qwen-code/pull/8050) | fix: make test suite portable on Windows | Infrastructure | Aligns workspace test suites and platform-sensitive paths for consistent Windows behavior while preserving POSIX-only assertions. |
| [#8057](https://github.com/QwenLM/qwen-code/pull/8057) | feat(skills): add disabled skill levels | Feature | Introduces `skills.disabledLevels` setting (union of `project`, `user`, `extension`, `bundled`) so users can hide entire skill categories before filesystem access. |

---

## 5. Feature Request Trends

- **Multi-workspace daemon support** — The #6378 RFC and its follow-ups (#8051, #8091) show sustained community demand for running multiple workspaces from a single `qwen serve` process, paired with strict resource bounding. This is the dominant architectural feature request.
- **`/review` verification depth** — PRs #8261 and #8215 reflect an evolving trend to make the review tooling more rigorous and maintainer-grade, adding test-plan checks and per-hunk probes.
- **Skill granularity** — #8057's disabled skill levels indicate a desire for finer-grained control over which skill sources are active, not just which individual skills.
- **Web Shell interactivity** — Mid-turn message mutability (#8229) and compact table rendering (#8264) show ongoing investment in making the Web Shell feel more responsive and usable at narrower widths.
- **TUI media support** — The `display_image` tool (#8217) signals interest in richer terminal-side media capabilities beyond text.

---

## 6. Developer Pain Points

- **Memory bounding in multi-child daemon scenarios** — #8182 and the broader #8051/#8091 thread reveal that the daemon's memory allocation model breaks down with multiple ACP children, assigning each a full host-derived budget instead of dividing it. This is a high-priority correctness gap.
- **Mouse tracking regressions** — The v0.21.1 VP mode change introduced a mouse-tracking regression (#8267, #8198) that broke right-click and URL clicks, requiring both a setting escape hatch and an escape-sequence filter fix. Community frustration is evident in the rapid-fire issue-to-PR cycle.
- **Tool-call format instability in long sessions** — Both #8003 (XML leakage) and #8207 (JSON-as-plain-text) describe the model degrading to unstructured tool-call output in long or complex sessions, a reliability concern for production DataAgent workflows.
- **Windows platform parity** — #8227 (weaker symlink protection) and #8050 (test portability) highlight that Windows support remains a persistent effort, with security hardening and test consistency lagging behind POSIX.
- **React error obscurity** — #5199's minified React error #185 with no actionable stack trace exemplifies the friction developers face when UI errors are surfaced without debugging context.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI / CodeWhale Community Digest — 2026-08-01

## 1. Today's Highlights

v0.9.3 shipped with DeepSeek V4 Flash direct support and canonical tool unification, while the community continues debating the Chinese translation of "Constitution" for project governance docs. Several critical fixes landed for file-edit diagnostics, TUI rendering glitches, and the Windows installer's PATH handling.

---

## 2. Releases

### v0.9.3 — Released 2026-07-31 [#4993](https://github.com/Hmbown/CodeWhale/pull/4993)
- DeepSeek V4 Flash direct integration and response handling
- Canonical tools: reduced default tool surface, merged overlapping task state, shortened tool descriptions to save prefix tokens
- Removed the unmaintained `ttf-parser` → `lopdf` → `pdf-extract` dependency chain (CVE-adjacent maintenance warning resolved — [#4382](https://github.com/Hmbown/CodeWhale/issues/4382))
- The legacy npm package `deepseek-tui` is deprecated; `codewhale` is the public product from Shannon Labs

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | Chinese translation of "Constitution" — 宪法 vs 协作准则 | Community governance doc terminology; the PR author reverted to "宪法" for authority connotation but faces pushback over political sensitivity in Chinese context. 5 comments, active discussion. |
| [#5007](https://github.com/Hmbown/CodeWhale/issues/5007) | Youtuber using Codex instead of CodeWhale for DeepSeek-v4-flash | Highlights visibility gap — a creator covering DeepSeek's final release chose a competitor's TUI. Community is engaged (4 comments). |
| [#5003](https://github.com/Hmbown/CodeWhale/issues/5003) | File edit tool fails repeatedly on long C files with CRLF | Model hit 15+ failures + 3 full git rollbacks before workaround. Directly impacts developer workflow on cross-platform codebases. |
| [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) | Filesystem path whitelist for sandbox (Xcode DerivedData) | Sandboxed mode blocks access to build artifacts outside workspace — a blocker for iOS/macOS developers. |
| [#5000](https://github.com/Hmbown/CodeWhale/issues/5000) | Interrupted assistant output not a durable session item | When a turn is interrupted before `MessageComplete`, emitted text disappears from the authoritative session, causing inconsistency between what the user sees and what the next turn receives. |
| [#4599](https://github.com/Hmbown/CodeWhale/issues/4599) | Single source of truth for per-model facts | Context window, max output, and capabilities are scattered across constants, match arms, and tests — a maintainability debt that grows with each new model. |
| [#4708](https://github.com/Hmbown/CodeWhale/issues/4708) | Shorten tool descriptions, progressive disclosure | Verbose descriptions consume prefix tokens and dilute action-selection signal — a performance/reliability issue especially on smaller models. |
| [#4706](https://github.com/Hmbown/CodeWhale/issues/4706) | Reduce default tool surface, unify overlapping state | `tasks`, `update_plan`, `work_update` overlap and increase selection errors. Core refactoring for v0.9.3 reliability. |
| [#4998](https://github.com/Hmbown/CodeWhale/issues/4998) | Headless OAuth completion (PKCE + manual redirect) | SSH/container/CI installs can't complete browser OAuth. Generic PKCE with loopback-first + paste fallback is a widely requested enabler. |
| [#4997](https://github.com/Hmbown/CodeWhale/issues/4997) | GitHub Copilot as named external ACP worker backend | Negotiate Copilot's dynamic model roster at runtime instead of hard-coding — avoids version rot and respects Copilot's own update cadence. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#5008](https://github.com/Hmbown/CodeWhale/pull/5008) | Actionable File edit diagnostics & stale-line-number tolerance | Open | Fixes [#5003](https://github.com/Hmbown/CodeWhale/issues/5003); gives the model clearer failure signals instead of silent repeated failures on large replacements. |
| [#5001](https://github.com/Hmbown/CodeWhale/pull/5001) | Measure circled digits & keycaps as 2 columns | Open | Fixes TUI rendering glitches (missing chars / phantom spaces) where enclosers like ①❶1️⃣ are measured as 1 column but render as 2 in CJK terminals. |
| [#5006](https://github.com/Hmbown/CodeWhale/pull/5006) | Preserve long Windows user PATH | Open | Fixes NSIS installer overwriting existing long `PATH` values — `ReadRegStr` returns empty for registry data exceeding its fixed buffer, causing the installer to treat it as missing. |
| [#4977](https://github.com/Hmbown/CodeWhale/pull/4977) | AltGr-typed "/" reaches composer | Closed | Fixes [#4723](https://github.com/Hmbown/CodeWhale/issues/4723); on Windows ABNT2 layout, `AltGr+Q` (/) was intercepted as `Ctrl-/` help chord. |
| [#5004](https://github.com/Hmbown/CodeWhale/pull/5004) | Restore v0.9.3 rustdoc gate | Closed | Fixed synthetic-catalog doc rendering and restored the Documentation CI gate for the v0.9.3 release candidate. |
| [#4993](https://github.com/Hmbown/CodeWhale/pull/4993) | Release v0.9.3 | Closed | 72 commits fast-forwarded onto `main`; candidate SHA `80c66dd`. Includes all v0.9.3 features listed above. |
| [#5013](https://github.com/Hmbown/CodeWhale/pull/5013) | Bump ratatui 0.30.0 → 0.30.2 | Open | Dependency update from dependabot. |
| [#5015](https://github.com/Hmbown/CodeWhale/pull/5015) | Bump futures-util 0.3.32 → 0.3.33 | Open | Fixes `ReadLines` issue per release notes. |
| [#5016](https://github.com/Hmbown/CodeWhale/pull/5016) | Bump libc 0.2.186 → 0.2.189 | Open | Adds Emscripten pthread support. |
| [#5010](https://github.com/Hmbown/CodeWhale/pull/5010) | Bump actions/stale 10.4.0 → 11.0.0 | Open | CI workflow dependency update with enhancement changes. |

---

## 5. Feature Request Trends

- **Headless & remote install support** — OAuth completion ([#4998](https://github.com/Hmbown/CodeWhale/issues/4998)), sandbox path whitelisting ([#5005](https://github.com/Hmbown/CodeWhale/issues/5005)), and ACP client protocol ([#4996](https://github.com/Hmbown/CodeWhale/issues/4996)) all point to growing demand from CI/SSH/container users.
- **External agent backend integration** — GitHub Copilot as an ACP worker ([#4997](https://github.com/Hmbown/CodeWhale/issues/4997)) and protocol-neutral ACP client ([#4996](https://github.com/Hmbown/CodeWhale/issues/4996)) signal appetite for Compose-like extensibility.
- **Context efficiency** — Multiple issues ([#4708](https://github.com/Hmbown/CodeWhale/issues/4708), [#4706](https://github.com/Hmbown/CodeWhale/issues/4706), [#4705](https://github.com/Hmbown/CodeWhale/issues/4705)) converge on shrinking the token footprint: shorter descriptions, smaller tool surface, leaner results.
- **Credential transparency** — [#4994](https://github.com/Hmbown/CodeWhale/issues/4994) asks for a provider-scoped, truthful `print-api-key` command with pinned resolution, addressing a recurring automation pain point.
- **Session durability** — [#5000](https://github.com/Hmbown/CodeWhale/issues/5000) and [#4995](https://github.com/Hmbown/CodeWhale/issues/4995) reflect demand for resilient session state across interruptions and restarts.

---

## 6. Developer Pain Points

1. **File edit tool reliability on complex files** — [#5003](https://github.com/Hmbown/CodeWhale/issues/5003) exposed a pattern where the model exhausts retries on large replacements with CRLF + CJK content, forcing users to external workarounds.
2. **Windows installer regressions** — [#5006](https://github.com/Hmbown/CodeWhale/issues/5006) and [#4977](https://github.com/Hmbown/CodeWhale/issues/4977) show Windows-specific edge cases (long PATH, AltGr keymaps) slipping through QA.
3. **Sandbox too restrictive for real workflows** — [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) highlights that `workspace-write` mode blocks legitimate build artifacts, especially for Xcode projects.
4. **Scattered model metadata** — [#4599](https://github.com/Hmbown/CodeWhale/issues/4599) describes per-model facts (context window, max output) duplicated across crates, tests, and config — a growing maintenance burden as the model roster expands.
5. **Interrupted turns lose state** — [#5000](https://github.com/Hmbown/CodeWhale/issues/5000) means any user-facing interruption (manual cancel, timeout) creates a silent gap between what was rendered and what the session records.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*