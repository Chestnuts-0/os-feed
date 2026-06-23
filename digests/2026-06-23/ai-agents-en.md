# OpenClaw Ecosystem Digest 2026-06-23

> Issues: 195 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-23 09:59 UTC

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
**Date:** 2026-06-23
**Source:** github.com/openclaw/openclaw

## 1. Today's Overview
OpenClaw exhibits extremely high development velocity, with 500 PRs and 195 issues updated in the last 24 hours. The project is currently in a critical stabilization phase following the 2026.6.x series, focusing heavily on session state integrity, message delivery reliability, and cron job robustness. There are no new formal releases today, but a significant volume of fixes and features are queued for imminent merging, particularly around embedded agent runners, memory core migrations, and channel-specific adapters (WhatsApp, Teams, QQBot). The community is actively identifying regressions in model fallback chains and streaming behaviors introduced in recent updates.

## 2. Releases
*   **No new releases published today.**
*   **Active Development Context:** The latest stable context implies version `2026.6.9` or `2026.6.10-alpha.2`. Users are reporting regressions specifically tied to `2026.5.27/28` and `2026.6.1-6` updates, indicating these are the primary targets for hotfixes.

## 3. Project Progress
Several key areas saw significant advancement or fix submissions today:

*   **Memory Core & Indexing:**
    *   **PR #96052:** Fixed Full-Text Search (FTS) in `memory-core` to index file paths, resolving issues where date-based filename queries returned irrelevant results.
    *   **PR #95631:** Addressed a critical silent relocation of memory stores in v2026.6.9, implementing a proper migration path to prevent forced full re-embedding of thousands of files.
    *   **Issue #95724:** Proposed indexing by source directory rather than agent to eliminate duplicate vector stores for shared workspaces.

*   **Channel & Platform Integrations:**
    *   **PR #94978:** Advanced Microsoft Teams integration to include full Conversational Video Interface (CVI) support (voice, video, chat).
    *   **PR #78452:** Added native location send and action routing for WhatsApp.
    *   **PR #94553:** Implemented exponential backoff and circuit breakers for QQBot token refresh to prevent retry storms.
    *   **PR #95655:** Fixed Mattermost private channel resolution logic to prevent session key mismatches.

*   **Agent Runner & Streaming:**
    *   **PR #95430:** Fixed mid-stream error recovery for embedded agent runners by ensuring async `streamFn` passes through `pumpStreamWithRecovery`.
    *   **PR #94247:** Preserved paragraph separators across block-streamed deliveries to prevent formatting loss.
    *   **PR #95698:** Fixed cron isolated-agent runs experiencing model-pin bypasses, empty compaction, and fence self-disconnection.

*   **Performance & Polish:**
    *   **PR #96013:** Optimized Anthropic stream block indexing.
    *   **PR #96019:** Bound session log retention to prevent unbounded growth.
    *   **PR #96014:** Indexed displaced tool results for better retrieval.

## 4. Community Hot Topics
The following issues and PRs generated the most discussion, highlighting critical pain points in session stability and provider compatibility:

