# OpenClaw Ecosystem Digest 2026-08-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-08 00:52 UTC

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

# OpenClaw Project Digest — 2026-08-08

## 1. Today's Overview

OpenClaw maintains extremely high development velocity with **500 issues and 500 PRs** updated in the last 24 hours, indicating a massive, active community and rigorous review pipeline. **94 PRs were merged/closed** today, demonstrating effective triage and resolution throughput, while **32 issues were closed**. The project is in a stable-beta phase (versions 2026.7.x) with significant focus on session-state integrity, gateway stability, and channel reliability. No new releases were published today, but the merged PRs suggest imminent patch releases addressing critical regression bugs from the 2026.7.x beta track.

## 2. Releases

**No new releases today.** The project is currently operating on the `2026.7.x` beta track (latest referenced: `2026.7.2-beta.7`). Existing issues indicate several regression bugs introduced in recent beta builds that will likely need patch releases (e.g., `2026.7.2-patch.1` or similar).

## 3. Project Progress

### Key Merged/Closed Items Today

- **[#116277] Closed:** DeepSeek v4 Flash silent reply failure — resolved fallback messaging behavior (#116277)
- **[#92884] Closed:** Config validation now correctly accepts plugin-owned channel schema extensions (#92884)
- **[#119009] Closed:** Runaway model-call retry loop cost leakage — $204 incident investigated and containment logic improved (#119009)
- **[#110171] Closed:** Voice chat context parity feature for agent-consult sessions implemented (#110171)

### Notable Merged PRs

- **[#120240] Ollama UTF-8 Validation:** Rejects invalid UTF-8 in streaming NDJSON responses, preventing silent corruption (#120240)
- **[#120287] Session Catalog Pagination Fix:** Bounded pagination prevents infinite hangs when providers emit empty pages with fresh cursors (#120287)
- **[#120273] Usage Mosaic Bound Iteration:** Fixed UI freeze during usage tab rendering across extreme activity spans (#120273)
- **[#120276] OpenAI Thinking Signatures:** Treats OpenAI Responses thinking signatures as untrusted JSON during replay, preventing session-bricking from malformed history (#120276)
- **[#120279] QQ Bot Heartbeat Validation:** Validates gateway `heartbeat_interval` before scheduling, preventing invalid timer configurations (#120279)
- **[#120271] Cron Output Buffer Cap:** Caps `outputMaxBytes` for cron command payloads to prevent unbounded memory buffering (#120271)
- **[#120283] Browser Extension Frame Validation:** Validates extension relay frame fields before handling, preventing gateway crashes from malformed WebSocket frames (#120283)
- **[#117362] Terminal Node Heartbeat Bound:** Bounded initial terminal node heartbeat prevents duplex terminals from staying open indefinitely without progress (#117362)
- **[#113371] ACPX Dead PID Handling:** ACP sessions with dead PIDs now treated as fresh after gateway restart, preventing hang-on-resume (#113371)
- **[#108906] Together Video Generation Policy:** Request policy (headers, auth, proxy, TLS) now forwarded for Together API video generation (#108906)
- **[#119211] Realtime Output Cancellation:** `talk.realtime.cancelOutput` now cancels audio output without aborting the entire turn, fixing barge-in state destruction (#119211)

## 4. Community Hot Topics

### Most Discussed Issues

1. **DeepSeek v4 Flash Silent Failure** — 129 comments, 🦞 Diamond Lobster (#116277)
   - Highest engagement issue; users reporting complete reply silence with generic fallback messages. Reflects deep reliance on DeepSeek models and frustration with undiagnosed failures.

2. **Memory Trust Tagging by Source** — 29 comments, 🌊 Off-Meta Tidepool (#7707)
   - Security-conscious users requesting defense against memory poisoning attacks from untrusted sources (web scrapes, third-party skills). Indicates maturing production deployments with adversarial concerns.

3. **Gateway Memory Leak (350MB → 15.5GB)** — 22 comments, 🦐 Gold Shrimp, P0 (#91588)
   - Critical production stability issue causing OOM kills and launchd restart cycles. Long-standing (since June) with only 1 reaction; suggests maintainers are aware but complex to fix.

4. **CLI Startup Preflight Corrupting SQLite** — 14 comments, 🦞 Diamond Lobster, P0 (#101290)
   - Data-loss regression on macOS where health-check commands corrupt the live state DB. Multiple corruption events reported in 4-day span.

5. **Pre-reset Agentic Memory Flush** — 11 comments, 4 👍, 🦞 Diamond Lobster (#45608)
   - Feature request with strong community support (4 reactions); users want memory flush before `/new` and daily reset to match compaction behavior.

### Active PRs Requiring Attention

- **[#116489] Install Policy Acknowledgement** — Security-boundary change requiring user confirmation for plugin installs (waiting on author) (#116489)
- **[#120001] Codex Subagent Tool Preservation** — Fixes loss of native subagent tools after parent turns end (waiting on author) (#120001)
- **[#119344] Signal CLI Account Linking** — New Signal integration feature (waiting on author) (#119344)

## 5. Bugs & Stability

### P0 Critical Issues (Today's Activity)

| Issue | Summary | Fix PR |
|-------|---------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway memory leak: RSS grows 350MB → 15.5GB over 2-3 days, OOM kills | None yet |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI preflight corrupts SQLite DB during gateway runtime (macOS) | None yet |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | DB v14→v15 migration fails: `no such column: entry_valid`, gateway won't start | None yet |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | `totalTokens` inflation causes premature compaction at 4-8% context window | None yet |

### P1 High-Severity Issues

- **[#115700](https://github.com/openclaw/openclaw/issues/115700)** — `chat.send` rejected with "thread switched branches" after model completion; stale `expectedLeafEntryId` (Fix: [#116382](https://github.com/openclaw/openclaw/pull/116382))
- **[#116022](https://github.com/openclaw/openclaw/issues/116022)** — Beta `/new` reuses stable session ID, cannot recover retired Codex tombstone
- **[#85030](https://github.com/openclaw/openclaw/issues/85030)** — MCP tools not injected into `sessions_spawn` subagents; `bundle-mcp` and allowlists ignored (29 comments)
- **[#98435](https://github.com/openclaw/openclaw/issues/98435)** — MCP loopback transport doesn't auto-reconnect after gateway restart; `recovered=1` misleading
- **[#109145](https://github.com/openclaw/openclaw/issues/109145)** — Gateway HTTP listens but doesn't accept connections (v2026.7.1-beta.5)
- **[#94939](https://github.com/openclaw/openclaw/issues/94939)** — 6.x migration leaves channel conversation-store SQLite empty (0 bytes), breaks Bot Framework/MS Teams
- **[#117609](https://github.com/openclaw/openclaw/issues/117609)** — Transient LLM/socket errors retried for channels but not embedded-assistant stage; long turns die whole
- **[#99586](https://github.com/openclaw/openclaw/issues/99586)** — Runtime tool surface returns blank body after gateway-touching operations
- **[#117209](https://github.com/openclaw/openclaw/issues/117209)** — `AuthProfileStoreUnreadable` sticky after runtime snapshot publication failure
- **[#119411](https://github.com/openclaw/openclaw/issues/119411)** — Memory file watcher never reindexes; `memory status` reports `Dirty: no` incorrectly
- **[#119009](https://github.com/openclaw/openclaw/issues/119009)** — Runaway retry loop billed $204 over 2 incidents; stall detection fails because retries reset progress clock
- **[#87136](https://github.com/openclaw/openclaw/issues/87136)** — Compaction absolute token thresholds break when switching models (DeepSeek 1M vs GLM 200K)
- **[#86050](https://github.com/openclaw/openclaw/issues/86050)** — Gateway buffers claude-cli stream events; surfaces only see final assembled message
- **[#86119](https://github.com/openclaw/openclaw/issues/86119)** — Orphaned `node server.js` worker processes accumulate after subagent/cron runs
- **[#119333](https://github.com/openclaw/openclaw/issues/119333)** — Codex `request_user_input` exposed in Default mode but rejected at runtime
- **[#119557](https://github.com/openclaw/openclaw/issues/119557)** — Chat delta throttle has no trailing flush; withheld chunks wait indefinitely
- **[#117445](https://github.com/openclaw/openclaw/issues/117445)** — Feishu plugin decodes inbound DM as "?" and never replies (undefined.catch on ingress)

### P2 Medium-Severity Issues

- **[#119087](https://github.com/openclaw/openclaw/issues/119087)** — Gateway cold start regressed 2.5x from 2026.7.1-beta.1 to 2026.7.2-beta.7 on 1-vCPU container
- **[#108379](https://github.com/openclaw/openclaw/issues/108379)** — Duplicate assistant generation for Xiaomi MiMo causes repeated narrative text before abort
- **[#52186](https://github.com/openclaw/openclaw/issues/52186)** — ElevenLabs TTS generates audio but OpenAI voice plays instead
- **[#94919](https://github.com/openclaw/openclaw/issues/94919)** — Z.AI ECONNRESET triggers invisible model fallback in async contexts (cron, sub-agents)
- **[#75380](https://github.com/openclaw/openclaw/issues/75380)** — `provider-payload.jsonl` and `cache-trace.jsonl` grow unbounded; no rotation policy
- **[#86012](https://github.com/openclaw/openclaw/issues/86012)** — LINE channel messages silently lost due to reply token expiry + missing push fallback
- **[#74378](https://github.com/openclaw/openclaw/issues/74378)** — CLI commands remain alive as `node.exe` processes after execution on Windows
- **[#93917](https://github.com/openclaw/openclaw/issues/93917)** — `genericRepeat` circuit-breaker never fires when exec results vary slightly
- **[#118560](https://github.com/openclaw/openclaw/issues/118560)** — WebChat canvas hides earlier messages after main session reset
- **[#119796](https://github.com/openclaw/openclaw/issues/119796)** — Windows vitest teardown fails with EBUSY unlink on agent state DB

### Closed Today
- **[#116277](https://github.com/openclaw/openclaw/issues/116277)** — DeepSeek v4 Flash silent reply failure (resolved)
- **[#92884](https://github.com/openclaw/openclaw/issues/92884)** — Config validate rejects plugin channel schema extensions (fixed)
- **[#119009](https://github.com/openclaw/openclaw/issues/119009)** — Runaway retry loop cost leakage (investigated)
- **[#110171](https://github.com/openclaw/openclaw/issues/110171)** — Voice chat context parity (implemented)

## 6. Feature Requests & Roadmap Signals

### High-Priority Requests

1. **Memory Trust Tagging by Source** (#7707) — 29 comments
   - Users want to tag memory entries by trust level (user commands vs. web scrapes vs. third-party skills) to prevent memory poisoning. Strong signal for security-first memory architecture.

2. **Per-model Usage Logging for Cost Tracking** (#13219) — 7 comments, 1 👍
   - Native aggregated usage logs requested; currently users must parse session JSONL files. Indicates cost-optimization focus in production deployments.

3. **Intelligent Session Auto-Titling** (#99583) — 7 comments, 2 👍
   - Lazy generation using cheap models, topic-aware renames. Existing `llm-slug-generator` already in codebase; low-hanging UX improvement.

4. **Pre-reset Agentic Memory Flush** (#45608) — 11 comments, 4 👍
   - Run memory flush before `/new` and daily reset using same mechanism as compaction. High community support (4 reactions); likely to be prioritized.

5. **Opt-in Reaction-Triggered Agent Turns** (#17840) — 6 comments
   - Emoji-choice polling, reaction-woken interactive patterns. Niche but indicates desire for richer async interaction models.

6. **Skill Lifecycle Management** (#95516) — 5 comments, 2 👍
   - Auto-optimization on failure + usage-based retirement. Suggests users are running large skill portfolios needing governance.

7. **Task Flow Lifecycle Hook Events** (#87362) — 5 comments, 1 👍
   - Expose internal `TaskFlowRegistryObserverEvent` through plugin SDK for observability. Plugin developers need this for custom monitoring.

8. **Azure Foundry GPT Realtime Talk Support** (#87325) — 8 comments, 1 👍
   - First-class Talk support for Azure AI Foundry deployments. Enterprise users pushing for Azure parity.

9. **Before-Route Inbound Message Hook** (#81061) — 7 comments, 3 👍
   - Pre-routing interception for channel bridging/proxying. Plugin authors need this for custom message routing logic.

### Likely Next Version Inclusions
- Pre-reset memory flush (#45608)
- Session auto-titling (#99583)
- Per-model usage logging (#13219)
- Reaction-triggered turns (#17840)

## 7. User Feedback Summary

### Pain Points
- **Memory leaks and resource exhaustion** dominate complaints (#91588, #86119, #75380). Users running long-lived gateways in production are hitting stability walls.
- **Session state corruption** is the second major theme (#101290, #118772, #94939, #115700). SQLite corruption, premature compaction, and migration failures are causing data loss and operational fire drills.
- **Model fallback opacity** frustrates users (#94919, #117609). Fallbacks happen silently in async contexts (cron, sub-agents) with no user visibility.
- **Channel-specific bugs** are prevalent: LINE message loss (#86012), Feishu decode failures (#117445), QQ heartbeat issues, Signal setup gaps (#119344). Multi-channel reliability is a struggle.
- **Cost leakage** from retry loops (#119009) and unbounded logging (#75380) are causing surprise bills.

### Satisfaction Signals
- **High engagement** on security and memory features suggests users trust OpenClaw with sensitive workloads.
- **Strong reaction counts** on UX improvements (auto-titling, memory flush) indicate these would be well-received.
- **Rapid PR merge rate** (94 today) shows maintainers are responsive to community contributions.
- **Closed issues** like DeepSeek fallback (#116277) and config validation (#92884) show bugs get resolved.

### Use Cases Observed
- Production gateway deployments in Docker/K8s (memory leak, cold start issues)
- Multi-channel chatbots (Telegram, LINE, Feishu, QQ, Signal, Discord, MS Teams)


---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-08-08
**Scope:** Open-Source Personal AI Agent & Assistant Ecosystem

## 1. Ecosystem Overview
The open-source personal AI agent landscape in mid-2026 is characterized by a shift from experimental novelty to production-grade reliability. Projects are aggressively addressing "adult" problems: memory persistence, session state integrity, and multi-channel stability. While feature parity in core LLM integration is largely achieved, the competitive differentiator has moved to security hardening (session isolation), observability (token cost tracking), and enterprise-grade deployment patterns (Docker/K8s stability).

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Primary Focus |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **OpenClaw** | 500 | 500 | Stable-Beta (2026.7.x) | **High** | Channel reliability, Gateway stability |
| **Hermes Agent** | 50 | 50 | No Release | **High** | Windows Desktop, Kanban stability |
| **ZeroClaw** | 50 | 50 | No Release | **High** | Security patches, SOP engine fixes |
| **CoPaw** | 31 | 49 | **v2.1.0-beta.2** | **High** | Desktop UX, Shell stability |
| **NanoBot** | 10 | 21 | No Release | **Medium** | Session isolation, Memory management |
| **IronClaw** | 100 | 100 | No Release | **Medium** | Doc-Truth, Tool disclosure metrics |
| **LobsterAI** | 7 | 7 | **v2026.8.7** | **Medium** | UX refinement, Windows installer |
| **PicoClaw** | 4 | 14 | No Release | **Medium** | Dependency updates, Channel parity |
| **NanoClaw** | 0 | 10 | No Release | **Low** | Integration expansion (Mattermost) |
| **NullClaw** | 0 | 0 | No Release | **Stagnant** | N/A |
| **TinyClaw** | 0 | 0 | No Release | **Stagnant** | N/A |
| **Moltis** | 0 | 0 | No Release | **Stagnant** | N/A |
| **ZeptoClaw** | 0 | 0 | No Release | **Stagnant** | N/A |

*\*Health Score based on issue resolution velocity, PR merge rate, and release cadence.*

## 3. OpenClaw's Position

**Advantages vs. Peers:**
*   **Velocity & Scale:** OpenClaw operates at an order of magnitude higher activity volume (500 issues/PRs) than any competitor, indicating the largest contributor base and most rigorous peer review.
*   **Channel Breadth:** Unmatched support for diverse channels (Telegram, LINE, Feishu, QQ, Signal, Discord, MS Teams) with active bug fixes for each, whereas competitors often focus on 1–2 primary channels.
*   **Production Readiness:** Focus on critical infrastructure issues (memory leaks, SQLite corruption, OOM kills) suggests a user base running 24/7 production gateways, not just hobbyist setups.

**Technical Approach Differences:**
*   **Session State Integrity:** OpenClaw is deeply invested in solving "session brick" scenarios (e.g., malformed history from OpenAI thinking signatures) and context compression side effects, a level of granularity competitors are only beginning to address (e.g., ZeroClaw's SOP fixes).
*   **Cost Containment:** Unlike NanoBot (which lacks cost visibility) or OpenClaw (where $204 retry leaks are fixed), OpenClaw proactively implements usage mosaics and retry stall detection.
*   **Modularity:** OpenClaw’s plugin SDK and channel schema extensions allow for deep customization, while NanoClaw is moving toward a similar "skill-based" MCP ecosystem.

**Community Size:**
OpenClaw’s community is significantly larger, evidenced by high-engagement topics (129+ comments on single issues) and frequent diamond/lobster contributor badges. Hermes and ZeroClaw have active but smaller, more technical communities focused on stability.

## 4. Shared Technical Focus Areas

| Focus Area | Projects Involved | Specific Needs/Signals |
| :--- | :--- | :--- |
| **Memory & Context Integrity** | OpenClaw, NanoBot, Hermes, CoPaw | Preventing data loss during compression; "memory poisoning" attacks; cross-session context sharing. |
| **Session Isolation & Security** | NanoBot, ZeroClaw, OpenClaw | Per-session sandboxing; preventing agents from reading other sessions' history; API key leakage in logs. |
| **Channel Reliability** | OpenClaw, PicoClaw, ZeroClaw | WhatsApp/WeChat audio; Telegram rich messages; heartbeat/validation logic; reconnect handling. |
| **Cost Visibility & Control** | OpenClaw, NanoBot | Per-model usage logging; preventing runaway retry costs; transparent token billing. |
| **Desktop/CLI UX** | CoPaw, Hermes, LobsterAI | Windows installer stability; TUI fixes; copy-paste functionality in desktop modes. |
| **Plugin/Skill Ecosystems** | NanoClaw, CoPaw, ZeroClaw | MCP tool integration (Tavily, AnyDoc); vendor-neutral plugin standards; skill lifecycle management. |

## 5. Differentiation Analysis

*   **OpenClaw:** The **enterprise-grade gateway**. Best for multi-channel, high-availability deployments requiring deep customization and robust error handling. Focus is on "keeping the lights on" in production.
*   **Hermes Agent:** The **desktop-first, safety-focused agent**. Strong emphasis on Windows/Linux desktop UX, actionable handoffs, and security hardening (invisible Unicode in prompts). Targets users who want a local-first, secure experience.
*   **CoPaw:** The **integrated personal productivity suite**. Focus on email management, browser automation (Playwright), and shell stability. Targets users wanting an "OS-level" assistant rather than just a chatbot.
*   **NanoBot:** The **secure, isolated workspace**. Unique focus on per-session sandboxing and workspace separation, appealing to privacy-conscious users and multi-tenant scenarios.
*   **ZeroClaw:** The **autonomous workflow engine**. Distinctive focus on SOPs (Standard Operating Procedures), cron-triggered agents, and daemon lifecycle management. Targets automated background tasks.
*   **LobsterAI:** The **consumer-friendly desktop app**. Focus on UI polish (LaTeX, search, input modes) and ease of use for non-technical users.
*   **PicoClaw:** The **lightweight, portable agent**. Focus on dependency hygiene, prefix caching, and expanding Chinese market integrations (DingTalk, WeChat).

## 6. Community Momentum & Maturity

**Tier 1: Rapid Iteration (High Velocity)**
*   **OpenClaw, Hermes Agent, ZeroClaw, IronClaw:** These projects are in intense stabilization sprints. High issue/PR volumes indicate active bug hunting and feature refinement. They are mature enough to have significant production user bases but are still resolving critical stability issues.

**Tier 2: Active Development (Moderate Velocity)**
*   **CoPaw, NanoBot, LobsterAI, PicoClaw:** Moving steadily with clear release cycles (CoPaw v2.1.0-beta.2, LobsterAI 2026.8.7). Focus is on feature expansion and UX refinement.

**Tier 3: Integration & Maintenance (Lower Velocity)**
*   **NanoClaw:** Active but smaller team. Focus is on adding integrations (Mattermost, Tavily) rather than core engine changes.

**Tier 4: Stagnant**
*   **NullClaw, TinyClaw, Moltis, ZeptoClaw:** No activity in the last 24 hours. May be dormant or have very small communities.

## 7. Trend Signals

1.  **Security-First Memory Architectures:** Demand for "memory trust tagging" (OpenClaw) and per-session sandboxing (NanoBot) indicates users are moving beyond simple chat to sensitive, long-running personal data processing. Security is no longer a feature; it's a requirement.
2.  **Cost Transparency as a First-Class Feature:** Silent cost leakage (OpenClaw’s $204 incident) and lack of logging (NanoBot) are driving demands for granular, per-model usage tracking. Future agents must provide clear cost dashboards.
3.  **Decoupling of Session and Channel Lifecycles:** Both OpenClaw and ZeroClaw are working on separating session state from channel connectivity (e.g., Telegram auth, cron triggers), allowing agents to run autonomously independent of active user interfaces.
4.  **Desktop as a First-Class Surface:** Hermes, CoPaw, and LobsterAI are all investing heavily in native desktop experiences, not just CLI wrappers. Users expect clipboard, file system, and UI integration comparable to commercial tools.
5.  **MCP as the Standard for Extension:** NanoClaw and CoPaw are embracing MCP (Model Context Protocol) for skills and tools. This signals a industry-wide move toward interoperable, vendor-neutral plugin ecosystems rather than proprietary skill languages.

**Value for Developers:**
*   **OpenClaw** is the benchmark for scalability and channel reliability.
*   **NanoBot** offers lessons in secure, isolated session management.
*   **ZeroClaw** provides insights into autonomous workflow (SOP) stability.
*   **CoPaw** demonstrates successful integration of shell/browser automation in a desktop context.

*Report generated by Agnes-2.0-Flash for Sapiens AI.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-08

## 1. Today's Overview
NanoBot is exhibiting **high development velocity** today with 31 total updates (10 issues, 21 PRs) in the last 24 hours, indicating a busy release cycle or active maintenance sprints. No new versions were shipped today, suggesting the team is focused on stabilization and bug fixing rather than major releases. The activity is heavily skewed toward **session isolation**, **memory management**, and **channel robustness**, reflecting a maturing project addressing production reliability concerns.

## 2. Releases
**None** — No new releases were published on this date.

## 3. Project Progress
**Merged/Closed PRs (7):**
- **#5287**: Fixed progress defaults for channels like WeChat and Mattermost, ensuring consistent UX.
- **#5268**: Resolved a bug where attachments outside the media root lost `media_urls` on history reads.
- **#5263**: Hardened WeChat protocol handling, including QR verification and retry logic.
- **#5285**: Fixed WebUI route preservation for newly created topics.
- **#5284**: Removed legacy `GET /api/sessions/{key}/messages` route, cleaning up the API surface.
- **#5282**: Updated dependency recovery documentation for Langfuse, Olostep, and WeChat.
- **#5280**: Fixed short idle session archiving for Dream memory system.
- **#5272**: Fixed session retention trimming to preserve proactive channel delivery messages (cron notifications).
- **#5231**: Implemented idle session archiving for Dream memory input.

**Key Advances:**
- **Security/Isolation**: PR #5283 introduces per-session sandbox isolation for non-WebUI channels, and PR #5279 moves session history outside the agent workspace to prevent agents from reading other sessions' data.
- **Memory**: Significant work on Dream memory integration, ensuring history is properly captured and archived.

## 4. Community Hot Topics
- **Issue #5266** [10 comments]: *Token consumption logging*. Users are concerned about excessive token burns (millions in hours) and lack visibility into which calls generate costs. **Need:** Transparency and cost control.
- **Issue #5198** [3 comments]: *Model switching per session*. Users want the flexibility to change models mid-session without full instance reconfiguration. **Need:** UI parity with commercial AI services.
- **Issue #5278** [1 comment]: *Session history security*. Highlighting that session files inside the workspace can be read by agents, posing a privacy risk. **Need:** Better isolation between agent capabilities and data access.
- **PR #5288** [High interest]: *Agent Plugins with CLI Apps*. Integrating vendor-neutral plugin packages with the existing CLI catalog. **Signal:** Growing ecosystem portability needs.

## 5. Bugs & Stability
**Reported/Fixed Today:**
1. **#5256** [Bug]: `/goal` message produces dozens of repeated replies while waiting for user input. **Status:** Open. **Severity:** High (usability breaker).
2. **#5149** [Bug]: No audio messages sent on WhatsApp (receives but does not send). **Status:** Open. **Severity:** Medium.
3. **#5198** [Bug]: Cannot change models in a specific session without reconfiguring the entire instance. **Status:** Open. **Severity:** Medium.
4. **#5273** [Bug]: Session retention trimming drops proactive channel delivery messages. **Status:** Fixed in PR #5272.
5. **#5264** [Bug]: API history endpoint misses `media_urls` for files outside media root. **Status:** Fixed in PR #5268.

**Regression Risks:**
- The removal of the legacy `/api/sessions/{key}/messages` route (PR #5284) could break clients relying on it, though the project notes it was undocumented.

## 6. Feature Requests & Roadmap Signals
- **#5289**: *Telegram stickers and reactions*. Users want richer Telegram interactions beyond text.
- **#5276**: *Session-level temporary file isolation*. Enhancing security by isolating temp files per session.
- **#5283**: *Per-session sandbox isolation*. Already in PR, signals a strong roadmap direction toward multi-tenant security.
- **#4276**: *Model-agnostic computer use*. Long-standing feature request for native desktop/browser automation tools.
- **#5252**: *Temporary chat mode*. WebUI feature for disposable, non-persistent conversations.

**Prediction:** Next releases will likely focus on **security hardening** (session isolation, workspace separation) and **memory system reliability** (Dream integration, token logging).

## 7. User Feedback Summary
- **Pain Points:**
  - **Cost Transparency:** Users are surprised by high token usage with no granular logging (#5266).
  - **Audio Support:** WhatsApp audio sending remains broken (#5149).
  - **Session Management:** Lack of per-session model switching is frustrating for power users (#5198).
  - **Repetition Bugs:** `/goal` command causing spammy replies is a significant usability issue (#5256).
- **Satisfaction:** Positive feedback on the push for better security (workspace isolation) and memory system improvements. Users appreciate the rapid response to bugs like media URL loss and session trimming issues.

## 8. Backlog Watch
- **Issue #5256**: `/goal` message loop bug. **Priority:** Critical. No fix PR yet.
- **Issue #5149**: WhatsApp audio sending failure. **Priority:** High. No fix PR yet.
- **Issue #5198**: Model switching per session. **Priority:** Medium. No fix PR yet.
- **Issue #5278**: Session history security risk. **Priority:** High. Fix in progress (PR #5279).
- **PR #4276**: Computer use tools. **Priority:** Medium. Long-open feature request.

**Maintainer Attention Needed:** The `/goal` loop bug and WhatsApp audio issue are user-facing and unresolved. The team should prioritize these after the current security-focused sprint.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-08-08
**Source:** NousResearch/hermes-agent

## 1. Today's Overview
The Hermes Agent project exhibits **high-intensity development activity**, with 100 repository events (50 issues, 50 PRs) updated in the last 24 hours. The workflow is dominated by critical stability fixes for the Kanban automation engine and Windows desktop platform, alongside new security hardening for approval prompts and tool storage. No new releases were published today, but the merged/closed volume indicates rapid iteration on recent bug fixes.

## 2. Releases
*No new releases were published on 2026-08-08.*

## 3. Project Progress
**Merged/Closed Items:**
*   **[CLOSED] PR #80808** – *fix(agent): require actionable handoffs at implementation boundaries.* Addressed a workflow gap where agents would stop with partial summaries at permission/safety boundaries.
*   **[CLOSED] PR #81412** – *Add policy fallback delegation to local Qwen.* Introduced logic to distinguish model-reported policy restrictions from provider blocks, routing to local fallbacks.
*   **[CLOSED] Issue #11349** – *docs(discord): six documentation drifts...* Fixed Discord documentation inconsistencies and a UI bug regarding `/voice join`.
*   **[CLOSED] Issue #79331** – *Telegram Rich Messages omit standard copy affordance.* Resolved a bug where code blocks in Telegram rich messages lacked copy functionality.
*   **[CLOSED] Issue #65765** – *Telegram BotCommand localization.* Closed as duplicate; localization for command descriptions remains a pending concern.

**Key Advances:**
*   **Kanban Stability:** PR **#81411** addresses a critical bug (#80280) where terminated workers left zombie process groups alive by ensuring signals are sent to the entire process group.
*   **Security Hardening:** PR **#81403** implements invisible Unicode/control byte visibility in approval prompts (mirroring Claude Code v2.1.223) to prevent prompt injection. PR **#80760** hardens persisted tool-result storage to prevent credential leaks.
*   **Desktop/Install:** PR **#79599** advances bundled desktop installers with payloads and silent adoption capabilities.

## 4. Community Hot Topics
These issues have the highest engagement (comments/reactions) and indicate core user pain points:

1.  **[Feature] Cross-platform session context sharing (CLI ↔ Telegram)** – [Issue #4335](https://github.com/NousResearch/hermes-agent/issues/4335)
    *   *12 Comments | 3 👍*
    *   **Analysis:** Users demand seamless continuity across the gateway architecture. The current isolation of session stores between CLI and messaging platforms is a significant friction point for power users.
2.  **[Bug] Context compression dropping in-flight tool chains** – [Issue #79278](https://github.com/NousResearch/hermes-agent/issues/79278)
    *   *10 Comments*
    *   **Analysis:** A P1 safety risk where preflight compression causes non-idempotent tool results to be lost, forcing unsafe replays. This highlights the fragility of state management during high-load compression.
3.  **[Bug] OAuth (Claude Pro/Max) triggering "You're out of extra usage"** – [Issue #65365](https://github.com/NousResearch/hermes-agent/issues/65365)
    *   *8 Comments*
    *   **Analysis:** A deterministic bug where using `memory` or `session_search` tools with Anthropic OAuth connections causes HTTP 400 errors. This blocks a key feature set for users on subscription tiers.
4.  **[Feature] WhatsApp Feature Parity Campaign** – [Issue #79890](https://github.com/NousResearch/hermes-agent/issues/79890)
    *   *6 Comments*
    *   **Analysis:** Users are actively tracking the alignment of the WhatsApp bridge with the official Business Platform Cloud API.
5.  **[Feature] Expose full cron prompt for sandboxed agents** – [Issue #18374](https://github.com/NousResearch/hermes-agent/issues/18374)
    *   *4 Comments | 5 👍*
    *   **Analysis:** High satisfaction score for this request. Sandboxed agents currently only see prompt previews, limiting their ability to manage complex cron jobs effectively.

## 5. Bugs & Stability
**Critical/P1 Issues (Active):**
*   **Gateway Crash on Restart (Oversized Session):** [Issue #79624](https://github.com/NousResearch/hermes-agent/issues/79624) – Preflight compression crashes the gateway with `exit(1)` if session history exceeds 98,304 tokens.
*   **Context Compression Side Effects:** [Issue #79278](https://github.com/NousResearch/hermes-agent/issues/79278) – Tool results lost during compression, leading to agent replay of non-idempotent operations.
*   **Kanban Infinite Block Bounce:** [Issue #75444](https://github.com/NousResearch/hermes-agent/issues/75444) & [Issue #79728](https://github.com/NousResearch/hermes-agent/issues/79728) – Auto-decomposer re-dispatches escalated triage tasks, causing loops.
*   **Windows TUI Crash:** [Issue #80968](https://github.com/NousResearch/hermes-agent/issues/80968) – Gateway crashes on Windows when using `--tui` after input.

**Recent Fixes (Merged/PRs):**
*   **Process Group Leakage:** PR [#81411](https://github.com/NousResearch/hermes-agent/pull/81411) fixes Kanban workers leaving descendant processes alive.
*   **Telegram Rich Message Drop:** PR [#81368](https://github.com/NousResearch/hermes-agent/issues/81368) is a duplicate fix for top-level inbound rich messages being ignored.
*   **Windows Desktop Black Screen:** [Issue #81290](https://github.com/NousResearch/hermes-agent/issues/81290) – Secondary desktop windows staying black on Windows.

**Stability Assessment:** The project is currently grappling with **session state integrity** (compression crashes, context loss) and **concurrency safety** in the Kanban dispatcher. The high volume of P1/P2 bugs today suggests a "stabilization sprint" is underway.

## 6. Feature Requests & Roadmap Signals
*   **First-class Teams:** [Issue #81405](https://github.com/NousResearch/hermes-agent/issues/81405) – Request for persistent multi-profile teams with Quick Chat, managed work, and shared capabilities. This signals a move toward collaborative, multi-agent orchestration.
*   **Realtime Voice Provider Contract:** [PR #81404](https://github.com/NousResearch/hermes-agent/pull/81404) – Adding a typed contract for realtime voice providers, building on previous work (#70366).
*   **Meta AI Model Support:** [PR #81418](https://github.com/NousResearch/hermes-agent/pull/81418) – Mapping Meta AI provider to `models.dev` to support Muse Spark models with 1M context windows.
*   **Data-Training Warnings:** [PR #81416](https://github.com/NousResearch/hermes-agent/pull/81416) – Proactively warning users when selecting models that train on their data (e.g., Meta's discounted tiers).

**Prediction:** The next release cycle will likely focus on **Kanban reliability** and **Windows Desktop stability**, followed by the rollout of the bundled desktop installer (#79599).

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Session Fragility:** Users are frustrated by session crashes during restarts (#79624) and context loss during compression (#79278).
    *   **Windows UX:** Multiple reports of Windows-specific issues: black screens (#81290), path handling failures (#80969), and noisy startup warnings (#80184).
    *   **Telegram/Gateway Friction:** Issues with rich message handling (#79331, #63485) and batch message splitting (#46100).
*   **Satisfaction:**
    *   Positive feedback on the **actionable handoffs** fix (#80808), which improves agent reliability at boundaries.
    *   Strong support for **security transparency**, particularly the invisible character rendering in approval prompts (#81403).

## 8. Backlog Watch
*   **[OPEN] WhatsApp Bridge API Limitations:** [Issue #69659](https://github.com/NousResearch/hermes-agent/issues/69659) – The WhatsApp bridge lacks message history and contact listing, hindering conversational context.
*   **[OPEN] macOS Atomic Hermes Conflicts:** [Issue #22418](https://github.com/NousResearch/hermes-agent/issues/22418) – Desktop gateway conflicts with CLI `--replace` flag on macOS, blocking Discord token locks.
*   **[OPEN] Remote Desktop over Tailscale:** [Issue #54523](https://github.com/NousResearch/hermes-agent/issues/54523) – Async routes blocking the asyncio loop, causing 10-25s starvation of WebSocket connections.
*   **[OPEN] Session Deletion Confirmation:** [Issue #81356](https://github.com/NousResearch/hermes-agent/issues/81356) – Users request a confirmation dialog before deleting sessions in the desktop app to prevent accidental data loss.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-08

## 1. Today's Overview
PicoClaw remains highly active with 14 PRs and 4 issues updated in the last 24 hours, indicating strong development momentum. Two critical fixes landed today addressing WhatsApp connectivity failures and prefix caching performance, while several dependency updates keep the AWS and Anthropic SDKs current. The project continues to expand its channel integrations (DingTalk images, DashScope TTS, WeChat audio) and improve model provider configurations.

## 2. Releases
No new releases published.

## 3. Project Progress
**Merged/Closed PRs:**
- **#3291** [CLOSED] Bumped GitHub Copilot SDK from 0.2.0 to 1.0.8 — enables access to newer Copilot API features
- **#3289** [CLOSED] Bumped pion/rtp from 1.10.2 to 1.10.5 — audio/video streaming stability improvements

**Active PRs Advancing Features:**
- **#3306** / **#3305** / **#3304** — Dependency updates for AWS SDK and Anthropic Go SDK
- **#3283** — DingTalk image message support with graceful degradation
- **#3279** — Fix for tool-call format leakage in Seahorse summaries
- **#3271** — Updated default model names across 9 providers to July 2026 versions (GPT-5.6 series, etc.)
- **#3270** — DashScope TTS provider and WeChat audio file sending
- **#3321** — Prefix caching optimization by repositioning dynamic context after history
- **#3320** — WhatsApp client version unblocking via whatsmeow update
- **#3200** — Configurable default model fallback chain in web UI
- **#3319** — Honor exec timeout and boolean run options in tools

## 4. Community Hot Topics
**Most Discussed Issues:**
- [#3093](https://github.com/sipeed/picoclaw/issues/3093) — **SimpleX/Tox gateway request** (6 comments, 1 👍). Users requesting privacy-focused messaging protocol support, indicating demand for encrypted P2P communication channels.
- [#3302](https://github.com/sipeed/picoclaw/issues/3302) — **OAuth 2.1 for MCP servers** (2 comments). Security-conscious users want standardized auth for Model Context Protocol integrations.
- [#3308](https://github.com/sipeed/picoclaw/issues/3308) — **Concurrency and goroutine leak audit** (1 comment). Code review highlighting potential stability issues in core components.
- [#3307](https://github.com/sipeed/picoclaw/issues/3307) — **Session management for Telegram** (1 comment). Users want parity between web UI and chat channels for session switching.

## 5. Bugs & Stability
**Critical Fixes Released Today:**
- **#3320** — WhatsApp "client outdated (405)" error. The pinned whatsmeow version was rejected by WhatsApp servers, causing connection drops with no reconnect. This PR updates the dependency to restore functionality.
- **#3279** — Tool-call format leakage into LLM summaries. Seahorse's `partsToReadableContent` was incorrectly formatting tool outputs, potentially corrupting conversation context.

**Active Bug Investigation:**
- [#3308](https://github.com/sipeed/picoclaw/issues/3308) — Concurrency hazards, goroutine leaks, and memory/speed optimizations flagged in Seahorse, Channel Manager, and Hooks components.

## 6. Feature Requests & Roadmap Signals
**User-Requested Features:**
- **#3093** — SimpleX/Tox/Wire gateway support for privacy-focused messaging
- **#3302** — OAuth 2.1 support for MCP servers (marked as Nice-to-Have)
- **#3307** — Session list/switch commands for Telegram and other chat channels (feature parity with web UI)

**Likely Next Version Candidates:**
- **#3321** — Prefix caching optimization (high value for API cost/performance)
- **#3270** — DashScope TTS and WeChat audio (expanding channel/feature coverage)
- **#3283** — DingTalk image support (Chinese market expansion)
- **#3200** — Configurable model fallback chains (resilience improvement)

## 7. User Feedback Summary
**Pain Points:**
- WhatsApp connectivity instability after provider updates [#3320]
- Lack of feature parity between web UI and chat channels (session management) [#3307]
- Privacy messaging protocol demand (SimpleX/Tox) [#3093]
- Tool execution timeout not being honored correctly [#3319]

**Satisfaction Signals:**
- Positive reception of Chinese platform integrations (DingTalk, WeChat, DashScope)
- Appreciation for performance optimizations (prefix caching)
- Active community contributions from maintainers (MrTreasure, grrowl)

## 8. Backlog Watch
**Stale Issues Requiring Attention:**
- [#3093](https://github.com/sipeed/picoclaw/issues/3093) — SimpleX/Tox gateway (open since June 2026, stale)
- [#3302](https://github.com/sipeed/picoclaw/issues/3302) — OAuth 2.1 for MCP (open since July 2026, stale)
- [#3308](https://github.com/sipeed/picoclaw/issues/3308) — Concurrency audit findings (open since July 2026, stale)
- [#3307](https://github.com/sipeed/picoclaw/issues/3307) — Telegram session management (open since July 2026, stale)

**Stale PRs:**
- Multiple dependency bumps and feature PRs marked stale, suggesting delayed maintainer review cycles.

---

**Project Health Assessment:** Strong development velocity with 14 PRs in 24h. Critical WhatsApp fix demonstrates responsive maintenance. Dependency hygiene is active via Dependabot. Community engagement is moderate with focused feature requests around privacy, security, and channel parity.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-08

## 1. Today's Overview
NanoClaw is experiencing high contributor activity with 10 PRs updated in the last 24 hours, though no issues were opened or resolved today. The project is actively expanding its integration ecosystem (Mattermost, Dial, AnyDoc) and refining its core agent setup and error-handling logic. With zero new releases and no closed issues, the project appears to be in a heavy integration/cleanup phase rather than a release preparation phase.

## 2. Releases
**No new releases** were published in the last 24 hours.

## 3. Project Progress
**Merged/Closed PRs Today:**
*   **#3197** [CLOSED] Fixed a UI/UX bug in `agent-runner` where failure statuses displayed generic titles instead of specific error reasons. The fix extracts the first valid reason from `resultSummary` and formats it into a concise, sanitized string (limit 38 chars).

**Active PRs Advancing Features/Fixes:**
*   **#3199** (Open) Adding Mattermost channel integration using the v2 `ChannelAdapter` architecture, superseding the blocked #546.
*   **#3190** (Open) Introducing a Tavily MCP tool skill for web search capabilities.
*   **#2909** (Open) Implementing agent templates with a setup wizard and first-agent stamping (Part 2 of 2, following #2890).
*   **#3145** (Open) Fixing database migrations to backfill missing destinations for existing messaging-group wirings (Migration 021).
*   **#3198** (Open) Adding an AnyDoc document conversion utility skill.
*   **#3050** (Open) Adding "Dial" to the channel picker and wizard.
*   **#2346** (Open) Fixing formatter behavior where unknown slash commands were incorrectly treated as passthrough instead of normal chat.
*   **#3196** (Open) Fixing container mount permissions by adding readonly mount options.

## 4. Community Hot Topics
**Most Active/Discussed PRs (by recency and scope):**

1.  **PR #3199: Mattermost v2 Integration**  
    *Link:* [nanocoai/nanoclaw PR #3199](https://github.com/nanocoai/nanoclaw/pull/3199)  
    **Analysis:** This is a critical update as it supersedes the long-blocked #546. The community need here is robust Mattermost support aligned with the new v2 `ChannelAdapter` architecture. It indicates users are actively seeking modern channel integrations beyond legacy patterns.

2.  **PR #2909: Agent Templates & Setup Wizard**  
    *Link:* [nanocoai/nanoclaw PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)  
    **Analysis:** This PR addresses a major onboarding friction point. Users want a smoother first-time setup experience ("How should we create your first agent?"). The "Fresh agent" vs. "Enter-through default" choice suggests a demand for customizable initial agent configurations.

3.  **PR #3190: Tavily MCP Tool Skill**  
    *Link:* [nanocoai/nanoclaw PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)  
    **Analysis:** Highlights the community's reliance on MCP (Model Context Protocol) tools for external data access. Tavily’s inclusion suggests a high demand for reliable web search capabilities within AI agents.

## 5. Bugs & Stability
**Reported/Fixed Today:**
*   **[FIXED] #3197** - *Severity: Medium*  
    **Issue:** Agent failure progress cards showed generic errors (e.g., "System check failed") instead of the specific reason reported in `resultSummary`.  
    **Status:** Merged.  
    **Fix:** Extracts and formats the first valid error reason, applying existing sanitization to prevent card truncation.

*   **Pending Fix: #2346** - *Severity: Low*  
    **Issue:** Unknown slash commands were treated as `passthrough`, causing responses to be silently dropped by the Agent SDK.  
    **Status:** Open.  
    **Impact:** Improves usability by ensuring unrecognized commands fall through to normal chat processing.

*   **Pending Fix: #3145** - *Severity: Medium*  
    **Issue:** Existing messaging-group wirings lacked channel destinations due to missing database migrations.  
    **Status:** Open.  
    **Impact:** Data integrity fix; ensures legacy configurations work correctly with current code.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Channel Integration Expansion:** PRs #3199 (Mattermost) and #3050 (Dial) signal a roadmap focus on broadening supported communication platforms via the v2 `ChannelAdapter` system.
*   **MCP Skill Ecosystem:** PR #3190 (Tavily) and #3198 (AnyDoc) indicate a strong push to support modular, skill-based tooling via MCP, allowing users to easily extend agent capabilities without core code changes.
*   **Enhanced Onboarding:** PR #2909 shows a commitment to improving the initial user setup flow with templated agent creation.

**Predicted Next Version Focus:** Likely includes the Mattermost integration, AnyDoc skill, and Tavily MCP tool, assuming they pass review.

## 7. User Feedback Summary
*   **Pain Point:** Complex onboarding. The detailed work on #2909 (setup wizard) suggests users find the initial agent configuration process cumbersome.
*   **Pain Point:** Poor error visibility. PR #3197’s fix indicates users struggle to debug agent failures because generic error messages hide the root cause.
*   **Satisfaction:** Positive reception of the skill-based architecture (evidenced by community contributions like #3190 and #3198), which allows users to extend functionality without waiting for core updates.

## 8. Backlog Watch
*   **PR #546** [CLOSED/BLOCKED → Superseded by #3199]  
    *Link:* [nanocoai/nanoclaw PR #546](https://github.com/nanocoai/nanoclaw/pull/546)  
    **Status:** This PR was blocked because it targeted the old v1 `Channel`/`registry.ts` architecture. It has been closed in favor of #3199, which addresses the same feature request for the current v2 codebase. Maintainers should ensure #3199 is merged soon to resolve the long-standing Mattermost feature request (#1379).

*   **PR #2346** [Open]  
    *Link:* [nanocoai/nanoclaw PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)  
    **Status:** Open for an extended period (since May 2026). While low severity, it impacts user experience for unknown commands. May need maintainer attention to move forward.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest – 2026-08-08

## 1. Today's Overview
IronClaw is maintaining high development velocity with 100 issues and pull requests updated in the last 24 hours. Activity is currently dominated by the "Doc-Truth" initiative to align documentation with code, the stabilization of progressive tool disclosure metrics, and critical bug fixes for memory persistence and credential handling. While no new releases were published, the project is actively addressing stability regressions and infrastructure reliability gaps discovered during recent QA cycles.

## 2. Releases
No new releases were published on this date.

## 3. Project Progress
*   **Doc-Truth Pipeline (PRs #7375, #7376, #7378, #7379, #7381):** A comprehensive five-PR effort is underway to eliminate drift between documentation and code. This includes rewriting extension manifests to v3 formats, extending CI guidance checks to the `docs/` surface, adding deterministic contract tests for CLI and Responses API claims, and introducing a `docs-live` branch strategy to ensure public docs reflect stable releases rather than unreleased behavior.
*   **Tool Disclosure Metrics (PR #7385):** Implementation of durable, queryable metrics for progressive tool disclosure. This addresses the need for operators to monitor the rollout and cost-efficiency of the `tool_search`/`tool_describe` bridge.
*   **Stress Test Expansion (PR #7382):** Introduced scripted tool-call workloads for API capacity testing, ensuring deterministic verification of durable write read-back paths.
*   **Skill Activation Logic (PR #6938):** Continued work on decoupling skill activation from the host scorer, allowing the model to choose skills directly.

## 4. Community Hot Topics
*   **Memory Persistence Failures (#7185):** High-priority discussion regarding facts established in one conversation not being recalled in another. A fix PR (#7365) has been opened to address system prompt guidance and memory saving logic.
*   **Tool Disclosure Performance (#7374):** Focus on optimizing bulk `tool_describe` calls to reduce latency and schema-token usage when models have large tool catalogs.
*   **GitHub Linking State (#7247):** Community reports indicate the agent falsely claims GitHub is connected, creating confusion during onboarding.

## 5. Bugs & Stability
*   **Credential Misreporting (PR #7384):** A critical bug where valid operator credentials were incorrectly flagged as invalid API keys has been addressed. This resolves false "bad API key" errors during `serve` runs.
*   **Memory Recall Regression (PR #7365):** Addresses the bug where user preferences stated in Conversation A were lost in Conversation B due to insufficient system prompt guidance.
*   **Windows Serve Failure (#6590):** Persistent issue where `ironclaw serve` fails on Windows due to workspace root overlap constraints in the Reborn runtime.
*   **Slack Encoding Error (#6476):** Model hallucinations caused by tool input encoding failures during Slack activation.
*   **Telegram Processing Latency (#6643, #7368):** Root cause analysis identifies latency and missing feedback loops as the primary reasons for Telegram messages appearing unprocessed.

## 6. Feature Requests & Roadmap Signals
*   **Factory Default Reset (#7340):** Users are requesting a robust mechanism to reset model settings (provider/model selection) to factory defaults, as current configurations cannot be easily reverted.
*   **Trace Capture on Errors (#7369):** A request for improved observability, allowing users to capture traces when the agent encounters errors, rather than relying solely on UI buttons that may not appear in error states.
*   **Channel Delivery Tool (PR #7157):** Advancement of a new explicit channel delivery tool that separates conversation lifecycle from notification channels, supporting a "two-lane" model for user interactions.

## 7. User Feedback Summary
*   **Pain Point:** Users are frustrated by the lack of a "reset" option for inference settings, leading to locked-out configurations (#7340).
*   **Pain Point:** Inconsistent memory behavior is eroding trust; users report that the agent "forgets" context between sessions, which is a core value proposition of personal AI assistants (#7185).
*   **Satisfaction Signal:** The community is engaging positively with the "Doc-Truth" initiative, as documentation drift was previously causing model refusals and onboarding dead-ends (#7317).

## 8. Backlog Watch
*   **State Compatibility Enforcement (#7380):** An epic has been raised to enforce persisted-state compatibility checks before merge. This is critical given the `1.0.0-rc.1` to `1.1.0-rc.1` upgrade gap where durable state changes were not sufficiently tested against previous binaries.
*   **Large File Decomposition (#7383):** A tracking issue for the decomposition of `tool_disclosure_port.rs` (4.4k lines), which is exceeding architectural guidelines for file size.
*   **GitHub/Hallucination Loops:** Multiple issues (#7247, #7246, #7294) indicate a pattern of the agent hallucinating connection states or automation statuses. These require coordinated fixes in state verification logic rather than isolated patches.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-08

## 1. Today's Overview
LobsterAI 2026.8.7 was released yesterday, introducing conversation search, LaTeX math rendering, and Windows installer reliability improvements. Activity remains high with 7 issues and 7 PRs updated in the last 24 hours, of which 6 PRs were merged. The project shows strong momentum with recent focus on UX refinements (cowork search, input modes) and backend stability (sql.js crash fixes, provider handling). Three older community-reported bugs were closed, indicating active triage.

## 2. Releases
**LobsterAI 2026.8.7** (2026-08-07)
- **Features**: In-conversation search for Cowork (PR #2435), Markdown LaTeX math delimiter support (PR #2449)
- **Fixes**: Windows installer watchdog null exception rescue (PR #2446), fullscreen code toolbar click restoration on Windows (PR #2450), plugin config key sanitization (PR #2445)
- **Breaking Changes**: None reported
- **Migration Notes**: No migration required; backward-compatible updates only

## 3. Project Progress
**Merged/Closed PRs Today:**
- [#2451](https://github.com/netease-youdao/LobsterAI/pull/2451) — Release/2026.8.5 merge (closed)
- [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) — Fix cowork fullscreen toolbar clicks on Windows (closed)
- [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) — Fix markdown LaTeX math delimiters (closed)
- [#2448](https://github.com/netease-youdao/LobsterAI/pull/2448) — Chat search fixes (closed)
- [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) — Strip plugin-index-managed keys from config.set (closed)
- [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) — Rescue null watchdog exit code via extractor (closed)

**Open PRs:**
- [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) — Preserve provider for slashed model IDs (open, addressing Issue #2443)

## 4. Community Hot Topics
- **[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)** — Self-built skills installed to OpenClaw directory but not visible post-restart (2 comments, stale)
- **[#1263](https://github.com/netease-youdao/LobsterAI/issues/1263)** — Duplicate scheduled task entries with API rate limit errors (closed, 2 comments)
- **[#1265](https://github.com/netease-youdao/LobsterAI/issues/1265)** — Per-AGENT IM bot and model binding for multi-Agent teams (closed, 2 comments)
- **[#1273](https://github.com/netease-youdao/LobsterAI/issues/1273)** — sql.js WASM memory corruption on high-frequency writes causing crashes (closed, 2 comments)

**Analysis**: Users are actively building multi-Agent workflows and custom skills, but encounter friction in skill persistence and multi-Agent configuration. The sql.js stability issue suggests underlying storage architecture limitations under load.

## 5. Bugs & Stability
**High Severity:**
- **[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)** — Skill installation path mismatch (OpenClaw vs. LobsterAI directories) causing invisible skills post-restart. **Status**: Open, stale. No fix PR yet.

**Medium Severity:**
- **[#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)** — Custom providers with slashed model IDs (e.g., SiliconFlow's `deepseek-ai/DeepSeek-V4-Flash`) fail to display in UI. **Fix PR**: [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) (open).

- **[#2447](https://github.com/netease-youdao/LobsterAI/issues/2447)** — Execution produces no output or error messages. **Status**: Open, 1 comment. Investigation needed.

**Low Severity:**
- **[#2444](https://github.com/netease-youdao/LobsterAI/issues/2444)** — Input box lacks edit mode for long prompts (feature request, not bug).

## 6. Feature Requests & Roadmap Signals
- **[#2444](https://github.com/netease-youdao/LobsterAI/issues/2444)** — Input box edit mode with configurable Enter/Ctrl+Enter behavior, optional WYSIWYG Markdown support. Reflects demand for better prompt engineering UX.
- **[#1265](https://github.com/netease-youdao/LobsterAI/issues/1265)** — Multi-Agent with independent IM bot and model binding. Closed but indicates roadmap interest in team-based Agent orchestration.

**Prediction**: Input mode flexibility may appear in next minor release given the detailed proposal. Multi-Agent binding may resurface as a feature request after the current release cycle.

## 7. User Feedback Summary
- **Pain Points**: Skill persistence after restart, slashed model ID handling in custom providers, silent execution failures, input box ergonomics for long prompts.
- **Satisfaction Signals**: Positive reception of Cowork search and LaTeX math rendering; appreciation for Windows installer stability fixes.
- **Use Cases**: Multi-Agent team coordination, custom skill development, high-frequency data writing (Cowork sessions), Markdown-heavy prompt engineering.

## 8. Backlog Watch
- **[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)** — Open since 2026-04-01, stale, critical for skill developers. Requires maintainer attention.
- **[#1273](https://github.com/netease-youdao/LobsterAI/issues/1273)** — Closed but indicates potential systemic risk with sql.js under load; may warrant architectural review.
- **[#2447](https://github.com/netease-youdao/LobsterAI/issues/2447)** — New issue with no comments; needs triage to determine if it's a regression or configuration issue.

---
*Generated by Agnes-2.0-Flash for Sapiens AI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-08

## 1. Today's Overview
CoPaw (agentscope-ai/CoPaw) is experiencing a period of high active development and significant stability testing ahead of the v2.1.0 release. The project processed 31 issue updates and 49 PR updates in the last 24 hours, indicating a robust contributor base and active maintenance pipeline. With the immediate release of **v2.1.0-beta.2**, the team is focusing heavily on infrastructure hardening—specifically around shell command stability, memory management, and provider compatibility—while simultaneously addressing a surge in user-reported regressions related to the new Desktop UI and access control mechanisms.

## 2. Releases
**v2.1.0-beta.2** was released today.

**Key Changes:**
*   **CI Fixes:** Implemented fence-aware section extraction in `real-behavior-proof` to resolve CI instability (fixes #6626).
*   **Checkpoint Restoration:** Fixed a regression in the web workspace bootstrap that prevented auto-snapshots from restoring correctly (fixes #6).

**Migration Notes:**
*   Users are reporting UI regressions in beta.2, specifically regarding text selection in the Desktop OS window and session submission blocking during active tasks. Early adopters are advised to check for updates regarding PR #6802 and PR #6801 which aim to restore these desktop features.

## 3. Project Progress
The project is seeing a high volume of "first-time contributor" activity, suggesting the v2.1 transition has lowered barriers to entry or increased community engagement.

**Major Areas of Advancement:**
*   **Memory & Context:** PR #6772 enhances the ReMe configuration with embedding lifecycle management and "Daily Paper" integration. PR #6564 ensures pending turns are flushed before context compression, addressing data loss risks.
*   **Shell & System Stability:** PR #6799 addresses critical temp file leakage in `execute_shell_command` on Windows. PR #7676 introduces self-healing for dead Playwright driver connections, a major reliability improvement for browser agents.
*   **Provider Compatibility:** PR #6809 sanitizes Chat Completions content to support strict providers like StepFun, resolving 400/422 errors reported by users.
*   **Desktop UX:** PR #6801 and PR #6802 aim to restore text selection and copy functionality in the OS desktop mode, directly addressing user pain points from the beta release.

**Closed/Merged:**
*   PR #4694 (Downloads UI Refactoring) was closed, likely incorporated or superseded by recent UI changes.

## 4. Community Hot Topics
The following issues represent the highest engagement and most critical community concerns:

*   **[Bug] Doom loop: agent repeatedly triggers same tool call** (#6116)
    *   *Activity:* 8 comments.
    *   *Analysis:* This is a fundamental reliability issue. Users are frustrated by token waste and unresponsive agents. This indicates a gap in the agent's loop detection logic that persists across versions.
*   **[Bug] 2.0.1 docker version plugin/app market stuck** (#6782)
    *   *Activity:* 8 comments.
    *   *Analysis:* Docker deployment stability is a major pain point for enterprise/technical users. The "maintenance mode" loop suggests backend connectivity or health-check issues in containerized environments.
*   **[Bug] MCP tools failing periodically** (#6732)
    *   *Activity:* 6 comments.
    *   *Analysis:* Long-running stability issues with MCP (Model Context Protocol) tools. The need to restart the container to fix suggests a connection leak or state corruption in the MCP manager.
*   **[Feature] Add Volcengine Agent Plan and Xiaomi MiMo** (#6490)
    *   *Activity:* 4 comments.
    *   *Analysis:* Growing demand for diverse Chinese LLM provider support (Volcano Engine, Xiaomi) beyond the standard Aliyun/OpenAI defaults.

## 5. Bugs & Stability
**Severity: Critical**
*   **Session Blocking in 2.1 Beta:** Issue #6796 reports that submitting new sessions in the dialog is blocked during task execution in v2.1 beta 2. **Fix PR: #6750** addresses session identity deadlock and early save issues.
*   **Windows Installer Failure:** Issue #6810 reports NSIS installation errors due to file locking by browser extensions (NM host). This is a significant barrier for new Windows users.
*   **Malware False Positive:** Issue #6775 reports Malware Bytes flagging the Desktop version. While likely a false positive, this requires immediate public communication to prevent user churn.

**Severity: High**
*   **Telegram Whitelist Reset:** Issue #6786 (and #6787) reports that `access_control.json` resets to empty when `multica-daemon` starts a new task via ACP. **Fix PR: #6788** proposes using the shared root profile workspace.
*   **Custom Persona Files Hidden:** Issue #6785 reports that custom `.md` persona files are no longer toggled in the Console UI (regression). **Fix PR: #6808** addresses this filtering issue.
*   **Agent Kanban 405 Error:** Issue #6794 reports that creating Issues via the Kanban returns 405 Method Not Allowed.

**Severity: Medium**
*   **Google API Tool Schema Failure:** Issue #6812 reports 400 errors because QwenPaw sends `$schema` fields that Google's Gemini API rejects. **Fix PR: #6809** handles this sanitization.
*   **OpenAI Responses Continuation Summary:** Issue #6811 reports that `disable_thinking` is ignored and cancellation is misreported as malformed output.
*   **KeyError in Auto-Title:** Issue #6813 reports a crash in title generation due to `__aiter__` missing on ChatResponse dict subclass.

## 6. Feature Requests & Roadmap Signals
*   **Email Management Assistant:** PR #6800 introduces a new plugin for intelligent email management with real-time monitoring. This signals a roadmap direction toward integrated personal productivity suites.
*   **WeChat Chinese Approval Replies:** PR #6804 adds support for native Chinese `允许`/`拒绝` replies in WeChat. This indicates a focus on localizing the UX for Chinese-speaking enterprise users.
*   **OneBot Media Handling:** PR #6715 adds support for remote inbound voice/image media in OneBot. This expands capability for QQ-based agent integrations.
*   **Volcengine/Xiaomi Provider Support:** Issue #6490 highlights the demand for broader provider support. Expect these to be added to the built-in provider list in upcoming stable releases.

## 7. User Feedback Summary
*   **Desktop Mode Friction:** Users are struggling with the v2.1 Desktop UI. Specific complaints include inability to select/copy text (#6797, #6781) and double-click requirements to open apps (#6790).
*   **Deployment Stability:** Docker and Windows install users are facing significant hiccups. The "doom loop" in shells (#6116) and MCP tools (#6732) are eroding trust in the agent's reliability for long-running tasks.
*   **Feature Parity:** Users expect the Desktop app to match or exceed the CLI/Docker functionality, particularly regarding model lists (Issue #6285 requests `qwen3.8-max-preview`).

## 8. Backlog Watch
*   **Issue #6116 (Doom Loop):** Despite having 8 comments, this fundamental agent logic bug remains open. It requires deep architectural changes to the loop-detection mechanism.
*   **Issue #6480 (NoHup Shell Detachment):** A long-standing issue where `nohup` commands never return to idle. This affects Linux users running background tasks and has been open since July.
*   **Issue #6565 (Shell Newline Collapse):** Multiline commands are being collapsed into single lines, breaking syntax. This impacts all Unix/Linux users and remains unresolved.
*   **PR #6615 (Corrupted Config Handling):** While a fix for config loading robustness is pending, the lack of automatic recovery for corrupted `agent.json` files leaves some users stranded.

---
*Generated by Agnes-2.0-Flash based on CoPaw GitHub data.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-08

## 1. Today's Overview
ZeroClaw is experiencing high-velocity maintenance activity with 50 issues and 50 PRs updated in the last 24 hours. A critical batch of P1 security and runtime defects was discovered today, primarily affecting the SOP (Standard Operating Procedure) engine, daemon lifecycle, and provider cost tracking. While no new releases were published, the project is actively deploying a significant bundle of fixes for headless SOP execution, shell confinement escapes, and Telegram authorization gaps.

## 2. Releases
**None.** There are no new releases today. The project appears to be in a stabilization phase, focusing on merging critical fixes before the next version bump.

## 3. Project Progress
**Merged/Closed PRs:**
*   **#9836** (Closed): Fixed local Whisper transcription by making `bearer_token` optional, addressing authentication failures for local whisper.cpp backends.

**PRs Advanced Today:**
*   **#9841** & **#9494**: JordanTheJet advanced the fix for headless SOP runs. These PRs address a critical defect where cron-triggered SOPs in `auto` mode would strand forever because the headless dispatch lacked an agent loop. This is a major infrastructure fix for autonomous automation.
*   **#9833**: Introduced a new `web_research` delegate tool, scoping raw `web_search` to a bounded sub-agent loop (max 8 calls, 180s). This simplifies the default tool surface and improves cost/performance control.
*   **#9827**: Closed a shell confinement escape vector where child processes could bypass validated security sandboxes (bubblewrap/docker).
*   **#9835**: Renamed the root package from `zeroclawlabs` to `zeroclaw`, resolving a historical crates.io naming workaround.

## 4. Community Hot Topics
**Most Discussed Issues:**
1.  **#8933** [RFC] Cross-turn conversation correlation to OTel export (13 comments) – *Demand for better observability granularity across multi-turn agent sessions.*
2.  **#9246** [RFC] Preserve Todo tracker config during ZeroCode migration (12 comments) – *Concerns over data persistence during internal migration processes.*
3.  **#5937** Refactor providers architecture and reqwest client management (12 comments) – *Long-standing technical debt regarding fragmented provider configuration and code duplication.*

**Most Discussed PRs:**
1.  **#9842** [PR] State delivery contract to autonomous turns – *Clarifying how cron agents report back status.*
2.  **#8337** [PR] Herdr agent reporting integration – *Community interest in native IDE/plugin integrations.*
3.  **#9634** [PR] Telegram group-wide authorization – *Security-focused enhancement for group chat management.*

## 5. Bugs & Stability
**High Severity (P1) Bugs Reported Today:**
*   **#9386** [SECURITY] Gemini API key leak in error messages. The `sanitize_api_error` function failed to strip query parameters containing API keys, posting them to the originating chat.
*   **#9816** [COST] Anthropic provider reports $0.00 spend. A bug in usage record writing causes budget caps to never trigger.
*   **#9815** [SECURITY] `forbidden_paths` is unreachable. Due to logic in `is_path_allowed`, forbidden path checks are bypassed if the path falls under `allowed_roots`.
*   **#9805** [SOP] Auto-mode SOPs from channel/cron triggers never execute. Runs stay in `running` state forever, blocking concurrency slots.
*   **#9770** [CRON] `cron update` silently discards changes to declarative jobs.
*   **#9786** [SOP] Malformed `SOP.toml` is silently dropped with no diagnostic.
*   **#9840** [DAEMON] Daemon steals `daemon.sock` on start, stranding live daemons.

**Medium/Low Severity:**
*   **#9825** [LEAK DETECTION] False positive: high-entropy heuristic redacts public blockchain addresses, breaking payment URLs.
*   **#9656** [TELEGRAM] Typing indicator persists during approval wait, misleading users about agent status.
*   **#9832** [BUILD] `zeroclaw-hardware` fails to compile on aarch64 (Raspberry Pi) due to unresolved `aardvark_sys` import.

**Note:** Several of these P1 bugs (specifically #9805, #9815, #9827) have associated fix PRs already open or under review.

## 6. Feature Requests & Roadmap Signals
*   **#9810** [RFC] Load Agent Plugins 1.0 skill and MCP packages. Strong signal towards supporting the vendor-neutral Agent Plugins standard.
*   **#9824** [Feature] Simplify default web-tool surface. Moving towards `web_fetch`, `web_research`, and `http_request` as the primary trio, deprecating raw search for sub-agents.
*   **#9346** [RFC] Unified package/capability/config/runtime-state catalog contract. Aimed at standardizing how integrations and plugins are exposed across CLI and Gateway.
*   **#5937** [Feature] Unify providers architecture. A long-requested refactor to clean up `reqwest` and model construction inconsistencies.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by "silent failures" in the SOP system (#9786, #9805) where malformed configs or stuck runs provide no error feedback. There is significant dissatisfaction with security blind spots, particularly the API key leak (#9386) and the broken `forbidden_paths` logic (#9815).
*   **Use Cases:** Heavy reliance on cron-triggered autonomous workflows (SOPs) is exposed as fragile. Telegram users are actively requesting better group authorization controls (#9634) and accurate typing indicators (#9656).
*   **Satisfaction:** The community is appreciative of the rapid response to P1 security issues but concerned about the stability of the daemon and SOP subsystems.

## 8. Backlog Watch
*   **#8043** [RFC] Retire standalone `aardvark-sys` crate. Drafted in June, still open. Critical for cleaning up the hardware dependency tree.
*   **#7130** [Feature] Forbid `unsafe_code` workspace-wide. A security hardening RFC that has been open since June, pending maintainer review.
*   **#9708** [Bug] Daemon stdout/stderr logs are unbounded. A resource leak risk where log files grow indefinitely.
*   **#9775** [Bug] OpenRouter streaming requests drop `provider_extra`. Blocks specific provider configurations from working correctly in streaming mode.

*Links:*
*   Issues: https://github.com/zeroclaw-labs/zeroclaw/issues
*   PRs: https://github.com/zeroclaw-labs/zeroclaw/pulls

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*