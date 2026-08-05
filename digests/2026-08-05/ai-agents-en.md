# OpenClaw Ecosystem Digest 2026-08-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-05 06:19 UTC

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



# OpenClaw Project Digest — 2026-08-05

---

## 1. Today's Overview

OpenClaw is exhibiting **very high engagement** with 500 issues and 500 PRs touched in the last 24 hours. The open/active issue count (390) significantly outpaces closures (110), indicating a growing backlog under sustained development velocity. No new releases were published today, suggesting the team is consolidating fixes rather than shipping. Activity is heavily concentrated around session-state reliability, subagent completion delivery, and channel adapter bugs (Telegram, Feishu, MS Teams). The project remains in a active beta-hardening phase with P0/P1 bugs dominating the front page.

---

## 2. Releases

**None today.** The latest tracked release is `2026.7.2-beta.7` (and stable `2026.7.1-2`). No new version was published on 2026-08-05.

---

## 3. Project Progress

**123 PRs merged/closed** in the last 24 hours (not individually listed). From the visible queue, the following PRs were actively advanced or are near-merge:

| PR | Area | Status |
|---|---|---|
| [#119512](https://github.com/openclaw/openclaw/issues/119512) — `fix(sessions): reuse identities during target dedupe` | Sessions / SQLite perf | 👀 Ready for maintainer |
| [#119516](https://github.com/openclaw/openclaw/issues/119516) — `fix(update): recover managed gateway after failed CLI update` | CLI / update reliability | ⏳ Waiting on author |
| [#119511](https://github.com/openclaw/openclaw/issues/119511) — `fix(sessions): archive cron-run transcripts pruned by tasks maintenance` | Sessions / cron | ⏳ Waiting on author |
| [#119485](https://github.com/openclaw/openclaw/issues/119485) — `fix(plugins): isolate manifests with structurally invalid configSchema` | Plugin loading / crash | ⏳ Waiting on author |
| [#119127](https://github.com/openclaw/openclaw/issues/119127) — `fix(media): keep the ttl sweep out of the managed outgoing tree` | Media / attachment loss (P0) | ⏳ Waiting on author |
| [#117906](https://github.com/openclaw/openclaw/issues/117906) — `fix(feishu): preserve self mentions in agent-facing group messages` | Feishu channel | 📣 Needs proof |
| [#119243](https://github.com/openclaw/openclaw/issues/119243) — `fix(feishu): keep bot's own mention in group content` | Feishu channel | 📣 Needs proof |
| [#81939](https://github.com/openclaw/openclaw/issues/81939) — `fix(commands): restore bare /new and /reset model fallthrough` | Commands (regression) | ⏳ Waiting on author |
| [#95830](https://github.com/openclaw/openclaw/issues/95830) — `fix(telegram): route poll answers into sessions` | Telegram channel | ⏳ Waiting on author |

**Key theme:** Multiple channel adapters (Feishu, Telegram) and session lifecycle fixes are in the final proof/waiting stage, suggesting an imminent patch release.

---

## 4. Community Hot Topics

**Most-discussed issues (by comments):**

1. **#116201** — [Realtime voice work retains unbounded provider/consult state](https://github.com/openclaw/openclaw/issues/116201) · 59 comments · 🦞 Diamond Lobster · P1
   - *Underlying need:* Resource leak prevention in voice sessions under bursty/slow provider behavior. Critical for production voice pipelines.

2. **#44925** — [Subagent completion silently lost — no retry, no notification](https://github.com/openclaw/openclaw/issues/44925) · 23 comments · 🦞 Diamond Lobster · P1 · 👍2
   - *Underlying need:* Reliability of multi-agent orchestration. Users running subagent-heavy workflows are hitting silent data loss.

3. **#48788** — [Centralized filename encoding utility for multi-encoding Content-Disposition](https://github.com/openclaw/openclaw/issues/48788) · 20 comments · 🐚 Platinum Hermit · P3 · 👍1
   - *Underlying need:* Internationalized filename handling across channel adapters (Feishu, etc.). Follow-up to PR #48578.

4. **#118846** — [Gateway main thread saturated from boot by plugin-metadata snapshot + fs statting](https://github.com/openclaw/openclaw/issues/118846) · 15 comments · 🦐 Gold Shrimp · P1
   - *Underlying need:* Startup performance on Docker/container deployments. Users report 100% CPU lockout and WebSocket 1006 failures at boot.

5. **#115908** — [Session transcript projection can livelock under sustained writes](https://github.com/openclaw/openclaw/issues/115908) · 13 comments · 🦞 Diamond Lobster · P1
   - *Underlying need:* Core session stability under load. Synchronous rebuild paths block the event loop for tens of seconds.

---

## 5. Bugs & Stability

### P0 / Release-Blocking

| Issue | Summary | Severity | Fix PR? |
|---|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 migration fails: `no such column: entry_valid`; gateway refuses to start | 🦞 Diamond Lobster · P0 · `impact:crash-loop` | None yet |
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | service-env generator double-quotes values, breaking `AWS_REGION` hostname | 🦞 Diamond Lobster · P0 · `impact:ux-release-blocker` | None yet |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | Startup migration preflight blocks gateway after upgrade 6.11→7.1; migration tables empty | 🦞 Diamond Lobster · P0 · `impact:crash-loop` | None yet |
| [#119127](https://github.com/openclaw/openclaw/issues/119127) *(PR)* | TTL sweep deletes outgoing attachments while SQLite history still references them | P0 · `impact:message-loss` | PR open ⏳ |

### P1 — Session State & Message Loss

- [#116201](https://github.com/openclaw/openclaw/issues/116201) — Realtime voice session state retention (unbounded)
- [#115908](https://github.com/openclaw/openclaw/issues/115908) — Transcript projection livelock under sustained writes
- [#67777](https://github.com/openclaw/openclaw/issues/67777) — Subagent completion lost on direct-announce timeout/drain
- [#92433](https://github.com/openclaw/openclaw/issues/92433) — Subagent completion silently dropped when announce steers into ended run
- [#115700](https://github.com/openclaw/openclaw/issues/115700) — `chat.send` rejected "thread switched branches" after model completes
- [#117609](https://github.com/openclaw/openclaw/issues/117609) — Transient LLM/socket errors retried for channels but **not** for embedded-assistant stage
- [#114690](https://github.com/openclaw/openclaw/issues/114690) — Successful Discord reply duplicated after native Codex compaction
- [#116512](https://github.com/openclaw/openclaw/issues/116512) — Telegram progress duplicates first commentary when snapshot IDs change

### Regressions

- [#111498](https://github.com/openclaw/openclaw/issues/111498) — Main agent blocked by persistent workspace-state migration after Anthropic auth recovery
- [#107873](https://github.com/openclaw/openclaw/issues/107873) — Embedded prompt-lock session takeover aborts visible WebChat turns
- [#97168](https://github.com/openclaw/openclaw/issues/97168) — Child process leak causing zombie accumulation
- [#77733](https://github.com/openclaw/openclaw/issues/77733) — Bare `/new` and `/reset` no longer trigger persona greeting (regression vs 4.x) — *PR #81939 open*
- [#116010](https://github.com/openclaw/openclaw/issues/116010) — All persistent sessions capped at 128k context regardless of model

### Closed Today (notable)

- [#117956](https://github.com/openclaw/openclaw/issues/117956) — `claude-cli` produced metered Anthropic API usage despite env scrubbing (~13.7M tokens billed)
- [#52249](https://github.com/openclaw/openclaw/issues/52249) — ACP parent session stuck until refresh when yielded for child completion
- [#72031](https://github.com/openclaw/openclaw/issues/72031) — `image` tool fails for Bedrock with `auth mode: aws-sdk`
- [#80036](https://github.com/openclaw/openclaw/issues/80036) — Chrome MCP existing-session reports ready but page tools timeout on macOS

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Engagement |
|---|---|---|
| [#113251](https://github.com/openclaw/openclaw/issues/113251) | Image viewing in webchat file viewer | 10 comments |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | MathJax/LaTeX support in Control UI | **10 👍** · 9 comments |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | YAML as config file format | 9 comments · 2 👍 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | Self-hosted STT/TTS provider support in webchat | 7 comments · 2 👍 |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | `.gitignore`-like exclude patterns for backup CLI | 9 comments · 1 👍 |
| [#44395](https://github.com/openclaw/openclaw/issues/44395) | Heading-aware chunking + entity extraction for memory search | 6 comments · 2 👍 |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | Chat-first Android surface | 6 comments |
| [#79168](https://github.com/openclaw/openclaw/issues/79168) | Content-based prompt injection scanning on tool output | 6 comments · 1 👍 |
| [#118977](https://github.com/openclaw/openclaw/issues/118977) *(PR)* | Realtime transcription WebSocket protocol support | ⏳ Waiting on author |
| [#95402](https://github.com/openclaw/openclaw/issues/95402) *(PR)* | Hebrew (he) locale addition | ⏳ Waiting on author |

**Roadmap prediction:** MathJax/LaTeX rendering and YAML config support are the most upvoted feature requests and align with power-user workflows. Self-hosted TTS/STT in webchat addresses a real deploy-time gap. The Hebrew locale PR suggests continued i18n expansion.

---

## 7. User Feedback Summary

**Pain points surfacing this cycle:**

- **Session reliability is the #1 concern.** Multiple users report subagent completions vanishing, transcripts livelocking, and `chat.send` being rejected post-model-completion. The "thread switched branches" error (#115700) and silent subagent loss (#44925, #67777, #92433) point to a systemic issue in the session state machine under concurrency.
- **Migration pain is real.** Users upgrading from 6.x→7.x are hitting hard blocks: empty migration tables (#112395), missing columns (#119263), and persistent workspace-state locks (#111498). The `openclaw doctor --fix` path is insufficient for several scenarios.
- **Channel adapter bugs are fragmenting the experience.** Feishu group mentions are stripped (#117906, #119243), Telegram poll answers don't route to sessions (#95830), and Telegram progress commentary duplicates (#116512). Each channel has its own set of edge-case regressions.
- **Secret/credential handling has trust issues.** The Anthropic API key leak despite env scrubbing (#117956, ~13.7M tokens billed) and double-quoted service-env values breaking AWS auth (#103804) are eroding confidence in the credential isolation model.
- **Positive signal:** QA lab infrastructure is maturing (multiple QA-specific PRs from `steipete`), and the community is contributing meaningful i18n (Hebrew) and protocol (realtime transcription WebSocket) work.

---

## 8. Backlog Watch

**Long-standing issues requiring maintainer attention:**

| Issue | Age | Tags | Why it's stuck |
|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost | ~5 months | 🦞 Diamond Lobster · P1 · `clawsweeper-recovery-stuck` | No repro after initial report; needs live reproduction |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) — Subagent completion delivery lost | ~4 months | 🦞 Diamond Lobster · P1 · `clawsweeper:source-repro` | Needs source repro |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) — Subagent completion dropped on steer | ~2 months | 🦞 Diamond Lobster · P1 · `clawsweeper-recovery-stuck` | Recovery stuck |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) — Voice session unbounded state | ~6 days | 🦞 Diamond Lobster · P1 · `clawsweeper-recovery-stuck` | Needs product decision |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) — Centralized filename encoding | ~5 months | 🐚 Platinum Hermit · P3 · `clawsweeper-recovery-stuck` | Architectural decision pending |
| [#54463](https://github.com/openclaw/openclaw/issues/54463) — QMD memory indexing symlink loop | ~5 months | 🐚 Platinum Hermit · P2 · `clawsweeper-recovery-stuck` | Needs live repro |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) — `memory_search` index metadata missing (race) | ~2 months | 🦪 Silver Shellfish · P1 · `clawsweeper-recovery-stuck` | Locally hotfixed but not merged |
| [#97168](https://github.com/openclaw/openclaw/issues/97168

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem
**Date: 2026-08-05**

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing a **high-velocity consolidation phase**, with the "Claw" family of projects (OpenClaw, NanoClaw, PicoClaw, IronClaw, CoPaw, ZeroClaw) forming the core of active development. Projects are aggressively pursuing production readiness — focusing on session reliability, channel adapter maturity, and security hardening — while differentiating on platform scope (mobile, desktop, CLI, multi-agent orchestration). Community health varies dramatically: the top three projects by activity (OpenClaw, Hermes Agent, ZeroClaw) each handle 50+ concurrent issues/PRs daily, while four projects show minimal or no activity, signaling either niche positioning or maintenance-mode stagnation.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release | Open P0/P1 Bugs | Health Score* |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 123 | None (beta-hardening) | 4 P0, ~10 P1 | 🟡 Moderate (backlog risk) |
| **Hermes Agent** | 50 | 50 | 9 PRs + 5 issues | None | 2 High, 1 Medium | 🟢 Strong |
| **ZeroClaw** | 37 | 50 | 0 merged | None | 1 P0, 2 P1 | 🟡 Moderate (review bottleneck) |
| **CoPaw** | 28 | 49 | 22 PRs + 12 issues | None (v2.1.0b1) | 5 Critical (desktop beta) | 🟡 Moderate (beta regressions) |
| **IronClaw** | 50 | 50 | ~11 | v1.1.0-rc.1 (2 days old) | 1 High | 🟢 Strong |
| **NanoBot** | 4 | 21 | 16 | None | 1 P1 (security) | 🟢 Strong |
| **LobsterAI** | — | 14 | 11 | 2026.8.3 (today) | 0 | 🟢 Strong |
| **PicoClaw** | 3 | 4 | 2 | None | 1 Critical (MCP hang) | 🟡 Moderate |
| **NanoClaw** | 0 | 6 | 1 | None | 1 Critical (Discord) | 🟡 Moderate |
| **NullClaw** | 0 | 1 | 0 | None | 0 | 🔴 Low |
| **Moltis** | 0 | 1 | 0 | None | 0 | 🔴 Low |
| **TinyClaw** | 0 | 0 | 0 | None | 0 | 🔴 Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | None | 0 | 🔴 Dormant |

*Health Score factors: merge throughput vs. backlog growth, bug severity, release cadence, and community engagement velocity.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale of engagement** is unmatched — 500 issues + 500 PRs daily is an order of magnitude above the next-most-active project. This signals the largest contributor base and most diverse deployment footprint.
- **Channel adapter breadth** is the most mature: Telegram, Feishu, Discord, MS Teams, and more all have active bug-fix pipelines, reflecting a multi-platform strategy few peers match.
- **Session-state depth** — OpenClaw's P0/P1 bugs center on session lifecycle (migration failures, transcript livelocks, subagent completion loss), indicating it's tackling the hardest reliability problems in the space. Peers like NanoBot and PicoClaw haven't surfaced equivalent session-complexity issues, suggesting smaller or less concurrent user workloads.

**Technical approach differences:**
- OpenClaw uses a **SQLite-backed session store** with migration-dependent upgrades — a trade-off favoring embedded simplicity over distributed consistency. IronClaw pursues a similar embedded path but with a more formal layer-matrix architecture. CoPaw and ZeroClaw are building more modular, plugin-oriented stacks.
- OpenClaw's **subagent orchestration** is a first-class concern (multiple P1 bugs on completion delivery), whereas peers like NanoClaw and Hermes Agent treat multi-agent as an emerging feature.
- OpenClaw's **beta-hardening posture** (no releases, massive PR throughput, backlog growth) contrasts with LobsterAI's release cadence and IronClaw's RC discipline.

**Community size:** OpenClaw's engagement metrics suggest a community 5–10× larger than the next tier (Hermes, IronClaw, ZeroClaw), and 20–50× larger than the low-activity projects.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs |
|---|---|---|
| **Session/state reliability** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw | Subagent completion delivery, transcript projection stability, session cookie persistence, provider-refresh isolation |
| **Channel adapter maturity** | OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw | Feishu/Telegram/Discord edge cases, poll-answer routing, mention preservation, self-hosted gateway support |
| **Security & credential isolation** | OpenClaw, NanoBot, ZeroClaw, PicoClaw | API key leakage via env mutation (NanoBot #4784), unauthenticated webhook dispatch (ZeroClaw #9565), secret scrubbing failures (OpenClaw #117956), MCP server trust boundaries (PicoClaw #3269) |
| **Multi-agent orchestration** | OpenClaw, NanoClaw, Hermes Agent, CoPaw | Agent-to-agent messaging isolation, completion ACK reliability, context window management across agent boundaries |
| **Desktop/WebUI stability** | CoPaw, Hermes Agent, IronClaw, PicoClaw | Windows dual-backend spawns (Hermes #79087), Python env injection (CoPaw #6697), WebUI input lag (PicoClaw #3281), session message loss on switch (Hermes #79050) |
| **Migration/upgrade pain** | OpenClaw, IronClaw | DB schema migration failures (OpenClaw #119263, #112395), lossless upgrade guarantees (IronClaw #7178), version-jump risks (CoPaw v2.0→2.1) |
| **Provider/LLM integration robustness** | OpenClaw, Hermes Agent, CoPaw, PicoClaw | Context-length config respect, interleaved thinking multi-turn (Hermes #75725), prompt-cache observability (PicoClaw #3251, #3317), provider-specific error handling |
| **Skill/plugin system maturity** | IronClaw, CoPaw, NanoClaw | Skill discovery/routing reliability (IronClaw #6565), on-demand skill loading (CoPaw #6699), host-seam decoupling (NanoClaw #3186) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | CoPaw | NanoBot | PicoClaw | NanoClaw | ZeroClaw | LobsterAI |
|---|---|---|---|---|---|---|---|---|---|
| **Primary focus** | Multi-channel session orchestration | Desktop + Telegram parity | Enterprise Rust architecture | Qwen-powered personal assistant | Lightweight multi-channel | MCP/tool-centric | Dial/SMS/voice channels | Security-first goal mode | Consumer credit-campaign app |
| **Target user** | Power users, multi-platform ops | Telegram-heavy users, desktop | Enterprise/Rust consumers | Chinese-market users, Qwen ecosystem | General multi-channel | Tool/MCP integrators | SMS/voice-reach users | Security-conscious teams | Casual/consumer |
| **Architecture** | Node.js, SQLite sessions | Python, modular web server | Rust, layer-matrix restructure | Python/Tauri desktop | Python, WebUI-focused | Node.js, MCP-native | Node.js, skill-driven | Rust, plugin/WASM | Electron/React |
| **Key differentiator** | Session reliability at scale | Telegram Bot API 10.2 parity | WS restructure + IronHub | Multi-model parallel execution | Trusted proxy auth + WebUI polish | OAuth hardening + cache observability | Dial channel (SMS + voice) | Goal mode + MoA provider | Credit rewards + NIM integration |
| **Release cadence** | Beta-hardening (irregular) | Regular, issue-driven | RC discipline (v1.1.0-rc.1) | Beta (v2.1.0b1) with regressions | Steady, feature-bundled | Maintenance phase | Feature-PR driven | RFC-driven, no releases | Bi-weekly (2026.8.3 today) |
| **Platform strength** | Web + all major channels | Desktop + Telegram | Enterprise infrastructure | Windows/macOS desktop | WebUI + Matrix/WeCom | Web + MCP tools | Discord + Dial/SMS | Security/gateway | Electron desktop |

---

## 6. Community Momentum & Maturity

**Tier 1 — High Velocity, Active Consolidation:**
- **OpenClaw**: Largest community, highest absolute throughput, but backlog is growing faster than closures (390 open vs. 110 closed). Health risk: maintenance capacity lag.
- **IronClaw**: Strong merge rate, disciplined RC release, active architectural restructure (WS 0–6). Community is smaller but highly engaged on epics.
- **Hermes Agent**: Healthy 9 PR + 5 issue closes per day, active Telegram campaign driving contributions. Windows desktop bugs are the main quality risk.

**Tier 2 — Active but Narrower Scope:**
- **CoPaw**: High velocity (22 PRs, 12 issues closed) but v2.1.0b1 has two critical regressions blocking Windows users. Community is growing fast; maturity is the question.
- **NanoBot**: 16 merged PRs today with focused WebUI/channel polish. Security issue (#4784) is an outlier concern. Healthy contributor base.
- **ZeroClaw**: 37 issues + 50 PRs but **zero merges** — a review bottleneck signal. RFC-driven development suggests architectural seriousness but slow execution.

**Tier 3 — Maintenance or Low Activity:**
- **PicoClaw**: 2 merged PRs, 1 critical open bug (MCP hang). Small community, likely niche use case.
- **NanoClaw**: 1 merged PR, critical Discord bug open. Focused on Dial channel as differentiator.
- **LobsterAI**: Steady release cadence, low bug count, but community is consumer-facing (credit campaigns) rather than developer-driven.

**Tier 4 — Dormant:**
- **NullClaw, Moltis, TinyClaw, ZeptoClaw**: Minimal to no activity. Either maintained for compatibility or effectively stalled.

---

## 7. Trend Signals

**1. Session-state reliability is the ecosystem's #1 unsolved problem.**
Every high-activity project surfaces session bugs as P0/P1: OpenClaw (subagent completion loss, transcript livelock), Hermes Agent (session cookie 401 loops), CoPaw (Python env injection, WeChat token lifecycle), ZeroClaw (stale provider refreshes mutating sessions). This indicates the field is converging on a hard core problem — concurrent, persistent, multi-turn agent sessions — that no project has fully solved.

**2. Security hardening is accelerating, but trust gaps persist.**
Unauthenticated webhook dispatch (ZeroClaw), API key env leakage (NanoBot), Anthropic API billing despite env scrubbing (OpenClaw), and MCP connection hangs (PicoClaw) all point to a sector-wide immaturity in credential isolation and failure-isolation patterns. AI agent developers should prioritize: per-provider credential scoping, circuit-breaker semantics for external tool connections, and fail-closed gateway design.

**3. Multi-channel is table stakes; channel parity depth is the differentiator.**
All major projects support 3+ channels, but the battle is now in edge-case coverage: Feishu mention preservation (OpenClaw), Telegram poll routing (OpenClaw), WeCom filename sanitization (NanoBot), Matrix Continuwity joins (NanoBot). Projects investing in systematic channel-parity campaigns (Hermes' Bot API 10.2 initiative) are likely to pull ahead.

**4. Desktop experience is the new frontier — and the new failure point.**
CoPaw's v2.1.0b1 regressions (Python env injection, Playwright crash), Hermes' Windows dual-backend spawn, and IronClaw's instance-deletion hang all signal that shipping a polished desktop agent is harder than the web layer. Tauri/Electron-based projects are learning this empirically.

**5. Provider-agnosticism is exposing formatting/timeout gaps.**
MiniMax-M3 interleaved thinking breakage (Hermes #75725), OpenRouter multimodal probe overwrites (CoPaw #6687), and custom context_length not honored (OpenClaw, Hermes) reveal that multi-provider support is superficial in edge cases. Developers building provider integrations should invest in protocol-normalization layers, not just SDK wrappers.

**6. Multi-agent orchestration is emerging as a competitive dimension.**
OpenClaw (subagent completion loss), NanoClaw (agent-to-agent messaging shadowing), CoPaw (multi-model parallel execution), and ZeroClaw (MoA virtual provider) all show this is a frontier feature. Projects that solve reliable inter-agent communication with proper isolation will capture the high-value enterprise use case.

**7. Skill/plugin ecosystems are maturing but remain fragmented.**
IronClaw's skill-discovery epic (#6565), CoPaw's on-demand skill loading (#6699), and NanoClaw's host-seam refactoring (#3186) all point to the same trajectory: skills are moving from hard-coded tools to dynamically loaded, scoped, discoverable components. The project that solves skill isolation + lazy-loading + cross-session persistence will have a structural advantage.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-05

## 1. Today's Overview

NanoBot activity remains strong with 25 total updates in the last 24 hours (4 issues, 21 PRs), indicating a healthy and active contributor base. No new releases were published, but 16 PRs were merged/closed today — a significant throughput suggesting a release may be nearing. The project is seeing a mix of WebUI polish, channel fixes (Matrix, WeCom, Telegram), and new feature work (MCP Apps, temporary chat mode). Security remains a live concern with an open issue on API key leakage via global env mutation.

## 2. Releases

*No new releases today.*

---

## 3. Project Progress

**Merged / Closed PRs (16 today):**

- **#5184** — Quick Chat and Temporary Chat feature (conflict resolved and merged) — Re-bin
- **#5249** — WebUI visual consistency refactor: elevation system, flattened layouts, removed replay animations — chengyongru
- **#5250** — WebUI feathered clipped activity edges fix — chengyongru
- **#5238** — Removed request-scoped access grants; simplified session tool authorization — chengyongru
- **#5233** — Mattermost: separate group policy for threads, exposed in WebUI — goodtiding5
- **#5223** — WeCom: fallback when filename sanitization strips everything — santhreal
- **#5210** — WebUI trusted proxy bootstrap auth (Cloudflare Tunnel + Access support) — concertypin
- **#5222** — Telegram: fenced code blocks with special-character language tags preserved — santhreal
- **#1776** — Telegram: added missing `group_mode` config field to Pydantic model — aoliaoduo
- **#5244** — WebUI: markdown rendered in prompt rail previews — chengyongru
- **#5245** — WebUI: aligned timestamp tooltip styles across components — chengyongru
- **#5240** — WebUI: unified floating controls (menus, popovers, combos) — Re-bin
- **#5243** — WebUI: automation metadata aligned with timestamps in message footers — chengyongru
- **#5242** — Commands: reject malformed slash commands, suggest closest match — chengyongru
- **#5239** — WebUI: integrated Vite dev mode (`nanobot webui --dev` with HMR) — chengyongru

**Key takeaways:** The WebUI is the primary focus area, with a sustained refactoring push (visual polish, floating controls, Vite dev mode, trusted proxy auth). Channel reliability continues to improve across Telegram, Mattermost, and WeCom.

---

## 4. Community Hot Topics

| Item | Type | Activity | Link |
|------|------|----------|------|
| [#4784] API key leakage via `os.environ` mutation | Issue | Open, 2 comments | [HKUDS/nanobot#4784](https://github.com/HKUDS/nanobot/issues/4784) |
| [#5251] MCP Apps host support in WebUI | Issue | Open, new today | [HKUDS/nanobot#5251](https://github.com/HKUDS/nanobot/issues/5251) |
| [#5252] Temporary chat mode (WebUI) | PR | Open, new today | [HKUDS/nanobot#5252](https://github.com/HKUDS/nanobot/pull/5252) |
| [#4919] Custom Telegram Bot API base URL | PR | Open, stale from July | [HKUDS/nanobot#4919](https://github.com/HKUDS/nanobot/pull/4919) |
| [#5234] mst-python metasearch provider | PR | Open | [HKUDS/nanobot#5234](https://github.com/HKUDS/nanobot/pull/5234) |
| [#5248] Matrix Continuwity join fix | PR | Open | [HKUDS/nanobot#5248](https://github.com/HKUDS/nanobot/pull/5248) |
| [#5156] Telegram stalled polling recovery | PR | Open, stale from July | [HKUDS/nanobot#5156](https://github.com/HKUDS/nanobot/pull/5156) |

**Analysis:**
- **#4784** is the most consequential open issue — it affects multi-provider deployments where API keys can leak across providers via global `os.environ`. No fix PR yet.
- **#5251** signals growing interest in the MCP Apps ecosystem; users want MCP server-attached UI components surfaced in the WebUI, not just raw tool results.
- **#4919** and **#5156** have been open since mid-to-late July without maintainer response, both addressing real production pain (self-hosted Telegram gateways, silent polling stalls).
- **#5234** (MetaSearch provider) and **#5252** (temporary chat) reflect active feature development directions the community is excited about.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **P1 (Security)** | [#4784] | Provider API keys leaked between providers via `os.environ` mutation | None yet |
| **P2** | [#5247] | Matrix bot does not auto-join on room invite (Continuwity rejects empty POST) | [#5248](https://github.com/HKUDS/nanobot/pull/5248) open |
| **P2** | [#5156] | Telegram polling can silently stall after transient network issues | [#5156](https://github.com/HKUDS/nanobot/pull/5156) open |
| **P2** | #5223 (fixed) | WeCom media download fails when filename sanitization strips all chars | #5223 merged |
| **P2** | #5222 (fixed) | Telegram fenced code blocks with `++`/`+` language tags corrupted | #5222 merged |
| **P2** | #1776 (fixed) | Telegram `group_mode` config silently ignored due to missing Pydantic field | #1776 merged |
| **P1** | #5238 (fixed) | Request-scoped access grants were a regression in session tool authorization | #5238 merged |

**Note:** The security issue [#4784] remains unaddressed and is the highest-priority stability concern.

---

## 6. Feature Requests & Roadmap Signals

| Item | Signal | Likelihood for Next Release |
|------|--------|----------------------------|
| [#5251] MCP Apps host in WebUI | New issue, clearly motivated by MCP ecosystem growth | Medium — needs design work |
| [#5252] Temporary chat mode | PR open today, builds on merged #5184 (Quick Chat) | **High** — clearly in progress |
| [#5234] MetaSearch (mst-python) provider | PR open, addresses need for aggregated web search | Medium — P1 priority, needs review |
| [#4919] Custom Telegram Bot API base URL | PR open since July, enterprise/self-hosted use case | Medium — needs maintainer triage |
| [#5239] Vite dev mode | Merged — signals investement in contributor DX | Already shipped |

**Prediction:** The next release will likely highlight Temporary Chat, the WebUI visual refactor, and trusted proxy auth. MetaSearch and MCP Apps may follow in a subsequent release.

---

## 7. User Feedback Summary

- **Security trust is fragile:** The API key leakage issue (#4784) suggests multi-provider users are exposed to credential cross-contamination — a serious trust issue for enterprise deployments.
- **Channel reliability matters:** Three channel-specific bug fixes landed today (Telegram code blocks, Telegram group_mode, WeCom filenames) plus two open Matrix and Telegram polling issues. Users running Nanobot in production across multiple messaging platforms need these fixes.
- **WebUI polish is appreciated:** A sustained wave of visual consistency, tooltip, and control-unification fixes indicates the team is listening to UX feedback and investing in the desktop experience.
- **DevX investment:** Vite dev mode (#5239) and temporary chat (#5252) suggest the project is broadening its audience beyond terminal users to developers and casual web users.
- **Self-hosted / enterprise needs are underserved:** Custom Telegram API base (#4919), trusted proxy auth (#5210), and MCP Apps (#5251) all point to users deploying in constrained or enterprise environments who need more configuration flexibility.

---

## 8. Backlog Watch

| Item | Open Since | Concern |
|------|-----------|---------|
| [#4784] API key env mutation leak | 2026-07-06 (~30 days) | **Critical** — security issue, no fix PR, needs maintainer triage |
| [#4919] Custom Telegram Bot API base URL | 2026-07-14 (~22 days) | Open PR, addresses self-hosted Telegram gateway deployments |
| [#5156] Telegram stalled polling recovery | 2026-07-29 (~7 days) | Open PR, production-impacting bug with no merged fix yet |
| [#5248] Matrix Continuwity join fix | 2026-08-04 | Open PR, directly fixes #5247 — should be quick triage |

**Recommendation:** Maintainers should prioritize [#4784] given its security implications, and clear the open PR backlog (#4919, #5156, #5248) to reduce community frustration.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-05

## 1. Today's Overview

Hermes Agent shows **very high activity** today with 50 issues and 50 PRs touched in the last 24 hours, though no new releases were published. The project is simultaneously pushing forward a major architectural refactoring (god-file decomposition across `web_server.py`) and a large Telegram Bot API 10.2 feature-parity campaign, while actively addressing desktop stability and gateway bugs. The health signal is positive: 9 PRs merged/closed today and 5 issues closed, indicating strong triage velocity despite the volume of open work.

---

## 2. Releases

**No new releases today.** The project remains on the latest shipped version; all fixes and features below are targeting the next release.

---

## 3. Project Progress

**Merged / Closed PRs Today:**

| PR | Title | Summary |
|---|---|---|
| [#79116](https://github.com/NousResearch/hermes-agent/pull/79116) | `fix: polish Buzz coordinator transport` | Makes Buzz coordinator conversations final-answer-first by default; preserves DM responses in timeline; allows non-member `@token` prose. |
| [#79131](https://github.com/NousResearch/hermes-agent/pull/79131) | `fix(console): handle string SystemExit code in _capture_output` | Fixes a crash when a dispatched command exits with a string message (`sys.exit("msg")`). |
| [#78939](https://github.com/NousResearch/hermes-agent/pull/78939) | `fix(doctor): explain npm audit release-age cooldown` | `hermes doctor` now surfaces when npm's `min-release-age` setting blocks an audit fix. |

**Notable PRs Advanced (Open but Active Today):**

- **God-file decomposition** — A coordinated series of PRs (#79123–#79129) slicing `web_server.py` into `web_routers/` modules (WhatsApp onboarding, messaging catalog, custom endpoints, schema rendering, managed-files, gateway topology, model-assignment). This is the active workstream from epic [#78647](https://github.com/NousResearch/hermes-agent/issues/78647).
- **#79134** — Fix for OAuth MCP provider stuck on stopped event loop, a critical availability issue.
- **#79132** — New `email_send` tool with AgentMail/SMTP support and macOS Keychain integration.
- **#75738** — Fixes `custom_providers[].models.<id>.context_length` not being honored outside `agent_init`/`model_switch` paths.
- **#78308** — Security hardening: denies credential siblings and transcript DBs in managed-files reads via the dashboard.

---

## 4. Community Hot Topics

| Issue | Title | Comments | Key Signal |
|---|---|---|---|
| [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) | MiniMax-M3 interleaved thinking stops after first tool-call turn | 5 | ⚠️ Provider-specific reasoning regression; high-impact for users of MiniMax/M3 |
| [#55498](https://github.com/NousResearch/hermes-agent/issues/55498) | Dashboard: BasicAuthProvider crashes on `/auth/login` (closed) | 4 | Auth configuration bug; now resolved |
| [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) | Telegram Feature Parity & Alignment Campaign (Bot API 10.2) — meta-issue | 4 | **Major community-driven initiative** — centralizing 20+ Telegram feature requests |

**Underlying needs:**
- The **Telegram campaign** is the dominant community effort, with contributors requesting full coverage of Bot API 10.2 features (inline mode, payments/Stars, Passport, games, Web Apps, reply/inline keyboards, business account management, gifts). This signals strong user interest in using Hermes as a full-featured Telegram bot platform.
- The **MiniMax-M3** issue (#75725) reveals a gap in multi-turn tool-call reasoning for providers using the `/anthropic` endpoint, a concern for users relying on non-Anthropic providers with interleaved thinking.
- **Desktop session-state bugs** (#79050, #61457) indicate persistent pain around profile/session persistence — a core UX reliability concern.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|---|---|---|---|
| 🔴 High | [#79087](https://github.com/NousResearch/hermes-agent/issues/79087) | Windows Desktop spawns **two** backend processes per boot (venv + uv), causing GIL stalls and gateway starvation | Open — no fix PR yet |
| 🔴 High | [#79113](https://github.com/NousResearch/hermes-agent/issues/79113) | `profile_routes` to `default` leaves `HERMES_HOME` on secondary adapter owner under multiplex | **Closed** |
| 🟠 Medium | [#79050](https://github.com/NousResearch/hermes-agent/issues/79050) | Desktop session switch loses completed turn messages (hydrate path overwrites local with stale store data) | **Closed** |
| 🟠 Medium | [#61457](https://github.com/NousResearch/hermes-agent/issues/61457) | Remote gateway session cookie never persists after basic-auth login — immediate 401 loop | Open — needs repro |
| 🟠 Medium | [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) | MiniMax-M3 interleaved thinking stops after first tool-call turn | Open — no fix yet |
| 🟡 Low | [#76245](https://github.com/NousResearch/hermes-agent/issues/76245) | Desktop backend not reliably drained/killed on app quit (stray orphans) | Open — no fix yet |
| 🟡 Low | [#57757](https://github.com/NousResearch/hermes-agent/issues/57757) | Desktop always activates Default profile on startup (closed) | **Closed** |

**Key takeaways:**
- The **Windows dual-backend bug** (#79087) is the most impactful open issue — it affects all Windows Desktop users and can cause gateway unresponsiveness.
- Session-state reliability on Desktop remains a concern; the fix for #79050 addressed the resume path but the hydrate-path overwrite may still have edge cases.
- Two bugs (#79113, #79050, #57757) were closed today, showing active resolution.

---

## 6. Feature Requests & Roadmap Signals

**Telegram Bot API 10.2 parity** is the clearest roadmap signal, with 20+ individual feature issues all funneled through meta-issue [#78791](https://github.com/NousResearch/hermes-agent/issues/78791). Anticipated inclusions in the next major feature release:

| Feature | Issue | Priority Signal |
|---|---|---|
| Inline mode (`answerInlineQuery` + result types) | [#78774](https://github.com/NousResearch/hermes-agent/issues/78774) | High — core Telegram UX |
| Reply & Inline keyboards (full coverage) | [#78780](https://github.com/NousResearch/hermes-agent/issues/78780), [#78781](https://github.com/NousResearch/hermes-agent/issues/78781) | High — foundational |
| Commands API (`setMyCommands` full scope + get/delete) | [#78782](https://github.com/NousResearch/hermes-agent/issues/78782) | Medium |
| Payments & Telegram Stars | [#78775](https://github.com/NousResearch/hermes-agent/issues/78775) | Medium — billing-area tagged |
| Gifts API | [#78776](https://github.com/NousResearch/hermes-agent/issues/78776) | Low-Medium |
| Business account management | [#78786](https://github.com/NousResearch/hermes-agent/issues/78786) | Low |
| Passport support | [#78779](https://github.com/NousResearch/hermes-agent/issues/78779) | Low |
| Games API | [#78777](https://github.com/NousResearch/hermes-agent/issues/78777) | Low |
| Web Apps surface | [#78778](https://github.com/NousResearch/hermes-agent/issues/78778) | Low-Medium |
| Bot identity/profile APIs | [#78783](https://github.com/NousResearch/hermes-agent/issues/78783) | Medium |

**Other notable feature PRs in flight:**
- **#79132** — `email_send` tool with AgentMail/SMTP + Keychain (new core tool, likely next release)
- **#11458** — Nextcloud Talk platform adapter (long-open, moderate priority)
- **#63721** — `register_background_service()` API for plugins (enables long-running plugin services)
- **#11455** — Mistral API compatibility patches
- **#6276** — Interactive YouTube automation agent skill

---

## 7. User Feedback Summary

**Pain points expressed:**
- **Desktop reliability** is the top complaint: dual backend spawns on Windows (#79087), session message loss on switch (#79050), cookie/auth loops (#61457), and orphaned backend processes on quit (#76245). These suggest the Desktop client still needs maturity work.
- **Provider-specific reasoning gaps**: MiniMax-M3 stops interleaved thinking after tool calls (#75725), indicating the agent loop doesn't correctly handle non-Anthropic providers in multi-turn tool-use scenarios.
- **Context-length config not respected**: Custom `context_length` overrides are ignored in several code paths (#75738), causing unexpected truncation or errors.
- **OAuth MCP instability**: A stopped event loop leaves OAuth MCP providers permanently broken until full process restart (#79134).

**Satisfaction signals:**
- The Telegram feature campaign (#78791) shows strong community engagement and a contributor-driven approach to parity.
- The god-file decomposition epic (#78647) is progressing methodically with daily slice PRs, suggesting healthy maintainer responsiveness to code-quality concerns.
- 5 issues and 3 PRs were closed today, indicating active triage and resolution.

---

## 8. Backlog Watch

| Issue/PR | Age | Why It Needs Attention |
|---|---|---|
| [#79087](https://github.com/NousResearch/hermes-agent/issues/79087) — Windows dual-backend spawn | New (today) | Critical: affects all Windows Desktop users; causes GIL stalls and gateway starvation. No fix PR yet. |
| [#61457](https://github.com/NousResearch/hermes-agent/issues/61457) — Session cookie 401 loop | ~27 days | Open since July 9; needs repro. Blocks self-hosted basic-auth Desktop users. |
| [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) — MiniMax-M3 thinking regression | ~5 days | High-impact provider bug; no fix yet. |
| [#76245](https://github.com/NousResearch/hermes-agent/issues/76245) — Backend orphan on Desktop quit | ~4 days | Reliability issue; no fix PR. |
| [#11458](https://github.com/NousResearch/hermes-agent/pull/11458) — Nextcloud Talk adapter | ~49 days | Long-open feature PR; moderate priority but stalled. |
| [#63721](https://github.com/NousResearch/hermes-agent/pull/63721) — `register_background_service()` API | ~23 days | Enables important plugin capability; open. |
| [#6276](https://github.com/NousResearch/hermes-agent/pull/6276) — YouTube automation skill | ~58 days | Long-open skill PR; low urgency. |

**Overall project health: 🟢 Active and progressing.** High issue/PR throughput, active bug resolution, and a clear refactoring roadmap. The primary risk area is Desktop stability on Windows and session persistence, which deserve focused maintainer attention in the next release cycle.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-05

---

## 1. Today's Overview

PicoClaw showed moderate activity on 2026-08-04, with **3 issues** and **4 pull requests** updated in the preceding 24 hours. Two PRs were merged (OAuth login hardening and Anthropic prompt-cache token capture), and two new PRs were opened targeting web search expansion and debug visibility. No new releases were published. The project remains in an active maintenance phase, with community contributions addressing both infrastructure stability and feature requests.

---

## 2. Releases

No new releases were published in the current window. The latest activity centers on individual PR merges rather than coordinated version drops.

---

## 3. Project Progress

**Merged / Closed PRs:**

- **[PR #3280](https://github.com/sipeed/picoclaw/pull/3280)** — *fix(auth): make browser OAuth login survive real-world callback conditions* (merged, stale)
  Author: honbou. Resolves a class of headless/remote OAuth login failures where the authorization code is consumed but the callback flow never completes. Four distinct root causes were identified and patched, significantly improving reliability for remote and CI-based setups.

- **[PR #3251](https://github.com/sipeed/picoclaw/pull/3251)** — *fix(providers): capture the prompt cache token usage in Anthropic providers* (merged, stale)
  Author: hydrogenbond007. Previously, prompt cache metrics from the Anthropic SDK and Messages API providers were silently discarded, making it impossible to verify whether prompt caching was functioning. This fix exposes cache-related token data in provider response logs.

**Open PRs awaiting review:**

- **[PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** — *Add native Exa web search provider*
  Author: kesku. Introduces Exa as a first-class `tools.web` / `web_search` backend with `auto` search type, highlights support, API key auth, and existing date-range filters. Fills a gap for users who prefer Exa over the current search providers.

- **[PR #3317](https://github.com/sipeed/picoclaw/pull/3317)** — *feat(providers): log prompt cache tokens in LLM response debug output*
  Author: vmuliadi-astro. Extends gateway debug logging to include cache token fields (e.g., `prompt_cache_hit_tokens`, `prompt_cache_miss_tokens`) from providers like DeepSeek via Cloudflare AI Gateway, improving observability.

---

## 4. Community Hot Topics

| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| Web UI chat input lag with long history | Issue | 3 | 1 👍 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| MCP server failure hanging the agent loop | Issue | 3 | 1 👍 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) |
| Android service launch failure | Issue | 6 | 0 👍 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) |

**Underlying needs:** The most discussed topics reveal two recurring themes: **(1) frontend performance at scale** — users hitting lag with moderate chat history point to a need for virtualized or paginated message lists in the web UI; **(2) resilience of external tool connections** — the MCP hang and Android launch issues both indicate that the agent loop lacks robust timeout/circuit-breaker patterns, leaving the entire UX blocked by a single failing dependency.

---

## 5. Bugs & Stability

Ranked by severity:

1. **🔴 Critical — MCP server connection failure hangs agent loop** [#3269](https://github.com/sipeed/picoclaw/issues/3269)
   *If the MCP server connection fails, the agent loop will hang, causing the chat interface to stop replying entirely.* No open fix PR identified yet. This is the highest-impact bug: a single misconfigured or unavailable MCP server renders the UI unresponsive.

2. **🟠 High — Web UI chat input lag with extended history** [#3281](https://github.com/sipeed/picoclaw/issues/3281)
   *Input box becomes very laggy after accumulating chat history in a single session.* No fix PR yet. Likely a rendering/performance issue in the frontend message list.

3. **🟡 Medium — Android service launch failure** [#3182](https://github.com/sipeed/picoclaw/issues/3182)
   *Service fails to launch on Android despite full app permissions; path cannot be changed from settings.* Stale, no fix PR. Affects the Android mobile experience specifically.

---

## 6. Feature Requests & Roadmap Signals

- **Exa web search provider** [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) — Users are requesting broader search engine support beyond the current providers. Exa's focus on semantic/exa results makes it a natural addition. If merged, this would likely ship in the next minor release as a provider extension.

- **Prompt cache observability** [PR #3317](https://github.com/sipeed/picoclaw/pull/3317) — Following the merged Anthropic cache fix [#3251](https://github.com/sipeed/picoclaw/pull/3251), users are now requesting the same visibility for other providers (DeepSeek, etc.). This signals growing operational maturity — users are running production workloads and need cost/efficiency metrics.

- **Cross-platform parity (Android)** — Issue [#3182](https://github.com/sipeed/picoclaw/issues/3182) indicates Android support is immature relative to desktop. No active PR addresses this, suggesting it may fall behind on the roadmap.

**Prediction:** The next release will likely prioritize the two open PRs (#3299, #3317) as non-breaking additions, alongside a bug-fix patch for the MCP hang if a fix surfaces.

---

## 7. User Feedback Summary

| Theme | Sentiment | Detail |
|-------|-----------|--------|
| OAuth reliability on remote/headless setups | Frustrated → Satisfied | PR #3280 addresses a real pain point; users in CI/remote environments can now authenticate without manual intervention. |
| Prompt cache cost visibility | Appreciative | PR #3251 closes a blind spot — operators can now verify cache hits and manage costs. |
| Web UI performance with history | Dissatisfied | Issue #3281: moderate chat histories cause input lag, degrading daily use. |
| MCP integration robustness | Frustrated | Issue #3269: a single MCP failure blocks the entire chat experience, suggesting the agent loop needs circuit-breaker semantics. |
| Android experience | Dissatisfied | Issue #3182: service won't launch; settings are non-functional. Android appears underserved. |

---

## 8. Backlog Watch

| Item | Status | Concern |
|------|--------|---------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) — Android service launch failure | Stale since 2026-08-04, 6 comments, 0 reactions | Open Android issue with no active PR. Affects mobile users and has drawn discussion without resolution. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP hang on connection failure | Open, updated 2026-08-04, 3 comments | Critical severity with no proposed fix. High risk for production deployments relying on MCP tools. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI input lag | Open, updated 2026-08-04, 3 comments | Directly impacts daily user experience; no fix PR yet despite 1 👍. |

**Maintainer attention recommended:** Issue #3269 (MCP hang) is the highest-priority backlog item — it is critical-severity and has no open fix. Issue #3182 (Android) has been stale with discussion but no resolution and may need a dedicated Android-focused contribution.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-05

## 1. Today's Overview

NanoClaw continues active development with 6 pull requests updated in the last 24 hours, though no issues were touched and no new releases were published. The project is in a steady integration phase: the most urgent bug (Discord approval resolution, #3185) has an open fix PR, and several skill/feature PRs remain open awaiting review or merge. Activity is healthy and maintainer responsiveness is reasonable, with merged/closed work progressing on schedule.

---

## 2. Releases

No new releases published in the last 24 hours.

---

## 3. Project Progress

**Merged/Closed today:**

- **#3154** — [fix(agent-runner): give scheduled tasks current run time](https://github.com/nanocoai/nanoclaw/pull/3154) (Author: Koshkoshinsk) — Closed/merged. Scheduled tasks now receive an accurate `current_time` derived from their `process_after` value (weekday included), with the original creation timestamp retained as a fallback for legacy rows. This improves time-sensitive agent behaviors and cron-like scheduling accuracy.

**PRs advancing this cycle:**

- **#3187** — [fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works](https://github.com/nanocoai/nanoclaw/pull/3187) (Author: dim0627) — Open. Fixes a critical path bug where the built-in `SendMessage` capability shadows agent-to-agent communication.
- **#3186** — [refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186) (Author: zvi-fried) — Open. Refactoring effort to decouple skill-owned capabilities from the host, enabling cleaner extensibility.
- **#3050** — [feat(setup): add Dial to the channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050) (Author: OmriBenShoham) — Open. Adds "Dial" as a selectable channel in the setup wizard and registers it in `runChannelSkill` model.
- **#3041** — [feat(channels): add Dial channel adapter (SMS + AI voice calls)](https://github.com/nanocoai/nanoclaw/pull/3041) (Author: OmriBenShoham) — Open. Introduces a new Dial channel adapter supporting both SMS and AI voice calls — a major expansion of Nanoclaw's reach.
- **#3185** — [fix(discord): strip \n delimiter in webhook interaction custom_id so approvals resolve correctly](https://github.com/nanocoai/nanoclaw/pull/3185) (Author: omerh) — Open. Critical bug fix for Discord approval buttons always resolving as rejected.

---

## 4. Community Hot Topics

The most discussed items today are the **Discord approval bug** (#3185) and the **Dial channel feature** (#3041 / #3050):

- **#3185 — Discord approval resolution bug** (Open, Author: omerh) — This is the highest-impact open issue today. Every approval action on Discord buttons is being rejected due to a newline character in `custom_id` not being stripped during webhook decoding. This directly affects users relying on Nanoclaw's Discord integration for moderated/approval workflows. **Underlying need:** Reliable real-time human-in-the-loop approval flows on Discord, which is one of Nanoclaw's primary agent interaction surfaces.

- **#3041 & #3050 — Dial channel adapter** (Open, Authors: OmriBenShoham) — Two linked PRs that add SMS + AI voice call support. These have been open since July 14 and see recent activity, indicating strong maintainer interest. **Underlying need:** Users want to reach their AI agents via phone/SMS, expanding accessibility beyond text chat platforms.

- **#3187 — Agent-to-agent messaging fix** (Open, Author: dim0627) — Relates to the multi-agent orchestration use case. **Underlying need:** As Nanoclaw grows as a multi-agent platform, isolation between built-in and custom messaging capabilities is essential.

---

## 5. Bugs & Stability

| Severity | Issue | PR | Status |
|----------|-------|-----|--------|
| **Critical** | Discord approval buttons always resolve as rejected | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) | Open fix PR |
| **High** | Built-in `SendMessage` shadows agent-to-agent messaging | [#3187](https://github.com/nanocoai/nanoclaw/pull/3187) | Open fix PR |

**Resolved today:**

- Scheduled tasks receiving incorrect timestamps → Fixed in [#3154](https://github.com/nanocoai/nanoclaw/pull/3154).

No crashes or regressions were reported today.

---

## 6. Feature Requests & Roadmap Signals

- **Dial channel (SMS + AI voice calls)** — [#3041](https://github.com/nanocoai/nanoclaw/pull/3041), [#3050](https://github.com/nanocoai/nanoclaw/pull/3050). Two parallel PRs by the same author suggest this is a tracked roadmap item. Likely to land in the next release if review completes soon.
- **Host seams for skill-owned capabilities** — [#3186](https://github.com/nanocoai/nanoclaw/pull/3186). Signals a push toward a more modular skill architecture, enabling third-party skill authors to register capabilities without core changes.
- **Agent-to-agent messaging isolation** — [#3187](https://github.com/nanocoai/nanoclaw/pull/3187). Indicates the multi-agent orchestration story is a priority, with ongoing hardening of inter-agent communication boundaries.

---

## 7. User Feedback Summary

- **Pain point:** Discord approval buttons are fundamentally broken for webhook-interaction flows — every "Approve" click registers as "Reject" ([#3185](https://github.com/nanocoai/nanoclaw/pull/3185)). This is a severe usability issue for users who depend on Nanoclaw's Discord integration for human-gated agent actions.
- **Pain point:** Agent-to-agent messaging is blocked by a built-in `SendMessage` shadowing issue ([#3187](https://github.com/nanocoai/nanoclaw/pull/3187)), frustrating users building multi-agent workflows.
- **Satisfaction signal:** Scheduled task time resolution has been improved ([#3154](https://github.com/nanocoai/nanoclaw/pull/3154)), addressing a likely source of confusion for users running time-based agent loops.

---

## 8. Backlog Watch

- **#3041 & #3050** — Open since **2026-07-14** (~22 days). Both are feature-complete and follow guidelines but have not yet been merged. These are high-value additions (Dial/SMS/voice) and deserve prioritized review.
- **#3186** — Open since **2026-08-04**. A refactoring PR; lower urgency but important for long-term architecture.
- **#3185** — Open since **2026-08-04**. Critical bug fix; should be merged promptly given the severity.

**Maintainer attention needed:** #3041 and #3050 have been in review for over three weeks. Given their feature scope and linked nature, a coordinated merge would deliver significant user value. #3185, while recent, addresses a blocking bug for Discord users and should be prioritized.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-08-05

## 1. Today's Overview
NullClaw recorded **low activity** over the past 24 hours, with zero issues touched and only a single PR updated. No new releases were published, and no code was merged today. The lone active PR (#981) remains open and awaiting review — there are no closed items or regressions flagged. Overall, the project is in a quiet maintenance window with no urgent stability concerns.

## 2. Releases
No new releases today.

## 3. Project Progress
- **Merged/closed PRs today:** None.
- The only PR in scope, **#981** (`feat(provider): add grok-cli provider for xAI Grok CLI`), remains open as of 2026-08-04 and has not yet been merged.
  - [PR #981](https://github.com/nullclaw/nullclaw/pull/981)

## 4. Community Hot Topics
- **#981 — grok-cli provider** (open, created 2026-07-29, last updated 2026-08-04, 0 👍, 0 comments)
  - **Analysis:** This PR adds a CLI-based provider that delegates to the local `grok` CLI (xAI Grok), following the same spawn-per-request pattern already used by `codex-cli`, `gemini-cli`, and `claude-cli`. Its continued presence for ~7 days without comments or reviews signals a quiet but steady community interest in xAI integration. The lack of reactions suggests the provider is either awaiting maintainer attention or is being quietly tested in parallel.

## 5. Bugs & Stability
- **Bugs reported today:** None.
- **Crashes / regressions:** None identified.
- The project's stability posture appears uncompromised this cycle.

## 6. Feature Requests & Roadmap Signals
- **#981 — grok-cli provider** ([link](https://github.com/nullclaw/nullclaw/pull/981)) is the clearest roadmap signal of the day. If merged, it would bring xAI's Grok into NullClaw's provider ecosystem alongside Codex, Gemini, and Claude. Given the established pattern, this feature is likely **a candidate for the next release** once review is complete.

## 7. User Feedback Summary
No new user feedback was captured in the 24-hour window. The grok-cli PR's description notes that the provider is **optional** and requires both the `grok` CLI and authentication to be present locally — suggesting the requester anticipated friction around setup but kept the integration opt-in, which aligns with user concerns about minimizing mandatory dependencies.

## 8. Backlog Watch
- **#981** has been open since **2026-07-29** (7 days) with no comments or reviews. This is the only item in scope and warrants maintainer attention to either approve, request changes, or close.
  - [PR #981](https://github.com/nullclaw/nullclaw/pull/981)

---
*Digest generated from GitHub data as of 2026-08-05. No additional issues or releases were reported in the observation window.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-05

## 1. Today's Overview

IronClaw is in an active release-candidate phase for v1.1.0, with **50 issues and 50 PRs updated in the last 24 hours** — a strong signal of sustained contributor momentum. The recent `v1.1.0-rc.1` release (2026-08-03) introduced major extension-reach capabilities including MCP server registration, IronHub deep-link installs, and Slack slash commands. Engineering efforts are heavily concentrated on the WS-series restructure (Waves 0–6 consolidation), with BenKurrek driving a large stack of architectural renames, evictions, and re-layers. A new bug report today flags a WebUI composer rendering order issue, while user feedback from the Champions weekly check-in highlights memory recall and model-selection gaps.

## 2. Releases

**ironclaw-v1.1.0-rc.1** (2026-08-03)

Headline changes per release notes:
- Arbitrary hosted MCP server registration
- IronHub deep-link installs
- Durable file attachments across channels
- Slack `/ironclaw` slash commands
- Broad pass on error-legibility improvements

A related maintenance release #5598 bumped `ironclaw_common` 0.4.2→0.5.0 (⚠ API-breaking), `ironclaw_safety` 0.2.2→0.2.3 (compatible), and `ironclaw_skills` 0.3.0→0.4.0 (⚠ API-breaking).

Migration note: Issue #7178 tracks making the `1.0.0-rc.1 → 1.1.0-rc.1` startup migration lossless — currently not guaranteed.

## 3. Project Progress

**Closed/Merged today (2026-08-04 → 05):**

| PR | Summary |
|---|---|
| [#7181](https://github.com/nearai/ironclaw/pull/7181) | Waves 0–4 batch 2: adapter-registry move, register-to-zero, accumulated fleet |
| [#7189](https://github.com/nearai/ironclaw/pull/7189) | WS2: cleared `extension_host→product` residue (auth/conversations vocabulary, free functions) |
| [#7187](https://github.com/nearai/ironclaw/pull/7187) | WS6: `RebornRuntime` slimming, typed `ExtensionId`, domain cleanups |
| [#7186](https://github.com/nearai/ironclaw/pull/7186) | WS6: evicted service cluster from composition (admin users, trace capture, route mounts) |
| [#7179](https://github.com/nearai/ironclaw/pull/7179) | WS6: three remaining module charters (MCP single-file split, auth two-engine) |
| [#7175](https://github.com/nearai/ironclaw/pull/7175) | WS3 closeout: `LAYER_MATRIX_EXCEPTIONS` reduced to 0 |
| [#7174](https://github.com/nearai/ironclaw/pull/7174) | WS5: moved `adapter_registry` parsing to contracts/registry owners |
| [#7172](https://github.com/nearai/ironclaw/pull/7172) | WS4/WS6: three ruled decisions executed (triggers/hooks SQL ADRs + identity binding-store) |
| [#6970](https://github.com/nearai/ironclaw/pull/6970) | Docs upgrade for IronClaw V1 — removed "Reborn" terminology from public docs |
| [#6965](https://github.com/nearai/ironclaw/pull/6965) | Added IronHub docs section (3 pages) |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) | Closed: clippy was red for `{ironclaw, ironclaw_reborn_config}` package set on main |

**Open PRs advancing:**
- [#7152](https://github.com/nearai/ironclaw/pull/7152) — WS6: 13 renames + close remaining Wave 4 rows (XL, medium risk)
- [#7202](https://github.com/nearai/ironclaw/pull/7202) — WS2: inverts `channel_host` product-stack behind D-A factory port
- [#7157](https://github.com/nearai/ironclaw/pull/7157) — Explicit channel delivery tool, two-lane model (notification channels + delivery heuristics)
- [#7029](https://github.com/nearai/ironclaw/pull/7029) — Restores durable delivery claim (`Prepared→Sending` CAS as sole egress authority)
- [#7048](https://github.com/nearai/ironclaw/pull/7048) — Sanitizes WASM guest diagnostics before tracing

## 4. Community Hot Topics

| # | Type | Title | Comments | Link |
|---|---|---|---|---|
| #6284 | Epic (closed) | Error-recoverability endgame — model recovers from 100% of errors | 15 | [Issue](https://github.com/nearai/ironclaw/issues/6284) |
| #6524 | Epic (closed) | Hermetic capability & journey testing platform | 4 | [Issue](https://github.com/nearai/ironclaw/issues/6524) |
| #7119 | Bug (closed) | Clippy red on main for `{ironclaw, ironclaw_reborn_config}` | 4 | [Issue](https://github.com/nearai/ironclaw/issues/7119) |
| #6752 | Bug (open) | Instance deletion fails; "Loading your agents…" stuck on re-login | 3 | [Issue](https://github.com/nearai/ironclaw/issues/6752) |
| #7145 | Task (open) | Finish `extension_host→loops` re-layer, sized from four-port residue | 3 | [Issue](https://github.com/nearai/ironclaw/issues/7145) |
| #7144 | Bug (open) | Pre-existing trace-contribution defects from #7139 review (29 threads) | 2 | [Issue](https://github.com/nearai/ironclaw/issues/7144) |
| #7147 | Bug (open) | Two shrink-only architecture ratchets carry untracked slack on main | 2 | [Issue](https://github.com/nearai/ironclaw/issues/7147) |
| #6565 | Epic (open) | Reliable Skill Discovery, Routing, and Activation | 2 | [Issue](https://github.com/nearai/ironclaw/issues/6565) |

**Analysis:** The top-discussed issue (#6284) reflects the team's commitment to making the agent resilient — a core trust signal for production adoption. The WS-series restructure dominates PR activity, indicating a major architectural consolidation is underway. Skill discoverability (#6565, #6941) and trace-pipeline defects (#7144) are recurring themes, suggesting these are high-priority reliability foundations.

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR | Link |
|---|---|---|---|---|
| 🔴 High | #6752 | Instance deletion fails; re-login hangs on "Loading your agents…" | — | [Issue](https://github.com/nearai/ironclaw/issues/6752) |
| 🟠 Medium | #7192 | Optimistic user messages render below agent output (conversation out of order) | #7205 | [Issue](https://github.com/nearai/ironclaw/issues/7192) |
| 🟠 Medium | #7168 | Agent-installed skills invisible: `skill_install` writes where discovery doesn't read | — | [Issue](https://github.com/nearai/ironclaw/issues/7168) |
| 🟠 Medium | #7191 | `builtin.time` lacks relative-offset arithmetic; returns opaque `input_error()` | — | [Issue](https://github.com/nearai/ironclaw/issues/7191) |
| 🟡 Low | #7119 | Clippy failures on `main` for specific package set (now closed) | — | [Issue](https://github.com/nearai/ironclaw/issues/7119) |
| 🟡 Low | #7204 | Composer not focused after navigating to a thread; accent ring persists | #7205 | [Issue](https://github.com/nearai/ironclaw/issues/7204) |

**Notes:** PR #7205 directly addresses #7204 and is open. The skill visibility bug (#7168) and time tool gap (#7191) are functional regressions that block agent workflows but carry low risk ratings. The instance-deletion hang (#6752) is the most concerning open bug — it blocks a core operational action.

## 6. Feature Requests & Roadmap Signals

| # | Title | Likelihood for v1.1.0 | Link |
|---|---|---|---|
| #7194 | Make admin-allowed shared Slack channels addressable as outbound delivery targets | High (explicitly in RC.1 scope) | [Issue](https://github.com/nearai/ironclaw/issues/7194) |
| #7193 | Run-now (manual fire) for automations across trigger domain & WebUI | Medium-high | [Issue](https://github.com/nearai/ironclaw/issues/7193) |
| #7203 | Expose virtual filesystem as a real mount for skill execution | Medium (architectural dependency) | [Issue](https://github.com/nearai/ironclaw/issues/7203) |
| #7177 | Schema-aware ranked search for deferred tool retrieval | Medium | [Issue](https://github.com/nearai/ironclaw/issues/7177) |
| #6731 | Full IronHub integration into IronClaw | High (partially landed in RC.1) | [Issue](https://github.com/nearai/ironclaw/issues/6731) |
| #7183 | Per-user LLM model selection (currently admin-only) | Low (user-facing config change) | [Issue](https://github.com/nearai/ironclaw/issues/7183) |

**Signal:** The explicit channel delivery tool (#7157) and outbound-addressable Slack channels (#7194) both point toward a richer multi-channel routing story. Skill-mounting via real filesystem (#7203) would unblock agent self-creation of skills (#6941), suggesting the skills epic is a v1.1/v1.2 priority.

## 7. User Feedback Summary

Collected from the **2026-07-23 IronClaw Champions weekly check-in** (reported by @sergeiest):

- **Memory recall across conversations** (#7185): Multiple testers observed context established in one conversation is not reliably available in subsequent ones. This undermines multi-turn workflow continuity.
- **Per-user LLM selection** (#7183): Users want the ability to choose/switch the underlying model; currently admin-only. Raised by Jeremy Koch (marketing).
- **Web scraping reliability** (#7180): Agent's data-gathering is "hit-or-miss" — some sources succeed, others fail with no clear pattern. Michael Kelly (builder ops) flagged that the agent sometimes uses `http` tool instead of `web_search`.
- **Skill selection observability** (#7199, PostChairmanLock): Suggests logging "candidate skill existed but wasn't chosen" vs "chosen and changed final answer" separately, to aid debugging of skill-routing decisions.

**Satisfaction signal:** Users are engaging deeply with automations and multi-conversation workflows, but reliability gaps in memory, tool selection, and scraping are eroding trust.

## 8. Backlog Watch

| # | Age | Description | Risk | Link |
|---|---|---|---|---|
| #6565 | ~2 months | Epic: Reliable Skill Discovery, Routing, and Activation — 21 acceptance criteria, partially blocked by other open work | High | [Issue](https://github.com/nearai/ironclaw/issues/6565) |
| #6941 | ~5 weeks | Skills the model can self-create, find, choose, and use — subset of #6565, fully measured | High | [Issue](https://github.com/nearai/ironclaw/issues/6941) |
| #3773 | ~3 months | Epic: Land the IronClaw Target Crate Architecture — ten ownership families, CI enforcement | Medium | [Issue](https://github.com/nearai/ironclaw/issues/3773) |
| #7144 | 1 day | 29 pre-existing trace-contribution defects surfaced by consolidation review | Medium | [Issue](https://github.com/nearai/ironclaw/issues/7144) |
| #7147 | 1 day | Two architecture ratchets carry untracked slack; three PRs hold conflicting baselines | Medium | [Issue](https://github.com/nearai/ironclaw/issues/7147) |
| #7105 | 1 day | Suggestion to extract identity/session/payments into a dedicated service | Low | [Issue](https://github.com/nearai/ironclaw/issues/7105) |

**Maintainer attention needed:** The skill-discovery epic (#6565) and its subset (#6941) are the largest open user-facing gaps. The architectural doc-truth issues (#7144, #7147) are self-inflicted by the restructure and should be resolved as part of the WS closeout. The payments-service extraction (#7105) is a recurring operational pain point worth evaluating for v1.2.

---

*Generated from GitHub data as of 2026-08-05. Data source: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# 🦞 LobsterAI Project Digest — 2026-08-05

---

## 1. Today's Overview

LobsterAI continues steady development momentum with 14 PRs updated in the last 24 hours (11 closed/merged, 3 open). The project shipped release **2026.8.3** today, introducing native credit-reward activities, a streamlined first-run login experience, Artifact auto-preview controls, and improved model-error handling. Dependency health is also being actively maintained, with major bumps to React DOM (18→19), Vite (5→8), and Electron (40→43) all merged this period. Only one open issue remains from the past day, indicating low bug influx. Overall project health is **strong**, with healthy merge throughput and no new releases flagged.

---

## 2. Releases

### Release 2026.8.3 (PR #2430) — Merged 2026-08-04
- **Branch:** `release/2026.8.3` → `main`
- **Key changes:**
  - Native credit-reward activities
  - Streamlined first-run login experience
  - Control over Artifact auto-preview
  - Improved model-error handling
  - Windows installer reliability improvements
- **Breaking changes:** None noted
- **Migration notes:** None required
- 🔗 [PR #2430](https://github.com/netease-youdao/LobsterAI/pull/2430)

---

## 3. Project Progress

### Merged / Closed PRs Today

| PR | Area | Summary |
|----|------|---------|
| [#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) | renderer, docs, main, cowork | Fix rlog |
| [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) | renderer, docs, main, cowork | Fix rlog |
| [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433) | renderer | Polish startup credit campaign — cropped poster assets, localized failure messages, campaign binding refresh |
| [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) | renderer | Disable final reward auto popup; keep activity entry under account menu |
| [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) | renderer, main | Complete startup credit campaign analytics — report full login redirect URL, error messages for server/network/login failures |
| [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | renderer, cowork | Bundle startup credit campaign artwork locally; align transparent close hit area and image CTA |
| [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) | renderer, cowork | Optimize login page |
| [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) | deps-dev | Bump `cross-env` 7.0.3 → 10.1.0 |
| [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) | deps | Bump `react-dom` 18.3.1 → 19.2.4 |
| [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | deps-dev | Bump `vite` 5.4.21 → 8.0.9 |

### Open PRs Awaiting Review
| PR | Area | Summary |
|----|------|---------|
| [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | Bug | Fix NIM `teamTypeNum` hardcoding — one-line fix for super group name resolution |
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | renderer | Add permanent toggle to hide sidebar ad banner (closes #2342) |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | deps-dev | Bump Electron group (electron 40.2.1→43.2.0, electron-builder) — awaiting merge |

---

## 4. Community Hot Topics

### 🔥 Most Discussed

1. **[Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200)** — *NIM super group name resolution bug* · 1 comment, 0 👍 · Open since 2026-04-01
   - Core need: Users @-mentioning the bot in large cloud-IM groups see raw IDs instead of group names. This is a persistent pain point for teams relying on LobsterAI in NIM super groups.

2. **[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)** — *Permanent sidebar ad banner hide toggle* · Open since 2026-07-21
   - Core need: Users are frustrated by recurring ad banners; temporary dismiss is insufficient. A permanent toggle addresses a clear quality-of-life demand.

3. **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** — *Electron 40→43 upgrade* · Open since 2026-04-02
   - Core need: Long-standing dependency update that's been sitting open. Users benefit from latest Electron security patches and performance improvements.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|----------|------|--------|---------|
| 🟡 Medium | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | Open (fix PR exists) | `teamTypeNum` hardcoded incorrectly in `nimGateway.ts:917` — super groups and p2p chat type numbers are swapped, causing group names to fail resolution when users @-mention the bot. One-line fix is ready but unmerged. |

**Assessment:** No crashes or regressions reported today. The only active bug has an associated fix PR (#1201) awaiting merge. Low instability risk.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood |
|--------|--------|------------|
| **Permanent ad banner control** | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) (closes #2342) | **High** — PR already implemented, awaiting maintainer review |
| **Artifact auto-preview toggle** | Shipped in 2026.8.3 | ✅ Already released |
| **Enhanced analytics for credit campaigns** | [PR #2428](https://github.com/netease-youdao/LobsterAI/pull/2428) | ✅ Merged — suggests continued investment in activity telemetry |
| **NIM group name accuracy** | [Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | **High** — affects core messaging UX for enterprise users |

**Prediction:** The next release will likely include the Electron 43 upgrade (#1277) and the ad banner toggle (#2374), both of which are feature-complete and in review.

---

## 7. User Feedback Summary

- **Satisfaction drivers:**
  - Credit-reward campaign features are being actively polished (artwork bundling, analytics, UX refinements) — indicates responsiveness to user engagement goals.
  - Login page optimization ([PR #2429](https://github.com/netease-youdao/LobsterAI/pull/2429)) shows attention to first-impression UX.

- **Dissatisfaction / pain points:**
  - **Ad banners:** Users repeatedly want permanent dismissal options; the current temporary-dismiss model is insufficient.
  - **NIM group names:** The `teamTypeNum` bug has been open since April with no merge — users in super groups experience broken @-mention name resolution.
  - **Stale dependency updates:** PRs #1277, #1279, #1280, #1281 (all Dependabot) created in early April are only now being merged, suggesting a backlog in dependency maintenance.

---

## 8. Backlog Watch

| Item | Type | Open Since | Risk |
|------|------|-----------|------|
| [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | Bug — NIM group name resolution | 2026-04-01 (~4 months) | 🟡 Medium — functional bug with ready fix |
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | Feature — permanent ad banner toggle | 2026-07-21 (~15 days) | 🟢 Low — user-facing quality-of-life |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Deps — Electron 40→43 upgrade | 2026-04-02 (~4 months) | 🟡 Medium — security/performance |
| [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) | Deps — cross-env 7→10 | 2026-04-02 (~4 months) | 🟢 Low |
| [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) | Deps — react-dom 18→19 | 2026-04-02 (~4 months) | 🟡 Medium — major React version jump |
| [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) | Deps — vite 5→8 | 2026-04-02 (~4 months) | 🟡 Medium — major build tool upgrade |

**Key concern:** Four Dependabot PRs have been open for ~4 months. While they've now been merged/closed today, the delay suggests a maintenance bottleneck that could recur. The NIM bug fix (#1201) also deserves prioritization given its direct impact on enterprise user experience.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-08-05

## 1. Today's Overview

Moltis registered **minimal activity** over the past 24 hours, with zero issues opened or closed and no new releases published. The sole signal of work today is a single open Dependabot PR (#1184) performing a routine dependency bump in the `/website` directory. Overall project health appears **low-velocity and maintenance-mode**, with no active feature development or community bug reports surfaced in this window.

## 2. Releases

No new releases were published today. The project remains on its most recent prior version; no migration notes or breaking-change alerts apply.

## 3. Project Progress

- **Merged / closed PRs today: 0**
- **Open PRs today: 1** — [#1184](https://github.com/moltis-org/moltis/pull/1184) (Dependabot, `dependencies, javascript` scope) bumps `undici` from `7.28.0` to `7.29.0` in the `/website` npm dependency group. No functional features were advanced or fixed today.

## 4. Community Hot Topics

| Item | Type | Reactions | Comments | Link |
|------|------|-----------|----------|------|
| Bump undici 7.28.0 → 7.29.0 | PR #1184 | 0 👍 | — | [moltis-org/moltis #1184](https://github.com/moltis-org/moltis/pull/1184) |

With no user-reported issues or feature discussions active, there are no community hot topics to analyze. The single PR is an automated, non-controversial dependency update with zero engagement.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported today. No fix PRs are linked to any stability concerns in this reporting period.

## 6. Feature Requests & Roadmap Signals

No user-requested features or roadmap signals surfaced today. The absence of open feature-issue activity may indicate a quiet period in community engagement or a low volume of feature-driven contributions during this window.

## 7. User Feedback Summary

No user feedback—positive or negative—was recorded today. There are no pain points, use-case reports, or satisfaction signals to summarize from the current data.

## 8. Backlog Watch

No long-unanswered issues or PRs requiring urgent maintainer attention were identified in today's data. The single open item (#1184) is an automated Dependabot dependency bump and does not constitute a backlog concern.

---

*Digest generated from GitHub data as of 2026-08-05. All links reference [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw Project Digest — 2026-08-05

## 1. Today's Overview

CoPaw (QwenPaw) is experiencing high development velocity, with **28 issues** and **49 PRs** updated in the last 24 hours — a strong signal of an active community and responsive maintainers. No new releases were published today, but 12 issues were closed and 22 PRs merged/closed, indicating sustained resolution momentum. The project is in a refinement phase for the 2.1.0 beta, with significant effort going into desktop stability, memory/scroll middleware correctness, and channel reliability. Community contributions remain robust, with multiple first-time contributors active on core features.

## 2. Releases

**No new releases published today.** The latest tracked versions are **v2.0.1** (stable) and **v2.1.0b1** (desktop beta, Tauri). Beta-specific regressions are being tracked (see Bugs & Stability).

## 3. Project Progress

### Merged / Closed Today

| ID | Type | Summary | Author |
|----|------|---------|--------|
| [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) | Bug fix | Persist `enabled` state on `cron pause`/`resume` — fixes state loss across restarts | axelray-dev |
| [#6567](https://github.com/agentscope-ai/QwenPaw/pull/6567) | Bug fix | Preserve original CJK filenames in upload prompts | RerankerGuo |
| [#6557 → #6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) | Bug fix | Flush pending turns before Scroll compression, closing a memory-persistence gap | RerankerGuo |
| [#6657](https://github.com/agentscope-ai/QwenPaw/pull/6657) | Bug fix | Surface sandbox constraints that the backend cannot actually enforce | vanwaals |
| [#6671](https://github.com/agentscope-ai/QwenPaw/pull/6671) | Release fix | Correct Computer Use package identity and macOS artifacts | jinglinpeng |
| [#6693](https://github.com/agentscope-ai/QwenPaw/issues/6693) | — | Duplicate/cleanup issue closed | lianankeji |
| [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) | Bug fix | Fix naive UTC timestamp timezone conversion in session utils | ianfunghk |
| [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) | Bug fix | Fix false-positive repetition detection triggering Doom loop | MCQSJ |
| [#6673](https://github.com/agentscope-ai/QwenPaw/issues/6673) | Bug fix | Frontend conversation window display issue (v2.1.0b1) | BLUE0818 |
| [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | Bug fix | Cron pause/resume persistence (resolved via #6691) | manjieqi |

### Key PRs Under Review (Open)

- **[PR #6704](https://github.com/agentscope-ai/QwenPaw/pull/6704)** — *Session Fork*: Snapshot conversation context to a new independent session (relates to #6560). First-time contributor `iluv7`.
- **[PR #6706](https://github.com/agentscope-ai/QwenPaw/pull/6706)** — *UTC/POSIX TZ support*: Fixes timezone detection in containerized environments.
- **[PR #6705](https://github.com/agentscope-ai/QwenPaw/pull/6705)** — *Desktop port socket errors*: Stabilizes backend port probing when file descriptors are exhausted.
- **[PR #6669](https://github.com/agentscope-ai/QwenPaw/pull/6669)** — *Chrome native messaging & Windows restore locking*: Fixes two Windows startup failures.
- **[PR #6676](https://github.com/agentscope-ai/QwenPaw/pull/6676)** — *OneBot security*: Binds loopback by default and requires token when exposed — addresses a security gap.
- **[PR #6504](https://github.com/agentscope-ai/QwenPaw/pull/6504)** — *Unified project directories*: Decouples project directory from Coding tools switch; hardens file workspace.
- **[PR #6237](https://github.com/agentscope-ai/QwenPaw/pull/6237)** — *Scroll history recall*: Improves date-aware queries and complete-turn search results.
- **[PR #6503](https://github.com/agentscope-ai/QwenPaw/pull/6503)** — *Agent-level token stats*: Adds per-agent token aggregates from turn metadata (closes #6392).
- **[PR #5739](https://github.com/agentscope-ai/QwenPaw/pull/5739)** — *Auto-copy message text*: Selectable wrapper for chat request/response cards.
- **[PR #6645](https://github.com/agentscope-ai/QwenPaw/pull/6645)** — *OS-level desktop enhancements*: Full-screen, Dock, Spaces, Notification Center, window management.

## 4. Community Hot Topics

| Issue | Topic | Comments | Why It Matters |
|-------|-------|----------|----------------|
| [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | GPT-5.6 prompt caching in Responses API | 13 | Users need cost/latency optimization for multi-turn agent loops; caching support is a mature-provider expectation. |
| [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | Console channel silent timeout on security approval | 12 | Security gating is useless if users can't see approval prompts — direct UX safety gap. |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | Task output directory organization | 6 | Cleanup request; reflects growing user base managing many tasks with scattered media files. |
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | DeepSeek thinking mode breaks in multi-turn | 5 | `reasoning_content` loss after OpenAI formatter skips `ThinkingBlock` — impacts DeepSeek V4 Pro users significantly. |
| [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | Drag-drop files: read from path vs upload | 5 | UX parity with desktop agent tools; reduces media directory bloat. |
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | Channel retry for self-hosted Matrix | 4 | Reliability concern for enterprise/self-hosted deployments; auto-reconnection is expected. |
| [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | Multi-model parallel agent execution | 3 | Power-user workflow: run same task across DS V4 Pro, Qwen 3.7 Max, Kimi K3 and aggregate results. |
| [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | On-demand skill loading | 1 | 27+ skills consume 8–10K tokens in system prompt; users request lazy-loading to preserve context budget. |

**Underlying trend:** Users are pushing CoPaw toward **production-grade reliability** (retry, persistence, caching) and **power-user workflows** (multi-model, on-demand skills, session fork). The community is maturing beyond casual use.

## 5. Bugs & Stability

### 🔴 Critical / High Severity

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | **v2.1.0b1 desktop injects `PYTHONHOME` into child env → all Python subprocesses crash** (`ModuleNotFoundError: encodings`). Windows Tauri build regression. | — |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | **v2.1.0b1 Browser SDK: `open()` always fails** with `WireProtocolError: Target crashed` (isolated Playwright session). | — |
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | **WeChat iLink: one-time `context_token` consumed by typing indicator** → replies rejected (ret=-2), "working" indicator stuck. | — |
| [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) | **Approval prompts unreachable on WeChat-only channel** — 5-min auto-deny with no user visibility. (Related to #6655.) | — |
| [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) | **Huge tool output freezes session load** — no truncation or pagination; can exceed context window. | — |

### 🟡 Medium Severity

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter multimodal probe overwrites documented capabilities with `false` | — |
| [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Auto-scroll compression doesn't trigger `summarize_when_compact` memory flow | [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) (closed) |
| [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) | App Center plugin install fails: `utils` namespace collision (`No module named 'utils.env'`) | — |
| [#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674) | Free-tier model rate limits (429) interrupt tasks with no retry/backoff | — |

### 🟢 Low Severity

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583) | Drag-drop many files: filenames not wrapped/displays on single line | — |
| [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) | How to use Loongsuite tracing with QwenPaw (question) | — |

**Assessment:** The v2.1.0b1 desktop build has **two critical regressions** (Python env injection, Playwright crash) that block Windows users. WeChat channel issues suggest the iLink integration needs a token-lifecycle fix. The "huge output freezes session" bug (#6700) is a scalability issue affecting power users.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal Strength |
|---------|-------|-----------------|
| **Session Fork** — snapshot conversation to new session | [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) → [PR #6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | 🔥 High — PR exists, under review |
| **Agent-level token statistics** | [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) → [PR #6503](https://github.com/agentscope-ai/QwenPaw/pull/6503) | 🔥 High — PR merged/closed |
| **On-demand skill loading** | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | 🔥 High — directly addresses context budget; likely next release |
| **GPT-5.6 prompt caching** | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | Medium — provider-level feature, depends on upstream |
| **Multi-model parallel execution** | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | Medium — advanced workflow, no PR yet |
| **Global rules file** (`.agent` / `.claude`-style) | [#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) | Medium — UX request, no PR yet |
| **Volcengine & Xiaomi MiMo providers** | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | Medium — provider expansion, no PR yet |
| **Kanban board for multi-agent playground** | [#4947](https://github.com/agentscope-ai/QwenPaw/issues/4947) | Low — long-open, no recent activity |
| **Console drag-drop: read from path, no upload** | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | Medium — UX improvement, no PR yet |
| **OS-level desktop enhancements** (Dock, Spaces, etc.) | [PR #6645](https://github.com/agentscope-ai/QwenPaw/pull/6645) | 🔥 High — in progress, broad desktop UX upgrade |

**Predicted for next release (v2.1.0):** Session Fork, on-demand skill loading, agent token stats, OS desktop enhancements, and the Cron persistence fix.

## 7. User Feedback Summary

**Pain points:**
- **v2.1.0b1 desktop regressions** are the top complaint — Python subprocess crashes and browser tool failures make the beta unusable on Windows.
- **WeChat channel token lifecycle bug** causes silent failures (typing indicator consumes approval token), making the channel unreliable for security-gated operations.
- **Console channel lacks approval UI** — users are completely unaware when their commands are blocked pending approval, leading to confused 300-second timeouts.
- **Unbounded tool output** can freeze the Web UI and exhaust context windows, a scalability concern for coding/research workflows.
- **Media directory bloat** from file uploads and lack of per-task output organization frustrates power users.
- **Free-tier rate limits** (e.g., DeepSeek flash) interrupt workflows with no built-in backoff or queuing.

**Satisfaction signals:**
- Users praise QwenPaw as a "great personal AI assistant" ([#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674)).
- The Scroll/auto-compact memory system is valued, but its interaction with `summarize_when_compact` needs fixing.
- Community is enthusiastic about multi-model workflows and session management features.

**Use cases driving demand:** Multi-model comparison (code review, fact-checking), long-running agent sessions with large tool outputs, self-hosted Matrix/DingTalk/WeChat integrations, and desktop-first workflows on Windows/macOS.

## 8. Backlog Watch

| Issue | Age | Concern |
|-------|-----|---------|
| [#4947](https://github.com/agentscope-ai/QwenPaw/issues/4947) — Kanban Board for Playground Multi-agents | **64 days** (2026-06-03) | Long-open feature request; no PR. Low priority but requested by community. |
| [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) — Multi-model parallel agent execution | **12 days** | No PR yet; high-value power-user feature. |
| [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) — On-demand skill loading | **Today** | No PR yet, but strong signal; should be prioritized given context-budget impact. |
| [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) — Plugin `utils` namespace collision | **Today** | Blocks App Center plugin installs; simple fix needed. |
| [#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674) — Free-tier rate limit handling | **Today** | No PR; affects users on DeepSeek free tier. |
| [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) — Loongsuite tracing integration | **4 days** | Documentation/guidance gap for observability-focused users. |

**Maintainer attention needed:** The two **v2.1.0b1 critical regressions** (#6697, #6698) should block the stable desktop release. The WeChat iLink token bug (#6696/#6695) and console approval visibility (#6655) are cross-channel UX issues that deserve a unified fix. The `utils` namespace collision (#6683) is a quick win for plugin ecosystem health.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-05

## 1. Today's Overview
ZeroClaw shows high daily activity with **37 issues updated** and **50 PRs updated** in the last 24 hours (all still open). No new releases were published. Community effort is concentrated on architectural RFCs for goal mode, shell‑command security policies, and unified attachment handling, while critical security bugs (P0/P1) are being actively addressed. No PRs were merged today, indicating ongoing review cycles.

## 2. Releases
*None.*

## 3. Project Progress
**No PRs merged/closed today.** Several feature PRs advanced:
- **#9744** — Authenticated webhook ingress boundary (`VerifiedWebhookIngress` proof).
- **#9758** — Fix memory consolidation inventing traits and speaking over a persona.
- **#9748** — Prevent stale provider refreshes from mutating replacement sessions.
- **#9520** — Honor `always`‑inject frontmatter in compact skill‑prompt mode.
- **#9692 / #9693 / #9694** — SOP pane live‑status icons, read‑only view, and Run/Resume controls.
- **#9477** — Recover tool invocations wrapped in `<tools>` tag.
- **#9217 / #9219 / #9224** — Evaluation framework: async Grader trait, workspace/budget graders, repeated live runs with `pass@k`.
- **#9265 / #9268** — Anthropic server‑side fallback requests and safeguard‑notice surfacing.
- **#9324** — Phase 1 A2A outbound client (tools, wire model, config).
- **#9402 / #9403** — Runtime sandbox Docker‑nesting fix; WASM plugin export wall‑clock deadline.
- **#9476** — Authenticated operator cancellation for running SOP jobs.
- **#8315 / #8902** — RPC response‑frame handling and bidirectional RPC for `ask_user`/`poll`.
- **#9321** — Telegram unauthorized‑notice fix for media messages.

## 4. Community Hot Topics
| Issue | Comments | 👍 | Focus |
|-------|----------|----|-------|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 16 | 1 | Goal mode v1 – bounded foreground Matrix work across agent turns. |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 14 | 0 | Per‑execution confirmation tier for high‑risk shell commands + allow/ask/deny policy. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 13 | 0 | Unified attachment architecture for web chat and channels. |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | 10 | 0 | Mixture‑of‑Agents (MoA) virtual model provider (recently closed/accepted). |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 10 | 0 | Decouple memory lifecycle policy from storage backends. |

**Underlying needs:** Durable multi‑turn objective pursuit, granular shell‑command security, cross‑interface media consistency, ensemble‑model support, and clean memory‑system architecture.

## 5. Bugs & Stability
| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **P0** | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | Gateway webhook handlers do not fail closed (WhatsApp Cloud, Linq, WATI) – unauthenticated messages dispatched to agent. | [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) adds authenticated ingress boundary. |
| **P1** | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | Knowledge graph lacks per‑agent attribution; any agent can read/mutate another’s knowledge (S0 security/data‑loss risk). | None yet. |
| **P1** | [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | Session/channel read+write tools lack per‑agent ownership scoping (sessions_list/history/send, discord_search) (S0 risk). | None yet. |
| **P2** | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | Verifiable‑intent evaluates constraints without verifying the credential chain. | May be addressed by [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744). |
| **Bug** | [#9758](https://github.com/zeroclaw-labs/zeroclaw/pull/9758) | Memory consolidation invents traits and speaks over a persona. | Fix in PR. |
| **Bug** | [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) | Stale provider refreshes mutate replacement sessions. | Fix in PR. |
| **Bug** | [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) | Tool‑call parser fails to recover invocations wrapped in `<tools>` tag. | Fix in PR. |

## 6. Feature Requests & Roadmap Signals
- **Goal mode v1** (#8303) – long‑horizon agent objectives.
- **Shell‑command confirmation tiers** (#7155) – granular security policy.
- **Unified attachment architecture** (#9488) – cross‑channel media consistency.
- **Mixture‑of‑Agents virtual provider** (#8568) – accepted; likely in next release.
- **Memory lifecycle decoupling** (#6850) – foundational memory improvement.
- **Session‑persistence contract ownership** (#9600) – coordination tracker.
- **Plugin‑owned Kanban board** (#8832) – agent work coordination.
- **Per‑model capability & context‑window config** (#7100) – provider integration.
- **WASM plugin lifecycle hooks** (#7822) – extensibility.
- **Replace React/Vite with Rust→Wasm** (#8132) – architectural shift.

**Predicted next‑release candidates:** MoA virtual provider (#8568), shell‑command policy tiers (#7155), memory lifecycle decoupling (#6850), session‑persistence contract (#9600), and A2A outbound client phase 1 (#9324).

## 7. User Feedback Summary
- **Security & Isolation:** Strong demand for per‑agent boundaries on knowledge graphs and session tools (#9647, #9646). Unauthenticated webhook dispatch is critical (#9565).
- **Reliability:** Memory consolidation artifacts and stale provider refreshes cause unpredictable behavior (#9758, #

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*