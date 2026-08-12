# OpenClaw Ecosystem Digest 2026-07-09

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-09 01:56 UTC

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
**Date:** 2026-07-09

## 1. Today's Overview
OpenClaw exhibits extremely high development velocity, with 500 issues and 500 pull requests updated in the last 24 hours. The project is in a critical stabilization phase, addressing numerous regressions introduced in recent stable releases (v2026.3.x and v2026.5.x). While there are no new official releases today, the merge activity suggests an imminent patch cycle to resolve session state corruption, message delivery failures, and security vulnerabilities. The community is highly engaged, with many "diamond lobster" rated issues indicating severe impacts on core functionality.

## 2. Releases
**No new releases today.**

*Note:* Several issues report regressions in recent versions (e.g., v2026.3.2, v2026.3.7, v2026.3.11, v2026.5.20), suggesting that the upcoming release must address these stability fixes.

## 3. Project Progress
The following key areas saw significant progress or active development today:

*   **Session State & Compaction Fixes:** Multiple PRs target session bloat and compaction timeouts.
    *   [#102281](https://github.com/openclaw/openclaw/pull/102281): Tail-load compacted session transcripts on startup to prevent parsing long JSONL files unnecessarily.
    *   [#102284](https://github.com/openclaw/openclaw/pull/102284): Fix context-overflow prechecks to account for tool-result projection.
*   **Provider & Auth Stability:**
    *   [#102280](https://github.com/openclaw/openclaw/pull/102280): Avoid retrying permanent provider errors.
    *   [#102344](https://github.com/openclaw/openclaw/pull/102344) & [#102342](https://github.com/openclaw/openclaw/pull/102342): Surface OpenAI chat-completions refusal text as visible assistant responses instead of blank turns.
    *   [#102003](https://github.com/openclaw/openclaw/pull/102003): Fix missing OAuth-only xAI tools in CLI-backend sessions.
*   **Gateway & Audit Logging:**
    *   [#97189](https://github.com/openclaw/openclaw/pull/97189): Persist gateway restart audit events for better operational visibility.
*   **Security:**
    *   [#43469](https://github.com/openclaw/openclaw/pull/43469): Extended markdown skill definition scanning for injection threats.
    *   [#101276](https://github.com/openclaw/openclaw/pull/101276): Implement `deny-over-allow` exec approval denylist.

## 4. Community Hot Topics
High-engagement issues reflecting critical user pain points:

*   **[P1] Text between tool calls leaks to messaging channels** [#25592](https://github.com/openclaw/openclaw/issues/25592) (35 comments)
    *   *Analysis:* Internal processing text (errors, narration) is visible to users in Slack/iMessage, creating a poor UX. This is a top-rated "diamond lobster" issue.
*   **[P1] Subagent completion silently lost** [#44925](https://github.com/openclaw/openclaw/issues/44925) (21 comments)
    *   *Analysis:* Multi-agent orchestration failures result in silent data loss without retry or notification, undermining trust in autonomous workflows.
*   **[P1] Multi-agent orchestration instability** [#43367](https://github.com/openclaw/openclaw/issues/43367) (13 comments)
    *   *Analysis:* Concurrent agent operations cause config overwrites and session lock failures, making parallel coding batches unreliable.
*   **[P2] Per-agent cost budget enforcement** [#42475](https://github.com/openclaw/openclaw/issues/42475) (12 comments)
    *   *Analysis:* Users are requesting hard caps on agent spending at the gateway level to prevent runaway costs.
*   **[P2] Steer mode does not inject messages mid-turn** [#48003](https://github.com/openclaw/openclaw/issues/48003) (15 comments)
    *   *Analysis:* Real-time interaction ("steer" mode) is broken for main sessions, forcing users to wait for turn completion.

## 5. Bugs & Stability
Several critical bugs and regressions were reported or actively discussed today:

*   **Critical:** Session hangs indefinitely when compaction times out, causing duplicate messages [#43661](https://github.com/openclaw/openclaw/issues/43661).
*   **Critical:** Subagent sessions persist after completion, blocking the main session [#47975](https://github.com/openclaw/openclaw/issues/47975).
*   **Regression:** `openclaw doctor --fix` performance degraded 4-5x in v2026.5.20 due to session snapshot path traversal [#85333](https://github.com/openclaw/openclaw/issues/85333).
*   **Regression:** "Cannot convert undefined or null to object" in v2026.3.2 with Google Vertex/Gemini [#38327](https://github.com/openclaw/openclaw/issues/38327).
*   **Security:** Untrusted GitHub issue bodies injected directly into sub-agent prompts without sanitization [#45740](https://github.com/openclaw/openclaw/issues/45740).
*   **UX:** Discord leaks internal tool-call traces (e.g., `NO_REPLY`, raw JSON) to public channels [#44905](https://github.com/openclaw/openclaw/issues/44905).
*   **Bug:** Agent heartbeat routes to the wrong agent's session [#99912](https://github.com/openclaw/openclaw/issues/99912).
*   **Bug:** Sandbox containers exit immediately when `no-new-privileges` is applied [#43996](https://github.com/openclaw/openclaw/issues/43996).

## 6. Feature Requests & Roadmap Signals
*   **Private Network Access for Web Fetch:** [#39604](https://github.com/openclaw/openclaw/issues/39604) (13 comments, 11 👍) - Highly requested for internal tool usage.
*   **MathJax/LaTeX Support in Control UI:** [#4280](https://github.com/openclaw/openclaw/issues/42840) (8 comments, 9 👍) - Improves readability for technical/scientific agents.
*   **Gateway Lifecycle Hooks:** [#43454](https://github.com/openclaw/openclaw/issues/43454) - Allows custom actions at subagent/tool/turn completion.
*   **YAML Config Support:** [#45758](https://github.com/openclaw/openclaw/issues/45758) - Increasing demand for YAML alongside JSON5 for better DevOps integration.
*   **Pre-reset Memory Flush:** [#45608](https://github.com/openclaw/openclaw/issues/45608) - Ensures clean state transitions on `/new` or daily resets.

## 7. User Feedback Summary
Users are experiencing significant friction with **session reliability** and **message fidelity**. Key sentiments include:
*   **Frustration with Silent Failures:** Subagent tasks disappearing or session locks hanging without clear error messages are major pain points.
*   **Security Concerns:** Leaking internal tool outputs to chat channels and injecting unsanitized data into prompts are viewed as critical security flaws.
*   **Performance Degradation:** Recent updates have introduced noticeable slowdowns in diagnostic tools (`doctor`) and increased memory bloat in session files.
*   **Desire for Granular Control:** Users want better isolation (per-agent budgets, distinct session routing) and more robust error handling (fast-fail on API outages).

## 8. Backlog Watch
Maintainers should prioritize the following unresolved issues:
*   [#25592](https://github.com/openclaw/openclaw/issues/25592): Tool call text leakage (P1, Diamond Lobster).
*   [#44925](https://github.com/openclaw/openclaw/issues/44925): Subagent completion loss (P1, Diamond Lobster).
*   [#45740](https://github.com/openclaw/openclaw/issues/45740): GH-issues skill injection vulnerability (P2, Diamond Lobster).
*   [#43661](https://github.com/openclaw/openclaw/issues/43661): Compaction timeout loop (P0, Release Blocker).
*   [#49603](https://github.com/openclaw/openclaw/issues/49603): Orphaned lock files on gateway restart.
*   [#102281](https://github.com/openclaw/openclaw/pull/102281): Needs proof for session transcript loading fix.
*   [#102284](https://github.com/openclaw/openclaw/pull/102284): Needs proof for context pressure estimation fix.

---

## Cross-Ecosystem Comparison

# Cross-Project AI Agent Ecosystem Report
**Date:** 2026-07-09
**Analyst:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The 2026 open-source AI agent landscape is characterized by a shift from experimental prototyping to enterprise-grade stability and security. Projects are heavily focused on resolving critical infrastructure pain points, including session state corruption, multi-agent orchestration reliability, and security vulnerabilities related to tool execution and prompt injection. While some projects prioritize rapid feature iteration and multi-platform connectivity, others are undertaking deep architectural refactoring to support scalable, multi-tenant operations. The community consensus emphasizes the need for robust sandboxing, deterministic error handling, and seamless integration with existing DevOps workflows.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | Stable (Patch Cycle Imminent) | High (Critical Fixes) |
| **IronClaw** | 21 | 50 | Stable (Refactoring Phase) | High (Architecture Shift) |
| **ZeroClaw** | 50 | 50 | Stable (WASM Migration) | High (Security Focus) |
| **CoPaw** | 38 | 47 | Beta (v2.0.0-beta.4) | Moderate (Regression Risk) |
| **NanoClaw** | 2 | 28 | Stable (Maintenance) | Moderate (Task Infra) |
| **Hermes Agent**| 50 | 50 | Patch (v0.18.2) | High (Desktop Stability)|
| **NanoBot** | 8 | 27 | Stable (Security Patch) | High (Security Fix) |
| **LobsterAI** | 3 | 13 | Stable (Integration Fix) | Moderate (Upgrade Risk) |
| **PicoClaw** | 0 | 3 | Stable (Edge Hardware) | Low (Niche Stability) |
| **TinyClaw** | 0 | 0 | Stable (Hardened) | Low (Quiet Maintenance) |
| **Moltis** | 0 | 1 | Stable (Critical Fix) | Low (Single Issue) |
| **NullClaw** | 0 | 0 | No Activity | N/A |
| **ZeptoClaw** | 0 | 0 | No Activity | N/A |

*\*Health Score reflects the balance of activity, critical bug resolution, and community engagement based on provided digests.*

## 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw dominates in sheer development velocity and community scale, with 500x500 daily updates compared to the industry average of ~30x30. Its "diamond lobster" issue rating system indicates a mature, rigorous triage process for critical bugs.
**Technical Approach:** Unlike competitors focusing on single-agent simplicity (NanoBot) or edge hardware (PicoClaw), OpenClaw is tackling complex multi-agent orchestration, session state compaction, and provider-agnostic gateway stability.
**Community Size:** OpenClaw’s engagement metrics (35+ comments on top issues) significantly outpace peers like PicoClaw (2 comments) or TinyClaw (0 comments), suggesting a larger, more vocal user base requiring intensive support.

## 4. Shared Technical Focus Areas
*   **Session State & Context Management:**
    *   *Projects:* OpenClaw, CoPaw, ZeroClaw, Hermes Agent.
    *   *Need:* Reliable context compression without data loss. Users are frustrated by "silent failures" (OpenClaw) and "context eviction errors" (CoPaw).
*   **Security Hardening & Sandboxing:**
    *   *Projects:* NanoBot, TinyClaw, ZeroClaw, IronClaw, OpenClaw.
    *   *Need:* Prevention of prompt injection, unauthenticated token minting (NanoBot), and SSRF vulnerabilities (ZeroClaw). Security is no longer optional but a core stability requirement.
*   **Multi-Agent Orchestration Stability:**
    *   *Projects:* OpenClaw, LobsterAI, CoPaw.
    *   *Need:* Resolving subagent task loss, configuration overwrites, and cross-agent data leakage.
*   **Gateway & Provider Reliability:**
    *   *Projects:* IronClaw, ZeroClaw, Hermes Agent.
    *   *Need:* Handling API rate limits, authentication bypasses, and ensuring consistent behavior across diverse LLM providers.

## 5. Differentiation Analysis
*   **Architectural Philosophy:**
    *   *OpenClaw/IronClaw:* Enterprise-scale, multi-tenant, gateway-centric architectures focusing on scalability and complex orchestration.
    *   *NanoBot/TinyClaw:* Lightweight, security-first, single-instance or edge-focused deployments.
    *   *CoPaw/Hermes Agent:* Developer-centric, IDE-integrated, and desktop-native experiences with a focus on local control and memory distillation.
*   **Target Users:**
    *   *OpenClaw/IronClaw:* Large teams, enterprises needing robust audit logs and permission controls.
    *   *PicoClaw/TinyClaw:* Edge device users, hobbyists, and those prioritizing privacy/security over complex features.
    *   *CoPaw/Hermes Agent:* Developers and power users seeking tight integration with coding workflows (Zed, JetBrains, VS Code).
*   **Technical Innovation:**
    *   *ZeroClaw:* Leading in WASM-based plugin systems for dynamic tool loading.
    *   *NanoBot:* Focusing on "sustained goals" and runtime-gated agent behaviors.
    *   *OpenClaw:* Prioritizing session compaction algorithms and cross-provider auth stability.

## 6. Community Momentum & Maturity
*   **Rapid Iteration (High Velocity):** OpenClaw, IronClaw, ZeroClaw, Hermes Agent. These projects are in active development cycles, releasing frequent patches and addressing critical bugs. They represent the cutting edge of agent functionality.
*   **Stabilization & Maintenance (Moderate Velocity):** NanoBot, NanoClaw, CoPaw (Beta), LobsterAI. These projects are refining existing features, fixing regressions, and preparing for stable releases. CoPaw’s beta status indicates higher risk of instability.
*   **Niche/Steady State (Low Velocity):** PicoClaw, TinyClaw, Moltis. These projects serve specific use cases (edge hardware, security hardening, CalDAV) with less frequent but critical updates.
*   **Dormant:** NullClaw, ZeptoClaw. No activity suggests either completed projects or abandoned initiatives.

## 7. Trend Signals
*   **Shift from "Chat" to "Workflow":** Users are demanding features like cron jobs, scheduled tasks, and persistent memory distillation (CoPaw, NanoBot, LobsterAI). Agents are expected to perform long-running, autonomous workflows, not just respond to prompts.
*   **Security as a Feature:** The community is actively contributing to security fixes (NanoBot, ZeroClaw, TinyClaw). Trust in agent autonomy is contingent on robust sandboxing and authentication mechanisms.
*   **Cross-Platform Parity:** There is strong demand for consistent experiences across messaging platforms (Telegram, Discord, Slack, QQ, WeCom). Projects like PicoClaw and Hermes Agent are investing heavily in adapter reliability.
*   **Developer Tooling Integration:** The rise of ACP (Agent Client Protocol) servers (Hermes Agent) and IDE integrations (CoPaw) signals that AI agents are becoming integral parts of the software development lifecycle, not just separate applications.
*   **Context Awareness:** Advanced context management (compression, retention, eviction) is a universal pain point. Projects that solve this reliably (OpenClaw, CoPaw) will gain a significant competitive advantage.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-07-09
**Source:** github.com/HKUDS/nanobot

## 1. Today's Overview
The NanoBot project exhibited high activity on July 9, 2026, driven primarily by critical security patches and architectural refinements. Eight issues were closed within the last 24 hours, with a significant focus on resolving WebUI bootstrap vulnerabilities and standardizing configuration workflows. Twenty-seven Pull Requests saw updates, indicating intense development momentum around stability, security gating, and tooling enhancements. No new releases were published during this window, suggesting the team is consolidating fixes before the next version drop.

## 2. Releases
*No new releases were published on 2026-07-09.*

## 3. Project Progress
Significant technical advancements were made through merged/closed PRs and issue resolutions today:
*   **Configuration Automation:** The non-interactive config refresh feature (`nanobot onboard --refresh`) was advanced via PR #4852 (closed) and Issue #4851 (closed), addressing automation needs for semi-automatic system updates.
*   **Code Refactoring:** PR #4848 closed successfully, extracting turn hook assembly into `nanobot.agent.turn_hooks` to improve code maintainability.
*   **Documentation:** PR #4850 improved search entry pages and moved heavy news blocks to archives, enhancing discoverability for core features like MCP, WebUI, and Python SDK.
*   **Node.js Upgrade:** PR #4460 bumped the Node.js version to 24, ensuring modern runtime compatibility.

## 4. Community Hot Topics
The most discussed items revolve around security transparency and architectural consistency:

*   **WebUI Bootstrap Security Flaws:** Three related security issues (#4825, #4826, #4827) highlighted by author YLChen-007 dominated discussions. The community is concerned about unauthenticated localhost processes minting API tokens when secrets are not configured.
    *   *Link:* [Issue #4825](https://github.com/HKUDS/nanobot/issues/4825)
    *   *Link:* [Issue #4826](https://github.com/HKUDS/nanobot/issues/4826)
    *   *Link:* [Issue #4827](https://github.com/HKUDS/nanobot/issues/4827)
*   **Prompt Prefix Preservation:** Issue #2463 discusses a fundamental architectural conflict where Nanobot does not preserve exact prompt prefixes, impacting compatibility with OpenAI-pro models.
    *   *Link:* [Issue #2463](https://github.com/HKUDS/nanobot/issues/2463)
*   **LangSmith Integration Status:** PR #4847 clarifies discrepancies between documentation and current functionality regarding LangSmith, a key observability tool for users.
    *   *Link:* [PR #4847](https://github.com/HKUDS/nanobot/pull/4847)

## 5. Bugs & Stability
Several critical bugs and stability issues were addressed or identified today:

*   **Security: Unauthenticated Token Minting (High Severity):** Issues #4825, #4826, and #4827 identified that the WebUI could issue API tokens to any local process without authentication if secrets were unset.
    *   *Fix Status:* PR #4856 aims to restore safe localhost bootstrap, while PR #4849 gates bootstrap API token issuance, requiring proper secret verification.
    *   *Links:* [PR #4856](https://github.com/HKUDS/nanobot/pull/4856), [PR #4849](https://github.com/HKUDS/nanobot/pull/4849)
*   **Security: OpenAI-Compatible API Auth Bypass (High Severity):** Issue #4078 reported that `/v1/chat/completions` accepted unauthenticated requests.
    *   *Status:* Closed, implying remediation or acknowledgment.
    *   *Link:* [Issue #4078](https://github.com/HKUDS/nanobot/issues/4078)
*   **MCP Gateway Crash (Critical Stability):** PRs #4843 and #4764 address crashes during MCP streamable-http reconnects due to stale stack cleanup and cancel scope isolation.
    *   *Links:* [PR #4843](https://github.com/HKUDS/nanobot/pull/4843), [PR #4764](https://github.com/HKUDS/nanobot/pull/4764)
*   **Tool Execution Exception Handling (Medium Stability):** PR #4816 fixes a bug where `BaseException` (including `KeyboardInterrupt`) was caught in tool execution, converting system signals into conversational errors.
    *   *Link:* [PR #4816](https://github.com/HKUDS/nanobot/pull/4816)
*   **Slack Dependency Missing (Low Stability):** Issue #4829 noted `aiohttp` was missing from Slack dependencies in `pyproject.toml`.
    *   *Link:* [Issue #4829](https://github.com/HKUDS/nanobot/issues/4829)

## 6. Feature Requests & Roadmap Signals
*   **Runtime-Gated Goals:** PR #4844 introduces "sustained goals" gated by explicit runtime modes, moving away from always-visible long-task tools. This signals a roadmap shift toward more modular and permission-controlled agent behaviors.
    *   *Link:* [PR #4844](https://github.com/HKUDS/nanobot/pull/4844)
*   **Cron Job Model Presets:** PR #4622 adds support for model presets in cron jobs, allowing per-run provider/model overrides without mutating the live agent model. This enhances flexibility for scheduled tasks.
    *   *Link:* [PR #4622](https://github.com/HKUDS/nanobot/pull/4622)
*   **New Core Tool: nano_timer:** PR #4853 adds a dependency-free timer tool with timezone and calendar support, expanding the core toolkit for time-sensitive automation.
    *   *Link:* [PR #4853](https://github.com/HKUDS/nanobot/pull/4853)
*   **WebUI File Edit Diffs:** PR #4828 introduces GitHub-like unified diffs for file edits in the WebUI, improving visibility for users monitoring agent file operations.
    *   *Link:* [PR #4828](https://github.com/HKUDS/nanobot/pull/4828)

## 7. User Feedback Summary
Users are actively requesting greater control over agent configuration and security boundaries. The closure of multiple issues related to WebUI bootstrap security suggests strong user demand for robust default security postures, even in localhost environments. Additionally, the push for non-interactive config refresh (#4851/#4852) indicates a user base managing many instances that requires scriptable administration. The clarification of LangSmith status (#4847) reflects user reliance on observability tools and frustration when documentation lags behind code changes.

## 8. Backlog Watch
*   **OpenAI-Compatible API Auth:** While Issue #4078 is closed, ensure the fix in PR #4849 or related security patches fully covers all entry points, not just the WebUI bootstrap.
*   **Architectural Prompt Prefix Issue:** Issue #2463 remains a significant architectural concern for users relying on specific prompt formatting for certain LLM providers. Monitor for a dedicated PR or milestone.
    *   *Link:* [Issue #2463](https://github.com/HKUDS/nanobot/issues/2463)
*   **Minimax-M2.7 Cloud Stability:** Issue #2450 reported failures on subsequent requests via Ollama Cloud. Ensure the fix is validated across different network conditions.
    *   *Link:* [Issue #2450](https://github.com/HKUDS/nanobot/issues/2450)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** July 9, 2026
**Source:** NousResearch/hermes-agent

## 1. Today's Overview
The Hermes Agent project demonstrates high velocity with 50 issues and 50 pull requests updated in the last 24 hours. Development is heavily focused on stabilizing the Desktop experience, refining the Kanban/cron subsystems, and ensuring compatibility with emerging Python and AI provider standards. The release of v0.18.2 indicates a responsive patch cycle for critical dependency issues. Community engagement remains strong, with significant discussion around context compression, session management, and cross-platform gateway reliability.

## 2. Releases
**v0.18.2 (Tag: v2026.7.7.2)**
*   **Release Date:** July 7, 2026
*   **Summary:** A same-day patch following v0.18.1.
*   **Key Change:** Fixed the WhatsApp Baileys dependency by unpining the git commit reference and switching to the published `7.0.0-rc13`. This ensures stability for tagged-release Docker builds.
*   **Migration Notes:** Users running Docker-based WhatsApp gateways should update immediately to resolve potential connection instability.

## 3. Project Progress
*   **Desktop & TUI Stability:** Multiple PRs address UI glitches on Windows (zoom persistence after minimize/restore) and macOS (gateway shutdown on quit). Fixes for stale session states and intermediate text disappearance in the Desktop GUI are in progress.
*   **Kanban & Cron Subsystems:** A cluster of PRs (#61229–#61235) significantly improves the robustness of the Kanban worker system. Changes include honoring turn budgets, fixing priority inheritance for decomposed tasks, serializing database initialization, and routing temporary files to task-specific workspaces to prevent `/tmp` exhaustion.
*   **Python 3.14 Compatibility:** PR #61224 introduces fixes for Python 3.14, addressing `ThreadPoolExecutor` signature changes and gateway liveness checks.
*   **Tooling Enhancements:** PR #61223 adds a guarded `codex_exec` tool, allowing Hermes to delegate repository work to the Codex CLI while preserving sandboxing and authentication. PR #61221 fixes background process environment inheritance, ensuring tools run within the correct virtual environment.
*   **Dependency Cleanup:** PR #52555 begins refactoring by removing unnecessary `sys.path.insert` calls to support namespaced modules.

## 4. Community Hot Topics
*   **Context Compression & Reasoning Efficiency:**
    *   **Issue #39691:** Integration of `headroom-ai` for tool output compression. (9 comments, 12 👍)
    *   **Analysis:** Users are hitting token limits and seeking granular control over context, specifically compressing tool outputs rather than just summarizing entire conversations.
*   **Session Management & Visibility:**
    *   **Issue #50718:** Request for unread markers and OS badges for session visibility. (2 comments)
    *   **Issue #13891:** Matrix gateway decryption failures requiring room recreation. (10 comments)
    *   **Analysis:** There is a strong demand for better "state awareness" in the UI. Users struggle to track which sessions are active, finished, or need input, particularly in multi-session environments.
*   **Cross-Platform & Gateway Reliability:**
    *   **Issue #58646:** QQ Bot adapter startup failure due to parameter mismatch. (7 comments)
    *   **Issue #61211/#61212:** WeCom file upload failures on Windows due to `MAX_PATH` limitations with encoded filenames. (1 comment each)
    *   **Analysis:** Gateway adapters (especially in Asian markets like QQ/WeCom) face specific technical hurdles regarding path lengths and API parameter consistency.

## 5. Bugs & Stability
*   **High Severity:**
    *   **#61145:** Gateway session-hygiene auto-compression destructively deletes transcripts instead of soft-archiving, causing silent data loss. (Critical)
    *   **#61220:** Session expiry finalization fails to set `end_reason`, leading to stale recovery reopening expired sessions with full history.
    *   **#39534:** Desktop Windows cuts off Chinese prompts in the chat window.
*   **Medium Severity:**
    *   **#59224:** Classic CLI `/resume` hides non-CLI sessions (Desktop/WebUI), making them hard to find.
    *   **#58619:** Desktop spawns unbounded `serve` processes on reconnection, leading to resource leaks.
    *   **#5254:** Tool calls repeat/fragment when using LM-Studio/Gemma4.
    *   **#61207:** `/plan` command fails to write plan files on Desktop.
    *   **#61211/#61212:** WeCom file uploads fail on Windows due to path length issues.
*   **Low Severity:**
    *   **#61099:** OpenRouter logs show "Unknown" App for Hermes requests intermittently.
    *   **#35419:** Fallback activation is silent to users on messaging gateways.

## 6. Feature Requests & Roadmap Signals
*   **Agent Client Protocol (ACP) Server Mode:** Issue #569 proposes running Hermes as an ACP server in editors like Zed, JetBrains, and Neovim. (2 comments, 9 👍) – *High community interest.*
*   **Per-Cron Reasoning Overrides:** Issue #23524 requests the ability to set different reasoning efforts for different cron jobs.
*   **System Tray Minimization:** Issue #61246 (Chinese) and #61087 (macOS quit behavior) indicate a desire for better desktop application lifecycle management (minimize to tray vs. exit).
*   **Chronological Thinking Blocks:** Issue #18241 requests displaying thinking blocks and tool calls in chronological order in the TUI.
*   **Prediction:** The next major version will likely prioritize ACP integration, improved session hygiene (preventing data loss), and robust Windows/Linux path handling for gateways.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Data Loss Fear:** The destructive deletion of transcripts in session hygiene (#61145) is a major concern for users relying on Hermes for long-term memory.
    *   **UI Clutter/Confusion:** Stale statuses ("Summarizing thread") and disappearing interim text (#48098, #39558) confuse users about what the agent is actually doing.
    *   **Windows Limitations:** Path length issues (#61211) and text cutoff (#39534) suggest the Desktop app needs stricter validation for non-ASCII characters and long filenames on Windows.
*   **Satisfaction:**
    *   Users appreciate the rapid patching of dependency issues (WhatsApp).
    *   The introduction of `codex_exec` (#61223) signals responsiveness to power users wanting deeper IDE integration.

## 8. Backlog Watch
*   **#13891 [CLOSED]:** Matrix gateway decryption issues. *Status:* Closed, but high comment count suggests lingering edge cases or need for documentation updates.
*   **#39691:** Headroom-ai integration. *Status:* Open, highly upvoted. Needs maintainer review to determine if it aligns with the core roadmap or should be a plugin.
*   **#569:** ACP Server Mode. *Status:* Open. Critical for expanding Hermes beyond standalone apps into the editor ecosystem. Requires architectural planning.
*   **#61145:** Destructive session hygiene. *Status:* Open. High risk. Should be prioritized for the next hotfix release given the data loss implication.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-07-09

## 1. Today's Overview
PicoClaw demonstrated moderate development activity over the last 24 hours, characterized by a high throughput of merged pull requests (3) contrasted with zero new issues opened. The project appears stable with no new releases deployed today, suggesting a maintenance phase focused on integrating recent enhancements rather than launching new major features. Community engagement remains steady, with two open issues currently under discussion, indicating ongoing user interaction despite the lack of immediate new bug reports.

## 2. Releases
No new releases were published today. The latest version status remains unchanged since the previous cycle.

## 3. Project Progress
Three pull requests were merged or closed today, significantly advancing the platform's connectivity and vision capabilities:
*   **Gateway Reliability (#2278):** Merged a critical enhancement improving startup reliability on environments lacking loopback interfaces by implementing a wildcard bind fallback with CIDR allowlists. This benefits users deploying PicoClaw in restricted network or containerized environments like NanoKVM.
*   **Grafana Integration (#2251):** Added support for a new `grafana_alertmanager` input-only channel. This allows PicoClaw to receive and parse webhooks from Grafana Alertmanager, enabling automated incident response workflows triggered by specific skills.
*   **Vision Model Support (#3234):** Fixed a regression in the Anthropic Messages provider where image media was previously dropped from user messages. This ensures vision models can now correctly process attached images, resolving reports of models claiming they "can't see" attachments.

## 4. Community Hot Topics
The following issues are generating the most community attention:
*   **[BUG] OpenAI GPT on NanoKVM (#3195):** An open issue reporting configuration failures when using default settings with GPT-5.4 on NanoKVM. With 2 comments, this highlights a friction point for users adopting PicoClaw on edge hardware. [Link](https://github.com/sipeed/picoclaw/issues/3195)
*   **[Feature] Streaming Output for QQ Channel (#3201):** A feature request to enable real-time token-by-token streaming for the QQ channel. Currently limited to Telegram and Pico WebSocket, this request underscores user demand for parity across messaging platforms. It is marked as stale but has 1 comment. [Link](https://github.com/sipeed/picoclaw/issues/3201)

## 5. Bugs & Stability
One significant bug report was noted today:
*   **Severity: High:** Issue #3195 details a functional failure where OpenAI GPT integration does not work on NanoKVM with default configurations. This affects core usability on supported hardware. No linked fix PR exists yet. [Link](https://github.com/sipeed/picoclaw/issues/3195)
*   **Note:** The image processing bug previously affecting Anthropic Vision models was resolved via PR #3234 today.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Platform Parity:** Issue #3201 signals strong user desire for streaming support on non-standard channels (QQ). This suggests the roadmap should prioritize extending the `StreamingCapable` interface to other messaging protocols.
*   **Infrastructure Observability:** The merging of PR #2251 indicates a strategic push to integrate PicoClaw into enterprise DevOps workflows, specifically around alerting and automated response.

## 7. User Feedback Summary
Users are actively exploring PicoClaw on edge devices (NanoKVM) and integrating it with professional monitoring tools (Grafana). However, there is dissatisfaction with inconsistent feature availability across channels, particularly regarding streaming latency on QQ. The successful merge of the Grafana webhook support suggests users appreciate extensibility for operational tasks.

## 8. Backlog Watch
*   **Issue #3195 (NanoKVM Config Bug):** Requires immediate maintainer attention as it blocks functionality on a specific, increasingly popular hardware platform.
*   **Issue #3201 (QQ Streaming):** While marked stale, the feature request aligns with current development trends toward improved UX and parity. Maintainers should evaluate prioritizing this for the next minor release to maintain competitive advantage in multi-channel support.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-07-09

### 1. Today's Overview
NanoClaw exhibits high development velocity on July 9, 2026, driven by a significant burst of 28 pull requests, indicating an intense push toward stabilizing the scheduled tasks infrastructure and refining core agent execution logic. While no new releases were published yesterday, the merging of four critical PRs suggests active maintenance of the `main` branch ahead of upcoming feature rollouts. Community engagement remains focused on Discord integrations and provider-specific bugs, with two new open issues highlighting usability gaps in messaging reliability and thread management. The project appears healthy, with a strong emphasis on internal tooling, credential handling, and reducing technical debt in the agent runner.

### 2. Releases
**No new releases.**
There were zero new releases published in the last 24 hours. The most recent documented release context refers to `v2.1.17` changelog expansions (PR #2798), but no new version artifacts were tagged or released today.

### 3. Project Progress
**Merged/Closed PRs (4):**
*   **#1702 [CLOSED] fix: break for-await loop on result to prevent IPC message loss**: Resolved a critical issue where long-running asynchronous operations caused message loss within the Inter-Process Communication (IPC) layer. This improves the reliability of agent-to-host communication.
*   **#2978 [CLOSED] ci: auto-label PRs from core team members**: Implemented CI automation to automatically apply the `core-team` label to PRs authored by designated maintainers, streamlining internal tracking and review workflows.
*   **#2980 [CLOSED] ncl CLI: verb-level args, deep help, server-rendered human view**: Part 1 of a scheduled-tasks series, this merge enhanced the `ncl` CLI with strict argument validation, improved help documentation, and server-rendered views for better human readability.

**Key Advancements:**
*   **Scheduled Tasks Infrastructure**: Significant progress was made with PRs #2981 (control plane/isolated sessions) and #2983 (capability toggles), laying the groundwork for robust background task execution.
*   **CLI & Tooling**: PR #2921 fixed a bug in skill fragment composition where all skills were incorrectly inlined into every group, improving performance and correctness for multi-skill configurations.

### 4. Community Hot Topics
**Most Active/Open Items:**
*   **Issue #2985**: *opencode provider: silent no-reply when the final text snapshot misses session.idle*
    *   **Link**: [nanocoai/nanoclaw Issue #2985](https://github.com/nanocoai/nanoclaw/issues/2985)
    *   **Analysis**: Users are experiencing silent failures where the bot does not post replies despite completing agentic turns. This highlights a critical need for better error reporting and state synchronization in the opencode provider, particularly for long-running sessions.
*   **Issue #2984**: *feat: auto-rename Discord threads by topic (host-side rename_thread tool)*
    *   **Link**: [nanocoai/nanoclaw Issue #2984](https://github.com/nanocoai/nanoclaw/issues/2984)
    *   **Analysis**: There is strong demand for improved usability in Discord environments. Default date-based thread names are unmanageable in busy servers; users want semantic, topic-based thread naming to enhance discoverability and organization.

### 5. Bugs & Stability
**Reported Issues & Fixes:**
*   **High Severity**:
    *   **#2985**: Silent message drops in opencode provider. Currently open. No immediate fix PR linked, but this is a major usability blocker.
*   **Medium Severity**:
    *   **#2979**: *fix(deps): bump @chat-adapter/* — Addresses an issue where Discord bare URLs were incorrectly wrapped as masked links. This is a UX regression fix.
    *   **#2878**: *fix(codex): allow reconnect when OneCLI already has a stale OpenAI secret*. Resolves authentication failures for Codex agents when tokens expire or are revoked.
*   **Low Severity/Enhancements**:
    *   **#2921**: Fixed skill fragmentation logic in compose groups.
    *   **#2913**: Fixed WhatsApp Cloud bridge registration collision with native Baileys adapter.

### 6. Feature Requests & Roadmap Signals
**Emerging Features:**
*   **Scheduled Tasks Control Plane**: Multiple PRs (#2981, #2983) indicate that "scheduled tasks" are a major upcoming feature. This includes isolated sessions, script gating, and capability toggles, suggesting a move toward more autonomous, background agent operations.
*   **Template-Based Setup**: PR #2909 introduces a wizard flow for creating first agents, supporting "Fresh agent" and "Default" templates, aiming to lower the barrier to entry for new users.
*   **Teams Integration Simplification**: PR #2958 rebuilds the Teams skill using a structured format to replace the complex ~7-step Azure portal walkthrough with a streamlined CLI command (`teams login` + `teams app create`).
*   **Instance-Wide Default Providers**: PR #2906 allows operators to set a default agent provider for all new groups via environment variables, simplifying configuration management.

### 7. User Feedback Summary
**Pain Points:**
*   **Reliability**: The primary complaint today is the silent failure of the opencode provider (Issue #2985), where users see no error and no reply, leading to confusion about bot status.
*   **Usability in Discord**: Users find default thread naming conventions poor for long-term conversation management (Issue #2984).
*   **Authentication Fragility**: Stale secrets causing mid-conversation crashes (PR #2878) indicate that credential lifecycle management needs improvement.

**Satisfaction Signals:**
*   Users appreciate the push toward CLI usability improvements (PR #2980) and the simplification of complex setup flows (e.g., Teams, WhatsApp).
*   The focus on "gating" skills and capabilities (PR #2921, #2983) suggests users value security and controlled agent behavior.

### 8. Backlog Watch
**Items Needing Attention:**
*   **Issue #2985**: The silent no-reply bug in the opencode provider is a high-priority stability issue that requires immediate investigation and a fix PR.
*   **Issue #2984**: While low-risk, the request for auto-renaming Discord threads is a common user desire that would significantly improve the Discord adapter's value proposition.
*   **PR #2742**: *feat(recipes): the PR Factory* has been open since June 11. This represents a significant feature for automating code review workflows in Slack; its longevity suggests it may require more extensive review or integration effort.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest: 2026-07-09**

### 1. Today's Overview
The IronClaw project is experiencing high velocity with 50 Pull Requests and 21 Issues updated in the last 24 hours, indicating intense development activity focused on the "Reborn" architecture. The primary driver of this activity is the NEA-25 initiative, which aims to unify extension surfaces and eliminate legacy v1 code, alongside significant performance optimizations for API latency. While no new releases were published, the volume of merged and open PRs suggests the team is aggressively refactoring the core infrastructure to support scalable, multi-tenant operations.

### 2. Releases
*   **Status:** No new releases published today.
*   **Note:** Development is currently concentrated on internal refactoring (NEA-25) and performance tuning rather than public-facing version bumps.

### 3. Project Progress
Significant strides were made in restructuring the core extension model and improving system performance:
*   **NEA-25 Unification (Core Refactoring):** A major stack of PRs (#5833, #5839, #5842, #5845, #5847, #5848, #5849, #5850) was advanced to unify extension manifests and remove legacy "kind" conflation. This includes retiring specific Slack extensions in favor of a unified `slack` extension and enforcing a "zero-legacy" invariant through automated testing (#5848).
*   **Performance Optimization:** PR #5857 introduces critical latency reductions by caching system skill bundle filesystem descriptors, preventing redundant reads during concurrent API user flows.
*   **Private Tool Installation:** PR #5525 enables private installation of tools for non-admin SSO users, allowing admins to import ZIP-based extensions that individual users can activate without affecting others.
*   **WebUI Improvements:** PR #5763 enhances error handling for disconnected runs, ensuring users see clear "connection loss" states rather than ambiguous loading indicators. PR #5821 streams assistant text over projections for better real-time feedback.

### 4. Community Hot Topics
The most discussed topics revolve around stability regressions in the new architecture and usability bugs in the WebUI:
*   **[Issue #5859] Daily IronClaw Failure Taxonomy (2026-07-09):** High visibility due to the automated nature of the report. It highlights that the `pinchbench` suite is currently saturated by upstream provider rate-limiting, masking potential internal defects. [Link](https://github.com/nearai/ironclaw/issues/5859)
*   **[Issue #5702] GitHub Integration HTTP 403 Errors:** Critical bug affecting developer workflows. Users cannot search or create issues via the agent, indicating a permissions or token scope failure in the GitHub integration. [Link](https://github.com/nearai/ironclaw/issues/5702)
*   **[Issue #5838] Context Compaction Errors:** A P2 bug where runs fail after successful tool execution due to context window limits. This suggests a need for better context management strategies in complex multi-step tasks. [Link](https://github.com/nearai/ironclaw/issues/5838)

### 5. Bugs & Stability
Several critical and high-priority bugs were identified today, primarily impacting routine reliability and UI consistency:
*   **P2: Routine Failures:**
    *   **#5836:** Scheduled routines fail with "No thread attached," breaking automation workflows like `ironclaw-issues-slack-summary`. [Link](https://github.com/nearai/ironclaw/issues/5836)
    *   **#5837:** Action buttons ("Open run", "Logs") in routine results are non-clickable, hindering debugging. [Link](https://github.com/nearai/ironclaw/issues/5837)
*   **P2: Agent Logic Errors:**
    *   **#5834:** The agent incorrectly rejects Slack disconnect requests, responding with irrelevant content. [Link](https://github.com/nearai/ironclaw/issues/5834)
*   **P3: UI/UX Glitches:**
    *   **#5705:** Terminal icon in chat UI lacks a disable option. [Link](https://github.com/nearai/ironclaw/issues/5705)
    *   **#5557:** Deep links to logs require double-clicking to load the correct conversation. [Link](https://github.com/nearai/ironclaw/issues/5557)
    *   **#5835:** "Jump to latest" button appears unnecessarily and overlaps content. [Link](https://github.com/nearai/ironclaw/issues/5835)
*   **Closed/Fixed:**
    *   **#5768:** Nightly E2E failures and i18n coverage gaps were addressed. [Link](https://github.com/nearai/ironclaw/issues/5768)
    *   **#5787:** Flaky Slack pairing test resolved by fixing tokio clock vs. chrono wall-clock race conditions. [Link](https://github.com/nearai/ironclaw/issues/5787)

### 6. Feature Requests & Roadmap Signals
*   **API Token Management:** Issue #5856 highlights a gap in admin capabilities regarding API token re-issuing for existing users. This signals a demand for robust user lifecycle management in the admin panel. [Link](https://github.com/nearai/ironclaw/issues/5856)
*   **File Upload Limits:** Issue #5820 requests raising the WebChat attachment limit from 10 files and surfacing overflow errors. This indicates power users are hitting current constraints and need better feedback mechanisms. [Link](https://github.com/nearai/ironclaw/issues/5820)
*   **Automation Naming:** Issue #5419 (recently closed) noted the inability to rename auto-generated automations. The closure suggests this may be addressed or prioritized in upcoming Reborn features. [Link](https://github.com/nearai/ironclaw/issues/5419)

### 7. User Feedback Summary
Users are reporting frustration with **reliability in automated routines** and **integration permissions**. The "No thread attached" error (#5836) and GitHub 403 errors (#5702) directly impact productivity, suggesting that the transition to the Reborn architecture has introduced transient stability issues. On the positive side, the introduction of private tool installations (#5525) and improved connection loss messaging (#5763) addresses specific user needs for security and clarity. The lack of UI customization options (e.g., hiding terminal icons #5705) points to a desire for a more personalized interface.

### 8. Backlog Watch
*   **[Issue #5856] Admin Panel API-Token Gaps:** Requires immediate attention to allow re-issuing of API tokens, which is a critical administrative function currently broken. [Link](https://github.com/nearai/ironclaw/issues/5856)
*   **[Issue #5838] Context Compaction:** This P2 bug affects complex multi-tool runs. While PR #5857 improves latency, it does not explicitly address context window management logic, making this a persistent stability risk. [Link](https://github.com/nearai/ironclaw/issues/5838)
*   **[Issue #5820] WebChat File Limits:** As user workflows become more complex, the 10-file limit is increasingly restrictive. Addressing the UX bug regarding silent skipping of excess files is a quick win for user satisfaction. [Link](https://github.com/nearai/ironclaw/issues/5820)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-07-09
**Source:** GitHub Repository (netease-youdao/LobsterAI)

## 1. Today's Overview
The LobsterAI project is experiencing high development velocity with 13 Pull Requests updated in the last 24 hours, indicating a significant push toward stabilizing the OpenClaw integration and improving multi-agent isolation. While no new official releases were published today, the codebase is undergoing critical fixes regarding session scoping, security vulnerabilities, and user interface consistency. Community engagement remains active with three issues reported, two of which highlight severe stability and data integrity concerns that require immediate attention. The overall health of the project shows strong momentum in feature refinement, though stability regressions in recent updates are emerging as a key risk factor.

## 2. Releases
*   **No new releases published.**
*   *Note:* Several merged PRs (e.g., #2295, #2298) address breaking behaviors in previous versions (specifically around `USER.md` sync and IM session mapping), suggesting these should be included in the next patch release notes.

## 3. Project Progress
Significant progress was made today in refining the **OpenClaw** ecosystem and **Multi-Agent Architecture**:
*   **Agent Isolation & Scoping:** Merged PRs **#2295** and **#2298** directly address core architectural flaws. PR #2295 fixes the `USER.md` bootstrap issue where edits in one agent incorrectly overwrote others. PR #2298 scopes IM session mappings by agent ID, preventing cross-agent message leakage.
*   **Memory Search Optimization:** PR **#2297** improves performance and reliability by defaulting memory search to local Full-Text Search (FTS) when embeddings are disabled, ensuring functionality without heavy vector dependencies.
*   **Security Hardening:** PR **#1401** replaces predictable `Math.random()` with `crypto.randomUUID()` for SSE stream IDs, mitigating potential data subscription attacks.
*   **UX Enhancements:** PR **#2296** introduces minimizable permission prompts in Cowork sessions, improving workflow continuity. PR **#1404** and **#1406** refine the Scheduled Tasks module with better time pickers and notification channel fallbacks.

## 4. Community Hot Topics
*   **[Issue #2293] Multi-Agent USER.md Overwrite Bug**
    *   *Link:* https://github.com/netease-youdao/LobsterAI/issues/2293
    *   *Analysis:* Users are frustrated by the loss of distinct agent personas due to configuration synchronization bugs. This highlights a critical need for robust state isolation between agents. Fortunately, **PR #2295** has been merged to fix this exact issue, suggesting this topic will likely be resolved in the near term.
*   **[Issue #1400] Gateway Infinite Restart Loop**
    *   *Link:* https://github.com/netease-youdao/LobsterAI/issues/1400
    *   *Analysis:* A severe regression in version 4.1 causing startup failures. This is a high-priority stability issue affecting core usability. It indicates potential compatibility problems between the new gateway architecture and older custom LLM configurations (e.g., Qwen 3.5 Plus).

## 5. Bugs & Stability
*   **Critical: Gateway Startup Failure (Issue #1400)**
    *   *Severity:* High
    *   *Description:* Upgrading to v4.1 causes the gateway to enter an infinite restart loop. Users report conflicts with custom LLM providers and web-extractor dependencies.
    *   *Status:* Open. No linked fix PR yet.
*   **High: Cross-Agent Configuration Corruption (Issue #2293)**
    *   *Severity:* High
    *   *Description:* Modifying `USER.md` or "About You" in one agent overwrites data for all other agents.
    *   *Status:* Fixed via **PR #2295** (merged). Users should verify if the fix resolves their specific instance.
*   **Medium: IM Session Mapping Leakage (Issue #1400 context)**
    *   *Severity:* Medium
    *   *Description:* Previous behavior allowed IM sessions to collapse across different agents.
    *   *Status:* Fixed via **PR #2298** (merged).

## 6. Feature Requests & Roadmap Signals
*   **Advanced Scheduling & Cron Support (PR #1347)**
    *   *Signal:* There is strong community interest in granular control over automated tasks. The PR introduces visual Cron builders and agent-specific scheduling.
    *   *Prediction:* Likely to be a key selling point in the next major feature update.
*   **Delegated Subagent Collaboration (PR #2285)**
    *   *Signal:* Users are moving beyond simple agents to complex, hierarchical workflows. The ability to define "allowlists" for subagents suggests a roadmap toward enterprise-grade orchestration.
*   **Skills Management (PR #1346)**
    *   *Signal:* Ongoing efforts to modularize agent capabilities, allowing users to enable/disable specific skills dynamically.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Data Integrity:** Users feel anxious about losing custom agent definitions (`USER.md`) due to sync bugs. Trust in the multi-agent feature is currently fragile.
    *   **Upgrade Stability:** The transition from v3.3 to v4.1 has been problematic, with reports of complete paralysis (infinite loops) and broken LLM integrations.
    *   **UI Consistency:** Native HTML elements (like `<input type="time">`) clash with the app's custom theme, leading to requests for polished, consistent UI components (see PR #1404).
*   **Satisfaction:**
    *   Positive reception of security improvements (UUID generation) and the introduction of minimizable UI elements in Cowork sessions, which reduces cognitive load.

## 8. Backlog Watch
*   **[Issue #1348] Scheduled Task Name Duplication**
    *   *Link:* https://github.com/netease-youdao/LobsterAI/issues/1348
    *   *Status:* Open/Stale.
    *   *Action:* Needs validation logic to prevent duplicate task names, which could cause execution conflicts.
*   **[PR #1346] Skills Management**
    *   *Link:* https://github.com/netease-youdao/LobsterAI/pull/1346
    *   *Status:* Open/Stale.
    *   *Action:* This PR has been open since April. Maintainers should review for merge readiness or request updates to ensure it aligns with the latest `main` branch changes.
*   **[Issue #1400] Gateway Crash**
    *   *Link:* https://github.com/netease-youdao/LobsterAI/issues/1400
    *   *Status:* Open.
    *   *Action:* Critical blocker for v4.1 users. Requires immediate investigation into the interaction between the new gateway, web-extractor, and custom LLM providers.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest: 2026-07-09

### 1. Today's Overview
The TinyAGI/tinyagi repository exhibits minimal activity on July 9, 2026, with zero new issues opened or updated in the last 24 hours and no new releases published. The primary recent event was the closure of Pull Request #44 on July 8, which focused on significant security hardening measures rather than feature expansion. Current project status indicates a stable but quiet maintenance phase, with no immediate blockers or urgent community discussions requiring attention.

### 2. Releases
No new versions have been released since the last update. The project remains on its current stable build without any new deployment artifacts or changelogs generated today.

### 3. Project Progress
The most notable progress is the completion of **PR #44**, titled "Harden channel auth, file safety, and update integrity," which was merged and closed on July 8, 2026. This pull request addressed critical security findings from a previous code-review audit. Key advancements include:
*   **Sender Allowlists:** Enforcement of default-on allowlists for Telegram, Discord, WhatsApp, and queue processing to prevent unauthorized agent invocation.
*   **File Safety:** Hardened outbound file handling mechanisms to mitigate data leakage or injection risks.
*   **Update Integrity:** Strengthened bundle update and installation verification processes.

[View PR #44](https://github.com/TinyAGI/tinyagi/pull/44)

### 4. Community Hot Topics
There are currently no active community hot topics. No issues or pull requests have received new comments or reactions in the last 24 hours. The lack of engagement suggests that the recent security updates have been accepted without controversy, or that the community is currently dormant.

### 5. Bugs & Stability
No new bugs, crashes, or regressions were reported today. The repository shows 0 open issues, indicating that the current codebase is stable from a user-reporting perspective. The security hardening in PR #44 likely mitigates several potential stability and security vulnerabilities related to unauthenticated access and file handling.

### 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap signals were observed today. The absence of open issues means there is no immediate visibility into upcoming user-driven development priorities. The focus has clearly shifted from feature addition to security compliance and hardening in the recent past.

### 7. User Feedback Summary
Due to the complete lack of new issue activity and comments, there is no real-time user feedback available for today. The silence suggests either high user satisfaction with the current state or a low-traffic period for the project. Prior to today, the main concern addressed was security, specifically around authentication and file safety, which has now been resolved via PR #44.

### 8. Backlog Watch
There are no items in the backlog requiring immediate maintainer attention today. With 0 open issues and no pending pull requests other than the recently closed PR #44, the maintainers' queue is clear. Future monitoring should track whether the security changes introduce any unintended side effects in multi-channel environments (Telegram/Discord/WhatsApp).

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-07-09

### 1. Today's Overview
The Moltis project exhibits minimal activity over the last 24 hours, with zero new issues opened or closed and no new releases published. Development momentum is currently focused on a single open pull request addressing a critical stability issue within the CalDAV integration module. The absence of new discussions or merged contributions suggests a quiet maintenance cycle, with the primary focus being the resolution of potential runtime panics rather than feature expansion.

### 2. Releases
No new versions have been released in the last 24 hours.

### 3. Project Progress
*   **Open Pull Request:** PR #1145 is currently open, authored by `Osamaali313`.
    *   **Focus:** This PR aims to fix a panic in the `normalise_datetime` function located in `crates/caldav/src/ical.rs`.
    *   **Status:** The fix addresses a vulnerability where non-ASCII datetime values from remote CalDAV servers could cause the application to crash during date parsing.
    *   **Link:** [moltis-org/moltis PR #1145](https://github.com/moltis-org/moltis/pull/1145)

### 4. Community Hot Topics
There are no active community hot topics today. With 0 new issues and 0 comments on existing items, there is no immediate discussion regarding new feature requests or broader architectural debates. The single open PR has garnered 0 reactions, indicating it may be a niche technical fix or still awaiting review attention.

### 5. Bugs & Stability
*   **Critical Stability Issue (Potential Panic):** PR #1145 identifies a bug where `normalise_datetime` fails safely when encountering non-ASCII characters in DATE branches. While this specific bug was reported via a fix PR rather than an issue report today, it represents a significant stability risk for users interacting with non-standard CalDAV servers.
    *   **Severity:** High (Causes application crash/panic).
    *   **Fix Status:** A fix is proposed in PR #1145.
    *   **Link:** [moltis-org/moltis PR #1145](https://github.com/moltis-org/moltis/pull/1145)

### 6. Feature Requests & Roadmap Signals
No new feature requests were submitted today. The lack of new issues suggests that the user base is either stable in its current usage patterns or that feature discovery/discussion is occurring outside of GitHub issues.

### 7. User Feedback Summary
No direct user feedback was collected via new issues or comments today. The focus remains on technical robustness rather than user experience complaints or praise.

### 8. Backlog Watch
Due to the low volume of activity (0 new issues, 0 new PRs), there are no newly identified backlog items requiring immediate maintainer attention beyond the review of PR #1145. Maintainers should ensure PR #1145 receives timely review to prevent potential panics in production environments relying on CalDAV synchronization.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-07-09
**Source:** agentscope-ai/CoPaw (QwenPaw)

## 1. Today's Overview
The CoPaw project demonstrates high velocity with 38 issues and 47 pull requests updated in the last 24 hours, indicating an active development cycle surrounding the v2.0.0-beta transition. A new release, `v2.0.0-beta.4`, was published, focusing heavily on stabilizing the "scroll" context compression mechanism and addressing critical reasoning loops. While core functionality is being hardened, community engagement is dominated by reports of stability regressions in the beta phase, particularly regarding context loss and infinite loops. The maintainers are actively responding to security patches and frontend performance issues, suggesting a push towards a stable v2 release.

## 2. Releases
### v2.0.0-beta.4
*   **Status:** Released recently (referenced in latest updates).
*   **Key Changes:**
    *   **Context Compression Fixes:** Addressed issues with the `scroll` strategy where active turns were being incorrectly folded or lost during context eviction.
    *   **Reasoning Loop Prevention:** Defaulted `preserve_thinking` to `false` to prevent models from entering infinite reasoning loops when previous chain-of-thought data is replayed.
    *   **UI/UX Improvements:** Added visual indicators ("seam banner") to distinguish between archived context summaries and current user inputs in the eviction index.
*   **Migration Notes:** Users upgrading from beta.3 should verify their `agent.json` configuration, specifically checking if `preserve_thinking` is explicitly set, as the default behavior has changed to prevent loop regressions.

## 3. Project Progress
**Merged/Closed PRs & Advances:**
*   **Security Hardening:** PR #5866 fixed a critical bypass in the `rm -rf` detection logic that allowed `${HOME}` expansion, addressing vulnerability #5090.
*   **Tool Call Robustness:** PR #5792 fixed an issue where self-paired tool messages were being dropped during sanitation, improving reliability for complex agent interactions.
*   **Memory Distillation:** PR #4171 introduced a new memory-distill tool plugin with title-diffing capabilities, aiming to reduce noise in long-term memory storage by ~92%.
*   **Frontend Autocomplete:** PR #5869 exposed system commands (e.g., `/new`, `/history`) in slash-command autocomplete for both TUI and Web Console, improving usability.
*   **New Channel Support:** PR #5801 added native support for the **Zalo Bot** channel, expanding reach to the Vietnamese market (100M+ users) via polling-only mode.

## 4. Community Hot Topics
**Most Active Issues (by comments/engagement):**
*   **[Bug] Feishu Channel Non-Response (#5757):** 12 comments. Users report that after the first response, Feishu bots become unresponsive. *Need:* Stability fix for specific IM channel integration.
*   **[Bug] Approval Popup in Closed Mode (#5846):** 10 comments. Despite selecting "Close Mode" (auto-execution), approval popups still appear. *Need:* Logic fix in tool guard configuration.
*   **[Bug] Context Compression Losing Persona Files (#5171):** 9 comments. High-token persona files are being compressed out, causing task interruption. *Need:* Better handling of critical system instructions during context eviction.
*   **[Bug] Internal Server Error on Install (#5379):** 8 comments. Python-installed versions crash on startup due to `get_remote_addr` errors. *Need:* Backend compatibility fix for Windows/standard installs.
*   **[Bug] Thinking Loop Deadlock (#5162):** 7 comments. Agents get stuck in thinking loops requiring manual intervention. *Need:* Timeout or break-condition improvements in the reasoning engine.

## 5. Bugs & Stability
**Critical/High Severity Bugs Reported:**
1.  **Context Loss & Infinite Loops in Beta (#5860):** Users report frequent state loss and infinite repetition in `v2.0.0-beta.3/4`. *Status:* Mitigation attempted in beta.4 via `preserve_thinking=false`, but further regression testing needed.
2.  **Scroll Strategy Errors (#5746):** The new `scroll` compression is misidentifying active tasks, causing the model to reply to old messages. *Status:* Fixed in PR #5871 and #5848.
3.  **Vector Index Not Persisting on Windows (#5259):** Memory search fails on Windows unless "Rebuild on Startup" is forced. *Status:* Open, likely a platform-specific file locking or path issue.
4.  **Matrix Token Authentication Failure (#5868):** Upgrade breaks Matrix channel connectivity due to header/query parameter mixing. *Status:* Open, requires auth module update.
5.  **Tool Call Argument Errors (#5052):** Models fail with `unexpected keyword argument 'arguments'` after several iterations. *Status:* Closed/Fixed, related to OpenAI client compatibility.

## 6. Feature Requests & Roadmap Signals
*   **System Notification Sounds (#5852):** Strong demand for audio alerts when tool calls require human approval, allowing users to step away from the screen.
*   **Tray Minimization for Desktop (#5312):** Users want the Desktop app to minimize to the system tray rather than closing, mirroring standard productivity software behavior.
*   **Agent Swarm Collaboration (#5139):** Request for native multi-agent team/swarm capabilities similar to competitors.
*   **Command Queuing (#3302):** Ability to queue multiple instructions while an agent is busy, rather than blocking input.
*   **Windows GUI Automation (#5187):** PR #5187 proposes a `computer_use` tool for Windows desktop control (UIA), signaling a move toward full OS-level agent autonomy.

## 7. User Feedback Summary
*   **Frustration with Beta Instability:** Multiple users report that v2.0 betas are introducing regressions (context loss, loops) that were present in v1.x or are new. The "scroll" compression feature is a major point of contention.
*   **Performance Concerns:** Streaming output causes browser lag (#5725), and switching between agents causes UI stutter (#5421). Users expect smoother performance comparable to commercial alternatives like DeepSeek.
*   **Installation Pain Points:** Python-based installations and Docker setups are experiencing inconsistent errors (#5379, #5166 with Python 3.13 compatibility).
*   **Positive Reception:** The introduction of memory distillation (#4171) and security fixes (#5866) are appreciated by power users concerned with long-term memory hygiene and safety.

## 8. Backlog Watch
*   **#5259 (Windows Memory Persistence):** Affects core memory functionality on a major OS; needs prioritization for v2.0 final release.
*   **#5868 (Matrix Auth Breakage):** Blocks a key channel for enterprise/social integrations; requires quick patch.
*   **#5784 (Frontend Threshold Display):** Incorrect display of compression thresholds due to multi-provider model ID conflicts; impacts user trust in configuration settings.
*   **#5378 (Custom Model UI Bug):** Adding custom models breaks the UI query box; prevents adoption of custom endpoints.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-07-09
**Source:** github.com/zeroclaw-labs/zeroclaw

## 1. Today's Overview
ZeroClaw exhibits high development velocity with 50 issues and 50 pull requests updated in the last 24 hours, indicating intense active maintenance and feature iteration. The project is heavily focused on architectural refactoring, specifically moving towards a WASM-based plugin system and standardizing provider implementations, alongside critical security hardening of tool access. While no new releases were published today, the volume of merged and closed PRs suggests a significant stabilization phase is underway, particularly regarding MCP tool filtering and webhook security.

## 2. Releases
*   **No new releases.**
*   *Note:* Several high-risk fixes and enhancements are currently in `master` or open PRs (e.g., PR #8854, PR #8713) but have not yet been tagged in a new version.

## 3. Project Progress
**Merged/Closed Items:**
*   **[PR #8861]** Fixed model catalog credential resolution, ensuring native `/models` endpoints work for credentialed providers (PR Closed/Merged).
*   **[PR #8639]** Implemented `TodoWrite` tracker for ZeroCode, enabling durable task persistence similar to Claude Code (PR Closed/Merged).
*   **[PR #8795]** Added "Skills" navigation entry to the web UI sidebar, improving discoverability (PR Closed/Merged).
*   **[PR #7690]** Added provider wire option propagation tests (PR Closed/Merged).
*   **[PR #7737]** Fixed approval attribution logic to avoid global side-channel conflicts (PR Closed/Merged).

**Active Advances:**
*   **[PR #8854]** Major refactor of the `providers` crate to enforce typed builders and uniform construction patterns, reducing code duplication.
*   **[PR #8863]** Advancing WASM plugin infrastructure by implementing host-mediated outbound WebSocket support for channel plugins.
*   **[PR #8769]** Localizing channel runtime replies to improve CLI consistency.

## 4. Community Hot Topics
*   **[Issue #5862] zeroclaw does not know it can add cron** (13 Comments)
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/5862
    *   *Analysis:* Users are frustrated by the gap between intended functionality (cron scheduling) and agent awareness. This highlights a need for better tool discovery prompts or explicit capability declarations in the agent's system instructions.
*   **[Issue #6034] User messages lost in single/multi-turn conversations** (7 Comments)
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/6034
    *   *Analysis:* A critical workflow blocker involving custom API providers (Qwen3.5-35B). Indicates instability in the `runtime/daemon` when handling non-standard LLM responses.
*   **[Issue #8424] RFC: .ignore File Mechanism for Workspace File Protection** (7 Comments)
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8424
    *   *Analysis:* Strong community demand for granular security controls. Users want to protect internal config files (`.env`, `rust-toolchain.toml`) from AI agent access, suggesting the current `forbidden_paths` is insufficient for complex workspaces.

## 5. Bugs & Stability
*   **[Issue #6724] Channels supervisor crashloops** (High Severity)
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/6724
    *   *Status:* Open. When all channels are disabled or misconfigured, the supervisor enters a restart loop.
*   **[Issue #7527] macOS App not working** (High Severity)
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7527
    *   *Status:* Open. Desktop clients face permission detection failures and UI rendering issues.
*   **[Issue #6672] Reasoning content lost in Xiaomi thinking mode** (High Severity)
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/6672
    *   *Status:* Open. `reasoning_content` is not forwarded in agentic loops, impacting models that rely on chain-of-thought visibility.
*   **[PR #8725] Webhook security fix**
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/pull/8725
    *   *Status:* Open. Refuses to start webhook listeners without a secret, addressing a security vulnerability.
*   **[PR #8713] SSRF Gate for file_download**
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/pull/8713
    *   *Status:* Open. Adds `allowed_private_hosts` opt-in to prevent Server-Side Request Forgery attacks via file downloads.

## 6. Feature Requests & Roadmap Signals
*   **[Issue #8850] Move channels/tools to runtime WASM plugins**
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8850
    *   *Signal:* The team is prioritizing dynamic plugin loading over compile-time features to reduce binary size and increase flexibility.
*   **[Issue #8603] OpenAI Chat Completions compatibility adapter**
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8603
    *   *Signal:* Demand for broader ecosystem integration (Open WebUI, LobeChat) is driving the creation of an OpenAI-compatible gateway layer.
*   **[Issue #7543] Multi-session support in Gateway Web UI**
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7543
    *   *Signal:* Users require concurrent conversation management within the web interface, moving beyond single-session limits.
*   **[Issue #8226] Per-agent custom environment variables**
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8226
    *   *Signal:* Multi-tenancy and isolated agent configurations are becoming a priority for enterprise/power users.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Configuration Complexity:** Users struggle with `forbidden_paths` vs. `.ignore` mechanisms and setting up secure webhook/channel configurations (Issues #8424, #7215).
    *   **Provider Compatibility:** Custom API providers (Qwen, Xiaomi Mimo) often fail to pass through critical metadata like `reasoning_content` or handle errors gracefully (Issues #6034, #6672).
    *   **Desktop Instability:** The macOS application faces significant usability hurdles regarding permissions and UI rendering (Issue #7527).
*   **Positive Signals:**
    *   The community actively contributes to security audits (e.g., PR #8713, PR #8725) and documentation fixes.
    *   Interest in "Claude Code-like" features such as `TodoWrite` trackers is high (PR #8639).

## 8. Backlog Watch
*   **[Issue #6034] User message loss** (Created: 2026-04-23)
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/6034
    *   *Risk:* High. Blocked/Needs Repro. This is a long-standing critical bug affecting core functionality with specific providers.
*   **[Issue #6558] Providers erro** (Created: 2026-05-10)
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/6558
    *   *Risk:* Medium/Low (Stale Candidate). Related to DashScope/Qwen API errors. Needs author action to reproduce.
*   **[Issue #7911] Android Termux Setup** (Created: 2026-06-18)
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7911
    *   *Risk:* Low. Installation support issue for edge-case hardware (ARM64 Android).
*   **[PR #7215] Quickstart webhook port field** (Created: 2026-06-04)
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/pull/7215
    *   *Risk:* Medium. Fixes a First-Time User Experience (FTUE) blocker but has been open for over a month.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/gittok).*