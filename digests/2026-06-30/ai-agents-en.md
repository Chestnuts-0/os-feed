# OpenClaw Ecosystem Digest 2026-06-30

> Issues: 395 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-30 02:27 UTC

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

# OpenClaw Project Digest: 2026-06-30

### 1. Today's Overview
OpenClaw is experiencing peak development velocity with **395 active issues** and **500 open pull requests** updated in the last 24 hours. The project is heavily focused on stabilizing session state management, fixing critical regressions introduced in recent minor updates (specifically around the 2026.5.12 and 2026.6.x releases), and enhancing cross-platform compatibility. There are no new releases today, indicating the team is prioritizing bug squashing and architectural fixes over shipping new features. The high volume of "needs-live-repro" and "needs-maintainer-review" tags suggests a bottleneck in validation capacity.

### 2. Releases
*   **No new releases published today.**
*   Current focus remains on stabilizing the `2026.6.x` and `2026.5.x` branches. Recent user reports highlight regressions in these versions regarding cold starts, OAuth handling, and session continuity.

### 3. Project Progress
Significant engineering effort is being directed toward infrastructure stability and provider integrations:
*   **Security & Transport Fixes:** PR **#97868** aims to wire `buildGuardedModelFetch` into all Anthropic SDK constructors to prevent SSRF and ensure consistent timeout/retry behavior. Similarly, PR **#97848** applies this guard to OpenAI Responses.
*   **Proxy Configuration:** PR **#97713** addresses critical `NO_PROXY` matching issues for global undici dispatchers, ensuring internal plugin requests bypass proxies correctly.
*   **Web UI Improvements:** PR **#96107** fixes text sanitization to preserve user-visible prose after error prefixes, and PR **#95153** addresses dashboard session key reuse on reconnect.
*   **Channel Specifics:** PR **#92518** fixes media delivery in Google Chat when app authentication lacks upload permissions, and PR **#77017** adds first-class generated image actions in the UI.
*   **Documentation & DevEx:** PR **#61775** enhances the Makefile for better build/test workflows, and PR **#62503** adds a devcontainer for Windows compatibility.

