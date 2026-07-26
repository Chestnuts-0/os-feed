# OpenClaw Ecosystem Digest 2026-07-26

> Issues: 332 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-26 01:49 UTC

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

# OpenClaw Project Digest: 2026-07-26

## 1. Today's Overview
OpenClaw is experiencing extremely high development velocity with 500 Pull Requests and 332 Issues updated in the last 24 hours, indicating a major push toward stability and feature consolidation. The project is currently in a critical maintenance phase, focusing heavily on session state integrity, memory management, and gateway reliability following recent releases. While no new official releases were published today, a significant volume of fixes and refactors are queued for imminent inclusion, particularly around the "readiness" framework and agent recovery mechanisms.

## 2. Releases
*   **No new releases published today.**
*   *Note:* The team is actively addressing regressions from `v2026.7.1` and `v2026.7.1-2`, including gateway startup failures and session reset bugs, which suggests a hotfix or minor patch release may be imminent to resolve these P0/P1 issues.

## 3. Project Progress
**Key Merged/Closed PRs & Active Refactors:**
*   **Readiness Framework Adoption:** PRs #113422, #113421, and #104018 are advancing the implementation of core runtime conditions and hosting profiles, allowing plugins and hosts to define bounded observations for health checks.
*   **Agent Recovery Refactor:** PR #113969 consolidates restart-recovery state snapshots to prevent drift between independent transcript paths.
*   **Realtime Relay Split:** PR #113967 splits the large Gateway realtime Talk relay module to improve maintainability and separate concerns like voice persistence and provider ordering.
*   **Meeting Convergence:** PR #113970 converges Google Meet probes and adapters to share logic with Teams/Zoom, reducing code duplication.
*   **Memory Core Fix:** PR #113471 addresses a bug where replacement embedding providers could overlap with closing ones, causing orphaned worker processes.
*   **Control UI Improvements:** PR #113944 fixes stale PR rows after merge, while PR #113882 resolves sidebar selection jumping during session archiving.
*   **Cost Alerts:** PR #113548 introduces per-agent daily model spend alerts, enabling proactive cost monitoring for unattended agents.

## 4. Community Hot Topics
The most discussed issues revolve around **security trust models**, **session state corruption**, and **resource leaks**.

