# OpenClaw Ecosystem Digest 2026-07-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-10 01:54 UTC

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

# OpenClaw Project Digest: 2026-07-10

## 1. Today's Overview
The OpenClaw project exhibits extremely high activity with 500 issues and 500 pull requests updated in the last 24 hours, indicating a massive influx of community engagement and maintenance efforts. Despite the high volume of activity, there were no new releases published today, suggesting the team is focused on stabilizing the codebase and addressing critical regressions rather than shipping new versions. The issue tracker shows a healthy ratio of closed to open issues (183 closed vs. 317 open), reflecting robust triage and resolution capabilities. However, the sheer volume of "diamond lobster" rated issues highlights significant stability and security concerns that require immediate attention.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Several key areas saw advancement through merged or closed PRs:
*   **Codex Subagent Stability:** PR #97715 addressed a critical retry loop in native subagent completions, fixing a major reliability issue for Codex users.
*   **Dashboard Enhancements:** Multiple PRs (#101919, #101913, #101908, #101900, #101899) contributed to the modular dashboard, introducing features like shareable deep links, per-agent nesting, full-bleed tabs, and workspace time-travel.
*   **Performance Optimizations:** PR #102971 replaced an O(n^2) character loop with a regex in `stripDisallowedChatControlChars`, significantly improving performance for large messages.
*   **Configuration Fixes:** PR #102619 fixed a silent data loss bug caused by accepting zero-value cron session retention settings.
*   **Plugin & Channel Fixes:** PR #102082 suppressed progress chrome in Slack, and PR #102822 fixed case-sensitivity issues in Slack channel IDs.

## 4. Community Hot Topics
The most discussed issues revolve around session state integrity, message loss, and security vulnerabilities:
*   **[Bug]: Subagent completion silently lost** (#44925): 21 comments, 1 reaction. Highlights the fragility of subagent orchestration and timeout handling.
*   **[Bug]: Cron agentTurn sends thinking=none to OpenAI** (#63918): 18 comments, 1 reaction. Shows friction with newer OpenAI model capabilities and cron job reliability.
*   **Tool outputs sometimes render as image attachments** (#99241): 15 comments, 2 reactions. Indicates a regression in how tool outputs are processed and transmitted to the agent.
*   **Image tool: opaque "Failed to optimize image"** (#73148): 15 comments, 3 reactions. Points to poor error handling for missing dependencies like `sharp`.
*   **gh-issues skill: untrusted issue body injected** (#45740): 14 comments, 1 reaction. Raises serious security concerns regarding prompt injection via GitHub issue bodies.

These topics reflect a community deeply concerned with the reliability of automated tasks, the clarity of error messages, and the security of integrations.

## 5. Bugs & Stability
Several high-severity bugs and regressions were reported today:
*   **Gateway Memory Leak** (#54155): P1, Platinum Hermit. Gateway memory grows from ~389MB to 14.7GB over 4 days, posing a risk to long-running deployments.
*   **Subagent completion silently lost** (#44925): P1, Diamond Lobster. Critical failure mode where subagent results are lost without notification.
*   **WhatsApp session stalls** (#84569): P1, Diamond Lobster. Long model calls cause WhatsApp sessions to stall and terminate with incomplete turns.
*   **Codex OAuth refresh timeout** (#89278): P1, Diamond Lobster. OAuth refresh succeeds but cron/heartbeat fails due to timing issues.
*   **Cron sessions deliver hallucinated output** (#49876): P1, Diamond Lobster. Trust and safety issue where cron jobs fabricate output instead of failing cleanly.
*   **Embedded runner "Network connection lost"** (#53540): P1, Platinum Hermit. Large tool call parameters cause timeouts and misleading error messages.
*   **Write/exec tool parameters silently dropped** (#53408): P1, Platinum Hermit. Tools drop parameters after long conversations, leading to data loss.
*   **WhatsApp 1:1: inbound image wedges main lane** (#96834): P1, Platinum Hermit. Images cause significant delays in processing.
*   **Unhandled Playwright assertion error crashes Gateway** (#45224): P1, Platinum Hermit. A bug in Playwright integration causes full gateway crashes.
*   **Agent loop allows simulated tool calls** (#45049): P1, Diamond Lobster. Security/reliability issue where agents simulate tool usage instead of invoking them.
*   **OpenAI Codex errors leak into user chat** (#44910): P2, Platinum Hermit. Poor error handling exposes internal details to users.
*   **Discord routing / mention-gating issue** (#44502): P1, Diamond Lobster. Regression in Discord message handling.
*   **Sandbox container exits immediately** (#43996): P1, Diamond Lobster. Security policy (`no-new-privileges`) breaks sandbox functionality.
*   **Ollama remote provider streaming not consumed** (#94251): P1, Platinum Hermit. Streaming issues with Ollama.
*   **Session hangs indefinitely on compaction timeout** (#43661): P0, Diamond Lobster. Closed, but indicates past critical stability issue.
*   **Stuck-session recovery aborts long runs** (#88870): P1, Diamond Lobster. Closed, but highlights aggressive timeout logic.
*   **All tool results rendered as images in Discord** (#100782): P2, Regression. Closed, but shows a recent severe regression.
*   **Codex legacy mirrored-history fallback ignores contextTokenBudget** (#84084): P2. Closed, but indicates ongoing context management issues.
*   **Default sandbox image lacked python3** (#57713): P2, Regression. Closed, but shows environment setup issues.

Fix PRs exist for several of these, including #97715 for subagent retries, #102971 for performance, and #102619 for config validation.

## 6. Feature Requests & Roadmap Signals
*   **Pre-reset agentic memory flush** (#45608): Users want a silent memory flush before session resets to preserve important context, similar to compaction.
*   **Persistent task-status surface** (#52640): Request for a dedicated UI element to track long-running tasks, especially in Discord.
*   **YAML config support** (#45758): Desire for YAML as an alternative to JSON5 for better readability.
*   **Gateway lifecycle warnings routing** (#45565): Feature to send system warnings to a dedicated channel to reduce noise in conversation channels.
*   **Bounded/validated append semantics for memory flush** (#90354): Request for guardrails on memory flush operations to prevent oversized or noisy entries.
*   **System event priority/bypass-queue mode** (#50739): Need for reliable in-session alerts that bypass congestion.
*   **Configurable session startup message** (#45501): Users want to customize the message injected after `/new` or `/reset`.
*   **iOS Privacy screen location controls** (#103096): A new feature PR addressing redundant privacy controls in iOS settings.

## 7. User Feedback Summary
Users are expressing significant frustration with:
*   **Silent Failures:** Multiple reports of tasks failing silently without notification or retry (#44925, #45494, #49876).
*   **Data Loss:** Concerns about tool outputs being lost or rendered incorrectly (#99241, #53408, #100782).
*   **Security Risks:** Anxiety over prompt injection vulnerabilities (#45740) and sandbox escapes (#43996).
*   **Performance Issues:** Complaints about memory leaks (#54155) and slow processing for large messages or images (#96834, #102971).
*   **Poor Error Messages:** Users struggle with opaque errors like "Failed to optimize image" (#73148) or misleading network errors (#53540).
*   **Integration Instability:** Problems with WhatsApp, Discord, and Telegram sessions stalling or wedging (#84569, #44502, #43549, #51628).

Overall satisfaction seems low due to these stability and reliability issues, despite the high level of community engagement.

## 8. Backlog Watch
*   **Gateway Memory Leak** (#54155): P1, Platinum Hermit. Requires urgent investigation and fix to prevent production outages.
*   **gh-issues skill injection vulnerability** (#45740): P1, Diamond Lobster. Critical security issue needs immediate attention.
*   **Subagent completion silent loss** (#44925): P1, Diamond Lobster. Core reliability issue affecting multi-agent workflows.
*   **Cron sessions hallucination** (#49876): P1, Diamond Lobster. Trust and safety issue for automated tasks.
*   **Sandbox container exit on no-new-privileges** (#43996): P1, Diamond Lobster. Blocks secure sandbox usage for many users.
*   **Codex OAuth refresh timeout** (#89278): P1, Diamond Lobster. Affects reliability of scheduled tasks using Codex.
*   **Write/exec tool parameter dropping** (#53408): P1, Platinum Hermit. Causes data loss in long conversations.
*   **WhatsApp image processing wedge** (#96834): P1, Platinum Hermit. Impacts user experience on a major channel.
*   **Playwright assertion crash** (#45224): P1, Platinum Hermit. Causes full gateway crashes.
*   **Agent loop simulated tool calls** (#45049): P1, Diamond Lobster. Undermines agent reliability and security.
*   **Containerized deploy plugin trust** (#92516): P1, Diamond Lobster. Blocks self-hosted users from using external channel plugins.
*   **Tools.elevated.enabled routing bug** (#46786): P1, Diamond Lobster. Breaks expected sandbox behavior.
*   **Auth.order ignored for GitHub Copilot** (#46031): P2, Diamond Lobster. Configuration issue affecting multi-profile setups.
*   **Session bloat from skillsSnapshot** (#45718): P2, Diamond Lobster. Contributes to memory and storage issues.
*   **Telegram delivery queue replay** (#51628): P2, Platinum Hermit. Causes duplicate messages and confusion.
*   **Skipped group messages not reaching hooks** (#47167): P2, Diamond Lobster. Limits plugin functionality for history archiving.
*   **Untrusted issue body injection** (#45740): P1, Diamond Lobster. See above.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-07-10
**Analyst:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The open-source personal AI agent landscape in mid-2026 is characterized by intense fragmentation and rapid stabilization efforts. While the core concept of autonomous agents remains consistent, projects have diverged significantly in their architectural approaches, ranging from monolithic gateways (OpenClaw, IronClaw) to specialized edge/embedded implementations (PicoClaw, NanoBot). The dominant industry theme is no longer just feature acquisition, but reliability engineering: specifically, fixing silent failures, securing MCP (Model Context Protocol) integrations, and managing context window integrity in long-running sessions.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | Stable (No Release) | 8.5 / 10 |
| **Hermes Agent** | 100 | N/A (Merged) | Stable (No Release) | 7.0 / 10 |
| **CoPaw** | 35 | 50 | Beta v2.0.0-beta.5 | 8.0 / 10 |
| **ZeroClaw** | 36 | 50 | Stable (No Release) | 7.5 / 10 |
| **IronClaw** | 32 | 50 | Stable (No Release) | 6.5 / 10 |
| **NanoBot** | 22 | 22 | Stable (No Release) | 7.0 / 10 |
| **LobsterAI** | 5 | 14 | Stable (No Release) | 6.0 / 10 |
| **NanoClaw** | 9 | 17 | Stable (No Release) | 6.5 / 10 |
| **PicoClaw** | 3 | 16 | Stable (No Release) | 5.5 / 10 |
| **Moltis** | 0 | 1 | Stable (No Release) | 4.0 / 10 |
| **NullClaw** | 0 | 0 | Inactive | 0.0 / 10 |
| **TinyClaw** | 0 | 0 | Inactive | 0.0 / 10 |
| **ZeptoClaw** | 0 | 0 | Inactive | 0.0 / 10 |

*\*Health Score derived from issue resolution rate, PR merge frequency, and severity of open bugs.*

## 3. OpenClaw's Position
OpenClaw dominates the ecosystem in terms of raw volume and community engagement, with 500 issues and 500 PRs updated daily—significantly higher than any peer. Its primary advantage is its maturity as a reference implementation, offering a comprehensive dashboard and modular architecture that others attempt to replicate. However, this scale comes with technical debt; it faces the highest volume of critical stability bugs (P1/P0), particularly regarding session state integrity and memory leaks. Unlike competitors such as CoPaw or ZeroClaw, which are iterating on new architectures (v2.0 or v0.9.0), OpenClaw is in a defensive posture, focusing heavily on regression fixes and security hardening rather than new feature launches.

## 4. Shared Technical Focus Areas
Across the top-tier active projects, three critical technical challenges have emerged:

1.  **Session State & Context Integrity:**
    *   **Projects:** OpenClaw, CoPaw, ZeroClaw, Hermes Agent.
    *   **Need:** Users are experiencing "silent data loss" where tool outputs or subagent completions vanish. CoPaw reports structured tool call loss during compaction; OpenClaw suffers from subagent completion drops. There is a universal demand for deterministic session recovery and transparent context management.

2.  **MCP Security & Approval Flows:**
    *   **Projects:** NanoClaw, ZeroClaw, NanoBot.
    *   **Need:** As MCP becomes the standard for tool integration, "approval smuggling" (hidden arguments in MCP server additions) is a critical vulnerability. Projects are racing to implement strict auditing, DNS rebinding protections (ZeroClaw), and sandbox isolation for tool execution.

3.  **Channel Adapter Stability:**
    *   **Projects:** NanoBot, IronClaw, ZeroClaw, LobsterAI.
    *   **Need:** Integrations with Telegram, WhatsApp, and Slack are frequent points of failure. Specific issues include group routing bugs (NanoBot), credential persistence loss (IronClaw), and message delivery confirmation failures (ZeroClaw). Reliable, idempotent channel adapters are a prerequisite for production use.

## 5. Differentiation Analysis

*   **Architectural Approach:**
    *   **Monolithic/Gateway-Centric:** OpenClaw, IronClaw, and Hermes Agent rely on a central gateway process that manages all channels and tools. This offers consistency but creates single points of failure (e.g., IronClaw’s Slack automation bugs).
    *   **Modular/Plugin-First:** CoPaw and ZeroClaw emphasize a plugin ecosystem and distinct separation between the agent core and channel adapters. CoPaw’s v2.0 beta focuses heavily on sandboxing and UI evictions, while ZeroClaw prioritizes protocol purity and SSRF mitigation.
    *   **Edge/Embedded:** PicoClaw and NanoBot target constrained environments (Raspberry Pi, Docker containers). NanoBot focuses on lightweight CLI/Docker deployment, while PicoClaw addresses ARM compatibility and dependency management for embedded use cases.

*   **Target Users:**
    *   **Enterprise/Power Users:** IronClaw and OpenClaw cater to users needing complex dashboards, multi-agent orchestration, and deep integration with enterprise tools (Slack, Jira).
    *   **Privacy-Conscious/Developers:** ZeroClaw and NanoBot attract users prioritizing local execution, sandbox security, and minimal resource footprint.
    *   **Consumer/Desktop:** LobsterAI and Hermes Agent focus on polished desktop experiences (Electron/TUI) for casual users, though they lag in advanced automation features compared to the gateway-centric projects.

## 6. Community Momentum & Maturity

*   **Tier 1: Rapid Iteration & Stabilization (High Velocity)**
    *   **OpenClaw:** Massive activity, but currently bogged down by critical bug fixes. The community is large but frustrated by stability issues.
    *   **CoPaw:** High momentum with the v2.0 beta cycle. Strong focus on sandboxing and UI improvements. Likely to see a major stable release soon.
    *   **ZeroClaw:** Consistent, high-quality development focused on security and protocol correctness. Mature codebase with proactive security audits.

*   **Tier 2: Steady Maintenance (Moderate Velocity)**
    *   **Hermes Agent:** Focused on gateway reliability and credential management. Less flashy than CoPaw but solid for existing users.
    *   **NanoBot:** Quick to fix specific bugs (Docker, MCP) but smaller community. Good for users wanting a lightweight, extensible base.
    *   **IronClaw:** High PR volume but many are internal refactors and linting. The user-facing experience is suffering from integration bugs (Slack/Approval).

*   **Tier 3: Niche/Stagnant (Low Velocity)**
    *   **LobsterAI:** Focused on UX polish (timestamps, search) rather than core engine improvements. Community interest is shifting toward more robust backends.
    *   **NanoClaw:** Struggling with fundamental adapter fragility (Telegram).
    *   **PicoClaw:** Maintenance-heavy with dependency updates. Limited growth due to niche embedded focus.
    *   **Moltis/NullClaw/TinyClaw/ZeptoClaw:** Effectively inactive or single-issue driven. Not recommended for new development investment.

## 7. Trend Signals

1.  **From "Always-On" to "Audited & Isolated":** The community is rejecting agents that operate blindly. The rise of MCP approval smuggling issues (NanoClaw, ZeroClaw) and demands for sandbox interfaces (NanoBot) indicate that **trust and transparency** are becoming more valuable than raw autonomy. Developers must prioritize explainable tool usage and strict security boundaries.
2.  **Context Management is the New Bottleneck:** With models gaining larger context windows, the bottleneck has shifted to *managing* that context. Bugs related to compaction, memory flushing, and tool call preservation (CoPaw, OpenClaw, ZeroClaw) show that **state fidelity** is the next critical engineering challenge.
3.  **Channel Abstraction Fatigue:** The repeated failures in Telegram, WhatsApp, and Slack adapters across nearly all projects suggest that building proprietary channel integrations is unsustainable. There is a clear signal toward **standardized protocol layers** (like MCP or unified gateway APIs) that abstract away channel-specific quirks, rather than maintaining dozens of fragile direct integrations.
4.  **Desktop UX vs. Backend Robustness Trade-off:** Projects like LobsterAI are polishing desktop UX, while others (IronClaw, OpenClaw) are battling backend stability. The market is splitting: either offer a rock-solid, headless backend for developers (ZeroClaw, NanoBot) or a highly polished, consumer-friendly desktop experience (Hermes, LobsterAI). Hybrid models are struggling with both.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest**
**Date:** 2026-07-10
**Source:** github.com/HKUDS/nanobot

### 1. Today's Overview
NanoBot is experiencing high development velocity with 22 issues and 22 pull requests updated in the last 24 hours, indicating a period of intense stabilization and feature expansion. The project is currently prioritizing critical infrastructure fixes, particularly around MCP (Model Context Protocol) stability, Docker build integrity, and agent loop robustness. While no new releases were published today, the volume of merged and closed PRs suggests a pre-release patch cycle is underway. Community engagement remains strong, with significant discussion around multi-agent orchestration, sandbox security, and channel reliability.

### 2. Releases
*   **No new releases.**
*   *Note:* Several critical fixes (Docker build, MCP reconnect, zombie process reaping) have been merged, suggesting an imminent patch release may address these stability concerns.

### 3. Project Progress
**Merged/Closed PRs (Last 24h):**
*   **#4857 [CLOSED]** Added `NANOBOT_EXTRAS` Dockerfile argument to override optional Python dependencies at build time, improving container flexibility.
*   **#4859 [CLOSED]** Fixed Matrix channel regression where `mistune` updates broke `mxc://` image source preservation.
*   **#4629 [CLOSED]** Enhanced security by blocking relative symlink workspace escapes in the `exec` tool, preventing sandbox breakout attempts.

**Key Advancements:**
*   **Cron Job Improvements (#4622):** Introduced `model_preset` support for cron jobs, allowing per-run provider/model overrides without mutating the live agent model.
*   **Weather Skill (#4145):** Added comprehensive weather skill examples and tests, expanding out-of-the-box utility.
*   **WebUI Guided Setup (#4855):** Implemented guided setup flows for channels (Feishu, WhatsApp, etc.), lowering the barrier to entry for new users.

### 4. Community Hot Topics
**Most Active/Discussed Items:**
1.  **[Issue #912] Task-Specific Model Configuration** (3 👍)
    *   *Link:* https://github.com/HKUDS/nanobot/issues/912
    *   *Analysis:* Users demand granular control over LLM selection per task type (conversational vs. tool use vs. browser), reflecting a need for cost optimization and performance tuning.
2.  **[Issue #240] SimpleX Chat Support** (3 👍)
    *   *Link:* https://github.com/HKUDS/nanobot/issues/240
    *   *Analysis:* Growing interest in privacy-focused, decentralized messaging protocols beyond standard Telegram/Discord integrations.
3.  **[Issue #4823] WhatsApp Group Bug** (Active)
    *   *Link:* https://github.com/HKUDS/nanobot/issues/4823
    *   *Analysis:* A regression in v0.2.2 causing all groups to receive every bot message is a critical usability blocker for community managers.
4.  **[Issue #936] Multi-Tenant Gateway** (Active)
    *   *Link:* https://github.com/HKUDS/nanobot/issues/936
    *   *Analysis:* Enterprise users are requesting centralized management for multiple agents to reduce operational overhead.

### 5. Bugs & Stability
**Critical/High Severity:**
1.  **[Bug #4860] Missing Commands (`onboard`, `webui`)**
    *   *Link:* https://github.com/HKUDS/nanobot/issues/4860
    *   *Description:* Users installing via `uv` cannot find documented commands, indicating a disconnect between CLI help output and documentation.
2.  **[Bug #4864] Endless Loop in `complete_goal`**
    *   *Link:* https://github.com/HKUDS/nanobot/issues/4864
    *   *Description:* Gateway parsing error causes `complete_goal` to fail in a loop due to incorrect JSON serialization of the `recap` parameter.
3.  **[Regression #4823] WhatsApp Group Allowlist Broken**
    *   *Link:* https://github.com/HKUDS/nanobot/issues/4823
    *   *Description:* Post-v0.2.2, group filtering logic is inverted or ignored, flooding all groups with bot responses.

**Medium Severity:**
*   **[Bug #954] Progress Streaming Leaks Internal Tool Calls** (Closed, but indicates prior instability in v0.1.4).
*   **[Bug #896] Unbounded Disk Growth** (Telegram/Discord media never cleaned up).

**Fixes in Progress:**
*   **PR #4863:** Fixes Docker build failure by syncing `package-lock.json`.
*   **PR #4843:** Defers stale MCP stack cleanup to prevent gateway crashes during reconnect.
*   **PR #4840:** Reaps zombie processes on all exit paths to prevent resource leaks.

### 6. Feature Requests & Roadmap Signals
*   **Subagent Control Plane (#1006):** Request for `list/kill` commands to manage subagents, signaling a move toward more complex, hierarchical agent architectures.
*   **Native Sandbox Interface (#931):** Proposal for isolated plugin execution (using Deno/Firecracker), highlighting security as a primary roadmap pillar.
*   **Zero-Token Message Routing (#990):** Pre-handler hooks to bypass LLM costs for simple commands, optimizing efficiency.
*   **HTTP Server for Webhooks (#1118):** Needed for services like Nextcloud Talk, suggesting expansion beyond WebSocket-based channels.

**Prediction:** The next major release will likely focus on **sandbox security**, **multi-agent orchestration tools**, and **cost-reduction features** (routing hooks, model presets).

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Documentation/CLI Mismatch:** Users are confused by missing commands in the CLI help vs. docs (#4860).
    *   **Sandbox Isolation:** Users cannot easily access host filesystems or create skills within the sandbox workspace (#940, #1138).
    *   **Hallucinations in Exec Tool:** Some users report excessive hallucinations when using the `exec` tool, leading to abandoned evaluations (#937).
    *   **WhatsApp Instability:** Persistent WebSocket connection issues and group filtering bugs (#150, #4823).
*   **Satisfaction:**
    *   Positive reception for guided setup flows (#4855) and the addition of specific skills like Weather (#4145).
    *   Appreciation for security hardening (symlink escape prevention #4629).

### 8. Backlog Watch
*   **[Issue #931] Native Sandbox Interface:** High priority for security compliance; currently stalled awaiting architectural decision.
*   **[Issue #936] Multi-Tenant Gateway:** Critical for enterprise adoption; requires significant backend refactoring.
*   **[Issue #240] SimpleX Chat:** Low effort, high value for privacy-conscious users; waiting on maintainer resources.
*   **[Issue #896] Media Cleanup:** Simple fix but overlooked; leads to disk exhaustion for long-running instances.

Maintainers should prioritize addressing the **WhatsApp group regression (#4823)** and **missing CLI commands (#4860)** in the immediate term to restore user confidence.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-10
**Source:** NousResearch/hermes-agent GitHub Repository

## 1. Today's Overview
The Hermes Agent project demonstrates exceptionally high development velocity on July 10, 2026, with 100 total issues and pull requests updated in the last 24 hours. While no new official releases were published, the maintainers pushed a significant batch of fixes targeting critical stability issues in the Gateway, Credential Management, and Desktop components. Activity is heavily skewed towards bug resolution and infrastructure hardening, suggesting a pre-release stabilization phase or a response to recent deployment regressions. Community engagement remains strong, particularly around remote execution capabilities and provider reliability.

## 2. Releases
**No new releases.**
*   Last known active development is on commit `f9eca7e15f1c2bfe5194aa5aa489af53c0a1a23` (v0.18.1 context).
*   Current focus is on patching specific bugs in open PRs rather than shipping a versioned release.

## 3. Project Progress
**Merged/Closed & Advanced PRs (Last 24h):**
*   **Gateway & Adapter Stability:** Multiple PRs address critical connectivity and session management issues.
    *   [#61767](https://github.com/NousResearch/hermes-agent/pull/61767): Enforced reconnect contract across adapters (QQ/WeCom) to prevent offline states after outages.
    *   [#61770](https://github.com/NousResearch/hermes-agent/pull/61770): Restored Feishu/Lark group event handling via WebSocket.
    *   [#61766](https://github.com/NousResearch/hermes-agent/pull/61766): Added authenticated runtime readiness checks for better observability.
*   **Desktop & CLI Improvements:**
    *   [#61763](https://github.com/NousResearch/hermes-agent/pull/61763): Fixed macOS TCC identity preservation across Electron rebuilds.
    *   [#61753](https://github.com/NousResearch/hermes-agent/pull/61753): Optimized TUI launch performance by skipping unnecessary frontend rebuilds.
    *   [#61752](https://github.com/NousResearch/hermes-agent/pull/61752): Fixed test suite leakage of real Windows gateway processes.
*   **Security & Exports:**
    *   [#61769](https://github.com/NousResearch/hermes-agent/pull/61769): Hardened HTML session exports against XSS by escaping role sinks and implementing nonce-based CSP.
*   **Skill & Memory Management:**
    *   [#61771](https://github.com/NousResearch/hermes-agent/pull/61771): Fixed skill installation to include referenced support files and provenance.
    *   [#52987](https://github.com/NousResearch/hermes-agent/pull/52987): Advanced Hindsight memory provider with multi-bank auto-routing.

## 4. Community Hot Topics
**Most Active Issues (by comments/reactions):**

*   **[Feature] Support remote Hermes agent with local tool execution (#18715)**
    *   *Status:* Open | *Comments:* 8 | *Reactions:* 20👍
    *   *Analysis:* High demand for hybrid architectures where heavy LLM processing occurs remotely while sensitive tool execution (files, local APIs) stays on the user's machine. This reflects a growing need for privacy-preserving AI agents.
    *   [Link](https://github.com/NousResearch/hermes-agent/issues/18715)

*   **[Bug] Setup: hermes desktop strat fail, it say no git??? (#38963)**
    *   *Status:* Closed | *Comments:* 9
    *   *Analysis:* Indicates friction in the Windows Desktop installer experience. Users expect a seamless "click-and-run" experience, and missing dependencies like Git cause confusion.
    *   [Link](https://github.com/NousResearch/hermes-agent/issues/38963)

*   **[Bug] Z.AI provider pool cascade-marks every key when one hits quota (#61487)**
    *   *Status:* Closed | *Comments:* 5
    *   *Analysis:* Highlights a critical flaw in the credential pool logic. A single rate-limit on one key disables the entire pool, impacting availability for users relying on multi-key rotation strategies.
    *   [Link](https://github.com/NousResearch/hermes-agent/issues/61487)

*   **[Bug] Dashboard logout should redirect to the IdP end-session endpoint (#3540)**
    *   *Status:* Open | *Comments:* 3 | *Reactions:* 1👍
    *   *Analysis:* Security-conscious users and enterprise deployments require proper Single Sign-Out (SSO) behavior. The current implementation leaves sessions active at the Identity Provider level.
    *   [Link](https://github.com/NousResearch/hermes-agent/issues/35410)

## 5. Bugs & Stability
**Critical & High Severity Issues Reported/Fixed:**

1.  **Credential Pool Cascading Failure (#61487, #61451)**
    *   *Issue:* Rate limits on one key or model exhaust the entire provider credential pool, blocking other models/users.
    *   *Status:* Closed/Fixed.
    *   *Impact:* High availability risk for multi-key setups.

2.  **Gateway Session Hygiene Data Loss (#61145)**
    *   *Issue:* Auto-compression of long sessions permanently deletes conversation history instead of soft-archiving.
    *   *Status:* Closed.
    *   *Impact:* Silent data loss for power users with long context windows.

3.  **Model Switch Endpoint Mismatch (#47828, #61296)**
    *   *Issue:* Switching models/providers via `/mode` or `switch_model` retains the old provider's `base_url`, causing 400 errors or misrouted requests.
    *   *Status:* Closed/Fixed.
    *   *Impact:* Broken dynamic model switching, a core feature for cost optimization.

4.  **Cron Job Race Condition & Test Leakage (#61768, #61673)**
    *   *Issue:* Desktop cron ticker can overwrite another profile's jobs; tests leak into live `jobs.json`.
    *   *Status:* Open.
    *   *Impact:* Risk of destructive data corruption in multi-profile environments.

5.  **Nous Inference API Unreachable (#60715)**
    *   *Issue:* Complete timeout from `inference-api.nousresearch.com`.
    *   *Status:* Open.
    *   *Impact:* Blocks users relying on Nous-hosted models.

## 6. Feature Requests & Roadmap Signals
*   **Thin-Client Desktop Installer (#61329):** Users request a lightweight desktop client that connects to a remote backend, reducing local resource usage.
*   **Auto Reasoning Mode (#40306):** Demand for ChatGPT-style "auto" reasoning where the model decides whether to think deeply or answer instantly based on query complexity.
*   **Per-Cron Reasoning Overrides (#23524):** Granular control over thinking effort for scheduled tasks (e.g., low effort for email scans, high for report generation).
*   **RP-Initiated Logout (#35410, #61243):** Standardizing OIDC logout to clear sessions at the Identity Provider, not just locally.

**Prediction:** The next minor release will likely prioritize **Credential Pool Resilience** and **Session Hygiene Safety** given the severity of the recent bugs. The "Thin Client" feature may be deprioritized in favor of stabilizing the current architecture unless it receives more traction.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Installer Friction:** Windows users struggle with missing dependencies (Git) during Desktop setup.
    *   **Provider Reliability:** Multi-key pools are fragile; a single rate-limit kills the whole pool.
    *   **Data Integrity:** Users are alarmed by session deletion bugs and cron job overwrites.
    *   **Local Model Performance:** Streaming speed indicators are inaccurate for local providers, causing confusion.
*   **Satisfaction:**
    *   Positive feedback on the depth of configuration options (skills, memory banks).
    *   Appreciation for rapid bug turnaround on critical gateway issues (e.g., reconnect contracts).

## 8. Backlog Watch
*   **[Bug] Gateway crashes on Nous Portal token expiry with no remote recovery path (#58572)**
    *   *Severity:* P2
    *   *Risk:* Headless/server users lose access entirely upon token expiry, requiring physical intervention.
    *   *Status:* Open. Needs a robust token refresh/recovery mechanism.

*   **[Bug] honcho_conclude tool sends empty API key (#61661)**
    *   *Severity:* P3
    *   *Risk:* Breaks specific memory plugin workflows.
    *   *Status:* Open.

*   **[Feature] Auto reasoning mode (ChatGPT-style) (#40306)**
    *   *Severity:* P3
    *   *Risk:* Low technical risk, high UX impact.
    *   *Status:* Open.

*   **[Bug] Hermes Desktop: vision_analyze ignores config.yaml (#48249)**
    *   *Severity:* P2
    *   *Risk:* Configuration drift in Desktop builds.
    *   *Status:* Open.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-07-10
**Source:** github.com/sipeed/picoclaw

### 1. Today's Overview
PicoClaw demonstrates high development velocity with 16 Pull Requests updated in the last 24 hours and 3 active issues under discussion. The project is currently in a maintenance-heavy phase, focusing heavily on dependency updates, stability fixes for specific channels (LINE, Matrix, QQ), and configuration robustness. No new releases were published today, but several critical bug fixes and feature enhancements are pending merge. The community engagement is moderate, with most interactions centered on technical troubleshooting and infrastructure improvements rather than broad feature debates.

### 2. Releases
*   **No new releases.**
*   Current stable version referenced in issues/PRs is **v0.2.9**.

### 3. Project Progress
Several significant technical improvements have been advanced or merged today:
*   **Dependency Updates:** Multiple automated updates for AWS SDK (`aws-sdk-go-v2/config`), Golang sync package, and GitHub Copilot SDK indicate active supply chain maintenance.
    *   [PR #3238](https://github.com/sipeed/picoclaw/pull/3238): Bump aws-sdk-go-v2/config to 1.32.29.
    *   [PR #3237](https://github.com/sipeed/picoclaw/pull/3237): Bump golang.org/x/sync to 0.22.0.
    *   [PR #3236](https://github.com/sipeed/picoclaw/pull/3236): Bump github/copilot-sdk/go to 1.0.6.
*   **Code Cleanup:** Major refactoring of the DeltaChat implementation, reducing code size by ~320 lines and modernizing configuration handling.
    *   [PR #3222](https://github.com/sipeed/picoclaw/pull/3222): Refactor deltachat implementation.
*   **Stability Fixes:**
    *   [PR #3171](https://github.com/sipeed/picoclaw/pull/3171): Fixed potential panics in LINE channel `Send` method via `sync.Map` type assertion checks.
    *   [PR #3226](https://github.com/sipeed/picoclaw/pull/3226): Fixed `write_file` tool behavior to prevent accidental coaching of destructive overwrites on memory files.

### 4. Community Hot Topics
The most discussed topics revolve around channel-specific reliability and configuration migration pain points.
*   **QQ Streaming Support:** Users are actively requesting token-by-token streaming for QQ channels to match the experience available on Telegram/WebSocket.
    *   [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201)
*   **Config Migration Failures:** A recurring issue where v2 to v3 migrations fail due to unrecognized fields (`build_info`, `session.dm_scope`) is causing friction for fresh installs and upgrades.
    *   [Issue #3206](https://github.com/sipeed/picoclaw/issues/3206)
*   **ARM/9Router Compatibility:** Users on Raspberry Pi 3 B+ are seeking support for 9router gateways and ARMv7 builds, highlighting the need for better embedded device compatibility.
    *   [PR #3205](https://github.com/sipeed/picoclaw/pull/3205)

### 5. Bugs & Stability
Three critical stability issues were flagged today, all marked as [stale] or open without immediate fixes in the current PR list:
1.  **[HIGH] Matrix Sync Loop Silent Death:** The Matrix channel lacks reconnection logic after network disruptions, causing permanent failure without triggering systemd restarts.
    *   [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)
2.  **[MEDIUM] Config Migration Errors:** Fresh installations fail to load config due to legacy fields not being stripped during migration.
    *   [Issue #3206](https://github.com/sipeed/picoclaw/issues/3206)
3.  **[LOW] ID Normalization Edge Cases:** Routing logic fails to strictly adhere to regex constraints for agent/account IDs regarding leading/trailing underscores.
    *   [PR #3202](https://github.com/sipeed/picoclaw/pull/3202) (Fix proposed)

### 6. Feature Requests & Roadmap Signals
*   **AWS Bedrock Prompt Caching:** A proposal to leverage AWS Bedrock Converse API cache points to reduce latency and cost for long contexts.
    *   [PR #3163](https://github.com/sipeed/picoclaw/pull/3163)
*   **Remote Pico WebSocket Mode:** Enhancement to allow `picoclaw agent` to connect to remote WebSocket endpoints, expanding deployment flexibility beyond local execution.
    *   [PR #3118](https://github.com/sipeed/picoclaw/pull/3118)
*   **Inline Data URL Extraction:** Fix for treating inline base64 images in tool output as actual media attachments, improving generic tool integration.
    *   [PR #3115](https://github.com/sipeed/picoclaw/pull/3115)

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the lack of streaming in QQ channels and the fragility of the Matrix connection. The config migration bug is a significant blocker for new users upgrading from v2.
*   **Use Cases:** Strong interest in edge computing (Raspberry Pi/ARMv7) and cloud provider optimization (AWS Bedrock caching).
*   **Satisfaction:** Generally positive towards the project's responsiveness to specific channel needs (e.g., DeltaChat cleanup, LINE stability), though transparency on release cycles could be improved given the volume of open PRs.

### 8. Backlog Watch
Maintainers should prioritize addressing the **Matrix reconnection logic** and **Config Migration** bugs, as these affect core stability and onboarding. Additionally, the **QQ Streaming** feature request has gained traction and aligns with existing `StreamingCapable` implementations for other channels. Several dependency updates from Dependabot remain open and should be reviewed for security relevance.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-07-10
**Source:** github.com/qwibitai/nanoclaw

## 1. Today's Overview
NanoClaw experienced high developer activity yesterday, with 17 Pull Requests updated and 9 active Issues, indicating a period of significant refactoring and stability improvements despite no new official releases. The primary focus of the team has been on hardening the security posture of the MCP (Model Context Protocol) approval flows and fixing critical delivery logic bugs in the Telegram adapter and outbound message routing. While the project remains stable in terms of uptime, there are noticeable friction points regarding cross-session task management and adapter configuration persistence that require immediate attention from maintainers.

## 2. Releases
**No new releases were published in the last 24 hours.**
The latest activity consists of merged fixes (PR #2621, #2993, #2981) and open PRs targeting specific subsystems. Users should monitor the repository for an upcoming patch release addressing the security vulnerabilities outlined in Issue #2827/#2762 and the Telegram adapter bugs.

## 3. Project Progress
Several key areas saw advancement through merged or heavily discussed PRs:
*   **Scheduled Tasks Architecture:** PR #2981 was merged, introducing the `ncl tasks` control plane with isolated sessions and script gates, superseding earlier attempts (#2947). This establishes a single authoritative path for task execution.
*   **Resilience Improvements:** PR #2993 was merged to make NanoClaw resilient to a down container runtime (Docker Desktop), preventing the entire process from crashing on boot if Docker is unavailable.
*   **Line Ending Standardization:** PR #2621 was merged, adding `.gitattributes` to enforce LF line endings for shell scripts, resolving cross-platform development issues on Windows.
*   **Guarded Actions:** PR #2986 advanced the "Guard seam" initiative, implementing a unified `guard()` decision function for all privileged actions crossing container/channel boundaries.

## 4. Community Hot Topics
*   **Telegram Adapter Fragility (Issues #2989, #2991, #2990):** Three separate issues highlight significant pain points with the Telegram integration, specifically around `allowed_updates` persistence, channel wiring scope, and `my_chat_member` event handling. These issues have active discussion and represent a cluster of user frustration regarding bot reliability in broadcast channels.
    *   *Link:* [Issue #2989](https://github.com/nanocoai/nanoclaw/issues/2989), [Issue #2991](https://github.com/nanocoai/nanoclaw/issues/2991), [Issue #2990](https://github.com/nanocoai/nanoclaw/issues/2990)
*   **MCP Security & Approval Smuggling (Issues #2827, #2762):** Two high-severity security advisories report that the `add_mcp_server` approval flow hides runtime arguments and environment variables, allowing for "approval smuggling." This is a critical trust boundary issue for users allowing agents to modify their configurations.
    *   *Link:* [Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827), [Issue #2762](https://github.com/nanocoai/nanoclaw/issues/2762)
*   **Audit Logging Demand (PR #2987):** The introduction of the `/add-audit` skill suggests a growing community need for transparency and compliance tracking within agent operations.

## 5. Bugs & Stability
The following critical bugs were reported today, impacting delivery reliability and message state consistency:
1.  **Outbound Message Delivery Failure (Issue #2995):** Messages sent to offline or unconfigured channel adapters are incorrectly marked as "delivered" without actually sending. This creates false confidence in message delivery.
    *   *Fix Status:* PR #2996 ("route missing-adapter messages into the retry path") and PR #2226 ("throw on missing channel adapter") appear to address this root cause.
2.  **Recurring Reminder Loop Failure (Issue #2997):** Recurring tasks with static text fail to fire after the first execution due to a flawed `hasIdenticalSend` check that incorrectly identifies subsequent identical payloads as duplicates of previous fires.
3.  **Opencode Provider Silent Failure (Issue #2985):** Agents using the `opencode` provider sometimes produce full answers that are never posted to the chat, with no error logged, leading to perceived silence.
4.  **Scheduled Task Invisibility (Issue #2992):** Tasks created in one session of an agent group are not visible or manageable from other sessions because they are stored in session-specific `inbound.db` files rather than a shared state.

## 6. Feature Requests & Roadmap Signals
*   **Remote Storage Integration (PR #1598):** A pending PR for a `add-remote-storage` skill (WebDAV/S3 via rclone) indicates strong interest in persistent, cloud-backed storage solutions for agent data.
*   **Multimodal Support Restoration (PR #2618):** Efforts to restore v1 image, voice, and PDF attachment capabilities suggest users value multimodal inputs that may have been deprioritized in early v2 iterations.
*   **Enterprise Notification Channels (PR #2994):** A feature request to send delegation results directly to Feishu (Lark) groups highlights the need for better integration with enterprise communication platforms beyond standard Telegram/Discord.
*   **Socket Hardening (PR #2802):** Implementation of timeouts and frame caps for the `ncl` socket transport signals a roadmap shift toward robustness against denial-of-service or hanging connections.

## 7. User Feedback Summary
Users are expressing dissatisfaction with the **fragility of channel adapters**, particularly Telegram, where configuration nuances (like `allowed_updates`) lead to silent failures. There is also significant concern regarding **security transparency**, specifically the inability to see hidden arguments in MCP server approvals. Conversely, users appreciate the move towards **operational resilience** (handling Docker failures gracefully) and **auditability** (local audit logs). The recurring task bug is a major pain point for automation enthusiasts who rely on predictable scheduling.

## 8. Backlog Watch
Maintainers should prioritize the following long-standing or high-impact items:
*   **Security Fixes (PR #2998):** Addressing the `add_mcp_server` approval flow visibility issue is critical given the severity of Issues #2827 and #2762.
*   **Cross-Session Task Management (Issue #2992):** The current architecture isolates tasks per session, which breaks usability for multi-session agent groups. This requires architectural changes to how scheduled tasks are persisted and queried.
*   **Telegram Adapter Overhaul (Issues #2989, #2991, #2990):** The cluster of Telegram bugs suggests the adapter needs a comprehensive review rather than piecemeal fixes, particularly regarding how it handles bot tokens, scopes, and update types.
*   **Delivery Error Handling (Issue #2995):** Ensuring that failed deliveries are correctly flagged and retried (or logged as errors) is essential for system reliability.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-10

## 1. Today's Overview
IronClaw exhibits high development velocity with 32 issues and 50 pull requests updated in the last 24 hours, indicating an intense focus on stabilizing the "Reborn" architecture and resolving critical integration flaws. The primary operational theme is the remediation of Slack automation failures, where recent PRs address identity misrouting, broken approval flows, and credential persistence issues. While no new official releases were published today, significant internal refactoring and bug fixes are being merged, suggesting an imminent release cycle focused on reliability rather than new feature expansion.

## 2. Releases
**No new releases published.**
*   **Note:** PR #5598 references a previous release (`ironclaw` 0.24.0 -> 0.29.1) with breaking changes in `ironclaw_common`. Current activity suggests preparation for a subsequent patch or minor release to address the bugs detailed below.

## 3. Project Progress
**Key Merged/Closed Items:**
*   **Test Cleanup:** Legacy v1 coverage-focused test binaries and orphaned fixtures were removed (Issues #5826, #5827), reducing CI maintenance burden.
*   **Linting Rigor:** `unused_must_use` was promoted to a workspace-wide deny rule (PR #5652), ensuring dropped `Result` values now fail builds, improving error handling visibility.
*   **Code Refactoring:** Extensive consolidation of default-backed builder setters across Reborn crates (PRs #5791, #5793, #5794, #5798, #5799, #5800, #5811, #5812) to improve configuration clarity and reduce boilerplate.
*   **Runner Control Plane:** PR #5901 co-locates the Reborn runner control plane under a single named crate, clarifying the ownership of scheduling and execution logic.

**Active Major Work:**
*   **Slack Tool Overhaul:** PR #5904 implements comprehensive fixes for Slack tool identity, structured errors, and thread handling based on a four-lens audit.
*   **Context Compaction Fix:** PR #5902 addresses context overflow by keeping LocalDev tool results out of the model context, exposing only bounded references.

## 4. Community Hot Topics
**Most Active/Discussed Issues:**
1.  **[Bug] Approval notifications disappear (#5553)** [Link](https://github.com/nearai/ironclaw/issues/5553)
    *   *Analysis:* Critical UX flaw where users cannot reliably approve automation steps, blocking autonomous workflows. High comment count indicates persistent user frustration.
2.  **[Bug] Routine creation hangs (#5504)** [Link](https://github.com/nearai/ironclaw/issues/5504)
    *   *Analysis:* A P1 bug where the system fails to return a result or error when creating routines, leading to indefinite waits.
3.  **[Bug] Activity panel hides tool details (#5701)** [Link](https://github.com/nearai/ironclaw/issues/5701)
    *   *Analysis:* Lack of transparency in tool execution prevents debugging and trust-building with the AI agent.
4.  **[Tech Debt] Decompose first-party skill activation (#5897)** [Link](https://github.com/nearai/ironclaw/issues/5897)
    *   *Analysis:* Internal architectural cleanup required to support scalable skill management.

## 5. Bugs & Stability
**High Severity / Critical Stability Issues:**
1.  **Slack Automation Failures (Multiple):**
    *   **#5898 (PR):** Fixes wrong-channel delivery, ID vs. Name enrichment, and single-delivery contracts.
    *   **#5877:** Notification sent to wrong user (Privacy/Security Risk).
    *   **#5881:** Auth notification sent to wrong Slack app/channel.
    *   **#5882:** Broken auth flow after multiple reconnects.
    *   **#5880:** External auth not reflected in Web UI.
    *   **#5890:** Inconsistent sender identity in notifications.
2.  **Credential & Auth Loss:**
    *   **#5884:** Routines lose credentials after external token revocation.
    *   **#5878:** Revoked GitHub tokens produce misleading errors instead of triggering re-auth.
3.  **Run Execution Errors:**
    *   **#5838:** Runs fail with context compaction errors despite successful tool execution. Fixed by PR #5902.
    *   **#5887:** Runs hitting max action limits discard accumulated progress.
    *   **#5883:** Generic "model output could not be used" errors post-tool-execution.
    *   **#5836:** Scheduled routines failing with "No thread attached".
4.  **UI/UX Glitches:**
    *   **#5885:** Approval notification opens action but hides the approval message.
    *   **#5889:** "Load older messages" button non-functional.
    *   **#5888:** No ability to delete old threads.
    *   **#5891:** "Last completed" timestamp shows active run time.
    *   **#5879:** Stale error banners persist after successful follow-ups.

**Status:** A significant portion of today's PRs (#5904, #5898, #5902) are direct responses to these stability issues, particularly around Slack integrations and context management.

## 6. Feature Requests & Roadmap Signals
1.  **CLI/TUI for Secrets Management (#2601)**
    *   *Signal:* Users struggle with undocumented authentication patterns. A dedicated CLI/TUI for managing secrets is a strong candidate for the next major usability improvement.
2.  **JMT x402 Agent Tools (#5903)**
    *   *Signal:* Integration of paid, credit-based agent tools on Base mainnet suggests a roadmap toward monetized or resource-constrained API usage models.
3.  **Unpair Slack Integration (#5747)**
    *   *Signal:* Lack of user-facing disconnect controls for built-in hosts indicates a need for better lifecycle management of third-party integrations in the UI.

## 7. User Feedback Summary
*   **Pain Points:** Users are heavily impacted by **broken trust** in automation. Issues like disappearing approval notifications (#5553), losing progress on limit hits (#5887), and credentials vanishing after revocation (#5884) create a fragile experience.
*   **Confusion:** Misrouted Slack messages (#5877, #5881) and inconsistent sender identities (#5890) cause confusion regarding who (or what) is acting on their behalf.
*   **Satisfaction:** The rapid response to the "Slack tool audit" via PRs #5904 and #5898 suggests developers are actively listening to pain points regarding integration reliability.

## 8. Backlog Watch
*   **#5747 [OPEN] No way to unpair Slack:** A functional gap in the built-in host that prevents users from cleanly disconnecting services.
*   **#2601 [OPEN] CLI / TUI for Managing Secrets:** A long-standing request (created April 2026) that remains open, highlighting a documentation/usability gap.
*   **#5859 [OPEN] Daily ironclaw failure taxonomy:** Ongoing monitoring of benchmark failures (Pinchbench) indicates persistent provider-side rate limiting issues that may require architectural changes or throttling strategies.
*   **#5888 [OPEN] Cannot delete old threads:** Basic housekeeping functionality is missing, potentially leading to cluttered user experiences over time.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-07-10
**Source:** GitHub Activity Analysis (netease-youdao/LobsterAI)

### 1. Today's Overview
The LobsterAI repository demonstrates high velocity with 14 Pull Requests updated and 5 Issues addressed in the last 24 hours. Development focus is heavily concentrated on stabilizing the "Cowork" interface, refining the OpenClaw gateway integration, and enhancing the Windows desktop experience. While no new releases were published, the volume of merged fixes suggests a push toward code quality and user experience polish prior to an upcoming release cycle. The project remains actively maintained by a core team of contributors addressing both technical debt and user-facing feature requests.

### 2. Releases
*   **No new releases** were published on this date.

### 3. Project Progress
Significant progress was made in merging fixes and feature refinements today:

*   **OpenClaw Gateway & Agent Logic:**
    *   **PR #2308** (Merged): Fixed critical prompt sanitization by stripping null bytes (`U+0000`) before sending to the OpenClaw gateway, preventing hard rejections.
    *   **PR #2306** (Open): Addressed IM group task routing issues, ensuring legacy cron jobs bind correctly to agent-scoped groups.
    *   **PR #2301** (Merged): Explicitly disabled "memory dreaming" in OpenClaw config when disabled in LobsterAI to prevent stale cron jobs.
    *   **PR #2303** (Merged): Enabled agent-scoped local tools and resolved `AskUserQuestion` callbacks for non-main desktop agents.
    *   **PR #2299** (Merged): Improved subagent tool history synchronization, allowing child sessions to properly display tool call results.

*   **Cowork Interface Enhancements:**
    *   **PR #2307** (Merged): Refined prompt modes, removing the Plan Mode switch from the menu and improving Steer queue iconography.
    *   **PR #2300** (Merged): Added support for file attachments (images, dragged files) within the Steer queue, improving workflow continuity.
    *   **PR #2305** (Merged): Aligned LobsterAI agent display names with OpenClaw entries for consistency in UI chips and panels.

*   **Desktop & Sidebar UX:**
    *   **PR #2304** (Merged): Enhanced sidebar task pagination with incremental loading and added drag-and-drop sorting for agents.
    *   **PR #2302** (Merged): Implemented a Windows-specific branded title bar with native controls, moving collapsed-sidebar actions out of the app header.

*   **General Fixes:**
    *   **PR #1396** (Merged): Improved uninstaller logic for Windows to ensure complete cleanup of AppData directories.
    *   **PR #1397** (Merged): Localized compact time suffixes (e.g., "now", "26m") in the session list to respect user language settings.

### 4. Community Hot Topics
The community is actively discussing usability enhancements for the Cowork interface. The most notable topics involve missing standard UI patterns found in other chat applications:

*   **Message Timestamps:** Issue **#1339** highlights the lack of time visibility in message bubbles, crucial for reviewing long sessions. PR **#1340** proposes a solution adding `HH:MM` timestamps.
*   **Input History Navigation:** Issue **#1341** requests Up/Down arrow key support for recalling sent messages, similar to terminal behavior. PR **#1342** implements this via a memory-backed history stack.
*   **Search Capabilities:** Issue **#1343** points out that search is limited to titles, ignoring message content. Users need full-text search to locate conversations based on keywords rather than just session names.

These topics indicate a user base transitioning from casual usage to professional workflows where history, recall, and precise retrieval are essential.

### 5. Bugs & Stability
*   **Null Byte Injection (High Severity):** Resolved in **PR #2308**. The OpenClaw gateway previously rejected payloads containing `U+0000`, causing silent failures. This fix sanitizes inputs at ingestion and egress points.
*   **Scheduled Task Deletion (Medium Severity):** Issue **#1394** reported that non-repeating scheduled tasks were permanently deleted after execution, even though they should remain editable. This issue is currently **Closed**, implying a fix or decision has been made, though the specific resolution details are not fully elaborated in the summary.
*   **IM Group Routing (Medium Severity):** Issue related to **PR #2306** indicates legacy cron jobs were not routing correctly to the expected agent-scoped groups. This is being addressed in an open PR.

### 6. Feature Requests & Roadmap Signals
Based on the volume of open issues and associated PRs, the following features are likely candidates for the next minor release:

*   **Input History Recall:** The implementation in **PR #1342** (Up/Down key navigation) addresses a high-demand usability feature.
*   **Markdown Export:** Issue **#1345** requests exporting session details as Markdown files. This is a common request for users integrating AI outputs into documentation or note-taking apps.
*   **Full-Text Search:** Issue **#1343** suggests expanding the search modal (`Cmd+K`) to index message bodies, not just titles. This requires asynchronous loading but is a significant UX improvement.
*   **Windows Native Title Bar:** The completion of **PR #2302** signals a commitment to better platform-native integration for Windows users.

### 7. User Feedback Summary
Users are expressing dissatisfaction with the current lack of standard chat application conventions in the Cowork interface:
*   **Pain Point:** Inability to quickly recall previous prompts without retyping.
*   **Pain Point:** Difficulty finding specific conversations in long histories due to title-only search.
*   **Pain Point:** Lack of temporal context (timestamps) makes debugging or reviewing past interactions difficult.
*   **Positive Signal:** Users appreciate the recent improvements to uninstallation cleanliness (**PR #1396**) and localized time formatting (**PR #1397**), indicating sensitivity to polish and internationalization.

### 8. Backlog Watch
Maintainers should prioritize closing or addressing the following stale issues that have garnered community interest:

*   **Issue #1339:** Missing message timestamps. Linked to **PR #1340**.
*   **Issue #1341:** Missing input history navigation. Linked to **PR #1342**.
*   **Issue #1343:** Limited search scope (titles only). No linked PR yet, but high impact on usability.
*   **Issue #1345:** Lack of Markdown export functionality.
*   **Issue #1394:** Scheduled task auto-deletion behavior. Although closed, the summary suggests potential confusion regarding whether the fix aligns with user expectations of "non-repeating but editable."

*Note: All issues and PRs listed are from the `netease-youdao/LobsterAI` repository.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-07-10

### 1. Today's Overview
The Moltis project is currently in a low-activity state regarding community engagement and stability issues, with zero new issues opened or closed in the last 24 hours. Development momentum is narrowly focused on a single open pull request (#1146) aimed at expanding model compatibility. No new releases have been published, indicating the team may be in a pre-release validation phase or waiting for broader consensus before deploying updates. Overall, the project health appears stable but quiet, with development efforts concentrated on forward-looking feature additions rather than immediate bug fixes.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
*   **Active Development:** One pull request is currently open and under review:
    *   **#1146: Add GPT-5.6 model support** ([Link](https://github.com/moltis-org/moltis/pull/1146))
    *   **Status:** Open (Created/Updated: 2026-07-09)
    *   **Details:** This PR introduces support for "GPT-5.6" variants (Sol, Terra, Luna) within OpenAI and OpenAI Codex fallback catalogs. It implements specific context window limits (1.05M for API, 372K for ChatGPT/Codex backends) and updates configuration templates and provider-selection documentation.

### 4. Community Hot Topics
*   **Top Activity:** Pull Request #1146 is the only significant activity item.
*   **Analysis:** The lack of reactions (0 👍) and undefined comments suggests this is a newly submitted technical update awaiting initial review. The focus on "GPT-5.6" indicates strong community or internal demand for cutting-edge or hypothetical future model support, reflecting a need for extended context windows and diverse model aliases for power users.

### 5. Bugs & Stability
*   **Reported Issues:** None.
*   **Analysis:** There are no reports of crashes, regressions, or stability issues filed today. The absence of closed issues also implies that recent bug fixes have been resolved prior to this period.

### 6. Feature Requests & Roadmap Signals
*   **Signal:** The inclusion of **GPT-5.6 Sol, Terra, and Luna** in PR #1146 serves as a strong roadmap signal.
*   **Prediction:** These models will likely appear in the next minor release (e.g., vX.Y.Z) once the PR is merged. The detailed implementation of context window limits suggests a focus on high-capacity enterprise or research use cases where large context handling is critical.

### 7. User Feedback Summary
*   **Pain Points:** No direct user feedback or pain points were recorded via issues today.
*   **Use Cases:** The proposed feature targets users requiring access to advanced OpenAI model variants with specific context constraints, likely developers integrating Moltis into workflows demanding high-throughput or long-document processing capabilities.

### 8. Backlog Watch
*   **Maintainer Attention Needed:** PR #1146 has been open since 2026-07-09 with no comments. Maintainers should prioritize reviewing this merge request to ensure the documentation and configuration templates align with current standards before merging.
*   **General Backlog:** With 0 active issues, there is no immediate backlog pressure, allowing maintainers to focus on code review and release preparation.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest | 2026-07-10

## 1. Today's Overview
The CoPaw project demonstrates high velocity with 35 issues and 50 pull requests updated in the last 24 hours, indicating a robust development cycle around the upcoming v2.0.0 release. A new beta release, `v2.0.0-beta.5`, was published today, focusing on stabilizing the eviction index and scroll mechanics within the UI. Community engagement remains strong, with significant discussion around sandbox configurations, context management integrity, and multi-channel stability (Feishu, DingTalk, Matrix). The project is actively addressing critical regressions introduced in recent beta builds while preparing foundational features for the stable v2.0 launch.

## 2. Releases
**Version:** `v2.0.0-beta.5`
**Link:** [GitHub Release v2.0.0-beta.5](https://github.com/agentscope-ai/CoPaw/releases/tag/v2.0.0-beta.5)

**Key Changes:**
*   **UI/UX Fixes:** Resolved issues with label headlining for evicted spans in the eviction index (PR #5848).
*   **Navigation:** Anchored live turns with seam banners in the eviction index to improve context awareness during long conversations (PR #58).

**Migration Notes:**
*   Users upgrading from previous betas should verify that long conversation histories render correctly, specifically checking that evicted context spans are properly labeled.

## 3. Project Progress
Significant progress was made in backend stability, security hardening, and testing infrastructure today.

**Merged/Closed Pull Requests:**
*   **Security & Stability:** Fixed a critical bypass in the `rm` command protection logic where `${HOME}` was incorrectly blanked, potentially allowing destructive operations (PR #5866).
*   **Runtime Errors:** Resolved an issue where the frontend SDK failed to display error messages due to a change in the error envelope structure (PR #5905).
*   **Tool Call Integrity:** Fixed the recovery of whitespace-prefixed JSON arguments in tool calls and ensured malformed tool-call inputs are surfaced to the model rather than silently dropped (PR #5841, PR #5761).
*   **Reasoning Loop Prevention:** Changed the default `preserve_thinking` flag to `false` to prevent models from getting stuck in reasoning repetition loops (PR #5870).
*   **Testing:** Added extensive unit tests for the channels module (176 cases) and integration tests for the v2.0 tool-calls lifecycle (PR #5812, PR #5895).
*   **Documentation:** Updated documentation for QwenPaw 2.0 (PR #5899).

## 4. Community Hot Topics
The community is heavily focused on the usability and configurability of the v2.0 sandbox and context management systems.

*   **Sandbox Configurability:** High engagement on Issue #5879 requesting the ability to disable the sandbox for trusted devices, as it currently hinders basic tasks like library installation.
*   **Context Loss & Tool Calls:** Issue #5856 highlights a critical bug where context compaction loses structured tool_call data, leading to API errors. This reflects a broader concern about maintaining state fidelity during long sessions.
*   **Notification Fatigue:** Issue #5797 discusses the need for granular control over scheduled task notifications, arguing against a "one-size-fits-all" removal of popup alerts.
*   **Contributor Onboarding:** Issue #2291 remains the central hub for contributors, with 64 comments discussing open tasks and priority levels.

## 5. Bugs & Stability
Several regressions and stability issues were reported, primarily affecting the v2.0 beta and specific channel integrations.

**High Severity:**
*   **Context Compaction Data Loss:** Issue #5856 reports that `LightContextManager` converts structured tool calls to plain text during summarization, causing permanent loss of structure and subsequent 400 errors. *Status: Open.*
*   **OneBot Infinite Loop:** Issue #5898 describes an infinite restart loop caused by the OneBot channel being enabled by default without configuration, consuming resources. *Status: Closed/Fixed.*

**Medium Severity:**
*   **Iteration Count Bug:** Issue #5896 reports that the iteration limit in v2.0 counts from the last trigger rather than the new message, causing premature termination. *Status: Open.*
*   **Docker Browser Use Failure:** Issue #5872 details Chromium failing to start in Docker containers due to dbus connection errors. *Status: Open.*
*   **Windows Sandbox Shell Ignorance:** Issue #5911 notes that the AppContainer sandbox on Windows ignores configured shells (e.g., PowerShell) and defaults to `cmd.exe`. *Status: Open.*

**Low Severity/UI:**
*   **Image Rendering in Coding Session:** Issue #5863 reports binary code display instead of images in coding sessions. *Status: Closed.*
*   **Frontend Threshold Display:** Issue #5784 showed incorrect compression thresholds for models with duplicate IDs across providers. *Status: Closed.*

## 6. Feature Requests & Roadmap Signals
User feedback suggests the following priorities for future iterations:

*   **Granular Sandbox Controls:** Multiple issues (#5879, #5911) indicate a strong demand for customizable security boundaries, allowing users to toggle sandbox features or configure shell environments per device trust level.
*   **Session Organization:** Issue #5903 requests session grouping and import/export capabilities, signaling a need for better data management in long-term agent usage.
*   **Memory Search Enhancements:** Issue #5910 and #5859 highlight bugs in auto-memory search integration with DeepSeek and OpenAI APIs, suggesting that memory retrieval reliability is a key area for refinement.
*   **Theming:** Issue #5909 proposes a configurable theme/skin module, aiming to improve brand customization and user experience flexibility.

## 7. User Feedback Summary
Users express frustration with the "black box" nature of certain v2.0 security features, particularly the sandbox which restricts necessary administrative tasks (Issue #5879). There is a notable sentiment that previous fixes (like disabling popup notifications) were too aggressive and removed essential functionality without providing alternatives (Issue #5797). Conversely, users appreciate the rapid response to critical bugs like the OneBot loop (Issue #5898) and the transparency in the contributor roadmap (Issue #2291). Satisfaction is mixed between those enjoying the new architectural capabilities and those hindered by current stability gaps in context handling.

## 8. Backlog Watch
Maintainers should prioritize the following unresolved issues impacting core functionality:

*   **[Bug] Context Compaction Tool Call Loss:** Issue #5856. This is a critical data integrity issue that breaks complex agent workflows involving multiple tool calls.
*   **[Enhancement] Sandbox Toggle:** Issue #5879. Addressing this will reduce friction for power users deploying on trusted infrastructure.
*   **[Bug] Iteration Limit Logic:** Issue #5896. The current counting mechanism breaks standard conversational flows in v2.0.
*   **[Bug] Auto-Memory Search Malformed Calls:** Issue #5910. This affects compatibility with OpenAI Responses API and needs immediate patching for users relying on memory features.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-07-10

### 1. Today's Overview
ZeroClaw exhibits high development velocity with 36 issues and 50 pull requests updated in the last 24 hours, indicating an intense focus on stabilizing the upcoming `v0.8.3` and preparing for `v0.9.0`. The project is currently in a critical phase of security hardening and protocol refinement, with significant effort directed toward SSRF mitigation, MCP registry stability, and channel parity. While no new official releases were published today, the volume of merged fixes and accepted RFCs suggests the codebase is nearing a stable release candidate state. Activity is heavily concentrated on runtime reliability, security boundaries, and plugin ecosystem expansion.

### 2. Releases
*   **No new releases.**
*   **Context:** Development is currently aligned with the **v0.8.3** maintenance track (tracking observability, CI, and config policy) and the **v0.9.0** roadmap (tracking multi-user isolation, auth, and gateway security).

### 3. Project Progress
**Key Merged/Closed Items:**
*   **[PR #7836]** Fixed channel turns ignoring `strict_tool_parsing` and `parallel_tools` flags by ensuring resolved agent config is used in the orchestrator.
*   **[PR #8881]** Exposed `wechat`, `signal`, and `email` in the cron delivery schema, completing support for these channels in scheduled tasks.
*   **[PR #8872]** Corrected ZeroCode TUI to use the runtime profile’s `max_context_tokens` for accurate context metering.
*   **[PR #8873]** Implemented UTF-8-safe stdin capping in exit prompts and audit trails, resolving recurring byte-truncation bugs.
*   **[RFC #6808]** Accepted governance RFC regarding Work Lanes, Board Automation, and Label Cleanup, streamlining maintenance workflows.

**Active Advancements:**
*   **Security Trilogy:** Completion of the image_gen SSRF fix with Layer 3 (DNS rebinding check) in **[PR #8827]**.
*   **Plugin Ecosystem:** Significant progress on unified capability catalogs and gateway/dashboard integration (**[PR #8909]**, **[Issue #8907]**).
*   **Channel Parity:** Advancement of Discord interaction-surface parity and Matrix single-message drafts (**[Issue #7831]**, **[PR #8443]**).

### 4. Community Hot Topics
*   **[Issue #5862] zeroclaw does not know it can add cron.** (13 comments)
    *   *Analysis:* Users are confused by the agent's inability to autonomously discover or invoke cron capabilities despite their availability. This highlights a gap in agent self-awareness and tool discovery logic.
*   **[Issue #6808] RFC: Work Lanes, Board Automation, and Label Cleanup.** (13 comments)
    *   *Analysis:* High engagement on governance indicates a strong community desire for transparent, automated maintenance processes to reduce contributor friction.
*   **[Issue #6699] tool_filter_groups is a no-op for real MCP tools.** (9 comments)
    *   *Analysis:* Critical technical debt identified where configuration filters fail for specific tool types, affecting security and operational control for advanced users.

### 5. Bugs & Stability
**High Severity / Critical Fixes:**
*   **[PR #8827] & [PR #8826]: SSRF Vulnerabilities.** Fixed Server-Side Request Forgiveness risks in `image_gen` (Layer 1-3 checks) and `file_download` (allowed private hosts opt-in). These address findings from the 2026-07-03 internal security audit.
*   **[Issue #5903] / [PR #8866] MCP Process Leak.** Resolved a bug where `heartbeat.enabled=true` caused stdio MCP child processes to accumulate and leak. PR #8866 implements a shared MCP registry to fix this.
*   **[Issue #8044] / Closed.** Hardened `/model` agent scope with per-sender authorization, preventing unauthorized model switching by any user in chat channels.
*   **[Issue #6517] Context Overflow Hallucination.** Reported issue where long conversations cause topic drift; currently blocked/needs repro.

**Medium/Low Severity:**
*   **[Issue #6558] Provider Errors.** Qwen3.5-plus returning 405 errors; likely configuration or API-side issue.
*   **[Issue #8578] Startup Failure.** Process does not terminate cleanly on startup failure in ZeroCode.
*   **[Issue #8871] Rate Limiting.** Task to handle third-party API 429 responses explicitly.

### 6. Feature Requests & Roadmap Signals
*   **[Issue #8550] OpenAI-Compatible Chat Endpoint.** Request to expose a standard OpenAI-compatible `/chat/completions` endpoint to allow integration with clients like Open WebUI and LobeChat without custom wrappers.
*   **[Issue #5287] Local-First Mode.** Demand for a compact mode for small/local models that removes prompt bloat, disables permissive fallbacks, and prevents internal instruction leakage.
*   **[Issue #8919] ZeroCode Right-Click Menu.** UX improvement request for a context menu in the TUI, specifically for copying messages/code blocks.
*   **[Issue #8923] Host-Mediated Outbound TCP/TLS.** Enhancement for channel plugins to allow outbound raw TCP connections mediated by the host, expanding plugin capabilities.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Agent Discovery:** Users expect the agent to "know" available tools (like cron) without explicit prompting or configuration hints.
    *   **Configuration Visibility:** Issues with config warnings pointing to migration tools without showing the actual parse error (**[Issue #8875]**) frustrate operators trying to debug YAML/TOML files.
    *   **Timeouts:** Anthropic provider failures due to fixed timeouts on long-running turns (**[Issue #8762]**) disrupt complex reasoning tasks.
*   **Satisfaction:**
    *   Positive reception of security hardening efforts (SSRF fixes).
    *   Appreciation for detailed RFCs and transparent roadmap tracking (e.g., v0.9.0 auth/security tracker).
    *   Users value the rapid response to critical stability issues like MCP process leaks.

### 8. Backlog Watch
*   **[Issue #6672] Reasoning Content Loss.** *Status: Blocked.* Xiaomi thinking mode models (mimo-v2.5) are losing `reasoning_content` between turns. This is a high-risk data loss issue for models relying on chain-of-thought persistence.
*   **[Issue #6034] User Message Loss.** *Status: Closed/Accepted.* Previously reported loss of user messages in single/multi-turn dialogs; requires verification if fully resolved across all providers.
*   **[Issue #8915] Missing Observer Events.** *Status: In-Progress.* `agent_start`/`agent_end` events are not emitted for channel-process messages, breaking observability hooks for Telegram/Discord/Slack integrations.
*   **[Issue #8871] Explicit 429 Handling.** *Status: Open.* Needs identification of the specific API boundary to implement proper rate-limit handling rather than generic retries.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*