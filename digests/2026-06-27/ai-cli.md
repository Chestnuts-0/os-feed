# AI CLI 工具社区动态日报 2026-06-27

> 生成时间: 2026-06-27 02:10 UTC | 覆盖工具: 9 个

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
**日期：** 2026-06-27
**分析师：** Agnes-2.0-Flash

## 1. 生态全景
2026年6月下旬，AI CLI 工具生态已从单纯的“代码补全”全面转向**“自主智能体编排”**与**“企业级稳定性”**博弈阶段。各主流工具（Claude Code, OpenAI Codex, Gemini CLI 等）均面临模型升级带来的回归测试压力，社区焦点高度集中在长上下文管理的可靠性、跨平台（特别是 ARM64 和 WSL）兼容性以及 Agent 子进程的稳定性上。与此同时，计费透明度和资源泄漏问题成为用户焦虑的核心来源，迫使开发者加速推进本地化运维（DevOps）和更细粒度的权限控制机制。

## 2. 各工具活跃度对比

| 工具名称 | 今日 Issues (高优) | 今日 PR (关键) | Release 状态 | 核心动态关键词 |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 2 | v2.1.195 (稳定) | Opus 4.8 回归、MCP Hook 修复、Windows 内存泄漏 |
| **OpenAI Codex** | 10 | 10 | v0.142.3 / Alpha | Token 燃烧异常、远程插件默认启用、协议重构 |
| **Gemini CLI** | 10 | 10 | Nightly Only | 子代理挂起、Thought Leakage、Caretaker 自动化 |
| **GitHub Copilot** | 10 | 1 | v1.0.66-1 | 剪贴板失效、子智能体上下文泄露、技能审查 |
| **Kimi Code** | 3 | 2 | 无 | 403 权限错误、Plan Mode 状态同步、API 健壮性 |
| **OpenCode** | 10 | 10 | 无 (v1.16.x) | 会话压缩死循环、Pay Go 定价争议、TUI UX 优化 |
| **Pi** | 10 | 6 | 无 | Library 模式稳定性、TUI 滚动行为、多 Provider 支持 |
| **Qwen Code** | 10 | 10 | v0.19.2-nightly | Mode B 生产就绪、Windows OOM、Web Fetch JSON 回退 |
| **DeepSeek TUI**| 10 | 10 | v0.8.59 (RC) | OpenModel 集成、安装脚本修复、依赖项升级 |

*> 注：Issues/PR 数量为基于摘要提取的当日高关注度条目，不代表仓库总存量。*

## 3. 共同关注的功能方向

*   **Agent 稳定性与错误恢复 (所有工具)**
    *   **诉求：** 用户普遍抱怨子代理（Sub-agent）挂起、无限循环重试或状态丢失。
    *   **案例：** Claude Code 的 Opus 4.8 格式错误、Gemini CLI 的子代理成功误报、OpenCode 的压缩死循环、Qwen Code 的 TUI 冻结。
    *   **趋势：** 社区要求更严格的超时控制、明确的错误状态码以及“优雅降级”机制，而非静默失败。

*   **跨平台与底层系统兼容性 (Claude, Copilot, Qwen, DeepSeek)**
    *   **诉求：** Windows (特别是 ARM64/Snapdragon)、Linux (WSL/Wayland) 和 macOS 的行为不一致。
    *   **案例：** Claude Code 的 Windows 内存泄漏、Copilot 的剪贴板失效、Qwen 的 PowerShell 进程泄漏、DeepSeek 的 macOS 鼠标报告泄漏。
    *   **趋势：** 原生 ARM64 支持和 WSL 深度集成已成为高端开发的必选项，而非加分项。

*   **计费透明与 Token 效率 (OpenAI, OpenCode, Kimi)**
    *   **诉求：** 对 Token 异常消耗（如 gpt-5.5 燃烧过快）和定价策略调整（如 DeepSeek 降价后的同步）高度敏感。
    *   **案例：** OpenAI Codex 的 Rate Limit 成本激增、OpenCode 的 Pay Go 调整请求。
    *   **趋势：** 开发者需要更细粒度的预算监控工具和可解释的计费逻辑。

*   **安全与权限隔离 (Gemini, OpenCode, Qwen)**
    *   **诉求：** 防止敏感数据泄露（Thought Leakage）、路径遍历攻击以及配置越权。
    *   **案例：** Gemini 的 Thought Leakage 修复、Qwen 的 Source Slug 验证、OpenCode 的 MCP 令牌刷新范围。

## 4. 差异化定位分析

*   **企业级与生产力导向 (Claude Code, OpenAI Codex)**
    *   **定位：** 追求深度集成、长上下文能力和企业安全合规。
    *   **差异：** Claude Code 强调 MCP 生态和沉浸式编码体验，但受困于模型回归；OpenAI Codex 正通过默认启用远程插件和重构核心协议来巩固其作为“超级代理”的地位，但面临严重的计费信任危机。

*   **开源灵活性与本地化部署 (OpenCode, Pi, DeepSeek TUI)**
    *   **定位：** 提供高度可定制、支持多模型路由和本地优先的体验。
    *   **差异：** OpenCode 主打“Pay Go”灵活性和 TUI 体验，但在稳定性上挣扎；Pi 积极拓展“Library Mode”以嵌入其他应用；DeepSeek TUI 则通过快速集成新 Provider (OpenModel) 和清理技术债吸引极客用户。

*   **模型厂商原生生态 (Gemini CLI, Qwen Code, Kimi Code)**
    *   **定位：** 紧密绑定自家模型特性，强调最新技术落地。
    *   **差异：** Gemini CLI 侧重于 Agent 架构的自动化运维（Caretaker）和安全性；Qwen Code 正在向生产级 Daemon 模式（Mode B）演进，强调多模态和后台任务管理；Kimi Code 体量较小，专注于解决 API 兼容性和基础交互的稳定性。

*   **平台集成者 (GitHub Copilot CLI)**
    *   **定位：** 依托 GitHub 生态，强调代码仓库上下文和团队协作。
    *   **差异：** 核心痛点在于基础交互（剪贴板、拖拽）的稳定性，以及在子智能体并发控制上的探索。

## 5. 社区热度与成熟度

*   **高热度/高摩擦期 (OpenAI Codex, OpenCode, Claude Code)**
    *   这些工具用户基数大，因此对 Bug（特别是计费、崩溃）的反应最为剧烈。OpenAI Codex 的 Token 燃烧问题是当前最大的舆情爆点。OpenCode 因处于快速迭代期，稳定性问题频发，社区讨论极具建设性但也充满焦虑。

*   **稳健成长期 (Gemini CLI, Qwen Code)**
    *   社区关注点更多集中在功能完善（如 Gemini 的自动化、Qwen 的 Mode B 路线图）而非生存性 Bug。Gemini 的 Caretaker Agent 显示出其向自动化运维成熟的转变。

*   **早期/小众但活跃 (Kimi Code, DeepSeek TUI)**
    *   Kimi 社区虽小但反馈精准（如 API 参数序列化）；DeepSeek 社区表现出极高的参与感，愿意协助清理代码债和测试新功能。

## 6. 值得关注的趋势信号

1.  **“Agent 可靠性”成为新护城河：** 单纯的性能提升已不足以留住用户，**子代理的生命周期管理**、**状态持久化**和**错误恢复机制**（如 Gemini 的递归限制、Qwen 的会话流可恢复性）将是下一版本竞争的关键。
2.  **协议标准化与互操作性：** OpenAI Codex 推行 `TurnItem` 标准，Gemini 引入 MCP 图像 MIME 类型嗅探，这表明行业正在从私有协议向更开放、标准化的交互协议演进，以利于第三方工具集成。
3.  **本地化与边缘计算需求上升：** 随着对隐私和成本的担忧，用户更倾向于支持本地模型路由（如 Pi 的 Friendli 支持、Qwen 的本地后端建议跳过），CLI 工具正演变为混合云边缘节点。
4.  **开发者体验（DX）的细节决定成败：** 剪贴板失效、TUI 滚动卡顿、安装脚本错误等看似微小的问题，在 CLI 场景中会直接摧毁用户信任。各团队需将**端到端交互稳定性**置于与核心 AI 能力同等重要的地位。
5.  **自动化运维（DevOps）内嵌：** Gemini 的 Caretaker Agent 和 OpenCode 的自动化 Issue 清理，预示着 AI 工具本身也将具备自我维护和社区治理的能力，减轻核心团队的运营负担。

**建议：** 对于技术决策者，应优先评估工具在**长会话稳定性**和**企业网络环境兼容性**（代理、防火墙）方面的表现，而非仅关注模型智商。对于开发者，建议关注各工具最新的**Hook/MCP 配置最佳实践**，以规避因配置错误导致的 Agent 行为异常。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点分析报告
**数据截止：** 2026-06-27  
**分析师：** Agnes-2.0-Flash

## 1. 热门 Skills 排行（基于 PR 活跃度与功能影响力）

以下 PR 代表了当前社区对 Skill 质量、兼容性扩展及开发工具链的核心关注点：

