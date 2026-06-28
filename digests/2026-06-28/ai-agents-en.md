# OpenClaw Ecosystem Digest 2026-06-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-28 02:32 UTC

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

# OpenClaw Project Digest
**Date:** 2026-06-28
**Source:** github.com/openclaw/openclaw

## 1. Today's Overview
OpenClaw experienced extremely high engagement today, with 500 issues and 500 pull requests updated within the last 24 hours. Despite the volume, no new releases were published, suggesting the team is focused on stabilizing the current `main` branch rather than shipping a new version. Activity is heavily concentrated on fixing critical session state integrity, memory leaks, and authentication bypass vulnerabilities. The project shows signs of significant technical debt in session management and context handling, with many high-severity bugs related to "message loss" and "session state" corruption.

## 2. Releases
*   **No new releases.**
*   Recent stability concerns regarding memory leaks and session corruption indicate that the next release will likely prioritize these fixes over new features.

## 3. Project Progress
Several key areas saw advancement or attempted fixes in the PR queue today:
*   **Security Hardening:** Multiple PRs address critical security boundaries, including hardening Mattermost slash command callbacks (#65655) and bounding WebSocket authentication (#73925).
*   **Agent Reliability:** Fixes for Azure OpenAI SSE response bounds (#97349, #97217) aim to prevent resource exhaustion from hostile or buggy endpoints.
*   **Context Management:** PR #96668 addresses cron prompt compaction issues, while #97342 fixes embedded transcript flushing to prevent data loss.
*   **Multi-Agent Support:** PR #97348 adds support for `cursor-agent` in the automated review pipeline, improving CI/CD capabilities.
*   **Closed/Resolved:** PR #68936 introduced an autofix pipeline and Windows daemon, while PR #73897 fixed Android Termux shell wrapper issues.

## 4. Community Hot Topics
The most discussed issues revolve around session stability, context bloat, and integration reliability:
*   **[#58450] Agent promises follow-ups without action** (15 comments): Highlights a trust deficit where agents hallucinate tasks. *Need: Reliable task execution tracking.*
*   **[#92201] Anthropic thinking signature replay errors** (15 comments): A complex bug affecting embedded runners. *Need: Robust error recovery for streaming models.*
*   **[#62505] Coding Agent never completes** (14 comments): A major regression blocking power users. *Need: Debugging tools for stuck agent loops.*
*   **[#63829] Per-agent memory-wiki vault** (10 comments, 9 👍): Strong community interest in isolating knowledge bases for multi-agent setups. *Signal: Demand for modular memory architectures.*
*   **[#55334] Gateway OOM due to sessions.json growth** (10 comments): Critical performance issue affecting long-running deployments. *Need: Automated session pruning and memory management.*

## 5. Bugs & Stability
This is the most critical category for OpenClaw right now. Several high-severity bugs impact core functionality:
*   **High Severity (Crash/Data Loss):**
    *   **#95833 [CLOSED] Subagent abort-settle lock failure:** Fixed a bug where aborted subagents left `.jsonl.lock` files, permanently breaking sessions.
    *   **#95915 [CLOSED] Heap not released on embedded run abort:** Addressed memory exhaustion caused by unreleased heaps during aborts.
    *   **#64810** Heartbeat interrupts swallowing replies in Telegram.
    *   **#65161** Heartbeat isolated mode cadence stalls.
*   **Medium-High Severity (Regression/Reliability):**
    *   **#62505** Coding Agent regression (inactive since April, but highly commented).
    *   **#57901** Safeguard compaction ignoring config.
    *   **#51429** Hardcoded user path bug (`/Users/wangtao`) exposed a lack of rigorous code review/security scanning.
    *   **#67417** Backup failures due to race conditions with session cleanup.
*   **Stability Risks:**
    *   **#55334** & **#54155** report severe memory leaks (OOM kills) in the Gateway process.
    *   **#51396** Security regression stripping operator scopes unconditionally.

## 6. Feature Requests & Roadmap Signals
*   **Per-Agent Memory Isolation:** Issue #63829 and #35203 indicate strong demand for multi-agent collaboration features, specifically shared blackboards and isolated memory vaults.
*   **Math/LaTeX Support:** Issue #42840 has significant community support (7 👍) for rendering math in the Control UI.
*   **Sensitive Data Masking:** Issue #64046 requests automatic masking of API keys/secrets in logs and UI, a common enterprise requirement.
*   **Remote Reranking:** Issue #64438 asks for remote reranker endpoints, suggesting users want to offload heavy semantic search tasks.
*   **Prediction:** The next release will likely focus on **memory architecture improvements** (addressing #63829 and #60572) and **security hardening** (masking secrets, fixing scope bugs).

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **silent failures** (agents promising actions they don't take, #58450) and **data loss** (messages swallowed by heartbeats, #64810).
*   **Performance:** The Gateway memory leak (#55334, #54155) is a major blocker for production use, forcing users to restart services frequently.
*   **Usability:** The hardcoded path bug (#51429) and generic error messages (#92201) suggest poor developer experience (DX) for debugging.
*   **Trust:** Issues like #58450 erode trust in the agent's reliability. Users need deterministic behavior, not just "best effort" responses.

## 8. Backlog Watch
Maintainers should prioritize the following long-standing or high-impact items:
*   **#62505 [Bug]: Coding Agent never completes** – A regression that has persisted since April with no clear fix merged.
*   **#55334 [perf]: sessions.json unbounded growth causes gateway OOM** – Critical infrastructure bug affecting all long-running instances.
*   **#54155 [Bug]: Gateway memory leak** – Related to #55334, this indicates a systemic issue with session cleanup.
*   **#51396 [Bug]: clearUnboundScopes strips operator scopes** – A security/regression bug affecting backend clients.
*   **#64664 [Bug]: Approvals lost on gateway restart** – Impacts workflow continuity for approval-heavy use cases.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Ecosystem
**Date:** 2026-06-28
**Analyst:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The 2026 open-source AI agent landscape is characterized by a critical pivot from experimental prototyping to enterprise-grade stability and security. Projects are aggressively addressing systemic vulnerabilities, particularly around session state integrity, memory management, and supply chain security. The community demand has shifted from "can the agent talk?" to "can the agent operate reliably, securely, and autonomously in production?" while maintaining strict user control through structured approval flows.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | New Releases | Health Score (Est.) | Status |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **OpenClaw** | 500 | 500 | ❌ No | ⚠️ Low (Debt) | High Volume / Critical Instability |
| **Hermes Agent** | 50 | 50 | ❌ No | ⚠️ Low (Fragile) | Active Patching / Config Regressions |
| **ZeroClaw** | 45 | 50 | ❌ No | ✅ High | Rapid Iteration / Security Focus |
| **CoPaw** | 5 | 14 | ❌ No | ⚠️ Medium (Migration) | Testing Push / Migration Friction |
| **IronClaw** | 11 | 50 | ❌ No | ✅ High | Architectural Refactor / Policy |
| **NanoBot** | 8 | 43 | ❌ No | ✅ High | Stable Sprint / Security Fixes |
| **LobsterAI** | 2 | 8 | ❌ No | ✅ Medium | Moderate Velocity / Windows Focus |
| **NanoClaw** | 1 | 8 | ❌ No | ⚠️ Low (Blocked) | Review Bottleneck / Skill Updates |
| **PicoClaw** | 3 | 3 | ❌ No | ✅ Medium | Steady / Cross-Platform Fixes |
| **NullClaw** | 1 | 1 | ❌ No | ✅ Medium | Low Activity / Safety Focus |
| **Moltis** | 1 | 2 | ❌ No | ✅ Medium | Niche / Local Model Compatibility |
| **TinyClaw** | 0 | 0 | ❌ No | ⚠️ Dormant | No Activity |
| **ZeptoClaw** | 0 | 0 | ❌ No | ⚠️ Dormant | No Activity |

## 3. OpenClaw's Position
OpenClaw operates at a scale distinct from its peers, processing nearly 1,000 updates in 24 hours.
*   **Advantages:** Unmatched community engagement and breadth of integration (Telegram, Android, Windows Daemon). It serves as the de facto "reference implementation" for complex session management.
*   **Technical Differences:** Unlike ZeroClaw’s WASM-first approach or IronClaw’s policy-centric design, OpenClaw focuses on monolithic session integrity. However, this comes at the cost of severe technical debt.
*   **Community Size:** OpenClaw’s issue volume (500+) dwarfs the next largest project (ZeroClaw at 45), indicating it is the primary battleground for agent stability research, but also highlighting its fragility compared to more curated projects like NanoBot.

## 4. Shared Technical Focus Areas
Several critical requirements are emerging across the ecosystem, indicating industry-wide bottlenecks:

*   **Session State & Memory Leaks:**
    *   *Projects:* OpenClaw, NanoBot, ZeroClaw, CoPaw.
    *   *Need:* Unbounded memory growth (OOM) and data loss during crashes are universal pain points. Users demand deterministic session recovery and automated pruning.
*   **Security Hardening & Supply Chain:**
    *   *Projects:* ZeroClaw (SLSA/Cosign), NanoBot (Shell Bypass), OpenClaw (Auth Bypass), Hermes (Credential Drops).
    *   *Need:* Trust is the primary currency. Communities are auditing for shell command injection, credential leakage, and unauthorized tool execution.
*   **Structured Human-in-the-Loop:**
    *   *Projects:* NullClaw (Approval Flows), IronClaw (Capability Policies), ZeroClaw (Goal Mode).
    *   *Need:* Moving beyond simple "allow/deny" to granular, auditable approval workflows for autonomous agents.
*   **Local/Edge Model Compatibility:**
    *   *Projects:* Moltis (Gemma/oMLX), CoPaw (Ascend-vLLM), ZeroClaw (WASM Plugins).
    *   *Need:* Robust handling of non-standard JSON outputs and offline-first architectures.

## 5. Differentiation Analysis

*   **Architectural Philosophy:**
    *   **ZeroClaw** is leading the shift toward **secure, modular runtimes** (WASM plugins, SLSA provenance), appealing to enterprise/security-conscious users.
    *   **IronClaw** is focusing on **granular policy engines** (RBAC, capability constraints), targeting multi-user/admin shared environments.
    *   **OpenClaw** remains a **monolithic, feature-rich hub**, prioritizing integration breadth over architectural purity, resulting in high complexity.
    *   **NanoBot** positions itself as a **stable, lightweight alternative**, emphasizing rapid security patches and clean session management.

*   **Target Users:**
    *   **Developers/Evangelists:** OpenClaw, CoPaw (heavy customization, API flexibility).
    *   **Enterprise/Admins:** IronClaw, ZeroClaw (policy, security, audit trails).
    *   **Power Users/Individuals:** NanoBot, LobsterAI (reliability, ease of use, desktop integration).
    *   **Niche/Edge:** Moltis (local models), NullClaw (mobile/Termux).

## 6. Community Momentum & Maturity

*   **Rapidly Iterating (High Velocity, High Risk):**
    *   **OpenClaw:** Massive volume but high bug density. Indicates early-stage stability challenges in a mature codebase.
    *   **ZeroClaw:** High engagement with strategic shifts (RFCs, WASM). Healthy tension between innovation and stability.
    *   **IronClaw:** Focused refactoring ("Reborn" stack). Building foundational enterprise features.

*   **Stabilizing & Mature (Controlled Velocity):**
    *   **NanoBot:** High PR merge rate with clear security fixes. Demonstrates effective maintenance processes.
    *   **Hermes Agent:** Active patching of critical regressions. Shows responsiveness but highlights fragility in recent updates.
    *   **LobsterAI:** Moderate, steady progress. Good balance of bug fixing and UI polish.

*   **Emerging/Niche (Focused Development):**
    *   **CoPaw:** Transitioning to Agentscope 2.0. High test coverage push indicates maturation.
    *   **Moltis:** Small but dedicated community solving specific local-model problems.
    *   **NullClaw/PicoClaw:** Steady, low-volume development. Healthy but slower growth.

*   **Dormant:**
    *   **TinyClaw, ZeptoClaw:** No activity suggests project abandonment or stagnation.

## 7. Trend Signals

1.  **From "Chat" to "Autonomous Workflows":** Features like ZeroClaw’s "Goal Mode," IronClaw’s "Capability Policies," and NullClaw’s "Structured Approvals" signal a move toward agents that execute long-running, multi-step tasks with human oversight.
2.  **Security as a First-Class Citizen:** The proliferation of SLSA provenance (ZeroClaw), shell bypass fixes (NanoBot), and credential hardening (Hermes/OpenClaw) indicates that security is no longer an afterthought but a primary feature requirement for adoption.
3.  **Modularity and Isolation:** The push for WASM plugins (ZeroClaw), per-agent memory vaults (OpenClaw/NanoClaw), and isolated session contexts reflects a need to compartmentalize agent capabilities to prevent cross-contamination and improve reliability.
4.  **Local-First Resilience:** Increased focus on handling malformed JSON from local models (Moltis) and offline/edge compatibility (NullClaw/Termux) suggests a growing market for agents that function reliably without constant cloud connectivity.
5.  **Enterprise Readiness:** IronClaw’s role-based access control and CoPaw’s governance policies indicate that the ecosystem is preparing for multi-user, shared-instance deployments, moving beyond single-user personal assistants.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-06-28
**Source:** HKUDS/nanobot

### 1. Today's Overview
NanoBot experienced high development velocity yesterday, with 43 Pull Requests updated and 8 Issues addressed, indicating a robust sprint focused on stability and security hardening. The team actively closed multiple critical bugs related to session management, streaming integrity, and provider compatibility, while simultaneously addressing significant security vulnerabilities in the execution engine. Although no new official release was published, the volume of merged fixes suggests an imminent patch update to stabilize the v0.2.x line. Community engagement remains strong, particularly around WebUI reliability and secure shell execution.

### 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Note:** Several critical security and bug-fix PRs were merged on 2026-06-27, likely warranting a hotfix release (e.g., v0.2.3 or v0.2.2.1) in the near future.

### 3. Project Progress
The majority of activity today involved merging fixes for long-standing stability issues and enhancing core agent reliability:
*   **Security Hardening:** PRs #4562 merged fixes for `exec.allowPatterns` bypass vulnerabilities reported in Issue #4521 and #4518, ensuring shell commands are validated segment-by-segment rather than as a whole string.
*   **Session Integrity:** PR #4533 fixed session key collisions on disk (Issue #4057), and PR #3712 addressed corrupted session files. PR #4566 is currently open to repair legacy non-base64 session stems.
*   **Streaming & Provider Fixes:** PRs #4530, #4531, and #4532 resolved issues with duplicate tool call IDs, stream delta merging, and Anthropic content block validation, respectively.
*   **Agent Reliability:** PR #4534 introduced verification gates and provider recovery mechanisms to prevent task loss during transient errors.
*   **Feature Additions:** PR #4542 enabled image content delivery from MCP tools as artifacts, and PR #4353 improved WhatsApp voice note transcription by converting audio formats before STT.

### 4. Community Hot Topics
*   **Security Concerns in `exec` Tool:** Issues #4521 and #4518 highlight severe security risks where default shell configurations could leak secrets or bypass allowlists. The rapid closure and fixing of these issues indicate high community trust in the maintainers' responsiveness to security audits.
    *   *Links:* [Issue #4521](https://github.com/HKUDS/nanobot/issues/4521), [Issue #4518](https://github.com/HKUDS/nanobot/issues/4518)
*   **WebUI Stuck States:** Issue #4500 describes a persistent bug where the WebUI gets stuck in a "processing" state after gateway restarts. This impacts user experience significantly, especially for mobile users relying on WebSocket connections.
    *   *Link:* [Issue #4500](https://github.com/HKUDS/nanobot/issues/4500)
*   **"Ultra-Lightweight" Contradiction:** Issue #660 continues to draw attention regarding the project's branding versus its actual dependencies (Node.js + Python). While closed, the 5 👍 and 14 comments suggest ongoing user sentiment that the project could be more efficient.
    *   *Link:* [Issue #660](https://github.com/HKUDS/nanobot/issues/660)

### 5. Bugs & Stability
*   **High Severity:**
    *   **Shell Bypass & Secret Leakage:** Issues #4521 and #4518. Fixed/Mitigated via PRs #4562 and related security updates. These allowed unintended command execution and exposure of shell startup secrets.
*   **Medium Severity:**
    *   **Session Key Collision:** Issue #4057. Distinct sessions overwriting each other due to lossy filename sanitization. Fixed by PR #4533.
    *   **Stream Delta Merging:** Issue #4063. Concurrent streams in the same chat merging incorrectly. Fixed by PR #4531.
    *   **Anthropic Provider Validation:** Issue #4060. Missing `type` field in assistant content blocks causing API errors. Fixed by PR #4532.
*   **Low Severity:**
    *   **Flaky Tests:** Issue #4523. Test failures due to file system timestamp granularity. Fixed by PR #4523.
    *   **Non-Stream Parser Deduplication:** Issue #4059. Duplicate tool call IDs in non-streaming paths. Fixed by PR #4530.

### 6. Feature Requests & Roadmap Signals
*   **Silent Cron Jobs:** PRs #4225 and #4357 implemented `silent` mode and `lock_recipient` for scheduled tasks, addressing the need for background monitoring without notification spam. This suggests a roadmap focus on refined automation control.
*   **MCP Image Support:** PR #4542 adds support for delivering images from MCP tools as artifacts, signaling an expansion of multimedia capabilities in the Model Context Protocol integration.
*   **Per-Session Model Presets:** PR #4555 allows overriding models per conversation, providing granular control over cost/performance trade-offs for specific tasks.
*   **Serper.dev Integration:** PR #4406 adds a new web search provider, expanding options beyond existing integrations.

### 7. User Feedback Summary
Users are increasingly focused on **reliability** and **security**. The high engagement with security issues (#4521, #4518) indicates that power users are auditing the codebase for safety, particularly regarding command execution. There is frustration with the WebUI's handling of WebSocket disconnections and server restarts (#4500), suggesting that frontend resilience is a priority for daily users. Additionally, the "ultra-lightweight" critique (#660) persists, implying a desire for a more minimal footprint or clearer documentation about dependency requirements.

### 8. Backlog Watch
*   **Legacy Session Repair:** PR #4566 is currently open and addresses the silent dropping of corrupt legacy session files. This needs maintainer review to ensure backward compatibility is fully restored.
*   **Context Caching Optimization:** PR #4371 proposes adding a breakpoint in the system prompt builder to cache the stable prefix, improving performance for long conversations. This is an optimization that may impact latency significantly.
*   **Dream Consolidation Override:** PR #4556 wires up `model_override` for Dream consolidation. Ensure this integrates smoothly with the new per-session presets introduced in PR #4555.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-28
**Source:** NousResearch/hermes-agent

### 1. Today's Overview
Hermes Agent exhibited high development velocity on 2026-06-28, with 50 issues and 50 pull requests updated in the last 24 hours. Despite zero new releases, the project is actively addressing critical stability and security regressions introduced in recent updates, particularly around v0.13.0. The majority of closed issues relate to bug fixes in credential handling, gateway connectivity, and tool delegation, indicating a strong focus on stabilizing the core agent runtime before the next major release.

### 2. Releases
*   **Status:** No new releases published today.
*   **Context:** Recent activity suggests the team is patching issues stemming from the v0.13.0 update (e.g., config vanishing, credential pool bugs) rather than launching new versions.

### 3. Project Progress
Significant progress was made in merging fixes for critical infrastructure and gateway stability:
*   **Gateway & Platform Fixes:** Several PRs addressed Discord adapter zombie states (#26684, #53924) and mixed-attachment routing errors (#37024, #26409, #25936, #53923).
*   **Credential & Auth Stability:** Merged fixes for Anthropic credential refresh loops (#53919) and OpenAI-Codex credential dropping (#19566 referenced in discussion, though PRs focus on Anthropic/OpenRouter fallbacks).
*   **CLI & Config Integrity:** Fixed silent file creation failures due to CWD loss (#26251, #53920) and corrected stale CLI hints for auth commands (#53929).
*   **Tool Delegation:** Resolved inconsistencies in subagent tool availability by suppressing transient check failures (#53904).

### 4. Community Hot Topics
*   **[Bug]: OpenAI-Codex credential pool can drop newly added credential** ([#19566](https://github.com/NousResearch/hermes-agent/issues/19566))
    *   *Activity:* 9 comments, 1 👍
    *   *Analysis:* High engagement indicates widespread concern over reliability in multi-provider setups. Users are frustrated by silent data loss in authentication configs.
*   **Desktop: add first-class remote-client onboarding** ([#36970](https://github.com/NousResearch/hermes-agent/issues/36970))
    *   *Activity:* 5 comments, 3 👍
    *   *Analysis:* Strong demand for seamless integration between the desktop app and existing backend instances, reflecting a need for better multi-device workflow support.
*   **Full test suite is broken on main** ([#27004](https://github.com/NousResearch/hermes-agent/issues/27004))
    *   *Activity:* 5 comments
    *   *Analysis:* Developers are blocked by cascading failures and timeouts, suggesting instability in the CI/CD pipeline or recent merge conflicts affecting test reliability.
*   **Auxiliary tasks silently fall back to paid OpenRouter models** ([#24029](https://github.com/NousResearch/hermes-agent/issues/24029))
    *   *Activity:* 5 comments, 3 👍
    *   *Analysis:* Billing surprise is a major pain point. Users expect strict adherence to "free-only" configurations for background tasks like title generation.

### 5. Bugs & Stability
The following critical bugs were reported and/or fixed today:
*   **Security:**
    *   *Cross-User Session Hijacking* ([#29149](https://github.com/NousResearch/hermes-agent/issues/29149)): GHSA tracking for unauthenticated global title lookup.
    *   *Pre-Execution Scanner Bypass* ([#29153](https://github.com/NousResearch/hermes-agent/issues/29153)): GHSA tracking for security scanner vulnerabilities.
    *   *Sensitive Text Redaction Bypass* ([#23810](https://github.com/NousResearch/hermes-agent/issues/23810)): Outbound messages bypassing `redact_sensitive_text`.
*   **Stability/Crashes:**
    *   *Gateway Shutdown Hangs* ([#14128](https://github.com/NousResearch/hermes-agent/issues/14128)): PID file race conditions on Linux/systemd restarts.
    *   *Launchd Double-Spawn* ([#21549](https://github.com/NousResearch/hermes-agent/issues/21549)): Infinite restart loop on macOS.
    *   *Discord Zombie State* ([#26656](https://github.com/NousResearch/hermes-agent/issues/26656)): Silent failure after network outage (Fixed in PRs #26684, #53924).
    *   *Tool Result Contamination* ([#27033](https://github.com/NousResearch/hermes-agent/issues/27033)): HTTP 400 loops caused by persisting error messages.
*   **Regression:**
    *   *Custom Model Configs Vanished* ([#25272](https://github.com/NousResearch/hermes-agent/issues/25272)): Post-v0.13.0 update issue.
    *   *Config Save Materializing Defaults* ([#27354](https://github.com/NousResearch/hermes-agent/issues/27354)): `save_config` bloating config files (Fixed in PR #53925).

### 6. Feature Requests & Roadmap Signals
*   **Managed Agent Runtime Contracts** ([#26675](https://github.com/NousResearch/hermes-agent/issues/26675)): Request for first-class support for multi-agent workflows using existing primitives (Kanban, SessionDB).
*   **Remote Client Onboarding** ([#36970](https://github.com/NousResearch/hermes-agent/issues/36970): Desire for native desktop apps to easily connect to existing headless instances without re-bootstrapping.
*   **Prediction:** The next release will likely prioritize stabilizing the credential pool logic and implementing the per-attachment classification logic for gateways to resolve the mixed-media bugs.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Billing Anxiety:** Users are alarmed by auxiliary tasks consuming paid tokens when free tiers are configured (#24029, #44894).
    *   **Data Loss:** Silent failures in file operations (#26211) and credential drops (#19566) erode trust in the agent's reliability.
    *   **Configuration Fragility:** The v0.13.0 update caused significant friction, with configs disappearing or bloating (#25272, #27354).
*   **Satisfaction:** Positive reception for rapid fixes on Discord connectivity and streaming stability. Users appreciate the transparency in security advisories.

### 8. Backlog Watch
*   **Security Advisories:** [#29149](https://github.com/NousResearch/hermes-agent/issues/29149) and [#29153](https://github.com/NousResearch/hermes-agent/issues/29153) are marked as "triage" and require immediate attention to prevent public disclosure or exploitation.
*   **Test Suite Health:** [#27004](https://github.com/NousResearch/hermes-agent/issues/27004) remains a blocker for confident releases, with cascading failures preventing reliable CI gating.
*   **Session Resume Logic:** [#27156](https://github.com/NousResearch/hermes-agent/issues/27156) highlights a complex state management bug where resumed sessions replay irrelevant context, affecting user experience in long-running tasks.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-06-28
**Source:** GitHub (sipeed/picoclaw)

## 1. Today's Overview
PicoClaw maintains steady development momentum with three issues and three pull requests updated in the last 24 hours. The project is currently focused on stabilizing core functionality, particularly regarding cross-platform compatibility (Windows path handling) and security permissions for messaging channels. While no new official releases were published today, significant code contributions have been merged, including improvements to MCP argument parsing and internal agent collaboration infrastructure. Activity indicates a healthy balance between bug fixing and feature expansion, though one critical bug regarding Matrix encryption remains open.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress
Two major contributions were closed/merged today, advancing the project's stability and architecture:
*   **MCP Argument Parsing Fix (#3048):** Closed/Merged. This PR resolves a bug where root-level persistent flags (e.g., `--no-color`) were incorrectly interpreted as positional arguments during `mcp add` operations. This improves CLI robustness for users relying on persistent configuration flags.
    *   [Link](https://github.com/sipeed/picoclaw/pull/3048)
*   **Agent Collaboration Infrastructure (#2937):** Closed/Merged. This PR introduces a first-class internal "Agent Collaboration Bus," enabling durable inter-agent communication with isolated session histories and permission-aware message envelopes. This represents a significant architectural step toward multi-agent workflows.
    *   [Link](https://github.com/sipeed/picoclaw/pull/2937)

## 4. Community Hot Topics
*   **Telegram Permission Granularity (#3114):** Closed/Stale. This issue highlights a security concern where Telegram bots lack differentiation between private chats, groups, and channels. Users are requesting fine-grained permission controls (e.g., restricting shell commands in group chats).
    *   [Link](https://github.com/sipeed/picoclaw/issues/3114)
    *   *Analysis:* Reflects a strong community need for enterprise-grade security boundaries in multi-user environments.
*   **Matrix Encryption Bug (#3194):** Open. A newly reported bug (created today) where encrypted Matrix messages fail to process because crypto support is not enabled, despite receiving the message.
    *   [Link](https://github.com/sipeed/picoclaw/issues/3194)
    *   *Analysis:* Indicates potential configuration drift or missing dependencies in recent builds for users utilizing end-to-end encryption.

## 5. Bugs & Stability
*   **Windows Path Separator Issue (#2472):** Closed. A bug where `list_dir` failed on Windows due to backslash usage incompatible with Go’s `fs.FS`. Resolved by normalizing paths.
    *   [Link](https://github.com/sipeed/picoclaw/issues/2472)
*   **Matrix Crypto Configuration Error (#3194):** Open. High severity for Matrix users. The system receives encrypted messages but fails to decrypt them because the crypto module is not initialized/enabled. Requires immediate attention to prevent communication failures for secure channels.
    *   [Link](https://github.com/sipeed/picoclaw/issues/3194)

## 6. Feature Requests & Roadmap Signals
*   **Simplex Channel Support (#3193):** Open. A new PR has been submitted adding support for the Simplex protocol. This suggests an expansion of supported messaging backends beyond traditional standards like Telegram and Matrix.
    *   [Link](https://github.com/sipeed/picoclaw/pull/3193)
*   **Channel-Specific Permissions:** While Issue #3114 was closed as stale, the demand for granular channel permissions (private vs. group vs. channel) remains a clear signal for future roadmap prioritization, especially given the integration of complex agents.

## 7. User Feedback Summary
Users are actively engaging with both security configurations and cross-platform compatibility. The resolution of the Windows path issue (#2472) addresses a long-standing friction point for Windows-based developers. Conversely, the Matrix encryption bug (#3194) highlights a gap in error handling for encrypted communications, causing confusion for users expecting seamless E2E encryption. The high interest in Telegram permission controls (#3114) underscores that users view PicoClaw not just as a personal assistant, but as a platform potentially deployed in shared or semi-public contexts requiring strict access control.

## 8. Backlog Watch
*   **Issue #3194 (Matrix Crypto):** Although newly opened today, this bug impacts core functionality for a significant subset of users (those using encrypted channels). It should be prioritized for the next patch release.
    *   [Link](https://github.com/sipeed/picoclaw/issues/3194)
*   **Issue #3114 (Telegram Permissions):** Marked as "stale" and closed, but the underlying requirement for security boundaries in multi-user channels is valid. Maintainers should monitor if similar requests arise for other channels (e.g., Discord, Slack) to ensure consistent permission models across all integrations.
    *   [Link](https://github.com/sipeed/picoclaw/issues/3114)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-28
**Source:** github.com/qwibitai/nanoclaw

### 1. Today's Overview
The NanoClaw project is experiencing high development velocity with 8 open Pull Requests updated in the last 24 hours, indicating active maintenance and feature expansion. However, there are zero merged PRs and no new releases, suggesting the codebase is currently in a pre-merge review phase. Community engagement remains focused on stability fixes and operational improvements, with one significant bug report regarding skill updates driving recent discussion. The project appears healthy but in a "hold" state awaiting maintainer reviews before new capabilities or fixes go live.

### 2. Releases
*   **No new releases** were published on this date.
*   *Note:* The community is waiting for the resolution of Issue #2868, which blocks effective skill updates, potentially delaying the next release cycle.

### 3. Project Progress
While no PRs were merged today, several critical areas are being actively addressed in open PRs:
*   **Skill Management Fix:** PR #2873 addresses the critical bug where `/update-skills` fails to refresh code for existing channels, directly resolving Issue #2868.
*   **Stability Improvements:** PR #2874 aims to prevent crash-loops in Signal CLI during boot flaps, enhancing runtime reliability.
*   **Architecture Cleanup:** PRs #2822, #2823, and #2824 focus on refactoring container runners, removing stale host files, and cleaning up seed prompts, improving long-term maintainability.
*   **New Features:** PR #2872 introduces per-group model overrides, and PR #2871 adds dashboard telemetry pushing, expanding observability and configuration flexibility.

### 4. Community Hot Topics
*   **Issue #2868:** *[Open]* "/update-skills is a silent no-op..."
    *   **Link:** [nanocoai/nanoclaw Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868)
    *   **Analysis:** This is the highest-severity discussion point. Users rely on skill updates for security and functionality; a silent failure erodes trust. The existence of PR #2873 indicates the community has already proposed a solution, which is now pending review.
*   **PR #2875:** *[Open]* "Deploy/coolify"
    *   **Link:** [nanocoai/nanoclaw PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875)
    *   **Analysis:** Reflects ongoing interest in streamlined deployment workflows, specifically integrating with Coolify for self-hosted ease-of-use.

### 5. Bugs & Stability
Ranked by severity based on reported impact:
1.  **Critical:** `/update-skills` skipping code/dep refresh for installed channels.
    *   *Status:* Reported in Issue #2868. Fix proposed in PR #2873.
2.  **High:** Signal CLI crash-looping on boot flaps.
    *   *Status:* Reported in PR #2874 (fix in progress).
3.  **Medium:** Stale "Global Memory" instructions in seed prompts causing confusion.
    *   *Status:* Addressed in PR #2824.
4.  **Low:** Host deleting `groups/global/CLAUDE.md` on startup.
    *   *Status:* Addressed in PR #2823.

### 6. Feature Requests & Roadmap Signals
*   **Per-Group Model Overrides (PR #2872):** Allows granular control over which LLM backend handles specific agent groups. This suggests a roadmap toward multi-model orchestration and cost optimization.
*   **Dashboard Telemetry (PR #2871):** Introduction of a pusher for state snapshots to an external dashboard server indicates a push towards better observability and monitoring for self-hosted instances.
*   **Prediction:** The next release will likely include these operational features (telemetry, model overrides) and the critical skill update fix, contingent on maintainer approval.

### 7. User Feedback Summary
*   **Pain Points:** The primary dissatisfaction stems from the broken update mechanism (Issue #2868). Users expect `/update-skills` to behave predictably; its silent failure forces manual intervention or reinstallations.
*   **Use Cases:** Heavy usage of containerized agents (OpenCode) with diverse model requirements, necessitating the features in PR #2872.
*   **Satisfaction:** Positive reception of cleanup efforts (PRs #2822-2824) suggests users appreciate maintenance that reduces technical debt and improves stability.

### 8. Backlog Watch
*   **PR #2822, #2823, #2824:** Created on 2026-06-20 by `CutSnake01`. These have been open for 8 days with no merge. They are low-risk refactors that should be prioritized to clear the backlog.
*   **PR #2875:** Created on 2026-06-27. As a deployment-related change, it may require more extensive testing or configuration review before merging.
*   **Maintainer Attention Needed:** The bottleneck is clearly the review queue. With 8 open PRs and 0 merges, maintaining momentum will require timely reviews, particularly for the bug fixes addressing #2868 and #2874.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-06-28

### 1. Today's Overview
NullClaw is experiencing low but targeted development activity on June 28, 2026, with no new releases issued. The project maintains a steady pace with one new pull request opened today focusing on agent workflow structuring and one persistent bug report regarding Android/Termux builds. Community engagement remains stable, with the primary focus shifting from immediate stability fixes to enhancing the agent's interaction logic through structured approval flows.

### 2. Releases
No new releases were published in the last 24 hours. The latest known version referenced in issue discussions remains `v2026.4.17`.

### 3. Project Progress
*   **New Feature Development:** Pull Request **#969** was opened today by `valonmulolli`. This PR introduces a "structured approval_request / approval_response flow" for the shell tool. It implements a two-turn mechanism where the agent catches `error.ApprovalRequired`, stores the pending state, and emits an event via Server-Sent Events (SSE) to render a specific UI for user confirmation. This represents a significant step toward safer, more controllable autonomous agent interactions.

### 4. Community Hot Topics
*   **Issue #868:** [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat
    *   **Link:** [nullclaw/nullclaw Issue #868](https://github.com/nullclaw/nullclaw/issues/868)
    *   **Activity:** Open since April 23, 2026, with 4 comments. Last updated yesterday (June 27).
    *   **Analysis:** This issue highlights a critical compatibility gap for mobile Linux environments (Termux/LineageOS). While it has no new reactions today, its persistence suggests a need for better cross-platform build configuration handling in Zig, specifically regarding file linking permissions on restricted Android subsystems.

### 5. Bugs & Stability
*   **High Severity:** **Issue #868** reports a build failure (`AccessDenied` during link phase) when compiling `nullclaw` on Android Termux (aarch64) using Zig 0.16.0. This blocks usage for a specific segment of users interested in running AI agents on mobile devices. No associated fix PR was observed today.

### 6. Feature Requests & Roadmap Signals
*   **Structured Agent Control:** The opening of **PR #969** signals a roadmap direction toward "human-in-the-loop" architectures. By implementing explicit approval steps for dangerous tools (like shell execution), the project is addressing safety concerns inherent in autonomous AI agents. This feature is likely to be a core component of the next minor release, emphasizing security and user control over raw automation.

### 7. User Feedback Summary
*   **Mobile Compatibility Pain Points:** Users on Android/Termux are actively seeking ways to run NullClaw locally. The detailed environment report in Issue #868 indicates that users are attempting to compile from source rather than relying on pre-built binaries, suggesting a demand for official mobile-compatible releases or clearer Docker/containerized deployment guides for Termux.
*   **Safety Concerns:** The community interest in the approval flow (PR #969) reflects a broader user desire for transparency and control over agent actions, particularly those involving system-level commands.

### 8. Backlog Watch
*   **Issue #868:** This bug has been open for nearly two months (since April 23, 2026) without a merged fix. Maintainers should prioritize addressing this Zig build configuration issue for Termux/aarch64 to support the growing mobile Linux user base.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-06-28
**Source:** GitHub (nearai/ironclaw)

## 1. Today's Overview
The IronClaw project is experiencing high-intensity development activity focused on the "Reborn" stack, specifically around implementing granular capability policies and user role management. In the last 24 hours, the team processed 50 pull requests and addressed 11 issues, indicating a rapid iteration cycle for core architectural components. The primary focus has shifted from general bug fixing to establishing the foundational security and permission layers (`ironclaw_capability_policy`) required for multi-user admin/shared tool scenarios. While no new releases were published, significant internal refactoring and integration test framework additions suggest preparation for an upcoming major version increment.

## 2. Releases
**No new releases published today.**

However, PR #5311 indicates an imminent release cycle involving several API-breaking changes:
*   `ironclaw_common`: 0.4.2 -> 0.5.0 (⚠ API breaking)
*   `ironclaw_skills`: 0.3.0 -> 0.4.0 (⚠ API breaking)
*   `ironclaw`: 0.24.0 -> 0.29.1
*   [View Release PR #5311](https://github.com/nearai/ironclaw/pull/5311)

## 3. Project Progress
Significant progress was made in the **Reborn Capability Policy** epic (#5261), with multiple sub-components merged or actively reviewed:
*   **Policy Model & Engine:** PRs #5262 and #5344 implemented the core `ironclaw_capability_policy` crate, including the four-dimension policy model (config, identity, approval, availability) and the delta store resolver.
*   **User Roles:** PR #5270 introduced DB-backed user roles (Owner/Admin/Member) on the WebChat-v2 caller, a prerequisite for admin-gated permissions.
*   **Control Plane:** PR #5355 merged the REST surface for admin grants, completing the chain for manual permission assignment.
*   **Testing Infrastructure:** PR #5381 established a new in-process integration-test framework for the Reborn stack, allowing full-turn testing without external mocks.
*   **WebUI Fixes:** PR #5365 fixed the "Retry" button in WebUI v2, and PR #5371 ported legacy browser coverage for chat history.
*   **Node Tooling:** PR #5384 pinned frontend Node tooling to v22 to ensure build consistency.

## 4. Community Hot Topics
*   **Capability Policy Implementation (Issue #5261):** The epic tracking admin-shared tools with per-user auth is the central theme. Users and contributors are heavily engaged in defining how roles map to tool access.
    *   [Issue #5261](https://github.com/nearai/ironclaw/issues/5261)
*   **Google OAuth Token Refresh Failure (Issue #5378):** A critical usability issue where hosted/single-tenant instances force re-authentication every ~1 hour due to backend unavailability.
    *   [Issue #5378](https://github.com/nearai/ironclaw/issues/5378)
*   **Notion OAuth Redirect Bug (Issue #4928):** Deployment-specific issue where Railway hosts redirect to localhost, breaking integration.
    *   [Issue #4928](https://github.com/nearai/ironclaw/issues/4928)
*   **Default Permission Behavior (Issue #5364):** Request to make "Always allow eligible tools" the default, reducing friction for new users.
    *   [Issue #5364](https://github.com/nearai/ironclaw/issues/5364)

## 5. Bugs & Stability
Ranked by severity based on impact on deployment and user experience:

1.  **High Severity: Google OAuth Token Expiry (Issue #5378)**
    *   *Description:* `BackendUnavailable` errors cause frequent re-auth loops in hosted/local-dev profiles.
    *   *Status:* Open. Requires investigation into token storage/retrieval in the Reborn stack.
    *   [Link](https://github.com/nearai/ironclaw/issues/5378)

2.  **Medium Severity: Nightly E2E Failures (Issue #4108)**
    *   *Description:* Scheduled E2E workflows are failing, specifically in extension testing.
    *   *Status:* Open. Indicates instability in the CI pipeline or recent regressions in extension handling.
    *   [Link](https://github.com/nearai/ironclaw/issues/4108)

3.  **Medium Severity: Hosted Volume Runtime Startup Regression (PR #5382)**
    *   *Description:* A previous PR (#5346) broke the `HostedSingleTenantVolume` startup.
    *   *Status:* Closed/Fixed by PR #5382, which restored the runtime substrate arm.
    *   [Link](https://github.com/nearai/ironclaw/pull/5382)

4.  **Low Severity: WebUI v2 Retry Button No-Op (PR #5365)**
    *   *Description:* The retry button existed but did not functionally re-send messages.
    *   *Status:* Closed/Fixed.
    *   [Link](https://github.com/nearai/ironclaw/pull/5365)

## 6. Feature Requests & Roadmap Signals
*   **Fine-Grained User Roles:** The massive effort behind Epic #5261 signals that the next major release will fully support distinct User/Role/Admin boundaries in the Reborn stack.
*   **Reduced Friction for Permissions:** Issue #5364 suggests users find per-call approval prompts tedious; making "Always Allow" the default is likely to be adopted to improve UX.
*   **Robust Integration Testing:** PR #5381 shows a roadmap commitment to higher quality assurance through in-process integration tests rather than just unit tests.
*   **CI/CD Matrix Expansion:** PR #5380 and #5354 indicate a push to broaden QA coverage for WebUI v2, including live canaries and spreadsheet-derived hermetic tests.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Deployment Complexity:** Users deploying via Railway are encountering OAuth redirect issues (#4928) and token refresh failures (#5378), suggesting the Reborn stack's cloud/hosted configurations need stabilization.
    *   **Auth Fatigue:** The hourly re-auth requirement for Google services is a significant blocker for continuous usage in hosted environments.
*   **Positive Signals:**
    *   The community is actively contributing to the new capability policy framework, indicating strong interest in multi-user/admin features.
    *   Contributors are engaging deeply with the new test frameworks, suggesting confidence in the project's direction toward enterprise-readiness.

## 8. Backlog Watch
*   **Issue #5385 [Open]: Add Capability Policy** - While much of the policy is merged, this issue tracks the specific state of the repo allowing fine-grained user configuration. It may need closure or update once the current PRs are fully integrated.
    *   [Link](https://github.com/nearai/ironclaw/issues/5385)
*   **Issue #4108 [Open]: Nightly E2E Failed** - Persistent CI failures require maintenance attention to prevent blocking future merges.
    *   [Link](https://github.com/nearai/ironclaw/issues/4108)
*   **Issue #5378 [Open]: Google OAuth Token Refresh Fails** - Critical bug for hosted users. No fix PR is currently listed in the top 20, requiring prioritization.
    *   [Link](https://github.com/nearai/ironclaw/issues/5378)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-06-28

### 1. Today's Overview
The LobsterAI project exhibits moderate development velocity with 8 Pull Requests updated (7 merged/closed) and 2 Active Issues requiring attention in the last 24 hours. There are no new releases published today, indicating a focus on stabilizing existing code rather than shipping new major features. The community is actively engaging with installation stability and core backend reliability issues, particularly regarding Windows environment conflicts and gateway crash loops. Maintainers have successfully addressed several critical bugs related to internationalization, scheduled task UI, and skill state synchronization.

### 2. Releases
*   **No new releases** were published on this date.

### 3. Project Progress
Significant progress was made in merging bug fixes and minor improvements today. Key merged/closed PRs include:
*   **MCP Transport Support (#1001):** Fixed a critical bug where SSE and streaming HTTP MCP transports were ignored because the server manager only enabled `stdio` types. This restores functionality for users relying on web-based MCP connections.
*   **Gateway Stability (#1446):** Resolved an infinite restart loop for the OpenClaw gateway caused by a race condition during process crashes. This prevents application paralysis after updates.
*   **i18n Corrections (#1448):** Fixed hardcoded English strings in the Agent Settings panel and Skill Selector, ensuring proper localization support.
*   **UI/UX Improvements (#1449, #1456):** Implemented folding for scheduled task execution records to reduce sidebar clutter and added duplicate key detection for shortcuts to prevent silent failures.
*   **Skill Logic Fixes (#1453, #1454):** Corrected issues where disabled skills still injected prompts into conversations and where the scheduled task form failed silently when dates were cleared.

### 4. Community Hot Topics
The most discussed topics revolve around installation reliability and data integrity:
*   **Installation Resource Extraction Failures (Issue #2215):** A user detailed a complex troubleshooting path involving NSIS logs and environment variables (`ERROR_BAD_ENVIRONMENT`) to resolve persistent installation failures. *Link: [Issue #2215](https://github.com/netease-youdao/LobsterAI/issues/2215)*
    *   *Analysis:* Highlights the need for more robust installer error handling and clearer diagnostic logs for non-standard Windows environments (e.g., custom paths, security software interference).
*   **Agent ID Generation Strategy (PR #2065):** A discussion on switching from name-based IDs to short UUIDs to prevent "data resurrection" when deleting and recreating agents. *Link: [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065)*
    *   *Analysis:* Reflects a strong user need for predictable and isolated data management, ensuring that deleting an agent truly purges its associated sessions and workspaces.

### 5. Bugs & Stability
Several high-severity stability issues were addressed or reported:
*   **Critical: Gateway Infinite Loop (Resolved via PR #1446):** The OpenClaw gateway entering an infinite restart cycle upon failure has been fixed. This was a major blocker for stability after version upgrades.
*   **High: Backup Process Freeze (Issue #2214):** Users report that using the "Data Backup" feature causes the main process to become unresponsive ("Not Responding") on Windows 11. The issue is 100% reproducible and requires force-quitting the app. *Link: [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214)*
    *   *Note:* No fix PR is currently linked for this specific issue; it remains open.
*   **Medium: Disabled Skills Still Active (Resolved via PR #1453):** Previously, disabling a skill did not remove it from the active prompt injection list. This logic error has been corrected.
*   **Medium: Silent Form Failures (Resolved via PR #1454):** The scheduled task creation form failed silently when date inputs were cleared. Input validation is now improved.

### 6. Feature Requests & Roadmap Signals
*   **Robust Data Cleanup (Signal from PR #2065):** The proposal to use UUIDs instead of names implies a roadmap shift toward stricter data isolation. Future versions may include automated cleanup routines for orphaned sessions and workspaces when agents are deleted.
*   **Enhanced Installer Diagnostics (Signal from Issue #2215):** Users are requesting better feedback during installation failures. The community interest in detailed log analysis suggests a future feature could include an "Installer Health Check" tool within the app.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Installation Complexity:** Users struggle with vague error codes like `ERROR_BAD_ENVIRONMENT` and need clearer guidance on resolving conflicts with security software or non-default drive installations.
    *   **UI Clutter:** Scheduled tasks accumulating in the sidebar disrupt workflow, prompting requests for better grouping/folding mechanisms.
    *   **Backup Reliability:** The freeze during backup operations is a significant friction point for users managing large databases.
*   **Satisfaction:** Users appreciate the rapid turnaround on bug fixes (e.g., the gateway crash loop and skill state sync) and the attention to detail in i18n and shortcut conflicts.

### 8. Backlog Watch
*   **Installation Troubleshooting (Issue #2215):** While the specific user found a workaround, the underlying cause of `Resource extraction failed` across different environments needs a systemic fix in the NSIS installer script.
*   **Backup Crash (Issue #2214):** This is a high-priority stability bug affecting data safety workflows. It requires immediate investigation by the engineering team to prevent main process hangs.
*   **Orphaned Data Cleanup (Linked in PR #2065):** The PR mentions that deleting agents currently leaves behind `cowork_sessions` and other data. Implementing a comprehensive deletion handler should be prioritized alongside the ID generation change.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-06-28
**Source:** github.com/moltis-org/moltis

## 1. Today's Overview
The Moltis project maintains a steady development pace with low but consistent daily activity. In the last 24 hours, there was 1 new issue update and 2 pull requests opened, with no merges or new releases. The focus remains heavily on improving compatibility with smaller, local AI models (specifically Gemma 4 and oMLX) by refining input validation and error tolerance. While no critical stability regressions were reported today, ongoing efforts to handle non-standard JSON outputs from local agents indicate a strong push toward robustness in edge-case scenarios.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Two significant Pull Requests are currently open, both authored by `resumeparseeval`, targeting improved handling of tool arguments from smaller language models:
*   **PR #1136**: Addresses issues where small models stringify scalar values (e.g., `"true"` instead of `true`) in tool arguments, requiring coercion before validation.
*   **PR #1098**: Fixes a parsing bug where models explicitly send `null` for optional parameters, which `serde`'s default behavior does not cover.

These PRs aim to enhance the reliability of Moltis when integrated with resource-constrained local models like Gemma 4.

## 4. Community Hot Topics
*   **[Issue #1137] Apple Container ID exceeds name limit**
    *   *Link:* [moltis-org/moltis Issue #1137](https://github.com/moltis-org/moltis/issues/1137)
    *   *Analysis:* This is the only active issue reported today. It highlights a platform-specific constraint regarding container naming conventions on Apple hardware. Although it has no comments yet, the specific nature suggests it may impact users running Moltis in containerized environments on macOS.

## 5. Bugs & Stability
*   **[Bug] Apple Container ID exceeds name limit (#1137)**
    *   *Severity:* Medium (Platform-specific limitation).
    *   *Details:* Reported by `holgzn`. The issue arises when the generated Apple Container ID surpasses the allowed character limit for names. No associated fix PR exists yet.
*   **[Potential Bug] Local Model JSON Serialization (#1136, #1098)**
    *   *Severity:* High (Impacts core functionality with specific models).
    *   *Details:* Two open PRs address bugs where local models (Gemma 4/oMLX) emit malformed JSON structures (stringified scalars or explicit nulls) that break current validation logic. These are being actively addressed by the contributor `resumeparseeval`.

## 6. Feature Requests & Roadmap Signals
*   **Enhanced Local Model Compatibility:** The repeated fixes for Gemma 4 and oMLX inputs signal a roadmap commitment to supporting smaller, local-first AI agents more effectively. Future updates will likely prioritize better schema coercion and tolerance for non-standard LLM outputs.

## 7. User Feedback Summary
*   **Pain Points:** Users are encountering friction when using Moltis with smaller local models due to inconsistent JSON formatting (stringified booleans/integers and explicit nulls).
*   **Satisfaction:** The active contribution from `resumeparseval` suggests a responsive community or dedicated maintainer working to resolve these interoperability gaps.
*   **Use Cases:** Primary use cases involve agentic workflows relying on local inference engines, where strict JSON validation often fails against imperfect model outputs.

## 8. Backlog Watch
*   **Issue #1137:** Requires maintainer attention to determine if the container ID generation logic needs adjustment for Apple platforms or if documentation/workarounds should be provided.
*   **PR #1098:** Although created on 2026-06-03, it was updated recently (2026-06-27). Maintainers should review this PR soon to ensure the `null` parameter handling is merged, preventing potential crashes in browser tool calls.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-06-28
**Source:** GitHub (agentscope-ai/CoPaw)

## 1. Today's Overview
The CoPaw project demonstrates high development velocity with **14 Pull Requests** and **5 Issues** updated in the last 24 hours. Activity is heavily skewed toward internal quality assurance, specifically a massive push to increase backend and frontend unit test coverage across multiple sprints. While no new releases were published today, significant bug fixes related to provider compatibility (DeepSeek V4) and plugin installation stability indicate active maintenance of the core infrastructure. The community remains engaged with questions regarding custom model integration (Ascend-vLLM) and UI usability.

## 2. Releases
*   **No new releases.**
*   *Note:* The project is currently stabilizing the Agentscope 2.0 migration, which may delay public release cycles in favor of ensuring internal test coverage and compatibility fixes.

## 3. Project Progress
**Merged/Closed Items:**
*   **[PR #5213]** Fixed MCP access policy layout responsiveness.
*   **[Issue #5580]** Closed as part of the backend unit test coverage sprint (W3).

**Key Advancements & Fixes:**
*   **Plugin Ecosystem Stabilization:** **[PR #5568]** addresses critical failures in installing official plugins on QwenPaw 2.0 caused by breaking changes in the Agentscope 1.x to 2.0 migration.
*   **Provider Compatibility:** **[PR #5582]** resolves streaming `reasoning_content` errors for non-official endpoints, directly supporting Issue #5573.
*   **Testing Infrastructure Expansion:** A coordinated effort by contributor `hanson-hex` has added extensive unit tests:
    *   Backend: Cron module (**[PR #5423]**), Runner module (**[PR #5422]**), and App Infra (**[PR #5581]**).
    *   Frontend: Console Stores/Hooks (**[PR #5409]**), Agent Hooks/Settings (**[PR #5434]**), and Inbox/API modules (**[PR #5438]**).
*   **Desktop Client Fix:** **[PR #5578]** corrects the Tauri bootstrap verification flow on Windows/macOS by managing the `BOOTSTRAP.md` lifecycle.
*   **New Features in Review:**
    *   Matrix Channel Streaming Mode (**[PR #5585]**).
    *   Generalized Governance Policy Pattern (**[PR #5546]**).
    *   Data Analysis Plugin "DataPaw" (**[PR #4622]**, long-standing).
    *   Sub-agent Runtime Registration (**[PR #5524]**).

## 4. Community Hot Topics
*   **DeepSeek V4 Endpoint Compatibility (Issue #5573):**
    *   *Link:* [agentscope-ai/QwenPaw Issue #5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)
    *   *Analysis:* Users are encountering 400 errors when using OpenAI-compatible proxies for DeepSeek V4's thinking mode. This highlights a growing need for robust handling of non-standard LLM responses (specifically missing `reasoning_content` fallbacks). The existence of a corresponding fix PR (**#5582**) suggests the maintainers are actively addressing this fragmentation in the provider landscape.
*   **Ascend-vLLM Integration Failure (Issue #5584):**
    *   *Link:* [agentscope-ai/QwenPaw Issue #5584](https://github.com/agentscope-ai/QwenPaw/issues/5584)
    *   *Analysis:* Regression in connecting to custom Ascend-vLLM models post-upgrade. This indicates potential breaking changes in the networking or connection pooling logic during the 1.x to 2.0 transition, affecting enterprise or specialized hardware deployments.
*   **UI/UX Polish (Issue #5583):**
    *   *Link:* [agentscope-ai/QwenPaw Issue #5583](https://github.com/agentscope-ai/QwenPaw/issues/5583)
    *   *Analysis:* Minor but visible issue regarding low contrast in the chat interface selection background, reflecting user sensitivity to visual accessibility.

## 5. Bugs & Stability
Ranked by severity based on user impact:

1.  **High Severity: Conversation Data Loss (Issue #5579)**
    *   *Link:* [agentscope-ai/QwenPaw Issue #5579](https://github.com/agentscope-ai/QwenPaw/issues/5579)
    *   *Description:* Dialogue history is permanently lost upon host reboot or service crash due to lack of checkpoint persistence. This is a critical stability flaw for production agents.
    *   *Status:* Open. No immediate fix PR identified in the 24h window.
2.  **Medium Severity: Plugin Installation Failures (Issue #5568 context)**
    *   *Link:* [agentscope-ai/QwenPaw PR #5568](https://github.com/agentscope-ai/QwenPaw/pull/5568)
    *   *Description:* Official plugins fail to install on QwenPaw 2.0 due to dependency breaks.
    *   *Status:* Fix PR submitted and under review.
3.  **Medium Severity: Provider Streaming Errors (Issue #5573 context)**
    *   *Link:* [agentscope-ai/QwenPaw PR #5582](https://github.com/agentscope-ai/QwenPaw/pull/5582)
    *   *Description:* 400 errors when streaming reasoning content from third-party DeepSeek endpoints.
    *   *Status:* Fix PR submitted.
4.  **Low Severity: Tauri Bootstrap Verification (Issue #5578 context)**
    *   *Link:* [agentscope-ai/QwenPaw PR #5578](https://github.com/agentscope-ai/QwenPaw/pull/5578)
    *   *Description:* Desktop client verification loop issues on Windows/macOS.
    *   *Status:* Fix PR submitted.

## 6. Feature Requests & Roadmap Signals
*   **Governance & Policy:** **[PR #5546]** suggests a move toward abstracting governance policies, indicating a roadmap focus on customizable agent control and safety layers.
*   **Multi-Platform Messaging:** **[PR #5585]** (Matrix Streaming) shows continued expansion beyond Discord, aiming for parity in real-time features across communication channels.
*   **Domain-Specific Plugins:** **[PR #4622]** (DataPaw) remains open, signaling strong community interest in pre-built, vertical-specific agent capabilities (BI/Data Analysis).
*   **Agentic Architecture:** **[PR #5524]** improves sub-agent spawning, suggesting the roadmap prioritizes complex, multi-step agentic workflows over simple chat interfaces.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Fragility of State:** Users are frustrated by the loss of conversation history during unexpected interruptions (crashes/reboots), viewing it as a barrier to reliable automation ([Issue #5579]).
    *   **Migration Friction:** The transition to Agentscope 2.0 has introduced regressions in connectivity (Ascend-vLLM) and plugin installation, causing friction for existing users upgrading their environments.
    *   **Proxy Compatibility:** Non-official LLM providers (like DeepSeek via proxies) require specific workarounds that the default configuration does not handle gracefully out-of-the-box ([Issue #5573]).
*   **Satisfaction:**
    *   Positive reception of the active testing initiative, which implies a more stable foundation for future releases.
    *   Appreciation for the responsive fix to the Tauri desktop client issues.

## 8. Backlog Watch
*   **Critical:** **[Issue #5579]** - Lack of checkpoint persistence for conversations. This is a fundamental reliability issue that must be addressed before the project can be considered stable for long-running autonomous agents.
*   **Stalled:** **[PR #4622]** - DataPaw Plugin. Open since May 22, 2026. Despite being a valuable feature addition, it has been in review for over a month, potentially blocking a popular user-contributed extension.
*   **Monitoring:** **[PR #5584]** - Ascend-vLLM connection regression. While a question, it points to a broader compatibility issue with specific hardware backends that may affect other enterprise users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-06-28
**Source:** github.com/zeroclaw-labs/zeroclaw

## 1. Today's Overview
ZeroClaw demonstrates high development velocity with 45 active issues and 50 pull requests updated in the last 24 hours, indicating robust community and maintainer engagement. The project is heavily focused on security hardening (supply chain signing, WASM plugin runtime) and expanding ecosystem integrations (MCP support, Inkbox channel, WhatsApp groups). While no new official releases were published today, significant architectural shifts regarding plugin permissions and provider models are being actively debated via RFCs. The overall health is strong, with a clear transition toward a more secure, modular, and interoperable agent framework.

## 2. Releases
*   **No new releases.**
*   *Note:* Release pipeline security hardening (cosign, SLSA provenance) is currently in PR stage (#8404).

## 3. Project Progress
Key advancements and fixes merged or actively progressing today include:
*   **Security & Supply Chain:** Implementation of cosign signing, SBOM generation, and SLSA provenance in the release pipeline is underway (PR #8404).
*   **MCP Integration:** Major strides made in expanding Model Context Protocol (MCP) support beyond tools to include resources and prompts (PR #8403) and enabling MCP in standalone ACP sessions (PR #8237).
*   **Channel Expansions:** Addition of the Inkbox channel for email/SMS/voice/iMessage (PR #8384) and opt-in passive group context for WhatsApp Web (Issue #8379).
*   **Runtime Fixes:** Critical fixes applied to heartbeat task reading from the correct workspace (PR #8402) and suppression of `NO_REPLY` sentinel text in cron/heartbeat deliveries (PR #8405).
*   **Agent Loop Stability:** Fix implemented to prevent counting failed tool results as "no progress" in loop detection (PR #8213).

## 4. Community Hot Topics
The following topics are driving the most discussion and engagement:

*   **Supply Chain Security & SLSA Provenance**
    *   *Issue:* [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) (10 comments)
    *   *Analysis:* High demand for hardware-backed PGP keys and hermetic builds. Reflects a growing community concern for enterprise-grade security and trustworthiness of agent binaries.
*   **WASM-First Plugin Runtime**
    *   *Issue:* [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) (2 comments, but high risk/priority)
    *   *Analysis:* Strategic shift to eliminate Node.js from the build/runtime. Indicates a push for performance, security isolation, and reduced attack surface.
*   **Goal Mode for Autonomous Work**
    *   *Issue:* [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (3 comments)
    *   *Analysis:* Users are requesting a durable mode for long-running objectives, moving beyond simple turn-based interactions to sustained autonomous task completion.
*   **MCP Resource and Prompt Support**
    *   *Issue:* [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) (3 comments, 4 👍)
    *   *Analysis:* Strong community interest in unlocking the full potential of MCP servers, suggesting users are building complex integrations requiring more than just tool execution.

## 5. Bugs & Stability
Reported bugs and their status:

1.  **[Bug]: Default 32k context budget exceeded by system prompt**
    *   *Issue:* [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)
    *   *Severity:* **High (S1 - Workflow Blocked)**. Perpetual preemptive trimming on fresh conversations.
    *   *Status:* Open/In-Progress.
2.  **[Bug]: Heartbeat engine reads HEARTBEAT.md from data_dir instead of agent workspace**
    *   *Issue:* [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366)
    *   *Severity:* Medium (S2 - Degraded Behavior).
    *   *Fix:* PR [#8402](https://github.com/zeroclaw-labs/zeroclaw/pull/8402) addresses this by resolving the canonical workspace directory.
3.  **[Bug]: Cron and heartbeat delivery sends NO_REPLY sentinel text**
    *   *Issue:* [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)
    *   *Severity:* Medium. Noisy notifications.
    *   *Fix:* PR [#8405](https://github.com/zeroclaw-labs/zeroclaw/pull/8405) skips the sentinel in delivery.
4.  **[Bug]: Memory embeddings do not refresh provider profile changes**
    *   *Issue:* [#8359](https://github.com/zeroclaw-labs/zeroclaw/issues/8359)
    *   *Severity:* Medium.
    *   *Status:* Open. Requires investigation into memory backend config reloading.

## 6. Feature Requests & Roadmap Signals
*   **Plugin Permission Model Overhaul:** RFC [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) proposes moving beyond coarse-grained permissions to fine-grained capability enforcement, likely for v0.9.0.
*   **Wire-Protocol-First Provider Model:** RFC [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) suggests restructuring providers around `wire_api`, indicating a major architectural refactoring for v0.9.0.
*   **OpenRouter Fallbacks:** Feature request [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) for automatic model failover arrays, improving reliability for users relying on OpenRouter.
*   **Skill Change Observability:** Feature request [#8348](https://github.com/zeroclaw-labs/zeroclaw/issues/8348) for CRUD hooks on skills, enabling external monitoring and automation of skill management.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the `NO_REPLY` text leaking into channels, causing noise (Issue #2128). There is also confusion regarding context window limits due to system prompt overhead (Issue #5808).
*   **Use Cases:** Heavy interest in autonomous, long-running tasks ("Goal Mode") and complex multi-agent setups requiring robust delegation and memory persistence.
*   **Satisfaction:** Positive reception towards the expansion of channel options (Inkbox, WhatsApp groups) and deeper MCP integration, which enables more sophisticated agent behaviors.

## 8. Backlog Watch
*   **Maintainer Review Needed:** Several high-risk RFCs and features require maintainer attention:
    *   RFC: Supply chain signing (#8177)
    *   RFC: Wasm-first plugin runtime (#8135)
    *   RFC: Plugin permission model (#8398)
    *   RFC: Wire-Protocol-First Provider Model (#8396)
    *   Feature: Publish full-channel prebuilt assets (#7952)
*   **Long-Standing Issues:**
    *   Issue #5808 (Context budget bug) has been open since April 2026 and remains a critical blocker for default configurations.
    *   Issue #2128 (NO_REPLY leak) has been open since February 2026.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*