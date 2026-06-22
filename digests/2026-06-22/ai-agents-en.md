# OpenClaw Ecosystem Digest 2026-06-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-22 10:22 UTC

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

# OpenClaw Project Digest: 2026-06-22

## 1. Today's Overview
OpenClaw is experiencing extremely high activity levels, with 500 issues and 500 pull requests updated in the last 24 hours. The project is currently in a volatile post-release phase following v2026.6.10-beta.2, characterized by a surge in critical bug reports regarding session stability, memory leaks, and delivery failures. While the community is highly engaged with significant feature proposals, the maintainers are heavily occupied with triaging regressions introduced in recent beta updates, particularly around session state management and provider routing.

## 2. Releases
*   **v2026.6.10-beta.2**: Released today.
    *   **Highlights**: Introduced automatic "fast mode" for short conversational turns to optimize latency, returning to normal mode for longer runs with bounded fallback. Improved model routing reliability for Zai.
    *   **Known Regressions**: Immediate feedback indicates this release introduced several critical bugs, including silent memory store relocation (#95495), reasoning leakage (#91804), and session snapshot staleness (#92415).

## 3. Project Progress
*   **Merged/Closed Activity**: 65 PRs were merged or closed in the last 24 hours.
*   **Key Advances**:
    *   **Security**: PR #95691 merged a critical DOMPurify patch to remediate GHSA-cmwh-pvxp-8882 vulnerabilities.
    *   **CLI & Tools**: PR #95644 added `--file` support to the `image generate` CLI command, enabling reference image workflows.
    *   **UI Improvements**: PR #95708 fixed WebChat preamble progress visibility during tool activity; PR #95485 corrected token count formatting for large contexts.
    *   **Documentation**: PR #95728 added installation documentation for Clawcks hosting.

## 4. Community Hot Topics
The following issues have generated the most discussion and concern among users:

*   **[Critical] Gateway Memory Leak (RSS 350MB → 15.5GB)** - [#91588](https://github.com/openclaw/openclaw/issues/91588)
    *   *Analysis*: A severe production stability issue causing OOM kills and restart loops. High engagement suggests widespread impact on self-hosted users.
*   **[Bug] Session Write-Lock Timeouts Blocking Delivery** - [#86538](https://github.com/openclaw/openclaw/issues/86538)
    *   *Analysis*: Indicates systemic concurrency issues in the session handling pipeline, affecting subagents and cron jobs.
*   **[Feature] PostgreSQL Support for Internal Storage** - [#90370](https://github.com/openclaw/openclaw/issues/90370)
    *   *Analysis*: Users are hitting scalability limits with SQLite and requesting enterprise-grade database backends for better performance and vector search integration.
*   **[Bug] Cross-Provider Failover Sanitizer Miss** - [#95623](https://github.com/openclaw/openclaw/issues/95623)
    *   *Analysis*: Highlights fragility in the new multi-provider routing logic introduced in recent betas.
*   **[Bug] Silent Memory Store Relocation** - [#95495](https://github.com/openclaw/openclaw/issues/95495)
    *   *Analysis*: A regression in v2026.6.9/6.10 where the system silently moves database files without migration, forcing full re-embedding.

## 5. Bugs & Stability
Several high-severity bugs were reported today, primarily stemming from the v2026.6.x beta series:

1.  **Gateway Memory Leak (#91588)**: RSS growth leading to OOM crashes. *Status: Open, P0.*
2.  **Internal Reasoning Leakage (#91804)**: User's internal thoughts exposed in responses since v2026.6.5. *Status: Open, Regression.*
3.  **Subagent Completion Delivery Failure (#92460)**: Cron announcers dropping delivery channels. *Status: Open, P1.*
4.  **Session Model Snapshot Not Refreshed (#92415)**: `/model` switch doesn't update internal session state, causing context errors. *Status: Open, P1.*
5.  **Telegram Polling Crash Loop (#93375)**: Transient network timeouts lead to infinite restart cycles. *Status: Closed (likely fixed or mitigated).*
6.  **Codex PreToolUse CPU Stall (#91009)**: Hook relays spawning CPU-bound processes and stalling gateway RPC. *Status: Open, P1.*
7.  **Compaction Timeout Wedge (#92043)**: 180s timeout causes legitimate long runs to fail repeatedly. *Status: Open, P1.*

## 6. Feature Requests & Roadmap Signals
*   **PostgreSQL Backend (#90370)**: Strong demand for replacing SQLite to leverage pgvector and reduce operational overhead for multi-agent setups.
*   **Topic-Session Families (#90916)**: Request for isolating context lanes under a single assistant persona, allowing multiple "threads" of conversation with shared memory but separate transcripts.
*   **Telegram Inline Query (#54794)**: Users want to invoke the bot from any chat via `@botname query`, expanding utility beyond DMs.
*   **Memory Indexing by Source Directory (#95724)**: Optimization request to deduplicate vector stores when multiple agents share a workspace.
*   **Named Session Commands (#95700)**: PR #95700 introduces `/new <name>` and `/close` commands, signaling a move toward more granular session lifecycle control.

## 7. User Feedback Summary
*   **Frustration with Beta Instability**: Users are reporting significant regressions in v2026.6.x, particularly regarding silent data relocation (#95495), reasoning leaks (#91804), and session lock timeouts (#86538).
*   **Operational Pain Points**: The memory leak (#91588) and CPU stalls (#91009) are causing downtime for serious deployments.
*   **Positive Reception**: The "fast mode" for short turns and improved model routing are appreciated, though overshadowed by the bugs listed above.
*   **Desire for Enterprise Features**: Requests for PostgreSQL support and better Kubernetes documentation indicate a growing user base running OpenClaw in production environments.

## 8. Backlog Watch
*   **Config Validation Rejection (#92884)**: `config validate` incorrectly rejecting plugin-owned channel schema extensions, blocking custom integrations.
*   **Self-Hosted Channel Plugin Trust (#92516)**: Containerized deployments cannot easily use externalized channel plugins due to trust gating, hindering customization.
*   **AWS Bedrock Profile Support (#87318)**: Haiku 4.5 inference profile ARNs not supported in cron jobs, limiting cloud provider flexibility.
*   **Windows Scheduled Task Stability (#91144)**: Native CLI gateway fails to stay running via Scheduled Tasks, requiring foreground windows for reliability.
*   **Maintenance Needed**: Several P1 issues (#86538, #91588, #92415) require immediate maintainer attention as they block core functionality for many users.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-06-22)

## 1. Ecosystem Overview
The open-source personal AI agent landscape in mid-2026 is characterized by a shift from experimental prototyping to production-hardened stability. Projects are increasingly focusing on secure multi-agent communication, robust session state management, and enterprise-grade deployment options (e.g., PostgreSQL backends, Kubernetes readiness). While feature parity in basic LLM interfacing is high, differentiation now lies in security sandboxes, plugin ecosystems, and user experience refinements for complex workflows. The market is consolidating around a few key architectural patterns: centralized gateways, modular skill/plugin systems, and hybrid cloud-edge execution.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | Beta (v2026.6.10-beta.2) | 7/10 (Volatile) |
| **Hermes Agent** | 50 | 50 | Stable (v0.17.0) | 6/10 (Regressions) |
| **CoPaw** | 22 | 50 | Patch Imminent (v1.1.12.post1) | 8/10 (Stabilizing) |
| **ZeroClaw** | 50 | 50 | Pre-Stable (v0.8.0 Queue) | 7/10 (Active Dev) |
| **NanoBot** | 9 | 33 | Pre-Stable (v0.2.2 Prep) | 8/10 (Focused) |
| **NanoClaw** | 2 (Critical Sec) | 9 | Stable (Patch Imminent) | 6/10 (Security Risk) |
| **LobsterAI** | 6 | 12 | Stable (Hotfix Pending) | 7/10 (Mixed) |
| **PicoClaw** | 6 | 34 | Nightly (v0.3.0-prep) | 7/10 (Refactoring) |
| **IronClaw** | 16 | 31 | Stable (Dogfooding) | 8/10 (Optimizing) |
| **ZeptoClaw** | 1 | 1 | Stable (Maintenance) | 9/10 (Stable) |
| **NullClaw** | 1 | 1 | Stable (v2026.5.29) | 5/10 (Low Eng) |
| **TinyClaw** | 0 | 0 | Inactive | N/A |
| **Moltis** | 0 | 0 | Inactive | N/A |

*\*Health Score based on activity volume, bug resolution rate, and release stability. 10=Excellent, 1=Poor.*

## 3. OpenClaw's Position
**Advantages vs. Peers:**
*   **Scale & Engagement:** OpenClaw dominates in raw activity volume (500+ issues/PRs), indicating a massive user base and active community contribution.
*   **Feature Breadth:** Supports diverse integrations (Zai, Clawcks, Telegram, WebChat) and advanced concepts like "fast mode" for latency optimization.
*   **Enterprise Readiness:** Strong demand for PostgreSQL support and Kubernetes documentation signals a move toward production deployments.

**Technical Approach Differences:**
*   **Routing & Concurrency:** OpenClaw focuses heavily on provider routing and session state management, whereas projects like ZeptoClaw prioritize binary size and IronClaw focuses on automation triggers.
*   **Beta Volatility:** Unlike ZeroClaw or NanoBot which are stabilizing for release, OpenClaw is in a volatile beta phase, trading stability for rapid feature iteration (e.g., automatic fast mode).

**Community Size Comparison:**
*   OpenClaw’s community is significantly larger than NanoBot, LobsterAI, or ZeroClaw, evidenced by the order-of-magnitude higher issue/PR counts. TinyClaw and Moltis appear dormant.

## 4. Shared Technical Focus Areas
*   **Session & State Stability:**
    *   *Projects:* OpenClaw, Hermes Agent, CoPaw, ZeroClaw.
    *   *Need:* Critical bugs around memory leaks (OpenClaw), session lock timeouts (Hermes), and context compression freezes (CoPaw/ZeroClaw) indicate that state management is the primary technical bottleneck across the ecosystem.
*   **Security Hardening & Sandboxing:**
    *   *Projects:* NanoClaw, ZeroClaw, LobsterAI.
    *   *Need:* Concerns over symlink injection (NanoClaw), SSRF guards (LobsterAI), and plugin permission scopes (ZeroClaw) show a collective industry shift toward secure-by-default configurations for autonomous agents.
*   **Multi-Provider & Fallback Logic:**
    *   *Projects:* OpenClaw, ZeroClaw, NanoBot.
    *   *Need:* Robust failover mechanisms (OpenClaw’s provider routing, ZeroClaw’s OpenRouter fallbacks, NanoBot’s Anthropic/DeepSeek fixes) are essential for reliability.
*   **Mobile & Cross-Platform UX:**
    *   *Projects:* CoPaw, LobsterAI, IronClaw.
    *   *Need:* Improvements in mobile responsiveness (CoPaw) and overview page UI/UX (LobsterAI) highlight the need for consistent experiences across devices.

## 5. Differentiation Analysis
*   **Feature Focus:**
    *   *Automation:* IronClaw leads with "Reborn" engine automation and skill extraction.
    *   *Edge/Lightweight:* ZeptoClaw differentiates via strict binary size limits (<7.5MB) for robotics/IoT.
    *   *Plugin Ecosystem:* ZeroClaw and NanoBot are investing heavily in secure, sandboxed plugin architectures (WASM/Native).
    *   *Enterprise/Scalability:* OpenClaw and PicoClaw are addressing scalability through database backends (PostgreSQL) and configuration workflows.
*   **Target Users:**
    *   *Developers/Power Users:* OpenClaw, ZeroClaw (due to complexity and customization).
    *   *End-Users/Consumers:* NanoBot (wizard onboarding), CoPaw (mobile UI improvements).
    *   *Specialized/Niche:* ZeptoClaw (robotics/embedded), IronClaw (automation enthusiasts).
*   **Technical Architecture:**
    *   *Monolithic vs. Modular:* OpenClaw and Hermes are monolithic with modular plugins. ZeroClaw is moving to a native Wasmtime component model for plugins. NanoClaw focuses on secure A2A communication.

## 6. Community Momentum & Maturity
*   **Rapid Iteration (High Velocity):** OpenClaw, CoPaw, ZeroClaw. These projects are actively merging changes and fixing bugs quickly but may suffer from instability (OpenClaw beta regressions, CoPaw queue issues).
*   **Stabilization Phase:** NanoBot, NanoClaw, LobsterAI, IronClaw. Focus is on fixing critical bugs (security, session bricks) and preparing for stable releases (v0.2.2, v0.8.0).
*   **Maintenance Mode:** ZeptoClaw, NullClaw. Low activity, focusing on CI/CD and dependency updates. ZeptoClaw is highly stable but lacks new features.
*   **Declining/Dormant:** TinyClaw, Moltis. No recent activity detected.

## 7. Trend Signals
*   **Industry Trends:**
    *   *Security-First Design:* The emergence of critical security advisories (NanoClaw, LobsterAI, ZeroClaw) indicates that security is no longer an afterthought but a core architectural requirement for autonomous agents.
    *   *Hybrid Plugin Systems:* ZeroClaw’s shift to Wasmtime and NanoClaw’s A2A security focus suggest a trend toward standardized, sandboxed plugin runtimes to ensure safety and performance.
    *   *Enterprise-Grade Infrastructure:* Demand for PostgreSQL, Kubernetes docs, and scalable session management (OpenClaw, CoPaw) shows agents are moving from hobbyist projects to production systems.
*   **Value for AI Agent Developers:**
    *   *Prioritize State Management:* Investing in robust session handling and memory management is critical to avoid the regressions seen in OpenClaw and Hermes.
    *   *Adopt Secure Defaults:* Implementing strict permission scopes and sandboxing (like ZeroClaw/NanoClaw) will build user trust and prevent exploitation.
    *   *Focus on UX for Complex Workflows:* Simplifying onboarding (NanoBot) and improving mobile/overview UIs (CoPaw, LobsterAI) are key differentiators for user retention.
    *   *Monitor Plugin Ecosystems:* The stability and security of the plugin system (Extism vs. Wasmtime vs. Native) will likely determine the long-term viability of agent platforms.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-06-22
**Source:** GitHub (HKUDS/nanobot)

## 1. Today's Overview
NanoBot demonstrated high development velocity on June 22, with 9 issues updated and 33 pull requests reviewed or merged in the last 24 hours. The project is currently preparing for the `v0.2.2` release, focusing heavily on stability fixes for streaming providers (Anthropic/DeepSeek) and security hardening for MCP integrations. Community engagement remains strong, particularly around improving user onboarding experiences and expanding platform support (DingTalk). The core infrastructure is undergoing significant refactoring to support larger context windows and more robust background daemon management.

## 2. Releases
*   **No new stable releases published today.**
*   **Preparation:** PR #4445 is currently open to bump the package version to `v0.2.2`. This release will include:
    *   Fixes for Anthropic `tool_use` ID duplication crashes.
    *   Security patches for MCP `enabledTools` bypass vulnerabilities.
    *   Default context window increase from 65k to 200k tokens.
    *   Improved DingTalk channel features.
    *   WebUI performance optimizations.

## 3. Project Progress
**Merged/Closed Items:**
*   **[WebUI] Performance Fix (PR #4398):** Resolved slow settings route refreshes by caching CLI apps data and deferring remote catalog updates.
*   **[Onboarding] Wizard Improvement (PR #4395):** Advanced the user-friendly wizard setup flow, allowing beginners to configure providers and models via a guided CLI interface without deep technical knowledge.
*   **[DingTalk] Group Chat Controls (PR #4206):** Implemented `group_allow_from` configuration to restrict bot interactions to specific groups, enhancing security for enterprise deployments.

**Active Development Highlights:**
*   **[Gateway] Background Service Refinement (PR #4447):** Addressed lifecycle edge cases in the gateway daemon, ensuring proper handling of stop timeouts and launchd semantics.
*   **[Core] Context Window Expansion (PR #4448):** Changed the default context window for agents to 200,000 tokens, reflecting modern model capabilities and reducing truncation issues.

## 4. Community Hot Topics
**Most Active/Discussed Issues:**
*   **Unified Daemon Gateway (Issue #1461):** *Status: Closed.* A long-standing feature request to provide a unified semantic layer for multi-platform daemon management has been resolved. This indicates a major architectural shift towards treating the gateway as a first-class service.
*   **User-Friendly Onboarding (Issue #4376):** *Status: Closed.* High community interest (1 reaction) in simplifying the initial setup process. The recent merge of PR #4395 directly addresses this pain point.
*   **Mattermost Integration (Issue #1011):** *Status: Open/Stale.* Despite having 4 reactions, this request remains unanswered. Users are actively seeking alternatives to Discord/Telegram/Slack due to privacy and platform lock-in concerns.

**Underlying Needs:**
The community is prioritizing **ease of use** (onboarding) and **privacy/control** (Mattermost, secure DingTalk groups) alongside technical robustness.

## 5. Bugs & Stability
**Critical & High Severity:**
*   **Anthropic Session Brickage (Issues #4442, #4443, #4444):** Streaming responses from Anthropic-family providers occasionally produced duplicate `tool_use` IDs, causing HTTP 400 errors and permanently breaking sessions.
    *   *Fix Status:* PR #4444 and PR #4443 propose deduplication logic to prevent this regression.
*   **MCP Security Bypass (Issues #4434, #4435):** The `enabledTools` allowlist for MCP servers failed to restrict resource and prompt registration, exposing internal capabilities to the model.
    *   *Fix Status:* PR #4436 gates resource/prompt registration behind the allowlist.

**Medium Severity:**
*   **DeepSeek Provider Hardening (PR #3869):** Addresses `null` content and `(empty)` string leaks that caused 400 errors or erratic behavior with DeepSeek models.
*   **Pairing Store Type Coercion (PR #4433):** Fixed silent denials in user pairing caused by inconsistent sender ID types (str vs. other).

## 6. Feature Requests & Roadmap Signals
*   **Read-Only History Search (Issue #4440 / PR #4439):** Users requested a way to recall information from `memory/history.jsonl` without loading it into the active context. This tool allows agents to query past summaries efficiently.
*   **Subagent Model Presets (PR #4291):** Enables spawning subagents with different model configurations (provider, temperature, etc.) than the parent agent, supporting cost/performance optimization strategies.
*   **Telegram Rich Messages (Issue #4413 / PR #4422):** Support for Telegram Bot API 10.1 `sendRichMessage` (tables, task lists) is being implemented to enhance UI fidelity.
*   **Prediction:** These features, along with the `v0.2.2` bug fixes, are likely to be included in the imminent `v0.2.2` release.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Complexity:** New users struggle with the technical details required for initial configuration (addressed by the new Wizard).
    *   **Stability:** Streaming providers (especially Anthropic) can corrupt session state due to duplicate IDs.
    *   **Privacy:** Users are increasingly wary of sharing data with US/Russian platforms (Discord/Telegram/WhatsApp), driving demand for self-hosted options like Mattermost or Signal.
*   **Satisfaction:** Positive reception for the DingTalk group controls and the move to larger default context windows, which reduces manual configuration for power users.

## 8. Backlog Watch
*   **Mattermost Integration (Issue #1011):** *Age: ~4 months.* High demand for a secure, non-US/non-Russian alternative channel. No active PRs observed.
*   **DeepSeek Message Hardening (PR #3869):** *Open since May 16.* While critical for DeepSeek users, it lacks recent maintainer interaction compared to other PRs.
*   **Weather Skill (PR #4145):** *Open since June 1.* A community-contributed skill package that improves out-of-the-box utility but has stalled in review.

---
*Generated by Agnes-2.0-Flash based on HKUDS/nanobot GitHub data.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-22
**Source:** NousResearch/hermes-agent

### 1. Today's Overview
The Hermes Agent project exhibited high activity levels today, with 50 issues and 50 pull requests updated within the last 24 hours. Despite zero new releases, the team is actively addressing critical stability regressions introduced in recent versions, particularly concerning the cron scheduler, gateway session management, and platform adapters. The community is heavily engaged in reporting bugs related to desktop builds, CLI shutdown behaviors, and specific platform integrations like Discord and QQBot. Maintainers are prioritizing bug fixes over new feature development, signaling a focus on stabilizing the current codebase before the next major release.

### 2. Releases
**No new releases published today.**
*   Recent context indicates v0.17.0 (v2026.6.19) was released recently, introducing several breaking changes and regressions that are currently being patched (see *Bugs & Stability*).

### 3. Project Progress
Several critical fixes were merged or closed today, focusing on infrastructure stability and UX improvements:
*   **Cron Scheduler Fixes:** Multiple PRs addressed the "perpetual defer" bug where recurring jobs would stop running after missing a grace period.
    *   [PR #50112](https://github.com/NousResearch/hermes-agent/pull/50112) fixed profile-scoped cron storage issues.
    *   [PR #50062](https://github.com/NousResearch/hermes-agent/pull/50062) ensured missed jobs execute once rather than skipping indefinitely.
    *   [PR #33361](https://github.com/NousResearch/hermes-agent/pull/33361) resolved the fast-forward logic error.
*   **Toolset Integrity:** [PR #50109](https://github.com/NousResearch/hermes-agent/pull/50109) fixed a bug where disabling a platform bundle inadvertently disabled all core tools.
*   **Context Compression:** [PR #49579](https://github.com/NousResearch/hermes-agent/pull/49579) and [PR #50726](https://github.com/NousResearch/hermes-agent/pull/50726) corrected logic that failed to recognize compression success when message counts remained static but token usage decreased.
*   **Desktop UX:** [PR #50731](https://github.com/NousResearch/hermes-agent/pull/50731) introduced PR-style file diffs in the desktop chat interface.
*   **Security Updates:** [PR #42334](https://github.com/NousResearch/hermes-agent/pull/42334) bumped `aiohttp` and `anthropic` dependencies to address CVEs.

### 4. Community Hot Topics
High-engagement discussions indicate significant friction with recent updates and complex multi-user workflows:
*   **Desktop Build Instability:** Issue [#47917](https://github.com/NousResearch/hermes-agent/issues/47917) (21 comments) highlights a recurring failure in desktop builds due to Electron cache invalidation, frustrating users who rely on the GUI.
*   **Multi-Profile Support:** Issue [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) (6 comments) discusses the lack of seamless multi-profile switching in the Web Dashboard, a key requirement for power users managing multiple agents.
*   **Graceful Session Resume:** Issue [#43008](https://github.com/NousResearch/hermes-agent/issues/43008) (4 comments) flags a critical UX gap where session resets occur silently, confusing both agents and users.
*   **Platform Adapter Reliability:** Issues regarding Discord ([#50627](https://github.com/NousResearch/hermes-agent/issues/50627)), QQBot ([#50733](https://github.com/NousResearch/hermes-agent/issues/50733)), and Slack ([#50732](https://github.com/NousResearch/hermes-agent/issues/50732)) show that platform-specific adapters are prone to silent failures or broken interactions post-update.

### 5. Bugs & Stability
A wave of bugs reported today suggests regression risks associated with v0.17.x and general system instability:
*   **Severity: High**
    *   **Gateway Restart Failure:** Issue [#43475](https://github.com/NousResearch/hermes-agent/issues/43475) describes how `/restart` bricks macOS launchd-managed gateways because `KeepAlive` treats exit 0 as success.
    *   **Discord Button Breakage:** Issue [#50627](https://github.com/NousResearch/hermes-agent/issues/50627) reports that message component interactions broke after the v0.17 upgrade, requiring immediate attention.
    *   **Test Pollution:** Issue [#50681](https://github.com/NousResearch/hermes-agent/issues/50681) reveals that `pytest` runs leak fake sessions into the production `state.db`, corrupting user data.
*   **Severity: Medium**
    *   **CLI Shutdown Crashes:** Issues [#33485](https://github.com/NousResearch/hermes-agent/issues/33485) and [#30387](https://github.com/NousResearch/hermes-agent/issues/30387) report intermittent `SIGABRT` exits during CLI shutdown when memory plugins are active.
    *   **Config Serialization:** Issue [#50698](https://github.com/NousResearch/hermes-agent/issues/50698) notes that `hermes config set` strips all comments from `config.yaml`, destroying user documentation.
    *   **Credential Resolution:** Issue [#50671](https://github.com/NousResearch/hermes-agent/issues/50671) highlights that `hermes auth add` creates dead credentials because the runtime resolver ignores the new pool structure.

### 6. Feature Requests & Roadmap Signals
Users are requesting enhancements to improve usability, context management, and cross-platform capabilities:
*   **Voice Orchestration:** Issue [#50728](https://github.com/NousResearch/hermes-agent/issues/50728) proposes post-turn voice synthesis via shell hooks to balance responsiveness with audio quality.
*   **Tiered Memory:** Issue [#32198](https://github.com/NousResearch/hermes-agent/issues/32198) requests configurable memory tiers to optimize context usage across models of varying sizes.
*   **Cross-Profile Delegation:** Issue [#41889](https://github.com/NousResearch/hermes-agent/issues/41889) asks for first-class support in `delegate_task` to spawn subagents under different profiles.
*   **Per-Platform Models:** Issue [#14327](https://github.com/NousResearch/hermes-agent/issues/14327) seeks the ability to assign different LLM providers/models to different messaging platforms (e.g., Feishu vs. Discord).
*   **Timezone Awareness:** Issue [#21605](https://github.com/NousResearch/hermes-agent/issues/21605) suggests adding timezone detection during setup to prevent cron job scheduling errors.

### 7. User Feedback Summary
*   **Frustration with Regressions:** Users are expressing dissatisfaction with bugs introduced in recent updates, specifically regarding Discord interactions and desktop build reliability. The silence around session resets is also a major pain point.
*   **Configuration Pain Points:** The loss of comments in `config.yaml` and the inability to easily manage credentials are cited as significant workflow interruptions.
*   **Desire for Transparency:** Users want clearer signals when contexts are reset or when sessions expire, rather than experiencing silent drops in conversation continuity.
*   **Positive Reception of UX Tweaks:** The introduction of PR-style diffs in the desktop app ([PR #50731](https://github.com/NousResearch/hermes-agent/pull/50731)) is viewed as a positive step toward improving code interaction clarity.

### 8. Backlog Watch
*   **Launchd Gateway Revival:** Issue [#43475](https://github.com/NousResearch/hermes-agent/issues/43475) remains open; fixing the `/restart` behavior for macOS users is critical for server stability.
*   **Web Dashboard Multi-Profile:** Issue [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) has been open since April but lacks a concrete implementation plan.
*   **Honcho Memory Thread Leaks:** Issue [#33485](https://github.com/NousResearch/hermes-agent/issues/33485) involves complex shutdown logic that may require deeper architectural changes to resolve safely.
*   **Telegram NWE Callbacks:** PR [#50739](https://github.com/NousResearch/hermes-agent/pull/50739) is open to route specific Telegram callbacks, indicating ongoing work to stabilize the Telegram adapter's edge cases.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-06-22
**Source:** github.com/sipeed/picoclaw

## 1. Today's Overview
PicoClaw demonstrated high development velocity on June 22, 2026, with 34 Pull Requests updated and 6 Issues addressed in the last 24 hours. The project released a new nightly build (`v0.3.0-nightly.20260622.287853ab`), indicating active preparation for the upcoming v0.3.0 stable release. The majority of recent PRs have been merged or closed, focusing heavily on stabilizing the core runtime, improving configuration workflows, and fixing critical parsing bugs. Activity suggests a transition phase where foundational infrastructure updates are being finalized ahead of a major version bump.

## 2. Releases
*   **Nightly Build:** `v0.3.0-nightly.20260622.287853ab`
    *   **Status:** Automated nightly build.
    *   **Warning:** May be unstable. Use with caution.
    *   **Changelog:** [Compare v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

## 3. Project Progress
Significant progress was made in merging technical debt and enhancing user experience features. Key completed items include:

*   **Configuration & UX Overhaul:** A series of PRs (#2752, #2831, #2832, #2833) completed the "improve model configuration workflows," adding upstream model fetching, saved catalogs, and real connectivity tests. Documentation was synced to the new V3 config format (#2766).
*   **Runtime Stability:** Critical fixes for the message bus backpressure (#2906) and JSONL session index hot-path cloning (#2913) were merged, alongside crash-consistency fixes for metadata (#2907) and fallback chain handling for expired contexts (#2905).
*   **Platform Support:** Windows-specific issues were addressed, including hiding child-process console flashes (#2654) and fixing build flows (#2487).
*   **New Features:** Added `serial` hardware tool support (#2673), thought visibility toggles (#2661), and factory reset capabilities (#2891).
*   **Provider Support:** Added CommonModels for MiMo provider (#2915) and implemented direct reply parameters with SkipInboundTurn support (#3155).

## 4. Community Hot Topics
*   **Evolution Token Consumption Bug (#3012):** High engagement with 5 comments. Users report continuous token consumption when Evolution mode is enabled, particularly with MiniMax. This indicates a critical cost-control issue for users relying on aggressive auto-evolution features.
    *   [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)
*   **SimpleX/Tox Gateway Request (#3093):** Feature request for privacy-focused gateways (SimpleX, Tox, Wire). While low comment count (2), the single upvote highlights a niche but strong demand for decentralized communication protocols.
    *   [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)
*   **Tool Call Leakage Fix (#3154):** A new PR addressing the Volcengine Doubao Seed tool call leakage issue (#3153). This resolves a specific compatibility bug with the OpenAI-compatible interface for this provider.
    *   [PR #3154](https://github.com/sipeed/picoclaw/pull/3154)
    *   [Related Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)

## 5. Bugs & Stability
Several bugs were closed or reported today, reflecting ongoing stability improvements:

1.  **Matrix `allow_from` Parsing Failure (#3044):** Closed. The `allow_from` config failed for standard Matrix user IDs containing colons. Fixed to correctly parse and allow messages.
2.  **`mcp add` Flag Mis-parsing (#3041):** Closed. Global flags were incorrectly parsed as positional arguments, breaking HTTP/SSE server additions.
3.  **iOS Safari Panel Crash (#3090):** Open/Stale. Panel does not work on iOS versions below 16.4.
4.  **Volcengine Doubao Tool Call Leak (#3153):** Open. Tool calls returned as raw XML text instead of being executed. A fix PR (#3154) has been submitted.
5.  **Windows Console Flash (#2654):** Closed. Fixed black console window and PowerShell flickering on launch.

## 6. Feature Requests & Roadmap Signals
*   **Decentralized Gateways:** The request for SimpleX/Tox (#3093) suggests users are interested in privacy-preserving, non-centralized AI agent communication channels.
*   **Hardware Integration:** The addition of the `serial` tool (#2673) signals a roadmap towards edge computing and IoT integration, allowing PicoClaw to interact directly with hardware.
*   **Advanced Agent Control:** The `direct_reply` and `SkipInboundTurn` feature (#3155) indicates a push for more granular control over agent callbacks and message routing, reducing duplicate messages in async workflows.

## 7. User Feedback Summary
*   **Cost Concerns:** Users are highly sensitive to unexpected token usage, as evidenced by the detailed bug report on Evolution mode consuming tokens continuously (#3012). Clear feedback mechanisms or limits are likely needed.
*   **Configuration Complexity:** The extensive work on V3 config migration (#2766) and factory resets (#2891) suggests that previous configuration formats were prone to drift or incompatibility, causing user frustration. The new "Reset to Factory Defaults" and improved validation workflows aim to mitigate this.
*   **Platform Consistency:** Users on Windows and older iOS versions require consistent UX. Fixes for Windows build/launch issues and iOS Safari compatibility show responsiveness to cross-platform disparities.

## 8. Backlog Watch
*   **Stale Issues:** Several issues marked `[stale]` remain open or recently closed, including #3093 (SimpleX/Tox) and #3090 (iOS Safari). Maintainers should review these to determine if they are actively being considered for the roadmap or if they should be closed due to lack of engagement.
*   **Long-running Refactors:** PRs #2752, #2831, #2832 were split from a larger initiative and took time to merge. Ensuring future large refactors are broken down into smaller, reviewable chunks earlier could speed up delivery.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-22
**Source:** github.com/qwibitai/nanoclaw

## 1. Today's Overview
NanoClaw experienced high development velocity today with 9 PR updates and 2 critical security issues reported within the last 24 hours. The project is currently in a stabilization phase, focusing heavily on fixing race conditions during setup and addressing security vulnerabilities in agent-to-agent (A2A) communication protocols. No new releases were published, but significant internal fixes regarding socket initialization and symlink handling suggest an imminent patch release to address these stability and security concerns.

## 2. Releases
*   **No new releases published today.**
*   *Note:* Several critical fixes (socket waiting, symlink security, duplicate suppression) are currently in PR stages and may be consolidated into the next minor or patch update.

## 3. Project Progress
**Merged/Closed PRs:**
*   **[PR #2831]** **Telegram Integration:** Added verified support for Telegram as a feature skill. This expands the agent's connectivity beyond standard CLI/web interfaces.
    *   [Link](https://github.com/nanocoai/nanoclaw/pull/2831)
*   **[PR #2825]** **Setup Race Condition Fix:** Resolved an issue where the "first chat" failed because the CLI socket wasn't ready. The fix ensures the setup process waits for the host service to fully bind before proceeding.
    *   [Link](https://github.com/nanocoai/nanoclaw/pull/2825)
*   **[PR #2829]** **Cleanup:** Closed a low-quality/malformed PR.
    *   [Link](https://github.com/nanocoai/nanoclaw/pull/2829)
*   **[PR #2168]** **Docker Networking Fix:** Pinned `host.docker.internal` to OneCLI's bridge IP in rootless Docker environments, improving reliability for users not using the default gateway.
    *   [Link](https://github.com/nanocoai/nanoclaw/pull/2168)

**Active Development:**
*   **[PR #2832]** **Approval UX Improvement:** Introduces a "Reject with reason" button to the approval flow, allowing agents to receive feedback for declined requests rather than silent failures.
    *   [Link](https://github.com/nanocoai/nanoclaw/pull/2832)

## 4. Community Hot Topics
The most discussed items today revolve around **security hardening** and **user experience in multi-agent workflows**.

*   **Security Vulnerabilities (High Interest):** Two critical security advisories were opened by researcher `YLChen-007`:
    1.  **Symlink Injection in A2A:** Attackers can exploit symlinked inboxes to write files outside session roots.
        *   [Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828)
    2.  **Approval Smuggling:** The `add_mcp_server` flow hides runtime arguments/env vars, allowing malicious agents to sneak dangerous configurations past human approvers.
        *   [Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827)
    *   *Analysis:* These issues indicate a maturing threat model for autonomous agents. The community is shifting focus from simple functionality to secure sandboxing and transparent approval mechanisms.

*   **Poll Loop Noise:** PR #2531 addresses duplicate text messages firing mid-turn, a common pain point in real-time chat integrations.
    *   [PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531)

## 5. Bugs & Stability
**Reported Bugs/Issues:**
1.  **Critical Security:** Symlink-based path traversal in A2A attachments (Issue #2828).
2.  **Critical Security:** Opaque approval parameters enabling smuggling (Issue #2827).
3.  **High Stability:** Setup failure due to premature socket ping (Fixed in PR #2825).
4.  **Medium Stability:** Accumulation of dead service registrations after uninstallation (PR #2830).
    *   [PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830)
5.  **Medium Stability:** Silent misses of skill updates during host updates (PR #2826).
    *   [PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826)

**Status:** The core instability regarding installation/setup has been addressed via PR #2825. However, the security bugs require immediate code patches to prevent exploitation in production environments.

## 6. Feature Requests & Roadmap Signals
*   **Better Feedback Loops:** The "Reject with reason" feature (PR #2832) suggests a roadmap toward more interactive, bidirectional agent-human collaboration rather than binary approve/reject actions.
*   **Expanded Integrations:** The merging of Telegram support (PR #2831) signals continued expansion of supported channels.
*   **Read-Only Dashboards:** PR #2795 introduces a `/add-clidash` utility skill for reading CLI data, indicating demand for passive monitoring tools within the agent ecosystem.
    *   [PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795)

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by "silent failures" during setup (socket timing) and confusing errors when approvals are rejected without context.
*   **Use Cases:** Heavy reliance on Docker containers (rootless mode) and multi-agent communication (A2A) is evident from the security reports and networking fixes.
*   **Satisfaction:** The proactive addition of rejection reasons and clearer skill update nudges (PR #2826) aims to improve user confidence in the autonomy of the agents.

## 8. Backlog Watch
*   **Security Patching Required:** Maintainers must urgently address Issues #2828 and #2827. These are not just bugs but potential remote code execution or privilege escalation vectors.
*   **Orphaned Services:** PR #2830 highlights a cleanup backlog where uninstalled agents leave behind zombie services. This needs a robust garbage collection mechanism in the installer/uninstaller.
*   **Skill Update Visibility:** PR #2826 points out that users often miss critical skill updates because they are decoupled from the main host update. Ensuring these are flagged as mandatory or highly visible is key to long-term stability.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-06-22
**Source:** github.com/nullclaw/nullclaw

## 1. Today's Overview
The NullClaw project shows low but steady maintenance activity as of June 22, 2026. There were no new releases or merged pull requests in the last 24 hours. Developer engagement is currently focused on dependency management via Dependabot and investigating a persistent response handling bug affecting Windows users. The project remains stable from a release perspective, though user-facing reliability issues regarding specific AI model integrations require attention.

## 2. Releases
No new versions were released today. The latest available version remains **v2026.5.29**.

## 3. Project Progress
*   **Merged/Closed PRs:** None today.
*   **Active Development:** One open Pull Request (#956) is currently being processed. It updates the Alpine Linux base image in Docker configurations from version 3.23 to 3.24. This indicates ongoing efforts to keep containerized environments secure and up-to-date, although it has not yet been merged or closed.

## 4. Community Hot Topics
*   **Issue #967: [bug] error: NoResponseContent**
    *   **Link:** [nullclaw/nullclaw Issue #967](https://github.com/nullclaw/nullclaw/issues/967)
    *   **Activity:** High relevance due to frequency of occurrence (>50% in recent user logs).
    *   **Analysis:** Users are experiencing significant latency (27 seconds) and failure rates when interacting with the "Agnes-2.0-Flash" model on Windows 11. The underlying need here is stability in local agent execution when connecting to specific LLM APIs. The mention of "picocla" suggests users are comparing performance across different CLI tools, indicating NullClaw needs to ensure parity or superiority in error handling and response parsing.

## 5. Bugs & Stability
*   **Severity: High**
    *   **Bug:** `error: NoResponseContent`
    *   **Details:** Reported by user `svier0`, this bug occurs frequently (>50% success rate drop) when using model `Agnes-2.0-Flash`. The error suggests a parsing failure where the agent receives a response but fails to extract valid content, possibly due to timeout handling or API format mismatches.
    *   **Status:** Open. No fix PR exists yet.
    *   **Impact:** Degrades user experience significantly for Windows users relying on this specific model configuration.

## 6. Feature Requests & Roadmap Signals
*   **Implicit Signal:** The detailed reporting of model-specific failures (Agnes-2.0-Flash) and latency issues suggests a roadmap opportunity to improve **model-agnostic error handling** or add **configurable timeout/retry mechanisms** for API responses.
*   **Dependency Updates:** The Dependabot PR (#956) signals a commitment to keeping the Docker ecosystem modern, which may appeal to users deploying NullClaw in cloud or containerized environments.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Reliability:** Users report inconsistent behavior with specific models, leading to high error rates.
    *   **Latency:** Response times are noted as slow (27s), contributing to perceived instability.
    *   **Platform Specificity:** Issues are currently highlighted on Windows 11, suggesting potential cross-platform compatibility gaps.
*   **Satisfaction:** Low satisfaction regarding the current stability of the agent loop when interacting with external models.

## 8. Backlog Watch
*   **PR #956:** `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group`
    *   **Author:** dependabot[bot]
    *   **Status:** Open since June 15.
    *   **Action Needed:** Maintainers should review and merge this security/maintenance update to prevent future vulnerabilities in Docker builds.
*   **Issue #967:** Needs immediate triage as it affects core functionality for a segment of users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-06-22

### 1. Today's Overview
IronClaw is experiencing high-velocity development focused on the "Reborn" engine, characterized by significant activity in performance optimization, automation capabilities, and approval workflow refinements. With 16 issues and 31 pull requests updated in the last 24 hours, the project demonstrates strong contributor engagement, particularly from core team members and new contributors. The absence of new releases suggests the team is prioritizing backend stability and feature integration over public distribution, likely preparing for a subsequent release cycle.

### 2. Releases
**No new releases.**
*   Latest updates are contained within open PRs and ongoing dogfooding efforts. No version tags were pushed to GitHub in the last 24 hours.

### 3. Project Progress
**Merged/Closed PRs:**
*   **#4989 (Closed):** Persisted Engine V2 LLM usage data, resolving the issue where admin endpoints returned empty usage stats. This ensures accurate tracking for billing and monitoring.
*   **#5065 (Closed):** Implemented one-shot scheduled triggers (`TriggerSchedule::Once`), allowing users to fire automations at specific times rather than just on cron schedules.
*   **#5118 (Closed):** Fixed CI flakiness by sharing a single Rust cache across the closure, reducing storage competition and download failures.
*   **#5115 (Closed):** Added retry logic for crates.io network failures in CI, mitigating transient SSL/HTTP2 errors during parallel builds.
*   **#2927 (Closed):** Fixed a critical first-run bug where WASM channels remained inactive after installation due to missing persistence of `load_startup_active_channels`.
*   **#4990 (Closed):** Corrected the NEAR AI MCP ready state projection, preventing false "Setup Needed" prompts for already-configured extensions.

**Key Advancements:**
*   **Automation Control:** Significant progress on Reborn automation management with PRs addressing pause/resume functionality (#5131) and deletion support (#5122).
*   **Performance Engineering:** A dedicated initiative (#5125) launched to improve Reborn responsiveness, involving latency logging (#5126), inference tuning (#5127), and reduction of unnecessary runtime steps (#5128).
*   **Concurrency:** PR #5085 introduces concurrent turn execution via `TurnRunScheduler`, moving away from strict serial processing to improve throughput.

### 4. Community Hot Topics
**Most Active/Discussed Items:**
*   **[Issue #4879](https://github.com/nearai/ironclaw/issues/4879) - IronClaw Reborn Local Dogfooding Findings:** Continues to track usability issues found during daily use of the local build. High relevance for ensuring the Reborn WebUI is production-ready.
*   **[Issue #5119](https://github.com/nearai/ironclaw/issues/5119) - IronClaw Reborn Local Dogfooding Findings 06/22/2026 - 06/28/2026:** New weekly dogfooding tracker, indicating a structured approach to identifying bugs before release.
*   **[PR #5061](https://github.com/nearai/ironclaw/pull/5061) - Skill Extraction & Self-Evolution:** Introduces "Hermes-style" skill extraction, allowing the agent to distill successful turns into reusable skills. This is a major architectural shift toward autonomous learning.
*   **[PR #5063](https://github.com/nearai/ironclaw/pull/5063) - Per-Turn Auto-Approve Resolution:** Enhances security and UX by allowing granular control over auto-approval for tools, addressing user concerns about unsafe defaults.

**Analysis:** The community and maintainers are heavily focused on **usability during local development** and **autonomous capability expansion**. The emphasis on "dogfooding" highlights a commitment to quality assurance through internal usage.

### 5. Bugs & Stability
**Reported Issues:**
*   **[Issue #5129](https://github.com/nearai/ironclaw/issues/5129) - Always Approve Not Working:** Critical bug where the `outbound_delivery_target_set` capability ignores auto-approve settings. Requires immediate investigation.
*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) - Nightly E2E Failed:** Continuous Integration failure in the nightly E2E workflow. Indicates potential regression in the V2 engine or test suite instability.
*   **[Issue #4925](https://github.com/nearai/ironclaw/issues/4925) - NEAR AI MCP Setup False Positive:** Resolved in PR #4990. Previously, the UI incorrectly prompted for setup even when credentials were ready.

**Stability Note:** The CI improvements in PRs #5115 and #5118 suggest recent efforts to stabilize the build pipeline, which had been suffering from network-related flakes.

### 6. Feature Requests & Roadmap Signals
**Emerging Features:**
*   **Telegram Channel Support:** [Issue #5124](https://github.com/nearai/ironclaw/issues/5124) requests integrating Telegram as a native channel for Reborn, moving it out of legacy v1 paths. This signals a push for multi-platform accessibility.
*   **Automation Delete/Pause/Resume:** [Issues #5122 & #5121](https://github.com/nearai/ironclaw/issues/5122) and PR #5131 indicate that full lifecycle management for automations is a priority for the next major feature set.
*   **Skill Persistence:** PR #5061’s self-evolution feature suggests a roadmap toward agents that improve over time without manual reconfiguration.
*   **Unified Gate Semantics:** [Issue #5120](https://github.com/nearai/ironclaw/issues/5120) aims to standardize "Declined/Denied/Canceled" states across auth, approvals, and activity projections, improving consistency in the user experience.

**Prediction:** The next release will likely feature enhanced automation controls, improved Telegram integration, and the initial rollout of the skill extraction mechanism.

### 7. User Feedback Summary
*   **Performance Concerns:** Multiple issues (#5125, #5126, #5127, #5128) highlight user frustration with Reborn's speed. Users report slow inference and unnecessary runtime steps, prompting a dedicated performance sprint.
*   **Usability Friction:** Dogfooding issues (#4879, #5119) point to friction in first-run setup, WebUI startup, and configuration flows. Users want a smoother "zero-to-agent" experience.
*   **Trust & Control:** The detailed work on approval overrides (#5062, #5063) and auto-approve fixes (#5129) shows users demand fine-grained control over agent actions to ensure safety and reliability.

### 8. Backlog Watch
*   **[Issue #5123](https://github.com/nearai/ironclaw/issues/5123) - Automations Findings 06/22/2026:** A new tracker for automation-specific bugs. Needs monitoring to ensure findings are addressed promptly.
*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) - Nightly E2E Failed:** Persistent CI failures require maintenance attention to prevent blocking merges.
*   **[PR #5131](https://github.com/nearai/ironclaw/pull/5131) - Reborn Automation Pause/Resume:** While created today, this large-scope PR needs careful review to ensure it doesn't introduce regressions in the trigger system.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-22
**Source:** GitHub (netease-youdao/LobsterAI)

## 1. Today's Overview
LobsterAI exhibits high development velocity today with 12 Pull Requests updated and 6 Issues actively discussed. The project is in a critical stabilization phase, evidenced by the merging of several security hardening patches and performance optimizations for the SQLite backend. A significant security advisory regarding SSRF guards was raised, indicating ongoing vigilance around local network exposure. While no new releases were published today, the volume of merged PRs suggests an imminent release cycle focused on stability and plugin compatibility.

## 2. Releases
**No new releases published today.**
*Note: Several PRs merged today (#2186, #2185, #2182) affect OpenClaw plugin runtime and installation logic, which may necessitate a minor version bump or hotfix release soon.*

## 3. Project Progress
**Merged/Closed Pull Requests:**
*   **OpenClaw Plugin Infrastructure:** PR #2186 compiled the NIM plugin runtime entry, ensuring consistent TypeScript plugin preparation. PR #2185 patched `GetReplyOptions` to include `cwd`, fixing plugin SDK declaration generation. PR #2182 supported upgraded IM plugin installations for DingTalk, Lark, WeCom, and POPO.
*   **Cowork Feature Expansion:** PR #2183 introduced "Plan Mode" to the composer, allowing users to propose, view, and approve workflows before execution.
*   **Documentation:** PR #2184 refreshed `AGENTS.md` with updated guidance on Cowork/OpenClaw architecture and quality gates.

**Key Advancements:**
*   Enhanced security posture by addressing SSRF guard weaknesses (Issue #2181 context).
*   Improved database reliability with atomic migration flags (PR #1415) and batched writes (PR #1410).
*   Stabilized real-time communication via NIM SDK fixes (PR #1419) and cron job concurrency controls (PR #1420).

## 4. Community Hot Topics
**Most Active/Discussed Items:**
*   **[Security] Private-Network Browser Access & SSRF Guard Weakness** (Issue #2181)
    *   *Link:* [netease-youdao/LobsterAI Issue #2181](https://github.com/netease-youdao/LobsterAI/issues/2181)
    *   *Analysis:* This is the highest-severity topic today. Users are concerned that default settings expose private networks and weaken built-in security guards. This reflects a growing demand for "secure-by-default" configurations in local-first AI agents.
*   **[Bug] Overview Page UI/UX Failures** (Issues #1411, #1414, #1416)
    *   *Links:* [Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411), [Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414), [Issue #1416](https://github.com/netease-youdao/LobsterAI/issues/1416)
    *   *Analysis:* Multiple reports highlight broken interactivity, incorrect statistics ("Total Sessions" showing 0), and layout collisions in English mode. This indicates a regression in the profile/overview module, likely due to recent localization or state-management updates.

## 5. Bugs & Stability
**Ranked by Severity:**
1.  **Security Vulnerability (High):** Default restoration of private-network browser access and weakened SSRF guard.
    *   *Status:* Reported in Issue #2181. No linked fix PR yet; requires immediate attention.
2.  **Data Integrity & Concurrency (Medium):**
    *   *SQLite Write Blocking:* PR #1410 addresses OOM risks and UI lag caused by synchronous disk writes during streaming.
    *   *Migration Race Condition:* PR #1415 fixes a bug where migration completion flags were set even if transactions failed, leading to data loss.
    *   *Cron Re-entry:* PR #1420 resolves event storms in `pollOnce()` causing duplicate IPC events.
3.  **UI/UX Regressions (Low-Medium):**
    *   Broken time filters, zero-count session stats, and text overlapping in the Overview page (Issues #1411, #1414, #1416).
    *   *Fix Status:* No merged PRs specifically targeting these UI bugs yet; they remain open/stale.

## 6. Feature Requests & Roadmap Signals
*   **Plan Mode Workflow (Implemented):** PR #2183 introduces a "Plan Mode" for Cowork, signaling a roadmap shift towards more deterministic, step-by-step agent execution rather than immediate action.
*   **Plugin Ecosystem Standardization:** The consolidation of NIM, DingTalk, Lark, and WeCom plugin installation paths (PRs #2182, #2186) suggests a push for a unified, robust plugin architecture.
*   **Security-First Defaults:** The community feedback in Issue #2181 signals strong user preference for restrictive default network permissions, which will likely influence future security configurations.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Trust Issues:** Users are uneasy about the default security settings exposing local network resources (Issue #2181).
    *   **Reliability:** The "Total Sessions" counter being stuck at 0 despite high API usage (Issue #1414) undermines trust in the platform's analytics.
    *   **Usability:** Interactions in the Overview page feel broken or unresponsive (Issue #1411), and multilingual support causes layout breaks (Issue #1416).
*   **Positive Signals:**
    *   Appreciation for granular control over plugin installations and the new "Plan Mode" feature which adds transparency to agent actions.

## 8. Backlog Watch
**Items Needing Maintainer Attention:**
*   **Security Patch:** Issue #2181 requires an urgent security review and potential emergency patch for the SSRF guard and proxy settings.
*   **Overview Module Regression:** Issues #1411, #1414, and #1416 form a cluster of UI/state bugs in the `/profile` route. These should be prioritized together to restore user confidence in the dashboard.
*   **Stale Issues:** Issues #1409, #1413, and PRs #1407, #1408 have been marked stale since April but were updated today. Maintainers need to triage whether these are still valid or can be closed/merged.

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

# CoPaw Project Digest: 2026-06-22

### 1. Today's Overview
The CoPaw project (specifically the QwenPaw agent framework) exhibits high development velocity with 50 Pull Requests and 22 Issues updated in the last 24 hours. While no new official releases were published, the merge rate is significant, indicating rapid iteration on core stability and mobile UX. Community engagement is strong, with multiple contributors addressing critical bugs related to message queuing, session management, and cross-platform compatibility. The primary focus today has shifted towards stabilizing the mobile experience and resolving backend race conditions in the agent execution pipeline.

### 2. Releases
*   **Status:** No new official releases published today.
*   **Context:** Development activity suggests imminent patch updates, particularly for v1.1.12.post1, given the volume of bug fixes targeting recent regressions.

### 3. Project Progress
Several key areas advanced today through merged or closed PRs:
*   **Mobile Adaptation:** A significant cluster of PRs (#5381–#5385) by contributor `yaozy2020` improved mobile responsiveness across Console pages (ACP, Inbox, Workspace, Environments, MCP). This addresses long-standing usability issues on smaller screens.
*   **Queue & Session Stability:** PR #5371 fixed critical cross-agent message delivery issues by binding agent IDs at enqueue time. PR #5357 resolved session switching locks in embedded modes.
*   **Memory System Upgrade:** PR #5349 migrated the memory runtime to ReMe4, enhancing performance and compatibility.
*   **Desktop Startup Optimization:** PR #5153 ported instant-window startup features from Tauri to the PyWebview client, reducing cold-start latency.
*   **Model Management:** PR #5297 introduced batch testing and deletion for models, improving admin efficiency.

### 4. Community Hot Topics
*   **Message Queue & Cross-Agent Leakage:**
    *   **Issue #5354:** High interest in bugs where messages sent to one agent leak to another or fail to switch contexts.
    *   **Issue #5344:** Reports of silent message drops when agents are busy, returning HTTP 200 but discarding payload.
    *   **Analysis:** Users rely heavily on the new queueing system for multi-agent orchestration. The current instability in message routing is a major pain point affecting production reliability.
*   **Mobile Usability:**
    *   **Issue #5329:** Requests for better agent switching controls in the mobile sidebar.
    *   **PRs #5381-#5385:** Direct response to these needs, showing strong community drive toward mobile-first design.
*   **Context Compression Freezes:**
    *   **Issue #5218:** Severe bug where triggering context compaction freezes the QwenPaw process, requiring manual restart. This impacts long-running sessions significantly.

### 5. Bugs & Stability
Ranked by severity based on impact and reports:

1.  **Critical: Process Freeze on Context Compaction (#5218)**
    *   *Description:* Sub-agents trigger context compaction, causing the entire QwenPaw process to hang.
    *   *Status:* Open. No merged fix identified yet.
2.  **High: Internal Server Error on Startup (#5379)**
    *   *Description:* New installations crash with `get_remote_addr(transport)` errors.
    *   *Status:* Open. Likely environment-specific (Windows/System32).
3.  **High: Message Loss in Busy State (#5344)**
    *   *Description:* API calls return 200 but messages are dropped if the agent is processing.
    *   *Status:* Open. Critical for reliability.
4.  **Medium: Session Switching Locks (#5354, #5358)**
    *   *Description:* UI freezes or fails to switch sessions; JS errors in embedded mode.
    *   *Status:* Partially addressed by PR #5357 (closed), but #5358 remains open.
5.  **Medium: Model Connection Failures (#5330)**
    *   *Description:* Zhipu API supplier test passes, but individual model tests fail.
    *   *Status:* Open. Indicates a routing or naming convention bug in the model layer.
6.  **Low: File Preview 404 (#5370)**
    *   *Description:* `send_file_to_user` generates invalid URLs for previews.
    *   *Status:* Closed/Fixed by PR #5377.

### 6. Feature Requests & Roadmap Signals
*   **Personal Knowledge Base (#2969):** Persistent request to integrate personal RAG/knowledge base capabilities directly into the console. High potential for inclusion in future major releases.
*   **Recall-Aware Memory Consolidation (#5387):** Suggestion to use recall frequency as a signal for memory distillation. Aligns with the recent ReMe4 migration, suggesting a roadmap toward smarter, user-centric memory management.
*   **OpenClaw/Hermes Migration (#5254):** Interest in importing configs from competing frameworks. Indicates a desire for easier onboarding for users switching from other agent platforms.
*   **Real-time UI Updates for API Messages (#5322):** Closed, but highlights the need for WebSocket/SSE improvements in the console frontend.

### 7. User Feedback Summary
*   **Satisfaction:** Users appreciate the new message queue feature for efficiency but are frustrated by its current instability (cross-talk between agents).
*   **Pain Points:**
    *   **Configuration Persistence:** Issue #5262 highlights annoyance with disabled skills re-enabling after updates.
    *   **Shell Command Parsing:** Issue #5373 reports failures with complex shell commands (pipes/redirections), limiting the utility of the `execute_shell_command` tool.
    *   **Mobile Experience:** Historically poor, but recent PRs suggest rapid improvement. Users are actively testing mobile browsers and providing feedback.
*   **Use Cases:** Heavy use of multi-agent setups via DingTalk/Feishu channels, requiring robust session isolation and file sharing capabilities.

### 8. Backlog Watch
*   **Issue #5218 (Context Freeze):** This is a blocker for reliable long-context usage. Maintainers need to prioritize a fix as it renders the agent unusable without restart.
*   **Issue #5379 (Startup Crash):** Affects new users installing via pip on Windows. Quick resolution is needed to prevent churn.
*   **Issue #5330 (Zhipu Model Routing):** Specific vendor integration bug that may affect other providers using similar routing logic.
*   **Issue #5317 (Tauri Python Path):** Questions regarding Python environment detection in Tauri builds suggest documentation or installer improvements are needed.

---
*Generated by Agnes-2.0-Flash based on CoPaw GitHub data.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-06-22

### 1. Today's Overview
The ZeptoClaw repository shows minimal daily activity with one issue closure and one pull request merged within the last 24 hours. The focus remains strictly on continuous integration improvements rather than feature development or bug fixing. With no new releases published, the project appears to be in a maintenance phase centered on preserving its core strategic advantage: binary size efficiency. Activity levels are low, suggesting that recent efforts have successfully stabilized the CI pipeline regarding size constraints.

### 2. Releases
No new releases were published in the last 24 hours. The latest significant updates relate to internal CI gating mechanisms rather than user-facing version bumps.

### 3. Project Progress
*   **Merged PR #611**: The pull request titled `[chore(ci): promote binary-size to PR gate at 7.5MB]` was merged/closed. This change promotes an existing measurement job into a hard gate for all Pull Requests, lowering the threshold to ensure the stripped release binary does not exceed 7.5MB.
*   **Closed Issue #537**: The related issue `[chore(ci): binary size budget gate]` was closed, marking the completion of the initial proposal for implementing this CI guard.

### 4. Community Hot Topics
*   **[Issue #537](https://github.com/qhkm/zeptoclaw/issues/537)**: Although closed, this issue highlights the community's critical need for maintaining the project's "strategic moat." The discussion emphasizes the importance of keeping the binary under 7MB to ensure compatibility with resource-constrained environments like robots.
*   **[PR #611](https://github.com/qhkm/zeptoclaw/pull/611)**: This PR reflects a shift from post-mortem analysis to proactive enforcement. The underlying need is to prevent dependency creep from silently bloating the binary, ensuring that every contribution maintains the project's lightweight profile.

### 5. Bugs & Stability
No new bugs, crashes, or regressions were reported today. The activity was limited to infrastructure and CI configuration changes, indicating no immediate stability concerns for end-users based on today's data.

### 6. Feature Requests & Roadmap Signals
There are no new feature requests reported today. However, the continued tightening of CI gates suggests that future roadmap priorities will heavily favor performance optimization and size reduction over adding new functionalities. Maintaining the sub-7.5MB binary size is a non-negotiable constraint for incoming contributions.

### 7. User Feedback Summary
Current feedback centers on the necessity of strict binary size limits for robotics applications. Users value the project's ability to remain lightweight, viewing this as its primary competitive advantage. There is no indication of dissatisfaction with current functionality, but rather a strong appreciation for the rigorous engineering standards maintained by the author `qhkm`.

### 8. Backlog Watch
No long-unanswered issues requiring immediate maintainer attention were identified in the provided data. The closed issue #537 and merged PR #611 indicate that the CI size-gating backlog has been successfully resolved.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-06-22

## 1. Today's Overview
ZeroClaw exhibits high development velocity with 50 issues and 50 pull requests updated in the last 24 hours, indicating intense focus on stabilization and architectural shifts ahead of the v0.8.0 release cycle. Activity is heavily concentrated on security hardening, specifically regarding WASM plugin permissions and network access, alongside critical bug fixes for provider integrations (Anthropic, OpenRouter, MiniMax). The project is actively transitioning its plugin runtime from Extism to a native Wasmtime component-model implementation, signaling a major infrastructure modernization. No new releases were published today, but several high-priority blockers for the v0.8.0 stable tier remain under active resolution.

## 2. Releases
*   **No new releases published.**
*   **Status:** The team is currently finalizing the v0.8.0 release queue (Issue #7112) and preparing for v0.8.1 integrations (Issue #6970). The focus remains on resolving "Stable-tier blockers" related to config schema and tool-call parser stability.

## 3. Project Progress
*   **Plugin Runtime Migration (Major):** PR #8144 implements the Wasmtime component-model (WIT) plugin runtime, removing the unproven Extism placeholder. This aligns with RFC #7674 to eliminate Node.js dependencies and reduce supply chain risks.
*   **Security Hardening:**
    *   PR #8137 scopes plugin configuration per-alias and removes raw environment variable access (`zc_env_read`), addressing critical security concerns raised in Issue #5919.
    *   PR #8130 hardens `zc_http_request` and `zc_env_read` with per-plugin allowlists, mitigating SSRF and secret exfiltration risks (Issues #5918, #5919).
*   **Observability Fixes:** PR #8146 fixes telemetry loss in CLI one-shot processes by ensuring OTLP flushes before exit, improving debugging capabilities for users.
*   **Channel Improvements:** PR #8145 moves ACK reactions earlier across multiple channels to reduce perceived latency, addressing user frustration with "silence" during processing.

## 4. Community Hot Topics
*   **RFC: Native Dynamic-Library Plugin System (Issue #7420)**
    *   *Activity:* 5 comments.
    *   *Analysis:* Users are pushing for a hybrid plugin model beyond WASM, seeking native performance. This suggests a mature user base requiring complex, high-performance extensions that WASM sandboxing may hinder.
*   **RFC: Wasm-first plugin runtime (Issue #8135)**
    *   *Activity:* New RFC, 0 comments.
    *   *Analysis:* Formalizing the shift to signed, capability-declaring Wasm modules. This indicates a move toward a more secure, standardized ecosystem, reducing reliance on unverified native binaries.
*   **Work Lanes & Board Automation (Issue #6808)**
    *   *Activity:* 11 comments, highest engagement.
    *   *Analysis:* Significant community interest in governance and workflow efficiency. Maintainers are refining how issues are routed, suggesting a need for better triage automation to handle the growing volume of contributions.
*   **Webhook Transforms (Issue #2467)**
    *   *Activity:* 6 comments.
    *   *Analysis:* Persistent demand for flexible webhook handling. Users are struggling with generic payload inspection, highlighting a gap in ZeroClaw’s current gateway capabilities for non-standard integrations.

## 5. Bugs & Stability
*   **Critical: Context Compression Drops Tool Calls (Issue #6361)**
    *   *Severity:* P1 / S1.
    *   *Impact:* Breaks multi-turn tool conversations for OpenAI-compatible providers (e.g., MiniMax).
    *   *Status:* Open. Requires immediate fix to restore usability for these providers.
*   **Critical: Gemini CLI OAuth Failure (Issue #4879)**
    *   *Severity:* P1 / S1.
    *   *Impact:* Workflow blocked for users attempting to authenticate with Gemini.
    *   *Status:* Open. High friction for new users.
*   **High: Native/MCP Tools Unavailable on OpenAI/Anthropic (Issue #7756)**
    *   *Severity:* P1 / S1.
    *   *Impact:* MCP servers register, but tools are not passed to the model turn effectively.
    *   *Status:* Open. Linked to PR #7747 which aims to enforce per-agent MCP scoping.
*   **Medium: Anthropic Provider Unavailable in Chat Until Reset (Issue #8094)**
    *   *Severity:* S0 (Data Loss/Security Risk noted, but functionally S2).
    *   *Impact:* Quickstart users face broken configurations immediately after setup.
    *   *Status:* Open. Needs reproducible steps.
*   **Low: Logging to Stdout (Issue #4721)**
    *   *Severity:* P2.
    *   *Impact:* Makes programmatic parsing of CLI output difficult.
    *   *Status:* Open. Standard improvement for CLI hygiene.

## 6. Feature Requests & Roadmap Signals
*   **OpenRouter Model Fallbacks (Issue #8138 / PR #8141):** Implementation of native model failover arrays for OpenRouter. This is likely to be included in v0.8.0 or v0.8.1, enhancing reliability for users dependent on OpenRouter.
*   **Browser HTTP Support (PR #8136):** Widening `browser_open` to accept `http://` URLs. This is a minor but practical UX improvement likely to be merged soon.
*   **Session TTL for Channels (PR #8139):** Automatic truncation of inactive channel sessions. This addresses storage growth concerns and is aligned with recent channel maintenance efforts.
*   **Local-First Mode Optimization (Issue #5287):** Request for compact prompting and strict parsers for small local models. Reflects a growing niche of users running ZeroClaw on edge devices with limited resources.

## 7. User Feedback Summary
*   **Pain Point: Perceived Latency:** Users are frustrated by the silence between sending a message and receiving a response, especially on channels lacking typing indicators (Issue #8142). The fix in PR #8145 directly addresses this by moving ACK reactions earlier.
*   **Pain Point: Configuration Complexity:** The "Quickstart" flow is failing for some users (Issue #8094), suggesting that the initial onboarding experience still has friction points regarding provider configuration persistence.
*   **Satisfaction: Security Transparency:** The community is highly engaged with security RFCs (Issues #5919, #5918, #8044), indicating strong trust in the maintainers' commitment to securing the plugin ecosystem. Users appreciate the detailed explanations of risk mitigation.

## 8. Backlog Watch
*   **Issue #2503: NapCat/OneBot Channel Missing**
    *   *Status:* Open, 9 comments.
    *   *Action:* Users are unable to find configuration options for NapCat. This needs clear documentation or UI visibility updates, as it is a popular channel in specific regions.
*   **Issue #6074: Lost Commits Audit**
    *   *Status:* Open, 2 comments.
    *   *Action:* Tracking 153 commits lost in a bulk revert. Maintainers need to ensure no critical bug fixes or features from those commits are permanently lost in the current state.
*   **Issue #7038: WebSocket 401 Despite Valid Auth**
    *   *Status:* Blocked, needs repro.
    *   *Action:* Critical for gateway stability. Requires maintainer attention to isolate the auth profile mismatch causing persistent 401 errors.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*