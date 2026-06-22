# OpenClaw Ecosystem Digest 2026-06-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-22 07:49 UTC

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
**Date:** 2026-06-22

## 1. Today's Overview
OpenClaw is experiencing extremely high activity, with 500 issues and 500 pull requests updated in the last 24 hours. The project is currently navigating a critical stability period following recent updates, with significant focus on resolving session state integrity, memory leaks, and delivery reliability. The community is highly engaged, with numerous P0 and P1 bugs affecting core agent loops and channel integrations. While feature development continues, the immediate priority for maintainers is stabilizing the platform against regressions introduced in recent beta/stable releases.

## 2. Releases
*   **Latest Release:** `v2026.6.10-beta.1`
    *   **Highlights:** Improved reliability for agent turns and session state. Key fixes include preserving pending subagent completion announcements, keeping chat history transcripts non-empty, maintaining media index alignment, restarting dormant follow-up drains, and resolving compaction model aliases consistently.
    *   **Note:** Several high-severity issues reported today (e.g., #95495, #90325) suggest that prior versions (2026.6.1, 2026.6.8, 2026.6.9) had significant regressions. Users are advised to check compatibility with this new beta release.

## 3. Project Progress
*   **Merged/Closed PRs:** 33 PRs were merged or closed in the last 24 hours.
*   **Key Advancements:**
    *   **Plugin Externalization:** PR #95683 externalizes a batch of official plugins (IRC, Mattermost, Signal, SMS, ClickClack, etc.) to resolve catalogs, reducing core bundle size.
    *   **Performance Fixes:** PR #94230 addresses a 6-7s latency issue caused by sequential MCP server connections in `bundle-tools`. PR #91906 optimizes subagent performance by skipping live stream parsing for non-visible outputs.
    *   **Gateway Stability:** PR #94915 improves readiness reporting during gateway draining. PR #95419 ensures isolated cron runs are not marked as error if delivery fails but execution succeeded.
    *   **Security/Robustness:** PR #95223 and PR #95416 bound error body reads to prevent Out-of-Memory (OOM) crashes in OpenAI and Inworld providers.

## 4. Community Hot Topics
*   **Memory Leaks & Stability:** Issue #91588 is the most commented (13 comments), reporting a critical memory leak in the gateway (RSS growing to 15.5GB). This indicates a systemic instability concern for long-running deployments.
*   **Storage Architecture:** Issue #90370 (11 comments) discusses replacing SQLite with PostgreSQL for internal storage, reflecting a need for better scalability and integration with existing enterprise infrastructure.
*   **Session State & Message Loss:** Multiple high-engagement issues focus on session state corruption:
    *   #92201 (11 comments): Anthropic thinking signature validation failures.
    *   #90354 (8 comments): Need for bounded append semantics in memory flush.
    *   #92043 (8 comments): Compaction timeout issues causing session wedges.
*   **Analysis:** The community is heavily focused on reliability. Users are frustrated by "silent" failures (lost messages, crashed sessions) rather than just feature gaps. There is a strong demand for robust state management and configurable storage backends.

## 5. Bugs & Stability
*   **Critical/High Severity Bugs:**
    *   **#91588 [P0] Gateway Memory Leak:** RSS grows from 350MB to 15.5GB, causing OOM kills. *(No linked fix PR yet)*.
    *   **#92201 [P1] Anthropic Thinking Signatures:** Intermittent invalid signatures on replay break embedded runners.
    *   **#86519 [P1] Telegram Duplicate Replies:** Regression causing agents to repeat identical replies 2-10 times.
    *   **#95495 [P1] Silent Memory Store Relocation:** Upgrade to 2026.6.9 silently moved the vector store, forcing full re-embedding without warning.
    *   **#90325 [P1] Matrix Channel Crash:** TypeError in v2026.6.1 breaks Matrix channel dispatch.
    *   **#95623 [P0] Tool ID Sanitizer Failure:** Cross-provider failover (OpenAI to Anthropic) causes session bricks due to ID mismatch.
    *   **#91804 [P1] Internal Reasoning Leakage:** Users report seeing internal "thinking" blocks in responses since v2026.6.5.
    *   **#91363 [P1] Isolated Cron Failures:** Cron jobs consistently fail with "LLM request failed" in isolated sessions.
*   **Fix Status:** Several bugs have linked PRs (e.g., #93826 for cron announce, #94412 for tool abort loops), but critical issues like #91588 (Memory Leak) and #95623 (Tool ID Sanitizer) remain open and urgent.

## 6. Feature Requests & Roadmap Signals
*   **#90370 [P3] PostgreSQL Support:** Request to replace SQLite with PostgreSQL for better concurrency and vector search capabilities. High likelihood of being considered for future enterprise-focused releases.
*   **#90916 [P2] Topic-Session Families:** Request for isolated context lanes within a single assistant. Aligns with the trend toward modular, multi-task agent personas.
*   **#54794 [P2] Telegram Inline Query:** Support for invoking bots from any chat. A standard feature for mature Telegram integrations.
*   **#8299 [P2] Suppress Sub-Agent Announce:** Configurable option to hide sub-agent summaries. Reflects a need for cleaner user interfaces in multi-agent workflows.
*   **#91455 [P3] Kubernetes Docs:** Request for improved K8s deployment documentation. Indicates growing adoption in cloud-native environments.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Fragility:** Users report frequent session wedges, message loss, and crashes after simple actions (e.g., model switches, cron jobs).
    *   **Poor Upgrade Experience:** Silent data store migrations (#95495) and lack of rollback warnings cause significant operational overhead.
    *   **Plugin/Channel Instability:** Integrations like Matrix, Telegram, and Slack are showing regression bugs (#90325, #86519, #92076).
    *   **Debugging Difficulty:** Hardcoded `/dev/null` for stderr (#90711) and generic error messages obscure root causes.
*   **Satisfaction:** Despite the bugs, the project remains active with many contributors fixing issues rapidly. The introduction of external plugins (#95683) and better config validation is positively received.

## 8. Backlog Watch
*   **#91588 [P0] Gateway Memory Leak:** Requires immediate maintainer attention as it threatens all long-running instances.
*   **#92201 [P1] Anthropic Signature Validation:** Critical for embedded runner reliability.
*   **#90370 [P3] PostgreSQL Support:** Needs product decision on architectural flexibility.
*   **#92516 [P1] Self-Hosted Channel Plugin Trust:** Containerized deployments struggle to trust external channel plugins.
*   **#91804 [P1] Reasoning Leakage:** Privacy/regression issue affecting user trust.
*   **#86214 [P1] Codex Client Closes Mid-Turn:** Large log files causing UI disconnections.

***
*Generated by Agnes-2.0-Flash based on OpenClaw GitHub data.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Ecosystem (2026-06-22)

### 1. Ecosystem Overview
The open-source personal AI assistant landscape in June 2026 is defined by a critical pivot from feature proliferation to operational stability and security hardening. Projects are increasingly grappling with the complexities of long-running agent sessions, memory state integrity, and secure multi-agent communication (A2A). While the "Core Reference" projects like OpenClaw and NanoBot dominate the high-volume discourse on reliability, specialized niches such as embedded systems (ZeptoClaw) and privacy-centric decentralized protocols (PicoClaw/ZeroClaw) are gaining traction. The ecosystem is currently in a consolidation phase, where maintaining trust through sandboxing and deterministic state management is becoming as important as raw model capability.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Latest Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | `v2026.6.10-beta.1` (Unstable) | ⚠️ Critical (Stability Crisis) |
| **ZeroClaw** | 50 | 50 | Pre-`v0.8.0` (Active Dev) | 🟢 High (Security Focus) |
| **Hermes Agent** | 50 | 50 | Pre-`v0.17.0` (Imminent) | 🟡 Moderate (Regression Heavy) |
| **CoPaw** | 23 | 37 | `v1.1.12.post1` (Buggy) | 🔴 Low (QA Overwhelmed) |
| **NanoBot** | 10 | 32 | Pre-`v0.2.2` (Patch Prep) | 🟢 High (Stable Fixes) |
| **PicoClaw** | N/A | 33 | `v0.3.0-nightly` (Nightly) | 🟡 Moderate (Refactoring) |
| **IronClaw** | 11 | 29 | No New Release | 🟡 Moderate (CI Stability) |
| **LobsterAI** | 6 | 11 | Pre-Release (OpenClaw Patch) | 🟡 Moderate (Security Risk) |
| **NanoClaw** | 0 | 7 | No New Release | 🟠 Caution (Security Vulns) |
| **NullClaw** | 1 | 1 | `v2026.5.29` (Stale) | 🔴 Low (Minimal Activity) |
| **ZeptoClaw** | 1 | 1 | No New Release | 🟢 Stable (Niche Focus) |
| **TinyClaw** | 0 | 0 | No Activity | ❌ Inactive |
| **Moltis** | 0 | 0 | No Activity | ❌ Inactive |

*\*Health Score inferred from bug density, release stability, and response velocity relative to activity volume.*

### 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw possesses the largest community engagement and contributor base, evidenced by the sheer volume of issues (500+) and PRs. Its modular architecture, highlighted by the externalization of plugins (IRC, Signal, etc.), offers superior flexibility for enterprise integration compared to monolithic competitors like CoPaw.

**Technical Approach Differences:** Unlike ZeptoClaw’s strict binary size constraints or NanoBot’s focus on lightweight daemon layers, OpenClaw is building a comprehensive "gateway" ecosystem. However, this breadth comes at the cost of complexity, leading to the "session state integrity" crises seen in other projects (like ZeroClaw’s context compression bugs) but magnified in scale.

**Community Size:** OpenClaw is the clear leader in active participants, but its community is currently in a state of high frustration due to regressions. In contrast, projects like NanoBot and ZeptoClaw have smaller, more niche communities that are currently more satisfied with their respective stability/security profiles.

### 4. Shared Technical Focus Areas
*   **Session State & Memory Consistency:**
    *   *Projects:* OpenClaw, NanoBot, CoPaw, ZeroClaw.
    *   *Need:* All major projects are addressing "session wedges," memory leaks, and context compression failures. Users demand bounded append semantics and reliable history flushing to prevent data loss.
*   **Security Sandboxing & A2A Trust:**
    *   *Projects:* NanoClaw, ZeroClaw, LobsterAI, OpenClaw.
    *   *Need:* Critical vulnerabilities in agent-to-agent communication (symlink escapes, SSRF guards, tool ID sanitization) are top priorities. The industry is moving toward strict allowlists and WASM-based plugin isolation.
*   **Provider Compatibility & Routing:**
    *   *Projects:* OpenClaw, ZeroClaw, NanoBot, IronClaw.
    *   *Need:* Robust handling of streaming responses, tool call deduplication (especially for Anthropic/OpenAI), and seamless failover between providers (e.g., Volcengine, Bedrock) are essential for reliability.
*   **Observability & Debugging:**
    *   *Projects:* Hermes Agent, ZeroClaw, IronClaw.
    *   *Need:* Better logging, trace correlation (OTel), and transparent error reporting are demanded to reduce the "black box" nature of agent failures.

### 5. Differentiation Analysis
*   **Target Users:**
    *   *Enterprise/DevOps:* **OpenClaw** and **IronClaw** cater to complex, multi-channel deployments requiring gateway stability and CI/CD integration.
    *   *Privacy/Security-Conscious:* **ZeroClaw** and **NanoClaw** appeal to users prioritizing sandbox isolation, WASM security, and decentralized identity.
    *   *Lightweight/Embedded:* **ZeptoClaw** uniquely targets robotics and constrained hardware with a strict <7.5MB binary budget.
    *   *Consumer/Desktop:* **CoPaw** and **NanoBot** focus on UI/UX, onboarding wizards, and mobile responsiveness for individual users.
*   **Technical Architecture:**
    *   **OpenClaw:** Monolithic core with externalized plugins; high complexity, high flexibility.
    *   **NanoBot:** Daemon-layer architecture with unified semantic gateways; optimized for operational control.
    *   **ZeroClaw:** Rust/WASM-first; aiming to eliminate Node.js dependencies for security and performance.
    *   **ZeptoClaw:** Minimalist C/Rust binary; prioritizes size over feature richness.

### 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Velocity, High Noise):** **OpenClaw**, **Hermes Agent**, **CoPaw**. These projects are in "stabilization sprints," dealing with high volumes of bug reports and regression fixes. Momentum is high, but maturity is questioned by stability issues.
*   **Stabilizing & Securing (Focused Growth):** **ZeroClaw**, **NanoBot**, **IronClaw**. These projects are merging critical security patches and refining core loops. Their activity is more deliberate, suggesting a transition from feature creation to hardening.
*   **Niche/Mature (Low Volume, High Intent):** **ZeptoClaw**, **PicoClaw**. Activity is lower but highly targeted (CI gates, nightly builds). They serve specific user needs with less churn.
*   **Declining/Inactive:** **NullClaw**, **TinyClaw**, **Moltis**. Lack of recent significant activity suggests these projects are either dormant or waiting for major architectural overhauls.

### 7. Trend Signals
*   **Shift from "Smart" to "Reliable":** The community’s primary complaint is no longer lack of features, but session loss, memory leaks, and silent failures. Developers must prioritize determinism and state management over novel agent behaviors.
*   **Security as a Feature:** Vulnerabilities in A2A communication (NanoClaw, ZeroClaw) and SSRF (LobsterAI) are driving user trust. Secure-by-design architectures (WASM, strict allowlists) are becoming competitive advantages.
*   **Decentralization & Privacy:** Demand for Mattermost support (NanoBot), SimpleX/Tox (PicoClaw), and local-first modes (ZeroClaw) indicates a growing segment of users rejecting centralized cloud dependencies.
*   **Operational Complexity:** The rise of "daemon layers" (NanoBot) and "gateway stability" (OpenClaw) highlights that managing agent lifecycles, cron jobs, and plugin trust is becoming as complex as the AI logic itself.
*   **Value for Developers:** For AI agent developers, the key takeaway is that **observability** and **state persistence** are the next battleground. Projects that solve "session wedges" and provide transparent debugging tools will capture the enterprise market.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-06-22
**Source:** github.com/HKUDS/nanobot

## 1. Today's Overview
NanoBot is experiencing high development velocity with 10 issues updated and 32 PRs reviewed or created in the last 24 hours. The primary focus today is stabilizing the core agent loop and securing Model Context Protocol (MCP) integrations, evidenced by multiple critical fixes for concurrency bugs and security bypasses. While no new official release was published today, the volume of merged fixes suggests an imminent patch update (v0.2.2 preparation is already underway). The project remains actively maintained by HKUDS, with significant community contributions addressing both backend stability and user experience enhancements.

## 2. Releases
*   **No new official releases published.**
*   **Preparation:** PR #4445 indicates the team is preparing for version `v0.2.2`, updating the package version and cleaning up import order blockers.

## 3. Project Progress
**Merged/Closed Items:**
*   **[Enhancement] Gateway Daemon Layer:** Issue #1461 and PR #1854 were closed, implementing a unified daemon gateway semantic layer. This allows `nanobot gateway` to run as a background service with OS-managed hosting, improving operational control.
*   **[Feature] Onboarding Wizard:** Issue #4376 and PR #4395 were closed, delivering a user-friendly `--wizard` flow for `nanobot onboard`. This simplifies initial configuration for non-technical users by guiding them through provider and model selection.
*   **[Feature] DingTalk Group Controls:** PR #4206 was merged, adding `group_allow_from` configuration to the DingTalk channel, allowing operators to restrict bot interactions to specific groups.

**Active Advancements:**
*   **Memory Consolidation:** PR #4439 implements a read-only `search_history` tool, addressing long-term memory retrieval needs without polluting the active context window.
*   **WebUI Skills:** PR #4284 enables skill activation via slash commands in the WebUI, improving discoverability and usability of custom skills.

## 4. Community Hot Topics
**Most Active/Commented Items:**
1.  **Mattermost Integration Request:** Issue #1011 (4 👍, 1 Comment) remains a top discussion point for users seeking alternatives to Discord/Telegram/Slack due to privacy or platform constraints.
2.  **Telegram Rich Messages:** Issue #4413 and PR #4422 highlight strong demand for Telegram Bot API 10.1 features (tables, collapsible details). PR #4422 closes this by adding native support.
3.  **DingTalk Improvements:** Multiple interactions around DingTalk (Issues/PRs #4446, #4206) show active usage in enterprise environments requiring strict group controls and private chat management.

**Underlying Needs:** Users are pushing for better privacy controls (Mattermost), richer formatting in messaging apps (Telegram Rich Messages), and granular access control in enterprise channels (DingTalk).

## 5. Bugs & Stability
**Critical Security & Stability Fixes:**
1.  **MCP Allowlist Bypass (High Severity):** Issues #4434 and #4435 report that `enabledTools: []` failed to block MCP resources and prompts, exposing internal capabilities to the model. **Fix:** PR #4436 gates resource/prompt registration behind the `enabledTools` config.
2.  **Anthropic Tool ID Duplication (High Severity):** Issue #4442 describes a bug where streaming responses duplicate `tool_use` IDs, causing permanent session failure (HTTP 400) on Anthropic providers. **Fix:** PRs #4443 and #4444 deduplicate IDs and guard against malformed streams.
3.  **Concurrency Safety in Hooks (Medium Severity):** Issue #4408 identified that `Nanobot.run()` per-run hooks were not concurrency-safe, leading to shared state clobbering. **Status:** Related fixes appear in PR #4433 (pairing store normalization) and general stability improvements, though a direct hook fix PR isn't explicitly linked in the top 20, the issue is marked closed.
4.  **Gateway Crash on Reconnect (Medium Severity):** Issue related to PR #4441 addresses a `RuntimeError` crash when MCP server sessions terminate during reconnection.

## 6. Feature Requests & Roadmap Signals
**User-Requested Features:**
1.  **Read-Only Memory Search:** Issue #4440 and PR #4439 show demand for a dedicated tool to query historical memory (`history.jsonl`) without loading it into the active context, solving token limit issues for long conversations.
2.  **Cron Job Control:** PR #4225 introduces `silent` mode and `lock_recipient` for cron jobs, responding to users who want background monitoring tasks that don't spam chat channels.
3.  **DeepSeek Message Hardening:** PR #3869 addresses specific parsing issues with DeepSeek models (null content handling, placeholder leakage), signaling continued optimization for diverse LLM providers.
4.  **Read-Only Sessions:** PR #4271 adds support for `read_only` sessions, useful for static info pages or announcements where LLM calls are unnecessary.

**Roadmap Prediction:** The next patch (v0.2.2) will likely prioritize the MCP security fix, the Anthropic streaming fix, and the new `search_history` tool, given their closed/merged status.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Privacy/Platform Choice:** Users are frustrated with the privacy implications of mainstream platforms (Telegram/Russia, Slack/Zuck, Discord/Gaming), driving interest in Mattermost and self-hosted solutions.
    *   **Streaming Instability:** Reports of sessions being "bricked" by duplicate tool IDs indicate a poor experience for users relying on streaming responses with Anthropic.
    *   **Complex Onboarding:** Non-technical users found the initial setup too complex, necessitating the new wizard.
*   **Satisfaction:**
    *   Positive feedback on the new DingTalk group controls and the simplified onboarding wizard.
    *   Appreciation for granular control over cron jobs and MCP permissions.

## 8. Backlog Watch
*   **Mattermost Bot Support:** Issue #1011 has been open since Feb 2026 with 4 reactions. It represents a significant gap for privacy-conscious users. Maintainers should evaluate feasibility for future roadmap inclusion.
*   **OpenAI-Compatible Tool Call Parsing:** PR #4092 is still open, addressing deduplication and XML block stripping for OpenAI-compatible providers. This is critical for users migrating from other ecosystems.
*   **Weather Skill:** PR #4145 is open, providing a template for skill development. While minor, it serves as an example for community skill creation.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-22
**Source:** NousResearch/hermes-agent

## 1. Today's Overview
The Hermes Agent project exhibits extremely high development velocity on June 22, 2026, with 50 issues and 50 pull requests updated within the last 24 hours. Despite zero new releases, the team is aggressively addressing critical stability regressions, particularly in the CLI, Gateway, and TUI components. Activity is heavily skewed toward bug fixes for authentication, concurrency, and platform-specific adapters (Feishu, Discord, Telegram), indicating a stabilization phase preceding the upcoming v0.17.0 release. The volume of P2-severity bugs suggests recent commits may have introduced regressions in session management and provider routing.

## 2. Releases
**Status:** No new releases published today.
**Note:** Several closed PRs (#38503, #38504, #38505, #38506) are marked as part of the "v0.17.0-ready" campaign, suggesting a major release is imminent.

## 3. Project Progress
**Key Merged/Closed Items:**
*   **Memory & Session Management:** Closed PR #38503 fixed memory eviction logic and capacity calculations, while #38504 implemented LLM-summarization based session recall.
*   **Runtime Stability:** Closed PR #38505 resolved agent startup failures and model matching issues, crucial for stable daily operations.
*   **Documentation & UI Housekeeping:** Closed PR #38506 cleaned up release notes and desktop UI documentation, preparing for public-facing updates.

**Active Development Highlights:**
*   **Concurrency Safety:** PR #50682 introduces advisory locking for `save_trajectory()` to prevent JSONL file corruption during concurrent writes.
*   **Encoding Fixes:** PRs #50679 and #50660 explicitly add UTF-8 encoding to file I/O operations across the Gateway and Tools modules, fixing potential cross-platform character handling bugs.
*   **Context Snapshots:** PR #50680 adds support for snapshotting channel context files, improving state persistence for Discord and other platforms.

## 4. Community Hot Topics
**Most Discussed/Open Issues:**
1.  **[Feature] Delegate Task Profiles (Issue #9459):** 7 comments, 17 👍. Users are requesting the ability to spawn sub-agents from named profiles in `config.yaml` to enable custom orchestration harnesses. *Signal: High demand for modular, reusable agent behaviors.*
    *   Link: https://github.com/NousResearch/hermes-agent/issues/9459
2.  **[Feature] Multi-Telegram Bot Routing (Issue #10452):** 7 comments, 4 👍. Requests for supporting multiple Telegram bots simultaneously for distinct operational roles (e.g., primary vs. dev). *Signal: Enterprise/Multi-bot deployment needs.*
    *   Link: https://github.com/NousResearch/hermes-agent/issues/10452
3.  **[Bug] macOS DMG Architecture (Issue #37505):** 6 comments, 1 👍. Critical blocker for Intel Mac users where the app fails to launch. *Signal: Desktop distribution parity issue.*
    *   Link: https://github.com/NousResearch/hermes-agent/issues/37505
4.  **[Feature] Kanban Board Integration (Issue #41222):** 4 comments, 6 👍. Users want the Kanban view integrated directly into the Desktop App to reduce context switching. *Signal: Desire for unified workflow UI.*
    *   Link: https://github.com/NousResearch/hermes-agent/issues/41222

## 5. Bugs & Stability
**Critical/P2 Bugs Reported Today:**
1.  **Test Session Leakage (Issue #50681):** Running `pytest` pollutes the production `state.db` with fake sessions. *Fix Status: Requires refactoring `DEFAULT_DB_PATH` constant.*
    *   Link: https://github.com/NousResearch/hermes-agent/issues/50681
2.  **Auth Silent Failure (Issue #50671):** `hermes auth add` for Nous API keys succeeds locally but fails at runtime because the resolver ignores the new credential pool. *Fix Status: PR #50673 addresses this.*
    *   Link: https://github.com/NousResearch/hermes-agent/issues/50671
3.  **Bedrock Model Routing (Issue #50292):** Non-Claude models on Bedrock crash with validation errors when default is set to Claude. *Fix Status: Needs fix in `resolve_runtime_provider`.*
    *   Link: https://github.com/NousResearch/hermes-agent/issues/50292
4.  **Google Antigravity Integration (Issue #50530):** Sub-agent crashes and concurrent disconnections persist after basic connectivity fixes. *Fix Status: Ongoing debugging.*
    *   Link: https://github.com/NousResearch/hermes-agent/issues/50530
5.  **Feishu Group Message Loss (Issue #50656):** WebSocket fails to deliver group @mention messages. *Fix Status: Adapter bug.*
    *   Link: https://github.com/NousResearch/hermes-agent/issues/50656
6.  **PID Kill Race Condition (PR #50674):** Security/Stability risk where killing a bot PID might terminate an unrelated process if the PID is recycled. *Fix Status: PR submitted.*
    *   Link: https://github.com/NousResearch/hermes-agent/pull/50674

## 6. Feature Requests & Roadmap Signals
*   **Config Hot-Reload (Issue #48693):** Users strongly prefer avoiding gateway restarts when modifying `config.yaml`. This is likely a candidate for the next patch release.
*   **System Tray Minimization (Issues #46566, #50662):** Standard desktop UX expectation. Currently missing on Windows/macOS/Linux. Likely to be included in the v0.17.0 Desktop UI polish.
*   **Shared Memory for Sub-Agents (Issue #377):** Inspired by CAMEL-AI, users want sub-agents to share state/memory rather than being fully isolated. This represents a significant architectural shift for multi-agent workflows.
*   **Hook Payload Enrichment (Issue #39882):** Adding `transcript_path` to tool hooks to allow context-aware automation.

## 7. User Feedback Summary
*   **Pain Points:** The most significant frustration stems from **authentication and credential resolution** (Issues #50671, #15516) and **session state corruption** (Issues #50681, #46563). Users report that configuration changes (like adding API keys) appear successful but fail silently at runtime.
*   **Desktop Experience:** Windows users are particularly vocal about missing standard UI behaviors like zoom controls (Issue #37917) and system tray minimization (Issue #46566).
*   **Platform Reliability:** Feishu and Discord adapters are generating consistent bugs regarding message delivery and profile isolation (Issues #50656, #50404), indicating these integrations need rigorous testing.

## 8. Backlog Watch
*   **Intel Mac Support (Issue #37505):** A simple binary build fix that blocks a segment of the user base. High priority for Desktop stability.
*   **Cloudflare Access Compatibility (Issue #37986):** Remote gateway setups behind Cloudflare Access fail due to HTML redirects instead of OAuth flows. Important for enterprise security deployments.
*   **Langfuse Trace Failure (Issue #42033):** Observability integration is broken for users relying on Langfuse for tracing, impacting debugging capabilities for advanced users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-06-22

## 1. Today's Overview
PicoClaw is experiencing high development velocity with 33 Pull Requests updated in the last 24 hours, indicating a major push toward stabilization and feature completion for the upcoming v0.3.0 cycle. The project released a nightly build (`v0.3.0-nightly.20260622.287853ab`) alongside significant backend refactoring focused on model configuration workflows, JSONL memory consistency, and provider fallback mechanisms. While the majority of activity involves merging internal improvements, there are emerging stability concerns regarding specific AI providers (Volcengine Doubao) and legacy browser compatibility (iOS Safari <16.4). The community remains engaged with requests for decentralized identity protocols and persistent token consumption bugs.

## 2. Releases
*   **Nightly Build:** `v0.3.0-nightly.20260622.287853ab`
    *   **Source:** [GitHub Compare](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
    *   **Note:** This is an automated nightly build. Users are advised to use with caution as it may be unstable. It likely incorporates the merged changes from today's batch of PRs (#2752, #2906, etc.).

## 3. Project Progress
The primary focus today was consolidating the v0.3.0 feature set, particularly around model management, memory integrity, and UI/UX refinements.

*   **Model Configuration Overhaul:** A series of PRs (#2752, #2831, #2832, #2833) implemented a new foundation for model configuration, including upstream model fetching, saved catalogs, provider selection, and real connectivity verification tests.
*   **Memory & Bus Stability:** Significant backend work addressed crash consistency in JSONL sessions (#2907, #2913) and improved message bus backpressure handling (#2906).
*   **Provider Support:** Added support for `CommonModels` for the MiMo provider (#2915) and fixed fallback chain handling for expired contexts (#2905).
*   **UI/UX Enhancements:**
    *   Restored provider logo fallbacks on the models page (#2908).
    *   Added "Reset to Factory Defaults" feature for config recovery (#2891).
    *   Implemented end-to-end streaming support for Pico web chat (#2587).
    *   Fixed Windows launcher console flashing issues (#2654) and Windows build flows (#2487).
    *   Added cross-platform serial tool support (#2673).
    *   Improved config save/restart feedback (#2663) and thought visibility toggles (#2661, #2659).
*   **Documentation:** Synced all documentation to the new V3 config format (#2766).

## 4. Community Hot Topics
*   **Decentralized Messaging Integration:**
    *   **Issue #3093:** Request for SimpleX, Tox, or Wire gateway support.
    *   **Link:** [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)
    *   **Analysis:** Reflects a growing user base interested in privacy-first, decentralized communication protocols beyond traditional Matrix/Telegram integrations.
*   **Resource Consumption Efficiency:**
    *   **Issue #3012:** Report of continuous token consumption when Evolution mode is enabled.
    *   **Link:** [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)
    *   **Analysis:** High priority for cost-conscious users. Indicates a potential infinite loop or aggressive polling mechanism in the "Draft" evolution mode.
*   **Legacy Browser Compatibility:**
    *   **Issue #3090:** Panel failure on iOS Safari < 16.4.
    *   **Link:** [Issue #3090](https://github.com/sipeed/picoclaw/issues/3090)
    *   **Analysis:** Highlights friction for users on older devices or restricted update environments.

## 5. Bugs & Stability
*   **Critical/High Severity:**
    *   **Volcengine Doubao Tool Call Leak:** Tool calls from `doubao-seed-2.0-pro` are returning as raw XML text (`<seed:tool_call>`) instead of executing.
        *   **Status:** Open Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153); Fix PR [#3154](https://github.com/sipeed/picoclaw/pull/3154) created by `hanZeng-08`.
    *   **Matrix `allow_from` Parsing Failure:** Standard Matrix user IDs containing colons are silently rejected due to parsing errors.
        *   **Status:** Closed Issue [#3044](https://github.com/sipeed/picoclaw/issues/3044).
    *   **MCP Add Flag Mis-parsing:** Global flags in `mcp add` commands are misinterpreted as positional arguments, breaking HTTP/SSE server additions.
        *   **Status:** Closed Issue [#3041](https://github.com/sipeed/picoclaw/issues/3041).
*   **Medium Severity:**
    *   **JSONL Session Metadata Drift:** Crash consistency gaps in memory store could lead to corrupted session states.
        *   **Status:** Addressed by Merged PR [#2907](https://github.com/sipeed/picoclaw/pull/2907).
    *   **JSONL Index Cloning Performance:** Hot-path cloning of in-memory indexes causing performance degradation.
        *   **Status:** Addressed by Merged PR [#2913](https://github.com/sipeed/picoclaw/pull/2913).

## 6. Feature Requests & Roadmap Signals
*   **SimpleX/Tox Gateways:** User demand for non-Matrix decentralized protocols suggests these may be prioritized in future roadmap iterations if community interest sustains.
*   **Factory Reset Utility:** The addition of "Reset to Factory Defaults" (#2891) indicates a strategic move to reduce support burden for configuration corruption, a common pain point in complex agent setups.
*   **Serial/Hardware Tooling:** The inclusion of cross-platform serial tool support (#2673) signals an expansion of PicoClaw's capabilities into IoT/hardware control domains.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Cost Control:** Users are highly sensitive to token consumption, especially when automation features (Evolution) behave unexpectedly (#3012).
    *   **Configuration Complexity:** The shift to V3 config format caused documentation sync issues, but the new "Reset to Defaults" feature addresses the resulting user anxiety about broken configs.
    *   **Platform Specifics:** Windows users experienced UI regressions (console flashes) and build issues, which have been largely resolved in recent merges.
*   **Satisfaction:**
    *   The rapid resolution of JSONL crash consistency and MCP parsing bugs demonstrates responsive maintenance.
    *   Enhanced streaming UX and thought visibility toggles are positive quality-of-life improvements appreciated by power users.

## 8. Backlog Watch
*   **Issue #3012 [BUG] Continuous consumption of tokens...**: This issue remains open and has 5 comments. Given the critical nature of token waste, it requires immediate attention before the next stable release.
*   **Issue #3090 [BUG] Panel does not work on Safari...**: Stale but open. While iOS <16.4 is an older version, the widespread use of Apple devices makes this a notable compatibility gap.
*   **Issue #3093 [Feature] I need SimpleX or tox**: Low immediate priority compared to bug fixes, but valuable for long-term roadmap planning regarding privacy-focused deployments.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-22
**Source:** github.com/qwibitai/nanoclaw

### 1. Today's Overview
The NanoClaw project exhibits high maintenance velocity today, with 7 Pull Requests updated and 2 critical security issues raised in the last 24 hours. Activity is dominated by stability refinements in the setup and containerization logic, alongside urgent patches for agent-to-agent (A2A) security vulnerabilities. No new releases were published, suggesting the team is currently focused on hardening existing code paths rather than shipping major features. The presence of two open security advisories indicates a proactive but vulnerable state regarding agent sandbox isolation.

### 2. Releases
*   **Status:** None.
*   **Details:** No new versions were released today. The project appears to be in a stabilization phase ahead of potential future releases, given the number of open PRs and active security discussions.

### 3. Project Progress
**Merged/Closed PRs:**
*   **[PR #2825](https://github.com/nanocoai/nanoclaw/pull/2825)** - *Setup Race Condition Fixed:* Resolved an issue where the "first chat" step failed because it attempted to ping the host CLI socket before the background service had fully bound it. This improves initial user experience and reduces startup errors.
*   **[PR #2829](https://github.com/nanocoai/nanoclaw/pull/2829)** - *Cleanup:* Closed a PR likely containing incorrect formatting or non-compliant submission ("eee").
*   **[PR #2168](https://github.com/nanocoai/nanoclaw/pull/2168)** - *Container Networking Fix:* Merged a fix for rootless Docker environments by pinning `host.docker.internal` to OneCLI's bridge IP, preventing connectivity regressions for users running agents in isolated containers.

**Open PRs Advancing Development:**
*   **[PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531)** - Addresses duplicate text output in poll loops, improving message clarity during mid-turn operations.
*   **[PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830)** - Proposes cleanup of dead peer service registrations (launchd/systemd) left behind after uninstalled checkouts, enhancing system hygiene.
*   **[PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826)** - Forces skill updates during host upgrades to prevent silent failures of channel/provider fixes.

### 4. Community Hot Topics
**Most Critical Issues:**
1.  **[Issue #2828](https://github.com/nanocoai/nanoclaw/issues/2828)** - *Security: Symlinked Inbox Attack Vector.*
    *   **Analysis:** A compromised agent can redirect file attachments outside the session root via symlinks. This is a high-severity sandbox escape risk that undermines the trust model of multi-agent systems.
2.  **[Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827)** - *Security: Approval Smuggling in MCP Server Setup.*
    *   **Analysis:** The `add_mcp_server` UI hides runtime arguments and environment variables during approval, allowing malicious agents to inject dangerous configurations under the guise of standard server names. This exploits the human-in-the-loop verification process.

**Underlying Needs:**
The community and maintainers are heavily focused on **security transparency** and **sandbox integrity**. Users are increasingly deploying multi-agent workflows where trust boundaries are critical; these two issues highlight gaps in how NanoClaw handles untrusted agent inputs and file system interactions.

### 5. Bugs & Stability
**Reported Bugs:**
1.  **[High Severity] Security Vulnerabilities (#2828, #2827):** As detailed above, these represent critical stability and security flaws in the agent execution environment. They are not crashes but functional compromises of the security model.
2.  **[Medium Severity] Startup Race Conditions:** Previously reported in setup flows (now addressed by PR #2825).
3.  **[Low Severity] Duplicate Text Output:** Reported in PR #2531, affecting UI cleanliness during polling loops.

**Fix Status:**
*   PR #2825 and PR #2168 have been merged to address specific stability bugs.
*   No merged PRs yet address the security issues in #2828 and #2827; these remain open risks.

### 6. Feature Requests & Roadmap Signals
*   **[PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795)** - *Read-Only CLI Dashboard:* A new utility skill (`/add-clidash`) is being reviewed. This signals a roadmap direction toward better observability and monitoring for local CLI interactions without modifying state.
*   **[PR #2826](https://github.com/nanocoai/nanoclaw/pull/2826)** - *Forced Skill Updates:* While framed as a fix, this suggests a roadmap shift toward stricter dependency management for skills, ensuring users don't silently miss upstream security or feature patches in their installed skills.

### 7. User Feedback Summary
*   **Pain Points:** Users are experiencing frustration with "ghost" services accumulating after uninstalling NanoClaw checkouts (highlighted by PR #2830). There is also dissatisfaction with confusing startup errors when the host socket isn't ready.
*   **Satisfaction:** The quick resolution of the socket race condition (PR #2825) and Docker networking issues (PR #2168) suggests responsive maintenance for core infrastructure bugs.
*   **Trust Concerns:** The two open security issues indicate that advanced users are concerned about the reliability of the agent sandbox. Any breach in isolation (symlinks, env injection) significantly impacts user confidence in using NanoClaw for complex, multi-agent tasks.

### 8. Backlog Watch
*   **[Issue #2828 & #2827]:** These security advisories require immediate attention. They are currently open with no linked fix PRs. Maintainers need to prioritize patching these vulnerabilities to restore trust in the A2A communication protocol.
*   **[PR #2830]:** This PR addresses a significant long-term maintenance burden (zombie services). It should be merged soon to improve the user lifecycle management experience.
*   **[PR #2531]:** The fix for duplicate text in poll loops is open since May 18. While low severity, it affects UX clarity and should be reviewed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-06-22

### 1. Today's Overview
The NullClaw project shows minimal activity as of June 22, 2026, with no new releases or merged pull requests recorded in the last 24 hours. Development momentum appears slow, characterized by one open dependency update managed by Dependabot and one unresolved bug report. The community engagement is low, indicated by zero reactions on recent issues, suggesting either a stable but quiet period or a need for increased maintainer visibility. Overall project health is neutral, with no critical blockers reported today but also no significant progress made.

### 2. Releases
No new releases were published today. The latest available version remains **v2026.5.29**, released approximately three weeks ago. Users are advised to check the [releases page](https://github.com/nullclaw/nullclaw/releases) for any updates prior to this digest date.

### 3. Project Progress
There were no merged or closed pull requests today. The only active development-related item is:
*   **[PR #956](https://github.com/nullclaw/nullclaw/pull/956)**: An open dependency update from Dependabot to bump Alpine Linux from 3.23 to 3.24 within the Docker images group. This is a routine maintenance task aimed at improving security and compatibility but has not yet been merged.

### 4. Community Hot Topics
Activity is currently centered around a specific integration bug rather than broad feature discussions.
*   **[Issue #967](https://github.com/nullclaw/nullclaw/issues/967)**: Reported by user `svier0`, this issue details a `NoResponseContent` error when interacting with the **Agnes-2.0-Flash** model on Windows 11. Despite having only 1 comment and 0 reactions, the high frequency of occurrence (>50% in the reporter's tests) makes it a notable pain point for users relying on this specific model integration. The underlying need here is reliable connectivity between NullClaw and the Agnes-2.0-Flash API via standard API keys.

### 5. Bugs & Stability
One bug was reported recently (updated yesterday) that impacts stability for specific configurations:
*   **[Issue #967](https://github.com/nullclaw/nullclaw/issues/967)**: **Severity: High** (for affected users). Users encounter `error: NoResponseContent` when running `nullclaw agent -m "你好！"` with the Agnes-2.0-Flash model. The error occurs frequently (>50% of attempts) on Windows 11. No fix PR exists yet, and the issue is still open.

### 6. Feature Requests & Roadmap Signals
No new feature requests were logged today. The focus remains on fixing existing integration bugs (Issue #967) rather than proposing new capabilities. The Dependabot PR (#956) signals a commitment to keeping the Docker environment up-to-date with modern Alpine versions, which may indirectly support better performance or security features in future builds.

### 7. User Feedback Summary
User feedback is currently dominated by frustration with intermittent failures when using the Agnes-2.0-Flash model. The reporter highlights a discrepancy where the same API key works in other tools (implied by the cut-off sentence "same model same apikey, I was in picocla..."), suggesting the issue lies specifically within NullClaw's handling of responses from this model. Satisfaction is likely low among users experiencing this bug, while others may remain unaffected if they do not use this specific model configuration.

### 8. Backlog Watch
*   **[Issue #967](https://github.com/nullclaw/nullclaw/issues/967)**: This bug has been open since June 20, 2026, and was updated on June 21. It requires maintainer attention to diagnose whether the issue stems from NullClaw's parsing logic or the Agnes-2.0-Flash response format. Without a fix, users on Windows 11 using this model will continue to experience service interruptions.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest: 2026-06-22**

### 1. Today's Overview
The IronClaw project demonstrates high velocity on June 22, 2026, with significant activity centered around the "Reborn" architecture. There were 11 issues updated and 29 pull requests touched in the last 24 hours, indicating robust contributor engagement. While no new official releases were published, the merge of several critical CI optimizations and feature enhancements (such as Engine V2 usage persistence and one-shot triggers) suggests a maturing codebase. The focus remains heavily on stabilizing the Reborn WebUI, improving automation capabilities, and refining the learning/memory subsystems.

### 2. Releases
**No new releases published.**
*   *Note:* Several critical fixes and features have been merged into `main` (see Section 3) but have not yet been tagged as a new version. Users relying on specific stability should monitor for an upcoming release candidate or stable tag.

### 3. Project Progress
Significant progress was made in CI stability, Engine V2 observability, and Reborn feature sets:

*   **CI/CD Stabilization:**
    *   **#5118 [MERGED]:** Fixed Rust cache LRU eviction issues in the closure pipeline, reducing flaky builds caused by cache competition.
    *   **#5115 [MERGED]:** Implemented retries for crates.io network failures, mitigating transient SSL/HTTP2 hiccups in parallel job runs.
    *   **#5113 [MERGED]:** Refactored CI workflows by extracting platform/compatibility jobs into a dedicated `platform-and-compat.yml`, improving maintainability.
    *   **#5101 [MERGED]:** Standardized `cargo-component` installation across live canary and test workflows.
*   **Engine V2 & Admin Features:**
    *   **#4989 [MERGED]:** Persisted Engine V2 LLM usage data, ensuring the `/api/admin/usage` endpoint now correctly reflects consumption for users running `ENGINE_V2=true`.
*   **Reborn Automation & Learning:**
    *   **#5065 [MERGED]:** Introduced one-shot scheduled triggers (`TriggerSchedule::Once`), expanding automation flexibility beyond standard cron jobs.
    *   **#4990 [MERGED]:** Fixed NEAR AI MCP readiness projection, resolving false "SETUP NEEDED" states for pre-configured extensions.
    *   **#2927 [MERGED]:** Corrected first-run channel activation logic, ensuring WASM channels remain active after initial setup wizard completion.

### 4. Community Hot Topics
The following issues and PRs are generating the most discussion and represent key community interests:

*   **Local Dogfooding & Usability:**
    *   **[Issue #4879](https://github.com/nearai/ironclaw/issues/4879)** & **[Issue #5119](https://github.com/nearai/ironclaw/issues/5119):** Tracking findings from local Reborn WebUI startup and configuration. These highlight friction in first-run experiences and model-provider setups.
    *   **[Issue #4925](https://github.com/nearai/ironclaw/issues/4925) [CLOSED]:** Resolved confusion regarding NEAR AI MCP credential prompts despite auto-installation.
*   **Automation Enhancements:**
    *   **[Issue #5122](https://github.com/nearai/ironclaw/issues/5122)** & **[Issue #5121](https://github.com/nearai/ironclaw/issues/5121):** Requests for delete and pause/resume support in Reborn automations. This signals a need for finer-grained control over automated workflows.
    *   **[Issue #5117](https://github.com/nearai/ironclaw/issues/5117):** Proposal for a "Completed" summary card, addressing a UX gap in tracking automation outcomes.
*   **Self-Evolution & Memory:**
    *   **[PR #5061](https://github.com/nearai/ironclaw/pull/5061):** Introducing "Hermes-style" skill extraction and self-evolution. This is a major feature for autonomous capability improvement.
    *   **[PR #4937](https://github.com/nearai/ironclaw/pull/4937)** & **[PR #4975](https://github.com/nearai/ironclaw/pull/4975):** Part of the "Learning System" stack, focusing on memory semantics and lightweight reflection services to learn from mistakes.

### 5. Bugs & Stability
*   **Nightly E2E Failures:**
    *   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108):** The nightly End-to-End test suite failed on 2026-06-22. Specifically, the `Full E2E / E2E (v2-engine)` job is failing. This requires immediate attention from maintainers to prevent regression accumulation in the V2 engine path.
*   **Resolved Stability Issues:**
    *   **[PR #5118](https://github.com/nearai/ironclaw/pull/5118):** Fixed CI flakes related to Rust dependency downloads.
    *   **[PR #4990](https://github.com/nearai/ironclaw/pull/4990):** Resolved misleading UI state for MCP servers.

### 6. Feature Requests & Roadmap Signals
*   **Telegram Channel Support:**
    *   **[Issue #5124](https://github.com/nearai/ironclaw/issues/5124):** Explicit request to route Telegram inbound/outbound messages through the Reborn ProductAdapter rather than legacy v1 paths. This suggests Telegram integration is a priority for multi-channel consistency.
*   **Unified Gate Semantics:**
    *   **[Issue #5120](https://github.com/nearai/ironclaw/issues/5120):** Request to unify terminology for declined gates (Auth vs. Approval vs. Activity). This points towards a broader effort to standardize user-facing error states and flows.
*   **Concurrent Turn Execution:**
    *   **[PR #5085](https://github.com/nearai/ironclaw/pull/5085):** Addresses the limitation of strictly serial turn execution in Reborn. Implementation of `TurnRunScheduler` with per-user caps indicates a roadmap shift toward higher concurrency and throughput.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **First-Run Friction:** Multiple dogfooding issues (#4879, #5119) indicate that configuring model providers and starting the WebUI locally is still complex for new users.
    *   **Automation Control:** Users feel constrained by the lack of pause/delete functionality for automations (#5121, #5122) and visibility into completion counts (#5117).
    *   **Confusing UI States:** The "SETUP NEEDED" bug (#4925) erodes trust in automatic configurations.
*   **Positive Signals:**
    *   Appreciation for the move toward "self-evolution" and skill extraction (#5061), which addresses the desire for agents that improve over time without manual intervention.
    *   The CI improvements (#5118, #5115) show responsiveness to developer experience concerns, even if end-users don't see them directly.

### 8. Backlog Watch
*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108):** **High Priority.** Nightly E2E failures in the V2 engine path have persisted since May 27 but were recently flagged again. This blocks confidence in V2 stability.
*   **[PR #5061](https://github.com/nearai/ironclaw/pull/5061):** **Awaiting Review/Merge.** The skill extraction/self-evolution feature is large (XL size) and involves security scans (prompt injection). It is currently open and critical for the "Hermes-parity" goals.
*   **[PR #5081](https://github.com/nearai/ironclaw/pull/5081):** **Awaiting Review/Merge.** Adds a hosted single-tenant Postgres profile. This is a significant infrastructure change requiring careful review due to DB migration implications.
*   **[PR #5094](https://github.com/nearai/ironclaw/pull/5094):** **Awaiting Review/Merge.** Implements `/v1/models` and external tool gating. Essential for OpenAI compatibility claims.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** June 22, 2026
**Source:** GitHub (netease-youdao/LobsterAI)

### 1. Today's Overview
The LobsterAI project demonstrates high development velocity on June 22, 2026, with 11 pull requests updated and 6 active issues tracked. The primary focus has been on stabilizing the OpenClaw integration, fixing critical concurrency bugs in the MCP Bridge and Cron services, and enhancing the "Cowork" feature set with a new Plan Mode. While no new official releases were published today, several significant fixes and documentation updates have been merged, indicating a push toward improving stability and developer experience ahead of future deployments.

### 2. Releases
*   **No new releases** were published in the last 24 hours.
*   *Note:* Several merged PRs (#2182, #2183, #2185) suggest preparation for an upcoming release involving OpenClaw v2026.6.1 compatibility and Cowork enhancements.

### 3. Project Progress
**Merged/Closed Pull Requests:**
*   **[PR #2185]** **OpenClaw Patch Fix:** Fixed the inclusion of `cwd` in reply options for OpenClaw v2026.6.1, resolving plugin SDK declaration generation issues.
*   **[PR #2184]** **Documentation Update:** Refreshed `AGENTS.md` with current Cowork/OpenClaw architecture guidance, quality gates, and lint policies.
*   **[PR #2183]** **New Feature (Cowork):** Implemented "Plan Mode" workflow, allowing users to propose, review, and execute plans via interactive blocks without mutating tool calls prematurely.
*   **[PR #2182]** **Plugin Support:** Upgraded preinstalled IM plugins (DingTalk, Lark, WeCom, POPO) to support OpenClaw 2026.6.1 installation layouts and dependency caching.

### 4. Community Hot Topics
*   **[Issue #2181] Security Concern:** *LobsterAI restores private-network browser access by default and weakens the bundled OpenClaw SSRF guard.*
    *   **Analysis:** This is a critical security advisory raised by user `YLChen-007`. It highlights a regression in network isolation policies where `ProxyCompatible` mode defaults may expose internal networks. This issue demands immediate maintainer attention due to potential Remote Code Execution (RCE) or data exfiltration risks via SSRF.
*   **[Issue #1411 & #1414] Profile Page Analytics Bugs:** Multiple users report that the "Usage Overview" on the profile page (`#/profile`) is malfunctioning. Specifically, time filters are unresponsive, and "Total Sessions" always displays zero despite active usage.
    *   **Analysis:** Indicates a disconnect between the frontend analytics display and the backend data aggregation logic.

### 5. Bugs & Stability
**Reported Bugs (Ranked by Severity):**
1.  **[Issue #2181] [Security] SSRF Guard Weakening:** High severity. Default browser settings may bypass private network protections.
2.  **[Issue #1416] [UI] Layout Breakage on Language Switch:** Medium severity. Switching to English causes text overlap in the "Current Plan" card due to lack of adaptive layout.
3.  **[Issue #1411] [UI] Unresponsive Time Filter:** Medium severity. Users cannot switch time ranges in the overview dashboard.
4.  **[Issue #1414] [Data] Total Sessions Always Zero:** Medium severity. Statistical data inconsistency affecting user trust in usage metrics.
5.  **[Issue #1409] [Logic] Missing History for Cross-Day Tasks:** Low-Medium severity. Scheduled tasks triggered across midnight do not generate historical records properly.

**Stability Fixes in Progress/Merged:**
*   **[PR #1420] Concurrency Fix:** Addresses "ghost events" and race conditions in `CronJobService.pollOnce()` that could cause event storms.
*   **[PR #1408] Async Handling:** Fixes unhandled promise rejections in `MCP Bridge Server` that could lead to node crashes or hanging connections.
*   **[PR #1415] Transaction Integrity:** Ensures migration flags are only set after successful DB commits, preventing data corruption during failed migrations.

### 6. Feature Requests & Roadmap Signals
*   **[PR #2183] Cowork Plan Mode:** The addition of a "Plan Mode" suggests a roadmap shift towards more deterministic, step-by-step AI agent workflows rather than direct execution. This allows for human-in-the-loop verification before tool use.
*   **[PR #1410 & #1421] Performance Optimizations:** Significant effort is being directed at SQLite performance (debouncing writes, caching memory queries). This signals a priority on scaling the application for heavy local usage and large context windows.
*   **[Issue #1413] Skills UI Clutter:** Users request better handling of numerous skills in the input box. This suggests future UI/UX improvements for skill management and selection interfaces.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **UI Responsiveness:** Users are frustrated by non-functional filters and overlapping text in the English locale ([Issue #1411, #1416]).
    *   **Data Visibility:** The discrepancy between actual usage and displayed stats ("Total Sessions = 0") is causing confusion and distrust in the dashboard ([Issue #1414]).
    *   **Performance Lag:** Streamed responses and high-frequency updates are causing UI freezes due to synchronous SQLite writes ([PR #1410]).
*   **Positive Signals:**
    *   The community appreciates the detailed bug reports and the proactive nature of maintainers addressing concurrency and security patches.
    *   New features like "Plan Mode" are seen as valuable additions for complex agent workflows.

### 8. Backlog Watch
*   **[Issue #2181] Security Advisory:** Requires urgent triage. The claim that SSRF guards are weakened needs immediate verification and likely a hotfix.
*   **[Issue #1409, #1411, #1413, #1414, #1416]:** These issues, all marked `[stale]` but updated recently, represent a cluster of bugs in the Profile/Overview UI and Cron logic. They need dedicated QA cycles to ensure fixes are implemented before the next release.
*   **[PR #1407] Token Proxy Size Limit:** An open PR addressing potential OOM attacks on the OpenClaw Token Proxy. Needs review and merge to harden security.

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
**Date:** 2026-06-22
**Source:** GitHub Repository: `agentscope-ai/CoPaw` (Note: Data reflects activity in the `QwenPaw` repository under the `agentscope-ai` organization, which is the primary open-source project associated with this dataset).

## 1. Today's Overview
The project exhibited high development velocity today with **23 issues** and **37 pull requests** updated within the last 24 hours. Activity is heavily skewed towards bug fixes and UI responsiveness improvements, indicating a "stabilization sprint" phase following recent major updates. While no new official releases were published, the volume of merged code and critical bug reports suggests the codebase is undergoing rigorous testing and refinement. Community engagement remains strong, particularly regarding mobile usability and cross-platform compatibility.

## 2. Releases
*   **No new releases.**
*   *Context:* Several issues reference `v1.1.12` and `v1.1.12.post1`, suggesting these are the current stable/beta versions under active maintenance.

## 3. Project Progress
**Key Merged/Closed Items:**
*   **Plugin Loader Initialization Fixed (#4900):** The critical issue where the plugin loader failed to initialize in frozen environments (PyInstaller/Tauri) has been addressed by decoupling initialization from agent startup. This resolves a long-standing blocker for desktop users.
*   **File Preview Fix (#5324):** A regression in `send_file_to_user` where images/files were downloaded instead of displayed inline (Issue #5320) was fixed by adjusting `Content-Disposition` headers.
*   **Feishu @ Requirement Bug (#5353):** Closed a bug where Feishu bots incorrectly required `@` mentions regardless of configuration.

**Active Development Highlights:**
*   **Mobile Responsiveness Push:** Multiple PRs (#5366, #5369, #5362) are actively improving the mobile layout for Agent Config, Channels, and CronJobs pages, responding to user feedback on smartphone usability.
*   **Messaging Queue Stability:** PR #5371 addresses race conditions in the new message queue system, ensuring messages are bound to the correct Agent ID at enqueue time to prevent cross-agent leakage.

## 4. Community Hot Topics
*   **Context Compaction Freezing QwenPaw (#5218):** 17 comments. Users report that triggering context compaction causes the entire process to hang, requiring manual restarts. This is a severe stability concern.
*   **Re-enabled Built-in Skills After Update (#5262):** 9 comments. A recurring frustration where disabled default skills (e.g., docx/xlsx) revert to enabled state after every upgrade, forcing users to reconfigure.
*   **Message Queue Cross-Talk (#5354):** 4 comments. Users report that messages sent in one agent's queue are sometimes delivered to another agent after switching contexts, indicating a logic flaw in the session routing.
*   **Underlying Need:** The community is prioritizing **stability** and **state persistence**. There is significant friction with how the application handles state transitions (updates, agent switches) and resource-intensive operations (context compression).

## 5. Bugs & Stability
**High Severity:**
1.  **Process Freeze on Context Compaction (#5218):** `QwenPaw` becomes unresponsive when sub-agents trigger context compression. *Status: Open.*
2.  **Internal Server Error on Startup (#5379):** Users installing via Python pip encounter immediate `Internal Server Error` related to `get_remote_addr`. *Status: Open.*
3.  **Custom Model Configuration Broken (#5378):** Adding custom models in v1.1.12.post1 causes the endpoint field to become immutable/empty, rendering the model unusable. *Status: Open.*

**Medium Severity:**
4.  **Shell Command Parsing Failures (#5373):** `execute_shell_command` fails to parse standard shell syntax (pipes, redirects), limiting utility for advanced automation. *Status: Open.*
5.  **API Silent Drop on Busy Agents (#5344):** `POST /api/console/chat` returns HTTP 200 but discards messages if the agent is busy, providing no feedback to the caller. *Status: Open.*
6.  **OpenAI-Compatible Provider Function Calling (#5345):** Custom providers (e.g., OMLX) fail to trigger tool calls despite supporting the API spec, unlike Ollama. *Status: Open.*

**Low Severity/UI:**
7.  **Mac Chrome Drag-and-Drop Upload Failure (#5374):** Drag-and-drop does not work on Mac Chrome; click-to-upload is the only option. *Status: Open.*
8.  **Session Switch JS Error (#5358):** `TypeError: Cannot read properties of null` when switching sessions in embedded console mode. *Status: Open.*

## 6. Feature Requests & Roadmap Signals
*   **Personal Knowledge Base (#2969):** Persistent request to integrate personal knowledge bases directly into the console for enhanced agent capabilities. *Signal: High priority feature request.*
*   **Automatic Model Failover (#5351):** Request to implement automatic routing/failover in `model_factory.py` when primary models fail, utilizing existing but unused `RoutingChatModel` infrastructure.
*   **Real-time UI Updates for API Messages (#5322):** Users want API-sent messages to appear in the UI without manual refresh. *Status: Closed (likely addressed by queue improvements).*
*   **Recency-Aware Memory Ranking (#5325):** PR implementing exponential temporal decay for daily memory notes. *Signal: Direction towards smarter, time-sensitive memory retrieval.*
*   **Scroll Context Manager (#5321):** Proposal for a retrieval-driven context management alternative to compression, persisting history in SQLite. *Signal: Exploration of more robust context handling strategies.*

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Update Instability:** Users are frustrated that settings (disabled skills, custom configs) reset or break after simple version upgrades.
    *   **Mobile Experience:** The desktop-first design is causing significant usability issues on mobile devices, with buttons being cut off and navigation being cumbersome.
    *   **Queue Logic:** The new message queue feature, while praised for efficiency, is currently buggy, leading to message loss or misdelivery.
*   **Satisfaction:**
    *   The introduction of the message queue is generally viewed positively for performance.
    *   Community contributions (plugins like DataPaw, Miloco integration) are welcomed and expanding the ecosystem.

## 8. Backlog Watch
*   **#2969 [Feature] Personal Knowledge Base:** Open since April 2026. High demand for RAG integration directly in the UI.
*   **#5351 [Feature] Automatic Model Failover:** Open since June 21. Critical for production reliability.
*   **#5360 [Stabilization] Stabilize core app before adding new features:** A meta-issue raised by a contributor urging maintainers to focus on fixing core stability (mobile, agent interaction) before further feature expansion. This reflects a growing sentiment that the current release cadence is outpacing QA capabilities.
*   **#5379 [Bug] Internal Server Error on Startup:** Newly opened today. Requires immediate investigation as it blocks new installations.

---
*Generated by Agnes-2.0-Flash based on GitHub data from `agentscope-ai/QwenPaw`.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest
**Date:** 2026-06-22

### 1. Today's Overview
The ZeptoClaw project demonstrates high maintenance focus on its core strategic differentiator: binary size optimization. Activity is concentrated entirely on CI infrastructure rather than feature development, with one issue closed and one pull request merged in the last 24 hours. The repository shows no new releases, indicating that the current sprint is dedicated to stabilizing the build pipeline to enforce strict size budgets. This suggests a healthy but narrow focus on maintaining the project’s value proposition as a lightweight agent for constrained environments like robotics.

### 2. Releases
No new versions were released today. The project remains on its previous stable build while CI gates are being finalized.

### 3. Project Progress
*   **CI Gate Enforcement (PR #611):** The primary progress today was the merging of PR #611, titled *"chore(ci): promote binary-size to PR gate at 7.5MB"*. This change transitions the binary size check from a post-merge notification to a pre-merge blocking gate. By dropping the `if:` guard and lowering the threshold, the maintainers have ensured that any future contribution exceeding 7.5MB (stripped) will be rejected automatically. This directly addresses the long-standing concern raised in Issue #537.

### 4. Community Hot Topics
*   **Binary Size Budgeting (Issue #537 & PR #611):**
    *   *Links:* [Issue #537](https://github.com/qhkm/zeptoclaw/issues/537), [PR #611](https://github.com/qhkm/zeptoclaw/pull/611)
    *   *Analysis:* While comment counts are low (0–undefined), these items represent the most critical technical discussion. The underlying need is preserving the "strategic moat" of ZeptoClaw: the ability to run on resource-constrained hardware (e.g., robots). Users rely on this efficiency; therefore, any bloat is perceived as a threat to the project's viability. The community interest here is likely high among embedded developers, even if public engagement metrics are currently quiet due to the niche nature of the topic.

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The focus has been purely on tooling and CI configuration. The stability of the release pipeline is currently being improved by the merge of PR #611, which prevents accidental regressions in binary size.

### 6. Feature Requests & Roadmap Signals
No new feature requests were opened today. However, the roadmap signal is clear: **Efficiency over Functionality.** The active work on CI gates indicates that the immediate roadmap priority is not adding new capabilities, but rather hardening the existing codebase against dependency creep. Future releases will likely prioritize minimalism, potentially rejecting features that significantly increase the binary footprint unless absolutely necessary.

### 7. User Feedback Summary
Current user feedback, as reflected in the activity, centers on **satisfaction with the project's niche**. Users appreciate the strict adherence to small binary sizes, which is ZeptoClaw's unique selling point. There are no indications of dissatisfaction regarding performance or usability; rather, the concern is purely technical—ensuring that the promise of "fitting on a robot" is not broken by gradual bloat. The lack of new issues suggests the current implementation meets user expectations for lightweight deployment.

### 8. Backlog Watch
*   **Long-term CI Hygiene:** Issue #537 was created in April 2026 and closed/resolved via PR #611 in June 2026. With the gate now active, there are no urgent backlog items requiring immediate maintainer attention today.
*   **Monitoring Needed:** Maintainers should monitor PRs for the next few weeks to ensure the 7.5MB limit is realistic and does not block legitimate updates. If the limit proves too strict, it may require adjustment or exception handling in the CI workflow.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-06-22

## 1. Today's Overview
ZeroClaw is experiencing a surge in development activity, with 50 issues and 50 pull requests updated in the last 24 hours. The project is heavily focused on security hardening for its plugin runtime (WASM) and improving provider compatibility, particularly for OpenRouter and MCP integrations. There are no new official releases today, but significant architectural shifts are being proposed via RFCs to eliminate Node.js dependencies. The community is actively engaging in discussions around governance and security permissions, indicating a maturing ecosystem.

## 2. Releases
No new releases were published today. The project is currently tracking towards the stabilization of version 0.8.0 and preparing for the 0.8.1 integration queue.

## 3. Project Progress
Several critical pull requests were merged or are in advanced stages today, focusing on security and usability:
*   **Security Hardening:** PR #8137 removes raw environment variable access from plugins (`zc_env_read`), addressing a major security concern raised in Issue #5919. PR #8128 adds SSRF guards to the `zc_http_request` host function.
*   **OpenRouter Integration:** PR #8141 implements native model fallback arrays for OpenRouter, bridging a gap identified in Issue #8138.
*   **Session Management:** PR #8139 implements `session_ttl_hours` for channel conversations to prevent unbounded history growth.
*   **Browser Tool Fixes:** PR #7908 repairs WebDriver snapshot returns and CSS selector escaping, while PR #8136 allows HTTP URLs in `browser_open`.
*   **MCP Scoping:** PR #8120 ensures MCP tools are scoped per-agent, fixing a potential tool leak across agents.

## 4. Community Hot Topics
The most discussed topics revolve around security, architecture, and provider reliability:
*   **RFC: Work Lanes & Board Automation (#6808):** High engagement (11 comments) on governance and workflow efficiency.
*   **Native Dynamic-Library Plugin System (#7420):** Discussion on moving beyond WASM for certain plugins, highlighting performance vs. security trade-offs.
*   **WebAssembly-First Architecture (#7674, #8132, #8135):** Multiple RFCs and discussions aim to eliminate Node.js from the build/runtime, signaling a strategic shift towards a fully Rust/Wasm stack.
*   **Napcat/OneBot Channel (#2503):** Persistent user demand for better QQ/OneBot integration support.

## 5. Bugs & Stability
Key stability issues reported or addressed today include:
*   **[Bug] Gemini CLI OAuth Failure (#4879):** Users report workflow-blocking OAuth errors with Gemini providers.
*   **[Bug] Context Compression Drops Tool Calls (#6361):** Critical issue for OpenAI-compatible providers like MiniMax, causing tool loops.
*   **[Bug] Prompt Caching Incompatibility with Telegram (#6360):** Degraded performance due to cache misses on Telegram channels.
*   **[Bug] Anthropic Provider Unavailable in Chat (#8094):** Quickstart flow issues where added providers don't appear in chat immediately.
*   **[Bug] Docker Build Failures (#8089):** Missing `aardvark-sys` build.rs causes CI/CD breaks for Docker images.
*   **[Bug] MCP Tools Unavailable on Specific Providers (#7756):** Native/MCP tools not reaching OpenAI Responses/Anthropic turns.

## 6. Feature Requests & Roadmap Signals
*   **Stronger Pairing Codes (#6613):** Request to replace 6-digit numeric codes with alphanumeric strings for better security.
*   **Local-First Mode for Small Models (#5287):** Demand for compact prompting and strict parsers for local Ollama deployments to reduce prompt leakage.
*   **Prompt-Triggered Install Suggestions (#6289):** UX improvement to suggest missing skills/plugins when users ask for unavailable capabilities.
*   **OTel Trace Correlation (#6641, #6642):** Enhancements to observability by nesting LLM calls and tool usage under single turn traces.

## 7. User Feedback Summary
Users are expressing frustration with **prompt bloat** and **security transparency** in local setups (Issue #5287). There is strong dissatisfaction with **OAuth instability** in specific providers like Gemini (Issue #4879) and **configuration inconsistencies** in quickstarts (Issue #8094). Conversely, users appreciate the move towards **WASM-first security** and **per-plugin allowlists**, recognizing the need for stricter sandboxing as the plugin ecosystem grows.

## 8. Backlog Watch
Maintainers should prioritize reviewing the following long-standing or complex items:
*   **RFC: Native Dynamic-Library Plugin System (#7420):** Requires careful architectural decision-making regarding security vs. performance.
*   **RFC: WebAssembly-first, eliminate Node.js (#7674):** A foundational change that impacts the entire build pipeline; requires thorough testing.
*   **Bug: Gemini CLI OAuth not working (#4879):** Blocked workflow issue affecting a significant user base using Google providers.
*   **Bug: Context compression dropping tool calls (#6361):** Critical regression for multi-turn tool use with compatible providers.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*