1.  **Frontend Design Skill 优化 (PR #210)**
    *   **功能：** 重构前端设计 Skill，提升指令清晰度与可执行性，确保 Claude 能在单轮对话中准确遵循样式规范。
    *   **状态：** OPEN
    *   **热度：** 早期贡献者 Justin Wetch 推动，旨在解决“幻觉式”前端代码生成问题。
    *   [链接](https://github.com/anthropics/skills/pull/210)

2.  **Skill Creator 评估修复系列 (PR #1298, #1099, #1050)**
    *   **功能：** 集中修复 `skill-creator` 工具链中的关键 Bug，包括 Windows 下的子进程管道读取错误、YAML 解析失败导致的 Recall 为 0% 的问题。
    *   **状态：** OPEN
    *   **热度：** 多个独立 PR 指向同一核心痛点，显示开发者对自动优化 Skill 描述功能的强烈依赖与现有缺陷的焦虑。
    *   [链接](https://github.com/anthropics/skills/pull/1298) | [链接](https://github.com/anthropics/skills/pull/1099) | [链接](https://github.com/anthropics/skills/pull/1050)

3.  **PDF 与 DOCX 格式支持增强 (PR #538, #541)**
    *   **功能：** 修复 PDF Skill 中的大小写敏感引用错误；修复 DOCX Skill 中跟踪更改与书签 ID 冲突导致的文档损坏问题。
    *   **状态：** OPEN
    *   **热度：** 针对企业级文档处理场景的底层稳定性修复，由用户 Lubrsy706 主导。
    *   [链接](https://github.com/anthropics/skills/pull/538) | [链接](https://github.com/anthropics/skills/pull/541)

4.  **Testing Patterns Skill (PR #723)**
    *   **功能：** 引入全面的测试模式 Skill，涵盖单元测试、React 组件测试及测试哲学（如测试奖杯模型）。
    *   **状态：** OPEN
    *   **热度：** 填补了官方 Skill 库中关于“软件工程最佳实践”的空白，受到开发者高度期待。
    *   [链接](https://github.com/anthropics/skills/pull/723)

5.  **ODT/OpenDocument 支持 (PR #486)**
    *   **功能：** 新增对 LibreOffice 格式 (.odt, .ods) 的创建、填充及解析能力。
    *   **状态：** OPEN
    *   **热度：** 满足开源办公套件用户的特定需求，扩展了文档处理 Skill 的覆盖面。
    *   [链接](https://github.com/anthropics/skills/pull/486)

## 2. 社区需求趋势（基于 Issues 分析）

通过分析高评论数的 Issues，社区主要诉求集中在以下三个方向：

*   **信任边界与安全治理 (Security & Trust)：**
    *   Issue #492 指出社区技能冒用 `anthropic/` 命名空间的风险，引发对权限隔离和官方认证机制的担忧。
    *   Issue #412 提议增加 `agent-governance` Skill，用于实施策略执行和审计追踪，反映了对 AI Agent 在企业环境中合规性的迫切需求。
*   **协作与企业级部署 (Enterprise & Collaboration)：**
    *   Issue #228 强烈呼吁支持组织内 Skill 共享（Org-wide sharing），目前手动分发 `.skill` 文件的效率低下。
    *   Issue #189 指出插件安装导致重复 Skill 的问题，表明用户需要更清晰的依赖管理和去重机制。
*   **持久化记忆与上下文管理 (Memory & Context)：**
    *   Issue #154 和 #1329 聚焦于 `persistent memory` 和 `compact-memory`，用户希望 Claude 能在长周期任务中保持状态，减少上下文窗口浪费。这是从“单次交互”向“长期代理”演进的关键痛点。

## 3. 高潜力待合并 Skills

以下 PR 虽未合并，但具有明确的工程价值或解决了普遍痛点，近期被采纳的可能性较高：

1.  **Skill Quality Analyzer (PR #83)**
    *   **理由：** 提供了评估 Skill 质量的元工具（结构、文档、安全性等维度），有助于提升整个 Skill 库的标准。
    *   [链接](https://github.com/anthropics/skills/pull/83)

2.  **AppDeploy Skill (PR #360)**
    *   **理由：** 集成 AppDeploy.ai，实现从 Claude 直接部署全栈 Web 应用，极大地简化了开发工作流，具备极高的实用价值。
    *   [链接](https://github.com/anthropics/skills/pull/#360)

3.  **Codebase Inventory Audit (PR #147)**
    *   **理由：** 提供系统化的代码库清理和文档审计工作流，适合大型项目维护，解决了“技术债”可视化的需求。
    *   [链接](https://github.com/anthropics/skills/pull/147)

4.  **Document Typography Skill (PR #514)**
    *   **理由：** 解决 AI 生成文档中的排版细节问题（如孤行寡行），属于提升用户体验的精细化改进，易于被官方接受为标准文档 Skill 的一部分。
    *   [链接](https://github.com/anthropics/skills/pull/514)

## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求是：从“功能堆砌”转向“质量治理与生态安全”，用户亟需一套标准化的 Skill 评估体系、安全的组织内共享机制以及稳定的跨平台（Windows/Linux）开发工具链支持。**

---

# Claude Code 社区动态日报
**日期：** 2026-06-27  
**数据来源：** github.com/anthropics/claude-code

## 1. 今日速览
今日核心焦点在于 **Opus 4.8 模型在桌面端上下文窗口选项丢失** 的问题，大量用户报告 Max 计划下无法选择 1M 上下文，引发社区强烈关注。同时，v2.1.195 版本发布，引入了禁用全屏鼠标交互的新环境变量，并修复了 MCP Hook 匹配器的精确匹配问题。此外，Windows 平台的内存泄漏、ARM64 兼容性以及沙箱代理认证问题也是讨论热点。

## 2. 版本发布
**v2.1.195**
*   **新增功能：** 引入 `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` 环境变量，允许在全屏模式下禁用鼠标点击/拖拽/悬停，但保留滚轮滚动功能，旨在提升沉浸式编码体验。
*   **Bug 修复：** 修复了带有连字符标识符（如 `code-reviewer`, `mcp__brave-search`）的 Hook 匹配器错误地执行子字符串匹配的问题，现改为精确匹配，防止意外的 Hook 触发。
    *   [GitHub Release Link](https://github.com/anthropics/claude-code/releases/tag/v2.1.195) *(注：基于常规 GitHub 格式推断)*

## 3. 社区热点 Issues
以下 Issue 因评论数高、影响面广或涉及关键功能回归而备受关注：

1.  **[BUG] Max 计划 Opus 4.8 缺少 1M 上下文选项 (重复报告)**
    *   **ID:** #68287 / #36351 / #69109 / #69444
    *   **重要性：** 多个独立 Issue 指向同一问题，显示这是当前最高优先级的回归 Bug。用户反馈在 v1.1.7714 更新后，Max 计划下的 Opus 4.8 仅显示 256k 上下文，导致长上下文优势无法发挥。
    *   **社区反应：** 高点赞，情绪焦虑，尤其是付费 Max 用户。
    *   [Issue #68287](https://github.com/anthropics/claude-code/issues/68287)

2.  **[BUG] Opus 4.8 反复生成格式错误的 tool_use 块**
    *   **ID:** #63604
    *   **重要性：** 直接导致响应被丢弃，严重影响代码生成的可用性。相比之下，4.7 版本正常，确认为 4.8 特定回归。
    *   **社区反应：** 高点赞（14👍），开发者受阻严重。
    *   [Issue #63604](https://github.com/anthropics/claude-code/issues/63604)

3.  **[BUG] Cowork 在 ARM64 (Snapdragon X) 上失败**
    *   **ID:** #50674
    *   **重要性：** 随着 Windows on ARM 设备普及，此 Bug 阻碍了主流硬件上的协作功能使用。尽管预检通过，但实际运行崩溃。
    *   **社区反应：** 30 条评论，长期未解决，用户等待原生 ARM 支持完善。
    *   [Issue #50674](https://github.com/anthropics/claude-code/issues/50674)

4.  **[BUG] Claude Desktop 导致 Windows NTFS NonPaged Pool 内核内存泄漏**
    *   **ID:** #45889
    *   **重要性：** 严重的系统级稳定性问题。报告称内存以 ~0.5GB/分钟的速度泄漏，可能导致系统崩溃。虽标记为 Closed，但用户暗示问题可能复发或未被彻底根除。
    *   [Issue #45889](https://github.com/anthropics/claude-code/issues/45889)

5.  **[BUG] 沙箱 SOCKS5 代理认证导致 Git SSH 操作失败**
    *   **ID:** #70684
    *   **重要性：** 在使用企业代理或特定网络环境时，沙箱模式下的 Git 克隆/推送完全失效。BSD netcat 无法协商认证，属于基础设施兼容性问题。
    *   **社区反应：** 高点赞（12👍），对安全/网络受限环境用户影响巨大。
    *   [Issue #70684](https://github.com/anthropics/claude-code/issues/70684)

6.  **[BUG] 浏览器扩展阻止合法金融网站自动化**
    *   **ID:** #40173
    *   **重要性：** Claude-in-Chrome 扩展默认屏蔽银行域名，影响了金融自动化工作流。用户请求更细粒度的控制或白名单机制。
    *   [Issue #40173](https://github.com/anthropics/claude-code/issues/40173)

7.  **[BUG] 插件路径硬编码导致跨环境失败**
    *   **ID:** #31388
    *   **重要性：** 影响 Linux/WSL 用户在不同项目间切换时的插件加载，破坏了开发环境的可移植性。
    *   [Issue #31388](https://github.com/anthropics/claude-code/issues/31388)

8.  **[BUG] 自动压缩功能对第三方 API 提供商失效**
    *   **ID:** #65585
    *   **重要性：** 自 v2.1.161 起回归，影响使用非 Anthropic 后端用户的成本控制和上下文管理。
    *   [Issue #65585](https://github.com/anthropics/claude-code/issues/65585)

9.  **[BUG] Code 会话历史记录在重启后静默丢失**
    *   **ID:** #71729
    *   **重要性：** 数据持久性严重缺陷。用户关闭 Claude Desktop 后，之前交换的消息完全消失，且 AI 无法检测到这一断层，导致上下文混乱。
    *   [Issue #71729](https://github.com/anthropics/claude-code/issues/71729)

10. **[BUG] 子代理同步/异步行为不可控**
    *   **ID:** #69691
    *   **重要性：** `run_in_background: false` 未被可靠执行，导致子代理结果丢失或时序混乱，影响复杂 Agent 编排的可靠性。
    *   [Issue #69691](https://github.com/anthropics/claude-code/issues/69691)

## 4. 重要 PR 进展
由于过去24小时内更新的 PR 数量较少（仅2条），以下列出相关的重要文档与合并记录：

1.  **[docs] 明确提示批准的主机是会话范围的**
    *   **ID:** #71627
    *   **内容：** 更新了 `examples/settings/README.md`，指出 `prompt-approved hosts` 是会话级别的（session-scoped），重启后会丢失。这有助于用户理解沙箱网络策略的局限性。
    *   [PR #71627](https://github.com/anthropics/claude-code/pull/71627)

2.  **[Merge] 主分支合并**
    *   **ID:** #71530
    *   **内容：** 常规维护合并，具体变更需查看 commit 历史，通常包含日常 Bug 修复和依赖更新。
    *   [PR #71530](https://github.com/anthropics/claude-code/pull/71530)

*(注：由于 PR 列表有限，此处仅展示当日活跃条目。建议关注官方 Release Notes 获取更详细的代码级变更。)*

## 5. 功能需求趋势
从 Issues 中提取的社区主要需求方向：

*   **模型上下文管理的稳定性：** 社区极度关注长上下文（1M tokens）功能的可用性和稳定性，任何导致该功能不可用的回归都被视为严重 Bug。
*   **跨平台兼容性深化：** 除了 macOS 和 Windows x64，用户对 **ARM64 (Snapdragon X)** 和 **Linux/WSL** 的原生支持有强烈需求，特别是 Cowork 功能和插件系统的兼容性。
*   **企业网络与安全策略适配：** 用户希望更好地支持代理环境（SOCKS5 认证）、白名单机制（金融网站）以及更灵活的沙箱网络配置。
*   **远程协作与控制：** 存在对“纯远程”控制本地会话的需求（无需本地访问即可接管），以及希望在 Desktop 应用中实现 CLI 级别的实时消息注入（Steering）功能。

## 6. 开发者关注点
*   **Windows 稳定性：** 内存泄漏（Kernel Pool Leak）和会话历史丢失是两个最令人担忧的稳定性问题，直接影响生产环境使用信心。
*   **MCP 与插件生态：** Hook 匹配器的 Bug 修复表明开发者正在广泛使用高级 MCP 配置，他们对配置的精确性和可靠性要求极高。
*   **多字节字符支持：** 泰语等复杂 UTF-8 字符在 TUI 输入中被截断的问题，反映了国际化和本地化测试的不足，影响了非英语母语开发者的体验。
*   **认证流程：** OAuth 在 Windows 上凭证文件写入失败导致的 401 循环，显示了身份验证模块在特定 OS 权限场景下的脆弱性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：** 2026-06-27
**分析师：** Agnes-2.0-Flash

## 1. 今日速览
今日社区焦点高度集中在 **API 速率限制异常消耗** 问题上，多个高热度 Issue 反映 `gpt-5.5` 模型在 Plus 和 Pro 计划下出现 10-20 倍的 Token 成本激增，导致预算迅速耗尽。同时，Codex CLI 发布了维护性补丁 `v0.142.3` 及 Alpha 测试版 `v0.143.0-alpha.26`，核心开发团队正在推进远程插件默认启用、WebSocket 认证增强以及会话状态持久化的底层重构。

## 2. 版本发布
*   **rust-v0.142.3**: 纯维护性补丁发布，自 0.142.2 以来无面向用户的功能变更，主要涉及内部稳定性修复。
    *   [Changelog](https://github.com/openai/codex/compare/rust-v0.142.2...rust-v0.142.3)
*   **rust-v0.143.0-alpha.26**: 新的 Alpha 预发布版本，通常包含即将合并的实验性功能或重大架构调整。
    *   [Release Page](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.26)

## 3. 社区热点 Issues
以下 Issue 因评论数多、点赞高或涉及严重稳定性问题而备受关注：

1.  **[Bug] Token 燃烧极快 (Issue #14593)**
    *   **重要性：** 历史遗留的高频问题，持续反映用户在 Business 计划下遭遇意外的 Token 快速消耗。
    *   **社区反应：** 624 条评论，274 个赞，表明该问题长期未得到根本解决，用户焦虑度高。
    *   [链接](https://github.com/openai/codex/issues/14593)

2.  **[Bug] gpt-5.5 速率限制成本激增 10-20 倍 (Issue #28879)**
    *   **重要性：** 直接关联最新模型 `gpt-5.5`，报告自 6 月 16 日起 Plus 计划用户的 5 小时预算在 2-3 次提示后耗尽。这是今日最紧急的技术故障报告。
    *   **社区反应：** 175 条评论，326 个赞，大量用户确认相同现象。
    *   [链接](https://github.com/openai/codex/issues/28879)

3.  **[Bug] macOS code_sign_clone 目录无限增长至 62GB+ (Issue #27536)**
    *   **重要性：** 严重的资源泄漏 Bug，影响 macOS 用户体验，可能导致磁盘空间不足。
    *   **社区反应：** 虽评论较少，但问题描述具体且影响严重，已关闭但仍具警示意义。
    *   [链接](https://github.com/openai/codex/issues/27536)

4.  **[Bug] 升级 PRO 后仍显示 "Out of Codex messages" (Issue #18357)**
    *   **重要性：** 订阅权益与客户端状态不同步，直接影响付费用户体验。
    *   **社区反应：** 9 条评论，5 个赞。
    *   [链接](https://github.com/openai/codex/issues/18357)

5.  **[Bug] 5 小时使用量在无操作情况下异常减少 (Issue #30310)**
    *   **重要性：** 进一步佐证了 Rate Limit 计费的混乱，用户反映未运行任务却消耗配额。
    *   **社区反应：** 3 条评论。
    *   [链接](https://github.com/openai/codex/issues/30310)

6.  **[Bug] CLI 在 Intel macOS 上崩溃 (SIGTRAP) (Issue #29000)**
    *   **重要性：** 特定硬件架构下的稳定性问题，阻碍 Intel Mac 用户使用 CLI。
    *   **社区反应：** 16 条评论，11 个赞。
    *   [链接](https://github.com/openai/codex/issues/29000)

7.  **[Bug] MCP stdio 服务器泄漏管道文件描述符导致 EMFILE (Issue #26984)**
    *   **重要性：** 内存/文件句柄泄漏，长时间运行的 CLI 会话会因打开文件过多而失败。
    *   **社区反应：** 5 条评论。
    *   [链接](https://github.com/openai/codex/issues/26984)

8.  **[Enhancement] 请求代理后台事件唤醒机制 (Issue #29922)**
    *   **重要性：** 针对 Codex 当前“轮询驱动”模式的痛点，提出更高效的 Agent 交互模式。
    *   **社区反应：** 4 条评论，代表高级用户的工作流优化需求。
    *   [链接](https://github.com/openai/codex/issues/29922)

9.  **[Bug] 存档聊天页面为空 (Issue #30312)**
    *   **重要性：** 数据持久化与 UI 展示不一致，用户丢失历史记录视图。
    *   **社区反应：** 3 条评论。
    *   [链接](https://github.com/openai/codex/issues/30312)

10. **[Bug] 图片粘贴失败 ('no image on clipboard') (Issue #30305)**
    *   **重要性：** 基础多模态功能在 Windows 端失效，影响调试和代码演示。
    *   **社区反应：** 4 条评论。
    *   [链接](https://github.com/openai/codex/issues/30305)

## 4. 重要 PR 进展
1.  **[codex] Enable remote plugins by default (PR #30297)**
    *   **内容：** 将远程插件功能从“开发中”提升为“稳定”，并默认开启。这标志着 Codex 插件生态正式进入大规模应用阶段。
    *   [链接](https://github.com/openai/codex/pull/30297)

2.  **[codex] Add generated token auth to app-server WebSockets (PR #30315)**
    *   **内容：** 增强 WebSocket 连接安全性，自动生成 256 位安全令牌进行认证，减少配置复杂度并提升安全性。
    *   [链接](https://github.com/openai/codex/pull/30315)

3.  **feat(core): emit more turn items instead of legacy begin/end events (PR #30283)**
    *   **内容：** 核心协议重构，将命令执行、动态工具调用等统一为标准 `TurnItem` 格式，取代旧的 Begin/End 事件模式，提高数据结构的一致性。
    *   [链接](https://github.com/openai/codex/pull/30283)

4.  **feat(rollout): persist canonical items for paginated threads (PR #30188)**
    *   **内容：** 配合上述 PR #30283，实现分页线程中对标准 `TurnItem` 快照的持久化存储，优化长会话的数据库读写性能。
    *   [链接](https://github.com/openai/codex/pull/30188)

5.  **fix(remote-control): avoid server token refresh retry storms (PR #30201)**
    *   **内容：** 修复远程控制在 Token 刷新遇到瞬态错误（如 502）时的重试风暴问题，提升连接稳定性。
    *   [链接](https://github.com/openai/codex/pull/30201)

6.  **core: trace executor skill discovery (PR #30318)**
    *   **内容：** 增加技能加载过程的追踪指标（Spans），帮助开发者定位技能发现阶段的性能瓶颈。
    *   [链接](https://github.com/openai/codex/pull/30318)

7.  **Guardian Policy Update (PR #30320)**
    *   **内容：** 更新安全策略提示模板，明确沙箱限制不适用于审查后的模型，并强化对低严重性违规操作的拦截。
    *   [链接](https://github.com/openai/codex/pull/30320)

8.  **[codex] Add retired model compaction repro (PR #30319)**
    *   **内容：** 添加集成测试，复现模型退役后的压缩行为，确保后端 400 错误处理逻辑正确。
    *   [链接](https://github.com/openai/codex/pull/30319)

9.  **Preserve namespaces on custom tool calls (PR #30302)**
    *   **内容：** 修复自定义工具调用中的命名空间保留问题，确保流式传输和重放时的参数处理正确。
    *   [链接](https://github.com/openai/codex/pull/30302)

10. **[codex] Add caller-provided Codex auth (PR #29652)**
    *   **内容：** 新增内存中调用者提供的认证模式，赋予外部集成更灵活的运行时能力控制。
    *   [链接](https://github.com/openai/codex/pull/29652)

## 5. 功能需求趋势
*   **插件生态标准化：** 通过 PR #30297 默认启用远程插件，社区对扩展 Codex 能力的需求强烈，特别是浏览器控制和计算机使用插件的稳定性（如 Issue #28703, #30270）。
*   **协议与数据一致性：** 大量 PR (#30283, #30188, #30282) 聚焦于核心协议的重构，将非标准化的事件流转换为统一的 `TurnItem`，旨在提高数据持久化和回放的可预测性。
*   **远程协作与网络优化：** 对 WebSocket 认证 (#30315)、TCP_NODELAY 优化 (#30269) 以及远程会话恢复 (#30301) 的关注，反映出用户对高并发、低延迟远程协作场景的需求。

## 6. 开发者关注点
*   **计费透明度与公平性：** 这是当前最大的痛点。用户普遍反映 `gpt-5.5` 模型的 Token 消耗速率异常，导致预算在短时间内耗尽，且缺乏清晰的解释或补偿机制。
*   **平台特异性 Bug：** Windows 和 macOS (尤其是 Intel Mac) 用户报告了大量环境相关的问题，包括沙箱权限、路径解析（WSL 混合模式）、浏览器插件安装以及剪贴板功能失效。
*   **资源泄漏与性能：** 除了 Token 消耗，本地资源的泄漏（如 macOS 的 `code_sign_clone` 目录、MCP 的文件描述符泄漏）也是开发者重点监控和抱怨的方向。
*   **CLI 功能完善：** 用户对 CLI 的记忆管理 (#30299)、Base URL 配置灵活性 (#28902) 以及更细粒度的会话控制有持续的需求。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：** 2026-06-27
**数据来源：** github.com/google-gemini/gemini-cli

## 1. 今日速览
今日 Gemini CLI 无新 Release 发布，但社区活跃度极高，核心焦点集中在 **Agent 稳定性修复**（如子代理恢复、挂起问题）与 **安全机制强化**（敏感路径拦截、OAuth 兼容修复）。开发团队正大力构建自动化运维体系（Caretaker Agent），并着手解决递归推理无限循环及 Thought Leakage 等深层架构问题。

## 2. 版本发布
*   **无新正式版发布。**
*   夜间构建版本已更新至 `0.51.0-nightly.20260626.gb14416447` (PR #28158)。

## 3. 社区热点 Issues
以下 Issue 因高关注度、P1/P2 优先级或关键 Bug 属性被重点筛选：

1.  **[Bug] 子代理在达到最大轮次后错误报告成功** (#22323)
    *   **重要性：** `codebase_investigator` 在未完成分析且触发限制时仍返回 `GOAL` 成功状态，导致主代理误判，掩盖了实际的中断原因。
    *   **链接：** [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
2.  **[Bug] 通用代理永久挂起** (#21409)
    *   **重要性：** P1 级严重 Bug，简单操作（如创建文件夹）导致代理无限等待，严重影响用户体验。
    *   **链接：** [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
3.  **[Bug] 浏览器子代理在 Wayland 下失败** (#21983)
    *   **重要性：** 涉及 Linux 桌面环境兼容性，导致 Web 自动化任务中断。
    *   **链接：** [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
4.  **[Bug] Shell 命令执行后卡死在“等待输入”** (#25166)
    *   **重要性：** 即使是无需交互的简单命令也导致状态挂起，阻塞后续工作流。
    *   **链接：** [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
5.  **[Feature] 评估 AST 感知文件读取的价值** (#22745)
    *   **重要性：** 旨在通过更精确的方法边界读取减少 Token 消耗和轮次，提升代码理解效率。
    *   **链接：** [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
6.  **[Bug] 浏览器代理忽略 settings.json 配置覆盖** (#22267)
    *   **重要性：** 用户自定义配置（如 `maxTurns`）失效，表明配置合并逻辑存在缺陷。
    *   **链接：** [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)
7.  **[Bug] 自动记忆系统无限重试低信号会话** (#26522)
    *   **重要性：** 导致资源浪费和潜在的死循环，需优化会话处理逻辑。
    *   **链接：** [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)
8.  **[Enhancement] 增强浏览器代理韧性：会话接管与锁恢复** (#22232)
    *   **重要性：** 针对持久化模式下的进程冲突提出改进方案，提升稳定性。
    *   **链接：** [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232)
9.  **[Bug] 代理频繁在随机位置创建临时脚本** (#23571)
    *   **重要性：** 产生大量垃圾文件，增加清理负担，影响工作区整洁度。
    *   **链接：** [Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)
10. **[Bug] 工具数量超过 128 个时出现 400 错误** (#24246)
    *   **重要性：** 暴露了 API 调用时的上下文或参数长度限制问题，限制了复杂技能集的扩展。
    *   **链接：** [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

## 4. 重要 PR 进展
以下 PR 涵盖了核心功能修复、安全加固及基础设施改进：

1.  **[Feat] 实现 Caretaker Egress Cloud Run 服务** (#28167)
    *   **内容：** 部署自动化运维服务，通过 Pub/Sub 接收事件并执行 GitHub 操作，提升项目维护自动化水平。
    *   **链接：** [PR #28167](https://github.com/google-gemini/gemini-cli/pull/28167)
2.  **[Fix] 限制单用户请求的递归推理轮次** (#28164)
    *   **内容：** 引入严格的 15 轮递归限制（可配置），防止无限循环消耗本地 CPU 和 API 配额。
    *   **链接：** [PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164)
3.  **[Fix] 解决 Thought Leakage 问题** (#27971)
    *   **内容：** 修复内部思维过程泄露至明文历史记录的问题，避免模型混淆或陷入自我对话循环。
    *   **链接：** [PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971)
4.  **[Fix] 防御性路径解析修复 (@ 前缀文件)** (#28053)
    *   **内容：** 解决当模型使用 `@` 引用文件时出现的“文件未找到”错误，并修复 macOS 测试。
    *   **链接：** [PR #28053](https://github.com/google-gemini/gemini-cli/pull/28053)
5.  **[Fix] 强制区分大小写的敏感路径黑名单** (#27966)
    *   **内容：** 封堵通过大小写混淆绕过 `.git`、`.env` 等敏感目录拦截的安全漏洞。
    *   **链接：** [PR #27966](https://github.com/google-gemini/gemini-cli/pull/27966)
6.  **[Fix] 修复 OAuth 令牌交换中的 Keep-Alive 问题** (#28103)
    *   **内容：** 解决因 Node.js 安全补丁导致的 OAuth 登录失败（Premature close），确保认证流程稳定。
    *   **链接：** [PR #28103](https://github.com/google-gemini/gemini-cli/pull/28103)
7.  **[Fix] 防止 $ 模式在提示符替换中损坏** (#28013)
    *   **内容：** 修复 `String.replace` 中 `$` 特殊字符未被正确转义导致的提示词注入或格式错误。
    *   **链接：** [PR #28013](https://github.com/google-gemini/gemini-cli/pull/28013)
8.  **[Fix] 同步无 fs.watch 事件的文件系统分支名** (#28012)
    *   **内容：** 修复 WSL 和网络共享环境下 Footer 分支名称不更新的问题。
    *   **链接：** [PR #28012](https://github.com/google-gemini/gemini-cli/pull/28012)
9.  **[Feat] 添加 `gemini models` 命令** (#27848)
    *   **内容：** 允许用户列出可用模型、上下文窗口限制及层级（Pro/Flash），支持 JSON 输出。
    *   **链接：** [PR #27848](https://github.com/google-gemini/gemini-cli/pull/27848)
10. **[Fix] 嗅探 MCP 图像 MIME 类型** (#27850)
    *   **内容：** 修正 MCP 协议中图像 MIME 类型声明与实际二进制数据不符的问题（如 WebP 被误报为 PNG）。
    *   **链接：** [PR #27850](https://github.com/google-gemini/gemini-cli/pull/27850)

## 5. 功能需求趋势
*   **自动化运维 (DevOps Integration)：** 通过 `Caretaker Agent` 和 Cloud Run 服务的引入，显示团队致力于将项目维护、Issue 分类和响应自动化。
*   **安全性与隐私 (Security & Privacy)：** 对敏感路径拦截、Thought Leakage 防护、OAuth 兼容性以及 AST 感知读取的关注度持续上升，强调在生产环境中运行的安全性。
*   **Agent 鲁棒性 (Agent Robustness)：** 社区强烈希望解决子代理挂起、配置忽略、无限重试等稳定性问题，提升 Agent 在实际复杂场景下的可靠性。
*   **可观测性与调试 (Observability)：** 对 Bug Report 中缺乏子代理上下文、Telemetry 缓冲等问题的反馈，表明开发者需要更透明的调试信息和日志支持。

## 6. 开发者关注点
*   **稳定性痛点：** “挂起”、“无限循环”和“配置失效”是开发者反馈中最高频的崩溃场景，特别是涉及子代理（Subagent）和浏览器自动化时。
*   **环境兼容性：** WSL、Wayland、macOS 以及不同 Node.js 版本（特别是涉及安全补丁的版本）下的行为不一致引发了较多 Issue。
*   **资源管理：** 开发者关注 Token 消耗效率（AST 感知）、本地 CPU 占用（递归限制）以及临时文件清理问题。
*   **工作流中断：** 外部编辑器退出后的终端缓冲区损坏、分支名不同步等问题直接打断编码流，急需修复。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：** 2026-06-27  
**数据源：** github.com/github/copilot-cli

## 1. 今日速览
GitHub Copilot CLI 于昨日发布了 v1.0.66-1，主要引入了子智能体并发控制、技能草稿审查机制及桌面通知功能。社区当前高度关注跨平台剪贴板同步失效（Linux/Windows）、子智能体上下文泄露以及 `web_fetch` 网络请求失败等稳定性问题，多个高热度 Issue 持续发酵。

## 2. 版本发布
**v1.0.66-1**
*   **配置增强**：在 `/settings` 中新增对子智能体（subagent）并发数和深度的限制配置，主要针对基于用量计费的账户。
*   **技能管理**：新增 `/chronicle skills review` 命令，允许开发者审查提议的技能草稿，并支持接受、拒绝或推迟操作。
*   **交互体验**：增加了对注意力提示和空闲会话的桌面通知支持，提升后台任务可见性。

## 3. 社区热点 Issues
以下 Issue 因涉及核心功能缺陷、高关注度或广泛复现而被选中：

1.  **[Bug] Linux 下 Ctrl+Shift+C 无法复制文本** (#2082)
    *   **重要性**：影响 Linux 用户的核心交互体验，已持续数月，点赞数高达 10，社区呼声强烈。
    *   **状态**：OPEN | 作者: MasonMcV | [链接](https://github.com/github/copilot-cli/issues/2082)
2.  **[Bug] `explore` 工具硬编码模型，忽略自定义配置** (#3954)
    *   **重要性**：导致使用 DeepSeek 等自定义模型的用户在探索模式下报错或产生额外费用，直接破坏配置意图。
    *   **状态**：OPEN | 作者: Aferrara3 | [链接](https://github.com/github/copilot-cli/issues/3954)
3.  **[Bug] macOS 拖拽文件附件功能回归失败** (#3955)
    *   **重要性**：macOS 原生应用的核心交互功能失效，属于近期引入的回归错误。
    *   **状态**：OPEN | 作者: kayone007 | [链接](https://github.com/github/copilot-cli/issues/3955)
4.  **[Bug] 子智能体转录本无限内联导致上下文溢出** (#3944)
    *   **重要性**：指出子智能体的完整工具调用输出被无限制地嵌入父会话导出中，可能导致 Token 耗尽或性能问题。
    *   **状态**：OPEN | 作者: kapral18 | [链接](https://github.com/github/copilot-cli/issues/3944)
5.  **[Bug] 剪贴板在 Windows 11 上无效** (#3949)
    *   **重要性**：与 Linux 问题类似，Windows 用户反馈 Copilot 声称已复制但实际剪贴板为空，严重影响工作流。
    *   **状态**：OPEN | 作者: credmond | [链接](https://github.com/github/copilot-cli/issues/3949)
6.  **[Bug] 记忆泄漏：仓库间上下文混淆** (#3945)
    *   **重要性**：在新创建的空白仓库中，Copilot 仍引用其他仓库的记忆信息，表明内存隔离机制存在严重缺陷。
    *   **状态**：OPEN | 作者: laeubi | [链接](https://github.com/github/copilot-cli/issues/3945)
7.  **[Bug] 自定义指令泄漏至仓库分析中** (#3946)
    *   **重要性**：全局自定义指令错误地被当作特定仓库的事实进行推理，干扰代码分析的准确性。
    *   **状态**：OPEN | 作者: laeubi | [链接](https://github.com/github/copilot-cli/issues/3946)
8.  **[Bug] `web_fetch` 工具普遍失败** (#3948)
    *   **重要性**：网络抓取功能完全不可用，且排除代理设置问题，疑似底层依赖或权限配置故障。
    *   **状态**：OPEN | 作者: credmond | [链接](https://github.com/github/copilot-cli/issues/3948)
9.  **[Feature] 允许暂停 Copilot 工作** (#1928)
    *   **重要性**：用户希望在中途纠正方向时能“暂停”而非强行提交，以更好地控制长会话流程。
    *   **状态**：OPEN | 作者: laeubi | [链接](https://github.com/github/copilot-cli/issues/1928)
10. **[Bug] 主题系统回归：浅色模式背景冲突** (#3947)
    *   **重要性**：v1.0.64 引入的渲染回归导致 Alt-screen 背景强制覆盖终端颜色，影响可读性。
    *   **状态**：CLOSED (但提及为回归问题) | 作者: ZacharyHenkel | [链接](https://github.com/github/copilot-cli/issues/3947)

## 4. 重要 PR 进展
*注：过去24小时内更新的 PR 数量较少，仅展示唯一一条相关记录。*

1.  **[WIP] 添加 macOS 安装说明到 README.md** (#570)
    *   **内容**：由 Copilot 自身协助维护的文档更新，旨在完善 macOS 平台的安装指引。
    *   **状态**：CLOSED (可能为自动合并或归档) | 作者: Copilot | [链接](https://github.com/github/copilot-cli/pull/570)

## 5. 功能需求趋势
从 Issue 讨论中可提炼出以下社区关注焦点：
*   **平台兼容性与稳定性**：Linux 和 Windows 的剪贴板集成、macOS 的文件拖拽交互是当前的主要痛点，反映出多端一致性测试的不足。
*   **细粒度控制与隔离**：用户强烈要求更严格的子智能体资源限制（并发/深度）以及更干净的上下文隔离（记忆不跨库泄漏、指令不越界）。
*   **自定义模型支持**：`explore` 等内置工具应尊重用户的模型配置，而非硬编码默认模型，这对使用非 OpenAI 模型的企业用户至关重要。
*   **网络能力修复**：`web_fetch` 的稳定运行是 Agent 执行复杂任务的基础，其频繁报错引发了大量反馈。

## 6. 开发者关注点
*   **输入输出交互信任度**：剪贴板失效、文件拖拽无响应等问题直接破坏了用户对 CLI 基础交互的信任，需优先修复。
*   **Agent 行为的确定性**：子智能体转录本过大、记忆泄漏、指令污染等现象表明，当前 Agent 系统的状态管理和边界控制尚不成熟，开发者期待更透明的控制选项（如暂停、审查）。
*   **配置生效范围**：用户期望全局设置（如模型、指令）仅在预期范围内生效，不希望出现配置被忽略或错误继承的情况。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：** 2026-06-27

## 1. 今日速览
今日 Kimi Code CLI 无新版本发布，但社区活跃度集中在 Bug 修复与文档完善上。主要焦点在于解决 `kimi-for-coding` 模型在特定环境下的 403 权限错误，以及 Plan Mode 状态同步异常的问题。此外，开发者提交了关于 API 调用逻辑优化及贡献指南完善的 Pull Request，显示出社区对稳定性与易用性的持续改进意愿。

## 2. 版本发布
*   **无新版本发布。**

## 3. 社区热点 Issues
*(注：数据源仅提供 3 条近期 Issue，以下基于现有数据进行重点分析)*

1.  **[CLOSED] 403 Kimi For Coding 权限错误 (#2425)**
    *   **重要性：** ⭐⭐⭐⭐⭐ 该问题涉及核心模型 `kimi-for-coding` 的可用性，报错“仅适用于 Coding Agents”，导致用户无法正常使用基础功能。
    *   **状态：** 已关闭，表明团队已介入处理或确认了配置/兼容性问题。
    *   **社区反应：** 10 条评论，3 个 👍，显示多位开发者受影响并关注此问题的解决。
    *   **链接：** [Issue #2425](https://github.com/MoonshotAI/kimi-cli/issues/2425)

2.  **[OPEN] Plan Mode 状态不一致 (#2478)**
    *   **重要性：** ⭐⭐⭐⭐ Plan Mode 是高级交互功能，系统提示处于 Plan 模式但执行 `ExitPlanMode` 却报错，属于严重的状态机 Bug，阻碍工作流闭环。
    *   **状态：** 开放中。
    *   **社区反应：** 刚提交，暂无点赞，但逻辑矛盾明显，需尽快修复。
    *   **链接：** [Issue #2478](https://github.com/MoonshotAI/kimi-cli/issues/2478)

3.  **[OPEN] Double Enter Key & `/sessions` 反馈丢失 (#2477)**
    *   **重要性：** ⭐⭐⭐ 涉及输入体验（双回车）和会话管理（反馈丢失），影响用户体验的流畅性和数据完整性。
    *   **状态：** 开放中。
    *   **社区反应：** 刚提交，暂无互动。
    *   **链接：** [Issue #2477](https://github.com/MoonshotAI/kimi-cli/issues/2477)

## 4. 重要 PR 进展

1.  **fix(kosong): 优化 thinking 关闭时的参数传递 (#2476)**
    *   **内容：** 修复当 `thinking` 设置为 "off" 时，SDK 将 `reasoning_effort` 序列化为 `null` 而非省略该字段的问题。这可能导致后端 API 解析错误或性能开销。
    *   **意义：** 提升 API 调用的规范性和兼容性，确保不同后端实现能正确处理“不思考”模式。
    *   **链接：** [PR #2476](https://github.com/MoonshotAI/kimi-cli/pull/2476)

2.  **docs(readme): 增加开发前置条件列表 (#2287)**
    *   **内容：** 在 `README.md` 的 `Development` 章节顶部添加了 `Prerequisites` 子节，明确列出运行 `make prepare` 前需要安装的依赖。
    *   **意义：** 降低新贡献者的入门门槛，减少因环境配置缺失导致的无效 Issue 和 PR 讨论。
    *   **链接：** [PR #2287](https://github.com/MoonshotAI/kimi-cli/pull/2287)

## 5. 功能需求趋势
基于当前 Issue 和 PR 分析，社区关注点呈现以下趋势：
*   **API 兼容性与健壮性：** 开发者高度关注底层 SDK 调用细节（如 PR #2476 中的 `null` 值处理），表明用户对 CLI 与后端模型交互的稳定性要求极高。
*   **状态管理与交互逻辑：** Plan Mode 的状态同步问题（Issue #2478）反映出复杂交互模式下的状态追踪仍是痛点，社区期待更可靠的会话状态管理。
*   **开发者体验（DX）：** 通过完善文档（PR #2287）来辅助开发，显示社区希望建立更清晰的贡献路径，同时也暗示现有文档可能存在缺失。

## 6. 开发者关注点
*   **核心模型可用性：** `kimi-for-coding` 的 403 错误是近期最受关注的问题，尽管已关闭，但其背后可能隐含的身份验证或配额配置机制仍需留意。
*   **边缘情况处理：** 用户在使用 `ExitPlanMode` 或处理键盘输入（Double Enter）时遇到的异常，表明测试覆盖在边界条件下仍有不足。
*   **环境一致性：** 从 Issue #2477 可见，Linux 环境下的具体行为（如 Ubuntu 24.04）也是用户反馈的重点区域，跨平台兼容性需持续保障。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：** 2026-06-27
**数据来源：** github.com/anomalyco/opencode

## 1. 今日速览
过去24小时内，OpenCode 社区活跃度极高，共更新50个 Issues 和20个 PR。**核心焦点**集中在解决会话压缩（Compaction）导致的无限循环与状态卡死问题，以及针对特定模型（如 Qwen 3.7, GLM-5.2）的工具调用兼容性修复。此外，关于“Pay Go”订阅模式的功能性调整（DeepSeek V4 Pro 降价适配）和支付渠道扩展（加密货币）引发了大量讨论。桌面端用户体验（UX）方面，针对文件路径交互、Question 工具遮挡及本地化问题进行了多项修复。

## 2. 版本发布
**无新版本发布。**
过去24小时内未检测到新的 Release 版本。当前社区主要围绕现有版本（v1.16.x - v1.17.x）进行 Bug 修复和功能请求。

## 3. 社区热点 Issues
以下挑选了 10 个最具代表性的 Issue，反映了当前社区的核心痛点：

1.  **[FEATURE] 调整 Go 订阅用量以反映 DeepSeek V4 Pro 降价** (#28846)
    *   **重要性：** 直接关联商业策略与用户成本。DeepSeek V4 Pro 价格永久降低 75%，用户强烈建议同步调整 OpenCode 的计费限额。
    *   **社区反应：** 极高关注度，82 个赞，84 条评论，已关闭但争议仍在持续。
2.  **[FEATURE] Pay Go 支持加密货币支付** (#23153)
    *   **重要性：** 满足隐私导向或特定区域用户的需求，拓展支付渠道。
    *   **社区反应：** 23 个赞，12 条评论，处于开放状态。
3.  **[BUG] 截断的工具调用导致死循环 (finishReason: length)** (#18108)
    *   **重要性：** 这是一个严重的代理稳定性问题。当 LLM 输出被截断时，系统错误分类并进入不可恢复的重试循环，导致任务失败。
    *   **社区反应：** 7 条评论，2 个赞，已更新。
4.  **[BUG] Bedrock Mantle 返回空响应导致任务中断** (#31430)
    *   **重要性：** 影响使用 AWS Bedrock 用户的稳定性，空成功响应未被正确处理，导致 Agent 中途停止且无报错。
    *   **社区反应：** 5 条评论，已关闭（可能已合并修复）。
5.  **[BUG] 无限会话压缩循环 (Infinite compaction loop)** (#31152)
    *   **重要性：** 严重性能/Bug。即使在新会话中输入 "hi"，系统也会触发无限的上下文压缩循环，消耗资源并阻塞交互。
    *   **社区反应：** 4 条评论，多位用户反馈类似现象。
6.  **[BUG] 会话压缩忽略配置 (compaction ignores "auto: false")** (#32385)
    *   **重要性：** 配置失效。用户明确禁用自动压缩后，系统仍强制执行，破坏了高级用户的上下文管理预期。
    *   **社区反应：** 2 条评论，已关闭。
7.  **[FEATURE] 按聊天保留模型选择 (Preserve Model Selection Per Chat)** (#17873)
    *   **重要性：** 提升多模型工作流体验。当前全局切换模型会导致历史对话上下文混乱，用户希望每个 Chat 独立绑定模型。
    *   **社区反应：** 4 条评论，0 个赞，需求明确。
8.  **[BUG] Windows 桌面版升级后无法启动** (#12598)
    *   **重要性：** 阻碍新用户或升级用户的正常使用，属于基础可用性故障。
    *   **社区反应：** 16 条评论，虽已关闭但反映安装/升级流程存在隐患。
9.  **[BUG] Qwen 3.7 Plus/Max 工具调用失败** (#33618)
    *   **重要性：** 特定热门模型兼容性问题。Qwen 3.7 系列通过 OpenRouter 使用时，工具名称为空导致执行中止。
    *   **社区反应：** 3 条评论，涉及具体模型适配。
10. **[BUG] 桌面版 Question 工具遮挡对话线程** (#32791)
    *   **重要性：** 桌面端 UX 缺陷。全屏覆盖的 Question 卡片使得用户无法回顾之前的上下文，影响复杂任务的连贯性。
    *   **社区反应：** 4 条评论，2 个赞，已有对应 PR 修复。

## 4. 重要 PR 进展
以下挑选了 10 个关键的 Pull Requests：

1.  **feat(tui): 添加子代理选择器 (Child Agent Picker)** (#34135)
    *   **内容：** 重构 TUI 界面，引入子代理选择器，支持在父子会话间快速切换，优化了多代理工作流的导航体验。
2.  **fix(app): 修复主页会话列表滚动条空间预留** (#34132)
    *   **内容：** 视觉优化。确保会话列表右侧为自定义滚动条预留空间，防止 Hover 状态和归档状态被遮挡。
3.  **fix(opencode): 清理 Gemini Schema 中的 required 字段** (#34129)
    *   **内容：** 兼容性修复。解决 Google Function Calling API 对非 object 类型 schema 中 "required" 字段的严格校验，修复 Effect Schema 生成的 Nullable Union 问题。
4.  **refactor(core): 重构 Location Node 功能并集成至 v2** (#34119)
    *   **内容：** 架构改进。分离位置节点逻辑，为后续版本的核心代码现代化做准备。
5.  **fix(app): Question UX 修复与改进** (#34116)
    *   **内容：** 综合 UX 修复。解决了描述截断 (#14924)、全屏遮挡 (#32791) 等多个前端显示问题，提升了桌面端交互流畅度。
6.  **fix(skill): 将 v2 插件技能包含在旧版列表中** (#33918)
    *   **内容：** 兼容性修复。确保 `/skills` 命令和实例技能 API 能正确识别 v2 插件注册的技能，同时保留现有行为。
7.  **fix(mcp): 请求刷新令牌范围 (Refresh Token Scope)** (#34125)
    *   **内容：** 安全/认证修复。向后移植 MCP SEP-2207 规范，正确处理 `offline_access` 范围，确保动态注册和浏览器授权的一致性。
8.  **fix(tui): 添加纯文本粘贴支持** (#34123)
    *   **内容：** 功能增强。新增 `Ctrl+Alt+V` 快捷键，允许在 TUI 中直接粘贴纯文本，解决路径粘贴行为不一致的问题 (#34006)。
9.  **fix(plan): 计划退出时不携带计划模型到构建代理** (#29457)
    *   **内容：** 逻辑修复。修正 `plan_exit` 后的模型继承逻辑，防止错误的模型上下文污染后续的构建阶段。
10. **fix(opencode): 限制 Codex 流式传输停滞** (#29446)
    *   **内容：** 稳定性修复。处理 ChatGPT/Codex OAuth 流在前端请求停滞时的超时问题，避免会话永久挂起。

## 5. 功能需求趋势
从 Issues 和 PR 中提炼出以下社区关注趋势：

*   **计费与订阅灵活性：** 用户对“Pay Go”模式的定价透明度（随上游模型降价调整）和新支付方式（加密货币）有强烈需求。
*   **代理稳定性与错误恢复：** 社区高度关注 Agent 在处理截断输出、空响应或无效工具调用时的鲁棒性。防止“死循环”和“静默失败”是当前最高优先级的技术债。
*   **上下文管理精细化：** 用户希望拥有更细粒度的控制，包括按会话锁定模型、手动控制压缩时机（禁用自动压缩）、以及更好的长上下文查看方式（如折叠 Question 卡片）。
*   **桌面端与 TUI 体验统一：** 解决桌面端特有的 UX 问题（粘贴行为、本地化翻译、滚动条布局）以及 TUI 中的导航效率（子代理切换）是近期的开发重点。
*   **新模型兼容性：** 随着 Qwen 3.7、GLM-5.2、GPT-5.5 等新模型的推出，底层 Schema 处理和工具调用格式的适配成为高频维护项。

## 6. 开发者关注点
开发者反馈中的核心痛点总结如下：

1.  **无限循环与状态卡死：** 多个 Issue (#31152, #32385, #34124) 指向会话压缩机制的缺陷，导致应用假死或资源耗尽。这是影响用户体验最严重的 Bug 类别。
2.  **工具调用 (Tool Calls) 的脆弱性：** 当 LLM 输出格式不符合预期（如截断、空名称、Schema 不匹配）时，系统缺乏有效的降级或修复机制，容易陷入重试地狱或静默错误 (#18108, #33618, #34126)。
3.  **配置与行为不一致：** 用户配置的选项（如禁用压缩、模型选择）未能按预期生效，或者在不同环境（Desktop vs Terminal）下表现不一 (#34006, #17873)。
4.  **特定 Provider 的边缘情况：** 在使用 Bedrock、OpenRouter 等第三方 Provider 时，偶发的空响应或网络超时处理不当，导致任务中断。
5.  **UI/UX 的细节打磨：** 虽然核心功能强大，但在桌面端的细节交互（如文件路径点击、Question 弹窗遮挡、菜单本地化）上仍有较多改进空间，影响了专业用户的流畅度。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报
**日期**: 2026-06-27
**数据来源**: github.com/badlogic/pi-mono

## 1. 今日速览
今日 Pi 社区活跃度极高，共处理 29 个 Issue 和 6 个 PR。**核心焦点**集中在嵌入式库（Library Mode）的稳定性修复、TUI 渲染器的交互体验优化以及多模型提供商（如 Friendli、Amazon Bedrock Mantle）的集成支持。此外，针对 Anthropic OAuth 令牌检测和长运行工具会话超时的问题也迎来了关键修复。

## 2. 版本发布
*   **无新版本发布**。过去 24 小时内未检测到新的 Release 标签。

## 3. 社区热点 Issues
以下 10 个 Issue 因涉及核心功能、广泛影响或重大改进而备受关注：

1.  **[Bug] Streaming markdown forces scroll to bottom** (#5825)
    *   **重要性**: 严重影响阅读体验，用户滚动查看历史消息时会被强制拉回底部，尤其在开启 `clear on shrink` 时。
    *   **状态**: Open | **互动**: 33 评论 | **作者**: xl0
2.  **[Bug] TUI full redraw clears terminal scrollback** (#6050)
    *   **重要性**: 导致终端滚动历史丢失，破坏调试和回顾上下文的能力，根因在于核心 TUI 渲染器。
    *   **状态**: Closed | **互动**: 11 评论 | **作者**: AeonDave
3.  **[Feature] Add amazon-bedrock-mantle provider** (#5363)
    *   **重要性**: 填补 AWS Bedrock Mantle 模型在 OpenAI 兼容接口下的支持空白，对使用 AWS 生态的用户至关重要。
    *   **状态**: Open | **互动**: 15 评论 | **作者**: tasadurian
4.  **[Bug] AgentSession settlement/continuation bugs** (#5886)
    *   **重要性**: 米哈游创始人 @mitsuhiko 提出的元问题，揭示了代理生命周期管理的深层架构缺陷，影响后续稳定性。
    *   **状态**: Open | **互动**: 3 评论 | **作者**: mitsuhiko
5.  **[Bug] Scoped Anthropic API keys need necessary request params** (#6093)
    *   **重要性**: 修复了 Claude Code 作用域密钥无法正确识别和发送请求头的问题，影响特定企业用户。
    *   **状态**: Closed | **互动**: 3 评论 | **作者**: ahxxm
6.  **[Bug] Embedded library: theme Proxy throws "Theme not initialized"** (#6102)
    *   **重要性**: 阻碍了将 Pi 作为库嵌入第三方应用的场景，修复后可扩展 Pi 的集成边界。
    *   **状态**: Closed | **互动**: 1 评论 | **作者**: wloonis
7.  **[Bug] Embedded library: shared extension runtime is poisoned** (#6101)
    *   **重要性**: 解决了嵌入式模式下多会话间上下文污染导致的崩溃问题，对开发者集成 Pi 极为关键。
    *   **状态**: Closed | **互动**: 1 评论 | **作者**: wloonis
8.  **[Bug] Compaction summary is displayed out of place after session reload** (#6100)
    *   **重要性**: 会话重载后压缩摘要位置错乱，影响长对话上下文的可读性和逻辑连贯性。
    *   **状态**: Closed | **互动**: 1 评论 | **作者**: xl0
9.  **[Bug] User messages get incorrectly escaped** (#6105)
    *   **重要性**: 基础输入处理 Bug，导致引号等特殊字符显示异常，影响基本交互。
    *   **状态**: Closed | **互动**: 1 评论 | **作者**: travisp
10. **[Feature] Add support for 'max' thinking level** (#6097)
    *   **重要性**: 响应 OpenAI 新模型 GPT-5.6 Sol 的功能需求，支持更高级别的思维链控制。
    *   **状态**: Open | **互动**: 0 评论 | **作者**: mattiacerutti

## 4. 重要 PR 进展
以下 6 个 PR 代表了当前的主要开发动向：

1.  **#6026 [fix] stabilize working status row**
    *   **作者**: xl0 | **状态**: Open
    *   **内容**: 修复 TUI 工作状态行的闪烁或不稳定显示，直接关联 Issue #5825 的 UX 改进。
2.  **#6099 [fix] Rename model key from 'gpt-5.2-chat-latest' to 'gpt-5.2-chat'**
    *   **作者**: vamshi9666 | **状态**: Closed
    *   **内容**: 纠正模型键名错误，确保与 OpenAI 实际可用的模型名称一致。
3.  **#6064 [feat] pi orchestrator**
    *   **作者**: cristinaponcela | **状态**: Closed
    *   **内容**: 新增实验性的本地编排器守护进程，通过 IPC 管理 Pi 实例的生命周期（启动、列表等），为多实例并发奠定基础。
4.  **#6087 [fix] remove hardcoded RPC wait timeout**
    *   **作者**: mizuikki | **状态**: Closed
    *   **内容**: 移除 `RpcClient` 中硬编码的 60 秒等待上限，解决长运行工具会话（如搜索）意外失败的问题。
5.  **#6092 [draft] hosted websearch**
    *   **作者**: ahxxm | **状态**: Closed (Draft)
    *   **内容**: 尝试实现托管式网络搜索工具，目前标记为草稿，旨在解决 Agent Loop 中搜索工具的唤醒问题。
6.  **#6090 [feat] add Friendli provider**
    *   **作者**: Lee-Si-Yoon | **状态**: Closed
    *   **内容**: 正式添加 Friendli 作为内置提供商，支持 OpenAI 兼容接口，默认模型为 GLM-5.2。

## 5. 功能需求趋势
*   **嵌入式集成稳定性**: 多个 Issue (#6101, #6102) 和 PR 聚焦于将 Pi 作为库（Library）嵌入其他应用时的主题初始化、会话隔离和扩展运行时污染问题，表明 **Pi-as-a-Library** 是当前的重点演进方向。
*   **提供商多样性与兼容性**: 社区持续推动对新提供商的支持，包括 **Amazon Bedrock Mantle** (#5363)、**Friendli** (#6090/#6091) 以及对 Anthropic OAuth 令牌的更灵活配置 (#5871/#6093)。
*   **TUI/UX 精细化**: 用户对滚动行为 (#5825)、终端历史记录保留 (#6050)、视图跳转 (#6073) 等细节极其敏感，要求更平滑的交互体验。
*   **长任务可靠性**: 针对 RPC 超时 (#6088) 和会话压缩失败 (#5676) 的修复，反映出对**长时间运行任务**和**复杂工作流**稳定性的迫切需求。

## 6. 开发者关注点
*   **会话生命周期管理**: 会话重载后的状态一致性（如压缩摘要位置 #6100、编辑失败 #4990）、Agent 生命周期的元问题 (#5886) 是开发者讨论的热点。
*   **配置与鉴权灵活性**: Anthropic 的 OAuth 检测机制过于僵化 (#5871)，需要更通用的密钥类型声明方式。
*   **Windows 路径处理**: 发现 `find` 命令在 Windows 裸盘符下存在路径解析 Bug (#6104)，提示跨平台文件系统处理的潜在风险。
*   **扩展运行时污染**: 嵌入式场景下，`dispose()` 导致的上下文失效 (#6101) 是阻碍大规模集成的主要痛点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：** 2026-06-27
**数据来源：** github.com/QwenLM/qwen-code

## 1. 今日速览
Qwen Code 在 2026-06-27 发布了 `v0.19.2` 及后续 Nightly 构建，重点修复了 `web_fetch` 的 JSON 回退机制及桌面端源路径验证的安全漏洞。社区高度关注 `serve` 模式的 Mode B 生产就绪路线图，同时针对 Windows 端 PowerShell 进程泄漏导致的 OOM 问题及 TUI 僵尸进程冻结现象展开了激烈讨论。

## 2. 版本发布
**v0.19.2-nightly.20260627.d93bec905**
*   **核心修复：** 允许 `web_fetch` 在特定情况下使用 JSON 回退机制，提升网络请求稳定性。
*   **常规维护：** 包含常规依赖更新及内部 CI 流程调整。
*   **相关驱动：** 同步发布了 `cua-driver-rs v0.6.8`，提供 macOS (codesigned/notarized)、Linux 和 Windows 的预编译二进制文件，支持相对坐标功能。

## 3. 社区热点 Issues
以下 Issue 因讨论热度高或影响范围广而备受关注：

1.  **[Mode B Roadmap]** `proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready` (#4175)
    *   **重要性：** 规划 `qwen serve` 的 Daemon 模式生产就绪路线，涉及多会话复用和 HTTP/SSE 路由完善。
    *   **链接：** [Issue #4175](https://github.com/QwenLM/qwen-code/issues/4175)
2.  **[Windows OOM Bug]** `难绷逆天BUG：用一次工具开一个powershell 并且不再关闭 直到OOM` (#5873)
    *   **重要性：** 严重内存泄漏问题，Windows 用户复现率极高，直接导致 IDE 崩溃。
    *   **链接：** [Issue #5873](https://github.com/QwenLM/qwen-code/issues/5873)
3.  **[TUI 冻结]** `TUI 卡死，疑似僵尸子进程未被回收导致界面冻结` (#5083)
    *   **重要性：** Linux 环境下主进程未回收僵尸子进程导致 TUI 无响应，影响核心交互体验。
    *   **链接：** [Issue #5083](https://github.com/QwenLM/qwen-code/issues/5083)
4.  **[MCP 连接假阳性]** `[Bug Report] MCP Server "filesystem" shows connected on UI, but tools are not available` (#4218)
    *   **重要性：** MCP 服务器连接状态与实际可用性不一致，阻碍模型执行文件系统操作。
    *   **链接：** [Issue #4218](https://github.com/QwenLM/qwen-code/issues/4218)
5.  **[Token 消耗异常]** `奇怪的bug，升级以后默认会使用更高单价的model自动修改setting.json` (#5819)
    *   **重要性：** 自动升级行为导致非预期的 Token 高额消耗，引发用户对成本控制和安全性的担忧。
    *   **链接：** [Issue #5819](https://github.com/QwenLM/qwen-code/issues/5819)
6.  **[安全漏洞修复]** `Source deletion accepts path-like slugs that can escape the sources directory` (#5834)
    *   **重要性：** 存在路径遍历风险，恶意 Slug 可能导致删除工作区外文件。
    *   **链接：** [Issue #5834](https://github.com/QwenLM/qwen-code/issues/5834)
7.  **[IDE 认证问题]** `rider无法登录qwen code` (#4493)
    *   **重要性：** JetBrains Rider 用户遇到 OAuth 重定向循环，无法调用阿里云 Token Plan 模型。
    *   **链接：** [Issue #4493](https://github.com/QwenLM/qwen-code/issues/4493)
8.  **[反病毒误报]** `Trojan:JS/ShaiWorm.DBA!MTB` (#5055)
    *   **重要性：** VSIX 插件被主流杀毒软件误报为木马，影响 Windows 用户安装信任度。
    *   **链接：** [Issue #5055](https://github.com/QwenLM/qwen-code/issues/5055)
9.  **[长会话性能]** `Reduce memory usage of long-running tasks` (#2036)
    *   **重要性：** 长期运行的任务占用高达 4-8GB 内存，切换模型耗时过长，影响大型项目体验。
    *   **链接：** [Issue #2036](https://github.com/QwenLM/qwen-code/issues/2036)
10. **[自动 Cron 任务]** `/loop cron tasks fire silently with no visibility` (#5823)
    *   **重要性：** 后台定时任务静默执行且不可见，用户无法管理或停止，造成资源浪费。
    *   **链接：** [Issue #5823](https://github.com/QwenLM/qwen-code/issues/5823)

## 4. 重要 PR 进展
以下 PR 对核心功能、安全性和用户体验有显著改进：

1.  **ACP 权限投票跨连接修复** `fix(daemon): resolve ACP permission votes across connections` (#5912)
    *   **内容：** 修复 Daemon 模式下，权限请求 ID 未跨连接关联的问题，确保断开重连后权限决策能正确应用。
    *   **链接：** [PR #5912](https://github.com/QwenLM/qwen-code/pull/5912)
2.  **桌面端源 Slug 验证规范化** `fix(desktop): normalize source slug validation errors` (#5911)
    *   **内容：** 配合安全修复，将无效的 Legacy Slug 路径转换为结构化验证结果，防止未捕获异常。
    *   **链接：** [PR #5911](https://github.com/QwenLM/qwen-code/pull/5911)
3.  **Web Shell 代码块流式高亮** `feat(web-shell): stream-highlight code blocks and fix fence-language aliases` (#5869)
    *   **内容：** 优化 Web Shell 中代码块的流式渲染，解决闪烁问题并修复语言别名解析。
    *   **链接：** [PR #5869](https://github.com/QwenLM/qwen-code/pull/5869)
4.  **本地 OpenAI 后端跳过建议** `fix(cli): skip default follow-up suggestions on local OpenAI backends` (#5821)
    *   **内容：** 针对 localhost/127.0.0.1 等本地后端，默认禁用后续建议功能，减少不必要的 API 调用。
    *   **链接：** [PR #5821](https://github.com/QwenLM/qwen-code/pull/5821)
5.  **Loop 任务持久化注入** `feat(loop): inject a .qwen/loop.md task file at fire time via sentinels` (#5890)
    *   **内容：** 引入 `.qwen/loop.md` 文件机制，使长时间运行的 Loop 任务能读取可编辑的任务列表，无需每次重复 Prompt。
    *   **链接：** [PR #5890](https://github.com/QwenLM/qwen-code/pull/5890)
6.  **Provider 并发请求限制** `feat(core): cap concurrent in-flight requests per provider` (#3636)
    *   **内容：** 增加每 Provider 的请求并发上限，防止触发上游 Rate Limit (429) 错误，实现客户端背压。
    *   **链接：** [PR #3636](https://github.com/QwenLM/qwen-code/pull/3636)
7.  **ACP 会话流可恢复性** `feat(daemon,sdk): resumable /acp session stream (Last-Event-ID)` (#5852)
    *   **内容：** 基于 SSE Last-Event-ID 实现 ACP 会话流的断点续传，增强网络不稳定性下的连接鲁棒性。
    *   **链接：** [PR #5852](https://github.com/QwenLM/qwen-code/pull/5852)
8.  **Vision 模型备用配置** `feat(cli): add /model --vision for a fallback vision model` (#5778)
    *   **内容：** 新增 `/model --vision` 命令，允许配置独立的视觉模型，当主文本模型收到图片时自动借用。
    *   **链接：** [PR #5778](https://github.com/QwenLM/qwen-code/pull/5778)
9.  **多玩家频道 Agent (RFC)** `feat(channels): qwen tag — RFC + Phase 0 (multiplayer channel-resident agent)` (#5888)
    *   **内容：** 提出在聊天群组（如钉钉）中常驻多玩家 Agent 的设计方案，基于现有 Channel Adapters 构建。
    *   **链接：** [PR #5888](https://github.com/QwenLM/qwen-code/pull/5888)
10. **清理周期负值拦截** `fix(serve): reject negative cleanupPeriodDays values` (#5906)
    *   **内容：** 在 Schema 层面增加 `minimum: 0` 约束，防止用户通过 API 设置负数的清理周期导致逻辑错误。
    *   **链接：** [PR #5906](https://github.com/QwenLM/qwen-code/pull/5906)

## 5. 功能需求趋势
*   **Daemon & Serve 模式成熟化：** 社区大量讨论集中在 `qwen serve` 的生产就绪特性（Mode B），包括会话管理、权限持久化、跨连接状态同步以及后台 Cron 任务的可视化控制。
*   **自动化与 Agent 能力增强：** 对 `/loop` 任务的持久化、多玩家频道 Agent 的支持以及 Plan Approval Gate 的扩展显示出用户对更自主、更复杂的 Agent 工作流的需求。
*   **多模态与模型灵活性：** 新增独立 Vision 模型配置选项，反映用户希望在不改变主文本模型的情况下灵活处理图像任务的需求。
*   **资源管理与成本控制：** 针对 Token 意外消耗、内存泄漏（OOM）和并发限制的讨论表明，用户对运行效率和成本透明度极为敏感。

## 6. 开发者关注点
*   **平台稳定性与 Bug 修复：** Windows 端的 PowerShell 进程泄漏和 Linux 端的 TUI 冻结是当前最紧迫的体验痛点，急需修复。
*   **安全性与路径遍历：** 随着 Daemon 和文件操作功能的深入，用户密切关注源路径（Source Slug）验证、权限隔离以及潜在的目录逃逸风险。
*   **IDE 集成兼容性：** Rider 和 IntelliJ 的 OAuth 登录失败、VSCode 插件的反病毒误报问题，影响了跨平台的统一体验。
*   **调试可见性：** 用户希望获得更透明的后台任务状态（如 Cron 任务列表）、更清晰的错误诊断信息以及更稳定的流式输出渲染。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：** 2026-06-27
**数据来源：** github.com/Hmbown/DeepSeek-TUI (CodeWhale)

## 1. 今日速览
今日社区活动聚焦于 **v0.8.59 发布前的最终清理** 与 **OpenModel 提供商支持** 的整合。主要亮点包括：修复了安装脚本返回 HTML 的错误 (#3582)，合并了 OpenModel 提供商支持 (#3677/#3585)，以及针对 TUI 编辑器冻结 (#3657) 和计划/代理模式混淆 (#3568) 等新出现的严重 Bug 进行了快速响应。同时，依赖项更新活跃，涉及 `rusqlite`、`sha2` 及 Docker 构建动作的重大版本升级。

## 2. 版本发布
*   **v0.8.59 (进行中):** 目前无正式 Release 发布，但 Issue #3063 显示 v0.8.59 正处于“稳定化 + 维护队列”阶段。重点修复 macOS 上的 TUI 鼠标报告泄漏问题，并清理待处理的 PR 和 Issue。
*   **v0.8.58:** 已在近期发布，作为当前稳定基线。

## 3. 社区热点 Issues
以下 Issue 在过去24小时内更新，反映了用户最紧迫的需求和问题：

1.  **[Bug] Editor Freezes and Crashes Codewhale (#3657)**
    *   **重要性:** 严重稳定性问题。用户在输入 'd' 进入草稿模式后，编辑器完全冻结，需强制杀进程。
    *   **状态:** OPEN | 作者: buko
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3657)

2.  **[Bug] Plan and agent mode mixed up (#3568)**
    *   **重要性:** 核心功能逻辑缺陷。AI 未能正确感知 Plan/Agent 模式切换，导致在 Plan 模式下错误尝试文件修改方法。
    *   **状态:** OPEN | 作者: DracheTek
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3568)

3.  **[Bug] install.sh endpoint returns HTML instead of shell script (#3582)**
    *   **重要性:** 阻碍新用户安装。官方推荐的 `curl | sh` 安装方式因服务器返回 HTML 页面而失败。
    *   **状态:** CLOSED (已修复) | 作者: noaft
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3582)

4.  **[Enhancement] Exposed main prompt for broader use cases (#3638)**
    *   **重要性:** 扩展适用场景。用户希望将 TUI 用于文学创作等非软件工程场景，请求将硬编码提示词改为可配置的 Config 链接。
    *   **状态:** OPEN | 作者: DracheTek
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3638)

5.  **[Bug] Thinking collapse - multiple root causes (#861)**
    *   **重要性:** 长期存在的推理块显示问题，包括思维冻结、静默截断或内容丢失。
    *   **状态:** CLOSED (作为 v0.8.59 追踪的一部分) | 作者: ZhouChaunge
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/861)

6.  **[Enhancement] feat(execpolicy): add typed persistent permission rules (#1186)**
    *   **重要性:** 安全与权限控制增强。建议基于工具名、命令前缀、路径模式等维度添加细粒度的持久化执行权限规则。
    *   **状态:** OPEN | 作者: greyfreedom
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/1186)

7.  **[Documentation] v0.8.71: Legacy follow-up and dead-code inventory (#3490)**
    *   **重要性:** 代码库维护。清理 `allow(dead_code)` 标记和过时的“后续”注释，为 v0.9 的大规模工作流扩展做准备。
    *   **状态:** OPEN | 作者: Hmbown
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3490)

8.  **[Bug] SSE多智能体并行在windows11下依旧45s超时 (#1679)**
    *   **重要性:** Windows 平台兼容性。多智能体并行执行时出现超时和 UI 错乱，降级为串行后仍存在问题。
    *   **状态:** CLOSED (作为 v0.8.66 相关任务处理) | 作者: xaviertung
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/1679)

9.  **[Enhancement] Replace hard-coded localization file (#3537)**
    *   **重要性:** 国际化维护性。当前 `localization.rs` 超过 5000 行且硬编码，建议引入专用 i18n 库以提高可维护性和编译速度。
    *   **状态:** CLOSED (已合并/处理) | 作者: hongqitai
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/3537)

10. **[EPIC] Staged command-boundary refactor (#2870)**
    *   **重要性:** 架构重构。跟踪 #2791 的命令边界重构工作，旨在分阶段合并较小的 PR 以降低风险。
    *   **状态:** OPEN | 作者: aboimpinto
    *   [链接](https://github.com/Hmbown/CodeWhale/issues/2870)

## 4. 重要 PR 进展
以下 PR 展示了近期的关键功能交付和技术债务清理：

1.  **feat(provider): add OpenModel support (#3677)**
    *   **内容:** 正式支持 OpenModel 提供商，默认路由至 `deepseek-v4-flash`，整合了 Anthropic Messages 协议支持。
    *   **状态:** CLOSED | 作者: Hmbown (合并自 #3585)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3677)

2.  **docs: add WeCom Bridge deployment guide (#3678)**
    *   **内容:** 补充企业微信桥接器的部署指南和安全章节，涵盖前置条件、配置、配对及生产环境部署建议。
    *   **状态:** CLOSED | 作者: Hmbown (合并自 #3640)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3678)

3.  **feat(memory): wire moraine-mcp as recall tool source (#3575)**
    *   **内容:** 接入 Moraine MCP 作为记忆检索工具源，提供会话搜索、文件注意力等功能，并添加配置门控以弃用旧机制。
    *   **状态:** OPEN | 作者: pkeging
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3575)

4.  **build(deps): bump rusqlite to 0.39.0 (#3675)**
    *   **内容:** 升级 SQLite 驱动至 0.39.0。避免直接升级至 0.40.1 导致的本地验证失败问题，保持稳定性。
    *   **状态:** CLOSED | 作者: Hmbown (覆盖 #3668)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3675)

5.  **fix(hash): support sha2 0.11 digest hex (#3673)**
    *   **内容:** 适配 `sha2` 0.11 版本的变更，替换直接的 `LowerHex` 格式化，确保 CLI/TUI 等模块哈希输出的一致性。
    *   **状态:** CLOSED | 作者: Hmbown
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3673)

6.  **refactor(runtime-api): extract auth helpers (#3674)**
    *   **内容:** 将运行时 API 的身份验证/令牌/Cookie 辅助函数提取到独立模块，保持路由器代码整洁。
    *   **状态:** CLOSED | 作者: cyq1017
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3674)

7.  **fix(telegram): debounce turn sequence writes (#3665)**
    *   **内容:** 优化 Telegram 桥接器性能，对轮次序列写入进行防抖处理，防止高频 SSE 事件导致的状态冲突。
    *   **状态:** CLOSED | 作者: cyq1017
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3665)

8.  **fix(provider-links): update fallback docs URL (#3676)**
    *   **内容:** 修复提供商文档链接的回退 URL，使其指向正确的 CodeWhale 文档页，并添加千帆特定链接。
    *   **状态:** CLOSED | 作者: Hmbown (合并自 #3621)
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3676)

9.  **chore: reactivate stale issue cleanup (#3607)**
    *   **内容:** 重新激活过时 Issue 清理工作流，定义标签策略（如 `needs-info`, `stale`），自动归档无响应的 Bug 报告。
    *   **状态:** OPEN | 作者: Hmbown
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3607)

10. **build(deps): bump docker/build-push-action from 6 to 7 (#3667)**
    *   **内容:** 升级 GitHub Actions 中的 Docker 构建推送动作至 v7，利用新版特性优化 CI/CD 流程。
    *   **状态:** CLOSED | 作者: dependabot[bot]
    *   [链接](https://github.com/Hmbown/CodeWhale/pull/3667)

## 5. 功能需求趋势
1.  **提供商扩展性:** 社区高度关注新模型提供商的支持，特别是 **OpenModel** 的集成，表明用户对多样化后端路由有强烈需求。
2.  **内存与上下文管理:** 通过 **Moraine MCP** 的接入和 **Token 优化** (Issues #2953, #2956, #2957)，用户和开发者正致力于减少输入/输出 Token 消耗，提升长上下文处理的效率。
3.  **跨平台稳定性:** Windows 下的多智能体超时 (#1679) 和 macOS 下的鼠标泄漏 (#3063) 显示，**OS 特异性 Bug 修复** 是当前维护的重中之重。
4.  **非编程场景适配:** 用户提出将 TUI 用于文学创作等场景 (#3638)，暗示需要更灵活的提示词配置和更通用的交互模式，而非仅限于软件工程。

## 6. 开发者关注点
*   **安装体验:** 安装脚本返回 HTML 而非 Shell 脚本是一个明显的文档/基础设施错误，需立即修复以保证新用户留存 (#3582)。
*   **模式识别准确性:** Plan 和 Agent 模式的混淆 (#3568) 直接影响了 AI 行为的正确性，开发者需加强模式切换的状态管理和提示词隔离。
*   **依赖项升级风险:** 连续多个 PR 处理 `rusqlite`、`sha2`、`axum` 等核心依赖的升级，反映出项目正在积极跟进上游安全更新和 API 变更，但需小心处理 Breaking Changes（如 `sha2` 的 Hex 格式差异）。
*   **UI/UX 细节:** 编辑器冻结 (#3657) 和 IME 输入法下的占位符可见性问题 (#2612) 表明，底层渲染引擎与终端输入事件的同步机制仍需精细打磨。

</details>

---
*本日报由 [agents-radar](https://github.com/Chestnuts-0/os-feed) 自动生成。*