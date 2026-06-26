# OpenClaw Ecosystem Digest 2026-06-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-26 02:15 UTC

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

# OpenClaw Project Digest: 2026-06-26

## 1. Today's Overview
The OpenClaw project exhibits extremely high activity levels, with 500 issues and 500 pull requests updated in the last 24 hours. Despite the volume, no new releases were published today, suggesting the team is focused on stabilizing a significant backlog of bugs and security fixes rather than shipping a new version. The majority of recent activity involves critical stability patches, authentication hardening, and memory leak resolutions. The project is in a heavy maintenance phase, addressing regressions introduced in recent versions (particularly around 2026.3.x and 2026.4.x).

## 2. Releases
**None.** No new versions were released on this date.

## 3. Project Progress
Several key areas saw advancement through merged or closed PRs and active development:
*   **CLI & Shell Improvements:** Closed PR #72267 fixed zsh completion directives, ensuring shell integrations work correctly on first load.
*   **Security & Trust:** PR #81364 ("Check ClawHub trust before plugin and skill installs") is actively being refined to block malicious community releases, a major step toward ecosystem security.
*   **Voice & Realtime:** PR #96876 advanced local realtime voice routing, allowing voice sessions to utilize the main agent loop’s tools and sub-agents.
*   **Session Persistence:** PR #96391 and PR #55351 are addressing session context preservation across gateway restarts and between Open WebUI and Control UI, respectively, improving user experience continuity.
*   **Code Quality:** PR #94857 replaced nautical-themed progress labels with neutral technical terms, likely to improve accessibility and professional tone.

