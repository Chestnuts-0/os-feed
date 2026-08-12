# AI CLI Tools Community Digest 2026-08-10

> Generated: 2026-08-10 00:56 UTC | Tools covered: 9

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
**Date: 2026-08-10**

---

## 1. Ecosystem Overview

The AI CLI tool landscape is rapidly maturing, with seven major projects (Claude Code, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI) competing across overlapping developer workflows. The dominant narrative this cycle centers on **multi-agent coordination**, **MCP reliability**, and **enterprise-grade permission and session controls** — signaling a shift from standalone coding assistants toward production-deployable agent platforms. Community health varies: established tools (Claude Code, Gemini CLI, Copilot CLI) show high issue volume reflecting complex user bases, while newer entrants (Kimi, Qwen) demonstrate focused iteration on core reliability and extensibility.

---

## 2. Activity Comparison

| Tool | Open Hot Issues | PRs (24h) | Releases (24h) | Notable Activity |
|---|---:|---:|---|---|
| **Claude Code** | 9+ | 4 | — | Critical security bug (#83760): denied tool call executed anyway; safety-classifier false positives from single reporter |
| **Gemini CLI** | 10 | 9 (5 open, 4 closed) | v0.56.0-nightly | Agent reliability P1s dominate; subagent hangs and false success signals |
| **GitHub Copilot CLI** | 10 | 0 | — | MCP bootstrapping fragility; enterprise model catalogue desync; 60s init timeout with no retry |
| **OpenCode** | 10 | 9 (6 open, 3 closed) | — | Clipboard regression (122 comments); V2 architecture merge in progress |
| **Pi** | 10 | 8 (6 open, 2 closed) | — | Race conditions in async startup/renderer crashes; remote session wire protocol merged |
| **Qwen Code** | 10 | 8 | v0.21.8-nightly | Native multi-agent coordination PR (#8804); Qoder plugin extension support; CI flake remediation |
| **DeepSeek TUI** | 9 | 3 (1 open, 2 closed) | v0.9.6 | Subtractive runtime release; compaction refactor; Mistral provider added |
| **Kimi Code CLI** | 2 | 1 | — | Streaming hang in ACP mode; JSON Schema metadata compatibility fix |
| **OpenAI Codex** | Truncated | — | — | Insufficient data in digest |

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Need |
|---|---|---|
| **Multi-agent / session coordination** | Qwen Code, OpenCode, Pi, Gemini CLI | Leader-workers patterns, subagent delegation, cross-session memory, unified task surfaces |
| **MCP reliability** | Claude Code, Copilot CLI, Kimi Code CLI, OpenCode | Configurable init timeouts, graceful error handling, tool-index staleness, schema compatibility |
| **Enterprise / BYOK support** | Copilot CLI, Claude Code, Pi, Qwen Code | Custom provider auth, org-level model sync, credential rotation, policy enforcement |
| **Persistent context & memory** | Kimi Code CLI, Qwen Code, Pi, Gemini CLI | Cross-session state retention, Auto Memory reliability, context window transparency |
| **Permission & approval hardening** | Claude Code, Gemini CLI, DeepSeek TUI | Tamper-resistant deny enforcement, configurable default selections, auditable approval chains |
| **Plugin / extension ecosystems** | Qwen Code, Claude Code, OpenCode, Pi | Structured plugin specs, hook compatibility (PreToolUse, PostToolUse, Stop), third-party integrations |
| **Terminal / TUI stability** | Pi, OpenCode, DeepSeek TUI, Gemini CLI | Wide-line rendering crashes, IME instability, scroll-jumps, permission prompt rendering in subagent chains |

---

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | Enterprise safety & policy enforcement; deep Anthropic model integration | Security-conscious engineering teams | Safety-classifier gatekeeping; permission-first design |
| **Gemini CLI** | Subagent architecture & recursion; deep Google model integration | Google Cloud / Gemini users | Multi-agent composition with `tools:` frontmatter; ACP protocol |
| **GitHub Copilot CLI** | GitHub-native workflows; Copilot integration | GitHub Enterprise orgs | Org-level model management; session queue ergonomics; `.github/hooks/` |
| **Qwen Code** | Multi-session coordination (leader-workers); Qoder plugin ecosystem | Chinese-market & open-weight model users | Turn-based SessionRuntime unification; native multi-agent CLI command |
| **OpenCode** | V2 architecture transition; desktop/TUI dual interface | Open-source / self-hosted users | Modular App/Desktop/Core/TUI/SDK split; Claude Code hook compatibility |
| **Pi** | Remote session wire protocol; extensible extension API | Power TUI users; local-model enthusiasts | CBOR-encoded protocol; context file events; bun/Node dual runtime |
| **DeepSeek TUI** | Subtractive runtime; provider-agnostic fleet management | DeepSeek/GLM/Mistral multi-provider users | Single-provider compaction summary; TOML config layering; Rust-based |
| **Kimi Code CLI** | Google GenAI integration; streaming ACP mode | Moonshot AI / Chinese-market users | JSON Schema normalization; ACP streaming with wire.jsonl persistence |

---

## 5. Community Momentum & Maturity

| Maturity Tier | Tools | Evidence |
|---|---|---|
| **High — mature, high-engagement** | Claude Code, Gemini CLI, Copilot CLI | Large issue volumes; frequent P1 escalations; corporate-raised issues (Microsoft employees on Copilot); sustained discussion threads (122+ comments on OpenCode clipboard) |
| **Growing — active iteration** | Qwen Code, OpenCode, Pi | Steady PR output; architectural shifts (Qwen multi-agent, OpenCode V2, Pi remote protocol); nightly release cadence |
| **Emerging — focused development** | DeepSeek TUI, Kimi Code CLI | Smaller issue counts but high signal; release-cycle driven (v0.9.6, v0.21.8-nightly); rapid feature additions (Mistral provider, Qoder plugins) |

**Most active communities** (by issue density and discussion depth): Claude Code and Gemini CLI lead in raw engagement. **Fastest iterating**: Qwen Code (8 PRs, nightly release, multi-agent coordination) and OpenCode (V2 merge, 75% renderer size reduction).

---

## 6. Trend Signals

1. **MCP is the new integration frontier.** Every major tool is grappling with MCP reliability — initialization timeouts, schema compatibility, and tool-index staleness. Developers should expect configurable timeout overrides and more robust error handling in upcoming releases.

2. **Multi-agent orchestration is no longer experimental.** Qwen Code's native `/coordinate` command, Gemini's subagent-to-subagent recursion PR, and OpenCode's nested subagent permission fixes signal that the ecosystem is converging on compositional agent architectures as a first-class capability.

3. **Enterprise features are driving bug volume.** Copilot CLI's org-level model desync (#4390, #4422), Claude Code's safety-classifier false positives (#67246, 12+ reports from one user), and Pi's Copilot 429 login failure (#7850) all reflect the friction of layering enterprise policy controls onto consumer-oriented agent designs.

4. **Streaming reliability remains a weak point.** Kimi Code CLI's silent ACP hang (#2598), OpenCode's streaming-only design blocking non-streaming proxies (#785), and Qwen Code's content-tag leak fixes (#8818) indicate that streaming pipeline robustness is an unresolved class of defects across the ecosystem.

5. **Local-first and BYOK demand is accelerating.** Qwen Code's Kimi/MiMo provider presets (#8368), DeepSeek TUI's Mistral integration (#5295), and Copilot CLI's custom provider 403 bugs (#4414) show that provider-agnostic deployment is a key differentiator users are voting for with their engagement.

6. **Session persistence and memory are table stakes.** Persistent context across sessions (Kimi #1283, Qwen #8803, Pi #7845, Gemini Auto Memory #26522) is the most cross-cutting feature request. Tools that deliver reliable cross-session memory will have a structural advantage.

---

*Report generated from GitHub community digests for 2026-08-10. Data reflects publicly available issue and PR activity across 8 AI CLI tool repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)



# Claude Code Skills — Community Highlights Report
*Data as of 2026-08-10 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

### #1 — `skill-creator` / `run_eval.py` Bug Fixes
**Status:** Multiple open PRs | **Community votes:** 7 👍 on linked issue
- **PR #1298**, **PR #1099**, **PR #1050**, **PR #1323**, **PR #1261** — A cluster of five related PRs fixing a critical bug where `run_eval.py` reports `recall=0%` on every iteration, rendering the description-optimization loop useless. Additional fixes address Windows subprocess encoding, trigger detection misreads, and parallel-worker file-isolation.
- **Issue #556** documents 10+ independent reproductions before any PR landed.
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298) · [Issue #556](https://github.com/anthropics/skills/issues/556)

### #2 — `document-typography` Skill
**Status:** Open (PR #514) | **Votes:** 0
- Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents — a cross-cutting quality issue affecting every document Claude produces.
- 🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### #3 — `testing-patterns` Skill
**Status:** Open (PR #723) | **Votes:** 0
- Comprehensive testing skill covering the Testing Trophy model, AAA unit-test pattern, React component testing with Testing Library, and more. Addresses a clear gap: the ecosystem lacks a unified "how should I test this?" skill.
- 🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

### #4 — `claude-api` Context-Window Exhaustion
**Status:** Open issue (Issue #1487) | **Votes:** 0
- The bundled `claude-api` skill eagerly injects ~156k tokens in a single tool call, immediately exhausting the context window. Widely felt pain point for users of this skill.
- 🔗 [Issue #1487](https://github.com/anthropics/skills/issues/1487)

### #5 — `skill-quality-analyzer` & `skill-security-analyzer`
**Status:** Open (PR #83) | **Votes:** 0
- Two meta-skills evaluating skill quality across five dimensions (structure, docs, examples, etc.) and security posture. Aims to raise the floor for community contributions.
- 🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

### #6 — `self-audit` Skill (PR #1367)
**Status:** Open | **Votes:** 0
- Audits AI output before delivery via mechanical file verification + a four-dimension reasoning quality gate. Universal — works across any project or tech stack.
- 🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)

### #7 — Org-Wide Skill Sharing
**Status:** Open issue (Issue #228) | **Votes:** 8 👍 *(highest on issues)*
- Users request native org-level skill sharing in Claude.ai, eliminating the current download→share→manual-upload workflow.
- 🔗 [Issue #228](https://github.com/anthropics/skills/issues/228)

### #8 — `plan-file-hygiene` Skill
**Status:** Open (PR #1479) | **Votes:** 0
- Addresses the accumulation of planning artifacts with no lifecycle management — a practical quality-of-life fix for long-running agent sessions.
- 🔗 [PR #1479](https://github.com/anthropics/skills/pull/1479)

---

## 2. Community Demand Trends

From the issues and proposals, four demand signals stand out:

| Trend | Evidence |
|---|---|
| **Skill quality & governance** | Issues #202, #412, #1385; PR #83 — community wants skills that enforce safety patterns, reasoning quality gates, and best-practice compliance, not just task-specific instructions. |
| **Testing & verification** | PR #723, PR #1367, Issue #1385 — strong appetite for skills that test, audit, and verify output before delivery. |
| **Document/format fidelity** | PR #514 (typography), PR #541 (DOCX tracked changes), Issue #12 (whitespace reformatting) — users are frustrated by subtle but destructive document corruption; skills need to handle OOXML edge cases correctly. |
| **Cross-user / organizational sharing** | Issue #228 (8 👍), Issue #492 (43 comments on namespace abuse) — users want secure, org-level skill distribution and clear official-vs-community boundaries. |

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and strong practical relevance; they are the most likely to land soon:

1. **`document-typography`** (PR #514) — Solves a universal pain point in document generation. Low-risk, high-coverage skill.
2. **`testing-patterns`** (PR #723) — First comprehensive testing skill; fills a clear gap in the skill library.
3. **`color-expert`** (PR #1302) — Self-contained color-knowledge skill (named systems, spaces, use-case guidance). Niche but well-scoped.
4. **`odt`** (PR #486) — OpenDocument format support (ODT/ODS/ODF) — extends coverage beyond the existing DOCX/PDF skills.
5. **`pyxel`** (PR #525) — Retro game-development skill powered by an MCP server; represents the emerging "skill + MCP server" pattern.
6. **`self-audit`** (PR #1367) — Meta-audit skill with mechanical + reasoning gates; directly addresses the quality-gate trend.
7. **`plan-file-hygiene`** (PR #1479) — Lifecycle management for agent planning artifacts; small but high-utility.

*Note: The five `skill-creator` fix PRs (#1298, #1099, #1050, #1323, #1261) are bug fixes rather than new skills, but resolving them is a prerequisite for the skill-creator pipeline to function correctly.*

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for skills that act as *quality gates* — testing, auditing, and verifying AI output before delivery — rather than skills that only perform a single task.** This signal appears across proposals (#412, #1385), open PRs (#83, #1367), and bug reports (the recall=0% crisis in #556), indicating users want Claude Code skills that *ensure correctness* as much as they want skills that *execute tasks*.

---



# Claude Code Community Digest — 2026-08-10

## 1. Today's Highlights

A wave of ClAudit false-positive reports flooded the tracker today, with 12+ issues from a single reporter (`sworrl`) documenting Opus 4.8 and Opus 5 safety-classifier halts on routine cybersecurity and sysadmin work. Separately, the highly anticipated feature to resume conversations across directories (#28745, 76 👍) remains open with growing community support, and a critical security bug involving denied tool calls being executed anyway (#83760) has surfaced.

---

## 2. Releases

No new releases in the past 24 hours.

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#67246](https://github.com/anthropics/claude-code/issues/67246) | Safety-classifier model switch (Fable 5 → Opus 4.8) fires on benign content, can't be overridden with `/model` | 12 | 3 | The safety classifier can silently promote a session to a more expensive model on normal engineering discussion, with no working override. Directly impacts cost predictability and session continuity. |
| [#28745](https://github.com/anthropics/claude-code/issues/28745) | Allow resuming conversations from different directories | 11 | 76 | Long-requested feature (open since Feb 2026). Conversations are currently locked to their originating directory, breaking workflows when worktrees are deleted or directories are moved. |
| [#85240](https://github.com/anthropics/claude-code/issues/85240) | Remote Control responses never render in browser until manual page refresh | 5 | 0 | Cross-platform bug (iPad Safari/Chrome, macOS Safari) where every Assistant response fails to render without a manual reload, making Remote Control unusable for many users. |
| [#62104](https://github.com/anthropics/claude-code/issues/62104) | Prevent archiving/deleting of pinned sessions in CCD | 5 | 1 | **Closed** — now both Archive and Delete are blocked for pinned sessions in the Desktop client. Community validation that this UX gap is resolved. |
| [#66084](https://github.com/anthropics/claude-code/issues/66084) | `tools/list_changed` doesn't refresh the deferred-tool / ToolSearch index in interactive sessions | 4 | 2 | MCP tools that change on disk are not picked up by the search index during a session, causing stale tool availability — a persistent pain point referenced since #4118 / #60626. |
| [#81658](https://github.com/anthropics/claude-code/issues/81658) | Cross-platform sync failure causing Cowork conversations and chats to disappear | 4 | 3 | Suspected server-side incident where Desktop, Web, and Android sessions fail to sync, with conversations vanishing across platforms. High-severity data-loss concern. |
| [#85008](https://github.com/anthropics/claude-code/issues/85008) | VSCode: forking copies the conversation but never attaches the new tab — blank chat | 2 | 0 | Fork action in the VS Code extension (2.1.226) creates a disconnected tab invisible in the session list. A recurrence of #31831, now triggered while idle. |
| [#81100](https://github.com/anthropics/claude-code/issues/81100) | Desktop 30-day retention sweep deletes transcripts, leaving unopenable ghost entries | 2 | 0 | The retention policy deletes Desktop transcript files but leaves orphaned session list entries that error on click — a data-loss and UX issue. |
| [#83760](https://github.com/anthropics/claude-code/issues/83760) | A denied tool call was executed anyway (PowerShell tool ran despite "deny") | 2 | 0 | **Critical security bug** — user denial of a tool call was ignored and the command still executed. Erodes trust in the permission enforcement layer. |
| [#84880](https://github.com/anthropics/claude-code/issues/84880) | Chrome `file_upload` rejects scheduled-task sessions on Windows | 2 | 1 | Regression of the previously-closed #63334. Windows users running Claude via scheduled tasks in Chrome cannot upload files, blocking automation workflows. |

---

## 4. Key PR Progress

| # | Title | Author | Status | Description |
|---|-------|--------|--------|-------------|
| [#85409](https://github.com/anthropics/claude-code/pull/85409) | `security-guidance`: update default model refs from Opus 4.7/Sonnet 4.6 to Opus 5/Sonnet 5 | petergoldstein | OPEN | Updates hardcoded model references in the `security-guidance` plugin README and `llm.py` hook code (`SECURITY_REVIEW_MODEL`, fallback/cheaper-model examples) to reflect the current Opus 5 and Sonnet 5 defaults. |
| [#85323](https://github.com/anthropics/claude-code/pull/85323) | `fix(plugin-dev)`: parse block scalar agent descriptions | erichanwang | OPEN | Fixes a YAML block-scalar parsing defect from #83803. `validate-agent.sh` now correctly measures multiline `description: \|` / `description: >` values from their indented content instead of treating the scalar marker as the full description. |
| [#85243](https://github.com/anthropics/claude-code/pull/85243) | `fix(skills)`: use spec-conformant names in the plugin-dev and hookify skills | bechor25 | OPEN | Corrects eight bundled skills that declared title-cased `name` fields containing spaces (e.g., `Writing Hookify Rules`, `Agent Development`), bringing them in line with the plugin spec. |
| [#17395](https://github.com/anthropics/claude-code/pull/17395) | [Plugin] Add `agent-session-commit` plugin to incrementally iterate on `AGENTS.md` | Olshansk | CLOSED | Added an `agent-session-commit` plugin that uses `AGENTS.md` as the authoritative project-instructions file (with `CLAUDE.md` as a pointer). Triggered manually via `/session-commit` or automatically by the Stop hook at session end. |

> **Note:** Only 4 PRs were active in the past 24 hours. No further PRs were available for this digest window.

---

## 5. Feature Request Trends

- **Cross-directory conversation resume** (#28745): The community strongly desires decoupling conversations from their originating filesystem path, especially for worktree-based and multi-project workflows.
- **Pinned-session protection** (#62104 — now closed): Users want irreversible actions (Archive/Delete) to require an explicit Unpin step, a pattern now implemented in CCD.
- **Remote Control real-time rendering**: Browser-based Remote Control sessions should push updates without requiring manual page refresh, particularly on mobile/Safari.
- **Tool-call permission enforcement**: The #83760 denied-call-executed bug has surfaced a broader demand for auditable, tamper-resistant permission boundaries — users want hard guarantees that a "deny" is final.
- **MCP tool-index refresh**: The recurring `tools/list_changed` staleness (#66084) points to a need for reliable, automatic MCP tool re-indexing without manual session restarts.

---

## 6. Developer Pain Points

1. **Safety-classifier false positives blocking work** — A single reporter filed 12+ issues in one day (#85375–#85392, plus #67246) where Opus 4.8/5 flagged routine cybersecurity, sysadmin, and IAM tasks as policy violations. The classifier halts sessions and offers no reliable override, creating significant friction for security and infrastructure teams.

2. **Data loss from retention sweeps** (#81100, #81658): The 30-day Desktop retention policy and cross-platform sync failures both result in lost conversation history and orphaned entries, undermining trust in session persistence.

3. **Session/directory coupling** (#28745, #85008): Tying conversations to a single directory and fragile fork behavior in VS Code create friction for developers who reorganize repos, use worktrees, or want to branch a chat context.

4. **MCP tool-index staleness** (#66084): Deferred tools and the ToolSearch index do not refresh after `list_changed`, forcing manual restarts — a recurring workflow interruption.

5. **Browser Remote Control reliability** (#85240): Response rendering failures on Safari/iPad and Chrome require manual refreshes, making the Remote Control feature unreliable for on-the-go or mobile development.

6. **Stale persisted state** (#85398): Credentials, permissions, and memory that persist across sessions can become stale, leading to unexpected behavior when credentials rotate or policies change.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-08-10

## 1. Today's Highlights
Community attention is split between stabilizing the Windows

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>



# Gemini CLI Community Digest — 2026-08-10

---

## 1. Today's Highlights

Gemini CLI v0.56.0-nightly shipped last night alongside a wave of 74 dependency bumps from Dependabot. The community's top concern remains **agent reliability** — three P1 issues around subagent hangs, recovery misreporting, and broken tool approvals are driving the most discussion. A significant PR landed that prevents a fresh chat from poisoning the session file on resume, addressing a core UX pain point.

---

## 2. Releases

**v0.56.0-nightly.20260809.gcf22ac7e8** — nightly build pushed August 9.
[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8)

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Subagents hitting their turn limit are falsely marked as successful, silently masking failures. | 12 comments · 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs | The generalist agent freezes indefinitely on simple tasks; disabling subagents is the only workaround. | 8 comments · 8 👍 (most upvoted) |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution stuck at "Waiting input" | Simple CLI commands hang after completion, leaving the prompt in a broken state. | 4 comments · 3 👍 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Sessions the extractor flags as low-signal are never marked processed, causing infinite re-evaluation. | 5 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction & reduced Auto Memory logging | Secrets may already be in model context before redaction; logging of skill contents is excessive. | 4 comments |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills/sub-agents proactively | Custom skills (e.g., Gradle, Git) are ignored unless explicitly requested — undermines the agent design. | 6 comments |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | Invalid Auto Memory inbox patches silently skipped | Malformed patches escape detection, polluting the inbox summary. | 3 comments |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | Agent errors out when the tool count exceeds a threshold; no smart scoping is applied. | 3 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Wayland users cannot use the browser agent at all — a platform compatibility gap. | 4 comments · 1 👍 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides | Configured `maxTurns` and other settings in `settings.json` are silently ignored by the browser agent. | 3 comments |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#28744](https://github.com/google-gemini/gemini-cli/pull/28744) | fix(acp): don't start a fresh chat before resuming | 🔵 Open | Prevents session file poisoning by removing an unnecessary `initialize()` call before `resumeChat()`. Closes #28693. |
| [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) | Allow agents to call agents | 🔵 Open | Enables subagents to delegate to other subagents or recurse via `tools:` frontmatter. Fixes #22092. |
| [#28743](https://github.com/google-gemini/gemini-cli/pull/28743) | fix(core): preserve resolved model config systemInstruction and tools | 🔵 Open | Fixes a bug where `GeminiChat.sendMessageStream()` overwrote model-specific `systemInstruction` and `tools` with chat-level defaults. |
| [#26540](https://github.com/google-gemini/gemini-cli/pull/26540) | fix(core): resolve policy engine bugs affecting tool approvals | 🔵 Open | P1 fix for tool approval persistence in `YOLO`/`AUTO_EDIT` modes; also fixes a regex null-byte issue in `buildParamArgsPattern`. |
| [#28742](https://github.com/google-gemini/gemini-cli/pull/28742) | fix(caretaker-agent): use spec-valid names for two triage-worker skills | 🔵 Open | Renames skills using underscores to spec-compliant kebab-case names. |
| [#28757](https://github.com/google-gemini/gemini-cli/pull/28757) | chore(deps): bump js-yaml 4.1.1 → 5.2.3 | 🟢 Closed | Security/stability update. |
| [#28749](https://github.com/google-gemini/gemini-cli/pull/28749) | chore(deps): bump @google/genai 1.30.0 → 2.15.0 | 🟢 Closed | Major SDK upgrade — significant API surface change. |
| [#28746](https://github.com/google-gemini/gemini-cli/pull/28746) | chore(deps): bump npm-dependencies (74 updates) | 🟢 Closed | Includes simple-git 3.28→3.36, MCP SDK 1.23→1.30, and many others. |
| [#28747](https://github.com/google-gemini/gemini-cli/pull/28747) | chore(deps): bump @a2a-js/sdk 0.3.11 → 1.0.1 | 🟢 Closed | A2A protocol SDK jumped to 1.0 — breaking changes likely. |
| [#28752](https://github.com/google-gemini/gemini-cli/pull/28752) | chore(deps): bump puppeteer-core 24.0.0 → 25.4.0 | 🟢 Closed | Browser automation dependency update. |

---

## 5. Feature Request Trends

- **Agent composition & recursion** — Users want subagents to be able to spawn other subagents (#28738, #20195) and for the main agent to discover and use skills/subagents autonomously (#21968).
- **AST-aware codebase understanding** — Two linked issues (#22745, #22746) explore whether AST-based file reads, searches, and mapping would reduce turn counts and improve code navigation accuracy.
- **Auto Memory reliability** — Multiple issues (#26522, #26523, #26516, #26525) converge on improving the memory extraction pipeline: better signal detection, deterministic redaction, and invalid patch handling.
- **Subagent observability** — #22598 and #21763 both request that subagent trajectories and context be accessible via `/chat share` and bug reports respectively.
- **Destructive operation guardrails** — #22672 calls for the agent to discourage or block dangerous commands (e.g., `git reset --force`) when safer alternatives exist.

---

## 6. Developer Pain Points

1. **Agent hangs and false success signals** — The #21409 (generalist hangs) and #22323 (MAX_TURNS reported as GOAL) issues indicate the agent's termination logic is unreliable, causing workflows to stall or appear successful when they've failed.
2. **Configuration silently ignored** — `settings.json` overrides (#22267), symlinked agent files (#20079), and policy engine bugs (#26540) all point to a recurring frustration: configuration that doesn't take effect.
3. **Shell interaction breaks** — Commands stuck at "Waiting input" (#25166), interactive prompts freezing the agent (#22465), and terminal corruption after external editors (#24935) suggest the terminal I/O layer needs stability work.
4. **Tool scale limits** — The 400-error threshold at >128 tools (#24246) means projects with many MCP servers or skills hit hard limits with no graceful degradation.
5. **Platform gaps** — Wayland browser agent failure (#21983) and external-editor buffer corruption (#24935) leave portions of the developer audience without working features.
6. **Secrets handling in Auto Memory** — Redaction happening after content enters model context (#26525) is a privacy concern that users are flagging seriously.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



# GitHub Copilot CLI Community Digest — 2026-08-10

## 1. Today's Highlights

A wave of new issues landed overnight, with a strong focus on MCP reliability, session management, and enterprise configuration bugs. Most notably, issue #4421 exposes a hard-coded 60-second MCP initialization budget that causes ~29% of npx-launched servers to fail and never recover, while #4419 reveals a fail-closed interim policy that silently drops user MCP servers during startup.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#4421](https://github.com/github/copilot-cli/issues/4421) | MCP initialize handshake: fixed 60s budget, no retry | npx-launched stdio servers fail ~29% of sessions and are never respawned. No config path to raise the budget. | Raised by `devinj-msft` — high-severity infra issue. |
| [#4419](https://github.com/github/copilot-cli/issues/4419) | Interim fail-closed policy drops user MCP servers | An empty allow list (`managedAllowedMcpServerLists: [[]]`) is installed during settings resolution, rejecting any MCP server that registers in that window — even on accounts with no managed policy. | Raised by `devinj-msft` — reproducibly impacts all MCP users. |
| [#4414](https://github.com/github/copilot-cli/issues/4414) | BYOK custom providers return local 403 before reaching provider | OpenAI- and Anthropic-compatible custom providers get a hard 403 with a misleading `/login` prompt; requests never leave the CLI. | Raises concern for BYOK/enterprise self-hosted setups. |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | MCP init fails on `server/discover` returning `-32602` | Copilot sends a `server/discover` request that FastMCP doesn't implement; the error-code response is treated as a fatal failure. | Blocks adoption of FastMCP-based servers. |
| [#4420](https://github.com/github/copilot-cli/issues/4420) | Parallel tool-calling loses request correlation | The harness can return parallel responses without the original request or a caller-defined ordering, confusing agent state. | Undermines reliability of multi-tool workflows. |
| [#4416](https://github.com/github/copilot-cli/issues/4416) | Parallel explore fan-out hits per-model 429s | All explore subagents default to `claude-haiku-4.5`, which has a tight burst limit; no backoff or auto-switch triggers despite `eligibleForAutoSwitch`. | Blocks large parallel task executions. |
| [#4422](https://github.com/github/copilot-cli/issues/4422) | All Claude models disabled under CLI selection | Personal Enterprise accounts can no longer select Claude Sonnet 5 / 4.8 even though they appear enabled in Copilot settings. | High impact — model lockout for Enterprise users. |
| [#4390](https://github.com/github/copilot-cli/issues/4390) | Org-enabled models missing from catalogue | Anthropic models (Sonnet 5, Opus 5) and Kimi K3 enabled at the organization level are invisible in the CLI model picker. | Organization admins report broken model availability. |
| [#1857](https://github.com/github/copilot-cli/issues/1857) | No way to cancel/remove enqueued messages | Messages queued via `Ctrl+Q` while the agent is busy cannot be removed, forcing users to wait through unwanted turns. | 26 👍 — strong community demand for queue control. |
| [#2751](https://github.com/github/copilot-cli/issues/2751) | `/remote` fails on org-owned repos | `Remote session disabled: could not resolve repository` on organization repos in v1.0.28. | 13 👍 — blocks remote-session workflows for org users. |

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

## 5. Feature Request Trends

- **MCP reliability & configurability** — The dominant trend: configurable initialization timeouts (#4421), graceful handling of missing methods (#4370), OAuth 3LO URL elicitation (#4371), and enterprise cross-origin auth fixes (#4408).
- **Session & queue control** — Users want the ability to cancel enqueued messages (#1857) and clearer remote-control status indicators (#4409).
- **Auto-mode configurability** — Two issues (#4411, #4412) request fine-grained controls over auto-mode model range, strength bias, and local wiring.
- **Non-GitHub repo support** — `/remote` should work with GitLab/Bitbucket, not just GitHub (#2922).
- **Localization & accessibility** — Request for Chinese (zh-CN) UI localization (#4407) and an enhanced floating prompt composer (#4417).
- **BYOK / custom provider support** — More robust handling of self-hosted OpenAI/Anthropic-compatible endpoints (#4414).

## 6. Developer Pain Points

1. **MCP bootstrapping is fragile.** A hard-coded 60s timeout with no retry (#4419, #4421) and brittle `server/discover` assumptions (#4370) cause repeated session failures, especially for npx-launched servers.
2. **Enterprise model catalogue desync.** Models enabled at the org level are silently missing from the CLI picker (#4390, #4422), creating confusion and lockout.
3. **BYOK providers return opaque 403s.** Custom providers are rejected locally before any request reaches the upstream, with misleading auth prompts (#4414).
4. **Parallel execution is unreliable.** Lost request correlation (#4420) and unhandled 429s on the explore default model (#4416) undermine confidence in multi-subagent workflows.
5. **Queue & session ergonomics.** No cancel for enqueued messages (#1857), no visibility into remote-control entitlement state (#4409), and `/remote` broken for org repos (#2751) and non-GitHub hosts (#2922).
6. **Plugin hooks not firing.** `sessionStart` hooks in `.github/hooks/` are silently ignored (#1730), breaking automation workflows.
7. **High CPU at idle.** The CLI consumes 100% of a CPU core even when waiting (#4415), suggesting a busy-loop or polling defect.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



**Kimi Code CLI Community Digest — 2026-08-10**

---

### 1. Today's Highlights
The community is pushing for a persistent **Memory System** to retain context across sessions, while a newly reported streaming hang in ACP mode highlights gaps in idle‑timeout handling for long‑running provider responses.

---

### 2. Releases
No releases in the last 24 hours.

---

### 3. Hot Issues
*(Only 2 issues updated in the last 24h are available; both are included below.)*

- **[Enhancement] Memory System – Persistent context across sessions**  
  Author: CatKang | Updated: 2026‑08‑09 | Comments: 27  
  📎 https://github.com/MoonshotAI/kimi-cli/issues/1283  
  **Why it matters:** A unified memory layer (auto‑managed AI notes + manual user‑defined instructions) would let Kimi Code CLI remember project patterns and preferences between runs, turning it from a stateless shell into a persistent development partner. The 27‑comment discussion shows strong community interest, though no thumbs‑ups yet—indicating the request is still being evaluated rather than urgently prioritized.

- **[Bug] ACP/print streaming response hangs silently**  
  Author: ai‑agent‑workbench | Created/Updated: 2026‑08‑09 | Comments: 0  
  📎 https://github.com/MoonshotAI/kimi-cli/issues/2598  
  **Why it matters:** In Kimi Code CLI 0.34.0 (ACP mode), the client can receive all content deltas but never sees the terminal `[DONE]`/finish frame, causing an indefinite silent hang. Because the CLI lacks an idle‑timeout configuration and newly sent prompts silently replace the stuck wheel, the partial response is never persisted to `wire.jsonl`. This breaks observability and forces manual process interruption, a critical pain point for anyone relying on long‑running streaming sessions.

---

### 4. Key PR Progress
- **fix(kosong): strip JSON Schema metadata from Google GenAI tool parameters**  
  Author: xiaoju111a | Updated: 2026‑08‑09  
  📎 https://github.com/MoonshotAI/kimi-cli/pull/739  
  **Summary:** Resolves #734 by removing standard JSON Schema metadata fields that cause validation errors when MCP tools (e.g., Exa MCP) are used with the Google GenAI provider. The fix improves cross‑provider compatibility without altering the tool’s functional schema.

---

### 5. Feature Request Trends
- **Persistent context & memory** – Users repeatedly request a system that retains project‑specific knowledge, patterns, and preferences across CLI sessions, suggesting a shift toward stateful, personalized agent workflows.

---

### 6. Developer Pain Points
- **Streaming‑response reliability** – The ACP hang issue reveals a lack of idle‑timeout controls and incomplete wire persistence, leaving developers unable to gracefully recover from stalled provider connections.
- **Cross‑provider schema compatibility** – JSON Schema metadata from MCP tools can break provider‑specific validation, indicating a need for cleaner normalization layers when plugging third‑party tools into different AI back‑ends.

---

*Digest generated from GitHub data for the `MoonshotAI/kimi-cli` repository, covering updates from 2026‑08‑09 to 2026‑08‑10.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



# OpenCode Community Digest — 2026-08-10

## 1. Today's Highlights

OpenCode developers are actively engaged in two major fronts: resolving a long-standing clipboard-copy regression (122 comments on #4283) and pushing V2 architecture improvements through the dev-to-v2 merge (#41460). A cluster of OpenCode Go / deepseek-v4-flash billing and relay bugs surfaced this week, all now closed but indicative of growing pains around the paid tier.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Comments | Why It Matters |
|---|-------|----------|----------------|
| [#4283](https://github.com/anomalyco/opencode/issues/4283) | Copy To Clipboard is not working | 122 👍110 | The most upvoted open issue — a core UX regression that blocks a basic workflow. Open since Nov 2025 with no fix. |
| [#7602](https://github.com/anomalyco/opencode/issues/7602) | Native Model Fallback / Failover Support | 29 👍107 | Long-requested feature for autonomous agents that need automatic retry across models (e.g. model A → model B on rate-limit). Critical for production reliability. |
| [#785](https://github.com/anomalyco/opencode/issues/785) | Is there a way to disable streaming mode? | 29 👍38 | Users of proxy providers that don't support streaming (e.g. Credal OpenAI Proxy) are blocked. No native non-streaming path exists. |
| [#12472](https://github.com/anomalyco/opencode/issues/12472) | Native Claude Code hooks compatibility | 17 👍38 | Brings `PreToolUse`, `PostToolUse`, `Stop` hooks into OpenCode parity with Claude Code — highly desired by Claude Code migrants. |
| [#13715](https://github.com/anomalyco/opencode/issues/13715) | Permission asks from nested subagent sessions silently hang | 11 👍24 | Subagent chains can deadlock waiting for permissions that never render. Directly impacts complex multi-agent workflows. |
| [#34743](https://github.com/anomalyco/opencode/issues/34743) | ACP from Xcode 27 beta 2 uses default model ignoring config | 15 👍0 | Xcode 27 beta integration ignores `opencode.json` model settings — a blocking issue for Apple-dev workflows. |
| [#41300](https://github.com/anomalyco/opencode/issues/41300) | Leading space in model name for deepseek-v4-flash | 6 👍1 | OpenCode Go relay injects a leading space into the model string, causing upstream 400 errors. Now closed but highlights infra fragility. |
| [#41306](https://github.com/anomalyco/opencode/issues/41306) | deepseek-v4-flash still broken on Console Go after #41211 | 4 👍0 | Follow-up confirming the relay bug persisted even after an attempted fix. |
| [#41430](https://github.com/anomalyco/opencode/issues/41430) | Go payment processed but subscription inactive | 3 👍0 | Billing sync failure between Stripe and the Go plan dashboard — erodes trust in the paid tier. |
| [#41284](https://github.com/anomalyco/opencode/issues/41284) | TUI freezes on blank screen at startup | 2 👍1 | macOS M1 Max users report a hard freeze at launch with no error output, requiring force-kill. |

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#41460](https://github.com/anomalyco/opencode/pull/41460) | chore: merge dev into v2 | Open | Syncs applicable `dev` branch changes into V2, preserving the new App/Desktop/Core/TUI/SDK/server architecture with RTL and localization support. |
| [#40427](https://github.com/anomalyco/opencode/pull/40427) | some experimental perf improvements | Open | Renderer entry size dropped **75.5%** (7.45 MB → 1.82 MB) using an immutable partial DB snapshot and fixed 24-hour corpus window. |
| [#41350](https://github.com/anomalyco/opencode/pull/41350) | add animated BusyWave loading indicator | Open | Replaces the shimmering "Thinking" label with a persistent wave animation inspired by the TUI. |
| [#39358](https://github.com/anomalyco/opencode/pull/39358) | add durable session archival | Open | New first-class `session.archived` fact with idempotent behavior; separate from deletion to avoid interrupting active sessions. |
| [#41452](https://github.com/anomalyco/opencode/pull/41452) | align Copilot response continuation | Closed | Fixes stateless Copilot Response continuation to match the official VS Code Copilot client; persists final reasoning item ID. |
| [#40997](https://github.com/anomalyco/opencode/pull/40997) | replace integration prompts with forms | Open | Migrates GitHub Copilot, Azure, and Cloudflare integrations to shared `Form.Fields` definitions with server-side validation. |
| [#41450](https://github.com/anomalyco/opencode/pull/41450) | derive fallback message for empty AI SDK provider errors | Open | AI SDK errors with empty `message` fields now surface structured details (`statusCode`, `responseBody`) in the TUI instead of a blank error. |
| [#41455](https://github.com/anomalyco/opencode/pull/41455) | include attachment path in model context | Open | Preserves local attachment `source.path` as text before the binary image, fixing providers that need the file path. |
| [#36046](https://github.com/anomalyco/opencode/pull/36046) | show permission prompts from nested subagent chains | Closed | Fixes the #13715 hang by ensuring permission requests from nested subagents are rendered in the TUI. |
| [#36023](https://github.com/anomalyco/opencode/pull/36023) | upgrade Bun to canary to fix NAPI crash on exit | Closed | Resolves a cross-platform NAPI crash on exit affecting Windows, macOS, and Linux x64. |

## 5. Feature Request Trends

- **Model reliability & fallback** — Automatic failover between models (#7602) and the ability to disable streaming (#785) are top priorities for production-grade agents.
- **Multi-window / multi-server workflow** — Request for parallel desktop windows (#14657) and persistent daemon sessions with memory recall (#41453) signal demand for power-user session management.
- **Claude Code compatibility** — Hooks support (#12472) and deeper `CLAUDE.md`/`skills/` alignment continue to be strong themes as the user base migrates.
- **UX polish** — Image attachment in question dialogs (#31791), code concealment defaults (#35093), and the `/clear` vs `/new` command convention (#38392) reflect ongoing quality-of-life refinement.
- **Local-first / self-hosted workflows** — Ollama reasoning field support (#36068) and LM Studio guidance expansion (#36139) show growing interest in local model integration.

## 6. Developer Pain Points

1. **Clipboard / copy-paste regressions** — The #4283 issue (122 comments) and the VS Code extension paste failure on Mac (#39588) point to a persistent input-output reliability gap, especially on macOS.
2. **OpenCode Go / relay bugs** — A cascade of issues (#41300, #41306, #41322, #39838) around deepseek-v4-flash model name handling and billing sync failures (#41430) has shaken confidence in the Go tier's infrastructure stability.
3. **Subagent and permission flow bugs** — Nested subagent permission hangs (#13715) and TUI startup freezes (#41284) suggest the async session tree is a fragile area requiring more robust error handling.
4. **Streaming-only design** — Users without streaming-capable proxies are effectively locked out (#785), indicating the architecture assumes a streaming-first pipeline with insufficient fallback paths.
5. **Configuration not propagating** — Model overrides in `opencode.json` are ignored by the Xcode ACP agent (#34743), and reasoning options are dropped for custom AI SDK providers (#27361, #41294), reflecting inconsistent config resolution across codepaths.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>



# Pi Community Digest — 2026-08-10

## 1. Today's Highlights

A significant batch of issues landed in a single day, with the most consequential fixes targeting the llama.cpp model initialization race (#6948 → #7072), the TUI renderer hard-crash on wide output (#7868), and the GitHub Copilot 429 login failure for orgs with many models (#7850 → #7851/#7844). Additionally, a new remote session wire protocol (#7344) was merged, expanding Pi's extensibility surface.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#6922](https://github.com/earendil-works/pi/issues/6922) | Default model cannot be a llama.cpp model: startup shows "No models available" | Blocks the most common local-AI setup; users report a hard stop at launch with no workaround. | 10 comments · 14 👍 — highest engagement of any closed issue this period. |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | High CPU usage on Mac OS with long session | Long-running Pi sessions can consume 50–110% CPU and 600–800 MB RAM, making extended agent work impractical on Mac. | 6 comments · 6 👍 — still open. |
| [#7616](https://github.com/earendil-works/pi/issues/7616) | Chat scroll jumps when tool blocks grow above the viewport | Differential renderer's safe-path full-screen redraw causes disruptive UX during agent runs with large tool output. | 3 comments — closed. |
| [#7868](https://github.com/earendil-works/pi/issues/7868) | Renderer hard-crashes when any rendered line exceeds terminal width | A single wide line aborts the entire agent session — kills real work. | 1 comment — closed. |
| [#7862](https://github.com/earendil-works/pi/issues/7862) | Concurrent RPC session replacements race runtime teardown | `handleInputLine()` spawns async tasks per JSONL frame; parallel `new_session`/`switch_session` can tear down the same runtime concurrently, causing silent session loss. | 2 comments — closed. |
| [#7850](https://github.com/earendil-works/pi/issues/7850) | GitHub Copilot login fails with 429 for orgs with many models | Organizations with 20+ available models exceed Copilot's rate limit during login, breaking access entirely. | 1 comment — closed via #7851/#7844. |
| [#7860](https://github.com/earendil-works/pi/issues/7860) | EPIPE crash when desktop host closes the stdout pipe | Desktop-hosted Pi deployments crash with an unhandled EPIPE after every turn, a regression from the unmerged PR #5183. | 1 comment — closed. |
| [#7846](https://github.com/earendil-works/pi/issues/7846) | Unable to start 0.84.0/0.84.1 with bun runtime | `zlib.createZstdDecompress is not a function` in undici blocks Bun users from running the latest Pi versions. | 1 comment — closed. |
| [#7848](https://github.com/earendil-works/pi/issues/7848) | Auto-compaction stops an active task instead of resuming it | Context-window compaction during tool execution causes Pi to halt and wait for user input rather than continuing the task. | 1 comment — closed. |
| [#7323](https://github.com/earendil-works/pi/issues/7323) | `pi update --models` fails the entire refresh on a transient catalog stall | A single stalled HTTPS request to `pi.dev` aborts the whole model catalog refresh; no retry logic exists for transient network hiccups. | 4 comments — closed. |

---

## 4. Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#7344](https://github.com/earendil-works/pi/pull/7344) | Add remote session wire protocol | Merges the transport-neutral `@earendil-works/pi-protocol` package with strict bounded CBOR encoding and incremental length-prefixed framing. Enables remote Pi sessions across network boundaries. |
| [#7872](https://github.com/earendil-works/pi/pull/7872) | Expose context files at session start | `AGENTS/CLAUDE` context files are now available on the `session_start` event, with extension-event documentation and focused test coverage. |
| [#7072](https://github.com/earendil-works/pi/pull/7072) | Cache llama.cpp model catalog | Fixes the race condition in #6948 where `defaultProvider`/`defaultModel` were not applied at startup due to async model refresh ordering. |
| [#7866](https://github.com/earendil-works/pi/pull/7866) | Add `copyOnSelect` option to TuiAltScreen | Allows disabling the automatic copy-to-clipboard on text selection in fullscreen TUI mode — directly addresses #7720. |
| [#7865](https://github.com/earendil-works/pi/pull/7865) | Handle `tui.select.pageUp`/`pageDown` | Adds Page Up / Page Down keybindings to the base `SelectList` component and the model selector, fixing a navigation gap. |
| [#7858](https://github.com/earendil-works/pi/pull/7858) | Route extension commands regardless of `expandPromptTemplates` | Fixes the bug where `pi.sendUserMessage()` (which defaults `expandPromptTemplates: false`) silently skips extension-command handling. |
| [#7856](https://github.com/earendil-works/pi/pull/7856) | Repair JSON-serialized structured tool arguments | Fixes two validation defects in `packages/ai/src/utils/validation.ts`: object-typed params now no longer hard-fail, and double-serialized nested tool args are correctly deserialized before being passed to providers. |
| [#7851](https://github.com/earendil-works/pi/pull/7851) | Enable GitHub Copilot model policies sequentially | Sequentializes policy-enabling requests after device auth, eliminating the HTTP 429 that broke org logins with 20+ models. |
| [#7844](https://github.com/earendil-works/pi/pull/7844) | Prevent bulk policy updates during login | Complements #7851 by removing the bulk model-enabling step from login entirely; models can still be enabled via Copilot Chat. |
| [#7840](https://github.com/earendil-works/pi/pull/7840) | Docs: Add Aliyun Model Studio CLI | Documents `bailian-cli` as a related tool in the README. |

---

## 5. Feature Request Trends

- **Configurable per-model thinking-level persistence** (#7871) — users want independent thinking-level settings per model rather than a single global value that carries across model switches.
- **Cross-session memory & advanced agent capabilities** (#7845) — a proposal to port four "A-level" capabilities from oh-my-pi (stream rules, subagent tools, advisor, cross-session memory) reflects strong community appetite for more sophisticated multi-session agent orchestration.
- **Chinese-market provider support** (#7847) — request to add `qwen-token-plan-individual-cn` as a built-in provider, highlighting ongoing demand for China-region AI service integration.
- **TUI ergonomics** (#7720, #7852) — repeated requests for configurable clipboard behavior on text selection and mouse-click navigation in the input textarea point to growing full-time TUI power users.
- **Remote session architecture** (#7344) — the merged wire-protocol PR signals a strategic shift toward network-transparent Pi sessions, opening the door for distributed agent workflows.

---

## 6. Developer Pain Points

1. **Race conditions in async startup & session management** — Multiple issues (#6922, #6948, #7862) expose fragile async ordering around model loading and session lifecycle. The fix (#7072) caches the llama.cpp catalog, but the broader pattern of "startup state not ready when first request arrives" warrants systemic attention.

2. **TUI renderer instability under load** — The renderer hard-crashes on wide output (#7868), scroll-jumps during tool execution (#7616, #7495, #7861), and loses custom tool rendering state after `/reload` (#7740). The differential renderer's fallback-to-full-erase path is a known fragility; these three bugs collectively suggest the rendering pipeline needs a more robust fallback strategy.

3. **Extension API contract gaps** — `sendUserMessage()` silently bypassing extension commands (#7859 → #7858), and extension timeouts that ignore `SIGTERM`-ignoring children (#7864) reveal that the extension host API has unguarded async paths. The documented pattern in `extensions.md` proved broken.

4. **Provider reliability at scale** — The AI21 API retirement (410) caught users unprepared (#7869), the OpenRouter catalog overlay silently overrode the correct context window for z-ai/glm-5.2 (#7870), and GitHub Copilot's rate limit broke org logins (#7850). Provider-side changes that Pi cannot detect or adapt to are a recurring pain point.

5. **Bun runtime compatibility** — The `zlib.createZstdDecompress` failure (#7846) indicates that undici's dependency on Node 22+ zstd APIs creates a hard break for Bun users, who represent a non-trivial portion of the developer audience.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



# Qwen Code Community Digest — 2026-08-10

## 1. Today's Highlights

Qwen Code v0.21.8-nightly was released with **Qoder plugin extension support** (#8661), marking a step toward a richer extension ecosystem. Meanwhile, the community is actively shaping the future of multi-session coordination (#8718) and unifying session reasoning loops across all runtime surfaces (#8775). Several CI flake fixes and test hardening PRs landed to stabilize the autofix pipeline.

---

## 2. Releases

**v0.21.8-nightly.20260810.55e20db328** — [Release](https://github.com/QwenLM/qwen-code/releases)

Key changes in this nightly:
- **feat(core): support Qoder plugin extensions** (#8661) — enables third-party plugin integration for the Qoder ecosystem.
- **feat(ci): auto-assign issues to area owners** — improves issue triage workflow.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#8718](https://github.com/QwenLM/qwen-code/issues/8718) | RFC: Native coordination for independent Qwen sessions | Proposes a leader-workers pattern for multi-session orchestration — a foundational step toward true multi-agent workflows. (8 comments, updated today) |
| [#8775](https://github.com/QwenLM/qwen-code/issues/8775) | Proposal: unify session reasoning loops on a Turn-based SessionRuntime | All surfaces (TUI, headless, ACP, serve, AgentCore) reimplement the reasoning loop independently. Unification would cut duplication and ensure consistent behavior. (2 comments) |
| [#8784](https://github.com/QwenLM/qwen-code/issues/8784) | Streamable HTTP MCP: optional GET/SSE rejection kills the whole connection | A server rejecting the optional SSE probe breaks the entire MCP session — a robustness gap with real production impact. (5 comments) |
| [#8659](https://github.com/QwenLM/qwen-code/issues/8659) | TUI flickering / screen tearing in web-based terminals | Virtualized history mode causes visible tearing in Alibaba Cloud Workbench and other web terminals — a UX degradation for cloud users. (4 comments, updated today) |
| [#8822](https://github.com/QwenLM/qwen-code/issues/8822) | Main CI failed: monitor test | E2E test `cli/monitor.test.ts` is flaky; auto-triaged for agent fix. Highlights ongoing CI reliability concerns. (4 comments) |
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | Proposal: Direct External Context Provider profile | Enterprise-focused: a private monorepo integration with on-demand and Auto Recall profiles for shared repo context. (12 comments) |
| [#7449](https://github.com/QwenLM/qwen-code/issues/7449) | Proposal: enterprise external-memory integration profile | Provider-neutral memory profile for enterprise deployments; builds on #7585 feedback with incremental compatibility tests. (7 comments) |
| [#7118](https://github.com/QwenLM/qwen-code/issues/7118) | Windows installer fails when `Get-FileHash` is unavailable | SHA-256 verification breaks on restricted Windows environments. 3 👍 — clearly resonates with Windows users. |
| [#8615](https://github.com/QwenLM/qwen-code/issues/8615) | [CLOSED] Desktop crashes on startup on Windows (EISDIR) | Bundled Node runtime crashes when opening a workspace on Windows 11. Fixed but illustrative of Desktop install path fragility. |
| [#8823](https://github.com/QwenLM/qwen-code/issues/8823) | Bug: unrecognized diagnostics mutate and evict transcript state | Daemon events that the renderer doesn't recognize corrupt the shared transcript — a correctness bug in the Web Shell path. (3 comments) |

---

## 4. Key PR Progress

| # | Title | Author | Summary |
|---|-------|--------|---------|
| [#8804](https://github.com/QwenLM/qwen-code/pull/8804) | feat(cli): add native multi-agent coordination | yiliang114 | Adds `/coordinate <goal>` on top of the existing Agent Team runtime — leader dispatches independent workers and collects structured results without adding a new session manager. |
| [#8818](https://github.com/QwenLM/qwen-code/pull/8818) | fix(core): catch content-only thinking-tag leaks | yiliang114 | Extends the `<think>` leak defense to all OpenAI-compatible providers, closing two bypass paths. Fallback is now default provider behavior. |
| [#8732](https://github.com/QwenLM/qwen-code/pull/8732) | feat(cli): adopt Goal v3 in ACP sessions | qqqys | Replaces ACP/Web Shell legacy `/goal` Stop-hook with the canonical Goal v3 runtime — unified create/status/edit/pause/resume/replace/clear across all session types. |
| [#8740](https://github.com/QwenLM/qwen-code/pull/8740) | feat(serve): share one Chrome bridge across sessions | yiliang114 | Makes the daemon `/cdp` tunnel multi-client so non-daemon Qwen Code processes ride the same Chrome bridge, eliminating per-session re-dials. |
| [#8806](https://github.com/QwenLM/qwen-code/pull/8806) | fix(desktop): open Local Control on the active session | yiliang114 | QR-code Local Control now captures the active Desktop session instead of always opening a blank Web Shell. |
| [#8803](https://github.com/QwenLM/qwen-code/pull/8803) | fix(memory): recall relevant topics beyond scan cap | yiliang114 | Native memory recall now ranks the full parsed pool and sends up to 200 candidates with lexical/recent balance, going beyond the previous 200-document hard cap. |
| [#8816](https://github.com/QwenLM/qwen-code/pull/8816) | fix(ci): watchdog silent sandbox hangs and reap leaked containers | wenshao | Adds an idle watchdog (`QWEN_IDLE_TIMEOUT_MS`, default 20 min) to kill stalled autofix agents and recover leaked containers. |
| [#8810](https://github.com/QwenLM/qwen-code/pull/8810) | perf(ci): make triage budget operator-tunable and raise it | wenshao | Triaging jobs now use `QWEN_TRIAGE_TIMEOUT_MINUTES` (fallback 60 min) via repo variables — no PR needed to adjust. |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | feat(auth): add Kimi and Xiaomi MiMo providers | DragonnZhang | First-class presets for Kimi (Coding Plan + API Key China/Intl) and Xiaomi MiMo (pay-as-you-go + regional keys) in `/auth`. |
| [#8403](https://github.com/QwenLM/qwen-code/pull/8403) | feat(audit): add legacy code audit workflow | wenshao | Adds `/audit <directory> [--effort low|medium|high]` for auditing existing modules without a diff or PR, with deterministic CLI helpers. |

---

## 5. Feature Request Trends

- **Multi-agent & session coordination** is the dominant theme — issues #8718, #8775, and PRs #8804, #8732 all point toward unifying how multiple sessions and agents communicate, share state, and orchestrate work.
- **Enterprise integration profiles** (#7585, #7449) reflect growing demand for provider-neutral, policy-bound memory and context layers tailored for monorepo and team deployments.
- **Local Control / mobile access** (#8595, now realized in #8806) shows continued interest in extending Qwen Code beyond the desktop terminal to phones and remote access.
- **Extensibility via plugins** — Qoder plugin support (#8661) in the latest nightly signals an expanding ecosystem strategy beyond built-in tools.

---

## 6. Developer Pain Points

- **CI flakiness and resource leaks** — Repeated E2E test failures (#8822, #8799, #8766) and silent sandbox hangs are consuming autofix budget. The team is responding with watchdogs (#8816) and tunable timeouts (#8810), but reliability remains a concern.
- **Windows installation fragility** — Issues #7118 and #8615 both highlight that the Windows standalone installer path is error-prone (missing PowerShell cmdlets, bundled runtime crashes), pushing users toward the npm fallback.
- **TUI rendering in web terminals** — Issue #8659 shows that virtualized history rendering breaks in constrained environments like Alibaba Cloud Workbench, affecting a segment of cloud-first users.
- **MCP protocol robustness** — Issue #8784 reveals that optional MCP spec features (SSE probe) being rejected by servers can tear down entire connections, suggesting a need for more graceful fallback handling.
- **Transcript state corruption** — Issue #8823 and PR #8812 expose a subtle bug where unrecognized daemon events leak into conversation transcripts, degrading the Web Shell user experience.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



# DeepSeek TUI Community Digest — 2026-08-10

## 1. Today's Highlights

The v0.9.6 subtractive runtime release was prepared, refactoring compaction around a single provider summary with committed successor handoff while removing harness-created obstruction. The community is actively debating the Chinese translation of "Constitution" and reporting a cluster of context compaction, provider-switching, and config-resolution bugs that point to growing pains as the model fleet expands.

---

## 2. Releases

**v0.9.6 — Subtractive runtime release** ([#5313](https://github.com/Hmbown/CodeWhale/pull/5313))

Removes harness-created obstruction while preserving explicit budgets, deadlines, cancellation, and truthful provider state. Compaction is rebuilt around one provider summary plus a committed successor handoff, eliminating mailbox freeze paths. Additional release-bundle fixes ([#5308](https://github.com/Hmbown/CodeWhale/pull/5308)) ensure mirror mode receives raw asset bytes via the canonical CNB download path.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|---------------|
| [#3205](https://github.com/Hmbown/CodeWhale/issues/3205) | Fleet model classes & loadout auto | Centralizes the shared model/loadout selector across TUI, CLI, exec, subagents, and Fleet workers — a foundational unblock for v0.9.3. **Closed.** |
| [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) | CLI/TUI parity for subagent controls | Ensures subagent status, expand/collapse, and cancellation surfaces are not trapped inside the TUI, enabling future cloud/remote apps. **Closed.** |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | Chinese translation of "Constitution" | Community debate over whether to use 宪法 vs. 协作准则 — touches on terminology precision and cultural sensitivity. **Open.** |
| [#576](https://github.com/Hmbown/CodeWhale/issues/576) | Improve Fork UX | Fork currently requires exiting TUI, running a CLI command, and copying a session ID — a fragmented workflow users want native TUI support for. **Closed.** |
| [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) | Switching providers retains unrelated default model | Provider/model resolution is not atomic — switching to OpenAI can leave `gpt-5.5` inherited from a different route. Active bug, 4 comments. **Open.** |
| [#5096](https://github.com/Hmbown/CodeWhale/issues/5096) | Compaction gain not visible | Token counter (e.g., 37K/128K) doesn't reflect actual compaction state, confusing users on local endpoints. **Open.** |
| [#5293](https://github.com/Hmbown/CodeWhale/issues/5293) | Deny-by-default approval selection configurable | v0.9.4 changed the default highlighted option in permission dialogs, causing accidental denials; 1 👍 and active discussion. **Open.** |
| [#5270](https://github.com/Hmbown/CodeWhale/issues/5270) | Unified tasks surface (v0.9.5) | Operator-facing list unifying shell, subagent, Fleet, and workflow runs — addresses fragmented background-work visibility. **Open.** |
| [#4394](https://github.com/Hmbown/CodeWhale/issues/4394) | Compaction survival contract | Proposes a structured guarantee for what compaction preserves (intent, decisions, evidence, tool continuity) rather than heuristic best-effort. **Open.** |
| [#5209](https://github.com/Hmbown/CodeWhale/issues/5209) | File edit silently accepts wrong params | `new_str` accepted instead of `replace`, returning fake success and forcing 3–5× re-edits per location — a reliability killer. **Open.** |

---

## 4. Key PR Progress

| # | Title | Status |
|---|-------|--------|
| [#5313](https://github.com/Hmbown/CodeWhale/pull/5313) | chore(release): prepare v0.9.6 | ✅ Closed |
| [#5308](https://github.com/Hmbown/CodeWhale/pull/5308) | fix(release): use CNB asset download URLs | ✅ Closed |
| [#5306](https://github.com/Hmbown/CodeWhale/pull/5306) | fix(release): validate crate publication order | ✅ Closed |
| [#5295](https://github.com/Hmbown/CodeWhale/pull/5295) | feat: add Mistral AI as first-class provider | ✅ Closed — author @xavierpestel-ai; defaults to `mistral-code-latest`. |
| [#5281](https://github.com/Hmbown/CodeWhale/pull/5281) | build(deps): bump jsonschema 0.46.10 → 0.49.6 | 🔄 Open — Dependabot. |

---

## 5. Feature Request Trends

- **Unified background-work visibility** — A single tasks panel that surfaces shells, subagents, Fleet workers, and workflow runs without switching contexts ([#5270](https://github.com/Hmbown/CodeWhale/issues/5270)).
- **Native TUI control surfaces** — Features currently locked to CLI (fork UX [#576](https://github.com/Hmbown/CodeWhale/issues/576), subagent cancellation [#4022](https://github.com/Hmbown/CodeWhale/issues/4022)) are being ported into the TUI sidebar as a first-class interactive layer.
- **Multi-provider key management** — Users juggling DeepSeek, GLM, and now Mistral want per-provider key storage instead of a single overwriteable secret [#5250](https://github.com/Hmbown/CodeWhale/issues/5250).
- **Compaction transparency** — Users want to *see* compaction take effect and understand what is preserved (survival contract [#4394](https://github.com/Hmbown/CodeWhale/issues/4394), gain visibility [#5096](https://github.com/Hmbown/CodeWhale/issues/5096), context window respect [#5239](https://github.com/Hmbown/CodeWhale/issues/5239)).
- **Multimodal / harness capabilities** — First-class screenshot viewing for agents [#5102](https://github.com/Hmbown/CodeWhale/issues/5102) signals demand for richer tooling beyond text.
- **Localization quality** — The "Constitution" translation debate [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) shows the community cares about semantic accuracy, not just literal translation.

---

## 6. Developer Pain Points

| Pain Point | Root Cause |
|---|---|
| **Silent failures masquerading as success** | `File` edit accepts wrong param names without error [#5209](https://github.com/Hmbown/CodeWhale/issues/5209); unknown model IDs silently fall back to 128K legacy context [#5244](https://github.com/Hmbown/CodeWhale/issues/5244). |
| **Context window confusion** | Models supporting 1M context still compact at 128K; users don't understand why or how to adjust it [#5239](https://github.com/Hmbown/CodeWhale/issues/5239), [#5134](https://github.com/Hmbown/CodeWhale/issues/5134). |
| **Provider/model state drift** | Switching providers leaves stale model defaults [#5034](https://github.com/Hmbown/CodeWhale/issues/5034); API keys persist only in the working repo instead of durable global storage [#5047](https://github.com/Hmbown/CodeWhale/issues/5047). |
| **Fleet config shadowing** | Edited agent TOML files are silently ignored due to a layering bug that resolves to the wrong config source [#5098](https://github.com/Hmbown/CodeWhale/issues/5098). |
| **UX regressions in permission dialogs** | Deny-by-default highlight change in v0.9.4 causes accidental denials, breaking established workflow [#5293](https://github.com/Hmbown/CodeWhale/issues/5293). |
| **IME instability on Windows** | Candidate window jumps during input, reported as a persistent usability bug [#5023](https://github.com/Hmbown/CodeWhale/issues/5023). |
| **Test flakiness under parallelism** | Verifier background tests and `/workspace`-sensitive fixtures flake; 12 tests remain `#[ignore]`-d [#5056](https://github.com/Hmbown/CodeWhale/issues/5056). |
| **Copy-paste leaks UI chrome** | Context-menu "Copy message" includes rail decorations (`● ▏`) instead of clean text [#5314](https://github.com/Hmbown/CodeWhale/issues/5314). |
| **Archival non-determinism** | Release bundles use hardcoded `2000-01-01` timestamps instead of `SOURCE_DATE_EPOCH`, breaking reproducibility [#5312](https://github.com/Hmbown/CodeWhale/issues/5312). |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*