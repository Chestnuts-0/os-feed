# OpenClaw Ecosystem Digest 2026-08-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-01 01:52 UTC

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



# OpenClaw Project Digest — 2026‑08‑01

## 1. Today’s Overview
OpenClaw shows **high activity** with 500 issues and 500 PRs updated in the last 24 h. The project is actively triaging and resolving bugs (57 issues closed, 135 PRs merged/closed), but **no new release** was published today. With 443 open issues (many P1/P2), the project is in a **heavy maintenance phase**, focusing on stability, security, and session‑state reliability. Health is robust in terms of community engagement, but the backlog of unresolved regressions and resource‑leak issues signals ongoing technical debt.

## 2. Releases
*No new releases today.*

## 3. Project Progress
**Merged/Closed PRs (selected):**
- **#116396** – Strip orphaned `tool_use` blocks on mid‑turn abort.  
- **#111970** – Fix older completed replies stalling/vanishing when a follow‑up starts a long turn.  
- **#117145** – Refactor reply lifecycle state ownership for consistent session invariants.  
- **#117152** – Deliver Claude CLI `ask_user` prompts to the originating channel.  
- **#117151** – Clean attached Unix descendants on cancellation (prevent orphan child processes).  
- **#116957** – Redact `sig`, `x‑api‑key`, `x‑access‑token` in URLs and form bodies.  
- **#105029** – Revoke attach grants on session/agent deletion.  
- **#105374** – Show upgrade command for stale official plugin pins.  
- **#112961** – Send plain text (not Markdown source) to IRC channels.  
- **#116250** – Declare video modality for MiniMax‑M3.  
- **#105327** – Preserve tabs/newlines in prompt literal sanitization.  
- **#117128** – Preflight exec provider command paths before config acceptance.  
- **#117155** – Fix plugin doctor misreporting healthy when context engine is quarantined.  
- **#117156** – Surface Codex `apply_patch` failure cause in `lastToolError`.  
- **#117008** – Recover durable Matrix sends after response loss.  
- **#116175** – Allow named host roots for sandbox bind sources.  
- **#116168** – Fix onboard ignoring plugin auth choice without provider ID.  
- **#114678** – Stop advisory state‑dir skips from wedging gateway startup.  
- **#117147** – Pin compaction summarization to text‑only input (prevents huge context spikes).  

**Key Advances:** Improved session‑state recovery, tighter secret redaction, better plugin‑version feedback, and fixes for regression‑prone paths (auto‑reply, compaction, gateway start‑up).

## 4. Community Hot Topics
| Issue | Comments | 👍 | Focus |
|-------|----------|----|-------|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 16 | 0 | Realtime voice sessions retaining unbounded provider/consult state |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 15 | 4 | Masked secrets – prevent agent from accessing raw API keys |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 13 | 0 | Hardcoded user working‑path merged into release |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 13 | 1 | Telegram duplicate replies (regression after 5.20) |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) *(closed)* | 13 | 1 | amazon‑bedrock‑mantle lacks `discovery.enabled` gate |

**Underlying needs:** Security (secret exposure, accidental leaks), reliability (duplicate replies, state leaks), and trust (hardcoded paths). The high comment count on #10659 (4 👍) shows strong user demand for a **masked‑secrets system**.

## 5. Bugs & Stability
**P1/Critical Bugs (ranked by impact):**
1. **#116201** – Realtime voice state retention; no fix PR yet.  
2. **#115908** – Session transcript projection livelock under sustained writes (blocks main thread).  
3. **#114137** – Visible channel turns intermittently dispatch with no queued reply.  
4. **#85251** – Codex app‑server wedges after `turn/started` notification.  
5. **#87109** – Gateway heap grows to 1 GB+ at idle, causing cron silent failures.  
6. **#97616** – Unreaped hook/tool child processes (zombie accumulation).  
7. **#114211** – Matrix room agents loop on no‑reply output and stale session replay.  
8. **#114255** – Restart mid‑run leaves session `status=running`, Telegram spool retries forever.  
9. **#48810** – Compaction retry creates orphan fork in `parentId` chain.  
10. **#116418** – Ollama provider never selected as primary in 2026.7.1.  
11. **#109017** – Anthropic provider disappears from model picker; catalog never pulls new models.  
12. **#116868** *(closed)* – SQLite sessions falling back to frozen legacy JSONL and resurrecting completed tasks.  

**Regressions:** #86519 (Telegram duplicates), #51396 (clearUnboundScopes strips operator scopes), #77930 (Discord channel not loaded in 5.5.4‑beta.2/3), #116391 (WebChat history disappears on calendar day change), #116409 (inbound message written twice to transcript).  

**Fix PRs in progress:** Several closed‑issue PRs above address regressions; many P1 bugs still await maintainer review or live repro.

## 6. Feature Requests & Roadmap Signals
| Issue | Comments | 👍 | Request |
|-------|----------|----|---------|
| #10659 | 15 | 4 | Masked secrets – use API keys without exposing raw values |
| #13219 | 6 | 1 | Per‑model usage logging for cost tracking |
| #50798 | 6 | 0 | Visible agent‑to‑agent messaging for ACP thread‑bound sessions |
| #81913 | 6 | 1 | Stable plugin SDK surface for installed‑skill workflows |
| #88032 | 6 | 1 | Telegram quote/reply as a first‑class durable inbound contract |
| #37584 | 5 | 1 | Per‑agent tool settings (e.g., `tools.web.search.apiKey`) |
| #113251 | 10 | 0 | Image viewing in webchat file viewer |
| #10687 | 9 | 3 | Fully dynamic model discovery (OpenRouter + beyond) |
| #87325 | 8 | 1 | Support Azure Foundry GPT Realtime Talk via gateway relay |
| #9993 | 5 | 0 | `config:pre‑apply` hook for validating config changes |

