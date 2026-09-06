# OpenClaw Ecosystem Digest 2026-09-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-09-06 21:50 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-09-07

**Data window:** last 24 hours, with updates through 2026-09-06.  
**Source:** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

## 1. Today's Overview

OpenClaw remained highly active, with 500 Issues updated in the last 24h (376 open/active, 124 closed) and 500 PRs updated (287 open, 213 merged/closed), while no new releases were reported. The visible top 50 comment-ranked Issues show a strong skew toward urgent stability work: 4 P0, 22 P1, 21 P2, and 3 P3 items. A major cluster of reports centers on update/rollback regressions, Gateway startup and Doctor recovery, cron scheduling, session-state durability, and channel message delivery. Several platform-specific blockers — especially Windows gateway start failures and macOS launchd restart loops — raise release-confidence concerns. Overall, the project shows strong development velocity and active triage, but stability risk is elevated due to the volume of P0/P1 issues and repeated regressions tied to recent releases.

## 2. Releases

- No new releases were reported in the data window.

## 3. Project Progress

The dataset reports **213 PRs as merged/closed** in the last 24h. Among the visible high-signal PR list, the following closed or recently updated PRs indicate meaningful progress in UI reliability, media handling, provider credentialing, plugin state, CI calibration, and channel delivery.

### Closed / merged-candidate PRs visible in the list

