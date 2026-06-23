# OpenClaw Ecosystem Digest 2026-06-24

> Issues: 185 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-23 19:59 UTC

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

# OpenClaw Project Digest: 2026-06-24

## 1. Today's Overview
OpenClaw is experiencing a period of intense maintenance and stability refinement, characterized by extremely high contributor activity with 500 PRs and 185 issues updated in the last 24 hours. While no new official releases were published, the volume of merged fixes and open pull requests indicates a critical push to resolve session state integrity, message delivery reliability, and platform-specific quirks (macOS/iOS). The project is heavily focused on stabilizing the core agent runtime and gateway infrastructure ahead of future feature expansions, with a notable emphasis on fixing regressions introduced in the 2026.6.x series.

## 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Context:** Development activity is concentrated on the `main` branch and alpha/beta testing tracks (e.g., `2026.6.10-alpha.2`).

## 3. Project Progress
Significant technical progress was made in core session management, memory indexing, and channel integrations:

*   **Session State & Transcription:** Major refactoring continues on the SQLite migration for session transcripts (Issue #88838), with PR #96182 advancing the "Path 3" approach to decouple agent sessions from file-store layouts.
*   **Memory Indexing:** PR #96184 addressed a critical stall in legacy memory index migration, ensuring large indices (tens of thousands of chunks) complete successfully.
*   **Channel Integrations:**
    *   **iMessage:** PR #95986 introduced a new `Spectrum by Photon` plugin, enabling Linux/Windows iMessage support previously limited to macOS.
    *   **Discord:** PR #96183 fixed attachment expiration issues by downloading media at receipt time rather than after queue processing.
    *   **Telegram:** PR #95990 improved rich message fallbacks, and PR #94946 ensured reasoning payloads are correctly routed to Telegram users.
*   **Gateway & Auth:** PR #96002 fixed CLI shared auth scoping to prevent device baseline poisoning, and PR #95257 pinned the HTTP route registry during bootstrap to fix plugin visibility.

## 4. Community Hot Topics
The community is deeply engaged with issues affecting session persistence, message delivery, and cross-platform compatibility.

*   **SQLite Migration Tracking:** [Issue #88838](https://github.com/openclaw/openclaw/issues/88838) (40 comments) remains the most discussed topic, reflecting high anxiety around data integrity during the transition to SQLite-based session storage.
*   **Cron & State Contamination:** [Issue #90991](https://github.com/openclaw/openclaw/issues/90991) (14 comments) highlights fears regarding scheduled triggers corrupting global runtime state, a critical reliability concern for automated agents.
*   **Streaming Integrity:** [Issue #92201](https://github.com/openclaw/openclaw/issues/92201) (13 comments) focuses on Anthropic thinking signature validation failures during replay, impacting the reliability of "thinking" models.
*   **Compaction Timeouts:** [Issue #92043](https://github.com/openclaw/openclaw/issues/92043) (10 comments) discusses how aggressive compaction timeouts are causing legitimate long-running tasks to fail, signaling a need for adaptive thresholds.
*   **Latency Instrumentation:** [Issue #96148](https://github.com/openclaw/openclaw/issues/96148) (9 comments) shows interest in deeper observability for iMessage latency, suggesting users are scaling deployments and hitting performance walls.

## 5. Bugs & Stability
Several high-severity bugs affecting session stability and message loss were reported and tracked:

*   **Session Lock Deadlocks:** [Issue #95833](https://github.com/openclaw/openclaw/issues/95833) reports that subagent aborts fail to release `.jsonl.lock` files, permanently breaking sessions. *Fix:* PR #96000 attempts to allow reentrant session locks.
*   **Video Task Self-Deadlock:** [Issue #95701](https://github.com/openclaw/openclaw/issues/95701) describes `video_generate` tasks hanging after completion. *Fix:* PR #95993 adds status delivery to break the deadlock.
*   **Migration Data Loss:** [Issue #94939](https://github.com/openclaw/openclaw/issues/94939) reveals that 6.x state migrations can leave channel conversation stores empty (0 bytes), breaking proactive sends (e.g., MS Teams).
*   **Gateway Performance:** [Issue #92057](https://github.com/openclaw/openclaw/issues/92057) notes gateway slowdowns/timeouts under multi-session load, indicating potential concurrency bottlenecks.
*   **Auth Provider Issues:** [Issue #95136](https://github.com/openclaw/openclaw/issues/95136) highlights silent OAuth orphaning when provider IDs are renamed/removed, a significant friction point for enterprise users.

## 6. Feature Requests & Roadmap Signals
User feedback points toward a desire for better context management, UI polish, and security configurability:

*   **MCP Compaction Providers:** [Issue #96156](https://github.com/openclaw/openclaw/issues/96156) suggests allowing compaction engines to be standard MCP servers, moving away from hardcoded plugin providers. This signals a roadmap shift toward greater extensibility.
*   **LaTeX/MathJax Support:** [Issue #42840](https://github.com/openclaw/openclaw/issues/42840) (7 👍) and PR #95995 indicate strong demand for native math rendering in the Control UI. *Status:* Partially addressed via self-hosted MathJax bundle in PR #95995.
*   **Topic-Session Families:** [Issue #90916](https://github.com/openclaw/openclaw/issues/90916) proposes isolating recent transcript context while sharing durable memory, catering to users managing multiple distinct topics with one agent persona.
*   **Global SSRF Policy:** [Issue #93068](https://github.com/openclaw/openclaw/issues/93068) requests centralized security configuration for private network access, reflecting growing operational security concerns in deployed agents.
*   **Session Naming:** [Issue #93422](https://github.com/openclaw/openclaw/issues/93422) asks for `/label` and `/new <name>` commands to improve session discoverability in the WebChat UI.

## 7. User Feedback Summary
Users are expressing frustration with **reliability regressions** in the 2026.6.x series, particularly concerning:
*   **Message Loss/Delivery Failures:** Multiple issues (#92460, #86034, #95566) report scenarios where messages are dropped, delayed, or rendered out of order.
*   **Complex Setup Friction:** Issues with Windows ACPX runtime spawns (#93465), macOS local network permissions (#94147), and provider ID renames (#95136) suggest the onboarding and maintenance experience is becoming brittle for diverse environments.
*   **Performance Anxiety:** Users are noticing latency spikes in Discord (#84783) and gateway timeouts (#92057), leading to requests for better instrumentation and configurable timeouts.

## 8. Backlog Watch
Maintainers should prioritize the following long-standing or high-impact items:

*   **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838):** Core session/transcript SQLite migration. Critical for long-term data integrity.
*   **[Issue #79047](https://github.com/openclaw/openclaw/issues/79047):** Preserve conversation context across cross-backend model switches. High value for users switching between local and cloud models.
*   **[Issue #71712](https://github.com/openclaw/openclaw/issues/71712):** Agent-facing scheduling API with non-forgeable provenance. Key for autonomous agent capabilities.
*   **[Issue #38520](https://github.com/openclaw/openclaw/issues/38520):** Pre-compaction agent notification and deferral. Essential for preventing data loss during context window management.
*   **[Issue #49931](https://github.com/openclaw/openclaw/issues/49931):** Configurable shell override for `exec` tool. Important for Windows users and those needing complex shell pipelines.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Ecosystem Digest (2026-06-24)

### 1. Ecosystem Overview
The open-source personal AI agent landscape in mid-2026 is characterized by a shift from experimental prototyping to production-grade stability and security hardening. Projects are heavily investing in session integrity, cross-platform channel reliability, and supply-chain security, reflecting the maturation of agents into critical infrastructure. While innovation continues in multi-agent orchestration and native plugin architectures, the dominant narrative is resilience, with high-volume bug fixing and regression management defining the daily activity of major repositories.

### 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 185 | 500 | No New Release | High (Intense Maintenance) |
| **Hermes Agent** | 50 | 50 | No New Release | High (Rapid Iteration) |
| **CoPaw** | 38 | 50 | Patch Release (v1.1.12.post2) | High (Active Dev + Fixes) |
| **ZeroClaw** | 40 | 50 | No New Release | High (Security Focus) |
| **NanoBot** | 11 | 39 | Release (v0.2.2) | High (Balanced) |
| **IronClaw** | 17 | 36 | No New Release | Medium-High (Stabilization) |
| **LobsterAI** | N/A* | 10 (5 Merged) | No New Release | Medium (Critical Bug) |
| **PicoClaw** | N/A* | 21 | No New Release | Medium (Maintenance) |
| **NanoClaw** | N/A* | 13 | No New Release | Medium (Refactoring) |
| **NullClaw** | 1 (Closed) | 2 (Review) | No New Release | Low (Stagnant/Review) |
| **Moltis** | 0 | 1 (Merged) | No New Release | Low (Quiet) |
| **TinyClaw** | 0 | 0 | No New Release | Inactive |
| **ZeptoClaw** | 0 | 0 | No New Release | Inactive |

*\*Health Score is a qualitative assessment based on activity volume, release cadence, and severity of open issues. LobsterAI/NanoClaw/PicoClaw issue counts were not explicitly aggregated in the digest headers but inferred from activity descriptions.*
*\*\*LobsterAI issue count not explicitly provided in header, but 1 critical issue reported.*

### 3. OpenClaw's Position
OpenClaw dominates the ecosystem in terms of raw development velocity and community engagement, with 500 PRs and 185 issues updated in 24 hours—significantly higher than any peer. Its advantage lies in its comprehensive cross-platform channel support (iMessage, Discord, Telegram, etc.) and deep session state management. Unlike NanoBot or Moltis, which focus on lighter-weight or specific integrations, OpenClaw acts as a robust, enterprise-grade gateway infrastructure. Its community is larger and more anxious about data integrity, indicating it serves as the backbone for many complex, multi-channel deployments.

### 4. Shared Technical Focus Areas
Several critical technical themes emerge across multiple projects:
*   **Session State & Data Integrity:** OpenClaw (#88838), NanoBot (v0.2.2 durability), and CoPaw (#5262) all report significant friction around session persistence, migration losses, and configuration fragility. Users demand reliable SQLite or local storage transitions without data loss.
*   **Reliability of Automated Tasks (Cron/Agents):** Hermes Agent (#48648), CoPaw (#5064), ZeroClaw (#6037), and LobsterAI (#1400) all face critical bugs related to scheduled tasks, infinite loops, or startup failures. This indicates a systemic challenge in maintaining long-running, autonomous agent states.
*   **Security Hardening:** ZeroClaw (SLSA provenance, SSRF), PicoClaw (execution deny patterns), and NanoClaw (extension points) are aggressively addressing supply chain and runtime security. OpenClaw and Hermes also focus on auth scoping and credential rotation.
*   **Cross-Platform Channel Stability:** OpenClaw, NanoBot, PicoClaw, and ZeroClaw all report specific bugs related to Telegram, Discord, or WhatsApp integrations, highlighting the difficulty of maintaining stable connections across diverse, frequently updated messaging APIs.

### 5. Differentiation Analysis
*   **Technical Architecture:** OpenClaw and Hermes Agent focus on heavy-duty gateway and desktop applications with complex state management. NanoBot and PicoClaw offer more modular, potentially lighter-weight approaches with a focus on specific provider integrations (e.g., OpenCode, Doubao). ZeroClaw distinguishes itself with a strong emphasis on native dynamic library plugins and SLSA supply chain security.
*   **Target Users:** OpenClaw and Hermes cater to power users and enterprises requiring robust, multi-channel automation. NanoBot and PicoClaw attract developers and hobbyists interested in specific model providers (Anthropic, Kimi, Volcengine) and mobile/PWA experiences. CoPaw bridges this gap with a strong focus on mobile-responsive UI and AgentScope integration.
*   **Feature Focus:** IronClaw is pioneering "Reborn" engine automation with granular pause/resume/delete controls. NullClaw is exploring Cron subagent engines with JSON CLI outputs. Moltis is focusing on simple, effective media tools (send_image).

### 6. Community Momentum & Maturity
*   **Rapid Iteration (High Velocity):** OpenClaw, Hermes Agent, CoPaw, and ZeroClaw. These projects are in active development cycles, merging numerous fixes and features daily. They are mature enough to handle high traffic but young enough to still be reshaping core architectures.
*   **Stabilization Phase:** NanoBot (post-v0.2.2), IronClaw (post-Reborn initial push), and LobsterAI (post-v4.1 critical bug). These projects are shifting focus from feature addition to bug fixing and reliability.
*   **Niche/Maintenance:** PicoClaw, NanoClaw, and NullClaw are in maintenance or steady-state development, focusing on specific integrations or architectural refinements without explosive growth.
*   **Low Activity:** Moltis, TinyClaw, and ZeptoClaw show minimal recent activity, suggesting either stable, mature products with few changes or declining community engagement.

### 7. Trend Signals
*   **Shift to Local-First & Privacy:** The emphasis on PWA support (NanoBot), local credential management (Hermes/OpenClaw), and offline-capable session storage suggests a trend towards more private, self-hosted agent deployments.
*   **Enterprise-Grade Security:** ZeroClaw’s SLSA focus and PicoClaw’s execution deny patterns indicate that the market is demanding enterprise-level security guarantees, not just functional AI.
*   **Complexity Management:** The recurring issues with infinite loops, session deadlocks, and context window management across almost all major projects highlight that managing the complexity of long-running, multi-tool agent interactions remains the primary technical challenge. Developers need better abstractions for state management and error recovery.
*   **Multi-Modal & Rich Media:** Support for LaTeX (OpenClaw/CoPaw), video generation (OpenClaw), and image sending (Moltis/NanoBot) shows that agents are expected to handle rich media natively, not just text.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-06-24

### 1. Today's Overview
NanoBot is experiencing high development velocity with 39 Pull Requests and 11 Issues updated in the last 24 hours, indicating a robust contribution cycle led by core maintainers and community members. The project recently released **v0.2.2**, which focuses heavily on architectural durability, specifically addressing conversation segmentation and forked chat stability. Current activity is dominated by fixes for provider-specific bugs (Anthropic/Kimi), WebUI enhancements (PWA support), and memory management refinements. The overall health of the repository is strong, with a balanced mix of bug fixes and feature additions, though several critical stability issues regarding infinite loops and UI rendering remain open.

### 2. Releases
*   **v0.2.2 Released**: This update marks a significant step toward production readiness.
    *   **Key Changes**: 140 PRs merged and 21 new contributors included.
    *   **Durability Improvements**: WebUI conversations now use segmented transcripts rather than fragile single-file storage. Forked chats preserve reply chains more reliably.
    *   **Impact**: Users should expect fewer corrupted session files and improved stability during complex multi-turn interactions.

### 3. Project Progress
Significant technical advancements were made today across three main pillars:
*   **Provider Integration**: Support for **OpenCode Zen** and **OpenCode Go** providers was added (PR #4476, Issue #4475), expanding the ecosystem for coding agents. Additionally, the **Kimi Coding Plan** subscription support was initiated (Issue #4463).
*   **Memory & Context Management**: Several PRs advanced the memory subsystem, including "eager consolidation" (PR #4402), provenance-gated archiving (PR #4424), and lifecycle-aware wiki memory writing (PR #4477). These changes aim to reduce context bloat and improve long-term retention accuracy.
*   **WebUI Enhancements**: PWA support for mobile installation and sidebar swipe gestures was implemented (PR #4480, Issue #4457/#4479), alongside a fix for iOS Safari composer zoom issues (PR #4471).

### 4. Community Hot Topics
*   **[OPEN] Breaking endless tool calling loops** (#2298): Despite being created in March, this issue gained traction today. It highlights a persistent pain point for users running smaller/local models, where the agent gets stuck in repetitive tool execution. *Underlying Need:* Robust fallback mechanisms and loop detection logic are critical for usability with less capable models.
*   **[OPEN] Telegram display bug** (#4470): Reported today, this issue affects line breaks and causes message flickering due to streaming preview conflicts. *Underlying Need:* As Telegram becomes a primary interface, ensuring rich text formatting and stable streaming UX is essential.
*   **[OPEN] WebUI renders `<thinking/>` tags as visible text** (#4465): A regression where internal model reasoning tokens leak into the user-facing UI. *Underlying Need:* Better sanitization of model output templates to ensure clean user experiences.

### 5. Bugs & Stability
Ranked by severity and impact:
1.  **Infinite Tool Calling Loops** (#2298): *Severity: High.* Prevents task completion with smaller models. No fix PR yet.
2.  **Telegram Streaming Regressions** (#4470): *Severity: Medium.* Visual glitches and formatting loss. *Fix Status:* PR #4472 proposes skipping `sendRichMessage` when streaming previews exist.
3.  **Anthropic/Kimi Parallel Tool ID Collisions** (#4473, #4442): *Severity: Medium.* Causes 400 errors in specific provider configurations. *Fix Status:* PR #4474 and PR #4444 address deduplication of tool_use IDs.
4.  **Heartbeat Cron Logic Regression** (#4410): *Severity: Low.* Sends unwanted messages even when "don't ask" is configured. *Status:* Closed/Fixed.
5.  **iOS Safari Composer Zoom** (#4388): *Severity: Low.* UX distortion on mobile. *Status:* Fixed via PR #4471.

### 6. Feature Requests & Roadmap Signals
*   **Custom Provider Thinking Styles**: Request to allow custom providers to define non-standard thinking parameters (e.g., VolcEngine/Doubao) (PR #4482). This suggests a roadmap toward broader, flexible provider compatibility.
*   **Cron Job Model Presets**: Ability to assign specific models to scheduled tasks without affecting the main agent (PR #4416). Indicates a move towards cost optimization and specialized task handling.
*   **Subagent Result Modes**: Introduction of "aggregated" result modes for subagents (PR #4414). Signals an evolution in how complex, multi-agent workflows handle outputs, prioritizing summarized results over raw real-time streams.

### 7. User Feedback Summary
Users are increasingly focusing on **reliability** and **mobile experience**.
*   **Pain Points**: The leakage of internal tags (`<thinking/>`) into the UI and the persistence of infinite loops with local models are major frustrations. Telegram users are sensitive to formatting breaks.
*   **Positive Sentiment**: The community welcomes the new PWA support and the expansion of provider options (OpenCode, Kimi). The focus on "durability" in v0.2.2 is well-received by power users managing long-running sessions.
*   **Use Cases**: Heavy usage of automated cron jobs (Dream feature) and complex subagent orchestration, requiring fine-grained control over memory and model selection.

### 8. Backlog Watch
*   **#2298 [OPEN] Breaking endless tool calling loops**: Created 2026-03-20. This is a critical stability blocker for non-state-of-the-art models. Maintainers need to prioritize implementing a loop-detection or rate-limiting mechanism.
*   **#4465 [OPEN] Bug: WebUI renders `<thinking/>` tags**: Created 2026-06-23. While likely a quick fix, it impacts the perceived polish of the application.
*   **#4467 [OPEN] Dream should update existing workspace skills**: Created 2026-06-23. Users want idempotent skill updates rather than duplicate creation. This requires architectural consideration for the "Dream" cron system.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-24
**Source:** NousResearch/hermes-agent

## 1. Today's Overview
The Hermes Agent project is experiencing extremely high development velocity, with 50 issues and 50 pull requests updated in the last 24 hours. Despite zero new official releases, the community and core team are actively addressing critical stability regressions introduced in recent versions (specifically v0.17) and enhancing platform integrations. Activity is heavily concentrated on fixing gateway race conditions, credential management bugs, and Windows/WSL compatibility issues. The project remains in a state of rapid iteration, prioritizing bug fixes and infrastructure hardening over new feature launches.

## 2. Releases
**No new releases published.**
While version `v0.17.0` was referenced in several bug reports (e.g., Issue #50688, Issue #51463) as the source of regressions, no new patch release has been tagged or announced in the last 24 hours. Users are currently relying on `main` branch commits or existing stable tags to mitigate critical bugs.

## 3. Project Progress
Several significant technical improvements were advanced or merged today:
*   **Desktop & UX Enhancements:** PR #49037 introduces first-class "Projects" support in the desktop app, including a coding rail, review pane, and session grouping. PR #51501 improves desktop backend cleanup on Windows and lazy-resumes chats to prevent blocking.
*   **Security & Gateway Hardening:** PR #51517 fixes CORS preflight headers for session IDs. PR #51518 enforces session ID length caps to prevent potential abuse. PR #51519 scopes idempotency fingerprints to session context, fixing a critical state leakage bug. PR #45734 hardens WeCom path-traversal guards.
*   **Tooling & Integrations:** PR #22648 adds Ollama Cloud as a plugin-based web search provider. PR #51422 fixes skill uninstallation logic to properly clean up disabled configs. PR #51516 ensures delegation configs are reloaded live to respect user changes.

## 4. Community Hot Topics
*   **Credential Rotation & Auth Stability:** Issue #19566 (8 comments) highlights a critical bug where OpenAI-Codex credentials are dropped during rotation due to stale `auth.json` rewrites. This reflects a broader need for robust, atomic credential management in multi-process environments.
*   **Telegram Message Duplication:** Issue #48648 (6 comments) reports an infinite loop causing message duplication when Telegram responses exceed 4096 characters. This is a high-visibility issue affecting core messaging reliability.
*   **Plugin Routing Flexibility:** Issue #41190 (6 comments) requests a unified plugin route selector to override providers/models per-turn. Users are seeking granular control over LLM routing for cost optimization and reliability.
*   **Vision Provider Fallbacks:** Issue #25822 (5 comments) and Issue #42083 (4 comments) discuss failures in Gemini and general auxiliary vision fallback chains when encountering 503/502 errors. Users need reliable fallback mechanisms for multimodal tasks.
    *   *Links:* [Issue #19566](https://github.com/NousResearch/hermes-agent/issues/19566), [Issue #48648](https://github.com/NousResearch/hermes-agent/issues/48648), [Issue #41190](https://github.com/NousResearch/hermes-agent/issues/41190)

## 5. Bugs & Stability
Multiple high-severity bugs and regressions were reported today, many linked to recent upgrades or platform-specific edge cases:
*   **Regressions in v0.17:** Issue #50688 reports tasks being silently skipped and stale context re-triggering sub-agents after upgrading to v0.17. Issue #51463 reports Signal duplicate messages despite a previous fix.
*   **Gateway & Session State:** Issue #51486 (Closed) noted stale `base_url` persistence during model switches. Issue #51325 describes orphaned gateway processes on WSL without systemd. Issue #48643 notes `tui_gateway` processes not being reaped after interruptions.
*   **Platform Specifics:** Issue #44121 details `npm ci` failures on npm 11 due to lockfile mismatches. Issue #43334 reports installer failures on Windows paths with spaces. Issue #47837 identifies bash resolution conflicts between WSL and Git-for-Windows on native Windows.
*   **Fix Availability:** Several bugs have associated PRs or fixes in progress (e.g., PR #51516 for delegation config, PR #51501 for desktop cleanup). However, critical regressions like #50688 and #51463 appear to need immediate patch releases.

## 6. Feature Requests & Roadmap Signals
*   **WhatsApp Template Support:** Issue #45935 requests support for WhatsApp Cloud API message templates to enable re-engagement outside the 24-hour window. This indicates a strong demand from business users for automated re-engagement capabilities.
*   **Slack AI App Integration:** Issue #51363 asks for support of Slack's "thinking steps" and task card blocks. This aligns with the trend of integrating richer UI elements from messaging platforms.
*   **Progressive Context Compression:** Issue #35467 proposes background pre-compaction to reduce latency during session compression. This suggests users are hitting performance bottlenecks with synchronous context management.
*   **Model Selection in Delegation:** Issue #35437 consolidates requests to allow specifying model/provider for delegated tasks, enabling cost/performance tuning for sub-agents.

## 7. User Feedback Summary
*   **Frustration with Regressions:** Users are actively reporting disruptions after upgrading to v0.17 (Issues #50688, #51463), indicating that the latest release introduced breaking changes or incomplete fixes.
*   **Installation Pain Points:** Windows users face significant hurdles with installers failing on non-standard paths (Issue #43334) and npm/node version incompatibilities (Issue #44121).
*   **Desire for Granular Control:** There is a consistent theme of users wanting more control over routing, model selection, and credential management (Issues #41190, #35437, #19566).
*   **Mobile/TUI UX Issues:** Users report blurry content cards (Issue #32837) and confusing keyboard shortcuts in the TUI (Issue #51515), suggesting the desktop/mobile client needs polish.

## 8. Backlog Watch
*   **PEP 668 System Python Conflict:** Issue #30594 (Updated 2026-06-23) remains open, blocking users on Debian/Ubuntu/Kali who install Hermes against system Python. This is a high-priority compatibility issue.
*   **Windows Installer Path Handling:** Issue #43334 highlights a fundamental flaw in the Windows installer regarding spaces in user profiles.
*   **MCP Tool Snapshot Timeout:** Issue #51316 reports that slow-starting MCP servers are missed in single-query mode, limiting tool availability for some users.
*   **Cron Profile Scoping:** Issue #51520 notes that the desktop cron sidebar aggregates all profiles, lacking per-profile filtering, which is confusing for multi-profile users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-06-24
**Source:** github.com/sipeed/picoclaw

## 1. Today's Overview
The PicoClaw project demonstrates high velocity with 21 Pull Requests updated in the last 24 hours, indicating intense development activity focused on security hardening, platform expansion, and dependency management. While no new releases were published, significant stability improvements were merged, particularly regarding execution safety and WebSocket reliability. Community engagement remains moderate, with recent issues highlighting connectivity bugs on Windows and unexpected task repetition behaviors. The project is currently in a maintenance and feature-enrichment phase, strengthening its core infrastructure ahead of potential future releases.

## 2. Releases
**No new releases.**
*   Last known active version mentioned in issues: v0.2.9.
*   No migration notes or breaking changes associated with a new release this period.

## 3. Project Progress
**Merged/Closed PRs (Last 24h):**
*   **#3154 [CLOSED] fix(openai_compat): recover Doubao Seed tool calls:** Fixed a critical parsing issue where Volcengine Doubao models embedded tool calls as raw XML (`<seed:tool_call>`) instead of standard JSON fields, preventing execution failures.
*   **#3162 [CLOSED] fix(whatsapp): add reconnection and async message processing:** Resolved automatic WebSocket disconnections in the WhatsApp channel by implementing exponential backoff reconnection, pong handlers, and async message processing goroutines.
*   **#3059 [CLOSED] fix: explicitly ignore Close() errors:** Cleaned up linting warnings by properly acknowledging ignored `Close()` errors in resource paths (PTY, HTTP bodies).
*   **#3054 [CLOSED] fix(line):** Added safety checks for `sync.Map` type assertions in the LINE channel to prevent panics during quote/reply token processing.
*   **#3047 [CLOSED] fix(web):** Restored full JSONL history for session details, fixing issues where archived messages were hidden from the session viewer.
*   **#3053 [CLOSED] fix(evolution):** Prevented panics in `lockStoreFile` by adding safe type assertions for mutex storage.
*   **#3091 [CLOSED] fix(openai_compat):** Fixed silent disabling of `native_search` due to unchecked type assertions.

**Key Advancements:**
*   **Security Hardening:** Multiple PRs (#3160, #3161) focus on tightening execution deny patterns and rejecting cross-site launcher setup requests, addressing potential privilege escalation and injection risks.
*   **Dependency Updates:** Dependabot automated updates for `shadcn`, `typescript-eslint`, `vite`, `@vitejs/plugin-react`, and `eslint` ensure the frontend stack remains current and secure.

## 4. Community Hot Topics
*   **Issue #3015: QQ Channel Connection Failure on Windows [CLOSED]**
    *   *Link:* https://github.com/sipeed/picoclaw/issues/3015
    *   *Analysis:* Users reported token retrieval timeouts specifically on Windows builds. The resolution suggests platform-specific network stack or certificate issues that have been addressed, reflecting ongoing efforts to stabilize Chinese social media integrations.
*   **Issue #3159: Frequent Repetitive Tasks [OPEN]**
    *   *Link:* https://github.com/sipeed/picoclaw/issues/3159
    *   *Analysis:* A user reported the AI repeating previous tasks (US news) before executing new ones (France news). This highlights a need for better context window management or instruction adherence in multi-turn dialogues, particularly with specific providers like DeepSeek.
*   **PR #3163: feat(bedrock): leverage Converse prompt caching [OPEN]**
    *   *Link:* https://github.com/sipeed/picoclaw/pull/3163
    *   *Analysis:* High interest in cost optimization. By implementing AWS Bedrock prompt caching via cache points, PicoClaw can significantly reduce latency and costs for long-context conversations, appealing to enterprise users.

## 5. Bugs & Stability
**Reported Today:**
1.  **High Severity:** **WhatsApp Disconnections** (Fixed in #3162). The lack of async processing and reconnection logic caused service interruptions. *Status: Resolved.*
2.  **Medium Severity:** **Doubao Tool Call Parsing** (Fixed in #3154). Non-standard XML embedding in model outputs caused execution failures. *Status: Resolved.*
3.  **Low Severity:** **Session History Visibility** (Fixed in #3047). Archived messages were not displayed in the web UI. *Status: Resolved.*
4.  **Open Bug:** **Repetitive Task Execution** (#3159). The AI repeats prior context unnecessarily. *Status: Open, awaiting investigation.*

**Regression Risks:**
*   The strict enforcement of execution deny patterns in PR #3161 may break workflows relying on `jq` or similar tools if not carefully whitelisted, though the PR aims to preserve allow rules while keeping deny rules active.

## 6. Feature Requests & Roadmap Signals
*   **Remote Agent Mode:** **PR #3118** proposes adding WebSocket-based remote operation for the `picoclaw agent`. This signals a roadmap toward distributed agent architectures, allowing users to run agents on headless servers while controlling them remotely.
*   **Android ADB Integration:** **PR #3157** introduces an experimental tool for Android device control (screenshots, taps, swipes). This indicates a strategic move into mobile automation and IoT integration, expanding PicoClaw beyond desktop/web assistants.
*   **Telegram Reply-as-Mention:** **PR #2975** enhances Telegram usability by treating replies as mentions. This improves UX for group chat interactions, a common user requirement for community bots.

## 7. User Feedback Summary
*   **Pain Points:** Windows-specific connectivity issues (QQ) and unexpected repetitive behavior in multi-topic queries are the primary user complaints.
*   **Satisfaction Drivers:** Users appreciate rapid bug fixes for major channels (WhatsApp, LINE) and security patches. The proactive dependency updates suggest a well-maintained codebase.
*   **Use Cases:** Heavy usage in social media integration (QQ, Telegram, WhatsApp) and cloud provider optimization (AWS Bedrock caching).

## 8. Backlog Watch
*   **PR #3118 (Remote WebSocket Mode):** Created June 12, still open. This is a significant architectural feature. Maintainers should prioritize review to enable distributed agent setups.
*   **PR #3157 (Android ADB Tool):** Created June 22, still open. As an experimental feature, it requires careful testing but represents a unique differentiator.
*   **Issue #3159 (Repetitive Tasks):** Created June 23, still open. Needs triage to determine if this is a model-specific issue (DeepSeek) or a system prompt/context handling bug in PicoClaw.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-24
**Source:** github.com/qwibitai/nanoclaw

### 1. Today's Overview
NanoClaw demonstrates high development velocity with 13 pull requests updated in the last 24 hours, indicating a strong focus on dependency synchronization and architectural extensibility. While no new official releases were published, significant internal refactoring occurred, particularly regarding the Chat SDK version lock and the introduction of generic extension points. Community engagement remains moderate, with one critical infrastructure issue reported regarding Slack port binding, suggesting ongoing friction in local deployment configurations.

### 2. Releases
*   **No new releases.**
*   *Note:* Several PRs (#2834, #2835, #2836) focused on bumping the `@chat-adapter/*` and core `chat` dependencies to version **4.29.0**. These changes are currently isolated to specific branches (`main`, `channels`, `providers`) and have not yet been consolidated into a tagged release.

### 3. Project Progress
The majority of today's activity involved merging or closing PRs related to dependency management and feature extensions:
*   **Dependency Locking (Merged/Closed):** PRs #2834, #2835, and #2836 successfully synchronized the Chat SDK to v4.29.0 across `main`, `channels`, and `providers` registries to prevent type-checking failures in `createChatSdkBridge`.
*   **Slack Socket Mode (Closed/Merged):** PR #2837 added support for Slack Socket Mode, allowing bots to connect via outbound WebSocket without requiring a public HTTPS endpoint. This was later consolidated into the `channels` branch via PR #2839.
*   **Extension Architecture (Open/Closed):** PR #2842 introduced generic, inert extension-point seams (`registerX()`/`applyX()`) across the host and container runtime, enabling downstream forks to inject logic without altering upstream behavior.
*   **Approval Workflow (Open):** PR #2832 proposes adding a "Reject with reason" feature to module approval cards, enhancing feedback loops between agents and human approvers.

### 4. Community Hot Topics
*   **Slack Port Binding Conflict:** Issue #2840 highlights a security/usability conflict where port 3000 is bound to the external IP, invalidating the purpose of the recommended tunnel setup.
    *   *Link:* [Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840)
    *   *Analysis:* Users require more robust network configuration options or automatic port randomization for local development environments behind NAT.
*   **Skill Update Visibility:** PR #2826 addresses a gap where users performing host updates might silently miss upstream fixes to installed skills.
    *   *Link:* [PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826)
    *   *Analysis:* There is a strong demand for better transparency and nudges regarding component updates, specifically for providers and channels.

### 5. Bugs & Stability
*   **Security/Configuration Bug:** Issue #2840 reports that the Slack installation instructions lead to a security misconfiguration (binding to external IP instead of localhost/tunnel).
    *   *Severity:* High (Security/Usability)
    *   *Status:* Open, awaiting maintainer response.
*   **Performance/Stability:** PR #2771 addresses potential crashes or instability in agent containers running headless Chromium by increasing shared memory (`--shm-size=1g`) and adding init processes (`--init`).
    *   *Severity:* Medium (Stability)
    *   *Status:* Open PR.

### 6. Feature Requests & Roadmap Signals
*   **Manifest Model Router:** PR #2838 introduces a new provider capability for routing models via manifest, signaling a move toward more flexible LLM provider abstractions.
    *   *Link:* [PR #2838](https://github.com/nanocoai/nanoclaw/pull/2838)
*   **Email Integration:** PR #1235 continues to push for native IMAP/SMTP email integration, exposing MCP tools for inbox management.
    *   *Link:* [PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)
*   **Predicted Next Version Features:** Expect the Chat SDK v4.29.0 stabilization, the generic extension-point seams for forkability, and improved Slack Socket Mode support to be prominent in the next major release.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the complexity of setting up secure tunnels for Slack and the lack of visibility when updating skills independently of the host.
*   **Use Cases:** Heavy emphasis on local development setups (behind NAT/firewalls) and enterprise-like approval workflows for agent actions.
*   **Satisfaction:** The community appreciates the modular approach to adapters but finds the current update mechanism fragmented.

### 8. Backlog Watch
*   **IMAP/SMTP Email:** PR #1235 has been open since March 2026. Despite high interest, it remains unmerged. Maintainers should prioritize this or communicate a timeline.
    *   *Link:* [PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)
*   **Container Performance:** PR #2771 (`--shm-size` optimization) is critical for stability with Chromium-based agents but remains open.
    *   *Link:* [PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771)
*   **Slack Port Bug:** Issue #2840 requires immediate attention to prevent user security risks during installation.
    *   *Link:* [Issue #2840](https://github.com/nanocoai/nanoclaw/issues/2840)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-06-24

## 1. Today's Overview
NullClaw demonstrates moderate daily activity with one issue resolved and two pull requests currently under review, though no code was merged today. The project is in a maintenance phase regarding stability, evidenced by the closure of a critical response handling bug, while simultaneously pushing forward significant architectural enhancements via open PRs. There are no new releases deployed in the last 24 hours, indicating that current fixes and features are still undergoing final validation or review before distribution. Overall, the repository health is stable with active contributor engagement on both debugging and feature expansion fronts.

## 2. Releases
No new releases were published during this reporting period.

## 3. Project Progress
*   **Closed Issue:** Issue #967 (`[bug] error: NoResponseContent`) was closed on 2026-06-23, resolving a high-frequency crash scenario where the agent failed to process responses from the Agnes-2.0-Flash model.
*   **Open PRs (Under Review):**
    *   **PR #783:** A major feature update introducing a **Cron subagent engine**. This includes DB-backed scheduling, history tracking, JSON CLI output capabilities, and security hardening. While created in April, it remains open for review as of today.
    *   **PR #968:** A targeted fix for **Matrix integration persistence**. It addresses a bug where the `next_batch` sync cursor was lost upon restart, causing redundant initial syncs and potential message duplication.

## 4. Community Hot Topics
*   **Issue #967:** [Bug Report: NoResponseContent](https://github.com/nullclaw/nullclaw/issues/967)
    *   **Analysis:** This issue highlights a significant reliability concern for users employing the Agnes-2.0-Flash model. With a failure rate exceeding 50% in recent user reports, this represents a critical pain point for core functionality. The closure suggests a patch is ready or the issue is being addressed via the upcoming release cycle.
*   **PR #783:** [feat(cron): Cron subagent, run history, JSON output](https://github.com/nullclaw/nullclaw/pull/783)
    *   **Analysis:** The sustained interest in this PR indicates strong community demand for automated, scheduled agent tasks. The inclusion of "security hardening" and "operator alerts" suggests the maintainers are responding to enterprise-grade use cases requiring robust automation.

## 5. Bugs & Stability
*   **High Severity:** Issue #967 ([Link](https://github.com/nullclaw/nullclaw/issues/967)) reported a `NoResponseContent` error affecting over half of interactions with specific model configurations. This has been marked as closed, implying resolution.
*   **Medium Severity:** PR #968 ([Link](https://github.com/nullclaw/nullclaw/pull/968)) addresses a state persistence bug in the Matrix module. While not a crash, it causes inefficient resource usage and potential data redundancy (duplicate messages) upon server restarts.

## 6. Feature Requests & Roadmap Signals
*   **Automated Task Execution:** PR #783 strongly signals that the next major version will include a robust **Cron/Scheduler subsystem**. Users can expect features like `cron list --json`, timezone-aware scheduling, and background job workers.
*   **Improved DevOps/Integration Reliability:** The focus on Matrix state persistence (PR #968) suggests a roadmap commitment to stabilizing external service integrations, ensuring they survive infrastructure restarts gracefully.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing significant frustration with response latency and failure rates when using the Agnes-2.0-Flash model (Issue #967). The specific mention of "27 seconds" response time and ">50% failure frequency" indicates that performance optimization for this model is a top priority for the user base.
*   **Use Cases:** The community is actively using NullClaw for complex, multi-step agent workflows involving Matrix communication and scheduled tasks, moving beyond simple chat interfaces.

## 8. Backlog Watch
*   **PR #783:** [feat(cron): Cron subagent...](https://github.com/nullclaw/nullclaw/pull/783)
    *   **Status:** Open since 2026-04-07.
    *   **Action Required:** This is a substantial feature addition that has been in review for nearly three months. Maintainers should prioritize reviewing and merging this to unlock the scheduled agent functionality, which appears to be a key differentiator for the project's future.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-06-24

### 1. Today's Overview
The IronClaw project exhibits high velocity on 2026-06-24, driven primarily by the "Reborn" engine initiative. Activity is concentrated around stabilizing the new WebUI v2, automating workflows, and addressing critical latency/regression issues introduced in recent commits. With 17 issues and 36 pull requests updated in the last 24 hours, the team is actively closing gaps in automation controls (pause/resume/delete) and fixing broken LLM integrations. No new releases were published today, indicating a focus on stabilization before the next deployment.

### 2. Releases
*   **No new releases published.**
*   Development is focused on merging significant architectural changes to the Reborn engine and WebUI v2 rather than cutting a new version tag.

### 3. Project Progress
Significant advancements were made in **Reborn Automation Control** and **Performance Optimization**:

*   **Automation Lifecycle:** Closed PRs **#5133** (Delete support), **#5131** (Pause/Resume support), and **#5152** (Slack setup in WebUI) finalize the core CRUD operations for Reborn automations within WebUI v2. These changes allow users to fully manage their automated workflows via the modern interface.
*   **Latency Fixes:** PR **#5149** addresses a critical performance bottleneck where excessive tool schema transmission caused timeouts on NEAR AI. By implementing progressive tool disclosure, this PR aims to reduce payload size significantly.
*   **Infrastructure Cleanup:** PR **#5159** removes redundant test executions in the CI pipeline, and PR **#5161** cleans up legacy Slack configuration fields, improving maintainability.
*   **Memory Architecture:** PR **#5163** introduces a `MemoryService` facade, decoupling memory logic from specific providers and preparing the ground for third-party memory integrations.

### 4. Community Hot Topics
The most discussed topics revolve around **workflow reliability** and **LLM integration stability**:

*   **[Issue #5139](https://github.com/nearai/ironclaw/issues/5139)**: A severe regression where web/research tasks hang at initialization with zero LLM calls. This was reported immediately after a commit range shift (`2b2ccc55` → `704fcd43`) and has impacted daily benchmarking (PinchBench).
*   **[Issue #5151](https://github.com/nearai/ironclaw/issues/5151)**: Claude Sonnet 4.5 failing to create automations after pause/resume tools were exposed, indicating a prompt alignment or capability discovery issue with the latest model.
*   **[Issue #4640](https://github.com/nearai/ironclaw/issues/4640)**: Persistent bugs in the Google Calendar extension returning unordered/oldest events, highlighting friction in first-party extension reliability.
*   **[Issue #5147](https://github.com/nearai/ironclaw/issues/5147)**: A flaky test (`trigger_poller_does_not_submit_turn_for_unpaired_actor`) blocking the merge queue, suggesting instability in the trigger polling mechanism.

### 5. Bugs & Stability
Several critical bugs and regressions were identified and tracked today:

1.  **High Severity:** **[Issue #5139](https://github.com/nearai/ironclaw/issues/5139)** - Reborn wedge on web/research tasks (zero LLM calls). *Status: Open.*
2.  **High Severity:** **[Issue #5148](https://github.com/nearai/ironclaw/issues/5148)** - Scheduler heartbeat deadlock causing infinite hangs during extension installs. *Status: Open.*
3.  **Medium Severity:** **[Issue #5151](https://github.com/nearai/ironclaw/issues/5151)** - Model failure to generate automation creation calls post-pause/resume exposure. *Status: Open.*
4.  **Medium Severity:** **[Issue #5129](https://github.com/nearai/ironclaw/issues/5129)** - "Always approve" setting not functioning for `outbound_delivery_target_set`. *Status: Open.*
5.  **Low Severity:** **[Issue #5157](https://github.com/nearai/ironclaw/issues/5157)** - Missing Inference section in Settings on Railway hosting. *Status: Open.*
6.  **Low Severity:** **[Issue #4640](https://github.com/nearai/ironclaw/issues/4640)** - Google Calendar list_events ordering bug. *Status: Open.*

### 6. Feature Requests & Roadmap Signals
*   **Unified Gate Semantics:** **[Issue #5120](https://github.com/nearai/ironclaw/issues/5120)** highlights a need to standardize user-facing outcomes (Declined/Denied/Canceled) across auth, approval, and activity projections. PR **#5145** is actively refactoring activity gate identity handling to address this.
*   **Skill Learning Approval Gates:** **[PR #5156](https://github.com/nearai/ironclaw/pull/5156)** introduces a "pending review" state for newly learned skills, signaling a roadmap shift toward safer, human-in-the-loop AI skill acquisition.
*   **First-Run Setup API:** **[Issue #4592](https://github.com/nearai/ironclaw/issues/4592)** and associated closed PRs indicate a strong push to simplify initial Reborn configuration via WebUI v2 APIs, removing the need for manual TOML editing.

### 7. User Feedback Summary
*   **Pain Points:** Users are experiencing significant friction with the new Reborn engine's stability, specifically regarding task execution hangs (**#5139**) and scheduler deadlocks (**#5148**). The lack of visibility in the WebUI (missing inference section **#5157**, no deactivate button **#5146**) is also noted.
*   **Positive Signals:** The community appreciates the granular control over automations (pause/resume/delete) and the move towards a more structured, API-driven setup process.
*   **Satisfaction:** Mixed. While feature development is rapid, the high number of open critical bugs and regressions suggests current stability does not yet match feature parity.

### 8. Backlog Watch
Maintainers should prioritize the following unresolved items to prevent further regression:

*   **[Issue #5139](https://github.com/nearai/ironclaw/issues/5139)**: Investigate the root cause of the web/research task hang. This blocks reliable usage of the Reborn engine for complex tasks.
*   **[Issue #5148](https://github.com/nearai/ironclaw/issues/5148)**: Resolve the scheduler heartbeat deadlock. This causes indefinite resource leaks and hangs.
*   **[Issue #5147](https://github.com/nearai/ironclaw/issues/5147)**: Fix the flaky trigger poller test. The intermittent failures are disrupting the CI/CD merge queue.
*   **[Issue #5151](https://github.com/nearai/ironclaw/issues/5151)**: Debug the Claude Sonnet 4.5 integration failure. This requires prompt engineering or tool exposure adjustments.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-24
**Source:** GitHub Data Analysis (netease-youdao/LobsterAI)

### 1. Today's Overview
The LobsterAI project demonstrates high development velocity on June 23-24, with significant activity in merging backend infrastructure improvements while simultaneously managing critical stability issues. Ten pull requests were updated, resulting in five merges focused primarily on OpenClaw scheduler synchronization, logging enhancements, and Cowork plan persistence. However, the project faces a severe stability threat indicated by an open issue reporting infinite startup loops in version 4.1, suggesting potential regressions in recent updates. Community engagement remains active with several stale but important security and UX fixes pending review.

### 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Note:** The most recent stable context involves version 4.1, which is currently associated with critical startup failures reported by users.

### 3. Project Progress
Significant progress was made today in stabilizing the OpenClaw integration and improving the Cowork experience. Key merged/closed contributions include:

*   **OpenClaw Scheduler Sync (PR #2190):** Fixed session key recognition for cron jobs, ensuring that repeated runs reuse local Cowork sessions efficiently.
*   **Legacy Migration (PR #2189):** Implemented automatic migration for legacy OpenClaw cron storage formats upon startup, reducing manual intervention requirements for upgrades.
*   **Startup State Clarification (PR #2191):** Improved visibility into scheduled-task states (startup, loading, ready, error) and refined cron data refreshing logic post-handshake.
*   **Cowork Plan Persistence (PR #2192):** Introduced a persistent plan confirmation flow, allowing "Plan Mode" to remain active per draft/session until explicitly disabled or confirmed.
*   **Logging Infrastructure (PR #2188):** Added `rlog` capabilities across renderer, main, and cowork areas to enhance debugging and observability.

### 4. Community Hot Topics
The following issues and PRs are generating discussion or represent critical community needs:

*   **[Issue #1400] Critical Startup Failure in v4.1**
    *   **Link:** [netease-youdao/LobsterAI Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400)
    *   **Analysis:** This is the highest-priority topic. A user reports an infinite restart loop after upgrading from 3.30 to 4.1, coupled with LLM configuration conflicts (Qwen3.5-plus). The severity is "Critical" due to total application paralysis. This indicates a regression in the upgrade path or dependency resolution in the 4.1 release candidate/stable build.
*   **[PR #1401] Security Vulnerability in Request IDs**
    *   **Link:** [netease-youdao/LobsterAI PR #1401](https://github.com/netease-youdao/LobsterAI/pull/1401)
    *   **Analysis:** Highlights a security flaw where predictable `Math.random()` IDs could allow attackers to subscribe to other users' SSE streams. The fix uses `crypto.randomUUID()`. This reflects a growing community concern regarding data privacy and secure stream handling in multi-user environments.

### 5. Bugs & Stability
*   **Severity: Critical**
    *   **Bug:** Infinite startup loop and gateway failure in v4.1.
    *   **Details:** Users upgrading from v3.30 to v4.1 experience repeated restarts. Additionally, custom LLM configurations (e.g., Qwen3.5-plus) fail to initialize due to dependency errors (`web-extractor` requiring `web-search`).
    *   **Status:** Open, awaiting maintainer attention. No fix PR linked yet.
*   **Severity: Medium**
    *   **Bug:** Multi-select attachment picker bug (#1384) causing only the last file to be attached.
    *   **Status:** Fix submitted in [PR #1402](https://github.com/netease-youdao/LobsterAI/pull/1402) (Open/Stale).

### 6. Feature Requests & Roadmap Signals
*   **UX Improvements for Scheduled Tasks:**
    *   [PR #1404](https://github.com/netease-youdao/LobsterAI/pull/1404) proposes replacing native HTML time/date pickers with custom-styled components to match the app's theme and improve usability in Electron. This signals a roadmap focus on refining the desktop experience consistency.
*   **Notification Flexibility:**
    *   [PR #1406](https://github.com/netease-youdao/LobsterAI/pull/1406) addresses a bug where empty IM filters resulted in no notification channels being shown. This suggests users require robust fallback mechanisms for notification delivery even when specific platforms are disabled.
*   **Internationalization (i18n):**
    *   [PR #1403](https://github.com/netease-youdao/LobsterAI/pull/1403) adds missing translation keys for "delete," indicating ongoing efforts to polish the localized user interface.

### 7. User Feedback Summary
*   **Pain Points:** The primary dissatisfaction stems from the instability of version 4.1. Users are frustrated by the inability to upgrade without risking application availability. The conflict between default auto-configurations and custom LLM setups is a significant barrier to adoption for power users.
*   **Positive Signals:** Users appreciate granular control over Cowork plans (persistent modes) and the reliability of scheduled tasks, as evidenced by the detailed feature requests and fixes surrounding these areas.
*   **Security Awareness:** Users are actively identifying and reporting security flaws (SSE stream prediction), showing a mature and security-conscious community.

### 8. Backlog Watch
Maintainers should prioritize reviewing the following stale items, as they have been open since April 2026 without resolution:

1.  **[Issue #1400] v4.1 Startup Loop:** Immediate investigation required to prevent user churn and trust erosion.
2.  **[PR #1401] Security Fix (SSE IDs):** High priority for security compliance; should be merged soon to mitigate potential data leaks.
3.  **[PR #1402] Multi-select Attachment Bug:** Functional bug affecting core collaboration features.
4.  **[PR #1404] Scheduled Task UI Overhaul:** UX improvement that would enhance user satisfaction with the scheduling module.
5.  **[PR #1406] Notification Channel Fallback:** Minor but important fix for edge-case notification failures.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-06-24

## 1. Today's Overview
The Moltis project exhibits low daily activity, with no new issues opened or closed within the last 24 hours and no new releases published. Development momentum is minimal, characterized by a single merged pull request that was closed yesterday (June 23). The repository appears stable but quiet, with no immediate critical blockers or high-priority community discussions emerging today. Maintainer attention seems focused on finalizing specific feature additions rather than broad system updates.

## 2. Releases
No new releases were published in the last 24 hours. The project remains on its previous stable version. Users should check the main repository page for the latest tagged release if they require the most recent bug fixes or features.

## 3. Project Progress
*   **Merged PR #215:** `feat(tools): add send_image tool for channel image delivery`
    *   **Status:** Closed/Merged on 2026-06-23.
    *   **Impact:** This merge introduces the `send_image` tool, allowing skills to deliver local image files (PNG, JPEG, GIF, WebP) to channel targets like Telegram. It leverages the existing screenshot pipeline by returning a `data:` URI in the `screenshot` key, which the chat runner processes automatically. This enhances the multimedia capabilities of Moltis agents significantly.
    *   **Link:** [PR #215](https://github.com/moltis-org/moltis/pull/215)

## 4. Community Hot Topics
There are no currently active community hot topics due to zero new issue or PR activity in the last 24 hours. The most recent discussion revolves around the newly merged PR #215, which addresses the need for richer media interaction in chat-based AI agents. However, with zero comments and zero reactions recorded for this PR update, community engagement on this specific feature appears to be low or still settling post-merge.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The lack of new open issues suggests current stability is maintained. No critical severity items are pending resolution based on today's data.

## 6. Feature Requests & Roadmap Signals
No new feature requests were submitted today. The roadmap signal from PR #215 indicates a continued focus on expanding tooling capabilities for multi-channel support (specifically Telegram image delivery). Future updates may likely build upon this foundation to support more complex media types or additional messaging platforms.

## 7. User Feedback Summary
Real-time user feedback is unavailable for today due to a complete absence of new issues and comments. The previous development cycle focused on functional expansion (image sending) rather than addressing widespread user complaints, suggesting a period of feature development over reactive bug fixing.

## 8. Backlog Watch
With zero open issues and no stalled PRs identified in the last 24 hours, there are no immediate backlog items requiring urgent maintainer attention today. The repository is clear of pending administrative tasks related to issue triage.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-06-24
**Source:** agentscope-ai/CoPaw (GitHub)

## 1. Today's Overview
The CoPaw project exhibits high velocity with 38 issues and 50 pull requests updated in the last 24 hours, indicating active development and robust community engagement. A new patch release, `v1.1.12.post2`, was deployed to address critical navigation and file preview bugs, suggesting a focus on stabilizing the current stable branch. Significant effort is being directed toward mobile responsiveness across the Console UI, alongside ongoing integration work for the upcoming AgentScope 2.0 architecture. While the project is feature-rich, stability concerns regarding memory usage and cron job reliability remain top priorities for users.

## 2. Releases
**New Release: v1.1.12.post2**

*   **Key Changes:**
    *   **Fix:** Resolved an issue where navigating to a new chat failed after deleting the current session (#5376).
    *   **Feat:** Enhanced file preview functionality to support relative paths (#5377).
    *   **Fix:** Addressed partial bug fixes related to Q component interactions (truncated in summary, likely related to tool calling or UI state).
*   **Migration Notes:** No breaking changes reported for this patch release. Users on `v1.1.12.post1` should upgrade to ensure correct session management behavior.

## 3. Project Progress
**Merged/Closed PRs & Active Development:**
*   **Mobile UI Overhaul:** A series of PRs focused on mobile adaptation were merged or are under review, significantly improving the Console UX on narrow viewports.
    *   *PR #5366:* Mobile responsive layout for Agent Config page.
    *   *PR #5397:* Settings-Models page adapted for mobile view.
    *   *PR #5350:* Improved mobile responsiveness of Chat header (collapsing secondary actions).
    *   *PR #5452, #5444, #5451, #5449:* Continued mobile adaptation for Skill Pool, Sidebar/Header, Security, and Debug pages.
*   **AgentScope 2.0 Integration:**
    *   *PR #5443:* Restored ACP-backed TUI commands and inline approvals following the AgentScope 2.0 migration.
    *   *PR #5440:* Post-merge bug cleanup ("Ponytail cleanup"), fixing `CancelledError` swallowing issues in the coordinator.
*   **Testing Infrastructure:**
    *   *PR #5437 & #5433:* Added extensive frontend unit tests for the Inbox module and M1 Agent hooks/Settings, increasing code coverage without altering source logic.

## 4. Community Hot Topics
**Most Discussed Issues (by comment count):**

1.  **[Bug] Built-in skills re-enable after upgrade (#5262)**
    *   *Link:* [Issue #5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)
    *   *Analysis:* 12 comments indicate strong user frustration with configuration persistence. Users expect disabled settings to survive upgrades, pointing to a need for better config serialization or state management during updates.
2.  **[Bug] Agent-generated cron tasks fail to trigger (#5064)**
    *   *Link:* [Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)
    *   *Analysis:* 12 comments highlight critical reliability issues with automated scheduling. The inability to manually edit these tasks exacerbates the problem, suggesting a need for robust error recovery and editable task configurations.
3.  **[Question] Tauri/Windows Python path issues (#5317)**
    *   *Link:* [Issue #5317](https://github.com/agentscope-ai/QwenPaw/issues/5317)
    *   *Analysis:* 6 comments reflect ongoing challenges with the Tauri desktop wrapper's environment isolation, specifically regarding Conda and Python script execution.

## 5. Bugs & Stability
**Reported Critical/High Severity Issues:**

1.  **[Bug] Cron scheduler stops dispatching enabled jobs (#5398)**
    *   *Status:* Closed (Likely fixed in recent patches or addressed in #5064 discussion).
    *   *Impact:* Agents relying on scheduled memory updates or summaries stop functioning, requiring manual restarts.
2.  **[Bug] Custom OpenAI-compatible providers (e.g., OMLX) don't support function calling (#5345)**
    *   *Status:* Open.
    *   *Impact:* Users cannot leverage third-party LLM providers that claim OpenAI compatibility for agentic workflows, limiting ecosystem flexibility.
3.  **[Bug] Console crashes on sessions with large tool-use history (#5401)**
    *   *Status:* Open.
    *   *Impact:* Frontend renders `type: "data"` content blocks incorrectly, causing white screens. This affects users running complex, tool-heavy agents.
4.  **[Bug] Internal Server Error on startup via Python install (#5379)**
    *   *Status:* Open.
    *   *Impact:* Installation failure due to `get_remote_addr` transport issues, blocking new user onboarding.
5.  **[Bug] Memory Usage High on Startup (#5441, #5439)**
    *   *Status:* Open.
    *   *Impact:* Users report 1.4GB RAM usage immediately upon launch, raising concerns about efficiency and suitability for lower-end hardware.

## 6. Feature Requests & Roadmap Signals
*   **Memory Management Enhancements (#3995, #5316):** Users are requesting lifecycle management for memory files (auto-archiving old daily notes) and recency-aware ranking for search results. This suggests the current markdown-based memory system is reaching its scalability limits for power users.
*   **Mobile-First Experience (#4635, #5360):** Multiple requests emphasize the need for a truly mobile-friendly web console, beyond just responsive CSS. Users want full interaction parity on mobile devices.
*   **LaTeX/Math Rendering (#5453):** Request for KaTeX support in the desktop app to improve readability of mathematical outputs.
*   **Kimi Coding Plan Support (#5427):** Interest in supporting Anthropic-compatible endpoints for specific providers like Kimi, indicating a demand for broader model provider compatibility.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Configuration Fragility:** Users are annoyed that disabling built-in skills or changing settings does not persist across updates (#5262).
    *   **Performance:** High initial memory footprint (#5441) and UI lag when switching between agents (#5421) are frequent complaints.
    *   **Desktop Wrapper Instability:** The Tauri-based desktop app faces issues with Python environment detection (#5317) and internal server errors on startup (#5379).
*   **Satisfaction:**
    *   The rapid rollout of mobile UI improvements is positively received by users who value accessibility.
    *   The addition of unit tests (#5437, #5433) is appreciated by developers contributing to the project, signaling improved maintainability.

## 8. Backlog Watch
*   **[Bug] Subagent approval requests not pushed to external channels (#5295):** Critical for multi-agent workflows where human-in-the-loop approval is required via channels like QQ/DingTalk. Currently blocked.
*   **[Bug] Shell command parsing fails on special characters (#5373):** Affects the reliability of the `execute_shell_command` tool for complex scripts involving pipes or redirections.
*   **[Bug] Wrong agent identity for channel-built requests (#5456):** In `v2.0.0b1`, context building uses `agent_id: default` incorrectly, causing identity mismatches in multi-agent setups.
*   **[Enhancement] Stabilize core app before new features (#5360):** A meta-issue reflecting community sentiment that stability fixes (memory, crashes) should take precedence over new feature additions.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-06-24
**Source:** github.com/zeroclaw-labs/zeroclaw

## 1. Today's Overview
ZeroClaw exhibits high development velocity with 40 issues and 50 pull requests updated in the last 24 hours, indicating intense focus on security hardening and runtime stability. While no new releases were published, significant architectural improvements are underway, particularly regarding supply chain security (SLSA provenance) and plugin isolation. The community is actively engaging with critical bugs affecting multi-agent tool availability and Discord channel lifecycle management. Overall project health is robust, characterized by rigorous CI integration and proactive security patches.

## 2. Releases
*   **No new releases** were published today.
*   **Version Tracking:** PR #8234 indicates preparations for a bump to **v0.8.2** ahead of upcoming releases, focusing on dependency alignment and changelog updates.

## 3. Project Progress
Key advancements merged or advanced today include:
*   **Security & Supply Chain:** Significant progress on hardened CI pipelines. RFCs for supply chain signing (Issue #8177) and policy cleanup (Issue #8059) are driving improvements in `deny.toml` and audit configurations.
*   **Runtime Stability:**
    *   Fixed MCP tool result trimming logic to prevent underflow panics (PR #8218).
    *   Addressed daemon IPC `ENOBUFS` errors during memory pressure (PR #8122).
    *   Resolved cron job double-execution bugs (Issue #6037 closed).
*   **Channel Enhancements:**
    *   Telegram media groups now dispatch as single albums (PR #8024).
    *   QQ passive replies now properly thread via `refer_msg` (PR #8027).
    *   WeCom proactive and attachment messaging paths are stabilized (PR #8025).
*   **Plugin System:** RFCs for native dynamic-library plugins (Issue #7420) and SSRF protection for `zc_http_request` (Issue #5918 closed) show continued evolution of the plugin architecture.

## 4. Community Hot Topics
These discussions reflect high engagement and critical architectural debates:
*   **Native Dynamic-Library Plugin System (RFC):** [Issue #7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) (6 comments)
    *   *Analysis:* Community is pushing for a shift from WASM-only plugins to native dynamic libraries to alleviate "monolithic pain" and improve performance/flexibility.
*   **SSRF Protection for Plugins:** [Issue #5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) (2 comments)
    *   *Analysis:* Security researchers are prioritizing the mitigation of Server-Side Request Forgery risks in the `zc_http_request` host function, a critical trust boundary issue.
*   **Supply Chain Signing & SLSA:** [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) (3 comments)
    *   *Analysis:* Strong interest in hardware-backed PGP and SLSA provenance, signaling a demand for enterprise-grade security guarantees.
*   **In-App Upgrades:** [Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) (2 comments)
    *   *Analysis:* Users desire a seamless update experience directly from the web dashboard, reducing friction in maintenance.

## 5. Bugs & Stability
Critical stability issues addressed or reported today:
1.  **Discord Channel Lifecycle Bug:** Disabling an agent did not stop its bound Discord channel, posing a security/data loss risk. [Issue #8013](https://github.com/zeroclaw-labs/zeroclaw/issues/8013) (Status: In-Progress)
2.  **Tool Availability Mismatch:** System prompts incorrectly reported "No tools available" to reasoning models despite native/MCP tools being present. [Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) & [Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) (Status: Blocked/Accepted)
3.  **Telegram Token Leak:** Poll errors were logging Bot API token URL segments. [Issue #2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091) (Closed)
4.  **Cron Job Re-execution:** Cron jobs launched repeatedly while already running. [Issue #6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) (Closed)
5.  **Daemon IPC Exhaustion:** `ENOBUFS` errors causing accept loop failures. [PR #8122](https://github.com/zeroclaw-labs/zeroclaw/pull/8122) (Merged)
6.  **Context Window Trim Panic:** Underflow panic in tool-result saturation. [PR #8218](https://github.com/zeroclaw-labs/zeroclaw/pull/8218) (Open)

## 6. Feature Requests & Roadmap Signals
*   **Per-Agent Custom Environment Variables:** [Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) allows isolated env injection per agent, crucial for multi-tenant setups.
*   **Local Username/Password Auth:** [Issue #8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) proposes an IdP-less browser login option, expanding accessibility beyond OIDC/SSH.
*   **Streaming Cards for Chinese Platforms:** [Issue #7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531) & [Issue #8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) request streaming support for QQ/DingTalk/WeChat/Feishu to reduce user wait anxiety.
*   **Per-Agent Prompt Injection Mode:** [PR #8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235) enables granular control over prompt injection handling per agent.
*   **Automatic `yolo` Risk Profile in Quickstart:** [Issue #8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125) suggests auto-selecting high-risk profiles for beginners to avoid friction.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the disconnect between gateway-visible MCP tools and TUI-session visibility (Issue #8193). There is also dissatisfaction with manual update processes, leading to requests for in-app upgrades (Issue #8170).
*   **Use Cases:** Heavy usage of Chinese messaging platforms (QQ, WeCom, DingTalk) drives demand for localized features like streaming cards and proactive messaging. Multi-agent setups require stricter isolation of environment variables and prompt injection modes.
*   **Satisfaction:** The community appreciates the rapid closure of security vulnerabilities (e.g., SSRF, env var leaks) and the transparent RFC process for architectural changes.

## 8. Backlog Watch
*   **System Prompt Tool-Availability Sync:** [Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) is marked **Blocked**. This is a high-priority bug affecting the core agent loop consistency across all entry points (WebSocket, Gateway, TUI).
*   **Native Dynamic-Library Plugin System:** [Issue #7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) is an RFC requiring maintainers' review. Its acceptance will define the future of the plugin ecosystem.
*   **Supply Chain Signing RFC:** [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) needs maintainer review to establish the security baseline for v0.9.0+.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*