**Predicted for next release:** Masked secrets (#10659), dynamic model discovery (#10687), and Telegram quote/reply durability (#88032) are high‑priority and likely to land in the next minor version. Per‑agent tool settings (#37584) and stable plugin SDK (#81913) are also strong candidates.

## 7. User Feedback Summary
**Pain points:**
- Accidental credential exposure and prompt‑injection attacks targeting API keys.
- Duplicate or lost messages on Telegram, Matrix, and Feishu.
- Session‑state corruption after restarts, compaction retries, or SQLite fallback.
- Memory leaks (gateway heap growth, zombie child processes) causing silent cron failures.
- Regressions in Discord channel loading, WebChat history persistence, and model provider selection.
- Hardcoded developer paths in released code (loss of trust).

**Satisfaction signals:**
- Active triage and many merged fixes show responsiveness.
- Community‑driven debugging (e.g., #86519, #116409) helps surface regressions quickly.
- Several feature requests have strong 👍 support, indicating clear user demand.

**Dissatisfaction:**
- Repeated regressions in session‑state handling and message delivery.
- Lack of documentation for newer features (e.g., dynamic model discovery).
- Some P1 bugs linger without maintainer review or live repro.

## 8. Backlog Watch
**Long‑open P1/P2 issues needing maintainer attention:**
- **#67419** – Session context bloat (20‑30% tokens wasted on bootstrap files).  
- **#53540** – Embedded runner “Network connection lost” when LLM generates large tool‑call parameters.  
- **#70903** – Persistent file‑based provider cooldown blocks user for hours after billing recovery.  
- **#47979** – Control UI Dashboard v2 freezes on Chrome 146.  
- **#74674** – Delivery layer concatenates multiple text content items (needs pick‑one policy).  
- **#42408** – Local+hybrid memory search quality unstable due to `extraPaths` drift.  
- **#116418** – Ollama provider never selected as primary.  
- **#109017** – Anthropic provider disappears from model picker.  

**Issues with `clawsweeper:needs‑maintainer‑review` tags** (dozens) indicate a large pool of bugs awaiting triage. Maintainers should prioritize **session‑state**, **memory‑leak**, and **delivery‑regression** categories to restore stability ahead of the next release.

---
*Data source: OpenClaw GitHub repository (issues & PRs updated 2026‑07‑31 to 2026‑08‑01).*

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date:** 2026-08-01 | **Analyst:** Agnes-2.0-Flash (Sapiens AI)

---

## 1. Ecosystem Overview

The 2026 open-source personal AI agent landscape is dominated by a **claw-family of derivative projects** (OpenClaw, NanoClaw, IronClaw, ZeroClaw, PicoClaw, NanoBot, Hermes Agent, CoPaw, LobsterAI, Moltis) built around shared but diverging architectures for channel connectivity, session state, and model routing. Activity is heavily concentrated in **stability hardening** — session-state reliability, secret redaction, cache correctness, and multi-tenant isolation emerge as the top cross-cutting concerns. A secondary wave of **deployment flexibility** demands (native runtime, K8s, Apple Container, Wasm plugins) signals a shift from prototype to production-readiness. The ecosystem is bifurcating: large, complex platforms (OpenClaw, IronClaw, Hermes) are absorbing technical debt from rapid feature growth, while smaller projects (PicoClaw, NanoClaw, Moltis) are differentiating through niche integrations and security hardening.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Releases (24h) | Open Issues | Health Score (1-10) |
|---------|-------------|-----------|---------------|----------------|-------------|---------------------|
| **OpenClaw** | 500 | 500 | 192 | 0 | 443 (heavy P1/P2) | 6.5 |
| **IronClaw** | 38 | 50 | 32 | 0 | ~15 flagged | 7.0 |
| **ZeroClaw** | 50 | 50 | 17 | 0 | ~12 flagged | 7.5 |
| **CoPaw** | 20 | 43 | 6 | 0 | ~10 flagged | 6.0 |
| **Hermes Agent** | 50 | 50 | 0 (all open) | 0 | ~8 flagged | 6.5 |
| **NanoBot** | 4 | 16 | 6 | 0 | 2 P1 open | 7.0 |
| **NanoClaw** | 8 | 10 | 4 | 0 | 1 High-sev | 6.5 |
| **LobsterAI** | 4 | 12 | 11 | 0 | 1 stale open PR | 7.0 |
| **Moltis** | 2 | 6 | 2 | 0 | 2 High-sev PRs | 6.5 |
| **PicoClaw** | 2 | 3 | 0 | 0 | 2 stale | 5.0 |
| **NullClaw** | 0 | 1 | 0 | 0 | 0 flagged | 5.5 |
| **TinyClaw** | 0 | 0 | 0 | 0 | N/A | 3.0 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | N/A | 3.0 |

*Health Score factors: issue closure velocity, PR merge rate, active maintainer triage, and release cadence.*

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Sheer scale:** 500 issues/PRs in 24h dwarfs every other project, indicating the largest user base and most intense real-world deployment pressure.
- **Depth of channel coverage:** Native support for Matrix, Telegram, IRC, Discord, Feishu, and Codex app-server — unmatched breadth.
- **Session-state maturity:** Refactored reply lifecycle ownership (#117145) and durable Matrix sends (#117008) show architectural investment in reliability.
- **Secret redaction** (#116957) and **plugin doctor accuracy** (#117155) address trust-critical gaps that many peers are still flagging.

**Technical approach differences:**
- OpenClaw is a **gateway-centric** architecture with Unix process management, channel adapters, and a plugin SDK — closest to a full agent platform.
- NanoBot and PicoClaw are **lighter-weight channel aggregators** with simpler session models.
- IronClaw is pursuing a **modular contract-extraction** approach (Wave 1 refactoring) for composability.
- ZeroClaw is **RFC-driven** with trait-based abstractions (`KeySource`, `ProviderErrorKind`) for pluggability.

**Community size comparison (proxy by 24h activity):**
OpenClaw ≈ Hermes Agent > IronClaw > CoPaw > NanoBot/NanoClaw/LobsterAI > Moltis/PicoClaw > NullClaw > TinyClaw/ZeptoClaw.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Flagging It | Specific Needs |
|-----------|---------------------|----------------|
| **Session-state reliability** | OpenClaw, Hermes Agent, NanoBot, CoPaw, ZeroClaw | Crash-recovery after restart, compaction correctness, transcript integrity, no silent data loss |
| **Secret/credential handling** | OpenClaw, NanoClaw, Hermes Agent, ZeroClaw, Moltis | Masked secrets (#10659), redaction at persistence boundary, KMS/typed key-source abstractions, prevent display spoofing |
| **Multi-tenant / multi-profile isolation** | OpenClaw, Hermes Agent, IronClaw, NanoClaw | Per-agent tool settings, profile routing, cross-user memory leaks, home-directory separation |
| **Channel delivery correctness** | OpenClaw, NanoBot, LobsterAI, ZeroClaw, CoPaw | Duplicate reply prevention, message deduplication, typing indicator reliability, quote/reply durability |
| **Memory / context compaction** | OpenClaw, ZeroClaw, Hermes Agent, CoPaw | Configurable compaction thresholds, model-window-aware truncation, durable memory vs. conversation separation |
| **Provider/model routing** | OpenClaw, NanoBot, Hermes Agent, Moltis | Dynamic model discovery, per-session model switching, provider error classification, fallback chains |
| **Deployment flexibility** | NanoClaw, Moltis, ZeroClaw, LobsterAI | Native/runtime-less modes, K8s support, Apple Container, Wasm plugins, no-Docker execution |
| **Observability & tracing** | ZeroClaw, IronClaw, Hermes Agent | OTel correlation IDs, per-model usage logging, session audit trails |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | ZeroClaw | NanoBot | Hermes Agent | NanoClaw | PicoClaw |
|-----------|----------|----------|----------|---------|--------------|----------|----------|
| **Architecture** | Gateway + channel adapters + plugin SDK | Modular contract-based (Reborn) | RFC-driven trait abstractions | SQLite session storage, channel-focused | Multiplex gateway, multi-profile | Minimalist, security-first | Embedded, RISC-V focus |
| **Target user** | Power users, multi-channel operators | Enterprise/SaaS multi-tenant | Security-conscious operators | Individual users, Weixin/Slack | Local inference + multi-profile | K8s/container deployments | IoT/edge devices |
| **Differentiator** | Deepest channel coverage; mature plugin ecosystem | Hosted MCP + skill-routing by model | KeySource abstraction + goal mode | SQLite migration; Weixin resilience | MLX/oMLX local inference; Discord voice | Container runtime flexibility | Simplicity; model fallback chains |
| **Weakness** | P1/P2 backlog; session-state regressions | Cross-user isolation bugs; cache correctness | RFC decision bottleneck; unbounded subagent fan-out | Long-open feature PRs; platform gaps | Security backlog; profile routing gaps | Docker dependency; silent Telegram failures | Stale issues; low maintainer velocity |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating (high velocity, active triage):**
- **OpenClaw** — 192 items resolved/24h, but heavy maintenance burden. Technical debt visible in P1 backlog.
- **IronClaw** — 32 PRs merged/24h on Wave 1 refactoring; balanced feature/break-fix cadence.
- **ZeroClaw** — 17 PRs merged/24h; RFC-driven with active maintainer decision queue (#8692).

**Tier 2 — Steady development (moderate velocity, focused scope):**
- **Hermes Agent** — 50 issues/PRs but all open; high contributor engagement but slow merge rate.
- **NanoBot** — 6 PRs merged/24h; SQLite migration is a significant architectural step.
- **CoPaw** — 6 PRs merged/24h; stabilizing after AgentScope 2.0 migration.
- **LobsterAI** — 11 PRs merged/24h; UX polish focus, cron yield bug pending.
- **NanoClaw** — 4 PRs merged/24h; security hardening active but Telegram pairing bug urgent.

**Tier 3 — Low velocity / stabilizing (limited recent output):**
- **Moltis** — 2 PRs merged/24h; security PRs need review.
- **PicoClaw** — 0 merged/24h; 2 stale issues, 3 PRs in review.
- **NullClaw** — Near-quiet; 1 provider PR open.

**Tier 4 — Inactive:**
- **TinyClaw, ZeptoClaw** — Zero activity in 24h.

---

## 7. Trend Signals

**1. Session state is the new battleground.** Every major project (OpenClaw, Hermes, NanoBot, CoPaw, ZeroClaw) reports session-state regressions — transcript corruption, compaction failures, restart crashes. The community is learning that **reliability under interruption** is harder than getting the first turn right. Projects that ship robust session recovery (SQLite with rollback, compaction with durable parentId chains) will gain trust.

**2. Security hardening is no longer optional.** Redaction gaps (Hermes #43666, 23 plaintext passwords), display spoofing (NanoClaw #2923), session fixation (Hermes #7484), arbitrary file writes (Moltis #1180), and `HERMES_WRITE_SAFE_ROOT` bypasses (#36645) are converging signals. The next release cycle will likely see **security audits and hardening patches** as a dominant category across projects.

**3. Deployment flexibility is a top-3 user demand.** NanoClaw's K8s/native runtime requests (#1184, #1732, #1225), Moltis's security-driven production evaluation, and ZeroClaw's Wasm plugin vision (#8135) all point to users wanting to **run agents without Docker as the default**. Apple Container (NanoClaw #2809), K8s-native, and bare-metal modes are the next frontier.

**4. Memory architecture is maturing beyond simple compaction.** ZeroClaw's RFC for separating conversation history from agent-curated memory (#9048), OpenClaw's compaction-in-a-box (#117147), and CoPaw's Auto-Memory flush ordering (#6592) show the ecosystem is moving toward **first-class memory lifecycle management** — not just truncation, but intentionality about what persists and what expires.

**5. Provider and model routing demand per-session granularity.** NanoBot's per-session model switching request (#5198), OpenClaw's dynamic model discovery (#10687), and Moltis's per-account operators list (#1170) indicate users expect **SaaS-level configurability** — not just "pick a model at startup" but per-session, per-channel, per-agent routing with fallback chains.

**6. Local inference is a growing segment.** Hermes Agent's MLX/oMLX issues (#52261) and OpenClaw's Ollama provider selection bug (#116418) show that local-first users are a distinct cohort with different failure modes (resource 400s misclassified as context overflow). Projects that serve local inference well will capture this segment.

---

*Report generated from community digests dated 2026-08-01. Health scores are composite indicators based on release velocity, issue closure rate, PR merge activity, and maintainer responsiveness.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-01

## 1. Today's Overview

NanoBot continues to demonstrate strong development momentum, with **20 GitHub events** (4 issues + 16 PRs) recorded in the last 24 hours. Activity is heavily weighted toward **stability and infrastructure improvements**: 6 PRs were merged/closed today, including a major session-storage migration from JSONL to SQLite, multiple Weixin channel fixes, and a Termux compatibility patch. Two **high-priority (p1)** bug-fix PRs remain open and awaiting review, signaling ongoing attention to session reliability. No new releases were published today.

---

## 2. Releases

*No new releases today.*

---

## 3. Project Progress

### Merged / Closed PRs Today

| PR | Type | Summary |
|---|---|---|
| [#5173](https://github.com/HKUDS/nanobot/pull/5173) | **feat** | Migrated session storage from JSONL files to SQLite (`sessions.db`), with JSONL retained as rollback backups. Transactional import on first startup. |
| [#5196](https://github.com/HKUDS/nanobot/pull/5196) | **fix** | Weixin: reloads persisted `account.json` state after session-pause expiry, resolving the `errcode -14` permanent-silence loop. |
| [#4223](https://github.com/HKUDS/nanobot/pull/4223) | **fix** | Weixin: another fix for the same session-expiry pause bug, addressing the root cause in `_poll_once()` where `_load_state()` was never called after wakeup. |
| [#5192](https://github.com/HKUDS/nanobot/pull/5192) | **fix** | Slack: scopes thread-opener messages to their own session, preventing unrelated threads from sharing initial turns. |
| [#5193](https://github.com/HKUDS/nanobot/pull/5193) | **fix** | WebUI: preserves user scroll ownership near the bottom, preventing unwanted auto-scroll disruption. |
| [#5189](https://github.com/HKUDS/nanobot/pull/5189) | **fix** | Installs `tzdata` as a `zoneinfo` fallback on all platforms, resolving Termux and minimal-Linux host failures. |

### Key Advances
- **Session storage architecture** has been fundamentally upgraded to SQLite, improving reliability and query performance.
- **Weixin channel resilience** received two complementary fixes for session-expiry recovery, significantly reducing silent-failure risk.
- **WebUI UX** improved with scroll-behavior fixes and performance optimizations for session listing.

---

## 4. Community Hot Topics

| # | Type | Title | Comments | 👍 | Link |
|---|---|---|---|---|---|
| #5195 | Issue | Weixin QR re-login overwrites token → errcode -14 | 2 | 0 | [#5195](https://github.com/HKUDS/nanobot/issues/5195) |
| #5198 | Issue | Cannot change models in a specific session without full reconfiguration | 0 | 0 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) |
| #5190 | Issue | Module script loading fails with MIME type "text/plain" | 0 | 0 | [#5190](https://github.com/HKUDS/nanobot/issues/5190) |
| #5187 | Issue | `nanobot` doesn't work in Termux (timezone) | 0 | 0 | [#5187](https://github.com/HKUDS/nanobot/issues/5187) |

**Analysis:** The top-discussed issue (#5195, 2 comments) centers on Weixin session recovery after QR re-login — a pain point for users who rely on personal WeChat as a channel. Issue #5198 reflects a growing demand for **per-session model selection**, a feature standard in competing SaaS AI UIs. Issue #5190 and #5187 both highlight **platform compatibility gaps** (Windows MIME types, Termux minimal environments), suggesting the project is expanding beyond its original Linux/desktop footprint.

---

## 5. Bugs & Stability

### Closed Today
| Severity | Bug | Fix PR | Link |
|---|---|---|---|
| **p2** | Weixin `errcode -14` after QR re-login → 60-min pause loop | [#5196](https://github.com/HKUDS/nanobot/pull/5196), [#4223](https://github.com/HKUDS/nanobot/pull/4223) | [#5195](https://github.com/HKUDS/nanobot/issues/5195) |
| **p2** | Termux timezone validation failure | [#5189](https://github.com/HKUDS/nanobot/pull/5189) | [#5187](https://github.com/HKUDS/nanobot/issues/5187) |

### Open Today
| Severity | Bug | Link |
|---|---|---|
| **p1** | Malformed persisted session summary crashes `AutoCompact.prepare_session()` | [#5201](https://github.com/HKUDS/nanobot/pull/5201) |
| **p1** | `wait_for` targets lost across response truncation in `write_stdin` | [#5200](https://github.com/HKUDS/nanobot/pull/5200) |
| **p2** | WebUI JS modules fail to load on Windows (MIME `text/plain`) | [#5191](https://github.com/HKUDS/nanobot/pull/5191) ← fixes [#5190](https://github.com/HKUDS/nanobot/issues/5190) |
| **p2** | Slack thread openers share wrong session scope | — (fixed in [#5192](https://github.com/HKUDS/nanobot/pull/5192), merged) |

**Assessment:** Stability is the dominant theme today. Two **p1** session-related bugs remain open but have active fix PRs. The Weixin session-expiry bug had **two separate fix PRs** merged, indicating urgency. The SQLite migration (#5173) may introduce new edge cases worth monitoring.

---

## 6. Feature Requests & Roadmap Signals

| PR | Feature | Priority | Link |
|---|---|---|---|
| #5197 | **DeepSeek Responses API** support — route `deepseek-v4-flash` through native Responses API while keeping other models on Chat Completions | p1 | [#5197](https://github.com/HKUDS/nanobot/pull/5197) |
| #5184 | **Quick Chat & Temporary Chat** — persistent Quick Chat as first-class WebUI entry; opt-in ephemeral Temporary Chat with in-memory history | — | [#5184](https://github.com/HKUDS/nanobot/pull/5184) |
| #1565 | **Session management CLI** — export, import, search, stats, and delete commands | — | [#1565](https://github.com/HKUDS/nanobot/pull/1565) |
| #1319 | **`nanobot skill status`** CLI command for diagnosing skill availability | — | [#1319](https://github.com/HKUDS/nanobot/pull/1319) |

**Prediction:** The **DeepSeek Responses API** integration (p1) and **Quick/Temporary Chat** are strong candidates for the next release. The session management CLI (#1565) and skill status command (#1319) have been open since March/February respectively and signal sustained community demand for better observability and workflow control.

---

## 7. User Feedback Summary

| Theme | Signal | Source |
|---|---|---|
| **Weixin reliability** | Session expiry causes permanent silence; users cannot recover without re-scanning | #5195, #4223 |
| **Per-session model switching** | Users expect Cloud SaaS-level model selection per chat, not global-only | #5198 |
| **Platform portability** | Termux (Android) and Windows users hit environment-specific blockers (timezone, MIME types) | #5187, #5190 |
| **WebUI UX friction** | Auto-scroll interferes with manual reading; session-list performance degrades at scale | #5193, #5194 |
| **Session management** | Long-standing demand for export/import/search capabilities | #1565 |
| **Skill diagnostics** | Users install skills but lack visibility into why they fail | #1319 |

**Satisfaction signal:** Mixed. The project is actively addressing critical bugs (Weixin, Termux), but several **long-open feature gaps** (session management, per-session model switching) suggest the maintainer team is prioritizing stability over new features at this cycle.

---

## 8. Backlog Watch

| # | Type | Created | Days Open | Link | Note |
|---|---|---|---|---|---|
| #1565 | feat | 2026-03-05 | ~149 | [#1565](https://github.com/HKUDS/nanobot/pull/1565) | Session export/import/search/stats — high community demand, no merge signal |
| #1319 | feat | 2026-02-28 | ~154 | [#1319](https://github.com/HKUDS/nanobot/pull/1319) | `skill status` CLI — 5+ months open, no maintainer response |
| #1656 | fix | 2026-03-07 | ~146 | [#1656](https://github.com/HKUDS/nanobot/pull/1656) | String schema `None` validation — small fix, long dormant |
| #5198 | issue | 2026-07-31 | 1 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Per-session model switching — fresh, no fix yet, likely next-cycle feature |

**Recommendation:** Maintainers should prioritize reviewing the three long-open PRs (#1565, #1319, #1656). The session management feature (#1565) in particular has significant user demand and could complement the new SQLite backend (#5173) effectively.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-01

## 1. Today's Overview

Hermes Agent shows sustained high activity with 50 issues and 50 PRs updated in the last 24 hours, all currently open — indicating a heavy influx of same-day contributions and bug reports. No new releases were published today, so all activity revolves around the current main branch. The project is actively addressing a cluster of session-state and profile-routing bugs, alongside provider-specific issues (MiniMax-M3, Azure Foundry, Matrix streaming, Codex deduplication). Security and compatibility sweepers are frequently tagged, suggesting the maintainer team is actively triaging risk before the next release.

## 2. Releases

*No new releases published today.*

---

## 3. Project Progress

**PRs opened/updated today (2026-08-01):**

| PR | Summary |
|---|---|
| [#75779](https://github.com/NousResearch/hermes-agent/pull/75779) | Fix: preserve MiniMax-M3 thinking blocks on `/anthropic` replay (closes #75725) |
| [#75777](https://github.com/NousResearch/hermes-agent/pull/75777) | Fix: typed `provider/model` prefix now correctly switches providers |
| [#75776](https://github.com/NousResearch/hermes-agent/pull/75776) | Fix: enable progressive Matrix response edits (runtime adaptation of #58787) |
| [#75773](https://github.com/NousResearch/hermes-agent/pull/75773) | Fix: strip mismatched-Python-version site-packages from `sys.path` at bootstrap |
| [#75774](https://github.com/NousResearch/hermes-agent/pull/75774) | Fix: remove dead `voice.record_key` field from Desktop Voice settings (closes #40855) |
| [#75770](https://github.com/NousResearch/hermes-agent/pull/75770) | Refactor: extract session-resume auth into `GatewayResumeAuthorizationMixin` |
| [#75771](https://github.com/NousResearch/hermes-agent/pull/75771) | Fix: poll-loop guard + orphaned-pipe drain (salvages #34711) |
| [#75767](https://github.com/NousResearch/hermes-agent/pull/75767) | Fix: use UUID for cross-session image upload filename uniqueness (closes #75761) |
| [#75760](https://github.com/NousResearch/hermes-agent/pull/75760) | Fix: bound and persist tool results consistently across all execution paths |
| [#75764](https://github.com/NousResearch/hermes-agent/pull/75764) | Feature: add MiniMax image-01 and StepFun step-image-edit-2 backends |
| [#75768](https://github.com/NousResearch/hermes-agent/pull/75768) | *(Issue only — Telegram typing indicator regression)* |

**Previously open PRs advancing today:**
- [#75325](https://github.com/NousResearch/hermes-agent/pull/75325) — Discord conservative voice barge-in (opt-in)
- [#75775](https://github.com/NousResearch/hermes-agent/pull/75775) — Stream TTS into Discord voice channels while model is still writing
- [#75191](https://github.com/NousResearch/hermes-agent/pull/75191) — Named custom Codex app-server providers
- [#69457](https://github.com/NousResearch/hermes-agent/pull/69457) — Codex app-server final preview deduplication
- [#71723](https://github.com/NousResearch/hermes-agent/pull/71723) — Stop unsigned skills-index from installing dangerous skills as builtin

---

## 4. Community Hot Topics

**Most commented / most engaged issues:**

1. **[Issue #52261](https://github.com/NousResearch/hermes-agent/issues/52261)** — *Provider memory/resource 400s misclassified as `context_overflow` → destructive compress/reset loop* (6 comments)
   - Critical for local-inference users on MLX/oMLX. A misclassified 400 triggers an infinite compression loop, effectively corrupting sessions. High pain for the growing local-first user base.

2. **[Issue #75598](https://github.com/NousResearch/hermes-agent/issues/75598)** — *Issue with updates: multiple gateways conflicting across profiles* (5 comments)
   - Profile isolation and multi-gateway stability remains a recurring friction point on Windows/Desktop.

3. **[Issue #72776](https://github.com/NousResearch/hermes-agent/issues/72776)** — *Session workspace hijacked to unrelated git repo* (5 comments)
   - Cross-contamination of session working directories is a data-integrity concern, especially for users managing multiple projects.

4. **[Issue #43666](https://github.com/NousResearch/hermes-agent/issues/43666)** — *Redaction gaps at persistence boundary* (4 comments, split from #43083)
   - Security-critical: 23 plaintext password hits found in `state.db` per audit. Ongoing persistence-boundary redaction gaps.

5. **[Issue #20717](https://github.com/NousResearch/hermes-agent/issues/20717)** — *Dynamic Context Pruning* (4 comments, 2 👍)
   - Community request for proactive context management rather than reactive compression. Signals demand for smarter long-session handling.

**Underlying needs:** The dominant themes are **session state integrity**, **multi-profile isolation**, and **local-inference reliability**. Users are pushing Hermes harder in resource-constrained and multi-tenant configurations, exposing gaps in state management and profile routing.

---

## 5. Bugs & Stability

**Critical / High severity:**

| Issue | Severity | Summary | Fix PR |
|---|---|---|---|
| [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) | P2 · `risk-session-state` | MLX/oMLX 400s misclassified as `context_overflow` → destructive compress/reset loop | — |
| [#72776](https://github.com/NousResearch/hermes-agent/issues/72776) | P1 · `risk-session-state` | Session workspace hijacked to unrelated git repo | — |
| [#66392](https://github.com/NousResearch/hermes-agent/issues/66392) | P2 | Linux/X11 `computer_use` CUA pointer crashes entire KDE Plasma session | — |
| [#7484](https://github.com/NousResearch/hermes-agent/issues/7484) | P2 · security | Session fixation via predictable SHA256-derived session IDs | — |
| [#36645](https://github.com/NousResearch/hermes-agent/issues/36645) | P2 · security | `terminal`/`execute_code` bypasses `HERMES_WRITE_SAFE_ROOT` | — |
| [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) | P2 · security | Redaction gaps: tool output dumps, compaction blocks, DB URIs leak secrets | — |

**Medium severity (fix PRs exist or in-flight):**

| Issue | Summary | Fix PR |
|---|---|---|
| [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) | MiniMax-M3 thinking stops after first tool-call turn | [#75779](https://github.com/NousResearch/hermes-agent/pull/75779) |
| [#75768](https://github.com/NousResearch/hermes-agent/issues/75768) | Telegram typing indicator stuck indefinitely (regression in v0.19.0) | — |
| [#75761](https://github.com/NousResearch/hermes-agent/issues/75761) | Same-profile desktop sessions overwrite image uploads in same second | [#75767](https://github.com/NousResearch/hermes-agent/pull/75767) |
| [#75684](https://github.com/NousResearch/hermes-agent/issues/75684) | `/memory` and `/skills` use default profile instead of routed profile in multiplex gateway | — |
| [#73060](https://github.com/NousResearch/hermes-agent/issues/73060) | Gateway `/stop` discards only queue head; FIFO overflow runs anyway | — |
| [#70077](https://github.com/NousResearch/hermes-agent/issues/70077) | Restore checkpoint fails with "session not found" after stop + edit | — |
| [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) | Update process destabilizes multi-gateway profile setup | — |
| [#75724](https://github.com/NousResearch/hermes-agent/issues/75724) | Pre-update backup aborts when `HERMES_HOME` contains non-SQLite `.db` file | — |
| [#74248](https://github.com/NousResearch/hermes-agent/issues/74248) | Codex app-server delivers final `agentMessage` twice on Discord | [#69457](https://github.com/NousResearch/hermes-agent/pull/69457) |
| [#60637](https://github.com/NousResearch/hermes-agent/issues/60637) | Email gateway UID trimming replays old unread mail in large inboxes | — |

**Regression noted:** Telegram typing indicator (#75768) regressed in v0.19.0 despite prior PRs claiming fixes.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Description | Likelihood for Next Release |
|---|---|---|
| [#20717](https://github.com/NousResearch/hermes-agent/issues/20717) | Dynamic Context Pruning — proactive, first-class context management | Medium (needs decision) |
| [#69161](https://github.com/NousResearch/hermes-agent/issues/69161) | Collapse thinking/reasoning blocks by default (Desktop) — 1 👍 | High (small UX change) |
| [#19128](https://github.com/NousResearch/hermes-agent/issues/19128) | Add `qwen3.6-flash`, `deepseek-v4-flash`, `deepseek-v4-pro` model entries | High (catalog addition) |
| [#75737](https://github.com/NousResearch/hermes-agent/issues/75737) | Per-subagent toolset restriction in `delegate_task` — 4 comments, closed | Medium (needs decision) |
| [#75325](https://github.com/NousResearch/hermes-agent/pull/75325) | Discord conservative voice barge-in | Medium-High (PR already open) |
| [#75775](https://github.com/NousResearch/hermes-agent/pull/75775) | Stream TTS into Discord voice channels live | Medium-High (PR already open) |
| [#70663](https://github.com/NousResearch/hermes-agent/pull/70663) | Vertex AI API key (Express Mode) auth | Medium (PR open, needs decision) |
| [#75764](https://github.com/NousResearch/hermes-agent/pull/75764) | MiniMax image-01 + StepFun step-image-edit-2 backends | High (PR open, auto-registers) |
| [#73990](https://github.com/NousResearch/hermes-agent/issues/73990) | Preserve scroll position when sending message while reading history (Desktop) | Medium |
| [#69203](https://github.com/NousResearch/hermes-agent/issues/69203) | Discord outbound `@Name` → `<@id>` mention resolution | Medium |

---

## 7. User Feedback Summary

**Pain points:**
- **Local inference users** on MLX/oMLX are hitting a destructive loop where resource-400 errors are misclassified as context overflow (#52261). This is a high-friction bug for the local-first community.
- **Multi-profile / multiplex gateway users** report persistent isolation failures: workspace hijacking (#72776), `/memory` and `/skills` ignoring routed profiles (#75684), and update conflicts across profiles (#75598). Profile routing is a clear maturity gap.
- **Desktop users** experience UX friction: accidental composer drag/pop-out during text selection (#70422), scroll-jump on message send (#73990), and cross-session image upload collisions (#75761).
- **Security-conscious users** flag persistent redaction gaps at the persistence boundary (#43666) and session fixation risk via predictable session IDs (#7484). The `HERMES_WRITE_SAFE_ROOT` bypass via `terminal` (#36645) is also concerning.
- **Discord voice users** want barge-in and live TTS streaming — both have PRs open (#75325, #75775), indicating strong community demand.

**Satisfaction signals:** The volume of same-day PRs (11 opened on 2026-08-01 alone) and responsive maintainer triage (sweeper tags, split issues, delegation) suggests an active and responsive project. However, the density of P1/P2 bugs around session state and profile routing indicates these areas need stabilization before a major release.

---

## 8. Backlog Watch

| Issue | Age | Why It Needs Attention |
|---|---|---|
| [#7484](https://github.com/NousResearch/hermes-agent/issues/7484) | Open since 2026-04-11 (≈4 months) | Session fixation via deterministic SHA256 session IDs — security-critical, no fix PR yet |
| [#36645](https://github.com/NousResearch/hermes-agent/issues/36645) | Open since 2026-06-01 (≈2 months) | `terminal`/`execute_code` bypasses `HERMES_WRITE_SAFE_ROOT` — security boundary gap |
| [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) | Open since 2026-06-10 (≈2 months) | Redaction gaps at persistence boundary — 23 plaintext password hits in audit |
| [#20717](https://github.com/NousResearch/hermes-agent/issues/20717) | Open since 2026-05-06 (≈3 months) | Dynamic Context Pruning — `needs-decision`, high community interest (2 👍) |
| [#66392](https://github.com/NousResearch/hermes-agent/issues/66392) | Open since 2026-07-17 (≈2 weeks) | KDE Plasma crash via `computer_use` CUA pointer — upstream cua-driver issue #2304 referenced, needs Hermes-side mitigation |
| [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) | Open since 2026-06-25 (≈2 months) | Destructive compress/reset loop for local MLX inference — no fix PR, high user impact |
| [#75684](https://github.com/NousResearch/hermes-agent/issues/75684) | Open since 2026-07-31 (1 day) | Multiplex `/memory` and `/skills` use default profile — likely to affect many multi-profile deployments |
| [#73060](https://github.com/NousResearch/hermes-agent/issues/73060) | Open since 2026-07-28 (4 days) | Gateway `/stop` only discards queue head — FIFO overflow bug with `risk-message-delivery` sweeper |

**Key takeaway:** The security backlog (#7484, #36645, #43666) is the most concerning — three open security issues spanning 2–4 months without resolved PRs. The session-state and profile-routing bugs (#52261, #75684, #73060) also represent systemic stability risks that should be prioritized before the next release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-01

## 1. Today's Overview
PicoClaw shows moderate ongoing activity with 2 open issues and 3 open pull requests updated in the last 24 hours and no new releases. Development is concentrated on channel support expansion (Simplex, DelteChat refactoring) and model fallback configurability, while two user-reported issues flag IRC message handling and CPU performance concerns. The project appears to be in a steady incremental-development phase with no release-cycle activity this period.

## 2. Releases
No new releases were published.

## 3. Project Progress
No PRs were merged or closed today. Three open PRs remain under review:

- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)** — Refactors the DelteChat integration, removing legacy features and hard-coded data, and adding full DelteChat section documentation. This represents a meaningful cleanup effort that should improve maintainability.
- **[PR #3193](https://github.com/sipeed/picoclaw/pull/3193)** — Adds a new Simplex channel type, expanding PicoClaw's messaging protocol support.
- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** — Introduces a configurable default fallback chain for AI models, persisted through the backend API.

## 4. Community Hot Topics
- **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — *Better support for long messages in IRC.* The user reports that IRCv3 messages exceeding 512 bytes are split by clients and not reassembled by PicoClaw into a single coherent message. With 2 comments and no reactions yet, this signals a growing need for proper IRC long-message handling as users adopt IRCv3 extensions.
- **[Issue #3292](https://github.com/sipeed/picoclaw/issues/3292)** — *High CPU usage when the chat input box is focused.* Running PicoClaw 0.3.1 on Debian/Linux x64 with Firefox and the deepseek-v4-flash model, the user reports noticeable CPU spikes when the input field is active. This issue is marked stale but remains open, suggesting a recurring usability concern.
- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** — The configurable model fallback chain addresses a practical need for users who rely on multiple AI providers and want automatic failover, reflecting increasing sophistication in deployment configurations.

## 5. Bugs & Stability
- **[Issue #3292](https://github.com/sipeed/picoclaw/issues/3292)** — **Severity: Medium.** High CPU usage when the chat input box is focused in the web UI (Firefox on Debian). No fix PR is currently linked. This appears to be a performance regression or optimization gap rather than a crash, but it directly impacts user experience during active chat sessions.
- **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — **Severity: Low-Medium.** IRC long-message fragmentation is a functional limitation rather than a crash. No fix PR exists yet.

No critical crashes or regressions were reported today.

## 6. Feature Requests & Roadmap Signals
- **IRCv3 long-message reassembly** (Issue #3287) — Users expect PicoClaw to handle IRC's 512-byte split natively, especially with IRCv3 capabilities. Likely to surface again as IRC adoption grows.
- **Simplex channel support** (PR #3193) — Actively in review; if merged, this would be a notable expansion into privacy-focused messaging.
- **Configurable model fallback chains** (PR #3200) — Directly addresses multi-provider resilience. Strong roadmap signal; likely candidate for inclusion in the next release if review completes.
- **DelteChat refactoring** (PR #3222) — Cleanup and documentation improvement, suggesting a maintenance push for the DelteChat module.

## 7. User Feedback Summary
Users are engaging with PicoClaw in production-like settings (Debian/x64, Firefox, deepseek-v4-flash) and encountering both performance and protocol-limitation issues. The CPU spike on input focus (Issue #3292) is a clear pain point for daily users. The IRC long-message issue (Issue #3287) reflects a gap between IRC protocol realities and PicoClaw's message parsing logic. Overall sentiment appears constructive — users are reporting specifics with environment details and use cases, and the project is responding with feature PRs rather than dismissing concerns.

## 8. Backlog Watch
- **[Issue #3292](https://github.com/sipeed/picoclaw/issues/3292)** — Marked as **stale** despite being a real user-facing performance bug. Needs maintainer attention to either triage with a fix timeline or close with acknowledgment.
- **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — Open for ~10 days with 2 comments but no response from maintainers. IRC message handling is a known protocol limitation that could benefit from a roadmap commitment.
- **[PR #3193](https://github.com/sipeed/picoclaw/pull/3193)** — Open since 2026-06-27 (over a month). Simplex channel support is a notable feature that has been awaiting review for an extended period.
- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)** — Open since 2026-07-03. The DelteChat refactor is important for code health but has seen no reviewer activity.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-01

## 1. Today's Overview

NanoClaw continues steady development activity with 8 open issues and 10 pull requests actively tracked in the last 24 hours. No new releases were published today, but 4 PRs were merged or closed, including a critical security hardening fix and a release-path restoration. The project is healthy: community engagement is high on container runtime flexibility, channel integrations, and security hardening, while a few high-severity bugs around Telegram pairing and display spoofing require maintainer attention.

## 2. Releases

No new releases were published in the last 24 hours. PR #3163 (closed) restored the v2.1.54 release path, which will likely appear in the next official release cycle.

## 3. Project Progress

**Merged / Closed Today:**

- **PR #3165** — *Codex/Copilot changes* (closed): General source updates, likely housekeeping or guideline compliance changes.
- **PR #3163** — *fix(release): restore the v2.1.54 release path* (closed): Resolved a release pipeline regression that had blocked the v2.1.54 publishing path. Critical for maintaining release cadence.
- **PR #1678** — *docs(skills): update voice transcription skills for Telegram + Linux* (closed): Expanded `use-local-whisper` to support Telegram in addition to WhatsApp, and updated related documentation.
- **PR #3076** — *feat(imessage): unified local+hosted adapter targeting spectrum-ts v11* (closed): Consolidated iMessage adapters into a unified implementation compatible with spectrum-ts v11, improving maintainability of the iMessage channel.

**Actively Open (advancing):**

- **PR #3164** — *Hosted iMessage (Photon)*: Supersedes #2999 with a working registration flow for hosted iMessage integration.
- **PR #2809** — *Apple Container runtime + remote OneCLI gateway*: Adds env-gated `CONTAINER_RUNTIME=container` support for macOS Apple Container with remote OneCLI gateway capability.
- **PR #3041** — *Dial channel adapter*: Adds SMS and AI voice call support via the Dial channel.
- **PR #2651** — *Security hardening for ask_user_question*: Validates response origin to prevent display spoofing (addresses Issue #2923).
- **PR #3161** — *Redact secrets from host structured logs*: Redacts credentials before they are written to `nanoclaw.log`.

## 4. Community Hot Topics

**Most discussed issues (by comments):**

1. **Issue #1184** — [Challenges deploying nanoclaw in restricted K8s environments (Sealos)](https://github.com/nanocoai/nanoclaw/issues/1184) — 3 comments, 1 👍
   - A user praises the minimalist architecture but hits friction deploying in sealed/restricted Kubernetes clusters. Signals a growing demand for non-Docker, K8s-native runtime support.

2. **Issue #1732** — [Native runner mode — bypass Docker for host-tool access](https://github.com/nanocoai/nanoclaw/issues/1732) — 3 comments
   - Requests direct host integration (tmux, headed browsers, macOS APIs) without full filesystem mounts. Aligns with the Apple Container runtime work in PR #2809 and K8s runtime request in #2354.

3. **Issue #1225** — [Run it without docker](https://github.com/nanocoai/nanoclaw/issues/1225) — 2 comments
   - Windows/Linux users without Docker express interest in a bare-metal or WSL-native execution mode. Ongoing need for deployment flexibility.

4. **Issue #2588 / #2589** — [Apple Container sync & hostname resolution issues](https://github.com/nanocoai/nanoclaw/issues/2588) / [host.docker.internal resolution](https://github.com/nanocoai/nanoclaw/issues/2589) — 1 comment each
   - Both by the same author; highlights that the Apple Container skill branch is stale and `host.docker.internal` doesn't resolve in Apple Container's microVM. PR #2809 directly addresses the runtime gap, but the hostname resolution issue remains open.

**Underlying theme:** The dominant community signal is **deployment flexibility** — users want NanoClaw to run beyond Docker (K8s pods, native, Apple Container, no-container environments). This is the #1 unblocker for production adoption.

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **High** | [#3162](https://github.com/nanocoai/nanoclaw/issues/3162) | Telegram pairing silently broken for entire process lifetime if boot-time `getMe` fails. No user-facing error. | None yet |
| **Medium** | [#2923](https://github.com/nanocoai/nanoclaw/issues/2923) | `ask_user_question` card can be defaced by forged click before origin authz. Display/integrity spoof (not auth bypass). | PR #2651 (open) |

No crashes or regressions reported today. The Telegram pairing bug (#3162) is the most urgent stability concern — a transient network issue during boot permanently locks users out with no diagnostic feedback.

## 6. Feature Requests & Roadmap Signals

| Request | Issue / PR | Signal Strength |
|---------|-----------|-----------------|
| Kubernetes container runtime for agent spawning | #2354 / PR not yet open | **Strong** — multiple related issues (#1184, #1225, #1732) point to the same need |
| Native host-mode runner (no Docker) | #1732, #1225 | **Strong** — 5+ comments across related issues; Apple Container PR (#2809) partially addresses macOS |
| Apple Container runtime support | PR #2809 (open) | **Moderate** — active PR, but bugs in #2588/#2589 suggest it's not yet production-ready |
| Dial channel (SMS + AI voice) | PR #3041 (open) | **Moderate** — new integration expanding channel surface |
| Hosted iMessage (Photon) | PR #3164 (open) | **Moderate** — unifies and extends iMessage support |

**Prediction:** The next release will likely include the restored v2.1.54 path (from PR #3163), the iMessage unification (PR #3076), and possibly early Apple Container support (PR #2809) if bugs are resolved. K8s-native runtime remains a strong roadmap candidate but hasn't seen a PR yet.

## 7. User Feedback Summary

**Satisfaction:**
- Users consistently praise NanoClaw's **minimalist, secure-by-design architecture** (Issue #1184: *"brilliant"*, *"lightweight, secure alternative to bloated frameworks"*).
- The skill-based extension model is well-received (multiple feature skill PRs merged).

**Pain Points:**
- **Docker dependency** is the top friction — users on restricted K8s (Sealos), macOS Apple Container, and bare-metal Linux/Windows environments feel blocked.
- **Silent failures** (Issue #3162) erode trust — a transient `getMe` failure silently disables pairing with no diagnostic.
- **Display spoofing vulnerability** (Issue #2923) raises security concerns around the interactive card system, even if it doesn't lead to auth bypass.
- **Stale skills** — the Apple Container skill branch is out of sync with mainline (Issue #2588), causing immediate failures on use.

## 8. Backlog Watch

| Issue / PR | Age | Risk |
|-----------|-----|------|
| [#1184](https://github.com/nanocoai/nanoclaw/issues/1184) — K8s/Sealos deployment | ~5 months | Production adoption blocker for enterprise users |
| [#1732](https://github.com/nanocoai/nanoclaw/issues/1732) — Native runner mode | ~4 months | Growing demand; no PR yet |
| [#1225](https://github.com/nanocoai/nanoclaw/issues/1225) — Run without Docker | ~5 months | Same family as #1732; no PR yet |
| [#2354](https://github.com/nanocoai/nanoclaw/issues/2354) — K8s container runtime | ~3 months | Feature request; no PR yet |
| [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) — Apple Container skill out of sync | ~3 months | Blocks a published skill; needs maintainer sync |
| [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) — `host.docker.internal` in Apple Container | ~3 months | Needs architectural decision (no `--add-host` support) |
| [#3162](https://github.com/nanocoai/nanoclaw/issues/3162) — Telegram pairing silent failure | 1 day | High severity, no fix yet — **needs immediate attention** |

**Top priority for maintainers:** Issue #3162 (Telegram pairing) is a user-facing reliability bug with no mitigation path. Issues #2588 and #2589 are blocking a published skill. The K8s/native runtime requests (#1184, #1732, #1225, #2354) represent the largest unmet demand and should be evaluated for roadmap inclusion.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026‑08‑01

## 1. Today's Overview
Activity on NullClaw is minimal today, with no issues updated and no new releases in the past 24 hours. A single open pull request (#981) introduces a new `grok‑cli` provider, extending the project’s supported AI back‑ends. The repository appears to be in a steady‑state phase, with no urgent bug fixes or community discussions driving immediate changes.

## 2. Releases
No new releases were published today.

## 3. Project Progress
No pull requests were merged or closed today. The only notable change is the open PR #981, which proposes an optional CLI‑based provider for xAI’s Grok, following the existing spawn‑per‑request pattern used by `codex‑cli`, `gemini‑cli`, and `claude‑cli`.

## 4. Community Hot Topics
- **PR #981** – [feat(provider): add grok‑cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981)  
  *Comments:* 0 | *Reactions:* 0  
  This is the only active item today. It addresses a clear user need to integrate xAI’s Grok CLI as a first‑class provider, aligning with the project’s modular provider architecture.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
- **xAI Grok CLI integration** (PR #981) – The proposed optional provider follows the project’s established pattern for CLI‑based AI back‑ends. If merged, it would likely ship in the next minor release, provided testing and documentation are completed.

## 7. User Feedback Summary
No new issues were opened today, so there is no fresh user feedback to summarize. The existing PR indicates ongoing demand for broader provider coverage, particularly for emerging or niche CLI tools.

## 8. Backlog Watch
No long‑unanswered issues or PRs are flagged for maintainer attention today. The repository backlog appears quiet, with the sole pending item being the open provider PR.

---
*Data sourced from GitHub activity for nullclaw/nullclaw on 2026‑08‑01.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-01

---

## 1. Today's Overview

IronClaw is in an intense development cycle, with **38 issues** and **50 PRs** updated in the last 24 hours. The project is mid-milestone on the "Reborn" target-architecture refactoring, with Wave 1 (WS1.1–WS1.7) being systematically landed through a stacked PR series. No new releases were published today. Activity is heavily concentrated on dependency contract extraction, cache/stability fixes, and a cluster of P0–P1 bugs related to the AI agent loop and prompt caching. Overall health is strong: 32 PRs merged/closed in 24h, with a balanced mix of refactors, features, and bugfixes.

---

## 2. Releases

**None today.** The most recent release activity was PR #5598 (closed 2026-08-01), which bumped `ironclaw_common` 0.4.2→0.5.0 (API-breaking), `ironclaw_safety` 0.2.2→0.2.3, and `ironclaw_skills` 0.3.0→0.4.0.

---

## 3. Project Progress

### Merged / Closed PRs

| PR | Author | Summary |
|---|---|---|
| [#6977](https://github.com/nearai/ironclaw/pull/6977) | BenKurrek | **WS1.3** — Extract `ironclaw_extension_contracts` from `host_api`, close dual import paths |
| [#6975](https://github.com/nearai/ironclaw/pull/6975) | BenKurrek | **WS1.2** — Extract `ironclaw_loop_contracts`, flip `ironclaw_agent_loop` onto it |
| [#6967](https://github.com/nearai/ironclaw/pull/6967) | BenKurrek | **WS1.1** — Complete turn vocabulary in `host_api`, retire turns shims |
| [#6930](https://github.com/nearai/ironclaw/pull/6930) | henrypark133 | **feat(extensions)** — Register hosted MCP servers; auto-detects no-auth, bearer, OAuth |
| [#6979](https://github.com/nearai/ironclaw/pull/6979) | BenKurrek | **docs** — Reconcile target-architecture docs with #6930 hosted-MCP registration |
| [#6908](https://github.com/nearai/ironclaw/pull/6908) | italic-jinxin | **fix(webui)** — Paginate admin users list (closed #6903) |
| [#4022](https://github.com/nearai/ironclaw/pull/4022) | zmanian | **fix(tools)** — HTTP response errors are recoverable, not run-aborting (regression fix from #4014) |
| [#3942](https://github.com/nearai/ironclaw/pull/3942) | zmanian | **refactor(trace)** — PilotAllowlist enum + caller-level error-branch tests |
| [#3952](https://github.com/nearai/ironclaw/pull/3952) | zmanian | **feat(filesystem)** — TOCTOU-hardened `LocalFilesystem` via `openat2`/`O_NOFOLLOW` |
| [#6932](https://github.com/nearai/ironclaw/pull/6932) | dependabot | Bumped 32 deps across `/` (async-trait, thiserror, uuid, etc.) |

### Open PRs Actively Advancing the Project

| PR | Author | Summary |
|---|---|---|
| [#6980](https://github.com/nearai/ironclaw/pull/6980) | BenKurrek | **WS1.4** — Extract `ironclaw_product_contracts`; land ChannelAdapter half |
| [#6982](https://github.com/nearai/ironclaw/pull/6982) | BenKurrek | **WS1.6 + WS1.7** — Narrow `ironclaw_common`, shed product→runner edge |
| [#6981](https://github.com/nearai/ironclaw/pull/6981) | BenKurrek | **WS1.5** — Consolidate sealed evidence minting behind witness grants |
| [#6917](https://github.com/nearai/ironclaw/pull/6917) | italic-jinxin | **fix(webui)** — Open workspace file links in authenticated previews |
| [#6906](https://github.com/nearai/ironclaw/pull/6906) | italic-jinxin | **fix** — Show only API-backed project data (remove fabricated metrics) |
| [#6780](https://github.com/nearai/ironclaw/pull/6780) | serrrfirat | **feat(reborn-ironhub)** — Deep-link register/install gateway + private manifest source |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | pranavraja99 | **fix(skills)** — Model chooses the skill, not a keyword scorer |
| [#6973](https://github.com/nearai/ironclaw/pull/6973) | serrrfirat | **perf** — Recover hosted Postgres API capacity regressed by #6696 |

---

## 4. Community Hot Topics

1. **Error Recoverability Epic [#6284](https://github.com/nearai/ironclaw/issues/6284)** — 15 comments. The highest-engagement issue in the dataset. The goal: every mid-run error must satisfy a recoverability contract (run survives, model sees it, cause + fix are communicated, model gets a turn, no non-success is reported). This signals that **reliability and resilience** are the top architectural concern for the Reborn release.

2. **Hermetic Testing Platform Epic [#6524](https://github.com/nearai/ironclaw/issues/6524)** — 4 comments. Asks the fundamental question: does every capability and journey have deterministic coverage? Reflects community demand for **verifiable correctness** over best-effort testing.

3. **Skill Discovery & Routing Epic [#6565](https://github.com/nearai/ironclaw/issues/6565)** — 2 comments, spawning scoped follow-up [#6941](https://github.com/nearai/ironclaw/issues/6941). The core problem: IronClaw does not reliably find, select, and activate the right skill. PR [#6938](https://github.com/nearai/ironclaw/pull/6938) directly addresses this by shifting skill selection from a keyword scorer to the model itself.

4. **CI Gate Tracking [#6963](https://github.com/nearai/ironclaw/issues/6963)** — 5 comments. Path-keyed CI gates that survived the WS10 refactoring. Eight discovered defects need resolution. Signals that the rapid refactoring cadence is creating **test infrastructure debt** that the team is actively tracking.

5. **Admin Agent Management Epic [#6578](https://github.com/nearai/ironclaw/issues/6578)** — 1 comment. Tenants need to create non-human subjects without inventing a second identity hierarchy. Points to **multi-tenant SaaS use cases** driving architectural decisions.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **P0** | [#6900](https://github.com/nearai/ironclaw/issues/6900) | Shared-channel default subject binding collapses all users into operator's memory namespace (cross-user memory leak) | — |
| **P0** | [#6986](https://github.com/nearai/ironclaw/issues/6986) | Cache: advertised tool array not byte-identical; mid-run promotion breaks cache | WIP — part of pi-harness P0 series (#6984–#6990) |
| **P0** | [#6985](https://github.com/nearai/ironclaw/issues/6985) | Cache: prompt prefix mutated across turns (nudges, timestamps, per-run memory) | WIP — same series |
| **P0** | [#6984](https://github.com/nearai/ironclaw/issues/6984) | Cache: missing explicit `cache_control` breakpoints in rig adapter + OAuth transport | WIP — same series |
| **P0** | [#6987](https://github.com/nearai/ironclaw/issues/6987) | Cache: no regression test pinning byte-identical prompt prefix | WIP — same series |
| **P1** | [#6989](https://github.com/nearai/ironclaw/issues/6989) | Token accounting: hybrid estimates from content reference string length, not actual content | WIP — pi-harness P1 series |
| **P1** | [#6988](https://github.com/nearai/ironclaw/issues/6988) | Compaction: context budget hardcoded to 128k instead of actual model window | WIP — pi-harness P1 series |
| **P1** | [#6990](https://github.com/nearai/ironclaw/issues/6990) | Compaction summarization pollutes prompt cache and session affinity | WIP — pi-harness P1 series |
| **P2** | [#6940](https://github.com/nearai/ironclaw/issues/6940) | IronHub skill CTA returns 404 across all skills | — |
| **P2** | [#6972](https://github.com/nearai/ironclaw/issues/6972) | New account email authentication not working | — |
| **P2** | [#6866](https://github.com/nearai/ironclaw/issues/6866) | Same home directory shared across all users; workspaces visible to others (security/privacy) | — |
| **P2** | [#6778](https://github.com/nearai/ironclaw/issues/6778) | Hosted-MCP tool catalogs published per extension ID, not per installation — cross-user metadata exposure | — |
| **P2** | [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL `thread_store_writes` p95 37–135s under tool-heavy stress post-#6696 | PR [#6973](https://github.com/nearai/ironclaw/pull/6973) in progress |

The **pi-harness cache series (#6984–#6990)** is the most significant active bug cluster, all P0/P1, targeting prompt-cache correctness and token-estimation accuracy. Four of the five P0 cache issues share a common root cause: non-deterministic prompt construction invalidating cache hits.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Summary | Likelihood for Next Release |
|---|---|---|
| [#6939](https://github.com/nearai/ironclaw/issues/6939) | Migration tool for legacy agent setup & memory (Hermes/Openclaw → IronClaw) | **High** — directly reduces switching costs; user demand is explicit |
| [#6983](https://github.com/nearai/ironclaw/issues/6983) | Add `hub` alias for `ironhub` CLI subcommand | **High** — trivial change, dashboard compatibility |
| [#6971](https://github.com/nearai/ironclaw/issues/6971) | Clarify "Tools" vs "Extensions" terminology | **Medium** — documentation/UX consistency; may land with next docs pass |
| [#6854](https://github.com/nearai/ironclaw/issues/6854) | Replace "Reborn" branding with "IronClaw 1.0" in extension descriptions | **Medium** — messaging alignment; low engineering cost |
| [#6962](https://github.com/nearai/ironclaw/issues/6962) | Synchronize Notion user journeys with executable E2E coverage | **Medium** — process improvement, not user-facing feature |

**Strong roadmap signal:** The entire Wave 1 refactoring series (WS1.1–WS1.7) is landing, which will establish the neutral-contract architecture the product tier depends on. Combined with the hosted MCP registration (#6930) and the skill-selection rewrite (#6938), the next release is shaping up around **a more modular extension system and model-driven skill routing**.

---

## 7. User Feedback Summary

- **Switching cost is a real barrier.** Issue [#6939](https://github.com/nearai/ironclaw/issues/6939) reports that legacy Hermes/Openclaw users face high migration costs due to missing setup/memory porting. Users explicitly state they "may not migrate" without this tool.
- **Cross-user isolation failures are eroding trust.** Issues [#6900](https://github.com/nearai/ironclaw/issues/6900) (memory namespace leak in shared channels), [#6866](https://github.com/nearai/ironclaw/issues/6866) (shared home directory across users), and [#6778](https://github.com/nearai/ironclaw/issues/6778) (MCP catalog cross-user exposure) all point to the same concern: **multi-tenant users cannot trust data isolation** on the current build.
- **Auth onboarding is broken for new accounts.** Issue [#6972](https://github.com/nearai/ironclaw/issues/6972) reports that email-based auth does not work after account creation — a critical first-impression bug.
- **IronHub is externally visible but broken.** The 404 on skill CTAs ([#6940](https://github.com/nearai/ironclaw/issues/6940)) and the "Reborn" vs "IronClaw 1.0" branding mismatch ([#6854](https://github.com/nearai/ironclaw/issues/6854)) suggest the public-facing layer is not being synced with internal refactoring.
- **Admin UX needs pagination.** Issue [#6903](https://github.com/nearai/ironclaw/issues/6903) (now fixed by [#6908](https://github.com/nearai/ironclaw/pull/6908)) reported that admin users list cannot load beyond 100 users — a scalability ceiling that affected operational users.

---

## 8. Backlog Watch

| Issue | Days Open | Why It Needs Attention |
|---|---|---|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | 13 | The recoverability epic is the highest-comment issue and blocks confidence in the Reborn release. No PR linked yet. |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | 10 | Hermetic testing platform has no linked PRs. Without it, regression risk for the ongoing refactoring is high. |
| [#6900](https://github.com/nearai/ironclaw/issues/6900) | 2 | P0 cross-user memory leak — production security issue with no fix PR yet. |
| [#6866](https://github.com/nearai/ironclaw/issues/6866) | 3 | P2 home-directory isolation bug — privacy concern in multi-tenant deployments. |
| [#6778](https://github.com/nearai/ironclaw/issues/6778) | 4 | P2 hosted-MCP cross-user metadata exposure. PR #6930 landed but this issue predates it and may not be fully resolved. |
| [#6978](https://github.com/nearai/ironclaw/issues/6978) | 1 | CI workflow dispatch structurally fails Tests (Reborn) roll-up despite zero real lane failures — blocks merge capacity. |
| [#6976](https://github.com/nearai/ironclaw/issues/6976) | 1 | Linux service install does not enable user lingering — blocks unattended/headless deployments. |
| [#6962](https://github.com/nearai/ironclaw/issues/6962) | 1 | Notion E2E coverage sync has no PR. Important for release-grade QA. |

---

**Bottom line:** IronClaw is executing a ambitious architectural refactoring (Wave 1) while managing a significant bug surface around cache correctness and multi-tenant isolation. The team is shipping fast on the refactor side (9 PRs merged/closed today) but has **no active fix PRs** for the three most critical user-facing bugs (#6900, #6866, #6940). Prioritizing those alongside the ongoing pi-harness cache fixes would improve release readiness significantly.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-08-01

## 1. Today's Overview

LobsterAI saw active maintenance today with 16 GitHub items updated in the past 24 hours — 4 issues closed and 12 PRs processed (11 merged, 1 still open). No new releases were published. Activity is concentrated on UI polish (sidebar UX improvements), OpenClaw runtime stability fixes, and minor bug squashing. The project remains in a steady maintenance cadence with strong contributor engagement, particularly from recurring authors like MaoQianTu and fisherdaddy.

---

## 2. Releases

No new releases were published today. The most recent release appears to have been **2026.7.31** (PR #2416), which has since been merged.

---

## 3. Project Progress

### Merged / Closed PRs (11)

| PR | Area | Summary |
|---|---|---|
| [#172](https://github.com/netease-youdao/LobsterAI/pull/172) | OAuth | Added Antigravity OAuth integration with proxy compatibility; new OAuth subsystem in main process + SQLite persistence |
| [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) | Renderer | Added copy-success feedback for site URLs and share codes |
| [#2416](https://github.com/netease-youdao/LobsterAI/pull/2416) | Release | Release/2026.7.31 branch merge |
| [#1308](https://github.com/netease-youdao/LobsterAI/pull/1308) | Cowork | Isolated home-screen input draft per agent, fixing cross-agent draft interference |
| [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) | UI/Sidebar | Added drag-handle to resize sidebar width (180px–480px range) — closes #1314 |
| [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | UI/Sidebar | Added `<kbd>` shortcut hints on sidebar buttons with macOS/Windows platform awareness — closes #1317 |
| [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | UI/Sidebar | Added skeleton loading state to session list, eliminating empty-state flash on boot — closes #1319 |
| [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) | Settings | Fixed overlay not dismissing when switching settings tabs (memory editor & model test modals) — closes #1307 |
| [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) | OpenClaw | Fixed aggregate cap rewriting unchanged tool-result history, restoring DeepSeek cache hit rates from ~57% to ~100% |
| [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) | Cowork/OpenClaw | Prevented BTW tool protocol leakage from side-chat results; preserved error metadata through gateway |
| [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) | OpenClaw | Kept live prompt tool-result history byte-stable across turns by passing `aggregateMaxCharsOverride=null` |

### Still Open (1)

- [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) — **fix(openclaw): cron yield descendant finalization** (open, stale). Addresses a critical bug where child agent completion events fail to drive parent agent continuation after `sessions_yield`. Covers parallel cron, serial cron, and normal session scenarios. Awaiting merge.

---

## 4. Community Hot Topics

The dominant theme today is **sidebar UX improvement**, with three related issues (all now closed) originating from the same contributor, **MaoQianTu**:

- **[Issue #1314](https://github.com/netease-youdao/LobsterAI/issues/1314)** → Resolved by PR #1315: Users reported the fixed 240px sidebar was inflexible across screen sizes and long session titles. The drag-handle solution (180px–480px) directly addresses this.
- **[Issue #1317](https://github.com/netease-youdao/LobsterAI/issues/1317)** → Resolved by PR #1318: Keyboard shortcuts (`Ctrl+N`, `Ctrl+F`) were invisible to users. The `<kbd>` badge with platform-aware symbol rendering (⌘/⌥ on macOS, Ctrl/Alt on Windows) solves the discoverability gap.
- **[Issue #1319](https://github.com/netease-youdao/LobsterAI/issues/1319)** → Resolved by PR #1320: The session list showed a brief "no sessions" flash on app launch before data loaded. The skeleton loading state with a `sessionsLoaded` flag now correctly distinguishes "loading" from "empty."

**Underlying need:** Users are increasingly demanding a more polished, professional UI experience. These three features — resizable panels, keyboard shortcut visibility, and proper loading states — are standard in mature productivity tools and signal LobsterAI maturing from a prototype to a production-quality application.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Status |
|---|---|---|---|
| **High** | [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) (open) | Cron yield descendant finalization bug: after `sessions_yield`, child agent completion events fail to resume parent agent execution. Affects parallel and serial cron sessions. | ⚠️ Open, stale — fix PR exists but unmerged |
| **Medium** | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) → PR [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) | Settings modals (memory editor, model connection test) remained mounted as full-window overlays after navigating to another tab, making the UI read-only. | ✅ Fixed |
| **Medium** | #2415 / #2413 | DeepSeek long-session cache hit rates dropped from ~100% to ~57% due to aggregate char cap rewriting stable history on every turn. | ✅ Fixed |
| **Low** | #2414 | BTW tool protocol leakage from side-chat results could expose internal tool markup. | ✅ Fixed |

**Stability assessment:** The most concerning open item is PR #2234, which addresses a correctness bug in the OpenClaw cron scheduling system. If a user runs parallel cron jobs with yielding, child completions may silently fail to drive progress. This should be prioritized for merge.

---

## 6. Feature Requests & Roadmap Signals

### Recently Delivered (from closed issues)
- **Resizable sidebar** (#1314) — now merged
- **Keyboard shortcut hints** (#1317) — now merged
- **Skeleton loading for session list** (#1319) — now merged
- **Per-agent input draft isolation** (#1308) — now merged
- **Antigravity OAuth support** (#172) — now merged

### Signal for Upcoming Priorities
- The cluster of sidebar UX improvements suggests the team is actively investing in **polish and accessibility** this cycle.
- The **Antigravity OAuth** integration (#172) indicates expanding provider compatibility is a current focus.
- PR #2234 (cron yield fix) being open and stale suggests **cron reliability** may see follow-up work once merged.

### Likely in Next Version
Given the momentum, expect continued sidebar refinements, expanded OAuth provider support, and OpenClaw runtime hardening (especially around yield/cron semantics) in the next release.

---

## 7. User Feedback Summary

- **Pain point — discoverability:** Users couldn't find keyboard shortcuts without digging into settings. The `<kbd>` badge solution (PR #1318) shows responsiveness to this.
- **Pain point — launch experience:** The empty-state flash on boot was confusing and suggested broken state. Skeleton loading (PR #1320) resolves this.
- **Pain point — rigidity:** Fixed sidebar width frustrated both small-screen and large-screen users. The drag-handle (PR #1315) directly addresses this.
- **Pain point — cache performance:** DeepSeek cache hit rates halved due to a regression in prompt assembly. The fix (PR #2413/#2415) restores ~100% hit rates, which is critical for long-session cost efficiency.
- **Satisfaction signal:** All four open issues from MaoQianTu were authored on 2026-04-02 but only updated/closed on 2026-07-31, suggesting they were held for batch integration — a sign of structured release management rather than neglect.

---

## 8. Backlog Watch

| Item | Author | Open Since | Concern |
|---|---|---|---|
| [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) — cron yield descendant finalization | btc69m979y-dotcom | 2026-06-30 | **High-priority bug fix** sitting unmerged for ~1 month. Affects cron job reliability. Labeled stale but functionally complete. |
| [#172](https://github.com/netease-youdao/LobsterAI/pull/172) — Antigravity OAuth | sysusugan | 2026-02-27 | Long-standing PR (5 months) now closed. Worth monitoring for integration regressions. |

**Recommendation:** The maintainers should prioritize merging PR #2234. It addresses a correctness bug in a core scheduling pathway with a complete test plan. The "stale" label appears to be a triage artifact rather than a reflection of quality.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-08-01

---

## 1. Today's Overview

Moltis (github.com/moltis-org/moltis) showed moderate activity over the last 24 hours with 2 issues and 6 pull requests updated. One issue was closed and one remains open; two PRs were merged/closed while four remain open and awaiting review. No new releases were published. The project's recent focus spans security hardening, Nostr/NIP-29 channel support, and memory backend diversification — indicating a healthy balance between maintenance and feature development.

---

## 2. Releases

No new releases were published in the reporting window.

---

## 3. Project Progress

**Merged / Closed today:**

- **[PR #1168](https://github.com/moltis-org/moltis/pull/1168)** — *feat(nostr): add NIP-29 group chat support for Buzz channels* (Author: penso). Closed/Merged. Extends `moltis-nostr` beyond NIP-01/NIP-04 to support NIP-29 group chat, enabling Moltis to participate in [Buzz](https://github.com/block/buzz) self-hosted Nostr relay workspaces as an equal agent member.
- **[PR #1176](https://github.com/moltis-org/moltis/pull/1176)** — *feat(web): add Markdown copy and session export* (Author: Jonesxq). Closed/Merged. Implements Markdown-preserving copy for assistant replies and a session-level "Save as Markdown" export action, including image references.

**Key advancement:** The community-closed feature request [#1131](https://github.com/moltis-org/moltis/issues/1131) (Add copy + export as Markdown) has been fulfilled by PR #1176, demonstrating responsive issue-to-PR flow.

---

## 4. Community Hot Topics

| Rank | Item | Type | Engagement |
|------|------|------|------------|
| 1 | [Issue #1131](https://github.com/moltis-org/moltis/issues/1131) — Add copy + export as Markdown | Enhancement (now closed) | 👍 1 |
| 2 | [PR #1179](https://github.com/moltis-org/moltis/pull/1179) — Verify node pairing signatures | Security fix (open) | — |
| 3 | [PR #1180](https://github.com/moltis-org/moltis/pull/1180) — Harden model and zip paths | Security fix (open) | — |
| 4 | [PR #1170](https://github.com/moltis-org/moltis/pull/1170) — Gate `/sh` and privileged tools behind per-account operators list | Security/Access (open) | — |

**Analysis:** Security and access control dominate the current discourse. Multiple PRs from contributor **tsauvajon** and **penso** target privilege escalation, arbitrary file write, and signature verification — suggesting the maintainer team is actively tightening the security posture ahead of broader adoption. The now-closed Markdown export issue (#1131) also ranked highly among community requests, reflecting strong user demand for content portability.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| 🔴 High | [PR #1180](https://github.com/moltis-org/moltis/pull/1180) — Harden model and zip paths | Arbitrary file write via malicious zip or HuggingFace repo, potentially overwriting config, credentials, or scripts and achieving code execution. | PR open, not yet merged |
| 🔴 High | [PR #1179](https://github.com/moltis-org/moltis/pull/1179) — Verify node pairing signatures | `node.pair.verify` allows callers to supply their own key/challenge instead of using the server-issued pending request, enabling unauthenticated node pairing. | PR open, not yet merged |
| 🟡 Medium | [Issue #1181](https://github.com/moltis-org/moltis/issues/1181) — Issue with GPT 5.6 Luna | Bug reported with GPT 5.6 Luna integration; full details truncated in source data. | No fix PR yet |
| 🟢 Low | [Issue #1131](https://github.com/moltis-org/moltis/issues/1131) — Missing Markdown copy/export | Feature gap (now resolved via PR #1176). | ✅ Fixed |

**Note:** Two high-severity security PRs (#1179, #1180) remain open and unmerged. Given their nature (arbitrary file write, broken auth), these represent the most critical stability risks currently awaiting maintainer review.

---

## 6. Feature Requests & Roadmap Signals

| Item | Type | Signal |
|------|------|--------|
| [PR #1158](https://github.com/moltis-org/moltis/pull/1158) — zvec vector database memory backend | Enhancement (open) | Community-driven experiment; feature-gated behind `zvec` cargo flag. Suggests roadmap interest in pluggable memory backends beyond defaults. |
| [PR #1168](https://github.com/moltis-org/moltis/pull/1168) — NIP-29 Buzz channel support | Enhancement (merged) | Nostr ecosystem integration is a confirmed direction; Buzz workspace support now live. |
| [PR #1170](https://github.com/moltis-org/moltis/pull/1170) — Per-account operators list | Enhancement (open) | Fine-grained role-based access control (RBAC) for channel commands and host tools. |

**Prediction:** The next release will likely include NIP-29 Buzz support, Markdown export, and the per-account operators access model. The zvec memory backend may ship as an optional feature flag if PR #1158 is merged. Security hardening from PRs #1179 and #1180 should also land before a stable release.

---

## 7. User Feedback Summary

- **Satisfaction signal:** The Markdown copy/export request (#1131) received positive community reception (👍 1) and was fulfilled within ~6 weeks — indicating good community responsiveness.
- **Pain point — Security trust:** Contributors tsauvajon raised two security PRs explicitly stating they want to use Moltis but need these fixes first. This signals that power users are evaluating Moltis for production/self-hosted deployment and are blocked by current auth/path validation gaps.
- **Pain point — GPT 5.6 Luna integration:** Issue #1181 reports a bug with the GPT 5.6 Luna model; full context is limited but suggests LLM provider compatibility remains a friction area.
- **Use case signal:** Nostr/Buzz integration (PR #1168) and vector memory backends (PR #1158) indicate users are deploying Moltis in multi-agent workspace and long-context memory scenarios.

---

## 8. Backlog Watch

| Item | Days Open | Concern |
|------|-----------|---------|
| [PR #1179](https://github.com/moltis-org/moltis/pull/1179) — Verify node pairing signatures | ~1 day | High-severity security fix; blocks production adoption for security-conscious users. |
| [PR #1180](https://github.com/moltis-org/moltis/pull/1180) — Harden model and zip paths | ~1 day | Arbitrary file write vulnerability; same concern as #1179. |
| [PR #1170](https://github.com/moltis-org/moltis/pull/1170) — Per-account operators list | ~6 days | Access control enhancement; still open. |
| [PR #1158](https://github.com/moltis-org/moltis/pull/1158) — zvec vector DB memory backend | ~15 days | Community experiment; longer review cycle expected for non-core feature. |
| [Issue #1181](https://github.com/moltis-org/moltis/issues/1181) — GPT 5.6 Luna bug | ~1 day | New bug; needs triage. |

**Recommended maintainer attention:** PRs #1179 and #1180 should be prioritized for merge given their direct impact on deployment security. PR #1170 is also time-sensitive as it gates privileged tool access. PR #1158 can remain in review longer as an optional feature.

---

*Data snapshot: 2026-08-01. Source: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw Project Digest — 2026‑08‑01

## 1. Today's Overview
CoPaw (QwenPaw) shows high daily activity with **20 issues** and **43 PRs** updated in the last 24 hours, though no new release was published. Development is heavily focused on stabilising the 2.0.1 desktop and backend after the AgentScope 2.0.4 migration, with multiple bug‑fix PRs merged today addressing UI freezes, memory‑compression gaps, and provider‑compatibility regressions. The project remains active but carries a notable backlog of open stability issues that suggest the current release cycle is still absorbing breaking changes from upstream dependencies.

## 2. Releases
**None** today. The latest published version remains **2.0.1**.

## 3. Project Progress
**Merged / closed PRs today (6):**
- **#6573** – Restores audio transcription for channel messages after the AgentScope 2.0 migration.
- **#6564** – Fixes the Dream/memory‑compression process missing early‑session events when context scrolls out.
- **#6592** – Ensures Auto‑Memory is flushed before Scroll context eviction, preventing data loss in daily memory files.
- **#6606** – Allows `read_file` to accept numeric‑string line ranges.
- **#6602** – Resolves session‑integrity issues (messages lost on mode/session switch, UI re‑rendering from scratch).
- **#6604** – Documents the ReMe self‑evolving knowledge‑base lifecycle in READMEs and memory docs.

**Key open PRs advancing features or fixes:**
- **#6617** – Honors `Retry‑After` cap on streaming retry path.
- **#6203** – Bounds and hides the Windows `tasklist` liveness probe.
- **#6611** – Aligns Scroll context and memory with AgentScope lifecycle.
- **#6528** – Fixes systemic `agent.json` corruption (BOM, missing quotes, double‑encoding).
- **#6609** – Corrects `spawn_subagent` schema so single‑task mode no longer requires `batch`.
- **#6610** – Caps shell‑command timeouts and prevents UI freezes from large output.
- **#6526** – Adds native NVIDIA NIM provider support.
- **#6607** – Introduces a global‑hotkey floating quick‑input window for the desktop app.

## 4. Community Hot Topics
| Issue | Comments | 👍 | Theme |
|-------|----------|----|-------|
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | 10 | 0 | Skill tags vanish on restart (regression of #3270) |
| [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) | 5 | 0 | QwenPaw does not report empty‑response errors in long sessions |
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) | 5 | 0 | CI workflow blocks all fork PRs (now closed) |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | 4 | 0 | `spawn_subagent` single‑task mode unusable because `batch` is required |
| [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) | 4 | 0 | Desktop shortcut buttons to quickly access workspace output files |
| [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) | 4 | 0 | Request for an independent Python runtime inside the desktop app |
| [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) | 2 | 1 | Improve result presentation (collapse tool‑call traces, highlight final output) |

**Underlying needs:** Users are experiencing **data‑loss regressions** (skill tags, session messages), **silent failures** (empty responses, cron pushes), and **UX friction** (UI freezes, cluttered tool‑call display). The community is pushing for more robust error reporting and a cleaner, more predictable desktop experience.

## 5. Bugs & Stability
**High‑severity open bugs:**
1. **#6608** – Long‑running shell commands bypass timeout and block Feishu sessions indefinitely (orphan subprocess on cancel). *Fix PR: #6610 (partially addresses timeout capping and freeze).*
2. **#6520** – Systemic `agent.json` corruption (BOM, missing quotes, double‑encoded Chinese) causing complete system failure. *Fix PR: #6528 (merged).*
3. **#6612** – QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1: proactive crashes (`Msg.content` type) and tool‑permission deadlock. *Fix PR: #6615 (open).*
4. **#6589** – `execute_shell_command` with massive stdout freezes the UI. *Fix PR: #6610 (open).*
5. **#6537** – Skill tags disappear on restart (regression). *No fix PR yet.*

**Medium‑severity open bugs:**
- **#6601** – No empty‑response error reporting; can lead to lost sessions in long contexts.
- **#6588** – `spawn_subagent` single‑task mode broken due to schema validation. *Fix PR: #6609 (open).*
- **#6558** – Session UI data integrity issues (messages lost on switch, replies re‑render). *Fix PR: #6602 (merged).*
- **#6544** – Feishu audio transcription silently fails in 2.x. *Fix PR: #6573 (merged).*

**Trend:** The current bug cluster is dominated by **UI freezes, timeout bypasses, and compatibility breakages** stemming from the recent AgentScope upgrade. Several critical fixes are already merged or in review, indicating active triage.

## 6. Feature Requests & Roadmap Signals
| Issue | Author | Description |
|-------|--------|-------------|
| [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) | AL‑Mint | Desktop shortcut buttons to quickly access workspace output files. |
| [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) | xiaobing006 | Provide an independent/built‑in Python runtime for the desktop app. |
| [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) | azear | Improve result presentation by collapsing tool‑call traces and highlighting final output. |
| [#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) | rerbin | Rename desktop app from “QwenPaw Desktop” to “QwenPaw”. |
| [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | MCQSJ | Add a unified, professional cleanup page for managing accumulated agent data. |
| [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) | WilShi | Global‑hotkey floating quick‑input window (PR in progress). |

**Next‑version prediction:** The cleanup page (#6593) and workspace‑shortcut buttons (#6083) address common pain points for long‑term users and are likely candidates for inclusion. The naming change (#6587) is trivial and may be adopted quickly. The independent Python runtime (#6160) is a larger architectural ask and less likely in the immediate roadmap.

## 7. User Feedback Summary
**Pain points reported:**
- **Data loss/regression:** Skill tags disappearing, `agent.json` corruption, session messages lost on UI switch.
- **Silent failures:** Empty‑response errors not reported, cron pushes reporting success but delivering nothing.
- **UI/UX instability:** Console freezes when executing shell commands with large output, input box obscured on high‑DPI displays.
- **Compatibility gaps:** Proactive/memory‑evolving subsystem breaks with agentscope 2.0.4.post1; audio transcription fails in channels.
- **Workflow friction:** No quick access to workspace output files; no built‑in cleanup mechanism; excessive tool‑call traces clutter the interface.

**Satisfaction indicators:** The community actively engages with bug reports (high comment counts) and provides concrete reproduction steps. Several fixes have been merged or are under review, showing responsive maintenance. However, the volume of open stability issues suggests the current release still feels fragile to power users.

## 8. Backlog Watch
**Long‑standing open issues awaiting maintainer attention:**
- [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) – Desktop workspace‑output shortcut buttons (open since 2026‑07‑14, 4 comments).
- [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) – Independent Python runtime request (open since 2026‑07‑16, 4 comments).
- [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) – Improve result presentation (open since 2026‑07‑19, 2 comments, 1 👍).
- [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) – Skill‑tag regression (open since 2026‑07‑28, 10 comments, no fix PR yet).

**Closed issues that may need follow‑up:**
- [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) – CI workflow blocking fork PRs (closed, but ensure the fix is merged and released).

---
*Digest generated from GitHub data as of 2026‑08‑01. All links reference the agentscope‑ai/QwenPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-01

## 1. Today's Overview

ZeroClaw shows strong development velocity with 50 issues and 50 PRs updated in the past 24 hours, of which 5 issues were closed and 12 PRs merged/closed. No new release was published. The project is in a healthy RFC-driven design phase, with the maintainer decision tracker (#8692) actively triaging a large queue of architectural proposals. Activity is concentrated around memory lifecycle refactors, security hardening, and observability improvements, indicating the codebase is maturing beyond early-stage feature addition.

## 2. Releases

No new releases today. The most recent relevant merged PRs (#8438, #8996) are candidates for the next release cycle.

## 3. Project Progress

**Merged/Closed PRs today:**

- **#8438** [MERGED] `feat(cron): add shell_output_format config for raw stdout output` — Operators can now opt into trimmed raw stdout for shell cron jobs instead of the default envelope format.
- **#9292** [MERGED] `fix(zerocode): keep session picker scroll offset for mouse hit-testing` — Fixed a Ratatui state-copy bug that reset scroll position during session list rendering.
- **#9038** [CLOSED] `fix(lark): pick receive_id_type from recipient id prefix` — Resolved Lark channel message delivery failure (error 230001) by dynamically selecting `receive_id_type` based on the recipient ID prefix.
- **#8996** [CLOSED] `fix(goal): preserve running goals across daemon reload` — Stacked PR carrying transient execution ownership of `Running` goals across in-process config reloads; enables #8303 (Goal mode).
- **#8943** [CLOSED] `fix(providers): exclude Nova 2 from Bedrock prompt caching` — Nova 2 models reject the `cachePoint` key; removed from the prompt-caching allowlist.

**Notable open PRs advancing:**

- **#9535** — Anchors context compaction to model window ratio instead of a fixed 32k default, fixing silent disablement on large-window models.
- **#9557** — Adds `ProviderErrorKind` classification for user-friendly error messaging across OpenAI, Anthropic, Bedrock, and other providers.
- **#9556** — Adds Langfuse as an observability backend via OTel.
- **#9554** — Introduces `DagPlanExecuteTool` for multi-step parallel/sequential task planning.
- **#9433** — Enforces `allowed_tools`/`excluded_tools` in `ensure_no_escalation_beyond`, closing a security policy gap.
- **#9576** — Fixes multimodal image trimming to operate per-image rather than per-message, reducing token waste.

## 4. Community Hot Topics

**Most discussed issues (by comment count):**

1. **#9048** — RFC: Separate conversation history from agent-curated long-term memory *(14 comments)* — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)
   The top concern: conversation turns are still written into the general memory backend as `MemoryCategory::Conversation`, blurring the lifecycle boundary. The community wants clean separation so session history can be compacted independently of durable memory.

2. **#9127** — RFC: Abstract a `KeySource` trait for master-key material *(11 comments)* — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)
   With 93 `#[secret]` fields and 59 credential-classified fields, contributors are pushing for a typed abstraction over key sources (file, env, KMS, etc.) to improve deployability and auditability.

3. **#7155** — RFC: Per-execution confirmation tier for high-risk shell commands *(9 comments)* — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)
   Users need a middle ground between full auto-approve and blanket denial for shell tool usage — a Claude Code-style allow/ask/deny policy per command pattern.

4. **#8933** — RFC: Cross-turn conversation correlation to OTel export *(9 comments)* — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)
   Observability contributors want a stable `gen_ai.conversation.id` carried through turn-lifecycle events for meaningful trace correlation.

5. **#9106** — RFC: A2A outbound client (A2ATool) *(8 comments)* — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)
   After inbound A2A support shipped in v0.8.2, the community is pushing for outbound capability so agents can proactively call other A2A-compliant agents.

**Underlying needs:** The dominant themes are **memory architecture clarity**, **security-by-default credential handling**, and **observability maturity**. Users are transitioning from "can it work?" to "can I trust and observe it at scale?"

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P1 / High** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) ✅ Closed | Enabled Signal/Voice Call channel with empty credentials crashloops the supervisor (~2s restart loop) | — |
| **P1 / High** | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) ✅ Closed | Landlock sandbox blocks shell access to `/dev/null` on Fedora, breaking all shell tool execution | — |
| **P1 / High** | [#9433](https://github.com/zeroclaw-labs/zeroclaw/pull/9433) | `SecurityPolicy::ensure_no_escalation_beyond` did not validate `allowed_tools`/`excluded_tools` — a policy bypass | #9433 (open) |
| **P2 / Medium** | [#9038](https://github.com/zeroclaw-labs/zeroclaw/pull/9038) ✅ Closed | Lark channel rejects messages with `invalid receive_id` (error 230001) due to hardcoded `receive_id_type=chat_id` | #9038 |
| **P2 / Medium** | [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) ✅ Closed | Bedrock Nova 2 models fail with `extraneous key [cachePoint]` — prompt caching incorrectly enabled | #8943 |
| **P2 / Medium** | [#9576](https://github.com/zeroclaw-labs/zeroclaw/pull/9576) | Multimodal image trimming drops entire messages instead of individual images, wasting tokens | #9576 (open) |
| **P2 / Medium** | [#9292](https://github.com/zeroclaw-labs/zeroclaw/pull/9292) ✅ Closed | Zerocode session picker scroll resets on re-render due to Ratatui state copy | #9292 |

**Stability assessment:** Two critical P1 bugs (crashloop, sandbox bypass) have been resolved. The remaining open security PR (#9433) is high-priority and should land soon. No new regressions detected today.

## 6. Feature Requests & Roadmap Signals

**High-signal RFCs likely to ship in the next 1–2 releases:**

- **#8303** — Goal mode for bounded autonomous session work *(5 comments, 1 👍)* — First-class durable mode for pursuing a single objective until completion or budget exhaustion. PR #8996 already lays groundwork.
- **#8550** — OpenAI-compatible chat completions endpoint — Enables Open WebUI, LobeChat, and other standard clients to connect without custom adapters.
- **#6909** — Computer-use support for desktop screen interaction — Extends ZeroClaw into full desktop automation (mouse/keyboard/screen).
- **#8135** — Wasm-first plugin runtime, default-on — Eliminates Node.js from the build/runtime; all third-party extensions ship as signed Wasm modules.
- **#9106** — A2A outbound client (A2ATool) — Completes the A2A bidirectional story after inbound support in v0.8.2.
- **#9554** — `DagPlanExecuteTool` for sequential/parallel task planning — Already in PR, likely to ship soon.

**Lower-priority but active:**

- **#5907** — Opt-in LSP support for ZeroCode coding workflows
- **#7100** — Per-model capability & context-window config (vision, context_window)
- **#6489** — "Everything is a plugin" unified plugin catalog (long-term architectural tracker)

## 7. User Feedback Summary

**Pain points expressed:**

- **Memory confusion:** Users are frustrated that conversation history and long-term memory share the same backend, making retention/compaction policies unpredictable. (#9048, #6850)
- **Security opacity:** Operators want to inspect what credential boundaries and sandbox policies are actually active at runtime. (#6971, #9548 warns on risky Codex CLI args)
- **Shell tool granularity:** The binary allow/deny model is insufficient for production use; users want per-command confirmation tiers. (#7155)
- **Context window mismatches:** Model-reported context windows differ from runtime trim budgets, causing silent failures on large-window models. (#7100, #9535, #8966)
- **Provider error ambiguity:** Generic error messages make debugging provider failures difficult; users want classified error types. (#9557)

**Satisfaction signals:** The merged cron raw-stdout feature (#8438), Lark fix (#9038), and goal-preservation fix (#8996) address long-standing user requests. The ZEGA AI integration doc PR (#9564) indicates growing enterprise adoption.

## 8. Backlog Watch

| Issue | Age | Risk | Need |
|-------|-----|------|------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue for RFCs | ~2 months | High | 10+ RFCs waiting for acceptance/rejection/deferral |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) — "Everything is a plugin" unified catalog | ~3 months | High | Architectural tracker with no active PR |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — Security UX & runtime credential boundaries | ~2.5 months | High | Needs-maintainer-review; no PR yet |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — Goal mode | ~1.5 months | High | Partially addressed by #8996; full RFC still open |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) — AI-assisted PR pre-review | ~8 days | Medium | needs-author-action; CI/quality workflow enhancement |
| [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) — Execution-tree iteration budget ownership | ~8 days | High | `ToolLoop.shared_budget` is `None` in all production roots; subagent fan-out unbounded |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — Granular sandbox policy | ~2.5 months | High | Filesystem and network restrictions need implementation |

**Key risk:** The maintainer decision queue (#8692) is the primary bottleneck. Without timely RFC triage, the roadmap will stall. The unbounded subagent fan-out (#9323) is a silent correctness issue that could cause resource exhaustion in production goal-mode workflows.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*