## 4. Community Hot Topics
High-engagement discussions indicate critical pain points in reliability and security:
*   **[RFC] Multi-Session Architecture** (Issue #48874, 7 comments): A proposal for shared LLM instances with isolated sessions and public knowledge bases. *Analysis:* Users are demanding better resource efficiency and multi-tenant capabilities without sacrificing privacy.
*   **Gateway Memory Leak** (Issue #55334, 10 comments; Issue #54155, 7 comments): Reports of unbounded `sessions.json` growth causing OOM kills. *Analysis:* This is a severe stability blocker for long-running deployments, directly impacting trust in the platform's reliability.
*   **Security: Untrusted Issue Body Injection** (Issue #45740, 14 comments): The `gh-issues` skill injects raw GitHub data into prompts. *Analysis:* Critical security vulnerability identified by the community, prompting urgent need for sanitization layers.
*   **Context Overflow Recovery** (Issue #63216, 11 comments): Repeated hard resets despite high reserve tokens. *Analysis:* Users are hitting limits of current context management strategies, requiring deeper algorithmic improvements.

## 5. Bugs & Stability
Significant number of bugs reported today, many marked as P1/P2 with high severity ratings:
*   **Critical Security/Auth:**
    *   **#67366:** `TypeError` during `openclaw onboard` when replacing Telegram tokens. *Fix PR:* None explicitly linked yet.
    *   **#65624:** Mattermost slash commands exposing reusable tokens via cleartext callbacks (CVSS 8.6). *Fix PR:* None linked.
    *   **#51396:** `clearUnboundScopes` stripping operator scopes for non-local clients, breaking backend clients. *Status:* Regression.
*   **Stability & Crashes:**
    *   **#91009:** Codex PreToolUse hook spawning CPU-bound processes, stalling gateway RPC. *Status:* High impact on performance.
    *   **#55334 & #54155:** Gateway memory leaks leading to OOM. *Status:* Active investigation, no fix merged yet.
    *   **#63918:** Cron agent sending invalid `thinking=none` to OpenAI models, causing 400 errors. *Fix PR:* #83648 addresses authorization headers, potentially related to provider config fixes.
*   **Data Loss/Integrity:**
    *   **#58450:** Agents promising follow-ups without executing actions. *Status:* Trust/safety issue.
    *   **#49876:** Cron sessions hallucinating output when tool calls fail. *Status:* Major reliability concern for automated tasks.
    *   **#66443:** Overflow recovery duplicating user messages, amplifying transcript bloat. *Fix PR:* None linked.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Slot Memory** (Issue #60572, 6 comments): Request for multiple purpose-specific memory slots. *Prediction:* Likely to be prioritized given the complexity of current single-slot memory limitations.
*   **Remote Reranker Support** (Issue #64438, 6 comments): Demand for external reranker APIs (e.g., Cohere, Qwen). *Prediction:* High likelihood of inclusion to compete with other RAG-enabled assistants.
*   **Sensitive Data Masking** (Issue #64046, 8 comments): Request for masking secrets in logs and UI. *Prediction:* Strong candidate for next security patch due to compliance requirements.
*   **Per-Agent TTS/STT** (Issue #66252, 7 comments): Multi-language voice support. *Prediction:* Aligns with global expansion efforts, likely to be implemented in upcoming voice-related updates.
*   **Skill Priority Configuration** (Issue #50199, 8 comments): Intelligent skill selection. *Prediction:* Low priority compared to stability issues, but valuable for complex setups.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **memory leaks** and **session loss** after restarts, which undermine trust in OpenClaw for long-running or mission-critical tasks. The **hallucination of follow-ups** and **cron failures** are also significant sources of dissatisfaction.
*   **Positive Signals:** The community is highly engaged in security discussions (e.g., ClawHub trust, credential masking), indicating a mature user base concerned with enterprise-grade safety. The demand for **multi-agent isolation** and **remote rerankers** suggests users are pushing the platform towards more sophisticated, scalable architectures.
*   **Specific Complaints:** Hardcoded paths in previous versions (Issue #51429) caused alarm, though this appears to be a resolved regression. Users appreciate the rapid response to security issues but want more proactive fixes for stability regressions.

## 8. Backlog Watch
*   **Security: Untrusted Input Injection** (Issue #45740): Requires immediate attention due to potential prompt injection vulnerabilities in the `gh-issues` skill.
*   **Memory Leak: Unbounded Growth** (Issue #55334): Critical for production stability. Needs a definitive fix to prevent OOM crashes.
*   **Auth Provider Bypass** (Issue #57326): CLI-backed helper paths bypassing dispatch logic pose a security risk.
*   **ClawHub Trust Implementation** (PR #81364): While in progress, ensuring robust blocking of malicious skills is vital for ecosystem health.
*   **Context Overflow Logic** (Issue #63216 & #66443): Complex session state management issues need architectural review to prevent data duplication and infinite loops.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: Personal AI Agent Frameworks
**Date:** 2026-06-26
**Prepared By:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The 2026 personal AI agent landscape is characterized by a decisive shift from experimental prototyping to enterprise-grade stability and security. With six of nine tracked projects showing high activity, the community is heavily focused on resolving critical infrastructure challenges, particularly around memory management, session persistence, and sandboxed execution. Security has emerged as the primary differentiator, with multiple projects actively patching supply chain vulnerabilities and implementing strict tool-execution boundaries. The ecosystem is consolidating around robust, multi-channel integration frameworks that prioritize reliability over novel feature experimentation.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | None (Maintenance Phase) | High |
| **Hermes Agent** | 50 | 50 | None (Imminent Patch) | High |
| **CoPaw** | 27 | 50 | None (Post-Migration) | High |
| **NanoBot** | 25 | 41 | None (Security Patching) | High |
| **ZeroClaw** | 47 | 50 | None (v0.8.2 Prep) | High |
| **IronClaw** | 50 | 50 | None (Integration Phase) | High |
| **NanoClaw** | N/A | 16 | None (Stable) | Medium |
| **LobsterAI** | 1 | 9 | None (Refinement) | Medium |
| **PicoClaw** | 3 | 19 | None (Optimization) | Medium |
| **NullClaw** | 0 | 0 | No Activity | Low |
| **TinyClaw** | 0 | 0 | No Activity | Low |
| **Moltis** | 0 | 0 | No Activity | Low |
| **ZeptoClaw** | 0 | 0 | No Activity | Low |

*\*Health Score reflects commit velocity, issue resolution rate, and community engagement intensity.*

## 3. OpenClaw's Position
OpenClaw dominates the ecosystem in terms of raw volume, with 1,000 total updates in 24 hours—significantly higher than any peer. Its primary advantage lies in its massive scale and comprehensive multi-session architecture, addressing complex enterprise needs like shared LLM instances and isolated contexts. However, unlike competitors such as NanoBot or ZeroClaw, which are pivoting toward lightweight, security-isolated runtimes (WASM/Confinement), OpenClaw is currently bogged down by heavy maintenance of regressions in its core gateway and memory systems. While it leads in feature breadth (voice, real-time, extensive skill hub), it lags in perceived stability due to unresolved memory leaks and context overflow issues, whereas smaller projects like PicoClaw are optimizing for efficiency and cost-control.

## 4. Shared Technical Focus Areas
*   **Security & Sandboxing:** All active projects are prioritizing execution safety.
    *   *Specifics:* NanoBot is patching `exec` bypass vulnerabilities; ZeroClaw is implementing WASM plugins and SLSA provenance; NanoClaw is enforcing workspace confinement; OpenClaw is refining ClawHub trust checks.
*   **Memory & Context Management:** Persistent, efficient memory is a universal pain point.
    *   *Specifics:* OpenClaw and IronClaw are tackling session loss and memory leaks; ZeroClaw is implementing Session TTL cleanup; CoPaw is exploring durable history via scroll context managers.
*   **Multi-Agent & Delegation:** Moving beyond single-agent loops to hierarchical structures.
    *   *Specifics:* OpenClaw proposes multi-session architectures; ZeroClaw defines "Goal Mode" and delegate policies; CoPaw and IronClaw are refining sub-agent orchestration and approval gates.
*   **Cross-Platform Compatibility:** Ensuring stability across diverse OS environments.
    *   *Specifics:* Hermes Agent and NanoClaw are fixing Windows/Linux desktop launch crashes; ZeroClaw is addressing Windows BOM config issues; NanoBot is resolving Telegram/Web UI regressions.

## 5. Differentiation Analysis
*   **Technical Architecture:**
    *   *OpenClaw/Hermes:* Monolithic, feature-rich gateways with heavy desktop/web UI integration.
    *   *ZeroClaw/PicoClaw:* Modular, lightweight, and security-first (WASM, confined execution).
    *   *CoPaw/AgentScope:* Framework-centric, focusing on developer extensibility and migration from v1 to v2.
*   **Target Users:**
    *   *Enterprise/Team:* IronClaw (RBAC, approval workflows) and OpenClaw (multi-tenant proposals).
    *   *Developers/Power Users:* CoPaw (custom providers, CLI tools) and NanoBot (skill organization, PWA).
    *   *General Consumers:* LobsterAI (UI/UX refinements, scheduled tasks) and PicoClaw (efficiency/cost-conscious).
*   **Feature Focus:**
    *   *Security:* ZeroClaw and NanoBot lead in proactive security hardening.
    *   *Reliability:* Hermes Agent and IronClaw are currently prioritizing stability patches over new features.
    *   *Efficiency:* PicoClaw and OpenClaw (evolution module) are optimizing for token and resource consumption.

## 6. Community Momentum & Maturity
*   **Tier 1: High Velocity & Stabilization:** OpenClaw, Hermes Agent, IronClaw, CoPaw, and ZeroClaw are in active, high-volume maintenance phases. They are rapidly iterating on fixes rather than shipping new major versions, indicating a maturity stage where reliability trumps novelty.
*   **Tier 2: Focused Development:** NanoBot, NanoClaw, and LobsterAI show steady, targeted progress. NanoBot is deeply engaged in security remediation, while LobsterAI focuses on UI/UX polish. These projects have smaller but highly engaged communities.
*   **Tier 3: Dormant:** NullClaw, TinyClaw, Moltis, and ZeptoClaw show no activity, suggesting either successful stabilization with low maintenance needs or abandonment. For decision-makers, the Tier 1 and 2 projects offer the safest bets for long-term support and community-driven improvements.

## 7. Trend Signals
*   **Supply Chain Security is Paramount:** The widespread adoption of SLSA provenance (ZeroClaw), plugin trust checks (OpenClaw), and dependency modernization (PicoClaw) signals that AI agents are entering regulated, enterprise environments where software integrity is non-negotiable.
*   **Shift from Summarization to Structured Memory:** Projects are moving away from simple context compression toward structured, queryable memory systems (OpenClaw multi-slot, ZeroClaw session TTL, CoPaw durable history), recognizing that naive truncation degrades agent performance.
*   **Declarative Policy Over Hardcoded Constraints:** There is a clear trend toward flexible, user-defined policies for tool execution and delegation (IronClaw RBAC, ZeroClaw delegate modes, NanoBot allowlists), allowing agents to operate safely in complex, multi-user workflows.
*   **Cost and Efficiency Optimization:** With LLM API costs remaining a factor, projects like PicoClaw and OpenClaw are prioritizing token efficiency and cold-path skipping, indicating that sustainable economics are driving architectural decisions.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-06-26

## 1. Today's Overview
NanoBot experienced a day of intense security remediation and stability hardening, characterized by a high volume of critical vulnerability reports and corresponding fixes. The project maintained robust activity with 25 issues and 41 pull requests updated in the last 24 hours, though no new official releases were published. Community focus has shifted heavily toward securing the `exec` tool and MCP integration layers, addressing bypass vulnerabilities that could lead to unauthorized shell command execution. Despite the security surge, general feature development continues with improvements to PWA support, subagent reliability, and skill organization.

## 2. Releases
**No new releases.**
While numerous critical security patches and bug fixes were merged or are pending (e.g., PR #4525, #4526, #4099), the project has not yet tagged a new version to bundle these changes. Users should be aware that the latest stable version likely lacks these recent security mitigations.

## 3. Project Progress
Key advancements and merges today include:
*   **Security Patching:** Several PRs address critical security flaws. PR #4525 fixes the login-shell secret leakage issue, and PR #4526 resolves the `allowPatterns` bypass via chained commands. PR #4524 enforces `enabledTools` filtering on MCP resources and prompts.
*   **Stability Improvements:** PR #4099 ensures `extra_allowed_dirs` remain read-only, fixing a regression where write tools could modify protected directories. PR #4530 deduplicates tool call IDs in non-streaming parsers to prevent execution errors with certain providers.
*   **Feature Enhancements:** PR #4504 allows skills to be organized in subdirectories, improving UX for large skill sets. PR #4534 introduces verification gates and provider recovery mechanisms for the agent loop.

## 4. Community Hot Topics
The community is overwhelmingly focused on security implications of the `exec` tool and MCP configuration.
*   **Exec Tool Security:** Multiple issues (#4514, #4515, #4516, #4520, #4521) highlight various bypass techniques for the `allowPatterns` whitelist. This indicates a strong need for rigorous input validation in shell execution tools.
    *   [Issue #4514](https://github.com/HKUDS/nanobot/issues/4514)
    *   [Issue #4521](https://github.com/HKUDS/nanobot/issues/4521)
*   **MCP Scope Bypass:** Issues #4519, #4434, and #4435 report that MCP allowlists (`enabledTools`) fail to restrict resource and prompt exposure, posing a risk of information leakage.
    *   [Issue #4519](https://github.com/HKUDS/nanobot/issues/4519)
    *   [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434)
*   **Underlying Need:** Users are demanding stricter security boundaries for agent actions, particularly regarding file system access and shell execution, reflecting a maturation of use cases into more sensitive, production-like environments.

## 5. Bugs & Stability
Several bugs affecting stability and platform compatibility were reported:
*   **Windows Service/Background Issues:** Issue #4511 and #4513 describe inconsistencies with the `--background` flag and NSSM service management, where restart commands fail to update process state correctly.
    *   [Issue #4511](https://github.com/HKUDS/nanobot/issues/4511)
    *   [Issue #4513](https://github.com/HKUDS/nanobot/issues/4513)
*   **Telegram Web UI Regression:** Issue #4488 reports that rich message formatting breaks compatibility with Telegram Web clients.
    *   [Issue #4488](https://github.com/HKUDS/nanobot/issues/4488)
*   **Session Key Collision:** Issue #4533 (fixed by PR #4533) highlights a bug where distinct session keys collided due to character replacement, risking data overlap.
    *   [PR #4533](https://github.com/HKUDS/nanobot/pull/4533)
*   **ASR Transcription Failure:** Issue #4492 notes that Xiaomi MiMo ASR fails due to unsupported WebM audio formats, addressed by PR #4493.
    *   [Issue #4492](https://github.com/HKUDS/nanobot/issues/4492)

## 6. Feature Requests & Roadmap Signals
*   **Clarification Tool:** Issue #4508 requests an `ask_clarification` tool to handle ambiguous user inputs proactively, signaling a desire for more conversational and less brittle agent interactions.
    *   [Issue #4508](https://github.com/HKUDS/nanobot/issues/4508)
*   **PWA & Mobile Support:** Issue #4479 and PR #4494 push for Progressive Web App support and mobile swipe gestures, indicating a roadmap direction toward broader accessibility and mobile-first usage.
    *   [Issue #4479](https://github.com/HKUDS/nanobot/issues/4479)
*   **Custom Provider Thinking Style:** Issue #4429 addresses the inability of custom providers (e.g., VolcEngine) to use standard thinking parameters, suggesting a need for more flexible provider abstraction in future updates.
    *   [Issue #4429](https://github.com/HKUDS/nanobot/issues/4429)
*   **Subagent Config:** Issue #4198 requests configurable `fail_on_tool_error` behavior for subagents, aiming to improve resilience in complex multi-agent workflows.
    *   [Issue #4198](https://github.com/HKUDS/nanobot/issues/4198)

## 7. User Feedback Summary
Users are expressing significant concern over the security posture of the `exec` and MCP tools, noting that existing allowlists are insufficient against sophisticated bypass techniques. There is also frustration with platform-specific quirks, particularly on Windows (service management) and Telegram (rich text rendering). Positive feedback is emerging around the flexibility of the skill system and the potential of PWA support. The high number of security-related comments suggests users are actively auditing the codebase for safety in production deployments.

## 8. Backlog Watch
*   **Legacy Security Issue:** Issue #2439 reports malicious code in a specific PyPI package version (`v0.1.4.post5`). While closed, this highlights the importance of supply chain hygiene and verifying package integrity.
    *   [Issue #2439](https://github.com/HKUDS/nanobot/issues/2439)
*   **Filesystem Restriction Enforcement:** Issue #143 notes that filesystem tools historically did not enforce `restrict_to_workspace`. Although recently patched (PR #4099), older deployments may still be vulnerable if not updated.
    *   [Issue #143](https://github.com/HKUDS/nanobot/issues/143)
*   **Dream Cron Job History Leak:** Issue #4242 identifies a bug where disabling the "dream" feature still injects chat history into the system prompt due to cursor management issues.
    *   [Issue #4242](https://github.com/HKUDS/nanobot/issues/4242)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-26
**Source:** NousResearch/hermes-agent

## 1. Today's Overview
The Hermes Agent project experienced extremely high activity today, with 50 issues and 50 pull requests updated in the last 24 hours. The development focus is heavily concentrated on critical security patches, specifically addressing OAuth credential rotation failures in multi-profile setups and email header spoofing vulnerabilities. Simultaneously, the team is resolving significant stability regressions in the Desktop application (specifically Windows/Linux launch crashes) and gateway session state corruption. While no new official releases were published today, the volume of merged fixes suggests an imminent patch release to address these P1/P2 severity items.

## 2. Releases
*   **No new releases published today.**
*   *Note:* Multiple P1 bugs affecting Desktop launches and Gateway state integrity were fixed today, indicating a hotfix release may be imminent.

## 3. Project Progress
Significant technical advancements and bug fixes were merged or advanced today:

*   **Security & Auth Fixes:**
    *   **[PR #51753](https://github.com/NousResearch/hermes-agent/pull/51753) / [PR #50632](https://github.com/NousResearch/hermes-agent/pull/50632) / [PR #49127](https://github.com/NousResearch/hermes-agent/pull/49127):** Fixed critical OAuth rotation issues for Codex/xAI providers. Rotated grants are now written back to the global root `auth.json`, preventing sibling profiles from losing access when refresh tokens expire.
    *   **[PR #52801](https://github.com/NousResearch/hermes-agent/pull/52801):** Patched email spoofing vulnerability (GHSA-rxqh-5572-8m77) by enforcing SPF/DKIM/DMARC checks before trusting `From:` headers.
    *   **[PR #52799](https://github.com/NousResearch/hermes-agent/pull/52799):** Implemented provider gating for credential pools to prevent mismatches during agent construction.

*   **Stability & State Management:**
    *   **[PR #52798](https://github.com/NousResearch/hermes-agent/pull/52798):** Added detection and repair for FTS (Full-Text Search) database corruption that caused silent gateway history loss.
    *   **[PR #52795](https://github.com/NousResearch/hermes-agent/pull/52795) / [PR #52272](https://github.com/NousResearch/hermes-agent/pull/52272):** Fixed reasoning-model "thinking timeouts" being misclassified as context overflows, which previously led to erroneous history compression.
    *   **[PR #52789](https://github.com/NousResearch/hermes-agent/pull/52789) / [PR #52793](https://github.com/NousResearch/hermes-agent/pull/52793):** Fixed Docker ownership repairs to safely skip symlinked directories, preventing recursive chown errors on complex setups.

*   **Platform Features:**
    *   **[PR #27922](https://github.com/NousResearch/hermes-agent/pull/27922) / [PR #52790](https://github.com/NousResearch/hermes-agent/pull/52790):** Improved Feishu adapter to render markdown tables as native Feishu tables instead of plain text.
    *   **[PR #52802](https://github.com/NousResearch/hermes-agent/pull/52802):** Added support for Discord threaded free-response channels.

## 4. Community Hot Topics
High-engagement discussions center on security boundaries, platform compatibility, and UX improvements.

*   **Credential Proxy Daemon (Issue [#4656](https://github.com/NousResearch/hermes-agent/issues/4656)):** 11 comments, 1 👍. Users are requesting a zero-knowledge HTTP broker for credentials to further isolate agent permissions beyond PID namespaces.
*   **Slack Markdown Support (Issue [#8552](https://github.com/NousResearch/hermes-agent/issues/8552)):** 8 comments, 9 👍. Strong community demand to upgrade from legacy `mrkdwn` to Slack Block Kit to support tables and richer formatting.
*   **Context Compression via Headroom-AI (Issue [#39691](https://github.com/NousResearch/hermes-agent/issues/39691)):** 8 comments, 10 👍. Interest in integrating specialized tools for better context window management compared to current LLM-based summarization.
*   **Telegram Rich Messages (Issue [#44428](https://github.com/NousResearch/hermes-agent/issues/44428)):** 7 comments, 5 👍. Request to support Telegram Bot API 10.1 features like LaTeX and rich drafts.

## 5. Bugs & Stability
A wave of P1/P2 bugs was reported and addressed today, particularly concerning the Desktop client and Gateway stability.

*   **Desktop Launch Crashes (Issues [#52735](https://github.com/NousResearch/hermes-agent/issues/52735), [#52764](https://github.com/NousResearch/hermes-agent/issues/52764), [#52753](https://github.com/NousResearch/hermes-agent/issues/52753)):**
    *   *Severity:* P2/P3
    *   *Issue:* Windows/Linux desktop apps crash on launch with `Cannot find module 'simple-git'` after updates.
    *   *Status:* Identified as a bundling issue where `simple-git` was added to `package.json` but not correctly included in the Electron `app.asar` build. Fixes are being coordinated in parallel PRs.
*   **Gateway Session History Loss (Issue [#52197](https://github.com/NousResearch/hermes-agent/issues/52197)):**
    *   *Severity:* P1
    *   *Issue:* Cross-process agent-cache invalidation stalls the event loop, blocking Discord heartbeats and causing session drops.
    *   *Status:* Closed/Fixed.
*   **Web/WeChat Session Leaks (Issue [#49106](https://github.com/NousResearch/hermes-agent/issues/49106)):**
    *   *Severity:* P1
    *   *Issue:* Conversation history leaks between active sessions.
    *   *Status:* Closed.
*   **Nix Build Failures (Issue [#43810](https://github.com/NousResearch/hermes-agent/issues/43810)):**
    *   *Severity:* P2
    *   *Issue:* Hard failure when `extraPythonPackages` overlap with the sealed venv.
    *   *Status:* Closed.

## 6. Feature Requests & Roadmap Signals
*   **Russian Localization (Issue [#52137](https://github.com/NousResearch/hermes-agent/issues/52137)):** New request for ru-RU UI support, joining French, Chinese, and Portuguese.
*   **System Tray Minimization (Issue [#52787](https://github.com/NousResearch/hermes-agent/issues/52787)):** Request for Windows/Linux apps to minimize to tray instead of closing, keeping the backend alive.
*   **Linux Desktop Entry (Issue [#52769](https://github.com/NousResearch/hermes-agent/issues/52769)):** Request for automatic creation of `.desktop` files and icons for Linux source builds.
*   **Bulk Session Archiving (Issue [#48843](https://github.com/NousResearch/hermes-agent/issues/48843)):** UX improvement needed for managing large numbers of sessions in the Desktop GUI.
*   **Dashboard Host Validation (Issue [#34390](https://github.com/NousResearch/hermes-agent/issues/34390)):** Feature to allow `--allowed-hosts` flag for reverse proxy configurations (Tailscale/nginx).

## 7. User Feedback Summary
*   **Pain Points:** The most immediate user frustration stems from the Desktop app crashing after updates due to missing dependencies (`simple-git`). This affects both Windows and Linux users.
*   **Security Concerns:** Users are highly sensitive to credential leakage in multi-profile setups. The recent fixes for OAuth rotation are critical feedback responses to these fears.
*   **Usability:** Users are requesting better integration with modern platform features (Slack Blocks, Telegram Rich Messages, Feishu Tables) and improved localizations.
*   **Satisfaction:** The rapid response to P1 security and stability bugs (closed within days of reporting) indicates a healthy and responsive maintenance cycle.

## 8. Backlog Watch
*   **Skills Index Staleness (Issue [#38240](https://github.com/NousResearch/hermes-agent/issues/38240)):** Open since June 3rd. The automated freshness probe for the Skills Hub is failing. Requires maintainer attention to the CI/CD cron jobs or index rebuilding logic.
*   **Curator Archiving Bug (Issue [#29912](https://github.com/NousResearch/hermes-agent/issues/29912)):** High severity (P1). The curator is archiving active skills during consolidation without verified evidence, causing operational disruptions. This is a significant risk to platform stability.
*   **Telegram Typing Indicator Race Condition (Issue [#28004](https://github.com/NousResearch/hermes-agent/issues/28004)):** Open since May 18th. The typing indicator gets stuck indefinitely due to a cleanup race condition.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-06-26

### 1. Today's Overview
PicoClaw demonstrates robust development momentum on June 26, 2026, with significant activity across both issues and pull requests. The repository saw 19 PR updates and 3 issue updates in the last 24 hours, indicating a high velocity of code integration and community engagement. While no new releases were published, the focus remains heavily on stability improvements, dependency updates via Dependabot, and critical bug fixes related to token consumption and message duplication. The project health appears strong, with maintainers actively addressing technical debt and security concerns.

### 2. Releases
No new releases were published during this period.

### 3. Project Progress
Several key areas saw advancement through merged or closed Pull Requests:
*   **Evolution Module Optimization:** PR #3169 closed, introducing logic to skip the "cold path" for heartbeat turns in Evolution mode, preventing unnecessary token consumption during periodic checks.
*   **Build Stability:** PR #3166 addressed a build failure in `pkg/providers/openai_compat` by replacing stray `log.Printf` calls with the structured logger.
*   **Error Handling Robustness:** PR #3168 improved error reporting for OpenAI-compatible model lists, ensuring that body read failures are correctly surfaced rather than masked by empty HTTP errors.
*   **Dependency Updates:** Multiple dependencies were bumped via Dependabot, including `github.com/github/copilot-sdk/go` (up to 1.0.4 in #3177), `telego` (v1.10.0 in #3176), and `modernc.org/sqlite` (v1.53.0 in #3173), ensuring the project stays current with upstream security and feature patches.

### 4. Community Hot Topics
*   **Security & Maintenance Concerns:** Issue #3088 is gaining traction (2 👍, 3 comments) with a high-priority request to replace the unmaintained and insecure `libolm` with `vodozemac`. This reflects a community need for long-term security sustainability in encryption libraries.
    *   [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)
*   **Token Efficiency:** Issue #3012 highlights a critical bug where enabling "Evolution" causes continuous token consumption every minute. This suggests users are sensitive to operational costs and efficiency, especially when running agents locally or on budget models.
    *   [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)
*   **Channel Reliability:** Issue #1757 reports channel errors when scheduling hourly tasks on Raspberry Pi environments, pointing to potential stability issues in the cron/channel integration layer for low-power devices.
    *   [Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)

### 5. Bugs & Stability
The following bugs and stability issues were reported or addressed recently:
*   **High Severity:** Issue #3012 describes a resource leak/inefficiency bug causing continuous token drain when Evolution is enabled. While a fix PR (#3169) was merged for heartbeat handling, the broader issue of token consumption in Evolution mode may still require attention.
*   **Medium Severity:** Issue #1757 reports channel errors during scheduled tasks. This impacts user reliability but is marked as closed.
*   **Code Quality/Stability Fixes:**
    *   PR #3142 addresses a bug causing duplicate messages due to improper `ForUser` field clearing in sub-turns.
    *   PR #3115 fixes session history corruption where inline data URLs were mistakenly treated as media attachments.
    *   PR #3170 and #3171 fix potential panics and resource leaks in base64 encoding and LINE channel type assertions.
    *   PR #3045 fixed identity parsing for Matrix user IDs containing colons.

### 6. Feature Requests & Roadmap Signals
*   **Deltachat Gateway:** PR #3063 proposes adding a Deltachat gateway, expanding PicoClaw’s channel support beyond the current ecosystem (Telegram, LINE, Web, etc.). This indicates a demand for privacy-focused or alternative messaging protocol integration.
    *   [PR #3063](https://github.com/sipeed/picoclaw/pull/3063)
*   **Remote Agent Mode:** PR #3118 introduces a remote WebSocket mode for the `picoclaw agent` command, allowing headless or remote execution. This signals a roadmap shift towards more flexible deployment architectures.
    *   [PR #3118](https://github.com/sipeed/picoclaw/pull/3118)
*   **Encryption Library Modernization:** The push in Issue #3088 to switch from `libolm` to `vodozemac` suggests a roadmap commitment to maintaining secure, well-supported cryptographic foundations.

### 7. User Feedback Summary
Users are primarily focused on **cost efficiency** and **reliability**. The complaint in Issue #3012 regarding continuous token usage highlights that users are monitoring their LLM API costs closely. Similarly, the bug report in Issue #1757 regarding channel errors on Raspberry Pi indicates that users are deploying PicoClaw in constrained, always-on environments where stability is paramount. The positive reception to the Deltachat gateway (PR #3063) suggests a niche but active interest in decentralized communication protocols.

### 8. Backlog Watch
*   **Issue #3088 [Feature] use vodozemac instead of libolm:** This is a critical infrastructure change for security and maintenance. It requires significant effort to replace `libolm` and ensure compatibility with all existing channels. Maintainers should prioritize this to prevent future security vulnerabilities.
    *   [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)
*   **Open PRs requiring review:** Several PRs from `chengzhichao-xydt` and `dependabot` are open and stable, but new feature integrations like PR #3063 (Deltachat) and PR #3118 (Remote WebSocket) need thorough testing before merging into a release candidate.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-26
**Source:** github.com/qwibitai/nanoclaw

## 1. Today's Overview
NanoClaw demonstrates high development velocity with 16 pull requests updated in the last 24 hours, including 11 merged or closed items. The project is actively addressing core stability issues, particularly around database migrations, security confinement, and resource management. While no new releases were published today, the recent merge of significant feature and fix PRs suggests a stable codebase preparing for an upcoming release. Community engagement remains focused on improving administrative workflows and platform-specific compatibility (macOS/Linux).

## 2. Releases
*   **Status:** No new releases published in the last 24 hours.
*   **Note:** Several critical fixes and features merged today (#2817, #2815, #2813, #2854, #2856, #2830, #2855) will likely be included in the next scheduled release.

## 3. Project Progress
Significant technical advancements and bug fixes were merged or closed today, enhancing security, reliability, and usability:

*   **Security & Confinement:**
    *   **#2817 (Closed):** Fixed a critical security vulnerability by confining `send_file` reads to the workspace directory, preventing path traversal via symlinks.
    *   **#2860 (Open):** Proposed silencing `libsignal` debug spam to protect sensitive key material in logs.
*   **Database & Migration Fixes:**
    *   **#2859 (Open):** Addresses a crash in the v2 database migration where older v1 installations lacked the `is_main` column.
    *   **#2830 (Closed):** Resolved an issue where deleted installations left behind dead peer service registrations, cluttering system launchers.
*   **Resource Management:**
    *   **#2856 (Closed):** Introduced optional per-container CPU and memory limits (`CONTAINER_CPU_LIMIT`, `CONTAINER_MEMORY_LIMIT`) to prevent resource monopolization.
*   **Platform Compatibility:**
    *   **#2854 (Closed):** Fixed macOS API connection failures caused by self-signed certificate detection in OneCLI SDK by correctly mounting gateway CAs.
    *   **#2858 (Open):** Follow-up fixes for the CLI dash skill, requiring Node >=22.5 due to static imports.
*   **Authentication:**
    *   **#2855 (Closed):** Implemented a robust authentication posture where Claude subscription (OAuth) is primary, with API keys as a hot standby failover.

## 4. Community Hot Topics
The following issues and PRs reflect current community priorities:

*   **Multi-Admin Approval Workflow:**
    *   **Issue #2857:** Users are requesting support for multiple administrators to handle approval requests. Currently, if the designated admin is unavailable, the process halts.
    *   **Underlying Need:** Enterprises and teams require resilient operational workflows where task delegation and fallback mechanisms are native to the approval system.
*   **Slack Per-Thread Sessions:**
    *   **PR #2472 (Closed) & #2471 (Closed):** Recent merges improved Slack integration by ensuring top-level DMs create separate sessions rather than collapsing into one.
    *   **Underlying Need:** Users need granular context separation in chat platforms to avoid conversation mixing and ensure accurate agent memory.
*   **Security Hardening:**
    *   **PR #2817 (Closed):** The immediate closure and merging of the workspace confinement fix indicate strong community and maintainer focus on security best practices.

## 5. Bugs & Stability
Ranked by severity, the following stability issues were addressed or reported:

1.  **High Severity:**
    *   **#2817 (Fixed):** Path traversal vulnerability in file sending. *Status: Merged.*
    *   **#2859 (Open):** Database migration crash on upgrade from v1.1.0. *Impact: Prevents v2 adoption for some users.*
2.  **Medium Severity:**
    *   **#2854 (Fixed):** macOS API connection failure due to SSL certificate handling. *Status: Merged.*
    *   **#2813 (Fixed):** Socket response cap calculation error with multi-byte UTF-8 characters. *Status: Merged.*
    *   **#2815 (Fixed):** Router crash on primitive JSON content. *Status: Merged.*
3.  **Low Severity:**
    *   **#2830 (Fixed):** Accumulation of dead launchd/systemd entries. *Status: Merged.*
    *   **#2860 (Open):** Log spam containing potential key material. *Status: Open PR.*

## 6. Feature Requests & Roadmap Signals
*   **CLI-Derived Dashboards:**
    *   **PR #2795 (Open):** Introduces a `/add-clidash` skill to create read-only dashboards from CLI output. This signals a push towards better observability and monitoring capabilities within the agent ecosystem.
*   **Skill Distillation:**
    *   **PR #2843 (Closed):** Added `/learn` skill to distill reusable skills from directories or URLs. This enhances the platform's ability to onboard new capabilities dynamically.
*   **Approval Flexibility:**
    *   **Issue #2857:** Request for multi-admin approvals and CLI-based approvals. This suggests future roadmap items may include more flexible governance controls.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Upgrade Friction:** Users upgrading from older v1 versions are hitting migration errors (#2859), indicating a need for better backward compatibility handling.
    *   **macOS Setup Complexity:** SSL/TLS configuration issues on macOS with Rancher Desktop were blocking API calls (#2854).
    *   **Approval Bottlenecks:** Single-admin approval models are insufficient for team environments (#2857).
*   **Satisfaction:**
    *   Users appreciate the rapid response to security vulnerabilities (#2817) and the introduction of resource controls (#2856), which address scalability concerns.

## 8. Backlog Watch
*   **Issue #2857:** Needs maintainer attention to design a workflow for multi-admin approvals and CLI integration. This is a high-value feature for enterprise users.
*   **PR #2859:** Critical fix for v1-to-v2 migration. Requires prompt merging to unblock users on legacy versions.
*   **PR #2860:** Security-related log cleanup. Should be reviewed quickly to prevent accidental exposure of key material in logs.
*   **PR #2824:** Stale "Global Memory" instruction removal. While low risk, cleaning up seed prompts improves agent performance and consistency.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-06-26
**Source:** GitHub Data Analysis

## 1. Today's Overview
IronClaw is experiencing high-velocity development focused on stabilizing the "Reborn" architecture and enhancing enterprise-grade capability policies. Activity is robust with 50 issues and 50 pull requests updated in the last 24 hours, indicating strong contributor engagement. Key efforts are concentrated on fixing critical WebUI v2 UX glitches, refactoring database concurrency patterns via CAS (Compare-And-Swap) improvements, and implementing granular multi-user permission controls. While no new official releases were published today, the volume of merged fixes suggests imminent stability improvements for the Reborn stack.

## 2. Releases
**Status:** No new releases published today.
*   **Note:** The project is currently in a heavy integration phase for the "Reborn" stack; recent PRs (#5205, #5280) represent significant architectural shifts that will likely be included in the next major version bump once stabilization is complete.

## 3. Project Progress
**Merged/Closed Items:**
*   **CI Stability:** PR #5281 (BenKurrek) addressed flaky tests in the CI pipeline, specifically unblocking the main branch and resolving issues related to libsql features and apt retries.
*   **WebUI Usability Fixes:**
    *   PR #5278 (thisisjoshford) fixed a scrolling issue on the Logs page where content was truncated due to flex-box layout constraints.
    *   PR #5275 (henrypark133) resolved a routing bug where the "Logs" link in the chat composer duplicated the `/v2` base path, causing 404 errors.
    *   PR #4997 (zetyquickly) was closed after successfully implementing a seam to extract text from binary documents (PDF, PPTX, etc.) in Google Drive integrations.
*   **Concurrency Refactoring:** PR #5255 (henrypark133) optimized Postgres CAS operations, reducing database round-trips from 3 to 1 during directory pre-checks.

## 4. Community Hot Topics
**Most Active/Discussed Issues:**
*   **[OPEN] #5276: Scheduled automation fails with "No thread attached"**
    *   *Link:* [Issue #5276](https://github.com/nearai/ironclaw/issues/5276)
    *   *Analysis:* Critical failure in the automation engine where scheduled tasks (like the Daily PR Digest) run but fail to link to a conversation thread, resulting in 0% success rates. This impacts reliability for users relying on automated monitoring.
*   **[OPEN] #5192: Denying tool approval leads to duplicate requests**
    *   *Link:* [Issue #5192](https://github.com/nearai/ironclaw/issues/5192)
    *   *Analysis:* A UX/state management bug where denying a tool permission does not properly halt the flow, leading to confusing repetitive prompts.
*   **[OPEN] #5242: Tools page shows operator-only errors for WebUI users**
    *   *Link:* [Issue #5242](https://github.com/nearai/ironclaw/issues/5242)
    *   *Analysis:* Regular users encounter permission errors when accessing the Settings > Tools page, suggesting a gap in role-based access control (RBAC) implementation in the Reborn WebUI.

## 5. Bugs & Stability
**High Severity:**
*   **#5276: Automation Thread Linking Failure** – Scheduled automations execute but crash because they cannot attach to a conversation thread. *Status: Open.*
*   **#5196: "Ask each time" Tool Permission Auth Error** – Users clicking "Approve" on tool permissions receive an authorization error and are prompted again, creating an infinite loop. *Status: Open.*

**Medium Severity:**
*   **#5282: "Logs" Entry Appears in Composer** – Visual glitch where the "Logs" link appears inside the message input area while the agent is generating a response. *Status: Open.*
*   **#5210: Message State Loss During Approval Gates** – Sending new messages while an approval gate is open causes warnings and lost message state. *Status: Closed (via PR #5279 or related fixes? Note: PR #5279 addresses queued message steering).*
*   **#5208: Frozen Message Input** – The input box becomes unresponsive while the agent is generating a long response. *Status: Closed.*

**Low Severity/UI Glitches:**
*   **#5191: Internal Skill Messages Exposed** – Debug/orchestration messages are leaking into the user-facing chat UI. *Status: Open.*
*   **#5211: Auto-scroll Failure** – New responses do not automatically scroll into view. *Status: Closed.*

## 6. Feature Requests & Roadmap Signals
*   **Granular Capability Policies (Epic #5261):** Multiple issues (#5261, #5266, #5267, #5268, #5272, #5273) indicate a major push toward enterprise-ready multi-user permissions. Features include:
    *   DB-backed user roles (Owner/Admin/Member).
    *   Admin REST surfaces for granting tool access.
    *   Per-user availability resolvers for capabilities.
    *   *Prediction:* These will form the core of the next major security/update release for team deployments.
*   **Memory System Expansion (Issue #5260, PR #5205):** Significant investment in "Personal Memory" and "Self-Learning." PR #5205 models memory as a userland extension with native SQL storage, semantic search, and host-managed flows. This signals a shift toward persistent, context-aware agents rather than ephemeral sessions.
*   **Trace Commons Integration (PR #5280):** Introduction of instance-wide enrollment and per-user contributor accounts for tracing, enhancing observability and debugging for complex agent runs.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the unreliability of scheduled automations (#5276) and confusing permission dialogs (#5196, #5192). The "Reborn" WebUI, while feature-rich, suffers from navigation bugs (doubled paths #5275) and visual clutter (internal logs in chat #5191).
*   **Positive Signals:** The community appreciates the rapid iteration on performance (CAS optimizations #5255, #5234) and the expansion of document handling capabilities (binary extraction #4997). The focus on "dogfooding" (Issue #5119) suggests developers are actively using the product to identify these friction points.
*   **Use Cases:** Heavy usage in automated repository monitoring (Daily PR Digests) and complex tool-use scenarios requiring strict approval gates.

## 8. Backlog Watch
*   **#5219: Harden Activity Identity Invariants** – A technical follow-up to gate lifecycle refactors. Requires careful attention to ensure no silent splitting of activity identities occurs during batching.
*   **#5253: Heartbeat Lease Write-Behind** – Performance optimization to move runner-lease renewals off the synchronous Postgres path. This is critical for scaling under high concurrency.
*   **#5221: Harness Backlog (deepseek-v4-flash)** – Ongoing benchmarking and regression tracking for specific model configurations.
*   **#5264: Memory Follow-ups** – Several sub-tasks remain open regarding native SQL storage backing and semantic search implementation for the memory system.

***
*Generated by Agnes-2.0-Flash based on IronClaw GitHub data.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-26
**Source:** LobsterAI (netease-youdao/LobsterAI)

### 1. Today's Overview
LobsterAI exhibited high development velocity today, with 9 Pull Requests merged or closed within the last 24 hours, indicating a strong push for stability and feature refinement ahead of potential upcoming releases. While no new official versions were published, the integration work surrounding "OpenClaw" plugins and "Cowork" session management suggests significant backend improvements. The community remains engaged but quiet, with only one open issue reported recently, focusing on a specific UI interaction bug with scheduled tasks. Overall, the project health is robust, characterized by rapid iteration on core agent orchestration logic.

### 2. Releases
*   **No new releases.**
    *   Although there are no tagged releases today, the merged PRs (#2203, #2201, #2198) represent substantial updates to the OpenClaw plugin system and session handling that may warrant a patch release soon.

### 3. Project Progress
The majority of today's activity focused on stabilizing the **OpenClaw** extension system and refining the **Cowork** (collaborative agent) experience. Key advancements include:
*   **OpenClaw Plugin Management:** Significant fixes were applied to ensure local extension entries load correctly (#2203), browser plugins remain allowlisted under restrictive configurations (#2202), and QQ/Discord plugins are properly pre-installed via the gateway config (#2198).
*   **Session & Sync Logic:** Developers addressed race conditions and data duplication issues in agent sessions. This includes deduplicating final assistant syncs (#2201) and ensuring subagent polling continues correctly after parent completion (#2199).
*   **UI/UX Refinements:** The renderer team improved the "Plan Mode" experience by fixing icon styling (#2205), correcting how block-level plan tags are parsed to prevent leakage into chat messages (#2204), and handling stream jitter to avoid duplicate plan messages (#2200).
*   **System Settings:** A fix was implemented to synchronize the "launch at login" state with the operating system, particularly handling Windows legacy argument variants (#2206).

### 4. Community Hot Topics
*   **Scheduled Task UI Bug (Issue #1392)**
    *   **Link:** [netease-youdao/LobsterAI Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392)
    *   **Analysis:** This is the sole open issue, marked as stale but still active. Users report that clicking the toggle switch for scheduled tasks often fails to register, specifically affecting "most tasks" rather than all. This highlights a critical usability friction point in the automation features. The lack of recent developer engagement suggests this may be a low-priority edge case or a complex frontend state synchronization bug.

### 5. Bugs & Stability
Several bugs were identified and resolved today through the merged PRs:
1.  **High Severity (Stability/Data Integrity):**
    *   *Duplicate Assistant Replies:* Fixed in #2201 and #2200. Previously, stream jitter and sync errors caused duplicate visible replies or plan messages in the chat interface.
    *   *Subagent Orphaning:* Fixed in #2199. Subagents were not being polled correctly after the parent session completed, leading to potential hanging states or missed terminal updates.
2.  **Medium Severity (Configuration/Plugin Load):**
    *   *Plugin Allowlist Failure:* Fixed in #2202 and #2198. Browser plugins and IM plugins (QQ/Discord) were failing to load or were incorrectly blocked by restrictive allowlists.
    *   *Extension Precompilation:* Fixed in #2203. Local extensions failed to load because TypeScript entries weren't declared for precompilation.
3.  **Low Severity (UI/Settings):**
    *   *Login State Sync:* Fixed in #2206. The app's auto-launch setting was not correctly syncing with the OS, particularly on Windows.
    *   *Icon Rendering:* Fixed in #2205. Plan mode icons were not adhering to the theme-aware SVG component standards.

### 6. Feature Requests & Roadmap Signals
*   **Multi-Channel Integration:** The merging of PR #2198 (preinstalling QQ and Discord plugins) signals a strategic push to expand LobsterAI’s reach into popular Chinese messaging platforms via the OpenClaw framework.
*   **Enhanced Agent Collaboration:** The focus on "Cowork" session management (PRs #2204, #2200, #2199) indicates ongoing efforts to make multi-agent workflows more reliable and visually coherent for users.
*   **Robustness of Automation:** The bug report in Issue #1392 regarding scheduled tasks suggests that users expect high reliability from automation features, implying future roadmap items may prioritize the stability of the task scheduler UI.

### 7. User Feedback Summary
*   **Pain Points:** The primary user complaint today is related to the reliability of the scheduled task toggle switch (Issue #1392). Users find it frustrating that the UI does not respond consistently, undermining trust in the automation capabilities.
*   **Satisfaction:** While direct feedback is limited to one issue, the rapid resolution of complex backend bugs (duplicates, plugin loads) suggests the development team is responsive to technical debt, which likely improves long-term user satisfaction for power users relying on stable agent execution.

### 8. Backlog Watch
*   **Issue #1392:** [Scheduled Task Toggle Unresponsive](https://github.com/netease-youdao/LobsterAI/issues/1392)
    *   *Status:* Open, Stale.
    *   *Action Needed:* Maintainers should investigate the frontend event binding for the task switches. Since it affects "most" tasks but not all, it may be related to dynamic component rendering or state management conflicts introduced by recent "Cowork" or "Renderer" updates.

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
**Date:** 2026-06-26
**Source:** GitHub `agentscope-ai/CoPaw`

## 1. Today's Overview
The CoPaw project demonstrates high development velocity with 77 total updates in the last 24 hours (50 PRs, 27 Issues). Activity is dominated by critical stability fixes related to the recently merged AgentScope 2.0 migration, particularly concerning browser automation resource leaks and UI rendering inconsistencies. While no new official releases were published today, the volume of merged and open PRs indicates an intense period of regression patching and feature stabilization ahead of the next release. Community engagement remains strong, with users actively reporting edge-case bugs in custom provider integrations and Linux environment compatibility.

## 2. Releases
*   **New Releases:** None.
*   **Status:** The project is currently in a post-migration stabilization phase following the AgentScope 1.0 to 2.0 transition. No version bumps were recorded on 2026-06-26.

## 3. Project Progress
**Merged/Closed Items:**
*   **[PR #5471] feat: generalize match pattern** – Advanced core matching logic flexibility.
*   **[PR #5443] fix(tui): restore ACP commands and inline approvals** – Critical restoration of Terminal User Interface (TUI) functionality after the AgentScope 2.0 migration, ensuring `/clear`, `/compact`, and approval workflows function correctly.
*   **[Issue #5345] Closed:** Fixed custom OpenAI-compatible provider function calling support (resolved via upstream/provider updates).
*   **[Issue #2733] Closed:** Addressed Chrome process cleanup issues (partially resolved, see Bugs section for ongoing related issues).

**Active Development:**
*   **[PR #5542] test(e2e): adapt for agentscope 2.0** – Significant effort dedicated to fixing 6 P0 failures in the end-to-end test suite resulting from the AgentScope 2.0 upgrade.
*   **[PR #5538] fix(chat): preserve assistant markdown newlines** – Resolving UI layout shifts in the console chat view.
*   **[PR #5537] fix(models): count only configured providers online** – Correcting statistics display in the model configuration interface.

## 4. Community Hot Topics
**Most Active/Discussed Issues:**
1.  **[Issue #5345] Custom OpenAI-compatible providers don't support function calling** (8 comments)
    *   *Analysis:* High demand for robust third-party LLM provider integration. Users are pushing boundaries beyond official Qwen/Ollama support, requiring reliable tool-use compatibility via OpenAI-compatible endpoints.
2.  **[Issue #5379] Internal Server Error on startup via Python install** (6 comments)
    *   *Analysis:* Installation and environment configuration remain friction points. The `get_remote_addr` error suggests network stack or proxy detection issues in specific Windows environments.
3.  **[Issue #5162] Dialogue thinking logic enters infinite loop** (5 comments)
    *   *Analysis:* Core agent reliability concern. Users are experiencing control flow failures in complex multi-turn reasoning scenarios.

## 5. Bugs & Stability
**High Severity:**
1.  **[Issue #5520] Browser tool memory leak (Chrome renderer processes)**
    *   *Description:* `browser_use stop()` fails to kill child Chrome processes, leading to RAM exhaustion.
    *   *Fix Status:* **PR #5536** submitted by `C1-BA-B1-F3` to kill orphaned processes.
2.  **[Issue #5479] Frontend crash on large session files (>500KB)**
    *   *Description:* Opening sessions with heavy history causes React/frontend rendering errors ("Unexpected error").
    *   *Impact:* Data loss risk; users must delete sessions to recover.
3.  **[Issue #5505] MiniMax-M3 image rejection caching error**
    *   *Description:* A single content moderation rejection is cached as a permanent model trait (`rejects_media=True`), blocking all future vision tasks.
    *   *Fix Status:* **PR #5535** submitted to ensure moderation errors are not cached globally.

**Medium Severity:**
*   **[Issue #5480] Console long message layout corruption** – CSS recalculations fail on long inputs. *Fix:* **PR #5538**.
*   **[Issue #5528] Browser tool fails on Linux with IME-wrapped browsers** – Path parsing error in `_get_linux_default_browser`. *Fix:* **PR #5526**.
*   **[Issue #5543] Function declaration `type: null` breaks third-party proxies** – Schema incompatibility with Gemini/proxies. *Fix:* **PR #5545**.

## 6. Feature Requests & Roadmap Signals
1.  **[Issue #5484] Support installing plugins via pip from PyPI**
    *   *Signal:* Users want standard Python packaging workflows for plugins rather than manual ZIP uploads. This aligns with broader ecosystem standardization.
2.  **[Issue #5527] Dynamic model switching for AgentScope 2.0**
    *   *Signal:* Demand for high-availability features. Users want automatic failover between primary and backup models during rate limits or outages.
3.  **[PR #5321] Scroll context manager (Durable History)**
    *   *Signal:* Interest in retrieval-augmented context management over simple compression. Allows models to "recall" old turns via REPL rather than summarizing them away.
4.  **[PR #5210] CLI `cron update` command**
    *   *Signal:* Improving usability of scheduled tasks (cron jobs) by allowing edits without delete/recreate cycles.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Resource Management:** Recurring complaints about Chrome/browser process leaks (Issues #2733, #5520) indicate a need for stricter lifecycle management in automation tools.
    *   **Installation Fragility:** Startup errors on Windows/Linux due to path handling and network address detection suggest the installer/environment setup needs more robust error handling.
    *   **UI Responsiveness:** Large conversations crashing the web frontend highlights a need for virtualization or lazy loading of chat history.
*   **Positive Signals:**
    *   Rapid community response to AgentScope 2.0 migration bugs, with many first-time contributors submitting fixes for regressions.
    *   Active discussion around extending capabilities to custom providers (OMLX, MiniMax, DingTalk private endpoints).

## 8. Backlog Watch
*   **[Issue #5342] Hard cap on tool result size**
    *   *Status:* Open. Critical for preventing context explosion when LLMs return massive outputs. Requires implementation in the `post_acting` hook.
*   **[Issue #5523] `spawn_subagent` missing from Runtime 2.0 tool registry**
    *   *Status:* Open. Regression from AgentScope 2.0 migration. Blocks multi-agent orchestration features.
*   **[Issue #5512] Model provider statistics discrepancy**
    *   *Status:* Open. Minor UX bug where configured/online counts are inflated due to grouping logic. *Note: PR #5537 addresses this.*
*   **[Issue #4188] Documentation performance issues**
    *   *Status:* Closed but indicates ongoing need for documentation site optimization.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-06-26
**Source:** github.com/zeroclaw-labs/zeroclaw

## 1. Today's Overview
ZeroClaw is in a highly active maintenance and stabilization phase leading up to the v0.8.2 release, characterized by intense community engagement with 47 issues and 50 pull requests updated in the last 24 hours. The project is shifting its architectural focus heavily toward WebAssembly (Wasm) plugin security, supply chain integrity, and governance improvements, as evidenced by multiple accepted RFCs. While no new official release binaries were published today, significant code merges and configuration fixes indicate rapid iteration on the `master` branch. Community sentiment is driven by a desire for robust security isolation, streamlined multi-agent delegation, and improved observability.

## 2. Releases
*   **No New Official Release:** There are no new tagged releases (e.g., v0.8.2-final) published today.
*   **Release Prep Activity:** PR #8234 indicates the team is preparing for the v0.8.2 release by bumping version pins across Cargo.toml, Tauri configs, and documentation. This suggests v0.8.2 is imminent but not yet cut.

## 3. Project Progress
**Key Merged/Closed Items & Advances:**
*   **Security & Delegation Fixes:**
    *   **PR #8218:** Fixed a critical underflow panic in agent history trimming when tool results were saturated (`fix(agent/history): saturate tool-result trim accounting`).
    *   **PR #8213:** Resolved a loop detection logic error where failed tool results were incorrectly counted as "no progress" (`fix(agent/loop-detector): do not count failed tool results as "no progress"`).
*   **Configuration & Usability:**
    *   **PR #8326:** Fixed a Windows-specific bug where UTF-8 BOM characters in `config.toml` caused ACP bridge parsing failures.
    *   **PR #8276:** Corrected the Scoop package manifest to include `zerocode.exe`.
    *   **PR #8335:** Advanced skill management to be bundle-aware, fixing issues where `skills install` targeted directories not loaded by multi-agent runtimes.
*   **Observability & Logging:**
    *   **PR #8307:** Added a new `rotating` log persistence mode for better archive control.
    *   **PR #8146:** Fixed telemetry loss in CLI one-shot modes by ensuring OTLP exporters flush before exit.

## 4. Community Hot Topics
**Most Active Discussions (by Comment Count):**
1.  **[RFC] Work Lanes & Board Automation (Issue #6808)** - *11 Comments*
    *   **Link:** [zeroclaw-labs/zeroclaw Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
    *   **Analysis:** High engagement on governance workflow. Users want automated label routing to reduce maintainer overhead.
2.  **[RFC] Supply Chain Signing & SLSA Provenance (Issue #8177)** - *8 Comments*
    *   **Link:** [zeroclaw-labs/zeroclaw Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)
    *   **Analysis:** Strong interest in hardware-backed PGP keys and hermetic builds. Reflects enterprise-grade security concerns regarding container images and binaries.
3.  **[RFC] Lighter Core via External Integrations (Issue #6165)** - *5 Comments*
    *   **Link:** [zeroclaw-labs/zeroclaw Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)
    *   **Analysis:** Debate on removing ad-hoc integration code in favor of skills/MCP tools. Indicates a push for a modular, minimal core architecture.
4.  **[Feature] Independent Delegate Mode (Issue #8238)** - *4 Comments*
    *   **Link:** [zeroclaw-labs/zeroclaw Issue #8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)
    *   **Analysis:** Users requesting explicit policy separation for specialist agents during handoffs, crucial for complex multi-agent workflows.
5.  **[Bug] MCP Stdio Child Process Leak (Issue #5903)** - *4 Comments*
    *   **Link:** [zeroclaw-labs/zeroclaw Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)
    *   **Analysis:** Critical stability issue where daemon heartbeat causes orphaned processes. High priority due to resource exhaustion risks.

## 5. Bugs & Stability
**High-Severity & Critical Issues Reported/Fixed:**
1.  **Delegate Tool Allowlist Bypass (Issue #8279) - [FIXED]**
    *   **Status:** Closed.
    *   **Description:** Sub-agents could invoke tools excluded by the parent policy.
    *   **Impact:** Security risk allowing unauthorized tool access.
    *   **Link:** [zeroclaw-labs/zeroclaw Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)
2.  **Kimi Code Endpoint Regression (Issue #8154) - [FIXED]**
    *   **Status:** Closed.
    *   **Description:** Moonshot/Kimi provider targeting dead API endpoint (`/coder/v1` vs `/coding/v1`).
    *   **Impact:** Workflow blocked for users relying on Kimi models.
    *   **Link:** [zeroclaw-labs/zeroclaw Issue #8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154)
3.  **MCP Stdio Orphan Processes (Issue #5903)**
    *   **Status:** Open.
    *   **Description:** `heartbeat.enabled=true` causes one stdio child leak per tick.
    *   **Impact:** Potential resource exhaustion in long-running daemons.
    *   **Link:** [zeroclaw-labs/zeroclaw Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)
4.  **Telegram Image Duplication (Issue #5514)**
    *   **Status:** Open.
    *   **Description:** Multiple images in a Telegram request trigger separate agent outputs instead of one consolidated response.
    *   **Impact:** Poor UX and increased token usage.
    *   **Link:** [zeroclaw-labs/zeroclaw Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)
5.  **Native Tool Call Image Marker Inflation (Issue #8327)**
    *   **Status:** Open.
    *   **Description:** `[IMAGE:data:...]` markers sent as plain text inflate token counts and confuse providers like llama.cpp.
    *   **Impact:** Cost inefficiency and potential parsing errors.
    *   **Link:** [zeroclaw-labs/zeroclaw Issue #8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327)
    *   **Note:** PR #8339 addresses this by promoting markers to structured `image_url`.

## 6. Feature Requests & Roadmap Signals
**Upcoming Features Likely in v0.8.x/v0.9.0:**
1.  **In-App Upgrades with Supervised Restart (Issue #8170 / PR #8173)**
    *   **Signal:** Implemented in PR #8173. Allows users to update ZeroClaw directly from the web dashboard with auto-restart.
    *   **Link:** [Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)
2.  **Goal Mode for Autonomous Sessions (Issue #8303)**
    *   **Signal:** RFC accepted. Defines a durable mode for agents to pursue objectives until completion or cancellation, distinct from interactive turns.
    *   **Link:** [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)
3.  **WASM-First Plugin Runtime (Issue #8135)**
    *   **Signal:** RFC proposing Wasm as the default plugin runtime with capability enforcement and signed distribution.
    *   **Link:** [Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)
4.  **LAN Peer Discovery (PR #8325)**
    *   **Signal:** Added opt-in mDNS support for gateway nodes to discover peers on local networks.
    *   **Link:** [PR #8325](https://github.com/zeroclaw-labs/zeroclaw/pull/8325)
5.  **Session TTL Cleanup (PR #8139)**
    *   **Signal:** Implemented automatic truncation of inactive channel sessions to prevent unbounded history growth.
    *   **Link:** [PR #8139](https://github.com/zeroclaw-labs/zeroclaw/pull/8139)

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Resource Leaks:** Users are frustrated by process leaks (MCP stdio) and memory/token inflation (image markers), impacting stability and cost.
    *   **Configuration Fragility:** Issues with Windows BOM handling and dead API endpoints suggest a need for more robust config validation and provider health checks.
    *   **Multi-Agent Complexity:** Delegation policy bypasses and lack of independent specialist modes highlight difficulties in managing complex agent hierarchies securely.
*   **Positive Sentiment:**
    *   Appreciation for the move towards WASM security and supply chain signing (SLSA).
    *   Positive reception of in-dashboard upgrades and session TTL management, which improve operational ease.
    *   Active participation in RFCs indicates a engaged community that values transparency in governance.

## 8. Backlog Watch
**Items Requiring Maintainer Attention:**
1.  **SkillForge Orphan Status (Issue #8309)**
    *   **Status:** Blocked/Needs Decision.
    *   **Detail:** The auto-skill discovery engine from #144 is wired to nothing. Maintainers must decide whether to integrate it safely or remove it.
    *   **Link:** [Issue #8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309)
2.  **React-to-Wasm UI Rewrite (Issue #8132)**
    *   **Status:** Needs Author Action/Maintainer Review.
    *   **Detail:** Proposal to replace React/Vite with Dioxus/Leptos/Yew to eliminate Node.js dependencies. Requires significant architectural decision.
    *   **Link:** [Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)
3.  **OCI-Compliant WASM Plugin Storage (Issue #7497)**
    *   **Status:** Open.
    *   **Detail:** RFC to use OCI registries for plugin distribution. Critical for the WASM-first strategy but requires detailed specification.
    *   **Link:** [Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)
4.  **v0.9.0 Security & Auth Tracker (Issue #7432)**
    *   **Status:** Open.
    *   **Detail:** Umbrella issue for breaking changes in auth, security hardening, and gateway boundaries. Needs prioritization against v0.8.2 scope.
    *   **Link:** [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*