### 4. Community Hot Topics
The community is highly engaged with issues affecting core reliability and platform expansion:
*   **Linux/Windows App Support (#75):** With **110 comments** and 81 reactions, the demand for native desktop applications on Linux and Windows is the highest-priority feature request. Users want parity with the existing macOS/iOS/Android nodes.
    *   [View Issue #75](https://github.com/openclaw/openclaw/issues/75)
*   **Session State & Message Loss (#86538):** This bug regarding session write-lock timeouts blocking subagent delivery has **18 comments**. It highlights deep architectural concerns about concurrency and state consistency.
    *   [View Issue #86538](https://github.com/openclaw/openclaw/issues/86538)
*   **Telegram Bot-to-Bot Features (#79077):** Following Telegram's May 2026 update, users are requesting support for Guest Bots and Bot-to-Bot communication (**8 comments**, 8 reactions).
    *   [View Issue #79077](https://github.com/openclaw/openclaw/issues/79077)
*   **QA Tool Defaults (#80319):** Disputes over whether issues are runtime bugs or QA harness misconfigurations are driving significant discussion (**17 comments**).
    *   [View Issue #80319](https://github.com/openclaw/openclaw/issues/80319)

### 5. Bugs & Stability
A wave of regressions and stability issues is dominating the backlog, particularly concerning session handling and provider connectivity:
*   **Critical: Session Write-Lock Timeouts (#86538):** Blocks main, cron, and subagent lanes, causing delivery failures. Rated "Diamond Lobster" (High Severity).
*   **Critical: Telegram Message Drops (#80520):** Messages are silently dropped without logging `sendMessage` calls, leading to poor user experience.
*   **Regression: CLI Cold Start Latency (#82070):** CLI commands take ~14s longer after the 2026.5.12 update. This affects all users relying on the CLI.
*   **Regression: Discord Guild Reply Loops (#81484):** Malformed send payloads and repeated outbound loops in Discord server channels.
*   **Regression: Cron Job Failures (#91363):** Isolated cron jobs consistently fail with "LLM request failed" during the `model-call-started` phase, suggesting a provider handshake or timeout configuration issue.
*   **Stability: Empty Error Retry Block (#97877):** A logic error prevents retries for transient 5xx errors if any prior tool call existed in the session, causing silent terminal failures.
*   **Stability: DeepSeek Cache Hit Rate Drop (#94518):** Upgrading to 2026.6.x reduced DeepSeek cache hit rates below 10% due to boundary-aware caching breaking prefix matching.

### 6. Feature Requests & Roadmap Signals
*   **Cross-Platform Desktop Apps (#75):** The overwhelming interest in Linux/Windows support signals this is a top roadmap priority for mass adoption.
*   **Skill Setup Hooks (#80213):** Users are requesting a `setup.script` hook in `SKILL.md` to automate post-installation steps for complex skills, improving the plugin ecosystem maturity.
*   **Pre-Routing Message Hooks (#81061):** Developers need a `before_route_inbound_message` hook to enable channel bridging and proxying before a message is assigned to a session.
*   **Multi-Provider Onboarding (#81960):** Users want to configure multiple providers and models directly during the initial `openclaw onboard` flow, rather than editing configs manually.
*   **Accessible Linear Workspace (#82450):** A specific request from blind users for a "Linear Persistent Workspace Mode" highlights the need for improved accessibility features.

### 7. User Feedback Summary
*   **Pain Points:** The most common complaint is **silence**. Users report messages being dropped (Telegram, Discord) or errors occurring without clear user-facing notices (billing rejections, network timeouts). This lack of feedback loop is causing significant frustration.
*   **Performance:** Cold starts for CLI commands and embedded agent runs are perceived as too slow (~10-17s overhead), degrading the interactive feel of the tool.
*   **Reliability:** Frequent regressions in recent patches (e.g., 2026.5.12, 2026.6.x) have eroded trust. Users are hesitant to update without extensive testing due to issues with OAuth, media handling, and session persistence.
*   **Use Cases:** Power users are leveraging OpenClaw for complex workflows involving browser automation, social media posting, and multi-agent coordination, but are hitting limits with current session state management and tool output parsing.

### 8. Backlog Watch
Several high-impact issues require immediate maintainer attention to clear the backlog:
*   **#75 [Linux/Windows Apps]:** Long-standing feature request with high community support. Needs a product decision and technical feasibility assessment.
*   **#81061 [Pre-routing Hook]:** Critical for advanced plugin architectures. Needs maintainer review to define the SDK contract.
*   **#80213 [Skill Setup Hook]:** Enhances plugin usability. Needs product decision on security implications of running user-provided scripts.
*   **#97868 [Anthropic Guarded Fetch]:** While a fix, it touches core transport layers. Requires careful review to ensure it doesn't break existing auth flows.
*   **#91363 [Isolated Cron Failures]:** A persistent bug affecting automated workflows. Needs a live reproduction to diagnose the `model-call-started` phase failure.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparative Report: Personal AI Agent Ecosystem
**Date:** 2026-06-30
**Analyst:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The open-source personal AI agent landscape in mid-2026 is characterized by a shift from experimental prototyping to industrial-grade stability and multi-channel interoperability. Projects are heavily focused on resolving critical regressions in session state management, security hardening (particularly around file handling and proxy configurations), and optimizing LLM token costs through advanced caching and compaction. The market is fragmenting slightly between monolithic platforms seeking broad channel parity (OpenClaw, IronClaw) and specialized, lightweight frameworks prioritizing specific protocols or architectural innovations like WASM plugins (ZeroClaw, NanoClaw).

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **Hermes Agent** | 50 | 50 | No New Release | High (Stabilizing) |
| **ZeroClaw** | 50 | 50 | No New Release | High (Transitioning) |
| **CoPaw** | 31 | 50 | No New Release | High (Refactoring) |
| **OpenClaw** | 395* | 500* | No New Release | Critical (Regressions) |
| **IronClaw** | 14 | 50 | Internal Bumps | High (Migration) |
| **NanoBot** | 7 | 33 | No New Release | Moderate |
| **NanoClaw** | 1 | 7 | No New Release | Moderate |
| **NullClaw** | 1 | 4 | No New Release | Low-Moderate |
| **LobsterAI** | 1 | 40 | **v2026.6.29** | Moderate |
| **PicoClaw** | 3 | 3 | No New Release | Low (Stale Risks) |
| **TinyClaw** | 0 | 0 | No Activity | Inactive |
| **Moltis** | 0 | 0 | No Activity | Inactive |
| **ZeptoClaw** | 0 | 0 | No Activity | Inactive |

*\*Note: OpenClaw’s issue/PR counts reflect a massive backlog of "needs-live-repro" items, indicating high volume but potentially lower signal-to-noise ratio compared to Hermes/ZeroClaw’s focused technical updates.*
*\*Health Score is derived from release frequency, bug resolution rate, and community engagement balance.*

## 3. OpenClaw's Position
**Advantages:** OpenClaw boasts the largest community engagement volume, with overwhelming demand for cross-platform desktop support (Linux/Windows). Its strength lies in its breadth of channel integrations and established presence in consumer-facing automation.
**Technical Differences:** Unlike ZeroClaw’s WASM-first approach or NanoClaw’s focus on specific security patches, OpenClaw is currently bogged down by architectural debt in session state management and OAuth handling.
**Community Size:** OpenClaw has the highest raw number of active participants and comments, but suffers from "noise" due to frequent regressions in recent minor updates (2026.5.12/6.x), leading to user hesitation in updating.

## 4. Shared Technical Focus Areas
*   **Session State & Integrity:**
    *   *Projects:* OpenClaw, NanoBot, Hermes Agent, ZeroClaw.
    *   *Need:* Robust locking mechanisms, prevention of session poisoning/corruption during streaming, and consistent state persistence across reconnections.
*   **Security Hardening:**
    *   *Projects:* NanoBot, NanoClaw, ZeroClaw, Hermes Agent.
    *   *Need:* Mitigation of symlink escapes, SSRF prevention in model fetches, credential redaction in logs, and strict workspace restrictions for shell commands.
*   **Token & Cost Optimization:**
    *   *Projects:* NanoBot, PicoClaw, CoPaw, LobsterAI.
    *   *Need:* Advanced prompt caching (AWS Bedrock, DeepSeek prefix caching), context compaction/pruning, and transparent per-turn token usage tracking.
*   **Channel Reliability & Parity:**
    *   *Projects:* All active projects.
    *   *Need:* Fixing silent message drops (Telegram/Discord), handling file/image transmission inconsistencies across platforms, and ensuring stable gateway connections (keep-alive).

## 5. Differentiation Analysis
*   **Architectural Philosophy:**
    *   *ZeroClaw* is pioneering a **WASM-first plugin architecture** with OCI-compliant registries, targeting secure, sandboxed extensibility.
    *   *OpenClaw* and *IronClaw* represent **monolithic, feature-rich platforms** prioritizing breadth of integration (WebUI, multiple channels) over modular minimalism.
    *   *NanoBot* and *NanoClaw* focus on **specialized utility**, with NanoBot emphasizing shell security and NanoClaw addressing specific adapter gaps (Discord/Slack).
*   **Target Users:**
    *   *Enterprise/Power Users:* IronClaw (RBAC, routines), ZeroClaw (A2A discovery, security gates).
    *   *Consumer/Automation Enthusiasts:* OpenClaw (desktop apps, broad channel support), LobsterAI (IM plugin integration).
    *   *Developers/Researchers:* CoPaw (AgentScope integration, subagent lifecycle), NanoBot (lightweight CLI).

## 6. Community Momentum & Maturity
*   **Rapid Iteration/Stabilization Phase:** **Hermes Agent**, **ZeroClaw**, and **CoPaw**. These projects are merging high volumes of critical fixes and architectural changes (WASM, AgentScope 2.0) without yet tagging major releases, indicating a pre-release stabilization sprint.
*   **Reactive Maintenance:** **OpenClaw** and **IronClaw**. Activity is dominated by bug squashing and regression fixes for recent updates, suggesting maturity but also technical debt accumulation.
*   **Niche/Specialized Growth:** **NanoBot**, **NanoClaw**, and **LobsterAI**. Smaller but highly active communities focused on specific pain points (security, IM plugins).
*   **Stagnant/Inactive:** **TinyClaw**, **Moltis**, **ZeptoClaw**. Lack of activity suggests these projects may be abandoned or pivoted.

## 7. Trend Signals
*   **Shift to Autonomous Reliability:** Users are moving beyond simple chat to persistent, long-running agents. This drives demand for features like "First-class Loop Contracts" (Hermes), "In-App Upgrades" (ZeroClaw), and robust error visibility (IronClaw OAuth fixes).
*   **Security as a Primary Feature:** The proliferation of CVE-style fixes (symlink escapes, SSRF) and security CI gates (ZeroClaw cargo-audit) indicates that security is no longer an afterthought but a core purchasing criterion for enterprise and serious hobbyist users.
*   **Standardization of Interoperability:** RFCs for **A2A (Agent-to-Agent) discovery** (ZeroClaw) and **WASM plugin standards** suggest the ecosystem is converging on open standards to prevent vendor lock-in and enable multi-agent orchestration.
*   **Cost Sensitivity Drives Engineering:** Direct correlation between token usage visibility and user satisfaction. Projects offering granular cost tracking (PicoClaw, NanoBot) are addressing a critical barrier to scalable adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest**
**Date:** 2026-06-30
**Source:** HKUDS/nanobot

### 1. Today's Overview
The NanoBot project exhibits high velocity with 33 Pull Requests and 7 Issues updated in the last 24 hours, indicating robust community engagement and active maintenance. While no new releases were published today, the sheer volume of merged and open PRs suggests a rapid iteration cycle focused on stability, security, and UX refinement. Key themes include fixing critical installation crashes, enhancing shell security guards, and optimizing context management to reduce token costs. The project remains actively developed by both core maintainers and community contributors.

### 2. Releases
*No new releases published today.*

### 3. Project Progress
Significant progress was made in several areas through merged or advanced PRs:
*   **Installation Stability:** PR #4602 addresses the immediate crash on Linux install scripts (Issue #4599) by handling non-interactive terminals gracefully.
*   **Security Hardening:** PR #4594 fixes a regex vulnerability in the shell guard that allowed absolute paths after equals signs (e.g., `--output=/path`) to bypass workspace restrictions. PR #4584 ensures MCP server credentials are redacted from logs.
*   **Context Optimization:** PR #4581 and #4588 introduce compaction modules and pruning strategies to reduce input tokens, directly addressing cost and performance concerns.
*   **WebUI Enhancements:** PR #4600 refined the prompt rail minimap, while PR #4586 and #4587 added default session timestamps and Markdown export functionality.
*   **Provider Support:** PR #4598 added support for GitHub Copilot endpoint overrides for Enterprise/GHE environments.

### 4. Community Hot Topics
*   **Lightweight Claims vs. Reality:** Issue #660 remains a significant point of discussion (15 comments, 5 👍), where users challenge the "ultra-lightweight" marketing claim due to the inclusion of Node.js dependencies alongside Python. This highlights a community desire for true minimalism.
    *   Link: [HKUDS/nanobot Issue #660](https://github.com/HKUDS/nanobot/issues/660)
*   **Reasoning Effort Control:** Issue #4419 requests automatic escalation of reasoning effort, reflecting a growing need for fine-grained control over LLM thinking depth across different providers.
    *   Link: [HKUDS/nanobot Issue #4419](https://github.com/HKUDS/nanobot/issues/4419)
*   **Session Poisoning & Tool IDs:** Issue #4595 and PR #4596 discuss critical bugs where tool call IDs were overwritten during streaming, leading to permanent session corruption. This is a high-interest technical topic for developers relying on long-running sessions.
    *   Link: [HKUDS/nanobot Issue #4595](https://github.com/HKUDS/nanobot/issues/4595)

### 5. Bugs & Stability
Several critical bugs were reported and addressed today:
1.  **Install Script Crash (High Severity):** Issue #4599 reported an instant crash in the Linux install TUI. PR #4602 provides a fix by skipping the wizard in non-interactive contexts or using `/dev/tty`.
2.  **Tool Call ID Corruption (High Severity):** Issue #4595 identified that `apply_final_call_ids` overwrites unique IDs for non-file-edit tools, causing session poisoning. PR #4596 fixes this by skipping non-file-edit tools in the tracker.
3.  **Shell Guard Bypass (Medium-High Severity):** Issue #4592 revealed that `restrictToWorkspace` could be bypassed via `=` delimited arguments. PR #4594 updates the regex to include `=` as a delimiter.
4.  **Prompt Cache Invalidation (Medium Severity):** Issue #4222 (Closed) highlighted issues with `max_messages` truncation drifting boundaries and invalidating prefix caching, impacting performance and cost.
    *   Link: [HKUDS/nanobot Issue #4222](https://github.com/HKUDS/nanobot/issues/4222)

### 6. Feature Requests & Roadmap Signals
*   **WhatsApp Read Receipts:** PR #4601 adds blue double-check support for WhatsApp, signaling an expansion of supported channels and user experience parity with native apps.
*   **Enterprise Provider Support:** PR #4598 indicates a roadmap focus on supporting enterprise-grade deployments (GHE) by allowing endpoint overrides.
*   **Memory Hygiene:** PR #4589 adds directives to the "Dream" memory consolidation process to prevent fact rot and duplicate skills, suggesting a focus on long-term memory reliability.
*   **Predicted Next Version Focus:** Expect updates around context cost reduction (via PRs #4581/#4588), improved shell security (PR #4594), and better WebUI usability (exports/timestamps).

### 7. User Feedback Summary
Users are expressing strong dissatisfaction with the discrepancy between the project's "lightweight" branding and its actual dependency footprint (Issue #660). Conversely, there is positive reception for practical quality-of-life improvements like Markdown exports (PR #4587) and clearer session timestamps (PR #4586). Security-conscious users appreciate the rigorous fixes to shell guards and credential logging (PRs #4594, #4584). The recurring bug reports regarding session integrity suggest users are running long, complex agent sessions where reliability is paramount.

### 8. Backlog Watch
*   **Issue #660:** Despite being closed, the underlying concern about dependency bloat persists. Maintainers should ensure future documentation or architectural decisions address this perception gap.
*   **Issue #4419:** The request for automatic reasoning effort escalation is gaining traction. If not addressed soon, it may become a priority feature request for power users dealing with variable-cost LLM providers.
*   **Link:** [HKUDS/nanobot Issue #4419](https://github.com/HKUDS/nanobot/issues/4419)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest**
**Date:** 2026-06-30
**Source:** NousResearch/hermes-agent

### 1. Today's Overview
The Hermes Agent project exhibits extremely high velocity, with 50 issues and 50 pull requests updated in the last 24 hours. Activity is dominated by critical stability fixes, particularly regarding gateway message delivery, credential security, and state persistence on niche platforms (ZFS, Windows). While no new official releases were published today, the volume of merged and open PRs suggests an imminent patch release to address these systemic bugs. The project is heavily focused on hardening the core infrastructure rather than introducing major new capabilities.

### 2. Releases
*   **New Releases:** None.
*   **Note:** The high density of P1/P2 bug fixes and security patches today indicates a likely hotfix cycle is underway, though no tagged release has been made public yet.

### 3. Project Progress
Significant engineering effort today was directed toward stabilizing the gateway and desktop environments:
*   **Security & Stability:** Several PRs addressed memory exhaustion risks by bounding REST error body reads across multiple adapters (WhatsApp, Home Assistant, Slack, Google Chat) to 8 KiB limits ([PR #55362](https://github.com/NousResearch/hermes-agent/pull/55362), [PR #55355](https://github.com/NousResearch/hermes-agent/pull/55355), [PR #55357](https://github.com/NousResearch/hermes-agent/pull/55357), [PR #55354](https://github.com/NousResearch/hermes-agent/pull/55354)).
*   **Dashboard Performance:** Optimized session statistics queries to reduce database load from O(N) loops to a single GROUP BY operation ([PR #48932](https://github.com/NousResearch/hermes-agent/pull/48932)).
*   **Desktop UX:** Fixed Windows Git binary resolution using 8.3 short paths to bypass validation errors ([PR #55337](https://github.com/NousResearch/hermes-agent/pull/55337)) and improved session list refreshing upon profile changes ([PR #55363](https://github.com/NousResearch/hermes-agent/pull/55363)).
*   **Agent Logic:** Preserved "verify-on-stop" final answers and surfaced tool-result-only turn endings to prevent silent failures ([PR #55361](https://github.com/NousResearch/hermes-agent/pull/55361), [PR #55317](https://github.com/NousResearch/hermes-agent/pull/55317)).

### 4. Community Hot Topics
The community is actively discussing reliability and configurability:
*   **Gateway Instability:** Issue [#27282](https://github.com/NousResearch/hermes-agent/issues/27282) (10 comments) highlights a critical TUI/gateway exit bug on macOS involving stdin EOF. This is the most discussed issue, reflecting widespread frustration with session drops.
*   **Visual Glitches:** Issue [#50775](https://github.com/NousResearch/hermes-agent/issues/50775) (4 comments, 4 👍) reports severe visual ghosting in Telegram streaming, a high-visibility UI bug affecting many users.
*   **Long-term Automation:** Issue [#21172](https://github.com/NousResearch/hermes-agent/issues/21172) (6 comments) discusses the need for "First-class Loop Contracts" for persistent agent workflows, signaling a shift in user demand from one-off tasks to continuous autonomous agents.
*   **Model Configuration:** Issue [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) (5 comments, 6 👍) urges exposure of the `temperature` parameter, a long-standing request for better inference control.

### 5. Bugs & Stability
Today's bug reports reveal systemic fragility in state management and network handling:
*   **State Corruption:** Issue [#55305](https://github.com/NousResearch/hermes-agent/issues/55305) reports SQLite WAL disk I/O errors corrupting `state.db` on ZFS systems, causing session loss.
*   **Message Delivery Failures:** Issue [#55309](https://github.com/NousResearch/hermes-agent/issues/55309) identifies a crash in Telegram delivery due to unsanitized lone surrogates in model replies.
*   **Integer Precision Loss:** Issue [#55314](https://github.com/NousResearch/hermes-agent/issues/55314) and PR [#55315](https://github.com/NousResearch/hermes-agent/pull/55315) highlight a critical bug where large integers (e.g., Discord/Telegram IDs) are corrupted by float coercion in tool arguments.
*   **Auth/Session Issues:** Issue [#55130](https://github.com/NousResearch/hermes-agent/issues/55130) causes 500 errors on the dashboard when using basic auth alone, and Issue [#20591](https://github.com/NousResearch/hermes-agent/issues/20591) exposes stale environment variable reading in credential pools.
*   **Windows/Shell Bugs:** Issue [#32207](https://github.com/NousResearch/hermes-agent/issues/32207) reports terminal freezing on `/clear`, and Issue [#49242](https://github.com/NousResearch/hermes-agent/issues/49242) notes WhatsApp setup failures on Windows due to PATH resolution.

### 6. Feature Requests & Roadmap Signals
*   **Embedded Browser Control:** PR [#55364](https://github.com/NousResearch/hermes-agent/pull/55364) proposes an embedded browser pane for direct agent observation and control, suggesting a roadmap toward deeper desktop integration and GUI automation.
*   **Configurable Inference Params:** The strong support for Issue [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) indicates users expect granular control over LLM parameters (temperature) in future configs.
*   **Skill Protection:** Issue [#25083](https://github.com/NousResearch/hermes-agent/issues/25083) requests immutable/protected skills, pointing to a growing need for governance and safety constraints in autonomous agent configurations.
*   **Chat Width Customization:** Issue [#55287](https://github.com/NousResearch/hermes-agent/issues/55287) asks for adjustable chat width in Desktop, a minor UX enhancement likely to be adopted soon.

### 7. User Feedback Summary
Users are experiencing significant pain points with **session reliability** and **platform-specific integrations**.
*   **Reliability:** Frequent mentions of gateway exits, state corruption, and silent failures (e.g., [Issue #27282](https://github.com/NousResearch/hermes-agent/issues/27282), [Issue #55305](https://github.com/NousResearch/hermes-agent/issues/55305)) are eroding trust in the agent's ability to maintain long-running tasks.
*   **Integration Friction:** Windows users face specific hurdles with Node/npm resolution and Git paths ([Issue #49242](https://github.com/NousResearch/hermes-agent/issues/49242), [Issue #32207](https://github.com/NousResearch/hermes-agent/issues/32207)), while Telegram users struggle with streaming visual artifacts ([Issue #50775](https://github.com/NousResearch/hermes-agent/issues/50775)).
*   **Security Concerns:** Users are sensitive to credential leakage, as seen in the push to redact debug logs ([PR #55352](https://github.com/NousResearch/hermes-agent/pull/55352)) and secure environment variable handling ([Issue #20591](https://github.com/NousResearch/hermes-agent/issues/20591)).

### 8. Backlog Watch
*   **ACP Credential Resolution:** Issue [#13489](https://github.com/NousResearch/hermes-agent/issues/13489) remains open with low engagement but affects custom provider setups, potentially blocking enterprise or complex API integrations.
*   **DeepSeek Integration:** Issue [#38065](https://github.com/NousResearch/hermes-agent/issues/38065) requests native DeepSeek support in the Desktop app, a popular model that users feel is missing from the UI options.
*   **SSH Persistence:** Issue [#32626](https://github.com/NousResearch/hermes-agent/issues/32626) notes that SSH tunnel settings are lost on restart, a critical flaw for remote deployments that has been open since May.
*   **Context Compression:** Issue [#31684](https://github.com/NousResearch/hermes-agent/issues/31684) offers a feature request for `compress_context` to manage long sessions, addressing scalability concerns for power users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-06-30

### 1. Today's Overview
The PicoClaw project exhibits moderate daily activity with three issues and three pull requests updated in the last 24 hours. No new releases were published, indicating the codebase is currently in a stabilization or feature-refinement phase rather than a rapid release cycle. Community engagement is visible through ongoing discussions on privacy-focused gateways and cloud provider optimizations, though several items are marked as "stale," suggesting potential maintenance latency. The project remains technically active with developers contributing to core infrastructure improvements like token tracking and AWS Bedrock caching.

### 2. Releases
*   **No new releases.**
    *   There are no new version tags or changelogs issued since the previous reporting period. Users should continue relying on existing stable builds (latest referenced: v0.2.9) while monitoring open PRs for upcoming features.

### 3. Project Progress
*   **PR #3063 (feat: add deltachat gateway):** Open. This pull request introduces support for the Delta Chat protocol, expanding PicoClaw’s connectivity options beyond standard web APIs. It includes documentation updates, signaling readiness for integration testing.
*   **PR #3163 (feat(bedrock): leverage Converse prompt caching via cache points):** Open. Submitted by `loafoe`, this PR optimizes AWS Bedrock interactions by implementing explicit cache points. This is a significant performance enhancement aimed at reducing latency and cost for users leveraging AWS services.
*   **PR #3156 (feat(pico): emit per-turn LLM token usage on finalized message):** Open. Also by `loafoe`, this contribution improves observability by exposing granular input/output token counts per conversation turn. This aids users in monitoring costs and usage patterns directly through the Pico channel.

### 4. Community Hot Topics
*   **Privacy-Centric Communication Protocols (Issue #3093):**
    *   *Link:* [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)
    *   *Analysis:* User `Damian-o2` is requesting gateways for SimpleX, Tox, or Wire. With 4 comments and 1 reaction, this highlights a growing demand for decentralized, privacy-first communication standards within the AI agent ecosystem. The presence of the `[stale]` label suggests this feature request has been dormant but retains user interest.
*   **Delta Chat Integration (PR #3063):**
    *   *Link:* [PR #3063](https://github.com/sipeed/picoclaw/pull/3063)
    *   *Analysis:* The submission of a Delta Chat gateway PR aligns with the community interest in alternative messaging protocols seen in Issue #3093. It indicates that contributors are actively responding to niche connectivity needs.

### 5. Bugs & Stability
*   **iOS Safari Compatibility Regression (Issue #3090):**
    *   *Link:* [Issue #3090](https://github.com/sipeed/picoclaw/issues/3090)
    *   *Severity:* Medium (UI/UX Blocker for specific demographics).
    *   *Details:* The panel fails to function correctly on Safari versions below 16.4 on iOS. This issue was closed today, likely resolved via a patch or workaround, improving accessibility for older device users.
*   **Volcengine Tool Call Leakage (Issue #3153):**
    *   *Link:* [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)
    *   *Severity:* High (Functional Breakage).
    *   *Details:* When using Volcengine’s `doubao-seed-2.0-pro`, tool calls are occasionally leaked as raw XML text (`<seed:tool_call>`) instead of being executed. This affects the reliability of agent actions. The issue is still open and marked stale, requiring urgent attention from maintainers or contributors familiar with the Volcengine adapter.

### 6. Feature Requests & Roadmap Signals
*   **SimpleX/Tox/Wire Gateways:** The request in Issue #3093 signals a roadmap opportunity for PicoClaw to support end-to-end encrypted, serverless messaging protocols. If integrated, this would distinguish PicoClaw as a privacy-resilient agent framework.
*   **Enhanced Observability:** PR #3156 suggests a roadmap direction toward better cost-tracking and debugging capabilities for LLM interactions, moving beyond simple black-box inference.
*   **Cloud Cost Optimization:** PR #3163 indicates a focus on optimizing operational costs for enterprise/cloud users via prompt caching, a key feature for scalable deployments.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by UI incompatibilities on legacy iOS devices (resolved) and critical functional bugs where AI agents fail to execute tools due to formatting leaks (Volcengine/Doubao).
*   **Use Cases:** The community is heavily invested in connecting AI agents to diverse messaging platforms (Delta Chat, SimpleX, Tox) rather than just standard HTTP/WebSocket interfaces.
*   **Satisfaction:** The closure of the Safari bug is positive feedback for stability. However, the "stale" status of critical bugs and feature requests may lead to user churn if maintainers do not engage more frequently.

### 8. Backlog Watch
*   **Issue #3093 (SimpleX/Tox Gateway):** Despite having recent comments, it is marked `[stale]`. Maintainers should evaluate if this feature fits the core roadmap or if community PRs (like #3063) can serve as a template for other protocol integrations.
*   **Issue #3153 (Volcengine Tool Leak):** This is a high-severity bug affecting core functionality. It is marked `[stale]` despite being created recently (June 22). Immediate triage is recommended to prevent degradation of user trust in the Volcengine adapter.
*   **Open PRs (#3063, #3163, #3156):** All three current PRs are open. Reviewing and merging these would demonstrate active development momentum and address both feature expansion (Delta Chat) and technical debt (Bedrock caching, Token tracking).

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-30
**Source:** github.com/qwibitai/nanoclaw

### 1. Today's Overview
NanoClaw demonstrates high development velocity with seven pull requests updated in the last 24 hours, indicating active maintenance across security, channel integrations, and internal tooling. While no new releases were published, the focus remains on stabilizing existing adapters (Discord, Slack) and patching critical security vulnerabilities related to file handling. A significant open issue regarding Discord attachment handling suggests ongoing friction with URL-only chat SDK adapters, contrasting with the successful Telegram integration. Overall, the project is in a robust state of iterative improvement, prioritizing security fixes and multi-channel parity.

### 2. Releases
*   **Status:** No new releases were published today.

### 3. Project Progress
The following pull requests were merged or closed today, advancing feature sets and fixing regressions:

*   **[Closed] PR #2883: Voice Notify V3 Intent Routing**
    *   **Author:** tier2tech-tian
    *   **Impact:** Refactored voice notification logic to support intent-based splitting (action, silent, navigate, tech_status, notify). Added a runtime kill-switch (`VOICE_SUMMARY_VERSION=off`) and optimized output for code blocks/long tables.
    *   **Link:** [PR #2883](https://github.com/nanocoai/nanoclaw/pull/2883)

*   **[Closed] PR #2882: Messaging-Groups Default Instance Fix**
    *   **Author:** omri-maya
    *   **Impact:** Resolved a `NOT NULL` constraint violation in `ncl messaging-groups create` by ensuring the `instance` column is correctly included in generic CRUD inserts.
    *   **Link:** [PR #2882](https://github.com/nanocoai/nanoclaw/pull/2882)

*   **[Open/Merged Context] PR #2880: Security Fix for Symlink Escapes**
    *   **Author:** johnmathews
    *   **Impact:** Addresses CWE-59 (symlink-follow) by containing inbox symlink escapes in attachment writes. Prevents compromised agents from writing arbitrary files on the host via session directory mounts.
    *   **Link:** [PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880)

*   **[Open] PR #2886: Channel Provider Inheritance Fix**
    *   **Author:** thisdotrob
    *   **Impact:** Fixes 401 errors on single-provider installs when creating new agents via channel approval flows, ensuring new agents inherit the installation's provider rather than defaulting to Claude.
    *   **Link:** [PR #2886](https://github.com/nanocoai/nanoclaw/pull/2886)

*   **[Open] PR #2884: Discord Adapter & Gateway Approval Fix**
    *   **Author:** rudgalvis
    *   **Impact:** Adds a dedicated Discord channel adapter via Chat SDK bridge (Gateway mode) and fixes approval-button routing in DMs.
    *   **Link:** [PR #2884](https://github.com/nanocoai/nanoclaw/pull/2884)

*   **[Open] PR #2885: Slack Socket Mode Setup**
    *   **Author:** thisdotrob
    *   **Impact:** Integrates Slack Socket Mode into the guided setup flow, correcting a previous merge where this feature was isolated to the `channels` branch.
    *   **Link:** [PR #2885](https://github.com/nanocoai/nanoclaw/pull/2885)

*   **[Open] PR #2871: Dashboard Pusher with OpenCode Support**
    *   **Author:** grantland
    *   **Impact:** Introduces a dashboard pusher that POSTs state snapshots to a remote server every 60 seconds, enhancing observability.
    *   **Link:** [PR #2871](https://github.com/nanocoai/nanoclaw/pull/2871)

### 4. Community Hot Topics
*   **Discord Attachment Handling (Issue #2888)**
    *   **Activity:** 1 Comment, 0 Reactions.
    *   **Analysis:** Users report that Discord agents receive only metadata (filename/type) instead of actual file content, whereas Telegram works correctly. This highlights a specific weakness in the `messageToInbound` logic within `chat-sdk-bridge.ts`. Maintainers should prioritize investigating the `att.fetchData` implementation for Discord compared to other channels.
    *   **Link:** [Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888)

### 5. Bugs & Stability
*   **High Severity: Security Vulnerability (CWE-59)**
    *   **Description:** Symlink-follow attacks allowing arbitrary host file writes via session directories.
    *   **Status:** Fixed in PR #2880.
    *   **Link:** [PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880)

*   **Medium Severity: CLI Constraint Violation**
    *   **Description:** `ncl messaging-groups create` fails due to missing `instance` column in INSERT statements.
    *   **Status:** Fixed in PR #2882.
    *   **Link:** [PR #2882](https://github.com/nanocoai/nanoclaw/pull/2882)

*   **Medium Severity: Authentication Failures on New Agents**
    *   **Description:** Single-provider installations encounter 401 errors when users connect new agents via channel approval.
    *   **Status:** Addressed in PR #2886.
    *   **Link:** [PR #2886](https://github.com/nanocoai/nanoclaw/pull/2886)

*   **Low Severity: Discord Content Loss**
    *   **Description:** Images/files sent via Discord are dropped at the agent level.
    *   **Status:** Open Issue #2888.
    *   **Link:** [Issue #2888](https://github.com/nanocoai/nanoclaw/issues/2888)

### 6. Feature Requests & Roadmap Signals
*   **Multi-Channel Parity:** The existence of separate PRs for Discord (#2884) and Slack (#2885) adapters, alongside the reported Discord bug (#2888), signals a roadmap focus on stabilizing diverse chat platforms beyond the currently reliable Telegram integration.
*   **Observability:** PR #2871 indicates a push toward better monitoring and state tracking via the new dashboard pusher feature.
*   **Voice Intelligence:** The closure of PR #2883 suggests a move toward more nuanced, context-aware voice notifications rather than blunt summaries.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the inconsistency between Discord and Telegram file handling. The "URL-only" nature of the Discord adapter breaks workflows relying on image/file context.
*   **Satisfaction:** The rapid response to security issues (PR #2880) and CLI bugs (PR #2882) indicates a responsive maintainership team.
*   **Use Cases:** Enterprise or power users are utilizing the `messaging-groups` CLI and seeking granular control over voice notifications and channel-specific agent provisioning.

### 8. Backlog Watch
*   **Issue #2888:** The Discord attachment drop issue remains open with minimal engagement (1 comment). It requires immediate technical investigation into `src/channels/chat-sdk-bridge.ts` to align Discord behavior with Telegram.
*   **PR #2884 & #2885:** These are currently open. While they add features, they also introduce new attack surfaces or configuration complexities that need rigorous testing before merging into the main release stream.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-06-30
**Source:** GitHub Data Analysis

### 1. Today's Overview
The NullClaw project exhibits moderate daily activity with four pull requests updated and one issue opened within the last 24 hours. The core development focus remains on improving the CLI experience through native tool-call streaming and enhanced REPL usability, indicating a shift toward refining user interaction rather than expanding feature sets. No new releases were published today, suggesting the team is currently prioritizing code stabilization and dependency updates over versioned deployments. Overall project health appears stable, with active maintenance on infrastructure and interface layers.

### 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Note:** The latest significant activity involves internal dependency bumps (Alpine 3.23 to 3.24) via Dependabot, but no tagged version has been released to the public yet.

### 3. Project Progress
*   **Merged/Closed PRs:**
    *   **#960 [CLOSED]:** `fix(cli): handle arrow keys in agent REPL` (vernonstinebaker). This PR was successfully merged/closed on 2026-06-29, resolving input handling issues in the interactive agent shell.
*   **Active PRs Advanced:**
    *   **#971 [OPEN]:** `feat(streaming): native tool calls during SSE streaming`. This PR decouples native tool-call support from the streaming path, allowing providers to emit tools directly during Server-Sent Events (SSE). This represents a significant architectural improvement for real-time agent interactions.
    *   **#970 [OPEN]:** `fix(cli): handle arrow keys in agent REPL`. A duplicate or follow-up effort to #960, likely addressing edge cases or specific terminal environments for POSIX raw-mode input.

### 4. Community Hot Topics
*   **Telegram Channel Instability:**
    *   **Issue #972:** `[bug] telegram channel stop respond after some idle time` (i11010520).
    *   **Analysis:** Users are reporting that Telegram bots integrated with NullClaw become unresponsive after periods of inactivity ("die away at next morning"). While the backend process (`nullclaw agent`) remains active, the connection layer fails. This highlights a critical need for robust connection keep-alive mechanisms or automatic reconnection logic in long-running agent sessions.
    *   **Link:** [GitHub Issue #972](https://github.com/nullclaw/nullclaw/issues/972)

### 5. Bugs & Stability
*   **High Severity:**
    *   **Issue #972:** Telegram integration failure after idle time.
    *   **Impact:** Disrupts automated workflows relying on scheduled or intermittent Telegram interactions.
    *   **Status:** Open, no comments or reactions yet. Requires investigation into WebSocket/HTTP connection timeouts in the Telegram adapter.
*   **Low Severity:**
    *   **PR #970/#960:** CLI Arrow Key Handling. These were treated as bugs in user experience (UX) where control characters were printed instead of executing navigation commands. Resolved via PR #960.

### 6. Feature Requests & Roadmap Signals
*   **Native Tool Calling in Streaming:**
    *   **Signal:** PR #971 indicates strong demand for low-latency, native tool execution during streaming responses. This suggests the roadmap is moving towards more responsive, real-time agent behaviors where tools can be invoked mid-stream without waiting for full response generation.
*   **Enhanced CLI Usability:**
    *   **Signal:** Multiple PRs (#960, #970) focusing on REPL improvements (arrow keys, history, raw mode) show a commitment to making the command-line interface more friendly and efficient for developers and power users.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Reliability:** Users expect consistent uptime for connected services like Telegram. The "idle timeout" behavior is a major friction point for automation enthusiasts.
    *   **CLI Experience:** Previous feedback (addressed in #960) indicated frustration with basic text navigation in the agent REPL. The continued focus on this area suggests that while fixed, it remains a sensitive topic for usability.
*   **Satisfaction:**
    *   Positive reception of streaming improvements, though still in review (PR #971).
    *   Dependabot updates (#956) are generally welcomed as they reduce security risks without requiring manual intervention.

### 8. Backlog Watch
*   **Issue #972:** Needs immediate maintainer attention due to its impact on production reliability for Telegram users.
*   **PR #971 & #970:** Both are open and require review. PR #971 is particularly important for future feature capabilities, while #970 may need verification against the merged #960 to ensure no regression or redundancy.
*   **PR #956:** Dependabot update for Alpine Linux. While routine, it should be merged to keep the Docker image base secure and up-to-date.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-06-30

## 1. Today's Overview
The IronClaw project exhibits high development velocity on 2026-06-30, driven primarily by the "Reborn" initiative and its associated WebUI v2 migration. With 50 Pull Requests updated and 14 Issues addressed in the last 24 hours, the team is heavily focused on stabilizing the new architecture, specifically around tool permissions, authentication flows, and automated testing coverage. While no new public releases were published today, significant internal refactoring and QA matrix expansions indicate a pre-release stabilization phase. The project health shows strong momentum in backend restructuring, though frontend consistency bugs remain active.

## 2. Releases
**No new official releases were published on this date.**

However, PR #5311 indicates a recent internal release cycle involving API-breaking changes in `ironclaw_common` (0.4.2 -> 0.5.0) and `ironclaw_skills` (0.3.0 -> 0.4.0), suggesting upcoming major version bumps may follow soon.

## 3. Project Progress
Significant progress was made in backend structure, testing infrastructure, and localization:

*   **Backend Refactoring:** PR #5427 extracted mock-MCP scaffolding into a dedicated submodule (`harness_mcp.rs`) to improve test maintainability. PR #5149 introduced "progressive tool disclosure," a critical optimization cutting per-call prompt sizes to reduce NEAR AI latency and timeouts.
*   **WebUI v2 Migration:** Several PRs (#5371, #5372, #5373) successfully ported legacy browser coverage for chat history, auth/approval UX, and channel pairing flows to the new WebUI v2 environment.
*   **Localization:** PR #5401 completed the localization of WebUI v2 extension cards, configure modals, and built-in tool descriptions, removing hardcoded English strings.
*   **Testing Infrastructure:** PR #5424 linked failed QA cases directly to debug artifacts (logs, traces), and PR #5380 expanded the QA matrix coverage for Reborn WebUI v2.

## 4. Community Hot Topics
The most discussed items revolve around authentication reliability and routine management usability:

*   **OAuth Refresh Failures:** Issue #5413 discusses making silent OAuth refresh failures loud to prevent debugging nightmares like #5378. This highlights a community need for robust error visibility in identity management.
*   **Tool Permission Glitches:** Issue #5196 reports that "Ask each time" permissions can trigger duplicate approval flows. Users are seeking predictable and non-redundant permission handling.
*   **Routine Management Usability:** Issues #5420 and #5419 highlight frustrations with routine configuration—specifically, the inability to rename automations and the global nature of delivery targets (Slack vs. Email) affecting all routines rather than individual ones.
    *   *Link:* [Issue #5413](https://github.com/nearai/ironclaw/issues/5413)
    *   *Link:* [Issue #5196](https://github.com/nearai/ironclaw/issues/5196)
    *   *Link:* [Issue #5420](https://github.com/nearai/ironclaw/issues/5420)

## 5. Bugs & Stability
A cluster of bugs related to the "Reborn" WebUI v2 and routine execution stability was reported today, primarily tagged `[bug_bash_P2]` and `[QA]`.

*   **High Severity (P1/P2):**
    *   **#5415 [P1]:** Multi-tool Google Sheets workflows fail with protocol violations when using 18-25 tool calls. This suggests a stability limit in complex chain-of-thought executions.
    *   **#5420 [Bug]:** Routine delivery targets are global per-user defaults, causing unintended cross-routine interference (e.g., changing one routine’s Slack output affects all).
    *   **#5418 [Bug]:** Conversation messages render out of order after tool activity, disrupting user context.
*   **Medium/Low Severity:**
    *   **#5421:** Web search prompts for NEAR AI auth even when chat is active; zero-config web search is inactive by default.
    *   **#5416:** Contradictory authentication states for Google connections (claims connected vs. installed).
    *   **#5412:** Log entry text in WebUI v2 is not selectable/copyable.
    *   **#5417:** Wrong skill activation for Hacker News searches (activates "tech-debt-tracker" instead of web search).

    *Note: Many of these bugs are linked to ongoing PRs such as #5372 (auth/porting) and #5402 (shared persistence tests), indicating active remediation efforts.*

## 6. Feature Requests & Roadmap Signals
*   **Granular Routine Configuration:** Users are requesting per-routine settings for delivery channels and the ability to rename auto-generated automation titles (Issues #5420, #5419). This signals a move toward more customizable, less rigid automation structures.
*   **RBAC Convergence:** PR #5425 proposes a design for multi-user Role-Based Access Control (RBAC) that aims to reuse existing capabilities without adding unnecessary layers. This suggests the roadmap is prioritizing secure, scalable multi-tenancy for the Reborn engine.
*   **Storage Stress Testing:** PR #5313 introduces a storage stress harness for libSQL/Postgres, indicating a roadmap focus on backend scalability and resilience under load.

## 7. User Feedback Summary
User feedback today is dominated by frustration with **consistency** and **visibility**:
*   **Visibility:** Users want to see *why* things fail (e.g., loud OAuth errors in #5413) and need better debugging tools (artifacts linked in #5424).
*   **Consistency:** The "Ask each time" permission flow is buggy (#5196), and Google connection states are contradictory (#5416).
*   **Usability:** The inability to copy logs (#5412) or rename automations (#5419) hinders daily workflow efficiency.
*   **Performance:** The context management issue (#5411) notes that token limits are causing failures in large-scale tool usage, reinforcing the need for the optimizations in PR #5149.

## 8. Backlog Watch
*   **#5426 [Open]:** "Cannot create a routine: system drive is not available." This is a blocking QA issue on the `hosted-staging` environment that prevents routine creation entirely. It requires immediate attention to ensure staging stability.
*   **#4108 [Open]:** "Nightly E2E failed." The persistent failure of the nightly end-to-end tests (last updated 2026-06-29) indicates a systemic issue in the test harness or deployment pipeline that needs investigation.
*   **#5378 (Referenced in #5413):** Although closed as part of the discussion in #5413, the root cause of the composition bug mentioned in #5413 implies lingering complexity in the OAuth refresh logic that may require further monitoring.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-30
**Source:** GitHub (netease-youdao/LobsterAI)

### 1. Today's Overview
LobsterAI demonstrated high development velocity on 2026-06-29 with 40 Pull Requests updated and 1 new release published. The primary focus was stabilizing the OpenClaw integration engine and refining the Cowork UI navigation components. Activity indicates a mature release cycle where bug fixes and feature refinements are rapidly merged into the main branch. The community remains engaged with ongoing discussions regarding token efficiency, subscription management, and cross-platform agent support.

### 2. Releases
**Version:** 2026.6.29
**Status:** Released and promoted to main via PR #2228.

**Key Changes:**
*   **OpenClaw Stability:** Significant improvements to agent identity preservation, ensuring bootstrap workspaces are separated from task current working directories (cwd).
*   **Plugin Management:** Enhanced routing for plugin approvals through permissions and support for upgraded Instant Messaging (IM) plugin installations (DingTalk, Lark, WeCom, POPO).
*   **Cron History:** Fixes to preserve local follow-up messages and prevent duplicate/destroyative replacements in cron run history.
*   **UI Refinements:** Cleaned navigation rail previews in Cowork and restored conversation rail navigation logic.

**Migration Notes:**
*   Users upgrading from v2026.6.1 should note that the `runCwd` patch has been corrected to prevent agent persona/memory leakage into user project directories.

### 3. Project Progress
*   **Merged/Closed PRs (Top Contributors):**
    *   **@btc69m979y-dotcom:** Led multiple backend stability fixes for OpenClaw, including cron history sync (#2220), legacy storage migration (#2189), and scheduled-task state clarification (#2191).
    *   **@liuzhq1986:** Managed UI/UX consistency in Cowork, specifically addressing conversation rail tooltips (#2223) and reverting accidental merges (#2225, #2224) before re-applying fixes.
    *   **@fisherdaddy:** Addressed critical path issues in OpenClaw workspace isolation (#2227) and OAuth routing (#2221).
*   **Advanced Features:**
    *   Preinstallation of official QQ and Discord channel plugins for OpenClaw (#2198).
    *   Compilation and repackaging of NIM plugin runtime entries to ensure compatibility (#2186).

### 4. Community Hot Topics
*   **Token Efficiency Concerns:** Issue #2121 discusses potential token waste due to repetitive text outputs. Users are seeking clarity on whether this is a client-side rendering issue or an agent behavior problem.
*   **Subscription Policy Frustration:** Issue #2081 highlights user dissatisfaction with the "use-it-or-lose-it" monthly point expiration policy, indicating a need for clearer communication or policy flexibility.
*   **Agent Ecosystem Expansion:** Issue #2131 asks about support for the "Hermes" agent, signaling community interest in expanding the supported agent frameworks beyond the current OpenClaw/Cowork stack.
*   **Task Continuity:** Issue #2120 suggests pre-inputting tasks while a Claw is running to improve workflow continuity and requests longer timeout limits for long-running scripts.

### 5. Bugs & Stability
*   **High Severity:**
    *   **#2079:** Execution result window freezes when scrolling to the top. *Status:* Open. *Impact:* Blocks user interaction during result review.
    *   **#1388:** Email configuration test connectivity hangs indefinitely. *Status:* Open. *Impact:* Prevents users from verifying email settings for notifications.
*   **Medium Severity:**
    *   **#1390:** Scheduled tasks fail to update intermittently. *Status:* Open. *Impact:* Disrupts automation workflows.
    *   **#1386:** Shared chat screenshots truncate content for long conversations. *Status:* Open. *Impact:* Reduces utility of sharing features.
*   **Fixed/Resolved:**
    *   UI localization bugs (#1434, #1435) and subscription billing inquiries (#2081) have been closed, likely addressed in recent updates or documented responses.

### 6. Feature Requests & Roadmap Signals
*   **Multi-Agent Support:** The inquiry about Hermes Agent (#2131) suggests a roadmap opportunity to support diverse agent architectures.
*   **Workflow Automation Enhancements:** Request for pre-inputting tasks (#2120) and extending task timeouts indicates a demand for more robust, long-duration automation capabilities.
*   **UI/UX Customization:** Suggestions for multi-column skill displays on large screens (#2120) reflect a need for better utilization of high-resolution displays.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by UI freezes (#2079), unresponsive configuration tests (#1388), and unclear token usage behaviors (#2121). Subscription policies are a significant source of negative sentiment (#2081).
*   **Positive Signals:** The rapid response to OpenClaw stability issues and the proactive inclusion of popular IM plugins (QQ/Discord) are well-received by power users relying on automated workflows.
*   **Localization:** Persistent issues with English/Chinese UI label mismatches (#1389) indicate a need for stricter QA on internationalization strings.

### 8. Backlog Watch
*   **#2079 [OPEN]:** Execution window freeze. Requires immediate investigation as it affects core functionality.
*   **#1388 [OPEN]:** Email connectivity hang. Critical for notification-based workflows.
*   **#1390 [OPEN]:** Scheduled task update failure. Intermittent nature makes it hard to reproduce but high impact on reliability.
*   **#1386 [OPEN]:** Share image truncation. Affects documentation and sharing features.
*   **#1389 [OPEN]:** Language selection display bug. Affects user experience for non-Chinese speakers.

Maintainers should prioritize these open issues, particularly those affecting core execution and configuration stability, to maintain user trust and platform reliability.

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

# CoPaw Project Digest: 2026-06-30

## 1. Today's Overview
CoPaw demonstrated high development velocity on June 30, 2026, with 31 issues and 50 pull requests updated in the last 24 hours. The project is actively stabilizing the AgentScope 2.0 transition, evidenced by significant refactoring in context management, tool execution safety, and cross-platform compatibility. While no new official release was published, the volume of merged fixes and closed issues suggests a rapid iteration cycle focused on bug squashing and performance optimization rather than major feature launches. Community engagement remains strong, particularly around model provider compatibility and channel-specific UX improvements.

## 2. Releases
**No new releases.**
*   Current stable version referenced in recent issues: `1.1.12.post2`.
*   Note: Several PRs indicate ongoing alignment with "AgentScope 2.0" internals, suggesting a major version bump may follow current stabilization efforts.

## 3. Project Progress
**Key Merged/Closed PRs:**
*   **[feat(subagent)] Event-driven background lifecycle (#5633):** Replaced polling-based subagent spawning with an event-driven model, improving efficiency and allowing parent-wakeup mechanisms. *(Note: Listed as OPEN in summary but marked as key progress due to high relevance; likely merged or in final review based on date).*
*   **[fix(desktop)] Stop plugin dependency storm (#5570):** Resolved critical memory exhaustion bugs on macOS Desktop App where Remote SSH plugin dependency installations caused fork-bomb-like behavior.
*   **[ci(integration)] Lift Windows nightly HTTP timeout (#5627):** Fixed persistent CI failures on Windows runners by adjusting HTTP timeouts and adding hang safeguards.
*   **[fix(console)] Correct tool card counting (#5632, #5628):** Addressed UI bugs where `glob_search` and `read_file` results consistently displayed incorrect counts (e.g., showing "1" instead of actual number).
*   **[docs] AgentScope 2.0 Documentation Updates (#5610, #5631):** Updated context management docs to reflect new "scroll" strategies and removed deprecated references to the old light context manager.

## 4. Community Hot Topics
*   **DeepSeek Prefix Cache Optimization (#3891):** High discussion activity regarding low cache hit rates (~95%) leading to higher costs. Users are seeking deeper optimization as pricing disparities between cached and non-cached tokens are significant.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/3891)
*   **Model Fallback & Degradation (#5572, #5573):** Strong interest in automatic model switching when quotas expire or APIs fail, and fixing 400 errors with DeepSeek V4 thinking modes on non-official endpoints.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5572)
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5573)
*   **DingTalk Channel Performance (#5603, #5593):** Users report slow streaming outputs in DingTalk cards and desire native image preview capabilities instead of file attachments.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5603)
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5593)

## 5. Bugs & Stability
*   **Critical: Remote SSH Plugin Crash Loop (#5550):** Fixed by PR #5570. Caused memory exhaustion on macOS due to uncontrolled `pip install` loops and orphaned backend processes.
*   **High: Tool Result Count Mismatch (#5624, #5626):** UI displayed "1" for all tool result cards regardless of actual output size. Fixed by PR #5632/#5628.
*   **Medium: MiniMax Image Safety Cache Error (#5505):** False positives in media rejection caching led to visual inputs being stripped incorrectly. Closed/Fixed.
*   **Medium: Windows Path Handling (#5635):** Uploaded files on Windows returned local paths that broke URL conversion. PR #5635 addresses this.
*   **Low: Governance Policy Read/Write Mismatch (#5623):** Tool approval settings saved to `agent.json` were not correctly read by `PolicyGuardedTool`, causing unnecessary approval prompts in OFF mode.

## 6. Feature Requests & Roadmap Signals
*   **Custom Model Protocols (#5609):** Request to support non-standard OpenAI-compatible endpoints (e.g., image generation specific URLs) to utilize free models.
*   **Vision Fallback for Text Models (#5615):** Auto-detect unsupported image uploads in text-only models and trigger a secondary vision model to generate descriptions.
*   **Telegram Custom BaseURL (#5630):** Allow configuration of custom API endpoints for Telegram channels, crucial for users behind firewalls or using proxies.
*   **Memory Reranking (#5588):** Proposal to implement a two-stage retrieval (Embedding + Reranker) for memory search to improve accuracy as knowledge bases grow.
*   **Windows Tray Icon (#5622):** Request for background running support via system tray icon for better UX on Windows.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by UI inaccuracies (tool counts) and instability on desktop apps (dependency storms). Channel-specific issues (DingTalk slowness, WeChat file handling) are recurring themes.
*   **Cost Sensitivity:** DeepSeek cache hit rates directly impact operational costs, making optimization a high-value request.
*   **Reliability:** Requests for robust error handling (model fallback, checkpoint persistence for conversations) indicate a shift towards using CoPaw for mission-critical, long-running automated tasks rather than just casual chat.

## 8. Backlog Watch
*   **Conversation Checkpoint Persistence (#5579):** Critical issue where conversation history is lost upon host reboot or service crash. No fix PR identified yet; high priority for enterprise reliability.
*   **ADBPG REST-Only Alignment (#5296):** PR #5296 updates memory integration to match ADBPG product direction. Needs verification for merge readiness.
*   **Subagent Infinite Polling (#4873):** Reported bug where multiple subagents cause main agent to spam checks. PR #5633 addresses the underlying architecture but may need regression testing against this specific legacy scenario.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-06-30
**Source:** github.com/zeroclaw-labs/zeroclaw

### 1. Today's Overview
ZeroClaw exhibited high development velocity on June 30, 2026, with 50 issues and 50 pull requests updated in the last 24 hours. The project is actively transitioning toward a WASM-first plugin architecture and expanding multi-channel support, evidenced by significant PRs for DingTalk, Matrix, and GitHub channels. While no new official releases were published, the merge of critical infrastructure updates (such as in-app upgrades and security CI gates) suggests imminent preparation for a v0.8.x release. The community is highly engaged, with multiple high-priority bugs regarding provider compatibility and channel configuration driving immediate maintainer attention.

### 2. Releases
**Status:** No new releases published today.
*Note:* Several major architectural shifts are landing in `master` via PRs, specifically the RFC implementation for in-app upgrades (#8173) and the Wasm-first plugin runtime foundations. These will likely be bundled in the upcoming v0.8.3 release cycle.

### 3. Project Progress
**Key Merged/Closed PRs and Advances:**
*   **In-App Upgrades:** PR #8173 implements the RFC for in-app upgrades with auto-restart from the web dashboard, allowing users to detect, view release notes, and apply updates without leaving the UI.
*   **Security Hardening:** PR #8129 adds `cargo-audit` to the PR gate, ensuring RustSec advisories are checked before merging. PR #8056 and #8057 split CI security jobs into required gates and scheduled heavy checks (CodeQL, Trivy).
*   **Channel Expansion:**
    *   PR #8495 added streaming message support for DingTalk.
    *   PR #8504 introduced a native GitHub channel with SOP ingress.
    *   PR #8384 added the Inkbox channel supporting email, SMS, voice, and iMessage.
    *   PR #8443 implemented single-message streaming drafts for Matrix.
*   **Stability Fixes:** PR #8514 preserved inner errors in `LibraryNotFound` chains, improving debugging for dynamic library loading issues. PR #8463 capped interactive CLI stdin lines to 1 MiB to prevent memory exhaustion.

### 4. Community Hot Topics
**Most Active Discussions (by comments):**
1.  **[Bug] Kimi Provider Streaming Error (#5600):** 11 comments. Users are blocked by a 400 Bad Request when using the `kimi-code` provider in streaming chat calls due to missing `reasoning_content`.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/5600
2.  **[Bug] System Prompt Tool Availability Mismatch (#8054):** 9 comments. A follow-up to #7756, discussing how system prompts incorrectly report tool availability across different entry points (gateway, WebSocket, etc.).
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8054
3.  **[RFC] Computer-Use Support (#6909):** 6 comments. High interest in adding desktop screen interaction and input control capabilities to agents.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/6909
4.  **[RFC] A2A Agent Discovery (#7218):** 5 comments. Discussion on standardizing agent discovery via `.well-known/agent-card.json` for multi-agent installations.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7218
5.  **[Bug] Code Help/Keybindings Misleading (#7800):** 5 comments. User frustration with TUI help text, particularly on macOS.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7800

**Analysis:** The community is heavily focused on **provider reliability** (Kimi, OpenAI, Anthropic tool calling) and **advanced agent capabilities** (computer use, multi-agent discovery). There is strong demand for better UX in the TUI and more robust channel integrations.

### 5. Bugs & Stability
**Reported Today (Ranked by Severity):**
1.  **[Bug] Telegram Channel Configuration Failure (#8505):** *Severity: S1 (Workflow Blocked).* Users report that Telegram channels fail to connect despite correct setup, with the bot not responding.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8505
2.  **[Bug] Native Tool Calling Image Markers (#8327):** *Severity: S2 (Degraded).* Image markers `[IMAGE:data:...]` are sent as plain text to compatible providers (e.g., llama.cpp), inflating token counts and breaking parsing.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8327
3.  **[Bug] OpenAI-Compatible Empty Content (#8512):** *Severity: S2.* Assistant messages with tool calls serialize `content` as an empty string `""` instead of omitting it, causing strict backends to reject requests.
    *   *Fix PR:* #8512 (Open) / #8510 (Closed).
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8512
4.  **[Bug] Skills Install Target Data Dir (#8334):** *Severity: S2.* Multi-agent runtime does not load skills installed via CLI `zeroclaw skills` commands because they target a different directory.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8334
5.  **[Bug] Translation Leak Repair (#8312):** *Severity: S2.* Stale entries in the translations map cause leaked text to be re-shipped via `write_po`.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8312

### 6. Feature Requests & Roadmap Signals
*   **WASM-First Plugin Runtime:** Multiple RFCs (#8135, #7497, #6140) indicate a strategic shift to make WebAssembly the default plugin runtime, replacing Node.js dependencies and enforcing signed distribution.
*   **Computer Use:** RFC #6909 proposes native desktop control (screenshots, mouse/keyboard), aligning with industry trends (OpenAI Codex, Hermes).
*   **A2A Interoperability:** RFC #7218 signals intent to adopt the Agent-to-Agent (A2A) protocol for discovery, facilitating multi-agent ecosystems.
*   **In-App Upgrades:** Implementation of RFC #8170 via PR #8173 shows a commitment to improving operational ease for self-hosted users.
*   **Predicted Next Version Features:** Expect v0.8.3 to include the finalized WASM plugin host, the new GitHub/DingTalk/Matrix streaming channels, and the in-app upgrade mechanism.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Provider Inconsistency:** Users are frustrated by varying behaviors across OpenAI, Anthropic, and compatible providers regarding tool calling and reasoning content (#5600, #7756, #8327).
    *   **Configuration Complexity:** Setting up Telegram and multi-agent environments remains brittle, with silent failures in channel connectivity and skill loading (#8505, #8334).
    *   **TUI Usability:** Keybindings and help text are confusing, especially for macOS users (#7800).
*   **Satisfaction:**
    *   Rapid expansion of channel support (GitHub, DingTalk, Inkbox) is well-received.
    *   The move towards standardized security practices (CI audits, SBOMs) is appreciated by enterprise-oriented users.

### 8. Backlog Watch
*   **[RFC] OCI-Compliant Plugin Registry (#7497):** Needs maintainer review to finalize the shift from JSON indices to OCI registries for WASM plugins.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7497
*   **[RFC] Runtime Policy for OTel LLM/Tool Content (#8462):** Critical for observability compliance; requires definition of what data is shipped to OpenTelemetry backends.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/8462
*   **[Bug] Cron/Heartbeat NO_REPLY Sent (#2128):** Closed but indicates ongoing sensitivity to notification noise; ensure similar logic applies to new channels.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/2128
*   **[Tracker] v0.8.3 WASM Plugin Program (#7314):** Coordination hub for the largest architectural change; monitor for blockers.
    *   *Link:* https://github.com/zeroclaw-labs/zeroclaw/issues/7314

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*