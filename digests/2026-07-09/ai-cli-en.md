# AI CLI Tools Community Digest 2026-07-09

> Generated: 2026-07-09 01:56 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem Report: 2026-07-09

## 1. Ecosystem Overview
The AI CLI landscape in July 2026 is characterized by a maturation phase where initial novelty has given way to rigorous demands for stability, cost predictability, and enterprise-grade security. Major players like Claude Code and OpenAI Codex are grappling with significant reliability regressions, particularly regarding token efficiency and platform-specific bugs, while smaller, specialized tools like OpenCode and DeepSeek TUI are focusing on architectural robustness and mobile/edge compatibility. The community is increasingly vocal about "black box" behaviors, demanding transparency in session management, agent autonomy, and billing, signaling a shift from feature adoption to operational trust.

## 2. Activity Comparison

| Tool | Issues (Updated/Hot) | PRs (Active/Key) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 Hot Issues (High Severity) | 10 Key PRs (Security/Fixes) | **v2.1.205** Released |
| **OpenAI Codex** | 10 Hot Issues (Critical Bugs) | 10 Key PRs (Network/UI Fixes) | **v0.144.0-alpha** Released |
| **Gemini CLI** | 10 Hot Issues (Agent Stability) | 10 Key PRs (Security/Core) | **v0.50.0 / v0.51.0-preview** |
| **GitHub Copilot** | 10 Hot Issues (Loop/Auth Bugs) | 2 PRs (Minor/Install) | No New Releases |
| **Kimi Code** | 1 Hot Issue (SSL/Enterprise) | 0 PRs | No New Releases |
| **OpenCode** | 10 Hot Issues (Perf/Compat) | 10 Key PRs (Session/VCS) | No New Releases |
| **Pi** | 10 Hot Issues (State/Render Bugs) | 10 Key PRs (Metadata/Clipboard) | No New Releases |
| **Qwen Code** | 10 Hot Issues (Daemon/Session) | 10 Key PRs (Workspace/Memory) | **v0.19.8** Released |
| **DeepSeek TUI** | 10 Hot Issues (Fleet/Config) | 10 Key PRs (Routing/Android) | No New Releases |

## 3. Shared Feature Directions
*   **Sub-Agent & Multi-Agent Autonomy:** Nearly all major tools (Claude, Gemini, OpenCode, Qwen, DeepSeek) are facing community pressure to improve sub-agent reliability. Users are reporting infinite loops, hangs, and lack of transparency in multi-step agent workflows.
*   **Enterprise Security & Compliance:** There is a unified demand for better handling of corporate environments. This includes SSL bypass options (Kimi), proxy support (OpenAI, Gemini), workspace trust enforcement (Gemini, Qwen), and BYOK (Bring Your Own Key) stability (Copilot).
*   **Token & Cost Transparency:** A pervasive trend across Claude, OpenAI, and Qwen is the community's frustration with unpredictable token consumption. Users are requesting granular metrics, pre-flight cost estimates, and clearer explanations of why sessions are consuming resources disproportionately.
*   **Session Persistence & State Management:** Tools like Qwen, Pi, and OpenCode are actively refining how they handle long-running sessions, crash recovery, and context compression. The goal is to prevent "silent data loss" and ensure state consistency across restarts.

## 4. Differentiation Analysis
*   **Claude Code:** Focuses heavily on **security hardening** (transcript tampering, Cedar policies) and **workflow features** like conversation branching. However, it is currently hampered by severe **token efficiency regressions** and Windows-specific instability.
*   **OpenAI Codex:** Prioritizes **network infrastructure** (proxy routing, DNS) and **observability** (WebSocket metrics). It is battling a critical **storage bloat bug** (SQLite logs) and significant **tool-calling regressions** in its newer models.
*   **Gemini CLI:** Emphasizes **architectural security** (A2A server RCE fixes) and **agent resilience** (recursive reasoning limits). It is distinguishing itself with **AST-aware code navigation** proposals and robust **OAuth/SSR protection**.
*   **OpenCode:** Differentiates through **Go-based performance** and **plugin/V2 session architecture**. It is addressing **high CPU usage** and **model compatibility** (Ollama/GLM) issues, appealing to users seeking open-source flexibility.
*   **Qwen Code:** Focuses on **daemon architecture** (multi-workspace support) and **channel integrations** (WeCom, Webhooks). It is tackling **session persistence** and **context window overflow** bugs, targeting enterprise automation.
*   **DeepSeek TUI:** Specializes in **mobile/edge deployment** (Android/Termux) and **fleet management** (canonical AgentProfile). It is optimizing for **startup latency** and **live model catalog** integration, appealing to developers on the go.
*   **Pi:** Centers on **provider agnosticism** and **session juggling** (multi-live agents). It is refining **clipboard/UX bindings** (Bun/Linux) and **prompt cache observability**, catering to power users managing multiple model providers.
*   **GitHub Copilot:** Lagging in active PR development, focusing on **custom slash commands** and **enterprise security** (Gatekeeper, BYOK). Its primary pain point is **agent loop reliability** and **authentication friction**.
*   **Kimi Code:** Currently the least active, with a singular focus on **enterprise SSL/network compatibility**, indicating a niche or less mature ecosystem engagement at this time.

## 5. Community Momentum & Maturity
*   **High Momentum & Iteration:** **Gemini CLI** and **OpenCode** show strong technical momentum with frequent, substantive PRs addressing core architecture and security. **Qwen Code** is also highly active with daemon and workspace innovations.
*   **High Engagement but Critical Instability:** **Claude Code** and **OpenAI Codex** have the largest user bases and highest issue volumes, but the nature of the issues (quota depletion, tool-calling failures, storage bloat) indicates maturity challenges. The community is highly engaged but increasingly frustrated with reliability.
*   **Emerging/Niche Momentum:** **DeepSeek TUI** is building a dedicated following around mobile and fleet management, showing steady, focused development. **Pi** has a small but technically savvy community focused on provider flexibility and session management.
*   **Low Activity:** **GitHub Copilot CLI** and **Kimi Code** show lower community engagement and fewer recent technical updates, suggesting either stable but stagnant ecosystems or smaller user bases.

## 6. Trend Signals
*   **From "Cool Features" to "Operational Trust":** The industry is moving past showcasing novel agent capabilities to addressing fundamental operational concerns: **cost predictability**, **security compliance**, and **system stability**. Developers are choosing tools based on reliability and transparency rather than just model capability.
*   **The "Black Box" Problem is Unsustainable:** Community backlash against invisible token usage, silent session drops, and unexplained agent loops is forcing vendors to invest in **observability**, **audit trails**, and **granular configuration**. Tools that cannot explain *why* they consumed resources or failed will lose enterprise adoption.
*   **Platform Fragmentation Demands Abstraction:** Issues with Windows subsystems (HCS, OneDrive), Linux displays (Wayland, CJK), and corporate networks (Proxies, SSL) highlight the need for **robust abstraction layers**. Successful tools will be those that provide seamless experiences across diverse and restrictive IT environments.
*   **Agent Autonomy Needs Guardrails:** The trend towards multi-agent workflows (sub-agents, fleets) is bringing new failure modes (infinite loops, resource exhaustion). The market is responding with **hard limits**, **recursive turn caps**, and **explicit approval workflows**, signaling that autonomous agents must be tightly controlled to be viable in production.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Date:** 2026-07-09
**Source:** `anthropics/skills` Repository Analysis

## 1. Top Skills Ranking
*Based on community attention, technical depth, and issue/PR correlation.*

