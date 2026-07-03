# OpenClaw Ecosystem Digest 2026-07-03

> Issues: 195 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-03 01:56 UTC

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

# OpenClaw Project Digest: 2026-07-03

## 1. Today's Overview
OpenClaw is experiencing exceptionally high development velocity, with **500 Pull Requests** and **195 Issues** updated in the last 24 hours. The project released **v2026.7.1-beta.1**, introducing support for the new GPT-5.6 model family and external harness attachment capabilities. While feature expansion is aggressive, the issue tracker is dominated by critical stability regressions, particularly concerning session state management, message loss, and authentication reliability across various channels (Telegram, iOS, Android). The community is heavily engaged in debugging these regressions, with several "diamond lobster" rated issues requiring immediate maintainer attention.

## 2. Releases
*   **v2026.7.1-beta.1**:
    *   **New Features**: Added recognition and runtime support for the **OpenAI GPT-5.6** model family across catalog and capability selection paths.
    *   **Enhancements**: Introduced `openclaw attach` command to launch external harnesses against existing Gateway sessions.
    *   **Migration Notes**: Users upgrading should verify GPT-5.6 compatibility with their existing provider configurations. The attachment feature is experimental; ensure external harness processes have proper permissions to access Gateway session data.

## 3. Project Progress
Significant progress was made in consolidating internal infrastructure and improving testing coverage:
*   **Infrastructure Consolidation**: Multiple PRs focused on refactoring lazy loaders for channels and providers to reduce startup complexity and memory overhead (#99302, #98749).
*   **Storage Migration**: Continued advancement toward SQLite as the canonical storage backend for sessions and transcripts (#98236, #99006), aiming to replace legacy JSONL/file-based stores.
*   **Testing & Hardening**: Extensive addition of unit tests for shared utilities (`escapeRegExp`, `safe-record`, `formatHumanList`) and defensive coding improvements in formatting and error handling (#99295, #99292, #99275, #98892).
*   **UI/UX Improvements**: Major updates to the Control UI including a session-first sidebar, compact context ring, and warm light theme (#99289), along with Android license settings screens (#99299).

## 4. Community Hot Topics
High-engagement discussions center on reliability and cross-platform consistency:
*   **[P1] Text between tool calls leaks to messaging channels (#25592)**: 33 comments. Users are frustrated by internal agent processing noise appearing in Slack/iMessage. This highlights a need for better separation of internal agent state vs. user-facing communication.
*   **[Regression] Codex app-server turn-completion stall (#88312)**: 19 comments. A critical regression in v2026.5.27 causing multi-tool turns to fail. Indicates instability in the integration layer with OpenAI's Codex runtime.
*   **[P1] Embedded runner thinking signatures invalid on replay (#92201)**: 18 comments. Anthropic-specific streaming issues affecting Slack plugins. Shows deep scrutiny of multi-model compatibility.
*   **[Feature] RFC: Multi-Agent Collaboration Enhancement (#35203)**: 9 comments. Community requests for capability profiling and shared blackboards suggest a maturing use case for complex, multi-agent orchestration.

## 5. Bugs & Stability
Several high-severity bugs and regressions were reported or updated today:
*   **Session State & Message Loss**:
    *   **#98416**: Missing reentrancy guard in v2026.6.11 causing reply session initialization conflicts.
    *   **#99168**: Large tool output poisoning subsequent results (closed, but indicates ongoing risk).
    *   **#98790**: Concurrent agent-to-agent turns causing permanent transcript poisoning due to Anthropic role rejection.
*   **Authentication & Provider Issues**:
    *   **#98702**: Inherited OpenAI OAuth rejected at provider for built-in runtime, while main succeeds.
    *   **#99120**: OpenAI OAuth refresh false-green falling back to invalidated credentials.
    *   **#91352**: OpenAI Codex OAuth migration leaving stale default profiles.
*   **Platform-Specific Crashes/Freezes**:
    *   **#99093**: iOS Voice Wake crashing due to AVFoundation exceptions during mic tap installation.
    *   **#99071**: Excessive disk I/O in Codex Apps plugin discovery causing hangs.
    *   **#99183**: Local embedding worker fork failing with ENOENT after Node upgrade.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Agent Governance**: Request for **Token Cost Governance** and **Capability Profiling** (#35203) suggests users are moving towards production-scale multi-agent deployments requiring cost controls.
*   **Auto-Discovery**: Feature request for auto-discovering agent configs from external workspaces (#32530) indicates a desire for modular, less rigid agent management.
*   **AI-Generated Session Titles**: Request to replace truncated first-message titles with AI summaries (#77165) for better usability in long conversation histories.
*   **Floating Agent Indicators**: macOS-specific "Clawi" bubbles (#11623) reflect a demand for better desktop presence awareness for background agents.

## 7. User Feedback Summary
*   **Pain Points**: The most consistent complaint is **message loss** and **silent failures** (e.g., turns stalling, replies not delivering). Users feel that regressions in recent beta versions (especially around v2026.5.27 and v2026.6.11) have degraded reliability.
*   **Usability**: The UI is frequently cited as "dense" and "hard to navigate" (#75947), with specific complaints about the iOS settings layout (#98995) and Android onboarding clarity (#98046).
*   **Integration Friction**: Users are encountering significant friction with OAuth migrations (#91352, #99120) and provider-specific quirks (Anthropic signatures, OpenAI content filters).
*   **Satisfaction**: Positive feedback is reserved for specific fixes (e.g., Android permission handling improvements) and the robustness of the new Control UI updates.

## 8. Backlog Watch
Maintainers should prioritize addressing these long-standing or high-impact issues:
*   **#25592**: Tool call text leakage (33 comments, Diamond Lobster). Critical UX flaw.
*   **#88312**: Codex turn-completion stall regression (19 comments). Blocks reliable Codex usage.
*   **#92201**: Anthropic thinking signature invalidity (18 comments). Affects embedded runners.
*   **#38327**: Google Vertex/Gemini crash loop (10 comments). Blocks major provider integration.
*   **#87744**: Telegram turn timeouts (10 comments). Affects one of the largest user bases.
*   **#75593**: Subagent list empty after spawn (10 comments). Breaks multi-agent workflows.
*   **#40880**: Hardcoded media limit (5MB) (5 comments). Limits practical utility for file-heavy tasks.

*Note: The volume of PRs (500/day) suggests a massive, possibly automated or bulk-merge effort. Maintainers should ensure code quality gates are effective amidst this high throughput.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open Source AI Agent Ecosystem
**Date:** 2026-07-03
**Analyst:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The open-source personal AI agent landscape in mid-2026 is characterized by intense fragmentation and rapid iteration, with projects shifting from experimental prototypes to production-grade infrastructures. The dominant trend is the consolidation of multi-channel integrations (WhatsApp, Telegram, Slack, Matrix) and the hardening of security postures, particularly around OAuth flows and SSRF protections. Developers are increasingly prioritizing "headless" or server-first architectures to support multi-tenant and enterprise deployments, while simultaneously grappling with the complexities of long-context management and cross-platform consistency.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 195 | 500 | v2026.7.1-beta.1 Released | 8.5/10 |
| **NanoBot** | 98 | 63 | No New Release | 7.8/10 |
| **Hermes Agent** | 50 | 50 | No New Release | 7.5/10 |
| **IronClaw** | 23 | 50 | No New Release | 8.0/10 |
| **CoPaw** | 23 | 50 | v2.0.0-beta.2 Active | 7.2/10 |
| **NanoClaw** | 4 | 14 | No New Release | 7.0/10 |
| **PicoClaw** | 2 | 25 | No New Release | 6.5/10 |
| **ZeroClaw** | N/A* | N/A* | Stable | 6.8/10 |
| **LobsterAI** | 5 | 8 | No New Release | 6.0/10 |
| **Moltis** | 0 | 3 | No New Release | 7.0/10 |
| **NullClaw** | 0 | 0 | No Activity | 2.0/10 |
| **TinyClaw** | 0 | 0 | No Activity | 2.0/10 |
| **ZeptoClaw** | 0 | 0 | No Activity | 2.0/10 |

*\*Health Score derived from issue resolution velocity, PR merge rates, and stability feedback.*
*\*ZeroClaw data partially obscured in source; inferred from available snippets.*

## 3. OpenClaw's Position
OpenClaw dominates the ecosystem in terms of raw development velocity, processing 500 PRs and 195 issues daily, significantly outpacing competitors. Its primary advantage lies in its aggressive feature expansion, notably being the first to integrate GPT-5.6 support and external harness attachments. However, this high velocity comes with stability trade-offs; the project is currently plagued by critical regressions in session state and authentication, suggesting a "move fast and break things" approach that contrasts with the more cautious stabilization efforts seen in projects like NanoBot or IronClaw. Community engagement is highest here, but so is the volume of critical bug reports, indicating a large but frustrated user base.

## 4. Shared Technical Focus Areas
Several key technical challenges emerge across multiple projects, indicating industry-wide bottlenecks:

*   **Channel-Specific Stability & Identity Management:**
    *   *Projects:* NanoClaw (WhatsApp ID divergence), Moltis (WhatsApp LID migration), IronClaw (Slack OAuth/delivery failures), CoPaw (Feishu/DingTalk parsing).
    *   *Need:* Robust, abstracted channel adapters that handle provider-specific quirks (like WhatsApp’s recent LID changes) without breaking user identity or message routing.
*   **Security Hardening & Auth Flows:**
    *   *Projects:* NanoBot (SSRF/Outbound policies), IronClaw (Slack Personal OAuth), CoPaw (Secret Redaction/Env Vars), PicoClaw (Auth vuln fixes).
    *   *Need:* Transition from static API keys to dynamic OAuth flows and stricter sandboxing for tool execution to prevent data leakage and unauthorized actions.
*   **Long-Context & Memory Management:**
    *   *Projects:* CoPaw (Context compression/amnesia), NanoBot (Dream history compaction), OpenClaw (SQLite migration for transcripts).
    *   *Need:* Efficient, lossless context window management that supports long-running sessions without triggering "amnesia" or excessive token costs.
*   **Multi-Agent & Tool Orchestration:**
    *   *Projects:* OpenClaw (Multi-agent governance/cost), CoPaw (Model fallbacks), NanoBot (Plugin system).
    *   *Need:* Standardized interfaces for agent-to-agent communication, cost governance, and reliable tool error handling (e.g., MCP crash fixes in NanoBot).

## 5. Differentiation Analysis
*   **OpenClaw:** Focuses on broad compatibility and high-throughput infrastructure. It positions itself as the "operating system" for agents, supporting a wide array of models and channels but suffering from integration complexity.
*   **NanoBot:** Emphasizes security and modularity. Its "Radar" initiative for bug tracking and focus on SSRF/outbound policies appeals to security-conscious developers and enterprise users requiring strict isolation.
*   **IronClaw:** Targets the enterprise market with its "Reborn" architecture, focusing on WebUI usability, routine automation, and granular permission models (Admin/User scopes).
*   **CoPaw:** Leverages the Alibaba/Qwen ecosystem, offering strong support for Asian enterprise platforms (Feishu, DingTalk) and aggressive CLI/DevOps integration (Tauri, cron jobs).
*   **Moltis & NanoClaw:** Niche players focusing on specific connectivity gaps (Moltis on WhatsApp LID/Rust stability, NanoClaw on WhatsApp/Baileys hybrid setups).

## 6. Community Momentum & Maturity
*   **Rapid Iteration (High Velocity, Lower Stability):** **OpenClaw** and **CoPaw** are in aggressive beta/release candidate phases. They are pushing boundaries with new models and architectures but are absorbing significant technical debt and user friction.
*   **Stabilization (Moderate Velocity, Higher Reliability):** **NanoBot** and **IronClaw** show signs of maturing. Their activity is focused on hardening existing features, fixing regressions, and improving security, suggesting they are closer to production-ready states for specific use cases.
*   **Maintenance/Niche (Low Velocity):** **PicoClaw**, **NanoClaw**, and **Moltis** are maintaining specific integrations. Their lower issue counts suggest smaller but dedicated user bases facing fewer systemic bugs but more specific integration hurdles.
*   **Inactive:** **NullClaw**, **TinyClaw**, and **ZeptoClaw** show no recent activity, indicating potential abandonment or dormancy.

## 7. Trend Signals
*   **Shift to Enterprise-Grade Security:** The widespread adoption of OAuth (IronClaw, NanoBot) and strict outbound messaging policies (NanoBot) signals that personal AI agents are moving into professional environments where data leakage and spam prevention are paramount.
*   **Platform-Specific Adaptation:** The urgency around WhatsApp LID (Moltis, NanoClaw) and Feishu/DingTalk (CoPaw, Hermes) highlights the importance of localizing integrations for regional markets, particularly in Asia and Latin America.
*   **Cost & Governance Awareness:** Requests for token cost governance (OpenClaw) and model fallbacks (CoPaw) indicate users are scaling up usage and need financial controls and reliability guarantees.
*   **Decoupling UI from Runtime:** Trends toward thin-client desktop apps (Hermes, CoPaw Tauri) and headless gateways suggest a move away from monolithic applications toward distributed agent architectures.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest: 2026-07-03**

### 1. Today's Overview
The NanoBot project is experiencing extremely high activity levels, with 98 issues and 63 pull requests updated in the last 24 hours. This surge is largely driven by a coordinated maintenance effort led by core contributors to address a batch of validated bugs and security gaps. While no new official releases were published today, significant code changes are merging rapidly, particularly regarding security hardening, provider stability, and cross-platform channel consistency. The repository remains open and actively maintained, with a strong focus on stabilizing the agent's core execution loop and improving security posture.

### 2. Releases
*   **No new releases.**
*   However, several critical fixes are being merged via PR #4648 and subsequent updates, which will likely be included in the next patch release.

### 3. Project Progress
**Merged/Closed PRs & Active Development:**
*   **Security Hardening:** Multiple PRs address critical security vulnerabilities. PR #4668 enforces message outbound policies to prevent unauthorized sending, and PR #4667 protects user skills from unintended modifications by the "Dream" subsystem. PR #4671 pins DNS for SSRF checks to prevent bypasses.
*   **Provider Updates:** PR #4685 fixes an issue where Anthropic's `sonnet-5` model incorrectly rejected `temperature` parameters. PR #4686 adds support for the canonical OpenCode provider, expanding integration options.
*   **Bug Fixes:** PR #4666 contains malformed MCP tool results to prevent crashes (addressing #4652). PR #4662 normalizes text-based tool call markup from OpenAI-compatible providers into structured calls, fixing parsing issues.
*   **Infrastructure:** PR #4664 preserves Dream history during compaction, ensuring no context loss during memory consolidation.

### 4. Community Hot Topics
**Most Discussed Issues (by comment count):**
*   **[Feature] Plugin System:** [#2231](https://github.com/HKUDS/nanobot/issues/2231) – Users are requesting a robust plugin architecture similar to Copilot CLI or Claude Code to extend agent functionality. This indicates a desire for modularity and third-party ecosystem growth.
*   **[Enhancement] DingTalk File Upload:** [#3344](https://github.com/HKUDS/nanobot/issues/3344) – Specific integration bug where file uploads and mentions are separated in DingTalk groups, preventing the bot from receiving files.
*   **[Feature] Anthropic OAuth:** [#4604](https://github.com/HKUDS/nanobot/issues/4604) – Demand for OAuth-based authentication for Anthropic, allowing users to leverage subscription tokens instead of API keys. This aligns with the recent PR #4632 adding this feature.
*   **[Bug] Nanobot Radar Tracking:** [#4657](https://github.com/HKUDS/nanobot/issues/4657) – A meta-issue tracking 13 validated bugs/refactors. This shows a highly organized approach to technical debt resolution.

### 5. Bugs & Stability
**Critical & High Severity Issues Reported/Fixed Today:**
1.  **MCP Tool Crash:** [#4652](https://github.com/HKUDS/nanobot/issues/4652) - Nanobot crashes when an MCP tool call returns an error. **Status:** Fix in PR #4666 to contain malformed results and mark exceptions as structured errors.
2.  **SSRF Vulnerability:** [#4611](https://github.com/HKUDS/nanobot/issues/4611) - DNS rebinding attacks possible. **Status:** Fix in PR #4671 to pin validated DNS IPs.
3.  **Outbound Message Authorization:** [#4076](https://github.com/HKUDS/nanobot/issues/4076) - `message` tool lacks recipient authorization, allowing spam to blocked targets. **Status:** Fix in PR #4668 to enforce `allow_from` policies.
4.  **OpenAI-Compatible Provider Parsing:** [#4061](https://github.com/HKUDS/nanobot/issues/4061) - Text-format tool calls not parsed correctly, leading to raw markup exposure. **Status:** Fix in PR #4662 to normalize text blocks into structured calls.
5.  **Anthropic Sonnet-5 Error:** [#4683](https://github.com/HKUDS/nanobot/issues/4683) - Invalid request error due to deprecated `temperature` parameter. **Status:** Fix in PR #4685 to omit parameter for this model family.
6.  **Windows Shell Inconsistency:** [#4544](https://github.com/HKUDS/nanobot/issues/4544) - `exec` tool uses `cmd.exe` for single-line and `PowerShell` for multi-line, causing cross-platform command failures. **Status:** Addressed in the bulk fix PR #4648.

### 6. Feature Requests & Roadmap Signals
*   **Anthropic OAuth Support:** With PR #4632 now open, the roadmap clearly prioritizes simplifying provider authentication for popular services like Anthropic.
*   **Voice Output:** [#4010](https://github.com/HKUDS/nanobot/issues/4010) - Users want text-to-speech capabilities to close the conversational loop, especially for voice-enabled channels.
*   **Per-Conversation Model Override:** [#4253](https://github.com/HKUDS/nanobot/issues/4253) - Request to switch models dynamically within a chat (e.g., privacy-sensitive vs. speed-sensitive tasks).
*   **Mattermost Integration:** PR #4459 adds Mattermost support, signaling expansion beyond major social/messaging platforms to enterprise chat solutions.
*   **Reasoning Effort Escalation:** [#4419](https://github.com/HKUDS/nanobot/issues/4419) - Automatic adjustment of reasoning depth based on task complexity is a requested enhancement for smarter resource management.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by inconsistent behavior across channels (e.g., DingTalk file uploads, Telegram hangs, Windows shell differences). Security concerns are rising due to identified vulnerabilities in outbound messaging and SSRF protections.
*   **Use Cases:** Heavy usage in multi-tenant environments (WhatsApp, Telegram) requires strict data isolation (PR #2836/4668). Developers are leveraging MCP tools extensively, but stability issues with MCP error handling are causing workflow interruptions.
*   **Satisfaction:** The rapid response to validated bugs (via the "Radar" initiative) is viewed positively. However, the sheer volume of open issues suggests that while fixes are coming, the backlog is significant.

### 8. Backlog Watch
*   **Cron Job Context Reuse:** [#4082](https://github.com/HKUDS/nanobot/issues/4082) - Cron jobs sharing fixed session contexts leads to state leakage between runs. This is a logic bug affecting automation reliability.
*   **Telegram Long Polling Hangs:** [#3626](https://github.com/HKUDS/nanobot/issues/3626) - Silent failures in Telegram connections due to network timeouts, making debugging difficult for users.
*   **Feishu Progress Notifications:** [#3166](https://github.com/HKUDS/nanobot/issues/3166) - Feature parity gap where Feishu users do not receive progress updates like other channels.
*   **WebSocket Proactive Messaging:** [#3559](https://github.com/HKUDS/nanobot/issues/3559) - Limitations in using WebSocket for proactive messages in multi-tenant setups, indicating a need for improved architecture in real-time channels.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-03

### 1. Today's Overview
The Hermes Agent project is experiencing high-volume development activity with 50 issues and 50 pull requests updated in the last 24 hours. While no new releases were published today, the repository shows significant momentum in stabilizing the desktop client and refining gateway reliability across platforms like Telegram and QQ Bot. Community engagement remains robust, particularly around UI/UX improvements in the Desktop app and critical backend fixes for session management and tool execution. The project appears to be in a stabilization phase following recent updates, with a heavy focus on bug squashing and configuration robustness.

### 2. Releases
*   **No new releases** were published today.

### 3. Project Progress
Several key areas saw advancement through merged or closed PRs today:
*   **Desktop UI Refinements:** PR #57446 addressed macOS Tahoe compatibility by fixing titlebar traffic light offsets, while PR #57443 capped overlay widths for better readability on ultrawide displays.
*   **Gateway & Platform Fixes:** PR #25757 improved Feishu merge-forward message parsing, and PR #37781 forced English UI selectors for Google Meet bots to resolve locale-specific failures.
*   **Agent Core Stability:** PR #24734 fixed a Time-of-Check to Time-of-Use (TOCTOU) race condition in the OpenRouter client, and PR #22624 corrected system message ordering for Qwen models.
*   **Configuration Overrides:** PR #57447 introduced configurable YAML overrides for background-review prompts, allowing users to customize agent behavior without forking the codebase.

### 4. Community Hot Topics
The following issues generated the most discussion and interest, indicating core user priorities:
*   **[Bug] QQBot Infinite Retry Loop** (Issue #52914): High engagement (12 comments, 4 👍) due to a critical connection failure after recent updates. *Need: Immediate stability for QQ Bot users.*
*   **[Feature] Desktop Client-Only Installation** (Issue #38602): Extremely high community interest (37 👍). *Need: Users desire a lightweight desktop client that connects to a remote backend rather than bootstrapping a full local runtime.*
*   **[Bug] Prompt Injection False Positives** (Issue #36934): Discussion highlights friction between steering commands and high-security models like Opus 4.8. *Need: Better handling of operator inputs in injection-resistant contexts.*

### 5. Bugs & Stability
Critical bugs reported today include:
*   **Severity P1/P2:**
    *   **QQBot Adapter Crash:** Missing `is_reconnect` parameter causes infinite retries (Issue #52914).
    *   **Telegram Message Duplication:** Stream consumers losing delivery flags results in duplicate messages (Issue #53449).
    *   **Computer Use Capture Failure:** `int(None)` crash on Linux/WSL due to null PID values (Issue #56704).
    *   **TUI WebSocket Disconnect:** Long-running delegate tasks block the event loop, causing disconnects (Issue #53773 - Closed).
*   **Desktop Specific:**
    *   **Profile Deletion Failure:** Profiles reappear after deletion because backend processes aren't killed (Issue #47368).
    *   **High CPU Usage:** Left menu refresh loop causing excessive CPU consumption (Issue #53049).
    *   **Model Selector Crash:** `'dict' object has no attribute 'lower'` error in dropdown (Issue #57405).

### 6. Feature Requests & Roadmap Signals
*   **Desktop Thin-Client Mode:** Issue #38602 strongly suggests demand for separating the GUI from the agent runtime.
*   **Configurable Review Prompts:** PR #57447 indicates a need for granular control over background review logic via config files.
*   **LiteLLM Context Detection:** Issue #8465 highlights a need for automatic context length detection when using LiteLLM providers.
*   **Queue Management:** Issue #32474 requests a `/queue cancel` command, signaling user desire for better control over pending agent tasks.

### 7. User Feedback Summary
Users are expressing frustration with **Desktop app stability** (crashes, high CPU, silent failures) and **gateway reliability** on niche platforms (QQ Bot, Feishu). There is strong appreciation for recent GCP Vertex support (Issue #56687), but confusion persists around configuration persistence (Issue #25106). The recurring theme is a desire for **robustness in edge cases** (e.g., WSL environments, specific Telegram bot configurations) and **better separation of concerns** between the UI and the agent core.

### 8. Backlog Watch
*   **Python 3.14 Compatibility:** Issue #57381 reports `hermes-setup` failure due to removed `distutils.version`. This requires urgent attention as Python 3.14 adoption grows.
*   **OAuth Token Rotation:** Issue #23944 proposes a generic OAuth broker to handle single-use refresh tokens, addressing a scalability issue for multi-runtime deployments.
*   **Advanced Secrets Management:** Issue #3630 (Phase 4) remains open, indicating ongoing work toward enterprise-grade secret handling (ephemeral secrets, audit logs).
*   **MCP Zombie Processes:** Issue #57355 highlights a resource leak where failed MCP server connections spawn unreaped subprocesses, requiring architectural cleanup.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-07-03

## 1. Today's Overview
PicoClaw is experiencing high development velocity with 25 Pull Requests updated in the last 24 hours, indicating aggressive maintenance and dependency management. However, there are no new releases deployed, suggesting the current codebase is still undergoing integration or validation. Activity is split between routine dependency updates via Dependabot and critical bug fixes for core connectivity and configuration stability. The presence of two open issues regarding config migration failures and Matrix synchronization loops highlights ongoing stability challenges in recent versions (v0.2.9).

## 2. Releases
**No new releases** were published on 2026-07-03. The latest known version remains v0.2.9 (git 2992...). Users should monitor the repository for upcoming release notes, particularly given the active work on config migrations and security patches.

## 3. Project Progress
Significant progress was made in dependency modernization and security hardening:
*   **Dependency Updates:** A large volume of PRs (#3211, #3212, #3214, #3215, #3216, #3213, #3208, #3209, #3210, #3207) focused on updating frontend libraries (ESLint, React-i18next, Shadcn, TypeScript-ESLint, Vite Plugin React) and Go SDKs (AWS SDK, Mautrix, Anthropic SDK, Crypto, Copilot SDK).
*   **Security Fixes:** PR #3160 addressed a critical authentication vulnerability by rejecting cross-site launcher setup requests. PR #3161 fixed a logic error where `exec` deny patterns were bypassed by custom allow rules.
*   **Feature Integration:** PR #3063 introduced a DeltaChat gateway, expanding supported communication channels.
*   **Stability Fixes:** PR #3165 worked on recovering Seed XML tool calls in OpenAI-compatible responses, addressing parsing issues.

## 4. Community Hot Topics
The most discussed items involve infrastructure reliability and configuration compatibility:
*   **Matrix Sync Loop Failure:** Issue #3203 highlights a severe stability bug where the Matrix channel enters a "silent death" state after network disruptions due to missing reconnection logic. [Link](https://github.com/sipeed/picoclaw/issues/3203)
*   **Config Migration Errors:** Issue #3206 reports that upgrading from v2 to v3 fails with "unknown field" errors for `build_info` and `session.dm_scope`, blocking users from accessing the CLI. [Link](https://github.com/sipeed/picoclaw/issues/3206)
*   **DeltaChat Gateway:** PR #3063 represents a significant expansion of ecosystem support, likely attracting interest from users seeking alternative messaging backends. [Link](https://github.com/sipeed/picoclaw/pull/3063)

## 5. Bugs & Stability
Two critical bugs were reported today, both affecting core functionality:
1.  **[HIGH] Config Migration Failure (Issue #3206):** The v2→v3 migration process is broken, preventing the application from loading configurations. This affects both fresh installs and upgrades.
2.  **[HIGH] Matrix Channel Silent Death (Issue #3203):** Lack of reconnection logic in the `/sync` loop causes permanent disconnection after network/server issues, breaking automated workflows without restarting the service.

Existing PRs #3160 and #3161 address related security/stability concerns but do not directly resolve these two specific runtime bugs.

## 6. Feature Requests & Roadmap Signals
*   **DeltaChat Support:** The inclusion of the DeltaChat gateway (PR #3063) signals a roadmap commitment to supporting decentralized, privacy-focused messaging protocols beyond standard Matrix/Slack/Discord integrations.
*   **OpenAI Compatibility Enhancements:** Work on recovering Seed XML tool calls (PR #3165) suggests continued refinement of compatibility layers for various LLM providers, ensuring robust tool-use execution across different API formats.

## 7. User Feedback Summary
Users are currently frustrated by **regression bugs in the v0.2.9 release**. The primary pain points are:
*   Inability to run basic CLI commands (`picoclaw status`) due to config parsing errors.
*   Loss of connectivity in production environments using Matrix, requiring manual intervention or service restarts that are not automatically triggered by systemd.
*   Satisfaction appears mixed; while dependency updates are appreciated for security, the breakage of core migration and sync features negatively impacts user trust.

## 8. Backlog Watch
*   **Issue #3206 (Config Migration):** Requires immediate attention from maintainers to patch the v2→v3 migration script. This is a blocking issue for adoption of newer versions.
*   **Issue #3203 (Matrix Reconnection):** Needs architectural review to implement robust reconnection logic for the Matrix client.
*   **PR #3171 (LINE Channel Panic Fix):** An open PR adding `ok` checks for `sync.Map` type assertions to prevent panics. This should be merged to improve stability for LINE users. [Link](https://github.com/sipeed/picoclaw/pull/3171)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-07-03
**Source:** github.com/qwibitai/nanoclaw

### 1. Today's Overview
NanoClaw exhibits high development velocity with 14 Pull Requests updated and 4 Issues opened in the last 24 hours. The primary focus today is resolving critical architectural conflicts within the WhatsApp channel adapters and advancing the "Agent Templates" feature set. While no new releases were published, significant bug fixes regarding message routing stability and scheduling duplicates indicate active maintenance efforts to stabilize the core engine. The community is actively engaging with new setup workflows and provider configurations.

### 2. Releases
No new releases were published on this date.

### 3. Project Progress
Several key areas saw advancement through merged or updated Pull Requests:
*   **Agent Templates:** PRs #2890 (merged/closed context) and #2909 advanced the template loading system, allowing users to stamp new agent groups from local templates via the setup wizard.
*   **Container Optimization:** PR #2771 addressed performance issues with headless Chromium by making `--shm-size` configurable and adding `--init` flags, preventing container crashes on large pages.
*   **Core Cleanup:** PR #2822 removed dead mounts, while #2823 and #2824 cleaned up stale instructions and global memory references in the seed prompt, improving container hygiene.
*   **Provider Support:** PR #2908 extended template support to the Codex provider, ensuring persona pre-pending and skill discovery work independently of Git states.

### 4. Community Hot Topics
The most discussed topics revolve around WhatsApp integration stability and new configuration capabilities:
*   **WhatsApp Adapter Conflicts:** Issue #2911 and PR #2913 are central to a critical bug where the WhatsApp Business Cloud and native Baileys channels collide in the registry. This affects multiple users trying to run hybrid setups.
    *   [Issue #2911](https://github.com/nanocoai/nanoclaw/issues/2911)
    *   [PR #2913](https://github.com/nanocoai/nanoclaw/pull/2913)
*   **Signal DM Reliability:** PR #2689 addresses silent message drops in Signal DMs due to missing `isMention` flags, a pain point for users relying on direct messaging automation.
    *   [PR #2689](https://github.com/nanocoai/nanoclaw/pull/2689)
*   **Instance-Wide Defaults:** PR #2906 introduces a `DEFAULT_AGENT_PROVIDER` environment variable, reducing friction for operators managing multiple groups.
    *   [PR #2906](https://github.com/nanocoai/nanoclaw/pull/2906)

### 5. Bugs & Stability
Two high-priority bugs were identified and addressed today:
1.  **WhatsApp Registry Collision (High Severity):** The native WhatsApp and WhatsApp Cloud adapters share the same instance key, causing one to disable the other or misroute messages. A fix is being implemented in PR #2913 by introducing a distinct `whatsapp-cloud` key.
    *   [Bug Report](https://github.com/nanocoai/nanoclaw/issues/2911)
    *   [Fix PR](https://github.com/nanocoai/nanoclaw/pull/2913)
2.  **Scheduling Duplicate Forks (High Severity):** Recurring tasks were forking into duplicates when retries occurred within the 30-minute container kill ceiling. PR #2915 implements per-series deduplication to resolve this.
    *   [Fix PR](https://github.com/nanocoai/nanoclaw/pull/2915)
3.  **WhatsApp User ID Divergence (Medium Severity):** User IDs differ between Baileys and Cloud paths, causing privilege mismatches. This is tracked in Issue #2912.
    *   [Bug Report](https://github.com/nanocoai/nanoclaw/issues/2912)

### 6. Feature Requests & Roadmap Signals
*   **Multi-Provider Web Search:** PR #2725 introduces a `web-search-plus` skill, indicating a roadmap shift toward provider-agnostic utility skills that do not rely on MCP.
    *   [PR #2725](https://github.com/nanocoai/nanoclaw/pull/2725)
*   **Agent Templates:** The completion of PRs #2890 and #2909 suggests that templating is becoming a core feature for rapid deployment, likely to be highlighted in the next minor release.
*   **Core Instruction Hardening:** PR #2910 explicitly forbids repeating `send_message` content, signaling a move toward stricter output validation to reduce hallucination or redundancy in agent responses.
    *   [PR #2910](https://github.com/nanocoai/nanoclaw/pull/2910)

### 7. User Feedback Summary
Users are reporting significant pain points with cross-platform identity management, specifically within WhatsApp integrations. The divergence of user IDs between different channel backends breaks existing role-based access controls, leading to confusion and broken permissions. Additionally, operational feedback highlights the need for better container resource tuning (shared memory) for browser-based agents, which was recently addressed in PR #2771. General sentiment reflects a desire for easier initial setup, evidenced by the strong engagement with the new Template Wizard features.

### 8. Backlog Watch
*   **Signal DM Group Creation:** While PR #2689 addresses the `isMention` flag, long-standing issues with Signal DMs not automatically creating `messaging_groups` may require further monitoring to ensure the fix fully resolves all edge cases.
    *   [PR #2689](https://github.com/nanocoai/nanoclaw/pull/2689)
*   **General Maintenance:** Issue #2916 ("hi") and #2907 ("ape_claw_cli") appear to be low-signal noise or incomplete reports. Maintainers should monitor if these evolve into substantive requests or close them if they remain inactive.
    *   [Issue #2916](https://github.com/nanocoai/nanoclaw/issues/2916)
    *   [Issue #2907](https://github.com/nanocoai/nanoclaw/issues/2907)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-07-03
**Source:** GitHub Data Analysis (nearai/ironclaw)

## 1. Today's Overview
The IronClaw project is experiencing high-velocity development focused on the "Reborn" architecture overhaul, characterized by significant activity in both issue resolution (23 updates) and pull request submission (50 updates). While no official releases were published in the last 24 hours, the integration of Slack personal OAuth and critical bug fixes for the Reborn agent loop indicates a maturation phase in the new runtime. Community and QA efforts are heavily concentrated on stabilizing the WebUI v2 and ensuring reliability in automated routines, suggesting a strategic shift toward production readiness for enterprise features.

## 2. Releases
**No new releases published in the last 24 hours.**
*Note: Previous release #5311 (2026-06-26) included breaking changes to `ironclaw_common` and `ironclaw_skills`.*

## 3. Project Progress
Significant technical advancements were made today, particularly in authentication flows and agent stability:

*   **Slack OAuth Integration:** Merged PRs **#5502** and **#5501** successfully implemented browser-based OAuth for personal Slack connections, removing the need for manual token pasting. This is further expanded in open PR **#5576**, which moves credential management to the UI setup.
*   **Agent Loop Stabilization:** Closed Issue **#5571** addressed a critical failure where web search errors aborted entire turns. Closed Issue **#5530** resolved a dead code path in skill auto-activation.
*   **Performance Optimization:** Open PR **#5574** introduces step-efficient tool guidance to reduce costs by minimizing model loops in data analysis tasks.
*   **Code Hygiene:** Closed PR **#5567** executed a major type/trait cleanup, removing redundant DTOs and reducing code complexity.
*   **Security Hardening:** Open PR **#5559** enforces architecture sprawl checks in pre-commit hooks to prevent codebase degeneration.

## 4. Community Hot Topics
The most discussed topics revolve around the usability of the new "Reborn" interface and specific integration bugs:

*   **Routine Creation Hangs (Issue #5504):** High visibility bug where routine creation fails silently. *Underlying Need:* Users require immediate feedback during asynchronous agent operations.
*   **WebUI Visibility & Permissions (Issue #5460):** Reports that workspace memories are visible to all users. *Underlying Need:* Strict data isolation and privacy controls in multi-user workspaces.
*   **Slack Delivery Failures (Issue #5508):** Confusion regarding Slack connectivity status despite active connections. *Underlying Need:* Clearer state management and error messaging for third-party integrations.
*   **SSO Testing Limitations (Issue #5570):** Developers are struggling to test Google SSO on ephemeral PR previews due to strict OAuth redirect URI requirements. *Underlying Need:* Flexible testing infrastructure for CI/CD pipelines.

## 5. Bugs & Stability
Severity-ranked bugs reported or updated today:

1.  **[P1] Routine Creation Hangs (Issue #5504):** Critical UX blocker. *Status: Open.*
2.  **[P1] Routine Prompt Embedding (Issue #5505):** Closed. *Fix applied.* The model was incorrectly embedding creation instructions into the routine body.
3.  **[P1] Web Search Cascading Failure (Issue #5571):** Closed. *Fix applied.* Invalid outputs from Exa MCP were terminating entire turns.
4.  **[P2] Generic "Invalid Result" Errors (Issue #5552):** Poor observability when multiple tool failures occur. *Status: Open.*
5.  **[P2] Chat Latency Scaling (Issue #5509):** Frontend latency increases with conversation history length. *Status: Open.*
6.  **[P2] Vision Model Hallucination (Issue #5558):** Model accepts incorrect user corrections without re-evaluating images. *Status: Open.*
7.  **[P2] Checkpoint Port Forwarding (Issue #5572):** Hooks-enabled coordinator turns fail due to missing payload forwarding. *Status: Open.*

## 6. Feature Requests & Roadmap Signals
*   **Configurable Skills/Tools (Issue #5459):** Strong signal for granular permission models (Admin vs. User scoped tools). PRs **#5525** and **#5513** are actively implementing private tool installs and admin credential UIs, indicating this will be a key feature in the upcoming release.
*   **Onboarding/NUX Overhaul (PR #5565):** A complete redesign of the user journey, including intent handoff and mock-backed demos, suggests a focus on improving first-time user experience.
*   **Trace Commons (PR #5280):** Implementation of instance-wide trace enrollment and per-user profiles points to a roadmap direction toward enhanced observability and auditing capabilities.
*   **Design System Tokens (PR #5563):** Investment in a formalized design system to allow autonomous AI-driven UI improvements.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by "silent failures" in routine creation (Issues #5504, #5552) and confusing error states in Slack integrations (Issues #5508, #5551). The lack of visibility into *why* a run failed is a major dissatisfaction driver.
*   **Usability:** The overlap of the terminal button with the chat composer (Issue #5555) and horizontal overflow on mobile (Issue #5554) indicates that the WebUI v2 responsive design needs refinement.
*   **Satisfaction:** The move toward OAuth for Slack (PRs #5502, #5576) is likely to improve satisfaction by reducing setup friction. The closure of the "prompt embedding" bug (Issue #5505) addresses a core logic flaw that confused users.

## 8. Backlog Watch
*   **Issue #4108 (Nightly E2E Failed):** A long-standing bot-reported issue that has remained open since May 2026, indicating potential gaps in automated regression testing or persistent flakiness in the E2E suite.
*   **Issue #5459 (Configurable Skills):** While PRs are addressing parts of this, the comprehensive implementation of admin/user-scoped WASM tools and skills remains a large, complex ticket requiring careful coordination between backend and frontend teams.
*   **Issue #5522 (Slack DM Reading Failure):** Highlights a gap in capability discovery (`capability_info` retry loop), suggesting the agent loop's self-awareness of available tools needs robustness improvements.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-07-03
**Source:** GitHub (netease-youdao/LobsterAI)

## 1. Today's Overview
LobsterAI demonstrated moderate development velocity on July 2, 2026, with 8 pull requests processed (7 merged/closed, 1 open) and 5 active issues reported. The primary focus today was stabilizing core rendering components, fixing critical UI bugs related to scheduled tasks and settings deletion, and improving session stability for DeepSeek models. No new releases were published, indicating this activity is part of ongoing patch maintenance rather than a major version launch. Community engagement remains steady, though several long-standing stale issues continue to lack resolution.

## 2. Releases
*   **No new releases** were published in the last 24 hours.

## 3. Project Progress
The following areas saw significant advancement through merged PRs:

*   **DeepSeek Session Stability (PR #2258):** Addressed prompt cache instability in long sessions by disabling aggregate tool-result rewriting on the live prompt path. This ensures history remains byte-stable for provider prefix caches while retaining privacy-safe probes and overflow recovery.
*   **UI/UX Refinements (PR #2259, #2257):** Optimized the engine failure overlay and unified the engine startup screen into a single continuous splash experience. This improves perceived performance by removing the spinner handoff between `index.html` and React initialization.
*   **Documentation Updates (PR #2254, #2253):** Minor chores including updating the main page image and README files.

## 4. Community Hot Topics
*   **Scheduled Task Persistence & Notification Failures:** Multiple users are reporting inconsistencies with scheduled tasks.
    *   *Issue #1358:* Users report no feedback when clicking scheduled tasks.
    *   *Issue #1359:* Deleted tasks reappear after restart.
    *   *PR #2256 (Open):* Addresses the "none-delivery" notification bug and settings model delete crash.
    *   *Analysis:* The recurrence of these issues suggests a deeper synchronization problem between the local storage state and the OpenClaw gateway API, particularly regarding patch-merge behaviors that may fail to clear null values.
*   **System Stability Risks:**
    *   *Issue #1354:* A user reports a Blue Screen of Death (BSOD) triggered by LobsterAI starting Pageant. This is a high-severity concern indicating potential kernel-level conflict or driver instability.
    *   *Issue #1357:* Logical error where the agent claims to have started Pageant but fails to do so.

## 5. Bugs & Stability
Ranked by severity based on user reports and fix status:

1.  **CRITICAL: System Crash/BSOD (Issue #1354)**
    *   *Description:* Starting Pageant via LobsterAI causes Windows BSOD.
    *   *Status:* Open, Stale. No fix PR identified yet.
    *   *Impact:* High risk to user hardware stability.
2.  **HIGH: Settings White Screen on Delete (PR #2252 / #2256)**
    *   *Description:* Deleting an active custom provider causes the settings view to crash to a white screen due to async race conditions.
    *   *Status:* Fixed in PR #2252 (Closed/Merged). PR #2256 also addresses related delivery model issues.
3.  **MEDIUM: Scheduled Task Logic Errors (Issues #1358, #1359; PR #2255/#2256)**
    *   *Description:* Tasks not executing silently, deleted tasks reappearing, and "Do Not Notify" settings failing to save.
    *   *Status:* Partially addressed in PR #2256 (Open). Root cause appears to be API patch-merge behavior clearing null values incorrectly.
4.  **LOW: Agent Creation Validation (Issue #1360)**
    *   *Description:* No duplicate name validation when creating agents.
    *   *Status:* Open, Stale.

## 6. Feature Requests & Roadmap Signals
*   **Robust State Management for Agents:** The persistence issues (Issue #1359) and validation gaps (Issue #1360) signal a need for stronger backend validation and state consistency checks in the next iteration.
*   **Improved Feedback Loops for Background Tasks:** Issue #1358 highlights a UX gap where users cannot verify if a scheduled task has actually started. Future updates should prioritize explicit status notifications or UI indicators for background processes.
*   **DeepSeek Optimization:** The merge of PR #2258 indicates a roadmap commitment to supporting longer, more stable sessions with specific providers like DeepSeek, likely to remain a priority for enterprise or power users.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the disconnect between UI actions and actual system state (e.g., "Task started" message when it didn't, or "Task deleted" when it reappeared). The BSOD report is a severe deterrent for users relying on the tool for system automation.
*   **Satisfaction:** Positive feedback is implied for the recent UI polish (unified splash screen), which enhances the "feel" of the application. However, functional reliability in task scheduling and system integration remains a significant source of dissatisfaction.

## 8. Backlog Watch
Maintainers should prioritize addressing the following stale issues, as they represent critical stability and usability blockers:

*   **[Issue #1354](https://github.com/netease-youdao/LobsterAI/issues/1354)**: *BSOD on Pageant start.* Requires immediate investigation into system calls or driver interactions.
*   **[Issue #1357](https://github.com/netease-youdao/LobsterAI/issues/1357)**: *False positive on Pageant start.* Indicates a logic error in the agent's execution verification.
*   **[Issue #1359](https://github.com/netease-youdao/LobsterAI/issues/1359)**: *Deleted tasks reappear.* Critical data integrity issue.
*   **[Issue #1360](https://github.com/netease-youdao/LobsterAI/issues/1360)**: *No duplicate agent name validation.* Basic UX hygiene fix.

*Note: PR #2256 is currently open and addresses some scheduled task issues, but the broader state consistency problems in Issues #1358 and #1359 suggest further backend work is needed.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-07-03
**Source:** github.com/moltis-org/moltis

### 1. Today's Overview
The Moltis project demonstrated moderate development activity today, driven primarily by pull request updates rather than issue resolution. There were zero new issues and no new releases in the last 24 hours, indicating a maintenance-focused day. Three Pull Requests were updated, with two remaining open for review and one recently merged, suggesting ongoing progress in dependency management and provider integration.

### 2. Releases
No new releases were published today.

### 3. Project Progress
*   **Merged Fix:** PR #1116 (`fix(whatsapp): deliver replies to @lid chats via PN JID rewrite`) was closed/merged today. This resolves a critical delivery failure where replies to privacy-enabled senders' `@lid` chats were being silently dropped by the gateway.
*   **Open Work:**
    *   PR #1144 (`feat(whatsapp): bump whatsapp-rust 0.5 -> 0.6...`) remains open, advancing the WhatsApp integration to support LID-native addressing.
    *   PR #1143 (`Add Requesty as an OpenAI-compatible provider`) remains open, expanding the project's LLM routing capabilities.

### 4. Community Hot Topics
*   **WhatsApp LID Migration (PR #1144):** High interest in the upgrade to `whatsapp-rust` 0.6. The underlying need is ensuring compatibility with WhatsApp's recent infrastructure changes regarding "LID" (Login ID) addressing, which older versions do not support.
    *   Link: [moltis-org/moltis PR #1144](https://github.com/moltis-org/moltis/pull/1144)
*   **LLM Provider Expansion (PR #1143):** Interest in adding "Requesty" as a provider mirrors existing patterns like OpenRouter. This suggests users are actively seeking diverse, cost-effective, or specialized LLM routing options within the Moltis ecosystem.
    *   Link: [moltis-org/moltis PR #1143](https://github.com/moltis-org/moltis/pull/1143)

### 5. Bugs & Stability
*   **Resolved Bug:** PR #1116 addressed a significant stability issue where messages sent to `@lid` chats with privacy settings enabled were not delivered. While the bug itself is now fixed via the merge, no new bugs were reported in issues today.
    *   Link: [moltis-org/moltis PR #1116](https://github.com/moltis-org/moltis/pull/1116)

### 6. Feature Requests & Roadmap Signals
*   **Multi-Provider Support:** The inclusion of PR #1143 indicates a roadmap signal toward broader LLM interoperability. Users are requesting support for alternative routers beyond standard OpenAI endpoints, specifically looking for OpenAI-compatible wrappers like Requesty.
    *   Link: [moltis-org/moltis PR #1143](https://github.com/moltis-org/moltis/pull/1143)

### 7. User Feedback Summary
Current user feedback, as reflected in the PR discussions, centers on reliability and connectivity. The merged fix (#1116) highlights past dissatisfaction with silent message drops in specific privacy configurations. The ongoing work (#1144) shows users are proactively addressing upcoming platform changes from WhatsApp to prevent future service disruptions.

### 8. Backlog Watch
*   **PR #1144 (WhatsApp Upgrade):** This PR is currently open and pending merge. It is critical for long-term stability as it addresses the "DM LID-migration gate." Maintainers should prioritize reviewing this to ensure the agent remains functional with current WhatsApp standards.
    *   Link: [moltis-org/moltis PR #1144](https://github.com/moltis-org/moltis/pull/1144)
*   **PR #1143 (Requesty Integration):** This PR is open and awaiting review. It expands feature parity with other providers.
    *   Link: [moltis-org/moltis PR #1143](https://github.com/moltis-org/moltis/pull/1143)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-07-03
**Source:** agentscope-ai/CoPaw (via agentscope-ai/QwenPaw data)

## 1. Today's Overview
The CoPaw/QwenPaw project is experiencing high velocity with 23 updated issues and 50 pull requests in the last 24 hours, indicating intense development activity surrounding the upcoming v2.0.0 release. The community is heavily engaged in testing the `v2.0.0-beta.2` release, resulting in a significant influx of bug reports related to context compression, channel integrations (Feishu/Discord), and stability issues. Security hardening and configuration flexibility (CLI enhancements, environment variable support) are prominent themes in recent contributions. While the project is stable for early adopters, the volume of v2.0-specific bugs suggests that the General Availability (GA) release still requires rigorous stabilization.

## 2. Releases
### v2.0.0-beta.2
*   **Status:** Early Beta (Active Development)
*   **Warning:** Contains breaking changes and potential instability. Not recommended for production.
*   **Key Changes:**
    *   Added `cron up` CLI command for scheduling tasks.
    *   Continued refinement of the Runtime 2.0 architecture.
*   **Migration Notes:** Users upgrading from v1.x should expect significant behavioral changes in agent runtime, context management, and channel handling. Full migration guides are likely pending until GA.

## 3. Project Progress
**Notable Merged/Closed Items:**
*   **[Fixed] Context Compaction Crash (#5287):** Fixed a bug where auto-compaction crashed if the generated summary exceeded schema length limits.
*   **[Fixed] Content Safety False Positives (#5533):** Resolved an issue where provider-side content safety errors (e.g., MiniMax sensitive content flags) were incorrectly treated as model media capability failures, preventing unnecessary media stripping.
*   **[Fixed] Desktop Packaging CI (#5743):** Guarded against empty `extra_flags` expansion in Bash 3.2 (macOS legacy), fixing CI failures for desktop builds.
*   **[Fixed] Mobile Chat History (#5744):** Resolved an issue where the mobile chat history panel showed an empty list due to rendering outside the Agent scope.
*   **[Enhanced] Rate Limiting (#5738):** Implemented multi-dimensional rate limiting (account/IP-based) to protect against brute-force and abuse.

**Advanced Features (Open PRs):**
*   **Vision Fallback (#5726):** Implementing automatic fallback to vision-capable models when text-only models receive images.
*   **Model Fallback (#5597):** Adding global and per-agent LLM model fallback mechanisms for retry scenarios.
*   **Tauri Desktop Migration (#5734):** Switching desktop release pipeline to Tauri for improved performance and smaller footprint.

## 4. Community Hot Topics
*   **Context Compression & Memory Management (#5746, #5710):** High engagement around v2.0 beta bugs where context scrolling/compression leads to "amnesia" (replying to old messages) or truncating critical anchors. *Underlying Need:* Reliable long-context handling without loss of conversational coherence.
*   **Feishu/DingTalk Channel Integration (#5709, #5708, #5721):** Multiple reports of Feishu channels failing to parse interactive cards, dropping bot-to-bot mentions, or losing sender identity in group chats. *Underlying Need:* Robust enterprise channel compatibility, specifically for complex interactive workflows in Chinese enterprise environments.
*   **Security & Key Management (#5705, #5745, #5741):** Strong interest in securing secrets via environment variables in JSON configs and redacting logs. *Underlying Need:* Enterprise-grade security compliance for storing API keys and sensitive data.
*   **CLI Enhancements (#5737):** Requests for richer CLI capabilities to facilitate programmatic wrapping and automation. *Underlying Need:* Better integration into existing DevOps pipelines and headless deployments.

## 5. Bugs & Stability
**Severity: High**
*   **#5720: Memory Leak in v1.1.12.post2:** Reports of process memory growing from 150MB to 580MB over ~64 minutes due to async task leaks and unreleased HTTP sessions, leading to OOM kills and config corruption.
*   **#5748: Agent Hang on Tool Failure:** Consumers block indefinitely when tool calls fail, causing typing indicators to spin forever. *Fix PR:* #5749 proposes adding timeouts and auto-stopping indicators.
*   **#5746: Context Scroll Error Folding:** v2.0 beta context compression incorrectly folds active tasks, causing the agent to revert to old conversations. *Fix PR:* #5747 aims to protect active turns from eviction.

**Severity: Medium**
*   **#5717: Endless Tool Execution:** Malformed tool calls in history (e.g., truncated JSON) cause infinite loops of the same tool execution.
*   **#5703: Approval Window Persistence:** Tool approval windows pop up even when disabled globally.
*   **#5696: QQ Channel Reconnect Bug:** Websocket reconnection leaves `self._http` as None, causing AttributeError on token fetch.

**Severity: Low**
*   **#5403: Browser Autofill Hijack:** Browser password managers interfere with the "Search providers" input field.
*   **#5725: Browser Lag During Streaming:** Chrome experiences lag during streaming output on Windows, unlike other platforms.

## 6. Feature Requests & Roadmap Signals
*   **Auto-Switch Models (#5718):** Users want agents to automatically switch to a backup model if the primary one fails (quota exhausted, timeout). *Likelihood:* High. PR #5597 already addresses this.
*   **Custom Telegram BaseURL (#5630):** Support for self-hosted Telegram Bot API instances. *Likelihood:* Medium-High (Enterprise need).
*   **Text Selection & Copy in Console (#5712, #5739):** Ability to select and copy text from chat messages easily. *Likelihood:* High. PR #5739 implements this.
*   **Env Var Resolution in Config (#5740, #5741):** Using `${ENV_VAR}` syntax in `agent.json` for secrets. *Likelihood:* Very High. Core for security hardening.
*   **Memory Search Reranking (#5692):** Adding a reranker step to memory search results for better accuracy. *Likelihood:* Medium (Advanced feature).

## 7. User Feedback Summary
*   **Pain Points:** The v2.0 beta is unstable regarding context management and channel parsing. Users are frustrated by "amnesia" behaviors and broken Feishu interactions. The v1.1.x series has severe memory leak issues that disrupt long-running agents.
*   **Positive Feedback:** The push towards security (secret redaction, env vars) and improved CLI tools is well-received by technical users. The transition to Tauri for desktop is seen as a positive performance move.
*   **Use Cases:** Heavy usage in enterprise settings (Feishu/DingTalk), requiring robust group chat handling and secure credential management. Automation via CLI is a growing demand.

## 8. Backlog Watch
*   **#5705: Secret Sanitization & Env Vars:** Critical for security. PR #5741 and #5745 are addressing parts of this, but comprehensive coverage (including dialog logs) needs verification.
*   **#5273: v2.0.0 Pre-release Bug Tracker:** This centralized issue is crucial for triaging the beta release. Maintainers must monitor this closely to prioritize fixes for GA.
*   **#5737: CLI Enhancement:** To enable broader adoption in automated/enterprise workflows, expanding the CLI beyond basic control is necessary.
*   **#5630: Custom Telegram BaseURL:** Important for privacy-focused or restricted-network deployments.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

` tag stripping, leading to invisible data loss.

### 6. Feature Requests & Roadmap Signals
*   **OpenAI-Compatible Chat Endpoint (#8550, #8603)** | [Links: #8550, #8603]
    *   *Signal:* Strong demand for interoperability with standard OpenAI clients (Open WebUI, LobeChat). This is likely a high-priority feature for the next major release to expand ecosystem reach.
*   **Per-Agent Custom Environment Variables (#8226)** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)
    *   *Signal:* Needed for multi-tenancy and secure secret management across different agent instances.
*   **Easy Per-Chat Model Switching (#8600)** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8600)
    *   *Signal:* Users want granular control over model selection within conversations, a common feature in competing frameworks like Moltis.
*   **Enhanced File Read Tool (#8602)** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8602)
    *   *Signal:* Request for production-ready file handling (charset detection, PDF pagination) to match competitors like Claude Code.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Visibility Gaps:** Users are frustrated that tools visible in the Gateway/API are not reflected in the TUI (#8193) or Web Dashboard (#8302).
    *   **Installation Complexity:** Source installs with optional features (like `embedded-web`) are fragile due to build order issues (#8632).
    *   **Platform Specifics:** Windows users face build/linking issues (#8604) and test failures (#7462), indicating a need for better cross-platform CI coverage.
*   **Satisfaction:**
    *   Positive reception for security hardening efforts (removing vulnerable deps).
    *   Appreciation for improved documentation and contributor guidelines (RFCs and stale policies).

### 8. Backlog Watch
*   **Windows Test Suite Failures (#7462)** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)
    *   *Status:* Open, High Priority.
    *   *Action:* 74 test failures indicate significant Unix-centric bias in test commands. Needs maintainer attention to ensure parity.
*   **Skills Multi-Agent Path Bug (#8334)** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)
    *   *Status:* Open, High Priority.
    *   *Action:* `skills install` targets wrong directory for multi-agent setups. Fix PR #8335 exists but requires review/merge.
*   **Headless SOP Deterministic Bug (#8631)** | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8631)
    *   *Status:* Open.
    *   *Action:* False-green audit trails in headless SOP execution could lead to operational risks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*