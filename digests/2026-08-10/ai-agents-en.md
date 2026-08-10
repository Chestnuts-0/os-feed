# OpenClaw Ecosystem Digest 2026-08-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-10 00:56 UTC

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



# OpenClaw Project Digest — 2026-08-10

## 1. Today's Overview

OpenClaw saw **500 issues and 500 PRs** updated in the last 24 hours, reflecting sustained high community velocity. Activity is **very strong** across all channels, with 428 open/active issues and 319 open PRs currently in flight. No new releases were published today, but several critical fixes crossed the finish line — including session lifecycle fencing, Telegram transport cleanup, and a major refactor of the channel-turn dispatch layer. The project is in an active hardening phase around session state integrity, multi-channel delivery correctness, and sub-agent orchestration.

---

## 2. Releases

No new releases were published today. The most recent known versions in circulation are **2026.7.1** (stable) and **2026.7.2-beta.5** (beta). Several regression bugs have been reported against both channels, suggesting the upcoming release will need careful migration testing.

---

## 3. Project Progress

### Merged / Closed Today

| # | Type | Summary | Link |
|---|------|---------|------|
| #121284 | Fix | **Sessions: fence lifecycle transcript writers** — prevents blind whole-row session mutations during branching, checkpoint, rewind, and worker tracking | [PR #121284](https://github.com/openclaw/openclaw/pull/121284) |
| #121292 | Fix | **Telegram: remove vacuous usage-limit assertion** — cleans up a redundant assertion in the Telegram transport test suite | [PR #121292](https://github.com/openclaw/openclaw/pull/121292) |

### PRs Advanced / In Progress

- **#121308** — *Flatten channel-turn dispatch naming layers* (XL, maintainer) — consolidates six aliased re-exports down to a single source of truth in `src/channels/turn/`. High architectural impact; reduces future regression surface.
- **#121305** — *Consolidate prompt and stream attempt steps* (XL) — move-only refactor to improve phase ownership clarity in the embedded runner.
- **#121295** — *Move swarm family into `subagents/swarm/`* (XL) — stage 1 of subagent subsystem consolidation.
- **#121302** — *Fold per-kind media alias shells* (XL) — reduces duplication across image/music/video generation modules.
- **#121142** (closed) — *Defer silent model-call aborts until provider request allowance expires* — fixes a diagnostic gap where timeout events weren't surfaced in model-call telemetry.
- **#116940** (closed) — *Coordinate UI settings mutations with visible refresh outcomes* — closes a race between Settings dialog and RuntimeConfig persistence.

---

## 4. Community Hot Topics

### Top Issues by Comment Volume

| # | Title | Comments | Labels | Link |
|---|-------|----------|--------|------|
| #116277 | DeepSeek v4 Flash silent reply failure — no reply generated | 196 | P1, diamond lobster, message-loss | [Issue #116277](https://github.com/openclaw/openclaw/issues/116277) |
| #92201 | Embedded runner: Anthropic thinking signatures intermittently invalid on replay | 21 | P1, silver shellfish, session-state | [Issue #92201](https://github.com/openclaw/openclaw/issues/92201) |
| #121058 | Silent reply failures still recurring after #116277 closed | 19 | message-loss | [Issue #121058](https://github.com/openclaw/openclaw/issues/121058) |
| #22438 | Tiered bootstrap file loading for progressive context control | 18 | P2, off-meta tidepool | [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) |
| #91009 | Codex PreToolUse native hook relay spawns CPU-bound processes, stalls gateway RPC | 18 | P1, platinum hermit, crash-loop | [Issue #91009](https://github.com/openclaw/openclaw/issues/91009) |

