# AI CLI 工具社区动态日报 2026-07-26

> 生成时间: 2026-07-26 01:49 UTC | 覆盖工具: 9 个

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

## 横向对比

# AI CLI 工具生态横向对比分析报告
**日期：** 2026-07-26
**分析师：** Agnes-2.0-Flash

## 1. 生态全景
2026年7月下旬，AI CLI 工具生态从“功能可用性”全面转向“稳定性与工程化成熟度”阶段。各主流工具均面临多代理（Agent）编排、上下文资源管理及跨平台兼容性的严峻挑战，Windows 端稳定性成为全行业痛点。同时，开发者对成本透明化、会话状态持久化及 MCP 生态健壮性的要求显著提升，标志着 AI 辅助编程正深入企业级复杂工作流。

## 2. 各工具活跃度对比

| 工具名称 | Issues 更新数 | PR 更新/合并数 | Release 情况 | 核心焦点 |
| :--- | :---: | :---: | :--- | :--- |
| **OpenAI Codex** | ~10+ (高热度) | ~10+ | `rust-v0.146.0-alpha.10.1` | Windows 稳定性、MCP 资源泄漏 |
| **OpenCode** | ~50 | ~20+ | 无 | TUI 性能、桌面端冻结、UI 回归 |
| **Pi** | ~50 | ~19 | `v0.82.1` (支持 Opus 5) | TUI 渲染优化、会话压缩稳定性 |
| **Qwen Code** | ~27 | ~50 | `v0.21.0-nightly` | Web Shell Git 集成、沙盒逻辑修复 |
| **Claude Code** | ~10 | ~5 | 无 | AGENTS.md 标准化、Opus 4.8 配置 Bug |
| **Gemini CLI** | ~10 | ~10 | `v0.54.0-nightly` | 子代理挂起修复、Shell 输出限流 |
| **Copilot CLI** | ~18 | ~2 (已关闭) | 无 | v1.0.74 OOM 回归、会话管理 |
| **Kimi Code** | ~2 | ~4 | 无 | 会话恢复一致性、远程协作需求 |
| **DeepSeek TUI** | ~10 | ~10 | 无 (v0.9.2 开发中) | 多提供商兼容性、macOS Shell 交互 |

## 3. 共同关注的功能方向

*   **多代理（Subagent）可靠性与可观测性**
    *   **涉及工具：** Claude Code, Gemini CLI, OpenCode, Qwen Code, Pi
    *   **具体诉求：** 多个工具报告子代理挂起、状态误报（如假成功）、任务 ID 丢失或无法恢复。社区强烈要求提升多代理工作流的确定性，并增加子代理执行状态的可视化反馈。

*   **上下文管理与成本控制**
    *   **涉及工具：** OpenAI Codex, Gemini CLI, Copilot CLI, DeepSeek TUI, Pi
    *   **具体诉求：** 针对长会话的自动压缩（Compaction/Auto-compaction）机制存在缺陷，导致 Token 浪费或逻辑断裂。用户要求更透明的 Token 用量显示、可配置的截断策略以及防止无效重试的资源保护机制。

*   **MCP (Model Context Protocol) 生态健壮性**
    *   **涉及工具：** OpenAI Codex, Gemini CLI, Claude Code, DeepSeek TUI
    *   **具体诉求：** MCP 服务器进程泄漏、递归限制不足、OAuth 令牌刷新失败等问题频发。社区呼吁建立更严格的 MCP 生命周期管理标准，确保插件与代理间的稳定通信。

*   **跨平台（尤其是 Windows/Linux）稳定性**
    *   **涉及工具：** OpenAI Codex, Claude Code, OpenCode, DeepSeek TUI
    *   **具体诉求：** Windows 端的 GPU 崩溃、进程泄漏、认证失效是最高频的 Bug 来源。Linux Wayland 环境下的浏览器代理失效也需解决，表明跨平台适配仍是重大技术债。

## 4. 差异化定位分析

*   **工程化与深度集成派：OpenAI Codex & GitHub Copilot CLI**
    *   **侧重：** 强调与企业级基础设施（如 Remote Development, WSL, GitHub Actions）的深度集成。
    *   **差异：** Codex 正在重构 Rust 底层以解决 MCP 和性能问题；Copilot CLI 则聚焦于 VS Code 插件的一致性体验，但近期受困于版本回归导致的内存泄漏。

*   **极致体验与开源灵活派：OpenCode & Pi**
    *   **侧重：** OpenCode 提供高度可定制的 TUI 和动态工作流，但 UI/UX 波动较大；Pi 主打多模型聚合（支持 Opus 5, Local LLMs），在 TUI 性能和会话压缩算法上投入巨大，适合喜欢折腾不同模型的用户。

*   **前沿探索与标准化派：Claude Code & Gemini CLI**
    *   **侧重：** Claude Code 主导 `AGENTS.md` 行业标准，试图统一 Agent 配置文件格式；Gemini CLI 则在子代理架构和零依赖沙箱方面进行激进的技术探索，注重 Agent 的智能路由能力。

*   **本地化与特定场景优化派：Qwen Code & Kimi Code & DeepSeek TUI**
    *   **侧重：** Qwen Code 强化 Web Shell 和 Git 工作流，适合前端/全栈开发者；Kimi Code 聚焦长上下文记忆和跨设备协同；DeepSeek TUI 则以轻量、多提供商兼容（Zai/GLM等）为特色，适合需要灵活切换低成本模型的用户。

## 5. 社区热度与成熟度

*   **高热度/快速迭代期：OpenCode, Pi, Qwen Code**
    *   这些工具的 Issues 和 PR 数量庞大，反映出新版本发布频繁，功能变更剧烈，社区正处于快速反馈和磨合阶段。OpenCode 和 Pi 的用户对 UI 细节和性能极其敏感。

*   **成熟期/稳定性攻坚期：Claude Code, OpenAI Codex**
    *   作为行业标杆，其社区关注点已从“有什么功能”转向“功能是否稳定可靠”。大量 Issue 集中在底层 Bug（如 GPU 崩溃、API 配置错误），表明产品已进入精细化运维阶段。

*   **小众/垂直期：Kimi Code, DeepSeek TUI**
    *   社区规模相对较小，但用户粘性高，需求更垂直（如远程控制、特定 macOS 交互）。DeepSeek TUI 正在努力通过修复非原生提供商兼容性问题来扩大用户群。

## 6. 值得关注的趋势信号

1.  **“AGENTS.md” 标准化进程加速：** Claude Code 社区对 `AGENTS.md` 的高关注度表明，行业正试图摆脱各家私有的配置文件格式，走向统一的 Agent 描述标准。这对开发者选择工具时的互操作性有重要参考价值。
2.  **Windows 端成为质量重灾区：** 几乎所有主流工具都在 Windows 端出现严重 Bug（GPU 崩溃、进程泄漏、认证失败）。这提示开发者在 Windows 环境下使用 AI CLI 工具时需格外谨慎，或优先选择 Linux/macOS 环境以获得更稳定的体验。
3.  **从“单轮对话”到“长周期会话管理”：** 社区大量反馈集中在会话恢复、上下文压缩、Token 计数和状态持久化上。这表明 AI 编码助手的应用场景已从简单的代码补全扩展到复杂的、长时间的软件开发生命周期管理。
4.  **成本意识觉醒：** 用户开始敏锐地察觉到 Token 浪费（如图片上下文继承、无限重试、Shell 输出无限制），并要求更透明的计量和更智能的资源控制。未来的工具竞争力将部分体现在“如何更省钱地完成任务”上。
5.  **MCP 生态的双刃剑效应：** MCP 虽然丰富了工具链，但也引入了新的复杂性（权限、递归、泄漏）。开发者需警惕 MCP 服务器的稳定性，并关注工具官方对 MCP 标准的最新适配进展。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：** 2026-07-26
**分析师：** Agnes-2.0-Flash

## 1. 热门 Skills 排行 (Top 5 by Community Attention)

基于 Issues 评论数及 PR 讨论热度，以下 Skill 是社区当前关注的焦点：

