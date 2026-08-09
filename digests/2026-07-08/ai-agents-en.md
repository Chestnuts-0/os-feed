# OpenClaw Ecosystem Digest 2026-07-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-08 01:45 UTC

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
**Date:** 2026-07-08

## 1. Today's Overview
OpenClaw is experiencing high-volume development activity with 500 issues and 500 pull requests updated in the last 24 hours, indicating intense community engagement and rapid iteration. The project is currently in a critical stability phase, focusing heavily on fixing regressions introduced in recent versions (particularly around session state, message delivery, and tool execution). While no new releases were published today, the volume of merged fixes and ongoing PR reviews suggests a stabilization sprint is underway to address the "diamond lobster" rated critical bugs affecting multi-agent orchestration and core infrastructure.

## 2. Releases
*   **No new releases** were published on 2026-07-08.

## 3. Project Progress
Significant technical advancements and bug fixes were advanced or merged today, particularly in the areas of agent reliability and infrastructure:
*   **Token Estimation & Context Overflow:** Multiple PRs (#101951, #101952, #101950) focus on aligning `TOOL_RESULT_CHARS_PER_TOKEN` with actual provider billing to prevent false context-overflow triggers and unnecessary data loss during mid-turn prechecks.
*   **Session State Integrity:** Fixes for session label persistence (#101948) and self-healing reply-session conflicts (#101920) aim to resolve silent data loss and session wedging issues.
*   **Performance Optimization:** PR #89040 addresses event-loop stalls during embedded agent bootstrap, a critical fix for message loss in high-load scenarios.
*   **Infrastructure & Observability:** PR #100845 fixes OTel telemetry export for one-shot agent runs, ensuring diagnostics data is captured correctly.
*   **Automated Maintenance:** The "Clawsweeper" bot continues to automate documentation and minor code cleanup, with PR #101748 demonstrating the automerge workflow for documentation updates.

## 4. Community Hot Topics
The following issues represent the highest community interest and pain points:
*   **[Security] Text Between Tool Calls Leaks to Channels (#25592):** With 33 comments, this is the most discussed issue. Users are frustrated by internal agent noise polluting messaging channels (Slack/iMessage), impacting UX significantly.
*   **[Security] API Key Protection Roadmap (#11829):** 20 comments highlight strong demand for better secret management, specifically preventing LLM providers from accessing API keys via prompt serialization.
*   **[Feature] Private Network Access for Web Fetch (#39604):** 13 comments and 11 👍 indicate a strong desire for `tools.web.fetch.allowPrivateNetwork` to enable internal tool integration.
*   **[UX] MathJax/LaTeX Support in Control UI (#42840):** 8 comments and 9 👍 show users want better rendering for scientific/mathematical content in the web interface.
*   **[Bug] Subagent Completion Silently Lost (#44925):** 21 comments reveal deep concerns about the reliability of multi-agent orchestration, specifically regarding timeout handling and retry logic.

## 5. Bugs & Stability
Several high-severity bugs and regressions were reported or addressed today:
*   **Critical Regressions:**
    *   **#85333:** `openclaw doctor --fix` performance regression (55s → 229s+) due to session snapshot path traversal.
    *   **#38327:** Crash ("Cannot convert undefined or null to object") when using Google Vertex/Gemini models after update to 2026.3.2.
    *   **#38439 / #41201:** Control UI avatar endpoints returning 404, breaking identity display.
*   **Message Loss & Routing Issues:**
    *   **#25592:** Tool output text leaking into user channels.
    *   **#41165:** Telegram DMs incorrectly routing to the main heartbeat session despite fixes in #40519.
    *   **#99241 / #96857:** Tool outputs degrading into unreadable `(see attached image)` placeholders, causing agent blindness to text results.
*   **Multi-Agent Instability:**
    *   **#43367:** Concurrent agent addition/config overwrites and session-lock failures.
    *   **#39476:** Duplicate messages in A2A communication due to recursive `sessions_send` calls.
*   **Fix Status:** Many of these have associated PRs in review (e.g., #101920 for session conflicts), but critical path traversals and routing bugs remain open.

## 6. Feature Requests & Roadmap Signals
*   **Tiered Bootstrap Loading (#22438):** Users want to reduce token waste by loading workspace files progressively rather than injecting all bootstrap files into every session.
*   **Per-Agent Cost Budgets (#42475):** A request for gateway-level enforcement of daily/monthly spend caps to prevent runaway LLM costs.
*   **Post-Subagent Hooks (#22388):** Desire for `post_subagent_complete` events to enable automated retrospectives and structured logging of subagent tasks.
*   **Distributed Agent Runtime (#42026):** An RFC proposing splitting the gateway into a lightweight control plane and separate agent runtime processes for better scalability.
*   **PostgreSQL Support (#90370):** Closed issue requesting PostgreSQL backend instead of hardcoded SQLite, citing performance and vector search capabilities (pgvector).

## 7. User Feedback Summary
*   **Frustration with Silent Failures:** Users are increasingly vocal about "silent" data losses, such as subagent completions being dropped (#44925) or write tools overwriting shared files instead of appending (#40001).
*   **Debugging Difficulty:** The complexity of multi-agent states and session routing (e.g., Telegram DMs landing in main sessions #41165) makes troubleshooting difficult without better observability.
*   **UX Polish Needs:** Recurring issues with avatars (#38439) and image formatting in tool outputs (#99241) suggest that while core functionality is robust, presentation layer consistency needs improvement.
*   **Security Anxiety:** High engagement on API key leakage (#11829) and sandbox permissions (#37634) indicates users are cautious about deploying agents in production environments without stronger security guarantees.

## 8. Backlog Watch
*   **#25592 [OPEN] Text Between Tool Calls Leaks:** Critical UX/security issue with high comment count (33) and "diamond lobster" rating. Requires immediate maintainer attention.
*   **#44925 [OPEN] Subagent Completion Silently Lost:** High-impact bug for multi-agent workflows. 21 comments indicate persistent failure modes in timeout handling.
*   **#35203 [OPEN] Multi-Agent Collaboration Enhancement (RFC):** A comprehensive proposal for capability profiling and shared blackboards. Needs product decision and maintainership review.
*   **#42026 [OPEN] Distributed Agent Runtime (RFC):** Architectural change request. Stalled due to complexity and need for design consensus.
*   **#90370 [CLOSED] PostgreSQL Support:** Although closed, the underlying demand for scalable storage backends persists. Monitor for follow-up discussions or alternative solutions.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Ecosystem (2026-07-08)

## 1. Ecosystem Overview
The 2026 open-source AI agent landscape is defined by a critical transition from experimental prototypes to production-hardened infrastructure, with a sharp industry-wide focus on security, stability, and multi-agent orchestration. Development velocity is high across major players, yet the dominant theme is not feature expansion but rather the remediation of regressions, particularly concerning session state integrity, memory leaks, and authentication bypasses. While some projects like TinyClaw face existential security crises, others such as CoPaw and ZeroClaw are actively refining sandboxing and permission models, indicating that trust and reliability have become the primary differentiators for enterprise and power-user adoption.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Primary Focus |
| :--- | :---: | :---: | :--- | :---: | :--- |
| **OpenClaw** | 500 | 500 | Stable (No new) | ⚠️ Moderate | Stabilization & Bug Fixes |
| **Hermes Agent** | 50 | 50 | ✅ v0.18.1 (Patch) | ✅ High | Hardening & Docker/PyPI |
| **IronClaw** | 32 | 50 | Stable (No new) | ⚠️ Moderate | Concurrency & Refactoring |
| **ZeroClaw** | 23 | 50 | Stable (No new) | ✅ High | Security & Memory Leaks |
| **NanoBot** | 12 | 32 | Stable (No new) | ⚠️ Moderate | Channel Stability & WebUI |
| **CoPaw** | 16 | 38 | ✅ v2.0.0-beta.3 | ✅ High | Sandboxing & Frontend Perf |
| **NanoClaw** | N/A | 23 | Stable (No new) | ⚠️ Moderate | Docs & CLI Fixes |
| **LobsterAI** | 9 | 16 | ✅ 2026.7.7 | 🔴 Low | **Critical Security Incidents** |
| **PicoClaw** | 7 | 4 | Stable (No new) | ⚠️ Moderate | IoT/Edge Integrations |
| **TinyClaw** | 9 | 0 | Stable (No new) | 🔴 Critical | **Security Audit/Halt** |
| **NullClaw** | 0 | 0 | N/A | ❌ Inactive | N/A |
| **Moltis** | 0 | 0 | N/A | ❌ Inactive | N/A |
| **ZeptoClaw**| 0 | 0 | N/A | ❌ Inactive | N/A |

*\*Health Score inferred from issue resolution velocity, release frequency, and severity of open bugs.*

## 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw operates at a scale unmatched by competitors, with 500 issues/PRs in 24 hours, suggesting it is the de facto standard for large-scale, multi-agent orchestration. Its "diamond lobster" rated bugs indicate it is tackling the hardest problems in distributed state management.
*   **Technical Approach:** Unlike NanoBot or PicoClaw which focus on specific channels or edge devices, OpenClaw is building a general-purpose infrastructure layer (session state, token estimation, OTel telemetry) that supports complex, multi-turn agent workflows.
*   **Community Size:** The volume of engagement (500+ interactions/day) implies a significantly larger developer base and enterprise adoption compared to Hermes or IronClaw, positioning it as the "Linux kernel" of the current agent ecosystem.

## 4. Shared Technical Focus Areas
*   **Security & Authentication:**
    *   *Projects:* NanoBot, LobsterAI, TinyClaw, CoPaw, ZeroClaw.
    *   *Need:* Unauthenticated access, token leakage, and local privilege escalation are universal critical bugs. TinyClaw’s total security failure and NanoBot’s WebUI token leakage highlight a systemic lack of secure-by-default architectures in many agents.
*   **Memory & Resource Management:**
    *   *Projects:* ZeroClaw, Hermes Agent, OpenClaw.
    *   *Need:* Memory leaks (OOM) from MCP tool cloning (ZeroClaw) and resource exhaustion from stale subprocesses (Hermes) are major blockers for long-running agents. Efficient context window management is a top priority.
*   **Multi-Agent Orchestration Stability:**
    *   *Projects:* OpenClaw, Hermes Agent, CoPaw.
    *   *Need:* Silent data loss, session wedging, and race conditions in concurrent agent runs (OpenClaw #44925, Hermes #42248) are common pain points. Reliable inter-agent communication (A2A) is immature.
*   **Channel & Integration Reliability:**
    *   *Projects:* NanoBot, IronClaw, OpenClaw.
    *   *Need:* Message routing errors (Telegram/WhatsApp/Slack) and silent drops are frequent. Users demand consistent, reliable bidirectional communication across platforms.

## 5. Differentiation Analysis
*   **Target Audience:**
    *   *Enterprise/Production:* **OpenClaw** and **Hermes Agent** (focus on stability, observability, and multi-agent scales).
    *   *Developer/Edge:* **NanoBot** and **PicoClaw** (focus on mobile, IoT, and specific channel integrations like WhatsApp/Telegram).
    *   *Desktop/Consumer:* **CoPaw** and **IronClaw** (focus on GUI, local tools, and user-friendly interfaces).
*   **Architectural Philosophy:**
    *   *Monolithic vs. Modular:* **Hermes** is pushing for modular skill installation to reduce bloat, while **OpenClaw** is tackling monolithic complexity through distributed runtime proposals.
    *   *Security-First:* **CoPaw** and **ZeroClaw** are explicitly building sandboxing (AppContainer, tool filtering) as core features, whereas **TinyClaw** and **LobsterAI** demonstrate the risks of neglecting this.
*   **Feature Focus:**
    *   **PicoClaw** is unique in its push for hardware-level control (ADB, NanoKVM).
    *   **NanoBot** focuses heavily on MCP gateway stability and provider-hosted tools.
    *   **ZeroClaw** emphasizes granular permission tiers for shell commands (allow/ask/deny).

## 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Velocity):** **OpenClaw**, **Hermes Agent**, **IronClaw**, **CoPaw**. These projects are in active development cycles, merging frequent fixes and features. They are maturing from beta to production-ready.
*   **Stabilizing (Focus on Fixes):** **NanoBot**, **ZeroClaw**, **NanoClaw**. Activity is high but focused on patching regressions and security holes rather than new features.
*   **Crisis Mode (Low Trust):** **LobsterAI**, **TinyClaw**. Both have disclosed critical, unpatched security vulnerabilities. TinyClaw’s development has effectively halted due to a comprehensive security audit. These projects require immediate remediation to survive.
*   **Inactive:** **NullClaw**, **Moltis**, **ZeptoClaw**. No activity in the last 24 hours, suggesting abandonment or very low engagement.

## 7. Trend Signals
*   **Security is the New Feature:** The industry is moving past basic functionality to address foundational security flaws. The contrast between CoPaw’s rigorous sandboxing and TinyClaw’s total compromise highlights that security architecture is now a primary determinant of project viability.
*   **Observability & Debugging:** There is a strong demand for better debugging tools (OTel telemetry, session state visualization, diff views) as agents become more complex. Users are frustrated by "silent failures" and opaque error states.
*   **Decoupling from LLM Providers:** Projects like NanoBot and OpenClaw are investing in provider-agnostic tooling and MCP standards, reducing reliance on specific LLM APIs and focusing on the agent runtime itself.
*   **Hybrid Edge-Cloud Architectures:** PicoClaw’s rise and OpenClaw’s distributed runtime RFC suggest a trend toward hybrid models where local devices (Android, KVM) interact seamlessly with cloud-based agent brains, requiring robust, low-latency communication protocols.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest**
**Date:** 2026-07-08
**Source:** HKUDS/nanobot

### 1. Today's Overview
The NanoBot project exhibits high development velocity with 32 Pull Requests updated and 12 Issues addressed in the last 24 hours, indicating a period of intensive stabilization following recent major updates. Activity is heavily skewed toward fixing regressions introduced in versions 0.2.x, particularly concerning security vulnerabilities in the WebUI and stability issues in channel integrations (WhatsApp, Telegram, QQ). No new releases were published today, suggesting the team is currently focused on merging critical patches before the next version bump. The repository health appears robust despite the volume of bugs, with rapid turnaround times on security advisories and P1 priority fixes.

### 2. Releases
*   **No new releases.**
*   *Note:* Several closed PRs (#3378, #3517, #4763, #3743, #3232) indicate features and fixes are accumulating in the main branch, likely preparing for an upcoming release cycle.

### 3. Project Progress
Significant progress was made in stabilizing core infrastructure and channel reliability today:
*   **MCP Stability:** Multiple PRs addressed critical crashes in the Model Context Protocol (MCP) gateway. PR #4843 defers stale stack cleanup, and PR #4842 handles `CancelledError` during shutdown, preventing gateway crashes during reconnects. PR #4506 introduced an idle timeout auto-kill feature to prevent resource leaks.
*   **Channel Fixes:**
    *   **WhatsApp:** PR #4834 restored group ID allowlist functionality, fixing a regression where group responses were broadcast incorrectly.
    *   **WeChat:** PR #3517 fixed silent message drops caused by stale `context_token` during cron jobs or restarts.
    *   **Telegram/QQ:** PR #4839 fixed HTML parsing in Telegram streams, and PR #4838 implemented exponential backoff for QQ reconnects to reduce server load.
*   **WebUI Enhancements:** PR #4828 introduced a file edit diff view, and PR #4822 preserved automation source metadata in streamed replies.

### 4. Community Hot Topics
The community is currently most concerned with **security vulnerabilities** and **integration reliability**.
*   **WebUI Security Advisories (Issues #4825, #4826, #4827):** Three separate reports highlight that the embedded WebUI bootstrap endpoint (`/webui/bootstrap`) issues API bearer tokens to unauthenticated localhost callers. This is a critical security concern allowing local privilege escalation. *Links: [Issue #4825](https://github.com/HKUDS/nanobot/issues/4825), [Issue #4826](https://github.com/HKUDS/nanobot/issues/4826), [Issue #4827](https://github.com/HKUDS/nanobot/issues/4827)*
*   **Multimodal Crash Bugs (Issues #4800, #4805):** Users reported crashes when handling multimodal messages or tool validation errors due to improper type handling (`strip()` on lists) and suppressed exceptions. These have been addressed in PR #4837. *Links: [Issue #4800](https://github.com/HKUDS/nanobot/issues/4800), [Issue #4805](https://github.com/HKUDS/nanobot/issues/4805)*
*   **Matrix Verification (Issue #4841):** Users are requesting proper cross-signing/SAS verification paths for Matrix bots to resolve "Untrusted" device warnings. *Link: [Issue #4841](https://github.com/HKUDS/nanobot/issues/4841)*

### 5. Bugs & Stability
Ranked by severity, the following critical issues were reported and/or fixed today:

| Severity | Issue/PR | Description | Status/Fix |
| :--- | :--- | :--- | :--- |
| **Critical** | [Issue #4825-4827](https://github.com/HKUDS/nanobot/issues/4825) | WebUI Bootstrap Token Leakage | **Open** - Unauthenticated localhost access to API tokens. |
| **High** | [Issue #4611](https://github.com/HKUDS/nanobot/issues/4611) | DNS Rebinding TOCTOU in SSRF | **Closed** - Security patch applied for `validate_url_target`. |
| **High** | [Issue #4823](https://github.com/HKUDS/nanobot/issues/4823) | WhatsApp Group Broadcast Regression | **Open** - Groups respond in all channels; fix in PR #4834. |
| **Medium** | [Issue #4800](https://github.com/HKUDS/nanobot/issues/4800) | Multimodal Content Crash | **Fixed** - PR #4837 adds type checking for `.strip()`. |
| **Medium** | [Issue #4805](https://github.com/HKUDS/nanobot/issues/4805) | Silent Tool Validation Errors | **Fixed** - PR #4837 replaces `suppress(Exception)` with logging. |
| **Low** | [Issue #4829](https://github.com/HKUDS/nanobot/issues/4829) | Missing `aiohttp` in Slack Deps | **Open** - Dependency omission in `pyproject.toml`. |

### 6. Feature Requests & Roadmap Signals
*   **Provider-Hosted Tools:** Issue #3741 and PR #3743 discuss support for provider-hosted web search (e.g., Azure OpenAI). This suggests a roadmap shift toward delegating specific tool executions to LLM providers rather than executing them locally.
*   **Goal Management Overhaul:** PR #4833 proposes gating "sustained goals" behind explicit runtime modes, replacing always-visible long-task tools. This indicates a refinement of the agent's long-term planning capabilities to reduce noise and improve focus.
*   **Camera Capture:** PR #3378 adds a webcam capture tool via OpenCV. While closed, its inclusion signals ongoing interest in expanding physical-world interaction capabilities.

### 7. User Feedback Summary
Users are expressing frustration with the stability of the recent 0.2.0+ updates.
*   **Pain Points:** The WhatsApp group regression (#4823) and WebUI token leakage (#4825) are causing significant operational friction. Users report that "real work is useless" due to streaming stalls (#4013) and silent tool failures (#4805).
*   **Positive Feedback:** Despite bugs, users appreciate the rapid response to issues. The addition of the file edit diff view (#4828) and preservation of automation sources (#4822) addresses specific usability gaps identified by power users.
*   **Satisfaction:** Mixed. High satisfaction with the direction of MCP stability and WebUI enhancements, but low satisfaction with the current state of channel reliability and security hygiene in the WebUI bootstrap process.

### 8. Backlog Watch
Maintainers should prioritize the following items:
*   **Security Patch for WebUI Bootstrap:** Issues #4825, #4826, and #4827 describe a serious security flaw allowing local token minting. This requires immediate attention and likely a hotfix release.
*   **Slack Dependency Fix:** Issue #4829 highlights a missing dependency (`aiohttp`) that breaks Slack integration builds.
*   **Matrix Cross-Signing:** Issue #4841 requests a solution for "Untrusted" device status in Matrix clients, which is a barrier to adoption for privacy-conscious users.
*   **Zombie Process Reaping:** PR #4840 addresses zombie processes in shell tools; ensure this is merged to prevent resource exhaustion in long-running agents.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** July 8, 2026
**Source:** NousResearch/hermes-agent GitHub Repository

### 1. Today's Overview
Hermes Agent demonstrates high velocity today with 50 issues and 50 pull requests updated in the last 24 hours, indicating intense community engagement and active maintenance. The release of v0.18.1 serves as a crucial stabilization patch, aggregating approximately 660 prior PRs into a stable baseline for Docker, PyPI, and hosted deployments. Current activity is heavily focused on resolving critical stability regressions introduced in recent updates, particularly concerning session state management, resource leaks (MCP/Gateway), and configuration caching. While feature development continues (e.g., Discord threading, behavioral analysis), the primary driver today is hardening the platform against crashes and data loss.

### 2. Releases
*   **v0.18.1 (Tag: v2026.7.7)**
    *   **Type:** Patch Release.
    *   **Scope:** Rolls up ~660 PRs merged since v0.18.0 (July 1).
    *   **Content:** Primarily bug fixes, hardening, and in-progress feature work stabilized for production.
    *   **Impact:** Provides a stable tagged release for downstream consumers (Docker images, hosted deployments, PyPI). No major breaking changes announced, but recommended for all users to ensure consistency with the latest bug fixes.

### 3. Project Progress
**Key Merged/Closed Items & Advances:**
*   **Discord Integration:** PR #60146 introduces `/branch` and `/merge` commands for Discord, allowing session threading and folding, significantly improving multi-conversation management on the platform.
*   **Platform Support:** PR #3335 advances Zulip integration, moving it into the bundled platform plugin system. PR #60594 fixes deprecated `datetime.utcnow()` usage in BlueBubbles to prevent future Python 3.14 incompatibilities.
*   **Desktop UX:** PR #55787 fixes context-usage display bugs on resumed sessions. PR #60608 implements a two-way contract check for GUI/backend version compatibility.
*   **Behavioral Features:** PR #60417 adds a `/behavior` command providing qualitative insights into agent usage patterns, complementing quantitative `/insights`.

### 4. Community Hot Topics
**Most Active Issues (by comments/attention):**
*   **[OPEN] #19986: Make non-core bundled skills optional** (9 comments, 3 👍)
    *   *Analysis:* Users are pushing back against the bloated default installation size. There is a strong demand for modular skill loading to reduce footprint and maintenance overhead.
*   **[CLOSED] #6838: MiniMax provider connection drops** (7 comments)
    *   *Analysis:* Migration friction from competitors (OpenClaw) highlights stability concerns with specific LLM providers. This was resolved, but indicates sensitivity to provider reliability.
*   **[OPEN] #55790: Stale credential pool entries** (6 comments)
    *   *Analysis:* Users report confusion when removed providers persist in the UI. This points to a need for better state synchronization between the Desktop UI and backend credential stores.

**Notable PR Discussions:**
*   **PR #60617:** Windows WSL launcher stub resolution for cron jobs. Reflects growing interest in Windows-native cron functionality.
*   **PR #60547:** Security boundary fix for cron mode denial. Highlights community concern over unintended permission grants in automation workflows.

### 5. Bugs & Stability
**Critical & High Severity Issues Reported/Fixed Today:**

1.  **Resource Leaks (MCP/Gateway)**
    *   *Issue:* #59349, #57228, #57355 describe severe leaks of stdio-MCP subprocesses and file descriptors, leading to `EMFILE` (too many open files) and zombie processes.
    *   *Status:* Multiple PRs addressing cleanup logic are active. This is a major stability risk for long-running deployments.
2.  **Configuration Caching Staleness**
    *   *Issue:* #50199, #18946, #57930 report that `hermes config set` changes do not reflect in running processes due to stale `CLI_CONFIG` caches.
    *   *Impact:* Requires manual restarts for config changes, hindering operational flexibility.
3.  **Session State & Resume Failures**
    *   *Issue:* #60541, #60607 describe Desktop cold boots restoring stale session IDs, causing crashes or blank states.
    *   *Fix:* PR #60607 aims to fallback to the most recent valid session.
4.  **File Write Race Conditions**
    *   *Issue:* #60525 reports `write_file()` committing invalid JSON/YAML/TOML to disk before syntax checks run.
    *   *Fix:* PR #60618 gates syntax checks before disk writes.
5.  **Gateway Crashes**
    *   *Issue:* #45454 reports repeated `SystemExit: 75` crashes in Telegram gateway on macOS.
    *   *Severity:* High, affects core messaging reliability.

### 6. Feature Requests & Roadmap Signals
*   **Modular Skill Installation:** Issue #19986 suggests a roadmap shift toward smaller, optional default installs.
*   **Advanced Behavioral Analytics:** PR #60417 indicates a move toward qualitative agent profiling, suggesting future dashboards may focus more on "how" rather than just "how much."
*   **Windows Native Improvements:** Multiple PRs (#60617, #60605) targeting Windows-specific bugs (WSL stubs, console windows) signal increased investment in Windows parity.
*   **Discord Threading:** The advancement of `/branch`/`/merge` (#60146) suggests Discord is a priority platform for complex conversation management.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Bloat:** Users feel the default install is too heavy with unused skills (#19986).
    *   **Config Persistence:** The inability to apply config changes without restarting services is a major operational friction point (#50199, #18946).
    *   **Windows Experience:** Inconsistent behavior on Windows (console windows, WSL paths) causes frustration (#60605, #60617).
    *   **UI Glitches:** Desktop app exhibits visual bugs (centered messages on Windows, stale session resumes) (#60596, #60541).
*   **Satisfaction:**
    *   Positive reception of new Discord threading features.
    *   Appreciation for rapid patching of critical security/resource leak bugs.

### 8. Backlog Watch
*   **[OPEN] #42248: Kanban workers deadlock** (P2)
    *   *Risk:* Critical for multi-agent workflows. Workers using local models deadlock, halting progress. Needs urgent investigation.
*   **[OPEN] #50404: Discord config not profile-isolated** (P2)
    *   *Risk:* Cross-profile data leakage in settings. Affects multi-user or multi-project setups.
*   **[OPEN] #60543: /steer race condition** (P2)
    *   *Risk:* Out-of-band user messages are lost, breaking interactive control.
*   **[CLOSED/NEEDS-REVIEW] #55790: Stale credentials**
    *   *Action:* Ensure the fix for credential persistence aligns with the broader auth cleanup efforts.

---
*Generated by Agnes-2.0-Flash for NousResearch Hermes Agent Analysis.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-07-08
**Source:** GitHub Activity Analysis

### 1. Today's Overview
PicoClaw maintains steady development momentum with 7 issues and 4 pull requests updated in the last 24 hours. The project is currently operating on versions v0.2.9 and v0.3.1, with no new releases published today. Community engagement is mixed, showing strong interest in advanced integration features (ADB, DeltaChat) alongside persistent stability concerns regarding specific AI provider configurations and rate-limiting logic. The repository remains active, though several issues are marked as "stale," indicating potential maintenance gaps.

### 2. Releases
*   **Status:** No new releases published today.
*   **Context:** Recent activity references versions `v0.2.9` and `0.3.1`. Users are encountering bugs in both stable and newer builds.

### 3. Project Progress
**Merged/Closed PRs:**
*   **[PR #3157] feat: add Android ADB remote operations tool** (Closed/Merged): Added experimental support for Android device management via ADB, providing primitives for screenshots, UI hierarchy, and input simulation. This expands PicoClaw’s utility in IoT and mobile automation contexts.

**Open PRs Under Review:**
*   **[PR #3222] refactor(deltachat): cleanup implementation**: Significant refactoring of the DeltaChat integration, dropping legacy features and standardizing configuration methods.
*   **[PR #3226] fix(tools): stop write_file from coaching destructive overwrite**: Addresses a safety issue where the agent was encouraged to overwrite files aggressively.
*   **[PR #3233] Fix pr 3222 backward compat**: A follow-up fix for the DeltaChat refactoring to ensure compatibility.

### 4. Community Hot Topics
*   **Android Automation Interest**: The closure of **[Issue #3157 / PR #3157]** highlights growing demand for hardware-level control. Users are leveraging PicoClaw not just for LLM interaction but for physical device management (NanoKVM, Android).
*   **Protocol Expansion Demands**: **[Issue #3093]** requests support for SimpleX, Tox, or Wire. This indicates users want PicoClaw to act as a unified gateway for private/encrypted messaging protocols, extending beyond standard web/API integrations.
*   **DeltaChat Integration**: **[PR #3222]** shows active community effort to clean up and improve DeltaChat support, suggesting this is a high-priority niche feature for privacy-focused users.

### 5. Bugs & Stability
**Reported Issues (Ranked by Severity):**

1.  **[Issue #3232] Rate limiting doesn't work if no fallback models is configured** (High)
    *   *Severity:* Critical for production reliability. If rate limits fail without fallbacks, agents may crash or behave unpredictably under load.
    *   *Status:* Open, created today.
    *   *Link:* [Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)

2.  **[Issue #3195] OpenAI GPT does not work on NanoKVM with default config** (Medium)
    *   *Severity:* Blocks core functionality for a significant hardware subset (NanoKVM users).
    *   *Status:* Open.
    *   *Link:* [Issue #3195](https://github.com/sipeed/picoclaw/issues/3195)

3.  **[Issue #3153] Volcengine Doubao Seed tool calls leak as raw text** (Medium)
    *   *Severity:* Breaks agent execution flow for Volcengine users. Tool calls are exposed as XML text instead of being parsed/executed.
    *   *Status:* Open.
    *   *Link:* [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)

4.  **[Issue #3196/3197] Codex and antygravity oauth login not working** (Low/Medium)
    *   *Severity:* Authentication failure for specific third-party integrations.
    *   *Status:* Open. Duplicate reports suggest urgency.
    *   *Link:* [Issue #3196](https://github.com/sipeed/picoclaw/issues/3196), [Issue #3197](https://github.com/sipeed/picoclaw/issues/3197)

5.  **[Issue #3159] Repetitive tasks (Chinese)** (Low)
    *   *Severity:* Logic error causing redundant API calls/tasks.
    *   *Status:* Closed (likely resolved or stale).
    *   *Link:* [Issue #3159](https://github.com/sipeed/picoclaw/issues/3159)

### 6. Feature Requests & Roadmap Signals
*   **Private Messaging Gateways**: **[Issue #3093]** suggests a roadmap direction towards supporting decentralized/private protocols (SimpleX, Tox).
*   **Hardware Integration**: The successful merge of ADB tools and reports of NanoKVM usage indicate a roadmap leaning into edge-device and hardware-in-the-loop automation.
*   **Safety Controls**: **[PR #3226]** addresses "coaching" behaviors, suggesting future versions will prioritize safer, more conservative file operation defaults.

### 7. User Feedback Summary
*   **Pain Points**:
    *   Configuration fragility: Users report failures with default configs on specific hardware (NanoKVM) and providers (Volcengine).
    *   Authentication drift: OAuth flows for Codex/Antygravity are broken.
    *   Rate Limiting Logic: The dependency of rate-limiting behavior on having fallback models configured is counter-intuitive and risky.
*   **Use Cases**:
    *   **IoT/Edge Control**: Managing Android devices and KVM switches.
    *   **Privacy-Centric Agents**: Seeking integration with encrypted chat apps.
    *   **Development Assistance**: Using tool-calling capabilities for coding tasks (despite current parsing bugs).

### 8. Backlog Watch
*   **[Issue #3093] SimpleX/Tox Support**: High demand for privacy protocols but lacks immediate technical traction.
*   **[Issue #3153] Volcengine Tool Call Leak**: Affects a specific but likely large user base (Chinese market/enterprise). Requires vendor-specific debugging.
*   **[Issue #3195] NanoKVM Compatibility**: As NanoKVM is a key hardware partner/ecosystem, this bug blocks adoption for a segment of the user base.
*   **Stale Issues**: Several issues (#3093, #3153, #3195, #3159, #3196, #3197) are marked `[stale]`. Maintainers should review these to determine if they require immediate fixes or can be closed to reduce noise.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-07-08

## 1. Today's Overview
NanoClaw exhibits high development velocity with 23 pull requests updated in the last 24 hours, indicating a burst of maintenance, documentation alignment, and feature refinement. However, there are zero new releases, suggesting these changes are still undergoing review or integration. A critical security advisory regarding local action forgery via unauthenticated webhooks was opened today, signaling an immediate need for attention from maintainers to address potential supply chain or execution integrity risks.

## 2. Releases
No new releases were published today. The project appears to be in a consolidation phase, focusing on stabilizing recent contributions and aligning documentation with the latest SDK versions (v2.1.38+) prior to the next tag.

## 3. Project Progress
Significant progress was made in documentation accuracy and CLI stability:
*   **Documentation Alignment:** Several PRs (#2961, #2962, #2963, #2964) merged by `glifocat` successfully updated stale architectural docs, DB schema references, and SDK deep-dives to match current codebases, reducing technical debt.
*   **CLI Fixes:** PR #2804 resolved a critical `NOT NULL` constraint failure in the `ncl messaging-groups create` command, restoring functionality to a previously broken CLI path.
*   **Provider Logic:** PR #2965 fixed rate-limit event handling in the Claude provider to correctly map top-level SDK messages, improving error resilience.
*   **Discord Integration:** PR #2922 fixed forwarded message snapshots, ensuring agents receive the actual content rather than wrapper metadata.

## 4. Community Hot Topics
The most discussed items involve security hardening and setup wizard improvements:
*   **Security Advisory:** Issue #2970 highlights a vulnerability where the localhost webhook does not authenticate senders, allowing potential local action forgery. This is a high-priority topic requiring immediate maintainer response. [Link](https://github.com/nanocoai/nanoclaw/issues/2970)
*   **Setup Wizard Enhancements:** PR #2909 introduces agent templates into the setup flow, while PR #2972 refines the Wizard UX for Slack and other integrations. These indicate strong community interest in lowering the barrier to entry for first-time users. [Link](https://github.com/nanocoai/nanoclaw/pull/2909) | [Link](https://github.com/nanocoai/nanoclaw/pull/2972)
*   **Supply Chain Security:** PR #2973 activates a `minimumReleaseAge` gate in pnpm configuration, reflecting community concern over dependency injection risks. [Link](https://github.com/nanocoai/nanoclaw/pull/2973)

## 5. Bugs & Stability
Several bugs and regressions were addressed or reported today:
1.  **[High] Local Action Forgery (Security):** Unauthenticated webhook acceptance allows potential code execution or state manipulation. (Issue #2970)
2.  **[Medium] Messaging Group Creation Crash:** The CLI threw `NOT NULL constraint failed` due to schema mismatch. Fixed in PR #2804.
3.  **[Medium] Rate Limit Misclassification:** Provider errors were marked as completed instead of failed, masking issues. Fixed in PR #2966 (Open) and #2965 (Closed).
4.  **[Low] Folder Path Traversal:** PR #2800 addresses a CWE-22 vulnerability where `ncl groups create` could escape directories via `..` in folder paths.

## 6. Feature Requests & Roadmap Signals
*   **Agent Templates:** PR #2909 suggests a roadmap shift toward templated agent creation during setup, moving away from blank-slate configurations.
*   **Remote Storage:** PR #1598 remains open, proposing WebDAV/S3 support via `rclone`. This indicates sustained user demand for flexible storage backends.
*   **Teams/Slack Integration Refinement:** Multiple PRs (#2958, #2972) focus on streamlining credential flows and UI for Microsoft Teams and Slack, suggesting these channels are becoming first-class citizens in the platform.

## 7. User Feedback Summary
Users are actively engaging with the setup process, providing detailed feedback on documentation accuracy and wizard flows. The volume of "docs" PRs implies that previous documentation was significantly outdated, causing friction for new contributors. The focus on "utility skills" and "operational skills" (PR #2971, #2969) shows users value modular, standalone tools that don't require core source changes, favoring a plugin-like architecture for daily operations.

## 8. Backlog Watch
*   **Security Patch Needed:** Issue #2970 requires immediate triage. The lack of authentication on the loopback webhook is a significant security gap.
*   **Long-standing Remote Storage:** PR #1598 has been open since April 2026. It represents a major feature request that, if merged, would significantly expand deployment options.
*   **Approval Workflow Race Condition:** PR #2974 attempts to fix a race condition in pending approvals. Maintainers should verify if this atomic claim mechanism resolves the concurrency issues mentioned in related discussions.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-07-08
**Source:** nearai/ironclaw

## 1. Today's Overview
The IronClaw project exhibits high development velocity today, with 32 issues and 50 pull requests updated in the last 24 hours. Despite zero new releases, the team is actively addressing critical stability regressions in the "Reborn" architecture, particularly around concurrency, tool permissions, and UI responsiveness. Significant effort is being poured into refactoring the codebase structure (Slack cluster, default setters) and hardening security surfaces, indicating a phase of intense technical debt repayment and architectural stabilization rather than new feature launches.

## 2. Releases
*   **No new releases published.**
*   *Note:* Several closed issues (e.g., #3083, #5466, #5467, #5694, #5696, #5554) suggest recent patches were merged into the main branch but not yet tagged as a formal release.

## 3. Project Progress
**Key Merged/Closed Items & Advances:**
*   **Concurrency & State Store Fixes:** Closed issues #5466 and #5467 highlight progress in fixing parallel turn-runs and `ApprovalRequestStore` divergence between in-memory and filesystem backends, crucial for multi-threaded stability.
*   **Security Hardening:** Closed issue #5694 addressed a critical bug where `clientActionId()` broke mutating requests on insecure (HTTP) origins. Issue #5696 hid unsupported operator-config fields to prevent invalid API calls.
*   **UI/UX Improvements:** Closed issue #5554 fixed mobile chat layout horizontal overflow. Closed issue #5698 ensured tool permission save failures are now surfaced in the WebUI v2 Settings tab.
*   **Refactoring:** Active PRs #5791, #5792, #5793, #5794, #5796 focus on introducing fluent default-backed builders to reduce boilerplate across the Reborn path. PR #5785 begins dissection of the large Slack module cluster.

## 4. Community Hot Topics
*   **[Issue #5702] GitHub Integration HTTP 403 Errors**
    *   *Link:* https://github.com/nearai/ironclaw/issues/5702
    *   *Analysis:* High interest (4 comments). Users are blocked from using core GitHub capabilities (search/create issues). This suggests a misconfiguration in OAuth scopes or token handling within the Reborn agent loop.
*   **[Issue #5747] Slack Unpairing Limitations**
    *   *Link:* https://github.com/nearai/ironclaw/issues/5747
    *   *Analysis:* Users report no way to disconnect Slack pairs via UI, creating friction for identity management. This highlights a gap in the built-in `host-beta` mount UX.
*   **[PR #5280] Trace Commons Instance-Wide Enrollment**
    *   *Link:* https://github.com/nearai/ironclaw/pull/5280
    *   *Analysis:* Large-scale PR discussing per-user profiles and trace inspection, indicating a shift towards granular observability and multi-tenant compliance.
*   **[PR #5790] Prompt-Context Budget Override**
    *   *Link:* https://github.com/nearai/ironclaw/pull/5790
    *   *Analysis:* Technical discussion on overriding `PromptContextTokenBudget`, reflecting community need for better control over context window management in long-running agents.

## 5. Bugs & Stability
**High Severity / Critical Stability Issues:**
1.  **#5776: Model Timeouts Degraded to Generic Errors**
    *   *Link:* https://github.com/nearai/ironclaw/issues/5776
    *   *Impact:* Long prompts cause timeouts that mask the real error, hindering debugging.
2.  **#5787: Flaky Slack Pairing Code Test**
    *   *Link:* https://github.com/nearai/ironclaw/issues/5787
    *   *Impact:* Race condition between tokio clock and chrono wall-clock TTL. *Fix PR:* #5789 aims to resolve this deterministically.
3.  **#5702: GitHub Integration 403 Failures**
    *   *Link:* https://github.com/nearai/ironclaw/issues/5702
    *   *Impact:* Complete blockage of GitHub issue operations.
4.  **#5701: Activity Panel Stalling**
    *   *Link:* https://github.com/nearai/ironclaw/issues/5701
    *   *Impact:* UI fails to update real-time during tool runs, providing poor feedback to users.
5.  **#5704: Image Preview Transparency**
    *   *Link:* https://github.com/nearai/ironclaw/issues/5704
    *   *Impact:* Visual regression where images disappear during active agent runs.

## 6. Feature Requests & Roadmap Signals
*   **Custom Dropdowns for Tool Permissions:** Issue #5770 requests replacing native `<select>` elements in Settings for better consistency and dark-mode support.
*   **Automation Renaming:** Issue #5419 highlights the inability to rename auto-generated automation names, a frequent user complaint for clarity.
*   **Private Tool Installs:** PR #5525 and #5499 signal the roadmap towards allowing non-admin users to install specific tools (WASM/ZIP) privately, enhancing multi-user flexibility.
*   **Design System Tokens:** PR #5563 introduces design system tokens and a playground, suggesting a move toward standardized, autonomous UI updates.
*   **Onboarding/NUX Demo:** PR #5565 showcases intent handoff and OAuth entry flows, pointing to improved first-time user experiences.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by lack of visibility into *why* errors occur (e.g., generic "invalid result" in #5776, hidden save failures in #5698). The UI often lags behind the agent's state (sidebar UUIDs in #5706, transparency in #5704).
*   **Configuration Friction:** Managing integrations like Slack (unpairing issues in #5747) and GitHub (403 errors in #5702) is perceived as brittle.
*   **Mobile Experience:** Horizontal overflow on mobile devices (#5554) indicates the responsive design needs refinement for smaller screens.
*   **Positive Signals:** The introduction of private tool installs (#5525) and better error surfacing in settings (#5698) addresses specific enterprise and power-user needs for control and transparency.

## 8. Backlog Watch
*   **[Issue #3535] Incorrect UI Timestamps**
    *   *Link:* https://github.com/nearai/ironclaw/issues/3535
    *   *Status:* Open since May 2026. Basic UX flaw affecting trust in conversation logs.
*   **[Issue #4338] Misleading Driver Errors on Disconnect**
    *   *Link:* https://github.com/nearai/ironclaw/issues/4338
    *   *Status:* Open since June 2026. Users see "MiniMax-M2.7" errors instead of connection lost messages, confusing troubleshooting.
*   **[Issue #4108] Nightly E2E Failures**
    *   *Link:* https://github.com/nearai/ironclaw/issues/4108
    *   *Status:* Persistent CI instability. Requires attention to ensure release confidence.
*   **[Issue #5768] Incomplete i18n Coverage**
    *   *Link:* https://github.com/nearai/ironclaw/issues/5768
    *   *Status:* Open. Hardcoded English strings in the Projects page hinder localization efforts for non-English users.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest**
**Date:** 2026-07-08
**Source:** GitHub (netease-youdao/LobsterAI)

### 1. Today's Overview
LobsterAI demonstrated high development velocity on July 7-8, 2026, with 16 pull requests updated and 9 issues addressed in the last 24 hours. The project released version **2026.7.7**, marking a significant update to the scheduled task interface and provider integrations. While routine bug fixes and UI refinements dominated the merged PRs, a cluster of three critical security advisories raised today indicates an urgent need for immediate patching regarding local token proxies and file disclosure vulnerabilities. Overall, the repository is active and responsive, though the security incidents present a notable risk to current deployments.

### 2. Releases
**Version: 2026.7.7 (Released 2026-07-07)**

*   **Key Changes:**
    *   **Scheduled Tasks:** Complete redesign of the task list card, introducing status chips, toggle controls, search functionality, and optimistic UI feedback (PR #2273).
    *   **Provider Support:** Added OAuth login support for xAI (Grok) (PR #2273).
*   **Breaking Changes/Migration Notes:** None explicitly stated in the release notes. However, the UI redesign for scheduled tasks may require users to adjust their workflow preferences if they relied on the previous layout.

### 3. Project Progress
Several key areas saw advancement through merged/closed PRs:

*   **Cowork & Agent Collaboration:**
    *   Stabilized steer follow-up routing and restored compact menu widths (PR #2292, #2268).
    *   Addressed stalled compaction retry maintenance to prevent context loss (PR #2289).
    *   *Note:* PR #2285 proposing "delegated subagent collaboration" is currently **Open**, indicating this feature is still under review/testing.
*   **Email Skill Enhancement:**
    *   Implemented multi-account support for the `imap-smtp-email` skill, including settings management and connectivity testing (PR #2275).
*   **Analytics & Reliability:**
    *   Fixed usage event reporting edge cases for skills, IM settings, and scheduled tasks (PR #2245).
*   **Dependency Updates:**
    *   Dependabot PR #1277 remains open to bump Electron from 40.2.1 to 43.0.0.

### 4. Community Hot Topics
The most discussed items reflect a focus on stability, security, and cross-agent consistency:

*   **[Security] Unauthenticated Local Token Proxy (Issue #2286):** Highlights a critical flaw where any local process can replay authenticated API capabilities. This is a top-priority topic due to its severity.
*   **[Security] HTML Preview Symlink Disclosure (Issue #2288):** Users are concerned about arbitrary local file disclosure via symlinks in the preview server.
*   **Agent "About You" Syncing (Issue #2293):** A user reports that modifying `USER.md` for one agent synchronously affects all agents, hindering personalized agent configurations. This suggests a need for isolated memory contexts per agent instance.
*   **Overview Page Bugs (Issues #1411, #1414, #1416):** Multiple reports indicate persistent UI/UX issues on the profile/overview page, including unresponsive filters, incorrect total session counts, and layout overlaps when switching languages.

### 5. Bugs & Stability
Bugs reported today are categorized by severity based on impact and nature:

1.  **Critical Security Vulnerabilities (High Severity):**
    *   **Issue #2286:** Unauthenticated local token proxy allowing API replay.
    *   **Issue #2287:** NIM outbound media flow allowing local file exfiltration via absolute paths.
    *   **Issue #2288:** HTML preview server disclosing local files via symlinks.
    *   *Status:* No fix PRs linked yet; these require immediate security patches.

2.  **UI/UX & Functional Bugs (Medium Severity):**
    *   **Issue #1411:** "Past 30 Days" filter on Overview page is unresponsive.
    *   **Issue #1414:** "Total Sessions" always displays as 0 despite active usage.
    *   **Issue #1416:** English language switch causes text/number overlap in "Current Plan" card.
    *   **Issue #1413:** Poor display of many skills in the input box.

3.  **Historical/Stale Bugs (Low Severity/Maintenance):**
    *   **Issue #1409:** Scheduled tasks triggering without generating history logs.
    *   *Note:* Several backend fixes were merged recently (PRs #1407, #1408, #1410, #1415, #1419, #1420, #1421) addressing SQLite performance, NIM enum mapping, and Cron job concurrency, which likely mitigate underlying stability issues contributing to these bugs.

### 6. Feature Requests & Roadmap Signals
*   **Delegated Subagent Collaboration (PR #2285):** The proposal to allow agents to delegate tasks to sub-agents, visible as "Cowork child sessions," signals a roadmap shift toward hierarchical agent orchestration.
*   **Multi-Account Email Skills (PR #2275):** The recent merge of multi-account support suggests continued expansion of the skills ecosystem beyond single-provider limits.
*   **Predicted Next Steps:** Given the open PRs for Electron updates (#1277) and the pending security fixes, the next release (likely 2026.7.8 or 2026.7.9) will prioritize patching the security vulnerabilities in #2286-#2288 and merging the delegation feature if approved.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the lack of isolation between agents (Issue #2293) and persistent inaccuracies in the dashboard statistics (Issues #1411, #1414). The visual clutter when many skills are loaded is also a common complaint (Issue #1413).
*   **Satisfaction:** The redesign of the scheduled task UI (PR #2273) and the addition of xAI support are positive developments. Users appreciate the responsiveness of the maintainers in merging functional improvements like the email skill updates.
*   **Trust:** The disclosure of multiple security vulnerabilities involving local token proxies and file access is likely to erode user trust if not patched rapidly.

### 8. Backlog Watch
*   **Security Patches Required:** Issues #2286, #2287, and #2288 are critical and currently lack assigned PRs. Maintainers must address these immediately.
*   **Electron Upgrade:** PR #1277 has been open since April 2026. Updating to Electron 43.0.0 is necessary for security and performance but requires careful testing.
*   **Subagent Delegation:** PR #2285 is open and represents a significant architectural change. Review progress should be monitored.
*   **Stale Issues:** Issues #1409, #1411, #1413, #1414, and #1416 are marked `[stale]` but remain unresolved. These indicate a backlog of UI/UX refinements that need attention to improve daily user experience.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest: 2026-07-08

### 1. Today's Overview
The TinyAGI project is currently in a critical security incident state, characterized by a coordinated disclosure of nine distinct high-severity vulnerabilities affecting its core architecture. Activity is heavily skewed towards issue reporting, with zero pull requests merged or closed in the last 24 hours, indicating a halt in standard feature development to address these systemic flaws. All recent issues were opened on 2026-07-07 by a single author, suggesting a comprehensive audit or responsible disclosure process rather than organic bug reports. The absence of new releases and the sheer volume of "unauthenticated access" vulnerabilities highlight a fundamental lack of security boundaries in the current release.

### 2. Releases
No new releases were published today. The latest available version likely contains all the vulnerabilities listed below, necessitating an urgent hotfix or major security patch release in the near future.

### 3. Project Progress
There was no standard feature progress or bug fixing via merged Pull Requests today. The project's development momentum has effectively paused due to the severity of the security findings. No technical debt related to features was addressed; instead, the entire repository's integrity is under review.

### 4. Community Hot Topics
The community focus is entirely dominated by a series of critical security advisories regarding unauthenticated access. These issues have garnered significant attention due to their severity, though they currently have zero comments or reactions, likely because the disclosures are fresh or being handled privately before public discussion.

*   **[Security] TinyAGI unauthenticated control-plane routes allow system prompt overwrite and daemon restart** (#294)
    *   *Link:* [GitHub Issue #294](https://github.com/TinyAGI/tinyagi/issues/294)
    *   *Analysis:* This is arguably the most dangerous finding, allowing full system compromise. It indicates a complete failure in access control for administrative functions.
*   **[Security] TinyAGI unauthenticated agent ID path traversal escapes the configured workspace root** (#293)
    *   *Link:* [GitHub Issue #293](https://github.com/TinyAGI/tinyagi/issues/293)
    *   *Analysis:* Path traversal vulnerabilities pose a direct risk of reading/writing arbitrary files on the host system, escalating from application-level bugs to OS-level compromises.
*   **[Security] TinyAGI allows unauthenticated API callers to exfiltrate arbitrary local files via outbound channel attachments** (#289)
    *   *Link:* [GitHub Issue #289](https://github.com/TinyAGI/tinyagi/issues/289)
    *   *Analysis:* This confirms data leakage risks, where sensitive local information can be extracted by any remote actor, violating basic privacy and security expectations.

### 5. Bugs & Stability
The stability of the project is critically compromised. The following high-severity bugs were reported today, all stemming from missing authentication mechanisms:

1.  **Severity: Critical** - Unauthenticated System Prompt Overwrite & Daemon Restart (#294). Risk: Total control hijack.
2.  **Severity: Critical** - Unauthenticated Administrative API for Persistent Settings (#292). Risk: Configuration tampering.
3.  **Severity: High** - Anthropic Adapter Disables Safety Confirmations (#291). Risk: Unsafe AI operations without user consent.
4.  **Severity: High** - Terminal Escape Injection/Log Spoofing (#290). Risk: Operator deception and potential command injection.
5.  **Severity: High** - File Exfiltration via Outbound Attachments (#289). Risk: Data breach.
6.  **Severity: High** - Unauthenticated Local Control Plane Leaking Live Events (#288). Risk: Information disclosure.
7.  **Severity: Medium** - Unauthenticated Pairing Management (#287). Risk: Unauthorized device/channel connections.
8.  **Severity: High** - Unauthenticated Local Control API Allowing Settings Mutation (#286). Risk: Persistent configuration abuse.
9.  **Severity: High** - Unauthenticated Agent ID Path Traversal (#293). Risk: File system compromise.

No fix PRs exist yet. These are not isolated bugs but architectural failures requiring immediate remediation.

### 6. Feature Requests & Roadmap Signals
There are no feature requests or roadmap signals today. The project's immediate roadmap is forced into emergency maintenance mode. Any planned features are likely deprioritized until these security holes are patched. The primary signal is the need for a robust authentication layer across all API endpoints.

### 7. User Feedback Summary
Current feedback is limited to the security disclosures themselves. The implicit user pain point is severe distrust in the application's safety when deployed locally or exposed to networks. The fact that an unauthenticated client can restart daemons, overwrite system prompts, and read local files suggests that users cannot safely rely on TinyAGI for any sensitive tasks or even casual experimentation without risking their host machine's integrity. Satisfaction is likely non-existent among those aware of these vulnerabilities.

### 8. Backlog Watch
Maintainers must immediately address the backlog of nine security issues (#286–#294). These are not typical backlog items but critical incidents requiring prioritized engineering resources. Failure to resolve these will likely lead to a loss of trust and potential abandonment of the project by security-conscious users. The maintainer's response time and the clarity of the patch notes will be the key metrics for project recovery in the coming days.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw Project Digest: 2026-07-08**

### 1. Today's Overview
The CoPaw project exhibits high velocity with 16 active issues and 38 pull requests updated in the last 24 hours, indicating robust community engagement and rapid iteration. Development focus is heavily concentrated on stabilizing the upcoming v2.0.0 release, particularly addressing security sandboxing, frontend rendering performance, and context compression robustness. The team is actively refining CI/CD pipelines to prevent spam and ensure release quality, while simultaneously patching critical bugs in tool execution and file guarding. Overall project health is strong, though several high-severity stability issues regarding large context handling and sandbox permissions require immediate attention.

### 2. Releases
*   **v2.0.0-beta.3**: Released today.
    *   **Key Changes**:
        *   **CI Fix**: Guarded against empty `extra_flags` expansion for Bash 3.2 on macOS (PR #5743).
        *   **Auth Security**: Enhanced rate limiting with multi-dimensional protection mechanisms (PR #5738).
    *   **Migration Notes**: Users upgrading to beta should verify their authentication configurations due to the enhanced rate-limiting logic.

### 3. Project Progress
Significant progress was made on security, tooling, and desktop integration features:
*   **Security & Sandboxing**:
    *   Fixed a critical bypass where `find -delete` circumvented file guards (PR #5843, addressing Issue #5842).
    *   Implemented real-behavior-proof gates in CI to validate external contributor PRs (PR #5844).
*   **Tooling Enhancements**:
    *   Added `show_file` option to `grep_search` to reduce output noise (PR #5840).
    *   Fixed regex parsing in `grep_search` to correctly handle pipe-separated literals (PR #5834).
    *   Recovered whitespace-prefixed JSON arguments in tool calls (PR #5841).
*   **Desktop & UX**:
    *   Enabled auto-detection of local paths in chat output with clickable file explorer links (PR #5836).
    *   Added `qwen3-rerank` support for memory search precision (PR #5669).
    *   Integrated Windows desktop GUI automation via UIA + Tauri Control Mode (PR #5187).
*   **Infrastructure**:
    *   Bundled Node.js runtime for ACP desktop agents (PR #5814).
    *   Added static `project.urls` to `pyproject.toml` for better GitHub dependency graph visibility (PR #5839).

### 4. Community Hot Topics
*   **Frontend Performance & Stability**:
    *   **Issue #5401**: Console crashes when rendering sessions with large tool-use history. This highlights a critical need for virtualization or lazy loading in the frontend trace renderer.
    *   **Issue #5479**: Errors opening sessions >500KB. Similar to #5401, this indicates scalability limits in current JSON parsing/rendering strategies.
*   **User Experience & Control**:
    *   **Issue #5797**: Request for granular control over scheduled task popup notifications. Users desire autonomy rather than binary on/off defaults.
    *   **Issue #5312**: Feature request to minimize QwenPaw Desktop to system tray instead of closing. Aligns with user expectations for background-running assistants.
*   **Security Isolation**:
    *   **Issue #5835**: `/stop` command lacks user-level isolation in DM sessions, causing cross-user task cancellation. This is a significant multi-tenant security flaw in DingTalk integrations.

### 5. Bugs & Stability
Ranked by severity based on impact on functionality and security:

1.  **[Critical] Windows AppContainer Sandbox Pollution (Issue #5829)**:
    *   **Description**: Enabling `APPCONTAINER` sandbox adds inheritable ACEs to root directories, causing GPU process crashes in Electron apps like Hermes Desktop.
    *   **Status**: Open. Requires immediate architectural review of ACL application.
2.  **[High] Context Compression Crash (Issue #5789)**:
    *   **Description**: Framework crashes if model-generated structured output exceeds JSON Schema `maxLength` during context compression.
    *   **Status**: Open. Needs robust error handling or schema relaxation in the compression middleware.
3.  **[High] Cross-User Task Cancellation (Issue #5835)**:
    *   **Description**: Identical session IDs in DM bots allow one user to stop another's task.
    *   **Status**: Open. Critical for multi-user deployments.
4.  **[Medium] Plan Mode Redundant Reads (Issue #5759)**:
    *   **Description**: Agents repeatedly read the same unchanged file during plan execution.
    *   **Status**: Open. Impacts efficiency and token costs.
5.  **[Medium] Google Gemini Endpoint Error (Issue #5774)**:
    *   **Description**: Specific format endpoint errors for GoogleGemini.
    *   **Status**: Closed/Merged (via related updates).
6.  **[Low] Auto-Memory State Loss (Issue #5775)**:
    *   **Description**: Memory persistence fails across per-request agent rebuilds.
    *   **Status**: Closed.

### 6. Feature Requests & Roadmap Signals
*   **Granular Media Rejects (Issue #5821)**: Users want per-media-type rejection capabilities rather than all-or-nothing stripping. Likely candidate for v2.0.0 final or patch.
*   **System Tray Minimization (Issue #5312)**: Strong demand for desktop app behavior matching standard OS utilities. High probability of inclusion in future desktop releases.
*   **Hidden Folder Support in Coding Mode (Issue #5785)**: Closed, suggesting the feature may have been implemented or deemed out of scope for current coding workflows.
*   **Scheduled Task Notification Toggles (Issue #5797)**: Clear signal that users want configurable notification behaviors for automated tasks.

### 7. User Feedback Summary
*   **Pain Points**:
    *   **Performance Bottlenecks**: Multiple reports (#5401, #5479) indicate that the frontend struggles with large conversation histories, leading to crashes. Users need better handling of heavy data sets.
    *   **Security Overreach**: The Windows sandbox implementation (#5829) is causing unintended side effects on other installed applications, suggesting a need for more isolated permission scopes.
    *   **Rigidity in Defaults**: Users feel that features like notification popups (#5797) are being turned off globally due to minority complaints, ignoring the majority who still find them useful.
*   **Satisfaction**:
    *   Positive reception for improved tooling (`grep_search` enhancements) and desktop conveniences (file path linking).
    *   Appreciation for the proactive security updates in v2.0.0-beta.3.

### 8. Backlog Watch
*   **Issue #5829 (Windows Sandbox ACE Pollution)**: High risk of blocking stable desktop releases on Windows. Maintainers must prioritize investigating the `_apply_all_acls` function.
*   **Issue #5835 (DM Session Isolation)**: Critical for enterprise/multi-user scenarios. Needs a robust solution for session ID generation in direct message contexts.
*   **Issue #5789 (Context Compression Crash)**: Affects core reliability. While a workaround might exist, the underlying JSON schema validation logic needs fixing to prevent crashes on valid but verbose model outputs.
*   **Issue #5401 / #5479 (Frontend Rendering)**: These two issues point to a systemic architectural limitation in the frontend. A dedicated effort to refactor the trace rendering component is likely needed before v2.0.0 GA.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-07-08
**Source:** github.com/zeroclaw-labs/zeroclaw

## 1. Today's Overview
ZeroClaw is experiencing high velocity with 50 Pull Requests and 23 Issues updated in the last 24 hours, indicating a critical phase of stabilization ahead of the v0.8.3 release cycle. The primary focus today is resolving high-risk security vulnerabilities in the runtime agent loop, specifically around MCP tool schema handling and permission filtering. While no new official release was published, multiple PRs targeting memory leaks, security policy bypasses, and configuration drift have been merged or are in advanced review stages. The project health is robust but requires immediate attention to the identified security gaps in tool registration and shell command execution.

## 2. Releases
**No new releases published.**
*   **Status:** Active development on `master` and feature branches (`feat/sop-authoring`, `feat/zerocode-todo`).
*   **Upcoming:** Issue #8073 tracks v0.8.3 observability, CI, docs, and dependency updates.

## 3. Project Progress
**Merged/Closed PRs:**
*   **#8813, #8820, #8822:** Fixed channel configuration discoverability by adding a "Global Settings" entry to the Channels config UI, addressing usability issues in root-level field access.
*   **#8782:** Resolved a critical security audit failure by bumping `crossbeam-epoch` from 0.9.18 to 0.9.20, clearing RUSTSEC-2026-0204 (invalid pointer dereference).
*   **#8818:** Chores aligned with #8782, ensuring the dependency bump is reflected in the lockfile and CI.

**Advanced Features/Fixes:**
*   **#8496:** Centralized deferred-MCP access policy, creating a single source of truth for tool filtering.
*   **#8788 & #8805:** Aligned skill-registered tools with the agent's security policy (`excluded_tools`) and corrected the prompt callable-tool set to match the actual registry.
*   **#8817:** Implemented `Arc` sharing for tool schemas to eliminate unbounded RSS growth caused by deep-cloning during agent loops.

## 4. Community Hot Topics
*   **[RFC] Per-execution confirmation tier for high-risk shell commands (#7155)**
    *   *Link:* [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)
    *   *Analysis:* Users are requesting a "Claude Code-style" allow/ask/deny policy for shell commands. The current binary approach (allow/deny) is insufficient for high-risk operations, driving demand for granular, interactive confirmation tiers.
*   **RFC: Consolidate WebSocket Protocols (#8798)**
    *   *Link:* [Issue #8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798)
    *   *Analysis:* There is significant interest in simplifying the gateway architecture by merging `/ws/chat` and `/acp` into a single wire protocol. This reflects a community desire for cleaner APIs and reduced maintenance overhead in the gateway layer.
*   **Hot-reload Log Persistence Config (#8314)**
    *   *Link:* [Issue #8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314)
    *   *Analysis:* Operational efficiency is a key driver; users want to change logging rotation/persistence settings without restarting the daemon. PR #8816 addresses this directly.

## 5. Bugs & Stability
**High Severity (Security/Stability):**
*   **MCP Tool Schema Cloning Causes OOM (#8642)**
    *   *Link:* [Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)
    *   *Fix:* PR #8817 introduces `Arc` sharing for schemas to stop per-iteration clone churn, directly addressing the unbounded RSS growth reported by users.
*   **Skill Tools Bypass Security Policy (#8787)**
    *   *Link:* [Issue #8787](https://github.com/zeroclaw-labs/zeroclaw/issues/8787)
    *   *Fix:* PR #8788 ensures `excluded_tools` denylists are applied to skill-registered tools, closing a security gap where agents could invoke restricted tools via skills.
*   **Tool Filter Groups No-Op for MCP (#6699)**
    *   *Link:* [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)
    *   *Fix:* PR #8819 corrects the prefix-check logic in `tool_filter_groups` to properly identify and filter real MCP tools.
*   **SOP Advance Step Bypasses Approval Gate (#8678)**
    *   *Link:* [Issue #8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678)
    *   *Status:* Closed. A driver could bypass approval gates via `sop_advance`. This is a critical integrity fix for the Standard Operating Procedure engine.

**Medium/Low Severity:**
*   **Windows Zombie Process Leaves Port Bound (#8800):** Daemon fails to start on Windows if previous process is killed abruptly.
*   **Fluent Locale Files Lag English (#6698):** Missing translations in `zh-CN` (tools.ftl).
*   **UI Sidebar Width/Scrollbar (#8791):** Minor CSS issue in the web dashboard.

## 6. Feature Requests & Roadmap Signals
*   **Skill Creation via Agent Action (#8815):** Users want agents to be able to save new skills as bundles rather than loose `.md` files. *Predicted:* Likely included in v0.8.3 or v0.9.0 as part of the "Skills" enhancement track.
*   **Full-Channel Prebuilt Assets (#7952):** Request to publish `channels-full` binaries alongside lean defaults. *Predicted:* High probability for v0.8.3 to reduce user confusion regarding missing integrations.
*   **Zerocode TodoWrite Tracker (#8639):** Implementation of a live task tracker similar to Claude Code. *Predicted:* Core feature for the upcoming v0.8.3 release, enhancing the developer experience for agent orchestration.
*   **Collapsed Turn Steps in Dashboard (#8803):** Request to group intermediate tool calls in the chat UI. *Predicted:* UX improvement likely for v0.8.3 to improve readability.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Memory Leaks:** Multiple reports (WSL2, consecutive OOM) highlight that the agent loop's handling of MCP tool schemas is unsustainable under heavy load.
    *   **Security Blind Spots:** Users are concerned that skills and deferred MCP tools can bypass explicit security policies (`excluded_tools`, `tool_filter_groups`).
    *   **Configuration Friction:** Logging and channel settings require daemon restarts, disrupting continuous operation.
*   **Satisfaction:**
    *   Positive reception for the SOP authoring surface and the new `TodoWrite` tracker in Zerocode.
    *   Appreciation for the rapid response to the `crossbeam-epoch` security advisory.

## 8. Backlog Watch
*   **#8519: Reconcile Cargo-Audit Ignores:** Long-standing issue regarding drift between `audit.toml` and `deny.toml`. Requires maintainer review to clean up 22 RustSec advisages and unify the security posture.
*   **#7952: Publish Full-Channel Prebuilts:** Blocked/Needs Maintainer Review. Essential for reducing support tickets regarding missing integrations.
*   **#6970: v0.8.1 Integration Tracker:** While marked closed, this serves as a historical reference for integration debt. Current focus has shifted to v0.8.3 (#8073).
*   **#8639: Zerocode TodoWrite:** PR is open and large (`size:XL`). Needs careful review to ensure RPC and ACP persistence layers are stable before merging into main.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*