**Underlying need:** The community is heavily concentrated around **reliability and message-loss bugs**. The DeepSeek silent-reply thread (#116277 → #121058) shows a fix was merged but the problem persisted — indicating either an incomplete root-cause fix or a regression in the fallback path. The Anthropic thinking-signature issue (#92201) points to a deeper replay/recovery wrapper problem in the embedded runner. The Codex hook relay issue (#91009) has a companion PR (#111205) that would add a config knob to disable or scope the relay — a strong signal that the community wants per-provider observability and control.

### Top PRs by Engagement

- [#112623](https://github.com/openclaw/openclaw/pull/112623) — *Inject Recently Completed Subagents into parent prompt* (gold shrimp, needs proof). Addresses a real pain point: parent agents re-spawning work because completed children lose their runtime anchor.
- [#121278](https://github.com/openclaw/openclaw/pull/121278) — *Scope quota failures to auth profiles* (silver shellfish, needs proof). One profile's quota exhaustion was freezing the shared command lane for all sessions — a critical multi-tenant isolation bug.
- [#121303](https://github.com/openclaw/openclaw/pull/121303) — *Expand Windows home paths in usage templates* (platinum hermit, ready for look). Windows compatibility fix with a new regression test.

---

## 5. Bugs & Stability

### P0 / Release-Blocker Severity

| Issue | Title | Status | Fix PR | Link |
|-------|-------|--------|--------|------|
| #112395 | Startup migration preflight blocks gateway after 6.11→7.1 upgrade; migration tables empty | Open | — | [Issue #112395](https://github.com/openclaw/openclaw/issues/112395) |
| #48920 | Live Docs are ahead of release (IsolatedSessions in docs but not in 2026.3.13) | Open | — | [Issue #48920](https://github.com/openclaw/openclaw/issues/48920) |

### P1 Bugs (High Impact)

| Issue | Title | Fix PR | Link |
|-------|-------|--------|------|
| #116277 / #121058 | DeepSeek v4 Flash silent reply failure (recurring post-fix) | — | [#116277](https://github.com/openclaw/openclaw/issues/116277) · [#121058](https://github.com/openclaw/openclaw/issues/121058) |
| #92201 | Anthropic thinking signatures invalid on replay; recovery wrapper never fires | — | [Issue #92201](https://github.com/openclaw/openclaw/issues/92201) |
| #91009 | Codex PreToolUse hook relay causes CPU fan-out and gateway stall | #111205 (in progress) | [Issue #91009](https://github.com/openclaw/openclaw/issues/91009) |
| #48003 | Steer mode does not inject messages mid-turn for main sessions | — | [Issue #48003](https://github.com/openclaw/openclaw/issues/48003) |
| #96242 | Multiple independent paths cause duplicate Telegram messages | — | [Issue #96242](https://github.com/openclaw/openclaw/issues/96242) |
| #114211 | Matrix room agents loop on no-reply output, replay stale session state | — | [Issue #114211](https://github.com/openclaw/openclaw/issues/114211) |
| #120735 | Telegram inbound stickers arrive as raw file refs with no description | — | [Issue #120735](https://github.com/openclaw/openclaw/issues/120735) |
| #105528 | `exec`/`read` tools silently return empty output on Windows (regression) | — | [Issue #105528](https://github.com/openclaw/openclaw/issues/105528) |
| #97616 | OpenClaw leaks unreaped hook/tool child processes → zombie accumulation | — | [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) |
| #94939 | 6.x state migration leaves channel conversation-store SQLite empty (0 bytes) | — | [Issue #94939](https://github.com/openclaw/openclaw/issues/94939) |
| #87327 | Isolated agent runs stall in runtime-plugins phase | — | [Issue #87327](https://github.com/openclaw/openclaw/issues/87327) |
| #88079 | WebChat: reasoning_content not streamed for Kimi Code & DeepSeek Reasoner | — | [Issue #88079](https://github.com/openclaw/openclaw/issues/88079) |

### Notable Regression

- **#105528** — `exec`/`read` tools returning empty output on Windows in v2026.6.x is a significant regression affecting a non-trivial user segment.
- **#94939** — The 6.x→6.8 migration silently empties the SQLite conversation store, breaking proactive Bot Framework sends to MS Teams.
- **#97616** — Unreaped child processes accumulating over time is a reliability time bomb for long-running gateways.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Summary | Votes | Link |
|-------|---------|-------|------|
| #22438 | **Tiered bootstrap file loading** — progressive context control to avoid wasting LLM tokens on unused workspace files | 0 (P2) | [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) |
| #10659 | **Masked Secrets** — prevent agents from accessing raw API keys | 4 (P1, diamond lobster) | [Issue #10659](https://github.com/openclaw/openclaw/issues/10659) |
| #67413 | **Per-agent dreaming configuration** — isolate memory spikes, allow per-agent enable/disable | 5 (P2) | [Issue #67413](https://github.com/openclaw/openclaw/issues/67413) |
| #60572 | **Multi-Slot Memory Architecture** — replace single `plugins.slots.memory` with purpose-specific slots | 3 (P2) | [Issue #60572](https://github.com/openclaw/openclaw/issues/60572) |
| #63990 | **Multi-index embedding memory with model-aware failover** — resilient provider/model failover without mixed vector spaces | 1 (P3) | [Issue #63990](https://github.com/openclaw/openclaw/issues/63990) |
| #6757 | **Agent-triggered context compaction** (self-compact tool) — let agents compact without user intervention | 2 (P2) | [Issue #6757](https://github.com/openclaw/openclaw/issues/6757) |
| #47677 | **First-class Telegram reaction triggers** — reactions as a durable agent wake-up/input surface | 2 (P2) | [Issue #47677](https://github.com/openclaw/openclaw/issues/47677) |
| #104018 | **Readiness conditions and providers** — plugin SDK contract for activation-scoped readiness checks | 0 (P2) | [PR #104018](https://github.com/openclaw/openclaw/pull/104018) |
| #114783 | **Manifest-first host contribution bundles** — external plugins declare coherent inventories | 0 (P3) | [PR #114783](https://github.com/openclaw/openclaw/pull/114783) |

**Prediction for next version:** Masked Secrets (#10659) and Per-Agent Dreaming (#67413) both carry diamond-llobster or high reaction counts and address real production concerns (credential safety, OOM kills). Multi-Slot Memory (#60572) is a larger architectural shift that may span multiple releases. The self-compact tool (#6757) is a practical quality-of-life improvement likely to ship sooner.

---

## 7. User Feedback Summary

**Pain points dominating user reports:**

1. **Message loss across channels** — The single largest category. Telegram duplicates (#96242), silent failures (#116277/#121058), Matrix loops (#114211), and migration-empty SQLite (#94939) all point to fragile delivery paths.
2. **Session state corruption** — Subagent sessions persisting after completion (#47975), steer-mode not injecting mid-turn (#48003), and stale transcript replays (#114211) indicate the session lifecycle machinery needs tighter invariants.
3. **Windows compatibility regression** — Empty `exec`/`read` output (#105528) and home-path expansion issues (#121303) suggest Windows is a lower-priority platform in the current release cycle.
4. **Child process leaks** — Unreaped hook/tool processes (#97616) and the Codex hook relay fan-out (#91009) both cause progressive runtime degradation, a concern for production gateway operators.
5. **Observability gaps** — Silent model-call aborts (#121142), invisible fallback notices in async contexts (#94919), and the lack of a `/models test-fallback` command (#6599) show users want better visibility into provider behavior.

**Satisfaction signals:** The large volume of well-structured bug reports with reproduction steps, and the community's engagement with RFCs (#54373 on context provenance) and feature requests, indicates a mature and invested user base.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Title | Age | Why It's Stuck | Link |
|---|-------|-----|----------------|------|
| #91009 | Codex PreToolUse hook relay CPU fan-out | ~2 months | `needs-maintainer-review`, `needs-product-decision`; fix PR #111205 exists but needs proof | [Issue #91009](https://github.com/openclaw/openclaw/issues/91009) |
| #45740 | gh-issues skill: untrusted issue body injected into sub-agent prompt | ~5 months | `needs-security-review`, `needs-live-repro` | [Issue #45740](https://github.com/openclaw/openclaw/issues/45740) |
| #116277 / #121058 | DeepSeek silent reply failure (post-fix recurrence) | ~1 month | Fix didn't resolve recurrence; needs re-investigation | [#116277](https://github.com/openclaw/openclaw/issues/116277) · [#121058](https://github.com/openclaw/openclaw/issues/121058) |
| #92201 | Anthropic thinking-signature replay invalidity | ~2 months | `not-repro-on-main`; recovery wrapper issue is subtle | [Issue #92201](https://github.com/openclaw/openclaw/issues/92201) |
| #112395 | Startup migration preflight blocks gateway (6.11→7.1) | ~3 weeks | P0, migration tables empty — needs root-cause analysis | [Issue #112395](https://github.com/openclaw/openclaw/issues/112395) |
| #78301 | Plugin loader silent failures cost hours of debugging | ~3 months | `needs-maintainer-review`; low-severity UX but high frustration | [Issue #78301](https://github.com/openclaw/openclaw/issues/78301) |

### PRs Needing Proof / Author Response

| # | Title | Status | Link |
|---|-------|--------|------|
| #112623 | Inject Recently Completed Subagents into parent prompt | needs proof | [PR #112623](https://github.com/openclaw/openclaw/pull/112623) |
| #121278 | Scope quota failures to auth profiles | needs proof | [PR #121278](

---

## Cross-Ecosystem Comparison



# Cross-Project Ecosystem Comparison Report — 2026-08-10

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is characterized by high velocity and intense focus on reliability hardening. Ten projects were active today, ranging from massive communities (OpenClaw, CoPaw) to niche maintainers (Moltis, NanoBot). The dominant theme across nearly all projects is **session state integrity and message delivery correctness** — no project is shipping new features without first addressing message-loss, silent-failure, and zombie-process bugs. Security hardening (SSRF, allowlist bypasses, CVE remediation) and observability gaps (token opacity, provider telemetry) are second-order priorities uniting the ecosystem.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release | Open Issues | Health |
|---------|-------------|-----------|---------|-------------|--------|
| **OpenClaw** | 500 | 500 | None (latest: 2026.7.2-beta.5) | 428 | 🟢 Very Strong |
| **CoPaw** | 17 | 50 | None (tracking 2.1.0b2) | ~17 | 🟢 High |
| **Hermes Agent** | 50 | 50 | None | 47 | 🟢 High |
| **ZeroClaw** | 50 | 50 | None (latest: v0.8.3) | ~50 | 🟡 Moderate-Strong |
| **NanoClaw** | 1 | 16 | None | ~16 | 🟡 Moderate |
| **IronClaw** | 22 | 27 | None (heading to v1.2.0) | ~22 | 🟢 High |
| **NanoBot** | 5 | 15 | None | ~15 | 🟡 Moderate |
| **PicoClaw** | 3 | 6 | None | ~9 | 🟡 Moderate |
| **LobsterAI** | 3 | 0 | None | 3 | 🟡 Low-Stable |
| **Moltis** | 2 | 1 | None | 2 | 🟡 Low-Stable |
| **NullClaw / TinyClaw / ZeptoClaw** | — | — | — | — | ⚪ Inactive |

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale:** OpenClaw operates at 10–100× the issue/PR volume of any other project, indicating the largest contributor base and user segment. Its 428 open issues are roughly equivalent to the total open backlog of the next four projects combined.
- **Multi-channel depth:** OpenClaw supports the broadest channel matrix (Telegram, Matrix, WebChat, Codex, iMessage) with per-channel transport hardening actively in progress — no other project matches this breadth.
- **Sub-agent orchestration maturity:** The ongoing `subagents/swarm/` consolidation (#121295) and parent-prompt injection (#112623) indicate OpenClaw is investing in multi-agent coordination earlier than peers, many of which are still solidifying single-agent reliability.

**Technical approach differences:**
- OpenClaw uses a **channel-turn dispatch layer** with explicit session lifecycle fencing — a deeper architectural investment than IronClaw's gate-projection model or CoPaw's simpler session fork.
- Unlike NanoClaw (Docker-first, hardened-image pipeline) and Moltis (Apple Container sandbox focus), OpenClaw remains transport-agnostic with no container enforcement, trading security rigidity for deployment flexibility.
- CoPaw and ZeroClaw both pursue **memory/dreaming subsystems** as first-class features; OpenClaw addresses this indirectly via tiered bootstrap (#22438) and per-agent dreaming config (#67413) requests.

**Community size:** OpenClaw's community is an order of magnitude larger than any peer. CoPaw and Hermes Agent represent the next tier (~50 PRs/day), while the remaining projects operate at single-digit daily velocity.

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|-----------|------------------|----------------|
| **Message-loss / delivery reliability** | OpenClaw, PicoClaw, ZeroClaw, IronClaw, Hermes | Silent Telegram failures (#116277), Matrix sync death (#3203), WhatsApp webhook auth gaps (#9565), Telegram typing indicator lying during approval waits (#9656) |
| **Session state integrity** | OpenClaw, ZeroClaw, Hermes, CoPaw | Session corruption on replay (#92201), FTS corruption causing orphan forks (#82616), session-identity deadlock (#6750), state.db corruption (#82616) |
| **Token cost transparency** | NanoBot, CoPaw | 1M+ token burn undetected (#5266), structured usage records API (#5299), timestamp accuracy in Console (#6826) |
| **Child process / resource leaks** | OpenClaw, ZeroClaw | Unreaped hook processes (#97616), CPU fan-out from Codex relay (#91009), MCP schema-cloning RSS growth (#8642), zombie threads from `stream:true` (#7400) |
| **Security hardening** | PicoClaw, NanoBot, NanoClaw, ZeroClaw, IronClaw | SSRF in media downloads (#3322–3324), `exec.allowPatterns` bypass (#5305/5306), hardened-image CVE gates (#3207/#3208), gateway auth fail-closed (#9565), `forbid(unsafe_code)` (#7130) |
| **Cross-channel consistency** | OpenClaw, ZeroClaw, IronClaw, CoPaw | System prompt tool-availability mismatch (#8054), per-channel delivery dedup (#96242), Steer mode mid-turn injection (#48003), approved action localization (WeChat #6804) |
| **Provider/model compatibility** | LobsterAI, CoPaw, OpenClaw | Custom model provider parsing (#2453), Gemini `$schema` rejection (#6812/#6844), Anthropic thinking-signature replay (#92201), DeepSeek silent replies (#116277) |

## 5. Differentiation Analysis

| Dimension | OpenClaw | CoPaw | Hermes Agent | NanoClaw | IronClaw | ZeroClaw | NanoBot | PicoClaw | LobsterAI | Moltis |
|-----------|----------|-------|-------------|----------|----------|----------|---------|----------|-----------|--------|
| **Primary focus** | Multi-channel gateway | Qwen/Alibaba ecosystem | Desktop-first agent | Containerized ops | Routine automation | Sandbox security | Lightweight CLI | Messaging bridges | Multi-model orchestration | Apple Container sandbox |
| **Target user** | Power users, operators | Chinese-market devs | macOS desktop users | DevOps/SRE | Automation builders | Security-focused operators | Hobbyists / cost-conscious | Niche channel users | Multi-model researchers | Apple Container users |
| **Architecture** | Channel-turn dispatch, subagent swarm | ASGI middleware, MCP-native | Electron desktop, journal persistence | Docker/K8s, hardened images, skill seams | Gate-projection, batch parallelism | Capability config, SLSA attestation | CLI-first, GitAgent Protocol | Plugin-based, multi-protocol bridges | Provider-agnostic model router | Vault-driven, recovery-key security |
| **Deployment model** | Self-hosted gateway | Self-hosted web UI | Native desktop app | Container images | Railway/SELF-hosted | Sandboxed runtime | Local CLI / Docker | Docker + native | Configurable multi-model | Apple Container |
| **Key differentiator** | Scale & channel breadth | Mobile console + session fork | Desktop reliability (macOS) | Hardened-image pipeline + pip support | Routine automation + WebUI v2 | Security attestation + work lanes | GitAgent + low-cost focus | Deltachat/IRC/Telegram breadth | Cross-model delegation | Vault recovery phrase integrity |

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (50+ PRs/day):**
- **OpenClaw** — 500 PRs, 428 open issues. The ecosystem's gravity well. Actively hardening session state and multi-channel delivery.
- **CoPaw** — 50 PRs, fast triage (6 issues closed, 1 merged in 24h). In a 2.1.0b2 development window with strong contributor velocity.
- **Hermes Agent** — 50 PRs, desktop-focused with tight macOS integration. Maintenance-heavy phase around Electron reliability.
- **ZeroClaw** — 50 PRs, governance-heavy (RFCs dominating discussion). Mature project transitioning from feature velocity to operational maturity.

**Tier 2 — Active Development (15–30 PRs/day):**
- **IronClaw** — 27 PRs, v1.2.0 preparation. Core team driving tool discovery and routine automation fixes.
- **NanoClaw** — 16 PRs, architectural consolidation phase. Strong contributor engagement on refactors and security ops.
- **NanoBot** — 15 PRs, security-critical period with active CVE and allowlist-bypass scrutiny.

**Tier 3 — Moderate Activity (1–10 PRs/day):**
- **PicoClaw** — 6 PRs, steady bug-fix cadence. Matrix reconnection gap is the most impactful open issue.
- **LobsterAI** — 0 PRs today, low but focused. Users pushing against multi-model orchestration boundaries.
- **Moltis** — 1 PR, maintenance phase. Two fresh bugs with no maintainer response yet.

**Tier 4 — Inactive:**
- NullClaw, TinyClaw, ZeptoClaw — no activity in 24h.

## 7. Trend Signals

1. **Session lifecycle is the new frontier.** Every Tier 1 project has active bugs around session state corruption, orphan forks, or replay failures. The ecosystem is moving past "can the agent run?" to "can the agent's state be trusted?" This is the defining reliability challenge of 2026.

2. **Observability is a product feature, not a nice-to-have.** Token-cost opacity (#5266), silent model-call aborts (#121142), and missing provider telemetry (#94919) are driving demand for structured diagnostics APIs across projects. Developers should expect per-call token breakdowns and provider-fallback logging to become table stakes.

3. **Security hardening is accelerating independently.** NanoBot's chained shell bypass (#5305/5306), PicoClaw's SSRF bundle (#3322–3324), and ZeroClaw's SLSA attestation consolidation (#9101) indicate the ecosystem is treating supply-chain and runtime security as first-class concerns — not afterthoughts.

4. **Multi-model orchestration is creating new failure modes.** LobsterAI's cross-model sub-task losses (#2132), OpenClaw's DeepSeek silent replies (#116277), and CoPaw's Gemini schema rejection (#6812) all point to a gap: projects assume provider parity that doesn't exist. Expect specialized fallback and validation layers to emerge.

5. **Containerization and sandboxing are diverging by philosophy.** NanoClaw pursues hardened prebuilt images with CVE gates; ZeroClaw enforces capability boundaries via attestation; Moltis targets Apple Container specifically. There is no consensus on the right sandbox model — three distinct approaches are being explored in parallel.

6. **Channel maturity varies wildly.** Telegram, Matrix, and WebChat are the most-tested paths across projects. IRC, Deltachat, iMessage, and Signal remain sources of edge-case bugs (Signal attachments dropped in NanoClaw for 3 months, Matrix sync death in PicoClaw). Projects serving production workloads should treat non-primary channels as lower-stability tiers.

---

*Report synthesized from 2026-08-10 community digest data across 10 open-source AI agent projects.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest — 2026-08-10

## 1. Today's Overview
NanoBot shows **high development activity** with 15 PRs and 5 open issues tracked in the last 24 hours. Four PRs were merged/closed today, primarily around CI hardening, WebUI fixes, and documentation. No new releases were published. The project is actively addressing security vulnerabilities, provider compatibility bugs, and test coverage gaps. Community engagement is moderate, with one issue (#5266) drawing significant discussion (13 comments).

## 2. Releases
*No new releases in the reporting period.*

## 3. Project Progress
**Merged/Closed PRs:**
- **#5307** — Restored Star History chart using an external provider ([link](https://github.com/HKUDS/nanobot/pull/5307))
- **#5308** — Strengthened user-path tests and CI gates; added V8 coverage reporting ([link](https://github.com/HKUDS/nanobot/pull/5308))
- **#5304** — Fixed WebUI voice input HTTPS requirement messaging across all locales ([link](https://github.com/HKUDS/nanobot/pull/5304))
- **#4019** — Added GitAgent Protocol support via `agent.yaml` + `SOUL.md` manifests ([link](https://github.com/HKUDS/nanobot/pull/4019))

**Notable Open PRs Advancing:**
- **#5299** — Exposing structured token usage records via `/api/settings/usage/records` for diagnostics
- **#5288** — Integrating Agent Plugins with CLI Apps for portable skill boundaries
- **#5204** — Refactoring Responses provider with declarative capability profiles
- **#4276** — Model-agnostic computer use tools (`browser` + `computer_use`)

## 4. Community Hot Topics
- **[#5266](https://github.com/HKUDS/nanobot/issues/5266)** — *Logs about token consumption* (13 comments). Users report millions of tokens burned during idle periods. Strong demand for per-call token visibility.
- **[#5295](https://github.com/HKUDS/nanobot/issues/5295)** — *Docker compose deployment failure* ("Permission denied" on `entrypoint.sh`). Blocks first-time deployments.
- **[#5305](https://github.com/HKUDS/nanobot/issues/5305)** & **[#5306](https://github.com/HKUDS/nanobot/issues/5306)** — *`exec.allowPatterns` bypass vulnerabilities*. Security researcher `YLChen-007` reported chained shell command execution via OpenAI-compatible API. Indicates active security scrutiny.

**Underlying Needs:** Cost transparency, frictionless deployment, and hardened command execution security are top community priorities.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| 🔴 Critical | [#5305](https://github.com/HKUDS/nanobot/issues/5305) | `exec.allowPatterns` allowlist bypass enables chained shell execution | — |
| 🔴 Critical | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | Same bypass via shell-chain vectors | — |
| 🟠 High | [#5311](https://github.com/HKUDS/nanobot/issues/5311) | Agnes AI custom provider double-encodes nested-object tool args as JSON strings | — |
| 🟡 Medium | [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker compose entrypoint permission denied | — |
| 🟡 Medium | [#5302](https://github.com/HKUDS/nanobot/pull/5302) | Dream consolidation uses unavailable tools (prompt/tool mismatch) | #5302 |
| 🟡 Medium | [#5303](https://github.com/HKUDS/nanobot/pull/5303) | Weather skill fails on Windows PowerShell (`curl` alias issue) | #5303 |
| 🟢 Low | [#5310](https://github.com/HKUDS/nanobot/pull/5310) | Weixin forced QR login ignores saved account state | #5310 |

## 6. Feature Requests & Roadmap Signals
- **Token usage diagnostics** — Issue #5266 and PR #5299 both target better token consumption visibility. PR #5299 (structured records API) directly addresses this and may ship in the next release.
- **Computer use / browser automation** — PR #4276 (open since June) adds native `browser` and `computer_use` tools. Roadmap signal for expanded agent capabilities.
- **Agent Plugins portability** — PR #5288 formalizes vendor-neutral plugin boundaries. Suggests growing ecosystem abstraction.
- **Responses provider declarative config** — PR #5204 refactors provider capabilities. Indicates ongoing multi-provider maturation.

## 7. User Feedback Summary
**Pain points:**
- **Token cost opacity** — Users report runaway token consumption (1M+ tokens in 2 hours idle). Frustration is high (#5266, 13 comments).
- **Deployment friction** — Docker setup fails on permissions (#5295), blocking new users.
- **Custom provider bugs** — Agnes AI integration exposes JSON encoding issues (#5311), hurting third-party provider reliability.
- **Security trust** — Two critical allowlist bypasses (#5305, #5306) reported by the same researcher. Users relying on `exec.allowPatterns` for sandboxing need urgent patches.

**Positive signals:** WebUI improvements (HTTPS messaging), CI/test hardening, and plugin system expansion show healthy project maintenance.

## 8. Backlog Watch
- **[#5156](https://github.com/HKUDS/nanobot/pull/5156)** — *Telegram stalled polling recovery* (open since 2026-07-29). Production-impacting bug; companion PR #5301 adds lightweight observability.
- **[#4276](https://github.com/HKUDS/nanobot/pull/4276)** — *Computer use tools* (open since 2026-06-10). Large feature with merge conflicts; needs maintainer triage.
- **[#5266](https://github.com/HKUDS/nanobot/issues/5266)** — *Token consumption logging* (open since 2026-08-06). High community demand; PR #5299 partially addresses it.
- **[#5305](https://github.com/HKUDS/nanobot/issues/5305)** & **[#5306](https://github.com/HKUDS/nanobot/issues/5306)** — Security bypasses. Urgent patches needed before next release.

---
*Digest generated from GitHub data as of 2026-08-10. Activity level: High. Project health: Good — active development with critical security items pending.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-08-10

## 1. Today's Overview
Hermes Agent exhibits high development velocity with **50 issues** and **50 PRs** updated in the last 24 hours, indicating a burst of community and maintainer activity. The project is currently focused on **stability and bug fixes**, particularly around desktop application responsiveness, session-state management, and gateway reliability. No new releases were published today, but several critical bugs have immediate fix PRs in review. The open‑issue count remains healthy (47 open) with a steady flow of contributions, suggesting the project is in a maintenance‑heavy phase rather than a feature‑release cycle.

## 2. Releases
*No new releases published today.*

## 3. Project Progress
**Merged/Closed PRs today:**
- **PR #72086** (closed): Stamps durable conversation‑message timestamps at append time instead of persist time, improving transcript accuracy for downstream observers.

**Key open fix PRs (all created 2026-08-09/10):**
- `#82811` – Fixes truncate‑ordinal address‑space bug causing silent message deletion.
- `#82832` – Bounds inflight journal persistence to prevent desktop freezes.
- `#82839` – Excludes `__PLACEHOLDER__` tokens from `hardcoded_secret` regex.
- `#82841` – Stops left‑sidebar session titles from shrinking on hover.
- `#82838` – Catches Electron zoom‑drift with no observable trigger.
- `#82794` – Routes Desktop session windows to their owning profile.
- `#79862` – Enables per‑model image input for kimi‑coding (multimodal).
- `#82825` – Preserves approval‑card content on Telegram/Feishu.
- `#71996` / `#82830` – Blocks absolute‑path spellings from bypassing the approval hardline floor.
- `#82833` – Spawns pipe‑mode background shells with `-lc` to prevent tty wedging.
- `#82834` – Keeps steer provenance in runtime roles.
- `#82835` – Gates iMessage setup success on opt‑in via first message.
- `#82837` – Adds sixth “Do NOT capture” class for system‑mechanism stances.
- `#82828` – Stops legacy plugin rows from crashing Settings.
- `#82829` – Keeps vault tokens out of CLI process surfaces.
- `#82809` – Classifies empty‑bodied 400 from local llama.cpp as transient.

## 4. Community Hot Topics
| Issue | Type | Comments | Created | Summary |
|-------|------|----------|---------|---------|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | Bug (P1) | 19 | 2026-07-12 | Desktop becomes completely unresponsive after ~5 messages on macOS 27 beta; Settings locked out. |
| [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) | Feature (P3) | 13 | 2026-05-16 | Accessibility improvements for blind VoiceOver users; current UX is nearly unusable with screen readers. |
| [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) | Bug (P1) | 7 | 2026-08-09 | Tracking: gateway session continuity breaks under `state.db` FTS corruption (orphan session fork, stale‑session resume). |
| [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) / [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) | Bug (P2) | 6 each | 2026-07-18 / 2026-07-26 | `cronjob create/update` throws `TypeError` (`'<=' not supported between str and int`). |
| [#41889](https://github.com/NousResearch/hermes-agent/issues/41889) | Feature (P3) | 5 | 2026-06-08 | Cross‑profile subagent support in `delegate_task`; no first‑class way to delegate to a profile‑specific runtime. |

**Underlying needs:** Desktop stability on macOS, comprehensive accessibility, reliable gateway session continuity, cronjob CLI robustness, and advanced multi‑profile orchestration.

## 5. Bugs & Stability
**Severity‑ranked bugs reported today (with fix status):**

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0** | [#82756](https://github.com/NousResearch/hermes-agent/issues/82756) | Desktop plain‑Enter submit silently deletes ~65 messages (3rd occurrence). | ✅ `#82811` open |
| **P1** | [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | Desktop becomes completely unresponsive after ~5 messages. | ✅ `#82832` open |
| **P1** | [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) | Gateway session continuity breaks under `state.db` FTS corruption. | ❌ No fix yet |
| **P2** | [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) / [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) | `cronjob create/update` TypeError. | ❌ None observed |
| **P2** | [#82442](https://github.com/NousResearch/hermes-agent/issues/82442) | SSH bootstrap runs `venv/bin/python` instead of hermes binary. | ✅ Closed |
| **P2** | [#77753](https://github.com/NousResearch/hermes-agent/issues/77753) | macOS in‑app update deadlocks with stale `hermes-setup`. | ❌ No fix |
| **P2** | [#80560](https://github.com/NousResearch/hermes-agent/issues/80560) | Plugin SDK crashes with React #310 on Windows. | ❌ No fix |
| **P2** | [#82806](https://github.com/NousResearch/hermes-agent/issues/82806) | macOS Desktop prompts/timeline disappear after sleep/reopen. | ❌ No fix |
| **P2** | [#82807](https://github.com/NousResearch/hermes-agent/issues/82807) | macOS Desktop sidebar title text disappears on hover. | ✅ `#82841` open |
| **P2

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest — 2026-08-10

## 1. Today's Overview

PicoClaw shows moderate development activity with 9 issues and PRs updated in the last 24 hours (3 issues, 6 PRs). One PR (#3326) was merged today, addressing a broken lockfile in the web frontend. There were no new releases this period. The project remains actively maintained with a steady flow of bug fixes, security hardening, and feature work across multiple channels (Telegram, IRC, WeChat/WeCom, Deltachat). Health is stable — the only closed issue (#3203) was marked stale rather than resolved, which is a minor concern.

## 2. Releases

No new releases were published during this reporting period.

## 3. Project Progress

**Merged/Closed Today:**

- **#3326** — Fixed duplicate `semver@7.8.5` entries in `web/frontend/pnpm-lock.yaml` that were causing `pnpm install --frozen-lockfile` to fail with `ERR_PNPM_BROKEN_LOCKFILE`. ([GitHub](https://github.com/sipeed/picoclaw/pull/3326))

**In Review (Open PRs):**

- **#3222** — Deltachat cleanup refactoring, dropping ~200 lines of legacy code, outdated tests, and hardcoded relay lists; introduces proper secret management via jsonrpc. ([GitHub](https://github.com/sipeed/picoclaw/pull/3222))
- **#3327** — Native Telegram rich-table rendering via Bot API, replacing the fallback to monospaced code blocks. ([GitHub](https://github.com/sipeed/picoclaw/pull/3327))
- **#3322–#3324** — Three linked security hardening PRs addressing SSRF vulnerabilities in media download paths across Weixin, WeCom, and general channel plugins. ([GitHub](https://github.com/sipeed/picoclaw/pull/3322), [GitHub](https://github.com/sipeed/picoclaw/pull/3323), [GitHub](https://github.com/sipeed/picoclaw/pull/3324))

## 4. Community Hot Topics

- **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** — *Matrix sync loop has no reconnection logic* (8 comments, 2 👍). The most discussed issue this period. Users report that the Matrix `/sync` long-polling loop dies silently after network/server disruptions, and because the main process stays alive, systemd's `Restart=on-failure` never triggers. This is a reliability gap for production deployments.
- **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — *Better support for long messages in IRC* (4 comments). IRCv3 message splitting at 512 bytes causes PicoClaw to fragment cohesive messages. Users need proper long-message handling for IRCv3-compliant clients.
- **[Issue #3325](https://github.com/sipeed/picoclaw/issues/3325)** — *Render Telegram tables with rich messages* (0 comments, just opened today). Directly mirrors PR #3327 — a feature request from a user who is also contributing the fix.
- **[PR #3322–#3324](https://github.com/sipeed/picoclaw/pull/3322)** — The SSRF hardening bundle is the most significant technical work this period, affecting Weixin, WeCom, and all inbound media download paths. The linked nature of these PRs suggests coordinated security review.

## 5. Bugs & Stability

| Severity | Item | Details | Fix PR |
|----------|------|---------|--------|
| **High** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) — Matrix sync loop silent death | Long-polling loop has no reconnection; process stays alive so systemd never restarts it. Affected v0.2.9+. | None — issue closed as stale |
| **Medium** | [#3326](https://github.com/sipeed/picoclaw/pull/3326) — Broken pnpm lockfile (resolved) | Duplicate `semver` entries broke `pnpm install --frozen-lockfile`. | ✅ Merged #3326 |
| **Medium** | SSRF in media downloads ([#3322](https://github.com/sipeed/picoclaw/pull/3322), [#3323](https://github.com/sipeed/picoclaw/pull/3323), [#3324](https://github.com/sipeed/picoclaw/pull/3324)) | Weixin/WeCom/general channels followed redirects to loopback/private hosts during media GET/POST. | PRs #3322, #3323, #3324 open |

The Matrix reconnection bug (#3203) is the most impactful outstanding issue — it affects production reliability and currently has no fix in progress.

## 6. Feature Requests & Roadmap Signals

- **Telegram rich tables** ([#3325](https://github.com/sipeed/picoclaw/issues/3325) / [PR #3327](https://github.com/sipeed/picoclaw/pull/3327)): User request for native Telegram table rendering using Bot API 10.1+ rich message support. The corresponding PR is already open — likely to ship in the next release if merged.
- **IRC long message support** ([#3287](https://github.com/sipeed/picoclaw/issues/3287)): Demand for proper IRCv3 long-message handling. No PR yet; may appear in a future release focused on IRC channel improvements.
- **Deltachat modernization** ([PR #3222](https://github.com/sipeed/picoclaw/pull/3222)): Significant cleanup and feature addition (full Deltachat section, renamed invite fields, official relay list integration). Could signal a broader Deltachat channel improvement roadmap.

**Prediction:** The next release is likely to include Telegram rich tables (#3327) and the SSRF hardening fixes (#3322–#3324) if the security PRs are merged first. IRC long-message support (#3287) is less likely to make the immediate next release given no PR exists.

## 7. User Feedback Summary

- **Matrix users** are frustrated by silent failures after network disruptions — the lack of reconnection logic is a dealbreaker for always-on deployments. The 2 👍 reactions and 8 comments indicate broader community concern.
- **IRC users** need better long-message support; the 512-byte split behavior breaks cohesive conversations and is a known IRCv3 pain point.
- **Telegram users** are requesting native table rendering — current monospaced code-block fallback degrades the visual experience significantly. The fact that the issue author also opened the fix PR (#3327) suggests strong user engagement and willingness to contribute.
- **Security-conscious users** (or maintainers) have identified SSRF vectors in media downloads — the coordinated PRs from author SashaMIT indicate responsive securitytriage.

Overall sentiment: active contributor base with real-world deployment pain points surfacing as issues. Satisfaction appears moderate — the project is addressing bugs but some (like #3203) are slipping through as stale.

## 8. Backlog Watch

- **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** — ⚠️ **Critical backlog item.** Closed as stale despite being an unaddressed reliability bug. Matrix is a core supported channel, and silent sync death in production deployments warrants maintainer re-engagement. No fix PR exists.
- **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — Medium-priority backlog item. IRC long-message support has community interest (4 comments) but no PR yet. Worth tracking for next IRC-focused iteration.
- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)** — Open since July 3 with no merge activity. Large refactoring PR (~200 LOC removed) may be sitting due to review bandwidth. Worth a nudge from maintainers.

---

*Digest generated from GitHub data as of 2026-08-10. Source: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-08-10

## 1. Today's Overview

NanoClaw shows sustained development momentum with **16 open PRs** and **1 active issue** updated in the last 24 hours, indicating a healthy and active contributor base. The project is in a consolidation phase: multiple refactor PRs (host lifecycle hooks, channel renderers, DB migration registry) signal architectural maturation, while security hardening advances with Docker Hub image publishing and CVE gate enforcement. No new releases were cut today, and no PRs were merged or closed in the window, suggesting the team is focused on getting current changes reviewed before shipping. The project is in solid health with strong contributor engagement across feature, refactor, docs, and operations tracks.

## 2. Releases

No new releases were published on this date. The project continues to track toward a future release cycle with the new Docker Hub image publishing pipeline (PR #3208) likely serving as a prerequisite gate.

## 3. Project Progress

**Merged/Closed today:** None. All 16 PRs remain open.

**Features advanced:**
- **Dial channel adapter** (SMS + AI voice calls) — two parallel PRs by OmriBenShoham (#3050 adding Dial to the channel picker/wizard, #3041 implementing the adapter itself) are progressing toward expanding NanoClaw's communication channel support.
- **Bounded JSON stdin input** (#3218 by zvi-fried) — introduces a generic `--stdin-json` mode for both host and container `ncl` clients, enabling structured argument passing without altering the core request frame or dispatcher.

**Refactors advancing:**
- Unified module lifecycle hooks on the host (#3214)
- Question renderer registration in channels (#3213)
- DB module migration registry (#3212)
- Host seams for skill-owned capabilities (#3186)

**Security & ops:**
- Docker Hub image publishing with multi-arch support (amd64 + arm64 via QEMU) and a manual-dispatch workflow (#3208)
- pnpm/npm bumped past critical `tar` CVE (GHSA-23hp-3jrh-7fpw) in the agent image (#3207)

**Bug fixes in progress:**
- Slack pasted tables now surfaced to agents (#3209)
- Signal inbound attachments now delivered to agents instead of being dropped (#2529, active since May)
- Signal image/file attachments forwarded through mounted inbox instead of dead path (#3142)

**Documentation:**
- Hardened-image guide updated to note `install_packages` limitation to apt/npm only (#3216)
- Container docs clarify where received attachments land (#3210)
- Skills doc defines single-responsibility integration rule (#3211)
- DM resolution logs redacted for privacy (#3215)

## 4. Community Hot Topics

**Most discussed / actively worked items:**

- **[Issue #3217](https://github.com/nanocoai/nanoclaw/issues/3217)** — *install_packages has no pip channel, blocking hardened-image adoption for Python-dependent installs*
  - **Underlying need:** Users building agents with Python pip dependencies cannot use the hardened prebuilt image path, forcing them to fall back to custom Dockerfiles — exactly the pattern the hardened-image feature was designed to replace. This is a high-impact gap for security-conscious deployments.

- **[PR #3216](https://github.com/nanocoai/nanoclaw/pull/3216)** — Direct response to #3217, documenting the apt/npm-only limitation in the hardened-image guide. Shows the team is addressing visibility of the gap even before a fix lands.

- **[PR #3041 / #3050](https://github.com/nanocoai/nanoclaw/pull/3041) & [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)** — Dial (SMS + voice) channel integration, reflecting community demand for telephony-grade channel support beyond Slack/Discord/Signal.

- **[PR #2529](https://github.com/nanocoai/nanoclaw/pull/2529)** — Open since May 2026, fixing a long-standing Signal attachment delivery bug. Its continued presence signals backlog risk.

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **High** | [#3217](https://github.com/nanocoai/nanoclaw/issues/3217) | No pip channel in `install_packages` blocks hardened-image use for Python agents | Documented in #3216; code fix pending |
| **Medium** | [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | Signal attachments forwarded via unmounted host path — agents cannot read them | PR #3142 (open since Jul 27) |
| **Medium** | [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) | Inbound Signal attachments dropped entirely instead of delivered | PR #2529 (open since May 18) |
| **Low** | CVE-2024-xxx (`tar` < 7.5.19, critical) | Critical CVE in base image's vendored `tar` and pnpm's vendored `tar` | PR #3207 (bumping pnpm/npm versions) |
| **Low** | [#3209](https://github.com/nanocoai/nanoclaw/pull/3209) | Slack pasted tables not surfaced to agents | PR #3209 (open) |

**Notable:** The two Signal attachment bugs (#2529, #3142) have been open for 1–3 months, which is a stability concern for Signal users. The critical CVE (#3207) has an active fix PR but remains unmerged.

## 6. Feature Requests & Roadmap Signals

- **Python package support in hardened images** (#3217) — Strong signal that users need `packages_pip` / `packages_pipenv` / `packages_poetry` alongside `packages_apt` and `packages_npm`. Likely to appear in the next release cycle if the hardened-image workflow is to fulfill its promise.
- **Dial / telephony channels** (#3041, #3050) — SMS and AI voice call support is actively being built. Expect this in a near-term release if both PRs land.
- **Bounded JSON stdin** (#3218) — Enables safer pipeline integration for agent CLI commands. Likely a utility feature for advanced users and CI/CD workflows.
- **Docker Hub automated publishing with CVE gates** (#3208) — Signals a push toward more reliable, security-aware image distribution. Could become the default publish path.

**Predicted next release focus:** Hardened-image Python support, Dial channel, and the container security hardening (CVE gates + image publishing) will likely form the core of the next release.

## 7. User Feedback Summary

- **Pain point:** Users with Python-dependent agents are blocked from using the hardened prebuilt image path because `install_packages` only supports apt and npm. This forces custom Dockerfiles and undermines the security-and-convenience value proposition of hardened images.
- **Pain point:** Signal attachment handling is broken in two ways — attachments are both dropped entirely (#2529) and referenced via unmounted paths (#3142). Signal users cannot reliably share files or images with agents.
- **Satisfaction signal:** The community is responding positively to architectural refactors (lifecycle hooks, migration registry, skill seams) that improve long-term maintainability and skill-authoring ergonomics.
- **Positive:** Documentation improvements (#3216, #3210, #3211) show responsiveness to user confusion, particularly around hardened-image expectations and skill integration rules.

## 8. Backlog Watch

| Item | Open Since | Risk |
|------|-----------|------|
| **[PR #2529](https://github.com/nanocoai/nanoclaw/pull/2529)** — Signal attachments dropped | 2026-05-18 (~3 months) | 🔴 High — core functionality broken for Signal users |
| **[PR #3142](https://github.com/nanocoai/nanoclaw/pull/3142)** — Signal attachment path forwarding | 2026-07-27 (~1 month) | 🟡 Medium — partial attachment support broken |
| **[Issue #3217](https://github.com/nanocoai/nanoclaw/issues/3217)** — No pip channel in install_packages | 2026-08-09 | 🟡 Medium — blocks hardened-image adoption; doc fix in progress (#3216) |
| **[PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)** — Dial channel adapter | 2026-07-14 (~1 month) | 🟢 Low — feature PR, not a bug, but lengthy review cycle |
| **[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)** — Dial wizard integration | 2026-07-14 (~1 month) | 🟢 Low — depends on #3041 landing first |

**Recommendation:** The two Signal attachment PRs (#2529, #3142) warrant maintainer attention as they represent a prolonged user-facing defect. The pip channel gap (#3217) should be prioritized alongside the existing documentation fix (#3216) to unblock hardened-image users with Python stacks.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>



# IronClaw Project Digest — 2026-08-10

## 1. Today's Overview

IronClaw shows strong development velocity with 22 issues and 27 PRs updated in the last 24 hours, indicating an active contributor base and rapid iteration. No new releases were published today, but multiple bug fixes and feature enhancements landed or advanced, particularly around tool-search optimization, WebUI polish, and outbound delivery reliability. The project is in a healthy stabilization phase heading toward v1.2.0, with the core team (serrrfirat, theredspoon) driving parallel work on tool discovery, skill mounts, and channel previews while maintainers close out QA-tracked bugs from the Railway staging environment.

## 2. Releases

No new releases were published today.

## 3. Project Progress

**Closed/Merged today:**
- **#7171** — Fixed skill mount persistence: skills were installed but immediately vanished from Settings (closes #7168). Part of the larger #6941 initiative.
- **#7387** — Dependabot: 12 dependency bumps across `/` directory.
- **#7401** — Rejects `stream: true` + external tools on `/api/v1/responses` before submission, preventing zombie-thread creation.
- **#7404** — Renders gemoji shortcodes in assistant Markdown replies (streaming and completed).
- **#7403** — Fixes WebUI activity chronology ordering so streaming progress stays before later same-run activity.

**Open PRs advancing today:**
- **#7395** — Fixes a TOCTOU race in outbound send-claim and allows failed-row reopen (`crates/domains/ironclaw_outbound`).
- **#7352** — Binds gate projection identities to their gate ref, fixing runs that block on multiple approval/auth gates with identical projection IDs.
- **#7410** — Returns bounded complete signatures from `tool_search` when schemas fit host budgets (implements Phase 1 of #7405).
- **#7409** — Establishes baseline tool-retrieval catalogs at 100–1,000 tools without changing production behavior.
- **#7341** — Restores scoped attachment reads and SSE tests after WebUI v2 migration.
- **#7396** — Adds generic progressive previews for Slack and Telegram channels.
- **#7398** — Introduces `web-push` as a first-party notification channel via W3C Web Push (RFC 8030/8291/8292).
- **#7131** — Delivers triggered-run failures (Failed/RecoveryRequired/Cancelled) to the creator's configured target instead of silently recording as Skipped.

## 4. Community Hot Topics

- **#7405** — [Improve deferred tool discovery with complete signatures](https://github.com/nearai/ironclaw/issues/7405) (2 comments) — Core team addressing unnecessary model turns at large tool counts; directly feeds PR #7410 and #7409.
- **#7407** — [Execute BatchPolicy::Parallel capability batches concurrently](https://github.com/nearai/ironclaw/issues/7407) (2 comments) — Production `invoke_capability_batch` runs sequentially despite parallel policy; high-impact performance fix.
- **#7166** — [Tool disclosure follow-up](https://github.com/nearai/ironclaw/issues/7166) (1 comment, epic/v1.2.0) — Tracks progressive tool disclosure as the new default; signals roadmap direction for capability visibility.
- **#7392** — [Replace first-party coding tools with pinned omp tool surface](https://github.com/nearai/ironclaw/issues/7392) (0 comments, epic) — Major architectural shift adopting `oh-my-pi` as the coding tool contract.
- **#6046** — [Simple email-to-sheet workflow invokes 124 tools](https://github.com/nearai/ironclaw/issues/6046) (1 comment) — Prominent user pain point on tool-call bloat; underscores need for #7405's deferred discovery.

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **High** | [#7400](https://github.com/nearai/ironclaw/issues/7400) | `stream: true` + caller `tools[]` on `/api/v1/responses` creates permanently undeletable "zombie" threads (100% reproducible on 1.1.0-rc.1 and 1.1.0) | **#7401** (open) |
| **P1** | [#7292](https://github.com/nearai/ironclaw/issues/7292) ✅ | CoinGecko tool installed but unusable; runner heartbeat error | Closed |
| **P2** | [#7346](https://github.com/nearai/ironclaw/issues/7346) | Emoji shortcodes rendered as plain text in assistant messages | **#7404** (open) |
| **P2** | [#7348](https://github.com/nearai/ironclaw/issues/7348) | Activity blocks and progress messages displayed out of chronological order | **#7403** (open) |
| **P2** | [#7345](https://github.com/nearai/ironclaw/issues/7345) | Agent reports 61 automations while UI shows only 50 | — |
| **P2** | [#7349](https://github.com/nearai/ironclaw/issues/7349) | Refreshing chat erases part of run history and Activity timeline | — |
| **P2** | [#5882](https://github.com/nearai/ironclaw/issues/5882) | Repeated Slack reconnects leave auth flow in broken state; requires reinstall | — |
| **P2** | [#5878](https://github.com/nearai/ironclaw/issues/5878) | Revoked GitHub token produces misleading errors instead of re-auth flow | — |
| **P2** | [#5522](https://github.com/nearai/ironclaw/issues/5522) ✅ | Reborn routine fails when task requires reading Slack DMs (missing capability + retry loop) | Closed |
| **P2** | [#5552](https://github.com/nearai/ironclaw/issues/5552) ✅ | Generic "invalid result" after multiple tool failures obscures root cause | Closed |
| **P3** | [#5510](https://github.com/nearai/ironclaw/issues/5510) ✅ | Cannot delete old routines | Closed |

## 6. Feature Requests & Roadmap Signals

- **#7405 / #7410** — Deferred tool discovery with namespace-aware catalog previews and complete signatures. Likely to ship in **v1.2.0** as the default tool-lookup path, reducing model turns at scale.
- **#7407** — Concurrent execution of `BatchPolicy::Parallel` batches. A straightforward performance enhancement expected in an upcoming patch.
- **#7398** — Web Push as a first-party notification channel. If merged, this would be a notable new channel parity feature alongside Slack and Telegram.
- **#7392** — Replacing first-party coding tools with the `oh-my-pi` pinned surface. A significant architecture decision; marked as an epic, likely a v1.2.0 milestone.
- **#6479** — Guardrails against routines creating/modifying other routines (self-replication risk). A security/stability feature that may be scoped into v1.2.0.

## 7. User Feedback Summary

Users report consistent frustration with **tool-call inefficiency** (#6046: 124 invocations for a simple email→sheet task) and **opaque failure modes** (#5552, #5878) — errors that bury the real cause under generic messages. **UI coherence issues** (emoji rendering #7346, activity ordering #7348, history loss on refresh #7349, automation count mismatch #7345) suggest the WebUI v2 migration introduced regressions in visual consistency. The Slack auth loop (#5882) and missing Slack DM read capability (#5522) indicate channel integrations remain a pain point. Positive signal: closed bugs (#7292, #5522, #5552, #5510) show the team is responsive to Railway QA findings, and the rapid fix pipeline (#7401–#7404) demonstrates active maintenance.

## 8. Backlog Watch

- **#7345** — Automation count discrepancy (61 vs 50). No fix PR yet; affects dashboard trust.
- **#7349** — Chat refresh loses run history. No fix PR yet; data-persistence concern.
- **#5882** — Slack reconnect auth broken state. Long-open since July 9; no fix PR.
- **#5878** — Revoked GitHub token error handling. Long-open since July 9; no fix PR.
- **#6479** — Routine self-replication risk. Open since July 22; security-relevant, no fix PR.
- **#6046** — Excessive tool invocations on simple workflows. Open since July 13; indirectly addressed by #7405 but no dedicated fix yet.
- **#7360** — Stress coverage gap for built-in/durable write paths. Needs maintainer attention to close regression blind spots.
- **#7076** — "Install the packages the catalog already publishes" — open since Aug 3, contributor new, no maintainer review yet.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest — 2026-08-10

## 1. Today's Overview

LobsterAI saw low but focused activity on 2026-08-10, with 3 issues updated in the past 24 hours and no new PRs or releases. All activity centers on user-facing configuration and cross-model orchestration challenges, indicating a project whose user base is pushing against the current abstraction boundaries rather than encountering systemic instability. No new releases were published, and the contributor pipeline (PRs) remained inactive for the day. Overall project health is stable but shows signs of growing pains as users adopt more complex multi-model workflows.

## 2. Releases

No new releases today.

## 3. Project Progress

No PRs were merged or closed today. The project is in a quiet development window with no code changes landing in the past 24 hours.

## 4. Community Hot Topics

- **[Issue #2453](https://github.com/netease-youdao/LobsterAI/issues/2453)** — *Custom model provider detection bug* (1 comment, updated today)
  A user reports that switching custom models with definitions like `custom_1/openai/gpt-oss-20b:free` is incorrectly flagged as unauthorized. The root cause appears to be a parsing logic error where the provider is misidentified as `OpenAI`. This is a high-priority usability bug affecting OpenRouter and NVIDIA model integrations.
  **Underlying need:** Accurate provider/model string parsing for community and third-party model registries.

- **[Issue #1187](https://github.com/netease-youdao/LobsterAI/issues/1187)** — *Request for context window and output token settings* (2 comments, 1 👍, stale)
  User encounters `Context overflow: prompt too large for the model` with DeepSeek and requests configurable context window size and output token limits in the model settings UI.
  **Underlying need:** Fine-grained control over model parameters to prevent runtime errors and optimize cost/performance.

- **[Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132)** — *Cross-model sub-task invocation problems* (1 comment, stale)
  User describes a scenario where a planning-oriented main model (M3) delegates execution sub-tasks to a faster model (DeepSeek), but cross-model sub-task communication breaks — specifically, `call_function` results are not visible in `sessions_list` or `subagents`.
  **Underlying need:** Robust cross-model orchestration with explicit notification/gateway mechanisms between heterogeneous model sessions.

## 5. Bugs & Stability

| Severity | Issue | Description |
|----------|-------|-------------|
| **Medium** | [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) | Custom model definitions with non-standard provider paths are incorrectly rejected as unauthorized. Affects OpenRouter and NVIDIA integrations. |
| **Low** | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | No built-in context window/token limit configuration causes runtime `Context overflow` errors. No fix PR exists. |

No regressions or crash reports filed today. No fix PRs are currently open for either issue.

## 6. Feature Requests & Roadmap Signals

- **Configurable context window & output token limits** (Issue #1187) — Strong signal that users are running into token limits with DeepSeek and similar models. Likely candidate for a settings UI enhancement in an upcoming release.
- **Cross-model sub-task orchestration improvements** (Issue #2132) — The project's multi-agent architecture is being tested in production workflows. Users expect seamless handoff between models with different specializations (planning vs. execution). This may warrant architectural investment.
- **Provider-agnostic model parsing** (Issue #2453) — As the user base integrates more third-party providers (OpenRouter, NVIDIA), accurate model string parsing will become increasingly important.

**Predicted next-release candidates:** Issue #1187 (quick wins — adding config fields); Issue #2453 (bug fix, should be addressed promptly).

## 7. User Feedback Summary

Users are actively pushing LobsterAI into **multi-model, production-grade workflows** — combining planning-heavy and execution-heavy models, pulling from OpenRouter and NVIDIA catalogs, and managing long context sessions. The dominant pain points are:

1. **Configuration rigidity** — Users lack control over context size and token limits, leading to unexpected runtime failures.
2. **Provider detection fragility** — Custom model definitions that deviate from the canonical `provider/model` format are incorrectly rejected, especially disruptive in multi-threaded sessions.
3. **Cross-model communication gaps** — Sub-task results from gateway function calls are not surfaced to the parent session, breaking orchestration expectations.

Satisfaction appears moderate: the core agent framework is functional, but edge-case handling around model diversity and session management needs refinement.

## 8. Backlog Watch

| Issue | Author | Open Since | Status | Priority |
|-------|--------|-----------|--------|----------|
| [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | qxjysd | 2026-04-01 | Stale, 2 comments | Medium — user-facing config gap |
| [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | woxinsj | 2026-06-09 | Stale, 1 comment | High — architectural limitation |
| [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) | Alexandre0820 | 2026-08-09 | Fresh, 1 comment | Medium — likely quick fix |

**Recommended maintainer attention:** Issue #2453 should be triaged first (likely a short fix). Issue #2132 represents a deeper orchestration gap that may require design discussion before implementation. Issue #1187 is a straightforward configuration enhancement that would reduce support friction.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest — 2026-08-10

---

## 1. Today's Overview

Moltis reported low but steady activity over the past 24 hours: **2 open issues** and **1 open pull request** were updated, with no new releases or merged PRs. The project is in a maintenance phase, with today's activity focused on bug reporting and a single security-adjacent fix in progress. No major features were shipped, and the open PR queue remains unmerged, suggesting the maintainer team is likely reviewing or prioritizing before accepting changes. Overall, project health appears stable but momentum is subdued.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

- **0 merged/closed PRs** today.
- **PR #1186** (open) — *fix(vault): normalize recovery phrase before hashing* by **@pxmpsdev** addresses an inconsistency where the recovery phrase used for KEK derivation was normalized (dashes stripped, uppercased) but the stored hash was computed over the raw input. While this PR is not yet merged, its existence signals active maintenance on vault security integrity.
  - 🔗 https://github.com/moltis-org/moltis/pull/1186

---

## 4. Community Hot Topics

| Rank | Item | Type | Author | Activity |
|------|------|------|--------|----------|
| 1 | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Bug | @IlyaBizyaev | Open · 0 comments · 0 reactions |
| 2 | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Bug | @mikz | Open · 0 comments · 0 reactions |
| 3 | [#1186](https://github.com/moltis-org/moltis/pull/1186) | Fix | @pxmpsdev | Open · 0 comments · 0 reactions |

**Analysis:** Today's activity centers entirely on bug reports and a corrective fix. The issue topics reveal two distinct user pain points:

- **Heartbeat settings UI reset (#1187):** Users expect form fields to persist across interactions. Silent resets erode trust in the settings UX and suggest a disconnect between the UI binding layer and the underlying state model.
- **Apple Container detection (#1185):** The sandbox is functionally running, but Moltis fails to recognize it as such. This points to a status-detection or health-check gap specific to Apple Container 1.x, which could block users relying on that environment.

Neither issue has attracted community discussion yet (0 comments), indicating they are fresh and may benefit from maintainer acknowledgment to prevent user frustration.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Medium** | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat settings UI silently resets fields not represented by the form | No |
| **Medium** | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x sandbox starts but Moltis treats it as not running | No |

**Assessment:** Both bugs are classified as medium severity — they impact functionality but do not cause crashes or data loss. No fix PRs are currently open for either issue. The absence of regression reports is a positive signal for overall stability, but the two unresolved bugs in the UI and container-detection layers warrant attention before the next release to avoid user-visible friction.

---

## 6. Feature Requests & Roadmap Signals

No new feature requests were filed today. The closest roadmap signal is **PR #1186**, which tightens vault recovery-phrase handling. If merged, it would improve user experience by ensuring case/dash-insensitive input works consistently for both unsealing and hash verification — a quality-of-life improvement that aligns with security hardening rather than new feature development.

---

## 7. User Feedback Summary

- **Pain point — UI state loss (#1187):** Users are encountering silent field resets in the Heartbeat settings, which creates a frustrating experience where configured values disappear without warning. This suggests a need for better form-state management and explicit change tracking.
- **Pain point — Container detection (#1185):** Users running Apple Container 1.x are unable to get Moltis to correctly recognize their running sandbox, blocking workflow continuity. This indicates a compatibility gap that needs investigation into the container health-check mechanism.
- **Satisfaction signal (positive):** The vault fix PR (#1186) shows that power users are engaged and contributing improvements, which is a healthy community signal. The `recovery_key_case_insensitive` test coverage mentioned in the PR also suggests the project values test-driven reliability.

---

## 8. Backlog Watch

| Item | Type | Author | Open Since | Risk |
|------|------|--------|-----------|------|
| [#1187](https://github.com/moltis-org/moltis/issues/1187) | Bug | @IlyaBizyaev | 2026-08-09 | Medium — UX regression, no fix yet |
| [#1185](https://github.com/moltis-org/moltis/issues/1185) | Bug | @mikz | 2026-08-08 | Medium — environment compatibility, no fix yet |

Both issues are fresh (1–2 days old) and have not yet received maintainer responses. While they do not yet constitute a backlog concern, the **lack of any merged PRs** and **no maintainer engagement on open bugs** over the past day is worth monitoring. If these issues remain unacknowledged beyond 48 hours, they should be flagged as potential attention gaps.

---

**Overall Health Grade: 🟡 Moderate** — Stable with no critical incidents, but low merge velocity and two unresolved bugs suggest the project is in a waiting phase rather than an active development sprint.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw Project Digest — 2026-08-10

## 1. Today's Overview

CoPaw (QwenPaw) shows **high daily activity** with 17 issues and 50 PRs touched in the last 24 hours. Six issues were closed and one PR merged, indicating an active triage cadence. The project is in the **2.1.0b2 development window**, with steady contributor velocity across frontend, providers, and memory subsystems. No new releases were published today.

## 2. Releases

No new releases published today. The project is currently tracking **2.1.0b2**.

## 3. Project Progress

**Merged/Closed today:**
- **#6846** (merged) — Cataloged DeepSeek V4 context windows (1M tokens), fixing context compaction triggers for deepseek-v4-flash and deepseek-v4-pro.
- **#6851, #6850, #6849, #6848** (closed) — Front-end renderer issue collapsed long multi-line tool output into unreadable blobs; all duplicates consolidated and resolved.

**Notable PRs advancing today:**
- **#6845** — Fixes assistant completion-time preservation on chat history reload; SSE now carries correct `finished_at` timestamps.
- **#6844** — Strips unsupported `$schema` metadata from Gemini tool requests, resolving the "Model 'unknown' execution failed" error on Google's API.
- **#6843** — Replaces `BaseHTTPMiddleware` with pure ASGI middleware to enable real-time SSE streaming in the Console UI.
- **#6818** — Honors `disable_thinking` and stream interruption flags in Continuation Summary flows through the OpenAI Responses provider.
- **#6816** — Fixes `consume_model_response()` type detection for `ChatResponse` objects that inherit from `dict`.
- **#6804** — Enables WeChat users to reply with Chinese approval actions (`允许`/`拒绝`).
- **#6805** — Repairs `check-channels.sh` environment detection logic.
- **#6750** — Resolves session-identity deadlock, early session save, and oversized-prompt collapse in chat.
- **#6704** — Adds session fork feature, letting users snapshot a conversation into a new independent session.
- **#6725** — Improves fork finalization failure reporting in background subagent tasks.
- **#6842** — Adds a `hidden` flag to `AgentProfileRef` for hiding agents from UI selectors without disabling them.
- **#6854** — Adds localized approval purpose descriptions so users see a plain-language reason before approving guarded tool calls.

## 4. Community Hot Topics

| Issue/PR | Comments | Summary |
|---|---|---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 66 | Open-contributor task board — still active since March 2026 |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 4 | Assistant message end-time displays incorrectly (seconds instead of actual 2-min latency) |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | 3 | MCP tool calls coerce string parameters that look like numbers into numeric types, breaking APIs |
| [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | 3 | Gemini API rejects tool schemas containing `$schema` metadata field |
| [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | 2 | Antivirus software repeatedly kills QwenPaw processes during task execution |

**Underlying needs:** Contributors are actively seeking entry points (#2291). Users need **mobile-friendly consoles** (#6281, 5 comments), **accurate timestamps** in the UI, **strict type fidelity** in MCP integrations, and **AV compatibility** — all recurring themes in personal AI assistant deployments.

## 5. Bugs & Stability

| Severity | Issue | PR Fix | Notes |
|---|---|---|---|
| 🔴 High | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) — Gemini `unknown` model error | [#6844](https://github.com/agentscope-ai/QwenPaw/pulls/6844) (open) | Schema metadata stripping |
| 🔴 High | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) — MCP numeric string coercion | None yet | Type fidelity regression |
| 🟡 Medium | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) — Timestamp display wrong | [#6845](https://github.com/agentscope-ai/QwenPaw/pulls/6845) (open) | Completion-time preservation |
| 🟡 Medium | [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) — `prompts.py` claims dream syncs to MEMORY.md, never implemented | None yet | Documentation drift vs. behavior |
| 🟢 Low | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) — AV false positives killing process | None yet | Configuration/workaround needed |
| ✅ Resolved | [#6848–#6851](https://github.com/agentscope-ai/QwenPaw/issues/6851) — Front-end renderer blob collapse | Closed | Duplicates merged |

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Status | Likelihood for Next Release |
|---|---|---|---|
| Mobile-responsive Web Console | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Open | Medium — cosmetic but high demand |
| Approval purpose descriptions | [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | Open | **High** — PR #6854 already addresses this |
| Auto-Dream retry + tolerance for schema failures | [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | Open | Medium — improvement to memory pipeline |
| ReMe4 roadmap timeline (Auto-Link, tri-modal search, 4-category weights) | [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) | Open | Low-Medium — roadmap question, not a code change |
| Sub-agent auto model switching & shared workspace | [#6838](https://github.com/agentscope-ai/QwenPaw/issues/6838) | Open | Medium — architecture-level fix needed |
| Reranker support for ReMe search | [#6398](https://github.com/agentscope-ai/QwenPaw/pulls/6398) | Under Review | **High** — already in review |
| Theme/skin configurable module | [#6312](https://github.com/agentscope-ai/QwenPaw/pulls/6312) | Draft | Medium — design-scope PR |
| Session fork | [#6704](https://github.com/agentscope-ai/QwenPaw/pulls/6704) | Open | **High** — strong user interest |
| CIDR support in no-auth allowlist | [#6259](https://github.com/agentscope-ai/QwenPaw/pulls/6259) | Open | **High** — operational need |

**Prediction:** Approval descriptions (#6854), session fork (#6704), and reranker support (#6398) are the strongest candidates for the next release candidate.

## 7. User Feedback Summary

- **AV false positives** (#6847) are a significant deployment pain point — users compare QwenPaw unfavorably to WorkBuddy on this axis, suggesting aggressive behavioral heuristics in spawned processes.
- **Approval UX** (#6832) is consistently flagged as unclear; users want plain-language summaries rather than raw PowerShell/command inspection.
- **MCP type fidelity** (#6839) reveals that agent tool-calling layers are inadvertently normalizing string parameters, a regression that breaks external API contracts.
- **Timestamp accuracy** (#6826) undermines trust in the Console's reflection features — users notice the discrepancy between perceived and actual latency.
- **ReMe memory docs** (#6853) are out of sync with implementation, causing confusion about what the "dream" pipeline actually does.

## 8. Backlog Watch

| Issue | Created | Comments | Why It Needs Attention |
|---|---|---|---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 2026-03-25 | 66 | Signature open-contributor thread; stale without maintainer status updates |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 2026-07-20 | 5 | Mobile console adaptation — no PR yet, high user demand |
| [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | 2026-08-09 | 1 | Documentation bug in core memory prompts; easy fix, low visibility |
| [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | 2026-08-09 | 1 | Auto-Dream tolerance gap affecting reliability; needs product decision |
| [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) | 2026-08-09 | 1 | Roadmap visibility question — community wants ReMe4 timeline clarity |

---

**Project Health Assessment:** Active contributor base, fast triage cadence, and multiple bug-fix PRs landing. Key risks are the **Gemini schema regression** (#6812/#6844) and **MCP type coercion** (#6839), both blocking production API integrations. The AV false-positive issue (#6847) remains an unaddressed operational concern.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



# ZeroClaw Project Digest — 2026-08-10

---

## 1. Today's Overview

ZeroClaw is experiencing **high activity** with 50 issues and 50 PRs updated in the last 24 hours, though the merged/closed-to-open ratio is heavily skewed toward open work (12 closed issues, 1 merged PR). The project is deep in a governance and security hardening phase — multiple RFCs around work lanes, capability configuration, and security posture are actively discussed. No new releases shipped today; the recent v0.8.3 release is being followed by consolidation work on release attestations and security fixes.

---

## 2. Releases

**No new releases.** The latest shipped version remains **v0.8.3**. Notably, v0.8.3 introduced three parallel provenance/signing mechanisms (cosign bundles, GitHub artifact attestations, SLSA) that are now being consolidated — see Issue #9101.

---

## 3. Project Progress

### Merged / Closed Today
- **#9192** (CLOSED) — Fixed `shared_budget` TOCTOU race in `SopEngine::finish_run` that could wrap `AtomicUsize` and cause unwrap panics under mutex contention. A robustness-critical fix for concurrent parent/subagent iterations.
- **#9690** (CLOSED) — Containerfile stage was pinning `rustc 1.95.0`, below the declared MSRV, making the `all-features` variant unbuildable since 2026-07-08.
- **#9656** (CLOSED) — Telegram typing indicator was incorrectly running for the entire approval-wait duration, making blocked turns appear healthy.
- **#8681** (CLOSED) — Tracker for the goal-mode implementation split stack; coordinated migration of the already-implemented goal-mode work from `feat/goal-mode` into reviewable PRs.

### Key Open PRs Advancing Today
- **#9065** — Hindsight memory stack (3/7): config-driven recall/injection caps and a recall-type filter for Hindsight.
- **#9607** — Routes coding CLI tools (`codex_cli`, `claude_code`, `gemini_cli`, `opencode_cli`) through the configured runtime and sandbox wrapper instead of bypassing them.
- **#9757** — Fixes Anthropic provider not receiving tool-result images due to `tool_result.content` being typed as plain `String`.
- **#9002** — Keeps agent turns alive after dashboard WebSocket viewer disconnects; treats the dashboard as a viewer/controller rather than turn owner.
- **#9875** — Adds per-agent environment variables and workspace-confined `HOME` for the shell tool.

---

## 4. Community Hot Topics

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 22 | Open — ratification deferred, rollout in progress |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | RFC: Per-model capability & context-window config | 12 | Open — needs maintainer review |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | RFC: Treat empty WhatsApp `allowed_groups` as permit-none | 11 | Open — in progress |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs | 11 | Open |
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | System prompt tool-availability mismatch across entry points | 10 | Closed — in progress |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC: Security posture, credential boundaries, universal ingress policy | 10 | Open — needs review |

**Analysis:** The project's community is heavily engaged in **governance and security architecture**. The top-discussed RFCs all concern operational process (work lanes, decision queues) and security boundaries (capability config, WhatsApp access control, credential policy). This signals a maturing project transitioning from feature velocity to operational maturity and security hardening. The high comment counts on process-oriented RFCs suggest contributors are deeply invested in how decisions are made, not just what is decided.

---

## 5. Bugs & Stability

### P0 / Critical
- [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) — **Gateway webhook handlers do not fail closed** (WhatsApp Cloud, Linq, WATI). Attacker-controllable messages dispatched without authentication. **Severity: S0 — data loss / security risk.** Status: in-progress.

### P1 / High
- [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) — System prompt tool-availability mismatch across channels/gateway/WebSocket/multimodal entries. Closed/in-progress.
- [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — MCP/tool-schema cloning drives unbounded RSS growth in the agent loop. Open, accepted.
- [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) — `shared_budget` TOCTOU race causing panic. **Closed.**
- [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — Config flush can overwrite concurrent writes. Open, accepted.
- [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) — `sops_dir` documented default not honoured; SOPs silently never load. Open, accepted.
- [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) — High-entropy detector redacts Solana wallet addresses on Telegram; `high_entropy_tokens=false` ineffective on channel path. Open, accepted.
- [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — `vi_verify` evaluates constraints without verifying the credential chain. Open, accepted.

### P2 / Medium
- [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) — `browser_open` hangs agent turn when launcher can't open a window. **Closed.**
- [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) — Discord typing indicator stuck after dashboard daemon reload. Open.
- [#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) — Telegram typing indicator runs during approval wait. **Closed.**
- [#9860](https://github.com/zeroclaw-labs/zeroclaw/issues/9860) — Web UI frozen after filesystem channel "created" event. **Closed.**
- [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) — Nested runtime panic in `try_enable_pgvector` at startup. Open.

**Fix PRs in flight:** #9607 (runtime tool routing), #9314 (Telegram offset fix), #9868 (link-enricher redirect guard), #9757 (Anthropic image delivery).

---

## 6. Feature Requests & Roadmap Signals

| RFC / Issue | Summary | Likelihood for Next Release |
|-------------|---------|----------------------------|
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — Per-model capability & context-window config | Addresses misreported vision support and incorrect context fallbacks | **High** — P1, active discussion |
| [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) — Publish-safe exceptions for blockchain identifiers | Fixes false-positive redaction of public wallet addresses | **High** — directly unblocks MCP use cases |
| [#8994](https://github.com/zeroclaw-labs/zeroclaw/issues/8994) — Native Home Assistant REST tool | New `homeassistant` tool with entity listing, state, and service calls | **Medium** — in review, size L |
| [#9556](https://github.com/zeroclaw-labs/zeroclaw/issues/9556) — Langfuse observer backend | OTel traces to Langfuse cloud/self-hosted | **Medium** — open, needs author action |
| [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) — Hot-reload security policy & channel config | Avoid full daemon reload on config changes | **Medium** — P3, RFC stage |
| [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) — Streamline RFC scope, discussion, voting | Process improvement to speed up decision-making | **Low** — meta/governance |

The memory/recall stack (#9065 and #9069, parts 3/7 and 7/7) and the Matrix single-message progress drafts (#8443) are also notable feature developments likely landing in the next few iterations.

---

## 7. User Feedback Summary

- **Telegram voice/document losses:** The long-poll offset advancement bug (#9314) caused permanent update loss on transient failures — a significant reliability concern for Telegram users. Fixed in #9314.
- **Solana wallet redaction:** Users cannot share wallet addresses in Telegram due to the high-entropy detector (#9486). This is a false positive blocking a real financial-use case.
- **Web UI scroll behavior:** Auto-scroll during agent streaming prevents users from reviewing earlier messages (#9749 — fix PR open).
- **Dashboard disconnect cancels turns:** Users navigating away or losing WebSocket connectivity prematurely terminated agent work (#9002 — fix PR open).
- **SOPs silently failing to load:** The `sops_dir` default documentation mismatch (#9779) means operators relying on the documented default get no SOPs at all, with no error or warning — a stealthy correctness issue.
- **MCP memory bloat:** Unbounded RSS growth from schema cloning (#8642) is causing OOM issues, especially in WSL2 environments.

**Satisfaction signal:** The project is actively addressing real operational pain points (memory leaks, data loss, false positives). The high volume of bug closures and in-progress fixes is positive, though the P0 gateway authentication gap (#9565) is a concerning gap.

---

## 8. Backlog Watch

| Issue | Why It Needs Attention |
|-------|----------------------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — Work Lanes RFC | 22 comments, ratification deferred since May. Governance process is blocked. |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — Security posture RFC | 10 comments, P2 but high-risk. Critical for operator trust; stalled on review. |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — Reconcile `cargo-audit` ignores / remediate `wasmtime-wasi` CVEs | P1, open since June. Dependency security debt. |
| [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) — `forbid(unsafe_code)` workspace-wide | P2, open since June. One of the few remaining `unsafe` carve-outs to resolve. |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) — Consolidate release attestation mechanisms | P1, high-risk. Redundant signing (3 mechanisms, 53 assets → ~20) blocks clean release pipeline. |
| [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) — Hot-reload security policy | Open since June, P3 but impacts operational security. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue tracker | 11 comments, blocking upstream RFCs from being accepted/rejected. |

**Overall project health:** ZeroClaw is in a **mature stabilization phase** — heavy RFC activity, security hardening, and bug closure dominate over new feature development. The P0 webhook authentication gap (#9565) is the most urgent open item. The project shows strong community engagement (high comment counts, diverse contributors) but maintainer capacity appears strained given the number of open RFCs awaiting review and the deferral of #6808.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*