*   **Memory Trust Tagging (#7707):** 21 comments. Users are requesting the ability to tag agent memory by source (user vs. web scrape) to prevent "memory poisoning" attacks. This highlights a growing community concern over AI security and prompt injection via untrusted data sources.
*   **MCP Tool Approval Envelopes (#78308):** 15 comments. A proposal to allow MCP servers to use channel-mediated approval for state-mutating calls, mirroring existing shell-exec protections. This indicates a desire for finer-grained control over external tool interactions.
*   **SQLite Snapshot Restore Guarantees (#113306):** 13 comments. A P1 bug report regarding lack of crash/identity guarantees in SQLite snapshot restores, signaling critical infrastructure concerns for data durability.
*   **Gateway Startup Failure (#108435):** 11 comments. A P0 regression where the gateway fails to start after updating to `2026.7.1`, causing immediate user disruption.
*   **Session Context Bloat (#67419):** 10 comments. Users are frustrated by bootstrap files re-injecting into every turn, wasting 20-30% of context tokens. This points to a need for more efficient context management strategies.

## 5. Bugs & Stability
**Critical & High-Severity Issues Reported/Fixed:**

*   **P0: Gateway HTTP Server Not Accepting Connections (#109145):** The server listens but hangs on TCP accept. *Status: Open.*
*   **P0: Gateway Fails to Start After Update (#108435):** Regression in `2026.7.1` causing startup failure. *Status: Open.*
*   **P0: Upgrade Corrupts Email Config (#95515):** Upgrading from `2026.6.8` to `2026.6.9` writes invalid fields to `openclaw.json`. *Status: Open.*
*   **P1: SQLite Transcript Cleanup Blocks Event Loop (#112423):** Large archive operations cause event-loop starvation. *Status: Open.*
*   **P1: Subagents List Empty After Spawn (#75593):** Closed/Fixed, but indicates lingering trust issues with sub-agent spawning mechanics.
*   **P1: Live Docs Ahead of Release (#48920):** Documentation for `IsolatedSessions` exists before the feature is stable/released. *Status: Open.*
*   **Regression: /new and /reset Don't Create New Sessions (#113466):** Commands return success but fail to invoke necessary session creation hooks. *Status: Open.*
*   **Regression: Rich Messages Broken in v2026.7.1 (#112906):** Code blocks no longer render as collapsible sections when `richMessages: true`. *Status: Open.*

**Notable Fixes:**
*   PR #113926 fixed remote browser node recovery after failed startups.
*   PR #113929 kept valid exec approvals under lock contention, preventing intermittent agent deaths.

## 6. Feature Requests & Roadmap Signals
*   **Channel-Mediated MCP Approval (#78308):** Strong interest in standardizing consent envelopes for MCP tools to enhance security.
*   **Per-Spawn Tool Restrictions for Sub-Agents (#15032):** Users want to restrict child agents' tool access (e.g., DMZ web search) to prevent prompt injection propagation.
*   **OpenRouter Cost Exposure (#9016):** Request to expose usage costs to the agent runtime for transparency and optimization.
*   **Skill Permission Manifest Standard (#12219):** A call for a `skill.yaml` standard to declare permissions, addressing security incidents involving credential stealers.
*   **Context Pruning for OpenAI (#95840):** Users note that `cache-ttl` pruning is dead for OpenAI models due to provider exclusion, suggesting a roadmap item to broaden pruning eligibility.
*   **Azure Foundry Realtime Talk (#87325):** Demand for first-class support for Azure AI Foundry Realtime deployments.

## 7. User Feedback Summary
*   **Frustration with Regressions:** Multiple users report severe regressions in `v2026.7.1` and `v2026.6.9`, specifically regarding gateway startup, config corruption, and session resets. This has led to a perception of instability in recent releases.
*   **Performance Concerns:** Users are reporting significant heap growth (#87109) and event-loop blocking (#112423), leading to silent cron job failures and degraded responsiveness.
*   **Usability Friction:** Issues like Telegram forum topics becoming "black holes" (#91564) and Discord message truncation (#96007) highlight gaps in channel reliability.
*   **Security Anxiety:** The high comment count on memory trust and sandboxing issues (#7707, #7722) shows users are proactively seeking ways to secure their autonomous agents against injection and data leakage.

## 8. Backlog Watch
*   **#113306 [P1] SQLite Snapshot Restore:** Needs maintainer review and fix. Critical for data integrity.
*   **#108435 [P0] Gateway Startup Failure:** Requires urgent attention as it blocks updates for many users.
*   **#95515 [P0] Email Config Corruption:** Data loss risk during upgrades.
*   **#7707 [P2] Memory Trust Tagging:** High-value security feature that is well-discussed but lacks a fix PR.
*   **#67419 [P2] Session Context Bloat:** Performance optimization needed to reduce token waste.
*   **#112423 [P1] SQLite Cleanup Blocking:** Performance issue affecting long-running sessions.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-07-26
**Analyst:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The personal AI agent open-source landscape in July 2026 is characterized by a shift from experimental prototyping to production-grade stability and security hardening. Projects are moving beyond basic chat interfaces to address complex challenges in state management, memory integrity, and cross-platform reliability. The community is actively demanding granular control over agent permissions, context window efficiency, and robust error recovery mechanisms. This maturation phase is driven by enterprise adoption needs and power users seeking autonomous, reliable agents rather than simple conversational bots.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 332 | 500 | No new release; Hotfix pending | Critical (High Velocity) |
| **NanoBot** | N/A | 12 | **v0.3.0 Released Today** | High (Post-Release Stabilization) |
| **Hermes Agent** | 50 | 50 | No new release; Patch imminent | High (Intense Maintenance) |
| **NanoClaw** | N/A | 11 | No new release | Moderate-High (Security Focus) |
| **CoPaw** | 8 | 8 | v2.0.1 Active | Moderate (Bug Fixing) |
| **ZeroClaw** | 19 | 50 | Pre-release (v0.8.4 Prep) | High (Critical Path) |
| **IronClaw** | 11 | 20 | No new release | Moderate (Performance Focus) |
| **Moltis** | 0 | 5 | No new release | Low-Moderate (Maintenance) |
| **LobsterAI** | 9 | 11 | No new release | Moderate (UX Polish) |
| **PicoClaw** | 2 | 3 | No new release | Low (Edge/Niche) |
| **NanoClaw** | N/A | 11 | No new release | Moderate (Security Focus) |
| **NullClaw** | 0 | 0 | No activity | Inactive |
| **TinyClaw** | 0 | 0 | No activity | Inactive |
| **ZeptoClaw** | 0 | 0 | No activity | Inactive |

*\*Health Score is a qualitative assessment based on issue resolution rate, PR velocity, and community engagement intensity.*

## 3. OpenClaw's Position
OpenClaw dominates the ecosystem in terms of raw development volume, with over 800 combined issue/PR updates in 24 hours, indicating it serves as a foundational or reference implementation for many advanced agent architectures. Its primary advantage lies in its comprehensive "Readiness Framework" and aggressive focus on session state integrity and gateway reliability. Unlike NanoBot or LobsterAI, which prioritize user experience and onboarding, OpenClaw is deeply entrenched in backend infrastructure, memory management, and security trust models. Its community size appears significantly larger or more engaged, evidenced by high comment counts on security and stability topics, suggesting it is the go-to platform for developers building complex, multi-agent systems requiring robust state handling.

## 4. Shared Technical Focus Areas
Several critical technical requirements have emerged across multiple projects, indicating industry-wide pain points:

*   **Security & Sandboxing:**
    *   **Projects:** OpenClaw, NanoClaw, Hermes Agent, CoPaw.
    *   **Need:** Granular permission controls (MCP approval envelopes), memory trust tagging to prevent poisoning, and strict container isolation (cap-drop, no-new-privileges).
*   **Context & Memory Management:**
    *   **Projects:** OpenClaw, NanoBot, NanoClaw, ZeroClaw.
    *   **Need:** Efficient context pruning to reduce token waste, fixing "context blindness" where agents miss host-sent messages, and ensuring crash-safe snapshot restores.
*   **Cross-Platform Stability:**
    *   **Projects:** Hermes Agent, PicoClaw, CoPaw, IronClaw.
    *   **Need:** Robust handling of Windows-specific bugs, network reconnection logic (Matrix/Slack), and consistent CLI/GUI configuration synchronization.
*   **Agent Recoverability:**
    *   **Projects:** OpenClaw, IronClaw, ZeroClaw.
    *   **Need:** Structured error recovery contracts, self-correction capabilities, and clear lifecycle management for sub-agents and cron jobs.

## 5. Differentiation Analysis
*   **Technical Architecture:**
    *   **OpenClaw & IronClaw:** Focus on heavy backend infrastructure, gateway reliability, and Rust-based performance (IronClaw) or complex state machines (OpenClaw).
    *   **NanoBot & LobsterAI:** Prioritize user experience (WebUI, streaming UX) and ease of use (`nanobot webui` one-command launch).
    *   **ZeroClaw:** Emphasizes a plugin-centric, modular architecture ("Everything is a plugin") with a focus on WASM plugins and unified catalogs.
    *   **Hermes Agent:** Strong focus on desktop integration and multi-channel consistency (Telegram, iMessage, Discord) with rigorous security hardening.
*   **Target Users:**
    *   **Enterprise/Power Users:** OpenClaw, IronClaw, ZeroClaw (due to security, scalability, and plugin ecosystems).
    *   **General Consumers/Desktop Users:** NanoBot, LobsterAI (focus on intuitive UI and quick setup).
    *   **Edge/IoT Developers:** PicoClaw (Raspberry Pi compatibility, low resource usage).
*   **Feature Focus:**
    *   **OpenClaw:** Session state, memory core, gateway stability.
    *   **NanoBot:** Agency enhancement, streamlined onboarding.
    *   **LobsterAI:** Workflow efficiency, UI organization (time-grouping, search).
    *   **Moltis:** Decentralized protocols (Nostr/Buzz) and Slack reliability.

## 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Velocity):**
    *   **OpenClaw:** Extremely high activity suggests active feature consolidation and critical bug fixing. It is in a "maintenance push" phase.
    *   **ZeroClaw:** Intense pre-release activity for v0.8.4 indicates a major version is imminent, with significant architectural changes (plugin unification).
    *   **Hermes Agent:** High volume of closed PRs suggests rapid iteration on stability and security patches.
*   **Stabilizing (Post-Release):**
    *   **NanoBot:** Post-v0.3.0 release, focusing on cleanup and minor fixes.
    *   **IronClaw:** Focused on WebUI performance optimization and dependency management.
    *   **CoPaw:** Addressing critical transport bugs and documentation gaps.
*   **Niche/Steady State:**
    *   **LobsterAI, Moltis, PicoClaw:** Steady maintenance with specific focus areas (UX, Decentralized Chat, Edge Devices respectively).
*   **Inactive/Low Activity:**
    *   **NullClaw, TinyClaw, ZeptoClaw:** No recent activity, suggesting potential dormancy or very small communities.

## 7. Trend Signals
*   **Security-First Design:** The widespread demand for MCP tool approval envelopes, memory trust tagging, and container hardening signals that security is no longer an afterthought but a core requirement for autonomous agents.
*   **State Integrity is Paramount:** Multiple projects (OpenClaw, NanoClaw, ZeroClaw) are prioritizing session state corruption fixes and crash-safe restores, indicating that reliability is the next major barrier to wider adoption.
*   **Decentralization & Interoperability:** Moltis's push for Nostr/Buzz support and ZeroClaw's unified plugin catalog suggest a trend toward open, interoperable agent ecosystems rather than walled gardens.
*   **User Experience as a Differentiator:** As backend capabilities mature, projects like NanoBot and LobsterAI are competing on onboarding simplicity and UI polish, highlighting that ease of use is becoming a key competitive advantage.
*   **Value for Developers:** For AI agent developers, this data suggests prioritizing projects with strong security and state management foundations (like OpenClaw or ZeroClaw) for robust integrations, while leveraging user-friendly fronts (NanoBot, LobsterAI) for consumer-facing applications.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-07-26

### 1. Today's Overview
NanoBot is in a highly active post-release phase following the deployment of **v0.3.0**, which marked a significant milestone with 260 merged PRs and enhanced agent agency. The project health is robust, evidenced by 12 pull requests updated in the last 24 hours, including 5 currently open for review and 7 recently merged or closed. Activity is concentrated on stabilizing the new WebUI experience, refining session routing logic, and addressing critical configuration persistence bugs. The community engagement remains strong, with maintainers actively closing legacy issues and preparing documentation for the new release cycle.

### 2. Releases
**v0.3.0** was released today, introducing major improvements to agent capability and user experience.
*   **Key Changes:** The release emphasizes "agency" for the agent and streamlines the setup process.
*   **Quick Start:** Users can now launch the local WebUI directly via `nanobot webui`, which prepares the environment, starts the gateway, and opens the browser workbench automatically.
*   **Migration Notes:** Compatibility cleanup tasks have been deferred to v0.3.1 (see PR #5083), indicating that v0.3.0 is the final compatibility window for certain legacy behaviors.

### 3. Project Progress
Significant progress was made today in merging improvements and refining core functionalities:
*   **WebUI Enhancements:** PR #5085 merged a feature to automatically open the WebUI after a fresh desktop install, improving the onboarding experience for non-headless users.
*   **Streaming UX:** PR #4696 implemented smooth viewport motion for streamed tokens, ensuring a better visual experience as assistant content grows.
*   **Documentation & Cleanup:** PR #5082 clarified quick-start guides for WebUI, gateway, and CLI, while PR #5083 managed technical debt by deferring compatibility cleanup.
*   **CI/CD Stability:** PR #1284 added comprehensive CI workflows and quality checks, addressing long-standing gaps in automated testing infrastructure.

### 4. Community Hot Topics
The most discussed topics revolve around session management reliability and configuration integrity:
*   **Session Routing Fixes:** PR #4928 and PR #5084 address complex issues with unified sessions and pending message runtime contexts. These high-priority fixes target scenarios where heartbeat delivery or mid-turn messages were losing context or routing incorrectly. [Link to PR #4928](https://github.com/HKUDS/nanobot/pull/4928) | [Link to PR #5084](https://github.com/HKUDS/nanobot/pull/5084)
*   **Configuration Data Loss:** Issue #1073 highlights a critical bug where unknown config keys are dropped during saves, risking data loss for custom provider configurations. This is a major pain point for power users. [Link to PR #1073](https://github.com/HKUDS/nanobot/pull/1073)
*   **CI Transparency:** Issue #1131 reflects community desire for clarity on what tests run in CI, ensuring trust in the automated pipeline. [Link to Issue #1131](https://github.com/HKUDS/nanobot/issues/1131)

### 5. Bugs & Stability
Several critical stability issues are being addressed today:
*   **High Severity - Config Data Loss:** PR #1073 fixes a regression where `save_config()` silently drops custom keys. This is essential for maintaining user settings across updates.
*   **High Severity - Session Context Loss:** PR #5084 resolves an issue where pending messages lose their runtime context (channel, chat, sender) during mid-turn processing.
*   **Medium Severity - Subagent Visibility:** PR #4954 fixes a bug where late subagent turns were not visible in the WebUI, disrupting the user's view of complex agent workflows.
*   **Medium Severity - Cron Job Latency:** PR #3035 introduces a grace window for `at` type cron jobs to handle LLM processing delays, preventing tasks from being missed due to minor timing mismatches.

### 6. Feature Requests & Roadmap Signals
*   **Sandbox Customization:** PR #4625 proposes allowing extra `bwrap` bind roots, signaling a need for more flexible sandbox configurations for developers who want to expose local tool directories (e.g., `~/.local/bin`) to the agent.
*   **Enhanced Onboarding:** The automatic WebUI opening in PR #5085 suggests a roadmap focus on reducing friction for new users, particularly those on desktop environments.
*   **Predicted Next Version Features:** Based on PR #5083, v0.3.1 will likely focus on legacy path fallbacks and ignoring specific warnings, suggesting a stabilization release rather than a feature-heavy one.

### 7. User Feedback Summary
Users are expressing satisfaction with the streamlined installation process (`nanobot webui`) but are concerned about data integrity. The fix for config preservation (PR #1073) indicates that users rely heavily on custom configurations and are dissatisfied with silent data loss. Additionally, the detailed fixes for session routing and subagent visibility suggest that power users are pushing for more reliable state management in complex, multi-turn agent interactions.

### 8. Backlog Watch
*   **Cron Job Reliability:** PR #3035 addresses a longstanding issue with cron job scheduling precision. Maintainers should monitor this merge to ensure the grace window logic doesn't introduce unexpected behavior in edge cases.
*   **Sandbox Flexibility:** PR #4625 remains open. While it enhances developer experience, it requires careful security review to ensure that exposing additional bind roots does not compromise the sandbox isolation guarantees.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-07-26  
**Source:** NousResearch/hermes-agent GitHub Data  

## 1. Today's Overview
The Hermes Agent project exhibits extremely high activity today, with 50 issues and 50 pull requests updated within the last 24 hours. This surge indicates a major release cycle or significant maintenance push, characterized by rapid iteration on desktop stability, security hardening, and agent context management. While no new official releases were published today, a substantial number of PRs were merged or closed, suggesting imminent patching of critical bugs. The community is actively engaging with platform-specific quirks (Windows, Telegram, iMessage) and internal agent logic (curator, skills).

## 2. Releases
**No new releases published.**  
*Note: The high volume of closed PRs (#64479, #64452, #71678, #71665) suggests a hotfix or minor patch version may be prepared shortly to address Windows stability and curator labeling issues.*

## 3. Project Progress
Several key areas saw significant advancement through merged/closed PRs today:
*   **Curator & Skills Management:**  
    *   **#64479** & **#64452**: Fixed incorrect labeling in `hermes curator status` where bundled skills were misidentified as agent-created.  
    *   **#71680**: Aligned autonomous write policies for background skill reviews, resolving conflicts with shared curator guards.  
*   **Desktop UX Fixes:**  
    *   **#71678**: Resolved overflow issues in tool displays, keeping code/diffs out of the scroll window.  
    *   **#71665**: Fixed session persistence when git worktrees are deleted, preventing orphaned sessions in the sidebar.  
*   **Security Hardening:**  
    *   **#59929**: Prevented capture of full process `argv` in shutdown forensics logs to avoid leaking sensitive command-line arguments.  

## 4. Community Hot Topics
The following issues generated the most discussion, highlighting user pain points around cross-platform compatibility and configuration consistency:

1.  **[Telegram] MarkdownV2 escape breaks bullet list display** (#6388)  
    *   *Comments:* 7 | *Link:* [Issue #6388](https://github.com/NousResearch/hermes-agent/issues/6388)  
    *   *Analysis:* Users are frustrated by broken formatting in Telegram due to strict MarkdownV2 escaping rules. This reflects a broader need for platform-specific markdown sanitization layers.
2.  **Dashboard cross-tab session bleed + /new hang** (#62726)  
    *   *Comments:* 7 | *Link:* [Issue #62726](https://github.com/NousResearch/hermes-agent/issues/62726)  
    *   *Analysis:* Multi-tab usage in the Web Dashboard is causing state corruption. This highlights the complexity of maintaining consistent session state across concurrent browser tabs.
3.  **Providers vs custom_providers dual storage causes CLI/GUI mismatch** (#71298)  
    *   *Comments:* 6 | *Link:* [Issue #71298](https://github.com/NousResearch/hermes-agent/issues/71298)  
    *   *Analysis:* Configuration inconsistency between CLI and Desktop GUI is a recurring theme. Users expect a single source of truth for provider settings.

## 5. Bugs & Stability
A significant number of critical bugs were reported and addressed today, particularly concerning Windows stability and gateway crashes.

*   **P0/P1 Critical:**  
    *   **Gateway Crash on Windows Startup:** [#71671](https://github.com/NousResearch/hermes-agent/pull/71671) fixes a crash when `sys.stderr` is `None` (common in Windows services/startup shims). This is a high-impact fix for Windows users running Hermes as a background service.  
    *   **Container Privilege Escalation:** [#71682](https://github.com/NousResearch/hermes-agent/pull/71682) addresses a security flaw in s6 Docker deployments where log symlinks could allow privilege escalation.  

*   **P2 High Severity:**  
    *   **Desktop Boot Loop:** [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) reports a WebSocket disconnect loop preventing Desktop startup on Windows 11.  
    *   **CLI Freeze:** [#39418](https://github.com/NousResearch/hermes-agent/issues/39418) `/reload-mcp` freezes the terminal, requiring force-close.  
    *   **Context Length Stale Data:** [#31043](https://github.com/NousResearch/hermes-agent/issues/31043) CLI fails to refresh context length after provider config changes.  

*   **P3 Medium/Low Severity:**  
    *   **Telegram Formatting:** [#6388](https://github.com/NousResearch/hermes-agent/issues/6388) Bullet lists break due to escaping.  
    *   **Email IMAP Flagging:** [#42997](https://github.com/NousResearch/hermes-agent/issues/42997) Polling marks unread Gmail messages as read.  
    *   **Windows Path Issues:** [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) and [#60447](https://github.com/NousResearch/hermes-agent/issues/60447) highlight persistent Windows-specific installation and update failures related to non-ASCII paths and update mechanisms.  

*   **Fixes Merged Today:**  
    *   SSRF in media downloads: [#71677](https://github.com/NousResearch/hermes-agent/pull/71677)  
    *   System prompt drift on cwd change: [#71676](https://github.com/NousResearch/hermes-agent/pull/71676)  

## 6. Feature Requests & Roadmap Signals
*   **Local STT Documentation:** [#56989](https://github.com/NousResearch/hermes-agent/issues/56989) requests first-class support for fully local voice transcription (MLX/CUDA) to avoid external API dependencies. This signals strong user demand for privacy-focused, offline voice capabilities.  
*   **Single Gateway, Multiple Agents:** [#62944](https://github.com/NousResearch/hermes-agent/pull/62944) is a major feature PR rebasing the MVP for multi-agent support under a single gateway. This suggests the roadmap is moving towards more complex, multi-agent orchestration architectures.  
*   **Legacy Skill Adoption:** [#67139](https://github.com/NousResearch/hermes-agent/issues/67139) requests a supported path for legacy/unmanaged local skills to opt into curator management, indicating a need for better migration tools for existing users.  

## 7. User Feedback Summary
*   **Windows Instability:** A significant portion of feedback (#63717, #60447, #71226, #63177) revolves around Windows-specific bugs, including update failures, non-ASCII path crashes, and boot loops. This suggests the Windows Desktop client needs rigorous regression testing.  
*   **Configuration Consistency:** Users are confused by discrepancies between CLI and GUI settings (#71298, #31043) and expect unified configuration handling.  
*   **Privacy & Security Concerns:** Reports like [#22016](https://github.com/NousResearch/hermes-agent/issues/22016) (security flaw in debug share) and [#59929](https://github.com/NousResearch/hermes-agent/pull/59929) (argv leakage) show users are highly attentive to data privacy, especially regarding local logs and debugging tools.  
*   **Platform-Specific Quirks:** Telegram markdown issues (#6388) and iMessage streaming artifacts (#49793) indicate that platform adapters require continuous tuning for edge cases.  

## 8. Backlog Watch
*   **ACP Session CWD Inconsistency:** [#11515](https://github.com/NousResearch/hermes-agent/issues/11515) remains open, noting that ACP mode uses different working directories for tool execution vs. context discovery.  
*   **Photon Sidecar Installation Failure:** [#48659](https://github.com/NousResearch/hermes-agent/issues/48659) reports missing sidecar files in wheel/sdist, breaking Photon plugin installation for many users.  
*   **Langfuse Tracing Silently Stops:** [#59026](https://github.com/NousResearch/hermes-agent/issues/59026) highlights a dependency lifecycle gap where updates remove required SDKs without warning.  
*   **Vision Path Bug:** [#49388](https://github.com/NousResearch/hermes-agent/issues/49388) involves Xiaomi MiMo vision tool degrading images to text, impacting multimodal accuracy for specific providers.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-07-26

## 1. Today's Overview
PicoClaw demonstrates moderate daily activity with two open issues and three pull requests updated within the last 24 hours. The project is currently in a maintenance phase, with no new releases deployed. Development focus appears split between critical stability fixes for network resilience and integration enhancements for specific hardware gateways. Community engagement remains steady, particularly regarding Matrix protocol robustness and multi-model management usability.

## 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Context:** The latest referenced versions in issue reports are v0.2.9 and v0.3.1 (`2cf030d`), indicating recent development activity but no official tagged release today.

## 3. Project Progress
Three Pull Requests were updated today, reflecting progress in integration support and platform compatibility:
*   **PR #339 (Closed):** Merged contributions for Google Calendar integration, enhanced Email channel polling, and new developer tools (GitHub, System Stats). This significantly expands the agent's operational scope beyond chat interfaces. [Link](https://github.com/sipeed/picoclaw/pull/339)
*   **PR #3205 (Closed):** Resolved compatibility issues with the 9router OpenAI-compatible gateway on Raspberry Pi 3 B+ by adding ARMv7 build targets and fixing response parsing. This improves accessibility for edge-computing users. [Link](https://github.com/sipeed/picoclaw/pull/3205)
*   **PR #3193 (Open/Stale):** Proposes a new "simplex" channel type. While created earlier, it was updated recently, signaling ongoing interest in one-way communication modes. [Link](https://github.com/sipeed/picoclaw/pull/3193)

## 4. Community Hot Topics
The most discussed topics revolve around protocol reliability and user interface clarity:
*   **Matrix Sync Stability:** Issue #3203 highlights a critical flaw where network disruptions cause silent failures without triggering system restarts. This is a high-priority topic due to its impact on production reliability. [Link](https://github.com/sipeed/picoclaw/issues/3203)
*   **Model Management UX:** Issue #3294 questions the utility of the `/list models` command when it fails to display all configured models. This suggests a need for better transparency in multi-provider setups. [Link](https://github.com/sipeed/picoclaw/issues/3294)

## 5. Bugs & Stability
Two active issues are reported as bugs or functional defects:
1.  **High Severity:** [Issue #3203] Matrix sync loop lacks reconnection logic. The process dies silently after network/server disruption, bypassing systemd recovery mechanisms. No fix PR exists yet. [Link](https://github.com/sipeed/picoclaw/issues/3203)
2.  **Medium Severity:** [Issue #3294] `/list models` command only displays the current model instead of the full list. This is a functional bug affecting user experience in multi-model configurations. No fix PR exists yet. [Link](https://github.com/sipeed/picoclaw/issues/3294)

## 6. Feature Requests & Roadmap Signals
*   **Simplex Channel Support:** PR #3193 indicates demand for simplex (one-way) communication channels, potentially for broadcast-style AI agents. [Link](https://github.com/sipeed/picoclaw/pull/3193)
*   **Calendar & Email Integration:** The merged PR #339 shows strong community desire for deeper productivity tool integrations (Google Calendar, Email) and system monitoring tools.
*   **Multi-Model Visibility:** Users expect clearer visibility into all configured models via CLI commands, suggesting a roadmap item for improving the `/list` command behavior.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the lack of automatic reconnection in the Matrix channel, which leads to undetected service outages. There is also dissatisfaction with the misleading behavior of the `/list models` command in multi-model setups.
*   **Use Cases:** Active deployment on edge devices (Raspberry Pi) with custom gateways (9router) and integration into broader productivity workflows (Email, Calendar).
*   **Satisfaction:** Generally positive towards new integrations (Calendar/Email) but concerned about stability in long-running deployments.

## 8. Backlog Watch
*   **Issue #3203 (Matrix Reconnection):** Critical for production stability. Requires immediate maintainer attention to implement exponential backoff or automatic reconnection logic.
*   **PR #3193 (Simplex Channel):** Stale open PR from June. Needs review to determine if the feature aligns with the project's direction or if it should be closed/merged.
*   **Issue #3294 (List Models):** Simple fix but impacts user confidence in configuration management. Should be addressed in the next patch release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-07-26
**Source:** github.com/qwibitai/nanoclaw

## 1. Today's Overview
The NanoClaw project demonstrates high development velocity with 11 Pull Requests updated in the last 24 hours, indicating intense focus on stability and security hardening. Activity is currently driven by two primary tracks: resolving critical context synchronization bugs affecting agent memory (#3134) and addressing security vulnerabilities in container configurations and host communication (#3129, #3130). While no new releases were published today, the volume of merged and open PRs suggests an imminent patch or minor release to address these systemic issues. The community engagement remains active, with multiple contributors addressing core infrastructure and operational skills.

## 2. Releases
*   **No new releases.**
    *   *Note:* Several critical fixes are pending in open PRs (e.g., #3135, #3133), which may necessitate a hotfix release soon.

## 3. Project Progress
**Merged/Closed Items (Last 24h):**
*   **PR #2748 [CLOSED]: Security Hardening** - Merged by `boazdori`. This significant update enforces defense-in-depth for agent containers by applying `--cap-drop=ALL`, `no-new-privileges:true`, and `pids-limit 2048` by default. This reduces the attack surface for compromised agents.

**Active Advancements:**
*   **Context Parity Fix:** PR #3135 (`brianjcohen`) addresses a major logic flaw where messages sent by the host on behalf of an agent were invisible to the agent’s context. This is crucial for maintaining coherent conversation history.
*   **Poll Loop Logic:** PR #3133 (`buzali`) fixes a race condition in the follow-up poll mechanism that was bypassing accumulation gates, potentially leading to message loss or duplication.
*   **Image Management:** PR #3131 (`gavrielc`) improves the uninstall process to correctly remove per-agent-group derived images, preventing disk bloat from orphaned Docker layers.

## 4. Community Hot Topics
**Most Active Issues/PRs:**
1.  **[Security] Mount Security & Config Validation** (PRs #3129, #3130)
    *   *Link:* [PR #3129](https://github.com/nanocoai/nanoclaw/pull/3129), [PR #3130](https://github.com/nanocoai/nanoclaw/pull/3130)
    *   *Analysis:* There is a strong community push toward securing the host-container boundary. Users and maintainers are identifying gaps in allowlists (`~/.config/nanoclaw`) and input validation for image tags. This reflects a maturation of the platform where early-stage convenience is being traded for production-grade security.
2.  **[Core] Agent Memory Consistency** (Issue #3134 / PR #3135)
    *   *Link:* [Issue #3134](https://github.com/nanocoai/nanoclaw/issues/3134), [PR #3135](https://github.com/nanocoai/nanoclaw/pull/3135)
    *   *Analysis:* The absence of host-sent messages (like approval cards) from the agent’s context breaks the illusion of a continuous personality. This is a high-priority usability fix that directly impacts the reliability of autonomous agents.

## 5. Bugs & Stability
**Reported Bugs (Ranked by Severity):**
1.  **High: Context Blindness (Issue #3134)**
    *   *Description:* Agents cannot "see" messages the host sends on their behalf, leading to disjointed conversations.
    *   *Status:* Fix proposed in PR #3135.
2.  **Medium: Message Accumulation Bypass (Issue #3132)**
    *   *Description:* Follow-up polls push messages into active queries without respecting the `trigger` gate, causing data integrity issues.
    *   *Status:* Fix proposed in PR #3133.
3.  **Low: Orphaned Docker Images (Issue related to PR #3131)**
    *   *Description:* Uninstall processes fail to clean up derived images tagged with `<base>:<agentGroupId>`.
    *   *Status:* Fix proposed in PR #3131.

## 6. Feature Requests & Roadmap Signals
*   **Operational Skills:** PR #3128 introduces a "flight-checkin" container skill, suggesting a roadmap expansion into specialized, pre-built operational workflows for users.
*   **Tool Visibility:** PR #2211 (`robbyczgw-cla`) adds live tool-call previews (`PreToolUse/PostToolUse` hooks). Although created in May, its recent sync and status indicate it is nearing integration, signaling a focus on transparency in agent actions.
*   **MCP Server Reporting:** PR #3124 (`shixi-li`) aims to report unavailable MCP servers, improving debugging capabilities for integrations.

## 7. User Feedback Summary
*   **Pain Point:** The primary user friction point identified today is the lack of contextual awareness for agents when interacting with host-side approvals or rejections. Users expect the agent to have full memory of the interaction loop, including host interventions.
*   **Satisfaction:** The community appears satisfied with the direction of security hardening, as evidenced by the detailed reviews and merges regarding container caps and mount restrictions.
*   **Use Case:** The introduction of specific skills like "flight-checkin" indicates users are moving beyond general chat to structured, task-oriented automation.

## 8. Backlog Watch
*   **PR #3122 [OPEN]:** `fix(opencode): main compatibility, custom-endpoint transport, memory parity` by `glifocat`.
    *   *Watch Reason:* This PR touches on core compatibility and memory parity. It has been open since July 23 with updates through July 25. Its merge is critical for ensuring stable operation across different deployment environments.
*   **PR #2211 [OPEN]:** `feat: add tool-visibility skill` by `robbyczgw-cla`.
    *   *Watch Reason:* Created in May but updated recently. As a significant UX feature providing visibility into agent internals, its resolution will likely impact user trust and debugging efficiency.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-07-26
**Source:** GitHub (nearai/ironclaw)

## 1. Today's Overview
The IronClaw project demonstrates high development velocity with 20 Pull Requests and 11 Issues updated in the last 24 hours, indicating strong contributor engagement despite no new official releases today. Activity is heavily concentrated on WebUI performance optimization, accessibility fixes, and the "Reborn" architecture's error recoverability contracts. The team is actively addressing critical path issues related to agent integrations (Telegram/Slack) and stabilizing the core Rust dependency tree. Overall project health is robust, with a focus on hardening production code and improving user experience in the dashboard.

## 2. Releases
**No new releases published today.**
*Note: PR #5598 remains open for a release of `ironclaw_common` (0.4.2 -> 0.5.0) and other crates, but it has not been merged or tagged as a release yet.*

## 3. Project Progress
Significant progress was made today in three key areas:

*   **WebUI Performance & Accessibility:** Contributor `italic-jinxin` closed multiple issues (#6621, #6622, #6620) and merged corresponding PRs (#6624, #6626, #6627). Key advancements include:
    *   Implementation of route-level code splitting, reducing the initial JS bundle from ~1.2MB to ~376KB (PR #6632).
    *   Fixes for keyboard focus trapping in modals and preservation of workspace tree state during navigation.
    *   Resolution of state inconsistencies when run cancellations fail.
*   **Reborn Architecture Hardening:**
    *   PR #6673 added a production struct dead-code ratchet to prevent test-support code from leaking into production binaries.
    *   PR #6679 hardened the struct ratchet and removed dead Gemini API code.
    *   PR #6669 moved extension host ownership out of composition, simplifying the module structure.
*   **Agent Integrations & Signaling:**
    *   PR #6678 brought the `/model` and `/status` product commands live across Slack, Telegram, and WebChat.
    *   PR #6672 implemented Phase B of the attested-signing ledger revival (signed intent + per-agent key lifecycle).

## 4. Community Hot Topics
The following items generated the most discussion or represent critical community needs:

*   **[EPIC] Error Recoverability Endgame (#6284)**
    *   *Status:* Open | *Comments:* 6 | *Likes:* 0
    *   *Analysis:* This epic defines the core contract for mid-run error recovery. It is foundational to the "Reborn" vision, ensuring models can self-correct. The high comment count suggests active debate or refinement of the specification.
    *   *Link:* [Issue #6284](https://github.com/nearai/ironclaw/issues/6284)

*   **Daily IronClaw Failure Taxonomy (#6676)**
    *   *Status:* Open | *Comments:* 0 | *Likes:* 0
    *   *Analysis:* A daily diagnostic report highlighting that `clawbench` failures are driven by model shortfalls rather than harness defects. This indicates a shift in focus toward improving model robustness rather than fixing testing infrastructure.
    *   *Link:* [Issue #6676](https://github.com/nearai/ironclaw/issues/6676)

*   **Centralize Shared Rust Dependencies (#6675)**
    *   *Status:* Open | *Comments:* 0 | *Likes:* 2
    *   *Analysis:* This issue has received the most reactions (2 👍), signaling strong community support for cleaning up the Cargo workspace configuration to reduce version drift and maintenance overhead.
    *   *Link:* [Issue #6675](https://github.com/nearai/ironclaw/issues/6675)

## 5. Bugs & Stability
Several critical bugs were identified and fixed today, primarily within the WebUI:

1.  **Chat State Inconsistency on Cancel Failure (Fixed)**
    *   *Issue:* [#6620](https://github.com/nearai/ironclaw/issues/6620) | *PR:* [#6627](https://github.com/nearai/ironclaw/pull/6627)
    *   *Severity:* High
    *   *Detail:* Failed backend cancellation requests left the frontend in an incorrect idle state while the run continued. Fixed by deferring state clearing until backend confirmation.
2.  **Accessibility: Modal Focus Trap Missing (Fixed)**
    *   *Issue:* [#6621](https://github.com/nearai/ironclaw/issues/6621) | *PR:* [#6624](https://github.com/nearai/ironclaw/pull/6624)
    *   *Severity:* Medium
    *   *Detail:* Keyboard users could tab out of the extension configuration dialog. Fixed by implementing proper focus trapping and restoration.
3.  **UI Flash During Filter Changes (Fixed)**
    *   *Issue:* [#6622](https://github.com/nearai/ironclaw/issues/6622) | *PR:* [#6626](https://github.com/nearai/ironclaw/pull/6626)
    *   *Severity:* Low
    *   *Detail:* Switching automation filters caused a full loading skeleton flash. Fixed by preserving placeholder data during background refreshes.
4.  **GitHub PAT Rejection Loop (Open)**
    *   *Issue:* [#6667](https://github.com/nearai/ironclaw/issues/6667)
    *   *Severity:* High
    *   *Detail:* Invalid/expired GitHub tokens cause an infinite silent re-prompt loop without surfacing the error to the user. No fix PR linked yet.
5.  **Extension Host Bug Blocking Tests (Open)**
    *   *PR:* [#6681](https://github.com/nearai/ironclaw/pull/6681)
    *   *Severity:* Medium
    *   *Detail:* The mutation-audit harness failed to produce output due to a dispatch bug, blocking visibility into specific module regressions.

## 6. Feature Requests & Roadmap Signals
*   **WebUI Bundle Size Optimization:** Multiple issues (#6628, #6629) and PRs (#6632) indicate a strong roadmap commitment to reducing WebUI load times via code splitting and tree-shaking. Expect further performance improvements in upcoming patches.
*   **Improved Agent Guidance for Integrations:** Issues #6671 and #6668 highlight gaps where the agent fails to guide users through setting up Telegram and Slack. The roadmap likely includes enhancing agent prompts or adding direct links/guidance in the UI to bridge this "guidance gap."
*   **Unified Dependency Management:** Issue #6675 signals a move toward centralizing Rust dependencies using `[workspace.dependencies]`, which will simplify future updates and reduce merge conflicts.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the lack of clear error messaging when authentication fails (e.g., GitHub PAT loops) and the confusing navigation paths required to configure extensions like Telegram (dead-ends on "admin must configure").
*   **Satisfaction:** The significant reduction in WebUI load time (approx. 70% reduction in JS payload) is a major quality-of-life improvement for users with slower connections or large workspaces.
*   **Use Cases:** The focus on "recoverability" and "mutation testing" suggests advanced users and enterprises are prioritizing system reliability and auditability over new feature volume.

## 8. Backlog Watch
*   **Telegram Setup Dead-End (#6671):** Users are unable to easily configure Telegram from the standard entry points. Requires UX/UI adjustment to expose admin configuration or provide clearer agent guidance.
*   **Slack Connection Guidance Gap (#6668):** The agent does not proactively suggest Slack integration, leading to user confusion. Needs update to agent knowledge base or UI hints.
*   **GitHub PAT Silent Loop (#6667):** Critical usability bug where token rejection is invisible to the user. Needs immediate fix to prevent user lockout.
*   **Mutation Harness Bug (#6681):** The tooling used to validate error recoverability is itself broken, potentially masking regressions in the core logic. Maintainers should prioritize fixing the harness before relying on its output.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-07-26
**Source:** GitHub (netease-youdao/LobsterAI)

### 1. Today's Overview
The LobsterAI project demonstrated high development velocity on July 25, 2026, with 9 issues and 11 pull requests updated within the last 24 hours. The majority of recent activity involves closing long-standing feature requests and merging UI/UX enhancements, indicating a phase of stabilizing the core "Cowork" experience. While no new releases were published today, the team addressed critical Windows installer security fixes and expanded model support to include Kimi K3. Community engagement remains steady, with most recent interactions focused on interface usability improvements rather than core engine bugs.

### 2. Releases
*   **No new releases** were published in the last 24 hours.
*   Recent merged PRs (#2383, #2384) suggest hardening of the Windows installation process, which may precede an upcoming patch release focusing on stability.

### 3. Project Progress
Significant progress was made in merging user-requested features and fixing platform-specific issues:

*   **Windows Security & Stability:**
    *   **PR #2383**: Fixed root foreign content protection during Windows installation. [Link](https://github.com/netease-youdao/LobsterAI/pull/2383)
    *   **PR #2384**: Hardened Windows install and update recovery mechanisms. [Link](https://github.com/netease-youdao/LobsterAI/pull/2384)
*   **Model Support:**
    *   **PR #2381**: Added support for the Kimi K3 model. [Link](https://github.com/netease-youdao/LobsterAI/pull/2381)
*   **UI/UX Enhancements (Merged):**
    *   **PR #1327**: Implemented bulk expand/collapse for ToolUse blocks. [Link](https://github.com/netease-youdao/LobsterAI/pull/1327)
    *   **PR #1331**: Added red error indicator badges to the session list. [Link](https://github.com/netease-youdao/LobsterAI/pull/1331)
    *   **PR #1338**: Introduced time-based grouping for the session sidebar (Today, Yesterday, This Week). [Link](https://github.com/netease-youdao/LobsterAI/pull/1338)
    *   **PR #1340**: Added message timestamps to user bubbles. [Link](https://github.com/netease-youdao/LobsterAI/pull/1340)
    *   **PR #1342**: Enabled Up/Down arrow key navigation for input history. [Link](https://github.com/netease-youdao/LobsterAI/pull/1342)
    *   **PR #1336**: Added JSON paste import for MCP server configurations. [Link](https://github.com/netease-youdao/LobsterAI/pull/1336)
    *   **PR #1335**: Added "Workdays" (Mon-Fri) scheduling option for tasks. [Link](https://github.com/netease-youdao/LobsterAI/pull/1335)

### 4. Community Hot Topics
The community is actively discussing workflow efficiency and interface clarity. The following topics have generated significant discussion:

*   **Session Management & Navigation:** Users are heavily invested in organizing large numbers of sessions. Issues regarding time-grouping (#1337) and search capabilities (#1343) highlight a need for better information architecture as usage scales.
*   **Input Efficiency:** Requests for keyboard shortcuts (Up/Down history navigation #1341) and bulk tool expansion (#1326) indicate power users are seeking terminal-like efficiency in the chat interface.
*   **Error Visibility:** The request for visual error indicators (#1330) shows that users struggle to identify failed background tasks without clicking into each session.

### 5. Bugs & Stability
*   **Windows Installer Vulnerabilities:** Two closed PRs (#2383, #2384) address security and recovery issues in the Windows installer. These are critical stability fixes that prevent potential corruption or unsafe installations.
*   **Scheduled Task Notification Bug:** Issue #1329 reported that new scheduled tasks lacked notification channel options. This has been closed, implying a fix or clarification was provided.
*   **No active critical crashes** were reported in the open issues list for this period.

### 6. Feature Requests & Roadmap Signals
Based on closed issues and active discussions, the following features are likely prioritized for near-future updates:

*   **Full-Text Search:** Issue #1343 requests searching message content, not just titles. This is a standard expectation for AI assistants and is currently a gap.
*   **Markdown Export:** Issue #1345 asks for exporting conversations to Markdown files. This addresses the need for documentation and note-taking workflows.
*   **Folder Support in Chat:** Issue #2385 (Open) requests the ability to add folders and reference files via `@`, similar to other agents. This suggests a roadmap shift toward deeper file system integration.

### 7. User Feedback Summary
*   **Pain Points:** Users find it tedious to manage multiple tool calls individually (#1326) and struggle to locate specific messages in long conversations due to the lack of timestamps (#1339).
*   **Satisfaction:** The implementation of time-grouping and error badges is well-received as it reduces cognitive load. The addition of Kimi K3 support expands model flexibility.
*   **Unmet Needs:** The inability to attach folders directly in the dialog box (#2385) is a notable friction point for users managing complex projects.

### 8. Backlog Watch
*   **Issue #2385:** [Dialog Box Add File Only Supports Files, Not Folders](https://github.com/netease-youdao/LobsterAI/issues/2385) - Open since 2026-07-25. This is a high-visibility feature request for advanced file handling.
*   **Issue #1343:** [Search Only Supports Title, Not Full Text](https://github.com/netease-youdao/LobsterAI/issues/1343) - Closed as stale, but the demand for full-text search remains strong. Maintainers should review if this can be reopened or prioritized.
*   **Issue #1345:** [Export Conversation as Markdown](https://github.com/netease-youdao/LobsterAI/issues/1345) - Closed as stale. Given the professional use case for LobsterAI, this export functionality is critical for retention and should be revisited.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-07-26

## 1. Today's Overview
The Moltis project demonstrates moderate development velocity with five pull requests updated in the last 24 hours, indicating active maintenance and feature expansion. While no new releases or issues were opened today, the team is heavily focused on refining integration protocols for Nostr (Buzz) and Slack, alongside enhancing memory backend capabilities. The closure of documentation-related PRs suggests a concerted effort to enforce internal coding standards and workflow hygiene. Overall, the project health is stable, with a clear emphasis on improving agent interoperability and user feedback mechanisms.

## 2. Releases
*   **Status:** No new releases published today.

## 3. Project Progress
Two significant pull requests were merged/closed today, advancing both governance and core communication features:
*   **Workflow Enforcement (#1167):** Closed by `penso`. This documentation update explicitly forbids Claude session URLs in commit messages and PR descriptions, reinforcing clean version control practices and preventing accidental leakage of proprietary AI assistant links.
    *   [PR #1167](https://github.com/moltis-org/moltis/pull/1167)
*   **Slack Acknowledgment Mechanics (#1165):** Closed by `penso`. This feature merge resolves a critical UX gap where Slack bots lacked visible confirmation that a message was received. It introduces acknowledgment reactions and inbound reaction triggers, fixing bugs in threaded replies and improving reliability under queueing conditions.
    *   [PR #1165](https://github.com/moltis-org/moltis/pull/1165)

Three open PRs remain under review, focusing on new protocol support and infrastructure:
*   **Nostr NIP-29 Support (#1168):** Opened by `penso`. Adds group chat support for Buzz channels, aligning Moltis with Block's open-source workspace standards using NIP-29 over NIP-42 authentication.
    *   [PR #1168](https://github.com/moltis-org/moltis/pull/1168)
*   **Slack Enhancements (#1166):** Opened by `penso`. Builds upon the recent acknowledgment merge by adding phase feedback, Block Kit rendering, and reconnect supervision for more robust Slack interactions.
    *   [PR #1166](https://github.com/moltis-org/moltis/pull/1166)
*   **Zvec Memory Backend (#1158):** Opened by `demyanrogozhin`. Introduces an experimental vector database memory backend using Zvec and redb, feature-gated behind `zvec`, offering an alternative to existing memory storage solutions.
    *   [PR #1158](https://github.com/moltis-org/moltis/pull/1158)

## 4. Community Hot Topics
There are no new issues reported today, so community attention is currently directed toward the ongoing PR discussions:
*   **Slack Reliability & UX:** The high activity around PRs #1165 and #1166 highlights a strong community need for reliable, real-time feedback from AI agents in Slack environments. Users require clear signals ("I got it," "Processing") since typing indicators are unavailable for bots.
    *   [PR #1165](https://github.com/moltis-org/moltis/pull/1165) | [PR #1166](https://github.com/moltis-org/moltis/pull/1166)
*   **Nostr/Buzz Integration:** PR #1168 indicates growing interest in integrating Moltis with decentralized social protocols like Nostr, specifically for group collaboration within the Buzz ecosystem.
    *   [PR #1168](https://github.com/moltis-org/moltis/pull/1168)

## 5. Bugs & Stability
*   **No new bug reports** were filed today.
*   **Regression Fix:** PR #1165 addressed a "confirmed wrong-message bug in threaded replies" within the Slack integration, suggesting a prior stability issue has been resolved.
    *   [Fix PR #1165](https://github.com/moltis-org/moltis/pull/1165)

## 6. Feature Requests & Roadmap Signals
*   **Decentralized Chat Protocols:** The submission of PR #1168 (Nostr NIP-29) signals a roadmap direction towards supporting decentralized, self-hosted communication standards beyond traditional platforms like Slack.
    *   [Feature PR #1168](https://github.com/moltis-org/moltis/pull/1168)
*   **Advanced Memory Architectures:** PR #1158 proposes an experimental vector database backend (Zvec), indicating a desire for flexible, high-performance memory solutions that can be swapped via feature flags.
    *   [Feature PR #1158](https://github.com/moltis-org/moltis/pull/1158)
*   **Enhanced Slack UX:** The progression from PR #1165 to #1166 suggests an immediate roadmap focus on making Slack interactions indistinguishable from human-like responsiveness through phase feedback and rich formatting (Block Kit).
    *   [Feature PR #1166](https://github.com/moltis-org/moltis/pull/1166)

## 7. User Feedback Summary
*   **Pain Points:** The primary user pain point identified today revolves around the lack of visibility into agent status in Slack. The absence of typing indicators creates uncertainty for users waiting for responses.
*   **Satisfaction Drivers:** The implementation of acknowledgment reactions (#1165) directly addresses this anxiety, providing immediate visual confirmation. Users also appear to value the ability to self-host collaborative spaces like Buzz (#1168), indicating a preference for data sovereignty and customizable team environments.

## 8. Backlog Watch
*   **Experimental Memory Backend:** PR #1158 (Zvec backend) has been open since July 17th. As an experimental feature, it requires careful review to ensure stability and compatibility before merging. Maintainers should monitor this for potential integration challenges.
    *   [Backlog PR #1158](https://github.com/moltis-org/moltis/pull/1158)
*   **Slack Reconnect Supervision:** PR #1166 depends on the recent merge of #1165 but remains open. Its review is critical to ensuring the Slack integration is fully robust before further expansions.
    *   [Open PR #1166](https://github.com/moltis-org/moltis/pull/1166)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-07-26

## 1. Today's Overview
The CoPaw project (QwenPaw) is experiencing high developer engagement with 8 new issues and 8 pull requests updated in the last 24 hours. Activity is heavily focused on resolving critical transport configuration bugs within the MCP driver and addressing performance regressions on specific browser/OS combinations. While no new releases were published today, the volume of merged fixes and feature enhancements suggests a robust pre-release stabilization phase. The community is actively reporting edge-case failures, particularly regarding cross-platform compatibility and agent isolation security.

## 2. Releases
*   **No new releases** were published today.
*   Current active version referenced in bug reports remains **v2.0.1**.

## 3. Project Progress
Several key technical improvements and documentation clarifications were advanced via Pull Requests:
*   **Website Deployment Automation**: PR #6463 by @yutai78786 integrates website deployment into the release orchestrator, fixing a regression where the public site (`qwenpaw.agentscope.io`) was not refreshing after draft-to-published transitions. [Link](https://github.com/agentscope-ai/QwenPaw/pull/6463)
*   **Windows Sandbox Support Clarification**: PR #6462 by @1105623876 updates documentation to reflect native Windows sandbox support (AppContainer/restricted-token), removing the misconception that WSL2 is a strict prerequisite. [Link](https://github.com/agentscope-ai/QwenPaw/pull/6462)
*   **Database Reliability**: PR #6459 by @niceIrene hardens SQLite persistence for chat history, addressing concurrent write conflicts and WAL lifecycle management. [Link](https://github.com/agentscope-ai/QwenPaw/pull/6459)
*   **Browser SDK Architecture**: PR #6276 by @xiaoming-qxm introduces a unified browser control SDK with a split control-plane/execution-plane architecture, allowing LLM-authored async Python to run in subprocesses. [Link](https://github.com/agentscope-ai/QwenPaw/pull/6276)
*   **Reranker UI Enhancements**: PR #6399 by @lecheng2018 adds a visual configuration panel for rerankers in the memory card component, complementing backend features merged earlier. [Link](https://github.com/agentscope-ai/QwenPaw/pull/6399)
*   **Windows CI Fix**: PR #6365 by @patrick-andstar fixes test script execution on Windows by bypassing `cmd.exe` interpretation issues for `NODE_OPTIONS`. [Link](https://github.com/agentscope-ai/QwenPaw/pull/6365)

## 4. Community Hot Topics
The most discussed topics revolve around MCP connectivity stability and resource management:
*   **MCP Transport Hardcoding Bug**: Multiple issues (#6470, #6469, #6468) filed by @JohnyLe highlight a critical bug where the MCP driver ignores YAML configuration for `streamable_http` transport, defaulting to SSE clients. This is causing session termination errors for Jin10 MCP tools. [Link to #6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)
*   **Edge/Wayland CPU Spike**: Issue #6460 by @dayofyear reports significant CPU usage and fan acceleration in Microsoft Edge on Linux Wayland when viewing large conversation sets or WebSocket streams. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6460)
*   **Agent Isolation Security**: Issue #6461 by @d1742647821 raises concerns about data leakage between agents, requesting a "complete isolation" mode to prevent one agent from accessing another's memory or settings. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6461)

## 5. Bugs & Stability
Critical stability issues reported today include:
1.  **MCP Driver Transport Failure** (High Severity): The hardcoded SSE client in `mcp_stateful_client.py` breaks connections to Streamable HTTP servers. This affects multiple users and workspaces. *Fix PRs likely needed in core transport logic.* [Link](https://github.com/agentscope-ai/QwenPaw/issues/6470)
2.  **API Connection Failures** (High Severity): Issue #6464 by @albertfengjiajun reports that v2.0.1 deployed on AgentScope Platform cannot connect to any models, showing empty dropdowns and API errors. This suggests a regression in model discovery or authentication handling. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6464)
3.  **Browser Rendering Performance** (Medium Severity): Issue #6460 details high CPU consumption in Edge browsers under Wayland, likely due to inefficient DOM rendering or WebSocket handling for large contexts. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6460)
4.  **Node Setup Connectivity** (Low Severity): Issue #6467 by @izr9 reports difficulties setting up proxy nodes, though this may be user-error or network-specific rather than a core framework bug. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6467)

## 6. Feature Requests & Roadmap Signals
User feedback points to several areas for potential roadmap inclusion:
*   **Clickable Path Buttons**: Issue #6466 by @Ra-M497 requests clickable file/folder path buttons in chat to improve UX on desktop. This aligns with the broader goal of making QwenPaw more interactive and OS-integrated.
*   **Strict Agent Isolation**: Issue #6461 emphasizes the need for multi-agent privacy controls. Given the rise in multi-agent deployments, a "sandboxed agent" mode or strict namespace isolation could be a high-value feature for enterprise users.
*   **Native Windows Sandbox**: While currently documented as clarified, the push for native Windows sandboxing (PR #6462) indicates a roadmap commitment to reducing WSL dependency for standard users.

## 7. User Feedback Summary
*   **Frustration with Configuration Rigidity**: Users are frustrated that MCP transport settings in YAML files are being ignored, forcing them to modify code or switch protocols manually.
*   **Performance Anxiety**: The Edge/Wayland CPU spike is causing concern among users running long-running sessions or complex ComfyUI workflows, as it impacts hardware thermals and battery life.
*   **Security Concerns**: The report of cross-agent memory access has triggered immediate calls for isolation features, highlighting that users view agent data as sensitive and private.
*   **Deployment Confusion**: New users are struggling with basic node setup and server connectivity, indicating a need for better onboarding guides or error messages in v2.0.1.

## 8. Backlog Watch
*   **MCP Transport Fix**: The repeated reporting of the same MCP bug across three issues (#6470, #6469, #6468) suggests this is a priority block. Maintainers should investigate PRs addressing `mcp_stateful_client.py` immediately.
*   **Model Discovery Regression**: The widespread API connection failure in Issue #6464 needs urgent investigation if it is not isolated to a single user's environment, as it blocks core functionality for platform deployments.
*   **Long-standing Windows CI Issues**: PR #6365 addresses a longstanding friction point for Windows contributors; ensure this is merged to maintain contributor momentum.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-07-26

## 1. Today's Overview
ZeroClaw is in a critical pre-release phase for version 0.8.4, with significant activity focused on stabilization and preparation for the July 31 target date. The project saw high engagement today, with 19 issues updated and 50 PRs processed, indicating intense development velocity. While no new official releases were published yet, PR #9376 signals the imminent cut of v0.8.4, including crates.io publishing readiness. Security and runtime stability remain the primary drivers of current work, with multiple high-severity bugs related to WhatsApp configurations, cron job delivery, and test flakiness being actively addressed.

## 2. Releases
**No new official releases published today.** However, preparatory work for **v0.8.4** is underway.
*   **PR #9376**: Prepares the workspace for `crates.io` publishing, renaming the root package to `zeroclaw` to match the binary name. This is a significant structural change that may require migration notes for users relying on specific crate paths.

## 3. Project Progress
Several key areas advanced through merged or closed PRs and active discussions:
*   **Plugin Architecture Stabilization**: JordanTheJet advanced the plugin system significantly with PRs #9125 (keeping channel listeners under supervision), #9124 (adding channel component fixtures), and #9123 (fixing host-stamp routing). These changes improve the reliability and observability of WASM-based plugins.
*   **CI/CD Optimization**: PR #9115 introduced optional "Blacksmith" runners for compile-heavy jobs, aiming to reduce CI latency. PR #9371 parallelized the runtime stress gate, improving test throughput.
*   **Dependency Hygiene**: PR #9270 resolved npm audit advisories by pinning `@redocly/openapi-core` and upgrading `js-yaml`, addressing security findings from Issue #9235.

## 4. Community Hot Topics
*   **"Everything is a plugin" Roadmap (Issue #6489)**: With 5 comments, this tracker outlines the long-term architectural goal to unify Integrations and Plugins into a single catalog. It reflects a strong community desire for a simplified, modular extension model.
*   **AI-Assisted PR Review (Issue #9330)**: An RFC proposing AI-assisted pre-review to accelerate the review process while keeping human oversight. This indicates a need to manage the growing volume of PRs (50 updated today) more efficiently.
*   **WhatsApp Web Security & Config Bugs (Issues #9348, #9366)**: High visibility due to the severity of the "business mode" bypass bug (#9348) and the unused `approval_timeout_secs` config (#9366). These are split from a common root cause in the WhatsApp channel implementation.

## 5. Bugs & Stability
Multiple high-severity issues reported today, focusing on security risks and runtime instability:
*   **[S1] WhatsApp Web Policy Bypass (Issue #9348)**: A critical security flaw where `mode = business` ignores allowlists, replying to all DMs/groups. **Fix PR #9354** adds warnings but does not fully resolve the underlying logic gap yet.
*   **[S2] Test Flakiness & Mutex Poisoning (Issue #9357)**: `cargo test -p zeroclaw-runtime` fails 19/20 runs due to a poisoned global mutex. This severely impacts developer confidence and CI reliability.
*   **[S2] Verifiable Intent Chain Verification Gap (Issue #9328)**: The `vi_verify` function evaluates constraints without verifying the credential chain, a potential security integrity issue.
*   **[S2] CLI Cron Job Output Loss (Issue #9340)**: Cron jobs created via CLI discard output (`delivery.mode = "none"`), making them silent failures.
*   **[S3] Agent Lifecycle Leak (Issue #9374)**: The CLI `run()` function leaks `AgentStart` events on 12 exit paths, causing unbalanced lifecycle metrics.
*   **[S2] Peer-Agent Cost Tracking Failure (Issue #9373)**: Detached peer-agent deliveries skip cost tracking, leading to unenforced budgets.

## 6. Feature Requests & Roadmap Signals
*   **Unified Plugin Catalog (Issue #6489)**: The push to collapse Integrations and Plugins suggests the next major version will heavily feature a unified plugin ecosystem.
*   **Single-Message Progress Drafts (PR #8443)**: Matrix channel now supports editing progress/reasoning into a single message draft, enhancing UX for long-running tasks.
*   **Raw Stdout for Cron Jobs (PR #8438)**: Adds `shell_output_format` to allow raw stdout capture for cron jobs, addressing the usability gap noted in Issue #9340.
*   **Atlas Cloud Provider (PR #9200)**: New integration for Atlas Cloud as an OpenAI-compatible provider, expanding supported LLM backends.

## 7. User Feedback Summary
Users are expressing frustration with **configuration complexity and misleading defaults**, particularly in the WhatsApp channel (Issue #9348). The disconnect between `mode = business` settings and actual behavior is a major pain point. Additionally, the **loss of data in CLI cron jobs** (Issue #9340) is a significant usability blocker for automation workflows. On the positive side, the community appreciates the ongoing efforts to stabilize the plugin system and improve CI speed.

## 8. Backlog Watch
*   **Issue #9357 (Test Flakiness)**: Requires immediate maintainer attention as it blocks reliable development and testing.
*   **Issue #7130 (forbid(unsafe_code))**: A long-standing tracker (created June 3) to enforce safe Rust workspace-wide. It remains open and needs resolution before v0.8.4 if security is a priority.
*   **Issue #8583 (Channel Cleanup Tracker)**: A coordination point for shared-boundary cleanup. Progress here is essential for future channel additions.
*   **Issue #9363 (Localization Gaps)**: Config metadata remains English in localized interfaces, a minor but persistent UX issue.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*