1.  **Skill Creator & Evaluation Infrastructure**
    *   **Functionality:** Tools for generating, validating, and evaluating Claude Skills (`skill-creator`). Includes `run_eval.py` for precision/recall testing and `quick_validate.py` for YAML/UTF-8 integrity.
    *   **Discussion Highlights:** Dominated by critical bug reports regarding `recall=0%` errors on Windows and Linux, subprocess pipe failures, and YAML parsing quirks. Multiple PRs attempt to fix the same underlying evaluation logic.
    *   **Status:** **Open/Mixed**. Critical fixes pending (e.g., #1298, #1323, #1261).
    *   **Links:** [#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#556](https://github.com/anthropics/skills/issues/556)

2.  **Frontend Design Skill**
    *   **Functionality:** Guides Claude in generating high-quality, actionable frontend code with strict adherence to design systems and component libraries.
    *   **Discussion Highlights:** Focus on improving clarity and reducing hallucination in design instructions. Community seeks better alignment between descriptive intent and executable code.
    *   **Status:** **Open** (Improvement PR).
    *   **Link:** [#210](https://github.com/anthropics/skills/pull/210)

3.  **Document Typography & ODT/DOCX Handling**
    *   **Functionality:** Specialized skills for high-fidelity document generation, including typography control (orphans/widows), OpenDocument Text (ODT) support, and Microsoft Word (DOCX) tracked-change integrity.
    *   **Discussion Highlights:** Technical deep dives into OOXML namespace collisions (`w:id`) and case-sensitivity issues in file references. High demand for robust enterprise document formatting.
    *   **Status:** **Open** (Additions and Fixes).
    *   **Links:** [#514](https://github.com/anthropics/skills/pull/514), [#486](https://github.com/anthropics/skills/pull/486), [#541](https://github.com/anthropics/skills/pull/541), [#538](https://github.com/anthropics/skills/pull/538)

4.  **Color Expert Skill**
    *   **Functionality:** Provides precise color science knowledge (spaces like OKLCH/CAM16, naming systems like ISCC-NBS) for UI/UX tasks.
    *   **Discussion Highlights:** Niche but highly valued for accessibility and design-system consistency.
    *   **Status:** **Open**.
    *   **Link:** [#1302](https://github.com/anthropics/skills/pull/1302)

5.  **Self-Audit & Quality Analyzer**
    *   **Functionality:** Meta-skills that audit AI output for mechanical correctness (file existence) and reasoning quality before delivery.
    *   **Discussion Highlights:** Addresses the "trust boundary" concern and ensures reliability in automated workflows.
    *   **Status:** **Open** (New Feature).
    *   **Links:** [#1367](https://github.com/anthropics/skills/pull/1367), [#83](https://github.com/anthropics/skills/pull/83)

## 2. Community Demand Trends
*Derived from Issue sentiment and feature requests.*

*   **Security & Trust Boundaries:** Significant concern over community skills impersonating official Anthropic skills (Issue #492). Users demand clearer namespace separation and security auditing for third-party skills.
*   **Enterprise Document Processing:** Strong interest in formats beyond markdown/code, specifically **ODT** and **DOCX** with complex features like tracked changes and bookmarks (Issues #486, #541).
*   **Workflow Automation & Governance:** Requests for **Agent Governance** skills (Issue #412) and **Compact Memory** solutions (Issue #1329) to manage long-running autonomous agents efficiently.
*   **Cross-Platform Compatibility:** Persistent friction with Windows environments for skill creation tools, driving demand for robust cross-platform subprocess handling (Issues #1061, #1169).
*   **Organization-Wide Sharing:** Desire for native team/org-level skill libraries to avoid manual file distribution (Issue #228).

## 3. High-Potential Pending Skills
*Active PRs addressing critical gaps or introducing novel capabilities.*

1.  **Self-Audit Mechanism (v1.3.0)**
    *   **Summary:** Introduces a pre-delivery verification layer that checks file integrity and reasoning quality.
    *   **Potential:** High. Solves a major pain point in AI reliability.
    *   **Link:** [#1367](https://github.com/anthropics/skills/pull/1367)

2.  **ODT (OpenDocument) Skill**
    *   **Summary:** Enables creation, filling, and conversion of ODT/ODS files.
    *   **Potential:** Medium-High. Fills a gap in open-standard office document support.
    *   **Link:** [#486](https://github.com/anthropics/skills/pull/486)

3.  **Document Typography Control**
    *   **Summary:** Prevents typographic errors (orphans, widows) in generated documents.
    *   **Potential:** Medium. Essential for professional report generation.
    *   **Link:** [#514](https://github.com/anthropics/skills/pull/514)

4.  **Testing Patterns Skill**
    *   **Summary:** Comprehensive guide for unit, integration, and React component testing.
    *   **Potential:** Medium. Aligns with best practices in software engineering workflows.
    *   **Link:** [#723](https://github.com/anthropics/skills/pull/723)

5.  **Color Expert Skill**
    *   **Summary:** Deep dive into color theory and spaces for design tasks.
    *   **Potential:** Low-Medium (Niche). Valuable for design-heavy applications.
    *   **Link:** [#1302](https://github.com/anthropics/skills/pull/1302)

## 4. Skills Ecosystem Insight
The community’s most concentrated demand is for **robust, self-correcting infrastructure** (evaluation, auditing, and security) that ensures skills function reliably across diverse operating systems and maintain strict trust boundaries, rather than just new domain-specific capabilities.

---

# Claude Code Community Digest: 2026-07-09

### 1. Today's Highlights
Anthropic released **v2.1.205**, introducing security hardening against session transcript tampering and fixing critical JSON schema validation errors. Community attention is heavily focused on severe token consumption anomalies, with multiple reports of quota depletion occurring at rates 5–10x faster than historical baselines, alongside persistent stability issues with the Windows Cowork feature.

### 2. Releases
**v2.1.205**
*   **Security:** Added an auto-mode rule preventing tampering with session transcript files.
*   **Fixes:** Resolved `--json-schema` silently producing unstructured output for invalid schemas and rejected schemas using the `format` keyword.
*   **Fixes:** Addressed issues where messages sent while Claude was working were being silently dropped.
    *   *Release Details:* [GitHub Release v2.1.205](https://github.com/anthropics/claude-code/releases/tag/v2.1.205)

### 3. Hot Issues
1.  **[BUG] No response from API error when Advisor is triggered** (#69238)
    *   *Why it matters:* High-engagement bug causing API timeouts during Opus-based advisory tasks.
    *   *Reaction:* 70 👍, 44 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/69238)
2.  **[BUG] Extreme token consumption — quota depleted in minutes** (#42249)
    *   *Why it matters:* Normal development tasks (read/edit/git) are draining daily quotas rapidly, impacting cost predictability.
    *   *Reaction:* 17 👍, 39 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/42249)
3.  **[BUG] Sudden 5-hour session window squeeze** (#55053)
    *   *Why it matters:* Reports indicate session windows deplete 5–10x faster since late April 2026, suggesting systemic efficiency regression.
    *   *Reaction:* 12 👍, 37 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/55053)
4.  **[BUG] Missing HCS services: vfpext - Cowork not working on Windows 11 Pro** (#74649)
    *   *Why it matters:* Blocks the Cowork feature entirely on specific Windows configurations due to virtualization service failures.
    *   *Reaction:* 0 👍, 23 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/74649)
5.  **[BUG] Pre-tool-call assistant text never emitted** (#65620)
    *   *Why it matters:* Regression causing silent loss of assistant prose in session transcripts, complicating debugging and audit trails.
    *   *Reaction:* 7 👍, 18 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/65620)
6.  **[BUG] Token consumption with Fable 5 mismatch** (#67506)
    *   *Why it matters:* Discrepancy between documented and actual token usage for Fable 5 model, affecting cost forecasting.
    *   *Reaction:* 1 👍, 16 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/67506)
7.  **[BUG] Cowork EXDEV: cross-device link not permitted** (#45178)
    *   *Why it matters:* Windows-specific filesystem error preventing Cowork operations when OneDrive or cross-drive symlinks are involved.
    *   *Reaction:* 0 👍, 14 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/45178)
8.  **[BUG] API Error 400 - Invalid UTF-8 / Surrogates** (#64777)
    *   *Why it matters:* Mid-conversation crashes due to encoding errors in request bodies, disrupting long-running sessions.
    *   *Reaction:* 3 👍, 8 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/64777)
9.  **[FEATURE] Add /fork (conversation branching) support** (#46451)
    *   *Why it matters:* Strong community demand for non-linear workflow management via conversation branching.
    *   *Reaction:* 9 👍, 6 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/46451)
10. **[BUG] Parallel agent spawning causes excessive token consumption** (#67636)
    *   *Why it matters:* Agents spawning inefficiently (e.g., 10 agents for simple tasks) leads to massive token waste and crashes.
    *   *Reaction:* 0 👍, 5 comments.
    *   [Link](https://github.com/anthropics/claude-code/issues/67636)

### 4. Key PR Progress
1.  **fix(sweep): unstarve markStale via search API** (#75938)
    *   Fixes logic in the issue sweep script to properly paginate and label stale issues without skipping older items.
    *   [Link](https://github.com/anthropics/claude-code/pull/75938)
2.  **fix(sweep): paginate issue events and honor unlabeled** (#75541)
    *   Improves accuracy of `closeExpired()` by correctly parsing issue lifecycle events and handling unlabeled states.
    *   [Link](https://github.com/anthropics/claude-code/pull/75541)
3.  **Add protect-mcp plugin: fail-closed Cedar policy gate** (#72014)
    *   Introduces a plugin that blocks tool calls violating Cedar policies and signs offline-verifiable receipts for auditability.
    *   [Link](https://github.com/anthropics/claude-code/pull/72014)
4.  **fix(hook-development): recognize all five hook handler types** (#75537)
    *   Updates the plugin development skill and validator to support the full range of hook handlers, aligning docs with product capabilities.
    *   [Link](https://github.com/anthropics/claude-code/pull/75537)
5.  **docs(code-review plugin): clarify relationship to bundled skill** (#75529)
    *   Distinguishes between the `code-review` plugin (PR-focused) and the bundled `/code-review` skill (local diff-focused).
    *   [Link](https://github.com/anthropics/claude-code/pull/75529)
6.  **fix(scripts): break pagination when page is not full** (#68673)
    *   Optimizes script pagination logic to stop fetching when incomplete pages are returned, reducing unnecessary API calls.
    *   [Link](https://github.com/anthropics/claude-code/pull/68673)
7.  **feat: open source claude code ✨** (#41447)
    *   A persistent request for open-sourcing the core codebase, referencing multiple related feature requests.
    *   [Link](https://github.com/anthropics/claude-code/pull/41447)
8.  **fix: Desktop app crashes with Sonnet on Windows** (#62326)
    *   Addresses exit code 3221225477 crashes specific to the Sonnet model on Windows desktop environments.
    *   [Link](https://github.com/anthropics/claude-code/pull/62326) *(Note: Listed as Closed/Duplicate in issues, referenced here for context)*
9.  **Mobile app: Active desktop session shows as archived** (#75525)
    *   Bug report regarding session synchronization visibility between Desktop and iOS apps.
    *   [Link](https://github.com/anthropics/claude-code/issues/75525)
10. **Windows IME input not working in background viewer** (#75920)
    *   Fix needed for CJK input composition in the background session viewer on Windows.
    *   [Link](https://github.com/anthropics/claude-code/issues/75920)

### 5. Feature Request Trends
*   **Conversation Branching:** Users are requesting `/fork` functionality to manage divergent workflows within a single session context (#46451).
*   **Plugin Distributability:** There is strong interest in making Workflow scripts (`.claude/workflows/*.js`) distributable as standalone plugin components (#66032).
*   **UI/UX Transparency:** Requests for better visibility into session state, including displaying the current worktree/CWD in the desktop status line (#60097) and warning users when context compression makes history inaccessible to the model (#75924).
*   **Open Source:** Continued community desire for the core tool to be open-source (#41447).

### 6. Developer Pain Points
*   **Unpredictable Token Costs:** The most significant frustration is the discrepancy between expected and actual token usage. Multiple users report "quota depletion in minutes" and session windows shrinking 5–10x faster than normal, often linked to sub-agent spawning inefficiencies or model regressions (#42249, #55053, #67636).
*   **Windows Stability & Compatibility:** Windows users face a disproportionate number of blockers, including Cowork failures due to missing HCS services, cross-device link errors with OneDrive, and IME input issues in background viewers (#74649, #45178, #75920).
*   **Session Integrity & Transparency:** Users are frustrated by silent data loss (dropped text blocks in transcripts) and lack of clarity when the model loses access to compressed history, leading to confusion about what the AI "knows" vs. what is visible in the UI (#65620, #75924).
*   **Encoding Errors:** Intermittent API crashes due to invalid UTF-8 or surrogate pairs in request bodies disrupt long-running coding sessions (#64777, #69781).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-07-09

## 1. Today's Highlights
The community is reacting strongly to a significant storage consumption bug in the CLI (`#28224`), which has been largely mitigated by recent patches reducing log volume by 85%. Meanwhile, version `0.143.0` and `0.144.0` alpha releases are introducing widespread regressions, particularly regarding `gpt-5.5` tool-calling errors on Windows and Linux, prompting urgent community troubleshooting.

## 2. Releases
*   **rust-v0.144.0-alpha.2 & alpha.1**: New alpha builds released in the last 24 hours. These appear to be iterative fixes following the stability issues reported in the previous `0.143.0` release.

## 3. Hot Issues
1.  **[Bug] SQLite Feedback Logs Consuming SSD Endurance** (`#28224`)
    *   **Why it matters:** Users reported potential 640 TB/year log generation. The author closed the issue after confirming merged PRs reduce logs by 85%, though concerns remain about long-term storage hygiene.
    *   **Reaction:** 427 👍, 142 comments. High engagement due to hardware impact.
2.  **[Enhancement] ChatGPT Integration** (`#2153`)
    *   **Why it matters:** A persistent request to bridge Codex sessions with ChatGPT’s web search and brainstorming capabilities, allowing seamless context transfer between research and coding phases.
    *   **Reaction:** 150 👍, 38 comments. Strong desire for unified workflow.
3.  **[Bug] Windows App `apply_patch` Failure** (`#29072`)
    *   **Why it matters:** Critical blocker for Windows users where the sandbox setup executable fails to launch, preventing code application.
    *   **Reaction:** 23 👍, 40 comments. Indicates ongoing Windows-specific stability struggles.
4.  **[Bug] Rate Limits Draining Credits Rapidly** (`#31668`)
    *   **Why it matters:** Multiple paid accounts report monthly credits being exhausted after a single prompt, suggesting a billing or rate-limit accounting regression.
    *   **Reaction:** 3 comments. High anxiety among enterprise/pro users.
5.  **[Bug] GPT-5.5 Tool Calling Regression** (`#31665`, `#31609`, `#31639`)
    *   **Why it matters:** A cluster of issues reporting `unsupported call: exec_command` errors. Models are sending self-referential namespaces, breaking basic shell execution on macOS and Windows.
    *   **Reaction:** Combined 30+ 👍 across related tickets. Widespread functional breakage.
6.  **[Enhancement] First-Class Computer Use Support in CLI** (`#20851`)
    *   **Why it matters:** Users want native CLI access to Computer Use capabilities currently limited to the desktop app plugin.
    *   **Reaction:** 12 👍, 8 comments.
7.  **[Bug] Subagent Approval Pop-ups Inconsistent** (`#23664`)
    *   **Why it matters:** Security/UX gap where subagent escalation requests fail to display consistently, potentially leading to silent failures or security blind spots.
    *   **Reaction:** 1 👍, 6 comments.
8.  **[Bug] VS Code Session Cap Limit** (`#15368`)
    *   **Why it matters:** Power users hitting arbitrary limits on concurrent sessions in the VS Code extension, impacting productivity.
    *   **Reaction:** 5 👍, 16 comments.
9.  **[Bug] Windows `apply_patch` Fails with "Filename Too Long"** (`#31511`)
    *   **Why it matters:** False positive errors under restricted permission profiles on Windows, confusing users despite short actual paths.
    *   **Reaction:** 3 comments.
10. **[Bug] macOS 27 Beta 3 Connectivity/Task Submission Failures** (`#31364`, `#31671`)
    *   **Why it matters:** Specific instability linked to early macOS betas, affecting websocket initiation and task submission.
    *   **Reaction:** 2-3 comments each.

## 4. Key PR Progress
1.  **[`#31688`](https://github.com/openai/codex/pull/31688) Preserve fractional WebSocket TBT metric precision**
    *   Improves observability by ensuring Time-to-Begin (TBT) metrics retain millisecond precision in TUI and runtime summaries.
2.  **[`#31652`](https://github.com/openai/codex/pull/31652) fix(tui): hide empty reasoning summaries**
    *   Cleans up UI clutter by filtering out empty HTML comment placeholders in reasoning summaries.
3.  **[`#31681`](https://github.com/openai/codex/pull/31681) core: move reasoning effort to step context**
    *   Infrastructure change allowing dynamic adjustment of reasoning effort between model sampling steps, preventing frozen configurations.
4.  **[`#31644`](https://github.com/openai/codex/pull/31644) [linux-sandbox]: route DNS through managed proxy**
    *   Adds a Linux-specific DNS adapter to ensure sandboxed environments correctly respect system proxy settings for network requests.
5.  **[`#31361`](https://github.com/openai/codex/pull/31361) model-provider: route model discovery through HTTP client factory**
    *   Ensures `/models` endpoint respects `features.respect_system_proxy`, fixing proxy bypass issues during startup.
6.  **[`#31637`](https://github.com/openai/codex/pull/31637) login: route raw auth flows through HTTP client**
    *   Standardizes authentication flows to use the managed HTTP client factory, improving proxy compatibility.
7.  **[`#31363`](https://github.com/openai/codex/pull/31363) codex-api: route file uploads through HTTP client factory**
    *   Fixes file upload logic in Codex Apps to honor system proxy settings.
8.  **[`#31362`](https://github.com/openai/codex/pull/31362) core: route realtime and memories through HTTP client factory**
    *   Completes the migration of core API requests (realtime, memories) to the proxy-aware HTTP client.
9.  **[`#31689`](https://github.com/openai/codex/pull/31689) exec-server: centralize client RPC spans**
    *   Enhances distributed tracing coverage for exec-server requests, ensuring consistent OTEL span boundaries.
10. **[`#29869`](https://github.com/openai/codex/pull/29869) [codex] Preserve source chronology for imported sessions**
    *   Maintains original creation and activity timestamps for imported sessions, improving session management and sorting.

## 5. Feature Request Trends
*   **Proxy & Network Compatibility:** There is a concentrated push to ensure all network paths (login, model discovery, file uploads, DNS) respect system proxy configurations, especially for corporate environments (`#31644`, `#31361`, `#31637`).
*   **CLI-First Computer Use:** Users are requesting parity between the Desktop App and CLI for advanced features like Computer Use and sub-agent escalation policies (`#20851`, `#23324`).
*   **Session & Memory Management:** Requests for topic-based memory directories (`#19758`), increased session caps (`#15368`), and prompt aliases (`#31666`) indicate a desire for more granular control over long-running coding contexts.
*   **Cross-Platform Workflow:** The ChatGPT integration request (`#2153`) highlights a need for smoother transitions between research (ChatGPT) and execution (Codex).

## 6. Developer Pain Points
*   **Tool-Calling Regressions:** The `gpt-5.5` model is generating malformed tool calls (e.g., `exec_commandexec_command`), causing immediate failure in basic shell operations across CLI and App (`#31665`, `#31639`).
*   **Windows Stability:** Multiple critical bugs plague the Windows experience, including sandbox launch failures, false "filename too long" errors, and UI hangs/freezes (`#29072`, `#31511`, `#31676`, `#31444`).
*   **Storage Bloat:** The SQLite feedback log issue (`#28224`) demonstrates how default configurations can aggressively consume disk space, threatening SSD longevity for heavy users.
*   **Billing Uncertainty:** Reports of rapid credit depletion (`#31668`) are causing significant distrust in the usage accounting system among paid subscribers.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-07-09
**Source:** github.com/google-gemini/gemini-cli

## 1. Today's Highlights
The Gemini CLI team released **v0.50.0** and preview **v0.51.0**, introducing significant updates to the tool registry and release verification pipelines. Critical security fixes have been merged for the A2A server to prevent Remote Code Execution (RCE) and addressed OAuth token exchange failures linked to recent Node.js security patches. Community attention is heavily focused on sub-agent reliability, specifically regarding hang states, recovery mechanisms, and configuration overrides.

## 2. Releases
### v0.50.0 & v0.51.0-preview.0
*   **Tool Registry:** Major updates to the tool registry infrastructure to improve discoverability and management.
*   **Release Verification:** Fixed CI workflows to prevent workspace binary shadowing during release verification and ensured `npm ci` ignores scripts appropriately.
*   **Proxy Fixes:** Resolved testing issues related to `no_proxy` configurations.
*   *Links:*
    *   [v0.50.0 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0)
    *   [v0.51.0-preview.0 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-preview.0)
    *   [PR #28150 (Changelog)](https://github.com/google-gemini/gemini-cli/pull/28150)

## 3. Hot Issues
1.  **[Bug] Subagent Recovery after MAX_TURNS (#22323)**
    *   *Why it matters:* The `codebase_investigator` subagent incorrectly reports success despite hitting turn limits, masking failures and hiding interruptions from users.
    *   *Reaction:* 10 comments, 2 👍. High priority due to data integrity concerns.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **[Bug] Generalist Agent Hangs (#21409)**
    *   *Why it matters:* The generalist agent enters an infinite hang state for simple tasks (e.g., folder creation), requiring manual cancellation.
    *   *Reaction:* 7 comments, 8 👍. Strong community consensus on the severity of this blocking bug.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **[Eval] Robust Component Level Evaluations (#24353)**
    *   *Why it matters:* Tracks progress on behavioral evals, aiming to improve the reliability of the 76+ generated tests across supported Gemini models.
    *   *Reaction:* 7 comments. Critical for maintaining quality as features expand.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/24353)

4.  **[Investigation] AST-Aware File Reads (#22745)**
    *   *Why it matters:* Explores using AST-aware tools to reduce token noise and improve precision in reading method bounds, potentially optimizing agent efficiency.
    *   *Reaction:* 7 comments, 1 👍. Significant architectural consideration.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/22745)

5.  **[Bug] Gemini Does Not Use Skills/Sub-agents Enough (#21968)**
    *   *Why it matters:* Anecdotal evidence suggests the model fails to autonomously invoke custom skills (e.g., Gradle/Git) unless explicitly prompted, reducing utility.
    *   *Reaction:* 6 comments. Highlights a gap between intended automation and actual behavior.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/21968)

6.  **[Bug] Auto Memory Retrying Low-Signal Sessions (#26522)**
    *   *Why it matters:* The Auto Memory system gets stuck retrying sessions it deems low-signal because it only marks them as processed upon successful read, causing infinite loops.
    *   *Reaction:* 5 comments. Impacts performance and resource usage.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/26522)

7.  **[Bug] Shell Command Stuck in "Waiting Input" (#25166)**
    *   *Why it matters:* Simple CLI commands leave the terminal hanging in an "Awaiting user input" state even after completion, breaking automation flows.
    *   *Reaction:* 4 comments, 3 👍. Common friction point for power users.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

8.  **[Bug] Browser Subagent Fails on Wayland (#21983)**
    *   *Why it matters:* The browser agent terminates with "GOAL" status unexpectedly on Wayland systems, limiting cross-platform compatibility.
    *   *Reaction:* 4 comments, 1 👍. Specific to Linux/Wayland users.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

9.  **[Bug] Symlinked Agent Files Not Recognized (#20079)**
    *   *Why it matters:* Agents defined via symlinks in `~/.gemini/agents/` are ignored, complicating modular agent management setups.
    *   *Reaction:* 4 comments. Usability issue for advanced configuration.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/20079)

10. **[Security] Deterministic Redaction in Auto Memory (#26525)**
    *   *Why it matters:* Current redaction happens after content is already in model context/logs, posing a potential privacy risk. Requires stricter pre-context redaction.
    *   *Reaction:* 3 comments. Critical for enterprise/security-conscious users.
    *   [View Issue](https://github.com/google-gemini/gemini-cli/issues/26525)

## 4. Key PR Progress
1.  **[Security] Enforce Workspace Trust in A2A Server (PR #28319)**
    *   *Summary:* Fixes a critical zero-click RCE vulnerability in the `a2a-server` backend by refactoring environment loading to enforce workspace trust.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28319)

2.  **[Core] Limit Recursive Reasoning Turns (PR #28164)**
    *   *Summary:* Implements a hard limit of 15 recursive reasoning turns per request to prevent CPU exhaustion and API quota abuse.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28164)

3.  **[A2A] Abort Execution Loop on Task Cancellation (PR #28316)**
    *   *Summary:* Resolves "ghost executions" where canceled tasks continued running, fixing race conditions and memory leaks in the execution stream.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28316)

4.  **[Tools] Bypass LLM Correction for JSON/IPYNB (PR #28223)**
    *   *Summary:* Fixes corruption in `.json` and `.ipynb` files by preventing the LLM from incorrectly "correcting" valid syntax during write/replace operations.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28223)

5.  **[CLI] Fix Markdown Rendering for CJK Text (PR #28309)**
    *   *Summary:* Improves terminal markdown rendering to handle CJK hard line-wrapping and list misinterpretation by changing how boxes are processed.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28309)

6.  **[CLI] Prevent Emoji Splitting in Truncation (PR #28224)**
    *   *Summary:* Fixes display corruption when truncating strings containing emojis by accounting for UTF-16 surrogate pairs.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28224)

7.  **[MCP] Add SSRF Protection to OAuth Discovery (PR #28112)**
    *   *Summary:* Closes a security gap by validating URLs in OAuth metadata discovery against SSRF attacks, aligning with existing web-fetch protections.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28112)

8.  **[Core] Fix OAuth Token Exchange Keep-Alive (PR #28103)**
    *   *Summary:* Addresses failures in "Sign in with Google" caused by keep-alive socket reuse conflicts with Node.js CVE-2026-48931.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28103)

9.  **[CLI] Parse Commented Settings.json (PR #28219)**
    *   *Summary:* Allows the lightweight parent process to correctly read `settings.json` files containing comments, preventing fallback to default memory configurations.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28219)

10. **[Caretaker] Implement Main Worker Execution Loop (PR #28306)**
    *   *Summary:* Adds the core execution loop and Pub/Sub egress publisher for the Caretaker Triage Worker, enabling automated cloud-run job processing.
    *   [Link](https://github.com/google-gemini/gemini-cli/pull/28306)

## 5. Feature Request Trends
*   **AST-Aware Codebase Navigation:** Multiple issues (#22745, #22746) indicate strong interest in moving beyond text-based file reading to AST-aware tools for precise method mapping and reduced token consumption.
*   **Enhanced Sub-Agent Visibility:** Users are requesting better observability into sub-agent behavior, including sharing trajectories (#22598) and including sub-agent context in bug reports (#21763).
*   **Resilient Browser Agent:** There is a clear demand for automatic session takeover and lock recovery (#22232) to make the browser agent more robust against orphaned processes.
*   **Self-Correction & Safety:** Requests for the agent to discourage destructive commands (#22672) and improve its own self-awareness regarding CLI flags/hotkeys (#21432) suggest a trend toward safer, more autonomous operation.

## 6. Developer Pain Points
*   **Agent Hangs and Infinite Loops:** Recurring issues with the generalist agent hanging (#21409), sub-agents getting stuck (#22323), and shell commands waiting for non-existent input (#25166) are major productivity blockers.
*   **Configuration Fragility:** Users struggle with edge cases in configuration handling, such as symlinks not being recognized (#20079), settings files with comments failing to parse (#28219), and browser agent ignoring `settings.json` overrides (#22267).
*   **File Corruption:** The LLM's tendency to "correct" valid JSON and Jupyter Notebook files (#28223) or create temporary scripts in random locations (#23571) causes frustration and cleanup overhead.
*   **Security & Privacy Concerns:** Anxiety persists around Auto Memory logging sensitive data (#26525) and the potential for RCE in server components (#28319), highlighting a need for transparent, secure defaults.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-09

## 1. Today's Highlights
The Copilot CLI community is currently addressing significant stability concerns regarding agent loops triggered by auto-compaction, with multiple high-severity reports converging on the same root cause. Additionally, there is strong community demand for enhanced customization via custom slash commands and improved cross-platform compatibility for enterprise and Linux environments.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **#618: Support custom slash commands from .github/prompts** (Closed)
    *   *Why it matters:* Aligns CLI behavior with the VS Code extension, allowing users to define custom commands via local prompt files.
    *   *Community Reaction:* Highly popular with 99 👍 and 32 comments, indicating strong desire for extensibility.
    *   [Link](https://github.com/github/copilot-cli/issues/618)
*   **#970: Copilot app blocked by macOS Gatekeeper** (Open)
    *   *Why it matters:* Corporate security policies are preventing installation/upgrades via Homebrew due to unsigned binaries.
    *   *Community Reaction:* 21 👍; affects enterprise users heavily.
    *   [Link](https://github.com/github/copilot-cli/issues/970)
*   **#2792: Automatic switching between model for planning and execution** (Open)
    *   *Why it matters:* Proposes splitting costs/performance by using smaller/faster models for planning and larger ones for execution.
    *   *Community Reaction:* 14 👍; seen as a critical optimization for efficiency.
    *   [Link](https://github.com/github/copilot-cli/issues/2792)
*   **#3158: Plan→Compact→Re-Plan infinite loop** (Closed)
    *   *Why it matters:* Documents a critical bug where the agent enters a 217-cycle planning loop with zero execution after context compaction.
    *   *Community Reaction:* Reported by Microsoft staff; highlights severe reliability issues in long-running sessions.
    *   [Link](https://github.com/github/copilot-cli/issues/3158)
*   **#2729: /delegate command ignores source branch** (Closed)
    *   *Why it matters:* The delegation workflow fails to respect explicit branch specifications, breaking automated workflows.
    *   *Community Reaction:* 2 👍; impacts users relying on precise branch management.
    *   [Link](https://github.com/github/copilot-cli/issues/2729)
*   **#3586: Copy stops working since 1.0.49** (Closed)
    *   *Why it matters:* Regression in basic TUI functionality (copy/paste) on Linux.
    *   *Community Reaction:* 1 👍; simple but disruptive UX bug.
    *   [Link](https://github.com/github/copilot-cli/issues/3586)
*   **#4059: /models does not show extended context pricing** (Open)
    *   *Why it matters:* Lack of transparency in pricing for extended context models confuses users trying to manage costs.
    *   *Community Reaction:* New report; indicates need for better billing UI clarity.
    *   [Link](https://github.com/github/copilot-cli/issues/4059)
*   **#2112: Stale keytar entries cause repeated OAuth popups** (Open)
    *   *Why it matters:* Authentication friction increases significantly for HTTP MCP server users due to stale credential handling.
    *   *Community Reaction:* 1 👍; critical for seamless MCP integration.
    *   [Link](https://github.com/github/copilot-cli/issues/2112)
*   **#4053: TUI hangs at 'Loading: N skills' on NFS/GPFS** (Open)
    *   *Why it matters:* Race condition in Tokio spawns causes indefinite hangs in high-performance computing (HPC) or shared filesystem environments.
    *   *Community Reaction:* 0 👍 but high severity for Linux/HPC users.
    *   [Link](https://github.com/github/copilot-cli/issues/4053)
*   **#4016: BYOK rejected in --acp mode** (Open)
    *   *Why it matters:* Bring Your Own Key (BYOK) configuration fails in Agent Controlled Programming mode, forcing unnecessary GitHub logins.
    *   *Community Reaction:* 2 👍; regression from previous fixes.
    *   [Link](https://github.com/github/copilot-cli/issues/4016)

## 4. Key PR Progress
*   **#4057: Install**
    *   *Status:* Open.
    *   *Summary:* Minimal contribution likely related to installation scripts or documentation updates.
    *   [Link](https://github.com/github/copilot-cli/pull/4057)
*   **#3708: Add files via upload**
    *   *Status:* Open.
    *   *Summary:* Direct file uploads, potentially assets or test data. No detailed description provided.
    *   [Link](https://github.com/github/copilot-cli/pull/3708)

*(Note: Only 2 PRs were updated in the last 24h. No major feature merges were reported.)*

## 5. Feature Request Trends
*   **Customization & Extensibility:** Users strongly want parity with the VS Code extension, specifically custom slash commands (#618) and flexible model routing (#2792).
*   **Enterprise & Security:** There is a push for better handling of corporate security policies (Gatekeeper #970), BYOK support in ACP mode (#4016), and enterprise plugin synchronization (#4039).
*   **Cost Transparency:** Requests for clearer pricing display for extended context models (#4059) suggest users are actively optimizing token usage.

## 6. Developer Pain Points
*   **Agent Reliability:** The most critical pain point is the "Planning Loop" bug (#3158, #3154, etc.), where agents get stuck in infinite cycles after compaction, burning tokens without producing code.
*   **Authentication Friction:** Stale credentials (#2112) and BYOK regressions (#4016) create repetitive login barriers, especially for MCP and ACP modes.
*   **Platform-Specific Instabilities:** Linux users face TUI hangs on networked file systems (#4053) and copy-paste regressions (#3586), while macOS users struggle with installation blocks (#970).
*   **Session Management:** Resuming non-git sessions is broken (#4054), and exit hints can be ambiguous (#4066), complicating workflow continuity.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-09
**Source:** github.com/MoonshotAI/kimi-cli

### 1. Today's Highlights
The repository shows no new releases or pull requests in the last 24 hours. Community attention is currently focused on issue #2458, where a user reports SSL connectivity failures caused by organizational antivirus software intercepting connections via Man-in-the-Middle (MiTM) techniques.

### 2. Releases
No new versions were released in the last 24 hours.

### 3. Hot Issues
*Note: Only one issue was updated in the last 24 hours.*

1. **[Enhancement] Add option to ignore ssl certificate**
   - **Link:** [Issue #2458](https://github.com/MoonshotAI/kimi-cli/issues/2458)
   - **Significance:** This issue highlights a critical compatibility gap for enterprise users. The author explains that organizational antivirus solutions inject custom SSL certificates to inspect traffic, causing authentication failures when `kimi-cli` attempts to log in. Without a flag to bypass strict SSL verification or allow custom CA bundles, developers behind corporate proxies or security gateways cannot use the tool effectively.
   - **Community Reaction:** Currently has 0 upvotes and 2 comments, indicating this is an emerging pain point rather than a widely discussed trend yet.

### 4. Key PR Progress
No pull requests were updated in the last 24 hours.

### 5. Feature Request Trends
Based on the recent activity, the primary trend revolves around **enterprise network compatibility**. Users are requesting flexibility in how the CLI handles secure connections, specifically regarding SSL/TLS verification. This suggests a need for better support for corporate proxy environments and custom Certificate Authorities (CAs).

### 6. Developer Pain Points
- **Corporate Security Interference:** Developers working within organizations that use deep packet inspection or MiTM antivirus solutions face significant friction. The inability to easily bypass or configure SSL certificate verification prevents successful authentication and API usage.
- **Lack of Configuration Granularity:** There is a clear demand for command-line flags or configuration options that allow users to disable strict SSL checks or specify trusted CA paths, accommodating diverse and restrictive IT infrastructures.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-07-09

## 1. Today's Highlights
OpenCode developers are actively addressing critical performance bottlenecks and stability issues, with a significant focus on refining the V2 session management and plugin architecture. Recent pull requests prioritize fixing race conditions in project initialization, stabilizing the TUI navigation, and optimizing resource usage for large repositories. Meanwhile, the community continues to report integration challenges with specific models like Gemma 4 and GLM-5.2 via Ollama and OpenCode Go.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
*   **[OPEN] Gemma 4 (e4b) tool calling fails via Ollama OpenAI-compatible API** (#20995)
    *   *Why it matters:* Streaming `tool_calls` are not recognized despite correct model output, breaking automation workflows for users relying on Ollama.
    *   *Community Reaction:* High engagement (30 comments, 47 👍).
*   **[OPEN] Add Go plan usage/balance API endpoint** (#16017)
    *   *Why it matters:* Users demand transparency and programmatic access to subscription usage limits to manage costs effectively.
    *   *Community Reaction:* Strong support (23 comments, 96 👍).
*   **[CLOSED] Full MCP client capabilities** (#28567)
    *   *Why it matters:* Highlights that OpenCode’s MCP implementation lags behind the latest specification standards.
    *   *Community Reaction:* 22 comments, 25 👍.
*   **[OPEN] Adding Experimental Calculation and Display of Tokens per second** (#6096)
    *   *Why it matters:* Provides real-time performance metrics for debugging and optimizing LLM interactions.
    *   *Community Reaction:* 19 comments, 60 👍.
*   **[OPEN] High CPU usage in newer versions of OpenCode** (#30086)
    *   *Why it matters:* Significant regression in resource efficiency, causing system lag even with few concurrent sessions.
    *   *Community Reaction:* 17 comments, 11 👍.
*   **[CLOSED] Add destructive file operation guardrails with user confirmation** (#17953)
    *   *Why it matters:* Security enhancement proposed after incidents of accidental file deletion by the AI agent.
    *   *Community Reaction:* 10 comments.
*   **[CLOSED] V2: first Location can expose an empty plugin generation** (#35556)
    *   *Why it matters:* Tracks a race condition where plugins are exposed before fully initialized, leading to transient errors.
    *   *Community Reaction:* 10 comments.
*   **[OPEN] Automatically run `aws sso login` when credentials need to be refreshed** (#1934)
    *   *Why it matters:* Improves UX for enterprise users managing short-lived AWS credentials.
    *   *Community Reaction:* 7 comments, 11 👍.
*   **[OPEN] GLM-5.2 via OpenCode Go: extra inputs not permitted, field instructions** (#33490)
    *   *Why it matters:* Compatibility bug preventing the use of GLM-5.2 through the OpenCode Go provider due to strict input validation.
    *   *Community Reaction:* 6 comments, 3 👍.
*   **[OPEN] Subagents hang indefinitely after quick bash tool call** (#33028)
    *   *Why it matters:* Critical stability issue causing streams to never complete, requiring manual intervention.
    *   *Community Reaction:* 5 comments, 2 👍.

## 4. Key PR Progress
*   **fix(models): fall back when catalog refresh stalls** (#36003)
    *   Fixes startup blocking issues when remote model catalogs fail to load or cache locks stall.
*   **fix(session): settle busy status after stream close** (#36002)
    *   Ensures session state is correctly updated immediately after a prompt stream ends, preventing "stuck" busy states.
*   **fix(app): cap prompt history attachments** (#36000)
    *   Prevents unbounded growth of the global persisted state by limiting inline data URLs in prompt history.
*   **fix(session): preserve cache prefix across mode switch** (#36001)
    *   Maintains provider system prompt prefixes during mode switches to improve cache locality and performance.
*   **fix(session): separate active context tokens from usage totals** (#35999)
    *   Corrects the context meter to distinguish between active context size and cumulative usage, fixing misleading metrics.
*   **fix(tui): avoid duplicate project initialization** (#35998)
    *   Resolves race conditions where concurrent project loads could initialize the same directory multiple times.
*   **fix(vcs): batch untracked diff checks** (#35997)
    *   Optimizes VCS operations by batching untracked file diffs, improving performance in repositories without a HEAD commit.
*   **fix(skill): avoid symlink traversal during discovery** (#35996)
    *   Enhances security and stability by preventing infinite loops or errors during external skill discovery via symlinks.
*   **fix(core): avoid per-file directory list rebuild** (#35994)
    *   Improves search performance by avoiding full directory list rebuilds for every indexed file match.
*   **refactor: remove todo tool** (#35989)
    *   Removes the legacy V2 todo tool and associated services to streamline the codebase and V1 compatibility.

## 5. Feature Request Trends
*   **API Transparency & Control:** There is a strong push for exposing subscription usage data via API (#16017) and implementing configurable session data retention/cleanup (#34875) to give users more control over their environment and costs.
*   **Enhanced MCP Support:** Users are requesting full compliance with the latest MCP standards (#28567) and support for human-in-the-loop elicitation protocols (#23066) to enable more complex agent workflows.
*   **Performance Metrics:** Requests for experimental token-per-second calculations (#6096) indicate a desire for deeper observability into model performance during development.

## 6. Developer Pain Points
*   **Resource Efficiency & Stability:** Recurring complaints about high CPU usage (#30086) and session hanging issues (#33028) suggest that recent updates have introduced stability regressions that impact the developer experience significantly.
*   **Model Compatibility:** Multiple issues highlight friction with specific models (Gemma 4 via Ollama #20995, GLM-5.2 via OpenCode Go #33490), indicating that the abstraction layer for diverse providers needs more robust handling of edge cases and non-standard responses.
*   **Configuration & Credential Management:** Users struggle with automatic credential refreshing (AWS SSO #1934) and copy/paste functionality in CLI modes on Linux (#35977, #35978), pointing to gaps in seamless local environment integration.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-09

### 1. Today's Highlights
The Pi project addressed critical stability and rendering regressions in v0.80.3, specifically resolving issues with OpenAI reasoning content display and Linux/Bun clipboard functionality. Concurrently, the team updated GitHub Copilot metadata to reflect extended context windows and introduced prompt cache miss tracking for the coding agent to improve observability.

### 2. Releases
**No new releases published in the last 24 hours.**

### 3. Hot Issues
*   **#5700: Support multiple live agent sessions** [Closed]
    *   *Significance:* Enables TUI-based session juggling, allowing background agents while interacting with others. High interest in multi-tasking workflows.
    *   *Link:* [Issue #5700](https://github.com/earendil-works/pi/issues/5700)
*   **#6204: mimo-v2-omni ghost model on MiMo Token Plans** [Closed]
    *   *Significance:* Resolved a configuration error where bundled models were listed for providers that did not support them, causing `400 Param Incorrect` errors.
    *   *Link:* [Issue #6204](https://github.com/earendil-works/pi/issues/6204)
*   **#5263: Ephemeral in-session model/thinking changes** [Open]
    *   *Significance:* Proposes making session-specific model changes non-persistent by default, reducing accidental global setting overrides. Received 6 upvotes.
    *   *Link:* [Issue #5263](https://github.com/earendil-works/pi/issues/5263)
*   **#5886: AgentSession settlement/continuation bugs** [Open]
    *   *Significance:* A meta-issue tracking recurring bugs where post-run logic attempts to continue from stale transcripts, affecting session integrity.
    *   *Link:* [Issue #5886](https://github.com/earendil-works/pi/issues/5886)
*   **#6434: Empty reasoning content TUI render for OpenAI** [Closed]
    *   *Significance:* Fixed a UI bug where OpenAI reasoning content was not stripped correctly, leading to empty or malformed renders.
    *   *Link:* [Issue #6434](https://github.com/earendil-works/pi/issues/6434)
*   **#6414: streamProxy drops ToolCall.thoughtSignature (Gemini)** [Closed]
    *   *Significance:* Addressed a proxy-related failure where Gemini multi-turn tool calls failed with `400 INVALID_ARGUMENT` due to missing thought signatures.
    *   *Link:* [Issue #6414](https://github.com/earendil-works/pi/issues/6414)
*   **#6303: Exponential retry backoff uncapped** [Open]
    *   *Significance:* Highlights a bug where retry delays grow unbounded, potentially causing hours-long waits (e.g., ~4 mins on attempt 7) despite `maxRetryDelayMs` config.
    *   *Link:* [Issue #6303](https://github.com/earendil-works/pi/issues/6303)
*   **#6433: DeepSeek V4 thinking mode crashes session** [Closed]
    *   *Significance:* Resolved a regression in v0.80.3 where DeepSeek V4 with high thinking levels caused silent TUI crashes due to lost reasoning content.
    *   *Link:* [Issue #6433](https://github.com/earendil-works/pi/issues/6433)
*   **#6250: Ctrl+V image paste fails on Linux/Bun** [Closed]
    *   *Significance:* Fixed native clipboard binding resolution issues in the Bun release binary on Linux/X11 environments.
    *   *Link:* [Issue #6250](https://github.com/earendil-works/pi/issues/6250)
*   **#6406: Read-only ~/.pi/agent fails credential reads** [Closed]
    *   *Significance:* Identified that Pi creates lock files even during read-only operations, causing failures when the config directory is mounted read-only.
    *   *Link:* [Issue #6406](https://github.com/earendil-works/pi/issues/6406)

### 4. Key PR Progress
*   **#6437: Update Copilot extended context windows** [Closed]
    *   *Summary:* Updates metadata for GitHub Copilot models to support the 1M token context window announced in June 2026.
    *   *Link:* [PR #6437](https://github.com/earendil-works/pi/pull/6437)
*   **#6436: Hide responses reasoning comment markers** [Closed]
    *   *Summary:* Strips `<!-- -->` separators from visible OpenAI Responses reasoning summaries while preserving raw data for replay.
    *   *Link:* [PR #6436](https://github.com/earendil-works/pi/pull/6436)
*   **#6427: Add prompt cache miss tracking** [Open]
    *   *Summary:* Introduces warnings for prompt cache misses per turn in the coding agent, aiding in performance debugging.
    *   *Link:* [PR #6427](https://github.com/earendil-works/pi/pull/6427)
*   **#6430: Fix fork menu double selection** [Closed]
    *   *Summary:* Prevents users from creating multiple session forks by closing the selector menu immediately upon entry.
    *   *Link:* [PR #6430](https://github.com/earendil-works/pi/pull/6430)
*   **#6418: Fix native clipboard in bun release** [Closed]
    *   *Summary:* Ensures `.node` files are copied for import and adds an `xclip` fallback for X11 systems, resolving Linux paste issues.
    *   *Link:* [PR #6418](https://github.com/earendil-works/pi/pull/6418)
*   **#6417: Support custom metadata in JSONL session headers** [Closed]
    *   *Summary:* Adds optional opaque metadata support to the v3 JSONL session header for enhanced harness flexibility.
    *   *Link:* [PR #6417](https://github.com/earendil-works/pi/pull/6417)
*   **#6413: Show git info in local version** [Closed]
    *   *Summary:* Displays local git commit information in the CLI version output for better debugging context.
    *   *Link:* [PR #6413](https://github.com/earendil-works/pi/pull/6413)
*   **#6439: Update GitHub Copilot extended context windows** [Closed]
    *   *Summary:* Related to PR #6437, ensures model metadata reflects the correct context limits.
    *   *Link:* [Issue #6439](https://github.com/earendil-works/pi/issues/6439)
*   **#6438: OpenCode provider 500 error for mimo-v2.5-free** [Closed]
    *   *Summary:* Investigated and closed an issue where a specific model returned 500 errors in Pi but worked via curl.
    *   *Link:* [Issue #6438](https://github.com/earendil-works/pi/issues/6438)
*   **#6435: Export in-memory session storage** [Closed]
    *   *Summary:* Allows extensions to extend the in-memory session storage implementation more cleanly.
    *   *Link:* [Issue #6435](https://github.com/earendil-works/pi/issues/6435)

### 5. Feature Request Trends
*   **Enhanced Observability:** Strong demand for visibility into agent performance, specifically regarding prompt caching misses (#6427) and detailed session metadata (#6417).
*   **Provider Expansion & Stability:** Requests to add built-in support for providers like Novita AI (#6420) and stabilize existing integrations (OpenAI, Gemini, Anthropic) to handle edge cases like rate limits and OAuth billing markers.
*   **Context Window Management:** Users are requesting better handling of context limits, including automatic pre-compaction when switching to smaller context models (#6426) and supporting extended windows for Copilot.

### 6. Developer Pain Points
*   **Runtime-Specific Bugs:** Significant friction reported with the Bun release binary, particularly regarding native clipboard bindings on Linux/X11 (#6250) and socket drop classification (#6431).
*   **Session Integrity & State:** Recurring issues with session state management, including "ghost" models (#6204), stuck forks (#6321), and locking mechanisms failing on read-only directories (#6406).
*   **Complex Model Interactions:** Difficulties with multi-turn tool calls in proxies (Gemini #6414) and reasoning content preservation across different model providers (DeepSeek #6433, OpenAI #6434).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest: 2026-07-09

### 1. Today's Highlights
The Qwen Code team released **v0.19.8**, introducing critical CLI environment isolation and adding WeCom channel documentation. Significant architectural progress continues with deep dives into multi-workspace daemon support and refined token management strategies to prevent context window overflows. Community engagement remains high, particularly around fixing session persistence issues and enhancing channel integrations.

### 2. Releases
**v0.19.8** was released yesterday. Key updates include:
*   **CLI Enhancements**: Added environment isolation and total admission controls for the `serve` command to improve daemon stability.
*   **Documentation**: Expanded the channels overview to include WeCom integration guides.

[View Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.8)

### 3. Hot Issues
These issues reflect the highest community interest and discussion volume:

1.  **[RFC] Multiple Workspaces in One Daemon** [#6378]
    *   *Why it matters*: Proposes shifting from `1 daemon = 1 workspace` to supporting multiple workspaces per daemon process. This is a foundational change for advanced usage patterns.
    *   *Community*: High debate on implementation details and backward compatibility.

2.  **Extensions Install Failure on Windows** [#6334]
    *   *Why it matters*: Users report installation failures when cloning from Git, unrelated to network issues. This blocks extension ecosystem growth on Windows.
    *   *Community*: Frustration over lack of clear error messages.

3.  **Hard Limit: 0 Context Window Error** [#6384]
    *   *Why it matters*: Investigates a bug where reserved output space causes the hard token limit to drop to zero, crashing the session before any API call.
    *   *Community*: Critical bug affecting stability for large context windows.

4.  **Subagent Reasoning Loop Infinite Repetition** [#6505]
    *   *Why it matters*: Identifies a flaw where subagents repeat identical tool calls indefinitely because the main agent’s loop detection doesn't catch it.
    *   *Community*: Highlighting a gap in multi-agent safety mechanisms.

5.  **Git Commit Info Generation Error** [#2757]
    *   *Why it matters*: Persistent bug where generating and pushing git commit info fails, disrupting version control workflows.
    *   *Community*: Long-standing issue affecting developer productivity.

6.  **Task Interruption Without Self-Resumption** [#4278]
    *   *Why it matters*: Agents stop executing tasks mid-way without resuming, leaving projects in an incomplete state.
    *   *Community*: Concerns over reliability in long-running automated tasks.

7.  **VSCode Connection Failure** [#6414]
    *   *Why it matters*: Users unable to connect to the Qwen agent from VSCode, indicating potential compatibility or configuration regressions.
    *   *Community*: Urgent need for fix to maintain IDE integration.

8.  **Process Recognition Failure** [#6246]
    *   *Why it matters*: Qwen Code terminates its own node processes when asked to stop a child process, leading to self-disruption.
    *   *Community*: Confusion over process isolation boundaries.

9.  **Inject Background Task Status into Hooks** [#6529]
    *   *Why it matters*: Feature request to expose async work status in `Stop` hooks, enabling better state management during agent shutdown.
    *   *Community*: Positive reception from power users managing complex workflows.

10. **CI Triage Swallows Stderr** [#6553]
    *   *Why it matters*: The triage bot fails silently by discarding stderr, making debugging CI failures nearly impossible.
    *   *Community*: Developers frustrated by opaque CI errors.

### 4. Key PR Progress
Notable pull requests advancing the codebase:

1.  **Clamp max_tokens to Context Window** [#6556]
    *   *Summary*: Fixes the "hard limit: 0" bug by ensuring auto-compression respects the actual context window size rather than manufacturing fixed output requests.
    *   *Status*: Open

2.  **List Persisted Sessions for Trusted Workspaces** [#6558]
    *   *Summary*: Enhances the CLI to allow trusted non-primary workspaces to list active persisted sessions, merging live summaries without duplicates.
    *   *Status*: Open

3.  **Webhook-Triggered Channel Tasks** [#6495]
    *   *Summary*: Allows external webhooks to trigger Qwen serve responses, enabling proactive delivery of generated content to chat channels.
    *   *Status*: Open

4.  **Isolated Run Mode for Scheduled Tasks** [#6535]
    *   *Summary*: Introduces `create_sub_session` tool for cron jobs, ensuring scheduled tasks run in fresh contexts rather than accumulating history.
    *   *Status*: Open

5.  **Persist Session Artifacts Across Restarts** [#6557]
    *   *Summary*: Implements V2 daemon session artifact metadata persistence, restoring restorable state after daemon crashes or restarts.
    *   *Status*: Open

6.  **Surface Workspace Memory Task Errors** [#6431]
    *   *Summary*: Adds detailed error reporting for failed async workspace memory tasks, improving visibility into memory management failures.
    *   *Status*: Closed

7.  **Cursor-Paged Transcript Replay** [#6525]
    *   *Summary*: Adds a paged endpoint for replaying session transcripts, optimizing performance for long conversations.
    *   *Status*: Open

8.  **Fix Long Session Timeline Scrolling** [#6526]
    *   *Summary*: Resolves UI issues in Web Shell where long timelines become unscrollable or lose focus on the current marker.
    *   *Status*: Open

9.  **Single-Target Autofix Scheduler** [#6547]
    *   *Summary*: Optimizes the autofix bot to target only one actionable PR per run, reducing resource contention and improving review quality.
    *   *Status*: Closed

10. **Align Memory Dialog with Managed Memory** [#6434]
    *   *Summary*: Updates the CLI memory dialog to correctly reflect managed auto-memory folders instead of stale QWEN.md references.
    *   *Status*: Closed

### 5. Feature Request Trends
Based on recent issues, the community is prioritizing:
*   **Daemon Architecture**: Strong demand for multi-workspace support within a single daemon process and better session persistence across restarts.
*   **Channel Extensibility**: Requests for webhook triggers, DM policy configurations, and deeper integration with platforms like WeCom and QQ Bot.
*   **Observability & Debugging**: Need for better error logging in CI/CD pipelines, transparent hook payloads, and diagnostic tools for channel adapters.

### 6. Developer Pain Points
*   **Session Stability**: Recurring issues with session truncation, infinite loops in subagents, and context window calculation errors indicate fragility in long-running agent states.
*   **Platform-Specific Bugs**: Windows extension installation failures and VSCode connection drops suggest inconsistent cross-platform testing or dependency management.
*   **Error Visibility**: Silent failures in CI triage and unclear error messages for token limits hinder troubleshooting efficiency.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-07-09
**Source:** Hmbown/CodeWhale (GitHub)

### 1. Today's Highlights
The v0.8.68 milestone is nearing completion with significant progress on the "Fleet" agent roster system, standardizing `AgentProfile` as the canonical contract for provider routing and thinking tiers. Concurrently, the project has finalized the integration of the live Models.dev catalog, replacing static bundled data with automated refresh pipelines, while simultaneously stabilizing Android/Termux support for mobile environments.

### 2. Releases
No new releases were published in the last 24 hours. Development is currently focused on merging v0.8.68 milestones into the main branch.

### 3. Hot Issues
*   **[v0.8.68 execution board](https://github.com/Hmbown/CodeWhale/issues/4092)** - *Open* | **51 comments**
    Acts as the central tracking hub for the v0.8.68 milestone, defining lane-based workflows and canonical packet structures for agents.
*   **[Environment-level tool sandboxing](https://github.com/Hmbown/CodeWhale/issues/4042)** - *Closed* | **12 comments**
    Resolved enforcement of `tool_restrictions` across sessions, sub-agents, and Fleet workers, addressing critical security and reliability concerns.
*   **[Per-sub-agent provider assignment](https://github.com/Hmbown/CodeWhale/issues/3965)** - *Closed* | **7 comments**
    Implemented explicit routing for sub-agents, allowing distinct provider configurations (e.g., LM Studio) independent of the parent session.
*   **[Model catalog consolidation](https://github.com/Hmbown/CodeWhale/issues/4109)** - *Closed* | **5 comments**
    Completed the transition to using Models.dev as the single source of truth for provider and model metadata, removing parallel curated datasets.
*   **[Focused Rust/TUI performance quick wins](https://github.com/Hmbown/CodeWhale/issues/4113)** - *Closed* | **4 comments**
    Addressed startup latency and rendering inefficiencies through micro-optimizations, including constant definition and lock migration.
*   **[Make AgentProfile canonical for Fleet rosters](https://github.com/Hmbown/CodeWhale/issues/4111)** - *Closed* | **4 comments**
    Eliminated the parallel Fleet-specific profile system, unifying agent configuration under the standard `AgentProfile` schema.
*   **[Unicode, CJK, and terminal-width rendering QA](https://github.com/Hmbown/CodeWhale/issues/3488)** - *Open* | **3 comments**
    Identified ongoing rendering issues with mixed-width characters and terminal resizing, designated for a specific QA lane post-v0.8.68.
*   **[Fleet profiles save provider model and thinking](https://github.com/Hmbown/CodeWhale/issues/4137)** - *Closed* | **3 comments**
    Extended the Fleet profile schema to persist concrete model routes and reasoning effort levels, enhancing agent configurability.
*   **[Use Models.dev as source of truth](https://github.com/Hmbown/CodeWhale/issues/4184)** - *Closed* | **3 comments**
    Initiated the architectural shift away from hand-curated model lists to a live, cached feed from Models.dev.
*   **[Launch startup inefficiency](https://github.com/Hmbown/CodeWhale/issues/3757)** - *Closed* | **3 comments**
    Investigated and mitigated slow launch times, ensuring the TUI feels immediate for repeated development cycles.

### 4. Key PR Progress
*   **[PR #4264: Cache command and regex hot paths](https://github.com/Hmbown/CodeWhale/pull/4264)** - Merged static storage for command groups and introduced LRU caching for regex patterns to reduce runtime overhead.
*   **[PR #4096: Sub-agent tool scoping plan & Phase 1](https://github.com/Hmbown/CodeWhale/pull/4096)** - Implemented documentation and initial code structures for enforcing tool restrictions on sub-agents.
*   **[PR #4263: Android updater & Termux docs](https://github.com/Hmbown/CodeWhale/pull/4263)** - Batch merge fixing the self-updater to correctly select Android assets and adding comprehensive Termux installation guides.
*   **[PR #4225: Extract hardcoded localization texts](https://github.com/Hmbown/CodeWhale/pull/4225)** - Refactored TUI strings into locale files, improving i18n support and test stability on non-English systems.
*   **[PR #4262: Route AgentProfile pins through custom providers](https://github.com/Hmbown/CodeWhale/pull/4262)** - Fixed sub-agent routing to correctly handle user-defined OpenAI-compatible providers like LM Studio.
*   **[PR #4261: Retire loadout-first copy](https://github.com/Hmbown/CodeWhale/pull/4261)** - Updated UI terminology and documentation to reflect the shift from "loadouts" to "profile route presets."
*   **[PR #4260: Persist AgentProfile thinking tier](https://github.com/Hmbown/CodeWhale/pull/4260)** - Added TOML support for explicit reasoning effort and updated the `/fleet setup` wizard to capture this configuration.
*   **[PR #4259: Honor AgentProfile route contract](https://github.com/Hmbown/CodeWhale/pull/4259)** - Ensured Fleet workers inherit explicit model pins from AgentProfiles rather than falling back to session defaults.
*   **[PR #4258: Android arm64 install checklist](https://github.com/Hmbown/CodeWhale/pull/4258)** - Documented Android-specific installation procedures and limitations in the main README.
*   **[PR #4255: Models.dev refresh/snapshot automation](https://github.com/Hmbown/CodeWhale/pull/4255)** - Automated the fetching and validation of the live Models.dev catalog, enabling background updates without manual intervention.

### 5. Feature Request Trends
*   **Canonical Agent Configuration:** Strong community demand for a unified `AgentProfile` system that handles provider routing, thinking tiers, and fleet assignment consistently, moving away from ad-hoc or parallel configuration methods.
*   **Live Model Metadata:** A clear shift towards dynamic, internet-sourced model catalogs (Models.dev) over static, bundled JSON files to ensure up-to-date provider availability.
*   **Mobile/Edge Support:** Increased interest in robust Android/Termux support, specifically regarding proper asset selection, sandbox limitations, and offline-first capabilities.

### 6. Developer Pain Points
*   **Startup Latency:** Users have repeatedly reported slow initialization times, driving the v0.8.68 performance lane to optimize cold-start paths and mutex locking.
*   **UI/UX Clarity:** Confusion around "loadout" vs. "profile" terminology and overlapping display states in the Fleet setup wizard required significant documentation and copy refactoring.
*   **Localization Gaps:** Hardcoded strings causing test failures on non-English systems and poor rendering of CJK/Unicode text in terminal-resize scenarios remain active quality assurance targets.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-0/os-feed).*