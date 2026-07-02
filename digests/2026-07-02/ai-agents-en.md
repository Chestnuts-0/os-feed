# OpenClaw Ecosystem Digest 2026-07-02

> Issues: 275 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-02 02:12 UTC

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

# OpenClaw Project Digest: 2026-07-02

## 1. Today's Overview
OpenClaw is experiencing exceptionally high velocity on July 2, 2026, with **275 issues** and **500 pull requests** updated in the last 24 hours. The project is in a critical stabilization phase, characterized by a surge in regression reports following the **v2026.6.11** release, particularly concerning session state integrity, authentication overrides, and tool output handling. While no new official releases were published today, the maintainers are actively merging fixes for high-severity bugs, indicating a reactive but robust engineering response to recent instability. The community engagement is intense, with numerous "diamond lobster" rated issues requiring immediate product decisions.

## 2. Releases
*   **New Releases:** None.
*   **Context:** The recent **v2026.6.11** update (published around June 30-July 1) is currently the focal point of stability discussions. Several critical regressions reported today (e.g., Issue #98528, Issue #98740, Issue #98565) are directly attributed to this version, suggesting the current sprint is dedicated to patching this release rather than shipping new features.

## 3. Project Progress
Significant progress was made in merging fixes and advancing infrastructure stability:
*   **Security & Resource Limits:** Multiple PRs addressed Out-of-Memory (OOM) risks from unbounded HTTP responses.
    *   [#98836](https://github.com/openclaw/openclaw/pull/98836): Bounded HuggingFace model discovery JSON read.
    *   [#98839](https://github.com/openclaw/openclaw/pull/98839): Bounded Chrome diagnostics JSON read.
    *   [#98844](https://github.com/openclaw/openclaw/pull/98844): Bounded GitHub API release tag read.
    *   [#98837](https://github.com/openclaw/openclaw/pull/98837): Bounded Feishu streaming card JSON read.
    *   [#98676](https://github.com/openclaw/openclaw/pull/98676): Bounded approvals file read size.
    *   [#98829](https://github.com/openclaw/openclaw/pull/98829): Bounded SSH command output buffering at 16 MiB.
*   **Plugin & Channel Fixes:**
    *   [#98819](https://github.com/openclaw/openclaw/pull/98819): Fixed Mattermost plugin externalization issue causing 401 errors.
    *   [#98688](https://github.com/openclaw/openclaw/pull/98688): Fixed Fal AI routing for specific models.
    *   [#98840](https://github.com/openclaw/openclaw/pull/98840): Fixed Voyage batch output stream closure on parse errors.
*   **Documentation & Mobile:**
    *   [#98843](https://github.com/openclaw/openclaw/pull/98843): Updated mobile app messaging to reflect stable release status.

## 4. Community Hot Topics
The most discussed issues revolve around **session reliability**, **authentication consistency**, and **memory management**.

*   **Embedded Runner & Anthropic Thinking Blocks:**
    *   **[Issue #92201](https://github.com/openclaw/openclaw/issues/92201)** (17 comments): Streamed thinking signatures becoming invalid on replay, causing recovery wrappers to fail. This impacts the core reliability of long-running agent sessions.
    *   **[Issue #94228](https://github.com/openclaw/openclaw/issues/94228)** (10 comments): Native Anthropic path bricks tool-use threads due to invalid signatures in historical thinking blocks.
*   **Memory & State Management:**
    *   **[Issue #7707](https://github.com/openclaw/openclaw/issues/7707)** (13 comments): Feature request for "Memory Trust Tagging" to prevent memory poisoning from untrusted sources.
    *   **[Issue #45608](https://github.com/openclaw/openclaw/issues/45608)** (11 comments): Request for pre-reset agentic memory flush to preserve context during `/new` or daily resets.
    *   **[Issue #40418](https://github.com/openclaw/openclaw/issues/40418)** (8 comments): Automated session memory preservation and synthesis across resets.
*   **Session Crashes & Regressions:**
    *   **[Issue #98672](https://github.com/openclaw/openclaw/issues/98672)** (6 comments): Reports of sessions breaking constantly after upgrading to v2026.6.11.
    *   **[Issue #98528](https://github.com/openclaw/openclaw/issues/98528)** (5 comments): Tool outputs returning empty after the first call per turn (Regression).

## 5. Bugs & Stability
Stability is currently compromised by several high-severity regressions linked to recent updates and architectural changes.

*   **Critical Regressions (v2026.6.11):**
    *   **[Issue #98528](https://github.com/openclaw/openclaw/issues/98528)**: Tool outputs (exec, web_fetch, web_search) return empty after the first call per turn.
    *   **[Issue #98740](https://github.com/openclaw/openclaw/issues/98740)**: Mattermost native slash commands return 401 Unauthorized after plugin externalization. *Fix PR: [#98819](https://github.com/openclaw/openclaw/pull/98819)*.
    *   **[Issue #98565](https://github.com/openclaw/openclaw/issues/98565)**: Container image upgrades skip necessary `openclaw upgrade` migrations, leading to state inconsistencies.
    *   **[Issue #98416](https://github.com/openclaw/openclaw/issues/98416)**: Missing reentrancy guard in reply session initialization causing conflicts.
*   **Authentication & Provider Issues:**
    *   **[Issue #38327](https://github.com/openclaw/openclaw/issues/38327)**: Google Vertex/Gemini 3.1 Pro preview causes "Cannot convert undefined or null to object" crash.
    *   **[Issue #85126](https://github.com/openclaw/openclaw/issues/85126)**: Control UI auto-selects wrong `authProfileOverride` (DeepSeek instead of Minimax).
    *   **[Issue #98244](https://github.com/openclaw/openclaw/issues/98244)**: OpenAI Responses API streaming hits 120-second timeouts despite success. *Status: Closed/Fixed*.
*   **Session & State Bugs:**
    *   **[Issue #90178](https://github.com/openclaw/openclaw/issues/90178)**: Subagent "give-up" announcements cause permanent deadlocks with parent sessions.
    *   **[Issue #98239](https://github.com/openclaw/openclaw/issues/98239)**: `/pair qr` command incorrectly changes `gateway.bind`, breaking Tailscale Serve.
    *   **[Issue #85030](https://github.com/openclaw/openclaw/issues/85030)**: MCP tools not injected into subagent sessions despite configuration.

## 6. Feature Requests & Roadmap Signals
Users are increasingly demanding better **state persistence**, **security auditing**, and **resource management**.

*   **Memory Persistence:** Strong signal for **#45608** (Pre-reset memory flush) and **#40418** (Automated memory synthesis). Users want continuity across session resets, not just within them.
*   **Security & Auditing:** **#7707** (Memory Trust Tagging) and **#20935** (Audit log for memory changes) indicate a growing need for security transparency and defense against memory poisoning.
*   **Observability:** **#70309** (MCP connectivity status panel) shows demand for better UI visibility into external service health.
*   **Advanced Session Management:** **#90916** (Topic-session families) suggests a desire for multi-threaded conversation management within a single assistant persona.
*   **Performance:** **#80131** (Per-request auth overhead) highlights pain points with slow Time-To-First-Token (TTFT) due to authentication checks, suggesting a roadmap item for caching or optimizing auth flows.

## 7. User Feedback Summary
*   **Frustration with Instability:** Multiple users report sessions "breaking constantly" or hanging after updates, specifically citing v2026.6.11. There is a perception that upgrades are risky without proper migration guards (Issue #85027, #98565).
*   **Tool Reliability Concerns:** Users are encountering intermittent failures in tool outputs (empty strings, image placeholders instead of text), which undermines trust in the agent's ability to perform complex tasks.
*   **Desire for Continuity:** The repeated requests for memory preservation across resets indicate that users treat the agent as a persistent entity, and the current ephemeral nature of sessions is a significant friction point.
*   **Complexity of Setup:** Issues with OAuth providers, auth profile overrides, and plugin externalizations suggest that the growing complexity of integrations (Mattermost, Discord, Slack, etc.) is leading to configuration drift and broken setups.

## 8. Backlog Watch
Maintainers need to prioritize the following long-standing or high-impact items:

*   **[Issue #92201](https://github.com/openclaw/openclaw/issues/92201)**: Anthropic thinking block signature validation. High severity, affects core functionality.
*   **[Issue #7707](https://github.com/openclaw/openclaw/issues/7707)**: Memory Trust Tagging. Security-critical feature request.
*   **[Issue #45608](https://github.com/openclaw/openclaw/issues/45608)**: Pre-reset memory flush. High user demand for state continuity.
*   **[Issue #90178](https://github.com/openclaw/openclaw/issues/90178)**: Subagent deadlock on failure. Architectural bug causing permanent session locks.
*   **[Issue #80131](https://github.com/openclaw/openclaw/issues/80131)**: Auth performance bottleneck. Impact on user experience (slow responses).
*   **[Issue #98416](https://github.com/openclaw/openclaw/issues/98416)**: Reentrancy guard missing in v2026.6.11 dist. Critical stability bug.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparative Report: Personal AI Agent Ecosystem
**Date:** July 2, 2026
**Subject:** Analysis of OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, CoPaw, ZeptoClaw, ZeroClaw

## 1. Ecosystem Overview
The 2026 open-source personal AI agent landscape is characterized by a shift from experimental prototypes to production-grade stability, with a heavy emphasis on security hardening and multi-channel integration. Projects are converging on complex session management, memory persistence, and robust tool-execution sandboxes, yet fragmentation remains high due to divergent architectural choices regarding gateway protocols and deployment models. While some players like OpenClaw and Hermes Agent dominate in raw velocity and feature breadth, niche projects like NullClaw and ZeptoClaw are stagnating, indicating a market consolidation phase where only resilient, well-maintained ecosystems survive.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 275 | 500 | Stabilizing (Post-v2026.6.11) | 8.5/10 |
| **Hermes Agent** | 50 | 50 | Active (Post-v0.18.0) | 8.0/10 |
| **IronClaw** | 24 | 50 | Pre-release (Reborn Arch) | 7.5/10 |
| **ZeroClaw** | 50 | 50 | Stabilizing (v0.8.3) | 7.0/10 |
| **CoPaw** | 22 | 50 | Pre-release (v2.0.0) | 7.0/10 |
| **NanoBot** | 8 | 47 | Stable Maintenance | 6.5/10 |
| **NanoClaw** | 6 | 12 | Stable Maintenance | 6.0/10 |
| **LobsterAI** | 4 | 24 | Stable Maintenance | 7.5/10 |
| **PicoClaw** | 2 | 11 | Nightly (Unstable) | 5.0/10 |
| **NullClaw** | 1 | 0 | Stagnant | 3.0/10 |
| **ZeptoClaw** | 0 | 0 | Inactive | 2.0/10 |

*\*Health Score derived from velocity, issue resolution rate, and community engagement density.*

## 3. OpenClaw's Position
OpenClaw operates as the ecosystem heavyweight, exhibiting velocity an order of magnitude higher than its nearest competitors (275 issues/500 PRs). Its primary advantage lies in its comprehensive tooling ecosystem and aggressive security remediation, specifically regarding memory bounds and OOM prevention. However, this scale introduces significant fragility; the recent v2026.6.11 release has triggered a wave of regressions in session state and authentication, suggesting that its "broad integration" strategy is currently outpacing its "deep stability" engineering. Compared to peers, OpenClaw’s community is larger but more fractured by configuration drift and complex plugin dependencies.

## 4. Shared Technical Focus Areas
*   **Session & Memory Continuity:** Nearly all active projects (OpenClaw, NanoBot, Hermes, ZeroClaw) are addressing the ephemeral nature of agent sessions. Users demand "pre-reset memory flushes" and "trust-tagged memory" to prevent context loss and poisoning across device resets.
*   **Security Hardening & Sandboxing:** A universal priority is securing tool execution. OpenClaw, NanoClaw, and ZeroClaw are actively patching symlink escapes, zip-bomb attacks, and regex bypasses in command filtering.
*   **Cross-Platform Channel Parity:** Developers are struggling with inconsistent behavior across messaging platforms. Specific pain points include Telegram voice handling (Hermes, CoPaw), Discord button routing (NanoClaw), and Slack context loading (NanoClaw, IronClaw).
*   **Authentication Abstraction:** Projects are moving away from simple API keys toward OAuth and profile overrides. NanoBot (Anthropic OAuth), OpenClaw (Auth Profile Overrides), and ZeroClaw (Env Var Fallbacks) are all refining how credentials are managed and rotated.

## 5. Differentiation Analysis
*   **Architectural Philosophy:**
    *   **OpenClaw/Hermes:** Monolithic, feature-dense gateways with extensive native integrations (Mattermost, Feishu, Discord). Best for users wanting an "all-in-one" solution.
    *   **NanoBot/CoPaw:** Modular, plugin-centric architectures emphasizing subagent orchestration and strict memory lifecycle control. Better for developers building custom agent topologies.
    *   **IronClaw:** Focuses on a "Reborn" backend with WASM-based tool isolation and multi-tenant security, targeting enterprise/self-hosted deployments.
    *   **ZeroClaw:** Leverages Rust for performance and OCI-compliant plugin storage, appealing to users prioritizing binary size and supply-chain security.
*   **Target Users:** OpenClaw and Hermes serve power users and enterprises requiring broad channel support. NanoBot and CoPaw cater to developers and researchers building multi-agent systems. LobsterAI targets non-technical users with strong UI/UX focus (Cowork module).

## 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iteration (High Velocity, High Risk):** OpenClaw and Hermes Agent are in intense post-release stabilization phases. They are absorbing massive community feedback but suffering from regression fatigue.
*   **Tier 2: Steady Development (Balanced):** NanoBot, IronClaw, ZeroClaw, and CoPaw show healthy PR merge rates and focused bug fixing. They are maturing their core architectures without the noise of Tier 1.
*   **Tier 3: Niche/Stabilizing:** LobsterAI has strong community engagement but lower technical churn, focusing on UI polish. PicoClaw is active but plagued by mobile-specific instability.
*   **Tier 4: Declining:** NullClaw and ZeptoClaw show negligible activity, indicating either successful completion of their scope or abandonment.

## 7. Trend Signals
*   **From "Chat" to "Agentic Workflow":** The community is moving beyond simple Q&A to complex, multi-turn automations. Features like "Goal Mode" (ZeroClaw), "Cron Injection" (Hermes), and "Subagent Result Aggregation" (NanoBot) signal a demand for background, autonomous task execution.
*   **Security as a First-Class Citizen:** The prevalence of "Memory Trust Tagging" and "WASM Credential Isolation" indicates that users no longer view security as an afterthought but as a core requirement for trusting AI with personal data.
*   **The "Fragmentation" Problem:** The sheer number of channel-specific bugs (Telegram, Discord, Slack, Feishu) suggests that the industry is approaching a saturation point of integration complexity. Future winners will likely be those who abstract channel differences into a unified protocol rather than maintaining bespoke adapters for every platform.
*   **Value for Developers:** For AI agent developers, the trend is clear: prioritize **state persistence** and **error visibility**. Users are frustrated by "silent failures" and "deadlocks" in subagent loops. Building agents that fail loudly and recover gracefully is becoming a key differentiator.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-07-02
**Source:** github.com/HKUDS/nanobot

## 1. Today's Overview
NanoBot is experiencing high-velocity development activity with 47 Pull Requests updated in the last 24 hours and 8 issues addressed. The project is currently in a critical phase of stabilizing core agent execution, memory management, and security protocols rather than releasing new major features. There are no new releases deployed today, suggesting the team is focused on code review and merging foundational improvements. The volume of PRs indicates a strong contributor base, particularly around testing infrastructure and agent safety mechanisms.

## 2. Releases
*   **No new releases.** The repository has zero new published versions in the last 24 hours. Development efforts are currently concentrated on merging pull requests and resolving open issues.

## 3. Project Progress
Significant progress was made today in **Testing Infrastructure**, **Memory Management**, and **Agent Safety**:

*   **Testing & Harnesses:** Multiple PRs (#4631, #4628, #4630) introduced scripted agent runner and memory lifecycle harnesses. These additions allow for rigorous assertion of provider transcripts and tool-loop behaviors, significantly improving regression testing capabilities.
*   **Memory Consolidation:** PRs #4621, #4626, and #4627 advanced the memory subsystem. Key changes include gated archive facts with provenance, opt-in eager consolidation, and preservation of delivery context during consolidation to prevent data loss.
*   **Execution Security:** PR #4629 blocked relative symlink workspace escapes, closing a potential security vector where restricted exec commands could bypass sandbox boundaries.
*   **Subagent & Cron Enhancements:** PRs #4623, #4624, and #4622 improved subagent model overrides, aggregated result modes, and cron job model presets, respectively, enhancing flexibility for complex agent workflows.
*   **WebUI Triggers:** PR #4591 added session-bound local triggers, allowing for more granular control over agent actions within specific chat sessions.

## 4. Community Hot Topics
The following topics generated the most discussion or represent critical community needs:

*   **[Feature] Anthropic OAuth Support (#4632, #4604):**
    *   *Link:* [PR #4632](https://github.com/HKUDS/nanobot/pull/4632), [Issue #4604](https://github.com/HKUDS/nanobot/issues/4604)
    *   *Analysis:* Users are increasingly seeking alternatives to API keys for Anthropic integration, specifically leveraging Claude Code tokens. This reflects a demand for seamless subscription-based authentication flows.
*   **[Bug] Gateway Crash via fsync() (#4615):**
    *   *Link:* [Issue #4615](https://github.com/HKUDS/nanobot/issues/4615)
    *   *Analysis:* A critical startup crash related to `CronService` persistence is causing friction for users relying on scheduled tasks. The specificity of the error (parent directory `fsync`) suggests a niche OS/kernel compatibility issue that requires immediate attention.
*   **[Security] MCP Deny-All Bypass (#4434):**
    *   *Link:* [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434)
    *   *Analysis:* Although closed, this highlights ongoing concerns about Model Context Protocol (MCP) security. Users are vigilant about ensuring that "deny-all" configurations actually restrict access, indicating a need for robust security auditing in tool integrations.

## 5. Bugs & Stability
Several bugs and stability issues were reported and addressed today:

1.  **Gateway Startup Crash (Critical):**
    *   *Issue:* `nanobot gateway` crashes when `CronService` calls `fsync()` on the parent directory of `jobs.json`.
    *   *ID:* [#4615](https://github.com/HKUDS/nanobot/issues/4615)
    *   *Status:* Closed. Likely addressed by concurrent testing/fix efforts in the Cron service PRs.
2.  **Telegram Message Truncation (High):**
    *   *Issue:* Long markdown messages sent via Telegram are split incorrectly, with prior trunks failing to render.
    *   *ID:* [#4637](https://github.com/HKUDS/nanobot/issues/4637)
    *   *Status:* Open. Impacts user experience on mobile platforms.
3.  **edit_file Target Disambiguation (Medium):**
    *   *Issue:* The `edit_file` tool modifies the wrong occurrence of text despite selecting the correct `old_text`, dominating failure modes in benchmarks.
    *   *ID:* [#4634](https://github.com/HKUDS/nanobot/issues/4634)
    *   *Status:* Open. Mitigated partially by PR #4635 which adds line guards, but further refinement is needed.
4.  **OpenAI-Compatible API Auth Gap (Medium):**
    *   *Issue:* The API server lacked authentication requirements for wildcard bindings, unlike the WebSocket gateway.
    *   *ID:* [#4490](https://github.com/HKUDS/nanobot/issues/4490)
    *   *Status:* Closed. Security parity achieved.

## 6. Feature Requests & Roadmap Signals
*   **Anthropic OAuth Integration:** The addition of `anthropic_oauth` provider (#4632) signals a roadmap shift towards supporting token-based authentication for major LLM providers, reducing friction for users without console API keys.
*   **Eager Memory Consolidation:** The opt-in feature for eager consolidation (#4626) suggests a future focus on optimizing context window usage and memory storage efficiency, potentially leading to faster response times for long-running sessions.
*   **Subagent Result Aggregation:** The new `aggregated` result mode (#4624) indicates a move towards handling complex, multi-step subagent tasks more gracefully by buffering results until a session task set drains.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by Telegram message formatting issues (#4637) and the instability of the Cron service during startup (#4615). The lack of authentication for the public-facing API server was a significant security concern that has now been resolved (#4490).
*   **Use Cases:** There is a strong emphasis on multi-agent workflows, evidenced by the detailed work on subagent spawning, model overriding, and result aggregation. Users also value fine-grained control over memory archival and session triggers.
*   **Satisfaction:** The rapid closure of security issues and the introduction of comprehensive testing harnesses suggest that the maintainers are responsive to community feedback regarding stability and security.

## 8. Backlog Watch
*   **Telegram Long Message Rendering (#4637):** This issue remains open and affects a popular channel. It should be prioritized to improve cross-platform consistency.
*   **edit_file Precision (#4634):** While PR #4635 adds guards, the underlying disambiguation logic may need further tuning to eliminate "wrong-occurrence" failures completely.
*   **Feishu Session Splitting (#4619):** An enhancement request for better visual separation of new sessions in Feishu. While low severity, it improves UX for Chinese-language users.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** July 2, 2026
**Source:** NousResearch/hermes-agent

## 1. Today's Overview
The Hermes Agent project exhibits extremely high velocity following the release of v0.18.0 ("The Judgment Release"), with 50 issues and 50 PRs updated in the last 24 hours. Activity is dominated by critical stability fixes for Windows Desktop, terminal toolsets, and platform adapters (QQBot, Telegram), alongside significant security patches regarding shell execution patterns. The influx of 370+ contributors suggests a mature, community-driven development cycle, though the volume of new bugs indicates the v0.18.0 release introduced several regressions requiring immediate attention.

## 2. Releases
**v0.18.0 (v2026.7.1)** released on July 1, 2026.
*   **Scope:** ~1,720 commits, 998 merged PRs, 251k lines changed.
*   **Key Highlights:** Introduced "True Autonomy" features, enhanced cron job integration, and significant improvements to the Gateway architecture.
*   **Impact:** While feature-rich, the release has triggered a wave of bug reports related to session state management, Windows compatibility, and toolset loading, necessitating rapid patching.

## 3. Project Progress
Several critical paths have been stabilized or improved today:
*   **Windows Terminal & Desktop:** Multiple PRs address Windows-specific failures, including disabling MSYS path conversion (`#56734`), fixing Git Bash detection for Scoop installations (`#56738`), and resolving blank screen/renderer crashes (`#56726`).
*   **Toolset Integrity:** Fixes ensure the `terminal` toolset is correctly restored in API server and ACP composite modes (`#56735`).
*   **Session Management:** Implementation of filters to hide empty/untitled sessions in pickers (`#56744`) and fixes for session deletion leaving phantom rows (`#56733`).
*   **Voice/Audio Handling:** Telegram voice messages are now processed correctly even when the agent is in a "clarify" waiting state (`#56743`).

## 4. Community Hot Topics
*   **[Feature] True Autonomy - Cron Injection into Live Gateway:** (Issue #5712, 11 comments) High engagement on integrating background cron results into active chat sessions, reflecting a desire for seamless human-agent collaboration.
*   **[Security] Dangerous Command Bypass (RCE):** (Issue #36846, 3 comments *but* marked P0 Security) Critical discussion on regex-based command filtering being bypassable via shell escapes. This highlights a major security concern in the current tool approval mechanism.
*   **[Bug] Photon iMessage Death Spiral:** (Issue #49858, 8 comments) Users reporting silent reconnection failures when the Node.js sidecar crashes, indicating fragility in the iMessage adapter's error handling.

## 5. Bugs & Stability
*   **P0/P1 Severity:**
    *   **Security RCE:** Regex denylist bypass in `tools/approval.py` (Issue #36846). *Status: Closed/Fixed.*
    *   **Windows Desktop Crash:** Renderer crashes and blank screens on startup (Issue #56726). *Fix: PR #56738, #56734.*
    *   **Terminal Toolset Loss:** Silent failure of terminal tools in API/ACP modes (Issue #56732). *Fix: PR #56735.*
*   **P2 Severity:**
    *   **Session State:** Deletion leaves visible empty placeholders (Issue #56733). *Fix: PR #56744.*
    *   **Telegram Voice Ignored:** Voice messages dropped during "clarify" wait states (Issue #56739). *Fix: PR #56743.*
    *   **Kimi Provider Bug:** Thinking parameters incorrectly blocked for Kimi models (Issue #56727).
    *   **Stale Runtime:** Non-default profiles keeping old code after updates (Issue #56717).

## 6. Feature Requests & Roadmap Signals
*   **Cron-Wide Model Override:** PR #53401 allows pinning specific models/providers for all cron jobs, signaling a need for cost control and determinism in autonomous tasks.
*   **Per-Turn Model Routing:** Issue #56655 requests task-aware model selection (e.g., coding vs. general chat), indicating users want granular control over model capabilities per interaction step.
*   **Desktop Live Sync:** Issue #43625 requests real-time message synchronization between Telegram/Discord and the Desktop app, improving cross-platform usability.
*   **Mattermost Enhancements:** PRs #54230 and #54193 introduce "live-thinking" bubbles and Slack-parity thread following, expanding mature feature sets for enterprise communication platforms.

## 7. User Feedback Summary
*   **Pain Points:** Windows users are experiencing significant friction with the Desktop app (crashes, path issues, Git detection). Telegram users are frustrated by voice message handling gaps. General users report excessive token usage for simple queries (Issue #13983).
*   **Satisfaction:** The community appreciates the rapid response to critical bugs (RCE, Windows crashes). Features like Mattermost live-thinking and Cron autonomy are well-received as value-adds for power users.
*   **Trust:** Security concerns regarding command filtering and SSL verification (Issue #28260) require transparent communication and robust fixes to maintain trust in autonomous agent operations.

## 8. Backlog Watch
*   **LanceDB on Windows:** Issue #26141 (Open, P3) – Retrieval fails with OS error 123. Despite being older, it affects a core memory feature on a major platform.
*   **Discord VC TTS Silence:** Issue #16693 (Open, P2) – Audio plays locally but users hear nothing. Indicates a potential WebRTC or Discord API integration issue.
*   **Headless MCP OAuth Hang:** Issue #56673 (Open, P2) – No-refresh-token credentials cause infinite hangs in headless gateways. Critical for server-side deployments.
*   **Custom CA Certificates:** Issue #48440 (Closed, but relevant) – Now resolved via SSL CA cert field, but highlights ongoing need for corporate proxy support.

---
*Links refer to the NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-07-02
**Source:** GitHub Data Analysis

### 1. Today's Overview
The PicoClaw project remains highly active with significant contributor engagement, evidenced by 11 pull requests updated and 2 issues addressed in the last 24 hours. Development focus is split between critical stability fixes (Android crashes, security patches) and frontend dependency maintenance via Dependabot. A new nightly build (`v0.3.1-nightly.20260702`) has been released, indicating ongoing integration activity, though users are cautioned about potential instability. The high volume of "stale" labeled PRs suggests a bottleneck in maintainer review cycles despite strong community contribution.

### 2. Releases
*   **Nightly Build:** `v0.3.1-nightly.20260702.2cf030d2`
    *   **Status:** Automated nightly build.
    *   **Warning:** Marked as potentially unstable. Use with caution.
    *   **Changelog:** [View Diff](https://github.com/sipeed/picoclaw/compare/v0.3.1...main)

### 3. Project Progress
*   **Merged/Closed PRs:**
    *   **#3116 [CLOSED] fix(pico):** Completed the `turn.done` lifecycle signaling for Pico devices, fixing gaps in request ID preservation for queued steering/follow-up messages.
    *   **#2975 [CLOSED] feat(telegram):** Implemented logic to treat replies to bot messages as mentions in Telegram group chats, enhancing usability for `mention_only` configurations.
*   **Advanced Features:**
    *   **#3200 [OPEN] feat(models):** Introduction of a configurable default fallback chain for models in the Web UI, allowing users to define persistent fallback hierarchies via the backend API.
    *   **#3165 [OPEN] fix(openai_compat):** Work in progress to recover and structure Volcengine Doubao Seed XML tool calls from OpenAI-compatible responses.

### 4. Community Hot Topics
*   **Most Active/Impactful PRs:**
    *   **#3165 [OPEN] fix(openai_compat): recover Seed XML tool calls**
        *   *Link:* [PR #3165](https://github.com/sipeed/picoclaw/pull/3165)
        *   *Analysis:* High interest in supporting complex provider-specific XML structures (Volcengine) within standard OpenAI compatibility layers.
    *   **#3160 [OPEN] fix(auth): reject cross-site launcher setup requests**
        *   *Link:* [PR #3160](https://github.com/sipeed/picoclaw/pull/3160)
        *   *Analysis:* Security-focused improvement addressing CSRF-like vulnerabilities during initial authentication setup.
*   **Issue Activity:**
    *   **#3201 [OPEN] Feature: Support streaming output for QQ channel**
        *   *Link:* [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201)
        *   *Analysis:* Users are requesting parity between Telegram/Pico WebSocket channels and QQ regarding real-time streaming, highlighting a gap in the QQ integration.

### 5. Bugs & Stability
*   **Critical Bug:**
    *   **#3164 [OPEN] BUG: Process hooks crash gateway on Android/Termux**
        *   *Link:* [Issue #3164](https://github.com/sipeed/picoclaw/issues/3164)
        *   *Severity:* Critical (Service Crash).
        *   *Details:* JSON-RPC over stdio process hooks cause the gateway to die within 2 seconds on Android/Termux environments. Even minimal hooks trigger this.
        *   *Fix Status:* No associated PR identified in current data.
*   **Security/Stability Fixes in PRs:**
    *   **#3161 [OPEN] fix(exec): keep deny patterns active for custom allow rules**
        *   *Link:* [PR #3161](https://github.com/sipeed/picoclaw/pull/3161)
        *   *Severity:* High (Security Bypass).
        *   *Details:* Prevents commands matching custom allow rules from bypassing global deny patterns (e.g., preventing `jq` from reading env vars).
    *   **#3160 [OPEN] fix(auth): reject cross-site launcher setup requests**
        *   *Link:* [PR #3160](https://github.com/sipeed/picoclaw/pull/3160)
        *   *Severity:* Medium-High (Security).
        *   *Details:* Adds browser provenance checks to prevent unauthorized password store mutations.

### 6. Feature Requests & Roadmap Signals
*   **QQ Channel Streaming:** Issue #3201 signals a clear demand for feature parity across messaging platforms, specifically wanting token-by-token streaming for QQ.
*   **Model Fallback Chains:** PR #3200 indicates a roadmap shift toward more granular control over model selection and fallback logic via the UI, moving beyond simple static configuration.
*   **Telegram UX Improvement:** The merge of PR #2975 suggests a roadmap direction of improving conversational ergonomics (reply-as-mention) to reduce friction for users.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Android/Termux Instability:** Users on mobile Linux environments are experiencing hard crashes with process hooks, severely limiting portability and edge-case usage.
    *   **QQ Integration Gaps:** Lack of streaming support creates a suboptimal experience compared to other supported channels.
*   **Satisfaction Drivers:**
    *   **Security Hardening:** Users appreciate proactive fixes for execution sandboxing (#3161) and authentication CSRF protections (#3160).
    *   **Developer Experience:** Improvements in routing normalization (#3202) suggest a focus on cleaner API contracts for developers building integrations.

### 8. Backlog Watch
*   **High Priority Stale PRs:**
    *   **#3202 [OPEN] fix(routing):** Strip leading/trailing underscores in ID normalization. *(Link)*
    *   **#3165 [OPEN] fix(openai_compat):** Recover Seed XML tool calls. *(Link)*
    *   **#3161 [OPEN] fix(exec):** Keep deny patterns active. *(Link)*
    *   **#3160 [OPEN] fix(auth):** Reject cross-site launcher setup. *(Link)*
    *   **#3158 [OPEN] test:** Cover sandbox fs Windows path handling. *(Link)*
    *   **#3104/3103/3100:** Dependency bumps (shadcn, typescript-eslint, vite-plugin-react). *(Links)*
*   **Analysis:** There is a cluster of 5+ security and core stability PRs labeled `[stale]` awaiting review. Maintainer attention is required to merge these critical fixes. Additionally, the unresolved Android crash bug (#3164) needs investigation as it affects a growing segment of mobile/embedded users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-07-02
**Source:** github.com/qwibitai/nanoclaw

### 1. Today's Overview
NanoClaw experienced high development velocity yesterday, with 12 Pull Requests updated and 6 Issues opened within the last 24 hours. Despite this activity, there were no new releases published, indicating a focus on code integration and bug triage rather than deployment. The project shows signs of stability improvements through recent merges addressing memory leaks and configuration errors, though critical infrastructure bugs regarding network binding and process crashes remain open. Developer engagement is strong, with multiple contributors actively refining channel integrations and operational utilities.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
The following significant changes were merged or closed today, advancing stability and feature parity:

*   **WhatsApp Memory Leak Fixed (#2905):** Addressed a critical resource leak where reconnection attempts orphaned WebSocket sockets and timers, improving long-term host stability for WhatsApp users. [Link](https://github.com/nanocoai/nanoclaw/pull/2905)
*   **Pre-flight Contribution Checks (#1716):** Automated validation for PR submissions was merged, streamlining the contributor workflow by checking SKILL.md formats and code quality before review. [Link](https://github.com/nanocoai/nanoclaw/pull/1716)
*   **Custom API Endpoint Support (#1257):** Enabled support for third-party Anthropic-compatible APIs mounted at sub-paths, expanding flexibility for enterprise or private LLM deployments. [Link](https://github.com/nanocoai/nanoclaw/pull/1257)
*   **Automated State Backups (#1693):** Introduced a utility skill for backing up core state data (messages, sessions) to Git, addressing a major gap in self-hosted disaster recovery. [Link](https://github.com/nanocoai/nanoclaw/pull/1693)
*   **Scheduling Retry Logic (#2677):** Enhanced reliability of scheduled tasks by adding diagnostic retries for pre-task scripts. [Link](https://github.com/nanocoai/nanoclaw/pull/2677)
*   **Semantic Search Skill (#1597):** Added QMD-based semantic conversation search capabilities, allowing users to query past interactions more effectively. [Link](https://github.com/nanocoai/nanoclaw/pull/1597)

### 4. Community Hot Topics
The most discussed issues revolve around configuration rigidity and network connectivity in Docker environments, reflecting the challenges of self-hosted deployments.

*   **OneCLI Gateway Binding Mismatch (#2903):** Users report that default Docker setups fail because the gateway binds to `127.0.0.1` while clients expect the bridge IP. This blocks agent responsiveness entirely. [Link](https://github.com/nanocoai/nanoclaw/issues/2903)
*   **Silent Message Swallowing (#2902):** A UX issue where messages accepted by channels (e.g., Telegram) but failing to spawn agents are dropped without user notification. [Link](https://github.com/nanocoai/nanoclaw/issues/2902)
*   **Webhook Port Config Ignored (#2901):** The `.env` file setting for `WEBHOOK_PORT` is silently ignored, forcing users to set environment variables externally, contradicting documentation. [Link](https://github.com/nanocoai/nanoclaw/issues/2901)
*   **Discord Button Routing Bug (#2899):** A fix in progress for Discord DM approvals where all button taps routed to "reject" due to parsing errors in `custom_id`. [Link](https://github.com/nanocoai/nanoclaw/pull/2899)

### 5. Bugs & Stability
Several critical stability issues were identified today, primarily related to crash loops and resource exhaustion.

1.  **Host Process Crash on Webhook Failure (#2900):** [Severity: High] The webhook server failure causes an uncaught exception that kills the entire host daemon. Since the webhook is optional for polling channels, this is an unacceptable single point of failure. [Link](https://github.com/nanocoai/nanoclaw/issues/2900)
2.  **WhatsApp Socket Memory Leak (#2905 - Fixed):** Previously causing gradual degradation, this has been addressed in the merged PR #2905. [Link](https://github.com/nanocoai/nanoclaw/pull/2905)
3.  **Discord Interaction Parsing Error (#2899):** [Severity: Medium] Incorrect parsing of newline delimiters in Discord buttons broke approval workflows. A fix PR is currently open. [Link](https://github.com/nanocoai/nanoclaw/pull/2899)

### 6. Feature Requests & Roadmap Signals
Open PRs indicate a roadmap focused on ease of management, templating, and hardware optimization.

*   **Instance-Wide Agent Providers (#2906):** Allows operators to set a default LLM provider for all new groups, reducing per-group configuration overhead. [Link](https://github.com/nanocoai/nanoclaw/pull/2906)
*   **Agent Templates (#2890):** Introduces a system for loading ready-to-run agent bundles (instructions, tools, skills) from local or remote sources, significantly speeding up onboarding. [Link](https://github.com/nanocoai/nanoclaw/pull/2890)
*   **Voice Transcription Skills (#2317):** Adds support for local, free voice transcription via Whisper (GPU/CPU variants), catering to privacy-conscious users avoiding cloud APIs. [Link](https://github.com/nanocoai/nanoclaw/pull/2317)
*   **Slack Thread History Reload (#2904):** Improves Slack `engage_mode: 'mention'` by ensuring full thread context is loaded, fixing context blindness in deep threads. [Link](https://github.com/nanocoai/nanoclaw/pull/2904)
*   **Container Performance Tweaks (#2771):** Configurable `--shm-size` and `--init` flags for agent containers to prevent Chromium headless browser crashes on large pages. [Link](https://github.com/nanocoai/nanoclaw/pull/2771)

### 7. User Feedback Summary
Users are expressing frustration with the "out-of-the-box" experience for self-hosted Docker instances. The primary pain points are:
*   **Network Configuration:** Defaults that break in standard Docker bridge networks (#2903).
*   **Error Visibility:** Silent failures where messages disappear without feedback (#2902) or config changes are ignored without warnings (#2901).
*   **Stability:** Crashes caused by non-critical subsystems like the webhook server (#2900).
*   **Positive Feedback:** Appreciation for new operational tools like backup skills (#1693) and contribution automation (#1716), which reduce maintenance burden.

### 8. Backlog Watch
Maintainers should prioritize the following items to improve project health:

*   **Critical Infrastructure Bugs:** The combination of issues #2900 (Crash loop), #2901 (Config ignore), and #2903 (Network bind) suggests a need for a rigorous "Docker-first" testing suite or configuration validation layer before release.
*   **Discord Fix Verification:** Ensure PR #2899 is thoroughly tested across different Discord client versions to prevent regression in button handling.
*   **Slack Context Loading:** Monitor PR #2904 to ensure thread history reloading does not introduce latency issues in high-volume channels.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-07-02

### 1. Today's Overview
NullClaw shows minimal activity as of July 2, 2026, with no new pull requests, merges, or releases recorded in the last 24 hours. The repository remains stable with one open issue currently active, reflecting a quiet maintenance period rather than active development sprinting. Community engagement is low, indicated by zero reactions on recent discussions, suggesting that current blockers may require deeper technical investigation before community traction can resume. Overall project health appears stagnant but not critical, with the primary focus remaining on resolving specific environment compatibility issues.

### 2. Releases
No new releases were published during this reporting period. The latest known version remains **v2026.4.17**, released in late April. Users should continue to rely on this stable branch unless they are specifically testing against the main development branch for bug fixes related to Termux/Android environments.

### 3. Project Progress
There was no progress made via merged or closed pull requests today. Consequently, no new features were advanced or officially fixed through the PR workflow in the last 24 hours. Development momentum seems paused, likely due to the complexity of the ongoing environment-specific build failures affecting the Android/Termux user base.

### 4. Community Hot Topics
The sole significant discussion point is **Issue #868**, titled "[bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat".
*   **Activity:** This issue has accumulated 6 comments since its creation in April, with its last update occurring yesterday (July 1).
*   **Underlying Needs:** The high comment count relative to the single open issue indicates a concentrated effort by maintainers and users to debug a complex environment-specific build failure. The core need here is cross-platform compatibility assurance, specifically ensuring that NullClaw can be compiled and run securely within restricted Linux-like environments on Android (Termux/LineageOS). The lack of 👍 reactions suggests this is a niche but critical pain point for mobile developers using the tool.
    *   [View Issue #868](https://github.com/nullclaw/nullclaw/issues/868)

### 5. Bugs & Stability
One bug report stands out as the primary stability concern:
*   **Severity:** High (for target audience).
*   **Description:** Compilation failure (`AccessDenied`) when running `zig build -Doptimize=ReleaseSmall` on aarch64 Android devices using Termux.
*   **Status:** Open. No fix PR has been merged yet.
*   **Analysis:** The error occurs during the linking phase involving `options.zig`, suggesting potential permission issues with temporary file handling or symlinks within the Termux sandbox. This regression blocks deployment for a specific subset of users and requires a workaround or upstream Zig/Toolchain adjustment.

### 6. Feature Requests & Roadmap Signals
No new feature requests were filed or discussed today. The roadmap signals remain focused on **environmental robustness** rather than new functionality. The community interest appears directed toward stabilizing the build process for non-standard Unix environments (Android/Termux) rather than requesting new application features.

### 7. User Feedback Summary
User feedback is currently dominated by technical troubleshooting regarding build failures. The primary pain point is the inability to compile NullClaw on Android devices despite having valid dependencies (Zig 0.16.0, LineageOS 22.2). There is no visible dissatisfaction regarding the core application logic, but rather frustration with the development toolchain integration. Satisfaction levels are likely neutral-to-negative for affected users, as the bug prevents usage without manual intervention or alternative build methods.

### 8. Backlog Watch
**Issue #868** is the critical item requiring maintainer attention. It has been open since April 23 and remains unresolved despite 6 comments. Given that it involves a specific OS/architecture combination (Android/Termux/aarch64), it may require dedicated debugging resources. Maintainers should prioritize providing a clear workaround or identifying if this is a limitation in the Zig compiler version (0.16.0) used by Termux packages.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-07-02
**Source:** GitHub Data (nearai/ironclaw)

### 1. Today's Overview
The IronClaw project is experiencing high velocity with 50 Pull Requests and 24 Issues updated in the last 24 hours, indicating intense development activity focused on the "Reborn" backend architecture. The primary focus is stabilizing the new multi-user and multi-threading execution models, resolving critical credential injection bugs, and improving the reliability of automated routine executions. While no new official releases were published today, significant internal refactoring and integration test coverage expansions suggest the team is preparing for a major stability milestone.

### 2. Releases
**No new official releases published.**
*   **Internal Note:** PR #5311 indicates a pending release update for core crates (`ironclaw`, `ironclaw_skills`, etc.), but it remains open as of this digest generation.

### 3. Project Progress
Significant progress was made in **integration testing** and **credential management** for the Reborn architecture:
*   **Test Coverage Expansion:** Multiple PRs (#5517, #5514, #5516, #5482, #5434, #5483, #5481) were merged or advanced to add Tier-0 and Tier-2 integration tests. These cover safety ingress, web access, skill/durable/gateway seams, trigger management, and memory search.
*   **Credential Injection Fixes:** PR #5499 and #5513 advanced the ability for admins to install WASM tools and manage tenant-shared credentials, addressing long-standing visibility issues.
*   **API Refactoring:** PR #5137 began decomposing the monolithic `ironclaw_reborn_composition` crate into smaller, manageable HTTP middleware kits.
*   **Google Extension Optimization:** PR #5503 added compact capabilities for Gmail and Calendar to reduce context window usage and improve latency.

### 4. Community Hot Topics
*   **Routine Execution Failures:** High engagement on issues regarding routine hangs (#5504), lease expirations (#5456), and self-referential prompt loops (#5505). Users are frustrated by the inability to reliably schedule and execute complex, multi-step automations.
    *   [Issue #5504](https://github.com/nearai/ironclaw/issues/5504)
    *   [Issue #5456](https://github.com/nearai/ironclaw/issues/5456)
*   **Multi-User Isolation & Security:** Active discussion on memory visibility across workspace users (#5460) and WASM credential provider logic (#5512). There is a strong demand for strict isolation between tenants and users.
    *   [Issue #5460](https://github.com/nearai/ironclaw/issues/5460)
    *   [Issue #5512](https://github.com/nearai/ironclaw/issues/5512)
*   **Slack Integration Gaps:** Multiple reports of Slack delivery targets not being recognized (#5508) and bots redirecting to WebUI instead of posting directly (#5506).
    *   [Issue #5508](https://github.com/nearai/ironclaw/issues/5508)
    *   [Issue #5506](https://github.com/nearai/ironclaw/issues/5506)

### 5. Bugs & Stability
The following critical bugs were reported today, heavily impacting the "Reborn" user experience:
1.  **[P1] Routine Run Lease Expiration (#5456):** Routines fail consistently because the 90-second inactivity threshold is too short for multi-tool workflows involving model inference. *Impact: High reliability degradation.*
2.  **[P1] Routine Creation Hang (#5504):** The agent enters an infinite planning loop when asked to create a routine, providing no feedback. *Impact: Blocks core automation feature.*
3.  **[P1] Multi-Tool Protocol Violation (#5415):** Workflows requiring 18-25 tool calls (e.g., Gmail to Sheets) fail with generic protocol errors. *Impact: Limits complexity of usable agents.*
4.  **[P2] No Thread Attached on Failure (#5507):** Failed runs hide the execution thread, making debugging impossible. *Impact: Developer experience block.*
5.  **[P2] Slack Connection State Contradiction (#5416):** The agent incorrectly reports connection states, confusing users during setup.
6.  **[P2] Delete Routines Broken (#5510):** Users cannot delete old routines, leading to cluttered and potentially conflicting automation states.

### 6. Feature Requests & Roadmap Signals
*   **Configurable Skills & Tools (#5459):** There is a clear push for granular control over tool installation (Admin vs. User scope) and WASM tool imports. This suggests the next major version will feature a more modular plugin system.
*   **Context Efficiency (#5149):** PR #5149 introduces "progressive tool disclosure," signaling a roadmap shift toward reducing token consumption and improving model response times by hiding unused tool schemas.
*   **Failure Recovery (#4841):** There is ongoing work to eliminate "run-borking" terminal errors, aiming for a system where failures are explained and retryable rather than crashing the run.

### 7. User Feedback Summary
Users are expressing dissatisfaction with the **opacity of failures** and **latency issues**.
*   **Pain Point:** "No thread attached" and generic "driver protocol errors" make it impossible for users to understand why a routine failed.
*   **Pain Point:** The UI latency increases significantly with conversation history (#5509), degrading the interactive chat experience.
*   **Pain Point:** System messages (like skill activations) are cluttering the chat transcript (#5488), and users want these hidden or better managed.
*   **Positive Signal:** Users appreciate the new Slack user-token tool (#4941) which enables deeper integrations previously impossible with bot-only tokens.

### 8. Backlog Watch
*   **Nightly E2E Instability (#4108):** A persistent issue from May 27th regarding scheduled E2E workflow failures requires attention to ensure CI reliability.
*   **Playwright Channel Connect Tests (#5500):** Flakiness in the `legacy-auth-inputs` shard is blocking validation of the Reborn auth system.
*   **Logs Page Rendering (#5457, #5458):** The Logs page remains empty or double-headered, blocking developers from monitoring routine health. These UI bugs need prioritization to support the debugging efforts required for the other backend fixes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-07-02
**Source:** GitHub (netease-youdao/LobsterAI)

### 1. Today's Overview
LobsterAI exhibits high development velocity with 24 Pull Requests updated in the last 24 hours, of which 20 have been merged or closed, indicating a robust contribution workflow. Only 4 issues remain active, suggesting that the majority of recent feedback is being addressed rapidly through code contributions rather than prolonged debate. No new releases were published during this window, implying that current efforts are focused on stabilizing existing features and integrating community PRs. The project appears healthy, with a strong balance between core team fixes and community-driven enhancements in areas like UI/UX and tooling.

### 2. Releases
*   **No new releases.**
    *   There are no new version tags released on 2026-07-02. Users should monitor the repository for upcoming stable builds containing the recently merged fixes and feature additions.

### 3. Project Progress
Significant progress was made in UI stability, collaboration features, and ecosystem integration:

*   **UI Stability & Fixes:**
    *   **#2252:** Fixed a critical crash where deleting an active custom model caused a white screen in the renderer.
    *   **#2246:** Resolved a macOS fullscreen black screen issue upon app closure.
    *   **#2242:** Optimized the prompt toolbar layout for narrow widths in the Cowork module.
*   **Collaboration (Cowork) Enhancements:**
    *   **#2249:** Introduced a dedicated Subagent artifact panel with list/detail views.
    *   **#2248:** Implemented auto-preview logic for newly generated artifacts based on priority (local service, doc, HTML, video, image).
    *   **#2247:** Fixed race conditions in plan recovery by delaying execution until abort processes settle.
*   **Ecosystem & Tools:**
    *   **#2244:** Added Qichacha integration to the MCP marketplace and improved grouped server management.
    *   **#2251:** Enhanced deployment commands by isolating Node tool environments, ensuring consistent build behavior.
*   **Community Contributions Merged:**
    *   **#1242:** Added one-click clear for attachments and input boxes.
    *   **#1291:** Implemented import/export functionality for Scheduled Tasks.
    *   **#1355:** Fixed drag-and-drop support for `.pptx` and `.docx` files on Windows.
    *   **#1366:** Added Agent import/export capabilities.
    *   **#1548:** Added execution timers to the streaming activity bar and tool call groups.
    *   **#1171:** Refactored the sidebar to show task statistics and allow collapsing/expanding agent lists.
    *   **#1253:** Retained icon navigation in the collapsed sidebar state.

### 4. Community Hot Topics
The following issues highlight key user concerns and strategic directions:

*   **[Issue #2243](https://github.com/netease-youdao/LobsterAI/issues/2243):** *Performance Bottlenecks in Skills Watch.*
    *   **Analysis:** A user reports severe performance degradation due to `skills.load.watch` triggering excessive I/O and token consumption when managing large skill libraries (174 skills). This indicates a need for manual control over file watching and better persistence handling for protected paths.
*   **[Issue #2239](https://github.com/netease-youdao/LobsterAI/issues/2239):** *Strategic Direction: "OpenClaw-ification" of Coding Tools.*
    *   **Analysis:** This high-level discussion suggests users see value in deeper integration between LobsterAI and coding tools (like OpenClaw/OpenCode). It highlights a trend toward seamless AI-assisted programming workflows, urging LobsterAI to bridge the gap between general office agents and specialized dev tools via MCP.
*   **[Issue #1425](https://github.com/netease-youdao/LobsterAI/issues/1425):** *Shortcut Validation Missing.*
    *   **Analysis:** A basic UX bug where duplicate shortcuts can be saved without validation. While low severity, it reflects ongoing needs for polish in the settings interface.

### 5. Bugs & Stability
*   **Critical Stability Fixes (Merged):**
    *   **#2252:** White screen crash when deleting active custom models. **(Fixed)**
    *   **#2246:** Black screen on macOS fullscreen exit. **(Fixed)**
    *   **#1355:** Drag-and-drop failure for Office documents on Windows. **(Fixed)**
*   **Analytics Correction:**
    *   **#2245:** Corrected usage event reporting for skills, IM settings, and scheduled tasks. **(Fixed)**
*   **Remaining/Stale Issues:**
    *   **#1361:** Delete button label remains in English ("delete") instead of Chinese. *(Stale)*
    *   **#1425:** Shortcut key duplicate validation missing. *(Closed/Fixed? Status shows Closed, but summary implies it was a report; assuming resolved or marked stale).*

### 6. Feature Requests & Roadmap Signals
*   **Manual Skill Watch Control:** Requested in [#2243](https://github.com/netease-youdao/LobsterAI/issues/2243). Users want a UI toggle to switch `skills.load.watch` from auto to manual to prevent resource waste.
*   **ESC Key Support for Modals:** Requested in [#1362](https://github.com/netease-youdao/LobsterAI/pull/1362). Adding ESC to close permission modals improves keyboard accessibility.
*   **Contextual Model Selector:** Requested in [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364). Placing the model selector near the input box reduces eye movement and improves workflow efficiency.
*   **Agent/Skill Portability:** Recent merges of import/export for Agents (#1366) and Scheduled Tasks (#1291) signal a roadmap focus on data portability and user customization.

### 7. User Feedback Summary
*   **Positive Reception:** Users appreciate the granular UI improvements, such as the collapsed sidebar retaining icons (#1253) and the addition of execution timers (#1548), which enhance transparency in long-running AI tasks.
*   **Pain Points:** Performance overhead from background file watching is a major concern for power users with extensive skill libraries. Additionally, minor localization inconsistencies (English labels in Chinese UI, #1361) persist despite overall good progress.
*   **Workflow Efficiency:** The ability to quickly clear inputs/attachments (#1242) and fix drag-and-drop for Office files (#1355) directly addresses daily friction points for non-programmer users.

### 8. Backlog Watch
*   **[Issue #1361](https://github.com/netease-youdao/LobsterAI/issues/1361):** *Localization:* The "Delete" button text in the Custom Agent detail page needs translation to Chinese. This is a simple fix but impacts perceived quality.
*   **[Issue #2243](https://github.com/netease-youdao/LobsterAI/issues/2243):** *Performance:* The suggestion to add a UI switch for `skills.load.watch` and address the persistence bug requires architectural consideration. Maintainers should prioritize this for the next major iteration to support large-scale skill usage.
*   **[Issue #2239](https://github.com/netease-youdao/LobsterAI/issues/2239):** *Strategy:* While not a bug, this discussion represents a potential strategic pivot. Maintainers should evaluate the feasibility of deeper MCP-based integrations with coding-specific agents as suggested.

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

# CoPaw Project Digest
**Date:** 2026-07-02
**Repository:** github.com/agentscope-ai/CoPaw

## 1. Today's Overview
The CoPaw project demonstrates high development velocity with **22 issues** and **50 pull requests** updated in the last 24 hours. Activity is heavily skewed toward bug fixes and stability improvements, particularly regarding channel integrations (Feishu, Telegram) and the upcoming v2.0.0 release cycle. While no new official releases were published today, the volume of merged PRs suggests significant internal refactoring and patching are underway to stabilize the platform ahead of major version milestones. The community is actively engaging with security concerns and concurrency bugs, indicating a maturing user base deploying agents in production-like environments.

## 2. Releases
*   **No new releases** published in the last 24 hours.
*   *Note:* Active work continues on **v2.0.0 pre-release** stability, as evidenced by Issue #5273 and related bug reports.

## 3. Project Progress
Several critical areas saw advancement through merged/closed PRs and resolved issues:

*   **Channel Integrations:**
    *   **[Telegram]** Custom BaseURL support was implemented and closed (Issue #5630, PR #5651), allowing users behind proxies or using custom endpoints.
    *   **[Feishu/DingTalk]** Notifications for tool approvals now correctly pass channel instances (PR #5694), fixing potential caching issues.
    *   **[General]** A generic Webhook channel feature is in progress (PR #5716), enabling JSON-based integrations with HMAC-SHA256 security.
*   **Core & Runtime:**
    *   **[Governance]** Strict mode enforcement was fixed to properly override ALLOW rules (PR #5682), enhancing security posture.
    *   **[Plugins]** Official plugin installation failures on QwenPaw 2.0 were resolved (PR #5568), addressing breaking changes from the Agentscope 1.x to 2.x migration.
    *   **[Loop Engineering]** A composable gate architecture was merged (PR #5665), offering finer control over agent loop behaviors.
*   **UI/UX:**
    *   **[TUI]** Live context-usage bars were added to the status bar (PR #5673) and transcript scrolling improved (PR #5714).
    *   **[Docs]** Website architecture pages and blog sections were updated (PR #5697, PR #5653).

## 4. Community Hot Topics
The following discussions garnered the most attention or represent significant community needs:

*   **Concurrency & Stability in Multi-Agent Scenarios**
    *   *Issue #5701:* Concurrency freezes when multiple agents access the same page.
    *   *Issue #4873:* Subagent polling loops causing infinite rapid requests and inability to interrupt via Feishu.
    *   *Analysis:* Users are hitting limits in the current asynchronous task scheduling and background subagent management. The shift to event-driven subagents (PR #5637) is a direct response to these pain points.
*   **Security & Data Privacy**
    *   *Issue #5715:* Request for password protection on the Web Console.
    *   *Issue #5705/#5704:* Concerns over API key storage in `agent.json` and logging of sensitive data.
    *   *Analysis:* Enterprise adoption requires stricter access controls and audit trails. The lack of native web auth and log sanitization is a blocker for many users.
*   **Context Management**
    *   *Issue #5063:* Integration of "Headroom" for context compression.
    *   *Issue #5710:* Critical bug where context compression truncates key anchor messages.
    *   *Analysis:* As models support larger contexts, managing token costs and preserving critical instruction integrity during compression remains a primary technical challenge.

## 5. Bugs & Stability
Ranked by severity based on reported impact:

1.  **[High] Feishu Channel Logic Errors**
    *   *Issue #5709:* Bot messages containing @mentions are incorrectly discarded (`is_bot` hard drop).
    *   *Issue #5708:* Interactive card messages are not parsed, returning raw JSON instead of text.
    *   *Impact:* Breaks multi-agent collaboration and user feedback loops within Feishu groups.
2.  **[High] Concurrency Hangs**
    *   *Issue #5701:* Application freezes under concurrent access from multiple tabs/pages for the same agent.
3.  **[Medium] QQ Channel Crash**
    *   *Issue #5696:* `AttributeError` when websocket reconnects because `self._http` becomes None.
4.  **[Medium] Plugin Installation Failures**
    *   *Issue #5523 / PR #5568:* `spawn_subagent` missing from Runtime 2.0 registry, causing plugin breaks.
5.  **[Low] UI/UX Glitches**
    *   *Issue #5688:* CSS selector prefix mismatch (`ant-` vs `qwenpaw-`).
    *   *Issue #5676:* Available skills not listed in system prompt (Fixed in PR #5680).

## 6. Feature Requests & Roadmap Signals
*   **Web Console Authentication:** Multiple requests for basic password/key protection for the web UI (Issue #5715). This is likely to be prioritized for security compliance in v2.0.1 or v2.1.
*   **Generic Webhook Support:** PR #5716 introduces a generic webhook channel, signaling a roadmap shift towards flexible, protocol-agnostic integrations rather than hard-coded channels only.
*   **Input Limit Removal:** User request to remove character limits on input boxes to leverage long-context models (Issue #5670).
*   **Memory Index Refresh:** PR #4224 highlights ongoing work to ensure memory indexes are refreshed after auto-summarization, crucial for long-term agent reliability.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Reliability:** Users report significant instability with Feishu and QQ channels, specifically regarding message parsing and connection resilience.
    *   **Transparency:** Lack of visibility into context usage and token consumption (addressed partially by PR #5673) frustrates power users optimizing costs.
    *   **Configuration Security:** Storing API keys in plain JSON files and logging them is viewed as a critical security flaw.
*   **Satisfaction:**
    *   The rapid response to bug reports (e.g., fixing governance strict mode and plugin installations) indicates strong maintainer engagement.
    *   The introduction of granular loop controls (PR #5665) and event-driven subagents (PR #5637) is positively received by developers seeking finer control over agent behavior.

## 8. Backlog Watch
*   **Issue #5711:** "QwenPaw Capability Shortfall Analysis & Competitor Comparison." This high-level strategic issue needs maintainer review to align development priorities with market expectations.
*   **Issue #5705/5704:** Security enhancements for secret masking and environment variable support in config files. These are critical for enterprise trust and should be expedited.
*   **Issue #5689:** Remote SSH plugin cleanup errors. While minor, it indicates fragility in the plugin uninstallation process that could affect user experience.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-07-02
**Source:** ZeroClaw Labs (github.com/zeroclaw-labs/zeroclaw)

## 1. Today's Overview
ZeroClaw is experiencing high-velocity development activity, with 50 issues and 50 pull requests updated in the last 24 hours. The project is heavily focused on stabilizing the v0.8.3 release cycle, addressing critical security vulnerabilities in skill extraction and dependency management, and expanding gateway compatibility via OpenAI API endpoints. While no new official releases were published today, the volume of merged fixes and RFC discussions indicates a mature, responsive maintenance phase. Activity is dominated by security hardening, channel reliability fixes, and architectural refinements for multi-agent environments.

## 2. Releases
**No new releases published.**
The project is currently in the stabilization phase for v0.8.3. Tracker issues indicate ongoing work on runtime execution, provider serialization, and observability, but no version tag has been cut yet.

## 3. Project Progress
Significant progress was made in merging fixes and advancing documentation today:

*   **Security & Dependency Hardening:**
    *   **PR #8547**: Removed the `rag-pdf` feature to eliminate the vulnerable `ttf-parser` dependency (RUSTSEC-2026-0192).
    *   **PR #8574**: Patched `extract_zip_secure` to prevent zip-bomb inflation attacks on skills, directly addressing Issue #8554.
    *   **PR #8575 & #8543**: Cleaned up stale security audit ignores (`RUSTSEC-2024-0370`) and updated audit policy documentation following the removal of the Tauri desktop app.
*   **Channel & Gateway Improvements:**
    *   **PR #8079 & #8576**: Implemented environment variable fallbacks for OpenAI STT credentials, improving usability for operators who prefer env vars over config files.
    *   **PR #8596**: Enhanced WeCom channel support by carrying reply scope as structured metadata instead of injecting text markers.
    *   **PR #8552**: Fixed a build script issue regarding `CARGO_MANIFEST_DIR` resolution at runtime.
*   **Documentation:**
    *   **PR #8592**: Corrected inaccurate claims regarding tool-receipt chaining in security docs.
    *   **PR #7144**: Updated MiniMax provider examples to include the M3 model.

## 4. Community Hot Topics
High-engagement discussions reveal community priorities around security, interoperability, and autonomy:

*   **[Issue #8193] MCP Tools Missing in TUI Sessions** (13 comments): Users are frustrated that MCP tools discovered by the gateway are not visible in the Zerocode TUI, blocking workflow continuity.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8193
*   **[Issue #6808] RFC: Work Lanes & Board Automation** (13 comments): A governance-focused discussion on automating issue triage and label cleanup to reduce maintainer overhead.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/6808
*   **[Issue #8226] Per-Agent Custom Environment Variables** (5 comments): A request for better multi-tenancy support, allowing agents to have isolated secret and config contexts.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8226
*   **[Issue #8303] RFC: Goal Mode for Autonomous Sessions** (3 comments): Users are seeking a first-class "Goal Mode" for long-running, bounded autonomous tasks, distinguishing it from simple interactive turns.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8303
*   **[Issue #7497] RFC: OCI-Compliant Plugin Storage** (3 comments): Technical debate on replacing JSON indices with OCI registries for WASM plugin distribution, focusing on supply chain security.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7497

## 5. Bugs & Stability
Several P1 (Critical) and P2 bugs were reported today, primarily affecting the Web Dashboard and Runtime consistency:

*   **P1: Agents Stop on Chat Window Exit** ([Issue #8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)): Agents terminate their loops when the user closes the web dashboard tab, preventing background execution. This is a major usability blocker for long-running tasks.
*   **P1: SOPs Not Detected in Web Dashboard** ([Issue #8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)): Standard Operating Procedures (SOPs) configured in the shared directory are invisible to agents via the web UI, breaking expected automation flows.
*   **P1: MCP Tools Missing in TUI** ([Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)): As noted in hot topics, a discrepancy exists between Gateway-discovered tools and TUI visibility.
*   **P2: Scheduled Jobs Edit Error (API 422)** ([Issue #6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891)): The web interface for editing cron jobs is outdated, causing validation errors when saving changes.
*   **P2: Agent Cannot Use Env Vars as HTTP Secrets** ([Issue #8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553)): A regression where agents cannot utilize process environment variables for authenticating HTTP requests via tools.

## 6. Feature Requests & Roadmap Signals
*   **OpenAI-Compatible Endpoint** ([Issue #8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) / [PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)): High demand for standard REST API compatibility to integrate with tools like Open WebUI and LangChain. PR #8486 is actively developing this.
*   **Mixture-of-Agents (MoA) Provider** ([Issue #8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)): A proposal to allow a "virtual model" that aggregates outputs from multiple reference models, signaling interest in advanced reasoning strategies.
*   **Durable Memory Store** ([PR #8570](https://github.com/zeroclaw-labs/zeroclaw/pull/8570)): An "Epic A" PR proposing a stable seam for persistent memory, suggesting a major architectural shift toward reliable long-term context management in upcoming versions.
*   **Goal Mode** ([Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)): Formalizing autonomous, goal-oriented session management, likely to be a key differentiator for future agent deployments.

## 7. User Feedback Summary
Users are expressing strong dissatisfaction with **background execution reliability** in the web dashboard. The inability to close the browser tab without killing the agent (#8559) and the invisibility of SOPs (#8563) suggest that the current web UI feels "fragile" compared to headless or CLI usage. Conversely, the community appreciates the rapid response to **security hygiene**, particularly the removal of vulnerable dependencies and hardening of skill extraction. There is a clear desire for **standardized integration** (OpenAI API) and **better multi-tenant isolation** for secrets and configs.

## 8. Backlog Watch
*   **[Issue #6074] Audit: Track Lost Commits** (2 comments): A long-standing issue tracking 153 commits lost during a bulk revert. Requires maintainer attention to ensure no regression fixes were permanently discarded.
*   **[Issue #8309] SkillForge Orphaned** (2 comments): The SkillForge engine (#144) appears wired to nothing. Maintainers need to decide whether to complete integration with safe defaults or remove the feature to reduce technical debt.
*   **[Issue #8043] Retire aardvark-sys Crate** (4 comments): An RFC to fold a standalone hardware crate into `zeroclaw-hardware`. Awaiting final ratification votes.
*   **[Issue #7673] Native Context Compression** (3 comments): RFC for a compression decorator in the provider pipeline. Blocked/Needs Author Action, potentially impacting performance and cost for large context windows.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*