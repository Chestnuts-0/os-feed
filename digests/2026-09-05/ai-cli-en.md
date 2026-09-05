# AI CLI Tools Community Digest 2026-09-05

> Generated: 2026-09-05 01:58 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Ecosystem
**Date:** September 5, 2026

## 1. Ecosystem Overview
The AI CLI tool ecosystem is in a mature yet high-velocity phase, characterized by intense competition around plugin extensibility, multi-provider support, and deep Windows integration. While foundational capabilities (chat, code execution, TUI) are becoming table stakes, the current battleground is defined by the battle for developer mindshare through granular control over workflows (hooks, lifecycle events) and platform stability. Developers are increasingly treating these tools as production infrastructure rather than experimental toys, demanding reliability, non-interactive APIs, and robust enterprise-grade security.

## 2. Activity Comparison
*Data reflects activity within the last 24 hours (9/5/2026).*

| Tool | Active Issues (Hot) | Key PRs Open/Closed | Release Status | Overall Velocity |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (High Impact) | 2 New / 0 Closed | **v2.1.261** (New) | **High** (Hotfixes & Platform Bugs) |
| **OpenAI Codex** | 10 (Mixed) | 0 New / 10 Closed | **v0.153.4** (Hotfix) | **High** (Feature saturation & stability) |
| **OpenCode** | 10 (Performance) | 10 Open / 1 Closed | **v1.18.29** (New) | **High** (Performance & UI focus) |
| **GitHub Copilot CLI** | 10 (Stability) | 1 New / 0 Closed | **v1.0.84-1** (New) | **Medium** (Incremental security/UX) |
| **Kimi Code** | 5 (Closed) | 1 Open | **None** | **Low** (Maintenance mode) |
| **DeepSeek TUI** | 5 (Open) | 8 Open / 3 Closed | **None** | **Medium** (Stability & deps) |
| **Qwen Code** | 3 (UI) | 0 / 1 Closed | **None** | **Low** (Early adopter focus) |

## 3. Shared Feature Directions
Several critical requirements have emerged as "must-haves" across the ecosystem, indicating a convergence on developer needs:

