# OpenClaw Ecosystem Digest 2026-07-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-22 01:43 UTC

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



# OpenClaw Project Digest — 2026-07-22

## 1. Today's Overview
OpenClaw is operating at exceptional velocity on 2026-07-22, with **500 issues** and **500 pull requests** updated in the last 24 hours. Maintainers have demonstrated strong closure throughput, resolving **106 issues** and merging/closing **163 PRs**, indicating a highly responsive development cycle despite zero new releases today. Activity is heavily weighted toward core gateway reliability, session state integrity, security hardening, and extensive localization governance. The project remains robust, with a clear strategic focus on securing agent tool access, improving sub-agent routing, and stabilizing local LLM integrations.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress
The team advanced significant work across security, UI, integrations, and infrastructure. Notable merged/closed PRs and open advances include:

*   **Security & Policy Enforcement:**
    *   [#112457](https://github.com/openclaw/openclaw/pull/112457) **Merged:** Enforced Claude CLI cron tool policies via backend-owned MCP allowlists, isolating restricted runs from user hooks/plugins.
    *   [#112288](https://github.com/openclaw/openclaw/pull/112288) **Open:** Closed a Host-header Origin spoof bypass in the gateway browser origin check.
    *   [#108452](https://github.com/openclaw/openclaw/pull/108452) **Open:** Fixed Codex native tool surface exposure when tools are explicitly disabled.
*   **Gateway & Session Stability:**
    *   [#112467](https://github.com/openclaw/openclaw/pull/112467) **Merged:** Fixed Discord replies failing after config/secret reloads due to stale startup config retention.
    *   [#112331](https://github.com/openclaw/openclaw/pull/112331) **Open:** Kept model catalog coherent across Gateway config reloads.
    *   [#112227](https://github.com/openclaw/openclaw/pull/112227) **Open:** Fixed concurrent session group mutations in the Control UI that caused silent group loss.
    *   [#105806](https://github.com/openclaw/openclaw/pull/105806) **Open:** Reclaimed terminal-phase reply operations in stuck-session recovery.
*   **Integrations & Channels:**
    *   [#110803](https://github.com/openclaw/openclaw/pull/110803) **Open:** Fixed Zalo polling transport message-loss window.
    *   [#111404](https://github.com/openclaw/openclaw/pull/111404) **Open:** Fixed Telegram delivery failures when model-generated messages incorrectly populate location objects.
    *   [#105884](https://github.com/openclaw/openclaw/pull/105884) **Open:** Applied request policies to Vydra media generation downloads.
    *   [#106701](https://github.com/openclaw/openclaw/pull/106701) **Open:** Fixed unauthorized errors on generated image previews in session workspace.
*   **Infrastructure & ClawHub:**
    *   [#112412](https://github.com/openclaw/openclaw/pull/112412) **Merged:** Enabled discovery of models from live provider catalogs.
    *   [#102228](https://github.com/openclaw/openclaw/pull/102228) **Open:** Advanced ClawHub package installation for new Claw agents.
    *   [#111543](https://github.com/openclaw/openclaw/pull/111543) **Open:** Consolidated localization governance and inventory.
    *   [#112452](https://github.com/openclaw/openclaw/pull/112452) **Open:** Fixed orphaned `gog` processes on Gmail watcher shutdown.

## 4. Community Hot Topics
Community discussion is dominated by security architecture, local LLM stability, and session state reliability.

*   **[Issue #10659](https://github.com/openclaw/openclaw/issues/10659) — Masked Secrets System** (15 comments, 4 👍)
    *   *Status:* Open, Diamond Lobster rating.
    *   *Topic:* Users strongly request a mechanism

---

## Cross-Ecosystem Comparison



# Cross-Project Comparison Report: Personal AI Assistant & Agent Open-Source Ecosystem
**Reporting Date:** 2026-07-22  
**Data Source:** Community digest summaries for 12 tracked repositories

---

## 1. Ecosystem Overview
The personal AI agent open-source landscape is entering a high-throughput stabilization phase. Projects are shifting from feature expansion toward session durability, security-by-default execution, and multi-channel reliability. OpenClaw, CoPaw, and Hermes dominate daily activity volume, indicating mature contributor bases and complex production workloads. Meanwhile, lighter-weight frameworks like NanoBot, PicoClaw, and LobsterAI are consolidating around sandboxing, provider parity, and UX polish. The consensus across maintainers and users is clear: autonomous agents must handle long-running loops, credential isolation, and silent failure modes without degrading session state.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Composite Health Score* |
|---------|--------------|-----------|----------------|--------------------------|
| OpenClaw | 500 | 500 | None | 9.4/10 |
| CoPaw / QwenPaw | 42 | 50 | `v2.0.1-beta.1` published | 9.1/10 |
| Hermes Agent | 50 | 50 | None (hotfix expected) | 8.3/10 |
| NanoBot | 11 | 33 | None | 8.5/10 |
| LobsterAI | 1 | 10 | None | 7.8/10 |
| PicoClaw | 8 | 8 | None | 7.6/10 |
| NanoClaw | 1 | 12 | None | 7.4/10 |
| Moltis | 1 | 1 | None | 6.2/10 |
| NullClaw | 0 | 0 | None | Dormant |
| TinyClaw | 0 | 0 | None | Dormant |
| ZeptoClaw | 0 | 0 | None | Dormant |
| IronClaw / ZeroClaw | — | — | — | Data unavailable |

*\*Composite Health Score derived from activity velocity, closure/merge throughput, regression density, and release cadence per digest.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale & Throughput:** OpenClaw's 500 issues / 500 PRs updated in 24 hours, with 106 issues resolved and 163 PRs merged/closed, exceeds the next tier (CoPaw, Hermes) by roughly 10x. This implies an order-of-magnitude larger contributor pool and production deployment base.
- **Security-First Gateway Design:** Backend-owned MCP allowlists, Host-header spoof bypass patches, and explicit tool surface isolation position Open

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>



# NanoBot Project Digest
**Date:** 2026-07-22  
**Repository:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

## 1. Today's Overview
NanoBot is experiencing an intense development sprint, with **33 PRs and 11 issues updated** in the last 24 hours. While no new official release has been published yet, the volume of merged fixes and closed issues suggests the team is stabilizing the codebase ahead of an upcoming version. Activity is heavily focused on **core agent reliability** (tool-result protocol repair, session management), **security hardening** (workspace binding, API key handling, process lifecycle), and **provider expansion** (ModelScope, Qwen thinking styles, Codex fast mode). The project health indicator is strong, showing rapid response to critical bugs and a clear push toward safer autonomous execution.

## 2. Releases
*No new releases were published during this reporting period.*

## 3. Project Progress
**Merged / Closed PRs (Reporting Period)**

*   **Core Agent & Stability:**
    *   [#4663](https://github.com/HKUDS/nanobot/pull/4663) **[Merged] Fix: Quarantine invalid tool results.** Resolves the tool-result protocol repair logic, preventing missing, duplicate, or unknown tool IDs from corrupting session history. Fixes #4058.
    *   [#4811](https://github.com/HKUDS/nanobot/pull/4811) **[Merged] Fix: Log suppressed prepare_call exceptions.** Replaces silent swallowing of tool preparation errors with operator-visible logging.
    *   [#4952](https://github.com/HKUDS/nanobot/pull/4952) **[Merged] Fix: Sanitize UTF-16 surrogates at provider boundary.** Prevents intermittent `UnicodeEncodeError` crashes when processing emoji-heavy content.
    *   [#4983](https://github.com/HKUDS/nanobot/pull/4983) **[Merged] Fix: Coerce cron schedule/state ms fields.** Resolves `TypeError` in job scheduling caused by string/int mismatches in `jobs.json`.
    *   [#4984](https://github.com/HKUDS/nanobot/pull/4984) **[Merged] Fix: Atomic config writes.** Prevents `config.json` corruption on crash during save operations.
    *   [#4989](https://github.com/HKUDS/nanobot/pull/4989) **[Merged] Fix: Transcription env-var interpolation.** Resolves 401 Unauthorized errors in Groq transcription by applying env-var resolution to transcription credentials.

*   **Providers & Features:**
    *   [#4965](https://github.com/HKUDS/nanobot/pull/4965) **[Merged] Feat: ModelScope provider support.** Adds built-in support for ModelScope's OpenAI-compatible inference endpoint.
    *   [#5019](https://github.com/HKUDS/nanobot/pull/5019) **[Merged] Feat: Codex fast mode support.** Documents and implements `service_tier: "priority"` for OpenAI Codex providers.
    *   [#5020](https://github.com/HKUDS/nanobot/pull/5020) **[Merged] Feat: WebUI skill reference highlighting.** Visually distinguishes valid `$skillname` references in sent messages.

*   **Security Documentation:**
    *   [#5010](https://github.com/HKUDS/nanobot/pull/5010) **[Merged] Docs: Recommend env-var references for API keys.** Updates `SECURITY.md` to clarify that config files should store placeholders, not plaintext secrets.

**Actively Advancing Open PRs:**
*   [#4866](https://github.com/HKUDS/nanobot/pull/4866) **[Open] Feat: Bind model presets to sessions.** Allows per-session model overrides persisted in metadata.
*   [#5022](https://github.com/HKUDS/nanobot/pull/5022) **[Open] Feat: Add `/cancel-goal` command.** Addresses sustained-goal loops where user stop requests are overridden by system goal prompts.
*   [#4987](https://github.com/HKUDS/nanobot/pull/4987) **[Open, P0] Fix: Bind workspace checks to opened files.** Implements `O_NOFOLLOW` and `fstat()` validation to prevent symlink/workspace escape attacks. Currently marked with conflicts.
*   [#4941](https://github.com/HKUDS/nanobot/pull/4941) **[Open] Fix: Fall back to legacy session paths.** Restores metadata visibility for sessions using older file naming conventions.

## 4. Community Hot Topics
*   **[#4867](https://github.com/HKUDS/nanobot/issues/4867) [Closed] Preserve exact prompt prefix for Ollama caching (22 comments).**  
    The most discussed issue of the period. Users report that Nanobot adds ~60 seconds of latency per turn with Ollama because prompt prefixes change, defeating local model caching.  
    *Underlying Need:* Local-first users require deterministic prompt formatting to leverage KV cache and achieve real-time responsiveness with constrained VRAM.
*   **[#4864](https://github.com/HKUDS/nanobot/issues/4864) [Open] Endless loop for `<function=complete_goal>` (4 comments, 1 👍).**  
    Reports a loop where `complete_goal` fails because the gateway parses the recap parameter as a bare string instead of JSON.  
    *Underlying Need:* Autonomous agents need robust serialization handling to prevent infinite loops in tool execution.
*   **[#4058](https://github.com/HKUDS/nanobot/issues/4058) [Closed] Tool-result protocol repair (2 comments).**  
    A long-standing durability invariant issue regarding `tool_call_id` states. Now addressed by merged PR [#4663](https://github.com/HKUDS/nanobot/pull/4663).
*   **[#4803](https://github.com/HKUDS/nanobot/issues/4803) [Closed] Security: API keys stored as plaintext (1 comment).**  
    Highlights that `ProviderConfig.api_key` lacks `exclude=True` in model dumps. Likely resolved alongside security documentation updates.

## 5. Bugs & Stability
*Bugs ranked by severity,

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>



# Hermes Agent Project Digest — 2026-07-22

## 1. Today's Overview
Hermes Agent is in a period of intense stabilization and feature maturation, with **50 issues** and **50 pull requests** updated in the last 24 hours. No new official release was published today, but the velocity suggests an imminent patch cycle to address critical regressions introduced in recent versions (particularly v0.19.0). Development focus is heavily weighted toward **session state integrity**, **gateway reliability**, and **cross-platform rendering fixes**. The project health is strong operationally, though the density of P1/P2 bugs related to data loss, deadlocks, and compression loops indicates that the codebase is undergoing aggressive structural changes that require careful regression testing.

## 2. Releases
*   **No new releases today.**
*   **Watch:** Several critical fixes (compression death spirals, session lease leaks, Windows `state.db` corruption, renderer OOM) are currently in PRs. These will likely be bundled into an urgent `v0.19.x` or `v0.20.0` hotfix release.

## 3. Project Progress
### Merged / Closed Today
*   **[PR #69019](https://github.com/NousResearch/hermes-agent/pull/69019)** — Fixed desktop long-session transcript drift where idle waits caused the view to revert to old turns.
*   **[Issue #38786](https://github.com/NousResearch/hermes-agent/issues/38786)** — Resolved: Hermes Desktop was incorrectly blocking valid local image generation outputs on Windows.
*   **[Issue #54675](https://github.com/NousResearch/hermes-agent/issues/54675)** — Resolved: Security fix for multiplexed gateway where secondary profiles were bypassing per-profile secret scopes and using the default profile's bot tokens.

### Advanced Features & Fixes
*   **Compression Hardening:** [PR #68899](https://github.com/NousResearch/hermes-agent/pull/68899) prevents "stale-budget retry loops" that caused compression death spirals.
*   **Theme SDK:** [PR #68857](https://github.com/NousResearch/hermes-agent/pull/68857) introduces a cross-surface theme engine (CLI, TUI, Desktop) with live application.
*   **Slack Context:** [PR #69028](https://github.com/NousResearch/hermes-agent/pull/69028) improves Slack operator channels by keeping follow-up messages grounded in thread context rather than flat replies.
*   **Codex Gating:** [PR #69022](https://github.com/NousResearch/hermes-agent/pull/69022) stops synthesizing account-ineligible `gpt-5.6-*-pro` variants in Codex catalogs.
*   **Systemd Recovery:** [PR #69029](https://github.com/NousResearch/hermes-agent/pull/69029) ensures remote backends restart correctly after `hermes update` kills stale processes.
*   **Renderer OOM Fix:** [PR #69030](https://github.com/NousResearch/hermes-agent/pull/69030) stops session heartbeat churn from crashing the desktop renderer.
*   **Thai Rendering Fix:** [PR #69024](https://github.com/NousResearch/hermes-agent/pull/69024) clears combining graphemes before redraw, fixing dropped/doubled Thai marks in the TUI.

## 4. Community Hot Topics
*   **[Issue #47349](https://github.com/NousResearch/hermes-agent/issues/47349)** — **Configurable Memory Backends** (13 comments, 1 👍)
    *   *Analysis:* Users strongly desire the ability to disable hardcoded `MEMORY.md`/`USER.md` injection and use external stores like Honcho or fact stores. This reflects a need for privacy control and modular memory architectures beyond the default frozen snapshot.
*   **[Issue #25083](https://github.com/NousResearch/hermes-agent/issues/25083)** — **Immutable/Protected Skills** (7 comments)
    *   *Analysis:* A safety-focused request to prevent the agent from modifying governance rules or domain principles via `skill_manage`. This signals mature usage patterns where users treat skills as policy constraints, not just tools.
*   **[Issue #68915](https://github.com/NousResearch/hermes-agent/issues/68915)** — **Worker Deadlocks on Backgrounded Servers** (5 comments, P1)
    *   *Analysis:* Developers using Hermes to start dev servers (`node server.js &`) hit permanent Python-level deadlocks. This is a critical blocker for engineering workflows.
*   **[Issue #64900](https://github.com/NousResearch/hermes-agent/issues/64900)** — **Plugin Extensible `send_message`** (5 comments)
    *   *Analysis:* Platform maintainers need to inject custom schema fields (e.g., voice selection) without editing core tool files. This is a scalability request for the plugin ecosystem.

## 5. Bugs & Stability
Ranked by severity based on impact and labels:

### P1 — Critical / Data Loss / Deadlocks
*   **[Issue #68474](https://github.com/NousResearch/hermes-agent/issues/68474)** — **Windows Desktop Update Zeroes `state.db`**: 95MB of session data replaced with null bytes during v0.19.0 update. *Requires immediate patch.*
*   **[Issue #68915](https://github.com/NousResearch/hermes-agent/issues/68915)** — **Worker Deadlock**: Agent backgrounds a process via shell `&`, causing unrecoverable worker hang.
*   **[PR #68899](https://github.com/NousResearch/hermes-agent/pull/68899)** — Addresses **Compression Death Spirals** caused by stale budget retries in long tool-heavy sessions.

### P2 — High Impact / Stability
*   **[Issue #68920](https://github.com/NousResearch/hermes-agent

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>



# PicoClaw Project Digest
**Date:** 2026-07-22  
**Repository:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

## 1. Today's Overview
PicoClaw demonstrates high development momentum on 2026-07-22, with **8 issues** and **8 pull requests** updated in the last 24 hours. The project is in an active stabilization phase following recent model/provider updates, with a significant portion of PR activity focused on merging reliability fixes, security improvements, and OAuth resilience patches. No new release was published today, suggesting the team is consolidating changes before the next tag. Community engagement remains strong, with multiple contributors addressing channel-specific bugs, crypto-dependency modernization, and provider compatibility regressions.

## 2. Releases
**No new releases today.**

## 3. Project Progress
**Merged/Closed Pull Requests:**
*   **[PR #3282](https://github.com/sipeed/picoclaw/pull/3282)** – **Closed/Merged:** Added `system.exec.v1` node with policy gating. This introduces durable, sandboxed command execution with strict environment and timeout limits, significantly enhancing safety for system-level agent operations.
*   **[PR #303](https://github.com/sipeed/picoclaw/pull/303)** – **Closed/Merged:** Made bot greeting names configurable via the `bot_name` setting. Fixes hardcoded "PicoClaw" text in Telegram/DingTalk greetings, aligning with user identity customization needs.
*   **[PR #3233](https://github.com/sipeed/picoclaw/pull/3233)** – **Closed/Merged:** Resolved backward compatibility issues stemming from PR #3222.

**Open PRs Advancing Features:**
*   **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** – Adds configurable default fallback chains for models, persisted through the backend API and web UI.
*   **[PR #3228](https://github.com/sipeed/picoclaw/pull/3228)** – Implements Anthropic `SystemParts` with `cache_control`, enabling prompt caching for system messages.
*   **[PR #3256](https://github.com/sipeed/picoclaw/pull/3256)** – Fixes Feishu audio/video delivery to use native message types instead of generic file uploads.
*   **[PR #3280](https://github.com/sipeed/picoclaw/pull/3280)** – Hardens browser OAuth login to survive real-world callback conditions (headless/remote setups).
*   **[PR #3279](https://github.com/sipeed/picoclaw/pull/3279)** – Prevents tool-call format leakage into LLM summaries in the Seahorse provider.

## 4. Community Hot Topics
*   **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)** – **9 comments | 2 👍 | Open/Stale**  
    *Topic:* Replace `libolm` with `vodozemac`.  
    *Analysis:* This is the most discussed open issue. Users recognize `libolm` as unmaintained and insecure. The request to make `libolm` optional at compile time signals a roadmap shift toward modern cryptographic standards, critical for Matrix/Signal interoperability security.
*   **[Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)** – **5 comments | Closed**  
    *Topic:* Volcengine Doubao Seed tool calls leak as raw XML text.  
    *Analysis:* Highlights fragility in provider-specific parsing. Although closed, similar leakage bugs persist in other providers (see #3279), indicating a systemic need for robust tool-call schema normalization.
*   **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** – **4 comments | Open**  
    *Topic:* Matrix sync loop dies permanently after network disruption.  
    *Analysis:* Operational risk for self-hosted users relying on systemd. The lack of reconnection logic breaks availability guarantees, making this a high-priority stability fix.

## 5. Bugs & Stability
**Severity Ranking:**

1.  **Critical/High:**
    *   **[Issue #3274](https://github.com/sipeed/picoclaw/issues/3274)** – **Closed:** Regression on `main` causing `INVALID_ARGUMENT` for Antigravity provider. Root cause identified as `tool_schema_transform "simple"` becoming insufficient. Affects recent builds.
    *   **[Issue #3278](https://github.com/sipeed/picoclaw/issues/3278)** – **Closed:** Antigravity OAuth login blocked by Google due to policy non-compliance. Fix PR [#3280](https://github.com/sipeed/picoclaw/pull/3280) addresses callback resilience.
    *   **[Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)** – **Closed:** Rate limiting fails when no fallback models are configured. Indicates edge-case gaps in provider quota management.
    *   **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** – **Open:** Matrix `/sync` loop lacks reconnection logic. Silent failure mode.

2.  **Medium:**
    *   **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)** – **Open:** Web UI chat input becomes very laggy with long history. Performance bottleneck in frontend rendering.
    *   **[Issue #3255](https://github.com/sipeed/picoclaw/issues/3255)** – **Open:** DingTalk chat list preview shows fixed "PicoClaw" instead of message content. Partial fix exists in PR [#303](https://github.com/sipeed/picoclaw/pull/303) for greetings, but preview title remains broken.
    *   **[Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)** – **Closed:** Volcengine tool call text leakage. Similar fix applied in PR [#3279](https://github.com/sipeed/picoclaw/pull/3279) for Seahorse.

## 6. Feature Requests & Roadmap Signals
*   **Crypto Modernization:** Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) strongly signals a move away from legacy `libolm` toward `vodozemac` for secure matrix communication.
*   **Resilient Fallbacks:** PR [#3200](https://github.com/sipeed/picoclaw/pull/3200) indicates the next version will prioritize configurable, persistent model fallback chains for improved availability.
*   **Security Sandbox:** PR [#3282](https://github.com/sipeed/picoclaw/pull/3282) shows a push toward policy-gated system execution, allowing powerful agent capabilities while enforcing strict safety boundaries.
*   **Provider Fidelity:** PR [#3228](https://github.com/sipeed/picoclaw/pull/3228) targets Anthropic-specific optimizations (caching), suggesting continued investment in provider-specific feature parity.

## 7. User Feedback Summary
Users report high satisfaction with PicoClaw's extensibility but frustration with **hardcoded identity elements** and **provider-specific parsing bugs**. The recurring "PicoClaw" string in DingTalk/Telegram (Issues #3255, #303) breaks custom bot personas. Provider reliability remains a pain point, with tool-call leakage affecting Volcengine and Seahorse, and OAuth flows failing in headless environments. Performance degradation in the Web UI with long histories (#3281) suggests the frontend needs optimization as sessions grow. Overall, the user base is technically active, providing detailed regression reports and clear use cases for security and reliability improvements.

## 8. Backlog Watch
*   **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)** – *High Priority / Stale.* Created June 09. Requires maintainer decision on crypto dependency migration. Risk of security debt if `libolm` remains default.
*   **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** – *Open.* Matrix reconnection logic is missing. Critical for production

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



# NanoClaw Project Digest — 2026-07-22

## 1. Today's Overview
NanoClaw continues to show strong contributor momentum, with **12 PRs updated** in the last 24 hours (9 open, 3 closed/merged) and **1 active issue** revised. No new releases were shipped, suggesting the maintainers are consolidating incremental integrations, stability patches, and documentation before the next versioned cut. Activity is heavily weighted toward channel expansion (LINE, Dial), container/host compatibility hardening, and observability/tooling improvements. Maintainer visibility remains consistent through `[core-team]` and `[follows-guidelines]` labels, indicating an active triage workflow.

## 2. Releases
No new releases were published today. Development effort is currently concentrated at the PR and documentation level rather than versioned delivery.

## 3. Project Progress
Three PRs were closed/merged today:
- **[PR #3095](https://github.com/qwibitai/nanoclaw/pull/3095)** — Rewrites the branch maintenance guide to align with the new registry-branch model, improving contributor onboarding clarity.
- **[PR #3114](https://github.com/qwibitai/nanoclaw/pull/3114)** — Merges a Langfuse tracing skill, extending distributed observability for agent runs and skill execution.
- **[PR #3116](https://github.com/qwibitai/nanoclaw/pull/3116)** — Sync PR aligning repository/skill state with upstream conventions.

## 4. Community Hot Topics
- **[Issue #3096](https://github.com/qwibitai/nanoclaw/issues/3096)** — *Add `/add-line` skill for LINE Official Account*. Currently the only open issue updated, with 3 comments. The proposal explicitly targets Japan, Taiwan, and Thailand markets where LINE dominates. Underlying need: regional messenger parity and localized communication channels.
- **[PR #3115](https://github.com/qwibitai/nanoclaw/pull/3115)** — *Fix OneCLI legacy Gmail API routes*. Addresses gaps in Gmail policy enforcement across standard, batch, and upload endpoints. Signals enterprise/operator demand for reliable email routing controls.
- **[PR #3111](https://github.com/qwibitai/nanoclaw/pull/3111)** — *Protect URLs from Telegram legacy-Markdown delimiter stripping*. Highlights a recurring pain point with legacy parser behavior dropping messages silently.

## 5. Bugs & Stability
Ranked by operational severity:
1. **WhatsApp approval-flow regression** ([PR #2896](https://github.com/qwibitai/nanoclaw/pull/2896) / [PR #3113](https://github.com/qwibitai/nanoclaw/pull/3113)) — `appendMediaFailureNote` was applied before the pending-question slash-command handler, breaking the approval answer path. A boundary fix and inbound media staging correction are in review.
2. **Telegram silent message loss** ([PR #3111](https://github.com/qwibitai/nanoclaw/pull/3111)) — Bare URLs containing underscores break the legacy Markdown parser, causing permanent message drops after 3 retries with no operator alert.
3. **Gmail traffic bypass** ([PR #3115](https://github.com/qwibitai/nanoclaw/pull/3115)) — Legacy `www.googleapis.com` routes evade OneCLI blocks, weakening policy enforcement.
4. **Container/Host mount failures** ([PR #1530](https://github.com/qwibitai/nanoclaw/pull/1530), [PR #2236](https://github.com/qwibitai/nanoclaw/pull

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



# LobsterAI Project Digest | 2026-07-22

## 1. Today's Overview
LobsterAI demonstrates strong development momentum as of 2026-07-22, with 10 pull requests updated in the last 24 hours—half of which were merged or closed—while issue activity remains light with only one active report. The repository is currently focused on refining core user experience components, particularly around image attachment synchronization, browser annotations, artifact sharing permissions, and silent Windows updates. No new releases were published during this window, suggesting these changes are still being accumulated before the next version drop. Overall, the project exhibits healthy contributor engagement and steady progress across multiple subsystems without major blocking stability concerns.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
The following pull requests were merged or closed today, advancing key features and fixing subsystem bugs:

*   **Cowork & Browser Annotations**
    *   [#2371](https://github.com/netease-youdao/LobsterAI/pull/2371) Enhanced browser annotation functionality: supports elements with style modifications but no comments, displays original-to-new values in prompts/attachment badges, stops webview annotation sessions when drafts are cleared, and preserves screenshot metadata.
*   **Artifacts Sharing & Deployment**
    *   [#2370](https://github.com/netease-youdao/LobsterAI/pull/2370) Unified subscription interception popups for file sharing and local service deployment, adding localized copy and permission checks.
    *   [#2369](https://github.com/netease-youdao/LobsterAI/p

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>



# Moltis Project Digest
**Date:** 2026-07-22  
**Source:** [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

## 1. Today's Overview
Moltis demonstrates steady maintenance activity on 2026-07-22 with no new releases or merged code changes reported. The repository received one update on an ongoing enhancement request regarding model routing and one automated dependency upgrade for the documentation infrastructure. Overall project health appears stable, with community engagement focused on architectural flexibility and routine upkeep rather than critical bug fixes or hot releases.

## 2. Releases
No new releases were published during this reporting period.

## 3. Project Progress
*   **Merged/Closed PRs:** None today.
*   **Advancements:** Development activity was limited to dependency maintenance via PR [#1161](https://github.com/moltis-org/moltis/pull/1161), which updates the Astro documentation framework from 7.0.9 to 7.1.3. No core application features or bug fixes landed in the last 24 hours.

## 4. Community Hot Topics
The most active discussion is centered on Issue [#574](https://github.com/moltis-org/moltis/issues/574) ("Model Routing Per topic"), which was updated today by user @azharkov78. With 5 comments and 1 reaction, this enhancement highlights a community desire for more granular control over model assignment based on conversation topics. This suggests users are seeking dynamic, context-aware routing capabilities to optimize specialization or resource usage across different interaction types.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported or updated in the last 24 hours. The repository remains free of active stability concerns based on today's data.

## 6. Feature Requests & Roadmap Signals
The primary roadmap signal is the pending enhancement in Issue [#574](https://github.com/moltis-org/moltis/issues/574) requesting "Model Routing Per topic." This feature implies a shift toward more intelligent, context-sensitive model selection. If prioritized and implemented, it would likely be a candidate for the next minor or major release, depending on the complexity of integrating topic-based routing logic into the existing architecture.

## 7. User Feedback Summary
User feedback is currently concentrated on the need for specialized model handling tied to specific conversation topics. There are no reported pain points regarding system stability or usability today. However, the continued discussion and reactivation of Issue [#574](https://github.com/moltis-org/moltis/issues/574) indicate that users value architectural flexibility and are actively waiting for native support of topic-based routing.

## 8. Backlog Watch
Issue [#574](https://github.com/moltis-org/moltis/issues/574) has been open since April 6, 2026. Although it was updated today, it remains unresolved and has accumulated significant discussion. Maintainers should review the thread to clarify whether implementation is planned, as the feature addresses a clear and engaged user demand. PR [#1161](https://github.com/moltis-org/moltis/pull/1161) remains open but is a routine automated dependency update with minimal risk.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



# CoPaw / QwenPaw Project Digest
**Date:** 2026-07-22  
**Repository:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

## 1. Today's Overview
The project is experiencing a peak development cycle with **42 issues** and **50 pull requests** updated in the last 24 hours, alongside the release of **v2.0.1-beta.1**. Activity is heavily focused on stabilizing the v2.0 architecture, particularly around Scroll context management, governance/tool descriptor hardening, and fixing regressions introduced during the major version upgrade. Maintainers and contributors are actively addressing critical stability issues such as session data contamination, infinite loops, and performance overhead, indicating a strong push toward a stable v2.0 release. Community engagement remains high, with significant contributor activity on the long-standing open tasks list and rapid response to user-reported bugs.

## 2. Releases
### v2.0.1-beta.1
A new beta release was published today.
*   **Key Changes:**
    *   Fixed absolute import issues in the Tauri entry point ([PR #6234](https://github.com/agentscope-ai/QwenPaw/pull/6234)).
    *   Bumped version to 2.0.1b1 ([PR #6266](https://github.com/agentscope-ai/QwenPaw/pull/6266)).
    *   Memory space fix: Added `OSError` handling in `_saved_tool_refs` (changelog snippet indicates partial visibility).
*   **Migration Notes:** As a beta release, users upgrading from v1.x or earlier v2.0 betas should review known regressions in context handling and session persistence before production use.

## 3. Project Progress
### Merged / Closed PRs
Significant architectural and governance improvements were merged or closed today:
*   **Governance & Tool Registration:**
    *   [PR #6190](https://github.com/agentscope-ai/QwenPaw/pull/6190): Unified built-in/plugin tool registration via `@tool_descriptor` and `PluginApi.register_tool`, simplifying whitelist and default rule management.
    *   [PR #6313](https://github.com/agentscope-ai/QwenPaw/pull/6313): Follow-up to governance, fixing cached tool defaults and validating `tool_type`.
    *   [PR #5546](https://github.com/agentscope-ai/QwenPaw/pull/5546): Generalized governance policy patterns.
    *   [PR #5088](https://github.com/agentscope-ai/QwenPaw/pull/5088): Initial governance & sandbox interface discussion.
*   **Workflow Modes & Subagents:**
    *   [PR #5882](https://github.com/agentscope-ai/QwenPaw/pull/5882): Integrated OMP workflow modes (UltraQA, Ralph, Ultrawork, Autopilot, Team) and extended `spawn_subagent` with whitelisting and batch dispatch

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed).*