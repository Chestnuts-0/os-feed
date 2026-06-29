# OpenClaw Ecosystem Digest 2026-06-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-29 02:32 UTC

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

# OpenClaw Project Digest: 2026-06-29

## 1. Today's Overview
The OpenClaw project demonstrates high velocity with 500 issues and 500 PRs updated in the last 24 hours, indicating robust community engagement and active development. A new beta release, `v2026.6.11-beta.2`, was published, introducing significant channel control improvements for Slack and Mattermost. The codebase is currently undergoing a major architectural shift toward SQLite-based session and transcript storage, which is driving a surge in related bug reports and feature requests regarding data integrity and migration. Maintainer activity is heavy, with numerous PRs awaiting review and several critical regressions being triaged.

## 2. Releases
**New Release: v2026.6.11-beta.2**

*   **Channel Control Enhancements:**
    *   **Slack Relay Mode:** Improved automation for Slack channels.
    *   **Mattermost Integration:** Native `/oc_queue` command support.
    *   **Per-DM Model Overrides:** Allows tuning model selection per direct message channel.
*   **Contributors:** Acknowledgments to @sjf-oa, @amknight, @xydigit-zt, @thomaszta, and @gandalf-at-lerian.
*   **Migration Notes:** As this is a beta, users should expect potential instability. The ongoing transition to SQLite storage (tracked in PR #96625) may affect session persistence behaviors; refer to issue #88838 for migration details.

## 3. Project Progress
*   **SQLite Storage Flip (PR #96625):** The most significant progress today is the consolidation of the session/transcript storage migration. PR #96625 aims to make per-agent SQLite the canonical runtime store, moving away from legacy JSONL files. This is a foundational change affecting nearly all agents and channels.
*   **Security Hardening (PR #84465):** A fix to strip `apiKey` fields from generated `models.json` to prevent accidental exposure of secrets in configuration files.
*   **Gateway Stability (PR #97623):** Addressed a critical issue where long-running gateways would silently fail over between providers due to undici keep-alive socket timeouts.
*   **QA Improvements (PR #97632):** Folded WebChat auto-TTS proof scripts into the durable QA Lab infrastructure to improve testing maturity.

## 4. Community Hot Topics
*   **Linux/Windows App Support (Issue #75):** With 110 comments and 81 likes, this remains the highest-engagement issue. Users are demanding parity with macOS/iOS/Android nodes for desktop platforms.
    *   *Link:* [openclaw/openclaw #75](https://github.com/openclaw/openclaw/issues/75)
*   **SQLite Migration Tracking (Issue #88838):** 36 comments track the complex path of consolidating session storage. The community is closely watching the stability of the new SQL-backed runtime.
    *   *Link:* [openclaw/openclaw #88838](https://github.com/openclaw/openclaw/issues/88838)
*   **Session State & Message Loss (Issue #88312 & #86538):** Multiple high-comment issues (#88312 with 18 comments, #86538 with 17 comments) highlight frustration with turn-completion stalls and write-lock timeouts. These reflect growing pains associated with the new storage architecture.
    *   *Link:* [openclaw/openclaw #88312](https://github.com/openclaw/openclaw/issues/88312)
    *   *Link:* [openclaw/openclaw #86538](https://github.com/openclaw/openclaw/issues/86538)

## 5. Bugs & Stability
*   **Critical: Session OOM & Unbounded Growth (Issue #55334):** `sessions.json` growth causing Gateway OOM kills is a persistent high-severity bug. Although the migration to SQLite (PR #96625) aims to solve this, legacy instances remain vulnerable.
    *   *Link:* [openclaw/openclaw #55334](https://github.com/openclaw/openclaw/issues/55334)
*   **Regression: Codex Turn-Completion Stall (Issue #88312):** A regression introduced in v2026.5.27 causes Codex app-server turns to fail with "stopped before confirming."
    *   *Link:* [openclaw/openclaw #88312](https://github.com/openclaw/openclaw/issues/88312)
*   **Regression: Discord Channel Loading (Issue #77902):** Channels fail to load in specific beta versions (2026.5.4-beta.2/beta.3), indicating instability in recent release candidates.
    *   *Link:* [openclaw/openclaw #77902](https://github.com/openclaw/openclaw/issues/77902)
*   **Bug: Silent Session Drop (Issue #86827):** Group chat sessions stuck in 'failed' state silently drop subsequent messages, leading to poor user experience without error visibility.
    *   *Link:* [openclaw/openclaw #86827](https://github.com/openclaw/openclaw/issues/86827)
*   **Bug: macOS Location Manager TCC Spam (Issue #94147):** A polling bug causes excessive permission requests on macOS, degrading user trust and performance.
    *   *Link:* [openclaw/openclaw #94147](https://github.com/openclaw/openclaw/issues/94147)

## 6. Feature Requests & Roadmap Signals
*   **Companion-Friendly SQLite Seams (Issue #79902 & #79904):** Users are requesting structured APIs (cursors, typed projections) to access session data from the new SQLite backend, rather than scraping opaque blobs. This suggests a roadmap toward enabling third-party tools and analytics integrations.
    *   *Link:* [openclaw/openclaw #79902](https://github.com/openclaw/openclaw/issues/79902)
*   **Gateway-Lite Mode (Issue #86881):** A request for a lightweight deployment mode without an AI harness, suitable for deterministic plugins and webhooks. This indicates a desire for OpenClaw to serve as a pure orchestration layer.
    *   *Link:* [openclaw/openclaw #86881](https://github.com/openclaw/openclaw/issues/86881)
*   **MCP Tool Approval (Issue #78308):** Feature request to extend channel-mediated approval (like `/approve`) to MCP tool calls, enhancing security for state-changing operations.
    *   *Link:* [openclaw/openclaw #78308](https://github.com/openclaw/openclaw/issues/78308)
*   **Telegram Bot-to-Bot Support (Issue #79077):** Demand for leveraging new Telegram platform features (Guest Bots, Bot-to-Bot) to expand network capabilities.
    *   *Link:* [openclaw/openclaw #79077](https://github.com/openclaw/openclaw/issues/79077)

## 7. User Feedback Summary
*   **Frustration with Regressions:** Multiple users report that recent updates (especially post-2026.5.27) have introduced stability issues like turn stalls, message loss, and channel loading failures. The sentiment is that beta testing is leaking into production-like environments.
*   **Security Concerns:** Users are sensitive to API key leaks (Issue #75) and silent data loss (Issue #86827). The fix in PR #84465 is welcomed.
*   **Desire for Transparency:** The request for detailed session lineage and durable ID discovery (Issue #79903) suggests users want better observability into how their sessions are managed, especially during rotations or resets.
*   **Platform Parity:** The strong interest in Linux/Windows apps (Issue #75) highlights a gap in the ecosystem where mobile users are well-supported, but desktop power users feel neglected.

## 8. Backlog Watch
*   **Maintainer Review Needed:** Several critical PRs are stuck in `needs-maintainer-review` or `waiting on author` states. Notably, the massive SQLite migration PR (#96625) requires careful review due to its scope.
    *   *Link:* [openclaw/openclaw #96625](https://github.com/openclaw/openclaw/pull/96625)
*   **Unanswered High-Impact Issues:**
    *   **Issue #75 (Linux/Windows Apps):** Long-standing request with high engagement.
    *   **Issue #74484 (Gateway Pairing Scope Deadlock):** Security and usability blocker for CLI users.
    *   **Issue #73182 (Reasoning Default Flip):** A silent config change causing unexpected costs for Anthropic users.
*   **Clawsweeper Cleanup:** Many issues are tagged with `clawsweeper:needs-product-decision` or `clawsweeper:needs-maintainer-review`, indicating a bottleneck in triaging lower-priority or ambiguous bugs. Maintainers should prioritize clearing these tags to reduce noise.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report: Personal AI Agents (2026-06-29)

## 1. Ecosystem Overview
The open-source personal AI agent landscape in mid-2026 is characterized by a shift from experimental prototypes to production-hardened orchestration layers. Projects are aggressively addressing the "last mile" challenges of reliability, specifically focusing on state persistence (SQLite migrations), security hardening (sandboxing and secret management), and multimodal context efficiency. The ecosystem is bifurcating into generalist hubs like OpenClaw and Hermes, which offer extensive channel integrations, and specialized or lightweight agents like NanoBot and PicoClaw that prioritize efficiency and protocol determinism. Community engagement is high, with maintainers actively triaging critical regressions introduced by recent architectural overhauls.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 500 | 500 | Beta (v2026.6.11-beta.2) | ⚠️ Volatile (High churn) |
| **Hermes Agent** | 50 | 50 | Stable (Patch cycle imminent) | ⚠️ Volatile (Win GUI issues) |
| **ZeroClaw** | 50 | 50 | Stable (Pre-v0.9.0) | ✅ High (Security focus) |
| **CoPaw** | 6 | 10 | Stable (v1.1.12.post2) | ✅ Moderate (Migration focus) |
| **IronClaw** | 3 | 43 | Internal Bumps (No Public Rel.) | ✅ High (Refinement phase) |
| **NanoBot** | N/A | 24 | Stable (v0.2.2 referenced) | ✅ High (Stability focus) |
| **NanoClaw** | N/A | 6 | Stable (v2.1.1 referenced) | ✅ Moderate (Security patches) |
| **Moltis** | 1 | 2 | Stable | ✅ Low Volume (Maintenance) |
| **LobsterAI** | 5 | 5 | Stable (v2026.6.1) | ⚠️ Moderate (Integration bugs) |
| **PicoClaw** | 1 | 2 | Stable | ✅ Low Volume (Protocol dev) |
| **NullClaw** | 1 | 0 | Stable | ⚠️ Quiet (Niche/Edge) |
| **TinyClaw** | 0 | 0 | No Activity | ❌ Dormant |
| **ZeptoClaw** | 0 | 0 | No Activity | ❌ Dormant |

*Health Score derived from issue resolution rate, PR merge velocity, and absence of critical open regressions.*

## 3. OpenClaw's Position
OpenClaw operates as the **ecosystem heavyweight**, distinguished by its massive scale (500+ daily updates) and aggressive architectural shifts.
*   **Advantages:** Unmatched channel breadth (Slack, Mattermost, Discord, Telegram) and deep integration capabilities. It leads in **session persistence innovation** via the major SQLite migration, aiming to solve legacy JSONL scalability issues.
*   **Technical Differences:** Unlike NanoBot’s "keep it tiny" philosophy or ZeroClaw’s WASM plugin focus, OpenClaw is building a monolithic but modular runtime. It faces higher complexity debt, resulting in frequent regressions (e.g., turn-completion stalls) that smaller projects do not experience.
*   **Community Size:** Significantly larger than peers, evidenced by high-engagement issues (#75 with 110+ comments). However, this size correlates with higher noise levels and slower triage for niche bugs compared to tighter communities like NanoBot.

## 4. Shared Technical Focus Areas
Several critical technical themes are emerging across the majority of active projects:

*   **Session State & Persistence Migration:**
    *   *Projects:* **OpenClaw** (SQLite flip), **CoPaw** (Scroll context manager), **NanoClaw** (Symlink containment).
    *   *Need:* Moving away from flat-file/session-store JSONL to relational or structured storage (SQLite) to prevent OOM kills and ensure data integrity.
*   **Security Hardening & Sandboxing:**
    *   *Projects:* **ZeroClaw** (WASM plugins, SLSA provenance), **NanoClaw** (CWE-59 symlink escapes), **Hermes** (.hermes.md injection limits), **NanoBot** (Shell command validation).
    *   *Need:* Enterprise-grade isolation is no longer optional. Projects are implementing strict boundaries for file I/O, tool execution, and secret management.
*   **Context Window Optimization:**
    *   *Projects:* **Moltis** (Image downscaling), **NanoBot** (Prefix cache invalidation fix), **IronClaw** (Progressive tool disclosure), **ZeroClaw** (Context compression bugs).
    *   *Need:* Reducing latency and cost by managing multimodal payloads (images) and tool schemas more efficiently within LLM context limits.
*   **Deterministic Control Plans:**
    *   *Projects:* **Hermes** (Deterministic Workflow Engine), **ZeroClaw** (SOP Engine), **CoPaw** (Cross-agent loop breaking).
    *   *Need:* Moving beyond pure LLM planning for critical tasks to ensure reliability, reproducibility, and cost predictability.

## 5. Differentiation Analysis

| Dimension | Generalist / Hub | Specialized / Lightweight | Emerging / Niche |
| :--- | :--- | :--- | :--- |
| **Representative Projects** | OpenClaw, Hermes Agent, ZeroClaw | NanoBot, NanoClaw, PicoClaw | NullClaw, LobsterAI |
| **Target User** | Power users, Teams, Enterprise | Developers, Privacy advocates, Edge | Specific verticals (IoT, Visuals) |
| **Architecture** | Monolithic runtime, heavy integration | Modular, plugin-first, minimal footprint | Protocol-focused, embedded-ready |
| **Key Differentiator** | **Breadth:** Most channels & features. | **Efficiency:** Low resource usage, fast startup. | **Control:** Deterministic workflows, strict security. |
| **Primary Risk** | Regression instability, high complexity. | Feature parity gaps, limited scalability. | Community size, long-term viability. |

*   **OpenClaw vs. Hermes:** Both are generalists, but Hermes is pivoting toward **desktop-native stability** (Windows GUI fixes) and **enterprise security**, whereas OpenClaw is focused on **cloud-channel ubiquity** and **backend storage refactoring**.
*   **ZeroClaw vs. NanoBot:** ZeroClaw is adopting **WASM plugins** for extensibility, appealing to security-conscious architects. NanoBot focuses on **prompt engineering efficiency** (caching, context truncation) for cost-sensitive individual users.

## 6. Community Momentum & Maturity

*   **Tier 1: Rapid Iteration & High Complexity (OpenClaw, Hermes, ZeroClaw)**
    *   These projects are in active development cycles with frequent updates. They are mature enough to have complex feature sets but volatile enough to suffer from regression-heavy betas. Maintainers are busy triaging critical bugs (OOMs, crashes).
*   **Tier 2: Stabilization & Refinement (NanoBot, NanoClaw, IronClaw, CoPaw)**
    *   These projects are moving from feature addition to bug squashing and security hardening. IronClaw is preparing for a major subsystem release ("Reborn"). CoPaw is managing a significant framework migration (Agentscope 2.0). Momentum is steady but less chaotic.
*   **Tier 3: Maintenance & Niche (Moltis, PicoClaw, LobsterAI)**
    *   Low issue volume indicates stable codebases or smaller user bases. Focus is on specific optimizations (token efficiency, protocol clarity) rather than broad feature expansion.
*   **Tier 4: Dormant (TinyClaw, ZeptoClaw, NullClaw)**
    *   Lack of recent activity suggests these projects may be shelved, pivoted internally, or have reached a state where no further open-source contribution is required.

## 7. Trend Signals

1.  **From "Chatbot" to "Orchestration Layer":** Projects like OpenClaw (Gateway-Lite), Hermes (Deterministic Workflows), and ZeroClaw (SOP Engine) are evolving into orchestration platforms that manage tools, memory, and other agents, rather than just responding to prompts.
2.  **Security as a Primary Feature:** The prevalence of CVEs, symlink escape fixes, and WASM sandboxes indicates that **trust** is the new currency. Developers are prioritizing supply chain security (SBOMs, signing) and runtime isolation.
3.  **Storage Modernization:** The industry is collectively abandoning JSONL-based session logs in favor of **SQLite** or similar relational databases to handle concurrent writes and prevent data corruption, a trend led by OpenClaw’s massive migration effort.
4.  **Multimodal Cost Control:** With image/video inputs becoming common, projects are implementing aggressive compression, caching, and context pruning (NanoBot, Moltis, IronClaw) to keep inference costs manageable.
5.  **Enterprise Readiness:** Features like role-based access control (IronClaw, ZeroClaw), audit trails, and deterministic execution paths are moving from "nice-to-have" to "required" for serious adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-06-29
**Source:** HKUDS/nanobot

### 1. Today's Overview
The NanoBot project exhibits high development velocity with 24 Pull Requests updated in the last 24 hours, indicating a strong focus on stability, security, and context optimization. While no new releases were published, significant progress was made in fixing critical bugs related to prompt caching and web UI streaming states. Community engagement remains steady, with several feature proposals for voice output and subagent enhancements gaining traction. The project is actively addressing technical debt in session management and subprocess execution environments.

### 2. Releases
**No new releases.**
*(Note: Last known stable version referenced in issues is v0.2.2)*

### 3. Project Progress
**Key Merged/Closed PRs:**
*   **[PR #4510]** Fixed handling of malformed tool calls, preventing crashes from invalid LLM responses.
*   **[PR #4569]** Hardened the tool-call path against malformed relay responses, improving robustness.
*   **[PR #4504]** Enabled subdirectory support for skills, allowing better organization of user-created skills.
*   **[PR #4542]** Improved MCP tool integration by correctly delivering image content as artifacts rather than serialized strings.
*   **[PR #4565]** Resolved WebUI issues where streaming states became stuck after gateway restarts or WebSocket reconnects.
*   **[PR #4566]** Repaired logic for listing sessions with corrupt legacy-stem files.
*   **[PR #4564]** Added guards to cron public APIs to handle unavailable stores gracefully.

**Active Development Highlights:**
*   **Context Optimization:** PR #4568 addresses the "prefix cache invalidation" bug (#4222) by implementing block-aligned replay-window eviction.
*   **Security:** PR #4562 introduces strict validation for shell commands against `exec.allowPatterns` to prevent chained payload attacks.
*   **Subagent Architecture:** PR #4192 allows subagents to inherit MCP tools, and PR #4570 adds per-subagent model overrides.

### 4. Community Hot Topics
*   **[Issue #4010] Text-to-Speech / Voice Output Support**
    *   *Activity:* 2 comments, 2 👍
    *   *Analysis:* Users desire a complete conversational loop. Since input voice is already supported, adding output voice is seen as a low-effort, high-value enhancement for mobile and hands-free use cases.
*   **[Issue #4222] Max_messages truncation invalidating prompt caching**
    *   *Activity:* 2 comments
    *   *Analysis:* A critical performance issue where context governance mechanisms defeat prompt caching, leading to higher latency and cost. The linked PR #4568 is a direct response to this.
*   **[Issue #3938] Message Buffering / Debounce for Group Chats**
    *   *Activity:* 1 comment
    *   *Analysis:* Pain point for multi-user environments (Feishu/Telegram) where rapid successive messages trigger redundant agent turns, causing noise and inefficiency.

### 5. Bugs & Stability
*   **High Severity: Prompt Cache Invalidation ([Issue #4222])**
    *   *Description:* `max_messages` truncation and `microcompact` strategies cause the message prefix to shift constantly, invalidating LLM prefix caches.
    *   *Status:* **Fix in progress** via PR #4568 (merged/closed status pending final review based on update timestamp).
*   **Medium Severity: WebUI Stuck Streaming ([Issue #4500])**
    *   *Description:* Self-restarts or WebSocket disconnects leave the UI in a permanent "processing" state.
    *   *Status:* **Fixed** in PR #4565 (Closed/Merged).
*   **Medium Severity: Malformed Tool Calls ([Issue #4521/PR #4569])**
    *   *Description:* Upstream relays sending malformed tool-use responses caused crashes or infinite loops.
    *   *Status:* **Fixed** in PR #4569 (Closed/Merged) and PR #4510.
*   **Low Severity: Legacy Session File Corruption ([PR #4566])**
    *   *Description:* `list_sessions` silently dropped files with non-base64 legacy stems.
    *   *Status:* **Fixed** in PR #4566 (Closed/Merged).

### 6. Feature Requests & Roadmap Signals
*   **Conda/Virtual Env Support for Subprocesses ([Issue #4580]):** Users need flexible environment handling for code execution. PR #4580 proposes a wrapper for easier configuration.
*   **Per-Subagent Model Override ([Issue #4231, PR #4570):** Allows routing specific subagent tasks to cheaper or specialized models, optimizing cost and performance.
*   **Native Agent-to-Agent (A2A) Delegation ([Issue #4179, PR #4571):** Moving beyond simple spawning to true team-based collaboration with cross-delegation guards.
*   **Provider-Scoped Proxy Config ([PR #4578):** Enhanced network flexibility for enterprise or restricted environments by allowing proxy settings per provider.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Group Chat Noise:** Users in shared channels (Feishu, Telegram) experience frustration with redundant agent responses due to lack of message buffering.
    *   **Cost/Latency:** The prompt caching bug (#4222) directly impacts operational costs and response times, a major concern for power users.
    *   **Skill Management:** Flat directory structures for skills become unmanageable as the library grows; subdirectory support is highly requested.
*   **Satisfaction:**
    *   Users appreciate the rapid response to critical bugs (WebUI stuck state, malformed tool calls).
    *   The "keep it tiny" philosophy is respected, with lightweight UX improvements (session timestamps in sidebar, PR #4579) being well-received.

### 8. Backlog Watch
*   **[Issue #4579] WebUI: Show session timestamps in sidebar + export session as markdown**
    *   *Status:* Open, 0 comments.
    *   *Action:* Low-hanging fruit for UX improvement; likely to be picked up soon given the "tiny code change" description.
*   **[Issue #4580] Use conda environment for subprocesses**
    *   *Status:* Open, 1 comment.
    *   *Action:* Requires careful design to ensure security isolation while providing flexibility. Monitor PR #4580 for implementation details.
*   **[PR #4534] Improve reliability, verification, and exec services**
    *   *Status:* Open.
    *   *Action:* This is a large, comprehensive PR addressing agent loop reliability. Maintainers should prioritize review to prevent regressions in core execution logic.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest: 2026-06-29

## 1. Today's Overview
The Hermes Agent project demonstrates high velocity with 50 issues and 50 PRs updated in the last 24 hours, indicating intense development and community engagement. Activity is heavily skewed toward resolving critical stability regressions in the newly introduced Windows Desktop GUI and fixing security vulnerabilities in platform adapters. While no new releases were published today, the volume of merged and closed PRs suggests a significant patch cycle or hotfix deployment is imminent. The primary focus remains on stabilizing the desktop client experience and hardening security boundaries across various integrations.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Several key areas saw advancement through merged or closed PRs today:
*   **Desktop UI Standardization:** PR #54558 unified overlay primitives for Cron, Profiles, and Agents, addressing inconsistent styling and layout drift in the Desktop app.
*   **Architecture Decoupling:** PR #54568 refactored the WebSocket/JSON-RPC layer to share code between the Desktop app and Dashboard, reducing technical debt and coupling.
*   **Security Hardening:** PR #54569 fixed authentication gaps in Matrix and Mattermost plugins, while PR #54563 limited `.hermes.md` discovery to git repositories to prevent cross-user prompt injection.
*   **Platform Fixes:** PR #54565 addressed the iMessage sidecar launching issue on Windows, and PR #54546 improved the dashboard’s visibility of optional memory provider API keys.
*   **Cleanup:** PR #54564 removed accidental commits of large infographic assets from the repository history.

## 4. Community Hot Topics
The following issues garnered the most discussion and attention, reflecting core user pain points:
*   **[Bug]: Fails to install NeuTTS during setup (#3002)** [Link](https://github.com/NousResearch/hermes-agent/issues/3002)
    *   *Analysis:* High engagement (12 comments, 4 👍) indicates a widespread blocker for users attempting to enable voice capabilities during initial setup.
*   **[Tracking] Windows Desktop GUI: console windows flash on subprocess spawns (#54220)** [Link](https://github.com/NousResearch/hermes-agent/issues/54220)
    *   *Analysis:* An umbrella issue for a pervasive Windows-specific UX defect affecting multiple subprocesses (cmd, git, powershell), highlighting friction in the new Desktop client.
*   **[Feature]: Deterministic Workflow Engine (#5354)** [Link](https://github.com/NousResearch/hermes-agent/issues/5354)
    *   *Analysis:* Strong community interest (8 👍) in moving away from pure LLM-driven planning for repetitive tasks to reduce latency and token costs, signaling a demand for enterprise-grade reliability.
*   **Telegram typing indicator stuck indefinitely (#28004)** [Link](https://github.com/NousResearch/hermes-agent/issues/28004)
    *   *Analysis:* Highlights race conditions in the gateway layer that degrade user experience in real-time chat platforms.

## 5. Bugs & Stability
Significant stability issues were reported today, primarily concentrated in the Desktop application and Windows platform:
*   **High Severity:**
    *   **#54220:** Windows Desktop GUI console flashing (#54220) [Link](https://github.com/NousResearch/hermes-agent/issues/54220). *Fix Status:* Addressed by PR #54565 (iMessage sidecar) and likely part of broader Desktop refinements.
    *   **#54528:** Windows startup timeout and black box flashing (#54528) [Link](https://github.com/NousResearch/hermes-agent/issues/54528). Indicates backend gateway connectivity issues on cold starts.
    *   **#44983:** Critical CVE in WhatsApp bridge (`@whiskeysockets/baileys`) (#44983) [Link](https://github.com/NousResearch/hermes-agent/issues/44983). Requires immediate attention due to security implications.
*   **Medium Severity:**
    *   **#53641:** Dashboard chat input/output invisibility in long sessions (#53641) [Link](https://github.com/NousResearch/hermes-agent/issues/53641). A UI regression in the xterm.js renderer.
    *   **#48445:** Desktop gateway WebSocket disconnects during long tasks (#48445) [Link](https://github.com/NousResearch/hermes-agent/issues/48445). Stability issue affecting long-running agent turns.
    *   **#54049:** DeepSeek streaming interruptions via OpenResty (#54049) [Link](https://github.com/NousResearch/hermes-agent/issues/54049). Provider-specific transport bug.

## 6. Feature Requests & Roadmap Signals
*   **Deterministic Workflow Engine (#5354):** Users are requesting a Lobster-style implementation for mission-critical tasks to ensure consistency and lower costs. This suggests a roadmap direction toward hybrid planning engines.
*   **Persistent User Workspace & Knowledge Base (#531):** Continued interest in RAG integration and persistent document storage beyond ephemeral caches.
*   **Multi-Terminal Panel (#54517):** A new feature PR adds VS Code-style multi-terminal tabs to the Desktop app, enhancing the developer workflow experience.
*   **CubeSandbox Integration (#47614):** Proposal to isolate high-risk tools (terminal, code exec) in KVM microVMs, indicating a strong push for secure, sandboxed execution environments.

## 7. User Feedback Summary
Users are experiencing significant frustration with the **Windows Desktop client**, citing startup failures, UI glitches (IME issues, button misbehavior), and console flashing. There is also notable dissatisfaction with **configuration precedence**, where local `.env` files incorrectly override system-level environment variables (#19201), breaking Docker/systemd deployments. Conversely, users appreciate the ongoing efforts to improve **security boundaries** (e.g., limiting `.hermes.md` access) and **platform stability** (fixing Telegram typing indicators).

## 8. Backlog Watch
*   **#39753:** Config priority conflict where OpenRouter catalog overrides explicit custom provider settings (#39753) [Link](https://github.com/NousResearch/hermes-agent/issues/39753). Closed, but indicates potential for recurrence if not strictly enforced.
*   **#26489:** Hermes hangs with custom providers/LiteLLM/Ollama combinations (#26489) [Link](https://github.com/NousResearch/hermes-agent/issues/26489). An open issue affecting advanced users, marked as duplicate but still unresolved.
*   **#39136:** Stale `hermes dashboard --tui` processes accumulating after updates (#39136) [Link](https://github.com/NousResearch/hermes-agent/issues/39136). A maintenance burden for users upgrading frequently.
*   **#53817:** Desktop model picker failing to show remote presets like MoA/BeastMode (#53817) [Link](https://github.com/NousResearch/hermes-agent/issues/53817). Highlights synchronization gaps between remote gateways and local clients.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-06-29
**Source:** github.com/sipeed/picoclaw

### 1. Today's Overview
The PicoClaw project demonstrates moderate daily activity with one issue closed and two pull requests updated within the last 24 hours. No new releases were deployed today, indicating the codebase is currently in a stabilization or feature-integration phase rather than a release cycle. Community engagement remains focused on protocol determinism and media handling optimizations, with recent contributions addressing critical gaps in WebSocket client signaling and image processing efficiency.

### 2. Releases
*No new releases.* There are no version updates or changelogs for 2026-06-29.

### 3. Project Progress
Development activity today centered on refining the Pico Protocol and enhancing vision capabilities:
*   **Closed Issue (#2984):** A feature request for an explicit turn completion signal in Pico WebSocket clients was closed. While the status is "closed," the lack of a linked merge commit in the summary suggests it may have been marked stale or resolved via discussion rather than immediate code integration.
*   **Closed PR (#2964):** The pull request regarding "image input compression" was closed. This PR introduced configurable inbound image compression for the vision pipeline, aiming to reduce payload sizes before model processing. Its closure status requires verification to determine if it was merged or rejected.
*   **Open PR (#3193):** A new feature branch titled "Added simplex channel type" is currently open. This suggests ongoing work to expand communication channel types within the agent framework.

### 4. Community Hot Topics
*   **Deterministic Agent Signaling:** Issue [#2984](https://github.com/sipeed/picoclaw/issues/2984) highlights a significant pain point for external developers: the lack of a clear "end-of-turn" signal in WebSocket streams. Users require deterministic boundaries between agent responses to manage UI states effectively. The high comment count (4) and reactions (2) indicate strong community interest in standardizing this protocol behavior.
*   **Vision Pipeline Optimization:** PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) addresses performance concerns related to large image inputs. The community is actively seeking ways to balance fidelity with bandwidth and processing speed through configurable compression policies.

### 5. Bugs & Stability
*   **No Critical Bugs Reported:** There are no reports of crashes, regressions, or severe stability issues updated in the last 24 hours.
*   **Stale Indicators:** Both the latest issue (#2984) and the closed PR (#2964) are tagged as `[stale]`. This suggests that while topics were discussed, they may not have received immediate maintainer action or final resolution recently, potentially impacting long-term stability for users relying on these specific features.

### 6. Feature Requests & Roadmap Signals
*   **Simplex Channels:** PR [#3193](https://github.com/sipeed/picoclaw/pull/3193) introduces a "simplex channel type." This signals a roadmap direction toward supporting unidirectional communication flows, which could simplify certain agent-to-client notification scenarios.
*   **Explicit Turn Completion:** The continued relevance of Issue [#2984](https://github.com/sipeed/picoclaw/issues/2984) suggests that future protocol versions will likely prioritize explicit state management in WebSocket interactions to improve client-side reliability.

### 7. User Feedback Summary
Users are prioritizing **protocol clarity** and **resource efficiency**. The demand for an explicit turn completion signal indicates that current event-based streams (`message.create`, `typing.start`) are insufficient for complex client integrations requiring precise synchronization. Similarly, the focus on image compression reflects a need for better resource management in vision-heavy applications, particularly for users with limited bandwidth or high-volume media inputs.

### 8. Backlog Watch
*   **Issue #2984:** Despite being closed, the `[stale]` tag warrants monitoring. If the feature was not implemented, this remains a critical gap for WebSocket clients.
*   **PR #2964:** The status of the image compression feature is unclear due to the `[stale]` tag on a closed PR. Maintainers should clarify if this functionality was integrated or abandoned, as it impacts the vision pipeline's scalability.
*   **PR #3193:** As an open PR, this requires review and merging to advance the "simplex channel" feature into the main codebase.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-29
**Source:** github.com/qwibitai/nanoclaw

### 1. Today's Overview
NanoClaw exhibits high development velocity with 6 Pull Requests updated in the last 24 hours, indicating active maintenance and feature expansion. Activity is dominated by critical security hardening and stability fixes, particularly regarding file handling integrity and session containment. While there are no new releases, the cluster of merged and open PRs suggests imminent improvements to the platform's robustness. Community engagement remains focused on integration reliability (Discord, Telegram) and provider compatibility (OpenAI).

### 2. Releases
*   **No new releases.**
    *   The latest stable version referenced in issues is 2.1.1. No version bumps or changelogs were published on this date.

### 3. Project Progress
**Merged/Closed PRs:**
*   **#2879 [CLOSED] fix(agent-to-agent): containment-check target inbox in forwardAttachedFiles**
    *   **Author:** johnmathews
    *   **Impact:** Successfully addressed CVE/CWE-59 related risks by ensuring agent-to-agent file forwarding respects session boundaries. This PR mirrors defensive patterns used in session managers to prevent symlink escapes.
    *   **Link:** [PR #2879](https://github.com/qwibitai/nanoclaw/pull/2879)

**Advanced Features/Fixes (Open):**
*   **#2880 [OPEN] fix(security): contain inbox symlink escapes in attachment writes**
    *   **Status:** Open, likely related to #2879. Addresses inbound file-write vulnerabilities.
    *   **Link:** [PR #2880](https://github.com/qwibitai/nanoclaw/pull/2880)
*   **#2881 [OPEN] fix(discord): decode custom_id delimiter before parsing button actions**
    *   **Status:** Open. Corrects parsing logic for Discord button interactions to prevent action resolution failures.
    *   **Link:** [PR #2881](https://github.com/qwibitai/nanoclaw/pull/2881)
*   **#2877 [OPEN] feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage**
    *   **Status:** Open. Introduces enhanced formatting capabilities for Telegram integrations.
    *   **Link:** [PR #2877](https://github.com/qwibitai/nanoclaw/pull/2877)

### 4. Community Hot Topics
**Most Discussed/Active Items:**
1.  **Security Hardening (CWE-59 Symlink Escape)**
    *   **Items:** PR #2879 (Merged), PR #2880 (Open), Issue #2828 (Referenced).
    *   **Analysis:** There is significant community attention on file system security within agent containers. Users and contributors are actively patching vulnerabilities where compromised agents could write outside session directories via symlinks. This indicates a mature security-conscious user base.
    *   **Links:** [Issue #2828 Context], [PR #2879](https://github.com/qwibitai/nanoclaw/pull/2879), [PR #2880](https://github.com/qwibitai/nanoclaw/pull/2880)

2.  **Provider Stability (OpenAI)**
    *   **Item:** Issue #2876.
    *   **Analysis:** Users are encountering crashes when switching to the OpenAI provider via CLI. Despite clean config updates, the agent runner fails during container spawn, suggesting a mismatch between CLI configuration expectations and runtime environment setup.
    *   **Link:** [Issue #2876](https://github.com/qwibitai/nanoclaw/issues/2876)

3.  **Integration Enhancements**
    *   **Items:** PR #2875 (Coolify Deployment), PR #2877 (Telegram Rich Messages), PR #2881 (Discord Buttons).
    *   **Analysis:** Strong demand for better deployment tooling (Coolify) and richer UX in chat interfaces (Telegram/ Discord).

### 5. Bugs & Stability
**Reported Issues:**
1.  **High Severity: Agent Container Crash on OpenAI Provider Switch**
    *   **Issue:** #2876
    *   **Description:** Setting `--provider openai` via CLI succeeds, but the agent container crashes upon receiving a message.
    *   **Severity:** High (Blocks functionality for specific provider configurations).
    *   **Fix Status:** No linked PR yet.
    *   **Link:** [Issue #2876](https://github.com/qwibitai/nanoclaw/issues/2876)

2.  **Medium Severity: Discord Button Action Parsing Failure**
    *   **Issue:** Implicit in PR #2881.
    *   **Description:** `handleForwardedEvent` fails to parse `custom_id` correctly due to unhandled newline delimiters, causing `tail` logic errors.
    *   **Severity:** Medium (Breaks interactive UI elements in Discord).
    *   **Fix Status:** Fix proposed in PR #2881.
    *   **Link:** [PR #2881](https://github.com/qwibitai/nanoclaw/pull/2881)

3.  **Medium Severity: Codex Auth Token Staleness**
    *   **Issue:** Implicit in PR #2878.
    *   **Description:** Agents fail mid-conversation if OneCLI secrets are stale, returning generic refresh errors rather than prompting re-authentication gracefully.
    *   **Severity:** Medium (Disrupts long-running sessions).
    *   **Fix Status:** Fix proposed in PR #2878.
    *   **Link:** [PR #2878](https://github.com/qwibitai/nanoclaw/pull/2878)

### 6. Feature Requests & Roadmap Signals
**Signals for Next Release:**
*   **Telegram Rich Media Support:** PR #2877 proposes using Bot API 10.1 `sendRichMessage`. If merged, the next release will support advanced formatting in Telegram, aligning with Discord improvements.
*   **Deployment Simplification:** PR #2875 introduces "Deploy/coolify" operational skills. This signals a roadmap direction toward easier DevOps integration for self-hosted users.
*   **Provider Agnosticism:** The crash in Issue #2876 suggests a need for more robust provider validation in the agent-runner before container spawn, potentially leading to better error messages or pre-flight checks.

### 7. User Feedback Summary
*   **Pain Points:**
    *   **Fragile Provider Config:** Users are frustrated that CLI config updates appear successful but lead to runtime crashes (Issue #2876).
    *   **Integration Quirks:** Discord button interactions are unreliable due to encoding issues (PR #2881).
*   **Satisfaction Drivers:**
    *   **Security Responsiveness:** The rapid merging of security patches (PR #2879) and ongoing work on symlink escapes (PR #2880) builds trust among enterprise/security-focused users.
    *   **Feature Richness:** Requests for Telegram enhancements and Coolify deployment support show users are looking for polish and ease of use, not just core functionality.

### 8. Backlog Watch
*   **Issue #2876 [OPEN]:** Add OpenAI provider to agent-runner.
    *   **Status:** Unresolved. High impact as it blocks a major LLM provider configuration. Requires maintainer investigation into the container spawn process.
    *   **Link:** [Issue #2876](https://github.com/qwibitai/nanoclaw/issues/2876)
*   **PR #2875 [OPEN]:** Deploy/coolify.
    *   **Status:** Open. Depends on maintainer review of the "operational/container skill" guidelines.
    *   **Link:** [PR #2875](https://github.com/qwibitai/nanoclaw/pull/2875)
*   **PR #2880 [OPEN]:** fix(security): contain inbox symlink escapes.
    *   **Status:** Open. Critical security fix awaiting merge alongside #2879.
    *   **Link:** [PR #2880](https://github.com/qwibitai/nanoclaw/pull/2880)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-06-29

### 1. Today's Overview
NullClaw exhibits minimal activity on June 29, 2026, with no new pull requests or releases generated in the last 24 hours. The repository remains in a maintenance phase, characterized by low engagement volume but consistent closure of specific technical inquiries. The primary recent action was the resolution of Issue #50 regarding hardware compatibility, indicating that the maintainers are actively addressing community questions even if feature development is currently paused. Overall project health appears stable but quiet, with no immediate blockers or critical updates requiring urgent attention.

### 2. Releases
No new releases were published during this reporting period. The latest version history remains unchanged since the previous cycle.

### 3. Project Progress
There were no merged pull requests today. Consequently, no new features were added, nor were any code-level improvements deployed. The only progress made was administrative, specifically the closing of Issue #50, which resolved an outstanding inquiry without requiring code modification.

### 4. Community Hot Topics
The most significant discussion today revolved around **Issue #50: "Can this run on an Esp32?"** ([Link](https://github.com/nullclaw/nullclaw/issues/50)).
*   **Activity:** This issue was closed on June 28, 2026, after four comments.
*   **Analysis:** The request highlights a strong community interest in edge computing and lightweight deployment options. Users are seeking to run NullClaw on resource-constrained hardware like the ESP32, suggesting a demand for a microcontroller-compatible variant or optimized lightweight client. Although the issue is closed, the lack of upvotes (👍: 0) suggests this may be a niche requirement rather than a broad demand, yet it signals a potential roadmap opportunity for IoT integration.

### 5. Bugs & Stability
No bug reports, crashes, or regressions were filed today. The single closed issue (#50) was a compatibility inquiry rather than a software defect. The project shows no signs of instability based on today's data.

### 6. Feature Requests & Roadmap Signals
*   **IoT/Microcontroller Support:** As indicated by Issue #50, there is a clear signal for support on ESP32 platforms.
*   **Prediction:** If the maintainers decide to act on this feedback, future roadmap items may include a "NullClaw Lite" or embedded SDK. However, given the current silence on PRs, this remains an unconfirmed user need rather than an active development track.

### 7. User Feedback Summary
User sentiment appears neutral to inquisitive. The feedback from Issue #50 demonstrates curiosity about the project's technical boundaries. There are no reports of dissatisfaction or high-priority pain points today. The user base seems engaged enough to ask specific technical questions but not active enough to drive rapid iteration or report widespread issues.

### 8. Backlog Watch
*   **Issue #50:** While closed, the underlying question about ESP32 compatibility should be monitored. If the answer provided was negative, users may return with follow-ups or alternative workarounds.
*   **General Inactivity:** With zero open issues and zero PRs, there is currently no backlog requiring immediate maintainer intervention. The repository is effectively in a holding pattern until new contributions or questions arise.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-06-29
**Source:** GitHub Data Analysis

## 1. Today's Overview
The IronClaw project is experiencing high velocity with 43 Pull Requests updated in the last 24 hours, indicating intense development activity focused on the "Reborn" subsystem and integration testing frameworks. While no new official releases were published, significant internal version bumps and dependency updates suggest preparation for upcoming stability improvements. Community engagement remains moderate with 3 issues addressed, primarily concerning capability policies and CI stability. The project appears to be in a critical refinement phase, prioritizing robustness in Slack pairing flows, error visibility, and WebUI QA processes.

## 2. Releases
**No new public releases were published on 2026-06-29.**

However, internal dependency and component updates were processed via PR #5311 and #5391:
*   **Component Updates:** `ironclaw_common` bumped to `0.5.0` (breaking API changes), `ironclaw` core to `0.29.1`, and `ironclaw_skills` to `0.4.0`.
*   **Dependency Bumps:** Significant updates include `agent-client-protocol` from `0.10.4` to `1.0.0` and various Rust ecosystem libraries (Tokio, Hyper, Wasm tools).

## 3. Project Progress
Significant advancements were made in the following areas:

*   **Slack Integration Hardening:** PRs #5362 and #5377 improved the security and UX of Slack account pairing. A new `/pair` slash command was added for ephemeral code generation, and copy/text was hardened to prevent stale code issues.
*   **Error Visibility:** PR #5338 resolved a critical usability gap where users saw generic "invalid_input" errors. The fix now surfaces real failure details end-to-end in the terminal run summary and activity cards.
*   **Integration Testing Framework:** PR #5392 extended the Reborn integration-test framework with slices 3–9, covering LibSql matrices, HTTP matchers, and MCP/OAuth refresh logic. PR #5387 specifically added URL-keyed HTTP matching capabilities.
*   **WebUI QA:** PR #5354 introduced a live QA canary lane for WebUI v2, driving real `ironclaw-reborn serve` instances through Playwright against live LLM/tool integrations.
*   **Context Management Optimization:** PR #5149 addressed latency timeouts by implementing progressive tool disclosure, reducing prompt token usage from ~25.8k tokens significantly.

## 4. Community Hot Topics
*   **Capability Policy Configuration (Issue #5385):**
    *   *Link:* [nearai/ironclaw Issue #5385](https://github.com/nearai/ironclaw/issues/5385)
    *   *Analysis:* Users are requesting fine-grained control over user roles (owner, admin, member). This reflects a growing need for multi-user or enterprise-grade access control within the Reborn architecture.
*   **Nightly E2E Failures (Issue #4108):**
    *   *Link:* [nearai/ironclaw Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
    *   *Analysis:* Persistent failures in the nightly E2E workflow indicate instability in the core integration tests. This is a high-priority signal for maintainers as it blocks confidence in new merges.
*   **WebUI v2 Artifact Cleanup (Issue #5236):**
    *   *Link:* [nearai/ironclaw Issue #5236](https://github.com/nearai/ironclaw/issues/5236)
    *   *Analysis:* Closed issue requesting the removal of committed WebUI v2 dist bundles. This aligns with the broader effort to self-host frontend assets and reduce CDN dependencies (PR #5024).

## 5. Bugs & Stability
*   **Google OAuth Decoding Failure (PR #5388 - Closed):**
    *   *Issue:* Reborn WebUI Google SSO `id_token` decoding failed after `jsonwebtoken` 10.x bump.
    *   *Status:* Fixed. The PR also canonicalized auth routes to prevent issues with Railway preview domains.
*   **Vague Tool Errors (PR #5338 - Open):**
    *   *Issue:* Users received generic "driver protocol error" instead of specific tool failure reasons.
    *   *Status:* Fix in progress. PR #5338 surfaces real failure details end-to-end.
*   **Exa Content Fetch (PR #5395 - Open):**
    *   *Issue:* Web Access `get_content` needed tightening for Exa MCP net capabilities.
    *   *Status:* Fix in progress. Updates schema to distinguish between cached lookups and live fetches.
*   **CI Instability:**
    *   *Issue:* Nightly E2E workflows continue to fail (Issue #4108).
    *   *Status:* Unresolved. Requires investigation into the "Full E2E / E2E (features)" job failure.

## 6. Feature Requests & Roadmap Signals
*   **Granular User Roles:** The request in Issue #5385 for "Owner/Admin/Member" policies suggests a roadmap shift towards multi-tenant or team-based usage models.
*   **Deterministic Fake Providers:** The integration test framework expansion (PR #5392) signals a move towards more reliable, mock-heavy testing environments for external services like Embeddings and HTTP egress.
*   **Slack Command Interface:** The addition of `/pair` (PR #5377) indicates a roadmap focus on improving self-service recovery flows for bot pairings without human intervention.

## 7. User Feedback Summary
*   **Pain Points:** The primary user complaint addressed today was the lack of actionable error messages during tool execution (PR #5338). Users found generic errors unhelpful for debugging their own agent configurations.
*   **Usability:** The introduction of the `/pair` slash command addresses a friction point in Slack onboarding, allowing users to recover pairing states without relying on support or complex manual steps.
*   **Performance:** Users are sensitive to latency; the context management fix (PR #5149) directly responds to timeouts caused by oversized system prompts containing all tool schemas.

## 8. Backlog Watch
*   **Nightly E2E Failure (Issue #4108):** This bug has been open since May 27, 2026, and remains unresolved despite being flagged as a failure. It poses a risk to release confidence.
*   **Dependabot Maintenance (PR #4002, #5391):** Several large dependency groups (Actions, Everything Else) have open PRs with updates. Maintainers should prioritize reviewing these to ensure compatibility with the new `ironclaw_common` 0.5.0 API.
*   **WebUI V2 Live Canary (PR #5354):** While this adds a canary lane, it is still marked as "Open." Ensuring this QA pipeline is stable is critical before declaring WebUI v2 ready for broader testing.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-06-29
**Source:** GitHub (netease-youdao/LobsterAI)

### 1. Today's Overview
The LobsterAI project demonstrates moderate daily activity with 5 issues and 5 pull requests updated in the last 24 hours. While no new releases were published, significant progress was made in stabilizing core functionalities, particularly regarding skill management and UI consistency. The community is actively reporting integration issues with third-party providers (OpenClaw, OpenAI Embeddings), indicating a growing reliance on external APIs that require robust fallback mechanisms. Maintainer attention is currently focused on resolving stale bugs and refining the user experience for scheduled tasks and agent skills.

### 2. Releases
*   **No new releases** were published today.
*   Current stable version referenced in issues: `2026.6.1`.

### 3. Project Progress
Three major Pull Requests were merged/closed today, focusing on UI refinement and state management stability:
*   **[PR #1440] Skill Tag UI Optimization:** Moved selected skill badges from the bottom toolbar to above the text input area, improving visual hierarchy and reducing clutter when multiple skills are active.
    *   [Link](https://github.com/netease-youdao/LobsterAI/pull/1440)
*   **[PR #1441] Extensible Artifact Preview Pipeline:** Resolved merge conflicts and fixed 5 runtime bugs in the HTML, React, and Mermaid preview pipeline for Cowork sessions, enhancing the reliability of code/artifact rendering.
    *   [Link](https://github.com/netease-youdao/LobsterAI/pull/1441)
*   **[PR #1445] Skill Import Validation Fix:** Addressed critical issues where duplicate skills caused silent installations and system prompt instability. The fix introduces proper validation via `readSkillNameFromDir()` to prevent duplicate injections.
    *   [Link](https://github.com/netease-youdao/LobsterAI/pull/1445)

### 4. Community Hot Topics
The most discussed topics revolve around compatibility with newer library versions and specific UI behaviors:
*   **OpenClaw Compatibility:** Users are encountering breaking changes with OpenClaw v2026.3.24, leading to startup failures. There is a strong demand for official support for this newer version.
    *   [Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443)
*   **Scheduled Task UX:** A recurring issue involves the "Create Task" button becoming unresponsive when non-repeating plans are selected, suggesting a frontend state handling bug in the calendar picker.
    *   [Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437)
*   **Skill Persistence Logic:** Users are confused about why selected skills disappear after a conversation ends unless the agent is switched. This highlights a need for clearer documentation or persistent state design for skills across sessions.
    *   [Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442)

### 5. Bugs & Stability
Several bugs were addressed or identified today, ranked by severity:
1.  **High Severity: Memory Search Lock-in (Issue #2216):** Users cannot switch the Memory Search embedding provider from OpenAI to Local/Other. When OpenAI quotas are exhausted (429 errors), the entire memory search feature becomes unusable. This is a critical stability issue for privacy-conscious or cost-sensitive users.
    *   [Link](https://github.com/netease-youdao/LobsterAI/issues/2216)
2.  **Medium Severity: Disabled Skill Invocation (Issue #1439):** Even when a skill is disabled in settings, it can still be invoked via keywords during conversations, violating user configuration intent.
    *   [Link](https://github.com/netease-youdao/LobsterAI/issues/1439)
3.  **Low Severity: Scheduled Task UI Freeze (Issue #1437):** Clicking "Create Task" with specific calendar settings results in no feedback or action, though no error is thrown.
    *   [Link](https://github.com/netease-youdao/LobsterAI/issues/1437)

### 6. Feature Requests & Roadmap Signals
*   **Local Embedding Support:** The urgent report in Issue #2216 signals a strong community need for reliable local embedding providers (e.g., Ollama, LocalAI) to avoid dependency on external API limits and costs.
*   **Session-Independent Skill State:** PR #1494 is currently open, proposing to isolate skill selection states per conversation session. This suggests the roadmap includes refining how agents manage context-specific tools versus global preferences.
    *   [Link](https://github.com/netease-youdao/LobsterAI/pull/1494)
*   **Scheduled Task UI Overhaul:** PR #1488 proposes a comprehensive UI upgrade for scheduled tasks (card grid, search, history filtering). If merged, this indicates a push toward improving the usability of automation features.
    *   [Link](https://github.com/netease-youdao/LobsterAI/pull/1488)

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by the lack of flexibility in embedding providers (forced OpenAI) and the inability to properly disable skills without them being auto-invoked.
*   **Positive Reception:** The community appreciates the ongoing UI improvements, such as the cleaner layout for scheduled tasks and better artifact previews.
*   **Confusion:** There is ambiguity regarding the lifecycle of "selected skills" in agent conversations, with users expecting either persistence or explicit clearing rather than the current behavior.

### 8. Backlog Watch
*   **OpenClaw Adaptation:** Issue #1443 remains a priority for maintainers to assess the breaking changes in OpenClaw v2026.3.24 and plan an update.
*   **Skill State Isolation:** PR #1494 and PR #1442 are closely related; maintainingers should ensure the fix in PR #1494 (session-independent skills) adequately resolves the confusion noted in Issue #1442.
*   **Scheduled Task Bug:** Issue #1437 needs a root cause analysis to determine if the "no response" is a frontend event handler failure or a backend timeout issue.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-06-29
**Source:** github.com/moltis-org/moltis

## 1. Today's Overview
Moltis is experiencing low-volume but high-impact activity today, with zero new releases and minimal issue turnover. The development focus is currently on stabilizing core infrastructure and optimizing token efficiency within the agent pipeline. Two pull requests remain open for review, addressing critical build dependencies and context window management, while a single bug report highlights container naming constraints. The project health appears stable, with active maintenance on technical debt rather than feature expansion.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
There are no merged or closed PRs today. However, two significant fixes are currently under review:
*   **Dependency Optimization (PR #1139):** A fix for the gateway module to prevent the forced inclusion of the `matrix-sdk` when the `metrics` feature is enabled. This reduces build size and unnecessary dependencies.
    *   [View PR #1139](https://github.com/moltis-org/moltis/pull/1139)
*   **Context Efficiency (PR #1138):** A fix for agents to downscale oversized images before embedding them in the model context. This addresses a critical issue where large images exceed token budgets, causing prompt rejection.
    *   [View PR #1138](https://github.com/moltis-org/moltis/pull/1138)

## 4. Community Hot Topics
The most discussed topic today revolves around the **Apple Container ID limit**, which has generated immediate community concern due to its impact on deployment compatibility.

*   **Issue #1137:** Reported by `holgzn`, this bug details how Apple Container IDs exceed system name limits. It has garnered 1 comment since its creation on 2026-06-27.
    *   [View Issue #1137](https://github.com/moltis-org/moltis/issues/1137)
    *   **Analysis:** This indicates a need for better sanitization or truncation logic for container identifiers in macOS environments, suggesting a gap in current deployment scripts or configurations.

## 5. Bugs & Stability
One bug was reported today, focusing on operational constraints rather than runtime crashes.

*   **Severity: Medium** - **Apple Container ID exceeds name limit** (#1137).
    *   **Description:** Users encounter failures when container IDs generated by the system exceed permissible name lengths.
    *   **Status:** Open. No linked fix PR exists yet.
    *   **Impact:** Affects users deploying on macOS/Apple ecosystems, potentially blocking production deployments.

## 6. Feature Requests & Roadmap Signals
While no explicit feature requests were logged today, the ongoing PRs signal upcoming roadmap priorities:
*   **Modular Dependency Management:** PR #1139 suggests a continued push to make Moltis more modular and lighter-weight by decoupling optional features like Matrix metrics from core builds.
*   **Multimodal Context Optimization:** PR #1138 highlights a commitment to improving multimodal capabilities by ensuring image handling does not break context windows, a key requirement for advanced agent interactions.

## 7. User Feedback Summary
User feedback is currently centered on **usability and deployment friction**:
*   **Pain Point:** Deployment failures on Apple systems due to identifier length limits (#1137).
*   **Pain Point:** Token exhaustion due to unoptimized image handling (#1138 discussion context).
*   **Sentiment:** Users are actively engaging with bug reports, indicating a desire for robust, out-of-the-box compatibility with standard development environments (like macOS containers) and efficient resource usage.

## 8. Backlog Watch
Maintainers should prioritize reviewing **PR #1138** and **PR #1139** as they address fundamental stability and performance issues that directly impact user experience. Additionally, **Issue #1137** requires attention to ensure cross-platform compatibility, particularly for users in the Apple ecosystem. Given the lack of recent closed PRs, clearing these open items will help maintain development momentum.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-06-29
**Source:** github.com/agentscope-ai/CoPaw

### 1. Today's Overview
The CoPaw project exhibits high development velocity today with 16 total updates (6 issues, 10 PRs) despite no new releases. Activity is heavily skewed towards backend stability, testing infrastructure, and the ongoing migration to Agentscope 2.0. There is a notable focus on improving cross-agent communication protocols and refining the user interface for skill management. While no critical outages were reported, several integration bugs and performance optimizations are being actively addressed.

### 2. Releases
*   **No new releases published today.**
*   Current active versions referenced in issues include `v1.1.11.post2` and `v1.1.12.post2`.

### 3. Project Progress
*   **Testing Infrastructure:** Significant progress made in parallelizing integration tests. PR **#5531** reduced local integration runtime from ~24 minutes to ~3.5 minutes using `pytest-xdist`, addressing flakiness and race conditions.
*   **Agentscope 2.0 Migration:** Multiple PRs (#5581, #5422, #5423) indicate a sprint-wide effort to adapt backend unit tests for `qwenpaw.app` (chats, crons, infra layers) to align with the `agentscope==2.0.2` dependency.
*   **Plugin Stability:** PR **#5568** addresses installation failures for 5 official plugins on QwenPaw 2.0 caused by breaking changes in the Agentscope 1.x to 2.0 migration.
*   **UI Enhancements:** PR **#5515** enables latest beta UI capabilities for the chat component, including new navigator anchor variants.

### 4. Community Hot Topics
*   **Cross-Agent Communication Loops:** Issue **#5204** discusses a critical infinite loop where two QwenPaw Agents wake each other up indefinitely via Matrix. This highlights a gap in runtime-level feedback circuit breaking for multi-agent scenarios.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5204)
*   **DingTalk @Mention Support:** Issue **#5564** and PR **#5590** center on enabling `@mention` functionality in DingTalk channels. This is a high-priority feature for multi-agent collaboration in enterprise environments where explicit triggering is required.
    *   [Issue](https://github.com/agentscope-ai/QwenPaw/issues/5564) | [PR](https://github.com/agentscope-ai/QwenPaw/pull/5590)
*   **Memory Retrieval Precision:** Issue **#5588** proposes implementing a two-stage retrieval (embedding + reranker) for memory search to improve accuracy as knowledge bases grow.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5588)

### 5. Bugs & Stability
*   **High Severity:** Issue **#5204** reports a functional regression where cross-agent messaging creates unbreakable loops. This requires a runtime mechanism to detect and interrupt recursive wake-up chains.
*   **Medium Severity:** Issue **#5587** reports an installation error for the `Qwen-Image Tool`.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5587)
*   **Low Severity:** Issue **#5591** flags excessive logging noise (`GET /api/console/inbox/events`) in the terminal on UOS, cluttering output with over 40,000 identical logs.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5591)
*   **Context Compaction:** PR **#5586** fixes a bug where conversation-level model overrides are ignored during context compaction threshold calculations.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/pull/5586)

### 6. Feature Requests & Roadmap Signals
*   **Continuous Skill Input:** Issue **#5589** requests UX improvements to allow adding multiple skills in the input box without retyping `/`, indicating a need for smoother power-user workflows.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5589)
*   **Advanced Memory Reranking:** Issue **#5588** suggests integrating LLM-based reranking for memory search, signaling a roadmap shift toward higher precision in long-term memory retrieval.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/issues/5588)
*   **Durable Context Scroll:** PR **#5321** introduces a "scroll" context strategy using SQLite for durable history, offering an alternative to summarization-based compression.
    *   [Link](https://github.com/agentscope-ai/QwenPaw/pull/5321)

### 7. User Feedback Summary
*   **Enterprise Collaboration Needs:** Users are increasingly deploying multi-agent systems in corporate chat environments (e.g., DingTalk), creating strong demand for precise targeting (`@mention`) and robust inter-agent communication protocols.
*   **Performance Sensitivity:** The community highly values CI/CD efficiency, as evidenced by the positive reception of the 7x speedup in integration tests (PR #5531).
*   **Configuration Friction:** Users report confusion or frustration with configuration persistence across model switches (PR #5586) and verbose logging that interferes with monitoring (Issue #5591).

### 8. Backlog Watch
*   **Issue #5204 (Cross-Agent Loop):** This bug impacts core reliability of multi-agent deployments. It remains open and requires architectural intervention to break feedback loops at the runtime level.
*   **Issue #5587 (Qwen-Image Install Error):** As a tool-specific installation failure, it blocks specific user workflows and needs resolution to ensure complete toolchain availability.
*   **PR #5321 (Scroll Context Manager):** While innovative, this PR has been open since June 19. Maintainers should review its compatibility with the ongoing Agentscope 2.0 migration to ensure it integrates smoothly with new context handling standards.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-06-29

### 1. Today's Overview
ZeroClaw demonstrated high development velocity on June 29, 2026, with 50 issues and 50 pull requests updated within the last 24 hours. The project is heavily focused on stabilizing the v0.8.3 release cycle, particularly regarding runtime execution, tool serialization, and security hardening. While no new public releases were published today, significant infrastructure improvements in CI/CD and security signing (cosign/SLSA) were merged. The community is actively engaging with complex architectural RFCs, specifically around plugin systems and provider models, indicating a maturing codebase ready for deeper customization.

### 2. Releases
**No new versions released.**
The latest activity centers on the v0.8.3 and v0.9.0 tracking milestones. Key preparatory work for upcoming releases includes merging security signing pipelines and refining the WASM plugin host.

### 3. Project Progress
**Merged/Closed Pull Requests & Issues:**
*   **Security & CI Hardening:** PR #8404 merged the implementation for Issue #8058, adding cosign signing, SLSA provenance, and SBOM generation to the release pipeline. This significantly enhances supply chain security.
*   **Delegation Logic:** PR #8239 closed Issue #8238, introducing "independent delegate mode." This allows specialist agents to operate under their own policy/toolset, a major step forward in multi-agent orchestration.
*   **Observability:** PR #6966 merged enhancements to OpenTelemetry spans, capturing prompt/completion content on `llm.response` spans, improving debugging for Langfuse/Tempo users.
*   **Logging Refactor:** PR #8437 extracted the JSONL write pipeline into a testable helper, improving maintainability without changing production behavior.
*   **Web Search Performance:** PR #8350 optimized `strip_tags` by caching the regex in a `LazyLock`, reducing CPU overhead in web search tools.
*   **Config Parsing Fix:** PR #8326 fixed a bug where editors emitting UTF-8 BOMs (e.g., Notepad on Windows) caused `config.toml` parsing failures.

**Key Active Developments:**
*   **SOP Engine:** Multiple PRs (#8420, #8416, #8399) are advancing the Standard Operating Procedure (SOP) engine, implementing step contracts, schema enforcement, and live execution queues.
*   **WASM Plugin Host:** PR #8368 represents a major architectural shift, replacing Extism with a direct `wasmtime` component model host, aligning with RFC #6943.
*   **Goal Mode:** PR #8393 implements the runtime control plane for "Goal Mode," repurposing previous drafts into a functional feature.

### 4. Community Hot Topics
*   **Tool Filtering & MCP Integration (Issue #6699):** With 7 comments, this bug regarding `tool_filter_groups` being a no-op for real MCP tools is the most discussed issue. It highlights a critical disconnect between configuration parsing and runtime dispatch for advanced tool setups.
*   **i18n Architecture (Issue #7184):** An RFC to move `.ftl` and `.po` files to a git submodule (5 comments) reflects community desire to reduce repo clutter and streamline translation workflows.
*   **Plugin System Deconfliction (Issue #6943):** An RFC to replace Extism with `wasmtime` component models (4 comments) indicates strong interest in modernizing the plugin architecture for better performance and standards compliance.
*   **Memory Lifecycle (Issue #6850):** An RFC to decouple memory policies from storage backends (3 comments) suggests users want more flexibility in how context is managed and consolidated.

### 5. Bugs & Stability
**High/Medium Severity Bugs:**
*   **[Bug] Context Compression Drops Tool Calls (Issue #6361):** *Severity S1 (Workflow Blocked).* Context compression fails for OpenAI-compatible providers (e.g., MiniMax), dropping assistant/tool calls and causing infinite loops. **Status:** Open.
*   **[Bug] MCP Tool Filter Prefix Mismatch (Issue #6699):** *Risk High.* `tool_filter_groups` does not apply to real MCP tools due to a prefix-check bug in the dispatch loop. **Status:** Open.
*   **[Bug] Heartbeat Engine Config Path (Issue #8366):** *Closed/Fixed.* The heartbeat engine incorrectly read `HEARTBEAT.md` from `data_dir` instead of the agent workspace. **Status:** Closed.
*   **[Bug] Telegram Prompt Caching (Issue #6360):** *Closed/Fixed.* Prompt caching failed over Telegram, forcing full reprocessing. **Status:** Closed.
*   **[Bug] SQLite Hybrid Search Degradation (Issue #8386):** *Severity S2.* Default SQLite memory backend silently degrades to keyword-only search if no embedding model is configured, misleading new users. **Status:** Open.
*   **[Bug] Channel Session Race Condition (Issue #7753):** *Risk High.* Concurrent same-sender messages cause ordering races in session persistence. **Status:** Open.

### 6. Feature Requests & Roadmap Signals
*   **Telegram Multi-Messages (Issue #8445):** Request to send each agent turn as a separate Telegram message rather than concatenating them. This improves readability for long responses.
*   **Telegram Rich Messages (Issue #8415):** Implementation of Telegram Bot API 10.1 Rich Messages (tables, etc.) to enhance UX.
*   **Pause/Disable Scheduled Tasks (Issue #7356):** Users want granular control over cron jobs without deleting them.
*   **Workspace File Protection (Issue #8424):** RFC for a `.ignore` file mechanism to protect sensitive files from AI agent access at a finer granularity than directory-level `forbidden_paths`.
*   **Wire-Protocol-First Provider Model (Issue #8396):** RFC to make `wire_api` the primary organizing axis for providers, simplifying integration of new LLM backends.
*   **Pluggable Skill Registries (Issue #7816):** Generalizing skill sources beyond GitHub to allow user-configured catalogs and flagged external registries.

### 7. User Feedback Summary
*   **Configuration Pain Points:** Users are frustrated by misleading documentation and configuration gaps, such as the SQLite memory backend requiring an embedding model for hybrid search (Issue #8386) and the silent failure of tool filters (Issue #6699).
*   **UX Improvements:** There is strong demand for better Telegram integration, specifically regarding message formatting (rich messages) and multi-turn clarity (separate messages per turn).
*   **Safety & Control:** The push for `.ignore` files (Issue #8424) and independent delegation modes (Issue #8238) shows users are increasingly deploying ZeroClaw in sensitive environments and require robust isolation and access controls.
*   **Debugging Needs:** Enhanced observability (PR #6966) and clearer logging rotations (Issue #7878) address user difficulties in diagnosing runtime issues.

### 8. Backlog Watch
*   **Context Compression Critical Bug (Issue #6361):** This S1 bug blocks workflows for users of OpenAI-compatible providers. It requires immediate attention as it causes functional failures (tool loops).
*   **Session Persistence Race Condition (Issue #7753):** A high-risk concurrency bug affecting channel reliability.
*   **RFC Responses:** Several high-impact RFCs (Issues #6943, #6850, #8396, #8424) have low comment counts but high strategic importance. Maintainers need to review and accept/reject these architectural shifts to guide the v0.9.0 roadmap.
*   **i18n Lag (Issue #6698):** Locale files lagging behind English sources indicates a maintenance bottleneck in the translation workflow, potentially addressed by the submodule RFC (Issue #7184).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*