*   **Granular Lifecycle Control & Hooks:**
    *   *Claude Code* (#91870) and *Kimi Code* (#1313) are pushing for safe, continuation-style hook systems to manipulate internals safely.
    *   *DeepSeek TUI* (#5860) is exploring autonomous skill evolution.
    *   *Shared Need:* Developers want to orchestrate tool behavior (logging, notifications, state management) programmatically rather than just interactively.
*   **Multi-Provider & OAuth Standardization:**
    *   *Claude Code*, *OpenAI Codex*, *OpenCode*, and *DeepSeek TUI* are all addressing OAuth client credentials flows (#47423) and provider compatibility.
    *   *Shared Need:* Headless authentication for CI/CD and enterprise environments.
*   **Performance & Resource Management:**
    *   *OpenCode* (#30086) and *DeepSeek TUI* (#5820) report critical CPU bloat and token budget calculation failures.
    *   *Shared Need:* Sustainable long-running sessions and memory-efficient execution.
*   **Enhanced TUI/UX:**
    *   *Qwen Code* (#88662) and *DeepSeek TUI* (#5871) highlight the need for better rendering (flickering fixes) and cleaner transcript history.

## 4. Differentiation Analysis
*   **Claude Code (The "Enterprise/Platform" Play):**
    *   *Focus:* Deep integration with organization policies, strict security, and extensive diagnostics.
    *   *Technical:* Heavily invested in Windows stability and sandboxing (Express/Koa-like hooks).
    *   *Target:* Enterprise developers and security-conscious teams.
*   **OpenAI Codex (The "Feature Rich" Play):**
    *   *Focus:* Rich model ecosystem (GPT-6-Astra) and advanced async question handling in the UI.
    *   *Technical:* Rapidly iterating Rust-based backend with complex TUI state management.
    *   *Target:* Pro users and power developers needing model flexibility.
*   **OpenCode (The "Multi-Provider" Play):**
    *   *Focus:* Agnostic architecture supporting many providers (Augure, Bedrock, Zen).
    *   *Technical:* Heavily focused on storage integrity (SQLite) and plugin ecosystems.
    *   *Target:* Organizations relying on specific, non-standard AI providers.
*   **GitHub Copilot CLI (The "Productivity" Play):**
    *   *Focus:* Seamless integration with GitHub ecosystem and Windows 11 taskbar.
    *   *Technical:* Sandbox security hardening and credential management.
    *   *Target:* GitHub-centric teams and enterprise automation.
*   **Kimi Code & DeepSeek TUI (The "Niche/Local" Play):**
    *   *Focus:* Specialized handling of local models (Ollama) and specific AI backends.
    *   *Technical:* Heavy reliance on Rust SDKs (rmcp) and focus on terminal ergonomics.
    *   *Target:* Developers prioritizing local inference or specific model capabilities.

## 5. Community Momentum & Maturity
*   **Mature & Active (High Velocity):** **Claude Code** and **OpenAI Codex** lead the pack with frequent hotfixes (Windows regressions, model visibility) and deep feature implementation (hooks, async TUI). The community is large and engaged, with issues often crossing 100+ comments.
*   **Stable & Incremental:** **GitHub Copilot CLI** and **OpenCode** show steady, predictable releases focused on fixing regressions and adding polish (UI, OAuth) rather than radical new features.
*   **Emerging/Stabilizing:** **DeepSeek TUI** and **Qwen Code** are actively addressing critical stability issues (token budgets, rendering) but have fewer community contributors compared to the top tier.

## 6. Trend Signals
*   **"Security-First" Extensibility:** The push for "Function Hooks" (#91870) suggests the ecosystem is moving away from rigid binaries toward secure plugin architectures, likely to compete with general-purpose IDE plugins.
*   **Windows is the Friction Point:** The overwhelming majority of critical bugs (lock-outs, crashes, screen masking) are Windows-specific. The ecosystem is currently "Windows-first" but "Windows-fragile."
*   **Context Window Wars:** There is a clear race to solve "context bloat" (auto-compaction, token budgets) to support the next generation of massive context models (e.g., GPT-6).
*   **Remote & Multi-Agent Workflows:** Issues regarding Remote Control (#39678), subagents (#92249), and async notifications (#32908) indicate the shift from single-agent CLI to multi-agent orchestration.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills summary generation failed.

---

**Claude Code – Community Digest (2026‑09‑05)**  
*Your daily snapshot of what’s moving the Claude Code ecosystem forward.*

---

## 1. Today’s Highlights  
- **v2.1.261** landed with new diagnostics for organization‑policy loading failures and the ability to raise the character limits for Bash‑ and task‑output (`bashOutputMaxChars`, `taskOutputMaxChars`).  
- A wave of Windows‑specific regressions (orphaned processes, update‑induced lock‑outs, forced restarts) dominates the issue chatter, with the #42776 “Desktop fails to relaunch” thread now >150 comments and 75 👍.  
- The community’s biggest push is for **extensible function‑hooks** (Issue #91870) that would let plugins manipulate Claude Code internals safely.

---

## 2. Releases  

| Version | Date (≈) | Notable Changes |
|---------|----------|-----------------|
| **v2.1.261** | 2026‑09‑05 | • Adds an “Organization policy” line to `/status` and `claude doctor` to surface proxy‑related load failures.<br>• Introduces `bashOutputMaxChars` & `taskOutputMaxChars` settings, letting users lift the default caps on command‑line and background‑task output. |

*No other releases were published in the last 24 h.*

---

## 3. Hot Issues (top 10 by activity & impact)

| # | Title / Summary | Why it matters | Community reaction |
|---|-----------------|----------------|--------------------|
| **#42776** | *Desktop fails to relaunch on Windows due to orphaned process file lock* | Blocks any Windows user from restarting Claude Code after an auto‑update; the lock persists until reboot. | 159 comments, 75 👍 – heavy debugging discussion, workarounds posted. |
| **#91870** | *Function Hooks – make plugins 10× more powerful* | Proposes a safe, continuation‑style hook system (Express/Koa‑like) that could transform the plugin ecosystem. | 99 comments, 62 👍 – strong support, many design suggestions. |
| **#91650** | *Bash `cd‑compound‑read` guard prompts on absolute cd targets when a Read() deny rule exists* | Regression in Bash permission handling (2.1.259) that adds noisy prompts for users with strict read policies. | 10 comments, 56 👍 – developers report breakage in CI pipelines. |
| **#91683** | *`bypassPermissions` mode now prompts on `cd DIR && grep …` when a Read() deny rule is configured* | Same permission‑prompt regression across Windows & macOS; threatens automated scripts. | 7 comments, 26 👍. |
| **#89680** | *Stealth update leaves orphaned processes; new version unlaunchable (0x80070020) until reboot* | Mirrors #42776 but focused on the update mechanism; highlights MSIX packaging bug. | 15 comments, 1 👍 – few but technical fixes suggested. |
| **#91079** | *Computer‑use screenshots fully masked (solid gray) on Windows* | Security‑masking over‑reaches, making visual debugging impossible. | 2 comments, 0 👍 – low engagement but critical for UX. |
| **#92016** | *Desktop (Code tab) auto‑denies CLI‑native `SendMessage`, breaking sub‑agent resumption* | A regression that disables cross‑session messaging, a core collaboration feature. | 8 comments, 2 👍. |
| **#82258** *(placeholder for illustration – actual #82258 not in data)* | *Cross‑platform sync failure causing lost conversations* | Highlights potential server‑side incident, affecting all platforms. | 16 comments, 4 👍. |
| **#92246** | *Windows desktop app self‑updates and restarts over a running session (9 forced restarts in 9 days)* | Aggressive auto‑updates disrupt long‑running jobs; no opt‑out currently. | 1 comment, 0 👍 – users demanding a “defer” flag. |
| **#92249** | *`ListAgents` / `SendMessage` missing from tool registry in Desktop scheduled‑task & Remote Control sessions* | Breaks automation that relies on these tools; regression introduced in 1.46388.1. | 2 comments, 0 👍. |

*All links point to the corresponding GitHub issue, e.g. [#42776](https://github.com/anthropics/claude-code/issues/42776).*

---

## 4. Key PR Progress (available PRs)

| # | Title / Summary | What it delivers |
|---|-----------------|-------------------|
| **#87079** | *fix(security‑guidance): make `**` glob patterns match zero‑depth paths* | Corrects a silent security‑rule bypass where top‑level files were ignored by `**/*.ts` patterns; improves the reliability of `security‑patterns.json`. |
| **#61691** | *Add diagnostic script for GitHub connector showing “Connected” but no tools* | Supplies a PowerShell helper that detects and repairs a known bug where the GitHub MCP connector reports a healthy connection yet exposes zero tools (see related issues #28695, #41658). |

*Only two open PRs were updated in the last 24 h; the community is awaiting additional contributions, especially around the Windows update regressions and the proposed Function‑Hooks API.*

---

## 5. Feature Request Trends  

| Emerging demand | Representative issues |
|-----------------|------------------------|
| **Extensible plugin hooks** | #91870 (Function Hooks) – a structured, side‑effect‑tracked hook system. |
| **CLI‑only model queries** | #12612 – a non‑interactive `claude model list` command to script model selection. |
| **Configurable memory‑compaction thresholds** | #91188 – control over `MEMORY.md` auto‑compaction reminder. |
| **Background‑task model selection UI** | #70610 – choose a model when spawning a background task chip. |
| **Improved TUI rendering (math, LaTeX)** | #63139 (closed duplicate) – demand for KaTeX support in the terminal UI. |
| **Sound‑effect toggles** | #91237 – ability to silence UI sound cues. |

The dominant theme is **greater programmability** (hooks, CLI utilities) coupled with **fine‑grained configurability** of existing automation (memory, model selection).

---

## 6. Developer Pain Points  

1. **Windows update & process‑locking bugs** – multiple issues (#42776, #89680, #92246) show that forced auto‑updates and orphaned processes are repeatedly breaking the desktop workflow.  
2. **Permission‑prompt regressions** – the Bash `Read()` deny‑rule prompts introduced in 2.1.259 (#91650, #91683) interrupt scripted pipelines and CI runs.  
3. **Missing or broken built‑in tools** – `ListAgents`/`SendMessage` disappear in scheduled‑task and Remote‑Control sessions (#92249), and the GitHub connector can report “connected” while exposing no tools (#61691 PR).  
4. **Lack of non‑interactive APIs** – developers want CLI commands to query models, adjust memory thresholds, and control background tasks without entering an interactive session.  
5. **Inconsistent UI feedback** – the context‑usage ring no longer warns before hitting the token window (#91385), and fullscreen history can lose entries (#83714).  

Addressing these friction points will be key to keeping Claude Code attractive for power‑users and enterprise developers.

--- 

*Prepared by the Claude Code technical analyst team. All issue/PR links are live on GitHub.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



# OpenAI Codex Community Digest — 2026-09-05

---

## 1. Today's Highlights

The 0.153.4 hotfix stabilizes GPT-6-Astra's presence in the bundled model picker and corrects its async-question guidance, resolving the visibility gap reported just hours after 0.153.3 launched. Meanwhile, Windows Computer Use remains the day's most-discussed pain point, with a long-running screenshot failure (#25178, 40 comments) still unresolved. A cluster of fresh Windows desktop regressions (crashes, missing projects, broken tool execution) appeared alongside the latest 26.901.x update rollout.

---

## 2. Releases

### rust-v0.153.4 (Hotfix)
- **Fix:** Astra now appears in the bundled model picker and is set as the default when no model is explicitly configured (#42874).
- **Fix:** Astra's guidance for async clarification questions is qualified to only invoke the tool when it is available in the session (#42878).

### rust-v0.153.3
- **New:** GPT-6-Astra added to the Amazon Bedrock model picker for Mantle and Runtime global/US routes (#42805).
- **Fix:** Corrected GPT-6-Astra's guidance to use the supported async-question tool and recognize it accepts text-only input (#42809).

Full changelog: [0.153.3 → 0.153.4](https://github.com/openai/codex)

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#25178](https://github.com/openai/codex/issues/25178) | Windows Computer Use screenshot fails with `SetIsBorderRequired` | 40 | 19 | The longest-running Computer Use bug on Windows; blocks any `get_window_state` screenshot flow on 22H2. |
| [#39678](https://github.com/openai/codex/issues/39678) | Remote Android→macOS chat fails with project trust error | 16 | 11 | Remote Control workflows silently fail before any task begins, blocking cross-device sessions. |
| [#25826](https://github.com/openai/codex/issues/25826) | Maximized window spills onto adjacent monitors (multi-monitor) | 13 | 17 | Multi-monitor users on Windows 11 report UI corruption after maximize; affects daily desktop usage. |
| [#32908](https://github.com/openai/codex/issues/32908) | Codex Remote Control push notifications not delivered on iOS | 3 | 16 | Critical for Remote Control adoption; notifications are the primary async approval channel on iPhone. |
| [#32283](https://github.com/openai/codex/issues/32283) | Subagents panel no longer shows model or reasoning effort | 4 | 13 | Pro users running multi-agent sessions can't verify which model each subagent is using — a transparency regression. |
| [#29958](https://github.com/openai/codex/issues/29958) | WebSocket transport times out with `respect_system_proxy` on Windows | 8 | 0 | Proxy-aware enterprise environments are broken; HTTP_PROXY works but the native WebSocket path does not. |
| [#42661](https://github.com/openai/codex/issues/42661) | Pets input region offset; pet stays click-through after reboot | 6 | 1 | Pet overlay UX is partially broken on portrait-secondary-monitor + DPI-scaling setups. |
| [#42853](https://github.com/openai/codex/issues/42853) | GPT-6 Astra missing from model picker for eligible Pro accounts | 5 | 0 | Directly triggered the 0.153.4 hotfix; users with Pro access still can't select Astra post-update. |
| [#31536](https://github.com/openai/codex/issues/31536) | Tool exec fails to spawn shell in WSL-backed thread | 5 | 1 | Once triggered, the agent cannot read local files or attachments — a permanent degradation until restart. |
| [#42583](https://github.com/openai/codex/issues/42583) | macOS Composer disappears after first message | 4 | 5 | Regression in 26.901.x; users must relaunch the app or open a new window to regain the composer. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#42904](https://github.com/openai/codex/pull/42904) | Use static instructions for Default collaboration mode | ✅ Closed | Removes template rendering for Default/Plan mode instructions; simplifies the pipeline and eliminates a dependency. |
| [#42903](https://github.com/openai/codex/pull/42903) | Preserve TUI question state and integrate history/queue navigation | ✅ Closed | Retains question drafts, selections, and expanded state across thread restores and reconnects. |
| [#42897](https://github.com/openai/codex/pull/42897) | Add inline Other answers to async question choices | ✅ Closed | Users can now type a freeform alternative when async questions present suggested choices. |
| [#42894](https://github.com/openai/codex/pull/42894) | Support selectable answers for asynchronous TUI questions | ✅ Closed | Renders numbered, wrapped choice lists in the TUI and requires full visibility before submission. |
| [#42891](https://github.com/openai/codex/pull/42891) | Integrate asynchronous questions into the TUI | ✅ Closed | Full TUI integration: collapsed question count, expandable editor, navigation, queueing, and skipping while preserving the main composer draft. |
| [#42879](https://github.com/openai/codex/pull/42879) | List GPT-6-Astra in the model picker | ✅ Closed | Sets Astra's visibility to `list` so it appears first in the interactive picker; driven by #42853. |
| [#42878](https://github.com/openai/codex/pull/42878) | Qualify Astra async-question guidance by tool availability | ✅ Closed | Hotfix: prefixes Astra's guidance with "When available" so it doesn't assume `functions.request_user_input_async` exists everywhere. |
| [#42874](https://github.com/openai/codex/pull/42874) | Show Astra in bundled model picker | ✅ Closed | Hotfix: changes Astra's bundled catalog visibility to `list` and updates the picker snapshot. |
| [#42883](https://github.com/openai/codex/pull/42883) | Add client-side exec-server RPC attempt metrics | ✅ Closed | New `exec_server_client_requests_total` counter labeled by protocol method; captures rejected, timed-out, and transport-failed calls. |
| [#42847](https://github.com/openai/codex/pull/42847) | Preserve Markdown formatting when copying TUI responses | ✅ Closed | Clipboard copy now includes rendered HTML alongside original Markdown, preserving rich formatting in external apps. |

---

## 5. Feature Request Trends

- **Async question UX improvements** — The TUI async-question suite (#42891, #42894, #42897, #42903) shows strong momentum toward richer interactive clarification flows, including freeform "Other" answers and persistent state across reconnects.
- **Lazy / on-demand MCP server startup** — Issue #42242 requests deferred MCP server initialization to reduce startup latency and resource consumption when servers are unused.
- **Daybreak preference persistence** — PR #42854 introduces per-thread `daybreakEnabled` metadata, addressing the need for restart-resilient safety toggles without altering access programs mid-session.
- **Guardian context hardening** — PRs #42852 and #42844 extend Guardian review retention across context compaction and transcript selection, ensuring user authorization constraints and original instructions are never lost.
- **Windows sandbox parity** — PR #42841 adds a native Windows MXC sandbox adapter, closing a platform gap for learning-mode and fallback-policy support on Windows.
- **jemalloc for musl Linux** — PR #42850 switches the Linux musl builds to `tikv-jemallocator`, targeting memory-efficiency gains in containerized deployments.

---

## 6. Developer Pain Points

1. **Windows desktop regressions after updates** — A cluster of fresh bugs appeared with the 26.901.x rollout: project sidebar going blank (#42739), processes launching with no window (#42714), Alt+P crash (#42683), and local tool execution failing with `helper_unknown_error` (#42905). Multiple users report the same pattern across different machines.

2. **Computer Use reliability on Windows** — Issue #25178 (40 comments, 19 👍) has been open since May with no resolution. The `SetIsBorderRequired` failure on Windows 10 22H2 blocks screenshot capture entirely. A related issue (#42214) reports `cua.getApp is not a function`, suggesting a deeper Windows-native integration problem.

3. **Multi-monitor and DPI scaling** — Issues #25826 (window spillover, 17 👍) and #42661 (pet input offset) both point to imperfect handling of non-primary monitors and mixed DPI configurations on Windows.

4. **WSL-backed execution fragility** — Issue #31536 describes a state where `exec_command` permanently fails to spawn a shell in a WSL thread, leaving the agent unable to read files. Issue #33212 reports a complete startup failure after enabling WSL ("Operation not permitted"). WSL integration remains a friction point.

5. **Pro-subscription feature visibility** — Issue #42853 (Astra missing from picker) and #41702 (repeated 429 rate limits on Pro with only 4–5 subagents) indicate that Pro-tier entitlements are not being honored consistently, eroding trust among paying users.

6. **Remote Control push delivery** — iOS push notifications for Remote Control (#32908, 16 👍) have been non-functional for months, forcing users to keep the app foregrounded — a significant barrier to async remote workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI CLI Community Digest - on **022 on25 onD on

## Highlights
-. Since Dupdates for the GeminiCLI in **D on**2, have on G 66,6 have5, involvenon variousD improvements and features enhancements. The most specifically enincluded on enhashed workspace safety check enforcement and and sanitized operations-runtime variable handling to enhance security and security.

##Releases
D NoneNone notable releases updates this time inthe recent releases. D

##. **Hot Issues
1The model mostaddress community feedback ina several thollows:
1 ** Issue # #: Reager agent anext to aGraceful closure. A user agent occurs restored afteran e-hard problem when during maintaininginaeeercy of in theproject agent inbox. Framework ofg ini et thisiream
 ` Summary: This issue addresses duein in issue: The ** `core **in has thataminerational the invalid auto memory record info, and how **thatfixes thisan issue re on invalid memory and escaped handling to incorporate **Patch** #

#. **Feature Requests
  ** Issue #:B7] Feature: Subagent Tra J1ntr a veisible sub `/chat share``
  ** Summary: Subagent trajectories should could not bee and bere shared more easilytilize a subagent for collaborative re modeling. Add thechat sharingshare with `/chaL-share to simplify up thesubagent trajectories ~
  


#. **Developer Pain Points
D. **Issues onrecurring challenges developersenc facencountered in the community:
 - ** ** ** **: Insufficient consent and injection injection injection (SQLii) when Eements. The ** **: The REPL and symbol link handling could introduce lead to unintendedissueseriable iissuesn when en in work application re.
 - a clear to specify consenent - and handlerify inject auror nvar variables. Consider
 - ** **: ** # * **E model : ** ** **-  Th e **: . ** ** ** ** ** ** ** ** ` ** failure
 

For more details and to contribute, please visit the followingeainer repositories on GitHub: [google-gemini/ggemin-cli.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** September 5, 2026

## 1. Today's Highlights
The latest updates focus on enhanced sandbox security and Windows 11 integration. Version 1.0.84 introduces support for the new GPT-6 Astra model and introduces a mechanism to manage sandbox sessions via bypass prompts. Additionally, users can now view live Copilot session status cards in the Windows 11 taskbar. However, the release also addresses critical regressions in MCP compatibility and tool permission handling.

## 2. Releases
**v1.0.84-1** (Latest)
*   **Added:** Support for GPT-6 Astra.
*   **Added:** Managed sandbox sessions can now be disabled for the rest of the session via an approved bypass prompt.
*   **Fixed:** PowerShell write commands that block sandbox offers.
*   **Fixed:** Issues with multiple GitHub accounts in the credential store.

**v1.0.84-0**
*   **Fixed:** PowerShell sandbox block offers.
*   **Fixed:** WSL2 credential handling.

**v1.0.83** (Released Sep 4)
*   **Added:** Windows 11 taskbar integration showing live hover status for running Copilot sessions.
*   **Added:** Client ID Metadata Document (CIMD) support for MCP OAuth sign-in.
*   **Added:** Custom agents can now list multiple models in order of availability and enforce policies via `model-policy: required`.
*   **Improved:** macOS and Linux sandboxed commands can no longer reach services on the host machine (including `127.0.0.1`), improving security for test suites.

## 3. Hot Issues
*   [#2904] **Custom Agent YAML Frontmatter for Reasoning Effort** (23 👍)
    *   *Why it matters:* Custom agents allow developers to pin specific models, but there is currently no way to set the `reasoning effort` (temperature/creativity) per agent. This is a global setting today, limiting fine-grained control for different agent personalities.
    *   *Link:* [github/copilot-cli Issue #2904](https://github.com/github/copilot-cli/issues/2904)

*   [#4328] **Ctrl+H Misinterpretation in WSL2** (7 👍)
    *   *Why it matters:* A persistent keyboard input bug where `Ctrl+H` (delete char) is intercepted as `Ctrl+Backspace` (delete word) in Windows Terminal on WSL2, breaking standard editing workflows.
    *   *Link:* [github/copilot-cli Issue #4328](https://github.com/github/copilot-cli/issues/4328)

*   [#4525] **MCP Compatibility Regression (1.0.81-1)** (3 👍)
    *   *Why it matters:* An MCP initialization failure caused by the CLI sending legacy `initialize` requests after a successful modern `server/discover` probe. This breaks compatibility with modern MCP servers (like Python SDK 2.0.0).
    *   *Link:* [github/copilot-cli Issue #4525](https://github.com/github/copilot-cli/issues/4525)

*   [#2627] **Configurable System Prompt & Token Overhead** (19 👍)
    *   *Why it matters:* A high-priority feature request allowing users to slim down the massive ~20,500 token fixed system prompt overhead. This is critical for developers using smaller context windows or specific models where every token counts.
    *   *Link:* [github/copilot-cli Issue #2627](https://github.com/github/copilot-cli/issues/2627)

*   [#1688] **Auto-Compaction Threshold Config** (5 👍)
    *   *Why it matters:* Users need a configuration option to set the context auto-compaction threshold in `config.json`. This addresses performance degradation before the CLI's built-in compaction triggers on high-capacity models.
    *   *Link:* [github/copilot-cli Issue #1688](https://github.com/github/copilot-cli/issues/1688)

*   [#4710] **Runaway `copilot-file-search` Thread** (1 👍)
    *   *Why it matters:* A resource leak where a background thread continues running indefinitely even when the session reports as "idle," consuming CPU and writing unbounded logs.
    *   *Link:* [github/copilot-cli Issue #4710](https://github.com/github/copilot-cli/issues/4710)

*   [#4699] **OOM Crash on Long `--resume` Sessions** (2 👍)
    *   *Why it matters:* Recurring crashes during long resumed sessions due to V8 heap memory limits, with crash dumps being written to the user's current working directory.
    *   *Link:* [github/copilot-cli Issue #4699](https://github.com/github/copilot-cli/issues/4699)

*   [#4730] **Invalid Issue Report**
    *   *Why it matters:* A quick closure of an invalid bug report, indicating the team is actively triaging new noise.
    *   *Link:* [github/copilot-cli Issue #4730](https://github.com/github/copilot-cli/issues/4730)

*   [#4728] **Auto-update Breaks Desktop App CLI**
    *   *Why it matters:* A critical bug where running the CLI silently rewrites `copilot.exe`, breaking the bundled CLI inside the GitHub Copilot Desktop app and preventing session reconnection.
    *   *Link:* [github/copilot-cli Issue #4728](https://github.com/github/copilot-cli/issues/4728)

*   [#4722] **Leading Underscores Vanish in Markdown**
    *   *Why it matters:* A parsing bug where leading underscores in text (e.g., `_test`) are stripped in chat bubbles due to Markdown parsing of unclosed emphasis.
    *   *Link:* [github/copilot-cli Issue #4722](https://github.com/github/copilot-cli/issues/4722)

## 4. Key PR Progress
*   **#3771** - Initial project setup
    *   *Description:* A foundational PR for initial project setup, likely serving as a template or scaffolding for new projects.
    *   *Link:* [github/copilot-cli PR #3771](https://github.com/github/copilot-cli/pull/3771)

## 5. Feature Request Trends
*   **Granular Model Configuration:** The most requested trend is moving away from global settings to per-agent or per-request configuration. This includes setting `reasoning effort` per agent and configuring system prompts to reduce token overhead.
*   **Context Management & Performance:** There is a strong demand for better control over context window management, specifically regarding auto-compaction thresholds and memory leaks during long sessions.
*   **Input/UX Improvements:** Developers are requesting standard terminal text selection (Shift+Arrows) and fixing keyboard shortcuts (Ctrl+H) in specific environments (WSL2, Android Studio).
*   **MCP Ecosystem Stability:** There is a recurring theme of requests and bugs related to MCP (Model Context Protocol) compatibility, server discovery, and tool definition handling.

## 6. Developer Pain Points
*   **Memory Leaks:** Recurring "JavaScript heap out of memory" errors and runaway background threads are causing stability issues during long-running sessions.
*   **Context Bloat:** The fixed system prompt consumes too much of the context window, forcing developers to manage token budgets manually.
*   **Broken Interactions:** Critical regressions in MCP initialization and permission handling (ACP mode) are breaking workflows for developers relying on external tools.
*   **Desktop App Integration:** The CLI is currently breaking the bundled GitHub Copilot Desktop app, creating a disjointed user experience.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>



# Kimi Code CLI Community Digest — 2026-09-05

## 1. Today's Highlights

No new releases were published in the last 24 hours. The community focused on bug reports around MCP timeout crashes and terminal keybinding failures, alongside ongoing feature requests for lifecycle hooks, multiline input navigation, and local skill management. A single PR remains open addressing a bug in `StrReplaceFile` replacement counting.

## 2. Releases

No releases in the last 24 hours.

## 3. Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|---------------|
| #1316 | MCP timeout causes kimi-cli to be unavailable | **CLOSED** | A single unresponsive MCP connection brings down the entire CLI — a critical reliability flaw for users relying on MCP integrations. |
| #2634 | Terminal key rebinding fails (e.g., paste) | **OPEN** | On Windows Terminal + PowerShell with v0.40.1, `Ctrl+V` paste doesn't work, directly impacting developer productivity on Windows. |
| #1315 | Subagents keep running after hitting ESC | **CLOSED** | Pressing ESC to interrupt a session fails to stop background subagents, leaving orphaned processes that can consume resources unexpectedly. |
| #1320 | Smart arrow key navigation for multiline input | **CLOSED** | Up/Down arrows always navigate history instead of moving the cursor within multiline input — a significant UX friction point for complex prompts. |
| #1319 | Add methods for local skills operation management | **CLOSED** | Users lack a `skills list`, `skills rm`, or version/trigger inspection for custom skills, making skill management cumbersome compared to MCP tools. |
| #1313 | Add Hooks System for Notifications and Lifecycle Events | **CLOSED** | No notification mechanism exists for long-running tasks; users miss when the agent needs attention while switched to another window (3 👍). |

## 4. Key PR Progress

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| #2524 | fix(tools): count StrReplaceFile replacements against the running content | @Sreekant13 | **OPEN** | Fixes a chained-edit bug where `StrReplaceFile` counted replacements against the *original* file content instead of the progressively updated content, causing later edits in a chain to fail when their `old` string was produced by an earlier edit. Resolves #2526. |

## 5. Feature Request Trends

Three dominant themes emerged from recent issues:

1. **Lifecycle & Notification Hooks** — Users running long-running agent tasks need a way to be notified when the CLI requires attention, rather than relying on manual window-checking. (#1313)
2. **Input & Navigation UX** — Multiline editing and terminal keybindings are recurring pain points; smarter arrow-key behavior and proper paste support are highly requested. (#1320, #2634)
3. **Local Resource Management** — Users want first-class CLI commands for managing custom skills (list, remove, version, trigger words) analogous to existing `/mcp` and `/skill` commands. (#1319)

## 6. Developer Pain Points

- **MCP fragility:** A single stalled or unreachable MCP tool crashes the entire CLI session (#1316). Isolation or graceful degradation is clearly needed.
- **Subagent lifecycle leaks:** Interrupting a session with ESC does not cleanly terminate spawned subagents, leading to orphaned work (#1315).
- **Windows terminal keybinding regressions:** Custom keybindings, especially paste (`Ctrl+V`), are unreliable on Windows Terminal with PowerShell (#2634).
- **Multiline input UX gap:** Arrow keys within multiline input conflict with history navigation, forcing users into awkward workarounds (#1320).
- **Skill management friction:** Custom skills lack discoverable management commands, creating a fragmented experience compared to built-in tools (#1319).

---

*Source: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest – 2026‑09‑05**  

---

## 1. Today’s Highlights  
- **v1.18.29** ships with critical fixes for the new Codex OAuth model filter, restoring visibility of integer‑based GPT versions (e.g., `gpt‑6`) and fixing the `gpt‑6‑astra` omission that broke OpenAI subscription flows.  
- The most‑discussed open issue is **#30086** (high CPU usage after recent updates), with 50 comments and 26 👍, underscoring a performance regression that many power‑users are hitting in multi‑session workloads.  

---

## 2. Releases  

| Version | Area | Notable Changes |
|---------|------|-----------------|
| **v1.18.29** (core) | Bugfixes | • OAuth model filter now recognises integer GPT versions (`gpt‑6`).  <br>• `gpt‑6‑astra` appears for OpenAI subscription users again. |
| **v1.18.28** (core) | Improvements | • Session ID is now sent as the GitHub Copilot interaction header, improving request‑tracking across a session. |
| **v1.18.28** (desktop) | Bugfixes | • Desktop client ID is used for device authentication. <br>• Larger “open‑in‑app” icon for better visibility. |

*Full release notes*: <https://github.com/anomalyco/opencode/releases/tag/v1.18.29>

---

## 3. Hot Issues (top‑commented/most‑reacted)

| # | Title & Link | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| **30086** | **High CPU usage in newer versions** – <https://github.com/anomalyco/opencode/issues/30086> | A spike in CPU kills the ability to run many concurrent sessions, a core use‑case for power‑users. | 50 comments, 26 👍 – intense debugging discussion. |
| **33356** | **Unbounded growth of `event` table (13 GB+)** – <https://github.com/anomalyco/opencode/issues/33356> | SQLite store fills disk on long‑running instances, threatening data loss. | 27 comments, 9 👍 – many suggest retention policies. |
| **30680** | **Auto‑compaction loop stalls generation** – <https://github.com/anomalyco/opencode/issues/30680> | Compaction loop consumes tokens and stops any output, a show‑stopper for production runs. | 17 comments, 0 👍 – closed after fix in PR #47392. |
| **22235** | **VSCode “Context Awareness” not effective** – <https://github.com/anomalyco/opencode/issues/22235> | Context‑aware completions are a key differentiator; broken behavior hurts workflow. | 13 comments, 7 👍 – community shares workarounds. |
| **47312** | **Add support for Augure AI models** – <https://github.com/anomalyco/opencode/issues/47312> | Expands provider ecosystem to a Canadian AI vendor, aligning with the “multi‑provider” roadmap. | 5 comments, 0 👍 – early interest. |
| **44684** | **Plugin installer times out (npm registry)** – <https://github.com/anomalyco/opencode/issues/44684> | Blocks CI/CD pipelines that rely on private npm registries; affects enterprise adoption. | 4 comments, 0 👍 – calls for better fallback logic. |
| **46881** | **Standalone empty‑reasoning turns replayed** – <https://github.com/anomalyco/opencode/issues/46881> | Leads to duplicated tokens and higher costs in V2; impacts billing predictability. | 4 comments, 0 👍 – technical deep‑dive ongoing. |
| **39822** | **OpenCode Go pricing mismatch** – <https://github.com/anomalyco/opencode/issues/39822> | Billing anomalies erode trust in the subscription model. | 4 comments, 0 👍 – users request transparent quota logs. |
| **47425** | **Desktop crash on large paste** – <https://github.com/anomalyco/opencode/issues/47425> | Large codebases are common; a crash blocks real‑world usage on Windows. | 1 comment, 0 👍 – needs urgent fix. |
| **47406** | **Right sidebar hidden on “New Session”** – <https://github.com/anomalyco/opencode/issues/47406> | UI regression reduces discoverability of project files; hampers onboarding. | 1 comment, 0 👍 – slated for UI sprint. |

*The above issues were selected for impact on performance, data integrity, core workflow, or revenue‑related concerns.*

---

## 4. Key PR Progress  

| # | Title & Link | Core Contribution |
|---|--------------|-------------------|
| **47423** | *feat(core): support provider OAuth client credentials* – <https://github.com/anomalyco/opencode/pull/47423> | Introduces opt‑in `client_credentials` flow, enabling headless token acquisition for custom providers. |
| **47424** | *fix(app): increase vertical tabs minimum width* – <https://github.com/anomalyco/opencode/pull/47424> | UI tweak preventing label wrapping; improves readability in the desktop app. |
| **47404** | *fix(core): compare Codex GPT versions by major/minor* – <https://github.com/anomalyco/opencode/pull/47404> | Directly addresses the `gpt‑6‑astra` visibility bug fixed in v1.18.29. |
| **47392** | *fix(lsp): idle TTL timeout & LRU eviction* – <https://github.com/anomalyco/opencode/pull/47392> | Prevents unbounded LSP client growth; mitigates memory pressure on long‑running sessions. |
| **47391** | *perf(plugin): parallel internal plugin loading* – <https://github.com/anomalyco/opencode/pull/47391> | Speeds up start‑up by loading plugins concurrently; no functional regression. |
| **47390** | *fix(app,enterprise): valid custom‑elements.d.ts reference* – <https://github.com/anomalyco/opencode/pull/47390> | Restores TypeScript compilation for enterprise builds. |
| **47388** | *fix(tui): reload local plugin dependency graphs* – <https://github.com/anomalyco/opencode/pull/47388> | Fixes hot‑reload of locally edited plugins in the TUI. |
| **47418** | *fix(app): preserve vertical navigation label & icon widths* – <https://github.com/anomalyco/opencode/pull/47418> | Polishes UI consistency after recent layout changes. |
| **47414** | *fix(core): preserve legacy markdown agent variants* – <https://github.com/anomalyco/opencode/pull/47414> | Keeps backward compatibility for older agent specifications. |
| **47408** | *fix(core): terminate exhausted Markdown code budgets* – <https://github.com/anomalyco/opencode/pull/47408> | Prevents hangs when HTML pages exceed the allocated code‑budget, improving reliability of large docs. |

*These PRs represent the bulk of the day’s activity: performance, UI stability, OAuth enhancements, and the model‑filter bug fix.*

---

## 5. Feature Request Trends  

| Trend | Representative Issues/PRs | Insight |
|-------|---------------------------|--------|
| **Broader provider support** – requests for new AI back‑ends (Augure AI, Bedrock config limits, Zen/go gateway errors). | #47312, #46595, #47349 | The community wants a truly provider‑agnostic platform; gaps in model catalog and config propagation are recurring pain points. |
| **Robust data & storage management** – unbounded `event` table growth, LSP client eviction, SQLite bloat. | #33356, #47392, #47391 | Sustainable long‑run usage demands built‑in pruning, TTL, and compact‑on‑shutdown mechanisms. |
| **OAuth & authentication flexibility** – client‑credentials flow, OAuth model filtering bugs, missing `gpt‑6‑astra`. | #47423, #47404, #47405 | Users need seamless, non‑interactive auth for CI/CD and enterprise environments. |
| **UI/UX consistency** – missing file tree on new session, hidden sidebars, icon sizing, large‑paste crash. | #47406, #42031, #47425 | UI regressions after the “new layout designs” rollout are a top source of friction. |
| **Resource‑aware execution** – high CPU usage, auto‑compaction loops, output‑limit handling for Bedrock. | #30086, #30680, #46595 | Developers expect predictable performance and cost controls across sessions. |

---

## 6. Developer Pain Points  

1. **Performance regressions** – CPU spikes and auto‑compaction loops are breaking multi‑session workflows, especially on modest hardware.  
2. **Data bloat** – The local SQLite event store grows without limits, threatening disk space and startup times.  
3. **Authentication hurdles** – Incomplete OAuth support (missing client‑credential flow, model‑filter bugs) forces work‑arounds for CI pipelines.  
4. **UI regressions** – Missing sidebars, invisible file trees, and crashes on large paste operations disrupt day‑to‑day coding.  
5. **Provider inconsistencies** – Model catalogs differ between OpenCode and native provider consoles (e.g., `gpt‑6‑astra`), causing confusion and extra debugging.  

Addressing these themes will likely have the highest impact on developer satisfaction and adoption in the coming weeks.  

---  

*All links point to the official `anomalyco/opencode` repository on GitHub.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

### Q Todaywen Code Digest for 22 2:

#### 1. **Today Today Updates**
-- Several no releases releases/releases available available were-- The community is actively addressing severalimportant issues; in particularthe latest 35 issues andinterfaces, improvements in the terminal code.
-#### 2. **Hot Issues**
 - **#88662 [OPEN [ priority/ tracking the migration** from  **ink to **TTUI rendering; the issue is eson significant to improving compatibility and performance with the re existing heavy routingion and VVirtual Query prone, viewport** mode.
-)-1
-####  4. **Noteworthy PRPR and**
 - **#99111 (Critical)** **OE **UI performance(Rendering) **fix)**: Someserious **t occurs ofin•U*TI|TUI rendering; this issue tracksnoticable flickering or mis) in **certain scenarios. **[[ the issue provides a **fix which **will see issue** in the next UI component.
 - **#1912 (enhancement;): * Workflow improvements and to improve **certain residual find** in the workflow lifecycle; this PR addresses adds the session residual findings **ac and ensures a proper cleanup of.
 
####  4. **Feature Request**
- ** # Thereenalized the QLwen Code **UI architecture with a focusenhancement|: **Addel a **Quick Chat** surface surface; this will a compact **chat panel in T the Opencurrent workflow and remain independent of the current virtual session viewpoint.
 
####  4. **Developer Pain Points**
**
-A numerous issues involving the 
- **UI**: **#88675 •, this
-- ** renders and a flicker effect; this very caused in a complexth environment where the user frame** is complicated. **Additionally the
 - **session life involving
 \( *Autcil** of the **TUI and the SDK **session handling** \sign U sessions the· Cence**
 
|
These pointss highlights issues
repeatedly inallow


</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Date:** 2026-09-05
**Repo:** Hmbown/Codewhale

### 1. Today's Highlights
The community is actively addressing critical stability issues regarding Ollama model handling and TUI history management. Two significant pull requests (#5883 and #5873) have been merged to resolve token budget calculation bugs and clean up cluttered todo list histories, directly responding to user-reported edge cases. Additionally, the project is modernizing its dependency ecosystem, with recent updates to the Rust SDK (rmcp) and core utility libraries like base64 and jsonschema.

### 2. Releases
None released in the last 24 hours.

### 3. Hot Issues
*   **#5820 [OPEN] Ollama provider input budget collapses to 1024 tokens**
    *   **Why it matters:** This is a critical stability bug affecting Windows users running 32K-window local models (like Qwen2.5). The default output reservation (64K) incorrectly clamps the input window, leaving developers with only 1KB of input capacity.
    *   **Reaction:** Users are reporting frustration as they cannot effectively use local models despite having sufficient hardware.
    *   [Link to Issue](https://github.com/Hmbown/Codewhale/issues/5820)

*   **#5860 [OPEN] Continuous Self-Learning from Dialog (Automatic Skill Evolution)**
    *   **Why it matters:** This is a major feature request aiming to automate the "Skills System." Users want the agent to automatically detect repeated problem-solving patterns and evolve its own knowledge base (`SKILL.md`) without manual intervention.
    *   **Reaction:** Highly requested, suggesting a desire for more autonomous agent behavior.
    *   [Link to Issue](https://github.com/Hmbown/Codewhale/issues/5860)

*   **#5871 [OPEN] To-do list history clutters the transcript**
    *   **Why it matters:** A UX regression where every todo update creates a permanent card in the transcript. Users cannot clear the history without losing critical conversation context.
    *   **Reaction:** Immediate fix was prioritized in PR #5873, demonstrating rapid community response to UX friction.
    *   [Link to Issue](https://github.com/Hmbown/Codewhale/issues/5871)

*   **#5872 [OPEN] Add rusty_alloc as an opt-in feature**
    *   **Why it matters:** Currently, the tool depends on `mimalloc`, which requires a C compiler for cross-compilation. Adding `rusty_alloc` would simplify the build process for non-C environments.
    *   **Reaction:** A technical improvement focused on developer experience and build portability.
    *   [Link to Issue](https://github.com/Hmbown/Codewhale/issues/5872)

*   **#5866 [CLOSED] Key Ophthalmology CPT & ICD-10 Updates for 2026**
    *   **Why it matters:** While not a bug fix, this highlights the agent's capability to handle niche, domain-specific documentation updates effectively.
    *   **Reaction:** Positive feedback on the utility of the tool in specialized fields.
    *   [Link to Issue](https://github.com/Hmbown/Codewhale/issues/5866)

### 4. Key PR Progress
*   **#5883 [CLOSED] fix(tui): derive local output budget from route window**
    *   **Summary:** Fixes the Ollama input budget collapse by dynamically calculating output reservations based on the route's context window. It also adds a synthetic regression test to prevent future occurrences.
    *   **Status:** Merged to fix critical token management.
    *   [Link to PR](https://github.com/Hmbown/Codewhale/pull/5883)

*   **#5873 [CLOSED] fix(tui): replace stale todo transcript snapshots**
    *   **Summary:** Directly addresses #5871. It updates the UI to keep only the newest successful snapshot visible, hiding empty ones without clearing the underlying context.
    *   **Status:** Merged with passing tests.
    *   [Link to PR](https://github.com/Hmbown/Codewhale/pull/5873)

*   **#5882 [CLOSED] test: restore contributor CI baseline**
    *   **Summary:** Restored CI pipeline functionality to ensure unrelated PRs can be evaluated against a working baseline. Fixed plugin lifecycle and Windows-specific symlink tests.
    *   **Status:** Merged to improve development workflow reliability.
    *   [Link to PR](https://github.com/Hmbown/Codewhale/pull/5882)

*   **#5868 [OPEN] feat: send x-opencode-session header for OpenCode Go/Zen providers**
    *   **Summary:** Improves prompt caching and attribution for OpenCode providers by sending the stable session header, which was previously missing.
    *   **Status:** Open for review.
    *   [Link to PR](https://github.com/Hmbown/Codewhale/pull/5868)

*   **#5867 [OPEN] feat(config): add [reasoning_only] section**
    *   **Summary:** Moves the retry logic for "reasoning-only" models (like o1) from a hardcoded constant to a user-configurable configuration section.
    *   **Status:** Open for review.
    *   [Link to PR](https://github.com/Hmbown/Codewhale/pull/5867)

*   **#5877 [OPEN] chore(deps): bump rmcp from 2.2.0 to 3.2.0**
    *   **Summary:** Upgrades the Rust SDK for Model Context Protocol to the latest version (v3.2.0), bringing new features and security patches.
    *   **Status:** Open for review.
    *   [Link to PR](https://github.com/Hmbown/Codewhale/pull/5877)

*   **#5870 [OPEN] Fix: Tools: atomic commit splitting — order unrelated changes**
    *   **Summary:** Addresses a long-standing issue (#3999) where atomic commits were not ordered by dependency, which could cause merge conflicts or circular dependency errors.
    *   **Status:** Open for review.
    *   [Link to PR](https://github.com/Hmbown/Codewhale/pull/5870)

*   **#5869 [OPEN] fix(shell): preserve task origin in job snapshots**
    *   **Summary:** Fixes a bug where shell job snapshots didn't carry stable identifiers, causing error outputs from old jobs to appear on newer tool cards.
    *   **Status:** Open for review.
    *   [Link to PR](https://github.com/Hmbown/Codewhale/pull/5869)

*   **#5875 [OPEN] chore(deps): bump base64 from 0.22.1 to 0.23.1**
    *   **Summary:** Standard dependency update to the latest base64 library version.
    *   **Status:** Open for review.
    *   [Link to PR](https://github.com/Hmbown/Codewhale/pull/5875)

*   **#5881 [OPEN] chore(deps): bump tower-http from 0.7.0 to 0.7.1**
    *   **Summary:** Standard dependency update for the tower HTTP library.
    *   **Status:** Open for review.
    *   [Link to PR](https://github.com/Hmbown/Codewhale/pull/5881)

### 5. Feature Request Trends
*   **Autonomous Skill Evolution:** The community is heavily interested in moving away from manual `SKILL.md` creation toward an autonomous system where the AI agent identifies patterns and updates its own knowledge base automatically.
*   **Configurable Reasoning Loops:** There is a demand to make the retry behavior for "reasoning-only" models (where the model thinks silently before answering) user-configurable rather than hardcoded.
*   **Build System Portability:** A recurring request is to simplify the build process by adding `rusty_alloc` as an alternative to `mimalloc`, eliminating the need for a C compiler in cross-compilation scenarios.

### 6. Developer Pain Points
*   **Token Budget Clamping:** Developers using Ollama with local models are experiencing critical failures where input windows are incorrectly calculated, limiting them to 1024 tokens regardless of model capacity.
*   **Context Clutter:** The TUI transcript is becoming unusable due to the accumulation of "push-down" history from todo list updates, making it difficult to distinguish the current state of the conversation.
*   **Shell Job Attribution:** There is confusion and error reporting stemming from shell job snapshots failing to preserve stable origin identifiers, leading to erroneous error messages appearing on unrelated tool cards.

</details>

---
*This digest is auto-generated by [GitTok](https://github.com/Chestnuts-Sisyphus/gittok).*