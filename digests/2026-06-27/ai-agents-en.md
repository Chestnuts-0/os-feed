# OpenClaw Ecosystem Digest 2026-06-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-27 02:10 UTC

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
**Date:** 2026-06-27

## 1. Today's Overview
OpenClaw exhibits extremely high activity levels with 500 issues and 500 pull requests updated in the last 24 hours, indicating a period of intense maintenance and rapid iteration. Although no new official releases were published today, the volume of merged and closed PRs (55) suggests significant progress in stabilizing recent betas and addressing critical regressions. The community is actively engaging with security enhancements, platform expansion (Linux/Windows), and tool reliability improvements. Maintainers are heavily involved in reviewing complex security and session-state related contributions.

## 2. Releases
**No new releases were published today.**
*   **Note:** Several issues reference recent versions like `2026.4.29`, `2026.5.4`, and `2026.4.30-beta.1`, suggesting the current stable or beta cycle is undergoing heavy stress-testing and bug fixing prior to the next major version bump.

## 3. Project Progress
**Key Merged/Closed Activities (Last 24h):**
*   **Security & Robustness:** Multiple PRs focused on bounding SSE response reads to prevent resource exhaustion (#97147, #97146, #97071, #97070).
*   **Platform Fixes:** Resolved Feishu multi-bot group mention stripping issues (#95387, #96756) and improved formatting for Feishu posts (#97080).
*   **CLI & Daemon:** Fixed `openclaw daemon restart --safe --wait 0` behavior (#95396) and addressed `doctor --fix` scaffolding issues (#95385).
*   **Agent Core:** Implemented handling for truncated tool calls to prevent partial execution (#97140) and improved session history paging for parent agents (#97101).
*   **Documentation:** Simplified macOS app overview (#97120) and added tokenomics plugin documentation (#97149).

## 4. Community Hot Topics
**Top Issues by Engagement:**

1.  **[Enhancement] Linux/Windows Clawdbot Apps (#75)**
    *   **Comments:** 109 | 👍: 81
    *   **Analysis:** High demand for cross-platform desktop clients. Users are frustrated by the lack of parity with macOS/iOS/Android apps. This is a critical barrier to broader adoption.
    *   [Link](https://github.com/openclaw/openclaw/issues/75)

2.  **[Enhancement] Prebuilt Android APK releases (#9443)**
    *   **Comments:** 25
    *   **Analysis:** Users want easier distribution channels for the Android companion app rather than building from source.
    *   [Link](https://github.com/openclaw/openclaw/issues/9443)

3.  **[Observational] Track live dev agent behavior and trajectory (#77598)**
    *   **Comments:** 22
    *   **Analysis:** Indicates deep engagement with agent autonomy and observability. The community is interested in how agents behave over long periods without intervention.
    *   [Link](https://github.com/openclaw/openclaw/issues/77598)

4.  **[Bug] Session write-lock timeouts block subagent delivery lanes (#86538)**
    *   **Comments:** 16
    *   **Analysis:** Highlights stability concerns with subagent orchestration and session management under load.
    *   [Link](https://github.com/openclaw/openclaw/issues/86538)

5.  **[Enhancement] Slack Block Kit support (#12602)**
    *   **Comments:** 13
    *   **Analysis:** Desire for richer UI interactions in Slack, moving beyond plain text to interactive cards and buttons.
    *   [Link](https://github.com/openclaw/openclaw/issues/12602)

## 5. Bugs & Stability
**Critical & High-Severity Issues Reported/Fixed:**

*   **[Regression] Clean install of new versions since 2026.5.xx is not possible (#76042)**
    *   **Status:** Open | **Severity:** P1 | **Impact:** Crash-loop/Install failure.
    *   **Details:** Users report inability to start recent versions within normal timeframes, suggesting severe performance or initialization regressions.
    *   [Link](https://github.com/openclaw/openclaw/issues/76042)

*   **[Bug] Discord channel not loaded in 2026.5.4 (#77930)**
    *   **Status:** Open | **Severity:** P2 | **Impact:** Message loss/Channel connectivity.
    *   **Details:** Regression affecting Discord integration stability.
    *   [Link](https://github.com/openclaw/openclaw/issues/77930)

*   **[Bug] Native Anthropic path: replaying historical `thinking` blocks bricks long tool-use threads (#94228)**
    *   **Status:** Open | **Severity:** P1 | **Impact:** Session brick/Invalid signature errors.
    *   **Details:** Critical bug for Anthropic API users involving long-running tool-use sessions.
    *   [Link](https://github.com/openclaw/openclaw/issues/94228)

*   **[Bug] Gateway lazy-spawns duplicate stdio MCP children (#75621)**
    *   **Status:** Closed (Stale) | **Severity:** P1 | **Impact:** Memory/CPU leak.
    *   **Details:** Fixed but indicates ongoing challenges with MCP process management.
    *   [Link](https://github.com/openclaw/openclaw/issues/75621)

*   **[Bug] Stuck Session Recovery 机制双重失效 (#76038)**
    *   **Status:** Open | **Severity:** P1 | **Impact:** Gateway unresponsiveness.
    *   **Details:** Complex session recovery failure leading to system hangs.
    *   [Link](https://github.com/openclaw/openclaw/issues/76038)

## 6. Feature Requests & Roadmap Signals
**Prominent User-Requested Features:**

1.  **Masked Secrets (#10659):** Request for a system where agents can use API keys without seeing raw values, enhancing security against prompt injection.
2.  **Channel-mediated approval for MCP tool calls (#78308):** Extending the existing approval pipeline to MCP tools, crucial for safety in external integrations.
3.  **Pre-response enforcement hooks (#13583):** Hard gates for mandatory tool calls before responding, aimed at high-stakes domains like finance/security.
4.  **Memory Trust Tagging by Source (#7707):** Tagging memory entries by origin to prevent poisoning attacks from untrusted sources.
5.  **Webhook Multi-turn Support (#11665):** Fixing/enabling `sessionKey` consistency for webhooks to support true multi-turn conversations.
6.  **Backup/Restore Utility (#13616):** Standardized disaster recovery for configs, cron jobs, and session history.

**Prediction:** Security-focused features (Masked Secrets, Trust Tagging, MCP Approval) are likely prioritized in upcoming releases due to high community concern and multiple related PRs.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Installation/Startup Performance:** Significant complaints about slow startup and install failures in recent versions (#76042, #76171).
    *   **Platform Gaps:** Strong desire for Linux/Windows desktop apps (#75) and prebuilt Android APKs (#9443).
    *   **Session Management:** Frustration with session locks, timeouts, and recovery failures (#86538, #76038).
    *   **Token Overhead:** Users are concerned about the fixed token cost of loading tool schemas (~3,500 tokens/session) (#14785).
*   **Satisfaction Drivers:**
    *   **Security Enhancements:** Positive reception for features like masked secrets and capability-based permissions.
    *   **Integration Depth:** Requests for richer integrations (Slack Block Kit, WhatsApp stickers, Feishu improvements) show users are deeply integrating OpenClaw into their workflows.

## 8. Backlog Watch
**Items Requiring Maintainer Attention:**

1.  **[Bug] Session write-lock timeouts block subagent delivery lanes (#86538)**
    *   **Tags:** P1, Needs Live Repro, Diamond Lobster.
    *   **Risk:** High impact on multi-agent reliability.
    *   [Link](https://github.com/openclaw/openclaw/issues/86538)

2.  **[Bug] Gateway pairing scope deadlock (#74484)**
    *   **Tags:** P1, Platinum Hermit, Needs Live Repro.
    *   **Risk:** Blocks CLI administration and device pairing.
    *   [Link](https://github.com/openclaw/openclaw/issues/74484)

3.  **[Bug] AM embedded run aborts memory_search tool calls (#74586)**
    *   **Tags:** P1, Platinum Hermit, Regression.
    *   **Risk:** Disrupts memory functionality for active users.
    *   [Link](https://github.com/openclaw/openclaw/issues/74586)

4.  **[Enhancement] Fully dynamic model discovery (#10687)**
    *   **Tags:** P2, Diamond Lobster.
    *   **Need:** Essential for providers like OpenRouter with rapidly changing catalogs.
    *   [Link](https://github.com/openclaw/openclaw/issues/10687)

5.  **[Security] macOS TCC Permissions Scoping (#69799)**
    *   **Tags:** P1, Platinum Hermit, Security.
    *   **Need:** Critical for macOS user privacy and security best practices.
    *   [Link](https://github.com/openclaw/openclaw/issues/69799)

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-06-27
**Analyst:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The open-source personal AI agent landscape in mid-2026 is characterized by a shift from basic chat interfaces to complex, multi-agent orchestration systems with robust security and cross-platform availability. Projects like OpenClaw and IronClaw are driving the industry toward standardized security protocols (masked secrets, capability policies) and decentralized agent-to-agent communication (A2A). Meanwhile, lighter-weight solutions like NanoBot and Moltis focus on modularity and specific verticals like browser automation, reflecting a market demand for specialized, efficient tooling rather than monolithic applications. The ecosystem is currently in a critical stabilization phase, with major players releasing beta versions that address long-standing issues in context management, session persistence, and cross-platform compatibility.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | No new release (Beta stress-test) | High |
| **Hermes Agent** | 50 | 50 | No new release | Medium-High |
| **CoPaw** | 29 | 50 | **v2.0.0-beta.1** (Major Migration) | High |
| **IronClaw** | 30 | 50 | No new release | Medium-High |
| **ZeroClaw** | 50 | 50 | **v0.8.2** (A2A/Skills Update) | High |
| **LobsterAI** | N/A | 8 | **v2026.6.26** | Medium |
| **NanoBot** | 20 | 42 | No new release (Pre-release) | Medium |
| **PicoClaw** | 5 | 14 | No new release | Low-Medium |
| **NanoClaw** | 3 | 11 | No new release | Low |
| **NullClaw** | 1 | 0 | None (Stalled) | Low |
| **Moltis** | 0 | 1 | None | Low |
| **TinyClaw** | 0 | 0 | None | Inactive |
| **ZeptoClaw** | 0 | 0 | None | Inactive |

*\*Health Score based on activity volume, issue resolution rate, and community engagement intensity.*

## 3. OpenClaw's Position
OpenClaw dominates the ecosystem in terms of sheer development velocity and community engagement, with 500 issues and PRs updated in 24 hours—far exceeding any peer. Its technical approach is heavily focused on **security-hardening** (bounding SSE reads, masked secrets) and **cross-platform parity** (Linux/Windows desktop apps), positioning it as the enterprise-grade standard. Unlike NanoBot or Moltis, which emphasize lightweight or specific utility functions, OpenClaw is building a comprehensive agent operating system with deep integration capabilities (Feishu, Slack, Discord). However, its massive issue backlog suggests that while it leads in activity, it faces significant stability challenges compared to the more contained scope of projects like ZeroClaw or PicoClaw.

## 4. Shared Technical Focus Areas
Several critical requirements are emerging across multiple projects, indicating industry-wide consensus on next-generation agent needs:

*   **Security & Supply Chain Integrity:**
    *   **Projects:** OpenClaw, ZeroClaw, IronClaw, CoPaw.
    *   **Specific Needs:** Masked secrets for API keys (OpenClaw), SLSA provenance and SBOM generation (ZeroClaw), capability-based access control (IronClaw), and plugin dependency isolation (CoPaw).
*   **Context & Memory Management:**
    *   **Projects:** OpenClaw, Hermes Agent, LobsterAI, ZeroClaw.
    *   **Specific Needs:** Robust session recovery mechanisms, prevention of context leakage in cron jobs (NanoBot), and accurate cost tracking for long-running sessions (ZeroClaw).
*   **Cross-Platform & Mobile Stability:**
    *   **Projects:** OpenClaw, NanoBot, PicoClaw, LobsterAI.
    *   **Specific Needs:** Reliable Windows/Linux desktop clients, Android service stability, and consistent shell/command execution across OS environments.
*   **Multi-Agent Orchestration:**
    *   **Projects:** IronClaw, LobsterAI, ZeroClaw, CoPaw.
    *   **Specific Needs:** Agent delegation, hierarchical management (Manager/Worker patterns), and A2A discovery protocols.

## 5. Differentiation Analysis
*   **Feature Focus:**
    *   **OpenClaw/IronClaw:** Broad, all-in-one platforms with heavy emphasis on security policies and multi-channel integration.
    *   **NanoBot/Moltis:** Specialized utilities; NanoBot focuses on lightweight plugin extensibility and TTS, while Moltis targets browser automation observability.
    *   **ZeroClaw:** Focuses on governance, supply chain security, and A2A interoperability standards.
    *   **CoPaw:** Centered on the Agentscope 2.0 migration, emphasizing desktop UX and plugin ecosystem stability.
*   **Target Users:**
    *   **Enterprise/Power Users:** OpenClaw, IronClaw, ZeroClaw (due to security/governance features).
    *   **Developers/Integrators:** NanoBot, Moltis (modular, API-first approaches).
    *   **General Consumers:** LobsterAI, CoPaw (focus on UI/UX and ease of use).
*   **Technical Architecture:**
    *   **OpenClaw:** Monolithic core with extensive plugin/bridge support.
    *   **NanoBot:** Modular, plugin-driven architecture with a focus on cost optimization.
    *   **ZeroClaw:** Distributed, A2A-native design with strong emphasis on cryptographic signing.
    *   **CoPaw:** Desktop-first (Tauri/Electron) with a backend tightly coupled to Agentscope 2.0.

## 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Velocity):** **OpenClaw**, **CoPaw**, **IronClaw**, **ZeroClaw**. These projects are in active development cycles, releasing frequent updates and addressing critical bugs. CoPaw is particularly notable for its major version migration (v2.0.0-beta.1), indicating a pivotal moment in its maturity.
*   **Stabilizing (Moderate Velocity):** **NanoBot**, **LobsterAI**, **PicoClaw**, **Hermes Agent**. These projects are focusing on refining existing features, fixing platform-specific bugs (especially Windows/Android), and improving user experience. LobsterAI’s recent release suggests it is moving from beta to a more stable state.
*   **Maintaining/Declining (Low Velocity):** **NanoClaw**, **NullClaw**, **Moltis**, **TinyClaw**, **ZeptoClaw**. These projects show minimal recent activity, suggesting they are either in maintenance mode, struggling with development resources, or serving niche use cases with smaller communities.

## 7. Trend Signals
*   **Shift to Security-First Design:** The prominence of "masked secrets," "capability policies," and "supply chain signing" across OpenClaw, IronClaw, and ZeroClaw indicates that security is no longer an afterthought but a core architectural requirement for personal AI agents. Developers must prioritize secure credential handling and role-based access control.
*   **Standardization of Multi-Agent Communication:** ZeroClaw’s release of A2A discovery features and IronClaw’s focus on hierarchical agent management signal a trend toward standardized, interoperable multi-agent systems. This will likely drive demand for open protocols like A2A and MCP.
*   **Desktop & Mobile Parity as a Barrier to Entry:** The high demand for Linux/Windows desktop apps (OpenClaw) and stable Android services (NanoBot, PicoClaw) shows that mobile and cross-platform accessibility are critical for mainstream adoption. Projects lacking these features risk stagnation.
*   **Cost Optimization Through Model Routing:** Features like "per-session model presets" (NanoBot), "smart model routing" (Hermes Agent), and "cost tracking" (ZeroClaw) highlight the economic pressure on users. Agents that can dynamically select cheaper models for routine tasks will gain a competitive advantage.
*   **Observability and Debugging:** The rise of visual debugging (Moltis), context window visibility (ZeroClaw), and session recovery tools (OpenClaw) reflects the increasing complexity of agent workflows. Future tools must provide transparent, real-time insights into agent decision-making and resource usage.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-06-27
**Source:** github.com/HKUDS/nanobot

### 1. Today's Overview
NanoBot experienced a surge of development activity on June 27, 2026, with 42 pull requests updated and 20 issues addressed in the last 24 hours. The project remains in a pre-release phase with no new official version tags issued, focusing heavily on stabilizing core infrastructure and expanding extensibility. Key efforts centered on fixing critical Windows-specific bugs, enhancing the heartbeat subsystem, and implementing a robust plugin architecture. The high volume of merged and open PRs indicates strong contributor engagement and rapid iteration on recent feature requests.

### 2. Releases
*   **No new releases.**
*   *Note:* While no version tag was pushed, several significant features (TTS, Plugin System, Agent Delegation) have been merged into the main branch via PRs #4560, #4558, and #4559. Users seeking these features should monitor for an upcoming release candidate.

### 3. Project Progress
Significant advancements were made in extensibility, cross-platform stability, and performance optimization:
*   **Plugin System:** PR #4558 introduced a foundational plugin system allowing users to extend agent functionality via `plugin.json` manifests.
*   **Agent Delegation:** PR #4559 enabled the `agent_delegate` tool, allowing Nanobot to offload tasks to external AI CLIs like Claude Code or Codex.
*   **Text-to-Speech:** PR #4560 added native TTS support using `edge-tts`, `espeak-ng`, and platform-specific APIs.
*   **Web Fetching:** PR #4561 integrated Crawl4AI as an optional, more reliable web extraction backend.
*   **Performance:** PR #4557 optimized tool scheduling to trust LLM parallel tool calls, moving away from strict serialization.
*   **Windows Stability:** PRs #4546, #4547, and #4545 resolved critical issues with background execution, PID tracking, and shell consistency (`cmd.exe` vs. `PowerShell`) on Windows.

### 4. Community Hot Topics
The community is actively discussing architectural flexibility and resource optimization:
*   **Plugin Extensibility (Issue #2231 / PR #4558):** High interest in a Copilot-like plugin ecosystem. *Underlying Need:* Users want to modularize their AI assistants without forking the codebase.
*   **Model Cost Optimization (Issue #4431 / PR #4549):** Requests for specific model overrides for low-value tasks like heartbeats. *Underlying Need:* Reducing API costs by using cheaper/faster models for routine checks.
*   **Cross-Platform Shell Consistency (Issue #4544 / PR #4545):** Frustration with inconsistent command execution between `cmd.exe` and PowerShell on Windows. *Underlying Need:* Reliable cross-platform scripting capabilities for agents.
*   **Privacy/Context Isolation (Issue #4082 / PR #4550):** Concerns about cron jobs leaking context across runs. *Underlying Need:* Deterministic behavior for scheduled tasks.

### 5. Bugs & Stability
Several critical bugs, particularly affecting Windows users, were identified and addressed:
1.  **Windows Service Restart Failure (Issue #4513):** `/restart` command failed or caused loops under NSSM/Winsw due to `os.execv` behavior. **Fixed in PR #4546.**
2.  **Gateway PID Stale State (Issue #4511):** Background gateway process files retained old PIDs after restart. **Fixed in PR #4547.**
3.  **Inconsistent Shell Semantics (Issue #4544):** Single-line commands used `cmd.exe`, multi-line used `PowerShell`, causing cross-drive `cd` failures. **Fixed in PR #4545.**
4.  **Security: Command Injection in Exec Tool (Issue #4521 referenced in PR #4562):** `allowPatterns` regex bypass via chained commands. **Fixed in PR #4562.**
5.  **Telegram Web Rendering (Issue #4539):** Messages not rendering correctly on Telegram Web. **Status:** Closed, likely resolved in recent updates.

### 6. Feature Requests & Roadmap Signals
*   **Likely Next Version Features:**
    *   **Per-Session Model Presets (Issue #4253 / PR #4555):** Allows switching models per conversation (e.g., fast vs. private).
    *   **Reasoning Effort Escalation (Issue #4419 / PR #4552):** Dynamic adjustment of model "thinking" depth based on task complexity.
    *   **Clarification Tools (Issue #4508):** `ask_clarification` tool to handle ambiguous user inputs proactively.
    *   **Dream Model Overrides (Issue #4029 / PR #4556):** Allowing different models for memory consolidation tasks.
*   **Future Signals:**
    *   **External Agent Integration:** Strong demand for integrating with Opencode/Codex (Issue #3436).
    *   **Voice Output:** Growing interest in closing the voice loop beyond just input (Issue #4010).

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Dependency Bloat:** Users criticize the inclusion of Node.js in an "ultra-lightweight" Python project (Issue #660).
    *   **Windows UX:** Inconsistent shell handling and service manager compatibility issues have caused significant friction for Windows users.
    *   **Context Leakage:** Cron jobs and heartbeats sharing unexpected session contexts have led to confused agent behavior.
*   **Satisfaction:**
    *   Positive reception for the move toward modularity (Plugins) and cost-saving measures (Model overrides for heartbeats).
    *   Appreciation for fixing the "serial tool execution" bottleneck, improving agent speed.

### 8. Backlog Watch
Maintainers should prioritize addressing these long-standing or high-impact issues:
1.  **Dependency Architecture (Issue #660):** [Link](https://github.com/HKUDS/nanobot/issues/660) - 5 👍, 12 comments. The contradiction between "lightweight" branding and Node.js/Python dual dependency needs a strategic decision or documentation clarification.
2.  **Heartbeat Session Isolation (Issue #1899):** [Link](https://github.com/HKUDS/nanobot/issues/1899) - Users expect heartbeat tasks to behave more like main sessions or have configurable isolation.
3.  **Tool Scheduling Trust (Issue #3096):** [Link](https://github.com/HKUDS/nanobot/issues/3096) - While PR #4557 addresses this, ensuring the LLM's parallel tool call logic is robust remains a key stability check.
4.  **Security Validation (Issue #4521 referenced in PR #4562):** [Link](https://github.com/HKUDS/nanobot/pull/4562) - Ensure the new shell segmentation logic covers all edge cases for command injection.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest**
**Date:** 2026-06-27

### 1. Today's Overview
The Hermes Agent project exhibits high development velocity with 50 issues and 50 pull requests updated in the last 24 hours. While no new releases were published, the maintainers are actively addressing critical stability regressions, particularly regarding context compression, Windows desktop client stability, and gateway security hardening. The community is heavily engaged in reporting bugs related to local inference providers (Ollama/MLX) and requesting UI/UX improvements for the desktop and CLI experiences.

### 2. Releases
*   **No new releases** were published on this date.

### 3. Project Progress
Several key technical improvements and fixes are currently in progress or recently merged:
*   **Desktop Build Stability:** PR [#53241](https://github.com/NousResearch/hermes-agent/pull/53241) addresses Electron main process bundling issues to prevent overwriting tracked sources during updates.
*   **Security Hardening:** PR [#13176](https://github.com/NousResearch/hermes-agent/pull/13176) significantly reduces the attack surface of the web dashboard when bound to non-localhost interfaces.
*   **Gateway Notifications:** PR [#53334](https://github.com/NousResearch/hermes-agent/pull/53334) fixes information leakage by sanitizing raw error texts in compression-failure and background-task notifications.
*   **Signal Integration:** PR [#53348](https://github.com/NousResearch/hermes-agent/pull/53348) brings Signal group functionality to parity with Telegram/WhatsApp, improving ownership detection and authorization.
*   **Video Analysis Fix:** PR [#37225](https://github.com/NousResearch/hermes-agent/pull/37225) corrects video handling for providers using Anthropic's API format (Minimax, Bedrock).

### 4. Community Hot Topics
*   **Context Compaction Reliability:** High engagement around issues where context compression causes data loss or state corruption. See [#29522](https://github.com/NousResearch/hermes-agent/issues/29522) (closed) and [#28093](https://github.com/NousResearch/hermes-agent/issues/28093) (closed). Users are demanding robust handling of concurrent messages during compression.
*   **Local Inference Pain Points:** Significant discussion around local providers. Issue [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) highlights a destructive loop with MLX/oMLX providers misclassifying resource errors. Issue [#46131](https://github.com/NousResearch/hermes-agent/issues/46131) addresses empty responses from Ollama reasoning models.
*   **Windows Desktop Instability:** Recent reports indicate severe UI/UX blockers on Windows, specifically flickering terminal windows ([#53342](https://github.com/NousResearch/hermes-agent/issues/53342)) and garbled text ([#53367](https://github.com/NousResearch/hermes-agent/issues/53367)).

### 5. Bugs & Stability
Ranked by severity and impact:
1.  **Critical: Windows Desktop Flickering ([#53342](https://github.com/NousResearch/hermes-agent/issues/53342)):** The desktop client on Windows 11 is rendered unusable due to constant black command prompt flickering.
2.  **High: Destructive Context Compression Loop ([#52261](https://github.com/NousResearch/hermes-agent/issues/52261)):** Local inference providers returning 400 resource errors are misclassified as context overflows, triggering infinite compress/reset loops.
3.  **High: `hermes update` Dependency Pruning ([#43564](https://github.com/NousResearch/hermes-agent/issues/43564)):** The CLI update command can inadvertently remove the `agent-browser` dependency, breaking local browser tools despite a successful update report.
4.  **Medium: VS Code ACP Session Hang ([#20250](https://github.com/NousResearch/hermes-agent/issues/20250)):** Repeated compression timeouts leave VS Code ACP sessions in-flight indefinitely.
5.  **Medium: Discord Gateway Thread Routing ([#24100](https://github.com/NousResearch/hermes-agent/issues/24100)):** Stale environment variables cause command approval prompts to route to the wrong Discord thread.

### 6. Feature Requests & Roadmap Signals
*   **Per-Directory Agent Identity ([#53349](https://github.com/NousResearch/hermes-agent/issues/53349)):** Request to support `soul.md` in the current working directory, allowing project-specific personas rather than a global profile identity.
*   **Direct Shell Passthrough ([#53341](https://github.com/NousResearch/hermes-agent/issues/53341)):** Users want a `!` prefix in the CLI to bypass the LLM agent loop for instant shell command execution, reducing latency and token costs.
*   **Vestige Memory Provider ([#53320](https://github.com/NousResearch/hermes-agent/issues/53320)):** Community contribution to integrate "Vestige" as a memory backend.
*   **Smart Model Routing ([#46285](https://github.com/NousResearch/hermes-agent/issues/46285)):** Request for a plugin-based approach to automatically route tasks to the most cost-effective or capable model.

### 7. User Feedback Summary
*   **Frustration with Update Mechanisms:** Users report that `hermes update` is fragile, often breaking local dependencies (browser tools) or getting stuck in recovery loops on Windows due to dirty git states ([#38122](https://github.com/NousResearch/hermes-agent/issues/38122), [#43564](https://github.com/NousResearch/hermes-agent/issues/43564)).
*   **Desire for Granular Control:** There is a strong demand for better control over what data is sent to the LLM, such as disabling `hermes.tool.progress` events ([#12020](https://github.com/NousResearch/hermes-agent/issues/12020)) and managing provider-specific settings directly in the Desktop GUI ([#39020](https://github.com/NousResearch/hermes-agent/issues/39020)).
*   **Local Inference Barriers:** Users running local models (LLaMA, Qwen) via Ollama/MLX are hitting significant walls with empty responses or resource mismanagement, indicating a need for better local provider error handling.

### 8. Backlog Watch
*   **Skills Index Degradation ([#38240](https://github.com/NousResearch/hermes-agent/issues/38240):** An automated probe indicates the skills index is stale/degraded. This affects the discoverability and functionality of community skills.
*   **NetEase IM Integration ([#13062](https://github.com/NousResearch/hermes-agent/pull/13062):** A major feature addition for the Chinese market (NIM channel) is still open and requires review.
*   **Chinese Tokenization for Search ([#13089](https://github.com/NousResearch/hermes-agent/pull/13089):** Opt-in Chinese tokenization for FTS5 search is pending, impacting search quality for non-English users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-06-27
**Source:** GitHub Activity Analysis

## 1. Today's Overview
PicoClaw exhibited moderate-to-high development velocity on June 27, 2026, with significant maintenance activity focused on dependency updates and code hygiene rather than major feature releases. The team addressed 14 merged/closed Pull Requests and handled 5 new issues, indicating a responsive community and active bug-fixing cycle. No new official releases were published during this period, suggesting the current focus is on stabilizing the existing codebase and preparing for future updates through incremental improvements like Alpine image bumps and SDK upgrades.

## 2. Releases
*   **No new releases.**
*   *Note:* Several dependencies were updated via automated PRs (see Project Progress), including `alpine:3.23` base images, `telego` to v1.10.0, and `sqlite` to v1.53.0.

## 3. Project Progress
The majority of today's progress involved **Chores**, **Dependency Updates**, and **Code Hygiene**:

*   **Dependency Upgrades (Merged/Closed):**
    *   **GitHub Copilot SDK:** Bumped from `0.2.0` to `1.0.4` (#3177).
    *   **Telegram Library:** `mymmrac/telego` upgraded to `1.10.0` (#3176).
    *   **SQLite:** `modernc.org/sqlite` upgraded to `1.53.0` (#3173).
    *   **LINE Bot SDK:** `line-bot-sdk-go/v8` upgraded to `8.20.1` (#3174).
    *   **System Tray:** `fyne.io/systray` upgraded to `1.12.2` (#3175).
*   **Infrastructure & Build:**
    *   Docker base images updated to `alpine:3.23` for consistency (#3192).
    *   Configuration cleanup removed duplicate entries in `.gitignore` (#3191).
*   **Localization & UI:**
    *   Synchronized missing translation keys for Bengali (`bn-in`) and Czech (`cs`) locales (#3190).
*   **Code Hygiene (Merged/Closed):**
    *   A series of PRs (#3183–#3189) explicitly handled secondary `resp.Body.Close()` and JSON encoding errors across various channels (OneBot, WhatsApp, Health, Membench) to improve lint compliance and stability.
    *   Gateway startup info assertions were guarded against malformed data (#3181).

## 4. Community Hot Topics
*   **Sub-agent Message Duplication:**
    *   **Issue #3094** ([Closed](https://github.com/sipeed/picoclaw/issues/3094)): Users reported receiving duplicate messages when using asynchronous sub-agents (`spawn`). One message was raw, the other formatted by the main agent. *Status: Fixed.*
*   **WhatsApp Websocket Stability:**
    *   **Issue #3178** ([Open](https://github.com/sipeed/picoclaw/issues/3178)): Reports websocket timeouts on WhatsApp.
    *   **PR #3179** ([Open](https://github.com/sipeed/picoclaw/pull/3179)): Addresses this by implementing reconnection logic and ping/pong handlers. This indicates a strong user need for reliable WhatsApp integration.
*   **Security & Cryptography Modernization:**
    *   **Issue #3088** ([Open](https://github.com/sipeed/picoclaw/issues/3088)): High-priority request to replace the unmaintained `libolm` with `vodozemac` for Signal Protocol support. This highlights community concern over long-term security and maintainability of encryption libraries.

## 5. Bugs & Stability
*   **Android Service Launch Failure:**
    *   **Issue #3182** ([Open](https://github.com/sipeed/picoclaw/issues/3182)): Users cannot launch the service on Android despite having permissions. This suggests potential compatibility issues with newer Android versions or specific Termux configurations.
*   **WhatsApp Timeouts:**
    *   **Issue #3178** ([Open](https://github.com/sipeed/picoclaw/issues/3178)): Intermittent websocket drops causing service interruptions.
*   **Memory Leak/Stability Concerns:**
    *   **Issue #3150** ([Open](https://github.com/sipeed/picoclaw/issues/3150): Reported as "It gave itself amnesia." Likely refers to context loss or memory state issues in long-running sessions.
*   **Mitigation Efforts:**
    *   Multiple PRs (#3183-#3189) fixed non-critical but noisy error logs related to HTTP response body closures, improving overall stability metrics.

## 6. Feature Requests & Roadmap Signals
*   **DeltaChat Integration:**
    *   **PR #3063** ([Open](https://github.com/sipeed/picoclaw/pull/3063)): A new feature branch adding a DeltaChat gateway. This signals an expansion into email-based messaging protocols beyond standard chat apps.
*   **Encryption Library Upgrade:**
    *   The push for `vodozemac` (#3088) suggests a roadmap commitment to modernizing cryptographic dependencies, likely for improved Signal protocol support.
*   **CLI Robustness:**
    *   **PR #3180** ([Open](https://github.com/sipeed/picoclaw/pull/3180)): Improves CLI tool call handling by skipping invalid arguments instead of dropping entire batches, enhancing usability for script-based workflows.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Duplicate Notifications:** The sub-agent spam issue (#3094) was a significant annoyance for users relying on async tasks.
    *   **Platform Specifics:** Android users are facing launch hurdles (#3182), and WhatsApp users are experiencing connectivity drops (#3178).
    *   **Context Retention:** The "amnesia" report (#3150) suggests users are losing trust in the agent's ability to maintain long-term context.
*   **Satisfaction:**
    *   Users appreciate the rapid response to dependency updates and the proactive fixing of the sub-agent bug. The detailed environment reporting in bug templates (e.g., #3178) is helping maintainers diagnose issues faster.

## 8. Backlog Watch
*   **Issue #3150** ([Open](https://github.com/sipeed/picoclaw/issues/3150)): "Amnesia" bug. Requires investigation into session state management or memory limits.
*   **Issue #3088** ([Open](https://github.com/sipeed/picoclaw/issues/3088)): Replace `libolm` with `vodozemac`. High priority for security but requires careful implementation to avoid breaking existing Signal integrations.
*   **Issue #3182** ([Open](https://github.com/sipeed/picoclaw/issues/3182)): Android launch failure. Needs clarification on OS versions and permission handling.
*   **PR #3063** ([Open](https://github.com/sipeed/picoclaw/pull/3063)): DeltaChat gateway. Awaiting review and merge to expand platform support.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-27
**Source:** github.com/qwibitai/nanoclaw

## 1. Today's Overview
NanoClaw is experiencing high contributor engagement with 11 Pull Requests updated in the last 24 hours, indicating a burst of development activity focused on stability, skill expansion, and channel fixes. However, the absence of new releases suggests these changes are still in review or awaiting merge. Community interaction via issues remains low, with only three updates, one of which was a misfiled ticket. The project appears to be in a consolidation phase, refining existing integrations and adding operational utility skills rather than launching major new features.

## 2. Releases
*   **No new releases** were published today.

## 3. Project Progress
Several significant improvements and feature additions are currently in progress or recently merged:
*   **Migration Fixes:** PR #2859 (Closed) addressed a critical database migration crash (`no such column: is_main`) affecting upgrades from v1.1.0 to v2, ensuring smoother transition paths for older installations.
*   **WhatsApp Stability:** PR #2870 (Open) aims to fix a regression where WhatsApp group replies were logged as delivered but never appeared, restoring core functionality for group chats.
*   **Logging Hygiene:** PR #2860 (Open) targets noise reduction by silencing excessive debug logs from `libsignal`, improving log readability for debugging production issues.
*   **New Operational Skills:** A cluster of PRs (#2861–#2866) introduces new capabilities, including environment variable expansion in MCP servers (#2861), stale session rotation for OpenCode and providers (#2864, #2865), and new `/setup-system-digest` and `/manage-agents` commands (#2862, #2863).

## 4. Community Hot Topics
The most discussed topics reflect a need for robustness in multi-channel environments and better administrative tools.

*   **Telegram Markdown Sanitizer Drop:** PR #2866 proposes removing the legacy markdown sanitizer in favor of native `MarkdownV2`. This indicates a community push to align closely with official Telegram API standards to prevent parsing errors.
    *   *Link:* [PR #2866](https://github.com/qwibitai/nanoclaw/pull/2866)
*   **Discord Attachment Handling:** PR #2752 highlights a persistent pain point where inbound Discord attachments (images/text) fail to reach the agent in readable form. This affects user experience significantly for media-heavy workflows.
    *   *Link:* [PR #2752](https://github.com/qwibitai/nanoclaw/pull/2752)
*   **Auto-registration for New Groups:** Issue #1275 remains a long-standing request for better onboarding UX when the bot is added to new Telegram groups, suggesting a need for improved discoverability and setup flows.
    *   *Link:* [Issue #1275](https://github.com/qwibitai/nanoclaw/issues/1275)

## 5. Bugs & Stability
Issues reported or fixed today primarily involve data integrity and channel-specific regressions.

1.  **Database Migration Crash (High Severity):** PR #2859 fixed a crash during v1-to-v2 migration due to missing columns in older databases. This is critical for upgrade stability.
2.  **WhatsApp Group Message Loss (Medium Severity):** PR #2870 addresses a bug where group messages were marked delivered but not persisted. This impacts reliability for group-based automation.
3.  **Skill Update No-Op (Medium Severity):** Issue #2868 reports that `/update-skills` silently fails to refresh adapters for already-installed channels, potentially leaving users on outdated code despite following documentation.
4.  **Log Spam (Low Severity):** PR #2860 reduces verbose logging from `libsignal`, which, while not a functional bug, hinders effective debugging.

## 6. Feature Requests & Roadmap Signals
Contributors are actively pushing features related to **operational management** and **environment configuration**:
*   **System Digests & Agent Management:** PRs #2862 and #2863 introduce `/manage-agents` and `/system-digest` skills. This signals a roadmap direction toward more granular control over agent lifecycles and automated reporting.
*   **MCP Environment Expansion:** PR #2861 expands support for `${VAR_NAME}` references in MCP server environment variables at spawn time, suggesting a focus on flexible deployment configurations.
*   **Session Rotation:** PRs #2864 and #2865 implement logic to rotate stale sessions based on thresholds, indicating an improvement in resource management and connection hygiene.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated with silent failures during skill updates (Issue #2868) and broken attachment handling in Discord (PR #2752). The migration process from v1 to v2 has been rocky, as evidenced by the critical fix in PR #2859.
*   **Satisfaction:** The introduction of new operational skills (`/manage-agents`, `/system-digest`) suggests developers are responding to a need for better administrative visibility. The fix for WhatsApp group delivery will likely improve satisfaction among users relying on multi-party chats.

## 8. Backlog Watch
*   **Long-Unanswered Issue:** Issue #1275 ("Auto-prompt registration when added to new group") has been open since March 2026 with no recent activity. This represents a significant UX gap for new Telegram deployments.
    *   *Link:* [Issue #1275](https://github.com/qwibitai/nanoclaw/issues/1275)
*   **Pending Skill Update Logic:** Issue #2868 regarding the silent no-op behavior of `/update-skills` requires attention to ensure the documentation's advice to "re-run `/add-<channel>`" is either fixed or deprecated in favor of a working update mechanism.
    *   *Link:* [Issue #2868](https://github.com/qwibitai/nanoclaw/issues/2868)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-06-27

### 1. Today's Overview
The NullClaw project exhibits minimal activity over the last 24 hours, with no new pull requests merged and no new releases published. Development momentum appears currently stalled, characterized by a lack of recent commits or community engagement metrics beyond a single lingering issue update. The primary focus for maintainers remains addressing legacy compatibility bugs rather than introducing new features. Overall project health indicators suggest a maintenance phase with low immediate velocity.

### 2. Releases
No new releases were published in the last 24 hours. The latest available version remains **v2026.4.17**.

### 3. Project Progress
There were no pull requests updated, merged, or closed today. Consequently, no new features were advanced, nor were any technical debt items resolved through code contributions during this reporting period.

### 4. Community Hot Topics
*   **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868)**: *Zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat*
    *   **Analysis**: This is the sole active discussion point. The issue highlights a specific environmental conflict between the Zig build system and Android’s restrictive filesystem permissions (Termux/LineageOS). While it has no upvotes, the presence of 3 comments indicates ongoing troubleshooting. The underlying need is cross-platform compatibility, specifically for mobile/embedded environments which may be niche but critical for users of this toolchain.

### 5. Bugs & Stability
*   **[Bug #868](https://github.com/nullclaw/nullclaw/issues/868)**: *Build failure on Android/aarch64*
    *   **Severity**: High (Blocks development/deployment on target platform).
    *   **Status**: Open. No fix PR exists yet.
    *   **Details**: Users attempting to compile NullClaw on Android devices via Termux encounter `AccessDenied` errors when Zig attempts to link temporary files. This suggests a regression or incompatibility in how the build script handles file permissions or symlinks on restricted OS kernels.

### 6. Feature Requests & Roadmap Signals
No new feature requests were logged or discussed today. The focus remains strictly on bug resolution for existing builds. Without new discussions, there are no strong signals indicating upcoming roadmap changes in the immediate term.

### 7. User Feedback Summary
Current user feedback is dominated by environment-specific setup challenges rather than functional dissatisfaction. The report from user `NOTJuangamer10` underscores the pain point of setting up NullClaw in non-standard, permission-restricted environments like Android Termux. Users are likely seeking clearer documentation or build flags that account for these edge cases, though no explicit request for new functionality was noted today.

### 8. Backlog Watch
*   **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868)**: Created on 2026-04-23 and last updated on 2026-06-26. This issue has been open for approximately two months with no resolution. It requires maintainer attention to either patch the Zig build script for Android compatibility or document known limitations for Termux users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-06-27

## 1. Today's Overview
IronClaw demonstrates high velocity with 30 issues and 50 pull requests updated in the last 24 hours, indicating intense development activity focused primarily on the "Reborn" stack. While no new releases were published, significant progress was made on capability policies, WebUI v2 stability, and automated tool approvals. The project is currently balancing critical bug fixes in the Reborn automation engine with foundational security and identity infrastructure updates.

## 2. Releases
**No new releases published today.**

However, PR #5311 indicates a pending release cycle involving dependency bumps:
*   `ironclaw_common`: 0.4.2 -> 0.5.0 (**API Breaking**)
*   `ironclaw_safety`: 0.2.2 -> 0.2.3
*   `ironclaw_skills`: 0.3.0 -> 0.4.0 (**API Breaking**)
*   `ironclaw`: 0.24.0 -> 0.29.1

## 3. Project Progress
*   **Reborn WebUI v2 Enhancements:** PR #5365 fixes the Chat Retry button functionality, ensuring failed messages can be re-sent. PR #5362 removes hardcoded Slack-specific shortcuts in favor of generic channel pairing, paving the way for non-Sack integrations.
*   **Tool Approval UX:** PR #5366 implements the community-requested default change to "Always allow eligible tools," reducing friction for new users. PR #5247 improves discoverability by linking approval cards directly to global settings.
*   **Capability Policy Implementation:** Significant strides were made in Epic #5261. PR #5349 introduces the "availability" dimension for capabilities, and PR #5355 adds the control plane for REST users and admin grants. PR #5270 establishes DB-backed user roles necessary for these admin gates.
*   **Trace Commons:** PR #5280 advances instance-wide enrollment and per-user profile management for trace inspection.

## 4. Community Hot Topics
*   **Automation Reliability & Timeouts:** There is substantial discussion around automation creation failures.
    *   *Issue #5322:* Automation creation may time out before completion.
    *   *Issue #5323:* Runner lease expiration causes automation failures.
    *   *Issue #5200:* Automation requests stop after planning without execution.
    *   *Analysis:* Users require robust, long-running background processes. The current lease and timeout mechanisms are perceived as fragile, prompting requests for better error handling and state persistence.
*   **OAuth & Channel Pairing:**
    *   *Issue #5337:* Wasm-channel OAuth setup fails to seed auth descriptors.
    *   *Issue #5368:* Non-Slack channel pairing is not wired end-to-end.
    *   *Analysis:* Extensibility is a core value proposition. Friction in connecting external services (Gmail, non-Slack channels) hinders adoption for power users seeking multi-platform integration.
*   **Security & Identity:**
    *   *Issue #5272:* REST-created local users and dynamic auth redesign.
    *   *Analysis:* As IronClaw moves toward multi-tenant and admin-controlled deployments, granular access control and secure user provisioning are top priorities for enterprise/internal use cases.

## 5. Bugs & Stability
*   **High Severity / Stability:**
    *   *Issue #5332:* Structural gating bug in `Coverage --all-features` affecting memory isolation tests. This pins a deferred security invariant.
    *   *Issue #5330:* E2E skills-tab tests fail because the harness serves the legacy gateway instead of the v2 SPA, indicating a test environment misconfiguration.
*   **Medium Severity / UX Glitches:**
    *   *Issue #5333:* Composer retains submitted text briefly after sending, causing visual confusion.
    *   *Issue #5192:* Denying a tool approval can still trigger additional approval requests, suggesting state management issues in the approval loop.
    *   *Issue #5196:* "Ask each time" permission fails with authorization errors after approval, creating duplicate flows.
    *   *Issue #5227:* Run failure messages attach to the wrong conversation turn, misleading users about causality.
*   **Low Severity / Visual:**
    *   *Issue #5282:* "Logs" entry incorrectly appears inside the composer during agent generation.

## 6. Feature Requests & Roadmap Signals
*   **Default Auto-Approval:** *Issue #5364 / PR #5366:* Strong user demand to have "Always allow eligible tools" enabled by default to reduce per-call friction. This has been accepted and implemented.
*   **Persistent Multi-Identity Browsing:** *Issue #2355:* An ongoing epic to enable agents to maintain long-lived, authenticated browser sessions via Chrome/CDP with encrypted profile persistence. This signals a roadmap shift towards more autonomous, human-like web interaction.
*   **Timezone-Aware Automations:** *Issue #5319:* Users are confused when automations default to UTC without confirmation. Future updates should enforce explicit timezone selection or local detection.

## 7. User Feedback Summary
*   **Pain Points:** The primary frustration stems from **automation reliability**. Users report that automations either time out, fail due to lease expiration, or stop silently after planning. Additionally, the **tool approval flow** is described as buggy (duplicate prompts, authorization errors), leading to a poor experience for users trying to establish trust with the agent.
*   **Positive Signals:** The community appreciates the focus on **security and identity** (Epic #5261) and the responsiveness to UX improvements like the Retry button fix and default auto-approval.
*   **Satisfaction:** Mixed. While new features are being added rapidly, the stability of the "Reborn" core workflows (automations, approvals) is currently impacting user confidence.

## 8. Backlog Watch
*   **Issue #5221:** *Ironclaw harness backlog — deepseek-v4-flash.* This issue tracks performance and stability issues specific to the DeepSeek-V4-Flash model integration. It has been open since June 25 and requires attention to ensure benchmark scores improve.
*   **Issue #5274:** *Migrate ironclaw_turns runner-lease sidecar CAS loops.* This technical debt item aims to consolidate CAS (Compare-And-Swap) logic into a shared helper. It is critical for preventing race conditions in concurrent runs but has been pending since June 25.
*   **Issue #5315:** *Daily ironclaw failure taxonomy.* While updated daily, this tracking issue highlights systemic fragility in the PinchBench suite. Maintainers should monitor if the "hill-climbing" fixes in PR #5350 successfully stabilize these benchmarks.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-27  
**Source:** GitHub (netease-youdao/LobsterAI)

## 1. Today's Overview
The LobsterAI project demonstrates high velocity with 8 Pull Requests merged and 1 release published within the last 24 hours. Activity is heavily focused on stabilizing the "Cowork" multi-agent environment and upgrading the core OpenClaw runtime. While the development team is actively resolving UI stability issues (specifically Mermaid rendering and skill search interactions), user feedback highlights critical stability bugs in desktop data management and a strong demand for advanced multi-agent orchestration features.

## 2. Releases
**Version:** LobsterAI 2026.6.26  
**Release Date:** 2026-06-26  

**Key Changes:**
*   **Runtime Upgrade:** Upgraded OpenClaw runtime from `v2026.4.14` to `v2026.6.1`, including necessary plugin upgrades and build script adjustments ([PR #2209](https://github.com/netease-youdao/LobsterAI/pull/2209)).
*   **Cowork Enhancements:** Introduced a new "Plan Mode" workflow for multi-agent collaboration ([PR #2183](https://github.com/netease-youdao/LobsterAI/pull/2183)).
*   **Bug Fixes:** Fixed support for the upgraded IM plugin in OpenClaw ([PR #2209](https://github.com/netease-youdao/LobsterAI/pull/2209)).

**Migration Notes:** Users should ensure their environment supports the new OpenClaw runtime dependencies. No explicit breaking changes were noted in the release summary, but the runtime upgrade may affect custom plugins relying on older OpenClaw APIs.

## 3. Project Progress
Today’s merged PRs indicate a strong push towards stabilizing the user interface and backend agent tracking:

*   **UI/UX Stability:** Multiple PRs addressed Mermaid diagram rendering errors, preventing SVG leaks and improving error handling ([PR #2213](https://github.com/netease-youdao/LobsterAI/pull/2213), [PR #2210](https://github.com/netease-youdao/LobsterAI/pull/2210)). Skill search interactions were stabilized to keep popovers open during focus and improve tooltip visibility ([PR #2212](https://github.com/netease-youdao/LobsterAI/pull/2212), [PR #1459](https://github.com/netease-youdao/LobsterAI/pull/1459)).
*   **Agent Orchestration Logic:** Significant work was done to stabilize subagent progress tracking in Cowork. Fixes include persisting terminal subagent durations, correcting stale progress announcements, and deriving progress from local state rather than model text ([PR #2208](https://github.com/netease-youdao/LobsterAI/pull/2208), [PR #2207](https://github.com/netease-youdao/LobsterAI/pull/2207)).
*   **Code Quality:** Import sorting and cleanup were performed to maintain codebase consistency ([PR #2211](https://github.com/netease-youdao/LobsterAI/pull/2211)).

## 4. Community Hot Topics
*   **Multi-Agent Orchestration Demand:**  
    *   **Issue #1462:** A highly commented feature request asking for individual model binding per agent and a "Manager" concept for agent groups. The user explicitly compares LobsterAI favorably to Alibaba's Hiclaw regarding UX, indicating LobsterAI has a competitive edge in usability but lacks advanced coordination features.  
    *   **Link:** [Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462)
*   **Desktop Stability Concerns:**  
    *   **Issue #2214:** A critical bug report detailing a complete application freeze during data backup on Windows 11. This highlights a tension between robust data persistence and UI responsiveness.  
    *   **Link:** [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214)

## 5. Bugs & Stability
*   **Critical: Desktop Backup Freeze**  
    *   **Description:** Clicking "Data Backup" causes the main process to become unresponsive ("White Screen") on Windows 11. Reproducible 100%.  
    *   **Severity:** High.  
    *   **Status:** Open.  
    *   **Link:** [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214)  
    *   **Note:** No fix PR identified yet. This requires immediate attention as it affects data safety workflows.
*   **Resolved: Mermaid Rendering Artifacts**  
    *   **Description:** Failed Mermaid renders were previously leaving hidden/error SVG artifacts in the DOM.  
    *   **Status:** Fixed via [PR #2213](https://github.com/netease-youdao/LobsterAI/pull/2213) and [PR #2210](https://github.com/netease-youdao/LobsterAI/pull/2210).
*   **Resolved: Subagent Progress Staleness**  
    *   **Description:** Subagent progress indicators showed incorrect counts (e.g., displaying 3/5 instead of 5/5) after chat finalization.  
    *   **Status:** Fixed via [PR #2207](https://github.com/netease-youdao/LobsterAI/pull/2207).

## 6. Feature Requests & Roadmap Signals
*   **Granular Model Binding:** Users want the ability to assign specific LLMs to individual agents rather than global settings ([Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462)).
*   **Hierarchical Agent Management:** There is a clear signal for "Team" or "Room" concepts where a Manager Agent dispatches tasks to worker Agents ([Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462)). This aligns with the recent introduction of "Plan Mode" in Cowork.
*   **Enhanced Skill Discoverability:** The merging of Tooltip improvements ([PR #1459](https://github.com/netease-youdao/LobsterAI/pull/1459)) suggests an ongoing roadmap to make skill discovery more intuitive.

## 7. User Feedback Summary
*   **Positive:** Users appreciate the UX of LobsterAI compared to competitors like Hiclaw, particularly in its ease of use for multi-instance IM channel management.
*   **Negative:** The critical freeze during data backup is a major pain point for users with large databases (71.6MB+ WAL files). The reliance on synchronous operations likely blocks the main thread, causing the UI hang.
*   **Neutral/Constructive:** Requests for finer-grained control over agent configurations (model binding) indicate power users are ready to leverage more complex setups if the UI supports it.

## 8. Backlog Watch
*   **Issue #1462 (Feature Request):** Despite being created in April, this issue remains open. It represents a significant architectural shift (Manager/Worker patterns) that should be prioritized given the recent "Plan Mode" additions.
*   **Issue #2214 (Bug):** This is the highest priority item for the immediate next sprint. The crash on backup undermines trust in the tool's reliability for long-term users.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-06-27

### 1. Today's Overview
The Moltis project exhibits low activity levels today, with no new issues opened or closed and no software releases published. Development momentum is currently focused on a single pending pull request (#1135) regarding browser automation enhancements. The codebase remains stable with no reported regressions or critical bugs introduced in the last 24 hours. Maintainer attention is currently required to review the open PR to determine its impact on the core browser module.

### 2. Releases
No new versions were released today. The latest state of the repository reflects the current development branch without a tagged stable release.

### 3. Project Progress
*   **Pull Request #1135 (Open):** A feature enhancement titled "browser: optional auto-screenshot after each action" is currently under review.
    *   **Details:** This PR introduces functionality to automatically capture screenshots after every state-changing browser action. These images are attached to the tool results, enabling chat clients to render a visual timeline of the agent's actions.
    *   **Implementation:** The capture logic is integrated at the `BrowserManager::execute_action` dispatch point within the Rust crate (`crates/browser`).
    *   **Status:** Open since 2026-06-26; awaiting maintainer review.

### 4. Community Hot Topics
*   **PR #1135: Browser Screenshot Automation**
    *   **Link:** [moltis-org/moltis PR #1135](https://github.com/moltis-org/moltis/pull/1135)
    *   **Analysis:** This request highlights a growing need for observability and debugging transparency in AI agent workflows. Users are seeking better visualization tools to understand how agents interact with web environments step-by-step. The focus on "state-changing" actions suggests a desire to minimize storage overhead while maximizing diagnostic utility.

### 5. Bugs & Stability
No bugs, crashes, or stability regressions were reported today. There are zero open issues indicating immediate technical debt or system failures.

### 6. Feature Requests & Roadmap Signals
*   **Visual Debugging for Agents:** The primary signal from today's activity is the strong interest in integrating visual feedback loops into the agent's operation. The proposed screenshot feature in PR #1135 suggests that future roadmap priorities may include enhanced monitoring tools, dashboard integrations, or improved error reporting via visual context.

### 7. User Feedback Summary
There is limited direct user feedback today due to the absence of new issue reports. However, the engagement with PR #1135 indicates that users value granular control over browser interactions and appreciate features that aid in post-mortem analysis of agent behavior. No widespread dissatisfaction was noted.

### 8. Backlog Watch
*   **PR #1135 Review:** While not a long-standing backlog item, this PR requires timely maintainer attention to prevent context switching delays. As it touches core browser execution logic, thorough testing will be necessary before merging to ensure no performance degradation occurs due to frequent I/O operations (screenshots).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-27

## 1. Today's Overview
The CoPaw project (QwenPaw) is experiencing high velocity with 29 issues and 50 pull requests updated in the last 24 hours, driven largely by the recent release of **v2.0.0-beta.1**. Activity is dominated by stability fixes related to the major Agentscope 2.0 migration, including plugin compatibility, desktop startup performance, and process management. While the core codebase is undergoing significant refactoring, community engagement remains strong, with users actively reporting edge-case bugs in channels (WeCom, DingTalk) and model integration issues. The project is in a critical stabilization phase, transitioning from beta features to ensuring robustness for early adopters.

## 2. Releases
*   **v2.0.0-beta.1**: Released today. This is an early beta for QwenPaw 2.0.0.
    *   **Key Change**: Refactored agent core to align with Agentscope 2.0.
    *   **Warning**: Contains breaking changes and potential instability. Not recommended for production.
    *   **Migration Note**: Several official plugins failed to install due to Agentscope 2.x breaking changes (see PR #5568), indicating a need for immediate plugin updates.

## 3. Project Progress
**Merged/Closed PRs (Recent Activity):**
*   **[Merged] feat(models): batch test & batch delete models** (#5297): Added parallel testing and deletion for provider models, improving admin UX.
*   **[Merged] fix(desktop): graceful shutdown endpoint + Tauri lifecycle fix** (#5265): Resolved conflicts with Agentscope 2.0 and improved desktop app shutdown stability.
*   **[Merged] feat: Enable drag-and-drop file upload** (#5436): Implemented direct file drop support in the chat sender area.
*   **[Merged] fix: agentscope 2.0 post-merge bugs (Ponytail cleanup)** (#5440): Fixed `CancelledError` swallowing and cleaned up legacy code.
*   **[Merged] feat: replicate Tauri instant-window startup to pywebview client** (#5153): Optimized desktop startup time by eliminating blocking HTTP waits.

**Open PRs Advancing Features:**
*   **#5577 feat(channels): add opt-in reply aggregation**: Addresses user complaints about message spam by batching multi-step agent responses.
*   **#5569 feat(desktop): eliminate startup white screen**: Introduces a splash screen to improve perceived performance during initialization.
*   **#5570 fix(desktop): stop plugin dep install storm**: Critical fix for memory exhaustion caused by recursive dependency installations on macOS/Desktop.

## 4. Community Hot Topics
*   **Issue #5262 [CLOSED]**: *Built-in skills re-enable after upgrade.* (12 comments)
    *   *Analysis*: High frustration with state persistence across updates. Users expect configuration durability.
*   **Issue #5379 [OPEN]**: *Internal Server Error on Python install startup.* (7 comments)
    *   *Analysis*: A blocker for new users installing via pip; relates to `get_remote_addr` transport issues.
*   **Issue #5563 [OPEN]**: *Multi-step response aggregation.* (5 comments)
    *   *Analysis*: Users find fragmented messages disruptive. The linked PR #5577 directly addresses this by offering opt-in batching.
*   **Issue #5480 [CLOSED]**: *Console long message layout corruption.* (5 comments)
    *   *Analysis*: CSS layout recalculation failure in the web console when switching tabs.

## 5. Bugs & Stability
**High Severity:**
*   **#5550**: *Remote SSH plugin dependency loop & orphaned backend processes.*
    *   **Fix**: PR #5570 is addressing the fork-bomb-like behavior of pip installs and memory leaks.
*   **#5520**: *Browser use stop() leaves Chrome renderer processes running.*
    *   **Fix**: PR #5536 aims to kill orphaned Chrome processes upon stopping browser use agents.
*   **#5379**: *Internal Server Error on startup.*
    *   **Status**: Open, requires investigation into transport layer IP resolution.

**Medium Severity:**
*   **#5401**: *Console crash on sessions with large tool-use history.*
    *   **Root Cause**: Frontend inability to render `type: "data"` content blocks generated by backend.
*   **#5543**: *functionDeclaration schema null type causes third-party relay errors.*
    *   **Fix**: PR #5549 sanitizes nullable tool schemas to ensure compatibility with Gemini-style validators.
*   **#5573**: *DeepSeek V4 thinking mode 400 errors on non-official endpoints.*
    *   **Context**: Streaming `reasoning_content` handling gaps in OpenAI-compatible wrappers.

**Low Severity:**
*   **#5554**: *WeCom file upload leaves bot unresponsive.*
    *   **Fix**: PR #5575 makes no-text debounce configurable to handle media-only messages.
*   **#5561**: *Feishu fails to receive long replies.*
    *   **Workaround**: Users forced to send files instead of text for long outputs.

## 6. Feature Requests & Roadmap Signals
*   **Model Auto-Fallback (#5572)**: Users request automatic switching to backup models when quotas are exhausted or timeouts occur. This is a critical reliability feature for enterprise/production use.
*   **Computer Use Support (#5551)**: Direct question asking if QwenPaw plans to support native computer use (GUI interaction).
*   **Slack Channel Support (#5152)**: Feature request to support local deployment in Slack.
*   **DingTalk @Mention Support (#5564)**: Request for `channels send` to support `atUserIds` to facilitate multi-agent collaboration in DingTalk groups.
*   **GitHub Issue Assistant Skill (#5567)**: A community-created skill to help users format bug reports, indicating a desire for better community contribution workflows.

## 7. User Feedback Summary
*   **Pain Points**:
    *   **Configuration Persistence**: Users are annoyed that disabled skills/re-enable themselves after upgrades (#5262).
    *   **Performance**: Desktop app feels "laggy" in recent versions (#5555), likely due to increased complexity or resource leaks.
    *   **UX Clarity**: File generation via `write_file` lacks streaming feedback, making the UI appear frozen (#4865).
*   **Positive Signals**:
    *   The community is actively contributing fixes (e.g., plugin installation, schema sanitization).
    *   Drag-and-drop and batch model management improvements are well-received.

## 8. Backlog Watch
*   **#5152 [OPEN]**: Slack Channel Support. Created June 12, still open. High demand for enterprise integrations.
*   **#5555 [OPEN]**: "Latest version is getting laggy." No specific technical details provided, but indicates a regression in performance that needs profiling.
*   **#5547 [OPEN]**: How to obtain `sessionId` in plugin tools. Important for users building permission-controlled MCP tools.
*   **#5512 [CLOSED]**: Model provider count discrepancy. Closed but highlights UI/Backend sync issues.

---
*Generated by Agnes-2.0-Flash based on GitHub data from agentscope-ai/CoPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-06-27

## 1. Today's Overview
ZeroClaw maintains high velocity with 50 issues and 50 PRs updated in the last 24 hours, indicating robust community engagement and active development. The project released **v0.8.2**, introducing critical A2A (Agent-to-Agent) discovery capabilities and enhanced skills management. Security and operational stability remain top priorities, evidenced by significant work on supply-chain signing (SLSA) and fixes to runtime shell/tool dispatches. The team is actively addressing long-standing governance RFCs and refining the ZeroCode TUI experience.

## 2. Releases
**Version:** v0.8.2
*   **Key Features:**
    *   **A2A Agent Discovery:** Opens new frontiers for agent-to-agent interoperability.
    *   **Skills Enhancement:** Introduces user-configurable extra registries and typed slash-command options.
*   **Security:** Sharpens security posture across plugins and channels.
*   **Migration Notes:** No major breaking changes noted in the summary, but users should verify plugin compatibility with the new security constraints.

## 3. Project Progress
**Merged/Closed PRs (Last 24h):**
*   **#8146 [CLOSED]** Fixed CLI one-shot telemetry loss and token totals on exit.
*   **#8158 [CLOSED]** Implemented CycloneDX SBOM generation for Rust and npm packages, advancing supply-chain transparency.
*   **Feature Advancements:**
    *   **Multi-Database Sessions (#6893):** Continued work on supporting Postgres, Oracle, MySQL, and Db2 for multi-agent fleets.
    *   **Cost Tracking (#8380, #8233):** Significant progress on offline pricing catalogs and filling unpriced models from live gateway pricing to ensure accurate cost enforcement.
    *   **ACP Elicitation (#8338):** Replaced stop-gap overloads with proper ACP `elicitation/create` JSON-RPC methods for multiple-choice prompts.
    *   **Context Window Visibility (#7946):** Added context usage bars to ZeroCode TUI, Gateway Chat, and CLI.

## 4. Community Hot Topics
*   **#8177 [OPEN] RFC: Supply chain signing** (9 comments) – High interest in hardware-backed PGP keys and SLSA provenance.
*   **#6808 [OPEN] RFC: Work Lanes, Board Automation** (11 comments) – Active discussion on improving maintainer workflow and label cleanup.
*   **#5844 [CLOSED] Bug: Too much emphasis on memory** (7 comments) – Resolution discussed regarding system prompt prioritization.
*   **#6360 [OPEN] Bug: Prompt Caching with Telegram** (4 comments) – Users reporting degraded performance due to cache misses in Telegram channels.
*   **#4879 [CLOSED] Bug: Gemini CLI OAuth** (4 comments, 2 👍) – Critical fix for OAuth failures in Gemini provider.

**Analysis:** The community is deeply engaged in **governance** (workflow automation) and **security/supply chain** integrity. There is also strong feedback regarding **channel-specific bugs** (Telegram caching, Gemini OAuth) that impact daily usability.

## 5. Bugs & Stability
**High Severity Issues:**
*   **#7733 [OPEN] Bug: MCP bundles not enforced at runtime** – Per-agent MCP scoping is a silent no-op, posing a security risk. *Status: Fix PR #8370 exists.*
*   **#8312 [OPEN] Bug: fill-translations leak-repair** – Stale translation entries causing data leakage.
*   **#6434 [CLOSED] Bug: Shell tool calls refused at autonomy level "full"** – Fixed. Tool dispatch was not reaching the runtime despite permissive configs.
*   **#8047 [CLOSED] Bug: ReadSkillTool path mismatch** – Fixed. Tool looked in `data_dir` instead of agent workspace.

**Medium/Low Severity:**
*   **#8366 [OPEN] Bug: Heartbeat engine reads from wrong dir** – Reads `HEARTBEAT.md` from `data_dir` instead of agent workspace.
*   **#7800 [OPEN] Bug: Code help/keybindings misleading on macOS** – UX issue in ZeroCode TUI.
*   **#8275 [OPEN] Bug: Scoop manifest missing zerocode** – Installation packaging issue.

## 6. Feature Requests & Roadmap Signals
*   **Goal Mode (#8303):** Request for a bounded autonomous session mode to pursue user objectives until completion/cancellation. *Likely candidate for v0.8.3.*
*   **WhatsApp Passive Context (#8379):** Opt-in feature to store unaddressed group messages as context without triggering agent turns.
*   **Discord Thread Mode (#7849):** Opt-in mode to create threads on mention to reduce channel noise.
*   **SkillForge Integration (#8309):** Decision needed on whether to wire up the orphaned SkillForge engine or remove it.
*   **ACP Auto-Pairing (#6754):** Improvement to remove dependency on one-time-use codes for bridge pairing.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Caching Inconsistencies:** Telegram users report prompt caching failures leading to higher costs/latency (#6360).
    *   **Configuration Opacity:** ZeroCode config editor lacks visibility into active sources/state (#7815, #8062).
    *   **Memory Overload:** Users feel the system prioritizes historical memory over current context too heavily (#5844).
    *   **Packaging Gaps:** Scoop installation missing `zerocode` executable (#8275).
*   **Satisfaction:**
    *   Positive reception for cost-tracking improvements and context window visibility.
    *   Appreciation for fixing critical OAuth and shell dispatch bugs.

## 8. Backlog Watch
*   **#8309 [OPEN] Feature: SkillForge orphaned** – Needs maintainer decision to wire up or remove. High risk if left unresolved.
*   **#8177 [OPEN] RFC: Supply chain signing** – Blocked/Needs maintainer review. Critical for security compliance.
*   **#8352 [OPEN] CI: Fail early on package token access** – High risk CI fix pending merge.
*   **#7733 [OPEN] Bug: MCP bundles not enforced** – While a fix PR exists, the issue remains open, requiring verification.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*