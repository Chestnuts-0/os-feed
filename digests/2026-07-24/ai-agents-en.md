# OpenClaw Ecosystem Digest 2026-07-24

> Issues: 321 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-24 01:46 UTC

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

# OpenClaw Project Digest: 2026-07-24

## 1. Today's Overview
OpenClaw is experiencing extremely high activity levels today, with 321 issues and 500 pull requests updated in the last 24 hours. The project is currently in a critical stabilization phase following the recent release of v2026.7.1/7.2, evidenced by numerous regression reports regarding session state, gateway startup failures, and cron tool incompatibilities. While there are no new stable releases today, the development velocity is intense, focusing heavily on fixing "silently lost" messages, session context bloat, and channel-specific rendering bugs. The community is actively engaging with complex multi-agent orchestration issues and security permission models.

## 2. Releases
**No new stable releases were published today.**

However, several **beta/regression fixes** are being actively merged or tested in response to the v2026.7.x series:
*   **v2026.7.2-beta.3**: Reported regressions in Telegram DM reply routing (Issue #111519).
*   **Gateway Fixes**: Immediate patches for gateway startup failures on systemd/ollama setups (Issue #108435) and cron schema compatibility with llama.cpp grammar-constrained calling (Issue #108580).

## 3. Project Progress
Today’s PR activity indicates a strong push toward improving observability, cross-platform UI consistency, and channel fidelity.

*   **Observability & Tracing**:
    *   **PR #113189**: Implemented WebSocket request trace context acceptance, allowing correlation of RPCs with upstream OpenTelemetry/Langfuse traces.
    *   **PR #112991**: Continued trusted HTTP trace context support for offline evaluation runners.
*   **Channel & UI Enhancements**:
    *   **PR #113199**: Added native support for Matrix spoilers, underlines, and tables.
    *   **PR #113173**: Introduced a suggestion queue and typing indicator for `suggest-visibility` sessions, improving multi-user collaboration safety.
    *   **PR #113187**: Fixed iOS release screenshots stalling in Settings (XCTest quiescence stalls).
    *   **PR #113057**: Fixed iOS assistant media attachment rendering (images now appear in transcript UI).
*   **Cron & Automation Stability**:
    *   **PR #113198**: Fixed `cron.remove` failing to stop active background jobs and clean config files.
    *   **PR #112661**: Fixed isolated Cron jobs losing authorized tools when sender identity was missing.
*   **Security & Permissions**:
    *   **PR #92307**: Added warnings when host approvals clamp exec security policies at startup.
    *   **PR #112686**: Standardized approval prompt text rendering across all channels (Discord, Slack, Telegram, etc.).

## 4. Community Hot Topics
The most discussed topics revolve around **message loss**, **session state integrity**, and **token efficiency**.

*   **[Bug] Subagent completion silently lost** (Issue #44925):
    *   *Activity*: 22 comments, 🦞 Diamond Lobster rating.
    *   *Analysis*: Users are frustrated that subagent timeouts result in silent data loss without retry or notification. This highlights a critical gap in error handling for asynchronous agent tasks.
*   **[Feature] Everything is a cron — unify heartbeat, watchers, and scheduled automation** (Issue #110950):
    *   *Activity*: 9 comments.
    *   *Analysis*: A strategic proposal to simplify the automation architecture by unifying disparate scheduling primitives into a single cron-based model.
*   **[Bug] Second message in a session fails with "reply session initialization conflicted"** (Issue #102020):
    *   *Activity*: 15 comments.
    *   *Analysis*: A cross-channel bug affecting Signal and Telegram, indicating deep issues in session key generation or initialization logic during rapid multi-turn interactions.
*   **[Bug] Native Anthropic path: replaying historical `thinking` blocks bricks long tool-use threads** (Issue #94228):
    *   *Activity*: 14 comments, 🐚 Platinum Hermit rating.
    *   *Analysis*: Critical failure mode for users of Anthropic's native API path, where long-lived sessions eventually brick due to signature validation errors in thinking blocks.

## 5. Bugs & Stability
Severity is rated based on impact (data loss, crash loops, release blockers).

1.  **[P0] Gateway fails to start after update to 2026.7.1** (Issue #108435)
    *   *Impact*: Complete service outage for affected users.
    *   *Status*: Open. Likely related to configuration migration or dependency conflicts.
2.  **[P0] Upgrading from 5.28 → 6.1: Cron store migrated silently, new jobs default to delivery.mode=announce causing channel errors** (Issue #90378)
    *   *Impact*: Data loss/Configuration corruption during upgrades.
    *   *Status*: Open. Requires urgent documentation or migration fix.
3.  **[P1] Subagent completion silently lost** (Issue #44925)
    *   *Impact*: Silent failure of autonomous workflows.
    *   *Status*: Open. High priority for reliability.
4.  **[P1] Cron tool schema incompatible with llama.cpp grammar-constrained tool calling** (Issue #108580)
    *   *Impact*: Breaks local LLM integration (llama.cpp) for scheduling.
    *   *Status*: Open. Regression from 2026.7.1.
5.  **[P1] All channels enter broken state after 2026.6.11 update** (Issue #101814)
    *   *Impact*: Permanent silence after one message per session.
    *   *Status*: Open. Indicates a persistent state leak or lock issue.
6.  **[P1] MCP loopback transport does not auto-reconnect after gateway restart** (Issue #98435)
    *   *Impact*: Disruption of Claude Code CLI workflows.
    *   *Status*: Open.
7.  **[Regression] Telegram DM replies fall back after stale DM-scope cleanup** (Issue #111519)
    *   *Impact*: Loss of source-reply ownership in Telegram.
    *   *Status*: Open. Beta regression (2026.7.2-beta.3).

## 6. Feature Requests & Roadmap Signals
*   **Unified Cron Primitive** (Issue #110950): Strong signal to refactor internal automation logic. If adopted, this will simplify user configuration for heartbeats and watchers.
*   **Skill Permission Manifest** (Issue #12219): Growing demand for security transparency in skill installation. Users want to review permissions before installing third-party skills.
*   **Context Window % Injection** (Issue #38568): Users want agents to be aware of their remaining context window to manage long conversations more effectively.
*   **Session TTL / Auto-Rotation** (Issue #45390): Request for automatic session rotation to prevent context bloat and provider limits.
*   **Pre-compaction Agent Notification** (Issue #38520): Demand for safer context compaction that allows agents to finish critical tasks before truncation.

## 7. User Feedback Summary
*   **Frustration with "Silent" Failures**: Multiple top issues (#44925, #90378, #101814) complain about errors that do not notify the user or provide recovery mechanisms. Users need explicit feedback when subagents fail or sessions break.
*   **Token Waste Concerns**: Issue #67419 highlights that bootstrap files (MEMORY.md, SOUL.md, etc.) are re-injected every turn, wasting 20-30% of the context window. Users are sensitive to cost and efficiency.
*   **Cross-Channel Inconsistency**: Issues like #102020 and #91799 show that features working in CLI or one channel often fail in others (e.g., Discord MCP access, Feishu streaming latency).
*   **Complexity of Local LLM Integration**: Issues #108580 and #106657 suggest that integrating local providers (llama.cpp, sandboxed agents) remains fragile, particularly around schema compliance and fallback chains.

## 8. Backlog Watch
*   **Issue #67419**: Session context bloat due to repeated bootstrap injection. Needs product decision on whether to cache or stream these files differently.
*   **Issue #12219**: Skill Permission Manifest Standard. Long-standing feature request that addresses growing security concerns around third-party skills.
*   **Issue #43374**: Multi-agent concurrency causing simultaneous LLM API timeouts. Suggests a bottleneck in the gateway's connection pooling or rate limiting logic under load.
*   **Issue #42820**: Feishu send action polluted by poll schema. A niche but impactful bug for enterprise users in China.
*   **Issue #87325**: Support for Azure Foundry GPT Realtime Talk. A requested integration for enterprise cloud deployments.

---

## Cross-Ecosystem Comparison

# Cross-Project Open Source AI Agent Ecosystem Report
**Date:** 2026-07-24
**Prepared by:** Agnes-2.0-Flash (Sapiens AI)

## 1. Ecosystem Overview
The open-source personal AI agent landscape in mid-2026 is characterized by a shift from experimental prototypes to production-hardened, multi-channel orchestration platforms. Projects are aggressively addressing critical stability gaps, specifically around session state integrity, context window efficiency, and secure subprocess execution. While the market is fragmented across various architectural approaches—from Rust-based edge agents to Electron-based desktop hubs—there is a strong convergence on the need for robust inter-agent communication (A2A), granular security permissions, and seamless local/cloud model hybridity. The ecosystem is currently in a "stabilization and consolidation" phase, with developers prioritizing bug fixes and infrastructure reliability over new feature launches.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 321 | 500 | Stable (v2026.7.x) | High (Critical Stability) |
| **CoPaw** | 37 | 50 | Beta (v2.0.1-beta.2) | Medium (Performance Regressions) |
| **Hermes Agent** | 50 | 50 | No New Release | High (High Churn/Stability) |
| **NanoBot** | N/A | 37 | No New Release | High (Active Maintenance) |
| **IronClaw** | N/A | 50 | Pre-Launch (v1 Prep) | High (Integration Heavy) |
| **ZeroClaw** | 50 | 50 | No New Release | High (Security Hardening) |
| **Moltis** | 2 | 5 | Patch (v20260723.03) | Medium (Niche/Enterprise) |
| **NanoClaw** | N/A | 10 | No New Release | Medium (Container Stability) |
| **PicoClaw** | N/A | 15 | Maintenance Phase | Low-Medium (Edge Focus) |
| **LobsterAI** | 3 | 3 | Stale/Recent Merge | Low (Technical Debt) |
| **ZeptoClaw** | 2 | 0 | No New Release | Medium (Security Critical) |
| **NullClaw** | 0 | 0 | Inactive | Low |
| **TinyClaw** | 0 | 0 | Inactive | Low |

*\*Health Score reflects current stability, community engagement velocity, and resolution of critical bugs.*

## 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw dominates in sheer scale and channel fidelity, evidenced by its massive activity volume (321 issues, 500 PRs). It leads in cross-platform consistency, offering native support for complex channels like Matrix, Telegram, and Discord with high-fidelity rendering. Its technical approach emphasizes a unified "cron" primitive for automation and robust observability (OpenTelemetry/Langfuse integration), setting a standard for enterprise-grade telemetry.

**Technical Approach Differences:** Unlike NanoClaw or PicoClaw, which focus heavily on containerized or edge-specific deployments, OpenClaw operates as a comprehensive gateway orchestrator. It differs from CoPaw’s v2.0 architecture by maintaining a more monolithic but stable core, whereas CoPaw is currently struggling with performance overhead in its newer modular design.

**Community Size:** OpenClaw has the largest active developer and user base, indicated by the highest issue/comment counts (e.g., Issue #44925 with 22 comments). This suggests it is the de facto reference implementation for multi-agent orchestration discussions, though this size also brings higher complexity and regression risks.

## 4. Shared Technical Focus Areas

| Focus Area | Specific Needs | Projects Involved |
| :--- | :--- | :--- |
| **Session State Integrity** | Preventing silent message loss, fixing race conditions in session initialization, and ensuring context persistence across restarts. | OpenClaw, NanoBot, Hermes Agent, ZeroClaw, CoPaw |
| **Context Window Efficiency** | Reducing token waste from bootstrap files, implementing smarter compaction, and managing long-term memory without bloat. | OpenClaw, Hermes Agent, ZeroClaw, CoPaw |
| **Security & Permission Models** | Granular tool approval, sandboxing subprocesses, preventing credential leakage, and managing skill permissions. | OpenClaw, NanoBot, ZeptoClaw, Moltis, ZeroClaw |
| **Automation & Cron Stability** | Unifying heartbeat/watcher logic, fixing cron schema compatibility with local LLMs, and preventing job conflicts. | OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw |
| **Cross-Channel Consistency** | Ensuring features (like media attachment or typing indicators) work uniformly across Discord, Telegram, Slack, and Matrix. | OpenClaw, NanoBot, IronClaw, Moltis |

## 5. Differentiation Analysis

*   **Architecture & Deployment:**
    *   **Gateway-Centric:** OpenClaw, ZeroClaw, and IronClaw act as central hubs, managing multiple channels and agents via a gateway service. They prioritize orchestration and routing.
    *   **Desktop/Electron-Centric:** LobsterAI and CoPaw focus on rich UI experiences within a single application, prioritizing visual fidelity and local data management (though CoPaw faces stability issues).
    *   **Edge/Container-Centric:** NanoClaw, PicoClaw, and ZeptoClaw are designed for self-hosted, often resource-constrained environments, emphasizing container isolation and Rust/Go performance.
    *   **Specialized/B2B:** Moltis focuses on enterprise communication gateways (Slack/Teams) with strict access controls, while Hermes Agent targets desktop GUI users with a focus on privacy and modularity.

*   **Target Users:**
    *   **OpenClaw/ZeroClaw:** Power users and developers seeking maximum flexibility and channel coverage.
    *   **CoPaw/LobsterAI:** General consumers looking for polished, out-of-the-box desktop experiences.
    *   **NanoClaw/PicoClaw:** DevOps engineers and self-hosters requiring lightweight, secure, and isolated agent execution.
    *   **Moltis/IronClaw:** Enterprise teams needing strict compliance, audit trails, and integration with corporate communication tools.

*   **Technical Stack:**
    *   **Rust:** ZeptoClaw, NanoClaw (partial), IronClaw (core). Preferred for memory safety and performance.
    *   **TypeScript/Node.js:** OpenClaw, CoPaw, NanoBot, Hermes Agent. Preferred for rapid development and web ecosystem integration.
    *   **Go:** PicoClaw. Preferred for simple, efficient binary distribution.

## 6. Community Momentum & Maturity

*   **Rapidly Iterating (High Velocity):**
    *   **OpenClaw:** Extremely high activity, but currently bogged down by post-release regression fixes. Momentum is high but chaotic.
    *   **CoPaw:** Active beta development, but momentum is hampered by significant performance regressions and user frustration.
    *   **IronClaw:** Strong pre-launch momentum, focusing on unifying product identity and stabilizing the runtime.

*   **Stabilizing (Focused Fixes):**
    *   **ZeroClaw:** Intense focus on security hardening and database migration (PostgreSQL). High maturity signals.
    *   **NanoBot:** Healthy maintenance cycle, addressing specific bugs and security bypasses. Steady growth.
    *   **Hermes Agent:** Refactoring skills and fixing desktop UI glitches. Moving towards a more stable release candidate.

*   **Maintenance/Niche (Low Velocity):**
    *   **PicoClaw:** Focused on dependency hygiene and minor refactoring. Stable but slow-moving.
    *   **NanoClaw:** Addressing container race conditions. Niche but critical for its user base.
    *   **Moltis:** Small, responsive team handling enterprise security patches. Low volume, high impact.
    *   **LobsterAI:** Showing signs of stagnation with stale issues and critical unresolved bugs (sql.js crashes).

## 7. Trend Signals

1.  **Shift to PostgreSQL for Session Storage:** ZeroClaw’s move to PostgreSQL and OpenClaw’s struggles with SQLite scalability signal an industry-wide recognition that in-memory or file-based storage cannot handle enterprise-grade concurrency and durability requirements.
2.  **Security-First Subprocess Execution:** ZeptoClaw’s critical environment variable leakage bug and NanoBot’s shell guard enhancements highlight that secure command execution is no longer optional. Developers must implement strict sandboxing and allowlists to prevent credential theft.
3.  **Context Window Optimization as a Core Feature:** Across OpenClaw, Hermes, and CoPaw, there is a clear demand for better context management—specifically, reducing bootstrap file injection and implementing smarter compaction. This suggests that token cost and efficiency are becoming primary differentiators for users.
4.  **Inter-Agent Communication (A2A):** ZeroClaw’s high engagement on A2A protocol interoperability and OpenClaw’s multi-agent orchestration features indicate that siloed agents are becoming obsolete. The future lies in standardized protocols allowing agents to delegate tasks and share context seamlessly.
5.  **Enterprise Readiness via Strict Access Control:** Moltis’s OTP-based allowlist fixes and IronClaw’s admin-managed agent subjects reflect a growing need for B2B features. Open-source agents are increasingly being adopted in corporate environments, necessitating granular permissions, audit logs, and compliance-ready configurations.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-07-24
**Source:** GitHub (HKUDS/nanobot)

## 1. Today's Overview
The NanoBot project exhibits high development velocity and robust maintenance activity, with 37 Pull Requests updated in the last 24 hours, of which 31 were merged or closed. The core focus today shifted toward stabilizing the WebUI experience, refining security guards for shell execution, and addressing critical bugs in session management and file handling. While no new releases were published, the volume of merged fixes suggests an imminent patch release to address stability issues found in recent versions. The project remains healthy, with active community engagement on both bug reporting and feature enhancement.

## 2. Releases
*   **No new releases** were published during this period.

## 3. Project Progress
Significant progress was made in merging fixes for security, WebUI stability, and agent logic:

*   **Security & Shell Guard:** PR #4594 fixed a critical bypass in `restrictToWorkspace` where absolute paths following an equals sign (e.g., `curl --output=/path`) were ignored. PR #4889 introduced explicit allowlists for destructive commands (`/restart`, `/stop`) to prevent unauthorized execution via channels.
*   **WebUI Enhancements:** PR #5061 simplified model preset settings, replacing complex workflows with reusable presets. PR #5065 resolved a bug preventing media directory access when workspace restrictions were enabled. PR #5067 ensured the composer model badge stayed in sync with settings updates.
*   **Agent Logic:** PR #5056 improved length recovery logic to preserve output continuity when token limits are hit. PR #4889 and #5069 addressed channel-specific connection cancellations and session cleanup failures.

## 4. Community Hot Topics
The most discussed items reflect user needs for flexibility, cross-platform compatibility, and robust integration:

*   **Model Preset Flexibility (Issue #4253):** Users are requesting the ability to override models per conversation to balance privacy (local LLMs) vs. performance/speed (cloud APIs). This indicates a need for granular control over cost/privacy trade-offs. [Link](https://github.com/HKUDS/nanobot/issues/4253)
*   **Browser Compatibility (Issue #5059):** A query regarding supported browser versions highlights users' concerns about accessibility and legacy environment support. [Link](https://github.com/HKUDS/nanobot/issues/5059)
*   **Feishu/Lark Integration Conflicts (Issue #5028):** Users report conflicts between `media` paths and `workspace` restrictions when uploading files via Feishu, suggesting pain points in multi-channel file handling consistency. [Link](https://github.com/HKUDS/nanobot/issues/5028)
*   **Dynamic Tool Provider Refactoring (Issue #4858):** Developers are discussing refactoring MCP lifecycle out of `AgentLoop`, indicating internal architectural shifts to support more flexible tool integration. [Link](https://github.com/HKUDS/nanobot/issues/4858)

## 5. Bugs & Stability
Several critical bugs were identified and fixed, primarily revolving around edge cases in file handling and session management:

*   **High Severity:**
    *   **Shell Path Extraction Bypass:** Fixed in PR #4594. Commands like `curl --output=/etc/passwd` could previously bypass workspace restrictions.
    *   **Filesystem Race Conditions:** PR #4987 addresses potential vulnerabilities by binding workspace checks to opened file handles using `O_NOFOLLOW` and `fstat`.
    *   **Destructive Command Authorization:** PR #4889 mitigates risks by restricting `/restart` and `/stop` to admin senders only.
*   **Medium Severity:**
    *   **Session Metadata Loss:** Issue #4940 reported loss of `workspace_scope` for legacy sessions after restart; likely addressed by related metadata fixes.
    *   **Length Recovery Data Loss:** Issue #5051 noted lost content during token limit recovery; fixed in PR #5056.
    *   **Cron Store Quarantine:** PR #5042 fixes a crash where a null schedule in one job dropped all other cron jobs.
*   **Low Severity:**
    *   **Test Failures on Linux:** Issue #5062/PR #5064 fixed tests failing on systems without `python` symlink (only `python3` available).

## 6. Feature Requests & Roadmap Signals
*   **Per-Conversation Model Override:** Strong signal from Issue #4253. Users want dynamic model switching based on task sensitivity.
*   **Unified Dark Mode & Settings UI:** PR #5058 and #5061 show a roadmap direction towards a cleaner, more unified WebUI with simplified settings management and consistent dark mode surfaces.
*   **Fallback Indicator:** PR #5017 introduces visual indicators for model fallbacks in the WebUI, improving transparency for users experiencing latency or errors.
*   **DOCX Table Preservation:** PR #5039 enhances document parsing fidelity, suggesting continued investment in rich media/document support.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Inconsistent File Access:** Users struggle with conflicting rules between `media` directories and `workspace` restrictions, especially in integrated channels like Feishu (Issue #5028).
    *   **Legacy Session Issues:** Restarting the service causes loss of context/workspace scope for older sessions (Issue #4940).
    *   **Environment Variability:** Test and runtime failures due to `python` vs `python3` naming conventions on different Linux distributions (Issue #5062).
*   **Satisfaction:**
    *   Positive reception of simplified model preset configurations (PR #5061).
    *   Appreciation for security hardening in shell execution and command authorization.

## 8. Backlog Watch
*   **Issue #4253:** "Support overriding model per conversation" - Closed but indicates a recurring user need. Maintainers should verify if the implemented preset system fully addresses the dynamic override requirement.
*   **Issue #5028:** "Media path and workspace restriction conflict" - Still open. Requires careful handling to ensure file uploads from channels like Feishu remain accessible without breaking security sandboxing.
*   **Issue #4858:** "Refactor dynamic tool provider lifecycle" - Open. Critical for long-term maintainability as MCP integration grows.
*   **PR #4987:** "Bind workspace checks to opened files" - Open with conflicts. High priority for security; needs resolution to prevent file-based bypasses.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-24
**Source:** NousResearch/hermes-agent

## 1. Today's Overview
Hermes Agent is experiencing a high-volume day of activity with 50 issues and 50 pull requests updated in the last 24 hours, indicating intense development and user engagement. The project is currently focused on stabilizing the Desktop GUI experience, refining context compression logic, and addressing critical bugs in session state management and OAuth authentication. While no new releases were published today, the merge rate (33 PRs) suggests significant code churn aimed at improving reliability and user interface consistency ahead of potential upcoming releases.

## 2. Releases
*   **Status:** No new releases published today.
*   **Note:** Development activity is concentrated in `main` branch updates rather than tagged versions.

## 3. Project Progress
Several key areas saw advancement through merged or closed Pull Requests:
*   **Skills Refactoring:** Major restructuring of the skills ecosystem. `segment-anything`, `yuanbao`, `heartmula`, and `audiocraft` have been moved to `optional-skills/` to reduce default bundle size and improve install times (#70434, #70456, #70453). The `hermes-agent` hub skill was also refactored to absorb related plugins (#70452).
*   **MoA Enhancements:** Implementation of per-reference model enable/disable toggles for Mixture of Agents (#59753) and addition of privacy redaction filters for reference outputs (#60463).
*   **Dashboard Fixes:** Resolved stale session lists in the web dashboard by adding polling and visibility change listeners (#70438).
*   **Configuration Security:** Added validation to reject redacted credential placeholders from being persisted in config files (#70454, #42746).
*   **Desktop UI:** Completed i18n coverage for Desktop in Chinese (Simplified/Traditional) and Japanese (#70384).

## 4. Community Hot Topics
The most discussed issues revolve around session stability, context compression failures, and gateway connectivity:
*   **[Bug] Latest session switch failure after tab navigation** (#66875): High engagement (8 comments) regarding the desktop app failing to load the latest session after switching tabs. This highlights a critical UX friction point in session management.
*   **[Bug] Telegram gateway stuck in retry loop** (#69314): Users report proxies causing `CLOSE_WAIT` socket accumulation (#69314), impacting reliability for Telegram-based deployments.
*   **[Bug] Session cost reset on restart** (#67762): A blocker issue where estimated costs reset to $0 upon gateway restart, affecting billing transparency.
*   **[Feature] Two-Phase Context Management** (#513): Continued discussion on improving context compression efficiency by pruning before full compaction, inspired by other agents like Kilocode.

## 5. Bugs & Stability
Critical stability issues reported or addressed today include:
*   **OAuth Retry Loop** (#70401): **Severity: High.** An unbounded 401 retry loop in the OAuth credential pool that ignores stop signals, requiring external process termination.
*   **WebSocket Reconnect Cycles** (#69930): Desktop GUI experiences frequent websocket drops (~572/day) causing UI freezes and detached sessions.
*   **Context Compression Anti-Thrashing** (#14694): Auto-compression permanently disables if anti-thrashing triggers, with no recovery mechanism.
*   **Anthropic API 400 Errors** (#69512): Empty text blocks post-compression cause permanent HTTP 400 errors; this has been fixed via sanitization.
*   **Session State Corruption** (#66875, #70424, #70445): Multiple reports of session switching failures, slow loads, and content flashing in the Desktop app.

## 6. Feature Requests & Roadmap Signals
User feedback points toward these priorities for future versions:
*   **Privacy Controls:** Strong demand for privacy filters in MoA outputs (#59959) and better handling of sensitive data.
*   **UI Customization:** Requests for calmer working-session indicators (#70446) and zoom setting persistence fixes (#60693).
*   **Context Management:** Interest in idle time-gap pre-compression (#29390) to prevent interruptions during long breaks.
*   **Tooling:** Suggestions for progress indicators in MoA processes (#59546) to reduce "black box" perception.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by session instability in the Desktop app, particularly when switching between Kanban/Artifacts and Chat views. The "stale" nature of session lists and the inability to scroll up in certain chat transcripts are significant usability blockers.
*   **Installation Issues:** Problems persist with path handling in installers (#70437) and false-negative diagnostic reports for `fastembed` (#50101).
*   **Satisfaction:** The community appreciates the ongoing refactoring of skills to make the installation lighter and more modular. The addition of i18n support is positively received by non-English speaking users.

## 8. Backlog Watch
Maintainers should prioritize the following long-standing or high-risk items:
*   **#70401 [P1] OAuth unbounded retry loop:** Requires immediate attention due to its self-sustaining nature and security implications.
*   **#14694 [P1] Anti-thrashing permanent disable:** Critical for long-running sessions; currently lacks a recovery mechanism.
*   **#69314 [P3] Telegram proxy socket leak:** Impacts production reliability for many users.
*   **#69930 [P2] WebSocket reconnect cycles:** Affects core Desktop functionality and user experience significantly.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-07-24

## 1. Today's Overview
PicoClaw exhibits high development velocity with 15 Pull Requests updated in the last 24 hours, indicating a strong focus on dependency maintenance and internal refactoring. The project remains stable with no new releases deployed today, but significant code hygiene efforts are underway, particularly regarding Go dependencies and GitHub Actions workflows. Community engagement is moderate, with one critical bug report closed regarding NanoKVM compatibility, while several feature enhancements remain open for review.

## 2. Releases
No new releases were published today. The project appears to be in a maintenance phase, prioritizing dependency updates over major version releases.

## 3. Project Progress
The majority of today's activity consists of automated dependency bumps by Dependabot and manual security updates. Key technical advancements include:
*   **Dependency Updates:** Multiple PRs updated core Go libraries, including `golang.org/x/sync` (PR #3237), `github.com/github/copilot-sdk/go` (PR #3291, #3236), `aws-sdk-go-v2` (PR #3290, #3238), and `pion/rtp` (PR #3289, #3235).
*   **CI/CD Maintenance:** GitHub Actions workflows were updated with `actions/setup-node` (PR #3263) and `actions/setup-go` (PR #3262).
*   **Security Fixes:** PR #3286 addressed vulnerabilities flagged by `govulncheck` by updating Go and `x/text`.
*   **Refactoring:** PR #3222 significantly cleaned up the Deltachat implementation, removing legacy features and reducing code size by approximately 200 lines.
*   **Feature Merges:** PR #3118 introduced remote WebSocket mode for the `picoclaw agent`, and PR #3115 fixed session-history corruption related to inline data URL media extraction.

## 4. Community Hot Topics
*   **NanoKVM GPT Compatibility:** Issue #3195 ([Link](https://github.com/sipeed/picoclaw/issues/3195)) was closed today. Users are actively seeking integration between PicoClaw and the NanoKVM hardware, specifically regarding OpenAI model configuration. This highlights a growing interest in edge-device AI integration.
*   **Deltachat Cleanup:** PR #3222 ([Link](https://github.com/sipeed/picoclaw/pull/3222)) reflects community desire for cleaner, more maintainable protocol implementations. The removal of password-based email configuration suggests a shift towards more secure, secret-managed authentication methods.
*   **Model Fallback Chains:** PR #3200 ([Link](https://github.com/sipeed/picoclaw/pull/3200)) addresses user needs for robustness in AI interactions. Allowing configurable default fallback chains indicates that users frequently encounter model unavailability or latency issues, necessitating automatic failover mechanisms.

## 5. Bugs & Stability
*   **NanoKVM Configuration Bug:** Issue #3195 ([Link](https://github.com/sipeed/picoclaw/issues/3195)) reported that OpenAI GPT did not work with default configurations on NanoKVM. This issue has been marked as closed/stale, suggesting a potential workaround or resolution was found, though specific technical details of the fix are not detailed in the digest data.
*   **Session History Corruption:** PR #3115 ([Link](https://github.com/sipeed/picoclaw/pull/3115)) fixed a critical bug where generic tool outputs containing base64 image data were incorrectly parsed as media attachments, leading to session history corruption. This is a significant stability improvement for agents using file execution or reading tools.
*   **Security Vulnerabilities:** PR #3286 ([Link](https://github.com/sipeed/picoclaw/pull/3286)) proactively addressed security concerns identified by `govulncheck`, ensuring the Go runtime and text processing libraries are up-to-date with security patches.

## 6. Feature Requests & Roadmap Signals
*   **Remote Agent Mode:** The merge of PR #3118 ([Link](https://github.com/sipeed/picoclaw/pull/3118)) signals a roadmap direction towards distributed agent architectures, allowing `picoclaw agent` to connect via WebSocket to remote instances.
*   **Enhanced Model Resilience:** PR #3200 ([Link](https://github.com/sipeed/picoclaw/pull/3200) proposes a configurable default fallback chain for models. If merged, this will become a standard feature in the next release, improving reliability for enterprise or high-availability use cases.
*   **Protocol Modernization:** The cleanup in PR #3222 ([Link](https://github.com/sipeed/picoclaw/pull/3222)) suggests future versions will deprecate older, less secure authentication methods (like password-based email config) in favor of JSON-RPC secrets and official relay lists.

## 7. User Feedback Summary
Users are demonstrating increasing sophistication in their use of PicoClaw, moving beyond simple local agent usage to complex integrations like NanoKVM and remote WebSocket connections. There is a clear demand for reliability, evidenced by the strong support for fallback chains and session history fixes. Dissatisfaction appears minimal in the recent closed issues, but the reliance on Dependabot for routine maintenance suggests users expect the project to stay current with upstream library security and functionality without requiring manual intervention from users.

## 8. Backlog Watch
*   **Deltachat Refinement:** PR #3222 ([Link](https://github.com/sipeed/picoclaw/pull/3222)) is currently open. Maintainers should prioritize reviewing this large refactor to ensure backward compatibility and correct implementation of the new invite link semantics before merging.
*   **Model Fallback Implementation:** PR #3200 ([Link](https://github.com/sipeed/picoclaw/pull/3200)) is open and represents a significant UX improvement. It requires careful testing of the UI persistence and backend API endpoints to ensure seamless user experience.
*   **Open Dependency Bumps:** Several Dependabot PRs (#3263, #3262, #3291, #3290, #3289, #3288) are still open. While low-risk, timely merging is essential to keep the dependency tree healthy and prevent future vulnerability accumulation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-07-24
**Source:** github.com/qwibitai/nanoclaw

## 1. Today's Overview
The NanoClaw project demonstrates high development velocity with 10 pull requests updated in the last 24 hours, indicating active core team and community engagement. While no new releases were published today, the focus remains on stabilizing container orchestration, enhancing channel integrations (Telegram, Matrix, Gmail), and refining internal tooling. Activity is heavily skewed toward bug fixes and operational improvements rather than new feature launches, suggesting a phase of hardening before the next major version.

## 2. Releases
No new releases were published today. The latest activity consists of merged and closed PRs that will likely be included in an upcoming patch or minor release.

## 3. Project Progress
Significant progress was made in stabilizing the host environment and expanding channel capabilities:

*   **Container Stability:** Two critical PRs address container lifecycle management. **#3119** fixes a race condition causing duplicate orphan containers, while **#2466** highlights the underlying bug regarding concurrent script execution. These are vital for long-running host stability.
*   **Channel Enhancements:**
    *   **Telegram:** **#2892** (Closed) enables native thread support, allowing forum/topic threads to be tracked properly by the bridge.
    *   **Matrix:** **#2844** (Closed) replaces the WASM-based Chat SDK bridge with a native Rust-binding adapter (`matrix-bot-sdk` + `@matrix-org/matrix-sdk-crypto-nodejs`) for persistent E2EE, significantly improving security and performance.
    *   **Gmail:** **#3115** (Closed) implements global OneCLI blocks to prevent legacy Gmail API routes from being bypassed, ensuring compliance with modern Gmail policies.
*   **UX & Tooling:**
    *   **#3120** (Closed) ensures typing indicators remain visible during long tool calls, improving user experience in chat interfaces.
    *   **#2971** (Open) introduces a new `ncc` utility skill for host operational health checks via CLI.
    *   **#3122** (Open) addresses OpenCode main compatibility and custom-endpoint transport issues.

## 4. Community Hot Topics
*   **Duplicate Container Spawns (Issue #2466):** This open issue has generated significant attention due to its impact on resource usage and data consistency. The race condition between `inject-gamma-brief.ts` scripts and host sweeps causes duplicate processing.
    *   *Link:* [nanocoai/nanoclaw Issue #2466](https://github.com/nanocoai/nanoclaw/issues/2466)
    *   *Analysis:* Users require robust idempotency guarantees in agent execution environments. The existence of fix PRs (#3119) suggests the community is actively collaborating on this critical stability issue.
*   **Telegram Thread Support (PR #2892):** The merge of thread support resolves a longstanding gap for users leveraging Telegram forums.
    *   *Link:* [nanocoai/nanoclaw PR #2892](https://github.com/nanocoai/nanoclaw/pull/2892)
*   **Matrix Native Adapter (PR #2844):** The shift to a native Rust-based crypto implementation is a major architectural improvement for security-conscious users.
    *   *Link:* [nanocoai/nanoclaw PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844)

## 5. Bugs & Stability
*   **Critical: Duplicate Container Race Condition:** Issue **#2466** reports a low-priority but high-impact bug where concurrent executions spawn duplicate containers. This leads to redundant processing and potential state inconsistencies. A corresponding fix PR **#3119** is currently open and addresses reconciliation of untracked orphan containers.
*   **Minor: Legacy Gmail Route Bypass:** Previously, Gmail policies could be bypassed via legacy APIs. This has been fixed in **#3115** (Closed), ensuring all traffic goes through controlled routes.
*   **Stability: Typing Indicator Drop:** Users experienced dropped responses when tool calls exceeded certain durations. Fixed in **#3120** (Closed).

## 6. Feature Requests & Roadmap Signals
*   **Host Health CLI:** The introduction of the `ncc` utility skill (**#2971**) signals a roadmap direction towards better self-healing and observability for self-hosted instances.
*   **Template Context Prepending:** PR **#3090** aims to prepend top-level context Markdown, suggesting ongoing work to improve prompt engineering consistency and context window management.
*   **OpenCode Compatibility:** PR **#3122** indicates continued effort to maintain compatibility with evolving external tools like OpenCode.

## 7. User Feedback Summary
*   **Pain Points:** The primary user pain point identified today is resource inefficiency caused by duplicate container spawns. Users running automated scripts alongside host sweeps face unexpected behavior and wasted compute resources.
*   **Satisfaction:** Users appear satisfied with the recent improvements in channel integrations, particularly the addition of Telegram threads and the more secure Matrix implementation. The fix for legacy Gmail routes also addresses compliance concerns for enterprise users.

## 8. Backlog Watch
*   **Issue #2466:** Despite the low priority label, this bug has significant operational impact. Maintainers should prioritize merging the fix in PR **#3119** to prevent accumulation of orphan containers.
*   **PR #3122:** This fix for OpenCode compatibility is critical for users relying on this integration. It requires review to ensure it does not introduce regressions in custom-endpoint transport.
*   **PR #3090:** The template context prepending fix needs verification to ensure it does not break existing SKILL.md structures.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-07-24
**Source:** GitHub Data (nearai/ironclaw)

## 1. Today's Overview
The IronClaw project is in a high-integration phase, with significant activity focused on stabilizing the "Reborn" runtime architecture and preparing for v1 launch. Developer momentum is strong, evidenced by 50 Pull Requests updated in the last 24 hours, including several large-scale refactors to unify product identity and extension lifecycles. While no new releases were published today, the team is actively resolving critical blockers in hosted staging environments, particularly around OAuth configurations, webhook delivery, and CLI availability. The focus remains on hardening the core runtime, simplifying configuration contracts, and ensuring hermetic testing coverage before the official launch.

## 2. Releases
*No new releases published today.*

However, PR #5598 indicates ongoing dependency updates, including breaking changes in `ironclaw_common` (0.4.2 -> 0.5.0) and `ironclaw_skills` (0.3.0 -> 0.4.0), suggesting that upcoming releases will require careful migration attention regarding API compatibility.

## 3. Project Progress
**Merged/Closed PRs & Major Advances:**
*   **Extension Lifecycle Refactor (PR #6520):** A major architectural shift was merged, collapsing the public extension lifecycle into manifest-derived states (`uninstalled`, `setup_needed`, `active`). This separates tenant admin config from user membership, significantly simplifying extension management.
    *   [PR #6520](https://github.com/nearai/ironclaw/pull/6520)
*   **Legacy Code Retirement (PR #6594):** Legacy source trees (`tools-src/`, `channels-src/`) and stale local references have been removed, streamlining the workspace structure.
    *   [PR #6594](https://github.com/nearai/ironclaw/pull/6594)
*   **Product Identity Unification (PR #6556 & PR #6559):** Efforts are underway to make "IronClaw" the canonical product identity across CLI and WebUI, removing "Reborn" branding from user-facing surfaces while maintaining backward compatibility for existing deployments.
    *   [PR #6556](https://github.com/nearai/ironclaw/pull/6556)
    *   [PR #6559](https://github.com/nearai/ironclaw/pull/6559)
*   **WebChat Stability Fix (PR #6592):** Fixed a critical issue where WebChat would get stuck in a "Disconnected" state due to rate-limit budget errors and SSE thrashing under multi-tab usage.
    *   [PR #6592](https://github.com/nearai/ironclaw/pull/6592)

## 4. Community Hot Topics
**Most Active Issues (by comments/discussion):**
*   **Runtime Assembly Simplification (#6389):** High engagement (11 comments) on collapsing build paths for local and production runtimes into a single parameterized function. This reflects a community need for clearer, more maintainable backend configuration.
    *   [Issue #6389](https://github.com/nearai/ironclaw/issues/6389)
*   **DeploymentConfig Finalization (#6274):** Discussion continues on finalizing `DeploymentConfig` as the main composition config artifact, ensuring it aligns with the architecture simplification plan.
    *   [Issue #6274](https://github.com/nearai/ironclaw/issues/6274)
*   **Hermetic Testing Platform (#6524):** A new epic opened to address the lack of deterministic coverage for capabilities and user journeys, highlighting a gap in current testing infrastructure.
    *   [Issue #6524](https://github.com/nearai/ironclaw/issues/6524)

**Underlying Needs:** The high discussion volume around configuration and runtime assembly indicates users and contributors are seeking greater transparency and simplicity in how IronClaw is deployed and managed, especially in complex hosted environments.

## 5. Bugs & Stability
**Critical/High Severity Bugs Reported Today:**
1.  **Slack Auth Failure due to Missing UI/CLI Config (#6544):** Hosted agents fail with 503 errors because there is no UI or CLI to persist `IRONCLAW_REBORN_SLACK_PERSONAL_OAUTH_REDIRECT_URI`. This blocks agent functionality in hosted environments.
    *   [Issue #6544](https://github.com/nearai/ironclaw/issues/6544)
2.  **Telegram Inbound Dead After Reinstall (#6605):** If the Telegram extension is reinstalled without a full setup submit, inbound updates fail silently due to missing `telegram_webhook_secret`.
    *   [Issue #6605](https://github.com/nearai/ironclaw/issues/6605)
3.  **WebChat Disconnected Lockout (#6581):** Users experience persistent "Reconnecting" states and 429 errors even after page reloads, affecting user experience on `agent-stg`.
    *   [Issue #6581](https://github.com/nearai/ironclaw/issues/6581) *(Fix PR: #6592)*
4.  **DeepSeek Serialization Bug (#4548):** Chat completion requests to DeepSeek fail with HTTP 400 due to duplicate top-level `model` fields in the JSON body.
    *   [Issue #4548](https://github.com/nearai/ironclaw/issues/4548)
5.  **Hosted Preview Auth Wall Blocking Webhooks (#6548):** Domain-wide auth walls intercept webhooks from Telegram/Slack, preventing delivery.
    *   [Issue #6548](https://github.com/nearai/ironclaw/issues/6548)

**Moderate Severity:**
*   **Windows Local Dev Failure (#6590):** `ironclaw serve` fails on Windows due to workspace root overlap issues.
    *   [Issue #6590](https://github.com/nearai/ironclaw/issues/6590)
*   **Systemd Service Error on Onboard (#6575):** `systemctl --user status` reports errors immediately after running `ironclaw onboard` on Ubuntu.
    *   [Issue #6575](https://github.com/nearai/ironclaw/issues/6575)

## 6. Feature Requests & Roadmap Signals
*   **Admin-Managed Agents as UserId Subjects (#6578):** Request to allow tenant administrators to create non-human subjects (agents/automations) without inventing a second identity hierarchy. This signals a need for stronger B2B/enterprise multi-tenancy features.
    *   [Issue #6578](https://github.com/nearai/ironclaw/issues/6578)
*   **Reliable Skill Discovery & Routing (#6565):** Epic to improve how IronClaw finds and activates skills, moving beyond model-directed selection to a more deterministic routing mechanism.
    *   [Issue #6565](https://github.com/nearai/ironclaw/issues/6565)
*   **Heartbeat Contract & Scheduling (#6569, #6570, #6571):** Multiple issues defining and implementing durable heartbeat scheduling through the trigger pipeline, indicating a push for robust agent health monitoring and proactive delivery.
    *   [Issues #6569](https://github.com/nearai/ironclaw/issues/6569), [#6570](https://github.com/nearai/ironclaw/issues/6570), [#6571](https://github.com/nearai/ironclaw/issues/6571)

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the lack of tooling to configure essential variables (like Slack OAuth redirect URIs) in hosted environments, leading to broken authentication flows. The "preview auth wall" blocking webhooks is also a significant operational hurdle.
*   **Confusion:** The "Reconnecting" badge in WebChat is causing user confusion despite the agent functioning correctly behind the scenes.
*   **Setup Friction:** New users or operators face difficulties setting up Telegram locally or on staging, noting a lack of clear instructions compared to other integrations like Google.
    *   [Issue #6522](https://github.com/nearai/ironclaw/issues/6522)
*   **CLI Accessibility:** The absence of the `ironclaw` CLI command on hosted staging instances hinders operational tasks like service restarts.
    *   [Issue #6521](https://github.com/nearai/ironclaw/issues/6521)

## 8. Backlog Watch
*   **Sidebar Pagination Bug (#6462):** The conversation sidebar fails to load threads beyond the first page, ignoring the `nextCursor` from the API. This impacts usability for users with long conversation histories.
    *   [Issue #6462](https://github.com/nearai/ironclaw/issues/6462)
*   **Daily Failure Taxonomy (#6572):** Monitoring of `clawbench` results shows genuine partial-credit model shortfalls, requiring ongoing attention to benchmark accuracy and model performance.
    *   [Issue #6572](https://github.com/nearai/ironclaw/issues/6572)
*   **Internal Crate Renaming (#6552, #6551, #6550):** Large-scale refactoring efforts to remove "Reborn" codename from internal and external surfaces are ongoing. Maintainers should ensure these renames do not break existing scripts or documentation relying on old variable names.
    *   [Issues #6552](https://github.com/nearai/ironclaw/issues/6552), [#6551](https://github.com/nearai/ironclaw/issues/6551), [#6550](https://github.com/nearai/ironclaw/issues/6550)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-07-24
**Source:** GitHub (netease-youdao/LobsterAI)

### 1. Today's Overview
LobsterAI demonstrates moderate daily activity with 3 new issues flagged as stale and 3 pull requests updated in the last 24 hours. While no new releases were published today, two significant PRs (#2378 and #2379) were merged/closed on July 23, indicating recent development momentum in UI polish and release preparation. The project currently faces critical stability concerns regarding its local storage engine, alongside architectural requests for multi-agent support. Activity levels suggest a maintenance-heavy phase with underlying technical debt requiring attention.

### 2. Releases
No new versions were released in the last 24 hours.
*   **Recent Context:** PR #2379 (`Release/2026.7.20`) was closed/merged today, suggesting a release cycle around July 20, 2026, which may not have been reflected in a new tag yet or is pending finalization.

### 3. Project Progress
Two major Pull Requests were closed/merged recently, focusing on user interface refinement and release management:
*   **PR #2378 [CLOSED] feat(skin): polish AI skin appearance behavior:** Enhanced the visual consistency of AI skins by aligning artifact tabs and search surfaces. Introduced logic to make standard themes and AI skins mutually exclusive and simplified skin settings. This improves the aesthetic cohesion of the Electron-based desktop application.
*   **PR #2379 [CLOSED] Release/2026.7.20:** A comprehensive release PR touching renderer, build, docs, main process, openclaw, cowork, and Windows artifacts. This indicates a broad update to the codebase, likely preparing the application for distribution on Windows platforms.

### 4. Community Hot Topics
The most discussed items are related to multi-agent orchestration and UI duplication bugs, reflecting user needs for scalability and stability.

*   **Issue #1265: Multi-Agent IM Bot & Model Binding**
    *   **Link:** [Issue #1265](https://github.com/netease-youdao/LobsterAI/issues/1265)
    *   **Analysis:** Users are requesting the ability to bind specific IM bots and LLM models to individual agents within a team. This highlights a demand for specialized agent roles (e.g., a scheduler vs. a PPT generator) that require different model capabilities (reasoning vs. coding). This is a critical feature for enterprise or complex workflow use cases.
*   **Issue #1263: Duplicate Scheduled Tasks in UI**
    *   **Link:** [Issue #1263](https://github.com/netease-youdao/LobsterAI/issues/1263)
    *   **Analysis:** Reports of duplicate task entries appearing in the UI, accompanied by API rate limit errors. This suggests backend synchronization issues or frontend rendering bugs where state is not properly deduplicated.

### 5. Bugs & Stability
A critical stability issue has been identified regarding the local database engine, posing a high risk to data integrity.

*   **Issue #1273: sql.js (WASM) Memory Crash & Data Corruption**
    *   **Severity:** Critical
    *   **Link:** [Issue #1273](https://github.com/netease-youdao/LobsterAI/issues/1273)
    *   **Details:** High-frequency write operations (common in "Cowork" sessions) cause `sql.js` WASM memory fragmentation, leading to `RuntimeError: memory access out of bounds`. Furthermore, the use of non-atomic `fs.writeFileSync` risks permanent database corruption if writes are interrupted.
    *   **Status:** No fix PR linked yet. This requires immediate architectural review, potentially migrating to a more robust storage solution or implementing WAL (Write-Ahead Logging) and atomic swaps for SQLite.

### 6. Feature Requests & Roadmap Signals
*   **Multi-Agent Specialization (Issue #1265):** Strong signal from users to decouple agent identities from bot/model bindings. Future versions should prioritize supporting heterogeneous agent teams where each agent can leverage different models suited to its specific task (e.g., reasoning-heavy models for scheduling, code-specialized models for development).
*   **UI Consistency (PR #2378):** The recent merge of skin polishing suggests an ongoing roadmap focus on improving the desktop client's visual fidelity and theme management system.

### 7. User Feedback Summary
Users are experiencing frustration with two main areas:
1.  **Reliability:** The crash and potential data loss associated with `sql.js` (Issue #1273) is a severe pain point for power users engaging in long, high-throughput collaborative sessions ("Cowork").
2.  **Scalability:** Users feel constrained by the current 1:1 binding of Agents to Bots/Models (Issue #1265), limiting their ability to build complex, multi-role AI workflows.
3.  **UI Glitches:** Duplicate entries (Issue #1263) create confusion and clutter, reducing perceived product quality.

### 8. Backlog Watch
Three issues marked as `[stale]` have remained open since April 2, 2026, with minimal engagement in the last 24 hours (updated July 23 but still open/stale). Maintainers need to triage these to determine if they are resolved, invalid, or require immediate fixes:
*   **[Stale] Issue #1263:** Duplicate scheduled tasks/UI glitch.
*   **[Stale] Issue #1265:** Feature request for multi-agent model binding.
*   **[Stale] Issue #1273:** Critical bug regarding WASM memory crashes.

**Recommendation:** Prioritize addressing Issue #1273 due to its severity (data loss/crash). Investigate Issue #1265 as it represents a key architectural evolution for the platform.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-07-24
**Source:** GitHub Data (moltis-org/moltis)

## 1. Today's Overview
The Moltis project demonstrated high velocity on July 23, 2026, with five pull requests merged and two new releases deployed (`20260723.02` and `20260723.03`). Activity was heavily focused on hardening Slack/Teams integrations and improving the web UI’s session history display. While general issue traffic is low (only two issues updated), the closed PRs indicate a concerted effort to resolve security edge cases in multi-channel communication gateways. The project appears stable but is actively refining its enterprise-grade access controls.

## 2. Releases
Two new versions were released today, suggesting rapid iteration or hotfix deployment cycles.
*   **v20260723.03** & **v20260723.02**: Specific changelogs for these patch/hotfix releases are not detailed in the provided data. Given the volume of merged PRs today (particularly security fixes for Slack/Teams), these releases likely contain the fixes from PRs #1163 and #1164.
    *   *Note:* Users should check release notes on [GitHub Releases](https://github.com/moltis-org/moltis/releases) for specific migration steps if upgrading from pre-July 23 versions.

## 3. Project Progress
Significant progress was made in three key areas through five merged/closed Pull Requests:

*   **Security & Access Control (Slack/Teams):**
    *   **[PR #1164](https://github.com/moltis-org/moltis/pull/1164)**: Implemented an operator-controlled allowlist (`MOLTIS_SLACK_API_BASE_URL_ALLOWLIST`) for Slack API base hosts, enhancing security for internal proxies while blocking cloud metadata endpoints.
    *   **[PR #1163](https://github.com/moltis-org/moltis/pull/1163)**: Critical fix for "empty allowlist" bypasses. It introduced OTP self-approval for non-allowlisted DM users in Slack, Microsoft Teams, Signal, and Matrix. This addresses a significant security loophole where empty allowlists previously granted open access.
*   **Web UI Improvements:**
    *   **[PR #1162](https://github.com/moltis-org/moltis/pull/1162)**: Enhanced session list readability by introducing localized date labels ("yesterday", weekdays) and full calendar dates for older sessions, resolving Issue #1108.
*   **Developer Experience:**
    *   **[PR #1124](https://github.com/moltis-org/moltis/pull/1124)**: Added support for `chat.context_command`, allowing deployments to inject runtime context into chat turns automatically via stdout.
*   **Maintenance:**
    *   **[PR #1161](https://github.com/moltis-org/moltis/pull/1161)**: Updated Astro dependency in documentation from 7.0.9 to 7.1.3.

## 4. Community Hot Topics
*   **Podman Integration Issues:**
    *   **[Issue #1095](https://github.com/moltis-org/moltis/issues/1095)**: A bug report stating "Podman is not working via moltis" remains open. Created by `RokkuCode` on June 3, this issue highlights compatibility challenges with containerized environments using Podman instead of Docker. Despite being open for over a month, it has only 1 comment, indicating potential stagnation or difficulty in reproducing the environment-specific error.
*   **Session Date Display:**
    *   **[Issue #1108](https://github.com/moltis-org/moltis/issues/1108)**: Reported that the web UI showed times but not dates for past-day sessions. This has been resolved by PR #1162. The lack of comments suggests the fix was straightforward and well-received.

## 5. Bugs & Stability
*   **High Severity (Fixed):** Security bypasses in channel access control (Slack/Teams/Signal/Matrix) were identified and fixed in PRs #1163 and #1164. The previous behavior allowed unauthorized access via empty allowlists; this is now mitigated with OTP verification.
*   **Medium Severity (Fixed):** UI regression/confusion regarding session date visibility (Issue #1108) is resolved.
*   **Open Bug:**
    *   **[Issue #1095](https://github.com/moltis-org/moltis/issues/1095)**: Podman compatibility failure. No linked fix PR exists yet. This may impact users running Moltis in rootless container environments.

## 6. Feature Requests & Roadmap Signals
*   **Context Injection:** The merge of **[PR #1124](https://github.com/moltis-org/moltis/pull/1124)** signals a roadmap commitment to extensible context management. By allowing `chat.context_command`, Moltis is moving towards more dynamic, deployment-specific AI interactions without manual user intervention.
*   **Multi-Channel Security Standardization:** The simultaneous fixing of allowlist logic across Slack, Teams, Signal, and Matrix ([PR #1163](https://github.com/moltis-org/moltis/pull/1163)) suggests a strategic push to unify and harden security protocols across all supported communication channels in upcoming versions.

## 7. User Feedback Summary
*   **Pain Points:**
    *   Users in containerized environments (specifically Podman) are facing integration barriers ([Issue #1095](https://github.com/moltis-org/moltis/issues/1095)).
    *   Previous UI design caused confusion regarding session history dates, leading to ambiguity about when conversations occurred ([Issue #1108](https://github.com/moltis-org/moltis/issues/1108)).
*   **Satisfaction:**
    *   The rapid closure of the security vulnerability regarding empty allowlists indicates responsive maintenance, likely increasing trust among enterprise users concerned about access control.
    *   The addition of flexible context commands ([PR #1124](https://github.com/moltis-org/moltis/pull/1124)) addresses advanced user needs for automation and custom runtime data injection.

## 8. Backlog Watch
*   **[Issue #1095](https://github.com/moltis-org/moltis/issues/1095)**: **Priority: High**. This issue has been open since June 3, 2026, with minimal engagement. Maintainers should prioritize investigating Podman compatibility, as it affects a growing segment of container-native users who cannot use Docker-in-Docker.
*   **Maintainer Attention Needed:** With 5 PRs merged in one day, ensure that the documentation for the new `chat.context_command` feature and the Slack/Teams OTP flows is updated and accessible to prevent future user confusion.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-07-24
**Source:** GitHub (agentscope-ai/QwenPaw)

## 1. Today's Overview
The CoPaw project exhibits high velocity with 37 issues and 50 pull requests updated in the last 24 hours, indicating active development and community engagement. A new beta release, `v2.0.1-beta.2`, was published today, focusing on CI orchestration and runtime fixes for text message handling. Community sentiment is mixed; while feature adoption is strong, significant performance regressions and stability issues in the v2.0 architecture are generating friction among users upgrading from v1.x. Maintainers are actively addressing critical bugs related to tool execution and session management.

## 2. Releases
**Latest Release: v2.0.1-beta.2**
*   **Key Changes:**
    *   Unified release orchestrator gating web builds on desktop build success (PR #6329).
    *   Fixed runtime issue where text messages were not rotating correctly upon new reasoning blocks (PR #6310).
*   **Migration Notes:** Users should be aware that this is a beta release. The architectural shift in v2.0 continues to introduce overhead compared to v1.x, as highlighted by community reports.

## 3. Project Progress
Several key areas have seen advancement through merged or closed PRs and open reviews:
*   **Memory & Context Management:** PR #6323 introduces staged compaction and durable task continuity for Scroll context, aiming to improve history.db reliability. PR #6351 guides failed memory edits to prevent infinite retry loops.
*   **Third-Party Integrations:** PR #6397 adds extensible backends for Codex and Qoder agents. PR #6284 introduces the `qwenpaw-creator` app for video/storyboard workflows.
*   **Infrastructure:** PR #6387 implements on-demand installation of built-in channel dependencies to reduce core footprint. PR #6225 fixed graceful shutdown of the backend sidecar on desktop exit.
*   **UI/UX:** PR #6393 stabilized chat options memo to reduce SSE re-parsing. PR #6396 added wobble animations and color-coded badges for inbox approvals.

## 4. Community Hot Topics
*   **[Performance] v2.0 introduces ~2s fixed overhead per simple conversational reply** (Issue #6307) - *6 Comments*
    *   **Analysis:** This is the most critical pain point. Users upgrading from v1.x report a consistent 2-second latency penalty for simple queries, attributed to architectural changes. This suggests a need for optimization or configuration toggles to mitigate overhead for lightweight use cases.
*   **Feature: Docker Web Hot Update without Rebuilding Containers** (Issue #6344) - *3 Comments*
    *   **Analysis:** Self-hosted users are frustrated by the loss of dynamic tools (Node, ffmpeg) during standard Docker updates. There is a strong demand for a "hot update" mechanism that preserves the container's writable layer.
*   **[Bug] Tool call arguments polluted with markdown/XML tags break execution** (Issue #6363) - *3 Comments*
    *   **Analysis:** Models wrapping JSON in markdown fences or XML tags cause `JSONDecodeError`. This highlights a fragility in the parsing layer when dealing with diverse model output formats.

## 5. Bugs & Stability
Ranked by severity and impact:
1.  **Tool Execution Failures due to Formatting (High):** Issue #6363 reports that models like GLM-5-Turbo and DeepSeek-V3 wrap tool arguments in markdown/XML, breaking execution. *Status: Open.*
2.  **Session History Overwrite by Cron Jobs (High):** Issue #6401 details how agent-type cron jobs using shared sessions overwrite user conversation history. *Status: Open.*
3.  **Windows PATH Concatenation Bug (Medium):** Issue #6239 notes that Windows backend drops semicolon separators in PATH variables, causing child processes to lose npm globals. *Status: Open.*
4.  **MiniMax Image Recognition Failure (Medium):** Issue #6362 reports that images are not correctly identified by MiniMax-M3 via the Anthropic-compatible protocol. *Status: Open.*
5.  **Desktop Force-Kill Backend (Low/Medium):** Issue #6219 reported a force-kill issue on shutdown, which appears to be addressed by PR #6225 (Closed).

## 6. Feature Requests & Roadmap Signals
*   **Reranker Support for Memory Search:** PRs #6398 and #6399 add backend and UI support for reranking memory search results. This indicates a roadmap focus on improving Retrieval-Augmented Generation (RAG) accuracy within the memory system.
*   **Agent-Level Token Statistics:** Issue #6392 requests granular token tracking per agent. This aligns with enterprise needs for cost monitoring.
*   **Undo/Edit Previous Messages:** Issue #6408 requests a `/undo` command similar to Cherry Studio. This is a common UX expectation for LLM clients.
*   **Cron Job Model Specification:** Issue #6316 allows specifying a specific model for cron jobs, decoupling them from the agent's default model.

## 7. User Feedback Summary
*   **Performance Dissatisfaction:** The 2-second overhead in v2.0 is a major detractor for users expecting parity with v1.x speed.
*   **Deployment Friction:** Docker users feel the update process is destructive to their custom environments. The request for hot updates suggests a desire for more robust, persistent self-hosting experiences.
*   **UI Confusion:** Issue #6413 criticizes the "Full Mode" vs. "Compact Mode" toggle as confusing, suggesting a simpler configuration entry point.
*   **Stability Concerns:** Users report crashes in the main process due to loop functionality in recent pre-releases (Issue #6376), indicating a need for stricter QA before beta releases.

## 8. Backlog Watch
*   **Issue #2999 (Repeated MCP Client Registration):** An older bug where `register_mcp_clients()` is called on every request, leading to cancellation errors on slow MCP servers. *Status: Open since April 2026.*
*   **Issue #3015 (MEMORY.md Write Failures):** Repeated write failures cause token waste. *Status: Closed, but related memory handling logic remains complex.*
*   **Issue #6307 (v2.0 Performance Overhead):** Despite being open, no clear resolution path or optimization PR has been linked yet. This requires immediate attention to retain v1.x users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest
**Date:** 2026-07-24
**Source:** GitHub (github.com/qhkm/zeptoclaw)

## 1. Today's Overview
ZeptoClaw is currently experiencing a critical focus on security hardening and CI stability, with two high-priority issues (#644, #646) opened yesterday regarding safety and toolchain maintenance. Activity is concentrated on addressing environment variable leakage in subprocesses and resolving new Clippy warnings introduced by Rust 1.97.1. No new releases were published today, indicating the team is prioritizing code quality and security fixes over feature deployment. The project health remains stable but is actively undergoing significant internal refactoring to mitigate runtime risks.

## 2. Releases
*   **Status:** No new releases were published in the last 24 hours.
*   **Note:** Development activity is currently centered on patching existing vulnerabilities and fixing CI pipeline failures rather than shipping new versions.

## 3. Project Progress
*   **PR #645 (Open):** A fix for runtime security has been submitted, aiming to scrub subprocess secrets and reap timed-out process trees. This PR directly addresses the safety concerns raised in Issue #644.
*   **Issue #646 (Open):** Maintenance work is underway to restore `cargo-deny` and Clippy checks on the current toolchain (Rust 1.97.1). This suggests recent updates exposed baseline violations that need correction before further merges can proceed safely.

## 4. Community Hot Topics
*   **Security & Subprocess Isolation (Issue #644):** [Link](https://github.com/qhkm/zeptoclaw/issues/644)
    *   **Analysis:** This P1-critical issue highlights a severe vulnerability where runtime shell commands inherit full environment variables, potentially exposing provider keys. The community interest here is driven by the necessity of secure AI agent execution; users require guarantees that model-authored commands cannot leak credentials or persist as orphaned processes.
*   **CI Toolchain Stability (Issue #646):** [Link](https://github.com/qhkm/zeptoclaw/issues/646)
    *   **Analysis:** As a P1-critical chore, this issue reflects the maintainer's effort to keep the project compatible with the latest Rust stable release. It signals a commitment to long-term maintainability and dependency hygiene.

## 5. Bugs & Stability
*   **Critical: Environment Variable Leakage (Issue #644 / PR #645):**
    *   **Severity:** P1-Critical.
    *   **Description:** Subprocesses inherit the full ZeptoClaw environment, risking credential exposure. Additionally, timeout handling does not consistently terminate descendant processes or Docker containers, leading to resource leaks.
    *   **Fix Status:** Addressed by Open PR #645.
*   **Critical: CI Baseline Failures (Issue #646):**
    *   **Severity:** P1-Critical (Build Blocker).
    *   **Description:** New Clippy warnings in Rust 1.97.1 and `cargo-deny` rejections for vulnerable versions of `quick-xml` (0.39.2) and `lopdf` (0.40.0) are blocking standard CI pipelines.
    *   **Fix Status:** Addressed by Open Issue #646.

## 6. Feature Requests & Roadmap Signals
*   **No new feature requests identified.** Current activity is strictly focused on remediation (security patches, dependency updates, and CI fixes).
*   **Roadmap Signal:** The emphasis on "scrubbing environments" and "reaping process trees" suggests a roadmap direction toward more robust, sandboxed agent execution environments. Future updates may prioritize advanced isolation mechanisms beyond basic environment variable clearing.

## 7. User Feedback Summary
*   **Pain Points:** Users are likely concerned about the security implications of running AI agents that execute shell commands. The inheritance of sensitive credentials into subprocesses is a major friction point for enterprise or security-conscious deployments.
*   **Satisfaction/Dissatisfaction:** While specific user comments are sparse (0 comments on all items), the P1-critical classification indicates that these issues are recognized as blockers for trust and reliability. The lack of merged PRs today means users must wait for these critical fixes before seeing improved stability.

## 8. Backlog Watch
*   **Issue #646:** Requires maintainer attention to resolve toolchain incompatibilities. If left unresolved, it will block future contributions and releases.
*   **PR #645:** Needs review and merging to close Issue #644. Given the critical nature of the security flaw, prompt integration is essential for project safety.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest**
**Date:** 2026-07-24
**Source:** GitHub (zeroclaw-labs/zeroclaw)

### 1. Today's Overview
ZeroClaw is experiencing high-intensity development activity, with 50 issues and 50 pull requests updated in the last 24 hours. The project is currently in a critical stabilization phase for the upcoming v0.9.0 release, focusing heavily on security hardening, session backend migration to PostgreSQL, and resolving data-loss risks in channel integrations. While no new official releases were published today, the volume of merged fixes and in-progress security patches indicates a rapid iteration cycle aimed at addressing S0/S1 severity bugs identified in recent audits.

### 2. Releases
*   **No new releases published.**
*   Current focus is on preparing the `master` branch for the v0.9.0 milestone, particularly regarding auth/gateway security and breaking changes tracked in Issue #7432.

### 3. Project Progress
Significant engineering effort was directed toward infrastructure stability and configuration correctness today:
*   **Session Backend:** PR #9251 introduces PostgreSQL as the first supported session backend, moving away from SQLite-only constraints to improve scalability and reliability.
*   **Configuration Fixes:** Multiple PRs addressed critical config parsing bugs:
    *   PR #9297 fixed `save_dirty` failing to resolve map keys containing dots (e.g., `gpt-4.1`).
    *   PR #9310 corrected error masking in nested `set_prop` calls, ensuring users see actual validation errors instead of "unknown property" messages.
    *   PR #9299 defaulted `context_compression.enabled` to `false` after the runtime compressor was removed.
*   **Cron & Runtime Stability:** PR #9320 introduced wall-clock timeouts for cron agent jobs, preventing indefinite locks that previously blocked other scheduled tasks.
*   **CI/CD Repair:** PR #9295 repaired package publishing workflows, ensuring idempotent and secure releases via Scoop and other channels.

### 4. Community Hot Topics
The community is actively discussing interoperability, security architecture, and multi-agent capabilities:
*   **[Tracker]: A2A protocol interoperability (Issue #3566):** High engagement (9 comments, 7 👍). Users are eager for native Agent2Agent protocol support to communicate with external agents like NanoClaw and OpenClaw. This signals a strong demand for an open ecosystem rather than siloed instances.
*   **RFC: Abstract a `KeySource` trait (Issue #9127):** Focuses on classifying master-key material. This reflects a community need for more granular control over credential encryption and deployment forms.
*   **Multi-Agent Routing (Issue #2767):** Although closed, it remains a reference point for users wanting to run multiple isolated agents within a single gateway instance.
*   **Discord Channel Restrictions (Issue #6378):** Users request finer-grained control over bot responses in specific Discord channels, mirroring existing Matrix/Nextcloud features.

### 5. Bugs & Stability
Several high-severity bugs affecting data integrity and workflow blocking were reported and actively worked on:
*   **S0 - Data Loss/Security Risk:**
    *   **Telegram Offset Advance (Issue #9188):** Updates advance offset before successful delivery, risking message loss. *Fix PR #9321 addresses unauthorized notice handling, but core offset logic may need further review.*
    *   **WeChat Sync Cursor (Issue #9187):** Cursor persisted before message enqueue causes loss on crash.
*   **S1 - Workflow Blocked:**
    *   **Web Fetch Garbage (Issue #9207):** `web_fetch` returns binary garbage for compressed responses (gzip/brotli), breaking web automation tools.
    *   **Landlock Sandbox Restriction (Issue #9204):** The Landlock sandbox restricts the ZeroClaw daemon itself, causing SQLite memory access issues.
    *   **Windows Desktop Installer (Issue #9290):** Missing `TaskDialogIndirect` causes launch failure on Windows. *Fix PR #9291 addresses AppImage detection, but Windows DLL issue remains open.*
*   **S2 - Degraded Behavior:**
    *   **Config Flush Race Condition (Issue #9284):** Concurrent writes can be overwritten during config flush.
    *   **ZeroCode Lag (Issue #9092):** Keystroke lag in long sessions due to rendering full history. *Fix PR #9317 renders transient frames as viewport slices.*

### 6. Feature Requests & Roadmap Signals
*   **PostgreSQL Support (PR #9251):** Likely to be included in v0.9.0 as a key infrastructure improvement.
*   **Multi-Media Streaming for Telegram (PR #8561):** Adds `multi_message_delay_ms` and streaming mode, improving UX for large media groups.
*   **Shell Output Format Config (PR #8438):** Allows raw stdout output for cron jobs, catering to advanced automation use cases.
*   **TOTP for Critical Tools (Issue #3767):** Request for cross-channel 2FA approval for destructive commands, aligning with the v0.9.0 security hardening goals.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by silent configuration errors (masked as unknown properties) and data loss in channel integrations (Telegram/WeChat). The lack of visibility into intermediate reasoning turns in cron jobs is also noted as a usability issue (Issue #6510).
*   **Use Cases:** Heavy reliance on automated workflows via cron jobs and external tool integration (`web_fetch`, `shell`). There is a clear trend toward using ZeroClaw as a central hub for multiple agents and channels, driving demand for robust routing and inter-agent communication (A2A).
*   **Satisfaction:** The active response to bug reports (many marked "in-progress") suggests high maintainer responsiveness, which boosts user confidence despite the current instability.

### 8. Backlog Watch
*   **Issue #9187 & #9188 (Channel Data Loss):** These S0 bugs require immediate attention as they cause irreversible message loss. Maintainers should prioritize fixing the cursor/offset logic in WeChat and Telegram channels.
*   **Issue #9207 (Web Fetch Compression):** This blocks common web automation tasks. A fix for decompressing gzip/brotli responses in `web_fetch` is needed urgently.
*   **Issue #9290 (Windows Desktop Crash):** Blocks adoption on Windows desktop. The fix needs verification beyond just the Linux AppImage detection.
*   **Issue #3566 (A2A Protocol):** While not a bug, this feature tracker has high community interest and should be monitored for implementation progress in the v0.9.0 roadmap.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*