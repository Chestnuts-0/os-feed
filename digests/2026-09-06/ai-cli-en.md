# AI CLI Tools Community Digest 2026-09-06

> Generated: 2026-09-06 08:17 UTC | Tools covered: 9

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



---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills summary generation failed.

---

# Claude Code Community Digest (2026-09-06)

---

### 1. Today's Highlights
The Claude Code community is heavily focused on recent desktop app and agent communication regressions following the latest bundle updates. Key discussions center around proposed extensible plugin architectures via "Function Hooks" (#91870) and tool registration bugs affecting cross-session agent workflows (`ListAgents` and `SendMessage`). Additionally, developers are navigating breaking regressions in window management, session history retention, and TUI stability.

---

### 2. Releases
- **v2.1.263**: Minor release containing general bug fixes and reliability improvements.

---

### 3. Hot Issues
1. **[Issue #91870](https://github.com/anthropics/claude-code/issues/91870)**: *Function Hooks - make plugins 10x more powerful*
   - **Why it matters**: Proposes a deep extension model using an Express/Koa-style continuation (`next`) framework with parameterized side-effect tracking.
   - **Community Reaction**: Extremely high engagement (113 comments, 72 👍), signaling strong developer desire for advanced plugin hooks.
2. **[Issue #92249](https://github.com/anthropics/claude-code/issues/92249)**: *ListAgents / SendMessage missing from tool registry in Desktop scheduled-task and Remote Control sessions*
   - **Why it matters**: A regression introduced between Desktop `1.44121.4` and `1.46388.1` that drops critical cross-session tools in automated environments.
   - **Community Reaction**: Frustration over broken automation pipelines and scheduled tasks.
3. **[Issue #91870 / #92409](https://github.com/anthropics/claude-code/issues/92409)**: *SendMessage tool missing in desktop Code tab session while ListAgents shows peers*
   - **Why it matters**: Subagents can be listed, but the actual messaging tool is absent from the toolset (`ToolSearch` returns no matches), breaking multi-agent workflows.
   - **Community Reaction**: Active troubleshooting by developers running desktop Code tabs on Windows.
4. **[Issue #26452](https://github.com/anthropics/claude-code/issues/26452)**: *Session Disappeared After Logout / Restart of Claude Code Desktop*
   - **Why it matters**: Persistent issue regarding missing session references and local transcripts following app logouts or restarts.
   - **Community Reaction**: High comment count (53) from users seeking urgent session recovery pathways.
5. **[Issue #91942](https://github.com/anthropics/claude-code/issues/91942)**: *Ultracode mode was reported ON without the user enabling it*
   - **Why it matters**: An erroneous system reminder triggered "Ultracode mode" automatically, causing the model to spawn 160 subagents and exhaust the user's 5-hour limit.
   - **Community Reaction**: Urgent concern regarding autonomous runaway token/quota consumption.
6. **[Issue #91102](https://github.com/anthropics/claude-code/issues/91102)**: *Fullscreen: scroll-back sticky "last prompt" banner never appears since 2.1.247*
   - **Why it matters**: A refactor (`scrollRef` -> `scrollViewport.handle`) broke the utility banner that tracks the most recent prompt during scroll-back.
   - **Community Reaction**: Frustrated TUI users missing essential context orientation.
7. **[Issue #34196](https://github.com/anthropics/claude-code/issues/34196)**: *VSCode extension: add font size setting for chat panel*
   - **Why it matters**: The chat panel defaults to a fixed size smaller than the main editor with no customization option.
   - **Community Reaction**: Highly upvoted (84 👍) UI accessibility request.
8. **[Issue #88075](https://github.com/anthropics/claude-code/issues/88075)**: *Claude Code v2.1.237 does not advertise URL-mode elicitation on MCP 2026-07-28*
   - **Why it matters**: Advertises an empty elicitation capability block (`"elicitation": {}`), preventing `InputRequiredResult` from being properly fulfilled.
   - **Community Reaction**: Developers hitting integration blocks with newer MCP spec handshakes.
9. **[Issue #92452](https://github.com/anthropics/claude-code/issues/92452)**: *Dispatch start_code_task rejects second session in same non-git directory since 2.1.258*
   - **Why it matters**: A regression causing `start_code_task` to falsely flag existing active sessions in non-git workspaces.
   - **Community Reaction**: Immediate friction for multi-session workflows in non-git directories.
10. **[Issue #82338](https://github.com/anthropics/claude-code/issues/82338)**: *Tamil script output collapses TUI rendering (combining-mark width bug)*
    - **Why it matters**: TUI renderer assumes one display column per code point, corrupting conversational layouts when rendering complex scripts like Tamil (approx. 40% combining marks).
    - **Community Reaction**: Documented rendering crash for internationalized developer outputs.

---

### 4. Key PR Progress
1. **[PR #87077](https://github.com/anthropics/claude-code/pull/87077)**: *fix(pr-review-toolkit): repair invalid YAML frontmatter in all agents*
   - Fixes unquoted scalar fields containing dialogue lines that were misparsed as nested mappings, causing agents to load with empty frontmatter.
2. **[PR #87079](https://github.com/anthropics/claude-code/pull/87079)**: *fix(security-guidance): make \*\* glob patterns match zero-depth paths*
   - Overhauls glob matching logic (previously delegating strictly to `fnmatch`) to ensure top-level files are no longer silently excluded from security rules.
3. **[PR #89404](https://github.com/anthropics/claude-code/pull/89404)**: *validate-agent.sh: don't abort at the first warning (set -e + ((x++))) and stop false-flagging valid agents*
   - Resolves shell script pipeline crashes (`set -euo pipefail`) during local agent validation checks.
4. **[PR #56176](https://github.com/anthropics/claude-code/pull/56176)**: *Claude/book outline bootstrap toolkit*
   - Introduces a structural content outlining bootstrap toolkit for documentation generation.

*(Note: The remaining active PR queue focuses on agent validation script hardening and pattern matching fixes).*

---

### 5. Feature Request Trends
- **Deep Extensibility & Plugin Architecture**: High demand for programmatic hook systems (like Function Hooks) to manipulate tool execution and CLI behaviors safely.
- **Granular Agent Controls**: Requests for per-call effort/reasoning parameters on the Task/Agent tool rather than relying strictly on global static definitions (#77298).
- **Multi-Account & Cross-Session Management**: Better local session recovery, visibility across multi-account desktop states, and unified path resolution (e.g., handling Windows NTFS junctions or multi-profile account switches).
- **IDE Customizability**: Font sizing, layout adjustments, and tighter integration consistency between the CLI, VSCode, and Desktop code tabs.

---

### 6. Developer Pain Points
- **Desktop App & Tool Registrations Regressions**: Recent desktop builds (`1.44121.4` to `1.46388.x`) frequently drop critical multi-agent tools (`SendMessage`, `ListAgents`) or fail to auto-enable Remote Control for scheduled tasks.
- **Accidental Quota/Limit Exhaustion**: Runaway subagent spawning triggered by false-positive system states (e.g., unintended "Ultracode" triggers) consuming hours of session limits in minutes.
- **Transcript and Session Desync**: Loss of UI session visibility after app reinstalls, account switches, or desktop restarts, even though the raw `.jsonl` transcripts remain intact on disk.
- **Platform & Environment Incompatibilities**: Path resolution mismatches between VS Code extensions and the CLI (such as NTFS junctions on Windows) and auto-update failures cutting off legacy OS environments without rollback options.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-09-06

### 1. Today's Highlights
Development activity today was heavily focused on platform parity and infrastructure, with a significant push to stabilize the Windows desktop experience via Bazel-integrated build tools. While no new application versions were released in the last 24 hours, the repository saw intense PR activity surrounding "voice-host" capabilities and real-time WebRTC integration.

---

### 2. Releases
*   **None.** (No releases in the last 24 hours).

---

### 3. Hot Issues
1.  **[#18960] WebSocket Reconnect Loop:** High-impact connectivity bug on macOS causing streamers to fail; 57 comments and 51 👍 highlight widespread user frustration. [Link](https://github.com/openai/codex/issues/18960)
2.  **[#31836] Sort by Last Updated Failure:** Project sorting remains broken on macOS Apple Silicon, impacting workflow management for power users. [Link](https://github.com/openai/codex/issues/31836)
3.  **[#41290] Windows/WSL Project Management:** Project creation/removal fails when switching environments, severely hindering cross-platform development flows. [Link](https://github.com/openai/codex/issues/41290)
4.  **[#41470] Windows-Mobile Sync Asymmetry:** Critical synchronization failure where new desktop threads fail to appear on mobile, frustrating multi-device users. [Link](https://github.com/openai/codex/issues/41470)
5.  **[#25820] CLI Authentication Block:** Pro subscribers are being rate-limited by phone verification during `codex login`, preventing CLI access. [Link](https://github.com/openai/codex/issues/25820)
6.  **[#40867] Windows App Execution Failure:** Bundled CLI binary failures on Windows 11 are preventing the app from launching entirely. [Link](https://github.com/openai/codex/issues/40867)
7.  **[#42853] Missing GPT-6 Astra:** Pro subscribers are failing to see the latest models in the desktop picker, limiting access to flagship features. [Link](https://github.com/openai/codex/issues/42853)
8.  **[#19333] High Memory Usage (macOS):** Long-standing performance regression following recent updates, causing elevated memory consumption. [Link](https://github.com/openai/codex/issues/19333)
9.  **[#41741] Auto-review Overrides:** New "Desktop Auto-review" feature is incorrectly flagging local-only tasks as sensitive, blocking legitimate workflows. [Link](https://github.com/openai/codex/issues/41741)
10. **[#43146] 100% CPU Usage (macOS):** V8 JIT loops causing UI freezes and performance degradation on the latest desktop release. [Link](https://github.com/openai/codex/issues/43146)

---

### 4. Key PR Progress
1.  **[#43178] Guarded Legacy Resume:** Allows for background migration while preserving legacy session shortcuts. [Link](https://github.com/openai/codex/pull/43178)
2.  **[#43147] Experimental Context Gating:** Improves startup reliability by checking model capability before activating experimental features. [Link](https://github.com/openai/codex/pull/43147)
3.  **[#43144] Windows MSVC Bazel Targets:** Adds native support for x64 and ARM64 voice libraries, crucial for Windows performance. [Link](https://github.com/openai/codex/pull/43144)
4.  **[#43126] Expose Native Build Tools:** Patches Bazel to retain MSVC tools, addressing native dependency availability issues. [Link](https://github.com/openai/codex/pull/43126)
5.  **[#43120] Managed Worktree Creation:** Adds `/worktree` to TUI, allowing forks into new managed checkouts. [Link](https://github.com/openai/codex/pull/43120)
6.  **[#43114] Bazel Voice Runtime Prep:** Introduces `native_runtime` targets for improved build integrity on macOS and Linux. [Link](https://github.com/openai/codex/pull/43114)
7.  **[#43113] Server-side Opt-ins:** Enables subagent and memory settings to be saved via the app server, ensuring configuration consistency. [Link](https://github.com/openai/codex/pull/43113)
8.  **[#43104] Guardianv2 Configuration:** Moves thread context logic into a structured `guardianv2` schema. [Link](https://github.com/openai/codex/pull/43104)
9.  **[#43100] Opus RTP Handling:** Implements bounded packet handling for voice streaming to prevent memory overhead. [Link](https://github.com/openai/codex/pull/43100)
10. **[#43097] Realtime WebRTC API:** Adds `RealtimeWebrtcSession` for better audio control, negotiation, and error reporting. [Link](https://github.com/openai/codex/pull/43097)

---

### 5. Feature Request Trends
*   **Workflow Continuity:** High interest in better session management (e.g., cross-device syncing, one-click workspace transitions).
*   **Granular Control:** Increasing desire for explicit user-defined rules, particularly regarding model memory opt-ins and subagent permissioning.
*   **Infrastructure Parity:** Developers are aggressively pushing for Windows/WSL feature parity with the more mature macOS ecosystem.

---

### 6. Developer Pain Points
*   **Platform Fragility:** Frequent "silent" failures on Windows (app launch failures, binary execution blocks) are creating significant friction.
*   **Performance Regressions:** Memory leaks and CPU spikes on both platforms remain a top source of dissatisfaction.
*   **Safety Over-Correction:** Recent auto-review features are perceived as too aggressive, leading to "false positive" blocks on local coding tasks without clear appeal paths.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*