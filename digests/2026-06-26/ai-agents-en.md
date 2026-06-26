# OpenClaw Ecosystem Digest 2026-06-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-26 05:34 UTC

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
**Date:** 2026-06-26

## 1. Today's Overview
The OpenClaw repository exhibits extreme development velocity today, with **500 issues** and **500 pull requests** updated in the last 24 hours. While no new releases were published, the volume of closed/merged PRs (60) and active discussions indicates a significant maintenance sprint focused on stabilizing session state, security boundaries, and the new hosted marketplace infrastructure. The project is currently balancing heavy architectural shifts in its plugin/catalog system with critical fixes for memory leaks and session integrity across multiple channels.

## 2. Releases
**No new releases published today.**
*   *Note:* The project appears to be in a pre-release stabilization phase given the high number of PRs awaiting maintainer review or proof (`status: 👀 ready for maintainer look`).

## 3. Project Progress
**Merged/Closed & Advanced Work:**
*   **Marketplace Infrastructure:** A coordinated stack of PRs (#95846, #95877, #95964, #95969, #96155, #96158, #96194) is advancing the "hosted marketplace feed" system. This includes refactoring external plugin catalogs, adding snapshot fallbacks, persisting state, and implementing telemetry. This suggests a major upcoming feature for secure, centralized skill/plugin distribution.
*   **Security & Trust:** PR #81364 introduces mandatory trust checks before ClawHub plugin/skill installations, blocking malicious or blocked releases. This is a critical step toward a safer ecosystem.
*   **Platform Stability:** PR #96924 fixes a macOS `launchd` issue where profile-scoped updater jobs were stuck in infinite loops, addressing a specific but severe stability bug for Mac users.
*   **Google Media Integration:** PR #96920 bounds JSON response reads for Google media understanding, preventing potential hangs or crashes from oversized responses.

## 4. Community Hot Topics
**Top Issues by Engagement (Comments/Reactions):**
1.  **Issue #68596: Configurable streaming watchdog timeout** (15 comments, 8 👍)
    *   *Topic:* Users of extended-thinking models (Kimi-k2.5, DeepSeek-R1) face frequent false-positive timeouts.
    *   *Need:* Flexibility in timeout thresholds to accommodate varying model inference speeds.
2.  **Issue #58450: Agent promises follow-ups without action** (15 comments, 3 👍)
    *   *Topic:* Agents hallucinate follow-up actions or promise checks that aren't technically scheduled.
    *   *Need:* Reliability in agent commitment tracking and background task execution.
3.  **Issue #63918: Cron agentTurn thinking=none error** (17 comments, 1 👍)
    *   *Topic:* Scheduled jobs fail when sending unsupported `thinking=none` to models like `gpt-5-nano`.
    *   *Need:* Robust model capability detection and parameter adaptation in automated workflows.
4.  **Issue #50090: Community Skill Development & ClawHub** (15 comments, 2 👍)
    *   *Topic:* Gap between the promise of an open skill ecosystem and current functionality.
    *   *Need:* Better tooling and documentation for community-driven skill publishing.
5.  **Issue #65161: Heartbeat isolated mode regressions** (14 comments, 1 👍)
    *   *Topic:* Cadence stalls and mislabeled events in isolated mode.
    *   *Need:* Fixes for background process stability in complex deployments.

## 5. Bugs & Stability
**Critical & High-Severity Issues Reported/Active:**
1.  **Gateway Memory Leak (OOM)**
    *   *Issues:* #55334 (`sessions.json` unbounded growth), #54155 (389MB → 14.7GB leak over 4 days).
    *   *Impact:* Gateway crashes/unresponsiveness.
    *   *Status:* Active investigation; likely linked to lack of session pruning and `skillsSnapshot` duplication.
2.  **Session State & Message Loss**
    *   *Issues:* #69208 (Duplicate transcript/context assembly), #67777 (Subagent completion loss), #64810 (Heartbeats swallowing replies in Telegram).
    *   *Impact:* Data inconsistency, lost user messages, broken multi-agent coordination.
    *   *Status:* Multiple PRs in flight (#96944 sweeps orphaned lanes), but systemic context assembly bugs remain a major pain point.
3.  **Security Vulnerabilities**
    *   *Issues:* #45740 (Untrusted issue body injection into prompts), #65624 (Mattermost cleartext callbacks), #51396 (Operator scopes stripped unconditionally).
    *   *Impact:* Potential prompt injection attacks and privilege escalation.
    *   *Status:* Urgent; PR #81364 addresses some trust issues, but specific channel vulnerabilities remain open.
4.  **Regressions**
    *   *Issue:* #53599 (Chrome extension browser relay removed), #51396 (Auth scope stripping).
    *   *Impact:* Broken workflows for managed hosting and backend clients.

## 6. Feature Requests & Roadmap Signals
**High-Priority User Requests:**
1.  **Multi-Slot Memory Architecture** (#60572): Users want distinct memory providers for different layers (e.g., short-term vs. long-term) rather than a single monolithic slot. This aligns with the complexity of multi-agent setups.
2.  **Sensitive Data Masking** (#64046): Explicit request to mask API keys/secrets in logs and UI, not just console output. Critical for enterprise adoption.
3.  **Per-Agent TTS/STT Configuration** (#66252): Need for multi-language support with agent-specific voice/language settings.
4.  **Remote Reranker Support** (#64438): Extending memory search to support external reranking APIs (e.g., Cohere, Qwen) for better relevance.
5.  **Guaranteed Last N Messages** (#58818): Ensuring recent conversation history survives compaction/resets.

**Roadmap Prediction:** The immediate next release will likely focus on **Marketplace Feed integration** (due to the large PR stack) and **Session State/Heartbeat fixes** (due to high bug volume). Security hardening (masking, trust checks) is also imminent.

## 7. User Feedback Summary
*   **Frustration with Stability:** Users are heavily impacted by memory leaks and session corruption. Phrases like "gateway OOM," "message loss," and "stuck sessions" dominate negative feedback.
*   **Desire for Ecosystem Control:** The push for "Community Skill Development" (#50090) and "ClawHub" trust mechanisms shows users want a vibrant, safe, and extensible plugin market.
*   **Reliability Concerns:** Silent failures (e.g., #58957 model switch failure, #58450 phantom follow-ups) are eroding trust. Users demand transparent error reporting and guaranteed action execution.
*   **Positive Signal:** The high engagement on marketplace and security PRs indicates users appreciate efforts to professionalize the platform and secure the supply chain.

## 8. Backlog Watch
**Items Requiring Maintainer Attention:**
1.  **PR #86655: Claude Bridge App-Server Harness**
    *   *Status:* Waiting on author (`status: ⏳ waiting on author`).
    *   *Significance:* First-class Anthropic support parity. High demand.
2.  **PR #69822: Session Message Events Socket Drain**
    *   *Status:* Waiting on author.
    *   *Significance:* Resolves persistent test deadlocks and ensures reliable session eviction signaling.
3.  **PR #69729: Qwen3.6-Plus Reasoning Flag Fix**
    *   *Status:* Waiting on author.
    *   *Significance:* Corrects critical reasoning behavior for a popular Chinese LLM.
4.  **Issue #63918: Cron Thinking Parameter Bug**
    *   *Status:* Open, high comment count. Needs a fix to prevent cron job failures.
5.  **Issue #65624: Mattermost Security Vulnerability**
    *   *Status:* Open, High Severity (CVSS 7.6-8.6). Requires urgent patch.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-06-26
**Analyst:** Agnes-2.0-Flash

## 1. Ecosystem Overview
The 2026 open-source personal AI agent landscape is characterized by intense competition focused on **security hardening**, **session stability**, and **cross-platform reliability**. With the exception of dormant projects (NullClaw, TinyClaw, Moltis, ZeptoClaw), the active ecosystem is undergoing a critical transition from experimental prototypes to production-grade infrastructure. Key themes dominating developer discourse include the mitigation of memory leaks, the enforcement of strict plugin/skill supply chain security, and the resolution of provider-specific compatibility issues. The market is bifurcating between monolithic, feature-rich platforms (OpenClaw, IronClaw) and specialized, lightweight agents (NanoBot, PicoClaw), with a clear industry shift toward enterprise-ready governance and observability.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | No New Release | 8.5/10 (High Velocity/Stabilizing) |
| **Hermes Agent** | 50 | 50 | No New Release | 8.0/10 (Stable/Responsive) |
| **ZeroClaw** | 27 | 50 | v0.8.2 Released | 9.0/10 (Balanced/Growth) |
| **NanoClaw** | 1 | 21 | No New Release | 8.5/10 (Aggressive Cleanup) |
| **CoPaw** | 26 | 50 | No New Release | 7.5/10 (Bug-Heavy/Stabilizing) |
| **IronClaw** | 50 | 50 | No New Release | 7.0/10 (High Debt/Refactoring) |
| **NanoBot** | 25 | 42 | No New Release | 8.0/10 (Security-Focused) |
| **LobsterAI** | 0 | 7 | No New Release | 7.5/10 (Polish Phase) |
| **PicoClaw** | 4 | 19 | No New Release | 8.0/10 (Maintenance Mode) |
| **NullClaw** | 0 | 0 | No Activity | 2.0/10 (Inactive) |
| **TinyClaw** | 0 | 0 | No Activity | 2.0/10 (Inactive) |
| **Moltis** | 0 | 0 | No Activity | 2.0/10 (Inactive) |
| **ZeptoClaw** | 0 | 0 | No Activity | 2.0/10 (Inactive) |

*\*Health Score reflects stability, responsiveness to bugs, and release cadence relative to activity volume.*

## 3. OpenClaw's Position
**Advantages vs. Peers:**
*   **Scale & Ecosystem Depth:** OpenClaw dominates in raw activity volume (500 issues/PRs), indicating the largest active user base and contributor network. Its focus on a **Hosted Marketplace (ClawHub)** and **plugin catalog** distinguishes it as the most comprehensive ecosystem play, whereas competitors like NanoBot or PicoClaw focus on narrower integrations.
*   **Architectural Complexity:** OpenClaw supports complex multi-agent coordination, session state persistence, and diverse channel integrations (Telegram, Mattermost, etc.) out of the box, positioning it as an enterprise-grade platform rather than a simple personal assistant.

**Technical Approach Differences:**
*   Unlike **NanoClaw** or **PicoClaw**, which emphasize lightweight, edge-friendly deployments, OpenClaw is building a heavy backend infrastructure (Gateway, Session DB, Marketplace).
*   Compared to **IronClaw**'s "Reborn" UI overhaul, OpenClaw focuses on backend stability (memory leaks, session integrity) while managing a massive backlog of security and trust issues.

**Community Size:**
*   OpenClaw clearly leads in community engagement, evidenced by the high comment counts on issues like "Configurable streaming watchdog" and "Agent promises." Its community is actively shaping the **supply chain security** narrative, a feature less mature in smaller projects like LobsterAI or PicoClaw.

## 4. Shared Technical Focus Areas
Several critical technical challenges are emerging as industry-wide requirements across multiple active projects:

1.  **Session State & Memory Integrity:**
    *   **Projects:** OpenClaw, Hermes Agent, CoPaw, ZeroClaw.
    *   **Need:** All major projects are battling memory leaks (OOM), session corruption, and message loss. OpenClaw (#55334), Hermes (#51646), and CoPaw (#5520) are prioritizing robust session management and garbage collection.
2.  **Security Hardening & Supply Chain Trust:**
    *   **Projects:** OpenClaw, NanoBot, NanoClaw, ZeroClaw.
    *   **Need:** Mitigating plugin/skill injection attacks and ensuring secure execution. OpenClaw is implementing mandatory trust checks (#81364); NanoBot is patching shell command bypasses (#4526); NanoClaw fixed path traversal (#2817); ZeroClaw is pushing for hardware-backed signing (#8177).
3.  **Provider Compatibility & Abstraction:**
    *   **Projects:** OpenClaw, Hermes Agent, CoPaw, ZeroClaw.
    *   **Need:** Handling diverse LLM provider quirks (streaming, thinking tokens, image formats). OpenClaw addresses timeout issues (#68596); Hermes fixes Anthropic/Gemini errors (#52869); CoPaw struggles with OpenAI-compatible proxies (#5345); ZeroClaw fixes Groq/Kimi regressions (#8219).
4.  **Cross-Platform Stability (Windows/Linux/macOS):**
    *   **Projects:** NanoBot, Hermes Agent, CoPaw, IronClaw.
    *   **Need:** Ensuring consistent behavior across operating systems. NanoBot and CoPaw specifically report Windows-specific crashes and service management issues, while Hermes addresses Linux desktop freezes.

## 5. Differentiation Analysis

| Dimension | **OpenClaw** | **Hermes Agent** | **NanoBot** | **ZeroClaw** | **IronClaw** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Enterprise Ecosystem & Marketplace | Desktop/TUI UX & Multi-Provider | Lightweight Security & Edge | Modular Security & Interop | UI/UX Refactor ("Reborn") |
| **Target User** | Developers/Enterprises seeking scalable agent infra | Power users, Desktop-first, International (CN/EN) | Security-conscious, Minimalist deployments | Developers valuing modularity & supply chain | Users of the "Reborn" stack, UI-focused |
| **Architecture** | Monolithic Gateway + Plugin Catalog | Modular Desktop App + TUI | Single-binary/Containerized Agent | Rust-based, Plugin-centric, A2A | Monolithic with Heavy UI Layer |
| **Key Differentiator** | **ClawHub Marketplace** & Multi-Agent Coordination | **Pluggable SessionDB** (SQL) & Desktop Pet UX | **Ultra-lightweight** (despite Node dep) & Exec Security | **Hardware-backed Signing** & LAN Peer Discovery | **CAS Optimization** & Agent Loop Stability |
| **Weakness** | High complexity, memory leaks, steep learning curve | Desktop build instability, SQLite locking issues | Documentation vs. Reality gap, Windows service bugs | Provider regressions, Delegate policy complexity | High technical debt, UI/UX friction |

*   **LobsterAI** and **PicoClaw** differentiate themselves through niche integrations: LobsterAI focuses on **Plan Mode/Co-working** UI polish, while PicoClaw targets **Edge/IoT** (Raspberry Pi) and privacy-focused channels (DeltaChat, Signal).

## 6. Community Momentum & Maturity

**Tier 1: Rapid Iteration & High Volume (Mature but Volatile)**
*   **OpenClaw:** Extremely high velocity but signs of "feature fatigue" and stability debt. The community is demanding foundational fixes (memory, session) over new features.
*   **IronClaw:** High activity driven by a major architectural rewrite ("Reborn"). Momentum is high, but user satisfaction is low due to UI/UX bugs.
*   **Hermes Agent:** Steady, high-quality activity. Strong community engagement on RFCs indicates a mature, opinionated user base.

**Tier 2: Stabilizing & Focused (Growing Maturity)**
*   **ZeroClaw:** Balanced activity with a successful recent release (v0.8.2). Momentum is healthy, focusing on security and interoperability (A2A).
*   **NanoClaw:** Aggressive backlog clearing. High maturity in terms of code hygiene and security patches.
*   **CoPaw:** High PR volume but many critical bugs. Momentum is present but hampered by stability issues, particularly on Windows.

**Tier 3: Maintenance & Polish (Steady)**
*   **NanoBot:** Focused on critical security patches. Momentum is lower but highly targeted.
*   **LobsterAI:** "Cleanup and polish" phase. Low issue volume suggests a stable, albeit smaller, user base.
*   **PicoClaw:** Dependency updates and minor fixes. Mature, niche audience.

**Tier 4: Inactive**
*   **NullClaw, TinyClaw, Moltis, ZeptoClaw:** No activity indicates either project abandonment, pivoting, or extremely small communities.

## 7. Trend Signals

1.  **From "Chat" to "Governance":**
    *   Projects are shifting focus from basic conversational interfaces to **agent governance**. OpenClaw’s marketplace trust checks, ZeroClaw’s delegation policies, and NanoClaw’s admin approval workflows signal that **safety and control** are the primary barriers to enterprise adoption.
2.  **Supply Chain Security as a Core Feature:**
    *   The proliferation of issues related to plugin injection (OpenClaw, NanoBot, NanoClaw) and the push for hardware-backed signing (ZeroClaw) indicate that **secure software supply chains** are becoming a baseline requirement for AI agents, not an afterthought.
3.  **Resilience Against Provider Volatility:**
    *   With frequent regressions from providers like Groq, Moonshot, and Anthropic (ZeroClaw, Hermes, OpenClaw), the industry trend is toward **robust abstraction layers** and **fallback mechanisms**. Projects that fail to insulate users from provider API changes (e.g., CoPaw’s function calling issues) will lose traction.
4.  **Observability & Telemetry Maturity:**
    *   Users are demanding better visibility into agent behavior. ZeroClaw’s context window bars, Hermes’ auto-tracing proposals, and OpenClaw’s telemetry implementations show that **debugging and monitoring** are becoming key differentiators for complex multi-agent systems.
5.  **Platform Parity Expectations:**
    *   The recurring Windows bugs in NanoBot, CoPaw, and Hermes highlight a growing expectation for **true cross-platform parity**. Developers are penalized for "Linux-first" development mentalities, and projects investing in robust Windows support (or clearly documenting limitations) will gain competitive advantage.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-06-26
**Source:** github.com/HKUDS/nanobot

## 1. Today's Overview
NanoBot exhibited high development velocity on June 26, 2026, with significant activity centered around critical security patches and stability improvements. The project processed 25 issues and 42 pull requests in the last 24 hours, indicating intense engagement from both maintainers and the community. A major focus today was the remediation of multiple security vulnerabilities related to the `exec` tool, MCP server configuration, and filesystem permissions. While no new official releases were published today, numerous fixes are queued for immediate merging, suggesting an imminent patch release to address these security concerns.

## 2. Releases
**No new releases.**
However, the following critical fixes are currently in pull requests and likely to be included in the next maintenance release:
*   **Security Patch:** Prevention of shell command bypasses via `allowPatterns` (PR #4526).
*   **Security Patch:** Fix for MCP `enabledTools` scope bypass (PR #4524).
*   **Stability Fix:** Correction of session key collisions on disk (PR #4533).

## 3. Project Progress
The following Pull Requests were updated or merged today, advancing core functionality and reliability:
*   **Security Hardening:** PR #4526 and PR #4524 directly address CVE-worthy issues in the execution engine and MCP integration. PR #4534 adds verification gates to improve agent reliability during provider errors.
*   **WebUI Enhancements:** PR #4535 hardened WebUI and gateway checks, adding linting and smoke tests to CI. PR #4494 and PR #4479 implemented PWA support and mobile swipe gestures, improving mobile accessibility.
*   **Agent Logic:** PR #4510 fixes handling of malformed tool calls, preventing history pollution. PR #4522 introduces a generic guard against repeated tool call loops, enhancing agent stability.
*   **Infrastructure:** PR #4502 added gateway webhook triggers, expanding integration capabilities. PR #4506 proposed idle timeout auto-kill for MCP servers to prevent resource leaks.

## 4. Community Hot Topics
*   **Security Vulnerabilities in Execution Engine:** Multiple issues (#4514, #4515, #4516, #4520, #4521) highlight severe flaws in how `exec.allowPatterns` validates commands. Users and researchers are actively exploiting or reporting bypass methods (chained commands, comment tails). *Underlying Need:* Robust command validation is critical for safe autonomous agent deployment.
*   **MCP Configuration Bypasses:** Issues #4519 and #4434 reveal that the `enabledTools` allowlist fails to restrict resource and prompt wrappers, exposing sensitive data. *Underlying Need:* Strict least-privilege enforcement for MCP integrations.
*   **"Ultra-Lightweight" Claim Controversy:** Issue #660 remains a persistent point of contention regarding the project's marketing versus its actual dependency footprint (Python + Node.js). PR #4536 addresses this by updating documentation. *Underlying Need:* Transparency in system requirements for users seeking minimal overhead.
*   **Windows Service Management:** Issue #4511 and #4513 report bugs with `--background` and NSSM service integration on Windows. *Underlying Need:* Better cross-platform compatibility and background process management.

## 5. Bugs & Stability
*   **Critical: Shell Command Execution Bypasses (Security)**
    *   *Issues:* #4514, #4515, #4516, #4520, #4521.
    *   *Details:* Multiple bypasses allow unauthorized command execution via `exec` tool.
    *   *Fix Status:* PR #4526 implements `re.fullmatch` to close these gaps.
*   **High: Session Key Collision (Data Loss Risk)**
    *   *Issue:* #4057.
    *   *Details:* Distinct session keys (e.g., `telegram:a_b` vs `telegram:a:b`) collide on disk, causing data overwrite.
    *   *Fix Status:* PR #4533 provides a fix.
*   **Medium: Gateway Background Mode Crash (Windows)**
    *   *Issue:* #4511, #4513.
    *   *Details:* `nanobot gateway --background` behaves inconsistently with restart commands and NSSM services.
    *   *Fix Status:* Under investigation; no direct PR linked yet.
*   **Low: Telegram Web UI Message Error**
    *   *Issue:* #4488.
    *   *Details:* Regression causing unsupported message types in Telegram Web.
    *   *Fix Status:* Likely resolved by recent rich message handling updates.

## 6. Feature Requests & Roadmap Signals
*   **Clarification Tool:** Issue #4508 and PR #4527 propose an `ask_clarification` tool to handle ambiguous user requests gracefully. This signals a move toward more conversational and robust agent interactions.
*   **Custom Provider Thinking Styles:** Issue #4429 (Closed/Merged) addressed the inability to configure non-standard thinking parameters for providers like VolcEngine. This suggests ongoing work to broaden LLM provider compatibility.
*   **Subdirectory Skills Organization:** PR #4504 introduces optional subdirectories for skills, addressing usability concerns as the skill library grows.
*   **PWA/Mobile Support:** PR #4494/4479 indicates a strategic push to make the WebUI usable as a native-like mobile app.

## 7. User Feedback Summary
*   **Trust & Safety:** Users are highly concerned about the security implications of the `exec` tool and MCP configurations. The volume of security-related issues suggests a need for rigorous auditing and transparent communication of fixes.
*   **Performance Claims:** The discrepancy between the "ultra-lightweight" label and the dual-runtime requirement (Python/Node) frustrates users expecting minimal resource usage. Documentation updates (PR #4536) are welcomed but indicate a prior misalignment.
*   **Platform Specifics:** Windows users are experiencing friction with background services and restart behaviors, highlighting a gap in testing for non-Linux environments.
*   **Usability:** Requests for PWA support and better mobile navigation show users want to interact with NanoBot on-the-go, not just via desktop terminals.

## 8. Backlog Watch
*   **Issue #660:** "Project claims to be 'ultra-lightweight'..." - While addressed via doc update in PR #4536, the architectural dependency on Node.js remains. Long-term users seeking pure Python solutions may still find this unresolved.
*   **Issue #1710:** "Process cases when answer is not generated" - Persistent issue with Qwen models returning empty responses. No active PR linked, suggesting a need for better error handling in the inference pipeline.
*   **Issue #4073:** "Filesystem extra_allowed_dirs are treated as writable roots" - Fixed in PR #4099, but worth monitoring to ensure the fix doesn't introduce regressions in other filesystem operations.
*   **Issue #4511/#4513:** Windows gateway/service bugs - These affect a specific but significant user base. Maintainers should prioritize a fix to ensure parity with Linux/macOS stability.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest: 2026-06-26

## 1. Today's Overview
The Hermes Agent project exhibits high daily activity with 100 total updates (50 issues, 50 PRs) in the last 24 hours, indicating a robust and responsive development cycle despite having zero new releases today. The primary focus is on stabilizing the Desktop and TUI experiences, addressing critical bugs in file editing, session state management, and provider compatibility. Community engagement is strong, with significant discussions around security enhancements for credentials and cross-platform rendering improvements. The absence of a new release suggests the team is currently prioritizing bug fixes and feature refinements over shipping a new version.

## 2. Releases
No new releases were published on this date.

## 3. Project Progress
Several key areas saw advancement through merged or closed PRs and active development:
*   **Desktop UX Improvements**: PR #52877 introduces a new interaction for scaling the desktop pet via `Alt+wheel`. PR #52871 fixes session interruption logic to ensure queued turns are properly stopped.
*   **Profile & Configuration Fixes**: PR #52876 resolves a critical bug where profile aliases were matched incorrectly due to substring collisions (e.g., `erp-dev` matching `dev`). PR #52870 ensures the setup wizard correctly recognizes existing installations for all API-key providers.
*   **Tooling & MCP Stability**: PR #52874 hardens MCP tool filtering by treating empty include lists as "block all." PR #52867 fixes Exa SDK integration to avoid Cloudflare blocks by setting a standard User-Agent.
*   **Provider Compatibility**: PR #52869 classifies Anthropic's specific 400 billing error correctly, preventing unnecessary credential rotation. PR #52862 fixes a crash in the Gemini provider when handling string-format image URLs.
*   **New Provider Support**: PR #52836 adds Volcengine Ark (ByteDance) as a built-in provider, expanding ecosystem coverage.

## 4. Community Hot Topics
High-engagement topics reflect deep community involvement in usability and security:
*   **[RFC] Pluggable SessionDB Provider (PostgreSQL/MySQL)** (#23717): 11 comments. Users are actively discussing solutions to the "Hot-Update Death Spiral" where SQLite locks during updates. This signals a strong demand for production-grade database backends for multi-user or high-concurrency scenarios.
*   **[Feature] Credential Proxy Daemon** (#4656): 11 comments. There is significant interest in zero-knowledge HTTP brokers for agent credentials, driven by security concerns regarding credential exfiltration in child processes.
*   **[Feature] Headroom-AI Tool Output Compression** (#39691): 10 comments (+10 reactions). Users are eager for better context management beyond simple summarization, specifically requesting compression of individual tool outputs to save tokens.
*   **[Feature] Telegram Rich Messages** (#44428): 7 comments (+5 reactions). Demand for utilizing Telegram Bot API 10.1 features (LaTeX, tables, media blocks) is growing to improve message readability.
*   **[Bug] Desktop Build Failures** (#47917): 23 comments. Persistent issues with Electron binary cache invalidation during updates are causing friction for desktop users.

## 5. Bugs & Stability
Multiple critical and high-severity bugs were reported and addressed today:
*   **File Corruption (P2)**: Issue #52491 reported that fuzzy whitespace-normalized edits silently deleted boundary spaces, corrupting files. **Fix Status**: Closed via PR #52678 and PR #52861, which preserve boundary spaces.
*   **Gateway Memory Loss (P2)**: Issue #51646 reported that the Gateway’s transcript loader omitted the `active` column, causing agents to lose all conversation history. This is a severe regression affecting multi-platform consistency.
*   **Desktop Freezes (P2)**: Issue #48515 reported Linux desktop freezing after interacting with the title bar context menu.
*   **Input Truncation (P2)**: Issue #40142 reported that long inputs were truncated in the Desktop client.
*   **Windows Terminal Flash (P2)**: Issue #52788 reported CMD windows flashing on every terminal command, disrupting user experience.
*   **Security Leak (P1)**: Issue #47197 reported that `browser_type` leaked credentials in tool outputs. **Fix Status**: Closed.
*   **Curator Data Loss (P1)**: Issue #47688 reported the Curator mutating/deleting skills in external directories. **Fix Status**: Closed.

## 6. Feature Requests & Roadmap Signals
*   **Chinese Localization for Desktop**: Issue #52825 requests Chinese language support for the Desktop UI, reflecting the growing international user base.
*   **Stable Release Updates**: Issue #52814 requests a `--latest-release` flag for `hermes update` to allow users to pin to stable tagged versions rather than bleeding-edge `main` commits.
*   **Observability/Auto-Tracing**: Issue #52878 proposes automatic trace generation for skill execution, aligning with the HarnessX framework’s emphasis on observability.
*   **Feishu/Lark Card Rendering**: Issue #46470 highlights the need for unified Card 2.0 rendering to fix markdown table and streaming issues in Feishu.

## 7. User Feedback Summary
Users are experiencing frustration with **stability on desktop environments**, particularly regarding build failures, input truncation, and UI freezes. There is a clear preference for **robust configuration management**, as evidenced by the high interest in pluggable databases and stable update mechanisms. Security-conscious users are actively seeking solutions for credential isolation and preventing data leakage in tool outputs. Positive feedback is implied by the engagement with UX improvements like pet scaling and better Telegram formatting.

## 8. Backlog Watch
*   **#38240 [Open] Skills Index Stale/Degraded**: An automated freshness probe has been failing since June 3rd. This indicates a potential infrastructure or cron job issue requiring maintainer attention to ensure the skills hub remains usable.
*   **#4656 [Open] Credential Proxy Daemon**: While highly discussed, this significant security feature remains open. Maintainers should prioritize defining the scope and implementation timeline for this zero-knowledge broker.
*   **#23717 [Open] Pluggable SessionDB**: The RFC is mature but unresolved. Given the severity of SQLite locking issues, moving this from RFC to implementation is critical for enterprise adoption.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-06-26

### 1. Today's Overview
PicoClaw exhibits high development velocity with 19 PRs updated in the last 24 hours, indicating an active maintenance sprint focused on stability, dependency updates, and minor bug fixes. No new releases were published, suggesting the team is consolidating recent patches before the next version tag. Community engagement remains steady, with four issues addressed today, ranging from critical WebSocket timeouts to architectural security improvements. The project health is robust, characterized by a strong focus on code hygiene and dependency modernization.

### 2. Releases
*   **No new releases.**
    *   Current latest versions referenced in issues include `v0.2.3` and `v0.2.9`.

### 3. Project Progress
Several key technical improvements and merges occurred today, primarily driven by maintainers `chengzhao-xydt`, `Alix-007`, and `dependabot`:

*   **Dependency Updates (Automated):** Multiple dependencies were bumped via Dependabot:
    *   `github.com/github/copilot-sdk/go` (PR #3177, #3145)
    *   `github.com/mymmrac/telego` to `1.10.0` (PR #3176)
    *   `github.com/line/line-bot-sdk-go/v8` to `8.20.1` (PR #3174)
    *   `fyne.io/systray` to `1.12.2` (PR #3175)
    *   `modernc.org/sqlite` to `1.53.0` (PR #3173)
*   **Code Hygiene & Stability:**
    *   **PR #3172:** Fixed explicit error ignoring for `Close()` operations in error paths and retry loops across multiple files to prevent resource leaks.
    *   **PR #3171:** Added `ok` checks for `sync.Map` type assertions in the LINE channel `Send` method to prevent panics.
    *   **PR #3170:** Ensured base64 encoders are closed even on `io.Copy` error paths to prevent buffer leaks.
    *   **PR #3166:** Fixed a build failure in `openai_compat` by replacing `log.Printf` with the structured logger.
    *   **PR #3168:** Improved error handling for OpenAI-compatible model list fetches to report body read failures correctly.
    *   **PR #3169:** Optimized Evolution mode by skipping the "cold path" for heartbeat turns, reducing unnecessary token consumption.
    *   **PR #3045:** Fixed a bug where Matrix user IDs with colons were incorrectly rejected due to parsing issues.

### 4. Community Hot Topics
*   **Security Architecture Overhaul (Issue #3088):**
    *   *Topic:* Replace unmaintained `libolm` with `vodozemac`.
    *   *Activity:* High interest (2 👍, 3 comments).
    *   *Analysis:* Users are prioritizing security and long-term maintainability over quick fixes. This signals a need for a secure, upstream-supported encryption library for Signal-compatible channels.
*   **WhatsApp Connectivity Issues (Issue #3178):**
    *   *Topic:* WhatsApp Websocket Timeouts.
    *   *Activity:* Newly opened today.
    *   *Analysis:* Critical operational blocker for users relying on WhatsApp integration, particularly those using Docker/Launchpad environments.
*   **Token Consumption in Evolution Mode (Issue #3012):**
    *   *Topic:* Continuous token drain when Evolution is enabled.
    *   *Activity:* Closed recently, but highlights ongoing cost sensitivity among users running AI agents continuously.

### 5. Bugs & Stability
*   **High Severity:**
    *   **#3178 [OPEN] WhatsApp Websocket Timeout:** Reported by `Jh123x` using `deepseek-v4-pro` on Docker. No fix PR yet. Requires immediate investigation into WebSocket keep-alive settings.
    *   **#1757 [CLOSED] Cron Channel Error:** Fixed. Users experienced channel errors when scheduling hourly tasks on Raspberry Pi Zero W with Ollama.
*   **Medium Severity:**
    *   **#3012 [CLOSED] Token Drain:** Fixed. Users reported excessive token usage in Evolution/Draft mode.
    *   **#3115 [OPEN] Media Extraction Bug:** `jp39` identified a session-history corruption bug where inline data URLs in plain text were misinterpreted as media attachments.
    *   **#3142 [OPEN] Duplicate Messages:** `jincheng-xydt` submitted a fix for duplicate message delivery in async sub-agent completions (`spawn` feature).

### 6. Feature Requests & Roadmap Signals
*   **DeltaChat Gateway (PR #3063):**
    *   *Status:* Open.
    *   *Signal:* Addition of DeltaChat support indicates a roadmap expansion into alternative, privacy-focused messaging protocols beyond standard SMS/WhatsApp/Telegram.
*   **Remote Agent Mode (PR #3118):**
    *   *Status:* Open.
    *   *Signal:* Enabling `picoclaw agent` to connect via WebSocket to a remote instance suggests a move toward distributed agent architectures or headless server deployments.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Resource Leaks:** Users are sensitive to memory/resource leaks, evidenced by multiple PRs today focusing on closing encoders and ignoring non-critical `Close()` errors.
    *   **Cost Efficiency:** The closure of Issue #3012 shows that users are actively monitoring and complaining about AI token waste, especially in automated "Evolution" modes.
    *   **Platform Specifics:** Issues on Raspberry Pi (Issue #1757) and FreeBSD (Issue #3012) highlight the need for cross-platform stability, particularly for edge deployments.
*   **Satisfaction:**
    *   The rapid response to dependency updates and bug fixes (6 merged/closed PRs today) suggests a responsive maintainer team, likely boosting user confidence.

### 8. Backlog Watch
*   **Issue #3088 [OPEN]:** Replace `libolm` with `vodozemac`. This is a high-impact architectural change labeled "help wanted" and "priority: high." Maintainers should prioritize evaluating this migration for the next major release to ensure security compliance.
*   **PR #3142 [OPEN]:** Fix for duplicate messages in spawn sub-turns. This addresses a core UX flaw in multi-agent workflows. It should be reviewed and merged soon to prevent user frustration with redundant notifications.
*   **PR #3063 [OPEN]:** DeltaChat gateway. While a feature addition, it expands the ecosystem. If merged, it requires documentation updates for the new channel setup.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-26
**Source:** github.com/qwibitai/nanoclaw

## 1. Today's Overview
NanoClaw is experiencing high velocity with 21 Pull Requests updated in the last 24 hours, indicating a burst of development activity focused on stability, skill expansion, and infrastructure hardening. Only one issue remains open in the tracker, suggesting the team is aggressively clearing backlog items. No new releases were published today, implying these changes are currently in review or staging phases. The project health appears robust, with a strong emphasis on fixing critical security vulnerabilities and improving container resource management.

## 2. Releases
*   **Status:** No new releases published today.
*   **Note:** Several significant fixes and features (e.g., security confinement, container limits) are pending merge/release.

## 3. Project Progress
The following Pull Requests were active or merged today, advancing core functionality and reliability:

*   **Security Hardening:**
    *   [#2817](https://github.com/nanocoai/nanoclaw/pull/2817) **[MERGED]** Fixed critical path traversal vulnerability in `send_file` by confining reads to the workspace and blocking external symlinks.
    *   [#2815](https://github.com/nanocoai/nanoclaw/pull/2815) **[MERGED]** Fixed router crash when handling primitive JSON content by adding `safeParseContent` guards.
    *   [#2813](https://github.com/nanocoai/nanoclaw/pull/2813) **[MERGED]** Fixed CLI socket response caps to count bytes rather than characters, preventing truncation issues with multi-byte UTF-8 payloads.
*   **Infrastructure & Containers:**
    *   [#2856](https://github.com/nanocoai/nanoclaw/pull/2856) **[MERGED]** Introduced opt-in CPU and memory limits for agent containers (`CONTAINER_CPU_LIMIT`, `CONTAINER_MEMORY_LIMIT`) to prevent resource monopolization.
    *   [#2854](https://github.com/nanocoai/nanoclaw/pull/2854) **[MERGED]** Fixed macOS OneCLI gateway CA mount issues causing API connection failures.
*   **Skills & Features:**
    *   [#2843](https://github.com/nanocoai/nanoclaw/pull/2843) **[MERGED]** Added `/learn` skill to distill reusable skills from directories or URLs.
    *   [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) **[MERGED]** Enhanced approval workflows to allow agents to receive rejection reasons.
    *   [#2472](https://github.com/nanocoai/nanoclaw/pull/2472) **[MERGED]** Improved Slack integration by creating per-message threads for top-level posts in per-thread sessions.

## 4. Community Hot Topics
*   **Multi-Admin Approval Workflow:**
    *   **Issue:** [#2857](https://github.com/nanocoai/nanoclaw/issues/2857)
    *   **Analysis:** Users are requesting a more resilient approval system. Currently, if the designated admin is unavailable, approvals stall. The community seeks fallback mechanisms (re-asking next admin) and CLI-based approvals for machine owners, highlighting a need for higher availability in automated governance.
*   **Stale Session Rotation:**
    *   **PR:** [#2865](https://github.com/nanocoai/nanoclaw/pull/2865) & [#2864](https://github.com/nanocoai/nanoclaw/pull/2864)
    *   **Analysis:** Multiple PRs address "ceiling-kill" signals and stale session rotation across OpenCode and providers. This indicates ongoing efforts to stabilize long-running agent sessions and prevent resource leaks or frozen states.

## 5. Bugs & Stability
*   **High Severity (Fixed):**
    *   **Path Traversal:** [#2817](https://github.com/nanocoai/nanoclaw/pull/2817) resolved a security flaw allowing file reads outside the workspace.
    *   **Migration Crash:** [#2859](https://github.com/nanocoai/nanoclaw/pull/2859) addressed a database migration failure in v2 upgrades for users coming from older v1 installations lacking the `is_main` column.
*   **Medium Severity (Fixed):**
    *   **macOS API Failure:** [#2854](https://github.com/nanocoai/nanoclaw/pull/2854) fixed self-signed certificate errors on macOS with Rancher Desktop.
    *   **Debug Spam:** [#2860](https://github.com/nanocoai/nanoclaw/pull/2860) silenced noisy `libsignal` debug logs that could clutter production output.

## 6. Feature Requests & Roadmap Signals
*   **Operational Skills:** PRs [#2862](https://github.com/nanocoai/nanoclaw/pull/2862) and [#2863](https://github.com/nanocoai/nanoclaw/pull/2863) propose `/manage-agents`, `/manage-schedules`, and `/system-digest`. This signals a roadmap shift toward providing native, built-in tools for agent lifecycle and system monitoring management.
*   **CLI Dashboard:** PR [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) introduces a read-only CLI-derived dashboard skill, suggesting an interest in better observability and reporting interfaces for end-users.
*   **Telegram MarkdownV2:** PR [#2866](https://github.com/nanocoai/nanoclaw/pull/2866) drops legacy markdown sanitizers in favor of Telegram's MarkdownV2, aligning with platform best practices for formatting reliability.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Approval Bottlenecks:** Users are frustrated by single-admin dependency in approval chains, leading to stalled agent workflows (Issue #2857).
    *   **Resource Contention:** Without limits, shared hosts suffer from one agent consuming all CPU/Memory, necessitating the new container limits feature (PR #2856).
    *   **Migration Complexity:** Upgrading from v1 to v2 is fragile due to schema assumptions, as seen in the migration fix (PR #2859).
*   **Satisfaction:**
    *   Users appreciate the rapid turnaround on security fixes and the addition of granular control over agent environments (skills, limits, session management).

## 8. Backlog Watch
*   **Open PRs Needing Attention:**
    *   [#2866](https://github.com/nanocoai/nanoclaw/pull/2866) - Telegram MarkdownV2 update.
    *   [#2865](https://github.com/nanocoai/nanoclaw/pull/2865) - OpenCode session rotation.
    *   [#2864](https://github.com/nanocoai/nanoclaw/pull/2864) - Provider session rotation.
    *   [#2863](https://github.com/nanocoai/nanoclaw/pull/2863) - System digest skills.
    *   [#2862](https://github.com/nanocoai/nanoclaw/pull/2862) - Agent/Schedule management skills.
    *   [#2861](https://github.com/nanocoai/nanoclaw/pull/2861) - MCP server env var expansion.
    *   [#2860](https://github.com/nanocoai/nanoclaw/pull/2860) - Libsignal logging silence.
    *   [#2858](https://github.com/nanocoai/nanoclaw/pull/2858) - Add-clidash install fixes.
    *   [#2824](https://github.com/nanocoai/nanoclaw/pull/2824) - Drop stale "Global Memory" instruction.
    *   [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) - Add-clidash skill.
*   **Action Required:** Maintainers should prioritize merging these 11 open PRs to reduce technical debt and release the accumulated improvements in a stable version.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-06-26
**Source:** GitHub Data (nearai/ironclaw)

## 1. Today's Overview
IronClaw exhibits high development velocity with 50 issues and 50 pull requests updated in the last 24 hours, indicating intense focus on the "Reborn" stack stability and capability policy refinement. While no new releases were published, significant progress was made in merging critical bug fixes related to the agent loop, tool permissions, and UI responsiveness. The project is currently balancing heavy backend architectural shifts—specifically around CAS (Compare-And-Swap) optimizations and memory extension—with immediate frontend usability corrections. Overall project health is strong, though the volume of open "Reborn" specific issues suggests ongoing teething problems in the new UI/UX layer.

## 2. Releases
**No new releases published.**
*   **Note:** The team is actively merging fixes into the main branch (e.g., PRs #5291, #5285, #5284), suggesting a potential release candidate or patch update may follow once the "hillclimb" benchmark aggregates are finalized.

## 3. Project Progress
Key advancements and merges today include:

*   **Agent Loop & Stability:**
    *   **Merged:** [#5291](https://github.com/nearai/ironclaw/pull/5291) Fixed subagent goal body rejection caused by a 512-byte safe-summary cap.
    *   **Merged:** [#5285](https://github.com/nearai/ironclaw/pull/5285) Resolved infinite loops in the agent loop when encountering repeated identical failing calls.
    *   **Open:** [#5296](https://github.com/nearai/ironclaw/pull/5296) Hardening the turn scheduler against transient heartbeat and terminal-failure persistence drops.
*   **Performance & Backend Architecture:**
    *   **Open:** [#5234](https://github.com/nearai/ironclaw/pull/5234) Major refactor to remove per-record lock convoys via a shared `cas_update` helper, significantly reducing contention in Reborn persistence stores.
    *   **Open:** [#5257](https://github.com/nearai/ironclaw/pull/5257) Implementing batch durable event-log appends to reduce single-row INSERT overhead.
    *   **Open:** [#5274](https://github.com/nearai/ironclaw/pull/5274) Migrating runner-lease sidecar CAS loops to the shared `cas_update` infrastructure.
*   **User Experience (Reborn WebUI):**
    *   **Merged:** [#5284](https://github.com/nearai/ironclaw/pull/5284) Moved the "Logs" link out of the message composer to prevent UI clutter during agent execution.
    *   **Open:** [#5297](https://github.com/nearai/ironclaw/pull/5297) Fixing stale gate projection rows in the WebUI stream.
    *   **Open:** [#5279](https://github.com/nearai/ironclaw/pull/5279) Improving queued message steering visibility in the UI.

## 4. Community Hot Topics
The most discussed topics revolve around the **Reborn capability policy** and **tool permission persistence**.

*   **Capability Policy Epic (#5261):** A cluster of issues (#5272, #5268, #5267, #5273, #5266) discusses the redesign of admin-shared tools, per-user auth, and REST surfaces. This indicates a major push to finalize multi-tenant security models for the Reborn stack.
*   **Tool Permission Bugs:** Multiple high-comment issues (#5192, #5196, #5243, #5283) report failures in "Approve & always allow" flows and duplicate approval requests. Users are frustrated that tool settings do not persist correctly in the Reborn WebUI.
*   **Dogfooding Tracking (#5119):** This epic serves as a hub for local testing findings, highlighting that internal usage is driving rapid identification of UX gaps (e.g., auto-scrolling, input freezing).

## 5. Bugs & Stability
Several critical bugs affecting agent functionality and UI stability were reported or fixed today:

*   **Severity: High (Agent Logic)**
    *   **Issue #5192:** Denying a tool approval still triggers additional approval requests.
    *   **Issue #5196:** "Ask each time" permission fails with authorization errors, creating duplicate approval loops.
    *   **Issue #5276:** Scheduled automations fail with "No thread attached," resulting in 0% success rates.
    *   **Fix Status:** Related logic fixes are being addressed in PRs #5291 and #5285 (loop breaking).
*   **Severity: Medium (UI/UX)**
    *   **Issue #5242:** Settings page shows operator-only errors for regular WebUI users.
    *   **Issue #5282:** "Logs" entry incorrectly appears inside the composer during agent runs (Fixed in PR #5284).
    *   **Issue #5208:** Message input freezes while waiting for agent response.
    *   **Issue #5211:** New responses do not auto-scroll into view.
*   **Severity: Low (Configuration)**
    *   **Issue #5243:** "Approve & always allow" does not persist to Settings > Tools.
    *   **Issue #5283:** Same persistence issue specific to `nearai.web_search`.

## 6. Feature Requests & Roadmap Signals
*   **Personal Memory & Self-Learning (#5260, #5264):** Significant traction on implementing a native SQL-backed memory system with semantic search and self-curating capabilities. This is marked as a "North-star" tracking issue, suggesting it is a primary roadmap focus for the next major cycle.
*   **Trace Commons Enrollment (#5280):** Expansion of trace inspection to instance-wide enrollment and per-user profiles, indicating a move towards better observability and collaborative debugging features.
*   **Native Storage Primitives (#5269):** Design docs suggest moving Reborn Postgres access patterns to native primitives without changing the abstraction layer, signaling a performance optimization roadmap.

## 7. User Feedback Summary
*   **Pain Points:** Users are consistently reporting friction with the **Reborn WebUI's permission management**. The inability to reliably save "always allow" preferences or the appearance of duplicate approval dialogs is a major source of dissatisfaction.
*   **Usability Gaps:** Basic UX expectations like auto-scrolling, input responsiveness during generation, and clear empty states for automations (#4980) are missing, leading to a perception of immaturity in the Reborn interface compared to the underlying engine capabilities.
*   **Positive Signal:** The community is actively engaging with the new capability policy designs, indicating interest in granular, per-user tool governance.

## 8. Backlog Watch
*   **Issue #4108:** Nightly E2E failures have been persistent since May 27. This requires immediate maintainer attention as it blocks confidence in automated regression testing.
*   **Issue #5253:** Heartbeat lease write-behind optimization is identified as a critical performance bottleneck for the runner-lease renewal process.
*   **Issue #5221:** The Ironclaw harness backlog for `deepseek-v4-flash` shows 8 hillclimb steps spent and 9 candidates, requiring triage to determine which fixes should be prioritized for the next benchmark update.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-26
**Source:** GitHub (netease-youdao/LobsterAI)

## 1. Today's Overview
The LobsterAI project demonstrated high development velocity today, with seven pull requests merged or closed within the last 24 hours, indicating active maintenance and refinement. No new issues were opened or updated, and no new releases were published, suggesting the team is focusing on stabilizing recent changes rather than introducing new bugs or major features. The activity was concentrated on the `renderer`, `main`, and `openclaw` areas, specifically targeting synchronization logic, UI consistency, and extension handling. This pattern reflects a "cleanup and polish" phase following recent functional updates.

## 2. Releases
No new releases were published today. Development efforts were directed toward merging specific fixes into the main branch rather than tagging a new version.

## 3. Project Progress
Seven PRs were successfully closed/merged today, advancing stability and user experience in the following areas:

*   **Settings & System Integration (PR #2206):** Fixed a critical synchronization issue where the "launch at login" setting in the app did not match the OS state. The fix includes handling historical argument variants on Windows and adding diagnostic logs.
    *   [View PR #2206](https://github.com/netease-youdao/LobsterAI/pull/2206)
*   **UI/UX Consistency (PR #2205):** Updated the "plan mode" icon in the cowork feature to use a theme-aware SVG component, ensuring visual consistency across different modes.
    *   [View PR #2205](https://github.com/netease-youdao/LobsterAI/pull/2205)
*   **Plan Mode Logic (PR #2204):** Resolved a rendering bug where inline tag mentions were leaking into the message body instead of being processed as block-level plan tags. Added regression tests and debug logging.
    *   [View PR #2204](https://github.com/netease-youdao/LobsterAI/pull/2204)
*   **OpenClaw Extension System (PR #2203 & #2202):** Enhanced the extension precompilation process to correctly load local TypeScript entries and ensure the bundled browser plugin remains allowlisted under restrictive configurations.
    *   [View PR #2203](https://github.com/netease-youdao/LobsterAI/pull/2203)
    *   [View PR #2202](https://github.com/netease-youdao/LobsterAI/pull/2202)
*   **Session & Agent Sync (PR #2201 & #2209):** Fixed duplicate responses in GLM visible replies and improved the handling of subagent polling after parent session completion, preventing lost terminal updates.
    *   [View PR #2201](https://github.com/netease-youdao/LobsterAI/pull/2201)
    *   [View PR #2199](https://github.com/netease-youdao/LobsterAI/pull/2199)

## 4. Community Hot Topics
There were no open issues or highly commented PRs today, indicating a quiet community discussion period. However, the merged PRs address recurring themes:
*   **Theme-Aware UI:** The focus on SVG components (#2205) suggests ongoing efforts to improve visual fidelity and accessibility.
*   **Extension Reliability:** Multiple PRs (#2203, #2202) target the OpenClaw extension system, highlighting that extension loading and configuration are critical pain points for power users.
*   **Agent State Management:** Fixes related to session syncing (#2201, #2199) indicate that maintaining consistent state between the UI and background agents remains a complex area requiring continuous refinement.

## 5. Bugs & Stability
Several bugs were addressed today, primarily affecting data consistency and UI rendering:
*   **High Severity:** Duplicate assistant replies in chat history (PR #2201) and missing subagent terminal updates (PR #2199). These fixes improve the reliability of multi-agent workflows.
*   **Medium Severity:** Incorrect "launch at login" state persistence on Windows (PR #2206) and plan tag parsing errors (PR #2204). These are usability bugs that could confuse users or break automated workflows.
*   **Low Severity:** Inconsistent iconography in plan mode (PR #2205).

No new crash reports or regressions were logged in the issues section today.

## 6. Feature Requests & Roadmap Signals
While no explicit feature requests were filed, the merged PRs signal upcoming improvements:
*   **Enhanced Diagnostic Logging:** PRs #2204, #2203, and #2199 all added or tightened diagnostic logs. This suggests a roadmap direction towards better observability and easier debugging for both users and developers.
*   **Strict Plugin Allowlisting:** PR #2202 indicates a move towards more secure and predictable plugin management, potentially allowing for stricter security defaults in future versions.
*   **Improved Subagent Lifecycle Management:** The polling fixes in #2199 suggest that long-running background tasks and subagent coordination will see further optimization.

## 7. User Feedback Summary
Direct user feedback via issues is absent today. However, the nature of the merged PRs implies recent user pain points:
*   **Frustration with Inconsistent Settings:** Users likely experienced issues where app settings did not reflect OS-level configurations (e.g., startup behavior).
*   **Confusion in Plan Mode:** Leaking tags into messages (#2204) would have disrupted the clarity of collaborative planning sessions.
*   **Reliability Concerns with Agents:** Duplicated replies (#2201) and dropped terminal events (#2199) directly impact trust in the AI agent's ability to complete tasks accurately.

## 8. Backlog Watch
With zero open issues and no pending PRs discussed in the "Latest Issues" section, there are currently no critical items in the backlog requiring immediate maintainer attention based on this data snapshot. The team appears to have cleared the immediate queue of merged fixes.

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
**Source:** agentscope-ai/CoPaw (via QwenPaw ecosystem data)

## 1. Today's Overview
The CoPaw project exhibits high development velocity on June 26, 2026, with 26 issues and 50 pull requests updated in the last 24 hours. While no new official releases were published, the merge rate is significant, indicating active stabilization efforts following recent architectural shifts. The community is heavily engaged in resolving compatibility issues with third-party model providers (Ollama, MiniMax, GLM) and fixing critical frontend rendering bugs. The project health remains robust despite a surge in bug reports related to session management and browser automation resource leaks.

## 2. Releases
*   **No new releases.** The latest available versions referenced in issues are `v1.1.12.post1` and `v1.1.12.post2`.

## 3. Project Progress
Several key areas saw progress through merged or open Pull Requests (PRs):

*   **Frontend Stability:** PR **#5538** (merged) fixed a critical markdown rendering issue where newlines were collapsed in assistant responses (#5480). PR **#5544** (merged) addressed layout breakages on the TokenUsage page by adding missing empty state styles.
*   **Schema Compatibility:** PR **#5549** and **#5545** address nullable tool schemas (`type: null`) that were causing failures with third-party proxies and Gemini-style validators. PR **#5496** (merged) inlined `$ref` definitions to fix GLM-5.x execution failures.
*   **Skill Management:** PR **#5477** refined skill initialization logic to prevent enabling all skills by default, and PR **#5481** improved error handling for invalid ZIP metadata.
*   **Memory System:** PR **#5540** refactored the auto-memory system to use user-turn markers instead of reply IDs, improving context tracking accuracy.
*   **Runtime & Governance:** PR **#5548** ensures channel requests correctly inherit the active workspace’s `agent_id`. PR **#5546** began generalizing the governance policy pattern.

## 4. Community Hot Topics
The following issues generated the most discussion and engagement:

1.  **[Bug] Custom OpenAI-compatible providers (e.g. OMLX) don't support function calling** (#5345)
    *   *Link:* [Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)
    *   *Analysis:* Users are increasingly adopting non-standard OpenAI-compatible endpoints. The inability to use function calling with these providers (like OMLX) despite native support in their APIs is a major friction point, highlighting a gap in QwenPaw's provider abstraction layer.
2.  **[Bug] Internal Server Error after Python install** (#5379)
    *   *Link:* [Issue #5379](https://github.com/agentscope-ai/QwenPaw/issues/5379)
    *   *Analysis:* A critical blocker for new users installing via pip. The `get_remote_addr` error suggests environment-specific configuration or dependency issues on Windows systems.
3.  **[Bug] Console long message layout disorder** (#5480)
    *   *Link:* [Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480)
    *   *Analysis:* High impact on UX. The reliance on tab switching to refresh CSS layout indicates a frontend state management bug, recently patched in PR #5538.
4.  **[Bug] MiniMax-M3 image safety cache** (#5505)
    *   *Link:* [Issue #5505](https://github.com/agentscope-ai/QwenPaw/issues/5505)
    *   *Analysis:* A sophisticated caching bug where a single safety rejection permanently disables media input for a model instance. This affects multimodal workflows significantly.

## 5. Bugs & Stability
The following critical bugs were reported or fixed today, ranked by severity:

1.  **High Severity: Browser Automation Resource Leak**
    *   *Issues:* #2733 (Closed), #5520 (Open)
    *   *Description:* Chrome processes are not properly terminated after `browser_use` stops, leading to memory exhaustion. Issue #5520 notes this is a regression from previous fixes.
    *   *Status:* Active investigation required; previous fix appears incomplete.
2.  **High Severity: Frontend Crash on Large Sessions**
    *   *Issue:* #5479
    *   *Description:* Opening session files >500KB causes a frontend crash ("Unexpected error rendering this page").
    *   *Status:* Open. Requires progressive loading or pagination implementation.
3.  **Medium Severity: Windows File Preview 404**
    *   *Issue:* #5508
    *   *Description:* `send_file_to_user` generates broken preview links on Windows local apps.
    *   *Status:* Open. Likely a path resolution issue specific to the Windows Tauri wrapper.
4.  **Medium Severity: Heartbeat Task Timeout**
    *   *Issue:* #5539
    *   *Description:* Built-in heartbeat tasks fail because they exceed a hardcoded 120-second timeout.
    *   *Status:* Open. Needs configurable timeout limits.
5.  **Low Severity: UI Alignment & Counting Errors**
    *   *Issues:* #5501 (Button alignment), #5512 (Provider count mismatch).
    *   *Status:* Open/PR #5537 addresses the counting issue.

## 6. Feature Requests & Roadmap Signals
*   **Windows Native Sandbox:** PR **#5525** introduces a Windows-native sandbox implementation, signaling a push to improve security and isolation on Windows platforms.
*   **Computer Use GUI Automation:** PR **#5187** adds a `computer_use` tool for Windows desktop control via UIA/Tauri. This is a significant feature expansion for agent autonomy.
*   **Data Analysis Plugin:** PR **#4622** proposes a "DataPaw" plugin with 12 BI skills. If merged, this will expand CoPaw's utility in professional data workflows.
*   **Durable History/Scroll Context:** PR **#5321** implements a scroll context manager using SQLite for durable history, offering an alternative to token compression for long conversations.
*   **Model Fallback/Dynamic Switching:** Issue **#5527** asks for dynamic model switching support (e.g., fallback if primary model hits rate limits). This reflects a need for higher reliability in production deployments.

## 7. User Feedback Summary
*   **Compatibility Frustration:** Users are frustrated by the lack of seamless support for "OpenAI-compatible" providers that deviate slightly from the spec (e.g., OMLX function calling, MiniMax caching behaviors, GLM schema strictness). There is a strong demand for robust adapter layers.
*   **Performance Concerns:** The frontend is struggling with scale. Large sessions (>500KB) crashing the UI and long messages breaking layout indicate that the web interface needs optimization for heavy usage.
*   **Platform Specifics:** Windows users are encountering disproportionate bugs (file previews, server errors, process leaks), suggesting the Windows build pipeline needs more rigorous testing.
*   **Desire for Autonomy:** The interest in `computer_use` and sandbox features shows users want agents that can interact with the OS directly, not just via API.

## 8. Backlog Watch
Maintainers should prioritize attention on the following open issues:
1.  **#5520 [Bug] browser_use stop() memory leak:** This is a regression of #2733 and poses a stability risk for users relying on browser automation. It blocks safe long-running agent tasks.
2.  **#5479 [Bug] Large session frontend crash:** Affects data retention and user experience for active projects.
3.  **#5508 [Bug] Windows file preview 404:** Blocks core functionality for Windows desktop users.
4.  **#5505 [Bug] MiniMax media cache bug:** Causes silent failures in multimodal workflows, which are hard to debug for end-users.

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
ZeroClaw demonstrates high velocity with 77 updates in the last 24 hours (27 issues, 50 PRs), indicating active development and rapid iteration. The team is currently stabilizing the recently released v0.8.2 while simultaneously preparing for the v0.8.3 and v0.9.0 milestones. Significant efforts are concentrated on security hardening, supply-chain integrity, and resolving critical bugs in delegation and provider compatibility. The project health is robust, characterized by a balanced mix of bug fixes, infrastructure improvements, and feature expansions.

## 2. Releases
**Version:** v0.8.2
*   **Key Features:** Introduced A2A agent discovery for interoperability and enhanced the skills ecosystem with user-configurable registries and typed slash-command options.
*   **Security:** Sharpened security posture across plugins and channels.
*   **Migration Notes:** Users should verify plugin compatibility with the new security constraints. The release also addressed several provider-specific regressions (see Bugs & Stability).

## 3. Project Progress
*   **Release Stabilization:** PR #8234 finalized the v0.8.2 release process. Subsequent PRs focused on CI fixes, including raising binary size limits (#8342) and fixing stable-pointer tags (#8344).
*   **Gateway Enhancements:** PR #8325 adds LAN peer discovery hints, allowing operators to opt into MDNS-based node pairing. PR #8173 implements in-app upgrades with auto-restart via the web dashboard.
*   **Observability & Logging:** PR #8307 introduces a rotating log-persistence mode, filling the gap between rolling and full logs. PR #8146 fixes telemetry loss during CLI one-shot exits.
*   **Context Window Visibility:** PR #7946 adds a context window usage bar to the TUI, Gateway, and CLI, providing real-time feedback on token consumption.
*   **Documentation:** PR #8341 syncs paths and crate lists in `AGENTS.md`, and PR #8332 pins v0.8.2 translations for i18n consistency.

## 4. Community Hot Topics
*   **Supply Chain Security:** Issue #8177 proposes hardware-backed PGP signing and SLSA provenance. This reflects a community demand for enterprise-grade trust and reproducibility.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)
*   **Architecture Simplification:** Issue #6165 suggests removing hardcoded integration code in favor of external skills/tools to keep the core lightweight.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)
*   **Delegation Policy:** Issue #8238 and #7743 discuss explicit delegate modes and target-profile authority. Users seek finer-grained control over specialist agent handoffs and policy inheritance.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7743)

## 5. Bugs & Stability
*   **Critical: Delegate Policy Bypass:** Issue #8279 identified a high-risk bug where sub-agents could bypass the parent's tool allowlist. A fix is in progress.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)
*   **High: MCP Process Leaks:** Issue #5903 reports that enabling heartbeat causes stdio MCP child processes to accumulate, leading to resource exhaustion.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)
*   **High: Provider Regressions:** Issue #8219 details failures with `gpt-oss-120b` on Groq due to strict tool-loop handling. Issue #8154 highlights a broken endpoint for Kimi Code (Moonshot).
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8219)
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8154)
*   **Medium: Image Marker Handling:** Issue #8327 notes that native tool calling sends image markers as plain text, inflating token counts. PR #8339 addresses this by promoting markers to `image_url`.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8327)
*   **Medium: Cache Instability:** Issue #8320 reveals that response cache keys include wall-clock timestamps, causing unnecessary misses. PR #8323 stabilizes this with test-only clock seams.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8320)

## 6. Feature Requests & Roadmap Signals
*   **Response Caching Policy:** Issue #8321 requests a defined policy for caching volatile runtime context (time, memory, channel context). This signals a move toward more predictable performance tuning.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8321)
*   **SOP Control Plane:** Issue #8288 tracks the completion of the daemon-owned SOP (Standard Operating Procedure) control plane, aiming for full capability verification.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)
*   **v0.9.0 Coordination:** Issue #7432 serves as the central tracker for v0.9.0, focusing on auth, security, gateway boundaries, and breaking changes.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)

## 7. User Feedback Summary
*   **Workflow Blockers:** Users report significant frustration with provider regressions (Moonshot, Groq) that break existing workflows immediately after updates.
*   **Resource Management:** The accumulation of orphan MCP processes (#5903) and inefficient caching (#8320) are highlighted as performance bottlenecks.
*   **Usability:** The addition of context window bars (#7946) and in-app upgrades (#8173) is positively received as it improves operational visibility and reduces manual intervention.
*   **Integration Pain Points:** Telegram media group handling (#7873) and skill installation targeting incorrect directories (#8334) indicate friction in multi-agent and cross-channel setups.

## 8. Backlog Watch
*   **Maintainer Attention Needed:** Issue #8177 (Supply Chain Signing) is marked as `blocked` and `needs-maintainer-review`. This is a strategic security item requiring high-level architectural decision-making.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)
*   **Long-Open Architecture RFC:** Issue #6165 (Lighter Core via External Integrations) has been open since April but remains `blocked`. Resolving this will define the future modularity of the project.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)
*   **Skill System Bug:** Issue #8334 (`skills install` targeting wrong directory in multi-agent runtime) is a recent discovery that breaks the primary skill distribution flow and needs immediate triage.
    *   [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*