- [PR #140459](https://github.com/openclaw/openclaw/pull/140459) — `fix(ui): finish roster refreshes during session activity`.  
  Closed. Addresses Control UI sidebar refresh issues when an active session message arrives during a roster request.

- [PR #139231](https://github.com/openclaw/openclaw/pull/139231) — `fix(media): keep deferred audio and extraction providers discoverable`.  
  Closed. Helps keep audio transcription and structured-extraction providers available after other media plugins load.

- [PR #140461](https://github.com/openclaw/openclaw/pull/140461) — `fix(setup): match prepared credentials to the model provider`.  
  Closed. Improves setup-flow credential selection when multiple provider profiles exist.

- [PR #140438](https://github.com/openclaw/openclaw/pull/140438) — `fix: keep MiniMax discovery on the selected credential`.  
  Closed. Reduces risk that MiniMax model discovery uses the wrong stored OAuth profile.

- [PR #135057](https://github.com/openclaw/openclaw/pull/135057) — `fix(plugins): registry freshness when packageBuild lacks bundledDist`.  
  Closed. Fixes plugin registry reporting stale state when persisted records omit `packageBuild`.

- [PR #136235](https://github.com/openclaw/openclaw/pull/136235) — `ci: refresh measured test timings`.  
  Closed. CI maintenance to keep test shard weights aligned with recent measured timings.

- [PR #86901](https://github.com/openclaw/openclaw/pull/86901) — `fix(feishu): fall back to post mode when markdown tables exceed card limit`.  
  Closed in the visible list. Feishu delivery hardening for replies containing too many Markdown tables for interactive cards.

### High-impact in-flight PRs

- [PR #135599](https://github.com/openclaw/openclaw/pull/135599) — `feat: manage and reload plugins without restarting the Gateway`.  
  Large, multi-slice feature work for restartless plugin lifecycle. Marked ready for maintainer look.

- [PR #135868](https://github.com/openclaw/openclaw/pull/135868) — `feat(triage): start installation-owned recovery after update and startup failures`.  
  Large PR targeting post-update and managed startup recovery. Needs proof; directly relevant to several reported update regressions.

- [PR #137381](https://github.com/openclaw/openclaw/pull/137381) — `fix: sessions_yield keeps long transcript history available`.  
  Large session-state fix for long SQLite-backed sessions. Ready for maintainer look.

- [PR #135917](https://github.com/openclaw/openclaw/pull/135917) — `fix: recover sessions from invalid worktree bases`.  
  Session recovery for invalid `pendingWorktree` values. Currently waiting on author.

- [PR #139868](https://github.com/openclaw/openclaw/pull/139868) — `fix(tavily): allow a baseUrl override on a private or internal host`.  
  Provider configuration and security-boundary change for Tavily-compatible endpoints.

- [PR #140146](https://github.com/openclaw/openclaw/pull/140146) — `feat(extensions): add AIgateway provider plugin`.  
  New official provider plugin for an OpenAI-compatible model aggregator.

- [PR #133421](https://github.com/openclaw/openclaw/pull/133421) — `feat(line): let a LINE tap answer the question an agent asked`.  
  Channel UX improvement for LINE `ask_user` flows.

- [PR #137779](https://github.com/openclaw/openclaw/pull/137779) — `fix(agents): pass durable session key as visible-spawn parent lineage`.  
  Fixes Telegram-originated `sessions_spawn` failures. Ready for maintainer look.

**Net progress:** work advanced in plugin lifecycle, update recovery, session-state durability, media pipeline reliability, provider credential handling, and channel-specific UX. The largest forward-looking area is restartless plugin management and installation recovery.

## 4. Community Hot Topics

### Most active Issues by comments and reactions

| Item | Activity | Underlying need |
|---|---:|---|
| [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) — OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation and runtime degradation | 13 comments, 1 👍 | Process hygiene, long-running Gateway stability, resource cleanup |
| [Issue #135111](https://github.com/openclaw/openclaw/issues/135111) — Intermittent “Provider completed tool call with malformed JSON arguments” on v2026.8.1 | 13 comments | Provider robustness, tool-call serialization, regression isolation |
| [Issue #119720](https://github.com/openclaw/openclaw/issues/119720) — Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale | 12 comments | Non-blocking runtime, scalability, I/O offload |
| [Issue #96975](https://github.com/openclaw/openclaw/issues/96975) — Isolate subagent completion from parent context | 12 comments, 1 👍 | Multi-agent context control, token efficiency, session isolation |
| [Issue #132762](https://github.com/openclaw/openclaw/issues/132762) — overflow retry can end successfully on a tool result without final delivery | 12 comments | Message-delivery correctness, overflow-retry state machine |
| [Issue #113306](https://github.com/openclaw/openclaw/issues/113306) — SQLite snapshot restore lacks end-to-end crash and identity guarantees | 12 comments | Backup/restore durability, crash consistency |
| [Issue #53408](https://github.com/openclaw/openclaw/issues/53408) — Write/exec tool parameters silently dropped after long conversations | 12 comments, 2 👍 | Long-session reliability, tool-parameter integrity |
| [Issue #41201](https://github.com/openclaw/openclaw/issues/41201) — Control UI Avatar not displaying | 11 comments, 1 👍 | Identity/UX polish, asset loading |
| [Issue #95610](https://github.com/openclaw/openclaw/issues/95610) — Prompt-cache prefix churn on OpenAI models | 11 comments, 2 👍 | Cost optimization, prompt-cache stability |
| [Issue #48920](https://github.com/openclaw/openclaw/issues/48920) — Live Docs are ahead of release | 10 comments, 4 👍 | Docs/release alignment, user trust in documented behavior |

### High-signal PRs in the active window

PR comment counts were not populated in the provided data, so the following are the most high-signal updated PRs rather than a strict comment ranking.

- [PR #135599](https://github.com/openclaw/openclaw/pull/135599) — restartless plugin management and reload.
- [PR #137381](https://github.com/openclaw/openclaw/pull/137381) — long-session transcript history with `sessions_yield`.
- [PR #135868](https://github.com/openclaw/openclaw/pull/135868) — installation-owned recovery after update and startup failures.
- [PR #135917](https://github.com/openclaw/openclaw/pull/135917) — session recovery from invalid worktree bases.
- [PR #133421](https://github.com/openclaw/openclaw/pull/133421) — LINE tap-to-answer UX.
- [PR #140146](https://github.com/openclaw/openclaw/pull/140146) — AIgateway provider plugin.
- [PR #113366](https://github.com/openclaw/openclaw/pull/113366) — LINE carousel reply preservation.

**Analysis:** The community’s most active concerns are not primarily cosmetic. They cluster around durable operation: avoiding silent message loss, keeping the Gateway responsive, surviving updates, controlling multi-agent context, and reducing provider/model-path regressions.

## 5. Bugs & Stability

The top 50 comment-ranked Issues include **4 P0**, **22 P1**, **21 P2**, and **3 P3** items. The highest-severity items below were updated in the window.

### P0 blockers

| Severity | Item | Problem | Fix / PR status |
|---|---|---|---|
| P0 | [Issue #137813](https://github.com/openclaw/openclaw/issues/137813) — Windows gateway never starts after 2026.9.1 update | New `--task-supervisor` flag exits 0 silently; child process never spawns on Windows Scheduled Task setup. | No directly linked fix PR visible in the provided PR list. |
| P0 | [Issue #114967](https://github.com/openclaw/openclaw/issues/114967) — launchctl submit keepalive validator force-restarts gateway every ~2 minutes | Agent-driven live update left behind an ad-hoc launchd job whose validator unconditionally restarts the Gateway. | No directly linked fix PR visible in the provided PR list. |
| P0 | [Issue #136203](https://github.com/openclaw/openclaw/issues/136203) — Windows de-DE 2026.8.2 upgrade leaves Doctor maintenance blocked | Post-update recovery required manual intervention for Gateway, memory search, and ambient ownership. | No directly linked fix PR visible; [PR #135868](https://github.com/openclaw/openclaw/pull/135868) is a related update/startup recovery effort. |
| P0 | [Issue #48920](https://github.com/openclaw/openclaw/issues/48920) — Live Docs are ahead of release | Documented config/features are not available in the released version, causing user-side regressions and confusion. | No fix PR visible; this is a docs/release alignment blocker. |

### P1 watchlist, ranked by impact

| Severity | Item | Problem | Fix / PR status |
|---|---|---|---|
| P1 | [Issue #139847](https://github.com/openclaw/openclaw/issues/139847) — message sent while a reply run is active is dropped | Regression in 2026.9.2: inbound message fails with “Reply operation has no active tool authority snapshot”. Tagged `fix-shape-clear`, `queueable-fix`. | No directly linked fix PR visible. |
| P1 | [Issue #139215](https://github.com/openclaw/openclaw/issues/139215) — Cron scheduler silently swallows scheduled ticks since 2026.9.1 | Scheduled cron jobs intermittently fail to fire; next-run stamp advances without launch or error. | No directly linked fix PR visible; needs info. |
| P1 | [Issue #134579](https://github.com/openclaw/openclaw/issues/134579) — Active Memory `before_prompt_build` handler never dispatched | Automatic recall broken since 2026.8.1-beta.3 and still broken on 2026.8.1 stable. | No directly linked fix PR visible. |
| P1 | [Issue #119720](https://github.com/openclaw/openclaw/issues/119720) — Synchronous persistence/transcript maintenance blocks Gateway event loop | Long-running synchronous work can block the Gateway event loop at scale. Historical fixes in #133925 and #134062 do not fully close the issue. | Partially addressed by referenced fixes; issue remains open. |
| P1 | [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) — unreaped hook/tool child processes accumulate as zombies | Long-running process degradation from `openclaw-hooks`, `bash`, `codex`, and other child processes. | No directly linked fix PR visible. |
| P1 | [Issue #135111](https://github.com/openclaw/openclaw/issues/135111) — intermittent malformed JSON tool-call arguments on v2026.8.1 | Regression tied to provider/tool-call path, not a single file or tool. | Needs live repro; no directly linked fix PR visible. |
| P1 | [Issue #132762](https://github.com/openclaw/openclaw/issues/132762) — overflow retry can end successfully without final delivery | Retry ends `success` with only a tool result, no assistant response and no user-visible final delivery. Tagged `fix-shape-clear`, `queueable-fix`. | No directly linked fix PR visible. |
| P1 | [Issue #139578](https://github.com/openclaw/openclaw/issues/139578) — llama.cpp managed EmbeddingGemma runs at server-default ubatch 512 in 2026.9.2 | Possible regression from #134389 / commit `c97c5b65e08d`. | Needs live repro; no directly linked fix PR visible. |
| P1 | [Issue #132720](https://github.com/openclaw/openclaw/issues/132720) — claude-cli 410 `session_expired` on 2026.9.1-beta.1 with valid paste-token | Claude subscription path auth broke after upgrade; Doctor migrates primary off `claude-cli`. | No directly linked fix PR visible. |
| P1 | [Issue #134896](https://github.com/openclaw/openclaw/issues/134896) — 2026.8.1 update caused 5-blocker gateway restart cascade plus `doctor --fix` failure | Real-world update cascade required manual dist-source inspection. | [PR #135868](https://github.com/openclaw/openclaw/pull/135868) is a related recovery effort. |
| P1 | [Issue #128637](https://github.com/openclaw/openclaw/issues/128637) — multi-agent setup triggers `AgentSelectionRequiredError` | Ambient operations without explicit owner fail in explicit-ownership multi-agent deployments. | No directly linked fix PR visible. |
| P1 | [Issue #119454](https://github.com/openclaw/openclaw/issues/119454) — stuck-session recovery self-suppresses on leaked idle embedded run | Session lane wedges while recovery repeatedly logs `observe_only reason=active_embedded_run`. | No directly linked fix PR visible. |
| P1 | [Issue #54488](https://github.com/openclaw/openclaw/issues/54488) — session lane starvation blocks inbound dispatch for 20–30 minutes | Followup drain monopolizes the session lane, delaying Discord/WhatsApp inbound messages. | No directly linked fix PR visible. |
| P1 | [Issue #101929](https://github.com/openclaw/openclaw/issues/101929) — context-overflow estimator over-counts 2.3–2.6× vs billed usage | Tool-result-heavy turns trigger truncation recovery too early. | No directly linked fix PR visible. |
| P1 | [

---

## Cross-Ecosystem Comparison



---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Project Digest: NanoBot - 2026-09-07

## Today's Overview
Nanobot is in a stable state, with 18 updates and 1 new release. The latest update introduces new agent models, MCP schemas, and more.

## Releases
New release: 5670 [CLI/test, priority: p2] - Covers regressions in heartbeat and session management.

## Project Progress
Merged/closed PRs today:
- #5679 [CLI/test, priority: p2] - fix(tui): show context window usage in footer.
- #5678 [CLI/test, priority: p2] - cover redirected pinned-docs.
- #5676 [feat(cli), open] - add attach-only Desktop target selection.
- #5388 [CLI/test, priority: p2] - fix(skills): allow marketplace skills to shadow builtins.
- #5386 [feat(mcp)] - preserve MCP Apps result metadata.
- #5386 [feat(mcp)] - allow preempted heartbeat execution in separate jobs.
- #5457 [feat(channel), open] - fix(channels): scope dispatcher exception boundary to message processing.
- #5530 [bug, fix, test, security, priority: p2] - fix(session): move persistence off event loop.
- #5520 [documentation, enhancement, provider, feature, test, priority: p2] - feat(provider): langfuse tracing for codex.
- #5675 [bug, provider, regression, fix, test, priority: p2] - fix(providers): allow model failover after runner deadlines.
- #5652 [documentation, feature, test, security, priority: p2, conflict] - feat(gateway): add signed direct delivery webhook.
- #5633 [bug, fix, test, security, priority: p2, conflict] - fix(session): reject session keys with path traversal components.
- #5561 [conflict] - feat(spawn): per-spawn model presets behind a spawnPresets allowlist.
- #5504 [bug, channel, webui, fix, test, priority: p2] - fix(ui): surface model retry status (NAN-34).
- #5457 [bug, channel, fix, test, priority: p2, conflict] - fix(channels): scope dispatcher exception boundary to message processing.

## Community Hot Topics
Most active Issues/PRs with most comments/reactions are #5670 [CLI/test], #5679 [CLI/test], and #5561 [conflict]. These issues revolve around heartbeat and session management.

## Bugs & Stability
- bug(s): 17 reported today, ranked by severity. Note that the first two issues have been fixed in PR #5679.
- Stability: All known bugs were addressed in the latest PRs.

## Feature Requests & Roadmap Signals
- User-requested features: None.
- Predictions for next version: Focus on improving performance and adding new features like better UI/UX and support for new languages and platforms.

## User Feedback Summary
Real user pain points include the lack of a dedicated chat interface and the need for better privacy settings. Use cases include collaboration and communication within teams.

## Backlog Watch
Long-unanswered important Issues or PRs needing maintainer attention include #5457 [bug, provider, regression, fix, test, priority: p2], which has not had a fix PR yet.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-09-07

## 1. Today's Overview

PicoClaw shows low but steady daily activity with 4 issues and 2 PRs updated in the last 24 hours. The project is actively receiving community contributions, including a completed enhancement to QQ Channel attachment support and an ongoing i18n effort for Czech localization. No new releases were published, and the overall health signal is neutral-to-positive: the backlog contains several open feature requests and two user-reported bugs that remain unanswered, suggesting the maintainer team is bandwidth-constrained.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

- **PR #1349** (CLOSED) — Added support for parsing and replying to a broader set of QQ Channel attachment types (voice, image, video, files), including emoji structure parsing and Markdown-fallback reply logic. This advances the QQ Channel provider's media-handling capabilities.
- **PR #3348** (OPEN, stale) — Completes Czech (cs) i18n label wrapping. Not yet merged; awaiting maintainer review.

## 4. Community Hot Topics

- **Issue #675** — *Add more LLM Provider Support* (7 comments, open since 2026-02-23)
  https://github.com/sipeed/picoclaw/issues/675
  Users continue to request support for additional LLM backends beyond the current provider lineup. The long open duration and comment count signal sustained demand.

- **Issue #3351** — *Auto-compression physically deletes session history, causing permanent data loss* (1 comment, open, stale)
  https://github.com/sipeed/picoclaw/issues/3351
  A user-reported bug where `JSONLStore`'s `rewriteJSONL` overwrites the session file instead of preserving raw history, making recovered chat impossible after compression. This touches core data-integrity concerns.

- **Issue #3350** — *Web UI input box severely lags on embedded/low-performance devices* (1 comment, open, stale)
  https://github.com/sipeed/picoclaw/issues/3350
  Typing latency on devices like RV1106/RISC-V boards worsens with conversation length, suggesting a frontend performance regression or unbounded re-render on history growth.

- **Issue #3369** — *Add OpenCode Go session header support* (0 comments, open)
  https://github.com/sipeed/picoclaw/issues/3369
  Feature request to expose the existing session ID as an `x-opencode-session` header for OpenCode Go provider compatibility.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | Session history permanently deleted by `rewriteJSONL` during auto-compression — data loss | None |
| **Medium** | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | Web UI input lag on low-performance embedded hardware, scaling with conversation length | None |

Both issues are marked stale, indicating they have not yet received a response from maintainers.

## 6. Feature Requests & Roadmap Signals

- **Additional LLM Providers** (#675) — Consistent community demand; likely candidate for a future provider-pluggability roadmap item.
- **OpenCode Go Session Header** (#3369) — Narrow, well-scoped request for OpenCode Go compatibility; could be delivered as a small enhancement.
- **QQ Channel Attachment Expansion** (#1349, merged) — Already delivered; signals the QQ Channel provider is a priority area for community contributions.

## 7. User Feedback Summary

Users are reporting real pain points around **data permanence** and **embedded-device usability**. The session-history-loss bug (#3351) is the most emotionally charged feedback — users rely on PicoClaw for long-running conversations and are dissatisfied that "compressed" sessions erase their raw records. The input-lag issue (#3350) highlights a gap in the project's target hardware support: while PicoClaw markets itself for edge/embedded deployment, the Web UI does not yet perform acceptably on low-CPU hardware. On the positive side, the QQ Channel enhancement shows the project is responsive to contributor-driven feature work in the messaging-channel domain.

## 8. Backlog Watch

- **#675** (open since 2026-02-23, 7 comments) — Long-standing LLM provider expansion request; high community interest.
- **#3351** (open since 2026-08-30, stale) — Data-loss bug with no assigned fix; requires maintainer triage.
- **#3350** (open since 2026-08-30, stale) — Performance bug on embedded devices; no fix in progress.
- **#3348** (open since 2026-08-29, stale) — Czech i18n PR awaiting merge review.

These items have been open or stale for an extended period without maintainer acknowledgment, warranting attention to prevent contributor attrition.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-09-07

## 1. Today's Overview

NanoClaw is in an active refactoring phase focused on hardening the provider contract system, with 7 PRs merged/closed and 9 still open over the last 24 hours. Two critical production bugs were reported today—both involving channel adapters (Slack session sharing and Telegram silent failures)—that could impact users running shared-session or long-polling deployments. No new release was published; the latest remains v2.3.0 (2026-08-24), and `main` is 119 commits ahead. Overall project health is **moderate**: strong contributor momentum on internals, but unaddressed channel stability issues warrant attention before the next release.

## 2. Releases

**No new releases today.** The current latest is **v2.3.0** (published 2026-08-24). `main` sits 119 commits ahead, indicating a substantial unshipped backlog concentrated around provider-contract refactors and new channel/skill features.

## 3. Project Progress

### Merged / Closed PRs (7)

| PR | Author | Summary |
|----|--------|---------|
| [#3586](https://github.com/nanocoai/nanoclaw/pull/3586) | zvi-fried | Declared the setup provider contract and install verifier |
| [#3592](https://github.com/nanocoai/nanoclaw/pull/3592) | zvi-fried | Added `speed` as a core-owned per-agent-group property |
| [#3727](https://github.com/nanocoai/nanoclaw/pull/3727) | zvi-fried | Rendered provider instructions from core-owned canon |
| [#3585](https://github.com/nanocoai/nanoclaw/pull/3585) | zvi-fried | Declared the host provider contract |
| [#3581](https://github.com/nanocoai/nanoclaw/pull/3581) | zvi-fried | Declared the runtime provider contract |
| [#3584](https://github.com/nanocoai/nanoclaw/pull/3584) | zvi-fried | Implemented the Codex provider contract |
| [#3591](https://github.com/nanocoai/nanoclaw/pull/3591) | zvi-fried | Rendered provider instructions from core-owned canon (duplicate track) |

**What advanced:** The provider-contract subsystem is being systematically declared, validated, and rendered by core—reducing vendor-specific imperative code and making it possible to verify that a provider actually implements what it claims. The `speed` property (PR #3592) gives groups a first-class inference-tier control alongside `model` and `effort`.

### Still Open PRs (9)

- [#3729](https://github.com/nanocoai/nanoclaw/pull/3729) — Browser-based host/community cell setup with WorkOS sign-in
- [#3588](https://github.com/nanocoai/nanoclaw/pull/3588) — OpenCode provider contract implementation
- [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) — Cursor Agent SDK provider payload
- [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) — Fix: `NO_PROXY` for `host.docker.internal`
- [#3464](https://github.com/nanocoai/nanoclaw/pull/3464) — Remove v1-only `session-commands.ts`
- [#3722](https://github.com/nanocoai/nanoclaw/pull/3722) — Adopt OpenCode contract in install skill
- [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) — `/add-cursor` install skill
- [#3726](https://github.com/nanocoai/nanoclaw/pull/3726) — Native Proton Mail adapter via Proton Mail Bridge
- [#3725](https://github.com/nanocoai/nanoclaw/pull/3725) — Pin Linux `signal-cli` to 0.14.7

## 4. Community Hot Topics

| Rank | Item | Activity | Link |
|------|------|----------|------|
| 1 | Provider contract refactors (6 merged PRs by zvi-fried) | Highest contributor velocity this cycle | [#3581](https://github.com/nanocoai/nanoclaw/pull/3581), [#3585](https://github.com/nanocoai/nanoclaw/pull/3585), [#3586](https://github.com/nanocoai/nanoclaw/pull/3586) |
| 2 | Cursor Agent SDK support | Feature request materializing into implementation | [#3356](https://github.com/nanocoai/nanoclaw/pull/3356), [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) |
| 3 | New channel: Proton Mail | First email-channel addition, addresses a clear gap | [#3726](https://github.com/nanocoai/nanoclaw/pull/3726) |
| 4 | Telegram silent death | Critical production bug, no fix PR yet | [#3728](https://github.com/nanocoai/nanoclaw/issues/3728) |
| 5 | Slack shared-session bug | Production bug affecting multi-tenant setups | [#3730](https://github.com/nanocoai/nanoclaw/issues/3730) |

**Underlying needs:** Users want (a) more IDE/provider integrations (Cursor, OpenCode), (b) email as a first-class channel, and (c) reliable long-running channel adapters. The refactoring effort signals a desire for a more stable, verifiable provider ecosystem rather than ad-hoc integrations.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|----------|-------|-------------|---------|------|
| 🔴 Critical | #3728 | Telegram inbound dies silently for days; polling loop retries forever with no timeout and no success log | No | [#3728](https://github.com/nanocoai/nanoclaw/issues/3728) |
| 🟠 High | #3730 | Slack with `session_mode: "shared"` still spawns a new per-thread session for every top-level DM | No | [#3730](https://github.com/nanocoai/nanoclaw/issues/3730) |
| 🟡 Medium | #3654 | `host.docker.internal` unreachable due to missing `NO_PROXY` | Yes, open PR | [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) |
| 🟡 Medium | #3725 | `signal-cli` 0.14.3 hangs forever when sending to contacts with no existing session | Yes, open PR | [#3725](https://github.com/nanocoai/nanoclaw/pull/3725) |

**Assessment:** Two unaddressed critical/high bugs in channel adapters, both reported today. The Telegram issue is especially concerning for production users relying on long-running inbound polling. No fix PRs exist yet—this is the top priority for maintainers.

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Release |
|--------|----------|----------------------------|
| Cursor Agent SDK integration | PR #3356 (implementation), PR #3355 (install skill) both open | **High** — code is ready, awaiting review |
| Proton Mail channel | PR #3726 open, fills a documented gap ("no way to email an agent") | **High** — solves a clear user need |
| Browser-based setup wizard | PR #3729 open — WorkOS sign-in, perk management in-browser | **Medium** — larger scope, may slip |
| `speed` inference tier | Merged in #3592 | **Already shipped** on `main` |
| OpenCode provider contract | PR #3588, #3722 open | **Medium** — depends on contract review cycle |
| Remove v1 session-commands | PR #3464 open (fixes #2603) | **Low** — cleanup, not user-facing |

**Prediction:** The next release (likely v2.4.0) will ship Cursor SDK support and Proton Mail. The browser setup wizard and remaining OpenCode work may follow in v2.5.0.

## 7. User Feedback Summary

| Pain Point | Source | Sentiment |
|------------|--------|-----------|
| Telegram adapter silently dies and never recovers | #3728 (ergut) | 😠 Frustrated — 4-day outage with no logs |
| Slack shared-session mode doesn't actually share | #3730 (bjsheppa) | 😠 Broken promise — verified code unchanged since v2.3.0 |
| `host.docker.internal` unreachable from inside containers | #3654 (tchopoorian) | 🙂 Fixed by PR, but points to a common Docker networking gotcha |
| Signal-cli hangs on first send to new contacts | #3725 (astraltrekkin) | 🙂 Pinned to 0.14.7 in PR #3725 |
| Desire for more provider integrations (Cursor, OpenCode) | Multiple PRs | 😊 Enthusiastic — community contributing implementations |
| Need for email as a channel | #3726 (drsmk238) | 😊 Positive — solving a clear gap |

**Overall:** Users are satisfied with the direction (more providers, better contracts) but frustrated by channel adapter reliability. The Telegram and Slack bugs are the most damaging to user trust right now.

## 8. Backlog Watch

| Item | Age | Risk | Link |
|------|-----|------|------|
| #3728 — Telegram silent death | Reported 2026-09-06, **0 days with no fix** | 🔴 High — production outage | [#3728](https://github.com/nanocoai/nanoclaw/issues/3728) |
| #3730 — Slack shared-session bug | Reported 2026-09-06, **0 days with no fix** | 🟠 High — feature broken | [#3730](https://github.com/nanocoai/nanoclaw/issues/3730) |
| #3464 — Remove v1 session-commands | Open since 2026-08-23 (15 days) | 🟡 Medium — cleanup, blocks v1 removal | [#3464](https://github.com/nanocoai/nanoclaw/pull/3464) |
| #3356 — Cursor Agent SDK | Open since 2026-08-19 (19 days) | 🟡 Medium — feature ready, review backlog | [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) |
| #3355 — /add-cursor install skill | Open since 2026-08-19 (19 days) | 🟡 Medium — depends on #3356 | [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) |

**Recommendation:** Maintainers should prioritize triaging #3728 and #3730 this week. The Telegram bug in particular affects users on v2.1.54 and v2.3.0 and has no workaround. Channel adapter reliability should be a gate for the next release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw Project Digest**
**Date:** 2026-09-07

### 1. Today's Overview
The NullClaw project demonstrates a low-activity maintenance cycle today, with no new issues opened or closed and no new releases published. The development focus appears to be concentrated on a single, critical infrastructure fix regarding the Model Context Protocol (MCP) stdio implementation. Overall project health remains stable, though the lack of new issues suggests a period of observational maintenance rather than active feature expansion.

### 2. Releases
**No new releases were published** in the last 24 hours.

### 3. Project Progress
The primary progress made today is the submission of a Pull Request aimed at stabilizing the stdio-based MCP server communication. This PR addresses a potential hanging scenario and adds necessary cleanup logic to ensure the agent environment remains resilient.

### 4. Community Hot Topics
*   **PR #996: fix(mcp): bound stdio response waits**
    *   **Link:** [nullclaw/nullaw PR #996](https://github.com/nullclaw/nullclaw/pull/996)
    *   **Analysis:** This is the only active development thread. It addresses a timeout handling issue in the stdio MCP integration. The underlying need is to prevent the agent from hanging indefinitely when waiting for responses from external tools or subprocesses, improving the robustness of external tool execution.

### 5. Bugs & Stability
*   **Issue #991 (In Progress):** The PR #996 is specifically targeting Issue #991, which involves unbounded waits for stdio responses.
    *   **Status:** Fix submitted, currently open for review.
    *   **Impact:** This fix is critical for system stability, as unbounded waits can cause the agent process to become unresponsive, effectively crashing the workflow.

### 6. Feature Requests & Roadmap Signals
No new feature requests were recorded in the last 24 hours. The current roadmap signals suggest a focus on reliability and resource management (specifically process group termination and cleanup) over new feature additions.

### 7. User Feedback Summary
User feedback is currently at a standstill with zero new issues or comments. There is no data available regarding user satisfaction or pain points for this specific date.

### 8. Backlog Watch
*   **Open PR #996:** While not a "backlog" item, this PR is currently the focal point of development. It requires code review and merging to resolve the underlying stability issue.

---

*Generated based on data from [NullClaw GitHub](https://github.com/nullclaw/nullclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

### **IronClaw Project Digest**
**Date:** 2026-09-07
**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

### **1. Today's Overview**
The IronClaw project experienced a period of low activity on 2026-09-07, with no new releases or issues reported in the last 24 hours. Development focus shifted toward dependency maintenance and infrastructure stability. While no new features were introduced, the repository maintains a healthy maintenance pace with multiple dependency updates being merged or reviewed. The project appears stable, with no critical alerts or user-facing incidents reported today.

### **2. Releases**
**None.** No new versions were released in the last 24 hours.

### **3. Project Progress**
*   **Merged PRs:** 3 dependency updates were merged in the last 24 hours.
    *   **#8049:** Bumped the `everything-else` group (19 updates) including `uuid`, `base64`, and `toml`.
    *   **#7835:** Bumped the `actions` group (5 updates) including `anthropics/claude-code-action` and `actions/setup-node`.
    *   **#7020:** Bumped `tokio-tungstenite` from 0.29.0 to 0.30.0 in the `tokio-ecosystem` group.
*   **Active PRs:** 6 dependency and infrastructure updates are currently open for review.
    *   **#8080:** Massive dependency update (21 updates) including `uuid` and `base64`.
    *   **#8078:** Bumped `tower-http` to 0.7.1 and `tokio-tungstenite`.
    *   **#8079:** Bumped `actions` group (6 updates).
    *   **#7834:** Bumped WebAssembly dependencies (`wasmtime`, `wit-component`).
    *   **#8077:** Fix for MCP response leak diagnostics (addresses issue #8009).
    *   **#8076:** Fix for distinguishing disconnected shared channels in the assistant logic.

### **4. Community Hot Topics**
*   **#8080 [OPEN]**: Massive Dependency Update
    *   **Link:** [nearai/ironclaw PR #8080](https://github.com/nearai/ironclaw/pull/8080)
    *   **Analysis:** This is the most significant update pending review, bumping 21 packages across the project. It represents a maintenance effort to ensure long-term stability by updating utility libraries like `uuid` and `base64`.
*   **#8077 [OPEN]**: MCP Diagnostic Fix
    *   **Link:** [nearai/ironclaw PR #8077](https://github.com/nearai/ironclaw/pull/8077)
    *   **Analysis:** Addresses a specific diagnostic issue (#8009) regarding MCP egress and host leak-blocking. This suggests a refinement in the internal error handling logic to prevent false positives or security bypasses.

### **5. Bugs & Stability**
*   **Severity: Low** - *No critical crashes or regressions reported.*
*   **Stability Notes:** The project is currently focused on dependency security and CI stability. The merged PRs address routine dependency bloat and CI configuration updates, ensuring the build environment remains compatible with the latest ecosystem changes.

### **6. Feature Requests & Roadmap Signals**
*   **Infrastructure Refinement:** The open PRs suggest the roadmap is currently focused on internal tooling rather than external features. The updates to `wasmtime` and WebAssembly dependencies indicate an ongoing effort to optimize or stabilize the WASM execution environment, which is likely critical for the agent's cross-platform capabilities.
*   **UX Improvements:** PR #8076 addresses user-facing communication logic (distinguishing channel states), suggesting a focus on improving the robustness of the assistant's connection handling.

### **7. User Feedback Summary**
*   **No direct user feedback** (issues or comments) was recorded in the last 24 hours.
*   **Indication:** The lack of open issues and low activity suggests the project is in a "maintenance mode" where developers are fixing underlying bugs and updating dependencies to prevent future friction.

### **8. Backlog Watch**
*   **#7834 [OPEN]**: Bumping WebAssembly dependencies.
    *   **Link:** [nearai/ironclaw PR #7834](https://github.com/nearai/ironclaw/pull/7834)
    *   **Status:** This PR has been open since 2026-08-23. It involves bumping core WebAssembly tooling (`wasmtime`, `wit-parser`). While not urgent, merging this will ensure the project stays aligned with the latest WebAssembly standards.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-09-07
**Repository:** netease-youdao/LobsterAI

## 1. Today's Overview
LobsterAI remains in a maintenance mode with minimal recent activity. The repository is currently stable but quiet, with zero new pull requests, releases, or closed issues reported in the last 24 hours. The sole focus of the day was on triaging an existing open bug report regarding UI state management. The project appears to be in a low-activity phase, requiring proactive maintenance to prevent backlog accumulation.

## 2. Releases
**No new releases detected.**

## 3. Project Progress
*   **Pull Requests:** 0 opened, 0 merged, 0 closed.
*   **Issues:** 0 opened, 1 updated (active), 0 closed.
*   **Status:** There was no code development or feature integration activity today. The focus was entirely on issue tracking and communication.

## 4. Community Hot Topics
**Active Issue:** UI State Management Bug
*   **Issue #1068:** A user reported a bug where deleting the currently active agent prevents the task list from refreshing when switching to another agent (specifically failing to display tasks for the 'main' agent if the current one is deleted).
*   **Analysis:** This is the only active thread. The issue highlights a user experience (UX) flaw in state synchronization. It suggests that the application’s data flow logic does not handle the edge case of removing the currently selected context properly.

## 5. Bugs & Stability
**Severity: Medium (UI/UX)**

*   **Bug #1068: Agent Deletion State Synchronization Failure**
    *   **Description:** When the current agent is deleted and the user switches to another agent, the task list does not refresh. This leaves the user with an empty view even if tasks exist for the new agent.
    *   **Impact:** This affects workflow continuity and data visibility.
    *   **Fix Status:** **No fix PRs exist yet.** The issue remains open and requires a code change to trigger a UI re-render or data fetch upon agent switch events.

## 6. Feature Requests & Roadmap Signals
*   **No specific new feature requests were filed today.**
*   **Current Signal:** The project is currently addressing stability and usability issues (UI refresh logic) rather than expanding feature sets. Future roadmap developments will likely depend on the resolution of this state management bug.

## 7. User Feedback Summary
*   **Pain Point:** Users expect seamless context switching. The inability to see the task list after deleting an agent disrupts their workflow, causing confusion when they expect to see their remaining tasks.
*   **Dissatisfaction:** Low severity but high annoyance; the bug prevents the user from verifying the status of other agents effectively.

## 8. Backlog Watch
*   **Issue #1068 (Open since Mar 30, 2026):**
    *   **Status:** Waiting for maintainer action.
    *   **Context:** This issue has been dormant for nearly 6 months. While it is a single-item thread, it represents a potential UI regression or an unaddressed design flaw that could affect users returning to the project. Maintainers should prioritize implementing a fix or a workaround.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-09-07

## 1. Today's Overview
The Moltis project experienced a period of low activity on September 6th, with no issues opened, closed, or released in the last 24 hours. However, development momentum remains steady with two Pull Requests submitted, focusing on infrastructure security and execution accuracy. The project is currently in a maintenance and stabilization phase, with contributors addressing specific edge cases in TLS configuration and shell execution environments.

## 2. Releases
**No new releases** were published in the last 24 hours.

## 3. Project Progress
Two Pull Requests were submitted, advancing the project's stability and security posture:
*   **TLS Configuration:** PR #1261 was opened to restrict ALPN (Application-Layer Protocol Negotiation) to HTTP/1.1 for TLS connections. This addresses security constraints and prepares for future WebSocket RFC 8441 compliance.
*   **Execution Accuracy:** PR #1260 was submitted to improve error reporting for missing shell commands. This fix ensures that missing shells (`sh`, `bash`, etc.) are accurately detected even when a valid working directory exists, preventing false negatives in execution environments.

## 4. Community Hot Topics
Currently, there is no active discussion in the form of comments or reactions on the latest PRs. The community focus is directed solely at the code changes themselves rather than debating features or architecture.

## 5. Bugs & Stability
*   **Missing Shell Detection (Severity: Medium):** Previously, if a valid working directory existed, the project would fail to report that a shell binary was missing in the PATH, potentially causing confusing runtime errors. This has been fixed in PR #1260.
*   **TLS Protocol Negotiation (Severity: Low/Medium):** The project is currently advertising HTTP/1.1 over TLS only, pending full support for RFC 8441 WebSocket upgrades. This is a documented constraint to ensure protocol compliance and security. PR #1261 implements the necessary restrictions.

## 6. Feature Requests & Roadmap Signals
No new feature requests were submitted today. The current roadmap appears to focus on internal infrastructure improvements (TLS) and operational robustness (execution error handling) rather than new external features.

## 7. User Feedback Summary
There is no direct user feedback available for analysis today. The absence of open issues suggests the project is stable for its current user base, with recent improvements in error reporting likely improving user satisfaction by making debugging execution failures easier.

## 8. Backlog Watch
*   **Issue #245:** This issue requested the restriction of ALPN to HTTP/1.1 until WebSocket upgrades are supported. It has been addressed and is currently being implemented via PR #1261.
*   **Issue #279:** This issue requested accurate reporting of missing shells. It has been addressed and is currently being implemented via PR #1260.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*