*   **[Diamond Lobster] Session State Migration (#88838):** *34 Comments.* High-level discussion on the core SQLite migration strategy. Users are closely watching the transition to the new accessor seam to ensure no data loss occurs during upgrades.
*   **[Platinum Hermit] Codex Turn-Completion Stall (#88312):** *17 Comments.* A major regression where Codex app-server turns stall with "stopped before confirming." This affects many Plus subscribers and is a top priority for stability.
*   **[Platinum Hermit] Cron Global State Contamination (#90991):** *14 Comments.* Reports of cron triggers causing system-wide overload due to global state leakage. This impacts automated reliability for heavy users.
*   **[Diamond Lobster] Anthropic Thinking Signature Replay (#92201):** *13 Comments.* Intermittent failures in Slack/embedded runners when replaying Anthropic thinking blocks.
*   **[Diamond Lobster] DeepSeek V4 Flash Incomplete Turns (#88657):** *10 Comments.* Specific provider regression where DeepSeek via OpenRouter returns incomplete turns in newer versions.

## 5. Bugs & Stability
Severity-ranked bugs reported or active today:

1.  **Critical: Session Lock Leaks & Deadlocks**
    *   **Issue #95833:** Subagent abort-settle fails to release `.jsonl.lock`, permanently breaking sessions. *(Fix PR pending)*
    *   **Issue #95701:** `video_generate` tasks deadlock between wake and complete, leaving tasks stuck in "running" status.
    *   **Issue #92043:** Compaction timeout is a single wall-clock limit across the pipeline, causing legitimate long compactions to fail and crash loops.

2.  **High: Message Loss & Delivery Failures**
    *   **Issue #92460:** Isolated cron completion announcer drops explicit delivery channels, leading to "Channel is required" errors.
    *   **Issue #86034:** Media generation succeeds, but completion delivery fails, misleading users into thinking generation failed.
    *   **Issue #76729:** Feishu replies disappear from webchat after compaction rotation due to dropped assistant messages.

3.  **Medium: Provider & Auth Regressions**
    *   **Issue #90288:** Non-Anthropic models outputting tool calls as plain text `[tool: exec]` instead of structured blocks.
    *   **Issue #95612:** `cli-backend` agents returning 401 auth failures while identical shell invocations work.
    *   **Issue #94432:** OpenAI/Codex OAuth failing with Cloudflare HTML 403 challenges.
    *   **Issue #95998:** `ensureGlobalUndiciEnvProxyDispatcher()` breaks COS chunked uploads via QQBot plugin.

4.  **Low: UX & Configuration**
    *   **Issue #93139:** Write tool/exec heredocs inserting literal `\n` instead of newlines.
    *   **Issue #94147:** macOS app `CLLocationManager` recreation causing TCC permission spam.

## 6. Feature Requests & Roadmap Signals
*   **Per-Channel Model Overrides (#53638):** Highly requested feature allowing different models for different chats/groups without manual runtime overrides. Status: Closed/Discussed.
*   **Antigravity CLI Support (#84527):** Request to replace deprecated `google-gemini-cli` with Antigravity CLI (`agy`) following Google I/O announcements. *(9 👍)*
*   **Isolated Cron Self-Disable (#84724):** Request to allow isolated cron jobs to disable themselves while preserving the job definition.
*   **Trusted Inbound Decoration (#95279):** Proposal for a secure contract to strip/dedup inbound messages without forgeable text heuristics.
*   **Telegram Quote/Reply as First-Class Contract (#88032):** Moving beyond runtime patches to a durable inbound contract for Telegram replies.

## 7. User Feedback Summary
*   **Frustration with Silent Failures:** Users are increasingly frustrated with "silent" failures where media generates but isn't delivered, or cron jobs fail without clear error logs (e.g., #92460, #86034).
*   **Regression Anxiety:** Frequent reports of features working in `2026.5.26` but breaking in `2026.5.27/28` or `2026.6.x` suggest a need for stricter regression testing, especially around model fallback chains and streaming parsers.
*   **Windows Compatibility Gaps:** Multiple issues highlight Windows-specific bugs, including path mangling in QMD memory backend (#92302), ACPX runtime spawn failures (#93465), and auto-update stale imports (#85844).
*   **Need for Visibility:** Users want better logging for model fallback decisions (#56979) and clearer distinction between `/new` and `/reset` commands (#77710).

## 8. Backlog Watch
Maintainers should prioritize these high-impact, long-standing, or complex issues:

*   **#88838:** Core session/transcript SQLite migration. This is a foundational architectural change affecting all users. Needs careful product decision and maintainer review.
*   **#84527:** Antigravity CLI integration. Time-sensitive due to Google's deprecation of Gemini CLI.
*   **#95724:** Memory indexing deduplication. Critical for performance in multi-agent shared workspace setups.
*   **#91363:** Isolated cron consistently failing with "LLM request failed." Affects reliability of scheduled tasks.
*   **#90404:** `acpx` TypeError preventing Claude Code ACP execution. Blocks a specific but growing use case for embedded coding agents.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-06-23
**Prepared by:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The 2026 open-source personal AI agent landscape is characterized by a shift from experimental prototypes to enterprise-grade stability and security. Projects are heavily focused on resolving critical infrastructure challenges, including session state integrity, provider compatibility regressions, and secure plugin runtimes. While feature velocity varies, there is a consensus on the necessity of robust scheduling (cron), cross-platform channel integration, and strict security hardening against prompt injection and supply chain attacks.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 195 | 500 | Stable (v2026.6.x) | High (Active) |
| **Hermes Agent** | 50 | 50 | Maintenance | Medium-High |
| **CoPaw** | 29 | 50 | Pre-v2.0 Merge | Medium (Stabilizing) |
| **ZeroClaw** | 50 | 50 | Stabilization | High (Architectural Shift) |
| **IronClaw** | 10 | 32 | Stable | Medium (Regression Risk) |
| **LobsterAI** | N/A | 3 (Merged) | Stale/Open Issues | Low (Maintenance) |
| **NanoBot** | 7 | 32 | Recent (v0.2.2) | Medium-High |
| **NanoClaw** | 0 | 9 | Dependency Lock | Low (Quiet) |
| **NullClaw** | 0 | 1 | Stable | Low (Minor Fix) |
| **Moltis** | 0 | 1 (Merged) | Stable | Low (Feature Complete) |
| **TinyClaw** | 0 | 0 | Inactive | N/A |
| **ZeptoClaw** | 0 | 0 | Inactive | N/A |

*\*Health Score based on issue resolution velocity, PR throughput, and community engagement signals.*

## 3. OpenClaw's Position
OpenClaw dominates the current landscape in terms of raw development velocity and community scale, with nearly 700 artifacts updated in 24 hours. Its primary advantage lies in its comprehensive channel adapter ecosystem (WhatsApp, Teams, QQBot, Mattermost) and deep focus on session state integrity. Unlike competitors that are still defining their core architectures, OpenClaw is in a critical stabilization phase, aggressively fixing regressions in model fallback chains and memory indexing. Its community is larger and more diverse, ranging from casual users to enterprise operators, whereas peers like NanoBot or Moltis cater to more niche or specific integration needs.

## 4. Shared Technical Focus Areas
*   **Session & State Integrity:** Nearly every active project (OpenClaw, NanoBot, ZeroClaw, CoPaw) is addressing bugs related to session locking, context window limits, and history persistence.
    *   *Specific Needs:* Preventing deadlocks (OpenClaw #95833), handling duplicate tool IDs (NanoBot #4442), and managing context trimming (ZeroClaw #5808).
*   **Provider Compatibility & Fallbacks:** Regressions in streaming and tool-use formats across different LLM providers (Anthropic, DeepSeek, OpenAI) are a universal pain point.
    *   *Specific Needs:* Handling non-standard tool call formats (OpenClaw #90288), fixing reasoning tag leakage (NanoBot #4465), and ensuring provider-specific authentication flows (Hermes #51276).
*   **Security Hardening:** There is a synchronized push to improve security postures.
    *   *Specific Needs:* Dependency CVE patching (Hermes #51305), preventing prompt injection (ZeroClaw #8215), and securing SSE streams (LobsterAI #1401).
*   **Scheduling Reliability:** Cron/job schedulers are failing consistently across projects.
    *   *Specific Needs:* Global state contamination (OpenClaw #90991), heartbeat noise (NanoBot #4410), and scheduler deadlocks (IronClaw #5148).

## 5. Differentiation Analysis
*   **Technical Architecture:**
    *   **ZeroClaw** is undergoing a radical architectural shift toward a WebAssembly-first plugin runtime and eliminating Node.js dependencies, prioritizing security and sandboxing above all else.
    *   **OpenClaw** focuses on breadth of integration and session robustness, acting as a central hub for diverse channels.
    *   **NanoBot** and **Moltis** are lighter, focusing on specific UI/UX enhancements (PWA, image tools) and modular skill expansion.
*   **Target Users:**
    *   **Hermes Agent** and **IronClaw** show strong signals toward enterprise/developer use cases (Vertex AI support, operator diagnostics, complex automation).
    *   **LobsterAI** and **NanoBot** appear more focused on consumer/desktop experiences (Electron apps, mobile PWAs).
*   **Feature Focus:**
    *   **CoPaw** is prioritizing testing infrastructure and v2.0 architectural consolidation.
    *   **NanoClaw** is focused on dependency locking and granular approval workflows.

## 6. Community Momentum & Maturity
*   **Rapid Iteration (High Velocity):** **OpenClaw**, **ZeroClaw**, and **Hermes Agent**. These projects are in active development sprints, merging critical fixes and exploring new architectural directions (Wasm for ZeroClaw, Enterprise features for Hermes).
*   **Stabilization & Refinement (Medium Velocity):** **CoPaw**, **NanoBot**, and **IronClaw**. These projects are closing out feature sets, fixing regressions, and preparing for major version releases (CoPaw v2.0, NanoBot v0.2.x).
*   **Maintenance Mode (Low Velocity):** **NanoClaw**, **NullClaw**, **Moltis**, **LobsterAI**. Activity is limited to dependency updates, minor bug fixes, or waiting on PR reviews.
*   **Inactive:** **TinyClaw**, **ZeptoClaw**. No significant activity detected.

## 7. Trend Signals
*   **Shift to Sandboxed Runtimes:** ZeroClaw’s RFC for Wasm-first plugins and CoPaw’s adoption of `bubblewrap` indicate industry-wide movement toward isolating agent code to prevent privilege escalation and supply chain attacks.
*   **Enterprise-Grade Observability:** Demand for detailed logging, model fallback visibility (OpenClaw #56979), and operator diagnostics (IronClaw #4801) suggests agents are moving from hobbyist tools to production-critical infrastructure.
*   **Multimodal & Rich Media Integration:** Support for video/audio in Teams (OpenClaw #94978), image sending in Moltis (#215), and Android ADB control in PicoClaw (#3157) shows a trend toward agents interacting with the physical and digital world beyond text.
*   **Regulatory & Privacy Compliance:** The push for secure messaging gateways (PicoClaw #3093) and strict session isolation (ZeroClaw #8215) reflects growing user concern over data privacy and compliance in personal AI assistants.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-06-23

## 1. Today's Overview
NanoBot demonstrates high velocity with **32 Pull Requests** updated and **7 Issues** addressed in the last 24 hours, indicating a very active development cycle surrounding the recent `v0.2.2` release. The project is currently balancing stability fixes (provider hardening, gateway lifecycle) with significant feature expansions (Mattermost support, PWA, Kimi Coding). Community engagement is strong, with multiple contributors addressing critical bugs in message handling and session management. The focus remains on improving the robustness of the agent loop and expanding channel integrations.

## 2. Releases
*   **v0.2.2**: Released recently, this version emphasizes **durability** and conversation integrity. Key improvements include segmented transcript storage to prevent file corruption, improved reliability for forked chats, and general hardening of the agent loop.
    *   *Note*: The release notes highlight that 140 PRs were merged in this cycle with 21 new contributors.

## 3. Project Progress
Several key areas saw advancement today through merged or updated PRs:
*   **Provider Hardening**: Significant work done on **DeepSeek** compatibility to handle null/empty content errors (#3869) and **Anthropic** to prevent duplicate `tool_use` IDs that cause session bricking (#4444, #4443).
*   **Gateway Stability**: Fixes applied to gateway lifecycle management, specifically handling cancelled tasks during shutdown (#4456) and ensuring correct process termination states (#4447).
*   **Documentation**: Runtime environment variables have been formally documented to reduce user configuration errors (#4462).
*   **New Integrations**: **Mattermost** channel support is being implemented (#4459), and **Kimi Coding Plan** provider support is added (#4464).
*   **WebUI Enhancements**: PWA support for mobile installation is in progress (#4458), and reasoning tag rendering is being fixed (#4466).

## 4. Community Hot Topics
The most discussed issues reflect a desire for cleaner UX and more robust agent behavior:
*   **[Bug] WebUI renders `<thinking/>` tags as visible text** (#4465): Users are frustrated by raw XML-like tags leaking into the chat interface. This is tied closely to PR #4466.
*   **[Enhancement] Telegram Bot API 10.1 Rich Messages** (#4413): Demand for advanced formatting capabilities in Telegram.
*   **[Bug] Heartbeat Cron Jobs Sending Unwanted Messages** (#4410): A regression where "nothing to report" updates are being sent despite previous configurations suppressing them. Fixed by PR #4412.
*   **[Enhancement] Read-Only Sessions** (#4271): Developers want to pin static resources (FAQs, guides) without consuming LLM tokens or triggering agent loops.

## 5. Bugs & Stability
*   **High Severity**:
    *   **Session Bricking via Duplicate Tool IDs**: Anthropic requests failing due to non-unique `tool_use` IDs, permanently breaking sessions (#4442). *Fix*: PR #4444 and #4443 address deduplication and guarding against stream misassembly.
    *   **Gateway Shutdown Crashes**: `RuntimeError` when exiting cancel scopes during MCP server reconnection failures (#4441). *Fix*: PR #4441 forces closure of generators.
*   **Medium Severity**:
    *   **Reasoning Tag Leakage**: `<thinking>` tags displayed as plain text in WebUI (#4465). *Fix*: PR #4466 normalizes these blocks.
    *   **Cron Job Noise**: Routine heartbeat responses sent despite user preference to suppress them (#4410). *Fix*: PR #4412 re-applies suppression logic.
*   **Low Severity**:
    *   **Type Coercion in Pairing Store**: Sender IDs not normalized to strings, potentially denying valid connections (#4433). *Fix*: PR #4433.

## 6. Feature Requests & Roadmap Signals
*   **PWA Mobile Support**: Multiple PRs (#4457, #4458) indicate a strong push to make the WebUI installable on mobile devices for a native-like experience.
*   **Mattermost Integration**: PR #4459 suggests an interest in enterprise/team chat platforms beyond Slack/Discord/Telegram.
*   **Read-Only Session Mode**: PR #4271 proposes a metadata flag to bypass LLM calls entirely for specific sessions, optimizing cost and latency for static info.
*   **Dream Skill Deduplication**: Issue #4467 highlights frustration with the "Dream" feature creating duplicate skills instead of updating existing ones. PR #4469 addresses this injection logic.
*   **Search History Tool**: PR #4399 introduces a read-only tool to recall past memory, suggesting a roadmap toward better long-term context retrieval.

## 7. User Feedback Summary
*   **Frustration with "Noisy" Agents**: Users are sensitive to unnecessary messages from cron jobs/heartbeats (#4410). They prefer silence when there is no actionable insight.
*   **Desire for Cleaner UI**: The visibility of internal model tags (`<thinking/>`) is seen as a bug rather than a feature, detracting from the professional look of the WebUI (#4465).
*   **Need for Reliability**: Reports of sessions "bricking" due to API errors (duplicate IDs) create anxiety about trustworthiness. Users need assurance that transient provider glitches don't destroy conversation history.
*   **Mobile Usability**: Interest in PWA features indicates users are accessing NanoBot frequently from phones and want a seamless, app-like feel.

## 8. Backlog Watch
*   **Issue #2305 [Feature] Support hiding reasoning step display**: While #4465 addresses *rendering* of thinking tags, this older issue requests a toggle to *hide* the reasoning block entirely if the user doesn't want to see it. This remains open with no recent activity.
*   **Issue #4467 [Enhancement] Dream duplicate skills**: Although PR #4469 addresses the technical injection, the underlying user workflow for managing workspace skills needs monitoring to ensure the fix holds up in production.
*   **Issue #4413 [Enhancement] Telegram Rich Messages**: No PR has yet been linked to this request. As Telegram updates its API, this feature gap may become more prominent.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest: 2026-06-23

### 1. Today's Overview
The Hermes Agent project exhibits extremely high activity levels, with 50 issues and 50 pull requests updated in the last 24 hours. Development is currently focused on stabilizing the desktop application, expanding gateway integrations (specifically WeChat and Feishu), and addressing critical security vulnerabilities in dependencies. While no new official releases were published today, the volume of merged fixes and feature enhancements indicates a robust sprint cycle aimed at improving stability for enterprise and power users.

### 2. Releases
**None.** No new versions were released today. However, several critical dependency updates and security patches were merged into the main branch (see PR #51305), which will likely be included in the next scheduled release.

### 3. Project Progress
Significant progress was made in the following areas today:
*   **Security & Dependencies:** PR #51305 addresses HIGH/CRITICAL CVEs in `starlette`, `python-multipart`, `cryptography`, and `tornado`, resolving deployment blockers identified in Issue #51292.
*   **Gateway & Integrations:**
    *   PR #50044 introduces web-based QR onboarding for WeChat (Weixin), parity with Telegram.
    *   PR #51302 and #51299 enhance Feishu integration with live card progress chains and message coalescing.
    *   PR #49538 upgrades the ByteRover memory provider to V4.
*   **Desktop & TUI:**
    *   PR #49037 advances "first-class projects" with sidebar, coding rail, and review pane features.
    *   PR #51304 fixes a critical crash where the gateway fails to start if the current working directory contains a Python package named `utils`, `proxy`, or `ui`.
    *   PR #50864 allows desktop builds from non-git checkouts (ZIP/Bootstrap).
*   **Tooling & Infrastructure:**
    *   PR #51293 optimizes browser setup for cloud environments.
    *   PR #51295 adapts the `computer_use` tool to `cua-driver` 0.6.x API changes on macOS.
    *   PR #51301 improves timing accuracy by switching to `time.monotonic()`.

### 4. Community Hot Topics
The following issues are driving significant discussion and demand:
*   **[Feature] Native Google Cloud Vertex AI Support** (Issue #13484): 9 comments, 12 👍. High interest in enterprise-grade provider support without workarounds.
*   **[Feature] Agent Profiles for Delegation** (Issue #9459): 7 comments, 17 👍. Strong community desire for custom orchestration harnesses similar to "Pantheon" architectures.
*   **[Feature] x86_64 macOS Build for Desktop** (Issue #42199): 9 comments, 1 👍. Persistent demand from Intel Mac users (pre-M1) who cannot run the current ARM64-only binary.
*   **[Feature] Desktop Font Size/Zoom Control** (Issue #40166): 8 comments, 7 👍. Accessibility and usability improvement for macOS desktop app.
*   **[Bug] Z.AI GLM-5.2 Rate Limiting on "Hermes Agent" Phrase** (Issue #47685): 5 comments. Specific provider-side filtering causing false 429 errors.

### 5. Bugs & Stability
Several critical and high-severity bugs were reported and addressed today:
*   **P1/Critical: Gateway Crash on Specific CWD** (Issue #51286): Gateway child process exits with code 1 if `utils/`, `proxy/`, or `ui/` directories exist in the working directory. **Fixed in PR #51304.**
*   **P1: Cron Jobs Not Firing** (Issue #51021): Scheduled tasks remain "scheduled" but never execute. Requires investigation into ticker/gateway communication.
*   **P2: Large Shell Output Forwarding** (Issue #50807): Agents forward massive shell outputs to providers without bounds, risking context window exhaustion.
*   **P2: PEP 668 `hermes update` Failure** (Issue #30594): Updates fail on system Python installations due to externally-managed environment restrictions.
*   **P2: Z.AI 429 Errors vs. Curl Success** (Issue #51276): Discrepancy between Hermes API client and standard HTTP clients for GLM-5.x models.
*   **Security: Container CVEs** (Issue #51292): HIGH/CRITICAL CVEs in v2026.6.19 image. **Mitigated in PR #51305.**
*   **UI/UX: Deleted Profile Icon Persistence** (Issue #49289): Ghost icons remain in the desktop profile rail after deletion.
*   **UI/UX: Local File Paths Blocked** (Issue #51239): Desktop app shows `[blocked]` for local file paths instead of allowing click-to-open.

### 6. Feature Requests & Roadmap Signals
*   **Multi-Profile Web Dashboard** (Issue #10674): Users request safe multi-profile switching in the web UI to match CLI capabilities.
*   **User-Configurable Runtime Approval** (Issue #51221): Request to expand the approval system beyond dangerous actions to include configurable user thresholds for other external actions.
*   **German Locale for Desktop** (Issue #51217): Request for `de` localization to support DACH region users.
*   **Microsoft Rewards Skill** (PR #51298): New skill for automating Edge/Bing rewards, indicating expansion into consumer automation niches.
*   **OpenViking Recall Prefetch** (PR #48927): Advanced memory retrieval strategies are being prioritized.

### 7. User Feedback Summary
*   **Desktop Usability:** Users frequently cite accessibility issues (zoom, fonts) and platform limitations (Intel Mac support) as major pain points. The desktop app is gaining traction but lacks parity with CLI flexibility.
*   **Provider Reliability:** Significant frustration expressed regarding Z.AI/GLM rate limiting and authentication errors after secret rotation (Issue #50755).
*   **Enterprise Needs:** Strong signal for enterprise features like Vertex AI support, secure dashboard hosting (reverse proxy/Tailscale support in Issue #34390), and robust cron scheduling.
*   **Integration Gaps:** Users appreciate the rapid expansion of messaging platforms (WeChat, Feishu) but want seamless onboarding (QR codes) and consistent feature sets across all gateways.

### 8. Backlog Watch
*   **Intel macOS Support** (Issue #42199 / #40471): Duplicate issues highlight a blocked user segment. Maintainers need to decide on building universal binaries or providing separate x86_64 builds.
*   **Cron Execution Failures** (Issue #51021 / #4707): Recurring issues with cron job reliability and profile-scoped launchd configurations suggest a deeper architectural flaw in the scheduler/gateway handoff.
*   **System Python Compatibility** (Issue #30594): The `hermes update` mechanism remains fragile on bare-metal or system Python installs, limiting adoption in minimal containerized environments.
*   **Vision Tool Broken on macOS** (PR #51295): Although a fix PR exists, the underlying issue with `cua-driver` 0.6.x compatibility suggests ongoing maintenance burden for the computer-use toolset.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-06-23
**Source:** github.com/sipeed/picoclaw

### 1. Today's Overview
The PicoClaw project exhibits high development velocity today, with 18 pull requests updated and 2 issues addressed in the last 24 hours. Activity is heavily skewed toward maintenance, dependency updates, and security hardening rather than major feature releases. No new versions were released today, but significant stability improvements were merged, particularly regarding WhatsApp connectivity and session history integrity. The community remains engaged, though some long-standing feature requests for secure messaging protocols remain open without immediate resolution.

### 2. Releases
*   **No new releases.** The latest version referenced in user reports is v0.2.9.

### 3. Project Progress
Several critical fixes and enhancements were advanced today:
*   **WhatsApp Stability (Merged):** PR #3162 was closed, fixing automatic WebSocket disconnections by implementing reconnection logic with exponential backoff and async message processing.
*   **Session History Integrity (Open):** PR #3115 addresses a corruption bug where generic tool outputs (e.g., `read_file`) containing base64 image strings were mistakenly parsed as media attachments.
*   **Security Hardening (Open):** PR #3161 ensures that `exec` deny patterns remain active even when custom allow rules match, preventing potential privilege escalation via payload injection.
*   **Authentication Security (Open):** PR #3160 rejects cross-site launcher setup requests to protect first-run password stores.
*   **Dependency Updates:** Multiple Dependabot PRs (#3100, #3101, #3103, #3104, #3105) bumped frontend dependencies including Vite, ESLint, Shadcn, and TypeScript-Eslint.

### 4. Community Hot Topics
*   **[FEATURE] Secure Messaging Gateways (Issue #3093):**
    *   *Link:* [sipeed/picoclaw Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)
    *   *Analysis:* Users are requesting integration with privacy-focused protocols like SimpleX, Tox, or Wire. This indicates a growing demand for decentralized and end-to-end encrypted communication channels beyond standard webhooks or social media APIs.
*   **[BUG] Task Repetition/Looping (Issue #3159):**
    *   *Link:* [sipeed/picoclaw Issue #3159](https://github.com/sipeed/picoclaw/issues/3159)
    *   *Analysis:* A user reported the AI repeating previous tasks (US news) before answering the current one (France news). This suggests potential context window management issues or prompt injection vulnerabilities in the current reasoning engine.

### 5. Bugs & Stability
*   **High Severity:** Issue #3159 reports erratic task execution loops. While no fix PR is linked yet, this affects core usability.
*   **Medium Severity:** PR #3115 identifies a session corruption bug involving inline data URLs. This is a critical data integrity issue for users relying on generic file reading tools.
*   **Low Severity/Maintenance:** Several PRs (#3053, #3091, #3131) address unsafe type assertions in Go code (`sync.Map` loads, provider options, tool schemas). These prevent potential panics and improve runtime stability.

### 6. Feature Requests & Roadmap Signals
*   **Android ADB Control (PR #3157):** An experimental tool for remote Android device operation (screenshots, UI interaction) is under review. This signals a roadmap direction toward comprehensive mobile device automation and IoT integration.
*   **Token Usage Visibility (PR #3156):** A feature to emit per-turn LLM token usage allows for better cost tracking and performance monitoring, appealing to power users and enterprise deployments.
*   **Remote Agent Mode (PR #3118):** Adding WebSocket support for remote agents expands deployment flexibility, allowing PicoClaw to act as a headless backend for other applications.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by context leakage (repeating previous tasks) and unstable WhatsApp connections.
*   **Use Cases:** The project is being used for complex multi-step information retrieval (news aggregation) and increasingly for device automation (Android ADB interest).
*   **Satisfaction:** The rapid response to security vulnerabilities (cross-site requests, exec patterns) suggests a healthy feedback loop between maintainers and security-conscious users. However, the lack of simple privacy-focused chat integrations remains a gap.

### 8. Backlog Watch
*   **Stale/Unmerged PRs:**
    *   PR #3118 (Remote WebSocket Agent): Open since June 12.
    *   PR #3115 (Inline Data URL Fix): Open since June 12.
    *   PR #3157 (Android ADB Tool): Open since June 22.
*   **Long-Standing Issues:**
    *   Issue #3093 (SimpleX/Tox Support): Open since June 10, with low engagement (3 comments). Maintainers should assess feasibility or provide a timeline for third-party protocol support.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-23
**Source:** github.com/qwibitai/nanoclaw

## 1. Today's Overview
NanoClaw exhibits high development velocity today, driven primarily by a coordinated dependency update cycle rather than new feature launches. The project maintained zero issues opened or closed in the last 24 hours, suggesting stable operational health despite the influx of pull requests. Nine PRs were updated, with eight remaining open and one closed, indicating an active review phase for recent contributions. The primary focus is ensuring type safety and compatibility across the core `chat` SDK, channel adapters, and provider registries by locking versions to `4.29.0`.

## 2. Releases
No new releases were published today. The latest activity involves preparatory changes for an upcoming patch or minor release, specifically version-locked dependencies.

## 3. Project Progress
*   **Dependency Locking (Core & Channels):** Three companion PRs (#2834, #2835, #2836) were created to pin the `@anthropic-ai/sdk` (referred to as `chat` SDK) to exact version `4.29.0`. This ensures that the core bridge, channel adapters (`@chat-adapter/*`), and provider registries remain strictly compatible, preventing `createChatSdkBridge` typecheck failures caused by version mismatches.
    *   [PR #2834](https://github.com/nanocoai/nanoclaw/pull/2834): Core `chat` SDK pin.
    *   [PR #2835](https://github.com/nanocoai/nanoclaw/pull/2835): Channel adapters and install scripts bump.
    *   [PR #2836](https://github.com/nanocoai/nanoclaw/pull/2836): Provider registry bump.
*   **Container Optimization:** PR #2771 proposes adding `--shm-size=1g` and `--init` to agent containers. This addresses performance bottlenecks for headless Chromium instances (`agent-browser`) which previously suffered from insufficient shared memory (default 64MB) and zombie process issues.
*   **Approval Workflow Enhancement:** PR #2832 introduces a "Reject with reason" feature for module approval cards, allowing approvers to provide feedback to requesting agents for better adaptation loops.
*   **Cleanup Logic:** PR #2830 addresses a bug where deleted checkouts left behind dead `launchd`/`systemd` registrations, causing OS-level errors when attempting to launch non-existent binaries.

## 4. Community Hot Topics
*   **IMAP/SMTP Email Integration (PR #1235):** Although last updated on 2026-06-22, this long-standing PR remains a key community interest. It proposes exposing six MCP tools (`list_accounts`, `list_emails`, etc.) to allow agents to manage email directly. This indicates a strong user demand for native email automation capabilities within the agent loop.
    *   [PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)
*   **CLI-Derived Dashboard (PR #2795):** A utility skill proposed by `leetwito` aims to provide a read-only dashboard derived from CLI outputs. This suggests users are looking for better observability and monitoring tools for their agent runs without modifying core source code.
    *   [PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795)
*   **Hook Surface Guard (PR #2833):** Closed today, this PR likely addressed a specific guideline violation or technical constraint regarding hook surfaces, reflecting ongoing maintenance of contribution quality.
    *   [PR #2833](https://github.com/nanocoai/nanoclaw/pull/2833)

## 5. Bugs & Stability
*   **Dead Peer Service Registrations:** PR #2830 identifies a critical stability issue where uninstalling NanoClaw checkouts without running the uninstaller leaves orphaned system service files. This leads to repeated OS errors. The fix involves logic to reap registrations whose binaries no longer exist.
    *   [PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830)
*   **Chromium Memory Constraints:** While not a bug report per se, PR #2771 highlights a stability/performance regression risk for agents using `agent-browser` due to Docker's default `/dev/shm` size being too small for modern headless Chromium.
    *   [PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771)

## 6. Feature Requests & Roadmap Signals
*   **Granular Approval Feedback:** The inclusion of "Reject with reason" in PR #2832 signals a roadmap shift toward more interactive and educational human-in-the-loop workflows. Agents currently receive blunt declines; providing reasons allows them to self-correct, improving autonomous success rates.
*   **Native Email Support:** The persistent presence of PR #1235 suggests email integration is a high-priority feature request that users are eagerly awaiting for merge.
*   **Container Performance Tuning:** The push for `--shm-size` and `--init` (PR #2771) indicates a focus on robustness for complex agent tasks involving browser automation.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing frustration with system clutter after uninstalling NanoClaw (dead services) and performance issues with browser-based agents crashing or slowing down due to memory limits.
*   **Satisfaction/Dissatisfaction:** The community appears satisfied with the modular approach, evidenced by the steady stream of "Skill" PRs (e.g., Dashboard, Email). However, there is implicit dissatisfaction with the current approval workflow's lack of nuance, driving the request for reasoned rejections.

## 8. Backlog Watch
*   **IMAP/SMTP Integration (PR #1235):** Created on 2026-03-18 and last updated on 2026-06-22, this PR has been open for over three months. It requires maintainer attention to move from review to merge, as it represents a significant functional expansion for the platform.
    *   [PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)
*   **CLI Dashboard Skill (PR #2795):** Open since 2026-06-17, this utility skill is waiting for final review. It complements the core functionality and should be prioritized if it aligns with the current release scope.
    *   [PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-06-23
**Source:** github.com/nullclaw/nullclaw

## 1. Today's Overview
The NullClaw project is currently in a state of low activity, with no new issues resolved or releases published in the last 24 hours. Development momentum is focused on a single open pull request addressing a critical persistence bug within the Matrix integration module. The absence of closed issues or merged PRs suggests a quiet maintenance day, likely preceding a potential release cycle once current fixes are validated. Overall project health appears stable, with no critical outages or widespread community concerns reported today.

## 2. Releases
*   **No new releases.** There have been no version updates or changelogs published in the last 24 hours.

## 3. Project Progress
*   **Open Pull Request:** #968 `[fix(matrix): persist next_batch across restart + test env isolation]`
    *   **Status:** Open (Created/Updated: 2026-06-22)
    *   **Author:** addadi
    *   **Progress Detail:** This PR addresses a significant regression where the Matrix channel failed to resume message history correctly after a service restart. By fixing the storage of the `/sync` cursor (`next_batch`), it ensures that the homeserver does not return a redundant initial sync, thereby optimizing performance and preventing duplicate message processing.

[View PR #968](https://github.com/nullclaw/nullclaw/pull/968)

## 4. Community Hot Topics
*   **Matrix Sync Persistence (#968):**
    *   **Activity:** 0 comments, 0 reactions.
    *   **Analysis:** While currently lacking community engagement, this issue addresses a fundamental reliability concern for users relying on continuous Matrix chat integration. The need for persistent state across restarts is a common requirement for robust AI agent architectures, suggesting this fix will be highly valued once merged.

## 5. Bugs & Stability
*   **High Severity Bug Fixed (Pending Merge):**
    *   **Issue:** In-memory only storage of Matrix `next_batch` token causing full resyncs on every restart.
    *   **Impact:** Causes unnecessary load on the Matrix homeserver and delays in message synchronization upon agent reboot.
    *   **Fix Status:** Addressed in PR #968. No new crash reports or stability regressions were logged today.

## 6. Feature Requests & Roadmap Signals
*   **Test Environment Isolation:**
    *   **Signal:** PR #968 also introduces "test env isolation," indicating a roadmap commitment to improving CI/CD reliability and testing infrastructure for the Matrix module. This suggests future enhancements may focus on modular testing capabilities and ensuring feature parity between development and production environments.

## 7. User Feedback Summary
*   **Current Sentiment:** Neutral/Quiet.
*   **Pain Points:** Users experiencing frequent restarts of the NullClaw agent were likely frustrated by the loss of Matrix conversation context due to the missing `next_batch` persistence. The proposed fix directly addresses this workflow interruption.
*   **Satisfaction:** No negative feedback or support tickets were recorded today, implying the majority of users may not yet be impacted or are waiting for the fix to be merged.

## 8. Backlog Watch
*   **Pull Request #968:** As the sole active development item today, this PR requires maintainer review and merge. It is the primary blocker for stabilizing the Matrix integration module. No other long-unanswered high-priority issues were identified in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-06-23

## 1. Today's Overview
The IronClaw project exhibits high development velocity today with 32 Pull Requests and 10 Issues updated in the last 24 hours, indicating an intense sprint phase focused on stability and architectural refactoring. While no new releases were published, significant progress was made in decomposing the monolithic `ironclaw_reborn_composition` crate and resolving critical latency issues in the Reborn agent loop. However, the team is currently battling regressions in the web/research task initialization and flaky CI tests, suggesting that recent merges may have introduced instability that needs immediate attention before the next release candidate.

## 2. Releases
*   **No new releases.**
    *   Note: Several major feature branches (e.g., Skill Extraction #5061, Hosted Single-Tenant Postgres #5081) were merged or updated recently, potentially signaling an upcoming release cycle soon.

## 3. Project Progress
**Merged/Closed PRs:**
*   **#5061: Skill Extraction & Self-Evolution** (Merged) – Introduced Hermes-style skill extraction, allowing the agent to distill transcripts into reusable `SKILL.md` files after successful turns.
*   **#5081: Hosted Single-Tenant Postgres Profile** (Closed/Merged) – Added a dedicated profile for hosted previews using PostgreSQL-backed durable state, aligning with local-dev SSO/tool wiring.
*   **#5141: Trigger Permanent Failures** (Closed/Merged) – Fixed logic where `Once` triggers would re-fire indefinitely after permanent pre-submission failures; now completes properly.
*   **#5142: Turn-State Write Convoy** (Closed/Merged) – Removed per-user turn-state write gates, replacing them with versioned CAS and jittered backoff to prevent write collisions.

**In-Progress Key Features:**
*   **#5149: Progressive Tool Disclosure** – Addressing critical latency by reducing prompt size from ~25.8k tokens to only necessary schemas, mitigating NEAR AI 120s timeouts.
*   **#5137: HTTP Kit Extraction** – Beginning the decomposition of the large `composition` crate into smaller, manageable modules.
*   **#5133: Automation Deletion Support** – Adding `DELETE` endpoints and UI controls for managing Reborn automations.

## 4. Community Hot Topics
*   **#5139: Reborn Regression: Web/Research Tasks Hang** (Open)
    *   *Link:* [Issue #5139](https://github.com/nearai/ironclaw/issues/5139)
    *   *Analysis:* High severity. Users report tasks timing out with zero LLM calls after recent main branch commits. This blocks daily benchmarks (PinchBench), indicating a critical breakage in the task execution pipeline.
*   **#5151: Claude Fails to Create Reborn Automation** (Open)
    *   *Link:* [Issue #5151](https://github.com/nearai/ironclaw/issues/5151)
    *   *Analysis:* Model-specific issue with `claude-sonnet-4-5` failing to call `builtin.trigger_create`, instead using irrelevant tools like `echo` or `shell`. Suggests a need for better prompt engineering or tool guidance for newer models.
*   **#5148: Turn Scheduler Heartbeat Deadlock** (Open)
    *   *Link:* [Issue #5148](https://github.com/nearai/ironclaw/issues/5148)
    *   *Analysis:* Concurrency bug where the scheduler heartbeat deadlocks while the executor holds an async store lock. This impacts system reliability during extension installs and other long-running transitions.

## 5. Bugs & Stability
*   **Critical: Task Init Timeout (Regression)**
    *   *Issue:* [#5139](https://github.com/nearai/ironclaw/issues/5139)
    *   *Detail:* `reborn run failed: reborn turn timed out` with zero tool/LLM calls. Affected 21/147 tasks on PinchBench. Likely caused by recent commit range `2b2ccc55→704fcd43`.
*   **High: Scheduler Deadlock**
    *   *Issue:* [#5148](https://github.com/nearai/ironclaw/issues/5148)
    *   *Detail:* Async store lock contention between scheduler heartbeats and executor transitions causes indefinite hangs.
*   **Medium: Flaky CI Test**
    *   *Issue:* [#5147](https://github.com/nearai/ironclaw/issues/5147)
    *   *Detail:* `trigger_poller_does_not_submit_turn_for_unpaired_actor` fails ~1 in 3 times, blocking the merge queue.
*   **Low: UI Missing Deactivate Button**
    *   *Issue:* [#5146](https://github.com/nearai/ironclaw/issues/5146)
    *   *Detail:* No visible button to deactivate extensions in the WebUI.
*   **Low: Provider Card Displays None**
    *   *Issue:* [#5144](https://github.com/nearai/ironclaw/issues/5144)
    *   *Detail:* NEAR AI provider card shows empty Base URL when using defaults.

## 6. Feature Requests & Roadmap Signals
*   **Global Auto-Approve Settings**
    *   *Signals:* Issues #4959 and #4958 were closed, and PR #5068 wired the WebUI for global auto-approve and per-tool permissions. This indicates a strong push toward granular, user-controllable approval workflows without requiring restarts.
*   **Operator Diagnostics & Logging**
    *   *Signals:* Multiple PRs (#4801, #4859, #4860, #4804) focus on operator setup, diagnostics, log tailing, and lifecycle management. This suggests a roadmap toward more robust enterprise-grade operational tooling for Reborn instances.
*   **Skill Self-Evolution**
    *   *Signals:* Merged PR #5061 introduces automatic skill extraction. Future updates will likely focus on refining how these skills are stored, retrieved, and injected into contexts.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the "black box" nature of recent regressions where tasks hang without error logs (zero LLM calls). The lack of UI controls to deactivate extensions is also noted as a usability gap.
*   **Use Cases:** Heavy usage of Reborn for automated research and web tasks (PinchBench context). There is a growing demand for reliable, persistent automation (triggers) and better integration with external services like GSuite and Gmail (PR #5150, #5136).
*   **Satisfaction:** The community appreciates the rapid iteration on core stability (CAS writes, trigger fixes) and the introduction of advanced features like skill extraction. However, the frequency of merge-queue blockages due to flaky tests is a concern.

## 8. Backlog Watch
*   **#4108: Nightly E2E Failed** (Open)
    *   *Link:* [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
    *   *Status:* Persistent failure in the Nightly E2E workflow. Requires investigation to ensure baseline stability for new contributions.
*   **#5120: Unify Gate Declined Semantics** (Open)
    *   *Link:* [Issue #5120](https://github.com/nearai/ironclaw/issues/5120)
    *   *Status:* Technical debt regarding inconsistent naming/state handling for declined gates across auth, approval, and activity projections. Needs resolution to prevent future UI/backend confusion.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-23
**Source:** GitHub (netease-youdao/LobsterAI)

### 1. Today's Overview
The LobsterAI project demonstrates robust development velocity on June 23, 2026, with significant activity centered around the "OpenClaw" subsystem and core stability fixes. While no new official releases were published today, the team successfully merged three pull requests related to testing alignment and plugin compilation, indicating active maintenance of the backend infrastructure. Community engagement remains high, with ongoing discussions regarding critical startup regressions in version 4.1 and security improvements in request handling. The project appears healthy, balancing immediate bug fixes with long-term architectural refinements.

### 2. Releases
*   **No new releases.**
*   *Note:* Dependabot has initiated updates for the Electron group (PR #1277), upgrading `electron` from 40.2.1 to 42.4.0 and `electron-builder`, which may precede a future minor release once tested.

### 3. Project Progress
Several key areas advanced today through merged/closed Pull Requests:
*   **OpenClaw Plugin Infrastructure:** PR #2186 was merged to fix the compilation of the NIM plugin runtime entry, ensuring consistent preparation paths for TypeScript plugins. This stabilizes the plugin ecosystem for users relying on NIM channels.
*   **Testing & Metadata Alignment:** PR #2187 aligned OpenClaw metadata expectations, updating tests for reasoning-capable models and history reconciliation. This ensures that newer model capabilities are correctly reflected in the UI and backend logic.
*   **Security Hardening:** PR #1401 addresses a critical security vulnerability where predictable Request IDs could allow attackers to subscribe to other users' SSE data streams. The fix replaces `Math.random()` with `crypto.randomUUID()`, enhancing user privacy and data isolation.

### 4. Community Hot Topics
*   **Critical Startup Failure in v4.1 (Issue #1400):**
    *   **Link:** [Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400)
    *   **Analysis:** A user reports that upgrading from v3.30 to v4.1 causes infinite restart loops and prevents custom LLM configurations (Qwen3.5-plus) from loading. This indicates a severe regression in the gateway initialization process and configuration parsing logic. The issue has garnered attention due to its severity ("critical bug") and impact on usability, suggesting a need for urgent hotfix or rollback guidance.
*   **Security Vulnerability in SSE Streams (PR #1401):**
    *   **Link:** [PR #1401](https://github.com/netease-youdao/LobsterAI/pull/1401)
    *   **Analysis:** The community values security transparency. The identification of a pseudo-random number generator flaw affecting stream isolation highlights a growing awareness among contributors regarding data privacy in multi-user environments.

### 5. Bugs & Stability
*   **High Severity: Gateway Infinite Loop (Issue #1400):**
    *   **Description:** After upgrading to v4.1, the application enters a startup crash loop. Custom LLM integrations fail to initialize due to conflicts with default auto-configurations.
    *   **Status:** Open/Stale. No immediate fix PR linked.
    *   **Impact:** Blocks usage for affected users. Requires investigation into the upgrade path and gateway dependency resolution.
*   **Medium Severity: File Attachment Loss (PR #1402):**
    *   **Description:** Previously, selecting multiple files in the coworker dialog resulted in only the last file being attached due to closure issues in the `addAttachment` function.
    *   **Status:** Fix provided in PR #1402 (Open). This resolves a data loss bug in the collaboration feature.
*   **Low Severity: i18n Missing Key (PR #1403):**
    *   **Description:** The "delete" action lacked translation entries, causing English text to appear in localized interfaces.
    *   **Status:** Fix provided in PR #1403 (Open). Minor cosmetic issue affecting UX consistency.

### 6. Feature Requests & Roadmap Signals
*   **Improved Time Picker UX (PR #1404):**
    *   **Link:** [PR #1404](https://github.com/netease-youdao/LobsterAI/pull/1404)
    *   **Signal:** Users are requesting better native UI components for scheduled tasks. The PR proposes replacing native `<input type="time">` and `<select>` elements with custom-styled controls to match the app's theme. This suggests a roadmap focus on polishing the Electron-specific UI experience rather than just functional parity.
*   **Fallback Notification Channels (PR #1406):**
    *   **Link:** [PR #1406](https://github.com/netease-youdao/LobsterAI/pull/1406)
    *   **Signal:** Enhancing reliability in notification systems. Ensuring that IM channel lists are populated even when filters are empty improves the robustness of the scheduler feature.

### 7. User Feedback Summary
*   **Pain Points:** The primary dissatisfaction stems from the v4.1 upgrade experience. Users expect seamless migrations, but the current state involves broken gateways and disabled LLM integrations. The user in Issue #1400 expresses frustration ("completely paralyzed"), indicating a high risk of churn if not resolved quickly.
*   **Positive Signals:** Contributors are actively engaging with security and internationalization, showing that the community cares about both safety and accessibility. The detailed reporting in Issue #1400, including workarounds tried (logging out/in), helps maintainers diagnose the issue.

### 8. Backlog Watch
*   **Issue #1400 (Critical):** Needs immediate maintainer attention. The combination of startup crashes and LLM configuration failures in a major version upgrade requires a prioritized response.
*   **PRs #1401-#1406 (Open/Stale):** Several PRs created on 2026-04-03 are still marked as "stale" as of 2026-06-23. Maintainers should review these for merging, particularly PR #1401 (Security) and PR #1402 (Bug Fix), to reduce technical debt and improve user trust.
*   **Dependabot PR #1277:** Monitor this dependency update for potential breaking changes in Electron APIs before merging.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-06-23

## 1. Today's Overview
The Moltis project exhibits low immediate activity on June 23, 2026, with no new issues opened and no new releases published in the last 24 hours. However, significant maintenance progress is evident through the merging of Pull Request #215, which closes a feature gap regarding image delivery. The repository remains stable with zero open active issues requiring urgent attention, suggesting a healthy, albeit currently quiet, development cycle focused on consolidating recent enhancements.

## 2. Releases
No new versions have been released by the Moltis team in the last 24 hours. Users should continue relying on the latest available stable build for production environments.

## 3. Project Progress
*   **Merged Feature:** PR #215 was merged/closed today, introducing the `send_image` tool. This enhancement allows Moltis skills to deliver local image files (PNG, JPEG, GIF, WebP) directly to channel targets such as Telegram.
    *   **Technical Detail:** The implementation reuses the existing screenshot pipeline, returning a `data:` URI in the `screenshot` key, which the chat runner automatically processes. It also supports optional captions.
    *   **Link:** [PR #215](https://github.com/moltis-org/moltis/pull/215)

## 4. Community Hot Topics
*   **Top Activity:** PR #215 is the primary focus of community interest today due to its closure. While it has zero recorded reactions (`👍: 0`) at this snapshot, the feature addresses a common need for rich media support in AI agent channels.
*   **Underlying Need:** The inclusion of this feature indicates strong user demand for multimodal capabilities beyond text, specifically for visual feedback or documentation sharing within chat interfaces like Telegram.

## 5. Bugs & Stability
*   **Reported Issues:** No bugs, crashes, or regressions were reported via new issues today.
*   **Status:** The codebase appears stable with no immediate stability concerns flagged by the community in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
*   **Recent Signal:** The completion of PR #215 suggests that "rich media support" was a high-priority item recently addressed.
*   **Future Prediction:** With image delivery now supported via tools, future roadmap items may likely focus on video handling or interactive media components, given the trend toward more immersive AI-agent interactions.

## 7. User Feedback Summary
*   **Sentiment:** Neutral to Positive. The successful merge of the `send_image` tool resolves a functional limitation for users deploying skills on image-capable platforms.
*   **Pain Points:** Prior to this merge, users likely faced friction when attempting to share visual assets programmatically. The reuse of the screenshot pipeline suggests a desire for consistent API patterns across different media types.

## 8. Backlog Watch
*   **Current Status:** There are no open issues or pending PRs requiring immediate maintainer attention as of today.
*   **Note:** The absence of open tickets suggests either a highly responsive maintenance team clearing backlog quickly or a period of lower community engagement. Maintainers should monitor for new feature requests related to video or audio delivery in the coming weeks.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-06-23
**Source:** agentscope-ai/CoPaw (QwenPaw)

## 1. Today's Overview
The CoPaw project exhibits high development velocity with 50 Pull Requests and 29 Issues updated in the last 24 hours. Activity is heavily concentrated on stability fixes for the cron scheduler, memory management, and frontend rendering performance, alongside a significant architectural merge toward version 2.0. Although no new official releases were published today, the closure of several critical bugs and the merging of extensive unit test suites indicate a push toward stabilizing the codebase prior to major version transitions.

## 2. Releases
*   **No new releases.**
*   **Note:** PR #5429 bumped the version to `1.1.12.post2`, but it was merged without a corresponding public release artifact listed in the overview. The main branch has also seen a major merge event (PR #5412) integrating `upstream/main` into the `dev/agentscope2.0` branch, signaling a shift toward the 2.0 architecture.

## 3. Project Progress
**Key Merged/Closed Items:**
*   **Architecture Migration:** PR #5412 merged 170 commits from `main` into `dev/agentscope2.0`, resolving conflicts to prioritize the 2.0 architecture.
*   **Testing Infrastructure:** Significant progress on unit testing coverage:
    *   PR #5419 added unit tests for the `runner` module.
    *   PR #5404 added unit tests for the `crons` module.
    *   PR #5406 introduced 120+ frontend test cases for Zustand stores and React hooks.
    *   PR #5372 added e2e UI test coverage for 6 modules.
*   **Feature Enhancements:**
    *   PR #5314 implemented streaming responses for Discord (message edits + typing indicators).
    *   PR #5346 enabled tool execution within Docker environments.
    *   PR #5310 integrated `bubblewrap` for enhanced Linux sandbox isolation.
    *   PR #5426 fixed a default misfire time issue for Dream tasks.

## 4. Community Hot Topics
*   **Memory Management & Lifecycle:** Issue #3995 highlights long-standing pain points regarding memory file bloat and lack of lifecycle management. This is supported by Issue #5316 requesting recency-aware ranking. *Underlying Need:* Users require automated maintenance of long-term memory to prevent performance degradation and irrelevant retrieval.
*   **Mobile Responsiveness:** Issue #4635 and PR #5394/#5425 focus heavily on mobile UI issues. While PRs have addressed Plugin Manager layouts, the broader WebUI console still faces criticism for mobile usability. *Underlying Need:* Accessibility for users interacting with agents via mobile browsers or lightweight clients.
*   **Cron Scheduler Reliability:** Multiple issues (#5064, #5398, #5235) report cron jobs failing to trigger or stopping mid-execution. *Underlying Need:* High reliability is critical for autonomous agents that rely on scheduled tasks for memory updates and routine workflows.

## 5. Bugs & Stability
**Critical & High Severity:**
1.  **Frontend Crash on Large Tool History:** Issue #5401 reports the console crashing/whiting out when loading sessions with extensive tool-use history due to improper handling of `type: "data"` content blocks. *Status:* Open. *Fix:* Likely requires frontend component refactoring in `getPrimaryTraceBlock`.
2.  **Cron Scheduler Failures:** Issue #5398 and #5064 describe cron jobs stopping dispatching or never triggering. *Status:* Mixed (some closed, some open). *Fix:* PR #5347 addresses invalid job entries on startup; PR #5426 fixes misfire times.
3.  **LLM Timeout Hangs:** Issue #5411 describes the interface hanging indefinitely after idle periods due to LLM acquisition timeouts. *Status:* Open. *Impact:* Blocks user interaction until process restart.
4.  **Reasoning Content Visibility:** Issue #5416/#5415 notes that models returning text in `reasoning_content` instead of `content` result in empty visible replies. *Status:* Closed/Fixed logic identified.

**Medium Severity:**
*   **Custom Provider Function Calling:** Issue #5345 reports that custom OpenAI-compatible providers (e.g., OMLX) fail to trigger function calling.
*   **Shell Command Parsing:** Issue #5373 highlights failures in parsing shell special characters (pipes, redirections).
*   **Internal Server Error on Start:** Issue #5379 reports `get_remote_addr` errors causing startup failures.

## 6. Feature Requests & Roadmap Signals
*   **Automatic Model Failover:** Issue #5351 requests robust routing/failover logic in `model_factory.py` to handle cloud/local slot switching automatically.
*   **Agent-Space Decoupling:** Issue #5392 proposes decoupling agents from workspaces to allow agent reuse across different contexts.
*   **Drag-and-Drop Uploads:** Issue #5420 requests native drag-and-drop file upload support in the chat input.
*   **Kimi Coding API Support:** Issue #5427 seeks native support for Anthropic-compatible endpoints (specifically Kimi K2 Code) which currently fail with OpenAI-compatible wrappers.
*   **Prediction:** The roadmap appears focused on **stabilization** (unit tests, crash fixes) and **architecture consolidation** (v2.0 merge). Advanced features like failover and decoupling will likely follow once the core stability issues are resolved.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Configuration Persistence:** Users are frustrated that disabling built-in skills resets upon every upgrade (Issue #5262).
    *   **UI/UX Friction:** Slow switching between agents/chats (Issue #5421) and browser autofill interference on config pages (Issue #5403) degrade the experience.
    *   **Thinking Process Interference:** Users of DeepSeek and StepFun models experience hangs during the "thinking" phase (Issue #5328) or see no output because the text is hidden in reasoning fields (Issue #5416).
*   **Satisfaction:** Positive feedback is implied by the volume of engagement on testing and sandboxing features (PRs #5310, #5406), suggesting a technical community eager to contribute to stability and security.

## 8. Backlog Watch
*   **Issue #3995 (Memory Lifecycle):** Open since May 2026. Critical for long-term user retention but lacks a dedicated PR.
*   **Issue #5351 (Model Failover):** Open since June 21. Important for production-grade reliability but currently unaddressed.
*   **Issue #5379 (Startup Crash):** Open since June 22. Prevents new installations from working on certain configurations; needs immediate triage.
*   **Issue #5401 (Frontend Crash):** Open since June 23. High impact on power users with long conversation histories.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest: 2026-06-23**

### 1. Today's Overview
ZeroClaw exhibits high development velocity with 50 issues and 50 pull requests updated in the last 24 hours, indicating a period of intense architectural refinement and stability hardening. The project is actively transitioning toward a WebAssembly-first plugin runtime and eliminating Node.js dependencies, signaling a major shift in its core technology stack. While no new releases were published today, significant progress has been made on security supply chains, crash resilience, and context management bugs. The community engagement is robust, with maintainers closely tracking RFCs and high-risk bug fixes.

### 2. Releases
*   **No new releases.** The project is currently in a stabilization phase leading up to v0.8.3 and planning for v0.9.0.

### 3. Project Progress
*   **Merged/Closed PRs:**
    *   **[PR #8227](https://github.com/zeroclaw-labs/zeroclaw/pull/8227)**: Fixed provider configuration to expose `replay_assistant_reasoning`, enhancing compatibility with custom chat-completion providers like Kilo.
    *   **[PR #8220](https://github.com/zeroclaw-labs/zeroclaw/pull/8220)**: Closed a regression test for proactive history trimming, ensuring JSON tool envelopes retain `tool_call_id` integrity.
    *   **[PR #8215](https://github.com/zeroclaw-labs/zeroclaw/pull/8215)**: Implemented SOP hardening by framing untrusted trigger payloads before model prompts, mitigating prompt injection risks.
    *   **[PR #8179](https://github.com/zeroclaw-labs/zeroclaw/pull/8179)**: Standardized agent execution resolution by routing all production turn-construction paths through `ResolvedAgentExecution::resolve`.
*   **Key Advancements:**
    *   **Security & CI:** [#8168](https://github.com/zeroclaw-labs/zeroclaw/pull/8168) introduces Trivy container scanning for PR gates and releases, strengthening the supply chain.
    *   **Runtime Stability:** [#8003](https://github.com/zeroclaw-labs/zeroclaw/pull/8003) fixed silent dead code by wiring the `session_end` hook, ensuring proper cleanup.
    *   **Observability:** [#8146](https://github.com/zeroclaw-labs/zeroclaw/pull/8146) resolved telemetry loss in CLI one-shot processes by flushing data before exit.

### 4. Community Hot Topics
*   **WebAssembly & Node.js Elimination:**
    *   **[Issue #7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674)** (5 comments): RFC to remove Node.js dependencies entirely. Reflects a strong community desire for reduced attack surfaces and simpler deployment pipelines.
    *   **[Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)** (1 comment): RFC for Wasm-first plugin runtime with capability enforcement. Indicates a strategic pivot toward safer, sandboxed extensibility.
*   **Plugin Architecture:**
    *   **[Issue #7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)** (6 comments): RFC for native dynamic-library plugins. Shows continued interest in high-performance, native extensions despite the Wasm push.
*   **Security & Supply Chain:**
    *   **[Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** (3 comments): RFC for hardware-backed PGP signing and SLSA provenance. Highlights a mature focus on enterprise-grade security and trust.

### 5. Bugs & Stability
*   **High Severity (Workflow Blocked/Crash Risks):**
    *   **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)**: Default 32k context budget exceeded by system prompts, causing perpetual trimming. *Status: In Progress.*
    *   **[Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)**: MCP tools missing in TUI sessions while visible in Gateway. *Status: Accepted.*
    *   **[Issue #8013](https://github.com/zeroclaw-labs/zeroclaw/issues/8013)**: Disabling an agent fails to stop bound Discord channels, posing a security/data risk. *Status: In Progress.*
    *   **[Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)**: Native/MCP tools unavailable on OpenAI/Anthropic reasoning turns. *Status: Accepted.*
*   **Medium/Low Severity:**
    *   **[Issue #2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091)**: Telegram poll errors logging Bot API tokens. *Status: Closed/Fixed.*
    *   **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)**: 74 test failures on Windows due to Unix-only assumptions. *Status: Accepted.*
*   **Fix PRs:**
    *   **[PR #8048](https://github.com/zeroclaw-labs/zeroclaw/pull/8048)** addresses context pressure issues by honoring `history_pruning` config.
    *   **[PR #8149](https://github.com/zeroclaw-labs/zeroclaw/pull/8149)** prevents process crashes from poisoned mutexes in the Wasm plugin runtime.

### 6. Feature Requests & Roadmap Signals
*   **Local Authentication:** **[Issue #8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076)** proposes an IdP-less username/password `AuthProvider` for browser login, addressing usability for self-hosted instances.
*   **Session Management:** **[Issue #8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)** requests auto-truncation of stale session history via `session_ttl_hours` to reduce token costs.
*   **Provider Flexibility:** **[Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)** asks for OpenRouter model fallback arrays support, improving reliability.
*   **Quickstart UX:** **[Issue #8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125)** suggests setting risk profile to `yolo` by default during quickstart to prevent user frustration.
*   **Roadmap Prediction:** These signals suggest v0.9.0 will prioritize authentication flexibility, cost-reduction mechanisms (session TTL), and improved provider resilience.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by context window limits being hit immediately by system prompts ([#5808]), and by tools disappearing in specific UI contexts like TUI ([#8193]) or reasoning models ([#7756]).
*   **Security Concerns:** Token leaks in logs ([#2091]) and disabled agents continuing to operate ([#8013)) are viewed as critical security flaws.
*   **Usability:** Conflicts with OS global keybinds in Zerocode ([#8075]) and lack of per-agent environment variable isolation ([#8226]) highlight gaps in developer experience.
*   **Satisfaction:** The community appreciates the rigorous RFC process and the focus on security (SLSA, Wasm sandboxing), indicating high trust in the project's direction.

### 8. Backlog Watch
*   **[Issue #8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059)**: Policy cleanup for `deny.toml` tracking. Needs maintainer review to finalize security policy enforcement.
*   **[Issue #8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)**: RFC to retire `aardvark-sys` crate. Pending maintainer review for architectural consolidation.
*   **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)**: Windows test suite failures. Requires significant effort to cross-platform compatible tests, currently stalled at "Accepted".
*   **[Issue #8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078)**: RFC for local pre-submission gates. High-risk, high-effort CI enhancement awaiting detailed review.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*