1.  **Security: Trust Boundary Abuse (Issue #492)**
    *   **功能/议题：** 并非新增 Skill，而是关于生态安全的重大讨论。指出社区 Skill 冒充官方 `anthropic/` 命名空间的风险，引发对权限隔离和身份验证的强烈关注。
    *   **状态：** Open | **热度：** 极高 (43 comments, 2 👍)
    *   **链接:** [Issue #492](https://github.com/anthropics/skills/issues/492)

2.  **Org-Wide Skill Sharing (Issue #228)**
    *   **功能/议题：** 企业级协作需求。用户期望在组织内直接共享 Skill 库，而非通过文件传输手动安装，旨在提升团队效率。
    *   **状态：** Open | **热度：** 高 (16 comments, 8 👍)
    *   **链接:** [Issue #228](https://github.com/anthropics/skills/issues/228)

3.  **Skill Quality & Security Analyzer (PR #83)**
    *   **功能：** 提供元技能（Meta-skill），用于评估其他 Skill 的结构、文档、安全性等五个维度。旨在解决社区 Skill 质量参差不齐的问题。
    *   **状态：** Open | **热度：** 中 (作为工具类 Skill 被广泛讨论)
    *   **链接:** [PR #83](https://github.com/anthropics/skills/pull/83)

4.  **Run_Eval Bug Fix & Recall Issue (Issue #556 / PR #1298)**
    *   **功能/议题：** 核心开发工具链的重大缺陷。`run_eval.py` 始终报告 0% recall，导致 Skill 描述优化循环失效。这是开发者社区最迫切的技术痛点。
    *   **状态：** Open (Bug存在，修复PR多) | **热度：** 高 (12+ comments on issue, multiple PRs)
    *   **链接:** [Issue #556](https://github.com/anthropics/skills/issues/556), [PR #1298](https://github.com/anthropics/skills/pull/1298)

5.  **Frontend-Design Skill Improvement (PR #210)**
    *   **功能：** 优化前端设计 Skill 的清晰度和可操作性，确保指令符合单次对话逻辑，减少幻觉。
    *   **状态：** Open | **热度：** 中 (长期维护，关注度高)
    *   **链接:** [PR #210](https://github.com/anthropics/skills/pull/210)

## 2. 社区需求趋势

从 Issues 和 PR 内容提炼出以下四大需求方向：

*   **企业协作与标准化 (Enterprise Collaboration):**
    *   用户强烈要求**组织级 Skill 共享机制** (Issue #228)。
    *   对 Skill 的**安全性审计** (Issue #492, PR #83) 和**质量门禁** (PR #1367) 需求激增，反映出从“个人玩具”向“生产工具”转型的趋势。
*   **开发工具链稳定性 (DevTool Stability):**
    *   `skill-creator` 工具链在 **Windows 环境下的兼容性** (PR #1099, #1050, #1323) 和 **YAML 解析错误** (PR #539, #361) 是高频报错点，社区急需稳定的跨平台构建体验。
*   **特定领域深度集成 (Domain-Specific Deep Dive):**
    *   **文档处理：** ODT (PR #486)、DOCX 追踪更改修复 (PR #541)、PDF 大小写修复 (PR #538)。
    *   **创意与游戏：** Pyxel 复古游戏开发 (PR #525)、色彩专家 (PR #1302)。
    *   **测试工程：** 完整的测试模式 Skill (PR #723)，涵盖单元测试到 React 组件测试。
*   **Agent 自我治理 (Agent Self-Governance):**
    *   出现针对 Agent 自身状态的优化需求，如 **Compact-Memory** (Issue #1329) 以减少上下文消耗，以及 **Reasoning Quality Gate** (PR #1367, Issue #1385) 以确保输出质量。

## 3. 高潜力待合并 Skills

以下 PR 解决了关键痛点或填补了重要空白，且近期有活跃讨论，具备较高合并概率：

1.  **Self-Audit / Reasoning Quality Gate (PR #1367)**
    *   **理由：** 提供了通用的 AI 输出自检机制（机械验证+四维推理审计），直接回应了社区对可靠性的焦虑。作者 YuhaoLin2005 也在 Issue #1385 中持续推动相关理念。
    *   **状态：** Open | **更新：** 2026-07-02
    *   **链接:** [PR #1367](https://github.com/anthropics/skills/pull/1367)

2.  **Color-Expert Skill (PR #1302)**
    *   **理由：** 填补了专业设计领域的空白，涵盖多种色彩空间和命名系统，实用性强，且由活跃贡献者 meodai 提交，近期更新频繁。
    *   **状态：** Open | **更新：** 2026-07-21
    *   **链接:** [PR #1302](https://github.com/anthropics/skills/pull/1302)

3.  **ODT Skill Addition (PR #486)**
    *   **理由：** 补充了对开源文档格式 (OpenDocument) 的支持，与现有的 PDF/DOCX 形成互补，满足特定行业（如欧洲政府、学术出版）需求。
    *   **状态：** Open | **更新：** 2026-04-14
    *   **链接:** [PR #486](https://github.com/anthropics/skills/pull/486)

4.  **Testing-Patterns Skill (PR #723)**
    *   **理由：** 提供了从哲学到具体框架（React Testing Library）的完整测试指导，对于希望规范代码质量的开发者极具吸引力。
    *   **状态：** Open | **更新：** 2026-04-21
    *   **链接:** [PR #723](https://github.com/anthropics/skills/pull/723)

## 4. Skills 生态洞察

**一句话总结：**
社区当前最集中的诉求是**从“单点技能堆砌”转向“系统化治理”**——即在确保核心工具链（特别是 Windows 兼容性和评估脚本）稳定性的基础上，急需建立企业级的安全信任边界、组织内共享机制以及自动化的质量/安全审计标准。

---

# Claude Code 社区动态日报
**日期：** 2026-07-26
**数据来源：** GitHub `anthropics/claude-code`

## 1. 今日速览
今日社区焦点集中在 **Fable 5 模型在 CLI/VS Code 中的可用性问题** 以及 **Opus 4.8 的 Thinking 模式配置 Bug**。此外，关于 `AGENTS.md` 标准化支持的讨论持续升温（超 4000 点赞），成为长期最受关注的功能请求。Windows 端桌面应用出现 GPU 进程崩溃的高频报错，需引起注意。

## 2. 版本发布
*   **无新版本发布。** 过去 24 小时内未检测到新的 Release 记录。

## 3. 社区热点 Issues
以下 Issue 因高互动性或关键 Bug 被重点筛选：

1.  **[Feature] Support AGENTS.md (#6235)**
    *   **状态:** Open | **热度:** 👍 4451 / 💬 344
    *   **重要性:** 社区强烈呼吁支持行业标准的 `AGENTS.md` 文件，以替代仅适用于 Claude 的 `CLAUDE.md`，促进多 Agent 协作兼容性。这是目前呼声最高的功能需求。
    *   [链接](https://github.com/anthropics/claude-code/issues/6235)

2.  **[Bug] Fable 5 unavailable in VSCode/CLI (#81283)**
    *   **状态:** Open | **更新时间:** 今日
    *   **重要性:** 用户报告 Fable 5 模型在 VS Code 扩展和 CLI 中不可用，尽管在 Claude App 中显示可用。这影响了核心开发工作流的模型选择。
    *   [链接](https://github.com/anthropics/claude-code/issues/81283)

3.  **[Bug] Opus 4.8 thinking mode not translating (#79798)**
    *   **状态:** Open | **热度:** 👍 1
    *   **重要性:** 报告 `alwaysThinkingEnabled` 设置未能正确转换为 API 请求中的 `thinking: {type: "adaptive"}`，导致 Opus 4.8 静默运行无思考过程，影响复杂推理任务。
    *   [链接](https://github.com/anthropics/claude-code/issues/79798)

4.  **[Bug] Desktop GPU Process Crash (#77768 & #81275)**
    *   **状态:** Open
    *   **重要性:** Windows 用户报告 Claude Desktop 在使用 Web Research 或打开 Browser Pane 时频繁发生 GPU 进程崩溃（Exit Code `0x60C201E`），导致应用完全退出，严重影响稳定性。
    *   [链接 (#77768)](https://github.com/anthropics/claude-code/issues/77768) | [链接 (#81275)](https://github.com/anthropics/claude-code/issues/81275)

5.  **[Bug] Auto-mode `rm -rf` guard bypassed (#81273)**
    *   **状态:** Open
    *   **重要性:** 安全相关 Bug。用户发现通过反引号替换执行的命令绕过了自动模式下的危险操作（如 `rm -rf`）确认提示，存在数据丢失风险。
    *   [链接](https://github.com/anthropics/claude-code/issues/81273)

6.  **[Bug] OAuth Token Stale Credential (#81281)**
    *   **状态:** Open
    *   **重要性:** 即使设置了有效的环境变量 `CLAUDE_CODE_OAUTH_TOKEN`，过期的本地 `.credentials.json` 仍会导致 OAuth 令牌过期错误，干扰身份验证流程。
    *   [链接](https://github.com/anthropics/claude-code/issues/81281)

7.  **[Bug] Task List ID Not Restored on Resume (#76844 & #80871)**
    *   **状态:** Open
    *   **重要性:** 会话恢复时，`TaskCreate`/`TaskList` 生成的任务 ID 无法正确映射，导致任务更新失败。影响长周期、多步骤代理工作的连续性。
    *   [链接 (#76844)](https://github.com/anthropics/claude-code/issues/76844) | [链接 (#80871)](https://github.com/anthropics/claude-code/issues/80871)

8.  **[Bug] Billing Quota Drainage Suspicion (#81234)**
    *   **状态:** Open
    *   **重要性:** 用户质疑 Max 计划的周配额异常消耗（2天消耗53%），怀疑与 `cache_read` 计量逻辑有关，涉及计费透明度问题。
    *   [链接](https://github.com/anthropics/claude-code/issues/81234)

9.  **[Bug] Cowork Windows GitHub Connector No Tools (#57589)**
    *   **状态:** Closed (但近期有活动)
    *   **重要性:** Windows 平台上 GitHub 连接器虽显示“已连接”，但未向 Claude 暴露任何工具，阻碍了代码库交互能力。
    *   [链接](https://github.com/anthropics/claude-code/issues/57589)

10. **[Feature] Subagent Status Line Visibility (#76863)**
    *   **状态:** Open
    *   **重要性:** 请求在状态栏明确显示当前聚焦的子代理，提升多代理工作流的可观测性和用户体验。
    *   [链接](https://github.com/anthropics/claude-code/issues/76863)

## 4. 重要 PR 进展
以下 Pull Requests 展示了近期的代码维护和技术债清理：

1.  **#81262 Log closed issues as closure events in Statsig**
    *   **内容:** 修复统计日志错误，将 Issue 关闭事件正确记录为 `github_issue_closed`，而非重复的创建事件。
    *   [链接](https://github.com/anthropics/claude-code/pull/81262)

2.  **#81261 Handle worktree paths with spaces in /clean_gone**
    *   **内容:** 改进分支清理脚本，使用 `git worktree list --porcelain -z` 处理包含空格的工作树路径，解决解析错误。
    *   [链接](https://github.com/anthropics/claude-code/pull/81261)

3.  **#39043 Remove "retro-futuristic" recommendation from Frontend Design Skill**
    *   **内容:** 移除前端设计技能中的过时风格建议，保持系统指令的现代性。
    *   [链接](https://github.com/anthropics/claude-code/pull/39043)

4.  **#15727 fix(hookify): correct Python import paths for hook modules**
    *   **内容:** 修复 Hookify 插件因导入路径错误导致的 `No module named 'hookify'` 问题，确保插件加载正常。
    *   [链接](https://github.com/anthropics/claude-code/pull/15727)

5.  **#49596 refactor: extract shared GitHub API client into github-api.ts**
    *   **内容:** 重构代码，将共享的 GitHub API 客户端提取为独立模块并添加测试，提高代码复用性和可维护性。
    *   [链接](https://github.com/anthropics/claude-code/pull/49596)

*(注：由于数据限制，仅列出部分已合并或高关注度的 PR，其余 PR 数量较少且多为内部维护)*

## 5. 功能需求趋势
从 Issue 标签和讨论中提取的趋势：
*   **跨平台标准化:** 对 `AGENTS.md` 的支持是压倒性的需求，表明开发者希望 Claude Code 能融入更广泛的 AI Agent 生态系统，而非孤立存在。
*   **多代理工作流增强:** 多个 Issue 关注子代理（Subagents）的状态可见性、任务 ID 持久化和会话恢复问题，反映出复杂代理编排场景下的工具链成熟度仍有提升空间。
*   **模型特定配置优化:** 针对 Opus 4.8 和 Fable 5 的配置 Bug 频发，说明新模型发布后，CLI 与底层 API 行为的一致性校验需要加强。

## 6. 开发者关注点
*   **稳定性与安全性:** Windows 端的 GPU 崩溃和安全绕过（`rm -rf`）是最高优先级的修复项，直接影响用户信任。
*   **认证与计费:** OAuth 令牌缓存问题和配额计量疑问显示出后端服务与前端状态同步及计费透明度的痛点。
*   **新模型可用性:** Fable 5 在开发工具中的缺失引发了大量反馈，表明用户对最新模型能力的迫切需求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：** 2026-07-26

## 1. 今日速览
今日 Codex 社区活跃度极高，Windows 平台稳定性成为最大痛点，涉及进程泄漏、GPU 崩溃及认证失败等多类严重 Bug。同时，MCP 服务器资源泄漏和上下文压缩导致的性能/成本问题引发开发者广泛担忧。官方发布了 `rust-v0.146.0-alpha.10.1` 版本，并合并了多项关于 MCP 递归限制、技能同步及网络策略的关键 PR。

## 2. 版本发布
- **rust-v0.146.0-alpha.10.1**: 最新 Alpha 测试版，主要修复了 MCP 服务器递归限制及相关系统技能监听问题（见 PR #35414, #35408）。
- **rust-v0.146.0-alpha.10**: 前一版本的 Alpha 更新。

## 3. 社区热点 Issues
以下 Issue 因评论数高、影响范围广或涉及核心功能稳定性而被重点关注：

1.  **[Remote Development] Remote Development in Codex Desktop App**
    -   **链接:** [Issue #10450](https://github.com/openai/codex/issues/10450)
    -   **理由:** 获 690 个赞，长期未关闭。用户强烈期待在桌面端获得类似 VS Code 的远程开发体验，这是提升专业开发者生产力的关键需求。
2.  **[Bug] Python UV fails in Codex**
    -   **链接:** [Issue #1457](https://github.com/openai/codex/issues/1457)
    -   **理由:** 沙箱环境中 `uv` 工具链失效，直接影响依赖管理和项目初始化，是 CLI 用户的高频痛点。
3.  **[Bug] ChatGPT.exe spawns hundreds of processes (WMI storms)**
    -   **链接:** [Issue #33776](https://github.com/openai/codex/issues/33776)
    -   **理由:** Windows 端严重资源泄漏，导致系统卡顿和 DWM 降级，严重影响用户体验。
4.  **[Bug] Context compaction loses operational continuity**
    -   **链接:** [Issue #29356](https://github.com/openai/codex/issues/29356)
    -   **理由:** 上下文自动压缩破坏了长任务的操作连续性，用户建议保留最后 5 步操作以维持逻辑连贯性。
5.  **[Bug] MCP server processes leak (9+ GB RSS)**
    -   **链接:** [Issue #30408](https://github.com/openai/codex/issues/30408)
    -   **理由:** MCP 服务器进程在会话结束后未被清理，导致内存无限增长，是严重的架构缺陷。
6.  **[Bug] Page.captureScreenshot crashes GPU process**
    -   **链接:** [Issue #34133](https://github.com/openai/codex/issues/34133)
    -   **理由:** Windows 端截图功能触发 GPU 进程崩溃，与代码完整性事件冲突，影响内置浏览器稳定性。
7.  **[Bug] Codex Diff crashes in VS Code on macOS**
    -   **链接:** [Issue #35058](https://github.com/openai/codex/issues/35058)
    -   **理由:** VS Code 扩展中的 Diff 视图完全不可用，直接阻碍了代码审查工作流。
8.  **[Bug] Windows spellcheck "No Guesses Found"**
    -   **链接:** [Issue #26478](https://github.com/openai/codex/issues/26478)
    -   **理由:** Windows 端拼写检查功能存在 UI/逻辑缺陷，无法提供建议，涉及多个重复报告。
9.  **[Bug] GPT-5.6 Sol turns fail due to reserved tool collision**
    -   **链接:** [Issue #31864](https://github.com/openai/codex/issues/31864)
    -   **理由:** 多智能体协作中工具命名冲突导致任务失败，影响高级模型的功能可用性。
10. **[Bug] Image-heavy tasks cause massive token/traffic usage**
    -   **链接:** [Issue #33235](https://github.com/openai/codex/issues/33235)
    -   **理由:** 图片上下文继承导致流量和 Token 消耗激增（1.48B tokens），造成高昂费用和性能问题。

## 4. 重要 PR 进展
1.  **[Raise MCP server recursion limit]**
    -   **链接:** [PR #35414](https://github.com/openai/codex/pull/35414)
    -   **内容:** 将 Rust 端的 MCP 服务器递归限制提升至 256，解决深层嵌套调用导致的栈溢出问题。
2.  **[Ignore generated system skills in skills watcher]**
    -   **链接:** [PR #35408](https://github.com/openai/codex/pull/35408)
    -   **内容:** 优化技能监听器，忽略生成的系统技能，防止不必要的文件监控事件。
3.  **[Make keymap action menu responsive]**
    -   **链接:** [PR #35375](https://github.com/openai/codex/pull/35375)
    -   **内容:** 改进 TUI 界面响应式布局，窄屏下堆叠显示动作描述，提升可读性。
4.  **[Keep unified mention results fresh]**
    -   **链接:** [PR #35365](https://github.com/openai/codex/pull/35365)
    -   **内容:** 修复提及（@）搜索状态缓存问题，确保每次打开弹出窗口时获取最新的文件搜索结果。
5.  **[Bound Code Mode metadata compatibility headers]**
    -   **链接:** [PR #35364](https://github.com/openai/codex/pull/35364)
    -   **内容:** 限制 HTTP/WebSocket 头部大小，防止因无界工具名映射导致协议头过大。
6.  **[Include item start times in completion events]**
    -   **链接:** [PR #35363](https://github.com/openai/codex/pull/35363)
    -   **内容:** 在完成事件中增加 `started_at_ms` 字段，增强遥测和调试能力。
7.  **[Handle exec-server network policy requests]**
    -   **链接:** [PR #35359](https://github.com/openai/codex/pull/35359)
    -   **内容:** 客户端新增对执行服务器网络策略请求的处理，支持允许/拒绝/询问决策，增强安全性。
8.  **[Expose thread-selected skills from skills/list]**
    -   **链接:** [PR #31582](https://github.com/openai/codex/pull/31582)
    -   **内容:** 使 `skills/list` API 能够返回线程选定的技能，解决客户端信息不同步问题。
9.  **[Notify clients when thread-selected skills change]**
    -   **链接:** [PR #30228](https://github.com/openai/codex/pull/30228)
    -   **内容:** 引入技能变更通知机制，确保客户端在环境恢复或失败时能实时更新技能目录。
10. **[Plumb explicit application paths through Windows launchers]**
    -   **链接:** [PR #29845](https://github.com/openai/codex/pull/29845)
    -   **内容:** Windows 启动器基础设施重构，为统一可执行文件解析铺平道路，暂不改变现有行为。

## 5. 功能需求趋势
-   **远程开发与 IDE 集成深度优化:** 用户极度渴望桌面端具备完整的远程开发支持（如 SSH 隧道、远程文件夹挂载），以及更稳定的 VS Code 插件体验。
-   **资源管理与性能优化:** 针对 MCP 进程泄漏、GPU 崩溃、WMI 风暴等问题的反馈表明，开发者对应用层资源管理（内存、进程、网络）有极高要求。
-   **上下文智能压缩:** 现有的上下文压缩机制被批评为“盲目”，用户希望保留关键操作历史，避免长任务中的逻辑断裂。
-   **可视化与调试工具:** 对 Diff 视图、拼写检查、网络策略配置等细节功能的完善需求持续存在。

## 6. 开发者关注点
-   **Windows 平台稳定性:** 大量 Issue 集中在 Windows 端，包括进程泄漏、GPU 崩溃、认证失败和拼写检查异常。Windows 用户群体感觉被忽视，急需修复。
-   **MCP 生态健壮性:** 随着 MCP 服务器使用的普及，其生命周期管理（启动、停止、递归限制、权限控制）成为新的技术债务重灾区。
-   **成本与效率:** 上下文压缩不当导致的 Token 浪费和流量激增直接增加了 Pro 用户的经济负担，开发者呼吁更透明的用量控制和更智能的上下文截断策略。
-   **多智能体协作可靠性:** 工具命名冲突和会话状态同步问题阻碍了复杂多步骤任务的自动化执行。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：** 2026-07-26
**数据来源：** github.com/google-gemini/gemini-cli

## 1. 今日速览
今日 Gemini CLI 发布了 `v0.54.0-nightly` 版本，核心焦点在于修复 Agent 子代理（Subagent）的稳定性与资源管理问题。社区高度关注“通用智能体挂起”、“浏览器子代理在 Wayland 下失效”以及“自动记忆（Auto Memory）无限重试低信号会话”等关键 Bug，同时针对 Shell 命令输出无限制导致的 Token 浪费问题已提出修复方案。

## 2. 版本发布
**v0.54.0-nightly.20260726.g3818efbbf**
*   **状态：** Nightly 构建版本。
*   **内容概要：** 主要包含 v0.53.0-preview.0 和 v0.52.0 的变更日志更新及版本 bump。未列出具体新功能，通常为内部迭代或 bug 修复的前置准备。
*   **链接：** [PR #28536](https://github.com/google-gemini/gemini-cli/pull/28536)

## 3. 社区热点 Issues
以下 Issue 因高评论数、高点赞或涉及核心架构问题而备受关注：

1.  **[Bug] Subagent recovery after MAX_TURNS is reported as GOAL success** (Issue #22323)
    *   **重要性：** 揭示子代理在达到最大轮次限制时错误报告成功，导致中断被隐藏，严重影响调试和任务准确性。
    *   **社区反应：** 12条评论，2个赞，开发者对状态机逻辑的严谨性要求极高。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **[Bug] Generalist agent hangs** (Issue #21409)
    *   **重要性：** 通用智能体（Generalist Agent）经常永久挂起，甚至等待一小时无响应，直接阻碍日常使用。
    *   **社区反应：** 8条评论，8个赞，是近期最高赞 Issue，反映出用户对 Agent 稳定性的强烈不满。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **[Enhancement] Leverage model's bash affinity via Zero-Dependency OS Sandboxing** (Issue #19873)
    *   **重要性：** 提议利用 Gemini 模型原生的 Bash 能力，通过零依赖沙箱提升代码探索效率，兼顾安全与 UX。
    *   **社区反应：** 8条评论，代表了对更原生、更安全 Shell 交互方式的探索。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/19873)

4.  **[Bug] Gemini does not use skills and sub-agents enough** (Issue #21968)
    *   **重要性：** 用户反馈即使配置了自定义 Skills（如 Gradle, Git），主智能体也极少主动调用，导致功能闲置。
    *   **社区反应：** 6条评论，直指 Agent 路由策略的核心缺陷。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/21968)

5.  **[Bug] Stop Auto Memory from retrying low-signal sessions indefinitely** (Issue #26522)
    *   **重要性：** “自动记忆”功能在遇到低信号会话时会陷入无限重试循环，造成资源浪费和日志污染。
    *   **社区反应：** 5条评论，涉及长期记忆系统的健壮性。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/26522)

6.  **[Bug] Shell command execution gets stuck with "Waiting input"** (Issue #25166)
    *   **重要性：** 简单的 CLI 命令执行完成后，终端仍显示“等待输入”，导致后续操作阻塞。
    *   **社区反应：** 4条评论，3个赞，影响基础交互体验。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/25166)

7.  **[Bug] browser subagent fails in wayland** (Issue #21983)
    *   **重要性：** 在 Wayland 显示服务器环境下，浏览器子代理完全失效，限制了 Linux 用户的 GUI 自动化能力。
    *   **社区反应：** 4条评论，1个赞，特定环境下的兼容性问题。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/21983)

8.  **[Bug] Browser Agent ignores settings.json overrides** (Issue #22267)
    *   **重要性：** 配置文件中的 `maxTurns` 等参数被浏览器代理忽略，导致用户无法有效控制代理行为深度。
    *   **社区反应：** 3条评论，配置系统的一致性漏洞。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/22267)

9.  **[Enhancement] Assess the impact of AST-aware file reads** (Issue #22745)
    *   **重要性：** 探讨引入 AST（抽象语法树）感知工具以提高代码读取精度，减少 Token 消耗并降低噪音。
    *   **社区反应：** 7条评论，代表了对底层代码理解能力的技术优化方向。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/22745)

10. **[Bug] Model frequently creates tmp scripts in random spots** (Issue #23571)
    *   **重要性：** 模型倾向于在任意目录生成临时脚本，增加工作区清理负担，缺乏文件操作的规范性。
    *   **社区反应：** 3条评论，反映了对 Agent 行为约束的需求。
    *   [链接](https://github.com/google-gemini/gemini-cli/issues/23571)

## 4. 重要 PR 进展
以下是过去 24 小时内更新或合并的关键 PR：

1.  **fix(core): refresh MCP OAuth tokens with the stored client ID** (PR #28481)
    *   **内容：** 修复了 MCP OAuth 令牌刷新失败的问题，特别是针对动态客户端注册的场景，解决了凭证删除导致的反复重认证问题。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28481)

2.  **fix(shell): bound command output sent to the model** (PR #28401)
    *   **内容：** 为 Shell 工具命令输出设置上限。防止大量输出（如 `git log`）耗尽上下文窗口并浪费 Token，显著提升性能和成本效率。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28401)

3.  **fix(a2a-server): prevent path traversal in restore command** (PR #28353) **[CLOSED/Merged]**
    *   **内容：** 修复了 A2A 服务器恢复命令中的路径遍历漏洞，增加了规范化检查和 containment 验证，提升了安全性。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28353)

4.  **fix: resolve MaxListenersExceededWarning and infinite auth loop** (PR #28348) **[CLOSED/Merged]**
    *   **内容：** 解决了 API 重试时的监听器超限警告及 Windows 平台上的无限认证循环问题，增强了核心稳定性。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28348)

5.  **fix(ci): retry staging-tmp dist-tag removal after npm publish** (PR #28534)
    *   **内容：** 修复夜间发布流程中因 npm dist-tag 查询延迟导致的构建失败，增加了重试机制。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28534)

6.  **fix: use resolveRipgrepPath in perf test global setup** (PR #28535)
    *   **内容：** 性能测试全局设置更新，使用新的 `resolveRipgrepPath()` API，保持与当前 ripgrep 解析器的兼容性。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28535)

7.  **feat(pr-generator-core): add environment config parser...** (PR #28435)
    *   **内容：** 引入 SSR 管道的基础实用模块，包括配置解析、子进程执行和 GitHub REST API 集成。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28435)

8.  **feat(pr-generator-orchestrator): implement iterative bug-fixing state machine...** (PR #28433)
    *   **内容：** 实现 SSR 管道的编排层，协调 Firestore 并发锁定、AI 迭代编码评估循环及 ESLint 静态分析。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28433)

9.  **feat(pr-generator-agent): implement Antigravity agent runner...** (PR #28434)
    *   **内容：** 提供 Antigravity 代理运行器和提示模板，指导无头 AI 代理进行代码生成和质量保证。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28434)

10. **feat(pr-generator-db): implement Firestore concurrency dual-locking...** (PR #28432)
    *   **内容：** 为 Issue-to-PR 代码生成管道添加中央 Firestore 数据库接口，提供事务性锁定和状态转换辅助。
    *   [链接](https://github.com/google-gemini/gemini-cli/pull/28432)

## 5. 功能需求趋势
*   **Agent 智能性与可靠性：** 社区最迫切的需求是解决 Agent（尤其是子代理）的挂起、状态误报和行为不可预测问题。开发者希望 Agent 能更准确地使用 Skills，并在遇到限制时正确报告状态而非假成功。
*   **资源管理与成本控制：** 针对 Shell 输出无限制、临时文件乱创等问题，用户强烈要求引入硬性边界和资源清理机制，以减少 Token 消耗和工作区污染。
*   **自动记忆（Auto Memory）优化：** 对记忆系统的健壮性、隐私保护（去重敏感信息）以及避免低效重试有持续需求。
*   **SSR/自动化代码生成管道：** 多个 PR 显示团队正在构建基于 Firestore 和 Cloud Run 的自动化 Issue-to-PR 生成管道，旨在通过 AI 代理迭代修复 Bug，这是一个重要的基础设施发展方向。

## 6. 开发者关注点
*   **稳定性痛点：** “通用智能体挂起”和“Shell 命令卡住”是高频出现的崩溃/阻塞场景，严重影响开发流。
*   **环境兼容性：** Wayland 下的浏览器代理失效是一个明显的兼容性短板，Linux 用户对此反馈强烈。
*   **配置效力：** 用户发现 `settings.json` 中的某些覆盖项（如 `maxTurns`）未被子代理遵守，导致配置失效感。
*   **安全性意识：** 路径遍历漏洞的修复表明社区对 Agent 执行系统命令时的安全性高度敏感，期待更多的防御性编程措施。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：** 2026-07-26
**数据来源：** github.com/github/copilot-cli

## 1. 今日速览
今日 GitHub Copilot CLI 社区活跃度较高，共更新 18 个 Issues 和 2 个 PR，但无新版本发布。开发者反馈集中在 **Session（会话）管理的稳定性** 与 **内存泄漏/OOM 回归** 问题上，特别是版本 1.0.74 引入的重大性能退化引发关注。此外，插件市场注册持久化失败、终端滚动交互异常以及 `/pr` 命令对 SSH 别名支持不足等体验类 Bug 成为讨论焦点。

## 2. 版本发布
*   **无新版本发布。**
*   *注：Issue #4251 指出 v1.0.74 存在严重回归问题，v1.0.75 被提及用于复现 `/ask` 命令失效问题，暗示近期可能有相关修复版本在开发或测试中。*

## 3. 社区热点 Issues
以下 10 个 Issue 因涉及核心功能稳定性、性能瓶颈或高频使用场景而备受关注：

1.  **[OPEN] Session resume OOM / CPU 饥饿 (v1.0.74 Regression)**
    *   **ID:** #4251 | **作者:** oldake
    *   **重要性:** 严重回归！v1.0.74 导致大会话恢复时内存占用激增 3-4 倍并长时间占用单核 CPU，直接影响生产环境可用性。
    *   **链接:** [github/copilot-cli Issue #4251](https://github.com/github/copilot-cli/issues/4251)

2.  **[OPEN] Auto-compaction 无法防止 CAPI 5MB 限制失败**
    *   **ID:** #4183 | **作者:** jay-tau | **👍:** 10
    *   **重要性:** 长期运行的重型 Tool 会话会突破模型上下文 Token 限制但未触发自动压缩，导致请求被 API 拒绝，暴露了上下文管理逻辑的缺陷。
    *   **链接:** [github/copilot-cli Issue #4183](https://github.com/github/copilot-cli/issues/4183)

3.  **[OPEN] Terminal Mouse Scroll Usability Issue**
    *   **ID:** #2205 | **作者:** avadisabelle | **👍:** 14
    *   **重要性:** 鼠标滚轮行为反直觉（滚动输入历史而非 Agent 输出历史），严重影响终端交互体验，是高赞长期未决问题。
    *   **链接:** [github/copilot-cli Issue #2205](https://github.com/github/copilot-cli/issues/2205)

4.  **[OPEN] Skills beyond alphabetical position ~32 unreachable**
    *   **ID:** #1464 | **作者:** ericchansen | **👍:** 5
    *   **重要性:** 系统 Prompt 截断导致大量已安装技能不可见，限制了 CLI 作为强大技能扩展平台的能力，影响高级用户工作流。
    *   **链接:** [github/copilot-cli Issue #1464](https://github.com/github/copilot-cli/issues/1464)

5.  **[OPEN] Session exit overwrites settings.json model config**
    *   **ID:** #4252 | **作者:** kayone007
    *   **重要性:** 会话退出时静默覆盖用户修改的 `settings.json`，导致配置重置，具有“自我 perpetuating”特性，极易造成用户困惑。
    *   **链接:** [github/copilot-cli Issue #4252](https://github.com/github/copilot-cli/issues/4252)

6.  **[OPEN] Plugin marketplace add reports success but not persisted**
    *   **ID:** #4247 | **作者:** bbecher
    *   **重要性:** 插件注册流程存在严重数据一致性 Bug，命令返回成功但实际未保存，导致后续操作失败，破坏插件生态基础。
    *   **链接:** [github/copilot-cli Issue #4247](https://github.com/github/copilot-cli/issues/4247)

7.  **[OPEN] /pr command fails with SSH host aliases**
    *   **ID:** #4248 | **作者:** nickcoffey
    *   **重要性:** 对非标准 GitHub 远程配置（SSH 别名）兼容性差，阻碍了使用自定义 SSH Config 的企业或高级开发者使用 `/pr` 工作流。
    *   **链接:** [github/copilot-cli Issue #4248](https://github.com/github/copilot-cli/issues/4248)

8.  **[OPEN] Password masking feature causes agent loops**
    *   **ID:** #4241 | **作者:** GerhardusC
    *   **重要性:** 安全特性（密码掩码）反而导致 Agent 陷入死循环读取底层字节，表明安全过滤机制与 Agent 推理逻辑存在冲突。
    *   **链接:** [github/copilot-cli Issue #4241](https://github.com/github/copilot-cli/issues/4241)

9.  **[OPEN] archive_session times out leaving orphaned worktrees**
    *   **ID:** #4246 | **作者:** scotttesler
    *   **重要性:** 归档会话超时导致磁盘空间泄露和会话分支无法复用，影响存储管理和长期项目维护。
    *   **链接:** [github/copilot-cli Issue #4246](https://github.com/github/copilot-cli/issues/4246)

10. **[OPEN] /ask frequently returns no result**
    *   **ID:** #4253 | **作者:** Jeffz18
    *   **重要性:** 最基础的 `/ask` 命令频繁静默失败（无输出无报错），是最高频的基础功能故障报告之一。
    *   **链接:** [github/copilot-cli Issue #4253](https://github.com/github/copilot-cli/issues/4253)

## 4. 重要 PR 进展
今日 PR 数量较少且均为已关闭状态，主要涉及文档或非核心变更：

1.  **[CLOSED] Withdrawn: incorrect scope for #3534**
    *   **ID:** #4228 | **作者:** TheDr1ver
    *   **摘要:** PR 被撤回，原因是误修改了文档而非预期的私有剪贴板运行时实现，源分支已删除。这反映了内部代码审查对变更范围的严格把控。
    *   **链接:** [github/copilot-cli PR #4228](https://github.com/github/copilot-cli/pull/4228)

2.  **[CLOSED] Create monad.yml**
    *   **ID:** #23 | **作者:** Apostles1
    *   **摘要:** 早期创建的 CI/CD 配置文件 PR，已关闭，无实质影响。
    *   **链接:** [github/copilot-cli PR #23](https://github.com/github/copilot-cli/pull/23)

*(注：由于今日无新的活跃 PR 提交，以上为最近更新的 PR。)*

## 5. 功能需求趋势
从 Issue 标签和描述中提炼出以下社区核心关注方向：

*   **会话管理稳定性 (Session Stability):** 大量 Issue (#4246, #4251, #4252, #4249) 集中在会话恢复、归档、内存管理和配置持久化上。社区迫切需要解决 v1.0.74 引入的性能回归及会话状态同步问题。
*   **上下文与 Token 优化 (Context Management):** Issue #4183 和 #1464 显示用户对长会话中的自动压缩（Auto-compaction）和技能可见性有强烈需求，希望更智能地处理模型上下文窗口限制。
*   **IDE 集成一致性 (IDE Integration Parity):** Issue #4244 和 #17 指出 CLI 功能在 VS Code Agent 窗口中存在缺失或不一致（如 `/rename` 命令），用户期望终端 CLI 与 IDE 插件功能对齐。
*   **插件生态系统健壮性 (Plugin Ecosystem):** Issue #4247 和 #1996 暴露了插件市场注册和验证机制的脆弱性，社区希望看到更可靠的插件安装和配置持久化方案。

## 6. 开发者关注点
*   **性能回归焦虑:** v1.0.74 导致的 OOM 和 CPU 饥饿是当前的最大痛点，开发者正在寻找回滚方案或紧急修复补丁。
*   **“静默失败”现象:** 多个 Issue (#4253, #4247) 提到命令执行后无输出、无错误提示，这种不可观测的错误体验严重打击开发者信心。
*   **安全与便利性的平衡:** 密码掩码功能 (#4241) 本意为安全，却引发了 Agent 行为异常，开发者希望在不干扰 Agent 正常推理的前提下实现敏感信息保护。
*   **终端交互细节:** 鼠标滚动 (#2205) 和 SSH 别名支持 (#4248) 等看似细微的问题，实则影响了专业开发者的日常工作效率，反映出产品对边缘用例和高级工作流的覆盖不足。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：** 2026-07-26
**数据来源：** github.com/MoonshotAI/kimi-cli

## 1. 今日速览
今日 Kimi Code CLI 社区无新版本发布，但修复工作活跃。开发者 Nas01010101 合并了三个关键 PR，分别解决了会话恢复时的系统提示词陈旧、文件上传重复发送以及 Fork/Undo 上下文截断对齐问题，显著提升了会话管理的稳定性。同时，社区持续呼吁“远程控制”功能以支持多设备无缝切换，并报告了一个潜在的死循环 Bug。

## 2. 版本发布
*   **无新版本发布。**

## 3. 社区热点 Issues
*(注：根据提供的数据，过去24小时内更新的 Issue 仅2条，以下列出全部高关注度条目)*

1.  **[Feature Request] Remote Control - Continue local sessions from any device**
    *   **链接:** [Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)
    *   **重要性:** 极高。旨在解决移动端/平板端无法延续本地 CLI 会话的痛点，实现工作流连续性。
    *   **社区反应:** 获得 16 个赞，8 条评论，表明多设备协同是长期高频需求。

2.  **[Bug] Dead Loop**
    *   **链接:** [Issue #2557](https://github.com/MoonshotAI/kimi-cli/issues/2557)
    *   **重要性:** 高。报告在 Kimi Code CLI 1.44.0 版本中出现的死循环问题，影响正常使用。
    *   **社区反应:** 刚创建，暂无评论和点赞，需关注官方后续排查进展。

## 4. 重要 PR 进展

1.  **[CLOSED] fix(session): align fork/undo context truncation to wire turns**
    *   **链接:** [PR #2520](https://github.com/MoonshotAI/kimi-cli/pull/2520)
    *   **内容:** 修复了 Fork/Undo 操作后历史不匹配的问题，将上下文截断与 wire turns 对齐。解决了 Issue #2517, #1974 及 #2049 的根本原因。

2.  **[CLOSED] fix(app): refresh stale frozen system prompt on session resume**
    *   **链接:** [PR #2519](https://github.com/MoonshotAI/kimi-cli/pull/2519)
    *   **内容:** 修复会话恢复时系统提示词未刷新的问题。此前恢复会话会沿用 `context.jsonl` 中冻结的 `_system_prompt`，导致新添加的 Skills 或 `AGENTS.md` 修改不生效。解决了 Issue #2420。

3.  **[CLOSED] fix(web): persist uploads .sent marker so restarts do not re-send files**
    *   **链接:** [PR #2518](https://github.com/MoonshotAI/kimi-cli/pull/2518)
    *   **内容:** 修复 Web 界面重启后重复发送已上传图片的问题。通过持久化 `.sent` 标记，避免污染会话上下文。解决了 Issue #2413。

4.  **[OPEN] fix(tests): improve Windows cross-platform test compatibility**
    *   **链接:** [PR #2558](https://github.com/MoonshotAI/kimi-cli/pull/2558)
    *   **内容:** 改进 Windows 平台的测试兼容性。修复了 `Path.write_text()` 在 Windows 下因换行符转换 (`\n` to `\r\n`) 导致的测试失败问题。

## 5. 功能需求趋势
*   **跨设备/远程协作:** Issue #1282 明确指向“远程控制”和“多设备会话延续”，反映出开发者希望打破终端限制，在移动设备上继续编码工作的强烈需求。
*   **会话状态一致性:** 近期多个 PR (2519, 2520) 和 Issue 集中在会话恢复、上下文截断和系统提示词刷新上，说明社区对“会话状态管理”的准确性和稳定性有极高要求。

## 6. 开发者关注点
*   **会话恢复机制:** 开发者非常关注恢复旧会话时，配置（如 Skills、System Prompt）是否能正确加载，避免使用过期的上下文。
*   **资源重复利用:** 图片/文件上传后的重复发送问题被视为干扰会话清晰度的 Bug，社区希望实现一次上传永久生效或智能去重。
*   **环境兼容性:** Windows 用户在测试套件中遇到的路径和换行符问题，表明跨平台兼容性仍是需要持续优化的细节。
*   **稳定性:** 报告中的“Dead Loop”问题提醒开发团队需加强对边界条件（如特定订阅类型或输入组合）下的死循环检测。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：** 2026-07-26
**数据来源：** github.com/anomalyco/opencode

## 1. 今日速览
过去 24 小时内，OpenCode 社区活跃度极高，共更新 50 个 Issue 和 20+ 个 PR。虽然无新版本发布，但桌面端稳定性问题（如冻结、CPU 飙升）成为讨论焦点。同时，TUI 启动体验优化、子代理错误处理修复以及文档规范完善等 PR 正在推进，反映出开发者对核心交互稳定性和易用性的高度关注。

## 2. 版本发布
*   **无最新 Release。**

## 3. 社区热点 Issues
以下 Issue 因高评论数或涉及核心功能缺陷而备受关注：

1.  **[HIGH] High CPU usage in newer versions of OpenCode (#30086)**
    *   **重要性：** 影响多会话并发性能，导致系统卡顿，直接阻碍日常开发。
    *   **社区反应：** 36 条评论，19 个 👍，用户强烈要求优化资源占用。
    *   [链接](https://github.com/anomalyco/opencode/issues/30086)

2.  **[FEATURE] keep legacy layout option (#37012)**
    *   **重要性：** 新 UI 布局引发部分用户不适应，社区呼吁保留旧版布局选项以兼顾不同习惯。
    *   **社区反应：** 33 条评论，31 个 👍，支持保留传统工作流的声音很大。
    *   [链接](https://github.com/anomalyco/opencode/issues/37012)

3.  **[Bug] Desktop v1.18.5: UnsupportedContentType error on project reload (#38789)**
    *   **重要性：** 升级后项目无法重新加载，阻断工作流。
    *   **社区反应：** 7 条评论，涉及 SDK 生成客户端的底层错误。
    *   [链接](https://github.com/anomalyco/opencode/issues/38789)

4.  **[BUG] TUI prompt input fail on Enter (#31217)**
    *   **重要性：** TUI 模式下输入框回车失效，文本被吞，严重影响命令行交互体验。
    *   **社区反应：** 6 条评论，中英文输入均受影响。
    *   [链接](https://github.com/anomalyco/opencode/issues/31217)

5.  **[Bug] the close button does not work (#38844)**
    *   **重要性：** 点击关闭按钮导致界面冻结，需强制退出，用户体验极差。
    *   **社区反应：** 3 条评论，确认为 V1.18.5 引入的问题。
    *   [链接](https://github.com/anomalyco/opencode/issues/38844)

6.  **[Bug] Run loop can never exit when message ids are not time-sortable (#38791)**
    *   **重要性：** 导入第三方会话时可能导致死循环，直至 Provider 报错，存在逻辑漏洞。
    *   **社区反应：** 3 条评论，指出了 ID 排序比较的逻辑缺陷。
    *   [链接](https://github.com/anomalyco/opencode/issues/38791)

7.  **[perf] core: long-lived V2 server enters persistent allocation loop (#36677)**
    *   **重要性：** V2 服务器长时间运行后出现内存/CPU 泄漏，影响服务稳定性。
    *   **社区反应：** 3 条评论，显示空闲状态下仍消耗大量资源。
    *   [链接](https://github.com/anomalyco/opencode/issues/36677)

8.  **[bug, perf, core, 2.0] tui: input area covered by black rectangle (#38773)**
    *   **重要性：** V2 分支 TUI 下重型工具调用时输入框被遮挡，导致无法继续操作。
    *   **社区反应：** 2 条评论，复现条件明确（Heavy tool-call/reasoning）。
    *   [链接](https://github.com/anomalyco/opencode/issues/38773)

9.  **[BUG] Windows Desktop installer is broken offline (#34442)**
    *   **重要性：** 离线环境下核心工具（grep, glob 等）因缺失 ripgrep 而无法使用，限制了部署场景。
    *   **社区反应：** 2 条评论，3 个 👍，呼吁完善离线包依赖。
    *   [链接](https://github.com/anomalyco/opencode/issues/34442)

10. **[Feature] Allow forcing immediate reading of queued messages (#24298)**
    *   **重要性：** 类似 Copilot 的“转向”功能，允许用户打断排队消息优先处理，提升交互灵活性。
    *   **社区反应：** 4 条评论，5 个 👍，功能需求明确。
    *   [链接](https://github.com/anomalyco/opencode/issues/24298)

## 4. 重要 PR 进展
以下 PR 涉及关键功能改进、Bug 修复及文档完善：

1.  **feat(app): Improve aesthetics and debuggability. Add a progress bar to TUI startup screen (#38906 / #38802)**
    *   **内容：** 为 TUI 启动过程添加分阶段进度条，解决启动时看起来“卡死”的问题，提升视觉反馈。
    *   **状态：** 合并/关闭。
    *   [链接](https://github.com/anomalyco/opencode/pull/38906)

2.  **feat(opencode): add roll-call command (#38433)**
    *   **内容：** 新增 `roll-call` 命令，用于测试文本模型的连通性和延迟，便于开发者快速诊断模型状态。
    *   **状态：** 开放中。
    *   [链接](https://github.com/anomalyco/opencode/pull/38433)

3.  **[contributor] fix(tui): resolve keyboard deadlock in question mode (#36550)**
    *   **内容：** 修复 TUI 问答模式下的键盘死锁问题，解决 `useBindings` 互斥条件导致的输入阻塞。
    *   **状态：** 开放中。
    *   [链接](https://github.com/anomalyco/opencode/pull/36550)

4.  **feat(opencode): add Dynamic workflows (new Claude Code feature) (#29789)**
    *   **内容：** 引入项目级动态工作流，支持通过 `/workflow <name>` 在 TUI 中运行和检查，增强自动化能力。
    *   **状态：** 开放中。
    *   [链接](https://github.com/anomalyco/opencode/pull/29789)

5.  **fix(session): defer auto-compaction until the next model input (#38901)**
    *   **内容：** 修复自动压缩时机问题，将其推迟到下一次模型输入时执行，避免在助手步骤完成后立即触发导致的潜在冲突。
    *   **状态：** 已关闭。
    *   [链接](https://github.com/anomalyco/opencode/pull/38901)

6.  **docs: add PR conventions pointer section to AGENTS.md (#38905)**
    *   **内容：** 完善贡献者文档，增加 PR 规范指引，确保未来 PR 符合模板要求，提高维护效率。
    *   **状态：** 开放中。
    *   [链接](https://github.com/anomalyco/opencode/pull/38905)

7.  **feat(plugin): route ChatGPT OAuth inference via codexApiEndpoint option (#38903)**
    *   **内容：** 允许通过配置项自定义 ChatGPT OAuth 推理端点，增强插件的灵活性和兼容性。
    *   **状态：** 开放中。
    *   [链接](https://github.com/anomalyco/opencode/pull/38903)

8.  **fix(tui): avoid rendering "1000.0K" in compact number formatting (#33948)**
    *   **内容：** 修复 TUI 紧凑数字格式渲染错误，消除不必要的 `.0` 小数位，提升 UI 整洁度。
    *   **状态：** 已关闭。
    *   [链接](https://github.com/anomalyco/opencode/pull/33948)

9.  **fix(vcs): prevent crash when repo has thousands of untracked files (#33927)**
    *   **内容：** 修复当仓库包含大量未跟踪文件（如 1200+）时 VCS 层崩溃的问题，提升大项目稳定性。
    *   **状态：** 已关闭。
    *   [链接](https://github.com/anomalyco/opencode/pull/33927)

10. **fix(upgrade): authenticate GitHub release checks (#33912)**
    *   **内容：** 在使用 `GITHUB_TOKEN` 进行版本检查时添加认证，防止因速率限制导致升级失败。
    *   **状态：** 已关闭。
    *   [链接](https://github.com/anomalyco/opencode/pull/33912)

## 5. 功能需求趋势
从 Issues 和 PR 中提炼出以下社区关注方向：
*   **UI/UX 回归与优化：** 大量反馈集中在桌面端新版 UI 的不友好（布局混乱、字体大小不可调、关闭按钮失效），社区强烈希望保留旧版布局选项或提供切换机制。
*   **性能与稳定性：** CPU 占用过高、内存泄漏（V2 Server）、TUI 输入框遮挡等问题频发，开发者对长期运行的稳定性要求极高。
*   **离线与本地化支持：** 离线安装包缺失依赖（ripgrep）、LAN 内 Ollama 连接失败等问题，表明用户需要更完善的本地部署和网络配置支持。
*   **高级工作流控制：** 对动态工作流（Dynamic Workflows）、消息队列转向（Steering）、会话自动压缩时机等高级功能的需求增加，用户希望更精细地控制 Agent 行为。

## 6. 开发者关注点
*   **痛点：** 桌面端 V1.18.5 版本的稳定性较差，频繁出现冻结、崩溃和启动黑屏问题；TUI 模式下的输入交互存在多处 Bug（回车失效、遮挡）。
*   **高频需求：**
    1.  **资源优化：** 降低 CPU 和内存占用，特别是多会话并发时。
    2.  **配置灵活性：** 支持自定义字体大小、布局切换、离线环境依赖打包。
    3.  **错误可见性：** 子代理错误不应静默失败，需明确展示给用户；模型内部服务器错误需更清晰的提示。
    4.  **兼容性：** 确保与第三方导入会话、不同 Provider（如 Xiaomi MiMo）的兼容性问题得到修复。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报
**日期**: 2026-07-26
**数据来源**: github.com/badlogic/pi-mono

## 1. 今日速览
Pi v0.82.1 正式发布，重点引入对 **Claude Opus 5** 的支持（含 Anthropic 和 Amazon Bedrock），并优化了自适应思考与提示词缓存功能。社区活跃度极高，过去24小时内 Issues 更新达 50 条，PR 合并 19 条，焦点集中在 TUI 性能优化、会话压缩（Compaction）稳定性及多模型切换兼容性上。

## 2. 版本发布
### v0.82.1
*   **新特性**: 全面支持 **Claude Opus 5**。该模型现已在 Anthropic 原生 API 和 Amazon Bedrock 上可用。
*   **技术细节**: 支持 `xhigh` 等自适应思考模式、推理配置文件（Inference Profiles）以及提示词缓存（Prompt Caching），旨在提升长上下文场景下的效率与成本效益。
*   **链接**: [v0.82.1 Release](https://github.com/earendil-works/pi/releases/tag/v0.82.1)

## 3. 社区热点 Issues
以下 Issue 因评论数高、影响面广或涉及核心稳定性而备受关注：

1.  **[Bug] Session folder collision (#4877)** - *21 条评论*
    *   **重要性**: 不同路径可能生成相同的会话文件夹名（如 `/a/b/c/d` 和 `/a-b/c-d`），导致会话数据混淆。虽然非致命，但涉及数据隔离的核心逻辑。
    *   **状态**: Closed (已修复/确认无需行动)
    *   [View Issue](https://github.com/earendil-works/pi/issues/4877)

2.  **[Bug] Compaction using Copilot Enterprise not possible (#6768)** - *13 条评论, 11 👍*
    *   **重要性**: 使用 Copilot Enterprise 许可证进行上下文压缩时失败，报错 "Misdirected Request"。严重影响长会话管理体验。
    *   **状态**: Open
    *   [View Issue](https://github.com/earendil-works/pi/issues/6768)

3.  **[Bug] TUI pins a full core while streaming (#6665)** - *7 条评论*
    *   **重要性**: 流式传输期间 TUI 占用单核 100% CPU。根因在于未缓存的 `Intl.Segmenter` 和每次 chunk 的 Markdown 重渲染，需性能优化。
    *   **状态**: In Progress
    *   [View Issue](https://github.com/earendil-works/pi/issues/6665)

4.  **[Bug] Sometimes Pi doesn't continue after compaction (#7020)** - *4 条评论*
    *   **重要性**: 会话压缩后 Pi 可能停止继续生成，表现为“协调器”会话中的死锁或状态丢失。
    *   **状态**: In Progress
    *   [View Issue](https://github.com/earendil-works/pi/issues/7020)

5.  **[Bug] Built-in llama.cpp provider: defaultProvider not applied at startup (#6948)** - *4 条评论*
    *   **重要性**: 启动时存在竞态条件，导致配置的默认 llama.cpp 模型未正确加载，用户需手动切换。
    *   **状态**: Closed (通过 PR #7072 修复)
    *   [View Issue](https://github.com/earendil-works/pi/issues/6948)

6.  **[Bug] WSL absolute windows paths are mishandled (#7064)** - *3 条评论*
    *   **重要性**: WSL 环境下绝对 Windows 路径处理错误，导致 `read/write/edit` 工具失效，回退到命令行操作。
    *   **状态**: Open
    *   [View Issue](https://github.com/earendil-works/pi/issues/7064)

7.  **[Bug] Upgrade to v0.82.0 causes persistent "Validation failed for tool 'bash'" (#7069)** - *3 条评论*
    *   **重要性**: 升级至 v0.82.0 后出现回归 Bug，`bash` 工具验证持续失败，影响基本命令执行。
    *   **状态**: Closed
    *   [View Issue](https://github.com/earendil-works/pi/issues/7069)

8.  **[Feature] Make truncation limits configurable (#7066)** - *2 条评论*
    *   **重要性**: 社区请求将工具输出截断限制从硬编码改为可配置，以便更好地控制本地模型的上下文窗口消耗。
    *   **状态**: Closed
    *   [View Issue](https://github.com/earendil-works/pi/issues/7066)

9.  **[Bug] Model switch breaks session: GPT HTML errors (#7067)** - *3 条评论*
    *   **重要性**: 会话中途切换模型（如 Qwen 到 GPT）常导致会话崩溃或返回 HTML 错误页，缺乏前置校验。
    *   **状态**: Closed
    *   [View Issue](https://github.com/earendil-works/pi/issues/7067)

10. **[Bug] TUI freezes after entering an API key in /login (#7113)** - *1 条评论*
    *   **重要性**: 当 pi.dev 模型目录不可达时，登录流程因无超时机制而永久冻结 TUI。
    *   **状态**: Closed
    *   [View Issue](https://github.com/earendil-works/pi/issues/7113)

## 4. 重要 PR 进展
1.  **#7118 Expose extension context clear callback** - *Closed*
    *   **内容**: 允许扩展程序在不生成摘要的情况下清除会话上下文，便于工具间安全移交控制权。
    *   [View PR](https://github.com/earendil-works/pi/pull/7118)

2.  **#7081 feat(ai): support Claude Opus 5 on Bedrock** - *Closed*
    *   **内容**: 配置 Claude Opus 5 在 Bedrock 上使用自适应思考，并修复 Bedrock 提供者的错误消息隐藏问题。
    *   [View PR](https://github.com/earendil-works/pi/pull/7081)

3.  **#7116 fix(tui): truncate over-width lines instead of crashing** - *Closed*
    *   **内容**: 修复当渲染行宽于终端宽度时导致的未处理异常和会话崩溃，改为自动截断。
    *   [View PR](https://github.com/earendil-works/pi/pull/7116)

4.  **#7114 Add manual redirect URL fallback to OpenRouter OAuth login** - *Open*
    *   **内容**: 为 OpenRouter 登录流程添加手动粘贴回调 URL 的功能，解决 SSH/容器环境下的远程登录问题。
    *   [View PR](https://github.com/earendil-works/pi/pull/7114)

5.  **#7072 fix(coding-agent): cache llama.cpp model catalog** - *Closed*
    *   **内容**: 缓存 llama.cpp 模型目录，修复启动时的竞态条件问题（关联 Issue #6948）。
    *   [View PR](https://github.com/earendil-works/pi/pull/7072)

6.  **#7111 feat: support durable external tool results** - *Closed*
    *   **内容**: 引入持久化外部工具结果流程，允许代理进程外等待类型化的工具返回值。
    *   [View PR](https://github.com/earendil-works/pi/pull/7111)

7.  **#7112 fix(coding-agent): normalize path separators... for cross-platform footer** - *Closed*
    *   **内容**: 统一 Windows 和 Unix 下的当前工作目录显示格式，避免路径分隔符导致的 UI 不一致。
    *   [View PR](https://github.com/earendil-works/pi/pull/7112)

8.  **#7117 feat(coding-agent): add extension creation eval** - *Open*
    *   **内容**: 新增针对扩展创建的评估测试套件，用于验证扩展的生命周期管理。
    *   [View PR](https://github.com/earendil-works/pi/pull/7117)

9.  **#7031 fix(coding-agent): run coding-agent tests offline by default** - *Open*
    *   **内容**: 默认离线运行编码代理测试，提高 CI/CD 稳定性和速度，仅对需要网络的测试启用在线模式。
    *   [View PR](https://github.com/earendil-works/pi/pull/7031)

10. **#7061 fix(openai-completions): handle array content and missing finish_reason** - *Open*
    *   **内容**: 修复 Databricks 等非标准提供商返回数组内容或缺少 `finish_reason` 时的解析错误。
    *   [View PR](https://github.com/earendil-works/pi/pull/7061)

## 5. 功能需求趋势
*   **上下文管理与压缩增强**: 社区高度关注会话压缩（Compaction）的可靠性，特别是针对长会话、多模型切换后的状态保持，以及自定义上下文清除接口的需求。
*   **TUI 性能与稳定性**: 多次报告 TUI 在流式传输时的 CPU 占用过高、屏幕闪烁及崩溃问题，反映出对前端渲染引擎优化的迫切需求。
*   **跨平台与远程体验**: WSL 路径处理、SSH 环境下的 OAuth 登录（手动回调）、以及不同操作系统下的路径分隔符一致性成为高频痛点。
*   **成本透明化**: 有开发者提议在模型选择器中增加“成本预览”列，以直观展示输入/输出 token 价格，辅助用户选择高性价比模型。

## 6. 开发者关注点
*   **多模型兼容性**: 用户在混合使用不同提供商（如 Anthropic, OpenAI, xAI, Local LLMs）时，频繁遭遇模型切换导致的会话中断或配置失效。
*   **工具链集成**: 对 Copilot Enterprise、Llama.cpp 等本地或企业级模型的集成稳定性要求较高，任何配置覆盖或缓存失效都会直接影响工作流。
*   **扩展生态**: 开发者希望获得更底层的 API 支持（如持久化工具结果、直接清除上下文），以构建更复杂的自动化工作流。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：** 2026-07-26
**数据来源：** github.com/QwenLM/qwen-code

## 1. 今日速览
Qwen Code 于今日发布 v0.21.0-nightly.20260726 版本，主要修复了 CLI 本地时间度量问题及自动修复重构。社区活跃度显著，过去 24 小时内更新 Issue 达 27 条，PR 50 条。开发重心集中在 **Sandbox 运行时稳定性**、**Web Shell 功能增强**（Git 集成、ANSI 解析）以及 **子代理模型分级选择** 的落地。同时，针对 DashScope Thinking 模式下的工具调用冲突及 Mac 端输入法 UI 错位等关键 Bug 进行了集中修复。

## 2. 版本发布
*   **v0.21.0-nightly.20260726.9d19eafa9**
    *   **核心变更：**
        *   `fix(cli)`: 统一测量洞察数据（insight days/hours）为本地时间，解决时区显示不一致问题 (PR #7670)。
        *   `refactor(autofix)`: 对自动修复模块进行代码重构，提升可维护性。
    *   [查看 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260726.9d19eafa9)

## 3. 社区热点 Issues
以下 10 个 Issue 反映了当前社区最紧迫的问题或最具潜力的功能方向：

1.  **[Bug] Sandbox 运行时选择逻辑缺陷** (#7732)
    *   **重要性：** 高优先级 P2。指出仅凭 PATH 存在即判定 Docker 可用的逻辑漏洞，导致不可用的 Docker 屏蔽了正常的 Podman。直接影响开发者环境搭建。
    *   **链接:** [Issue #7732](https://github.com/QwenLM/qwen-code/issues/7732)
2.  **[Feature] 直接外部上下文提供者配置** (#7585)
    *   **重要性：** 允许通过扩展从管理员绑定的外部知识库获取上下文，无需修改核心代码，增强了企业级知识集成的灵活性。
    *   **链接:** [Issue #7585](https://github.com/QwenLM/qwen-code/issues/7585)
3.  **[Feature] 子代理生成时的模型分级选择** (#7685)
    *   **重要性：** 支持在创建子代理时指定模型等级（small/medium/high/super），优化成本与性能的平衡，是高级工作流的关键需求。
    *   **链接:** [Issue #7685](https://github.com/QwenLM/qwen-code/issues/7685)
4.  **[Bug] VS Code 插件无法连接 Unity MCP** (#7697)
    *   **重要性：** 对比 Claude Code 正常工作，此 Issue 揭示了 Qwen Code 在特定 MCP 提供商兼容性上的潜在回归或配置问题。
    *   **链接:** [Issue #7697](https://github.com/QwenLM/qwen-code/issues/7697)
5.  **[Bug] Mac 端 Command 模式下输入法候选框位置错误** (#7684)
    *   **重要性：** 影响 macOS 用户的核心输入体验，UI 错位导致多行状态栏下无法准确输入。
    *   **链接:** [Issue #7684](https://github.com/QwenLM/qwen-code/issues/7684)
6.  **[Feature] Pinned Memory 目录保护机制** (#6801)
    *   **重要性：** 提议创建只读内存文件目录，防止被 `/dream` 合并操作覆盖，保障重要项目记忆的持久性和安全性。
    *   **链接:** [Issue #6801](https://github.com/QwenLM/qwen-code/issues/6801)
7.  **[Bug] DashScope Thinking 模式下 tool_choice: "required" 报错** (#7659)
    *   **重要性：** P2 级 Bug。Thinking 模式与强制工具调用冲突，导致 HTTP 400 错误，需调整侧边查询逻辑以兼容不同 Provider 限制。
    *   **链接:** [Issue #7659](https://github.com/QwenLM/qwen-code/issues/7659)
8.  **[Feature] CLI Token 用量显示缺失** (#7719)
    *   **重要性：** 用户反馈 CLI 界面未显示当前会话 Token 消耗及配额百分比，缺乏透明度影响成本控制。
    *   **链接:** [Issue #7719](https://github.com/QwenLM/qwen-code/issues/7719)
9.  **[Bug] 技能自动补全在连续提及多个技能时失效** (#7717)
    *   **重要性：** 影响使用复杂 Skill 链路的用户体验，属于已确认的回归 Bug。
    *   **链接:** [Issue #7717](https://github.com/QwenLM/qwen-code/issues/7717)
10. **[Enhancement] 数学公式作者协议明确化** (#7700)
    *   **重要性：** 针对数学密集型工作流，提议定义更明确、可移植的内联数学语法规范，解决渲染与复制行为不一致的问题。
    *   **链接:** [Issue #7700](https://github.com/QwenLM/qwen-code/issues/7700)

## 4. 重要 PR 进展
以下 PR 推动了核心功能完善或解决了关键稳定性问题：

1.  **feat(web-shell): Git 分支选择与 PR 流程** (#7731)
    *   **内容：** 在 Web Shell 中引入 IntelliJ 风格的分支选择器，支持搜索、检出、新建分支及创建 PR 流程，大幅增强 Web 端 Git 交互能力。
    *   **链接:** [PR #7731](https://github.com/QwenLM/qwen-code/pull/7731)
2.  **fix(cli): 沙盒运行时预检测** (#7734)
    *   **内容：** 修复 #7732 提出的问题，在执行前通过 `version` 命令探测沙盒运行时实际可用性，而非仅检查 PATH，确保 Docker/Podman 选择的可靠性。
    *   **链接:** [PR #7734](https://github.com/QwenLM/qwen-code/pull/7734)
3.  **feat(core): 子代理模型分级参数支持** (#7702)
    *   **内容：** 实现 #7685 的功能，向 `agent` 工具添加 `model` 参数，允许 AI 在生成子代理时根据 `settings.json` 中的配置选择模型等级。
    *   **链接:** [PR #7702](https://github.com/QwenLM/qwen-code/pull/7702)
4.  **fix(core): 避免 DashScope Thinking 模式下的强制工具选择** (#7661)
    *   **内容：** 修复 #7659，当启用 Thinking 模式时，不再发送 `tool_choice: "required"`，解决 DashScope 拒绝请求的问题，同时保持非 Thinking 模式下的原有行为。
    *   **链接:** [PR #7661](https://github.com/QwenLM/qwen-code/pull/7661)
5.  **feat(review): Agent 5 测试覆盖率变异测试** (#7735)
    *   **内容：** 升级测试审查流程，不仅检查测试是否存在，还通过变异测试验证测试是否真正能捕捉代码缺陷，提升“虚假覆盖”的识别率。
    *   **链接:** [PR #7735](https://github.com/QwenLM/qwen-code/pull/7735)
6.  **fix(web-shell): 解析 256色/真彩色 SGR 序列** (#7620)
    *   **内容：** 修复 Web Shell 中 ANSI 颜色解析 bug，正确处理 `38`/`48`/`58` 扩展颜色参数，改善终端输出视觉效果。
    *   **链接:** [PR #7620](https://github.com/QwenLM/qwen-code/pull/7620)
7.  **feat(memory): Forked Dream 中保护 Pinned 文件** (#7714)
    *   **内容：** 实现 #6801 的部分逻辑，添加权限门控，禁止 `write_file` 和 `edit` 操作写入 `pinned/` 目录下的文件，并在合并时跳过这些文件。
    *   **链接:** [PR #7714](https://github.com/QwenLM/qwen-code/pull/7714)
8.  **fix(cli): 保持 IME 光标对齐** (#7711)
    *   **内容：** 修复 #7684，在独立更新的 UI 元素（如多行状态栏）触发重绘时，重新断言光标位置，解决 Mac 端输入法候选框偏离问题。
    *   **链接:** [PR #7711](https://github.com/QwenLM/qwen-code/pull/7711)
9.  **feat(triage): 添加沙箱深度验证通道** (#7710)
    *   **内容：** 在审查工作流中增加按需深度验证，评论 `@qwen-code /verify` 即可运行构建级证据轮次，防止虚假测试通过。
    *   **链接:** [PR #7710](https://github.com/QwenLM/qwen-code/pull/7710)
10. **fix(ci): 修复 E2E 测试抖动并添加自动修复检测** (#7725)
    *   **内容：** 将不稳定的 `tool-control` E2E 测试迁移至 `fake-openai-server` 以确保确定性，并在自动修复工作流中添加抖动检测预检。
    *   **链接:** [PR #7725](https://github.com/QwenLM/qwen-code/pull/7725)

## 5. 功能需求趋势
通过分析近期 Issue 和 PR，社区关注点呈现以下趋势：
*   **细粒度资源与成本控制：** 用户强烈关注 Token 用量可视化 (#7719)、子代理模型分级选择 (#7685/#7702) 以及流式限速的可配置化 (#7658)，表明开发者对运行成本和性能调优的需求日益增长。
*   **Web Shell 与 IDE 体验深化：** Web Shell 正在快速迭代，包括 Git 工作流集成 (#7731)、ANSI 颜色支持 (#7620) 以及新任务中的 Shell 命令支持 (#7724)，旨在缩小与桌面 IDE 的功能差距。
*   **记忆系统的健壮性与结构化：** 对 Memory 系统的改进集中在保护重要数据（Pinned 目录 #7714）、防止误合并以及探索外部上下文集成 (#7585)，显示出对长期记忆可靠性的重视。
*   **MCP 生态兼容性：** 多个 Issue 涉及 MCP 集成问题（Unity MCP 连接失败 #7697、OAuth 回调转发 #7503、Cua Driver 上游依赖 #7618），反映社区正在积极拓展和适配第三方 MCP 服务。

## 6. 开发者关注点
*   **环境稳定性与兼容性：** 沙盒运行时（Docker/Podman）的选择逻辑缺陷 (#7732/#7734) 和安装扩展失败 (#7568) 是阻碍顺畅开发的主要痛点。
*   **特定平台 UI 瑕疵：** macOS 端的输入法光标对齐问题 (#7684/#7711) 和 CLI 界面滚动异常 (#7713) 影响了原生用户的体验，需要前端渲染层的精细调整。
*   **API 行为一致性：** DashScope Thinking 模式下的工具调用限制 (#7659/#7661) 以及流式重试延迟硬编码 (#7658) 表明，不同后端 Provider 的行为差异给客户端逻辑带来了复杂性，用户希望更具配置灵活性的解决方案。
*   **自动化测试信任度：** 社区对“虚假测试覆盖”表示担忧，因此高度关注引入变异测试 (#7735) 和深度验证通道 (#7710) 的 PR，期望 CI 系统能提供更真实的代码质量反馈。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报
**日期：** 2026-07-26
**数据来源：** github.com/Hmbown/DeepSeek-TUI

## 1. 今日速览
今日项目核心聚焦于 **v0.9.2 版本的稳定性修复与多模型支持完善**。主要进展包括解决了非 DeepSeek 提供商（如 Zai/GLM）配置解析失败的关键 Bug，修复了 macOS 下“水下”Shell 交互导致的命令执行错误，并清理了遗留的记忆模块代码。社区对性能优化（特别是渲染帧率问题）和非官方生态兼容性（如 Claude Code 技能移植）保持高度关注。

## 2. 版本发布
*   **无新版本发布。**
    *   过去 24 小时内未产生新的 Release 版本。开发重心仍在 v0.9.2 的功能打磨和 Bug 修复阶段。

## 3. 社区热点 Issues
以下 Issue 因涉及核心功能稳定性、跨平台兼容性及重大功能需求而备受关注：

1.  **[BUG] macOS: underwater shell breaks open/osascript/launchctl (exit code -54)**
    *   **ID:** #4828 | **状态:** OPEN
    *   **重要性:** 高。v0.9.0 引入的默认终端交互系统导致 macOS 用户无法使用 `open` 等系统命令，严重影响日常开发体验。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/4828)

2.  **[BUG] codew model resolve ignores configured provider and default_text_model**
    *   **ID:** #4832 | **状态:** CLOSED
    *   **重要性:** 高。诊断工具误导用户，且关联 Issue #4838 指出 `model set` 命令在非 DeepSeek 提供商下静默失效，破坏了多模型切换的核心工作流。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/4832)

3.  **[BUG] Config validation rejects non-DeepSeek providers' own models**
    *   **ID:** #4829 | **状态:** CLOSED
    *   **重要性:** 高。配置验证逻辑过于严格，导致使用 Zai/GLM 等非原生提供商的用户 CLI 启动即崩溃。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/4829)

4.  **[ENHANCEMENT] FR：适配Claude Code的技能生态**
    *   **ID:** #2743 | **状态:** OPEN
    *   **重要性:** 中高。用户希望移植 Claude Code 的技能（Skills），以利用现有丰富的开源 Agent 生态，反映了对开放兼容性的强烈需求。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/2743)

5.  **[ENHANCEMENT] perf(tui): render() re-estimates context tokens over ALL api_messages every frame**
    *   **ID:** #3906 | **状态:** OPEN
    *   **重要性:** 中。揭示了严重的性能瓶颈，长会话中每帧重算 Token 会导致 UI 卡顿，是 v0.9.2 性能优化的关键阻碍。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3906)

6.  **[ENHANCEMENT] feat(tui): add configurable session token breakdown to header bar**
    *   **ID:** #4520 | **状态:** OPEN
    *   **重要性:** 中。用户怀念旧版详细的 Token 统计（输入/缓存/输出分开显示），当前紧凑视图虽简洁但缺乏细节，社区呼声较高。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/4520)

7.  **[BUG] Wrong deepseek completions url**
    *   **ID:** #4683 | **状态:** OPEN
    *   **重要性:** 中。间歇性网络请求失败，指向 URL 构造或重试机制的问题，影响长期使用的稳定性。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/4683)

8.  **[ENHANCEMENT] v0.9.2: Distinguish configured providers and MCP servers from live health**
    *   **ID:** #4406 | **状态:** OPEN
    *   **重要性:** 中。诊断信息混淆了“已配置”和“在线健康”状态，导致误报，需要更精确的状态监控。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/4406)

9.  **[ENHANCEMENT] v0.9.2: Ship Korean, Spanish, and Brazilian Portuguese website locales**
    *   **ID:** #3093 | **状态:** OPEN
    *   **重要性:** 低。国际化进展，README 已就绪，网站端待跟进，体现项目的全球化努力。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3093)

10. **[ENHANCEMENT] v0.9.2: Extract App god object state into owned submodules**
    *   **ID:** #3314 | **状态:** CLOSED
    *   **重要性:** 技术债务。重构庞大的 `App` 结构体，提升代码可维护性，为后续复杂功能打下基础。
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3314)

## 4. 重要 PR 进展
以下 PR 展示了近期的主要工程改进和缺陷修复：

1.  **chore(credit): map five contributors missing from AUTHOR_MAP**
    *   **ID:** #4840 | **状态:** OPEN
    *   **内容:** 修正贡献者名单，确保 GitHub 自动识别正确的作者归属，解决因缺少 `Co-authored-by` 导致的统计遗漏。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/4840)

2.  **fix: do not retry failed qualified MCP tool calls**
    *   **ID:** #4756 | **状态:** CLOSED
    *   **内容:** 修复 MCP 工具调用失败时的无限重试问题，提高 Agent 调用的健壮性和响应速度。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/4756)

3.  **fix: stop applying the 45s SSE open timeout to non-streaming chat requests**
    *   **ID:** #4743 | **状态:** CLOSED
    *   **内容:** 解决非流式请求超时误报问题，允许长时间生成的非流式任务正常完成。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/4743)

4.  **feat(minimax): add China / Token Plan provider routes for minimaxi.com**
    *   **ID:** #4686 | **状态:** CLOSED
    *   **内容:** 新增 MiniMax 中国区的 API 路由支持，扩展了模型提供商的兼容性。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/4686)

5.  **fix(tui): show complete edit previews in details**
    *   **ID:** #4722 | **状态:** CLOSED
    *   **内容:** 改进文件编辑预览功能，支持在详情面板中查看完整的 diff 差异，提升代码审查体验。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/4722)

6.  **fix(tui): archive completed background shell output**
    *   **ID:** #4724 | **状态:** CLOSED
    *   **内容:** 优化后台 Shell 任务的输出处理，任务完成后自动归档 stdout/stderr，保持界面整洁。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/4724)

7.  **docs(localization): describe the TUI packs and gate locale drift in CI**
    *   **ID:** #4839 | **状态:** OPEN
    *   **内容:** 完善本地化文档，并在 CI 中增加对 TUI 语言包漂移的检测，确保多语言支持的一致性。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/4839)

8.  **fix(workflow): preserve hashes in fleet strings**
    *   **ID:** #4742 | **状态:** CLOSED
    *   **内容:** 修复 Fleet 字符串解析器错误剥离哈希值（#）的问题，确保引用和注释不被破坏。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/4742)

9.  **Remove legacy memory push/inject in report building**
    *   **ID:** #4455 | **状态:** CLOSED
    *   **内容:** 清理旧的记忆模块代码，移除已弃用的内存注入逻辑，简化报告构建流程。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/4455)

10. **[v0.9.2] update tui Cargo.toml for HarmonyOS build**
    *   **ID:** #4566 | **状态:** CLOSED
    *   **内容:** 调整依赖配置以支持 HarmonyOS 编译，标志着项目在国产操作系统兼容性上的突破。
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/4566)

## 5. 功能需求趋势
从 Issue 和 PR 的分析中，可以观察到以下明显的社区趋势：

*   **多模型与多提供商兼容性增强：** 社区不再局限于 DeepSeek 原生模型，强烈要求完善对其他提供商（如 Zai, GLM, Kimi, MiniMax）的支持，特别是解决配置解析和模型选择器的 Bug。
*   **性能优化成为重中之重：** 多个 Issue (#3905-#3908) 集中指出了 TUI 渲染层面的性能问题（文件系统 IO、Token 重算、历史数据深拷贝），表明随着会话变长，流畅度已成为用户体验的关键短板。
*   **生态开放性与插件市场：** 用户渴望引入 Plugin 支持和 Plugin Market，并尝试移植 Claude Code 的技能生态，显示出对 Agent 可扩展性的强烈需求。
*   **本地化与国际化：** 除了英文和中文，社区积极推动韩文、西语、俄语等语言的 README 和网站翻译，体现全球化视野。

## 6. 开发者关注点
*   **配置与诊断的准确性：** 开发者对 `codewhale model resolve` 和配置验证逻辑的 Bug 非常敏感，因为这些错误直接阻碍了多模型环境的搭建。
*   **macOS 原生体验：** macOS 用户特别关注“水下 Shell”交互模式带来的副作用，期望修复系统命令调用的权限和路径问题。
*   **UI 细节与可读性：** 浅色模式下的对比度问题 (#4833) 和通知图标的不统一 (#4834) 被指出，反映出用户对细节打磨的期待。
*   **长会话管理：** 用户希望看到更细致的 Token 消耗明细 (#4520)，以便更好地控制成本和监控上下文窗口使用情况。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-Sisyphus/os-feed) 自动生成。*