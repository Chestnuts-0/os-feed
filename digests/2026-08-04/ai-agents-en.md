# OpenClaw Ecosystem Digest 2026-08-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-04 01:26 UTC

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



# OpenClaw Project Digest — 2026-08-04

## 1. Today's Overview

OpenClaw shows high development velocity with **500 issues and 500 PRs** updated in the last 24 hours, indicating sustained community engagement. Two patch releases (v2026.7.1-1 and v2026.7.1-2) were published today, targeting Codex turn-completion reliability and npm plugin metadata handling. The project maintains a healthy open/closed ratio (~93% open issues, ~65% open PRs), with an active CLA sweeping process (clawsweeper tags visible across top issues). Stability regressions around session state and message loss remain the dominant concern among users.

## 2. Releases

### v2026.7.1-2
- **npm plugin updates:** Accepts singleton-array metadata from newer npm clients so tracked official plugins can install and update to correction releases. (#108336)

### v2026.7.1-1
- **Codex progress replies:** Keeps app-server turns running after delivered progress messages so GPT/Codex reaches its authoritative terminal response instead of stopping mid-turn. (#106961, #108487) — Thanks @joshavant
- **Memory Core startup repair:** Recovers derived legacy-index and cache state on startup.

> **Migration note:** No breaking changes reported. Users on v2026.7.1 should upgrade to -2 for npm plugin compatibility.

## 3. Project Progress

**Key PRs advanced today:**

| PR | Description | Status |
|----|-------------|--------|
| [#118623](https://github.com/openclaw/openclaw/pull/118623) | Batched tool search queries for multi-surface workflows | 👀 Ready for maintainer look |
| [#118954](https://github.com/openclaw/openclaw/pull/118954) | Fix: Custodian wizard loses pending control after reload | 👀 Ready for maintainer look |
| [#119040](https://github.com/openclaw/openclaw/pull/119040) | feat(cron): add wake-only payload | 👀 Ready for maintainer look |
| [#118409](https://github.com/openclaw/openclaw/pull/118409) | Keep sandboxed gateway locks out of live state dirs | 👀 Ready for maintainer look |
| [#118977](https://github.com/openclaw/openclaw/pull/118977) | Support realtime transcription WebSocket subprotocol negotiation | 📣 Needs proof |
| [#118682](https://github.com/openclaw/openclaw/pull/118682) | Fix: project effective session reasoning display | 👀 Ready for maintainer look |
| [#113462](https://github.com/openclaw/openclaw/pull/113462) | Fix Moonshot (Kimi) anyOf schema rejection for MCP tools | 📣 Needs proof |
| [#118363](https://github.com/openclaw/openclaw/pull/118363) | Preserve deferred MCP failures in structured Tool Search | 👀 Ready for maintainer look |
| [#118053](https://github.com/openclaw/openclaw/pull/118053) | Stop treating failed pending-check as proof of idleness on restart | 👀 Ready for maintainer look |
| [#116604](https://github.com/openclaw/openclaw/pull/116604) | Fix Codex trailing NO_REPLY swallowing real answer | 📣 Needs proof |
| [#119045](https://github.com/openclaw/openclaw/pull/119045) | Stop xAI realtime sessions when playback acks stall | 👀 Ready for maintainer look |
| [#118998](https://github.com/openclaw/openclaw/pull/118998) | Block terminal control sequences in TUI system messages (security) | 👀 Ready for maintainer look |
| [#118601](https://github.com/openclaw/openclaw/pull/118601) | Warn when plugins register typed hooks via legacy API | 👀 Ready for maintainer look |

**Closed today:** PR #119028 (agent session streaming QA proof) merged.

## 4. Community Hot Topics

| Issue | Comments | Rating | Summary |
|-------|----------|--------|---------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) — DeepSeek v4 Flash silent reply failure | 100 | 🦞 Diamond Lobster | Model silently produces no reply; fallback message posted instead |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) — Realtime voice unbounded state retention | 51 | 🦞 Diamond Lobster | Voice sessions can retain superseded consult work under bursty provider behavior |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source | 24 | 🌊 Off-meta Tidepool | Feature request: tag memory entries by trust level to prevent memory poisoning |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost | 23 | 🦞 Diamond Lobster | Orchestration failure modes where results are silently dropped with no retry/notification |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) — Centralized filename encoding utility | 20 | 🐚 Platinum Hermit | Multi-encoding Content-Disposition handling across channel adapters |

**Analysis:** The community is most vocal about **reliability gaps** — silent failures in model replies, subagent completion loss, and voice session state bloat. The Memory Trust Tagging issue (#7707) signals growing user concern about **security and data integrity** as OpenClaw's memory features mature. Filename encoding (#48788) reflects the project's expanding global user base (Feishu, Shift-JIS, GB18030 support).

## 5. Bugs & Stability

| Issue | Severity | Summary | Fix PR |
|-------|----------|---------|--------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 🔴 P1 — Diamond Lobster | DeepSeek v4 Flash silent reply failure | — |
| [#112906](https://github.com/openclaw/openclaw/issues/112906) | 🔴 P2 — Regression | ```` ```` renders broken in v2026.7.1/-2 (richMessages) | — |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | 🔴 P1 — Diamond Lobster | beta.5 `/new` reuses stable session ID; cannot recover retired Codex tombstone | — |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 🔴 P2 — Behavior bug | All persistent sessions capped at 128k context regardless of model | — |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | 🔴 P1 — Diamond Lobster | `chat.send` rejected with "thread switched branches" after model completes | — |
| [#115037](https://github.com/openclaw/openclaw/issues/115037) | 🔴 P1 — Diamond Lobster | Synthetic "No response requested." on resume triggers model fallback | — |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | 🔴 P1 — Behavior bug | Usage-cost refresh lock never releasable after PID-reusing restart (containers) | — |
| [#111010](https://github.com/openclaw/openclaw/issues/111010) | 🔴 P1 — Silver Shellfish | Detached native Codex subagents lose hook relay when parent turn releases | — |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | 🔴 P1 — Platinum Hermit | Codex-backed Telegram turns repeatedly timeout waiting for turn/completed | — |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | 🔴 P1 — Platinum Hermit | Codex app-server long replies silently truncated at ~1000-1100 chars | — |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 🔴 P1 — Diamond Lobster | Subagent completion delivery lost on direct-announce timeout/drain/orphan prune | — |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | 🔴 P1 — Platinum Hermit | Session lane starvation: followup drain monopolizes lane for 20-30min | — |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 🟡 P1 — Gold Shrimp | Write/exec tool params silently dropped after long conversations (15+ turns) | — |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | 🟡 P1 — Platinum Hermit | Cron agent jobs silently timeout during sustained LLM API outages instead of fast-failing | — |
| [#39807](https://github.com/openclaw/openclaw/issues/39807) | 🔴 P1 — Closed | Billing error (402) caused infinite retry death spiral (5,206+ failed runs) | ✅ Closed |
| [#118998](https://github.com/openclaw/openclaw/pull/118998) | 🟡 Security | TUI terminal control injection in system messages | PR #118998 |
| [#116604](https://github.com/openclaw/openclaw/pull/116604) | 🟡 P1 — Silver Shellfish | Codex trailing NO_REPLY swallowing real answer | PR #116604 |
| [#118053](https://github.com/openclaw/openclaw/pull/118053) | 🟡 P1 — Platinum Hermit | Failed pending-check falsely signals idleness on restart | PR #118053 |

**Key theme:** Session-state and message-loss bugs dominate the top issues. Multiple diamond-lotus-rated bugs relate to Codex integration reliability. The infinite-retry billing spiral (#39807) was closed, but similar patterns persist (#45494).

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Description |
|-------|----------|-------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | P2 | **Memory Trust Tagging by Source** — Tag memories by origin trust level to prevent poisoning |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | P3 | **YAML config file support** — Alternative to JSON5 for readability |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | P2 | **MathJax/LaTeX support in Control UI** — 10 👍; strong user demand |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | P1 | **Self-hosted STT/TTS in webchat** — Route through gateway instead of browser Speech API |
| [#47910](https://github.com/openclaw/openclaw/issues/47910) | P2 | **Provider fallback by failure class** — Quarantine auth-broken providers instead of blind retry |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | P2 | **Plugin hook trace context** — Add messageId, runId, parentSpanId for distributed tracing |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | P2 | **Onboarding wizard: mandatory Memory/Embedding setup** |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | P2 | **Backup CLI: .gitignore-like exclude patterns** |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) | P2 | **`session.resetPrompt` config** — Configurable session startup message |
| [#80752](https://github.com/openclaw/openclaw/issues/80752) | P2 | **Model override in CommitmentsConfig** |

**Roadmap prediction:** Memory trust tagging (#7707) and provider fallback by failure class (#47910) align with the project's growing enterprise/self-hosted adoption. MathJax support (#42840) has the strongest community backing (10 👍). YAML config (#45758) is lower priority (P3) but addresses DevOps-friendly workflows.

## 7. User Feedback Summary

**Pain points:**
- **Silent failures are the #1 complaint.** Users report subagent completions disappearing (#44925, #67777), model replies vanishing (#116277), and tool parameters dropping after long sessions (#53408) — all without error notifications.
- **Codex integration instability.** Multiple users report Codex turns timing out (#87744), truncating at ~1000 chars (#84516), or losing answers to spurious NO_REPLY events (#116604, #115037).
- **Session management regressions.** Persistent sessions capped at 128k context (#116010), stale `expectedLeafEntryId` causing rejected sends (#115700), and `/new` failing to recover retired bindings (#116022).
- **Rich message regression.** v2026.7.1/-2 broke collapsible ```` ```` sections (#112906) — a direct regression from the latest releases.
- **Container/PID reuse bugs.** Lock leaks (#114234) and sandbox isolation gaps (#118371) affect container deployments.

**Positive signals:**
- Billing spiral fix (#39807) closed after community pressure.
- Quick response to npm plugin metadata issue in -2 patch release.
- Strong engagement on QA proof PRs (#119029, #119033, #119043) from maintainer vincentkoc.

## 8. Backlog Watch

| Issue/PR | Age | Status | Why It Needs Attention |
|----------|-----|--------|------------------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging | 6 months | Open, P2 | Core security feature for memory integrity; blocked on security review |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion lost | 5 months | Open, P1 | Diamond lobster; affects production reliability |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) — Subagent delivery lost | 4 months | Open, P1 | Diamond lobster; same root cause as #44925 |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) — Session lane starvation | 5 months | Open, P1 | Platinum hermit; causes 20-30min dispatch stalls |
| [#101276](https://github.com/openclaw/openclaw/pull/101276) — exec approval denylist | 1 month | ⏳ Waiting on author | Large security-relevant PR; author inactive since 2026-06-12 |
| [#81185](https://github.com/openclaw/openclaw/pull/81185) — Redact exec tool results | 3 months | ⏳ Waiting on author | Security-sensitive; supersedes #92456 |
| [#117259](https://github.com/openclaw/openclaw/pull/117259) — Buzz messages dropped on restart | 4 days | ⏳ Waiting on author | Message-loss regression for Buzz room operators |
| [#113462](https://github.com/openclaw/openclaw/pull/113462) — Moonshot anyOf fix | 10 days | 📣 Needs proof | Blocks Moonshot/Kimi users with MCP tools |
| [#118977](https://github.com/openclaw/openclaw/pull/118977) — Realtime transcription WS protocols | 2 days | 📣 Needs proof | Needed for

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report — AI Agent & Personal AI Assistant Open-Source Ecosystem
**Date: 2026-08-04 | Analyst: Agnes-2.0-Flash**

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is in a high-integration maturity phase, with projects converging on multi-provider resilience, structured tool calling, and channel-agnostic gateway reliability. Community momentum splits sharply between rapid iteration (OpenClaw, Hermes Agent, CoPaw, IronClaw) and focused consolidation (NanoBot, Moltis, NullClaw). The dominant developer concern has shifted from "does it work?" to "does it stay working?" — session state integrity, silent failure recovery, and cross-provider fallback are now the central engineering challenges across all active projects.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | New Release | Open/Closed PR Ratio | Health Score (1-10) |
|---------|---------------|-------------|-------------|---------------------|---------------------|
| **OpenClaw** | 500 | 500 | v2026.7.1-2 (today) | ~65% open | ⚠️ 6 — velocity high but session-state bugs dominate |
| **Hermes Agent** | 50 | 50 | v0.20.0 (yesterday) | — | 🟢 7.5 — post-release hardening, Windows/Telegram gaps |
| **IronClaw** | 45 | 50 | None | ~49% open | 🟡 6.5 — architecture debt repayment in progress |
| **CoPaw** | 23 | 50 | v2.1.0-beta.1 (yesterday) | ~52% open | 🟡 6 — agentscope compat regressions |
| **ZeroClaw** | 100 | 50 | None | ~94% open | 🔴 4 — review bottleneck, pre-release gating |
| **NanoBot** | 2 | 36 | None | ~33% open | 🟢 8 — strong merge cadence, 2 P1s outstanding |
| **PicoClaw** | 8 | 5 | None | ~40% open | 🟡 6.5 — MCP hang and WebUI lag unresolved |
| **NanoClaw** | 1 | 9 | None | ~33% open | 🟢 7.5 — mature maintenance, Node.js compat gap |
| **LobsterAI** | 2 | 11 | None | ~45% open | 🟡 6 — 5 stale PRs since April |
| **NullClaw** | 1 | 5 | None | — | 🟡 6 — scheduler auth bug, pre-release |
| **Moltis** | 0 | 1 | None | — | 🟢 7 — focused, no blockers visible |
| **TinyClaw** | 0 | 0 | None | — | 🔴 3 — inactive |
| **ZeptoClaw** | 0 | 0 | None | — | 🔴 3 — inactive |

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- Highest raw throughput in the ecosystem (500 issues/PRs/day), enabling rapid patch cadence (two releases in 24 hours).
- Largest contributor base with active CLA sweeping; community QA proof culture (vincentkoc's PRs) is unmatched.
- Maturest plugin architecture (npm metadata handling, typed hook warnings) and broadest channel support (Telegram, Codex, xAI, Moonshot/Kimi).
- Strong enterprise signals: memory trust tagging (#7707), provider fallback by failure class (#47910), and distributed tracing via hook context.

**Technical approach differences:**
- Unlike NanoBot (Python/`uv`-centric) or Moltis (GitOps MCP bundles), OpenClaw uses an npm-native plugin system with singleton-array metadata tolerance.
- Unlike IronClaw's Rust/WASM Reborn architecture, OpenClaw is JavaScript-heavy with a Codex app-server integration that remains its biggest reliability liability.
- Unlike ZeroClaw's RFC-driven governance model, OpenClaw's issue classification uses a unique "lobster/hermit/tidepool" tagging system reflecting severity + contributor tier.

**Community size:** OpenClaw's 500 daily updates dwarf NanoBot (36), Hermes Agent (50), and IronClaw (45), but its ~93% open issue ratio suggests a growing backlog that outpaces resolution — a volume-vs-velocity tradeoff.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Need |
|------------|------------------|---------------|
| **Session state & message loss** | OpenClaw, CoPaw, PicoClaw, ZeroClaw | Silent subagent completion drops, context caps, stalled lanes, transcript loss |
| **Provider fallback & failover** | OpenClaw, NanoBot, CoPaw, NullClaw | Rate-limit quarantining, cooldown managers, multi-engine search (MST/RDF), structured streaming tool calls |
| **Channel gateway reliability** | OpenClaw, Hermes Agent, PicoClaw, NanoBot, LobsterAI, ZeroClaw | Telegram hangs, Signal feature gaps, WebSocket subprotocol negotiation, proxy transport |
| **MCP server management** | PicoClaw, NanoBot, IronClaw, Moltis, ZeroClaw | Connection fault tolerance, remote HTTP MCP servers, managed repository bundles, scoped credential handling |
| **Windows/platform compatibility** | Hermes Agent, LobsterAI, NanoClaw | Path rewriting (MSYS), `uv` discovery, process termination races, Node.js version gating |
| **Memory & security** | OpenClaw, ZeroClaw, IronClaw, NanoClaw | Trust-tagged memory, SSRF gates, forbidden workspace paths, WASM diagnostic leakage |
| **Observability & tracing** | OpenClaw, ZeroClaw, CoPaw | Hook trace context (messageId, runId, spanId), OTel correlation, structured SSE outcomes |
| **Mobile/WebUI responsiveness** | NanoBot, PicoClaw, CoPaw | IME composition stability, keyboard dismissal, input lag with history, large-output freezes |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | NanoBot | CoPaw | Moltis | ZeroClaw |
|-----------|----------|-------------|----------|---------|-------|--------|----------|
| **Language** | TypeScript/JS | Python | Rust | Python | Python | Rust | Rust |
| **Architecture** | Monorepo, npm plugins | Modular, gateway-centric | WASM guest + Reborn layering | Lightweight agent | Desktop-first (Electron) | GitOps-native MCP bundles | Security-first, RFC-governed |
| **Target user** | Power users, enterprises | Broad adopters (650+ contributors) | Rust/WASM enthusiasts | Python/devOps users | Desktop/power users | DevOps/MCP operators | Security-conscious self-hosters |
| **Key differentiator** | Broadest channel/plugin coverage | Largest contributor base, rapid fix cadence | Formal architecture debt repayment (WS2/WS3) | Clean PR throughput, i18n parity | agentscope integration, model fallback | Managed MCP supply chain | Structured telemetry, goal mode |
| **Session model** | Codex-integrated, 128k context cap | v23 migration, relay recovery | Loop-host model gateway | Multi-provider routing | agentscope v2.1 | — | SOP permission contracts |
| **Release cadence** | Daily patches | Weekly (v0.20.0 just shipped) | Release-stalled (Reborn gates) | Bi-weekly sprints | Beta cycle (v2.1.0-beta.1) | Hold until #1183 merges | Pre-v0.9.0 hardening |

---

## 6. Community Momentum & Maturity

### Tier 1 — Rapid Iteration (Daily high-volume updates)
- **OpenClaw** — 500 updates/day; patch-release discipline is best-in-class but backlog accumulation is a risk.
- **CoPaw** — 73 items/day with v2.1.0-beta.1; agentscope upgrade driving a bug-bash wave.
- **Hermes Agent** — 100 items/day post-v0.20.0; consolidation sprint with 650+ contributors.
- **IronClaw** — 95 items/day; Reborn architecture is the active workfront, CI tooling catching up.

### Tier 2 — Focused & Efficient (Moderate volume, high merge rate)
- **NanoBot** — 36 PRs with 25 merged; excellent throughput-to-discussion ratio.
- **NanoClaw** — 9 PRs, 6 merged; mature maintenance with low noise.
- **Moltis** — 1 PR but architecturally significant (#1183 MCP bundles).

### Tier 3 — Stalled or Quiet (Low activity, accumulation risk)
- **NullClaw** — 5 PRs, 2 merged; scheduler auth bug persists 3 months.
- **PicoClaw** — 13 items, 3 merged; MCP hang and WebUI lag unaddressed.
- **LobsterAI** — 13 items, 6 merged; 5 stale PRs since April.
- **ZeroClaw** — 100 items but 94% PRs open; review bottleneck is critical.

### Tier 4 — Inactive
- **TinyClaw**, **ZeptoClaw** — Zero activity.

---

## 7. Trend Signals

| Trend | Evidence Across Projects | Value for AI Agent Developers |
|-------|-------------------------|-------------------------------|
| **Structured tool calling in streaming** | OpenClaw (#116604, #118053), NullClaw (#964/#965), CoPaw (#6525) | Streaming tool-call reliability is now table-stakes; consumers should prioritize providers with native API-level tool delta support. |
| **Multi-provider fallback & cooldown** | OpenClaw (#47910), NanoBot (MST metasearch), CoPaw (#6659), Hermes Agent (#56613) | Rate-limit resilience is a primary differentiator; projects with exponential cooldown managers and provider quarantine will dominate production deployments. |
| **MCP supply-chain maturity** | Moltis (#1183), PicoClaw (#3269), NanoClaw (#3092), IronClaw (#7077) | The shift from ad-hoc MCP config to versioned, rollback-capable, credential-scoped bundles signals enterprise readiness. |
| **Session state as the #1 reliability surface** | OpenClaw (7+ P1 session bugs), CoPaw (skill-tag loss, black-screen crash), PicoClaw (#3301), ZeroClaw (#9642) | Developers should invest in audit-trail-verified session persistence and graceful degradation on state loss. |
| **Cross-platform path/encoding handling** | Hermes Agent (Windows MSYS, #67629/#69216), NanoClaw (Node <21, #3179), OpenClaw (filename encoding, #48788) | Global deployment requires explicit runtime-gating and encoding-aware file utilities; assume UTF-8 boundaries will be hit. |
| **Observability as a trust signal** | OpenClaw (hook trace context), ZeroClaw (OTel, #6641/#9621), CoPaw (structured SSE, #5930) | Distributed tracing and operator-reviewed telemetry are becoming user expectations, not premium features. |
| **Goal-mode / multi-turn bounded agents** | ZeroClaw (#8303), NanoBot (cross-session search, #5211), OpenClaw (subagent delivery, #44925/#67777) | The market is moving from single-turn assistants to goal-oriented agents; projects that solve silent-completion-loss will win enterprise adoption. |
| **Channel-first onboarding** | IronClaw (#7044/#6994), CoPaw (inbox UX, v2.1.0-beta.1) | First-run friction is the #1 adoption barrier; carousel-based OOBE and channel-first config are emerging patterns. |

---

**Bottom line for technical decision-makers:** The ecosystem is splitting into two camps — **volume leaders** (OpenClaw, Hermes Agent) trading breadth for backlog risk, and **focus leaders** (NanoBot, Moltis) trading velocity for stability. For production deployments, NanoBot's merge discipline and Moltis's MCP supply-chain approach are the strongest signals. For maximum channel coverage, OpenClaw remains unmatched despite its session-state challenges. ZeroClaw's v0.9.0 release, once the review bottleneck clears, could become the security-hardened alternative for self-hosted deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-04

## 1. Today's Overview

NanoBot shows **high development velocity** today with 36 PRs touched in the last 24 hours and 2 issues updated, indicating an active sprint cycle. The project is in a consolidation phase — a large batch of fixes and features were merged today while the open issue count remains low (1 active bug). No new releases were published, suggesting the team is gathering changes before a release candidate. Community engagement is moderate (zero reactions across all items), which may reflect a quiet weekend or a focus on core contributor work.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

**25 PRs were merged/closed today**, spanning multiple subsystems:

| Area | Key Merges |
|---|---|
| **Providers** | `mst-python` metasearch integration (PR #5234, still open); Eden AI gateway added (PR #4861); DeepSeek reasoning wire-validity fix (PR #5214); Gemini unsigned tool-call fix (PR #5230, open) |
| **WebUI** | Full i18n audit completed (PR #5227); local trigger message display fixed (PR #5228); IME input stability during composition (PR #5229); mobile keyboard dismissal after send (PR #5226) |
| **Infrastructure** | Gateway resource cleanup on stop (PR #5215); `uv` fallback when `pip` unavailable (PR #5213); cron schedule syntax validation (PR #5141); history tail UTF-8 hardening (PR #5221) |
| **Memory/Dream** | Idle session archiving for Dream agent (PR #5231, open); cross-session search and mentions (PR #5211, open) |
| **Channels** | Mattermost thread group policy (PR #5232 merged; PR #5233 follow-up open); Telegram fenced-code language-tag fix (PR #5222, open) |
| **OpenAI Codex** | Dual OAuth + custom Responses mode support (PR #1550) |

**Highlights:** The WebUI received a concentrated round of polish (4 PRs), while provider robustness was significantly hardened (DeepSeek, Gemini, MST search).

## 4. Community Hot Topics

- **[Issue #5235](https://github.com/HKUDS/nanobot/issues/5235)** — *Anthropic Opus 5 temperature config rejected on API* — The newly released Opus 5 model (2026-07-24) is not covered by the `omit_temperature` allowlist, causing every request to fail. This is a **regression tied to a vendor model launch** and needs an urgent config update. Zero comments but high severity for Opus 5 users.
- **[PR #5234](https://github.com/HKUDS/nanobot/pull/5234)** — *mst-python metasearch provider* — Aggregates DuckDuckGo, Google, Brave, Bing via Reciprocal Rank Fusion. Reflects growing user demand for **multi-engine search fallback** rather than relying on a single provider.
- **[PR #5211](https://github.com/HKUDS/nanobot/pull/5211)** — *Cross-session search and mentions* — Enables bounded read-only access to persisted conversations and `@`-mention cross-session navigation. Signals user need for **long-context continuity** across separate chat sessions.
- **[PR #5204](https://github.com/HKUDS/nanobot/pull/5204)** — *Declarative Responses capabilities profile* — Replaces hardcoded provider-name checks with a typed `ResponsesCapabilities` profile for OpenAI, GitHub Copilot, and DeepSeek. Shows architectural maturation around the OpenAI-compatible Responses API.

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|---|---|---|---|
| **P1 — Critical** | [Issue #5235](https://github.com/HKUDS/nanobot/issues/5235) | Opus 5 temperature parameter causes API rejections | No fix PR yet |
| **P1 — Critical** | [PR #5230](https://github.com/HKUDS/nanobot/pull/5230) | Gemini returns 400 INVALID_ARGUMENT on mid-conversation model switch with tool calls | Open, unmerged |
| **P1 — High** | [PR #5214](https://github.com/HKUDS/nanobot/pull/5214) | DeepSeek reasoning items cause serde deserialization failures via OpenAI Responses API | **Merged** |
| **P1 — High** | [PR #5215](https://github.com/HKUDS/nanobot/pull/5215) | Gateway asyncio teardown noise and stall on stop with active exec sessions | **Merged** |
| **P2 — Medium** | [Issue #5190](https://github.com/HKUDS/nanobot/issues/5190) | Frontend JS modules fail with MIME type "text/plain" | **Merged** |
| **P2 — Medium** | [PR #5222](https://github.com/HKUDS/nanobot/pull/5222) | Telegram fenced code blocks corrupted for language tags with special chars (`c++`, `html+django`) | Open, unmerged |
| **P2 — Medium** | [PR #5221](https://github.com/HKUDS/nanobot/pull/5221) | History tail read crashes on invalid UTF-8 in multi-byte characters | **Merged** |

**Unaddressed critical gap:** Issue #5235 (Opus 5) and PR #5230 (Gemini tool-call cross-provider) are both P1 and still open — these should be prioritized before the next release.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|---|---|---|
| **Metasearch via MST** — multi-engine RRF-based web search | [PR #5234](https://github.com/HKUDS/nanobot/pull/5234) | **High** — code complete, pending review |
| **Cross-session search & mentions** — navigate and search across persisted conversations | [PR #5211](https://github.com/HKUDS/nanobot/pull/5211) | **High** — feature-complete, open for review |
| **Mattermost thread policy** — separate group-mention rules for threads vs. channels | [PR #5233](https://github.com/HKUDS/nanobot/pull/5233) | **Medium** — follows up on earlier Mattermost support |
| **Dream idle session archival** — persist short-lived sessions to `history.jsonl` | [PR #5231](https://github.com/HKUDS/nanobot/pull/5231) | **Medium** — niche Dream-agent workflow |
| **Declarative Responses capabilities** — typed provider profiles replacing string checks | [PR #5204](https://github.com/HKUDS/nanobot/pull/5204) | **High** — architectural improvement, ready |

## 7. User Feedback Summary

- **Opus 5 compat gap** ([#5235](https://github.com/HKUDS/nanobot/issues/5235)): Users are adopting Anthropic's latest model and hitting immediate blockers — the config allowlist hasn't kept pace with vendor releases.
- **Cross-provider conversation continuity** ([#5230](https://github.com/HKUDS/nanobot/pull/5230)): Fallback routing and model switching are popular patterns, but Gemini's strict tool-call signature requirements expose a protocol gap.
- **Mobile UX friction**: Multiple WebUI fixes (IME stability, mobile keyboard dismissal, autosize scroll preservation) indicate real users are actively using NanoBot on mobile and hitting input-composition bugs.
- **Plugin install robustness** ([PR #5213](https://github.com/HKUDS/nanobot/pull/5213)): Users in `uv tool` environments couldn't run `nanobot plugins enable` — a pain point for modern Python deployments.
- **i18n parity** ([PR #5227](https://github.com/HKUDS/nanobot/pull/5227)): The full locale audit and Chinese terminology corrections suggest a growing non-English user base requesting parity.

## 8. Backlog Watch

| Item | Age | Risk |
|---|---|---|
| [Issue #5235](https://github.com/HKUDS/nanobot/issues/5235) — Opus 5 temperature rejection | 1 day | **High** — blocks a newly released model; simple allowlist fix needed |
| [PR #5230](https://github.com/HKUDS/nanobot/pull/5230) — Gemini unsigned tool calls | 1 day | **High** — breaks fallback routing to Gemini; needs maintainer review |
| [PR #5233](https://github.com/HKUDS/nanobot/pull/5233) — Mattermost thread policy | 1 day | **Medium** — feature-complete, awaiting review |
| [PR #5234](https://github.com/HKUDS/nanobot/pull/5234) — MST metasearch provider | 1 day | **Medium** — blocked on review |
| [PR #5211](https://github.com/HKUDS/nanobot/pull/5211) — Cross-session search | 3 days | **Medium** — larger scope, may need design discussion |
| [PR #5222](https://github.com/HKUDS/nanobot/pull/5222) — Telegram code-fence fix | 1 day | **Low** — narrow regex fix, easy to merge |
| [PR #5231](https://github.com/HKUDS/nanobot/pull/5231) — Dream session archival | 1 day | **Low** — Dream-agent specific |

**Overall Health Assessment:** NanoBot is in a strong merge cycle with 25 PRs closed in 24 hours across providers, WebUI, infrastructure, and channels. The main risk is the **two outstanding P1 items** (#5235 and #5230) that block real user workflows and should be triaged before a release candidate is cut.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-04

## 1. Today's Overview

Hermes Agent remains in a high-velocity phase following the v0.20.0 release, with 50 issues and 50 PRs updated in the last 24 hours. The project is actively stabilizing after a major release cycle, with significant focus on Windows compatibility fixes, Telegram gateway reliability, and desktop app improvements. The contributor base is large and diverse (~650+ contributors, ~1,400 merged PRs since v0.19.0), indicating strong community engagement. Activity is heavily weighted toward bug fixes and platform-specific regressions rather than new feature development, suggesting a consolidation sprint post-release.

## 2. Releases

**v0.20.0 (v2026.8.3)** — Released August 3, 2026. This is the "Herald Release," the largest in project history with approximately 3,650 commits, 1,400 merged PRs, 559K insertions, and 405K deletions across ~1,200 closed issues from 650+ contributors. No detailed changelog was provided in the data, but the scale suggests a major feature release. Users should review migration notes for any breaking changes in session schema (v23 migration referenced in issue #71322) and gateway configuration.

## 3. Project Progress

**Merged/Closed today:**

- **#77806** (closed) — Fixed `ValueError` from `os.open` on NUL-containing paths in cron lifecycle guard ([PR #77806](https://github.com/NousResearch/hermes-agent/pull/77806))
- **#52765** (closed) — Fixed Google Gemini CLI provider registration and 429 quota tier issue ([PR #52765](https://github.com/NousResearch/hermes-agent/pull/52765))
- **#78057** (closed) — Fixed gateway startup status notice incorrectly completing A2A tasks ([PR #78057](https://github.com/NousResearch/hermes-agent/pull/78057))
- **#78071** (closed) — Fixed `sanitize_api_messages` not catching tool messages with missing/empty `tool_call_id` ([PR #78071](https://github.com/NousResearch/hermes-agent/pull/78071))
- **#78029** (closed) — Invalid issue (wrong repo)
- **#24617** (closed) — Added DeepSeek models to prompt caching whitelist for OpenCode Go ([PR #24617](https://github.com/NousResearch/hermes-agent/pull/24617))
- **#78005** (closed) — Added `skills.index_excluded` visibility state for skills ([PR #78005](https://github.com/NousResearch/hermes-agent/pull/78005))

**Key open PRs advancing:**

- **#78090** — Structured tool result passthrough, allowing tools to consume prior tool output by reference (closes #78061)
- **#56613** — Persistent exponential cooldown manager for provider failover (ported from Nachos llm-proxy)
- **#78087** — Relay session recovery after corrupted session stacks
- **#78088** — Fixed `reasoning_effort` passthrough to DashScope coding-plan endpoint
- **#53958** — Configurable `warn_after_compressions` threshold for long sessions

## 4. Community Hot Topics

| Issue | Comments | Reactions | Topic |
|-------|----------|-----------|-------|
| [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) | 7 | 0 | Background self-improvement review misclassifies memory/skill/user store content |
| [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | 7 | 0 | `read_file` reports valid UTF-8 as binary after 1000-byte multibyte cutoff (regression in 0.19.1) |
| [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) | 7 | 1 | Telegram gateway hangs at "Connecting" even after workaround (closed) |
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | 7 | 2 | Signal adapter: request for native quote/reply, edit, remote-delete, read-receipt |
| [#29771](https://github.com/NousResearch/hermes-agent/issues/29771) | 5 | 0 | Extend credential pool to search backends (Tavily/Exa) |
| [#69216](https://github.com/NousResearch/hermes-agent/issues/69216) | 5 | 1 | Windows: `uv` installed but not found during setup |
| [#67629](https://github.com/NousResearch/hermes-agent/issues/67629) | 5 | 0 | Windows: `search_files` fails with absolute paths due to MSYS path rewriting |

**Analysis:** The most discussed topics cluster around three areas: (1) **platform compatibility** (Windows path handling, uv installation), (2) **gateway reliability** (Telegram hangs, Signal feature gaps), and (3) **tool correctness** (file encoding detection, credential pool expansion). The Telegram issue (#67498) has accumulated a reaction, indicating community concern. The Signal feature request (#39043) has 2 reactions — the highest on any issue — suggesting strong user demand for native Signal capabilities.

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0** | [#24617](https://github.com/NousResearch/hermes-agent/issues/24617) | DeepSeek prompt caching not supported | ✅ Closed |
| **P1** | [#69216](https://github.com/NousResearch/hermes-agent/issues/69216) | Windows setup: uv installed but not found | ⚠️ Open |
| **P1** | [#78052](https://github.com/NousResearch/hermes-agent/issues/78052) | Telegram gateway connect hangs forever in v0.20.0 | ⚠️ Open |
| **P1** | [#71322](https://github.com/NousResearch/hermes-agent/issues/71322) | `/resume` blocked for all pre-v23 migration sessions (NULL chat_id) | ✅ Closed |
| **P2** | [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | `read_file` misclassifies UTF-8 with multibyte chars as binary | ⚠️ Open |
| **P2** | [#67629](https://github.com/NousResearch/hermes-agent/issues/67629) | `search_files` fails on absolute Windows paths | ⚠️ Open (PR #78079 related) |
| **P2** | [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) | Duplicate skill names handled inconsistently across commands | ⚠️ Open |
| **P2** | [#68559](https://github.com/NousResearch/hermes-agent/issues/68559) | Multiplexed gateway ignores routed profile terminal backend | ⚠️ Open |
| **P2** | [#73692](https://github.com/NousResearch/hermes-agent/issues/73692) | `disabled_toolsets: [browser]` silently removes `web_search` | ⚠️ Open |
| **P2** | [#78072](https://github.com/NousResearch/hermes-agent/issues/78072) | Custom provider model name set to display name instead of runtime name | ⚠️ Open |
| **P3** | [#75329](https://github.com/NousResearch/hermes-agent/issues/75329) | Desktop voice conversation only works for first turn | ⚠️ Open |
| **P3** | [#78078](https://github.com/NousResearch/hermes-agent/issues/78078) | Status bar shows duplicate gateway statuses | ⚠️ Open |
| **P3** | [#78057](https://github.com/NousResearch/hermes-agent/issues/78057) | Gateway startup notice corrupts A2A task completion | ✅ Closed |
| **P3** | [#78071](https://github.com/NousResearch/hermes-agent/issues/78071) | `sanitize_api_messages` misses tool messages with empty `tool_call_id` | ✅ Closed |
| **P3** | [#77618](https://github.com/NousResearch/hermes-agent/issues/77618) | Desktop app won't run on macOS 15 (despite 12+ requirement) | ⚠️ Open |

**Notable regression:** Issue #76886 is a confirmed regression in v0.19.1 where `read_file`'s 1000-byte sample boundary cuts multibyte UTF-8 characters, causing valid markdown to be reported as binary. This directly impacts Obsidian note access.

**Active fix PRs:** #78079 (Windows sensitive-path write guard), #78083 (NUL byte lifecycle guard bypass), #78087 (Relay session recovery), #78088 (DashScope reasoning_effort).

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Description | Likelihood |
|----------|-------------|------------|
| [#78061](https://github.com/NousResearch/hermes-agent/issues/78061) / [#78090](https://github.com/NousResearch/hermes-agent/pull/78090) | Tools consuming prior tool output by reference (structured result passthrough) | **High** — PR already open, directly addresses a real limitation |
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | Signal native quote/reply, edit, remote-delete, read-receipt | Medium — well-scoped feature request, 2 reactions |
| [#29771](https://github.com/NousResearch/hermes-agent/issues/29771) | Extend credential pool to search backends (Tavily/Exa) | Medium — provider-agnostic design already exists |
| [#77744](https://github.com/NousResearch/hermes-agent/issues/77744) | Incremental status bar context % updates during tool loops | Low-Medium — UX improvement, 1 comment |
| [#68859](https://github.com/NousResearch/hermes-agent/issues/68859) | Explicit tool retry semantics for lifecycle hooks | Low — observer-grade telemetry gap |
| [#53958](https://github.com/NousResearch/hermes-agent/pull/53958) | Configurable `warn_after_compressions` threshold | **High** — PR open, addresses long-session pain |
| [#56613](https://github.com/NousResearch/hermes-agent/pull/56613) | Persistent exponential cooldown manager for provider failover | **High** — PR open, replaces ad-hoc rate limiting |
| [#78081](https://github.com/NousResearch/hermes-agent/pull/78081) | Complete pt-BR i18n for desktop app | Medium — localization PR, community-driven |

**Prediction:** The next release will likely include #78090 (tool result passthrough), #53958 (compression warnings), #56613 (cooldown manager), and #78005 (skill index exclusion) as they all have open PRs. Windows compatibility fixes (#78079, #78082) are also strong candidates.

## 7. User Feedback Summary

**Pain points:**
- **Windows compatibility is a major friction area.** Multiple users report path-handling bugs (#69216, #67629, #78079), install failures, and desktop app issues. The `_bash_safe_path` MSYS rewriting breaking native Windows binaries is a recurring theme.
- **Telegram gateway instability persists.** Even after workarounds (#63309/#64370), users report hangs in v0.20.0 (#78052, #72454). This is the most complained-about platform.
- **Profile isolation is incomplete.** Issue #10376 documents that `--clone` copies memory files despite documentation promising fresh profiles, and agents can read across profile boundaries.
- **Desktop app regressions.** Voice conversation loop broken after first turn (#75329), macOS 15 launch failure (#77618), duplicate status indicators (#78078), and TERMINAL_CWD set to home dir causing performance issues (#76902).
- **Configuration UX gaps.** `config.yaml` write guards prevent legitimate automation (#60551), and custom provider display names override runtime names (#78072).

**Satisfaction signals:** The project is being actively used in production (Obsidian workflows, multi-platform gateways, A2A tasks). The 650+ contributor base and high PR merge rate indicate a healthy, responsive community. Users appreciate the rapid fix cadence (multiple PRs merged the same day as issues opened).

## 8. Backlog Watch

| Issue | Age | Severity | Why It Needs Attention |
|-------|-----|----------|----------------------|
| [#10376](https://github.com/NousResearch/hermes-agent/issues/10376) | ~4 months | P2 | Profile isolation is a documented guarantee that is broken. Security-relevant for multi-tenant deployments. |
| [#68559](https://github.com/NousResearch/hermes-agent/issues/68559) | ~2 weeks | P2 | Multiplexed gateway ignores per-profile terminal config — breaks Docker sandboxing for routed profiles. Security boundary issue. |
| [#73692](https://github.com/NousResearch/hermes-agent/issues/73692) | ~7 days | P2 | `disabled_toolsets` behavior is inconsistent across two code paths, silently removing `web_search`. Misleading config semantics. |
| [#69216](https://github.com/NousResearch/hermes-agent/issues/69216) | ~2 weeks | P1 | New Windows users cannot complete setup. Blocks first-time adoption on the platform. |
| [#78052](https://github.com/NousResearch/hermes-agent/issues/78052) | 1 day | P1 | Telegram gateway hang is a fresh v0.20.0 regression affecting production deployments. |
| [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | 2 days | P2 | UTF-8 binary misclassification regression impacts real user workflows (Obsidian). |
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | ~2 months | P3 | Signal feature gap with 2 community reactions — high-demand platform capability. |

**Maintainer attention needed:** Issues #10376 and #68559 have security implications (profile isolation, sandbox boundary) and have been open the longest. The Telegram regression (#78052) is fresh and production-impacting but may require deeper investigation given that standalone adapter scripts connect fine while the gateway process does not.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-04

---

## 1. Today's Overview

PicoClaw saw moderate development activity on 2026-08-03, with 8 issues and 5 pull requests updated in the past 24 hours. No new releases were published. The project shows a healthy closure rate (5 of 8 issues closed, 3 of 5 PRs merged), indicating active maintenance. Current focus areas include dispatch-rule routing bugs, localization expansion, and gateway lifecycle improvements for headless deployments. Three open PRs address critical context-management and Telegram topic-handling gaps, while two open issues flag performance and reliability concerns in the WebUI and MCP agent loop.

---

## 2. Releases

No new releases were published in this reporting period.

---

## 3. Project Progress

### Merged / Closed Pull Requests

| PR | Description | Author | Link |
|----|-------------|--------|------|
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | Fix scope bug for Antigravity token refresh — token refresh failed due to incorrect scope passing, causing `PERMISSION_DENIED` errors | sarff | [PR #3267](https://github.com/sipeed/picoclaw/pull/3267) |
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | Add full Japanese (ja) localization to WebUI — 968-line translation, registered in i18next and dayjs | honbou | [PR #3273](https://github.com/sipeed/picoclaw/pull/3273) |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | Fix agent/account ID normalization to strip leading/trailing underscores, ensuring regex compliance | Osamaali313 | [PR #3202](https://github.com/sipeed/picoclaw/pull/3202) |

### Key Advances
- **Localization:** Japanese language support now available in the WebUI, fulfilling community request #3272.
- **Auth reliability:** Antigravity token refresh scope bug resolved, improving stability for users of that provider.
- **Routing robustness:** ID normalization now correctly handles edge-case characters, preventing dispatch failures for agents with unusual IDs.

---

## 4. Community Hot Topics

### Most Discussed / Reacted Items

1. **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)** — *Web UI chat input lag with long history* (3 comments, 1 👍)
   - The only currently open issue with community engagement. Users report significant input lag when chat history grows, a recurring pain point for power users.

2. **[Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)** — *MCP server connection failure hangs agent loop* (2 comments, 1 👍)
   - A critical reliability issue: a single MCP connection failure can freeze the entire chat interface. High severity given PicoClaw's agent-centric design.

3. **[PR #3316](https://github.com/sipeed/picoclaw/pull/3316)** — *Routed-agent context management fix* (open)
   - Directly addresses Issue #3301. The author reports that dispatch-routed agents lose conversation history and never trigger auto-compression — a significant bug for multi-agent deployments.

4. **[PR #3315](https://github.com/sipeed/picoclaw/pull/3315)** — *Telegram topic support in private bot chats* (open)
   - Expands Telegram channel compatibility to forum-topic-mode private chats, broadening the platform support surface.

**Analysis:** The community is pushing hard on **multi-agent routing reliability** (issues #3269, #3301; PR #3316) and **platform coverage** (Telegram topics, Japanese localization). WebUI performance (#3281) remains an unresolved concern with visible user frustration.

---

## 5. Bugs & Stability

### Open Bugs (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 High | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP connection failure hangs the agent loop, stopping all replies | None yet |
| 🟠 Medium | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | WebUI chat input becomes very laggy with moderate history length | None yet |
| 🟠 Medium | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | `/clear` and session auto-compression broken for non-default routed agents | [PR #3316](https://github.com/sipeed/picoclaw/pull/3316) open |

### Recently Closed Bugs

| Issue | Description | Resolution |
|-------|-------------|------------|
| [#3268](https://github.com/sipeed/picoclaw/issues/3268) | `exec` tool `action` parameter was required instead of defaulting to `"run"` | Closed — likely fixed via default value change |
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Gateway startup failed with unknown `deltachat` channel type despite no config | Closed — config parsing robustness improved |
| [#3264](https://github.com/sipeed/picoclaw/issues/3264) | `SplitMessage` infinite loop on oversized fenced-code info string | Closed — loop condition patched |

**Stability Assessment:** Three high-visibility bugs remain open. The MCP hang (#3269) is the most critical for production users. The infinite-loop bug in `SplitMessage` (#3264) is now resolved, which is positive for message-processing reliability.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signal Strength |
|---------|----------|-----------------|
| Japanese WebUI localization | [#3272](https://github.com/sipeed/picoclaw/issues/3272) → [PR #3273](https://github.com/sipeed/picoclaw/pull/3273) | ✅ **Merged** — already shipped |
| Launcher systemd/externally-managed gateway support | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | ✅ **Closed** — likely addressed |
| Telegram private-chat topic support | [PR #3315](https://github.com/sipeed/picoclaw/pull/3315) | 🟡 Open PR — high likelihood of merge |
| Routed-agent context/history/compression fixes | [PR #3316](https://github.com/sipeed/picoclaw/pull/3316) | 🟡 Open PR — critical for multi-agent users |
| MCP connection fault tolerance | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 🔴 No PR yet — likely next priority |

**Prediction:** The next release will likely include PRs #3315 (Telegram topics) and #3316 (routed-agent context). MCP fault tolerance (#3269) and WebUI performance (#3281) are strong candidates for the subsequent release cycle.

---

## 7. User Feedback Summary

### Pain Points
- **WebUI responsiveness:** Issue #3281 highlights that even modest chat history causes input lag, degrading the user experience for active sessions.
- **MCP fragility:** Issue #3269 describes a single-point-of-failure where an MCP connection drop freezes the entire chat interface — users expect graceful degradation.
- **Multi-agent routing gaps:** Issue #3301 and PR #3316 reveal that routed agents currently lack basic session management (history, compression, `/clear`), making multi-agent setups unreliable.
- **Exec tool friction:** Issue #3268 noted that the `exec` tool's required `action` parameter caused unpredictable LLM call failures — now closed.

### Satisfaction Signals
- Positive: Japanese localization and systemd launcher support were community-requested features that have been delivered.
- Positive: The `deltachat` startup crash (#3265) and `SplitMessage` infinite loop (#3264) were resolved, improving headless/server deployment stability.
- Negative: Two open issues with 👍 reactions (#3281, #3269) indicate unresolved friction points affecting core user workflows.

---

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|------|-----|------|-------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — WebUI input lag | ~14 days open | Medium | Has community votes; no PR yet. Performance regression likely needs frontend optimization. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP hang on connection failure | ~15 days open | **High** | No fix in progress. Critical for production reliability. Needs timeout/circuit-breaker logic. |
| [PR #3316](https://github.com/sipeed/picoclaw/pull/3316) — Routed-agent context fix | Open 1 day | Medium | PR exists but unmerged. Blocks multi-agent users. |
| [PR #3315](https://github.com/sipeed/picoclaw/pull/3315) — Telegram topic support | Open 1 day | Low | Small, contained PR. Low risk, high value for Telegram users. |

**Maintainer Attention Needed:** Issue #3269 (MCP hang) is the most pressing backlog item — it has no associated PR and affects core agent reliability. Issue #3281 (WebUI lag) also warrants prioritization given its impact on daily user experience.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-04

## 1. Today's Overview

NanoClaw showed solid development momentum over the last 24 hours, with **9 PRs updated** (3 open, 6 merged/closed) and only **1 open issue** actively discussed. The project is in a mature maintenance phase: most activity centers on bug fixes, image hardening, and operational reliability rather than new feature launches. No new releases were published today. Community engagement is quiet on the issue tracker (0 reactions on the sole open issue), but the PR velocity suggests an active core team moving operational improvements through review.

## 2. Releases

No new releases were published today.

## 3. Project Progress

**Merged / Closed PRs (6):**

- **#3182** — [core-team] Repinned the agent image to `hardened-2026-08-02` (621 MB, up from 611 MB), refreshing the base while preserving identical `ai.echo.image.upstream.digest`. Improves security posture without content changes. ([Link](https://github.com/nanocoai/nanoclaw/pull/3182))
- **#3180** — [core-team] Surfaced hardened image migration workflow as an operational/container skill, enabling self-serve updates. ([Link](https://github.com/nanocoai/nanoclaw/pull/3180))
- **#3137** — [core-team] Fixed engagement consistency: agents can now inspect their wirings, request approved policy updates, and invalid JS engagement regexes are rejected. Accumulated messages no longer trigger unwanted warm-container follow-ups. ([Link](https://github.com/nanocoai/nanoclaw/pull/3137))
- **#3181** — [core-team] Fixed iMessage opt-in behavior so users must send a first message to the assigned line to engage the agent. ([Link](https://github.com/nanocoai/nanoclaw/pull/3181))
- **#3143** — [core-team] Preserved resolved approval card content (title, request details) while muting buttons to reflect decision/timeout status. Terminal cards now survive deletion. ([Link](https://github.com/nanocoai/nanoclaw/pull/3143))
- **#3178** — Closed as opened against the wrong repository; no upstream change. ([Link](https://github.com/nanocoai/nanoclaw/pull/3178))

**Open PRs under review (3):**

- **#3184** — Fixes session resume crash when transcript files are missing; rotates to a new session instead of failing with `No conversation found`. ([Link](https://github.com/nanocoai/nanoclaw/pull/3184))
- **#3183** — Pins `cleanupPeriodDays` to prevent retention cleanup from reaping cold but valid sessions, addressing a data-loss regression. ([Link](https://github.com/nanocoai/nanoclaw/pull/3183))
- **#3092** — Adds support for remote Streamable HTTP MCP servers (feature-level change). ([Link](https://github.com/nanocoai/nanoclaw/pull/3092))

## 4. Community Hot Topics

- **Issue #3179** — *SyntaxError: `node:util` does not provide export named `styleText`* ([Link](https://github.com/nanocoai/nanoclaw/issues/3179))
  - **Root cause:** `@clack/core@1.2.0` requires Node.js ≥ 21 (`styleText` was added then), but some users run older runtimes (e.g., Jovyan containers). The error surfaces at module load time, blocking startup entirely.
  - **Underlying need:** Better Node.js version gating and clearer runtime compatibility documentation. The project uses `.mjs` ESM imports directly from `@clack/core`, making version mismatch a hard failure rather than a graceful degradation.

- **PR #3092** — *Remote Streamable HTTP MCP servers* ([Link](https://github.com/nanocoai/nanoclaw/pull/3092))
  - Open since 2026-07-19 with no merge yet. Reflects strong community interest in extending MCP connectivity beyond local/in-process servers — a common need for distributed agent deployments.

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Status |
|----------|-----------|-------------|------------|
| **Critical** | #3179 | Startup crash on Node < 21 via `@clack/core` | No fix PR open |
| **High** | #3184 (open) | Session dies with `No conversation found` when transcript file is missing | Fix PR #3184 open |
| **High** | #3183 (open) | Retention cleanup reaps cold sessions causing raw errors to users | Fix PR #3183 open |
| **Medium** | #3143 (merged) | Approval card content lost on resolve/deletion | ✅ Merged |
| **Medium** | #3181 (merged) | iMessage opt-in not enforced | ✅ Merged |

Two high-severity bugs related to session lifecycle management have open fix PRs. The critical Node.js compatibility issue remains unresolved and likely affects a subset of users in constrained container environments.

## 6. Feature Requests & Roadmap Signals

- **Remote MCP server support** (PR #3092, open since July 19) — Strong signal that distributed/MCP-over-HTTP is a priority for power users. If merged, this would be the most significant feature addition in the current cycle.
- **Self-serve engagement policy controls** (PR #3137, merged) — Agents can now inspect and request wiring updates, suggesting the roadmap is moving toward granular per-agent configuration.
- **Approval card persistence** (PR #3143, merged) — Indicates ongoing investment in UX reliability for human-in-the-loop workflows.

No new feature requests appeared in issues today.

## 7. User Feedback Summary

- **Runtime environment friction** is the dominant pain point. Issue #3179 highlights that users running NanoClaw in constrained environments (e.g., Jupyter/notebook containers) encounter hard failures from transitive dependency version mismatches — not from NanoClaw itself, but from `@clack/core`'s Node.js requirement.
- **Session lifecycle reliability** is a recurring concern. Two separate PRs (#3184, #3183) address the same theme: cold/quiet sessions being mishandled by retention logic or missing transcripts. Users expect sessions to persist gracefully through inactivity.
- **Opt-in clarity** (iMessage, PR #3181) suggests users value explicit consent mechanisms — the fix confirms this is a design priority.

Overall satisfaction appears positive given the low issue count and high PR throughput, but runtime compatibility documentation could reduce friction for non-standard deployments.

## 8. Backlog Watch

- **PR #3092** — Remote Streamable HTTP MCP servers. Open since **2026-07-19** (~16 days). A significant feature with no merge signal yet; may need maintainer review or test coverage before landing. ([Link](https://github.com/nanocoai/nanoclaw/pull/3092))
- **Issue #3179** — Node.js `< 21` compatibility crash. No fix PR yet. Worth addressing with either a Node version check at startup or a fallback polyfill for `styleText`. ([Link](https://github.com/nanocoai/nanoclaw/issues/3179))
- **PR #3184 & #3183** — Both open fix PRs for session management bugs. These are small, scoped, and follow guidelines — likely close to merge but still awaiting review. ([#3184](https://github.com/nanocoai/nanoclaw/pull/3184) · [#3183](https://github.com/nanocoai/nanoclaw/pull/3183))

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>



# NullClaw Project Digest — 2026-08-04

---

## 1. Today's Overview

NullClaw shows moderate development activity today with 5 PR updates and 1 open issue being actively discussed. The most significant recent progress is the **closure of two companion PRs** (#964 and #965) enabling native API-level tool calling during streaming, marking a meaningful step forward in agent reliability. The project remains in a steady pre-release phase with no new versions published. A persistent scheduler authorization bug (#915) continues to block users running external Ollama backends.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

**Merged/Closed PRs (2):**

- **#964 — Enable native API-level tool calls during streaming** (Closed)
  Enables structured tool-call deltas to be preserved in `StreamChatResult`, allowing the agent to execute pure streamed tool responses. Provider-wide capability checks were refined to support this. ([GitHub](https://github.com/nullclaw/nullclaw/pull/964))

- **#965 — Structured streaming tool-call support for SSE parser** (Closed)
  Companion to #964, this adds SSE parser-level support for structured tool-call streaming. Addresses cases where servers leave model-emitted XML in `delta.content`. ([GitHub](https://github.com/nullclaw/nullclaw/pull/965))

**Impact:** These two closures represent a **feature advancement** in the core agent loop — native tool calls during streaming were previously broken. This significantly improves real-time tool-use reliability for downstream providers.

---

## 4. Community Hot Topics

- **Issue #915 — Scheduler unauthorized** (4 comments, 1 👍, active since 2026-05-15, updated 2026-08-03)
  A user reports that the scheduler component fails with unauthorized errors when running NullClaw in Ubuntu with an external Ollama instance on the same network. The LLM and general tool calling work fine, but the scheduler does not function in Telegram or other channels. This issue has been open for nearly **3 months**, suggesting a persistent pain point for distributed self-hosted deployments. ([GitHub](https://github.com/nullclaw/nullclaw/issues/915))

- **PR #982 — Fix Telegram proxy transport** (Open, created 2026-08-03)
  Routes Telegram Bot API POST requests through the existing curl transport when a proxy is configured. Signals ongoing interest in reliable Telegram integration, especially in proxy-heavy deployment environments. ([GitHub](https://github.com/nullclaw/nullclaw/pull/982))

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description |
|----------|----------|-------------|
| 🔴 Medium | [#915](https://github.com/nullclaw/nullclaw/issues/915) | Scheduler authorization failure with external Ollama hosts; impacts scheduled task execution across channels |

No crashes or regressions were reported today. The scheduler bug (#915) remains open without a linked fix PR.

---

## 6. Feature Requests & Roadmap Signals

- **Structured streaming tool calls** — The merge of #964/#965 signals that native API-level tool calling during streaming is now a shipped capability. Future iterations may focus on error recovery during streamed tool chains and multi-tool concurrency.
- **Proxy reliability** — PR #982 (Telegram proxy transport) and PR #983 (curl path for proxied requests) indicate the project is actively investing in **network resilience** for self-hosted deployments behind corporate proxies or restricted networks.

**Predicted next-version focus:** Expanded provider compatibility for proxied environments and deeper scheduler hardening.

---

## 7. User Feedback Summary

**Pain points:**
- **Scheduler authorization** with external LLM backends (#915) — users deploying NullClaw with Ollama on separate machines hit an auth barrier that blocks automated task execution, a core agent feature.
- **Proxy configuration** — multiple recent PRs (#982, #983) suggest Telegram and provider requests are not cleanly routing through proxies, a frequent friction point for enterprise/self-hosted users.

**Satisfaction signals:**
- Tool calling and general LLM integration are reported as functional, indicating core functionality is stable.
- The community is actively contributing fixes (ArcanePivot, mtdphn), suggesting a healthy contributor base.

---

## 8. Backlog Watch

- **[#915](https://github.com/nullclaw/nullclaw/issues/915) — Scheduler unauthorized (Open, 3 months)** ⚠️ This is the most concerning backlog item. A core scheduling feature is broken for a non-trivial deployment pattern (external Ollama). No fix PR exists yet; maintainer attention is needed.
- **[#956](https://github.com/nullclaw/nullclaw/pull/956) — Bump alpine 3.23 → 3.24 (Open, dependabot)** — Routine dependency update, low urgency but beneficial for container security. ([GitHub](https://github.com/nullclaw/nullclaw/pull/956))

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-04

## 1. Today's Overview

IronClaw shows **high development velocity** with 45 issues and 50 PRs updated in the last 24 hours (36 open issues, 32 open PRs). Activity is dominated by the **Reborn architecture re-layering effort** (WS2/WS3 waves), with core contributor @BenKurrek driving multiple large refactors in parallel. The project remains release-stalled — no new versions shipped — while CI gates, dependency-bump fixes, and a bug-bash wave consume significant triage capacity. Overall health is strong: merge rate is healthy (18 closed/merged PRs), and architectural debt repayment is progressing systematically.

## 2. Releases

**No new releases** were published on 2026-08-04.

> The most recent release activity appears in the still-open PR #5598 (closed 2026-08-03), which bumped `ironclaw_common` 0.4.2→0.5.0 (⚠ API breaking), `ironclaw_safety` 0.2.2→0.2.3 (compatible), and `ironclaw_skills` 0.3.0→0.4.0 (⚠ breaking). The weekly Wednesday release strategy documented in PR #7049 has not yet yielded a promotion.

## 3. Project Progress

### Merged / Closed Today
| PR | Author | Summary |
|---|---|---|
| [#7064](https://github.com/nearai/ironclaw/pull/7064) | BenKurrek | **WS3/WS4:** Sheds the model gateway and tool disclosure into `loop_host` — move-only, zero tests lost |
| [#7040](https://github.com/nearai/ironclaw/pull/7040) | BenKurrek | **WS2 strays closed:** Three CHECKLIST rows resolved; two stale claims corrected via dated amendments |
| [#7070](https://github.com/nearai/ironclaw/pull/7070) | serrrfirat | **WebUI E2E unblocked:** Five failing Reborn WebUI v2 tests fixed; SSE keep_alive cursor + admin retry are prod-correctness fixes |
| [#7024](https://github.com/nearai/ironclaw/pull/7024) | henrypark133 | **MCP auth fix:** Resolves hosted-MCP authentication during registration; `Auto` mode now performs credential-free handshake |
| [#7023](https://github.com/nearai/ironclaw/pull/7023) | Dependabot | Bumps `everything-else` group (base64, toml, rstest, etc.) |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | ironclaw-ci[bot] | Release PR for ironclaw_* crate bumps (closed) |
| [#7049](https://github.com/nearai/ironclaw/pull/7049) | serrrfirat | Weekly Wednesday release strategy documentation added |

### Open PRs Advancing Today
- **#7084** — Wave 3 `wit/` move inside owning crate (unblocked after #7087 planner gap fix landed in `1f66b58`)
- **#7090** — Split `host_runtime/obligations.rs` into three chartered owners
- **#7096** — Route operator secrets through a `product_contracts` port (security-sensitive)
- **#7094** — Close Wave 2 extension-registry re-layer + `include_str!` kills + nested-tree coverage
- **#7065** — Sandbox lane merge + flip `mcp` onto contracts
- **#7077** — One vendor auth covers every installed extension sharing the account (fixes #7069)
- **#7088** — Expose custom MCP registration as model-visible tool
- **#7080** — Move skill-install executor to `extension_support`

## 4. Community Hot Topics

| # | Type | Title | Comments | Link |
|---|---|---|---|---|
| #6284 | Epic | Error-recoverability endgame — model recovers from 100% of errors | 15 | [Issue](https://github.com/nearai/ironclaw/issues/6284) |
| #6524 | Epic | Hermetic capability & journey testing platform | 4 | [Issue](https://github.com/nearai/ironclaw/issues/6524) |
| #7087 | Bug | Reborn PR test planner hard-fails on Dockerfile/.githooks/.claude/ | 3 | [Issue](https://github.com/nearai/ironclaw/issues/7087) |
| #7085 | Bug | `check-version-bumps.sh` silently skips WIT_TOOL_VERSION cross-check on macOS | 2 | [Issue](https://github.com/nearai/ironclaw/issues/7085) |
| #7060 | Bug | Platform-owned WIT & extension package changes fail Reborn scope classifier | 2 | [Issue](https://github.com/nearai/ironclaw/issues/7060) |

**Analysis:** The top-commented issue (#6284) reflects a deep architectural concern — making the model robustly recover from every mid-run error — signaling the team's commitment to production-grade reliability. The testing epic (#6524) indicates a recognized gap in deterministic E2E coverage. The three lowest-comment issues (#7087, #7085, #7060) are all **CI/gate regressions** surfaced during the Wave 3 `wit/` move, revealing that the Reborn scope classifier has not kept pace with repository restructuring.

## 5. Bugs & Stability

### Priority P1
| # | Title | Author | Link | Fix PR |
|---|---|---|---|---|
| #7069 | Google services require repeated authentication | joe-rlo | [Issue](https://github.com/nearai/ironclaw/issues/7069) | ✅ #7077 (merged 2026-08-04) |
| #7074 | Multi-tool meeting research fails after retrieving calendar data | joe-rlo | [Issue](https://github.com/nearai/ironclaw/issues/7074) | — |

### Priority P2
| # | Title | Author | Link | Fix PR |
|---|---|---|---|---|
| #7071 | "Reconnecting" status flashes on every streaming chunk | joe-rlo | [Issue](https://github.com/nearai/ironclaw/issues/7071) | — |
| #7075 | Agent ignores follow-up question after failed run | joe-rlo | [Issue](https://github.com/nearai/ironclaw/issues/7075) | — |
| #7073 | Agent exposes internal implementation details in responses | joe-rlo | [Issue](https://github.com/nearai/ironclaw/issues/7073) | — |
| #7072 | Telegram messages render raw Markdown | joe-rlo | [Issue](https://github.com/nearai/ironclaw/issues/7072) | — |

### Other Notable Bugs
- **#7081** — Docker fail-closed gate wired to nothing (`IRONCLAW_REQUIRE_DOCKER_TESTS` never set) ([Issue](https://github.com/nearai/ironclaw/issues/7081))
- **#7082** — `builtin.skill_install` rejects valid multi-file shapes and silently drops `url`-install fields ([Issue](https://github.com/nearai/ironclaw/issues/7082))
- **#7083** — Coverage dark for `crates/extensions/` family since colocated under subdirectory ([Issue](https://github.com/nearai/ironclaw/issues/7083))
- **#7078** — Shared-vendor OAuth scope ceiling is store-wide, not caller-scoped ([Issue](https://github.com/nearai/ironclaw/issues/7078))
- **#7068** — Hosted MCP `destructiveHint` omitted → read as `false`, spec-defaults to `true` ([Issue](https://github.com/nearai/ironclaw/issues/7068))
- **#7041** — WASM guest diagnostics can leak secrets via runtime/model/tracing ([Issue](https://github.com/nearai/ironclaw/issues/7041))

**Stability note:** The bug-bash wave (5 P1/P2 issues from @joe-rlo, all on Railway staging) suggests the latest deployment surface has UX and resilience gaps. The Reborn CI tooling also has several pre-existing regressions (#7087, #7085, #7060, #7081, #7083) that were surfaced but not yet fixed as of this digest.

## 6. Feature Requests & Roadmap Signals

| # | Title | Author | Link |
|---|---|---|---|
| #7097 | Add billing support escalation pathways to billing page | sergeiest | [Issue](https://github.com/nearai/ironclaw/issues/7097) |
| #7044 | Onboarding to channel-first approach (OOBE) | sergeiest | [Issue](https://github.com/nearai/ironclaw/issues/7044) |
| #7046 | Configure all tools, channels, and extensions from AI chat | sergeiest | [Issue](https://github.com/nearai/ironclaw/issues/7046) |
| #6941 | Skills the model can self-create, find, choose, and use | pranavraja99 | [Issue](https://github.com/nearai/ironclaw/issues/6941) |

**Outstanding PRs with feature signal:**
- **#6994** — OOBE automation-tasks prototype (carousel, inline cards, agent-mode pill) — directly addresses #7044
- **#6957** — Manage installed package lifecycle with persisted, digest-pinned receipts and model-visible `ironhub.status` / `ironhub.update`
- **#7088** — Expose custom MCP registration as a model-visible tool

**Prediction:** The channel-first onboarding flow (#7044 + #6994) and chat-based configuration (#7046) are likely candidates for the next user-facing release, as they address the highest-friction adoption barrier. The billing escalation pathway (#7097) is a smaller trust/support fix that may ship sooner.

## 7. User Feedback Summary

| Signal | Source | Summary |
|---|---|---|
| **Adoption friction** | #7044, #6994 | First-time users face a blank WebUI with no guidance on what to do; onboarding prototype adds carousel + agent-mode pill |
| **Billing confusion** | #7097 | Users don't know who handles NEAR AI billing issues; billing page lacks resolution pathways |
| **Repeated auth fatigue** | #7069 (P1) | Google services request separate auth even after the user completes the flow multiple times — **now fixed** in #7077 |
| **Streaming reconnection noise** | #7071 (P2) | "Reconnecting" status flashes on every SSE chunk despite successful streaming |
| **Post-failure UX** | #7075 (P2) | Agent ignores new user questions after a failed run and resumes the old task |
| **Internal leak** | #7073 (P2) | Tool names and delivery-routing logic appear in user-facing responses |
| **Markdown rendering** | #7072 (P2) | Telegram channel renders raw Markdown instead of formatted text |
| **Channel-first aspiration** | #7046 | Users want to configure tools, channels, and extensions entirely through AI chat rather than navigating the WebUI |

Overall sentiment: users value the multi-tool, multi-channel vision but are experiencing friction at onboarding, billing transparency, and post-error recovery. The bug-bash wave indicates the Railway staging instance is serving as an early canary for these UX gaps.

## 8. Backlog Watch

| # | Title | Author | Age | Why It Needs Attention |
|---|---|---|---|---|
| #6284 | Error-recoverability endgame (100% recovery) | serrrfirat | ~16 days | Flagship reliability promise; 15 comments, epic-scale |
| #6524 | Hermetic capability & journey testing | serrrfirat | ~13 days | Tests whether every critical journey has deterministic coverage |
| #7041 | WASM guest diagnostics secret exposure | theredspoon | ~1 day | Security-sensitive; stacked PR #7048 pending |
| #7095 | `ironclaw_extension_manager` holds direct `ironclaw_secrets` edge | BenKurrek | <1 day | Violates §8.2 layering rule; blocks WS3 closure |
| #7093 | 17 cross-crate `include_str!` sites remain | BenKurrek | <1 day | Blocks WS2 row closure; `REPORT_ONLY` path to `false` not set |
| #7092 | `ironclaw_extension_host` re-layer to loops (12 files + blocking edge) | BenKurrek | <1 day | Second blocking dependency; WS3 chain depends on it |
| #7067 | Replace `ResourceGovernor` with reserve/reconcile/release port | BenKurrek | ~1 day | Last two `runtimes → kernel` layer-matrix exceptions |

**Maintainer note:** The WS2/WS3 wave backlog (#7095, #7093, #7092, #7067) is the critical path for architecture debt repayment. #7095 and #7093 were opened today and currently have zero comments — they need owner assignment and early review to prevent stalling the wave.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-08-04

---

## 1. Today's Overview

LobsterAI (netease-youdao/LobsterAI) shows **moderate daily activity** with 2 open issues and 11 PRs touched in the last 24 hours (6 merged/closed, 5 still open). No new releases were published. The project remains in active development, with contributors pushing fixes for Windows process-termination reliability, sidebar multi-agent task filtering, and a startup credit campaign for NetEase's user-acquisition initiative. The two stale issues (#1206, #1213) are notable quality-of-life concerns that have gone unanswered since April, signaling a growing backlog.

---

## 2. Releases

**No new releases** published in the last 24 hours.

---

## 3. Project Progress

**Merged / Closed PRs today:**

| PR | Type | Description | Link |
|----|------|-------------|------|
| #2423 | Revert | Reverted `fix btw tools` changes | [PR #2423](https://github.com/netease-youdao/LobsterAI/pull/2423) |
| #2422 | Fix | `fix btw tools` (reverted by #2423) | [PR #2422](https://github.com/netease-youdao/LobsterAI/pull/2422) |
| #2421 | Fix | `fix btw tools` (reverted by #2423) | [PR #2421](https://github.com/netease-youdao/LobsterAI/pull/2421) |
| #2420 | Fix | Windows: re-kill survivor processes on every stop-poll round | [PR #2420](https://github.com/netease-youdao/LobsterAI/pull/2420) |
| #2419 | Feat | Startup credit campaign popup & persistent entry for NetEase acquisition | [PR #2419](https://github.com/netease-youdao/LobsterAI/pull/2419) |
| #2418 | Feat | Sidebar multi-agent task activity filter (Codex-inspired) | [PR #2418](https://github.com/netease-youdao/LobsterAI/pull/2418) |

**Key advances:**
- **Windows process cleanup** (#2420): A race condition where spawned processes survived the stop-gate has been patched — `Stop-Process` is now re-issued every poll round with per-process survivor logging.
- **Multi-agent task filter** (#2418): A sidebar filter button with a blue indicator dot helps users surface tasks across multiple agents that need attention.
- **Startup credit campaign** (#2419): New-conversation-page entry and popup flow added for the NetEase user-acquisition campaign, including login continuation and claim-handling.

---

## 4. Community Hot Topics

| Item | Type | Comments | Summary | Link |
|------|------|----------|---------|------|
| #1208 | PR | — | Manual retry button for transient Cowork errors (429, network) | [PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208) |
| #1209 | PR | — | Web-search blocked by `--disable-blink-features=AutomationControlled` Chrome flag | [PR #1209](https://github.com/netease-youdao/LobsterAI/pull/1209) |
| #1212 | PR | — | Raise custom provider limit from 10 to 20 | [PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212) |
| #1214 | PR | — | Export session detail as Markdown | [PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214) |
| #1206 | Issue | 1 | Kimi 2.5 duplicate action-confirmation replies | [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) |
| #1213 | Issue | 1 | Request for Markdown export in session details | [Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) |

**Underlying needs:**
- **Retry UX** (#1208): Users hitting rate limits (429) or transient errors want an in-line retry instead of re-typing their entire message.
- **Web-search stability** (#1209): External Chrome flags injected by prior automation-tool data directories are blocking the web-search skill — a real portability concern.
- **Model-provider flexibility** (#1212): Power users manage more than 10 custom providers and hit a hard cap.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR | Link |
|----------|------|-------------|--------|------|
| **Medium** | #1206 | Kimi 2.5 model repeats "current action" confirmation prompts when analyzing documents; switched model resolves the issue. | None yet | [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) |
| **Low–Medium** | #2422/#2421 → #2423 | `fix btw tools` was merged then immediately reverted, indicating an unexpected regression in the tools integration area. | Revert landed (#2423) | [PR #2423](https://github.com/netease-youdao/LobsterAI/pull/2423) |
| **Medium** | #2420 | Windows: survivor processes after stop poll (now fixed) | #2420 (merged) | [PR #2420](https://github.com/netease-youdao/LobsterAI/pull/2420) |

**Notes:**
- The `btw tools` revert chain (#2421 → #2422 → #2423) suggests a fragile integration that needs regression-testing before landing again.
- Issue #1206 (Kimi 2.5 duplicate replies) has no associated fix PR and remains stale.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Probability of Near-Term Inclusion |
|---------|--------|-----------------------------------|
| **Export session as Markdown** | Issue #1213 / PR #1214 | **High** — PR is already implemented; awaiting maintainer review |
| **Manual retry button for Cowork errors** | PR #1208 | **High** — PR complete; addresses a frequent pain point |
| **Increase custom provider limit to 20** | PR #1212 | **Medium** — low-risk change, likely merge-ready |
| **Web-search flag isolation** | PR #1209 | **Medium** — fixes a real user-reported blockage |
| **Startup credit campaign** | PR #2419 | **Already shipped** — NetEase-specific acquisition feature |

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Kimi 2.5 prompt duplication** | Issue #1206 — "必现" (100% repro) on doc analysis | 😤 Frustrated |
| **Cannot export conversations as text** | Issue #1213 — users forced to screenshot or manually copy | 😤 Inconvenienced |
| **Rate-limit / transient-error dead ends** | PR #1208 — no retry button, must re-type entire message | 😤 Poor UX |
| **Chrome automation flags leaking into LobsterAI** | PR #1209 — web-search broken by residual flags from other tools | 😤 Blocked |
| **Provider count ceiling at 10** | PR #1212 — power users can't preserve older configs when adding new ones | 😐 Restricted |
| **Process termination race on Windows** | PR #2420 — processes surviving the stop gate | 😤 Unreliable |
| **Need multi-agent task visibility** | PR #2418 — no easy way to surface cross-agent tasks needing attention | 😐 Missing feature |

**Overall:** Users report solid core functionality but are hitting edge-case friction points around model-specific bugs, export capabilities, and error recovery. The community is actively submitting PRs for many of these gaps.

---

## 8. Backlog Watch

| Item | Status | Age | Risk |
|------|--------|-----|------|
| #1206 — Kimi 2.5 duplicate replies | Open, stale | ~4 months | Medium — 100% repro, affects a specific model config |
| #1213 — Markdown export request | Open, stale | ~4 months | Low — PR #1214 is ready; just needs review |
| #1208 — Cowork retry button | Open, stale | ~4 months | Medium — UX improvement, PR ready |
| #1209 — Web-search Chrome flag fix | Open, stale | ~4 months | Medium — blocks a core skill for affected users |
| #1212 — Custom provider limit bump | Open, stale | ~4 months | Low — trivial change, PR ready |
| #1277 — Electron dependency bump (40→43) | Open, stale | ~4 months | Medium — large version jump may introduce breaking changes |

**Maintainer attention needed:** Five feature-request PRs (#1208, #1209, #1212, #1214) and one bug-report issue (#1206) have been open since April with no maintainer response. The dependency bump (#1277) across Electron 40→43 is a high-effort review item that likely requires a staged rollout.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-08-04

## 1. Today's Overview

Moltis (moltis-org/moltis) is showing **low but focused activity** today, with zero issues updated and only one open pull request pushed forward in the last 24 hours. No new releases have been cut recently, suggesting the project is in a steady development cycle rather than a sprint-to-release phase. The sole active contribution is a significant feature PR (#1183) targeting MCP server management via managed Git repository bundles — a core architectural improvement. Overall, the project appears **healthy but quiet**, with maintainers and contributors concentrating on a single substantial feature rather than spreading effort across multiple tracks.

## 2. Releases

**No new releases in the current reporting window.** The absence of recent version bumps may indicate the team is holding releases until PR #1183 and any accompanying work land in the main branch.

## 3. Project Progress

| Item | Type | Status | Details |
|------|------|--------|---------|
| [#1183](https://github.com/moltis-org/moltis/pull/1183) | PR | 🟡 Open | `feat(mcp): add managed repository bundles` — authored by **penso**, created 2026-08-02, last updated 2026-08-03 |

**What advanced:** PR #1183 introduces **managed Git repository bundles** for MCP servers, enabling full lifecycle management: discovering, previewing, installing, updating, rolling back, and removing MCP servers. Key capabilities include HTTPS credential support, pinned managed SSH transport, vault lifecycle integration, and support for imported repository-backed MCP configurations. This represents meaningful progress on MCP server discoverability and management — a capability that was previously absent or rudimentary.

**Merged/closed PRs today:** None.

## 4. Community Hot Topics

**#1183 — feat(mcp): add managed repository bundles** [PR #1183](https://github.com/moltis-org/moltis/pull/1183)
- *Author:* penso | *Updated:* 2026-08-03 | *Reactions:* 0 👍 | *Comments:* —
- **Analysis:** This is the only active item and clearly the community's focal point. The feature addresses a fundamental gap: the ability to **manage MCP servers through versioned, repository-backed bundles** rather than ad-hoc configuration. The mention of "simplify web onboarding" in the summary suggests this also targets reducing friction for new users — a common pain point in AI agent ecosystems where tool/MCP setup is notoriously cumbersome. The involvement of "vault lifecycle integration" signals this isn't just a convenience feature but a **security and operational hardening** initiative. Worth watching for reviewer feedback and whether it blocks or unblocks other roadmap items.

**No active issues** were reported or discussed in the last 24 hours.

## 5. Bugs & Stability

**No bug reports, crashes, or regressions filed today.** The clean issue slate suggests either strong day-to-day stability or a contributor base still familiarizing itself with the latest codebase. No fix PRs are warranted at this time.

## 6. Feature Requests & Roadmap Signals

**Strong signal — MCP managed repository bundles (#1183)** is the dominant roadmap indicator. The scope of this PR (discovery, preview, install, update, rollback, removal, credential management, SSH pinning, vault integration, imported configs) maps to a **comprehensive MCP supply-chain and lifecycle management subsystem**. If merged, this will likely become the foundation for:

- **Next version's headline feature** — expect PR #1183 to be highlighted in the release notes of whatever version follows.
- **Reduced custom configuration burden** — the "imported repository-backed MCP configurations" and "simplified web onboarding" language suggests the team is moving toward a pull-based, GitOps-adjacent model for MCP server management.
- **Potential follow-on work** — pinned transports and vault integration imply upcoming features around supply-chain security (SLSA-style guarantees, signing verification) and secrets management.

## 7. User Feedback Summary

While no user-submitted issues appeared today, the **substance of PR #1183 reveals the community's underlying needs**:

| Need | Evidence |
|------|----------|
| **Simpler MCP onboarding** | Summary explicitly calls out "simplify web onboarding" |
| **MCP server version control & rollback** | Bundle lifecycle (install → update → rollback → remove) |
| **Secure credential handling** | HTTPS credentials + vault lifecycle integration |
| **Deterministic transport** | Pinned managed SSH transport |
| **Repository-backed configs** | Imported repository-backed MCP configurations |

These signals point to a user base that has moved past the "hello world" phase of AI agents and is now grappling with **operational maturity** — managing many MCP servers across environments, keeping them secure, and maintaining the ability to revert changes. Satisfaction appears to be driving the feature request pipeline rather than dissatisfaction with specific bugs.

## 8. Backlog Watch

| Item | Risk | Note |
|------|------|------|
| [#1183](https://github.com/moltis-org/moltis/pull/1183) | 🟡 Moderate | Open PR with no reviewer comments yet (as of 2026-08-04). High-impact feature; timely review is critical to avoid slowing the release cadence. |

**No long-unanswered critical issues** are visible in the current window. The project's quiet issue tracker is a positive signal, but the team should monitor whether the lack of community-reported bugs reflects genuine stability or a gap in user engagement/reporting channels.

---

**Project Health Verdict:** 🟢 **Stable & Focused** — Low volume, high-signal activity. The single PR (#1183) is architecturally significant and addresses real operational needs. No stability concerns. Recommend tracking PR #1183 for merge status and reviewer feedback as the key health indicator over the coming week.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw (agentscope-ai/CoPaw) Project Digest — 2026-08-04

## 1. Today’s Overview
CoPaw showed **high release-cycle activity** on 2026-08-04: 23 issues updated (6 closed), 50 PRs touched (24 merged/closed), and **v2.1.0-beta.1 published**. Development is focused on hardening the 2.1 beta, fixing regressions from the recent agentscope upgrade, and polishing desktop/console UX. The project remains healthy with a strong bug-fix cadence and clear signals toward better multi‑provider resilience and multi‑agent coordination.

## 2. Releases
**v2.1.0‑beta.1** (published 2026‑08‑03)  
- `fix(chat)`: prevents stale channel identity from leaking into new chats after restart  
- `feat(inbox)`: wobble sidebar inbox on new approvals and color‑codes badge dot  
*No breaking changes noted; migration not required.*

## 3. Project Progress
**Merged / closed PRs (today)**  
- **#6203** – bounds and hides the Windows `tasklist` liveness probe (timeout added)  
- **#6579** – uses bundled Python for script execution (fixes missing‑Python errors)  
- **#6609** – fixes `spawn_subagent` schema to accept empty‑string coercion  
- **#6646** – fetches PR body via API for fork PRs in `real‑behavior‑proof` CI  
- **#6653** – makes fence‑aware section extraction in `real‑behavior‑proof`  
- **#6654** – caps Playwright below 1.62 to unblock macOS desktop verify  

**PRs advancing features**  
- **#6525** – transparent user‑context propagation (Chat API → Agent → Tool → MCP → SKILL)  
- **#5930** – structured run outcome in SSE responses for API automation  
- **#6302** – unifies provider discovery, model metadata, routing, and agent controls  
- **#6651** – adds file/folder management REST API for the Files page  
- **#6645** – OS‑level desktop enhancements (fullscreen, Dock, Spaces, notifications)  
- **#6659** – model fallback with cooldown mechanism (addresses rate‑limit/timeout failover)

## 4. Community Hot Topics
| Issue / PR | Comments | Focus |
|------------|----------|-------|
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | 11 | Skill‑tags regression (lost on restart) |
| [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 8 | GPT‑5.6 prompt‑caching support |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | 6 | `spawn_subagent` empty‑batch placeholder bug |
| [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) | 4 | Isolated Python environment for desktop |
| [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | 3 | Console channel does not render approval prompts |

**Underlying need:** Users are hitting edge‑cases in skill‑persistence, multi‑provider routing, and approval workflows across channels. The high comment counts on these issues indicate they block common workflows and are top‑of‑mind for the community.

## 5. Bugs & Stability
**Critical / High severity**  
- [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) – Desktop UI goes fully black when WebView2 crashes mid‑session (no recovery).  
- [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) – Long‑running shell commands block the Feishu session indefinitely (no per‑channel total timeout).  
- [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) – `execute_shell_command` large stdout freezes the UI.  
- [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) – QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1 (proactive crashes, tool‑permission deadlock).  
- [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) – `ToolCallBlock` missing `extra_content` field crashes OpenAI‑compat stream parsing.

**Medium severity**  
- [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) – Skill tags disappear on restart (regression).  
- [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) – `spawn_subagent` mis‑treats empty `batch` placeholders as batch mode.  
- [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) – ACP `delegate_external_agent` returns “completed without text output” when notifications race the prompt response.  
- [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) – WeChat cron pushes silently fail (status=success but ret=‑2).  
- [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) – Multiline shell commands lose newlines; Linux PIPE background processes hang.  
- [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) & [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) – Console/Skills pages fail on slow networks (MB‑level uncompressed responses vs. 30s timeout).  
- [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) – Auto‑compact (scroll) does not trigger `summarize_when_compact`.

**Fix PRs exist for:** #6588 (#6609, #6595, #6658), #6626 (CI evidence stripping, #6653), #6625 (#6623).

## 6. Feature Requests & Roadmap Signals
| Issue / PR | Request |
|------------|---------|
| [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | GPT‑5.6 prompt‑caching parameters in Responses API |
| [#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583) | Multi‑line file‑name display in drag‑and‑drop |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | Task‑scoped output directories instead of flat `media/` |
| [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | Read dragged files directly from original path (no upload/download) |
| [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) | Automatic model fallback with cooldown |
| [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) | Transparent user‑context propagation across the stack |
| [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) | Structured run outcome in SSE for API automation |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Unified provider discovery & model routing |
| [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) | File/folder management REST API |
| [#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645) | OS‑level desktop enhancements (full‑screen, Dock, notifications) |

**Prediction:** Model fallback (#6659) and user‑context propagation (#6525) are near‑term likely candidates for v2.1.0‑stable. File‑management API (#6651) and task‑scoped outputs (#6643) align with ongoing desktop/UX polish and may ship in a follow‑on patch.

## 7. User Feedback Summary
- **Frustrations:** Skill‑tag loss on restart, silent cron‑push failures, UI freezes from large command output, black‑screen crashes after WebView2 failure, auto‑compact not invoking memory summarization.
- **Pain points:** Lack of per‑channel timeouts leads to session hang‑ups; slow‑network timeouts are hard‑coded at 30s; console channel does not surface approval prompts, causing silent time‑outs.
- **Satisfaction signals:** Users appreciate the transparent context propagation, structured SSE outcomes, and the push toward automatic model fallback. The inbox wobble and badge‑color coding in v2.1.0‑beta.1 are positively received UX improvements.
- **Overall:** High engagement, but several regressions from the agentscope upgrade and desktop‑specific stability issues need immediate attention.

## 8. Backlog Watch
| Issue / PR | Age | Reason for watch |
|------------|-----|------------------|
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | 4 days | Incompatibility between QwenPaw 2.0.1 and agentscope 2.0.4.post1; causes proactive‑crash and tool‑permission deadlock. |
| [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | 3 days | Crash in `openai_chat_model_compat` due to missing `extra_content` field; no fix PR yet. |
| [#6647](https://github.com/agentscope-ai/QwenPaw/issues/6647) | 1 day | WebView2 crash leaves UI black with no recovery; critical for desktop stability. |
| [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | 4 days | Long‑running shell commands block Feishu sessions indefinitely; no timeout enforcement. |
| [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | 3 days | ACP delegate returns “completed without text output” on notification‑response race (fix PR #6623 open). |
| [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) | 4 days | WeChat cron pushes silently fail; status=success but token invalid. |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | 5 days | `spawn_subagent` mis‑handles empty batch placeholders (multiple fix PRs in review). |
| [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) / [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) | 2 days | Console/Skills pages fail on slow networks; payload too large vs. 30s timeout. |

**Maintainer attention needed:** Resolve the agentscope‑compatibility break (#6612) and the desktop WebView2 black‑screen crash (#6647) before v2.1.0‑stable. The ACP race (#6625) and shell‑timeout issues (#6608, #6565) also require prompt fixes to restore session reliability.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-04

## 1. Today's Overview

ZeroClaw shows strong contributor activity with 100 items updated in the last 24 hours (50 issues, 50 PRs), though the ratio of open-to-closed PRs (47:3) signals a bottleneck in review/merge throughput. The project is deep in pre-v0.9.0 hardening — a cluster of high-risk RFCs around goal mode, SOP permissions, unified attachments, and session-persistence ownership dominate the tracker. No new releases were cut today, consistent with the active security and gateway work that typically precedes a release candidate.

## 2. Releases

No new releases today.

## 3. Project Progress

Three PRs were merged/closed in the last 24 hours (out of 50 updated). Notable advances landing today:

- **PR #9722** — `fix(hardware): preserve timeout error context` — retains `tokio::time::error::Elapsed` as the source for Uno Q connect timeouts, improving diagnosability of hardware transport failures.
- **PR #9721** — `fix(zerocode): gate signal cleanup to Unix` — restricts SIGTERM cleanup to Unix platforms, fixing a Windows Clippy regression.
- **PR #9709** — `fix(tts): clean up Edge TTS temp output on every error path` — eliminates a temp-file leak in the TTS synthesis path on output-read failures.

Several large PRs remain in active review (PR #9574 on approval authorization, PR #9419 on credential rotation, PR #9072 on memory architecture), suggesting the v0.9.0 feature set is nearing integration but not yet merged.

## 4. Community Hot Topics

| Issue/PR | Type | Comments | Focus |
|---|---|---|---|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC | 11 | Goal mode v1 — bounded foreground agent work across turns |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker | 8 | Maintainer decision queue for RFCs and design issues |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Feature | 8 (closed) | Turn-level OTel trace correlation |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC | 8 | Unified attachment architecture for web chat and channels |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Bug | 8 (blocked) | Nextcloud Talk using wrong bot message API |

**Analysis:** The top discussion围绕 (revolves around) *agent lifecycle control* (#8303) and *design governance* (#8692), indicating the community is actively shaping how ZeroClaw handles multi-turn goal pursuit and how RFCs are triaged. The closed #6641 on OTel trace correlation shows observability work is progressing. The Nextcloud Talk bug (#6157) remains blocked — a persistent pain point for that channel's users.

## 5. Bugs & Stability

**New/updated today (ranked by severity):**

| Issue/PR | Severity | Summary | Fix PR? |
|---|---|---|---|
| [#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) | **P1 — audit trail falsification** | Timed-out approval recorded as explicit operator denial | Yes — PR #9574 |
| [#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) | **P2 — degraded** | Telegram duplicate messages when model emits both `tool_call` and `content` | No |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | **P1 — workflow blocked** | macOS desktop app reopens blank or without a window | No |
| [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | **P2 — workflow blocked** | ZeroClaw in container not clearly addressed to assistant (Telegram) | Closed (stale) |
| [#9472](https://github.com/zeroclaw-labs/zeroclaw/pull/9472) | **P2 — security** | `vi_verify` registered as model-callable tool (unsignable credentials) | In review (PR #9472) |

**Security note:** The SSRF gate for `file_download` (PR #8713, size XL) and the approval-authorization fix (PR #9574, size L) are both high-risk security PRs actively in review — these are critical for v0.9.0.

## 6. Feature Requests & Roadmap Signals

| RFC/Tracker | Status | What it signals |
|---|---|---|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — Goal mode v1 | RFC, needs review | Multi-turn bounded objective pursuit — core agent UX for v0.9 |
| [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) — SOP permission contract | RFC, Rev 2 | SOP capabilities will consume shared principal grants, not a second grant system |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — Unified attachments | RFC | Cross-channel file attachment unification (web + channels) |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) — Rust→Wasm web UI | RFC | Long-term plan to eliminate Node.js from build/runtime |
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) — Session-persistence ownership | Tracker | Contract ownership decision pending across 4 workstreams |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) — Staged telemetry opt-in | RFC | Operator-reviewed product telemetry — balancing observability with privacy |
| [#9005](https://github.com/zeroclaw-labs/zeroclaw/issues/9005) — Interaction harness context injection | Accepted | Agent prompts will include structured harness description |

**Prediction for v0.9.0:** Goal mode v1, SOP permission contract, unified attachments, and the session-persistence contract are the strongest candidates for the next release. The Rust→Wasm UI rewrite (#8132) is clearly post-v0.9.0 given its P3 priority and scope.

## 7. User Feedback Summary

- **Telegram UX pain is recurring:** Duplicate messages (#9718), stale-session bugs (#6002), and approval-card timeout being logged as denial (#9642) all point to friction in the Telegram integration — the most popular channel by user volume.
- **macOS desktop instability** (#7527) — users report blank windows and permission-detection failures after install, a blocker for Mac-native adopters.
- **Nextcloud Talk API misuse** (#6157) — blocked since April; the wrong bot message endpoint is still being used.
- **File security concerns** — #8424 (workspace-internal forbidden paths) and #8713 (SSRF gate on file_download) reflect user demand for tighter sandboxing of agent file access.
- **Observability maturity** — Users are requesting structured tracing (#6641, #7232) and telemetry with operator review (#9621), signaling a shift from "does it work" to "can I trust and monitor it?"

## 8. Backlog Watch

| Issue/PR | Age | Risk | Why it needs attention |
|---|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | ~31 days | High | Maintainer decision queue is itself waiting for maintainer decisions — a governance bottleneck |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | ~100 days | Medium (blocked) | Nextcloud Talk bot API fix, blocked for months |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | ~37 days | High | Workspace-internal forbidden paths — security gap for `.env`, `config.yaml` etc. |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | ~37 days | High | Schema-validated memory consolidation — current JSON-parse fallback is fragile |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | ~49 days | High | Gateway WebSocket decoupling — in-flight turns cancel on disconnect, degrading UX |
| [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) | ~43 days | Medium | `session_ttl_hours` implementation — existing config with no backing code |
| [PR #9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) | ~5 days | High (P1) | Approval authorization fix — blocks the audit-trail bug #9642 |
| [PR #9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | ~9 days | High | Credential rotation after rate limits — large PR (XL) needing review bandwidth |

**Bottom line:** The project is in a high-integration phase with significant review debt. The v0.9.0 release is being gated on security (PR #9574, #8713) and architecture-ownership decisions (#8692, #9600). Maintainer review bandwidth is the single biggest risk to timeline.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*